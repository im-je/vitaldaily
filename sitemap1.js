function loadtoc(data) {
    var toc = '<ul>';
    var items = data.feed.entry;
    for (var i = 0; i < items.length; i++) {
        var title = items[i].title.$t;
        var url = items[i].link[0].href;
        toc += '<li><a href="' + url + '">' + title + '</a></li>';
    }
    toc += '</ul>';
    document.getElementById('sitemap').innerHTML = toc;
}
