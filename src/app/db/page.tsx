"use client"

import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("your-table-name")
        .select("*");
      if (error) console.error("Error fetching data:", error);
      else setData(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {" "}
      <h1>Data from Supabase</h1>{" "}
      <ul>
        {" "}
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}{" "}
      </ul>{" "}
    </div>
  );
}
