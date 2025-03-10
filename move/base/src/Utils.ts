import {
    type IDelta,
    type Move,
    type Particle,
    RotateDirection,
    clamp,
    getDistances,
    getRandom,
} from "tsparticles-engine";
import type { MoveParticle } from "./Types";

/**
 * @param particle -
 */
export function applyDistance(particle: MoveParticle): void {
    const initialPosition = particle.initialPosition,
        { dx, dy } = getDistances(initialPosition, particle.position),
        dxFixed = Math.abs(dx),
        dyFixed = Math.abs(dy),
        { maxDistance } = particle.retina,
        hDistance = maxDistance.horizontal,
        vDistance = maxDistance.vertical;

    if (!hDistance && !vDistance) {
        return;
    }

    if (((hDistance && dxFixed >= hDistance) || (vDistance && dyFixed >= vDistance)) && !particle.misplaced) {
        particle.misplaced = (!!hDistance && dxFixed > hDistance) || (!!vDistance && dyFixed > vDistance);

        if (hDistance) {
            particle.velocity.x = particle.velocity.y / 2 - particle.velocity.x;
        }

        if (vDistance) {
            particle.velocity.y = particle.velocity.x / 2 - particle.velocity.y;
        }
    } else if ((!hDistance || dxFixed < hDistance) && (!vDistance || dyFixed < vDistance) && particle.misplaced) {
        particle.misplaced = false;
    } else if (particle.misplaced) {
        const pos = particle.position,
            vel = particle.velocity;

        if (hDistance && ((pos.x < initialPosition.x && vel.x < 0) || (pos.x > initialPosition.x && vel.x > 0))) {
            vel.x *= -getRandom();
        }

        if (vDistance && ((pos.y < initialPosition.y && vel.y < 0) || (pos.y > initialPosition.y && vel.y > 0))) {
            vel.y *= -getRandom();
        }
    }
}

/**
 *
 * @param particle -
 * @param moveOptions -
 * @param moveSpeed -
 * @param maxSpeed -
 * @param moveDrift -
 * @param delta -
 */
export function move(
    particle: MoveParticle,
    moveOptions: Move,
    moveSpeed: number,
    maxSpeed: number,
    moveDrift: number,
    delta: IDelta
): void {
    applyPath(particle, delta);

    const gravityOptions = particle.gravity,
        gravityFactor = gravityOptions?.enable && gravityOptions.inverse ? -1 : 1;

    if (moveDrift && moveSpeed) {
        particle.velocity.x += (moveDrift * delta.factor) / (60 * moveSpeed);
    }

    if (gravityOptions?.enable && moveSpeed) {
        particle.velocity.y += (gravityFactor * (gravityOptions.acceleration * delta.factor)) / (60 * moveSpeed);
    }

    const decay = particle.moveDecay;

    particle.velocity.multTo(decay);

    const velocity = particle.velocity.mult(moveSpeed);

    if (
        gravityOptions?.enable &&
        maxSpeed > 0 &&
        ((!gravityOptions.inverse && velocity.y >= 0 && velocity.y >= maxSpeed) ||
            (gravityOptions.inverse && velocity.y <= 0 && velocity.y <= -maxSpeed))
    ) {
        velocity.y = gravityFactor * maxSpeed;

        if (moveSpeed) {
            particle.velocity.y = velocity.y / moveSpeed;
        }
    }

    const zIndexOptions = particle.options.zIndex,
        zVelocityFactor = (1 - particle.zIndexFactor) ** zIndexOptions.velocityRate;

    velocity.multTo(zVelocityFactor);

    const { position } = particle;

    position.addTo(velocity);

    if (moveOptions.vibrate) {
        position.x += Math.sin(position.x * Math.cos(position.y));
        position.y += Math.cos(position.y * Math.sin(position.x));
    }
}

/**
 * @param particle -
 * @param moveSpeed -
 */
export function spin(particle: MoveParticle, moveSpeed: number): void {
    const container = particle.container;

    if (!particle.spin) {
        return;
    }

    const updateFunc = {
        x: particle.spin.direction === RotateDirection.clockwise ? Math.cos : Math.sin,
        y: particle.spin.direction === RotateDirection.clockwise ? Math.sin : Math.cos,
    };

    particle.position.x = particle.spin.center.x + particle.spin.radius * updateFunc.x(particle.spin.angle);
    particle.position.y = particle.spin.center.y + particle.spin.radius * updateFunc.y(particle.spin.angle);
    particle.spin.radius += particle.spin.acceleration;

    const maxCanvasSize = Math.max(container.canvas.size.width, container.canvas.size.height);

    if (particle.spin.radius > maxCanvasSize / 2) {
        particle.spin.radius = maxCanvasSize / 2;
        particle.spin.acceleration *= -1;
    } else if (particle.spin.radius < 0) {
        particle.spin.radius = 0;
        particle.spin.acceleration *= -1;
    }

    particle.spin.angle += (moveSpeed / 100) * (1 - particle.spin.radius / maxCanvasSize);
}

/**
 * @param particle -
 * @param delta -
 */
export function applyPath(particle: Particle, delta: IDelta): void {
    const particlesOptions = particle.options,
        pathOptions = particlesOptions.move.path,
        pathEnabled = pathOptions.enable;

    if (!pathEnabled) {
        return;
    }

    if (particle.lastPathTime <= particle.pathDelay) {
        particle.lastPathTime += delta.value;

        return;
    }

    const path = particle.pathGenerator?.generate(particle, delta);

    if (path) {
        particle.velocity.addTo(path);
    }

    if (pathOptions.clamp) {
        particle.velocity.x = clamp(particle.velocity.x, -1, 1);
        particle.velocity.y = clamp(particle.velocity.y, -1, 1);
    }

    particle.lastPathTime -= particle.pathDelay;
}

/**
 * @param particle -
 * @returns proximity speed factor
 */
export function getProximitySpeedFactor(particle: Particle): number {
    return particle.slow.inRange ? particle.slow.factor : 1;
}
