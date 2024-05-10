import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  // const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  //   next: {
  //     revalidate: 10, // gets data in the cache every 10 seconds
  //   },
  // });
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      {/* new Date won't render in production code because it will be rendered on screen statically (cached) */}
      <p>{new Date().toLocaleTimeString()}</p>
      <u>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </u>
    </>
  );
};

export default UsersPage;
