// Challenge 1

var content = '';

for (var i = 0; i < 7; i++) {
    content = content + '#';
    console.log(content);
}


/*
Admittedly I struggled with this challenge and had to turn to Google
for the answer after numerous failed attempts. During my initial 
attempts, I was able to get the 7 lines outputted but they only had 
1 “#” on them. After seeing the solution it became clear to me how 
it works. My understanding of it now is the variable “content” was 
necessary to keep track of the number of #’s on each line. As each 
additional loop comes around, it adds another # to the line and the 
content variable is updated with the latest number of #'s. This cycle
continued until it reached the condition of i < 7.
*/
  

// Challenge 2

function isEven (number) {
    if (number%2 == 0) {
       console.log("the number is even");
    }

    else {
    console.log("the number is odd");
    }
}; 

isEven (2); 


/*
I decided to use an if/else function to solve this problem. After 
looking into the problem on Google, I realized all even numbers yield a 
remainder of "0" when "2" is used as the second operand. With this 
knowledge, I decided to use the remainder arithmetic operator as my main 
condition. My understanding of how it works is if the remainder of the 
number (when using 2 as the second operand) is "0", then the number must 
be even, otherwise the number must be odd. This code seemed to work fine 
in my testing, until I used "0" as the number, as it meets the criteria 
for an even number. I also tested out other parameters that weren't 
numbers and they were "undefined".
*/

