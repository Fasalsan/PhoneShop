// Array of product objects
const products = [
  {
    id: 1,
    name: "Iphone 16 Pro Max",
    variant: "256",
    price: 1199,
    discountPrice: 1299,
    freeOffer: "Free (Cash & Screen)",
    img: "../../imgProduct/apple/iphone16.png",
  },
  {
    id: 2,
    name: "Iphone 15 Pro Max",
    variant: "64",
    price: 1059,
    discountPrice: 1168,
    freeOffer: "Free (Headphones)",
    img: "../../imgProduct/apple/iphone15.png",
  },
  {
    id: 3,
    name: "Iphone 14 Pro Max",
    variant: "256",
    price: 979,
    discountPrice: 1100,
    // freeOffer: "Free (Headphones)",
    img: "../../imgProduct/apple/iphone14.png",
  },
  {
    id: 4,
    name: "Iphone 13 Pro Max",
    variant: "64",
    price: 849,
    discountPrice: 999,
    // freeOffer: "Free (Headphones)",
    img: "../../imgProduct/apple/iphone13.png",
  },
  {
    id: 5,
    name: "Iphone 12 Pro Max",
    variant: "8",
    price: 565,
    discountPrice: 599,
    freeOffer: "Free (Headphones)",
    img: "../../imgProduct/apple/iphone12.png",
  },
  {
    id: 6,
    name: "Iphone 11 Pro Max",
    variant: "128",
    price: 435,
    discountPrice: 468,
    // freeOffer: "Free (Headphones)",
    img: "../../imgProduct/apple/iphone11.png",
  },
  {
    id: 7,
    name: "Iphone XS Max",
    variant: "128",
    price: 355,
    discountPrice: 410,
    // freeOffer: "Free (Headphones)",
    img: "../../imgProduct/apple/iphoneX.png",
  },
  {
    id: 8,
    name: "Iphone 7 Plus",
    variant: "128",
    price: 175,
    discountPrice: 199,
    // freeOffer: "Free (Headphones)",
    img: "../../imgProduct/apple/iphone7.png",
  },
];

// Function to display products dynamically
const displayProducts = () => {
  // Get the container element where cards will be appended
  const container = document.getElementById("productContainer");

  // Map through products array and create HTML structure for each product
  const productCards = products
    .map((item) => {
      return `
          
          <div  class="cards">
            <!-- Product Image -->
            <img src="${item.img}"/>
  
            <!-- Product Name and Title -->
            <div class="blog-title">
              <label class="name-pro">${item.name} <span>${item.variant}GB</span></label>
              <div class="price">
                <label>${item.price}$</label>
                <label class="dis-price">${item.discountPrice}$</label>
              </div>
            </div>
  
            <!-- Free Offers -->
            <div class="plus_free">
              <div class="blog_plus">
                <label>${item.freeOffer ?? ""}</label>
              </div>
            </div>
  
            <!-- Order Button -->
            <div class="btn_order">
              <button onclick="orderProduct('${item.id}')">Order</button>
            </div>
          </div>
        
        `;
    })
    .join(""); // Join all the product cards into a single string

  // Append the generated cards to the container
  container.innerHTML = productCards;
};

// Function to handle the "Order" button click
const orderProduct = (id) => {
  alert(`You have ordered ID: ${id}`);
};

// Call the function to display products when the page loads
window.onload = displayProducts;
