$("button").on("click",function(){
    const audio = new Audio("click.wav");
    audio.play();
})
$("#clear").on("click",function(){
    $("#t").val(" ");
});
$(".n").on("click",function(){
    const audio = new Audio("click.wav");
    audio.play();
    let v = $(this).text();
    //alert(v);
    let v1 = $("#t").val();
    $("#t").val($("#t").val()+' '+v);
});
$("#equal").on("click",function(){
    let a = $("#t").val().split(' ');
    let b = a[2];
    let ans = 0;
    if(b=='+') {
        ans = Number(a[1])+Number(a[3]);
    }
    if(b=='-') {
        ans = Number(a[1])-Number(a[3]);
    }
    if(b=='*') {
        ans = Number(a[1])*Number(a[3]);
    }
    if(b=='/') {
        ans = Number(a[1])/Number(a[3]);
    }
    $("#t").val(' '+ans);
})
