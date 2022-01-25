if (document.querySelector(".menu_items")) {
    Array.from(document.querySelector(".menu_items").children).forEach((item, i) => {
        item.style.transitionDelay = .47 + i / 250 + "s";
    });
}

document.onkeydown = function(e) {
    if (e.keyCode == 27) {
        toggle_shazam();
	clickme();
    }
};

function toggle_shazam() {
    if (!document.querySelector(".page").classList.contains("shazam")) {
        show_shazam();
    } else {
        hide_shazam();
    }
}
function show_shazam() {
    document.querySelector(".page").classList.add("shazam");
    document.querySelector(".menu_toggle").style.backgroundColor = "transparent";
    move_notificationcount(1);
    clickme();
}
function hide_shazam() {
    document.querySelector(".page").classList.remove("shazam");
    document.querySelector(".menu_toggle").style.backgroundColor = "var(--blueraspberry)";
    hide_user_menu();
    move_notificationcount(0);
}

function toggle_user_menu() {
    if (document.querySelector(".user_menu").classList.contains("invisible")) {
        show_user_menu();
    } else {
        hide_user_menu();
    }
}
function show_user_menu() {
    move_notificationcount(2);
    document.querySelector(".user_menu").classList.remove("invisible");
}
function hide_user_menu() {
    move_notificationcount(1);
    document.querySelector(".user_menu").classList.add("invisible");
}

function move_notificationcount(pos) {
    var count = document.getElementById("notificationcount");
    if (count) {
        switch(pos) {
            case 0:
                count.style.left = "80px";
                count.style.top = "50px";
                break;
            case 1:
                count.style.left = "53px";
                count.style.top = "calc(100% - 80px)";
                break;
            case 2:
                var btn = document.getElementById("notificationbtn");
                count.style.left = btn.getBoundingClientRect().right - 16 + "px";
                count.style.top = btn.getBoundingClientRect().top + 25 + "px";
                break;
        }
    }
}

function external_link(event, link) {
    if (link.href.startsWith("https://" + window.location.hostname + "/")) {
        return true;
    }

    event.preventDefault();
    if (confirm("You are leaving ROVR. Are you sure you want to visit " + link.href + "? It could be sketchy!")) {
        window.open(link.href, "_blank", "noopener");
    }
}

function select_tab(tab, content) {
    document.querySelector(".tabs .active").classList.remove("active");
    tab.classList.add("active");

    document.querySelector(".tab_content.active").classList.remove("active");
    document.getElementById(content).classList.add("active");
}

function resize_tabs() {
    if (document.querySelector(".tabs")) {
        Array.from(document.getElementsByClassName("tabs")).forEach((tabs) => {
            if (tabs.scrollHeight > tabs.clientHeight || tabs.scrollWidth > tabs.clientWidth) {
                tabs.classList.add("overflown");
            } else {
                tabs.classList.remove("overflown");
            }
        });
    }
}
window.addEventListener('load', function(event) {
    resize_tabs();
}, true);
window.addEventListener('resize', function(event) {
    resize_tabs();
}, true);

var clickedme = localStorage.getItem("clickedme");
if (!clickedme) {
    document.querySelector(".clickme").style.display = "block";
}
function clickme() {
    document.querySelector(".clickme").style.display = "none";
    localStorage.setItem("clickedme", "true");
}
