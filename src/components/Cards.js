import React from 'react';
function Card(props) {
    console.log(Card)
    return(

            <div className="photo-grid__item">

                <button type="button" className="photo-grid__item_delete"/>
                <img className="photo-grid__view" alt={`${props.name}`} src={`${props.link}`}/>
                <p className="photo-grid__text">{props.name}</p>
                <button type="button" className="photo-grid__like"/>


                <p className="photo-grid__counter">0</p>
            </div>

    )
}
export default Card