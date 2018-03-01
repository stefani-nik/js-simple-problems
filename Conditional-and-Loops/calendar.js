function calendar([day, month, year]) {
     let html = `<table>\n<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n<tr>`;
     let currentDate = new Date(year, month - 1, day);
     let prevMonth = currentDate.getMonth() - 1 < 0 ? 11 : currentDate.getMonth() - 1;
     let nextMonth = currentDate.getMonth() + 1 > 11 ? 0 : currentDate.getMonth() + 1;
     let dayOfweekFirst = new Date(year, month - 1, 1).getDay();
     let dayOfWeekLast = new Date(year, month, 0).getDay();
     let daysInMonth = new Date(year, month, 0).getDate();

    for (var i = dayOfweekFirst - 1; i >= 0; i--) {
        let prevMonthDay = new Date(year, prevMonth + 1, 0).getDate() - i;
        html += `<td class="prev-month">${prevMonthDay}</td>`;
    }

    for (var i = 1; i <= daysInMonth; i++) {

        if(new Date(year, month - 1, i).getDay() == 6){

            if(i == currentDate.getDate()) {
                html += `<td class="today">${i}</td></tr>\n<tr>`;
            }
            else {
                if(i == daysInMonth){
                    html += `<td>${i}</td></tr>\n`;
                }
                else {
                    html += `<td>${i}</td></tr>\n<tr>`;
                }
            }
        }
        else {
            if(i == currentDate.getDate()) {
                html += `<td class="today">${i}</td>`;
            }
            else {
                html += `<td>${i}</td>`;
            }
        }
    }
    for (var i = 0; i < 6 - dayOfWeekLast; i++) {
        let nextMonthDay = new Date(year, nextMonth, 1).getDate() + i;
        html += `<td class="next-month">${nextMonthDay}</td>`;
    }

    if( new Date(year, month, 0).getDay() == 6){
        html += `</table>`;
    }
    else {
        html += `</tr>\n</table>`;
    }

    console.log(html);
}
calendar([1,4,2016]);