projects = document.getElementsByClassName("project")
Array.from(projects).forEach((elem) => {
    elem.addEventListener("click", (_elem) => {
        selected = 0;
        elem.classList.forEach((_class) => {
            if (_class == "selected"){
                selected = 1;
            }
        })
        youtube_link = elem.children[2];
        programming_languages = document.getElementById("programming_languages")
        if (selected == 0){
            elem.style.transform = "scale(2.0)"
            elem.style.width = "49%";
            elem.style.marginLeft = elem.getBoundingClientRect().width * 0.4 + "px";
            elem.style.marginBottom = elem.getBoundingClientRect().height + "px";
            elem.style.marginTop = elem.getBoundingClientRect().height + "px";
            if (youtube_link){
                youtube_link.style.display = "inline";
            }
            below_programming_langauges = elem.getBoundingClientRect().y > programming_languages.getBoundingClientRect().bottom
            if (!below_programming_langauges){
                diff = elem.getBoundingClientRect().bottom - programming_languages.getBoundingClientRect().y + 150;
                programming_languages.style.marginTop = diff + "px";

            }
            elem.classList.add("selected");
        }else if (selected == 1){
            elem.style.width = "60%";
            elem.style.transform = "scale(1.0)"
            elem.style.marginLeft = "0%";
            elem.style.marginBottom = "50px";
            elem.style.marginTop = "0px";
            programming_languages.style.marginTop = "0px";
            if (youtube_link){
                youtube_link.style.display = "none";
            }
            elem.classList.remove("selected");
        }
    })
})
