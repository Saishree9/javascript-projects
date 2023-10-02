// *------project 1---------------


function hide()
{
    let img=document.getElementById('img');
    img.style.visibility="hidden"
}

function show()
{
    let img=document.getElementById('img')
    img.style.visibility="visible"
}

// &----------------------------------------------------------------------------------------
// *------project 2---------------


// function changeButton(){
//     let img=document.getElementById('image')
//     let button=document.getElementById('button')
//     if(img.style.visibility==='visible'){ 
//         img.style.visibility='hidden'
//         button.innerText="Show"
//     }
//     else{
//         button.innerText="Hide"
//         img.style.visibility='visible'
//     }
// }               //?---for this to work--- add inline style="visiblity:visible;"


function changeButton(){
    let button=document.getElementById('button')
    let img=document.getElementById('image')
        if(button.innerText==="Hide"){ 
            img.style.visibility='hidden'
            button.innerText="Show"   
        }
        else{
            img.style.visibility='visible'
            button.innerText="Hide"   
        }
}

// &----------------------------------------------------------------------------------------
// *------project 3---------------


// let scrollImages=['https://bootstrapmade.com/demo/templates/MeFamily/assets/img/about.jpg','https://bootstrapmade.com/demo/templates/MeFamily/assets/img/gallery/vacation-2.jpg','https://bootstrapmade.com/demo/templates/MeFamily/assets/img/gallery/home-2.jpg','https://bootstrapmade.com/demo/templates/MeFamily/assets/img/gallery/vacation-3.jpg','https://bootstrapmade.com/demo/templates/MeFamily/assets/img/gallery/beach-3.jpg','https://bootstrapmade.com/demo/templates/MeFamily/assets/img/gallery/beach-2.jpg','https://bootstrapmade.com/demo/templates/MeFamily/assets/img/gallery/beach-1.jpg'];

// let img=document.getElementById("scrollImg")
// let i=0;

// function next(){

//     img.src=scrollImages[++i]
//     if(i===(scrollImages.length)-1){
//         i=-1;
//     }
// }

// let n=scrollImages.length;
// function previous(){
//     img.src=scrollImages[--n]
//     if(n===0){
//         n=scrollImages.length
//     }
// }

// &----------------------------------------------------------------------------------------
// *------project 4---------------

let btn=document.getElementById('btn');
let count=document.getElementById('counter')

let n=0;

function counter(){
    count.innerText=++n
    if(n==10){
        btn.removeEventListener('click', counter)
    }
}
btn.addEventListener('click', counter)
