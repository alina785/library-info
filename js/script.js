const books = [
  { title: "Тіні забутих предків", author: "Михайло Коцюбинський", genre: "Повість", year: 1911, shelf: "A-12" },
  { title: "Intermezzo", author: "Михайло Коцюбинський", genre: "Новела", year: 1908, shelf: "A-13" },
  { title: "Захар Беркут", author: "Іван Франко", genre: "Історичний роман", year: 1883, shelf: "B-03" },
  { title: "Лісова пісня", author: "Леся Українка", genre: "Драма-феєрія", year: 1911, shelf: "B-07" },
  { title: "Чистий код", author: "Роберт Мартін", genre: "Програмування", year: 2008, shelf: "C-21" },
  { title: "Eloquent JavaScript", author: "Marijn Haverbeke", genre: "Програмування", year: 2018, shelf: "C-22" }
];

const container = document.getElementById("books-list");
const searchInput = document.getElementById("search");

function renderBooks(list) {
  if (list.length === 0) {
    container.innerHTML = "<p>Нічого не знайдено.</p>";
    return;
  }
  container.innerHTML = list.map(b => `
    <article class="card">
      <h3>${b.title}</h3>
      <p>${b.author}</p>
      <p class="genre">${b.genre}</p>
      <p>Рік: ${b.year}</p>
      <p>Полиця: ${b.shelf}</p>
    </article>`).join("");
}

searchInput.addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  renderBooks(books.filter(b =>
    b.title.toLowerCase().includes(q) ||
    b.author.toLowerCase().includes(q) ||
    b.genre.toLowerCase().includes(q)
  ));
});

renderBooks(books);
