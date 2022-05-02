let age = prompt('Ваш год рождения?')
if  ( age === null || age.length > 4 || isNaN(+age) || age.trim() === '' || age > 2022)   {
    alert(`Жаль что вы не ввели свой год рождения`)
    age = `Вы не ввели год рождения`
} else{
    alert(`Твой возраст:${2022 - age} `)
}

let city = prompt('В каком городе ты живешь?')
switch (city) {
    case 'Киев':
    case 'киев':
        alert('Ты живешь в столице Украины')
        break;
    case 'Рим':
    case 'рим':
        alert('Ты живешь в столице Италии')
        break;
    case 'Минск':
    case 'минск':
        alert('Ты живешь в столице Беларуси')
        break;
    case null:
    case '':
    case ' ':
        alert('Жаль что вы не ввели свой город')
        city = 'Вы не ввели город'
        break;
    default:
        alert(`Ты живешь в городе: ${city}`)
    }
let hobby = prompt('Твой любимый вид спорта?')
switch (hobby) {
    case 'Баскетбол':
    case 'баскетбол':
        alert('Круто! Хочешь стать как Майкл Джордан ')
        break;
    case 'Волейбол':
    case 'волейбол':
        alert('Круто! Хочешь стать как Гэвин Шмитт ')
        break;
    case 'Футбол':
    case 'футбол':
        alert('Круто! Хочешь стать как Криштиану Роналду ')
        break;
    case null:
    case '':
    case ' ':
        alert('Жаль что вы не ввели свой любимый вид спорта')
        hobby = 'Вы не ввели свой любимый вид спорта'
        break;
    default:
        alert(`Твой любимый вид спорта: ${hobby}`)
}
if (age === `Вы не ввели год рождения` && city === 'Вы не ввели город' && hobby === 'Вы не ввели свой любимый вид спорта' ){
    let userInfo = alert('Вы не ввели свои данные')
} else {
    let userInfo = alert(`Твой возраст:${age} \n Твой город:${city} \n Твой любимый вид спорта:${hobby}`)
}

