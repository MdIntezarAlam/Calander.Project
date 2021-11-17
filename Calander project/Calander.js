var dt = new Date(); //This is Global Variable
function RenderDate() {  //This is Main Function
    dt.setDate(1);
    var day = dt.getDate();

    //This is Enddata variable
    var endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();

    //This is PrevDate variable
    var prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();

    // This is Current Ddate Variable
    var today = new Date();

    // This is Array for Entier Month
    var months = ["January", "February", "March ", "April ", "May ", "June ", "July ", "August", "September", "October ", "November", "December"];

    // Iam using Id From p tage
    document.getElementById("date_str").innerHTML = dt.toDateString();

    // Iam using Id From h2 tage
    document.getElementById("months").innerHTML = months[dt.getMonth()];


    var cells = "";
    for (x = day; x > 0; x--)
     {
        cells += "<div class= 'prevDate'>" + (prevDate - x + 1) + "</div>";
     }
    for (i = 1; i <= endDate; i++)
       {
             if (i == today.getDate() && dt.getMonth() == today.getMonth())
               {
                  cells += "<div class='today'>" + i + "</div>";
               }
               else
                   {
                      cells += "<div>" + i + "</div>";
                   }
        }

        // Iam Using Class name From Html
    document.getElementsByClassName("days")[0].innerHTML = cells;
} //This  Main Function is Ending Here

// This is For next & prev direction Fun
function moveDate(para)
   {
    if (para == 'prev')
     {
        dt.setMonth(dt.getMonth() - 1);
     }
    else if (para == 'next')
      {
        dt.setMonth(dt.getMonth() + 1)
      }
    RenderDate();
}