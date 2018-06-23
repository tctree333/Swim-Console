let accessToken = "Access Token Here";
let deviceID = "Device Id Here";

function update(){
    $.get("https://api.particle.io/v1/devices/"+deviceID+"/roundsGET?access_token="+accessToken+"&format=raw", function(data){
        $("#roundsP").text("Rounds: "+data);
    });

    $.get("https://api.particle.io/v1/devices/"+deviceID+"/intervalGET?access_token="+accessToken+"&format=raw", function(data){
        $("#intervalP").text("Interval: "+data);
    });

    $.get("https://api.particle.io/v1/devices/"+deviceID+"/remain?access_token="+accessToken+"&format=raw", function(data){
        $("#remain").text("Rounds Remaining: "+data);
    });
}

function send(){
    $.post("https://api.particle.io/v1/devices/"+deviceID+"/rounds", {
        arg: document.forms["form"].elements[0].value,
        access_token: accessToken
    },function(data, status){
        $("#status").text(status);
    });

   $.post("https://api.particle.io/v1/devices/"+deviceID+"/interval", {
        arg: document.forms["form"].elements[1].value,
        access_token: accessToken
    },function(data, status){
        $("#status").text(status);
    });

}

function start(){
    $.post("https://api.particle.io/v1/devices/"+deviceID+"/start", {
	arg: "start",
	access_token: accessToken
    },function(data, status){
	$("#status").text(status);
    });
}
