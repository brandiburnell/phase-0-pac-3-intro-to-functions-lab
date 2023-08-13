// returns a string in all caps
function shout(string) {
    return string.toUpperCase();
}

// returns a string in all lower case
function whisper(string) {
    return string.toLowerCase();
}


// logs a string in all caps
function logShout(string) {
    console.log(string.toUpperCase());
}

// logs a string in all lowercase
function logWhisper(string) {
    console.log(string.toLowerCase());
}

// returns "I can't hear you!" if `string` is lowercase
function sayHiToHeadphonedRoommate(string) {
    const lowercaseString = string.toLowerCase();
    if(string === lowercaseString) {
        return "I can't hear you!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";   
    } else return "YES INDEED!";
}