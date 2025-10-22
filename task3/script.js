const employees = [
  { name: "Іван", position: "Менеджер", salary: 25000, years: 5 },
  { name: "Марія", position: "Аналітик", salary: 30000, years: 7 },
  { name: "Петро", position: "Розробник", salary: 40000, years: 4 },
  { name: "Оксана", position: "Дизайнер", salary: 28000, years: 6 },
  { name: "Андрій", position: "Тестувальник", salary: 27000, years: 3 }
];

function getAverageSalary(arr) {
  const total = arr.reduce((sum, emp) => sum + emp.salary, 0);
  return total / arr.length;
}

function findMostExperiencedEmployee(arr) {
  return arr.reduce((max, emp) => (emp.years > max.years ? emp : max));
}

function showAverageSalary() {
  const avg = getAverageSalary(employees);
  document.getElementById("output").innerHTML = `<h3>Середня зарплата:</h3><p>${avg.toFixed(2)} грн</p>`;
}

function showMostExperienced() {
  const emp = findMostExperiencedEmployee(employees);
  document.getElementById("output").innerHTML =
    `<h3>Найдосвідченіший працівник:</h3>
     <p>${emp.name}, посада: ${emp.position}, досвід: ${emp.years} років, зарплата: ${emp.salary} грн</p>`;
}
