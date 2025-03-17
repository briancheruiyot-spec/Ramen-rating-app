const ramens = [
  { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "~/images/shoyu.jpg", rating: 5, comment: "Delicious!" },
  { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "~/images/miso.jpg", rating: 4, comment: "Very flavorful!" },
  { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "~/images/tonkotsu.jpg" }
];

function displayRamens() {
  const ramenMenu = document.getElementById("ramen-menu");
  ramens.forEach(ramen => {
    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    img.addEventListener("click", () => handleClick(ramen));
    ramenMenu.appendChild(img);
  });
}

