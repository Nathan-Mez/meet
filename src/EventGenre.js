import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const EventGenre = ({ events }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(() => getData());
  },
    [events]
  );

  const colors = ["#21897E", "#AA6DA3", "#FFE74C", "#4C6A94", "#EFC88B"];

  const getData = () => {
    const genres = ["JavaScript", "React", "Node.js", "jQuery", "AngularJS"];
    const data = genres.map((genre) => {
      const value = events.filter((event) => event.summary.split(" ").includes(genre)).length;
      return { name: genre, value };
    });
    return data;
  };



  return (
    <ResponsiveContainer height={400}>
      <PieChart>
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