<?php

/*
 * USERS BROWSE TEMPLATES TO CUSTOMISE
 */

require_once 'classes/dbconnect.class.php';

require_once 'classes/template.class.php';

$myTemplateInstance = new myTemplateClass();

$mydb = new db();
// displaying loaded markup

$content = (isset($_GET['dev'])) ? 'MARKUP' : false;

$contentclass = (isset($_GET['dev'])) ? 'dev' : false;

/*
 * $query	=	"SELECT * FROM `users`"; if ($mydb->query($query)&&$mydb->numRows())
 * { 	echo "ok"; }else { 	echo "fail"; }
 */

$header = file_get_contents('html/global/header.htm');

$content = file_get_contents('html/global/content.htm');

$footer = file_get_contents('html/global/footer.htm');

$loadpage = (isset($_GET['dev'])) ? 'html/index.htm' : 'html/dev.htm';

$myTemplateInstance->htmlFile = $loadpage;

$myTemplateInstance->htmlPath = '';

$tags = array(
		'HEADER' => $header,
		'FOOTER' => $footer,
		'CONTENT' => $content,
		'SITETITLE' => 'simply badass.',
		'DEVCLASS' => $contentclass
);

echo $myTemplateInstance->generateHtml($tags);

?>