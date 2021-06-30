import React,{useState,useEffect} from 'react';
import Header from './Header'
import Main from "./Main";
import Footer from "./Footer";
import '../index.css';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";


function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen]=useState(false)
    const  [isAddPlacePopupOpen, setIsAddPlacePopupOpen]=useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen]=useState(false)
    const [isViewPopupOpen,setIsViewPopupOpen]=useState(false)
    const [currentUser,setCurrentUser]=useState([])

    useEffect(()=>{
        api.getUserInfo().then(response=>{

                console.log('response:',response)
            setCurrentUser(response)
            }

        ).catch(()=> {
            console.log("Ошибка при получении информации")
        })},[])



    function closeAllPopups() {
        setIsEditProfilePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsViewPopupOpen(false)
        setSelectedCard({name: '', link: ''})
    }
    function handleViewClick() {
        setIsViewPopupOpen(!isViewPopupOpen)

    }
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)

    }
    function handleEditProfileClick(){
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
    }
    function handleAddPlaceClick(){
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
    }

const [selectedCard,setSelectedCard]= useState({name: '', link: ''})
    const handleCardClick= (item) => {
        console.log("privet")
        if (item !== undefined) {
            console.log("poka")
            const formattedCardForOpen={
                link:item.link,
                name:item.name,
            }
            setSelectedCard(formattedCardForOpen)
            handleViewClick()
        }
    }

  return (

      <div className="page">
          <CurrentUserContext.Provider value={currentUser}>
      <Header />


          <Main  onEditAvatar={handleEditAvatarClick}
                  onAddPlace={handleAddPlaceClick}
                  onEditProfile={handleEditProfileClick} onCardClick={handleCardClick}/>

          {/*<div className="photo-grid">*/}
          {/*    {cards.map((item)=>{*/}
          {/*        return(<Card key={item._id} {...item}/>)*/}

          {/*    })}*/}
          {/*</div>*/}
          <PopupWithForm onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} name="edit-profile" title="Редактировать профиль" btnText="Сохранить">
              <fieldset className="form__personal-info">
              <input className="form__item " id='name' placeholder="Name" name="name" type="text" required minLength="2"
                     maxLength="40"/>
              <span className="form__item-error name-error "/>
              <input className="form__item " id='profession' placeholder="Profession" name="profession" type="text"
                     required minLength="2" maxLength="200"/>
              <span className="form__item-error profession-error"/>
          </fieldset>
      </PopupWithForm>
          <PopupWithForm onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} name="add-place" title="Новое место" btnText="Создать">
              <fieldset className="form__personal-info">
              <input className="form__item " id='title' placeholder="Название" name="title" type="text" required
                     minLength="2" maxLength="30"/>
              <span className="form__item-error title-error"/>
              <input className="form__item " id='link' placeholder="Ссылка на картинку" name="link" type="url" required/>
              <span className="form__item-error link-error"/>
          </fieldset>
          </PopupWithForm>

          <ImagePopup card={selectedCard} isOpen={isViewPopupOpen} name="view" onClose={closeAllPopups}/>

          <PopupWithForm name="confirm" title="Вы уверенны?" btnText="Да" />
          <PopupWithForm onClose={closeAllPopups} isOpen = {isEditAvatarPopupOpen} name="update" title="Обновить аватар" btnText="Сохранить">
              <fieldset className="form__personal-info">

              <input className="form__item " id='linkAvatar' placeholder="Ссылка на аватар" name="link" type="url"
                     required/>
              <span className="form__item-error linkAvatar-error"/>
          </fieldset>
      </PopupWithForm>

      <Footer />

          </CurrentUserContext.Provider>
      </div>

  );
}

export default App;
