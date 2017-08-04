import { Routes } from '@angular/router';
import { GalleryComponent } from './app/gallery/gallery.component';
import { ImageDetailComponent } from './app/image-detail/image-detail.component';

export const APPROUTES: Routes = [
    {path: "gallery", component: GalleryComponent },
    {path: "image/:id", component: ImageDetailComponent },
    {path: "", redirectTo: '/gallery', pathMatch: 'full' }
];
