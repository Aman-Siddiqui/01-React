

/*
<div id="parent">
     <div id="child">
          <h1>Hi i am h1 tag</h1>
     </div>
</div>
*/

                                //for single tag
const heading = React.createElement("h1",{id:"header"},"Hello world from react External")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading);

                                //for nested tag

                           /*
                           <div id="parent">
                                <div id="child">
                                     <h1>Hi i am h1 tag</h1>
                                </div>
                           </div>
                           */

const parent = React.createElement("div",{id:"parent"}, React.createElement("div",{id:"child"}, React.createElement("h1",{},"I am h1 tag")))
const root1 = ReactDOM.createRoot(document.getElementById("root"))
root1.render(parent);


                                //for siblings tag

                           /*
                           <div id="parent">
                                <div id="child">
                                     <h1>Hi i am h1 tag</h1>
                                     <h2>Hi i am h1 tag</h2>
                                </div>
                           </div>
                           */

const parent2 = React.createElement("div",{id:"parent"}, React.createElement("div",{id:"child"}, [React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]))
const root2 = ReactDOM.createRoot(document.getElementById("root"))
root2.render(parent2);  

                             //for nested childern tags

                           /*
                           <div id="parent">
                                <div id="child">
                                     <h1>Hi i am h1 tag</h1>
                                     <h2>Hi i am h1 tag</h2>
                                </div>
                                <div id="child2">
                                     <h1>Hi i am h1 tag</h1>
                                     <h2>Hi i am h1 tag</h2>
                                </div>
                           </div>
                           */

const parent3 = React.createElement(
    "div",
    {id:"parent"}, 
    [React.createElement("div",{id:"child"}, 
        [React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]
    ),

    React.createElement("div",{id:"child2"}, 
        [React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]
    )])
const root3 = ReactDOM.createRoot(document.getElementById("root"))
root3.render(parent3); 

/*CONCLUSION- the above code of react is tough or ugly, complex means (HARD to Understand) because just for creating an elements we have to write that much code, that is why JSX is launched or introduced
*/