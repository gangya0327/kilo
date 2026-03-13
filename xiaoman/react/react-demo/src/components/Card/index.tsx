import './index.css'

interface Props {
  title?: string
  content?: string
  callback?: (params: string) => void
}

export default function Card(props: Props) {
  console.log('props ->', props)
  return (
    <div className="card">
      <header>
        <div>{props.title}</div>
        <div> 副标题</div>
      </header>
      <main> {props.content}</main>
      <footer>
        <button onClick={() => props.callback && props.callback('我是内容')}>确认</button>
        <button>取消</button>
      </footer>
    </div>
  )
}
