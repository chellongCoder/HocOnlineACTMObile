function convertTime(isoTime : string) {
    var hours = parseInt(isoTime.substring(0, 2), 10),
        minutes = parseInt(isoTime.substring(3, 5), 10),
        ampm = 'AM';

    if (hours == 12) {
        ampm = 'AM';
    } else if (hours == 0) {
        hours = 12;
    } else if (hours > 12) {
        hours -= 12;
        ampm = 'AM';
    }

    return hours + ':' + minutes + ' ' + ampm;
}

function getDayOfWeek(date : Date) {
    var dayOfWeek = date.getDay();
    return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}


export default {
    convertTime, getDayOfWeek
};