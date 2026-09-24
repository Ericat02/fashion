// const undervisere = ["Anders", "Stine", "Allan"];

// console.log("Undervisere");

// const section = document.querySelector("section");

// undervisere.forEach(visNavne);

// function visNavne(elm, i) {
//   section.innerHTML += `<p>${elm} har index ${i}</p>`;
// }

// const biler = [
//   {
//     pris: 450000,
//     model: "CLA 250+",
//     brand: "Mercedes",
//     farve: "Night blue",
//     udstyr: ["rat", "sæder", "vinduer"],
//   },
//   {
//     pris: 230000,
//     model: "ID3",
//     brand: "VW",
//     farve: "Hvid",
//     udstyr: ["rat", "sæder", "vinduer"],
//   },
//   {
//     pris: 200000,
//     model: "C3",
//     brand: "Citroen",
//     farve: "Black",
//     udstyr: ["rat", "sæder", "vinduer"],
//   },
// ];

// biler.forEach(visBiler);

// function visBiler(bil) {
//   produktliste.innerHTML += `<article class="card">
//     <h2>${bil.brand}</h2>
//     <h3>${bil.model}</h3>
//     <p>kr. ${bil.pris},-</p>
//     <p>${bil.farve} </p>
//     <p>${bil.udstyr}</p>
// </article>`;
// }

const endpoint = "https://kea-alt-del.dk/t7/api/products?limit=21";

const produktliste = document.querySelector(".produktliste");

fetch(endpoint).then((res) => res.json().then(visData));

function visData(json) {
  json.forEach((element) => {
    produktliste.innerHTML += `
    <article class="card">
    <img src=${`https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp`} alt="produktbillede">
    <h2>${element.productdisplayname}</h2>
    <h3>${element.brandname}</h3>
    <p>kr. ${element.price},-</p>
     <p>${element.subcategory} </p>
     
 </article>`;
  });
}
