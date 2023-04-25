import { Component, Fragment, h } from '@stencil/core';

@Component({
  tag: 'rpd-east',
  styleUrl: 'rpd-east.css',
})
export class RpdEast {
  render() {
    return (
      <Fragment>
        <ion-router-link href="/">Home</ion-router-link>
        <div style={{ display: 'absolute', width: '100%', height: '100%', background: '#857373' }}>
          <div
            class="clock"
            style={{
              height: '30%',
              width: '25%',
              background: 'grey',
              border: '1px solid black',
              top: '65%',
              left: '65%',
            }}
          >
            <span style={{ zIndex: '99', left: '60%', top: '60%', fontSize: '3rem' }}>4</span>
            <span id="4" style={{ right: '0', height: '100%', width: '45%' }}></span>
            <span id="4" style={{ bottom: '0', height: '40%', width: '100%' }}></span>
          </div>
          <div
            style={{
              height: '30%',
              width: '20%',
              background: 'grey',
              border: '1px solid black',
              top: '35%',
              left: '45%',
            }}
            class="clock"
          >
            <span style={{ zIndex: '99', left: '40%', top: '70%', fontSize: '3rem' }}>5</span>
            <span id="5" style={{ zIndex: '9', bottom: '20%', right: '0', height: '20%', width: '50%' }}></span>
            <span id="5" style={{ bottom: '0', height: '30%', width: '100%' }}></span>
          </div>
          <div
            style={{
              height: '30%',
              width: '20%',
              background: 'grey',
              border: '1px solid black',
              top: '5%',
              left: '25%',
            }}
            class="clock"
          >
            <span style={{ zIndex: '99', left: '40%', top: '40%', fontSize: '3rem' }}>6</span>
            <span id="6" style={{ zIndex: '9', background: 'blue', bottom: '30%', height: '70%', width: '70%', left: '0' }}></span>
            <span id="6" style={{ background: 'blue', bottom: '0', height: '30%', width: '100%' }}></span>
          </div>
          <div
            style={{
              height: '20%',
              width: '30%',
              background: 'grey',
              border: '1px solid black',
              bottom: '45%',
              left: '20%',
            }}
            class="clock"
          >
            <span style={{ zIndex: '9', left: '45%', top: '35%', fontSize: '3rem' }}>7</span>
            <span id="7" style={{ zIndex: '9', background: 'blue', bottom: '0', height: '15%', width: '50%', left: '15%' }}></span>
            <span id="7" style={{ background: 'blue', bottom: '15%', height: '85%', width: '100%' }}></span>
          </div>
        </div>
      </Fragment>
    );
  }
}
