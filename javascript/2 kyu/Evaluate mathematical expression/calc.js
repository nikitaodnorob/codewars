// Evaluate mathematical expression

const isNumber = value => /[-]?[0-9]+(\.[0-9]+)?/.test(value);
const isOp = value => /[+\-*/]/.test(value);

const prio = op => op === '(' ? 0 : (op === '+' || op === '-') ? 1 : op === '~' ? 3 : 2;

const last = array => array[array.length - 1];

const operators = {
    '+': (x, y) => x + y,
    '-': (x, y) => y - x,
    '*': (x, y) => x * y,
    '/': (x, y) => y / x,
};

var calc = function (expression) {
    let lexems = [];
    let curLexem = "";

    //get lexems
    expression.split("").filter(c => c !== " ").forEach((c, i, arr) => {
        if (isNumber(c) || c === '.') {
            curLexem += c;
            if (i === arr.length-1) lexems.push(curLexem);
        }
        else {
            if (curLexem !== "") { lexems.push(curLexem); curLexem = ""; }
            if (c === '-' && (isOp(arr[i - 1]) || arr[i - 1] === "(") && arr[i + 1] === "(")
                lexems.push("~");
            else if (c === "-" && !isNumber(arr[i - 1]) && arr[i - 1] !== ')' && isNumber(arr[i+1]))
                lexems.push("~");
            else if ("+-*/()".includes(c)) lexems.push(c);
        }
    });

    //get Reverse Polish notation
    let [polish, stack] = [[], []];
    lexems.forEach(l => {
        if (isNumber(l)) polish.push(l);
        else if (l === '~' || l === '(') stack.push(l);
        else if (isOp(l)) {
            while (stack.length && prio(last(stack)) >= prio(l)) polish.push(stack.pop());
            stack.push(l);
        }
        else if (l === ')') {
            while (last(stack) !== '(') polish.push(stack.pop());
            stack.pop(); //delete '(' from stack
        }
    });
    polish = [...polish, ...stack.reverse()];

    //eval
    stack = [];
    polish.forEach(l => {
        if (isNumber(l)) stack.push(parseFloat(l));
        else if (l === '~') stack.push(-stack.pop());
        else if (isOp(l)) stack.push(operators[l](stack.pop(), stack.pop()));
    });
    return stack[0];
};
