window.onload = () => {
  const container = document.getElementById("container-card");
  const carrello = document.getElementById("carrello");
  let bookArray = [];

  fetch("https://striveschool-api.herokuapp.com/books")
    .then(response => response.json())
    .then(booksObj => {
      booksObj.forEach(book => {
        const col = document.createElement("div");
        col.classList = "col-12 col-sm-6 col-lg-4 col-xl-3 mt-3";
        const card = document.createElement("div");
        card.classList = "card";
        card.innerHTML = `
          <div class="height450">
            <img
              src="${book.img}"
              class="card-img-top height100percent object-cover"
              alt="img of relative book"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">Price: ${book.price} $</p>
            <a href="#" class="btn btn-success add-btn">Add to Carrel</a>
            <a href="#" class="btn btn-danger delete-btn">Delete</a>
          </div>
        `;

        col.appendChild(card);
        container.appendChild(col);

        const ADD_BTN = card.querySelector(".add-btn");
        const DELETE_BTN = card.querySelector(".delete-btn");

        ADD_BTN.addEventListener("click", function () {
          bookArray.push(book.title);
          localStorage.setItem("book", JSON.stringify(bookArray));
          updateCarrello();
        });

        DELETE_BTN.addEventListener("click", function () {
          const index = bookArray.indexOf(book.title);
          if (index > -1) {
            bookArray.splice(index, 1);
          }
          localStorage.setItem("book", JSON.stringify(bookArray));
          updateCarrello();
        });
      });
    })
    .catch(err => console.log(err));

  function updateCarrello() {
    carrello.innerHTML = "";
    bookArray.forEach(title => {
      const div = document.createElement("div");
      div.innerHTML = `
        <span>${title}</span>
        <button class="btn btn-danger delete-from-cart">Delete</button>
      `;
      carrello.appendChild(div);
    });

    const deleteButtons = document.querySelectorAll(".delete-from-cart");
    deleteButtons.forEach(button => {
      button.addEventListener("click", function () {
        const div = this.parentElement;
        const title = div.querySelector("span").innerText;
        const index = bookArray.indexOf(title);
        if (index > -1) {
          bookArray.splice(index, 1);
          localStorage.setItem("book", JSON.stringify(bookArray));
          updateCarrello();
        }
      });
    });
  }

  const savedCart = localStorage.getItem("book");
  if (savedCart) {
    bookArray = JSON.parse(savedCart);
    updateCarrello();
  }
};
