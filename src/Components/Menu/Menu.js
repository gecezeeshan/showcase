import MyNavBar from './Navbar';
import Books from '../Books';
import Directory from '../Directory';
import Counter from '../Counter';
import Login from '../Login';
import Test from '../test';
import {
    BrowserRouter as Router,
    Routes,
    Route 
} from 'react-router-dom';

const Menu = () => {

    return (<>

        <div>
       
            {<Router>                
                <MyNavBar></MyNavBar>        
                <Routes>                                
                    <Route path="/Books" element={<Books />} />
                    <Route path="/Directory" element={<Directory />} />
                    <Route path="/Counter" element={<Counter />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Test" element={<Test />} />
                </Routes>
                
            </Router>
 
            }
             
        </div>



    </>);

}

export default Menu;