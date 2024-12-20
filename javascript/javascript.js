var a =<a class="diva" href="./HTML_Style_Guade.html">html - Style_Guide</a>;
document.getElementById("a").innerHTML = "a"

function allowDrop(ev) {
    ev.preventDefault();
    }
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    }
function drop(ev) {
 ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data)); 
    }
