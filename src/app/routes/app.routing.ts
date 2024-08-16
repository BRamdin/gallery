import { Route } from "@angular/router";
import { GalleryComponent } from "../gallery/gallery.component";
import { AppHelloWorldComponent } from "../app-hello-world/app-hello-world.component";

export const routingTable: Route[] = [
    { path: 'welcome', component: GalleryComponent},
    { path: 'helloworld', component: AppHelloWorldComponent},

    { path: '**', redirectTo: 'welcome'}
]