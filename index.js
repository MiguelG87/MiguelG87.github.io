//Collapse-Navbar
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
navToggle.addEventListener("click", (e) => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        console.log("open")
        primaryNav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
        console.log("close")
    }
});


//Get Current Section
const sections = document.querySelectorAll('section');

function getCurrentSection() {
    const sections = document.querySelectorAll('section');
    let closestSection = null;
    let smallestDistance = Number.MAX_SAFE_INTEGER;

    sections.forEach(section => {
        const bounding = section.getBoundingClientRect();
        const distance = Math.abs(bounding.top);

        if (distance < smallestDistance) {
            closestSection = section;
            smallestDistance = distance;
        }
    });

    return closestSection ? closestSection.id : null;
}


//highlight section scroll event listener
const element = document.getElementById('main');
let lastScrollPosition = 0;
let scrollTimeout;
element.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    const currentScrollPosition = element.scrollTop;
    if (currentScrollPosition !== lastScrollPosition) {
        lastScrollPosition = currentScrollPosition;
        scrollTimeout = setTimeout(() => {
            const currentId = getCurrentSection();
            const currentLink = document.querySelector(`a[href="#${currentId}"]`);
            const otherLinks = document.querySelectorAll('a.current[href="#"]');
            otherLinks.forEach(link => {
                if (link.getAttribute('href') !== "#" + currentId) {
                    link.classList.remove('current');
                }
            });
            if (currentLink) {
                const otherLinksNotMatching = document.querySelectorAll(`a[href^="#"]:not([href="#${currentId}"])`);
                otherLinksNotMatching.forEach(link => {
                    link.classList.remove('current');
                });

                currentLink.classList.add('current');
            }
        }, 100);

    }
});

function clearInput() {
    document.getElementById("contact-form").reset();

}

const button = document.getElementById('neon');
const colors = ['#2196f3', '#00C2BA', '#FAEA48', '#FE1438', '#A91079', '#FFACFC'];
const neonColors = ['#2196f3', '#00C2BA', '#FAEA48', '#FE1438', '#A91079', '#FFACFC'];
const neon = document.querySelector(".neon");
const neonHover = document.querySelector(".landing a");
const neon1 = document.querySelector(".neon1");
const neon2 = document.querySelector(".neon2");
const neon3 = document.querySelector(".neon3");
const neon4 = document.querySelector(".neon4");
const neonButtonColors1 = ['#2196f3', '#00C2BA', '#FAEA48', '#FE1438', '#A91079', '#FFACFC'];
const neonButtonColors2 = ['#255784', '#037A90', '#FBB454', '#400000', '#2E0249', '#F148FB'];
const navElement = document.querySelector('nav');
const navItems = navElement.querySelectorAll('a');
const background = document.querySelector('.background');
const inputElement = document.querySelectorAll("input, textarea");
const neonBackgroundColor1 = [
    'linear-gradient(90deg, transparent, #2196f3)',
    'linear-gradient(90deg, transparent, #00C2BA)',
    'linear-gradient(90deg, transparent, #FAEA48)',
    'linear-gradient(90deg, transparent, #FE1438)',
    'linear-gradient(90deg, transparent, #A91079)',
    'linear-gradient(90deg, transparent, #FFACFC)'
]
const neonBackgroundColor2 = [
    'linear-gradient(270deg, transparent, #2196f3)',
    'linear-gradient(270deg, transparent, #00C2BA)',
    'linear-gradient(270deg, transparent, #FAEA48)',
    'linear-gradient(270deg, transparent, #FE1438)',
    'linear-gradient(270deg, transparent, #A91079)',
    'linear-gradient(270deg, transparent, #FFACFC)'
]
const neonBackgroundColor3 = [
    'linear-gradient(180deg, transparent, #2196f3)',
    'linear-gradient(180deg, transparent, #00C2BA)',
    'linear-gradient(180deg, transparent, #FAEA48)',
    'linear-gradient(180deg, transparent, #FE1438)',
    'linear-gradient(180deg, transparent, #A91079)',
    'linear-gradient(180deg, transparent, #FFACFC)'
]
const neonBackgroundColor4 = [
    'linear-gradient(360deg, transparent, #2196f3)',
    'linear-gradient(360deg, transparent, #00C2BA)',
    'linear-gradient(360deg, transparent, #FAEA48)',
    'linear-gradient(360deg, transparent, #FE1438)',
    'linear-gradient(360deg, transparent, #A91079)',
    'linear-gradient(360deg, transparent, #FFACFC)'
]
const neonBoxShadowColor = [
    '0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3',
    '0 0 10px #00C2BA, 0 0 40px #00C2BA, 0 0 80px #00C2BA',
    '0 0 10px #FAEA48, 0 0 40px #FAEA48, 0 0 80px #FAEA48',
    '0 0 10px #FE1438, 0 0 40px #FE1438, 0 0 80px #FE1438',
    '0 0 10px #A91079, 0 0 40px #A91079, 0 0 80px #A91079',
    '0 0 10px #FFACFC, 0 0 40px #FFACFC, 0 0 80px #FFACFC'
]
const backgroundColor = [
    'inset 0 0 50px rgba(37, 87, 132, 1)',
    'inset 0 0 50px rgba(3, 122, 144, 1)',
    'inset 0 0 50px rgba(251, 180, 84, 1)',
    'inset 0 0 50px rgba(255, 100, 100, 1)',
    'inset 0 0 50px rgba(46, 2, 73, 1)',
    'inset 0 0 50px rgba(241, 72, 251, 1)',
];
const borderColor = [
    '3px solid rgba(37, 87, 132, 1)',
    '3px solid rgba(3, 122, 144, 1)',
    '3px solid rgba(251, 180, 84, 1)',
    '3px solid rgba(255, 100, 100, 1)',
    '3px solid rgba(46, 2, 73, 1)',
    '3px solid rgba(241, 72, 251, 1)'
]
const cssThemes = [
    '/css/theme1.css',
    '/css/theme2.css',
    '/css/theme3.css',
    '/css/theme4.css',
    '/css/theme5.css',
    '/css/theme6.css',

]
function loadCSS() {
    const head = document.head;
    // Remove previously loaded CSS file, if any
    const previousLink = document.querySelector('link[data-css]');
    if (previousLink) {
        head.removeChild(previousLink);
    }
    // Create and append the new CSS file
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssThemes[currentIndex];
    head.appendChild(link);
}
const htmlThemes = [
    function theme1Container() {
        const theme1HTML = `
    <div id="stars-container">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  `;

        const backgroundDiv = document.querySelector('.background');
        backgroundDiv.innerHTML = ''; // Clear the existing content
        backgroundDiv.innerHTML = theme1HTML;
    },
    function theme2Container() {
        const theme2HTML = `
    <div class="ocean">
       <div class="wave"></div>
       <div class="wave"></div>
    </div>
  `;

        const backgroundDiv = document.querySelector('.background');
        backgroundDiv.innerHTML = ''; // Clear the existing content
        backgroundDiv.innerHTML = theme2HTML;
    },
    function theme3Container() {
        const theme3HTML = `
    <div id="particle-container">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
    </div>
  `;

        const backgroundDiv = document.querySelector('.background');
        backgroundDiv.innerHTML = ''; // Clear the existing content
        backgroundDiv.innerHTML = theme3HTML;
    },
    function theme4Container() {
        const theme4HTML = `
    <div class="theme4"></div>
  `;

        const backgroundDiv = document.querySelector('.background');
        backgroundDiv.innerHTML = ''; // Clear the existing content
        backgroundDiv.innerHTML = theme4HTML;
    },
    function theme5Container() {
        const theme5HTML = `
    <div>
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
    </div>
  `;

        const backgroundDiv = document.querySelector('.background');
        backgroundDiv.innerHTML = ''; // Clear the existing content
        backgroundDiv.innerHTML = theme5HTML;
    },
    function theme6Container() {
        const theme6HTML = `
    <div class='light x1'></div>
    <div class='light x2'></div>
    <div class='light x3'></div>
    <div class='light x4'></div>
    <div class='light x5'></div>
    <div class='light x6'></div>
    <div class='light x7'></div>
    <div class='light x8'></div>
    <div class='light x9'></div>
  `;

        const backgroundDiv = document.querySelector('.background');
        backgroundDiv.innerHTML = ''; // Clear the existing content
        backgroundDiv.innerHTML = theme6HTML;
    }
]
let currentIndex = 0;
neon.style.color = neonButtonColors1[currentIndex];
neon1.style.background = neonBackgroundColor1[currentIndex];
neon2.style.background = neonBackgroundColor2[currentIndex];
neon3.style.background = neonBackgroundColor3[currentIndex];
neon4.style.background = neonBackgroundColor4[currentIndex];
background.style.boxShadow = backgroundColor[currentIndex];
htmlThemes[currentIndex]();
loadCSS();
inputElement.forEach(element => {
    element.style.border = borderColor[currentIndex];
})
button.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % colors.length;
    htmlThemes[currentIndex]();
    loadCSS();
    neonHover.style.color = neonButtonColors2[currentIndex] + 1;
    neonHover.style.background = neonButtonColors1[currentIndex];
    neonHover.style.boxShadow = neonBoxShadowColor[currentIndex];
    neon1.style.background = neonBackgroundColor1[currentIndex];
    neon2.style.background = neonBackgroundColor2[currentIndex];
    neon3.style.background = neonBackgroundColor3[currentIndex];
    neon4.style.background = neonBackgroundColor4[currentIndex];
    background.style.boxShadow = backgroundColor[currentIndex];
    document.body.style.color = colors[currentIndex];
    inputElement.forEach(element => {
        element.style.border = borderColor[currentIndex];
    })
    navItems.forEach(element => {
        element.style.color = neonButtonColors1[currentIndex];
    });
    const contactAnchors = document.querySelectorAll('.contact1 a')
    contactAnchors.forEach(element => {
        element.style.color = colors[currentIndex];
    })
    const contact2Div = document.querySelector('.contact2');
    const h2Element = contact2Div.querySelector('h1');
    h2Element.style.color = colors[currentIndex];
    neon.style.color = neonButtonColors2[currentIndex];


});
button.addEventListener('mouseover', () => {
    neonHover.style.color = neonButtonColors2[currentIndex];
    neonHover.style.background = neonButtonColors1[currentIndex];
    neonHover.style.boxShadow = neonBoxShadowColor[currentIndex];

    // Add event listener for mouseleave to revert the styles
    button.addEventListener('mouseleave', () => {
        neonHover.style.color = neonButtonColors1[currentIndex];
        neonHover.style.background = 'transparent';
        neonHover.style.boxShadow = '';
    });
});

inputElement.forEach(element => {
    element.addEventListener('focus', function () {
        element.classList.add('focused');
    });
    element.addEventListener('blur', function () {
        element.classList.remove('focused');
    });
})





