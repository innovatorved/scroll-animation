const observeForScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
});

const hiddenElements = document.querySelectorAll('.hidden,.Inhidden');

hiddenElements.forEach((ele)=>{
    observeForScroll.observe(ele);
})