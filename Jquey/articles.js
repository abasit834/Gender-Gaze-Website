
$(document).ready(function() {
    
    const icon=$("#icon");
    const sidebar=$(".sidebar");
    const close=$("#close");
    
    
    icon.click(function(){
    
        sidebar.addClass("see");
    });
    
    close.click(function(){
        sidebar.removeClass("see");
    });


    // Function to add 'in-view' class when element is visible
    function onIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('in-view');
                observer.unobserve(entry.target); // Stop observing after adding the class
            }
        });
    }

    // Create a new Intersection Observer
    let observer = new IntersectionObserver(onIntersection, {
        threshold: 0 // Trigger when 10% of the element is visible
    });

    // Observe all elements with .animate and .animateText classes
    $('.animate, .animateText').each(function() {
        observer.observe(this);
    });


const btn=document.getElementsByClassName("card");

var num = 1;
var len = btn.length;

for (var i = 0; i < btn.length; i++) {
    if (num == 0) num++;

    // Create a closure to capture the current value of `num`
    (function (num) {
        btn[i].addEventListener("click", () => {
            window.location = `../HTML/article${num}.html`;
        });
    })(num);

    num = (num + 1) % (len + 1);
    if (num === 0) num++;
}


});




