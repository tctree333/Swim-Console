let accessToken = "8c44e973694a950d414f0c8e348597f3adefc166";
let deviceID = "1d0038001047353138383138";

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
