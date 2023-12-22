(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const Q of document.querySelectorAll('link[rel="modulepreload"]'))g(Q);new MutationObserver(Q=>{for(const i of Q)if(i.type==="childList")for(const D of i.addedNodes)D.tagName==="LINK"&&D.rel==="modulepreload"&&g(D)}).observe(document,{childList:!0,subtree:!0});function I(Q){const i={};return Q.integrity&&(i.integrity=Q.integrity),Q.referrerPolicy&&(i.referrerPolicy=Q.referrerPolicy),Q.crossOrigin==="use-credentials"?i.credentials="include":Q.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function g(Q){if(Q.ep)return;Q.ep=!0;const i=I(Q);fetch(Q.href,i)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zE="159",vD=0,Ri=1,XD=2,Xo=1,PD=2,iC=3,lC=0,kg=1,oC=2,MC=0,rB=1,Ni=2,yi=3,Mi=4,jD=5,bC=100,zD=101,_D=102,Si=103,Ui=104,$D=200,As=201,Is=202,gs=203,uE=204,pE=205,Cs=206,Bs=207,Qs=208,Es=209,is=210,os=211,ts=212,Ds=213,ss=214,as=0,es=1,ns=2,HQ=3,hs=4,ws=5,Gs=6,rs=7,Po=0,cs=1,Fs=2,SC=0,Rs=1,Ns=2,ys=3,Ms=4,Ss=5,jo=300,FB=301,RB=302,qE=303,mE=304,TQ=306,xE=1e3,vg=1001,bE=1002,Sg=1003,Ki=1004,gE=1005,xg=1006,Us=1007,TB=1008,UC=1009,Ks=1010,ls=1011,_E=1012,zo=1013,NC=1014,yC=1015,VB=1016,_o=1017,$o=1018,VC=1020,ks=1021,Xg=1023,ds=1024,Js=1025,WC=1026,NB=1027,Ys=1028,At=1029,Ls=1030,It=1031,gt=1033,CE=33776,BE=33777,QE=33778,EE=33779,li=35840,ki=35841,di=35842,Ji=35843,Ct=36196,Yi=37492,Li=37496,fi=37808,Hi=37809,ui=37810,pi=37811,qi=37812,mi=37813,xi=37814,bi=37815,Ti=37816,Vi=37817,Wi=37818,Zi=37819,Oi=37820,vi=37821,iE=36492,Xi=36494,Pi=36495,fs=36283,ji=36284,zi=36285,_i=36286,Bt=3e3,KC=3001,Hs=3200,us=3201,Qt=0,ps=1,Tg="",og="srgb",sC="srgb-linear",$E="display-p3",VQ="display-p3-linear",uQ="linear",Ig="srgb",pQ="rec709",qQ="p3",AB=7680,$i=519,qs=512,ms=513,xs=514,Et=515,bs=516,Ts=517,Vs=518,Ws=519,Ao=35044,Io="300 es",TE=1035,DC=2e3,mQ=2001;class MB{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const Q=this._listeners[A];if(Q!==void 0){const i=Q.indexOf(I);i!==-1&&Q.splice(i,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const Q=g.slice(0);for(let i=0,D=Q.length;i<D;i++)Q[i].call(this,A);A.target=null}}}const Ng=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oE=Math.PI/180,VE=180/Math.PI;function ZB(){const C=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(Ng[C&255]+Ng[C>>8&255]+Ng[C>>16&255]+Ng[C>>24&255]+"-"+Ng[A&255]+Ng[A>>8&255]+"-"+Ng[A>>16&15|64]+Ng[A>>24&255]+"-"+Ng[I&63|128]+Ng[I>>8&255]+"-"+Ng[I>>16&255]+Ng[I>>24&255]+Ng[g&255]+Ng[g>>8&255]+Ng[g>>16&255]+Ng[g>>24&255]).toLowerCase()}function lg(C,A,I){return Math.max(A,Math.min(I,C))}function Zs(C,A){return(C%A+A)%A}function tE(C,A,I){return(1-I)*C+I*A}function go(C){return(C&C-1)===0&&C!==0}function WE(C){return Math.pow(2,Math.floor(Math.log(C)/Math.LN2))}function HB(C,A){switch(A.constructor){case Float32Array:return C;case Uint32Array:return C/4294967295;case Uint16Array:return C/65535;case Uint8Array:return C/255;case Int32Array:return Math.max(C/2147483647,-1);case Int16Array:return Math.max(C/32767,-1);case Int8Array:return Math.max(C/127,-1);default:throw new Error("Invalid component type.")}}function Kg(C,A){switch(A.constructor){case Float32Array:return C;case Uint32Array:return Math.round(C*4294967295);case Uint16Array:return Math.round(C*65535);case Uint8Array:return Math.round(C*255);case Int32Array:return Math.round(C*2147483647);case Int16Array:return Math.round(C*32767);case Int8Array:return Math.round(C*127);default:throw new Error("Invalid component type.")}}class jI{constructor(A=0,I=0){jI.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,Q=A.elements;return this.x=Q[0]*I+Q[3]*g+Q[6],this.y=Q[1]*I+Q[4]*g+Q[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(lg(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),Q=Math.sin(I),i=this.x-A.x,D=this.y-A.y;return this.x=i*g-D*Q+A.x,this.y=i*Q+D*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class LI{constructor(A,I,g,Q,i,D,t,a,n){LI.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,I,g,Q,i,D,t,a,n)}set(A,I,g,Q,i,D,t,a,n){const w=this.elements;return w[0]=A,w[1]=Q,w[2]=t,w[3]=I,w[4]=i,w[5]=a,w[6]=g,w[7]=D,w[8]=n,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,Q=I.elements,i=this.elements,D=g[0],t=g[3],a=g[6],n=g[1],w=g[4],c=g[7],R=g[2],M=g[5],k=g[8],S=Q[0],r=Q[3],h=Q[6],H=Q[1],J=Q[4],u=Q[7],x=Q[2],T=Q[5],V=Q[8];return i[0]=D*S+t*H+a*x,i[3]=D*r+t*J+a*T,i[6]=D*h+t*u+a*V,i[1]=n*S+w*H+c*x,i[4]=n*r+w*J+c*T,i[7]=n*h+w*u+c*V,i[2]=R*S+M*H+k*x,i[5]=R*r+M*J+k*T,i[8]=R*h+M*u+k*V,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],Q=A[2],i=A[3],D=A[4],t=A[5],a=A[6],n=A[7],w=A[8];return I*D*w-I*t*n-g*i*w+g*t*a+Q*i*n-Q*D*a}invert(){const A=this.elements,I=A[0],g=A[1],Q=A[2],i=A[3],D=A[4],t=A[5],a=A[6],n=A[7],w=A[8],c=w*D-t*n,R=t*a-w*i,M=n*i-D*a,k=I*c+g*R+Q*M;if(k===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/k;return A[0]=c*S,A[1]=(Q*n-w*g)*S,A[2]=(t*g-Q*D)*S,A[3]=R*S,A[4]=(w*I-Q*a)*S,A[5]=(Q*i-t*I)*S,A[6]=M*S,A[7]=(g*a-n*I)*S,A[8]=(D*I-g*i)*S,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,Q,i,D,t){const a=Math.cos(i),n=Math.sin(i);return this.set(g*a,g*n,-g*(a*D+n*t)+D+A,-Q*n,Q*a,-Q*(-n*D+a*t)+t+I,0,0,1),this}scale(A,I){return this.premultiply(DE.makeScale(A,I)),this}rotate(A){return this.premultiply(DE.makeRotation(-A)),this}translate(A,I){return this.premultiply(DE.makeTranslation(A,I)),this}makeTranslation(A,I){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let Q=0;Q<9;Q++)if(I[Q]!==g[Q])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const DE=new LI;function it(C){for(let A=C.length-1;A>=0;--A)if(C[A]>=65535)return!0;return!1}function WB(C){return document.createElementNS("http://www.w3.org/1999/xhtml",C)}function Os(){const C=WB("canvas");return C.style.display="block",C}const Co={};function bB(C){C in Co||(Co[C]=!0,console.warn(C))}const Bo=new LI().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qo=new LI().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),sQ={[sC]:{transfer:uQ,primaries:pQ,toReference:C=>C,fromReference:C=>C},[og]:{transfer:Ig,primaries:pQ,toReference:C=>C.convertSRGBToLinear(),fromReference:C=>C.convertLinearToSRGB()},[VQ]:{transfer:uQ,primaries:qQ,toReference:C=>C.applyMatrix3(Qo),fromReference:C=>C.applyMatrix3(Bo)},[$E]:{transfer:Ig,primaries:qQ,toReference:C=>C.convertSRGBToLinear().applyMatrix3(Qo),fromReference:C=>C.applyMatrix3(Bo).convertLinearToSRGB()}},vs=new Set([sC,VQ]),_I={enabled:!0,_workingColorSpace:sC,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(C){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!C},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(C){if(!vs.has(C))throw new Error(`Unsupported working color space, "${C}".`);this._workingColorSpace=C},convert:function(C,A,I){if(this.enabled===!1||A===I||!A||!I)return C;const g=sQ[A].toReference,Q=sQ[I].fromReference;return Q(g(C))},fromWorkingColorSpace:function(C,A){return this.convert(C,this._workingColorSpace,A)},toWorkingColorSpace:function(C,A){return this.convert(C,A,this._workingColorSpace)},getPrimaries:function(C){return sQ[C].primaries},getTransfer:function(C){return C===Tg?uQ:sQ[C].transfer}};function cB(C){return C<.04045?C*.0773993808:Math.pow(C*.9478672986+.0521327014,2.4)}function sE(C){return C<.0031308?C*12.92:1.055*Math.pow(C,.41666)-.055}let IB;class ot{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{IB===void 0&&(IB=WB("canvas")),IB.width=A.width,IB.height=A.height;const g=IB.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=IB}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=WB("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const Q=g.getImageData(0,0,A.width,A.height),i=Q.data;for(let D=0;D<i.length;D++)i[D]=cB(i[D]/255)*255;return g.putImageData(Q,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(cB(I[g]/255)*255):I[g]=cB(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let Xs=0;class tt{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xs++}),this.uuid=ZB(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},Q=this.data;if(Q!==null){let i;if(Array.isArray(Q)){i=[];for(let D=0,t=Q.length;D<t;D++)Q[D].isDataTexture?i.push(aE(Q[D].image)):i.push(aE(Q[D]))}else i=aE(Q);g.url=i}return I||(A.images[this.uuid]=g),g}}function aE(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap?ot.getDataURL(C):C.data?{data:Array.from(C.data),width:C.width,height:C.height,type:C.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ps=0;class dg extends MB{constructor(A=dg.DEFAULT_IMAGE,I=dg.DEFAULT_MAPPING,g=vg,Q=vg,i=xg,D=TB,t=Xg,a=UC,n=dg.DEFAULT_ANISOTROPY,w=Tg){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ps++}),this.uuid=ZB(),this.name="",this.source=new tt(A),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=g,this.wrapT=Q,this.magFilter=i,this.minFilter=D,this.anisotropy=n,this.format=t,this.internalFormat=null,this.type=a,this.offset=new jI(0,0),this.repeat=new jI(1,1),this.center=new jI(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new LI,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof w=="string"?this.colorSpace=w:(bB("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=w===KC?og:Tg),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==jo)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case xE:A.x=A.x-Math.floor(A.x);break;case vg:A.x=A.x<0?0:1;break;case bE:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case xE:A.y=A.y-Math.floor(A.y);break;case vg:A.y=A.y<0?0:1;break;case bE:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return bB("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===og?KC:Bt}set encoding(A){bB("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=A===KC?og:Tg}}dg.DEFAULT_IMAGE=null;dg.DEFAULT_MAPPING=jo;dg.DEFAULT_ANISOTROPY=1;class Fg{constructor(A=0,I=0,g=0,Q=1){Fg.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=Q}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,Q){return this.x=A,this.y=I,this.z=g,this.w=Q,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,Q=this.z,i=this.w,D=A.elements;return this.x=D[0]*I+D[4]*g+D[8]*Q+D[12]*i,this.y=D[1]*I+D[5]*g+D[9]*Q+D[13]*i,this.z=D[2]*I+D[6]*g+D[10]*Q+D[14]*i,this.w=D[3]*I+D[7]*g+D[11]*Q+D[15]*i,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,Q,i;const a=A.elements,n=a[0],w=a[4],c=a[8],R=a[1],M=a[5],k=a[9],S=a[2],r=a[6],h=a[10];if(Math.abs(w-R)<.01&&Math.abs(c-S)<.01&&Math.abs(k-r)<.01){if(Math.abs(w+R)<.1&&Math.abs(c+S)<.1&&Math.abs(k+r)<.1&&Math.abs(n+M+h-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const J=(n+1)/2,u=(M+1)/2,x=(h+1)/2,T=(w+R)/4,V=(c+S)/4,QA=(k+r)/4;return J>u&&J>x?J<.01?(g=0,Q=.707106781,i=.707106781):(g=Math.sqrt(J),Q=T/g,i=V/g):u>x?u<.01?(g=.707106781,Q=0,i=.707106781):(Q=Math.sqrt(u),g=T/Q,i=QA/Q):x<.01?(g=.707106781,Q=.707106781,i=0):(i=Math.sqrt(x),g=V/i,Q=QA/i),this.set(g,Q,i,I),this}let H=Math.sqrt((r-k)*(r-k)+(c-S)*(c-S)+(R-w)*(R-w));return Math.abs(H)<.001&&(H=1),this.x=(r-k)/H,this.y=(c-S)/H,this.z=(R-w)/H,this.w=Math.acos((n+M+h-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class js extends MB{constructor(A=1,I=1,g={}){super(),this.isRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new Fg(0,0,A,I),this.scissorTest=!1,this.viewport=new Fg(0,0,A,I);const Q={width:A,height:I,depth:1};g.encoding!==void 0&&(bB("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),g.colorSpace=g.encoding===KC?og:Tg),g=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xg,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},g),this.texture=new dg(Q,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=g.generateMipmaps,this.texture.internalFormat=g.internalFormat,this.depthBuffer=g.depthBuffer,this.stencilBuffer=g.stencilBuffer,this.depthTexture=g.depthTexture,this.samples=g.samples}setSize(A,I,g=1){(this.width!==A||this.height!==I||this.depth!==g)&&(this.width=A,this.height=I,this.depth=g,this.texture.image.width=A,this.texture.image.height=I,this.texture.image.depth=g,this.dispose()),this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new tt(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class OC extends js{constructor(A=1,I=1,g={}){super(A,I,g),this.isWebGLRenderTarget=!0}}class Dt extends dg{constructor(A=null,I=1,g=1,Q=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:Q},this.magFilter=Sg,this.minFilter=Sg,this.wrapR=vg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zs extends dg{constructor(A=null,I=1,g=1,Q=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:Q},this.magFilter=Sg,this.minFilter=Sg,this.wrapR=vg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class SB{constructor(A=0,I=0,g=0,Q=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=Q}static slerpFlat(A,I,g,Q,i,D,t){let a=g[Q+0],n=g[Q+1],w=g[Q+2],c=g[Q+3];const R=i[D+0],M=i[D+1],k=i[D+2],S=i[D+3];if(t===0){A[I+0]=a,A[I+1]=n,A[I+2]=w,A[I+3]=c;return}if(t===1){A[I+0]=R,A[I+1]=M,A[I+2]=k,A[I+3]=S;return}if(c!==S||a!==R||n!==M||w!==k){let r=1-t;const h=a*R+n*M+w*k+c*S,H=h>=0?1:-1,J=1-h*h;if(J>Number.EPSILON){const x=Math.sqrt(J),T=Math.atan2(x,h*H);r=Math.sin(r*T)/x,t=Math.sin(t*T)/x}const u=t*H;if(a=a*r+R*u,n=n*r+M*u,w=w*r+k*u,c=c*r+S*u,r===1-t){const x=1/Math.sqrt(a*a+n*n+w*w+c*c);a*=x,n*=x,w*=x,c*=x}}A[I]=a,A[I+1]=n,A[I+2]=w,A[I+3]=c}static multiplyQuaternionsFlat(A,I,g,Q,i,D){const t=g[Q],a=g[Q+1],n=g[Q+2],w=g[Q+3],c=i[D],R=i[D+1],M=i[D+2],k=i[D+3];return A[I]=t*k+w*c+a*M-n*R,A[I+1]=a*k+w*R+n*c-t*M,A[I+2]=n*k+w*M+t*R-a*c,A[I+3]=w*k-t*c-a*R-n*M,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,Q){return this._x=A,this._y=I,this._z=g,this._w=Q,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I){const g=A._x,Q=A._y,i=A._z,D=A._order,t=Math.cos,a=Math.sin,n=t(g/2),w=t(Q/2),c=t(i/2),R=a(g/2),M=a(Q/2),k=a(i/2);switch(D){case"XYZ":this._x=R*w*c+n*M*k,this._y=n*M*c-R*w*k,this._z=n*w*k+R*M*c,this._w=n*w*c-R*M*k;break;case"YXZ":this._x=R*w*c+n*M*k,this._y=n*M*c-R*w*k,this._z=n*w*k-R*M*c,this._w=n*w*c+R*M*k;break;case"ZXY":this._x=R*w*c-n*M*k,this._y=n*M*c+R*w*k,this._z=n*w*k+R*M*c,this._w=n*w*c-R*M*k;break;case"ZYX":this._x=R*w*c-n*M*k,this._y=n*M*c+R*w*k,this._z=n*w*k-R*M*c,this._w=n*w*c+R*M*k;break;case"YZX":this._x=R*w*c+n*M*k,this._y=n*M*c+R*w*k,this._z=n*w*k-R*M*c,this._w=n*w*c-R*M*k;break;case"XZY":this._x=R*w*c-n*M*k,this._y=n*M*c-R*w*k,this._z=n*w*k+R*M*c,this._w=n*w*c+R*M*k;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+D)}return I!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,Q=Math.sin(g);return this._x=A.x*Q,this._y=A.y*Q,this._z=A.z*Q,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],Q=I[4],i=I[8],D=I[1],t=I[5],a=I[9],n=I[2],w=I[6],c=I[10],R=g+t+c;if(R>0){const M=.5/Math.sqrt(R+1);this._w=.25/M,this._x=(w-a)*M,this._y=(i-n)*M,this._z=(D-Q)*M}else if(g>t&&g>c){const M=2*Math.sqrt(1+g-t-c);this._w=(w-a)/M,this._x=.25*M,this._y=(Q+D)/M,this._z=(i+n)/M}else if(t>c){const M=2*Math.sqrt(1+t-g-c);this._w=(i-n)/M,this._x=(Q+D)/M,this._y=.25*M,this._z=(a+w)/M}else{const M=2*Math.sqrt(1+c-g-t);this._w=(D-Q)/M,this._x=(i+n)/M,this._y=(a+w)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(lg(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const Q=Math.min(1,I/g);return this.slerp(A,Q),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,Q=A._y,i=A._z,D=A._w,t=I._x,a=I._y,n=I._z,w=I._w;return this._x=g*w+D*t+Q*n-i*a,this._y=Q*w+D*a+i*t-g*n,this._z=i*w+D*n+g*a-Q*t,this._w=D*w-g*t-Q*a-i*n,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,Q=this._y,i=this._z,D=this._w;let t=D*A._w+g*A._x+Q*A._y+i*A._z;if(t<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,t=-t):this.copy(A),t>=1)return this._w=D,this._x=g,this._y=Q,this._z=i,this;const a=1-t*t;if(a<=Number.EPSILON){const M=1-I;return this._w=M*D+I*this._w,this._x=M*g+I*this._x,this._y=M*Q+I*this._y,this._z=M*i+I*this._z,this.normalize(),this._onChangeCallback(),this}const n=Math.sqrt(a),w=Math.atan2(n,t),c=Math.sin((1-I)*w)/n,R=Math.sin(I*w)/n;return this._w=D*c+this._w*R,this._x=g*c+this._x*R,this._y=Q*c+this._y*R,this._z=i*c+this._z*R,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=Math.random(),I=Math.sqrt(1-A),g=Math.sqrt(A),Q=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(I*Math.cos(Q),g*Math.sin(i),g*Math.cos(i),I*Math.sin(Q))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class CA{constructor(A=0,I=0,g=0){CA.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(Eo.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(Eo.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,Q=this.z,i=A.elements;return this.x=i[0]*I+i[3]*g+i[6]*Q,this.y=i[1]*I+i[4]*g+i[7]*Q,this.z=i[2]*I+i[5]*g+i[8]*Q,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,Q=this.z,i=A.elements,D=1/(i[3]*I+i[7]*g+i[11]*Q+i[15]);return this.x=(i[0]*I+i[4]*g+i[8]*Q+i[12])*D,this.y=(i[1]*I+i[5]*g+i[9]*Q+i[13])*D,this.z=(i[2]*I+i[6]*g+i[10]*Q+i[14])*D,this}applyQuaternion(A){const I=this.x,g=this.y,Q=this.z,i=A.x,D=A.y,t=A.z,a=A.w,n=2*(D*Q-t*g),w=2*(t*I-i*Q),c=2*(i*g-D*I);return this.x=I+a*n+D*c-t*w,this.y=g+a*w+t*n-i*c,this.z=Q+a*c+i*w-D*n,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,Q=this.z,i=A.elements;return this.x=i[0]*I+i[4]*g+i[8]*Q,this.y=i[1]*I+i[5]*g+i[9]*Q,this.z=i[2]*I+i[6]*g+i[10]*Q,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,Q=A.y,i=A.z,D=I.x,t=I.y,a=I.z;return this.x=Q*a-i*t,this.y=i*D-g*a,this.z=g*t-Q*D,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return eE.copy(this).projectOnVector(A),this.sub(eE)}reflect(A){return this.sub(eE.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(lg(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,Q=this.z-A.z;return I*I+g*g+Q*Q}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const Q=Math.sin(I)*A;return this.x=Q*Math.sin(g),this.y=Math.cos(I)*A,this.z=Q*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),Q=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=Q,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,I=Math.random()*Math.PI*2,g=Math.sqrt(1-A**2);return this.x=g*Math.cos(I),this.y=g*Math.sin(I),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eE=new CA,Eo=new SB;class OB{constructor(A=new CA(1/0,1/0,1/0),I=new CA(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I+=3)this.expandByPoint(Vg.fromArray(A,I));return this}setFromBufferAttribute(A){this.makeEmpty();for(let I=0,g=A.count;I<g;I++)this.expandByPoint(Vg.fromBufferAttribute(A,I));return this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=Vg.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0){const i=g.getAttribute("position");if(I===!0&&i!==void 0&&A.isInstancedMesh!==!0)for(let D=0,t=i.count;D<t;D++)A.isMesh===!0?A.getVertexPosition(D,Vg):Vg.fromBufferAttribute(i,D),Vg.applyMatrix4(A.matrixWorld),this.expandByPoint(Vg);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),aQ.copy(A.boundingBox)):(g.boundingBox===null&&g.computeBoundingBox(),aQ.copy(g.boundingBox)),aQ.applyMatrix4(A.matrixWorld),this.union(aQ)}const Q=A.children;for(let i=0,D=Q.length;i<D;i++)this.expandByObject(Q[i],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,Vg),Vg.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(uB),eQ.subVectors(this.max,uB),gB.subVectors(A.a,uB),CB.subVectors(A.b,uB),BB.subVectors(A.c,uB),GC.subVectors(CB,gB),rC.subVectors(BB,CB),HC.subVectors(gB,BB);let I=[0,-GC.z,GC.y,0,-rC.z,rC.y,0,-HC.z,HC.y,GC.z,0,-GC.x,rC.z,0,-rC.x,HC.z,0,-HC.x,-GC.y,GC.x,0,-rC.y,rC.x,0,-HC.y,HC.x,0];return!nE(I,gB,CB,BB,eQ)||(I=[1,0,0,0,1,0,0,0,1],!nE(I,gB,CB,BB,eQ))?!1:(nQ.crossVectors(GC,rC),I=[nQ.x,nQ.y,nQ.z],nE(I,gB,CB,BB,eQ))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,Vg).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(Vg).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(gC[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),gC[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),gC[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),gC[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),gC[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),gC[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),gC[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),gC[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(gC),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const gC=[new CA,new CA,new CA,new CA,new CA,new CA,new CA,new CA],Vg=new CA,aQ=new OB,gB=new CA,CB=new CA,BB=new CA,GC=new CA,rC=new CA,HC=new CA,uB=new CA,eQ=new CA,nQ=new CA,uC=new CA;function nE(C,A,I,g,Q){for(let i=0,D=C.length-3;i<=D;i+=3){uC.fromArray(C,i);const t=Q.x*Math.abs(uC.x)+Q.y*Math.abs(uC.y)+Q.z*Math.abs(uC.z),a=A.dot(uC),n=I.dot(uC),w=g.dot(uC);if(Math.max(-Math.max(a,n,w),Math.min(a,n,w))>t)return!1}return!0}const _s=new OB,pB=new CA,hE=new CA;class Ai{constructor(A=new CA,I=-1){this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):_s.setFromPoints(A).getCenter(g);let Q=0;for(let i=0,D=A.length;i<D;i++)Q=Math.max(Q,g.distanceToSquared(A[i]));return this.radius=Math.sqrt(Q),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;pB.subVectors(A,this.center);const I=pB.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),Q=(g-this.radius)*.5;this.center.addScaledVector(pB,Q/g),this.radius+=Q}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(hE.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(pB.copy(A.center).add(hE)),this.expandByPoint(pB.copy(A.center).sub(hE))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const CC=new CA,wE=new CA,hQ=new CA,cC=new CA,GE=new CA,wQ=new CA,rE=new CA;class $s{constructor(A=new CA,I=new CA(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,CC)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=CC.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(CC.copy(this.origin).addScaledVector(this.direction,I),CC.distanceToSquared(A))}distanceSqToSegment(A,I,g,Q){wE.copy(A).add(I).multiplyScalar(.5),hQ.copy(I).sub(A).normalize(),cC.copy(this.origin).sub(wE);const i=A.distanceTo(I)*.5,D=-this.direction.dot(hQ),t=cC.dot(this.direction),a=-cC.dot(hQ),n=cC.lengthSq(),w=Math.abs(1-D*D);let c,R,M,k;if(w>0)if(c=D*a-t,R=D*t-a,k=i*w,c>=0)if(R>=-k)if(R<=k){const S=1/w;c*=S,R*=S,M=c*(c+D*R+2*t)+R*(D*c+R+2*a)+n}else R=i,c=Math.max(0,-(D*R+t)),M=-c*c+R*(R+2*a)+n;else R=-i,c=Math.max(0,-(D*R+t)),M=-c*c+R*(R+2*a)+n;else R<=-k?(c=Math.max(0,-(-D*i+t)),R=c>0?-i:Math.min(Math.max(-i,-a),i),M=-c*c+R*(R+2*a)+n):R<=k?(c=0,R=Math.min(Math.max(-i,-a),i),M=R*(R+2*a)+n):(c=Math.max(0,-(D*i+t)),R=c>0?i:Math.min(Math.max(-i,-a),i),M=-c*c+R*(R+2*a)+n);else R=D>0?-i:i,c=Math.max(0,-(D*R+t)),M=-c*c+R*(R+2*a)+n;return g&&g.copy(this.origin).addScaledVector(this.direction,c),Q&&Q.copy(wE).addScaledVector(hQ,R),M}intersectSphere(A,I){CC.subVectors(A.center,this.origin);const g=CC.dot(this.direction),Q=CC.dot(CC)-g*g,i=A.radius*A.radius;if(Q>i)return null;const D=Math.sqrt(i-Q),t=g-D,a=g+D;return a<0?null:t<0?this.at(a,I):this.at(t,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,Q,i,D,t,a;const n=1/this.direction.x,w=1/this.direction.y,c=1/this.direction.z,R=this.origin;return n>=0?(g=(A.min.x-R.x)*n,Q=(A.max.x-R.x)*n):(g=(A.max.x-R.x)*n,Q=(A.min.x-R.x)*n),w>=0?(i=(A.min.y-R.y)*w,D=(A.max.y-R.y)*w):(i=(A.max.y-R.y)*w,D=(A.min.y-R.y)*w),g>D||i>Q||((i>g||isNaN(g))&&(g=i),(D<Q||isNaN(Q))&&(Q=D),c>=0?(t=(A.min.z-R.z)*c,a=(A.max.z-R.z)*c):(t=(A.max.z-R.z)*c,a=(A.min.z-R.z)*c),g>a||t>Q)||((t>g||g!==g)&&(g=t),(a<Q||Q!==Q)&&(Q=a),Q<0)?null:this.at(g>=0?g:Q,I)}intersectsBox(A){return this.intersectBox(A,CC)!==null}intersectTriangle(A,I,g,Q,i){GE.subVectors(I,A),wQ.subVectors(g,A),rE.crossVectors(GE,wQ);let D=this.direction.dot(rE),t;if(D>0){if(Q)return null;t=1}else if(D<0)t=-1,D=-D;else return null;cC.subVectors(this.origin,A);const a=t*this.direction.dot(wQ.crossVectors(cC,wQ));if(a<0)return null;const n=t*this.direction.dot(GE.cross(cC));if(n<0||a+n>D)return null;const w=-t*cC.dot(rE);return w<0?null:this.at(w/D,i)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ag{constructor(A,I,g,Q,i,D,t,a,n,w,c,R,M,k,S,r){ag.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,I,g,Q,i,D,t,a,n,w,c,R,M,k,S,r)}set(A,I,g,Q,i,D,t,a,n,w,c,R,M,k,S,r){const h=this.elements;return h[0]=A,h[4]=I,h[8]=g,h[12]=Q,h[1]=i,h[5]=D,h[9]=t,h[13]=a,h[2]=n,h[6]=w,h[10]=c,h[14]=R,h[3]=M,h[7]=k,h[11]=S,h[15]=r,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ag().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,Q=1/QB.setFromMatrixColumn(A,0).length(),i=1/QB.setFromMatrixColumn(A,1).length(),D=1/QB.setFromMatrixColumn(A,2).length();return I[0]=g[0]*Q,I[1]=g[1]*Q,I[2]=g[2]*Q,I[3]=0,I[4]=g[4]*i,I[5]=g[5]*i,I[6]=g[6]*i,I[7]=0,I[8]=g[8]*D,I[9]=g[9]*D,I[10]=g[10]*D,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,Q=A.y,i=A.z,D=Math.cos(g),t=Math.sin(g),a=Math.cos(Q),n=Math.sin(Q),w=Math.cos(i),c=Math.sin(i);if(A.order==="XYZ"){const R=D*w,M=D*c,k=t*w,S=t*c;I[0]=a*w,I[4]=-a*c,I[8]=n,I[1]=M+k*n,I[5]=R-S*n,I[9]=-t*a,I[2]=S-R*n,I[6]=k+M*n,I[10]=D*a}else if(A.order==="YXZ"){const R=a*w,M=a*c,k=n*w,S=n*c;I[0]=R+S*t,I[4]=k*t-M,I[8]=D*n,I[1]=D*c,I[5]=D*w,I[9]=-t,I[2]=M*t-k,I[6]=S+R*t,I[10]=D*a}else if(A.order==="ZXY"){const R=a*w,M=a*c,k=n*w,S=n*c;I[0]=R-S*t,I[4]=-D*c,I[8]=k+M*t,I[1]=M+k*t,I[5]=D*w,I[9]=S-R*t,I[2]=-D*n,I[6]=t,I[10]=D*a}else if(A.order==="ZYX"){const R=D*w,M=D*c,k=t*w,S=t*c;I[0]=a*w,I[4]=k*n-M,I[8]=R*n+S,I[1]=a*c,I[5]=S*n+R,I[9]=M*n-k,I[2]=-n,I[6]=t*a,I[10]=D*a}else if(A.order==="YZX"){const R=D*a,M=D*n,k=t*a,S=t*n;I[0]=a*w,I[4]=S-R*c,I[8]=k*c+M,I[1]=c,I[5]=D*w,I[9]=-t*w,I[2]=-n*w,I[6]=M*c+k,I[10]=R-S*c}else if(A.order==="XZY"){const R=D*a,M=D*n,k=t*a,S=t*n;I[0]=a*w,I[4]=-c,I[8]=n*w,I[1]=R*c+S,I[5]=D*w,I[9]=M*c-k,I[2]=k*c-M,I[6]=t*w,I[10]=S*c+R}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(Aa,A,Ia)}lookAt(A,I,g){const Q=this.elements;return Lg.subVectors(A,I),Lg.lengthSq()===0&&(Lg.z=1),Lg.normalize(),FC.crossVectors(g,Lg),FC.lengthSq()===0&&(Math.abs(g.z)===1?Lg.x+=1e-4:Lg.z+=1e-4,Lg.normalize(),FC.crossVectors(g,Lg)),FC.normalize(),GQ.crossVectors(Lg,FC),Q[0]=FC.x,Q[4]=GQ.x,Q[8]=Lg.x,Q[1]=FC.y,Q[5]=GQ.y,Q[9]=Lg.y,Q[2]=FC.z,Q[6]=GQ.z,Q[10]=Lg.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,Q=I.elements,i=this.elements,D=g[0],t=g[4],a=g[8],n=g[12],w=g[1],c=g[5],R=g[9],M=g[13],k=g[2],S=g[6],r=g[10],h=g[14],H=g[3],J=g[7],u=g[11],x=g[15],T=Q[0],V=Q[4],QA=Q[8],K=Q[12],m=Q[1],eA=Q[5],hA=Q[9],wA=Q[13],Z=Q[2],EA=Q[6],GA=Q[10],DA=Q[14],dA=Q[3],RA=Q[7],rA=Q[11],JA=Q[15];return i[0]=D*T+t*m+a*Z+n*dA,i[4]=D*V+t*eA+a*EA+n*RA,i[8]=D*QA+t*hA+a*GA+n*rA,i[12]=D*K+t*wA+a*DA+n*JA,i[1]=w*T+c*m+R*Z+M*dA,i[5]=w*V+c*eA+R*EA+M*RA,i[9]=w*QA+c*hA+R*GA+M*rA,i[13]=w*K+c*wA+R*DA+M*JA,i[2]=k*T+S*m+r*Z+h*dA,i[6]=k*V+S*eA+r*EA+h*RA,i[10]=k*QA+S*hA+r*GA+h*rA,i[14]=k*K+S*wA+r*DA+h*JA,i[3]=H*T+J*m+u*Z+x*dA,i[7]=H*V+J*eA+u*EA+x*RA,i[11]=H*QA+J*hA+u*GA+x*rA,i[15]=H*K+J*wA+u*DA+x*JA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],Q=A[8],i=A[12],D=A[1],t=A[5],a=A[9],n=A[13],w=A[2],c=A[6],R=A[10],M=A[14],k=A[3],S=A[7],r=A[11],h=A[15];return k*(+i*a*c-Q*n*c-i*t*R+g*n*R+Q*t*M-g*a*M)+S*(+I*a*M-I*n*R+i*D*R-Q*D*M+Q*n*w-i*a*w)+r*(+I*n*c-I*t*M-i*D*c+g*D*M+i*t*w-g*n*w)+h*(-Q*t*w-I*a*c+I*t*R+Q*D*c-g*D*R+g*a*w)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const Q=this.elements;return A.isVector3?(Q[12]=A.x,Q[13]=A.y,Q[14]=A.z):(Q[12]=A,Q[13]=I,Q[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],Q=A[2],i=A[3],D=A[4],t=A[5],a=A[6],n=A[7],w=A[8],c=A[9],R=A[10],M=A[11],k=A[12],S=A[13],r=A[14],h=A[15],H=c*r*n-S*R*n+S*a*M-t*r*M-c*a*h+t*R*h,J=k*R*n-w*r*n-k*a*M+D*r*M+w*a*h-D*R*h,u=w*S*n-k*c*n+k*t*M-D*S*M-w*t*h+D*c*h,x=k*c*a-w*S*a-k*t*R+D*S*R+w*t*r-D*c*r,T=I*H+g*J+Q*u+i*x;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/T;return A[0]=H*V,A[1]=(S*R*i-c*r*i-S*Q*M+g*r*M+c*Q*h-g*R*h)*V,A[2]=(t*r*i-S*a*i+S*Q*n-g*r*n-t*Q*h+g*a*h)*V,A[3]=(c*a*i-t*R*i-c*Q*n+g*R*n+t*Q*M-g*a*M)*V,A[4]=J*V,A[5]=(w*r*i-k*R*i+k*Q*M-I*r*M-w*Q*h+I*R*h)*V,A[6]=(k*a*i-D*r*i-k*Q*n+I*r*n+D*Q*h-I*a*h)*V,A[7]=(D*R*i-w*a*i+w*Q*n-I*R*n-D*Q*M+I*a*M)*V,A[8]=u*V,A[9]=(k*c*i-w*S*i-k*g*M+I*S*M+w*g*h-I*c*h)*V,A[10]=(D*S*i-k*t*i+k*g*n-I*S*n-D*g*h+I*t*h)*V,A[11]=(w*t*i-D*c*i-w*g*n+I*c*n+D*g*M-I*t*M)*V,A[12]=x*V,A[13]=(w*S*Q-k*c*Q+k*g*R-I*S*R-w*g*r+I*c*r)*V,A[14]=(k*t*Q-D*S*Q-k*g*a+I*S*a+D*g*r-I*t*r)*V,A[15]=(D*c*Q-w*t*Q+w*g*a-I*c*a-D*g*R+I*t*R)*V,this}scale(A){const I=this.elements,g=A.x,Q=A.y,i=A.z;return I[0]*=g,I[4]*=Q,I[8]*=i,I[1]*=g,I[5]*=Q,I[9]*=i,I[2]*=g,I[6]*=Q,I[10]*=i,I[3]*=g,I[7]*=Q,I[11]*=i,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],Q=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,Q))}makeTranslation(A,I,g){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),Q=Math.sin(I),i=1-g,D=A.x,t=A.y,a=A.z,n=i*D,w=i*t;return this.set(n*D+g,n*t-Q*a,n*a+Q*t,0,n*t+Q*a,w*t+g,w*a-Q*D,0,n*a-Q*t,w*a+Q*D,i*a*a+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,Q,i,D){return this.set(1,g,i,0,A,1,D,0,I,Q,1,0,0,0,0,1),this}compose(A,I,g){const Q=this.elements,i=I._x,D=I._y,t=I._z,a=I._w,n=i+i,w=D+D,c=t+t,R=i*n,M=i*w,k=i*c,S=D*w,r=D*c,h=t*c,H=a*n,J=a*w,u=a*c,x=g.x,T=g.y,V=g.z;return Q[0]=(1-(S+h))*x,Q[1]=(M+u)*x,Q[2]=(k-J)*x,Q[3]=0,Q[4]=(M-u)*T,Q[5]=(1-(R+h))*T,Q[6]=(r+H)*T,Q[7]=0,Q[8]=(k+J)*V,Q[9]=(r-H)*V,Q[10]=(1-(R+S))*V,Q[11]=0,Q[12]=A.x,Q[13]=A.y,Q[14]=A.z,Q[15]=1,this}decompose(A,I,g){const Q=this.elements;let i=QB.set(Q[0],Q[1],Q[2]).length();const D=QB.set(Q[4],Q[5],Q[6]).length(),t=QB.set(Q[8],Q[9],Q[10]).length();this.determinant()<0&&(i=-i),A.x=Q[12],A.y=Q[13],A.z=Q[14],Wg.copy(this);const n=1/i,w=1/D,c=1/t;return Wg.elements[0]*=n,Wg.elements[1]*=n,Wg.elements[2]*=n,Wg.elements[4]*=w,Wg.elements[5]*=w,Wg.elements[6]*=w,Wg.elements[8]*=c,Wg.elements[9]*=c,Wg.elements[10]*=c,I.setFromRotationMatrix(Wg),g.x=i,g.y=D,g.z=t,this}makePerspective(A,I,g,Q,i,D,t=DC){const a=this.elements,n=2*i/(I-A),w=2*i/(g-Q),c=(I+A)/(I-A),R=(g+Q)/(g-Q);let M,k;if(t===DC)M=-(D+i)/(D-i),k=-2*D*i/(D-i);else if(t===mQ)M=-D/(D-i),k=-D*i/(D-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+t);return a[0]=n,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=w,a[9]=R,a[13]=0,a[2]=0,a[6]=0,a[10]=M,a[14]=k,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(A,I,g,Q,i,D,t=DC){const a=this.elements,n=1/(I-A),w=1/(g-Q),c=1/(D-i),R=(I+A)*n,M=(g+Q)*w;let k,S;if(t===DC)k=(D+i)*c,S=-2*c;else if(t===mQ)k=i*c,S=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+t);return a[0]=2*n,a[4]=0,a[8]=0,a[12]=-R,a[1]=0,a[5]=2*w,a[9]=0,a[13]=-M,a[2]=0,a[6]=0,a[10]=S,a[14]=-k,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let Q=0;Q<16;Q++)if(I[Q]!==g[Q])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const QB=new CA,Wg=new ag,Aa=new CA(0,0,0),Ia=new CA(1,1,1),FC=new CA,GQ=new CA,Lg=new CA,io=new ag,oo=new SB;class WQ{constructor(A=0,I=0,g=0,Q=WQ.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=Q}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,Q=this._order){return this._x=A,this._y=I,this._z=g,this._order=Q,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const Q=A.elements,i=Q[0],D=Q[4],t=Q[8],a=Q[1],n=Q[5],w=Q[9],c=Q[2],R=Q[6],M=Q[10];switch(I){case"XYZ":this._y=Math.asin(lg(t,-1,1)),Math.abs(t)<.9999999?(this._x=Math.atan2(-w,M),this._z=Math.atan2(-D,i)):(this._x=Math.atan2(R,n),this._z=0);break;case"YXZ":this._x=Math.asin(-lg(w,-1,1)),Math.abs(w)<.9999999?(this._y=Math.atan2(t,M),this._z=Math.atan2(a,n)):(this._y=Math.atan2(-c,i),this._z=0);break;case"ZXY":this._x=Math.asin(lg(R,-1,1)),Math.abs(R)<.9999999?(this._y=Math.atan2(-c,M),this._z=Math.atan2(-D,n)):(this._y=0,this._z=Math.atan2(a,i));break;case"ZYX":this._y=Math.asin(-lg(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(R,M),this._z=Math.atan2(a,i)):(this._x=0,this._z=Math.atan2(-D,n));break;case"YZX":this._z=Math.asin(lg(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-w,n),this._y=Math.atan2(-c,i)):(this._x=0,this._y=Math.atan2(t,M));break;case"XZY":this._z=Math.asin(-lg(D,-1,1)),Math.abs(D)<.9999999?(this._x=Math.atan2(R,n),this._y=Math.atan2(t,i)):(this._x=Math.atan2(-w,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return io.makeRotationFromQuaternion(A),this.setFromRotationMatrix(io,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return oo.setFromEuler(this),this.setFromQuaternion(oo,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}WQ.DEFAULT_ORDER="XYZ";class st{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let ga=0;const to=new CA,EB=new SB,BC=new ag,rQ=new CA,qB=new CA,Ca=new CA,Ba=new SB,Do=new CA(1,0,0),so=new CA(0,1,0),ao=new CA(0,0,1),Qa={type:"added"},Ea={type:"removed"};class ug extends MB{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ga++}),this.uuid=ZB(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ug.DEFAULT_UP.clone();const A=new CA,I=new WQ,g=new SB,Q=new CA(1,1,1);function i(){g.setFromEuler(I,!1)}function D(){I.setFromQuaternion(g,void 0,!1)}I._onChange(i),g._onChange(D),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:Q},modelViewMatrix:{value:new ag},normalMatrix:{value:new LI}}),this.matrix=new ag,this.matrixWorld=new ag,this.matrixAutoUpdate=ug.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ug.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new st,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return EB.setFromAxisAngle(A,I),this.quaternion.multiply(EB),this}rotateOnWorldAxis(A,I){return EB.setFromAxisAngle(A,I),this.quaternion.premultiply(EB),this}rotateX(A){return this.rotateOnAxis(Do,A)}rotateY(A){return this.rotateOnAxis(so,A)}rotateZ(A){return this.rotateOnAxis(ao,A)}translateOnAxis(A,I){return to.copy(A).applyQuaternion(this.quaternion),this.position.add(to.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(Do,A)}translateY(A){return this.translateOnAxis(so,A)}translateZ(A){return this.translateOnAxis(ao,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(BC.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?rQ.copy(A):rQ.set(A,I,g);const Q=this.parent;this.updateWorldMatrix(!0,!1),qB.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?BC.lookAt(qB,rQ,this.up):BC.lookAt(rQ,qB,this.up),this.quaternion.setFromRotationMatrix(BC),Q&&(BC.extractRotation(Q.matrixWorld),EB.setFromRotationMatrix(BC),this.quaternion.premultiply(EB.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(Qa)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(Ea)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),BC.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),BC.multiply(A.parent.matrixWorld)),A.applyMatrix4(BC),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,Q=this.children.length;g<Q;g++){const D=this.children[g].getObjectByProperty(A,I);if(D!==void 0)return D}}getObjectsByProperty(A,I,g=[]){this[A]===I&&g.push(this);const Q=this.children;for(let i=0,D=Q.length;i<D;i++)Q[i].getObjectsByProperty(A,I,g);return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qB,A,Ca),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qB,Ba,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,Q=I.length;g<Q;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,Q=I.length;g<Q;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,Q=I.length;g<Q;g++){const i=I[g];(i.matrixWorldAutoUpdate===!0||A===!0)&&i.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const Q=this.children;for(let i=0,D=Q.length;i<D;i++){const t=Q[i];t.matrixWorldAutoUpdate===!0&&t.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const Q={};Q.uuid=this.uuid,Q.type=this.type,this.name!==""&&(Q.name=this.name),this.castShadow===!0&&(Q.castShadow=!0),this.receiveShadow===!0&&(Q.receiveShadow=!0),this.visible===!1&&(Q.visible=!1),this.frustumCulled===!1&&(Q.frustumCulled=!1),this.renderOrder!==0&&(Q.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(Q.userData=this.userData),Q.layers=this.layers.mask,Q.matrix=this.matrix.toArray(),Q.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(Q.matrixAutoUpdate=!1),this.isInstancedMesh&&(Q.type="InstancedMesh",Q.count=this.count,Q.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(Q.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(Q.type="BatchedMesh",Q.perObjectFrustumCulled=this.perObjectFrustumCulled,Q.sortObjects=this.sortObjects,Q.drawRanges=this._drawRanges,Q.reservedRanges=this._reservedRanges,Q.visibility=this._visibility,Q.active=this._active,Q.bounds=this._bounds.map(t=>({boxInitialized:t.boxInitialized,boxMin:t.box.min.toArray(),boxMax:t.box.max.toArray(),sphereInitialized:t.sphereInitialized,sphereRadius:t.sphere.radius,sphereCenter:t.sphere.center.toArray()})),Q.maxGeometryCount=this._maxGeometryCount,Q.maxVertexCount=this._maxVertexCount,Q.maxIndexCount=this._maxIndexCount,Q.geometryInitialized=this._geometryInitialized,Q.geometryCount=this._geometryCount,Q.matricesTexture=this._matricesTexture.toJSON(A),this.boundingSphere!==null&&(Q.boundingSphere={center:Q.boundingSphere.center.toArray(),radius:Q.boundingSphere.radius}),this.boundingBox!==null&&(Q.boundingBox={min:Q.boundingBox.min.toArray(),max:Q.boundingBox.max.toArray()}));function i(t,a){return t[a.uuid]===void 0&&(t[a.uuid]=a.toJSON(A)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?Q.background=this.background.toJSON():this.background.isTexture&&(Q.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(Q.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){Q.geometry=i(A.geometries,this.geometry);const t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){const a=t.shapes;if(Array.isArray(a))for(let n=0,w=a.length;n<w;n++){const c=a[n];i(A.shapes,c)}else i(A.shapes,a)}}if(this.isSkinnedMesh&&(Q.bindMode=this.bindMode,Q.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(A.skeletons,this.skeleton),Q.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const t=[];for(let a=0,n=this.material.length;a<n;a++)t.push(i(A.materials,this.material[a]));Q.material=t}else Q.material=i(A.materials,this.material);if(this.children.length>0){Q.children=[];for(let t=0;t<this.children.length;t++)Q.children.push(this.children[t].toJSON(A).object)}if(this.animations.length>0){Q.animations=[];for(let t=0;t<this.animations.length;t++){const a=this.animations[t];Q.animations.push(i(A.animations,a))}}if(I){const t=D(A.geometries),a=D(A.materials),n=D(A.textures),w=D(A.images),c=D(A.shapes),R=D(A.skeletons),M=D(A.animations),k=D(A.nodes);t.length>0&&(g.geometries=t),a.length>0&&(g.materials=a),n.length>0&&(g.textures=n),w.length>0&&(g.images=w),c.length>0&&(g.shapes=c),R.length>0&&(g.skeletons=R),M.length>0&&(g.animations=M),k.length>0&&(g.nodes=k)}return g.object=Q,g;function D(t){const a=[];for(const n in t){const w=t[n];delete w.metadata,a.push(w)}return a}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const Q=A.children[g];this.add(Q.clone())}return this}}ug.DEFAULT_UP=new CA(0,1,0);ug.DEFAULT_MATRIX_AUTO_UPDATE=!0;ug.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zg=new CA,QC=new CA,cE=new CA,EC=new CA,iB=new CA,oB=new CA,eo=new CA,FE=new CA,RE=new CA,NE=new CA;let cQ=!1;class Og{constructor(A=new CA,I=new CA,g=new CA){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,Q){Q.subVectors(g,I),Zg.subVectors(A,I),Q.cross(Zg);const i=Q.lengthSq();return i>0?Q.multiplyScalar(1/Math.sqrt(i)):Q.set(0,0,0)}static getBarycoord(A,I,g,Q,i){Zg.subVectors(Q,I),QC.subVectors(g,I),cE.subVectors(A,I);const D=Zg.dot(Zg),t=Zg.dot(QC),a=Zg.dot(cE),n=QC.dot(QC),w=QC.dot(cE),c=D*n-t*t;if(c===0)return i.set(-2,-1,-1);const R=1/c,M=(n*a-t*w)*R,k=(D*w-t*a)*R;return i.set(1-M-k,k,M)}static containsPoint(A,I,g,Q){return this.getBarycoord(A,I,g,Q,EC),EC.x>=0&&EC.y>=0&&EC.x+EC.y<=1}static getUV(A,I,g,Q,i,D,t,a){return cQ===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cQ=!0),this.getInterpolation(A,I,g,Q,i,D,t,a)}static getInterpolation(A,I,g,Q,i,D,t,a){return this.getBarycoord(A,I,g,Q,EC),a.setScalar(0),a.addScaledVector(i,EC.x),a.addScaledVector(D,EC.y),a.addScaledVector(t,EC.z),a}static isFrontFacing(A,I,g,Q){return Zg.subVectors(g,I),QC.subVectors(A,I),Zg.cross(QC).dot(Q)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,Q){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[Q]),this}setFromAttributeAndIndices(A,I,g,Q){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,Q),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return Zg.subVectors(this.c,this.b),QC.subVectors(this.a,this.b),Zg.cross(QC).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return Og.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return Og.getBarycoord(A,this.a,this.b,this.c,I)}getUV(A,I,g,Q,i){return cQ===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cQ=!0),Og.getInterpolation(A,this.a,this.b,this.c,I,g,Q,i)}getInterpolation(A,I,g,Q,i){return Og.getInterpolation(A,this.a,this.b,this.c,I,g,Q,i)}containsPoint(A){return Og.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return Og.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,Q=this.b,i=this.c;let D,t;iB.subVectors(Q,g),oB.subVectors(i,g),FE.subVectors(A,g);const a=iB.dot(FE),n=oB.dot(FE);if(a<=0&&n<=0)return I.copy(g);RE.subVectors(A,Q);const w=iB.dot(RE),c=oB.dot(RE);if(w>=0&&c<=w)return I.copy(Q);const R=a*c-w*n;if(R<=0&&a>=0&&w<=0)return D=a/(a-w),I.copy(g).addScaledVector(iB,D);NE.subVectors(A,i);const M=iB.dot(NE),k=oB.dot(NE);if(k>=0&&M<=k)return I.copy(i);const S=M*n-a*k;if(S<=0&&n>=0&&k<=0)return t=n/(n-k),I.copy(g).addScaledVector(oB,t);const r=w*k-M*c;if(r<=0&&c-w>=0&&M-k>=0)return eo.subVectors(i,Q),t=(c-w)/(c-w+(M-k)),I.copy(Q).addScaledVector(eo,t);const h=1/(r+S+R);return D=S*h,t=R*h,I.copy(g).addScaledVector(iB,D).addScaledVector(oB,t)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}const at={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},RC={h:0,s:0,l:0},FQ={h:0,s:0,l:0};function yE(C,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?C+(A-C)*6*I:I<1/2?A:I<2/3?C+(A-C)*6*(2/3-I):C}class vI{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,I,g)}set(A,I,g){if(I===void 0&&g===void 0){const Q=A;Q&&Q.isColor?this.copy(Q):typeof Q=="number"?this.setHex(Q):typeof Q=="string"&&this.setStyle(Q)}else this.setRGB(A,I,g);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=og){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,_I.toWorkingColorSpace(this,I),this}setRGB(A,I,g,Q=_I.workingColorSpace){return this.r=A,this.g=I,this.b=g,_I.toWorkingColorSpace(this,Q),this}setHSL(A,I,g,Q=_I.workingColorSpace){if(A=Zs(A,1),I=lg(I,0,1),g=lg(g,0,1),I===0)this.r=this.g=this.b=g;else{const i=g<=.5?g*(1+I):g+I-g*I,D=2*g-i;this.r=yE(D,i,A+1/3),this.g=yE(D,i,A),this.b=yE(D,i,A-1/3)}return _I.toWorkingColorSpace(this,Q),this}setStyle(A,I=og){function g(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let Q;if(Q=/^(\w+)\(([^\)]*)\)/.exec(A)){let i;const D=Q[1],t=Q[2];switch(D){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(t))return g(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,I);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(t))return g(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,I);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(t))return g(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(Q=/^\#([A-Fa-f\d]+)$/.exec(A)){const i=Q[1],D=i.length;if(D===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,I);if(D===6)return this.setHex(parseInt(i,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=og){const g=at[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=cB(A.r),this.g=cB(A.g),this.b=cB(A.b),this}copyLinearToSRGB(A){return this.r=sE(A.r),this.g=sE(A.g),this.b=sE(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=og){return _I.fromWorkingColorSpace(yg.copy(this),A),Math.round(lg(yg.r*255,0,255))*65536+Math.round(lg(yg.g*255,0,255))*256+Math.round(lg(yg.b*255,0,255))}getHexString(A=og){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=_I.workingColorSpace){_I.fromWorkingColorSpace(yg.copy(this),I);const g=yg.r,Q=yg.g,i=yg.b,D=Math.max(g,Q,i),t=Math.min(g,Q,i);let a,n;const w=(t+D)/2;if(t===D)a=0,n=0;else{const c=D-t;switch(n=w<=.5?c/(D+t):c/(2-D-t),D){case g:a=(Q-i)/c+(Q<i?6:0);break;case Q:a=(i-g)/c+2;break;case i:a=(g-Q)/c+4;break}a/=6}return A.h=a,A.s=n,A.l=w,A}getRGB(A,I=_I.workingColorSpace){return _I.fromWorkingColorSpace(yg.copy(this),I),A.r=yg.r,A.g=yg.g,A.b=yg.b,A}getStyle(A=og){_I.fromWorkingColorSpace(yg.copy(this),A);const I=yg.r,g=yg.g,Q=yg.b;return A!==og?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${Q.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(Q*255)})`}offsetHSL(A,I,g){return this.getHSL(RC),this.setHSL(RC.h+A,RC.s+I,RC.l+g)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(RC),A.getHSL(FQ);const g=tE(RC.h,FQ.h,I),Q=tE(RC.s,FQ.s,I),i=tE(RC.l,FQ.l,I);return this.setHSL(g,Q,i),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,Q=this.b,i=A.elements;return this.r=i[0]*I+i[3]*g+i[6]*Q,this.g=i[1]*I+i[4]*g+i[7]*Q,this.b=i[2]*I+i[5]*g+i[8]*Q,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yg=new vI;vI.NAMES=at;let ia=0;class vB extends MB{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ia++}),this.uuid=ZB(),this.name="",this.type="Material",this.blending=rB,this.side=lC,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uE,this.blendDst=pE,this.blendEquation=bC,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vI(0,0,0),this.blendAlpha=0,this.depthFunc=HQ,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$i,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=AB,this.stencilZFail=AB,this.stencilZPass=AB,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}const Q=this[I];if(Q===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}Q&&Q.isColor?Q.set(g):Q&&Q.isVector3&&g&&g.isVector3?Q.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(g.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(g.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(g.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==rB&&(g.blending=this.blending),this.side!==lC&&(g.side=this.side),this.vertexColors===!0&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=!0),this.blendSrc!==uE&&(g.blendSrc=this.blendSrc),this.blendDst!==pE&&(g.blendDst=this.blendDst),this.blendEquation!==bC&&(g.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(g.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(g.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(g.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(g.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(g.blendAlpha=this.blendAlpha),this.depthFunc!==HQ&&(g.depthFunc=this.depthFunc),this.depthTest===!1&&(g.depthTest=this.depthTest),this.depthWrite===!1&&(g.depthWrite=this.depthWrite),this.colorWrite===!1&&(g.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(g.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$i&&(g.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(g.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(g.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==AB&&(g.stencilFail=this.stencilFail),this.stencilZFail!==AB&&(g.stencilZFail=this.stencilZFail),this.stencilZPass!==AB&&(g.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(g.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaHash===!0&&(g.alphaHash=!0),this.alphaToCoverage===!0&&(g.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=!0),this.forceSinglePass===!0&&(g.forceSinglePass=!0),this.wireframe===!0&&(g.wireframe=!0),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=!0),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function Q(i){const D=[];for(const t in i){const a=i[t];delete a.metadata,D.push(a)}return D}if(I){const i=Q(A.textures),D=Q(A.images);i.length>0&&(g.textures=i),D.length>0&&(g.images=D)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const Q=I.length;g=new Array(Q);for(let i=0;i!==Q;++i)g[i]=I[i].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}class XC extends vB{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vI(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const Dg=new CA,RQ=new jI;class Pg{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=Ao,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yC,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(A){return this.usage=A,this}addUpdateRange(A,I){this.updateRanges.push({start:A,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let Q=0,i=this.itemSize;Q<i;Q++)this.array[A+Q]=I.array[g+Q];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)RQ.fromBufferAttribute(this,I),RQ.applyMatrix3(A),this.setXY(I,RQ.x,RQ.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)Dg.fromBufferAttribute(this,I),Dg.applyMatrix3(A),this.setXYZ(I,Dg.x,Dg.y,Dg.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)Dg.fromBufferAttribute(this,I),Dg.applyMatrix4(A),this.setXYZ(I,Dg.x,Dg.y,Dg.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)Dg.fromBufferAttribute(this,I),Dg.applyNormalMatrix(A),this.setXYZ(I,Dg.x,Dg.y,Dg.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)Dg.fromBufferAttribute(this,I),Dg.transformDirection(A),this.setXYZ(I,Dg.x,Dg.y,Dg.z);return this}set(A,I=0){return this.array.set(A,I),this}getComponent(A,I){let g=this.array[A*this.itemSize+I];return this.normalized&&(g=HB(g,this.array)),g}setComponent(A,I,g){return this.normalized&&(g=Kg(g,this.array)),this.array[A*this.itemSize+I]=g,this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=HB(I,this.array)),I}setX(A,I){return this.normalized&&(I=Kg(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=HB(I,this.array)),I}setY(A,I){return this.normalized&&(I=Kg(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=HB(I,this.array)),I}setZ(A,I){return this.normalized&&(I=Kg(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=HB(I,this.array)),I}setW(A,I){return this.normalized&&(I=Kg(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=Kg(I,this.array),g=Kg(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,Q){return A*=this.itemSize,this.normalized&&(I=Kg(I,this.array),g=Kg(g,this.array),Q=Kg(Q,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=Q,this}setXYZW(A,I,g,Q,i){return A*=this.itemSize,this.normalized&&(I=Kg(I,this.array),g=Kg(g,this.array),Q=Kg(Q,this.array),i=Kg(i,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=Q,this.array[A+3]=i,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==Ao&&(A.usage=this.usage),A}}class et extends Pg{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class nt extends Pg{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class ZC extends Pg{constructor(A,I,g){super(new Float32Array(A),I,g)}}let oa=0;const mg=new ag,ME=new ug,tB=new CA,fg=new OB,mB=new OB,Gg=new CA;class kC extends MB{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oa++}),this.uuid=ZB(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(it(A)?nt:et)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const i=new LI().getNormalMatrix(A);g.applyNormalMatrix(i),g.needsUpdate=!0}const Q=this.attributes.tangent;return Q!==void 0&&(Q.transformDirection(A),Q.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return mg.makeRotationFromQuaternion(A),this.applyMatrix4(mg),this}rotateX(A){return mg.makeRotationX(A),this.applyMatrix4(mg),this}rotateY(A){return mg.makeRotationY(A),this.applyMatrix4(mg),this}rotateZ(A){return mg.makeRotationZ(A),this.applyMatrix4(mg),this}translate(A,I,g){return mg.makeTranslation(A,I,g),this.applyMatrix4(mg),this}scale(A,I,g){return mg.makeScale(A,I,g),this.applyMatrix4(mg),this}lookAt(A){return ME.lookAt(A),ME.updateMatrix(),this.applyMatrix4(ME.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tB).negate(),this.translate(tB.x,tB.y,tB.z),this}setFromPoints(A){const I=[];for(let g=0,Q=A.length;g<Q;g++){const i=A[g];I.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new ZC(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new OB);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new CA(-1/0,-1/0,-1/0),new CA(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,Q=I.length;g<Q;g++){const i=I[g];fg.setFromBufferAttribute(i),this.morphTargetsRelative?(Gg.addVectors(this.boundingBox.min,fg.min),this.boundingBox.expandByPoint(Gg),Gg.addVectors(this.boundingBox.max,fg.max),this.boundingBox.expandByPoint(Gg)):(this.boundingBox.expandByPoint(fg.min),this.boundingBox.expandByPoint(fg.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new CA,1/0);return}if(A){const g=this.boundingSphere.center;if(fg.setFromBufferAttribute(A),I)for(let i=0,D=I.length;i<D;i++){const t=I[i];mB.setFromBufferAttribute(t),this.morphTargetsRelative?(Gg.addVectors(fg.min,mB.min),fg.expandByPoint(Gg),Gg.addVectors(fg.max,mB.max),fg.expandByPoint(Gg)):(fg.expandByPoint(mB.min),fg.expandByPoint(mB.max))}fg.getCenter(g);let Q=0;for(let i=0,D=A.count;i<D;i++)Gg.fromBufferAttribute(A,i),Q=Math.max(Q,g.distanceToSquared(Gg));if(I)for(let i=0,D=I.length;i<D;i++){const t=I[i],a=this.morphTargetsRelative;for(let n=0,w=t.count;n<w;n++)Gg.fromBufferAttribute(t,n),a&&(tB.fromBufferAttribute(A,n),Gg.add(tB)),Q=Math.max(Q,g.distanceToSquared(Gg))}this.boundingSphere.radius=Math.sqrt(Q),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=A.array,Q=I.position.array,i=I.normal.array,D=I.uv.array,t=Q.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pg(new Float32Array(4*t),4));const a=this.getAttribute("tangent").array,n=[],w=[];for(let m=0;m<t;m++)n[m]=new CA,w[m]=new CA;const c=new CA,R=new CA,M=new CA,k=new jI,S=new jI,r=new jI,h=new CA,H=new CA;function J(m,eA,hA){c.fromArray(Q,m*3),R.fromArray(Q,eA*3),M.fromArray(Q,hA*3),k.fromArray(D,m*2),S.fromArray(D,eA*2),r.fromArray(D,hA*2),R.sub(c),M.sub(c),S.sub(k),r.sub(k);const wA=1/(S.x*r.y-r.x*S.y);isFinite(wA)&&(h.copy(R).multiplyScalar(r.y).addScaledVector(M,-S.y).multiplyScalar(wA),H.copy(M).multiplyScalar(S.x).addScaledVector(R,-r.x).multiplyScalar(wA),n[m].add(h),n[eA].add(h),n[hA].add(h),w[m].add(H),w[eA].add(H),w[hA].add(H))}let u=this.groups;u.length===0&&(u=[{start:0,count:g.length}]);for(let m=0,eA=u.length;m<eA;++m){const hA=u[m],wA=hA.start,Z=hA.count;for(let EA=wA,GA=wA+Z;EA<GA;EA+=3)J(g[EA+0],g[EA+1],g[EA+2])}const x=new CA,T=new CA,V=new CA,QA=new CA;function K(m){V.fromArray(i,m*3),QA.copy(V);const eA=n[m];x.copy(eA),x.sub(V.multiplyScalar(V.dot(eA))).normalize(),T.crossVectors(QA,eA);const wA=T.dot(w[m])<0?-1:1;a[m*4]=x.x,a[m*4+1]=x.y,a[m*4+2]=x.z,a[m*4+3]=wA}for(let m=0,eA=u.length;m<eA;++m){const hA=u[m],wA=hA.start,Z=hA.count;for(let EA=wA,GA=wA+Z;EA<GA;EA+=3)K(g[EA+0]),K(g[EA+1]),K(g[EA+2])}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new Pg(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let R=0,M=g.count;R<M;R++)g.setXYZ(R,0,0,0);const Q=new CA,i=new CA,D=new CA,t=new CA,a=new CA,n=new CA,w=new CA,c=new CA;if(A)for(let R=0,M=A.count;R<M;R+=3){const k=A.getX(R+0),S=A.getX(R+1),r=A.getX(R+2);Q.fromBufferAttribute(I,k),i.fromBufferAttribute(I,S),D.fromBufferAttribute(I,r),w.subVectors(D,i),c.subVectors(Q,i),w.cross(c),t.fromBufferAttribute(g,k),a.fromBufferAttribute(g,S),n.fromBufferAttribute(g,r),t.add(w),a.add(w),n.add(w),g.setXYZ(k,t.x,t.y,t.z),g.setXYZ(S,a.x,a.y,a.z),g.setXYZ(r,n.x,n.y,n.z)}else for(let R=0,M=I.count;R<M;R+=3)Q.fromBufferAttribute(I,R+0),i.fromBufferAttribute(I,R+1),D.fromBufferAttribute(I,R+2),w.subVectors(D,i),c.subVectors(Q,i),w.cross(c),g.setXYZ(R+0,w.x,w.y,w.z),g.setXYZ(R+1,w.x,w.y,w.z),g.setXYZ(R+2,w.x,w.y,w.z);this.normalizeNormals(),g.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)Gg.fromBufferAttribute(A,I),Gg.normalize(),A.setXYZ(I,Gg.x,Gg.y,Gg.z)}toNonIndexed(){function A(t,a){const n=t.array,w=t.itemSize,c=t.normalized,R=new n.constructor(a.length*w);let M=0,k=0;for(let S=0,r=a.length;S<r;S++){t.isInterleavedBufferAttribute?M=a[S]*t.data.stride+t.offset:M=a[S]*w;for(let h=0;h<w;h++)R[k++]=n[M++]}return new Pg(R,w,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new kC,g=this.index.array,Q=this.attributes;for(const t in Q){const a=Q[t],n=A(a,g);I.setAttribute(t,n)}const i=this.morphAttributes;for(const t in i){const a=[],n=i[t];for(let w=0,c=n.length;w<c;w++){const R=n[w],M=A(R,g);a.push(M)}I.morphAttributes[t]=a}I.morphTargetsRelative=this.morphTargetsRelative;const D=this.groups;for(let t=0,a=D.length;t<a;t++){const n=D[t];I.addGroup(n.start,n.count,n.materialIndex)}return I}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const n in a)a[n]!==void 0&&(A[n]=a[n]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const a in g){const n=g[a];A.data.attributes[a]=n.toJSON(A.data)}const Q={};let i=!1;for(const a in this.morphAttributes){const n=this.morphAttributes[a],w=[];for(let c=0,R=n.length;c<R;c++){const M=n[c];w.push(M.toJSON(A.data))}w.length>0&&(Q[a]=w,i=!0)}i&&(A.data.morphAttributes=Q,A.data.morphTargetsRelative=this.morphTargetsRelative);const D=this.groups;D.length>0&&(A.data.groups=JSON.parse(JSON.stringify(D)));const t=this.boundingSphere;return t!==null&&(A.data.boundingSphere={center:t.center.toArray(),radius:t.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const Q=A.attributes;for(const n in Q){const w=Q[n];this.setAttribute(n,w.clone(I))}const i=A.morphAttributes;for(const n in i){const w=[],c=i[n];for(let R=0,M=c.length;R<M;R++)w.push(c[R].clone(I));this.morphAttributes[n]=w}this.morphTargetsRelative=A.morphTargetsRelative;const D=A.groups;for(let n=0,w=D.length;n<w;n++){const c=D[n];this.addGroup(c.start,c.count,c.materialIndex)}const t=A.boundingBox;t!==null&&(this.boundingBox=t.clone());const a=A.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const no=new ag,pC=new $s,NQ=new Ai,ho=new CA,DB=new CA,sB=new CA,aB=new CA,SE=new CA,yQ=new CA,MQ=new jI,SQ=new jI,UQ=new jI,wo=new CA,Go=new CA,ro=new CA,KQ=new CA,lQ=new CA;class Hg extends ug{constructor(A=new kC,I=new XC){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const Q=I[g[0]];if(Q!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,D=Q.length;i<D;i++){const t=Q[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=i}}}}getVertexPosition(A,I){const g=this.geometry,Q=g.attributes.position,i=g.morphAttributes.position,D=g.morphTargetsRelative;I.fromBufferAttribute(Q,A);const t=this.morphTargetInfluences;if(i&&t){yQ.set(0,0,0);for(let a=0,n=i.length;a<n;a++){const w=t[a],c=i[a];w!==0&&(SE.fromBufferAttribute(c,A),D?yQ.addScaledVector(SE,w):yQ.addScaledVector(SE.sub(I),w))}I.add(yQ)}return I}raycast(A,I){const g=this.geometry,Q=this.material,i=this.matrixWorld;Q!==void 0&&(g.boundingSphere===null&&g.computeBoundingSphere(),NQ.copy(g.boundingSphere),NQ.applyMatrix4(i),pC.copy(A.ray).recast(A.near),!(NQ.containsPoint(pC.origin)===!1&&(pC.intersectSphere(NQ,ho)===null||pC.origin.distanceToSquared(ho)>(A.far-A.near)**2))&&(no.copy(i).invert(),pC.copy(A.ray).applyMatrix4(no),!(g.boundingBox!==null&&pC.intersectsBox(g.boundingBox)===!1)&&this._computeIntersections(A,I,pC)))}_computeIntersections(A,I,g){let Q;const i=this.geometry,D=this.material,t=i.index,a=i.attributes.position,n=i.attributes.uv,w=i.attributes.uv1,c=i.attributes.normal,R=i.groups,M=i.drawRange;if(t!==null)if(Array.isArray(D))for(let k=0,S=R.length;k<S;k++){const r=R[k],h=D[r.materialIndex],H=Math.max(r.start,M.start),J=Math.min(t.count,Math.min(r.start+r.count,M.start+M.count));for(let u=H,x=J;u<x;u+=3){const T=t.getX(u),V=t.getX(u+1),QA=t.getX(u+2);Q=kQ(this,h,A,g,n,w,c,T,V,QA),Q&&(Q.faceIndex=Math.floor(u/3),Q.face.materialIndex=r.materialIndex,I.push(Q))}}else{const k=Math.max(0,M.start),S=Math.min(t.count,M.start+M.count);for(let r=k,h=S;r<h;r+=3){const H=t.getX(r),J=t.getX(r+1),u=t.getX(r+2);Q=kQ(this,D,A,g,n,w,c,H,J,u),Q&&(Q.faceIndex=Math.floor(r/3),I.push(Q))}}else if(a!==void 0)if(Array.isArray(D))for(let k=0,S=R.length;k<S;k++){const r=R[k],h=D[r.materialIndex],H=Math.max(r.start,M.start),J=Math.min(a.count,Math.min(r.start+r.count,M.start+M.count));for(let u=H,x=J;u<x;u+=3){const T=u,V=u+1,QA=u+2;Q=kQ(this,h,A,g,n,w,c,T,V,QA),Q&&(Q.faceIndex=Math.floor(u/3),Q.face.materialIndex=r.materialIndex,I.push(Q))}}else{const k=Math.max(0,M.start),S=Math.min(a.count,M.start+M.count);for(let r=k,h=S;r<h;r+=3){const H=r,J=r+1,u=r+2;Q=kQ(this,D,A,g,n,w,c,H,J,u),Q&&(Q.faceIndex=Math.floor(r/3),I.push(Q))}}}}function ta(C,A,I,g,Q,i,D,t){let a;if(A.side===kg?a=g.intersectTriangle(D,i,Q,!0,t):a=g.intersectTriangle(Q,i,D,A.side===lC,t),a===null)return null;lQ.copy(t),lQ.applyMatrix4(C.matrixWorld);const n=I.ray.origin.distanceTo(lQ);return n<I.near||n>I.far?null:{distance:n,point:lQ.clone(),object:C}}function kQ(C,A,I,g,Q,i,D,t,a,n){C.getVertexPosition(t,DB),C.getVertexPosition(a,sB),C.getVertexPosition(n,aB);const w=ta(C,A,I,g,DB,sB,aB,KQ);if(w){Q&&(MQ.fromBufferAttribute(Q,t),SQ.fromBufferAttribute(Q,a),UQ.fromBufferAttribute(Q,n),w.uv=Og.getInterpolation(KQ,DB,sB,aB,MQ,SQ,UQ,new jI)),i&&(MQ.fromBufferAttribute(i,t),SQ.fromBufferAttribute(i,a),UQ.fromBufferAttribute(i,n),w.uv1=Og.getInterpolation(KQ,DB,sB,aB,MQ,SQ,UQ,new jI),w.uv2=w.uv1),D&&(wo.fromBufferAttribute(D,t),Go.fromBufferAttribute(D,a),ro.fromBufferAttribute(D,n),w.normal=Og.getInterpolation(KQ,DB,sB,aB,wo,Go,ro,new CA),w.normal.dot(g.direction)>0&&w.normal.multiplyScalar(-1));const c={a:t,b:a,c:n,normal:new CA,materialIndex:0};Og.getNormal(DB,sB,aB,c.normal),w.face=c}return w}class XB extends kC{constructor(A=1,I=1,g=1,Q=1,i=1,D=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:Q,heightSegments:i,depthSegments:D};const t=this;Q=Math.floor(Q),i=Math.floor(i),D=Math.floor(D);const a=[],n=[],w=[],c=[];let R=0,M=0;k("z","y","x",-1,-1,g,I,A,D,i,0),k("z","y","x",1,-1,g,I,-A,D,i,1),k("x","z","y",1,1,A,g,I,Q,D,2),k("x","z","y",1,-1,A,g,-I,Q,D,3),k("x","y","z",1,-1,A,I,g,Q,i,4),k("x","y","z",-1,-1,A,I,-g,Q,i,5),this.setIndex(a),this.setAttribute("position",new ZC(n,3)),this.setAttribute("normal",new ZC(w,3)),this.setAttribute("uv",new ZC(c,2));function k(S,r,h,H,J,u,x,T,V,QA,K){const m=u/V,eA=x/QA,hA=u/2,wA=x/2,Z=T/2,EA=V+1,GA=QA+1;let DA=0,dA=0;const RA=new CA;for(let rA=0;rA<GA;rA++){const JA=rA*eA-wA;for(let LA=0;LA<EA;LA++){const iA=LA*m-hA;RA[S]=iA*H,RA[r]=JA*J,RA[h]=Z,n.push(RA.x,RA.y,RA.z),RA[S]=0,RA[r]=0,RA[h]=T>0?1:-1,w.push(RA.x,RA.y,RA.z),c.push(LA/V),c.push(1-rA/QA),DA+=1}}for(let rA=0;rA<QA;rA++)for(let JA=0;JA<V;JA++){const LA=R+JA+EA*rA,iA=R+JA+EA*(rA+1),cA=R+(JA+1)+EA*(rA+1),mA=R+(JA+1)+EA*rA;a.push(LA,iA,mA),a.push(iA,cA,mA),dA+=6}t.addGroup(M,dA,K),M+=dA,R+=DA}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new XB(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function yB(C){const A={};for(const I in C){A[I]={};for(const g in C[I]){const Q=C[I][g];Q&&(Q.isColor||Q.isMatrix3||Q.isMatrix4||Q.isVector2||Q.isVector3||Q.isVector4||Q.isTexture||Q.isQuaternion)?Q.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[I][g]=null):A[I][g]=Q.clone():Array.isArray(Q)?A[I][g]=Q.slice():A[I][g]=Q}}return A}function Mg(C){const A={};for(let I=0;I<C.length;I++){const g=yB(C[I]);for(const Q in g)A[Q]=g[Q]}return A}function Da(C){const A=[];for(let I=0;I<C.length;I++)A.push(C[I].clone());return A}function ht(C){return C.getRenderTarget()===null?C.outputColorSpace:_I.workingColorSpace}const sa={clone:yB,merge:Mg};var aa=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ea=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vC extends vB{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aa,this.fragmentShader=ea,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=yB(A.uniforms),this.uniformsGroups=Da(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const Q in this.uniforms){const D=this.uniforms[Q].value;D&&D.isTexture?I.uniforms[Q]={type:"t",value:D.toJSON(A).uuid}:D&&D.isColor?I.uniforms[Q]={type:"c",value:D.getHex()}:D&&D.isVector2?I.uniforms[Q]={type:"v2",value:D.toArray()}:D&&D.isVector3?I.uniforms[Q]={type:"v3",value:D.toArray()}:D&&D.isVector4?I.uniforms[Q]={type:"v4",value:D.toArray()}:D&&D.isMatrix3?I.uniforms[Q]={type:"m3",value:D.toArray()}:D&&D.isMatrix4?I.uniforms[Q]={type:"m4",value:D.toArray()}:I.uniforms[Q]={value:D}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;const g={};for(const Q in this.extensions)this.extensions[Q]===!0&&(g[Q]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class wt extends ug{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ag,this.projectionMatrix=new ag,this.projectionMatrixInverse=new ag,this.coordinateSystem=DC}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class bg extends wt{constructor(A=50,I=1,g=.1,Q=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=Q,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=VE*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(oE*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return VE*2*Math.atan(Math.tan(oE*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,I,g,Q,i,D){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=Q,this.view.width=i,this.view.height=D,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(oE*.5*this.fov)/this.zoom,g=2*I,Q=this.aspect*g,i=-.5*Q;const D=this.view;if(this.view!==null&&this.view.enabled){const a=D.fullWidth,n=D.fullHeight;i+=D.offsetX*Q/a,I-=D.offsetY*g/n,Q*=D.width/a,g*=D.height/n}const t=this.filmOffset;t!==0&&(i+=A*t/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+Q,I,I-g,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const eB=-90,nB=1;class na extends ug{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g,this.coordinateSystem=null,this.activeMipmapLevel=0;const Q=new bg(eB,nB,A,I);Q.layers=this.layers,this.add(Q);const i=new bg(eB,nB,A,I);i.layers=this.layers,this.add(i);const D=new bg(eB,nB,A,I);D.layers=this.layers,this.add(D);const t=new bg(eB,nB,A,I);t.layers=this.layers,this.add(t);const a=new bg(eB,nB,A,I);a.layers=this.layers,this.add(a);const n=new bg(eB,nB,A,I);n.layers=this.layers,this.add(n)}updateCoordinateSystem(){const A=this.coordinateSystem,I=this.children.concat(),[g,Q,i,D,t,a]=I;for(const n of I)this.remove(n);if(A===DC)g.up.set(0,1,0),g.lookAt(1,0,0),Q.up.set(0,1,0),Q.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),D.up.set(0,0,1),D.lookAt(0,-1,0),t.up.set(0,1,0),t.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(A===mQ)g.up.set(0,-1,0),g.lookAt(-1,0,0),Q.up.set(0,-1,0),Q.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),D.up.set(0,0,-1),D.lookAt(0,-1,0),t.up.set(0,-1,0),t.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const n of I)this.add(n),n.updateMatrixWorld()}update(A,I){this.parent===null&&this.updateMatrixWorld();const{renderTarget:g,activeMipmapLevel:Q}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[i,D,t,a,n,w]=this.children,c=A.getRenderTarget(),R=A.getActiveCubeFace(),M=A.getActiveMipmapLevel(),k=A.xr.enabled;A.xr.enabled=!1;const S=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0,Q),A.render(I,i),A.setRenderTarget(g,1,Q),A.render(I,D),A.setRenderTarget(g,2,Q),A.render(I,t),A.setRenderTarget(g,3,Q),A.render(I,a),A.setRenderTarget(g,4,Q),A.render(I,n),g.texture.generateMipmaps=S,A.setRenderTarget(g,5,Q),A.render(I,w),A.setRenderTarget(c,R,M),A.xr.enabled=k,g.texture.needsPMREMUpdate=!0}}class Gt extends dg{constructor(A,I,g,Q,i,D,t,a,n,w){A=A!==void 0?A:[],I=I!==void 0?I:FB,super(A,I,g,Q,i,D,t,a,n,w),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class ha extends OC{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},Q=[g,g,g,g,g,g];I.encoding!==void 0&&(bB("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),I.colorSpace=I.encoding===KC?og:Tg),this.texture=new Gt(Q,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:xg}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},Q=new XB(5,5,5),i=new vC({name:"CubemapFromEquirect",uniforms:yB(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:kg,blending:MC});i.uniforms.tEquirect.value=I;const D=new Hg(Q,i),t=I.minFilter;return I.minFilter===TB&&(I.minFilter=xg),new na(1,10,this).update(A,D),I.minFilter=t,D.geometry.dispose(),D.material.dispose(),this}clear(A,I,g,Q){const i=A.getRenderTarget();for(let D=0;D<6;D++)A.setRenderTarget(this,D),A.clear(I,g,Q);A.setRenderTarget(i)}}const UE=new CA,wa=new CA,Ga=new LI;class mC{constructor(A=new CA(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,Q){return this.normal.set(A,I,g),this.constant=Q,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const Q=UE.subVectors(g,I).cross(wa.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(Q,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(UE),Q=this.normal.dot(g);if(Q===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const i=-(A.start.dot(this.normal)+this.constant)/Q;return i<0||i>1?null:I.copy(A.start).addScaledVector(g,i)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||Ga.getNormalMatrix(A),Q=this.coplanarPoint(UE).applyMatrix4(A),i=this.normal.applyMatrix3(g).normalize();return this.constant=-Q.dot(i),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qC=new Ai,dQ=new CA;class rt{constructor(A=new mC,I=new mC,g=new mC,Q=new mC,i=new mC,D=new mC){this.planes=[A,I,g,Q,i,D]}set(A,I,g,Q,i,D){const t=this.planes;return t[0].copy(A),t[1].copy(I),t[2].copy(g),t[3].copy(Q),t[4].copy(i),t[5].copy(D),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A,I=DC){const g=this.planes,Q=A.elements,i=Q[0],D=Q[1],t=Q[2],a=Q[3],n=Q[4],w=Q[5],c=Q[6],R=Q[7],M=Q[8],k=Q[9],S=Q[10],r=Q[11],h=Q[12],H=Q[13],J=Q[14],u=Q[15];if(g[0].setComponents(a-i,R-n,r-M,u-h).normalize(),g[1].setComponents(a+i,R+n,r+M,u+h).normalize(),g[2].setComponents(a+D,R+w,r+k,u+H).normalize(),g[3].setComponents(a-D,R-w,r-k,u-H).normalize(),g[4].setComponents(a-t,R-c,r-S,u-J).normalize(),I===DC)g[5].setComponents(a+t,R+c,r+S,u+J).normalize();else if(I===mQ)g[5].setComponents(t,c,S,J).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+I);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),qC.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const I=A.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),qC.copy(I.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(qC)}intersectsSprite(A){return qC.center.set(0,0,0),qC.radius=.7071067811865476,qC.applyMatrix4(A.matrixWorld),this.intersectsSphere(qC)}intersectsSphere(A){const I=this.planes,g=A.center,Q=-A.radius;for(let i=0;i<6;i++)if(I[i].distanceToPoint(g)<Q)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const Q=I[g];if(dQ.x=Q.normal.x>0?A.max.x:A.min.x,dQ.y=Q.normal.y>0?A.max.y:A.min.y,dQ.z=Q.normal.z>0?A.max.z:A.min.z,Q.distanceToPoint(dQ)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ct(){let C=null,A=!1,I=null,g=null;function Q(i,D){I(i,D),g=C.requestAnimationFrame(Q)}return{start:function(){A!==!0&&I!==null&&(g=C.requestAnimationFrame(Q),A=!0)},stop:function(){C.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(i){I=i},setContext:function(i){C=i}}}function ra(C,A){const I=A.isWebGL2,g=new WeakMap;function Q(n,w){const c=n.array,R=n.usage,M=c.byteLength,k=C.createBuffer();C.bindBuffer(w,k),C.bufferData(w,c,R),n.onUploadCallback();let S;if(c instanceof Float32Array)S=C.FLOAT;else if(c instanceof Uint16Array)if(n.isFloat16BufferAttribute)if(I)S=C.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=C.UNSIGNED_SHORT;else if(c instanceof Int16Array)S=C.SHORT;else if(c instanceof Uint32Array)S=C.UNSIGNED_INT;else if(c instanceof Int32Array)S=C.INT;else if(c instanceof Int8Array)S=C.BYTE;else if(c instanceof Uint8Array)S=C.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)S=C.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:k,type:S,bytesPerElement:c.BYTES_PER_ELEMENT,version:n.version,size:M}}function i(n,w,c){const R=w.array,M=w._updateRange,k=w.updateRanges;if(C.bindBuffer(c,n),M.count===-1&&k.length===0&&C.bufferSubData(c,0,R),k.length!==0){for(let S=0,r=k.length;S<r;S++){const h=k[S];I?C.bufferSubData(c,h.start*R.BYTES_PER_ELEMENT,R,h.start,h.count):C.bufferSubData(c,h.start*R.BYTES_PER_ELEMENT,R.subarray(h.start,h.start+h.count))}w.clearUpdateRanges()}M.count!==-1&&(I?C.bufferSubData(c,M.offset*R.BYTES_PER_ELEMENT,R,M.offset,M.count):C.bufferSubData(c,M.offset*R.BYTES_PER_ELEMENT,R.subarray(M.offset,M.offset+M.count)),M.count=-1),w.onUploadCallback()}function D(n){return n.isInterleavedBufferAttribute&&(n=n.data),g.get(n)}function t(n){n.isInterleavedBufferAttribute&&(n=n.data);const w=g.get(n);w&&(C.deleteBuffer(w.buffer),g.delete(n))}function a(n,w){if(n.isGLBufferAttribute){const R=g.get(n);(!R||R.version<n.version)&&g.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version});return}n.isInterleavedBufferAttribute&&(n=n.data);const c=g.get(n);if(c===void 0)g.set(n,Q(n,w));else if(c.version<n.version){if(c.size!==n.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,n,w),c.version=n.version}}return{get:D,remove:t,update:a}}class UB extends kC{constructor(A=1,I=1,g=1,Q=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:Q};const i=A/2,D=I/2,t=Math.floor(g),a=Math.floor(Q),n=t+1,w=a+1,c=A/t,R=I/a,M=[],k=[],S=[],r=[];for(let h=0;h<w;h++){const H=h*R-D;for(let J=0;J<n;J++){const u=J*c-i;k.push(u,-H,0),S.push(0,0,1),r.push(J/t),r.push(1-h/a)}}for(let h=0;h<a;h++)for(let H=0;H<t;H++){const J=H+n*h,u=H+n*(h+1),x=H+1+n*(h+1),T=H+1+n*h;M.push(J,u,T),M.push(u,x,T)}this.setIndex(M),this.setAttribute("position",new ZC(k,3)),this.setAttribute("normal",new ZC(S,3)),this.setAttribute("uv",new ZC(r,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new UB(A.width,A.height,A.widthSegments,A.heightSegments)}}var ca=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fa=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ra=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Na=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ya=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ma=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sa=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ua=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ka=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,la=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ka=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,da=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ja=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ya=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,La=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fa=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ha=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ua=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pa=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qa=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ma=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xa=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ba=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ta=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Va=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wa=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Za=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Oa=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,va=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xa=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pa="gl_FragColor = linearToOutputTexel( gl_FragColor );",ja=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,za=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_a=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$a=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ae=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ie=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ge=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ce=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Be=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qe=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ee=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ie=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,oe=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,te=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,De=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,se=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ae=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ee=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ne=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,he=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,we=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ge=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,re=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ce=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fe=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Re=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ne=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ye=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Me=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Se=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ue=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ke=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,le=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ke=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,de=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Je=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ye=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Le=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,fe=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,He=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ue=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pe=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qe=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,me=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xe=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,be=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Te=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ve=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,We=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ze=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Oe=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ve=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xe=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pe=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,je=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ze=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_e=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$e=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,An=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,In=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gn=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cn=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bn=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qn=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,En=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,on=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tn=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dn=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sn=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,an=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,en=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nn=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hn=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wn=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gn=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rn=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cn=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fn=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rn=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nn=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yn=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mn=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sn=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Un=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Kn=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ln=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kn=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dn=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jn=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yn=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ln=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fn=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hn=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,un=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pn=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qn=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mn=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xn=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bn=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tn=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vn=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wn=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zn=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,On=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vn=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xn=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pn=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jn=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zn=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_n=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lI={alphahash_fragment:ca,alphahash_pars_fragment:Fa,alphamap_fragment:Ra,alphamap_pars_fragment:Na,alphatest_fragment:ya,alphatest_pars_fragment:Ma,aomap_fragment:Sa,aomap_pars_fragment:Ua,batching_pars_vertex:Ka,batching_vertex:la,begin_vertex:ka,beginnormal_vertex:da,bsdfs:Ja,iridescence_fragment:Ya,bumpmap_pars_fragment:La,clipping_planes_fragment:fa,clipping_planes_pars_fragment:Ha,clipping_planes_pars_vertex:ua,clipping_planes_vertex:pa,color_fragment:qa,color_pars_fragment:ma,color_pars_vertex:xa,color_vertex:ba,common:Ta,cube_uv_reflection_fragment:Va,defaultnormal_vertex:Wa,displacementmap_pars_vertex:Za,displacementmap_vertex:Oa,emissivemap_fragment:va,emissivemap_pars_fragment:Xa,colorspace_fragment:Pa,colorspace_pars_fragment:ja,envmap_fragment:za,envmap_common_pars_fragment:_a,envmap_pars_fragment:$a,envmap_pars_vertex:Ae,envmap_physical_pars_fragment:ae,envmap_vertex:Ie,fog_vertex:ge,fog_pars_vertex:Ce,fog_fragment:Be,fog_pars_fragment:Qe,gradientmap_pars_fragment:Ee,lightmap_fragment:ie,lightmap_pars_fragment:oe,lights_lambert_fragment:te,lights_lambert_pars_fragment:De,lights_pars_begin:se,lights_toon_fragment:ee,lights_toon_pars_fragment:ne,lights_phong_fragment:he,lights_phong_pars_fragment:we,lights_physical_fragment:Ge,lights_physical_pars_fragment:re,lights_fragment_begin:ce,lights_fragment_maps:Fe,lights_fragment_end:Re,logdepthbuf_fragment:Ne,logdepthbuf_pars_fragment:ye,logdepthbuf_pars_vertex:Me,logdepthbuf_vertex:Se,map_fragment:Ue,map_pars_fragment:Ke,map_particle_fragment:le,map_particle_pars_fragment:ke,metalnessmap_fragment:de,metalnessmap_pars_fragment:Je,morphcolor_vertex:Ye,morphnormal_vertex:Le,morphtarget_pars_vertex:fe,morphtarget_vertex:He,normal_fragment_begin:ue,normal_fragment_maps:pe,normal_pars_fragment:qe,normal_pars_vertex:me,normal_vertex:xe,normalmap_pars_fragment:be,clearcoat_normal_fragment_begin:Te,clearcoat_normal_fragment_maps:Ve,clearcoat_pars_fragment:We,iridescence_pars_fragment:Ze,opaque_fragment:Oe,packing:ve,premultiplied_alpha_fragment:Xe,project_vertex:Pe,dithering_fragment:je,dithering_pars_fragment:ze,roughnessmap_fragment:_e,roughnessmap_pars_fragment:$e,shadowmap_pars_fragment:An,shadowmap_pars_vertex:In,shadowmap_vertex:gn,shadowmask_pars_fragment:Cn,skinbase_vertex:Bn,skinning_pars_vertex:Qn,skinning_vertex:En,skinnormal_vertex:on,specularmap_fragment:tn,specularmap_pars_fragment:Dn,tonemapping_fragment:sn,tonemapping_pars_fragment:an,transmission_fragment:en,transmission_pars_fragment:nn,uv_pars_fragment:hn,uv_pars_vertex:wn,uv_vertex:Gn,worldpos_vertex:rn,background_vert:cn,background_frag:Fn,backgroundCube_vert:Rn,backgroundCube_frag:Nn,cube_vert:yn,cube_frag:Mn,depth_vert:Sn,depth_frag:Un,distanceRGBA_vert:Kn,distanceRGBA_frag:ln,equirect_vert:kn,equirect_frag:dn,linedashed_vert:Jn,linedashed_frag:Yn,meshbasic_vert:Ln,meshbasic_frag:fn,meshlambert_vert:Hn,meshlambert_frag:un,meshmatcap_vert:pn,meshmatcap_frag:qn,meshnormal_vert:mn,meshnormal_frag:xn,meshphong_vert:bn,meshphong_frag:Tn,meshphysical_vert:Vn,meshphysical_frag:Wn,meshtoon_vert:Zn,meshtoon_frag:On,points_vert:vn,points_frag:Xn,shadow_vert:Pn,shadow_frag:jn,sprite_vert:zn,sprite_frag:_n},uA={common:{diffuse:{value:new vI(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new LI},alphaMap:{value:null},alphaMapTransform:{value:new LI},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new LI}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new LI}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new LI}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new LI},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new LI},normalScale:{value:new jI(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new LI},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new LI}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new LI}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new LI}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vI(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vI(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new LI},alphaTest:{value:0},uvTransform:{value:new LI}},sprite:{diffuse:{value:new vI(16777215)},opacity:{value:1},center:{value:new jI(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new LI},alphaMap:{value:null},alphaMapTransform:{value:new LI},alphaTest:{value:0}}},_g={basic:{uniforms:Mg([uA.common,uA.specularmap,uA.envmap,uA.aomap,uA.lightmap,uA.fog]),vertexShader:lI.meshbasic_vert,fragmentShader:lI.meshbasic_frag},lambert:{uniforms:Mg([uA.common,uA.specularmap,uA.envmap,uA.aomap,uA.lightmap,uA.emissivemap,uA.bumpmap,uA.normalmap,uA.displacementmap,uA.fog,uA.lights,{emissive:{value:new vI(0)}}]),vertexShader:lI.meshlambert_vert,fragmentShader:lI.meshlambert_frag},phong:{uniforms:Mg([uA.common,uA.specularmap,uA.envmap,uA.aomap,uA.lightmap,uA.emissivemap,uA.bumpmap,uA.normalmap,uA.displacementmap,uA.fog,uA.lights,{emissive:{value:new vI(0)},specular:{value:new vI(1118481)},shininess:{value:30}}]),vertexShader:lI.meshphong_vert,fragmentShader:lI.meshphong_frag},standard:{uniforms:Mg([uA.common,uA.envmap,uA.aomap,uA.lightmap,uA.emissivemap,uA.bumpmap,uA.normalmap,uA.displacementmap,uA.roughnessmap,uA.metalnessmap,uA.fog,uA.lights,{emissive:{value:new vI(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lI.meshphysical_vert,fragmentShader:lI.meshphysical_frag},toon:{uniforms:Mg([uA.common,uA.aomap,uA.lightmap,uA.emissivemap,uA.bumpmap,uA.normalmap,uA.displacementmap,uA.gradientmap,uA.fog,uA.lights,{emissive:{value:new vI(0)}}]),vertexShader:lI.meshtoon_vert,fragmentShader:lI.meshtoon_frag},matcap:{uniforms:Mg([uA.common,uA.bumpmap,uA.normalmap,uA.displacementmap,uA.fog,{matcap:{value:null}}]),vertexShader:lI.meshmatcap_vert,fragmentShader:lI.meshmatcap_frag},points:{uniforms:Mg([uA.points,uA.fog]),vertexShader:lI.points_vert,fragmentShader:lI.points_frag},dashed:{uniforms:Mg([uA.common,uA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lI.linedashed_vert,fragmentShader:lI.linedashed_frag},depth:{uniforms:Mg([uA.common,uA.displacementmap]),vertexShader:lI.depth_vert,fragmentShader:lI.depth_frag},normal:{uniforms:Mg([uA.common,uA.bumpmap,uA.normalmap,uA.displacementmap,{opacity:{value:1}}]),vertexShader:lI.meshnormal_vert,fragmentShader:lI.meshnormal_frag},sprite:{uniforms:Mg([uA.sprite,uA.fog]),vertexShader:lI.sprite_vert,fragmentShader:lI.sprite_frag},background:{uniforms:{uvTransform:{value:new LI},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lI.background_vert,fragmentShader:lI.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:lI.backgroundCube_vert,fragmentShader:lI.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lI.cube_vert,fragmentShader:lI.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lI.equirect_vert,fragmentShader:lI.equirect_frag},distanceRGBA:{uniforms:Mg([uA.common,uA.displacementmap,{referencePosition:{value:new CA},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lI.distanceRGBA_vert,fragmentShader:lI.distanceRGBA_frag},shadow:{uniforms:Mg([uA.lights,uA.fog,{color:{value:new vI(0)},opacity:{value:1}}]),vertexShader:lI.shadow_vert,fragmentShader:lI.shadow_frag}};_g.physical={uniforms:Mg([_g.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new LI},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new LI},clearcoatNormalScale:{value:new jI(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new LI},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new LI},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new LI},sheen:{value:0},sheenColor:{value:new vI(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new LI},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new LI},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new LI},transmissionSamplerSize:{value:new jI},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new LI},attenuationDistance:{value:0},attenuationColor:{value:new vI(0)},specularColor:{value:new vI(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new LI},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new LI},anisotropyVector:{value:new jI},anisotropyMap:{value:null},anisotropyMapTransform:{value:new LI}}]),vertexShader:lI.meshphysical_vert,fragmentShader:lI.meshphysical_frag};const JQ={r:0,b:0,g:0};function $n(C,A,I,g,Q,i,D){const t=new vI(0);let a=i===!0?0:1,n,w,c=null,R=0,M=null;function k(r,h){let H=!1,J=h.isScene===!0?h.background:null;J&&J.isTexture&&(J=(h.backgroundBlurriness>0?I:A).get(J)),J===null?S(t,a):J&&J.isColor&&(S(J,1),H=!0);const u=C.xr.getEnvironmentBlendMode();u==="additive"?g.buffers.color.setClear(0,0,0,1,D):u==="alpha-blend"&&g.buffers.color.setClear(0,0,0,0,D),(C.autoClear||H)&&C.clear(C.autoClearColor,C.autoClearDepth,C.autoClearStencil),J&&(J.isCubeTexture||J.mapping===TQ)?(w===void 0&&(w=new Hg(new XB(1,1,1),new vC({name:"BackgroundCubeMaterial",uniforms:yB(_g.backgroundCube.uniforms),vertexShader:_g.backgroundCube.vertexShader,fragmentShader:_g.backgroundCube.fragmentShader,side:kg,depthTest:!1,depthWrite:!1,fog:!1})),w.geometry.deleteAttribute("normal"),w.geometry.deleteAttribute("uv"),w.onBeforeRender=function(x,T,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(w.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Q.update(w)),w.material.uniforms.envMap.value=J,w.material.uniforms.flipEnvMap.value=J.isCubeTexture&&J.isRenderTargetTexture===!1?-1:1,w.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,w.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,w.material.toneMapped=_I.getTransfer(J.colorSpace)!==Ig,(c!==J||R!==J.version||M!==C.toneMapping)&&(w.material.needsUpdate=!0,c=J,R=J.version,M=C.toneMapping),w.layers.enableAll(),r.unshift(w,w.geometry,w.material,0,0,null)):J&&J.isTexture&&(n===void 0&&(n=new Hg(new UB(2,2),new vC({name:"BackgroundMaterial",uniforms:yB(_g.background.uniforms),vertexShader:_g.background.vertexShader,fragmentShader:_g.background.fragmentShader,side:lC,depthTest:!1,depthWrite:!1,fog:!1})),n.geometry.deleteAttribute("normal"),Object.defineProperty(n.material,"map",{get:function(){return this.uniforms.t2D.value}}),Q.update(n)),n.material.uniforms.t2D.value=J,n.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,n.material.toneMapped=_I.getTransfer(J.colorSpace)!==Ig,J.matrixAutoUpdate===!0&&J.updateMatrix(),n.material.uniforms.uvTransform.value.copy(J.matrix),(c!==J||R!==J.version||M!==C.toneMapping)&&(n.material.needsUpdate=!0,c=J,R=J.version,M=C.toneMapping),n.layers.enableAll(),r.unshift(n,n.geometry,n.material,0,0,null))}function S(r,h){r.getRGB(JQ,ht(C)),g.buffers.color.setClear(JQ.r,JQ.g,JQ.b,h,D)}return{getClearColor:function(){return t},setClearColor:function(r,h=1){t.set(r),a=h,S(t,a)},getClearAlpha:function(){return a},setClearAlpha:function(r){a=r,S(t,a)},render:k}}function Ah(C,A,I,g){const Q=C.getParameter(C.MAX_VERTEX_ATTRIBS),i=g.isWebGL2?null:A.get("OES_vertex_array_object"),D=g.isWebGL2||i!==null,t={},a=r(null);let n=a,w=!1;function c(Z,EA,GA,DA,dA){let RA=!1;if(D){const rA=S(DA,GA,EA);n!==rA&&(n=rA,M(n.object)),RA=h(Z,DA,GA,dA),RA&&H(Z,DA,GA,dA)}else{const rA=EA.wireframe===!0;(n.geometry!==DA.id||n.program!==GA.id||n.wireframe!==rA)&&(n.geometry=DA.id,n.program=GA.id,n.wireframe=rA,RA=!0)}dA!==null&&I.update(dA,C.ELEMENT_ARRAY_BUFFER),(RA||w)&&(w=!1,QA(Z,EA,GA,DA),dA!==null&&C.bindBuffer(C.ELEMENT_ARRAY_BUFFER,I.get(dA).buffer))}function R(){return g.isWebGL2?C.createVertexArray():i.createVertexArrayOES()}function M(Z){return g.isWebGL2?C.bindVertexArray(Z):i.bindVertexArrayOES(Z)}function k(Z){return g.isWebGL2?C.deleteVertexArray(Z):i.deleteVertexArrayOES(Z)}function S(Z,EA,GA){const DA=GA.wireframe===!0;let dA=t[Z.id];dA===void 0&&(dA={},t[Z.id]=dA);let RA=dA[EA.id];RA===void 0&&(RA={},dA[EA.id]=RA);let rA=RA[DA];return rA===void 0&&(rA=r(R()),RA[DA]=rA),rA}function r(Z){const EA=[],GA=[],DA=[];for(let dA=0;dA<Q;dA++)EA[dA]=0,GA[dA]=0,DA[dA]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:EA,enabledAttributes:GA,attributeDivisors:DA,object:Z,attributes:{},index:null}}function h(Z,EA,GA,DA){const dA=n.attributes,RA=EA.attributes;let rA=0;const JA=GA.getAttributes();for(const LA in JA)if(JA[LA].location>=0){const cA=dA[LA];let mA=RA[LA];if(mA===void 0&&(LA==="instanceMatrix"&&Z.instanceMatrix&&(mA=Z.instanceMatrix),LA==="instanceColor"&&Z.instanceColor&&(mA=Z.instanceColor)),cA===void 0||cA.attribute!==mA||mA&&cA.data!==mA.data)return!0;rA++}return n.attributesNum!==rA||n.index!==DA}function H(Z,EA,GA,DA){const dA={},RA=EA.attributes;let rA=0;const JA=GA.getAttributes();for(const LA in JA)if(JA[LA].location>=0){let cA=RA[LA];cA===void 0&&(LA==="instanceMatrix"&&Z.instanceMatrix&&(cA=Z.instanceMatrix),LA==="instanceColor"&&Z.instanceColor&&(cA=Z.instanceColor));const mA={};mA.attribute=cA,cA&&cA.data&&(mA.data=cA.data),dA[LA]=mA,rA++}n.attributes=dA,n.attributesNum=rA,n.index=DA}function J(){const Z=n.newAttributes;for(let EA=0,GA=Z.length;EA<GA;EA++)Z[EA]=0}function u(Z){x(Z,0)}function x(Z,EA){const GA=n.newAttributes,DA=n.enabledAttributes,dA=n.attributeDivisors;GA[Z]=1,DA[Z]===0&&(C.enableVertexAttribArray(Z),DA[Z]=1),dA[Z]!==EA&&((g.isWebGL2?C:A.get("ANGLE_instanced_arrays"))[g.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Z,EA),dA[Z]=EA)}function T(){const Z=n.newAttributes,EA=n.enabledAttributes;for(let GA=0,DA=EA.length;GA<DA;GA++)EA[GA]!==Z[GA]&&(C.disableVertexAttribArray(GA),EA[GA]=0)}function V(Z,EA,GA,DA,dA,RA,rA){rA===!0?C.vertexAttribIPointer(Z,EA,GA,dA,RA):C.vertexAttribPointer(Z,EA,GA,DA,dA,RA)}function QA(Z,EA,GA,DA){if(g.isWebGL2===!1&&(Z.isInstancedMesh||DA.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;J();const dA=DA.attributes,RA=GA.getAttributes(),rA=EA.defaultAttributeValues;for(const JA in RA){const LA=RA[JA];if(LA.location>=0){let iA=dA[JA];if(iA===void 0&&(JA==="instanceMatrix"&&Z.instanceMatrix&&(iA=Z.instanceMatrix),JA==="instanceColor"&&Z.instanceColor&&(iA=Z.instanceColor)),iA!==void 0){const cA=iA.normalized,mA=iA.itemSize,PA=I.get(iA);if(PA===void 0)continue;const jA=PA.buffer,DI=PA.type,xA=PA.bytesPerElement,TA=g.isWebGL2===!0&&(DI===C.INT||DI===C.UNSIGNED_INT||iA.gpuType===zo);if(iA.isInterleavedBufferAttribute){const gI=iA.data,z=gI.stride,KA=iA.offset;if(gI.isInstancedInterleavedBuffer){for(let WA=0;WA<LA.locationSize;WA++)x(LA.location+WA,gI.meshPerAttribute);Z.isInstancedMesh!==!0&&DA._maxInstanceCount===void 0&&(DA._maxInstanceCount=gI.meshPerAttribute*gI.count)}else for(let WA=0;WA<LA.locationSize;WA++)u(LA.location+WA);C.bindBuffer(C.ARRAY_BUFFER,jA);for(let WA=0;WA<LA.locationSize;WA++)V(LA.location+WA,mA/LA.locationSize,DI,cA,z*xA,(KA+mA/LA.locationSize*WA)*xA,TA)}else{if(iA.isInstancedBufferAttribute){for(let gI=0;gI<LA.locationSize;gI++)x(LA.location+gI,iA.meshPerAttribute);Z.isInstancedMesh!==!0&&DA._maxInstanceCount===void 0&&(DA._maxInstanceCount=iA.meshPerAttribute*iA.count)}else for(let gI=0;gI<LA.locationSize;gI++)u(LA.location+gI);C.bindBuffer(C.ARRAY_BUFFER,jA);for(let gI=0;gI<LA.locationSize;gI++)V(LA.location+gI,mA/LA.locationSize,DI,cA,mA*xA,mA/LA.locationSize*gI*xA,TA)}}else if(rA!==void 0){const cA=rA[JA];if(cA!==void 0)switch(cA.length){case 2:C.vertexAttrib2fv(LA.location,cA);break;case 3:C.vertexAttrib3fv(LA.location,cA);break;case 4:C.vertexAttrib4fv(LA.location,cA);break;default:C.vertexAttrib1fv(LA.location,cA)}}}}T()}function K(){hA();for(const Z in t){const EA=t[Z];for(const GA in EA){const DA=EA[GA];for(const dA in DA)k(DA[dA].object),delete DA[dA];delete EA[GA]}delete t[Z]}}function m(Z){if(t[Z.id]===void 0)return;const EA=t[Z.id];for(const GA in EA){const DA=EA[GA];for(const dA in DA)k(DA[dA].object),delete DA[dA];delete EA[GA]}delete t[Z.id]}function eA(Z){for(const EA in t){const GA=t[EA];if(GA[Z.id]===void 0)continue;const DA=GA[Z.id];for(const dA in DA)k(DA[dA].object),delete DA[dA];delete GA[Z.id]}}function hA(){wA(),w=!0,n!==a&&(n=a,M(n.object))}function wA(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:c,reset:hA,resetDefaultState:wA,dispose:K,releaseStatesOfGeometry:m,releaseStatesOfProgram:eA,initAttributes:J,enableAttribute:u,disableUnusedAttributes:T}}function Ih(C,A,I,g){const Q=g.isWebGL2;let i;function D(w){i=w}function t(w,c){C.drawArrays(i,w,c),I.update(c,i,1)}function a(w,c,R){if(R===0)return;let M,k;if(Q)M=C,k="drawArraysInstanced";else if(M=A.get("ANGLE_instanced_arrays"),k="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[k](i,w,c,R),I.update(c,i,R)}function n(w,c,R){if(R===0)return;const M=A.get("WEBGL_multi_draw");if(M===null)for(let k=0;k<R;k++)this.render(w[k],c[k]);else{M.multiDrawArraysWEBGL(i,w,0,c,0,R);let k=0;for(let S=0;S<R;S++)k+=c[S];I.update(k,i,1)}}this.setMode=D,this.render=t,this.renderInstances=a,this.renderMultiDraw=n}function gh(C,A,I){let g;function Q(){if(g!==void 0)return g;if(A.has("EXT_texture_filter_anisotropic")===!0){const V=A.get("EXT_texture_filter_anisotropic");g=C.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function i(V){if(V==="highp"){if(C.getShaderPrecisionFormat(C.VERTEX_SHADER,C.HIGH_FLOAT).precision>0&&C.getShaderPrecisionFormat(C.FRAGMENT_SHADER,C.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&C.getShaderPrecisionFormat(C.VERTEX_SHADER,C.MEDIUM_FLOAT).precision>0&&C.getShaderPrecisionFormat(C.FRAGMENT_SHADER,C.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const D=typeof WebGL2RenderingContext<"u"&&C.constructor.name==="WebGL2RenderingContext";let t=I.precision!==void 0?I.precision:"highp";const a=i(t);a!==t&&(console.warn("THREE.WebGLRenderer:",t,"not supported, using",a,"instead."),t=a);const n=D||A.has("WEBGL_draw_buffers"),w=I.logarithmicDepthBuffer===!0,c=C.getParameter(C.MAX_TEXTURE_IMAGE_UNITS),R=C.getParameter(C.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=C.getParameter(C.MAX_TEXTURE_SIZE),k=C.getParameter(C.MAX_CUBE_MAP_TEXTURE_SIZE),S=C.getParameter(C.MAX_VERTEX_ATTRIBS),r=C.getParameter(C.MAX_VERTEX_UNIFORM_VECTORS),h=C.getParameter(C.MAX_VARYING_VECTORS),H=C.getParameter(C.MAX_FRAGMENT_UNIFORM_VECTORS),J=R>0,u=D||A.has("OES_texture_float"),x=J&&u,T=D?C.getParameter(C.MAX_SAMPLES):0;return{isWebGL2:D,drawBuffers:n,getMaxAnisotropy:Q,getMaxPrecision:i,precision:t,logarithmicDepthBuffer:w,maxTextures:c,maxVertexTextures:R,maxTextureSize:M,maxCubemapSize:k,maxAttributes:S,maxVertexUniforms:r,maxVaryings:h,maxFragmentUniforms:H,vertexTextures:J,floatFragmentTextures:u,floatVertexTextures:x,maxSamples:T}}function Ch(C){const A=this;let I=null,g=0,Q=!1,i=!1;const D=new mC,t=new LI,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(c,R){const M=c.length!==0||R||g!==0||Q;return Q=R,g=c.length,M},this.beginShadows=function(){i=!0,w(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(c,R){I=w(c,R,0)},this.setState=function(c,R,M){const k=c.clippingPlanes,S=c.clipIntersection,r=c.clipShadows,h=C.get(c);if(!Q||k===null||k.length===0||i&&!r)i?w(null):n();else{const H=i?0:g,J=H*4;let u=h.clippingState||null;a.value=u,u=w(k,R,J,M);for(let x=0;x!==J;++x)u[x]=I[x];h.clippingState=u,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=H}};function n(){a.value!==I&&(a.value=I,a.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function w(c,R,M,k){const S=c!==null?c.length:0;let r=null;if(S!==0){if(r=a.value,k!==!0||r===null){const h=M+S*4,H=R.matrixWorldInverse;t.getNormalMatrix(H),(r===null||r.length<h)&&(r=new Float32Array(h));for(let J=0,u=M;J!==S;++J,u+=4)D.copy(c[J]).applyMatrix4(H,t),D.normal.toArray(r,u),r[u+3]=D.constant}a.value=r,a.needsUpdate=!0}return A.numPlanes=S,A.numIntersection=0,r}}function Bh(C){let A=new WeakMap;function I(D,t){return t===qE?D.mapping=FB:t===mE&&(D.mapping=RB),D}function g(D){if(D&&D.isTexture){const t=D.mapping;if(t===qE||t===mE)if(A.has(D)){const a=A.get(D).texture;return I(a,D.mapping)}else{const a=D.image;if(a&&a.height>0){const n=new ha(a.height/2);return n.fromEquirectangularTexture(C,D),A.set(D,n),D.addEventListener("dispose",Q),I(n.texture,D.mapping)}else return null}}return D}function Q(D){const t=D.target;t.removeEventListener("dispose",Q);const a=A.get(t);a!==void 0&&(A.delete(t),a.dispose())}function i(){A=new WeakMap}return{get:g,dispose:i}}class Qh extends wt{constructor(A=-1,I=1,g=1,Q=-1,i=.1,D=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=Q,this.near=i,this.far=D,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,Q,i,D){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=Q,this.view.width=i,this.view.height=D,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,Q=(this.top+this.bottom)/2;let i=g-A,D=g+A,t=Q+I,a=Q-I;if(this.view!==null&&this.view.enabled){const n=(this.right-this.left)/this.view.fullWidth/this.zoom,w=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=n*this.view.offsetX,D=i+n*this.view.width,t-=w*this.view.offsetY,a=t-w*this.view.height}this.projectionMatrix.makeOrthographic(i,D,t,a,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const wB=4,co=[.125,.215,.35,.446,.526,.582],TC=20,KE=new Qh,Fo=new vI;let lE=null,kE=0,dE=0;const xC=(1+Math.sqrt(5))/2,hB=1/xC,Ro=[new CA(1,1,1),new CA(-1,1,1),new CA(1,1,-1),new CA(-1,1,-1),new CA(0,xC,hB),new CA(0,xC,-hB),new CA(hB,0,xC),new CA(-hB,0,xC),new CA(xC,hB,0),new CA(-xC,hB,0)];class No{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,Q=100){lE=this._renderer.getRenderTarget(),kE=this._renderer.getActiveCubeFace(),dE=this._renderer.getActiveMipmapLevel(),this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(A,g,Q,i),I>0&&this._blur(i,0,0,I),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=So(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(lE,kE,dE),A.scissorTest=!1,YQ(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===FB||A.mapping===RB?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),lE=this._renderer.getRenderTarget(),kE=this._renderer.getActiveCubeFace(),dE=this._renderer.getActiveMipmapLevel();const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:xg,minFilter:xg,generateMipmaps:!1,type:VB,format:Xg,colorSpace:sC,depthBuffer:!1},Q=yo(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yo(A,I,g);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Eh(i)),this._blurMaterial=ih(i,A,I)}return Q}_compileMaterial(A){const I=new Hg(this._lodPlanes[0],A);this._renderer.compile(I,KE)}_sceneToCubeUV(A,I,g,Q){const t=new bg(90,1,I,g),a=[1,-1,1,1,1,1],n=[1,1,1,-1,-1,-1],w=this._renderer,c=w.autoClear,R=w.toneMapping;w.getClearColor(Fo),w.toneMapping=SC,w.autoClear=!1;const M=new XC({name:"PMREM.Background",side:kg,depthWrite:!1,depthTest:!1}),k=new Hg(new XB,M);let S=!1;const r=A.background;r?r.isColor&&(M.color.copy(r),A.background=null,S=!0):(M.color.copy(Fo),S=!0);for(let h=0;h<6;h++){const H=h%3;H===0?(t.up.set(0,a[h],0),t.lookAt(n[h],0,0)):H===1?(t.up.set(0,0,a[h]),t.lookAt(0,n[h],0)):(t.up.set(0,a[h],0),t.lookAt(0,0,n[h]));const J=this._cubeSize;YQ(Q,H*J,h>2?J:0,J,J),w.setRenderTarget(Q),S&&w.render(k,t),w.render(A,t)}k.geometry.dispose(),k.material.dispose(),w.toneMapping=R,w.autoClear=c,A.background=r}_textureToCubeUV(A,I){const g=this._renderer,Q=A.mapping===FB||A.mapping===RB;Q?(this._cubemapMaterial===null&&(this._cubemapMaterial=So()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mo());const i=Q?this._cubemapMaterial:this._equirectMaterial,D=new Hg(this._lodPlanes[0],i),t=i.uniforms;t.envMap.value=A;const a=this._cubeSize;YQ(I,0,0,3*a,2*a),g.setRenderTarget(I),g.render(D,KE)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;for(let Q=1;Q<this._lodPlanes.length;Q++){const i=Math.sqrt(this._sigmas[Q]*this._sigmas[Q]-this._sigmas[Q-1]*this._sigmas[Q-1]),D=Ro[(Q-1)%Ro.length];this._blur(A,Q-1,Q,i,D)}I.autoClear=g}_blur(A,I,g,Q,i){const D=this._pingPongRenderTarget;this._halfBlur(A,D,I,g,Q,"latitudinal",i),this._halfBlur(D,A,g,g,Q,"longitudinal",i)}_halfBlur(A,I,g,Q,i,D,t){const a=this._renderer,n=this._blurMaterial;D!=="latitudinal"&&D!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const w=3,c=new Hg(this._lodPlanes[Q],n),R=n.uniforms,M=this._sizeLods[g]-1,k=isFinite(i)?Math.PI/(2*M):2*Math.PI/(2*TC-1),S=i/k,r=isFinite(i)?1+Math.floor(w*S):TC;r>TC&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${r} samples when the maximum is set to ${TC}`);const h=[];let H=0;for(let V=0;V<TC;++V){const QA=V/S,K=Math.exp(-QA*QA/2);h.push(K),V===0?H+=K:V<r&&(H+=2*K)}for(let V=0;V<h.length;V++)h[V]=h[V]/H;R.envMap.value=A.texture,R.samples.value=r,R.weights.value=h,R.latitudinal.value=D==="latitudinal",t&&(R.poleAxis.value=t);const{_lodMax:J}=this;R.dTheta.value=k,R.mipInt.value=J-g;const u=this._sizeLods[Q],x=3*u*(Q>J-wB?Q-J+wB:0),T=4*(this._cubeSize-u);YQ(I,x,T,3*u,2*u),a.setRenderTarget(I),a.render(c,KE)}}function Eh(C){const A=[],I=[],g=[];let Q=C;const i=C-wB+1+co.length;for(let D=0;D<i;D++){const t=Math.pow(2,Q);I.push(t);let a=1/t;D>C-wB?a=co[D-C+wB-1]:D===0&&(a=0),g.push(a);const n=1/(t-2),w=-n,c=1+n,R=[w,w,c,w,c,c,w,w,c,c,w,c],M=6,k=6,S=3,r=2,h=1,H=new Float32Array(S*k*M),J=new Float32Array(r*k*M),u=new Float32Array(h*k*M);for(let T=0;T<M;T++){const V=T%3*2/3-1,QA=T>2?0:-1,K=[V,QA,0,V+2/3,QA,0,V+2/3,QA+1,0,V,QA,0,V+2/3,QA+1,0,V,QA+1,0];H.set(K,S*k*T),J.set(R,r*k*T);const m=[T,T,T,T,T,T];u.set(m,h*k*T)}const x=new kC;x.setAttribute("position",new Pg(H,S)),x.setAttribute("uv",new Pg(J,r)),x.setAttribute("faceIndex",new Pg(u,h)),A.push(x),Q>wB&&Q--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function yo(C,A,I){const g=new OC(C,A,I);return g.texture.mapping=TQ,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function YQ(C,A,I,g,Q){C.viewport.set(A,I,g,Q),C.scissor.set(A,I,g,Q)}function ih(C,A,I){const g=new Float32Array(TC),Q=new CA(0,1,0);return new vC({name:"SphericalGaussianBlur",defines:{n:TC,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${C}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:Q}},vertexShader:Ii(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:MC,depthTest:!1,depthWrite:!1})}function Mo(){return new vC({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ii(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:MC,depthTest:!1,depthWrite:!1})}function So(){return new vC({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ii(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:MC,depthTest:!1,depthWrite:!1})}function Ii(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function oh(C){let A=new WeakMap,I=null;function g(t){if(t&&t.isTexture){const a=t.mapping,n=a===qE||a===mE,w=a===FB||a===RB;if(n||w)if(t.isRenderTargetTexture&&t.needsPMREMUpdate===!0){t.needsPMREMUpdate=!1;let c=A.get(t);return I===null&&(I=new No(C)),c=n?I.fromEquirectangular(t,c):I.fromCubemap(t,c),A.set(t,c),c.texture}else{if(A.has(t))return A.get(t).texture;{const c=t.image;if(n&&c&&c.height>0||w&&c&&Q(c)){I===null&&(I=new No(C));const R=n?I.fromEquirectangular(t):I.fromCubemap(t);return A.set(t,R),t.addEventListener("dispose",i),R.texture}else return null}}}return t}function Q(t){let a=0;const n=6;for(let w=0;w<n;w++)t[w]!==void 0&&a++;return a===n}function i(t){const a=t.target;a.removeEventListener("dispose",i);const n=A.get(a);n!==void 0&&(A.delete(a),n.dispose())}function D(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:D}}function th(C){const A={};function I(g){if(A[g]!==void 0)return A[g];let Q;switch(g){case"WEBGL_depth_texture":Q=C.getExtension("WEBGL_depth_texture")||C.getExtension("MOZ_WEBGL_depth_texture")||C.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":Q=C.getExtension("EXT_texture_filter_anisotropic")||C.getExtension("MOZ_EXT_texture_filter_anisotropic")||C.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":Q=C.getExtension("WEBGL_compressed_texture_s3tc")||C.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||C.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":Q=C.getExtension("WEBGL_compressed_texture_pvrtc")||C.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:Q=C.getExtension(g)}return A[g]=Q,Q}return{has:function(g){return I(g)!==null},init:function(g){g.isWebGL2?I("EXT_color_buffer_float"):(I("WEBGL_depth_texture"),I("OES_texture_float"),I("OES_texture_half_float"),I("OES_texture_half_float_linear"),I("OES_standard_derivatives"),I("OES_element_index_uint"),I("OES_vertex_array_object"),I("ANGLE_instanced_arrays")),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture")},get:function(g){const Q=I(g);return Q===null&&console.warn("THREE.WebGLRenderer: "+g+" extension not supported."),Q}}}function Dh(C,A,I,g){const Q={},i=new WeakMap;function D(c){const R=c.target;R.index!==null&&A.remove(R.index);for(const k in R.attributes)A.remove(R.attributes[k]);for(const k in R.morphAttributes){const S=R.morphAttributes[k];for(let r=0,h=S.length;r<h;r++)A.remove(S[r])}R.removeEventListener("dispose",D),delete Q[R.id];const M=i.get(R);M&&(A.remove(M),i.delete(R)),g.releaseStatesOfGeometry(R),R.isInstancedBufferGeometry===!0&&delete R._maxInstanceCount,I.memory.geometries--}function t(c,R){return Q[R.id]===!0||(R.addEventListener("dispose",D),Q[R.id]=!0,I.memory.geometries++),R}function a(c){const R=c.attributes;for(const k in R)A.update(R[k],C.ARRAY_BUFFER);const M=c.morphAttributes;for(const k in M){const S=M[k];for(let r=0,h=S.length;r<h;r++)A.update(S[r],C.ARRAY_BUFFER)}}function n(c){const R=[],M=c.index,k=c.attributes.position;let S=0;if(M!==null){const H=M.array;S=M.version;for(let J=0,u=H.length;J<u;J+=3){const x=H[J+0],T=H[J+1],V=H[J+2];R.push(x,T,T,V,V,x)}}else if(k!==void 0){const H=k.array;S=k.version;for(let J=0,u=H.length/3-1;J<u;J+=3){const x=J+0,T=J+1,V=J+2;R.push(x,T,T,V,V,x)}}else return;const r=new(it(R)?nt:et)(R,1);r.version=S;const h=i.get(c);h&&A.remove(h),i.set(c,r)}function w(c){const R=i.get(c);if(R){const M=c.index;M!==null&&R.version<M.version&&n(c)}else n(c);return i.get(c)}return{get:t,update:a,getWireframeAttribute:w}}function sh(C,A,I,g){const Q=g.isWebGL2;let i;function D(M){i=M}let t,a;function n(M){t=M.type,a=M.bytesPerElement}function w(M,k){C.drawElements(i,k,t,M*a),I.update(k,i,1)}function c(M,k,S){if(S===0)return;let r,h;if(Q)r=C,h="drawElementsInstanced";else if(r=A.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",r===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}r[h](i,k,t,M*a,S),I.update(k,i,S)}function R(M,k,S){if(S===0)return;const r=A.get("WEBGL_multi_draw");if(r===null)for(let h=0;h<S;h++)this.render(M[h]/a,k[h]);else{r.multiDrawElementsWEBGL(i,k,0,t,M,0,S);let h=0;for(let H=0;H<S;H++)h+=k[H];I.update(h,i,1)}}this.setMode=D,this.setIndex=n,this.render=w,this.renderInstances=c,this.renderMultiDraw=R}function ah(C){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(i,D,t){switch(I.calls++,D){case C.TRIANGLES:I.triangles+=t*(i/3);break;case C.LINES:I.lines+=t*(i/2);break;case C.LINE_STRIP:I.lines+=t*(i-1);break;case C.LINE_LOOP:I.lines+=t*i;break;case C.POINTS:I.points+=t*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",D);break}}function Q(){I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:Q,update:g}}function eh(C,A){return C[0]-A[0]}function nh(C,A){return Math.abs(A[1])-Math.abs(C[1])}function hh(C,A,I){const g={},Q=new Float32Array(8),i=new WeakMap,D=new Fg,t=[];for(let n=0;n<8;n++)t[n]=[n,0];function a(n,w,c){const R=n.morphTargetInfluences;if(A.isWebGL2===!0){const k=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,S=k!==void 0?k.length:0;let r=i.get(w);if(r===void 0||r.count!==S){let EA=function(){wA.dispose(),i.delete(w),w.removeEventListener("dispose",EA)};var M=EA;r!==void 0&&r.texture.dispose();const J=w.morphAttributes.position!==void 0,u=w.morphAttributes.normal!==void 0,x=w.morphAttributes.color!==void 0,T=w.morphAttributes.position||[],V=w.morphAttributes.normal||[],QA=w.morphAttributes.color||[];let K=0;J===!0&&(K=1),u===!0&&(K=2),x===!0&&(K=3);let m=w.attributes.position.count*K,eA=1;m>A.maxTextureSize&&(eA=Math.ceil(m/A.maxTextureSize),m=A.maxTextureSize);const hA=new Float32Array(m*eA*4*S),wA=new Dt(hA,m,eA,S);wA.type=yC,wA.needsUpdate=!0;const Z=K*4;for(let GA=0;GA<S;GA++){const DA=T[GA],dA=V[GA],RA=QA[GA],rA=m*eA*4*GA;for(let JA=0;JA<DA.count;JA++){const LA=JA*Z;J===!0&&(D.fromBufferAttribute(DA,JA),hA[rA+LA+0]=D.x,hA[rA+LA+1]=D.y,hA[rA+LA+2]=D.z,hA[rA+LA+3]=0),u===!0&&(D.fromBufferAttribute(dA,JA),hA[rA+LA+4]=D.x,hA[rA+LA+5]=D.y,hA[rA+LA+6]=D.z,hA[rA+LA+7]=0),x===!0&&(D.fromBufferAttribute(RA,JA),hA[rA+LA+8]=D.x,hA[rA+LA+9]=D.y,hA[rA+LA+10]=D.z,hA[rA+LA+11]=RA.itemSize===4?D.w:1)}}r={count:S,texture:wA,size:new jI(m,eA)},i.set(w,r),w.addEventListener("dispose",EA)}let h=0;for(let J=0;J<R.length;J++)h+=R[J];const H=w.morphTargetsRelative?1:1-h;c.getUniforms().setValue(C,"morphTargetBaseInfluence",H),c.getUniforms().setValue(C,"morphTargetInfluences",R),c.getUniforms().setValue(C,"morphTargetsTexture",r.texture,I),c.getUniforms().setValue(C,"morphTargetsTextureSize",r.size)}else{const k=R===void 0?0:R.length;let S=g[w.id];if(S===void 0||S.length!==k){S=[];for(let u=0;u<k;u++)S[u]=[u,0];g[w.id]=S}for(let u=0;u<k;u++){const x=S[u];x[0]=u,x[1]=R[u]}S.sort(nh);for(let u=0;u<8;u++)u<k&&S[u][1]?(t[u][0]=S[u][0],t[u][1]=S[u][1]):(t[u][0]=Number.MAX_SAFE_INTEGER,t[u][1]=0);t.sort(eh);const r=w.morphAttributes.position,h=w.morphAttributes.normal;let H=0;for(let u=0;u<8;u++){const x=t[u],T=x[0],V=x[1];T!==Number.MAX_SAFE_INTEGER&&V?(r&&w.getAttribute("morphTarget"+u)!==r[T]&&w.setAttribute("morphTarget"+u,r[T]),h&&w.getAttribute("morphNormal"+u)!==h[T]&&w.setAttribute("morphNormal"+u,h[T]),Q[u]=V,H+=V):(r&&w.hasAttribute("morphTarget"+u)===!0&&w.deleteAttribute("morphTarget"+u),h&&w.hasAttribute("morphNormal"+u)===!0&&w.deleteAttribute("morphNormal"+u),Q[u]=0)}const J=w.morphTargetsRelative?1:1-H;c.getUniforms().setValue(C,"morphTargetBaseInfluence",J),c.getUniforms().setValue(C,"morphTargetInfluences",Q)}}return{update:a}}function wh(C,A,I,g){let Q=new WeakMap;function i(a){const n=g.render.frame,w=a.geometry,c=A.get(a,w);if(Q.get(c)!==n&&(A.update(c),Q.set(c,n)),a.isInstancedMesh&&(a.hasEventListener("dispose",t)===!1&&a.addEventListener("dispose",t),Q.get(a)!==n&&(I.update(a.instanceMatrix,C.ARRAY_BUFFER),a.instanceColor!==null&&I.update(a.instanceColor,C.ARRAY_BUFFER),Q.set(a,n))),a.isSkinnedMesh){const R=a.skeleton;Q.get(R)!==n&&(R.update(),Q.set(R,n))}return c}function D(){Q=new WeakMap}function t(a){const n=a.target;n.removeEventListener("dispose",t),I.remove(n.instanceMatrix),n.instanceColor!==null&&I.remove(n.instanceColor)}return{update:i,dispose:D}}class Ft extends dg{constructor(A,I,g,Q,i,D,t,a,n,w){if(w=w!==void 0?w:WC,w!==WC&&w!==NB)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&w===WC&&(g=NC),g===void 0&&w===NB&&(g=VC),super(null,Q,i,D,t,a,w,g,n),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=t!==void 0?t:Sg,this.minFilter=a!==void 0?a:Sg,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const I=super.toJSON(A);return this.compareFunction!==null&&(I.compareFunction=this.compareFunction),I}}const Rt=new dg,Nt=new Ft(1,1);Nt.compareFunction=Et;const yt=new Dt,Mt=new zs,St=new Gt,Uo=[],Ko=[],lo=new Float32Array(16),ko=new Float32Array(9),Jo=new Float32Array(4);function KB(C,A,I){const g=C[0];if(g<=0||g>0)return C;const Q=A*I;let i=Uo[Q];if(i===void 0&&(i=new Float32Array(Q),Uo[Q]=i),A!==0){g.toArray(i,0);for(let D=1,t=0;D!==A;++D)t+=I,C[D].toArray(i,t)}return i}function eg(C,A){if(C.length!==A.length)return!1;for(let I=0,g=C.length;I<g;I++)if(C[I]!==A[I])return!1;return!0}function ng(C,A){for(let I=0,g=A.length;I<g;I++)C[I]=A[I]}function ZQ(C,A){let I=Ko[A];I===void 0&&(I=new Int32Array(A),Ko[A]=I);for(let g=0;g!==A;++g)I[g]=C.allocateTextureUnit();return I}function Gh(C,A){const I=this.cache;I[0]!==A&&(C.uniform1f(this.addr,A),I[0]=A)}function rh(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(C.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(eg(I,A))return;C.uniform2fv(this.addr,A),ng(I,A)}}function ch(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(C.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(C.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(eg(I,A))return;C.uniform3fv(this.addr,A),ng(I,A)}}function Fh(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(C.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(eg(I,A))return;C.uniform4fv(this.addr,A),ng(I,A)}}function Rh(C,A){const I=this.cache,g=A.elements;if(g===void 0){if(eg(I,A))return;C.uniformMatrix2fv(this.addr,!1,A),ng(I,A)}else{if(eg(I,g))return;Jo.set(g),C.uniformMatrix2fv(this.addr,!1,Jo),ng(I,g)}}function Nh(C,A){const I=this.cache,g=A.elements;if(g===void 0){if(eg(I,A))return;C.uniformMatrix3fv(this.addr,!1,A),ng(I,A)}else{if(eg(I,g))return;ko.set(g),C.uniformMatrix3fv(this.addr,!1,ko),ng(I,g)}}function yh(C,A){const I=this.cache,g=A.elements;if(g===void 0){if(eg(I,A))return;C.uniformMatrix4fv(this.addr,!1,A),ng(I,A)}else{if(eg(I,g))return;lo.set(g),C.uniformMatrix4fv(this.addr,!1,lo),ng(I,g)}}function Mh(C,A){const I=this.cache;I[0]!==A&&(C.uniform1i(this.addr,A),I[0]=A)}function Sh(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(C.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(eg(I,A))return;C.uniform2iv(this.addr,A),ng(I,A)}}function Uh(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(C.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(eg(I,A))return;C.uniform3iv(this.addr,A),ng(I,A)}}function Kh(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(C.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(eg(I,A))return;C.uniform4iv(this.addr,A),ng(I,A)}}function lh(C,A){const I=this.cache;I[0]!==A&&(C.uniform1ui(this.addr,A),I[0]=A)}function kh(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(C.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(eg(I,A))return;C.uniform2uiv(this.addr,A),ng(I,A)}}function dh(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(C.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(eg(I,A))return;C.uniform3uiv(this.addr,A),ng(I,A)}}function Jh(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(C.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(eg(I,A))return;C.uniform4uiv(this.addr,A),ng(I,A)}}function Yh(C,A,I){const g=this.cache,Q=I.allocateTextureUnit();g[0]!==Q&&(C.uniform1i(this.addr,Q),g[0]=Q);const i=this.type===C.SAMPLER_2D_SHADOW?Nt:Rt;I.setTexture2D(A||i,Q)}function Lh(C,A,I){const g=this.cache,Q=I.allocateTextureUnit();g[0]!==Q&&(C.uniform1i(this.addr,Q),g[0]=Q),I.setTexture3D(A||Mt,Q)}function fh(C,A,I){const g=this.cache,Q=I.allocateTextureUnit();g[0]!==Q&&(C.uniform1i(this.addr,Q),g[0]=Q),I.setTextureCube(A||St,Q)}function Hh(C,A,I){const g=this.cache,Q=I.allocateTextureUnit();g[0]!==Q&&(C.uniform1i(this.addr,Q),g[0]=Q),I.setTexture2DArray(A||yt,Q)}function uh(C){switch(C){case 5126:return Gh;case 35664:return rh;case 35665:return ch;case 35666:return Fh;case 35674:return Rh;case 35675:return Nh;case 35676:return yh;case 5124:case 35670:return Mh;case 35667:case 35671:return Sh;case 35668:case 35672:return Uh;case 35669:case 35673:return Kh;case 5125:return lh;case 36294:return kh;case 36295:return dh;case 36296:return Jh;case 35678:case 36198:case 36298:case 36306:case 35682:return Yh;case 35679:case 36299:case 36307:return Lh;case 35680:case 36300:case 36308:case 36293:return fh;case 36289:case 36303:case 36311:case 36292:return Hh}}function ph(C,A){C.uniform1fv(this.addr,A)}function qh(C,A){const I=KB(A,this.size,2);C.uniform2fv(this.addr,I)}function mh(C,A){const I=KB(A,this.size,3);C.uniform3fv(this.addr,I)}function xh(C,A){const I=KB(A,this.size,4);C.uniform4fv(this.addr,I)}function bh(C,A){const I=KB(A,this.size,4);C.uniformMatrix2fv(this.addr,!1,I)}function Th(C,A){const I=KB(A,this.size,9);C.uniformMatrix3fv(this.addr,!1,I)}function Vh(C,A){const I=KB(A,this.size,16);C.uniformMatrix4fv(this.addr,!1,I)}function Wh(C,A){C.uniform1iv(this.addr,A)}function Zh(C,A){C.uniform2iv(this.addr,A)}function Oh(C,A){C.uniform3iv(this.addr,A)}function vh(C,A){C.uniform4iv(this.addr,A)}function Xh(C,A){C.uniform1uiv(this.addr,A)}function Ph(C,A){C.uniform2uiv(this.addr,A)}function jh(C,A){C.uniform3uiv(this.addr,A)}function zh(C,A){C.uniform4uiv(this.addr,A)}function _h(C,A,I){const g=this.cache,Q=A.length,i=ZQ(I,Q);eg(g,i)||(C.uniform1iv(this.addr,i),ng(g,i));for(let D=0;D!==Q;++D)I.setTexture2D(A[D]||Rt,i[D])}function $h(C,A,I){const g=this.cache,Q=A.length,i=ZQ(I,Q);eg(g,i)||(C.uniform1iv(this.addr,i),ng(g,i));for(let D=0;D!==Q;++D)I.setTexture3D(A[D]||Mt,i[D])}function A0(C,A,I){const g=this.cache,Q=A.length,i=ZQ(I,Q);eg(g,i)||(C.uniform1iv(this.addr,i),ng(g,i));for(let D=0;D!==Q;++D)I.setTextureCube(A[D]||St,i[D])}function I0(C,A,I){const g=this.cache,Q=A.length,i=ZQ(I,Q);eg(g,i)||(C.uniform1iv(this.addr,i),ng(g,i));for(let D=0;D!==Q;++D)I.setTexture2DArray(A[D]||yt,i[D])}function g0(C){switch(C){case 5126:return ph;case 35664:return qh;case 35665:return mh;case 35666:return xh;case 35674:return bh;case 35675:return Th;case 35676:return Vh;case 5124:case 35670:return Wh;case 35667:case 35671:return Zh;case 35668:case 35672:return Oh;case 35669:case 35673:return vh;case 5125:return Xh;case 36294:return Ph;case 36295:return jh;case 36296:return zh;case 35678:case 36198:case 36298:case 36306:case 35682:return _h;case 35679:case 36299:case 36307:return $h;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return I0}}class C0{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.setValue=uh(I.type)}}class B0{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.size=I.size,this.setValue=g0(I.type)}}class Q0{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const Q=this.seq;for(let i=0,D=Q.length;i!==D;++i){const t=Q[i];t.setValue(A,I[t.id],g)}}}const JE=/(\w+)(\])?(\[|\.)?/g;function Yo(C,A){C.seq.push(A),C.map[A.id]=A}function E0(C,A,I){const g=C.name,Q=g.length;for(JE.lastIndex=0;;){const i=JE.exec(g),D=JE.lastIndex;let t=i[1];const a=i[2]==="]",n=i[3];if(a&&(t=t|0),n===void 0||n==="["&&D+2===Q){Yo(I,n===void 0?new C0(t,C,A):new B0(t,C,A));break}else{let c=I.map[t];c===void 0&&(c=new Q0(t),Yo(I,c)),I=c}}}class fQ{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let Q=0;Q<g;++Q){const i=A.getActiveUniform(I,Q),D=A.getUniformLocation(I,i.name);E0(i,D,this)}}setValue(A,I,g,Q){const i=this.map[I];i!==void 0&&i.setValue(A,g,Q)}setOptional(A,I,g){const Q=I[g];Q!==void 0&&this.setValue(A,g,Q)}static upload(A,I,g,Q){for(let i=0,D=I.length;i!==D;++i){const t=I[i],a=g[t.id];a.needsUpdate!==!1&&t.setValue(A,a.value,Q)}}static seqWithValue(A,I){const g=[];for(let Q=0,i=A.length;Q!==i;++Q){const D=A[Q];D.id in I&&g.push(D)}return g}}function Lo(C,A,I){const g=C.createShader(A);return C.shaderSource(g,I),C.compileShader(g),g}const i0=37297;let o0=0;function t0(C,A){const I=C.split(`
`),g=[],Q=Math.max(A-6,0),i=Math.min(A+6,I.length);for(let D=Q;D<i;D++){const t=D+1;g.push(`${t===A?">":" "} ${t}: ${I[D]}`)}return g.join(`
`)}function D0(C){const A=_I.getPrimaries(_I.workingColorSpace),I=_I.getPrimaries(C);let g;switch(A===I?g="":A===qQ&&I===pQ?g="LinearDisplayP3ToLinearSRGB":A===pQ&&I===qQ&&(g="LinearSRGBToLinearDisplayP3"),C){case sC:case VQ:return[g,"LinearTransferOETF"];case og:case $E:return[g,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",C),[g,"LinearTransferOETF"]}}function fo(C,A,I){const g=C.getShaderParameter(A,C.COMPILE_STATUS),Q=C.getShaderInfoLog(A).trim();if(g&&Q==="")return"";const i=/ERROR: 0:(\d+)/.exec(Q);if(i){const D=parseInt(i[1]);return I.toUpperCase()+`

`+Q+`

`+t0(C.getShaderSource(A),D)}else return Q}function s0(C,A){const I=D0(A);return`vec4 ${C}( vec4 value ) { return ${I[0]}( ${I[1]}( value ) ); }`}function a0(C,A){let I;switch(A){case Rs:I="Linear";break;case Ns:I="Reinhard";break;case ys:I="OptimizedCineon";break;case Ms:I="ACESFilmic";break;case Ss:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+C+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}function e0(C){return[C.extensionDerivatives||C.envMapCubeUVHeight||C.bumpMap||C.normalMapTangentSpace||C.clearcoatNormalMap||C.flatShading||C.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(C.extensionFragDepth||C.logarithmicDepthBuffer)&&C.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",C.extensionDrawBuffers&&C.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(C.extensionShaderTextureLOD||C.envMap||C.transmission)&&C.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xB).join(`
`)}function n0(C){const A=[];for(const I in C){const g=C[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function h0(C,A){const I={},g=C.getProgramParameter(A,C.ACTIVE_ATTRIBUTES);for(let Q=0;Q<g;Q++){const i=C.getActiveAttrib(A,Q),D=i.name;let t=1;i.type===C.FLOAT_MAT2&&(t=2),i.type===C.FLOAT_MAT3&&(t=3),i.type===C.FLOAT_MAT4&&(t=4),I[D]={type:i.type,location:C.getAttribLocation(A,D),locationSize:t}}return I}function xB(C){return C!==""}function Ho(C,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return C.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function uo(C,A){return C.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const w0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ZE(C){return C.replace(w0,r0)}const G0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function r0(C,A){let I=lI[A];if(I===void 0){const g=G0.get(A);if(g!==void 0)I=lI[g],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,g);else throw new Error("Can not resolve #include <"+A+">")}return ZE(I)}const c0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function po(C){return C.replace(c0,F0)}function F0(C,A,I,g){let Q="";for(let i=parseInt(A);i<parseInt(I);i++)Q+=g.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return Q}function qo(C){let A="precision "+C.precision+` float;
precision `+C.precision+" int;";return C.precision==="highp"?A+=`
#define HIGH_PRECISION`:C.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:C.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function R0(C){let A="SHADOWMAP_TYPE_BASIC";return C.shadowMapType===Xo?A="SHADOWMAP_TYPE_PCF":C.shadowMapType===PD?A="SHADOWMAP_TYPE_PCF_SOFT":C.shadowMapType===iC&&(A="SHADOWMAP_TYPE_VSM"),A}function N0(C){let A="ENVMAP_TYPE_CUBE";if(C.envMap)switch(C.envMapMode){case FB:case RB:A="ENVMAP_TYPE_CUBE";break;case TQ:A="ENVMAP_TYPE_CUBE_UV";break}return A}function y0(C){let A="ENVMAP_MODE_REFLECTION";if(C.envMap)switch(C.envMapMode){case RB:A="ENVMAP_MODE_REFRACTION";break}return A}function M0(C){let A="ENVMAP_BLENDING_NONE";if(C.envMap)switch(C.combine){case Po:A="ENVMAP_BLENDING_MULTIPLY";break;case cs:A="ENVMAP_BLENDING_MIX";break;case Fs:A="ENVMAP_BLENDING_ADD";break}return A}function S0(C){const A=C.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function U0(C,A,I,g){const Q=C.getContext(),i=I.defines;let D=I.vertexShader,t=I.fragmentShader;const a=R0(I),n=N0(I),w=y0(I),c=M0(I),R=S0(I),M=I.isWebGL2?"":e0(I),k=n0(i),S=Q.createProgram();let r,h,H=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(r=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,k].filter(xB).join(`
`),r.length>0&&(r+=`
`),h=[M,"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,k].filter(xB).join(`
`),h.length>0&&(h+=`
`)):(r=[qo(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,k,I.batching?"#define USE_BATCHING":"",I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+w:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+I.anisotropyMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors&&I.isWebGL2?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+a:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xB).join(`
`),h=[M,qo(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,k,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+n:"",I.envMap?"#define "+w:"",I.envMap?"#define "+c:"",R?"#define CUBEUV_TEXEL_WIDTH "+R.texelWidth:"",R?"#define CUBEUV_TEXEL_HEIGHT "+R.texelHeight:"",R?"#define CUBEUV_MAX_MIP "+R.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+a:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==SC?"#define TONE_MAPPING":"",I.toneMapping!==SC?lI.tonemapping_pars_fragment:"",I.toneMapping!==SC?a0("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",lI.colorspace_pars_fragment,s0("linearToOutputTexel",I.outputColorSpace),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(xB).join(`
`)),D=ZE(D),D=Ho(D,I),D=uo(D,I),t=ZE(t),t=Ho(t,I),t=uo(t,I),D=po(D),t=po(t),I.isWebGL2&&I.isRawShaderMaterial!==!0&&(H=`#version 300 es
`,r=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+r,h=["precision mediump sampler2DArray;","#define varying in",I.glslVersion===Io?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===Io?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const J=H+r+D,u=H+h+t,x=Lo(Q,Q.VERTEX_SHADER,J),T=Lo(Q,Q.FRAGMENT_SHADER,u);Q.attachShader(S,x),Q.attachShader(S,T),I.index0AttributeName!==void 0?Q.bindAttribLocation(S,0,I.index0AttributeName):I.morphTargets===!0&&Q.bindAttribLocation(S,0,"position"),Q.linkProgram(S);function V(eA){if(C.debug.checkShaderErrors){const hA=Q.getProgramInfoLog(S).trim(),wA=Q.getShaderInfoLog(x).trim(),Z=Q.getShaderInfoLog(T).trim();let EA=!0,GA=!0;if(Q.getProgramParameter(S,Q.LINK_STATUS)===!1)if(EA=!1,typeof C.debug.onShaderError=="function")C.debug.onShaderError(Q,S,x,T);else{const DA=fo(Q,x,"vertex"),dA=fo(Q,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+Q.getError()+" - VALIDATE_STATUS "+Q.getProgramParameter(S,Q.VALIDATE_STATUS)+`

Program Info Log: `+hA+`
`+DA+`
`+dA)}else hA!==""?console.warn("THREE.WebGLProgram: Program Info Log:",hA):(wA===""||Z==="")&&(GA=!1);GA&&(eA.diagnostics={runnable:EA,programLog:hA,vertexShader:{log:wA,prefix:r},fragmentShader:{log:Z,prefix:h}})}Q.deleteShader(x),Q.deleteShader(T),QA=new fQ(Q,S),K=h0(Q,S)}let QA;this.getUniforms=function(){return QA===void 0&&V(this),QA};let K;this.getAttributes=function(){return K===void 0&&V(this),K};let m=I.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return m===!1&&(m=Q.getProgramParameter(S,i0)),m},this.destroy=function(){g.releaseStatesOfProgram(this),Q.deleteProgram(S),this.program=void 0},this.type=I.shaderType,this.name=I.shaderName,this.id=o0++,this.cacheKey=A,this.usedTimes=1,this.program=S,this.vertexShader=x,this.fragmentShader=T,this}let K0=0;class l0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,Q=this._getShaderStage(I),i=this._getShaderStage(g),D=this._getShaderCacheForMaterial(A);return D.has(Q)===!1&&(D.add(Q),Q.usedTimes++),D.has(i)===!1&&(D.add(i),i.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new k0(A),I.set(A,g)),g}}class k0{constructor(A){this.id=K0++,this.code=A,this.usedTimes=0}}function d0(C,A,I,g,Q,i,D){const t=new st,a=new l0,n=[],w=Q.isWebGL2,c=Q.logarithmicDepthBuffer,R=Q.vertexTextures;let M=Q.precision;const k={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(K){return K===0?"uv":`uv${K}`}function r(K,m,eA,hA,wA){const Z=hA.fog,EA=wA.geometry,GA=K.isMeshStandardMaterial?hA.environment:null,DA=(K.isMeshStandardMaterial?I:A).get(K.envMap||GA),dA=DA&&DA.mapping===TQ?DA.image.height:null,RA=k[K.type];K.precision!==null&&(M=Q.getMaxPrecision(K.precision),M!==K.precision&&console.warn("THREE.WebGLProgram.getParameters:",K.precision,"not supported, using",M,"instead."));const rA=EA.morphAttributes.position||EA.morphAttributes.normal||EA.morphAttributes.color,JA=rA!==void 0?rA.length:0;let LA=0;EA.morphAttributes.position!==void 0&&(LA=1),EA.morphAttributes.normal!==void 0&&(LA=2),EA.morphAttributes.color!==void 0&&(LA=3);let iA,cA,mA,PA;if(RA){const zI=_g[RA];iA=zI.vertexShader,cA=zI.fragmentShader}else iA=K.vertexShader,cA=K.fragmentShader,a.update(K),mA=a.getVertexShaderID(K),PA=a.getFragmentShaderID(K);const jA=C.getRenderTarget(),DI=wA.isInstancedMesh===!0,xA=wA.isBatchedMesh===!0,TA=!!K.map,gI=!!K.matcap,z=!!DA,KA=!!K.aoMap,WA=!!K.lightMap,rI=!!K.bumpMap,zA=!!K.normalMap,TI=!!K.displacementMap,CI=!!K.emissiveMap,iI=!!K.metalnessMap,uI=!!K.roughnessMap,VI=K.anisotropy>0,Bg=K.clearcoat>0,q=K.iridescence>0,l=K.sheen>0,$=K.transmission>0,SA=VI&&!!K.anisotropyMap,yA=Bg&&!!K.clearcoatMap,NA=Bg&&!!K.clearcoatNormalMap,ZA=Bg&&!!K.clearcoatRoughnessMap,lA=q&&!!K.iridescenceMap,pA=q&&!!K.iridescenceThicknessMap,QI=l&&!!K.sheenColorMap,oI=l&&!!K.sheenRoughnessMap,MA=!!K.specularMap,xI=!!K.specularColorMap,OA=!!K.specularIntensityMap,EI=$&&!!K.transmissionMap,_A=$&&!!K.thicknessMap,FA=!!K.gradientMap,FI=!!K.alphaMap,b=K.alphaTest>0,fA=!!K.alphaHash,nA=!!K.extensions,X=!!EA.attributes.uv1,kA=!!EA.attributes.uv2,XA=!!EA.attributes.uv3;let JI=SC;return K.toneMapped&&(jA===null||jA.isXRRenderTarget===!0)&&(JI=C.toneMapping),{isWebGL2:w,shaderID:RA,shaderType:K.type,shaderName:K.name,vertexShader:iA,fragmentShader:cA,defines:K.defines,customVertexShaderID:mA,customFragmentShaderID:PA,isRawShaderMaterial:K.isRawShaderMaterial===!0,glslVersion:K.glslVersion,precision:M,batching:xA,instancing:DI,instancingColor:DI&&wA.instanceColor!==null,supportsVertexTextures:R,outputColorSpace:jA===null?C.outputColorSpace:jA.isXRRenderTarget===!0?jA.texture.colorSpace:sC,map:TA,matcap:gI,envMap:z,envMapMode:z&&DA.mapping,envMapCubeUVHeight:dA,aoMap:KA,lightMap:WA,bumpMap:rI,normalMap:zA,displacementMap:R&&TI,emissiveMap:CI,normalMapObjectSpace:zA&&K.normalMapType===ps,normalMapTangentSpace:zA&&K.normalMapType===Qt,metalnessMap:iI,roughnessMap:uI,anisotropy:VI,anisotropyMap:SA,clearcoat:Bg,clearcoatMap:yA,clearcoatNormalMap:NA,clearcoatRoughnessMap:ZA,iridescence:q,iridescenceMap:lA,iridescenceThicknessMap:pA,sheen:l,sheenColorMap:QI,sheenRoughnessMap:oI,specularMap:MA,specularColorMap:xI,specularIntensityMap:OA,transmission:$,transmissionMap:EI,thicknessMap:_A,gradientMap:FA,opaque:K.transparent===!1&&K.blending===rB,alphaMap:FI,alphaTest:b,alphaHash:fA,combine:K.combine,mapUv:TA&&S(K.map.channel),aoMapUv:KA&&S(K.aoMap.channel),lightMapUv:WA&&S(K.lightMap.channel),bumpMapUv:rI&&S(K.bumpMap.channel),normalMapUv:zA&&S(K.normalMap.channel),displacementMapUv:TI&&S(K.displacementMap.channel),emissiveMapUv:CI&&S(K.emissiveMap.channel),metalnessMapUv:iI&&S(K.metalnessMap.channel),roughnessMapUv:uI&&S(K.roughnessMap.channel),anisotropyMapUv:SA&&S(K.anisotropyMap.channel),clearcoatMapUv:yA&&S(K.clearcoatMap.channel),clearcoatNormalMapUv:NA&&S(K.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ZA&&S(K.clearcoatRoughnessMap.channel),iridescenceMapUv:lA&&S(K.iridescenceMap.channel),iridescenceThicknessMapUv:pA&&S(K.iridescenceThicknessMap.channel),sheenColorMapUv:QI&&S(K.sheenColorMap.channel),sheenRoughnessMapUv:oI&&S(K.sheenRoughnessMap.channel),specularMapUv:MA&&S(K.specularMap.channel),specularColorMapUv:xI&&S(K.specularColorMap.channel),specularIntensityMapUv:OA&&S(K.specularIntensityMap.channel),transmissionMapUv:EI&&S(K.transmissionMap.channel),thicknessMapUv:_A&&S(K.thicknessMap.channel),alphaMapUv:FI&&S(K.alphaMap.channel),vertexTangents:!!EA.attributes.tangent&&(zA||VI),vertexColors:K.vertexColors,vertexAlphas:K.vertexColors===!0&&!!EA.attributes.color&&EA.attributes.color.itemSize===4,vertexUv1s:X,vertexUv2s:kA,vertexUv3s:XA,pointsUvs:wA.isPoints===!0&&!!EA.attributes.uv&&(TA||FI),fog:!!Z,useFog:K.fog===!0,fogExp2:Z&&Z.isFogExp2,flatShading:K.flatShading===!0,sizeAttenuation:K.sizeAttenuation===!0,logarithmicDepthBuffer:c,skinning:wA.isSkinnedMesh===!0,morphTargets:EA.morphAttributes.position!==void 0,morphNormals:EA.morphAttributes.normal!==void 0,morphColors:EA.morphAttributes.color!==void 0,morphTargetsCount:JA,morphTextureStride:LA,numDirLights:m.directional.length,numPointLights:m.point.length,numSpotLights:m.spot.length,numSpotLightMaps:m.spotLightMap.length,numRectAreaLights:m.rectArea.length,numHemiLights:m.hemi.length,numDirLightShadows:m.directionalShadowMap.length,numPointLightShadows:m.pointShadowMap.length,numSpotLightShadows:m.spotShadowMap.length,numSpotLightShadowsWithMaps:m.numSpotLightShadowsWithMaps,numLightProbes:m.numLightProbes,numClippingPlanes:D.numPlanes,numClipIntersection:D.numIntersection,dithering:K.dithering,shadowMapEnabled:C.shadowMap.enabled&&eA.length>0,shadowMapType:C.shadowMap.type,toneMapping:JI,useLegacyLights:C._useLegacyLights,decodeVideoTexture:TA&&K.map.isVideoTexture===!0&&_I.getTransfer(K.map.colorSpace)===Ig,premultipliedAlpha:K.premultipliedAlpha,doubleSided:K.side===oC,flipSided:K.side===kg,useDepthPacking:K.depthPacking>=0,depthPacking:K.depthPacking||0,index0AttributeName:K.index0AttributeName,extensionDerivatives:nA&&K.extensions.derivatives===!0,extensionFragDepth:nA&&K.extensions.fragDepth===!0,extensionDrawBuffers:nA&&K.extensions.drawBuffers===!0,extensionShaderTextureLOD:nA&&K.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:w||g.has("EXT_frag_depth"),rendererExtensionDrawBuffers:w||g.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:w||g.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:g.has("KHR_parallel_shader_compile"),customProgramCacheKey:K.customProgramCacheKey()}}function h(K){const m=[];if(K.shaderID?m.push(K.shaderID):(m.push(K.customVertexShaderID),m.push(K.customFragmentShaderID)),K.defines!==void 0)for(const eA in K.defines)m.push(eA),m.push(K.defines[eA]);return K.isRawShaderMaterial===!1&&(H(m,K),J(m,K),m.push(C.outputColorSpace)),m.push(K.customProgramCacheKey),m.join()}function H(K,m){K.push(m.precision),K.push(m.outputColorSpace),K.push(m.envMapMode),K.push(m.envMapCubeUVHeight),K.push(m.mapUv),K.push(m.alphaMapUv),K.push(m.lightMapUv),K.push(m.aoMapUv),K.push(m.bumpMapUv),K.push(m.normalMapUv),K.push(m.displacementMapUv),K.push(m.emissiveMapUv),K.push(m.metalnessMapUv),K.push(m.roughnessMapUv),K.push(m.anisotropyMapUv),K.push(m.clearcoatMapUv),K.push(m.clearcoatNormalMapUv),K.push(m.clearcoatRoughnessMapUv),K.push(m.iridescenceMapUv),K.push(m.iridescenceThicknessMapUv),K.push(m.sheenColorMapUv),K.push(m.sheenRoughnessMapUv),K.push(m.specularMapUv),K.push(m.specularColorMapUv),K.push(m.specularIntensityMapUv),K.push(m.transmissionMapUv),K.push(m.thicknessMapUv),K.push(m.combine),K.push(m.fogExp2),K.push(m.sizeAttenuation),K.push(m.morphTargetsCount),K.push(m.morphAttributeCount),K.push(m.numDirLights),K.push(m.numPointLights),K.push(m.numSpotLights),K.push(m.numSpotLightMaps),K.push(m.numHemiLights),K.push(m.numRectAreaLights),K.push(m.numDirLightShadows),K.push(m.numPointLightShadows),K.push(m.numSpotLightShadows),K.push(m.numSpotLightShadowsWithMaps),K.push(m.numLightProbes),K.push(m.shadowMapType),K.push(m.toneMapping),K.push(m.numClippingPlanes),K.push(m.numClipIntersection),K.push(m.depthPacking)}function J(K,m){t.disableAll(),m.isWebGL2&&t.enable(0),m.supportsVertexTextures&&t.enable(1),m.instancing&&t.enable(2),m.instancingColor&&t.enable(3),m.matcap&&t.enable(4),m.envMap&&t.enable(5),m.normalMapObjectSpace&&t.enable(6),m.normalMapTangentSpace&&t.enable(7),m.clearcoat&&t.enable(8),m.iridescence&&t.enable(9),m.alphaTest&&t.enable(10),m.vertexColors&&t.enable(11),m.vertexAlphas&&t.enable(12),m.vertexUv1s&&t.enable(13),m.vertexUv2s&&t.enable(14),m.vertexUv3s&&t.enable(15),m.vertexTangents&&t.enable(16),m.anisotropy&&t.enable(17),m.alphaHash&&t.enable(18),m.batching&&t.enable(19),K.push(t.mask),t.disableAll(),m.fog&&t.enable(0),m.useFog&&t.enable(1),m.flatShading&&t.enable(2),m.logarithmicDepthBuffer&&t.enable(3),m.skinning&&t.enable(4),m.morphTargets&&t.enable(5),m.morphNormals&&t.enable(6),m.morphColors&&t.enable(7),m.premultipliedAlpha&&t.enable(8),m.shadowMapEnabled&&t.enable(9),m.useLegacyLights&&t.enable(10),m.doubleSided&&t.enable(11),m.flipSided&&t.enable(12),m.useDepthPacking&&t.enable(13),m.dithering&&t.enable(14),m.transmission&&t.enable(15),m.sheen&&t.enable(16),m.opaque&&t.enable(17),m.pointsUvs&&t.enable(18),m.decodeVideoTexture&&t.enable(19),K.push(t.mask)}function u(K){const m=k[K.type];let eA;if(m){const hA=_g[m];eA=sa.clone(hA.uniforms)}else eA=K.uniforms;return eA}function x(K,m){let eA;for(let hA=0,wA=n.length;hA<wA;hA++){const Z=n[hA];if(Z.cacheKey===m){eA=Z,++eA.usedTimes;break}}return eA===void 0&&(eA=new U0(C,m,K,i),n.push(eA)),eA}function T(K){if(--K.usedTimes===0){const m=n.indexOf(K);n[m]=n[n.length-1],n.pop(),K.destroy()}}function V(K){a.remove(K)}function QA(){a.dispose()}return{getParameters:r,getProgramCacheKey:h,getUniforms:u,acquireProgram:x,releaseProgram:T,releaseShaderCache:V,programs:n,dispose:QA}}function J0(){let C=new WeakMap;function A(i){let D=C.get(i);return D===void 0&&(D={},C.set(i,D)),D}function I(i){C.delete(i)}function g(i,D,t){C.get(i)[D]=t}function Q(){C=new WeakMap}return{get:A,remove:I,update:g,dispose:Q}}function Y0(C,A){return C.groupOrder!==A.groupOrder?C.groupOrder-A.groupOrder:C.renderOrder!==A.renderOrder?C.renderOrder-A.renderOrder:C.material.id!==A.material.id?C.material.id-A.material.id:C.z!==A.z?C.z-A.z:C.id-A.id}function mo(C,A){return C.groupOrder!==A.groupOrder?C.groupOrder-A.groupOrder:C.renderOrder!==A.renderOrder?C.renderOrder-A.renderOrder:C.z!==A.z?A.z-C.z:C.id-A.id}function xo(){const C=[];let A=0;const I=[],g=[],Q=[];function i(){A=0,I.length=0,g.length=0,Q.length=0}function D(c,R,M,k,S,r){let h=C[A];return h===void 0?(h={id:c.id,object:c,geometry:R,material:M,groupOrder:k,renderOrder:c.renderOrder,z:S,group:r},C[A]=h):(h.id=c.id,h.object=c,h.geometry=R,h.material=M,h.groupOrder=k,h.renderOrder=c.renderOrder,h.z=S,h.group=r),A++,h}function t(c,R,M,k,S,r){const h=D(c,R,M,k,S,r);M.transmission>0?g.push(h):M.transparent===!0?Q.push(h):I.push(h)}function a(c,R,M,k,S,r){const h=D(c,R,M,k,S,r);M.transmission>0?g.unshift(h):M.transparent===!0?Q.unshift(h):I.unshift(h)}function n(c,R){I.length>1&&I.sort(c||Y0),g.length>1&&g.sort(R||mo),Q.length>1&&Q.sort(R||mo)}function w(){for(let c=A,R=C.length;c<R;c++){const M=C[c];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:I,transmissive:g,transparent:Q,init:i,push:t,unshift:a,finish:w,sort:n}}function L0(){let C=new WeakMap;function A(g,Q){const i=C.get(g);let D;return i===void 0?(D=new xo,C.set(g,[D])):Q>=i.length?(D=new xo,i.push(D)):D=i[Q],D}function I(){C=new WeakMap}return{get:A,dispose:I}}function f0(){const C={};return{get:function(A){if(C[A.id]!==void 0)return C[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new CA,color:new vI};break;case"SpotLight":I={position:new CA,direction:new CA,color:new vI,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new CA,color:new vI,distance:0,decay:0};break;case"HemisphereLight":I={direction:new CA,skyColor:new vI,groundColor:new vI};break;case"RectAreaLight":I={color:new vI,position:new CA,halfWidth:new CA,halfHeight:new CA};break}return C[A.id]=I,I}}}function H0(){const C={};return{get:function(A){if(C[A.id]!==void 0)return C[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jI};break;case"SpotLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jI};break;case"PointLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jI,shadowCameraNear:1,shadowCameraFar:1e3};break}return C[A.id]=I,I}}}let u0=0;function p0(C,A){return(A.castShadow?2:0)-(C.castShadow?2:0)+(A.map?1:0)-(C.map?1:0)}function q0(C,A){const I=new f0,g=H0(),Q={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let w=0;w<9;w++)Q.probe.push(new CA);const i=new CA,D=new ag,t=new ag;function a(w,c){let R=0,M=0,k=0;for(let hA=0;hA<9;hA++)Q.probe[hA].set(0,0,0);let S=0,r=0,h=0,H=0,J=0,u=0,x=0,T=0,V=0,QA=0,K=0;w.sort(p0);const m=c===!0?Math.PI:1;for(let hA=0,wA=w.length;hA<wA;hA++){const Z=w[hA],EA=Z.color,GA=Z.intensity,DA=Z.distance,dA=Z.shadow&&Z.shadow.map?Z.shadow.map.texture:null;if(Z.isAmbientLight)R+=EA.r*GA*m,M+=EA.g*GA*m,k+=EA.b*GA*m;else if(Z.isLightProbe){for(let RA=0;RA<9;RA++)Q.probe[RA].addScaledVector(Z.sh.coefficients[RA],GA);K++}else if(Z.isDirectionalLight){const RA=I.get(Z);if(RA.color.copy(Z.color).multiplyScalar(Z.intensity*m),Z.castShadow){const rA=Z.shadow,JA=g.get(Z);JA.shadowBias=rA.bias,JA.shadowNormalBias=rA.normalBias,JA.shadowRadius=rA.radius,JA.shadowMapSize=rA.mapSize,Q.directionalShadow[S]=JA,Q.directionalShadowMap[S]=dA,Q.directionalShadowMatrix[S]=Z.shadow.matrix,u++}Q.directional[S]=RA,S++}else if(Z.isSpotLight){const RA=I.get(Z);RA.position.setFromMatrixPosition(Z.matrixWorld),RA.color.copy(EA).multiplyScalar(GA*m),RA.distance=DA,RA.coneCos=Math.cos(Z.angle),RA.penumbraCos=Math.cos(Z.angle*(1-Z.penumbra)),RA.decay=Z.decay,Q.spot[h]=RA;const rA=Z.shadow;if(Z.map&&(Q.spotLightMap[V]=Z.map,V++,rA.updateMatrices(Z),Z.castShadow&&QA++),Q.spotLightMatrix[h]=rA.matrix,Z.castShadow){const JA=g.get(Z);JA.shadowBias=rA.bias,JA.shadowNormalBias=rA.normalBias,JA.shadowRadius=rA.radius,JA.shadowMapSize=rA.mapSize,Q.spotShadow[h]=JA,Q.spotShadowMap[h]=dA,T++}h++}else if(Z.isRectAreaLight){const RA=I.get(Z);RA.color.copy(EA).multiplyScalar(GA),RA.halfWidth.set(Z.width*.5,0,0),RA.halfHeight.set(0,Z.height*.5,0),Q.rectArea[H]=RA,H++}else if(Z.isPointLight){const RA=I.get(Z);if(RA.color.copy(Z.color).multiplyScalar(Z.intensity*m),RA.distance=Z.distance,RA.decay=Z.decay,Z.castShadow){const rA=Z.shadow,JA=g.get(Z);JA.shadowBias=rA.bias,JA.shadowNormalBias=rA.normalBias,JA.shadowRadius=rA.radius,JA.shadowMapSize=rA.mapSize,JA.shadowCameraNear=rA.camera.near,JA.shadowCameraFar=rA.camera.far,Q.pointShadow[r]=JA,Q.pointShadowMap[r]=dA,Q.pointShadowMatrix[r]=Z.shadow.matrix,x++}Q.point[r]=RA,r++}else if(Z.isHemisphereLight){const RA=I.get(Z);RA.skyColor.copy(Z.color).multiplyScalar(GA*m),RA.groundColor.copy(Z.groundColor).multiplyScalar(GA*m),Q.hemi[J]=RA,J++}}H>0&&(A.isWebGL2||C.has("OES_texture_float_linear")===!0?(Q.rectAreaLTC1=uA.LTC_FLOAT_1,Q.rectAreaLTC2=uA.LTC_FLOAT_2):C.has("OES_texture_half_float_linear")===!0?(Q.rectAreaLTC1=uA.LTC_HALF_1,Q.rectAreaLTC2=uA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),Q.ambient[0]=R,Q.ambient[1]=M,Q.ambient[2]=k;const eA=Q.hash;(eA.directionalLength!==S||eA.pointLength!==r||eA.spotLength!==h||eA.rectAreaLength!==H||eA.hemiLength!==J||eA.numDirectionalShadows!==u||eA.numPointShadows!==x||eA.numSpotShadows!==T||eA.numSpotMaps!==V||eA.numLightProbes!==K)&&(Q.directional.length=S,Q.spot.length=h,Q.rectArea.length=H,Q.point.length=r,Q.hemi.length=J,Q.directionalShadow.length=u,Q.directionalShadowMap.length=u,Q.pointShadow.length=x,Q.pointShadowMap.length=x,Q.spotShadow.length=T,Q.spotShadowMap.length=T,Q.directionalShadowMatrix.length=u,Q.pointShadowMatrix.length=x,Q.spotLightMatrix.length=T+V-QA,Q.spotLightMap.length=V,Q.numSpotLightShadowsWithMaps=QA,Q.numLightProbes=K,eA.directionalLength=S,eA.pointLength=r,eA.spotLength=h,eA.rectAreaLength=H,eA.hemiLength=J,eA.numDirectionalShadows=u,eA.numPointShadows=x,eA.numSpotShadows=T,eA.numSpotMaps=V,eA.numLightProbes=K,Q.version=u0++)}function n(w,c){let R=0,M=0,k=0,S=0,r=0;const h=c.matrixWorldInverse;for(let H=0,J=w.length;H<J;H++){const u=w[H];if(u.isDirectionalLight){const x=Q.directional[R];x.direction.setFromMatrixPosition(u.matrixWorld),i.setFromMatrixPosition(u.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(h),R++}else if(u.isSpotLight){const x=Q.spot[k];x.position.setFromMatrixPosition(u.matrixWorld),x.position.applyMatrix4(h),x.direction.setFromMatrixPosition(u.matrixWorld),i.setFromMatrixPosition(u.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(h),k++}else if(u.isRectAreaLight){const x=Q.rectArea[S];x.position.setFromMatrixPosition(u.matrixWorld),x.position.applyMatrix4(h),t.identity(),D.copy(u.matrixWorld),D.premultiply(h),t.extractRotation(D),x.halfWidth.set(u.width*.5,0,0),x.halfHeight.set(0,u.height*.5,0),x.halfWidth.applyMatrix4(t),x.halfHeight.applyMatrix4(t),S++}else if(u.isPointLight){const x=Q.point[M];x.position.setFromMatrixPosition(u.matrixWorld),x.position.applyMatrix4(h),M++}else if(u.isHemisphereLight){const x=Q.hemi[r];x.direction.setFromMatrixPosition(u.matrixWorld),x.direction.transformDirection(h),r++}}}return{setup:a,setupView:n,state:Q}}function bo(C,A){const I=new q0(C,A),g=[],Q=[];function i(){g.length=0,Q.length=0}function D(c){g.push(c)}function t(c){Q.push(c)}function a(c){I.setup(g,c)}function n(c){I.setupView(g,c)}return{init:i,state:{lightsArray:g,shadowsArray:Q,lights:I},setupLights:a,setupLightsView:n,pushLight:D,pushShadow:t}}function m0(C,A){let I=new WeakMap;function g(i,D=0){const t=I.get(i);let a;return t===void 0?(a=new bo(C,A),I.set(i,[a])):D>=t.length?(a=new bo(C,A),t.push(a)):a=t[D],a}function Q(){I=new WeakMap}return{get:g,dispose:Q}}class x0 extends vB{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hs,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class b0 extends vB{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const T0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function W0(C,A,I){let g=new rt;const Q=new jI,i=new jI,D=new Fg,t=new x0({depthPacking:us}),a=new b0,n={},w=I.maxTextureSize,c={[lC]:kg,[kg]:lC,[oC]:oC},R=new vC({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jI},radius:{value:4}},vertexShader:T0,fragmentShader:V0}),M=R.clone();M.defines.HORIZONTAL_PASS=1;const k=new kC;k.setAttribute("position",new Pg(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Hg(k,R),r=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xo;let h=this.type;this.render=function(x,T,V){if(r.enabled===!1||r.autoUpdate===!1&&r.needsUpdate===!1||x.length===0)return;const QA=C.getRenderTarget(),K=C.getActiveCubeFace(),m=C.getActiveMipmapLevel(),eA=C.state;eA.setBlending(MC),eA.buffers.color.setClear(1,1,1,1),eA.buffers.depth.setTest(!0),eA.setScissorTest(!1);const hA=h!==iC&&this.type===iC,wA=h===iC&&this.type!==iC;for(let Z=0,EA=x.length;Z<EA;Z++){const GA=x[Z],DA=GA.shadow;if(DA===void 0){console.warn("THREE.WebGLShadowMap:",GA,"has no shadow.");continue}if(DA.autoUpdate===!1&&DA.needsUpdate===!1)continue;Q.copy(DA.mapSize);const dA=DA.getFrameExtents();if(Q.multiply(dA),i.copy(DA.mapSize),(Q.x>w||Q.y>w)&&(Q.x>w&&(i.x=Math.floor(w/dA.x),Q.x=i.x*dA.x,DA.mapSize.x=i.x),Q.y>w&&(i.y=Math.floor(w/dA.y),Q.y=i.y*dA.y,DA.mapSize.y=i.y)),DA.map===null||hA===!0||wA===!0){const rA=this.type!==iC?{minFilter:Sg,magFilter:Sg}:{};DA.map!==null&&DA.map.dispose(),DA.map=new OC(Q.x,Q.y,rA),DA.map.texture.name=GA.name+".shadowMap",DA.camera.updateProjectionMatrix()}C.setRenderTarget(DA.map),C.clear();const RA=DA.getViewportCount();for(let rA=0;rA<RA;rA++){const JA=DA.getViewport(rA);D.set(i.x*JA.x,i.y*JA.y,i.x*JA.z,i.y*JA.w),eA.viewport(D),DA.updateMatrices(GA,rA),g=DA.getFrustum(),u(T,V,DA.camera,GA,this.type)}DA.isPointLightShadow!==!0&&this.type===iC&&H(DA,V),DA.needsUpdate=!1}h=this.type,r.needsUpdate=!1,C.setRenderTarget(QA,K,m)};function H(x,T){const V=A.update(S);R.defines.VSM_SAMPLES!==x.blurSamples&&(R.defines.VSM_SAMPLES=x.blurSamples,M.defines.VSM_SAMPLES=x.blurSamples,R.needsUpdate=!0,M.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new OC(Q.x,Q.y)),R.uniforms.shadow_pass.value=x.map.texture,R.uniforms.resolution.value=x.mapSize,R.uniforms.radius.value=x.radius,C.setRenderTarget(x.mapPass),C.clear(),C.renderBufferDirect(T,null,V,R,S,null),M.uniforms.shadow_pass.value=x.mapPass.texture,M.uniforms.resolution.value=x.mapSize,M.uniforms.radius.value=x.radius,C.setRenderTarget(x.map),C.clear(),C.renderBufferDirect(T,null,V,M,S,null)}function J(x,T,V,QA){let K=null;const m=V.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(m!==void 0)K=m;else if(K=V.isPointLight===!0?a:t,C.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const eA=K.uuid,hA=T.uuid;let wA=n[eA];wA===void 0&&(wA={},n[eA]=wA);let Z=wA[hA];Z===void 0&&(Z=K.clone(),wA[hA]=Z),K=Z}if(K.visible=T.visible,K.wireframe=T.wireframe,QA===iC?K.side=T.shadowSide!==null?T.shadowSide:T.side:K.side=T.shadowSide!==null?T.shadowSide:c[T.side],K.alphaMap=T.alphaMap,K.alphaTest=T.alphaTest,K.map=T.map,K.clipShadows=T.clipShadows,K.clippingPlanes=T.clippingPlanes,K.clipIntersection=T.clipIntersection,K.displacementMap=T.displacementMap,K.displacementScale=T.displacementScale,K.displacementBias=T.displacementBias,K.wireframeLinewidth=T.wireframeLinewidth,K.linewidth=T.linewidth,V.isPointLight===!0&&K.isMeshDistanceMaterial===!0){const eA=C.properties.get(K);eA.light=V}return K}function u(x,T,V,QA,K){if(x.visible===!1)return;if(x.layers.test(T.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&K===iC)&&(!x.frustumCulled||g.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,x.matrixWorld);const hA=A.update(x),wA=x.material;if(Array.isArray(wA)){const Z=hA.groups;for(let EA=0,GA=Z.length;EA<GA;EA++){const DA=Z[EA],dA=wA[DA.materialIndex];if(dA&&dA.visible){const RA=J(x,dA,QA,K);x.onBeforeShadow(C,x,T,V,hA,RA,DA),C.renderBufferDirect(V,null,hA,RA,x,DA),x.onAfterShadow(C,x,T,V,hA,RA,DA)}}}else if(wA.visible){const Z=J(x,wA,QA,K);x.onBeforeShadow(C,x,T,V,hA,Z,null),C.renderBufferDirect(V,null,hA,Z,x,null),x.onAfterShadow(C,x,T,V,hA,Z,null)}}const eA=x.children;for(let hA=0,wA=eA.length;hA<wA;hA++)u(eA[hA],T,V,QA,K)}}function Z0(C,A,I){const g=I.isWebGL2;function Q(){let b=!1;const fA=new Fg;let nA=null;const X=new Fg(0,0,0,0);return{setMask:function(kA){nA!==kA&&!b&&(C.colorMask(kA,kA,kA,kA),nA=kA)},setLocked:function(kA){b=kA},setClear:function(kA,XA,JI,W,zI){zI===!0&&(kA*=W,XA*=W,JI*=W),fA.set(kA,XA,JI,W),X.equals(fA)===!1&&(C.clearColor(kA,XA,JI,W),X.copy(fA))},reset:function(){b=!1,nA=null,X.set(-1,0,0,0)}}}function i(){let b=!1,fA=null,nA=null,X=null;return{setTest:function(kA){kA?xA(C.DEPTH_TEST):TA(C.DEPTH_TEST)},setMask:function(kA){fA!==kA&&!b&&(C.depthMask(kA),fA=kA)},setFunc:function(kA){if(nA!==kA){switch(kA){case as:C.depthFunc(C.NEVER);break;case es:C.depthFunc(C.ALWAYS);break;case ns:C.depthFunc(C.LESS);break;case HQ:C.depthFunc(C.LEQUAL);break;case hs:C.depthFunc(C.EQUAL);break;case ws:C.depthFunc(C.GEQUAL);break;case Gs:C.depthFunc(C.GREATER);break;case rs:C.depthFunc(C.NOTEQUAL);break;default:C.depthFunc(C.LEQUAL)}nA=kA}},setLocked:function(kA){b=kA},setClear:function(kA){X!==kA&&(C.clearDepth(kA),X=kA)},reset:function(){b=!1,fA=null,nA=null,X=null}}}function D(){let b=!1,fA=null,nA=null,X=null,kA=null,XA=null,JI=null,W=null,zI=null;return{setTest:function(sI){b||(sI?xA(C.STENCIL_TEST):TA(C.STENCIL_TEST))},setMask:function(sI){fA!==sI&&!b&&(C.stencilMask(sI),fA=sI)},setFunc:function(sI,Ag,tg){(nA!==sI||X!==Ag||kA!==tg)&&(C.stencilFunc(sI,Ag,tg),nA=sI,X=Ag,kA=tg)},setOp:function(sI,Ag,tg){(XA!==sI||JI!==Ag||W!==tg)&&(C.stencilOp(sI,Ag,tg),XA=sI,JI=Ag,W=tg)},setLocked:function(sI){b=sI},setClear:function(sI){zI!==sI&&(C.clearStencil(sI),zI=sI)},reset:function(){b=!1,fA=null,nA=null,X=null,kA=null,XA=null,JI=null,W=null,zI=null}}}const t=new Q,a=new i,n=new D,w=new WeakMap,c=new WeakMap;let R={},M={},k=new WeakMap,S=[],r=null,h=!1,H=null,J=null,u=null,x=null,T=null,V=null,QA=null,K=new vI(0,0,0),m=0,eA=!1,hA=null,wA=null,Z=null,EA=null,GA=null;const DA=C.getParameter(C.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let dA=!1,RA=0;const rA=C.getParameter(C.VERSION);rA.indexOf("WebGL")!==-1?(RA=parseFloat(/^WebGL (\d)/.exec(rA)[1]),dA=RA>=1):rA.indexOf("OpenGL ES")!==-1&&(RA=parseFloat(/^OpenGL ES (\d)/.exec(rA)[1]),dA=RA>=2);let JA=null,LA={};const iA=C.getParameter(C.SCISSOR_BOX),cA=C.getParameter(C.VIEWPORT),mA=new Fg().fromArray(iA),PA=new Fg().fromArray(cA);function jA(b,fA,nA,X){const kA=new Uint8Array(4),XA=C.createTexture();C.bindTexture(b,XA),C.texParameteri(b,C.TEXTURE_MIN_FILTER,C.NEAREST),C.texParameteri(b,C.TEXTURE_MAG_FILTER,C.NEAREST);for(let JI=0;JI<nA;JI++)g&&(b===C.TEXTURE_3D||b===C.TEXTURE_2D_ARRAY)?C.texImage3D(fA,0,C.RGBA,1,1,X,0,C.RGBA,C.UNSIGNED_BYTE,kA):C.texImage2D(fA+JI,0,C.RGBA,1,1,0,C.RGBA,C.UNSIGNED_BYTE,kA);return XA}const DI={};DI[C.TEXTURE_2D]=jA(C.TEXTURE_2D,C.TEXTURE_2D,1),DI[C.TEXTURE_CUBE_MAP]=jA(C.TEXTURE_CUBE_MAP,C.TEXTURE_CUBE_MAP_POSITIVE_X,6),g&&(DI[C.TEXTURE_2D_ARRAY]=jA(C.TEXTURE_2D_ARRAY,C.TEXTURE_2D_ARRAY,1,1),DI[C.TEXTURE_3D]=jA(C.TEXTURE_3D,C.TEXTURE_3D,1,1)),t.setClear(0,0,0,1),a.setClear(1),n.setClear(0),xA(C.DEPTH_TEST),a.setFunc(HQ),CI(!1),iI(Ri),xA(C.CULL_FACE),zA(MC);function xA(b){R[b]!==!0&&(C.enable(b),R[b]=!0)}function TA(b){R[b]!==!1&&(C.disable(b),R[b]=!1)}function gI(b,fA){return M[b]!==fA?(C.bindFramebuffer(b,fA),M[b]=fA,g&&(b===C.DRAW_FRAMEBUFFER&&(M[C.FRAMEBUFFER]=fA),b===C.FRAMEBUFFER&&(M[C.DRAW_FRAMEBUFFER]=fA)),!0):!1}function z(b,fA){let nA=S,X=!1;if(b)if(nA=k.get(fA),nA===void 0&&(nA=[],k.set(fA,nA)),b.isWebGLMultipleRenderTargets){const kA=b.texture;if(nA.length!==kA.length||nA[0]!==C.COLOR_ATTACHMENT0){for(let XA=0,JI=kA.length;XA<JI;XA++)nA[XA]=C.COLOR_ATTACHMENT0+XA;nA.length=kA.length,X=!0}}else nA[0]!==C.COLOR_ATTACHMENT0&&(nA[0]=C.COLOR_ATTACHMENT0,X=!0);else nA[0]!==C.BACK&&(nA[0]=C.BACK,X=!0);X&&(I.isWebGL2?C.drawBuffers(nA):A.get("WEBGL_draw_buffers").drawBuffersWEBGL(nA))}function KA(b){return r!==b?(C.useProgram(b),r=b,!0):!1}const WA={[bC]:C.FUNC_ADD,[zD]:C.FUNC_SUBTRACT,[_D]:C.FUNC_REVERSE_SUBTRACT};if(g)WA[Si]=C.MIN,WA[Ui]=C.MAX;else{const b=A.get("EXT_blend_minmax");b!==null&&(WA[Si]=b.MIN_EXT,WA[Ui]=b.MAX_EXT)}const rI={[$D]:C.ZERO,[As]:C.ONE,[Is]:C.SRC_COLOR,[uE]:C.SRC_ALPHA,[is]:C.SRC_ALPHA_SATURATE,[Qs]:C.DST_COLOR,[Cs]:C.DST_ALPHA,[gs]:C.ONE_MINUS_SRC_COLOR,[pE]:C.ONE_MINUS_SRC_ALPHA,[Es]:C.ONE_MINUS_DST_COLOR,[Bs]:C.ONE_MINUS_DST_ALPHA,[os]:C.CONSTANT_COLOR,[ts]:C.ONE_MINUS_CONSTANT_COLOR,[Ds]:C.CONSTANT_ALPHA,[ss]:C.ONE_MINUS_CONSTANT_ALPHA};function zA(b,fA,nA,X,kA,XA,JI,W,zI,sI){if(b===MC){h===!0&&(TA(C.BLEND),h=!1);return}if(h===!1&&(xA(C.BLEND),h=!0),b!==jD){if(b!==H||sI!==eA){if((J!==bC||T!==bC)&&(C.blendEquation(C.FUNC_ADD),J=bC,T=bC),sI)switch(b){case rB:C.blendFuncSeparate(C.ONE,C.ONE_MINUS_SRC_ALPHA,C.ONE,C.ONE_MINUS_SRC_ALPHA);break;case Ni:C.blendFunc(C.ONE,C.ONE);break;case yi:C.blendFuncSeparate(C.ZERO,C.ONE_MINUS_SRC_COLOR,C.ZERO,C.ONE);break;case Mi:C.blendFuncSeparate(C.ZERO,C.SRC_COLOR,C.ZERO,C.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case rB:C.blendFuncSeparate(C.SRC_ALPHA,C.ONE_MINUS_SRC_ALPHA,C.ONE,C.ONE_MINUS_SRC_ALPHA);break;case Ni:C.blendFunc(C.SRC_ALPHA,C.ONE);break;case yi:C.blendFuncSeparate(C.ZERO,C.ONE_MINUS_SRC_COLOR,C.ZERO,C.ONE);break;case Mi:C.blendFunc(C.ZERO,C.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}u=null,x=null,V=null,QA=null,K.set(0,0,0),m=0,H=b,eA=sI}return}kA=kA||fA,XA=XA||nA,JI=JI||X,(fA!==J||kA!==T)&&(C.blendEquationSeparate(WA[fA],WA[kA]),J=fA,T=kA),(nA!==u||X!==x||XA!==V||JI!==QA)&&(C.blendFuncSeparate(rI[nA],rI[X],rI[XA],rI[JI]),u=nA,x=X,V=XA,QA=JI),(W.equals(K)===!1||zI!==m)&&(C.blendColor(W.r,W.g,W.b,zI),K.copy(W),m=zI),H=b,eA=!1}function TI(b,fA){b.side===oC?TA(C.CULL_FACE):xA(C.CULL_FACE);let nA=b.side===kg;fA&&(nA=!nA),CI(nA),b.blending===rB&&b.transparent===!1?zA(MC):zA(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),a.setFunc(b.depthFunc),a.setTest(b.depthTest),a.setMask(b.depthWrite),t.setMask(b.colorWrite);const X=b.stencilWrite;n.setTest(X),X&&(n.setMask(b.stencilWriteMask),n.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),n.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),VI(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?xA(C.SAMPLE_ALPHA_TO_COVERAGE):TA(C.SAMPLE_ALPHA_TO_COVERAGE)}function CI(b){hA!==b&&(b?C.frontFace(C.CW):C.frontFace(C.CCW),hA=b)}function iI(b){b!==vD?(xA(C.CULL_FACE),b!==wA&&(b===Ri?C.cullFace(C.BACK):b===XD?C.cullFace(C.FRONT):C.cullFace(C.FRONT_AND_BACK))):TA(C.CULL_FACE),wA=b}function uI(b){b!==Z&&(dA&&C.lineWidth(b),Z=b)}function VI(b,fA,nA){b?(xA(C.POLYGON_OFFSET_FILL),(EA!==fA||GA!==nA)&&(C.polygonOffset(fA,nA),EA=fA,GA=nA)):TA(C.POLYGON_OFFSET_FILL)}function Bg(b){b?xA(C.SCISSOR_TEST):TA(C.SCISSOR_TEST)}function q(b){b===void 0&&(b=C.TEXTURE0+DA-1),JA!==b&&(C.activeTexture(b),JA=b)}function l(b,fA,nA){nA===void 0&&(JA===null?nA=C.TEXTURE0+DA-1:nA=JA);let X=LA[nA];X===void 0&&(X={type:void 0,texture:void 0},LA[nA]=X),(X.type!==b||X.texture!==fA)&&(JA!==nA&&(C.activeTexture(nA),JA=nA),C.bindTexture(b,fA||DI[b]),X.type=b,X.texture=fA)}function $(){const b=LA[JA];b!==void 0&&b.type!==void 0&&(C.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function SA(){try{C.compressedTexImage2D.apply(C,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function yA(){try{C.compressedTexImage3D.apply(C,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function NA(){try{C.texSubImage2D.apply(C,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ZA(){try{C.texSubImage3D.apply(C,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function lA(){try{C.compressedTexSubImage2D.apply(C,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function pA(){try{C.compressedTexSubImage3D.apply(C,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function QI(){try{C.texStorage2D.apply(C,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function oI(){try{C.texStorage3D.apply(C,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function MA(){try{C.texImage2D.apply(C,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function xI(){try{C.texImage3D.apply(C,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function OA(b){mA.equals(b)===!1&&(C.scissor(b.x,b.y,b.z,b.w),mA.copy(b))}function EI(b){PA.equals(b)===!1&&(C.viewport(b.x,b.y,b.z,b.w),PA.copy(b))}function _A(b,fA){let nA=c.get(fA);nA===void 0&&(nA=new WeakMap,c.set(fA,nA));let X=nA.get(b);X===void 0&&(X=C.getUniformBlockIndex(fA,b.name),nA.set(b,X))}function FA(b,fA){const X=c.get(fA).get(b);w.get(fA)!==X&&(C.uniformBlockBinding(fA,X,b.__bindingPointIndex),w.set(fA,X))}function FI(){C.disable(C.BLEND),C.disable(C.CULL_FACE),C.disable(C.DEPTH_TEST),C.disable(C.POLYGON_OFFSET_FILL),C.disable(C.SCISSOR_TEST),C.disable(C.STENCIL_TEST),C.disable(C.SAMPLE_ALPHA_TO_COVERAGE),C.blendEquation(C.FUNC_ADD),C.blendFunc(C.ONE,C.ZERO),C.blendFuncSeparate(C.ONE,C.ZERO,C.ONE,C.ZERO),C.blendColor(0,0,0,0),C.colorMask(!0,!0,!0,!0),C.clearColor(0,0,0,0),C.depthMask(!0),C.depthFunc(C.LESS),C.clearDepth(1),C.stencilMask(4294967295),C.stencilFunc(C.ALWAYS,0,4294967295),C.stencilOp(C.KEEP,C.KEEP,C.KEEP),C.clearStencil(0),C.cullFace(C.BACK),C.frontFace(C.CCW),C.polygonOffset(0,0),C.activeTexture(C.TEXTURE0),C.bindFramebuffer(C.FRAMEBUFFER,null),g===!0&&(C.bindFramebuffer(C.DRAW_FRAMEBUFFER,null),C.bindFramebuffer(C.READ_FRAMEBUFFER,null)),C.useProgram(null),C.lineWidth(1),C.scissor(0,0,C.canvas.width,C.canvas.height),C.viewport(0,0,C.canvas.width,C.canvas.height),R={},JA=null,LA={},M={},k=new WeakMap,S=[],r=null,h=!1,H=null,J=null,u=null,x=null,T=null,V=null,QA=null,K=new vI(0,0,0),m=0,eA=!1,hA=null,wA=null,Z=null,EA=null,GA=null,mA.set(0,0,C.canvas.width,C.canvas.height),PA.set(0,0,C.canvas.width,C.canvas.height),t.reset(),a.reset(),n.reset()}return{buffers:{color:t,depth:a,stencil:n},enable:xA,disable:TA,bindFramebuffer:gI,drawBuffers:z,useProgram:KA,setBlending:zA,setMaterial:TI,setFlipSided:CI,setCullFace:iI,setLineWidth:uI,setPolygonOffset:VI,setScissorTest:Bg,activeTexture:q,bindTexture:l,unbindTexture:$,compressedTexImage2D:SA,compressedTexImage3D:yA,texImage2D:MA,texImage3D:xI,updateUBOMapping:_A,uniformBlockBinding:FA,texStorage2D:QI,texStorage3D:oI,texSubImage2D:NA,texSubImage3D:ZA,compressedTexSubImage2D:lA,compressedTexSubImage3D:pA,scissor:OA,viewport:EI,reset:FI}}function O0(C,A,I,g,Q,i,D){const t=Q.isWebGL2,a=Q.maxTextures,n=Q.maxCubemapSize,w=Q.maxTextureSize,c=Q.maxSamples,R=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,M=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),k=new WeakMap;let S;const r=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function H(q,l){return h?new OffscreenCanvas(q,l):WB("canvas")}function J(q,l,$,SA){let yA=1;if((q.width>SA||q.height>SA)&&(yA=SA/Math.max(q.width,q.height)),yA<1||l===!0)if(typeof HTMLImageElement<"u"&&q instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&q instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&q instanceof ImageBitmap){const NA=l?WE:Math.floor,ZA=NA(yA*q.width),lA=NA(yA*q.height);S===void 0&&(S=H(ZA,lA));const pA=$?H(ZA,lA):S;return pA.width=ZA,pA.height=lA,pA.getContext("2d").drawImage(q,0,0,ZA,lA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+ZA+"x"+lA+")."),pA}else return"data"in q&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),q;return q}function u(q){return go(q.width)&&go(q.height)}function x(q){return t?!1:q.wrapS!==vg||q.wrapT!==vg||q.minFilter!==Sg&&q.minFilter!==xg}function T(q,l){return q.generateMipmaps&&l&&q.minFilter!==Sg&&q.minFilter!==xg}function V(q){C.generateMipmap(q)}function QA(q,l,$,SA,yA=!1){if(t===!1)return l;if(q!==null){if(C[q]!==void 0)return C[q];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+q+"'")}let NA=l;if(l===C.RED&&($===C.FLOAT&&(NA=C.R32F),$===C.HALF_FLOAT&&(NA=C.R16F),$===C.UNSIGNED_BYTE&&(NA=C.R8)),l===C.RED_INTEGER&&($===C.UNSIGNED_BYTE&&(NA=C.R8UI),$===C.UNSIGNED_SHORT&&(NA=C.R16UI),$===C.UNSIGNED_INT&&(NA=C.R32UI),$===C.BYTE&&(NA=C.R8I),$===C.SHORT&&(NA=C.R16I),$===C.INT&&(NA=C.R32I)),l===C.RG&&($===C.FLOAT&&(NA=C.RG32F),$===C.HALF_FLOAT&&(NA=C.RG16F),$===C.UNSIGNED_BYTE&&(NA=C.RG8)),l===C.RGBA){const ZA=yA?uQ:_I.getTransfer(SA);$===C.FLOAT&&(NA=C.RGBA32F),$===C.HALF_FLOAT&&(NA=C.RGBA16F),$===C.UNSIGNED_BYTE&&(NA=ZA===Ig?C.SRGB8_ALPHA8:C.RGBA8),$===C.UNSIGNED_SHORT_4_4_4_4&&(NA=C.RGBA4),$===C.UNSIGNED_SHORT_5_5_5_1&&(NA=C.RGB5_A1)}return(NA===C.R16F||NA===C.R32F||NA===C.RG16F||NA===C.RG32F||NA===C.RGBA16F||NA===C.RGBA32F)&&A.get("EXT_color_buffer_float"),NA}function K(q,l,$){return T(q,$)===!0||q.isFramebufferTexture&&q.minFilter!==Sg&&q.minFilter!==xg?Math.log2(Math.max(l.width,l.height))+1:q.mipmaps!==void 0&&q.mipmaps.length>0?q.mipmaps.length:q.isCompressedTexture&&Array.isArray(q.image)?l.mipmaps.length:1}function m(q){return q===Sg||q===Ki||q===gE?C.NEAREST:C.LINEAR}function eA(q){const l=q.target;l.removeEventListener("dispose",eA),wA(l),l.isVideoTexture&&k.delete(l)}function hA(q){const l=q.target;l.removeEventListener("dispose",hA),EA(l)}function wA(q){const l=g.get(q);if(l.__webglInit===void 0)return;const $=q.source,SA=r.get($);if(SA){const yA=SA[l.__cacheKey];yA.usedTimes--,yA.usedTimes===0&&Z(q),Object.keys(SA).length===0&&r.delete($)}g.remove(q)}function Z(q){const l=g.get(q);C.deleteTexture(l.__webglTexture);const $=q.source,SA=r.get($);delete SA[l.__cacheKey],D.memory.textures--}function EA(q){const l=q.texture,$=g.get(q),SA=g.get(l);if(SA.__webglTexture!==void 0&&(C.deleteTexture(SA.__webglTexture),D.memory.textures--),q.depthTexture&&q.depthTexture.dispose(),q.isWebGLCubeRenderTarget)for(let yA=0;yA<6;yA++){if(Array.isArray($.__webglFramebuffer[yA]))for(let NA=0;NA<$.__webglFramebuffer[yA].length;NA++)C.deleteFramebuffer($.__webglFramebuffer[yA][NA]);else C.deleteFramebuffer($.__webglFramebuffer[yA]);$.__webglDepthbuffer&&C.deleteRenderbuffer($.__webglDepthbuffer[yA])}else{if(Array.isArray($.__webglFramebuffer))for(let yA=0;yA<$.__webglFramebuffer.length;yA++)C.deleteFramebuffer($.__webglFramebuffer[yA]);else C.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&C.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&C.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let yA=0;yA<$.__webglColorRenderbuffer.length;yA++)$.__webglColorRenderbuffer[yA]&&C.deleteRenderbuffer($.__webglColorRenderbuffer[yA]);$.__webglDepthRenderbuffer&&C.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(q.isWebGLMultipleRenderTargets)for(let yA=0,NA=l.length;yA<NA;yA++){const ZA=g.get(l[yA]);ZA.__webglTexture&&(C.deleteTexture(ZA.__webglTexture),D.memory.textures--),g.remove(l[yA])}g.remove(l),g.remove(q)}let GA=0;function DA(){GA=0}function dA(){const q=GA;return q>=a&&console.warn("THREE.WebGLTextures: Trying to use "+q+" texture units while this GPU supports only "+a),GA+=1,q}function RA(q){const l=[];return l.push(q.wrapS),l.push(q.wrapT),l.push(q.wrapR||0),l.push(q.magFilter),l.push(q.minFilter),l.push(q.anisotropy),l.push(q.internalFormat),l.push(q.format),l.push(q.type),l.push(q.generateMipmaps),l.push(q.premultiplyAlpha),l.push(q.flipY),l.push(q.unpackAlignment),l.push(q.colorSpace),l.join()}function rA(q,l){const $=g.get(q);if(q.isVideoTexture&&VI(q),q.isRenderTargetTexture===!1&&q.version>0&&$.__version!==q.version){const SA=q.image;if(SA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(SA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xA($,q,l);return}}I.bindTexture(C.TEXTURE_2D,$.__webglTexture,C.TEXTURE0+l)}function JA(q,l){const $=g.get(q);if(q.version>0&&$.__version!==q.version){xA($,q,l);return}I.bindTexture(C.TEXTURE_2D_ARRAY,$.__webglTexture,C.TEXTURE0+l)}function LA(q,l){const $=g.get(q);if(q.version>0&&$.__version!==q.version){xA($,q,l);return}I.bindTexture(C.TEXTURE_3D,$.__webglTexture,C.TEXTURE0+l)}function iA(q,l){const $=g.get(q);if(q.version>0&&$.__version!==q.version){TA($,q,l);return}I.bindTexture(C.TEXTURE_CUBE_MAP,$.__webglTexture,C.TEXTURE0+l)}const cA={[xE]:C.REPEAT,[vg]:C.CLAMP_TO_EDGE,[bE]:C.MIRRORED_REPEAT},mA={[Sg]:C.NEAREST,[Ki]:C.NEAREST_MIPMAP_NEAREST,[gE]:C.NEAREST_MIPMAP_LINEAR,[xg]:C.LINEAR,[Us]:C.LINEAR_MIPMAP_NEAREST,[TB]:C.LINEAR_MIPMAP_LINEAR},PA={[qs]:C.NEVER,[Ws]:C.ALWAYS,[ms]:C.LESS,[Et]:C.LEQUAL,[xs]:C.EQUAL,[Vs]:C.GEQUAL,[bs]:C.GREATER,[Ts]:C.NOTEQUAL};function jA(q,l,$){if($?(C.texParameteri(q,C.TEXTURE_WRAP_S,cA[l.wrapS]),C.texParameteri(q,C.TEXTURE_WRAP_T,cA[l.wrapT]),(q===C.TEXTURE_3D||q===C.TEXTURE_2D_ARRAY)&&C.texParameteri(q,C.TEXTURE_WRAP_R,cA[l.wrapR]),C.texParameteri(q,C.TEXTURE_MAG_FILTER,mA[l.magFilter]),C.texParameteri(q,C.TEXTURE_MIN_FILTER,mA[l.minFilter])):(C.texParameteri(q,C.TEXTURE_WRAP_S,C.CLAMP_TO_EDGE),C.texParameteri(q,C.TEXTURE_WRAP_T,C.CLAMP_TO_EDGE),(q===C.TEXTURE_3D||q===C.TEXTURE_2D_ARRAY)&&C.texParameteri(q,C.TEXTURE_WRAP_R,C.CLAMP_TO_EDGE),(l.wrapS!==vg||l.wrapT!==vg)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),C.texParameteri(q,C.TEXTURE_MAG_FILTER,m(l.magFilter)),C.texParameteri(q,C.TEXTURE_MIN_FILTER,m(l.minFilter)),l.minFilter!==Sg&&l.minFilter!==xg&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),l.compareFunction&&(C.texParameteri(q,C.TEXTURE_COMPARE_MODE,C.COMPARE_REF_TO_TEXTURE),C.texParameteri(q,C.TEXTURE_COMPARE_FUNC,PA[l.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){const SA=A.get("EXT_texture_filter_anisotropic");if(l.magFilter===Sg||l.minFilter!==gE&&l.minFilter!==TB||l.type===yC&&A.has("OES_texture_float_linear")===!1||t===!1&&l.type===VB&&A.has("OES_texture_half_float_linear")===!1)return;(l.anisotropy>1||g.get(l).__currentAnisotropy)&&(C.texParameterf(q,SA.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(l.anisotropy,Q.getMaxAnisotropy())),g.get(l).__currentAnisotropy=l.anisotropy)}}function DI(q,l){let $=!1;q.__webglInit===void 0&&(q.__webglInit=!0,l.addEventListener("dispose",eA));const SA=l.source;let yA=r.get(SA);yA===void 0&&(yA={},r.set(SA,yA));const NA=RA(l);if(NA!==q.__cacheKey){yA[NA]===void 0&&(yA[NA]={texture:C.createTexture(),usedTimes:0},D.memory.textures++,$=!0),yA[NA].usedTimes++;const ZA=yA[q.__cacheKey];ZA!==void 0&&(yA[q.__cacheKey].usedTimes--,ZA.usedTimes===0&&Z(l)),q.__cacheKey=NA,q.__webglTexture=yA[NA].texture}return $}function xA(q,l,$){let SA=C.TEXTURE_2D;(l.isDataArrayTexture||l.isCompressedArrayTexture)&&(SA=C.TEXTURE_2D_ARRAY),l.isData3DTexture&&(SA=C.TEXTURE_3D);const yA=DI(q,l),NA=l.source;I.bindTexture(SA,q.__webglTexture,C.TEXTURE0+$);const ZA=g.get(NA);if(NA.version!==ZA.__version||yA===!0){I.activeTexture(C.TEXTURE0+$);const lA=_I.getPrimaries(_I.workingColorSpace),pA=l.colorSpace===Tg?null:_I.getPrimaries(l.colorSpace),QI=l.colorSpace===Tg||lA===pA?C.NONE:C.BROWSER_DEFAULT_WEBGL;C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,l.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,l.unpackAlignment),C.pixelStorei(C.UNPACK_COLORSPACE_CONVERSION_WEBGL,QI);const oI=x(l)&&u(l.image)===!1;let MA=J(l.image,oI,!1,w);MA=Bg(l,MA);const xI=u(MA)||t,OA=i.convert(l.format,l.colorSpace);let EI=i.convert(l.type),_A=QA(l.internalFormat,OA,EI,l.colorSpace,l.isVideoTexture);jA(SA,l,xI);let FA;const FI=l.mipmaps,b=t&&l.isVideoTexture!==!0&&_A!==Ct,fA=ZA.__version===void 0||yA===!0,nA=K(l,MA,xI);if(l.isDepthTexture)_A=C.DEPTH_COMPONENT,t?l.type===yC?_A=C.DEPTH_COMPONENT32F:l.type===NC?_A=C.DEPTH_COMPONENT24:l.type===VC?_A=C.DEPTH24_STENCIL8:_A=C.DEPTH_COMPONENT16:l.type===yC&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),l.format===WC&&_A===C.DEPTH_COMPONENT&&l.type!==_E&&l.type!==NC&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),l.type=NC,EI=i.convert(l.type)),l.format===NB&&_A===C.DEPTH_COMPONENT&&(_A=C.DEPTH_STENCIL,l.type!==VC&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),l.type=VC,EI=i.convert(l.type))),fA&&(b?I.texStorage2D(C.TEXTURE_2D,1,_A,MA.width,MA.height):I.texImage2D(C.TEXTURE_2D,0,_A,MA.width,MA.height,0,OA,EI,null));else if(l.isDataTexture)if(FI.length>0&&xI){b&&fA&&I.texStorage2D(C.TEXTURE_2D,nA,_A,FI[0].width,FI[0].height);for(let X=0,kA=FI.length;X<kA;X++)FA=FI[X],b?I.texSubImage2D(C.TEXTURE_2D,X,0,0,FA.width,FA.height,OA,EI,FA.data):I.texImage2D(C.TEXTURE_2D,X,_A,FA.width,FA.height,0,OA,EI,FA.data);l.generateMipmaps=!1}else b?(fA&&I.texStorage2D(C.TEXTURE_2D,nA,_A,MA.width,MA.height),I.texSubImage2D(C.TEXTURE_2D,0,0,0,MA.width,MA.height,OA,EI,MA.data)):I.texImage2D(C.TEXTURE_2D,0,_A,MA.width,MA.height,0,OA,EI,MA.data);else if(l.isCompressedTexture)if(l.isCompressedArrayTexture){b&&fA&&I.texStorage3D(C.TEXTURE_2D_ARRAY,nA,_A,FI[0].width,FI[0].height,MA.depth);for(let X=0,kA=FI.length;X<kA;X++)FA=FI[X],l.format!==Xg?OA!==null?b?I.compressedTexSubImage3D(C.TEXTURE_2D_ARRAY,X,0,0,0,FA.width,FA.height,MA.depth,OA,FA.data,0,0):I.compressedTexImage3D(C.TEXTURE_2D_ARRAY,X,_A,FA.width,FA.height,MA.depth,0,FA.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):b?I.texSubImage3D(C.TEXTURE_2D_ARRAY,X,0,0,0,FA.width,FA.height,MA.depth,OA,EI,FA.data):I.texImage3D(C.TEXTURE_2D_ARRAY,X,_A,FA.width,FA.height,MA.depth,0,OA,EI,FA.data)}else{b&&fA&&I.texStorage2D(C.TEXTURE_2D,nA,_A,FI[0].width,FI[0].height);for(let X=0,kA=FI.length;X<kA;X++)FA=FI[X],l.format!==Xg?OA!==null?b?I.compressedTexSubImage2D(C.TEXTURE_2D,X,0,0,FA.width,FA.height,OA,FA.data):I.compressedTexImage2D(C.TEXTURE_2D,X,_A,FA.width,FA.height,0,FA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):b?I.texSubImage2D(C.TEXTURE_2D,X,0,0,FA.width,FA.height,OA,EI,FA.data):I.texImage2D(C.TEXTURE_2D,X,_A,FA.width,FA.height,0,OA,EI,FA.data)}else if(l.isDataArrayTexture)b?(fA&&I.texStorage3D(C.TEXTURE_2D_ARRAY,nA,_A,MA.width,MA.height,MA.depth),I.texSubImage3D(C.TEXTURE_2D_ARRAY,0,0,0,0,MA.width,MA.height,MA.depth,OA,EI,MA.data)):I.texImage3D(C.TEXTURE_2D_ARRAY,0,_A,MA.width,MA.height,MA.depth,0,OA,EI,MA.data);else if(l.isData3DTexture)b?(fA&&I.texStorage3D(C.TEXTURE_3D,nA,_A,MA.width,MA.height,MA.depth),I.texSubImage3D(C.TEXTURE_3D,0,0,0,0,MA.width,MA.height,MA.depth,OA,EI,MA.data)):I.texImage3D(C.TEXTURE_3D,0,_A,MA.width,MA.height,MA.depth,0,OA,EI,MA.data);else if(l.isFramebufferTexture){if(fA)if(b)I.texStorage2D(C.TEXTURE_2D,nA,_A,MA.width,MA.height);else{let X=MA.width,kA=MA.height;for(let XA=0;XA<nA;XA++)I.texImage2D(C.TEXTURE_2D,XA,_A,X,kA,0,OA,EI,null),X>>=1,kA>>=1}}else if(FI.length>0&&xI){b&&fA&&I.texStorage2D(C.TEXTURE_2D,nA,_A,FI[0].width,FI[0].height);for(let X=0,kA=FI.length;X<kA;X++)FA=FI[X],b?I.texSubImage2D(C.TEXTURE_2D,X,0,0,OA,EI,FA):I.texImage2D(C.TEXTURE_2D,X,_A,OA,EI,FA);l.generateMipmaps=!1}else b?(fA&&I.texStorage2D(C.TEXTURE_2D,nA,_A,MA.width,MA.height),I.texSubImage2D(C.TEXTURE_2D,0,0,0,OA,EI,MA)):I.texImage2D(C.TEXTURE_2D,0,_A,OA,EI,MA);T(l,xI)&&V(SA),ZA.__version=NA.version,l.onUpdate&&l.onUpdate(l)}q.__version=l.version}function TA(q,l,$){if(l.image.length!==6)return;const SA=DI(q,l),yA=l.source;I.bindTexture(C.TEXTURE_CUBE_MAP,q.__webglTexture,C.TEXTURE0+$);const NA=g.get(yA);if(yA.version!==NA.__version||SA===!0){I.activeTexture(C.TEXTURE0+$);const ZA=_I.getPrimaries(_I.workingColorSpace),lA=l.colorSpace===Tg?null:_I.getPrimaries(l.colorSpace),pA=l.colorSpace===Tg||ZA===lA?C.NONE:C.BROWSER_DEFAULT_WEBGL;C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,l.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,l.unpackAlignment),C.pixelStorei(C.UNPACK_COLORSPACE_CONVERSION_WEBGL,pA);const QI=l.isCompressedTexture||l.image[0].isCompressedTexture,oI=l.image[0]&&l.image[0].isDataTexture,MA=[];for(let X=0;X<6;X++)!QI&&!oI?MA[X]=J(l.image[X],!1,!0,n):MA[X]=oI?l.image[X].image:l.image[X],MA[X]=Bg(l,MA[X]);const xI=MA[0],OA=u(xI)||t,EI=i.convert(l.format,l.colorSpace),_A=i.convert(l.type),FA=QA(l.internalFormat,EI,_A,l.colorSpace),FI=t&&l.isVideoTexture!==!0,b=NA.__version===void 0||SA===!0;let fA=K(l,xI,OA);jA(C.TEXTURE_CUBE_MAP,l,OA);let nA;if(QI){FI&&b&&I.texStorage2D(C.TEXTURE_CUBE_MAP,fA,FA,xI.width,xI.height);for(let X=0;X<6;X++){nA=MA[X].mipmaps;for(let kA=0;kA<nA.length;kA++){const XA=nA[kA];l.format!==Xg?EI!==null?FI?I.compressedTexSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+X,kA,0,0,XA.width,XA.height,EI,XA.data):I.compressedTexImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+X,kA,FA,XA.width,XA.height,0,XA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):FI?I.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+X,kA,0,0,XA.width,XA.height,EI,_A,XA.data):I.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+X,kA,FA,XA.width,XA.height,0,EI,_A,XA.data)}}}else{nA=l.mipmaps,FI&&b&&(nA.length>0&&fA++,I.texStorage2D(C.TEXTURE_CUBE_MAP,fA,FA,MA[0].width,MA[0].height));for(let X=0;X<6;X++)if(oI){FI?I.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,MA[X].width,MA[X].height,EI,_A,MA[X].data):I.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,FA,MA[X].width,MA[X].height,0,EI,_A,MA[X].data);for(let kA=0;kA<nA.length;kA++){const JI=nA[kA].image[X].image;FI?I.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+X,kA+1,0,0,JI.width,JI.height,EI,_A,JI.data):I.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+X,kA+1,FA,JI.width,JI.height,0,EI,_A,JI.data)}}else{FI?I.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,EI,_A,MA[X]):I.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,FA,EI,_A,MA[X]);for(let kA=0;kA<nA.length;kA++){const XA=nA[kA];FI?I.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+X,kA+1,0,0,EI,_A,XA.image[X]):I.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+X,kA+1,FA,EI,_A,XA.image[X])}}}T(l,OA)&&V(C.TEXTURE_CUBE_MAP),NA.__version=yA.version,l.onUpdate&&l.onUpdate(l)}q.__version=l.version}function gI(q,l,$,SA,yA,NA){const ZA=i.convert($.format,$.colorSpace),lA=i.convert($.type),pA=QA($.internalFormat,ZA,lA,$.colorSpace);if(!g.get(l).__hasExternalTextures){const oI=Math.max(1,l.width>>NA),MA=Math.max(1,l.height>>NA);yA===C.TEXTURE_3D||yA===C.TEXTURE_2D_ARRAY?I.texImage3D(yA,NA,pA,oI,MA,l.depth,0,ZA,lA,null):I.texImage2D(yA,NA,pA,oI,MA,0,ZA,lA,null)}I.bindFramebuffer(C.FRAMEBUFFER,q),uI(l)?R.framebufferTexture2DMultisampleEXT(C.FRAMEBUFFER,SA,yA,g.get($).__webglTexture,0,iI(l)):(yA===C.TEXTURE_2D||yA>=C.TEXTURE_CUBE_MAP_POSITIVE_X&&yA<=C.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&C.framebufferTexture2D(C.FRAMEBUFFER,SA,yA,g.get($).__webglTexture,NA),I.bindFramebuffer(C.FRAMEBUFFER,null)}function z(q,l,$){if(C.bindRenderbuffer(C.RENDERBUFFER,q),l.depthBuffer&&!l.stencilBuffer){let SA=t===!0?C.DEPTH_COMPONENT24:C.DEPTH_COMPONENT16;if($||uI(l)){const yA=l.depthTexture;yA&&yA.isDepthTexture&&(yA.type===yC?SA=C.DEPTH_COMPONENT32F:yA.type===NC&&(SA=C.DEPTH_COMPONENT24));const NA=iI(l);uI(l)?R.renderbufferStorageMultisampleEXT(C.RENDERBUFFER,NA,SA,l.width,l.height):C.renderbufferStorageMultisample(C.RENDERBUFFER,NA,SA,l.width,l.height)}else C.renderbufferStorage(C.RENDERBUFFER,SA,l.width,l.height);C.framebufferRenderbuffer(C.FRAMEBUFFER,C.DEPTH_ATTACHMENT,C.RENDERBUFFER,q)}else if(l.depthBuffer&&l.stencilBuffer){const SA=iI(l);$&&uI(l)===!1?C.renderbufferStorageMultisample(C.RENDERBUFFER,SA,C.DEPTH24_STENCIL8,l.width,l.height):uI(l)?R.renderbufferStorageMultisampleEXT(C.RENDERBUFFER,SA,C.DEPTH24_STENCIL8,l.width,l.height):C.renderbufferStorage(C.RENDERBUFFER,C.DEPTH_STENCIL,l.width,l.height),C.framebufferRenderbuffer(C.FRAMEBUFFER,C.DEPTH_STENCIL_ATTACHMENT,C.RENDERBUFFER,q)}else{const SA=l.isWebGLMultipleRenderTargets===!0?l.texture:[l.texture];for(let yA=0;yA<SA.length;yA++){const NA=SA[yA],ZA=i.convert(NA.format,NA.colorSpace),lA=i.convert(NA.type),pA=QA(NA.internalFormat,ZA,lA,NA.colorSpace),QI=iI(l);$&&uI(l)===!1?C.renderbufferStorageMultisample(C.RENDERBUFFER,QI,pA,l.width,l.height):uI(l)?R.renderbufferStorageMultisampleEXT(C.RENDERBUFFER,QI,pA,l.width,l.height):C.renderbufferStorage(C.RENDERBUFFER,pA,l.width,l.height)}}C.bindRenderbuffer(C.RENDERBUFFER,null)}function KA(q,l){if(l&&l.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(C.FRAMEBUFFER,q),!(l.depthTexture&&l.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!g.get(l.depthTexture).__webglTexture||l.depthTexture.image.width!==l.width||l.depthTexture.image.height!==l.height)&&(l.depthTexture.image.width=l.width,l.depthTexture.image.height=l.height,l.depthTexture.needsUpdate=!0),rA(l.depthTexture,0);const SA=g.get(l.depthTexture).__webglTexture,yA=iI(l);if(l.depthTexture.format===WC)uI(l)?R.framebufferTexture2DMultisampleEXT(C.FRAMEBUFFER,C.DEPTH_ATTACHMENT,C.TEXTURE_2D,SA,0,yA):C.framebufferTexture2D(C.FRAMEBUFFER,C.DEPTH_ATTACHMENT,C.TEXTURE_2D,SA,0);else if(l.depthTexture.format===NB)uI(l)?R.framebufferTexture2DMultisampleEXT(C.FRAMEBUFFER,C.DEPTH_STENCIL_ATTACHMENT,C.TEXTURE_2D,SA,0,yA):C.framebufferTexture2D(C.FRAMEBUFFER,C.DEPTH_STENCIL_ATTACHMENT,C.TEXTURE_2D,SA,0);else throw new Error("Unknown depthTexture format")}function WA(q){const l=g.get(q),$=q.isWebGLCubeRenderTarget===!0;if(q.depthTexture&&!l.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");KA(l.__webglFramebuffer,q)}else if($){l.__webglDepthbuffer=[];for(let SA=0;SA<6;SA++)I.bindFramebuffer(C.FRAMEBUFFER,l.__webglFramebuffer[SA]),l.__webglDepthbuffer[SA]=C.createRenderbuffer(),z(l.__webglDepthbuffer[SA],q,!1)}else I.bindFramebuffer(C.FRAMEBUFFER,l.__webglFramebuffer),l.__webglDepthbuffer=C.createRenderbuffer(),z(l.__webglDepthbuffer,q,!1);I.bindFramebuffer(C.FRAMEBUFFER,null)}function rI(q,l,$){const SA=g.get(q);l!==void 0&&gI(SA.__webglFramebuffer,q,q.texture,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,0),$!==void 0&&WA(q)}function zA(q){const l=q.texture,$=g.get(q),SA=g.get(l);q.addEventListener("dispose",hA),q.isWebGLMultipleRenderTargets!==!0&&(SA.__webglTexture===void 0&&(SA.__webglTexture=C.createTexture()),SA.__version=l.version,D.memory.textures++);const yA=q.isWebGLCubeRenderTarget===!0,NA=q.isWebGLMultipleRenderTargets===!0,ZA=u(q)||t;if(yA){$.__webglFramebuffer=[];for(let lA=0;lA<6;lA++)if(t&&l.mipmaps&&l.mipmaps.length>0){$.__webglFramebuffer[lA]=[];for(let pA=0;pA<l.mipmaps.length;pA++)$.__webglFramebuffer[lA][pA]=C.createFramebuffer()}else $.__webglFramebuffer[lA]=C.createFramebuffer()}else{if(t&&l.mipmaps&&l.mipmaps.length>0){$.__webglFramebuffer=[];for(let lA=0;lA<l.mipmaps.length;lA++)$.__webglFramebuffer[lA]=C.createFramebuffer()}else $.__webglFramebuffer=C.createFramebuffer();if(NA)if(Q.drawBuffers){const lA=q.texture;for(let pA=0,QI=lA.length;pA<QI;pA++){const oI=g.get(lA[pA]);oI.__webglTexture===void 0&&(oI.__webglTexture=C.createTexture(),D.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(t&&q.samples>0&&uI(q)===!1){const lA=NA?l:[l];$.__webglMultisampledFramebuffer=C.createFramebuffer(),$.__webglColorRenderbuffer=[],I.bindFramebuffer(C.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let pA=0;pA<lA.length;pA++){const QI=lA[pA];$.__webglColorRenderbuffer[pA]=C.createRenderbuffer(),C.bindRenderbuffer(C.RENDERBUFFER,$.__webglColorRenderbuffer[pA]);const oI=i.convert(QI.format,QI.colorSpace),MA=i.convert(QI.type),xI=QA(QI.internalFormat,oI,MA,QI.colorSpace,q.isXRRenderTarget===!0),OA=iI(q);C.renderbufferStorageMultisample(C.RENDERBUFFER,OA,xI,q.width,q.height),C.framebufferRenderbuffer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+pA,C.RENDERBUFFER,$.__webglColorRenderbuffer[pA])}C.bindRenderbuffer(C.RENDERBUFFER,null),q.depthBuffer&&($.__webglDepthRenderbuffer=C.createRenderbuffer(),z($.__webglDepthRenderbuffer,q,!0)),I.bindFramebuffer(C.FRAMEBUFFER,null)}}if(yA){I.bindTexture(C.TEXTURE_CUBE_MAP,SA.__webglTexture),jA(C.TEXTURE_CUBE_MAP,l,ZA);for(let lA=0;lA<6;lA++)if(t&&l.mipmaps&&l.mipmaps.length>0)for(let pA=0;pA<l.mipmaps.length;pA++)gI($.__webglFramebuffer[lA][pA],q,l,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+lA,pA);else gI($.__webglFramebuffer[lA],q,l,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+lA,0);T(l,ZA)&&V(C.TEXTURE_CUBE_MAP),I.unbindTexture()}else if(NA){const lA=q.texture;for(let pA=0,QI=lA.length;pA<QI;pA++){const oI=lA[pA],MA=g.get(oI);I.bindTexture(C.TEXTURE_2D,MA.__webglTexture),jA(C.TEXTURE_2D,oI,ZA),gI($.__webglFramebuffer,q,oI,C.COLOR_ATTACHMENT0+pA,C.TEXTURE_2D,0),T(oI,ZA)&&V(C.TEXTURE_2D)}I.unbindTexture()}else{let lA=C.TEXTURE_2D;if((q.isWebGL3DRenderTarget||q.isWebGLArrayRenderTarget)&&(t?lA=q.isWebGL3DRenderTarget?C.TEXTURE_3D:C.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),I.bindTexture(lA,SA.__webglTexture),jA(lA,l,ZA),t&&l.mipmaps&&l.mipmaps.length>0)for(let pA=0;pA<l.mipmaps.length;pA++)gI($.__webglFramebuffer[pA],q,l,C.COLOR_ATTACHMENT0,lA,pA);else gI($.__webglFramebuffer,q,l,C.COLOR_ATTACHMENT0,lA,0);T(l,ZA)&&V(lA),I.unbindTexture()}q.depthBuffer&&WA(q)}function TI(q){const l=u(q)||t,$=q.isWebGLMultipleRenderTargets===!0?q.texture:[q.texture];for(let SA=0,yA=$.length;SA<yA;SA++){const NA=$[SA];if(T(NA,l)){const ZA=q.isWebGLCubeRenderTarget?C.TEXTURE_CUBE_MAP:C.TEXTURE_2D,lA=g.get(NA).__webglTexture;I.bindTexture(ZA,lA),V(ZA),I.unbindTexture()}}}function CI(q){if(t&&q.samples>0&&uI(q)===!1){const l=q.isWebGLMultipleRenderTargets?q.texture:[q.texture],$=q.width,SA=q.height;let yA=C.COLOR_BUFFER_BIT;const NA=[],ZA=q.stencilBuffer?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT,lA=g.get(q),pA=q.isWebGLMultipleRenderTargets===!0;if(pA)for(let QI=0;QI<l.length;QI++)I.bindFramebuffer(C.FRAMEBUFFER,lA.__webglMultisampledFramebuffer),C.framebufferRenderbuffer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+QI,C.RENDERBUFFER,null),I.bindFramebuffer(C.FRAMEBUFFER,lA.__webglFramebuffer),C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0+QI,C.TEXTURE_2D,null,0);I.bindFramebuffer(C.READ_FRAMEBUFFER,lA.__webglMultisampledFramebuffer),I.bindFramebuffer(C.DRAW_FRAMEBUFFER,lA.__webglFramebuffer);for(let QI=0;QI<l.length;QI++){NA.push(C.COLOR_ATTACHMENT0+QI),q.depthBuffer&&NA.push(ZA);const oI=lA.__ignoreDepthValues!==void 0?lA.__ignoreDepthValues:!1;if(oI===!1&&(q.depthBuffer&&(yA|=C.DEPTH_BUFFER_BIT),q.stencilBuffer&&(yA|=C.STENCIL_BUFFER_BIT)),pA&&C.framebufferRenderbuffer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.RENDERBUFFER,lA.__webglColorRenderbuffer[QI]),oI===!0&&(C.invalidateFramebuffer(C.READ_FRAMEBUFFER,[ZA]),C.invalidateFramebuffer(C.DRAW_FRAMEBUFFER,[ZA])),pA){const MA=g.get(l[QI]).__webglTexture;C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,MA,0)}C.blitFramebuffer(0,0,$,SA,0,0,$,SA,yA,C.NEAREST),M&&C.invalidateFramebuffer(C.READ_FRAMEBUFFER,NA)}if(I.bindFramebuffer(C.READ_FRAMEBUFFER,null),I.bindFramebuffer(C.DRAW_FRAMEBUFFER,null),pA)for(let QI=0;QI<l.length;QI++){I.bindFramebuffer(C.FRAMEBUFFER,lA.__webglMultisampledFramebuffer),C.framebufferRenderbuffer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+QI,C.RENDERBUFFER,lA.__webglColorRenderbuffer[QI]);const oI=g.get(l[QI]).__webglTexture;I.bindFramebuffer(C.FRAMEBUFFER,lA.__webglFramebuffer),C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0+QI,C.TEXTURE_2D,oI,0)}I.bindFramebuffer(C.DRAW_FRAMEBUFFER,lA.__webglMultisampledFramebuffer)}}function iI(q){return Math.min(c,q.samples)}function uI(q){const l=g.get(q);return t&&q.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&l.__useRenderToTexture!==!1}function VI(q){const l=D.render.frame;k.get(q)!==l&&(k.set(q,l),q.update())}function Bg(q,l){const $=q.colorSpace,SA=q.format,yA=q.type;return q.isCompressedTexture===!0||q.isVideoTexture===!0||q.format===TE||$!==sC&&$!==Tg&&(_I.getTransfer($)===Ig?t===!1?A.has("EXT_sRGB")===!0&&SA===Xg?(q.format=TE,q.minFilter=xg,q.generateMipmaps=!1):l=ot.sRGBToLinear(l):(SA!==Xg||yA!==UC)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),l}this.allocateTextureUnit=dA,this.resetTextureUnits=DA,this.setTexture2D=rA,this.setTexture2DArray=JA,this.setTexture3D=LA,this.setTextureCube=iA,this.rebindTextures=rI,this.setupRenderTarget=zA,this.updateRenderTargetMipmap=TI,this.updateMultisampleRenderTarget=CI,this.setupDepthRenderbuffer=WA,this.setupFrameBufferTexture=gI,this.useMultisampledRTT=uI}function v0(C,A,I){const g=I.isWebGL2;function Q(i,D=Tg){let t;const a=_I.getTransfer(D);if(i===UC)return C.UNSIGNED_BYTE;if(i===_o)return C.UNSIGNED_SHORT_4_4_4_4;if(i===$o)return C.UNSIGNED_SHORT_5_5_5_1;if(i===Ks)return C.BYTE;if(i===ls)return C.SHORT;if(i===_E)return C.UNSIGNED_SHORT;if(i===zo)return C.INT;if(i===NC)return C.UNSIGNED_INT;if(i===yC)return C.FLOAT;if(i===VB)return g?C.HALF_FLOAT:(t=A.get("OES_texture_half_float"),t!==null?t.HALF_FLOAT_OES:null);if(i===ks)return C.ALPHA;if(i===Xg)return C.RGBA;if(i===ds)return C.LUMINANCE;if(i===Js)return C.LUMINANCE_ALPHA;if(i===WC)return C.DEPTH_COMPONENT;if(i===NB)return C.DEPTH_STENCIL;if(i===TE)return t=A.get("EXT_sRGB"),t!==null?t.SRGB_ALPHA_EXT:null;if(i===Ys)return C.RED;if(i===At)return C.RED_INTEGER;if(i===Ls)return C.RG;if(i===It)return C.RG_INTEGER;if(i===gt)return C.RGBA_INTEGER;if(i===CE||i===BE||i===QE||i===EE)if(a===Ig)if(t=A.get("WEBGL_compressed_texture_s3tc_srgb"),t!==null){if(i===CE)return t.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===BE)return t.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===QE)return t.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===EE)return t.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(t=A.get("WEBGL_compressed_texture_s3tc"),t!==null){if(i===CE)return t.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===BE)return t.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===QE)return t.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===EE)return t.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===li||i===ki||i===di||i===Ji)if(t=A.get("WEBGL_compressed_texture_pvrtc"),t!==null){if(i===li)return t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ki)return t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===di)return t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ji)return t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ct)return t=A.get("WEBGL_compressed_texture_etc1"),t!==null?t.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Yi||i===Li)if(t=A.get("WEBGL_compressed_texture_etc"),t!==null){if(i===Yi)return a===Ig?t.COMPRESSED_SRGB8_ETC2:t.COMPRESSED_RGB8_ETC2;if(i===Li)return a===Ig?t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:t.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fi||i===Hi||i===ui||i===pi||i===qi||i===mi||i===xi||i===bi||i===Ti||i===Vi||i===Wi||i===Zi||i===Oi||i===vi)if(t=A.get("WEBGL_compressed_texture_astc"),t!==null){if(i===fi)return a===Ig?t.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:t.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hi)return a===Ig?t.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:t.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ui)return a===Ig?t.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:t.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pi)return a===Ig?t.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:t.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qi)return a===Ig?t.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:t.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mi)return a===Ig?t.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:t.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xi)return a===Ig?t.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:t.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bi)return a===Ig?t.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:t.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ti)return a===Ig?t.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:t.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vi)return a===Ig?t.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:t.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wi)return a===Ig?t.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:t.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zi)return a===Ig?t.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:t.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Oi)return a===Ig?t.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:t.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vi)return a===Ig?t.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:t.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===iE||i===Xi||i===Pi)if(t=A.get("EXT_texture_compression_bptc"),t!==null){if(i===iE)return a===Ig?t.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:t.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xi)return t.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pi)return t.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fs||i===ji||i===zi||i===_i)if(t=A.get("EXT_texture_compression_rgtc"),t!==null){if(i===iE)return t.COMPRESSED_RED_RGTC1_EXT;if(i===ji)return t.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zi)return t.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_i)return t.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===VC?g?C.UNSIGNED_INT_24_8:(t=A.get("WEBGL_depth_texture"),t!==null?t.UNSIGNED_INT_24_8_WEBGL:null):C[i]!==void 0?C[i]:null}return{convert:Q}}class X0 extends bg{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class GB extends ug{constructor(){super(),this.isGroup=!0,this.type="Group"}}const P0={type:"move"};class YE{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new GB,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new GB,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new CA,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new CA),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new GB,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new CA,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new CA),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const g of A.hand.values())this._getHandJoint(I,g)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let Q=null,i=null,D=null;const t=this._targetRay,a=this._grip,n=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(n&&A.hand){D=!0;for(const S of A.hand.values()){const r=I.getJointPose(S,g),h=this._getHandJoint(n,S);r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=r.radius),h.visible=r!==null}const w=n.joints["index-finger-tip"],c=n.joints["thumb-tip"],R=w.position.distanceTo(c.position),M=.02,k=.005;n.inputState.pinching&&R>M+k?(n.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!n.inputState.pinching&&R<=M-k&&(n.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else a!==null&&A.gripSpace&&(i=I.getPose(A.gripSpace,g),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1));t!==null&&(Q=I.getPose(A.targetRaySpace,g),Q===null&&i!==null&&(Q=i),Q!==null&&(t.matrix.fromArray(Q.transform.matrix),t.matrix.decompose(t.position,t.rotation,t.scale),t.matrixWorldNeedsUpdate=!0,Q.linearVelocity?(t.hasLinearVelocity=!0,t.linearVelocity.copy(Q.linearVelocity)):t.hasLinearVelocity=!1,Q.angularVelocity?(t.hasAngularVelocity=!0,t.angularVelocity.copy(Q.angularVelocity)):t.hasAngularVelocity=!1,this.dispatchEvent(P0)))}return t!==null&&(t.visible=Q!==null),a!==null&&(a.visible=i!==null),n!==null&&(n.visible=D!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const g=new GB;g.matrixAutoUpdate=!1,g.visible=!1,A.joints[I.jointName]=g,A.add(g)}return A.joints[I.jointName]}}class j0 extends MB{constructor(A,I){super();const g=this;let Q=null,i=1,D=null,t="local-floor",a=1,n=null,w=null,c=null,R=null,M=null,k=null;const S=I.getContextAttributes();let r=null,h=null;const H=[],J=[],u=new jI;let x=null;const T=new bg;T.layers.enable(1),T.viewport=new Fg;const V=new bg;V.layers.enable(2),V.viewport=new Fg;const QA=[T,V],K=new X0;K.layers.enable(1),K.layers.enable(2);let m=null,eA=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(iA){let cA=H[iA];return cA===void 0&&(cA=new YE,H[iA]=cA),cA.getTargetRaySpace()},this.getControllerGrip=function(iA){let cA=H[iA];return cA===void 0&&(cA=new YE,H[iA]=cA),cA.getGripSpace()},this.getHand=function(iA){let cA=H[iA];return cA===void 0&&(cA=new YE,H[iA]=cA),cA.getHandSpace()};function hA(iA){const cA=J.indexOf(iA.inputSource);if(cA===-1)return;const mA=H[cA];mA!==void 0&&(mA.update(iA.inputSource,iA.frame,n||D),mA.dispatchEvent({type:iA.type,data:iA.inputSource}))}function wA(){Q.removeEventListener("select",hA),Q.removeEventListener("selectstart",hA),Q.removeEventListener("selectend",hA),Q.removeEventListener("squeeze",hA),Q.removeEventListener("squeezestart",hA),Q.removeEventListener("squeezeend",hA),Q.removeEventListener("end",wA),Q.removeEventListener("inputsourceschange",Z);for(let iA=0;iA<H.length;iA++){const cA=J[iA];cA!==null&&(J[iA]=null,H[iA].disconnect(cA))}m=null,eA=null,A.setRenderTarget(r),M=null,R=null,c=null,Q=null,h=null,LA.stop(),g.isPresenting=!1,A.setPixelRatio(x),A.setSize(u.width,u.height,!1),g.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(iA){i=iA,g.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(iA){t=iA,g.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return n||D},this.setReferenceSpace=function(iA){n=iA},this.getBaseLayer=function(){return R!==null?R:M},this.getBinding=function(){return c},this.getFrame=function(){return k},this.getSession=function(){return Q},this.setSession=async function(iA){if(Q=iA,Q!==null){if(r=A.getRenderTarget(),Q.addEventListener("select",hA),Q.addEventListener("selectstart",hA),Q.addEventListener("selectend",hA),Q.addEventListener("squeeze",hA),Q.addEventListener("squeezestart",hA),Q.addEventListener("squeezeend",hA),Q.addEventListener("end",wA),Q.addEventListener("inputsourceschange",Z),S.xrCompatible!==!0&&await I.makeXRCompatible(),x=A.getPixelRatio(),A.getSize(u),Q.renderState.layers===void 0||A.capabilities.isWebGL2===!1){const cA={antialias:Q.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:i};M=new XRWebGLLayer(Q,I,cA),Q.updateRenderState({baseLayer:M}),A.setPixelRatio(1),A.setSize(M.framebufferWidth,M.framebufferHeight,!1),h=new OC(M.framebufferWidth,M.framebufferHeight,{format:Xg,type:UC,colorSpace:A.outputColorSpace,stencilBuffer:S.stencil})}else{let cA=null,mA=null,PA=null;S.depth&&(PA=S.stencil?I.DEPTH24_STENCIL8:I.DEPTH_COMPONENT24,cA=S.stencil?NB:WC,mA=S.stencil?VC:NC);const jA={colorFormat:I.RGBA8,depthFormat:PA,scaleFactor:i};c=new XRWebGLBinding(Q,I),R=c.createProjectionLayer(jA),Q.updateRenderState({layers:[R]}),A.setPixelRatio(1),A.setSize(R.textureWidth,R.textureHeight,!1),h=new OC(R.textureWidth,R.textureHeight,{format:Xg,type:UC,depthTexture:new Ft(R.textureWidth,R.textureHeight,mA,void 0,void 0,void 0,void 0,void 0,void 0,cA),stencilBuffer:S.stencil,colorSpace:A.outputColorSpace,samples:S.antialias?4:0});const DI=A.properties.get(h);DI.__ignoreDepthValues=R.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(a),n=null,D=await Q.requestReferenceSpace(t),LA.setContext(Q),LA.start(),g.isPresenting=!0,g.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Q!==null)return Q.environmentBlendMode};function Z(iA){for(let cA=0;cA<iA.removed.length;cA++){const mA=iA.removed[cA],PA=J.indexOf(mA);PA>=0&&(J[PA]=null,H[PA].disconnect(mA))}for(let cA=0;cA<iA.added.length;cA++){const mA=iA.added[cA];let PA=J.indexOf(mA);if(PA===-1){for(let DI=0;DI<H.length;DI++)if(DI>=J.length){J.push(mA),PA=DI;break}else if(J[DI]===null){J[DI]=mA,PA=DI;break}if(PA===-1)break}const jA=H[PA];jA&&jA.connect(mA)}}const EA=new CA,GA=new CA;function DA(iA,cA,mA){EA.setFromMatrixPosition(cA.matrixWorld),GA.setFromMatrixPosition(mA.matrixWorld);const PA=EA.distanceTo(GA),jA=cA.projectionMatrix.elements,DI=mA.projectionMatrix.elements,xA=jA[14]/(jA[10]-1),TA=jA[14]/(jA[10]+1),gI=(jA[9]+1)/jA[5],z=(jA[9]-1)/jA[5],KA=(jA[8]-1)/jA[0],WA=(DI[8]+1)/DI[0],rI=xA*KA,zA=xA*WA,TI=PA/(-KA+WA),CI=TI*-KA;cA.matrixWorld.decompose(iA.position,iA.quaternion,iA.scale),iA.translateX(CI),iA.translateZ(TI),iA.matrixWorld.compose(iA.position,iA.quaternion,iA.scale),iA.matrixWorldInverse.copy(iA.matrixWorld).invert();const iI=xA+TI,uI=TA+TI,VI=rI-CI,Bg=zA+(PA-CI),q=gI*TA/uI*iI,l=z*TA/uI*iI;iA.projectionMatrix.makePerspective(VI,Bg,q,l,iI,uI),iA.projectionMatrixInverse.copy(iA.projectionMatrix).invert()}function dA(iA,cA){cA===null?iA.matrixWorld.copy(iA.matrix):iA.matrixWorld.multiplyMatrices(cA.matrixWorld,iA.matrix),iA.matrixWorldInverse.copy(iA.matrixWorld).invert()}this.updateCamera=function(iA){if(Q===null)return;K.near=V.near=T.near=iA.near,K.far=V.far=T.far=iA.far,(m!==K.near||eA!==K.far)&&(Q.updateRenderState({depthNear:K.near,depthFar:K.far}),m=K.near,eA=K.far);const cA=iA.parent,mA=K.cameras;dA(K,cA);for(let PA=0;PA<mA.length;PA++)dA(mA[PA],cA);mA.length===2?DA(K,T,V):K.projectionMatrix.copy(T.projectionMatrix),RA(iA,K,cA)};function RA(iA,cA,mA){mA===null?iA.matrix.copy(cA.matrixWorld):(iA.matrix.copy(mA.matrixWorld),iA.matrix.invert(),iA.matrix.multiply(cA.matrixWorld)),iA.matrix.decompose(iA.position,iA.quaternion,iA.scale),iA.updateMatrixWorld(!0),iA.projectionMatrix.copy(cA.projectionMatrix),iA.projectionMatrixInverse.copy(cA.projectionMatrixInverse),iA.isPerspectiveCamera&&(iA.fov=VE*2*Math.atan(1/iA.projectionMatrix.elements[5]),iA.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(R===null&&M===null))return a},this.setFoveation=function(iA){a=iA,R!==null&&(R.fixedFoveation=iA),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=iA)};let rA=null;function JA(iA,cA){if(w=cA.getViewerPose(n||D),k=cA,w!==null){const mA=w.views;M!==null&&(A.setRenderTargetFramebuffer(h,M.framebuffer),A.setRenderTarget(h));let PA=!1;mA.length!==K.cameras.length&&(K.cameras.length=0,PA=!0);for(let jA=0;jA<mA.length;jA++){const DI=mA[jA];let xA=null;if(M!==null)xA=M.getViewport(DI);else{const gI=c.getViewSubImage(R,DI);xA=gI.viewport,jA===0&&(A.setRenderTargetTextures(h,gI.colorTexture,R.ignoreDepthValues?void 0:gI.depthStencilTexture),A.setRenderTarget(h))}let TA=QA[jA];TA===void 0&&(TA=new bg,TA.layers.enable(jA),TA.viewport=new Fg,QA[jA]=TA),TA.matrix.fromArray(DI.transform.matrix),TA.matrix.decompose(TA.position,TA.quaternion,TA.scale),TA.projectionMatrix.fromArray(DI.projectionMatrix),TA.projectionMatrixInverse.copy(TA.projectionMatrix).invert(),TA.viewport.set(xA.x,xA.y,xA.width,xA.height),jA===0&&(K.matrix.copy(TA.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),PA===!0&&K.cameras.push(TA)}}for(let mA=0;mA<H.length;mA++){const PA=J[mA],jA=H[mA];PA!==null&&jA!==void 0&&jA.update(PA,cA,n||D)}rA&&rA(iA,cA),cA.detectedPlanes&&g.dispatchEvent({type:"planesdetected",data:cA}),k=null}const LA=new ct;LA.setAnimationLoop(JA),this.setAnimationLoop=function(iA){rA=iA},this.dispose=function(){}}}function z0(C,A){function I(r,h){r.matrixAutoUpdate===!0&&r.updateMatrix(),h.value.copy(r.matrix)}function g(r,h){h.color.getRGB(r.fogColor.value,ht(C)),h.isFog?(r.fogNear.value=h.near,r.fogFar.value=h.far):h.isFogExp2&&(r.fogDensity.value=h.density)}function Q(r,h,H,J,u){h.isMeshBasicMaterial||h.isMeshLambertMaterial?i(r,h):h.isMeshToonMaterial?(i(r,h),c(r,h)):h.isMeshPhongMaterial?(i(r,h),w(r,h)):h.isMeshStandardMaterial?(i(r,h),R(r,h),h.isMeshPhysicalMaterial&&M(r,h,u)):h.isMeshMatcapMaterial?(i(r,h),k(r,h)):h.isMeshDepthMaterial?i(r,h):h.isMeshDistanceMaterial?(i(r,h),S(r,h)):h.isMeshNormalMaterial?i(r,h):h.isLineBasicMaterial?(D(r,h),h.isLineDashedMaterial&&t(r,h)):h.isPointsMaterial?a(r,h,H,J):h.isSpriteMaterial?n(r,h):h.isShadowMaterial?(r.color.value.copy(h.color),r.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function i(r,h){r.opacity.value=h.opacity,h.color&&r.diffuse.value.copy(h.color),h.emissive&&r.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(r.map.value=h.map,I(h.map,r.mapTransform)),h.alphaMap&&(r.alphaMap.value=h.alphaMap,I(h.alphaMap,r.alphaMapTransform)),h.bumpMap&&(r.bumpMap.value=h.bumpMap,I(h.bumpMap,r.bumpMapTransform),r.bumpScale.value=h.bumpScale,h.side===kg&&(r.bumpScale.value*=-1)),h.normalMap&&(r.normalMap.value=h.normalMap,I(h.normalMap,r.normalMapTransform),r.normalScale.value.copy(h.normalScale),h.side===kg&&r.normalScale.value.negate()),h.displacementMap&&(r.displacementMap.value=h.displacementMap,I(h.displacementMap,r.displacementMapTransform),r.displacementScale.value=h.displacementScale,r.displacementBias.value=h.displacementBias),h.emissiveMap&&(r.emissiveMap.value=h.emissiveMap,I(h.emissiveMap,r.emissiveMapTransform)),h.specularMap&&(r.specularMap.value=h.specularMap,I(h.specularMap,r.specularMapTransform)),h.alphaTest>0&&(r.alphaTest.value=h.alphaTest);const H=A.get(h).envMap;if(H&&(r.envMap.value=H,r.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=h.reflectivity,r.ior.value=h.ior,r.refractionRatio.value=h.refractionRatio),h.lightMap){r.lightMap.value=h.lightMap;const J=C._useLegacyLights===!0?Math.PI:1;r.lightMapIntensity.value=h.lightMapIntensity*J,I(h.lightMap,r.lightMapTransform)}h.aoMap&&(r.aoMap.value=h.aoMap,r.aoMapIntensity.value=h.aoMapIntensity,I(h.aoMap,r.aoMapTransform))}function D(r,h){r.diffuse.value.copy(h.color),r.opacity.value=h.opacity,h.map&&(r.map.value=h.map,I(h.map,r.mapTransform))}function t(r,h){r.dashSize.value=h.dashSize,r.totalSize.value=h.dashSize+h.gapSize,r.scale.value=h.scale}function a(r,h,H,J){r.diffuse.value.copy(h.color),r.opacity.value=h.opacity,r.size.value=h.size*H,r.scale.value=J*.5,h.map&&(r.map.value=h.map,I(h.map,r.uvTransform)),h.alphaMap&&(r.alphaMap.value=h.alphaMap,I(h.alphaMap,r.alphaMapTransform)),h.alphaTest>0&&(r.alphaTest.value=h.alphaTest)}function n(r,h){r.diffuse.value.copy(h.color),r.opacity.value=h.opacity,r.rotation.value=h.rotation,h.map&&(r.map.value=h.map,I(h.map,r.mapTransform)),h.alphaMap&&(r.alphaMap.value=h.alphaMap,I(h.alphaMap,r.alphaMapTransform)),h.alphaTest>0&&(r.alphaTest.value=h.alphaTest)}function w(r,h){r.specular.value.copy(h.specular),r.shininess.value=Math.max(h.shininess,1e-4)}function c(r,h){h.gradientMap&&(r.gradientMap.value=h.gradientMap)}function R(r,h){r.metalness.value=h.metalness,h.metalnessMap&&(r.metalnessMap.value=h.metalnessMap,I(h.metalnessMap,r.metalnessMapTransform)),r.roughness.value=h.roughness,h.roughnessMap&&(r.roughnessMap.value=h.roughnessMap,I(h.roughnessMap,r.roughnessMapTransform)),A.get(h).envMap&&(r.envMapIntensity.value=h.envMapIntensity)}function M(r,h,H){r.ior.value=h.ior,h.sheen>0&&(r.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),r.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(r.sheenColorMap.value=h.sheenColorMap,I(h.sheenColorMap,r.sheenColorMapTransform)),h.sheenRoughnessMap&&(r.sheenRoughnessMap.value=h.sheenRoughnessMap,I(h.sheenRoughnessMap,r.sheenRoughnessMapTransform))),h.clearcoat>0&&(r.clearcoat.value=h.clearcoat,r.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(r.clearcoatMap.value=h.clearcoatMap,I(h.clearcoatMap,r.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(r.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,I(h.clearcoatRoughnessMap,r.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(r.clearcoatNormalMap.value=h.clearcoatNormalMap,I(h.clearcoatNormalMap,r.clearcoatNormalMapTransform),r.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===kg&&r.clearcoatNormalScale.value.negate())),h.iridescence>0&&(r.iridescence.value=h.iridescence,r.iridescenceIOR.value=h.iridescenceIOR,r.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(r.iridescenceMap.value=h.iridescenceMap,I(h.iridescenceMap,r.iridescenceMapTransform)),h.iridescenceThicknessMap&&(r.iridescenceThicknessMap.value=h.iridescenceThicknessMap,I(h.iridescenceThicknessMap,r.iridescenceThicknessMapTransform))),h.transmission>0&&(r.transmission.value=h.transmission,r.transmissionSamplerMap.value=H.texture,r.transmissionSamplerSize.value.set(H.width,H.height),h.transmissionMap&&(r.transmissionMap.value=h.transmissionMap,I(h.transmissionMap,r.transmissionMapTransform)),r.thickness.value=h.thickness,h.thicknessMap&&(r.thicknessMap.value=h.thicknessMap,I(h.thicknessMap,r.thicknessMapTransform)),r.attenuationDistance.value=h.attenuationDistance,r.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(r.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(r.anisotropyMap.value=h.anisotropyMap,I(h.anisotropyMap,r.anisotropyMapTransform))),r.specularIntensity.value=h.specularIntensity,r.specularColor.value.copy(h.specularColor),h.specularColorMap&&(r.specularColorMap.value=h.specularColorMap,I(h.specularColorMap,r.specularColorMapTransform)),h.specularIntensityMap&&(r.specularIntensityMap.value=h.specularIntensityMap,I(h.specularIntensityMap,r.specularIntensityMapTransform))}function k(r,h){h.matcap&&(r.matcap.value=h.matcap)}function S(r,h){const H=A.get(h).light;r.referencePosition.value.setFromMatrixPosition(H.matrixWorld),r.nearDistance.value=H.shadow.camera.near,r.farDistance.value=H.shadow.camera.far}return{refreshFogUniforms:g,refreshMaterialUniforms:Q}}function _0(C,A,I,g){let Q={},i={},D=[];const t=I.isWebGL2?C.getParameter(C.MAX_UNIFORM_BUFFER_BINDINGS):0;function a(H,J){const u=J.program;g.uniformBlockBinding(H,u)}function n(H,J){let u=Q[H.id];u===void 0&&(k(H),u=w(H),Q[H.id]=u,H.addEventListener("dispose",r));const x=J.program;g.updateUBOMapping(H,x);const T=A.render.frame;i[H.id]!==T&&(R(H),i[H.id]=T)}function w(H){const J=c();H.__bindingPointIndex=J;const u=C.createBuffer(),x=H.__size,T=H.usage;return C.bindBuffer(C.UNIFORM_BUFFER,u),C.bufferData(C.UNIFORM_BUFFER,x,T),C.bindBuffer(C.UNIFORM_BUFFER,null),C.bindBufferBase(C.UNIFORM_BUFFER,J,u),u}function c(){for(let H=0;H<t;H++)if(D.indexOf(H)===-1)return D.push(H),H;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function R(H){const J=Q[H.id],u=H.uniforms,x=H.__cache;C.bindBuffer(C.UNIFORM_BUFFER,J);for(let T=0,V=u.length;T<V;T++){const QA=u[T];if(M(QA,T,x)===!0){const K=QA.__offset,m=Array.isArray(QA.value)?QA.value:[QA.value];let eA=0;for(let hA=0;hA<m.length;hA++){const wA=m[hA],Z=S(wA);typeof wA=="number"?(QA.__data[0]=wA,C.bufferSubData(C.UNIFORM_BUFFER,K+eA,QA.__data)):wA.isMatrix3?(QA.__data[0]=wA.elements[0],QA.__data[1]=wA.elements[1],QA.__data[2]=wA.elements[2],QA.__data[3]=wA.elements[0],QA.__data[4]=wA.elements[3],QA.__data[5]=wA.elements[4],QA.__data[6]=wA.elements[5],QA.__data[7]=wA.elements[0],QA.__data[8]=wA.elements[6],QA.__data[9]=wA.elements[7],QA.__data[10]=wA.elements[8],QA.__data[11]=wA.elements[0]):(wA.toArray(QA.__data,eA),eA+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}C.bufferSubData(C.UNIFORM_BUFFER,K,QA.__data)}}C.bindBuffer(C.UNIFORM_BUFFER,null)}function M(H,J,u){const x=H.value;if(u[J]===void 0){if(typeof x=="number")u[J]=x;else{const T=Array.isArray(x)?x:[x],V=[];for(let QA=0;QA<T.length;QA++)V.push(T[QA].clone());u[J]=V}return!0}else if(typeof x=="number"){if(u[J]!==x)return u[J]=x,!0}else{const T=Array.isArray(u[J])?u[J]:[u[J]],V=Array.isArray(x)?x:[x];for(let QA=0;QA<T.length;QA++){const K=T[QA];if(K.equals(V[QA])===!1)return K.copy(V[QA]),!0}}return!1}function k(H){const J=H.uniforms;let u=0;const x=16;let T=0;for(let V=0,QA=J.length;V<QA;V++){const K=J[V],m={boundary:0,storage:0},eA=Array.isArray(K.value)?K.value:[K.value];for(let hA=0,wA=eA.length;hA<wA;hA++){const Z=eA[hA],EA=S(Z);m.boundary+=EA.boundary,m.storage+=EA.storage}if(K.__data=new Float32Array(m.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=u,V>0){T=u%x;const hA=x-T;T!==0&&hA-m.boundary<0&&(u+=x-T,K.__offset=u)}u+=m.storage}return T=u%x,T>0&&(u+=x-T),H.__size=u,H.__cache={},this}function S(H){const J={boundary:0,storage:0};return typeof H=="number"?(J.boundary=4,J.storage=4):H.isVector2?(J.boundary=8,J.storage=8):H.isVector3||H.isColor?(J.boundary=16,J.storage=12):H.isVector4?(J.boundary=16,J.storage=16):H.isMatrix3?(J.boundary=48,J.storage=48):H.isMatrix4?(J.boundary=64,J.storage=64):H.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",H),J}function r(H){const J=H.target;J.removeEventListener("dispose",r);const u=D.indexOf(J.__bindingPointIndex);D.splice(u,1),C.deleteBuffer(Q[J.id]),delete Q[J.id],delete i[J.id]}function h(){for(const H in Q)C.deleteBuffer(Q[H]);D=[],Q={},i={}}return{bind:a,update:n,dispose:h}}class Ut{constructor(A={}){const{canvas:I=Os(),context:g=null,depth:Q=!0,stencil:i=!0,alpha:D=!1,antialias:t=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:n=!1,powerPreference:w="default",failIfMajorPerformanceCaveat:c=!1}=A;this.isWebGLRenderer=!0;let R;g!==null?R=g.getContextAttributes().alpha:R=D;const M=new Uint32Array(4),k=new Int32Array(4);let S=null,r=null;const h=[],H=[];this.domElement=I,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=og,this._useLegacyLights=!1,this.toneMapping=SC,this.toneMappingExposure=1;const J=this;let u=!1,x=0,T=0,V=null,QA=-1,K=null;const m=new Fg,eA=new Fg;let hA=null;const wA=new vI(0);let Z=0,EA=I.width,GA=I.height,DA=1,dA=null,RA=null;const rA=new Fg(0,0,EA,GA),JA=new Fg(0,0,EA,GA);let LA=!1;const iA=new rt;let cA=!1,mA=!1,PA=null;const jA=new ag,DI=new jI,xA=new CA,TA={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function gI(){return V===null?DA:1}let z=g;function KA(d,v){for(let AA=0;AA<d.length;AA++){const IA=d[AA],_=I.getContext(IA,v);if(_!==null)return _}return null}try{const d={alpha:!0,depth:Q,stencil:i,antialias:t,premultipliedAlpha:a,preserveDrawingBuffer:n,powerPreference:w,failIfMajorPerformanceCaveat:c};if("setAttribute"in I&&I.setAttribute("data-engine",`three.js r${zE}`),I.addEventListener("webglcontextlost",FI,!1),I.addEventListener("webglcontextrestored",b,!1),I.addEventListener("webglcontextcreationerror",fA,!1),z===null){const v=["webgl2","webgl","experimental-webgl"];if(J.isWebGL1Renderer===!0&&v.shift(),z=KA(v,d),z===null)throw KA(v)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(d){throw console.error("THREE.WebGLRenderer: "+d.message),d}let WA,rI,zA,TI,CI,iI,uI,VI,Bg,q,l,$,SA,yA,NA,ZA,lA,pA,QI,oI,MA,xI,OA,EI;function _A(){WA=new th(z),rI=new gh(z,WA,A),WA.init(rI),xI=new v0(z,WA,rI),zA=new Z0(z,WA,rI),TI=new ah(z),CI=new J0,iI=new O0(z,WA,zA,CI,rI,xI,TI),uI=new Bh(J),VI=new oh(J),Bg=new ra(z,rI),OA=new Ah(z,WA,Bg,rI),q=new Dh(z,Bg,TI,OA),l=new wh(z,q,Bg,TI),QI=new hh(z,rI,iI),ZA=new Ch(CI),$=new d0(J,uI,VI,WA,rI,OA,ZA),SA=new z0(J,CI),yA=new L0,NA=new m0(WA,rI),pA=new $n(J,uI,VI,zA,l,R,a),lA=new W0(J,l,rI),EI=new _0(z,TI,rI,zA),oI=new Ih(z,WA,TI,rI),MA=new sh(z,WA,TI,rI),TI.programs=$.programs,J.capabilities=rI,J.extensions=WA,J.properties=CI,J.renderLists=yA,J.shadowMap=lA,J.state=zA,J.info=TI}_A();const FA=new j0(J,z);this.xr=FA,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const d=WA.get("WEBGL_lose_context");d&&d.loseContext()},this.forceContextRestore=function(){const d=WA.get("WEBGL_lose_context");d&&d.restoreContext()},this.getPixelRatio=function(){return DA},this.setPixelRatio=function(d){d!==void 0&&(DA=d,this.setSize(EA,GA,!1))},this.getSize=function(d){return d.set(EA,GA)},this.setSize=function(d,v,AA=!0){if(FA.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}EA=d,GA=v,I.width=Math.floor(d*DA),I.height=Math.floor(v*DA),AA===!0&&(I.style.width=d+"px",I.style.height=v+"px"),this.setViewport(0,0,d,v)},this.getDrawingBufferSize=function(d){return d.set(EA*DA,GA*DA).floor()},this.setDrawingBufferSize=function(d,v,AA){EA=d,GA=v,DA=AA,I.width=Math.floor(d*AA),I.height=Math.floor(v*AA),this.setViewport(0,0,d,v)},this.getCurrentViewport=function(d){return d.copy(m)},this.getViewport=function(d){return d.copy(rA)},this.setViewport=function(d,v,AA,IA){d.isVector4?rA.set(d.x,d.y,d.z,d.w):rA.set(d,v,AA,IA),zA.viewport(m.copy(rA).multiplyScalar(DA).floor())},this.getScissor=function(d){return d.copy(JA)},this.setScissor=function(d,v,AA,IA){d.isVector4?JA.set(d.x,d.y,d.z,d.w):JA.set(d,v,AA,IA),zA.scissor(eA.copy(JA).multiplyScalar(DA).floor())},this.getScissorTest=function(){return LA},this.setScissorTest=function(d){zA.setScissorTest(LA=d)},this.setOpaqueSort=function(d){dA=d},this.setTransparentSort=function(d){RA=d},this.getClearColor=function(d){return d.copy(pA.getClearColor())},this.setClearColor=function(){pA.setClearColor.apply(pA,arguments)},this.getClearAlpha=function(){return pA.getClearAlpha()},this.setClearAlpha=function(){pA.setClearAlpha.apply(pA,arguments)},this.clear=function(d=!0,v=!0,AA=!0){let IA=0;if(d){let _=!1;if(V!==null){const qA=V.texture.format;_=qA===gt||qA===It||qA===At}if(_){const qA=V.texture.type,VA=qA===UC||qA===NC||qA===_E||qA===VC||qA===_o||qA===$o,$A=pA.getClearColor(),AI=pA.getClearAlpha(),GI=$A.r,aI=$A.g,eI=$A.b;VA?(M[0]=GI,M[1]=aI,M[2]=eI,M[3]=AI,z.clearBufferuiv(z.COLOR,0,M)):(k[0]=GI,k[1]=aI,k[2]=eI,k[3]=AI,z.clearBufferiv(z.COLOR,0,k))}else IA|=z.COLOR_BUFFER_BIT}v&&(IA|=z.DEPTH_BUFFER_BIT),AA&&(IA|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(IA)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){I.removeEventListener("webglcontextlost",FI,!1),I.removeEventListener("webglcontextrestored",b,!1),I.removeEventListener("webglcontextcreationerror",fA,!1),yA.dispose(),NA.dispose(),CI.dispose(),uI.dispose(),VI.dispose(),l.dispose(),OA.dispose(),EI.dispose(),$.dispose(),FA.dispose(),FA.removeEventListener("sessionstart",zI),FA.removeEventListener("sessionend",sI),PA&&(PA.dispose(),PA=null),Ag.stop()};function FI(d){d.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),u=!0}function b(){console.log("THREE.WebGLRenderer: Context Restored."),u=!1;const d=TI.autoReset,v=lA.enabled,AA=lA.autoUpdate,IA=lA.needsUpdate,_=lA.type;_A(),TI.autoReset=d,lA.enabled=v,lA.autoUpdate=AA,lA.needsUpdate=IA,lA.type=_}function fA(d){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",d.statusMessage)}function nA(d){const v=d.target;v.removeEventListener("dispose",nA),X(v)}function X(d){kA(d),CI.remove(d)}function kA(d){const v=CI.get(d).programs;v!==void 0&&(v.forEach(function(AA){$.releaseProgram(AA)}),d.isShaderMaterial&&$.releaseShaderCache(d))}this.renderBufferDirect=function(d,v,AA,IA,_,qA){v===null&&(v=TA);const VA=_.isMesh&&_.matrixWorld.determinant()<0,$A=jg(d,v,AA,IA,_);zA.setMaterial(IA,VA);let AI=AA.index,GI=1;if(IA.wireframe===!0){if(AI=q.getWireframeAttribute(AA),AI===void 0)return;GI=2}const aI=AA.drawRange,eI=AA.attributes.position;let XI=aI.start*GI,sg=(aI.start+aI.count)*GI;qA!==null&&(XI=Math.max(XI,qA.start*GI),sg=Math.min(sg,(qA.start+qA.count)*GI)),AI!==null?(XI=Math.max(XI,0),sg=Math.min(sg,AI.count)):eI!=null&&(XI=Math.max(XI,0),sg=Math.min(sg,eI.count));const gg=sg-XI;if(gg<0||gg===1/0)return;OA.setup(_,IA,$A,AA,AI);let Ug,WI=oI;if(AI!==null&&(Ug=Bg.get(AI),WI=MA,WI.setIndex(Ug)),_.isMesh)IA.wireframe===!0?(zA.setLineWidth(IA.wireframeLinewidth*gI()),WI.setMode(z.LINES)):WI.setMode(z.TRIANGLES);else if(_.isLine){let II=IA.linewidth;II===void 0&&(II=1),zA.setLineWidth(II*gI()),_.isLineSegments?WI.setMode(z.LINES):_.isLineLoop?WI.setMode(z.LINE_LOOP):WI.setMode(z.LINE_STRIP)}else _.isPoints?WI.setMode(z.POINTS):_.isSprite&&WI.setMode(z.TRIANGLES);if(_.isBatchedMesh)WI.renderMultiDraw(_._multiDrawStarts,_._multiDrawCounts,_._multiDrawCount);else if(_.isInstancedMesh)WI.renderInstances(XI,gg,_.count);else if(AA.isInstancedBufferGeometry){const II=AA._maxInstanceCount!==void 0?AA._maxInstanceCount:1/0,dC=Math.min(AA.instanceCount,II);WI.renderInstances(XI,gg,dC)}else WI.render(XI,gg)};function XA(d,v,AA){d.transparent===!0&&d.side===oC&&d.forceSinglePass===!1?(d.side=kg,d.needsUpdate=!0,aC(d,v,AA),d.side=lC,d.needsUpdate=!0,aC(d,v,AA),d.side=oC):aC(d,v,AA)}this.compile=function(d,v,AA=null){AA===null&&(AA=d),r=NA.get(AA),r.init(),H.push(r),AA.traverseVisible(function(_){_.isLight&&_.layers.test(v.layers)&&(r.pushLight(_),_.castShadow&&r.pushShadow(_))}),d!==AA&&d.traverseVisible(function(_){_.isLight&&_.layers.test(v.layers)&&(r.pushLight(_),_.castShadow&&r.pushShadow(_))}),r.setupLights(J._useLegacyLights);const IA=new Set;return d.traverse(function(_){const qA=_.material;if(qA)if(Array.isArray(qA))for(let VA=0;VA<qA.length;VA++){const $A=qA[VA];XA($A,AA,_),IA.add($A)}else XA(qA,AA,_),IA.add(qA)}),H.pop(),r=null,IA},this.compileAsync=function(d,v,AA=null){const IA=this.compile(d,v,AA);return new Promise(_=>{function qA(){if(IA.forEach(function(VA){CI.get(VA).currentProgram.isReady()&&IA.delete(VA)}),IA.size===0){_(d);return}setTimeout(qA,10)}WA.get("KHR_parallel_shader_compile")!==null?qA():setTimeout(qA,10)})};let JI=null;function W(d){JI&&JI(d)}function zI(){Ag.stop()}function sI(){Ag.start()}const Ag=new ct;Ag.setAnimationLoop(W),typeof self<"u"&&Ag.setContext(self),this.setAnimationLoop=function(d){JI=d,FA.setAnimationLoop(d),d===null?Ag.stop():Ag.start()},FA.addEventListener("sessionstart",zI),FA.addEventListener("sessionend",sI),this.render=function(d,v){if(v!==void 0&&v.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(u===!0)return;d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),FA.enabled===!0&&FA.isPresenting===!0&&(FA.cameraAutoUpdate===!0&&FA.updateCamera(v),v=FA.getCamera()),d.isScene===!0&&d.onBeforeRender(J,d,v,V),r=NA.get(d,H.length),r.init(),H.push(r),jA.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),iA.setFromProjectionMatrix(jA),mA=this.localClippingEnabled,cA=ZA.init(this.clippingPlanes,mA),S=yA.get(d,h.length),S.init(),h.push(S),tg(d,v,0,J.sortObjects),S.finish(),J.sortObjects===!0&&S.sort(dA,RA),this.info.render.frame++,cA===!0&&ZA.beginShadows();const AA=r.state.shadowsArray;if(lA.render(AA,d,v),cA===!0&&ZA.endShadows(),this.info.autoReset===!0&&this.info.reset(),pA.render(S,d),r.setupLights(J._useLegacyLights),v.isArrayCamera){const IA=v.cameras;for(let _=0,qA=IA.length;_<qA;_++){const VA=IA[_];PC(S,d,VA,VA.viewport)}}else PC(S,d,v);V!==null&&(iI.updateMultisampleRenderTarget(V),iI.updateRenderTargetMipmap(V)),d.isScene===!0&&d.onAfterRender(J,d,v),OA.resetDefaultState(),QA=-1,K=null,H.pop(),H.length>0?r=H[H.length-1]:r=null,h.pop(),h.length>0?S=h[h.length-1]:S=null};function tg(d,v,AA,IA){if(d.visible===!1)return;if(d.layers.test(v.layers)){if(d.isGroup)AA=d.renderOrder;else if(d.isLOD)d.autoUpdate===!0&&d.update(v);else if(d.isLight)r.pushLight(d),d.castShadow&&r.pushShadow(d);else if(d.isSprite){if(!d.frustumCulled||iA.intersectsSprite(d)){IA&&xA.setFromMatrixPosition(d.matrixWorld).applyMatrix4(jA);const VA=l.update(d),$A=d.material;$A.visible&&S.push(d,VA,$A,AA,xA.z,null)}}else if((d.isMesh||d.isLine||d.isPoints)&&(!d.frustumCulled||iA.intersectsObject(d))){const VA=l.update(d),$A=d.material;if(IA&&(d.boundingSphere!==void 0?(d.boundingSphere===null&&d.computeBoundingSphere(),xA.copy(d.boundingSphere.center)):(VA.boundingSphere===null&&VA.computeBoundingSphere(),xA.copy(VA.boundingSphere.center)),xA.applyMatrix4(d.matrixWorld).applyMatrix4(jA)),Array.isArray($A)){const AI=VA.groups;for(let GI=0,aI=AI.length;GI<aI;GI++){const eI=AI[GI],XI=$A[eI.materialIndex];XI&&XI.visible&&S.push(d,VA,XI,AA,xA.z,eI)}}else $A.visible&&S.push(d,VA,$A,AA,xA.z,null)}}const qA=d.children;for(let VA=0,$A=qA.length;VA<$A;VA++)tg(qA[VA],v,AA,IA)}function PC(d,v,AA,IA){const _=d.opaque,qA=d.transmissive,VA=d.transparent;r.setupLightsView(AA),cA===!0&&ZA.setGlobalState(J.clippingPlanes,AA),qA.length>0&&lB(_,qA,v,AA),IA&&zA.viewport(m.copy(IA)),_.length>0&&Qg(_,v,AA),qA.length>0&&Qg(qA,v,AA),VA.length>0&&Qg(VA,v,AA),zA.buffers.depth.setTest(!0),zA.buffers.depth.setMask(!0),zA.buffers.color.setMask(!0),zA.setPolygonOffset(!1)}function lB(d,v,AA,IA){if((AA.isScene===!0?AA.overrideMaterial:null)!==null)return;const qA=rI.isWebGL2;PA===null&&(PA=new OC(1,1,{generateMipmaps:!0,type:WA.has("EXT_color_buffer_half_float")?VB:UC,minFilter:TB,samples:qA?4:0})),J.getDrawingBufferSize(DI),qA?PA.setSize(DI.x,DI.y):PA.setSize(WE(DI.x),WE(DI.y));const VA=J.getRenderTarget();J.setRenderTarget(PA),J.getClearColor(wA),Z=J.getClearAlpha(),Z<1&&J.setClearColor(16777215,.5),J.clear();const $A=J.toneMapping;J.toneMapping=SC,Qg(d,AA,IA),iI.updateMultisampleRenderTarget(PA),iI.updateRenderTargetMipmap(PA);let AI=!1;for(let GI=0,aI=v.length;GI<aI;GI++){const eI=v[GI],XI=eI.object,sg=eI.geometry,gg=eI.material,Ug=eI.group;if(gg.side===oC&&XI.layers.test(IA.layers)){const WI=gg.side;gg.side=kg,gg.needsUpdate=!0,MI(XI,AA,IA,sg,gg,Ug),gg.side=WI,gg.needsUpdate=!0,AI=!0}}AI===!0&&(iI.updateMultisampleRenderTarget(PA),iI.updateRenderTargetMipmap(PA)),J.setRenderTarget(VA),J.setClearColor(wA,Z),J.toneMapping=$A}function Qg(d,v,AA){const IA=v.isScene===!0?v.overrideMaterial:null;for(let _=0,qA=d.length;_<qA;_++){const VA=d[_],$A=VA.object,AI=VA.geometry,GI=IA===null?VA.material:IA,aI=VA.group;$A.layers.test(AA.layers)&&MI($A,v,AA,AI,GI,aI)}}function MI(d,v,AA,IA,_,qA){d.onBeforeRender(J,v,AA,IA,_,qA),d.modelViewMatrix.multiplyMatrices(AA.matrixWorldInverse,d.matrixWorld),d.normalMatrix.getNormalMatrix(d.modelViewMatrix),_.onBeforeRender(J,v,AA,IA,d,qA),_.transparent===!0&&_.side===oC&&_.forceSinglePass===!1?(_.side=kg,_.needsUpdate=!0,J.renderBufferDirect(AA,v,IA,_,d,qA),_.side=lC,_.needsUpdate=!0,J.renderBufferDirect(AA,v,IA,_,d,qA),_.side=oC):J.renderBufferDirect(AA,v,IA,_,d,qA),d.onAfterRender(J,v,AA,IA,_,qA)}function aC(d,v,AA){v.isScene!==!0&&(v=TA);const IA=CI.get(d),_=r.state.lights,qA=r.state.shadowsArray,VA=_.state.version,$A=$.getParameters(d,_.state,qA,v,AA),AI=$.getProgramCacheKey($A);let GI=IA.programs;IA.environment=d.isMeshStandardMaterial?v.environment:null,IA.fog=v.fog,IA.envMap=(d.isMeshStandardMaterial?VI:uI).get(d.envMap||IA.environment),GI===void 0&&(d.addEventListener("dispose",nA),GI=new Map,IA.programs=GI);let aI=GI.get(AI);if(aI!==void 0){if(IA.currentProgram===aI&&IA.lightsStateVersion===VA)return pg(d,$A),aI}else $A.uniforms=$.getUniforms(d),d.onBuild(AA,$A,J),d.onBeforeCompile($A,J),aI=$.acquireProgram($A,AI),GI.set(AI,aI),IA.uniforms=$A.uniforms;const eI=IA.uniforms;return(!d.isShaderMaterial&&!d.isRawShaderMaterial||d.clipping===!0)&&(eI.clippingPlanes=ZA.uniform),pg(d,$A),IA.needsLights=N(d),IA.lightsStateVersion=VA,IA.needsLights&&(eI.ambientLightColor.value=_.state.ambient,eI.lightProbe.value=_.state.probe,eI.directionalLights.value=_.state.directional,eI.directionalLightShadows.value=_.state.directionalShadow,eI.spotLights.value=_.state.spot,eI.spotLightShadows.value=_.state.spotShadow,eI.rectAreaLights.value=_.state.rectArea,eI.ltc_1.value=_.state.rectAreaLTC1,eI.ltc_2.value=_.state.rectAreaLTC2,eI.pointLights.value=_.state.point,eI.pointLightShadows.value=_.state.pointShadow,eI.hemisphereLights.value=_.state.hemi,eI.directionalShadowMap.value=_.state.directionalShadowMap,eI.directionalShadowMatrix.value=_.state.directionalShadowMatrix,eI.spotShadowMap.value=_.state.spotShadowMap,eI.spotLightMatrix.value=_.state.spotLightMatrix,eI.spotLightMap.value=_.state.spotLightMap,eI.pointShadowMap.value=_.state.pointShadowMap,eI.pointShadowMatrix.value=_.state.pointShadowMatrix),IA.currentProgram=aI,IA.uniformsList=null,aI}function Rg(d){if(d.uniformsList===null){const v=d.currentProgram.getUniforms();d.uniformsList=fQ.seqWithValue(v.seq,d.uniforms)}return d.uniformsList}function pg(d,v){const AA=CI.get(d);AA.outputColorSpace=v.outputColorSpace,AA.batching=v.batching,AA.instancing=v.instancing,AA.instancingColor=v.instancingColor,AA.skinning=v.skinning,AA.morphTargets=v.morphTargets,AA.morphNormals=v.morphNormals,AA.morphColors=v.morphColors,AA.morphTargetsCount=v.morphTargetsCount,AA.numClippingPlanes=v.numClippingPlanes,AA.numIntersection=v.numClipIntersection,AA.vertexAlphas=v.vertexAlphas,AA.vertexTangents=v.vertexTangents,AA.toneMapping=v.toneMapping}function jg(d,v,AA,IA,_){v.isScene!==!0&&(v=TA),iI.resetTextureUnits();const qA=v.fog,VA=IA.isMeshStandardMaterial?v.environment:null,$A=V===null?J.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:sC,AI=(IA.isMeshStandardMaterial?VI:uI).get(IA.envMap||VA),GI=IA.vertexColors===!0&&!!AA.attributes.color&&AA.attributes.color.itemSize===4,aI=!!AA.attributes.tangent&&(!!IA.normalMap||IA.anisotropy>0),eI=!!AA.morphAttributes.position,XI=!!AA.morphAttributes.normal,sg=!!AA.morphAttributes.color;let gg=SC;IA.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(gg=J.toneMapping);const Ug=AA.morphAttributes.position||AA.morphAttributes.normal||AA.morphAttributes.color,WI=Ug!==void 0?Ug.length:0,II=CI.get(IA),dC=r.state.lights;if(cA===!0&&(mA===!0||d!==K)){const Cg=d===K&&IA.id===QA;ZA.setState(IA,d,Cg)}let PI=!1;IA.version===II.__version?(II.needsLights&&II.lightsStateVersion!==dC.state.version||II.outputColorSpace!==$A||_.isBatchedMesh&&II.batching===!1||!_.isBatchedMesh&&II.batching===!0||_.isInstancedMesh&&II.instancing===!1||!_.isInstancedMesh&&II.instancing===!0||_.isSkinnedMesh&&II.skinning===!1||!_.isSkinnedMesh&&II.skinning===!0||_.isInstancedMesh&&II.instancingColor===!0&&_.instanceColor===null||_.isInstancedMesh&&II.instancingColor===!1&&_.instanceColor!==null||II.envMap!==AI||IA.fog===!0&&II.fog!==qA||II.numClippingPlanes!==void 0&&(II.numClippingPlanes!==ZA.numPlanes||II.numIntersection!==ZA.numIntersection)||II.vertexAlphas!==GI||II.vertexTangents!==aI||II.morphTargets!==eI||II.morphNormals!==XI||II.morphColors!==sg||II.toneMapping!==gg||rI.isWebGL2===!0&&II.morphTargetsCount!==WI)&&(PI=!0):(PI=!0,II.__version=IA.version);let Jg=II.currentProgram;PI===!0&&(Jg=aC(IA,v,_));let eC=!1,$g=!1,nC=!1;const kI=Jg.getUniforms(),hg=II.uniforms;if(zA.useProgram(Jg.program)&&(eC=!0,$g=!0,nC=!0),IA.id!==QA&&(QA=IA.id,$g=!0),eC||K!==d){kI.setValue(z,"projectionMatrix",d.projectionMatrix),kI.setValue(z,"viewMatrix",d.matrixWorldInverse);const Cg=kI.map.cameraPosition;Cg!==void 0&&Cg.setValue(z,xA.setFromMatrixPosition(d.matrixWorld)),rI.logarithmicDepthBuffer&&kI.setValue(z,"logDepthBufFC",2/(Math.log(d.far+1)/Math.LN2)),(IA.isMeshPhongMaterial||IA.isMeshToonMaterial||IA.isMeshLambertMaterial||IA.isMeshBasicMaterial||IA.isMeshStandardMaterial||IA.isShaderMaterial)&&kI.setValue(z,"isOrthographic",d.isOrthographicCamera===!0),K!==d&&(K=d,$g=!0,nC=!0)}if(_.isSkinnedMesh){kI.setOptional(z,_,"bindMatrix"),kI.setOptional(z,_,"bindMatrixInverse");const Cg=_.skeleton;Cg&&(rI.floatVertexTextures?(Cg.boneTexture===null&&Cg.computeBoneTexture(),kI.setValue(z,"boneTexture",Cg.boneTexture,iI)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}_.isBatchedMesh&&(kI.setOptional(z,_,"batchingTexture"),kI.setValue(z,"batchingTexture",_._matricesTexture,iI));const RI=AA.morphAttributes;if((RI.position!==void 0||RI.normal!==void 0||RI.color!==void 0&&rI.isWebGL2===!0)&&QI.update(_,AA,Jg),($g||II.receiveShadow!==_.receiveShadow)&&(II.receiveShadow=_.receiveShadow,kI.setValue(z,"receiveShadow",_.receiveShadow)),IA.isMeshGouraudMaterial&&IA.envMap!==null&&(hg.envMap.value=AI,hg.flipEnvMap.value=AI.isCubeTexture&&AI.isRenderTargetTexture===!1?-1:1),$g&&(kI.setValue(z,"toneMappingExposure",J.toneMappingExposure),II.needsLights&&wI(hg,nC),qA&&IA.fog===!0&&SA.refreshFogUniforms(hg,qA),SA.refreshMaterialUniforms(hg,IA,DA,GA,PA),fQ.upload(z,Rg(II),hg,iI)),IA.isShaderMaterial&&IA.uniformsNeedUpdate===!0&&(fQ.upload(z,Rg(II),hg,iI),IA.uniformsNeedUpdate=!1),IA.isSpriteMaterial&&kI.setValue(z,"center",_.center),kI.setValue(z,"modelViewMatrix",_.modelViewMatrix),kI.setValue(z,"normalMatrix",_.normalMatrix),kI.setValue(z,"modelMatrix",_.matrixWorld),IA.isShaderMaterial||IA.isRawShaderMaterial){const Cg=IA.uniformsGroups;for(let JC=0,kB=Cg.length;JC<kB;JC++)if(rI.isWebGL2){const jC=Cg[JC];EI.update(jC,Jg),EI.bind(jC,Jg)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Jg}function wI(d,v){d.ambientLightColor.needsUpdate=v,d.lightProbe.needsUpdate=v,d.directionalLights.needsUpdate=v,d.directionalLightShadows.needsUpdate=v,d.pointLights.needsUpdate=v,d.pointLightShadows.needsUpdate=v,d.spotLights.needsUpdate=v,d.spotLightShadows.needsUpdate=v,d.rectAreaLights.needsUpdate=v,d.hemisphereLights.needsUpdate=v}function N(d){return d.isMeshLambertMaterial||d.isMeshToonMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isShadowMaterial||d.isShaderMaterial&&d.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(d,v,AA){CI.get(d.texture).__webglTexture=v,CI.get(d.depthTexture).__webglTexture=AA;const IA=CI.get(d);IA.__hasExternalTextures=!0,IA.__hasExternalTextures&&(IA.__autoAllocateDepthBuffer=AA===void 0,IA.__autoAllocateDepthBuffer||WA.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),IA.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(d,v){const AA=CI.get(d);AA.__webglFramebuffer=v,AA.__useDefaultFramebuffer=v===void 0},this.setRenderTarget=function(d,v=0,AA=0){V=d,x=v,T=AA;let IA=!0,_=null,qA=!1,VA=!1;if(d){const AI=CI.get(d);AI.__useDefaultFramebuffer!==void 0?(zA.bindFramebuffer(z.FRAMEBUFFER,null),IA=!1):AI.__webglFramebuffer===void 0?iI.setupRenderTarget(d):AI.__hasExternalTextures&&iI.rebindTextures(d,CI.get(d.texture).__webglTexture,CI.get(d.depthTexture).__webglTexture);const GI=d.texture;(GI.isData3DTexture||GI.isDataArrayTexture||GI.isCompressedArrayTexture)&&(VA=!0);const aI=CI.get(d).__webglFramebuffer;d.isWebGLCubeRenderTarget?(Array.isArray(aI[v])?_=aI[v][AA]:_=aI[v],qA=!0):rI.isWebGL2&&d.samples>0&&iI.useMultisampledRTT(d)===!1?_=CI.get(d).__webglMultisampledFramebuffer:Array.isArray(aI)?_=aI[AA]:_=aI,m.copy(d.viewport),eA.copy(d.scissor),hA=d.scissorTest}else m.copy(rA).multiplyScalar(DA).floor(),eA.copy(JA).multiplyScalar(DA).floor(),hA=LA;if(zA.bindFramebuffer(z.FRAMEBUFFER,_)&&rI.drawBuffers&&IA&&zA.drawBuffers(d,_),zA.viewport(m),zA.scissor(eA),zA.setScissorTest(hA),qA){const AI=CI.get(d.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+v,AI.__webglTexture,AA)}else if(VA){const AI=CI.get(d.texture),GI=v||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,AI.__webglTexture,AA||0,GI)}QA=-1},this.readRenderTargetPixels=function(d,v,AA,IA,_,qA,VA){if(!(d&&d.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $A=CI.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&VA!==void 0&&($A=$A[VA]),$A){zA.bindFramebuffer(z.FRAMEBUFFER,$A);try{const AI=d.texture,GI=AI.format,aI=AI.type;if(GI!==Xg&&xI.convert(GI)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const eI=aI===VB&&(WA.has("EXT_color_buffer_half_float")||rI.isWebGL2&&WA.has("EXT_color_buffer_float"));if(aI!==UC&&xI.convert(aI)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(aI===yC&&(rI.isWebGL2||WA.has("OES_texture_float")||WA.has("WEBGL_color_buffer_float")))&&!eI){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}v>=0&&v<=d.width-IA&&AA>=0&&AA<=d.height-_&&z.readPixels(v,AA,IA,_,xI.convert(GI),xI.convert(aI),qA)}finally{const AI=V!==null?CI.get(V).__webglFramebuffer:null;zA.bindFramebuffer(z.FRAMEBUFFER,AI)}}},this.copyFramebufferToTexture=function(d,v,AA=0){const IA=Math.pow(2,-AA),_=Math.floor(v.image.width*IA),qA=Math.floor(v.image.height*IA);iI.setTexture2D(v,0),z.copyTexSubImage2D(z.TEXTURE_2D,AA,0,0,d.x,d.y,_,qA),zA.unbindTexture()},this.copyTextureToTexture=function(d,v,AA,IA=0){const _=v.image.width,qA=v.image.height,VA=xI.convert(AA.format),$A=xI.convert(AA.type);iI.setTexture2D(AA,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,AA.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,AA.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,AA.unpackAlignment),v.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,IA,d.x,d.y,_,qA,VA,$A,v.image.data):v.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,IA,d.x,d.y,v.mipmaps[0].width,v.mipmaps[0].height,VA,v.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,IA,d.x,d.y,VA,$A,v.image),IA===0&&AA.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),zA.unbindTexture()},this.copyTextureToTexture3D=function(d,v,AA,IA,_=0){if(J.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const qA=d.max.x-d.min.x+1,VA=d.max.y-d.min.y+1,$A=d.max.z-d.min.z+1,AI=xI.convert(IA.format),GI=xI.convert(IA.type);let aI;if(IA.isData3DTexture)iI.setTexture3D(IA,0),aI=z.TEXTURE_3D;else if(IA.isDataArrayTexture)iI.setTexture2DArray(IA,0),aI=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,IA.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,IA.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,IA.unpackAlignment);const eI=z.getParameter(z.UNPACK_ROW_LENGTH),XI=z.getParameter(z.UNPACK_IMAGE_HEIGHT),sg=z.getParameter(z.UNPACK_SKIP_PIXELS),gg=z.getParameter(z.UNPACK_SKIP_ROWS),Ug=z.getParameter(z.UNPACK_SKIP_IMAGES),WI=AA.isCompressedTexture?AA.mipmaps[0]:AA.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,WI.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,WI.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,d.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,d.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,d.min.z),AA.isDataTexture||AA.isData3DTexture?z.texSubImage3D(aI,_,v.x,v.y,v.z,qA,VA,$A,AI,GI,WI.data):AA.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(aI,_,v.x,v.y,v.z,qA,VA,$A,AI,WI.data)):z.texSubImage3D(aI,_,v.x,v.y,v.z,qA,VA,$A,AI,GI,WI),z.pixelStorei(z.UNPACK_ROW_LENGTH,eI),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,XI),z.pixelStorei(z.UNPACK_SKIP_PIXELS,sg),z.pixelStorei(z.UNPACK_SKIP_ROWS,gg),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ug),_===0&&IA.generateMipmaps&&z.generateMipmap(aI),zA.unbindTexture()},this.initTexture=function(d){d.isCubeTexture?iI.setTextureCube(d,0):d.isData3DTexture?iI.setTexture3D(d,0):d.isDataArrayTexture||d.isCompressedArrayTexture?iI.setTexture2DArray(d,0):iI.setTexture2D(d,0),zA.unbindTexture()},this.resetState=function(){x=0,T=0,V=null,zA.reset(),OA.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return DC}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(A){this._outputColorSpace=A;const I=this.getContext();I.drawingBufferColorSpace=A===$E?"display-p3":"srgb",I.unpackColorSpace=_I.workingColorSpace===VQ?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(A){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!A}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===og?KC:Bt}set outputEncoding(A){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=A===KC?og:sC}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(A){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=A}}class $0 extends Ut{}$0.prototype.isWebGL1Renderer=!0;class To extends ug{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(A,I){return super.copy(A,I),A.background!==null&&(this.background=A.background.clone()),A.environment!==null&&(this.environment=A.environment.clone()),A.fog!==null&&(this.fog=A.fog.clone()),this.backgroundBlurriness=A.backgroundBlurriness,this.backgroundIntensity=A.backgroundIntensity,A.overrideMaterial!==null&&(this.overrideMaterial=A.overrideMaterial.clone()),this.matrixAutoUpdate=A.matrixAutoUpdate,this}toJSON(A){const I=super.toJSON(A);return this.fog!==null&&(I.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(I.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(I.object.backgroundIntensity=this.backgroundIntensity),I}}class Aw extends vB{constructor(A){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new vI(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vI(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qt,this.normalScale=new jI(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.defines={STANDARD:""},this.color.copy(A.color),this.roughness=A.roughness,this.metalness=A.metalness,this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.emissive.copy(A.emissive),this.emissiveMap=A.emissiveMap,this.emissiveIntensity=A.emissiveIntensity,this.bumpMap=A.bumpMap,this.bumpScale=A.bumpScale,this.normalMap=A.normalMap,this.normalMapType=A.normalMapType,this.normalScale.copy(A.normalScale),this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.roughnessMap=A.roughnessMap,this.metalnessMap=A.metalnessMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapIntensity=A.envMapIntensity,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.flatShading=A.flatShading,this.fog=A.fog,this}}const Vo={enabled:!1,files:{},add:function(C,A){this.enabled!==!1&&(this.files[C]=A)},get:function(C){if(this.enabled!==!1)return this.files[C]},remove:function(C){delete this.files[C]},clear:function(){this.files={}}};class Iw{constructor(A,I,g){const Q=this;let i=!1,D=0,t=0,a;const n=[];this.onStart=void 0,this.onLoad=A,this.onProgress=I,this.onError=g,this.itemStart=function(w){t++,i===!1&&Q.onStart!==void 0&&Q.onStart(w,D,t),i=!0},this.itemEnd=function(w){D++,Q.onProgress!==void 0&&Q.onProgress(w,D,t),D===t&&(i=!1,Q.onLoad!==void 0&&Q.onLoad())},this.itemError=function(w){Q.onError!==void 0&&Q.onError(w)},this.resolveURL=function(w){return a?a(w):w},this.setURLModifier=function(w){return a=w,this},this.addHandler=function(w,c){return n.push(w,c),this},this.removeHandler=function(w){const c=n.indexOf(w);return c!==-1&&n.splice(c,2),this},this.getHandler=function(w){for(let c=0,R=n.length;c<R;c+=2){const M=n[c],k=n[c+1];if(M.global&&(M.lastIndex=0),M.test(w))return k}return null}}}const gw=new Iw;class gi{constructor(A){this.manager=A!==void 0?A:gw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(A,I){const g=this;return new Promise(function(Q,i){g.load(A,Q,I,i)})}parse(){}setCrossOrigin(A){return this.crossOrigin=A,this}setWithCredentials(A){return this.withCredentials=A,this}setPath(A){return this.path=A,this}setResourcePath(A){return this.resourcePath=A,this}setRequestHeader(A){return this.requestHeader=A,this}}gi.DEFAULT_MATERIAL_NAME="__DEFAULT";class Cw extends gi{constructor(A){super(A)}load(A,I,g,Q){this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const i=this,D=Vo.get(A);if(D!==void 0)return i.manager.itemStart(A),setTimeout(function(){I&&I(D),i.manager.itemEnd(A)},0),D;const t=WB("img");function a(){w(),Vo.add(A,this),I&&I(this),i.manager.itemEnd(A)}function n(c){w(),Q&&Q(c),i.manager.itemError(A),i.manager.itemEnd(A)}function w(){t.removeEventListener("load",a,!1),t.removeEventListener("error",n,!1)}return t.addEventListener("load",a,!1),t.addEventListener("error",n,!1),A.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(t.crossOrigin=this.crossOrigin),i.manager.itemStart(A),t.src=A,t}}class Kt extends gi{constructor(A){super(A)}load(A,I,g,Q){const i=new dg,D=new Cw(this.manager);return D.setCrossOrigin(this.crossOrigin),D.setPath(this.path),D.load(A,function(t){i.image=t,i.needsUpdate=!0,I!==void 0&&I(i)},g,Q),i}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zE}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zE);const Wo=new CA,Bw=new SB,Zo=new CA,zg=new ag,Qw=new ag;class Ew{constructor(A={}){const I=this;let g,Q,i,D;const t={camera:{style:""},objects:new WeakMap},a=A.element!==void 0?A.element:document.createElement("div");a.style.overflow="hidden",this.domElement=a;const n=document.createElement("div");n.style.transformOrigin="0 0",n.style.pointerEvents="none",a.appendChild(n);const w=document.createElement("div");w.style.transformStyle="preserve-3d",n.appendChild(w),this.getSize=function(){return{width:g,height:Q}},this.render=function(S,r){const h=r.projectionMatrix.elements[5]*D;r.view&&r.view.enabled?(n.style.transform=`translate( ${-r.view.offsetX*(g/r.view.width)}px, ${-r.view.offsetY*(Q/r.view.height)}px )`,n.style.transform+=`scale( ${r.view.fullWidth/r.view.width}, ${r.view.fullHeight/r.view.height} )`):n.style.transform="",S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),r.parent===null&&r.matrixWorldAutoUpdate===!0&&r.updateMatrixWorld();let H,J;r.isOrthographicCamera&&(H=-(r.right+r.left)/2,J=(r.top+r.bottom)/2);const u=r.view&&r.view.enabled?r.view.height/r.view.fullHeight:1,x=r.isOrthographicCamera?`scale( ${u} )scale(`+h+")translate("+c(H)+"px,"+c(J)+"px)"+R(r.matrixWorldInverse):`scale( ${u} )translateZ(`+h+"px)"+R(r.matrixWorldInverse),V=(r.isPerspectiveCamera?"perspective("+h+"px) ":"")+x+"translate("+i+"px,"+D+"px)";t.camera.style!==V&&(w.style.transform=V,t.camera.style=V),k(S,S,r)},this.setSize=function(S,r){g=S,Q=r,i=g/2,D=Q/2,a.style.width=S+"px",a.style.height=r+"px",n.style.width=S+"px",n.style.height=r+"px",w.style.width=S+"px",w.style.height=r+"px"};function c(S){return Math.abs(S)<1e-10?0:S}function R(S){const r=S.elements;return"matrix3d("+c(r[0])+","+c(-r[1])+","+c(r[2])+","+c(r[3])+","+c(r[4])+","+c(-r[5])+","+c(r[6])+","+c(r[7])+","+c(r[8])+","+c(-r[9])+","+c(r[10])+","+c(r[11])+","+c(r[12])+","+c(-r[13])+","+c(r[14])+","+c(r[15])+")"}function M(S){const r=S.elements;return"translate(-50%,-50%)"+("matrix3d("+c(r[0])+","+c(r[1])+","+c(r[2])+","+c(r[3])+","+c(-r[4])+","+c(-r[5])+","+c(-r[6])+","+c(-r[7])+","+c(r[8])+","+c(r[9])+","+c(r[10])+","+c(r[11])+","+c(r[12])+","+c(r[13])+","+c(r[14])+","+c(r[15])+")")}function k(S,r,h,H){if(S.isCSS3DObject){const J=S.visible===!0&&S.layers.test(h.layers)===!0;if(S.element.style.display=J===!0?"":"none",J===!0){S.onBeforeRender(I,r,h);let u;S.isCSS3DSprite?(zg.copy(h.matrixWorldInverse),zg.transpose(),S.rotation2D!==0&&zg.multiply(Qw.makeRotationZ(S.rotation2D)),S.matrixWorld.decompose(Wo,Bw,Zo),zg.setPosition(Wo),zg.scale(Zo),zg.elements[3]=0,zg.elements[7]=0,zg.elements[11]=0,zg.elements[15]=1,u=M(zg)):u=M(S.matrixWorld);const x=S.element,T=t.objects.get(S);if(T===void 0||T.style!==u){x.style.transform=u;const V={style:u};t.objects.set(S,V)}x.parentNode!==w&&w.appendChild(x),S.onAfterRender(I,r,h)}}for(let J=0,u=S.children.length;J<u;J++)k(S.children[J],r,h)}}}var LE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};const Oo=(C,A)=>{const I=2*Math.PI*A*C;return I/(I+1)},vo=(C,A,I)=>C*A+(1-C)*I;class fE{constructor({minCutOff:A,beta:I}){this.minCutOff=A,this.beta=I,this.dCutOff=.001,this.xPrev=null,this.dxPrev=null,this.tPrev=null,this.initialized=!1}reset(){this.initialized=!1}filter(A,I){if(!this.initialized)return this.initialized=!0,this.xPrev=I,this.dxPrev=I.map(()=>0),this.tPrev=A,I;const{xPrev:g,tPrev:Q,dxPrev:i}=this,D=A-Q,t=Oo(D,this.dCutOff),a=[],n=[],w=[];for(let c=0;c<I.length;c++){a[c]=(I[c]-g[c])/D,n[c]=vo(t,a[c],i[c]);const R=this.minCutOff+this.beta*Math.abs(n[c]),M=Oo(D,R);w[c]=vo(M,I[c],g[c])}return this.xPrev=w,this.dxPrev=n,this.tPrev=A,w}}const iw=`<div class="mindar-ui-overlay mindar-ui-loading">
  <div class="loader"/>
</div>
`,ow=`<div class="mindar-ui-overlay mindar-ui-compatibility">
  <div class="content">
    <h1>Failed to launch :(</h1>
    <p>
      Looks like your device/browser is not compatible.
    </p>

    <br/>
    <br/>
    <p>
      Please try the following recommended browsers:
    </p>
    <p>
      For Android device - Chrome
    </p>
    <p>
      For iOS device - Safari
    </p>
  </div>
</div>
`,tw=`<div class="mindar-ui-overlay mindar-ui-scanning">
  <div class="scanning">
    <div class="inner">
      <div class="scanline"/>
    </div>
  </div>
</div>
`,Dw=".mindar-ui-overlay{display:flex;align-items:center;justify-content:center;position:absolute;left:0;right:0;top:0;bottom:0;background:transparent;z-index:2}.mindar-ui-overlay.hidden{display:none}.mindar-ui-loading .loader{border:16px solid #222;border-top:16px solid white;opacity:.8;border-radius:50%;width:120px;height:120px;animation:spin 2s linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.mindar-ui-compatibility .content{background:black;color:#fff;opacity:.8;text-align:center;margin:20px;padding:20px;min-height:50vh}@media (min-aspect-ratio: 1/1){.mindar-ui-scanning .scanning{width:50vh;height:50vh}}@media (max-aspect-ratio: 1/1){.mindar-ui-scanning .scanning{width:80vw;height:80vw}}.mindar-ui-scanning .scanning .inner{position:relative;width:100%;height:100%;opacity:.8;background:linear-gradient(to right,white 10px,transparent 10px) 0 0,linear-gradient(to right,white 10px,transparent 10px) 0 100%,linear-gradient(to left,white 10px,transparent 10px) 100% 0,linear-gradient(to left,white 10px,transparent 10px) 100% 100%,linear-gradient(to bottom,white 10px,transparent 10px) 0 0,linear-gradient(to bottom,white 10px,transparent 10px) 100% 0,linear-gradient(to top,white 10px,transparent 10px) 0 100%,linear-gradient(to top,white 10px,transparent 10px) 100% 100%;background-repeat:no-repeat;background-size:40px 40px}.mindar-ui-scanning .scanning .inner .scanline{position:absolute;width:100%;height:10px;background:white;animation:move 2s linear infinite}@keyframes move{0%,to{top:0%}50%{top:calc(100% - 10px)}}";class sw{constructor({uiLoading:A,uiScanning:I,uiError:g}){const Q=document.createElement("style");Q.innerText=Dw,document.head.appendChild(Q),A==="yes"?this.loadingModal=this._loadHTML(iw):A!=="no"&&(this.loadingModal=document.querySelector(A)),g==="yes"?this.compatibilityModal=this._loadHTML(ow):g!=="no"&&(this.compatibilityModal=document.querySelector(g)),I==="yes"?this.scanningMask=this._loadHTML(tw):I!=="no"&&(this.scanningMask=document.querySelector(I)),this.hideLoading(),this.hideCompatibility(),this.hideScanning()}showLoading(){this.loadingModal&&this.loadingModal.classList.remove("hidden")}hideLoading(){this.loadingModal&&this.loadingModal.classList.add("hidden")}showCompatibility(){this.compatibilityModal&&this.compatibilityModal.classList.remove("hidden")}hideCompatibility(){this.compatibilityModal&&this.compatibilityModal.classList.add("hidden")}showScanning(){this.scanningMask&&this.scanningMask.classList.remove("hidden")}hideScanning(){this.scanningMask&&this.scanningMask.classList.add("hidden")}_loadHTML(A){const I=document.createElement("template");I.innerHTML=A.trim();const g=I.content.firstChild;return document.getElementsByTagName("body")[0].appendChild(g),g}}var aw={};(function(){var C;function A(s){var G=0;return function(){return G<s.length?{done:!1,value:s[G++]}:{done:!0}}}var I=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,G,F){return s==Array.prototype||s==Object.prototype||(s[G]=F.value),s};function g(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof LE=="object"&&LE];for(var G=0;G<s.length;++G){var F=s[G];if(F&&F.Math==Math)return F}throw Error("Cannot find global object")}var Q=g(this);function i(s,G){if(G)A:{var F=Q;s=s.split(".");for(var p=0;p<s.length-1;p++){var O=s[p];if(!(O in F))break A;F=F[O]}s=s[s.length-1],p=F[s],G=G(p),G!=p&&G!=null&&I(F,s,{configurable:!0,writable:!0,value:G})}}i("Symbol",function(s){function G(tA){if(this instanceof G)throw new TypeError("Symbol is not a constructor");return new F(p+(tA||"")+"_"+O++,tA)}function F(tA,j){this.g=tA,I(this,"description",{configurable:!0,writable:!0,value:j})}if(s)return s;F.prototype.toString=function(){return this.g};var p="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",O=0;return G}),i("Symbol.iterator",function(s){if(s)return s;s=Symbol("Symbol.iterator");for(var G="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),F=0;F<G.length;F++){var p=Q[G[F]];typeof p=="function"&&typeof p.prototype[s]!="function"&&I(p.prototype,s,{configurable:!0,writable:!0,value:function(){return D(A(this))}})}return s});function D(s){return s={next:s},s[Symbol.iterator]=function(){return this},s}function t(s){var G=typeof Symbol<"u"&&Symbol.iterator&&s[Symbol.iterator];return G?G.call(s):{next:A(s)}}function a(s){if(!(s instanceof Array)){s=t(s);for(var G,F=[];!(G=s.next()).done;)F.push(G.value);s=F}return s}var n=typeof Object.create=="function"?Object.create:function(s){function G(){}return G.prototype=s,new G},w;if(typeof Object.setPrototypeOf=="function")w=Object.setPrototypeOf;else{var c;A:{var R={a:!0},M={};try{M.__proto__=R,c=M.a;break A}catch{}c=!1}w=c?function(s,G){if(s.__proto__=G,s.__proto__!==G)throw new TypeError(s+" is not extensible");return s}:null}var k=w;function S(s,G){if(s.prototype=n(G.prototype),s.prototype.constructor=s,k)k(s,G);else for(var F in G)if(F!="prototype")if(Object.defineProperties){var p=Object.getOwnPropertyDescriptor(G,F);p&&Object.defineProperty(s,F,p)}else s[F]=G[F];s.ea=G.prototype}function r(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.s=this.m=0,this.j=null}function h(s){if(s.l)throw new TypeError("Generator is already running");s.l=!0}r.prototype.o=function(s){this.h=s};function H(s,G){s.j={U:G,V:!0},s.g=s.m||s.s}r.prototype.return=function(s){this.j={return:s},this.g=this.s};function J(s,G,F){return s.g=F,{value:G}}function u(s){this.g=new r,this.h=s}function x(s,G){h(s.g);var F=s.g.i;return F?T(s,"return"in F?F.return:function(p){return{value:p,done:!0}},G,s.g.return):(s.g.return(G),V(s))}function T(s,G,F,p){try{var O=G.call(s.g.i,F);if(!(O instanceof Object))throw new TypeError("Iterator result "+O+" is not an object");if(!O.done)return s.g.l=!1,O;var tA=O.value}catch(j){return s.g.i=null,H(s.g,j),V(s)}return s.g.i=null,p.call(s.g,tA),V(s)}function V(s){for(;s.g.g;)try{var G=s.h(s.g);if(G)return s.g.l=!1,{value:G.value,done:!1}}catch(F){s.g.h=void 0,H(s.g,F)}if(s.g.l=!1,s.g.j){if(G=s.g.j,s.g.j=null,G.V)throw G.U;return{value:G.return,done:!0}}return{value:void 0,done:!0}}function QA(s){this.next=function(G){return h(s.g),s.g.i?G=T(s,s.g.i.next,G,s.g.o):(s.g.o(G),G=V(s)),G},this.throw=function(G){return h(s.g),s.g.i?G=T(s,s.g.i.throw,G,s.g.o):(H(s.g,G),G=V(s)),G},this.return=function(G){return x(s,G)},this[Symbol.iterator]=function(){return this}}function K(s,G){return G=new QA(new u(G)),k&&s.prototype&&k(G,s.prototype),G}function m(s,G){s instanceof String&&(s+="");var F=0,p=!1,O={next:function(){if(!p&&F<s.length){var tA=F++;return{value:G(tA,s[tA]),done:!1}}return p=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}var eA=typeof Object.assign=="function"?Object.assign:function(s,G){for(var F=1;F<arguments.length;F++){var p=arguments[F];if(p)for(var O in p)Object.prototype.hasOwnProperty.call(p,O)&&(s[O]=p[O])}return s};i("Object.assign",function(s){return s||eA}),i("Promise",function(s){function G(j){this.h=0,this.i=void 0,this.g=[],this.o=!1;var sA=this.j();try{j(sA.resolve,sA.reject)}catch(UA){sA.reject(UA)}}function F(){this.g=null}function p(j){return j instanceof G?j:new G(function(sA){sA(j)})}if(s)return s;F.prototype.h=function(j){if(this.g==null){this.g=[];var sA=this;this.i(function(){sA.l()})}this.g.push(j)};var O=Q.setTimeout;F.prototype.i=function(j){O(j,0)},F.prototype.l=function(){for(;this.g&&this.g.length;){var j=this.g;this.g=[];for(var sA=0;sA<j.length;++sA){var UA=j[sA];j[sA]=null;try{UA()}catch(bA){this.j(bA)}}}this.g=null},F.prototype.j=function(j){this.i(function(){throw j})},G.prototype.j=function(){function j(bA){return function(nI){UA||(UA=!0,bA.call(sA,nI))}}var sA=this,UA=!1;return{resolve:j(this.C),reject:j(this.l)}},G.prototype.C=function(j){if(j===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(j instanceof G)this.F(j);else{A:switch(typeof j){case"object":var sA=j!=null;break A;case"function":sA=!0;break A;default:sA=!1}sA?this.u(j):this.m(j)}},G.prototype.u=function(j){var sA=void 0;try{sA=j.then}catch(UA){this.l(UA);return}typeof sA=="function"?this.G(sA,j):this.m(j)},G.prototype.l=function(j){this.s(2,j)},G.prototype.m=function(j){this.s(1,j)},G.prototype.s=function(j,sA){if(this.h!=0)throw Error("Cannot settle("+j+", "+sA+"): Promise already settled in state"+this.h);this.h=j,this.i=sA,this.h===2&&this.D(),this.A()},G.prototype.D=function(){var j=this;O(function(){if(j.B()){var sA=Q.console;typeof sA<"u"&&sA.error(j.i)}},1)},G.prototype.B=function(){if(this.o)return!1;var j=Q.CustomEvent,sA=Q.Event,UA=Q.dispatchEvent;return typeof UA>"u"?!0:(typeof j=="function"?j=new j("unhandledrejection",{cancelable:!0}):typeof sA=="function"?j=new sA("unhandledrejection",{cancelable:!0}):(j=Q.document.createEvent("CustomEvent"),j.initCustomEvent("unhandledrejection",!1,!0,j)),j.promise=this,j.reason=this.i,UA(j))},G.prototype.A=function(){if(this.g!=null){for(var j=0;j<this.g.length;++j)tA.h(this.g[j]);this.g=null}};var tA=new F;return G.prototype.F=function(j){var sA=this.j();j.J(sA.resolve,sA.reject)},G.prototype.G=function(j,sA){var UA=this.j();try{j.call(sA,UA.resolve,UA.reject)}catch(bA){UA.reject(bA)}},G.prototype.then=function(j,sA){function UA(SI,cI){return typeof SI=="function"?function(vA){try{bA(SI(vA))}catch(hI){nI(hI)}}:cI}var bA,nI,pI=new G(function(SI,cI){bA=SI,nI=cI});return this.J(UA(j,bA),UA(sA,nI)),pI},G.prototype.catch=function(j){return this.then(void 0,j)},G.prototype.J=function(j,sA){function UA(){switch(bA.h){case 1:j(bA.i);break;case 2:sA(bA.i);break;default:throw Error("Unexpected state: "+bA.h)}}var bA=this;this.g==null?tA.h(UA):this.g.push(UA),this.o=!0},G.resolve=p,G.reject=function(j){return new G(function(sA,UA){UA(j)})},G.race=function(j){return new G(function(sA,UA){for(var bA=t(j),nI=bA.next();!nI.done;nI=bA.next())p(nI.value).J(sA,UA)})},G.all=function(j){var sA=t(j),UA=sA.next();return UA.done?p([]):new G(function(bA,nI){function pI(vA){return function(hI){SI[vA]=hI,cI--,cI==0&&bA(SI)}}var SI=[],cI=0;do SI.push(void 0),cI++,p(UA.value).J(pI(SI.length-1),nI),UA=sA.next();while(!UA.done)})},G}),i("Object.is",function(s){return s||function(G,F){return G===F?G!==0||1/G===1/F:G!==G&&F!==F}}),i("Array.prototype.includes",function(s){return s||function(G,F){var p=this;p instanceof String&&(p=String(p));var O=p.length;for(F=F||0,0>F&&(F=Math.max(F+O,0));F<O;F++){var tA=p[F];if(tA===G||Object.is(tA,G))return!0}return!1}}),i("String.prototype.includes",function(s){return s||function(G,F){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(G instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(G,F||0)!==-1}}),i("Array.prototype.keys",function(s){return s||function(){return m(this,function(G){return G})}});var hA=this||self;function wA(s,G){s=s.split(".");var F=hA;s[0]in F||typeof F.execScript>"u"||F.execScript("var "+s[0]);for(var p;s.length&&(p=s.shift());)s.length||G===void 0?F[p]&&F[p]!==Object.prototype[p]?F=F[p]:F=F[p]={}:F[p]=G}function Z(s,G){return G=String.fromCharCode.apply(null,G),s==null?G:s+G}var EA,GA=typeof TextDecoder<"u",DA,dA=typeof TextEncoder<"u";function RA(s){if(dA)s=(DA||(DA=new TextEncoder)).encode(s);else{var G=void 0;G=G===void 0?!1:G;for(var F=0,p=new Uint8Array(3*s.length),O=0;O<s.length;O++){var tA=s.charCodeAt(O);if(128>tA)p[F++]=tA;else{if(2048>tA)p[F++]=tA>>6|192;else{if(55296<=tA&&57343>=tA){if(56319>=tA&&O<s.length){var j=s.charCodeAt(++O);if(56320<=j&&57343>=j){tA=1024*(tA-55296)+j-56320+65536,p[F++]=tA>>18|240,p[F++]=tA>>12&63|128,p[F++]=tA>>6&63|128,p[F++]=tA&63|128;continue}else O--}if(G)throw Error("Found an unpaired surrogate");tA=65533}p[F++]=tA>>12|224,p[F++]=tA>>6&63|128}p[F++]=tA&63|128}}s=p.subarray(0,F)}return s}var rA={},JA=null;function LA(s,G){G===void 0&&(G=0),mA(),G=rA[G];for(var F=Array(Math.floor(s.length/3)),p=G[64]||"",O=0,tA=0;O<s.length-2;O+=3){var j=s[O],sA=s[O+1],UA=s[O+2],bA=G[j>>2];j=G[(j&3)<<4|sA>>4],sA=G[(sA&15)<<2|UA>>6],UA=G[UA&63],F[tA++]=bA+j+sA+UA}switch(bA=0,UA=p,s.length-O){case 2:bA=s[O+1],UA=G[(bA&15)<<2]||p;case 1:s=s[O],F[tA]=G[s>>2]+G[(s&3)<<4|bA>>4]+UA+p}return F.join("")}function iA(s){var G=s.length,F=3*G/4;F%3?F=Math.floor(F):"=.".indexOf(s[G-1])!=-1&&(F="=.".indexOf(s[G-2])!=-1?F-2:F-1);var p=new Uint8Array(F),O=0;return cA(s,function(tA){p[O++]=tA}),p.subarray(0,O)}function cA(s,G){function F(UA){for(;p<s.length;){var bA=s.charAt(p++),nI=JA[bA];if(nI!=null)return nI;if(!/^[\s\xa0]*$/.test(bA))throw Error("Unknown base64 encoding at char: "+bA)}return UA}mA();for(var p=0;;){var O=F(-1),tA=F(0),j=F(64),sA=F(64);if(sA===64&&O===-1)break;G(O<<2|tA>>4),j!=64&&(G(tA<<4&240|j>>2),sA!=64&&G(j<<6&192|sA))}}function mA(){if(!JA){JA={};for(var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),G=["+/=","+/","-_=","-_.","-_"],F=0;5>F;F++){var p=s.concat(G[F].split(""));rA[F]=p;for(var O=0;O<p.length;O++){var tA=p[O];JA[tA]===void 0&&(JA[tA]=O)}}}}var PA=typeof Uint8Array.prototype.slice=="function",jA;function DI(s,G,F){return G===F?jA||(jA=new Uint8Array(0)):PA?s.slice(G,F):new Uint8Array(s.subarray(G,F))}var xA=0,TA=0;function gI(s,G){G=G===void 0?{}:G,G=G.v===void 0?!1:G.v,this.h=null,this.g=this.j=this.l=0,this.m=!1,this.v=G,s&&z(this,s)}function z(s,G){G=G.constructor===Uint8Array?G:G.constructor===ArrayBuffer?new Uint8Array(G):G.constructor===Array?new Uint8Array(G):G.constructor===String?iA(G):G instanceof Uint8Array?new Uint8Array(G.buffer,G.byteOffset,G.byteLength):new Uint8Array(0),s.h=G,s.l=0,s.j=s.h.length,s.g=s.l}gI.prototype.reset=function(){this.g=this.l};function KA(s){for(var G=128,F=0,p=0,O=0;4>O&&128<=G;O++)G=s.h[s.g++],F|=(G&127)<<7*O;if(128<=G&&(G=s.h[s.g++],F|=(G&127)<<28,p|=(G&127)>>4),128<=G)for(O=0;5>O&&128<=G;O++)G=s.h[s.g++],p|=(G&127)<<7*O+3;if(128>G)return s=F>>>0,G=p>>>0,(p=G&2147483648)&&(s=~s+1>>>0,G=~G>>>0,s==0&&(G=G+1>>>0)),s=4294967296*G+(s>>>0),p?-s:s;s.m=!0}gI.prototype.i=function(){var s=this.h,G=s[this.g],F=G&127;return 128>G?(this.g+=1,F):(G=s[this.g+1],F|=(G&127)<<7,128>G?(this.g+=2,F):(G=s[this.g+2],F|=(G&127)<<14,128>G?(this.g+=3,F):(G=s[this.g+3],F|=(G&127)<<21,128>G?(this.g+=4,F):(G=s[this.g+4],F|=(G&15)<<28,128>G?(this.g+=5,F>>>0):(this.g+=5,128<=s[this.g++]&&128<=s[this.g++]&&128<=s[this.g++]&&128<=s[this.g++]&&this.g++,F)))))},gI.prototype.o=function(){var s=this.h[this.g],G=this.h[this.g+1],F=this.h[this.g+2],p=this.h[this.g+3];return this.g+=4,F=(s<<0|G<<8|F<<16|p<<24)>>>0,s=2*(F>>31)+1,G=F>>>23&255,F&=8388607,G==255?F?NaN:1/0*s:G==0?s*Math.pow(2,-149)*F:s*Math.pow(2,G-150)*(F+Math.pow(2,23))};var WA=[];function rI(){this.g=new Uint8Array(64),this.h=0}rI.prototype.push=function(s){if(!(this.h+1<this.g.length)){var G=this.g;this.g=new Uint8Array(Math.ceil(1+2*this.g.length)),this.g.set(G)}this.g[this.h++]=s},rI.prototype.length=function(){return this.h},rI.prototype.end=function(){var s=this.g,G=this.h;return this.h=0,DI(s,0,G)};function zA(s,G){for(;127<G;)s.push(G&127|128),G>>>=7;s.push(G)}function TI(s){var G={},F=G.N===void 0?!1:G.N;this.o={v:G.v===void 0?!1:G.v},this.N=F,G=this.o,WA.length?(F=WA.pop(),G&&(F.v=G.v),s&&z(F,s),s=F):s=new gI(s,G),this.g=s,this.m=this.g.g,this.h=this.i=this.l=-1,this.j=!1}TI.prototype.reset=function(){this.g.reset(),this.h=this.l=-1};function CI(s){var G=s.g;if((G=G.g==G.j)||(G=s.j)||(G=s.g,G=G.m||0>G.g||G.g>G.j),G)return!1;s.m=s.g.g,G=s.g.i();var F=G&7;return F!=0&&F!=5&&F!=1&&F!=2&&F!=3&&F!=4?(s.j=!0,!1):(s.i=G,s.l=G>>>3,s.h=F,!0)}function iI(s){switch(s.h){case 0:if(s.h!=0)iI(s);else{for(s=s.g;s.h[s.g]&128;)s.g++;s.g++}break;case 1:s.h!=1?iI(s):(s=s.g,s.g+=8);break;case 2:if(s.h!=2)iI(s);else{var G=s.g.i();s=s.g,s.g+=G}break;case 5:s.h!=5?iI(s):(s=s.g,s.g+=4);break;case 3:G=s.l;do{if(!CI(s)){s.j=!0;break}if(s.h==4){s.l!=G&&(s.j=!0);break}iI(s)}while(!0);break;default:s.j=!0}}function uI(s,G,F){var p=s.g.j,O=s.g.i(),tA=s.g.g+O;if(s.g.j=tA,F(G,s),F=tA-s.g.g,F!==0)throw Error("Message parsing ended unexpectedly. Expected to read "+O+" bytes, instead read "+(O-F)+" bytes, either the data ended unexpectedly or the message misreported its own length");return s.g.g=tA,s.g.j=p,G}function VI(s){return s.g.o()}function Bg(s){var G=s.g.i();s=s.g;var F=s.g;s.g+=G,s=s.h;var p;if(GA)(p=EA)||(p=EA=new TextDecoder("utf-8",{fatal:!1})),p=p.decode(s.subarray(F,F+G));else{G=F+G;for(var O=[],tA=null,j,sA,UA;F<G;)j=s[F++],128>j?O.push(j):224>j?F>=G?O.push(65533):(sA=s[F++],194>j||(sA&192)!==128?(F--,O.push(65533)):O.push((j&31)<<6|sA&63)):240>j?F>=G-1?O.push(65533):(sA=s[F++],(sA&192)!==128||j===224&&160>sA||j===237&&160<=sA||((p=s[F++])&192)!==128?(F--,O.push(65533)):O.push((j&15)<<12|(sA&63)<<6|p&63)):244>=j?F>=G-2?O.push(65533):(sA=s[F++],(sA&192)!==128||(j<<28)+(sA-144)>>30||((p=s[F++])&192)!==128||((UA=s[F++])&192)!==128?(F--,O.push(65533)):(j=(j&7)<<18|(sA&63)<<12|(p&63)<<6|UA&63,j-=65536,O.push((j>>10&1023)+55296,(j&1023)+56320))):O.push(65533),8192<=O.length&&(tA=Z(tA,O),O.length=0);p=Z(tA,O)}return p}function q(s,G,F){var p=s.g.i();for(p=s.g.g+p;s.g.g<p;)F.push(G.call(s.g))}function l(s,G){s.h==2?q(s,gI.prototype.o,G):G.push(VI(s))}function $(){this.h=[],this.i=0,this.g=new rI}function SA(s,G){G.length!==0&&(s.h.push(G),s.i+=G.length)}function yA(s){var G=s.i+s.g.length();if(G===0)return new Uint8Array(0);G=new Uint8Array(G);for(var F=s.h,p=F.length,O=0,tA=0;tA<p;tA++){var j=F[tA];j.length!==0&&(G.set(j,O),O+=j.length)}return F=s.g,p=F.h,p!==0&&(G.set(F.g.subarray(0,p),O),F.h=0),s.h=[G],G}function NA(s,G,F){if(F!=null){zA(s.g,8*G+5),s=s.g;var p=F;p=(F=0>p?1:0)?-p:p,p===0?0<1/p?xA=TA=0:(TA=0,xA=2147483648):isNaN(p)?(TA=0,xA=2147483647):34028234663852886e22<p?(TA=0,xA=(F<<31|2139095040)>>>0):11754943508222875e-54>p?(p=Math.round(p/Math.pow(2,-149)),TA=0,xA=(F<<31|p)>>>0):(G=Math.floor(Math.log(p)/Math.LN2),p*=Math.pow(2,-G),p=Math.round(8388608*p),16777216<=p&&++G,TA=0,xA=(F<<31|G+127<<23|p&8388607)>>>0),F=xA,s.push(F>>>0&255),s.push(F>>>8&255),s.push(F>>>16&255),s.push(F>>>24&255)}}var ZA=typeof Uint8Array=="function";function lA(s,G,F){if(s!=null)return typeof s=="object"?ZA&&s instanceof Uint8Array?F(s):pA(s,G,F):G(s)}function pA(s,G,F){if(Array.isArray(s)){for(var p=Array(s.length),O=0;O<s.length;O++)p[O]=lA(s[O],G,F);return Array.isArray(s)&&s.W&&MA(p),p}p={};for(O in s)p[O]=lA(s[O],G,F);return p}function QI(s){return typeof s=="number"?isFinite(s)?s:String(s):s}var oI={W:{value:!0,configurable:!0}};function MA(s){return Array.isArray(s)&&!Object.isFrozen(s)&&Object.defineProperties(s,oI),s}var xI;function OA(s,G,F){var p=xI;xI=null,s||(s=p),p=this.constructor.ca,s||(s=p?[p]:[]),this.j=p?0:-1,this.m=this.g=null,this.h=s;A:{if(p=this.h.length,s=p-1,p&&(p=this.h[s],!(p===null||typeof p!="object"||Array.isArray(p)||ZA&&p instanceof Uint8Array))){this.l=s-this.j,this.i=p;break A}G!==void 0&&-1<G?(this.l=Math.max(G,s+1-this.j),this.i=null):this.l=Number.MAX_VALUE}if(F)for(G=0;G<F.length;G++)s=F[G],s<this.l?(s+=this.j,(p=this.h[s])?MA(p):this.h[s]=EI):(_A(this),(p=this.i[s])?MA(p):this.i[s]=EI)}var EI=Object.freeze(MA([]));function _A(s){var G=s.l+s.j;s.h[G]||(s.i=s.h[G]={})}function FA(s,G,F){return G===-1?null:F!==void 0&&F||G>=s.l?s.i?s.i[G]:void 0:s.h[G+s.j]}function FI(s,G){var F=F===void 0?!1:F,p=FA(s,G,F);return p==null&&(p=EI),p===EI&&(p=MA([]),X(s,G,p,F)),p}function b(s){var G=FI(s,3);if(s.m||(s.m={}),!s.m[3]){for(var F=0;F<G.length;F++)G[F]=+G[F];s.m[3]=!0}return G}function fA(s,G,F){return s=FA(s,G),s??F}function nA(s,G,F){return s=FA(s,G),s=s==null?s:+s,s??(F===void 0?0:F)}function X(s,G,F,p){p!==void 0&&p||G>=s.l?(_A(s),s.i[G]=F):s.h[G+s.j]=F}function kA(s,G,F){if(F===-1)return null;if(s.g||(s.g={}),!s.g[F]){var p=FA(s,F,!1);p&&(s.g[F]=new G(p))}return s.g[F]}function XA(s,G){s.g||(s.g={});var F=s.g[1];if(!F){var p=FI(s,1);F=[];for(var O=0;O<p.length;O++)F[O]=new G(p[O]);s.g[1]=F}return F}function JI(s,G,F){var p=p===void 0?!1:p;s.g||(s.g={});var O=F&&zI(F);s.g[G]=F,X(s,G,O,p)}function W(s,G,F,p){var O=XA(s,F);G=G||new F,s=FI(s,1),p!=null?(O.splice(p,0,G),s.splice(p,0,zI(G))):(O.push(G),s.push(zI(G)))}OA.prototype.toJSON=function(){var s=zI(this);return pA(s,QI,LA)};function zI(s,G){if(s.g)for(var F in s.g){var p=s.g[F];if(Array.isArray(p))for(var O=0;O<p.length;O++)p[O]&&zI(p[O]);else p&&zI(p)}return s.h}OA.prototype.toString=function(){return zI(this).toString()};function sI(s,G){if(s=s.o){SA(G,G.g.end());for(var F=0;F<s.length;F++)SA(G,s[F])}}function Ag(s,G){if(G.h==4)return!1;var F=G.m;return iI(G),G.N||(G=DI(G.g.h,F,G.g.g),(F=s.o)?F.push(G):s.o=[G]),!0}function tg(s){OA.call(this,s,-1,lB)}S(tg,OA),tg.prototype.getRows=function(){return FA(this,1)},tg.prototype.getCols=function(){return FA(this,2)},tg.prototype.getPackedDataList=function(){return b(this)},tg.prototype.getLayout=function(){return fA(this,4,0)};function PC(s,G){for(;CI(G);)switch(G.i){case 8:var F=G.g.i();X(s,1,F);break;case 16:F=G.g.i(),X(s,2,F);break;case 29:case 26:l(G,s.getPackedDataList());break;case 32:F=KA(G.g),X(s,4,F);break;default:if(!Ag(s,G))return s}return s}var lB=[3];function Qg(s,G){var F=void 0;return new(F||(F=Promise))(function(p,O){function tA(UA){try{sA(G.next(UA))}catch(bA){O(bA)}}function j(UA){try{sA(G.throw(UA))}catch(bA){O(bA)}}function sA(UA){UA.done?p(UA.value):new F(function(bA){bA(UA.value)}).then(tA,j)}sA((G=G.apply(s,void 0)).next())})}function MI(s){OA.call(this,s)}S(MI,OA);function aC(s,G){for(;CI(G);)switch(G.i){case 8:var F=G.g.i();X(s,1,F);break;case 21:F=VI(G),X(s,2,F);break;case 26:F=Bg(G),X(s,3,F);break;case 34:F=Bg(G),X(s,4,F);break;default:if(!Ag(s,G))return s}return s}function Rg(s){OA.call(this,s,-1,pg)}S(Rg,OA),Rg.prototype.addClassification=function(s,G){return W(this,s,MI,G),this};var pg=[1];function jg(s){OA.call(this,s)}S(jg,OA);function wI(s,G){for(;CI(G);)switch(G.i){case 13:var F=VI(G);X(s,1,F);break;case 21:F=VI(G),X(s,2,F);break;case 29:F=VI(G),X(s,3,F);break;case 37:F=VI(G),X(s,4,F);break;case 45:F=VI(G),X(s,5,F);break;default:if(!Ag(s,G))return s}return s}function N(s){OA.call(this,s,-1,v)}S(N,OA);function d(s){A:{var G=new N;for(s=new TI(s);CI(s);)switch(s.i){case 10:var F=uI(s,new jg,wI);W(G,F,jg,void 0);break;default:if(!Ag(G,s))break A}}return G}var v=[1];function AA(s){OA.call(this,s)}S(AA,OA);function IA(s){OA.call(this,s,-1,qA)}S(IA,OA),IA.prototype.getVertexType=function(){return fA(this,1,0)},IA.prototype.getPrimitiveType=function(){return fA(this,2,0)},IA.prototype.getVertexBufferList=function(){return b(this)},IA.prototype.getIndexBufferList=function(){return FI(this,4)};function _(s,G){for(;CI(G);)switch(G.i){case 8:var F=KA(G.g);X(s,1,F);break;case 16:F=KA(G.g),X(s,2,F);break;case 29:case 26:l(G,s.getVertexBufferList());break;case 32:case 34:F=G;var p=s.getIndexBufferList();F.h==2?q(F,gI.prototype.i,p):p.push(F.g.i());break;default:if(!Ag(s,G))return s}return s}var qA=[3,4];function VA(s){OA.call(this,s)}S(VA,OA),VA.prototype.getMesh=function(){return kA(this,IA,1)},VA.prototype.getPoseTransformMatrix=function(){return kA(this,tg,2)};function $A(s){A:{var G=new VA;for(s=new TI(s);CI(s);)switch(s.i){case 10:var F=uI(s,new IA,_);JI(G,1,F);break;case 18:F=uI(s,new tg,PC),JI(G,2,F);break;default:if(!Ag(G,s))break A}}return G}function AI(s,G,F){if(F=s.createShader(F===0?s.VERTEX_SHADER:s.FRAGMENT_SHADER),s.shaderSource(F,G),s.compileShader(F),!s.getShaderParameter(F,s.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+s.getShaderInfoLog(F));return F}function GI(s){return XA(s,MI).map(function(G){return{index:fA(G,1,0),Y:nA(G,2),label:FA(G,3)!=null?fA(G,3,""):void 0,displayName:FA(G,4)!=null?fA(G,4,""):void 0}})}function aI(s){return{x:nA(s,1),y:nA(s,2),z:nA(s,3),visibility:FA(s,4)!=null?nA(s,4):void 0}}function eI(s,G){this.h=s,this.g=G,this.l=0}function XI(s,G,F){return sg(s,G),typeof s.g.canvas.transferToImageBitmap=="function"?Promise.resolve(s.g.canvas.transferToImageBitmap()):F?Promise.resolve(s.g.canvas):typeof createImageBitmap=="function"?createImageBitmap(s.g.canvas):(s.i===void 0&&(s.i=document.createElement("canvas")),new Promise(function(p){s.i.height=s.g.canvas.height,s.i.width=s.g.canvas.width,s.i.getContext("2d",{}).drawImage(s.g.canvas,0,0,s.g.canvas.width,s.g.canvas.height),p(s.i)}))}function sg(s,G){var F=s.g;if(s.m===void 0){var p=AI(F,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),O=AI(F,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),tA=F.createProgram();if(F.attachShader(tA,p),F.attachShader(tA,O),F.linkProgram(tA),!F.getProgramParameter(tA,F.LINK_STATUS))throw Error(`Could not compile WebGL program.

`)):typeof readline=="function"&&(E=readline(),E!==null&&(E+=`
`));if(!E)return null;B.input=EQ(E,!0)}return B.input.shift()},put_char:function(B,E){E===null||E===10?(J(wA(B.output,0)),B.output=[]):E!=0&&B.output.push(E)},flush:function(B){B.output&&B.output.length>0&&(J(wA(B.output,0)),B.output=[])}},default_tty1_ops:{put_char:function(B,E){E===null||E===10?(u(wA(B.output,0)),B.output=[]):E!=0&&B.output.push(E)},flush:function(B){B.output&&B.output.length>0&&(u(wA(B.output,0)),B.output=[])}}};function jg(B){for(var E=T(B,16384),o=fB(E);B<E;)xA[o+B++]=0;return o}var wI={ops_table:null,mount:function(B){return wI.createNode(null,"/",16895,0)},createNode:function(B,E,o,e){if(N.isBlkdev(o)||N.isFIFO(o))throw new N.ErrnoError(63);wI.ops_table||(wI.ops_table={dir:{node:{getattr:wI.node_ops.getattr,setattr:wI.node_ops.setattr,lookup:wI.node_ops.lookup,mknod:wI.node_ops.mknod,rename:wI.node_ops.rename,unlink:wI.node_ops.unlink,rmdir:wI.node_ops.rmdir,readdir:wI.node_ops.readdir,symlink:wI.node_ops.symlink},stream:{llseek:wI.stream_ops.llseek}},file:{node:{getattr:wI.node_ops.getattr,setattr:wI.node_ops.setattr},stream:{llseek:wI.stream_ops.llseek,read:wI.stream_ops.read,write:wI.stream_ops.write,allocate:wI.stream_ops.allocate,mmap:wI.stream_ops.mmap,msync:wI.stream_ops.msync}},link:{node:{getattr:wI.node_ops.getattr,setattr:wI.node_ops.setattr,readlink:wI.node_ops.readlink},stream:{}},chrdev:{node:{getattr:wI.node_ops.getattr,setattr:wI.node_ops.setattr},stream:N.chrdev_stream_ops}});var y=N.createNode(B,E,o,e);return N.isDir(y.mode)?(y.node_ops=wI.ops_table.dir.node,y.stream_ops=wI.ops_table.dir.stream,y.contents={}):N.isFile(y.mode)?(y.node_ops=wI.ops_table.file.node,y.stream_ops=wI.ops_table.file.stream,y.usedBytes=0,y.contents=null):N.isLink(y.mode)?(y.node_ops=wI.ops_table.link.node,y.stream_ops=wI.ops_table.link.stream):N.isChrdev(y.mode)&&(y.node_ops=wI.ops_table.chrdev.node,y.stream_ops=wI.ops_table.chrdev.stream),y.timestamp=Date.now(),B&&(B.contents[E]=y),y},getFileDataAsRegularArray:function(B){if(B.contents&&B.contents.subarray){for(var E=[],o=0;o<B.usedBytes;++o)E.push(B.contents[o]);return E}return B.contents},getFileDataAsTypedArray:function(B){return B.contents?B.contents.subarray?B.contents.subarray(0,B.usedBytes):new Uint8Array(B.contents):new Uint8Array(0)},expandFileStorage:function(B,E){var o=B.contents?B.contents.length:0;if(!(o>=E)){var e=1048576;E=Math.max(E,o*(o<e?2:1.125)>>>0),o!=0&&(E=Math.max(E,256));var y=B.contents;B.contents=new Uint8Array(E),B.usedBytes>0&&B.contents.set(y.subarray(0,B.usedBytes),0)}},resizeFileStorage:function(B,E){if(B.usedBytes!=E){if(E==0){B.contents=null,B.usedBytes=0;return}if(!B.contents||B.contents.subarray){var o=B.contents;B.contents=new Uint8Array(E),o&&B.contents.set(o.subarray(0,Math.min(E,B.usedBytes))),B.usedBytes=E;return}if(B.contents||(B.contents=[]),B.contents.length>E)B.contents.length=E;else for(;B.contents.length<E;)B.contents.push(0);B.usedBytes=E}},node_ops:{getattr:function(B){var E={};return E.dev=N.isChrdev(B.mode)?B.id:1,E.ino=B.id,E.mode=B.mode,E.nlink=1,E.uid=0,E.gid=0,E.rdev=B.rdev,N.isDir(B.mode)?E.size=4096:N.isFile(B.mode)?E.size=B.usedBytes:N.isLink(B.mode)?E.size=B.link.length:E.size=0,E.atime=new Date(B.timestamp),E.mtime=new Date(B.timestamp),E.ctime=new Date(B.timestamp),E.blksize=4096,E.blocks=Math.ceil(E.size/E.blksize),E},setattr:function(B,E){E.mode!==void 0&&(B.mode=E.mode),E.timestamp!==void 0&&(B.timestamp=E.timestamp),E.size!==void 0&&wI.resizeFileStorage(B,E.size)},lookup:function(B,E){throw N.genericErrors[44]},mknod:function(B,E,o,e){return wI.createNode(B,E,o,e)},rename:function(B,E,o){if(N.isDir(B.mode)){var e;try{e=N.lookupNode(E,o)}catch{}if(e)for(var y in e.contents)throw new N.ErrnoError(55)}delete B.parent.contents[B.name],B.name=o,E.contents[o]=B,B.parent=E},unlink:function(B,E){delete B.contents[E]},rmdir:function(B,E){var o=N.lookupNode(B,E);for(var e in o.contents)throw new N.ErrnoError(55);delete B.contents[E]},readdir:function(B){var E=[".",".."];for(var o in B.contents)B.contents.hasOwnProperty(o)&&E.push(o);return E},symlink:function(B,E,o){var e=wI.createNode(B,E,41471,0);return e.link=o,e},readlink:function(B){if(!N.isLink(B.mode))throw new N.ErrnoError(28);return B.link}},stream_ops:{read:function(B,E,o,e,y){var U=B.node.contents;if(y>=B.node.usedBytes)return 0;var Y=Math.min(B.node.usedBytes-y,e);if(Y>8&&U.subarray)E.set(U.subarray(y,y+Y),o);else for(var L=0;L<Y;L++)E[o+L]=U[y+L];return Y},write:function(B,E,o,e,y,U){if(E.buffer===xA.buffer&&(U=!1),!e)return 0;var Y=B.node;if(Y.timestamp=Date.now(),E.subarray&&(!Y.contents||Y.contents.subarray)){if(U)return Y.contents=E.subarray(o,o+e),Y.usedBytes=e,e;if(Y.usedBytes===0&&y===0)return Y.contents=E.slice(o,o+e),Y.usedBytes=e,e;if(y+e<=Y.usedBytes)return Y.contents.set(E.subarray(o,o+e),y),e}if(wI.expandFileStorage(Y,y+e),Y.contents.subarray&&E.subarray)Y.contents.set(E.subarray(o,o+e),y);else for(var L=0;L<e;L++)Y.contents[y+L]=E[o+L];return Y.usedBytes=Math.max(Y.usedBytes,y+e),e},llseek:function(B,E,o){var e=E;if(o===1?e+=B.position:o===2&&N.isFile(B.node.mode)&&(e+=B.node.usedBytes),e<0)throw new N.ErrnoError(28);return e},allocate:function(B,E,o){wI.expandFileStorage(B.node,E+o),B.node.usedBytes=Math.max(B.node.usedBytes,E+o)},mmap:function(B,E,o,e,y,U){if(eA(E===0),!N.isFile(B.node.mode))throw new N.ErrnoError(43);var Y,L,f=B.node.contents;if(!(U&2)&&f.buffer===DI)L=!1,Y=f.byteOffset;else{if((e>0||e+o<f.length)&&(f.subarray?f=f.subarray(e,e+o):f=Array.prototype.slice.call(f,e,e+o)),L=!0,Y=jg(o),!Y)throw new N.ErrnoError(48);xA.set(f,Y)}return{ptr:Y,allocated:L}},msync:function(B,E,o,e,y){if(!N.isFile(B.node.mode))throw new N.ErrnoError(43);return y&2||wI.stream_ops.write(B,E,0,e,o,!1),0}}},N={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,trackingDelegate:{},tracking:{openFlags:{READ:1,WRITE:2}},ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:function(B,E){if(B=Rg.resolve(N.cwd(),B),E=E||{},!B)return{path:"",node:null};var o={follow_mount:!0,recurse_count:0};for(var e in o)E[e]===void 0&&(E[e]=o[e]);if(E.recurse_count>8)throw new N.ErrnoError(32);for(var y=MI.normalizeArray(B.split("/").filter(function(oA){return!!oA}),!1),U=N.root,Y="/",L=0;L<y.length;L++){var f=L===y.length-1;if(f&&E.parent)break;if(U=N.lookupNode(U,y[L]),Y=MI.join2(Y,y[L]),N.isMountpoint(U)&&(!f||f&&E.follow_mount)&&(U=U.mounted.root),!f||E.follow)for(var P=0;N.isLink(U.mode);){var gA=N.readlink(Y);Y=Rg.resolve(MI.dirname(Y),gA);var BA=N.lookupPath(Y,{recurse_count:E.recurse_count});if(U=BA.node,P++>40)throw new N.ErrnoError(32)}}return{path:Y,node:U}},getPath:function(B){for(var E;;){if(N.isRoot(B)){var o=B.mount.mountpoint;return E?o[o.length-1]!=="/"?o+"/"+E:o+E:o}E=E?B.name+"/"+E:B.name,B=B.parent}},hashName:function(B,E){for(var o=0,e=0;e<E.length;e++)o=(o<<5)-o+E.charCodeAt(e)|0;return(B+o>>>0)%N.nameTable.length},hashAddNode:function(B){var E=N.hashName(B.parent.id,B.name);B.name_next=N.nameTable[E],N.nameTable[E]=B},hashRemoveNode:function(B){var E=N.hashName(B.parent.id,B.name);if(N.nameTable[E]===B)N.nameTable[E]=B.name_next;else for(var o=N.nameTable[E];o;){if(o.name_next===B){o.name_next=B.name_next;break}o=o.name_next}},lookupNode:function(B,E){var o=N.mayLookup(B);if(o)throw new N.ErrnoError(o,B);for(var e=N.hashName(B.id,E),y=N.nameTable[e];y;y=y.name_next){var U=y.name;if(y.parent.id===B.id&&U===E)return y}return N.lookup(B,E)},createNode:function(B,E,o,e){var y=new N.FSNode(B,E,o,e);return N.hashAddNode(y),y},destroyNode:function(B){N.hashRemoveNode(B)},isRoot:function(B){return B===B.parent},isMountpoint:function(B){return!!B.mounted},isFile:function(B){return(B&61440)===32768},isDir:function(B){return(B&61440)===16384},isLink:function(B){return(B&61440)===40960},isChrdev:function(B){return(B&61440)===8192},isBlkdev:function(B){return(B&61440)===24576},isFIFO:function(B){return(B&61440)===4096},isSocket:function(B){return(B&49152)===49152},flagModes:{r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},modeStringToFlags:function(B){var E=N.flagModes[B];if(typeof E>"u")throw new Error("Unknown file open mode: "+B);return E},flagsToPermissionString:function(B){var E=["r","w","rw"][B&3];return B&512&&(E+="w"),E},nodePermissions:function(B,E){return N.ignorePermissions?0:E.indexOf("r")!==-1&&!(B.mode&292)||E.indexOf("w")!==-1&&!(B.mode&146)||E.indexOf("x")!==-1&&!(B.mode&73)?2:0},mayLookup:function(B){var E=N.nodePermissions(B,"x");return E||(B.node_ops.lookup?0:2)},mayCreate:function(B,E){try{var o=N.lookupNode(B,E);return 20}catch{}return N.nodePermissions(B,"wx")},mayDelete:function(B,E,o){var e;try{e=N.lookupNode(B,E)}catch(U){return U.errno}var y=N.nodePermissions(B,"wx");if(y)return y;if(o){if(!N.isDir(e.mode))return 54;if(N.isRoot(e)||N.getPath(e)===N.cwd())return 10}else if(N.isDir(e.mode))return 31;return 0},mayOpen:function(B,E){return B?N.isLink(B.mode)?32:N.isDir(B.mode)&&(N.flagsToPermissionString(E)!=="r"||E&512)?31:N.nodePermissions(B,N.flagsToPermissionString(E)):44},MAX_OPEN_FDS:4096,nextfd:function(B,E){B=B||0,E=E||N.MAX_OPEN_FDS;for(var o=B;o<=E;o++)if(!N.streams[o])return o;throw new N.ErrnoError(33)},getStream:function(B){return N.streams[B]},createStream:function(B,E,o){N.FSStream||(N.FSStream=function(){},N.FSStream.prototype={object:{get:function(){return this.node},set:function(Y){this.node=Y}},isRead:{get:function(){return(this.flags&2097155)!==1}},isWrite:{get:function(){return(this.flags&2097155)!==0}},isAppend:{get:function(){return this.flags&1024}}});var e=new N.FSStream;for(var y in B)e[y]=B[y];B=e;var U=N.nextfd(E,o);return B.fd=U,N.streams[U]=B,B},closeStream:function(B){N.streams[B]=null},chrdev_stream_ops:{open:function(B){var E=N.getDevice(B.node.rdev);B.stream_ops=E.stream_ops,B.stream_ops.open&&B.stream_ops.open(B)},llseek:function(){throw new N.ErrnoError(70)}},major:function(B){return B>>8},minor:function(B){return B&255},makedev:function(B,E){return B<<8|E},registerDevice:function(B,E){N.devices[B]={stream_ops:E}},getDevice:function(B){return N.devices[B]},getMounts:function(B){for(var E=[],o=[B];o.length;){var e=o.pop();E.push(e),o.push.apply(o,e.mounts)}return E},syncfs:function(B,E){typeof B=="function"&&(E=B,B=!1),N.syncFSRequests++,N.syncFSRequests>1&&u("warning: "+N.syncFSRequests+" FS.syncfs operations in flight at once, probably just doing extra work");var o=N.getMounts(N.root.mount),e=0;function y(Y){return N.syncFSRequests--,E(Y)}function U(Y){if(Y)return U.errored?void 0:(U.errored=!0,y(Y));++e>=o.length&&y(null)}o.forEach(function(Y){if(!Y.type.syncfs)return U(null);Y.type.syncfs(Y,B,U)})},mount:function(B,E,o){var e=o==="/",y=!o,U;if(e&&N.root)throw new N.ErrnoError(10);if(!e&&!y){var Y=N.lookupPath(o,{follow_mount:!1});if(o=Y.path,U=Y.node,N.isMountpoint(U))throw new N.ErrnoError(10);if(!N.isDir(U.mode))throw new N.ErrnoError(54)}var L={type:B,opts:E,mountpoint:o,mounts:[]},f=B.mount(L);return f.mount=L,L.root=f,e?N.root=f:U&&(U.mounted=L,U.mount&&U.mount.mounts.push(L)),f},unmount:function(B){var E=N.lookupPath(B,{follow_mount:!1});if(!N.isMountpoint(E.node))throw new N.ErrnoError(28);var o=E.node,e=o.mounted,y=N.getMounts(e);Object.keys(N.nameTable).forEach(function(Y){for(var L=N.nameTable[Y];L;){var f=L.name_next;y.indexOf(L.mount)!==-1&&N.destroyNode(L),L=f}}),o.mounted=null;var U=o.mount.mounts.indexOf(e);o.mount.mounts.splice(U,1)},lookup:function(B,E){return B.node_ops.lookup(B,E)},mknod:function(B,E,o){var e=N.lookupPath(B,{parent:!0}),y=e.node,U=MI.basename(B);if(!U||U==="."||U==="..")throw new N.ErrnoError(28);var Y=N.mayCreate(y,U);if(Y)throw new N.ErrnoError(Y);if(!y.node_ops.mknod)throw new N.ErrnoError(63);return y.node_ops.mknod(y,U,E,o)},create:function(B,E){return E=E!==void 0?E:438,E&=4095,E|=32768,N.mknod(B,E,0)},mkdir:function(B,E){return E=E!==void 0?E:511,E&=1023,E|=16384,N.mknod(B,E,0)},mkdirTree:function(B,E){for(var o=B.split("/"),e="",y=0;y<o.length;++y)if(o[y]){e+="/"+o[y];try{N.mkdir(e,E)}catch(U){if(U.errno!=20)throw U}}},mkdev:function(B,E,o){return typeof o>"u"&&(o=E,E=438),E|=8192,N.mknod(B,E,o)},symlink:function(B,E){if(!Rg.resolve(B))throw new N.ErrnoError(44);var o=N.lookupPath(E,{parent:!0}),e=o.node;if(!e)throw new N.ErrnoError(44);var y=MI.basename(E),U=N.mayCreate(e,y);if(U)throw new N.ErrnoError(U);if(!e.node_ops.symlink)throw new N.ErrnoError(63);return e.node_ops.symlink(e,y,B)},rename:function(B,E){var o=MI.dirname(B),e=MI.dirname(E),y=MI.basename(B),U=MI.basename(E),Y,L,f;if(Y=N.lookupPath(B,{parent:!0}),L=Y.node,Y=N.lookupPath(E,{parent:!0}),f=Y.node,!L||!f)throw new N.ErrnoError(44);if(L.mount!==f.mount)throw new N.ErrnoError(75);var P=N.lookupNode(L,y),gA=Rg.relative(B,e);if(gA.charAt(0)!==".")throw new N.ErrnoError(28);if(gA=Rg.relative(E,o),gA.charAt(0)!==".")throw new N.ErrnoError(55);var BA;try{BA=N.lookupNode(f,U)}catch{}if(P!==BA){var oA=N.isDir(P.mode),YA=N.mayDelete(L,y,oA);if(YA)throw new N.ErrnoError(YA);if(YA=BA?N.mayDelete(f,U,oA):N.mayCreate(f,U),YA)throw new N.ErrnoError(YA);if(!L.node_ops.rename)throw new N.ErrnoError(63);if(N.isMountpoint(P)||BA&&N.isMountpoint(BA))throw new N.ErrnoError(10);if(f!==L&&(YA=N.nodePermissions(L,"w"),YA))throw new N.ErrnoError(YA);try{N.trackingDelegate.willMovePath&&N.trackingDelegate.willMovePath(B,E)}catch(tI){u("FS.trackingDelegate['willMovePath']('"+B+"', '"+E+"') threw an exception: "+tI.message)}N.hashRemoveNode(P);try{L.node_ops.rename(P,f,U)}catch(tI){throw tI}finally{N.hashAddNode(P)}try{N.trackingDelegate.onMovePath&&N.trackingDelegate.onMovePath(B,E)}catch(tI){u("FS.trackingDelegate['onMovePath']('"+B+"', '"+E+"') threw an exception: "+tI.message)}}},rmdir:function(B){var E=N.lookupPath(B,{parent:!0}),o=E.node,e=MI.basename(B),y=N.lookupNode(o,e),U=N.mayDelete(o,e,!0);if(U)throw new N.ErrnoError(U);if(!o.node_ops.rmdir)throw new N.ErrnoError(63);if(N.isMountpoint(y))throw new N.ErrnoError(10);try{N.trackingDelegate.willDeletePath&&N.trackingDelegate.willDeletePath(B)}catch(Y){u("FS.trackingDelegate['willDeletePath']('"+B+"') threw an exception: "+Y.message)}o.node_ops.rmdir(o,e),N.destroyNode(y);try{N.trackingDelegate.onDeletePath&&N.trackingDelegate.onDeletePath(B)}catch(Y){u("FS.trackingDelegate['onDeletePath']('"+B+"') threw an exception: "+Y.message)}},readdir:function(B){var E=N.lookupPath(B,{follow:!0}),o=E.node;if(!o.node_ops.readdir)throw new N.ErrnoError(54);return o.node_ops.readdir(o)},unlink:function(B){var E=N.lookupPath(B,{parent:!0}),o=E.node,e=MI.basename(B),y=N.lookupNode(o,e),U=N.mayDelete(o,e,!1);if(U)throw new N.ErrnoError(U);if(!o.node_ops.unlink)throw new N.ErrnoError(63);if(N.isMountpoint(y))throw new N.ErrnoError(10);try{N.trackingDelegate.willDeletePath&&N.trackingDelegate.willDeletePath(B)}catch(Y){u("FS.trackingDelegate['willDeletePath']('"+B+"') threw an exception: "+Y.message)}o.node_ops.unlink(o,e),N.destroyNode(y);try{N.trackingDelegate.onDeletePath&&N.trackingDelegate.onDeletePath(B)}catch(Y){u("FS.trackingDelegate['onDeletePath']('"+B+"') threw an exception: "+Y.message)}},readlink:function(B){var E=N.lookupPath(B),o=E.node;if(!o)throw new N.ErrnoError(44);if(!o.node_ops.readlink)throw new N.ErrnoError(28);return Rg.resolve(N.getPath(o.parent),o.node_ops.readlink(o))},stat:function(B,E){var o=N.lookupPath(B,{follow:!E}),e=o.node;if(!e)throw new N.ErrnoError(44);if(!e.node_ops.getattr)throw new N.ErrnoError(63);return e.node_ops.getattr(e)},lstat:function(B){return N.stat(B,!0)},chmod:function(B,E,o){var e;if(typeof B=="string"){var y=N.lookupPath(B,{follow:!o});e=y.node}else e=B;if(!e.node_ops.setattr)throw new N.ErrnoError(63);e.node_ops.setattr(e,{mode:E&4095|e.mode&-4096,timestamp:Date.now()})},lchmod:function(B,E){N.chmod(B,E,!0)},fchmod:function(B,E){var o=N.getStream(B);if(!o)throw new N.ErrnoError(8);N.chmod(o.node,E)},chown:function(B,E,o,e){var y;if(typeof B=="string"){var U=N.lookupPath(B,{follow:!e});y=U.node}else y=B;if(!y.node_ops.setattr)throw new N.ErrnoError(63);y.node_ops.setattr(y,{timestamp:Date.now()})},lchown:function(B,E,o){N.chown(B,E,o,!0)},fchown:function(B,E,o){var e=N.getStream(B);if(!e)throw new N.ErrnoError(8);N.chown(e.node,E,o)},truncate:function(B,E){if(E<0)throw new N.ErrnoError(28);var o;if(typeof B=="string"){var e=N.lookupPath(B,{follow:!0});o=e.node}else o=B;if(!o.node_ops.setattr)throw new N.ErrnoError(63);if(N.isDir(o.mode))throw new N.ErrnoError(31);if(!N.isFile(o.mode))throw new N.ErrnoError(28);var y=N.nodePermissions(o,"w");if(y)throw new N.ErrnoError(y);o.node_ops.setattr(o,{size:E,timestamp:Date.now()})},ftruncate:function(B,E){var o=N.getStream(B);if(!o)throw new N.ErrnoError(8);if(!(o.flags&2097155))throw new N.ErrnoError(28);N.truncate(o.node,E)},utime:function(B,E,o){var e=N.lookupPath(B,{follow:!0}),y=e.node;y.node_ops.setattr(y,{timestamp:Math.max(E,o)})},open:function(B,E,o,e,y){if(B==="")throw new N.ErrnoError(44);E=typeof E=="string"?N.modeStringToFlags(E):E,o=typeof o>"u"?438:o,E&64?o=o&4095|32768:o=0;var U;if(typeof B=="object")U=B;else{B=MI.normalize(B);try{var Y=N.lookupPath(B,{follow:!(E&131072)});U=Y.node}catch{}}var L=!1;if(E&64)if(U){if(E&128)throw new N.ErrnoError(20)}else U=N.mknod(B,o,0),L=!0;if(!U)throw new N.ErrnoError(44);if(N.isChrdev(U.mode)&&(E&=-513),E&65536&&!N.isDir(U.mode))throw new N.ErrnoError(54);if(!L){var f=N.mayOpen(U,E);if(f)throw new N.ErrnoError(f)}E&512&&N.truncate(U,0),E&=-131713;var P=N.createStream({node:U,path:N.getPath(U),flags:E,seekable:!0,position:0,stream_ops:U.stream_ops,ungotten:[],error:!1},e,y);P.stream_ops.open&&P.stream_ops.open(P),I.logReadFiles&&!(E&1)&&(N.readFiles||(N.readFiles={}),B in N.readFiles||(N.readFiles[B]=1,u("FS.trackingDelegate error on read file: "+B)));try{if(N.trackingDelegate.onOpenFile){var gA=0;(E&2097155)!==1&&(gA|=N.tracking.openFlags.READ),E&2097155&&(gA|=N.tracking.openFlags.WRITE),N.trackingDelegate.onOpenFile(B,gA)}}catch(BA){u("FS.trackingDelegate['onOpenFile']('"+B+"', flags) threw an exception: "+BA.message)}return P},close:function(B){if(N.isClosed(B))throw new N.ErrnoError(8);B.getdents&&(B.getdents=null);try{B.stream_ops.close&&B.stream_ops.close(B)}catch(E){throw E}finally{N.closeStream(B.fd)}B.fd=null},isClosed:function(B){return B.fd===null},llseek:function(B,E,o){if(N.isClosed(B))throw new N.ErrnoError(8);if(!B.seekable||!B.stream_ops.llseek)throw new N.ErrnoError(70);if(o!=0&&o!=1&&o!=2)throw new N.ErrnoError(28);return B.position=B.stream_ops.llseek(B,E,o),B.ungotten=[],B.position},read:function(B,E,o,e,y){if(e<0||y<0)throw new N.ErrnoError(28);if(N.isClosed(B))throw new N.ErrnoError(8);if((B.flags&2097155)===1)throw new N.ErrnoError(8);if(N.isDir(B.node.mode))throw new N.ErrnoError(31);if(!B.stream_ops.read)throw new N.ErrnoError(28);var U=typeof y<"u";if(!U)y=B.position;else if(!B.seekable)throw new N.ErrnoError(70);var Y=B.stream_ops.read(B,E,o,e,y);return U||(B.position+=Y),Y},write:function(B,E,o,e,y,U){if(e<0||y<0)throw new N.ErrnoError(28);if(N.isClosed(B))throw new N.ErrnoError(8);if(!(B.flags&2097155))throw new N.ErrnoError(8);if(N.isDir(B.node.mode))throw new N.ErrnoError(31);if(!B.stream_ops.write)throw new N.ErrnoError(28);B.seekable&&B.flags&1024&&N.llseek(B,0,2);var Y=typeof y<"u";if(!Y)y=B.position;else if(!B.seekable)throw new N.ErrnoError(70);var L=B.stream_ops.write(B,E,o,e,y,U);Y||(B.position+=L);try{B.path&&N.trackingDelegate.onWriteToFile&&N.trackingDelegate.onWriteToFile(B.path)}catch(f){u("FS.trackingDelegate['onWriteToFile']('"+B.path+"') threw an exception: "+f.message)}return L},allocate:function(B,E,o){if(N.isClosed(B))throw new N.ErrnoError(8);if(E<0||o<=0)throw new N.ErrnoError(28);if(!(B.flags&2097155))throw new N.ErrnoError(8);if(!N.isFile(B.node.mode)&&!N.isDir(B.node.mode))throw new N.ErrnoError(43);if(!B.stream_ops.allocate)throw new N.ErrnoError(138);B.stream_ops.allocate(B,E,o)},mmap:function(B,E,o,e,y,U){if(y&2&&!(U&2)&&(B.flags&2097155)!==2)throw new N.ErrnoError(2);if((B.flags&2097155)===1)throw new N.ErrnoError(2);if(!B.stream_ops.mmap)throw new N.ErrnoError(43);return B.stream_ops.mmap(B,E,o,e,y,U)},msync:function(B,E,o,e,y){return!B||!B.stream_ops.msync?0:B.stream_ops.msync(B,E,o,e,y)},munmap:function(B){return 0},ioctl:function(B,E,o){if(!B.stream_ops.ioctl)throw new N.ErrnoError(59);return B.stream_ops.ioctl(B,E,o)},readFile:function(B,E){if(E=E||{},E.flags=E.flags||0,E.encoding=E.encoding||"binary",E.encoding!=="utf8"&&E.encoding!=="binary")throw new Error('Invalid encoding type "'+E.encoding+'"');var o,e=N.open(B,E.flags),y=N.stat(B),U=y.size,Y=new Uint8Array(U);return N.read(e,Y,0,U,0),E.encoding==="utf8"?o=wA(Y,0):E.encoding==="binary"&&(o=Y),N.close(e),o},writeFile:function(B,E,o){o=o||{},o.flags=o.flags||577;var e=N.open(B,o.flags,o.mode);if(typeof E=="string"){var y=new Uint8Array(DA(E)+1),U=EA(E,y,0,y.length);N.write(e,y,0,U,void 0,o.canOwn)}else if(ArrayBuffer.isView(E))N.write(e,E,0,E.byteLength,void 0,o.canOwn);else throw new Error("Unsupported data type");N.close(e)},cwd:function(){return N.currentPath},chdir:function(B){var E=N.lookupPath(B,{follow:!0});if(E.node===null)throw new N.ErrnoError(44);if(!N.isDir(E.node.mode))throw new N.ErrnoError(54);var o=N.nodePermissions(E.node,"x");if(o)throw new N.ErrnoError(o);N.currentPath=E.path},createDefaultDirectories:function(){N.mkdir("/tmp"),N.mkdir("/home"),N.mkdir("/home/web_user")},createDefaultDevices:function(){N.mkdir("/dev"),N.registerDevice(N.makedev(1,3),{read:function(){return 0},write:function(E,o,e,y,U){return y}}),N.mkdev("/dev/null",N.makedev(1,3)),pg.register(N.makedev(5,0),pg.default_tty_ops),pg.register(N.makedev(6,0),pg.default_tty1_ops),N.mkdev("/dev/tty",N.makedev(5,0)),N.mkdev("/dev/tty1",N.makedev(6,0));var B=aC();N.createDevice("/dev","random",B),N.createDevice("/dev","urandom",B),N.mkdir("/dev/shm"),N.mkdir("/dev/shm/tmp")},createSpecialDirectories:function(){N.mkdir("/proc"),N.mkdir("/proc/self"),N.mkdir("/proc/self/fd"),N.mount({mount:function(){var B=N.createNode("/proc/self","fd",16895,73);return B.node_ops={lookup:function(E,o){var e=+o,y=N.getStream(e);if(!y)throw new N.ErrnoError(8);var U={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:function(){return y.path}}};return U.parent=U,U}},B}},{},"/proc/self/fd")},createStandardStreams:function(){I.stdin?N.createDevice("/dev","stdin",I.stdin):N.symlink("/dev/tty","/dev/stdin"),I.stdout?N.createDevice("/dev","stdout",null,I.stdout):N.symlink("/dev/tty","/dev/stdout"),I.stderr?N.createDevice("/dev","stderr",null,I.stderr):N.symlink("/dev/tty1","/dev/stderr"),N.open("/dev/stdin",0),N.open("/dev/stdout",1),N.open("/dev/stderr",1)},ensureErrnoError:function(){N.ErrnoError||(N.ErrnoError=function(B,E){this.node=E,this.setErrno=function(o){this.errno=o},this.setErrno(B),this.message="FS error"},N.ErrnoError.prototype=new Error,N.ErrnoError.prototype.constructor=N.ErrnoError,[44].forEach(function(B){N.genericErrors[B]=new N.ErrnoError(B),N.genericErrors[B].stack="<generic error, no stack>"}))},staticInit:function(){N.ensureErrnoError(),N.nameTable=new Array(4096),N.mount(wI,{},"/"),N.createDefaultDirectories(),N.createDefaultDevices(),N.createSpecialDirectories(),N.filesystems={MEMFS:wI}},init:function(B,E,o){N.init.initialized=!0,N.ensureErrnoError(),I.stdin=B||I.stdin,I.stdout=E||I.stdout,I.stderr=o||I.stderr,N.createStandardStreams()},quit:function(){N.init.initialized=!1;var B=I._fflush;B&&B(0);for(var E=0;E<N.streams.length;E++){var o=N.streams[E];o&&N.close(o)}},getMode:function(B,E){var o=0;return B&&(o|=365),E&&(o|=146),o},findObject:function(B,E){var o=N.analyzePath(B,E);return o.exists?o.object:null},analyzePath:function(B,E){try{var o=N.lookupPath(B,{follow:!E});B=o.path}catch{}var e={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var o=N.lookupPath(B,{parent:!0});e.parentExists=!0,e.parentPath=o.path,e.parentObject=o.node,e.name=MI.basename(B),o=N.lookupPath(B,{follow:!E}),e.exists=!0,e.path=o.path,e.object=o.node,e.name=o.node.name,e.isRoot=o.path==="/"}catch(y){e.error=y.errno}return e},createPath:function(B,E,o,e){B=typeof B=="string"?B:N.getPath(B);for(var y=E.split("/").reverse();y.length;){var U=y.pop();if(U){var Y=MI.join2(B,U);try{N.mkdir(Y)}catch{}B=Y}}return Y},createFile:function(B,E,o,e,y){var U=MI.join2(typeof B=="string"?B:N.getPath(B),E),Y=N.getMode(e,y);return N.create(U,Y)},createDataFile:function(B,E,o,e,y,U){var Y=E?MI.join2(typeof B=="string"?B:N.getPath(B),E):B,L=N.getMode(e,y),f=N.create(Y,L);if(o){if(typeof o=="string"){for(var P=new Array(o.length),gA=0,BA=o.length;gA<BA;++gA)P[gA]=o.charCodeAt(gA);o=P}N.chmod(f,L|146);var oA=N.open(f,577);N.write(oA,o,0,o.length,0,U),N.close(oA),N.chmod(f,L)}return f},createDevice:function(B,E,o,e){var y=MI.join2(typeof B=="string"?B:N.getPath(B),E),U=N.getMode(!!o,!!e);N.createDevice.major||(N.createDevice.major=64);var Y=N.makedev(N.createDevice.major++,0);return N.registerDevice(Y,{open:function(L){L.seekable=!1},close:function(L){e&&e.buffer&&e.buffer.length&&e(10)},read:function(L,f,P,gA,BA){for(var oA=0,YA=0;YA<gA;YA++){var tI;try{tI=o()}catch{throw new N.ErrnoError(29)}if(tI===void 0&&oA===0)throw new N.ErrnoError(6);if(tI==null)break;oA++,f[P+YA]=tI}return oA&&(L.node.timestamp=Date.now()),oA},write:function(L,f,P,gA,BA){for(var oA=0;oA<gA;oA++)try{e(f[P+oA])}catch{throw new N.ErrnoError(29)}return gA&&(L.node.timestamp=Date.now()),oA}}),N.mkdev(y,U,Y)},forceLoadFile:function(B){if(B.isDevice||B.isFolder||B.link||B.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(k)try{B.contents=EQ(k(B.url),!0),B.usedBytes=B.contents.length}catch{throw new N.ErrnoError(29)}else throw new Error("Cannot load without read() or XMLHttpRequest.")},createLazyFile:function(B,E,o,e,y){function U(){this.lengthKnown=!1,this.chunks=[]}if(U.prototype.get=function(BA){if(!(BA>this.length-1||BA<0)){var oA=BA%this.chunkSize,YA=BA/this.chunkSize|0;return this.getter(YA)[oA]}},U.prototype.setDataGetter=function(BA){this.getter=BA},U.prototype.cacheLength=function(){var BA=new XMLHttpRequest;if(BA.open("HEAD",o,!1),BA.send(null),!(BA.status>=200&&BA.status<300||BA.status===304))throw new Error("Couldn't load "+o+". Status: "+BA.status);var oA=Number(BA.getResponseHeader("Content-length")),YA,tI=(YA=BA.getResponseHeader("Accept-Ranges"))&&YA==="bytes",HI=(YA=BA.getResponseHeader("Content-Encoding"))&&YA==="gzip",YI=1024*1024;tI||(YI=oA);var OI=function(HA,bI){if(HA>bI)throw new Error("invalid range ("+HA+", "+bI+") or no bytes requested!");if(bI>oA-1)throw new Error("only "+oA+" bytes available! programmer error!");var BI=new XMLHttpRequest;if(BI.open("GET",o,!1),oA!==YI&&BI.setRequestHeader("Range","bytes="+HA+"-"+bI),typeof Uint8Array<"u"&&(BI.responseType="arraybuffer"),BI.overrideMimeType&&BI.overrideMimeType("text/plain; charset=x-user-defined"),BI.send(null),!(BI.status>=200&&BI.status<300||BI.status===304))throw new Error("Couldn't load "+o+". Status: "+BI.status);return BI.response!==void 0?new Uint8Array(BI.response||[]):EQ(BI.responseText||"",!0)},aA=this;aA.setDataGetter(function(HA){var bI=HA*YI,BI=(HA+1)*YI-1;if(BI=Math.min(BI,oA-1),typeof aA.chunks[HA]>"u"&&(aA.chunks[HA]=OI(bI,BI)),typeof aA.chunks[HA]>"u")throw new Error("doXHR failed!");return aA.chunks[HA]}),(HI||!oA)&&(YI=oA=1,oA=this.getter(0).length,YI=oA,J("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=oA,this._chunkSize=YI,this.lengthKnown=!0},typeof XMLHttpRequest<"u"){if(!n)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var Y=new U;Object.defineProperties(Y,{length:{get:function(){return this.lengthKnown||this.cacheLength(),this._length}},chunkSize:{get:function(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}});var L={isDevice:!1,contents:Y}}else var L={isDevice:!1,url:o};var f=N.createFile(B,E,L,e,y);L.contents?f.contents=L.contents:L.url&&(f.contents=null,f.url=L.url),Object.defineProperties(f,{usedBytes:{get:function(){return this.contents.length}}});var P={},gA=Object.keys(f.stream_ops);return gA.forEach(function(BA){var oA=f.stream_ops[BA];P[BA]=function(){return N.forceLoadFile(f),oA.apply(null,arguments)}}),P.read=function(BA,oA,YA,tI,HI){N.forceLoadFile(f);var YI=BA.node.contents;if(HI>=YI.length)return 0;var OI=Math.min(YI.length-HI,tI);if(YI.slice)for(var aA=0;aA<OI;aA++)oA[YA+aA]=YI[HI+aA];else for(var aA=0;aA<OI;aA++)oA[YA+aA]=YI.get(HI+aA);return OI},f.stream_ops=P,f},createPreloadedFile:function(B,E,o,e,y,U,Y,L,f,P){W.init();var gA=E?Rg.resolve(MI.join2(B,E)):B;function BA(oA){function YA(HI){P&&P(),L||N.createDataFile(B,E,HI,e,y,f),U&&U(),QI()}var tI=!1;I.preloadPlugins.forEach(function(HI){tI||HI.canHandle(gA)&&(HI.handle(oA,gA,YA,function(){Y&&Y(),QI()}),tI=!0)}),tI||YA(oA)}pA(),typeof o=="string"?W.asyncLoad(o,function(oA){BA(oA)},Y):BA(o)},indexedDB:function(){return window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB},DB_NAME:function(){return"EM_FS_"+window.location.pathname},DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(B,E,o){E=E||function(){},o=o||function(){};var e=N.indexedDB();try{var y=e.open(N.DB_NAME(),N.DB_VERSION)}catch(U){return o(U)}y.onupgradeneeded=function(){J("creating db");var U=y.result;U.createObjectStore(N.DB_STORE_NAME)},y.onsuccess=function(){var U=y.result,Y=U.transaction([N.DB_STORE_NAME],"readwrite"),L=Y.objectStore(N.DB_STORE_NAME),f=0,P=0,gA=B.length;function BA(){P==0?E():o()}B.forEach(function(oA){var YA=L.put(N.analyzePath(oA).object.contents,oA);YA.onsuccess=function(){f++,f+P==gA&&BA()},YA.onerror=function(){P++,f+P==gA&&BA()}}),Y.onerror=o},y.onerror=o},loadFilesFromDB:function(B,E,o){E=E||function(){},o=o||function(){};var e=N.indexedDB();try{var y=e.open(N.DB_NAME(),N.DB_VERSION)}catch(U){return o(U)}y.onupgradeneeded=o,y.onsuccess=function(){var U=y.result;try{var Y=U.transaction([N.DB_STORE_NAME],"readonly")}catch(oA){o(oA);return}var L=Y.objectStore(N.DB_STORE_NAME),f=0,P=0,gA=B.length;function BA(){P==0?E():o()}B.forEach(function(oA){var YA=L.get(oA);YA.onsuccess=function(){N.analyzePath(oA).exists&&N.unlink(oA),N.createDataFile(MI.dirname(oA),MI.basename(oA),YA.result,!0,!0,!0),f++,f+P==gA&&BA()},YA.onerror=function(){P++,f+P==gA&&BA()}}),Y.onerror=o},y.onerror=o}},d={mappings:{},DEFAULT_POLLMASK:5,umask:511,calculateAt:function(B,E){if(E[0]!=="/"){var o;if(B===-100)o=N.cwd();else{var e=N.getStream(B);if(!e)throw new N.ErrnoError(8);o=e.path}E=MI.join2(o,E)}return E},doStat:function(B,E,o){try{var e=B(E)}catch(y){if(y&&y.node&&MI.normalize(E)!==MI.normalize(N.getPath(y.node)))return-54;throw y}return KA[o>>2]=e.dev,KA[o+4>>2]=0,KA[o+8>>2]=e.ino,KA[o+12>>2]=e.mode,KA[o+16>>2]=e.nlink,KA[o+20>>2]=e.uid,KA[o+24>>2]=e.gid,KA[o+28>>2]=e.rdev,KA[o+32>>2]=0,X=[e.size>>>0,(nA=e.size,+Math.abs(nA)>=1?nA>0?(Math.min(+Math.floor(nA/4294967296),4294967295)|0)>>>0:~~+Math.ceil((nA-+(~~nA>>>0))/4294967296)>>>0:0)],KA[o+40>>2]=X[0],KA[o+44>>2]=X[1],KA[o+48>>2]=4096,KA[o+52>>2]=e.blocks,KA[o+56>>2]=e.atime.getTime()/1e3|0,KA[o+60>>2]=0,KA[o+64>>2]=e.mtime.getTime()/1e3|0,KA[o+68>>2]=0,KA[o+72>>2]=e.ctime.getTime()/1e3|0,KA[o+76>>2]=0,X=[e.ino>>>0,(nA=e.ino,+Math.abs(nA)>=1?nA>0?(Math.min(+Math.floor(nA/4294967296),4294967295)|0)>>>0:~~+Math.ceil((nA-+(~~nA>>>0))/4294967296)>>>0:0)],KA[o+80>>2]=X[0],KA[o+84>>2]=X[1],0},doMsync:function(B,E,o,e,y){var U=TA.slice(B,B+o);N.msync(E,U,y,o,e)},doMkdir:function(B,E){return B=MI.normalize(B),B[B.length-1]==="/"&&(B=B.substr(0,B.length-1)),N.mkdir(B,E,0),0},doMknod:function(B,E,o){switch(E&61440){case 32768:case 8192:case 24576:case 4096:case 49152:break;default:return-28}return N.mknod(B,E,o),0},doReadlink:function(B,E,o){if(o<=0)return-28;var e=N.readlink(B),y=Math.min(o,DA(e)),U=xA[E+y];return GA(e,E,o+1),xA[E+y]=U,y},doAccess:function(B,E){if(E&-8)return-28;var o,e=N.lookupPath(B,{follow:!0});if(o=e.node,!o)return-44;var y="";return E&4&&(y+="r"),E&2&&(y+="w"),E&1&&(y+="x"),y&&N.nodePermissions(o,y)?-2:0},doDup:function(B,E,o){var e=N.getStream(o);return e&&N.close(e),N.open(B,E,0,o,o).fd},doReadv:function(B,E,o,e){for(var y=0,U=0;U<o;U++){var Y=KA[E+U*8>>2],L=KA[E+(U*8+4)>>2],f=N.read(B,xA,Y,L,e);if(f<0)return-1;if(y+=f,f<L)break}return y},doWritev:function(B,E,o,e){for(var y=0,U=0;U<o;U++){var Y=KA[E+U*8>>2],L=KA[E+(U*8+4)>>2],f=N.write(B,xA,Y,L,e);if(f<0)return-1;y+=f}return y},varargs:void 0,get:function(){d.varargs+=4;var B=KA[d.varargs-4>>2];return B},getStr:function(B){var E=Z(B);return E},getStreamFromFD:function(B){var E=N.getStream(B);if(!E)throw new N.ErrnoError(8);return E},get64:function(B,E){return B}};function v(B,E,o){d.varargs=o;try{var e=d.getStreamFromFD(B);switch(E){case 0:{var y=d.get();if(y<0)return-28;var U;return U=N.open(e.path,e.flags,0,y),U.fd}case 1:case 2:return 0;case 3:return e.flags;case 4:{var y=d.get();return e.flags|=y,0}case 12:{var y=d.get(),Y=0;return gI[y+Y>>1]=2,0}case 13:case 14:return 0;case 16:case 8:return-28;case 9:return Qg(28),-1;default:return-28}}catch(L){return(typeof N>"u"||!(L instanceof N.ErrnoError))&&oI(L),-L.errno}}function AA(B,E,o){d.varargs=o;try{var e=d.getStreamFromFD(B);switch(E){case 21509:case 21505:return e.tty?0:-59;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return e.tty?0:-59;case 21519:{if(!e.tty)return-59;var y=d.get();return KA[y>>2]=0,0}case 21520:return e.tty?-28:-59;case 21531:{var y=d.get();return N.ioctl(e,E,y)}case 21523:return e.tty?0:-59;case 21524:return e.tty?0:-59;default:oI("bad ioctl syscall "+E)}}catch(U){return(typeof N>"u"||!(U instanceof N.ErrnoError))&&oI(U),-U.errno}}function IA(B,E,o){d.varargs=o;try{var e=d.getStr(B),y=d.get(),U=N.open(e,E,y);return U.fd}catch(Y){return(typeof N>"u"||!(Y instanceof N.ErrnoError))&&oI(Y),-Y.errno}}var _={};function qA(B){for(;B.length;){var E=B.pop(),o=B.pop();o(E)}}function VA(B){return this.fromWireType(WA[B>>2])}var $A={},AI={},GI={},aI=48,eI=57;function XI(B){if(B===void 0)return"_unknown";B=B.replace(/[^a-zA-Z0-9_]/g,"$");var E=B.charCodeAt(0);return E>=aI&&E<=eI?"_"+B:B}function sg(B,E){return B=XI(B),new Function("body","return function "+B+`() {
    "use strict" ;    return body.apply(this, arguments);
};
`)(E)}function gg(B,E){var o=sg(E,function(e){this.name=E,this.message=e;var y=new Error(e).stack;y!==void 0&&(this.stack=this.toString()+`
`+y.replace(/^Error(:[^\n]*)?\n/,""))});return o.prototype=Object.create(B.prototype),o.prototype.constructor=o,o.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},o}var Ug=void 0;function WI(B){throw new Ug(B)}function II(B,E,o){B.forEach(function(L){GI[L]=E});function e(L){var f=o(L);f.length!==B.length&&WI("Mismatched type converter count");for(var P=0;P<B.length;++P)Cg(B[P],f[P])}var y=new Array(E.length),U=[],Y=0;E.forEach(function(L,f){AI.hasOwnProperty(L)?y[f]=AI[L]:(U.push(L),$A.hasOwnProperty(L)||($A[L]=[]),$A[L].push(function(){y[f]=AI[L],++Y,Y===U.length&&e(y)}))}),U.length===0&&e(y)}function dC(B){var E=_[B];delete _[B];var o=E.elements,e=o.length,y=o.map(function(L){return L.getterReturnType}).concat(o.map(function(L){return L.setterArgumentType})),U=E.rawConstructor,Y=E.rawDestructor;II([B],y,function(L){return o.forEach(function(f,P){var gA=L[P],BA=f.getter,oA=f.getterContext,YA=L[P+e],tI=f.setter,HI=f.setterContext;f.read=function(YI){return gA.fromWireType(BA(oA,YI))},f.write=function(YI,OI){var aA=[];tI(HI,YI,YA.toWireType(aA,OI)),qA(aA)}}),[{name:E.name,fromWireType:function(f){for(var P=new Array(e),gA=0;gA<e;++gA)P[gA]=o[gA].read(f);return Y(f),P},toWireType:function(f,P){if(e!==P.length)throw new TypeError("Incorrect number of tuple elements for "+E.name+": expected="+e+", actual="+P.length);for(var gA=U(),BA=0;BA<e;++BA)o[BA].write(gA,P[BA]);return f!==null&&f.push(Y,gA),gA},argPackAdvance:8,readValueFromPointer:VA,destructorFunction:Y}]})}var PI={};function Jg(B){var E=PI[B];delete PI[B];var o=E.rawConstructor,e=E.rawDestructor,y=E.fields,U=y.map(function(Y){return Y.getterReturnType}).concat(y.map(function(Y){return Y.setterArgumentType}));II([B],U,function(Y){var L={};return y.forEach(function(f,P){var gA=f.fieldName,BA=Y[P],oA=f.getter,YA=f.getterContext,tI=Y[P+y.length],HI=f.setter,YI=f.setterContext;L[gA]={read:function(OI){return BA.fromWireType(oA(YA,OI))},write:function(OI,aA){var HA=[];HI(YI,OI,tI.toWireType(HA,aA)),qA(HA)}}}),[{name:E.name,fromWireType:function(f){var P={};for(var gA in L)P[gA]=L[gA].read(f);return e(f),P},toWireType:function(f,P){for(var gA in L)if(!(gA in P))throw new TypeError('Missing field:  "'+gA+'"');var BA=o();for(gA in L)L[gA].write(BA,P[gA]);return f!==null&&f.push(e,BA),BA},argPackAdvance:8,readValueFromPointer:VA,destructorFunction:e}]})}function eC(B){switch(B){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+B)}}function $g(){for(var B=new Array(256),E=0;E<256;++E)B[E]=String.fromCharCode(E);nC=B}var nC=void 0;function kI(B){for(var E="",o=B;TA[o];)E+=nC[TA[o++]];return E}var hg=void 0;function RI(B){throw new hg(B)}function Cg(B,E,o){if(o=o||{},!("argPackAdvance"in E))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=E.name;if(B||RI('type "'+e+'" must have a positive integer typeid pointer'),AI.hasOwnProperty(B)){if(o.ignoreDuplicateRegistrations)return;RI("Cannot register type '"+e+"' twice")}if(AI[B]=E,delete GI[B],$A.hasOwnProperty(B)){var y=$A[B];delete $A[B],y.forEach(function(U){U()})}}function JC(B,E,o,e,y){var U=eC(o);E=kI(E),Cg(B,{name:E,fromWireType:function(Y){return!!Y},toWireType:function(Y,L){return L?e:y},argPackAdvance:8,readValueFromPointer:function(Y){var L;if(o===1)L=xA;else if(o===2)L=gI;else if(o===4)L=KA;else throw new TypeError("Unknown boolean type size: "+E);return this.fromWireType(L[Y>>U])},destructorFunction:null})}function kB(B){if(!(this instanceof j)||!(B instanceof j))return!1;for(var E=this.$$.ptrType.registeredClass,o=this.$$.ptr,e=B.$$.ptrType.registeredClass,y=B.$$.ptr;E.baseClass;)o=E.upcast(o),E=E.baseClass;for(;e.baseClass;)y=e.upcast(y),e=e.baseClass;return E===e&&o===y}function jC(B){return{count:B.count,deleteScheduled:B.deleteScheduled,preservePointerOnDelete:B.preservePointerOnDelete,ptr:B.ptr,ptrType:B.ptrType,smartPtr:B.smartPtr,smartPtrType:B.smartPtrType}}function zC(B){function E(o){return o.$$.ptrType.registeredClass.name}RI(E(B)+" instance already deleted")}var _C=!1;function dB(B){}function jB(B){B.smartPtr?B.smartPtrType.rawDestructor(B.smartPtr):B.ptrType.registeredClass.rawDestructor(B.ptr)}function JB(B){B.count.value-=1;var E=B.count.value===0;E&&jB(B)}function hC(B){return typeof FinalizationGroup>"u"?(hC=function(E){return E},B):(_C=new FinalizationGroup(function(E){for(var o=E.next();!o.done;o=E.next()){var e=o.value;e.ptr?JB(e):console.warn("object already deleted: "+e.ptr)}}),hC=function(E){return _C.register(E,E.$$,E.$$),E},dB=function(E){_C.unregister(E.$$)},hC(B))}function jQ(){if(this.$$.ptr||zC(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var B=hC(Object.create(Object.getPrototypeOf(this),{$$:{value:jC(this.$$)}}));return B.$$.count.value+=1,B.$$.deleteScheduled=!1,B}function zB(){this.$$.ptr||zC(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&RI("Object already scheduled for deletion"),dB(this),JB(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function s(){return!this.$$.ptr}var G=void 0,F=[];function p(){for(;F.length;){var B=F.pop();B.$$.deleteScheduled=!1,B.delete()}}function O(){return this.$$.ptr||zC(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&RI("Object already scheduled for deletion"),F.push(this),F.length===1&&G&&G(p),this.$$.deleteScheduled=!0,this}function tA(){j.prototype.isAliasOf=kB,j.prototype.clone=jQ,j.prototype.delete=zB,j.prototype.isDeleted=s,j.prototype.deleteLater=O}function j(){}var sA={};function UA(B,E,o){if(B[E].overloadTable===void 0){var e=B[E];B[E]=function(){return B[E].overloadTable.hasOwnProperty(arguments.length)||RI("Function '"+o+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+B[E].overloadTable+")!"),B[E].overloadTable[arguments.length].apply(this,arguments)},B[E].overloadTable=[],B[E].overloadTable[e.argCount]=e}}function bA(B,E,o){I.hasOwnProperty(B)?((o===void 0||I[B].overloadTable!==void 0&&I[B].overloadTable[o]!==void 0)&&RI("Cannot register public name '"+B+"' twice"),UA(I,B,B),I.hasOwnProperty(o)&&RI("Cannot register multiple overloads of a function with the same number of arguments ("+o+")!"),I[B].overloadTable[o]=E):(I[B]=E,o!==void 0&&(I[B].numArguments=o))}function nI(B,E,o,e,y,U,Y,L){this.name=B,this.constructor=E,this.instancePrototype=o,this.rawDestructor=e,this.baseClass=y,this.getActualType=U,this.upcast=Y,this.downcast=L,this.pureVirtualFunctions=[]}function pI(B,E,o){for(;E!==o;)E.upcast||RI("Expected null or instance of "+o.name+", got an instance of "+E.name),B=E.upcast(B),E=E.baseClass;return B}function SI(B,E){if(E===null)return this.isReference&&RI("null is not a valid "+this.name),0;E.$$||RI('Cannot pass "'+$C(E)+'" as a '+this.name),E.$$.ptr||RI("Cannot pass deleted object as a pointer of type "+this.name);var o=E.$$.ptrType.registeredClass,e=pI(E.$$.ptr,o,this.registeredClass);return e}function cI(B,E){var o;if(E===null)return this.isReference&&RI("null is not a valid "+this.name),this.isSmartPointer?(o=this.rawConstructor(),B!==null&&B.push(this.rawDestructor,o),o):0;E.$$||RI('Cannot pass "'+$C(E)+'" as a '+this.name),E.$$.ptr||RI("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&E.$$.ptrType.isConst&&RI("Cannot convert argument of type "+(E.$$.smartPtrType?E.$$.smartPtrType.name:E.$$.ptrType.name)+" to parameter type "+this.name);var e=E.$$.ptrType.registeredClass;if(o=pI(E.$$.ptr,e,this.registeredClass),this.isSmartPointer)switch(E.$$.smartPtr===void 0&&RI("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:E.$$.smartPtrType===this?o=E.$$.smartPtr:RI("Cannot convert argument of type "+(E.$$.smartPtrType?E.$$.smartPtrType.name:E.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:o=E.$$.smartPtr;break;case 2:if(E.$$.smartPtrType===this)o=E.$$.smartPtr;else{var y=E.clone();o=this.rawShare(o,YB(function(){y.delete()})),B!==null&&B.push(this.rawDestructor,o)}break;default:RI("Unsupporting sharing policy")}return o}function vA(B,E){if(E===null)return this.isReference&&RI("null is not a valid "+this.name),0;E.$$||RI('Cannot pass "'+$C(E)+'" as a '+this.name),E.$$.ptr||RI("Cannot pass deleted object as a pointer of type "+this.name),E.$$.ptrType.isConst&&RI("Cannot convert argument of type "+E.$$.ptrType.name+" to parameter type "+this.name);var o=E.$$.ptrType.registeredClass,e=pI(E.$$.ptr,o,this.registeredClass);return e}function hI(B){return this.rawGetPointee&&(B=this.rawGetPointee(B)),B}function yI(B){this.rawDestructor&&this.rawDestructor(B)}function fI(B){B!==null&&B.delete()}function ig(B,E,o){if(E===o)return B;if(o.baseClass===void 0)return null;var e=ig(B,E,o.baseClass);return e===null?null:o.downcast(e)}function ZI(){return Object.keys(UI).length}function rg(){var B=[];for(var E in UI)UI.hasOwnProperty(E)&&B.push(UI[E]);return B}function Eg(B){G=B,F.length&&G&&G(p)}function NI(){I.getInheritedInstanceCount=ZI,I.getLiveInheritedInstances=rg,I.flushPendingDeletes=p,I.setDelayFunction=Eg}var UI={};function qI(B,E){for(E===void 0&&RI("ptr should not be undefined");B.baseClass;)E=B.upcast(E),B=B.baseClass;return E}function KI(B,E){return E=qI(B,E),UI[E]}function dI(B,E){(!E.ptrType||!E.ptr)&&WI("makeClassHandle requires ptr and ptrType");var o=!!E.smartPtrType,e=!!E.smartPtr;return o!==e&&WI("Both smartPtrType and smartPtr must be specified"),E.count={value:1},hC(Object.create(B,{$$:{value:E}}))}function mI(B){var E=this.getPointee(B);if(!E)return this.destructor(B),null;var o=KI(this.registeredClass,E);if(o!==void 0){if(o.$$.count.value===0)return o.$$.ptr=E,o.$$.smartPtr=B,o.clone();var e=o.clone();return this.destructor(B),e}function y(){return this.isSmartPointer?dI(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:E,smartPtrType:this,smartPtr:B}):dI(this.registeredClass.instancePrototype,{ptrType:this,ptr:B})}var U=this.registeredClass.getActualType(E),Y=sA[U];if(!Y)return y.call(this);var L;this.isConst?L=Y.constPointerType:L=Y.pointerType;var f=ig(E,this.registeredClass,L.registeredClass);return f===null?y.call(this):this.isSmartPointer?dI(L.registeredClass.instancePrototype,{ptrType:L,ptr:f,smartPtrType:this,smartPtr:B}):dI(L.registeredClass.instancePrototype,{ptrType:L,ptr:f})}function wC(){AC.prototype.getPointee=hI,AC.prototype.destructor=yI,AC.prototype.argPackAdvance=8,AC.prototype.readValueFromPointer=VA,AC.prototype.deleteObject=fI,AC.prototype.fromWireType=mI}function AC(B,E,o,e,y,U,Y,L,f,P,gA){this.name=B,this.registeredClass=E,this.isReference=o,this.isConst=e,this.isSmartPointer=y,this.pointeeType=U,this.sharingPolicy=Y,this.rawGetPointee=L,this.rawConstructor=f,this.rawShare=P,this.rawDestructor=gA,!y&&E.baseClass===void 0?e?(this.toWireType=SI,this.destructorFunction=null):(this.toWireType=vA,this.destructorFunction=null):this.toWireType=cI}function Qi(B,E,o){I.hasOwnProperty(B)||WI("Replacing nonexistant public symbol"),I[B].overloadTable!==void 0&&o!==void 0?I[B].overloadTable[o]=E:(I[B]=E,I[B].argCount=o)}function xt(B,E,o){return o&&o.length?I["dynCall_"+B].apply(null,[E].concat(o)):I["dynCall_"+B].call(null,E)}function bt(B,E,o){return B.indexOf("j")!=-1?xt(B,E,o):CI.get(E).apply(null,o)}function Tt(B,E){eA(B.indexOf("j")>=0,"getDynCaller should only be called with i64 sigs");var o=[];return function(){o.length=arguments.length;for(var e=0;e<arguments.length;e++)o[e]=arguments[e];return bt(B,E,o)}}function wg(B,E){B=kI(B);function o(){return B.indexOf("j")!=-1?Tt(B,E):CI.get(E)}var e=o();return typeof e!="function"&&RI("unknown function pointer with signature "+B+": "+E),e}var Ei=void 0;function ii(B){var E=ci(B),o=kI(E);return IC(E),o}function YC(B,E){var o=[],e={};function y(U){if(!e[U]&&!AI[U]){if(GI[U]){GI[U].forEach(y);return}o.push(U),e[U]=!0}}throw E.forEach(y),new Ei(B+": "+o.map(ii).join([", "]))}function Vt(B,E,o,e,y,U,Y,L,f,P,gA,BA,oA){gA=kI(gA),U=wg(y,U),L&&(L=wg(Y,L)),P&&(P=wg(f,P)),oA=wg(BA,oA);var YA=XI(gA);bA(YA,function(){YC("Cannot construct "+gA+" due to unbound types",[e])}),II([B,E,o],e?[e]:[],function(tI){tI=tI[0];var HI,YI;e?(HI=tI.registeredClass,YI=HI.instancePrototype):YI=j.prototype;var OI=sg(YA,function(){if(Object.getPrototypeOf(this)!==aA)throw new hg("Use 'new' to construct "+gA);if(HA.constructor_body===void 0)throw new hg(gA+" has no accessible constructor");var Yg=HA.constructor_body[arguments.length];if(Yg===void 0)throw new hg("Tried to invoke ctor of "+gA+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(HA.constructor_body).toString()+") parameters instead!");return Yg.apply(this,arguments)}),aA=Object.create(YI,{constructor:{value:OI}});OI.prototype=aA;var HA=new nI(gA,OI,aA,oA,HI,U,L,P),bI=new AC(gA,HA,!0,!1,!1),BI=new AC(gA+"*",HA,!1,!1,!1),cg=new AC(gA+" const*",HA,!1,!0,!1);return sA[B]={pointerType:BI,constPointerType:cg},Qi(YA,OI),[bI,BI,cg]})}function oi(B,E){if(!(B instanceof Function))throw new TypeError("new_ called with constructor type "+typeof B+" which is not a function");var o=sg(B.name||"unknownFunctionName",function(){});o.prototype=B.prototype;var e=new o,y=B.apply(e,E);return y instanceof Object?y:e}function zQ(B,E,o,e,y){var U=E.length;U<2&&RI("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var Y=E[1]!==null&&o!==null,L=!1,f=1;f<E.length;++f)if(E[f]!==null&&E[f].destructorFunction===void 0){L=!0;break}for(var P=E[0].name!=="void",gA="",BA="",f=0;f<U-2;++f)gA+=(f!==0?", ":"")+"arg"+f,BA+=(f!==0?", ":"")+"arg"+f+"Wired";var oA="return function "+XI(B)+"("+gA+`) {
if (arguments.length !== `+(U-2)+`) {
throwBindingError('function `+B+" called with ' + arguments.length + ' arguments, expected "+(U-2)+` args!');
}
`;L&&(oA+=`var destructors = [];
`);var YA=L?"destructors":"null",tI=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],HI=[RI,e,y,qA,E[0],E[1]];Y&&(oA+="var thisWired = classParam.toWireType("+YA+`, this);
`);for(var f=0;f<U-2;++f)oA+="var arg"+f+"Wired = argType"+f+".toWireType("+YA+", arg"+f+"); // "+E[f+2].name+`
`,tI.push("argType"+f),HI.push(E[f+2]);if(Y&&(BA="thisWired"+(BA.length>0?", ":"")+BA),oA+=(P?"var rv = ":"")+"invoker(fn"+(BA.length>0?", ":"")+BA+`);
`,L)oA+=`runDestructors(destructors);
`;else for(var f=Y?1:2;f<E.length;++f){var YI=f===1?"thisWired":"arg"+(f-2)+"Wired";E[f].destructorFunction!==null&&(oA+=YI+"_dtor("+YI+"); // "+E[f].name+`
`,tI.push(YI+"_dtor"),HI.push(E[f].destructorFunction))}P&&(oA+=`var ret = retType.fromWireType(rv);
return ret;
`),oA+=`}
`,tI.push(oA);var OI=oi(Function,tI).apply(null,HI);return OI}function _B(B,E){for(var o=[],e=0;e<B;e++)o.push(KA[(E>>2)+e]);return o}function Wt(B,E,o,e,y,U,Y){var L=_B(o,e);E=kI(E),U=wg(y,U),II([],[B],function(f){f=f[0];var P=f.name+"."+E;function gA(){YC("Cannot call "+P+" due to unbound types",L)}var BA=f.registeredClass.constructor;return BA[E]===void 0?(gA.argCount=o-1,BA[E]=gA):(UA(BA,E,P),BA[E].overloadTable[o-1]=gA),II([],L,function(oA){var YA=[oA[0],null].concat(oA.slice(1)),tI=zQ(P,YA,null,U,Y);return BA[E].overloadTable===void 0?(tI.argCount=o-1,BA[E]=tI):BA[E].overloadTable[o-1]=tI,[]}),[]})}function Zt(B,E,o,e,y,U){eA(E>0);var Y=_B(E,o);y=wg(e,y);var L=[U],f=[];II([],[B],function(P){P=P[0];var gA="constructor "+P.name;if(P.registeredClass.constructor_body===void 0&&(P.registeredClass.constructor_body=[]),P.registeredClass.constructor_body[E-1]!==void 0)throw new hg("Cannot register multiple constructors with identical number of parameters ("+(E-1)+") for class '"+P.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return P.registeredClass.constructor_body[E-1]=function(){YC("Cannot construct "+P.name+" due to unbound types",Y)},II([],Y,function(BA){return P.registeredClass.constructor_body[E-1]=function(){arguments.length!==E-1&&RI(gA+" called with "+arguments.length+" arguments, expected "+(E-1)),f.length=0,L.length=E;for(var oA=1;oA<E;++oA)L[oA]=BA[oA].toWireType(f,arguments[oA-1]);var YA=y.apply(null,L);return qA(f),BA[0].fromWireType(YA)},[]}),[]})}function Ot(B,E,o,e,y,U,Y,L){var f=_B(o,e);E=kI(E),U=wg(y,U),II([],[B],function(P){P=P[0];var gA=P.name+"."+E;L&&P.registeredClass.pureVirtualFunctions.push(E);function BA(){YC("Cannot call "+gA+" due to unbound types",f)}var oA=P.registeredClass.instancePrototype,YA=oA[E];return YA===void 0||YA.overloadTable===void 0&&YA.className!==P.name&&YA.argCount===o-2?(BA.argCount=o-2,BA.className=P.name,oA[E]=BA):(UA(oA,E,gA),oA[E].overloadTable[o-2]=BA),II([],f,function(tI){var HI=zQ(gA,tI,P,U,Y);return oA[E].overloadTable===void 0?(HI.argCount=o-2,oA[E]=HI):oA[E].overloadTable[o-2]=HI,[]}),[]})}function ti(B,E,o){return B instanceof Object||RI(o+' with invalid "this": '+B),B instanceof E.registeredClass.constructor||RI(o+' incompatible with "this" of type '+B.constructor.name),B.$$.ptr||RI("cannot call emscripten binding method "+o+" on deleted object"),pI(B.$$.ptr,B.$$.ptrType.registeredClass,E.registeredClass)}function vt(B,E,o,e,y,U,Y,L,f,P){E=kI(E),y=wg(e,y),II([],[B],function(gA){gA=gA[0];var BA=gA.name+"."+E,oA={get:function(){YC("Cannot access "+BA+" due to unbound types",[o,Y])},enumerable:!0,configurable:!0};return f?oA.set=function(){YC("Cannot access "+BA+" due to unbound types",[o,Y])}:oA.set=function(YA){RI(BA+" is a read-only property")},Object.defineProperty(gA.registeredClass.instancePrototype,E,oA),II([],f?[o,Y]:[o],function(YA){var tI=YA[0],HI={get:function(){var OI=ti(this,gA,BA+" getter");return tI.fromWireType(y(U,OI))},enumerable:!0};if(f){f=wg(L,f);var YI=YA[1];HI.set=function(OI){var aA=ti(this,gA,BA+" setter"),HA=[];f(P,aA,YI.toWireType(HA,OI)),qA(HA)}}return Object.defineProperty(gA.registeredClass.instancePrototype,E,HI),[]}),[]})}function Xt(B,E,o){B=kI(B),II([],[E],function(e){return e=e[0],I[B]=e.fromWireType(o),[]})}var _Q=[],qg=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Di(B){B>4&&--qg[B].refcount===0&&(qg[B]=void 0,_Q.push(B))}function Pt(){for(var B=0,E=5;E<qg.length;++E)qg[E]!==void 0&&++B;return B}function jt(){for(var B=5;B<qg.length;++B)if(qg[B]!==void 0)return qg[B];return null}function zt(){I.count_emval_handles=Pt,I.get_first_emval=jt}function YB(B){switch(B){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:{var E=_Q.length?_Q.pop():qg.length;return qg[E]={refcount:1,value:B},E}}}function _t(B,E){E=kI(E),Cg(B,{name:E,fromWireType:function(o){var e=qg[o].value;return Di(o),e},toWireType:function(o,e){return YB(e)},argPackAdvance:8,readValueFromPointer:VA,destructorFunction:null})}function $C(B){if(B===null)return"null";var E=typeof B;return E==="object"||E==="array"||E==="function"?B.toString():""+B}function $t(B,E){switch(E){case 2:return function(o){return this.fromWireType(rI[o>>2])};case 3:return function(o){return this.fromWireType(zA[o>>3])};default:throw new TypeError("Unknown float type: "+B)}}function AD(B,E,o){var e=eC(o);E=kI(E),Cg(B,{name:E,fromWireType:function(y){return y},toWireType:function(y,U){if(typeof U!="number"&&typeof U!="boolean")throw new TypeError('Cannot convert "'+$C(U)+'" to '+this.name);return U},argPackAdvance:8,readValueFromPointer:$t(E,e),destructorFunction:null})}function ID(B,E,o,e,y,U){var Y=_B(E,o);B=kI(B),y=wg(e,y),bA(B,function(){YC("Cannot call "+B+" due to unbound types",Y)},E-1),II([],Y,function(L){var f=[L[0],null].concat(L.slice(1));return Qi(B,zQ(B,f,null,y,U),E-1),[]})}function gD(B,E,o){switch(E){case 0:return o?function(e){return xA[e]}:function(e){return TA[e]};case 1:return o?function(e){return gI[e>>1]}:function(e){return z[e>>1]};case 2:return o?function(e){return KA[e>>2]}:function(e){return WA[e>>2]};default:throw new TypeError("Unknown integer type: "+B)}}function CD(B,E,o,e,y){E=kI(E),y===-1&&(y=4294967295);var U=eC(o),Y=function(P){return P};if(e===0){var L=32-8*o;Y=function(P){return P<<L>>>L}}var f=E.indexOf("unsigned")!=-1;Cg(B,{name:E,fromWireType:Y,toWireType:function(P,gA){if(typeof gA!="number"&&typeof gA!="boolean")throw new TypeError('Cannot convert "'+$C(gA)+'" to '+this.name);if(gA<e||gA>y)throw new TypeError('Passing a number "'+$C(gA)+'" from JS side to C/C++ side to an argument of type "'+E+'", which is outside the valid range ['+e+", "+y+"]!");return f?gA>>>0:gA|0},argPackAdvance:8,readValueFromPointer:gD(E,U,e!==0),destructorFunction:null})}function BD(B,E,o){var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],y=e[E];function U(Y){Y=Y>>2;var L=WA,f=L[Y],P=L[Y+1];return new y(DI,P,f)}o=kI(o),Cg(B,{name:o,fromWireType:U,argPackAdvance:8,readValueFromPointer:U},{ignoreDuplicateRegistrations:!0})}function QD(B,E){E=kI(E);var o=E==="std::string";Cg(B,{name:E,fromWireType:function(e){var y=WA[e>>2],U;if(o)for(var Y=e+4,L=0;L<=y;++L){var f=e+4+L;if(L==y||TA[f]==0){var P=f-Y,gA=Z(Y,P);U===void 0?U=gA:(U+="\0",U+=gA),Y=f+1}}else{for(var BA=new Array(y),L=0;L<y;++L)BA[L]=String.fromCharCode(TA[e+4+L]);U=BA.join("")}return IC(e),U},toWireType:function(e,y){y instanceof ArrayBuffer&&(y=new Uint8Array(y));var U,Y=typeof y=="string";Y||y instanceof Uint8Array||y instanceof Uint8ClampedArray||y instanceof Int8Array||RI("Cannot pass non-string to std::string"),o&&Y?U=function(){return DA(y)}:U=function(){return y.length};var L=U(),f=fB(4+L+1);if(WA[f>>2]=L,o&&Y)GA(y,f+4,L+1);else if(Y)for(var P=0;P<L;++P){var gA=y.charCodeAt(P);gA>255&&(IC(f),RI("String has UTF-16 code units that do not fit in 8 bits")),TA[f+4+P]=gA}else for(var P=0;P<L;++P)TA[f+4+P]=y[P];return e!==null&&e.push(IC,f),f},argPackAdvance:8,readValueFromPointer:VA,destructorFunction:function(e){IC(e)}})}function ED(B,E,o){o=kI(o);var e,y,U,Y,L;E===2?(e=RA,y=rA,Y=JA,U=function(){return z},L=1):E===4&&(e=LA,y=iA,Y=cA,U=function(){return WA},L=2),Cg(B,{name:o,fromWireType:function(f){for(var P=WA[f>>2],gA=U(),BA,oA=f+4,YA=0;YA<=P;++YA){var tI=f+4+YA*E;if(YA==P||gA[tI>>L]==0){var HI=tI-oA,YI=e(oA,HI);BA===void 0?BA=YI:(BA+="\0",BA+=YI),oA=tI+E}}return IC(f),BA},toWireType:function(f,P){typeof P!="string"&&RI("Cannot pass non-string to C++ string type "+o);var gA=Y(P),BA=fB(4+gA+E);return WA[BA>>2]=gA>>L,y(P,BA+4,gA+E),f!==null&&f.push(IC,BA),BA},argPackAdvance:8,readValueFromPointer:VA,destructorFunction:function(f){IC(f)}})}function iD(B,E,o,e,y,U){_[B]={name:kI(E),rawConstructor:wg(o,e),rawDestructor:wg(y,U),elements:[]}}function oD(B,E,o,e,y,U,Y,L,f){_[B].elements.push({getterReturnType:E,getter:wg(o,e),getterContext:y,setterArgumentType:U,setter:wg(Y,L),setterContext:f})}function tD(B,E,o,e,y,U){PI[B]={name:kI(E),rawConstructor:wg(o,e),rawDestructor:wg(y,U),fields:[]}}function DD(B,E,o,e,y,U,Y,L,f,P){PI[B].fields.push({fieldName:kI(E),getterReturnType:o,getter:wg(e,y),getterContext:U,setterArgumentType:Y,setter:wg(L,f),setterContext:P})}function sD(B,E){E=kI(E),Cg(B,{isVoid:!0,name:E,argPackAdvance:0,fromWireType:function(){},toWireType:function(o,e){}})}var aD={};function si(B){var E=aD[B];return E===void 0?kI(B):E}var $Q=[];function $B(B){return B||RI("Cannot use deleted val. handle = "+B),qg[B].value}function eD(B,E,o,e){B=$Q[B],E=$B(E),o=si(o),B(E,o,null,e)}function nD(B){var E=$Q.length;return $Q.push(B),E}function ai(B,E){var o=AI[B];return o===void 0&&RI(E+" has unknown type "+ii(B)),o}function hD(B,E){for(var o=new Array(B),e=0;e<B;++e)o[e]=ai(KA[(E>>2)+e],"parameter "+e);return o}function wD(B,E){for(var o=hD(B,E),e=o[0],y=e.name+"_$"+o.slice(1).map(function(YA){return YA.name}).join("_")+"$",U=["retType"],Y=[e],L="",f=0;f<B-1;++f)L+=(f!==0?", ":"")+"arg"+f,U.push("argType"+f),Y.push(o[1+f]);for(var P=XI("methodCaller_"+y),gA="return function "+P+`(handle, name, destructors, args) {
`,BA=0,f=0;f<B-1;++f)gA+="    var arg"+f+" = argType"+f+".readValueFromPointer(args"+(BA?"+"+BA:"")+`);
`,BA+=o[f+1].argPackAdvance;gA+="    var rv = handle[name]("+L+`);
`;for(var f=0;f<B-1;++f)o[f+1].deleteObject&&(gA+="    argType"+f+".deleteObject(arg"+f+`);
`);e.isVoid||(gA+=`    return retType.toWireType(destructors, rv);
`),gA+=`};
`,U.push(gA);var oA=oi(Function,U).apply(null,Y);return nD(oA)}function GD(B){B>4&&(qg[B].refcount+=1)}function rD(){return YB([])}function cD(B){return YB(si(B))}function FD(B,E,o){B=$B(B),E=$B(E),o=$B(o),B[E]=o}function RD(B,E){B=ai(B,"_emval_take_value");var o=B.readValueFromPointer(E);return YB(o)}function ND(){oI()}var yD=!0;function MD(B,E){var o;if(B===0)o=Date.now();else if((B===1||B===4)&&yD)o=XA();else return Qg(28),-1;return KA[E>>2]=o/1e3|0,KA[E+4>>2]=o%1e3*1e3*1e3|0,0}function SD(B,E,o){TA.copyWithin(B,E,E+o)}function UD(){return TA.length}function KD(B){try{return K.grow(B-DI.byteLength+65535>>>16),TI(K.buffer),1}catch{}}function lD(B){B=B>>>0;var E=UD(),o=1073741824;if(B>o)return!1;for(var e=16777216,y=1;y<=4;y*=2){var U=E*(1+.2/y);U=Math.min(U,B+100663296);var Y=Math.min(o,jA(Math.max(e,B,U),65536)),L=KD(Y);if(L)return!0}return!1}var ei={};function kD(){return t||"./this.program"}function LB(){if(!LB.strings){var B=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",E={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:B,_:kD()};for(var o in ei)E[o]=ei[o];var e=[];for(var o in E)e.push(o+"="+E[o]);LB.strings=e}return LB.strings}function dD(B,E){try{var o=0;return LB().forEach(function(e,y){var U=E+o;KA[B+y*4>>2]=U,PA(e,U),o+=e.length+1}),0}catch(e){return(typeof N>"u"||!(e instanceof N.ErrnoError))&&oI(e),e.errno}}function JD(B,E){try{var o=LB();KA[B>>2]=o.length;var e=0;return o.forEach(function(y){e+=y.length+1}),KA[E>>2]=e,0}catch(y){return(typeof N>"u"||!(y instanceof N.ErrnoError))&&oI(y),y.errno}}function YD(B){try{var E=d.getStreamFromFD(B);return N.close(E),0}catch(o){return(typeof N>"u"||!(o instanceof N.ErrnoError))&&oI(o),o.errno}}function LD(B,E,o,e){try{var y=d.getStreamFromFD(B),U=d.doReadv(y,E,o);return KA[e>>2]=U,0}catch(Y){return(typeof N>"u"||!(Y instanceof N.ErrnoError))&&oI(Y),Y.errno}}function fD(B,E,o,e,y){try{var U=d.getStreamFromFD(B),Y=4294967296,L=o*Y+(E>>>0),f=9007199254740992;return L<=-f||L>=f?-61:(N.llseek(U,L,e),X=[U.position>>>0,(nA=U.position,+Math.abs(nA)>=1?nA>0?(Math.min(+Math.floor(nA/4294967296),4294967295)|0)>>>0:~~+Math.ceil((nA-+(~~nA>>>0))/4294967296)>>>0:0)],KA[y>>2]=X[0],KA[y+4>>2]=X[1],U.getdents&&L===0&&e===0&&(U.getdents=null),0)}catch(P){return(typeof N>"u"||!(P instanceof N.ErrnoError))&&oI(P),P.errno}}function HD(B,E,o,e){try{var y=d.getStreamFromFD(B),U=d.doWritev(y,E,o);return KA[e>>2]=U,0}catch(Y){return(typeof N>"u"||!(Y instanceof N.ErrnoError))&&oI(Y),Y.errno}}function uD(B){}function AQ(B){return B%4===0&&(B%100!==0||B%400===0)}function AE(B,E){for(var o=0,e=0;e<=E;o+=B[e++]);return o}var IQ=[31,29,31,30,31,30,31,31,30,31,30,31],gQ=[31,28,31,30,31,30,31,31,30,31,30,31];function CQ(B,E){for(var o=new Date(B.getTime());E>0;){var e=AQ(o.getFullYear()),y=o.getMonth(),U=(e?IQ:gQ)[y];if(E>U-o.getDate())E-=U-o.getDate()+1,o.setDate(1),y<11?o.setMonth(y+1):(o.setMonth(0),o.setFullYear(o.getFullYear()+1));else return o.setDate(o.getDate()+E),o}return o}function pD(B,E,o,e){var y=KA[e+40>>2],U={tm_sec:KA[e>>2],tm_min:KA[e+4>>2],tm_hour:KA[e+8>>2],tm_mday:KA[e+12>>2],tm_mon:KA[e+16>>2],tm_year:KA[e+20>>2],tm_wday:KA[e+24>>2],tm_yday:KA[e+28>>2],tm_isdst:KA[e+32>>2],tm_gmtoff:KA[e+36>>2],tm_zone:y?Z(y):""},Y=Z(o),L={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var f in L)Y=Y.replace(new RegExp(f,"g"),L[f]);var P=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],gA=["January","February","March","April","May","June","July","August","September","October","November","December"];function BA(aA,HA,bI){for(var BI=typeof aA=="number"?aA.toString():aA||"";BI.length<HA;)BI=bI[0]+BI;return BI}function oA(aA,HA){return BA(aA,HA,"0")}function YA(aA,HA){function bI(cg){return cg<0?-1:cg>0?1:0}var BI;return(BI=bI(aA.getFullYear()-HA.getFullYear()))===0&&(BI=bI(aA.getMonth()-HA.getMonth()))===0&&(BI=bI(aA.getDate()-HA.getDate())),BI}function tI(aA){switch(aA.getDay()){case 0:return new Date(aA.getFullYear()-1,11,29);case 1:return aA;case 2:return new Date(aA.getFullYear(),0,3);case 3:return new Date(aA.getFullYear(),0,2);case 4:return new Date(aA.getFullYear(),0,1);case 5:return new Date(aA.getFullYear()-1,11,31);case 6:return new Date(aA.getFullYear()-1,11,30)}}function HI(aA){var HA=CQ(new Date(aA.tm_year+1900,0,1),aA.tm_yday),bI=new Date(HA.getFullYear(),0,4),BI=new Date(HA.getFullYear()+1,0,4),cg=tI(bI),Yg=tI(BI);return YA(cg,HA)<=0?YA(Yg,HA)<=0?HA.getFullYear()+1:HA.getFullYear():HA.getFullYear()-1}var YI={"%a":function(aA){return P[aA.tm_wday].substring(0,3)},"%A":function(aA){return P[aA.tm_wday]},"%b":function(aA){return gA[aA.tm_mon].substring(0,3)},"%B":function(aA){return gA[aA.tm_mon]},"%C":function(aA){var HA=aA.tm_year+1900;return oA(HA/100|0,2)},"%d":function(aA){return oA(aA.tm_mday,2)},"%e":function(aA){return BA(aA.tm_mday,2," ")},"%g":function(aA){return HI(aA).toString().substring(2)},"%G":function(aA){return HI(aA)},"%H":function(aA){return oA(aA.tm_hour,2)},"%I":function(aA){var HA=aA.tm_hour;return HA==0?HA=12:HA>12&&(HA-=12),oA(HA,2)},"%j":function(aA){return oA(aA.tm_mday+AE(AQ(aA.tm_year+1900)?IQ:gQ,aA.tm_mon-1),3)},"%m":function(aA){return oA(aA.tm_mon+1,2)},"%M":function(aA){return oA(aA.tm_min,2)},"%n":function(){return`
`},"%p":function(aA){return aA.tm_hour>=0&&aA.tm_hour<12?"AM":"PM"},"%S":function(aA){return oA(aA.tm_sec,2)},"%t":function(){return"	"},"%u":function(aA){return aA.tm_wday||7},"%U":function(aA){var HA=new Date(aA.tm_year+1900,0,1),bI=HA.getDay()===0?HA:CQ(HA,7-HA.getDay()),BI=new Date(aA.tm_year+1900,aA.tm_mon,aA.tm_mday);if(YA(bI,BI)<0){var cg=AE(AQ(BI.getFullYear())?IQ:gQ,BI.getMonth()-1)-31,Yg=31-bI.getDate(),fC=Yg+cg+BI.getDate();return oA(Math.ceil(fC/7),2)}return YA(bI,HA)===0?"01":"00"},"%V":function(aA){var HA=new Date(aA.tm_year+1900,0,4),bI=new Date(aA.tm_year+1901,0,4),BI=tI(HA),cg=tI(bI),Yg=CQ(new Date(aA.tm_year+1900,0,1),aA.tm_yday);if(YA(Yg,BI)<0)return"53";if(YA(cg,Yg)<=0)return"01";var fC;return BI.getFullYear()<aA.tm_year+1900?fC=aA.tm_yday+32-BI.getDate():fC=aA.tm_yday+1-BI.getDate(),oA(Math.ceil(fC/7),2)},"%w":function(aA){return aA.tm_wday},"%W":function(aA){var HA=new Date(aA.tm_year,0,1),bI=HA.getDay()===1?HA:CQ(HA,HA.getDay()===0?1:7-HA.getDay()+1),BI=new Date(aA.tm_year+1900,aA.tm_mon,aA.tm_mday);if(YA(bI,BI)<0){var cg=AE(AQ(BI.getFullYear())?IQ:gQ,BI.getMonth()-1)-31,Yg=31-bI.getDate(),fC=Yg+cg+BI.getDate();return oA(Math.ceil(fC/7),2)}return YA(bI,HA)===0?"01":"00"},"%y":function(aA){return(aA.tm_year+1900).toString().substring(2)},"%Y":function(aA){return aA.tm_year+1900},"%z":function(aA){var HA=aA.tm_gmtoff,bI=HA>=0;return HA=Math.abs(HA)/60,HA=HA/60*100+HA%60,(bI?"+":"-")+("0000"+HA).slice(-4)},"%Z":function(aA){return aA.tm_zone},"%%":function(){return"%"}};for(var f in YI)Y.indexOf(f)>=0&&(Y=Y.replace(new RegExp(f,"g"),YI[f](U)));var OI=EQ(Y,!1);return OI.length>E?0:(mA(OI,B),OI.length-1)}function qD(B,E,o,e){return pD(B,E,o,e)}I.requestFullscreen=function(B,E){W.requestFullscreen(B,E)},I.requestAnimationFrame=function(B){W.requestAnimationFrame(B)},I.setCanvasSize=function(B,E,o){W.setCanvasSize(B,E,o)},I.pauseMainLoop=function(){W.mainLoop.pause()},I.resumeMainLoop=function(){W.mainLoop.resume()},I.getUserMedia=function(){W.getUserMedia()},I.createContext=function(B,E,o,e){return W.createContext(B,E,o,e)};var ni=function(B,E,o,e){B||(B=this),this.parent=B,this.mount=B.mount,this.mounted=null,this.id=N.nextInode++,this.name=E,this.mode=o,this.node_ops={},this.stream_ops={},this.rdev=e},BQ=365,QQ=146;Object.defineProperties(ni.prototype,{read:{get:function(){return(this.mode&BQ)===BQ},set:function(B){B?this.mode|=BQ:this.mode&=~BQ}},write:{get:function(){return(this.mode&QQ)===QQ},set:function(B){B?this.mode|=QQ:this.mode&=~QQ}},isFolder:{get:function(){return N.isDir(this.mode)}},isDevice:{get:function(){return N.isChrdev(this.mode)}}}),N.FSNode=ni,N.staticInit(),I.FS_createPath=N.createPath,I.FS_createDataFile=N.createDataFile,I.FS_createPreloadedFile=N.createPreloadedFile,I.FS_createLazyFile=N.createLazyFile,I.FS_createDevice=N.createDevice,I.FS_unlink=N.unlink,Ug=I.InternalError=gg(Error,"InternalError"),$g(),hg=I.BindingError=gg(Error,"BindingError"),tA(),wC(),NI(),Ei=I.UnboundTypeError=gg(Error,"UnboundTypeError"),zt();function EQ(B,E,o){var e=o>0?o:DA(B)+1,y=new Array(e),U=EA(B,y,0,y.length);return E&&(y.length=U),y}function hi(B){for(var E=[],o=0;o<B.length;o++){var e=B[o];e>255&&(e&=255),E.push(String.fromCharCode(e))}return E.join("")}var mD=typeof atob=="function"?atob:function(B){var E="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o="",e,y,U,Y,L,f,P,gA=0;B=B.replace(/[^A-Za-z0-9\+\/\=]/g,"");do Y=E.indexOf(B.charAt(gA++)),L=E.indexOf(B.charAt(gA++)),f=E.indexOf(B.charAt(gA++)),P=E.indexOf(B.charAt(gA++)),e=Y<<2|L>>4,y=(L&15)<<4|f>>2,U=(f&3)<<6|P,o=o+String.fromCharCode(e),f!==64&&(o=o+String.fromCharCode(y)),P!==64&&(o=o+String.fromCharCode(U));while(gA<B.length);return o};function xD(B){if(typeof w=="boolean"&&w){var E;try{E=Buffer.from(B,"base64")}catch{E=new Buffer(B,"base64")}return new Uint8Array(E.buffer,E.byteOffset,E.byteLength)}try{for(var o=mD(B),e=new Uint8Array(o.length),y=0;y<o.length;++y)e[y]=o.charCodeAt(y);return e}catch{throw new Error("Converting base64 string to bytes failed.")}}function LC(B){if(OA(B))return xD(B.slice(xI.length))}uI.push({func:function(){Gi()}});var wi={__cxa_allocate_exception:Ag,__cxa_atexit:tg,__cxa_throw:lB,__sys_fcntl64:v,__sys_ioctl:AA,__sys_open:IA,_embind_finalize_value_array:dC,_embind_finalize_value_object:Jg,_embind_register_bool:JC,_embind_register_class:Vt,_embind_register_class_class_function:Wt,_embind_register_class_constructor:Zt,_embind_register_class_function:Ot,_embind_register_class_property:vt,_embind_register_constant:Xt,_embind_register_emval:_t,_embind_register_float:AD,_embind_register_function:ID,_embind_register_integer:CD,_embind_register_memory_view:BD,_embind_register_std_string:QD,_embind_register_std_wstring:ED,_embind_register_value_array:iD,_embind_register_value_array_element:oD,_embind_register_value_object:tD,_embind_register_value_object_field:DD,_embind_register_void:sD,_emval_call_void_method:eD,_emval_decref:Di,_emval_get_method_caller:wD,_emval_incref:GD,_emval_new_array:rD,_emval_new_cstring:cD,_emval_set_property:FD,_emval_take_value:RD,abort:ND,clock_gettime:MD,emscripten_memcpy_big:SD,emscripten_resize_heap:lD,environ_get:dD,environ_sizes_get:JD,fd_close:YD,fd_read:LD,fd_seek:fD,fd_write:HD,setTempRet0:uD,strftime_l:qD};fA();var Gi=I.___wasm_call_ctors=function(){return(Gi=I.___wasm_call_ctors=I.asm.__wasm_call_ctors).apply(null,arguments)},fB=I._malloc=function(){return(fB=I._malloc=I.asm.malloc).apply(null,arguments)},IC=I._free=function(){return(IC=I._free=I.asm.free).apply(null,arguments)},ri=I.___errno_location=function(){return(ri=I.___errno_location=I.asm.__errno_location).apply(null,arguments)},ci=I.___getTypeName=function(){return(ci=I.___getTypeName=I.asm.__getTypeName).apply(null,arguments)};I.___embind_register_native_and_builtin_types=function(){return(I.___embind_register_native_and_builtin_types=I.asm.__embind_register_native_and_builtin_types).apply(null,arguments)},I._emscripten_main_thread_process_queued_calls=function(){return(I._emscripten_main_thread_process_queued_calls=I.asm.emscripten_main_thread_process_queued_calls).apply(null,arguments)},I.stackSave=function(){return(I.stackSave=I.asm.stackSave).apply(null,arguments)},I.stackRestore=function(){return(I.stackRestore=I.asm.stackRestore).apply(null,arguments)},I.stackAlloc=function(){return(I.stackAlloc=I.asm.stackAlloc).apply(null,arguments)},I._setThrew=function(){return(I._setThrew=I.asm.setThrew).apply(null,arguments)},I.___cxa_demangle=function(){return(I.___cxa_demangle=I.asm.__cxa_demangle).apply(null,arguments)},I.dynCall_viijii=function(){return(I.dynCall_viijii=I.asm.dynCall_viijii).apply(null,arguments)},I.dynCall_ji=function(){return(I.dynCall_ji=I.asm.dynCall_ji).apply(null,arguments)},I.dynCall_vij=function(){return(I.dynCall_vij=I.asm.dynCall_vij).apply(null,arguments)},I.dynCall_jiji=function(){return(I.dynCall_jiji=I.asm.dynCall_jiji).apply(null,arguments)},I.dynCall_iiiiij=function(){return(I.dynCall_iiiiij=I.asm.dynCall_iiiiij).apply(null,arguments)},I.dynCall_iiiiijj=function(){return(I.dynCall_iiiiijj=I.asm.dynCall_iiiiijj).apply(null,arguments)},I.dynCall_iiiiiijj=function(){return(I.dynCall_iiiiiijj=I.asm.dynCall_iiiiiijj).apply(null,arguments)},I.addRunDependency=pA,I.removeRunDependency=QI,I.FS_createPath=N.createPath,I.FS_createDataFile=N.createDataFile,I.FS_createPreloadedFile=N.createPreloadedFile,I.FS_createLazyFile=N.createLazyFile,I.FS_createDevice=N.createDevice,I.FS_unlink=N.unlink;var iQ;function Fi(B){this.name="ExitStatus",this.message="Program terminated with exit("+B+")",this.status=B}lA=function B(){iQ||IE(),iQ||(lA=B)};function IE(B){if(ZA>0||(q(),ZA>0))return;function E(){iQ||(iQ=!0,I.calledRun=!0,!m&&(l(),$(),g(I),I.onRuntimeInitialized&&I.onRuntimeInitialized(),SA()))}I.setStatus?(I.setStatus("Running..."),setTimeout(function(){setTimeout(function(){I.setStatus("")},1),E()},1)):E()}if(I.run=IE,I.preInit)for(typeof I.preInit=="function"&&(I.preInit=[I.preInit]);I.preInit.length>0;)I.preInit.pop()();IE(),typeof I.FS>"u"&&typeof N<"u"&&(I.FS=N),I.imread=function(B){var E=null;typeof B=="string"?E=document.getElementById(B):E=B;var o=null,e=null;if(E instanceof HTMLImageElement)o=document.createElement("canvas"),o.width=E.width,o.height=E.height,e=o.getContext("2d"),e.drawImage(E,0,0,E.width,E.height);else if(E instanceof HTMLCanvasElement)o=E,e=o.getContext("2d");else throw new Error("Please input the valid canvas or img id.");var y=e.getImageData(0,0,o.width,o.height);return A.matFromImageData(y)},I.imshow=function(B,E){var o=null;if(typeof B=="string"?o=document.getElementById(B):o=B,!(o instanceof HTMLCanvasElement))throw new Error("Please input the valid canvas element or id.");if(!(E instanceof A.Mat))throw new Error("Please input the valid cv.Mat instance.");var e=new A.Mat,y=E.type()%8,U=y<=A.CV_8S?1:y<=A.CV_32S?1/256:255,Y=y===A.CV_8S||y===A.CV_16S?128:0;switch(E.convertTo(e,A.CV_8U,U,Y),e.type()){case A.CV_8UC1:A.cvtColor(e,e,A.COLOR_GRAY2RGBA);break;case A.CV_8UC3:A.cvtColor(e,e,A.COLOR_RGB2RGBA);break;case A.CV_8UC4:break;default:throw new Error("Bad number of channels (Source image must have 1, 3 or 4 channels)")}var L=new ImageData(new Uint8ClampedArray(e.data),e.cols,e.rows),f=o.getContext("2d");f.clearRect(0,0,o.width,o.height),o.width=L.width,o.height=L.height,f.putImageData(L,0,0),e.delete()},I.VideoCapture=function(B){var E=null;if(typeof B=="string"?E=document.getElementById(B):E=B,!(E instanceof HTMLVideoElement))throw new Error("Please input the valid video element or id.");var o=document.createElement("canvas");o.width=E.width,o.height=E.height;var e=o.getContext("2d");this.video=E,this.read=function(y){if(!(y instanceof A.Mat))throw new Error("Please input the valid cv.Mat instance.");if(y.type()!==A.CV_8UC4)throw new Error("Bad type of input mat: the type should be cv.CV_8UC4.");if(y.cols!==E.width||y.rows!==E.height)throw new Error("Bad size of input mat: the size should be same as the video.");e.drawImage(E,0,0,E.width,E.height),y.data.set(e.getImageData(0,0,E.width,E.height).data)}};function bD(B,E){this.start=typeof B>"u"?0:B,this.end=typeof E>"u"?0:E}I.Range=bD;function oQ(B,E){this.x=typeof B>"u"?0:B,this.y=typeof E>"u"?0:E}I.Point=oQ;function TD(B,E){this.width=typeof B>"u"?0:B,this.height=typeof E>"u"?0:E}I.Size=TD;function VD(){switch(arguments.length){case 0:{this.x=0,this.y=0,this.width=0,this.height=0;break}case 1:{var B=arguments[0];this.x=B.x,this.y=B.y,this.width=B.width,this.height=B.height;break}case 2:{var E=arguments[0],o=arguments[1];this.x=E.x,this.y=E.y,this.width=o.width,this.height=o.height;break}case 4:{this.x=arguments[0],this.y=arguments[1],this.width=arguments[2],this.height=arguments[3];break}default:throw new Error("Invalid arguments")}}I.Rect=VD;function tQ(){switch(arguments.length){case 0:{this.center={x:0,y:0},this.size={width:0,height:0},this.angle=0;break}case 3:{this.center=arguments[0],this.size=arguments[1],this.angle=arguments[2];break}default:throw new Error("Invalid arguments")}}tQ.points=function(B){return I.rotatedRectPoints(B)},tQ.boundingRect=function(B){return I.rotatedRectBoundingRect(B)},tQ.boundingRect2f=function(B){return I.rotatedRectBoundingRect2f(B)},I.RotatedRect=tQ;function DQ(B,E,o,e){this.push(typeof B>"u"?0:B),this.push(typeof E>"u"?0:E),this.push(typeof o>"u"?0:o),this.push(typeof e>"u"?0:e)}DQ.prototype=new Array,DQ.all=function(B){return new DQ(B,B,B,B)},I.Scalar=DQ;function WD(){switch(arguments.length){case 0:{this.minVal=0,this.maxVal=0,this.minLoc=new oQ,this.maxLoc=new oQ;break}case 4:{this.minVal=arguments[0],this.maxVal=arguments[1],this.minLoc=arguments[2],this.maxLoc=arguments[3];break}default:throw new Error("Invalid arguments")}}I.MinMaxLoc=WD;function ZD(){switch(arguments.length){case 0:{this.center=new oQ,this.radius=0;break}case 2:{this.center=arguments[0],this.radius=arguments[1];break}default:throw new Error("Invalid arguments")}}I.Circle=ZD;function OD(){switch(arguments.length){case 0:{this.type=0,this.maxCount=0,this.epsilon=0;break}case 3:{this.type=arguments[0],this.maxCount=arguments[1],this.epsilon=arguments[2];break}default:throw new Error("Invalid arguments")}}return I.TermCriteria=OD,I.matFromArray=function(B,E,o,e){var y=new A.Mat(B,E,o);switch(o){case A.CV_8U:case A.CV_8UC1:case A.CV_8UC2:case A.CV_8UC3:case A.CV_8UC4:{y.data.set(e);break}case A.CV_8S:case A.CV_8SC1:case A.CV_8SC2:case A.CV_8SC3:case A.CV_8SC4:{y.data8S.set(e);break}case A.CV_16U:case A.CV_16UC1:case A.CV_16UC2:case A.CV_16UC3:case A.CV_16UC4:{y.data16U.set(e);break}case A.CV_16S:case A.CV_16SC1:case A.CV_16SC2:case A.CV_16SC3:case A.CV_16SC4:{y.data16S.set(e);break}case A.CV_32S:case A.CV_32SC1:case A.CV_32SC2:case A.CV_32SC3:case A.CV_32SC4:{y.data32S.set(e);break}case A.CV_32F:case A.CV_32FC1:case A.CV_32FC2:case A.CV_32FC3:case A.CV_32FC4:{y.data32F.set(e);break}case A.CV_64F:case A.CV_64FC1:case A.CV_64FC2:case A.CV_64FC3:case A.CV_64FC4:{y.data64F.set(e);break}default:throw new Error("Type is unsupported")}return y},I.matFromImageData=function(B){var E=new A.Mat(B.height,B.width,A.CV_8UC4);return E.data.set(B.data),E},A.ready}}();lt(nw);let kt=!1;const dt={},Jt=[],hw=async()=>kt?!0:new Promise((C,A)=>{Jt.push(C)});lt().then(C=>{kt=!0,Object.assign(dt,C),Jt.forEach(A=>{A()})});const $I=dt,tC=[[0,-3.406404,5.979507],[0,-1.126865,7.475604],[0,-2.089024,6.058267],[-.463928,.955357,6.633583],[0,-.46317,7.58658],[0,.365669,7.24287],[0,2.473255,5.788627],[-4.253081,2.577646,3.279702],[0,4.019042,5.284764],[0,4.885979,5.385258],[0,8.261778,4.481535],[0,-3.706811,5.864924],[0,-3.918301,5.56943],[0,-3.994436,5.219482],[0,-4.5424,5.404754],[0,-4.745577,5.529457],[0,-5.019567,5.601448],[0,-5.365123,5.535441],[0,-6.149624,5.071372],[0,-1.501095,7.112196],[-.416106,-1.466449,6.447657],[-7.08796,5.434801,.09962],[-2.628639,2.035898,3.848121],[-3.198363,1.985815,3.796952],[-3.775151,2.039402,3.646194],[-4.465819,2.42295,3.155168],[-2.164289,2.189867,3.851822],[-3.208229,3.223926,4.115822],[-2.673803,3.205337,4.092203],[-3.745193,3.165286,3.972409],[-4.161018,3.059069,3.719554],[-5.062006,1.934418,2.776093],[-2.266659,-7.425768,4.389812],[-4.445859,2.663991,3.173422],[-7.21453,2.263009,.07315],[-5.799793,2.349546,2.204059],[-2.844939,-.720868,4.43313],[-.711452,-3.329355,5.877044],[-.606033,-3.924562,5.444923],[-1.431615,-3.500953,5.496189],[-1.91491,-3.803146,5.02893],[-1.131043,-3.973937,5.189648],[-1.563548,-4.082763,4.842263],[-2.650112,-5.003649,4.188483],[-.427049,-1.094134,7.360529],[-.496396,-.475659,7.440358],[-5.253307,3.881582,3.363159],[-1.718698,.974609,4.558359],[-1.608635,-.942516,5.814193],[-1.651267,-.610868,5.581319],[-4.765501,-.701554,3.534632],[-.478306,.295766,7.101013],[-3.734964,4.50823,4.550454],[-4.588603,4.302037,4.048484],[-6.279331,6.615427,1.42585],[-1.220941,4.142165,5.106035],[-2.193489,3.100317,4.000575],[-3.102642,-4.352984,4.095905],[-6.719682,-4.788645,-1.745401],[-1.193824,-1.306795,5.737747],[-.729766,-1.593712,5.833208],[-2.456206,-4.342621,4.283884],[-2.204823,-4.304508,4.162499],[-4.985894,4.802461,3.751977],[-1.592294,-1.257709,5.456949],[-2.644548,4.524654,4.921559],[-2.760292,5.100971,5.01599],[-3.523964,8.005976,3.729163],[-5.599763,5.71547,2.724259],[-3.063932,6.566144,4.529981],[-5.720968,4.254584,2.830852],[-6.374393,4.78559,1.591691],[-.672728,-3.688016,5.737804],[-1.26256,-3.787691,5.417779],[-1.732553,-3.952767,5.000579],[-1.043625,-1.464973,5.662455],[-2.321234,-4.329069,4.258156],[-2.056846,-4.477671,4.520883],[-2.153084,-4.276322,4.038093],[-.946874,-1.035249,6.512274],[-1.469132,-4.036351,4.604908],[-1.02434,-3.989851,4.926693],[-.533422,-3.993222,5.138202],[-.76972,-6.095394,4.985883],[-.699606,-5.29185,5.448304],[-.669687,-4.94977,5.509612],[-.630947,-4.695101,5.449371],[-.583218,-4.517982,5.339869],[-1.53717,-4.423206,4.74547],[-1.6156,-4.475942,4.813632],[-1.729053,-4.61868,4.854463],[-1.838624,-4.828746,4.823737],[-2.36825,-3.106237,4.868096],[-7.542244,-1.049282,-2.431321],[0,-1.724003,6.60139],[-1.826614,-4.399531,4.399021],[-1.929558,-4.411831,4.497052],[-.597442,-2.013686,5.866456],[-1.405627,-1.714196,5.241087],[-.662449,-1.819321,5.863759],[-2.34234,.572222,4.294303],[-3.327324,.104863,4.11386],[-1.726175,-.919165,5.273355],[-5.133204,7.485602,2.660442],[-4.538641,6.319907,3.683424],[-3.986562,5.109487,4.466315],[-2.169681,-5.440433,4.455874],[-1.395634,5.011963,5.316032],[-1.6195,6.599217,4.921106],[-1.891399,8.236377,4.274997],[-4.195832,2.235205,3.375099],[-5.733342,1.411738,2.431726],[-1.859887,2.355757,3.843181],[-4.988612,3.074654,3.083858],[-1.303263,1.416453,4.831091],[-1.305757,-.672779,6.415959],[-6.46517,.937119,1.689873],[-5.258659,.945811,2.974312],[-4.432338,.722096,3.522615],[-3.300681,.861641,3.872784],[-2.430178,1.131492,4.039035],[-1.820731,1.467954,4.224124],[-.563221,2.307693,5.566789],[-6.338145,-.529279,1.881175],[-5.587698,3.208071,2.687839],[-.242624,-1.462857,7.071491],[-1.611251,.339326,4.895421],[-7.743095,2.364999,-2.005167],[-1.391142,1.851048,4.448999],[-1.785794,-.978284,4.85047],[-4.670959,2.664461,3.084075],[-1.33397,-.283761,6.097047],[-7.270895,-2.890917,-2.252455],[-1.856432,2.585245,3.757904],[-.923388,.073076,6.671944],[-5.000589,-6.135128,1.892523],[-5.085276,-7.17859,.714711],[-7.159291,-.81182,-.072044],[-5.843051,-5.248023,.924091],[-6.847258,3.662916,.724695],[-2.412942,-8.258853,4.119213],[-.179909,-1.689864,6.573301],[-2.103655,-.163946,4.566119],[-6.407571,2.236021,1.560843],[-3.670075,2.360153,3.63523],[-3.177186,2.294265,3.775704],[-2.196121,-4.598322,4.479786],[-6.234883,-1.94443,1.663542],[-1.292924,-9.29592,4.094063],[-3.210651,-8.533278,2.802001],[-4.068926,-7.993109,1.925119],[0,6.54539,5.027311],[0,-9.403378,4.264492],[-2.724032,2.315802,3.777151],[-2.28846,2.398891,3.697603],[-1.998311,2.496547,3.689148],[-6.13004,3.399261,2.038516],[-2.28846,2.886504,3.775031],[-2.724032,2.96181,3.871767],[-3.177186,2.964136,3.876973],[-3.670075,2.927714,3.724325],[-4.018389,2.857357,3.482983],[-7.555811,4.106811,-.991917],[-4.018389,2.483695,3.440898],[0,-2.521945,5.932265],[-1.776217,-2.683946,5.213116],[-1.222237,-1.182444,5.952465],[-.731493,-2.536683,5.815343],[0,3.271027,5.236015],[-4.135272,-6.996638,2.67197],[-3.311811,-7.660815,3.382963],[-1.313701,-8.639995,4.702456],[-5.940524,-6.223629,-.631468],[-1.998311,2.743838,3.74403],[-.901447,1.236992,5.754256],[0,-8.765243,4.891441],[-2.308977,-8.974196,3.60907],[-6.954154,-2.439843,-.131163],[-1.098819,-4.458788,5.120727],[-1.181124,-4.579996,5.189564],[-1.255818,-4.787901,5.237051],[-1.325085,-5.106507,5.20501],[-1.546388,-5.819392,4.757893],[-1.953754,-4.183892,4.431713],[-2.117802,-4.137093,4.555096],[-2.285339,-4.051196,4.582438],[-2.85016,-3.66572,4.484994],[-5.278538,-2.238942,2.861224],[-.946709,1.907628,5.196779],[-1.314173,3.104912,4.231404],[-1.78,2.86,3.881555],[-1.84511,-4.09888,4.247264],[-5.436187,-4.030482,2.109852],[-.766444,3.182131,4.861453],[-1.938616,-6.61441,4.521085],[0,1.059413,6.774605],[-.516573,1.583572,6.148363],[0,1.728369,6.31675],[-1.246815,.230297,5.681036],[0,-7.942194,5.181173],[0,-6.991499,5.153478],[-.997827,-6.930921,4.979576],[-3.288807,-5.382514,3.795752],[-2.311631,-1.566237,4.590085],[-2.68025,-6.111567,4.096152],[-3.832928,-1.537326,4.137731],[-2.96186,-2.274215,4.440943],[-4.386901,-2.683286,3.643886],[-1.217295,-7.834465,4.969286],[-1.542374,-.136843,5.201008],[-3.878377,-6.041764,3.311079],[-3.084037,-6.809842,3.814195],[-3.747321,-4.503545,3.726453],[-6.094129,-3.205991,1.473482],[-4.588995,-4.728726,2.983221],[-6.583231,-3.941269,.070268],[-3.49258,-3.19582,4.130198],[-1.255543,.802341,5.307551],[-1.126122,-.933602,6.538785],[-1.443109,-1.142774,5.905127],[-.923043,-.529042,7.003423],[-1.755386,3.529117,4.327696],[-2.632589,3.713828,4.364629],[-3.388062,3.721976,4.309028],[-4.075766,3.675413,4.076063],[-4.62291,3.474691,3.646321],[-5.171755,2.535753,2.670867],[-7.297331,.763172,-.048769],[-4.706828,1.651,3.109532],[-4.071712,1.476821,3.476944],[-3.269817,1.470659,3.731945],[-2.527572,1.617311,3.865444],[-1.970894,1.858505,3.961782],[-1.579543,2.097941,4.084996],[-7.664182,.673132,-2.435867],[-1.397041,-1.340139,5.630378],[-.884838,.65874,6.233232],[-.767097,-.968035,7.077932],[-.460213,-1.334106,6.787447],[-.748618,-1.067994,6.798303],[-1.236408,-1.585568,5.48049],[-.387306,-1.40999,6.957705],[-.319925,-1.607931,6.508676],[-1.639633,2.556298,3.863736],[-1.255645,2.467144,4.2038],[-1.031362,2.382663,4.615849],[-4.253081,2.772296,3.315305],[-4.53,2.91,3.339685],[.463928,.955357,6.633583],[4.253081,2.577646,3.279702],[.416106,-1.466449,6.447657],[7.08796,5.434801,.09962],[2.628639,2.035898,3.848121],[3.198363,1.985815,3.796952],[3.775151,2.039402,3.646194],[4.465819,2.42295,3.155168],[2.164289,2.189867,3.851822],[3.208229,3.223926,4.115822],[2.673803,3.205337,4.092203],[3.745193,3.165286,3.972409],[4.161018,3.059069,3.719554],[5.062006,1.934418,2.776093],[2.266659,-7.425768,4.389812],[4.445859,2.663991,3.173422],[7.21453,2.263009,.07315],[5.799793,2.349546,2.204059],[2.844939,-.720868,4.43313],[.711452,-3.329355,5.877044],[.606033,-3.924562,5.444923],[1.431615,-3.500953,5.496189],[1.91491,-3.803146,5.02893],[1.131043,-3.973937,5.189648],[1.563548,-4.082763,4.842263],[2.650112,-5.003649,4.188483],[.427049,-1.094134,7.360529],[.496396,-.475659,7.440358],[5.253307,3.881582,3.363159],[1.718698,.974609,4.558359],[1.608635,-.942516,5.814193],[1.651267,-.610868,5.581319],[4.765501,-.701554,3.534632],[.478306,.295766,7.101013],[3.734964,4.50823,4.550454],[4.588603,4.302037,4.048484],[6.279331,6.615427,1.42585],[1.220941,4.142165,5.106035],[2.193489,3.100317,4.000575],[3.102642,-4.352984,4.095905],[6.719682,-4.788645,-1.745401],[1.193824,-1.306795,5.737747],[.729766,-1.593712,5.833208],[2.456206,-4.342621,4.283884],[2.204823,-4.304508,4.162499],[4.985894,4.802461,3.751977],[1.592294,-1.257709,5.456949],[2.644548,4.524654,4.921559],[2.760292,5.100971,5.01599],[3.523964,8.005976,3.729163],[5.599763,5.71547,2.724259],[3.063932,6.566144,4.529981],[5.720968,4.254584,2.830852],[6.374393,4.78559,1.591691],[.672728,-3.688016,5.737804],[1.26256,-3.787691,5.417779],[1.732553,-3.952767,5.000579],[1.043625,-1.464973,5.662455],[2.321234,-4.329069,4.258156],[2.056846,-4.477671,4.520883],[2.153084,-4.276322,4.038093],[.946874,-1.035249,6.512274],[1.469132,-4.036351,4.604908],[1.02434,-3.989851,4.926693],[.533422,-3.993222,5.138202],[.76972,-6.095394,4.985883],[.699606,-5.29185,5.448304],[.669687,-4.94977,5.509612],[.630947,-4.695101,5.449371],[.583218,-4.517982,5.339869],[1.53717,-4.423206,4.74547],[1.6156,-4.475942,4.813632],[1.729053,-4.61868,4.854463],[1.838624,-4.828746,4.823737],[2.36825,-3.106237,4.868096],[7.542244,-1.049282,-2.431321],[1.826614,-4.399531,4.399021],[1.929558,-4.411831,4.497052],[.597442,-2.013686,5.866456],[1.405627,-1.714196,5.241087],[.662449,-1.819321,5.863759],[2.34234,.572222,4.294303],[3.327324,.104863,4.11386],[1.726175,-.919165,5.273355],[5.133204,7.485602,2.660442],[4.538641,6.319907,3.683424],[3.986562,5.109487,4.466315],[2.169681,-5.440433,4.455874],[1.395634,5.011963,5.316032],[1.6195,6.599217,4.921106],[1.891399,8.236377,4.274997],[4.195832,2.235205,3.375099],[5.733342,1.411738,2.431726],[1.859887,2.355757,3.843181],[4.988612,3.074654,3.083858],[1.303263,1.416453,4.831091],[1.305757,-.672779,6.415959],[6.46517,.937119,1.689873],[5.258659,.945811,2.974312],[4.432338,.722096,3.522615],[3.300681,.861641,3.872784],[2.430178,1.131492,4.039035],[1.820731,1.467954,4.224124],[.563221,2.307693,5.566789],[6.338145,-.529279,1.881175],[5.587698,3.208071,2.687839],[.242624,-1.462857,7.071491],[1.611251,.339326,4.895421],[7.743095,2.364999,-2.005167],[1.391142,1.851048,4.448999],[1.785794,-.978284,4.85047],[4.670959,2.664461,3.084075],[1.33397,-.283761,6.097047],[7.270895,-2.890917,-2.252455],[1.856432,2.585245,3.757904],[.923388,.073076,6.671944],[5.000589,-6.135128,1.892523],[5.085276,-7.17859,.714711],[7.159291,-.81182,-.072044],[5.843051,-5.248023,.924091],[6.847258,3.662916,.724695],[2.412942,-8.258853,4.119213],[.179909,-1.689864,6.573301],[2.103655,-.163946,4.566119],[6.407571,2.236021,1.560843],[3.670075,2.360153,3.63523],[3.177186,2.294265,3.775704],[2.196121,-4.598322,4.479786],[6.234883,-1.94443,1.663542],[1.292924,-9.29592,4.094063],[3.210651,-8.533278,2.802001],[4.068926,-7.993109,1.925119],[2.724032,2.315802,3.777151],[2.28846,2.398891,3.697603],[1.998311,2.496547,3.689148],[6.13004,3.399261,2.038516],[2.28846,2.886504,3.775031],[2.724032,2.96181,3.871767],[3.177186,2.964136,3.876973],[3.670075,2.927714,3.724325],[4.018389,2.857357,3.482983],[7.555811,4.106811,-.991917],[4.018389,2.483695,3.440898],[1.776217,-2.683946,5.213116],[1.222237,-1.182444,5.952465],[.731493,-2.536683,5.815343],[4.135272,-6.996638,2.67197],[3.311811,-7.660815,3.382963],[1.313701,-8.639995,4.702456],[5.940524,-6.223629,-.631468],[1.998311,2.743838,3.74403],[.901447,1.236992,5.754256],[2.308977,-8.974196,3.60907],[6.954154,-2.439843,-.131163],[1.098819,-4.458788,5.120727],[1.181124,-4.579996,5.189564],[1.255818,-4.787901,5.237051],[1.325085,-5.106507,5.20501],[1.546388,-5.819392,4.757893],[1.953754,-4.183892,4.431713],[2.117802,-4.137093,4.555096],[2.285339,-4.051196,4.582438],[2.85016,-3.66572,4.484994],[5.278538,-2.238942,2.861224],[.946709,1.907628,5.196779],[1.314173,3.104912,4.231404],[1.78,2.86,3.881555],[1.84511,-4.09888,4.247264],[5.436187,-4.030482,2.109852],[.766444,3.182131,4.861453],[1.938616,-6.61441,4.521085],[.516573,1.583572,6.148363],[1.246815,.230297,5.681036],[.997827,-6.930921,4.979576],[3.288807,-5.382514,3.795752],[2.311631,-1.566237,4.590085],[2.68025,-6.111567,4.096152],[3.832928,-1.537326,4.137731],[2.96186,-2.274215,4.440943],[4.386901,-2.683286,3.643886],[1.217295,-7.834465,4.969286],[1.542374,-.136843,5.201008],[3.878377,-6.041764,3.311079],[3.084037,-6.809842,3.814195],[3.747321,-4.503545,3.726453],[6.094129,-3.205991,1.473482],[4.588995,-4.728726,2.983221],[6.583231,-3.941269,.070268],[3.49258,-3.19582,4.130198],[1.255543,.802341,5.307551],[1.126122,-.933602,6.538785],[1.443109,-1.142774,5.905127],[.923043,-.529042,7.003423],[1.755386,3.529117,4.327696],[2.632589,3.713828,4.364629],[3.388062,3.721976,4.309028],[4.075766,3.675413,4.076063],[4.62291,3.474691,3.646321],[5.171755,2.535753,2.670867],[7.297331,.763172,-.048769],[4.706828,1.651,3.109532],[4.071712,1.476821,3.476944],[3.269817,1.470659,3.731945],[2.527572,1.617311,3.865444],[1.970894,1.858505,3.961782],[1.579543,2.097941,4.084996],[7.664182,.673132,-2.435867],[1.397041,-1.340139,5.630378],[.884838,.65874,6.233232],[.767097,-.968035,7.077932],[.460213,-1.334106,6.787447],[.748618,-1.067994,6.798303],[1.236408,-1.585568,5.48049],[.387306,-1.40999,6.957705],[.319925,-1.607931,6.508676],[1.639633,2.556298,3.863736],[1.255645,2.467144,4.2038],[1.031362,2.382663,4.615849],[4.253081,2.772296,3.315305],[4.53,2.91,3.339685]],OE=[[.499977,.347466],[.500026,.452513],[.499974,.397628],[.482113,.528021],[.500151,.472844],[.49991,.501747],[.499523,.598938],[.289712,.619236],[.499955,.687602],[.499987,.730081],[.500023,.89295],[.500023,.333766],[.500016,.320776],[.500023,.307652],[.499977,.304722],[.499977,.294066],[.499977,.280615],[.499977,.262981],[.499968,.218629],[.499816,.437019],[.473773,.42609],[.104907,.745859],[.36593,.590424],[.338758,.586975],[.31112,.59054],[.274658,.610869],[.393362,.596294],[.345234,.655989],[.370094,.653924],[.319322,.652735],[.297903,.646409],[.247792,.58919],[.396889,.157245],[.280098,.6244],[.10631,.600044],[.209925,.608647],[.355808,.465594],[.471751,.349596],[.474155,.319808],[.439785,.342771],[.414617,.333459],[.450374,.319139],[.428771,.317309],[.374971,.272195],[.486717,.452371],[.485301,.472605],[.257765,.68551],[.401223,.544828],[.429819,.451385],[.421352,.466259],[.276896,.467943],[.48337,.500413],[.337212,.717117],[.296392,.706757],[.169295,.806186],[.44758,.69739],[.39239,.646112],[.35449,.303216],[.067305,.269895],[.442739,.427174],[.457098,.415208],[.381974,.305289],[.392389,.305797],[.277076,.728068],[.422552,.436767],[.385919,.718636],[.383103,.74416],[.331431,.880286],[.229924,.767997],[.364501,.810886],[.229622,.700459],[.173287,.721252],[.472879,.333802],[.446828,.331473],[.422762,.32611],[.445308,.419934],[.388103,.306039],[.403039,.29346],[.403629,.306047],[.460042,.442861],[.431158,.307634],[.452182,.307634],[.475387,.307634],[.465828,.22081],[.472329,.263774],[.473087,.282143],[.473122,.295374],[.473033,.304722],[.427942,.304722],[.426479,.29646],[.423162,.288154],[.418309,.279937],[.390095,.360427],[.013954,.439966],[.499914,.419853],[.4132,.3046],[.409626,.298177],[.46808,.398465],[.422729,.414015],[.46308,.406216],[.37212,.526586],[.334562,.503927],[.411671,.453035],[.242176,.852324],[.290777,.798554],[.327338,.743473],[.39951,.251079],[.441728,.738324],[.429765,.812166],[.412198,.891099],[.288955,.601048],[.218937,.564589],[.412782,.60103],[.257135,.64456],[.427685,.562039],[.44834,.463064],[.17856,.542446],[.247308,.542806],[.286267,.532325],[.332828,.539288],[.368756,.552793],[.398964,.567345],[.47641,.594194],[.189241,.476076],[.228962,.651049],[.490726,.437599],[.40467,.514867],[.019469,.598436],[.426243,.579569],[.396993,.451203],[.26647,.623023],[.439121,.481042],[.032314,.355643],[.419054,.612845],[.462783,.494253],[.238979,.220255],[.198221,.168062],[.10755,.459245],[.18361,.259743],[.13441,.666317],[.385764,.116846],[.490967,.420622],[.382385,.491427],[.174399,.602329],[.318785,.603765],[.343364,.599403],[.3961,.289783],[.187885,.411462],[.430987,.055935],[.318993,.101715],[.266248,.130299],[.500023,.809424],[.499977,.045547],[.36617,.601178],[.393207,.604463],[.410373,.60892],[.194993,.657898],[.388665,.637716],[.365962,.644029],[.343364,.644643],[.318785,.64166],[.301415,.636844],[.058133,.680924],[.301415,.612551],[.499988,.381566],[.415838,.375804],[.445682,.433923],[.465844,.379359],[.499923,.648476],[.288719,.180054],[.335279,.14718],[.440512,.097581],[.128294,.208059],[.408772,.626106],[.455607,.548199],[.499877,.09101],[.375437,.075808],[.11421,.384978],[.448662,.304722],[.44802,.295368],[.447112,.284192],[.444832,.269206],[.430012,.233191],[.406787,.314327],[.400738,.318931],[.3924,.322297],[.367856,.336081],[.247923,.398667],[.45277,.57915],[.436392,.640113],[.416164,.631286],[.413386,.307634],[.228018,.316428],[.468268,.647329],[.411362,.195673],[.499989,.530175],[.479154,.557346],[.499974,.560363],[.432112,.506411],[.499886,.133083],[.499913,.178271],[.456549,.180799],[.344549,.254561],[.378909,.42599],[.374293,.219815],[.319688,.429262],[.357155,.39573],[.295284,.378419],[.44775,.137523],[.410986,.491277],[.313951,.224692],[.354128,.187447],[.324548,.296007],[.189096,.3537],[.279777,.285342],[.133823,.317299],[.336768,.355267],[.429884,.533478],[.455528,.451377],[.437114,.441104],[.467288,.470075],[.414712,.66478],[.377046,.677222],[.344108,.679849],[.312876,.677668],[.283526,.66681],[.241246,.617214],[.102986,.531237],[.267612,.57544],[.297879,.566824],[.333434,.566122],[.366427,.573884],[.396012,.583304],[.420121,.589772],[.007561,.519223],[.432949,.430482],[.458639,.520911],[.473466,.454256],[.476088,.43617],[.468472,.444943],[.433991,.417638],[.483518,.437016],[.482483,.422151],[.42645,.610201],[.438999,.603505],[.450067,.599566],[.289712,.631747],[.27667,.636627],[.517862,.528052],[.710288,.619236],[.526227,.42609],[.895093,.745859],[.63407,.590424],[.661242,.586975],[.68888,.59054],[.725342,.610869],[.60663,.596295],[.654766,.655989],[.629906,.653924],[.680678,.652735],[.702097,.646409],[.752212,.589195],[.602918,.157137],[.719902,.6244],[.893693,.60004],[.790082,.608646],[.643998,.465512],[.528249,.349596],[.52585,.319809],[.560215,.342771],[.585384,.333459],[.549626,.319139],[.571228,.317308],[.624852,.271901],[.51305,.452718],[.515097,.472748],[.742247,.685493],[.598631,.545021],[.570338,.451425],[.578632,.466377],[.723087,.467946],[.516446,.500361],[.662801,.717082],[.703624,.706729],[.830705,.806186],[.552386,.697432],[.60761,.646112],[.645429,.303293],[.932695,.269895],[.557261,.427174],[.542902,.415208],[.618026,.305289],[.607591,.305797],[.722943,.728037],[.577414,.436833],[.614083,.718613],[.616907,.744114],[.668509,.880086],[.770092,.767979],[.635536,.810751],[.770391,.700444],[.826722,.721245],[.527121,.333802],[.553172,.331473],[.577238,.32611],[.554692,.419934],[.611897,.306039],[.596961,.29346],[.596371,.306047],[.539958,.442861],[.568842,.307634],[.547818,.307634],[.524613,.307634],[.53409,.220859],[.527671,.263774],[.526913,.282143],[.526878,.295374],[.526967,.304722],[.572058,.304722],[.573521,.29646],[.576838,.288154],[.581691,.279937],[.609945,.36009],[.986046,.439966],[.5868,.3046],[.590372,.298177],[.531915,.398463],[.577268,.414065],[.536915,.406214],[.627543,.526648],[.665586,.504049],[.588354,.453138],[.757824,.852324],[.70925,.798492],[.672684,.743419],[.600409,.250995],[.558266,.738328],[.570304,.812129],[.588166,.890956],[.711045,.601048],[.78107,.564595],[.587247,.601068],[.74287,.644554],[.572156,.562348],[.551868,.46343],[.821442,.542444],[.752702,.542818],[.713757,.532373],[.667113,.539327],[.631101,.552846],[.600862,.567527],[.523481,.594373],[.810748,.476074],[.771046,.651041],[.509127,.437282],[.595293,.514976],[.980531,.598436],[.5735,.58],[.602995,.451312],[.73353,.623023],[.560611,.480983],[.967686,.355643],[.580985,.61284],[.537728,.494615],[.760966,.220247],[.801779,.168062],[.892441,.459239],[.816351,.25974],[.865595,.666313],[.614074,.116754],[.508953,.420562],[.617942,.491684],[.825608,.602325],[.681215,.603765],[.656636,.599403],[.6039,.289783],[.812086,.411461],[.568013,.055435],[.681008,.101715],[.733752,.130299],[.63383,.601178],[.606793,.604463],[.58966,.608938],[.805016,.657892],[.611335,.637716],[.634038,.644029],[.656636,.644643],[.681215,.64166],[.698585,.636844],[.941867,.680924],[.698585,.612551],[.584177,.375893],[.554318,.433923],[.534154,.37936],[.711218,.180025],[.66463,.147129],[.5591,.097368],[.871706,.208059],[.591234,.626106],[.544341,.548416],[.624563,.075808],[.88577,.384971],[.551338,.304722],[.55198,.295368],[.552888,.284192],[.555168,.269206],[.569944,.232965],[.593203,.314324],[.599262,.318931],[.6076,.322297],[.631938,.3365],[.752033,.398685],[.547226,.579605],[.563544,.640172],[.583841,.631286],[.586614,.307634],[.771915,.316422],[.531597,.647517],[.588371,.195559],[.520797,.557435],[.567985,.506521],[.543283,.180745],[.655317,.254485],[.621009,.425982],[.62556,.219688],[.680198,.429281],[.642764,.395662],[.704663,.37847],[.552012,.137408],[.589072,.491363],[.685945,.224643],[.645735,.18736],[.675343,.296022],[.810858,.353695],[.720122,.285333],[.866152,.317295],[.663187,.355403],[.570082,.533674],[.544562,.451624],[.562759,.441215],[.531987,.46986],[.585271,.664823],[.622953,.677221],[.655896,.679837],[.687132,.677654],[.716482,.666799],[.758757,.617213],[.897013,.531231],[.732392,.575453],[.702114,.566837],[.666525,.566134],[.633505,.573912],[.603876,.583413],[.579658,.590055],[.99244,.519223],[.567192,.43058],[.541366,.521101],[.526564,.453882],[.523913,.43617],[.531529,.444943],[.566036,.417671],[.516311,.436946],[.517472,.422123],[.573595,.610193],[.560698,.604668],[.549756,.600249],[.710288,.631747],[.72333,.636627]],ww=[173,155,133,246,33,7,382,398,362,263,466,249,308,415,324,78,95,191,356,389,264,127,34,162,368,264,389,139,162,34,267,0,302,37,72,0,11,302,0,11,0,72,349,451,350,120,121,231,452,350,451,232,231,121,267,302,269,37,39,72,303,269,302,73,72,39,357,343,350,128,121,114,277,350,343,47,114,121,350,452,357,121,128,232,453,357,452,233,232,128,299,333,297,69,67,104,332,297,333,103,104,67,175,152,396,175,171,152,377,396,152,148,152,171,381,384,382,154,155,157,398,382,384,173,157,155,280,347,330,50,101,118,348,330,347,119,118,101,269,303,270,39,40,73,304,270,303,74,73,40,9,336,151,9,151,107,337,151,336,108,107,151,344,278,360,115,131,48,279,360,278,49,48,131,262,431,418,32,194,211,424,418,431,204,211,194,304,408,270,74,40,184,409,270,408,185,184,40,272,310,407,42,183,80,415,407,310,191,80,183,322,270,410,92,186,40,409,410,270,185,40,186,347,449,348,118,119,229,450,348,449,230,229,119,434,432,430,214,210,212,422,430,432,202,212,210,313,314,18,83,18,84,17,18,314,17,84,18,307,375,306,77,76,146,291,306,375,61,146,76,259,387,260,29,30,160,388,260,387,161,160,30,286,414,384,56,157,190,398,384,414,173,190,157,418,424,406,194,182,204,335,406,424,106,204,182,367,416,364,138,135,192,434,364,416,214,192,135,391,423,327,165,98,203,358,327,423,129,203,98,298,301,284,68,54,71,251,284,301,21,71,54,4,275,5,4,5,45,281,5,275,51,45,5,254,373,253,24,23,144,374,253,373,145,144,23,320,321,307,90,77,91,375,307,321,146,91,77,280,425,411,50,187,205,427,411,425,207,205,187,421,313,200,201,200,83,18,200,313,18,83,200,335,321,406,106,182,91,405,406,321,181,91,182,405,321,404,181,180,91,320,404,321,90,91,180,17,314,16,17,16,84,315,16,314,85,84,16,425,266,426,205,206,36,423,426,266,203,36,206,369,396,400,140,176,171,377,400,396,148,171,176,391,269,322,165,92,39,270,322,269,40,39,92,417,465,413,193,189,245,464,413,465,244,245,189,257,258,386,27,159,28,385,386,258,158,28,159,260,388,467,30,247,161,466,467,388,246,161,247,248,456,419,3,196,236,399,419,456,174,236,196,333,298,332,104,103,68,284,332,298,54,68,103,285,8,417,55,193,8,168,417,8,168,8,193,340,261,346,111,117,31,448,346,261,228,31,117,285,417,441,55,221,193,413,441,417,189,193,221,327,460,326,98,97,240,328,326,460,99,240,97,277,355,329,47,100,126,371,329,355,142,126,100,309,392,438,79,218,166,439,438,392,219,166,218,381,382,256,154,26,155,341,256,382,112,155,26,360,279,420,131,198,49,429,420,279,209,49,198,365,364,379,136,150,135,394,379,364,169,135,150,355,277,437,126,217,47,343,437,277,114,47,217,443,444,282,223,52,224,283,282,444,53,224,52,281,275,363,51,134,45,440,363,275,220,45,134,431,262,395,211,170,32,369,395,262,140,32,170,337,299,338,108,109,69,297,338,299,67,69,109,335,273,321,106,91,43,375,321,273,146,43,91,348,450,349,119,120,230,451,349,450,231,230,120,467,359,342,247,113,130,446,342,359,226,130,113,282,283,334,52,105,53,293,334,283,63,53,105,250,458,462,20,242,238,461,462,458,241,238,242,276,353,300,46,70,124,383,300,353,156,124,70,325,292,324,96,95,62,308,324,292,78,62,95,283,276,293,53,63,46,300,293,276,70,46,63,447,264,345,227,116,34,372,345,264,143,34,116,352,345,346,123,117,116,340,346,345,111,116,117,1,19,274,1,44,19,354,274,19,125,19,44,248,281,456,3,236,51,363,456,281,134,51,236,425,426,427,205,207,206,436,427,426,216,206,207,380,381,252,153,22,154,256,252,381,26,154,22,391,393,269,165,39,167,267,269,393,37,167,39,199,428,200,199,200,208,421,200,428,201,208,200,330,329,266,101,36,100,371,266,329,142,100,36,422,432,273,202,43,212,287,273,432,57,212,43,290,250,328,60,99,20,462,328,250,242,20,99,258,286,385,28,158,56,384,385,286,157,56,158,342,446,353,113,124,226,265,353,446,35,226,124,257,386,259,27,29,159,387,259,386,160,159,29,430,422,431,210,211,202,424,431,422,204,202,211,445,342,276,225,46,113,353,276,342,124,113,46,424,422,335,204,106,202,273,335,422,43,202,106,306,292,307,76,77,62,325,307,292,96,62,77,366,447,352,137,123,227,345,352,447,116,227,123,302,268,303,72,73,38,271,303,268,41,38,73,371,358,266,142,36,129,423,266,358,203,129,36,327,294,460,98,240,64,455,460,294,235,64,240,294,331,278,64,48,102,279,278,331,49,102,48,303,271,304,73,74,41,272,304,271,42,41,74,427,436,434,207,214,216,432,434,436,212,216,214,304,272,408,74,184,42,407,408,272,183,42,184,394,430,395,169,170,210,431,395,430,211,210,170,395,369,378,170,149,140,400,378,369,176,140,149,296,334,299,66,69,105,333,299,334,104,105,69,417,168,351,193,122,168,6,351,168,6,168,122,280,411,352,50,123,187,376,352,411,147,187,123,319,320,325,89,96,90,307,325,320,77,90,96,285,295,336,55,107,65,296,336,295,66,65,107,404,320,403,180,179,90,319,403,320,89,90,179,330,348,329,101,100,119,349,329,348,120,119,100,334,293,333,105,104,63,298,333,293,68,63,104,323,454,366,93,137,234,447,366,454,227,234,137,16,315,15,16,15,85,316,15,315,86,85,15,429,279,358,209,129,49,331,358,279,102,49,129,15,316,14,15,14,86,317,14,316,87,86,14,8,285,9,8,9,55,336,9,285,107,55,9,329,349,277,100,47,120,350,277,349,121,120,47,252,253,380,22,153,23,374,380,253,145,23,153,402,403,318,178,88,179,319,318,403,89,179,88,351,6,419,122,196,6,197,419,6,197,6,196,324,318,325,95,96,88,319,325,318,89,88,96,397,367,365,172,136,138,364,365,367,135,138,136,288,435,397,58,172,215,367,397,435,138,215,172,438,439,344,218,115,219,278,344,439,48,219,115,271,311,272,41,42,81,310,272,311,80,81,42,5,281,195,5,195,51,248,195,281,3,51,195,273,287,375,43,146,57,291,375,287,61,57,146,396,428,175,171,175,208,199,175,428,199,208,175,268,312,271,38,41,82,311,271,312,81,82,41,444,445,283,224,53,225,276,283,445,46,225,53,254,339,373,24,144,110,390,373,339,163,110,144,295,282,296,65,66,52,334,296,282,105,52,66,346,448,347,117,118,228,449,347,448,229,228,118,454,356,447,234,227,127,264,447,356,34,127,227,336,296,337,107,108,66,299,337,296,69,66,108,151,337,10,151,10,108,338,10,337,109,108,10,278,439,294,48,64,219,455,294,439,235,219,64,407,415,292,183,62,191,308,292,415,78,191,62,358,371,429,129,209,142,355,429,371,126,142,209,345,372,340,116,111,143,265,340,372,35,143,111,388,390,466,161,246,163,249,466,390,7,163,246,352,346,280,123,50,117,347,280,346,118,117,50,295,442,282,65,52,222,443,282,442,223,222,52,19,94,354,19,125,94,370,354,94,141,94,125,295,285,442,65,222,55,441,442,285,221,55,222,419,197,248,196,3,197,195,248,197,195,197,3,359,263,255,130,25,33,249,255,263,7,33,25,275,274,440,45,220,44,457,440,274,237,44,220,300,383,301,70,71,156,368,301,383,139,156,71,417,351,465,193,245,122,412,465,351,188,122,245,466,263,467,246,247,33,359,467,263,130,33,247,389,251,368,162,139,21,301,368,251,71,21,139,374,386,380,145,153,159,385,380,386,158,159,153,379,394,378,150,149,169,395,378,394,170,169,149,351,419,412,122,188,196,399,412,419,174,196,188,426,322,436,206,216,92,410,436,322,186,92,216,387,373,388,160,161,144,390,388,373,163,144,161,393,326,164,167,164,97,2,164,326,2,97,164,354,370,461,125,241,141,462,461,370,242,141,241,0,267,164,0,164,37,393,164,267,167,37,164,11,12,302,11,72,12,268,302,12,38,12,72,386,374,387,159,160,145,373,387,374,144,145,160,12,13,268,12,38,13,312,268,13,82,13,38,293,300,298,63,68,70,301,298,300,71,70,68,340,265,261,111,31,35,446,261,265,226,35,31,380,385,381,153,154,158,384,381,385,157,158,154,280,330,425,50,205,101,266,425,330,36,101,205,423,391,426,203,206,165,322,426,391,92,165,206,429,355,420,209,198,126,437,420,355,217,126,198,391,327,393,165,167,98,326,393,327,97,98,167,457,438,440,237,220,218,344,440,438,115,218,220,382,362,341,155,112,133,463,341,362,243,133,112,457,461,459,237,239,241,458,459,461,238,241,239,434,430,364,214,135,210,394,364,430,169,210,135,414,463,398,190,173,243,362,398,463,133,243,173,262,428,369,32,140,208,396,369,428,171,208,140,457,274,461,237,241,44,354,461,274,125,44,241,316,403,317,86,87,179,402,317,403,178,179,87,315,404,316,85,86,180,403,316,404,179,180,86,314,405,315,84,85,181,404,315,405,180,181,85,313,406,314,83,84,182,405,314,406,181,182,84,418,406,421,194,201,182,313,421,406,83,182,201,366,401,323,137,93,177,361,323,401,132,177,93,408,407,306,184,76,183,292,306,407,62,183,76,408,306,409,184,185,76,291,409,306,61,76,185,410,409,287,186,57,185,291,287,409,61,185,57,436,410,432,216,212,186,287,432,410,57,186,212,434,416,427,214,207,192,411,427,416,187,192,207,264,368,372,34,143,139,383,372,368,156,139,143,457,459,438,237,218,239,309,438,459,79,239,218,352,376,366,123,137,147,401,366,376,177,147,137,4,1,275,4,45,1,274,275,1,44,1,45,428,262,421,208,201,32,418,421,262,194,32,201,327,358,294,98,64,129,331,294,358,102,129,64,367,435,416,138,192,215,433,416,435,213,215,192,455,439,289,235,59,219,392,289,439,166,219,59,328,462,326,99,97,242,370,326,462,141,242,97,326,370,2,97,2,141,94,2,370,94,141,2,460,455,305,240,75,235,289,305,455,59,235,75,448,339,449,228,229,110,254,449,339,24,110,229,261,446,255,31,25,226,359,255,446,130,226,25,449,254,450,229,230,24,253,450,254,23,24,230,450,253,451,230,231,23,252,451,253,22,23,231,451,252,452,231,232,22,256,452,252,26,22,232,256,341,452,26,232,112,453,452,341,233,112,232,413,464,414,189,190,244,463,414,464,243,244,190,441,413,286,221,56,189,414,286,413,190,189,56,441,286,442,221,222,56,258,442,286,28,56,222,442,258,443,222,223,28,257,443,258,27,28,223,444,443,259,224,29,223,257,259,443,27,223,29,259,260,444,29,224,30,445,444,260,225,30,224,260,467,445,30,225,247,342,445,467,113,247,225,250,309,458,20,238,79,459,458,309,239,79,238,290,305,392,60,166,75,289,392,305,59,75,166,460,305,328,240,99,75,290,328,305,60,75,99,376,433,401,147,177,213,435,401,433,215,213,177,250,290,309,20,79,60,392,309,290,166,60,79,411,416,376,187,147,192,433,376,416,213,192,147,341,463,453,112,233,243,464,453,463,244,243,233,453,464,357,233,128,244,465,357,464,245,244,128,412,343,465,188,245,114,357,465,343,128,114,245,437,343,399,217,174,114,412,399,343,188,114,174,363,440,360,134,131,220,344,360,440,115,220,131,456,420,399,236,174,198,437,399,420,217,198,174,456,363,420,236,198,134,360,420,363,131,134,198,361,401,288,132,58,177,435,288,401,215,177,58,353,265,383,124,156,35,372,383,265,143,35,156,255,249,339,25,110,7,390,339,249,163,7,110,261,255,448,31,228,25,339,448,255,110,25,228,14,317,13,14,13,87,312,13,317,82,87,13,317,402,312,87,82,178,311,312,402,81,178,82,402,318,311,178,81,88,310,311,318,80,88,81,318,324,310,88,80,95,415,310,324,191,95,80],Yt=[[4,.070909939706326],[6,.032100144773722],[10,.008446550928056],[33,.058724168688059],[54,.007667080033571],[67,.009078059345484],[117,.009791937656701],[119,.014565368182957],[121,.018591361120343],[127,.005197994410992],[129,.120625205338001],[132,.005560018587857],[133,.05328618362546],[136,.066890455782413],[143,.014816547743976],[147,.014262833632529],[198,.025462191551924],[205,.047252278774977],[263,.058724168688059],[284,.007667080033571],[297,.009078059345484],[346,.009791937656701],[348,.014565368182957],[350,.018591361120343],[356,.005197994410992],[358,.120625205338001],[361,.005560018587857],[362,.05328618362546],[365,.066890455782413],[372,.014816547743976],[376,.014262833632529],[420,.025462191551924],[425,.047252278774977]],xQ=[];for(let C=0;C<tC.length;C++)xQ[C]=0;Yt.forEach(([C,A])=>{xQ[C]=A});const vE=[];for(let C=0;C<xQ.length;C++)vE[C]=Math.sqrt(xQ[C]);const bQ=[33,263,61,291,199];Yt.forEach(([C,A])=>{bQ.includes(C)||bQ.push(C)});bQ.sort((C,A)=>C-A);let XE=0,PE=0;for(let C=0;C<tC.length;C++)tC[C][0]<tC[XE][0]&&(XE=C),tC[C][0]>tC[PE][0]&&(PE=C);class Gw{constructor(A){const I=A.height,g=A.width,Q=g,i=2*Math.atan(I/(2*Q)),D=2*1*Math.tan(.5*i),t=g*D/I;this.near=1,this.far=1e4,this.frameHeight=I,this.frameWidth=g,this.focalLength=Q,this.fov=i,this.left=-.5*t,this.right=.5*t,this.bottom=-.5*D,this.top=.5*D,this.focalLength=Q,this.center=[g/2,I/2]}estimate(A){const I=this._projectToScreen(A);let g=this._cloneLandmarks(I);this._changeHandedness(g);const Q=I.reduce((QA,K)=>QA+K[2],0)/I.length,i=this._estimateScale(g);g=this._cloneLandmarks(I),this._moveAndRescaleZ(Q,i,g),this._unprojectScreen(g),this._changeHandedness(g);const D=this._estimateScale(g);let t=this._cloneLandmarks(I);const a=i*D;this._moveAndRescaleZ(Q,a,t),this._unprojectScreen(t),this._changeHandedness(t);const n=this._solveWeightedOrthogonal(tC,t,vE),w=$I.matFromArray(4,4,$I.CV_64F,[n[0][0],n[0][1],n[0][2],n[0][3],n[1][0],n[1][1],n[1][2],n[1][3],n[2][0],n[2][1],n[2][2],n[2][3],n[3][0],n[3][1],n[3][2],n[3][3]]).inv(0).data64F,c=[[w[0],w[1],w[2],w[3]],[w[4],w[5],w[6],w[7]],[w[8],w[9],w[10],w[11]],[w[12],w[13],w[14],w[15]]],R=[];for(let QA=0;QA<t.length;QA++){R[QA]=[];for(let K=0;K<3;K++){R[QA][K]=c[K][3];for(let m=0;m<3;m++)R[QA][K]+=c[K][m]*t[QA][m]}}const M=[],k=[];bQ.forEach(QA=>{M.push(R[QA][0],R[QA][1],R[QA][2]),k.push(A[QA][0]*this.frameWidth,A[QA][1]*this.frameHeight)});const S=$I.matFromArray(M.length/3,3,$I.CV_64F,M),r=$I.matFromArray(k.length/2,2,$I.CV_64F,k),h=$I.matFromArray(3,3,$I.CV_64F,[this.focalLength,0,this.center[0],0,this.focalLength,this.center[1],0,0,1]),H=$I.Mat.zeros(4,1,$I.CV_64F),J=new $I.Mat(3,1,$I.CV_64F),u=new $I.Mat(3,1,$I.CV_64F),x=new $I.Mat(3,3,$I.CV_64F);$I.solvePnP(S,r,h,H,J,u,!1),$I.Rodrigues(J,x);const T=[x.data64F[0],x.data64F[1],x.data64F[2],u.data64F[0],-x.data64F[3],-x.data64F[4],-x.data64F[5],-u.data64F[1],-x.data64F[6],-x.data64F[7],-x.data64F[8],-u.data64F[2],0,0,0,1],V=R[PE][0]-R[XE][0];return{metricLandmarks:R,faceMatrix:T,faceScale:V}}_estimateScale(A){const I=this._solveWeightedOrthogonal(tC,A,vE);return Math.sqrt(I[0][0]*I[0][0]+I[0][1]*I[0][1]+I[0][2]*I[0][2])}_solveWeightedOrthogonal(A,I,g){const Q=[],i=[];for(let h=0;h<A.length;h++)Q.push([A[h][0]*g[h],A[h][1]*g[h],A[h][2]*g[h]]),i.push([I[h][0]*g[h],I[h][1]*g[h],I[h][2]*g[h]]);const D=g.reduce((h,H)=>h+H*H,0),t=[];for(let h=0;h<Q.length;h++)t[h]=[Q[h][0]*g[h],Q[h][1]*g[h],Q[h][2]*g[h]];const a=[0,0,0];for(let h=0;h<3;h++){for(let H=0;H<t.length;H++)a[h]+=t[H][h];a[h]/=D}const n=[];for(let h=0;h<t.length;h++){n[h]=[];for(let H=0;H<3;H++)n[h][H]=Q[h][H]-a[H]*g[h]}const w=[[0,0,0],[0,0,0],[0,0,0]];for(let h=0;h<3;h++)for(let H=0;H<3;H++)for(let J=0;J<i.length;J++)w[h][H]+=i[J][h]*n[J][H];const c=this._computeOptimalRotation(w),R=this._computeOptimalScale(n,Q,i,c),M=[[],[],[]];for(let h=0;h<3;h++)for(let H=0;H<3;H++)M[h][H]=R*c[h][H];const k=[];for(let h=0;h<Q.length;h++){k[h]=[];for(let H=0;H<3;H++){k[h][H]=i[h][H];for(let J=0;J<3;J++)k[h][H]-=M[H][J]*Q[h][J]}}const S=[];for(let h=0;h<k.length;h++){S[h]=[];for(let H=0;H<3;H++)S[h][H]=k[h][H]*g[h]}const r=[0,0,0];for(let h=0;h<3;h++){for(let H=0;H<S.length;H++)r[h]+=S[H][h];r[h]/=D}return[[M[0][0],M[0][1],M[0][2],r[0]],[M[1][0],M[1][1],M[1][2],r[1]],[M[2][0],M[2][1],M[2][2],r[2]],[0,0,0,1]]}_computeOptimalRotation(A){const I=$I.matFromArray(3,3,$I.CV_64F,[A[0][0],A[0][1],A[0][2],A[1][0],A[1][1],A[1][2],A[2][0],A[2][1],A[2][2]]),g=new $I.Mat(3,1,$I.CV_64F),Q=new $I.Mat(3,3,$I.CV_64F),i=new $I.Mat(3,3,$I.CV_64F);$I.SVDecomp(I,g,Q,i);const D=[[0,0,0],[0,0,0],[0,0,0]];for(let t=0;t<3;t++)for(let a=0;a<3;a++)for(let n=0;n<3;n++)D[t][a]+=Q.data64F[t*3+n]*i.data64F[n*3+a];return D}_computeOptimalScale(A,I,g,Q){const i=[];for(let a=0;a<A.length;a++){i[a]=[];for(let n=0;n<3;n++){i[a][n]=0;for(let w=0;w<3;w++)i[a][n]+=Q[n][w]*A[a][w]}}let D=0;for(let a=0;a<i.length;a++)for(let n=0;n<3;n++)D+=i[a][n]*g[a][n];let t=0;for(let a=0;a<A.length;a++)for(let n=0;n<3;n++)t+=A[a][n]*I[a][n];return D/t}_projectToScreen(A){const I=[],g=this.right-this.left,Q=this.top-this.bottom,i=this.left,D=this.bottom;for(let t=0;t<A.length;t++)I.push([A[t][0]*g+i,(1-A[t][1])*Q+D,A[t][2]*g]);return I}_cloneLandmarks(A){const I=[];for(let g=0;g<A.length;g++)I[g]=[A[g][0],A[g][1],A[g][2]];return I}_changeHandedness(A){for(let I=0;I<A.length;I++)A[I][2]*=-1}_moveAndRescaleZ(A,I,g){for(let Q=0;Q<g.length;Q++)g[Q][2]=(g[Q][2]-A+this.near)/I}_unprojectScreen(A){for(let I=0;I<A.length;I++)A[I][0]=A[I][0]*A[I][2]/this.near,A[I][1]=A[I][1]*A[I][2]/this.near}}const LQ=OE.length,rw=C=>{class A extends C.BufferGeometry{constructor(g={}){super(),this.positions=new Float32Array(LQ*3),this.uvs=new Float32Array(LQ*2),this.setAttribute("position",new C.BufferAttribute(this.positions,3)),this.setAttribute("uv",new C.BufferAttribute(this.uvs,2)),this.setUvs(),this.setIndex(ww)}setUvs(){for(let g=0;g<LQ;g++)this.uvs[g*2]=OE[g][0],this.uvs[g*2+1]=OE[g][1];this.getAttribute("uv").needsUpdate=!0}updatePositions(g){for(let Q=0;Q<LQ;Q++)this.positions[Q*3+0]=g[Q][0],this.positions[Q*3+1]=g[Q][1],this.positions[Q*3+2]=g[Q][2];this.attributes.position.needsUpdate=!0,this.computeVertexNormals()}}return new A},cw=.001,Fw=1;class Rw{constructor({onUpdate:A=null,filterMinCF:I=null,filterBeta:g=null}){this.customFaceGeometries=[],this.estimator=null,this.lastEstimateResult=null,this.filterMinCF=I===null?cw:I,this.filterBeta=g===null?Fw:g,this.onUpdate=A,this.landmarkFilters=[];for(let Q=0;Q<tC.length;Q++)this.landmarkFilters[Q]=new fE({minCutOff:this.filterMinCF,beta:this.filterBeta});this.faceMatrixFilter=new fE({minCutOff:this.filterMinCF,beta:this.filterBeta}),this.faceScaleFilter=new fE({minCutOff:this.filterMinCF,beta:this.filterBeta})}async setup(A){await hw(),this.faceMeshHelper=new ew(A)}onInputResized(A){this.estimator=new Gw(A)}getCameraParams(){return{fov:this.estimator.fov*180/Math.PI,aspect:this.estimator.frameWidth/this.estimator.frameHeight,near:this.estimator.near,far:this.estimator.far}}async dummyRun(A){await this.faceMeshHelper.detect(A)}processVideo(A){if(this.processingVideo)return;this.processingVideo=!0;const I=async()=>{const g=await this.faceMeshHelper.detect(A);if(g.multiFaceLandmarks.length===0){this.lastEstimateResult=null,this.onUpdate({hasFace:!1});for(let Q=0;Q<this.landmarkFilters.length;Q++)this.landmarkFilters[Q].reset();this.faceMatrixFilter.reset(),this.faceScaleFilter.reset()}else{const Q=g.multiFaceLandmarks[0].map(D=>[D.x,D.y,D.z]),i=this.estimator.estimate(Q);if(this.lastEstimateResult===null)this.lastEstimateResult=i;else{const D=this.lastEstimateResult.metricLandmarks;this.lastEstimateResult.faceMatrix,this.lastEstimateResult.faceScale;const t=[];for(let w=0;w<D.length;w++)t[w]=this.landmarkFilters[w].filter(Date.now(),i.metricLandmarks[w]);const a=this.faceMatrixFilter.filter(Date.now(),i.faceMatrix),n=this.faceScaleFilter.filter(Date.now(),[i.faceScale]);this.lastEstimateResult={metricLandmarks:t,faceMatrix:a,faceScale:n[0]}}this.onUpdate&&this.onUpdate({hasFace:!0,estimateResult:this.lastEstimateResult});for(let D=0;D<this.customFaceGeometries.length;D++)this.customFaceGeometries[D].updatePositions(i.metricLandmarks)}this.processingVideo&&window.requestAnimationFrame(I)};window.requestAnimationFrame(I)}stopProcessVideo(){this.processingVideo=!1}createThreeFaceGeometry(A){const I=rw(A);return this.customFaceGeometries.push(I),I}getLandmarkMatrix(A){const{metricLandmarks:I,faceMatrix:g,faceScale:Q}=this.lastEstimateResult,i=g,D=Q,t=[I[A][0],I[A][1],I[A][2]];return[i[0]*D,i[1]*D,i[2]*D,i[0]*t[0]+i[1]*t[1]+i[2]*t[2]+i[3],i[4]*D,i[5]*D,i[6]*D,i[4]*t[0]+i[5]*t[1]+i[6]*t[2]+i[7],i[8]*D,i[9]*D,i[10]*D,i[8]*t[0]+i[9]*t[1]+i[10]*t[2]+i[11],i[12]*D,i[13]*D,i[14]*D,i[12]*t[0]+i[13]*t[1]+i[14]*t[2]+i[15]]}}const Nw={BufferGeometry:kC,BufferAttribute:Pg};class Lt{constructor({container:A,uiLoading:I="yes",uiScanning:g="yes",uiError:Q="yes",filterMinCF:i=null,filterBeta:D=null,userDeviceId:t=null,environmentDeviceId:a=null,disableFaceMirror:n=!1}){this.container=A,this.ui=new sw({uiLoading:I,uiScanning:g,uiError:Q}),this.controller=new Rw({filterMinCF:i,filterBeta:D}),this.disableFaceMirror=n,this.scene=new To,this.cssScene=new To,this.renderer=new Ut({antialias:!0,alpha:!0}),this.cssRenderer=new Ew({antialias:!0}),this.renderer.outputEncoding=KC,this.renderer.setPixelRatio(window.devicePixelRatio),this.camera=new bg,this.userDeviceId=t,this.environmentDeviceId=a,this.anchors=[],this.faceMeshes=[],this.container.appendChild(this.renderer.domElement),this.container.appendChild(this.cssRenderer.domElement),this.shouldFaceUser=!0,window.addEventListener("resize",this._resize.bind(this))}async start(){this.ui.showLoading(),await this._startVideo(),await this._startAR(),this.ui.hideLoading()}stop(){this.video.srcObject.getTracks().forEach(function(A){A.stop()}),this.video.remove(),this.controller.stopProcessVideo()}switchCamera(){this.shouldFaceUser=!this.shouldFaceUser,this.stop(),this.start()}addFaceMesh(){const A=this.controller.createThreeFaceGeometry(Nw),I=new Hg(A,new Aw({color:16777215}));return I.visible=!1,I.matrixAutoUpdate=!1,this.faceMeshes.push(I),I}addAnchor(A){const I=new GB;I.matrixAutoUpdate=!1;const g={group:I,landmarkIndex:A,css:!1};return this.anchors.push(g),this.scene.add(I),g}addCSSAnchor(A){const I=new GB;I.matrixAutoUpdate=!1;const g={group:I,landmarkIndex:A,css:!0};return this.anchors.push(g),this.cssScene.add(I),g}_startVideo(){return new Promise((A,I)=>{if(this.video=document.createElement("video"),this.video.setAttribute("autoplay",""),this.video.setAttribute("muted",""),this.video.setAttribute("playsinline",""),this.video.style.position="absolute",this.video.style.top="0px",this.video.style.left="0px",this.video.style.zIndex="-2",this.container.appendChild(this.video),!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){this.ui.showCompatibility(),I();return}const g={audio:!1,video:{}};this.shouldFaceUser?this.userDeviceId?g.video.deviceId={exact:this.userDeviceId}:g.video.facingMode="user":this.environmentDeviceId?g.video.deviceId={exact:this.environmentDeviceId}:g.video.facingMode="environment",navigator.mediaDevices.getUserMedia(g).then(Q=>{this.video.addEventListener("loadedmetadata",()=>{this.video.setAttribute("width",this.video.videoWidth),this.video.setAttribute("height",this.video.videoHeight),A()}),this.video.srcObject=Q}).catch(Q=>{console.log("getUserMedia error",Q),I()})})}_startAR(){return new Promise(async(A,I)=>{const g=this.video;this.container,this.controller.onUpdate=({hasFace:i,estimateResult:D})=>{for(let t=0;t<this.anchors.length;t++)this.anchors[t].css?this.anchors[t].group.children.forEach(a=>{a.element.style.visibility=i?"visible":"hidden"}):this.anchors[t].group.visible=i;for(let t=0;t<this.faceMeshes.length;t++)this.faceMeshes[t].visible=i;if(i){const{metricLandmarks:t,faceMatrix:a,faceScale:n}=D;for(let w=0;w<this.anchors.length;w++){const c=this.anchors[w].landmarkIndex,R=this.controller.getLandmarkMatrix(c);if(this.anchors[w].css){const M=[.001*R[0],.001*R[1],R[2],R[3],.001*R[4],.001*R[5],R[6],R[7],.001*R[8],.001*R[9],R[10],R[11],.001*R[12],.001*R[13],R[14],R[15]];this.anchors[w].group.matrix.set(...M)}else this.anchors[w].group.matrix.set(...R)}for(let w=0;w<this.faceMeshes.length;w++)this.faceMeshes[w].matrix.set(...a)}},this._resize();const Q=this.shouldFaceUser&&!this.disableFaceMirror;await this.controller.setup(Q),await this.controller.dummyRun(g),this._resize(),this.controller.processVideo(g),A()})}_resize(){const{renderer:A,cssRenderer:I,camera:g,container:Q,video:i}=this;if(!i)return;{this.video.setAttribute("width",this.video.videoWidth),this.video.setAttribute("height",this.video.videoHeight),this.controller.onInputResized(i);const{fov:R,aspect:M,near:k,far:S}=this.controller.getCameraParams();this.camera.fov=R,this.camera.aspect=M,this.camera.near=k,this.camera.far=S,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.video.videoWidth,this.video.videoHeight),this.cssRenderer.setSize(this.video.videoWidth,this.video.videoHeight)}let D,t;const a=i.videoWidth/i.videoHeight,n=Q.clientWidth/Q.clientHeight;a>n?(t=Q.clientHeight,D=t*a):(D=Q.clientWidth,t=D/a),i.style.top=-(t-Q.clientHeight)/2+"px",i.style.left=-(D-Q.clientWidth)/2+"px",i.style.width=D+"px",i.style.height=t+"px",this.shouldFaceUser&&!this.disableFaceMirror?i.style.transform="scaleX(-1)":i.style.transform="scaleX(1)";const w=A.domElement,c=I.domElement;w.style.position="absolute",w.style.top=i.style.top,w.style.left=i.style.left,w.style.width=i.style.width,w.style.height=i.style.height,c.style.position="absolute",c.style.top=i.style.top,c.style.left=i.style.left,c.style.transformOrigin="top left",c.style.transform="scale("+D/parseFloat(c.style.width)+","+t/parseFloat(c.style.height)+")"}}window.MINDAR||(window.MINDAR={});window.MINDAR.FACE||(window.MINDAR.FACE={});window.MINDAR.FACE.MindARThree=Lt;const OQ=new Lt({container:document.querySelector("#container")});var vQ=new Kt,ft=vQ.load("/textures/rayavu.png");ft.colorSpace=og;var Ht=vQ.load("/textures/background.jpg");Ht.colorSpace=og;var ut=vQ.load("/textures/thalappavu.png");ut.colorSpace=og;var pt=vQ.load("/textures/kannadi.png");pt.colorSpace=og;const yw=new XC({color:255,colorWrite:!1}),{renderer:HE,scene:qt,camera:Mw}=OQ,Sw=OQ.addAnchor(1),Ci=OQ.addFaceMesh();new Kt().load("https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.2/examples/face-tracking/assets/canonical_face_model_uv_visualization.png");Ci.material=yw;Ci.material.needsUpdate=!0;qt.add(Ci);const mt=new UB(1,1.52),Uw=new UB(1,.756),Kw=new UB(1,.391),lw=new XC({map:ft,transparent:!0,depthWrite:!1}),PB=new Hg(mt,lw),kw=new XC({map:Ht}),XQ=new Hg(mt,kw),dw=new XC({map:ut,transparent:!0,depthWrite:!1}),PQ=new Hg(Uw,dw),Jw=new XC({map:pt,transparent:!0,depthWrite:!1}),Bi=new Hg(Kw,Jw);PB.scale.set(5,5,5);PB.position.set(.15,-2.9,0);XQ.scale.set(8,8,8);XQ.position.z=-1;PB.position.z=-.5;PQ.scale.set(1.25,1.25,1.25);PQ.position.set(.03,.62,-.04);Bi.position.y=.15;XQ.renderOrder=0;PB.renderOrder=1;PQ.renderOrder=5;Bi.renderOrder=4;Sw.group.add(XQ,PB,PQ,Bi);var jE=!1;const Yw=async()=>{await OQ.start(),HE.setAnimationLoop(()=>{HE.render(qt,Mw),jE&&(HE.preserveDrawingBuffer=!0,Lw(),jE=!1)})};Yw();stopButton.addEventListener("click",()=>{jE=!0});const Lw=()=>{const C=document.querySelector("#container").children[0],A=document.querySelector("#container").children[2];var I=parseInt(A.style.left,10),g=document.createElement("canvas");g.width=window.innerWidth,g.height=window.innerHeight;var Q=parseInt(A.style.width,10),i=parseInt(A.style.height,10),D=i/Q*2;console.log(D),console.log(-I),console.log(A.height,A.style.height),console.log(-I*(i/Q)),console.log(Q,i),console.log(i*D),console.log(window.innerWidth,window.innerHeight);var t=Math.max(window.innerWidth/C.width,window.innerHeight/C.height);console.log("RATIO "+t);var a=(g.width-C.width*t)/2,n=(g.height-C.height*t)/2,w=g.getContext("2d");w.clearRect(0,0,g.width,g.height),w.save(),w.scale(-1,1),w.translate(-g.width,0),w.drawImage(A,0,0,A.width,A.height,a,n,C.width*t,C.height*t),w.setTransform(1,0,0,1,0,0),w.restore(),w.drawImage(C,0,0,C.width,C.height,a,n,C.width*t,C.height*t),w.save();const c=g.toDataURL("img/jpeg");var R=document.createElement("a");R.href=c,R.download="My Total Royal Twist.jpeg",R.click()};