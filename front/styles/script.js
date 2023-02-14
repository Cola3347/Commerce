$(document).ready(function(){
    let search = $('#search').hide();
    $('.rechercher').on('click',function(){
        $(search).fadeToggle(200);
    });

    $('#miel').on('click',function(){
        $('#type_miel').slideToggle();
    });
});