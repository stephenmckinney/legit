jQuery(document).ready(function() {
  // Code here 
  $(".facets .sort").click(function() {
    $(".facets .sort").removeClass("active");
    $(this).addClass("active");
    if ($(this).attr("class") == "recent") {
      $(".tweets").tsort('.tweet-container',{order:'asc',attr:'time'});
    }
    else if ($(this).attr("class") == "retweets") {
      $(".tweets").tsort('.tweet-container',{order:'asc',attr:'retweets'});
    }
    else if ($(this).attr("class") == "media") {
      $(".tweets").tsort('.tweet-container',{order:'asc',attr:'media'});
    }
    return false;
    
  }); 
});