#Koji Nakagawa

#### Javascript 2nd Week Independent Project for Epicodus, 3.24.2017

## Description
* This website is the second independent project for Epicodus "Javascript" class.
* This website offers message-board that user can post questions and answers.

## Specifications
|Behavior|Input|Output|
|--------|-----|------|
| User can create comment    | Title, Name, Question  | the question page will be created |
| User can add answer   | Name, Answer  | the answer will be displayed on the question page |
| User can delete question | Click  'Delete Question' | the question and answers will be deleted |
| User can edit question | Click  'Edit' and type | the question will be changed |
| User can delete answers | Click  'Delete Answer' | the answer will be deleted |


## Prerequisites
You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)


## Installation
* `git clone <repository-url>` this repository
* `cd message-board`
* `npm install`
* `bower install`
* Go to Firebase and get API key and paste to config/enviornment.js
[Firebase](https://firebase.google.com/)


## Ember Addon
* `ember install emberfire`
* `ember install ember-cli-sass`

* `ember install ember-bootstrap`
* `npm install --save-dev ember-bootstrap-modal`
* `ember g ember-bootstrap-modal`
* `ember generate ember-bootstrap`


## Running / Development
* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).


### Code Generators
Make use of the many generators for code, try `ember help generate` for more details


### Running Tests
* `ember test`
* `ember test --server`

### Building
* `ember build` (development)
* `ember build --environment production` (production)


### Deploying
Specify what it takes to deploy your app.


## Further Reading / Useful Links
* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Known Bugs
  * If you found some errors, please let me know. Any suggestions are highly appreciated.

## Technologies Used
  * HTML
  * CSS
  * Bootstrap
  * Javascript
  * jQuery
  * Node.js
  * npm
  * bower
  * Sass
  * Ember.js
  * Firebase


## License
  _Copyright (c) 2017 **Koji Nakagawa**_

  _Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:_

  _The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software._

  _THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE._


## Planning
  1. Configuration/dependencies
    * This should include ALL dependencies.
    * It should also include WHERE they are defined and used in the project
    * It could include a short description of what each does for you

    A. Use hardcoded data first and display result (Question)
    B. Add functionallity that create new data (Question)
    C. Add functionallity of edit delete
    D. Add answer form and create button, display result  
    E. Manage one to many relationship (hasMany and belongsTo)
    F. Add delete button (answer)
    G. Refactoring and add extra functionallity if there is more time  

  2. STRUCTURE
  #### Firebase
    * messageboard:
      ** questions: title, author, note, answers(hasMany 'answers')
      ** answers: author, note, question(belongsTo 'question')

  #### Ember
    * router.js:
      --this.route('question', {path: '/question/:question_id'})

    * application.hbs:
      -- include nav bar (links), main title

    * messageboard.json:
      --template for firebase (qustions, answers)

  ##### Models
    * question.js:
      --questions: question, questionby, note, answers(hasMany 'answers')
    * answer.js:
      --answers: answerby, answer, question(belongsTo 'question'), rating

  ##### Route
    * index.js:
      --model():
        findAll question
        findAll answer
      --actions:
        saveQuestion
    * index.hbs:
        -- display question-tile
        -- display new-question

    * question.js:
        --model():
          findRecord('question', params.question_id)
        actions:
          --updateQuestion
          --destoryQuestion
          --saveAnswer
    * question.hbs
        -- handle updateQuestion (edit-question)
        -- handle question-detail (action: destoryQuestion, destroyAnswer)
        -- handle saveAnswer (action: saveAnswer)

  ##### Component
  For index page
    * question-tile.hbs:
        --Display all questions threads and the paths (title + questions with overhidden)
        --button Delete question (action: delete)
    * question-tile.js:
        --set if statement on or off

    * new-question.hbs:
        -- input form (action: saveQuestion)
    * new-question.js:
        -- create params (action: saveQuestion)

  For question page
    * question-detail.hbs:
       -- display specific question and answers, delete button (action: deleteQuestion)
    * question-detail.js
       -- handle deleteQuestion (action: destroyQuestion)

    * edit-question.hbs
       -- input form (action: updateQuestion)
    * edit-question.js
      -- create params (action: updateQuestion)

    * answer-tile.hbs
      --display answers
      --delete button (action: delete answer)

    * answer-tile.js
      --confirm delete answer (action: destroyAnswer, answer)

    * new-answer.hbs:
        -- input form: (action: saveAnswwer)
    * new-answer.js:
        -- create params (action: saveQuestion)

  4. UX/UI
    * Include and modify bootstrap/materialize/Sass etc.
    * Develop custom style

  5. Polish
    * Refactor minor portion of...
    * Delete unused...
    * Make README awesome
