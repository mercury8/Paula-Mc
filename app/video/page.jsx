"use client";

import React, { useEffect, useState } from "react";
// import { Vimeo } from "@vimeo/vimeo";

const VimeoClientComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const client = new Vimeo(
      "ced13bab5225d4c7fde10063fee89c6d8850703b",
      "+O/d6gdBrxZpfOfNFlR3NHXXSsG/SVUfWEWZkOq6Hy9wvzS7x41qRR347Aw3BkTcpZ9rC2TvKqDOZL6R176hYb0wq75niEUEjS5XZDfszkHCv38XLThitkI6KIBG3apD",
      "db17fe11cd044e0304066cf587b0ba30"
    );

    client.request(
      {
        method: "GET",
        path: "/tutorial",
      },
      function (error, body) {
        if (error) {
          console.error(error);
          setError(error);
          return;
        }
        setData(body);
      }
    );
  }, []);

  return (
    <div>
      <h1>Vimeo API Data</h1>
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default VimeoClientComponent;
