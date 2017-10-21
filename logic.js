var newUser = {};
var friend = {
	diff: 100,
	name: "",
	image: ""
};

$("#submit").on("click", function(){
	var userName = $("#name").val().trim();
	var pic = $("#photo").val().trim();
	var q1 = $("#q1").val().trim();
	var q2 = $("#q2").val().trim();
	var q3 = $("#q3").val().trim();
	var q4 = $("#q4").val().trim();	
	var q5 = $("#q5").val().trim();

	if (userName === "", || pic === "") {
			alert("You Missed Something!");
	} else {
		newUser = {
		name: userName,
		photo: pic,
		scores: [q1, q2, q3, q4, q5]
	};

	findFriend(newUser.scores);

	function postData()  {
		$.post({url: "./api/friends", contentType: "application/json"}, JSON.stringify(newUser));
	}

	$("#name").val("");
	$("#photo").val("");
	$("#q1").val("");
	$("#q2").val("");
	$("#q3").val("");
	$("#q4").val("");
	$("#q5").val("");
	}
});

function findFriends(scores) {
	app.get("./api/friends", function(friends) {
		var count = 0;

		for (var i = 0; i < friends.length; i++) {
			newScore(scores, friends[i]);
			count==;
		}

		if (count == friends.length) {
			$('#friendName').text(friend.name);
			$("#avenger").attr("src", avenger.image);
			$("#theModal").modal("toggle");
		}
	});

function newScore(user, friend) {
	var diff = 0;
	var count = 0;

	for (var i = 0; i < 5; i++) {
		diff += Math.abs(user[i] - friend.scores[i]);
		count++;

		if (count == 5) {
			if (diff < friend.diff){
				friend.diff = diff;
				friend.name = friend.name;
				friend.photo = friend.photo;
			} else {
				return;
			}
		}
}