import { AsyncValidatorPage } from './app.po';

describe('async-validator App', () => {
  let page: AsyncValidatorPage;

  beforeEach(() => {
    page = new AsyncValidatorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
