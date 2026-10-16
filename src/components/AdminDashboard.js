
import React from "react";

function AdminDashboard(props) {
  const [refresh, setRefresh] = [ props.refresh,props.setRefresh];
  const [searchText, setSearchText] = React.useState("");

  const customers = JSON.parse(
    localStorage.getItem("customers") || "[]"
  );

  function handleDelete(customerId) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this customer?"
    );

    if (!confirmDelete) {
      return;
    }

    const updatedCustomers = customers.filter(
      (customer) => customer.id !== customerId
    );

    localStorage.setItem(
      "customers",
      JSON.stringify(updatedCustomers)
    );

    alert("Customer deleted successfully!");

    // Refresh the dashboard
    props.setRefresh((previous) => !previous);
  }

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <h3>Registered Customers</h3>
      <input type="text"
  placeholder="Search by customer name or email"
  value={searchText}
  onChange={(e) => setSearchText(e.target.value)} />

      {customers.length === 0 ? (
        <p>No customers registered yet.</p>
      ) : (
           
customers
  .filter(
    (customer) =>
      customer.name
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      customer.email
        .toLowerCase()
        .includes(searchText.toLowerCase())
  )
  .map((customer) => (

          <div className="customer-card" key={customer.id}>
            <hr />
            <p>Customer ID: {customer.id}</p>
            <p>Name: {customer.name}</p>
            <p>Email: {customer.email}</p>

            <button onClick={() => handleDelete(customer.id)}>
              Delete Customer
            </button>
          </div>
        ))
      )}

      <button
        onClick={() => {
          props.setAdminDashboardVisible(false);
          props.setAdminLoginVisible(true);
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default AdminDashboard;
