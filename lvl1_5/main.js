// In dieser Übung lernen wir wie man auf die Objekt-Inhalte zugreift.
// Verwende den Code aus dem Kommentar.
// Greife auf die Eigenschaften dieses Objekts zu und gib folgende Werte in der Konsole aus:
// Geheimnisse
// Cola
// Hefter

let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

let ordner2 = unserLager.schrank["Obere Schublade"].Ordner2;
let cola = unserLager.schrank["Untere Schublade"];
let hefter = unserLager.schreibtisch.schublade;

console.log(ordner2);
console.log(cola);
console.log(hefter);