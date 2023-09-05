


function Step(x,y,z){
 let god = y - z
    let message = (x + ',' + 'Ваш возраст  ' +  god)
    return message
}


let x = prompt('Введите Ваше имя')
let y = +prompt('Введите Нынешний год')
let z = +prompt('Введите год когда родились')


if (y > z && isNaN(x)){
    console.log(Step(x,y,z));
}else{
    alert('Wrong')
}

