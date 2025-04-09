import Home from '@/views/Home';
import Blog from '@/views/Blog';
import Project from '@/views/Project';
import Message from '@/views/Message';
import About from '@/views/About';

const routes = [
  { path: '/', component: Home },
  { path: '/blog', component: Blog },
  { path: '/project', component: Project },
  { path: '/message', component: Message },
  { path: '/about', component: About },
];

export default routes;
