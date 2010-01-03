var site_configs = [
    { // Google Reader
        "matches": [
            "http://www.google.com/reader/"
            ],
        "poll": {
            "frequency": 60000,
            "method": "atom",
            "atom_url": "http://www.google.com/reader/atom/user/-/state/com.google/reading-list?xt=user/-/state/com.google/read&n=99999"
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
    },

    { // Google Wave
        "matches": [
            "https://wave.google.com/wave"
        ],
        "poll": {
            "frequency": 30000,
            "method": "custom",
            "doit": function() {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", "https://wave.google.com/wave/?nouacheck&ua=telltaletab", true);
                xhr.send();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        var content = xhr.responseText.match(/var json = (\{"r":"\^d1".*});/);
                        var waves = JSON.parse(content[1]).p[1];
                        var unreadCount = 0;
                        if (waves) {
                            for (var i = 0; i < waves.length; i++) {
                                if (waves[i][7] == true) {
                                    unreadCount++;
                                }
                            }
                        }

                        favicon.update(unreadCount.toString());
                    }
                }
            }
        },
        "icon": [["rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)"],["rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)"],["rgba(0, 96, 192, 1)","rgba(0, 102, 204, 0.748031496063)","rgba(0, 102, 204, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 64, 64, 0.748031496063)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 0.748031496063)","rgba(255, 170, 0, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(0, 153, 57, 0.748031496063)","rgba(0, 144, 53, 1)"],["rgba(0, 102, 204, 1)","rgba(0, 102, 204, 1)","rgba(0, 102, 204, 0.748031496063)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 64, 64, 0.748031496063)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 1)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 0.748031496063)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(0, 153, 57, 0.748031496063)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 1)"],["rgba(0, 102, 204, 0.503937007874)","rgba(0, 102, 204, 1)","rgba(0, 102, 204, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 0.503937007874)","rgba(255, 170, 0, 0.503937007874)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 0.503937007874)"],["rgba(0, 102, 204, 0)","rgba(0, 102, 204, 1)","rgba(0, 102, 204, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 0)","rgba(255, 170, 0, 0)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 0)"],["rgba(0, 102, 204, 0)","rgba(0, 102, 204, 1)","rgba(0, 102, 204, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 0)","rgba(255, 170, 0, 0)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 0)"],["rgba(255, 255, 255, 0)","rgba(0, 102, 204, 1)","rgba(0, 102, 204, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 1)","rgba(255, 255, 255, 0)"],["rgba(255, 255, 255, 0)","rgba(0, 102, 204, 1)","rgba(0, 102, 204, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 1)","rgba(255, 255, 255, 0)"],["rgba(255, 255, 255, 0)","rgba(0, 102, 204, 1)","rgba(0, 102, 204, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 1)","rgba(255, 255, 255, 0)"],["rgba(255, 255, 255, 0)","rgba(0, 102, 204, 1)","rgba(0, 102, 204, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 1)","rgba(255, 255, 255, 0)"],["rgba(255, 255, 255, 0)","rgba(0, 102, 204, 1)","rgba(0, 102, 204, 1)","rgba(0, 102, 204, 0.503937007874)","rgba(255, 64, 64, 0.503937007874)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 0.503937007874)","rgba(0, 153, 57, 0.503937007874)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 1)","rgba(255, 255, 255, 0)"],["rgba(255, 255, 255, 0)","rgba(0, 102, 204, 0.748031496063)","rgba(0, 102, 204, 1)","rgba(0, 102, 204, 1)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 0.748031496063)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 170, 0, 0.748031496063)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 1)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 0.748031496063)","rgba(255, 255, 255, 0)"],["rgba(255, 255, 255, 0)","rgba(0, 102, 204, 0)","rgba(0, 102, 204, 0.748031496063)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 0.748031496063)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 170, 0, 0)","rgba(255, 170, 0, 0.748031496063)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 0.748031496063)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)"],["rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)"],["rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)"]]
    },

    { // Netvibes
        "matches": [
            "http://www.netvibes.com/"
        ],
        "poll": {
            "frequency": 30000,
            "method": "titleMatch",
            "regex": "Netvibes \\(([0-9]+)\\)"
        },
        "icon": [
            ['', '#93fb41', '#85fb27', '#85fb27', '#85fb27', '#85fb27', '#85fb27', '#85fb27', '#85fb27', '#85fb27', '#85fb27', '#85fb27', '#85fb27', '#85fb27', '#93fb41', ''],
            ['#84f237', '#72f01b', '#72f01b', '#72f01b', '#72f01b', '#72f01b', '#72f01b', '#72f01b', '#72f01b', '#72f01b', '#72f01b', '#72f01b', '#72f01b', '#72f01b', '#72f01b', '#84f237'],
            ['#61e510', '#61e510', '#61e510', '#61e510', '#61e510', '#61e510', '#61e510', '#61e510', '#61e510', '#61e510', '#61e510', '#61e510', '#61e510', '#61e510', '#61e510', '#61e510'],
            ['#56df11', '#56df11', '#56df11', '#56df11', '#56df11', '#56df11', '#56df11', '#57df12', '#56df11', '#56df11', '#56df11', '#56df11', '#56df11', '#56df11', '#56df11', '#56df11'],
            ['#4ddb16', '#4ddb16', '#4ddb16', '#4ddb16', '#4ddb16', '#4ddb16', '#4ddb16', '#ffffff', '#ffffff', '#4ddb16', '#4ddb16', '#4ddb16', '#4ddb16', '#4ddb16', '#4ddb16', '#4ddb16'],
            ['#44d61a', '#44d61a', '#44d61a', '#44d61a', '#44d61a', '#44d61a', '#44d61a', '#ffffff', '#ffffff', '#44d61a', '#44d61a', '#44d61a', '#44d61a', '#44d61a', '#44d61a', '#44d61a'],
            ['#2bc80d', '#34cd17', '#39d01d', '#39d01d', '#3ad01e', '#3bd01f', '#3cd120', '#ffffff', '#ffffff', '#39d01e', '#39d01d', '#3bd01f', '#3ad01e', '#39d01d', '#34cd17', '#2bc80d'],
            ['#1abd02', '#1abd02', '#1abd02', '#1abd02', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#1abd02', '#1abd02', '#1abd02', '#1abd02'],
            ['#18b905', '#18b905', '#18b905', '#18b905', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#18b905', '#18b905', '#18b905', '#18b905'],
            ['#17b407', '#17b407', '#17b407', '#1ab50a', '#1ab50a', '#18b408', '#17b407', '#ffffff', '#ffffff', '#17b407', '#17b407', '#17b407', '#17b407', '#17b407', '#17b407', '#17b407'],
            ['#15af08', '#15af08', '#15af08', '#15af08', '#15af08', '#15af08', '#15af08', '#ffffff', '#ffffff', '#15af08', '#15af08', '#15af08', '#15af08', '#15af08', '#15af08', '#15af08'],
            ['#12aa09', '#12aa09', '#12aa09', '#12aa09', '#12aa09', '#12aa09', '#12aa09', '#ffffff', '#ffffff', '#12aa09', '#12aa09', '#12aa09', '#12aa09', '#12aa09', '#12aa09', '#12aa09'],
            ['#10a509', '#10a509', '#10a509', '#10a509', '#10a509', '#10a509', '#10a509', '#10a509', '#10a509', '#10a509', '#10a509', '#10a509', '#10a509', '#10a509', '#10a509', '#10a509'],
            ['#0ca009', '#0ca009', '#0ca009', '#0ca009', '#0ca009', '#0ca009', '#0ca009', '#0ca009', '#0ca009', '#0ca009', '#0ca009', '#0ca009', '#0ca009', '#0ca009', '#0ca009', '#0ca009'],
            ['#27a826', '#089b07', '#089b07', '#089b07', '#089b07', '#089b07', '#089b07', '#089b07', '#089b07', '#089b07', '#089b07', '#089b07', '#089b07', '#089b07', '#089b07', '#27a826'],
            ['', '#23a324', '#049605', '#049605', '#049605', '#049605', '#049605', '#049605', '#049605', '#049605', '#049605', '#049605', '#049605', '#049605', '#23a324', '']
        ]
    },

    { // Facebook
        "matches": [
            "http://www.facebook.com/"
        ],
        "poll": {
            "frequency": 30000,
            "method": "custom",
            "doit": function() {
                var unreadNotifications = '0';
                var notif_span = document.getElementById('presence_notifications_count');
                if (notif_span) {
                    var count_strong = notif_span.getElementsByTagName('strong');
                    if (count_strong) {
                        unreadNotifications = count_strong[0].innerText;
                    }
                }
                favicon.update(unreadNotifications);
            }
        },
        "icon": [
            ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['', '#6179ac', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#6179ac', ''],
            ['', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', ''],
            ['', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#6078ab', '#ebeef4', '#ffffff', '#ffffff', '#3b5998', '#3b5998', ''],
            ['', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#ebeef4', '#ffffff', '#ffffff', '#ffffff', '#3b5998', '#3b5998', ''],
            ['', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#ffffff', '#ffffff', '#3b5998', '#3b5998', '#3b5998', '#3b5998', ''],
            ['', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#ffffff', '#ffffff', '#3b5998', '#3b5998', '#3b5998', '#3b5998', ''],
            ['', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#3b5998', '#3b5998', ''],
            ['', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#ebeef4', '#ebeef4', '#ffffff', '#ffffff', '#ebeef4', '#ebeef4', '#3b5998', '#3b5998', ''],
            ['', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#ffffff', '#ffffff', '#3b5998', '#3b5998', '#3b5998', '#3b5998', ''],
            ['', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#ffffff', '#ffffff', '#3b5998', '#3b5998', '#3b5998', '#3b5998', ''],
            ['', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#ffffff', '#ffffff', '#3b5998', '#3b5998', '#3b5998', '#3b5998', ''],
            ['', '#45629e', '#6d84b4', '#6d84b4', '#6d84b4', '#6d84b4', '#6d84b4', '#6d84b4', '#6d84b4', '#ffffff', '#ffffff', '#6d84b4', '#6d84b4', '#6d84b4', '#45629e', ''],
            ['', '#45629e', '#6d84b4', '#6d84b4', '#6d84b4', '#6d84b4', '#6d84b4', '#6d84b4', '#6d84b4', '#ffffff', '#ffffff', '#6d84b4', '#6d84b4', '#6d84b4', '#45629e', ''],
            ['', '#6179ac', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#3b5998', '#6179ac', ''],
            ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
        ]
    },

    { // Twitter
        "matches": [
            "http://twitter.com/"
        ],
        "poll": {
            "frequency": 30000,
            "method": "titleMatch",
            "regex": "\\(([0-9]+)\\) Twitter"
        },
        "icon": [
            ['', '', '#909090', '#d8d8d6', '#ece8e7', '#ebe9e8', '#dadada', '#7f7f7f', '', '', '', '', '', '', '', ''],
            ['', '#606060', '#eeecec', '#ffffff', '#dff7ff', '#e4f9ff', '#ffffff', '#c3c3c3', '', '', '', '', '', '', '', ''],
            ['', '#a4a4a4', '#fefdfc', '#c7efff', '#73d4fc', '#7bd6fc', '#dbf6ff', '#f8f4f2', '#858585', '', '#d4d4d4', '#bfbfbf', '', '', '', ''],
            ['', '#b3b3b3', '#fafafa', '#a5e5ff', '#69d1fc', '#6ad1fc', '#b9eafe', '#fffefc', '#f3efee', '#f9f6f5', '#f6f3f3', '#efedec', '#d9d7d7', '#898989', '', ''],
            ['', '#b2b2af', '#faf9f9', '#a7e6ff', '#6cd2fc', '#6ed3fc', '#a8e4fc', '#e1f6ff', '#e1f8ff', '#dff6ff', '#def6ff', '#ecfbff', '#ffffff', '#d4d2d2', '#404040', ''],
            ['', '#b2b2af', '#faf9f9', '#a7e6ff', '#6dd2fc', '#73d4fc', '#75d5fc', '#78d6fc', '#78d6fc', '#78d6fc', '#76d5fc', '#7dd7fc', '#d0f3ff', '#fcf9f8', '#868686', ''],
            ['', '#b2b2af', '#faf9f9', '#a7e6ff', '#6dd2fc', '#73d4fc', '#71d4fc', '#6ed3fc', '#6ed3fc', '#6ed3fc', '#6ed3fc', '#64cffc', '#a5e5ff', '#fdfcfc', '#979797', ''],
            ['', '#b2b2af', '#faf9f9', '#a7e6ff', '#6dd2fc', '#72d4fc', '#79d6fc', '#80d8fc', '#7fd8fc', '#7fd8fc', '#7dd7fc', '#85dafd', '#d8f6ff', '#faf7f6', '#707070', ''],
            ['', '#b2b2af', '#faf9f9', '#a7e6ff', '#6cd2fc', '#6ed3fc', '#aee7fd', '#effafe', '#ebf8fe', '#eaf8fe', '#eaf8fe', '#f3fcff', '#faf9f9', '#a3a1a1', '#171717', ''],
            ['', '#b5b2b2', '#f9f9f9', '#a6e6ff', '#6cd2fc', '#6dd2fc', '#b9eafd', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#c2c0c0', '#373737', '', ''],
            ['', '#a5a5a5', '#fcfafa', '#afe8ff', '#6cd2fc', '#6ed3fc', '#91ddfd', '#e7f7ff', '#f8fdff', '#f6fcff', '#f6fcff', '#f9fdff', '#fcfaf9', '#c5c5c5', '', ''],
            ['', '#757575', '#fdf9f8', '#d6f4ff', '#72d3fc', '#70d3fc', '#71d3fc', '#80d8fd', '#8cdcfd', '#8bdcfd', '#89dbfd', '#92ddfd', '#dff8ff', '#fcf9f9', '#6d6d6d', ''],
            ['', '', '#cacaca', '#ffffff', '#abe6fe', '#6cd2fc', '#6ed3fc', '#6ed3fc', '#6dd2fc', '#6dd2fc', '#6dd2fc', '#64d0fc', '#a7e5ff', '#fdfcfb', '#9d9d9d', ''],
            ['', '', '#636363', '#ececeb', '#fdffff', '#b8ebff', '#81d8fd', '#73d4fc', '#73d4fc', '#73d4fc', '#71d4fc', '#75d5fc', '#c8f0ff', '#fffcfa', '#7b7b7b', ''],
            ['', '', '', '#626262', '#e1dede', '#ffffff', '#f2feff', '#d9f6ff', '#d3f3ff', '#d4f3ff', '#d3f3ff', '#e1f8ff', '#ffffff', '#c9c7c7', '#242424', ''],
            ['', '', '', '', '#4c4c4c', '#999999', '#ccc9c9', '#e6e2e1', '#f3efed', '#f3efed', '#f4f0ef', '#e5e2e1', '#adabab', '#353535', '', '']
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
    previousText: "",
    docHead: document.getElementsByTagName("head")[0],

    getBaseCanvas: function() {
        if(!this.baseCanvas) {
            this.baseCanvas = document.createElement('canvas');
            this.baseCanvas.height = this.baseCanvas.width = 16;

            var ctx = this.baseCanvas.getContext('2d');

            for (var y = 0; y < this.baseCanvas.width; y++) {
                for (var x = 0; x < this.baseCanvas.height; x++) {
                    if (site.icon[y][x]) {
                        ctx.fillStyle = site.icon[y][x];
                        ctx.fillRect(x, y, 1, 1);
                    }
                }
            }
        }

        return this.baseCanvas;
    },

    drawText: function(text) {
        if(!this.textedCanvas) {
            this.textedCanvas = [];
        }

        if(!this.textedCanvas[text]) {
            var iconCanvas = this.getBaseCanvas();
            var textedCanvas = document.createElement('canvas');
            textedCanvas.height = textedCanvas.width = iconCanvas.width;
            var ctx = textedCanvas.getContext('2d');
            ctx.drawImage(iconCanvas, 0, 0);

            if (text && text != "0") {
                var dim = ctx.measureText(text);
                if (dim.width > 16) {
                    text = "+";
                    dim = ctx.measureText(text);
                }

                ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
                ctx.fillRect(15-dim.width, 0, dim.width+1, 10);

                ctx.textBaseline = "top";
                ctx.font = "4t Arial";
                ctx.strokeStyle = 'black';
                ctx.strokeText(text, 16-dim.width, -2);

                ctx.strokeStyle = "rgba(0, 0, 0, 0.85)";
                ctx.lineWidth = 0.5;
                ctx.strokeRect(14-dim.width, -1, dim.width+3, 12);
            }

            this.textedCanvas[text] = textedCanvas;
        }

        return this.textedCanvas[text];
    },

    getIcon: function(text) {
        return this.drawText(text).toDataURL('image/png');
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

    update: function(text) {
        if (text == this.previousText)
            return;

        this.previousText = text;
        iconURL = this.getIcon(text);

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
    }
}

function updateFavicon() {
    if (site.poll.method == "atom") {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", site.poll.atom_url, true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                var unread = xhr.responseXML.getElementsByTagName('entry');
                favicon.update(unread.length.toString());
            }
        }
    }

    else if (site.poll.method == "titleMatch") {
        var unreadCount = "0";
        var match = document.title.match(site.poll.regex);
        if (match && match.length == 2) {
            unreadCount = match[1];
        }
        favicon.update(unreadCount);
    }

    else if (site.poll.method == "custom") {
        site.poll.doit();
    }
}

if (site != null) {
    updateFavicon();

    setInterval(updateFavicon, site.poll.frequency);
}
