import { NavLink } from 'react-router'

export default function Home() {
  return (
    <div>
      <h3>Home</h3>
      <NavLink to="/about/1">about</NavLink>
    </div>
  )
}
