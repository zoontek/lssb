!function() {
    // common pointers
    var w = window,
        d = document;

    function click(e) {
        e.preventDefault();
        var t = this;

        var classes = t.className.split(' ');
        var href = t.getAttribute('href');

        var url = getData(t, 'url');
        if (null === url) url = w.location.href; // fallback to window href

        if (-1 !== classes.indexOf('lssb-fb')) { // facebook
            href += '?u=' + encode(url);
        }
        else {
            href += '?url=' + encode(url);

            if (-1 !== classes.indexOf('lssb-tw')) { // twitter
                var hashtags = getData(t, 'hashtags');
                var related = getData(t, 'related');
                var via = getData(t, 'via');
                var text = getData(t, 'text');
                if (null === text) text = d.title; // fallback to window title

                href += '&text=' + encode(text);
                if (null !== hashtags) href += '&hashtags=' + encode(hashtags);
                if (null !== related) href += '&related=' + encode(related);
                if (null !== via) href += '&via=' + encode(via);
            }
        }

        var height = getData(t, 'height');
        if (null === height) height = 410; // fallback if not height
        var width = getData(t, 'width');
        if (null === width) width = 580; // fallback if not width

        popup(
            href,
            t.querySelector('.lssb-text').textContent,
            height,
            width
        );
    }

    function popup(url, title, height, width) {
        var popup = w.open(
            url,
            title,
            'scrollbars=yes,width=' + width
            + ',height=' + height
            + ',top=' + (w.innerHeight / 2 - height / 2 + w.screenY)
            + ',left=' + (w.innerWidth / 2 - width / 2 + w.screenX)
        );

        if (w.focus) {
            popup.focus();
        }
    }

    function encode(component) { // short for encodeURIComponent
        return encodeURIComponent(component);
    }

    function getData(element, attribute) { // get data-* attribute
        return element.getAttribute('data-' + attribute);
    }

    d.addEventListener('DOMContentLoaded', function() {
        var links = d.querySelectorAll('.lssb-btn');
        var i = 0;

        for (; i < links.length; i++) {
            links[i].addEventListener('click', click, false);
        }
    });
}();
