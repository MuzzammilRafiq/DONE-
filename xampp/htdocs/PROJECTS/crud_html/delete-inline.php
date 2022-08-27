<?php
  $stu_id = $_GET['id'];
  $connection  = mysqli_connect("localhost","root","","crud") or die("connection failed");
  $sql = "DELETE FROM student WHERE sid = $stu_id " ;
  $result = mysqli_query($connection,$sql) or die("Query didn't happen");
  header("Location: http://localhost/crud_html/index.php");
  mysqli_close($connection);
 ?>
