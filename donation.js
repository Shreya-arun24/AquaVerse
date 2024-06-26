let buttons = document.getElementsByClassName('myButton');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover', function () {
        this.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        this.style.color = 'rgb(15, 112, 144)';
        this.style.transform = 'scale(1.2)'; // This will make the button 20% larger when hovered over
    });
    buttons[i].addEventListener('mouseout', function () {
        this.style.backgroundColor = '';
        this.style.color = '';
        this.style.transform = 'scale(1)';
    });
}

let amount=document.getElementById('donation-amount');
function dontpopUp() {
    document.getElementById('donation-form').style.display = 'block';
    window.scrollTo({
        top: document.getElementById('donation-form').offsetTop,
        behavior: 'smooth'
    });
}
function setPlaceholder(amount) {
    const inputField = document.getElementById('donation-amount');
    if (amount === 300) {
        inputField.placeholder = "RS.300";
    } else if (amount === 500) {
        inputField.placeholder = "RS.500";
    }else if (amount === 900) {
        inputField.placeholder = "RS.900";
    }
    else if (amount === 1,500) {
        inputField.placeholder = "RS.1,500";
    }
   
}

function dontclosePopUp() {
    document.getElementById('donation-form').style.display = 'none';
}

let popup=document.getElementById("popup");

        function popUp(){
            popup.classList.add("open-pop");

        }
        function closePopUp(){
            popup.classList.remove("open-pop");

        }

function changeContent(id) {
    if (id === 'terms') {
        let t = alert("Terms: By using this website, you agree to our Terms of Use. Your access to and use of this website is conditioned on your acceptance of and compliance with these Terms.");
        t.style.color = "blue";
    } else if (id === 'privacy') {
        alert("Privacy: We value your privacy. By using this website, you agree to our Privacy Policy. We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.");
    } else if (id === 'ads') {
        alert("Ads: This website uses interest-based ads. By continuing to use this site, you agree to this use. These third-party advertisers may collect data about your online activities over time and across different websites when you use our site.")
    }
}

