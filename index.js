console.log("like");

var c =0;
var d = 0;


function inc(){
    c=c+1;
    document.getElementById("count").innerText=c;
}
function dec(){
    d =d+1;
    document.getElementById("dislike").innerText =d;
}



like = document.getElementById("count").innerText;
like.innerText =c;

dislike = document.getElementById("dislike").innerText;
dislike.innerText =d;
