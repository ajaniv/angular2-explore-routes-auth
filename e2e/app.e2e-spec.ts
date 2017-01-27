import { RoutesAuthPage } from './app.po';

describe('routes-auth App', function() {
  let page: RoutesAuthPage;

  beforeEach(() => {
    page = new RoutesAuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
