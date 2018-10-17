/**component has imports , decorator & class */

import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';/**importing the jquery  */
/**A componenet can be reused throughout the application & even in other applications */

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
/**To use components in other modules , we have to export them */

export class AdminloginComponent implements OnInit {
  

  constructor() { }

  public  ngOnInit() {
    
    $(document).ready(function(){/**Use ready() to make a function available after the document is loaded:

      */
      $("#button").click(function(){/**The click() method triggers the click event, or attaches a function to run when a click event occurs.

        */
  
          var email = $("#inputemail").val(); 
          /**The val() method returns or sets the value attribute of the selected elements.

*/ 
          var password = $("#inputpassword").val();
 var indexat=email.indexOf("@");
 var indexdot=email.indexOf(".");/**to check the symbols for the entire length of the email */

          console.log(email);
          console.log(password); 
          if(email==""){/**if email is empty print the error message */

            $("#msg").text("please enter email id");/**error message */
return false;
          }else if(password==""){/**if password is empty then checkin validation */

            $("#msg").text("please enter password");/**error message */
return false;
          }
          else if(indexat<1 || indexdot-indexat <2){/**checking for '@' & '.' symbols in email  */
            $("#msg").text("please enter valid email");
        
            return false;
        }


        
/**AJAX is the art of exchanging data with a server, and updating parts of a web page - without reloading the whole page.*/          
           
            $.ajax({
              type: "POST",/**posting the data */
              url: 'http://34.213.106.173/api/user/adminLogin',
              
              // success: success,
              dataType:"json",/**json format is used */
              data:{
                "email":email,
                "password":password
              },
              error:function(response){/**if error exists then print the alert */
                console.log('Error in login');
                alert("Enter all the details");
                
              },
              success:function(response){
                console.log(email);
                console.log("success in login");/**if login is successful then alert the message */
                alert("login successfull");
                console.log(response);
                // $("#msg").text("LOG IN SUCCESSFULL");
                localStorage.setItem('token',response.id);
                window.location.href="/dashboard";

              }
            });
            return false;
          });
        });
      }
    }
  
  


