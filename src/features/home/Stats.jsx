const stats = [
  {
    value: "1,240+",
    label: "Community Reports",
  },
  {
    value: "18",
    label: "Areas Covered",
  },
  {
    value: "87%",
    label: "Reports Resolved",
  },
];

function Stats() {
  return (
    <section className="stats">
      {stats.map((stat) => (
        <article className="stat" key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </article>
      ))}
    </section>
  );
}

export default Stats;