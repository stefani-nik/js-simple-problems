function tripLength([x1, y1, x2, y2, x3, y3]) {
    let firstSide = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    let secondSide = Math.sqrt((x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3));
    let thirdSide = Math.sqrt((x1 - x3) * (x1 - x3) + (y1 - y3) * (y1 - y3));
    let path1 = firstSide + secondSide;
    let path2 = secondSide + thirdSide;
    let path3 = firstSide + thirdSide;
    let optimalPath = Math.min(path1, path2, path3);

    if (optimalPath == path1) {
        console.log(`1->2->3: ${optimalPath}`);
    }
    else if (optimalPath == path2) {
        console.log(`1->3->2: ${optimalPath}`);
    }
    else {
        console.log(`2->1->3: ${optimalPath}`);
    }
}

tripLength([-1, -2, 3.5, 0, 0, 2]);
