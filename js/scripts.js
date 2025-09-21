// Chatbot functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbot = document.getElementById('chatbot');
    const closeChatbot = document.getElementById('closeChatbot');
    const chatbotInput = document.getElementById('chatbotInput');
    const sendMessage = document.getElementById('sendMessage');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const quickReplies = document.getElementById('quickReplies');
    const notificationBadge = document.querySelector('.notification-badge');

    let isOpen = false;

    // Toggle chatbot
    chatbotToggle.addEventListener('click', () => {
        isOpen = !isOpen;
        chatbot.style.display = isOpen ? 'flex' : 'none';
        if (isOpen) {
            notificationBadge.style.display = 'none';
            chatbotInput.focus();
        }
    });

    closeChatbot.addEventListener('click', () => {
        isOpen = false;
        chatbot.style.display = 'none';
    });

    // Send message function
    function sendUserMessage(message) {
        addMessage(message, 'user');
        chatbotInput.value = '';
        
        // Hide quick replies after first interaction
        quickReplies.style.display = 'none';
        
        // Generate bot response with a small delay for better UX
        setTimeout(() => {
            const response = generateBotResponse(message);
            addMessage(response, 'bot');
        }, 500);
    }

    // Add message to chat
    function addMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas ${sender === 'bot' ? 'fa-robot' : 'fa-user'}"></i>
            </div>
            <div class="message-content">
                <p>${message}</p>
            </div>
        `;
        
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Generate bot response
    function generateBotResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        if (message.includes('service') || message.includes('what do you do')) {
            return "I offer 🖥️ PHP & Laravel Development, 📱 Responsive Web Design, ☁️ Cloud Deployment, 🤖 AI & ML Solutions, 🚀 Startup Development, and 🎓 Technical Consulting. Which service interests you most?";
        }
        
        if (message.includes('experience') || message.includes('background')) {
            return "I'm a Senior Software Engineer at Straive with a Master's degree in Information Technology from Saint Louis University. I specialize in AI/LLM projects and full-stack development. 🎓";
        }
        
        if (message.includes('project') || message.includes('portfolio') || message.includes('work')) {
            return "My recent projects include PropSuite (property management system), Homefie (collaboration platform), and supervised machine learning prediction systems. Check out my Portfolio section! 🚀";
        }
        
        if (message.includes('contact') || message.includes('hire') || message.includes('email')) {
            return "Reach me at bernardolandley@outlook.com or +63 975 282 6318. I'm also on LinkedIn and GitHub. Use the contact form above to discuss your project! 📧";
        }
        
        if (message.includes('ai') || message.includes('machine learning') || message.includes('llm')) {
            return "I work with AI/LLM technologies including OpenAI API, prompt engineering, document processing (PDF to XML), and supervised ML. I've built predictive analytics systems for clients! 🤖";
        }
        
        if (message.includes('price') || message.includes('cost') || message.includes('budget')) {
            return "I offer flexible budgets from under $5,000 to $25,000+ depending on project complexity. Let's discuss your specific needs for a personalized quote! 💰";
        }
        
        if (message.includes('technology') || message.includes('stack') || message.includes('tech')) {
            return "I work with PHP/Laravel, JavaScript, React, Vue.js, Python, MySQL, Digital Ocean, Laravel Forge, and AI technologies like OpenAI API and LLM prompt engineering. Check out my Skills section for the complete list! 💻";
        }
        
        if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
            return "Hello! I'm here to help you learn about Landley's services and experience. What would you like to know about his work, projects, or how he can help with your next development project? 👋";
        }
        
        if (message.includes('thank') || message.includes('thanks')) {
            return "You're welcome! If you have any other questions about Landley's services or would like to start a project, feel free to reach out using the contact form. I'm here to help! 😊";
        }
        
        if (message.includes('php') || message.includes('laravel')) {
            return "Landley specializes in PHP and Laravel development! He builds robust web applications, APIs, and enterprise-level systems using modern frameworks like Laravel, Zend, and Laminas with MySQL integration. 🐘";
        }
        
        if (message.includes('startup')) {
            return "Landley has experience with startups! He completed the Dado Banatao Startup Incubator Program and specializes in developing MVPs and scalable solutions for growing businesses. Perfect for your startup needs! 🚀";
        }
        
        // Default response
        return "I can help you learn about Landley's services, experience, projects, and contact information. Try asking about his web development services, AI projects, startup experience, or how to get in touch for your next project! 🤖";
    }

    // Event listeners
    sendMessage.addEventListener('click', () => {
        const message = chatbotInput.value.trim();
        if (message) {
            sendUserMessage(message);
        }
    });

    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const message = chatbotInput.value.trim();
            if (message) {
                sendUserMessage(message);
            }
        }
    });

    // Quick reply buttons
    document.querySelectorAll('.quick-reply').forEach(button => {
        button.addEventListener('click', () => {
            const message = button.getAttribute('data-message');
            sendUserMessage(message);
        });
    });

    // Navigation functionality (if needed)
    initializeNavigation();
});

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Update active navigation on scroll
    function updateActiveNavigation() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        // Default to "about" if at top of page
        if (window.pageYOffset < 100) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#about') {
                    link.classList.add('active');
                }
            });
        }
    }

    // Set initial active state
    document.addEventListener('DOMContentLoaded', () => {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#about') {
                link.classList.add('active');
            }
        });
    });

    // Listen for scroll events
    window.addEventListener('scroll', updateActiveNavigation);
}