"use strict";

//  http://loacalhost:3000

const io = require("socket.io")(3000);
const caps = io.of("/caps");
const uuid = require("uuid").v4;

caps.on("connection", (socket) => {
  console.log(`you are connected now to the system`, socket.id);

  let pickupMessageQueue = {
    store1: {},
    store2: {},
  };

  let delieveredMessageQueue = {
    store1: {},
    store2: {},
  };

  let inTransitMessageQueue = {
    store1: {},
    store2: {},
  };

  socket.on("pickup", (order) => {
    console.log(`The order details`, {
      store: `acme-widgets `,
      time: new Date(),
      order: order,
    });
    const id = uuid();

    pickupMessageQueue.store1[id] = order; // here we push to the message object(storing process)
    console.log("messageQueue.store1", pickupMessageQueue.store1);

    socket.emit("added-vendors", order);

    caps.emit("pickup", { id: id, order: pickupMessageQueue.store1[id] });
  });




  



  socket.on("received", (payload) => {
    console.log("recieved from drivers");

    delete delieveredMessageQueue.store1[payload.id];
  });




  socket.on("get_all", () => {
    console.log("get all the orders for the drivers");
    Object.keys(pickupMessageQueue.store1).forEach((id) => {
      socket.emit("chore", { id: id, order: pickupMessageQueue.store1[id] });
    });
  });




  socket.on("in-transit", (order) => {
    console.log(`this order in in transit`, {
      store: `acme-widgets `,
      time: new Date(),
      order: order,
    });
    const id = uuid();

    inTransitMessageQueue.store1[id] = order; // here we push to the message object(storing process)
    console.log("messageQueue.store1", inTransitMessageQueue.store1);

    socket.emit("added-drivers", order);

    caps.emit("in-transit", {
      id: id,
      order: inTransitMessageQueue.store1[id],
    });

    caps.emit("vendors-in-transit", order);
  });





  socket.on("delivered", (order) => {
    console.log(`The order is delivered`, {
      store: `acme-widgets `,
      time: new Date(),
      order: order,
    });
    const id = uuid();

    delieveredMessageQueue.store1[id] = order; // here we push to the message object(storing process)
    console.log("messageQueue.store1", delieveredMessageQueue.store1);

    socket.emit("added-drivers", order);

    caps.emit("delivered", {
      id: id,
      order: delieveredMessageQueue.store1[id],
    });

    caps.emit("vendors-delivered", order);
  });





//////////////////////////////////////////////
////////////////shop222///////////////////////////
/////////////////////////////////////////////

socket.on("pickup2", (order) => {
    console.log(`The order details`, {
      store: `1-800-flowers `,
      time: new Date(),
      order: order,
    });
    const id = uuid();

    pickupMessageQueue.store2[id] = order; // here we push to the message object(storing process)
    console.log("messageQueue.store1", pickupMessageQueue.store2);

    socket.emit("added-vendors", order);

    caps.emit("pickup", { id: id, order: pickupMessageQueue.store2[id] });
  });




  



  socket.on("received2", (payload) => {
    console.log("recieved from drivers");

    delete delieveredMessageQueue.store2[payload.id];
  });




  socket.on("get_all2", () => {
    console.log("get all the orders for the drivers");
    Object.keys(pickupMessageQueue.store2).forEach((id) => {
      socket.emit("chore", { id: id, order: pickupMessageQueue.store2[id] });
    });
  });




  socket.on("in-transit2", (order) => {
    console.log(`this order in in transit`, {
      store: `Haroun Fried Checkin `,
      time: new Date(),
      order: order,
    });
    const id = uuid();

    inTransitMessageQueue.store2[id] = order; // here we push to the message object(storing process)
    console.log("messageQueue.store2", inTransitMessageQueue.store2);

    socket.emit("added-drivers2", order);

    caps.emit("in-transit2", {
      id: id,
      order: inTransitMessageQueue.store2[id],
    });

    caps.emit("vendors-in-transit2", order);
  });





  socket.on("delivered2", (order) => {
    console.log(`The order is delivered`, {
      store: `1-800-flowers `,
      time: new Date(),
      order: order,
    });
    const id = uuid();

    delieveredMessageQueue.store2[id] = order; // here we push to the message object(storing process)
    console.log("messageQueue.store2", delieveredMessageQueue.store2);

    socket.emit("added-drivers2", order);

    caps.emit("delivered2", {
      id: id,
      order: delieveredMessageQueue.store2[id],
    });

    caps.emit("vendors-delivered2", order);
  });





});







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
