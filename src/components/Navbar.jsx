import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link className='m-2' href='/'>
        Home
      </Link>
      <Link className='m-2' href='/about'>
        About
      </Link>
      <Link className='m-2' href='/contact'>
        About
      </Link>
    </nav>
  );
};

export default Navbar;
