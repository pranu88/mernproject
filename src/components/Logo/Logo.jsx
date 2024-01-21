import  './Logo.css';
import img from './M.gif'
export default function Logo() {
return (
  <div className='Logo'>
    <img src={img} alt='logo' style={{width:'15vmin',height:'15vmin'}}/>
    {/* <div>MERN</div> 
     <div>MART</div> */}
  </div>
);
}