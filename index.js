
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

const addFruit = document.querySelector('#fruList');
if(addFruit){
    const fruitAdded = document.createElement('li');
    fruitAdded.textContent = 'Pineapple';
    addFruit.appendChild(fruitAdded);

};
const fruitImages = {
    "Mangoes":"image/Does eating mango increase uric acid levels_.jpeg",
    "Banana":  "image/The Best Banana Pudding Recipe You'll Ever Find - Southern Love.jpeg",
    "Watermelon":"image/How to Cut a Watermelon (the Easy Way!).jpeg",
    "Pineapple" :"image/Pineapple Fruit White Transparent, Pineapple Fruit Pineapple, Pineapple Clipart, Pineapple, Fruit PNG Image For Free Download.jpeg"
}
document.querySelectorAll("#fruList li").forEach(li => {
    const fruitName = li.firstChild.textContent.trim();
    if (fruitImages[fruitName]) {
      const img = document.createElement("img");
      img.src = fruitImages[fruitName];
      img.alt = fruitName;
      img.className = "fruit-image";
      li.appendChild(img);
    }
  });
  const img = document.createElement('img');

//Question5

const addVegetables = document.querySelector('#vegList');
if(addVegetables){
    const vegetableAdded = document.createElement('li');
    vegetableAdded.textContent = 'Eggplant'
    addVegetables.appendChild(vegetableAdded)

};
