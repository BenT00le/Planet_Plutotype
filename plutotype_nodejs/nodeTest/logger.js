const EventEmitter = require('events');
const uid = require('uuid');

class Logger extends EventEmitter
{
    log(msg)
    {
        this.emit('message', {id: uid.v4(), msg});
    }
}

module.exports = Logger;