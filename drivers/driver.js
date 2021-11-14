'use strict'
const { TIMEOUT } = require('dns');
const events = require('../events');

events.on('packageIsReady ',productHasToDielevered);

function productHasToDielevered(order) {
    setTimeout(()=>{
        console.log(`you have to Deliever this ${order}`);

    events.emit('inTransiet',order)

    },2000)
    

    dilevered(order)
    
}


function dilevered(order) {

    console.log('Delivered');
    events.emit('pacakgeDielevered',order)
    
}

