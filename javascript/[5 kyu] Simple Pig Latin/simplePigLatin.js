// Simple Pig Latin

function pigIt(str){
    return str
        .split(' ')
        .map(word => ".!?:,;".includes(word[0]) ? word : word.substring(1) + word[0] + 'ay')
        .join(' ');
}