                                                                                                                                                                          ASSIGNMENT  DAY-1                                                                                      
1) USE OF    JAVASCRIPT

Javascript is used by programmers to create interactive and dynamic webcontent like applications and browsers.It is so popular that it's the most used programming language in the world .
It is used as a client-side programmig language by many compilers .
It is a text based language used on client side and even on server side now.
JavaScript gives web pages interactive elements that engage a user.
   USING JAVASCRIPT - Applications can be run very fast because it can be run immmediately within the client side browser.
                                           Adding interactive behaviour to webpages as it allows users to interact with web pages .
                                          We can create web and mobile applications using JS.
                                           Building web servers and devoloping server applications .
                                           Used in Game Devolopment and many more..
 2)                                              
                          CLIENT- SIDE
 Does not need interaction with the server
Runs on the user’s computer
Reduces load on the server’s proccessing unit
Languages used: HTML, CSS, JavaScript
              SERVER-SIDE
Requires interaction with the server
Runs on the web server
Allows the server to provide dynamic websites tailored to the user. Increases the processing load on server.
Languages used: PHP, ASP.net, Python


3)   NODEJS

Node.js as “a packaged compilation of Google’s V8 JavaScript engine, the libuv platform abstraction layer, and a core library, which is itself primarily written in JavaScript.”

The runtime uses Chrome V8 internally, which is the JavaScript execution engine, and it’s also written in C++. This adds additional use cases to Node.js’s repertoire, such as accessing internal system functionality (like networking).

Node.js Architecture and How It Works
Node.js uses the “Single Threaded Event Loop” architecture to handle multiple clients at the same time. To understand how this is different from other runtimes, we need to understand how multi-threaded concurrent clients are handled in languages like Java.

FEATURES OF NODEJS

EASY—Node.js is quite easy to start with. It’s a go-to choice for web development beginners. With a lot of tutorials and a large community—getting started is very easy.
SCALABLE—It provides vast scalability for applications. Node.js, being single-threaded, is capable of handling a huge number of simultaneous connections with high throughput.
SPEED—Non-blocking thread execution makes Node.js even faster and more efficient.
PACKAGES—A vast set of open-source Node.js packages is available that can simplify your work. There are more than one million packages in the NPM ecosystem today.
STRONG BACKEND—Node.js is written in C and C++, which makes it speedy .


                                      SCOPE
  4)Scope determines the accessibility (visibility) of variables.

     JavaScript has 3 types of scope:

-Block scope
-Function scope
-Global scope

BLOCKSCOPE
Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

ES6 introduced two important new JavaScript keywords: let and const.

These two keywords provide Block Scope in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:

Example
{
  let x = 2;
}
// x can NOT be used here
Variables declared with the var keyword can NOT have block scope.

Variables declared inside a { } block can be accessed from outside the block.

Example
{
  var x = 2;
}
// x CAN be used here
Local Scope
Variables declared within a JavaScript function, become LOCAL to the function.

Example
// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
Local variables have Function Scope:

They can

FUNCTION SCOPE
JavaScript has function scope: Each function creates a new scope.

Variables defined inside a function are not accessible (visible) from outside the function.

Variables declared with var, let and const are quite similar when declared inside a function.

They all have Function Scope:

function myFunction() {
  var carName = "Volvo";   // Function Scope
}
function myFunction() {
  let carName = "Volvo";   // Function Scope
}

  GLOBAL SCOPE
Variables declared Globally (outside any function) have Global Scope.

Global variables can be accessed from anywhere in a JavaScript program.

Variables declared with var, let and const are quite similar when declared outside a block.

They all have Global Scope:

var x = 2;       // Global scope
let x = 2;       // Global scope
const x = 2;       // Global scope



5)JAVASCRIPT is  ASYNCHRONOUS Language with lots of Flexibiity.

6)JAVASCRIPT is  SINGLE-THREADED.

7)                                       DOM 
     Document Object Model (DOM) is an application programming interface(API) for HTML AND XML docoments .It defines the logical structure of documents and the way a document is accessed and manipulated.

