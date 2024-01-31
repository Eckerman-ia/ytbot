var ytFrame = [];
var randNum;
function ytBot(array){
for(var i = 0; i < array.length; i++){
ytFrame[i] = document.createElement("iframe");
ytFrame[i].src = randomIP(array[i].replace("watch?v=", "embed/") + "?autoplay=1&mute=1&loop=1&playlist=" + array[i].replace("https://www.youtube.com/watch?v=", ""));
document.body.appendChild("ytFrame[i]");
    var fdoc = ytFrame[i].contentDocument;
}
}
function randomIP(url){
randNum = Math.ceil(Math.random() * 2);
if(randNum == 1){
return url;
} else{
return url;
}
}

function proxy(url){
if(__uv$config){
return __uv$config.prefix + __uv$config.encodeUrl(url);
} else{
return url;
}
}
ytBot(["https://www.youtube.com/watch?v=MeKgExtpfZs"]);
