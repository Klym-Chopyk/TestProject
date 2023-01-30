const cardNumber = Number(prompt('Вкажіть номер вашої картки'));
if (cardNumber) {
  alert('Прийнято в обробку');
}
else {
  alert('Допустимі лише цифри у такому форматі 2445-6663-6638-8888');
}

const userName = prompt('Вкажіть ваше ім`я');
if (userName) {
  alert(`Привіт ${userName}`);
}
else {
  alert('Введіть своє ім`я');
}

const userLocation = prompt('Ваше місце проживання');
if (userLocation) {
  alert(`Ласкаво просимо! ${userName} з ${userLocation}!`);
}
else {
  alert('Введіть країну проживання');
}

const userAge = Number(prompt('Вкажіть ваш вік'));
if (userAge < 18) {
  alert('Пісюн ще не виріс!')
}
else {
  alert(`Приємного користування нашим сервісом ${userName}!`)
}

const result = `${cardNumber}, ${userName}, ${userLocation}, ${userAge}`;
console.log(result);

