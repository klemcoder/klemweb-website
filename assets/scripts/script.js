$(".copyright").find("span").append(new Date().getFullYear())
$('.toggler').click(function () {
    $('nav ul').toggleClass('down')
    if ($('nav ul').hasClass('down')) {
        $(this).empty().append(`
            <i class="fas fa-times" aria-hidden="true"></i>
        `)
    } else {
        $(this).empty().append(`
            <i class="fas fa-bars" aria-hidden="true"></i>
        `)
    }
})