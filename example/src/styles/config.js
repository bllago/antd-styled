const breakpointTypes = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl'
}

const { xs, sm, md, lg, xl } = breakpointTypes

const breakpoints = {
    [xs]: '576px',
    [sm]: '768px',
    [md]: '1024px',
    [lg]: '1200px',
    [xl]: '1600px'
}

const gutters = {
    [xs]: '16',
    [sm]: '32',
    [md]: '48',
    [lg]: '80',
    [xl]: '96'
}

const fontSizeTypes = {
    h1: 'h1',
    body1: 'body1'
}

const { h1, body1 } = fontSizeTypes

const fontSizes = {
    [h1]: '48px',
    [body1]: '16px'
}

const lineHeights = {
    [h1]: '56px',
    [body1]: '24px'
}

const paddingStep = 4;

const paddings = {}
Object.keys(gutters).forEach(mediaSize => {
    const gutter = gutters[mediaSize]
    paddings[mediaSize] = gutter/2
})

Object.values(paddings)

const theme = {
    breakpointTypes,
    breakpoints,
    gutters,
    paddings,
    fontSizes,
    lineHeights
}