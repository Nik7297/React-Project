import React ,{useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { style } from '@mui/system';
import LanguageIcon from '@mui/icons-material/Language';

function Header() {
    const[menu, Openmenu] = useState(false)
    
    function Showmenu(e){
        e.preventDefault();
        Openmenu(true)

    }
    function closemenu(){
        Openmenu(false)
    }
  return (
    <div className="header">

                <span className="logo">
                    <img src="teslaimages/logo.svg"></img>
                </span>

                <span >
                <ul className="headerli">
                    
                    <li><a href="#">Model S</a></li>
                    <li><a href="#">Model 3</a></li>
                    <li><a href="#">Model X</a></li>
                    <li><a href="#">Model Y</a></li>
                    <li><a href="#">Solar Roof</a></li>
                    <li><a href="#">Solar Panels</a></li>
                </ul>
                </span>

                <span className='rightnav' >
                    <ul className="headerli">
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Account</a></li>
                        <li><a href="#"  onClick={Showmenu}>Menu</a></li>
                    </ul>
                </span>

                <div className='rightdisplaynone' style={{right: menu===false ? "-250px":"0"}}>
                    <ul>
                        <i className='icon' ><CloseIcon onClick={closemenu} className="iconcross"></CloseIcon></i>
                        <li><a href='#'>Existing Inventory</a></li>
                        <li><a href='#'>Used Inventory</a></li>
                        <li><a href='#'>Trade-In</a></li>
                        <li><a href='#'>Demo Drive</a></li>
                        <li><a href='#'>Insurance</a></li>
                        <li><a href='#'>Cybertruck</a></li>
                        <li><a href='#'>Roadster</a></li>
                        <li><a href='#'>Semi</a></li>
                        <li><a href='#'>Charging</a></li>
                        <li><a href='#'>Powerwall</a></li>
                        <li><a href='#'>Commercial Energy</a></li>
                        <li><a href='#'>Utilities</a></li>
                        <li><a href='#'>Find Us</a></li>
                        <li><a href='#'>Support</a></li>
                        <li><a href='#'>Investor Relations</a></li>
                        <li><a href='#'><i className='iconglobe'><LanguageIcon /></i>United States</a></li>
                    </ul>
                </div>
                </div>
  )
}

export default Header