import React,{useState, useEffect} from 'react';
import Header from './Header'
import Main from "./Main";
import Footer from "./Footer";
import '../index.css';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "./Api";
import Card from "./Cards";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen]=useState(false)
    const  [isAddPlacePopupOpen, setIsAddPlacePopupOpen]=useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen]=useState(false)
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)

    }
    function handleEditProfileClick(){
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
    }
    function handleAddPlaceClick(){
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
    }

    const [cards,setCards]=useState([])
    const handleRequest=()=>{
        api.getInitialCards().then(response=>{
            console.log('response:',response)
            const formattedCards=response.map(item=>{
                return{
                    id:item._id,
                    link:item.link,
                    name:item.name
                }
            })
            setCards(formattedCards)
            }

        )
    }
    useEffect(()=>{
        handleRequest()},[])
  return (
      <div className="page">
      <Header />
          <Main   onEditAvatar={handleEditAvatarClick}
                  onAddPlace={handleAddPlaceClick}
                  onEditProfile={handleEditProfileClick}/>
          <div className="photo-grid">
              {cards.map((item)=>{
                  return(<Card key={item._id} {...item}/>)

              })}
          </div>
          <PopupWithForm isOpen={isEditProfilePopupOpen} name="edit-profile" title="Редактировать профиль" btnText="Сохранить" children={<fieldset className="form__personal-info">
              <input className="form__item " id='name' placeholder="Name" name="name" type="text" required minLength="2"
                     maxLength="40"/>
              <span className="form__item-error name-error "/>
              <input className="form__item " id='profession' placeholder="Profession" name="profession" type="text"
                     required minLength="2" maxLength="200"/>
              <span className="form__item-error profession-error"/>
          </fieldset>}/>
          <PopupWithForm isOpen={isAddPlacePopupOpen} name="add-place" title="Новое место" btnText="Создать" children={<fieldset className="form__personal-info">
              <input className="form__item " id='title' placeholder="Название" name="title" type="text" required
                     minLength="2" maxLength="30"/>
              <span className="form__item-error title-error"/>
              <input className="form__item " id='link' placeholder="Ссылка на картинку" name="link" type="url" required/>
              <span className="form__item-error link-error"/>
          </fieldset>}/>

          <ImagePopup/>

          <PopupWithForm name="confirm" title="Вы уверенны?" btnText="Да" />
          <PopupWithForm isOpen = {isEditAvatarPopupOpen} name="update" title="Обновить аватар" btnText="Сохранить" children={<fieldset className="form__personal-info">

              <input className="form__item " id='linkAvatar' placeholder="Ссылка на аватар" name="link" type="url"
                     required/>
              <span className="form__item-error linkAvatar-error"/>
          </fieldset>}/>

      <Footer />



          <script type="module" src="../index.js"/>
      </div>
  );
}

export default App;
