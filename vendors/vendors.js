'use strict'

const events=require('../events')

const faker=require('faker')
// const events = require('../events')

setInterval( ()=>{
  let order={

    store: 'Haroun Fried Chicken',
   orderId: faker.datatype.number(),
   customer: faker.name.findName(),
   address: faker.address.cityName()


  }
  console.log("order",order);
  events.emit('packageIsReady',order)



},2000)




events.on('pacakgeDielevered',DielieveredMassege)


function DielieveredMassege(order) {

  console.log(`Thanks for ordering from our store Mr/Ms ${order.customer}`);
  
}




