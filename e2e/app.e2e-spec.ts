import { RESUMEPage } from './app.po';

describe('resume App', function() {
  let page: RESUMEPage;

  beforeEach(() => {
    page = new RESUMEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
