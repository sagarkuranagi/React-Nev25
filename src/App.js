import "./styles.css";

export default function App() {
  const projects = [
    {
      id: 1,
      name: "Website Redesign",
      client: "Acme Corp",
      startDate: "2025-01-15",
      status: "In Progress",
    },
    {
      id: 2,
      name: "Mobile App Development",
      client: "TechNova Solutions",
      startDate: "2025-02-10",
      status: "Completed",
    },
    {
      id: 3,
      name: "E-commerce Platform",
      client: "Global Retail Ltd",
      startDate: "2025-03-05",
      status: "Pending",
    },
  ];
  const tasks = [
    {
      id: 103,
      projectId: 1,
      title: "Implement responsive layout",
      status: "Pending",
    },
    {
      id: 201,
      projectId: 2,
      title: "Set up mobile backend API",
      status: "Completed",
    },
    {
      id: 301,
      projectId: 3,
      title: "Create product catalog module",
      status: "In Progress",
    },
    {
      id: 202,
      projectId: 2,
      title: "Develop user authentication",
      status: "Completed",
    },
    { id: 102, projectId: 1, title: "Design mockups", status: "In Progress" },
    {
      id: 303,
      projectId: 3,
      title: "Set up order tracking system",
      status: "Pending",
    },
    {
      id: 203,
      projectId: 2,
      title: "App store submission",
      status: "Completed",
    },
    {
      id: 101,
      projectId: 1,
      title: "Gather requirements",
      status: "Completed",
    },
    {
      id: 302,
      projectId: 3,
      title: "Integrate payment gateway",
      status: "Pending",
    },
  ];
  return (
    <div className="App">
      <h1>My Project </h1>
      <h2>Listing projects -{projects.length}</h2>
      <ul>
        {projects.map((ele) => {
          return <li>{ele.name}</li>;
        })}
      </ul>
      <hr />
      <h2>Full project Details</h2>
      <table border="1">
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Client</th>
          <th>StartDate</th>
          <th>Status</th>
        </tr>
        {projects.map((ele) => {
          return (
            <tr>
              <td>{ele.id}</td>
              <td>{ele.name}</td>
              <td>{ele.client}</td>
              <td>{ele.startDate}</td>
              <td>{ele.status}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
