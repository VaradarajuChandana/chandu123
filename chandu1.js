                                                                      ASSIGNMENT DAY-2
1)Lexical Structure:
 
A programming language's lexical structure specifies a set of some basic rules about how code should be written in it. Rules like what variable names look like, the delimiter characters for comments, and how one program statement is separated from the next. It is the lowest-level syntax of a language.

 2)UNICODE
    The code point is a unique number for a character or some symbol such as an accent mark . Unicode supports more than a million code points, which are written with a "U" followed by a plus sign and the number in hex, EX:   "Hello"   -       U+0048 U+0065 U+006C U+006C U+006F.
                                                                                                                   SIMPLY 
Unicode is a modern standard for text representation that defines each of the letters and symbols commonly used in today's digital and print media. Unicode has become the top standard for identifying characters in text in nearly any language.

3)KEYWORDS IN JS
Keywords are tokens that have special meaning in JavaScript:
  break , case , catch , continue , debugger , default , delete , do , else , finally , for , function , if , in , instanceof , new , return , switch ,  this   , throw , try , typeof , var , void , while , and with .

  this - keyword example
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
   

4)SHORTHAND OPERATORS -These are the operators that make the code  SIMPLER  and  SHORTER
 

       
An assignment operator assigns a value to its left operand based on the value of its right operand. The simple assignment operator is equal (=), which assigns the value of its right operand to its left operand. That is, x = f() is an assignment expression that assigns the value of f() to x.

There are also compound assignment operators that are shorthand for the operations listed in the following table:

Name	                          Shorthand operator	                         Meaning
Assignment	                           x = f()	         x = f()
Addition assignment 	x += f()	      x = x + f()
Subtraction assignment	x -= f()	   x = x - f()
Multiplication assignment	x *= f()	x = x * f()
Division assignment	                          x /= f()	x = x / f()
Remainder assignment	x %= f()	x = x % f()
Exponentiation assignment	x **= f()	x = x ** f()
Left shift assignment	x <<= f()	x = x << f()
Right shift assignment	x >>= f()	x = x >> f()
Unsigned right shift assignmentx >>>=f ()    x = x >>> f()
Bitwise AND assignment	x &= f()	x = x & f()
Bitwise XOR assignment	x ^= f()	x = x ^ f()
Bitwise OR assignment	x |= f()	x = x | f()
Logical AND assignment	x &&= f()	x && (x = f())
Logical OR assignment	x ||= f()	x || (x = f())
Logical nullish assignment	x ??= f()	x ?? (x = f())

5)USE STRICT-              The "use strict" Directive

It is not a statement, but a literal expression, ignored by earlier versions of JavaScript. 
The purpose of "use strict" is to indicate that the code should be executed in "strict mode". 
With strict mode,you cannot  use undeclared variables.
     