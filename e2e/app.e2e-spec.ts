import { PayrollsarasaPage } from './app.po';

describe('payrollsarasa App', function() {
  let page: PayrollsarasaPage;

  beforeEach(() => {
    page = new PayrollsarasaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
