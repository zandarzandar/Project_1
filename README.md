Project_1
=========

JavaScript Homework - due date: 10/12/13

=========

This project is to use the multiple parts of JavaScript that you have learned and apply it. You will need to use the
web/google to learn how to reference JavaScript methods in order to implement some of the functionality for this
project - list.push() appends an item to the end of a array.

#Git instruction:
0. make sure git is working properly in your console by going to the console an typing " git ". If the command was not
found then trying installing git again and restart your machine.
1. go to the folder where your cloned project 1 files are. Type " git status ", the response should indicate that you are
in a git repository if not then move to where the github app tells you the repository is.
2. Update your repository with the current new commits/files that I uploaded to github. Type " git pull origin master "
into your console to update your local repo.
3. Run index.html in chrome (or your browser of choice) and make sure that there is an input, button, and a list of
three items that are viewable.
4. Once you have made changes then update the github/master repo, so I can view your code.
    a. " git add * "
    b. ' git commit -m "message here" '
    c. "git push origin master"


#Project To Do

1. Finish the addItem function that adds an item to our to do list.
2. Create a function called refreshList that will be called by other function to build out our list in the DOM. You will
need to access the DOM element/id named todo-list and add a html list to it.
3. Create a html button that when clicked will remove the last element of the list array object - Note: similar to add
item button.
4. Create a function called removeItem that will be called when the remove item button is pressed. This function will
remove the last item on the list array. Note: use splice(index, 1) on the list array.
