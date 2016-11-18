"use strict";

//data simulating API response from Twitch
var data = [
  {
    "stream": {
      "mature": false,
      "status": "Greg working on Electron-Vue boilerplate w/ Akira #programming #vuejs #electron",
      "broadcaster_language": "en",
      "display_name": "FreeCodeCamp",
      "game": "Creative",
      "language": "en",
      "_id": 79776140,
      "name": "freecodecamp",
      "created_at": "2015-01-14T03:36:47Z",
      "updated_at": "2016-09-17T05:00:52Z",
      "delay": null,
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
      "banner": null,
      "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-channel_offline_image-b8e133c78cd51cb0-1920x1080.png",
      "background": null,
      "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_banner-6f5e3445ff474aec-480.png",
      "profile_banner_background_color": null,
      "partner": false,
      "url": "https://www.twitch.tv/freecodecamp",
      "views": 161989,
      "followers": 10048,
      "_links": {
        "self": "https://api.twitch.tv/kraken/channels/freecodecamp",
        "follows": "https://api.twitch.tv/kraken/channels/freecodecamp/follows",
        "commercial": "https://api.twitch.tv/kraken/channels/freecodecamp/commercial",
        "stream_key": "https://api.twitch.tv/kraken/channels/freecodecamp/stream_key",
        "chat": "https://api.twitch.tv/kraken/chat/freecodecamp",
        "subscriptions": "https://api.twitch.tv/kraken/channels/freecodecamp/subscriptions",
        "editors": "https://api.twitch.tv/kraken/channels/freecodecamp/editors",
        "teams": "https://api.twitch.tv/kraken/channels/freecodecamp/teams",
        "videos": "https://api.twitch.tv/kraken/channels/freecodecamp/videos"
      }
    },
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/freecodecamp",
      "channel": "https://api.twitch.tv/kraken/channels/freecodecamp"
    }
  },
  {
    "stream": null,
    "display_name": "OgamingSC2",
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/ogamingsc2",
      "channel": "https://api.twitch.tv/kraken/channels/ogamingsc2"
    }
  },
  {
    "stream": {
      "mature": false,
      "status": "RERUN: StarCraft 2 - Kane vs. HuK (ZvP) - WCS Season 3 Challenger AM - Match 4",
      "broadcaster_language": "en",
      "display_name": "ESL_SC2",
      "game": "StarCraft II",
      "language": "en",
      "_id": 30220059,
      "name": "esl_sc2",
      "created_at": "2012-05-02T09:59:20Z",
      "updated_at": "2016-09-17T06:02:57Z",
      "delay": null,
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
      "banner": null,
      "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-channel_offline_image-5a8657f8393c9d85-1920x1080.jpeg",
      "background": null,
      "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_banner-f8295b33d1846e75-480.jpeg",
      "profile_banner_background_color": "#050506",
      "partner": true,
      "url": "https://www.twitch.tv/esl_sc2",
      "views": 60843789,
      "followers": 135275,
      "_links": {
        "self": "https://api.twitch.tv/kraken/channels/esl_sc2",
        "follows": "https://api.twitch.tv/kraken/channels/esl_sc2/follows",
        "commercial": "https://api.twitch.tv/kraken/channels/esl_sc2/commercial",
        "stream_key": "https://api.twitch.tv/kraken/channels/esl_sc2/stream_key",
        "chat": "https://api.twitch.tv/kraken/chat/esl_sc2",
        "subscriptions": "https://api.twitch.tv/kraken/channels/esl_sc2/subscriptions",
        "editors": "https://api.twitch.tv/kraken/channels/esl_sc2/editors",
        "teams": "https://api.twitch.tv/kraken/channels/esl_sc2/teams",
        "videos": "https://api.twitch.tv/kraken/channels/esl_sc2/videos"
      }
    },
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/esl_sc2",
      "channel": "https://api.twitch.tv/kraken/channels/esl_sc2"
    }
  },
  {
    "stream": null,
    "display_name": "noobs2ninjas",
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/esl_sc2",
      "channel": "https://api.twitch.tv/kraken/channels/esl_sc2"
    }
  },
  {
    "error": "Not Found",
    "status": 404,
    "message": "Channel 'not-a-valid-account' does not exist"
  }
];


//Add stream data to page
function addStream(number_in_object){
  
  var parent = document.getElementById('twitch-streams');
  var stream = document.createElement('DIV');
  var logo = document.createElement('IMG');
  var titleSpan = document.createElement('SPAN');
  var statusSpan = document.createElement('SPAN');
  

  if (data[number_in_object]['stream'] === null){   //if 'stream's value is 'null', the stream is offline
   
    
    stream.setAttribute('class', 'stream offline');
    stream.setAttribute('style', 'background-color: pink;');

    
    logo.src = 'https://t4.ftcdn.net/jpg/00/98/90/15/500_F_98901583_gAZzkuebkMSqdrRa7Qfq94Vrv9Heqn0N.jpg'
    logo.setAttribute('class', 'logo-class');
    
    titleSpan.innerHTML = "<a href='" + "https://www.twitch.tv/" + data[number_in_object]['display_name'] + "' target='_blank'>" + data[number_in_object]['display_name'] +"</a>";
    titleSpan.setAttribute('class', 'title-span-class');
    
    statusSpan.innerHTML = "Offline";
    statusSpan.setAttribute('class', 'status-span-class');
    
    
    stream.appendChild(logo);   
    stream.appendChild(titleSpan);
    stream.appendChild(statusSpan);
    parent.appendChild(stream);
    
  } else if (data[number_in_object]['status'] === 404){ //channel does not exist
    
    stream.setAttribute('class', 'stream');
    stream.setAttribute('style', 'background-color: #DB3A34;');
    

    logo.src = "https://image.freepik.com/free-icon/sad-sleepy-emoticon-face-square_318-58580.jpg";
    logo.setAttribute('class', 'logo-class');
    

    titleSpan.innerHTML = data[number_in_object]['message'];
    titleSpan.setAttribute('class', 'title-span-class');
    
    stream.appendChild(logo);
    stream.appendChild(titleSpan);
    parent.appendChild(stream);
             
  } else { //chanel does exist and stream is online

    stream.setAttribute('class', 'stream online');
    stream.setAttribute('style', 'background-color: lightblue;');
    
    logo.src = data[number_in_object]['stream']['logo'];
    logo.setAttribute('class', 'logo-class');
    
    titleSpan.innerHTML = "<a href='" + data[number_in_object]['stream']['url'] + "' target='_blank'>" + data[number_in_object]['stream']['display_name'] +"</a>";
    titleSpan.setAttribute('class', 'title-span-class');

    statusSpan.innerHTML = data[number_in_object]['stream']['status'];
    statusSpan.setAttribute('class', 'status-span-class');

    stream.appendChild(logo);
    stream.appendChild(titleSpan);
    stream.appendChild(statusSpan);
    parent.appendChild(stream);
  }
}

addStream(0);

addStream(1);

addStream(2);

addStream(3);

addStream(4);

//when 'all' button is pushed, display all streams
document.getElementsByClassName('all-button')[0].addEventListener('click', function() {
  var streams = document.getElementsByClassName('stream');
  
  for (var i = 0, length = streams.length; i < length; i++){
    streams[i].style.display = "flex";
  }
});

//when 'online' button is pushed, display only online streams
document.getElementsByClassName('online-button')[0].addEventListener('click', function() {
  var streams = document.getElementsByClassName('stream');
  
  for (var i = 0, length = streams.length; i < length; i++){
    if (streams[i].getAttribute('class') === 'stream online'){
      streams[i].style.display = 'flex';
    } else {
      streams[i].style.display = 'none';
    }
  }
});
//when 'offline' button is pushed, display only offline streams
document.getElementsByClassName('offline-button')[0].addEventListener('click', function() {
  var streams = document.getElementsByClassName('stream');
  
  for (var i = 0, length = streams.length; i < length; i++){
    if (streams[i].getAttribute('class') === 'stream offline'){
      streams[i].style.display = 'flex';
    } else {
      streams[i].style.display = 'none';
    }
  }
});