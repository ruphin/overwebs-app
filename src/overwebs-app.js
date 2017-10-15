import { GluonElement, html } from '../gluonjs/gluon.js';
import { onRouteChange, resolveURL } from '../gluon-router/gluon-router.js';
import '../overwebs-main-page/overwebs-main-page.js';
import '../overwebs-login-page/overwebs-login-page.js';
import '../overwebs-play-page/overwebs-play-page.js';
import '../overwebs-background-data/overwebs-background-data.js';
import '../overwebs-background/overwebs-background.js';

// Test for mobile agents
let _mobile;
(function(a) {
  _mobile =
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
      a
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      a.substr(0, 4)
    );
})(navigator.userAgent || navigator.vendor || window.opera);

if (_mobile) {
  document.documentElement.style.setProperty(`--overwebs-window-size`, `1660px`);
}

const playerStub = {
  unlocks: {
    ana: 12,
    bastion: 47,
    dva: 24,
    genji: 42,
    hanzo: 36,
    junkrat: 18,
    lucio: 46,
    mccree: 12,
    mei: 25,
    mercy: 2,
    pharah: 17,
    reaper: 39,
    reinhardt: 10,
    roadhog: 32,
    soldier76: 33,
    symmetra: 15,
    torbjorn: 17,
    tracer: 27,
    widowmaker: 25,
    winston: 46,
    zarya: 18,
    zenyatta: 51,
    sombra: 37
  }
};

class OverwebsApp extends GluonElement {
  get template() {
    return html`
    <style>
      :host {
        display: block;
        position: relative;
        background: black;
        overflow: hidden;
        min-height: 100vh;
      }

      #chat[hidden] {
        display: none;
      }

      #pages > *:not(.visible) {
        display: none;
      }

      #exit {
        display: block;
        position: relative;
        height: 100vh;
        width: 100vw;
        background: black;
      }
    </style>
    <overwebs-background-data id="backgroundData"></overwebs-background-data>
    <overwebs-background id="background"></overwebs-background>

    <div id="pages">
      <a href="/" route="exit" id="exit"></a>
      <overwebs-login-page id="loginPage" route="login"></overwebs-login-page>
      <overwebs-main-page id="mainPage" route="main"></overwebs-main-page>
      <overwebs-gallery-page route="hero-gallery"></overwebs-gallery-page>
      <overwebs-play-page route="play"></overwebs-play-page>
      <overwebs-competitive-page route="competitive"></overwebs-competitive-page>
      <overwebs-arcade-page route="arcade"></overwebs-arcade-page>
      <overwebs-training-page route="training"></overwebs-training-page>
      <overwebs-vs-ai-page route="vs-ai"></overwebs-vs-ai-page>
      <div class="loading" route="loading"></div>
    </div>

    <overwebs-notification id="notification" spinner hidden>
      <div slot="title" id="notification-title"></div>
      <div slot="message" id="notification-message"></div>
      <div slot="button" id="notification-button"></div>
    </overwebs-notification>

    <overwebs-queue-manager id='queue-manager'></overwebs-queue-manager>

    <overwebs-player-data id="playerData"></overwebs-player-data>
    <overwebs-chat-widget id="chat" tabindex="-1" firebase="[[firebase]]" player-data="[[playerData]]"></overwebs-chat-widget>
    `;
  }
  constructor() {
    super();
    // TODO: Remember the initial route so we can redirect there after the loading redirect

    var config = {
      apiKey: 'AIzaSyD-FCqLAtCYYCitKmErFWT2xEQyHk7fhBU',
      authDomain: 'overwebs-86c53.firebaseapp.com',
      databaseURL: 'https://overwebs-86c53.firebaseio.com'
    };
    firebase.initializeApp(config);

    this._routes = {};

    // At initial boot, redirect to loading screen
    window.history.replaceState({}, null, '/loading');
    window.dispatchEvent(new Event('location-changed'));
  }

  connectedCallback() {
    super.connectedCallback();

    this.$.playerData.player = playerStub;

    onRouteChange((path, query, hash) => {
      // Some browsers call `onRouteChange` before `ready`.
      // If this happens, `this._routes` is still empty.
      // In that case, simply defer the call to `_routeChanged`.
      // if (Object.keys(this._routes).length === 0) {
      //   setTimeout(() => { this._routeChanged(newRoute, oldRoute) }, 0);
      //   return;
      // }

      // I'm not sure if this belongs here. Maybe I need to extract the logic for this somehow and expose an API
      const backgroundChange = query.match(/background=([^\?]*)/);
      if (backgroundChange) {
        this.$.backgroundData.select = backgroundChange[1]; // TODO: USE QUERY
        window.history.replaceState({}, null, '/main');
        window.dispatchEvent(new Event('location-changed'));
        return;
      }

      // Remove initial '/' in the route path
      const oldPath = this._oldPath;
      const newPath = path.slice(1);
      this._oldPath = newPath;

      // Hide the old page
      if (this._routes[oldPath]) {
        this._routes[oldPath].classList.remove('visible');
      }

      // Redirect to login if we are not logged in
      if (!this.loggedIn && newPath != 'login') {
        window.history.replaceState({}, null, '/login');
        window.dispatchEvent(new Event('location-changed'));
        return;
      }

      // Show the new page
      if (this._routes[newPath]) {
        this._routes[newPath].classList.add('visible');
      } else {
        // Go back if the new page does not exist (and the old page does)
        if (this._routes[oldPath]) {
          console.warn('Requested page does not exist');
          window.history.back();
        }
        return;
      }

      // Enable or disable or move the chat widget depending on the page.
      // Should this be responsibility of the app? I don't know.
      if (newPath === 'login') {
        this.$.chat.setAttribute('hidden', '');
      } else {
        this.$.chat.removeAttribute('hidden');
      }

      // Notify the background element that we changed route
      this.$.background.page = newPath;

      // Lazy load any new pages we are visiting that haven't been loaded yet
      if (newPath != 'main' && this._routes[newPath] && newPath != 'exit') {
        let newPathElement = this._routes[newPath].tagName.toLowerCase();
        // TODO: Relative imports
        let newPage = (window.modulesAssetPath && `${window.modulesAssetPath(newPathElement)}/${newPathElement}.js`) || 'someElement.js';
        console.log(`Attempting to lazy-load ${newPage}`);
        // TODO: Dynamic imports
        // import(newPage).then(() => {
        //   console.log('Lazy loaded ' + newPage);
        // }, () => {
        //   console.warn('Cannot lazy load ' + newPage);
        //   window.history.back();
        // });
      }

      if (newPath === 'exit') {
        document.cookie = 'userName=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        document.cookie = 'battleTag=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        document.cookie = 'anonymous=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        this.loggedIn = false;
      }
    });

    Array.prototype.map.call(this.$.pages.children, page => {
      this._routes[page.getAttribute('route')] = page;
    });
    if (_mobile) {
      this.$.background.lowBandwidth = true;
    }

    // Check if this user has previously logged in by checking cookies
    const anonymous = document.cookie.replace(/(?:(?:^|.*;\s*)anonymous\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    if (anonymous) {
      // If the user logged in as anonymous, perform anonymous login
      this._login(null, null, anonymous);
    } else {
      const userName = document.cookie.replace(/(?:(?:^|.*;\s*)userName\s*\=\s*([^;]*).*$)|^.*$/, '$1');
      // If the user logged in with a userName, perform login with userName and battleTag
      if (userName) {
        const battleTag = document.cookie.replace(/(?:(?:^|.*;\s*)battleTag\s*\=\s*([^;]*).*$)|^.*$/, '$1');
        this._login(userName, battleTag, false);
      } else {
        // Otherwise, redirect to login page
        window.history.replaceState({}, null, '/login');
        window.dispatchEvent(new Event('location-changed'));
      }
    }

    // Listen to login events from the loginPage
    this.$.loginPage.addEventListener(
      'login',
      e => {
        const login = e.detail;
        if (login.anonymous) {
          document.cookie = `anonymous=true`;
        } else {
          document.cookie = `userName=${login.userName}`;
          if (login.battleTag) {
            document.cookie = `battleTag=${login.battleTag}`;
          }
        }
        this._login(login.userName, login.battleTag, login.anonymous);
      },
      true
    );

    this.$.background.backgrounds = this.$.backgroundData.backgrounds;
    this.$.backgroundData.addEventListener('backgrounds-changed', () => (this.$.background.backgrounds = this.$.backgroundData.backgrounds), true);

    this.addEventListener('notification', e => this._notification(e), true);

    this.addEventListener('queue', e => this._queue(e.detail.queueType), true);
  }

  _login(userName, battleTag, anonymous) {
    let userID;

    if (anonymous) {
      let anonymousTag = document.cookie.replace(/(?:(?:^|.*;\s*)anonymousTag\s*\=\s*([^;]*).*$)|^.*$/, '$1');
      // Generate a persistent random tag for Anonymous logins
      if (!anonymousTag) {
        anonymousTag = Math.random()
          .toString(36)
          .slice(2, 8);
        document.cookie = `anonymousTag=${anonymousTag}`;
      }
      userID = `Anonymous-${anonymousTag}`;
    } else if (battleTag) {
      userID = `${userName}-${battleTag}`;
    } else {
      userID = userName;
    }

    // Create a password equal to userID padded with 0s
    const password = userID + '000000'.slice(userID.length);

    // Log the user into firebase
    firebase
      .auth()
      .createUserWithEmailAndPassword(`${userID}@ruph.in`, password)
      .then(e => {
        // If a new user is created, push the userID
        // onto the database message list so we know who's who
        firebase
          .database()
          .ref(`messages/${e.uid}`)
          .push(userID);
        return e;
      })
      .catch(e => {
        // If the user already logged in before, just log in directly
        if (e.code == 'auth/email-already-in-use') {
          return firebase.auth().signInWithEmailAndPassword(`${userID}@ruph.in`, password);
        }
      })
      .then(e => {
        console.info(`Logged in as ${userID}`);
        e.updateProfile({ displayName: userID.replace('-', '#') }).catch(e => {
          console.warn('Failed to add DisplayName');
        });
      })
      .catch(e => {
        console.warn('Firebase login failed');
        console.warn(e);
      });

    // Set correct level and avatar for provided user
    new Promise((resolve, reject) => {
      // If the user is not anonymous and has a battleTag, we look up their stats.
      if (!anonymous && battleTag) {
        resolve();
      } else {
        // Otherwise fall back to random
        reject();
      }
    })
      .then(() => fetch(`https://owapi.net/api/v3/u/${userName}-${battleTag}/stats`))
      .then(response => response.json())
      .then(json => {
        const account = json.any || json.eu || json.us || json.kr;
        const stats = account.stats.quickplay.overall_stats;
        this.$.playerData.level = stats.prestige * 100 + stats.level;
        this.$.playerData.avatar = stats.avatar;
      })
      .catch(e => {
        // If anything fails, use a random level and avatar
        this.$.playerData.level = Math.ceil(Math.random() * 400);
        // TODO: Random avatar
      });

    this.loggedIn = true;
    window.history.replaceState({}, null, '/main');
    window.dispatchEvent(new Event('location-changed'));
  }

  _queue(queueType) {
    console.log(this.$['queue-manager']);
    this.$['queue-manager'].queue(queueType);
  }

  _notification(e) {
    this.$.notification.removeAttribute('hidden');
    if (e.detail['title']) {
      Polymer.dom(this.$['notification-title']).appendChild(e.detail['title']);
    }
    if (e.detail['message']) {
      Polymer.dom(this.$['notification-message']).appendChild(e.detail['message']);
    }
    if (e.detail['button']) {
      Polymer.dom(this.$['notification-button']).appendChild(e.detail['button']);
    }
  }
}

customElements.define(OverwebsApp.is, OverwebsApp);
