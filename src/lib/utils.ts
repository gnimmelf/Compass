export const throttle = (func: Function, timeFrame: number) => {
    let lastTime = 0;
    return (...args: any[]) => {
        let now = new Date() as unknown as number;
        if (now - lastTime >= timeFrame) {
            func(...args);
            lastTime = now;
        }
    };
}

export const bearingToRotation = (initBearing: number) => {
    let currentAngle = initBearing
    return (bearing: number) => {
        let delta = (bearing - currentAngle + 180) % 360 - 180;
        currentAngle = currentAngle + delta;
        return 360 - currentAngle
    }
}
