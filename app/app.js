let date = new Date();

let myMonth = date.getMonth();
let myYear = date.getFullYear();

let select = document.querySelector("#select");
let input = document.querySelector("#input");

select.onchange = function() {
  myMonth = +select.value;
  createCalendar(myYear, myMonth);
};

input.onchange = function() {
  myYear = +input.value;
  createCalendar(myYear, myMonth);
};

function createCalendar(year, month) {
  let elem = document.querySelector("#calendar");
  let mon = month;
  let d = new Date(year, mon);
  let table = `<table>
                  <tr>
                    <th>пн</th>
                    <th>вт</th>
                    <th>ср</th>
                    <th>чт</th>
                    <th>пт</th>
                    <th>сб</th>
                    <th>вс</th>
                    </tr><tr>`;

  for (let i = 0; i < getDay(d); i++) {
    table += "<td></td>";
  }

  // ячейки календаря с датами
  while (d.getMonth() == mon) {
    table += `<td>` + d.getDate() + `</td>`;

    if (getDay(d) % 7 == 6) {
      table += `</tr><tr>`;
    }

    d.setDate(d.getDate() + 1);
  }

  // добить таблицу пустыми ячейками
  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += `<td></td>`;
    }
  }

  // закрыть таблицу
  table += `</tr></table>`;
  elem.innerHTML = table;
}

function getDay(date) {
  // получить номер дня недели, от 0(пн) до 6(вс)
  let day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}

createCalendar(myYear, myMonth);

let tbody = document.querySelector("#calendar");

tbody.addEventListener("click", event => {
  if (!isNaN(event.target.innerHTML) && event.target.innerHTML != "") {
    console.log(event.target.innerHTML)
    document.querySelector('.task').style.display = "block";
    return;
  }
  if (document.querySelector('.task').style.display = "block") {
    document.querySelector('.task').style.display = "none";
  }
});


