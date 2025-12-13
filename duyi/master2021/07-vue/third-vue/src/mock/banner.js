import Mock from 'mockjs'

Mock.mock('/api/banner', 'get', {
  code: 10,
  msg: '',
  data: [
    {
      id: 1,
      title: '[韩剧] 灵指',
      img: 'https://cdnfile.sspai.com/2025/12/05/039243279ce2b2dc867990073e67e8d1.jpg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1/format/webp',
      description: '根据同名漫画改编的剧集没有大咖主演，甚至因男主患有过敏性大肠综合症（经常要拉粑粑），被一些网友吐槽是太过恶搞的设定。可正是这样一部看似奇葩、清奇的剧集，却成为了一匹黑马，让人在爆笑的过程中收获不少感动。因为这部表面上围绕乖乖女与差生展开的爱情喜剧，透过「灵指」小组释出了一股很强的能量。'
    },
    {
      id: 2,
      title: '[美剧] 雷殛元首',
      img: 'https://cdnfile.sspai.com/2025/12/05/d705ac3c786674c91edec7da84fe892e.jpg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1/format/webp',
      description: '这部历史剧根据坎迪斯·米拉德所著的小说改编，以美国前总统加菲尔德的故事作为主线。作为美国第 20 位总统，加菲尔德的经历很神奇。神职出身的他从未想过参选，起初上台演讲，也是为了替好友拉票。以黑马之姿上任后，他积极参政，还推动黑人能合法拥有选举权，可仅在位六个月，就惨遭刺杀，甚至中枪的位置并不致命，他本能活下来。'
    },
    {
      id: 3,
      title: '[美剧] 圣丹尼斯医院 第二季',
      img: 'https://cdnfile.sspai.com/2025/12/05/65fb1db57f6f17b99b45ee620ec86910.jpg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1/format/webp',
      description: '伪纪录片的形式走进了医护人员的工作里，不仅记录着每个人工作的模样，更借着他们的搞笑生活，对美国现在的医疗系统，进行了强有力的讽刺和吐槽。'
    },
    {
      id: 4,
      title: '[国产] 三人行',
      img: 'https://cdnfile.sspai.com/2025/12/05/f878b533344adac88259fa6d7997f779.jpg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1/format/webp',
      description: '三个年龄段，不一样的看待世界的视角，不同的人生历练。这部由《古相思曲》班底所打造的软科幻把议题放在了难定的人生抉择上，玩了一个双穿越的概念，并且开启了一个很好玩的设定——老年和中年的自己站在了 16 岁的你面前，并且告诉你两条完全不一样结局和不相同的路。'
    }
  ]
})