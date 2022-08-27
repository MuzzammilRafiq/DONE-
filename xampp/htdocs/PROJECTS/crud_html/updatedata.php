<?php
   $stu_id = $_POST['sid'];
   $stu_name = $_POST['sname'];
   $stu_adress = $_POST['saddress'];
   $stu_class = $_POST['sclass'];
   $stu_phone = $_POST['snumber'];

   $connection  = mysqli_connect("localhost","root","","crud")
   or die("connection failed");

   $sql = "UPDATE student SET
   sname = '{$stu_name}',
   saddress = '{$stu_adress}',
   sclass = '{$stu_class}',
   snumber = '{$stu_phone}'
   WHERE sid = '{$stu_id}'";

   $result = mysqli_query($connection,$sql)
   or die("Query didn't happen.");

   header("Location: http://localhost/crud_html/index.php");

   mysqli_close($connection); 
 ?>
