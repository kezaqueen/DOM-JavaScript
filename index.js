
//Question 1

document.body.style.backgroundColor= 'silver'
//Question 2

document.getElementById('title').style.color = 'green'

//Question 3

const header3 = document.querySelectorAll('h3');

header3.forEach(header=>{
   header.style.textTransform = 'uppercase'
   header.style.fontSize = '31px'
   header.style.fontWeight= 'bold'
});

//Question4

const addFruit = document.getElementById('fruList');
if(addFruit){
    const fruitAdded = document.createElement('li');
    fruitAdded.textContent = 'Pineapple';
    addFruit.style.display="flex";
    addFruit.style.justifyContent="space-between";
    addFruit.appendChild(fruitAdded);

};
const fruitImages = {
    "Mangoes":"image/real mangoes.jpg",
    "Bananas":  "image/real bananas.jpeg",
    "Water Melons":"image/How to Cut a Watermelon (the Easy Way!).jpeg",
    "Pineapple" :"image/realpineapple.jpg"
}
document.querySelectorAll("#fruList li").forEach(li => {
    const fruitName = li.firstChild.textContent.trim();
    if (fruitImages[fruitName]) {
      const img = document.createElement("img");
      img.src = fruitImages[fruitName];
      img.alt = fruitName;
      img.className = "fruit-images";
      li.appendChild(img);
    }
  });
  const img = document.createElement('img');

//Question5

const addVegetables = document.querySelector('#vegList');
if(addVegetables){
    const vegetableAdded = document.createElement('li');
    vegetableAdded.textContent = 'Eggplant'
    addVegetables.style.display="flex";
    addVegetables.style.justifyContent="space-between";
    addVegetables.appendChild(vegetableAdded)

};
const veggieImages = {
    "Onions":"image/realonions.jpeg",
    "Tomatoes":  "image/realtomatoes.jpg",
    "Kales":"image/realkales (copy).jpg",
    "Eggplant" :"image/aubergine 👍.jpeg"
}
document.querySelectorAll("#vegList li").forEach(li => {
    const veggieName = li.firstChild.textContent.trim();
    if (veggieImages[veggieName]) {
      const img = document.createElement("img");
      img.src = veggieImages[veggieName];
      img.alt = veggieName;
      img.className = "veggie-images";
      li.appendChild(img);
    }
  });
  const clickButton = document.getElementById("click-button");

clickButton.addEventListener("click",()=>{
    clickButton.style.backgroundColor = "orange";

});


