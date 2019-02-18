(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{143:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(7),s=n.n(a),o=n(4),l=n.n(o),c=(n(167),n(168),n(169),function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return i.a.createElement("section",{className:"section "+(this.props.className||""),id:this.props.id||null},i.a.createElement("h2",{className:"section-title"},i.a.createElement("i",{className:"fa fa-"+this.props.icon}),this.props.title),this.props.children)},t}(r.Component));c.propTypes={className:l.a.string.isRequired,title:l.a.string.isRequired,icon:l.a.string.isRequired,children:l.a.node.isRequired,id:l.a.string};n(148);var p=function(e){function t(){return e.apply(this,arguments)||this}s()(t,e);var n=t.prototype;return n.renderProfilePicture=function(e){return e?i.a.createElement("img",{className:"profile",src:e,alt:"",style:{maxWidth:185}}):null},n.render=function(){return i.a.createElement("div",{className:"profile-container"},this.renderProfilePicture(this.props.imagePath),i.a.createElement("h1",{className:"name"},this.props.name),i.a.createElement("h3",{className:"tagline"}," ",this.props.title," "))},t}(r.Component);p.propTypes={name:l.a.string.isRequired,title:l.a.string.isRequired,imagePath:l.a.string},p.defaultProps={imagePath:null};var u=function(e){function t(){return e.apply(this,arguments)||this}s()(t,e);var n=t.prototype;return n.renderListItem=function(e,t,n,r){if(!t)return null;var a=t;switch(r){case"email":a="mailto: "+t;break;case"phone":a="tel:"+t}return i.a.createElement("li",{className:e},i.a.createElement("i",{className:"fa "+n}),i.a.createElement("a",{href:"//"+a,target:"_blank"}," ",t," "))},n.render=function(){return i.a.createElement("div",{className:"contact-container container-block"},i.a.createElement("ul",{className:"list-unstyled contact-list"},this.renderListItem("email",this.props.mail,"fa-envelope","email"),this.renderListItem("phone",this.props.phoneNumber,"fa-phone","phone"),this.renderListItem("website",this.props.website,"fa-globe","link"),this.renderListItem("linkedin",this.props.linkedin,"fa-linkedin","link"),this.renderListItem("github",this.props.github,"fa-github","link"),this.renderListItem("twitter",this.props.twitter,"fa-twitter","link")))},t}(r.Component);u.propTypes={mail:l.a.string.isRequired,phoneNumber:l.a.string,website:l.a.string,linkedin:l.a.string,github:l.a.string,twitter:l.a.string},u.defaultProps={phoneNumber:null,website:null,linkedin:null,github:null,twitter:null};var m=function(e){function t(){return e.apply(this,arguments)||this}s()(t,e);var n=t.prototype;return n.renderListItem=function(e,t){return i.a.createElement("div",{className:"item",key:"education_item_"+t},i.a.createElement("h4",{className:"degree"},e.degree),i.a.createElement("h5",{className:"meta"},e.school),i.a.createElement("div",{className:"time"},e.date))},n.render=function(){var e=this;return i.a.createElement("div",{className:"education-container container-block"},i.a.createElement("h2",{className:"container-block-title"},this.props.title||"Education"),this.props.list.map(function(t,n){return e.renderListItem(t,n)}))},t}(r.Component);m.propTypes={list:l.a.arrayOf(l.a.shape()).isRequired,title:l.a.string.isRequired};var d=function(e){function t(){return e.apply(this,arguments)||this}s()(t,e);var n=t.prototype;return n.renderListItem=function(e,t){return i.a.createElement("li",{key:"language_item_"+t},e.name,i.a.createElement("span",{className:"lang-desc"},"  (",e.level,")"))},n.render=function(){var e=this;return i.a.createElement("div",{className:"languages-container container-block"},i.a.createElement("h2",{className:"container-block-title",key:"lang_header"},this.props.title||"Languages"),i.a.createElement("ul",{className:"list-unstyled interests-list",key:"lang_list"},this.props.list.map(function(t,n){return e.renderListItem(t,n)})))},t}(r.Component);d.propTypes={list:l.a.arrayOf(l.a.shape()).isRequired,title:l.a.string.isRequired};var h=function(e){function t(){return e.apply(this,arguments)||this}s()(t,e);var n=t.prototype;return n.renderListItem=function(e){return i.a.createElement("li",null,e)},n.render=function(){var e=this;return i.a.createElement("div",{className:"languages-container container-block"},i.a.createElement("h2",{className:"container-block-title"},this.props.title||"Interests"),i.a.createElement("ul",{className:"list-unstyled interests-list"},this.props.list.map(function(t){return e.renderListItem(t)})))},t}(r.Component);h.propTypes={list:l.a.arrayOf(l.a.string).isRequired,title:l.a.string.isRequired};var g=function(e){function t(){return e.apply(this,arguments)||this}s()(t,e);var n=t.prototype;return n.renderInterests=function(){return this.props.interests?i.a.createElement(h,{list:this.props.interests.list,title:this.props.interests.sectionTitle}):null},n.renderLanguages=function(){return this.props.languages?i.a.createElement(d,{list:this.props.languages.list,title:this.props.languages.sectionTitle}):null},n.renderEducationDetails=function(){return this.props.educationDetails?i.a.createElement(m,{list:this.props.educationDetails.list,title:this.props.educationDetails.sectionTitle}):null},n.renderProfileContainer=function(){return i.a.createElement(p,{name:this.props.name,title:this.props.title,imagePath:this.props.imagePath})},n.renderContactDetails=function(){return i.a.createElement(u,{mail:this.props.mail,phoneNumber:this.props.phoneNumber,website:this.props.website,linkedin:this.props.linkedin,github:this.props.github,title:this.props.title,twitter:this.props.twitter})},n.render=function(){return i.a.createElement("div",{className:"sidebar-wrapper"},this.renderProfileContainer(),this.renderContactDetails(),this.renderLanguages(),this.renderInterests())},t}(r.Component);g.propTypes={name:l.a.string.isRequired,title:l.a.string.isRequired,imagePath:l.a.string,mail:l.a.string.isRequired,phoneNumber:l.a.string,website:l.a.string,linkedin:l.a.string,github:l.a.string,twitter:l.a.string,educationDetails:l.a.shape().isRequired,languages:l.a.shape().isRequired,interests:l.a.shape().isRequired},g.defaultProps={imagePath:null,phoneNumber:null,website:null,linkedin:null,github:null,twitter:null};var f=function(e){function t(){return e.apply(this,arguments)||this}s()(t,e);var n=t.prototype;return n.renderListItem=function(e,t){return i.a.createElement("div",{className:"item",key:"exp_item_"+t},i.a.createElement("div",{className:"meta"},i.a.createElement("div",{className:"upper-row"},i.a.createElement("h3",{className:"job-title"},e.title),i.a.createElement("div",{className:"time"},e.date)),this.renderCompanySection(e.company,e.companyLink,e.companyShortDetail)),i.a.createElement("div",{className:"details"},i.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.description}})))},n.renderCompanySection=function(e,t,n){return e&&t?i.a.createElement("div",{className:"company"}," ",i.a.createElement("a",{href:t,target:"_blank"},e)," ",n||""):null},n.render=function(){var e=this,t=this.props,n=t.icon,r=t.sectionTitle,a=t.list;return i.a.createElement(c,{className:"experieces-section",icon:n||"briefcase",title:r||"Experience",id:"experiences"},a.map(function(t,n){return e.renderListItem(t,n)}))},t}(r.Component);f.propTypes={list:l.a.arrayOf(l.a.shape()).isRequired,sectionTitle:l.a.string.isRequired,icon:l.a.string};var y=function(e){function t(){return e.apply(this,arguments)||this}s()(t,e);var n=t.prototype;return n.renderListItem=function(e,t){return i.a.createElement("div",{className:"item",key:"project_item_"+t},this.renderProjectTitle(e),"-",i.a.createElement("span",{style:{marginLeft:5},className:"project-tagline",dangerouslySetInnerHTML:{__html:e.description}}))},n.renderProjectTitle=function(e){var t=e.title;return e.url&&(t=i.a.createElement("a",{href:e.url,target:"_blank"},e.title)),i.a.createElement("span",{className:"project-title",style:{marginRight:5}},t)},n.renderIntro=function(e){return e?i.a.createElement("div",{className:"intro"},i.a.createElement("p",{dangerouslySetInnerHTML:{__html:e}})):null},n.renderCategory=function(e){var t=this;return i.a.createElement("div",{className:"category-item"},i.a.createElement("h5",null,e.name),i.a.createElement("hr",null),e.list.map(function(e,n){return t.renderListItem(e,n)}))},n.render=function(){var e=this,t=this.props,n=t.icon,r=t.sectionTitle,a=t.categories,s=t.description;return i.a.createElement(c,{className:"projects-section",icon:n||"archive",id:"projects",title:r||"Projects"},this.renderIntro(s),i.a.createElement("div",{className:"projects"},a.map(function(t){return e.renderCategory(t)})))},t}(r.Component);y.propTypes={categories:l.a.arrayOf(l.a.shape()).isRequired,description:l.a.string.isRequired,sectionTitle:l.a.string.isRequired,icon:l.a.string};var b=function(e){function t(){return e.apply(this,arguments)||this}s()(t,e);var n=t.prototype;return n.renderListItem=function(e,t){return i.a.createElement("li",{className:"item",key:"tag_item_"+t},e)},n.render=function(){var e=this,t=this.props,n=t.icon,r=t.sectionTitle,a=t.list;return i.a.createElement(c,{className:"tags-section",icon:n||"rocket",id:"tags",title:r||"Skills & Proficiency"},i.a.createElement("div",{className:"skills"},i.a.createElement("ul",{className:"skillset"},a.map(function(t,n){return e.renderListItem(t,n)}))))},t}(r.Component);b.propTypes={list:l.a.arrayOf(l.a.string).isRequired,sectionTitle:l.a.string.isRequired,icon:l.a.string};var E=function(e){function t(){return e.apply(this,arguments)||this}s()(t,e);var n=t.prototype;return n.renderExperienceSection=function(){var e;return this.props.experience?((e=console).log.apply(e,["exp: "].concat(this.props.experience)),i.a.createElement(f,this.props.experience)):null},n.renderProjectsSection=function(){return this.props.projects?i.a.createElement(y,this.props.projects):null},n.renderTags=function(){return this.props.tags?i.a.createElement(b,this.props.tags):null},n.renderCareerProfile=function(){var e=this.props.careerProfile,t=e.icon,n=e.sectionTitle,r=e.description,a=i.a.createElement("div",{className:"summary",dangerouslySetInnerHTML:{__html:r}});return i.a.createElement(c,{className:"summary-section",icon:t||"user",title:n||"Career Profile"},a)},n.render=function(){return i.a.createElement("div",{className:"wrapper"},i.a.createElement(g,this.props.profile),i.a.createElement("div",{className:"main-wrapper"},this.renderCareerProfile(),this.renderExperienceSection(),this.renderProjectsSection(),this.renderTags()))},t}(r.Component);E.propTypes={profile:l.a.shape().isRequired,careerProfile:l.a.shape().isRequired,experience:l.a.shape().isRequired,projects:l.a.shape().isRequired,tags:l.a.shape().isRequired};var v={profile:{name:"Gregory Godreau",title:null,mail:"resume@godreau.xyz",phoneNumber:"+001 XXX 333 4788",website:"godreau.xyz",linkedin:"linkedin.com/in/godreau",github:"github.com/ggodreau",imagePath:null,twitter:null,educationDetails:{sectionTitle:"",list:[{name:"BS Mech Eng.",school:"RPI, Troy",date:null}]},languages:{sectionTitle:"Languages",list:[{name:"English",level:"Native"},{name:"Spanish",level:"Beginner"}]}},careerProfile:{sectionTitle:"Background",icon:null,description:'<p>I\'m a mechanical engineer who ventured into tech in 2013. My focus is in machine learning and devops. I\'ve worked the past couple years as an independent contractor and data science instructor. Check out <a href="#projects">my projects</a> and <a href="https://www.github.com/ggodreau" target="_blank" rel="noopener noreferrer">github</a> for more information.</p>'},experience:{sectionTitle:"",icon:null,description:null,list:[{title:"Software Developer",company:"Maishelf",description:"Independent contractor specializing in data science and devops. Servicing the local Austin, TX market.",companyLink:"https://godreau.xyz",companyShortDetail:"",date:"2018 - Present"},{title:"Data Science Instructor",company:"General Assembly",description:"Enterprise instructor in python stack with NLP, spark / MLLib, tensorflow, REST APIs, bayesian statistics, docker, git, bash",companyLink:"https://generalassemb.ly/",companyShortDetail:"",date:"2017 - present"},{title:"Data Science Mentor",company:"XTOL / Rutgers University",description:"Instructor for Rutgers University students. Taught R, Python, AWS EMR and scripting in linux / bash.",companyLink:"https://www.xtolcorp.com",companyShortDetail:null,date:"2016 - 2017"},{title:"Product Development Engineer",company:"Radiant RFID",description:"Responsible for deployment and maintenance of development and production server infrastructure within AWS. Software was .NET stack with ASP/MVC web front end and Xamarin mobile.",companyLink:"https://www.radiantrfid.com",companyShortDetail:null,date:"2013 - 2016"}]},projects:{sectionTitle:"",icon:null,description:"Here are some projects I've worked on in the past, grouped by client. Drop me a line if you have any questions.",categories:[{name:"General Assembly",list:[{url:"https://us-central1-imag-178020.cloudfunctions.net/gacloud",title:"Diff Tool",description:"Tool to manage version diffing of json-based curriculum for General Assembly. Fully serverless, runs in node and flask within GCP cloud functions."},{url:"https://github.com/ggodreau/adventureworks",title:"SQL to Postgres",description:"Script to translate the Microsoft SQL Server 2014 OLTP AdventureWorks database to Postgres. This was deployed into Redshift initially and eventually migrated to RDS and local client install within docker. Currently being used within all classroom and enterprise curriculum."},{url:"https://github.com/ggodreau/profanityParser",title:"Profanity Parser",description:"This was used to parse, annotate, prioritize, and clean curriculum with foul language and content for sentitive audiences. Used on hundreds of thousands of lines of mixed code and media with a fault-tolerant processing pipeline."}]},{name:"XTOL",list:[{url:"https://github.com/ggodreau/huhdewp",title:"Hadoop EMR Common Crawl",description:"AWS Elastic Map Reduce job designed to stream and parse the common crawl for sentiment analysis of cellular phones. Used for market research for cellular providers."}]},{name:"Maishelf",list:[{url:"https://github.com/ggodreau/tfapi",title:"NLP Tensorflow API",description:"NLP sentiment analysis API running with tensorflow and web.py in docker. Used for a lightning talk."},{url:"https://github.com/ggodreau/emojis",title:"Git Auto-Emojier",description:"Script to automatically input random emojis into git commit messages."},{url:"https://github.com/ggodreau/ga/blob/master/task1/task1.ipynb",title:"Wisconsin Breast Cancer Analysis",description:"Analysis of breast cancer malignancy (binary classification) within pandas and scikit-learn"},{url:"https://github.com/ggodreau/diamonds/blob/master/diamonds.ipynb",title:"Diamond Analysis",description:"Tool created to predict quality and price of a diamond based on physical features."}]}]},tags:{sectionTitle:"",icon:null,list:["Python","Flask","Git","Tensorflow","Kubernetes","Kubeflow","Ksonnet","Terraform","Docker","GCP","AWS"]}},k=n(147);n(146),t.default=function(){return i.a.createElement("div",null,i.a.createElement(k.Link,{to:"/"},"Go back to the homepage"),i.a.createElement("p",null),i.a.createElement(E,v))}},148:function(e,t,n){var r=n(25).f,i=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in i||n(16)&&r(i,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-resume-js-edcd3ab0b7de36ddf551.js.map