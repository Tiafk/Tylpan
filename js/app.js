let animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    
    function animOnScroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHight / animStart;
            if(animItemHight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight/ animStart;
            }
            console.log(animItemOffset);
            
            if((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHight)) {
                animItem.classList.add('_active');
            } else {
                if(!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect();
            scrollLeft = window.scrollX,
            scrollTop = window.scrollY;
            
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}

