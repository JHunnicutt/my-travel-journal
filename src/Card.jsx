import React from "react";

export default function Card(props) {
    return (
        <section className='card'>
            <img src={props.data.imageUrl} className='card__img' />
            <div className="card__info">
                <div className="card__location">
                    <img src='../public/map-pin.png' class='map-pin'/>
                    <h4>{props.data.location}</h4>
                    <a href={props.data.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h3 className="card__title">{props.data.title}</h3>
                <p className="card__date">{props.data.startDate} - {props.data.endDate}</p>
                <p className="card__description">{props.data.description}</p>
            </div>
        </section>
    )
}