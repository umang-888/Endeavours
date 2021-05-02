import React from 'react';
import './HomePage.css';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <main>
                    <article>
                        <div className="illustration">
                            <img src="https://alcs-huddle.netlify.app/images/illustration-mockups.svg" alt="" />
                        </div>
                        <div className="content">
                            <h1>Build The Community Where You Can Be Nurtured</h1>
                            <p>We re-imagines the way we build communities. You have a voice, but so does your audience.
                            Create ideas to reality with our help.
                            </p>
                            <button><a href="http://localhost:3000/incubetee">Register</a></button>
                        </div>
                    </article>
                    <ul className="SocialMedia">
                        <li>
                            <a href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </main>
                <footer>

                </footer>
            </div>
        )
    }
}

export default HomePage;