function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function () {
        console.log(name);
    }
}

const player1 = new Player("sajid", "X");
console.log(player1.name);
player1.sayName();
