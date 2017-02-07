
function getAll() {
    var url = "/dbdesign/Project?operation=getAll";
    $.ajax({
        url: url,
        type: 'POST'
    })
    .done(
        function(result) {
            var array = JSON.parse(result);
            var qry = "<div class='fulldetail' >"

            if (result != "undefined") {
                for (var i = 0; i < array.length; i++) {
                    
                    qry += "<p id=" + array[i].projectId +"  class='sds'>" + array[i].proName + "</p>";
                    
                }
            }
            qry += "</div>"
            $(".details").append(qry);
        }).fail(function(result) {
            alert(result);
        });
    }
       