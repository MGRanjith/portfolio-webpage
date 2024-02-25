// toggler switcher
const styleswitcherToggle=document.querySelector('.style-switcher-toggler');
styleswitcherToggle.addEventListener("click",()=>{
    document.querySelector('.style-switcher').classList.toggle("open")

})    //  hide style -swicher on scrool
    
    window.addEventListener("scroll",()=>{
        if( document.querySelector('.style-switcher').classList.contains("open"))
        {
            document.querySelector('.style-switcher').classList.remove("open")
        }
    })
    
   // theme color

   const alternate=document.querySelectorAll(".alternate-style")
    function setActivedStyle(color)
  {
    alternate.forEach((style)=>{
    if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled")
        }
        else
        { 
            style.setAttribute("disabled","true")
        }
    })  
  }


//   darkmode

const daynight=document.querySelector(".day-night");
daynight.addEventListener("click",()=>{
    daynight.querySelector("i").classList.toggle("bi-sun");
    daynight.querySelector("i").classList.toggle("bi-moon-fill");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        daynight.querySelector("i").classList.add("bi-sun")
    }
    else{
        daynight.querySelector("i").classList.add("bi-moon-fill")
    }
})


// aside
const nav=document.querySelector(".nav")
 navList=nav.querySelectorAll("li")
 totalnavList=navList.length,
 allSection=document.querySelectorAll(".section")
 totalSection=allSection.length;
 
 for(let i=0;i<totalnavList;i++)
 {
    const a=navList[i].querySelector("a");
    a.addEventListener("click",function()
    {
      // removeBackSection()
        for(let i=0; i<totalSection;i++){
            allSection[i].classList.remove("back-section")
        }
        for(let j=0; j<totalnavList; j++)
        {
            if(navList[j].querySelector("a").classList.contains("active"))
            {
               // addBackSection()
                allSection[j].classList.add("back-section")
            }
            navList[j].querySelector("a").classList.remove("active")
        }
        this.classList.add("active")
        showSection(this)
        if(window.innerWidth<1200)
        {
            asidesectionbtn()
        }   
    })
 }
   function showSection(element)
   {
    for(let i=0; i<totalSection;i++){
        allSection[i].classList.remove("active")
    }
    const target=element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
   }
    // function updatenav(element)
    // {
    //     for(let i=0;i<totalnavList;i++){
    //       navList[i].querySelector("a").classList.remove("active");
    //       const target=element.getAttribute("href").split("#")[1];
    //       if(target===navList[i].querySelector("a").getAttribute("href").split("#")[0])
    //       {
    //         navList[i].querySelector("a").classList.add("active");
    //       }
    //     }
   
    // }




   document.querySelector(".hire-me").addEventListener("click",function()
   {
     const sectionIndex=this.getAttribute("data-section-index")
     console.log(sectionIndex)
     showSection(this)
     updatenav(this)
   })
   const navbtn=document.querySelector(".nav-toggler");
     aside=document.querySelector(".aside");
     navbtn.addEventListener("click",()=>
     {
        asidesectionbtn();
       
     })
     function asidesectionbtn()
     {
        aside.classList.toggle("open")
        navbtn.classList.toggle("open")
        for(let i=0;i<totalSection;i++)
        {
            allSection[i].classList.toggle("open")
        }
     }

