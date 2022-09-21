
let modal = document.getElementById('myModal');
let images = document.querySelectorAll('.images');

let imageBox = document.getElementById('modalIMG');

for(let i = 0; i < images.length; i++){
    // Iterate through each of the images
    let img = images[i];
    img.onclick = function(){
        modal.style.display = 'block';
        imageBox.src = this.src;
    }
};

let exit = document.getElementById("close");

exit.onclick = function() {
    modal.style.display = "none";
}