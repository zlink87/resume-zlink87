import React, { Component } from 'react';
import Resume from './containers/Resume';
import {  HashRouter } from 'react-router-dom';
import $ from 'jquery';

// HIDE MENU ON SCROLL
window.onscroll = function() {
  if($(window).width() < 900) {
  if (this.oldScroll > this.scrollY) {
    $('#menu').css({'top':'100%'});
  } else if (this.oldScroll < this.scrollY) {
    $('#menu').css({'top':'calc(100% + 78px)', 'transition-delay':'.5s'});
  }
}
  this.oldScroll = this.scrollY;
}


class App extends Component {
  render() {
    return (
      <HashRouter >
        <div>
          <Resume />
        </div>  
      </HashRouter> 
    );
  }
}

export default App;
