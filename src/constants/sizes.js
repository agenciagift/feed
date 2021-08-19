export const spacing = {
    XS: 4,
    S: 8,
    M: 16,
    L: 32,
    XL: 64,
};

export const getSpacing = (key = 'm') => `${spacing[key.toUpperCase()] || spacing.M}px`;

export const contentWidth = {
    default: 800,
};

export const getContentWidth = (key = 'default') => `${contentWidth[key] || contentWidth.default}px`;
