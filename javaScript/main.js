// Start Sittings
let rootHtml = document.querySelector(":root");
let SittingIcon = document.querySelector(".sittings .sitting-icon");
let langSittingSpans = document.querySelectorAll(".sittings .content .lang span");
let arLang = document.querySelector(".sittings .content .lang .ar");
let enLang = document.querySelector(".sittings .content .lang .en");
let linkLanguageAr = document.querySelector("head .linkAr");
let colorSittingSpans = document.querySelectorAll(".sittings .content .colors span");

// When Click On Sitting Icon Show Sitting
SittingIcon.addEventListener("click", () => {SittingIcon.nextElementSibling.classList.toggle("content-clicked")})
// Start Language Sitting
// Start Local Storage
if (window.localStorage.getItem("Language") != null) {
    // Remove Clicked Properties From All Ohters
    langSittingSpans.forEach((lang) => lang.classList.remove("lang-clicked"));
    // Change Languages
    if (window.localStorage.getItem("Language") == "ar") {
        arLang.classList.add("lang-clicked"); // Add Class Clicked To Current Language
        document.querySelector("html").setAttribute("dir", "rtl");
        linkLanguageAr.href = href="css/rtl.css";
    }
    else if (window.localStorage.getItem("Language") == "en") {
        enLang.classList.add("lang-clicked"); // Add Class Clicked To Current Language
        document.querySelector("html").setAttribute("dir", "ltr");
        linkLanguageAr.href = href="";
    }
}
// End Local Storage
langSittingSpans.forEach((lang) => {
    lang.addEventListener("click", () => {
        // Remove Clicked Properties From All Ohters
        langSittingSpans.forEach((lang) => lang.classList.remove("lang-clicked"));
        // Add To Clicked One
        lang.classList.add("lang-clicked");
        // Change Languages
        if (lang.classList.contains("ar")) {
            document.querySelector("html").setAttribute("dir", "rtl");
            linkLanguageAr.href = href="css/rtl.css";
            // Save To Local Storage 
            window.localStorage.setItem("Language", "ar");
        }
        else if (lang.classList.contains("en")) {
            document.querySelector("html").setAttribute("dir", "ltr");
            linkLanguageAr.href = href="";
            // Save To Local Storage 
            window.localStorage.setItem("Language", "en");
        }
    })
})
// End Language Sitting
// Start Colors Sitting 
// Srart Local Storage
if (window.localStorage.getItem("pageColor") != null) {
    let savedPageColor = window.localStorage.getItem("pageColor");
    rootHtml.style.setProperty("--main-color", savedPageColor);
    // Remove Clicked Properties From All Ohters
    colorSittingSpans.forEach((colors) => colors.classList.remove("color-clicked"));
    // Add Clicked To Current Color 
    colorSittingSpans.forEach((colors) => {if (window.getComputedStyle(colors).getPropertyValue("background-color") == savedPageColor) {colors.classList.add("color-clicked")}})
}
// End Local Storage
colorSittingSpans.forEach((colors) => {
    colors.addEventListener("click", () => {
        // Remove Clicked Properties From All Ohters
        colorSittingSpans.forEach((colors) => colors.classList.remove("color-clicked"));
        // Add To Clicked One
        colors.classList.add("color-clicked");
        // Change Page Color
        rootHtml.style.setProperty("--main-color", window.getComputedStyle(colors).backgroundColor)
        // Save To Local Storage 
        window.localStorage.setItem("pageColor", window.getComputedStyle(colors).backgroundColor)
    })
})
// End Colors Sitting 
// End Sittings
// Start Arrow Page Up
let arrowPage = document.querySelector(".arrow-page-up");
// Arrow Display
addEventListener("scroll", () => {window.scrollY > 800 ?  arrowPage.style.display = "unset": arrowPage.style.display = "none"})
arrowPage.addEventListener("click", () => {window.scrollTo(0,0)})
// End Arrow Page Up

// Start Scroll To Sections
let links = document.querySelectorAll("header .nav ul li");

links.forEach((link) =>{link.addEventListener("click", () => {window.scrollTo(0,document.querySelector("\." + link.getAttribute("id")).offsetTop)})})
// End Scroll To Sections
// Start Nav Other-things Appearing
let otherLinksDiv = document.querySelector("header nav ul .other-links");
let otherLinksList = document.querySelector("header .nav ul li:last-of-type");
// Mouse On List Element
otherLinksList.addEventListener("mouseover", () => {otherLinksDiv.classList.add("appear")});
otherLinksList.addEventListener("mouseout", () => {otherLinksDiv.classList.remove("appear")});
// Mouse On OtherThing Itself
otherLinksDiv.addEventListener("mouseover", () => {otherLinksDiv.classList.add("appear")});
otherLinksDiv.addEventListener("mouseout", () => {otherLinksDiv.classList.remove("appear")});
// End Nav Other-things Appearing

// Start Our Skills Progress
let progress = document.querySelectorAll(".our-skills .box .skill .progress span");
addEventListener("scroll", () => {
    if (window.scrollY > document.querySelector(".our-skills").offsetTop) {
        progress.forEach(function(skill) {skill.style.width = skill.id})
    }
    else {
        progress.forEach(function(skill) {skill.style.width = 0})
    }
})
// End Our Skills Progress

// Start Latest Events Section
// Start Time Counter
let days = document.querySelector(".events .counter .days h1");
let hours = document.querySelector(".events .counter .hours h1");
let minutes = document.querySelector(".events .counter .minutes h1");
let seconds = document.querySelector(".events .counter .seconds h1");

let secondsCounter = setInterval(() => {
    // Calculate Event Date
    let oneDay = 1000 * 60 * 60 * 24;
    let eventDate = new Date(2025,12,29);
    let dateNow = new Date();
    // Assign Values
    seconds.innerHTML = 60 - dateNow.getSeconds();
    minutes.innerHTML = 60 - dateNow.getMinutes();
    hours.innerHTML = 24 - dateNow.getHours();
    days.innerHTML = Math.round((eventDate - dateNow) / oneDay);
    // Stop Counter When Event Comes
    if (parseInt(days.innerHTML) == 0) {clearInterval(secondsCounter)}
}, 1000)
// End Time Counter
// Start Email Placeholder
let email = document.querySelector('.events .container .email input[type="email"]');
email.addEventListener("mouseover", () => {email.setAttribute("placeholder"," ")})
email.addEventListener("mouseout", () => {email.setAttribute("placeholder","Enter Your Email")})
// End Email Placeholder
// End Latest Events Section

// Start Move Between Videoes
let titles = document.querySelectorAll(".top-videos .video-titles .titles > div");
let imgVideo = document.querySelector(".top-videos .container .videos img");
let arrowLeftVidio = document.querySelector(".top-videos .container .videos .arrow-left");
let arrowRightVidio = document.querySelector(".top-videos .container .videos .arrow-right");

// Start Move Between Videoes Using Click On Vidio Titles
titles.forEach(function(title, index){
    title.addEventListener("click", function(){
        // Remove Class Clicked From Others
        titles.forEach((tit) => {tit.classList.remove("video-clicked")})
        // Add Class Clicked To Clicked One
        this.classList.add("video-clicked");
        // Change Img According To Its Title
        imgVideo.setAttribute("src", "../" + this.getAttribute("id"));
        // Arrow Visibility Function
        arrowVisibility(title, index);
    })
    // Arrow Visibility Function
    arrowVisibility(title, index);
});
// End Move Between Videoes Using Click On Vidio Title
// Start Move Between Videoes Using Arrows
arrowRightVidio.addEventListener("click", function(){
    let currentClicked = document.getElementsByClassName("video-clicked");
    // Add Clicked Class To Next Then Remove From Current
    console.log(currentClicked.item(0).nextElementSibling)
    currentClicked.item(0).nextElementSibling.classList.add("video-clicked");
    currentClicked.item(0).classList.remove("video-clicked");
    // Change img according to its title
    imgVideo.setAttribute("src", "../" + currentClicked.item(0).getAttribute("id"));
    // Arrow Visibility Function
    titles.forEach((title,index) => {arrowVisibility(title, index)})
    
})
arrowLeftVidio.addEventListener("click", function(){
    let currentClicked = document.getElementsByClassName("video-clicked");
    // Add Clicked Class To Previous Then Remove From Current
    currentClicked.item(0).previousElementSibling.classList.add("video-clicked");
    currentClicked.item(0).nextElementSibling.classList.remove("video-clicked");
    // Change img according to its title
    imgVideo.setAttribute("src", "../" + currentClicked.item(0).getAttribute("id"));
    // Arrow Visibility Function
    titles.forEach((title,index) => {arrowVisibility(title, index)})
})
// End Move Between Videoes Using Arrows
// Start Arrow Visibility Function
function arrowVisibility(title, index) {
    if (title.classList.contains("video-clicked")) {
        if (index == 0) {arrowLeftVidio.style.visibility = "hidden"}
        else {arrowLeftVidio.style.visibility = "unset"}
    }
    // Make ArrowRight Disappear If Last Title Was Clicked
    if (title.classList.contains("video-clicked")) {
        if (index == titles.length -1) {arrowRightVidio.style.visibility = "hidden"}
        else {arrowRightVidio.style.visibility = "unset"}
    }
}
// End Arrow Visibility Function
// End Move Between Videoes

// Start States Counter
let stateSection = document.querySelector(".states");
let stateNum = document.querySelectorAll(".states .content .box > h1");

addEventListener("scroll", () => {
    if (window.scrollY > (document.querySelector(".states").offsetTop - 180)) {
    setInterval(() => {
        stateNum.forEach((num) => {
            let strToNum = parseInt(num.innerHTML);
            if (strToNum != num.getAttribute("id")) {
                strToNum +=1;
                num.innerHTML = strToNum;
            }
        })
    },30)
    }
})
// End States Counter

// Start Discount Form
let AllInput = document.querySelectorAll('.discount .request form .input');
let requestName = document.querySelector('.discount .request form input[id="name"]');
let requestEmail = document.querySelector('.discount .request form input[id="email"]');
let requestPhone = document.querySelector('.discount .request form input[id="phone"]');
let requestTextArea = document.querySelector('.discount .request form textarea');
let requestSubmit = document.querySelector('.discount .request form input[type="submit"]');
let errorMessage = document.querySelectorAll(".discount .request form .error");

AllInput.forEach((input) => {
    // Remove Error Message On Focus
    input.addEventListener("focus", () => {input.nextElementSibling.style.visibility = "hidden"})
    // Go To Next Input Field When Press Enter Key
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            if (input.nextElementSibling.nextElementSibling.classList.contains("input")) {
                input.nextElementSibling.nextElementSibling.focus();
            }
        }
    })
})
// Name Field
requestName.addEventListener("blur", function() {
    ifInputEmpty(requestName);
    ifInputNumber(requestName);
})
// Email Field
requestEmail.addEventListener("blur", function() {
    ifInputEmpty(requestEmail);
    // Check Valid Email
    let regExpEmail = /\w+@\w+\.\w+/ig; 
    if (regExpEmail.test(requestEmail.value) == false) {
        requestEmail.nextElementSibling.style.visibility = "visible";
        requestEmail.nextElementSibling.innerHTML = "Email must be 'text@text.com'";
    }
})
// Phone Field
requestPhone.addEventListener("blur", function() {
    ifInputEmpty(requestPhone);
    ifInputString(requestPhone)
})
// Text Erae Field
requestTextArea.addEventListener("blur", function() {
    ifInputEmpty(requestTextArea);
})

// Start Functions For Input Fields Validity
function ifInputEmpty(input) {
    if (input.value == "") {
        input.nextElementSibling.style.visibility = "visible";
        input.nextElementSibling.innerHTML = "This field cant't be empty!";
    }
}
function ifInputNumber(input) {
    let regExpNumber = /\d/g;
    if (regExpNumber.test(input.value)) {
        input.nextElementSibling.style.visibility = "visible";
        input.nextElementSibling.innerHTML = "This field cant't be number!";
    }
}
function ifInputString(input) {
    let regExpString = /[a-z]/ig;
    if (regExpString.test(input.value)) {
        input.nextElementSibling.style.visibility = "visible";
        input.nextElementSibling.innerHTML = "This field cant't be text!";
    }
}
// End Functions For Input Fields Validity
// Prevent Submit In Some Cases
requestSubmit.addEventListener("click", function() {
    document.querySelector(".discount  .request form").addEventListener("submit", function(form) {
        // Prevent Submit If There Is Error In Input Field
        errorMessage.forEach((error) => {
            if (error.style.visibility == "visible") {return form.preventDefault()}
        })
        // Prevent Submit If Any Field Is Empty
        AllInput.forEach((input) => {
            if (input.value == "") {return form.preventDefault()}
        })
        return true
    })
})
// End Discount Form

