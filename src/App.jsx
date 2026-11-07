import './App.css';
import BoxInserter from './components/boxInserter';
import BoxList from './components/boxList';
import BoxEditor from './components/boxEditor';

export default function App() {


  return (
    <div className="app">
      <h1>Colorful Rectangles Editor</h1>

      <div className="top-section">
        <BoxInserter />
        <BoxEditor />
      </div>

      <h2>Box List</h2>
      <div className="bottom-section">
        <BoxList />
      </div>
    </div >
  )
}