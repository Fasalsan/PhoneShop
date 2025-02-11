// Array of product objects

const products = [
    {
        id: 1,
        name: "Tecno Spark 20 ",
        variant: "256GB",
        price: 129,
        discountPrice: 150,
        freeOffer: "Free (Cash & Screen)",
        // img: "https://d3fyizz0b46qgr.cloudfront.net/global/phones/camon30/30premier/800/20231034.png",
        img:"../../imgProduct/apple/Phone12.webp"
    },
    {
        id: 2,
        name: "Tecno Spark 10c ",
        variant: "64GB",
        price: 110,
        discountPrice: 120,
        freeOffer: "Free (Case & Charger)",
        img: "https://d3fyizz0b46qgr.cloudfront.net/global/phones/spark10c/green.png",
    },
    {
        id: 3,
        name: "Tecno Pova 6",
        variant: "256GB",
        price: 229,
        discountPrice: 240,
        // freeOffer: "Free (Headphones)",
        img: "https://angkormeas.com/wp-content/uploads/2024/04/Untitled-1-1.jpg?v=1720452869",
    },
    {
        id: 4,
        name: "TECNO Camon 19",
        variant: "256GB",
        price: 300,
        discountPrice: 330,
        // freeOffer: "Free (Headphones)",
        img: "https://m.media-amazon.com/images/I/71FxwWIc4YL.jpg",
    },
    {
        id: 5,
        name: "TECNO Camon 30",
        variant: "8GB",
        price: 288,
        discountPrice: 290,
        freeOffer: "Free (Headphones)",
        img: "https://www.electromart.com.gh/wp-content/uploads/2024/06/CAMON-30-5G.png",
    },
    {
        id: 6,
        name: "Tecno nova",
        variant: "128GB",
        price: 319,
        discountPrice: 349,
        // freeOffer: "Free (Headphones)",
        img: "https://d17hsy3v39kiux.cloudfront.net/bucket/storage/images/20230719/35604eae12521c4e1b67017c741e5575.jpg",
    },
    {
        id: 7,
        name: "TECNO SPARK",
        variant: "128GB",
        price: 225,
        discountPrice: 245,
        // freeOffer: "Free (Headphones)",
        img: "https://wmw-eshop-prod.s3.amazonaws.com/images/products/5098/larges/Tecno_Spark_20C_Gravity_Black.jpg?1712219134",
    },
    {
        id: 8,
        name: "Tecno ",
        variant: "128GB",
        price: 174,
        discountPrice: 199,
        // freeOffer: "Free (Headphones)",
        img: "https://www.mac.net.pk/wp-content/uploads/2020/06/1-2-300x300.png",
    },
];

// Function to display products dynamically
const displayProducts = () => {
    // Get the container element where cards will be appended
    const container = document.getElementById("productContainer");

    // Map through products array and create HTML structure for each product
    const productCards = products
        .map((product) => {
            return `
          <div class="cards">
            <!-- Product Image -->
            <img src="${product.img}" alt="${product.name} ${product.variant}" />
  
            <!-- Product Name and Title -->
            <div class="blog-title">
              <label class="name-pro">${product.name} <span>${product.variant}</span></label>
              <div class="price">
                <label>${product.price}$</label>
                <label class="dis-price">${product.discountPrice}$</label>
              </div>
            </div>
  
            <!-- Free Offers -->
            <div class="plus_free">
              <div class="blog_plus">
                <label>${product.freeOffer ?? ""}</label>
              </div>
            </div>
  
            <!-- Order Button -->
            <div class="btn_order">
              <button onclick="orderProduct('${product.name}')">Order</button>
            </div>
          </div>
        `;
        })
        .join(""); // Join all the product cards into a single string

    // Append the generated cards to the container
    container.innerHTML = productCards;
};

// Function to handle the "Order" button click
const orderProduct = (productName) => {
    alert(`You have ordered: ${productName}`);
};

// Call the function to display products when the page loads
window.onload = displayProducts;
