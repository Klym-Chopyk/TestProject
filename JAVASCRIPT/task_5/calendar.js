var months = [
    'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
    'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
  ];

  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    var month = parseInt(document.getElementById('month').value);
    var year = parseInt(document.getElementById('year').value);
    var calendar = generateCalendar(month, year);
    document.getElementById('calendar').innerHTML = calendar;
    document.getElementById('selectedMonth').textContent = months[month - 1];
    document.getElementById('selectedYear').textContent = year;
    document.getElementById('selectedDate').style.display = 'block';
  });

  function generateCalendar(month, year) {
    var date = new Date(year, month - 1, 1);
    var calendar = '<table>' +
                   '<tr>' +
                   '<th>Пн</th>' +
                   '<th>Вт</th>' +
                   '<th>Ср</th>' +
                   '<th>Чт</th>' +
                   '<th>Пт</th>' +
                   '<th>Сб</th>' +
                   '<th>Нд</th>' +
                   '</tr>';

    while (date.getMonth() === month - 1) {
      calendar += '<tr>';

      for (var i = 0; i < 7; i++) {
        if (date.getDay() === i && date.getMonth() === month - 1) {
          calendar += '<td>' + date.getDate() + '</td>';
          date.setDate(date.getDate() + 1);
        } else {
          calendar += '<td></td>';
        }
      }

      calendar += '</tr>';
    }

    calendar += '</table>';

    return calendar;
  }