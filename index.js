let count = 0;
document.getElementById("decreasebtn").onclick = function(){
    count = count-1;
    document.getElementById("counterlabel").innerHTML = count;
}
document.getElementById("resetbtn").onclick = function(){
    count = 0;
    document.getElementById("counterlabel").innerHTML = count;
}
document.getElementById("increasebtn").onclick = function(){
    count = count+1;
    document.getElementById("counterlabel").innerHTML = count;
}