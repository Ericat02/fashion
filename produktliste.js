const cat = new URLSearchParams(window.location.search).get("cat");
const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${cat}`;

const produktliste = document.querySelector(".produktliste");

const h2 = document.querySelector("h2"); //vis bruger hvilken kategori der vises?
h2.textContent = cat;

document.querySelectorAll("#filter button").forEach((knap) => knap.addEventListener("click", filtere));

let alleData, udsnit;

fetch(endpoint).then((res) =>
  res.json().then((data) => {
    alleData = udsnit = data;
    visData(data);
  })
);

function filtere(e) {
  console.log(e.target.textContent); //Hvad står der i den knap der bliver klikket på
  console.log(alleData, udsnit);
  const valgt = e.target.textContent;
  if (valgt == "Alle") {
    udsnit = alleData;
  } else {
    udsnit = alleData.filter((produkt) => produkt.gender == valgt);
  }
  visData(udsnit);
}

function visData(json) {
  produktliste.innerHTML = "";
  json.forEach((produkt) => {
    const tilbudspris = Math.round(produkt.price - (produkt.price * produkt.discount) / 100);
    produktliste.innerHTML += `
    <a href=produktdetaljer.html?id=${produkt.id} class=${produkt.soldout ? "udsolgt" : ""}> 
    <article class="card" >
    <img src=${`https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp`} alt="produktbillede">
    <div class="tekst">
    <h2>${produkt.productdisplayname}</h2>
    <h3>${produkt.brandname}</h3>

    ${
      produkt.discount
        ? `<p class="tilbudslabel" >-${produkt.discount}%</p>
          <p> Før kr. ${produkt.price},- <br> Nu ${tilbudspris},-</p>`
        : `<p>kr. ${produkt.price},-</p>`
    }
    
    
     <p>${produkt.subcategory} </p>
     </div>

 </article>
</a>`;
  });
}

// const endpoint = "https://kea-alt-del.dk/t7/api/products?limit=30";

// const productid = 123456;
// const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${productid}.webp`;

// fetch(endpoint)
//   .then((res) => res.json())
//   .then(visData);

// function visData(json) {
//   console.log(json);
//   json.forEach((element) => {
//     produktliste.innerHTML += `<a class="card" href=produktdetaljer.html?id=${element.id}>
//         <article class="card">
//         <img src=https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp alt="produktbillede" />
//             <h2>${element.productdisplayname}</h2>
//             <h3>${element.brandname}</h3>
//             <p>kr. ${element.price},-</p>
//             <p>${element.category}</p>
//         </article>
//         </a>`;
//   });
// }

// const produktliste = document.querySelector(".produktliste");
