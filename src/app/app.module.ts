import { ContatoModule } from './contato/contato.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyModule } from './body/body.module';
import { ServicosModule } from './servicos/servicos.module';
import { TecnologiasModule } from './tecnologias/tecnologias.module';













@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BodyModule,
    ServicosModule,
    TecnologiasModule,
    ContatoModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
