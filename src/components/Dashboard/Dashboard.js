import React from 'react';

import axios from 'axios';

import './Dashboard.css';
import Card from './Card';
import img1 from '../../images/avatar1.webp';
import img2 from '../../images/avatar2.webp';
import img3 from '../../images/avatar4.webp';


class Dashboard extends React.Component {

    teamData = [];
    state = { to_enable: false };


    find_team_members = async () => {
        let user = localStorage.getItem('teamname');
        const response = await axios.get(`http://localhost:8080/api/login_incubetee/${user}`);
        console.log(response.data);
        return response.data;
    }

    onrenderList = () => {
        console.log(typeof (TeamData));
        let member1 = localStorage.getItem('member1');
        let member2 = localStorage.getItem('member2');
        let member3 = localStorage.getItem('member3');
        if (member1 !== "" && member2 !== "" && member3 !== "") {
            this.teamData = [
                {
                    id: 0,
                    img: img1,
                    name: member1,
                    score1: 89,
                    score2: 92,
                },
                {
                    id: 1,
                    img: img2,
                    name: member2,
                    score1: 91,
                    score2: 92,
                },
                {
                    id: 1,
                    img: img3,
                    name: member3,
                    score1: 88,
                    score2: 91,
                }
            ];
            return this.teamData.map((data) => {
                return (
                    <div className="cards">
                        <Card member={data} key={data.id} />
                    </div>
                )
            })
        } else {
            let user = this.find_team_members();
            let member1 = user.name_of_members[0];
            let member2 = user.name_of_members[1];
            let member3 = user.name_of_members[2];
            this.teamData = [
                {
                    id: 0,
                    img: img1,
                    name: member1,
                    score1: 89,
                    score2: 92,
                },
                {
                    id: 1,
                    img: img2,
                    name: member2,
                    score1: 91,
                    score2: 92,
                },
                {
                    id: 1,
                    img: img3,
                    name: member3,
                    score1: 88,
                    score2: 91,
                }
            ];
            return this.teamData.map((data) => {
                return (
                    <div className="cards">
                        <Card member={data} key={data.id} />
                    </div>
                )
            })
        }
    };

    componentDidMount() {
        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".nav");

        burger.addEventListener("click", () => {
            burger.classList.toggle("is-open");
            nav.classList.toggle("is-open");
        });
    }

    approved = () => {
        if (this.state.to_enable === false) {
            return <a>Chat</a>
        } else {
            return <a href="http://localhost:3000/chat">Chat</a>
        }
    }

    render() {
        return (
            <div class="app">
                <aside class="nav">
                    <div class="burger">
                        <span class="line"></span>
                    </div>
                    <div class="nav__logo">
                        <img src="https://assets.codepen.io/2709552/logo_1.svg" />
                    </div>
                    <ul class="menu">
                        <li class="menu__item" style={{ color: 'black' }}>
                            <span class="menu__icon">
                                <svg width="21" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.111 8.625a.71.71 0 00.497-.201l5.828-5.702 5.126 5.014a.71.71 0 00.994 0L19.88 1.55a.687.687 0 00.215-.489.674.674 0 00-.206-.492.705.705 0 00-.503-.201.717.717 0 00-.5.21l-5.828 5.7-5.126-5.013a.71.71 0 00-.994 0L.614 7.45a.683.683 0 00-.152.75.691.691 0 00.259.308.714.714 0 00.39.116zM14.113 13.438h-2.108a.348.348 0 00-.352.343v5.5c0 .19.157.344.352.344h2.108a.348.348 0 00.351-.344v-5.5a.348.348 0 00-.35-.344zM19.736 7.25h-2.109a.348.348 0 00-.351.344V19.28c0 .19.157.344.351.344h2.109a.348.348 0 00.351-.344V7.594a.348.348 0 00-.351-.344z" fill="#A4A8BD" />
                                    <path d="M8.49 7.25H6.382a.348.348 0 00-.351.344V19.28c0 .19.157.344.351.344H8.49a.348.348 0 00.352-.344V7.594a.348.348 0 00-.352-.344zM2.868 13.438H.76a.348.348 0 00-.352.343v5.5c0 .19.157.344.352.344h2.108a.348.348 0 00.351-.344v-5.5a.348.348 0 00-.351-.344z" fill="#A4A8BD" />
                                </svg> </span>Team Member
         </li>
                        <li class="menu__item" style={{ color: 'black' }}>
                            <span class="menu__icon">
                                <svg width="23" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.122 10.083h-1.406V5.958a.454.454 0 00-.137-.324.474.474 0 00-.663 0 .453.453 0 00-.137.324v4.125H9.373a.474.474 0 00-.33.135.453.453 0 00-.138.324v7.333c0 .122.05.238.137.324a.474.474 0 00.331.134h1.406v2.75c0 .122.05.239.137.324a.474.474 0 00.663 0 .453.453 0 00.137-.324v-2.75h1.406a.474.474 0 00.331-.134.453.453 0 00.137-.324v-7.333a.453.453 0 00-.137-.324.474.474 0 00-.331-.135zM5.625 3.208H4.219V1.833a.453.453 0 00-.137-.324.474.474 0 00-.662 0 .453.453 0 00-.138.324v1.375H1.877a.474.474 0 00-.332.135.453.453 0 00-.137.324v11c0 .121.05.238.137.324a.474.474 0 00.332.134h1.405v3.667c0 .121.05.238.138.324a.474.474 0 00.662 0 .454.454 0 00.137-.324v-3.667h1.406a.474.474 0 00.331-.134.454.454 0 00.138-.324v-11a.453.453 0 00-.138-.324.474.474 0 00-.331-.135zM20.618 6.417h-1.405V1.833a.454.454 0 00-.137-.324.474.474 0 00-.663 0 .453.453 0 00-.137.324v4.584H16.87a.474.474 0 00-.331.134.453.453 0 00-.137.324v10.542c0 .121.049.238.137.324a.474.474 0 00.331.134h1.406v2.292c0 .121.05.238.137.324a.474.474 0 00.663 0 .454.454 0 00.137-.324v-2.292h1.405a.474.474 0 00.332-.134.454.454 0 00.137-.324V6.875a.454.454 0 00-.137-.324.474.474 0 00-.332-.134z" fill="#A4A8BD" />
                                </svg> </span><a href="http://localhost:3000/todo">Daily Updates</a>
                        </li>
                        <li class="menu__item" style={{ color: 'black' }}>
                            <span class="menu__icon">
                                <svg width="23" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#prefix__prefix__clip0)" fill="#A4A8BD">
                                        <path d="M17.683 4.125a6.907 6.907 0 00-2.588-3.003 7.131 7.131 0 00-3.847-1.124c-1.367 0-2.705.39-3.848 1.124a6.906 6.906 0 00-2.588 3.003 4.974 4.974 0 00-3.463 1.448A4.758 4.758 0 00-.053 8.99a4.763 4.763 0 001.48 3.388 4.979 4.979 0 003.495 1.371h12.651a4.978 4.978 0 003.495-1.371 4.762 4.762 0 001.48-3.388 4.758 4.758 0 00-1.402-3.418 4.974 4.974 0 00-3.463-1.448zM11.95 18.002v-2.877h-1.405v2.877a2.099 2.099 0 00-1.116.9 2.025 2.025 0 00.46 2.621c.38.314.861.486 1.359.486.497 0 .978-.172 1.359-.486.38-.314.635-.749.719-1.228a2.025 2.025 0 00-.26-1.393 2.1 2.1 0 00-1.116-.9zm-7.028-2.877v1.783L3.74 18.093a2.155 2.155 0 00-2.205.19c-.37.268-.64.646-.771 1.077-.131.431-.115.893.045 1.315.16.421.456.781.843 1.024a2.16 2.16 0 002.543-.183 2.06 2.06 0 00.681-1.134c.096-.44.042-.899-.152-1.307l1.406-1.408a.68.68 0 00.198-.48v-2.062H4.922zm14.759 2.75a2.124 2.124 0 00-.926.218l-1.182-1.185v-1.783h-1.406v2.063c0 .18.071.352.2.48l1.405 1.409c-.19.405-.24.86-.144 1.296.096.436.334.83.679 1.122a2.144 2.144 0 002.523.177c.383-.242.676-.598.835-1.016a2.02 2.02 0 00.045-1.304 2.064 2.064 0 00-.762-1.069 2.14 2.14 0 00-1.267-.408z" />
                                    </g>
                                    <defs>
                                        <clipPath id="prefix__prefix__clip0">
                                            <path fill="#fff" transform="translate(.003)" d="M0 0h22.49v22H0z" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            {this.approved()}
                        </li>
                        <li class="menu__item" style={{ color: 'black' }}>
                            <span class="menu__icon">
                                <svg width="23" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.094 6.875c0-.434-.126-.858-.363-1.225a2.327 2.327 0 00-.976-.845 2.389 2.389 0 00-2.486.296c-.343.274-.6.638-.74 1.049-.14.411-.159.853-.053 1.274.106.421.332.804.652 1.104.32.3.72.506 1.154.593v2.832a3.37 3.37 0 01.469-.036c.157.001.313.013.468.036V9.121a2.347 2.347 0 001.293-.75l2.68 1.474c.114-.286.27-.555.461-.798L5.971 7.57c.078-.224.12-.46.123-.696zM19.213 12.88v-2.833c-.31.049-.627.049-.937 0v2.832a2.344 2.344 0 00-1.293.75l-2.68-1.474c-.113.286-.269.555-.46.798l2.68 1.476c-.077.224-.118.46-.122.696 0 .434.127.858.363 1.225.237.366.576.66.976.845a2.39 2.39 0 002.486-.296c.343-.274.6-.638.74-1.049.14-.411.159-.853.053-1.274a2.282 2.282 0 00-.652-1.104 2.36 2.36 0 00-1.154-.593zM15.808 16.893a3.195 3.195 0 01-.202-.416l-2.489 1.406a2.344 2.344 0 00-1.4-.879v-2.833c-.311.05-.628.05-.938 0v2.833a2.36 2.36 0 00-1.154.593c-.32.3-.546.683-.652 1.104-.106.42-.088.863.052 1.274.14.411.397.775.74 1.05a2.388 2.388 0 002.486.296c.401-.187.74-.48.976-.846.237-.367.363-.791.363-1.225a2.225 2.225 0 00-.07-.535l2.554-1.444a3.215 3.215 0 01-.266-.378zM6.688 5.107c.077.134.144.273.202.415l2.489-1.405c.34.45.839.764 1.4.879v2.833c.31-.049.627-.049.937 0V4.996a2.36 2.36 0 001.154-.593c.32-.3.546-.683.652-1.104a2.244 2.244 0 00-.052-1.274 2.291 2.291 0 00-.74-1.05A2.39 2.39 0 0010.243.68c-.4.187-.74.48-.976.846a2.255 2.255 0 00-.363 1.225c.002.18.026.36.071.535L6.422 4.73c.098.12.186.246.266.378zM11.248 13.292c1.294 0 2.343-1.026 2.343-2.292 0-1.266-1.05-2.292-2.343-2.292-1.294 0-2.343 1.026-2.343 2.292 0 1.266 1.05 2.292 2.343 2.292zM14.304 9.845l2.68-1.475c.31.348.719.597 1.175.713.456.117.937.096 1.381-.06.444-.156.829-.44 1.105-.814a2.25 2.25 0 00.066-2.583 2.326 2.326 0 00-1.062-.867 2.386 2.386 0 00-1.377-.128 2.353 2.353 0 00-1.21.655l-2.675-1.51a3.196 3.196 0 01-.202.415 3.21 3.21 0 01-.267.378l2.643 1.493a2.1 2.1 0 00-.037 1.509l-2.681 1.475c.192.243.347.512.46.799zM8.192 12.155l-2.68 1.475a2.346 2.346 0 00-1.175-.713 2.388 2.388 0 00-1.381.06c-.444.156-.83.44-1.105.814a2.25 2.25 0 00-.066 2.583c.256.387.627.69 1.062.867.435.177.915.222 1.376.128a2.353 2.353 0 001.21-.655l2.676 1.512c.057-.143.124-.282.202-.415.08-.132.169-.259.267-.379l-2.644-1.494a2.1 2.1 0 00.037-1.509l2.682-1.475a3.183 3.183 0 01-.46-.799z" fill="#A4A8BD" />
                                </svg> </span><a href="http://localhost:3000/about">About</a>
                        </li>
                    </ul>
                    <div class="nav__logout">
                        <a class="nav__link" href="#" style={{ color: 'black' }}>
                            <span class="icon">
                                <svg width="19" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.736 7.5h-4.6v3h4.6V15l7.668-6-7.668-6v4.5z" fill="#A4A8BD" />
                                    <path d="M3.07 3h6.133V0H3.069C2.256 0 1.476.316.901.879A2.967 2.967 0 00.003 3v12c0 .796.323 1.559.898 2.121A3.102 3.102 0 003.069 18h6.134v-3H3.069V3z" fill="#A4A8BD" />
                                </svg> </span><a href="http://localhost:3000/incubetee">Logout</a></a>
                    </div>
                </aside>
                <main class="main">
                    <header class="main__header">
                        <div class="main__search">
                            <input type="search" size="25" placeholder="Search" />
                            <span class="icon-search">
                                <svg width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.494 12.006a7.275 7.275 0 001.487-4.462C14.981 3.4 11.688 0 7.544 0S0 3.4 0 7.544s3.4 7.544 7.544 7.544c1.7 0 3.294-.532 4.462-1.488l3.188 3.188c.212.212.531.318.743.318.213 0 .532-.106.744-.319a1.027 1.027 0 000-1.487l-3.187-3.294zm-5.95.85c-2.975 0-5.419-2.337-5.419-5.312s2.444-5.419 5.419-5.419c2.975 0 5.419 2.444 5.419 5.419 0 2.975-2.444 5.312-5.42 5.312z" fill="#A4A8BD" />
                                </svg>
                            </span>
                        </div>
                        <div class="main__user">
                            <span class="main__icon">
                                <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="48" rx="11" fill="#fff" />
                                    <path d="M26 30h-4c0 1.1.9 2 2 2s2-.9 2-2zM31 27h-.5c-.7-.7-1.5-1.7-1.5-3v-3c0-2.8-2.2-5-5-5s-5 2.2-5 5v3c0 1.3-.8 2.3-1.5 3H17c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1z" fill="#A4A8BD" />
                                </svg>
                            </span>
                            <div class="main__title">
                                <h5 style={{ color: 'black' }}>{localStorage.getItem('username')}</h5>
                                <span class="icon">
                                    <svg width="11" height="6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.625.153L5.5 4.278 1.375.153l-.972.972 4.611 4.611a.687.687 0 00.972 0l4.611-4.611-.972-.972z" fill="#A4A8BD" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </header>
                    <div class="team">
                        <h1 style={{ color: 'black' }}>Team Members</h1>
                        <div class="team__setting">
                            <div class="team__icon">
                                <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 2.665h-5.333v2.667H16V2.665zM9.334 3.998a3.99 3.99 0 00-7.755-1.333H0v2.667h1.579a3.99 3.99 0 007.755-1.334zm-4 1.334a1.333 1.333 0 110-2.667 1.333 1.333 0 010 2.667zM5.333 10.665H0v2.667h5.333v-2.667zM10.667 7.998a4 4 0 103.755 5.334H16v-2.667h-1.578a4 4 0 00-3.755-2.667zm0 5.334a1.334 1.334 0 110-2.667 1.334 1.334 0 010 2.667z" fill="#A4A8BD" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    {this.onrenderList()}
                    <div class="pagination">
                        <div class="page">
                            <button class="arrow-left">
                                <svg width="37" height="37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x=".841" y=".841" width="35.318" height="35.318" rx="8.409" stroke="#A4A8BD" stroke-width="1.682" />
                                    <path d="M22 23.557l-4.722-4.722L22 14.113 20.887 13l-5.278 5.278a.787.787 0 000 1.113l5.278 5.279L22 23.557z" fill="#A4A8BD" />
                                </svg>
                            </button>
                            <div class="numb">1</div>
                            <span class="text">of</span>
                            <div class="numb">21</div>
                            <button class="arrow-right">
                                <svg width="37" height="37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="36.159" y="36.159" width="35.318" height="35.318" rx="8.409" transform="rotate(-180 36.16 36.16)" stroke="#A4A8BD" stroke-width="1.682" />
                                    <path d="M15 13.443l4.722 4.722L15 22.887 16.113 24l5.278-5.278a.787.787 0 000-1.113l-5.278-5.278L15 13.443z" fill="#A4A8BD" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Dashboard;