<?php
include 'connect.php';
if(!empty($_POST['branch'])){
$branch = $_POST['branch'];
$list_one = "NULL";
$list_two = "NULL";
 $db->db_num("INSERT INTO branch (branch, list_one, list_two)
 VALUES ('$branch','$list_one','$list_two')");
}
if(!empty($_POST['header'])){
 $header = $_POST['header'];
 $wrapper = $_POST['wrapper'];
 $footer = $_POST['footer'];
   $db->db_num("UPDATE branch SET branch = '$header', list_one = '$wrapper', list_two ='$footer'  limit 1
   ");
  }
  if(!empty($_POST['dell'])){
     $db->db_num("TRUNCATE TABLE branch");
  }