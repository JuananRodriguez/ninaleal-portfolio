const getWidthBrowser = () => {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

export const isMobile = () => {
    return getWidthBrowser() < 768;
}

export const isTablet = () => {
    return getWidthBrowser() < 1200;
}