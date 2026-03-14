import { NavLink, useParams } from 'react-router'

export default function About() {
  const { id } = useParams()
  return (
    <div>
      <h3>About {id}</h3>
      <NavLink to="/">home</NavLink>
    </div>
  )
}
