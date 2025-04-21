document.addEventListener('DOMContentLoaded', function() {
    // Handle expertise filter change
    const expertiseFilter = document.getElementById('expertise-filter');
    if (expertiseFilter) {
        expertiseFilter.addEventListener('change', function() {
            filterCoaches(this.value);
        });
    }

    // Handle booking session buttons
    const bookButtons = document.querySelectorAll('.book-session');
    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
            const coachName = this.closest('.coach-card').querySelector('h3').textContent;
            bookSession(coachName);
        });
    });

    // Handle language selection
    const languageSelector = document.getElementById('language');
    if (languageSelector) {
        languageSelector.addEventListener('change', function() {
            changeLanguage(this.value);
        });
        
        // Apply stored language preference on page load
        const savedLanguage = localStorage.getItem('preferredLanguage');
        if (savedLanguage) {
            languageSelector.value = savedLanguage;
            changeLanguage(savedLanguage);
        }
    }
    
    // Initialize language data attributes
    initializeLanguageAttributes();
});

/**
 * Filter coaches based on expertise
 * @param {string} expertise - The expertise to filter by
 */
function filterCoaches(expertise) {
    const coachCards = document.querySelectorAll('.coach-card');
    
    coachCards.forEach(card => {
        const tags = card.querySelectorAll('.tag');
        let matchFound = expertise === 'all';
        
        tags.forEach(tag => {
            // Convert tag text to lowercase and remove hyphens for comparison
            const tagText = tag.textContent.toLowerCase().replace('-', '');
            const expertiseText = expertise.toLowerCase().replace('-', '');
            
            if (tagText === expertiseText) {
                matchFound = true;
            }
        });
        
        if (matchFound) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

/**
 * Book a session with a coach
 * @param {string} coachName - The name of the coach
 */
function bookSession(coachName) {
    // In a real application, this would open a modal or redirect to booking page
    alert(`You're about to book a session with ${coachName}. This would open the booking form in a real application.`);
    
    // Example of how you might handle this in a real application:
    // window.location.href = `booking.html?coach=${encodeURIComponent(coachName)}`;
}

/**
 * Change the website language
 * @param {string} language - The language code
 */
function changeLanguage(language) {
    console.log(`Language changed to: ${language}`);
    
    // Define translations for different languages
    const translations = {
        'en': {
            'find_coach': 'Find Your Perfect Career Coach',
            'connect': 'Connect with experienced coaches who can guide your career journey',
            'find_button': 'Find a Coach',
            'become_button': 'Become a Coach',
            'all_expertise': 'All Expertise',
            'career_transition': 'Career Transition',
            'resume_writing': 'Resume Writing',
            'interview_prep': 'Interview Prep',
            'tech_career': 'Tech Career',
            'book_session': 'Book Session',
            'about_us': 'About Us',
            'careers': 'Careers',
            'contact': 'Contact',
            'legal': 'Legal',
            'privacy_policy': 'Privacy Policy',
            'terms': 'Terms of Service',
            'cookie_policy': 'Cookie Policy',
            'support': 'Support',
            'help_center': 'Help Center',
            'faq': 'FAQ',
            'feedback': 'Feedback',
            'copyright': '© 2025 CareerMatch. All rights reserved.',
            // Login page translations
            'sign_in': 'Sign In',
            'email': 'Email',
            'password': 'Password',
            'remember_me': 'Remember me',
            'forgot_password': 'Forgot password?',
            'sign_in_button': 'Sign In',
            'no_account': 'Don\'t have an account?',
            'sign_up': 'Sign up'
        },
        'es': {
            'find_coach': 'Encuentra Tu Coach Profesional Perfecto',
            'connect': 'Conéctate con coaches experimentados que pueden guiar tu carrera profesional',
            'find_button': 'Buscar un Coach',
            'become_button': 'Conviértete en Coach',
            'all_expertise': 'Todas las Especialidades',
            'career_transition': 'Transición de Carrera',
            'resume_writing': 'Redacción de CV',
            'interview_prep': 'Preparación de Entrevista',
            'tech_career': 'Carrera Tecnológica',
            'book_session': 'Reservar Sesión',
            'about_us': 'Sobre Nosotros',
            'careers': 'Carreras',
            'contact': 'Contacto',
            'legal': 'Legal',
            'privacy_policy': 'Política de Privacidad',
            'terms': 'Términos de Servicio',
            'cookie_policy': 'Política de Cookies',
            'support': 'Soporte',
            'help_center': 'Centro de Ayuda',
            'faq': 'Preguntas Frecuentes',
            'feedback': 'Comentarios',
            'copyright': '© 2025 CareerMatch. Todos los derechos reservados.',
            // Login page translations
            'sign_in': 'Iniciar Sesión',
            'email': 'Correo Electrónico',
            'password': 'Contraseña',
            'remember_me': 'Recuérdame',
            'forgot_password': '¿Olvidaste tu contraseña?',
            'sign_in_button': 'Iniciar Sesión',
            'no_account': '¿No tienes una cuenta?',
            'sign_up': 'Regístrate'
        },
        'fr': {
            'find_coach': 'Trouvez Votre Coach de Carrière Parfait',
            'connect': 'Connectez-vous avec des coachs expérimentés qui peuvent guider votre parcours professionnel',
            'find_button': 'Trouver un Coach',
            'become_button': 'Devenir Coach',
            'all_expertise': 'Toutes les Expertises',
            'career_transition': 'Transition de Carrière',
            'resume_writing': 'Rédaction de CV',
            'interview_prep': 'Préparation d\'Entretien',
            'tech_career': 'Carrière Technologique',
            'book_session': 'Réserver une Session',
            'about_us': 'À Propos de Nous',
            'careers': 'Carrières',
            'contact': 'Contact',
            'legal': 'Mentions Légales',
            'privacy_policy': 'Politique de Confidentialité',
            'terms': 'Conditions d\'Utilisation',
            'cookie_policy': 'Politique des Cookies',
            'support': 'Support',
            'help_center': 'Centre d\'Aide',
            'faq': 'FAQ',
            'feedback': 'Retour d\'Information',
            'copyright': '© 2025 CareerMatch. Tous droits réservés.',
            // Login page translations
            'sign_in': 'Se Connecter',
            'email': 'Email',
            'password': 'Mot de Passe',
            'remember_me': 'Se souvenir de moi',
            'forgot_password': 'Mot de passe oublié?',
            'sign_in_button': 'Se Connecter',
            'no_account': 'Vous n\'avez pas de compte?',
            'sign_up': 'S\'inscrire'
        }
    };
    
    // Get the translations for the selected language
    const langData = translations[language] || translations['en'];
    
    // Update content on the page
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (langData[key]) {
            element.textContent = langData[key];
        }
    });
    
    // Store language preference
    localStorage.setItem('preferredLanguage', language);
}

/**
 * Example function for a search feature (not implemented in the HTML yet)
 * @param {string} query - The search query
 */
function searchCoaches(query) {
    query = query.toLowerCase();
    const coachCards = document.querySelectorAll('.coach-card');
    
    coachCards.forEach(card => {
        const coachName = card.querySelector('h3').textContent.toLowerCase();
        const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
        
        if (coachName.includes(query) || tags.some(tag => tag.includes(query))) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

/**
 * Initialize language data attributes for translatable elements
 */
function initializeLanguageAttributes() {
    // Main content
    document.querySelector('.hero h1').setAttribute('data-lang-key', 'find_coach');
    document.querySelector('.hero p').setAttribute('data-lang-key', 'connect');
    
    // Buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    if (ctaButtons.length >= 2) {
        ctaButtons[0].setAttribute('data-lang-key', 'find_button');
        ctaButtons[1].setAttribute('data-lang-key', 'become_button');
    }
    
    // Filter options
    const filterOptions = document.querySelectorAll('#expertise-filter option');
    if (filterOptions.length >= 5) {
        filterOptions[0].setAttribute('data-lang-key', 'all_expertise');
        filterOptions[1].setAttribute('data-lang-key', 'career_transition');
        filterOptions[2].setAttribute('data-lang-key', 'resume_writing');
        filterOptions[3].setAttribute('data-lang-key', 'interview_prep');
        filterOptions[4].setAttribute('data-lang-key', 'tech_career');
    }
    
    // Book session buttons
    document.querySelectorAll('.book-session').forEach(button => {
        button.setAttribute('data-lang-key', 'book_session');
    });
    
    // Footer sections
    const footerHeadings = document.querySelectorAll('.footer-column h4');
    if (footerHeadings.length >= 4) {
        footerHeadings[1].setAttribute('data-lang-key', 'about_us');
        footerHeadings[2].setAttribute('data-lang-key', 'legal');
        footerHeadings[3].setAttribute('data-lang-key', 'support');
    }
    
    // Footer links
    const footerLinks = document.querySelectorAll('.footer-column ul li a');
    if (footerLinks.length >= 9) {
        footerLinks[0].setAttribute('data-lang-key', 'about_us');
        footerLinks[1].setAttribute('data-lang-key', 'careers');
        footerLinks[2].setAttribute('data-lang-key', 'contact');
        footerLinks[3].setAttribute('data-lang-key', 'privacy_policy');
        footerLinks[4].setAttribute('data-lang-key', 'terms');
        footerLinks[5].setAttribute('data-lang-key', 'cookie_policy');
        footerLinks[6].setAttribute('data-lang-key', 'help_center');
        footerLinks[7].setAttribute('data-lang-key', 'faq');
        footerLinks[8].setAttribute('data-lang-key', 'feedback');
    }
    
    // Copyright
    document.querySelector('.copyright p').setAttribute('data-lang-key', 'copyright');
}