const body = document.body;
const p = document.querySelector('p');

//Background color

function bodyColor() {
    let select = document.querySelector('#body-color');

    select.addEventListener('change', function() {
    // let selected = select.selectedOptions[0];
    body.style.backgroundColor = select.value;

    localStorage.setItem('5.4-background-color', select.value);
});
};

bodyColor();

body.style.backgroundColor = localStorage.getItem('5.4-background-color');

//Font color

function fontColor() {
    let select = document.querySelector('#font-color');

    select.addEventListener('change', function() {
    // let selected = select.selectedOptions[0];
    body.style.color = select.value;
    
    localStorage.setItem('5.4-font-color', select.value);
});
};

fontColor();

body.style.color = localStorage.getItem('5.4-font-color');

//Font size

function fontSize() {
    let selectFontSize = document.querySelector('input[name="font-size"]');

    selectFontSize.addEventListener('change', function() {        
        p.style.fontSize = `${selectFontSize.value}px`;

        localStorage.setItem('5.4-font-size', `${selectFontSize.value}px`);
    });
};

fontSize();

p.style.fontSize = localStorage.getItem('5.4-font-size');

//Lines height

function linesHeight() {
    let selectlineHeight = document.querySelector('input[name="line-height"]');

    selectlineHeight.addEventListener('change', function() {        
        p.style.lineHeight = `${selectlineHeight.value}px`;

        localStorage.setItem('5.4-line-height', `${selectlineHeight.value}px`);
    });
}

linesHeight();

p.style.lineHeight = localStorage.getItem('5.4-line-height');

//Font family

function fontFamilies() {
    let selectFontFamily = document.querySelector('#font-family');

    selectFontFamily.addEventListener('change', function() {
        p.style.fontFamily = selectFontFamily.value;

        localStorage.setItem('5.4-font-family', selectFontFamily.value);
    });
};

fontFamilies();

p.style.fontFamily = localStorage.getItem('5.4-font-family');