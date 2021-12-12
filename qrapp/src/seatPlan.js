import DeskUnoccupied from "./logos/Desk.png"
import DeskOccupied from "./logos/DeskOccupied.png"
import { Component, useEffect, useState } from "react";
import Axios from 'axios'

function SeatPlan() {
    const [isLoading, setLoading] = useState(true);
    const [desk1Occupied, setDesk1Occupancy] = useState();
    const [desk2Occupied, setDesk2Occupancy] = useState();
    const [desk3Occupied, setDesk3Occupancy] = useState();

    useEffect(() => {
        Axios.get("http://localhost:3001/deskData").then((response) => {
            setDesk1Occupancy(response.data[0]);
            setDesk2Occupancy(response.data[1]);
            setDesk3Occupancy(response.data[2]);
            setLoading(false);
        
        });
        console.log(desk1Occupied)
    },[]);
    //Axios.get("http://localhost:3001/deskData").then((response) => {}
    if (isLoading) {
        return (
            <div>...Loading</div>
        )
    }
    function returnSrc(occupancy) {
        if (occupancy == 0){
            // console.log({DeskUnoccupied})
            // return {DeskUnoccupied}
            return 1;
        } else {
            // console.log({DeskOccupied})
            // return {DeskOccupied}
            return 0;
        }
    }
    
    return (
        
        <div>
            {/* <h1>{desk1Occupied.desk_occupied}</h1>
            <h1>{desk2Occupied.desk_occupied}</h1>
            <h1>{desk3Occupied.desk_occupied}</h1>
            <img src = {source} alt = "desk001"/> */}
            {/* <img src = {returnSrc(desk1Occupied.desk_occupied)}/> */}
            <div>
                {returnSrc(desk1Occupied.desk_occupied) ? (
                     <img src = {DeskUnoccupied}/>
                ) : (
                    <img src = {DeskOccupied}/>
                )}
            </div>
            <div>
                {returnSrc(desk2Occupied.desk_occupied) ? (
                     <img src = {DeskUnoccupied}/>
                ) : (
                    <img src = {DeskOccupied}/>
                )}
            </div>
            <div>
                {returnSrc(desk3Occupied.desk_occupied) ? (
                     <img src = {DeskUnoccupied}/>
                ) : (
                    <img src = {DeskOccupied}/>
                )}
            </div>
            
        </div>
    )

}
export default SeatPlan;