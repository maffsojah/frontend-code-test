import { FrontendCodeTestPage } from './app.po';

describe('frontend-code-test App', function() {
  let page: FrontendCodeTestPage;

  beforeEach(() => {
    page = new FrontendCodeTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
