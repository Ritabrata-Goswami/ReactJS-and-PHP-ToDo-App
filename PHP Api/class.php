<?php
class react_to_do
{
    public $hostname;
    public $username;
    public $password;
    public $database;

    function __construct($hostname, $username, $password, $database)
    {
        // $this->conn = mysqli_connect($hostname, $username, $password, $database);
        // if(!$this->conn)
        // {
        //     echo 'Database can not connected! '.mysqli_connect_error();
        //     exit();
        // }
        try{
            $this->conn = mysqli_connect($hostname, $username, $password, $database);
        }catch(Exception $e){
            return json_encode(array("message"=>"connection issue!"));
        }

    }

    public function insert($statement)
    {
        return mysqli_query($this->conn, $statement);
    }

    public function display($statement)
    {
        return mysqli_query($this->conn, $statement);
    }

    public function fetch_edit($statement)
    {
        return mysqli_query($this->conn, $statement);
    }

    public function update($statement)
    {
        return mysqli_query($this->conn, $statement);
    }

    public function delete($statement)
    {
        return mysqli_query($this->conn, $statement);
    }
}
?>
