
import logo from '../../../assets/logo.png';
import moment from 'moment';
const Header = () => {
  return (
    <div>
      <img className='mx-auto' src={logo} alt="logo" />
      <p className='text-lg font-normal text-center pt-5 pb-2'>Journalism Without Fear or Favour</p>
      <p className='text-xl font-medium text-center'>{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;