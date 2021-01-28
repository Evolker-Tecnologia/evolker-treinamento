<?php
//Include
require get_template_directory().'/include/setup.php';

//Hooks
add_action("wp_enqueue_scripts", "ig_theme_styles");
add_action("after_setup_theme", "ig_after_setup");