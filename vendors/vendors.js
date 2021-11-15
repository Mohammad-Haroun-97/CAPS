'use strict'
const faker=require('faker')

const socket=require('socket.io-client')

const host =  `http://localhost:3000/caps`;


const vendorsConnectionToSystem=socket.connect(host);

setInterval(()=>{
  let order={
    store: 'Haroun Fried Chicken',
  orderId: faker.datatype.number(),
   customer: faker.name.findName(),
    address: faker.address.cityName()
  }
  vendorsConnectionToSystem.emit('pickup',order)

},5000)

vendorsConnectionToSystem.on('pickup',(order)=>{
  console.log(order.orderId);
})




vendorsConnectionToSystem.on('vendors-in-transit',(order)=>{


  console.log(`this order Id : ${order.orderId} is in transit` );
})




vendorsConnectionToSystem.on('vendors-delivered',(order)=>{


  console.log(`Thank you for delivering this item ${order.orderId} ` );
})




















// const events = require('../events')

// setInterval( ()=>{
//   let order={

//     store: 'Haroun Fried Chicken',
//    orderId: faker.datatype.number(),
//    customer: faker.name.findName(),
//    address: faker.address.cityName()


//   }
//   console.log("order",order);
//   events.emit('packageIsReady',order)



// },2000)




// events.on('pacakgeDielevered',DielieveredMassege)


// function DielieveredMassege(order) {

//   console.log(`Thanks for ordering from our store Mr/Ms ${order.customer}`);
  
// }




