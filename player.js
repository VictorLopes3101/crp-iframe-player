window.addEventListener("message", function(e) {

		//console.log(e);
		var message = e.data.video_config_media;
		var video_config_media = JSON.parse(message.replace("/\\", "/"));
		var user_lang = e.data.lang;
		var video_stream_url = "";
		var video_id = video_config_media['metadata']['id'];
		var new_line = "";
		var rows_number = 0;
		var video_m3u8 = "#EXTM3U";

	    for(var i = 0; i < video_config_media['streams'].length; i++)
		{
		  if(video_config_media['streams'][i].format == 'trailer_hls' && video_config_media['streams'][i].hardsub_lang == user_lang)
		  {
		    if(rows_number <= 5){
    		    var oReq = new XMLHttpRequest();
    		    oReq.open("get", video_config_media['streams'][i].url.replace("clipTo/120000/", "clipTo/" + video_config_media['metadata']['duration'] + "/").replace("index.m3u8", "master.m3u8"), false);
    		    oReq.onreadystatechange = function() {
                    if (oReq.readyState == 4) {
                        new_line = '\n' + oReq.responseText.replace("#EXTM3U", "").trim();
                        video_m3u8 += new_line;
                    }
    		    }
                oReq.send();
                rows_number++;
		    }
		  }
		  if(video_config_media['streams'][i].format == 'adaptive_hls' && video_config_media['streams'][i].hardsub_lang == user_lang)
		  {
		    video_stream_url = video_config_media['streams'][i].url;
		    break;
		  }
		}
		
		if(video_stream_url == ""){
		    var blob = new Blob([video_m3u8], {type: "text/plain; charset=utf-8"});
		    video_stream_url = URL.createObjectURL(blob) + "#.m3u8";
		}
        
		var playerInstance = jwplayer("player_div")
		playerInstance.setup({
		        file: video_stream_url,
		        image: video_config_media['thumbnail']['url'],
		        width: "100%",
		        height: "100%"
		});

		jwplayer().on('ready', function(e) {
			if(localStorage.getItem(video_id) != null){
				document.getElementsByTagName("video")[0].currentTime = localStorage.getItem(video_id);
			}
			document.body.querySelector(".loading_container").style.display = "none";
		});
		const interval = setInterval(function() {
			if(jwplayer().getState() == "playing"){
   				localStorage.setItem(video_id, jwplayer().getPosition());
   			}
 		}, 5000);
});
