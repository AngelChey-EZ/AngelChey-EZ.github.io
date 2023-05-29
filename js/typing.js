"use strict";

/* 
   Author: Angel Chey Ee Zia
   Date: 2 Aug 2022 
 
   Filename:   typing.js     

   Use to create typing effect as greeting visitors
*/

// different greeting for different timing
var greet = [
    " Hey! Look at the time now, you should be on bed having a sweet dream. Its not a healthy practise to be awake at this timing. ",
    " Good morning early bird, remember to have a good breakfast to kick-start a wonderful day! ",
    " Good morning! Hope that you have have taken your breakfast. Wish you to have a great day! ",
    " Good afternoon! Have you taken your lunch?",
    " Good afternoon! Its a great time for afternoon tea! Hope that you are not working since morning. If you do, maybe its time to have a tea time or take a nap to rest for a while. ",
    " Good evening! Its almost time to end work! Congratulation for your hardwork today! ",
    " Good evening! Its dinner time! Hope that you have enjoyed your dinner! Its also a good time to have some family bounding. ",
    " Hey! Its bedtime! Don't stay up for too late, its not good for your health. Hope that you have a fruitful day and have a good night! "
];


//function 
//diaplay current time
function displayClock() {
    var currentDay = new Date();
    var timeStr = currentDay.toLocaleTimeString();
    document.getElementById("runclock").innerHTML = "The time now is " + timeStr + ".";
    return timeStr;

}
displayClock();
setInterval("displayClock()", 1000);

//base on current time, decide which greeting to use
function greeting() {
    var currentDay = new Date();
    var timeStr = currentDay.toLocaleTimeString();
    var greeting;

    //seperate hr, min and sec
    var timing = timeStr.split(":");

    //seperate sec and AM/PM to identify morning or afternoon
    var x = timing[2].split(" ");

    //remove (sec AM/PM), add sec and AM/PM seperately into arr
    timing.pop();
    timing.push(x[0]);
    timing.push(x[1]);

    //change hr to int use to compare different timing of the day
    var hr = parseInt(timing[0]);

    //Base on current time, output different greeting
    switch (true) {
        // morning 12am - 4:59:59am
        case ((timing[3] == "AM") && (hr == 12 || (hr > 0 && hr < 5))):
            greeting = greet[0];
            break;

        //morning 5am - 9:59:59am
        case ((timing[3] == "AM") && (hr > 4 && hr < 10)):
            greeting = greet[1];
            break;

        //morning 10am - 11:59:59am
        case ((timing[3] == "AM") && (hr > 9 && hr < 12)):
            greeting = greet[2];
            break;

        //afternoon 12pm - 2:59:59pm
        case ((timing[3] == "PM") && (hr == 12 || (hr > 0 && hr < 3))):
            greeting = greet[3];
            break;

        //afternoon 3pm - 4:59:59pm
        case ((timing[3] == "PM") && (hr > 2 && hr < 5)):
            greeting = greet[4];
            break;

        //evening 5pm - 6:59:59pm
        case ((timing[3] == "PM") && (hr > 4 && hr < 7)):
            greeting = greet[5];
            break;

        //evening 7pm - 8:59:59pm
        case ((timing[3] == "PM") && (hr > 6 && hr < 9)):
            greeting = greet[6];
            break;

        //night 9pm - 11:59:59pm
        case ((timing[3] == "PM") && (hr > 8 && hr < 12)):
            greeting = greet[7];
            break;
    }
    return greeting
}


var i = 0;
var typing = [];
var speed = 30;
var delateTxt = false;

//create typing effect by letting the characters appear/dissappear one by one
function typeWriter() {

    // typing text will be current time greeting text
    var txt = greeting();
    document.getElementById("typewrite").innerHTML = typing.join('');

    //typing text when text length is not full length and delate is flase
    if (i < txt.length && !delateTxt) {
        speed = 30;    //reset back to normal speed when typing again
        typing.push(txt[i])
        i++;
    }

    //delating text when delate is true and and text 
    //leng is equal or less then full length
    if (delateTxt && i <= txt.length) {
        speed = 30;    //reset back to normal speed when deleting again
        typing.pop(txt[i])
        i--;
    }

    // when text reach its full length, delate become true
    if (i == txt.length) {
        delateTxt = true;
        speed = 1000;   // when typing is done, pause for while
    }

    //when delate is true and no text left(delate finish), 
    //turn delate back to false
    if (delateTxt && i === 0) {
        delateTxt = false;
        speed = 1000;   //when deleting is done, pause for a while
        i = 0;
        txt = greeting();
    }

    setTimeout(typeWriter, speed);
}
window.onload = typeWriter();















