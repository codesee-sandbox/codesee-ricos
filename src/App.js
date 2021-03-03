import { ProGallery } from 'pro-gallery';
import images from './images';
import 'pro-gallery/dist/statics/main.css';


import logo from './logo.svg';
import './App.css';

function App() {
  const container = {
    width: 1000,
    height: 500,
  }
  return (
    <div className="App">
      <header className="App-header">
        <ProGallery container={container} items={images}/>
      </header>
    </div>
  );
}

export default App;
