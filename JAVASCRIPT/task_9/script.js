// Отримуємо елементи форми та списку повідомлень
const messageForm = document.getElementById('message-form');
const messageList = document.getElementById('message-list');

// Додаємо подію submit на форму
messageForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Відміна стандартної поведінки форми

  // Отримуємо значення полів форми
  const username = document.getElementById('username').value;
  const message = document.getElementById('message').value;

  // Створюємо елементи для повідомлення
  const messageItem = document.createElement('div');
  messageItem.classList.add('message-item');

  const messageText = document.createElement('p');
  messageText.classList.add('message-text');
  messageText.textContent = message;

  const userInfo = document.createElement('div');
  userInfo.classList.add('user-info');

  const usernameElement = document.createElement('span');
  usernameElement.classList.add('username');
  usernameElement.textContent = username;

  const datetimeElement = document.createElement('span');
  datetimeElement.classList.add('datetime');
  datetimeElement.textContent = getCurrentDateTime();

  // Додаємо елементи до DOM
  userInfo.appendChild(usernameElement);
  userInfo.appendChild(datetimeElement);
  messageItem.appendChild(userInfo);
  messageItem.appendChild(messageText);

  // Вставляємо повідомлення на початок списку
  messageList.insertBefore(messageItem, messageList.firstChild);

  // Очищаємо поля форми
  document.getElementById('username').value = '';
  document.getElementById('message').value = '';
});

// Функція для отримання поточної дати та часу
function getCurrentDateTime() {
  const now = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' };
  return now.toLocaleDateString('en-US', options);
}
