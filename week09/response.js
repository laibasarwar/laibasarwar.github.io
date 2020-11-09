let theBody = document.querySelector('body');
let theButton = document.querySelector("button");
let theTxt = document.querySelector('h2');
//
// triggering an event with a callback function
theButton.addEventListener('click', theContent);

function theContent(){
 theBody.style.backgroundColor = 'black';
 theBody.style.color = 'grey';
 document.querySelector('h2').textContent = "Overall, the book is interesting, and has a lot of good ideas. However, the one thing that stood out to me was the quote that states, 'Today's child is growing up absurd, because he lives in two worlds, and neither of them inclines him to grow up. Growing up - that is our new work, and it is total. Mere instruction will not suffice'. I liked that the author pointed this out because it makes sense, and I never thought of it before. I always thought that we live in two worlds, in regards to growing up in mixed cultures, but I did not think it applied to the world and technology as a whole. Since the author is referring to the news and how children react to everything around them, which leads to no them no longer being able to just be children.";
}