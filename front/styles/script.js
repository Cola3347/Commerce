$(document).ready(function(){
    let search = $('#search').hide();
    $('.rechercher').on('click',function(){
        $(search).fadeToggle(200);
    });

    $('#miel').on('click',function(){
        $('#type_miel').slideToggle();
    });
});
const plus = document.querySelector(".plus"),
 minus = document.querySelector(".minus"),
 num = document.querySelector(".num");

 let a = 1;

 plus.addEventListener("click", ()=>{
    a++;
    console.log(a);
 });