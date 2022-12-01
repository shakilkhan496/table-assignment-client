import './App.css';
import TableFour from './components/TableOne/TableFour';
import TableOne from './components/TableOne/TableOne';
import TableThree from './components/TableOne/TableThree';
import Tabletwo from './components/Tabletwo';

function App() {
  return (
    <div className='max-w-7xl space-y-20 mx-auto my-10 noto-sans'>
      Main table
      <TableOne></TableOne>

      <Tabletwo ></Tabletwo>

      <TableThree></TableThree>

      <TableFour></TableFour>
    </div>
  );
}

export default App;
