import React from 'react';
import Card from "./Cards";


function Main(props) {


    return(
        <main className="content">
            <section className="profile">
                <div className="profile__avatar" style={{ backgroundImage: `url(${props.userAvatar})` }} >
                    <div className="profile__cover" onClick={props.onEditAvatar} />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{props.userName}</h1>
                    <p className="profile__profession">{props.userDescription}</p>
                </div>
                <button type="button" className="profile__edit-button" onClick={props.onEditProfile} />
                <button type="button" className="profile__add-button" onClick={props.onAddPlace} />

            </section>
            <div className="photo-grid">
                {props.children.map((child)=>{
                   return(<Card key={child._id} {...child} />)

             })}
                {/*{props.children}*/}
            </div>

        </main>
    )
}
export default Main