'use strict'

const socket=require('socket.io-client')
let host =`http://localhost:3000/caps`

const driverConnectionToSystem=socket.connect(host)



driverConnectionToSystem.on('pickup' ,(order)=>{
    console.log(`There is a new Order to pick up `);

    setTimeout(()=>{

        driverConnectionToSystem.emit('in-transit',order)


    },2000)

    setTimeout(()=>{
        console.log(`the item is delivered`);

        driverConnectionToSystem.emit('delivered',order)


    },5000)


    
})
















// const { TIMEOUT } = require('dns');
// const events = require('../events');

// events.on('packageIsReady ',productHasToDielevered);

// function productHasToDielevered(order) {
//     setTimeout(()=>{
//         console.log(`you have to Deliever this ${order}`);

//     events.emit('inTransiet',order)

//     },2000)
    

//     dilevered(order)
    
// }


// function dilevered(order) {

//     console.log('Delivered');
//     events.emit('pacakgeDielevered',order)
    
// }

