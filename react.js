//React.createElement(type, props, children)

const renderBody = React.createElement(React.Fragment, null, 
    React.createElement('h3', { 
        style: {
            color: "blue",
            backgroundColor: "orange"}
        }, "Login Form"),
    React.createElement("div", null, 
        React.createElement("label", null, 'UserName'),
        React.createElement("input", { className: "form-control" })),
    React.createElement("div", null, 
        React.createElement("label", null, 'Password'),
        React.createElement("input", { className: "form-control" })),
    React.createElement('button', {
        type: "button", 
        onClick: () => {
            alert('hello')
        }
    }, 'Login')
    )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(renderBody);