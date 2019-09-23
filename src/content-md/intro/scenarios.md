---
section: "intro"
navOrder: 3
path: "/intro/scenarios"
title: "Scenarios"
---

This page documents how to author Crank Scenario files.

---

## Finding Steps

Once you've installed some Cogs, you can get a list of all available steps on
your machine by running the following:

```shell-session
$ crank registry:steps
```

Run `crank registry:steps --help` for more information.

---

## Basic Structure

All Scenarios must include these three properties:

- **scenario**: A string naming the scenario. This is printed out at the top of
  test runs for your convenience.
- **description**: A string documenting the intention behind the scenario. This
  property isn't used anywhere currently, but it's sure useful for your future
  self.
- **steps**: A list of step objects, each containing, at a minimum, a **step**
  property.

```yaml
scenario: Contact Us Form Creates SalesForce Leads
description: >
  As a website visitor,
  When I fill out the Contact Us form
  Then a Lead record should be created for me in Salesforce

steps:
- step: Given I navigate to https://www.example.com/contact
- step: When I fill out input[name="EmailAddress"] with test@e.com
- step: And I fill out input[name="FirstName"] with Test
- step: And I submit the form by clicking button[type="submit"]
- step: Then the FirstName field on Salesforce Lead test@e.com should be Test
- step: Finally, delete the test@e.com Salesforce Lead
```

---

## Tokens

Crank scenarios can include tokens (prefixed/affixed with `{{` and `}}` as a
way to improve readability, maintainability, and portability of test scenarios.

```yaml
tokens:
  testEmail: atommy@example.com

steps:
- step: The FirstName field on Salesforce Lead {{testEmail}} should be Test
- step: Delete the {{testEmail}} Salesforce Lead
```

You can also override tokens at run-time:

```shell-session
$ crank run scenario.yml --token "testEmail=zjimmy@example.com"
```

---

## Non-Scalar Data

Sometimes, a test scenario requires data that cannot easily or concisely be
expressed in a sentence: for example, setting up a fixture for an object in a
SaaS platform (e.g. a Salesforce Lead).

In situations like this, you can specify these complex objects on a **data**
property associated with a given step.

```yaml
tokens:
  test:
    email: atommy@example.com
    first: Atoma
    last: Tommy

steps:
- step: Given I create a Salesforce Lead
  data:
    lead:
      Email: '{{test.email}}'
      FirstName: '{{test.first}}'
      LastName: '{{test.last}}'
- step: Then the FirstName field on Salesforce Lead {{test.email}} should be {{test.first}}
```

---

## Retries

It's common for systems tested by Crank to be integrated in asynchronous ways.
For example, object sync time between a CRM like Salesforce and a MAP like
Marketo may be non-deterministic (but finite), depending on the exact
configuration of each system.

By default, `crank run` will execute every step in the `steps` list in
sequence, one immediately after another; if a step's outcome is not a pass,
no retry is attempted.

In order to account for asynchronous system integrations, you can use the
`failAfter` property on a given step. When present, Crank will re-attempt step
execution after any non-passing outcome for as many seconds as is configured on
this `failAfter` property.

```yaml
steps:
- step: Given I create or update a Marketo Lead
  data:
    lead:
      email: test@e.com
      firstName: Example
- step: Then the FirstName field on Salesforce Lead test@e.com should be Example
  failAfter: 90 # Will retry this step for up to 90s if it does not pass
```

---

## Explicit Waits

It's also common to configure explicit delays in workflows in the systems that
Crank is used to test (e.g. waiting a specific amount of time before sending a
communication to a user).

In these situations, you can use the `waitFor` property on any step to pause
step execution for a certain number of seconds before proceeding.

```yaml
steps:
- waitFor: 60 # Will wait 60s before executing this step
  step: Then the FirstName field on Salesforce Lead test@e.com should be Example
```

Note that it's possible `waitFor` can be used in combination with `failAfter`.
If both are used, a step will wait until after the `waitFor` duration elapses,
then execute the step; if it does not pass, it will retry the step for up to
the `failAfter` duration, using the initial step execution as the starting time
for comparison.

---

## Config Over BDD

Under the hood, Crank does the work to translate your scenario file's step
text into something more machine-readable (a series of cogs, stepIds, and data
objects).

If for some reason you want to sacrifice human-readability for performance, you
can also define your steps more purely as configuration:

```yaml
steps:
- cog: automatoninc/web
  stepId: NavigateToPage
  data:
    webPageUrl: https://example.com/contact
- cog: automatoninc/web
  stepId: EnterValueIntoField
  data:
    domQuerySelector: input[name="EmailAddress"]
    value: test@example.com
```

Notice here, each step object, instead of containing a **step** property that
matches a known step expression, contains the three aforementioned properties:

- **cog**: The name of the Cog that provides the step (e.g. what you used to
  `crank cog:install` the Cog in the first place).
- **stepId**: A unique ID for the step provided by the Cog.
- **data**: Similar to the above, a map/dictionary/object encoding all of the
  data that the step expects.

You can find the information you need for each step in this format by running
the following command:

```shell-session
$ crank registry:steps --columns="cog,id,expected fields"
```