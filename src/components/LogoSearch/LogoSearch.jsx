import React, { useState,useEffect} from 'react'
import Logo from '../../img/logo.png'
import { UilSearch } from '@iconscout/react-unicons'
import './LogoSearch.css'
import { useNavigate } from 'react-router-dom'
import { searchUser } from '../../api/usersApi'
import { Link } from 'react-router-dom'

const LogoSearch = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]); 
  useEffect(() => {
    const fetchData = async () => {
      const userData = await searchUser(query);
      console.log(data,'kitti')
      setData(userData.data);
    };
    if ( query.length >=1) fetchData();
    
  }, [query]);
  const navigate = useNavigate()
console.log(data,"this is data")
  return (
      <div className='LogoSearch dropdown'>
      <img src={Logo} onClick={() => navigate('/')} alt="" />
          <div className='Search'>
              <input type='text' placeholder='#explore' onChange={(e) => setQuery(e.target.value.toLowerCase())}/>
              <div className='s-icon'>
                  <UilSearch/>
              </div>
      </div>
      <div class="dropdown-content">
      {
       
          data.map((person) => (
        <>
      <Link key={person._id}  style={{textDecoration:"none", color : "inherit"}} to={`/profile/${person._id}`}>
                {person.userName}
                </Link>
      <hr />
      </>
      )) 

      }
    
    
  </div>
    </div>
  )
}

export default LogoSearch