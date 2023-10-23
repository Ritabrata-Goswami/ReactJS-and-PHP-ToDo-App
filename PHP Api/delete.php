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
        $del = $react_to_do->delete("CALL delete_react_to_do('$get_id')");
        if($del)
        {
            print(json_encode(array("message"=>"$get_id no data deleted successfully!")));
        }
        else
        {
            print(json_encode(array("message"=>"Data didn't deleted!")));
        }
    }
}catch(Exception $e){
    print(json_encode(array("message"=>$e)));
}
?>