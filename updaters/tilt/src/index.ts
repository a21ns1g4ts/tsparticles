import type { Engine } from "tsparticles-engine";
import { TiltUpdater } from "./TiltUpdater";

/**
 * @param engine
 */
export async function loadTiltUpdater(engine: Engine): Promise<void> {
    await engine.addParticleUpdater("tilt", (container) => new TiltUpdater(container));
}
