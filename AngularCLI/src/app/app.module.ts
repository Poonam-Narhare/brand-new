import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { FlatcompComponent } from './sample/flatcomp.component';
import { InlinesamplecompComponent } from './sample/inlinesamplecomp.component';
import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './banner/navbar.component';
import { JamboComponent } from './banner/jambo.component';
import { InfoComponent } from './banner/info.component';
import { FooterComponent } from './banner/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CollapseComponent } from './login-page/collapse.component';
import { AlbumComponent } from './login-page/album.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    FlatcompComponent,
    InlinesamplecompComponent,
    BannerComponent,
    NavbarComponent,
    JamboComponent,
    InfoComponent,
    FooterComponent,
    LoginPageComponent,
    CollapseComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
