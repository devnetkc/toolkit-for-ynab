import { Feature } from 'toolkit/extension/features/feature';

export class ReportStripedRows extends Feature {
  injectCSS() {
    return require('./index.css');
  }

  shouldInvoke() {
    return false;
  }
}
