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

	$('body').on('click', '.dp-po-vote .dp-po-item-vote', function(event) {
		$(this).addClass('is-active')
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
		$(this).find('.dp-po-dropdown-menu.Menu--tick').slideToggle(200);
		return false;
	})

	$('body').on('click', '.dp-po-mobile-subscribe .Icon--Dots', function(event) {
		$(this).addClass('is-active');
		$('body').find('.dp-Template').addClass('is-open');
		$(this).find('.dp-po-dropdown-menu').slideUp(200);
	})

	$('body').on('click', '.dp-po-mobile-subscribe .Icon--close', function(event) {
		$('.dp-po-mobile-subscribe .Icon--Dots').removeClass('is-active');
		$('body').find('.dp-Template').removeClass('is-open');
		$(this).find('.dp-po-dropdown-menu').slideDown(200);
	})

	$('body').on('click', '.dp-po-share-btn', function(event) {
		$('body').find('.Dropdown-share .dp-po-dropdown-menu').addClass('is-active');
	})

	$('body').on('click', '.dp-po-dropdown-menu .dp-po-back-btn', function(event) {
		$('body').find('.Dropdown-share .dp-po-dropdown-menu').removeClass('is-active');
	})
	$('body').on('click', '.dp-po-md-collapse-title', function(event) {
		if($('body').outerWidth() < 992){
			if($(this).closest('.dp-po-md-collapse').find('.dp-po-md-collapse-content').hasClass('is-active')){
				$(this).closest('.dp-po-md-collapse').find('.dp-po-md-collapse-content').removeClass('is-active');
				$(this).closest('.dp-po-md-collapse').find('.dp-po-md-collapse-content').slideUp(200);
				$(this).removeClass('is-active');
			}else{
				$(this).closest('.dp-po-md-collapse').find('.dp-po-md-collapse-content').slideDown(200);
				$(this).closest('.dp-po-md-collapse').find('.dp-po-md-collapse-content').addClass('is-active');
				$(this).addClass('is-active');
			}
			return false;
		}
	})
	$(window).resize(function(event) {
		if($('body').outerWidth() > 992){
			$('body').find('.dp-po-md-collapse-content').removeClass('is-active');
			$('body').find('.dp-po-md-collapse-title').removeClass('is-active');
			$('body').find('.dp-po-md-collapse-content').attr('style','');
		}
	});
})

// cut function subscribe btn

function filterView_subscribe(){
    if (window.matchMedia('(max-width: 992px)').matches) {
        $('.Sidebar--right .dp-po-Dropdown-container.subscribe--dropdown').detach().appendTo('.dp-po-col-9 .mobileCutBtn');
    }else{  
        $('.mobileCutBtn .dp-po-Dropdown-container.subscribe--dropdown').detach().prependTo('.Sidebar--right');
    }
}

// cut function Related content

function filterView_collapse(){
    if (window.matchMedia('(max-width: 992px)').matches) {
        $('.dp-po-related-wrap').detach().appendTo('.dp-po-col-9 .dp-po-wrap-collapse-md');
        $('.dp-po-labels-wrap').detach().appendTo('.dp-po-col-9 .dp-po-wrap-collapse-md');
        $('.dp-po-article-details-wrap').detach().appendTo('.dp-po-col-9 .dp-po-wrap-collapse-md');
    }else{  
        $('.dp-po-wrap-collapse-md .dp-po-related-wrap').detach().appendTo('.dp-po-Sidebar.Sidebar--right');
        $('.dp-po-wrap-collapse-md .dp-po-labels-wrap').detach().appendTo('.dp-po-Sidebar.Sidebar--right');
        $('.dp-po-wrap-collapse-md .dp-po-article-details-wrap').detach().appendTo('.dp-po-Sidebar.Sidebar--right');
    }
}

$(document).ready(function() {
    filterView_subscribe();
    filterView_collapse();
    $(window).resize(function() {
        filterView_subscribe();
        filterView_collapse();
    });
});
