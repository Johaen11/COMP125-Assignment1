/* main JavaScript file */
/*File Name: app.js
* Author's Name: Johaen Gnanakumar
* Website's Name:
* File Description:This is where the javascipt functions are applied
*/
// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";
     // define an array of HTML elements
    var paragraphElements = [];
    
    paragraphElements[0] = document.getElementById("paragraphOne");
    paragraphElements[1] = document.getElementById("paragraphTwo");
    paragraphElements[2] = document.getElementById("paragraphThree");
     paragraphElements[3] = document.getElementById("paragraphFour");
    // define your paragraphs array;
    var paragraphs = [];
    
    // data for my pages
    paragraphs[0] = "My name is Johaen Gnanakumar. I am currently a student in centennial college for software Engineerin Technician. My mission is to complete my diploma and to be good at programming. After college, i would like to attend a university to further my studies in software.   ";
    paragraphs[1] = "This is a song that i worked on with fasecity and its a electronic mix of Justice Tribute";
    paragraphs[2] = "This is a video that i edited using wevideo.com. Warning: Explicit Language";
    paragraphs[3] = "A project that i am starting is making a business website for an Avon Employee. Website hasn't been made yet";
    
    
    // check to see if paragraph one exists
    for (var index = 0; index < paragraphElements.length; index++) { 
        if(paragraphElements[index]) { 
         paragraphElements[index].textContent = paragraphs[index]; 

        }
    }
    
    
})();