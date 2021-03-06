/**
 * Global
 *
 * File: /src/_includes/_js/global.js
 * Project: Baythium Packer Client
 * Organization: Baythium Ecosystem: https://baythium.com
 */

(function(w, d) {
  "use strict";

  w.addEventListener("DOMContentLoaded", e => {
    initializeGoogleAnalytics();
    initializeGoogleTagManager();

    /*
     * SUSPENDED
     *
     * This method of identifying anonymous users uses the browser's storage mechanism, which is not shared across devices. 
     * Because we do not have a an email address or user ID to identify the user across devices and browsers, they could see Appcues multiple times. 
     * People who use multiple devices or "incognito" browsers are pretty aware of this fact and usually don't mind seeing a duplicate 
     * message or two.
     *
     * @see: https://docs.appcues.com/article/438-anonymous-users 
     */
    // Appcues.anonymous();

    console.info("Baythium Aspectus initialized", aspectus.pkg());
  });

  const initializeGoogleAnalytics = () => {
    w.dataLayer = w.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }

    gtag("js", new Date());
    gtag("config", "UA-163071822-1");
  }

  const initializeGoogleTagManager = () => {
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        "gtm.start": new Date().getTime(),
        event: "gtm.js"
      });
      
      var f = d.getElementsByTagName(s)[0], j=d.createElement(s), dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-5WH62H7");
  }
})(window, document);