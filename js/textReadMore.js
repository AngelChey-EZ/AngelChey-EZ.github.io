
/* 
   Author: Angel Chey Ee Zia
   Date: 2 Aug 2022 
 
   Filename: textReadMore.js     

   Use to hide or show text when button is pressed
*/
function showMoreShowLess(dot, moreText, btnText) {
	var dots = document.getElementById(dot);
	var moreText = document.getElementById(moreText);
	var btnText = document.getElementById(btnText);

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more";
		moreText.style.display = "none";

	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less";
		moreText.style.display = "inline";
	}
}