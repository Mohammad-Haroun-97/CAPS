'use strict'

//  http://loacalhost:3000

const io=require('socket.io')(3000)
const caps=io.of('/caps')


caps.on('connection', (socket)=>{
    
    console.log(`you are connected now to the system`, socket.id);


    

    socket.on('pickup', (order)=>{
        console.log(`The order details`, {
            store: `Haroun Fried Checkin `,
            time: new Date(),
            order: order
        });
        
        caps.emit('pickup',order)
    })

    socket.on('in-transit', (order)=>{
        console.log(`this order in in transit`, {
            store: `Haroun Fried Checkin `,
            time: new Date(),
            order: order
        });
        caps.emit('vendors-in-transit',order)
    })


    socket.on('delivered', (order)=>{
        console.log(`The order is delivered`, {
            store: `Haroun Fried Checkin `,
            time: new Date(),
            order: order
        });
        caps.emit('vendors-delivered',order)
    })
   
})












// 'use strict'

// const events = require('./events')
// require('./drivers/driver');
// require('./vendors/vendors')

// // events=require('./events')


// events.on('packageIsReady',packageIsReadyHandeler )
// //1) alert the sysytem that a package is ready for pickup/delivery.--> system 
// //2) (Drivers need an instant notification to pick the package up.)---> DRIVERS

// events.on('inTransiet', inTransietHandeler)
// // the store owner should know that the package is now “in transit”.(Drivers need to alert the vendors that the package is in transit)--->VENDORS 
// // 2) alert the system when I have picked up a package and it is in transit

// events.on('pacakgeDielevered',pacakgeDieleveredHandeler)
// // 1) the store owner should know that the package has been delivered.(Drivers to alert the vendors that the package has been delivered.)---->VENDORS
// // 2) alert the system when a package has been delivered.


// function packageIsReadyHandeler(payload){

// console.log('EVENT',{

//     event: 'the product has sold',
//     time: new Date(),
//     payload

// });
// }




// function inTransietHandeler(payload) {
//     console.log('Event',{
//         event : "Product under transiet proccess",
//         time : new Date(),
//         payload

//     });
    
// }


// function pacakgeDieleveredHandeler(payload) {
//     console.log('Event',{
//         event: 'the item has been dilievered successfully',
//         time : new Date(),
//         payload
//     });
    
// }



