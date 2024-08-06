const celsius = document.getElementById("celsiusConverter");
const farenheit = document.getElementById("farConverter");
const kevin = document.getElementById("kevinConverter");

function celsiusConvert(cel) {
    let far;
    let kev;
    far = (cel * 1.8) + 32;
    kev = cel + 273.15;
    return {far, kev};
}

function farenheitConvert(far) {
    let cel;
    let kev;
    cel = 5/9 * (far - 32);
    kev = cel + 273.15;
    return {cel, kev};
}

function kelvinConvert(kev) {
    let far;
    let cel;
    cel = kev - 273.15;
    far = (cel * 1.8) + 32;
    return {far, cel};
}

celsius.addEventListener('input', function()  {
    let {far, kev} = celsiusConvert(parseFloat(celsius.value));
    farenheit.value = far.toFixed(2);
    kevin.value = kev.toFixed(2);
});
farenheit.addEventListener('input', function()  {
    let {cel, kev} = farenheitConvert(parseFloat(farenheit.value));
    celsius.value = cel.toFixed(2);
    kevin.value = kev.toFixed(2);
});
kevin.addEventListener('input', function()  {
    let {far, cel} = kelvinConvert(parseFloat(kevin.value));
    farenheit.value = far.toFixed(2);
    celsius.value = cel.toFixed(2);
});



