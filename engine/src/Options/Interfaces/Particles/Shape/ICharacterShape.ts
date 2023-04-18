import type { IShapeValues } from "./IShapeValues";
import type { SingleOrMultiple } from "../../../../Types/SingleOrMultiple";

/**
 */
export interface ICharacterShape extends IShapeValues {
    font: string;
    style: string;
    value: SingleOrMultiple<string>;
    weight: string;
}
