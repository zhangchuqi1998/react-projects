import Sidebar from './components/Sidebar';
import Route from './components/Route';
import AccoordianPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage';
import ButtonPage from './pages/ButtonPage';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';
import CounterPage from './pages/CounterPage';

function App() {

    return <div>
        <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
            <Sidebar />
            <div className='col-span-5'>
            <Route path="/accordion">
                <AccoordianPage />
            </Route>

            
            <Route path="/">
                <DropdownPage />
            </Route>

            <Route path="/buttons">
                <ButtonPage />
            </Route>

            <Route path="/modal">
                <ModalPage />
            </Route>

            <Route path="/table">
                <TablePage />
            </Route>

            <Route path="/counter">
                <CounterPage initialCount={10} />
            </Route>

            </div>
        </div>
    </div>;
       
    
}

export default App;