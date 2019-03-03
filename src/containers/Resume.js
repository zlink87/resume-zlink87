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
      {role:"Front-end Developer / Designer", 
        company:"Aardvark", 
        description:"My role is to write and style the front-end components that meet the requirements of our mocks. I also do UI re-designs and other graphic design tasks.", 
        technologies: "Technologies used: - Angular, Vue, React, Vuex, JavaScript, ES6, TypeScript, SASS, git, eslint, tslint.",
        software: "Software used: - Adobe Suite, Autodesk Maya, VS Code, Source Tree.",
        time:"December 2018 - Present", 
        isUpper: true, 
        key: uuid.v4(null)},
      {role:"Owner", 
        company:"TrainedPixels", 
        description:"My role as owner was to find and maintain customers. Manage graphic design and web development projects. Write and style front end components.",
        technologies: "Technologies used: - HTML, CSS, SASS, JavaScript, React, jQuery. CMS used: - Wordpress, Prestashop",
        software: "Software used: - Adobe Suite (mostly Photoshop, Illustrator, InDesign, XD), Autodesk Maya, VS Code, Unity3D. Skills used: - Project and time management, Graphic design, Front end web development.",
        time:"April 2016 - December 2018", 
        isUpper: false, 
        key: uuid.v4(null)},
      {role:"Senior Graphic Designer", 
        company:'UAB "Macmanus" | Apple Developer', 
        description:"Working for Apple Developer who is oriented in template development for Apple products. I learned to work fast and without loosing quality. A lot of attention was focused to pixel-perfect design work. Managed and delivered few of my own projects.",
        technologies: "Technologies used: - HTML, CSS, C#.",
        software: "Software: - Unity3D, Autodesk Maya, iWork, Xcode, Adobe Suite. Skills: - Print and Web design, Game design, UI/UX, Project management.",
        time:"December 2013 - March 2016", 
        isUpper: true, 
        key: uuid.v4(null)},
      {role:"Instructor", 
        company:"ITMC | IT Training Center", 
        description:"Working with 8-20 people groups from teenagers to seniors. Teaching Photoshop techniques, basic understandig of the web, web design and internet marketing.",
        technologies: "",
        software: "",
        time:"Occasionally", 
        isUpper: true, 
        key: uuid.v4(null)},
      {role:"Graphic Designer", 
        company:"Vilnius University | Kaunas Faculty", 
        description:"A lot of multi-tasking assignments, learned a lot about collaborating, working in team, event management, graphic design and e-marketing.",
        technologies: "Software used: - Adobe Photoshop, Illustrator, MS Office.",
        software: "Skills: - Photography, event management, team management, graphic design, internet marketing.", 
        time:"January 2012 - December 2013", 
        isUpper: false, 
        key: uuid.v4(null)},
      {role:"Sales and Marketing Manager", 
        company:'UAB "Amziaus Pasaka"', 
        description:"Client and sponsor search. Various event management from idea to full concept. Poster and other advert design.",
        technologies: "Software: - Adobe Photoshop, Illustrator, MS Office.",
        software: "Skills: - Marketing, event management, graphic design.",
        time:"June 2010 - August 2011", 
        isUpper: false, 
        key: uuid.v4(null)}
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
