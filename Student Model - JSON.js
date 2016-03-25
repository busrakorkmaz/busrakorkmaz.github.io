/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var student ={
       
     'ID': '210104021', 
     'name':'Büşra', 
 
     'course': 'CS102' [
     
     {'courseID': '',
      'grade':'90'   
        }
        
      ],
      calcGPA: function () {

          var gpa = 0;
          for(var i=0; i<this.courses.length; i++)  {
              gpa += this.courses[i].grade;
              
          }
         gpa/= this.courses.length;
         return gpa;
     
      }
      };
     
    var s1 = student; { 
    s1['ID']= "210147081";
    s1['fName'] = "first";
    for (var i=0; i<5; i++) {
        s1['courses'][i] = {'courseID': 'c'+i, 'grade':Math.random()*100+1};
        
         }
                      
        var gpa = s1.calcGPA();
        

      function Person (first,last,age,eye) {
          
          this.firstName = first;
          this.lastName = last;
          this.age = age;
          this.eyeColor = eye;
      };
      };
      
     var p1= new Person {'first', 'last',90, 'yellow'};
     var p2= new Person {'first', 'last',16, 'green'};
      
         
        
      
 
              