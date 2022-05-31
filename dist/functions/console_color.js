Object.defineProperty(exports, "__esModule", { value: true });
function getUTCDate() {
    const now = new Date;
    let Day = now.getUTCDate();
    let Month = now.getUTCMonth() + 1;
    let Year = now.getUTCFullYear();
    let Hour = now.getUTCHours();
    let Minute = now.getUTCMinutes();
    let Seconds = now.getUTCSeconds();
    let ms = now.getUTCMilliseconds();
    let FDay = `${Day}`;
    let FMonth = `${Month}`;
    let FYear = `${Year}`;
    let FHour = `${Hour}`;
    let FMinute = `${Minute}`;
    let FSeconds = `${Seconds}`;
    let Fms = `${ms}`;
    if (Day < 10)
        FDay = `0${Day}`;
    if (Month < 10)
        FMonth = `0${Month}`;
    if (Hour < 10)
        FHour = `0${Hour}`;
    if (Minute < 10)
        FMinute = `0${Minute}`;
    if (Seconds < 10)
        FSeconds = `0${Seconds}`;
    if (ms < 10)
        Fms = `00${ms}`;
    if (ms < 100)
        Fms = `0${ms}`;
    const DateFormated = `UTC ${FDay}/${FMonth}/${FYear} - ${FHour}:${FMinute}:${FSeconds},${Fms}`;
    return DateFormated;
}
function ok(msg) {
    console.log("\033[1;35m[" + getUTCDate() + "]\033[0m \033[1;32m[OK]\033[0m " + msg);
}
function error(msg) {
    console.log("\033[1;35m[" + getUTCDate() + "]\033[0m \033[1;31m[ERROR]\033[0m " + msg);
}
function info(msg) {
    console.log("\033[1;35m[" + getUTCDate() + "]\033[0m \033[1;36m[INFO]\033[0m " + msg);
}
function warning(msg) {
    console.log("\033[1;35m[" + getUTCDate() + "]\033[0m \033[1;33m[WARNING]\033[0m " + msg);
}
const obj = {
    ok,
    error,
    info,
    warning
};
exports.default = obj;
