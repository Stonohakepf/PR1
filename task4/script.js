const books = [
  { title: "Мистецтво війни", author: "Сунь-цзи", year: 500, rating: 4.8, isRead: true },
  { title: "1984", author: "Джордж Орвелл", year: 1949, rating: 4.7, isRead: true },
  { title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1966, rating: 4.9, isRead: false },
  { title: "Кобзар", author: "Тарас Шевченко", year: 1840, rating: 4.6, isRead: false },
  { title: "Фауст", author: "Йоганн Гете", year: 1808, rating: 4.2, isRead: true },
  { title: "Собаче серце", author: "Михайло Булгаков", year: 1925, rating: 4.4, isRead: false }
];

function getUnreadBooks(arr) {
  return arr.reduce((acc, book) => {
    if (!book.isRead) acc.push(book.title);
    return acc;
  }, []);
}

function getBooksByAuthor(arr, authorName) {
  return arr
    .filter(book => book.author === authorName)
    .sort((a, b) => a.year - b.year);
}

function getTopRatedBooks(arr) {
  return arr
    .filter(book => book.rating > 4)
    .sort((a, b) => b.rating - a.rating);
}

function showUnreadBooks() {
  const unread = getUnreadBooks(books);
  document.getElementById("output").innerHTML = "<h3>Непрочитані книги:</h3><p>" + unread.join(", ") + "</p>";
}

function showBooksByAuthor() {
  const authorBooks = getBooksByAuthor(books, "Михайло Булгаков");
  const list = authorBooks.map(b => `${b.title} (${b.year})`).join(", ");
  document.getElementById("output").innerHTML = "<h3>Книги Булгакова:</h3><p>" + list + "</p>";
}

function showTopRatedBooks() {
  const top = getTopRatedBooks(books);
  const list = top.map(b => `${b.title} - ${b.rating}`).join(", ");
  document.getElementById("output").innerHTML = "<h3>Топові книги:</h3><p>" + list + "</p>";
}
