$(document).ready(function(){
	$('body').on('click', '.dp-po-Dropdown-container .dp-po-dropdown-menu-item', function(event) {
		var is_disabled = $(this).hasClass('is-disabled');
		var is_selected = $(this).hasClass('is-selected');
		// console.log(is_disabled);
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
		event.preventDefault();
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

	$('body').on('click', '.label--time .Icon--Dots', function(event) {
		$(this).toggleClass("is-active");
	})

	$('body').on('click', '.Button--success', function(event) {
		$(this).parents('.Voting-section').removeClass('is-dislike')
		$(this).parents('.Voting-section').addClass('is-like')
	})
	$('body').on('click', '.Button--danger', function(event) {
		$(this).parents('.Voting-section').removeClass('is-like')
		$(this).parents('.Voting-section').addClass('is-dislike')
	})
	
	// Reply comment

	$('body').on('click', '.addReplyComment', function(event) {
		$('.dp-po-comments-item').find('.dp-po-comments-wrap.dp-po-reply-comment').remove();
		if($(this).closest('.dp-po-comments-item').find('.dp-po-comments-wrap.dp-po-reply-comment').length < 1){
			console.log($('body').find('.dp-po-comments-wrap.dp-po-reply-comment').length);
			var clone = $('body').find('.dp-po-comments-wrap.dp-po-reply-comment:eq(0)').clone();
			var item_parent = $(this).closest('.dp-po-comments-item');
			clone.appendTo(item_parent);
		}
		$(this).closest('.dp-po-comments-item').find('.dp-po-comments-wrap.dp-po-reply-comment').addClass('is-active');
		$(this).parents('.Voting-section').addClass('is-dislike');
		$(this).closest('.dp-po-label').find('.Icon--Dots').removeClass('is-active');
		$('body').find('.dp-po-comments.dp-po-add-comments').nextAll('.dp-po-comments-wrap').slideUp(200);
		$('body').find('.dp-po-comments.dp-po-add-comments').removeClass('is-active');
		$('body').find('.dp-po-comments.dp-po-add-comments').addClass('is-disabled');
		return false;
	})

	$('body').on('click', '.dp-po-comments-wrap.dp-po-reply-comment .dp-po-reply-comment-close', function(event) {
		$(this).closest('.dp-po-comments-wrap.dp-po-reply-comment').removeClass('is-active');
		$('body').find('.dp-po-comments.dp-po-add-comments').nextAll('.dp-po-comments-wrap').slideDown(200);
		$('body').find('.dp-po-comments.dp-po-add-comments').addClass('is-active');
		$('body').find('.dp-po-comments.dp-po-add-comments').removeClass('is-disabled');
	})
	$('body').on('click', '.dp-po-comments.dp-po-add-comments', function(event) {
		if(!$(this).hasClass('is-disabled')){
			$(this).toggleClass('is-active');
			$(this).nextAll('.dp-po-comments-wrap').slideToggle(200);
		}
	})

	$('body').on('click', '.dp-po-sort', function(event) {
		$(this).toggleClass('is-active');
		$(this)('.dp-po-dropdown-menu.Menu--tick').slideToggle(200)
	})
})

// cut function subscribe btn

function filterView_subscribe(){
    if (window.matchMedia('(max-width: 767px)').matches) {
        $('.Sidebar--right .dp-po-Dropdown-container.subscribe--dropdown').detach().appendTo('.dp-po-col-9 .mobileCutBtn');
    }else{  
        $('.mobileCutBtn .dp-po-Dropdown-container.subscribe--dropdown').detach().prependTo('.Sidebar--right');
    }
}

// cut function Share btn

// function filterView_share(){
//     if (window.matchMedia('(max-width: 767px)').matches) {
//         $('.mobileCutShare .Dropdown-share').detach().appendTo('.dp-po-col-9 .mobileCutBtn');
//     }else{  
//         $('.mobileCutBtn .Dropdown-share').detach().prependTo('.Sidebar--right .mobileCutShare');
//     }
// }

$(document).ready(function() {
    filterView_subscribe();
    // filterView_share();
    $(window).resize(function() {
        filterView_subscribe();
        // filterView_share();
    });
});
