  
import Loadable from 'react-loadable';
import Loading from '@/components/Loading/index.jsx'

const routerConfig = [
	{
		name: 'home',
		path: '/',
		exact: true,
		component:  Loadable({
			loader: () => import('@/views/home/index.jsx'),
			loading: Loading,
			delay:300
		}),
	},
	{
		name: 'archives',
		path: '/archives',
		exact:true,
		component:  Loadable({
			loader: () => import('@/views/archives/index.jsx'),
			loading: Loading,
			delay:300
		})
  },
  {
		name: 'article',
		path: '/article/:id',
		exact:true,
		component:  Loadable({
			loader: () => import('@/views/article/index.jsx'),
			loading: Loading,
			delay:300
		})
  },
  {
		name: 'about',
		path: '/about',
		exact:true,
		component:  Loadable({
			loader: () => import('@/views/about/index.jsx'),
			loading: Loading,
			delay:300
		})
  },
  {
		name: 'about',
		path: '/about',
		exact:true,
		component:  Loadable({
			loader: () => import('@/views/about/index.jsx'),
			loading: Loading,
			delay:300
		})
  },
  {
		name: 'photos',
		path: '/photos',
		exact:true,
		component:  Loadable({
			loader: () => import('@/views/photos/index.jsx'),
			loading: Loading,
			delay:300
		})
  },
  {
		name: 'study',
		path: '/study',
		exact:true,
		component:  Loadable({
			loader: () => import('@/views/study/index.jsx'),
			loading: Loading,
			delay:300
		})
	}
]

export default routerConfig