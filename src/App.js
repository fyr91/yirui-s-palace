import React, {useEffect, useState} from 'react';
import logo from './assets/logo.svg';
import bg from './assets/bg.jpg';
import soon from './assets/coming_soon.svg';
import {sm_screen_size, md_screen_size, lg_screen_size} from './components/screensize';
import './App.css';


function App() {

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [logoSize, setLogoSize] = React.useState(80);

  React.useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth)
      if( windowWidth > lg_screen_size){
        setLogoSize(80)
      }else if (windowWidth > md_screen_size){
        setLogoSize(70)
      }else{
        setLogoSize(60)
      }

    });

    /* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */
  }, []);


  const styles = {
    bg: {
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
      alignItems: 'left',
      paddingLeft: 20,
      paddingRight: 20,
    },
    logo: {
      padding: 10,
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
      minWidth: 300,
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
