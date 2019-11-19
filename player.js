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
		            sources: [{
				file: 'https://dl.v.vrv.co/evs/e8d30657198d16a6d23da7d01631a040/assets/e8d30657198d16a6d23da7d01631a040_3743238.mp4/clipFrom/0000/clipTo/1434000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvZThkMzA2NTcxOThkMTZhNmQyM2RhN2QwMTYzMWEwNDAvYXNzZXRzL2U4ZDMwNjU3MTk4ZDE2YTZkMjNkYTdkMDE2MzFhMDQwXzM3NDMyMzgubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTc0MzcxMDIxfX19XX0_&Signature=Mf~hQ38mCQ12-F12QvW1~N4PISIBaQtVJpiIr4D3oobm8iopofbHMvy~nMSE5SAoTzRV0Bmwu41kWnm44lCStWc7jIqaMyfypDVRfzzQKZ32rpUhjOgjL8pAXE7W1L-MvJb0jGObhWDDJvm7e~XIlOul7sAgDrUkPLDkhmVA-zUuoFN9QV1hoZxsXUN5VQBFiCvYbZZ~U3k1RCctJ~H4K7urwZ~sOy0GwIlmnLtSe6LG-fKJQmHylNzJfeIwqwaTHiOM12Wo92l95L~MyJSkJaMij94pwSc~Hnr9yZj~iTShQ2MbmHPeGy3GmMD7Mb~U9tBP~z1OApiAG2DgzYipAw__&Key-Pair-Id=DLVR',
        			label: '720p HD'
			      },{
				file: 'https://dl.v.vrv.co/evs/e8d30657198d16a6d23da7d01631a040/assets/e8d30657198d16a6d23da7d01631a040_3743231.mp4/clipFrom/0000/clipTo/1434000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvZThkMzA2NTcxOThkMTZhNmQyM2RhN2QwMTYzMWEwNDAvYXNzZXRzL2U4ZDMwNjU3MTk4ZDE2YTZkMjNkYTdkMDE2MzFhMDQwXzM3NDMyMzEubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTc0MzcxMDIxfX19XX0_&Signature=jtwogkQpxlZntBMXfUkySBoYJnAJVl0o8pz9gh8uO~BVUMrR4L9EPmVIbJKvO5uHGrcpiH4mJpL~W5j7z6b4wzIDlmv8exNl2TtFaWVCNpsM04w2~lXpNFGE8UJ9GI0KLF02jRInOdvdmM59a7Za-DMB7yyIuSY9F4gC0xlvrHsQRjVBsvFzEYLoTXncd3HU~-uAtAaySwhOP8YwzItczicFrVYXq324~bfoH16QD1S6~Sb-mDjt8svDHAZkIPKw7e~dAA0IolACNQjb43G-1EBt~z~0YdkAEFFCs66i6KD3gt6lLhUd~3Pg~O7ewSrwUic8ukuHVP9o5-TXKFOkVw__&Key-Pair-Id=DLVR',
				label: '20p HD'
			      },{
				file: 'https://dl.v.vrv.co/evs/e8d30657198d16a6d23da7d01631a040/assets/e8d30657198d16a6d23da7d01631a040_3743209.mp4/clipFrom/0000/clipTo/1434000/index.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9kbC52LnZydi5jby9ldnMvZThkMzA2NTcxOThkMTZhNmQyM2RhN2QwMTYzMWEwNDAvYXNzZXRzL2U4ZDMwNjU3MTk4ZDE2YTZkMjNkYTdkMDE2MzFhMDQwXzM3NDMyMDkubXA0L2NsaXBGcm9tLzAwMDAvY2xpcFRvLzEyMDAwMC9pbmRleC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTc0MzcxMDIxfX19XX0_&Signature=MIaFdFC0GKvzLV7bT8~wqro5Jg3r47TundSgnGGsVvnsfxB~FvJHbDWDpok7P-2v03pjX90faKGdGAquiN6SLJj8KG1WMiXRhx5vwS-A6v8LmZo38BdN~plHm3X2tS5LQ4QejOlElrZgm8B1XgOMjWEfgoig26xb~Wq4VMQg0fZ9numc5qzuIiiALajBsqw4Oa51jCAXez-bxlMoh7J9QZYnP4NnIgGWBYiRSFnthP-Z6dSntSHfWhP7AF0Ra7eId7UJMrkq5Zusk9mXWGMYgJ34uCG7UKYphwIdjFVAW1Wkd9zL1GXHb1s6UY0sfc~GjkiYHk9biAy9aQIx8LvgHQ__&Key-Pair-Id=DLVR',
				label: '0p HD'
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
