export function durationFormat(duration) {
    function convert_time(durationStr) {
        let total = 0;
        let hours = durationStr.match(/(\d+)H/);
        let minutes = durationStr.match(/(\d+)M/);
        let seconds = durationStr.match(/(\d+)S/);
        if (hours) total += parseInt(hours[1]) * 3600;
        if (minutes) total += parseInt(minutes[1]) * 60;
        if (seconds) total += parseInt(seconds[1]);
        return total;
    }

    function secondsToHms(durationSec) {
        durationSec = Number(durationSec);
        let h = Math.floor(durationSec / 3600);
        let m = Math.floor(durationSec % 3600 / 60);
        let s = Math.floor(durationSec % 3600 % 60);

        let hDisplay = h > 0 ? h + ':' : "";
        let mDisplay = m > 9 ? m + ":" : (m === 0 ? '0:' : `0${m}:`);
        let sDisplay = s > 9 ? s + "" : `0${s}`;
        return hDisplay + mDisplay + sDisplay;
    }

    return secondsToHms(convert_time(duration));
}

export function viewsFormat(number, decPlaces = 0) {
    decPlaces = Math.pow(10, decPlaces);
    let abbrev = ["K", "M", "B", "T"];
    for (let i = abbrev.length - 1; i >= 0; i--) {
        let size = Math.pow(10, (i + 1) * 3);
        if (size <= number) {
            number = Math.round(number * decPlaces / size) / decPlaces;
            if ((number === 1000) && (i < abbrev.length - 1)) {
                number = 1;
                i++;
            }
            number += abbrev[i];
            break;
        }
    }
    return number;
}

export function numFormat(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function firstMonday(month, year) {
    let d = new Date(year, month, 1, 0, 0, 0, 0);
    let day = 0;
    if (d.getDay() === 0) {
        day = 2;
        d = d.setDate(day);
        d = new Date(d);
    }
    else if (d.getDay() !== 1) {
        day = 9 - (d.getDay());
        d = d.setDate(day);
        d = new Date(d);
    }
    return d
}

export function parseDate(date) {
    let ISODate = '';
    const newDate = new Date();
    const year = newDate.getFullYear();
    const month = newDate.getMonth();
    const lasthour = new Date(newDate.getTime() - (1000 * 60 * 60));
    const thismonth = new Date(`${year}-${month}-01`);
    const thisyear = new Date(`${year}-01-01`);
    const today = new Date(newDate.setDate(newDate.getDate() - 1));
    switch (date) {
        case 'Last hour':
            ISODate = lasthour.toISOString();
            break;
        case 'today':
            ISODate = today.toISOString();
            break;
        case 'this week':
            ISODate = firstMonday(month, year).toISOString();
            break;
        case 'this month':
            ISODate = thismonth.toISOString();
            break;
        case 'this year':
            ISODate = thisyear.toISOString();
            break;
        default:
            break;
    }
    return ISODate;
}