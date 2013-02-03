function loadImages() {
    $.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?',
        function (data) {
            $.each(data.items, function (i, item) {
                $("<img/>").attr({
                    "src": item.media.m,
                    "title": item.title,
                    "alt": item.title
                }).prependTo("#flimages").wrap("<a href='" + item.media.m + "'></a>");
                $.getScript('script/html5gallery.js'), function (data, textStatus, jqxhr) { };
                document.getElementById("imgLoader").style.display = "none";
            });
        })
}