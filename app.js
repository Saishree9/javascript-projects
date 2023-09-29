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


let scrollImages=['https://bootstrapmade.com/demo/templates/MeFamily/assets/img/about.jpg','https://bootstrapmade.com/demo/templates/MeFamily/assets/img/gallery/vacation-2.jpg','https://bootstrapmade.com/demo/templates/MeFamily/assets/img/gallery/home-2.jpg','https://bootstrapmade.com/demo/templates/MeFamily/assets/img/gallery/vacation-3.jpg','https://bootstrapmade.com/demo/templates/MeFamily/assets/img/gallery/beach-3.jpg'];

function previous(){
    let img=document.getElementById('scrollImg');
    if(img.src===scrollImages[0]){
        img.src=scrollImages[4]
    }
    else if(img.src===scrollImages[1]){
        img.src=scrollImages[0]
    }
    else if(img.src===scrollImages[2]){
        img.src=scrollImages[1]
    }
    else if(img.src===scrollImages[3]){
        img.src=scrollImages[2]
    }
    else if(img.src===scrollImages[4]){
        img.src=scrollImages[3]
    }
}


function next(){
    let img=document.getElementById('scrollImg');
    if(img.src===scrollImages[0]){
        img.src=scrollImages[1]
    }
    else if(img.src===scrollImages[1]){
        img.src=scrollImages[2]
    }
    else if(img.src===scrollImages[2]){
        img.src=scrollImages[3]
    }
    else if(img.src===scrollImages[3]){
        img.src=scrollImages[4]
    }
    else if(img.src===scrollImages[4]){
        img.src=scrollImages[0]
    }
}