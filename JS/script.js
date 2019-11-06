function verander1(){
    document.getElementById("img1").style.display="none"
    document.getElementById("img2").style.display="block"
}

function verander2(){
    document.getElementById("img2").style.display="none"
    document.getElementById("img3").style.display="block"
}

function verander3(){
    document.getElementById("img3").style.display="none"
    document.getElementById("img1").style.display="block"
}
function verander4(){
    document.getElementById("img4").style.display="none"
    document.getElementById("img5").style.display="block"
}
function verander5(){
    document.getElementById("img5").style.display="none"
    document.getElementById("img6").style.display="block"
}
function verander6(){
    document.getElementById("img6").style.display="none"
    document.getElementById("img4").style.display="block"
}
function like(){
    document.getElementById("likeButton").style.backgroundColor="green"
    document.getElementById("dislikeButton").style.backgroundColor="black"
}
function dislike(){
    document.getElementById("dislikeButton").style.backgroundColor="red"
    document.getElementById("likeButton").style.backgroundColor="black"
}

datum = new Date()
    document.getElementById("datum").innerHTML = datum.getDate() + "-" + (datum.getMonth()+1)
        + "-" + datum.getFullYear();
