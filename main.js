

// Skapa ett startvärde = 0
let rows = 0;
let stitches = 0;

// Hämta innehållet i räknaren för både row och stitch
// Lägga in startvärdet som default i båda räknarna
let counterRow = document.getElementById('row_amount');
counterRow.innerHTML = rows;

let counterStitch = document.getElementById('stitch_amount');
counterStitch.innerHTML = stitches;

// Skapa funktioner/eventlyssnare som adderar +1 respektive -1
let decrRowBtn = document.getElementById('decrease-row');
decrRowBtn.addEventListener('click', function() {
    rows -= 1;
    counterRow.innerHTML = rows;
});

let incrRowBtn = document.getElementById('increase-row');
incrRowBtn.addEventListener('click', function() {
    rows += 1;
    counterRow.innerHTML = rows;
});

let decrStitchBtn = document.getElementById('decrease-stitch');
decrStitchBtn.addEventListener('click', function() {
    stitches -= 1;
    counterStitch.innerHTML = stitches;
});

let incrStitchBtn = document.getElementById('increase-stitch');
incrStitchBtn.addEventListener('click', function() {
    stitches += 1;
    counterStitch.innerHTML = stitches;
});

// Skapa funktioner/eventlyssnare som adderar +10
let incr10Rows = document.getElementById('increase-10-row');
incr10Rows.addEventListener('click', function() {
    rows += 10;
    counterRow.innerHTML = rows;
});

let incr10Stitches = document.getElementById('increase-10-stitch');
incr10Stitches.addEventListener('click', function() {
    stitches += 10;
    counterStitch.innerHTML = stitches;
});

// Skapa en spara-knapp som skriver ut row och stitch på skärmen
let savedRows = document.getElementById('saved-rows');

let saveBtn = document.getElementById('save-btn');
saveBtn.addEventListener('click', function() {
    savedRows.innerHTML += '<br>Row: ' + rows + " Stitch: " + stitches;
});