
// Füge zu dem Objekt Deine Lieblingsmusik hinzu.
// Greife mit console.log auf die Werte dieses Objekts zu:
// "The Beatles"
// Von Pink Floyd: "Download"
// Von Pink Floyd: true
// 1971 und 1983
// Von Metallica: "MC"
// Von Metallica das Wort: Ride
// Von Led Zeppelin das Wort: IV:
// Von Pink Floyd das Wort: Floyd

let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];


console.log(myMusic);

myMusic.push(
    {
        artist: "Taylor Swift",
        title: "Test",
        release_year: 1999,
        medium: ["CS", "LP"],
        gold: true
    }
)

console.log(myMusic);



// let newArray = [...myMusic];
// console.log(newArray);



let theBeatles = myMusic[0].artist;
console.log(theBeatles);

let download = myMusic[1].medium[3];
console.log(download);

let pinkTrue = myMusic[1].gold;
console.log(pinkTrue);

let the1971 = myMusic[2].release_year;
console.log(the1971);

let the1983 = myMusic[myMusic.length - 2].release_year;
console.log(the1983);

let theMC = myMusic[3].medium[2];
console.log(theMC);

let theRide = myMusic[3].title.slice(17, 21);
console.log(theRide);

