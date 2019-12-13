import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { ContentComponent } from './components/content/content.component'

import { HeadComponent } from './components/head/head.component';
import { CircleComponent } from './components/circle/circle.component';
import { TagComponent } from './components/tag/tag.component';
 import { ButtonComponent } from './components/button/button.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TwitterComponent } from './components/twitter/twitter.component';
import { TextComponent } from './components/text/text.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    BannerComponent,
    HeadComponent,
    NavBarComponent,
    ContentComponent,
    CircleComponent,
    TagComponent,
    ButtonComponent,
    ProfileComponent,
    TwitterComponent,
    TextComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
