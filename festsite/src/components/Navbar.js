import React from 'react'
import navlogo from "../assets/images/navLogo.png"
import "../assets/style/core.css"

function Navbar() {
    return (
        <>
            <nav class="navbar custom-nav navbar-expand-lg  bg-transparent shadow-sm ">
                <div class="container">
                    <a class="navbar-brand" href="/">
                        <img src={navlogo} height="50"></img>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item px-3">
                                <a class="nav-link" href="https://klebcahubli.in/">Home</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link" href="/#about">Abhigyan 1.0</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link" href="/#events">Events</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link text-white" href="/#registration">Registration</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link" href="/#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar