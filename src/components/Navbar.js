import React from 'react'
import Avatar from '../Avatar'
let username = 'Francisco'
let url = 'https://i.pravatar.cc/150?img=39'

function Navbar() {
    return (
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img 
                    src={url} width="30" height="30" 
                    class="d-inline-block align-top rounded-circle mr-3" />
                 {username} 
            </a>
        </nav>
    )
}

export default Navbar