#Javascript Variables, Loops & Conditionals Lab

We're going to build a basic bot that will allow a user to book a table and order food. The focus is NOT of the UI, we're focussing on the underlying logic using loops, conditionals and variables.

0. Start by discussing in groups what this system could do and share with the class.
0. Then define the inputs for your programme as a series of variables
    ```javascript
    //for example
    var name = "Jeremiah";
    var lastUserName = "Jeremiah";
    var tableFor = 5;
    ```
0. Next work out what the outputs should be for example what should happen if the user asks for a table for 5. You should do this in the form of psuedo code, using comments.

    ```javascript
    //if the user's name is same as last time welcome them back
    //else welcome them for the first time
    
    //ask them how many they want a table for
    //if the number if greater than 0 but less than the restaurant capacity then continue to ask them what they want to eat
    //else apologise and offer them a discount next time
    ```
    
0. Finally you should write the conditional logic and use console.logs to output it.

    ```
    javascript
    //if the user's name is same as last time welcome them back
    if ( name === lastUserName ) {
        console.log("welcome back " + name);
    }
    ``` 
    
Get a basic system working first then add further complexity to make your system more comprehensive and human like. 
