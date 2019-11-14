let numCats = 0;
let numDogs = 0;
let numBirds = 0;

$(document).ready(function() {
    $('.cat').on('click', clickCat);
    $('.dog').on('click', clickDog);
    $('.bird').on('click', clickBird);
    $('.showMe').on('click', '.btnDelete', deleteAnimal);
});

function clickCat() {
    numCats++;
    updateDisplay();
    addAnimal('Cat', numCats);
}

function clickDog() {
    numDogs++;
    updateDisplay();
    addAnimal('Dog', numDogs);
}

function clickBird() {
    numBirds++;
    updateDisplay();
    addAnimal('Bird', numBirds);
}

function updateDisplay() {
    $('.catClicks').text(`Cats: ${numCats}`);
    $('.dogClicks').text(`Dogs: ${numDogs}`);
    $('.birdClicks').text(`Birds: ${numBirds}`);
}

function addAnimal(animal, numOfAnimal) {
    $('.showMe').append(`
        <div class="animal" data-animal="${animal}">
            <span>${animal} ${numOfAnimal} </span>
            <button class="btnDelete">X</button>
        </div>
    `);
}

// data-animal = html, .data('animal') = jQuery
// data-bananabread = html, .data('bananabread') = jQuery

function deleteAnimal() {
    const animal = $(this).parent().data('animal');
    $(this).parent().remove();

    if(animal === 'Cat') {
        numCats--;
    } else if(animal === 'Dog') {
        numDogs--;
    } else if(animal === 'Bird') {
        numBirds--;
    }

    updateDisplay();
}

/*
A();

function A() {
    console.log(B(C));
}

function B(someFun) {
    return someFun() + 'i';
}

function C(anotherFunc) {
    return 'H';
}
*/