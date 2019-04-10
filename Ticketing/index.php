<?php
    $full_name = $_GET['full_name'];
    $name = $_GET['name'];
    $gender = $_GET['gender'];
    $email = $_GET['email'];
    echo "</br>Congratulation ".$gender.".</br>";
    echo "</br>";
    echo "Name: ".$full_name."</br>";
    echo "</br>";
    echo "Your transaction has successfully sent to our database.</br>";
    echo "An email will be sent to <strong>".$email."</strong>.</br>";
?>