# sinatra-mvc-intro

## SWBATs

* Explain the Model View Controller \(MVC\) pattern and give an example
* Explain how web frameworks \(like Sinatra\) use the MVC pattern and why
* Define 'convention over configuration'
* Implement one model that inherit from ActiveRecord
* Implement one controller to route and process requests
  * Demonstrate how the params hash changes and where the data comes from
* Implement ERB template and get it to render data from controller and model
* Practice file structure in Sinatra
* Identify the connection between REST and CRUD

## Resources

* [Example Video](https://youtu.be/hHM9mRlynXM)
* [Starter Code](https://github.com/learn-co-curriculum/lectures-starter-code/tree/master/sinatra/sinatra-mvc-intro)
* [Stateless Requests](https://stackoverflow.com/questions/13200152/why-say-that-http-is-a-stateless-protocol)
* [Corneal](https://github.com/thebrianemory/corneal)

## Outline

```text
20m MVC Architecture
20m CRUD, URLs, and REST
40m Setup Sinatra app with Directory Structure
===
80m Total
```

### MVC Architecture

_Note: If you'd like, discuss how MVC is just_ one _of the many common programming architectural paradigms. Johann uses the analogy that these paradigms are like political parties: most everyone has one and sticks to it, but none have the perfect solution in all cases. As usual, the key words are COMPROMISE & CONTEXT._

In a typical application you will find these three fundamental parts:

* Data \(Model\)

  An interface to view and modify the data

* \(View\)

  Operations that can be performed on the data

* \(Controller\)

The MVC pattern, in a nutshell, is this:

* The model represents the data, and does nothing else. The model does NOT depend on the controller or the view.
* The view displays the data through the controller, and sends user actions \(e.g. button clicks\) to the controller. The view is independent of both the model and the controller.
* The controller provides model data to the view, and interprets user actions such as button clicks. The controller depends on the view and the model.

_Note: Yes, in certain cases the view and the controller are the same. Be careful when teaching this, as we want to make sure students can understand MVC as a whole without having too many choices to confuse them. Rails enforces the first example, so I recommend we teach it as well._

Rule 1 is the golden rule of MVC:

The model represents the data, and does nothing else. The model does NOT depend on the controller or the view. In other words, _THE MODEL DOES NOT INTERACT WITH THE VIEW, AND THE CONTROLLER DOES ALL THE_ WORK_!_

_Note: an easy analogy to help students with this rule is to think of your MVC app as a restaurant. The model is the food being made in the kitchen, this is the_ meat _of the experience/app. The controller is the restaurant's staff, they handle the experience, prepare the food, and are your first contact if you need anything. The view is you, and your experience. You do not see inside the kitchen, nor do you have visibility on what happens to give you the experience you get. If you want more information, you can always talk to the staff, but they have rules about how much or how little you get to do or see._

If students ask why, you can give them a variety of examples alongside which the Controller should be the common pathway. Good examples include:

* security and access control
* logging
* giving specific users specific content while making views less complex

![](/assets/m2_sinatra_request.jpg)

### CRUD, URLs, and REST

Give an introduction of RESTful Routing and how it connects to CRUD. This diagram will prove helpful:

![](/assets/m2_sinatra_crud.jpg)

Talk about how each route specifically maps to a particular resource/model, and can also represent a "method" being passed to that resource's controller. This allows each action on each resource to be unique. Just like CRUD offers both structure and consistency through its rules, REST does the same. Let the students see how `GET`, `PUT`, `POST`/`PATCH`, and `DELETE` map to "Read", "Create", "Update", and "Delete" respectively.

![](/assets/m2_sinatra_rest.png)

_Note: One thing that helps justify why things are the way they are, is that REST methods try their best to minimize the number of URLs but maximizing functionality. This is why we overload on the same URLs._

It's not necessary that all of this functionality exists, we just choose to expose which things we find important/want our users to be able to do. Reiterate that web requests are stateless, which means that at the default, there is no relationship between any two requests to the server.

### Setup Sinatra app with Directory Structure

Why Sinatra? Talk about how Rack can be messy, it gives people a lot of flexibility but at the expense of time. Since we are here to learn higher-order concepts, wasting time on configuration prevents us from drilling into those. Sinatra has the added benefit of giving us convention on modularizing our code, which has an immense long-term impact to productivity.

Use `corneal`, and encourage the students to do the same. It allows them to focus less on the process of setting up the app, and has them writing code in the moment.

Go over the existing directory structure, and discuss how you'll add to it over time. You can make the app run using `shotgun`. Make a Model \(with ActiveRecord if you'd like\), and the corresponding Controller and View.

#### Here are some things you can show off:

Model:

* Not much new stuff here, maybe you can ask the students to help walk you through making the model to make the lecture more interactive.

Controller:

* Params in requests

  ![](/assets/m2_sinatra_routing_code.jpg)

* Nested erb naming \(with directories\)

_Note: you can allude here to the concept that the web doesn't natively "support" anything but_ `GET` _and_ `POST`_, but it may be too much information at once to go deeper than that._

View:

* `<%= %>` vs `<% %>`
* `<%= yield %>`
* Show that the view can talk to the model. Ask students to answer why that's bad!

