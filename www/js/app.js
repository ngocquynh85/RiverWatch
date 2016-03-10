// This is a JavaScript file

var x = document.getElementById("map_error");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=300x150&sensor=false&markers=color:green%7Clabel:R%7C"+latlon+"";
    
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
    //document.getElementById("map_gps").innerHTML = "<small>Location:"+latlon+"</small>";
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}


//-------
function capture_camera(){
    //navigator.device.capture.captureImage(captureSuccess, captureError, { limit: 1 });
    navigator.camera.getPicture(captureSuccess, captureError, { quality: 100, destinationType:Camera.DestinationType.FILE_URI }); 
}

function captureSuccess(imageURI) {
    
        //$('#camera-image').css({'background-image': 'url('+imageURI+')', 'background-size':  '100%'});
        document.getElementById("camera_img").innerHTML = "<img src='"+imageURI+"' width='100%' class='to-image'>";
        //document.getElementById("map_error").innerHTML = imageURI;
    }

function captureError(mess) {
    
        //$('#camera-image').css({'background-image': 'url('+imageURI+')', 'background-size':  '100%'});
        document.getElementById("camera_img").innerHTML = "mess";
    }
