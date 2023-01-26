let themeChanger = document.querySelector("#theme")
let changeTheme = document.querySelector("body")

themeChanger.addEventListener("change",()=>{
    if (themeChanger.value == 1){
        changeTheme.setAttribute("id", "theme1");
    }else if(themeChanger.value ==2){
        changeTheme.setAttribute("id", "theme2");
    }else if(themeChanger.value == 3){
        changeTheme.setAttribute("id", "theme3");
    }
    console.log(changeTheme.attributes);
})