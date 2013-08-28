<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<?php
session_start ();
header("Content-Type: text/html; charset=UTF-8"); 

require_once ('../classes/dbconnect.class.php');
require_once ('../classes/template.class.php');
require_once ('../classes/myUsefulFunctions.class.php');
require_once ('classes/PHPLiveX.class.php');

$ajax = new PHPLiveX ( );
//echo $_SERVER['REMOTE_ADDR'];
$mydb = new db ( );
$myusefulInstance = new account_types ( );
$ajax->AjaxifyObjectMethods ( array ("myusefulInstance" => array ("templatecropper", "checktemplate", "sizecheck", "getproductpagecount", "checkproduct", "sonofsaypages", "showproductstemplates", "productnamenoid", "objproperties", "fontcsv", "adjustside", "rtp", "dpobj", "deletetemp", "sonoftimage", "lockobj", "showtemplateproduct", "tempintoprod", "pname", "timage", "showtemplates", "newtemplate", "productid", "adjustcoordinates", "showobj", "addtext", "setpage", "saypages", "savefield", "displayArea", "removeasset", "fieldcheck", "paycallcheck","clearimgs","costcall") ) );

$ajax->Run ();
$myTemplateInstance = new myTemplateClass ( );
$loadpage 			= 'html/index.htm';
$asload	=	0;


//checking if the user token is active
$query	=	"SELECT `joomla_id` FROM `users` WHERE `user_id` = '{$_GET['user_id']}'";
if ($mydb->query($query)&&$mydb->numRows()) {
	$joomlaidArray	=	$mydb->getArray();
	
	 $query	=	"SELECT `userid` FROM `jht`.`jos_session` WHERE `userid` = '{$joomlaidArray['joomla_id']}'";
	if ($mydb->query($query)&&$mydb->numRows()) {

if ($_GET['ct'] == 1) {
	$nodisplay	=	"style=\"display:none;\"";
	$pcarousel	=	'<span class="chpidsc" id="chpidsc">choose templates</span>';
}
else 
{
	$pcarousel	=	$myusefulInstance->pcarousel($pid);
	$nodisplaytmp	=	"style=\"display:none;\"";
}

$_GET['curpage']	=	($_GET['curpage'])?$_GET['curpage']:1;

if ($_GET['user_id']) {
	$_SESSION['user_id']	=	$_GET['user_id'];
	
	$query	=	"SELECT * FROM `server_details` LIMIT 1;";
	if ($mydb->query($query)&&$mydb->numRows()) {
		$_SESSION['serverArray']	=	$mydb->getArray();
	}
}

$query	=	"SELECT `http_host` FROM `clients` WHERE `client_id` = '1';";
if ($mydb->query($query)&&$mydb->numRows()) {
	$_SESSION['clientArray']	=	$mydb->getArray();
}
if ($_POST['email']&&$_POST['password']) {
	$_POST['password']	= md5($_POST['password']);
	$_POST['email']	=	trim($_POST['email']);
	
	$query	=	"SELECT * FROM `users` WHERE `email`= '{$_POST['email']}' AND `passwd` = '{$_POST['password']}' LIMIT 1;";
	if ($mydb->query($query)&&$mydb->numRows()) {
		$_SESSION['simplecp']	=	$mydb->getArray();
		header('location:?md=summary');
	}
	
}

if ($_SESSION['user_id']) {
	
	
	switch ($_GET['md']) {
		
		case 'summary':
			$loadpage 			= '../html/cp.summary.htm';
		break;
		
		case 'activity':
	//DELETE JOB
	if ($_GET['dt']) {
		$query	=	"UPDATE `jobs` SET `status` = '0' WHERE `job_id` = '{$_GET['dt']}';";
		if ($mydb->query($query)&&$mydb->getAffRows()) {
			
		}
		
	}
	
	$query	=	"SELECT * FROM `uploads` u LEFT JOIN `jobs` j ON u.`job_id` = j.`job_id` WHERE j.`status` IS NULL;";
	if ($mydb->query($query)&&$mydb->numRows()) {
	$jobsArray	=	$mydb->getFullArray();
	
	$jobsBreakdown	.=	"<table id='jT' cellspacing='0' cellpadding='0'>";
	$i	=	1;
			$jobsBreakdown	.=	"<tr class='heading'><td></td><td>First name</td><td>Surname</td><td>Address1</td><td>City,postcode</td><td>Paid</td><td>Preview</td><td>Delete</td><td>Date</td></tr>";
	
	foreach ($jobsArray as $eachjob) {
		
		$rowClass	=	($i%2)?"lightr":"darkr";
		
		$fileinfo	=	pathinfo($eachjob['assetname']);
		$paystate	=	(is_null($eachjob['paid']))?'Unpaid':'Paid';
		$img	=	(is_null($eachjob['assetname']))?'NA':"<img height='30' alt='image' src='../jobs/job{$eachjob['job_id']}/{$fileinfo['filename']}.thumb.{$fileinfo['extension']}'/>";
		$delink	=	(is_null($_SESSION['simplecp']['super']))?null:"<a href='?dt={$eachjob['job_id']}'>delete</a>";
		$fname	=	($eachjob['fname'])?$eachjob['fname']:'NA';
		$sname	=	($eachjob['sname'])?$eachjob['sname']:'NA';
		$address1	=	($eachjob['address1'])?$eachjob['address1']:'NA';
		$city	=	($eachjob['city'])?$eachjob['city']:'NA';
		$postalcode	=	($eachjob['postalcode'])?$eachjob['postalcode']:'NA';
		$date	=	date("Y/m/d G:i",$eachjob['time']);
		
		$jobsBreakdown	.=	"<tr class=\"$rowClass\"><td>$i.</td><td>$fname</td><td>$sname</td><td>$address1</td><td>$city,$postalcode</td><td>$paystate</td><td>$img</td><td>$delink</td><td>$date</td></tr>";
	$i++;
	}
	
	$jobsBreakdown	.=	"</table>";
	
	$page	=	$jobsBreakdown;
	
	}
			break;
		
		case 'template':
			$asload	=	2;
			//pcarousel($pid) {
			
			
			//creating a list of products
			$query	=	"SELECT `product_id`, `description` FROM `products`";
			if ($mydb->query($query)&&$mydb->numRows()) {
				$productArray	=	$mydb->getFullArray();
				$i	=	0;
				foreach ($productArray as $eachproduct) {
					$productbreakdown	.=	($i == 0)?"<option>Select product</option>":null;
					$selectedproduct	=	($_GET['pid'] == $eachproduct['product_id'])?" selected=\"1\"":null;
					$productbreakdown	.=	"<option $selectedproduct value=\"{$eachproduct['product_id']}\">{$eachproduct['description']}</option>";
					$i++;
				}
				
			}
			
			$templates	=	explode('&&',$myusefulInstance->showtemplates());
			foreach ($templates as $eachtemplate) {
				
				$templateElements	=	explode(',',$eachtemplate);
				$preview			=	'../templates/'.preg_replace('/ /','',$templateElements[1]).'.png';
				
				if (file_exists($preview)) {
					$filestate	=	"<div class=\"filestate\"></div>";
				}
				else 
				{
					$filestate	=	"<div id=\"nfs{$templateElements[0]}\" class=\"nofilestate\"></div>";
				}
				$templatebreakdown	.=	"<div title=\"click to assign this template to a product\" class=\"templatedivs\" id=\"te{$templateElements[0]}\">$filestate<div style=\"position:absolute;top:-8px;right:-5px;background-color:red;z-index:6;width:15px;height:15px;text-align:center;color:#fff;line-height:15px;font-size:12px;font-weight:bold;\" id=\"dt{$templateElements[0]}\" class=\"roundify_smt\">x</div>{$templateElements[0]}. {$templateElements[1]} - <span>{$templateElements[2]}</span></div>";
			}
			
			$loadpage 			= '../html/template.htm';
			
			$toolable		=	"<span id=\"toolable\">Choose from the following tools to apply styling.</span>";
			$inserttextbtn	=	"<input style=\"display:none;\" type=\"button\" id=\"instext\" name=\"instext\" title=\"insert text\" /><input type=\"hidden\" name=\"curpage\" id=\"curpage\" value=\"{$_GET['curpage']}\" />";
			$insertimgbtn	=	"<input style=\"display:none;\" type=\"button\" id=\"insimg\" name=\"insimg\" title=\"insert image\" />";
			$rotatebtn		=	"<input style=\"display:none;\" type=\"button\" id=\"rotat\" name=\"rotat\" value=\"flip canvas\"/>";
			$prholder		=	"<div id=\"prholder\"></div>";
			$pgholder		=	"<div id=\"pgholder\"></div>";
			$canvas			=	"<div id=\"tarea\"></div>";
			
			$toolbar	=	"<div id=\"mytools\">$toolable$inserttextbtn$insertimgbtn$rotatebtn</div>";
			
			
			$templatecreator	.=	"<div style=\"width:100%;height:700px;\">$toolbar$pgholder$prholder$canvas</div>";
			$page = $templatecreator;
			break;
		
		case 'product':
		//check if user already has product pending approval
		$query	=	"SELECT `description` FROM `products` WHERE `user_id` = '{$_GET['user_id']}' AND `activation_time` IS NULL";
		if ($mydb->query($query)&&$mydb->numRows()) {
			$productArray	=	$mydb->getArray();
			$page		=	"<div id=\"addproductpage\"><span style=\"top:100px;position:relative;\">You currently have a product ({$productArray['description']}) pending approval.</span></div>";
		}
		else 
		{
			$productbtn	=	"<div id=\"productbtn\">Create</div>";
			$noticediv	=	"<div id=\"noticediv\"></div>";
			$page		=	"<div id=\"addproductpage\"><input type=\"text\" name=\"useraddproduct\" id=\"useraddproduct\" value=\"Product name ?\"/> $productbtn $noticediv</div>";
		}
		break;
		
		default:
	$loadpage 			= '../html/cp.summary.htm';
		break;
	}
	
	
	
	
	
	
	
}
else 
{
$login	.=	"<form action='' method='post' name='loginForm'>";
$login	.=	"<table id='loginT' cellpadding='0' cellspacing='0'>";
$login	.=	"<tr><td class='lA'>Email</td><td><input type='text' name='email' class='textline'/></td></tr>";
$login	.=	"<tr><td class='lA'>Password</td><td><input type='password' name='password' class='textline'/></td></tr>";
$login	.=	"<tr><td class='lA' colspan='2'><div class='fileBtn' onclick='document.loginForm.submit();'>Login</div></td></tr>";	
$login	.=	"</table>";
$login	.=	"</form>"; 
$page	=	$login;
}
		}
		else 
		{
			echo '<div style="width:100%;text-align:center;margin-top:50px;">User is not logged in<div>';
		}
		
		
}
else 
{
	echo '<div style="width:100%;text-align:center;margin-top:50px;">Sorry unknown</div>';
}
$defaultpage = $page;
$myTemplateInstance->htmlFile = $loadpage;
$myTemplateInstance->htmlPath = '';
$tags = array ('NODISPLAYTMP'=>$nodisplaytmp, 'NODISPLAY'=>$nodisplay, 'PCAROUSEL'=>$pcarousel, 'SELECTPRODUCTS'=>$productbreakdown, 'MASK'=>$mask, 'SHOWTEMPLATES'=>$templatebreakdown, 'ASLOAD'=>$asload, 'USERID'=>$_GET['user_id'], 'ONLOAD'=>0,'AUTOCAROUSEL'=>0, 'LOGO'=>$myusefulInstance->froglogo(), 'HTTPHOST'=>$_SESSION['clientArray']['http_host'], 'JRATIO'=>"0/0", 'METAKEYWORDS'=>$metaArray['keywords'],'METADESCRIPTION'=>$metaArray['description'],'METATITLE'=>$metaArray['title'],'JID'=>0,'PAGE' => $defaultpage, 'SESSIONID'=>session_id(), 'TIME'=>time());
echo $myTemplateInstance->generateHtml ( $tags );
?>