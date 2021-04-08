import React, {useState} from 'react';
import logo from './assets/logo.svg';
import bg from './assets/bg.jpg';
import soon from './assets/coming_soon.svg';
import {sm_screen_size, md_screen_size, lg_screen_size} from './components/screensize';
import './App.css';


function App() {

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [logoSize, setLogoSize] = React.useState(50);
  const [logoPos, setLogoPos] = React.useState('flex-start');


  const styles = {
    bg: {
      minWidth: 300,
      minHeight: 480,
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundImage: `url(${bg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    header: {
      height: '100px',
      width: '100%',
      backgroundColor: 'transparent',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: logoPos,
      // paddingLeft: 20,
    },
    logo: {
      paddingLeft: 40,
      paddingRight: 40,
      height: logoSize,
      width: logoSize,
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    coming: {
      width: "50vw",
      minWidth: 250,
    },
    footer: {
      height: '80px',
    }
  }
  return (
    <div style={styles.bg}>
      <div style={styles.header}>
        <img src={logo} alt="coming soon" style={styles.logo}/>
      </div>
      <div style={styles.content}>
        <img src={soon} alt="coming soon" style={styles.coming}/>
      </div>
      <div style={styles.footer}/>
    </div>
  );
}

export default App;
