#pragma strict

static var playerScore_1 : int = 0;
static var playerScore_2 : int = 0;

var skin : GUISkin;

static function Score (wallName : String) {
	if (wallName == "rightWall") {
		playerScore_1 += 1;
	} else if (wallName == "leftWall") {
		playerScore_2 += 1;
	}
}

function OnGUI() {
	GUI.skin = skin;
	GUI.Label(new Rect(Screen.width/2 - 150 - 12, 20, 100, 100), "" + playerScore_1);
	GUI.Label(new Rect(Screen.width/2 + 150 - 12, 20, 100, 100), "" + playerScore_2);
}