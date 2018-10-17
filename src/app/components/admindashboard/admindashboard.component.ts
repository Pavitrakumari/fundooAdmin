import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net'

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor() { }

   ngOnInit() {
    var data=[];

    var token =localStorage.getItem('token');

    $(document).ready(function(){

      $.ajax({
        type: "GET",/**posting the data */
        url:'http://34.213.106.173/api/user/UserStatics',
      headers:{
          'Authorization':token,


        },

        
        error:function(response){/**if error exists then print the alert */
          console.log('Error in login');
          alert("Enter all the details");
          
        },
        success:function(response){
          console.log("successfull");
          console.log(response);
          var arr=response.data.details;
          var html='';
          for(let index=0;index<arr.length;index++)
          {
            html+="<div class='card'>";
            html+="<div class='card-header'>"+arr[index].service+"</div>";
            html+="<div class='card-body'>"+arr[index].count+"</div>";
            html+="</div>";
            $("#services").html(html);
          }
        }
        

        
  
     })
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
        for ( var i=0 ; i<response.data.data.length ; i++ ) {
          data.push( [ i,response.data.data[i].firstName,response.data.data[i].lastName,response.data.data[i].email,response.data.data[i].service ] );
        }
        $('#example').DataTable( {
          data:           data,
          deferRender:    true,
          scrollY:        200,
          scrollCollapse: true,
          scroller:       true

        });
        return false;
        }
      })
    });
  }}
