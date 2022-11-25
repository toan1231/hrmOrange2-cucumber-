$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/uiFeatures/pamgiam.feature");
formatter.feature({
  "name": "Verify hover-over functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "As a user I can open pangiam url",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@toan"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Pangiam url",
  "keyword": "Then "
});
formatter.match({
  "location": "PangiamStep.iOpenPangiamUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});