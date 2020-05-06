import * as Sentry from '@sentry/browser';

function init() {
    Sentry.init({ dsn: "https://fd6d05696a4b4a0b896dad1e373044de@o386464.ingest.sentry.io/5220809" });
}

function log(error) {
    Sentry.captureException(error);
}

export default {
    init,
    log,
};