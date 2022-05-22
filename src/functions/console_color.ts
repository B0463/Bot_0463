function ok(msg: any) {
    console.log("\033[1;32m[OK]\033[0m "+msg);
}
function error(msg: any) {
    console.log("\033[1;31m[ERROR]\033[0m "+msg);
}

function info(msg: any) {
    console.log("\033[1;36m[INFO]\033[0m "+msg);
}
function warning(msg: any) {
    console.log("\033[1;33m[WARNING]\033[0m "+msg);
}
const obj = {
    ok,
    error,
    info,
    warning
}
export default obj;