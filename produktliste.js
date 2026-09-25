const endpoint = "https://kea-alt-del.dk/t7/api/products?limit=30";

const productid = 123456;
const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${productid}.webp`;

fetch(endpoint)
  .then((res) => res.json())
  .then(visData);

function visData(json) {
  console.log(json);
  json.forEach((element) => {
    produktliste.innerHTML += `<a class="card" href=produktdetaljer.html?id=${element.id}>
        <article class="card">
        <img src=https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp alt="produktbillede" />
            <h2>${element.productdisplayname}</h2>
            <h3>${element.brandname}</h3>
            <p>kr. ${element.price},-</p>
            <p>${element.category}</p>
        </article>
        </a>`;
  });
}

const produktliste = document.querySelector(".produktliste");

// const endpoint = "https://kea-alt-del.dk/t7/api/products?limit=21";

// const produktliste = document.querySelector(".produktliste");

// fetch(endpoint).then((res) => res.json().then(visData));

// function visData(json) {
//   json.forEach((element) => {
//     produktliste.innerHTML += `
//     <article class="card">
//     <img src=${`https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp`} alt="produktbillede">
//     <h2>${element.productdisplayname}</h2>
//     <h3>${element.brandname}</h3>
//     <p>kr. ${element.price},-</p>
//      <p>${element.subcategory} </p>

//  </article>`;
//   });
// }
