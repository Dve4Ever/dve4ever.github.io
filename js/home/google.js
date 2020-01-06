const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);


if (screen.width <= 699) {
document.location = "old.html";
}

if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
   location.replace("old.html");
}

AOS.init();var OneSignal=window.OneSignal||[];OneSignal.push(function(){OneSignal.init({appId:"56959eb3-2a61-41f0-9219-bc7ef3cbe6fb"})});var uid="252266",wid="521007";function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","UA-148031841-1"),(adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-5731588986654370",enable_page_level_ads:!0});window.addEventListener("load", function(){window.wpcc.init({"colors":{"popup":{"background":"#222222","text":"#ffffff","border":"#e6b3b3"},"button":{"background":"#e6b3b3","text":"#000000"}},"corners":"large","transparency":"20","fontsize":"small","content":{"href":"https://www.websitepolicies.com/policies/view/nrNTUgOr","message":"This website utilizes cookies to ensure you get the best experience on our website"},"margin":"large"})});
