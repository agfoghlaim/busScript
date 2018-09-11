var stops405 = require('./stops405.json');
var fs = require('fs');
	//veryLongString += '\t\t\t\t\t"bus_times_week":[\n';
// function makeTheStops(name, bestopid, stopno, mins){

// }
	var veryLongString = `{
				"name": "Garrai de Brun (Op Garrai de Brun Ent)",
				"bestopid": "525701",
				"stopno": "2",
				"bus_times_week":[\n`;

	callAll(stops405[0].stops[0].bus_times_week, 
		stops405[0].stops[0].bus_times_sat, 
		stops405[0].stops[0].bus_times_sun,
		stops405[0].stops[0].times_week,
		stops405[0].stops[0].times_sat,
		stops405[0].stops[0].times_sun, 
		1).then(function(){
	
}).then(function(){
	var stream = fs.createWriteStream("stoptest.json");
	//var veryLongString = '';
	stream.once('open', function(fd) {
		//makeString(string, mins)
	 
	stream.write(veryLongString + ']}');
	

	  stream.end();
	});
	

})
//all(0,0,3);
function callAll(s1,s2,s3,a1,a2,a3,mins){
	return new Promise(function(resolve, reject){
		all(s1, mins);
		veryLongString += '],\t\t\t\t\t"bus_times_sat":[\n';
		all(s2, mins);
		veryLongString += '],\t\t\t\t\t"bus_times_sun":[\n';
		all(s3, mins);
		veryLongString += '],\t\t\t\t\t"times_week":[\n';
		all(a1, mins);
			veryLongString += '],\t\t\t\t\t"times_sat":[\n';
		all(a2, mins);
			veryLongString += '],\t\t\t\t\t"times_sun":[\n';
		all(a3, mins);

		console.log("veryLongString "+ veryLongString);
		resolve();
	})
}	

function stops(string, add){
	if(string[0].time){
	console.log("time exists");
		
		var hrstr = string[i].time;
		var originalHour = hrstr.substr(hrstr.substr.length-7,2);
		var mins = string[i].time.substr(-2);
		if(mins >= 60-add){
			var newHour = changeHour(i);
			var newMins = "0" + ((parseInt(mins)+add)-60);
			newMins = newMins.substr(-2);
			return newHour+":"+newMins;
		}else{
			var newMins = "0" + (parseInt(mins) + add);
		newMins = newMins.substr(-2);
		return originalHour+ ":"+newMins;

		}
	}else{
			console.log("no time, must be array");
		var hrstr = string[i];
		var originalHour = hrstr.substr(hrstr.substr.length-7,2);
		var mins = string[i].substr(-2);
		if(mins >= 60-add){
			var newHour = changeHour(i);
			var newMins = "0" + ((parseInt(mins)+add)-60);
			newMins = newMins.substr(-2);
			return newHour+":"+newMins;
		}else{
			var newMins = "0" + (parseInt(mins) + add);
		newMins = newMins.substr(-2);
		return originalHour+ ":"+newMins;

		}
	}
		
	

	function changeHour(i){
		if(string[i].time){
			var str = string[i].time;
			var hour = str.substr(str.substr.length-7,2);
			var newHour = "0"+ (parseInt(hour)+1);
			newHour = newHour.substr(-2);

			var newMins = "0" + (60-mins);
			//console.log("the new hour is " + newHour);
			return newHour;

		}else{
			console.log("an array");
			var str = string[i];
			var hour = str.substr(str.substr.length-7,2);
			var newHour = "0"+ (parseInt(hour)+1);
			newHour = newHour.substr(-2);

			var newMins = "0" + (60-mins);
			//console.log("the new hour is " + newHour);
			return newHour;
		}
			
	}
}


function all(string, mins){
	return new Promise(function(resolve, reject){
		for(i in string){
			if(string[0].time){
				var newObj={
					bus: string[i].bus,
					time: stops(string, mins)
				}
				console.log("mmmmmmmmmmmmmmmmmmm ", string.length-1, i);
				if(i==string.length-1){
				veryLongString+= '\t\t\t\t\t\t'+JSON.stringify(newObj)+ '\n';	
				}else{
				veryLongString+= '\t\t\t\t\t\t'+JSON.stringify(newObj)+ ',\n';	
				}
				

			}else{
				
				if(i==string.length-1){
				veryLongString+='\t\t\t\t\t\t'+ JSON.stringify(stops(string, mins))+ '\n';	
				}else{
				veryLongString+='\t\t\t\t\t\t'+ JSON.stringify(stops(string, mins))+ ',\n';	
				}
			}
				
		}
			
			resolve(veryLongString);
		

	})
}

function justTimes(array, mins){
	//stops405[0].stops[0].times_week
	for(i in array){
		array[i].substr(-2);
		var newTime = function(array, mins,i){
			var mins = array[i].substr(-2);
		}
		//console.log("mins part  "+ array[i].substr(-2));
	}

}

			
	

		
	
