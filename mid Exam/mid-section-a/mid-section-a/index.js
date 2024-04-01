const products = [
  {
    name: "Scooter",
    price: 199.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Scooter",
  },
  {
    name: "Headphones",
    price: 99.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Headphones",
  },
  {
    name: "Smartphone",
    price: 599.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Smartphone",
  },
  {
    name: "Laptop",
    price: 999.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Laptop",
  },
  {
    name: "Watch",
    price: 149.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Watch",
  },
  {
    name: "Sunglasses",
    price: 49.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Sunglasses",
  },
  {
    name: "Backpack",
    price: 79.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Backpack",
  },
  {
    name: "Gaming Console",
    price: 399.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Gaming%20Console",
  },
];
const addToCart = document.getElementById("addtocart");
const container = document.getElementById("product-container");

products.forEach((product) => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  const image = document.createElement("img");
  image.src = product.imageUrl;
  image.alt = product.name;
  image.classList.add("product-image");

  imageContainer.appendChild(image);

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info");

  const name = document.createElement("h2");
  name.textContent = product.name;

  const price = document.createElement("p");
  price.textContent = "$" + product.price.toFixed(2);

  const button = document.createElement("button");
  button.textContent = "Add to Cart";
  button.classList.add("add-to-cart-btn");

  infoDiv.appendChild(name);
  infoDiv.appendChild(price);
  infoDiv.appendChild(button);

  productDiv.appendChild(imageContainer);
  productDiv.appendChild(infoDiv);

  container.appendChild(productDiv);
});

// to add selected items in cart with there names and price

function AddTocart() {
  let btn = event.target;
  // console.log(event.target.parentElement.previousSibling)
  let itemName = btn.parentElement.previousSibling.firstChild.textContent;

  if (listOfItemsInTheCart.hasOwnProperty(itemName)) {
    listOfItemsInTheCart[itemName] += 1;
    updateCounter();
  } else {
    listOfItemsInTheCart[itemName] = 1;
    createLi(itemName);
    updateCounter();
  }
}
addToCart.onClick = AddTocart;

const addButton = document.getElementsByClassName("add-to-cart-btn")[0];
console.log(addButton);

// function for updating the number of added items on screen
function updateCounter() {
  let counter = document.getElementById("items-in-cart");
  counter.innerHTML = Object.keys(listOfItemsInTheCart).length;
}
updateCounter();
// show the quntities of selected items on screen
function createLi(itemName) {
  const li = document.createElement("li");
  li.className = "addItems";
  const nameSpan = document.createElement("span");
}
