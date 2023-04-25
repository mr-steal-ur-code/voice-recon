import { Component, Fragment, h, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  // shadow: true,
})
export class AppHome {
  @State() mode: string;

  constructor() {
    this.mode = localStorage.getItem('mode') || 'auto';
  }

  setMode(mode: string) {
    if (mode == this.mode) {
      return;
    }
    this.mode = mode;
    switch (mode) {
      case 'md':
      case 'ios':
        localStorage.setItem('mode', mode);
        break;
      default:
        localStorage.removeItem('mode');
        break;
    }
    location.reload();
  }

  render() {
    return (
      <Fragment>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Home</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <ion-router-link style={{ fontSize: '30px', fontWeight: 'bolder', color: 'var(--ion-color-secondary)' }} href="/map">
            Map
          </ion-router-link>
          <test-only></test-only>
        </ion-content>
      </Fragment>
    );
  }
}
