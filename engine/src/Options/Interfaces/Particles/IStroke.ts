import type { IAnimatableColor } from "../IAnimatableColor";
import type { IColor } from "../../../Core/Interfaces/Colors";
import type { RangeValue } from "../../../Types/RangeValue";
import type { RecursivePartial } from "../../../Types/RecursivePartial";

/**
 * Particle stroke, outlines the particle with a customizable line
 * [[include:Options/Particles/Stroke.md]]
 */
export interface IStroke {
    /**
     * The stroke color, can be animated too
     */
    color?: string | RecursivePartial<IAnimatableColor> | RecursivePartial<IColor>;

    /**
     * The stroke opacity
     */
    opacity?: RangeValue;

    /**
     * The stroke line width
     */
    width: RangeValue;
}
