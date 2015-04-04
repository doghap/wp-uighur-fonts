<?php
/*
Plugin Name: WP-Uighur-Fonts
Plugin URI: http://doghap.net/wp-uighur-fonts.html
Description: WordPress نىڭ ئۇيغۇرچە نەشىرى ئۈچۈن ئۇيغۇرچە فونت ۋە كىرگۈزگۈچ تەمىنلەيدۇ.  WordPress 3.8 ئۇيغۇرچە نەشىرى ۋە شۇنىڭدىن يۇقىرى نەشىرلىرىگە ماس كېلىدۇ.
Author: Doghap.Net(دوغاپ)
Version: 1.0.1
Author URI: http://www.doghap.net
*/

add_action('admin_init','ug_vk');
add_action('init','ug_vk');

add_action('admin_init','fontface_css_beckend');
add_action('wp_enqueue_scripts','fontface_css_frontend');
add_action('login_enqueue_scripts', 'fontface_css_beckend');

add_action('wp_enqueue_scripts', 'remove_fontFaces');
add_filter( 'mce_css', 'mce_new_css' );

add_action('show_user_profile', 'user_font_family',3, 1);
add_action('edit_user_profile', 'user_font_family',3, 1);
add_action( 'profile_update', 'my_font_family_update', 10, 2 );

function user_font_family() {
?>

<table class="form-table">
  <tr>
    <th> <label for="tc_location">خەت نۇسخىسى</label>
    </th>
    <td><select name="user_font_family" id="user_font_family">
        <?php $font_family =  esc_attr( get_the_author_meta( 'user_font_family', get_current_user_ID() ) );?>
        <option value="Alpida Unicode System" <?php if($font_family=='Alpida Unicode System') echo 'selected'; ?>>Alpida Unicode System</option>
        <option value="UKIJ Tuz Tom"<?php if($font_family=='UKIJ Tuz Tom') echo 'selected'; ?>>UKIJ Tuz Tom</option>
      </select>
      <br>
      <span class="description">ئىشلىتىدىغان خەت نۇسخىڭىزنى تاللاڭ</span></td>
  </tr>
</table>
<?php
}

function my_font_family_update($user_id, $old_user_data ) {
	$font_family = $_POST['user_font_family'];
	if(get_the_author_meta( 'user_font_family', $user_id ) !=$font_family){
		update_user_meta($user_id, 'user_font_family', $font_family);
	}
}

function ug_vk() {
	wp_register_script('ug_vk', plugins_url('includes/ug_vk.js', __FILE__));
	wp_enqueue_script('ug_vk');
}

function remove_fontFaces()
{
	wp_dequeue_style(array('fontFaces', 'fontFaces-css'));
	wp_deregister_style( array('fontFaces', 'fontFaces-css') );
}

function fontface_css_beckend () {
	if(esc_attr( get_the_author_meta( 'user_font_family', get_current_user_ID() ) ) == 'UKIJ Tuz Tom'){
		wp_enqueue_style('ug_beckend_font', plugins_url('includes/ug_beckend_font_2.css', __FILE__));
	}else{
		wp_enqueue_style('ug_beckend_font', plugins_url('includes/ug_beckend_font.css', __FILE__));
	}
}

function fontface_css_frontend () {
	if(esc_attr( get_the_author_meta( 'user_font_family', get_current_user_ID() ) ) == 'UKIJ Tuz Tom'){
		wp_enqueue_style('ug_vk', plugins_url('includes/font_frontend_2.css', __FILE__));
	}else{
		wp_enqueue_style('ug_vk', plugins_url('includes/font_frontend.css', __FILE__));
	}
}


function mce_new_css($mce_css) {
  if (! empty($mce_css)) $mce_css .= ',';
  
  
  if(esc_attr( get_the_author_meta( 'user_font_family', get_current_user_ID() ) ) == 'UKIJ Tuz Tom'){
		$mce_css .= plugins_url('includes/font2.css', __FILE__);
	}else{
		$mce_css .= plugins_url('includes/font.css', __FILE__);
	}
  
  return $mce_css;
}

?>
