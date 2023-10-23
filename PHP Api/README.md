# Php Api end-points For ReactJS

### Create Class

First we have to creat the Class the template for a object. Here it is react_to_do.
Under that class we have to specify the properties like hostname, username, password and database name. Properties must be public.
Inside that constructor we have to assign the database connection by using those public properties.
There is also seperate methods specified for every operation. 

### Create object from that class

```
$react_to_do = new react_to_do('127.0.0.1:3310','root','','react_db');
```
passing property values inside that constructor.

hostname=127.0.0.1:3310,
username=root,
database=react_db.

password is not given in this case.


### Api files

```
header("Access-Control-Allow-Methods:GET");
header("Content-Type:application/json");
header("Access-Control-Allow-Origin: *");
```
This three above headers are importan to specify its action type.

header("Access-Control-Allow-Origin: *"); is to handle CORS issue. Wildcards is use to tell PHP whether to allow all types of Client url or we can also specify the url with port number.

To return response as JSON format use header("Content-Type:application/json");
header("Access-Control-Allow-Methods:GET"); is use to specify which method the api should work. Whether it gets value from parameter embaded into Url or in body as a POST method.