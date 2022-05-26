import React from "react";

const Blogs = () => {
  return (
    <div className="text-center">
      <div className=" m-4">
        <h1 className="text-2xl">
          How will you improve the performance of a React Application?
        </h1>
        <p>
          <ul>
            <li>Optimizing Images</li>
            <li>Use Custom Hooks</li>
            <li>Arrange components</li>
            <li>Cleaner code</li>
            <li>Make comments when needed</li>
          </ul>
        </p>
      </div>
      <div className=" m-4">
        <h1 className="text-2xl">
          What are the different ways to manage a state in a React application
        </h1>
        <p>UseEffect, UseState, UseReducer etc</p>
      </div>
      <div className="m-4">
        <h1 className="text-2xl">How does prototypical inheritance work?</h1>
        <p>
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the Prototype of an object, we
          use Object.getPrototypeOf and Object.
        </p>
      </div>
      <div className="m-4">
        <h1 className="text-2xl">
          Why you do not set the state directly in React. For example, if you
          have const products, setProducts = useState. Why you do not set
          products = ... instead, you use the setProducts
        </h1>
        <p>
          React compares the previous state with the updated state to decide if
          the component needs to be re-rendered. Modifying the state directly
          will disturb this process. As a result the component will behave
          unexpectedly
        </p>
      </div>
      <div className="m-4">
        <h1 className="text-2xl">
          What is a unit test? Why should write unit tests?
        </h1>
        <p>
          It is a testing mechanism to validate the functionality of a
          single/multiple segment of code hence the name is unit testing.
          Usually developers perform unit test to check whether their code works
          as expected or throwing error in critical cases, for example x=a/b,
          here if a=0 the program will crash and x wont hold the desired result.
          Developers check such cases with unit test.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
