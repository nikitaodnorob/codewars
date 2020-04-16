// Ten-Pin Bowling

const calcValue = (step, prev) =>
    step === 'X' ? 10 : step === '/' ? 10 - calcValue(prev) : parseInt(step);

function bowlingScore(frames) {
    let stepMultiple = {};

    const getMultiple = index => stepMultiple[index] ? stepMultiple[index] : 1;

    const addMultiple = (...indexes) => {
        indexes.forEach(i => stepMultiple = {...stepMultiple, [i]: getMultiple(i) + 1});
    };

    const steps = frames.split(' ').reduce((arr, v) => [...arr, ...v.split('')], []);
    const stepsWithMultiple = steps.length - frames.split(' ').reverse()[0].length;

    return steps.reduce((score, step, i, arr) => {
        const value = calcValue(step, arr[i - 1]) * getMultiple(i);
        if (step === 'X' && i < stepsWithMultiple) addMultiple(i + 1, i + 2);
        else if (step === '/' && (i < stepsWithMultiple)) addMultiple(i + 1);
        return score + value;
    }, 0);
}
