function paragraph_color() {
    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;
    var width = document.getElementById("width").value;
    var R = document.getElementById("R").value;
    var G = document.getElementById("G").value;
    var B = document.getElementById("B").value;

    var words = document.getElementById("paragraph");
    words.style.borderColor = `rgb(${red},${green},${blue})`;
    words.style.borderWidth = width
    words.style.backgroundColor = `rgb(${R},${G},${B})`;
}

function validate() {
    var key1 = document.getElementById("key1").value;
    var key2 = document.getElementById("key2").value;


    if (key1.length < 8) {
        alert("The password must at least be 8 letters!")
    } else if (key2.length < 8) {
        alert("The password must at least be 8 letters!")
    } else if (key1 != key2) {
        alert("The first and second passwords do not match!")
    } else {
        alert("The passwords matched!")
    }
}
