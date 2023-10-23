import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom'
import '../App.css';


export default function UpdatePage()
{

    useEffect(() => {
        document.title = 'ToDo App';
      }, []);


    const navigate = useNavigate();
    const {id} = useParams();
    

    useEffect(() => {fetchEdit()}, []);

    const fetchEdit = async() =>{
        fetch(`http://127.0.0.1/PHP_API_POSTMAN/react_to_do_api/fetch_edit.php?get_id=${id}`).then((data)=>{
            return data.json();
        }).then((data)=>{
            console.log(data);
            data.fetch_edit.map((val)=>{
                setID(val.id);
                setWorkItem(val.item);
                setDay(val.day);
                setTime(val.time);
            });
        });
    }
    


    const [get_id, setID]=useState("");
    const [getItemName, setWorkItem]=useState("");
    const [getDay, setDay]=useState("");
    const [getTime, setTime]=useState("");

    const submitUpdateFunc = async(e) =>{
        e.preventDefault();

        var formData = new FormData();
        
        formData.append("get_id",get_id)
        formData.append("php_Item",getItemName);
        formData.append("php_Day",getDay);
        formData.append("php_Time",getTime);

        await axios({
            method:'post',
            url:'http://127.0.0.1/PHP_API_POSTMAN/react_to_do_api/update.php',
            data:formData          
        }).then((data)=>{
            console.log("Result:-"+JSON.stringify(data));
            Swal.fire({
                icon:'success',
                text:JSON.parse(JSON.stringify(data)).data.message
            });
            navigate('/insert');
        })
    }


    return(
        <div>
            <h3 class="Insert">Update To Do List Using ReactJS.</h3>
            <h5 class="Insert">Every field is mandatory</h5>
            <form onSubmit={submitUpdateFunc} class="w3-padding-large">

                <div>
                    <input type="text" value={get_id} onChange={(event)=>{setID(event.target.value)}} class="field-display"/>
                    <div>
                        <span class="indication_text">Enter Item: </span>
                        <input type="text" placeholder="Enter work item to do..." onChange={(event)=>{setWorkItem(event.target.value)}} name="enter_work" class="input-box" id="item" value={getItemName}/>
                    </div>
                    <div>
                        <span class="indication_text">Enter Day: </span>
                        <select id="location" name="enter_day" onChange={(e)=>{setDay(e.target.value)}}>
                            <option value="">-Select-</option>
                            <option value="Saturday" selected={(getDay === 'Saturday') ? "selected":""}>Saturday</option>
                            <option value="Sunday" selected={(getDay === 'Sunday') ? "selected":""}>Sunday</option>
                            <option value="Monday" selected={(getDay === 'Monday') ? "selected":""}>Monday</option>
                        </select>
                    </div>
                    <div class="enter_time">
                        <span class="indication_text">Enter Time: </span>
                        <input type="radio" onChange={(event)=>{setTime(event.target.value)}} value="AM" name="enter_time" checked={(getTime === 'AM') ? true:false}/> AM
                        <input type="radio" onChange={(event)=>{setTime(event.target.value)}} value="PM" name="enter_time" checked={(getTime === 'PM') ? true:false} class="time_val"/> PM
                    </div>
                </div>

                <div>
                    <input type='submit' name='submit' value='submit' class="w3-margin-top w3-button w3-black w3-hover-green submit-btn"/>
                </div>
            </form>
        </div>
    );
}