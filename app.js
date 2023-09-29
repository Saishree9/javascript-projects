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