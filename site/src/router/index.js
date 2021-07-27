import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},  
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue')
	},
	{
		path: '/cadastro',
		name: 'Cadastro',
		component: () => import('../views/Cadastro.vue')
	},
	{
		path: '/quiz',
		name: 'Quiz',
		component: () => import('../views/Quiz.vue')
	},
	{
		path: '/carrinho',
		name: 'Carrinho',
		component: () => import('../views/Carrinho.vue')
	},
	{
		path: '/finalizar-compra',
		name: 'FinalizarCompra',
		component: () => import('../views/FinalizarCompra.vue')
	},
	{
		path: '/admin',
		name: 'Admin',
		component: () => import('../views/Admin.vue')
	},
	{
		path: '/gerenciar-produto',
		name: 'GerenciarProduto',
		component: () => import('../views/GerenciarProduto.vue')
	},
	{
		path: '/gerenciar-usuario',
		name: 'GerenciarUsuario',
		component: () => import('../views/GerenciarUsuario.vue')
	},
	{
		path: '/produto',
		name: 'Produto',
		component: () => import('../views/Produto.vue')
	},
	{
		path: '/perfil-cliente',
		name: 'PerfilCliente',
		component: () => import('../views/PerfilCliente.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
