let starter = document.getElementById("starter");

let imgArray = new Array
('assets/Images/Asset20.png',
 'assets/Images/Asset21.png',
 'assets/Images/Asset22.png',
 'assets/Images/Asset23.png',
 'assets/Images/Asset24.png',
 'assets/Images/Asset25.png',
 'assets/Images/Asset26.png',
 'assets/Images/Asset27.png');
let count = 0;

function animate() {
  starter.src = imgArray[count];
  count++;
  if (imgArray.length == count) {
    count = 0;
  }
}

setInterval(animate, 100)
