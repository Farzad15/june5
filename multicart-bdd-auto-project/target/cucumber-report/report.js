$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("mct_login.feature");
formatter.feature({
  "line": 1,
  "name": "User Login Mechanism",
  "description": "In order to get all membership benefit from multicart ecommerce \nAs a User I want to perform a online login",
  "id": "user-login-mechanism",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "Langing on MCT Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.match({
  "location": "mct_login_steps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 3930334600,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 1346788500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Successfull login",
  "description": "",
  "id": "user-login-mechanism;successfull-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I complete login with James valid credentails",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I expect to seee profile Name as James Williams",
  "keyword": "Then "
});
formatter.match({
  "location": "mct_login_steps.i_complete_login_with_James_valid_credentails()"
});
formatter.result({
  "duration": 2385280300,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_expect_to_seee_profile_Name_as_James_Williams()"
});
formatter.result({
  "duration": 45165400,
  "status": "passed"
});
formatter.after({
  "duration": 4320502000,
  "status": "passed"
});
formatter.uri("mct_myacccount.feature");
formatter.feature({
  "line": 1,
  "name": "My Account",
  "description": "",
  "id": "my-account",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "Langing on MCT Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I complete login with James valid credentails",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to my account page",
  "keyword": "And "
});
formatter.match({
  "location": "mct_login_steps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 3129114700,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 1325324400,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_complete_login_with_James_valid_credentails()"
});
formatter.result({
  "duration": 2402362100,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.I_navigate_to_my_account_page()"
});
formatter.result({
  "duration": 1456049500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "My Account options are available",
  "description": "",
  "id": "my-account;my-account-options-are-available",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I see all my account options available",
  "rows": [
    {
      "cells": [
        "My Orders"
      ],
      "line": 14
    },
    {
      "cells": [
        "Profile"
      ],
      "line": 15
    },
    {
      "cells": [
        "My Return Requests"
      ],
      "line": 16
    },
    {
      "cells": [
        "Change Password"
      ],
      "line": 17
    },
    {
      "cells": [
        "My Favorite Products"
      ],
      "line": 18
    },
    {
      "cells": [
        "My Favorite Sellers"
      ],
      "line": 19
    },
    {
      "cells": [
        "Seller Dashboard"
      ],
      "line": 20
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "mct_login_steps.I_see_all_my_account_options_available(DataTable)"
});
formatter.result({
  "duration": 139790900,
  "status": "passed"
});
formatter.after({
  "duration": 51428100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Langing on MCT Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I complete login with James valid credentails",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to my account page",
  "keyword": "And "
});
formatter.match({
  "location": "mct_login_steps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 3120671800,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 1375120400,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_complete_login_with_James_valid_credentails()"
});
formatter.result({
  "duration": 2338286000,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.I_navigate_to_my_account_page()"
});
formatter.result({
  "duration": 1525032200,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Can be navigate to all options pages",
  "description": "",
  "id": "my-account;can-be-navigate-to-all-options-pages",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@WIP"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I expect all options links are working",
  "keyword": "Then "
});
formatter.match({
  "location": "mct_login_steps.I_expect_all_options_links_are_working()"
});
formatter.result({
  "duration": 4775749100,
  "status": "passed"
});
formatter.after({
  "duration": 50255900,
  "status": "passed"
});
formatter.uri("mct_regestration.feature");
formatter.feature({
  "line": 1,
  "name": "User Registration Mechanism",
  "description": "In order to get all membership benefit from multicart ecommerce \nI want to registratr my self",
  "id": "user-registration-mechanism",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "Langing on MCT Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.match({
  "location": "mct_login_steps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 3106024100,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 1350217100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Successfull registration",
  "description": "",
  "id": "user-registration-mechanism;successfull-registration",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I navigate to Registration Page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I complete registration for MR FNAME",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I expect to seee profile Name MR FNAME",
  "keyword": "Then "
});
formatter.match({
  "location": "mct_login_steps.i_navigate_to_Registration_Page()"
});
formatter.result({
  "duration": 1527875100,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_complete_registration_for_MR_FNAME()"
});
formatter.result({
  "duration": 1308748800,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_expect_to_seee_profile_Name_MR_FNAME()"
});
formatter.result({
  "duration": 25375400,
  "status": "passed"
});
formatter.after({
  "duration": 58069600,
  "status": "passed"
});
});