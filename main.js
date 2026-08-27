projects = document.getElementsByClassName("project")
Array.from(projects).forEach((elem) => {
    elem.addEventListener("click", (_elem) => {
        selected = 0;
        elem.classList.forEach((_class) => {
            if (_class == "selected"){
                selected = 1;
            }
        })
        programming_languages = document.getElementById("programming_languages")
        if (selected == 0){
            elem.style.transform = "scale(2.0)"
            elem.style.width = "49%";
            elem.style.marginLeft = elem.getBoundingClientRect().width * 0.6 + "px";
            elem.style.marginBottom = elem.getBoundingClientRect().height + "px";
            elem.style.marginTop = elem.getBoundingClientRect().height + "px";
            below_programming_langauges = elem.getBoundingClientRect().y > programming_languages.getBoundingClientRect().bottom
            if (!below_programming_langauges){
                diff = elem.getBoundingClientRect().bottom - programming_languages.getBoundingClientRect().y + 150;
                programming_languages.style.marginTop = diff + "px";

            }
            elem.classList.add("selected");
        }else if (selected == 1){
            elem.style.width = "40%";
            elem.style.transform = "scale(1.0)"
            elem.style.marginLeft = "0%";
            elem.style.marginBottom = "50px";
            elem.style.marginTop = "0px";
            programming_languages.style.marginTop = "0px";
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

    let time = 100


    setTimeout(() => {
        elem.style.opacity = 1;
        elem.style.bottom = "0px";
        elem.style.top = "0px";
        elem.style.left = "0px";
        elem.style.right = "0px";
    }, idx*time);


    observer.unobserve(elem);
  });

}, {
    "threshold": 0.2
});
Array.from(technologies).forEach((icon, idx) => {
    observer.observe(icon)
});


Array.from(document.getElementsByTagName("github")).forEach((tag) => {
    tag.innerHTML = `

<svg height="20" width="20" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" style="fill: currentColor; margin-top: 8px;">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82A7.48 7.48 0 0 0 8 2.84c-.68.003-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.16.73.72.82 1.13.16.45.68 1.35 3.12.88.01.47.01.84.01.93 0 .22-.16.47-.55.38A8.013 8.013 0 0 1 0 8c0-4.42 3.58-8 8-8z"></path>
</svg>
    `

})
