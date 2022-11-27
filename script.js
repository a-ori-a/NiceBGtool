function apply() {
    var editor = document.getElementById("editor");
    var ctx = editor.getContext("2d");
    ctx.clearRect(0,0,1920,1080)
    var color = document.getElementById('color').value
    ctx.fillStyle = color
    ctx.fillRect(0,0,1920,1080)
}

function generate() {
    var editor = document.getElementById("editor");
    var ctx = editor.getContext("2d");
    var png = editor.toDataURL();
    document.getElementById("newImg").src = png;
}

function chRatio() {
    var note = document.getElementById('viewValue');
    var range = document.getElementById('ratio');
    note.innerText = range.value;
    putImg();
}

function putImg() {
    apply();
    if ( ! file.files[0])  {
        return;
    }
    var editor = document.getElementById("editor");
    var ctx = editor.getContext("2d");
    var pos = document.getElementById('pos').value.split(',')
    var ratio = document.getElementById('ratio').value
    console.log(pos)
    image = new Image()
    image.onload = function() {
        resize = {x: image.naturalWidth*ratio, y: image.naturalHeight*ratio}
        ctx.drawImage(image, pos[0], pos[1], resize.x, resize.y);
    }
    image.src = URL.createObjectURL(file.files[0])
}
