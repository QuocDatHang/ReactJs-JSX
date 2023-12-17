const handleLogin = () => {
    console.log('hi');
    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    console.log(userName);
    console.log(password);
}

const renderBody = (
    <div className="login-form">
        <h3>Form Login</h3>
        <div>
            <label>UserName</label>
            <input type="text" className="form-control" id="userName"/>
        </div>
        <div>
            <label>Password</label>
            <input type="password" className="form-control" id="password"/>
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(renderBody)