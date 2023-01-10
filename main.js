// ======= default data =======
const menu = document.querySelector("#menu");
const cart = document.querySelector("#cart");
const totalAmount = document.querySelector("#total-amount");
const button = document.querySelector("#submit-button");

// 菜單資料
const productData = [
  {
    id: "product-1",
    imgUrl:
      "https://images.unsplash.com/photo-1558024920-b41e1887dc32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "馬卡龍",
    price: 90
  },
  {
    id: "product-2",
    imgUrl:
      "https://images.unsplash.com/photo-1560691023-ca1f295a5173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "草莓",
    price: 60
  },
  {
    id: "product-3",
    imgUrl:
      "https://images.unsplash.com/photo-1568271675068-f76a83a1e2d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "奶茶",
    price: 100
  },
  {
    id: "product-4",
    imgUrl:
      "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "冰咖啡",
    price: 180
  }
];
// ======= 請從這裡開始 =======

function displayMenu(product) {
  let htmlContent = "";
  productData.forEach((product) => {
    htmlContent += `
    <div class="col-3">
      <div class="card">
        <img src="${product.imgUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.price}</p>
          <a href="#" class="btn btn-primary">加入購物車</a>
        </div>
      </div>
    </div>
  </div>
  `;
  });
  menu.innerHTML = htmlContent;
}
displayMenu(productData);

let totalMoney = 0;
menu.addEventListener("click", function (event) {
  const target = event.target;
  const name = target.previousElementSibling.previousElementSibling;
  const price = target.previousElementSibling;
  if (target.matches(".btn-primary")) {
    cart.innerHTML += `
          <li class="list-group-item">${name.innerHTML} X 1 小計：${price.innerHTML}</li>
    `;
    totalMoney += Number(price.textContent);
    totalAmount.textContent = totalMoney;
  }
});

button.addEventListener("click", function (event) {
  if (totalAmount.textContent !== "--") {
    alert(`感謝購買\n總金額為：${totalAmount.textContent}`);
    cart.innerHTML = "";
    totalMoney = 0;
    totalAmount.innerHTML = "--";
  }
});
