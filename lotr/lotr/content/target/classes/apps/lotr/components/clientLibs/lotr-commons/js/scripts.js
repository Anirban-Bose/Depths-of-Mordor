console.log("Lotr-commons requested");

$(document).ready(function(){
	var dataJSONArray1;
	var PATH="/content/lord-of-the-rings/en/";
	if($('.path').length)
		PATH=$('.path').html();
	var OFF= 0 ;
	if($('.offset').length)
		OFF=$('.offset').html();
	var LIMIT= 1;
	if($('.limit').length)
		LIMIT=$('.limit').html();
	var DT="";
	if($("#searchForm").length)
		{
	$("#searchForm").submit(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $("#txtSearch").offset().top-50
		}, 500);
		OFF=0;
		$('#nxt').addClass("hide");
		$('#prev').addClass("hide");
		$("ul#pg").html("");
		$('#boundary').removeClass("showBorder");
		if($("#txtSearch").length)
			{
			
		DT=$('#txtSearch')[0].value;
		$.post("/bin/SearchResults",                    /*Tries to open a page with url /bin/SearchResults....
		                                                   sends q as search parameter via post method
		                                                   ---->Matches with servlet and goes to post method of servlet	*/	                                                 
			    {
			        q: $('#txtSearch')[0].value,
			        off: OFF,
			        lim: LIMIT,
			        sp: PATH
			    },
			    function(data, status){                  /*If an appropriate match is found, value from servlet is fetched
			                                                ("status" shows if page has been found)   */    
			    	$('.temp').hide();
			    	$('#boundary').addClass("showBorder");
			    	$('.resultListElem').html('');
			    	var dataJSONArray = JSON.parse(data);     // Parses the data displayed on the browser page to a String
			        var tot=dataJSONArray[0].total;
			        if(LIMIT<1)
			        	{
			        	$('#nxt').addClass("hide");
			        	$('#prev').addClass("hide");
			        	}
			        else
			        	{
			        	var count=Math.ceil(tot/LIMIT);
			        	$("ul#pg").html("");
			        	for(var i=0;i<count;i++)
			        		{
			        		$("ul#pg").append("<li class='pageNo' value='"+(parseInt(i)+1)+"'><a href='#'>"+(parseInt(i)+1)+"</a></li>");
			        		
			        		}
			            	$('.pageNo').click(function(){                     //Page clicking
			        			OFF=(parseInt($(this).attr('value'))-1)*LIMIT;
			        			
			        			$.post("/bin/SearchResults", 
			        					{
			        				      q: DT,
			        				      off : OFF,
			        				      lim : LIMIT,
			        				      sp: PATH
			        					},
			        			function(data, status){
			        			
			        			  if($(".resultListElem").length)
			        				  {
			        				$('.resultListElem').html('');
			        				var dataJSONArray = JSON.parse(data);
			        				console.log(data+"----->"+dataJSONArray[0]);
			        				var tot=dataJSONArray[0].total;
			        			
			        				if(parseInt(OFF)>0)
			        	        	{
			        	        	$('#prev').removeClass("hide");
			        	        	}
			        				else
			        	    		{
			        	    		$('#prev').addClass("hide");
			        	    		}	
			        			if((parseInt(OFF)+parseInt(LIMIT))<parseInt(tot))
			        			   {
			        	    	   $('#nxt').removeClass("hide");
			        	    	   }
			        	    	else
			        	    		{
			        	    		$('#nxt').addClass("hide");
			        	    		}
			        		  
			        				for(var i=0;i<dataJSONArray.length;i++)
			        	    		{
			        	    		
			        	    	$('.resultListElem').append(
			        	    		
			        	    		
			        	    			'<li style="font-family:Segoe UI;font-size:30px";><a href="'+dataJSONArray[i].path+'.html">'+" "+dataJSONArray[i].title+'</a></li>'
			        	    			
			        	    			);
			        	    		}
			        			  }
			        			});
			        		});
			       	        	
			        if(parseInt(OFF)>0)
			        	{
			        	$('#prev').removeClass("hide");
			        	}
			        else
		    		{
		    		$('#prev').addClass("hide");
		    		}
			    	if((parseInt(OFF)+parseInt(LIMIT))<parseInt(tot))
			    	   {
			    	   $('#nxt').removeClass("hide");
			    	   }
			    	else
		    		{
		    		$('#nxt').addClass("hide");
		    		}
			        	}
			    	for(var i=0;i<dataJSONArray.length;i++)
			    		{
			    		
			    	$('.resultListElem').append(
			    		
			    		
			    			'<li style="font-family:Segoe UI;font-size:30px"><a href="'+dataJSONArray[i].path+'.html">'+" "+dataJSONArray[i].title+'</a></li>'//Uses the path and name parameters from the JSONObject
			    			
			    			);
			    		}
			    });
			}
		return false;
	});
		}
	if($("#nxt").length)
		{
	$("#nxt").click(function(){
		console.log(OFF);
		OFF=parseInt(OFF)+parseInt(LIMIT);
		$.post("/bin/SearchResults", 
				{
			      q: DT,
			      off : OFF,
			      lim : LIMIT,
			      sp: PATH
				},
		function(data, status){
		
		  if($(".resultListElem").length)
			  {
			$('.resultListElem').html('');
			var dataJSONArray = JSON.parse(data);
			console.log(data+"----->"+dataJSONArray[0]);
			var tot=dataJSONArray[0].total;
		
			if(parseInt(OFF)>0)
        	{
        	$('#prev').removeClass("hide");
        	}
			else
    		{
    		$('#prev').addClass("hide");
    		}	
		if((parseInt(OFF)+parseInt(LIMIT))<parseInt(tot))
		   {
    	   $('#nxt').removeClass("hide");
    	   }
    	else
    		{
    		$('#nxt').addClass("hide");
    		}
	  
			for(var i=0;i<dataJSONArray.length;i++)
    		{
    		
    	$('.resultListElem').append(
    		
    		
    			'<li style="font-family:Segoe UI;font-size:30px"><a href="'+dataJSONArray[i].path+'.html">'+" "+dataJSONArray[i].title+'</a></li>'
    			
    			);
    		}
		  }
		});
		return false;
	});
		}
	
	if($("#prev").length)
	{
	$("#prev").click(function(){
		console.log(OFF);
		OFF=parseInt(OFF)-parseInt(LIMIT);
		$.post("/bin/SearchResults", 
				{
			      q: DT,
			      off : OFF,
			      lim : LIMIT,
			      sp: PATH
				},
		function(data, status){
				
		if($(".resultListElem").length)
		  {			
			$('.resultListElem').html('');
			var dataJSONArray = JSON.parse(data);
			var tot=dataJSONArray[0].total;
			if(parseInt(OFF)>0)
        	{
        	$('#prev').removeClass("hide");
        	}
			else
    		{
    		$('#prev').addClass("hide");
    		}
    	if((parseInt(OFF)+parseInt(LIMIT))<parseInt(tot))
    	   {
    	   $('#nxt').removeClass("hide");
    	   }
    	else
		{
		$('#nxt').addClass("hide");
		}
			for(var i=0;i<dataJSONArray.length;i++)
    		{
    		
    	$('.resultListElem').append(
    		
    		
    			'<li style="font-family:Segoe UI;font-size:30px"><a href="'+dataJSONArray[i].path+'.html">'+" "+dataJSONArray[i].title+'</a></li>'
    			
    			);
    		}
		  }
		});
		return false;
	});
	}
	$('#txtSearch').focus(function(){
		$.post("/bin/AltSearchResults", 
				{
				},
		function(data, status){
				dataJSONArray1 = JSON.parse(data);
			    console.log(dataJSONArray1);
				});
		
	});
		
   $('#txtSearch').blur(function(){
	  dataJSONArray1=null;
	  console.log(dataJSONArray1);
	   
   });
		
/*   pageController=function($scope) {
	    $scope.characters=dataJSONArray1;
	    
	};*/
	
});

console.log("Lotr-commons loaded");