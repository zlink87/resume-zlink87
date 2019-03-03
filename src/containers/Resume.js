import React, { Component } from 'react';
import {  Route } from 'react-router-dom';
import cssClasses from '../style/main.css';

import Menu from '../components/menu';
import Background from '../assets/BackgroundMain';

import uuid from 'uuid';

//PAGES
import BasicInfo from './Pages/Info';
import Skills from './Pages/Skills';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
// import Motivation from './Pages/Motivation';

import SinglePortfolio from './Pages/Portfolio_single';

var newHash = null;
var newId = null;

class Resume extends Component {
  state = {
    photos: [
      {url: require('../assets/img/Portfolio/allergy_logo.jpg'), name: 'Allergy Logo', uqid: 1, link:"#", tag:"#allogo", id:uuid.v4(null, null, 1)},
      {url: require('../assets/img/Portfolio/allergy_website.jpg'), name:'Allergy Website', uqid: 2, link:"#", tag:"#allweb", id:uuid.v4(null, null, 2)},
      {url: require('../assets/img/Portfolio/google_banners.jpg'), name: 'Google Banners for Event Planning Company', uqid: 3, link:"#", tag:"#googleb", id:uuid.v4(null, null, 3)},
      {url: require('../assets/img/Portfolio/lrp_website.jpg'), name: 'Lukstas Rest Park Website', uqid: 4, link:"#", tag:"#lrpweb", id:uuid.v4(null, null, 4)},
      {url: require('../assets/img/Portfolio/lrs_logo.jpg'), name: 'Lukstas Rest Park Logo', uqid: 5, link:"#", tag:"#lrslogo", id:uuid.v4(null, null, 5)},
      {url: require('../assets/img/Portfolio/magazine.jpg'), name: 'Magazine "Zmones" Mockup', uqid: 6, link:"#", tag:"#magazine", id:uuid.v4(null, null, 6)},
      {url: require('../assets/img/Portfolio/mint_logo.jpg'), name: 'Mint Logo', uqid: 7, link:"#", tag:"#mintlogo", id:uuid.v4(null, null, 7)},
      {url: require('../assets/img/Portfolio/nw_logo.jpg'), name: 'Norden Wood Logo', uqid: 8, link:"#", tag:"#nwlogo", id:uuid.v4(null, null, 8)},
      {url: require('../assets/img/Portfolio/salitera_logo.jpg'), name: 'Salitera Logo', uqid: 9, link:"#", tag:"#slitlogo", id:uuid.v4(null, null, 9)},
      {url: require('../assets/img/Portfolio/tedxkaunas_website_2017.jpg'), name: 'TEDxKaunas Event 2017 Website', uqid: 10, link:"#", tag:"#tdx2017", id:uuid.v4(null, null, 0)}
    ],
    thumbnail: [
      {url: require('../assets/img/Portfolio/_Thumb/allergy_logo_thumb.jpg'), name: 'Allergy Logo Thumnail', uqid: 1, tag:"#allogo_thumb", id:uuid.v4(null)},
      {url: require('../assets/img/Portfolio/_Thumb/allergy_website_thumb.jpg'), name:'Allergy Website Thumnail', uqid: 2, tag:"#allweb_thumb", id:uuid.v4(null)},
      {url: require('../assets/img/Portfolio/_Thumb/google_banners_thumb.jpg'), name: 'Google Banners for Event Planning Company Thumnail', uqid: 3, tag:"#googleb_thumb", id:uuid.v4(null)},
      {url: require('../assets/img/Portfolio/_Thumb/lrp_website_thumb.jpg'), name: 'Lukstas Rest Park Website Thumnail', uqid: 4, tag:"#lrpweb_thumb", id:uuid.v4(null)},
      {url: require('../assets/img/Portfolio/_Thumb/lrs_logo_thumb.jpg'), name: 'Lukstas Rest Park Logo Thumnail', uqid: 5, tag:"#lrslogo_thumb", id:uuid.v4(null)},
      {url: require('../assets/img/Portfolio/_Thumb/magazine_thumb.jpg'), name: 'Magazine "Zmones" Mockup Thumnail', uqid: 6, tag:"#magazine_thumb", id:uuid.v4(null)},
      {url: require('../assets/img/Portfolio/_Thumb/mint_logo_thumb.jpg'), name: 'Mint Logo Thumnail', uqid: 7, tag:"#mintlogo_thumb", id:uuid.v4(null)},
      {url: require('../assets/img/Portfolio/_Thumb/nw_logo_thumb.jpg'), name: 'Norden Wood Logo Thumnail', uqid: 8, tag:"#nwlogo_thumb", id:uuid.v4(null)},
      {url: require('../assets/img/Portfolio/_Thumb/salitera_logo_thumb.jpg'), name: 'Salitera Logo Thumnail', uqid: 9, tag:"#slitlogo_thumb", id:uuid.v4(null)},
      {url: require('../assets/img/Portfolio/_Thumb/tedxkaunas_website_2017_thumb.jpg'), name: 'TEDxKaunas Event 2017 Website Thumnail', uqid: 10, tag:"#tdx2017_thumb", id:uuid.v4(null)}
    ],
    experience: [
      {role:"Owner", company:"TrainedPixels | Creative Agency", description:"Website and e-commerce sites creation using Wordpress, Prestashop, Woocommerce CMS. Graphic design services (logos, press, banners), communication with customers. Languages: HTML, CSS (Bootstrap), JS (jQuery, ReactJS).", time:"March 2017 - Present", isUpper: true, key: uuid.v4(null)},
      {role:"Senior Graphic Designer", company:'UAB "Macmanus" | Apple Developer', description:"Working for Apple Developer who is oriented in template development for Apple products I learned work fast without loosing quality. A lot of attention was focused to pixel-perfect work and other small details as user experience pieces.", time:"December 2013 - March 2016", isUpper: true, key: uuid.v4(null)},
      {role:"Instructor", company:"ITMC | IT Training Center", description:"Working with 8-20 people groups from teenagers to seniors. Teaching Photoshop techniques, basic understandig of the web, web design and internet marketing.", time:"Occasionally", isUpper: true, key: uuid.v4(null)},
      {role:"Graphic Designer", company:"Vilnius University | Kaunas Faculty", description:"Working with students, graphic design, internet marketing - responsible for image building of Kaunas Faculty of Humanities. A lot of multi-tasking assignments, learned a lot about collaborating, working in team, event management, graphic design and e-marketing.", time:"November 2011 - December 2013", isUpper: false, key: uuid.v4(null)},
      {role:"Sales and Marketing Manager", company:'UAB "Amziaus Pasaka" | Entertainment, Event Center', description:"Banquet hall “Nautilus” and Night Club “BlackPearl” advertisement design, new customer search, liaison with existing customers, theater troups and bands search, events management.", time:"June 2010 - August 2011", isUpper: false, key: uuid.v4(null)}
    ]

  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  changePhoto = (id, direction) => {
      var photos = this.state.photos;

      if(id !== 0 && id < 10 && direction === true) {
        id += 1;
        newId = id;
        for(var i = 0; i < photos.length; i++) {
          if(id === photos[i].id) {
            newHash = photos[i].tag;
          }
        }
      } else if (id !== 0 && id > 1 && direction === false) {
        id -= 1;
        newId = id;
        for(var j = 0; j < photos.length; j++) {
          if(id === photos[j].id) {
            newHash = photos[j].tag;
        }
      }
    } else {
      console.error('Sorry we didn\'t find what you are searching for.');
    }
  }

  getPhotoId (id) {
      return newId = id;
  }

  render() {
    console.log(newId);
    return (
      <div className={cssClasses.main}>
          
          <Route path="/" exact component={BasicInfo} />
          <Route path="/skills" component={Skills} />
          <Route path="/education" component={Education} />
          <Route path="/experience" component={() => <Experience exp={this.state.experience}/>} />
          <Route path="/portfolio" component={() => <Portfolio thumb={this.state.thumbnail} clicked={this.getPhotoId}/>} />
          <Route path="/contact" component={Contact} />
          {/* <Route path="/motivation" component={Motivation} /> */}
          <Route path="/single-portfolio-item" component={() => <SinglePortfolio photos={this.state.photos} change={this.changePhoto} getId={newId} newHash={newHash}/>}/>
          <Menu />
        <Background />
      </div>  
    );
  }
}

export default Resume;

  // padaryti OnMouseMove kad judetu Single image => Portfolio
  // class Application extends React.Component {
  //   constructor(props) {
  //     super(props);
  
  //     this.state = { x: 0, y: 0 };
  //   }
  
  //   _onMouseMove(e) {
  //     this.setState({ x: e.screenX, y: e.screenY });
  //   }
  
  //   render() {
  //     const { x, y } = this.state;
  //     return <div onMouseMove={this._onMouseMove.bind(this)}>
  //       <h1>Mouse coordinates: { x } { y }</h1>
  //     </div>;
  //   }
  // }
