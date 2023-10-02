let count=0;

let counter=document.getElementById("counter");

function startCount(){
    counterInterval=setInterval(()=>{
        counter.innerText=++count
    },1000)
}

function stopCount(){
    clearInterval(counterInterval)
}

function resetCount(){
    count=0;
    counter.innerText=count
    clearInterval(counterInterval)
}