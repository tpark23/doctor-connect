/* ------------------
 *      ListView
 * ------------------
 * Component that displays all doctors as cards in a scrollable list
 */

import React from "react";
import './ListView.css';
import DoctorCard from './DoctorCard.js';

class ListView extends React.Component {

    render() {
        return(
            <div className="ListView" >
                <div className="scroller" >
                    {this.props.data.doctors.map((doctor, index) => (
                        <DoctorCard key={index} 
                                    doctor={doctor}
                                    onClick= {() => this.props.handleClick(doctor) } />
                    ))}
                </div>

            </div>
        );
    }

}

export default ListView;
