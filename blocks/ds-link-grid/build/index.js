!function(){"use strict";var e,n={273:function(){var e=window.wp.blocks,n=window.wp.element,r=(window.wp.i18n,window.wp.blockEditor);(0,e.registerBlockType)("cagov-design-system/ds-link-grid",{edit:function(e){const t=(0,r.useBlockProps)();return(0,n.createElement)("div",t,(0,n.createElement)("div",{class:"cagov-grid"},(0,n.createElement)(r.InnerBlocks,{allowedBlocks:["cagov-design-system/ds-link-grid-card"]})))},save:function(e){const t=r.useBlockProps.save();return(0,n.createElement)("div",t,(0,n.createElement)("div",{class:"cagov-grid"},(0,n.createElement)(r.InnerBlocks.Content,null)))}})}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return n[e](i,i.exports,t),i.exports}t.m=n,e=[],t.O=function(n,r,o,i){if(!r){var c=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],i=e[u][2];for(var s=!0,l=0;l<r.length;l++)(!1&i||c>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(s=!1,i<c&&(c=i));if(s){e.splice(u--,1);var a=o();void 0!==a&&(n=a)}}return n}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,o,i]},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={826:0,431:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,c=r[0],s=r[1],l=r[2],a=0;if(c.some((function(n){return 0!==e[n]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(l)var u=l(t)}for(n&&n(r);a<c.length;a++)i=c[a],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(u)},r=self.webpackChunkds_link_grid=self.webpackChunkds_link_grid||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var o=t.O(void 0,[431],(function(){return t(273)}));o=t.O(o)}();