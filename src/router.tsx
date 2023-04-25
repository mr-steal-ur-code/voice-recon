import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-router',
  // shadow: true,
})
export class AppRouter {
  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home"></ion-route>
          <ion-route url="/map" component="rpd-east"></ion-route>
        </ion-router>
        <ion-nav></ion-nav>
      </ion-app>
    );
  }
}
