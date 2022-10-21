(() => {
    "use strict";
    const body = document.body;
    (function() {
        let currentBrowser;
        if (navigator.userAgent.indexOf("Firefox") > -1) currentBrowser = "firefox"; else if (navigator.userAgent.indexOf("Opera") > -1) currentBrowser = "opera"; else if (navigator.userAgent.indexOf("Trident") > -1) currentBrowser = "explorer"; else if (navigator.userAgent.indexOf("Edge") > -1) currentBrowser = "edge"; else if (navigator.userAgent.indexOf("Chrome") > -1) currentBrowser = "chrome"; else if (navigator.userAgent.indexOf("Safari") > -1) currentBrowser = "safari"; else currentBrowser = "unknown";
        console.log("You are using: " + currentBrowser);
        document.documentElement.classList.add(currentBrowser);
    })();
    let isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
        }
    };
    (function checkMobile() {
        if (isMobile.any()) document.documentElement.classList.add("_mobile");
    })();
    (function isWebp() {
        function testWebP(callback) {
            var webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            if (true === support) document.documentElement.classList.add("_webp"); else document.documentElement.classList.add("_no-webp");
        }));
    })();
    function menuInit() {
        let burger = document.querySelector(".menu-icon");
        let menu = document.querySelector(".menu");
        if (burger && menu) {
            burger.onclick = () => {
                burger.classList.toggle("_active");
                menu.classList.toggle("_active");
                body.classList.toggle("_locked");
            };
            menu.querySelectorAll(".menu__link").forEach((link => {
                link.addEventListener("click", (e => {
                    if (e.target.closest(".menu__item")) {
                        burger.classList.remove("_active");
                        menu.classList.remove("_active");
                        body.classList.remove("_locked");
                    }
                }));
            }));
        }
    }
    menuInit();
})();