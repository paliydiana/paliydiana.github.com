jQuery(document).ready(function(){
	jQuery('#enter').on('click', function(){
		jQuery('#overlayId').css('display', 'block');
		jQuery('#bg_blur').css('display', 'block');
		jQuery('#cont').attr({
			'class' : 'blur_cont'
		});
	}
	);
	jQuery('#close').on('click', function(){
		jQuery('#overlayId').css('display', 'none');
		jQuery('#bg_blur').css('display', 'none');
		jQuery('#cont').attr({
			'class' : 'cont1'
		});
	});
});