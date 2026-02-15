import Vue from 'vue'

// 传入组件的实例，并执行挂载
export default function (Comp, props) {
  // 组件实例化
  const Ctor = Vue.extend(Comp)
  const comp = new Ctor({
    propsData: props,
  })
  // 挂载到 body 中
  comp.$mount()
  document.body.appendChild(comp.$el)
  // 淘汰方法
  comp.remove = () => {
    document.body.removeChild(comp.$el)
  }
  // 返回实例
  return comp
}
