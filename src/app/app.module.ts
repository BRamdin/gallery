import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AppHelloWorldComponent } from './app-hello-world/app-hello-world.component';
import { RouterModule } from '@angular/router';
import { routingTable } from './routes/app.routing';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    AppHelloWorldComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routingTable)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
