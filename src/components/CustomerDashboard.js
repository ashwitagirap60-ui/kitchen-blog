
import { useState } from "react";

function CustomerDashboard(props) {
  const [customer, setCustomer] = useState(() =>
    JSON.parse(localStorage.getItem("loggedInCustomer") || "null")
  );

  const [editing, setEditing] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);
const [currentPassword, setCurrentPassword] = useState("");
const [newPassword, setNewPassword] = useState("");
const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [name, setName] = useState(customer?.name || "");
  const [email, setEmail] = useState(customer?.email || "");

  function handleSave() {
    if (!name.trim() || !email.trim()) {
      alert("Please enter your name and email!");
      return;
    }

    const customers = JSON.parse(
      localStorage.getItem("customers") || "[]"
    );

    const registeredCustomer = customers.find(
      (item) => String(item.id) === String(customer.id)
    );

    if (!registeredCustomer) {
      alert("Customer record not found. Please log in again.");
      return;
    }

    const emailExists = customers.some(
      (item) =>
        String(item.id) !== String(customer.id) &&
        item.email.trim().toLowerCase() === email.trim().toLowerCase()
    );

    if (emailExists) {
      alert("This email is already registered!");
      return;
    }

    const updatedCustomer = {
      ...registeredCustomer,
      name: name.trim(),
      email: email.trim()
    };

    const updatedCustomers = customers.map((item) =>
      String(item.id) === String(customer.id)
        ? updatedCustomer
        : item
    );

    localStorage.setItem("customers", JSON.stringify(updatedCustomers));
    localStorage.setItem(
      "loggedInCustomer",
      JSON.stringify({
        id: updatedCustomer.id,
        name: updatedCustomer.name,
        email: updatedCustomer.email
      })
    );

    setCustomer({
      id: updatedCustomer.id,
      name: updatedCustomer.name,
      email: updatedCustomer.email
    });

    setEditing(false);
    alert("Your details have been updated!");
  }

  function handleChangePassword() {
  if (!currentPassword || !newPassword || !confirmNewPassword) {
    alert("Please fill in all password fields!");
    return;
  }

  const customers = JSON.parse(
    localStorage.getItem("customers") || "[]"
  );

  const registeredCustomer = customers.find(
    (item) => String(item.id) === String(customer.id)
  );

  if (!registeredCustomer) {
    alert("Customer record not found!");
    return;
  }

  if (registeredCustomer.password !== currentPassword) {
    alert("Current password is incorrect!");
    return;
  }

  if (newPassword !== confirmNewPassword) {
    alert("New passwords do not match!");
    return;
  }

  if (newPassword === currentPassword) {
    alert("Choose a different password!");
    return;
  }

  const updatedCustomers = customers.map((item) =>
    String(item.id) === String(customer.id)
      ? { ...item, password: newPassword }
      : item
  );

  localStorage.setItem("customers", JSON.stringify(updatedCustomers));

  setCurrentPassword("");
  setNewPassword("");
  setConfirmNewPassword("");
  setChangingPassword(false);

  alert("Password changed successfully!");
}

  function handleLogout() {
    localStorage.removeItem("loggedInCustomer");
    props.setCustomerDashboardVisible(false);
    props.setCustomerLoginVisible(true);
  }

  if (!customer) {
    return <p>Please log in to view your details.</p>;
  }

  return (
    <div className="customer-dashboard">
      <h2>Customer Dashboard</h2>
      <h3>Welcome to Kitchen Blog!</h3>

      {editing ? (
        <>
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

          <button onClick={handleSave}>Save Changes</button>

          <button
            onClick={() => {
              setName(customer.name);
              setEmail(customer.email);
              setEditing(false);
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <p>Customer ID: {customer.id}</p>
          <p>Name: {customer.name}</p>
          <p>Email: {customer.email}</p>

          <button onClick={() => setEditing(true)}>
            Edit Details
          </button>
        </>
      )}

      {!changingPassword ? (
        <button onClick={() => setChangingPassword(true)}>
          Change Password
        </button>
      ) : (
        <div>
          <h3>Change Password</h3>

          <input
            type="password"
            placeholder="Enter current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />

          <button onClick={handleChangePassword}>
            Save New Password
          </button>

          <button
            onClick={() => {
              setCurrentPassword("");
              setNewPassword("");
              setConfirmNewPassword("");
              setChangingPassword(false);
            }}
          >
            Cancel
          </button>
        </div>
      )}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default CustomerDashboard;
