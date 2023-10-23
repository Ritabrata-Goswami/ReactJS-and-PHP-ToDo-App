<?php
header("Access-Control-Allow-Methods:GET");
header("Content-Type:application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include('./class.php');
include('./connection.php');

$get_id = $_GET["get_id"];

try{
    if(isset($get_id))
    {
        $fetch_edit = $react_to_do->fetch_edit("CALL edit_react_to_do('$get_id')");
        $arr = array();
        $arr["fetch_edit"] = array();
        
        if(mysqli_num_rows($fetch_edit)>0)
        {
            while($fetch_edit_arr = mysqli_fetch_array($fetch_edit))
            {
                $new_arr = array("id"=>$fetch_edit_arr["id"],"item"=>$fetch_edit_arr["Item"],"day"=>$fetch_edit_arr["Day"],"time"=>$fetch_edit_arr["Time"]);
                array_push($arr["fetch_edit"],$new_arr);
            }
            print(json_encode($arr));
        }
        else
        {
            print(json_encode(array("message"=>"No Record Found!")));
        } 
    }
}catch(Exception $e){
    print(json_encode(array("message"=>$e)));
}
?>