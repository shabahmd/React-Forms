import { useState } from "react";
import "./App.css";

function App() {
    const [values, setValues] = useState({
        firstName: "",
        secondName: "",
        email: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (values.firstName && values.secondName && values.email) {
            setSubmitted(true);
        }
    };

    return (
        <div className="form-container">
            {submitted && (
                <div className="success-message">Success! Thank you for registering</div>
            )}
            <form className="register-form" onSubmit={handleSubmit}>
                <input
                    onChange={handleInputChange}
                    value={values.firstName}
                    className="form-field"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                />
                {submitted && !values.firstName && (
                    <span className="error">Please enter a first name</span>
                )}
                <input
                    onChange={handleInputChange}
                    value={values.secondName}
                    className="form-field"
                    type="text"
                    placeholder="Last Name"
                    name="secondName"
                />
                {submitted && !values.secondName && (
                    <span className="error">Please enter a last name</span>
                )}
                <input
                    onChange={handleInputChange}
                    value={values.email}
                    className="form-field"
                    type="text"
                    placeholder="Email"
                    name="email"
                />
                {submitted && !values.email && (
                    <span className="error">Please enter an email address</span>
                )}
                <button className="form-field" type="submit">
                    Register
                </button>
            </form>
        </div>
    );
}

export default App;
