
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

     var bee = document.getElementById("bee");
        document.addEventListener("mousemove", getMouse); 


        bee.style.position = "absolute"; //css      
        var beepos = {x:0, y:0};

        setInterval(followMouse, 50);
        
        var mouse = {x:0, y:0}; //mouse.x, mouse.y
        
        var dir = "right";
        function getMouse(e){
            mouse.x = e.pageX;
            mouse.y = e.pageY;
        //Checking directional change
        if(mouse.x > beepos.x){
          dir = "right";
        } else {
          dir = "left";
        }
        }
        
        function followMouse(){
            //1. find distance X , distance Y
            var distX = mouse.x - beepos.x;
            var distY = mouse.y - beepos.y;
            //Easing motion
       //Progressive reduction of distance 
            beepos.x += distX/5;
            beepos.y += distY/2;
            
            bee.style.left = beepos.x + "px";
            bee.style.top = beepos.y + "px";
      
      
        //Apply css class 
        if (dir == "right"){
          bee.setAttribute("class", "right");
        } else {
          bee.setAttribute("class", "left");        
        }
            
        }
    
    

})(jQuery);