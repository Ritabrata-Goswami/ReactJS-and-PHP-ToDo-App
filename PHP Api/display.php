<?php
header("Access-Control-Allow-Methods:POST");
header("Content-Type:application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include('./class.php');
include('./connection.php');

$fetch_all_data = $react_to_do->display('CALL fetch_react_to_do');

try{
    $new_array = array();
    $new_array["get_data"] = array();

    if(mysqli_num_rows($fetch_all_data) > 0)
    {
        while($array_val = mysqli_fetch_array($fetch_all_data))
        {
            $fetch = array("id"=>$array_val["id"],"item"=>$array_val["Item"],"day"=>$array_val["Day"],"time"=>$array_val["Time"]);
            array_push($new_array["get_data"],$fetch);
        }
        print(json_encode($new_array));
    }
    else
    {
        print(json_encode(array("message"=>"No Records Available!")));
    }
}catch(Exception $e){
    print(json_encode(array("message"=>$e)));
}

?>