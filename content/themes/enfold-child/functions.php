<?php

/*
* Add your own functions here. You can also copy some of the theme functions into this file. 
* Wordpress will use those functions instead of the original functions then.
*/
add_action('wp_head', 'preconnect_wp_head');
function preconnect_wp_head(){
    //Close PHP tags 
    ?>
	<link rel="dns-prefetch" href="https://www.google-analytics.com/">
	<link rel="preconnect" href="https://www.google-analytics.com/">
        <link rel="dns-prefetch" href="https://www.googletagmanager.com/">
        <link rel="preconnect" href="https://www.googletagmanager.com/">
	<link rel="dns-prefetch" href="https://fonts.gstatic.com/">
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <?php //Open PHP tags
}

if ( !defined('ABSPATH') ){ die(); }
global $avia_config;
/* remove "Debugging Info For Theme Support:" message
*
*/
if (!function_exists('avia_debugging_info')){
  function avia_debugging_info() {
    // 
  }
}
