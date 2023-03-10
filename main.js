
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
    rows = decrAmount(rows);
    counterRow.innerHTML = rows;
});

let incrRowBtn = document.getElementById('increase-row');
incrRowBtn.addEventListener('click', function() {
    rows = incrAmount(rows, 1);
    counterRow.innerHTML = rows;
});

let decrStitchBtn = document.getElementById('decrease-stitch');
decrStitchBtn.addEventListener('click', function() {
    stitches = decrAmount(stitches);
    counterStitch.innerHTML = stitches;
});

let incrStitchBtn = document.getElementById('increase-stitch');
incrStitchBtn.addEventListener('click', function() {
    stitches = incrAmount(stitches, 1);
    counterStitch.innerHTML = stitches;
});

// Skapa funktioner/eventlyssnare som adderar +10
let incr10Rows = document.getElementById('increase-10-row');
incr10Rows.addEventListener('click', function() {
    rows = incrAmount(rows, 10)
    counterRow.innerHTML = rows;
});

let incr10Stitches = document.getElementById('increase-10-stitch');
incr10Stitches.addEventListener('click', function() {
    stitches = incrAmount(stitches, 10);
    counterStitch.innerHTML = stitches;
});

// Skapa en spara-knapp som skriver ut row och stitch på skärmen
let saveList = document.getElementById('save-list');
let saveBtn = document.getElementById('save-btn');
let inputComment = document.querySelector('.input');



saveBtn.addEventListener('click', function() {
    let displayList = document.createElement('ul');
    displayList.classList.add('list');

    let newList = {
        row: 'Row: ' + rows,
        stitch: 'Stich: '+ stitches,
        comment: 'Comment: ' + inputComment.value
    };

    for (const key in newList) {
        let listItem = document.createElement('li');
        listItem.classList.add('list__item');
        listItem.innerHTML = newList[key];
        displayList.appendChild(listItem);
    }

    saveList.appendChild(displayList);
    inputComment.value = '';
});

function incrAmount(amount, howMany) {
    if (howMany === 1) {
        return amount += 1;
    } else {
        return amount += 10;
    }
}

function decrAmount(amount) {

    return amount -= 1;
}

