// JavaScript Document
/*eslint-disable*/

$(document).ready(function () {
		$(".reveal").hide();
		$(".answer").click(function () {
		$(this).parent().next().toggle();
		}); 
		});
function directToEventPage() {
	window.location.href = "event.html";
}

function directToGalleryPage() {
	window.location.href = "gallery.html";
}

function directToLibraryPage() {
	window.location.href = "gallery.html";
}

function directToAboutPage(){
	window.location.href= "about.html";
}

function fqa() {
	document.getElementById("submit").innerHTML = "Thank you. Your question has been received. We will post the answer within 5 days on this page. ";
}
