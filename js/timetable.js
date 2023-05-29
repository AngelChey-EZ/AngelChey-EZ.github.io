"use strict";

/* 
   Author: Angel Chey Ee Zia
   Date: 2 Aug 2022 
 
   Filename: timetable.js     

   Use to create timetable
*/

//create nested array to store content on each day
var day = new Array(['Sun'], ['Mon'], ['Tue'], ['Wed'], ['Thur'], ['Fri'],['Sat']);
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//weekend
day[0].push('<td colspan="20"> !!! No School Day !!!</td>');
day[6].push('<td colspan="20"> !!! No School Day !!!</td>');

// monday
day[1].push('<td colspan="11">&#8212;</td>');
day[1].push('<td class="lesson" colspan="4">Education & Carerr Guidance <br> ECG </td>');
day[1].push('<td>&#8212;</td>');
day[1].push('<td class="lesson"  colspan="4">Sports for Life <br> Tennis</td>');
//tuesday
day[2].push('<td>&#8212;</td>');
day[2].push('<td class="lesson"  colspan="3">Math</td>');
day[2].push('<td class="lesson"  colspan="4">Foundamental of Computing <br> FOC </td>');
day[2].push('<td colspan="4">&#8212;</td>');
day[2].push('<td class="lesson"  colspan="5">Front-End Web Development <br> FED </td>');
day[2].push('<td colspan="3">&#8212;</td>');
//wednesday
day[3].push('<td colspan="8">&#8212;</td>');
day[3].push('<td class="lesson"  colspan="6">Foundamential of Programming <br> FOP </td>');
day[3].push('<td colspan="6">&#8212;</td>');
//thursday
day[4].push('<td class="lesson"  colspan="4">Critical and Analytical Thinking <br> CAT </td>');
day[4].push('<td class="lesson"  colspan="4">Foundamental of Computing <br> FOC </td>');
day[4].push('<td colspan="2">&#8212;</td>');
day[4].push('<td class="lesson"  colspan="3">Math</td>');
day[4].push('<td>&#8212;</td>');
day[4].push('<td class="lesson"  colspan="4">Communicating for Project Effectiveness <br> CPR </td>');
day[4].push('<td colspan="2">&#8212;</td>');
//friday
day[5].push('<td colspan="3">&#8212;</td>');
day[5].push('<td class="lesson"  colspan="5">Front-End Web Development <br> FED </td>');
day[5].push('<td colspan="4">&#8212;</td>');
day[5].push('<td class="lesson"  colspan="6">Foundamential of Programming <br> FOP </td>');
day[5].push('<td colspan="2">&#8212;</td>');

// --------------------------------------------------------------------------------------------------------------

var today = new Date();

document.getElementById("timetable").innerHTML = createtimetable(today);

function createtimetable(today) {
    var timetableHTML = "<table id='time_table' class='table table-hover justify-content-center'>";
    timetableHTML += tableHead();
    timetableHTML += timeSlot();
    timetableHTML += fillInContent(today);
    timetableHTML += tableFooter(today);
    timetableHTML += "</table>";
    return timetableHTML;
}

//table head
function tableHead() {
    var caphtml = '<caption ">My Timetable</caption> <colgroup> <col id="dayCol"> <col class="timeCol" span="20"> </colgroup>';
    return caphtml;
}

//creating time slots
function timeSlot(){
    var rowHTML = "<thead><tr>";
    rowHTML += "<th></th>";
    // Loop through the dayName array
    for (var i = 8; i < 18; i++) {
        var v = i + 1;
        rowHTML += "<th colspan='2'>" + i +".00- <br>" + v + ".00" + "</th>";
    }
    rowHTML += "</tr></thead>";
    return rowHTML;
}

//fill in content
function fillInContent(today){
    var content = "<tbody>";
    var highlightDay = today.getDay();
    //number of days in a week and fill in day
    for (var i = 0; i < day.length; i++){

        //highlight today's timetable
        if (highlightDay === i){
        content += "<tr id='today'>";
        }
        else{content += "<tr>";}

        content +="<th>" + day[i][0] + "</th>";
        //fill in content
        for (var x = 1; x < day[i].length; x++){
            content += day[i][x];
        }
        content += "</tr>";
    }
    content += "</tbody>"
    return content;
}

//table footer
function tableFooter(today){
    //get today's date
    var todayDate = today.getDate() + " " + month[today.getMonth()] + " " + today.getFullYear() + ", ";
    var foot = "<tfoot><tr>"
    foot += '<td colspan="7">Class DAAA/FT/1A/02, Year 1 Semester 1, 2022</td>';
    foot += '<td colspan="14"> Today is ' + todayDate + day[today.getDay()][0] + ".</td>";
    foot += '</tr></tfoot>';
    return foot;
}


