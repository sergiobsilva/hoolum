import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu/menu.component';
import { ApresentacaoComponent } from './Components/apresentacao/apresentacao/apresentacao.component';
import { ServicosComponent } from './Components/servicos/servicos/servicos.component';
import { PortfolioComponent } from './Components/portfolio/portfolio/portfolio.component';
import { DepoimentosComponent } from './Components/depoimentos/depoimentos/depoimentos.component';
import { ContatoComponent } from './Components/contato/contato/contato.component';
import { FooterComponent } from './Components/footer/footer/footer.component';

/* importando modulos bootstrap */
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ApresentacaoComponent,
    ServicosComponent,
    PortfolioComponent,
    DepoimentosComponent,
    ContatoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
