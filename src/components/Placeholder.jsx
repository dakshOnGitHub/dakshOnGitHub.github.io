// Shows a dashed tag next to unfinished data, but only while developing.
// It never appears in the production build.
export default function Placeholder({ on }) {
  if (!on || !import.meta.env.DEV) return null
  return <span className="ph">placeholder</span>
}
