<?php
//include
require get_template_directory().'/include/setup.php';

//hooks
add_action('wp_enqueue_scripts', 'ip_theme_styles');
add_action('after_setup_theme', 'ip_after_setup');
add_action('widgets_init', 'ip_widgets');
