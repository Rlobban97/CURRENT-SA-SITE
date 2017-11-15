<?php

include "./admin/config.inc.php";
include "./lib/$DB_CLASS";
if (eregi("WIN",PHP_OS)) {
	$sep = "\\";
} else {
	$sep = "/";
}

if (ereg("^3.",PHP_VERSION)) {
    echo "<html><body><h2>This script requires PHP 4.1 or higher!</h2></body></html>";
    exit();
}

$install = new gbook_sql();
if (!isset($_POST['action'])) {
  $_POST['action'] ='';
}

$sqlquery[]= "CREATE TABLE $GB_TBL[auth] (
  ID smallint(5) NOT NULL auto_increment,
  username varchar(60) NOT NULL default '',
  password varchar(60) NOT NULL default '',
  session varchar(32) NOT NULL default '',
  last_visit int(11) NOT NULL,
  PRIMARY KEY  (ID)
)";

$sqlquery[]= "CREATE TABLE $GB_TBL[ban] (
  ban_ip varchar(15) NOT NULL default ''
)";

$sqlquery[]= "CREATE TABLE $GB_TBL[com] (
  com_id int(11) NOT NULL auto_increment,
  id int(11) NOT NULL default '0',
  name varchar(50) NOT NULL default '',
  comments text NOT NULL,
  host varchar(255) NOT NULL default '',
  timestamp int(11) NOT NULL default '0',
  PRIMARY KEY  (com_id)
)";

$sqlquery[]= "CREATE TABLE $GB_TBL[cfg] (
  config_id smallint(4) NOT NULL auto_increment,
  agcode smallint(1) NOT NULL default '0',
  allow_html smallint(1) NOT NULL default '0',
  offset varchar(5) NOT NULL default '0',
  smilies smallint(1) NOT NULL default '1',
  dformat varchar(6) NOT NULL default '',
  tformat varchar(4) NOT NULL default '24hr',
  admin_mail varchar(50) NOT NULL default '',
  notify_private smallint(1) NOT NULL default '0',
  notify_admin smallint(1) NOT NULL default '0',
  notify_guest smallint(1) NOT NULL default '0',
  notify_mes varchar(150) NOT NULL default '',
  entries_per_page int(6) NOT NULL default '10',
  show_ip smallint(1) NOT NULL default '0',
  pbgcolor varchar(7) NOT NULL default '0',
  text_color varchar(7) NOT NULL default '0',
  link_color varchar(7) NOT NULL default '0',
  width varchar(4) NOT NULL default '0',
  tb_font_1 varchar(7) NOT NULL default '',
  tb_font_2 varchar(7) NOT NULL default '',
  font_face varchar(60) NOT NULL default '',
  tb_hdr_color varchar(7) NOT NULL default '',
  tb_bg_color varchar(7) NOT NULL default '',
  tb_text varchar(7) NOT NULL default '',
  tb_color_1 varchar(7) NOT NULL default '',
  tb_color_2 varchar(7) NOT NULL default '',
  lang varchar(30) NOT NULL default '',
  min_text smallint(4) NOT NULL default '0',
  max_text int(6) NOT NULL default '0',
  max_word_len smallint(4) NOT NULL default '0',
  comment_pass varchar(50) NOT NULL default '',
  need_pass smallint(1) NOT NULL default '0',
  censor smallint(1) NOT NULL default '0',
  flood_check smallint(1) NOT NULL default '0',
  banned_ip smallint(1) NOT NULL default '0',
  flood_timeout smallint(5) NOT NULL default '0',
  allow_icq smallint(1) NOT NULL default '0',
  allow_aim smallint(1) NOT NULL default '0',
  allow_gender smallint(1) NOT NULL default '0',
  allow_img smallint(1) NOT NULL default '0',
  max_img_size int(10) NOT NULL default '0',
  img_width smallint(5) NOT NULL default '0',
  img_height smallint(5) NOT NULL default '0',
  thumbnail smallint(1) NOT NULL default '0',
  thumb_min_fsize int(10) NOT NULL default '0',
  PRIMARY KEY  (config_id)
)";

$sqlquery[]= "CREATE TABLE $GB_TBL[data] (
  id int(11) NOT NULL auto_increment,
  name varchar(50) NOT NULL default '',
  gender char(1) NOT NULL default '',
  email varchar(100) NOT NULL default '',
  url varchar(255) NOT NULL default '',
  date int(11) NOT NULL default '0',
  location varchar(100) NOT NULL default '',
  host varchar(255) NOT NULL default '',
  browser tinytext,
  comment text NOT NULL,
  icq int(11) NOT NULL default '0',
  aim varchar(100) NOT NULL default '',
  PRIMARY KEY  (id)
)";

$sqlquery[]= "CREATE TABLE $GB_TBL[ip] (
  guest_ip varchar(15) NOT NULL default '',
  timestamp int(11) NOT NULL default '0',
  KEY guest_ip (guest_ip)
)";

$sqlquery[]= "CREATE TABLE $GB_TBL[pics] (
  msg_id int(11) NOT NULL default '0',
  book_id int(11) NOT NULL default '0',
  p_filename varchar(100) NOT NULL default '',
  p_size int(11) unsigned NOT NULL default '0',
  width int(11) unsigned NOT NULL default '0',
  height int(11) unsigned NOT NULL default '0',
  KEY msg_id (msg_id),
  KEY book_id (book_id)
)";

$sqlquery[]= "CREATE TABLE $GB_TBL[priv] (
  id int(11) NOT NULL auto_increment,
  name varchar(50) NOT NULL default '',
  gender char(1) NOT NULL default '',
  email varchar(100) NOT NULL default '',
  url varchar(255) NOT NULL default '',
  date int(11) NOT NULL default '0',
  location varchar(100) NOT NULL default '',
  host varchar(255) NOT NULL default '',
  browser tinytext,
  comment text NOT NULL,
  icq int(11) NOT NULL default '0',
  aim varchar(100) NOT NULL default '',
  PRIMARY KEY  (id)
)";

$sqlquery[]= "CREATE TABLE $GB_TBL[smile] (
  id int(11) NOT NULL auto_increment,
  s_code varchar(20) NOT NULL default '',
  s_filename varchar(60) NOT NULL default '',
  s_emotion varchar(60) NOT NULL default '',
  width smallint(6) unsigned NOT NULL default '0',
  height smallint(6) unsigned NOT NULL default '0',
  PRIMARY KEY  (id)
)";

$sqlquery[]= "CREATE TABLE $GB_TBL[cap] (
  session_id char(32) DEFAULT '' NOT NULL,
  validate_key varchar(64) NOT NULL,
  timestamp int(11) unsigned NOT NULL,
  PRIMARY KEY (session_id)
)";

$sqlquery[]= "CREATE TABLE $GB_TBL[words] (
  word varchar(50) NOT NULL default ''
)";

$tbl_data[]  = "INSERT INTO ".$GB_TBL['ban']." VALUES ('000.000.000.000')";
$tbl_data[]  = "INSERT INTO ".$GB_TBL['cfg']." VALUES (1, 1, 0, '0', 1, 'Euro', '24hr', 'root@localhost', 0, 0, 0, 'Thank you for signing the guestbook!', 10, 1, '#FFFFFF', '#000000', '#006699', '95%', '11px', '10px', 'Verdana, Arial, Helvetica, sans-serif', '#7878BE', '#000000', '#FFFFFF', '#E8E8E8', '#F7F7F7', 'english', 6, 1500, 80, 'comment', 0, 1, 0, 1, 80, 1, 1, 1, 1, 120, 320, 90, 1, 12)";
$tbl_data[]  = "INSERT INTO ".$GB_TBL['words']." VALUES ('fuck')";
$tbl_data[]  = "INSERT INTO ".$GB_TBL['smile']." (id, s_code, s_filename, s_emotion, width, height) VALUES (1, ':-)', 'a1.gif', 'smile', 15, 15)";
$tbl_data[]  = "INSERT INTO ".$GB_TBL['smile']." (id, s_code, s_filename, s_emotion, width, height) VALUES (2, ':-(', 'a2.gif', 'frown', 15, 15)";
$tbl_data[]  = "INSERT INTO ".$GB_TBL['smile']." (id, s_code, s_filename, s_emotion, width, height) VALUES (3, ';-)', 'a3.gif', 'wink', 15, 15)";
$tbl_data[]  = "INSERT INTO ".$GB_TBL['smile']." (id, s_code, s_filename, s_emotion, width, height) VALUES (4, ':o', 'a4.gif', 'embarrassment', 15, 15)";
$tbl_data[]  = "INSERT INTO ".$GB_TBL['smile']." (id, s_code, s_filename, s_emotion, width, height) VALUES (5, ':D', 'a5.gif', 'big grin', 15, 15)";
$tbl_data[]  = "INSERT INTO ".$GB_TBL['smile']." (id, s_code, s_filename, s_emotion, width, height) VALUES (6, ':p', 'a6.gif', 'razz (stick out tongue)', 15, 15)";
$tbl_data[]  = "INSERT INTO ".$GB_TBL['smile']." (id, s_code, s_filename, s_emotion, width, height) VALUES (7, ':cool:', 'a7.gif', 'cool', 21, 15)";
$tbl_data[]  = "INSERT INTO ".$GB_TBL['smile']." (id, s_code, s_filename, s_emotion, width, height) VALUES (8, ':rolleyes:', 'a8.gif', 'roll eyes (sarcastic)', 15, 15)";
$tbl_data[]  = "INSERT INTO ".$GB_TBL['smile']." (id, s_code, s_filename, s_emotion, width, height) VALUES (9, ':mad:', 'a9.gif', '#@*%!', 15, 15)";
$tbl_data[]  = "INSERT INTO ".$GB_TBL['smile']." (id, s_code, s_filename, s_emotion, width, height) VALUES (10, ':eek:', 'a10.gif', 'eek!', 15, 15)";
$tbl_data[]  = "INSERT INTO ".$GB_TBL['smile']." (id, s_code, s_filename, s_emotion, width, height) VALUES (11, ':confused:', 'a11.gif', 'confused', 15, 22)";

?>
<html>
<head>
<title>Advanced Guestbook</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style type="text/css">
<!--
.table {  font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 9pt; color: #000000}
body {  font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 9pt; color: #000000}
-->
</style>
</head>
<body bgcolor="#FFFFFF">

<?php

if ($_POST['action'] == "") {
$SELF = basename($_SERVER['PHP_SELF']);
?>
<br>
<form method="post" action="<?php echo $SELF; ?>">
  <table width="95%" border="0" cellspacing="1" cellpadding="4" align="center">
    <tr bgcolor="#9999CC">
      <td colspan="2" class="table" height="35"><b>Advanced Guestbook Setup</b></td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td width="33%" class="table">Your Guestbook admin email address:</td>
      <td width="67%"><input type="text" name="email" value="admin@<?php echo $_SERVER['HTTP_HOST']; ?>"></td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td width="33%" class="table">Your Guestbook username:</td>
      <td width="67%"><input type="text" name="gb_name" value="admin"></td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td width="33%" class="table">Your Guestbook password:</td>
      <td width="67%"><input type="text" name="gb_pass" value="pass"></td>
    </tr>
    <tr>
      <td width="33%"> 
        <input type="hidden" name="db" value="<?php echo (isset($_POST["db"])) ? $_POST["db"] : ""; ?>">
        <input type="hidden" name="host" value="<?php echo (isset($_POST["host"])) ? $_POST["host"] : ""; ?>">
        <input type="hidden" name="name" value="<?php echo (isset($_POST["name"])) ? $_POST["name"] : ""; ?>">
        <input type="hidden" name="pass" value="<?php echo (isset($_POST["pass"])) ? $_POST["pass"] : ""; ?>">
      </td>
      <td width="67%">
        <input type="submit" name="action" value="Continue">
        <input type="reset" value="Reset">
      </td>
    </tr>
  </table>
<?php
$baseDir = dirname(__FILE__);
$uploadDir = $baseDir.$sep.$GB_UPLOAD;
if (!is_writable($uploadDir)) {
	echo "Warning: $uploadDir is not writeable<br>\n";
}
$uploadTmp = $baseDir.$sep.$GB_TMP;
if (!is_writable($uploadTmp)) {
	echo "";
}
?>
</form>

<?php }

elseif ($_POST['action'] == "Continue") {
  if (get_magic_quotes_gpc()) {
  	$_POST['gb_name'] = stripslashes($_POST['gb_name']);
  	$_POST['gb_pass'] = stripslashes($_POST['gb_pass']);
  }
  $tbl_data[]  = "INSERT INTO ".$GB_TBL['auth']." VALUES (1,'".addslashes($_POST['gb_name'])."',PASSWORD('".addslashes($_POST['gb_pass'])."'),'cd2c6d5e4571d52da8fb6d87c08',10131007)";  
  $serverid  = mysql_connect($_POST['host'], $_POST['name'], $_POST['pass']) or $install->sql_error("Cannot connect to database");
  @mysql_select_db($_POST['db'],$serverid) or $install->sql_error("Unable to select database: <b>{$_POST['db']}</b>");
  for ($i=0;$i<sizeof($sqlquery);$i++) {
    mysql_query($sqlquery[$i],$serverid) or $install->sql_error("Database Error");
  }
  for ($i=0;$i<sizeof($tbl_data);$i++) {
    mysql_query($tbl_data[$i],$serverid) or $install->sql_error("Database Error");
  }
?>
<?php mail("$_POST[email]","Advanced Guestbook has been Installed","Advanced Guestbook has been Installed!\n\nYour user name is $_POST[gb_name]\nYour password is $_POST[gb_pass]","From: websupport@earthlink.net\n"); ?>

<font face="Verdana, Arial" size="3" color="#000099"><b>Advanced Guestbook</b></font>
<hr size="1" width="400" align="left">
<font face="Verdana, Arial" size="2">Database Tables were created successfully!</font>
<br><br><ul><font face="Verdana,Arial" size="2">
Your Advanced Guestbook User Name: <b><?php echo "$_POST[gb_name]"; ?></b><br>
Your Advanced Guestbook Password: <b><?php echo "$_POST[gb_pass]"; ?></b><br>
(If you left this as <b>pass</b>, you should change this once you log in.)<br><br>
This has been emailed to: <b><?php echo "$_POST[email]"; ?></b><br>
</ul>
<a href="admin.php">Click now here to setup the guestbook admin...</a>
</font>
<?php } ?>
</body>
</html>
