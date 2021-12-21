const moment = require('moment');

const logger = (req, res, next) => {
    console.log(req.protocol + "://" + req.get("host") + req.originalUrl + " :: " + moment().format("YYYY-MM-DD h:mm:ss") + " :: " + getActualRequestDurationInMilliseconds(process.hrtime()) + ' ms');
    next();
}

const getActualRequestDurationInMilliseconds = (start) => {
    const NS_PER_SEC = 1e9; //  convert to nanoseconds
    const NS_TO_MS = 1e6; // convert to milliseconds
    const diff = process.hrtime(start);
    return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};

module.exports = logger;