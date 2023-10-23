import '../App.css';
import React, {useEffect} from 'react';

export default function Intro()
{

    useEffect(() => {
        document.title = 'ToDo App';
      }, []);

    return(
        <div class="Insert">
            <h3>ReactJS And PHP CRUD ToDo App</h3>
            <p class="txt-font">Here 3 fields have been given. First is Item which is simple textbox. Second a dropdown of day and third a radio button of AM or PM.</p>
            <p class="txt-font">
                All the data from React is exchanging via api end-points by PHP below followings:
                <ul>
                    <li>Insert:- http://127.0.0.1/PHP_API_POSTMAN/react_to_do_api/insert.php</li>
                    <li>Display:- http://127.0.0.1/PHP_API_POSTMAN/react_to_do_api/display.php</li>
                    <li>Edit data:- http://127.0.0.1/PHP_API_POSTMAN/react_to_do_api/fetch_edit.php?get_id=id</li>
                    <li>Update:- http://127.0.0.1/PHP_API_POSTMAN/react_to_do_api/update.php</li>
                    <li>Delete:- http://127.0.0.1/PHP_API_POSTMAN/react_to_do_api/delete.php?get_id=id</li>
                </ul>
                All api's included via methods of 'GET' or 'POST'.
                <br/>
                <div class="instruction-txt">To Insert data click on above Insert button or if want display data click on Display button.</div>
            </p>
        </div>
    );
}
