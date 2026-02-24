let downmenu1 = document.querySelector('.destination .down_menu')
let button1 = document.querySelector('.destination .button')
// let roundarrow1 = document.querySelectorAll('.location .round_arrow')
// let location = document.querySelectorAll('.location')

button1.addEventListener("click", (event) => {
    if ([...downmenu1.classList].includes('active') && [...button1.classList].includes('open')) {
        downmenu1.classList.remove('active')
        button1.classList.remove('open')
    } else {
        downmenu1.classList.add('active')
        button1.classList.add('open')
    }
})

let mask = document.querySelector('.header_mask')
let logo = document.querySelector('.logo')

window.addEventListener("scroll", (event) => {
    if (window.scrollY >= 80) {
        mask.classList.add('scroll_down')
        logo.classList.add('scroll_down')
        button1.classList.add('scroll_down')
    } else {
        mask.classList.remove('scroll_down')
        logo.classList.remove('scroll_down')
        button1.classList.remove('scroll_down')
    }
})

let sidebar = document.querySelector('.scroll')

window.addEventListener("scroll", (event) => {
    if (window.scrollY >= 500) {
        sidebar.classList.add('align_scroll')

    } else {
        sidebar.classList.remove('align_scroll')
    }
    if (window.scrollY >= 2000 && window.scrollY < 3700) {
        sidebar.classList.remove('align_scroll')
    }
    if (window.scrollY >= 3700) {
        sidebar.classList.add('align_scroll')
    }
})

let sidebarinner = document.querySelector('.innerList .inner')
window.addEventListener('scroll', function (event) {
    // console.log(window.scrollY)
    sidebarinner.style.marginTop = window.scrollY / 19 + 'px'
})

// for (var i = 0; i < location.length; i++) {
//     location[i].addEventListener("mouseenter", (event) => {
//         roundarrow1[i].classList.add('active')
//     })
//     location[i].addEventListener("mouseenter", (event) => {
//         roundarrow1[i].classList.add('active')
//     })
//     location[i].addEventListener("mouseenter", (event) => {
//         roundarrow1[i].classList.remove('active')
//     })
// }

let menu = document.querySelector('.menu')
let alignleft = document.querySelector('.align_left')
let twobar1 = document.querySelector('.two_bar.top')
let twobar2 = document.querySelector('.two_bar.bottom')

menu.addEventListener("click", (event) => {
    if ([...alignleft.classList].includes('active') && [...twobar1.classList].includes('active') && [...twobar2.classList].includes('active')) {
        alignleft.classList.remove('active')
        twobar1.classList.remove('active')
        twobar2.classList.remove('active')
    } else {
        alignleft.classList.add('active')
        twobar1.classList.add('active')
        twobar2.classList.add('active')
    }
})
let box = document.querySelectorAll('.box')
let boxafrica = document.querySelector('.box.africa')
let boxasia = document.querySelector('.box.asia')
let boxeurope = document.querySelector('.box.europe')
let boxfrance = document.querySelector('.box.france')
let boxindonesia = document.querySelector('.box.indonesia')
let boxgreece = document.querySelector('.box.greece')
let boxegypt = document.querySelector('.box.egypt')
let roundarrow = document.querySelectorAll('.round_arrow')

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("mouseenter", (event) => {
        box[i].classList.add('active')
        roundarrow[i].classList.add('active')
    })

    box[i].addEventListener("mouseover", (event) => {
        box[i].classList.add('active')
        roundarrow[i].classList.add('active')
    })

    box[i].addEventListener("mouseout", (event) => {
        box[i].classList.remove('active')
        roundarrow[i].classList.remove('active')
    })
}




let secondInner = document.querySelector('.secondInner')
let inner = document.querySelector('.inner_video')
let center = document.querySelector('.center')
let secondOuter = document.querySelector('.secondOuter')
let outer = document.querySelector('.outer')

secondInner.addEventListener("mouseenter", (event) => {
    secondInner.classList.add('active')
    inner.classList.add('active')
    center.classList.add('active')
    secondOuter.classList.add('active')
    outer.classList.add('active')
})

secondInner.addEventListener("mouseover", (event) => {
    secondInner.classList.add('active')
    inner.classList.add('active')
    center.classList.add('active')
    secondOuter.classList.add('active')
    outer.classList.add('active')
})

secondInner.addEventListener("mouseout", (event) => {
    secondInner.classList.remove('active')
    inner.classList.remove('active')
    center.classList.remove('active')
    secondOuter.classList.remove('active')
    outer.classList.remove('active')
})
let slidermask = document.querySelector('.slide_mask')
let slider = document.querySelectorAll('.slider')
let slider1 = document.querySelector('.slider.france')
let slider2 = document.querySelector('.slider.indonesia')
let slider3 = document.querySelector('.slider.greece')
let slider4 = document.querySelector('.slider.egypt')
let prev = document.querySelector('.arrow.prev')
let next = document.querySelector('.arrow.next')

let index = 1



prev.addEventListener('click', (event) => {
    slider[index].classList.remove('active')
    index--
    slidermask.style.marginLeft = -200 - (index - 1) * 686 + 'px'
    if (index >= 0) {
        slider[index].classList.add('active')
    }
    else {
        index = 3
        slider[index].classList.add('active')
        slidermask.style.marginLeft = -200 - (index - 1) * 686 + 'px'
    }

    console.log('prev-click')

})

next.addEventListener('click', (event) => {
    slider[index].classList.remove('active')
    index++
    slidermask.style.marginLeft = -200 - (index - 1) * 686 + 'px'
    if (index <= slider.length - 1) {
        slider[index].classList.add('active')
    }
    else {
        index = 0
        slider[index].classList.add('active')
        slidermask.style.marginLeft = -200 - (index - 1) * 686 + 'px'
    }
    console.log('next-click')
})





let downmenu2 = document.querySelector('.drop_down .down_menu')
let button2 = document.querySelector('.down_button')
// let roundarrow1 = document.querySelectorAll('.location .round_arrow')
// let location = document.querySelectorAll('.location')

button2.addEventListener("click", (event) => {
    if ([...downmenu2.classList].includes('active') && [...button2.classList].includes('open')) {
        downmenu2.classList.remove('active')
        button2.classList.remove('open')
    } else {
        downmenu2.classList.add('active')
        button2.classList.add('open')
    }
})

let tracker = document.querySelectorAll('.tracker')
let clients = document.querySelectorAll('.feedback .clients')
let slideprev = document.querySelector('.feedback .contents .button .prev')
let slidenext = document.querySelector('.feedback .contents .button .next')
let index1 = 0


slidenext.addEventListener('click', (event) => {
    clients[index1].classList.remove('active')
    tracker[index1].classList.remove('active')
    index1++
    if (index1 >= 5) { index1 = 0 }

    clients[index1].classList.add('active')
    tracker[index1].classList.add('active')


    // for (i = 0; i < tracker.length; i++) {
    //     if ([...tracker[i].classList].includes('active') && i < tracker.length - 1) {
    //         tracker[i].classList.remove('active')
    //         clients[i].classList.remove('active')
    //         tracker[i + 1].classList.add('active')
    //         clients[i + 1].classList.add('active')
    //     }
    //     if ([...tracker[i].classList].includes('active') && i === tracker.length - 1) {
    //         tracker[i].classList.remove('active')
    //         clients[i].classList.remove('active')
    //         tracker[0].classList.add('active')
    //         clients[0].classList.add('active')
    //     }
    console.log('buttonnext')
    // }
})

slideprev.addEventListener('click', (event) => {
    clients[index1].classList.remove('active')
    tracker[index1].classList.remove('active')
    index1--
    if (index1 < 0) { index1 = 4 }

    clients[index1].classList.add('active')
    tracker[index1].classList.add('active')

    // for (i = 0; i < tracker.length; i++) {
    //     if ([...tracker[i].classList].includes('active') && i > 0) {
    //         tracker[i].classList.remove('active')
    //         clients[i].classList.remove('active')
    //         tracker[i - 1].classList.add('active')
    //         clients[i - 1].classList.add('active')
    //     }
    //     if ([...tracker[i].classList].includes('active') && i === 0) {
    //         tracker[i].classList.remove('active')
    //         clients[i].classList.remove('active')
    //         tracker[4].classList.add('active')
    //         clients[4].classList.add('active')
    //     }
    console.log('buttonprev')
    // }
})

let list = document.querySelectorAll('.list')
let line = document.querySelectorAll('.popular .line')
let dot = document.querySelectorAll('.dot')
let outline = document.querySelectorAll('.outline-circle')
let circle1 = document.querySelector('.circle.egypt')
let circle2 = document.querySelector('.circle.greece')
let circle3 = document.querySelector('.circle.indonesia')
let circle4 = document.querySelector('.circle.france')
let index2 = 0
circle1.addEventListener('click', (event) => {

    index2 = 0
    for (let j = 1; j < line.length; j++) {
        if ([...line[j].classList].includes('active')) {
            line[j].classList.remove('active')
            dot[j].classList.remove('active')
            outline[j].classList.remove('active')
            outline[index2].classList.add('active')
            list[j].classList.remove('active')
            list[index2].classList.add('active')
        }

    }
    console.log('circle1-click')
})
circle2.addEventListener('click', (event) => {
    index2 = 1
    if ([...outline[0].classList].includes('active')) {
        outline[0].classList.remove('active')
        list[0].classList.remove('active')
    }
    for (let i = 2; i < line.length; i++) {
        if ([...line[i].classList].includes('active')) {
            line[i].classList.remove('active')
            dot[i].classList.remove('active')
        }
        if ([...outline[i].classList].includes('active')) {
            outline[i].classList.remove('active')
            list[i].classList.remove('active')
        }
    }
    if (![...outline[index2].classList].includes('active')) {
        line[index2].classList.add('active')
        dot[index2].classList.add('active')
        outline[index2].classList.add('active')
        list[index2].classList.add('active')
    }


    console.log('circle2-click')
})
circle3.addEventListener('click', (event) => {
    index2 = 2
    for (let i = 0; i < line.length - 2; i++) {
        if ([...outline[i].classList].includes('active')) {
            outline[i].classList.remove('active')
            list[i].classList.remove('active')
        }
    }
    if ([...outline[index2 + 1].classList].includes('active')) {
        line[index2 + 1].classList.remove('active')
        dot[index2 + 1].classList.remove('active')
        outline[index2 + 1].classList.remove('active')
        list[index2 + 1].classList.remove('active')
    }
    if (![...outline[index2].classList].includes('active')) {
        line[index2].classList.add('active')
        dot[index2].classList.add('active')
        outline[index2].classList.add('active')
        list[index2].classList.add('active')
    }

    console.log('circle3-click')
})
circle4.addEventListener('click', (event) => {

    for (let i = 0; i < line.length - 1; i++) {
        if (![...line[i].classList].includes('active')) {
            line[i].classList.add('active')
            dot[i].classList.add('active')
        }
        if ([...outline[i].classList].includes('active')) {
            outline[i].classList.remove('active')
            list[i].classList.remove('active')
        }
    }
    index2 = 3
    if (![...line[index2].classList].includes('active')) {
        line[index2].classList.add('active')
        dot[index2].classList.add('active')
        outline[index2].classList.add('active')
        list[index2].classList.add('active')
    }


    console.log('circle4-click')
})

let movingslide = document.querySelectorAll('.moving-slider ul li')
let move = document.querySelector('.moving-slider ul')

movingslide[0].addEventListener('mouseover', (event) => {
    move.style.marginLeft = -100 + 'px'
})

movingslide[1].addEventListener('mouseover', (event) => {
    move.style.marginLeft = -400 + 'px'
})

movingslide[2].addEventListener('mouseover', (event) => {
    move.style.marginLeft = -500 + 'px'
})

movingslide[3].addEventListener('mouseover', (event) => {
    move.style.marginLeft = -650 + 'px'
})
movingslide[4].addEventListener('mouseover', (event) => {
    move.style.marginLeft = -900 + 'px'
})

movingslide[5].addEventListener('mouseover', (event) => {
    move.style.marginLeft = -1000 + 'px'
})

const translations = {
    en: {
        htmlLang: 'en',
        pageTitle: 'COVILLA Travel',
        destinationBtn: 'DESTINATIONS',
        chooseLocation: 'CHOOSE A LOCATION',
        navAbout: 'ABOUT',
        navJournal: 'JOURNAL',
        navSupport: 'SUPPORT',
        heroLabel: 'FAMILY TRAVEL AGENCY',
        heroTitle: "Let's plan your next vacation",
        heroAction: 'contact us',
        popularLocation: 'POPULAR LOCATION',
        destinationsLabel: 'COVILLA DESTINATIONS',
        destinationsTitle: 'Across the world',
        benefitsLabel: 'COVILLA BENEFITS',
        benefitsTitle: 'Take your family on the best vacation',
        chooseDestination: 'CHOOSE A DESTINATION'
    },
    zh: {
        htmlLang: 'zh-Hans',
        pageTitle: 'COVILLA 旅行',
        destinationBtn: '目的地',
        chooseLocation: '选择地点',
        navAbout: '关于我们',
        navJournal: '旅行日志',
        navSupport: '支持',
        heroLabel: '家庭旅行社',
        heroTitle: '一起规划你的下一次假期',
        heroAction: '联系我们',
        popularLocation: '热门地点',
        destinationsLabel: 'COVILLA 目的地',
        destinationsTitle: '环游世界',
        benefitsLabel: 'COVILLA 优势',
        benefitsTitle: '带家人开启最棒的假期',
        chooseDestination: '选择目的地'
    }
}

const setText = (selector, value) => {
    const node = document.querySelector(selector)
    if (node && value) node.textContent = value
}

const setButtonWithIcon = (selector, value) => {
    const node = document.querySelector(selector)
    if (!node || !value) return
    node.textContent = value
    const icon = document.createElement('img')
    icon.src = './keyboard_arrow_down_FILL0_wght400_GRAD0_opsz24.svg'
    icon.width = 14
    icon.height = 14
    node.appendChild(icon)
}

const applyLanguage = (lang) => {
    const selected = translations[lang] ? lang : 'en'
    const copy = translations[selected]

    document.documentElement.lang = copy.htmlLang
    document.title = copy.pageTitle
    localStorage.setItem('lang', selected)

    setButtonWithIcon('header .destination .button', copy.destinationBtn)
    setText('header .destination .down_menu .subtitle h3', copy.chooseLocation)
    setText('ul.header_mask li:nth-child(1) a', copy.navAbout)
    setText('ul.header_mask li:nth-child(2) a', copy.navJournal)
    setText('ul.header_mask li:nth-child(3) a', copy.navSupport)
    setText('.main .main_left h3', copy.heroLabel)
    setText('.main .main_left h1', copy.heroTitle)
    setText('.main .main_left .mainleft_button a', copy.heroAction)
    setText('.main .location h3', copy.popularLocation)
    setText('.wrapper .container > h3', copy.destinationsLabel)
    setText('.wrapper .container > h1', copy.destinationsTitle)
    setText('.benefits .benefit_left h3', copy.benefitsLabel)
    setText('.benefits .benefit_left h1', copy.benefitsTitle)
    setButtonWithIcon('.benefits .drop_down .down_button', copy.chooseDestination)

    document.querySelectorAll('.lang-btn').forEach((button) => {
        button.classList.toggle('active', button.dataset.lang === selected)
    })
}

document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.lang))
})

applyLanguage(localStorage.getItem('lang') || 'en')


