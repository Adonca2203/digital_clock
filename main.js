

function Time(){

	//Date
	var mydate = new Date();
	var year = mydate.getYear();

		if(year < 1000){

			year +=1900;

		}

	var day = mydate.getDay();
	var month = mydate.getMonth();
	var daym = mydate.getDate();
	var dayarray = new Array('Sunday,','Monday,','Tuesday,','Wednesday,','Thursday,','Friday,','Saturday,');
	var montharray = new Array('January','February','March','April','May','June','July','August','September','Octoboer','November','December');

	//Time

	var currenttime = new Date();
	var h = currenttime.getHours();
	var m = currenttime.getMinutes();
	var s = currenttime.getSeconds();

		if(h == 24){

			h = 0;

		} else if(h > 12){

			h = h - 0;

		}

		if(h < 10){

			h = "0" + h;

		}

		if(m < 10){

			m = "0" + m;

		}

		if(s < 10){

			m = "0" + s;

		}

		var myclock = document.getElementById('clockDisplay');
		myclock.textContent = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;
		myclock.innerText = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;

		setTimeout("Time()", 1000);

}

Time();