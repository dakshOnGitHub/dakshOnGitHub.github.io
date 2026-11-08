export default function SectionTitle({ id, lines }) {
  return (
    <h2 className="section__title display" id={id}>
      {lines.map((l) => (
        <span className="mask" key={l}>
          <span>{l}</span>
        </span>
      ))}
    </h2>
  )
}
