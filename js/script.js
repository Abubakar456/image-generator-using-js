function generateImage(){
    var catWrapper = document.getElementById('img-wrapper');
    var image = document.createElement('img');
    image.setAttribute('src','./images/cat-img.gif');
    catWrapper.appendChild(image);
} 