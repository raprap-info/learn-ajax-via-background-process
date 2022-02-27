$( document).ready(function () {
   setInterval(function () {
      itsAjaxTime();
  }, 5000)
})
function itsAjaxTime()
{
   var url = $( '#images').data('url');
  $. getJSON(url, function(data){
     addNewImages (data)
   });
}
function addNewImages(data)
{
  $. each(data.data, function(index, image){
      if($('#' + image.id).length==0){
         var img = $(
            '<img id="'+image.id +' src=" '+ image.images.Low_resolution.url +' alt=""/><br/>'
         img.hide().prependTo( '#images').fadeIn(2000);
      }
   })
}
