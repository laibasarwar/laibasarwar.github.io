var currentPage = 0;

$('.book')
.on('click', '.active', nextPage)
.on('click', '.flipped', prevPage);

$('.book').hammer().on("swipeleft", nextPage);
$('.book').hammer().on("swiperight", prevPage);

function prevPage() {
  
  $('.flipped')
    .last()
    .removeClass('flipped')
    .addClass('active')
    .siblings('.page')
    .removeClass('active');
}
function nextPage() {
  
  $('.active')
    .removeClass('active')
    .addClass('flipped')
    .next('.page')
    .addClass('active')
    .siblings();
    
    
}

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  // set up text to print, each item in array is new line
var aText = new Array(
  "My mother tells me this in the mornings over FaceTime, brow furrowed,",
  "washing all the dishes. Sometimes, her voice breaks.",
  "",
  "She says I shouldn't be living alone, with no one to care for me when I get into one of my moods, or have a cold. It gets dark, too, so early, she says.",
  "",
  "You're getting older, and there are such few boys.",
  "",
  "* * *",
  "",
  "Ammi, you've always been so soft. Smiling wide and almost smacking your lips when you tell me stories of the prophets, of how God graced them, how evil was undone.",
  "",
  "In Greenwich Village there are satans, you say. Men who practice witchcraft and mix alcohol into your water.",
  "",
  "There was a night when we could not find you, and I knew someone had tied knots in your hair. It was so cold that night, and we found you at last in Roosevelt Island, dancing on the rocks. You laughed and laughed, said you would feed all the fish in the river. Who, now, will marry you?",
  "",
  "You're getting older, and there are such few boys.",
  "",
  "- Adeeba Shahid Talukder",
  );

  var bText = new Array(
    "The bombs were falling down",
    "and they were too loud",
    "The kids covered their ears",
    "and tried to get around",
    "",
    "The little girl raced home in confusion and despair",
    "She flung the front door open,",
    "only to see that her mother was not there",
    "",
    "She looked at the table and there were the plates",
    "Just like her mom left it,",
    "the dinner patiently waits",
    "",
    "But nobody in her family would live to know the taste",
    "Her home was in flames,",
    "and she was too late",
    "",
    "- Rida Ali",
  )

  var iSpeed1 = 100; // time delay of print out
  var iIndex1 = 0; // start printing array at this posision
  var iArrLength1 = aText[0].length; // the length of the text array
  var iScrollAt1 = 20; // start scrolling up at this many lines
   
  var iTextPos1 = 0; // initialise text position
  var sContents1 = ''; // initialise contents variable
  var iRow1; // initialise current row
   
  function typewriter()
  {
   sContents1 =  ' ';
   iRow1 = Math.max(0, iIndex1-iScrollAt1);
   var destination1 = document.getElementById("typedtext1");
   
   while ( iRow1 < iIndex1 ) {
    sContents1 += aText[iRow1++] + '<br />';
   }
   destination1.innerHTML = sContents1 + aText[iIndex1].substring(0, iTextPos1) + "|";
   if ( iTextPos1++ == iArrLength1 ) {
    iTextPos1 = 0;
    iIndex1++;
    if ( iIndex1 != aText.length ) {
     iArrLength1 = aText[iIndex1].length;
     setTimeout("typewriter()", 700);
    }
   } else {
    setTimeout("typewriter()", iSpeed);
   }
  }
  
  
  typewriter();

  var iSpeed = 100; // time delay of print out
  var iIndex = 0; // start printing array at this posision
  var iArrLength = bText[0].length; // the length of the text array
  var iScrollAt = 20; // start scrolling up at this many lines
   
  var iTextPos = 0; // initialise text position
  var sContents = ''; // initialise contents variable
  var iRow; // initialise current row
   
  function typewriter2()
  {
   sContents =  ' ';
   iRow = Math.max(0, iIndex-iScrollAt);
   var destination2 = document.getElementById("typedtext2");
   
   while ( iRow < iIndex ) {
    sContents += bText[iRow++] + '<br />';
   }
   destination2.innerHTML = sContents + bText[iIndex].substring(0, iTextPos) + "|";
   if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != bText.length ) {
     iArrLength = bText[iIndex].length;
     setTimeout("typewriter2()", 500);
    }
   } else {
    setTimeout("typewriter2()", iSpeed);
   }
  }
  
  
  typewriter2();