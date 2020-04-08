(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{194:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d}),a.d(t,"pageQuery",function(){return u});a(40),a(28),a(29),a(14),a(51),a(136),a(137),a(20),a(12),a(242);var n=a(0),l=a.n(n),c=a(197),r=a(216),s=a.n(r),i=a(198),o=a(202),m=a(204);a(219),a(217),a(218),a(223),a(224);var d=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={},a.state.cog=t.data.cog,a.state.cogs=t.data.cogs,a.state.cogExtras=t.pageContext.extras,"undefined"!=typeof window&&window.location.hash&&window.location.hash.startsWith("#step:")?a.state.stepFilter=window.location.hash.replace("#step:",""):a.state.stepFilter="",a.handleStepFilterChange=a.handleStepFilterChange.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.componentDidMount=function(){if("undefined"!=typeof window&&window.location.hash&&window.location.hash.startsWith("#step:"))try{document.getElementById("steps").scrollIntoView({behavior:"smooth"})}catch(e){}s.a.highlightAll()},r.render=function(){var e=this,t=this.state.cog,a=this.state.cogExtras;return l.a.createElement(m.a,{subTitle:(a.lpLabel||a.label)+" QA Automation",metaImage:"https://crank.run"+a.img,metaDescription:a.lpDescription?a.lpDescription:(a.lpLabel||a.label)+" BDD testing with Crank.",activeTrail:"/discover-cogs",location:this.props.location},l.a.createElement("main",null,l.a.createElement("div",{className:"cog-hero jumbotron jumbotron-fluid text-center mb-5",id:"top"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"display-4"},a.lpLabel||a.label," QA Automation"),l.a.createElement("h3",{className:"lead"},"Run ",a.lpLabel||a.label," test scenarios using the Crank BDD framework."),l.a.createElement("img",{src:a.img,alt:a.label+" Logo",style:{maxHeight:"75px"}}))),a.lpDescription?l.a.createElement("section",{className:"container"},l.a.createElement("div",{className:"card bg-light mb-5"},l.a.createElement("div",{className:"card-body"},l.a.createElement("p",{className:"card-text lead"},a.lpDescription)))):"",a.useCases.length?l.a.createElement("section",{className:"container mb-5"},l.a.createElement("div",{className:"row"},a.useCases.map(function(e,t){return l.a.createElement("div",{className:"col-12 col-lg-6 mb-4 mb-lg-0",key:"UseCase__"+t},l.a.createElement("div",{className:"card h-100"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title font-weight-bold"},e.title),l.a.createElement("p",{className:"card-text small"},e.description),l.a.createElement("pre",{className:"language-yaml",style:{fontSize:"0.6em"}},l.a.createElement("code",{className:"language-yaml"},e.steps)))))}))):"",a.useCases.length||a.lpDescription?l.a.createElement("section",{className:"mb-5 p-5 bg-light",id:"what-is-crank"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"What is Crank?"),l.a.createElement("div",{className:"card-body"},l.a.createElement("p",{className:"card-text"},"Crank is a BDD test automation framework for SaaS-based business technology."),l.a.createElement(c.a,{to:"/intro",className:"btn btn-secondary mr-2 mb-2 mb-md-0"},"Developer Getting Started"),l.a.createElement("a",{href:"https://app.automatoninc.com/signup?utm_medium=referral&utm_source=crank&utm_campaign="+encodeURIComponent("cogs/"+t.name),className:"btn btn-outline-secondary",target:"_blank"},"Hosted QA Automation for Business Users")))):"",l.a.createElement("section",{className:"container small mb-5",id:"installation"},l.a.createElement("h2",null,"Installing",t.authFieldsList.length?" and Authenticating":""," this Cog"),l.a.createElement("p",null,"Once you've successfully ",l.a.createElement(c.a,{to:"/intro/install"},"installed Crank")," you can install this Cog by running the following:"),l.a.createElement("pre",{className:"language-shell-session mb-3",style:{fontSize:"0.8em"}},l.a.createElement("code",{className:"language-shell-session"},"$ crank cog:install ",t.name)),t.authFieldsList.length?l.a.createElement("div",{className:"table-responsive"},l.a.createElement("p",null,"You will be asked for the following authentication details on installation. To avoid prompts in a CI/CD context, you can provide the same details as environment variables."),l.a.createElement("table",{className:"table table-striped small"},l.a.createElement("caption",{className:"h5",style:{captionSide:"top"}},"Expected Authentication Details"),l.a.createElement("thead",null,l.a.createElement("tr",{className:"d-flex"},l.a.createElement("th",{scope:"col",className:"col-md-2"},"Field"),l.a.createElement("th",{scope:"col",className:"col-md-5"},"Install-Time Environment Variable"),l.a.createElement("th",{scope:"col",className:"col-md-5"},"Description"))),l.a.createElement("tbody",null,t.authFieldsList.map(function(t,a){return l.a.createElement("tr",{className:"d-flex",key:"AuthField__"+t.key},l.a.createElement("th",{className:"col-md-2",scope:"row"},l.a.createElement("code",null,t.key," ",1===t.optionality?l.a.createElement("sup",{title:"Required Input",className:"text-danger"},"*"):"")),l.a.createElement("td",{className:"col-md-5"},l.a.createElement("code",null,e.getFieldEnvironmentVariable(t))),l.a.createElement("td",{className:"col-md-5"},t.description))}))),l.a.createElement("p",null,"You can always re-authenticate by running the following command."),l.a.createElement("pre",{className:"language-shell-session mb-3",style:{fontSize:"0.8em"}},l.a.createElement("code",{className:"language-shell-session"},"$ crank cog:auth ",t.name)),t.authHelpUrl?l.a.createElement("a",{href:t.authHelpUrl,target:"_blank",className:"btn btn-secondary"},"Further Auth Details Here"):"",l.a.createElement("hr",{className:"my-5"})):l.a.createElement("p",null,"That's it!  No further installation steps.")),l.a.createElement("section",{className:"bg-light py-3 mb-3 sticky-top"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row px-3"},l.a.createElement("h2",{className:"col-12 col-md-8 pl-0 mb-0 h3"},a.lpLabel||a.label," Test Steps"),l.a.createElement("select",{value:this.state.stepFilter,className:"col-12 col-md-4 form-control small mt-2 mt-md-0",onChange:this.handleStepFilterChange},l.a.createElement("option",{value:""},"Show All Steps"),t.stepDefinitionsList.map(function(e,t){return l.a.createElement("option",{value:e.stepId,key:"StepOption__"+e.stepId},e.name)}))))),l.a.createElement("a",{id:"steps",className:"invisible"}),l.a.createElement("section",{className:"container small mb-5 mt-5"},t.stepDefinitionsList.filter(function(t){return e.state.stepFilter===t.stepId||""===e.state.stepFilter}).map(function(t,a){return l.a.createElement("div",{className:"my-4",id:t.stepId,key:"Step__"+t.stepId},l.a.createElement("h3",{className:"h4"},t.name," ",l.a.createElement("sup",{className:"badge badge-pill badge-"+(0===t.type?"success":"warning"),style:{fontSize:"0.5em"}},0===t.type?"Action":"Assertion")),t.help?l.a.createElement("p",null,t.help):"",l.a.createElement("p",null,"Use this step in a Scenario file like this:"),l.a.createElement("pre",{className:"language-yaml",style:{fontSize:"0.8em"}},l.a.createElement("code",{className:"language-yaml"},"- step: ",e.getStepExpression(t),e.getStepData(t))),l.a.createElement("div",{className:"table-responsive small"},l.a.createElement("table",{className:"table table-striped"},l.a.createElement("caption",{className:"h5",style:{captionSide:"top"}},"Expected Step Input"),l.a.createElement("thead",null,l.a.createElement("tr",{className:"d-flex"},l.a.createElement("th",{scope:"col",className:"col-md-3"},"ID"),l.a.createElement("th",{scope:"col",className:"col-md-2"},"Type"),l.a.createElement("th",{scope:"col",className:"col-md-7"},"Description"))),l.a.createElement("tbody",null,t.expectedFieldsList.map(function(a,n){return l.a.createElement("tr",{className:"d-flex",key:"StepField__"+t.stepId+"__"+a.key},l.a.createElement("th",{className:"col-md-3",scope:"row"},l.a.createElement("code",null,a.key," ",1===a.optionality?l.a.createElement("sup",{title:"Required Input",className:"text-danger"},"*"):"")),l.a.createElement("td",{className:"col-md-2"},e.getFieldType(a)),l.a.createElement("td",{className:"col-md-7"},a.description))})))),t.expectedRecordsList.filter(function(e){return[0,1].includes(e.type)}).length?l.a.createElement("div",{className:"table-responsive small"},l.a.createElement("table",{className:"table table-striped"},l.a.createElement("caption",{className:"h5",style:{captionSide:"top"}},"Exposed Dynamic Tokens"),l.a.createElement("thead",null,l.a.createElement("tr",{className:"d-flex"},l.a.createElement("th",{scope:"col",className:"col-md-4"},"Token"),l.a.createElement("th",{scope:"col",className:"col-md-2"},"Type"),l.a.createElement("th",{scope:"col",className:"col-md-6"},"Description"))),l.a.createElement("tbody",null,t.expectedRecordsList.filter(function(e){return[0,1].includes(e.type)}).map(function(t,a){return t.guaranteedFieldsList.map(function(a,n){return l.a.createElement("tr",{className:"d-flex",key:"RecordField__"+t.id+"__"+a.key},l.a.createElement("th",{className:"col-md-4",scope:"row"},l.a.createElement("code",null,e.getRecordToken(t,a))),l.a.createElement("td",{className:"col-md-2"},e.getFieldType(a)),l.a.createElement("td",{className:"col-md-6"},a.description," ",a.help?l.a.createElement("span",{className:"d-block mt-2"},a.help):""))})}),t.expectedRecordsList.filter(function(e){return e.mayHaveMoreFields}).map(function(t,a){return l.a.createElement("tr",{className:"d-flex",key:"RecordField__"+t.id+"__Asterisk"},l.a.createElement("th",{className:"col-md-4",scope:"row"},l.a.createElement("code",null,e.getRecordToken(t,"*"))),l.a.createElement("td",{className:"col-md-2"},"*"),l.a.createElement("td",{className:"col-md-6"},"This step may expose additional dynamic tokens representing values on the ",t.id,", depending on how you've configured the underlying system."))})))):"",l.a.createElement("hr",{className:"my-5"}))})),a.homepage?l.a.createElement("section",{className:"mb-5 p-5 bg-light",id:"get-involved"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"Contribute"),l.a.createElement("div",{className:"card-body"},l.a.createElement("p",{className:"card-text"},"This Cog is open source."),l.a.createElement("a",{href:a.homepage,target:"_blank",className:"btn btn-secondary mr-2 mb-2 mb-md-0"},l.a.createElement(i.a,{className:"mr-1 align-text-top",icon:o.a,width:18,height:18,fill:"#fff"}),"Contribute on GitHub"),l.a.createElement("a",{href:"https://spectrum.chat/crank",target:"_blank",className:"btn btn-outline-secondary"},"Join the Crank Spectrum Community")))):""))},r.handleStepFilterChange=function(e){this.setState({stepFilter:e.target.value},function(){s.a.highlightAll()}),history.replaceState(null,null,e.target.value.length?"#step:"+e.target.value:"#")},r.getStepExpression=function(e){var t=0===e.type?"When I":"Then";(e.expression.includes("delete")||e.stepId.toLowerCase().includes("delete"))&&(t="Finally,");var a=e.expression;a=(a=a.substr(1,a.length-2)).replace(/([^\(])\?/gi,"$1");for(var n,l=/\(\?<([a-zA-Z_-]+)>[^\)]+\)/gim,c={};null!==(n=l.exec(a));)n.index===l.lastIndex&&l.lastIndex++,c[n[0]]="{{"+n[1]+"}}";return Object.keys(c).forEach(function(e){a=a.replace(e,c[e])}),(t+" "+(a=a.replace(/\(\?\:.*?\) /gi," "))).trim()},r.getStepData=function(e){var t=this.getStepExpression(e),a=0,n="\n  data:\n";return e.expectedFieldsList.forEach(function(e){if(1===e.optionality&&!t.includes("{{"+e.key+"}}"))switch(a++,e.type){case 1:n+="    "+e.key+": string value\n";break;case 2:n+="    "+e.key+": true\n";break;case 3:n+="    "+e.key+": 123\n";break;case 4:case 5:n+="    "+e.key+": 2020-01-01\n";break;case 6:n+="    "+e.key+": ab@example.com\n";break;case 7:n+="    "+e.key+": 555-555-5555\n";break;case 10:n+="    "+e.key+": https://example.com\n";break;case 8:case 9:n+="    "+e.key+":\n      field: value\n";break;default:n+="    "+e.key+": value\n"}}),0===a?"":n},r.getFieldType=function(e){switch(e.type){case 0:return"Any Scalar";case 1:return"String";case 2:return"Boolean";case 3:return"Number";case 4:return"ISO 8601 Date";case 5:return"ISO 8601 Datetime";case 6:return"Email Address";case 7:return"Phone Number";case 8:return"Any Non-Scalar";case 9:return"Map/Object";case 10:return"URL"}},r.getFieldEnvironmentVariable=function(e){return("crank_"+this.state.cog.name+"__"+e.key).replace(/[^a-zA-Z0-9_]+/g,"_").toUpperCase()},r.getRecordToken=function(e,t){void 0===t&&(t=null);var a=this.state.cog.name.split("/")[1]+"."+e.id;return 1===e.type&&(a+=".0"),t&&(a+="*"===t?".*":"."+t.key),"{{"+a+"}}"},n}(l.a.Component),u="1503692344"},197:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var n=a(0),l=a.n(n),c=a(61),r=a.n(c);a.d(t,"a",function(){return r.a});a(201),a(7).default.enqueue;var s=l.a.createContext({});function i(e){var t=e.staticQueryData,a=e.data,n=e.query,c=e.render,r=a?a.data:t[n]&&t[n].data;return l.a.createElement(l.a.Fragment,null,r&&c(r),!r&&l.a.createElement("div",null,"Loading (StaticQuery)"))}var o=function(e){var t=e.data,a=e.query,n=e.render,c=e.children;return l.a.createElement(s.Consumer,null,function(e){return l.a.createElement(i,{data:t,query:a,render:n||c,staticQueryData:e})})}},198:function(e,t,a){"use strict";a(208);var n=a(0),l=a.n(n);t.a=function(e){return l.a.createElement("svg",{className:e.className,viewBox:e.viewBox,width:e.width,height:e.height,fill:e.fill},l.a.createElement("use",{href:"#"+e.icon.id}))}},201:function(e,t,a){var n;e.exports=(n=a(203))&&n.default||n},202:function(e,t,a){"use strict";var n=a(199),l=a.n(n),c=a(200),r=a.n(c),s=new l.a({id:"github",use:"github-usage",viewBox:"0 0 438.549 438.549",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 438.549 438.549" id="github">\n  <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736 15.166 259.057 5.365 219.27 5.365c-39.78 0-76.47 9.804-110.062 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.853 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.42-1.996 2.474-2.282 3.71-5.14 3.71-8.562 0-.57-.05-5.708-.144-15.417-.098-9.71-.144-18.18-.144-25.406l-6.567 1.136c-4.187.767-9.47 1.092-15.846 1-6.38-.09-13-.757-19.85-2-6.856-1.23-13.23-4.085-19.13-8.558-5.9-4.473-10.087-10.328-12.56-17.556l-2.857-6.57c-1.903-4.374-4.9-9.233-8.99-14.56-4.095-5.33-8.234-8.944-12.42-10.847l-2-1.43c-1.33-.952-2.568-2.1-3.71-3.43-1.143-1.33-1.998-2.663-2.57-3.997-.57-1.335-.097-2.43 1.43-3.29 1.523-.858 4.28-1.275 8.28-1.275l5.706.853c3.807.763 8.516 3.042 14.133 6.85 5.614 3.807 10.23 8.755 13.846 14.843 4.38 7.81 9.657 13.76 15.846 17.85 6.183 4.1 12.42 6.14 18.7 6.14 6.28 0 11.702-.473 16.272-1.42 4.562-.95 8.845-2.382 12.844-4.284 1.712-12.76 6.376-22.56 13.987-29.41-10.845-1.14-20.6-2.857-29.26-5.14-8.66-2.286-17.606-5.996-26.836-11.14-9.234-5.137-16.895-11.516-22.984-19.126-6.09-7.615-11.09-17.61-14.99-29.98-3.9-12.374-5.85-26.648-5.85-42.826 0-23.035 7.52-42.637 22.558-58.817-7.044-17.316-6.38-36.73 1.997-58.24 5.52-1.713 13.706-.426 24.554 3.855 10.85 4.285 18.792 7.954 23.84 10.996 5.044 3.04 9.09 5.617 12.133 7.707 17.706-4.948 35.977-7.42 54.82-7.42s37.116 2.472 54.822 7.42l10.85-6.85c7.418-4.57 16.18-8.758 26.26-12.565 10.09-3.806 17.803-4.854 23.135-3.14 8.56 21.51 9.325 40.923 2.28 58.24 15.035 16.18 22.558 35.788 22.558 58.818 0 16.18-1.96 30.5-5.854 42.968-3.9 12.47-8.94 22.46-15.126 29.98-6.19 7.52-13.9 13.85-23.13 18.987-9.233 5.14-18.183 8.85-26.84 11.137-8.663 2.285-18.416 4.003-29.264 5.145 9.894 8.564 14.842 22.08 14.842 40.54v60.23c0 3.42 1.19 6.28 3.572 8.56 2.38 2.28 6.133 2.95 11.273 1.995 44.165-14.653 80.187-41.062 108.07-79.226 27.88-38.16 41.83-81.13 41.83-128.91-.01-39.77-9.82-76.455-29.416-110.05z" />\n</symbol>'});r.a.add(s);t.a=s},203:function(e,t,a){"use strict";a.r(t);a(21);var n=a(0),l=a.n(n),c=a(89);t.default=function(e){var t=e.location,a=e.pageResources;return a?l.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null}},204:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(207),r=a.n(c),s=a(197),i=a(198),o=a(202),m=a(199),d=a.n(m),u=a(200),p=a.n(u),g=new d.a({id:"download",use:"download-usage",viewBox:"0 0 512 512",content:'<symbol aria-hidden="true" class="svg-inline--fa fa-download fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="download">\n  <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />\n</symbol>'}),h=(p.a.add(g),g),E=(a(209),a(210),a(211),a(212),function(e){var t=e.invertColors,a=e.activeTrail;return l.a.createElement("header",{className:"header"+(t?" inverted":"")},l.a.createElement("div",{className:"above"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{href:"https://www.automatoninc.com?utm_source=crank"},l.a.createElement("img",{src:"/img/automaton-logo.png",className:"parent-logo"})))),l.a.createElement("div",{className:"container"},l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light"},l.a.createElement("span",{className:"header-logo"},l.a.createElement(s.a,{to:"/"},l.a.createElement("img",{src:"/img/crank-horizontal-white.png"}))),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"+("/intro"===a?" active":"")},l.a.createElement(s.a,{className:"nav-link",to:"/intro"},"Getting Started")),l.a.createElement("li",{className:"nav-item"+("/discover-cogs"===a?" active":"")},l.a.createElement(s.a,{className:"nav-link",to:"/discover-cogs"},"Cogs")),l.a.createElement("li",{className:"nav-item"+("/intro/community"===a?" active":"")},l.a.createElement(s.a,{className:"nav-link",to:"/intro/community"},"Community")),l.a.createElement("li",{className:"nav-item"+("/intro/install"===a?" active":"")},l.a.createElement(s.a,{className:"nav-link",to:"/intro/install"},l.a.createElement(i.a,{className:"mr-1 align-text-top",icon:h,width:16,height:16,fill:"#fff"}),"Install")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"https://github.com/run-crank/cli"},l.a.createElement(i.a,{className:"mr-1 align-text-top",icon:o.a,width:18,height:18,fill:"#fff"}),"GitHub")))))))}),b=(a(213),new d.a({id:"pineapple",use:"pineapple-usage",viewBox:"0 0 428.896 428.896",content:'<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 428.896 428.896" id="pineapple">\r\n<path d="M329.743,32.738c-0.929-2.242-3.116-3.704-5.543-3.704c-0.004,0-0.002,0-0.006,0c-30.938,0-60.013,12.034-81.86,33.882\r\n\tc-0.246,0.246-0.484,0.497-0.728,0.745c1.646-22.199-5.977-44.965-22.916-61.903C217.566,0.633,216.039,0,214.448,0\r\n\tc-1.591,0-3.118,0.633-4.243,1.758c-16.938,16.938-24.561,39.704-22.915,61.904c-0.244-0.248-0.482-0.5-0.728-0.746\r\n\tc-21.849-21.85-50.92-33.882-81.86-33.882c-0.002,0-0.004,0-0.006,0c-2.427,0-4.614,1.462-5.543,3.704\r\n\tc-0.929,2.242-0.415,4.823,1.301,6.539l39.281,39.28c-2.411-0.198-4.829-0.301-7.247-0.301c-9.194,0-18.352,1.391-27.22,4.135\r\n\tc-2.318,0.717-3.976,2.76-4.201,5.177c-0.225,2.416,1.028,4.729,3.175,5.862l35.09,18.508c-12.249,2.505-23.732,7.839-33.807,15.801\r\n\tc-1.904,1.505-2.714,4.008-2.053,6.343c0.662,2.335,2.665,4.041,5.075,4.323l65.099,7.629\r\n\tc-23.987,9.562-44.225,27.976-54.974,51.605c-0.916,2.014-0.65,4.367,0.692,6.125c2.018,2.644,3.084,5.781,3.084,9.074\r\n\tc0,5.784-3.4,11.112-8.663,13.575c-1.991,0.933-3.314,2.878-3.446,5.072c-0.715,11.837-1.332,23.836-1.832,35.666\r\n\tc-0.081,1.916,0.759,3.755,2.259,4.948c3.611,2.873,5.683,7.151,5.683,11.738c0,4.917-2.425,9.531-6.487,12.342\r\n\tc-1.577,1.091-2.537,2.869-2.584,4.786c-0.286,11.615-0.466,23.121-0.534,34.2c-0.016,2.511,1.534,4.766,3.884,5.651\r\n\tc5.815,2.192,9.722,7.826,9.722,14.021c0,4.085-1.625,7.908-4.576,10.767c-1.83,1.773-2.341,4.509-1.274,6.823\r\n\tc15.824,34.303,53.266,56.468,95.387,56.468c0.631,0,1.261-0.005,1.818-0.015l2.645-0.004l2.569,0.004\r\n\tc0.63,0.01,1.265,0.015,1.894,0.015c0.002,0,0.003,0,0.006,0c28.992,0,55.768-10.505,74.802-28.241\r\n\tc0.389-0.298,0.752-0.633,1.062-1.024c8.128-7.81,14.792-16.96,19.517-27.202c1.067-2.314,0.557-5.05-1.273-6.823\r\n\tc-2.95-2.857-4.575-6.682-4.575-10.767c0-6.194,3.907-11.828,9.722-14.021c2.35-0.886,3.899-3.141,3.884-5.651\r\n\tc-0.068-11.078-0.248-22.586-0.534-34.202c-0.046-1.875-0.97-3.613-2.486-4.71c-0.517-0.631-1.151-1.141-1.86-1.511\r\n\tc-2.988-2.816-4.725-6.75-4.725-10.905c0-4.587,2.071-8.865,5.683-11.738c0.074-0.06,0.14-0.127,0.211-0.189\r\n\tc0.076-0.066,0.153-0.132,0.225-0.202c0.158-0.152,0.305-0.313,0.443-0.481c0.036-0.043,0.076-0.082,0.111-0.127\r\n\tc0.169-0.216,0.317-0.444,0.454-0.679c0.041-0.071,0.077-0.146,0.115-0.219c0.101-0.189,0.19-0.384,0.27-0.583\r\n\tc0.019-0.046,0.044-0.086,0.061-0.133c0.017-0.044,0.026-0.089,0.042-0.133c0.029-0.085,0.055-0.17,0.08-0.257\r\n\tc0.04-0.133,0.074-0.267,0.103-0.4c0.018-0.077,0.034-0.154,0.048-0.232c0.029-0.157,0.049-0.315,0.064-0.472\r\n\tc0.006-0.06,0.015-0.118,0.019-0.177c0.017-0.236,0.021-0.471,0.01-0.704c-0.53-12.529-1.179-25.082-1.934-37.39\r\n\tc-0.017-0.23-0.038-0.461-0.059-0.69l-0.027-0.288c-0.143-1.639-0.953-3.145-2.24-4.17c-3.609-2.873-5.68-7.149-5.68-11.735\r\n\tc0-2.174,0.475-4.296,1.41-6.307c0.697-1.499,0.745-3.219,0.133-4.754c-10.269-25.739-31.156-45.701-56.494-55.773l64.853-7.599\r\n\tc2.41-0.283,4.413-1.989,5.074-4.324c0.662-2.335-0.148-4.839-2.053-6.343c-10.075-7.962-21.558-13.296-33.808-15.8l35.091-18.509\r\n\tc2.146-1.133,3.4-3.446,3.176-5.862c-0.225-2.417-1.883-4.46-4.201-5.177c-8.868-2.744-18.025-4.135-27.22-4.135\r\n\tc-2.422,0-4.843,0.111-7.257,0.31l39.29-39.289C330.159,37.562,330.672,34.98,329.743,32.738z M294.57,193.673l-22.82-8.442\r\n\tl12.957-4.794C288.394,184.513,291.7,188.939,294.57,193.673z M268.648,310.582l-80.69-29.852l72.581-26.853l43.696,16.166\r\n\tc-2.456,4.115-3.786,8.854-3.786,13.795c0,4.852,1.309,9.537,3.692,13.612L268.648,310.582z M119.566,326.428\r\n\tc-0.212-0.079-0.426-0.142-0.641-0.195c0.075-6.61,0.188-13.335,0.338-20.117c0.101-0.031,0.203-0.045,0.303-0.082l51.099-18.905\r\n\tl80.69,29.853l-78.663,29.102L119.566,326.428z M243.245,247.479l-72.581,26.853l-49.626-18.359\r\n\tc0.246-5.097,0.511-10.188,0.797-15.28l51.532-19.064L243.245,247.479z M260.538,241.082l-69.877-25.853l63.796-23.602l44.43,16.438\r\n\tc-0.284,1.568-0.438,3.16-0.438,4.773c0,4.621,1.166,9.064,3.326,12.987L260.538,241.082z M133.798,206.988l22.277,8.241\r\n\tl-24.146,8.934c1.626-3.494,2.519-7.349,2.519-11.324C134.448,210.847,134.22,208.892,133.798,206.988z M153.372,280.73\r\n\tl-25.706,9.51c0.508-2.074,0.782-4.22,0.782-6.401c0-4.908-1.315-9.616-3.74-13.713L153.372,280.73z M155.399,352.48l-23.713,8.772\r\n\tc0.504-2.073,0.763-4.223,0.763-6.414c0-4.197-0.998-8.249-2.795-11.884L155.399,352.48z M309.969,325.87l-24.028-8.89l23.738-8.783\r\n\tC309.804,314.15,309.901,320.055,309.969,325.87z M277.831,247.479l29.018-10.735c0.42,7.233,0.804,14.55,1.147,21.895\r\n\tL277.831,247.479z M254.457,178.832l-67.062-24.811c7.602-2.107,15.51-3.239,23.521-3.239c0.342,0,0.691,0.002,1.083,0.006\r\n\tl2.449,0.005l2.497-0.005c0.343-0.004,0.685-0.006,1.027-0.006c21.173,0,41.314,7.566,57.056,20.439L254.457,178.832z\r\n\t M214.446,14.896c20.541,24.769,20.54,60.947,0,85.714c-10.006-12.034-15.451-27.031-15.451-42.856\r\n\tC198.995,41.929,204.44,26.931,214.446,14.896z M178.077,71.4c15.778,15.778,25.838,35.759,29.155,57.435\r\n\tc-0.449-0.372-0.898-0.743-1.354-1.105l-85.534-85.533C142.133,45.465,162.228,55.552,178.077,71.4z M132.487,90.257\r\n\tc7.615,0,15.008,1.084,22.037,3.09l18.896,18.896c-3.585-0.799-7.242-1.36-10.952-1.669l-37.79-19.932\r\n\tC127.274,90.386,129.88,90.257,132.487,90.257z M155.649,122.291c15.567,0,30.324,5.143,42.277,14.457l0.056,0.056l-70.918-8.311\r\n\tC135.957,124.407,145.625,122.291,155.649,122.291z M170.512,160.571l66.652,24.659l-63.796,23.602l-39.386-14.571\r\n\tC142.633,179.833,155.498,168.174,170.512,160.571z M218.911,416.896c-0.564,0-1.136-0.005-1.778-0.015l-2.684-0.004l-2.761,0.005\r\n\tc-34.921,0.557-66.35-15.815-82.209-42.018l43.214-15.987l105.585,39.063C262.159,409.95,241.304,416.896,218.911,416.896z\r\n\t M288.532,388.939l-98.547-36.459l78.663-29.103l35.162,13.009c-4.608,4.915-7.361,11.481-7.361,18.452\r\n\tc0,5.848,1.843,11.393,5.258,16.002C298.224,377.477,293.768,383.538,288.532,388.939z M230.916,136.804l0.059-0.059\r\n\tc11.952-9.312,26.708-14.453,42.273-14.453c10.023,0,19.692,2.116,28.585,6.201L230.916,136.804z M296.409,90.257\r\n\tc2.608,0,5.214,0.129,7.809,0.386l-37.793,19.934c-3.71,0.308-7.366,0.87-10.95,1.669L274.4,93.318\r\n\tC281.419,91.32,288.807,90.257,296.409,90.257z M223,127.749c-0.449,0.356-0.894,0.722-1.335,1.089\r\n\tc3.315-21.677,13.376-41.659,29.154-57.438c15.851-15.85,35.943-25.937,57.734-29.205L223,127.749z" />\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n</symbol>'})),f=(p.a.add(b),b),v=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"footer-content row small"},l.a.createElement("div",{className:"col-12 col-lg-7"},l.a.createElement("div",{className:"footer-nav"},l.a.createElement(s.a,{className:"footer-link",to:"/intro"},"Getting Started"),l.a.createElement(s.a,{className:"footer-link",to:"/discover-cogs"},"Cogs"),l.a.createElement(s.a,{className:"footer-link",to:"/intro/community"},"Community"),l.a.createElement(s.a,{className:"footer-link",to:"/intro/install"},l.a.createElement(i.a,{className:"mr-1 align-text-top",icon:h,width:16,height:16,fill:"#fff"}),"Install"))),l.a.createElement("div",{className:"footer-by col-12 col-lg-5"},l.a.createElement("span",{className:"by-automaton"},"Made with radical hospitality by ",l.a.createElement("a",{href:"https://www.automatoninc.com?utm_source=crank"},l.a.createElement(i.a,{className:"mr-1 align-text-top",icon:f,width:16,height:16,fill:"#b69d65"}),"Automaton"))))))};a(214),a(215),t.a=function(e){var t=e.children,a=e.activeTrail,n=e.subTitle,c=e.invertHeaderColors,s=e.location,i=e.metaDescription,o=e.metaImage,m=e.twCardType,d=e.ogType;return l.a.createElement("div",{className:"app-wrapper"},l.a.createElement(r.a,{title:"Crank - "+(n||"BDD Test Automation for Integrated SaaS")},l.a.createElement("meta",{name:"og:title",content:n||"BDD Test Automation for Integrated SaaS"}),l.a.createElement("meta",{name:"twitter:title",content:n||"BDD Test Automation for Integrated SaaS"}),l.a.createElement("meta",{name:"twitter:card",content:m||"summary"}),l.a.createElement("meta",{name:"og:type",content:d||"website"}),l.a.createElement("meta",{name:"twitter:image",content:o||"https://crank.run/img/crank-logo.png"}),l.a.createElement("meta",{name:"og:image",content:o||"https://crank.run/img/crank-logo.png"}),l.a.createElement("meta",{name:"twitter:site",content:"@RunCrank"}),l.a.createElement("meta",{name:"og:url",content:"https://crank.run"+(s?s.pathname:"/")}),i?l.a.createElement("meta",{name:"description",content:i}):"",i?l.a.createElement("meta",{name:"twitter:description",content:i}):"",i?l.a.createElement("meta",{name:"og:description",content:i}):"",l.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-75228722-5"}),l.a.createElement("script",null,"\n                  window.dataLayer = window.dataLayer || [];\n                  function gtag(){dataLayer.push(arguments);}\n                  gtag('js', new Date());\n                  // Initial config/pageview call performed in gatsby-browser.js\n                  // onRouteUpdate() implementation. Works on built version, but\n                  // not in dev.\n            ")),l.a.createElement(E,{invertColors:c,activeTrail:a}),t,l.a.createElement(v,null))}},219:function(e,t){Prism.languages.yaml={scalar:{pattern:/([\-:]\s*(?:![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/,lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:/(\s*(?:^|[:\-,[{\r\n?])[ \t]*(?:![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,lookbehind:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:/([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?)(?=[ \t]*(?:$|,|]|}))/m,lookbehind:!0,alias:"number"},boolean:{pattern:/([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:true|false)[ \t]*(?=$|,|]|})/im,lookbehind:!0,alias:"important"},null:{pattern:/([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:null|~)[ \t]*(?=$|,|]|})/im,lookbehind:!0,alias:"important"},string:{pattern:/([:\-,[{]\s*(?:![^\s]+)?[ \t]*)("|')(?:(?!\2)[^\\\r\n]|\\.)*\2(?=[ \t]*(?:$|,|]|}|\s*#))/m,lookbehind:!0,greedy:!0},number:{pattern:/([:\-,[{]\s*(?:![^\s]+)?[ \t]*)[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,lookbehind:!0},tag:/![^\s]+/,important:/[&*][\w]+/,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},Prism.languages.yml=Prism.languages.yaml},242:function(e,t,a){"use strict";var n=a(1),l=a(32),c=a(93),r="".startsWith;n(n.P+n.F*a(95)("startsWith"),"String",{startsWith:function(e){var t=c(this,e,"startsWith"),a=l(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return r?r.call(t,n,a):t.slice(a,a+n.length)===n}})}}]);
//# sourceMappingURL=component---src-templates-cog-template-js-90595315dee8ba353eb9.js.map