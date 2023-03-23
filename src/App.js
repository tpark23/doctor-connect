/*
 * DoctorConnect App Component
 * 
 */ 
import './App.css';
import React from "react";
import json from "./doctors.json";
import ListView from "./ListView";
import SelectedView from "./SelectedView"

class App extends React.Component {

    /* Model (pass state info to other components using props) */
    constructor(props) {
        super(props);
        this.state = {
            data: json,
            selectedDoctor: null,
            isClicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    /* View */
    render() {
        return (
            <div className="App">
                <ListView data={this.state.data}
                          handleClick={this.handleClick}/>
                <SelectedView isClicked={this.state.isClicked}
                              selectedDoctor={this.state.selectedDoctor}/>
            </div>
        );
    }

    /* Controller (event handlers)
     * - bind event handlers in constructor
     * - pass event handlers to other components using props
     */
    handleClick(doctor) {
        // currently selected doctor information     
        console.log("selected doctor:", doctor);
        this.setState({ isClicked: true });
        console.log("selected status:", this.isClicked);
        this.setState({ selectedDoctor: doctor});
        console.log("selected doctor:", this.selectedDoctor);

    }


}

export default App;
