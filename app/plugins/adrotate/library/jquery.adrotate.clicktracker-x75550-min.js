!function(t){t(document).ready((function(){t(document).on("click","a.gofollow",(function(){var a=t(this).attr("data-track"),c=t(this).attr("data-debug");t.post(click_object.ajax_url,{action:"adrotate_click",track:a}),1==c&&alert("Tracker: "+a+"\nclick_object.ajax_url: "+click_object.ajax_url)}))}))}(jQuery);