"use strict";

const supertest = require("supertest");
const events = require("./events");

let payload = {
  store: "Haroun Fried Chicken",
  orderID: "5e588e05b77",
  customer: "Mohammad Haroun",
  address: "Amman",
};

jest.useFakeTimers();

describe("caps test", () => {
  require("./caps");
  it("pickup-detect", () => {
    expect(events.emit("packageIsReady", payload)).toEqual(true);
  });

  it("in-transit-detect", () => {
    expect(events.emit("inTransiet", payload)).toEqual(true);
  });

  it("delivered-detect", () => {
    expect(events.emit("pacakgeDielevered", payload)).toEqual(true);
  });
});

describe("vendor test", () => {
  require("./vendors/vendors");
  it("ready to pickup", () => {
    expect(events.emit("packageIsReady", payload)).toEqual(true);
  });
  it("delivered", () => {
    expect(events.emit("pacakgeDielevered", payload)).toEqual(true);
  });
});

describe("driver test", () => {
  require("./drivers/driver");
  it("driver-pickup", () => {
      
    expect(events.emit("packageIsReady", payload)).toEqual(true);
  });

  it("in-transit", () => {
    expect(events.emit("inTransiet", payload)).toEqual(true);
  });

  it("delivered", () => {
    expect(events.emit("pacakgeDielevered", payload)).toEqual(true);
  });
});