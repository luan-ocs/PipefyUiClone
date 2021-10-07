import GlobalStyles from './Styles/GlobalStyles';
import Header from './Components/Header';
import Board from './Components/Board';
import { DndProvider } from "react-dnd"
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <GlobalStyles/>
    <Header/>
    <Board/>
    </DndProvider>
  );
}

export default App;
