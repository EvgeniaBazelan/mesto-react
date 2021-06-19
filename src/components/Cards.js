import React from 'react';

function Card(props) {
    console.log(Card)
    function handleClick() {
        props.onCardClick(props.card);
    }
    return(

            <div className="photo-grid__item">

                <button type="button" className="photo-grid__item_delete"/>
                <img className="photo-grid__view" alt={`${props.name}`} src={`${props.link} `} onClick={handleClick}/>
                <p className="photo-grid__text">{props.name}</p>
                <button type="button" className="photo-grid__like" />


                <p className="photo-grid__counter">{props.likes}</p>
            </div>

    )
}
export default Card