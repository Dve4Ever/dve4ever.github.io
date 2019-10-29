document.addEventListener("readystatechange", function (event) {
    if (document.readyState === "complete") {

        ctxmenu.attach("html", [
            {
                text: "Links",
                tooltip: "Links"
            },
            {
                href: "https://youtube.com/dev4ever",
                target: "_blank",
                text: "YouTube",
                tooltip: "Subscribe to my YT"
            },
            {
                href: "https://twitter.com/DevooooYT",
                target: "_blank",
                text: "Twitter",
                tooltip: "Follow my Twitter"
            },
            {
                href: "https://instagram.com/mrdevoooo",
                target: "_blank",
                text: "Instagram",
                tooltip: "Follow my Instagram"
            },
            });
            return m;
        });

        function menuception(array) {
            if (array.length === 0) { return []; }

            return [{
                text: array.shift(),
                subMenu: menuception(array)
            }];
        }
