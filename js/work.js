var topImg = document.querySelectorAll(".top div")

var btmImg = document.querySelectorAll(".bottom div")

var tops = document.querySelector(".top")
console.log(tops);
// console.log(btmImg);
for (let i = 0; i < btmImg.length; i++) {
    btmImg[i].onclick = function() {
        for (var j = 0; j < btmImg.length; j++) {
            btmImg[j].style.border = "none";
            topImg[j].style.display = "none";
        }
        btmImg[i].style.border = "2px solid black";
        topImg[i].style.display = "block";
    }
}

var bigger = document.createElement("div");
bigger.style.cssText = "width:218px;height:218px;background: rgba(0, 155, 155, .2);position:absolute;display:none;";
tops.appendChild(bigger);

tops.onmouseover = function(ev) {
    bigger.style.display = "block";
    var cx = ev.clientX;
    var cy = ev.clientY;
    var ox = bigger.offsetLeft;
    var oy = bigger.offsetTop;
    var movex = cx - ox;
    var movey = cy - oy;
    var startx = ev.offsetX;
    var starty = ev.offsetY;
    tops.onmousemove = function(ev) {
        var endx = ev.clientX;
        var endy = ev.clientY;
        bigger.style.left = endx - movex + "px";
        bigger.style.top = endy - movey + "px";
        ev.preventDefault();
    }

}
tops.onmouseout = function() {
    bigger.style.display = "none";
}