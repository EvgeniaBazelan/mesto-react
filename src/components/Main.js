import React from 'react';


function Main() {
    const [isClick, setIsClick] = React.useState();
    function handleClick() {
        setIsClick(!isClick)
    }
    function handleEditAvatarClick(){
        handleClick()
        document.querySelector('.popup_update').classList.add('popup_open',isClick)
    }
    function handleEditProfileClick(){
        handleClick()
        document.querySelector('.popup_edit-profile').classList.add('popup_open',isClick)
    }
    function handleAddPlaceClick(){
        handleClick()
        document.querySelector('.popup_add-place').classList.add('popup_open',isClick)
    }
    return(
        <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <div className="profile__cover" onClick={handleEditAvatarClick} />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">Жак-Ив-Кусто</h1>
                    <p className="profile__profession">Исследователь океана</p>
                </div>
                <button type="button" className="profile__edit-button" onClick={handleEditProfileClick} />
                <button type="button" className="profile__add-button" onClick={handleAddPlaceClick} />

            </section>



        </main>
    )
}
export default Main