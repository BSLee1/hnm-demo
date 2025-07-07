import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const menuList = ['여성', 
    'Divided', 
    '남성', 
    '신생아/유아', 
    '아동', 
    'H&M Home', 
    'Sale', 
    '지속가능성'
	]

	const navigate = useNavigate()
  
	const gotoLoginPage = () => {
		navigate("/login")	
	}

	const onSearchKeyword = (e) => {
		const enterKeyCode = 13
		if(e.keyCode === enterKeyCode) {
			navigate(`?q=${e.target.value}`)
		}
	}

  return (
    <div>
        <div>
            <div className='login-button' onClick={gotoLoginPage}>
                <FontAwesomeIcon icon={faUser} />
                <div>로그인</div>
            </div>
        </div>
        <div className='nav-section'>
            <img
              width={100}
              src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
            />
        </div>
        <div className='menu-area'>
            <ul className='menu-list'>
                {menuList.map((menu, index) => (
                    <li key={index}>{menu}</li>
                ))}
            </ul>
            <div className='search-area'>
                <FontAwesomeIcon icon={faSearch} />
                <input type='text' placeholder='Search' onKeyDown={onSearchKeyword} />
            </div>
        </div>
    </div>
  )

}

export default Navbar