const Question = document.getElementById('question');
const Hide = document.getElementById('hide');
const Showmore = document.getElementById('showMore');



Showmore.addEventListener("click", () => {
    Hide.classList.remove('hidden')
    Question.classList.add('hidden')
})


const Ques = document.getElementById('ques');
const Hiden = document.getElementById('hiden');
const Show = document.getElementById('show');

Show.addEventListener("click", () => {
    Hiden.classList.remove('hidden')
    Ques.classList.add('hidden')
})


const Que = document.getElementById('que');
const Hidens = document.getElementById('hidens');
const Sho = document.getElementById('sho');

Sho.addEventListener("click", () => {
    Hidens.classList.remove('hidden')
    Que.classList.add('hidden')
})


const Qu = document.getElementById('qu');
const Hidenss = document.getElementById('hidenss');
const Sh = document.getElementById('sh');

Sh.addEventListener("click", () => {
    Hidenss.classList.remove('hidden')
    Qu.classList.add('hidden')
})




// It works only in first div 

// document.getElementById("degree").addEventListener("click", function() {
//     const Para = document.getElementById("para");
//     const Rotate = document.getElementById('rotate');

//     if (Para.classList.contains("hidden")) {
//         Para.classList.remove("hidden");
//         Rotate.classList.add("rotate-180");
        
//     } else {
//         Para.classList.add("hidden");
//         Rotate.classList.remove("rotate-180");
//     }
// });


// for question answer section 

// for show next questions
const Asking = document.getElementById('asking');
const Gayabb = document.getElementById('gayabb');


Asking.addEventListener("click", () => {
    Gayabb.classList.remove('hidden')
    Asking.classList.add('hidden')
})


// for open and close question answer

document.querySelectorAll("#degree").forEach(button => {
    button.addEventListener("click", function() {
        let container = this.closest("#parent");
        let Para = container.querySelector("#para");
        let Rotate = this.querySelector("#rotate");

        if (Para.classList.contains("hidden")) {
            Para.classList.remove("hidden");
            Rotate.classList.add("rotate-180");
        } else {
            Para.classList.add("hidden");
            Rotate.classList.remove("rotate-180");
        }
    });
});


document.querySelectorAll("#sdegree").forEach(button => {
    button.addEventListener("click", function() {
        let container = this.closest("#sparent"); // Get parent div
        let Spara = container.querySelector("#spara"); // Get paragraph
        let Srotate = this.querySelector("#srotate"); // Get rotating element

        // Toggle `hidden` instead of using block
        Spara.classList.toggle("hidden");
        Srotate.classList.toggle("rotate-180");
    });
});





// Navbar scroll pe navbar me iten aa jayege 

const Gayab = () => {
    const Ajja = document.getElementById("gayab")
    const Header = document.getElementById("nav")
    if(this.scrollY >= 100) {
        Ajja.classList.remove("hidden");
        Header.classList.add("shadow-xl")
    } else {
        Ajja.classList.add("hidden");
        Header.classList.remove("shadow-xl")
    }
}
window.addEventListener("scroll", Gayab)



//Mobile Navbar scroll pe navbar fixed ho jaye 

const Fixed = () => {
    const Agga = document.getElementById("fixed")
    if(this.scrollY >= 59) {
        Agga.classList.remove("hidden")
    } else {
        Agga.classList.add("hidden")
    }
}
window.addEventListener("scroll", Fixed)


//Mobile 2ndNavbar scroll pe navbar fixed ho jaye 

const Search = () => {
    const Search = document.getElementById("search")
    if(this.scrollY >= 480) {
        Search.classList.remove("hidden")
    } else {
        Search.classList.add("hidden")
    }
}
window.addEventListener("scroll", Search)







// ye fotter se upar vale section ke liye 

function openTab(event, tabId) {
    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));

    // Remove active styles from all tabs
    document.querySelectorAll('.tab-link').forEach(tab => {
        tab.classList.remove('text-blue-600', 'border-blue-600', 'hover:bg-blue-50', 'font-semibold', 'border-b-4');
        tab.classList.add('text-gray-600');
    });

    // Show selected tab content
    document.getElementById(tabId).classList.remove('hidden');

    // Highlight active tab with border
    event.target.classList.add('text-blue-600', 'border-blue-600', 'hover:bg-blue-50', 'font-semibold', 'border-b-4');
    event.target.classList.remove('text-gray-600');
}





//  ye sirf border lane ke liye  
function setActiveTab(event, index) {
    // Remove underline from all tabs
    document.querySelectorAll('.under-linee').forEach(el => el.classList.add('hidden'));

    // Add underline to the selected tab
    event.currentTarget.querySelector('.under-linee').classList.remove('hidden');
}


