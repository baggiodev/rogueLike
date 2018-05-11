game = {
	player: {
		name: "",
		locationX: 0,
		locationY: 1,
		health: "",
		attack: ""
	},
	map:{
		0:["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
		1:["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
		2:["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
		3:["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
		4:["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
		5:["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
		6:["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
		7:["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
		8:["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
		9:["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
		10:["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
		11:["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
		12:["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
		13:["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
		14:["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
		15:["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
		16:["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
		17:["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
		18:["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
		19:["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
		20:["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"]
	},
	generateMap: ()=>{
		//TODO: Makes map not hardcoded and random events
		game.player.locationY = Math.floor(Math.random() * Object.keys(game.map).length)
		game.player.locationX = Math.floor(Math.random() * game.map[game.player.locationY].length)
		game.map[game.player.locationY][game.player.locationX] = "P"
		console.log(game.map);

	},
	checkOOB: (direction)=>{
		//TODO: Checks if the user press a location that is out of bounds
		switch(direction){
			case 37:
				//move left switch case
				if(game.map[game.player.locationY][game.player.locationX-1]){
					game.movePlayer("left");
				}
				break;
			case 38:
				//move up
				if(game.map[game.player.locationY-1]){
					game.movePlayer("up");
				}
				break;
			case 39:
				//move right
				if(game.map[game.player.locationY][game.player.locationX+1]){
					game.movePlayer("right");
				}
				break;
			case 40:
				//move down
				if(game.map[game.player.locationY+1]){
					game.movePlayer("down");
				}
				break;
		}
	},
	movePlayer: (direction)=>{
		//TODO: Moves the user in the direction they pressed
		switch(direction){
			case "up":
				//TODO move player up
				//	clear old place
				game.map[game.player.locationY][game.player.locationX] = "x"
				//	change variable
				game.player.locationY--
				//	change player on the map
				game.map[game.player.locationY][game.player.locationX] = "P"
				break;
			case "down":
				//TODO move player down
				//	clear old place
				game.map[game.player.locationY][game.player.locationX] = "x"
				//	change variable
				game.player.locationY++
				//	change player on the map
				game.map[game.player.locationY][game.player.locationX] = "P"
				break;
			case "left":
				//TODO move player left
				//	clear old place
				game.map[game.player.locationY][game.player.locationX] = "x"
				//	change variable
				game.player.locationX--
				//	change player on the map
				game.map[game.player.locationY][game.player.locationX] = "P"
				break;
			case "right":
				//TODO move player right
				//	clear old place
				game.map[game.player.locationY][game.player.locationX] = "x"
				//	change variable
				game.player.locationX++
				//	change player on the map
				game.map[game.player.locationY][game.player.locationX] = "P"
				break;
		}
		game.drawMap()
	},
	battle: ()=>{
		//TODO: Enemies
	},
	drawMap: ()=>{
		//TODO: draw map on page
		var bigString = ""
		for (var i = 0; i < Object.keys(game.map).length; i++) {
			for (var z = 0; z < game.map[i].length; z++) {
				bigString = bigString + game.map[i][z]
			}
			bigString = bigString + "<br>"
		}
		$("#Hello").html(bigString);
	}
};
$(document).on("keydown",(event)=>{
   if(event.which>=37 && event.which<=40){
   	event.preventDefault();
   	game.checkOOB(event.which);
   }
});