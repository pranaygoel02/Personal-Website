const box = document.getElementById('my-pic');
const title = document.getElementsByClassName('.title');
const theme = document.getElementsByClassName('.theme-img');
let radioBtns = document.querySelectorAll("input[name='choose']");

$( "#title" ).hover(function(event) {
    console.log(event.clientX,event.clientY);
    box.style.top = event.clientY - 100 +'px';
    box.style.left = event.clientX - 50 +'px';
    box.style.visibility = 'visible';
},
function(){
    box.style.visibility = 'hidden';
    $("h1:first").removeClass("clip");
});

$("#theme-img").on("click",function(){
    console.log("clicked");
    if($(this).hasClass("dark-mode"))
    {
        $("img:first").removeClass("dark-mode");    
        $("img:first").attr("src","sun.png");
    }
    else{
        $("img:first").addClass("dark-mode");
        $("img:first").attr("src","moon.png");

    }
});

//education carousel
var i=0;
setInterval(function() {
    var chosen = $('#choice input[name="choose"]')[i].value;
    switch(chosen){
        case 'uem':
            $('#uem').attr('checked',true);
            $('#isc').attr('checked',false);
            $('#icse').attr('checked',false);
            $('#marks').text("9.27 CGPA");
            $("#standard").text("1st Sem");
            $('#description').text("");
            break;
        case 'isc':
            $('#uem').attr('checked',false);
            $('#isc').attr('checked',true);
            $('#icse').attr('checked',false);
            $('#marks').text("96%");
            $("#standard").text("XII (ISC)");
            $('#description').text("*Recieved proficiency in Science.");
            break;
        case 'icse':
            $('#uem').attr('checked',false);
            $('#isc').attr('checked',false);
            $('#icse').attr('checked',true);
            $('#marks').text("97%");
            $("#standard").text("X (ICSE)");
            $('#description').text("*Ranked 3rd in school.");
        break;
    }
    i++;
    if(i==3){
        i=0;
    }     
}, 2000);
$('#choice input').on('change', function(){
    var chosen = this.value;
    switch(chosen){
        case 'uem':
            $('#marks').text("9.27 CGPA");
            $("#standard").text("1st Sem");
            i=0;
        break;
        case 'isc':
            $('#marks').text("96%");
            $("#standard").text("XII (ISC)");
            $('#description').text("*Recieved proficiency in Science.");
            i=1;
        break;
        case 'icse':
            $('#marks').text("97%");
            $("#standard").text("X (ICSE)");
            $('#description').text("*Ranked 3rd in school.");
            i=2;
        break;
    }
});

const sectionOne = document.querySelector(".landing-section");
const options = {
    root: null,
    threshold: 0.5,
    rootmargin: "-150px"
};
const observer = new IntersectionObserver(function(entries,observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            console.log(entry.target);
            $("#nav-title").text("Pranay Goel");
        }
        else{ 
            $("#nav-title").text("Welcome");
        }
    });
},options);
observer.observe(sectionOne);

if ($(window).width() < 960) {
    alert('Less than 960');
 }

$("#menu-btn").click(function(){
    $(".nav-links").toggleClass("menu-display");
});

let lastScrollY = window.scrollY;
$(window).scroll(function(){
    if(window.scrollY>lastScrollY){
        console.log("down");
        if($(".nav-links").hasClass("menu-display")){
            return;
        }
        $("nav").addClass("hide-nav");
    }else{
        console.log("up");
        $("nav").removeClass("hide-nav");
    }
    lastScrollY = window.scrollY;
});