function getAge(yess) {
   var today = new Date();
   var birthDate = new Date(yess);
   var age = today.getFullYear() - birthDate.getFullYear();
   var m = today.getMonth() - birthDate.getMonth();
   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
     age--;
   }
   return age;
}

var year = document.getElementById("year").value;
console.log(year);
var month = document.getElementById("month").value;
console.log(month);
var day = document.getElementById("day").value;
console.log(day);


//document.write('age:' + getAge());
