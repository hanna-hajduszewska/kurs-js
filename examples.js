let bool = 5 > 10;
console.log(bool);

let bool2 = 1 === 1;
console.log(bool2);

let bool3 = 1 !== 2;
console.log(bool3);

let isBiggerThan10 = (number) => {
    if(number > 10) {
        console.log('Liczba jest większa od 10');
        }
    if(number <= 10) {
        console.log('Liczba nie jest większa od 10');
    }    
}

isBiggerThan10(20);
isBiggerThan10(5);
