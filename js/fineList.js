"use strict";
window.fineList = {
    searchFines : searchFines
}


let DB = data.finesData;

function searchFines(searchKey, searchType) {
    let filteredFines = DB.filter(fine => {
        return fine.номер === searchKey || fine.тип === searchKey;
    });
    return filteredFines;
}
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const searchInput2 = document.getElementById('searchInput2');
const finesTableBody = document.getElementById('finesTableBody');


searchBtn.addEventListener('click', function() {
    let searchKey = searchInput.value.trim(); 
    let searchKey2 = searchInput2.value.trim(); 
    let searchType = ''; 

    
    let foundFines = [];
    
    if (searchKey) {
        searchType = 'номер';
    } else if (searchKey2) {
        searchType = 'тип';
    } else if (foundFines.length === 0 && (searchKey || searchKey2)) {
        alert(`Не найдено соответствий для поиска типа штрафа или номера`); 
    } else if (searchKey) {
        foundFines = DB.filter(fine => fine['номер'].includes(searchKey));
        searchType = 'номер';
    } else if (searchKey2) {
        foundFines = DB.filter(fine => fine['тип'].toLowerCase().includes(searchKey2.toLowerCase()));
        searchType = 'тип';
    } else {
        return alert('Введите корректное значение номера штрафа или типа'); 
    }

    let searchResults = searchFines(searchKey || searchKey2, searchType);

  
    finesTableBody.innerHTML = '';

    
    searchResults.forEach(result => {
        let row = document.createElement('tr');
        Object.values(result).forEach(value => {
            let cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });
        finesTableBody.appendChild(row);
    });
});
    /*
     Напишіть свій код тут!
     Як ви бачите функція повертає статичні дані.
     Замість масиву який прописаний хардкодом, вам необхідно реалізувати цю функцію
     так, щоб вона повертала масив відповідно переданому значенню в функцію.
     Саме значення - це "Пошук за номером" або "Пошук за типом штрафу"
     Тип штрафу може бути тільки
     - Перевищення швидкості
     - Невірне паркування
     - Їзда у не тверезому стані
     */

     
  



