// Are you available?

function checkAvailability(schedule, currentTime) {
    const currentMeet = schedule.find(([start, end]) => currentTime >= start && currentTime < end);
    return currentMeet ? currentMeet[1] : true;
}
