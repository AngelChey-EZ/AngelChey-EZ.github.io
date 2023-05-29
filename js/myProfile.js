/* 
   Author: Angel Chey Ee Zia
   Date: 2 Aug 2022 
 
   Filename: myProfile.js     

   Use to create my profile texts for first page at my info section
*/
var today = new Date();

// store my data
var me = {
    name: "Angel Chey Ee Zia",
    gender: "Female",
    birthday: new Date("02/22/2005"),
    school: "Singapore Polytechnic (School of Computing)",
    course:"Diploma in Applied AI and Analytics (DAAA)",

    //calculate my age base on my birthday and present year
    calAge: function(){
        return (today.getFullYear() - this.birthday.getFullYear());
    } 
}

//function to write profile
function myProfile(){
    var profile = "Name: " + me.name + " <br><br>";
    profile += "Gender: " + me.gender + " <br><br>"; 
    profile += "Age: " + me.calAge() + " (born in 2005) <br><br>";
    profile += "School: " + me.school + " <br><br>";
    profile += "Course: " + me.course + " <br><br>";
    return profile;
}
document.getElementById("myProfile").innerHTML = myProfile();
