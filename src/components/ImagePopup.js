import React from 'react';

function ImagePopup() {
    return(
        <div className="popup popup_view">
            <div className="view">
                <button type="button" className="popup__close" name="close_view"/>
                <img className="view__photo" alt="#" src="#"/>
                <p className="view__text">"" </p>
            </div>
        </div>
    )
}
export default ImagePopup