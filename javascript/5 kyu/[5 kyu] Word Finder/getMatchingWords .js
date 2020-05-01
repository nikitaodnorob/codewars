// Word Finder

function Dictionary(words) {
    this.words = words;
}

Dictionary.prototype.getMatchingWords = function(pattern) {
    const re = new RegExp('^' + pattern.replace(/\?/g, '[a-z]') + '$');
    return this.words.filter(w => re.test(w));
};
