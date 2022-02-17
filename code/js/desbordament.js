/*
* Script per a indicar els elements que desborden,
* a l'hora de maquetar, donat el cas de que es produisca
* un desbordament
*/

document.querySelectorAll('*').forEach(el => {
    if (el.offsetWidth > document.documentElement.offsetWidth) {
        console.log('Element que desquadra: ', el);
    }
});