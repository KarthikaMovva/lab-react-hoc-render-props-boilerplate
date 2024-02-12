import './App.css';
// import Wrappingcall1 from './components/LikeImage';
import Counter from './components/Counter';
// import Wrappringcall2 from './components/LikePost';
import LikePost1 from './components/Likepost1';
import Likeimage1 from './components/LikeImage1';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
       {/* <Wrappingcall1/>              Using HOC    */}
       {/* <Wrappringcall2/>            Using HOC */}

      <Counter render={({count,handleclick})=>(
        <LikePost1 count={count} handleclick={handleclick}/>)}/>       
                                                                           {/* Using render props */}
      <Counter render={({count,handleclick})=>(
        <Likeimage1 count={count} WhenClicked={handleclick}/>)}/>
                                                                               {/* Using render props */}
      </div>
    </div>
  );
}

export default App;
