import * as types from '../constants/ActionTypes';

const initialState = {
    "kind": "youtube#searchListResponse",
    "etag": "XpPGQXPnxQJhLgs6enD_n8JR4Qk/Uc-dHttrbTdTM8jh5-FvYcKQVd8",
    "nextPageToken": "CAUQAA",
    "regionCode": "EG",
    "pageInfo": {
        "totalResults": 1167,
        "resultsPerPage": 5
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/g2tFfSSAaVqeNp4_zIo25qwe3Vg\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "GRYxCHBnsds"
            },
            "snippet": {
                "publishedAt": "2017-03-28T17:05:33.000Z",
                "channelId": "UCfiwzLy-8yKzIbsmZTzxDgw",
                "title": "رواد الأعمال- \"إنستاباغ\".. إبداع لخدمة عالم التطبيقات",
                "description": "سلطت الحلقة الضوء على تطبيق جديد ابتكره شابان مصريان يساهم في الربط بين مطوري التطبيقات ومستخدميها. تاريخ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/GRYxCHBnsds/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/GRYxCHBnsds/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/GRYxCHBnsds/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Al Jazeera Arabic قناة الجزيرة",
                "liveBroadcastContent": "none"
            },
            video: {
                "kind": "youtube#video",
                "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/NqjIXVWNZQN6quckzm3O_riHcjg\"",
                "id": "GRYxCHBnsds",
                "snippet": {
                    "publishedAt": "2017-03-28T17:05:33.000Z",
                    "channelId": "UCfiwzLy-8yKzIbsmZTzxDgw",
                    "title": "رواد الأعمال- \"إنستاباغ\".. إبداع لخدمة عالم التطبيقات",
                    "description": "سلطت الحلقة الضوء على تطبيق جديد ابتكره شابان مصريان يساهم في الربط بين مطوري التطبيقات ومستخدميها.\nتاريخ البث: 28/3/2017",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/GRYxCHBnsds/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/GRYxCHBnsds/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/GRYxCHBnsds/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/GRYxCHBnsds/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/GRYxCHBnsds/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Al Jazeera Arabic قناة الجزيرة",
                    "tags": [
                        "5376216626001",
                        "رواد الاعمال",
                        "رواد الأعمال",
                        "الجزيرة",
                        "youtube",
                        "aljazeera"
                    ],
                    "categoryId": "25",
                    "liveBroadcastContent": "none",
                    "localized": {
                        "title": "رواد الأعمال- \"إنستاباغ\".. إبداع لخدمة عالم التطبيقات",
                        "description": "سلطت الحلقة الضوء على تطبيق جديد ابتكره شابان مصريان يساهم في الربط بين مطوري التطبيقات ومستخدميها.\nتاريخ البث: 28/3/2017"
                    }
                },
                "contentDetails": {
                    "duration": "PT24M43S",
                    "dimension": "2d",
                    "definition": "hd",
                    "caption": "false",
                    "licensedContent": true,
                    "projection": "rectangular"
                },
                "status": {
                    "uploadStatus": "processed",
                    "privacyStatus": "public",
                    "license": "youtube",
                    "embeddable": true,
                    "publicStatsViewable": true
                },
                "statistics": {
                    "viewCount": "16989",
                    "likeCount": "311",
                    "dislikeCount": "8",
                    "favoriteCount": "0",
                    "commentCount": "12"
                }
            },
            channel: {
                "kind": "youtube#channel",
                "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/Jk1K82xOGZmFMu9q0PNBFpIz5tE\"",
                "id": "UCfiwzLy-8yKzIbsmZTzxDgw",
                "snippet": {
                    "title": "Al Jazeera Arabic قناة الجزيرة",
                    "description": "الجزيرة خدمة إعلامية عربية الانتماء عالمية التوجه شعارها الرأي والرأي الآخر وهي منبر تعددي ينشد الحقيقة ويلتزم المبادئ المهنية في إطار مؤسسي.\r\n\r\nوإذ تسعى الجزيرة لنشر الوعي العام بالقضايا التي تهم الجمهور فإنها تطمح إلى أن تكون جسرا بين الشعوب والثقافات يعزز حق الإنسان في المعرفة وقيم التسامح والديمقراطية واحترام الحريات وحقوق الإنسان.",
                    "customUrl": "aljazeerachannel",
                    "publishedAt": "2007-03-26T13:11:01.000Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/a-/AAuE7mDQaHqD7rnvnJUG6tI7N9mHy8zgSM1EKlrn2Q=s88-mo-c-c0xffffffff-rj-k-no",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/a-/AAuE7mDQaHqD7rnvnJUG6tI7N9mHy8zgSM1EKlrn2Q=s240-mo-c-c0xffffffff-rj-k-no",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/a-/AAuE7mDQaHqD7rnvnJUG6tI7N9mHy8zgSM1EKlrn2Q=s800-mo-c-c0xffffffff-rj-k-no",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Al Jazeera Arabic قناة الجزيرة",
                        "description": "الجزيرة خدمة إعلامية عربية الانتماء عالمية التوجه شعارها الرأي والرأي الآخر وهي منبر تعددي ينشد الحقيقة ويلتزم المبادئ المهنية في إطار مؤسسي.\r\n\r\nوإذ تسعى الجزيرة لنشر الوعي العام بالقضايا التي تهم الجمهور فإنها تطمح إلى أن تكون جسرا بين الشعوب والثقافات يعزز حق الإنسان في المعرفة وقيم التسامح والديمقراطية واحترام الحريات وحقوق الإنسان."
                    }
                },
                "statistics": {
                    "viewCount": "1229381994",
                    "commentCount": "0",
                    "subscriberCount": "3314224",
                    "hiddenSubscriberCount": false,
                    "videoCount": "106607"
                },
                "brandingSettings": {
                    "channel": {
                        "title": "Al Jazeera Arabic قناة الجزيرة",
                        "description": "الجزيرة خدمة إعلامية عربية الانتماء عالمية التوجه شعارها الرأي والرأي الآخر وهي منبر تعددي ينشد الحقيقة ويلتزم المبادئ المهنية في إطار مؤسسي.\r\n\r\nوإذ تسعى الجزيرة لنشر الوعي العام بالقضايا التي تهم الجمهور فإنها تطمح إلى أن تكون جسرا بين الشعوب والثقافات يعزز حق الإنسان في المعرفة وقيم التسامح والديمقراطية واحترام الحريات وحقوق الإنسان.",
                        "keywords": "\"Al Jazeera\" Channel علوم علمية دولية أميركا أمريكا",
                        "defaultTab": "Featured",
                        "trackingAnalyticsAccountId": "UA-1615344-2",
                        "showRelatedChannels": true,
                        "showBrowseView": true,
                        "featuredChannelsTitle": "Featured Channels",
                        "featuredChannelsUrls": [
                            "UC1M1X344ssYjSvjAXM0Rn2Q",
                            "UCCv1Pd24oPErw5S7zJWltnQ",
                            "UC0LSnqrwqtMwl2YwfUpO66g",
                            "UCNye-wNBqNL5ZzHSJj3l8Bg"
                        ],
                        "unsubscribedTrailer": "SuSk5PRBNEw",
                        "profileColor": "#000000"
                    },
                    "image": {
                        "bannerImageUrl": "https://yt3.ggpht.com/0I6t3anc1IjjuCpqOvgrMKLOusKDskzLHbojKQgmaDrobm7MxjEUNbJGb45_bqTUTgsFu_vebA=w1060-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no",
                        "bannerMobileImageUrl": "https://yt3.ggpht.com/0I6t3anc1IjjuCpqOvgrMKLOusKDskzLHbojKQgmaDrobm7MxjEUNbJGb45_bqTUTgsFu_vebA=w640-fcrop64=1,32b75a57cd48a5a8-nd-c0xffffffff-rj-k-no",
                        "bannerTabletLowImageUrl": "https://yt3.ggpht.com/0I6t3anc1IjjuCpqOvgrMKLOusKDskzLHbojKQgmaDrobm7MxjEUNbJGb45_bqTUTgsFu_vebA=w1138-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no",
                        "bannerTabletImageUrl": "https://yt3.ggpht.com/0I6t3anc1IjjuCpqOvgrMKLOusKDskzLHbojKQgmaDrobm7MxjEUNbJGb45_bqTUTgsFu_vebA=w1707-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no",
                        "bannerTabletHdImageUrl": "https://yt3.ggpht.com/0I6t3anc1IjjuCpqOvgrMKLOusKDskzLHbojKQgmaDrobm7MxjEUNbJGb45_bqTUTgsFu_vebA=w2276-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no",
                        "bannerTabletExtraHdImageUrl": "https://yt3.ggpht.com/0I6t3anc1IjjuCpqOvgrMKLOusKDskzLHbojKQgmaDrobm7MxjEUNbJGb45_bqTUTgsFu_vebA=w2560-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no",
                        "bannerMobileLowImageUrl": "https://yt3.ggpht.com/0I6t3anc1IjjuCpqOvgrMKLOusKDskzLHbojKQgmaDrobm7MxjEUNbJGb45_bqTUTgsFu_vebA=w320-fcrop64=1,32b75a57cd48a5a8-nd-c0xffffffff-rj-k-no",
                        "bannerMobileMediumHdImageUrl": "https://yt3.ggpht.com/0I6t3anc1IjjuCpqOvgrMKLOusKDskzLHbojKQgmaDrobm7MxjEUNbJGb45_bqTUTgsFu_vebA=w960-fcrop64=1,32b75a57cd48a5a8-nd-c0xffffffff-rj-k-no",
                        "bannerMobileHdImageUrl": "https://yt3.ggpht.com/0I6t3anc1IjjuCpqOvgrMKLOusKDskzLHbojKQgmaDrobm7MxjEUNbJGb45_bqTUTgsFu_vebA=w1280-fcrop64=1,32b75a57cd48a5a8-nd-c0xffffffff-rj-k-no",
                        "bannerMobileExtraHdImageUrl": "https://yt3.ggpht.com/0I6t3anc1IjjuCpqOvgrMKLOusKDskzLHbojKQgmaDrobm7MxjEUNbJGb45_bqTUTgsFu_vebA=w1440-fcrop64=1,32b75a57cd48a5a8-nd-c0xffffffff-rj-k-no",
                        "bannerTvImageUrl": "https://yt3.ggpht.com/0I6t3anc1IjjuCpqOvgrMKLOusKDskzLHbojKQgmaDrobm7MxjEUNbJGb45_bqTUTgsFu_vebA=w2120-fcrop64=1,00000000ffffffff-nd-c0xffffffff-rj-k-no",
                        "bannerTvLowImageUrl": "https://yt3.ggpht.com/0I6t3anc1IjjuCpqOvgrMKLOusKDskzLHbojKQgmaDrobm7MxjEUNbJGb45_bqTUTgsFu_vebA=w854-fcrop64=1,00000000ffffffff-nd-c0xffffffff-rj-k-no",
                        "bannerTvMediumImageUrl": "https://yt3.ggpht.com/0I6t3anc1IjjuCpqOvgrMKLOusKDskzLHbojKQgmaDrobm7MxjEUNbJGb45_bqTUTgsFu_vebA=w1280-fcrop64=1,00000000ffffffff-nd-c0xffffffff-rj-k-no",
                        "bannerTvHighImageUrl": "https://yt3.ggpht.com/0I6t3anc1IjjuCpqOvgrMKLOusKDskzLHbojKQgmaDrobm7MxjEUNbJGb45_bqTUTgsFu_vebA=w1920-fcrop64=1,00000000ffffffff-nd-c0xffffffff-rj-k-no"
                    },
                    "hints": [
                        {
                            "property": "channel.banner.mobile.medium.image.url",
                            "value": "https://yt3.ggpht.com/0I6t3anc1IjjuCpqOvgrMKLOusKDskzLHbojKQgmaDrobm7MxjEUNbJGb45_bqTUTgsFu_vebA=w640-fcrop64=1,32b75a57cd48a5a8-nd-c0xffffffff-rj-k-no"
                        },
                        {
                            "property": "channel.featured_tab.template.string",
                            "value": "Everything"
                        }
                    ]
                }
            },
            playlist: {}
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/lh1hZGYWL1LQuQOIQGPPhKDgvC4\"",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCY_6EX9BkxR3d537gp-Ob9w"
            },
            "snippet": {
                "publishedAt": "2013-11-26T18:41:04.000Z",
                "channelId": "UCY_6EX9BkxR3d537gp-Ob9w",
                "title": "Instabug",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/-eJql2sZgmv4/AAAAAAAAAAI/AAAAAAAAAAA/aaIVf6SgiC4/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/-eJql2sZgmv4/AAAAAAAAAAI/AAAAAAAAAAA/aaIVf6SgiC4/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/-eJql2sZgmv4/AAAAAAAAAAI/AAAAAAAAAAA/aaIVf6SgiC4/s800-c-k-no-mo-rj-c0xffffff/photo.jpg"
                    }
                },
                "channelTitle": "Instabug",
                "liveBroadcastContent": "none"
            },
            video: {},
            channel: {
                "kind": "youtube#channel",
                "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/alvFHTTXfRFNqsFors19YLtZoH8\"",
                "id": "UCY_6EX9BkxR3d537gp-Ob9w",
                "snippet": {
                    "title": "Instabug",
                    "description": "",
                    "customUrl": "instabug",
                    "publishedAt": "2013-11-26T18:41:04.000Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/a-/AAuE7mC6hgSN2o5EldscsUSXmqYYEBkw521UgHDSgQ=s88-mo-c-c0xffffffff-rj-k-no",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/a-/AAuE7mC6hgSN2o5EldscsUSXmqYYEBkw521UgHDSgQ=s240-mo-c-c0xffffffff-rj-k-no",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/a-/AAuE7mC6hgSN2o5EldscsUSXmqYYEBkw521UgHDSgQ=s800-mo-c-c0xffffffff-rj-k-no",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Instabug",
                        "description": ""
                    }
                },
                "statistics": {
                    "viewCount": "365118",
                    "commentCount": "0",
                    "subscriberCount": "0",
                    "hiddenSubscriberCount": true,
                    "videoCount": "4"
                },
                "brandingSettings": {
                    "channel": {
                        "title": "Instabug",
                        "defaultTab": "Featured",
                        "showRelatedChannels": true,
                        "showBrowseView": true,
                        "profileColor": "#000000"
                    },
                    "image": {
                        "bannerImageUrl": "http://s.ytimg.com/yts/img/channels/c4/default_banner-vfl7DRgTn.png"
                    },
                    "hints": [
                        {
                            "property": "channel.featured_tab.template.string",
                            "value": "Everything"
                        },
                        {
                            "property": "channel.modules.show_comments.bool",
                            "value": "True"
                        }
                    ]
                }
            },
            playlist: {}
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/TmS90C_6HkAlJm0f7W1vwaHtmO8\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "ZfQR2r6rqyE"
            },
            "snippet": {
                "publishedAt": "2017-07-16T16:33:30.000Z",
                "channelId": "UCY_6EX9BkxR3d537gp-Ob9w",
                "title": "Instabug: Bug Reporting and In-App Feedback For Mobile Apps",
                "description": "Mobile users have no tolerance for buggy apps. They'll delete your app and give you 1 star. Your only option is to start testing early on. However, when you do ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/ZfQR2r6rqyE/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/ZfQR2r6rqyE/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/ZfQR2r6rqyE/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Instabug",
                "liveBroadcastContent": "none"
            },
            video: {
                "kind": "youtube#video",
                "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/QV_KIHlAAqpyBIgGTS-FJrX0TKQ\"",
                "id": "ZfQR2r6rqyE",
                "snippet": {
                    "publishedAt": "2017-07-16T16:33:30.000Z",
                    "channelId": "UCY_6EX9BkxR3d537gp-Ob9w",
                    "title": "Instabug: Bug Reporting and In-App Feedback For Mobile Apps",
                    "description": "Mobile users have no tolerance for buggy apps. They’ll delete your app and give you 1 star. Your only option is to start testing early on. However, when you do start testing, it’s really hard to report bugs. And when reported, it’s usually incomplete and lacks context.\n\nWhether you’re a small team of developers testing out your own app, a well-established organization with dedicated QA teams, or have tens of thousands of beta testers, the problem still exists.\n\nHere comes Instabug: The world’s ultimate bug reporting SDK. Without ever leaving the app, users can easily submit bug reports through screenshots and video recordings with all kinds of logs, device details, and most importantly, repro-steps, logged into your favourite tools.\n\nIn case your app crashes, details instantly flow to your dashboard so you can start solving before anyone starts asking.\n\nNow you’ll have a faster product development life cycle (more quality feedback), which means faster iterations. And you and your team will spend less time tracing and fixing weird bugs and spend more time building your app, streamlining the process between your beta testers, QA, and engineering teams.\n\nYou’ll also be able to do the same thing with your actual users. You and your support team can have end-to-end in-app conversations, cutting negative reviews by 80% and giving your users the support they deserve.\n\nJoin over 15,000 apps that use Instabug for squashing bugs and building better apps. Install our SDK with just one line of code and start using Instabug for free now!",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ZfQR2r6rqyE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ZfQR2r6rqyE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ZfQR2r6rqyE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/ZfQR2r6rqyE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/ZfQR2r6rqyE/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Instabug",
                    "tags": [
                        "Instabug",
                        "Bug Reporting",
                        "Crash Reporting",
                        "In-App chat"
                    ],
                    "categoryId": "28",
                    "liveBroadcastContent": "none",
                    "localized": {
                        "title": "Instabug: Bug Reporting and In-App Feedback For Mobile Apps",
                        "description": "Mobile users have no tolerance for buggy apps. They’ll delete your app and give you 1 star. Your only option is to start testing early on. However, when you do start testing, it’s really hard to report bugs. And when reported, it’s usually incomplete and lacks context.\n\nWhether you’re a small team of developers testing out your own app, a well-established organization with dedicated QA teams, or have tens of thousands of beta testers, the problem still exists.\n\nHere comes Instabug: The world’s ultimate bug reporting SDK. Without ever leaving the app, users can easily submit bug reports through screenshots and video recordings with all kinds of logs, device details, and most importantly, repro-steps, logged into your favourite tools.\n\nIn case your app crashes, details instantly flow to your dashboard so you can start solving before anyone starts asking.\n\nNow you’ll have a faster product development life cycle (more quality feedback), which means faster iterations. And you and your team will spend less time tracing and fixing weird bugs and spend more time building your app, streamlining the process between your beta testers, QA, and engineering teams.\n\nYou’ll also be able to do the same thing with your actual users. You and your support team can have end-to-end in-app conversations, cutting negative reviews by 80% and giving your users the support they deserve.\n\nJoin over 15,000 apps that use Instabug for squashing bugs and building better apps. Install our SDK with just one line of code and start using Instabug for free now!"
                    },
                    "defaultAudioLanguage": "en"
                },
                "contentDetails": {
                    "duration": "PT1M45S",
                    "dimension": "2d",
                    "definition": "hd",
                    "caption": "false",
                    "licensedContent": false,
                    "projection": "rectangular"
                },
                "status": {
                    "uploadStatus": "processed",
                    "privacyStatus": "public",
                    "license": "youtube",
                    "embeddable": true,
                    "publicStatsViewable": true
                },
                "statistics": {
                    "viewCount": "329476",
                    "likeCount": "46",
                    "dislikeCount": "5",
                    "favoriteCount": "0",
                    "commentCount": "3"
                }
            },
            channel: {
                "kind": "youtube#channel",
                "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/58VNq-2k-sw9VQS-hvSVogSgEsw\"",
                "id": "UCY_6EX9BkxR3d537gp-Ob9w",
                "snippet": {
                    "title": "Instabug",
                    "description": "",
                    "customUrl": "instabug",
                    "publishedAt": "2013-11-26T18:41:04.000Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/a-/AAuE7mC6hgSN2o5EldscsUSXmqYYEBkw521UgHDSgQ=s88-mo-c-c0xffffffff-rj-k-no",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/a-/AAuE7mC6hgSN2o5EldscsUSXmqYYEBkw521UgHDSgQ=s240-mo-c-c0xffffffff-rj-k-no",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/a-/AAuE7mC6hgSN2o5EldscsUSXmqYYEBkw521UgHDSgQ=s800-mo-c-c0xffffffff-rj-k-no",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Instabug",
                        "description": ""
                    }
                },
                "statistics": {
                    "viewCount": "365118",
                    "commentCount": "0",
                    "subscriberCount": "0",
                    "hiddenSubscriberCount": true,
                    "videoCount": "4"
                },
                "brandingSettings": {
                    "channel": {
                        "title": "Instabug",
                        "defaultTab": "Featured",
                        "showRelatedChannels": true,
                        "showBrowseView": true,
                        "profileColor": "#000000"
                    },
                    "image": {
                        "bannerImageUrl": "http://s.ytimg.com/yts/img/channels/c4/default_banner-vfl7DRgTn.png"
                    },
                    "hints": [
                        {
                            "property": "channel.modules.show_comments.bool",
                            "value": "True"
                        },
                        {
                            "property": "channel.featured_tab.template.string",
                            "value": "Everything"
                        }
                    ]
                }
            },
            playlist: {}
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/1QF_WdQTGJ_93zm5DS8CzdZiTJQ\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "lemiMziKEyg"
            },
            "snippet": {
                "publishedAt": "2013-10-14T16:05:35.000Z",
                "channelId": "UC7OUmUS4ovXR9b11eVpmcuA",
                "title": "Interview with Moataz Soliman from Instabug | TCD SF 2013",
                "description": "Instabug is an instant bug reporting tool for mobile apps. Its a startup from Egypt that earned a home at flat6labs and won the most recent MIT Business Plan ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/lemiMziKEyg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/lemiMziKEyg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/lemiMziKEyg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Tech Sparks",
                "liveBroadcastContent": "none"
            },
            video: {
                "kind": "youtube#video",
                "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/005mPVZiF0IsDgA-meLM3hwL1kc\"",
                "id": "lemiMziKEyg",
                "snippet": {
                    "publishedAt": "2013-10-14T16:05:35.000Z",
                    "channelId": "UC7OUmUS4ovXR9b11eVpmcuA",
                    "title": "Interview with Moataz Soliman from Instabug | TCD SF 2013",
                    "description": "Instabug is an instant bug reporting tool for mobile apps. Its a startup from Egypt that earned a home at flat6labs and won the most recent MIT Business Plan competition. We had a quick talk with them about their product. Their product works like this; you take a screenshot of the app, close the app and compose an email with your feedback and all device details as well as the steps to reproduce the error and send it to the developer. Or, you could do it the Instabug way; by just SHAKING the device! by doing this you get their feedback from within the app itself where you write your comment and they also attach a screenshot of the app that you can also annotate to highlight the part relevant to your feedback.   \n\n\nمعتز سليمان من انستا بغ\n\nانستا بغ هي خدمة تساعد مطوريين تطبيقات الهاتف الجوال تجربة تطبيقاتهم والتأكد من أنها خالية من المشاكل التقنية، وتساعد المطوريين على الحصول على تغذية راجعة عن تطبيقاتهم من مجموعة المجربيين الأولين. انستا بغ سهلت تبليغ  المشاكل في التطبيقات، كل ما يتوجب فعله من المجرب للتطبيق هو هز جهاز الجوال للتبليغ عن خطأ تقني.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/lemiMziKEyg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/lemiMziKEyg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/lemiMziKEyg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/lemiMziKEyg/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/lemiMziKEyg/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Tech Sparks",
                    "tags": [
                        "TechSparks",
                        "تك",
                        "سباركس",
                        "Entrepreneurs",
                        "Entrepreneur",
                        "Entrepreneurship",
                        "Internet",
                        "Interview",
                        "Successful",
                        "Small",
                        "businesses",
                        "VC",
                        "Business",
                        "Angels",
                        "Mentors",
                        "Venture",
                        "capital",
                        "Arab",
                        "مشاريع",
                        "ناشئة",
                        "مشروع",
                        "صغيرة",
                        "مرشد",
                        "مستثمرين",
                        "المنطقة",
                        "العربية",
                        "venture",
                        "Market",
                        "Arabic",
                        "Markets",
                        "الأسواق",
                        "ريادة",
                        "accelerators",
                        "incubator",
                        "عربي",
                        "عرب",
                        "نجاح",
                        "Venture Capital (Industry)",
                        "TechCrunch",
                        "Disrupt",
                        "TCD",
                        "Instabug",
                        "ANOMO",
                        "Apportable",
                        "معتز سليمان"
                    ],
                    "categoryId": "28",
                    "liveBroadcastContent": "none",
                    "localized": {
                        "title": "Interview with Moataz Soliman from Instabug | TCD SF 2013",
                        "description": "Instabug is an instant bug reporting tool for mobile apps. Its a startup from Egypt that earned a home at flat6labs and won the most recent MIT Business Plan competition. We had a quick talk with them about their product. Their product works like this; you take a screenshot of the app, close the app and compose an email with your feedback and all device details as well as the steps to reproduce the error and send it to the developer. Or, you could do it the Instabug way; by just SHAKING the device! by doing this you get their feedback from within the app itself where you write your comment and they also attach a screenshot of the app that you can also annotate to highlight the part relevant to your feedback.   \n\n\nمعتز سليمان من انستا بغ\n\nانستا بغ هي خدمة تساعد مطوريين تطبيقات الهاتف الجوال تجربة تطبيقاتهم والتأكد من أنها خالية من المشاكل التقنية، وتساعد المطوريين على الحصول على تغذية راجعة عن تطبيقاتهم من مجموعة المجربيين الأولين. انستا بغ سهلت تبليغ  المشاكل في التطبيقات، كل ما يتوجب فعله من المجرب للتطبيق هو هز جهاز الجوال للتبليغ عن خطأ تقني."
                    }
                },
                "contentDetails": {
                    "duration": "PT6M30S",
                    "dimension": "2d",
                    "definition": "hd",
                    "caption": "false",
                    "licensedContent": true,
                    "projection": "rectangular"
                },
                "status": {
                    "uploadStatus": "processed",
                    "privacyStatus": "public",
                    "license": "youtube",
                    "embeddable": true,
                    "publicStatsViewable": false
                },
                "statistics": {
                    "viewCount": "906",
                    "likeCount": "8",
                    "dislikeCount": "1",
                    "favoriteCount": "0",
                    "commentCount": "0"
                }
            },
            channel: {
                "kind": "youtube#channel",
                "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/zf0HtQZn7n2Au37oxdL606-3RUc\"",
                "id": "UC7OUmUS4ovXR9b11eVpmcuA",
                "snippet": {
                    "title": "Tech Sparks",
                    "description": "تك سباركس هو مكان تُسمع فيه اصوات الرياديين. البرنامج يستضيف شخصيات رائعة في عالم الريادة من رياديين،مستثمرين ومرشدين. الفكرة من البرنامج هي الهام الرياديين العرب واعطائهم بعض التوجيهات والنصائح التي ستأخذهم الى عالم الريادة وتساعدهم على تحقيق احلامهم.\r\n\r\nبإمكانكم زيارتنا من خلال الرابط: www.techsparks.tv\r\n\r\nTechSparks is a place where voices of entrepreneurs are heard. The show host distinguished individuals in the entrepreneurial space including entrepreneurs, VCs, Business Angels, mentors, and more. The idea is to inspire entrepreneurs from the Arab region and give them pointers on how to make it big. www.techsparks.tv\r\n\r\nYou can visit our site techsparks.tv to get the full scoop!\r\nwww.techsparks.tv",
                    "customUrl": "techsparkstv",
                    "publishedAt": "2012-02-09T21:19:41.000Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/a-/AAuE7mDt9z_NT47mJPqCvAcYRpj5zAl1O6YnwYXj=s88-mo-c-c0xffffffff-rj-k-no",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/a-/AAuE7mDt9z_NT47mJPqCvAcYRpj5zAl1O6YnwYXj=s240-mo-c-c0xffffffff-rj-k-no",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/a-/AAuE7mDt9z_NT47mJPqCvAcYRpj5zAl1O6YnwYXj=s800-mo-c-c0xffffffff-rj-k-no",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Tech Sparks",
                        "description": "تك سباركس هو مكان تُسمع فيه اصوات الرياديين. البرنامج يستضيف شخصيات رائعة في عالم الريادة من رياديين،مستثمرين ومرشدين. الفكرة من البرنامج هي الهام الرياديين العرب واعطائهم بعض التوجيهات والنصائح التي ستأخذهم الى عالم الريادة وتساعدهم على تحقيق احلامهم.\r\n\r\nبإمكانكم زيارتنا من خلال الرابط: www.techsparks.tv\r\n\r\nTechSparks is a place where voices of entrepreneurs are heard. The show host distinguished individuals in the entrepreneurial space including entrepreneurs, VCs, Business Angels, mentors, and more. The idea is to inspire entrepreneurs from the Arab region and give them pointers on how to make it big. www.techsparks.tv\r\n\r\nYou can visit our site techsparks.tv to get the full scoop!\r\nwww.techsparks.tv"
                    }
                },
                "statistics": {
                    "viewCount": "387418",
                    "commentCount": "0",
                    "subscriberCount": "1395",
                    "hiddenSubscriberCount": false,
                    "videoCount": "662"
                },
                "brandingSettings": {
                    "channel": {
                        "title": "Tech Sparks",
                        "description": "تك سباركس هو مكان تُسمع فيه اصوات الرياديين. البرنامج يستضيف شخصيات رائعة في عالم الريادة من رياديين،مستثمرين ومرشدين. الفكرة من البرنامج هي الهام الرياديين العرب واعطائهم بعض التوجيهات والنصائح التي ستأخذهم الى عالم الريادة وتساعدهم على تحقيق احلامهم.\r\n\r\nبإمكانكم زيارتنا من خلال الرابط: www.techsparks.tv\r\n\r\nTechSparks is a place where voices of entrepreneurs are heard. The show host distinguished individuals in the entrepreneurial space including entrepreneurs, VCs, Business Angels, mentors, and more. The idea is to inspire entrepreneurs from the Arab region and give them pointers on how to make it big. www.techsparks.tv\r\n\r\nYou can visit our site techsparks.tv to get the full scoop!\r\nwww.techsparks.tv",
                        "keywords": "Entrepreneurship interviews VC mentors arabia middle east Arabic business startups Education entrepreneurs مقابلات ريادة رياديين عربي عرب نجاح مشاريع ناشئة رياديون إستثمار مستثمرين رئيس تنفيذي تغطية مؤتمرات صغيرة ناجحة",
                        "trackingAnalyticsAccountId": "UA-30045198-1",
                        "showRelatedChannels": true,
                        "showBrowseView": true,
                        "featuredChannelsTitle": "You may also like :",
                        "featuredChannelsUrls": [
                            "UCSejMhMub6HTBFz7QFOG8IQ"
                        ],
                        "unsubscribedTrailer": "345pUyME1Co",
                        "profileColor": "#000000"
                    },
                    "image": {
                        "bannerImageUrl": "https://yt3.ggpht.com/2kYBsLakXn5-ZKEm0E6BaGCOwPEUQUGQEl0sHyvz2VtvMZw0T-OxBmXrFyJgSVpUCd-rZ-P-Jg=w1060-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no",
                        "bannerMobileImageUrl": "https://yt3.ggpht.com/2kYBsLakXn5-ZKEm0E6BaGCOwPEUQUGQEl0sHyvz2VtvMZw0T-OxBmXrFyJgSVpUCd-rZ-P-Jg=w640-fcrop64=1,32b75a57cd48a5a8-nd-c0xffffffff-rj-k-no",
                        "bannerTabletLowImageUrl": "https://yt3.ggpht.com/2kYBsLakXn5-ZKEm0E6BaGCOwPEUQUGQEl0sHyvz2VtvMZw0T-OxBmXrFyJgSVpUCd-rZ-P-Jg=w1138-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no",
                        "bannerTabletImageUrl": "https://yt3.ggpht.com/2kYBsLakXn5-ZKEm0E6BaGCOwPEUQUGQEl0sHyvz2VtvMZw0T-OxBmXrFyJgSVpUCd-rZ-P-Jg=w1707-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no",
                        "bannerTabletHdImageUrl": "https://yt3.ggpht.com/2kYBsLakXn5-ZKEm0E6BaGCOwPEUQUGQEl0sHyvz2VtvMZw0T-OxBmXrFyJgSVpUCd-rZ-P-Jg=w2276-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no",
                        "bannerTabletExtraHdImageUrl": "https://yt3.ggpht.com/2kYBsLakXn5-ZKEm0E6BaGCOwPEUQUGQEl0sHyvz2VtvMZw0T-OxBmXrFyJgSVpUCd-rZ-P-Jg=w2560-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no",
                        "bannerMobileLowImageUrl": "https://yt3.ggpht.com/2kYBsLakXn5-ZKEm0E6BaGCOwPEUQUGQEl0sHyvz2VtvMZw0T-OxBmXrFyJgSVpUCd-rZ-P-Jg=w320-fcrop64=1,32b75a57cd48a5a8-nd-c0xffffffff-rj-k-no",
                        "bannerMobileMediumHdImageUrl": "https://yt3.ggpht.com/2kYBsLakXn5-ZKEm0E6BaGCOwPEUQUGQEl0sHyvz2VtvMZw0T-OxBmXrFyJgSVpUCd-rZ-P-Jg=w960-fcrop64=1,32b75a57cd48a5a8-nd-c0xffffffff-rj-k-no",
                        "bannerMobileHdImageUrl": "https://yt3.ggpht.com/2kYBsLakXn5-ZKEm0E6BaGCOwPEUQUGQEl0sHyvz2VtvMZw0T-OxBmXrFyJgSVpUCd-rZ-P-Jg=w1280-fcrop64=1,32b75a57cd48a5a8-nd-c0xffffffff-rj-k-no",
                        "bannerMobileExtraHdImageUrl": "https://yt3.ggpht.com/2kYBsLakXn5-ZKEm0E6BaGCOwPEUQUGQEl0sHyvz2VtvMZw0T-OxBmXrFyJgSVpUCd-rZ-P-Jg=w1440-fcrop64=1,32b75a57cd48a5a8-nd-c0xffffffff-rj-k-no",
                        "bannerTvImageUrl": "https://yt3.ggpht.com/2kYBsLakXn5-ZKEm0E6BaGCOwPEUQUGQEl0sHyvz2VtvMZw0T-OxBmXrFyJgSVpUCd-rZ-P-Jg=w2120-fcrop64=1,00000000ffffffff-nd-c0xffffffff-rj-k-no",
                        "bannerTvLowImageUrl": "https://yt3.ggpht.com/2kYBsLakXn5-ZKEm0E6BaGCOwPEUQUGQEl0sHyvz2VtvMZw0T-OxBmXrFyJgSVpUCd-rZ-P-Jg=w854-fcrop64=1,00000000ffffffff-nd-c0xffffffff-rj-k-no",
                        "bannerTvMediumImageUrl": "https://yt3.ggpht.com/2kYBsLakXn5-ZKEm0E6BaGCOwPEUQUGQEl0sHyvz2VtvMZw0T-OxBmXrFyJgSVpUCd-rZ-P-Jg=w1280-fcrop64=1,00000000ffffffff-nd-c0xffffffff-rj-k-no",
                        "bannerTvHighImageUrl": "https://yt3.ggpht.com/2kYBsLakXn5-ZKEm0E6BaGCOwPEUQUGQEl0sHyvz2VtvMZw0T-OxBmXrFyJgSVpUCd-rZ-P-Jg=w1920-fcrop64=1,00000000ffffffff-nd-c0xffffffff-rj-k-no"
                    },
                    "hints": [
                        {
                            "property": "channel.banner.mobile.medium.image.url",
                            "value": "https://yt3.ggpht.com/2kYBsLakXn5-ZKEm0E6BaGCOwPEUQUGQEl0sHyvz2VtvMZw0T-OxBmXrFyJgSVpUCd-rZ-P-Jg=w640-fcrop64=1,32b75a57cd48a5a8-nd-c0xffffffff-rj-k-no"
                        },
                        {
                            "property": "channel.modules.show_comments.bool",
                            "value": "True"
                        },
                        {
                            "property": "channel.featured_tab.template.string",
                            "value": "Everything"
                        }
                    ]
                }
            },
            playlist: {}
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/4rY_azxAV5TRktP_k3RK-xtnVJg\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "f3XUjFaPSsk"
            },
            "snippet": {
                "publishedAt": "2013-04-23T12:52:59.000Z",
                "channelId": "UCSyVFIebowg9-cZlQILb7zg",
                "title": "Instabug - Startup Demo - ArabNet Beirut 2013",
                "description": "Instabug presented by Omar Khaled Gabr The Startup Demo is a series of 5 minute pitches by entrepreneurs with promising startups. The finalists, chosen from ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/f3XUjFaPSsk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/f3XUjFaPSsk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/f3XUjFaPSsk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "ArabNet Middle East",
                "liveBroadcastContent": "none"
            },
            video: {
                "kind": "youtube#video",
                "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/yZ7u3q65PAqHWaBgQockn-SgJ5Y\"",
                "id": "f3XUjFaPSsk",
                "snippet": {
                    "publishedAt": "2013-04-23T12:52:59.000Z",
                    "channelId": "UCSyVFIebowg9-cZlQILb7zg",
                    "title": "Instabug - Startup Demo - ArabNet Beirut 2013",
                    "description": "Instabug presented by Omar Khaled Gabr\n\nThe Startup Demo is a series of 5 minute pitches by entrepreneurs with promising startups. The finalists, chosen from over 60 contestants, have been carefully shortlisted by a jury of investors and entrepreneurship supporters.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/f3XUjFaPSsk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/f3XUjFaPSsk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/f3XUjFaPSsk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/f3XUjFaPSsk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "ArabNet Middle East",
                    "tags": [
                        "digital",
                        "entrepreneur",
                        "competition",
                        "arabnet",
                        "beirut",
                        "conference",
                        "pitch",
                        "startup"
                    ],
                    "categoryId": "27",
                    "liveBroadcastContent": "none",
                    "localized": {
                        "title": "Instabug - Startup Demo - ArabNet Beirut 2013",
                        "description": "Instabug presented by Omar Khaled Gabr\n\nThe Startup Demo is a series of 5 minute pitches by entrepreneurs with promising startups. The finalists, chosen from over 60 contestants, have been carefully shortlisted by a jury of investors and entrepreneurship supporters."
                    }
                },
                "contentDetails": {
                    "duration": "PT5M4S",
                    "dimension": "2d",
                    "definition": "sd",
                    "caption": "false",
                    "licensedContent": false,
                    "projection": "rectangular"
                },
                "status": {
                    "uploadStatus": "processed",
                    "privacyStatus": "public",
                    "license": "youtube",
                    "embeddable": true,
                    "publicStatsViewable": true
                },
                "statistics": {
                    "viewCount": "1783",
                    "likeCount": "10",
                    "dislikeCount": "0",
                    "favoriteCount": "0",
                    "commentCount": "0"
                }
            },
            channel: {
                "kind": "youtube#channel",
                "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/xlTsNnu6sSw5ZASFuwW-cUT1BME\"",
                "id": "UCSyVFIebowg9-cZlQILb7zg",
                "snippet": {
                    "title": "ArabNet Middle East",
                    "description": "ArabNet is the hub for digital professionals and entrepreneurs to connect and learn. Our activities aimed at building the web industry and supporting entrepreneurship in the region include: an annual summit in Beirut, widely acknowledged as the largest digital gathering in the MENA region, with a track record of bringing globally-renowned speakers to discuss the latest topics in the field, as well as successfully connecting entrepreneurs and startups with funding and incubation through the Ideathon and Startup Demo competitions.",
                    "customUrl": "ArabNetME10",
                    "publishedAt": "2010-03-23T20:56:58.000Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/a-/AAuE7mAPVYBipoJMCkJGkU19L3SuUhOeZKuH4OhPLA=s88-mo-c-c0xffffffff-rj-k-no",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/a-/AAuE7mAPVYBipoJMCkJGkU19L3SuUhOeZKuH4OhPLA=s240-mo-c-c0xffffffff-rj-k-no",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/a-/AAuE7mAPVYBipoJMCkJGkU19L3SuUhOeZKuH4OhPLA=s800-mo-c-c0xffffffff-rj-k-no",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "ArabNet Middle East",
                        "description": "ArabNet is the hub for digital professionals and entrepreneurs to connect and learn. Our activities aimed at building the web industry and supporting entrepreneurship in the region include: an annual summit in Beirut, widely acknowledged as the largest digital gathering in the MENA region, with a track record of bringing globally-renowned speakers to discuss the latest topics in the field, as well as successfully connecting entrepreneurs and startups with funding and incubation through the Ideathon and Startup Demo competitions."
                    },
                    "country": "LB"
                },
                "statistics": {
                    "viewCount": "609410",
                    "commentCount": "0",
                    "subscriberCount": "1867",
                    "hiddenSubscriberCount": false,
                    "videoCount": "1049"
                },
                "brandingSettings": {
                    "channel": {
                        "title": "ArabNet Middle East",
                        "description": "ArabNet is the hub for digital professionals and entrepreneurs to connect and learn. Our activities aimed at building the web industry and supporting entrepreneurship in the region include: an annual summit in Beirut, widely acknowledged as the largest digital gathering in the MENA region, with a track record of bringing globally-renowned speakers to discuss the latest topics in the field, as well as successfully connecting entrepreneurs and startups with funding and incubation through the Ideathon and Startup Demo competitions.",
                        "keywords": "arab mena middleeast entrepreneurship workshops roadshow arabnet arabnet2015 arabnetme startups network digital",
                        "defaultTab": "Featured",
                        "showBrowseView": true,
                        "unsubscribedTrailer": "ryKDUksOYaM",
                        "profileColor": "#9D3A34",
                        "country": "LB"
                    },
                    "image": {
                        "bannerImageUrl": "https://yt3.ggpht.com/I8uHA36huN8TTyUMf_SI3ORvZd7Yw8yBfZYgEjJbnNt7OBi2xovMNOisltth5a3adZZsWv9QMQ=w1060-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no",
                        "bannerMobileImageUrl": "https://yt3.ggpht.com/I8uHA36huN8TTyUMf_SI3ORvZd7Yw8yBfZYgEjJbnNt7OBi2xovMNOisltth5a3adZZsWv9QMQ=w640-fcrop64=1,32b75a57cd48a5a8-nd-c0xffffffff-rj-k-no",
                        "bannerTabletLowImageUrl": "https://yt3.ggpht.com/I8uHA36huN8TTyUMf_SI3ORvZd7Yw8yBfZYgEjJbnNt7OBi2xovMNOisltth5a3adZZsWv9QMQ=w1138-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no",
                        "bannerTabletImageUrl": "https://yt3.ggpht.com/I8uHA36huN8TTyUMf_SI3ORvZd7Yw8yBfZYgEjJbnNt7OBi2xovMNOisltth5a3adZZsWv9QMQ=w1707-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no",
                        "bannerTabletHdImageUrl": "https://yt3.ggpht.com/I8uHA36huN8TTyUMf_SI3ORvZd7Yw8yBfZYgEjJbnNt7OBi2xovMNOisltth5a3adZZsWv9QMQ=w2276-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no",
                        "bannerTabletExtraHdImageUrl": "https://yt3.ggpht.com/I8uHA36huN8TTyUMf_SI3ORvZd7Yw8yBfZYgEjJbnNt7OBi2xovMNOisltth5a3adZZsWv9QMQ=w2560-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no",
                        "bannerMobileLowImageUrl": "https://yt3.ggpht.com/I8uHA36huN8TTyUMf_SI3ORvZd7Yw8yBfZYgEjJbnNt7OBi2xovMNOisltth5a3adZZsWv9QMQ=w320-fcrop64=1,32b75a57cd48a5a8-nd-c0xffffffff-rj-k-no",
                        "bannerMobileMediumHdImageUrl": "https://yt3.ggpht.com/I8uHA36huN8TTyUMf_SI3ORvZd7Yw8yBfZYgEjJbnNt7OBi2xovMNOisltth5a3adZZsWv9QMQ=w960-fcrop64=1,32b75a57cd48a5a8-nd-c0xffffffff-rj-k-no",
                        "bannerMobileHdImageUrl": "https://yt3.ggpht.com/I8uHA36huN8TTyUMf_SI3ORvZd7Yw8yBfZYgEjJbnNt7OBi2xovMNOisltth5a3adZZsWv9QMQ=w1280-fcrop64=1,32b75a57cd48a5a8-nd-c0xffffffff-rj-k-no",
                        "bannerMobileExtraHdImageUrl": "https://yt3.ggpht.com/I8uHA36huN8TTyUMf_SI3ORvZd7Yw8yBfZYgEjJbnNt7OBi2xovMNOisltth5a3adZZsWv9QMQ=w1440-fcrop64=1,32b75a57cd48a5a8-nd-c0xffffffff-rj-k-no",
                        "bannerTvImageUrl": "https://yt3.ggpht.com/I8uHA36huN8TTyUMf_SI3ORvZd7Yw8yBfZYgEjJbnNt7OBi2xovMNOisltth5a3adZZsWv9QMQ=w2120-fcrop64=1,00000000ffffffff-nd-c0xffffffff-rj-k-no",
                        "bannerTvLowImageUrl": "https://yt3.ggpht.com/I8uHA36huN8TTyUMf_SI3ORvZd7Yw8yBfZYgEjJbnNt7OBi2xovMNOisltth5a3adZZsWv9QMQ=w854-fcrop64=1,00000000ffffffff-nd-c0xffffffff-rj-k-no",
                        "bannerTvMediumImageUrl": "https://yt3.ggpht.com/I8uHA36huN8TTyUMf_SI3ORvZd7Yw8yBfZYgEjJbnNt7OBi2xovMNOisltth5a3adZZsWv9QMQ=w1280-fcrop64=1,00000000ffffffff-nd-c0xffffffff-rj-k-no",
                        "bannerTvHighImageUrl": "https://yt3.ggpht.com/I8uHA36huN8TTyUMf_SI3ORvZd7Yw8yBfZYgEjJbnNt7OBi2xovMNOisltth5a3adZZsWv9QMQ=w1920-fcrop64=1,00000000ffffffff-nd-c0xffffffff-rj-k-no"
                    },
                    "hints": [
                        {
                            "property": "channel.banner.mobile.medium.image.url",
                            "value": "https://yt3.ggpht.com/I8uHA36huN8TTyUMf_SI3ORvZd7Yw8yBfZYgEjJbnNt7OBi2xovMNOisltth5a3adZZsWv9QMQ=w640-fcrop64=1,32b75a57cd48a5a8-nd-c0xffffffff-rj-k-no"
                        },
                        {
                            "property": "channel.modules.show_comments.bool",
                            "value": "True"
                        },
                        {
                            "property": "channel.featured_tab.template.string",
                            "value": "Everything"
                        }
                    ]
                }
            },
            playlist: {}
        }
    ],
    scrollLoading: true
};

const currentSearchResults = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.TOGGLE_SCROLL_LOADING:
            state.scrollLoading = !state.scrollLoading;
            return {...state};
        case types.GET_SEARCH_RESULTS:
            payload.items.forEach(searchElement => {
                searchElement.video = [];
                searchElement.channel = [];
                searchElement.playlist = [];
            });
            if (state.scrollLoading)
                return {...payload, scrollLoading: true};
            state.items.push(...payload.items);
            state.nextPageToken = payload.nextPageToken;
            return {...state};
        case types.GET_VIDEOS:
            let newStateVideos = state;
            newStateVideos.items.forEach(searchElement => {
                payload.items.forEach(element => {
                    if (searchElement.id.videoId === element.id) {
                        searchElement.video = element;
                    }
                });
            });
            return {...state, ...newStateVideos};
        case types.GET_CHANNELS:
            let newStateChannels = state;
            newStateChannels.items.forEach(searchElement => {
                payload.items.forEach(element => {
                    if (searchElement.snippet.channelId === element.id) {
                        searchElement.channel = element;
                    }
                });
            });
            return {...state, ...newStateChannels};
        default:
            return state;
    }
};

export default currentSearchResults;

