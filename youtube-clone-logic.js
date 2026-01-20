const video_container = [{
    videoSource : "/thumline/anime-image.jpg",
    preview : {
        userProfileImg : "/thumline/bay-blade.jpg",
        videoInfo : {
            videoContent : "The fascinating places in Japan attract with peace intriguing nature, a captivating atmosphere",
            channelName : "All World Explore",
            videoView : "10M . 1 week ago"
    } }
},{
    videoSource : "/thumline/anime-image.jpg",
    preview : {
        userProfileImg : "/thumline/bay-blade.jpg",
        videoInfo : {
            videoContent : "The fascinating places in Japan attract with peace intriguing nature, a captivating atmosphere",
            channelName : "All World Explore",
            videoView : "10M . 1 week ago"
    } }
},{
    videoSource : "/thumline/anime-image.jpg",
    preview : {
        userProfileImg : "/thumline/bay-blade.jpg",
        videoInfo : {
            videoContent : "The fascinating places in Japan attract with peace intriguing nature, a captivating atmosphere",
            channelName : "All World Explore",
            videoView : "10M . 1 week ago"
    } }
},{
    videoSource : "/thumline/anime-image.jpg",
    preview : {
        userProfileImg : "/thumline/bay-blade.jpg",
        videoInfo : {
            videoContent : "The fascinating places in Japan attract with peace intriguing nature, a captivating atmosphere",
            channelName : "All World Explore",
            videoView : "10M . 1 week ago"
    } }
},{
    videoSource : "/thumline/anime-image.jpg",
    preview : {
        userProfileImg : "/thumline/bay-blade.jpg",
        videoInfo : {
            videoContent : "The fascinating places in Japan attract with peace intriguing nature, a captivating atmosphere",
            channelName : "All World Explore",
            videoView : "10M . 1 week ago"
    } }
},{
    videoSource : "/thumline/anime-image.jpg",
    preview : {
        userProfileImg : "/thumline/bay-blade.jpg",
        videoInfo : {
            videoContent : "The fascinating places in Japan attract with peace intriguing nature, a captivating atmosphere",
            channelName : "All World Explore",
            videoView : "10M . 1 week ago"
    } }
},{
    videoSource : "/thumline/anime-image.jpg",
    preview : {
        userProfileImg : "/thumline/bay-blade.jpg",
        videoInfo : {
            videoContent : "The fascinating places in Japan attract with peace intriguing nature, a captivating atmosphere",
            channelName : "All World Explore",
            videoView : "10M . 1 week ago"
    } }
},{
    videoSource : "/thumline/anime-image.jpg",
    preview : {
        userProfileImg : "/thumline/bay-blade.jpg",
        videoInfo : {
            videoContent : "The fascinating places in Japan attract with peace intriguing nature, a captivating atmosphere",
            channelName : "All World Explore",
            videoView : "10M . 1 week ago"
    } }
},{
    videoSource : "/thumline/anime-image.jpg",
    preview : {
        userProfileImg : "/thumline/bay-blade.jpg",
        videoInfo : {
            videoContent : "The fascinating places in Japan attract with peace intriguing nature, a captivating atmosphere",
            channelName : "All World Explore",
            videoView : "10M . 1 week ago"
    } }
},{
    videoSource : "/thumline/anime-image.jpg",
    preview : {
        userProfileImg : "/thumline/bay-blade.jpg",
        videoInfo : {
            videoContent : "The fascinating places in Japan attract with peace intriguing nature, a captivating atmosphere",
            channelName : "All World Explore",
            videoView : "10M . 1 week ago"
    } }
},{
    videoSource : "/thumline/anime-image.jpg",
    preview : {
        userProfileImg : "/thumline/bay-blade.jpg",
        videoInfo : {
            videoContent : "The fascinating places in Japan attract with peace intriguing nature, a captivating atmosphere",
            channelName : "All World Explore",
            videoView : "10M . 1 week ago"
    } }
},{
    videoSource : "/thumline/anime-image.jpg",
    preview : {
        userProfileImg : "/thumline/bay-blade.jpg",
        videoInfo : {
            videoContent : "The fascinating places in Japan attract with peace intriguing nature, a captivating atmosphere",
            channelName : "All World Explore",
            videoView : "10M . 1 week ago"
    } }
},{
    videoSource : "/thumline/anime-image.jpg",
    preview : {
        userProfileImg : "/thumline/bay-blade.jpg",
        videoInfo : {
            videoContent : "The fascinating places in Japan attract with peace intriguing nature, a captivating atmosphere",
            channelName : "All World Explore",
            videoView : "10M . 1 week ago"
    } }
},{
    videoSource : "/thumline/anime-image.jpg",
    preview : {
        userProfileImg : "/thumline/bay-blade.jpg",
        videoInfo : {
            videoContent : "The fascinating places in Japan attract with peace intriguing nature, a captivating atmosphere",
            channelName : "All World Explore",
            videoView : "10M . 1 week ago"
    } }
},{
    videoSource : "/thumline/anime-image.jpg",
    preview : {
        userProfileImg : "/thumline/bay-blade.jpg",
        videoInfo : {
            videoContent : "The fascinating places in Japan attract with peace intriguing nature, a captivating atmosphere",
            channelName : "All World Explore",
            videoView : "10M . 1 week ago"
    } }
}
];

let mainVideoContainer = "";

video_container.forEach((video) => {
    mainVideoContainer += `
     <div class="youtube-video-container">
            <div class="source-video">
                <img class="source-video" src="${video.videoSource}" alt="#">
            </div>
            <div class="source-video-info">
                <div class="source-video-profile">
                    <img class="source-profile-image" src="${video.preview.userProfileImg}" alt="#">
                </div>
                <div class="source-video-contents">
                    <p class="video-content-info">${video.preview.videoInfo.videoContent}</p>
                    <p class="channel-name">${video.preview.videoInfo.channelName}</p>
                    <p class="channel-views">${video.preview.videoInfo.videoView}</p>
                </div>
            </div>
        </div>
    `
});

console.log(mainVideoContainer);

document.querySelector(".main-youtube-video-container").innerHTML = mainVideoContainer;


function generateContent(sourceData, sourceDirectory) {
     let container = "";
sourceData.forEach((slide) => {
    container += `
     <div class="${slide.slideClass}">
                <div class="${slide.slideIconClass}"><img class="${slide.slideIconImgClass}" src="${slide.slideIcon}" alt="#"></div>
                <div class="${slide.slideNameClass}">${slide.slideName}</div>
            </div>
    `
});
console.log(container);

document.querySelector(sourceDirectory).innerHTML += container;
}

const top_slide = [{
    slideClass : "top-slide-window",
    slideIconClass :"top-slide-icon",
    slideIconImgClass : "top-img-source",
    slideIcon : "/thumline/home-image-03.jpg",
    slideNameClass : "top-slide-name",
    slideName : "Home"
},{
    slideClass : "top-slide-window",
    slideIconClass :"top-slide-icon",
    slideIconImgClass : "top-img-source",
    slideIcon : "/thumline/home-image-03.jpg",
    slideNameClass : "top-slide-name",
    slideName : "Shorts"
},{
    slideClass : "top-slide-window",
    slideIconClass :"top-slide-icon",
    slideIconImgClass : "top-img-source",
    slideIcon : "/thumline/home-image-03.jpg",
    slideNameClass : "top-slide-name",
    slideName : "Subcriptions"
}
];

const middleContainer = [{
    slideName : "You",
    slideSymbol : ">"
}
];

const middleSideConteiner = [{
    slideClass : "middle-slide-window",
    slideIconClass :"middle-slide-icon",
    slideIconImgClass : "middle-img-source",
    slideIcon : "/thumline/home-image-03.jpg",
    slideNameClass : "middle-slide-name",
    slideName : "History"
},{
    slideClass : "middle-slide-window",
    slideIconClass :"middle-slide-icon",
    slideIconImgClass : "middle-img-source",
    slideIcon : "/thumline/home-image-03.jpg",
    slideNameClass : "middle-slide-name",
    slideName : "Playlist"
},{
    slideClass : "middle-slide-window",
    slideIconClass :"middle-slide-icon",
    slideIconImgClass : "middle-img-source",
    slideIcon : "/thumline/home-image-03.jpg",
    slideNameClass : "middle-slide-name",
    slideName : "Your videos"
},{
    slideClass : "middle-slide-window",
    slideIconClass :"middle-slide-icon",
    slideIconImgClass : "middle-img-source",
    slideIcon : "/thumline/home-image-03.jpg",
    slideNameClass : "middle-slide-name",
    slideName : "Watch later"
},{
    slideClass : "middle-slide-window",
    slideIconClass :"middle-slide-icon",
    slideIconImgClass : "middle-img-source",
    slideIcon : "/thumline/home-image-03.jpg",
    slideNameClass : "middle-slide-name",
    slideName : "Linked videos"
},{
    slideClass : "middle-slide-window",
    slideIconClass :"middle-slide-icon",
    slideIconImgClass : "middle-img-source",
    slideIcon : "/thumline/home-image-03.jpg",
    slideNameClass : "middle-slide-name",
    slideName : "Downloads"
}];


let subcriptionContainer = [{
    slideClass : "middle-subcription-slide-window",
    slideIconClass :"middle-subcription-slide-icon",
    slideIconImgClass : "middle-subcription-img-source",
    slideIcon : "/thumline/bay-blade.jpg",
    slideNameClass : "middle-subcription-slide-name",
    slideName : "JK"
},{
    slideClass : "middle-subcription-slide-window",
    slideIconClass :"middle-subcription-slide-icon",
    slideIconImgClass : "middle-subcription-img-source",
    slideIcon : "/thumline/bay-blade.jpg",
    slideNameClass : "middle-subcription-slide-name",
    slideName : "Dave Dray"
},{
    slideClass : "middle-subcription-slide-window",
    slideIconClass :"middle-subcription-slide-icon",
    slideIconImgClass : "middle-subcription-img-source",
    slideIcon : "/thumline/bay-blade.jpg",
    slideNameClass : "middle-subcription-slide-name",
    slideName : "FILM ROLL"
},{
    slideClass : "middle-subcription-slide-window",
    slideIconClass :"middle-subcription-slide-icon",
    slideIconImgClass : "middle-subcription-img-source",
    slideIcon : "/thumline/bay-blade.jpg",
    slideNameClass : "middle-subcription-slide-name",
    slideName : "Low Level Game"
},{
    slideClass : "middle-subcription-slide-window",
    slideIconClass :"middle-subcription-slide-icon",
    slideIconImgClass : "middle-subcription-img-source",
    slideIcon : "/thumline/bay-blade.jpg",
    slideNameClass : "middle-subcription-slide-name",
    slideName : "Parithabangal"
},{
    slideClass : "middle-subcription-slide-window",
    slideIconClass :"middle-subcription-slide-icon",
    slideIconImgClass : "middle-subcription-img-source",
    slideIcon : "/thumline/bay-blade.jpg",
    slideNameClass : "middle-subcription-slide-name",
    slideName : "Santha SB"
},{
    slideClass : "middle-subcription-slide-window",
    slideIconClass :"middle-subcription-slide-icon",
    slideIconImgClass : "middle-subcription-img-source",
    slideIcon : "/thumline/bay-blade.jpg",
    slideNameClass : "middle-subcription-slide-name",
    slideName : "TechWiser"
}];

const exploreContainer = [{
    slideClass : "middle-explore-slide-window",
    slideIconClass :"middle-explore-slide-icon",
    slideIconImgClass : "middle-explore-img-source",
    slideIcon : "/thumline/home-image-03.jpg",
    slideNameClass : "middle-explore-slide-name",
    slideName : "Shopping"
},{
    slideClass : "middle-explore-slide-window",
    slideIconClass :"middle-explore-slide-icon",
    slideIconImgClass : "middle-explore-img-source",
    slideIcon : "/thumline/home-image-03.jpg",
    slideNameClass : "middle-explore-slide-name",
    slideName : "Music"
},{
    slideClass : "middle-explore-slide-window",
    slideIconClass :"middle-explore-slide-icon",
    slideIconImgClass : "middle-explore-img-source",
    slideIcon : "/thumline/home-image-03.jpg",
    slideNameClass : "middle-explore-slide-name",
    slideName : "Movies"
},{
    slideClass : "middle-explore-slide-window",
    slideIconClass :"middle-explore-slide-icon",
    slideIconImgClass : "middle-explore-img-source",
    slideIcon : "/thumline/home-image-03.jpg",
    slideNameClass : "middle-explore-slide-name",
    slideName : "Live"
},{
    slideClass : "middle-explore-slide-window",
    slideIconClass :"middle-explore-slide-icon",
    slideIconImgClass : "middle-explore-img-source",
    slideIcon : "/thumline/home-image-03.jpg",
    slideNameClass : "middle-explore-slide-name",
    slideName : "Gaming"
},{
    slideClass : "middle-explore-slide-window",
    slideIconClass :"middle-explore-slide-icon",
    slideIconImgClass : "middle-explore-img-source",
    slideIcon : "/thumline/home-image-03.jpg",
    slideNameClass : "middle-explore-slide-name",
    slideName : "News"
},{
    slideClass : "middle-explore-slide-window",
    slideIconClass :"middle-explore-slide-icon",
    slideIconImgClass : "middle-explore-img-source",
    slideIcon : "/thumline/home-image-03.jpg",
    slideNameClass : "middle-explore-slide-name",
    slideName : "Sports"
},{
    slideClass : "middle-explore-slide-window",
    slideIconClass :"middle-explore-slide-icon",
    slideIconImgClass : "middle-explore-img-source",
    slideIcon : "/thumline/home-image-03.jpg",
    slideNameClass : "middle-explore-slide-name",
    slideName : "Courses"
},{
    slideClass : "middle-explore-slide-window",
    slideIconClass :"middle-explore-slide-icon",
    slideIconImgClass : "middle-explore-img-source",
    slideIcon : "/thumline/home-image-03.jpg",
    slideNameClass : "middle-explore-slide-name",
    slideName : "Fashion & Beauty"
},{
    slideClass : "middle-explore-slide-window",
    slideIconClass :"middle-explore-slide-icon",
    slideIconImgClass : "middle-explore-img-source",
    slideIcon : "/thumline/home-image-03.jpg",
    slideNameClass : "middle-explore-slide-name",
    slideName : "Podcasts"
}];

const moreOperationContainer = [{
    slideClass : "more-operation-slide-window",
    slideIconClass :"more-operation-slide-icon",
    slideIconImgClass : "more-operation-img-source",
    slideIcon : "/thumline/home-image-03.jpg",
    slideNameClass : "more-operation-slide-name",
    slideName : "Youtube Premium"
},{
    slideClass : "more-operation-slide-window",
    slideIconClass :"more-operation-slide-icon",
    slideIconImgClass : "more-operation-img-source",
    slideIcon : "/thumline/home-image-03.jpg",
    slideNameClass : "more-operation-slide-name",
    slideName : "Youtube studio"
},{
    slideClass : "more-operation-slide-window",
    slideIconClass :"more-operation-slide-icon",
    slideIconImgClass : "more-operation-img-source",
    slideIcon : "/thumline/home-image-03.jpg",
    slideNameClass : "more-operation-slide-name",
    slideName : "Youtube Music"
},{
    slideClass : "more-operation-slide-window",
    slideIconClass :"more-operation-slide-icon",
    slideIconImgClass : "more-operation-img-source",
    slideIcon : "/thumline/home-image-03.jpg",
    slideNameClass : "more-operation-slide-name",
    slideName : "Youtube Kids"
}];

const extraOperationContainer = [{
    slideClass : "extra-operation-slide-window",
    slideIconClass :"extra-operation-slide-icon",
    slideIconImgClass : "extra-operation-img-source",
    slideIcon : "/thumline/home-image-03.jpg",
    slideNameClass : "extra-operation-slide-name",
    slideName : "Settings"
},{
    slideClass : "extra-operation-slide-window",
    slideIconClass :"extra-operation-slide-icon",
    slideIconImgClass : "extra-operation-img-source",
    slideIcon : "/thumline/home-image-03.jpg",
    slideNameClass : "extra-operation-slide-name",
    slideName : "Report history"
},{
    slideClass : "extra-operation-slide-window",
    slideIconClass :"extra-operation-slide-icon",
    slideIconImgClass : "extra-operation-img-source",
    slideIcon : "/thumline/home-image-03.jpg",
    slideNameClass : "extra-operation-slide-name",
    slideName : "Help"
},{
    slideClass : "extra-operation-slide-window",
    slideIconClass :"extra-operation-slide-icon",
    slideIconImgClass : "extra-operation-img-source",
    slideIcon : "/thumline/home-image-03.jpg",
    slideNameClass : "extra-operation-slide-name",
    slideName : "Send feedback"
}];

const barBreak = `<div class="barbreak"></div>`;

generateContent(top_slide, ".top-slide-container");
document.querySelector(".top-slide-container").innerHTML += barBreak;

let containerR2 = "";
middleContainer.forEach((slide) =>{
    containerR2 = `
    <div class="middle-slide-window middle-slide-header active">
                <div class="middle-slide-header-name">${slide.slideName}</div> <div class="slide-symbol">${slide.slideSymbol}</div>
            </div> 
    `
});

document.querySelector(".middle-slide-container").innerHTML += containerR2;
generateContent(middleSideConteiner, ".middle-slide-container");
document.querySelector(".middle-slide-container").innerHTML += barBreak;

let subcriotion = `<div class="subcription-slide-header-name">Subcription</div>`;
document.querySelector(".middle-subcription-slide-container").innerHTML = subcriotion;
generateContent(subcriptionContainer, ".middle-subcription-slide-container");
document.querySelector(".middle-subcription-slide-container").innerHTML += barBreak;

document.querySelector(".middle-explore-container").innerHTML = `<div class="explore-slide-header-name">Explore</div>`;
generateContent(exploreContainer,".middle-explore-container");
document.querySelector(".middle-explore-container").innerHTML += barBreak;

document.querySelector(".more-operation-youtube-container").innerHTML = `<div class="more-slide-header-name">More from YouTube</div>`;
generateContent(moreOperationContainer, ".more-operation-youtube-container");
document.querySelector(".more-operation-youtube-container").innerHTML += barBreak;

generateContent(extraOperationContainer, ".extra-youtube-operation-container");
document.querySelector(".extra-youtube-operation-container").innerHTML += barBreak;
