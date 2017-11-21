$(document).ready(function(){
	setBindings();
	logoHome();
	onBasic();
	onStandard();
	onPremiun();
});

function setBindings() {
	$('nav li').click(function(e){
		e.preventDefault();
		var sectionID = e.currentTarget.id + "Section";	

		if ($(window).width() > 768) {
			$("html, body").animate({
				scrollTop: $("#" + sectionID).offset().top - $("nav").outerHeight() + "px"
			}, 1000);
		}
		else {
			$("html, body").animate({
				scrollTop: $("#" + sectionID).offset().top - 75 + "px"
			}, 1000);

			$("#menu-toggle").prop('checked', false);
		}
	});
}

function logoHome(){
	$('.logo img').click(function(e){
		$("html, body").animate({
			scrollTop: $("#homeSection").offset().top 
		}, 1000);
	})
}

function onBasic(){
	var svgContainer = document.querySelector("#basic");
	var svgContent = svgContainer.contentDocument; 
	var gear = svgContent.querySelector("#gear");

	$('.basic_ser').on({
		mouseenter: function() {
			TweenMax.to($(gear), 2, {rotation:45, transformOrigin: "50% 50%"})
		},
		mouseleave: function() {
			TweenMax.to($(gear), 2, {rotation:45, directionalRotation:"270_ccw",transformOrigin: "50% 50%"})
		}
	});

}

function onStandard(){
	var svgContainer = document.querySelector("#standard");
	var svgContent = svgContainer.contentDocument; 
	var lgear = svgContent.querySelector("#LargeGear");
	var mgear = svgContent.querySelector("#MedGear");
	var sgear = svgContent.querySelector("#smallGear");

	$('.standard_ser').on({
		mouseenter: function() {
			TweenMax.to($(lgear), 2, {rotation:45, transformOrigin: "50% 50%"});
			TweenMax.to($(mgear), 2, {rotation:45, transformOrigin: "50% 50%"});
			TweenMax.to($(sgear), 2, {rotation:45, transformOrigin: "50% 50%"});
		},
		mouseleave: function() {
			TweenMax.to($(lgear), 2, {rotation:45, directionalRotation:"270_ccw",transformOrigin: "50% 50%"});
			TweenMax.to($(mgear), 2, {rotation:45, directionalRotation:"270_ccw",transformOrigin: "50% 50%"});
			TweenMax.to($(sgear), 2, {rotation:45, directionalRotation:"270_ccw",transformOrigin: "50% 50%"});
		}
	});
}

function onPremiun(){
	var svgContainer = document.querySelector("#premiun");
	var svgContent = svgContainer.contentDocument; 
	var lgear = svgContent.querySelector("#LargeGear");
	var sgear = svgContent.querySelector("#smallGear");

	$('.premiun_ser').on({
		mouseenter: function() {
			TweenMax.to($(lgear), 2, {rotation:45, transformOrigin: "50% 50%"});
			TweenMax.to($(sgear), 2, {rotation:45, transformOrigin: "50% 50%"});
		},
		mouseleave: function() {
			TweenMax.to($(lgear), 2, {rotation:45, directionalRotation:"270_ccw",transformOrigin: "50% 50%"});
			TweenMax.to($(sgear), 2, {rotation:45, directionalRotation:"270_ccw",transformOrigin: "50% 50%"});
		}
	});
}