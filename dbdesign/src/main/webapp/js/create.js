$(document).ready(function(){
    $(document).on('click','#submit',function(){
       $('.add').show();
    });
    $(document).on('click','#send',function(){
    	$('.add').hide();
    })
});