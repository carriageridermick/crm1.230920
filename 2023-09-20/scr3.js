const htmlUFV = document.getElementById("usersfavoritethings");//htmlUFV = html UserFavoriteThings
let uFav = prompt(`Please enter your favorite things (seperate them with commas):`) //uFav = userFavorite 
let array = uFav.split(",");

array.forEach((element, index) =>
    array[index] = element.trim()
); //trims out whitespace for clean displaying after


const startingStr = document.createElement("p");
const startingStrInner = document.createTextNode("Your favorite things are listed here:");
startingStr.appendChild(startingStrInner);
htmlUFV.appendChild(startingStr);
//adds title to html


array.forEach((element) => {
    const dynamic = document.createElement("div");
    dynamic.setAttribute("class", "ufvElements");
    //generates div container element

    const dynamicStr = document.createElement("p");
    const dynamicStrInner = document.createTextNode(element);
    dynamicStr.appendChild(dynamicStrInner);
    //generates text

    const dynamicImg = document.createElement("img");
    const dynamicImgInner = `https://picsum.photos/seed/${element}/75/75`;
    dynamicImg.setAttribute("src", dynamicImgInner);
    dynamicImg.setAttribute("width", "50");
    dynamicImg.setAttribute("height", "50");
    //generates random image

    dynamic.appendChild(dynamicStr);
    dynamic.appendChild(dynamicImg);
    //appends generated image and text to the container element

    htmlUFV.appendChild(dynamic);
    //appends container element to html element
}); //for each array element, add an html div element which contains user's favorite things laid out neatly :)