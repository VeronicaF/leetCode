function canPlaceFlowers(flowerbed, n) {
    // let count = 0;
    // let arr = flowerbed.join('').split(/0?10?/).filter(item=>!(item===''));
    // arr.forEach(item => count += Math.ceil(item.length / 2));
    // console.log(arr)
    // return count >= n;
    let prev, next, count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 1) {
            continue;
        }
        prev = flowerbed[i - 1];
        next = flowerbed[i + 1];
        i === 0 && (prev = 0);
        i === flowerbed.length-1 && (next = 0);
        console.log(prev, flowerbed[i], next);
        if (prev === 0 && next === 0) {
            flowerbed[i] = 1;
            count++;
        }
    }
    return count >= n;
}
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));