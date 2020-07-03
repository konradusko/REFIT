<?php

if(isset($_POST['submit'])){
    $mailPhone = $_POST['email_phone'];
    $title = $_POST['title'];
    $message = $_POST['message'];

    $mailTo = "kow@gmail.com"

    $headers = "From: ".$mailPhone;
    $txt = 'You have received an e-mail from'.$mailPhone.".\n\n".$message;
    mail($mailTo,$title, $txt,$headers);
    header("Location: index.php?mailsend");
}
?>