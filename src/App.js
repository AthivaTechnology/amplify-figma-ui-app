import logo from './logo.svg';
import './App.css';
import SocialPostCollection from './ui-components/SocialPostCollection';

function App() {
  return (
    <SocialPostCollection isPaginated itemsPerPage={3}/>
  );
}

export default App;
