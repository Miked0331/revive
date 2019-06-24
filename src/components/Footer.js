import React from 'react'
import './App.css'

const style = {
    backgroundColor: 'green'
}


const Footer = () => {
    return (
        <div>
            <hr className="hr" style={style}></hr>
            <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
                <small className="f6 db tc">© 2019 <b class="ttu">REVIVE COFFEE Inc</b>., All Rights Reserved</small>
                <div className="tc mt3">
                    <p title="Language" class="f6 dib ph2 link mid-gray dim">Language</p>
                    <p title="Terms" class="f6 dib ph2 link mid-gray dim">Terms of Use</p>
                    <p title="Privacy" class="f6 dib ph2 link mid-gray dim">Privacy</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer