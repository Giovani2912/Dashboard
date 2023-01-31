import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...'/>
          <SearchIcon />
        </div>

        <div className="items">
          <div className="item">
            <LanguageIcon />
            English
          </div>

          <div className="item">
            <DarkModeIcon />
          </div>

          <div className="item">
            <FullscreenIcon />
          </div>

          <div className="item">
            <CircleNotificationsIcon />
            <div className="counter">1</div>
          </div>

          <div className="item">
            <ChatBubbleIcon />
            <div className="counter">3</div>
          </div>

          <div className="item">
            <FormatListNumberedIcon />
          </div>

          <div className="item">
            <img 
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar