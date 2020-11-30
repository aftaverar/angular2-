import { NoisyPage } from './app.po';

describe('noisy App', () => {
  let page: NoisyPage;

  beforeEach(() => {
    page = new NoisyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
