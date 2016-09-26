import { RouterDemoPage } from './app.po';

describe('router-demo App', function() {
  let page: RouterDemoPage;

  beforeEach(() => {
    page = new RouterDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
