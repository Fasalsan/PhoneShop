// Array of item objects
const item2 = [
  {
    id: 1,
    name: "SAN_FASAL",
    position: "Developer",
    studying: "Studying at RUPP",
    img: "/Fasal.JPG"
  },
  {
    id: 1,
    name: "SAN_FASAL",
    position: "Developer",
    studying: "Studying at RUPP",
    img: "/Fasal.JPG"
  },
  {
    id: 1,
    name: "SAN_FASAL",
    position: "Developer",
    studying: "Studying at RUPP",
    img: "/Fasal.JPG"
  },
  {
    id: 1,
    name: "SAN_FASAL",
    position: "Developer",
    studying: "Studying at RUPP",
    img: "/Fasal.JPG"
  },
];

// Function to generate and display items
const displayItems = () => {
  // Select the container where items will be added
  const contentContainer = document.getElementById("data");

  // Clear container (in case of re-rendering)
  contentContainer.innerHTML = "";

  // Loop through each item in the array
  item2.forEach(item => {
    // Create a new div for the item
    const itemBox = document.createElement("div");
    itemBox.classList.add("item-box");

    // Add HTML content to the div
    itemBox.innerHTML = `
     
<div class="card-group">

             <div class="card">
      <div class="card-img">
           <img src="${item.img}" alt="${item.name}">
      </div>
      <div class="card-label">
        <h4>${item.name}</h4>
        <p>${item.position}</p>
        <label>${item.studying}</label>
      </div>
      <div class="card-icons">
        <a href="https://github.com/Fasalsan">
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.facebook.com/share/FxSBqokAVWHfYV73/?mibextid=LQQJ4d"
        >
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="https://t.me/sunbona">
          <i class="fa-brands fa-telegram"></i>
        </a>
      </div>
    </div>
      </div>
        `;

    // Append the item to the container
    contentContainer.appendChild(itemBox);
  });
};

// Call the function to display items when the page loads
window.onload = displayItems;
