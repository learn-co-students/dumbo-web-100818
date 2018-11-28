# Giftr™

Welcome to Giftr™! Please build out the following features **without using AJAX**. For the first part of this application, just focus on full CRUD with DOM manipulation without persisting any changes to the server.

- In `src/giftData.js` is all the gift data. Build out the following features:

  - A user should be able to see all of the gift data on initial page load
  - A user (any user, don't worry about authorization) should be able to edit a gift's details
  - A user should be able to delete a particular gift
  - A user should be able to search for and filter particular gifts with names that _include_ a particular search query.

---

Once all of the features listed above are working, add AJAX to persist changes to your database. A RESTful JSON API is being faked using a node module (js package) called `json-server`

- To install, run the following line of code in your terminal: $ `npm install -g json-server`
- To run the package and host your 'server': `$ json-server --watch db.json`
- Change your program so that the gifts are being loaded in from the server instead of the `giftData.js` file. You may want to comment out the line in `index.html` that loads the file in.
- A user should be able to perform the same CRUD actions listed above **and** persist changes to the database.
