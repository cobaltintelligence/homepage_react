import React, { Component } from 'react';
import '../App.css';

import {  
  Button,
  Clearfix,
  Col, 
  Grid,
  Jumbotron,
  MenuItem,
  Nav,
  NavDropdown,
  NavItem,
  Navbar, 
  Row } from 'react-bootstrap';

import NavHeader from '../components/NavHeader.js'
import { __COMPONENT_STYLES__, } from '../helpers/Styles.js'
import BackgroundImage from '../components/BackgroundImage.js'
import { Black, darkBlue, lightBlue, lightGreen, White } from '../helpers/Colors.js'

import { Bounce, Zoom, Fade, Slide} from 'react-reveal';

class HoverBox extends Component {
  render() {
    return (  
       <div 
        class="box"
        >
        {this.props.children}
      </div>
    )
  }
}


export default class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: 0.0
    }
  }

  render() {
    return (
      <div>
        <NavHeader/>
        <Fade>
        <Jumbotron style={{...__COMPONENT_STYLES__.jumbotron, ...styles.jumbotron}}> 
          <BackgroundImage 
            pan={'pan8'}
            backgroundColor={Black(0.3)}
            background={'url(https://media.expedia.com/hotels/1000000/910000/907700/907688/907688_213_z.jpg)'}
            contentStyle={{...__COMPONENT_STYLES__.jumboContent, ...styles.jumboContent}}>
            
            <Fade bottom cascade>
              <div 
                style={{
                  flex: 1, 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  paddingLeft: 8,
                  paddingRight: '20vw',
                }}>
                <div style={{paddingTop: '10vh', marginBottom: 20}}>
                  <p style={styles.bigTitle}>
                    {"Title Text".toUpperCase()}
                  </p>
                </div>
              </div>

              
            </Fade>

          </BackgroundImage>
        </Jumbotron>
        </Fade>

        <Fade cascade left>
        <div id="sec2"
          style={{
            ...styles.section2, 
            ...{ paddingTop: '9vh', paddingBottom: '5em'}
          }}>

            
        </div>
        </Fade>

      </div>
    );
  }
}


const styles = {
  jumbotron: {
    height: '60vh',
    marginBottom: 0,
    justifyContent: 'flex-end',
  },
  jumboContent: {
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'stretch',
    flex: 1,
    display: 'flex',
    paddingTop: '30vh',
    paddingBottom: 40,
  },
  vline: {
    flex: 1,
    display: 'flex',
    marginTop: '3vw',
    maxWidth: 1,
    backgroundColor: Black(0.6)
  },
  blueFooter: {
    backgroundColor: lightBlue(1),
    flex: 0,
    height: 140,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '15vw',
    paddingRight: '15vw',
  },
  section2: {
    backgroundColor: darkBlue(1),
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100vw'
  },
  section3: {
    backgroundColor: Black(1),
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    width: '100vw',
  },  
  section4: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100vw',
    paddingTop: '8vh',
    paddingBottom: '8vh',
    paddingLeft: '15vw',
    paddingRight: '15vw'
  },
  text: {
    wordBreak: 'keep-all',
    color: White(0.8),
    fontSize: 14,
    marginTop: 30,
  },
  textBlack: {
    color: Black(0.6),
    fontSize: 14,
  },
  textLighter: {
    color: White(0.4),
    fontSize: 14,
    marginTop: 30,
  },
  bigTitle: {
    wordBreak: 'keep-all',
    fontSize: '10vw',
    color: White(1),
    letterSpacing: '110%',
    fontWeight: 600,
    lineHeight: '110%',
    marginBottom: 10,
    textAlign: 'start',
    lineHeight: '94%',
  },
  title: {
    wordBreak: 'keep-all',
    overflowWrap: 'normal',
    fontSize: 30,
    color: White(1),
    letterSpacing: '2px',
    lineHeight: '110%',
    fontWeight: 600,
    marginBottom: 10,
  },
  subtitle: {
    wordBreak: 'keep-all',
    fontSize: 20,
    letterSpacing: '1.2px',
    fontWeight: 600,
    color: lightBlue(1)
  },
  justifyLeft: {
    textAlign: 'start'
  },
  logo: {
    margin: '3vw',
    width: '90%',
  },
  handshake: {
    height: 70,
  },
  hline: {
    backgroundColor: White(0.8),
    width: '30vw',
    height: 1,
    margin: 20,
  },
  hcap: {
    marginTop: 5,
    minWidth: 88,
    minHeight: 5,
    maxWidth: 88,
    maxHeight: 5,
    flex: 0,
    display: 'flex',
    backgroundColor: White(1),
  },
  hcapGreen: {
    backgroundColor: 'rgba(63, 151, 142, 1)',
    marginBottom: -10
  },
  hcapBlue: {
    backgroundColor: 'rgba(20, 148, 201, 1)',
    marginBottom: -10
  },
  column: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '30vw',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  sinker: {
    justifyContent: 'flex-start',
    display: 'flex',
    flex: 1,
  },
  smallCol: {
    flexDirection: 'column',
    flex: 1,
    display: 'flex',
    padding: '3vw',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  medCol: {
    flexDirection: 'column',
    flex: 1,
    marginLeft: '3vw',
    marginRight: '3vw',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  lionfish: {
    flex: 1,
    width: '55vw',
    marginTop: '2vh',
    marginBottom: 40
  },
  col: {
    paddingLeft: '5vw',
  },
  row: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  body: {
    paddingLeft: '20vw',
    paddingRight: '20vw',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  body2: {
    paddingBottom: 55,
    alignItems: 'center',
    width: '100vw'
  },
  arrow: {
    height: 55,
    width: 55
  },
  center: {
    flex: 0,
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
}