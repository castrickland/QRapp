import DeskUnoccupied from "./logos/Desk.png"
import DeskOccupied from "./logos/DeskOccupied.png"
import { Component, useState } from "react";

class SeatPlan extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            is1Occupied: true,
            is2Occupied: false,
            is3Occupied: true,
            
        }
    }


    render() {
       
        let desk1, desk2,  desk3;
        if (this.state.is1Occupied == false) {
            desk1 = <img src = {DeskUnoccupied} alt ="Desk001" height = "190px"/>
            
        } else {
            desk1 = <img src = {DeskOccupied} alt ="Desk001" height = "190px"/>
        }
        if (this.state.is2Occupied == false) {
            desk2 = <img src = {DeskUnoccupied} alt ="Desk002" height = "190px"/>
            
        } else {
            desk2 = <img src = {DeskOccupied} alt ="Desk002" height = "190px"/>
        }
        if (this.state.is3Occupied == false) {
            desk3 = <img src = {DeskUnoccupied} alt ="Desk003" height = "190px"/>
            
        } else {
            desk3 = <img src = {DeskOccupied} alt ="Desk003" height = "190px"/>
        }
        return (
            <div>
                
                {desk1}
                {desk2}
                {desk3}
            </div>
        )
      

    }
}
export default SeatPlan;