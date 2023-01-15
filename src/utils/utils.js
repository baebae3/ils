export const sort = (arr) => {
    arr.map(item => {
        let temp = 0
        temp = item[0];
        item[0] = item[1];
        item[1] = temp
    })
    return arr
}