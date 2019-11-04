window.addEventListener("message", function(e) {

		//console.log(e);

		var video_config_media = JSON.parse(e.data.video_config_media);
		var user_lang = e.data.lang;
		var video_stream_url = "";
		var video_id = video_config_media['metadata']['id'];

	    for(var i = 0; i < video_config_media['streams'].length; i++)
		{
		  if(video_config_media['streams'][i].format == 'trailer_hls' && video_config_media['streams'][i].hardsub_lang == user_lang)
		  {
		    video_stream_url = video_config_media['streams'][i].url.replace("clipTo/120000/", "clipTo/" + video_config_media['metadata']['duration'] + "/");
		    break;
		  }
		  if(video_config_media['streams'][i].format == 'adaptive_hls' && video_config_media['streams'][i].hardsub_lang == user_lang)
		  {
		    video_stream_url = video_config_media['streams'][i].url;
		    break;
		  }
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
window.addEventListener("message", function(e) {

		//console.log(e);

		var video_config_media = JSON.parse(e.data.video_config_media);
		var user_lang = e.data.lang;
		var video_stream_url = "";
		var video_id = video_config_media['metadata']['id'];
		var video_stream_m3u8 = "#EXTM3U";
		var first = true;

	    for(var i = 0; i < video_config_media['streams'].length; i++)
		{
		  if(video_config_media['streams'][i].format == 'trailer_hls' && video_config_media['streams'][i].hardsub_lang == user_lang)
		  {
		  	var new_line = "";

		  	var xhr = new XMLHttpRequest();
			xhr.open('GET', video_config_media['streams'][i].url.replace("clipTo/120000/", "clipTo/" + video_config_media['metadata']['duration'] + "/").replace("index", "master"));
			xhr.send();
			xhr.onload = function() {
				new_line = xhr.response;
			  	console.log(new_line);
			};
			if(first == false){new_line.replace("#EXTM3U", "")}
		    video_stream_m3u8 = video_stream_m3u8 + new_line;
			first = false;
		  }
		  if(video_config_media['streams'][i].format == 'adaptive_hls' && video_config_media['streams'][i].hardsub_lang == user_lang)
		  {
		    video_stream_url = video_config_media['streams'][i].url;
		    break;
		  }
		}

		console.log(video_stream_m3u8);

		var playerInstance = jwplayer("player_div")
		playerInstance.setup({
		        file: video_stream_m3u8,
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
