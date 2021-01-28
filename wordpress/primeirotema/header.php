<!DOCTYPE html>
<html lang="en">
<head>
  <?php wp_head() ?>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Primeiro tema</title>
</head>
<body <?php body_class(); ?> >
  <header>
    <h1>Meu primeiro tema</h1>

    <?php
    if(has_nav_menu('primary')){
      wp_nav_menu(array(
        'theme_location' => 'primary',
        'container' => 'nav',
        'fallback_cb' => false
      ));
    }
    ?>
  </header>