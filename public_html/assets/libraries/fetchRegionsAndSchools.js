/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload= function() {
   var regionList = document.getElementById("regionList");
   var schoolList = document.getElementById("schoolList");
   
    for (var i = 0; i < 30; i++) {
        var regionItem = document.createElement("li");
        var regionSpan = document.createElement("span");
        var schoolSpan = document.createElement("span");
        var text = document.createElement("p");
        text.innerHTML = "test element" + i;
        
        regionItem.innerHTML ="telement";
        regionSpan.setAttribute("class","glyphicon glyphicon-remove pull-right");    
        regionItem.appendChild(regionSpan);
        regionItem.setAttribute("class", "list-group-item");
        regionList.appendChild(regionItem);
        
       
        var schoolItem = document.createElement("li");
        schoolItem.innerHTML = "Testresult" + i;
        schoolSpan.setAttribute("class","glyphicon glyphicon-remove pull-right");    
        schoolItem.setAttribute("class", "list-group-item");
        schoolItem.appendChild(schoolSpan);
        schoolList.appendChild(schoolItem);
    }

};
