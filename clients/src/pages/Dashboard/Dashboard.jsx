import DashPro from '../../components/Dashboard/DashPro'
import { useAuth0 } from '@auth0/auth0-react'; 
import NotFound from '../NotFound/NotFound'
import Nav from '../../components/navBar/Nav';
import Footer from '../../components/Footer/Footer';
import Styles from './Dashboard.module.css'

export default function Dashboard() {
    const { isAuthenticated} = useAuth0()
  return (
    <div>
      <Nav/>
      <div className={Styles.body}>

        {isAuthenticated ?(
          <DashPro></DashPro>
          ):(
            <NotFound/>
          )
        }            
        </div>
      <Footer/>
    </div>
  )
}
