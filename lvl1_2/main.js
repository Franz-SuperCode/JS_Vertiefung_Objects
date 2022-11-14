

const person = {
    name: "Franz",
    alter: 30,
    sagNameAlter() {
        console.log(this.name + this.alter);
    }
};

person.sagNameAlter();