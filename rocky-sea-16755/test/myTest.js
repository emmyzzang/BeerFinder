"use strict";

var chai = require('chai');
var should = chai.should();
var sinon = require('sinon');
var request = require('supertest');

var expect = require("chai").expect;

describe("Universe", function() {
  it("should be self-consistent", function() {
    expect(2).to.equal(2);
  });
});
