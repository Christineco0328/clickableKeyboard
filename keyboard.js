//Here are the variables that connect the elements in the html and carries them over the javascript

var c1 = document.getElementById("C1");
var d = document.getElementById("D");
var E = document.getElementById("E");
var f = document.getElementById("F");
var g = document.getElementById("G");
var a = document.getElementById("A");
var b = document.getElementById("B");
var c2 = document.getElementById("C2");
var notes = document.getElementById("notes");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var songTitle = document.getElementById("songTitle");



//global data; these are the variables that contain audio files of each note
var audioC1 = new Audio('203485__tesabob2001__c5.mp3');
var audioD = new Audio('203473__tesabob2001__d5.mp3');
var audioE = new Audio('203476__tesabob2001__e5.mp3');
var audioF = new Audio('203489__tesabob2001__f5.mp3');
var audioG = new Audio('203495__tesabob2001__g5.mp3');
var audioA = new Audio('203464__tesabob2001__a5.mp3');
var audioB = new Audio('203467__tesabob2001__b5.mp3');
var audioC2 = new Audio('203484__tesabob2001__c6.mp3');

//this is the add event listener that allows the program to react to when a key on the keyboard is pressed; it associates the audio file with a set key on the keyboard using its keycode. If true, it will play the first "C" audio file
document.addEventListener("keydown", function(e) {
    if (e.keyCode === 65) {
        audioC1.play();
//This part of the code controls the css that is changed when a key is press on the keyboard
        c1.style.backgroundColor = "#33ccff";
        c1.style.color = "white";
        c1.style.transform = "scale(.85,.85)";
//The timeout method tells the program to revert back to the css of the element in mainstyle after a set amount of time. Because the quotation marks are empty, the program looks to mainstyle to find what the css for the element should look like 
        setTimeout(function() {
            c1.style.backgroundColor = "";
            c1.style.color = "";
            c1.style.transform = "";
        }, 200);
    }
//If the last if statement is false, it will check to see if this key is pressed based on key code. If true it will play the audio file for the note "D"    
    if (e.keyCode === 83) {
        audioD.play();
//css that changes if the key pressed is "D"
        d.style.backgroundColor = "#00e600";
        d.style.color = "white";
        d.style.transform = "scale(.85,.85)";
//This method tells the function to go back to the default css in mainstyle after a set amount of time.
        setTimeout(function() {
            d.style.backgroundColor = "";
            d.style.color = "";
            d.style.transform = "";
        }, 200);
    }
//If this if statement is true, it will play the "E" audio file
    if (e.keyCode === 68) {
        audioE.play();
//css that changes when "E" is pressed
        E.style.backgroundColor = "#ffff00";
        E.style.color = "white";
        E.style.transform = "scale(.85,.85)";
//reverts code back to mainstyle        
        setTimeout(function() {
            E.style.backgroundColor = "";
            E.style.color = "";
            E.style.transform = "";
        }, 200);
    }
//If true, it will play the audio file for "F"
    if (e.keyCode === 70) {
        audioF.play();

        f.style.backgroundColor = "#ff6600";
        f.style.color = "white";
        f.style.transform = "scale(.85,.85)";
//reverts code back to mainstyle        

        setTimeout(function() {
            f.style.backgroundColor = "";
            f.style.color = "";
            f.style.transform = "";
        }, 200);
    }
//If true, it will play the audio file for "G"

    if (e.keyCode === 74) {
        audioG.play();

        g.style.backgroundColor = "#ff4d4d";
        g.style.color = "white";
        g.style.transform = "scale(.85,.85)";
//reverts code back to mainstyle        

        setTimeout(function() {
            g.style.backgroundColor = "";
            g.style.color = "";
            g.style.transform = "";
        }, 200);
    }
//If true, it will play the audio file for "A"

    if (e.keyCode === 75) {
        audioA.play();

        a.style.backgroundColor = "#e600ac";
        a.style.color = "white";
        a.style.transform = "scale(.85,.85)";
//reverts code back to mainstyle        

        setTimeout(function() {
            a.style.backgroundColor = "";
            a.style.color = "";
            a.style.transform = "";
        }, 200);
    }
//If true, it will play the audio file for "B"

    if (e.keyCode === 76) {
        audioB.play();

        b.style.backgroundColor = "#800080";
        b.style.color = "white";
        b.style.transform = "scale(.85,.85)";
//reverts code back to mainstyle        

        setTimeout(function() {
            b.style.backgroundColor = "";
            b.style.color = "";
            b.style.transform = "";
        }, 200);
    }
//If true, it will play the audio file for "C2"

    if (e.keyCode === 186) {
        audioC2.play();

        c2.style.backgroundColor = "#000099";
        c2.style.color = "white";
        c2.style.transform = "scale(.85,.85)";
//reverts code back to mainstyle        

        setTimeout(function() {
            c2.style.backgroundColor = "";
            c2.style.color = "";
            c2.style.transform = "";
        }, 200);
    }

});

c1.addEventListener("click", function() {
    audioC1.play();
});


d.addEventListener("click", function() {
    audioD.play();
});

E.addEventListener("click", function() {
    audioE.play();
});

f.addEventListener("click", function() {
    audioF.play();
});

g.addEventListener("click", function() {
    audioG.play();
});

a.addEventListener("click", function() {
    audioA.play();
});

b.addEventListener("click", function() {
    audioB.play();
});

c2.addEventListener("click", function() {
    audioC2.play();
});

//This part of the code controls the innerHTML of the two divs for the title of the song and the notes for the song when a button is pressed.
//Add event listener checks to see if button one is clicked; When button 1 is pressed, it will display the title "Twinkle Twinkle Little Star" and show the notes to play it in the bottom div
button1.addEventListener("click", function() {
//div for song title     
    songTitle.innerHTML = "<h1 style='font-size:30px'> Twinkle Twinkle Little Star </h1>";
    
//change in HTML for the div that displays the notes
    notes.innerHTML = " <p style='color:#33ccff'> C C</p> <p style='color:#ff4d4d'> G G </p> <p style='color:#e600ac'> A A </p> <p style='color:#ff4d4d'> G </p> <p style='color:#ff6600'> F F</p> <p style='color:#ffff00'> E E</p> <p style='color:#00e600'> D D</p><p style='color:#33ccff'> C </p> <br> <p style='color:#ff4d4d'> G G </p> <p style='color:#ff6600'> F F</p>  <p style='color:#ffff00'> E E</p> <p style='color:#00e600'> D </p> <br> <p style='color:#ff4d4d'> G G </p> <p style='color:#ff6600'> F F F</p> <p style='color:#ffff00'> E E</p> <p style='color:#00e600'> D </p> <br> <p style='color:#33ccff'> C C</p> <p style='color:#ff4d4d'> G G </p> <p style='color:#e600ac'> A A </p> <p style='color:#ff4d4d'> G </p> <p style='color:#ff6600'> F F</p> <p style='color:#ffff00'> E E</p> <p style='color:#00e600'> D D</p> <p style='color:#33ccff'> C </p>";

});

//add event listener listens for if the second button is pressed
button2.addEventListener("click", function() {
//if the button is pressed, the div for the song title will change to Mary Had a Little Lamb    
    songTitle.innerHTML = "<h1 style='font-size:30px'> Mary Had a Little Lamb </h1>";
//if the button is pressed, the div containing the notes will also change and display the notes for the song    
    notes.innerHTML = "<p style='color:#ffff00'> E </p> <p style='color:#00e600'> D</p> <p style='color:#33ccff'> C </p> <p style='color:#00e600'> D</p> <p style='color:#ffff00'> E E E </p> <br> <p style='color:#00e600'> D D D</p> <p style='color:#ffff00'> E </p> <p style='color:#ff4d4d'> G G </p> <br> <p style='color:#ffff00'> E </p> <p style='color:#00e600'> D</p>  <p style='color:#33ccff'> C </p> <p style='color:#00e600'> D</p> <p style='color:#ffff00'> E E E </p> <br> <p style='color:#ffff00'> E </p> <p style='color:#00e600'> D D </p> <p style='color:#ffff00'> E </p> <p style='color:#00e600'> D </p> <p style='color:#33ccff'> C </p>";
        
 
});
   
  
//add event listener checks to see if the third button is pressed 

button3.addEventListener("click", function() {
    // if the button is pressed, the song title div innerHTML will change to Happy Birthday to You
    songTitle.innerHTML = "<h1 style='font-size:30px'> Happy Birthday To You </h1>";
    // if the button is pressed, the notes div HTML will change to display the notes for Happy Birthday to You
    notes.innerHTML = "<p style='color:#33ccff'> C C </p> <p style='color:#00e600'> D </p> <p style='color:#33ccff'> C </p> <p style='color:#ff6600'> F </p> <p style='color:#ffff00'> E , </p> <p style='color:#33ccff'> C C </p> <p style='color:#00e600'> D </p> <p style='color:#33ccff'> C </p><p style='color:#ff4d4d'> G </p> <p style='color:#ff6600'> F </p> <br> <p style='color:#33ccff'> C C </p><p style='color:#000099'> C </p> <p style='color:#e600ac'> A </p> <p style='color:#ff6600'> F </p> <p style='color:#ffff00'> E </p> <p style='color:#00e600'> D </p> <br> <p style='color: #800080'> B B </p> <p style='color:#e600ac'> A </p> <p style='color:#ff6600'> F </p> <p style='color:#ff4d4d'> G </p> <p style='color:#ff6600'> F </p> <p style='color:#33ccff'> C C </p> <br> <p style='color:#33ccff'> C C </p> <p style='color:#00e600'> D </p> <p style='color:#33ccff'> C </p> <p style='color:#ff6600'> F </p> <p style='color:#ffff00'> E ,</p> <p style='color:#33ccff'> C C </p> <p style='color:#00e600'> D </p> <p style='color:#33ccff'> C </p><p style='color:#ff4d4d'> G </p> <p style='color:#ff6600'> F </p> <br> <p style='color:#33ccff'> C C </p><p style='color:#000099'> C </p> <p style='color:#e600ac'> A </p> <p style='color:#ff6600'> F </p> <p style='color:#ffff00'> E </p> <p style='color:#00e600'> D ,</p> <p style='color: #800080'> B B </p> <p style='color:#e600ac'> A </p> <p style='color:#ff6600'> F </p> <p style='color:#ff4d4d'> G </p> <p style='color:#ff6600'> F </p> ";


    });
    