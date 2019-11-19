window.addEventListener("message", function(e) {

		console.log(e);

		var video_config_media = JSON.parse(e.data.video_config_media);
		var user_lang = e.data.lang;
		var video_stream_url = "";
		var video_id = video_config_media['metadata']['id'];
		var rows_number = 0;
		var video_m3u8_array = [];

	    for(var i = 0; i < video_config_media['streams'].length; i++)
		{
		  if(video_config_media['streams'][i].format == 'trailer_hls' && video_config_media['streams'][i].hardsub_lang == user_lang)
		  {
		    if(rows_number <= 5){
			video_m3u8_array.push(video_config_media['streams'][i].url.replace("clipTo/120000/", "clipTo/" + video_config_media['metadata']['duration'] + "/"));
    		    	rows_number++;
		    }
		  }
		  if(video_config_media['streams'][i].format == 'adaptive_hls' && video_config_media['streams'][i].hardsub_lang == user_lang)
		  {
		    video_stream_url = video_config_media['streams'][i].url;
		    break;
		  }
		}
		console.log(video_m3u8_array);
	
		//Verifica se é stream paga.
		if(video_stream_url == ""){
		    var playerInstance = jwplayer("player_div")
		    playerInstance.setup({
		            playlist: [{
				 sources: [{ 
				     file: "https://dl.v.vrv.co/evs/e8d30657198d16a6d23da7d01631a040/assets/e8d30657198d16a6d23da7d01631a040_3743238.mp4/clipFrom/0000/clipTo/1434000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvZThkMzA2NTcxOThkMTZhNmQyM2RhN2QwMTYzMWEwNDAvYXNzZXRzL2U4ZDMwNjU3MTk4ZDE2YTZkMjNkYTdkMDE2MzFhMDQwXzM3NDMyMzgubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTc0MzcwMTAzfX19XX0_&Signature=Ff3w3sFGnRuxcOI3ld8Y69TVoDdMgzKAp1GJ2yHStQFJAQy~RI8cCNRJtcm1TzHgv9TZwQBKslByBTCEx2SfEeAQivs7GY03ik2Yr-kvrRSdWxLnTPdIDOhLSIqU-vvTLKHgzIRwWroy-NRzplLnkTw2mPwGKzelldSZw8m60QdDb-7DBEiLizek58uxwCJWFhThjIeXSDFvkzocqYhT0EIzzqQjVVIzTKTpM5oJZEFVqtKBSonnRhZM4UD1YqAmTpvPw3EtewWy1ehRmOxLFppE9fC5iCviHmLPe1rlQHFTOBGASU2039IgBkYMug42mt3iGksCWZQCi8z1UFCQkg__&Key-Pair-Id=DLVR"
				 },{
				     file: "https://dl.v.vrv.co/evs/e8d30657198d16a6d23da7d01631a040/assets/e8d30657198d16a6d23da7d01631a040_3743216.mp4/clipFrom/0000/clipTo/1434000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvZThkMzA2NTcxOThkMTZhNmQyM2RhN2QwMTYzMWEwNDAvYXNzZXRzL2U4ZDMwNjU3MTk4ZDE2YTZkMjNkYTdkMDE2MzFhMDQwXzM3NDMyMTYubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTc0MzcwMTAzfX19XX0_&Signature=rhoiSD4HiCaiWcvaqJdCdDat-ttMeoMqFRS2GyAnNfRMghqJ3XrLpsdhT0O6DOA6vBUUasbBH4lbm6ABIFfH~n6FuM58nWKBEFcsHs3dRTe2iQkAuzKLF8HA45v9yII0QF~dV00xFtYec6bdRLG0JHQ4ebZBktPWj5r6eIvyMMHFbmuCw~caFQE4QKrB8S92PbgVAdy0Wkh1Vr~Hwx5I9FqIQ1RgNKYcivi7S7dYjwtEHrYlW6Ajnls7-23QtVlJutigInbvUj9et5xYNvrAQJLTuPghB3~fnnSKpgSDTjS0tKF08ieTPMk1LbbG3tvvI7rB6hTsZBTd0i49u0fVqw__&Key-Pair-Id=DLVR"
				 },{
				     file: "https://dl.v.vrv.co/evs/e8d30657198d16a6d23da7d01631a040/assets/e8d30657198d16a6d23da7d01631a040_3743209.mp4/clipFrom/0000/clipTo/1434000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvZThkMzA2NTcxOThkMTZhNmQyM2RhN2QwMTYzMWEwNDAvYXNzZXRzL2U4ZDMwNjU3MTk4ZDE2YTZkMjNkYTdkMDE2MzFhMDQwXzM3NDMyMDkubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTc0MzcwMTAzfX19XX0_&Signature=F-O42EOQwwTya0gDTKB5Ck~2Q8KivjecmQh-DJ1f8um1-4T2SK2d~Owgq4kPp42u5wvsH7EZQKEa00hWn5~1NG4Oz2G35Hc-lQ~whpgBRMYRGhF~6ofPK8u8cHLOoAENaj2I2RA6WghHz5UoTT~9ibPAOj49Y91YyZZNuemXEhfoV0817hhxqHLveXh~UIMezC87b~3qCpSb1UMzQX54vGom8PoDZpoVHvMNrI95aOiDRIBPPopbzizZJaB9RgwUT0hWbh5lXNk1CcAT5R5MdvJ7iD-OQpsJ5UqJy8dajva2bB8SdtAJL6-NmNOaRqK4eFn1Ki0E1F3c0lK~NaJ-Mw__&Key-Pair-Id=DLVR"
				 }
			       ]
			    }],
		            image: video_config_media['thumbnail']['url'],
		            width: "100%",
		            height: "100%"
		    });
		}else{
		    var playerInstance = jwplayer("player_div")
		    playerInstance.setup({
		            file: video_stream_url,
		            image: video_config_media['thumbnail']['url'],
		            width: "100%",
		            height: "100%"
		    });
		}

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
