
document.addEventListener('DOMContentLoaded', function () {
// Toggle Navigation Bar
const navbar = document.getElementById('navbar');
const toggleBtn = document.getElementById('toggleBtn');
let isNavbarVisible = true;

toggleBtn.addEventListener('click', function () {
    isNavbarVisible = !isNavbarVisible;
    navbar.style.display = isNavbarVisible ? 'flex' : 'none';
});

// Like and Dislike Buttons
const likeBtn = document.getElementById('likeBtn');
const dislikeBtn = document.getElementById('dislikeBtn');
const resetBtn = document.getElementById('resetBtn');
const counterDisplay = document.getElementById('counterDisplay');
let counter = 0;

likeBtn.addEventListener('click', function () {
    counter += 2;
    updateCounterColor();
});

dislikeBtn.addEventListener('click', function () {
    counter -= 1;
    updateCounterColor();
});

resetBtn.addEventListener('click', function () {
    counter = 0;
    updateCounterColor();
});

function updateCounterColor() {
    counterDisplay.textContent = counter;

    if (counter > 0) {
        counterDisplay.style.color = 'blue';
    } else if (counter < 0) {
        counterDisplay.style.color = 'red';
    } else {
        counterDisplay.style.color = 'black';
    }

}


// Color Flip Button
const colorFlipBtn = document.getElementById('colorFlipBtn');
const colorSchemes = ['#DDD6D5', '#BEE7F8', '#FFFFFF', '#FED1BB'];
let currentColorSchemeIndex = 0;

colorFlipBtn.addEventListener('click', function () {
    document.body.style.backgroundColor = colorSchemes[currentColorSchemeIndex];
    currentColorSchemeIndex = (currentColorSchemeIndex + 1) % colorSchemes.length;
});

// Employee Statements Button
const employeeBtn = document.getElementById('employeeBtn');
const employeeContent = document.getElementById('content');
const employeeStatements = [
    {
    
        image: 'https://michelinewalker.files.wordpress.com/2015/10/1.png',
        text: 'I love working at Air Canada! The atmosphere is fantastic.',
        title: 'Justin Trudeau'
    },
    {
        image: 'https://d3g9pb5nvr3u7.cloudfront.net/authors/55dde358d08f49051bf9fa13/776572881/256.jpg',
        text: 'Im only doing this job because.. It helps me earn money.',
        title: 'Software Developer'
    },
];

let currentEmployeeIndex = 0;

employeeBtn.addEventListener('click', () => {
        const statement = employeeStatements[currentEmployeeIndex];
        const statementHtml = `
        <div class="employee-statement">
            <img src="${statement.image}" alt="Employee Image" class="employee-image">
            <p>${statement.text}</p>
            <p><strong>${statement.title}</strong></p>
        </div>
    `;

        employeeContent.innerHTML = statementHtml;
        currentEmployeeIndex = (currentEmployeeIndex + 1) % employeeStatements.length;
    });

// Special Button
const specialBtn = document.getElementById('specialBtn');

specialBtn.addEventListener('click', function () {
    alert('This button does something special and unique!');
});
})