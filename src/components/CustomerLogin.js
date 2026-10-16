
import { useState } from "react";

function CustomerLogin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  function handleLogin() {
    const customers = JSON.parse(
      localStorage.getItem("customers") || "[]"
    );

    console.log("Customer records:", customers);
    console.log("Entered email:", email.trim().toLowerCase());

    const enteredEmail = email.trim().toLowerCase();

    const customer = customers.find(
      (item) =>
        item.email.trim().toLowerCase() === enteredEmail
    );

    if (!customer) {
      alert("Email not found. Please check your email.");
      return;
    }

    if (String(customer.password) !== password) {
  alert("Password does not match the saved password.");
  return;
}

    localStorage.setItem(
      "loggedInCustomer",
      JSON.stringify({
        id: customer.id,
        name: customer.name,
        email: customer.email
      })
    );

    alert("Login successful!");

    props.setCustomerDashboardVisible(true);
    props.setCustomerLoginVisible(false);
    props.setAdminLoginVisible(false);
    props.setAdminDashboardVisible(false);
    props.setRegistrationVisible(false);
  }

  function handleForgotPassword() {
  const enteredEmail = email.trim().toLowerCase();

  if (!enteredEmail) {
    alert("Please enter your registered email!");
    return;
  }

  const customers = JSON.parse(
    localStorage.getItem("customers") || "[]"
  );

  const customer = customers.find(
    (item) =>
      item.email.trim().toLowerCase() === enteredEmail
  );

  if (!customer) {
    alert("Email not found. Please register first.");
    return;
  }

  const newPassword = prompt("Enter your new password:");

  if (!newPassword || !newPassword.trim()) {
    alert("Password reset cancelled. Enter a valid password.");
    return;
  }

  const confirmPassword = prompt("Confirm your new password:");

  if (newPassword !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  const updatedCustomers = customers.map((item) =>
    String(item.id) === String(customer.id)
      ? { ...item, password: newPassword }
      : item
  );

  localStorage.setItem(
    "customers",
    JSON.stringify(updatedCustomers)
  );

  alert("Password reset successfully! Please log in.");
}

  return (
  <div className="customer-login">
      <h2>Customer Login</h2>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <p>
  <span
    onClick={() => setShowForgotPassword(true)}
    style={{ cursor: "pointer", color: "blue" }}
  >
    Forgot Password?
  </span>
</p>

{showForgotPassword && (
  <div>
    <h3>Reset Password</h3>

    <button onClick={handleForgotPassword}>
      Reset My Password
    </button>

    <button onClick={() => setShowForgotPassword(false)}>
      Cancel
    </button>
  </div>
)}

      <p>
        Don't have an account?{" "}
        <span
          onClick={() => {
            props.setRegistrationVisible(true);
            props.setCustomerLoginVisible(false);
            props.setAdminLoginVisible(false);
            props.setAdminDashboardVisible(false);
            props.setCustomerDashboardVisible(false);
          }}
          style={{ cursor: "pointer", color: "blue" }}
        >
          Register
        </span>
      </p>
    </div>
  );
}

export default CustomerLogin;
