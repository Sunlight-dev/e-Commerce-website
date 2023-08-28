import { useState, useEffect } from 'react'
import Styles from './Nav.module.css'
import logo from '../../images/logo.png'
import { BsSearch } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import LogInButton from '../Login/LogInButton'
import Profile from '../Login/Profile'
import { useAuth0 } from '@auth0/auth0-react'; 
import LogOut from '../Login/LogOut'
import {useDispatch, useSelector} from 'react-redux'
import { getNameProducts } from '../../Redux/actions/actions'


export default function Nav() {
  const { isAuthenticated } = useAuth0()
  let name = useSelector( state => state.product_name[0])
  let dispatch = useDispatch()
  //dropdown para logout profile
    const [showMenu, setShowMenu] = useState(false);

    const handleMouseEnter = () => {
      setShowMenu(true);
    };
    
    const handleMouseLeave = () => {
      setShowMenu(false);
    };
//buscar por nombre redux
    let [inputSearch, setInputSearch] = useState('')
    let handleSearch = (e)=>{
      let {value} = e.target
      
      setInputSearch( value )
    }
    let dispatchSearch = ()=>{
      dispatch(getNameProducts(inputSearch))
      
    }
    


  return (
    <div className={Styles.wrapper}>
      <div className={`${Styles.col_5}`}>
        <div className={`${Styles.div_logo} ${Styles.col_3}`}>
          <NavLink to="/">
            <img src={logo} alt="logo" className={`${Styles.logo}`} />
          </NavLink>
        </div>
        <div className={` ${Styles.col_1}`}>
          <NavLink to="/">
            <button className={`${Styles.background} ${Styles.font}`}>
              Inicio
            </button>
          </NavLink>
        </div>
        <div className={`${Styles.col_3}`}>
          <div className={Styles.dropdown}>
            <NavLink to="/products">
              <button
                className={`${Styles.background} ${Styles.dropdownToggle}`}
              >
                Products
              </button>
            </NavLink>
            <div className={`${Styles.dropdownMenu}`}>
              <div className={Styles.dropdownHeader}>Discos Duros</div>
              <a href="#" className={Styles.dropdownItem}>
                SSD
              </a>
              <a href="#" className={Styles.dropdownItem}>
                Rígido
              </a>
            </div>
          </div>
        </div>
        <div className={` ${Styles.col_1}`}>
          <h6 className={Styles.font}>Ayuda</h6>
        </div>
        <div className={` ${Styles.col_4}`}>
          <h6 className={Styles.font}>Sobre Nosotros</h6>
        </div>
      </div>
      <div className={` ${Styles.col_4}`}>
        <div className={`${Styles.col_search} `}>
          <input
            type="text"
            placeholder="Buscar"
            className={`${Styles.searchInput}`}
            onChange={handleSearch}
          />
          <NavLink to={`/products/`}
           onClick={dispatchSearch} className={`${Styles.searchButton}`}>
            <BsSearch />
          </NavLink>
        </div>
      </div>
      <div className={` ${Styles.col_2}`}>
        <div className={Styles.container_btn}>
          <div className={` ${Styles.containerLogin}`}>
          {
            !isAuthenticated ? (
              <div className={Styles.div_not_auth}>

               <LogInButton/>
                <button className={`${Styles.actionButton} ${Styles.create}`}>
                Sign Up
                </button>
              </div>
            ) : (
              <div className={Styles.div_auth} onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
                <Profile />
                 {
                 showMenu && (
                  <div className={Styles.drop_user}>
                    
                      <LogOut className={Styles.btn_logout} />
                      <p>Option</p>
                      <p>Option</p>
                      <p>Option</p>
                  </div>
                 )
                 }
              
              </div>
                )

              
                
          }
          
           
               
           
          </div>
          <div className={`${Styles.containerCreate}`}>
            
          </div>
        </div>
      </div>
      {/* {isLoginModalOpen && (
        <Login isOpen={isLoginModalOpen} onClose={closeLoginModal} />
      )} */}
    </div>
  )
}
