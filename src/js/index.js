const serverurl = process.env.SERVER_API;

let product = document.querySelector(".product-list-content");
let page = 1;

// Váriaveis para adiconar filtro
let query = "id";
let sort = "asc";
let extraQuery = "";

// Variável do botão de carregar mais produtos
const showButton = document.querySelector("#showMore");

// Variáveis para toggle da ordenação dos produtos
let titleOrder = document.querySelector(".product-order");
let optionsOrder = document.querySelector(".orderBy");

// Váriavel do botão de mais recente
let mostRecent = document.querySelector(".most-recent");

// Váriavel do botão de menor preço
let lowestPrice = document.querySelector(".lowest-price");

// Variável do botão de maior preço
let biggestPrice = document.querySelector(".biggest-price");

// Varíavel do checkbox até R$50
let until50 = document.querySelector("#until-50");

// Variável do checkbox até 150
let until150 = document.querySelector("#until-150");

// Variável do checkbox até 350
let until300 = document.querySelector("#until-300");

// Variável do checkbox até 500
let until500 = document.querySelector("#until-500");

// Variável do checkbox a partir de 500
let greaterThan500 = document.querySelector("#greater-than-500");

// Váriavel do tamanho P
let sizeP = document.querySelector(".size-p");

// Váriavel do tamanho M
let sizeM = document.querySelector(".size-m");

// Váriavel do tamanho G
let sizeG = document.querySelector(".size-g");

// Váriavel do tamanho GG
let sizeGg = document.querySelector(".size-gg");

// Váriavel do tamanho U
let sizeU = document.querySelector(".size-u");

// Váriavel do tamanho 36
let size36 = document.querySelector(".size-36");

// Váriavel do tamanho 38
let size38 = document.querySelector(".size-38");

// Váriavel do tamanho 38
let size40 = document.querySelector(".size-40");

// Váriavel da cor amarela
let yellow = document.querySelector("#yellow");

// Váriavel da cor azul
let blue = document.querySelector("#blue");

// Váriavel da cor branca
let white = document.querySelector("#white");

// Váriavel da cor cinza
let gray = document.querySelector("#gray");

// Váriavel da cor cinza
let orange = document.querySelector("#orange");

function createProduct(data) {
  console.log(data.name);
  productDiv = document.createElement("div");
  productDiv.classList.add("product");
  productImage = document.createElement("img");
  productName = document.createElement("h3");
  productPrice = document.createElement("p");
  productInstallment = document.createElement("p");
  productInstallment.classList.add("price-parcel");
  productPrice.classList.add("price");
  buyButton = document.createElement("button");
  productImage.src = data.image;

  productName.innerHTML = data.name;
  productPrice.innerHTML = data.price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  productInstallment.innerHTML = `Até ${
    data.parcelamento[0]
  } de ${data.parcelamento[1].toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}`;
  buyButton.innerHTML = "Comprar";

  productDiv.appendChild(productImage);
  productDiv.appendChild(productName);
  productDiv.appendChild(productPrice);
  productDiv.appendChild(productInstallment);
  productDiv.appendChild(buyButton);

  return productDiv;
}

function getDataFromApi() {
  fetch(
    `http://localhost:5000/products?_page=${page}&_limit=9&_sort=${query}&_order=${sort}${extraQuery}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      data.forEach((element) => {
        let productDiv = createProduct(element);
        product.appendChild(productDiv);
      });
    })
    .catch(function (e) {
      console.log(e);
    });
}

function main() {
  getDataFromApi();
}

showButton.addEventListener("click", carregarMais);

function carregarMais() {
  page++;
  getDataFromApi();
}

titleOrder.addEventListener("click", orderToggle);

function orderToggle() {
  if (optionsOrder.classList.contains("show")) {
    optionsOrder.classList.remove("show");
  } else {
    optionsOrder.classList.add("show");
  }
}

lowestPrice.addEventListener("click", showLowestPrice);

function showLowestPrice() {
  //limpar lista de produtos
  product.innerHTML = "";

  page = 1;
  query = "price";
  sort = "asc";

  getDataFromApi();
}

biggestPrice.addEventListener("click", showBiggestPrice);

function showBiggestPrice() {
  //limpar lista de produtos
  product.innerHTML = "";

  page = 1;
  query = "price";
  sort = "desc";

  getDataFromApi();
}

mostRecent.addEventListener("click", showMostRecentProduct);

function showMostRecentProduct() {
  //limpar lista de produtos
  product.innerHTML = "";

  page = 1;
  query = "date";
  sort = "asc";

  getDataFromApi();
}

until50.addEventListener("click", showPriceUntil50);

function showPriceUntil50() {
  //limpar lista de produtos
  product.innerHTML = "";

  page = 1;
  query = "price";
  extraQuery = "&price_lte=50";
  getDataFromApi();
}

until150.addEventListener("click", showPriceUntil150);

function showPriceUntil150() {
  //limpar lista de produtos
  product.innerHTML = "";

  page = 1;
  sort = "asc";
  query = "price";
  extraQuery = "&price_lte=150&price_gte=51";
  getDataFromApi();
}

until300.addEventListener("click", showPriceUntil300);

function showPriceUntil300() {
  //limpar lista de produtos
  product.innerHTML = "";

  page = 1;
  sort = "asc";
  query = "price";
  extraQuery = "&price_lte=300&price_gte=151";
  getDataFromApi();
}

until500.addEventListener("click", showPriceUntil500);

function showPriceUntil500() {
  //limpar lista de produtos
  product.innerHTML = "";

  page = 1;
  sort = "asc";
  query = "price";
  extraQuery = "&price_lte=500&price_gte=301";
  getDataFromApi();
}

greaterThan500.addEventListener("click", showPricegreaterthan500);

function showPricegreaterthan500() {
  //limpar lista de produtos
  product.innerHTML = "";

  page = 1;
  sort = "asc";
  query = "price";
  extraQuery = "&price_gte=500";
  getDataFromApi();
}

sizeP.addEventListener("click", showProductsWithSizeP);

function showProductsWithSizeP() {
  //limpar lista de produtos
  product.innerHTML = "";

  page = 1;
  sort = "asc";
  query = "size";
  extraQuery = "&size_like=P";
  getDataFromApi();
}

sizeM.addEventListener("click", showProductsWithSizeM);

function showProductsWithSizeM() {
  //limpar lista de produtos
  product.innerHTML = "";

  page = 1;
  sort = "asc";
  query = "size";
  extraQuery = "&size_like=M";
  getDataFromApi();
}

sizeG.addEventListener("click", showProductsWithSizeG);

function showProductsWithSizeG() {
  //limpar lista de produtos
  product.innerHTML = "";

  page = 1;
  sort = "asc";
  query = "size";
  extraQuery = "&size_like=^G,";
  getDataFromApi();
}

sizeGg.addEventListener("click", showProductsWithSizeGg);

function showProductsWithSizeGg() {
  //limpar lista de produtos
  product.innerHTML = "";

  page = 1;
  sort = "asc";
  query = "size";
  extraQuery = "&size_like=GG";
  getDataFromApi();
}

sizeU.addEventListener("click", showProductsWithSizeU);

function showProductsWithSizeU() {
  //limpar lista de produtos
  product.innerHTML = "";

  page = 1;
  sort = "asc";
  query = "size";
  extraQuery = "&size_like=U";
  getDataFromApi();
}

size36.addEventListener("click", showProductsWithSize36);

function showProductsWithSize36() {
  //limpar lista de produtos
  product.innerHTML = "";

  page = 1;
  sort = "asc";
  query = "size";
  extraQuery = "&size_like=36";
  getDataFromApi();
}

size38.addEventListener("click", showProductsWithSize38);

function showProductsWithSize38() {
  //limpar lista de produtos
  product.innerHTML = "";

  page = 1;
  sort = "asc";
  query = "size";
  extraQuery = "&size_like=38";
  getDataFromApi();
}

size40.addEventListener("click", showProductsWithSize40);

function showProductsWithSize40() {
  //limpar lista de produtos
  product.innerHTML = "";

  page = 1;
  sort = "asc";
  query = "size";
  extraQuery = "&size_like=40";
  getDataFromApi();
}

yellow.addEventListener("click", showProductsWithYellowColor);

function showProductsWithYellowColor() {
  //limpar lista de produtos
  product.innerHTML = "";

  page = 1;
  sort = "asc";
  query = "color";
  extraQuery = "&color=Amarelo";
  getDataFromApi();
}

blue.addEventListener("click", showProductsWithBlueColor);

function showProductsWithBlueColor() {
  //limpar lista de produtos
  product.innerHTML = "";

  page = 1;
  sort = "asc";
  query = "color";
  extraQuery = "&color=Azul";
  getDataFromApi();
}

white.addEventListener("click", showProductsWithWhiteColor);

function showProductsWithWhiteColor() {
  //limpar lista de produtos
  product.innerHTML = "";

  page = 1;
  sort = "asc";
  query = "color";
  extraQuery = "&color=Branco";
  getDataFromApi();
}

gray.addEventListener("click", showProductsWithGrayColor);

function showProductsWithGrayColor() {
  //limpar lista de produtos
  product.innerHTML = "";

  page = 1;
  sort = "asc";
  query = "color";
  extraQuery = "&color=Cinza";
  getDataFromApi();
}

orange.addEventListener("click", showProductsWithOrangeColor);

function showProductsWithOrangeColor() {
  //limpar lista de produtos
  product.innerHTML = "";

  page = 1;
  sort = "asc";
  query = "color";
  extraQuery = "&color=Laranja";
  getDataFromApi();
}

main();
