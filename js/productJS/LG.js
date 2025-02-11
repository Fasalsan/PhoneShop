// Array of product objects
const products = [
    {
        id: 1,
        name: "LG V30",
        variant: "256GB",
        price: 129,
        discountPrice: 150,
        freeOffer: "Free (Cash & Screen)",
        img: "https://www.lg.com/us/images/cell-phones/md05885437/md05885437-450x450.jpg",
    },
    {
        id: 2,
        name: "LG Wing 5G",
        variant: "64GB",
        price: 110,
        discountPrice: 120,
        freeOffer: "Promotion",
        img: "https://refurbzoo.ae/cdn/shop/products/Untitleddesign-2023-04-21T212251.177.png?v=1682092591&width=1946",
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
        name: "Google Pixel 8",
        variant: "128GB",
        price: 999,
        discountPrice: 1099,
        // freeOffer: "Free (Headphones)",
        img: "https://econtent.o2.co.uk/o/econtent/media/get/a3c54853-0907-43dd-82a3-c0db7606c7fb",
    },
    {
        id: 7,
        name: "Google Pixel 8",
        variant: "128GB",
        price: 999,
        discountPrice: 1099,
        // freeOffer: "Free (Headphones)",
        img: "https://econtent.o2.co.uk/o/econtent/media/get/a3c54853-0907-43dd-82a3-c0db7606c7fb",
    },
    {
        id: 8,
        name: "hello",
        variant: "128GB",
        price: 999,
        discountPrice: 1099,
        // freeOffer: "Free (Headphones)",
        img: "https://econtent.o2.co.uk/o/econtent/media/get/a3c54853-0907-43dd-82a3-c0db7606c7fb",
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
              <label class="name-pro">${item.name} <span>${item.variant}</span></label>
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
