export default (list, item) => {
    let found = false;
    for (let i = 0; i < list.length && !found; i++) {
        found = list[i] === item;
    }
    return found;
}