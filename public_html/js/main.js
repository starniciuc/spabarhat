function timer() {
	var day = 30;
	var hour = 23;
	var minute = 1;
	$("#days").empty();
	$("#days").append(day);

	$("#hours").empty();
	$("#hours").append(hour);

	$("#minutes").empty();
	$("#minutes").append(minute);
	var startTime = (day * 24 * 60 * 60) + (hour * 60 * 60) + (minute * 60);
	setInterval(function() {
		startTime = startTime - 60;
		var d = Math.floor(startTime / (3600 * 24));
		var h = Math.floor((startTime - d * 3600 * 24) / 3600);
		var m = Math.floor((startTime - (d * 3600 * 24 + h * 3600)) / 60);

		$("#days").empty();
		$("#days").append(d);

		$("#hours").empty();
		$("#hours").append(h);

		$("#minutes").empty();
		$("#minutes").append(m);

	}, 60000);
}
