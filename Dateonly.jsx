/**
 * @description this function will change the contents of a text layer _dateTextItem to current date and time
 */
(function(){

    var dateLayer;

    try
    {
        dateLayer = activeDocument.layers.getByName("_dateTextItem");
    }
    catch (e)
    {
        // if no _dateTextItem layer found, aborting
        return;
    }

    var newDate = new Date();
    var yyyy = newDate.getFullYear();
    var mm = newDate.getMonth() + 1;
    var dd = newDate.getDate();


    // the format will be YYYY/MM/DD , change to your preferred version
    dateLayer.textItem.contents = yyyy + "/" + zeroPad(mm) + "/" + zeroPad(dd) ;

    function zeroPad(value)
    {
        if (String(value).length == 1) return "0" + String(value);
        return value;
    }
})();