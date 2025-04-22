function updateClock(){
    // update clock on every second

    const timeElement = document.getElementById('time')
    const dateElement = document.getElementById('date')

    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    // Here or(||) 12 is used because if the time reaches 12 then it is like 12%12 ==0
    // and in jS 0 means false so it could not assign anythings in hours that's why 
    // we will using or 12 so that it can so the 12

    // const minutes = now.getMinutes();
    // the minute things need 2 digit so how can i acheive it
    const minutes = now.getMinutes().toString().padStart(2,'0');
    // padStart shows  1 = > 01 
    const seconds = now.getSeconds().toString().padStart(2,'0');

    //AM and PM 
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

    //Date part
    const options = {
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric",
    }
    const dateString = now.toLocaleDateString(undefined,options)
    console.log(now)
    console.log("hours",hours)
    console.log("minutes:",minutes)
    console.log("seconds:",seconds)
    console.log("ampm:",ampm)
    console.log("dateString:",dateString)

    timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

    dateElement.textContent = dateString;
}

setInterval(updateClock,1000);

updateClock()