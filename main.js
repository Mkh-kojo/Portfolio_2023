Genese(1,1) // "God created the heaven and the earth"



function Genese(a,b)
{
    console.log("God created the heaven and the earth")
}

//MENU OPTIONS
const home  = document.querySelector("#Home")
const skills = document.querySelector("#Skills")
const about = document.querySelector("#About")
const contact = document.querySelector("#Contact")

const menuOptions = [home,skills,about,contact];

for(let i = 0;i < menuOptions.length;i++)
{
    
    menuOptions[i].addEventListener('click', function(){
        
        menuScroll(menuOptions[i].innerHTML)
        
    })
}
// -------------------------------------------------
//LUMINAIRES
const sun = document.querySelector(".sun")
const moon = document.querySelector(".moon")

const sunInfo =  window.getComputedStyle(sun);
const moonInfo =  window.getComputedStyle(moon);
// -------------------------------------------------

//BODY
const body = document.querySelector("body")
let skyBlueBackground = 
{
    actual_TIME:[29,38,58],
    day:[81,175,222],
    night:[29,38,58],
    night_TAG:"#1D263A",
    day_TAG:"",
    itsDay:false
}

body.style.backgroundImage = `linear-gradient(100deg , rgb(24, 25, 43) , rgb(${skyBlueBackground.actual_TIME[0]}, ${skyBlueBackground.actual_TIME[1]},${skyBlueBackground.actual_TIME[2]}))`

function day_night(delay,time,objOfDay)
{
    setTimeout(() =>{
        setInterval(() =>{

            if(objOfDay.itsDay === false)
            {
                if(sun.getBoundingClientRect().x < 180 && sun.getBoundingClientRect().x > 120)
                    {
                        // console.log("On  passe au jour ! ")
                        objOfDay.itsDay = true;
                    }
                    else
                {
                    if(objOfDay.actual_TIME[0] !== objOfDay.night[0])
                    {
                        if(objOfDay.actual_TIME[0] < objOfDay.night[0])
                        {
                            objOfDay.actual_TIME[0]++
                        }
                        else if(objOfDay.actual_TIME[0] > objOfDay.night[0])
                        {
                            objOfDay.actual_TIME[0]--
                        }
                    }
                     if(objOfDay.actual_TIME[1] !== objOfDay.night[1])
                    {
                        if(objOfDay.actual_TIME[1] < objOfDay.night[1])
                        {
                            objOfDay.actual_TIME[1]++
                        }
                        else if(objOfDay.actual_TIME[1] > objOfDay.night[1])
                        {
                            objOfDay.actual_TIME[1]--
                        }
                    }
                     if(objOfDay.actual_TIME[2] !== objOfDay.night[2])
                    {
                        if(objOfDay.actual_TIME[2] < objOfDay.night[2])
                        {
                            objOfDay.actual_TIME[2]++
                        }
                        else if(objOfDay.actual_TIME[2] > objOfDay.night[2])
                        {
                            objOfDay.actual_TIME[2]--
                        }
                    }
                    body.style.backgroundImage = `linear-gradient(100deg , rgb(24, 25, 43) , rgb(${skyBlueBackground.actual_TIME[0]}, ${skyBlueBackground.actual_TIME[1]},${skyBlueBackground.actual_TIME[2]}))` 
                } // here 
            }
            else
            {
                if( moon.getBoundingClientRect().x < 180 && moon.getBoundingClientRect().x > 120)
                    {
                        objOfDay.itsDay = false;
                    }
                else
                {
                    if(objOfDay.actual_TIME[0] !== objOfDay.day[0])
                    {
                        if(objOfDay.actual_TIME[0] < objOfDay.day[0])
                        {
                            objOfDay.actual_TIME[0]++
                        }
                        else if(objOfDay.actual_TIME[0] > objOfDay.day[0])
                        {
                            objOfDay.actual_TIME[0]--
                        }
                    }
                     if(objOfDay.actual_TIME[1] !== objOfDay.day[1])
                    {
                        if(objOfDay.actual_TIME[1] < objOfDay.day[1])
                        {
                            objOfDay.actual_TIME[1]++
                        }
                        else if(objOfDay.actual_TIME[1] > objOfDay.day[1])
                        {
                            objOfDay.actual_TIME[1]--
                        }
                    }
                     if(objOfDay.actual_TIME[2] !== objOfDay.day[2])
                    {
                        if(objOfDay.actual_TIME[2] < objOfDay.day[2])
                        {
                            objOfDay.actual_TIME[2]++
                        }
                        else if(objOfDay.actual_TIME[2] > objOfDay.day[2])
                        {
                            objOfDay.actual_TIME[2]--
                        }
                    }
                    body.style.backgroundImage = `linear-gradient(100deg , rgb(24, 25, 43) , rgb(${skyBlueBackground.actual_TIME[0]}, ${skyBlueBackground.actual_TIME[1]},${skyBlueBackground.actual_TIME[2]}))` 
                } 
                
            } 
        },time)
    },delay)
}

function menuScroll(option)
{
    
    
//    console.log(option)
   if(option == "Home")
   {
        window.scrollTo({
        top: 0, // Remplacez par la position y souhaitée
        behavior: 'smooth'
    });
    
   }
   else if(option === "Skills")
   {
    window.scrollTo({
        top: 900, // Remplacez par la position y souhaitée
        behavior: 'smooth'
    });
   }
   else if(option === "About")
   {
    window.scrollTo({
        top: 2500, // Remplacez par la position y souhaitée
        behavior: 'smooth'
    });
   }
   else if(option === "Contact")
   {
    window.scrollTo({
        top: 3400, // Remplacez par la position y souhaitée
        behavior: 'smooth'
    });
   }
//    console.log(option)      
}


// ALL FUNCTIONS CALLED DOWN HERE  ↓↓↓ 
day_night(1000,90,skyBlueBackground) // LUMINAIRES FONCTIONALITY 




// Mobile part
const mobile_options = document.querySelector(".mobile_options");
const mobile_options_activated = document.querySelector(".mobile_options_activated")
const exit_mobile_option = document.querySelector("#exit")

mobile_options.addEventListener("click",() =>{
    mobile_options.style.display = "none"
    mobile_options_activated.style.display = "flex"
})


exit_mobile_option.addEventListener("click",() =>{
    mobile_options.style.display = "flex"
    mobile_options_activated.style.display = "none"
})

