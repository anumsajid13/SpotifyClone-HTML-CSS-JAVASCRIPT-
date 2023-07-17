console.log("welcome to spotify");

let index=0;
let audioElement=new Audio('2.mp3');
let masterplay=document.getElementById('playid');
let range=document.getElementById('SongRange');
let gif=document.getElementById('gif');
let SongName = document.getElementById('SongName');
let songitem=Array.from(document.getElementsByClassName('songitem'));

let songs=[

        {songname:"Song 1-No Copy Right", filePath:'1.mp3', coverpath:"covers/1.jpg"},
        {songname:"Song 2-No Copy Right", filePath:'2.mp3', coverpath:"covers/2.jpg"},
        {songname:"Song 3-No Copy Right", filePath:'3.mp3', coverpath:"covers/3.jpg"},
        {songname:"Song 4-No Copy Right", filePath:'4.mp3', coverpath:"covers/4.jpg"},
        {songname:"Song 5-No Copy Right", filePath:'5.mp3', coverpath:"covers/5.jpg"}

]
songitem.forEach((element,i) => {

    console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].coverpath;
    element.getElementsByClassName('Songname')[0].innerText=songs[i].songname;
})

//play or pause song on click 
masterplay.addEventListener('click', ()=>{

    console.log("inside play func");
    if(audioElement.paused || audioElement.currentTime==0)
    {
        console.log("audio is pause ");
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        ////////////////////////////////////////////////////////////////////////////////////////
       /*     songitem.forEach((element,i) => {
            console.log(index);

            element.getElementsByClassName('songitemplay')[index].classList.remove('fa-circle-play');   
            element.getElementsByClassName('songitemplay')[index].classList.add('fa-pause-circle');
        })*/
        
          
        
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    /*    songitem.forEach((element,i) => {
            console.log(index);
            element.getElementsByClassName('songitemplay')[index].classList.add('fa-circle-play');   
            element.getElementsByClassName('songitemplay')[index].classList.remove('fa-pause-circle');
        })*/
    }
})

audioElement.addEventListener('timeupdate', ()=> {
  
    //update bar as time updates
    songprogress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    range.value=songprogress;

})

range.addEventListener('change',()=>{
     
    audioElement.currentTime=range.value*audioElement.duration/100;
})

// to pause and play the icons in the white bars 

const playthem=()=>{  //
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-circle-play');
    })

}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{

    element.addEventListener('click',(e)=>{

        playthem();
        index=parseInt(e.target.id);
       // console.log(index);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause-circle');
       // let audioElement=new Audio('${index+1}.mp3');
        
        audioElement.src= `${index+1}.mp3`;
       
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        SongName.innerText = songs[index].songname;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');

    })
})
 
 document.getElementById('previous').addEventListener('click',()=>{
    if(index>=4)
    {
        index=0;
    }
    else {
        index -= 1;
    }
    audioElement.src= `${index+1}.mp3`;
    
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        SongName.innerText = songs[index].songname;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
 })

 document.getElementById('foreward').addEventListener('click',()=>{
    if(index <=0)
    {
        index=0;
    }
    else {
        index += 1;
    }
    audioElement.src= `${index+1}.mp3`;
    
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity = 1;
    SongName.innerText = songs[index].songname;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-pause-circle');
 })



