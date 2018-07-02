import { Router } from 'meteor/iron:router';

// Import needed templates
import '../../ui/layouts/body/body';
import '../../ui/pages/home/home';
import '../../ui/pages/todo/todo';
import '../../ui/pages/not-found/not-found';

Router.configure({
  layoutTemplate: 'App_body',
  notFoundTemplate: 'App_notFound'
});

Router.route('/', {
  name: 'home',
  template: 'App_home'
});

Router.route('/todo', {
  name: 'todo',
  template: 'Todo'
});
// import { FlowRouter } from 'meteor/kadira:flow-router';
// import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// // Import needed templates
// import '../../ui/layouts/body/body.js';
// import '../../ui/pages/home/home.js';
// import '../../ui/pages/not-found/not-found.js';

// // Set up all routes in the app
// FlowRouter.route('/', {
//   name: 'App.home',
//   action() {
//     BlazeLayout.render('App_body', { main: 'App_home' });
//   },
// });

// FlowRouter.notFound = {
//   action() {
//     BlazeLayout.render('App_body', { main: 'App_notFound' });
//   },
// };
