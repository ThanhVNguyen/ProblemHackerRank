function timeConversion(s) {
    const hour = s.slice(0, 2);
    const minute = s.slice(3, 5);
    const second = s.slice(6, 8);
    const type = s.slice(8, 10);
    const hourChange = String(Number(hour) + 12);
    let timeChange = 0;
    if (hour === '12' && type === 'AM') {
        const hourAM = '00';
        timeChange = hourAM.concat(':', minute, ':', second);
    } else if (hour === '12' && type === 'PM') {
        const hourPM = '12';
        timeChange = hourPM.concat(':', minute, ':', second);
    } else if (type === 'PM') {
        timeChange = hourChange.concat(':', minute, ':', second);
    } else {
        timeChange = hour.concat(':', minute, ':', second);
    }
    return timeChange;
    // console.log(timeChange);
}
// console.log(timeConversion('12:05:34PM'));

module.exports = timeConversion;