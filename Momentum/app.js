const calculator = {
    add: function(a, b)
    {
        console.log(a + b);
    },
    minus: function(a, b)
    {
        console.log(a - b);
    },
    divide: function(a, b)
    {
        console.log(a / b);
    },
    power: function(a, b)
    {
        console.log(a ** b);
    }
}

const a = parseInt(prompt("Insert a:"));
const b = parseInt(prompt("Insert b:"));
calculator.add(a, b);
calculator.minus(a, b);
calculator.divide(a, b);
calculator.power(a, b);