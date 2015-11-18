
var about = $('#about');
var portfolio = $('#portfolio');

$('#about-link').click(function () {
    portfolio.hide();
    about.slideDown()
});

$('#portfolio-link').click(function () {
    about.hide();
    portfolio.slideDown();
});