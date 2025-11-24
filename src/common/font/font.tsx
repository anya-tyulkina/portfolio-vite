type FontPropsType = {
    family?: string,
    weight?: number,
    letterSpacing?: number,
    lineHeight?: number,
    color?: string
    Fmin?: number
    Fmax?: number
}

export const font = ({family, color, letterSpacing, lineHeight, weight, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || "Manrope"};
    font-weight: ${weight || 400};
    font-size: calc((100vw - 360px) / (1920 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
    letter-spacing: ${letterSpacing || 0.02}em;
    line-height: ${lineHeight || 1.2};
    color: ${color || "#1111"};
`

