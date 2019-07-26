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

	$('html').on('click', 'body.is-open .dp-po-overlay', function(event) {
		$('body').removeClass('is-open');
		$('.dp-po-registration-popup.is-active').removeClass('is-active');
		$('.dp-po-calendar-wrapper.calendar--community.is-logged').removeClass('is-logged');
	});
	$('body').on('click', '.label--time .Icon--Dots', function(event) {
		if($(this).hasClass("is-active")){
			$(this).removeClass("is-active");
		}else{
			$(this).closest('.dp-po-comments-wrap').find('.label--time .Icon--Dots').removeClass('is-active');
			$(this).addClass("is-active");
		}
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
		$(this).toggleClass('is-active')
	})

	$('body').on('click', '.calendar--community .dp-po-vote-calendar', function(event) {
		$(this).closest('.calendar--community').toggleClass('is-active')
	})

	$('body').on('click', '.calendar--community .dp-po-date', function(event) {
		$('body').find('.dp-po-registration-popup').toggleClass('is-active');
		$('body').find('.dp-po-calendar-wrapper.calendar--community').toggleClass('is-logged');
		$('body').toggleClass('is-open');
	})

	$('body').on('click', '.dp-po-user-status .dp-po-dropdown-atom', function(event) {
		$(this).toggleClass('is-active')
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
	function validateEmail(email) {
	  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  return re.test(email);
	}
	$('body').on('click', '.Resend--Link', function(event) {
		var form = $(this).attr('data-form-display');
		// console.log(form);
		$('.dp-po-Info.Info--danger').addClass('dp-po-d-none');
		$('.dp-po-title-tab').addClass('is-active');
		$(form).addClass('is-active');
		return false;
	});
	$('body').on('click', '.dp-po-Dropdown-container .dp-po-dropdown-atom', function(event) {
		$(this).toggleClass('is-active');
	});
	$('body').on('click', '.dp-po-Dropdown-container .dp-po-dropdown-menu-item', function(event) {
		event.preventDefault();
		var is_selected = (typeof $(this).attr('data-selected') != 'undefined') ? true : false;
		var value = $(this).attr('data-value');
		if(!is_selected){
			$(this).closest('.dp-po-Dropdown-container').find('select options').prop('selected', false );
			$(this).closest('.dp-po-Dropdown-container').find('select').find('option[value="'+value+'"]').prop('selected', true );
			$(this).closest('.dp-po-Dropdown-container').find('.dp-po-dropdown-menu-item').removeAttr('data-selected');
			$(this).closest('.dp-po-Dropdown-container').find('.dp-po-dropdown-menu-item').removeClass('is-selected');
			var label_selected = $(this).text();
			$(this).attr('data-selected','selected');
			$(this).addClass('is-selected');
			$(this).closest('.dp-po-Dropdown-container').find('.placeholder').html(label_selected);
			$('.dp-po-Dropdown-container').find('.dp-po-dropdown-atom').removeClass('is-active');
		}
	});
	items = [];
	$('.dp-po-Breadcrumbs.Breadcrumbs--custom .dp-po-Breadcrumb-item').each(function(index, el) {
		var itemdisplay = $(el).css('display');
		if( itemdisplay != "none" ){
			var item = {
				item : $(el),
				width : $(el).outerWidth(),
			};
			items.push(item);
			// $('.dp-po-Breadcrumbs.Breadcrumbs--custom').data('items',items);
		}
	});
	function on_resize_nav(){
		if(screen.width < 992){
			var items_width = cout_itemswidth(items);
			// console.log(screen.width);
			if(items_width > screen.width){
				var max_size = $('.dp-po-Breadcrumbs-wrap .dp-po-Breadcrumbs').outerWidth() / items.length;
					max_size = Math.ceil(max_size)
				$.each(items,function(index, elem) {
					elem.item.css('max-width',max_size+"px");
					console.log(elem.item);
					console.log(max_size);
				});
			}else{
				$('.dp-po-Breadcrumbs.Breadcrumbs--custom .dp-po-Breadcrumb-item').each(function(index, el) {
					$(el).css({ 'max-width' : '' });
				});
			}
		}else{
			$('.dp-po-Breadcrumbs.Breadcrumbs--custom .dp-po-Breadcrumb-item').each(function(index, el) {
				$(el).css({ 'max-width' : '' });
			});
		}
	}
	function cout_itemswidth(items){
		var items_width = 0;
			$.each(items,function(index, elem) {
				// console.log(item.item);
				// console.log(item.width);
				items_width += elem.width;
			});
			return Math.ceil(items_width);
	}
	on_resize_nav()
	$(window).resize(function(event) {
		on_resize_nav();
	});
	$('body').find('.as-dp-po-Dropdown-container').each(function(index, el) {
		var placeholder = $(el).attr('placeholder');
		$(el).css('display','none');
		$html = '<span class="dp-po-dropdown-atom"><span class="placeholder"></span><a class="dp-po-arrow arrow--bottom arrow--brand-primary"></a></span><ul class="dp-po-dropdown-menu">';
			var label_selected = placeholder;
		$('option',el).each(function(indexOpt, elOpt) {
			var value = $(elOpt).attr('value');
			var label = $(elOpt).text();
			if(typeof $(elOpt).attr('selected') != 'undefined'){
				label_selected = label;
			}
			$html += '<li class="dp-po-dropdown-menu-item'+( (typeof $(elOpt).attr('selected') != 'undefined') ? ' is-selected' : '')+'" data-value="'+value+'" '+( (typeof $(elOpt).attr('selected') != 'undefined') ? 'data-selected="selected"' : '')+'>'+label+'</li>';
		});
		$html += '</ul>';
		$(el).wrap('<div class="dp-po-Dropdown-container"></div>');
		$(el).closest('.dp-po-Dropdown-container').append($html);
		$(el).closest('.dp-po-Dropdown-container').find('.placeholder').html(label_selected);
	});
	$('body').on('submit', '.Form--login', function(event) {
		$(this).removeClass('is-active');
		var email    = $(this).find('[name="email"]').val();
		var is_valid_email    = validateEmail(email);
		var password = $(this).find('[name="password"]').val();
		if(is_valid_email == true && password.trim() != ''){
			$('.dp-po-Info.Info--success').addClass('dp-po-d-none');
			$('.dp-po-Info.Info--danger').addClass('dp-po-d-none');
			$('.dp-po-title-tab').removeClass('is-active');
			$('.dp-po-Info.Info--success').removeClass('dp-po-d-none');
			$('.comment--item').addClass('is-active');
		// }else{
		}
		return false;
	});
	$('body').on('submit', '.Form--Registration', function(event) {
		$(this).removeClass('is-active');
		var email    = $(this).find('[name="email"]').val();
		var password = $(this).find('[name="password"]').val();
		$('.dp-po-Info.Info--success').addClass('dp-po-d-none');
		$('.dp-po-Info.Info--danger').addClass('dp-po-d-none');
		if(email.trim() != '' && password.trim() != ''){
			$('.dp-po-title-tab').removeClass('is-active');
			// $('.dp-po-Info.Info--danger a').attr('data-form-display','.Form--login');
			$('.dp-po-Info.Info--danger').removeClass('dp-po-d-none');
			//$('.dp-po-Info.Info--success.dp-po-d-none').removeClass('dp-po-d-none');
		//}else{
			// $('.dp-po-Info.Info--danger a').attr('data-form-display','.Form--Registration');
			// $('.dp-po-Info.Info--danger').removeClass('dp-po-d-none');
		}
		return false;
	});
	$('body').on('click', '.dp-po-form-registration .dp-po-title-tab a[data-toggle]', function(event) {
		var parent = $(this).attr('data-parent');
		var toggle = $(this).attr('data-toggle');
		$(parent).removeClass('is-active');
		$(toggle).addClass('is-active');
		$(this).closest('.dp-po-title-tab').find('li.is-active').removeClass('is-active');
		$(this).closest('li').addClass('is-active');
		return false;
	});
	$('body').on('click', '.dp-po-comments.dp-po-add-comments', function(event) {
		$(this).nextAll('.dp-po-comments-wrap').removeClass('is-hidden-md');
		if(!$(this).hasClass('is-disabled')){
			if(!$(this).hasClass('is-active')){
				$(this).addClass('is-active');
				$(this).nextAll('.dp-po-comments-wrap').addClass('is-show');
				$(this).nextAll('.dp-po-comments-wrap').removeClass('is-hide');
			}else{
				$(this).removeClass('is-active');
				$(this).nextAll('.dp-po-comments-wrap').removeClass('is-show');
				$(this).nextAll('.dp-po-comments-wrap').addClass('is-hide');
				// $(this).nextAll('.dp-po-comments-wrap').addClass('is-hidden');
				// $(this).nextAll('.dp-po-comments-wrap').slideUp(200);
			}
		}
	})

	$('body').on('click', '.dp-po-sort', function(event) {
		$(this).toggleClass('is-active');
		$(this).find('.dp-po-dropdown-menu.Menu--tick').slideToggle(200);
		return false;
	})

	$('body').on('click', '.dp-po-mobile-subscribe .Icon--Dots', function(event) {
		$(this).addClass('is-active');
		$('body').addClass('is-open');
		$(this).find('.dp-po-dropdown-menu').slideUp(200);
	})

	$('body').on('click', '.dp-po-mobile-subscribe .Icon--close', function(event) {
		$('.dp-po-mobile-subscribe .Icon--Dots').removeClass('is-active');
		$('body').removeClass('is-open');
		$(this).find('.dp-po-dropdown-menu').slideDown(200);
	})

	$('body').on('click', '.dp-po-share', function(event) {
		$('body').find('.Dropdown-share .dp-po-dropdown-menu').addClass('is-active');
		return false;
	})

	$('body').on('click', '.dp-po-dropdown-menu .dp-po-back-btn', function(event) {
		$('body').find('.Dropdown-share .dp-po-dropdown-menu').removeClass('is-active');
		return false;
	})
	$('body').on('click', '.dp-po-md-collapse-title', function(event) {
		if(window.matchMedia('(max-width: 992px)').matches){
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
	$('body').on('click', '.subscribe--dropdown', function(event) {
		if(window.matchMedia('(max-width: 992px)').matches){
			if($(this).data('is-active') == true){
				$(this).data('is-active',false);
				$(this).find(".dp-po-dropdown-atom").removeClass('is-active');
			}else{
				$(this).data('is-active',true);
				$(this).find(".dp-po-dropdown-atom").addClass('is-active');
			}
		}
	})
	$(window).resize(function(event) {
		if(window.matchMedia('(max-width: 992px)').matches){
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
