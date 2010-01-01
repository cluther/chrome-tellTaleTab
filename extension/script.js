var site_configs = [
    { // Google Reader
        "matches": [
            "http://www.google.com/reader/"
            ],
        "poll": {
            "frequency": 60000,
            "method": "atom",
            "atom_url": "http://www.google.com/reader/atom/user/-/state/com.google/reading-list?xt=user/-/state/com.google/read"
            },
        "icon": [
            ['', '', '', '#b9dd93', '#b9dd93', '#b9dd93', '#b9dd93', '#b9dd93', '#b4d98d', '#add484', '#a5ce7c', '#a0ca75', '#a0c973', '', '', ''],
            ['', '', '#acd383', '#e0fbd9', '#e3fde0', '#e6ffe5', '#e4fde0', '#dffbd9', '#daf7d1', '#d5f4c7', '#cff0bd', '#caebb3', '#c3e7a8', '#acd383', '', ''],
            ['', '', '#a0c973', '#defad7', '#e2fcde', '#cd6b6b', '#cd6b6b', '#cd6b6b', '#cd6b6b', '#cd6b6b', '#cd6b6b', '#cd6b6b', '#cd6b6b', '#cd6b6b', '#cd6b6b', ''],
            ['', '', '#9fc974', '#dbf7d2', '#cd6b6b', '#f9eded', '#fcf6f6', '#fcf6f6', '#f8ecec', '#f7e7e7', '#f5e3e3', '#f3dddd', '#efd1d1', '#eecece', '#e6b6b6', '#cd6b6b'],
            ['', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '#b9a1a1', '#ebc3c3', '#e6b6b6', '#eac0c0', '#cd6b6b'],
            ['#2a5699', '#a4bdec', '#c1d3f5', '#c1d3f5', '#9bb8f2', '#90b0ef', '#86a8ed', '#7da0e4', '#6a93db', '#5b88e6', '#4c7eca', '#2a5699', '#ebc3c3', '#e8bcbc', '#e4b2b2', '#cd6b6b'],
            ['#2a5699', '#b6cbf2', '#ffffff', '#ffffff', '#ffffff', '#c9d7f2', '#7099ee', '#5885e4', '#5381d9', '#4c7eca', '#4f7dd8', '#2a5699', '#beb2b2', '#e4b2b2', '#e8bcbc', '#cd6b6b'],
            ['#2a5699', '#abc3f5', '#e4eaf5', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#90b0ef', '#5381d9', '#4676da', '#467aca', '#2a5699', '#c5c5c5', '#edc9c9', '#e2aaaa', '#cd6b6b'],
            ['#2a5699', '#90b0ef', '#638ee9', '#638ee9', '#9bb8f2', '#edf0f6', '#ffffff', '#ffffff', '#90ade4', '#467aca', '#4676da', '#2a5699', '#c5c5c5', '#fbf3f3', '#dfa3a3', '#cd6b6b'],
            ['#2a5699', '#a4bdec', '#ffffff', '#ffffff', '#c1d3f5', '#7499e5', '#c1d3f5', '#ffffff', '#ffffff', '#608bd7', '#3c74ca', '#2a5699', '#c5c5c5', '#ffffff', '#dc9898', '#cd6b6b'],
            ['#2a5699', '#9bb8f2', '#ffffff', '#ffffff', '#ffffff', '#e4eaf5', '#638ee9', '#edf0f6', '#ffffff', '#b6cbf2', '#336cc9', '#2a5699', '#c5c5c5', '#ffffff', '#e7b9b9', '#cd6b6b'],
            ['#2a5699', '#6a93db', '#5381d9', '#7da0e4', '#f4f7fc', '#ffffff', '#b6cbf2', '#90ade4', '#ffffff', '#ffffff', '#2d69c3', '#2a5699', '#c3c2c2', '#ffffff', '#e6b6b6', '#cd6b6b'],
            ['#2a5699', '#84a5e7', '#ffffff', '#90ade4', '#7499e5', '#ffffff', '#f4f7fc', '#3c74ca', '#ffffff', '#ffffff', '#5683c6', '#2a5699', '#b28f8f', '#e6b6b6', '#d27c7c', '#cd6b6b'],
            ['#2a5699', '#6a93db', '#ffffff', '#f4f7fc', '#3c74ca', '#ffffff', '#ffffff', '#3c74ca', '#d9e3f7', '#ffffff', '#4c7eca', '#2a5699', '#a25d5d', '#cd6b6b', '#cd6b6b', ''],
            ['#2a5699', '#3c74ca', '#608bd7', '#6a93db', '#3c74ca', '#6892d0', '#608bd7', '#2b65c2', '#467aca', '#4c7eca', '#235daf', '#2a5699', '', '', '', ''],
            ['', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '', '', '', '', '']
        ]
    },

    { // Gmail
        "matches": [
            "https://mail.google.com/mail/"
            ],
        "poll": {
            "frequency": 30000,
            "method": "atom",
            "atom_url": "https://mail.google.com/mail/feed/atom"
            },
        "icon": [
            ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['#da3838', '#da3838', '#da3838', '#f28181', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f28181', '#da3838', '#da3838', '#da3838'],
            ['#da3838', '#da3838', '#da3838', '#da3838', '#ffb6b6', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffb6b6', '#da3838', '#da3838', '#da3838', '#da3838'],
            ['#da3838', '#da3838', '#f28181', '#e95a5a', '#da3838', '#ffb6b6', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffb6b6', '#da3838', '#e95a5a', '#f28181', '#da3838', '#da3838'],
            ['#da3838', '#da3838', '#ffffff', '#f28181', '#e95a5a', '#da3838', '#ffb6b6', '#ffffff', '#ffffff', '#ffb6b6', '#da3838', '#e95a5a', '#f28181', '#ffffff', '#da3838', '#da3838'],
            ['#da3838', '#da3838', '#ffffff', '#ffffff', '#f28181', '#e95a5a', '#da3838', '#ffb6b6', '#ffb6b6', '#da3838', '#e95a5a', '#f28181', '#ffffff', '#ffffff', '#da3838', '#da3838'],
            ['#da3838', '#da3838', '#ffffff', '#ffffff', '#ffb6b6', '#f28181', '#e95a5a', '#da3838', '#da3838', '#e95a5a', '#f28181', '#ffb6b6', '#ffffff', '#ffffff', '#da3838', '#da3838'],
            ['#da3838', '#da3838', '#ffffff', '#ffe2e2', '#f9a7a7', '#ffb6b6', '#f28181', '#e95a5a', '#e95a5a', '#f28181', '#ffb6b6', '#f9a7a7', '#ffe2e2', '#ffffff', '#da3838', '#da3838'],
            ['#da3838', '#da3838', '#ffe2e2', '#f9a7a7', '#ffe2e2', '#ffffff', '#ffffff', '#f28181', '#f28181', '#ffffff', '#ffffff', '#ffe2e2', '#f9a7a7', '#ffe2e2', '#da3838', '#da3838'],
            ['#da3838', '#da3838', '#f9a7a7', '#ffe2e2', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffe2e2', '#f9a7a7', '#da3838', '#da3838'],
            ['#da3838', '#da3838', '#ffe2e2', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffe2e2', '#da3838', '#da3838'],
            ['#da3838', '#da3838', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#da3838', '#da3838'],
            ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
        ]
    }
]

function matchSite() {
    for (var i = 0; i < site_configs.length; i++) {
        var matches = site_configs[i]["matches"];
        for (var j = 0; j < matches.length; j++) {
            if (document.location.href.search(matches[j]) >= 0) {
                return site_configs[i];
            }
        }
    }

    return null;
}

var site = matchSite();

var favicon = {
    pixelMaps: {
        numbers: [
            [
                [0,1,1,0],
                [1,0,0,1],
                [1,0,0,1],
                [1,0,0,1],
                [0,1,1,0]
            ],
            [
                [0,1,0],
                [1,1,0],
                [0,1,0],
                [0,1,0],
                [1,1,1]
            ],
            [
                [1,1,1,0],
                [0,0,0,1],
                [0,1,1,0],
                [1,0,0,0],
                [1,1,1,1]
            ],
            [
                [1,1,1,0],
                [0,0,0,1],
                [0,1,1,0],
                [0,0,0,1],
                [1,1,1,0]
            ],
            [
                [0,0,1,0],
                [0,1,1,0],
                [1,0,1,0],
                [1,1,1,1],
                [0,0,1,0]
            ],
            [
                [1,1,1,1],
                [1,0,0,0],
                [1,1,1,0],
                [0,0,0,1],
                [1,1,1,0]
            ],
            [
                [0,1,1,0],
                [1,0,0,0],
                [1,1,1,0],
                [1,0,0,1],
                [0,1,1,0]
            ],
            [
                [1,1,1,1],
                [0,0,0,1],
                [0,0,1,0],
                [0,1,0,0],
                [0,1,0,0]
            ],
            [
                [0,1,1,0],
                [1,0,0,1],
                [0,1,1,0],
                [1,0,0,1],
                [0,1,1,0]
            ],
            [
                [0,1,1,0],
                [1,0,0,1],
                [0,1,1,1],
                [0,0,0,1],
                [0,1,1,0]
            ],
        ]
    },

    drawUnreadCount: function(unread) {
        if(!this.textedCanvas) {
            this.textedCanvas = [];
        }
        
        if(!this.textedCanvas[unread]) {
            var iconCanvas = this.getUnreadCanvas();
            var textedCanvas = document.createElement('canvas');
            textedCanvas.height = textedCanvas.width = iconCanvas.width;
            var ctx = textedCanvas.getContext('2d');
            ctx.drawImage(iconCanvas, 0, 0);
            
            if (unread > 0) {
                ctx.fillStyle = "#fef4ac";
                ctx.strokeStyle = "#dabc5c";
                ctx.strokeWidth = 1;
            
                var unreadString = unread.toString()
                var count = unreadString.length;
                var bgHeight = this.pixelMaps.numbers[0].length;
                var bgWidth = 0;
                var padding = count > 2 ? 0 : 1;
            
                for(var index = 0; index < count; index++) {
                    bgWidth += this.pixelMaps.numbers[unreadString[index]][0].length;
                    if(index < count-1) {
                        bgWidth += padding;
                    }
                }
                bgWidth = bgWidth > textedCanvas.width-4 ? textedCanvas.width-4 : bgWidth;
            
                ctx.fillRect(textedCanvas.width-bgWidth-4,2,bgWidth+4,bgHeight+4);
            
            
                var digit;
                var digitsWidth = bgWidth;
                for(var index = 0; index < count; index++) {
                    digit = unreadString[index];
                    if (this.pixelMaps.numbers[digit]) {
                        var map = this.pixelMaps.numbers[digit];
                        var height = map.length;
                        var width = map[0].length;
                    
                    
                        ctx.fillStyle = "#2c3323";
                    
                        for (var y = 0; y < height; y++) {
                            for (var x = 0; x < width; x++) {
                                if(map[y][x]) {
                                    ctx.fillRect(14- digitsWidth + x, y+4, 1, 1);
                                }
                            }
                        }
                    
                        digitsWidth -= width + padding;
                    }
                }   
            
                ctx.strokeRect(textedCanvas.width-bgWidth-3.5,2.5,bgWidth+3,bgHeight+3);
            
            }
            
            this.textedCanvas[unread] = textedCanvas;
        }
        
        return this.textedCanvas[unread];
    },

    getUnreadCanvas: function() {
        if(!this.unreadCanvas) {
            this.unreadCanvas = document.createElement('canvas');
            this.unreadCanvas.height = this.unreadCanvas.width = 16;
            
            var ctx = this.unreadCanvas.getContext('2d');
            
            for (var y = 0; y < this.unreadCanvas.width; y++) {
                for (var x = 0; x < this.unreadCanvas.height; x++) {
                    if (site.icon[y][x]) {
                        ctx.fillStyle = site.icon[y][x];
                        ctx.fillRect(x, y, 1, 1);
                    }
                }
            }
        }
        
        return this.unreadCanvas;
    },

    getUnreadCountIcon: function(unread) {
        return this.drawUnreadCount(unread).toDataURL('image/png');
    },

    update: function(currentCount) {
        if (currentCount == this.previousCount)
            return;

        this.previousCount = currentCount;
        iconURL = this.getUnreadCountIcon(currentCount);            

        var link = document.createElement("link");
        link.type = "image/x-icon";
        link.rel = 'SHORTCUT ICON';
        link.href = iconURL;
        this.removeExisting();
        this.docHead.appendChild(link);

        var hack_frame = document.createElement("iframe");
        hack_frame.width = 0;
        hack_frame.height = 0;
        hack_frame.frameborder = 0;
        hack_frame.src = iconURL;
        hack_frame.id = 'hack_frame';
        document.body.appendChild(hack_frame);
        document.body.removeChild(hack_frame);
    },

    removeExisting: function() {
        var links = this.docHead.getElementsByTagName("link");
        for (var i = 0; i < links.length; i++) {
            var link = links[i];
            if (link.rel == 'SHORTCUT ICON') {
                this.docHead.removeChild(link);
            }
        }
    },

    docHead:document.getElementsByTagName("head")[0],
    previousCount:0
}

function updateFavicon() {
    if (site.poll.method == "atom") {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", site.poll.atom_url, true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                favicon.update(
                    xhr.responseXML.getElementsByTagName('entry').length);
            }
        }
    }
}

if (site != null) {
    updateFavicon();

    setInterval(updateFavicon, site.poll.frequency);
}
