module.exports = {
    // Add the different locales
    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
            lang: 'en-US', // this will be set as the lang attribute on <html>
            title: 'Xiaomi Wiki',
            description: 'Resources for Xiaomi devices, formerly hosted on r/Xiaomi'
        },
        '/fr/': {
            lang: 'fr-FR',
            title: 'Xiaomi Wiki',
            description: 'Ressources pour les appareils Xiaomi, anciennement hébergés sur r/Xiaomi'
        }
    },
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        locales: {
            '/': {
                // text for the language dropdown
                selectLanguageName: 'English'
            },
            '/fr/': {
                selectLanguageName: 'Français'
            }
        }
    },
}