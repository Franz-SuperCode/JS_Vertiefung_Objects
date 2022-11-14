let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];

//Mit forEach
let newArray1 = [];
edelMetallPreise.forEach(element => {
    newArray1.push(element.name);
});
console.log(newArray1);

// Mit map() ---- besser so neues Array vom alten
let arrayNames = edelMetallPreise.map((element) => {
    return element.name;
})
console.log(arrayNames);


// Mit Map ein Neues Array vom alten mit return
let arrayMitPreise = edelMetallPreise.map((element) => {
    return element.preiseGramEuro;
})
console.log(arrayMitPreise);

// Mit ForEach ein Neues Array vom alten mit return
let arrayMitPreise2 = edelMetallPreise.forEach((element) => {
    return element.preiseGramEuro;
})
console.log(arrayMitPreise2);

let veraenderungArray = edelMetallPreise.map((element) => {
    return element.veraenderung;
})

document.querySelector("#output").textContent = veraenderungArray;
console.log(veraenderungArray);