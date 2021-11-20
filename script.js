var i=0;
var txt = [ "a Fresher", "a Web Developer", "a Designer ", "a Front end Developer", "a Indian"];
var speed = 150;
function textChange(val)
{
    const textData = txt[val];
    if(i<textData.length){
        document.getElementById("ppo").innerHTML += textData.charAt(i);
        i++;
        setTimeout(() =>{
            textChange(val);
        }, speed);
    }else {
        const last = txt[txt.length - 1]; 
        if(textData != last){
        setTimeout(() => {
            i = 0;
            document.getElementById("ppo").innerHTML= "";
            textChange(txt.indexOf(textData) + 1);
    },speed);
}else {
    setTimeout(() => {
        i = 0;
        document.getElementById("ppo").innerHTML= "";
        textChange(0);
},speed);
}
}
} 
textChange(0)