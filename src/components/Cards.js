import React from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card(props) {
    const currentUser=React.useContext(CurrentUserContext)
    const isOwn = props.owner === currentUser._id;
    const isLiked = props.likes.some(i => i.owner === currentUser._id);
    const cardLikeButtonClassName = `photo-grid__like ${isLiked ? 'photo-grid__like_active': 'photo-grid__like'}`



    console.log(Card)
    function handleClick() {
        props.onCardClick(props.card);
    }
    return(

            <div className="photo-grid__item">

                <button type="button" className="photo-grid__item_delete" style={isOwn ?{visibility:'visible'}:{visibility:'hidden'}}/>
                <img className="photo-grid__view" alt={`${props.name}`} src={`${props.link} `} onClick={handleClick}/>
                <p className="photo-grid__text">{props.name}</p>
                <button type="button" className={cardLikeButtonClassName} />


                <p className="photo-grid__counter">{props.likes.length}</p>
            </div>

    )
}
export default Card