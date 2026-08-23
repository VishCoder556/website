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


technologies = document.getElementsByClassName("scroll_animate")


/* setTimeout(()=>{
Array.from(technologies).forEach((elem, count) => {
    setTimeout(() => {
        elem.style.opacity = 1;
        elem.style.bottom = "0px";
        console.log(elem);
    }, count * 100);
});
}, 100) */



const observer = new IntersectionObserver((entries, observer)=>{
    const view_entries = entries.filter(entry => entry.isIntersecting);

  view_entries.forEach((entry, idx) => {
    const elem = entry.target

    let time = 0

    if (elem.classList.contains("img")){
        time = 100;
    }else {
        time = 200;
    }

    setTimeout(() => {
        elem.style.opacity = 1;
        elem.style.bottom = "0px";
    }, idx*time);


    observer.unobserve(elem);
  });

}, {
    "threshold": 0.2
});
Array.from(technologies).forEach((icon, idx) => {
    observer.observe(icon)
});
