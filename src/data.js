export const API_KEY = "AIzaSyDNDDQ8TArr7cP7sZAvM97EbO4jENVL_H0"

export const viewCount = (value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000) + "M"
    }
     else if(value>=1000){
        return Math.floor(value/1000) + "K"
    }
    else{
        return value
    }
}

// "kind": "youtube#commentThreadListResponse",
//   "etag": "BvpgZABQgC63c4TuPpkH-Bbjhhc",
//   "nextPageToken": "Z2V0X25ld2VzdF9maXJzdC0tQ2dnSWdBUVZGN2ZST0JJRkNJZ2dHQUFTQlFpSElCZ0FFZ1VJcUNBWUFCSUZDSWtnR0FBU0JRaWRJQmdCR0FBaURnb01DSWo3aWFBR0VLRFFvYXdE",
//   "pageInfo": {
//     "totalResults": 20,
//     "resultsPerPage": 20
//   },
//   "items": [
//     {
//       "kind": "youtube#commentThread",
//       "etag": "ykQLwD-FXi5eIVUWl404EYS_xDU",
//       "id": "UgxzQM1vXPdRqY1k2bB4AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "hBTGsfb_6iS7OK6s4pIcHmlVU88",
//           "id": "UgxzQM1vXPdRqY1k2bB4AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textDisplay": "The mask wearing jabbed cashless 666 society,... read the Bible.",
//             "textOriginal": "The mask wearing jabbed cashless 666 society,... read the Bible.",
//             "authorDisplayName": "@etienne7774",
//             "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_mAqJb4G--_K5GIUtPf7ZaCiBexE5zTjIWyvGvZ7wo=s48-c-k-c0x00ffffff-no-rj",
//             "authorChannelUrl": "http://www.youtube.com/@etienne7774",
//             "authorChannelId": {
//               "value": "UCRJwf2D6LgN5rgGX7VBeh4w"
//             },
//             "canRate": true,
//             "viewerRating": "none",
//             "likeCount": 0,
//             "publishedAt": "2024-02-07T12:14:00Z",
//             "updatedAt": "2024-02-07T12:14:00Z"
//           }
//         },
//         "canReply": true,
//         "totalReplyCount": 0,
//         "isPublic": true
//       }
//     },
//     {
//       "kind": "youtube#commentThread",
//       "etag": "FPUfxuYawCHsfCCmaNclv4-8l40",
//       "id": "UgxJRPGIe1qACkU9vrV4AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "nCRsnDbiQvf9mQQYdNCGkxl4ZKs",
//           "id": "UgxJRPGIe1qACkU9vrV4AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textDisplay": "This video was 8 years ago, but what happened to Sam Bankman Fried last year is what said in the video.",
//             "textOriginal": "This video was 8 years ago, but what happened to Sam Bankman Fried last year is what said in the video.",
//             "authorDisplayName": "@computerscienceengineering8710",
//             "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_nh3Kue1Esrdh8RbcZxg9xBiEyNjrQIeS1Xfb4a_uBiaw=s48-c-k-c0x00ffffff-no-rj",
//             "authorChannelUrl": "http://www.youtube.com/@computerscienceengineering8710",
//             "authorChannelId": {
//               "value": "UCgSXLFaEvKBWbwjjHo3W6CQ"
//             },
//             "canRate": true,
//             "viewerRating": "none",
//             "likeCount": 0,
//             "publishedAt": "2024-01-24T04:18:03Z",
//             "updatedAt": "2024-01-24T04:18:03Z"
//           }
//         },
//         "canReply": true,
//         "totalReplyCount": 2,
//         "isPublic": true
//       },
//       "replies": {
//         "comments": [
//           {
//             "kind": "youtube#comment",
//             "etag": "FzXT-cHdORnJzy-PGeiHVBk6-Y8",
//             "id": "UgxJRPGIe1qACkU9vrV4AaABAg.9zwY9z9YWlyA-Tkz_Q0xiC",
//             "snippet": {
//               "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//               "videoId": "_VB39Jo8mAQ",
//               "textDisplay": "Hi",
//               "textOriginal": "Hi",
//               "parentId": "UgxJRPGIe1qACkU9vrV4AaABAg",
//               "authorDisplayName": "@Raj-dd1tj",
//               "authorProfileImageUrl": "https://yt3.ggpht.com/BFp4jkFL4UtLlAvq8ir1-se4xTVnfT2DcjAMlTW1cUc8DTl6XUl_7jn1kuXsNFpxnZEf2Ulm=s48-c-k-c0x00ffffff-no-rj",
//               "authorChannelUrl": "http://www.youtube.com/@Raj-dd1tj",
//               "authorChannelId": {
//                 "value": "UCWeOHYar41NLKbHC4U80tKw"
//               },
//               "canRate": true,
//               "viewerRating": "none",
//               "likeCount": 0,
//               "publishedAt": "2024-02-06T11:13:00Z",
//               "updatedAt": "2024-02-06T11:13:00Z"
//             }
//           },
//           {
//             "kind": "youtube#comment",
//             "etag": "_NWL__a5t4KAzfogsYPWrzgUecs",
//             "id": "UgxJRPGIe1qACkU9vrV4AaABAg.9zwY9z9YWlyA-Tlfqs_90J",
//             "snippet": {
//               "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//               "videoId": "_VB39Jo8mAQ",
//               "textDisplay": "Hi",
//               "textOriginal": "Hi",
//               "parentId": "UgxJRPGIe1qACkU9vrV4AaABAg",
//               "authorDisplayName": "@Raj-dd1tj",
//               "authorProfileImageUrl": "https://yt3.ggpht.com/BFp4jkFL4UtLlAvq8ir1-se4xTVnfT2DcjAMlTW1cUc8DTl6XUl_7jn1kuXsNFpxnZEf2Ulm=s48-c-k-c0x00ffffff-no-rj",
//               "authorChannelUrl": "http://www.youtube.com/@Raj-dd1tj",
//               "authorChannelId": {
//                 "value": "UCWeOHYar41NLKbHC4U80tKw"
//               },
//               "canRate": true,
//               "viewerRating": "none",
//               "likeCount": 0,
//               "publishedAt": "2024-02-06T11:19:03Z",
//               "updatedAt": "2024-02-06T11:19:03Z"
//             }
//           }
//         ]
//       }
//     },
//     {
//       "kind": "youtube#commentThread",
//       "etag": "A2R528LUGbLXlDBOc2s4XGigCCs",
//       "id": "Ugy-_t6FGSzQcaYEJYF4AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "KABEFd1Jx5gPWmZKCrITb8NSoHY",
//           "id": "Ugy-_t6FGSzQcaYEJYF4AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textDisplay": "Brilliant",
//             "textOriginal": "Brilliant",
//             "authorDisplayName": "@beverleyyohanan9867",
//             "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_lJYdCPpzJGGNcOhM_WGC6XIJEvaB4hVcBFhP0fLhvCGf8=s48-c-k-c0x00ffffff-no-rj",
//             "authorChannelUrl": "http://www.youtube.com/@beverleyyohanan9867",
//             "authorChannelId": {
//               "value": "UC-kjC2JVH7j9Lv5AbElDsDA"
//             },
//             "canRate": true,
//             "viewerRating": "none",
//             "likeCount": 0,
//             "publishedAt": "2024-01-20T12:39:35Z",
//             "updatedAt": "2024-01-20T12:39:35Z"
//           }
//         },
//         "canReply": true,
//         "totalReplyCount": 0,
//         "isPublic": true
//       }
//     },
//     {
//       "kind": "youtube#commentThread",
//       "etag": "9GaI0OkSvXvF7wIivM2WOGeu_qk",
//       "id": "Ugx7Kt7-FI62gmW1Ozt4AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "2aRPDS-II2NaAQMsl22N7qXH4Lg",
//           "id": "Ugx7Kt7-FI62gmW1Ozt4AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textDisplay": "This is the start of a comment thread. 2024",
//             "textOriginal": "This is the start of a comment thread. 2024",
//             "authorDisplayName": "@zdwork-mg8wt",
//             "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_mCM1B0rSjyqJwtR3L_Tosx7loqS5CcjAy7JuA1YMR9xzDwGzgpvOS7Mx5tZVOJx-ai7w=s48-c-k-c0x00ffffff-no-rj",
//             "authorChannelUrl": "http://www.youtube.com/@zdwork-mg8wt",
//             "authorChannelId": {
//               "value": "UCC7uxlvpgsDb2TT3_wX7tHQ"
//             },
//             "canRate": true,
//             "viewerRating": "none",
//             "likeCount": 0,
//             "publishedAt": "2024-01-18T07:28:51Z",
//             "updatedAt": "2024-01-18T07:28:51Z"
//           }
//         },
//         "canReply": true,
//         "totalReplyCount": 0,
//         "isPublic": true
//       }
//     },
//     {
//       "kind": "youtube#commentThread",
//       "etag": "j9q_gsYx-uqqfR9uh0ZJIzMbd5A",
//       "id": "Ugy0EJR6Bo3mfeIkhaR4AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "WDufA-R7QgO0iM_JOvYbWH6Beo0",
//           "id": "Ugy0EJR6Bo3mfeIkhaR4AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textDisplay": "This is the start of a comment thread.",
//             "textOriginal": "This is the start of a comment thread.",
//             "authorDisplayName": "@zdwork-mg8wt",
//             "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_mCM1B0rSjyqJwtR3L_Tosx7loqS5CcjAy7JuA1YMR9xzDwGzgpvOS7Mx5tZVOJx-ai7w=s48-c-k-c0x00ffffff-no-rj",
//             "authorChannelUrl": "http://www.youtube.com/@zdwork-mg8wt",
//             "authorChannelId": {
//               "value": "UCC7uxlvpgsDb2TT3_wX7tHQ"
//             },
//             "canRate": true,
//             "viewerRating": "none",
//             "likeCount": 0,
//             "publishedAt": "2024-01-18T07:28:14Z",
//             "updatedAt": "2024-01-18T07:28:14Z"
//           }
//         },
//         "canReply": true,
//         "totalReplyCount": 0,
//         "isPublic": true
//       }
//     },
//     {
//       "kind": "youtube#commentThread",
//       "etag": "mZLpcJwprwhnAK0q3sZlvh-AAeQ",
//       "id": "UgyUblhNlygF1DNO8ex4AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "iRykQdxMFvc4r9yLf-9ZFlsFVfM",
//           "id": "UgyUblhNlygF1DNO8ex4AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textDisplay": "Wow, amazing video",
//             "textOriginal": "Wow, amazing video",
//             "authorDisplayName": "@PersediPL",
//             "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_lM2aqe-b8N4EYJVvrYumTPKa9Nr0y-2ZFwQrDeDGF-Aw=s48-c-k-c0x00ffffff-no-rj",
//             "authorChannelUrl": "http://www.youtube.com/@PersediPL",
//             "authorChannelId": {
//               "value": "UCq1Sx31_mPqZ--dboO5YgZA"
//             },
//             "canRate": true,
//             "viewerRating": "none",
//             "likeCount": 0,
//             "publishedAt": "2023-12-12T10:51:11Z",
//             "updatedAt": "2023-12-12T10:51:11Z"
//           }
//         },
//         "canReply": true,
//         "totalReplyCount": 0,
//         "isPublic": true
//       }
//     },
//     {
//       "kind": "youtube#commentThread",
//       "etag": "mgSOwlmZV38-n6nelg0cChGj_hM",
//       "id": "Ugwo09-f0k1JkUMotBp4AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "p1EMWuUBv6QN2NY9V4cJACFbBAk",
//           "id": "Ugwo09-f0k1JkUMotBp4AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textDisplay": "This is the start of a comment thread.",
//             "textOriginal": "This is the start of a comment thread.",
//             "authorDisplayName": "@c03lh09",
//             "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_krbujZLleisJdBpaL5cw4mBV2kPuMFxAdakQ2GoueCfA=s48-c-k-c0x00ffffff-no-rj",
//             "authorChannelUrl": "http://www.youtube.com/@c03lh09",
//             "authorChannelId": {
//               "value": "UCCJJyzxlUzcoVDeNkTqMf-Q"
//             },
//             "canRate": true,
//             "viewerRating": "none",
//             "likeCount": 0,
//             "publishedAt": "2023-11-18T22:27:40Z",
//             "updatedAt": "2023-11-18T22:27:40Z"
//           }
//         },
//         "canReply": true,
//         "totalReplyCount": 0,
//         "isPublic": true
//       }
//     },
//     {
//       "kind": "youtube#commentThread",
//       "etag": "510HICTRCcuDqJaX0f8GtCGvq3s",
//       "id": "UgyoX1KsTZELUiULNHl4AaABAg",
//       "snippet": {
//         "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//         "videoId": "_VB39Jo8mAQ",
//         "topLevelComment": {
//           "kind": "youtube#comment",
//           "etag": "sR2HwbzyS-jBRxNjjxtsquwMGAo",
//           "id": "UgyoX1KsTZELUiULNHl4AaABAg",
//           "snippet": {
//             "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
//             "videoId": "_VB39Jo8mAQ",
//             "textD