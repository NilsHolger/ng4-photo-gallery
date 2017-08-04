import { Component, OnChanges, Input } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
      title: string = 'Newest Photos';
      @Input() filterBy? : string = 'all';
      imageCollection: any[] = [];

      constructor(private imageService: ImageService) {
          this.imageCollection = this.imageService.getImages();
      }

      ngOnChanges() {
        this.imageCollection = this.imageService.getImages();
      }

}
