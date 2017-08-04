import { EmsPage } from './app.po';

describe('ems App', () => {
  let page: EmsPage;

  beforeEach(() => {
    page = new EmsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
