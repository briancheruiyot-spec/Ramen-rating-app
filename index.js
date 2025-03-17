const ramens = [
  { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
  { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "images/kojiro.jpg", rating: 4, comment: "Very flavorful!" },
  { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "images/naruto.jpg" }
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

function handleClick(ramen) {
  const detailImage = document.getElementById("detail-image");
  const detailName = document.getElementById("detail-name");
  const detailRestaurant = document.getElementById("detail-restaurant");
  const detailRating = document.getElementById("detail-rating");
  const detailComment = document.getElementById("detail-comment");

  detailImage.src = ramen.image;
  detailImage.alt = ramen.name;
  detailName.textContent = ramen.name;
  detailRestaurant.textContent = ramen.restaurant;
  detailRating.textContent = `Rating: ${ramen.rating}`;
  detailComment.textContent = `Comment: ${ramen.comment}`;
  detailImage.style.display = 'block'
}

function addSubmitListener() {
  const form = document.getElementById("new-ramen");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newRamen = {
      id: ramens.length + 1,
      name: e.target.name.value,
      restaurant: e.target.restaurant.value,
      image: e.target.image.value,
      rating: parseFloat(e.target.rating.value),
      comment: e.target.comment.value
    };
    ramens.push(newRamen);
    const ramenMenu = document.getElementById("ramen-menu");
    const img = document.createElement("img");
    img.src = newRamen.image;
    img.alt = newRamen.name;
    img.addEventListener("click", () => handleClick(newRamen));
    ramenMenu.appendChild(img);
    form.reset();
  });
}

function main() {
  displayRamens();
  addSubmitListener();
}
document.addEventListener("DOMContentLoaded", main);
