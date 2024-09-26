import React from "react"

export default function Entry(props) {
    return (
        <div className="entry">
            <img className="entry-img" src={props.entry.imageUrl} />
            <div className="entry-content">
                <div className="entry-location">
                    <img className="marker" src="../images/marker.png" />
                    <p className="infotext country">{props.entry.location}</p>
                    <a className="infotext link" href={props.entry.googleMapsUrl} target="_blank">
                        View on Google Maps
                    </a>
                </div>
                <h1 className="infohead">{props.entry.title}</h1>
                <h3 className="infotext">{props.entry.startDate} - {props.entry.endDate}</h3>
                <p className="infotext description">{props.entry.description}</p>
            </div>
        </div>
    );
}