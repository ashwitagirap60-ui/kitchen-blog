import { useState } from "react";

function AdminLogin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (email === "admin@gmail.com" && password === "admin123") {
      alert("Admin login successful!");

      props.setAdminDashboardVisible(true);
      props.setAdminLoginVisible(false);
      props.setCustomerLoginVisible(false);
      props.setCustomerDashboardVisible(false);
      props.setRegistrationVisible(false);
      props.setHomeVisible(false);
      props.setAboutVisible(false);
      props.setRecipesVisible(false);
    } else {
      alert("Invalid admin email or password!");
    }
  }

  return (
    <div className="admin-login">
      <h2>Admin Login</h2>

      <input
        type="email"
        placeholder="Enter admin email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter admin password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default AdminLogin;