import { TuangouGrubmarketClonePage } from './app.po';

describe('tuangou-grubmarket-clone App', () => {
  let page: TuangouGrubmarketClonePage;

  beforeEach(() => {
    page = new TuangouGrubmarketClonePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
