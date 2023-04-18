const notes = new Map<string, number[]>();

notes.set("C", [16.35, 32.7, 65.41, 130.81, 261.63, 523.25, 1046.5, 2093.0, 4186.01]);
notes.set("Db", [17.32, 34.65, 69.3, 138.59, 277.18, 554.37, 1108.73, 2217.46, 4434.92]);
notes.set("D", [18.35, 36.71, 73.42, 146.83, 293.66, 587.33, 1174.66, 2349.32, 4698.63]);
notes.set("Eb", [19.45, 38.89, 77.78, 155.56, 311.13, 622.25, 1244.51, 2489.02, 4978.03]);
notes.set("E", [20.6, 41.2, 82.41, 164.81, 329.63, 659.25, 1318.51, 2637.02, 5274.04]);
notes.set("F", [21.83, 43.65, 87.31, 174.61, 349.23, 698.46, 1396.91, 2793.83, 5587.65]);
notes.set("Gb", [23.12, 46.25, 92.5, 185.0, 369.99, 739.99, 1479.98, 2959.96, 5919.91]);
notes.set("G", [24.5, 49.0, 98.0, 196.0, 392.0, 783.99, 1567.98, 3135.96, 6271.93]);
notes.set("Ab", [25.96, 51.91, 103.83, 207.65, 415.3, 830.61, 1661.22, 3322.44, 6644.88]);
notes.set("A", [27.5, 55.0, 110.0, 220.0, 440.0, 880.0, 1760.0, 3520.0, 7040.0]);
notes.set("Bb", [29.14, 58.27, 116.54, 233.08, 466.16, 932.33, 1864.66, 3729.31, 7458.62]);
notes.set("B", [30.87, 61.74, 123.47, 246.94, 493.88, 987.77, 1975.53, 3951.07, 7902.13]);
notes.set("pause", [0]);

/**
 * @param note
 */
export function getNoteFrequency(note: string): number | undefined {
    const regex = /(([A-G]b?)(\d))|pause/i,
        result = regex.exec(note);

    if (!result || !result.length) {
        return;
    }

    console.log(result);

    const noteKey = result[2] || result[0],
        noteItem = notes.get(noteKey);

    if (!noteItem) {
        return;
    }

    return noteItem[parseInt(result[3] || "0")];
}
