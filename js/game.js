//declare characters
var players = [

    {
    	name:"Anakin",
    	hp:90,
    	attk:8,
    	imgLinks: "./images/anakin.jpg",
        index:0
    },
    {
    	name:"Darth Maul",
    	hp:110,
    	attk:10,
    	imgLinks: "./images/maul.jpg",
        index:1
    },
     {
    	name:"Obi-Won Kenobi",
    	hp:150,
    	attk:12,
    	imgLinks: "./images/obi-wan.jpg",
        index:2
    },
    {
    	name:"Darth-Vader",
    	hp:170,
    	attk:14,
    	imgLinks: "./images/vader.jpg",
        index:3
    }   
];
//other variables/switches
var userSelected = false
var enemySelected = false

//setup game, dynamically create UI
window.onload = function() {
     deployGame();
};

//after user selects character
$(document).on("click","#select-origin", function() {
    

    if (userSelected === false) {

	    var element = $(this)
	    element.removeAttr("id")
	    //var name = $(this).attr("data-char");
	    //var playerIndex = $(this).attr("data-index");
	    $(".my-char-container").append(element);
	    userSelected = true
	    $("#game-message").html("Select Your Opponent")
	}    
	else {
     
		var element = $(this);
		element.removeAttr("id");
		$(".defender-container").append(element);
        enemySelected = false;

	};    



});


//Starts up Game
function deployGame() {

   for (var i = 0; i < players.length; i ++) {

		var imgDiv = $("<div>").addClass("imgDiv")
		    imgDiv.attr("id","select-origin")
		    .attr("data-char",players[i].name)
		    .attr("data-hp",players[i].hp)
		    .attr("data-attk",players[i].attk)
		    .attr("data-index",players[i].index);
		var imgDivHead = $("<h2>").addClass("imgDivHead").text(players[i].name);
		var imgDivInfo = $("<h2>").addClass("imgDivInfo").text(players[i].hp);
		imgDiv.append(imgDivHead).append(imgDivInfo);

		var charImg = $("<img>");
		    charImg.addClass("charImg")
		    .attr("src",players[i].imgLinks);
		 //  .attr("data-char",players.imgHead[i])
		 //   .attr("data-hp",players.hpSelect[i])
		 //   .attr("data-attk",players.attkSelect[i]);

		imgDiv.append(charImg);
		
		$(".select-char-container").append(imgDiv);    
	};

};

function determinePlayers() {

};

