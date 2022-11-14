// In dieser Übung lernen wir, wie man auf die Objekte zugreift.

// Verwende den Code aus dem Kommentarbereich.
// Greife auf die Werte dieses Objekts zu:
// "Nala"
// "Droopy"
// und lasse dir einmal alle Hundenamen anzeigen
// Erstelle eine Methode, mit der man die Hundenamen ändern kann und rufe diese Methode auf.

let unsereHaustiere = [
    {
        tiertyp: "Katze",
        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ],
        changeName(index) {
            let newName = this.names[index] = "NEUER NAME"
            console.log("Der Neue Name:", newName);
        }
    }
];

let namesCat = unsereHaustiere[0].names;
let nameDogs = unsereHaustiere[1].names;
console.log(namesCat);
console.log(nameDogs);

let gipsy = unsereHaustiere[0].names[0];
console.log(gipsy);

console.log("vorher:", unsereHaustiere[1].names)
unsereHaustiere[1].changeName(0);
console.log("nacher", unsereHaustiere[1].names)