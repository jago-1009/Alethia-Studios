function initOverlay() {
    $('#overlay').on('click', function () {
        $('#overlay').fadeOut(200,function () {
            $(this).remove();
        });
    });
}

$('#gallery-center').on('click', function (e) {
    e.preventDefault();
    var target = $(e.target);
    var imgSrc = target.attr('src');
    var imgAlt = target.attr('alt');

    $('body').append(`<div id="overlay"><img class="overlay-image" alt="${imgAlt}" src="${imgSrc}"</div>`);
    $('#overlay').fadeIn(200);
    initOverlay();
})
$('.gallery-slide').on('click', function (e) {
var target = $(e.target);
var parent = target.parent();

$('#current').removeAttr('id');
parent.attr('id', 'current');

$('#gallery-center').animate({
    opacity: 0
},200, function () {
    $(this).attr('src', target.attr('src'));
    $(this).attr('alt', target.attr('alt'));
    $(this).animate({opacity: 1}, 200);
})

})