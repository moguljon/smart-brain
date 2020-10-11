import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecogniton from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

const app = new Clarifai.App({apiKey: 'b58fa35cae554c9c98c09ffd665e4a8e'});


const useParticles = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('imageLocation');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.right_col * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box})
  }

  onSubmit = (event) => {
    const { input } = this.state;
    const { calculateFaceLocation, displayFaceBox } = this;
    this.setState({imageUrl: input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, input)
    .then(response => displayFaceBox(calculateFaceLocation(response)))
    .catch(err => console.log(err));
  }
  //`c0c0ac362b03416da06ab3fa36fb58e3`

  onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState({isSignedIn: false})
    } else if(route === 'home') {
      this.setState({isSignedIn: true})
    }
  
    this.setState({route})
  }

  render() {
    const { onInputChange, onSubmit, onRouteChange } = this;
    const { imageUrl, box, route, isSignedIn } = this.state;
    return (
      <div>
        <Particles className='useParticles' params={useParticles}/>
        <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
        { route === 'home' 
          ? <div> 
             <Logo />
             <Rank />
             <ImageLinkForm onInputChange={onInputChange} onSubmit={onSubmit} />
             <FaceRecogniton imageUrl={imageUrl} box={box} />
          </div>
          :( route ==='signin' ? <Signin onRouteChange={onRouteChange}/> : <Register onRouteChange={onRouteChange}/>
          )
        }
      </div>
    );
  }
}

export default App;
