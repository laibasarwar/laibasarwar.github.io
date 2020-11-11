let nextButton = document.querySelector("button.next");
nextButton.addEventListener('click', next);


let theBody = document.querySelector('body');
var myImage = document.querySelector("#mainImage");;
let theTxt = document.querySelector('h2');

theTxt.addEventListener('mouseover', mouseOver);
theTxt.addEventListener('mouseout', mouseOut);
// let theImg = document.querySelector('img');

let imageArray = ["main.jpg","education.jpg","mirror.jpg","visual.jpg"];

let textArray = [,
                "The one thing that stood out to me was the quote that states, 'Today's child is growing up absurd, because he lives in two worlds, and neither of them inclines him to grow up. Growing up - that is our new work, and it is total. Mere instruction will not suffice'. I liked that the author pointed this out because it makes sense, and I never thought of it before. I always thought that we live in two worlds, in regards to growing up in mixed cultures, but I did not think it applied to the world and technology as a whole. Since the author is referring to the news and how children react to everything around them, which leads to no them no longer being able to just be children.",
                "Another part of the book that I loved is this page with the mirrored text. I never really saw this in a book, so I was immediately intrigued by it. When I did hold it against the mirror, I had to read it twice, since it is a bit comfusing. However, when I did understand the quote, I agree with the quote in a way. The quote basically states that each practice is seperate from another, which means it is normal to not combine two drastically different practices like being a mechanical engineer but also interested in film. The professions are not known to fit together, which is why they are seperate. However, I believe that they can come together and have the engineer film their work. ",
                "This page also caught my eye since the text in the image is a bit like Urdu, which I thought was interesting. I also liked the comments along the image, since it made me agree with the argument. The paragraph is basically saying that people are more comfortable when they can see. At first, I thought that it was a pretty universal and simple argument, but when I thought more of it, I remembered times when I would be uncomfortable with the dark or books that I don't understand, which supports the authors' argument."]

let i = 0;
var imageIndex = 1; 

theTxt.textContent = textArray[i];
// theImg.imgContent = imgArray[i];

function next(){
    theBody.style.backgroundColor = '#F0CFFF';


    if (i < textArray.length - 1){
        i = i+1;
    } else {
        i = 0;
    }
    
    theTxt.textContent = textArray[i];

    // if (i < imageArray.length - 1){
    //     i = i+1;
    // } else {
    //     i = 0;
    // }
    // theImg.imgContent = imageArray[i];

    myImage.setAttribute("src",imageArray[imageIndex]);
    imageIndex = (imageIndex + 1) % imageArray.length;
}

function mouseOver() {
    document.querySelector("h2").style.color = "#87994E";
    document.querySelector("h1").style.color = "#87994E";
}
  
function mouseOut() {
    document.querySelector("h2").style.color = "black";
    document.querySelector("h1").style.color = "black";
}
// document.querySelector('h2').textContent = "Overall, the book is interesting, and has a lot of good ideas. However, the one thing that stood out to me was the quote that states, 'Today's child is growing up absurd, because he lives in two worlds, and neither of them inclines him to grow up. Growing up - that is our new work, and it is total. Mere instruction will not suffice'. I liked that the author pointed this out because it makes sense, and I never thought of it before. I always thought that we live in two worlds, in regards to growing up in mixed cultures, but I did not think it applied to the world and technology as a whole. Since the author is referring to the news and how children react to everything around them, which leads to no them no longer being able to just be children.";