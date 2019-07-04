$(document).ready(function(){
	$('body').on('click', '.dp-po-dropdown-menu-item', function(event) {
		var is_disabled = $(this).hasClass('is-disabled');
		var is_selected = $(this).hasClass('is-selected');
		console.log(is_disabled);
		if(is_disabled == false){
			if(is_selected == false){
				
				$(this).addClass('is-selected');
				$(this).closest('.dp-po-Dropdown-container').find('.dp-po-dropdown-atom').removeClass('is-onselected');
			}else{
				$(this).removeClass('is-selected');
			}
			if($(this).closest('.dp-po-dropdown-menu').find('.dp-po-dropdown-menu-item.is-selected').length == 0){
				$(this).closest('.dp-po-Dropdown-container').find('.dp-po-dropdown-atom').addClass('is-onselected');
			}
		}
	});
	$('body').on('mouseover mousemove', '.subscribe--dropdown', function(event) {
		if($(this).data('sitertohide')){
			clearTimeout($(this).data('sitertohide'));
			$(this).data('sitertohide',false);
		}
		$(this).find(".dp-po-dropdown-atom").addClass('is-active');
	})
	$('body').on('mouseout', '.subscribe--dropdown', function(event) {
		if($(this).data('sitertohide')){
			clearTimeout($(this).data('sitertohide'));
			$(this).data('sitertohide',false);
		}
		timer = setTimeout(function (_this){
			$(_this).find(".dp-po-dropdown-atom").removeClass('is-active');
		},200,this);
		$(this).data('sitertohide',timer);
	})

	$('body').on('mouseover mousemove', '.dp-po-share', function(event) {
		if($(this).data('sitertohide')){
			clearTimeout($(this).data('sitertohide'));
			$(this).data('sitertohide',false);
		}
		$(this).addClass('is-active');
	})
	$('body').on('mouseout', '.dp-po-share', function(event) {
		if($(this).data('sitertohide')){
			clearTimeout($(this).data('sitertohide'));
			$(this).data('sitertohide',false);
		}
		timer = setTimeout(function (_this){
			$(_this).removeClass('is-active');
		},200,this);
		$(this).data('sitertohide',timer);
	})

	$('body').on('click', '.Button--success', function(event) {
		$(this).parents('.Voting-section').removeClass('is-dislike')
		$(this).parents('.Voting-section').addClass('is-like')
	})
	$('body').on('click', '.Button--danger', function(event) {
		$(this).parents('.Voting-section').removeClass('is-like')
		$(this).parents('.Voting-section').addClass('is-dislike')
	})


	$('body').on('click', '.dp-po-comments', function(event) {
		$(this).toggleClass('is-active');
		$('.dp-po-comments-wrap').slideToggle(200)
	})
})