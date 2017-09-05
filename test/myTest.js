"use strict";

var chai = require('chai');
var should = chai.should();
var sinon = require('sinon');
var request = require('supertest');
// var app = require('config/express');

// describe('myList', function() {
//     request(app)
//         .get('/myList')
//         .expect('Content-Type', /json/)
//         .expect('Content-Length', '4')
//         .expect(200, "ok")
//         .end(function(err, res){
//            if (err) throw err;
//         });
// });



//var multiply = require("../src/multiply.js");
var expect = require("chai").expect;

describe("Universe", function() {
  it("should be self-consistent", function() {
    expect(2).to.equal(2);
  });
});
