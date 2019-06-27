import wixData from 'wix-data';

var name = null;
var phone = null;

$w.onReady(function () {
	//TODO: write your page related code here...
	var lat;
	var lng;
	var markers = [];

	let currentDate = new Date();

	$w("#html1").onMessage( (event) => {
  		let receivedData = event.data;
		  lat = receivedData[0];
		  lng = receivedData[1];

		  //markers.push([name, phone, lat, lng]);

		let newMarker = {
			date: currentDate,
			name: name,
			phoneNumber: phone,
			latitude: lat,
			longitude: lng
		};
		wixData.insert("Coordinates", newMarker);
	});
});

export function input1_change(event) {
	name = $w('#input1').value;
}

export function input2_change_1(event) {
	phone = $w('#input2').value;
}
