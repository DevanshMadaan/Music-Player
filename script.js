console.log("welcome to the music palyer");
let index=1;
let mybar=document.getElementById("bar"); 
let duration=document.getElementById("songDur");
let audioElement=new Audio('songs/Imagine Dragons - Believer.mp3');
var play_bt=document.getElementById('play');
var container=document.getElementById('ct');
let songsName=Array.from(document.getElementsByClassName("songItem"));
let writeName=document.getElementById("playingSong");
let fwd=document.getElementById("fwd");
let bwd=document.getElementById("bwd");
var j=-1;
var e;
let songs=[
    {songName:"Imagine Dragons-Believer" ,path:"songs/Imagine Dragons - Believer.mp3", coverPath:"coverpaths/image1.jpg"},
    {songName:"Attention-Charlie Puth" ,path:"songs/Attention-Charlie Puth.mp3", coverPath:"coverpaths/image2.jpg"},
    {songName:"Baby-Justin Bieber" ,path:"songs/Baby-Justin Bieber.mp3", coverPath:"coverpaths/playing.webp"},
    {songName:"Excuses-AP Dhillon" ,path:"songs/Excuses-AP Dhillon.mp3", coverPath:"coverpaths/image4.jpg"},
    {songName:"Insane-AP Dhillon" ,path:"songs/Insane-AP Dhillon.mp3", coverPath:"coverpaths/image5.jpeg"},
    {songName:"See You Again" ,path:"songs/See You Again.mp3", coverPath:"coverpaths/image6.jpeg"},
    {songName:"Sorry-Justin Bieber" ,path:"songs/Sorry-Justin Bieber.mp3", coverPath:"coverpaths/playing.webp"},
    {songName:"What_Do_You_Mean-Justin Bieber" ,path:"songs/What_Do_You_Mean-Justin Bieber.mp3", coverPath:"coverpaths/playing.webp"},
    {songName:"Treat You Better-Shawn Mendes" ,path:"songs/Treat You Better.mp3", coverPath:"coverpaths/playing.webp"},
    {songName:"Girls Like You-Marron 5" ,path:"songs/Girls Like You.mp3", coverPath:"coverpaths/playing.webp"},
    {songName:"Memories-Maroon 5" ,path:"songs/Memories.mp3", coverPath:"coverpaths/playing.webp"},
    
]

songsName.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByClassName("sName")[0].innerText=songs[i].songName;

});
songsName.forEach((element,i) =>{
element.addEventListener("click",()=>{
    console.log(i);
    audioElement.src=songs[i].path;
writeName.innerText=songs[i].songName;
if(j==-1){
document.getElementById('1').style.opacity=0;
}
else if(j!=-1){
    e.style.opacity=0;
    }
index=i+1;


element.getElementsByClassName("music_bars")[0].style.opacity=1;
playpausesong();
j=i+1;
e=element.getElementsByClassName("music_bars")[0];
/*console.log(audioElement.currentTime);
var min="0" + Math.floor ((audioElement.duration-audioElement.currentTime) / 60);
    var sec="0" + Math.floor ((audioElement.duration-audioElement.currentTime)-min * 60);
duration.innerText=min+":"+sec;*/
});
});
play_bt.addEventListener("click",()=>{
    playpausesong();
    changeopnamedur();
});
function playpausesong(){
document.getElementById("setimg").src=songs[index-1].coverPath;
if(audioElement.paused){
 
    audioElement.play();
    var mtime="0" + Math.floor ((audioElement.duration-audioElement.currentTime) / 60);
    var stime="0" + Math.floor ((audioElement.duration-audioElement.currentTime)-mtime * 60);
    duration.innerText=mtime+":"+stime;

    
    play_bt.setAttribute("src","OIP.jpg");
    play_bt.style.height="25px";
    document.getElementById(index).style.opacity='1'; 
   
}
else if(!audioElement.paused){
  console.log("paused");
    audioElement.pause();
    /*container.style.backgroundImage="url('music-bars-gif.gif')";*/
    play_bt.setAttribute("src","playbutton.png");
document.getElementById(index).style.opacity='0';    
}
};

audioElement.addEventListener("timeupdate",()=>{
    var mtime="0" + Math.floor ((audioElement.duration-audioElement.currentTime) / 60);
    var stime="0" + Math.floor( ((audioElement.duration-audioElement.currentTime)-mtime * 60));
    duration.innerText=mtime+":"+stime;
range=parseInt((audioElement.currentTime/audioElement.duration)*100);
mybar.value=range;
if(mybar.value==100){
nextsong();
}
});

mybar.addEventListener("change",()=>{
    audioElement.currentTime=(mybar.value*audioElement.duration)/100;
}); 

fwd.addEventListener("click",nextsong);
function nextsong(){
    e=document.getElementById(index);
    e.style.opacity=0;
if(index==11){
index=11;

}
else{
    index++;
}
audioElement.src=songs[index-1].path;
j=index;
e=document.getElementById(index);
changeopnamedur();
playpausesong();

}

bwd.addEventListener("click",previoussong);
function previoussong(){
    e=document.getElementById(index);
    e.style.opacity=0;
if(index==1){
index=1;

}
else{
    index--;
}
audioElement.src=songs[index-1].path;
j=index;
e=document.getElementById(index);
changeopnamedur();
playpausesong();

}

function changeopnamedur(){
//document.getElementById(index).style.opacity=1;
writeName.innerText=songs[index-1].songName;

}