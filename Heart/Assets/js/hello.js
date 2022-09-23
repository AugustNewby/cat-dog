let starter = document.getElementById("starter");

let imgArray = new Array
('Assets/Images/Asset20.png',
 'Assets/Images/Asset21.png',
 'Assets/Images/Asset22.png',
 'Assets/Images/Asset23.png',
 'Assets/Images/Asset24.png',
 'Assets/Images/Asset25.png',
 'Assets/Images/Asset26.png',
 'Assets/Images/Asset27.png');
let count = 0;

function animate() {
  starter.src = imgArray[count];
  count++;
  if (imgArray.length == count) {
    count = 0;
  }
}

setInterval(animate, 100)
