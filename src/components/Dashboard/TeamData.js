import img1 from '../../images/avatar1.webp';
import img2 from '../../images/avatar2.webp';
import img3 from '../../images/avatar4.webp';

const TeamData = [
    {
        id: 0,
        img: img1,
        name: localStorage.getItem('username'),
        score1: 89,
        score2: 92,
    },
    {
        id: 1,
        img: img2,
        name: 'Himanshu',
        score1: 91,
        score2: 92,
    },
    {
        id: 1,
        img: img3,
        name: 'Rastogi',
        score1: 88,
        score2: 91,
    }
];

export default TeamData;