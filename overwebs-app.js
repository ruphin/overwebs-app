import{GluonElement,html}from'../gluonjs/gluon.js';import{onRouteChange,resolveURL}from'../gluon-router/gluon-router.js';import'../overwebs-main-page/overwebs-main-page.js';import'../overwebs-login-page/overwebs-login-page.js';import'../overwebs-play-page/overwebs-play-page.js';import'../overwebs-background-data/overwebs-background-data.js';import'../overwebs-background/overwebs-background.js';let _mobile;(function(b){_mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(b)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera),_mobile&&document.documentElement.style.setProperty(`--overwebs-window-size`,`1660px`);const playerStub={unlocks:{ana:12,bastion:47,dva:24,genji:42,hanzo:36,junkrat:18,lucio:46,mccree:12,mei:25,mercy:2,pharah:17,reaper:39,reinhardt:10,roadhog:32,soldier76:33,symmetra:15,torbjorn:17,tracer:27,widowmaker:25,winston:46,zarya:18,zenyatta:51,sombra:37}};class OverwebsApp extends GluonElement{get template(){return html`
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
    `}constructor(){super();firebase.initializeApp({apiKey:'AIzaSyD-FCqLAtCYYCitKmErFWT2xEQyHk7fhBU',authDomain:'overwebs-86c53.firebaseapp.com',databaseURL:'https://overwebs-86c53.firebaseio.com'}),this._routes={},window.history.replaceState({},null,'/loading'),window.dispatchEvent(new Event('location-changed'))}connectedCallback(){super.connectedCallback(),this.$.playerData.player=playerStub,onRouteChange((a,b)=>{const c=b.match(/background=([^\?]*)/);if(c)return this.$.backgroundData.select=c[1],window.history.replaceState({},null,'/main'),void window.dispatchEvent(new Event('location-changed'));const d=this._oldPath,e=a.slice(1);if(this._oldPath=e,this._routes[d]&&this._routes[d].classList.remove('visible'),!this.loggedIn&&'login'!=e)return window.history.replaceState({},null,'/login'),void window.dispatchEvent(new Event('location-changed'));if(this._routes[e])this._routes[e].classList.add('visible');else return void(this._routes[d]&&(console.warn('Requested page does not exist'),window.history.back()));if('login'===e?this.$.chat.setAttribute('hidden',''):this.$.chat.removeAttribute('hidden'),this.$.background.page=e,'main'!=e&&this._routes[e]&&'exit'!=e){let a=this._routes[e].tagName.toLowerCase(),b=window.modulesAssetPath&&`${window.modulesAssetPath(a)}/${a}.js`||'someElement.js';console.log(`Attempting to lazy-load ${b}`)}'exit'===e&&(document.cookie='userName=;expires=Thu, 01 Jan 1970 00:00:01 GMT;',document.cookie='battleTag=;expires=Thu, 01 Jan 1970 00:00:01 GMT;',document.cookie='anonymous=;expires=Thu, 01 Jan 1970 00:00:01 GMT;',this.loggedIn=!1)}),Array.prototype.map.call(this.$.pages.children,(a)=>{this._routes[a.getAttribute('route')]=a}),_mobile&&(this.$.background.lowBandwidth=!0);const a=document.cookie.replace(/(?:(?:^|.*;\s*)anonymous\s*\=\s*([^;]*).*$)|^.*$/,'$1');if(a)this._login(null,null,a);else{const a=document.cookie.replace(/(?:(?:^|.*;\s*)userName\s*\=\s*([^;]*).*$)|^.*$/,'$1');if(a){const b=document.cookie.replace(/(?:(?:^|.*;\s*)battleTag\s*\=\s*([^;]*).*$)|^.*$/,'$1');this._login(a,b,!1)}else window.history.replaceState({},null,'/login'),window.dispatchEvent(new Event('location-changed'))}this.$.loginPage.addEventListener('login',(a)=>{const b=a.detail;b.anonymous?document.cookie=`anonymous=true`:(document.cookie=`userName=${b.userName}`,b.battleTag&&(document.cookie=`battleTag=${b.battleTag}`)),this._login(b.userName,b.battleTag,b.anonymous)},!0),this.$.background.backgrounds=this.$.backgroundData.backgrounds,this.$.backgroundData.addEventListener('backgrounds-changed',()=>this.$.background.backgrounds=this.$.backgroundData.backgrounds,!0),this.addEventListener('notification',(a)=>this._notification(a),!0),this.addEventListener('queue',(a)=>this._queue(a.detail.queueType),!0)}_login(a,b,c){let d;if(c){let a=document.cookie.replace(/(?:(?:^|.*;\s*)anonymousTag\s*\=\s*([^;]*).*$)|^.*$/,'$1');a||(a=Math.random().toString(36).slice(2,8),document.cookie=`anonymousTag=${a}`),d=`Anonymous-${a}`}else d=b?`${a}-${b}`:a;const f=d+'000000'.slice(d.length);firebase.auth().createUserWithEmailAndPassword(`${d}@ruph.in`,f).then((a)=>(firebase.database().ref(`messages/${a.uid}`).push(d),a)).catch((a)=>{if('auth/email-already-in-use'==a.code)return firebase.auth().signInWithEmailAndPassword(`${d}@ruph.in`,f)}).then((a)=>{console.info(`Logged in as ${d}`),a.updateProfile({displayName:d.replace('-','#')}).catch(()=>{console.warn('Failed to add DisplayName')})}).catch((a)=>{console.warn('Firebase login failed'),console.warn(a)}),new Promise((a,d)=>{!c&&b?a():d()}).then(()=>fetch(`https://owapi.net/api/v3/u/${a}-${b}/stats`)).then((a)=>a.json()).then((a)=>{const b=a.any||a.eu||a.us||a.kr,c=b.stats.quickplay.overall_stats;this.$.playerData.level=100*c.prestige+c.level,this.$.playerData.avatar=c.avatar}).catch(()=>{this.$.playerData.level=Math.ceil(400*Math.random())}),this.loggedIn=!0,window.history.replaceState({},null,'/main'),window.dispatchEvent(new Event('location-changed'))}_queue(a){console.log(this.$['queue-manager']),this.$['queue-manager'].queue(a)}_notification(a){this.$.notification.removeAttribute('hidden'),a.detail.title&&Polymer.dom(this.$['notification-title']).appendChild(a.detail.title),a.detail.message&&Polymer.dom(this.$['notification-message']).appendChild(a.detail.message),a.detail.button&&Polymer.dom(this.$['notification-button']).appendChild(a.detail.button)}}customElements.define(OverwebsApp.is,OverwebsApp);
//# sourceMappingURL=overwebs-app.js.map
