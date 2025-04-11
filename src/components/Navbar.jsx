import { appleImg, bagImg, searchImg } from '../../utils';
import {navLists} from '../constants';

const Navbar = () => {
  return (
    <header className="w-full flex justify-between 
    items-center">
      <nav className="flex w-full">
        <img src={appleImg} alt="Apple" width={14} height={18} />



        <a className="flex  justify-center
        max-sm:hidden">
          {navLists.map((nav) => (
            <a key={nav} className='px-5'>
              {nav}
            </a>
          ))}
        </a>

          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
      </nav>
     </header>
  )
}

export default Navbar
