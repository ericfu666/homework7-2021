var video = document.querySelector("#player1");


document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate = 0.95 * video.playbackRate;
	console.log("New speed is ", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate = video.playbackRate / 0.95;
	console.log("New speed is ", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
	console.log("Original location ", video.currentTime);
	video.currentTime += 15;
	if (video.currentTime == video.duration) {
		video.currentTime = 0;
		console.log("Going back to the beginning")
	}
	console.log("New location", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted == true) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";

	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("change", function () {
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
})

document.querySelector("#vintage").addEventListener("click", function () {
	document.querySelector("#player1").classList.add("oldSchool");

});
document.querySelector("#orig").addEventListener("click", function () {
	document.querySelector("#player1").classList.remove("oldSchool");
});

