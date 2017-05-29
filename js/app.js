$(function(){
    var wrap = $('.wrap');
    $('#main-menu a').on('click', function(e){
        var href = $(this).attr('href');
        //wrap.load(href + ' .container'); // выведет только то, что расположено в блоке с классом container
        wrap.load(href); // выведит всю страницу в блок с классом wrap
        e.preventDefault();
    });
});