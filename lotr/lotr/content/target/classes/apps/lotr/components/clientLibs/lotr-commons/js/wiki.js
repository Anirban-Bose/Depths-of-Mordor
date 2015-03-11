console.log("Wiki Requested");

var hiddenTitle="";

$(document).ready(function(){
	if($('.hiddenTitle').length)
		hiddenTitle=$('.hiddenTitle').html();
	console.log("Title obatined = "+hiddenTitle);
	if(	$('.wikiContent').length ){
		$('.wikiContent').load('/bin/WikiContent?query='+encodeURI(hiddenTitle.split(" ")[0]));
	}
});