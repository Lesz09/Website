function showList() {
    let box = document.getElementById("list");
    let positionY = 0;
    let positionX = 0;
    let animation = setInterval(function () {
        document.getElementById("list").innerHTML="";
        if (positionY==200 && positionX==150) {
            clearInterval(animation);
            return;
        } 
        else { 
            if (positionX<150) {
                positionX++;
                positionY++;
                box.style.height=positionY+"px";
                box.style.width=positionX+"px";
            }
        }
    },4);
}