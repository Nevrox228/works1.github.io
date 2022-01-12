<?php
$name = $_POST['name'];
$phone = $_POST['phone'];

$product = 'Robot';
$price = 2400;

$query = "https://b24-5xqk32.bitrix24.ua/rest/1/luabpt2na1okhn4f/crm.lead.add.json?FIELDS[TITLE]={$product}&FIELDS[NAME]={$name}&FIELDS[PHONE][0][VALUE]={$phone}&price={$price}";

file_get_contents($query);


header('Location: success.php?name='.$_REQUEST['name'].'&phone='.$_REQUEST['phone']);