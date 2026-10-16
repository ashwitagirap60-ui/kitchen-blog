import { useState } from "react";

function CustomerRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleRegister() {
    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      alert("Please fill in all fields!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const existingCustomers = JSON.parse(
      localStorage.getItem("customers") || "[]"
    );

    const emailExists = existingCustomers.some(
      (customer) =>
        customer.email.toLowerCase() === email.trim().toLowerCase()
    );

    if (emailExists) {
      alert("This email is already registered!");
      return;
    }

    const customer = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      password: password
    };

    existingCustomers.push(customer);

    localStorage.setItem("customers", JSON.stringify(existingCustomers));

    alert("Registration successful!");

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <div className="customer-registration">
      <h2>Customer Registration</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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

      <input
        type="password"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default CustomerRegistration;
