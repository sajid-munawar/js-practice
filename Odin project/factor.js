const personFactory = (name, age) => {
    const sayHello = () => console.log('hello!');
    return { name, age, sayHello };
};

const jeff = personFactory('jeff', 20);
console.log(jeff);
jeff.sayHello();


const name = "Maynard";
const color = "red";
const number = 34;
const food = "rice";

console.log({ name, color, number, food });


// scope and closure
