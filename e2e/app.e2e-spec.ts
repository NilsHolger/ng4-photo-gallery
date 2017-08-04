import { Ng4PhotoGalleryPage } from './app.po';

describe('ng4-photo-gallery App', () => {
  let page: Ng4PhotoGalleryPage;

  beforeEach(() => {
    page = new Ng4PhotoGalleryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
