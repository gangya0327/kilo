// 创建 Compiler 实例
class Compiler {
  // el 宿主元素，vm KVue 实例
  constructor(el, vm) {
    this.$vm = vm;
    this.$el = document.querySelector(el);

    if (this.$el) {
      this.compile(this.$el);
    }
  }

  compile(el) {
    const childNodes = el.childNodes;
    childNodes.forEach((node) => {
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
    console.log('this.$vm[RegExp.$1] :>> ', this.$vm[RegExp.$1]);
    this.update(node, this.$vm[RegExp.$1], 'text');
  }

  compileElement(node) {
    const nodeAttrs = node.attributes;
    Array.from(nodeAttrs).forEach((attr) => {
      // 规定指令以 k-xx="oo" 定义
      const attrName = attr.name; // k-xx
      const exp = attr.value; // oo
      if (this.isDirective(attrName)) {
        const dir = attrName.substring(2); // xx
        this[dir] && this[dir](node, exp);
      }
    });
  }
  isDirective(attrName) {
    return attrName.indexOf('k-') === 0;
  }

  update(node, exp, dir) {
    // 初始化操作
    // 指令对应的更新函数为 xxUpdater
    const fn = this[dir + 'Updater'];
    fn && fn(node, this.$vm[exp]);

    // 更新处理，封装一个更新函数，用于更新对应 DOM 元素
    new Watcher(this.$vm, exp, function (val) {
      fn && fn(node, val);
    });
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

  textUpdater(node, value) {
    node.textContent = value;
  }
  htmlUpdater(node, value) {
    node.innerHTML = value;
  }
}
