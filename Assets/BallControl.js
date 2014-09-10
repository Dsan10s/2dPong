#pragma strict

var ballSpeed: float = 80;

function Start () {
	yield WaitForSeconds(2);
	GoBall();
}

function OnCollisionEnter2D (colInfo : Collision2D) {
	if (colInfo.collider.tag == "Player") {
		var velY = rigidbody2D.velocity.y;
		
		rigidbody2D.velocity.y = velY/2 + colInfo.collider.rigidbody2D.velocity.y/3;
	}
}

function ResetBall() {
	rigidbody2D.velocity.y = 0;
	rigidbody2D.velocity.x = 0;
	transform.position.x = 0;
	transform.position.y = 0;
	
	yield WaitForSeconds(1);
	GoBall();
}

function GoBall() {
	var randomNumber = Random.Range(0, 2);
	
	if (randomNumber <= 0.5) {
		rigidbody2D.AddForce(new Vector2(ballSpeed, 10));
	} else {
		rigidbody2D.AddForce(new Vector2(-ballSpeed, -10));
	}
}