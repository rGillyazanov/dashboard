import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { AuthState } from './store/auth.state';

import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/header/header.component';

const NGXSModules = [
  NgxsModule.forRoot([
    AuthState
  ], {
    developmentMode: !environment.production
  }),
  NgxsRouterPluginModule.forRoot(),
  NgxsStoragePluginModule.forRoot({
    key: 'auth.token'
  }),
  NgxsLoggerPluginModule.forRoot({
    disabled: environment.production
  }),
  NgxsReduxDevtoolsPluginModule.forRoot()
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ...NGXSModules,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
