import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { selectPotentials } from "./redux/slices/potentialCountriesSlice";
import { useSelector} from "react-redux";
import {selectDisplay} from './redux/slices/displayCountrySlice';
import Loading from "./Components/Loading";
import { loading } from "./redux/slices/isLoadingSlice";

function App() {
    let potentials = useSelector(selectPotentials);
    console.log(potentials);
    let currentDisplay = useSelector(selectDisplay);
    console.log('Display', currentDisplay);

    const loadingState = useSelector(loading)
    return (
        <div className="App font-link">
            <Header />
             {loadingState ? (<Loading />) : (
                currentDisplay ? <MainDisplay /> : <OptionDisplay />
             )
            }
        </div>
    );
}

export default App;
