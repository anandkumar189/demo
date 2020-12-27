import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { PartialLayoutComponent } from './layout/partial-layout/partial-layout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from './shared/commons/appHttpInterceptor';
import { ToastMessagesComponent } from './shared/modules/toaster/toast.component';
import { ToastService } from './shared/modules/toaster/toast.service';
import { CommonDataObservableService } from './shared/services/commondata.service';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'environments/environment';

import { EditorReducer } from 'app/store/reducers/editor.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/**
 * @author - anandkumar189
 * App Module
 */
@NgModule({
  declarations: [
    AppComponent,
    PartialLayoutComponent,
    ToastMessagesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({
      editorReducer: EditorReducer
    }),
    EffectsModule.forRoot([]),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [
    ToastService,
    CommonDataObservableService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    }

],
  bootstrap: [AppComponent]
})
export class AppModule { }
