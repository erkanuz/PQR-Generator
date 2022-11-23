import Navbar from './Pages/navbar'
import Icon from './Pages/icons'
import Footer from './Pages/footer'

import Pwd from './Pages/pwd'
import Qrs from './Pages/qrs'

function App() {
  return (
    <div className="before:m-0 transition ease-in duration-300 bg-white dark:bg-black after:m-0 before:p-0 after:p-0 min-h-screen box-border w-full h-full grid items-center justify-center overflow-hidden">
    <Navbar/>
    <Icon/>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:mb-12 justify-between gap-4'>
        <Pwd/>
        <Qrs/>
      </div>
    <Footer/>
    </div>
  );
}

export default App;
