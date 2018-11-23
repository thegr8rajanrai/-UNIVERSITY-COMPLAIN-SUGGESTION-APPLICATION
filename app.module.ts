import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HostelComponent } from './hostel/hostel.component';
import { DepartComponent } from './depart/depart.component';
import { NetworkComponent } from './network/network.component';
import { AdminComponent } from './admin/admin.component';
import { TnpComponent } from './tnp/tnp.component';
import { SportComponent } from './sport/sport.component';
import { OtherComponent } from './other/other.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { LibraryComponent } from './library/library.component';
import { PreComponent } from './pre/pre.component';
import { DefaultComponent } from './default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HostelComponent,
    DepartComponent,
    NetworkComponent,
    AdminComponent,
    TnpComponent,
    SportComponent,
    OtherComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    LibraryComponent,
    PreComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot ([
      {path: '', component:DefaultComponent},
      {path: 'home', component:HomeComponent},
      {path: 'hostel', component:HostelComponent},
      {path: 'depart', component:DepartComponent},
      {path: 'network',component:NetworkComponent},
      {path: 'admin', component:AdminComponent},
      {path: 'tnp', component:TnpComponent},
      {path: 'sport', component:SportComponent},
      {path: 'other',component:OtherComponent},
      {path: 'login',component:LoginComponent},
      {path: 'logout',component:LogoutComponent},
      {path: 'library', component:LibraryComponent},
      {path: 'pre', component:PreComponent},
      {path: 'register', component:RegisterComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
