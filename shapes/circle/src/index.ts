import { CircleDrawer } from "./CircleDrawer";
import type { Engine } from "tsparticles-engine";

/**
 * @param engine
 */
export async function loadCircleShape(engine: Engine): Promise<void> {
    await engine.addShape("circle", new CircleDrawer());
}
