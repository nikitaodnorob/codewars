// Human readable duration format

const formatPart = part => parseInt(part.split(' ')[0]) > 1 ? part + 's' : part;

function formatDuration (seconds) {
    if (seconds === 0) return 'now';
    const answer = [
        `${Math.floor(seconds / 3600 / 24 / 365)} year`,
        `${Math.floor(seconds / 3600 / 24) % 365} day`,
        `${Math.floor(seconds / 3600) % 24} hour`,
        `${Math.floor(seconds / 60) % 60} minute`,
        `${seconds % 60} second`
    ];
    const parts = answer.filter(part => part[0] !== '0').map(formatPart);
    return parts.length === 1
        ? parts[0]
        : parts.slice(0, parts.length - 1).join(', ') + ' and ' + parts[parts.length - 1]
}
