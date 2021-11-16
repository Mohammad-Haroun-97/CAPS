'use strict'

const socket=require('socket.io-client')
let host =`http://localhost:3000/caps`

const driverConnectionToSystem=socket.connect(host)

driverConnectionToSystem.emit('get_all');



driverConnectionToSystem.on('pickup' ,(order)=>{
    console.log(`There is a new Order to pick up `);

    setTimeout(()=>{

        driverConnectionToSystem.emit('in-transit',order)


    },2000)

    setTimeout(()=>{
        console.log(`the item is delivered`);

        driverConnectionToSystem.emit('delivered',order)


    },5000)

    console.log('driver received the chore', order);
   
    driverConnectionToSystem.emit('received',order)
    
})

driverConnectionToSystem.on('added-drivers' , order=>{
  
    console.log(`the mesage read by system successfuly`);
  })




  //////////////////////////////////////////////
 //// Shop2 ////////////////

 driverConnectionToSystem.emit('get_all2');

 driverConnectionToSystem.on('pickup2' ,(order)=>{
    console.log(`There is a new Order to pick up `);

    setTimeout(()=>{

        driverConnectionToSystem.emit('in-transit2',order)


    },2000)

    setTimeout(()=>{
        console.log(`the item is delivered`);

        driverConnectionToSystem.emit('delivered2',order)


    },5000)

    console.log('driver received the chore', order);
   
    driverConnectionToSystem.emit('received2',order)
    
})

driverConnectionToSystem.on('added-drivers2' , order=>{
  
    console.log(`the mesage read by system successfuly`);
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

