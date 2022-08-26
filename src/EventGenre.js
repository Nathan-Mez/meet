import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const EventGenre = ({ events }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(() => getData());
  },
    [events]
  );

  const colors = ["#69523A", "#63673C", "#817936", "#172A3A", "#3C4D53"];

  const getData = () => {
    const genres = ["JavaScript", "React", "Node", "jQuery", "AngularJS"];
    const data = genres.map((genre) => {
      const value = events.filter((event) => event.summary.split(" ").includes(genre)).length;
      return { name: genre, value };
    });
    return data;
  };



  return (
    <ResponsiveContainer height={400}>
      <PieChart width={100} height={100}>
        <Pie
          data={data}
          
          labelLine={false}
          outerRadius={80}
          fill='#fff'
          dataKey="value"
          nameKey={'genre'}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>

      </PieChart>
    </ResponsiveContainer>
  );
}

export default EventGenre;