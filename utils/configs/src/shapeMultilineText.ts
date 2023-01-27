import type { ISourceOptions } from "@tsparticles/engine";

const options: ISourceOptions = {
    name: "Shape Multiline Text",
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
            },
        },
        color: {
            value: "#ff0000",
            animation: {
                enable: true,
                speed: 20,
                sync: true,
            },
        },
        shape: {
            type: "multiline-text",
            options: {
                "multiline-text": {
                    value: "pippo\npluto",
                },
            },
        },
        opacity: {
            value: {
                min: 0.5,
                max: 1,
            },
        },
        size: {
            value: {
                min: 16,
                max: 32,
            },
        },
        move: {
            enable: true,
            speed: 6,
        },
    },
    background: {
        color: "#000000",
    },
};

export default options;
