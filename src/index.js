const clickLeft = document.querySelector('#left');
const clickRight = document.querySelector('#right');
const userImage = document.querySelector('#image');
const userName = document.querySelector('#name');
const userJob = document.querySelector('#job');
const userText = document.querySelector('#text');

const randomUser = [
    {
        id: 1,
        name: 'Susan Smith',
        Job: 'web developer',
        img: 'https://cdn-icons-png.flaticon.com/512/219/219983.png',
        text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum a provident quod facere quos, architecto fuga non officiis nobis suscipit neque et sunt delectus aut incidunt beatae nemo magni facilis Perferendis excepturi dignissimos impedit totam pariatur id praesentium non ad a tempore error veritatis quibusdam, repellendus voluptatibus nobis! Totam blanditiis sit in dolore non corrupti reiciendis fugiat nesciunt ut odit?',
    },
    {
        id: 2,
        name: 'Susan',
        Job: 'developer',
        img: 'https://cdn-icons-png.flaticon.com/512/219/219983.png',
        text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum a provident quod facere quos, architecto fuga non officiis nobis suscipit neque et sunt delectus aut incidunt beatae nemo magni facilis Perferendis excepturi dignissimos impedit totam pariatur id praesentium non ad a tempore error veritatis quibusdam, repellendus voluptatibus nobis! Totam blanditiis sit in dolore non corrupti reiciendis fugiat nesciunt ut odit?',
    },
    {
        id: 3,
        name: 'Smith',
        Job: 'web developer',
        img: 'https://cdn-icons-png.flaticon.com/512/219/219983.png',
        text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum a provident quod facere quos, architecto fuga non officiis nobis suscipit neque et sunt delectus aut incidunt beatae nemo magni facilis Perferendis excepturi dignissimos impedit totam pariatur id praesentium non ad a tempore error veritatis quibusdam, repellendus voluptatibus nobis! Totam blanditiis sit in dolore non corrupti reiciendis fugiat nesciunt ut odit?',
    }
];

clickLeft.addEventListener('click', () => {
    let number = Math.floor(Math.random()*3);

    let user = randomUser[number];

    userImage.innerHTML = user.img;
    userName.innerHTML = `${userName}`;
    userJob.innerHTML = userJob;
    userText.innerHTML = userText;
});

clickRight.addEventListener('click', () => {
    console.log('clicked again');
})