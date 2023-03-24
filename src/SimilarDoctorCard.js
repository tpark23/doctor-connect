/* -----------------------
 *    SimilarDoctorCard
 * -----------------------
 * A similar doctor card component that displays the information of a doctor 
 * that is similar to the selected doctor in terms of specialty and location.
 */ 

import './SimilarDoctorCard.css';
import React from "react";

class SimilarDoctorCard extends React.Component {

    render() {
        const {doctor, onClick} = this.props;

        return (
            <div className="similar-doctor-card" onClick={onClick}>
                <h3>{doctor.name}</h3>
                <p>{doctor.specialty}</p>
            </div>
        );
    }
}
  

export default SimilarDoctorCard;
