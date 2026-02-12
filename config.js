// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Nanduuuuhhh🦅",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "is pookie gon b my Valentine👉👈",

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
            text: "Do you like me babe?",                                    // First interaction
            yesBtn: "Yee",                                             // Text for "Yes" button
            noBtn: "FUCK NAH NIGGA🖕",                                               // Text for "No" button
            secretAnswer: "I don like you, I love you babe purr meow"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next "                                         // Text for the next button
        },
        third: {
            text: "Will u pwease be my valentine sweetie👉👈", // The big question!
            yesBtn: "Yee",                                             // Text for "Yes" button
            noBtn: "nigga i js said NO NA"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "OMAGAAAAA U LOVE ME THT MCH???",  // Shows when they go past 5000%
        high: "To infinity and beyond??? i still luv u more👅",              // Shows when they go past 1000%
        normal: "awwhh my babyyyyy sowwy"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "YYAYAYAY FR?? OHMGGGG MOMMY THE LUCKIEST EVER ",
        message: "Now come get your gift mommies huggies n kisses mWAHMWHAHAMWHAHHAHAHAHA",
        emojis: "💕💓💞💋👉👈🤍👅💋💋"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "13s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.6s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://collection.cloudinary.com/dhq366ptf/480a94997218f11a8cdf810fc5a1cfac", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
