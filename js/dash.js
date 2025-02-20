let search=document.getElementById("searchinput");
let specialicon =document.getElementById("specialicon")
let sidebar1 =document.getElementById("sidebar1")
let searchicon =document.getElementById("search-icon")
let ture = document.getElementById("True");
let falseElement = document.getElementById("False");
let checkicon = document.getElementById("check-icon");

checkicon.onclick = () => {
    let x = window.getComputedStyle(ture).getPropertyValue("z-index"); 
    let zIndexValue = parseInt(x) || -1; // Convert to number or default to -1

    if (zIndexValue === -1) {  
        ture.style.zIndex = "4";  

        // Remove 'left' only if it's set
        if (window.getComputedStyle(ture).getPropertyValue("left") !== "auto") {
            ture.style.removeProperty("left");
            falseElement.style.removeProperty("left");

        }

        ture.style.right = "5px"; 
        falseElement.style.right = "5px";
        checkicon.style.backgroundColor = "var(--blue-color)";

    } else {
        ture.style.zIndex = "-1";  

        // Remove 'right' only if it's set
        if (window.getComputedStyle(ture).getPropertyValue("right") !== "auto") {
            ture.style.removeProperty("right");
            falseElement.style.removeProperty("right");

        }

        ture.style.left = "5px"; 
        falseElement.style.left = "5px";
        checkicon.style.backgroundColor = "rgba(128, 128, 128, 0.26)";
    }
};

//\
let ture1 = document.getElementById("True1");
let falseElement1 = document.getElementById("False1");
let checkicon1 = document.getElementById("check-icon1");

checkicon1.onclick = () => {
    let x = window.getComputedStyle(ture1).getPropertyValue("z-index"); 
    let zIndexValue = parseInt(x) || -1; // Convert to number or default to -1

    if (zIndexValue === -1) {  
        ture1.style.zIndex = "4";  

        // Remove 'left' only if it's set
        if (window.getComputedStyle(ture1).getPropertyValue("left") !== "auto") {
            ture1.style.removeProperty("left");
            falseElement1.style.removeProperty("left");

        }

        ture1.style.right = "5px"; 
        falseElement1.style.right = "5px";
        checkicon1.style.backgroundColor = "var(--blue-color)";

    } else {
        ture1.style.zIndex = "-1";  

        // Remove 'right' only if it's set
        if (window.getComputedStyle(ture1).getPropertyValue("right") !== "auto") {
            ture1.style.removeProperty("right");
            falseElement1.style.removeProperty("right");

        }

        ture1.style.left = "5px"; 
        falseElement1.style.left = "5px";
        checkicon1.style.backgroundColor = "rgba(128, 128, 128, 0.26)";
    }
};

//
searchicon.onclick= ()=>
    {
        // searchicon.nextElementSibling.placeholder.style.cssText="color:gray "
        search.style.cssText="border-color:gray;cursor:text; padding-left:5px"
        searchicon.style.display="none"
        search.focus()
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
            searchicon.style.display="block"

        }
        
       if(e.target.id != "specialicon")
    sidebar1.style.left= "-16.66%"
        
    })

    specialicon.addEventListener("click" , ()=> {
        sidebar1.style.left=0
})

