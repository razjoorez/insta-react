import React from 'react';
import './Sidenav.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';

function Sidenav() {
  return (
    <div className='sidenav'>
        <div className='sidenav__logo'>
            instaReact
        </div>
        <div className='sidenav__buttons'>
            <div className='side__button'>
                <HomeIcon/>
                <span>Home</span>
            </div>
            <div className='side__button'>
                <SearchIcon/>
                <span>Search</span>

            </div>
            <div className='side__button'>
                <ExploreIcon/>
                <span>Explore</span>
            </div>
        </div>
    </div>
  )
}

export default Sidenav