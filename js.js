function isLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function findLeapYears() {
    const startYear = parseInt(document.getElementById("startYear").value);
    const endYear = parseInt(document.getElementById("endYear").value);
    const leapYearsList = document.getElementById("leapYearsList");
    
    leapYearsList.innerHTML = ""; // Очищаем список перед выводом
    
    for (let year = startYear; year <= endYear; year++) {
        if (isLeap(year)) {
            const listItem = document.createElement("li");
            listItem.textContent = year;
            leapYearsList.appendChild(listItem);
        }
    }

    if (leapYearsList.childElementCount === 0) {
        leapYearsList.innerHTML = "<li>Високосных годов не найдено</li>";
    }
}