import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { tabelaComponent } from './pages/tabela/tabela.component';

// O routingModule é responsável por podermos criar rotas e configurar quais componentes serão responsáveis por cada página.
const routes: Route[] = [
  {
    // A propriedade principal de cada rota é o caminho dela, ou seja, o path da rota. Não precisamos passar a barra no começo.
    path: '',
    // A propriedade component, é onde vamos expecificar qual componente será utilizado como porta de entrada da página
    // Quando acessamos a página, ele será criado e mostrado em tela.
    component: HomeComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'tabela',
    component: tabelaComponent
  }
];

@NgModule({
  imports: [
    // Para que tudo funcione como rotas de fato, precisamos importar o módulo de rotas do angular e dizer que essas rotas serão as rotas
    // principais da nossa aplicação.
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
