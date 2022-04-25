function error(message) {
    throw new Error(message);
}
function failure() {
    return error("going to fail");
}
console.log(failure());
