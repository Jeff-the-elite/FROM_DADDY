// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Nanduuuuhhh🦅",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "FROM DADDDYYYYYYY WOOO",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['💋', '💕', '🤍', '💘', '💓'],  // Heart emojis
        bears: ['🧸', '🌹']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you maybe like me babe👉👈",                                    // First interaction
            yesBtn: "Yee ",                                             // Text for "Yes" button
            noBtn: "FUCK NAH NIGGA gfy🖕",                                               // Text for "No" button
            secretAnswer: "I DON LIKE YOU BABA I LOVE CHU"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "TOUCH ME w em fingers🤤"                                         // Text for the next button
        },
        third: {
            text: "Will u pwease be my valentine sweetie👉👈", // The big question!
            yesBtn: "Yee my bitch *wink* ",                                             // Text for "Yes" button
            noBtn: "BITCH WHO U GTFO NGA"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "OMAGAAAAA U LOVE ME THT MCH???WHAAAAAAAAT",  // Shows when they go past 5000%
        high: "YOOO that much???fs???fs??fs????? NO WAY",              // Shows when they go past 1000%
        normal: "oh💔yh💔i💔get💔it💔mommy still loves you💔💔😞💔💔"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "WOOOO i love ya sm I'd eat up lizards if u scared of em",
        message: "Here u go huggs n kissies cuz u her goo boi MWAH phooooo ",
        emojis: "💕🖤love you smm boo🤍💞💓"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#D17D98",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#D25353",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#740A03",     // Button color (should stand out against the background)
        buttonHover: "#FFD8DF",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#740A03"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "11s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.6         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dhq366ptf/video/upload/v1770906383/Taroko_e1459w.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 1.0                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
