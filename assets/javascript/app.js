game = {
	player: {
		name: "",
		locationX: 0,
		locationY: 1,
		health: "",
		attack: ""
	},
	map:{},
	generateMap: ()=>{
		//TODO: Makes map not hardcoded and random events
		var randomY = Math.floor(Math.random()*100) + 20;
		for (var i = 0; i < randomY; i++) {
			game.map[i] = []
			var randomX = Math.floor(Math.random()*100) + 20;
			for (var d = 0; d < randomX; d++) {
				game.map[i].push("x");
			}
		}
		//sets player location
		game.player.locationY = Math.floor(Math.random() * Object.keys(game.map).length)
		game.player.locationX = Math.floor(Math.random() * game.map[game.player.locationY].length)
		game.map[game.player.locationY][game.player.locationX] = "<span id='player'>P</span>"
		//TODO: Make events
		game.drawMap();
	},
	checkOOB: (direction)=>{
		//Checks if the user press a location that is out of bounds
		switch(direction){
			case 37:
				//move left switch case
				if(game.map[game.player.locationY][game.player.locationX-1]!=undefined){
					game.movePlayer("left");
				}
				break;
			case 38:
				//move up
				if(game.map[game.player.locationY-1][game.player.locationX]!=undefined){
					game.movePlayer("up");
				}
				break;
			case 39:
				//move right
				if(game.map[game.player.locationY][game.player.locationX+1]!=undefined){
					game.movePlayer("right");
				}
				break;
			case 40:
				//move down
				if(game.map[game.player.locationY+1][game.player.locationX]!=undefined){
					game.movePlayer("down");
				}
				break;
		}
	},
	movePlayer: (direction)=>{
		// Moves the user in the direction they pressed
		switch(direction){
			case "up":
				//move player up
				//	clear old place
				game.map[game.player.locationY][game.player.locationX] = "x"
				//	change variable
				game.player.locationY--
				//	change player on the map
				game.map[game.player.locationY][game.player.locationX] = "<span id='player'>P</span>"
				break;
			case "down":
				//move player down
				//	clear old place
				game.map[game.player.locationY][game.player.locationX] = "x"
				//	change variable
				game.player.locationY++
				//	change player on the map
				game.map[game.player.locationY][game.player.locationX] = "<span id='player'>P</span>"
				break;
			case "left":
				//move player left
				//	clear old place
				game.map[game.player.locationY][game.player.locationX] = "x"
				//	change variable
				game.player.locationX--
				//	change player on the map
				game.map[game.player.locationY][game.player.locationX] = "<span id='player'>P</span>"
				break;
			case "right":
				//move player right
				//	clear old place
				game.map[game.player.locationY][game.player.locationX] = "x"
				//	change variable
				game.player.locationX++
				//	change player on the map
				game.map[game.player.locationY][game.player.locationX] = "<span id='player'>P</span>"
				break;
		}
		game.drawMap()
	},
	battle: ()=>{
		//TODO: Enemies
	},
	drawMap: ()=>{
		//draw map on page
		var bigDiv = $("<div>");
		for (var i = 0; i < Object.keys(game.map).length; i++) {
			var floorDiv = $(`<div id=${i}>`)
			for (var z = 0; z < game.map[i].length; z++) {
		 		  floorDiv.append(game.map[i][z]);
		 	}
			bigDiv.append(floorDiv)
		}
		$("#Hello").html(bigDiv);
		$("html, body").animate({ scrollTop: $('#player').offset().top-100 });
	}
};
$(document).on("keydown",(event)=>{
   if(event.which>=37 && event.which<=40){
   	event.preventDefault();
   	game.checkOOB(event.which);
   }
});
game.generateMap();