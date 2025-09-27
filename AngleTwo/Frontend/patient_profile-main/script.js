    // DOM Elements
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const loginBtn = document.getElementById('loginBtn');
        const signupBtn = document.getElementById('signupBtn');
        const mobileLoginBtn = document.getElementById('mobileLoginBtn');
        const mobileSignupBtn = document.getElementById('mobileSignupBtn');
        const authModal = document.getElementById('authModal');
        const closeAuthModal = document.getElementById('closeAuthModal');
        const switchToSignup = document.getElementById('switchToSignup');
        const switchToLogin = document.getElementById('switchToLogin');
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        const authModalTitle = document.getElementById('authModalTitle');
        const loginSubmit = document.getElementById('loginSubmit');
        const signupSubmit = document.getElementById('signupSubmit');
        const bookDoctorButtons = document.querySelectorAll('.book-doctor');
        const appointmentModal = document.getElementById('appointmentModal');
        const closeAppointmentModal = document.getElementById('closeAppointmentModal');
        const appointmentDoctorName = document.getElementById('appointmentDoctorName');
        const appointmentDoctorSpecialty = document.getElementById('appointmentDoctorSpecialty');
        const appointmentFee = document.getElementById('appointmentFee');
        const doctorProfileModal = document.getElementById('doctorProfileModal');
        const closeDoctorModal = document.getElementById('closeDoctorModal');
        const bookAppointmentButtons = document.querySelectorAll('.book-appointment');
        const chatSupportBtn = document.getElementById('chatSupportBtn');
        const mobileChatBtn = document.getElementById('mobileChatBtn');
        const chatModal = document.getElementById('chatModal');
        const closeChatModal = document.getElementById('closeChatModal');
        const languageOptions = document.querySelectorAll('.language-option');
        const currentLanguage = document.getElementById('currentLanguage');
        const darkModeToggle = document.getElementById('darkModeToggle');
        const darkIcon = document.getElementById('darkIcon');
        const lightIcon = document.getElementById('lightIcon');
        const notificationBtn = document.getElementById('notificationBtn');
        const notificationBtnMobile = document.getElementById('notificationBtnMobile');
        const notificationPanel = document.getElementById('notificationPanel');
        const emergencyBtn = document.getElementById('emergencyBtn');
        const emergencyOptions = document.getElementById('emergencyOptions');
        const symptomSeverityButtons = document.querySelectorAll('.symptom-severity');
        const profileDashboard = document.getElementById('profileDashboard');

        // Toggle Mobile Menu
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Toggle Notification Panel
        notificationBtn.addEventListener('click', () => {
            notificationPanel.classList.toggle('hidden');
        });

        notificationBtnMobile.addEventListener('click', () => {
            notificationPanel.classList.toggle('hidden');
        });

        // Toggle Emergency Options
        emergencyBtn.addEventListener('click', () => {
            emergencyOptions.classList.toggle('hidden');
        });

        // Symptom Severity Selection
        symptomSeverityButtons.forEach(button => {
            button.addEventListener('click', () => {
                const severity = button.getAttribute('data-severity');
                
                // Reset all buttons
                symptomSeverityButtons.forEach(btn => {
                    btn.classList.remove('bg-primary', 'text-white');
                    btn.classList.add('bg-muted', 'text-foreground', 'dark:bg-darkBorder', 'dark:text-darkForeground');
                });
                
                // Set selected button
                button.classList.remove('bg-muted', 'text-foreground', 'dark:bg-darkBorder', 'dark:text-darkForeground');
                button.classList.add('bg-primary', 'text-white');
            });
        });

        // Auth Modal Functions
        const openAuthModal = (type) => {
            if (type === 'login') {
                loginForm.classList.remove('hidden');
                signupForm.classList.add('hidden');
                authModalTitle.textContent = 'Login';
            } else {
                loginForm.classList.add('hidden');
                signupForm.classList.remove('hidden');
                authModalTitle.textContent = 'Sign Up';
            }
            authModal.classList.remove('hidden');
        };

        loginBtn.addEventListener('click', () => openAuthModal('login'));
        signupBtn.addEventListener('click', () => openAuthModal('signup'));
        mobileLoginBtn.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            openAuthModal('login');
        });
        mobileSignupBtn.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            openAuthModal('signup');
        });

        closeAuthModal.addEventListener('click', () => {
            authModal.classList.add('hidden');
        });

        switchToSignup.addEventListener('click', (e) => {
            e.preventDefault();
            openAuthModal('signup');
        });

        switchToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            openAuthModal('login');
        });

        // Login and Signup Form Submission
        loginSubmit.addEventListener('click', () => {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (email && password) {
                // Simulate successful login
                authModal.classList.add('hidden');
                profileDashboard.classList.remove('hidden');
                
                // Show success notification
                alert('Login successful! Welcome to 2basil.');
            } else {
                alert('Please enter both email and password.');
            }
        });

        signupSubmit.addEventListener('click', () => {
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const phone = document.getElementById('signupPhone').value;
            const password = document.getElementById('signupPassword').value;
            
            if (name && email && phone && password) {
                // Simulate successful signup
                authModal.classList.add('hidden');
                
                // Show success notification
                alert('Account created successfully! Welcome to 2basil.');
                
                // Show login form for next time
                openAuthModal('login');
            } else {
                alert('Please fill in all fields.');
            }
        });

        // Doctor Booking Functions
        bookDoctorButtons.forEach(button => {
            button.addEventListener('click', () => {
                const doctor = button.getAttribute('data-doctor');
                const specialty = button.getAttribute('data-specialty');
                const fee = button.getAttribute('data-fee');
                
                appointmentDoctorName.textContent = doctor;
                appointmentDoctorSpecialty.textContent = specialty;
                appointmentFee.textContent = `₹${fee}`;
                
                appointmentModal.classList.remove('hidden');
            });
        });

        closeAppointmentModal.addEventListener('click', () => {
            appointmentModal.classList.add('hidden');
        });

        // Doctor Profile Modal
        bookAppointmentButtons.forEach(button => {
            button.addEventListener('click', () => {
                const doctor = button.getAttribute('data-doctor');
                const specialty = button.getAttribute('data-specialty');
                const fee = button.getAttribute('data-fee');
                
                appointmentDoctorName.textContent = doctor;
                appointmentDoctorSpecialty.textContent = specialty;
                appointmentFee.textContent = `₹${fee}`;
                
                doctorProfileModal.classList.add('hidden');
                appointmentModal.classList.remove('hidden');
            });
        });

        closeDoctorModal.addEventListener('click', () => {
            doctorProfileModal.classList.add('hidden');
        });

        // Chat Support Modal
        chatSupportBtn.addEventListener('click', () => {
            chatModal.classList.remove('hidden');
        });

        mobileChatBtn.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            chatModal.classList.remove('hidden');
        });

        closeChatModal.addEventListener('click', () => {
            chatModal.classList.add('hidden');
        });

        // Language Selection
        languageOptions.forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.getAttribute('data-lang');
                currentLanguage.textContent = option.textContent.trim();
                
                // In a real application, you would update the entire UI with translations
                // For this demo, we'll just change the language label
                if (lang === 'hi') {
                    document.documentElement.setAttribute('lang', 'hi');
                    document.documentElement.setAttribute('dir', 'ltr');
                } else if (lang === 'ta') {
                    document.documentElement.setAttribute('lang', 'ta');
                    document.documentElement.setAttribute('dir', 'ltr');
                } else if (lang === 'bn') {
                    document.documentElement.setAttribute('lang', 'bn');
                    document.documentElement.setAttribute('dir', 'ltr');
                } else if (lang === 'te') {
                    document.documentElement.setAttribute('lang', 'te');
                    document.documentElement.setAttribute('dir', 'ltr');
                } else if (lang === 'mr') {
                    document.documentElement.setAttribute('lang', 'mr');
                    document.documentElement.setAttribute('dir', 'ltr');
                } else if (lang === 'gu') {
                    document.documentElement.setAttribute('lang', 'gu');
                    document.documentElement.setAttribute('dir', 'ltr');
                } else {
                    document.documentElement.setAttribute('lang', 'en');
                    document.documentElement.setAttribute('dir', 'ltr');
                }
                
                // Show confirmation
                alert(`Language changed to ${option.textContent.trim()}`);
            });
        });

        // Dark Mode Toggle
        const toggleDarkMode = () => {
            const html = document.documentElement;
            html.classList.toggle('dark');
            
            const isDark = html.classList.contains('dark');
            localStorage.setItem('darkMode', isDark);
            
            if (isDark) {
                darkIcon.classList.add('hidden');
                lightIcon.classList.remove('hidden');
            } else {
                darkIcon.classList.remove('hidden');
                lightIcon.classList.add('hidden');
            }
        };

        // Check for saved dark mode preference
        if (localStorage.getItem('darkMode') === 'true') {
            document.documentElement.classList.add('dark');
            darkIcon.classList.add('hidden');
            lightIcon.classList.remove('hidden');
        } else {
            document.documentElement.classList.remove('dark');
            darkIcon.classList.remove('hidden');
            lightIcon.classList.add('hidden');
        }

        darkModeToggle.addEventListener('click', toggleDarkMode);

        // Close modals when clicking outside
        document.addEventListener('click', (e) => {
            if (e.target === authModal) {
                authModal.classList.add('hidden');
            }
            if (e.target === appointmentModal) {
                appointmentModal.classList.add('hidden');
            }
            if (e.target === doctorProfileModal) {
                doctorProfileModal.classList.add('hidden');
            }
            if (e.target === chatModal) {
                chatModal.classList.add('hidden');
            }
            if (e.target === notificationPanel) {
                notificationPanel.classList.add('hidden');
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Initialize all prices to show in INR
        document.addEventListener('DOMContentLoaded', function() {
            // Update all price elements to show INR
            const priceElements = document.querySelectorAll('[data-usd]');
            priceElements.forEach(element => {
                const usdValue = parseFloat(element.getAttribute('data-usd'));
                element.textContent = `₹${(usdValue * 83).toLocaleString('en-IN')}`;
                element.removeAttribute('data-usd');
            });
        });