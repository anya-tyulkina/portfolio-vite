import iconSprite from "../../assets/images/sprite.svg";

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}
export const Icon = ({iconId, width, height, viewBox}: IconPropsType) => {
    return (
            <svg width={width || "105"} height={height || "100"} viewBox={viewBox || "0 0 105 100"} fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${iconSprite}#${iconId}`}></use>
            </svg>

    );
};
