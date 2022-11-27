function accent(x, y) {
    if (document.getElementById("accent").files.length == 1) {
        var editor = document.getElementById("editor");
        var ctx = editor.getContext("2d");
        var reader = new FileReader();
        reader.onload = function(event) {
            var image = new Image();
            image.onload = function() {
                ctx.drawImage(image,x, y);
            }
            image.src = event.target.result;
        }
        reader.readAsDataURL(document.getElementById("accent").files[0])
    }
}

function apply() {
    var editor = document.getElementById("editor");
    var ctx = editor.getContext("2d");
    ctx.clearRect(0,0,1920,1080)
    var color = document.getElementById('color').value
    ctx.fillStyle = color
    ctx.fillRect(0,0,1920,1080)
    placeImg()
}

function generate() {
    var editor = document.getElementById("editor");
    var ctx = editor.getContext("2d");
    var png = editor.toDataURL();
    document.getElementById("newImg").src = png;
}

function placeImg() {
    var position = document.getElementById('pos').value.split(',');
    accent(position[0], position[1])
}