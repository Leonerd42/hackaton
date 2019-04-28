import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { MissaoComponent } from './pages/missao/missao.component';
import { EquipesComponent } from './pages/equipes/equipes.component';
import { ParceirosComponent } from './pages/parceiros/parceiros.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConstrutionComponent } from './pages/constrution/constrution.component';
import { AgmCoreModule } from '@agm/core';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    SobreComponent,
    MissaoComponent,
    EquipesComponent,
    ParceirosComponent,
    ConstrutionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    AgmCoreModule.forRoot({
       apiKey: 'AIzaSyDXdtXtNT-KAo5oUVpCgt4IWsDZHtoXFsw'
    })
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
