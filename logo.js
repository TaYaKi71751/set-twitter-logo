
(async () => {
/*
	* SVGText 
	* @source https://about.twitter.com/en/who-we-are/brand-toolkit
	* @rights-to Twitter
	* Twitter Logo
	* */
let XLogoPath = undefined;
const SVGText =	(
//<!-- __SVG_FILE_START__ -->
//<?xml version="1.0" encoding="utf-8"?>
//<!-- Generator: Adobe Illustrator 24.2.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
`<svg version="1.1" id="Logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 248 204" style="enable-background:new 0 0 248 204;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#1D9BF0;}
</style>
<g id="Logo_1_">
	<path id="white_background" class="st0" d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
		C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
		c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
		c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
		c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
		c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"/>
</g>
</svg>
`);
//<!-- __SVG_FILE_END__ -->
	const setSVGLogo = async () => {
		const homeLogoSelectors = ['/','/home'].map((e)=>`a[href="${e}"] > [class] > svg`);
		const logo_s = `svg > g > pattern[patternContentUnits="objectBoundingBox"]`;
		const placeholderSelector = '#placeholder > svg > g > path';
		if(!XLogoPath) { XLogoPath = document.querySelector(placeholderSelector).attributes.d.nodeValue; }
		const setSVG = (e) => {if(SVGText){e.outerHTML = `${SVGText}`;}};
		const setSVGSize = (e) => {['width','height'].forEach((k)=>{e.setAttribute(k,'24');})};
		document.querySelectorAll(logo_s).forEach((e)=>{
			if(!XLogoPath) { XLogoPath = e.querySelector("path").attributes.d.nodeValue; } setSVG(e);
		});
		homeLogoSelectors
			.forEach((s)=>{
				document.querySelectorAll(s).forEach((e)=>{
					if(!XLogoPath){XLogoPath = e.querySelector("path").attributes.d.nodeValue;} setSVG(e);
				});
				document.querySelectorAll(s).forEach((e)=>{
					if(!XLogoPath){XLogoPath = e.querySelector("path").attributes.d.nodeValue;} setSVGSize(e);
				});
//				console.log(XLogoPath);
				if(XLogoPath) {
					document.querySelectorAll(`path[d="${XLogoPath}"]`).forEach((e)=>{
							setSVG(e);
					})
				}
					});
			};
	const setFavicon = async () => {
		const favicon = document.querySelector('link[rel="shortcut icon"]');
		favicon.setAttribute("href", favicon.href.replace('.3.ico','.ico'));
	};
	const setTitle = async () => {
		if(document.title.endsWith("X") && document.title.includes("/")){
			document.title = document.title.substring(0,document.title.length - 1) + "Twitter";
			if(document.location.pathname == '/' && document.title.includes("X")){
				while(document.title.includes("X")) {
					document.title = document.title.replace("X","Twitter");
				}
			}
		}
	};
			const events = Object.keys(document.__proto__.__proto__).reduce((arr, event)=> { // https://stackoverflow.com/questions/39963850/how-can-i-add-an-event-listener-for-all-events-in-javascript-without-listing-the
				if(event.startsWith('on')) return [...arr, event.substr(2)];
				return arr;
			}, []);
			events.forEach(async (event) => {
				document.addEventListener(event,setSVGLogo);
				document.addEventListener(event,setFavicon);
				document.addEventListener(event,setTitle);
			});
		})();
