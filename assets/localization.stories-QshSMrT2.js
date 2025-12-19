import{v as r,o as c,p as d,j as a,i as l,f as g,e as m,d as u}from"./package-BixljKZz.js";const h={component:"localization"},t={parameters:{docs:{source:{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <title>Presentation Widget</title>
    <link rel="stylesheet" href="https://unpkg.com/@enghouse-qumu/widgets@${r}/presentation-widget.css">
  </head>
  <body>
    <p>The widget below uses the lang attribute from the html tag</p>
    <div id="widget1"></div>
    
    <p>The widget below is forced to French thanks to lang="fr"</p>
    <div id="widget2" lang="fr"></div>

    <script type="module">
      import { PresentationWidget } from 'https://unpkg.com/@enghouse-qumu/widgets@${r}/presentation-widget.js';
      import fr from 'https://unpkg.com/@enghouse-qumu/widgets@${r}/locales/fr.json';
      
      PresentationWidget.create({
        host:'demo.qumucloud.com',
        guid: 'JN6JHrg17xpwF8klXSIfFj',
        selector: '#widget1',
      }).catch((err) => console.log(err));
      
      PresentationWidget.create({
        host: 'demo.qumucloud.com',
        guid: 'JN6JHrg17xpwF8klXSIfFj',
        locales: {
          fr,
        },
        selector: '#widget2',
      }).catch((err) => console.log(err));
    <\/script>
  </body>
</html>`}}},render:()=>{const e=document.createElement("div"),n=document.createElement("p");n.innerHTML="The widget below uses the lang attribute from the html tag";const i=document.createElement("p");i.innerHTML='The widget below is forced to French thanks to lang="fr"';const s=document.createElement("div"),o=document.createElement("div");return o.setAttribute("lang","fr"),e.appendChild(n),e.appendChild(s),e.appendChild(i),e.appendChild(o),c.create({guid:"JN6JHrg17xpwF8klXSIfFj",host:"demo.qumucloud.com",locales:{de:u,es:m,fr:g,it:l,ja:a,pt:d},selector:s}).catch(console.error),c.create({guid:"JN6JHrg17xpwF8klXSIfFj",host:"demo.qumucloud.com",locales:{de:u,es:m,fr:g,it:l,ja:a,pt:d},selector:o}).catch(console.error),e}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    <p>The widget below uses the lang attribute from the html tag</p>
    <div id="widget1"></div>
    
    <p>The widget below is forced to French thanks to lang="fr"</p>
    <div id="widget2" lang="fr"></div>

    <script type="module">
      import { PresentationWidget } from 'https://unpkg.com/@enghouse-qumu/widgets@\${version}/presentation-widget.js';
      import fr from 'https://unpkg.com/@enghouse-qumu/widgets@\${version}/locales/fr.json';
      
      PresentationWidget.create({
        host:'demo.qumucloud.com',
        guid: 'JN6JHrg17xpwF8klXSIfFj',
        selector: '#widget1',
      }).catch((err) => console.log(err));
      
      PresentationWidget.create({
        host: 'demo.qumucloud.com',
        guid: 'JN6JHrg17xpwF8klXSIfFj',
        locales: {
          fr,
        },
        selector: '#widget2',
      }).catch((err) => console.log(err));
    <\/script>
  </body>
</html>\`
      }
    }
  },
  render: () => {
    const container = document.createElement('div');
    const p1 = document.createElement('p');
    p1.innerHTML = 'The widget below uses the lang attribute from the html tag';
    const p2 = document.createElement('p');
    p2.innerHTML = 'The widget below is forced to French thanks to lang="fr"';
    const widget1 = document.createElement('div');
    const widget2 = document.createElement('div');
    widget2.setAttribute('lang', 'fr');
    container.appendChild(p1);
    container.appendChild(widget1);
    container.appendChild(p2);
    container.appendChild(widget2);
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
      selector: widget1
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
      selector: widget2
    }).catch(console.error);
    return container;
  }
}`,...t.parameters?.docs?.source}}};const w=["Localization"];export{t as Localization,w as __namedExportsOrder,h as default};
