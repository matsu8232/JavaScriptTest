let promptStr = prompt('数字を入力してください');

let x = promptStr % 15;
let y = promptStr % 3;
let z = promptStr % 5; 

if( x === 0 ){
    console.log('FizzBuzz');
}else if( y === 0 ){
    console.log('Fizz');
}else if( z === 0){
    console.log('Buzz');
}else{
    console.log(promptStr);
}