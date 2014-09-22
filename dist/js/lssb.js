!function() {
    function popup(url, title, height, width) {
        var st = window.screenTop;
        var sl = window.screenLeft;
        var ih = window.innerHeight;
        var iw = window.innerWidth;
        var ch = document.documentElement.clientHeight;
        var cw = document.documentElement.clientWidth;

        var screenTop = void(0) !== st ? st : screen.top;
        var screenLeft = void(0) !== sl ? sl : screen.left;
        var windowHeight = ih ? ih : ch ? ch : screen.height;
        var windowWidth = iw ? iw : cw ? cw : screen.width;

        var top = windowHeight / 2 - height / 2 + screenTop;
        var left = windowWidth / 2 - width / 2 + screenLeft;

        var popup = window.open(
            url,
            title,
            'scrollbars=yes,width=' + width
            + ',height=' + height
            + ',top=' + top
            + ',left=' + left
        );

        if (window.focus) {
            popup.focus();
        }
    }

    function click(event) {
        event.preventDefault();
        popup(
            this.getAttribute('href'),
            this.querySelector('.lssb-text').textContent,
            this.getAttribute('data-height'),
            this.getAttribute('data-width')
        );
    }

    document.addEventListener('DOMContentLoaded', function() {
        var links = document.querySelectorAll('.lssb-btn.popup');
        var i = 0;

        for (; i < links.length; i++) {
            links[i].addEventListener('click', click, false);
        }
    });
}();
