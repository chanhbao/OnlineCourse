import React from 'react'
import './header.scss'
import logo from '../../assets/images/logof8.png'

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header_logo">
                    <a href="/">
                        <img src={logo} alt="" />
                    </a>
                    <h4 className="header_logoHeading">Học Lập Trình Để Đi Làm</h4>
                </div>
                <div className="header_body">
                    <div>
                        <div className="Search_wrapper" aria-expanded="false">
                            <div className="Search_searchIcon"></div>
                            <input type="text" className="Search_input" spellcheck='false' placeholder='Tìm kiếm khóa học, bài viết, video, ...' />
                        </div>
                    </div>
                </div>
                <div className="header_action">
                    <div className="navbar-actions-portal"></div>
                    <a href="/" className="header_loginBtn">Đăng nhập</a>
                </div>
            </div>
        </>

    )
}

export default Header
