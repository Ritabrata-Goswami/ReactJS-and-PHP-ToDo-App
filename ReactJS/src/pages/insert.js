import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'
import '../App.css';


export default function InsertPage()
{

    useEffect(() => {
        document.title = 'ToDo App';
      }, []);
      

    const navigate = useNavigate();
                                      //React hooks
    const [getItemName, setWorkItem]=useState("");
    const [getDay, setDay]=useState("");
    const [getTime, setTime]=useState("");

    const submitFunc = async(e) =>{
        e.preventDefault();

        var formData = new FormData();
        
        formData.append("php_Item",getItemName);
        formData.append("php_Day",getDay);
        formData.append("php_Time",getTime);

        await axios({
            method:'post',
            url:'http://127.0.0.1/PHP_API_POSTMAN/react_to_do_api/insert.php',
            data:formData          
        }).then((data)=>{
            console.log("Result:-"+JSON.stringify(data));
            Swal.fire({
                icon:'success',
                text:JSON.parse(JSON.stringify(data)).data.message
            });
            navigate('/insert');
        }).catch((res)=>{
            Swal.fire({
                icon:"error",
                text:JSON.parse(JSON.stringify(res)).res.message
            });
        });
    }


    return(
        <div>
            <h3 class="Insert">Insert To Do List Using ReactJS.</h3>
            <h5 class="Insert">Every field is mandatory</h5>
            <form onSubmit={submitFunc} class="w3-padding-large">
                <div>
                    <span class="indication_text">Enter Item: </span>
                    <input type="text" placeholder="Enter work item to do..." onChange={(event)=>{setWorkItem(event.target.value)}} name="enter_work" class="input-box" id="item"/>
                </div>
                <div>
                    <span class="indication_text">Enter Day: </span>
                    <select id="location" onChange={(e)=>{setDay(e.target.value)}}>
                        <option value="">-Select-</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                        <option value="Monday">Monday</option>
                    </select>
                </div>
                <div class="enter_time">
                    <span class="indication_text">Enter Time: </span>
                    <input type="radio" onChange={(event)=>{setTime(event.target.value)}} value="AM" name="enter_time"/> AM
                    <input type="radio" onChange={(event)=>{setTime(event.target.value)}} value="PM" name="enter_time" class="time_val"/> PM
                </div>
                <div>
                    <input type='submit' name='submit' value='submit' class="w3-margin-top w3-button w3-black w3-hover-green submit-btn"/>
                </div>
            </form>
        </div>
    );
}