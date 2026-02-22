
document.addEventListener('DOMContentLoaded', function() {
    
    
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            
            if (fullName === '' || email === '' || message === '') {
                formMessage.textContent = '❌ Error: All fields are required!';
                formMessage.style.color = '#dc3545';
                formMessage.style.backgroundColor = '#f8d7da';
                alert('Error: Please fill in all fields!');
            } 
            else if (!email.includes('@')) {
                formMessage.textContent = '❌ Error: Please enter a valid email address containing @';
                formMessage.style.color = '#dc3545';
                formMessage.style.backgroundColor = '#f8d7da';
                alert('Error: Email must contain @ symbol!');
            } 
            else {
                formMessage.textContent = '✅ Success: Thank you for contacting QUEEN\'S YUMMY! We\'ll respond within 24 hours.';
                formMessage.style.color = '#155724';
                formMessage.style.backgroundColor = '#d4edda';
                alert('✅ Success! Your message has been sent to QUEEN\'S YUMMY.');
                
                
                contactForm.reset();
            }
        });
    }

    
    
    
    const welcomeBtn = document.getElementById('welcomeBtn');
    if (welcomeBtn) {
        welcomeBtn.addEventListener('click', function() {
            alert('👑 Welcome to QUEEN\'S YUMMY! We hope you enjoy your visit!');
        });
    }

    
    const textChangeBtn = document.getElementById('textChangeBtn');
    const demoText = document.getElementById('demoText');
    if (textChangeBtn && demoText) {
        textChangeBtn.addEventListener('click', function() {
            demoText.textContent = '✨ Thanks for visiting QUEEN\'S YUMMY! Today\'s special: Grilled Salmon with Lemon Butter Sauce!';
            demoText.style.fontWeight = 'bold';
            demoText.style.color = '#b85e3a';
        });
    }

    
    const colorToggleBtn = document.getElementById('colorToggleBtn');
    let isOriginalColor = true;
    if (colorToggleBtn) {
        colorToggleBtn.addEventListener('click', function() {
            if (isOriginalColor) {
                document.body.style.backgroundColor = '#ffe5d9';
                colorToggleBtn.textContent = 'Back to Original Color';
            } else {
                document.body.style.backgroundColor = '#faf3e0';
                colorToggleBtn.textContent = 'Toggle Background Color';
            }
            isOriginalColor = !isOriginalColor;
        });
    }

    
    const dateBtn = document.getElementById('dateBtn');
    if (dateBtn) {
        dateBtn.addEventListener('click', function() {
            const now = new Date();
            const dateTimeString = now.toLocaleString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit', 
                minute: '2-digit',
                second: '2-digit'
            });
            alert(`📅 Current Date & Time at QUEEN'S YUMMY:\n${dateTimeString}`);
        });
    }

  
    const toggleSectionBtn = document.getElementById('toggleSectionBtn');
    const specialsSection = document.getElementById('specialsSection');
    if (toggleSectionBtn && specialsSection) {
        toggleSectionBtn.addEventListener('click', function() {
            if (specialsSection.classList.contains('hidden')) {
                specialsSection.classList.remove('hidden');
                toggleSectionBtn.textContent = 'Hide Specials';
            } else {
                specialsSection.classList.add('hidden');
                toggleSectionBtn.textContent = 'Show Specials';
            }
        });
    }

   
    const darkModeBtn = document.createElement('button');
    darkModeBtn.textContent = '🌙 Toggle Dark Mode';
    darkModeBtn.id = 'darkModeBtn';
    darkModeBtn.style.position = 'fixed';
    darkModeBtn.style.bottom = '20px';
    darkModeBtn.style.right = '20px';
    darkModeBtn.style.zIndex = '1000';
    document.body.appendChild(darkModeBtn);

    let isDarkMode = false;
    darkModeBtn.addEventListener('click', function() {
        if (!isDarkMode) {
            document.body.style.backgroundColor = '#2c1810';
            document.body.style.color = '#faf3e0';
            darkModeBtn.textContent = '☀️ Light Mode';
            darkModeBtn.style.backgroundColor = '#faf3e0';
            darkModeBtn.style.color = '#2c1810';
        } else {
            document.body.style.backgroundColor = '#faf3e0';
            document.body.style.color = '#2c1810';
            darkModeBtn.textContent = '🌙 Dark Mode';
            darkModeBtn.style.backgroundColor = '#8b4513';
            darkModeBtn.style.color = '#faf3e0';
        }
        isDarkMode = !isDarkMode;
    });
});
