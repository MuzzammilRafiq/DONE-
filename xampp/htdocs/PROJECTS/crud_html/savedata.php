<?php 
   
   $stu_name = $_POST['sname'];
   $stu_adress = $_POST['saddress'];
   $stu_class = $_POST['class'];
   $stu_phone = $_POST['snumber'];

   $connection  = mysqli_connect("localhost","root","","crud") 
   or die("connection failed");

   $sql = "INSERT INTO student(sname,saddress,sclass,snumber) VALUES ('{$stu_name}',
   '{$stu_adress}','{$stu_class}','{$stu_phone}')";

   $result = mysqli_query($connection,$sql) 
   or die("Query didn't happen.");

   header("Location: http://localhost/crud_html/index.php");

   mysqli_close($connection); 

 ?>