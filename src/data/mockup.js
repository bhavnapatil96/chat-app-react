import moment from "moment";
export const groups = [
    {
        id: 1,
        name: 'Team Unicorns',
        icon: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg'
    }
];

export const userData = [
    {
        id: '1',
        name: 'Jav',
        dept: 'Engineering',
        username: '@janet',
        profile: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        groupId: [1, 2]
    },
    {
        id: '2',
        name: 'Abrey',
        dept: 'Product',
        username: '@Abrey',
        profile: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        groupId: [1, 2]
    },
    {
        id: '3',
        name: 'Dan',
        dept: 'Engineering',
        username: '@dan',
        profile: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        groupId: [1]
    }
];

export const messages = [
    {
        id: '1',
        text: 'Hello',
        from: '3',
        status: 'seen',
        time: moment()
    },
    {
        id: '2',
        text: 'Hi, hello',
        from: '2',
        status: 'seen',
        time: moment().add(moment.duration(2, 'minutes'))
    },
    {
        id: '3',
        text: 'Nice to meet you',
        from: '1',
        status: 'seen',
        time: moment().add(moment.duration(5, 'minutes'))
    },
    {
        id: '4',
        text: 'Good to see you',
        from: '1',
        status: 'seen',
        time: moment().add(moment.duration(10, 'minutes'))
    },
    {
        id: '5',
        text: 'Bye',
        from: '2',
        status: 'seen',
        time: moment().add(moment.duration(15, 'minutes'))
    },
    {
        id: '6',
        text: 'Bye',
        from: '3',
        status: 'seen',
        time: moment().add(moment.duration(17, 'minutes'))
    },
];