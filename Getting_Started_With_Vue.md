# The Stand Up Kids Guide to Vue
#### “Not a full-blown framework – a view layer that is simple and flexible.” --Vue.js docs

![icon](./app/assets/images/vue-icon.jpeg)

### Getting Started

#### Why Use Vue?

![why](https://media.giphy.com/media/n9tdoAI1FcwqA/giphy.gif)

How about an 89% satisfaction rating among developers? We like those odds.

Vue is a lightweight library that is recommended when frameworks like Angular offer more than what is necessary for a single-page application. Part of the beauty of Vue is its simplicity; it is designed to be adoptable and does not require much configuration with webpack, etc. You simply insert the script tag into your code and you’re ready to use the Vue library.

You can even use Vue on its on without jQuery! Unlike some of the frameworks we have worked with in the past, (aka Rails), this library is not opinionated. This is a great option to use when a small, portable, and fast app. Check out its speed in comparison to React:

![vue_speed](./app/assets/images/vue_speed.png)

You can explore its various options by following their great [documentation](https://vuejs.org/v2/guide/).

#### Who Uses It?
![chuck](https://media.giphy.com/media/3o7btQqC3dIlJNf5zW/giphy.gif)

Vue isn't the most popular framework in the world and has slowly fallen behind React's growth rate, but that may change...

![trend1](./app/assets/images/2017_trend_graph.png)

![trend2](./app/assets/images/last_year_trend_graph.png)

As of now React is gaining much more popularity than Vue (according to Google analytics). This might also be attributed to it's age: it's only 3 years old after all!

Aside from vanity stats, let's look at real usage statistics. Vue has passed 1 million downloads on NPM, with a current monthly download count of 120k~150k. This is about 1/4 of Angular and 1/12 of React's monthly downloads. (Watch out, Angular!)

[Here](href="https://github.com/vuejs/awesome-vue#commercial-products") is a link to some of the active sites that implement Vue.

#### Check This Out
HTML:

`<div id="app-4">
   <ol>
   <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>`

APP.JS:

`var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})`

#### Code Files (node modules, url)
Use `npm install vue`, seasoned developer!

The good folks at Vue have also included a handy CLI for quickly scaffolding ambitious Single Page Applications.

`npm install --global vue-cli`

 `vue init webpack my-project`

 `cd my-project`

 `npm install`

 `npm run dev`

Finally, Vue can be added to your app by using (Or you can give view a try very simply by adding this script tag at the bottom of your HTML page: `<script src="https://unpkg.com/vue"></script>`)

#### Pros/Cons Of Vue

##### Pros
<ul>
  <li>Super simple to add into html</li>
  <li>Solve complex problems with less code</li>
  <li>Filters are easier and faster</li>
  <li>Not a whole lot of configuration. Just have to incorporate the CDN (no webpack like React)</li>
  <li>Uses the double curly html syntax like Angular</li>
  <li>Really easy to bind html and js together with minimal amounts of code</li>
</ul>

##### Cons
<ul>
  <li>It's popularity isn't like React's, so it may not be a great selling point for employment</li>
  <li>Not as robust as Angular so there may be some limitations for more advanced coders</li>
</ul>

#### Hurdles To Learning This Tech

There aren't a ton of roadblocks to learning this technology. The documentation is very developer-friendly and there are dozens of walk-throughs on YouTube. If you have some foundation in Angular, this will look pretty familiar with just a few exceptions.

#### Conclusion

Vue is dope. It's simple, powerful, and has a relatively low barrier to entry if you're already familiar with AngularJS. It may not be your best choice if you need a robust or extensive JavaScript framework, but it gets the job done effectively with single page apps.

You can build a single-page app with [this demo](https://scotch.io/tutorials/build-an-app-with-vue-js-a-lightweight-alternative-to-angularjs). Have fun!

![icon2](./app/assets/images/vue-icon2.png)
