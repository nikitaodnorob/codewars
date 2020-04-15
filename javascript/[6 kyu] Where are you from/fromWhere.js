// Where are you from?

function fromWhere(you,me,question){
    if (question === 'Where are you from?') {
        const diffKey = ['Country','Province','City','Town','Street'].find(p => you[p] !== me[p]);
        if (!diffKey) return "Same as you.";
        else return `I am from ${me[diffKey]}.`;
    }
    else if (/^What [a-z]+ are you from\?$/.test(question)) {
        const theme = question.split(' ')[1];
        const key = theme[0].toUpperCase() + theme.substring(1);
        if (!me.hasOwnProperty(key)) return "What are you saying?";
        if (you[key] === me[key]) return "Same as you.";
        else return `I am from ${me[key]}.`;
    }
    else return "What are you saying?";
}
