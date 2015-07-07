/* jslint node: true */
/* global featureFile, scenarios, steps */
"use strict";

var Yadda = require('yadda');
Yadda.plugins.mocha.StepLevelPlugin.init();

new Yadda.FeatureFileSearch(__dirname + '/features').each(function(file) {
    featureFile(file, function(feature) {

        var library = require('./library');
        var yadda = Yadda.createInstance(library);

        scenarios(feature.scenarios, function(scenario) {
            steps(scenario.steps, function(step) {
                yadda.run(step);
            });
        });
    });
});