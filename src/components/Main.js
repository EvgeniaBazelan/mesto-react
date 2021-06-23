import React, {useEffect, useState} from 'react';
import Card from "./Cards";
import api from "../utils/Api";


function Main(props) {
    const [user,setUser]=useState({})
    // let myId=null
    const handleRequestUserInfo=()=>{
        api.getUserInfo().then(response=>{
                // myId=response._id
                console.log('response:',response)
                const formattedUser= {userName:response.name,
                    userDescription:response.about,
                    userAvatar:response.avatar}


                setUser(formattedUser)
            }

        ).catch(()=> {
            console.log("Ошибка при получении информации")
        })
    }
    useEffect(()=>{
        handleRequestUserInfo()},[])
    const [cards,setCards]=useState([])
    const handleRequestCards=()=>{
        api.getInitialCards().then(response=>{
                console.log('response:',response)
                const formattedCards=response.map(item=>{
                    return{
                        _id:item._id,
                        link:item.link,
                        name:item.name,
                        likes:item.likes.length
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

    return(
        <main className="content">
            <section className="profile">
                <div className="profile__avatar" style={{ backgroundImage: `url(${user.userAvatar})` }} >
                    <div className="profile__cover" onClick={props.onEditAvatar} />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{user.userName}</h1>
                    <p className="profile__profession">{user.userDescription}</p>
                </div>
                <button type="button" className="profile__edit-button" onClick={props.onEditProfile} />
                <button type="button" className="profile__add-button" onClick={props.onAddPlace} />

            </section>
            <div className="photo-grid">
                {cards.map((card)=>{
                   return(<Card card={card} onCardClick={props.onCardClick} key={card._id} {...card} />)

             })}
                {/*{props.children}*/}
            </div>

        </main>
    )
}
export default Main