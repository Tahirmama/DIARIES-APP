import React from "react";
import "./style.css"


export const Header = () =>{
    var date = new Date().getDate(); //To get the Current Date
    var month = new Date().getMonth() + 1; //To get the Current Month
    var year = new Date().getFullYear(); //To get the Current Year
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    var n = weekday[d.getDay()];
    return(
        <div className="head" >
           <img src = "https://cdn.dribbble.com/users/444644/screenshots/9521173/media/945b37e2a579f3824208f163af08ad55.gif" alt= "Diary" title="DIARY" className="Image"/>
            <span className="heading" >
            PERSONAL DIARY 
            </span>
            <span className="date">
            Date :{" "}
            {n}{" "} {date}{"-"}{month}{"-"}{year}
           </span>
           
        </div>
    )
}