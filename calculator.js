const readline = require('readline');

class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calc = new Calculator();

function showMenu() {
    console.log('\nCalculator Menu:');
    console.log('1. Add');
    console.log('2. Subtract');
    console.log('3. Multiply');
    console.log('4. Divide');
    console.log('5. Exit');
}

function getNumbers(callback) {
    rl.question('Enter first number: ', (a) => {
        rl.question('Enter second number: ', (b) => {
            callback(Number(a), Number(b));
        });
    });
}

function main() {
    showMenu();
    rl.question('Choose an option (1-5): ', (option) => {
        switch(option.trim()) {
            case '1':
                getNumbers((a, b) => {
                    console.log(`Result: ${calc.add(a, b)}`);
                    main();
                });
                break;
            case '2':
                getNumbers((a, b) => {
                    console.log(`Result: ${calc.subtract(a, b)}`);
                    main();
                });
                break;
            case '3':
                getNumbers((a, b) => {
                    console.log(`Result: ${calc.multiply(a, b)}`);
                    main();
                });
                break;
            case '4':
                getNumbers((a, b) => {
                    try {
                        console.log(`Result: ${calc.divide(a, b)}`);
                    } catch (err) {
                        console.log(`Error: ${err.message}`);
                    }
                    main();
                });
                break;
            case '5':
                console.log('Goodbye!');
                rl.close();
                break;
            default:
                console.log('Invalid option. Please try again.');
                main();
        }
    });
}

main();