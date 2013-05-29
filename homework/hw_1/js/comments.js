$(document).ready(function(){
        $('.answer').click(function() {
            $('.addComment').each(function(){
                if(!$(this).parent().hasClass('comments')){
                    $(this).hide();
                }
            });
            $(this).parent().append($('#addComment').clone());
             $('#addComment').submit(validate);
            $(this).next().show();
        });
    });


$(function(){

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
        });