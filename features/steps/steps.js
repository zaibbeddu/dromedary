const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

var InMemStor = require("../../lib/inMemoryStorage.js");
var expectedNumberOfItems = 3;
var expectedProperties = ['value', 'color', 'highlight', 'label'];
var backend = new InMemStor();

Given('a vote count of {int}', function (int) {
  this.colorCounts = backend.getAllCounts();
});

When('I increment the vote by {int}', function (int) {
  var color;
	for (color in this.colorCounts) {
	  backend.incrementCount(color);
  }
});

Then('the vote should contain {int}', function (int) {
	var color;
	for (color in this.colorCounts) {
		expect(backend.getCount(color)).to.equal(this.colorCounts[color]+1);
	}
});
