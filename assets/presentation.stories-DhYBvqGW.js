import{v as i,o as s,p as l,j as c,i as d,f as u,e as p,d as m}from"./package-BixljKZz.js";function k(){return k=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)({}).hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},k.apply(null,arguments)}function P(n){if(typeof n=="string")try{n=JSON.parse(n)}catch{return{}}return n}class q{constructor(){this.map=new Map}getCallbacks(e){return this.map.get(e)||[]}removeCallback(e,t){const o=this.map.get(e)||[];if(!o)return;if(!t)return void this.map.delete(e);const r=o.indexOf(t);r!==-1&&o.splice(r,1),o.length===0?this.map.delete(e):this.map.set(e,o)}shiftCallback(e){const t=this.getCallbacks(e);if(t.length===0)return;const o=t.shift();return this.removeCallback(e,o),o}storeCallback(e,t){const o=this.map.get(e)||[];o.push(t),this.map.set(e,o)}}class I{constructor(e){this.iframe=void 0,this.callbackStore=void 0,this.guid=void 0,this.messageHandler=void 0,this.originUrl=void 0,this.origin="*",this.readyPromise=void 0,this.version=3,this.iframe=e,this.originUrl=new URL(this.iframe.src).origin,this.guid=crypto.randomUUID(),this.callbackStore=new q,this.readyPromise=new Promise(t=>{this.messageHandler=o=>{if(o.origin!==this.originUrl)return;const r=P(o.data);if(r?.version===this.version&&(r?.action!=="handshake"||r?.guid===this.guid))if(r?.action!=="ready"){if(r?.action==="handshake")return this.origin=o.origin,void t();this.processData(r)}else{const a=this.findIframe(r.value);a?a===this.iframe&&(this.origin=o.origin,t()):console.error("[Qumu Cloud Player SDK]","A Qumu Cloud player is ready but it is impossible to find the corresponding iFrame, the SDK will not work correctly. Incorrect URL is:",r.value)}},window.addEventListener("message",this.messageHandler)}),this.postMessage({action:"handshake",guid:this.guid})}addEventListener(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if(typeof t!="function")throw new TypeError("The callback must be a function.");if(e==="ready")return this.callbackStore.storeCallback(`event:${e}`,t),void this.readyPromise.then(()=>{this.callbackStore.getCallbacks(`event:${e}`).includes(t)&&t()});this.callbackStore.getCallbacks(`event:${e}`).length===0&&this.readyPromise.then(()=>{this.postMessage({action:"event",guid:this.guid,name:e,value:"add"})}),this.callbackStore.storeCallback(`event:${e}`,t)}destroy(){this.messageHandler&&window.removeEventListener("message",this.messageHandler),this.postMessage({action:"command",guid:this.guid,name:"destroy"})}disableCaptionTrack(){this.enableCaptionTrack(null)}enableCaptionTrack(e){this.set("captionTrack",e)}async getAudienceReactions(){return this.get("audienceReactions")}async getCaptionTracks(){return this.get("captionTracks")}async getChapters(){return this.get("chapters")}async getCurrentChapter(){return this.get("chapter")}async getCurrentCaptionTrack(){return this.get("captionTrack")}async getCurrentTime(){return this.get("currentTime")}async getDuration(){return this.get("duration")}async getLayout(){return this.get("layout")}async getLevel(){return this.get("level")}async getLevels(){return this.get("levels")}async getLiveEndTime(){return this.get("liveEndTime")}async getLiveStartTime(){return this.get("liveStartTime")}async getLiveState(){return this.get("liveState")}async getPictureInPicturePosition(){return this.get("pipPosition")}async getPlaybackLevel(){return this.get("playbackLevel")}async getPlaybackRate(){return this.get("playbackRate")}async getPlaybackRates(){return this.get("playbackRates")}async getPresentation(){return this.get("presentation")}async getPrimaryContent(){return this.get("primaryContent")}async getSideBySideRatio(){return this.get("sideBySideRatio")}async getVolume(){return this.get("volume")}async isPaused(){return this.get("paused")}pause(){this.command("pause")}play(){this.command("play")}sendAudienceReaction(e){this.set("audienceReaction",e)}removeEventListener(e,t){if(!e)throw new TypeError("You must pass an event name.");this.callbackStore.removeCallback(`event:${e}`,t),this.callbackStore.getCallbacks(`event:${e}`).length===0&&this.postMessage({action:"event",guid:this.guid,name:e,value:"remove"})}setCurrentTime(e){if(e<0)throw new Error("The current time must be superior or equal to 0");this.set("currentTime",e)}setLayout(e){this.set("layout",e)}setLevel(e){if(e<-1||e===0)throw new Error("The level must set to -1 for automatic switching or be superior to 0");this.set("level",e)}setPictureInPicturePosition(e){this.set("pipPosition",e)}setPlaybackRate(e){if(e<0)throw new Error("The playback rate must be superior or equal to 0");if(e>2)throw new Error("The playback rate must be inferior or equal to 2");this.set("playbackRate",e)}setPrimaryContent(e){this.set("primaryContent",e)}setSideBySideRatio(e){if(e<50||e>80)throw new Error("The ratio must be between 50 and 80");this.set("sideBySideRatio",e)}setVolume(e){if(e<0||e>100)throw new Error("The volume must be between 0 and 100");this.set("volume",e)}command(e,t){const o={action:"command",guid:this.guid,name:e};t&&(o.value=t),this.postMessage(o)}findIframe(e){if(!e)return this.iframe;const t=window.document.querySelector(`iframe[src="${e}"]`);if(t)return t;const o=window.document.querySelectorAll("iframe"),r=decodeURIComponent(e);for(const a of o)if(r===decodeURIComponent(a.src))return a}async get(e){return await this.readyPromise,new Promise((t,o)=>{try{this.callbackStore.storeCallback(`get:${e}`,{reject:o,resolve:t}),this.postMessage({action:"get",guid:this.guid,name:e})}catch(r){o(r)}})}postMessage(e){var t;const o=JSON.stringify(k({},e,{version:this.version}));(t=this.iframe.contentWindow)==null||t.postMessage(o,this.origin)}processData(e){const t=P(e);let o=[];if(t?.version===this.version&&t?.guid===this.guid){if(t.action==="event")o=this.callbackStore.getCallbacks(`${t.action}:${t.name}`);else if(t.action==="get"||t.action==="set"){const r=this.callbackStore.shiftCallback(`${t.action}:${t.name}`);r&&o.push(r)}o.forEach(r=>{typeof r=="function"?r(t.value):r.resolve(t.value)})}}set(e,t){if(t===void 0)throw new TypeError("A value must be set.");this.readyPromise.then(()=>{this.postMessage({action:"set",guid:this.guid,name:e,value:t})})}}function v(n){const e={playbackMode:n.playbackMode};n.playIconPosition&&(e.playIcon=e.playIcon||{},e.playIcon.position=n.playIconPosition),n.playIconWidth!==void 0&&n.playIconWidth!==null&&(e.playIcon=e.playIcon||{},e.playIcon.width=n.playIconWidth),n.playIconHeight!==void 0&&n.playIconHeight!==null&&(e.playIcon=e.playIcon||{},e.playIcon.height=n.playIconHeight),n.playIconUrl&&(e.playIcon=e.playIcon||{},e.playIcon.url=n.playIconUrl);const t={};n.playerCaptions&&(t.captions=n.playerCaptions),n.playerConfigurationGuid&&(t.playerConfigurationGuid=n.playerConfigurationGuid),n.playerDebug!==void 0&&n.playerDebug!==null&&(t.debug=n.playerDebug),n.playerLoop!==void 0&&n.playerLoop!==null&&(t.loop=n.playerLoop),n.playerView&&(t.pv=n.playerView),n.playerQuality&&(t.quality=n.playerQuality),n.playerShowControlPanel!==void 0&&n.playerShowControlPanel!==null&&(t.showControlPanel=n.playerShowControlPanel),n.playerSidebar!==void 0&&n.playerSidebar!==null&&(t.sidebar=n.playerSidebar),n.playerStart&&(t.start=n.playerStart),n.playerVolume&&(t.volume=n.playerVolume),n.playerReporting!==void 0&&n.playerReporting!==null&&(t.reporting=n.playerReporting),n.playerReportingId&&(t.reportingId=n.playerReportingId);const o={host:n.host,guid:n.guid,widgetOptions:e};return Object.keys(t).length&&(o.playerParameters=t),o}const C=`
--qc-presentation-widget-border-radius: 0;
--qc-presentation-widget-height: 100%;
--qc-presentation-widget-width: 100%;

--qc-thumbnail-image-fit: cover;

--qc-play-button-background-color: rgb(0 0 0 / .8);
--qc-play-button-color: #fff;
--qc-play-button-margin: 16px;
--qc-play-button-padding: 8px;

--qc-play-button-hover-background-color: #000;
--qc-play-button-hover-color: #fff;

--qc-play-button-active-background-color: rgb(0 0 0 / .9);
--qc-play-button-active-color: #fff;

--qc-dialog-backdrop-color: rgb(0 0 0 / .5);
--qc-dialog-background-color: #000;
--qc-dialog-border: 3px solid #000;
--qc-dialog-border-radius: 0;
--qc-dialog-padding: 0;
--qc-dialog-max-width: 1100px;
--qc-dialog-width: 90vw;

--qc-close-button-background-color: rgb(0 0 0 / .75);
--qc-close-button-padding: 6px;
--qc-close-button-shadow: 0 0 1px 1px #000;
--qc-close-button-icon-size: 14px;

--qc-close-button-hover-background-color: rgb(0 0 0 / .9);
--qc-close-button-hover-color: #fff;

--qc-close-button-active-background-color: #000;
--qc-close-button-active-color: #fff;

--qc-not-found-border: 1px solid light-dark(rgb(0 0 0 / .15), rgb(255 255 255 / .15));
--qc-not-found-background-color: transparent;
--qc-not-found-color: light-dark(#000, #fff);
--qc-not-found-icon-color: light-dark(rgb(0 0 0 / .25), rgb(255 255 255 / .25));
`,S=C.split(`
`).filter(n=>n.trim().startsWith("--qc-")).reduce((n,e)=>{const[t,o]=e.split(":").map(r=>r?.trim());return n.set(t,o.replace(";","")),n},new Map);function x(n){return n.split(`
`).filter(e=>e.trim().startsWith("--qc-")).reduce((e,t)=>{let[o,r]=t.split(":").map(a=>a?.trim());return r=r?.replace(";",""),S.has(o)&&S.get(o)!==r&&e.push(`${o}: ${r};`),e},[]).join(`
`)}const E={component:"presentation-widget"},g={parameters:{docs:{source:{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <title>Presentation Widget</title>
    <link rel="stylesheet" href="https://unpkg.com/@enghouse-qumu/widgets@${i}/presentation-widget.css">
  </head>
  <body>
    <div id="widget"></div>

    <script type="module">
      import { PresentationWidget } from 'https://unpkg.com/@enghouse-qumu/widgets@${i}/presentation-widget.js';

      PresentationWidget.create({
        guid: 'JN6JHrg17xpwF8klXSIfFj',
        host: 'demo.qumucloud.com',
        selector: '#widget',
      }).catch((err) => console.log(err));
    <\/script>
  </body>
</html>`}}},render:()=>{const n=document.createElement("div");return s.create({guid:"JN6JHrg17xpwF8klXSIfFj",host:"demo.qumucloud.com",locales:{de:m,es:p,fr:u,it:d,ja:c,pt:l},selector:n}).catch(console.error),n}},h={parameters:{docs:{source:{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <title>Presentation Widget</title>
    <link rel="stylesheet" href="https://unpkg.com/@enghouse-qumu/widgets@${i}/presentation-widget.css">
  </head>
  <body>
    <div id="widget"></div>

    <script type="module">
      import { PresentationWidget } from 'https://unpkg.com/@enghouse-qumu/widgets@${i}/presentation-widget.js';

      PresentationWidget.create({
        guid: 'JN6JHrg17xpwF8klXSIfFj',
        host: 'demo.qumucloud.com',
        selector: '#widget',
        widgetOptions: {
          playbackMode: 'modal',
        },
      }).catch((err) => console.log(err));
    <\/script>
  </body>
</html>`}}},render:()=>{const n=document.createElement("div");n.style.display="grid",n.style.gap="16px",n.style.gridTemplateColumns="repeat(2, 1fr)";const e=document.createElement("div"),t=document.createElement("div");return n.appendChild(e),n.appendChild(t),s.create({guid:"JN6JHrg17xpwF8klXSIfFj",host:"demo.qumucloud.com",locales:{de:m,es:p,fr:u,it:d,ja:c,pt:l},selector:e,widgetOptions:{playbackMode:"inline"}}).catch(console.error),s.create({guid:"JN6JHrg17xpwF8klXSIfFj",host:"demo.qumucloud.com",locales:{de:m,es:p,fr:u,it:d,ja:c,pt:l},selector:t,widgetOptions:{playbackMode:"modal"}}).catch(console.error),n}},y={parameters:{docs:{source:{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <title>Presentation Widget</title>
    <link rel="stylesheet" href="https://unpkg.com/@enghouse-qumu/widgets@${i}/presentation-widget.css">
  </head>
  <body>
    <div id="widget"></div>

    <script type="module">
      import { PresentationWidget } from 'https://unpkg.com/@enghouse-qumu/widgets@${i}/presentation-widget.js';

      PresentationWidget.create({
        guid: 'JN6JHrg17xpwF8klXSIfFj',
        host: 'demo.qumucloud.com',
        selector: '#widget',
        widgetOptions: {
          playIcon: {
            height: 48,
            position: 'bottom-left',
            url: 'https://demo.qumucloud.com/widgets/resources/custom-play-icon.png',
            width: 102,
          },
        },
      }).catch((err) => console.log(err));
    <\/script>
  </body>
</html>`}}},render:()=>{const n=document.createElement("div");return s.create({guid:"JN6JHrg17xpwF8klXSIfFj",host:"demo.qumucloud.com",locales:{de:m,es:p,fr:u,it:d,ja:c,pt:l},selector:n,widgetOptions:{playIcon:{height:48,position:"bottom-left",url:"https://demo.qumucloud.com/widgets/resources/custom-play-icon.png",width:102}}}).catch(console.error),n}},b={parameters:{docs:{source:{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <title>Presentation Widget</title>
    <link rel="stylesheet" href="https://unpkg.com/@enghouse-qumu/widgets@${i}/presentation-widget.css">
  </head>
  <body>
    <div id="widget"></div>

    <script type="module">
      import { PresentationWidget } from 'https://unpkg.com/@enghouse-qumu/widgets@${i}/presentation-widget.js';
      import { PlayerSdk } from "https://unpkg.com/@enghouse-qumu/player-sdk@3.2.1/dist/index.modern.mjs";

      PresentationWidget.create({
        host:'demo.qumucloud.com',
        guid: 'JN6JHrg17xpwF8klXSIfFj',
        selector: '#widget',
        widgetOptions: {
          onIframeLoad(iframe) {
            const logsEl = document.querySelector("#logs");

            const sdk = new PlayerSdk(iframe);

            sdk.addEventListener("timeupdate", (newTime) => {
              logsEl.innerHTML += \`<li>timeupdate: \${newTime}</li>\`;
            });

            sdk.getDuration().then((duration) => {
              logsEl.innerHTML += \`<li>duration: \${newTime}</li>\`;
            });
          },
        },
      }).catch((err) => console.log(err));
    <\/script>
  </body>
</html>`}}},render:()=>{const n=document.createElement("div");n.style.display="grid",n.style.gap="16px",n.style.gridTemplateColumns="repeat(2, 1fr)";const e=document.createElement("div");e.style.width="640px",e.style.height="360px";const t=document.createElement("ul");return t.style.maxHeight="360px",t.style.overflowY="auto",t.style.listStyle="none",t.style.padding="0",t.style.margin="0",t.style.flex="1",n.appendChild(e),n.appendChild(t),s.create({guid:"JN6JHrg17xpwF8klXSIfFj",host:"demo.qumucloud.com",locales:{de:m,es:p,fr:u,it:d,ja:c,pt:l},selector:e,widgetOptions:{onIframeLoad(o){const r=new I(o);r.addEventListener("timeupdate",a=>{t.innerHTML+=`<li>timeupdate: ${a}</li>`}),r.getDuration().then(a=>{t.innerHTML+=`<li>duration: ${a}</li>`}).catch(console.error)}}}).catch(console.error),n}},f={args:{host:"demo.qumucloud.com",guid:"JN6JHrg17xpwF8klXSIfFj",playbackMode:"inline",playIconPosition:"center",cssVars:C.trim()},argTypes:{host:{control:"text"},guid:{control:"text"},playbackMode:{control:"select",name:"Playback Mode",options:["inline","inline-autoload","inline-autoplay","modal"],table:{defaultValue:{summary:"inline"}}},playIconPosition:{control:"select",name:"Position",options:["top-left","top","top-right","left","center","right","bottom-left","bottom","bottom-right"],table:{category:"Play Icon"}},playIconWidth:{control:"number",name:"Width",table:{category:"Play Icon"}},playIconHeight:{control:"number",name:"Height",table:{category:"Play Icon"}},playIconUrl:{control:"text",name:"Custom Play Icon URL",table:{category:"Play Icon"}},playerCaptions:{control:"text",name:"Captions",table:{category:"Player Parameters"}},playerConfigurationGuid:{control:"text",name:"playerConfigurationGuid",table:{category:"Player Parameters"}},playerDebug:{control:"boolean",name:"Enable Debug Mode",table:{category:"Player Parameters"}},playerLoop:{control:"boolean",name:"Loop",table:{category:"Player Parameters"}},playerView:{control:"select",name:"View",options:["pipls","pipss","sbs"],table:{category:"Player Parameters"}},playerQuality:{control:"select",name:"Quality",options:["auto","best","1440p","1080p","720p","360p","240p"],table:{category:"Player Parameters"}},playerShowControlPanel:{control:"boolean",name:"Show the Control Panel",table:{category:"Player Parameters"}},playerSidebar:{control:"boolean",name:"Show the Sidebar",table:{category:"Player Parameters"}},playerStart:{control:"text",name:"Start at",table:{category:"Player Parameters"}},playerVolume:{control:"range",max:100,min:0,name:"Volume",table:{category:"Player Parameters"}},playerReporting:{control:"boolean",name:"Enable Playback Analytics",table:{category:"Player Parameters"}},playerReportingId:{control:"text",name:"Reporting ID",table:{category:"Player Parameters"}},cssVars:{control:{multiline:!0,type:"text"},name:"CSS Variables",table:{category:"CSS Variables"}}},parameters:{docs:{source:{transform:(n,e)=>{const t=v(e.args),o=x(e.args.cssVars),r=o.length>0?`
    <style>
      :root {
        ${o.split(`
`).map((a,w)=>w===0?a:`        ${a}`).join(`
`)}
      }
    </style>`:"";return`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <title>Presentation Widget</title>
    <link rel="stylesheet" href="https://unpkg.com/@enghouse-qumu/widget@${i}/presentation-widget.css">${r}
  </head>
  <body>
    <div id="widget"></div>
    
    <script type="module">
      import { PresentationWidget } from 'https://unpkg.com/@enghouse-qumu/widget@${i}/presentation-widget.js';
      
      PresentationWidget.create(${JSON.stringify(t,null,2).split(`
`).map((a,w)=>w===0?a:`      ${a}`).join(`
`)}).catch((err) => console.log(err));
    <\/script>
  </body>
</html>
          `}}}},render:n=>{const e=document.createElement("div");return n.cssVars?.split(`
`).forEach(t=>{if(!t.startsWith("--qc-"))return;const[o,r]=t.split(":").map(a=>a?.trim());o&&r&&e.style.setProperty(o,r.replace(";",""))}),s.create({locales:{de:m,es:p,fr:u,it:d,ja:c,pt:l},selector:e,...v(n)}).catch(console.error),e}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <title>Presentation Widget</title>
    <link rel="stylesheet" href="https://unpkg.com/@enghouse-qumu/widgets@\${version}/presentation-widget.css">
  </head>
  <body>
    <div id="widget"></div>

    <script type="module">
      import { PresentationWidget } from 'https://unpkg.com/@enghouse-qumu/widgets@\${version}/presentation-widget.js';

      PresentationWidget.create({
        guid: 'JN6JHrg17xpwF8klXSIfFj',
        host: 'demo.qumucloud.com',
        selector: '#widget',
      }).catch((err) => console.log(err));
    <\/script>
  </body>
</html>\`
      }
    }
  },
  render: () => {
    const container = document.createElement('div');
    PresentationWidget.create({
      guid: 'JN6JHrg17xpwF8klXSIfFj',
      host: 'demo.qumucloud.com',
      locales: {
        de,
        es,
        fr,
        it,
        ja,
        pt
      },
      selector: container
    }).catch(console.error);
    return container;
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <title>Presentation Widget</title>
    <link rel="stylesheet" href="https://unpkg.com/@enghouse-qumu/widgets@\${version}/presentation-widget.css">
  </head>
  <body>
    <div id="widget"></div>

    <script type="module">
      import { PresentationWidget } from 'https://unpkg.com/@enghouse-qumu/widgets@\${version}/presentation-widget.js';

      PresentationWidget.create({
        guid: 'JN6JHrg17xpwF8klXSIfFj',
        host: 'demo.qumucloud.com',
        selector: '#widget',
        widgetOptions: {
          playbackMode: 'modal',
        },
      }).catch((err) => console.log(err));
    <\/script>
  </body>
</html>\`
      }
    }
  },
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gap = '16px';
    container.style.gridTemplateColumns = 'repeat(2, 1fr)';
    const playbackWidget = document.createElement('div');
    const thumbnailWidget = document.createElement('div');
    container.appendChild(playbackWidget);
    container.appendChild(thumbnailWidget);
    PresentationWidget.create({
      guid: 'JN6JHrg17xpwF8klXSIfFj',
      host: 'demo.qumucloud.com',
      locales: {
        de,
        es,
        fr,
        it,
        ja,
        pt
      },
      selector: playbackWidget,
      widgetOptions: {
        playbackMode: 'inline'
      }
    }).catch(console.error);
    PresentationWidget.create({
      guid: 'JN6JHrg17xpwF8klXSIfFj',
      host: 'demo.qumucloud.com',
      locales: {
        de,
        es,
        fr,
        it,
        ja,
        pt
      },
      selector: thumbnailWidget,
      widgetOptions: {
        playbackMode: 'modal'
      }
    }).catch(console.error);
    return container;
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <title>Presentation Widget</title>
    <link rel="stylesheet" href="https://unpkg.com/@enghouse-qumu/widgets@\${version}/presentation-widget.css">
  </head>
  <body>
    <div id="widget"></div>

    <script type="module">
      import { PresentationWidget } from 'https://unpkg.com/@enghouse-qumu/widgets@\${version}/presentation-widget.js';

      PresentationWidget.create({
        guid: 'JN6JHrg17xpwF8klXSIfFj',
        host: 'demo.qumucloud.com',
        selector: '#widget',
        widgetOptions: {
          playIcon: {
            height: 48,
            position: 'bottom-left',
            url: 'https://demo.qumucloud.com/widgets/resources/custom-play-icon.png',
            width: 102,
          },
        },
      }).catch((err) => console.log(err));
    <\/script>
  </body>
</html>\`
      }
    }
  },
  render: () => {
    const container = document.createElement('div');
    PresentationWidget.create({
      guid: 'JN6JHrg17xpwF8klXSIfFj',
      host: 'demo.qumucloud.com',
      locales: {
        de,
        es,
        fr,
        it,
        ja,
        pt
      },
      selector: container,
      widgetOptions: {
        playIcon: {
          height: 48,
          position: 'bottom-left',
          url: 'https://demo.qumucloud.com/widgets/resources/custom-play-icon.png',
          width: 102
        }
      }
    }).catch(console.error);
    return container;
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <title>Presentation Widget</title>
    <link rel="stylesheet" href="https://unpkg.com/@enghouse-qumu/widgets@\${version}/presentation-widget.css">
  </head>
  <body>
    <div id="widget"></div>

    <script type="module">
      import { PresentationWidget } from 'https://unpkg.com/@enghouse-qumu/widgets@\${version}/presentation-widget.js';
      import { PlayerSdk } from "https://unpkg.com/@enghouse-qumu/player-sdk@3.2.1/dist/index.modern.mjs";

      PresentationWidget.create({
        host:'demo.qumucloud.com',
        guid: 'JN6JHrg17xpwF8klXSIfFj',
        selector: '#widget',
        widgetOptions: {
          onIframeLoad(iframe) {
            const logsEl = document.querySelector("#logs");

            const sdk = new PlayerSdk(iframe);

            sdk.addEventListener("timeupdate", (newTime) => {
              logsEl.innerHTML += \\\`<li>timeupdate: \\\${newTime}</li>\\\`;
            });

            sdk.getDuration().then((duration) => {
              logsEl.innerHTML += \\\`<li>duration: \\\${newTime}</li>\\\`;
            });
          },
        },
      }).catch((err) => console.log(err));
    <\/script>
  </body>
</html>\`
      }
    }
  },
  render: () => {
    // Create container elements
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gap = '16px';
    container.style.gridTemplateColumns = 'repeat(2, 1fr)';
    const widget = document.createElement('div');
    widget.style.width = '640px';
    widget.style.height = '360px';
    const logs = document.createElement('ul');
    logs.style.maxHeight = '360px';
    logs.style.overflowY = 'auto';
    logs.style.listStyle = 'none';
    logs.style.padding = '0';
    logs.style.margin = '0';
    logs.style.flex = '1';
    container.appendChild(widget);
    container.appendChild(logs);
    PresentationWidget.create({
      guid: 'JN6JHrg17xpwF8klXSIfFj',
      host: 'demo.qumucloud.com',
      locales: {
        de,
        es,
        fr,
        it,
        ja,
        pt
      },
      selector: widget,
      widgetOptions: {
        onIframeLoad(iframe) {
          const sdk = new QumuPlayerSdk(iframe);
          sdk.addEventListener('timeupdate', (newTime: number) => {
            logs.innerHTML += \`<li>timeupdate: \${newTime}</li>\`;
          });
          sdk.getDuration().then((duration: number) => {
            logs.innerHTML += \`<li>duration: \${duration}</li>\`;
          }).catch(console.error);
        }
      }
    }).catch(console.error);
    return container;
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    /* eslint-disable sort-keys */
    host: 'demo.qumucloud.com',
    guid: 'JN6JHrg17xpwF8klXSIfFj',
    playbackMode: 'inline',
    playIconPosition: 'center',
    cssVars: DEFAULT_CSS_VARIABLES.trim()
    /* eslint-enable sort-keys */
  },
  argTypes: {
    host: {
      control: 'text'
    },
    // eslint-disable-next-line sort-keys
    guid: {
      control: 'text'
    },
    playbackMode: {
      control: 'select',
      name: 'Playback Mode',
      options: ['inline', 'inline-autoload', 'inline-autoplay', 'modal'],
      table: {
        defaultValue: {
          summary: 'inline'
        }
      }
    },
    playIconPosition: {
      control: 'select',
      name: 'Position',
      options: ['top-left', 'top', 'top-right', 'left', 'center', 'right', 'bottom-left', 'bottom', 'bottom-right'],
      table: {
        category: 'Play Icon'
      }
    },
    playIconWidth: {
      control: 'number',
      name: 'Width',
      table: {
        category: 'Play Icon'
      }
    },
    // eslint-disable-next-line sort-keys
    playIconHeight: {
      control: 'number',
      name: 'Height',
      table: {
        category: 'Play Icon'
      }
    },
    playIconUrl: {
      control: 'text',
      name: 'Custom Play Icon URL',
      table: {
        category: 'Play Icon'
      }
    },
    // eslint-disable-next-line sort-keys
    playerCaptions: {
      control: 'text',
      name: 'Captions',
      table: {
        category: 'Player Parameters'
      }
    },
    playerConfigurationGuid: {
      control: 'text',
      name: 'playerConfigurationGuid',
      table: {
        category: 'Player Parameters'
      }
    },
    playerDebug: {
      control: 'boolean',
      name: 'Enable Debug Mode',
      table: {
        category: 'Player Parameters'
      }
    },
    playerLoop: {
      control: 'boolean',
      name: 'Loop',
      table: {
        category: 'Player Parameters'
      }
    },
    playerView: {
      control: 'select',
      name: 'View',
      options: ['pipls', 'pipss', 'sbs'],
      table: {
        category: 'Player Parameters'
      }
    },
    // eslint-disable-next-line sort-keys
    playerQuality: {
      control: 'select',
      name: 'Quality',
      options: ['auto', 'best', '1440p', '1080p', '720p', '360p', '240p'],
      table: {
        category: 'Player Parameters'
      }
    },
    playerShowControlPanel: {
      control: 'boolean',
      name: 'Show the Control Panel',
      table: {
        category: 'Player Parameters'
      }
    },
    playerSidebar: {
      control: 'boolean',
      name: 'Show the Sidebar',
      table: {
        category: 'Player Parameters'
      }
    },
    playerStart: {
      control: 'text',
      name: 'Start at',
      table: {
        category: 'Player Parameters'
      }
    },
    playerVolume: {
      control: 'range',
      max: 100,
      min: 0,
      name: 'Volume',
      table: {
        category: 'Player Parameters'
      }
    },
    // eslint-disable-next-line sort-keys
    playerReporting: {
      control: 'boolean',
      name: 'Enable Playback Analytics',
      table: {
        category: 'Player Parameters'
      }
    },
    playerReportingId: {
      control: 'text',
      name: 'Reporting ID',
      table: {
        category: 'Player Parameters'
      }
    },
    // eslint-disable-next-line sort-keys
    cssVars: {
      control: {
        multiline: true,
        type: 'text'
      },
      name: 'CSS Variables',
      table: {
        category: 'CSS Variables'
      }
    }
  },
  parameters: {
    docs: {
      source: {
        transform: (_: string, storyContext: StoryContext) => {
          const configuration = getPlaygroundConfigurationFromArgs(storyContext.args);
          const overridenCssVariables = getOverridenCssVariables(storyContext.args.cssVars as string);

          // the weird spacing here is on purpose, it's to make the HTML code look better in the docs panel
          const cssVariables = overridenCssVariables.length > 0 ? \`
    <style>
      :root {
        \${overridenCssVariables.split('\\n')
          // add 8 spaces (indent level inside <style>)
          .map((line, i) => i === 0 ? line : \`        \${line}\`).join('\\n')}
      }
    </style>\` : '';
          return \`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <title>Presentation Widget</title>
    <link rel="stylesheet" href="https://unpkg.com/@enghouse-qumu/widget@\${version}/presentation-widget.css">\${cssVariables}
  </head>
  <body>
    <div id="widget"></div>
    
    <script type="module">
      import { PresentationWidget } from 'https://unpkg.com/@enghouse-qumu/widget@\${version}/presentation-widget.js';
      
      PresentationWidget.create(\${JSON.stringify(configuration, null, 2).split('\\n')
          // add 6 spaces (indent level inside <script>)
          .map((line, i) => i === 0 ? line : \`      \${line}\`).join('\\n')}).catch((err) => console.log(err));
    <\/script>
  </body>
</html>
          \`;
        }
      }
    }
  },
  render: (args: Partial<Args>) => {
    const container = document.createElement('div');
    args.cssVars?.split('\\n').forEach((line: string) => {
      if (!line.startsWith('--qc-')) {
        return;
      }
      const [key, value] = line.split(':').map(s => s?.trim());
      if (key && value) {
        container.style.setProperty(key, value.replace(';', ''));
      }
    });
    PresentationWidget.create({
      locales: {
        de,
        es,
        fr,
        it,
        ja,
        pt
      },
      selector: container,
      ...getPlaygroundConfigurationFromArgs(args)
    }).catch(console.error);
    return container;
  }
}`,...f.parameters?.docs?.source}}};const F=["Basic","PlaybackThumbnail","CustomPlayIcon","PlayerSdk","Playground"];export{g as Basic,y as CustomPlayIcon,h as PlaybackThumbnail,b as PlayerSdk,f as Playground,F as __namedExportsOrder,E as default};
