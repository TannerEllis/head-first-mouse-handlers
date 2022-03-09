window.onload = init

function init() {
    let map = document.getElementById('map')
    map.onmousemove = showCoords
}

function showCoords(e) {
    var coords = document.getElementById('coords')
    var x = e.clientX
    var y = e.clientY
    coords.innerHTML = "Map coordinates: " + x + ", " + y;
}

