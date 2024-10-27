RUNNING_SHAKE = false
IS_FOCUSED = true
jQuery.fn.shake = function (interval, distance, times) {
	if (RUNNING_SHAKE || !IS_FOCUSED)
		return
	RUNNING_SHAKE = true
	interval = typeof interval == "undefined" ? 100 : interval;
	distance = typeof distance == "undefined" ? 10 : distance;
	times = typeof times == "undefined" ? 3 : times;
	var jTarget = $(this);
	jTarget.css('position', 'relative');
	for (var iter = 0; iter < (times + 1); iter++) {
		jTarget.animate({
			top: ((iter % 2 == 0 ? distance : distance * -1))
		}, interval);
	}
	var ret = jTarget.animate({
		top: 0
	}, interval);
	RUNNING_SHAKE = false
	return ret
}

$(window).blur(function () {
	IS_FOCUSED = false
})
$(window).focus(function () {
	IS_FOCUSED = true
})

$(window).on('resize scroll', function () {
	refreshImages()
	repositionSlickArrows()
});

DEFAULT_SIZE = 1024;
SIZES = [100, 250, 500, 1024];
setTimeout(function(){refreshImages()}, 250)


function refreshImages() {
	$('.pb-linkimage img').each(function () {
		var el = $(this)
		if (!el.visible(true))
			return
		if (!el.data('src'))
			return
		if (el.attr('src'))
			return;
		
		let parent_group = el.closest('.pb-links')
		if (parent_group.hasClass('d-none') && parent_group.attr('class').indexOf('group-container-') != -1) {
			return;
		}

		if ($('#LB_UserID').val() == -1688591) {
			var url = el.data('src').replace("-" + DEFAULT_SIZE, "-" + SIZES[3])
			el.attr('src', url)
			return
		} 

		for (i = 0; i < SIZES.length; i++) {
			if ((el.width() * 1.2) < SIZES[i]) {
				var url = el.data('src').replace("-" + DEFAULT_SIZE, "-" + SIZES[i])
				el.attr('src', url)
				return
			}
		}
		el.attr('src', url) = el.data('src')
	})
}

IS_start = 48;
IS_limit = 48;
if (typeof (HAS_PAGES) == "undefined") {
	IS_reachedMax = true;
} else if (HAS_PAGES) {
	IS_reachedMax = false;
} else {
	IS_reachedMax = true;
}

IS_done = [0]

function loadMorePosts() {
	if (IS_reachedMax) {
		return;
	}
	if (jQuery.inArray(IS_start, IS_done) !== -1) {
		return;
	}
	if (typeof (NONCE) == "undefined") {
		NONCE = ""
	}
	if (typeof (NONCE_TIME) == "undefined") {
		NONCE_TIME = 0
	}
	let uniqueid = ''
	if ($('#links_container_overall').data('scrollid')) {
		uniqueid = $('#links_container_overall').data('scrollid')
	}

	IS_done.push(IS_start)
	$.ajax({
		url: "/api/",
		method: "POST",
		dataType: "json",
		data: {
			ACTION: 'PUB_getMoreLinks',
			nonce: NONCE,
			nonce_time: NONCE_TIME,
			start: IS_start,
			limit: IS_limit,
			user_id: $('#LB_UserID').val(),
			uniqueid: uniqueid,
			token: CSFR_TOKEN
		},
		success: function (res) {
			if (res.status) {
				for (let group_id in res.info.links) {
					let group_links = res.info.links[group_id]
					$('div.group-container-'+group_id).append(group_links.join("\n"));
					$('div.group-container-'+group_id).removeClass('d-none').addClass('d-flex')
					$('h5.group-container-'+group_id).removeClass('d-none').addClass('d-block')
				}
				refreshImages()
				IS_start += IS_limit;
			}
			if (res.info.reached_max) {
				IS_reachedMax = true;
			}
			if (typeof(res.info.last_link) != "undefined") {
				LAST_LINK_ID = res.info.last_link
			}

		}
	});
}

function repositionSlickArrows() {
	var difference = Math.round(($(document).width() - $('.maincontainer').width()) / 2);
	if (difference > 50) {
		difference = difference-40;
	}
	$('.slick-next').attr('style', 'right:' + difference + 'px !important');
	$('.slick-prev').attr('style', 'left:' + difference + 'px !important');
}

$(document).ready(function () {
	$(".vibrate").shake(400, 5, 3);
	setInterval(function () {
		$(".vibrate").shake(400, 5, 3);
	}, 4000)
});

$(window).scroll(function () {
	
	if ($(window).width() < 500) {
		if ($(document).height() - $(window).height() - $(window).scrollTop() <= 500) {
			loadMorePosts();
		} else {
			if(typeof(LAST_LINK_ID) != "undefined") {
				if ($('#PB_L_'+LAST_LINK_ID).length) {
					let last_pos = Math.round($('#PB_L_'+LAST_LINK_ID).position().top-($('#PB_L_'+LAST_LINK_ID).height()+200))
					let window_scroll = Math.round($(window).scrollTop())
					let window_height = Math.round($(window).height()/2)
					if (window_scroll+window_height > last_pos) {
						loadMorePosts();
					}
				}
				
			}
		}
	} else {
		if ($(document).height() - $(window).height() - $(window).scrollTop() <= 300) {
			loadMorePosts();
		} else {
			if(typeof(LAST_LINK_ID) != "undefined") {
				if ($('#PB_L_'+LAST_LINK_ID).length) {
					let last_pos = Math.round($('#PB_L_'+LAST_LINK_ID).position().top-($('#PB_L_'+LAST_LINK_ID).height()+200))
					let window_scroll = Math.round($(window).scrollTop())
					let window_height = Math.round($(window).height()/2)
					if (window_scroll+window_height > last_pos) {
						loadMorePosts();
					}
				}
			}
		}
	} 
});

$(window).on("beforeunload", function () {
	$(window).scrollTop(0);
});

function iOSorAndroid() {
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;
	if (/android/i.test(userAgent)) {
		return "AND";
	}
	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		return "IOS";
	}
	return false;
}
if (typeof (DEEPLINKING_DISABLED) == "undefined") {
	DEEPLINKING_DISABLED = false;
}

if (iOSorAndroid() !== false && !DEEPLINKING_DISABLED) {
	$('.deep-links a,a.deep-linking').click(function (e) {
		var icon = $(e.target)
		if ($(this).hasClass('pb-linkbox')) {
			var a = $(this)
		} else {
			var a = icon.parent()
		}
		var tracked = a.attr("href")
		var url = a.data('url')
		var network = a.data('network')
		if (network == 'SOCIAL_TW') { // Twitter
			var R = new RegExp(/https:\/\/(www\.)?twitter\.com\/([^\/\?]+)/, 'i')
			var parts = R.exec(url);
			var username = parts[2];
			LB_OpenTwitter(username, url)
		} else if (network == 'SOCIAL_FB') { // Facebook
			var R = new RegExp(/https:\/\/(www\.)?facebook\.com\/([^\?]+)/, 'i')
			var parts = R.exec(url);
			var username = parts[2];
			LB_OpenFacebook(username, url)
		} else if (network == 'SOCIAL_YT' || network == "MUSIC_YTB" || network == "MUSIC_YTM") { // YouTube
			var to_open = url.replace("https://", "");
			to_open = to_open.replace("http://", "");
			LB_OpenYouTube(to_open, url)
		} else if (network == 'SOCIAL_SN') { // Snapchat
			var R = new RegExp(/https:\/\/(www\.)?snapchat\.com\/add\/([^\/\?]+)/, 'i')
			var parts = R.exec(url);
			var username = parts[2];
			LB_OpenSnapchat(username, url)
		} else if (network == 'SOCIAL_IG') { // Instagram
			var R = new RegExp(/https:\/\/(www\.)?instagram\.com\/([^\/\?]+)/, 'i')
			var parts = R.exec(url);
			var username = parts[2];
			LB_OpenInstagram(username, url)
		} else if (network == 'CONTACT_WA') { // Instagram
			var R = new RegExp(/http[s]?:\/\/(www\.)?wa\.me\/([^\/\?]+)/, 'i')
			var parts = R.exec(url);
			var number = parts[2];
			LB_OpenWhatsapp(number, url)
		} else
			return

		$.ajax({
			type: "POST",
			url: "/api/",
			data: {
				ACTION: "IC_track",
				url: url,
				network: network,
				user_id: $('#LB_UserID').val(),
				timezone: $('#LB_UserTimezone').val(),
				token: CSFR_TOKEN
			}
		})

		e.preventDefault();
	});

	LB_TRACKED_LINK = '';
	LB_TRACKED_TIME = 0;
	LB_TRACKED_FUNC = false;

	$(window).blur(function (e) {
		if (LB_TRACKED_FUNC) {
			clearTimeout(LB_TRACKED_FUNC)
		}
	});
}

function orNormalRedirect(tracked) {
	LB_TRACKED_LINK = tracked;
	LB_TRACKED_TIME = new Date();
	LB_TRACKED_FUNC = setTimeout(function () {
		var current_time = new Date();
		var timeDiff = current_time - LB_TRACKED_TIME;
		if (timeDiff < 1000) {
			history.pushState(null, null, location.href.toString());
			location.replace(LB_TRACKED_LINK)
		}
	}, 500);
}


function LB_OpenTwitter(username, tracked) {
	location.replace("twitter://user/?screen_name=" + username);
	orNormalRedirect(tracked)
}

function LB_OpenFacebook(username, tracked) {
	if (iOSorAndroid() == "AND") {
		location.href = "fb://facewebmodal/f?href=https://www.facebook.com/"+username;
	}
	orNormalRedirect(tracked)
}

function LB_OpenWhatsapp(number, tracked) {
	location.href = "whatsapp://send?phone=" + number;
	orNormalRedirect(tracked)
}



function LB_OpenYouTube(to_open, tracked) {
	if (iOSorAndroid() == "AND") {
		location.replace("vnd.youtube://" + to_open);
	} else if (iOSorAndroid() == "IOS") {
		location.replace("youtube://" + to_open);
	}
	orNormalRedirect(tracked)
}

function LB_OpenSnapchat(username, tracked) {
	location.href = "snapchat://add/" + username;
	orNormalRedirect(tracked)
}

function LB_OpenInstagram(username, tracked) {
	location.href = "instagram://user?username=" + username;
	orNormalRedirect(tracked)
}

function LP_ReloadImg(el) {
	el.src = el.src + "&v=" + Math.random(10, 99)
}

// Donation
$('.pb-supportme').on('click', function () {
	$(this).find('.pb-donate-form').slideDown(function () {
		footerPositionUpdate()
	})
	$('.pb-close').show()

})
$('.pb-close').on('click', function () {
	var parent = $(this).parent();
	parent.find('.pb-donate-form').slideUp(function () {
		footerPositionUpdate()
	})
	$(this).hide()

})
$('.pb-d-value').on('click', function (e) {
	var val = $(this).data('value')
	var parent = $(this).parents('.pb-donate-form');
	parent.find('.pb-d-tip').val(val)
	parent.find('.pb-d-value').removeClass('btn-outline-paypal')
	parent.find('.pb-d-value').addClass('btn-paypal')
	$(this).addClass('btn-outline-paypal')
	$(this).removeClass('btn-paypal')
})
$('.pb-d-paypal').on('click', function (e) {
	var parent = $(this).parents('.pb-support-parent');
	e.preventDefault()
	var val = parent.find('.pb-d-tip').val()
	if (val > 0) {
		parent.find('.pb-d-value').val(val)
		var text = parent.find('.pb-d-message').val()
		parent.find('.pb-d-text').val(text);
		$.ajax({
			type: "POST",
			url: "/api/",
			data: {
				ACTION: "U_addDonation",
				eid: $('#LB_UserID').val(),
				token: CSFR_TOKEN
			}
		})
		parent.find('.pb_d_form')[0].submit()

		$('#pb-donate-form').slideUp()
		$('.pb-close').hide()
	}
	return false;
})

$('.public-container').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
	var container = $('#slick-slide0' + nextSlide)
	$('.page-inject').addClass('d-none')
	$('.page-inject-' + container.data('page-id')).removeClass("d-none")
});


if ($('#PB_SignupModal').length > 0) {
	$('.footer-signup').on('click', function (e) {
		e.preventDefault();
		$.getScript("/202006/js/lnkbio.login.js?rand=" + Math.random());
		$('head').append('<link rel="stylesheet" href="/202006/css/boostrap.spinners.css?rand=' + Math.random() + '">');
		$.getScript("https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js", function () {
			$('#PB_SignupModal').modal('show')
			modalIsLoading($('#PB_SignupModal'))
			$.ajax({
				type: "POST",
				url: "/api/",
				data: {
					ACTION: "PUB_getSignupModal",
					ref: $('#LB_UserID').val(),
					token: CSFR_TOKEN
				},
				success: function (res) {
					if (res.status) {
						$('#PB_SignupModal').find('.loaded-container').html(res.info.html)
						modalHasLoaded($('#PB_SignupModal'))
					}
				}
			})
		});
	})
	$('#PB_SignupModal').find('.close').on('click', function (e) {
		$('#PB_SignupModal').removeClass('d-block')
	})
	$('#PB_SignupModal').on('click', '.check-consent', function () {
		if (checkConsent()) {
			modalIsLoading($('#PB_SignupModal'))
			if ($(this).data('link')) {
				location.href = $(this).data('link')
			} else if ($(this).data('next')) {
				if ($(this).data('next') == "LN_TwitterRedir") {
					LN_TwitterRedir(true)
				}
			}
		}
	});
	$('#PB_SignupModal').on('click', '.login-button.fb-signup-btn', function () {
		if (checkConsent()) {
			FB.login(function (response) {
				fbSignup(response);
			}, {
				scope: 'instagram_basic,pages_show_list,'
			});
		}
	});
}

$('#PB_IconDetailsModal').on('show.bs.modal', function (e) {
	let modal = $(this)
	modalIsLoading(modal)
	$('#icon-copied-button').addClass('d-none')
	$('#icon-copy-button').removeClass('d-none')
	let icon = $(e.relatedTarget)
	$.ajax({
		type: "POST",
		url: "/api/",
		data: {
			ACTION: "IC_track",
			url: icon.data('text'),
			network: icon.data('network'),
			user_id: $('#LB_UserID').val(),
			timezone: $('#LB_UserTimezone').val(),
			token: CSFR_TOKEN
		}
	})
	$('#PB_IconDetailsCopyInput').val(icon.data('text'))
	let icon_class = icon.find('i').attr('class').replace('ts-icons-public', '').replace('ts-icons-bigger', '').replace('ts-internaltitle', '').replace('ts-midhuge', '').replace('mt-4', '')
	modal.find('.modal-title').html('<i class="' + icon_class + ' ts-title"></i> ' + icon.data('label'))
	modalHasLoaded(modal)
})

function copyIcon() {
	$('#icon-copied-button').removeClass('d-none')
	$('#icon-copy-button').addClass('d-none')
	var copyText = document.getElementById("icon-copy-text");
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	document.execCommand("copy");
}

$('#PB_IconDetailsModal').on('click', '#icon-copy-button', function (e) {
	e.preventDefault();
	copyIcon()
})

function checkShopModalHeight() {
	if((window.innerHeight - 50) < $('#PB_ShopModal').find('.modal-dialog').height()) {
		$('#PB_ShopModal').addClass('modal-fullscreen')
		$('#PB_ShopModal').find('.modal-header').addClass('modal-header-fullscreen')
		$('#PB_ShopModal').data('noslidedown', true);
	} else {
		$('#PB_ShopModal').removeClass('modal-fullscreen')
		$('#PB_ShopModal').find('.modal-header').removeClass('modal-header-fullscreen')
		$('#PB_ShopModal').data('noslidedown', false);
	}
}

$('#PB_ShopModal').on('show.bs.modal', function (e) {
	$('#PUB_LnkSearchModal').modal('hide')
	var btn = $(e.relatedTarget)
	var link_id = btn.data('id')
	if (!link_id || link_id <= 0) {
		return
	}
	modalIsLoading($('#PB_ShopModal'))
	$('#PB_ShopModal').find('input[name="accept_terms"]:not(.accepted_already)').prop("checked", false);
	$.ajax({
		url: "/api/",
		method: "POST",
		dataType: "json",
		data: {
			ACTION: 'LN_getPrice',
			link_id: link_id,
			user_id: $('#LB_UserID').val(),
			token: CSFR_TOKEN
		},
		success: function (res) {
			modalHasLoaded($('#PB_ShopModal'))
			if (res.status) {
				$('#PB_ShopTitle').text(res.info.title)
				$('#PB_ShopPrice').text(res.info.price_formatted)
				$('#PB_ShopButton').data('id', res.info.link_id)
				if (res.info.image) {
					$('#PB_ShopImg').removeClass("d-none")
					$('#PB_ShopImg').attr('src', res.info.image)
					$('#PB_ShopImg').on('load', function(){checkShopModalHeight()})
				} else {
					$('#PB_ShopImg').addClass("d-none")
				}
				if (res.info.description) {
					$('#PB_ShopDescription').removeClass("d-none")
					$('#PB_ShopDescription').text(res.info.description)
				} else {
					$('#PB_ShopDescription').addClass("d-none")
				}
				if (!$($('.cc-card')[0]).attr('src')) {
					$(".cc-card").each(function () {
						$(this).attr('src', $(this).data('src'))
					});
				}
				if (res.info.has_paypal) {
					payPalInit(res.info)
				}
				if (!res.info.has_stripe) {
					$('.PB_Stripe').addClass('d-none')
				}
				
				setTimeout(function() {checkShopModalHeight()}, 200)
			} else {

			}
		}
	});
})
ORDER_ID = 0
ORDER_INFO = {}
function payPalInit(res) {
	$('#paypal-button-container').empty()
	paypal.Buttons({
		style: {
			tagline: false,
			color: 'gold',
			label: 'pay',
			shape: 'pill',
			tagline: 'false'
		},
		createOrder: function (data, actions) {
			return actions.order.create(ORDER_INFO);
		},
		onInit: function(data, actions)  {},
		onApprove: function(data, actions) {
			return actions.order.capture().then(function(details) {
				if (typeof(PP_REDIR) != "undefined") {
					location.href = PP_REDIR+"&pp-order-id=" + details.id
				} else {
					location.href = "/shop/thank-you?type=p&pp-order-id=" + details.id
				}
			});
		},
		onCancel: function (data) {
			$('.pr-loading-overlay').removeClass("d-block").addClass('d-none')
			$('.pr-loading-spinner').removeClass("d-block").addClass('d-none')
		},
		onClick: function (data, actions) {
			$('#PB_ShopTermsError').addClass("d-none")
			let accept = $('#PB_ShopModal').find('input[name="accept_terms"]')
			if (!accept.is(':checked')) {
				$('#PB_ShopTermsError').removeClass("d-none")
				return false
			}
			$('.pr-loading').removeClass("d-none").addClass("d-block")
			$('.payment-errors').addClass('d-none')
			$('.pr-loading-overlay').removeClass('d-none')
			$('.pr-loading-spinner').removeClass('d-none')
			return $.ajax({
				type: "POST",
				url: "/api/",
				data: {
					ACTION: 'LN_createOrder',
					link_id: res.link_id,
					user_id: $('#LB_UserID').val(),
					token: CSFR_TOKEN,
					method: 'paypal'
				},
				error: function() {
					location.reload()
					return actions.reject();
				},
				dataType: "json"
			}).then(function (res) {
				if (res.status) {
					ORDER_ID = res.info.order_id
					ORDER_INFO = res.info.pporder
					return actions.resolve();
				} else {
					$('.pr-loading-overlay').removeClass("d-block").addClass('d-none')
					$('.pr-loading-spinner').removeClass("d-block").addClass('d-none')
					$('.payment-errors').removeClass('d-none')
					$('.payment-errors').html(res.errors[0])
					return actions.reject();
				}
			})
		}

	}).render('#paypal-button-container');
}

$('#PB_ShopButton,.PB_ShopButton').on('click', function () {
	$('#PB_ShopTermsError').addClass("d-none")
	let accept = $('#PB_ShopModal').find('input[name="accept_terms"]')
	if (!accept.is(':checked')) {
		$('#PB_ShopTermsError').removeClass("d-none")
		stopLoadingButton()
		reEnableButton()
		setTimeout(function() {
			stopLoadingButton()
			reEnableButton()
		}, 200)
		return
	}
	var link_id = $('#PB_ShopButton').data('id')
	$.getScript('https://js.stripe.com/v3/', function () {
		$.ajax({
			url: "/api/",
			method: "POST",
			dataType: "json",
			data: {
				ACTION: 'LN_createOrder',
				link_id: link_id,
				user_id: $('#LB_UserID').val(),
				token: CSFR_TOKEN
			},
			success: function (res) {
				stopLoadingButton()
				reEnableButton()
				if (res.status) {
					var stripe = Stripe(_STRIPE_PK, {
						stripeAccount: res.info.stripe_account
					});
					stripe.redirectToCheckout({
						sessionId: res.info.stripe_session.id
					}).then(function (result) {});
				}
			}
		});
	});
});

$('.modal').on('hide.bs.modal ', function () {
	$(this).addClass('faded')
	setTimeout(function () {
		$(this).removeClass('faded')
	}, 2000)
})

$('.modal').on('show.bs.modal  ', function () {
	$(this).removeClass('faded')
})

$(function () {
	let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
	if (isMobile) {
		try {
			$(".modal:not(.modal-fullscreen)").swipe({
				swipeDown: function (event, direction, distance, duration, fingerCount, fingerData) {
					if ($(this).data('noslidedown')) {
						return;
					}
					$(this).modal('hide')
				}
			});
		} catch (err) {}
	}
});

$('#PB_NewsletterSignupModal').on('show.bs.modal', function() {
	$('head').append('<link rel="stylesheet" href="/202006/css/boostrap.spinners.css?rand=' + Math.random() + '">');
	modalIsLoading($('#PB_NewsletterSignupModal'))
	$.ajax({
		url: "/api/",
		method: "POST",
		dataType: "json",
		data: {
			ACTION: 'NL_getNewsletterForm',
			user_id: $('#LB_UserID').val(),
			token: CSFR_TOKEN
		},
		success: function (res) {
			modalHasLoaded($('#PB_NewsletterSignupModal'));
			if (res.status) {
				$('#PB_NewsletterSignupModal').find('.loaded-container').html(res.info.html)
			}
		}
	});
})

$('#PB_NewsletterSignupModal,.newsletter-signup').on('submit', 'form[name="newsletter_signup"]', function(e) {
	e.preventDefault()
	let post = $(this).serializeObject()
	post.ACTION = 'NL_signup'
	post.user_id = $('#LB_UserID').val()
	post.token = CSFR_TOKEN
	let form = $(this)
	form.find('.alert').addClass('d-none')
	$.ajax({
		url: "/api/",
		method: "POST",
		dataType: "json",
		pass: {form: form},
		data: post,
		success: function (res) {
			stopLoadingButton()
			reEnableButton()
			let form = this.pass.form;
			if (res.status) {
				form.find('.alert-success').removeClass('d-none')
			} else {
				form.find('.alert-danger').removeClass('d-none')
				form.find('.alert-danger').html(res.errors[0])
			}
		}
	});
	return false;
});

$('#PB_ContactFormModal,.contactform').on('submit', 'form[name="contact_form"]', function(e) {
	e.preventDefault()
	let post = $(this).serializeObject()
	post.ACTION = 'NL_contact'
	post.user_id = $('#LB_UserID').val()
	post.token = CSFR_TOKEN
	if ($('#g-recaptcha-response').length && $('#g-recaptcha-response').val()) {
		post.captcha = $('#g-recaptcha-response').val()
	}
	let form = $(this)
	form.find('.alert').addClass('d-none')
	$.ajax({
		url: "/api/",
		method: "POST",
		dataType: "json",
		pass: {form: form},
		data: post,
		success: function (res) {
			stopLoadingButton()
			reEnableButton()
			let form = this.pass.form;
			if (res.status) {
				form.find('.alert-success').removeClass('d-none')
			} else {
				form.find('.alert-danger').removeClass('d-none')
				form.find('.alert-danger').html(res.errors[0])
			}
		}
	});
	return false;
});


$('#PB_ContactFormModal').on('show.bs.modal', function() {
	$('head').append('<link rel="stylesheet" href="/202006/css/boostrap.spinners.css?rand=' + Math.random() + '">');
	modalIsLoading($('#PB_ContactFormModal'))
	$.ajax({
		url: "/api/",
		method: "POST",
		dataType: "json",
		data: {
			ACTION: 'NL_getContactForm',
			user_id: $('#LB_UserID').val(),
			token: CSFR_TOKEN
		},
		success: function (res) {
			modalHasLoaded($('#PB_ContactFormModal'));
			if (res.status) {
				$('#PB_ContactFormModal').find('.loaded-container').html(res.info.html)
				if (res.info.captcha) {
					$('body').append("<script src='https://www.google.com/recaptcha/api.js'></script>");
				}
			}
		}
	});
})

$('#PB_ShareModal').on('show.bs.modal', function(e) {
	if (navigator.share) {
		e.preventDefault()
		navigator.share({
		  title: $('#PB_share_title').val(),
		  url: $('#PB_share_link').val(),
		}).then(() => {
			e.preventDefault()
		})
		.catch();
	  }
})

$('#PUB_LnkPasswordModal').on('show.bs.modal', function(e) {
	let id = $(e.relatedTarget).data('id')
	$('head').append('<link rel="stylesheet" href="/202006/css/boostrap.spinners.css?rand=' + Math.random() + '">');
	$('#PUB_LnkPasswordModal').data('id', id)

	$('#PUB_LnkPasswordModal').find('.modal-running').removeClass('d-none')
	$('#PUB_LnkPasswordModal').find('.modal-completed').addClass('d-none')
})

$('#PUB_LnkPasswordForm').on('submit', function(e) {
	e.preventDefault();
	modalHideErrors($('#PUB_LnkPasswordModal'))
	let button = $('#PUB_LnkPasswordSubmit')
	LOADING_BUTTON = button
	DISABLING_BUTTON = button
	button.find('.spinner-grow').remove()
	button.append('<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>')
	button.attr("disabled", "disabled")
	
	$.ajax({
		type: "POST",
		url: "/api/",
		dataType: "json",
		data: {
			ACTION: "PUB_checkLnkPassword",
			password: $('#PUB_LnkPassword').val(),
			user_id: $('#LB_UserID').val(),
			link_id: $('#PUB_LnkPasswordModal').data('id'),
			token: CSFR_TOKEN
		},
		success: function (res) {
			stopLoadingButton()
			reEnableButton()
			if (res.status) {
				$('#PUB_LnkPasswordModal').find('.modal-running').addClass('d-none')
				$('#PUB_LnkPasswordModal').find('.modal-completed').removeClass('d-none')
				location.href = res.info.redir
			} else {
				modalShowErrors($('#PUB_LnkPasswordModal'), res.errors[0])
			}
		}
	})
})

$('.group-title-collapse-toggle').on('click', function() {
	let group_info = $(this).attr("class").match(/group-container-([0-9]+)/);
    if (!group_info || group_info.length < 2 || !group_info[1]) {
		return
	} 
	let group_id = group_info[1]
	if ($('.pb-links.group-container-'+group_id).hasClass('d-none')) {
		$('.pb-links.group-container-'+group_id).removeClass('d-none')
		$('.group-container-'+group_id).find('.group-toggler-icon').removeClass('fa-chevron-down').addClass('fa-chevron-up')
		refreshImages()
		footerPositionUpdate()
	} else {
		$('.pb-links.group-container-'+group_id).addClass('d-none')
		$('.group-container-'+group_id).find('.group-toggler-icon').removeClass('fa-chevron-up').addClass('fa-chevron-down')
		footerPositionUpdate()
	}
})

if (location.href.toString().toLowerCase() != 'https://lnk.bio/tiktokuser1907' && location.href.toString().toLowerCase() != 'https://lnk.bio/madison' && false) {
	$.ajax({
		type: "POST",
		url: "/api/",
		dataType: "json",
		data: {
			ACTION: "PUB_ping",
			page: location.href.toString(),
			title: document.title
		}
	})
}

$('.LB_countdown').each(function(){
	let date = $(this).data('date')
	let div = $(this);
	x = setInterval(function() {    
	  LB_Countdown(date, div)
	}, 1000)
  })
  
$('form[name="public-search-form"]').on('submit', function(e) {
	e.preventDefault()
	let inp = $(this).find('input.public-search-input')
	if (!inp.val()) {
		return
	}
	$('#PUB_LnkSearchModal').data('search', inp.val())
	$('#PUB_LnkSearchModal').modal('show')
})

$('#PUB_LnkSearchModal').on('submit', 'form[name="public-search-form"]', function(e) {
	e.preventDefault()
	let inp = $(this).find('input.public-search-input')
	if (!inp.val()) {
		return
	}
	$('#PUB_LnkSearchModal').data('search', inp.val())
	initLnkSearch()
})

$('#PUB_LnkSearchModal').on('show.bs.modal', function() {
	initLnkSearch()
})

function initLnkSearch() {
	modalIsLoading($('#PUB_LnkSearchModal'))
	let search_val = $('#PUB_LnkSearchModal').data('search');
	if (!search_val) {
		$('#PUB_LnkSearchModal').modal('hide')
	}
	if (typeof (NONCE) == "undefined") {
		NONCE = ""
	}
	if (typeof (NONCE_TIME) == "undefined") {
		NONCE_TIME = 0
	}
	$.ajax({
		url: "/api/",
		method: "POST",
		dataType: "json",
		data: {
			ACTION: 'PUB_search',
			nonce: NONCE,
			nonce_time: NONCE_TIME,
			user_id: $('#LB_UserID').val(),
			search: search_val,
			token: CSFR_TOKEN
		},
		success: function (res) {
			if (res.status) {
				modalHasLoaded($('#PUB_LnkSearchModal'))
				$('#PUB_LnkSearchModal').find('input.public-search-input').val(res.info.search)
				let txt = ''
				for (const key in res.info.links) {
					if (Object.hasOwnProperty.call(res.info.links, key)) {
						const element = res.info.links[key].join(' ')
						txt += element
					}
				}
				$('#PUB_LnkSearchModal').find('.search-results').html(txt)
				refreshImages()
			}
		}
	});
}
$('#PUB_LnkSearchModal').on('scroll', function () {
	refreshImages()
});
$('#PUB_LnkSearchModal').find('.modal-body').on('scroll', function () {
	refreshImages()
});



function checkTagsModalHeight() {
	if((window.innerHeight - 50) < $('#PUB_LnkMultiModal').find('.modal-dialog').height()) {
		$('#PUB_LnkMultiModal').addClass('modal-fullscreen')
		$('#PUB_LnkMultiModal').find('.modal-header').addClass('modal-header-fullscreen')
		$('#PUB_LnkMultiModal').data('noslidedown', true);
	} else {
		$('#PUB_LnkMultiModal').removeClass('modal-fullscreen')
		$('#PUB_LnkMultiModal').find('.modal-header').removeClass('modal-header-fullscreen')
		$('#PUB_LnkMultiModal').data('noslidedown', false);
	}
}

$('#PUB_LnkMultiModal').find('.tag-img-container img').on('load', function() {
	setTimeout(function() {checkTagsModalHeight()}, 500)
	
})

$('#PUB_LnkMultiModal').on('show.bs.modal', function(e) {
	checkTagsModalHeight()
	modalIsLoading($('#PUB_LnkMultiModal'))
	let link = $(e.relatedTarget)
	$.ajax({
		url: "/api/",
		method: "POST",
		dataType: "json",
		data: {
			ACTION: 'PUB_getTag',
			nonce: NONCE,
			nonce_time: NONCE_TIME,
			user_id: $('#LB_UserID').val(),
			link_id: link.data('id'),
			token: CSFR_TOKEN
		},
		success: function (res) {
			if (res.status) {
				modalHasLoaded($('#PUB_LnkMultiModal'))
				$('#PUB_LnkMultiModal').find('.tag-img-container div').remove()
				$('#PUB_LnkMultiModal').find('.tag-img-container').append(res.info.tags)
				$('#PUB_LnkMultiModal').find('.tag-img-container img').attr('src', res.info.img)
				$('#PUB_LnkMultiModal').find('.tag-links-container').html(res.info.buttons)
				checkTagsModalHeight()
			}
		}
	});
})



function checkCarouselModalHeight() {
	if((window.innerHeight - 50) < $('#PUB_LnkCarouselModal').find('.modal-dialog').height()) {
		$('#PUB_LnkCarouselModal').addClass('modal-fullscreen')
		$('#PUB_LnkCarouselModal').find('.modal-header').addClass('modal-header-fullscreen')
		$('#PUB_LnkCarouselModal').data('noslidedown', true);
	} else {
		$('#PUB_LnkCarouselModal').removeClass('modal-fullscreen')
		$('#PUB_LnkCarouselModal').find('.modal-header').removeClass('modal-header-fullscreen')
		$('#PUB_LnkCarouselModal').data('noslidedown', false);
	}
}

$('#PUB_LnkCarouselModal').on('show.bs.modal', function(e) {
	checkCarouselModalHeight()
	modalIsLoading($('#PUB_LnkCarouselModal'))
	let link = $(e.relatedTarget)
	$.ajax({
		url: "/api/",
		method: "POST",
		dataType: "json",
		data: {
			ACTION: 'PUB_getCarousel',
			nonce: NONCE,
			nonce_time: NONCE_TIME,
			user_id: $('#LB_UserID').val(),
			link_id: link.data('id'),
			token: CSFR_TOKEN
		},
		success: function (res) {
			if (res.status) {
				checkCarouselModalHeight()
				$('#PUB_LnkCarouselModal').find('.modal-title').text(res.info.title)
				$('#PUB_LnkCarouselModal').find('.loaded-container').html(res.info.html)
				modalHasLoaded($('#PUB_LnkCarouselModal'))
				$('.lnk-carousel-container').slick({
					dots: true,
					autoplay: false,
					arrows: true,
					initialSlide: 0,
					prevArrow:"<button type=\"button\" class=\"slick-prev pull-left\"><i class=\"fas fa-chevron-left\" aria-hidden=\"true\"></i></button>",
					nextArrow:"<button type=\"button\" class=\"slick-next pull-right\"><i class=\"fas fa-chevron-right\" aria-hidden=\"true\"></i></button>"
				});
				setTimeout(function() {	checkCarouselModalHeight()}, 700)
			}
		}
	});
})