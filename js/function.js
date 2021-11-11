$(function(){
    slider();

    /*
        Slider
    */

    function slider(){
        var margin = 0;
        setInterval(function(){
            if (margin <= 200){
                $('.slide-single').css('margin-left','-'+margin+'%');
                margin = margin + 100;
            }
                
            else{
                margin = 0;
                $('.slide-single').css('margin-left',margin);
                margin = margin + 100;
            }

        }, 10000);
    }

    /*
        Menu
    */

    $('.menu-mobile').click(function(){
        $(this).find('ul').slideToggle();
        $(this).css('background-color','rgba(0, 0, 0, 0.8');
    })

    /*
        Verification Form
    */
    
    $('input[type=text]').focus(function(){
        resetInvalidCamp($(this));
    })

    $('form#formContact').submit(function(e){
        e.preventDefault();
        var name = $('input[name=name]').val();
        var email = $('input[name=email]').val();
        var phone = $('input[name=phone]').val();

        if(verificationName(name) == false){
            invalidCamp($('input[name=name]'));
        }
        else if(verificationPhone(phone) == false){
            invalidCamp($('input[name=phone]'));
        }
        else if(verificationEmail(email) == false){
            invalidCamp($('input[name=email]'));
        }
        else{
            alert('Email successfully sent');
        }
    })

    function verificationName(name){
        var splitName = name.split(' ');
        var amount = splitName.length;

        if (name == ''){
            invalidCamp($('input[name=name'));
            return false;
        }
            

        if(splitName.length >= 2){
            for(var i=0; i < amount; i++){
                if(splitName[i].match(/^[A-Z,´`~^]/)){}

                else{
                    invalidCamp($('input[name=name'));
                    return false
                    
                }
            }
        }
        else{
            invalidCamp($('input[name=name'));
            return false
        }
    }

    function verificationPhone(phone){
        if(phone == ''){
            invalidCamp($('input[name=phone'));
            return false;
        }
            
        var phoneNumber = $('input[name=phone]').val();
        phoneNumber.trim();

        if(phoneNumber.length == 11){
            if (phoneNumber.includes(' ') == false){
                if (phoneNumber.match(/^[0-9]/) != null){

                }
                else{
                    invalidCamp($('input[name=phone'));
                    console.log('erro1');
                    return false
                }
            }
            else{
                invalidCamp($('input[name=phone'));
                console.log('erro2');
                return false
            }
        }
        else{
            invalidCamp($('input[name=phone'));
            console.log('erro3');
            return false
        }
    }

    function verificationEmail(email){
        if(email == ''){
            return false;
        }

        var emailArray = email.split('@');

        if(emailArray[1].includes('.com') == true || emailArray[1].includes('.com.br') == true && emailArray[0].match(/^[a-z0-9]/)){}
        
        else{
            invalidCamp($('input[name=email'));
            return false
        }
    }

    function invalidCamp(el){
        el.css('color', 'red');
        el.css('border','1px solid red');
        el.val('INVALID CAMP!');
    }
    
    function resetInvalidCamp(el){
        el.css('color', 'gray');
        el.css('border','1px solid #ccc');
        el.val('');
    }
})