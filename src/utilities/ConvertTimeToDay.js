var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const ConvertDay = (time) => {
    const date = new Date(parseInt(time) * 1000);
    return dayNames[date.getDay()]

}