function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();
  
// Exercício 1:
function createDaysOfDecember() {
    let dezDaysNumbers = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let getDaysList = document.querySelector('#days');

    for (let i = 0; i < dezDaysNumbers.length; i += 1) {
        let dezDays = dezDaysNumbers[i];
        let dayItem = document.createElement('li');
        
        dayItem.innerHTML = dezDays;
        getDaysList.appendChild(dayItem);

        if (dezDays === 24 | dezDays === 31) {
            dayItem.className = 'day holiday';
        } else if (dezDays === 4 | dezDays === 11 | dezDays === 18) {
            dayItem.className = 'day friday';
        } else if (dezDays === 25) {
            dayItem.className = 'day holiday friday';
        } else {
            dayItem.className = 'day';
        }
    }
}
createDaysOfDecember();

// Exercício 2:
function holidayButton(string) {
    let button = document.createElement('button');
    button.innerHTML = string;
    button.id = 'btn-holiday';
    document.querySelector('.buttons-container').appendChild(button)
}
holidayButton('Feriados');

// Exercício 3:
function displayHolidays(){
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday');
    let backColor = 'white';
    let originalColor = 'rgb(238,238,238)';

    getHolidayButton.addEventListener('click', function() {
        for (let i = 0; i < getHolidays.length; i += 1) {
            if (getHolidays[i].style.backgroundColor === backColor) {
                getHolidays[i].style.backgroundColor = originalColor;
            } else {
                getHolidays[i].style.backgroundColor = backColor;
            }
        }
    })
}
displayHolidays();





