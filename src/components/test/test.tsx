import { Component, h } from '@stencil/core';

@Component({
  tag: 'test-only',
  styleUrl: 'test.css',
})
export class Test {
  render() {
    return (
      <ion-grid>
        <ion-row>
          <ion-col size-md="6" size="12">
            <p class="red">aword</p>
          </ion-col>
          <ion-col size-md="6" size="12">
            <p id="blue">aword</p>
            <div>gobudy</div>
          </ion-col>
        </ion-row>
      </ion-grid>
    );
  }
}
