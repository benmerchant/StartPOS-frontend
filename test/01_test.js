const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = require('chai').expect;

// spec.js
describe('First test', function(){
  it('it should have a title', () => {
    browser.get('https://angularjs.org');
    console.log(browser.getCurrentUrl());
    expect(title).eql('AngularJS — Superheroic JavaScript MVW Framework');
  });
});
