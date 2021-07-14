let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeader = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name');
    if(!myName)
    {
        setUserName();
    }
    else
    {
        localStorage.setItem('name', myName);
        myHeader.textContent = "Temp/hum of " + myName + " the apartment";
    }
    
}

if(!localStorage.getItem('name'))
{
    setUserName();
}
else
{
    let storedName = localStorage.getItem('name');
    myHeader.textContent = "Temp/hum of " + storedName + " the apartment";
}

myButton.onclick = ()=>{
    setUserName();
}

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/temp-icon.jpg')
    {
        myImage.setAttribute('src', 'images/temp-icon-20.jpg');
    }
    else
    {
        myImage.setAttribute('src', 'images/temp-icon.jpg');
    }
}