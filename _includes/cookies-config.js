var klaroConfig = {
    version: 1,
    elementID: 'klaro',
    styling: {
        theme: ['light', 'top', 'wide'],
    },
    noAutoLoad: false,
    htmlTexts: false,
    embedded: false,
    groupByPurpose: true,
    storageMethod: 'cookie',
    cookieName: 'cookie_settings',
    cookieExpiresAfterDays: 365,
    default: false,
    mustConsent: false,
    acceptAll: true,
    hideDeclineAll: false,
    hideLearnMore: false,
    noticeAsModal: false,
    services: [
        {
            name: 'contrast',
            default: true,
            purposes: ['functional'],
            cookies: ['contrast'],
            required: true,
            optOut: false,
            onlyOnce: true,
        },
        {
            name: 'cookie_settings',
            default: true,
            purposes: ['functional'],
            cookies: ['cookie_settings'],
            required: true,
            optOut: false,
            onlyOnce: true,
        },
        {
            name: 'google-analytics',
            default: false,
            purposes: ['analytics'],
            cookies: ['_gat', '_gid', '_ga'],
            required: false,
            optOut: false,
            onlyOnce: false,
        },
    ],
};

klaroConfig.lang = 'es';

// Assuming Jekyll data is available in site.data.translations
var translations = {{ site.data.translations | jsonify }};
klaroConfig.translations = translations;

var allRequired = true;
klaroConfig.services.forEach(function(service) {
    if (!service.required) {
        allRequired = false;
    }
    if (service.name === 'contrast') {
        service.translations = translations.contrast;
    } else if (service.name === 'cookie_settings') {
        service.translations = translations.cookie_settings;
    } else if (service.name === 'google-analytics') {
        service.translations = translations.google_analytics;
    }
});

if (allRequired) {
    klaroConfig.translations['es'].consentNotice.description = translations.consent_form.message;
    klaroConfig.translations['es'].ok = translations.consent_form.agree;
    klaroConfig.hideDeclineAll = true;
    klaroConfig.hideLearnMore = true;
}