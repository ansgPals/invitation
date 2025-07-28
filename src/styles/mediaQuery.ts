import facepaint from 'facepaint';

export const breakpoints = {
    xs: 0,
    sm: 375,
    lsm: 401,
    msm: 405,
    md: 768,
    lg: 1024,
    lgr: 1200,
    xl: 1440,
};

const breakpointsArray = Object.keys(breakpoints);

export const media = (device: string) => {
    const breakpointsMap = Object.keys(breakpoints).map((key) => [
        key,
        breakpoints[key],
    ]);

    const [result] = breakpointsMap.reduce(
        (acc, [name, size]) =>
            device === name ? [...acc, `@media (min-width: ${size}px)`] : acc,
        [],
    );

    return result;
};

export const mediaArray = facepaint(
    breakpointsArray.map((device) => `@media (min-width: ${device}px)`),
    { literal: true, overlap: true },
);
