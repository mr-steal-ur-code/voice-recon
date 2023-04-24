import { Component, h } from '@stencil/core';

@Component({
  tag: 'rpd-east',
  styleUrl: 'rpd-east.css',
})
export class RpdEast {
  render() {
    return (
      <div style={{ display: 'absolute', width: '100%', height: '100%', background: '#857373' }}>
        <div
          class="clock"
          style={{
            height: '30%',
            width: '30%',
            background: 'red',
            border: '1px solid black',
            top: 'calc(100% - 35%)',
            left: 'calc(100% - 35%)',
          }}
        >
          <span style={{ height: '50px', width: '5px' }}></span>
        </div>
      </div>
    );
  }
}
