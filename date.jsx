(function(){

    var dateLayer;
    var monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var month = new Date().getMonth();
    var monthName = monthsArray[month];
    var dayNames = [ "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayx = new Date().getDay();
    var dayName = dayNames[dayx];

    try
    {
        dateLayer = activeDocument.layers.getByName("_dateTextItem");
    }
    catch (e)
    {
        // if no _dateTextItem layer found, aborting
        return;
    }

    const nth = function(d) {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
          case 1:  return "st";
          case 2:  return "nd";
          case 3:  return "rd";
          default: return "th";
        }
      }
  

    var newDate = new Date();
    var yyyy = newDate.getFullYear();
    var mm = newDate.getMonth() + 1;
    var dd = newDate.getDate();
    var hh = newDate.getHours();


   

    // the format will be YYYY/MM/DD — HH:Min:Sec, change to your preferred version
    dateLayer.textItem.contents =  dayName + " " + dd+nth(dd) + " " + zeroPad(monthName) + " " + zeroPad(yyyy) ;

    function zeroPad(value)
    {
        if (String(value).length == 1) return "0" + String(value);
        return value;
    }
})();