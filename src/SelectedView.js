/* ------------------
 *    SelectedView
 * ------------------
 * Component that displays a more detailed insight on the selected doctor
 */

import './SelectedView.css';
import React from "react";
import SimilarDoctorCard from './SimilarDoctorCard.js';

class SelectedView extends React.Component {
    
    render() {
        const { data, selectedDoctor } = this.props;

        /*** NO doctor selected ***/
        if (!selectedDoctor) {
            return(
                <div className="NotSelectedView">
                    <p>
                        Select a doctor for more information
                    </p>
                    
                </div>
            )
        }

        /*** A doctor has been selected ***/

        /* Generate array of similar doctors to selected doctor */
        const similarDoctors = data.doctors.filter(
            d => d.specialty === selectedDoctor.specialty && d.location === selectedDoctor.location && d.name !== selectedDoctor.name
        );

        //console.log(similarDoctors);
        //console.log("there is a doctor");

        return(
            /* SelectedView Box */
            <div className="SelectedView" >
                <div className="doctor-info-container">
                    <div className="doctor-image">
                            <picture>
                                <img src="photo.jpg" alt="Headshot"></img>
                            </picture>
                    </div>

                    <div className="doctor-summary">
                        <div className="doctor-name">
                            <h1 className="d-name">{selectedDoctor.name}</h1>
                        </div>

                        <div className="doctor-specialty"> {selectedDoctor.specialty}   </div>
                        <div className="doctor-gender">    {selectedDoctor.gender}      </div>
                        <div className="doctor-location">  {selectedDoctor.location}    </div>
                        <div className="doctor-number">    {selectedDoctor.phoneNumber} </div>
                        <div className="doctor-rating">
                            <svg width="25" height="25" viewBox="0 -5 25 25 ">
                                <polygon points="10,0 13.09,6.18 20,7.24 15,12.36 
                                                16.18,19.12 10,16.18 3.82,19.12 
                                                5,12.36 0,7.24 6.91,6.18" 
                                        fill="#FFD700"
                                        transform="translate(0, 1)"/>
                            </svg>
                            {selectedDoctor.reviewScore}
                        </div>
                    </div>
                </div>

                <div className="doctor-overview">
                    <h4 className="overview"> 
                        Overview 
                    </h4>
                    <p className="description">
                        {selectedDoctor.name} specializes in {selectedDoctor.specialty} and works in {selectedDoctor.location}.
                    </p>
                    <p className="description">
                        Call {selectedDoctor.phoneNumber} if you're interested in setting up an appointment.
                    </p>
                </div>

                <div className="similar-doctors">
                    <h4 className="similar">
                        Similar Doctors Within the Area
                    </h4>
                    <div className="similar-box" >
                        {similarDoctors.map(similarDoctor => (
                            <SimilarDoctorCard doctor={similarDoctor} 
                                            onClick= {() => this.props.handleClick(similarDoctor)}/>
                        ))}
                    </div>
                </div>

            </div>
        );
        
        
        
    
        
    
        
    }

}

export default SelectedView;
