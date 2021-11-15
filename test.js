"use strict";


const caps = require("socket.io")(3000);


let payload = {
  store: "Haroun Fried Chicken",
  orderID: "5e588e05b77",
  customer: "Mohammad Haroun",
  address: "Amman",
};

jest.useFakeTimers();

describe("caps test", () => {
  // const caps=require("./caps/caps");
  
  it("pickup-detect", () => {
    expect(caps.emit("pickup", payload)).toEqual(true);
  });

  it("in-transit-detect", () => {
    expect(caps.emit("in-transit", payload)).toEqual(true);
  });

  it("delivered-detect", () => {
    expect(caps.emit("delivered", payload)).toEqual(true);
  });
});

describe("vendor test", () => {
  require("./vendors/vendors");
  it("ready to pickup", () => {
    expect(caps.emit("pickup", payload)).toEqual(true);
  });
  it("delivered", () => {
    expect(caps.emit("in-transit", payload)).toEqual(true);
  });
});

describe("driver test", () => {
  require("./drivers/driver");
  it("driver-pickup", () => {
      
    expect(caps.emit("pickup", payload)).toEqual(true);
  });

  it("in-transit", () => {
    expect(caps.emit("in-transit", payload)).toEqual(true);
  });

  it("delivered", () => {
    expect(caps.emit("delivered", payload)).toEqual(true);
  });
});