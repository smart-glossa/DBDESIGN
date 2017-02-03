$(document).ready(function() {
	getAll();
    $(document).on('click', '#save', function() {
    
        var Name= $(".Name").val();
        var type= $(".Type").val();
        var size= $(".Size").val();
        var def =$(".default").val();
        var primarykey =$(".key1").val();
        var allownull =$(".key2").val();
        var unique =$(".key3").val();
        var autoIncrement= $(".key4").val();
        var foreignKey = $(".key5").val();      
        var url ="/dbdesign/Project?operation=addProject&proName="+proName+"&description="+des;
        $("input[type=text]").val("");
        $.ajax({
                url: url,
                type: 'POST'
            }).done(function(result) {
            	getAll();
                alert(result);
            })
            .fail(function(result) {
                alert(result);
            });

    });
});