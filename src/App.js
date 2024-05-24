import './App.css';
import TopBar from "./components/TopBar";
import Title from "./components/Title";
import Converter from "./components/Converter";
import Notes from "./components/Notes";

function App() {
  return (
    <>
      <TopBar />
      <Title />
      <div className={'container'}>
        <Converter />
        <Notes />
      </div>
    </>
  );
}

export default App;
