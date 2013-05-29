
$(function(){

        
});

$(document).ready(function(){
    var field = new Array("author", "text");

        var validate = (function(event){
            var error=0;        
            $(event.target).find(":input").each(function() {
                    for(var i=0;i<field.length;i++){ 
                        if($(this).attr("name")==field[i]){ 
                            
                            if(!$(this).val()){
                                $(this).css('border', 'red 1px solid');
                                error=1;
                                                            
                            }
                            else{
                                $(this).css('border', 'gray 1px solid');
                            }
                            
                        }               
                    }
            });
               
                if(error==0){ 
                    return true;
                }
                else{
                if(error==1) var err_text = "✖  Пожалуйста, заполние это поле!";
                $("#error").html(err_text); 
                $("#error").fadeIn("slow"); 
                return false; 
                };      
            });

$('#form_com').submit(validate);

        $('.answer').click(function() {
            $('.addComment').each(function(){
                if(!$(this).parent().hasClass('comments')){
                    $(this).hide();
                }
            });

            var _form = $('#addComment').clone();
            $(this).parent().append(_form);
             $(_form).submit(validate);
            $(this).next().show();
        });
    });