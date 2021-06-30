import React, {useEffect, useState} from 'react';
import Card from "./Cards";
import api from "../utils/Api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main(props) {
    const currentUser=React.useContext(CurrentUserContext)

    const [cards,setCards]=useState([])
    const handleRequestCards=()=>{
        api.getInitialCards().then(response=>{
                console.log('response:',response)
                const formattedCards=response.map(item=>{
                    return{
                        _id:item._id,
                        link:item.link,
                        name:item.name,
                        likes:item.likes,
                        owner:item.owner._id
                    }
                })
                setCards(formattedCards)
            }

        ).catch(()=> {
            console.log("Ошибка при загрузке карточек")
        })
    }
    useEffect(()=>{
        handleRequestCards()},[])

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            console.log(newCard)
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        }).catch(()=> {
            console.log("Ошибка при смене лайка")
        })
    }
    function handleCardDelete(card) {
        api.deleteMyCard(card._id).then((newCard) => {
            console.log(newCard)
            setCards((state) => state.filter((c) => c.owner._id !== currentUser._id));
        }).catch(()=> {
            console.log("Ошибка при удаление карточки")
        })
    }


    return(
        <main className="content">
            <section className="profile">
                <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }} >
                    <div className="profile__cover" onClick={props.onEditAvatar} />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <p className="profile__profession">{currentUser.about}</p>
                </div>
                <button type="button" className="profile__edit-button" onClick={props.onEditProfile} />
                <button type="button" className="profile__add-button" onClick={props.onAddPlace} />

            </section>
            <div className="photo-grid">
                {cards.map((card)=>{
                   return(<Card card={card} onCardClick={props.onCardClick} onCardDelete={handleCardDelete} onCardLike={handleCardLike} key={card._id} {...card} />)

             })}
                {/*{props.children}*/}
            </div>

        </main>
    )
}
export default Main