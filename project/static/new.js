$(document).ready(function(){



$("tr.table").click(function(){

var tableData=$(this).children("td").map(function(){

return $(this).text();

}).get();

alert("Film Name is:" + $.trim(tableData[1]));

});
});

   /* $('tr.table').on('click',function(){
 
        var this_row = $(this);
        var Image_url = $.trim(this_row.find('td:eq(0)').html());//td:eq(0) means first td of this row
        var Film = $.trim(this_row.find('td:eq(1)').html());
        var Price = $.trim(this_row.find('td:eq(2)').html());
        var item = this_row.find(Film);
        console.log(Film);// i failed here to pass this item to cart view , and then display it in cart view through
        //clicking on catalouge button
       
     /* $.ajax({

      type: 'POST',
      url : '/cart/' + item,
      success : function(data){

      response.render('cart');

      }




      });*/
