!function(e,i){if("function"==typeof define&&define.amd)define(["exports","jquery"],function(e,r){return i(e,r)});else if("undefined"!=typeof exports){var r=require("jquery");i(exports,r)}else i(e,e.jQuery||e.Zepto||e.ender||e.$)}(this,function(e,i){function r(e,r){function n(e,i,r){return e[i]=r,e}function a(e,i){for(var r,a=e.match(t.key);void 0!==(r=a.pop());)if(t.push.test(r)){var u=s(e.replace(/\[\]$/,""));i=n([],u,i)}else t.fixed.test(r)?i=n([],r,i):t.named.test(r)&&(i=n({},r,i));return i}function s(e){return void 0===h[e]&&(h[e]=0),h[e]++}function u(e){switch(i('[name="'+e.name+'"]',r).attr("type")){case"checkbox":return"on"===e.value?!0:e.value;default:return e.value}}function f(i){if(!t.validate.test(i.name))return this;var r=a(i.name,u(i));return l=e.extend(!0,l,r),this}function d(i){if(!e.isArray(i))throw new Error("formSerializer.addPairs expects an Array");for(var r=0,t=i.length;t>r;r++)this.addPair(i[r]);return this}function o(){return l}function c(){return JSON.stringify(o())}var l={},h={};this.addPair=f,this.addPairs=d,this.serialize=o,this.serializeJSON=c}var t={validate:/^[a-z_][a-z0-9_]*(?:\[(?:\d*|[a-z0-9_]+)\])*$/i,key:/[a-z0-9_]+|(?=\[\])/gi,push:/^$/,fixed:/^\d+$/,named:/^[a-z0-9_]+$/i};return r.patterns=t,r.serializeObject=function(){return new r(i,this).addPairs(this.serializeArray()).serialize()},r.serializeJSON=function(){return new r(i,this).addPairs(this.serializeArray()).serializeJSON()},"undefined"!=typeof i.fn&&(i.fn.serializeObject=r.serializeObject,i.fn.serializeJSON=r.serializeJSON),e.FormSerializer=r,r});


(function ($) {
	$.fn.visible = function (partial) {

		var $t = $(this),
			$w = $(window),
			viewTop = $w.scrollTop(),
			viewBottom = viewTop + $w.height(),
			_top = $t.offset().top,
			_bottom = _top + $t.height(),
			compareTop = partial === true ? _bottom : _top,
			compareBottom = partial === true ? _top : _bottom;

		return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
	};

})(jQuery);

try {
  if (location.href.toString().indexOf("/linkmeto.ml/") != -1) {
    $('a').attr("href", "https://lnk.bio/404")
  }
} catch (error) {}

function LN_scrollTo(el_selector) {
  $([document.documentElement, document.body]).animate({
    scrollTop: $(el_selector).offset().top - 70
  }, 1000)
}

function LN_isMobile() {
  if (matchMedia("(max-width: 576px)").matches)
    return true
  return false
}


if ($(document).height() <= $(window).height()) {
  $('footer').addClass("position-absolute")
}
$(function () {
  if ($(document).height() <= $(window).height()) {
    $('footer').addClass("position-absolute")
  }
});
$(window).on('resize', function () {
  footerPositionUpdate()
});

function footerPositionUpdate() {
  $('#helper4').addClass('d-none')
  $('footer').removeClass("position-absolute")
  if ($(document).height() <= $(window).height()) {
    $('footer').addClass("position-absolute")
  } else {
    $('footer').removeClass("position-absolute")
  }
  $('#helper4').removeClass('d-none')
}

// Manage No Feature Access Modal
$('#PC_featureNoPROModal').on('show.bs.modal', function (e) {
  var el = $(e.relatedTarget)
  var title = el.data('title')
  $('#PC_featureNoPROModalLabel').text(title)
})


// Manage Modals Refreshes
$('.modal').on('show.bs.modal', function (e) {
  $(e.target).find('.alert-danger').not(".modal-errors-builtin").remove()
  $(e.target).find('.modal-errors').addClass("d-none")
})

$('.lnk-copy').on('click', function (e) {
  var btn = $(e.target)
  if (btn.hasClass('goup')) {
    btn = btn.parent();
  }
  var url = btn.data('lnk')
  $("#lnk-copy-source").show()
  var hidden = $("#lnk-copy-source")[0]
  $(hidden).val(url)


  hidden.setSelectionRange(0, hidden.value.length + 1);
  hidden.select();
  hidden.setSelectionRange(0, 99999);
  try {
    var success = document.execCommand('copy');
    if (success) {
      $("#lnk-copy-source").hide()
      if(btn.data('copied')) {
        if (typeof(XXX) == "number") {
          clearTimeout(XXX)
        }
        btn.removeClass('btn-outline-milka').addClass('btn-milka text-white')
        btn.find('span').html(btn.data('copied'))
        XXX = setTimeout(function() {
          btn.removeClass('btn-milka').removeClass('text-white').addClass('btn-outline-milka')
          btn.find('span').html(btn.data('copy'))
        },2000)
      } else {
        showToast("Lnk Copied", "", true)
      }
      
    } else {
      $("#lnk-copy-source").hide()
    }
  } catch (err) {
    $("#lnk-copy-source").hide()
  }
  $("#lnk-copy-source").hide()
});

// Manage Lnk.Bio Change URL
$('#LB_LnkBioURLModal').on('show.bs.modal', function (e) {
  modalIsLoading($('#LB_LnkBioURLModal'));
  $.ajax({
    type: "POST",
    url: "/api/",
    data: {
      ACTION: "U_getURLInfo",
      token: CSFR_TOKEN
    },
    success: function (res) {
      modalHasLoaded($('#LB_LnkBioURLModal'));
      if (res.status) {
        $("#LB_LnkBioURLField").val(res.info.url)
        $("#LB_LnkBioURLOld").val(res.info.url)
        $('#LB_LnkBioDomainField').val(res.info.domain)
        $('#LB_LnkBioDomainOld').val(res.info.domain)
      }
    }
  });
})
// Save Lnk.Bio URL
$('#LB_LnkBioURLConfirm').on('click', function () {
  modalHideErrors($('#LB_LnkBioURLModal'))
  var url = $("#LB_LnkBioURLField").val()
  var old_url = $("#LB_LnkBioURLOld").val()
  var domain = $("#LB_LnkBioDomainField").val()
  var old_domain = $("#LB_LnkBioDomainOld").val()
  if (url != old_url || domain != old_domain) {
    $.ajax({
      type: "POST",
      url: "/api/",
      data: {
        ACTION: "U_updateLnkBioURL",
        url: url,
        old_url: old_url,
        domain: domain,
        old_domain: old_domain,
				token: CSFR_TOKEN
      },
      success: function (res) {
        if (res.status) {
          $(".lnkbiourl").text(res.info.url)
          $(".lnkbiodomain").text(res.info.domain)
          $('.lnkbio-preview').attr("href", res.info.complete_url)
          $('.lnkbiocompleteurl').attr("href", res.info.complete_url)
          $('.lnk-copy').data('lnk', res.info.complete_url)
          $('#LB_LnkBioURLModal').modal('hide')
        } else {
          modalShowErrors($('#LB_LnkBioURLModal'), res.errors[0])
        }
      },
      dataType: "json"
    })
  }
});

// Manage Long URLs
$('#ST_ShortURLModal').on('show.bs.modal', function (e) {
  var url = $(e.relatedTarget).data('url')
  $("#ST_ShortURLLong").text(url)
})

function showToast(title, body, is_active) {
  if (typeof (is_active) == "undefined")
    return;
  if (!title)
    return
  var last_char = title.charAt(title.length - 1);
  if (last_char.match(['A-Za-z']))
    title = title + "."
  $('#toast-main > .toast-header > strong').text(title)
  $('#toast-main').toast('show')
  $('#toast-main').removeClass('d-none')
}
$('#toast-main').on('hidden.bs.toast ', function () {
  $('#toast-main').addClass('d-none')
})


function showAlert(parent_el, text, clear_container, additional_class) {
  if (!text || !parent_el) return

  var last_char = text.charAt(text.length - 1);
  if (last_char.match(['A-Za-z']))
    text = text + "."


  if (typeof (additional_class) == "undefined") {
    additional_class = "";
  }

  if (typeof (clear_container) == "undefined") {
    clear_container = true;
  }
  if (clear_container) {
    parent_el.children('.alert').remove()
  }
  var html = '<div class="alert alert-danger m-0 p-2 ' + additional_class + '" role="alert">' +
    text +
    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
    '<span aria-hidden="true">&times;</span>' +
    '</button>' +
    '</div>';
  parent_el.append(html)
}



function pad(num, size) {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}

function humanDate(date) {
  var date = new Date(date);
  var month = date.toLocaleString('default', {
    month: 'short'
  });
  return date.getDate() + " " + month;
}

function hours24to12(i, minutes) {
  if (i == 0) {
    american_hour = 12
    label = "AM"
  } else if (i < 12) {
    american_hour = i
    label = "AM"
  } else if (i == 12) {
    american_hour = i
    label = "PM"
  } else {
    american_hour = i - 12
    label = "PM"
  }
  if (typeof (minutes) != "undefined") {
    american_hour += ":" + pad(minutes, 2)
  }
  return american_hour + " " + label;
}



/* Utility function to convert a canvas to a BLOB */
function dataURLToBlob(dataURL) {
  var BASE64_MARKER = ";base64,";
  if (dataURL.indexOf(BASE64_MARKER) == -1) {
    var parts = dataURL.split(",");
    var contentType = parts[0].split(":")[1];
    var raw = parts[1];

    return new Blob([raw], {
      type: contentType
    });
  }

  var parts = dataURL.split(BASE64_MARKER);
  var contentType = parts[0].split(":")[1];
  var raw = window.atob(parts[1]);
  var rawLength = raw.length;

  var uInt8Array = new Uint8Array(rawLength);

  for (var i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], {
    type: contentType
  });
}

// Manage the Spinner
function LN_initSpinner() {
  var html = '<div class="spinner-border text-white" role="status">' +
    '<span class="sr-only">Loading...</span>' +
    '</div>';
  $('#add-new-link-form .nl-spinner').html(html)
}

function LN_removeSpinner() {
  $('#add-new-link-form .nl-spinner .spinner-border').remove()
}

// Manage the Spinner
// @el is a jquery object of the form
function form_InitSpinner(el) {
  el.find('.spinner-container').removeClass('d-none')
}

function form_RemoveSpinner(el) {
  el.find('.spinner-container').addClass('d-none')
}

function modal_InitSpinner(el) {
  el.find('.spinner-border').removeClass('d-none')
}

function modal_RemoveSpinner(el) {
  el.find('.spinner-border').addClass('d-none')
}

// Manage Form Errors
function formHideErrors(form) {
  form.find('.alert-danger').addClass('d-none')
}

function formShowErrors(form, error) {
  form.find('.alert-danger').removeClass('d-none')
  try {
    var last_char = error.slice(-1)
    if (last_char.match(/[a-zA-Z]+/))
      error = error + '.'
  } catch (err) {}
  form.find('.alert-danger').html(error)
}

// Manage Modal Errors
function modalHideErrors(modal) {
  modal.find('.modal-errors').addClass('d-none')
  modal.find('.modal-success').addClass('d-none')
}

function modalShowErrors(modal, error) {
  modal.find('.modal-errors').removeClass('d-none')
  try {
    var last_char = error.slice(-1)
    if (last_char.match(/[a-zA-Z]+/))
      error = error + '.'
  } catch (err) {}
  modal.find('.modal-errors .alert').html(error)
}
function modalShowSuccess(modal, error) {
  modal.find('.modal-success').removeClass('d-none')
  try {
    var last_char = error.slice(-1)
    if (last_char.match(/[a-zA-Z]+/))
      error = error + '.'
  } catch (err) {}
  modal.find('.modal-success .alert').html(error)
}
// Manage Timezone
$('.modal').on('show.bs.modal', function (e) {
  $(e.relatedTarget).find('.modal-errors').addClass('d-none')
})

function refreshInstagramPictureBackendError() {
  $.ajax({
    type: "POST",
    url: "/api/",
    data: {
      ACTION: "IG_refreshPicture",
      token: CSFR_TOKEN
    },
    success: function (res) {
      if (res.status) {
        $('#profile_picture_catch_error').attr('src', res.info.profile_pic)
      } 
    },
    dataType: "json"
  })
}


function refreshTikTokPictureBackendError() {
  $.ajax({
    type: "POST",
    url: "/api/",
    data: {
      ACTION: "TK_refreshPicture",
      token: CSFR_TOKEN
    },
    success: function (res) {
      if (res.status) {
        $('#profile_picture_catch_error').attr('src', res.info.profile_pic)
      }
    },
    dataType: "json"
  })
}

ALREADY_SUBMITTED_ERROR = 0
// Manage Profile Picture Error
function checkImageError(e) {
  var img_el = $(e.target)
  if (img_el.data('backup-src')) {
    if (ALREADY_SUBMITTED_ERROR === 1) {
      return
    }
    img_el.attr('src', img_el.data('backup-src'))
  }
  var el_id = img_el.attr("id")
  if (el_id != "profile_picture_catch_error") return
  if (img_el.hasClass('agency-active-user') || img_el.hasClass('agency-inactive-user')) {
    return
  }
  var username = img_el.data('username')

  if (ALREADY_SUBMITTED_ERROR === 1) {
    return
  }

  if (img_el.hasClass('pb-profilepic')) { // Public Error Management
    ALREADY_SUBMITTED_ERROR = 1;
    $.ajax({
      el_id: el_id,
      type: "POST",
      url: "/api/",
      data: {
        ACTION: "PUB_logPicError",
        username: username,
				token: CSFR_TOKEN
      },
      dataType: "json"
    })
    return
  }

  if (img_el.data('istiktok')) {
    refreshTikTokPictureBackendError()
  } else {
    refreshInstagramPictureBackendError()
  }



  return false;
}

// Manage print Invoice function
function printInvoice(divName) {
  var invoice = document.getElementById(divName).innerHTML;
  originalBodyContent = $('body').html();
  document.body.innerHTML = invoice;
  window.print();
  setTimeout(function () {
    document.body.innerHTML = originalBodyContent
  }, 1000)

}

function closeMessage(OPTION_ID) {
  var options = {};
  options[OPTION_ID] = 1
  $.ajax({
    type: "POST",
    url: "/api/",
    data: {
      ACTION: "U_updateOptions",
      options: options,
      token: CSFR_TOKEN
    }
  })
}

$('.close-msg').on('click', function () {
  $(this).closest('.msg-popup').remove()
  closeMessage($(this).data('optionid'))
})

EU_COUNTRIES = ["BE", "BG", "CZ", "DK", "DE", "EE", "IE", "EL", "ES", "FR", "HR", "IT", "CY", "LV", "LT", "LU", "HU", "MT", "NL", "AT", "PL", "PT", "RO", "SI", "SK", "FI", "SE"];

if (typeof (_iub) != "undefined") {

  $.ajax({
    type: "GET",
    url: 'https://freegeoip.app/json/',
    success: function (data) {
      var country = data.country_code
      if ($.inArray(country, EU_COUNTRIES) != -1) {
        $.getScript(" //cdn.iubenda.com/cs/iubenda_cs.js");
      }
    },
    dataType: 'json'
  })
}

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
      $(".modal:not(.modal-fullscreen,#PB_CalendarModal,#PY_ChooseDLocalModal)").swipe({
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

function isRunningStandalone() {
  return navigator.standalone || (window.matchMedia("(display-mode: standalone)").matches);
}

function isIOS() {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
}

if (isRunningStandalone()) {
  $('.mobileapp-install-menu').hide()
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

if (typeof (PWA_VERSION) != "undefined" && navigator.userAgent != "LnkBioMobileApp") {
  try {
    const broadcast = new BroadcastChannel('LNKBIO_PWA');
    $(function () {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.min.js?v=4").then(function (reg) {

          broadcast.postMessage({
            type: 'PWA_VERSION',
            PWA_VERSION: PWA_VERSION
          });
        });
      }
    });
  } catch (error) {}
}

$(".btn-spinner").click(function () {
  // disable button
  $(this).prop("disabled", true);
  // add spinner to button
  $(this).prepend('<span class="spinner-border spinner-border-sm mr-3" role="status" aria-hidden="true"></span>');
});

function resetButtonSpinner(btn) {
  btn.prop("disabled", false);
  btn.find('span.spinner-border').remove()
}


function associativeToArray(associative) {
  var ret = []
  for (i in associative) {
    var inner = {
      'social_id': i,
      'social_link': associative[i]
    }
    ret.push(inner)
  }
  return ret
}

function modalIsLoading(modal) {
  modal.find('.loading-container').removeClass('d-none')
  modal.find('.loaded-container').addClass('d-none')
}

function modalHasLoaded(modal) {
  modal.find('.loaded-container').removeClass('d-none')
  modal.find('.loading-container').addClass('d-none')
}
$(function () {
  try {
    $('[data-toggle="popover"]').popover()
  } catch (Exception){}
})

LOADING_BUTTON = '';
$('body').on('click', '.btn-loading', function () {
  LOADING_BUTTON = $(this)
  $(this).find('.spinner-grow').remove()
  $(this).append('<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>')
})

function stopLoadingButton() {
  if (typeof (LOADING_BUTTON) == "undefined" || !LOADING_BUTTON) {
    return
  }
  LOADING_BUTTON.find(".spinner-grow").remove()
}

DISABLING_BUTTON = ''
$('body').on('click', '.btn-disable-after-click', function () {
  DISABLING_BUTTON = $(this)
  setTimeout(function () {
    DISABLING_BUTTON.attr("disabled", "disabled")
  }, 100)
})

function reEnableButton() {
  if (typeof (DISABLING_BUTTON) == "undefined" || !DISABLING_BUTTON) {
    return
  }
  DISABLING_BUTTON.removeAttr("disabled")
  setTimeout(function () {
    DISABLING_BUTTON.removeAttr("disabled")
  }, 100)
}

ACCEPTED_IMAGE_FILES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'image/svg+xml'
]

$('.modal').on('show.bs.modal', function () {
  if (!$(this).data('originaltitle')) {
    $(this).data('originaltitle', $(this).find('h5.modal-title').html())
  }
})

$(function() {
  $('.loading-remove').addClass("d-none")
});

function modalAddAction(modal, action_html) {
  let header = modal.find('.modal-header')
  header.find('.modal-action').remove()
  header.append(action_html)
}

function modalRemoveActions(modal) {
  let header = modal.find('.modal-header')
  header.find('.modal-action').remove()
}

function uniqueArray(array) {
  var unique = [];
  $.each(array, function (i, el) {
    if ($.inArray(el, unique) === -1) unique.push(el);
  });
  return unique
}

function removeFromArray(arr, value) {
  var index = arr.indexOf("" + value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

$('#PB_MenuModal').on('show.bs.modal', function () {
  resetMenuModal()
})

function resetMenuModal() {
  $('#PB_MenuModal').find('.modal-back').addClass("d-none")
  $('#PB_MenuBack').addClass("d-none")
  $('.menu-primary').removeClass("d-none")
  $('.menu-subsection').addClass("d-none")
  $('#PB_MenuModal').find('.modal-title').html($('#PB_MenuModal').data('originaltitle'))
}

function openSubsection(id, modaltitle) {
  $('.menu-primary').addClass("d-none")
  $('.menu-subsection').addClass("d-none")
  $('.menu-subsection.subsection-' + id).removeClass('d-none')
  $('#PB_MenuModal').find('.modal-title').html(modaltitle)
  $('#PB_MenuModal').find('.modal-back').removeClass("d-none")
  $('#PB_MenuBack').removeClass("d-none")
  
}

$('#PB_MenuModal').find('.menu-open-subsections').on('click', function () {
  let id = $(this).data('id')
  let modaltitle = $(this).data('modaltitle')
  openSubsection(id, modaltitle)
  let parent = $(this).data('parent')
  let parent_title = $(this).data('parenttitle')
  if (parent > 0) {
    $('#PB_MenuModal').data('parent', parent)
    $('#PB_MenuModal').data('parenttitle', parent_title)
  } else {
    $('#PB_MenuModal').data('parent', 0)
    $('#PB_MenuModal').data('parenttitle', '')
  }
})

$('#PB_MenuBack').on('click', function () {
  let parent = $('#PB_MenuModal').data('parent');
  let parent_title = $('#PB_MenuModal').data('parenttitle');
  if (parent > 0) {
    openSubsection(parent, parent_title)
    $('#PB_MenuModal').data('parent', 0)
  } else {
    resetMenuModal()
  }
})

$('#PB_MenuModal').find('.modal-back').on('click', function () {
  let parent = $('#PB_MenuModal').data('parent');
  let parent_title = $('#PB_MenuModal').data('parenttitle');
  if (parent > 0) {
    openSubsection(parent, parent_title)
    $('#PB_MenuModal').data('parent', 0)
  } else {
    resetMenuModal()
  }
})

function resetMenuAgencyModal(){ 
  $('#PB_MenuAgencyProfileModal').find('.modal-back').addClass("d-none")
  $('.menu-primary').removeClass("d-none")
  $('.menu-subsection').addClass("d-none")
  $('#PB_MenuAgencyProfileModal').find('.modal-title').html($('#PB_MenuAgencyProfileModal').data('originaltitle'))
}

function openSubsectionAgency(id, modaltitle) {
  $('.menu-primary').addClass("d-none")
  $('.menu-subsection').addClass("d-none")
  $('.menu-subsection.subsection-' + id).removeClass('d-none')
  $('#PB_MenuAgencyProfileModal').find('.modal-title').html(modaltitle)
  $('#PB_MenuAgencyProfileModal').find('.modal-back').removeClass("d-none")
  $('#PB_MenuAgencyProfileModalBack').removeClass("d-none")
  
}

$('#PB_MenuAgencyProfileModal').on('show.bs.modal', function () {
  resetMenuAgencyModal()
})

$('#PB_MenuAgencyProfileModal').find('.modal-back').on('click', function () {
  let parent = $('#PB_MenuAgencyProfileModal').data('parent');
  let parent_title = $('#PB_MenuAgencyProfileModal').data('parenttitle');
  if (parent > 0) {
    openSubsectionAgency(parent, parent_title)
    $('#PB_MenuAgencyProfileModal').data('parent', 0)
  } else {
    resetMenuAgencyModal()
  }
})

$('#PB_MenuAgencyProfileModal').find('.menu-open-subsections').on('click', function () {
  let id = $(this).data('id')
  let modaltitle = $(this).data('modaltitle')
  openSubsectionAgency(id, modaltitle)
  let parent = $(this).data('parent')
  let parent_title = $(this).data('parenttitle')
  if (parent > 0) {
    $('#PB_MenuAgencyProfileModal').data('parent', parent)
    $('#PB_MenuAgencyProfileModal').data('parenttitle', parent_title)
  } else {
    $('#PB_MenuAgencyProfileModal').data('parent', 0)
    $('#PB_MenuAgencyProfileModal').data('parenttitle', '')
  }
})



$('#navbar-top').find('span[aria-controls="navbarNav"]').on('click', function () {
  resetMenuModal()
  let icon = $('#navbar-top').find('span[aria-controls="navbarNav"]').find('i')
  if (!$('#navbarNav').hasClass('show')) {
    icon.removeClass("far").addClass("fas").addClass('font-weight-bold')
  } else {
    icon.removeClass("fas").addClass("far").removeClass('font-weight-bold')
  }
})

$('body').on('click', function (e) {
  if ($(e.target).closest('.navbar-collapse').length == 0) {
    try {
      $('.navbar-collapse').collapse('hide');
    } catch(e) {}
  }
});

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
$(function() {
  $('#coco_accept').on('click', function () {
    let user_id = 0;
    if ($('#LB_UserID').val()) {
      user_id = $('#LB_UserID').val()
    }
    $.ajax({
      url: "/api/",
      method: "POST",
      dataType: "json",
      data: {
        ACTION: 'PUB_cookieConsentAccept',
        user_id: user_id,
				token: CSFR_TOKEN
      },
      success: function (res) {
        
        if (res.status) {
          $('head').append(res.info.codes)
          $('#pb_cookie_consent').addClass('d-none')
          if (typeof(gtag) != "undefined") {
            gtag('consent', 'update', {
            'analytics_storage': 'granted',
            'functionality_storage': 'granted',
            'security_storage': 'granted'
            });
          }
        }
      }
    });
  })

  $('#coco_reject').on('click', function () {
    $.ajax({
      url: "/api/",
      method: "POST",
      dataType: "json",
      data: {
        ACTION: 'PUB_cookieConsentDeny',
				token: CSFR_TOKEN
      },
      success: function (res) {
        if (res.status) {
          $('#pb_cookie_consent').addClass('d-none')
		  gtag('consent', 'update', {
			'analytics_storage': 'denied',
			'functionality_storage': 'denied',
			'security_storage': 'denied'
			
		  });
        }
      }
    });
  })

  $('#coco_open').on('click', function () {
    $.ajax({
      url: "/api/",
      method: "POST",
      dataType: "json",
      data: {
        ACTION: 'PUB_cookieConsentReset',
				token: CSFR_TOKEN
      }
    });
    $('#pb_cookie_consent').removeClass('d-none')
  })
})
let secureid1 = 0;
if($('#LB_UserID') && $('#LB_UserID').length) {
  secureid1 = $('#LB_UserID').val()
}

const uid = function(){
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

let lkey = 'secure-anonymous-id'
let sid = ""
if (typeof(localStorage) != "undefined" && localStorage) {
  sid = localStorage.getItem(lkey);
  if(!sid) {
    sid = uid()
    localStorage.setItem(lkey, sid)
  }
} else {
  sid = uid()
}

// $.ajax({
//   url: "/security.json?|{["+location.href.toString()+"]}|{["+document.referrer.toString()+"]}|{["+Math.round(window.screen.width*window.devicePixelRatio)+"x"+Math.round(window.screen.height*window.devicePixelRatio)+"]}|{["+secureid1+"]}|{["+sid+"]}|{["+navigator.language+"]}",
//   method: "GET",
//   dataType: "json"
// });


if (
  (typeof(window.webkit) != "undefined" && typeof(window.webkit.messageHandlers) != "undefined") ||
  typeof(JSBridge) != "undefined"
) {
  $(document).ajaxComplete(function (event, request, settings) {
    let action = extractAction(settings.data)
    if (!action) {
      return
    }
    let state = ''
    let status = false
    try {
      state = request.responseJSON.info.state
      status = request.responseJSON.status
    } catch(error) {
      return
    }
    if (typeof(state) == "undefined" || !state) {
      return
    }
    if (typeof(status) == "undefined" || !status) {
      return
    }
    let info = action+'||'+state
    callNativeApp(info);
  });

  function callNativeApp(data) {
    try {
      window.webkit.messageHandlers["log"].postMessage(JSON.stringify(data));
    } catch (err) { }
    try {
      JSBridge.showMessageInNative(JSON.stringify(data));
    } catch (err) { }
  }

  function extractAction(str) {
    try {
      var rx = /ACTION=([a-zA-Z-0-9_]+)/g;
      var arr = rx.exec(str);
      return arr[1]; 
    } catch(err) {
      return '';
    }
  }
}

function isMobileApp() {
  if(navigator.userAgent == "LnkBioMobileApp") {
    return true;
  }
  return false
}

$('.LB_copyButton').on('click', function(e) {
	e.preventDefault();
  copyButtonAction($(this))
})

$('.loaded-after-with-action').on('click', '.LB_copyButton', function(e) {
	e.preventDefault();
  copyButtonAction($(this))
})

function copyButtonAction(element) {
  let input = element.find('input')
  let button = element.find('button')
  if (!input) {
    return
  }
	var copyText = input[0];
	copyText.select();
	copyText.setSelectionRange(0, 99999); 
	navigator.clipboard.writeText(copyText.value);
	copyText.setSelectionRange(0, 0); 
	button.text(button.data('copied'))
	setTimeout(function() {
		button.text(button.data('copy'))
	},2500)
}

$('form.form-loading').on('submit', function(e) {
  let btn = $(this).find('button[type="submit"]')
  LOADING_BUTTON = btn
  btn.find('.spinner-grow').remove()
  btn.append('<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>')
  DISABLING_BUTTON = btn
  setTimeout(function () {
    DISABLING_BUTTON.attr("disabled", "disabled")
  }, 100)
})

$('.modal').on('submit', 'form.form-loading-ajax', function(e) {
  let btn = $(this).find('button[type="submit"]')
  LOADING_BUTTON = btn
  btn.find('.spinner-grow').remove()
  btn.append('<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>')
  DISABLING_BUTTON = btn
  setTimeout(function () {
    DISABLING_BUTTON.attr("disabled", "disabled")
  }, 100)
})

$('.switch-with-actions input[type="checkbox"]').on('change', function(){
  let input = $(this)
  let parent = input.parent().parent()
  let label = parent.find('span[data-labelon]')
  if (input.prop('checked')) {
    label.html(label.data('labelon'))
  } else {
    label.html(label.data('labeloff'))
  }
})

$('.modal').on('change',  '.switch-with-actions input[type="checkbox"]', function(){
  let input = $(this)
  let parent = input.parent().parent()
  let label = parent.find('span[data-labelon]')
  if (input.prop('checked')) {
    label.html(label.data('labelon'))
  } else {
    label.html(label.data('labeloff'))
  }
})

$('.collapse-faq').on('show.bs.collapse hide.bs.collapse', function (e) {
	let card = $(this).parent()
	let icon = card.find('.card-title').find('i')
	if (e.type == 'show') {
		icon.removeClass('fa-chevron-down').addClass('fa-chevron-up')
	} else {
		icon.removeClass('fa-chevron-up').addClass('fa-chevron-down')
	}
  footerPositionUpdate()
})

$('.collapse-faq').on('shown.bs.collapse hidden.bs.collapse', function (e) {
  footerPositionUpdate()
})

let initial_selected = ''

$('.header-menu-container a[data-target="secondmenu"], .header-menu-container span[data-target="secondmenu"]').on('click', function(e) {
  e.preventDefault()
  let open_id = $(this).data('openmenu')
  if ($('.subsection_container[data-sectionid="'+open_id+'"]').hasClass('d-none')) {
    if (!initial_selected) {
      initial_selected = $($('.selected-top-menu')[0])
    }
    $('.selected-top-menu').removeClass('selected-top-menu')
    $(this).addClass('selected-top-menu')
    $('#navbar-secondary').removeClass('d-none')
    $('#navbar-top').addClass('smallnavbar')
    $('.subsection_container').addClass('d-none')
    $('.subsection_container[data-sectionid="'+open_id+'"]').removeClass('d-none')
  } else {
    $('.selected-top-menu').removeClass('selected-top-menu')
    $(this).removeClass('selected-top-menu')
    if (initial_selected) {
      initial_selected.addClass('selected-top-menu')
    }
   
    $('#navbar-secondary').addClass('d-none')
    $('#navbar-top').removeClass('smallnavbar')
    $('.subsection_container').addClass('d-none')
  }
})

$(window).on('resize scroll', function() {
  refreshLazyImages()
});

refreshLazyImages()
function refreshLazyImages() {
  $('img.lazyload').each(function() {
      var el = $(this)
      if(!el.visible(true))
          return
      if(!el.data('src')) 
          return
      if(el.attr('src') && el.attr('src') != 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7')
          return;
     
      el.attr('src',el.data('src'))
  })
  $('source.lazyload').each(function() {
      var el = $(this)
      if(!el.visible(true))
          return
      if(!el.data('srcset')) 
          return
      if(el.attr('srcset'))
          return;
     
      el.attr('srcset',el.data('srcset'))
  })
  $('.lazyload-bg').each(function() {
      var el = $(this)
      if(!el.visible(true))
          return
      if(!el.data('src')) 
          return
      if(el.css('background-image') && el.css('background-image') != "none" && el.css('background-image').substr(0,3) == "url")
          return;

      el.css('background-image','url('+el.data('src')+')')
  })
}

$('#carouselExampleIndicators').on('slid.bs.carousel', function () {
  refreshImages()
})

// $('[data-toggle="popover"]').popover()
$('body').on('click', function (e) {
  if ($(e.target).data('toggle') !== 'popover' && $(e.target).parent().data('toggle') !== 'popover'
      && $(e.target).parents('.popover.in').length === 0) { 
        try {
          $('[data-toggle="popover"]').popover('hide');
        } catch (e) {}
  }
});

if (typeof(LBDARK) == "undefined") {
  LBDARK = 'DARKMODE_AUTO'
}
if (LBDARK == 'DARKMODE_DARK') {
  LBDARKMODE = 'DARK'
} else if (LBDARK == 'DARKMODE_LIGHT') {
  LBDARKMODE = 'LIGHT'
} else {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    LBDARKMODE = 'DARK'
  } else {
    LBDARKMODE = 'LIGHT'
  }
}

function arrayBufferToBase64(buffer) {
	let binary = '';
	let bytes = new Uint8Array(buffer);
	let len = bytes.byteLength;
	for (let i = 0; i < len; i++) {
		binary += String.fromCharCode(bytes[i]);
	}
	return window.btoa(binary);
}

function base64ToArrayBuffer(base64) {
    var binaryString = atob(base64);
    var bytes = new Uint8Array(binaryString.length);
    for (var i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}

function LB_utcToTimezone(timestamp) {
  var newDate = new Date();
  var ary = timestamp.split(" ");
  var ary2 = ary[0].split("-");
  var ary1 = ary[1].split(":");
  ary2[1] = (ary2[1]-1)


  var newDate = new Date(Date.UTC(ary2[0],   ary2[1], ary2[2], ary1[0], ary1[1], ary1[2]));

  return newDate.getFullYear()+ "-" + pad((newDate.getMonth() + 1), 2)  + "-" + pad(newDate.getDate(), 2)   + " " + pad(newDate.getHours(), 2) + ":" + pad(newDate.getMinutes(), 2) + ":" + pad(newDate.getSeconds(), 2);
}

var second = 1000
minute = second * 60
hour = minute * 60
day = hour * 24


function LB_Countdown(date, div, intervalid) {
  div.removeClass('d-none')
  date = LB_utcToTimezone(date)
  var countDown = new Date(date).getTime();
  const now = new Date().getTime(),
  distance = countDown - now;

  if (distance < 0) {
    div.find('.ctn_running').addClass('d-none')
    div.find('.ctn_end').removeClass('d-none')
    try {
      clearInterval(intervalid)
      return
    } catch (ex) {
      return
    }
  }

  div.find('.ctn_running').removeClass('d-none')
  div.find('.ctn_end').addClass('d-none')
  if (Math.floor(distance / (day)) > 0) {
    div.find('.cnt_d').text(Math.floor(distance / (day)))
  } else {
    div.find('.cnt_d_cont').addClass('d-none')
  }
  div.find('.cnt_h').text(Math.floor((distance % (day)) / (hour)))
  div.find('.cnt_m').text(Math.floor(Math.floor((distance % (hour)) / (minute))))
  div.find('.cnt_s').text(Math.floor( Math.floor((distance % (minute)) / second)))

  
}

$('.LB_searchButton').on('keyup', 'input', function() {
  let val = $(this).val()
  let container = $(this).closest('.LB_searchButton')
  let search_container = $('.search-results')
  if (val.length > 0) {
    container.find('i.fa-times').removeClass('d-none')
    search_container.children().each(function() {
      let title = $(this).find('span.font-weight-bold').text()
      if (title.toLowerCase().indexOf(val.toLowerCase()) == -1) {
        $(this).addClass('d-none').removeClass('d-flex').removeClass('d-block')
      } else {
        $(this).removeClass('d-none').addClass('d-flex')
      }
    })
  } else {
    container.find('i.fa-times').addClass('d-none')
    search_container.children().each(function() {
        $(this).removeClass('d-none').addClass('d-flex')
    })
  }
})

$('.LB_searchButton').on('click', 'i.fa-times', function() {
  let search_container = $('.search-results')
  let container = $(this).closest('.LB_searchButton')
  let input = container.find('input')
  input.val('')
  $(this).addClass('d-none')
  search_container.children().each(function() {
    $(this).removeClass('d-none').addClass('d-flex')
  })
})

$('.modal').on('click', '.selectwithicons-item', function() {
  manageDropdownClick($(this))
})

$('.dropdown.selectwithicons').on('click', '.dropdown-item', function() {
  manageDropdownClick($(this))
})

function manageDropdownClick(selected) {
  let container = selected.closest('.dropdown.selectwithicons')
  let button = container.find('button')
  let input = container.find('input[type="hidden"]')

  let selectedIconHtml = selected.html();
  let selectedValue = selected.data('value');
  button.html(selectedIconHtml + ' <span class="caret"></span>');
  input.val(selectedValue);
  let icons = container.closest('.icons')
  if (icons) {
    let row = container.closest('.row')
    let input = row.find('.col > input')
    if (input) {
      let selectedAdd= selected.data('additional');
      input.attr('placeholder', selectedAdd)
    }
  }
}

$('.show-all-features').on('click', function() {
  let container = $(this).closest('.card-body')
  container.find('.agp-feature-title').removeClass('d-none')
  container.find('.agp-feature-subtitle').removeClass('d-none')
  $(this).addClass('d-none')
})