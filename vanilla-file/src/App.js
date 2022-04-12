import './App.css'
import Counter from './components/Counter'
import Searchbar from './components/Searchbar';

function App() {
    return (
        <div className='grid justify-center align-center'>
        <div className='text-lg italic bg-lime-600'>
            Hello World ! ==</div>
            <Counter />
            <Searchbar />
        </div>
    );
}

export default App;