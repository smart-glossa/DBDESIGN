$(document).ready(function(){
    $(document).on('click','#submit',function(){
       $('.add').show();
    });
    $(document).on('click','#project',function(){
    	$('.add').hide();
    })
    
     $(document).on('click','#done',function(){
       $('.done').show();
    });
    $(document).on('click','#save',function(){
    	$('.done').hide();
    })
});