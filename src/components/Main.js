import React from 'react';


function Main(props) {


    return(
        <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <div className="profile__cover" onClick={props.onEditAvatar} />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">Жак-Ив-Кусто</h1>
                    <p className="profile__profession">Исследователь океана</p>
                </div>
                <button type="button" className="profile__edit-button" onClick={props.onEditProfile} />
                <button type="button" className="profile__add-button" onClick={props.onAddPlace} />

            </section>



        </main>
    )
}
export default Main