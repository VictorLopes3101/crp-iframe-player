window.addEventListener("message", function(e) {

		//console.log(e);

		var video_config_media = JSON.parse(e.data.video_config_media);
		var user_lang = e.data.lang;
		var video_stream_url = "";
		var video_id = video_config_media['metadata']['id'];
		var stream_array = [];

	    for(var i = 0; i < video_config_media['streams'].length; i++)
		{
		  if(video_config_media['streams'][i].format == 'trailer_hls' && video_config_media['streams'][i].hardsub_lang == user_lang)
		  {
		    stream_array.push(video_config_media['streams'][i].url.replace("clipTo/120000/", "clipTo/" + video_config_media['metadata']['duration'] + "/"));
		  }
		  if(video_config_media['streams'][i].format == 'adaptive_hls' && video_config_media['streams'][i].hardsub_lang == user_lang)
		  {
		    video_stream_url = video_config_media['streams'][i].url;
		    break;
		  }
		}
		console.log(stream_array);

		var playerInstance = jwplayer("player_div")
		playerInstance.setup({
		        sources: [{
			        file: "https://dl.v.vrv.co/evs/2e981f048008458c240acda526c076d7/assets/2e981f048008458c240acda526c076d7_3736156.mp4/clipFrom/0000/clipTo/1446000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvMmU5ODFmMDQ4MDA4NDU4YzI0MGFjZGE1MjZjMDc2ZDcvYXNzZXRzLzJlOTgxZjA0ODAwODQ1OGMyNDBhY2RhNTI2YzA3NmQ3XzM3MzYxNTYubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTczMDc2ODAzfX19XX0_&Signature=LUgodrLPR0Qp0GK4515UFiw3ts92V7NXECCyOBHnLUkB24eJQg~xdINmr3tGSTqRTkCsq5nLKILpnGSTOt20E6MWUl3C4tfsaTmGQSMrInh9i6u3gAmKnxRJGvSN0XqRhLhiDFuIWYEozqf6URHI8z-0p9CgdqU~ytUdoBgpyq792hY2U8L3LGtRf~VTkbqr-xLinKDUzON1ldTWeunV5JtA-kjLHSSKCpiKXQd0JkApBvIS9PQ~sxoSTmfyU0CgnlJRGG0NAmxoWdrtjGPmzLIwIsOoMBSPY1DIx1rBCvUvTwHtHrYSwJJ54AE2CiPUKzh6EisJ~ikt~kJnxSErug__&Key-Pair-Id=DLVR"
			      },{
			        file: "https://dl.v.vrv.co/evs/2e981f048008458c240acda526c076d7/assets/2e981f048008458c240acda526c076d7_3736161.mp4/clipFrom/0000/clipTo/1446000/master.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvMmU5ODFmMDQ4MDA4NDU4YzI0MGFjZGE1MjZjMDc2ZDcvYXNzZXRzLzJlOTgxZjA0ODAwODQ1OGMyNDBhY2RhNTI2YzA3NmQ3XzM3MzYxNjEubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTczMDc3NDI2fX19XX0_&Signature=jASmIobkj4bmL3d2DH4Z7tca979YkwLQa-nZCKvuQqrbVN4Pa3vB9J4jNomgLjIq4tKt43peOSyd5RAudyxoPnb84~5h5gO6C-iLWfdyPGduNx1Auz0dGrqw5t0CHbdZmnlN-E5ghhJaD9oqS1zrsEuplMF4p6JB1ugdoQAb~bCP7CMzSsOsq3Wr2jHUe9B3KbAkiKh--Jq6cPu64Q7IbVewL635NYhJ3FvmCjx62J0DwxQIo1i4S6x4dakQU~fxS8As5jRhE6ooreV8abnPnifZFt7fbd12eHe3wqFvgVeV3wdDHsNm8BcoDLqALZkZOQHpaxJcdHvc8X0358nX0A__&Key-Pair-Id=DLVR"
			        "default": "true"
			      },{
			        file: "https://dl.v.vrv.co/evs/2e981f048008458c240acda526c076d7/assets/2e981f048008458c240acda526c076d7_3736161.mp4/clipFrom/0000/clipTo/1446000/master.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvMmU5ODFmMDQ4MDA4NDU4YzI0MGFjZGE1MjZjMDc2ZDcvYXNzZXRzLzJlOTgxZjA0ODAwODQ1OGMyNDBhY2RhNTI2YzA3NmQ3XzM3MzYxNjEubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTczMDc3NDI2fX19XX0_&Signature=jASmIobkj4bmL3d2DH4Z7tca979YkwLQa-nZCKvuQqrbVN4Pa3vB9J4jNomgLjIq4tKt43peOSyd5RAudyxoPnb84~5h5gO6C-iLWfdyPGduNx1Auz0dGrqw5t0CHbdZmnlN-E5ghhJaD9oqS1zrsEuplMF4p6JB1ugdoQAb~bCP7CMzSsOsq3Wr2jHUe9B3KbAkiKh--Jq6cPu64Q7IbVewL635NYhJ3FvmCjx62J0DwxQIo1i4S6x4dakQU~fxS8As5jRhE6ooreV8abnPnifZFt7fbd12eHe3wqFvgVeV3wdDHsNm8BcoDLqALZkZOQHpaxJcdHvc8X0358nX0A__&Key-Pair-Id=DLVR"
			      }]
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
