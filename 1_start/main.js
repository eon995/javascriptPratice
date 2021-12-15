$(document).ready(function () {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    // Todo
    var c;

    for (var x = 25; x < 400; x += 50) {
        for (var y = 25; y < 400; y += 50) {
            c = Shape.Circle(x, y, 20);
            c.fillColor = 'blue';
        }
    }

    paper.view.draw();
});

let a = 0.1;
let b = 0.2;

console.log(a + b);