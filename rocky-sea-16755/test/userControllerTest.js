"use strict";

const chai = require('chai');

let userController = require('../app/controllers/usercontroller.js');

// We are comparing the actual results with expected results
let expect = require('chai').expect;

describe('User Controller', function() {
  it('should be able to set and get username', function() {

    let expectedUser = 'testUser';

    userController.setUser(expectedUser);
    let actualUser = userController.getUser();

    expect(actualUser).to.equal(expectedUser);
  });
});
