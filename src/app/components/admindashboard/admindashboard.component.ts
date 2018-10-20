/**component has imports , decorator & class */
import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import 'datatables.net'
/**A componenet can be reused throughout the application & even in other applications */

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
/**To use components in other modules , we have to export them */

export class AdmindashboardComponent implements OnInit {

  constructor() { }

   ngOnInit() {
    var rowI;
    $(document).ready(function(){/**Use ready() to make a function available after the document is loaded:*/

    var data=[];

    var token =localStorage.getItem('token');


try{
      $.ajax({
        type: "GET",/**getting the data */
        url:'http://34.213.106.173/api/user/UserStatics',
      headers:{
          'Authorization':token,
        },
        
          success:function(response){/**if error doesnot exist, then it shows the success response */
          console.log("successfull");
          console.log(response);
          var arr=response.data.details;/**pushing the success response into an array */
          var html='';/**assigning a variable  */
          for(let index=0;index<arr.length;index++)/**for loop to allocate the cards */
          {
            html+="<div class='card col-sm-2  mt-4 mr-5 mx-auto'>";/**here we write html code bcz it should run for any number of cards */
            /**card header */
            html+="<div class='card-header'style='background: linear-gradient(to bottom, #003366 0%, #ffff66 100%);color:white;'>"+arr[index].service+"</div>";
            /**card body */
            html+="<div class='card-body'>"+arr[index].count+"</div>";
            html+="</div>";
            $("#services").html(html);/**binding to the front-end */
          }
        },
      error:function(response){/**if error exists then print the alert */
          console.log('Error in login');
          alert("Enter all the details");
          }

        })}
        catch(err){
          alert("You messed something up!");

        }
/**AJAX is the art of exchanging data with a server, and updating parts of a web page - without reloading the whole page.*/          
try{
 $.ajax({
      type: "GET",
      url:'http://34.213.106.173/api/user/getAdminUserList',
      dataType:"json",
      error:function(response){
        console.log('error');
        return false;
  
      },/**success is callback of $.ajax */
      success:function(response){
      
        console.log("successfull");
        console.log(response);
        for ( var i=1 ; i<response.data.data.length ; i++ ) {/**it runs for the length of the response */
          /**pushing the response into an array */
          data.push( [ i,response.data.data[i].firstName,response.data.data[i].lastName,response.data.data[i].email,response.data.data[i].service] );
        }
        var table = $('#example').DataTable( {
          "data": data,
          "pageLength": 200,
          // data:           data,
          deferRender:    true,
          scrollY:        200,/**the scroller in y-axis */
          scrollCollapse: true,
          
          scroller:       true,
          "columnDefs": [ {
          "targets": 5,
          "render": function ( data, type, row, meta)
          {
               return '<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">click me</button>';
             }
            }]
          });
          /**selecting the complete table body  */
          $('#example tbody').on('click', 'tr', function () {
            var myindex=table.row(this).index()+1;
            
           console.log(response.data.data[myindex].firstName)
           $("#first").text(response.data.data[myindex].firstName);

            $("#firstName").text(response.data.data[myindex].firstName);
            $("#lastName").text(response.data.data[myindex].lastName);
            $("#phoneNumber").text(response.data.data[myindex].phoneNumber);
            $("#role").text(response.data.data[myindex].role);
            $("#service").text(response.data.data[myindex].service);
            $("#createdDate").text(response.data.data[myindex].createdDate);
            $("#modifiedData").text(response.data.data[myindex].modifiedData);
            $("#userName").text(response.data.data[myindex].userName);
            $("#email").text(response.data.data[myindex].email);

            $("#myDataPopup").click();
        });}
      
      








    })
  }

catch(err){
  alert("You messed something up!");


}
  
    
    
    
    
    $('#logout').click(function(){
try{
        $.ajax({
        type: "POST",/**getting the data */
        url:'http://34.213.106.173/api/user/logout',
      headers:{
          'Authorization':token,
        },
        error:function(response){/**if error exists then print the alert */
          console.log('logout unsuccessfull');
          alert("Logout unsuccessfull");
         },
        success:function(response){/**if error doesnot exist, then it shows the success response */
          console.log("logout successfull");
          console.log(response);
          alert("Are you sure you want to Logout..?");
             localStorage.clear();
              // $('#logout').click(function(){
            window.location.href="/login";

        }
      })
    }
    catch(err){
      alert("You messed something up!");

    }










      }
      )



    });
  }}
