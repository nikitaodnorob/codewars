// The observed PIN

const nearest = {
    "0": ["0", "8"],
    "1": ["1", "2","4"],
    "2": ["1","2", "3","5"],
    "3": ["2","3", "6"],
    "4": ["1","4", "5","7"],
    "5": ["2","4","5","6","8"],
    "6": ["3","5","6","9"],
    "7": ["4","7","8"],
    "8": ["0","5","7","8","9"],
    "9": ["6","8","9"]
};

function getPINs(observed) {
    if (observed.length === 1) return nearest[observed[0]];
    const results = [];

    const nextParts = getPINs(observed.substring(1));
    nextParts.forEach(variant => nearest[observed[0]].forEach(
        first => results.push(first + variant)
    ));

    return results;
}
