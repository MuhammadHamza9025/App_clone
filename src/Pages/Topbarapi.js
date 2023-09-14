
import RssFeedOutlinedIcon from '@material-ui/icons/RssFeedOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import DuoOutlinedIcon from '@material-ui/icons/DuoOutlined';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';

import SchoolIcon from '@material-ui/icons/School';


import accountpic from '../Pictures/accountpic.jpeg'
import pic2 from '../Pictures/2.jpeg'
import pic3 from '../Pictures/3.jpeg'
import pic4 from '../Pictures/4.jpeg'
import pic5 from '../Pictures/5.jpeg'
import pic6 from '../Pictures/6.jpeg'
import pic7 from '../Pictures/7.jpeg'
import pic8 from '../Pictures/8.jpeg'
import pic9 from '../Pictures/9.jpeg'
import pic10 from '../Pictures/10.jpeg'

import pic21 from '../Pictures/21.jpeg'
import pic11 from '../Pictures/11.jpeg'
import pic31 from '../Pictures/31.jpeg'
import pic41 from '../Pictures/41.jpeg'
import pic51 from '../Pictures/51.jpeg'
import pic61 from '../Pictures/61.jpeg'
import pic71 from '../Pictures/71.jpeg'
import pic81 from '../Pictures/81.jpeg'
import pic91 from '../Pictures/91.jpeg'
import pic101 from '../Pictures/101.jpeg'



import CollectionsIcon from '@material-ui/icons/Collections';
import LabelIcon from '@material-ui/icons/Label';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
const array1 = [
    {
        logo: < RssFeedOutlinedIcon></RssFeedOutlinedIcon>,
        title: 'Feed'

    },
    {
        logo: <ForumOutlinedIcon />,
        title: 'Chat'

    },
    {
        logo: <PeopleAltOutlinedIcon />,
        title: 'Videos'

    },
    {
        logo: <DuoOutlinedIcon />,
        title: 'Group'

    },
    {
        logo: < BookmarksOutlinedIcon />,
        title: 'Bookmark'

    },
    {
        logo: <QuestionAnswerOutlinedIcon />,
        title: 'Question'

    },
    {
        logo: <WorkOutlineOutlinedIcon />,
        title: 'Jobs'

    },
    {
        logo: <EventAvailableOutlinedIcon />,
        title: 'Events'

    },
    {
        logo: <SchoolIcon />,
        title: 'Courses'

    },
];
export default array1;

const array2 = [

    {
        pic: accountpic,
        title: 'jessica'
    },
    {
        pic: pic2,
        title: 'Alijaksam'
    },
    {
        pic: pic3,
        title: 'jassio'
    },
    {
        pic: pic4,
        title: 'Hamio'
    },
    {
        pic: pic5,
        title: 'Gotham'
    },
    {
        pic: pic6,
        title: 'Johnas'
    },
    {
        pic: pic7,
        title: 'Commando'
    },
    {
        pic: pic8,
        title: 'John Cena'
    },
    {
        pic: pic9,
        title: 'JOhn'
    },
    {
        pic: pic10,
        title: 'Ben Stokes'
    },


];

export { array2 }

const array3 = [

    {
        logo: < CollectionsIcon />,
        title: 'Photos'

    },

    {
        logo: < LabelIcon

        />,
        title: 'Tag'

    },

    {
        logo: < LocationOnIcon />,
        title: 'Location'

    },

    {
        logo: < InsertEmoticonIcon />,
        title: 'Feelings'

    },
]
export {
    array3, Posts, Posts2
}



const Posts = [
    {
        id: 1,
        desc: "Love For All, Hatred For None.",
        photo: pic11,
        title: 'jessica',
        pic2: pic2,
        date: "5 mins ago",
        userId: 1,
        like: 32,
        comment: 9,
    },
    {
        id: 2,
        photo: pic21,
        pic2: pic3,
        date: "15 mins ago",
        title: 'jessica',
        desc: "Never regret anything that made you smile.",

        userId: 2,
        like: 2,
        comment: 1,
    },
    {
        id: 3,
        desc: "Every moment is a fresh beginning.",
        photo: pic31,
        date: "1 hour ago",
        title: 'jessica',

        userId: 3,
        pic2: pic4,
        like: 61,
        comment: 2,
    },
    {
        id: 4,
        pic2: pic5,
        title: 'jessica',
        desc: "Never regret anything that made you smile.",

        photo: pic41,
        date: "4 hours ago",
        userId: 4,
        like: 7,
        comment: 3,
    },
    {
        id: 5,
        pic2: pic6,
        title: 'jessica',

        photo: pic51,
        desc: "Never regret anything that made you smile.",

        date: "5 hours ago",
        userId: 5,
        like: 23,
        comment: 5,
    },
    {
        id: 6,
        photo: pic61,
        date: "1 day ago",
        title: 'jessica',
        desc: "Never regret anything that made you smile.",

        userId: 6,
        pic2: pic7,
        like: 44,
        comment: 6,
    },
    {
        id: 7,
        pic2: pic8,
        desc: "Never regret anything that made you smile.",
        photo: pic71,
        date: "2 days ago",
        title: 'jessica',

        userId: 7,
        like: 52,
        comment: 3,
    },
    {
        id: 8,
        photo: pic81,
        date: "3 days ago",
        userId: 8,
        like: 15,
        title: 'jessica',
        desc: "Change the world by being yourself.",

        pic2: pic9,
        comment: 1,
    },
    {
        id: 9,
        desc: "Change the world by being yourself.",
        photo: pic91,
        pic2: pic10,
        date: "5 days ago",
        userId: 9,
        like: 11,
        title: 'jessica',

        comment: 2,
    },
    {
        id: 10,
        desc: "Change the world by being yourself.",
        pic2: accountpic,
        photo: pic101,
        date: "1 week ago",
        userId: 10,
        title: 'jessica',

        like: 104,
        comment: 12,
    },
];




const Posts2 = [
    {
        id: 1,
        desc: "Love For All, Hatred For None.",
        photo: pic11,
        title: 'jessica',
        pic2: pic2,
        date: "5 mins ago",
        userId: 1,
        like: 32,
        status: true,
        comment: 9,
    },
    {
        id: 2,
        photo: pic21,
        pic2: pic3,
        status: true,
        date: "15 mins ago",
        title: 'jessica',
        desc: "Never regret anything that made you smile.",

        userId: 2,
        like: 2,
        comment: 1,
    },
    {
        id: 3,
        desc: "Every moment is a fresh beginning.",
        photo: pic31,
        date: "1 hour ago",
        title: 'jessica',
        status: false,

        userId: 3,
        pic2: pic4,
        like: 61,
        comment: 2,
    },
    {
        id: 4,
        pic2: pic5,
        status: false,
        title: 'jessica',
        desc: "Never regret anything that made you smile.",

        photo: pic41,
        date: "4 hours ago",
        userId: 4,
        like: 7,
        comment: 3,
        status: false,
    },
    {
        id: 5,
        pic2: pic6,
        title: 'jessica',

        photo: pic51,
        desc: "Never regret anything that made you smile.",

        date: "5 hours ago",
        userId: 5,
        like: 23,
        comment: 5,
        status: true,
    },
    {
        id: 6,
        photo: pic61,
        date: "1 day ago",
        title: 'jessica',
        desc: "Never regret anything that made you smile.",

        userId: 6,
        status: false,
        pic2: pic7,
        like: 44,
        comment: 6,
    },
    {
        id: 7,
        pic2: pic8,
        desc: "Never regret anything that made you smile.",
        photo: pic71,
        date: "2 days ago"
        ,
        status: true,
        title: 'jessica',

        userId: 7,
        like: 52,
        comment: 3,
        status: false,
    },
    {
        id: 8,
        photo: pic81,
        date: "3 days ago",
        userId: 8,
        like: 15,
        status: false,
        title: 'jessica',
        desc: "Change the world by being yourself.",

        pic2: pic9,
        comment: 1,
    },
    {
        id: 9,
        desc: "Change the world by being yourself.",
        photo: pic91,
        pic2: pic10,
        status: true,
        date: "5 days ago",
        userId: 9,
        like: 11,
        title: 'jessica',

        comment: 2,
    },
    {
        id: 10,
        desc: "Change the world by being yourself.",
        pic2: accountpic,
        photo: pic101,
        status: true,
        date: "1 week ago",
        userId: 10,
        title: 'jessica',

        like: 104,
        comment: 12,
    },
];