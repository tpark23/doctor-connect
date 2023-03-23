/* ------------------
 *     DoctorCard
 * ------------------
 * A doctor "card" component that displays brief info about doctor such as
 * name, specialty, location, and review score. To be used as apart of ListView.
 */

import React from "react";
import './DoctorCard.css';

class DoctorCard extends React.Component {

    render() {
        const { doctor, onClick } = this.props;

        return(
            <div className="card" onClick={onClick}>
                <h2 className="card-doctor-name">{doctor.name}</h2>
                <h3 className="card-specialty">{doctor.specialty}</h3>
                <p className="card-location">{doctor.location}</p>
                <p className="card-rating">
                    <svg width="25" height="25" viewBox="0 -5 25 25 ">
                        <polygon points="10,0 13.09,6.18 20,7.24 15,12.36 
                                         16.18,19.12 10,16.18 3.82,19.12 
                                         5,12.36 0,7.24 6.91,6.18" 
                                 fill="#FFD700"
                                 transform="translate(0, 1)"/>
                    </svg>
                    {doctor.reviewScore}
                </p>


                {/* <p className="card-text">Gender: {gender}</p>
                <p className="card-text">Phone Number: {phoneNumber}</p> */}
            </div>
        );
    }

}

export default DoctorCard;
