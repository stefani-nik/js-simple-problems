function gradsToDegrees(grads) {
    let degrees = Number(grads)*360/400;
    let result = degrees > 0 ? Math.abs(degrees%360) : 360 - Math.abs(degrees%360);
    console.log(result);
}
gradsToDegrees(-50);