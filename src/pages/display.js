import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';


export default function DisplayPage()
{

    useEffect(() => {
        document.title = 'ToDo App';
      }, []);


    const navigate = useNavigate();
    
    useEffect(()=>{fetchAllData()},[]);  //Using Hooks all the data fetched by fetchAllData() function will be under array.
    const [setFetchDataVar, setFetchData] = useState([]);

    const fetchAllData = async() =>{
        fetch(`http://127.0.0.1/PHP_API_POSTMAN/react_to_do_api/display.php`).then((result)=>{
            return result.json();
        }).then((data)=>{
            console.log(data);
            setFetchData(data.get_data);
        });
    }



    const deleteToDo = async(id) =>{
        const isConfirm = await Swal.fire({
            title: 'Are you sure?',
            icon:'warning',
            text:"Delete Row?",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'delete'
        }).then((res)=>{
            return res.isConfirmed
        });

        if(!isConfirm){
            return;
        }

        await axios.get(`http://127.0.0.1/PHP_API_POSTMAN/react_to_do_api/delete.php?get_id=${id}`).then((data)=>{
            Swal.fire({
                icon:"success",
                text:JSON.parse(JSON.stringify(data)).data.message
            });
            fetchAllData();
        })
    }


    return(
        <div>
            <h3 class="Insert">Display Page Using ReactJS.</h3>
            <table class="Insert w3-margin-top">
                <tr>
                    <th>ID</th>
                    <th>Item</th>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                {
                    setFetchDataVar.length > 0 ? (setFetchDataVar.map((row)=>(
                        <tr>
                            <td>{row.id}</td>
                            <td>{row.item}</td>
                            <td>{row.day}</td>
                            <td>{row.time}</td>  
                            <td><Link to={`/edit_to_do/${row.id}`}><button class="w3-button w3-blue w3-hover-black edit-btn">Edit</button></Link></td>
                            <td><button class="w3-button w3-red w3-hover-yellow del-btn" onClick={()=>deleteToDo(row.id)}>Delete</button></td>
                        </tr>
                    ))):(
                        <tr>
                            <td colspan="6" class="w3-text-red">No Data Available</td>
                        </tr>
                    )
                }
                 {/* onClick={()=>deleteToDo(row.id)} */}
            </table>
        </div>
    );
}