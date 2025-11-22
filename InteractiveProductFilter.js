<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Product Filter</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>🛍️ Product Filter</h1>

  <input type="text" id="searchBox" placeholder="Search products..." />

  <div class="buttons">
    <button onclick="filterProducts('all')">All</button>
    <button onclick="filterProducts('electronics')">Electronics</button>
    <button onclick="filterProducts('clothing')">Clothing</button>
  </div>

  <ul id="productList"></ul>

  <script src="script.js"></script>
</body>
</html>
body {
  font-family: Arial, sans-serif;
  background: #f0f0f0;
  padding: 40px;
  text-align: center;
}

h1 {
  color: #333;
}

#searchBox {
  padding: 10px;
  width: 250px;
  font-size: 16px;
  margin-bottom: 20px;
}

.buttons {
  margin-bottom: 20px;
}

button {
  padding: 10px 15px;
  margin: 0 5px;
  font-size: 16px;
  cursor: pointer;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}

button:hover {
  background: #0056b3;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  text-align: left;
  width: 300px;
  margin: 10px auto;
}
const products = [
  { name: "Smartphone", category: "electronics" },
  { name: "Laptop", category: "electronics" },
  { name: "Headphones", category: "electronics" },
  { name: "T-Shirt", category: "clothing" },
  { name: "Jeans", category: "clothing" },
  { name: "Sneakers", category: "clothing" },
  { name: "Book: JavaScript Basics", category: "books" },
  { name: "Book: CSS Mastery", category: "books" },
  { name: "Smartwatch", category: "electronics" },
  { name: "Jacket", category: "clothing" }
];

const productList = document.getElementById("productList");
const searchBox = document.getElementById("searchBox");

function displayProducts(filtered) {
  productList.innerHTML = "";
  filtered.forEach(product => {
    const li = document.createElement("li");
    li.textContent = `${product.name} (${product.category})`;
    productList.appendChild(li);
  });
}

function filterProducts(category) {
  let filtered = products;
  if (category !== "all") {
    filtered = products.filter(p => p.category === category);
  }
  const keyword = searchBox.value.toLowerCase();
  if (keyword) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(keyword));
  }
  displayProducts(filtered);
}

// Initial display
displayProducts(products);

// Live search
searchBox.addEventListener("input", () => {
  filterProducts("all");
});
