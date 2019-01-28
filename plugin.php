<?php
/**
 * Plugin Name: IO - Info Boxes 
 * Plugin URI: https://github.com/iosepa/gutenberg-box
 * Description: First include ib-align and add info-boxes to it. The info-boxes will then have a grid pattern. You can add a link to an info-box with the block settings panel on the right. 
 * Author: Joseph Oxborrow
 * Author URI: https:iosepa.io
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
