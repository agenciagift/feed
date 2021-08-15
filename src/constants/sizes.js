export const spacing = {
    xs: 4,
    s: 8,
    m: 16,
    l: 32,
    xl: 64,
};

export const getSpacing = (key = 'm') => `${spacing[key] || spacing.m}px`;

export const contentWidth = {
    default: 800,
};

export const getContentWidth = (key = 'default') => `${contentWidth[key] || contentWidth.default}px`;
