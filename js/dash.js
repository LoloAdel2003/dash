let search=document.getElementById("searchinput");
let specialicon =document.getElementById("specialicon")
let sidebar1 =document.getElementById("sidebar1")
let searchicon =document.getElementById("search-icon")

searchicon.onclick= ()=>
    {
        // searchicon.nextElementSibling.placeholder.style.cssText="color:gray "
        search.style.cssText="border-color:gray;cursor:text"

    }
window.onresize=()=>{
    if(window.innerWidth > 600){
        searchicon.nextElementSibling.style.cssText = "border-color: gray; cursor: text";
    }
    if(window.innerWidth <= 600){
        searchicon.nextElementSibling.style.cssText = "border-color: transparent; cursor: default";
    }
    
}
    window.addEventListener("click",(e)=>{
        if (e.target.id !== "search-icon" && e.target.id !== "searchinput" && window.innerWidth <= 600) {       
            searchicon.nextElementSibling.style.cssText = "border-color: transparent; cursor: default";
        }
        
       if(e.target.id != "specialicon")
    sidebar1.style.left= "-16.66%"
        
    })

    specialicon.addEventListener("click" , ()=> {
        sidebar1.style.left=0
})

