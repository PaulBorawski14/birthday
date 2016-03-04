/* creates a date and takes the year out of it as a number */
   var today = new Date();
   var todayString = today.toString();
   subStringYear = todayString.substr(11, 4);
   subStringYearNum = Number(subStringYear);
   subStringMonth = todayString.substr(4, 3);
   subStringMonthNum = Number(subStringMonth);
   subStringDay = todayString.substr(8, 2);

//turns months into numerals
    var months = ["nomonth", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      for (var i = 0; i < months.length; i++){
        if (subStringMonth === months[i]) {
          var mounths = i;
        }
      }

//turns month into two digit number if only a single digit number
if (mounths.toString().length < 2) {
  mounths = "0" + mounths;
  Number(mounths);
}
var mounthsCorrect = (mounths / 12) / Math.pow(10, -2);
var daysCorrect = (subStringDay / 30) / Math.pow(10, -2);
var daysCorrect2 = Math.round(daysCorrect);
var decimalDate = subStringYear + "." + mounthsCorrect + daysCorrect2;


function getAge(yess) {

/* gets elements from html input field */

  var one = document.getElementById("year").value;
  var two = document.getElementById("month").value;
  var three = document.getElementById("day").value;
  var nombas = one + "." + two + three;
  var myCorrect = (two / 12) / Math.pow(10, -2);
  var myDaysCorrect = (three / 30) / Math.pow(10, -2);
  var myDaysCorrect2 = Math.round(myDaysCorrect);
  var decimalDates = one + "." + myCorrect + myDaysCorrect2;
  var finalSolution = decimalDate - decimalDates;
  var backToString = finalSolution.toString();
  var yearZ = backToString.slice(0, 2);
  var monthZ = backToString.slice(3, 5);
  var dayZ = backToString.slice(5, 7);
  var monthZ2 = Number((monthZ * 12) / Math.pow(10, 2));
  var monthZ3 = monthZ2.toFixed(0);
  var dayZ2 = Number((dayZ * 30) / Math.pow(10, 2));
  var dayZ3 = dayZ2.toFixed(0);
  document.write("You are " + yearZ + " years old" + "<br>");
  document.write("You are " + monthZ3 + " months old" + "<br>");
  document.write("You are " + dayZ3 + " days old" + "<br>");







}
