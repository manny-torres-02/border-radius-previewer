import RadiusInput from './components/RadiusInput';
// import UpdateButton from './components/UpdateButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Border Radius Previewer </h1>
      <RadiusInput className="" id="Top-Left"></RadiusInput>
      <RadiusInput className="" id="Top-Right"></RadiusInput>
      <RadiusInput className="" id="Bottom-Left"></RadiusInput>
      <RadiusInput className="" id="Bottom-Right"></RadiusInput>
      <div className="box"></div>
    </div>
  )
}

export default App;
