$( document ).ready(function(){
  $.ajax({
    url : "getPagamenti.php",
    method : 'GET',
    success : function(data) {
      var target = $("#target")
      for (var price of data) {
        target.append("<li>" + price  + "</li>");
      }
    },
    error: function(stato){
      alert("Errore!")
    }
  });
})
