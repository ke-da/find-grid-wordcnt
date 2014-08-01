

function findWordCntInGrid(grid, word) {
	var cnt = 0;
	for(var i=0; i < grid.length; i++){
		for(var j=0; j< grid[i].length; j++){
			var pos = {x:i,y:j}
			if (posCnt = wordCntAtPos(word, grid, pos)){
				console.log(pos," has the word "+posCnt + " times");
				cnt += posCnt;
			}
		}
	}
	console.log(cnt);
	return cnt;
}

function wordCntAtPos(word, grid, pos){
	if (grid[pos.x] && grid[pos.x][pos.y] === word.charAt(0)){
		var substr = word.substr(1);
		if (substr === ""){
			return 1;
		}
		return wordCntAtPos(substr, grid, {x:pos.x+1,y:pos.y})
		+ wordCntAtPos(substr, grid, {x:pos.x-1,y:pos.y})
		+ wordCntAtPos(substr, grid, {x:pos.x,y:pos.y+1})
		+ wordCntAtPos(substr, grid, {x:pos.x,y:pos.y-1})
	}
	return 0;
}

findWordCntInGrid([
	["h","e","l","l","o"],
	["e","h","h","o",""],
	["l","l","e","l","l"],
	["l","o","","","o"],
	["o","l","","",""]
], "hello")
