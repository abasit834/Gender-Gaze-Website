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


