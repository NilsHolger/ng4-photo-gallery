import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  imageCollection = [];
  constructor() { }

  getImages(): any[] {
    return this.imageCollection = IMAGES.slice(0);
  }

  getImage(id: number): any {
    return IMAGES.slice(0).find(image => image.id === id);
  }

}

const IMAGES =[
    {"id":1, "category": "berlin", "caption": "Television tower", "url":"assets/images/berlin_01.jpg"},
    {"id":2, "category": "berlin", "caption": "Gendarmen market", "url":"assets/images/berlin_02.jpg"},
    {"id":3, "category": "berlin", "caption": "Brandenburg Gate", "url":"assets/images/berlin_03.jpg"},
    {"id":4, "category": "berlin", "caption": "German Parlament", "url":"assets/images/berlin_04.jpg"},
    {"id":5, "category": "berlin", "caption": "Alexander Place", "url":"assets/images/berlin_05.jpg"},
    {"id":6, "category": "police", "caption": "A meeting", "url":"assets/images/police_01.jpg"},
    {"id":7, "category": "police", "caption": "Mission complete", "url":"assets/images/police_02.jpg"},
    {"id":8, "category": "police", "caption": "Walking on snow", "url":"assets/images/police_03.jpg"},
    {"id":9, "category": "police", "caption": "Preparation for an urgency", "url":"assets/images/police_04.jpg"},
    {"id":10, "category": "police", "caption": "Ready to shoot", "url":"assets/images/police_05.jpg"},
    {"id":11, "category": "police", "caption": "Climbing like spiderman", "url":"assets/images/police_06.jpg"},
    {"id":12, "category": "police", "caption": "Ready to attack", "url":"assets/images/police_07.jpg"},
    {"id":13, "category": "heroes", "caption": "This is Flash", "url":"assets/images/heroes_01.jpg"},
    {"id":14, "category": "heroes", "caption": "Superman in action", "url":"assets/images/heroes_02.jpg"},
    {"id":15, "category": "heroes", "caption": "Spiderman climbing up the walls", "url":"assets/images/heroes_03.jpg"},
    {"id":16, "category": "heroes", "caption": "Batman justice for all", "url":"assets/images/heroes_04.jpg"},
    {"id":17, "category": "heroes", "caption": "Green Arrow sniper", "url":"assets/images/heroes_05.jpg"},
]
