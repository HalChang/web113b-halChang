<?php
    $user = $_POST["user"];
    $password = $_POST["password"];
    $email = $_POST["email"];
    $content = $_POST["content"];
    
    echo "使用者：" . $user . "<br>";
    echo "密碼：" . $password . "<br>";
    echo "Email：" . $email . "<br>";
    echo "留言：" . $content;
?>