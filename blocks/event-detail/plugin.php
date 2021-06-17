<?php

/**
 * Plugin Name: Event Detail
 * Plugin URI: TBD
 * Description: TBD
 * Version: 1.1.0
 * Author: California Office of Digital Innovation
 * @package ca-design-system
 */

defined( 'ABSPATH' ) || exit;

/**
 * Load all translations for our plugin from the MO file.
 */
add_action( 'init', 'ca_design_system_gutenberg_block_event_detail' );

function ca_design_system_gutenberg_block_event_detail() {
    load_plugin_textdomain( 'ca-design-system', false, basename( __DIR__ ) . '/languages' );
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function ca_design_system_register_event_detail() {

    if ( ! function_exists( 'register_block_type' ) ) {
        // Gutenberg is not active.
        return;
    }

    // Register custom web component
    // wp_register_script(
    // 	'ca-design-system-event-detail-web-component',
    // 	plugins_url( 'web-component.js', __FILE__ ),
    // 	array( ),
    // 	filemtime( plugin_dir_path( __FILE__ ) . 'web-component.js' ),
    // );

    // wp_register_script(
    // 	'ca-design-system-event-detail',
    // 	plugins_url( 'block.js', __FILE__ ),
    // 	array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'underscore', 'moment', 'ca-design-system-event-detail-web-component' ),
    // 	filemtime( plugin_dir_path( __FILE__ ) . 'block.js' ),
    // );

    wp_register_style(
        'ca-design-system-event-detail',
        plugins_url( 'style.css', __FILE__ ),
        array( ),
        filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
    );

    register_block_type( 'ca-design-system/event-detail', array(
        'style' => 'cagov-event-detail',
        'editor_script' => 'ca-design-system-event-detail',
        'editor_style' => 'ca-design-system-event-detail-editor',
        'render_callback' => 'ca_design_system_gutenberg_blocks_event_detail_dynamic_render_callback'
    ) );
}

function ca_design_system_gutenberg_blocks_event_detail_dynamic_render_callback($block_attributes, $content)
{

    $title = $block_attributes["title"];
    $startDate = $block_attributes["startDate"];
    $endDate = $block_attributes["endDate"];
    $startTime = $block_attributes["startTime"];
    $endTime = $block_attributes["endTime"];
    $location = $block_attributes["location"];
    $cost = $block_attributes["cost"];

    return <<<EOT
    <div class="wp-block-ca-design-system-post-list cagov-post-list cagov-stack">
        <div>
            <h3>$title</h3>
            <div class="wp-block-ca-design-system-event-detail cagov-event-detail cagov-stack">
                <div class="startDate">$startDate</div>
                <div class="endDate">$endDate</div>
                <div class="startTime">$startTime</div>
                <div class="endTime">$endTime</div>
                <div class="location">$location</div>
                <div class="cost">$cost</div>
            </div>
        </div>
    </div>
    EOT;
}
add_action( 'init', 'ca_design_system_register_event_detail' );