document.getElementById("submitBtn").addEventListener("click",function(){
    let newEvent="";
    if (document.getElementById("priorityCheck").checked){
        newEvent = `<div class="eventPriority">
        <div id="eventh5">${document.getElementById("title").value}</div>
        <div id="eventh6">${getDate().mth}/${getDate().day}/${getDate().yr} @ ${getTime()}</div>
    </div>`
    }
    else{
     newEvent = `<div class="event">
                    <div id="eventh5">${document.getElementById("title").value}</div>
                    <div id="eventh6">${getDate().mth}/${getDate().day}/${getDate().yr} @ ${getTime()}</div>
                </div>`
    }
        document.getElementById("eventsSpace").innerHTML += newEvent;
        document.getElementById("title").value = "";
        document.getElementById("datee").value="";
        document.getElementById("timee").value="";
        document.getElementById("priorityCheck").checked=false;
});

function getDate(){
    let mmm = document.getElementById("datee").value;
    let date = {
        yr :mmm.substring(0,4),
        mth : mmm.substring(5,7),
        day : mmm.substring(8,10)
    }
    return date;
}

function getTime(){
    let str = document.getElementById("timee").value;
    if (parseInt(str.substring(0,2)) > 12){
        return `${parseInt(str.substring(0,2))-12}:${str.substring(3,5)}PM`;
    } 
    return str+"AM";
}