import { GpgPolicyPage } from './app.po';

describe('gpg-policy App', function() {
  let page: GpgPolicyPage;

  beforeEach(() => {
    page = new GpgPolicyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
