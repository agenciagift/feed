export const sizes = {
    XS: 'XS',
    S: 'S',
    M: 'M',
    L: 'L',
    XL: 'XL',
}

export const spacing = {
    [sizes.XS]: 4,
    [sizes.S]: 8,
    [sizes.M]: 16,
    [sizes.L]: 32,
    [sizes.XL]: 64,
};

export const getSpacing = (key = 'm') => `${spacing[key.toUpperCase()] || spacing.M}px`;

export const EXTRA_SMALL = getSpacing(sizes.XS)
export const SMALL = getSpacing(sizes.S)
export const MEDIUM = getSpacing(sizes.M)
export const LARGE = getSpacing(sizes.L)
export const EXTRA_LARGE = getSpacing(sizes.XL)

export const contentWidth = {
    default: 800,
};

export const getContentWidth = (key = 'default') => `${contentWidth[key] || contentWidth.default}px`;
