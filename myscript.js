
        function valid()
        {

          var name=document.getElementById('fname');
          var name=document.getElementById('lname');
          var age=document.getElementById('age');
          var phone=document.getElementById('phone');
          var email=document.getElementById('email');
          


          if(name.value=="" || age.value=="" || phone.value=="" ||email.value==""){
            
            alert("Please fill Name, Age, Phone, Email fields");
            return false;
          }
        
             else if(age.value<18){
              alert("you are under age");
              return false;
          }
          
          
           else if(phone.value.trim().length<10 || phone.value.trim().length>10 ){
            //alert("enter valid number");return false;
            phone.style.border="solid 3px red";
            document.getElementById("phonenumber").style.visibility="visible";
            return false;
           }
           else{
            return true;
           }
         
        }
        
        


  



