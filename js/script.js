window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then(response => response.json())
    .then(booksObj =>
      booksObj.forEach(book => {
        const container = document.getElementById("container-card");
        const col = document.createElement("div");
        col.classList = "col-12 col-sm-6 col-lg-4 col-xl-3";
        const card = document.createElement("div");
        card.classList = "card";
        card.innerHTML = `<img
        src="${book.img}"
        class="card-img-top"
        alt="img of relative book"
      />
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">Price: ${book.price} $</p>
        <a href="#" class="btn btn-success add-btn">Add to Carrel</a>
        <a href="#" class="btn btn-danger delete-btn">Delete</a>
      </div>`;

        col.appendChild(card);
        container.appendChild(col);
      })
    )
    .catch(err => console.log(err));
  const DELETE_BTN = document.getElementsByClassName("delete-btn");
  const CARD = document.getElementsByClassName("card");
  console.log(DELETE_BTN);
  console.log(CARD);
  DELETE_BTN.onclick = deleteCard;
};

const deleteCard = function (CARD) {
  CARD.

};
const addCard = function () {
  const ADD_BTN = document.getElementsByClassName("add-btn");
};
