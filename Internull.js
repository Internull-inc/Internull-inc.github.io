$(document).ready(function(){
    
    $("#des1").hide();
    $("#des2").hide();
    $("#des3").hide();

    $("#show1").click(slide1);
    $("#show2").click(slide2);
    $("#show3").click(slide3);
});

function slide1 ()
{
	$("#des1").slideToggle();
}

function slide2 ()
{
    $("#des2").slideToggle();
}

function slide3 ()
{
    $("#des3").slideToggle();
}
