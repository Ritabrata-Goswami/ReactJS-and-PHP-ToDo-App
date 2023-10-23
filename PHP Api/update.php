<?php
header("Access-Control-Allow-Methods:POST");
header("Content-Type:application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include('./class.php');
include('./connection.php');

$get_id = $_POST["get_id"];
$get_item_name = $_POST['php_Item'];
$get_day = $_POST['php_Day'];
$get_time = $_POST['php_Time'];

if($get_item_name=="" || $get_day=="" || $get_time=="")
{
    print(json_encode(array("message"=>"Fields Should Not Be Empty!")));
}
else
{
    try{
        $insert_data = $react_to_do->insert("CALL update_react_to_do('$get_id','$get_item_name','$get_day','$get_time')");
        if($insert_data)
        {
            print(json_encode(array("message"=>"Data Updated Successfully!")));
        }
        else
        {
            print(json_encode(array("message"=>"Data Updatation Failed!")));
        }
    }catch(Exception $e){
        print(json_encode(array("message"=>$e)));
    }
}

?>