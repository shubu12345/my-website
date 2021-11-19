var i=0;
function textChange()
{
    var textChange = document.getElementById("ppo");
    var text = ["a Web Developer","a Indian","a Designer ","a Fresher"];
    textChange.innerHTML= text[i];
    i = (i + 1) % text.length;
}setInterval(textChange, 3000);