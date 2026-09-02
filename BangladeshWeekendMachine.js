function getDayType(day){
    const dayName = day.toLowerCase();

    switch(dayName){
        case 'friday':
            return 'Weekend';
        case 'saturday':
            return 'Weekend';
        case 'sunday':
            return 'Working Day';
            case 'monday' :
                return 'Working Day';
        case 'tuesday' :
            return 'Working Day';
        case 'wednesday' :
            return 'Working Day';
        case 'thursday' :
            return 'Working Day';
            default:
                return 'Invalid Day';
    }
}

console.log(getDayType("Friday"));
console.log(getDayType("friday"));
console.log(getDayType("MONDAY"));
console.log(getDayType("Bandarban"));
