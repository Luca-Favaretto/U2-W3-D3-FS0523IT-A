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
    .then(() => {
      const DELETE_BTN = Array.from(
        document.getElementsByClassName("delete-btn")
      );

      DELETE_BTN.forEach(btn => {
        btn.addEventListener("click", function (event) {
          let relativCard = event.target.closest(".card");
          relativCard.remove();
        });
      });
      const ADD_BTN = Array.from(document.getElementsByClassName("add-btn"));
      ADD_BTN.forEach(btn => {
        btn.addEventListener("click", function (event) {
          let relativCardTitol = event.target
            .closest(".card")
            .querySelector("div > h5").innerHTML;
          console.log(relativCardTitol);

          const carrello = document.getElementById("carrello");
          let li = document.createElement("li");
          li.innerText = relativCardTitol;
          carrello.appendChild(li);
        });
      });
    })
    .catch(err => console.log(err));
};

const addCard = function () {
  const ADD_BTN = document.getElementsByClassName("add-btn");
};
