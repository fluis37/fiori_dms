/*global QUnit*/

sap.ui.define([
	"sap/ged/dms/controller/Gedgest.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Gedgest Controller");

	QUnit.test("I should test the Gedgest controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
