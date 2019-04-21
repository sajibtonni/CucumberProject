$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/CucumberLogin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: nezam.uddin@gmail.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    }
  ],
  "line": 4,
  "name": "Cucumber Practice",
  "description": "",
  "id": "cucumber-practice",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@CucumberProject"
    }
  ]
});
formatter.before({
  "duration": 4690088828,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Cucumber Project",
  "description": "",
  "id": "cucumber-practice;cucumber-project",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I want to login",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I complete action",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I validate the actions",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberProjectTest.i_want_to_login()"
});
formatter.result({
  "duration": 1445471763,
  "status": "passed"
});
formatter.match({
  "location": "CucumberProjectTest.i_complete_action()"
});
formatter.result({
  "duration": 8999684,
  "status": "passed"
});
formatter.match({
  "location": "CucumberProjectTest.i_validate_the_actions()"
});
formatter.result({
  "duration": 653654,
  "status": "passed"
});
});