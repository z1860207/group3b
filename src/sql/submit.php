<?php

        include('vars.php');
        //phpinfo();
        //error_reporting(E_ALL);
        //ini_set("display_errors", 0);

        header('Content-Type: application/json; charset=utf-8');
        header('Access-Control-Allow-Origin: *');

        $conn = new mysqli("courses","$username","$my_pass","$db");
        if(mysqli_connect_error()){
                echo mysqli_connect_error();
                exit();
        }
        else{
                /$jsonObj = file_get_contents('php://input');
                $data = json_decode($jsonObj, true);

                if (!empty($data[0])) {
                        $email = $data['email'];
                        $password = $data['password'];

                        $sql = "INSERT INTO ASSOCIATES(USER_ID, PASSWORD) VALUES('$email', '$password');";
                        $res = mysqli_query($conn, $sql);

                        if($res){
                                echo "success";
                        }
                        else{
                                echo "error";
                        }
                        $conn->close();
                }
                else {
                        echo "error: ";
                        echo json_last_error_msg();
                        echo "\n";
                        var_dump( file_get_contents('php://input'));
                        echo "\n";
                        echo print_r($_POST,true);
                        echo "\n";

                }
        }

?>