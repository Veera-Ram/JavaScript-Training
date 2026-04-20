let allProducts = [];

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    document.getElementById("loader").innerText = "";
    allProducts = data;
    display(data);
  })
  .catch(() => {
    document.getElementById("loader").innerText = "";
    document.getElementById("error").innerText = "Error loading data";
  });

function display(products) {
  let container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}" />
        <h4>${p.title.slice(0,20)}</h4>
        <p>${p.description.slice(0,60)}</p>
        <button>₹ ${p.price}</button>
        <br><br>
        <button onclick="viewMore('${p.title}', '${p.description}')">View More</button>
      </div>
    `;
  });
}

document.getElementById("search").addEventListener("input", e => {
  let value = e.target.value.toLowerCase();
  let filtered = allProducts.filter(p =>
    p.title.toLowerCase().includes(value)
  );
  display(filtered);
});

function sortLow() {
  let sorted = [...allProducts].sort((a,b) => a.price - b.price);
  display(sorted);
}

function sortHigh() {
  let sorted = [...allProducts].sort((a,b) => b.price - a.price);
  display(sorted);
}

function filterCategory() {
  let value = document.getElementById("category").value;

  if (value === "all") {
    display(allProducts);
  } else {
    let filtered = allProducts.filter(p => p.category === value);
    display(filtered);
  }
}

function viewMore(title, desc) {
  alert(title + "\n\n" + desc);
}