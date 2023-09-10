                                //  Chapter 14 to 16
                                // Question 1;
var studentName =[];
                                // Question2;
var studentName = [];

                                // Question3,4,5,6;
 var stringArry =["Saad"];

 var numArray = [50,60];

 let boleanArray = [true,false];

 var mixArray =["Saad", 23, true," ",undefined,null];

 
// Declare and initialize; 
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

for (var i = 0; i < qualifications.length; i++) {
  document.write((i + 1) + ") " + qualifications[i] + "<br>");
}


                                // Question No 8
var studentsName = ["Michael","Jhon","Tony"];
var studentsScore = [320, 230, 480];
var totalMarks = 500;
document.write("<br>Score of "+ studentsName[0]+" is "+studentsScore[0] +". Percentage: "+100 * studentsScore[0] / totalMarks + "%");
document.write("<br>Score of "+ studentsName[1]+" is "+studentsScore[1] +". Percentage: "+100 * studentsScore[1] / totalMarks + "%");
document.write("<br>Score of "+ studentsName[2]+" is "+studentsScore[2] +". Percentage: "+100 * studentsScore[2] / totalMarks + "%");



                                 // Question No 9
document.write("<hr>");
var colorNames = ["Red","Blue","Yellow"];
alert(colorNames);
var askingColor = prompt("What color do you want to add to the beginning?");
var startingColor = +colorNames.unshift(askingColor);
document.write(+startingColor+"<br>")
colorNames.unshift("Yellow")
document.write(colorNames)
colorNames.push("Dark");
document.write("<br>"+colorNames);
colorNames.unshift("White","Black");
document.write("<br>"+colorNames);
colorNames.shift();
document.write("<br>"+colorNames);
colorNames.pop();
document.write("<br>"+colorNames);
colorNames.splice(3,0,"Orange");
document.write("<br>"+colorNames);
colorNames.splice(1,2);
document.write("<br>"+colorNames);

                                        // Question No 10
var studentScore = [320,230, 480, 120];
document.write("<hr> Scores of students :"+ studentScore);
studentScore.sort();
document.write("<br> Ordered Scores of Students :"+studentScore);


                                        // Question No 11
var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("<hr> Cities list:<br>"+cities);
var selectedCities = cities.slice(2,4);
document.write("<br> Selected cities list:<br>"+selectedCities);


                                        // Question No 12
var arr = ["This","is","my","cat"];
document.write("<hr> Array:<br>" + arr);
var covertIntoString = arr.join(' ');
document.write("<br>String:" + covertIntoString);


                                        // Question No 13
var devices = [];
devices[0] = "Keyboard";
devices.splice(1,0,"mouse");
devices.splice(2,0,"printer");
devices.push("monitor");
document.write("<hr> Devices:<br>"+devices+"<br>");
var out = devices.shift();
document.write("<br> Out: <br>" + out);
var out = devices.shift();
document.write("<br> Out: <br>" + out);
var out = devices.shift();
document.write("<br> Out: <br>" + out);
var out = devices.shift();
document.write("<br> Out: <br>" + out);


                                         // Question No 14
var device = [];
device[0] = "Keyboard";
device.splice(1,0,"mouse");
device.splice(2,0,"printer");
device.push("monitor");
document.write("<hr> Devices:<br>"+device+"<br>");
var out = device.reverse(0);
document.write("<br> Out: <br>" + out);
var out = device.reverse(0);
document.write("<br> Out: <br>" + out);
var out = device.reverse(0);
document.write("<br> Out: <br>" + out);
var out = device.reverse(0);
document.write("<br> Out: <br>" + out);

                                          // Question No 15
var phoneManufacturers = ["Apple","Samsung","Motorola","Nokia","Sony & Haier"];
document.write("<hr><select><option>Apple </option><option>Samsung </option><option>Motorola </option> <option>Nokia</option><option>Sony & Haier</option></select>")


                                          //ye sawal garaybi me;
                                            // Question No 16
var laptopeManufacturers = ["Apple","Samsung","Lenovo","Hp","Sony & Dell"];
document.write("<hr><select><option>Apple</option> <option>Samsung</option> <option>Lenovo</option>     <option>Hp</option>  <option>Sony & Dell</option> </select>"); 

document.write("<hr>");