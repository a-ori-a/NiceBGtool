function randomColor() {
    result = "#"
    for (var i=0;i<6;i++) {
        result += Math.floor(Math.random()*16).toString(16);
    }
    return result
}


document.getElementById('color').value = randomColor();
apply();

function apply() {
    var editor = document.getElementById("editor");
    var ctx = editor.getContext("2d");
    ctx.clearRect(0,0, editor.width, editor.height);
    var color = document.getElementById('color').value;
    ctx.fillStyle = color;
    ctx.fillRect(0,0, editor.width, editor.height);
}

function generate() {
    var editor = document.getElementById("editor");
    var png = editor.toDataURL();
    document.getElementById("newImg").src = png;
    // 上に持ってくる
    document.getElementById('main').zindex = 1;
    document.getElementById('result').zindex = 100;
}

function showSizeMod() {
    var size = prompt('enter your screen size (ex: 1920x1080)');
    var editor = document.getElementById("editor");
    size = size.split('x');
    editor.width = size[0];
    editor.height = size[1];
    apply();
}

function goToMain() {
    document.getElementById('result').zindex = 0;
    document.getElementById('main').zindex = 100;
    document.getElementById('newImg').src = '';
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
    var pos = document.getElementById('pos').value.split(',');
    var ratio = document.getElementById('ratio').value;
    console.log(pos);
    image = new Image();
    image.onload = function() {
        resize = {x: image.naturalWidth*ratio, y: image.naturalHeight*ratio};
        ctx.drawImage(image, pos[0], pos[1], resize.x, resize.y);
    }
    image.src = URL.createObjectURL(file.files[0]);
}
