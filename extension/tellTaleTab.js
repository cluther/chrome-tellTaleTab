var head = document.getElementsByTagName("head")[0];
var site = null;
var favicon = null;
var previousLocation = 'INVALID';
var previousText = 'INVALID';
var poll_interval = null;
var init_timeout = null;

initialize();

function initialize() {
    if (!site) {
        chrome.extension.sendRequest({'name':'getSite', 'url':location.href},
            function(response) {
                site = response;
            }
        );
        init_timeout = setTimeout(initialize, 500);
    } else if (site.id != 'NOTFOUND') {
        poll();
        poll_interval = setInterval(poll, site.poll.frequency);
    }
}

function poll() {
    if (site.poll.method == "atom") {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", site.poll.url, true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                var unread = xhr.responseXML.getElementsByTagName('entry');
                update(unread.length.toString());
            }
        }
    }

    else if (site.poll.method == "titleMatch") {
        var match = document.title.match(site.poll.regex);
        if (match && match.length == 2) {
            update(match[1]);
        } else {
            update("0")
        }
    }

    else if (site.poll.method == "custom") {
        var doit = new Function(site.poll.doit);
        if (doit)
            doit()
    }
}

function update(text) {
    if (document.location.href == previousLocation && text == previousText)
        return;

    chrome.extension.sendRequest(
        {'name':'getIcon', 'site_id':site.id, 'text':text},

        function(response) {
            if (!response)
                return;

            previousLocation = document.location.href;
            previousText = text;

            favicon = document.createElement("link");
            favicon.type = "image/x-icon";
            favicon.rel = 'SHORTCUT ICON';
            favicon.href = response;

            var links = head.getElementsByTagName("link");
            for (var i = 0; i < links.length; i++) {
                if (links[i].rel.toUpperCase() == 'SHORTCUT ICON') {
                    head.removeChild(links[i]);
                }
            }

            head.appendChild(favicon);

            var hack_frame = document.createElement("iframe");
            hack_frame.width = 0;
            hack_frame.height = 0;
            hack_frame.frameborder = 0;
            hack_frame.src = response;
            hack_frame.id = 'hack_frame';
            document.body.appendChild(hack_frame);
            document.body.removeChild(hack_frame);
        }
    );

    setTimeout("update(" + text + ")", 500);
}
