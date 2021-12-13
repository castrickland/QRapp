import DeskUnoccupied from "./logos/Desk.png"
import DeskOccupied from "./logos/DeskOccupied.png"
import { Component, useEffect, useState } from "react";
import Axios from 'axios'

function SeatPlan() {
    const [isLoading, setLoading] = useState(true);
    const [desk1Occupied, setDesk1Occupancy] = useState();
    const [desk2Occupied, setDesk2Occupancy] = useState();
    const [desk3Occupied, setDesk3Occupancy] = useState();
    const [desk4Occupied, setDesk4Occupancy] = useState();
    const [desk5Occupied, setDesk5Occupancy] = useState();
    const [desk6Occupied, setDesk6Occupancy] = useState();

    useEffect(() => {
        Axios.get("http://localhost:3001/deskData").then((response) => {
            setDesk1Occupancy(response.data[0]);
            setDesk2Occupancy(response.data[1]);
            setDesk3Occupancy(response.data[2]);
            setDesk4Occupancy(response.data[3]);
            setDesk5Occupancy(response.data[4]);
            setDesk6Occupancy(response.data[5]);
            setLoading(false);
        
        });
        
    },[]);
    //Axios.get("http://localhost:3001/deskData").then((response) => {}
    if (isLoading) {
        return (
            <div>...Loading</div>
        )
    }
    function returnSrc(occupancy) {
        if (occupancy == 0){
            return 1;
        } else {    
            return 0;
        }
    }
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        {returnSrc(desk1Occupied.desk_occupied) ? (
                            <img src = {DeskUnoccupied}/>
                        ) : (
                            <img src = {DeskOccupied}/>
                        )}
                    </td>
                    <td>
                        {returnSrc(desk2Occupied.desk_occupied) ? (
                            <img src = {DeskUnoccupied}/>
                        ) : (
                            <img src = {DeskOccupied}/>
                        )}
                    </td>
                    <td>
                        {returnSrc(desk3Occupied.desk_occupied) ? (
                            <img src = {DeskUnoccupied}/>
                        ) : (
                            <img src = {DeskOccupied}/>
                        )}
                    </td>
                </tr>
                <tr>
                    <td>
                        {returnSrc(desk4Occupied.desk_occupied) ? (
                            <img src = {DeskUnoccupied}/>
                        ) : (
                            <img src = {DeskOccupied}/>
                        )}
                    </td>
                    <td>
                        {returnSrc(desk5Occupied.desk_occupied) ? (
                            <img src = {DeskUnoccupied}/>
                        ) : (
                            <img src = {DeskOccupied}/>
                        )}
                    </td>
                    <td>
                        {returnSrc(desk6Occupied.desk_occupied) ? (
                            <img src = {DeskUnoccupied}/>
                        ) : (
                            <img src = {DeskOccupied}/>
                        )}
                    </td>
                </tr>
            </tbody>
        </table>
    )

}
export default SeatPlan;