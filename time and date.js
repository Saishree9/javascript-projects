function clock(){
    let dt=new Date();

    let day=dt.getDay()
    let date=dt.getDate()
    let month=dt.getMonth()
    let year=dt.getFullYear()
    
    let hour=dt.getHours()
    let mins=dt.getMinutes()
    let secs=dt.getSeconds()
    
    
    let days=['Sun','Mon','Tue','Wed','Thur','Fri','Sat']
    
    let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    
    
    let displayDate=document.getElementById("date")
    let displayTime=document.getElementById("time")
    
    displayDate.innerText=`${days[day]} ${date} ${months[month]} ${year}`
    
    displayTime.innerText=`${hour}:${mins}:${secs}`

}

setInterval(clock,1000)