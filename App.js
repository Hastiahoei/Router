import{Routes, Route} from 'react-router-dom';
import { About } from './components/About';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Home } from './components/Home';
import {Navbar} from './components/Navbar';
import { NewProducts } from './components/NewProducts';
import { OrdnerSummary } from './components/OrdnerSummary';
import {Products} from './components/Products'
import { UserDetais } from './components/UserDetais';
import { MyUsers } from './components/MyUsers';
import { MyUsers } from './components/MyUser';
import { MyUsers } from './components';

function App() {
  return (
    <div>
      <Navbar/>
   <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='order-summary' element={<OrdnerSummary/>}></Route>
      <Route path='products' element={<Products/>}> 
        <Route path='featured' element={<FeaturedProducts/>}></Route>
        <Route path='new' element={<NewProducts/>}></Route>
      </Route>
      <Route path='myusers' element={<MyUsers/>}></Route>
      <Route path='users/:userId' element={<UserDetais/>}></Route>
   </Routes>
   </div>
  );
}

export default App;
