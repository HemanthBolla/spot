console.log("hey mate you can find your emotion");


// intialize our variables
let songIndex=0;
let audioElement =new Audio('1.mp3');//audioelement.play()
let masterPlay=document.getElementById('masterplay');
let myProgressBar=document.getElementById('progressbar');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let masterSongName=document.getElementById('mastersongname');
let songitemPlay=Array.from(document.getElementsByClassName('songItemPlay'));
let toggle=document.getElementById('toggleoff');





 




let songs=[
    
    {songName:"tagalaku megame", filePath: "0.mp3", coverPath: "jersey.jpg"},
    {songName:"samaja vargamana", filePath: "2.mp3", coverPath: "1.jpg"},
    {songName:"tharali tharali", filePath: "1.mp3", coverPath: "2.jpg"},
    {songName:"inumulo hrudayam malichane", filePath: "3.mp3", coverPath: "3.jpg"},
    {songName:"akasham ammayi ayite", filePath: "4.mp3", coverPath: "4.jpg"},
    {songName:"emo emo emo", filePath: "5.mp3", coverPath: "5.jpg"},
    {songName:"nannaku prematho", filePath: "6.mp3", coverPath: "6.jpg"},
]


songitems.forEach((element,i)=>{
    console.log(element,i);
        element.getElementsByTagName('img')[0].src=songs[i].coverPath;
        element.getElementsByClassName('songname')[0].innerText=songs[i].songName;

})










//handle play pausze click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime==0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        console.log('removed');
        console.log(typeof audioElement.currentTime);
        console.log(typeof audioElement.duration);
        // console.log(audioElement.currentTime/audioElement.duration);
        // console.log(audioElement.currentTime/audioElement.duration *100);

        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        // console.log('removed');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

//listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');//update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // progress1=(audioElement.currentTime/audioElement.duration)*100;
    // console.log(progress);
    // console.log(typeof progress);
    // console.log(typeof progress1);
    myProgressBar.value=progress;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;


})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');}

)}



Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        // console.log("----------------------------------------------------------------------------0")
        // console.log(e.target.classList);
        // // console.log(e.id);
        // console.log(e.target.id);
        console.log('-----------------------------------------');
        console.log()
        songIndex= parseInt(e.target.id);
        masterSongName.innerText=songs[songIndex].songName;
    
        makeAllPlays();
        audioElement.src=`${songIndex}.mp3`;
        if(audioElement.paused||audioElement.currentTime==0){
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.play();
            gif.style.opacity=1;}
        else{
            audioElement.pause();
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            gif.style.opacity=0;
        }

        // audioElement.src=`${songIndex}.mp3`; 
        // audioElement.currentTime=0;
        // audioElement.play();
        // gif.style.opacity=1;

        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');


    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>5){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`${songIndex}.mp3`; 
    console.log("----------------");
    console.log(songIndex);

    masterSongName.innerText=songs[songIndex].songName;
    console.log(masterSongName.innerText);
    console.log("-----------------");
    audioElement.currentTime=0;
    audioElement.play();
    // // e.target.classList
    // console.log(audioElement.classList);
    // console.log(songitemPlay.classList);
    // console.log(songitems.classList)
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        if (element.id==songIndex)
        {
        element.classList.remove('fa-circle-play');
        element.classList.add('fa-circle-pause');}
        else{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        }
    
    
    })


    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=6;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`${songIndex}.mp3`; 
    masterSongName.innerText=songs[songIndex].songName;
    
        audioElement.currentTime=0;
        audioElement.play();
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            if (element.id==songIndex)
            {
            element.classList.remove('fa-circle-play');
            element.classList.add('fa-circle-pause');}
            else{
                element.classList.remove('fa-circle-pause');
                element.classList.add('fa-circle-play');
            }
        })
        

        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('preten').addEventListener('click',()=>{
    console.log('timeupdate');//update seekbar
    audioElement.currentTime=audioElement.currentTime-10;
    audioElement.play();

    //
    ss=parseInt(audioElement.currentTime)-10;
    // progress1=(audioElement.currentTime/audioElement.duration)*100;
    // console.log(progress);
    // console.log(typeof progress);
    // console.log(typeof progress1);
    //myProgressBar.value=progress;  
    

})
document.getElementById('postten').addEventListener('click',()=>{
    console.log('timeupdate');//update seekbar
    audioElement.currentTime=audioElement.currentTime+10;
    audioElement.play();

    //progress=parseInt(audioElement.currentTime)-10;
    // progress1=(audioElement.currentTime/audioElement.duration)*100;
    // console.log(progress);
    // console.log(typeof progress);
    // console.log(typeof progress1);
    //myProgressBar.value=progress;
    

})
toggle.addEventListener('click',()=>{
    console.log(audioElement.currentTime);
    console.log(audioElement.duration);
    toggle.classList.remove('fa-toggle-off');
    toggle.classList.add('fa-toggle-on');
    // whi
    var s=true;
    while(s)
    {
    if(audioElement.currentTime==audioElement.duration)
    {
        if(songIndex>5){songIndex=0;}
        else{
            songIndex=songIndex+1;
        }
        audioElement.src=`${songIndex}.mp3`; 
       audioElement.play();                   
      
    }
    }   
})