import { NavLink } from 'react-router'
import usePriceStore from '../../store/price'

export default function Home() {
  const { price, increment, decrement, reset } = usePriceStore()
  return (
    <div>
      <h3>Home</h3>
      <NavLink to="/about/1">about</NavLink>
      <div>price: {price}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}