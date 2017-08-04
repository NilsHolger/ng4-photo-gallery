import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ImageService } from '../image.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  image: any;

  constructor(private imageService: ImageService,
    private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.image = this.imageService.getImage(+this.route.snapshot.params['id']);
  }

  goBack() {
    this.location.back();
  }

}
