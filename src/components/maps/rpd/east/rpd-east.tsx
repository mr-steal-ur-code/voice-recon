import { Component, h } from '@stencil/core';

@Component({
  tag: 'rpd-east',
  styleUrl: 'rpd-east.css',
})
export class RpdEast {
  render() {
    return (
      <div style={{ width: '100%', height: '100%', background: '#857373' }}>
        <div class="clock" style={{ height: '30%', width: '30%' }}>
          <span style={{ height: '50px', width: '5px' }}></span>
        </div>
      </div>
    );
  }
}
