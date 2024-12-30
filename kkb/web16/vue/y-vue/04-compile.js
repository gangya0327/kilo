// 递归遍历 DOM树
// 判断节点类型，文本则判断是否为插值绑定，元素则判断是否指令或事件，然后递归子元素

class Compiler {
  // el 是宿主元素，vm 是 KVue 实例
  constructor(el, vm) {
    this.$vm = vm;
    this.$el = document.querySelector(el);
    if (this.$el) {
      this.compile(this.$el);
    }
  }

  compile(el) {
    // 遍历 el树
    const childNodes = el.childNodes;
    childNodes.forEach((node) => {
      // 判断是否元素
      if (this.isElement(node)) {
        console.log('编译元素 ' + node.nodeName);
        this.compileElement(node);
      } else if (this.isInter(node)) {
        console.log('编译插值绑定 ' + node.textContent);
        this.compileText(node);
      }

      // 递归子节点
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node);
      }
    });
  }

  isElement(node) {
    return node.nodeType === 1;
  }

  isInter(node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent);
  }

  compileText(node) {
    // node.textContent = this.$vm[RegExp.$1];
    this.update(node, RegExp.$1, 'text');
  }

  compileElement(node) {
    // 遍历属性列表
    const nodeAttrs = node.attributes;

    Array.from(nodeAttrs).forEach((attr) => {
      // 规定指令以 k-xx="count" 定义
      const attrName = attr.name; // k-xx
      const exp = attr.value; // count
      if (this.isDirective(attrName)) {
        const dir = attrName.substring(2); // xx
        // 执行指令
        this[dir] && this[dir](node, exp);
      }
    });
  }

  isDirective(attr) {
    return attr.indexOf('k-') === 0;
  }

  update(node, exp, dir) {
    // 初始化
    // 指令对应的更新函数 xxUpdater
    const fn = this[dir + 'Updater'];
    fn && fn(node, this.$vm[exp]);

    // 更新处理，封装一个更新函数，可以更新对应 DOM 元素
    new Watcher(this.$vm, exp, function (val) {
      fn && fn(node, val);
    });
  }

  textUpdater(node, value) {
    node.textContent = value;
  }

  htmlUpdater(node, value) {
    node.innerHTML = value;
  }

  // k-text
  text(node, exp) {
    // node.textContent = this.$vm[exp];
    this.update(node, exp, 'text');
  }

  // k-html
  html(node, exp) {
    // node.innerHTML = this.$vm[exp];
    this.update(node, exp, 'html');
  }
}
