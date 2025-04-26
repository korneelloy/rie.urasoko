<?php
include "header.php";
if (isset ($_GET["langue"]) && (isset ($_GET["page"]))){
    $langue = $_GET["langue"];
    $page = $_GET["page"];
    include_once "$langue/menu.html";
    include_once "$langue/$page.html";
    include_once "$langue/footer.html";
}else{
    include_once "fr/menu.html";
    include_once "fr/accueil.html";
    include_once "fr/footer.html";
};
