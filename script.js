document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let country = document.getElementById("country").value;
    
    if (!name || !email || !phone || !country) {
        alert("Please fill in all fields.");
        return;
    }
    
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        alert("Invalid name format.");
        return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Invalid email format.");
        return;
    }
    
    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Invalid phone number. Must be 10 digits.");
        return;
    }
    
    alert("Form submitted successfully!");
    document.getElementById("contactForm").reset();
});

// Google Analytics Tracking
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'UA-XXXXXX-X');

// Facebook Pixel Tracking
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID'); 
fbq('track', 'PageView');
