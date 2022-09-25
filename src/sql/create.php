<?php
        include('vars.php');
        //phpinfo();
        error_reporting(E_ALL);
        ini_set("display_errors", 0);

        header('Access-Control-Allow-Origin: *');
        //header('Content-Type: application/json; charset=utf-8');

        $conn = new mysqli("$host","$username","$my_pass","$db");
        if(mysqli_connect_error()){
                echo mysqli_connect_error();
                exit();
        }
        else{
                if (!empty($_POST)){
                        $email = $_POST['email'];
                        if (preg_match('/\s[\'^£$%&*()}{#~?><>,|=_+¬-]/', $email) || strpos($email, " ")) {
                                // one+ special characters / whitespace found in email
                                echo "Error: Invalid Email Characters.";
                                $conn->close();
                                exit();
                        }

                        $password = $_POST['password'];
                        $hash = password_hash($password, PASSWORD_BCRYPT);

                        $sql = "INSERT INTO ASSOCIATES(USER_ID, PASSWORD) VALUES('$email', '$hash');";
                        $res = mysqli_query($conn, $sql);

                        if($res){
                                echo "Success!";
                                $conn->close();
                        }
                        else{
                                echo "Creation error!: email in use or general authentication failure.";
                                $conn->close();
                        }
                }

                else {
                        echo "post empty\n";
                        echo json_last_error_msg();
                        echo "\n";
                        echo print_r($_POST, true);
                }
        }
?>
