# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is a fusion of HTML and Javascript that essentially allows you to code in both languages within the same file. It does so by using curly braces in its notation.

Researched answer: JSX is what is called a syntax extension. It is called this, because it adds in newly recognized forms of syntax to javascript, allowing for the inclusion of HTML code, specifically intended to be used with libraries like React that render visuals along with logic. This allows for smoother and more organized work flow when coding in React. JSX elements can also take in props, different from HTML elements.

1. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer: Yarn is a package mangager used to download dependencies. Only the directory that you are in will be affected by calling yarn, and it will update that directory to have any missing dependencies added to it.

Researched answer: Yarn was designed to be a faster alternitive the the npm package manager, and is was designed to solve some issues that npm had. This includes being more secure, and performing better than npm, but both package managers have advanced over time.

3. What is a React component?

Your answer: A React component is a piece of code stored in its own js file in a React project, that can be exported to other files. It can be called on in other parts of a React project, and thus is mainly inteded to allow for reusability of code in a modular fashion.

Researched answer: React components are designed to be reusable bits of code, to be called and referenced like a javascript function. Unlike normal functions, they return HTML, and thus are a key part of using React. they allow for the use of props and make meshing javascript and HTML together much more fluid.

4. What is the difference between state values and props in React?

Your answer: State values are the current state of a defined variable that is being rendered by React. When a state variable is updated with its setter method, React renders it accordingly. A prop is a variable that is passed into a component from your main App.js file. It allows for the use of variables between files, and a state can be used as a prop, but not all props are states.

Researched answer: State values are intended to be used for data that will change or be updated over the course of a project running, where as props can be anything from data to functions, and are used in the logic of the code for a project. State values are directly related to how React updates what it renders.

5. What is the DOM?

Your answer: The DOM is the Document Object Model. It is the blueprint for webpages.

Researched answer: The DOM represents a webpage as nodes and objects, in order to allow for interaction with the page by code logic. Because it represents a webpage in an object-oriented fashion, a developer is able to use javascript to directly manipulate the DOM and therefore the webpage they are working on.

6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer: A div is a generic tag for storing data, whereas a div is similar but can be present within another tag to allow for alternative styling.

Researched answer: Specifically, a div is used primarily for larger portions or entire sections of a pages content and styling, and a span is intended for inline use, styling or organizing specific parts of a greater section, such as words within a paragraph.

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: Code that is centralized around the use of objects, and is best used for modular programming, meaning reusability.

2. Ruby: Ruby is a programming language designed for OOP, and everything in ruby, even basic data types like numbers, are represented by objects.

3. Implicit return: A return that doesnt require the keyword return, but instead returns the last present value in a function.

4. Ruby blocks: Blocks are a feature in ruby that allow you to pass a block of code as a parameter, kind of like an object, though it is not one innately.

5. Ruby hashes: Hashes are similar to both objects and arrays, and act as a sort of array of key-value pairs.
