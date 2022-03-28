// stampare i numeri da 1 a 100 e sostituire il numero con "fizz" se è divisibile per 3, sostituire il numero con "buzz" se è divisibile per 5 e sostituire con "fizzbuzz" se è divisibile per entrambi

const numberList = document.getElementById('lista')

for(i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 != 0){
        // sostituire elementi divisibile per 3 con fizz
        let number = document.createElement('span')
        number.append(`Fizz`)
        numberList.append(number)
        number.classList.add('square', 'bg_fizz')
        console.log('fizz');
    } else if (i % 3 != 0 && i % 5 == 0){
        // sostituire elementi divisibile per 5 con buzz
        let number = document.createElement('span')
        number.append(`Buzz`)
        numberList.append(number)
        number.classList.add('square', 'bg_buzz')
        console.log('buzz');
    } else if (i % 3 == 0 && i % 5 == 0){
        // sostituire elementi divisibile per 3 e per 5 con fizzbuzz
        let number = document.createElement('span')
        number.append(`FizzBuzz`)
        numberList.append(number)
        number.classList.add('square', 'bg_fizzbuzz')
        console.log('fizzbuzz')
    } else {
        // scrivere i restanti numeri
        let number = document.createElement('span')
        number.append(`${i}`)
        numberList.append(number)
        number.classList.add('square', 'bg_number')
        console.log(i);
    }
    // controllo per la stampa completa dei numeri
    // console.log(i)
}
