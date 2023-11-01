
// const heading = React.createElement("h1",{id:"heading"},"hello world from React");
const heading = React.createElement("div",{id:"parent"},
[
    React.createElement("div",{id:"children1"},
[
    React.createElement("h1",{id:"heading"},"This is from h1 Tag React"),
    React.createElement("h2",{id:"heading1"},"This is from h2 Tag React")
]),
React.createElement("div",{id:"children2"},
[
    React.createElement("h1",{id:"heading"},"This is from h1 Tag React"),
    React.createElement("h2",{id:"heading1"},"This is from h2 Tag React")
])  
]);
const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);