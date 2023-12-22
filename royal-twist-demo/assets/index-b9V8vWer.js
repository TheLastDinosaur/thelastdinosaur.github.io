(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))g(C);new MutationObserver(C=>{for(const Q of C)if(Q.type==="childList")for(const i of Q.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&g(i)}).observe(document,{childList:!0,subtree:!0});function I(C){const Q={};return C.integrity&&(Q.integrity=C.integrity),C.referrerPolicy&&(Q.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?Q.credentials="include":C.crossOrigin==="anonymous"?Q.credentials="omit":Q.credentials="same-origin",Q}function g(C){if(C.ep)return;C.ep=!0;const Q=I(C);fetch(C.href,Q)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Io="159",Ta=0,Ho=1,Va=2,Je=1,Wa=2,NC=3,KC=0,qg=1,oC=2,OC=0,VB=1,po=2,mo=3,qo=4,Oa=5,oB=100,Za=101,va=102,xo=103,bo=104,Xa=200,Pa=201,ja=202,za=203,ui=204,Hi=205,_a=206,$a=207,AD=208,ID=209,gD=210,CD=211,BD=212,QD=213,ED=214,iD=0,oD=1,tD=2,ME=3,eD=4,sD=5,aD=6,DD=7,Ye=0,nD=1,hD=2,ZC=0,rD=1,wD=2,cD=3,GD=4,RD=5,To="attached",FD="detached",fe=300,ZB=301,vB=302,pi=303,mi=304,LE=306,PC=1e3,Xg=1001,lE=1002,yg=1003,qi=1004,NE=1005,mg=1006,Le=1007,aB=1008,vC=1009,ND=1010,yD=1011,go=1012,ue=1013,WC=1014,MC=1015,UQ=1016,He=1017,pe=1018,eB=1020,MD=1021,Pg=1023,lD=1024,SD=1025,sB=1026,XB=1027,UD=1028,me=1029,KD=1030,qe=1031,xe=1033,PE=33776,jE=33777,zE=33778,_E=33779,Vo=35840,Wo=35841,Oo=35842,Zo=35843,be=36196,vo=37492,Xo=37496,Po=37808,jo=37809,zo=37810,_o=37811,$o=37812,At=37813,It=37814,gt=37815,Ct=37816,Bt=37817,Qt=37818,Et=37819,it=37820,ot=37821,$E=36492,tt=36494,et=36495,dD=36283,st=36284,at=36285,Dt=36286,kD=2200,Te=2201,JD=2202,KQ=2300,PB=2301,Ai=2302,xB=2400,bB=2401,SE=2402,Co=2500,YD=2501,fD=0,Ve=1,xi=2,We=3e3,XC=3001,LD=3200,uD=3201,Oe=0,HD=1,jg="",Eg="srgb",Kg="srgb-linear",Bo="display-p3",uE="display-p3-linear",UE="linear",ig="srgb",KE="rec709",dE="p3",yB=7680,nt=519,pD=512,mD=513,qD=514,Ze=515,xD=516,bD=517,TD=518,VD=519,bi=35044,ht="300 es",Ti=1035,lC=2e3,kE=2001;class rB{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const C=this._listeners[A];if(C!==void 0){const Q=C.indexOf(I);Q!==-1&&C.splice(Q,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const C=g.slice(0);for(let Q=0,i=C.length;Q<i;Q++)C[Q].call(this,A);A.target=null}}}const kg=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rt=1234567;const yQ=Math.PI/180,jB=180/Math.PI;function CC(){const B=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(kg[B&255]+kg[B>>8&255]+kg[B>>16&255]+kg[B>>24&255]+"-"+kg[A&255]+kg[A>>8&255]+"-"+kg[A>>16&15|64]+kg[A>>24&255]+"-"+kg[I&63|128]+kg[I>>8&255]+"-"+kg[I>>16&255]+kg[I>>24&255]+kg[g&255]+kg[g>>8&255]+kg[g>>16&255]+kg[g>>24&255]).toLowerCase()}function Yg(B,A,I){return Math.max(A,Math.min(I,B))}function Qo(B,A){return(B%A+A)%A}function WD(B,A,I,g,C){return g+(B-A)*(C-g)/(I-A)}function OD(B,A,I){return B!==A?(I-B)/(A-B):0}function MQ(B,A,I){return(1-I)*B+I*A}function ZD(B,A,I,g){return MQ(B,A,1-Math.exp(-I*g))}function vD(B,A=1){return A-Math.abs(Qo(B,A*2)-A)}function XD(B,A,I){return B<=A?0:B>=I?1:(B=(B-A)/(I-A),B*B*(3-2*B))}function PD(B,A,I){return B<=A?0:B>=I?1:(B=(B-A)/(I-A),B*B*B*(B*(B*6-15)+10))}function jD(B,A){return B+Math.floor(Math.random()*(A-B+1))}function zD(B,A){return B+Math.random()*(A-B)}function _D(B){return B*(.5-Math.random())}function $D(B){B!==void 0&&(rt=B);let A=rt+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function An(B){return B*yQ}function In(B){return B*jB}function Vi(B){return(B&B-1)===0&&B!==0}function gn(B){return Math.pow(2,Math.ceil(Math.log(B)/Math.LN2))}function JE(B){return Math.pow(2,Math.floor(Math.log(B)/Math.LN2))}function Cn(B,A,I,g,C){const Q=Math.cos,i=Math.sin,o=Q(I/2),e=i(I/2),s=Q((A+g)/2),D=i((A+g)/2),n=Q((A-g)/2),r=i((A-g)/2),F=Q((g-A)/2),l=i((g-A)/2);switch(C){case"XYX":B.set(o*D,e*n,e*r,o*s);break;case"YZY":B.set(e*r,o*D,e*n,o*s);break;case"ZXZ":B.set(e*n,e*r,o*D,o*s);break;case"XZX":B.set(o*D,e*l,e*F,o*s);break;case"YXY":B.set(e*F,o*D,e*l,o*s);break;case"ZYZ":B.set(e*l,e*F,o*D,o*s);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+C)}}function tC(B,A){switch(A.constructor){case Float32Array:return B;case Uint32Array:return B/4294967295;case Uint16Array:return B/65535;case Uint8Array:return B/255;case Int32Array:return Math.max(B/2147483647,-1);case Int16Array:return Math.max(B/32767,-1);case Int8Array:return Math.max(B/127,-1);default:throw new Error("Invalid component type.")}}function gg(B,A){switch(A.constructor){case Float32Array:return B;case Uint32Array:return Math.round(B*4294967295);case Uint16Array:return Math.round(B*65535);case Uint8Array:return Math.round(B*255);case Int32Array:return Math.round(B*2147483647);case Int16Array:return Math.round(B*32767);case Int8Array:return Math.round(B*127);default:throw new Error("Invalid component type.")}}const Bn={DEG2RAD:yQ,RAD2DEG:jB,generateUUID:CC,clamp:Yg,euclideanModulo:Qo,mapLinear:WD,inverseLerp:OD,lerp:MQ,damp:ZD,pingpong:vD,smoothstep:XD,smootherstep:PD,randInt:jD,randFloat:zD,randFloatSpread:_D,seededRandom:$D,degToRad:An,radToDeg:In,isPowerOfTwo:Vi,ceilPowerOfTwo:gn,floorPowerOfTwo:JE,setQuaternionFromProperEuler:Cn,normalize:gg,denormalize:tC};class VI{constructor(A=0,I=0){VI.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6],this.y=C[1]*I+C[4]*g+C[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(Yg(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),C=Math.sin(I),Q=this.x-A.x,i=this.y-A.y;return this.x=Q*g-i*C+A.x,this.y=Q*C+i*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class uI{constructor(A,I,g,C,Q,i,o,e,s){uI.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,I,g,C,Q,i,o,e,s)}set(A,I,g,C,Q,i,o,e,s){const D=this.elements;return D[0]=A,D[1]=C,D[2]=o,D[3]=I,D[4]=Q,D[5]=e,D[6]=g,D[7]=i,D[8]=s,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,Q=this.elements,i=g[0],o=g[3],e=g[6],s=g[1],D=g[4],n=g[7],r=g[2],F=g[5],l=g[8],S=C[0],G=C[3],w=C[6],Y=C[1],K=C[4],f=C[7],q=C[2],b=C[5],T=C[8];return Q[0]=i*S+o*Y+e*q,Q[3]=i*G+o*K+e*b,Q[6]=i*w+o*f+e*T,Q[1]=s*S+D*Y+n*q,Q[4]=s*G+D*K+n*b,Q[7]=s*w+D*f+n*T,Q[2]=r*S+F*Y+l*q,Q[5]=r*G+F*K+l*b,Q[8]=r*w+F*f+l*T,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],i=A[4],o=A[5],e=A[6],s=A[7],D=A[8];return I*i*D-I*o*s-g*Q*D+g*o*e+C*Q*s-C*i*e}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],i=A[4],o=A[5],e=A[6],s=A[7],D=A[8],n=D*i-o*s,r=o*e-D*Q,F=s*Q-i*e,l=I*n+g*r+C*F;if(l===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/l;return A[0]=n*S,A[1]=(C*s-D*g)*S,A[2]=(o*g-C*i)*S,A[3]=r*S,A[4]=(D*I-C*e)*S,A[5]=(C*Q-o*I)*S,A[6]=F*S,A[7]=(g*e-s*I)*S,A[8]=(i*I-g*Q)*S,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,C,Q,i,o){const e=Math.cos(Q),s=Math.sin(Q);return this.set(g*e,g*s,-g*(e*i+s*o)+i+A,-C*s,C*e,-C*(-s*i+e*o)+o+I,0,0,1),this}scale(A,I){return this.premultiply(Ii.makeScale(A,I)),this}rotate(A){return this.premultiply(Ii.makeRotation(-A)),this}translate(A,I){return this.premultiply(Ii.makeTranslation(A,I)),this}makeTranslation(A,I){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<9;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const Ii=new uI;function ve(B){for(let A=B.length-1;A>=0;--A)if(B[A]>=65535)return!0;return!1}function dQ(B){return document.createElementNS("http://www.w3.org/1999/xhtml",B)}function Qn(){const B=dQ("canvas");return B.style.display="block",B}const wt={};function lQ(B){B in wt||(wt[B]=!0,console.warn(B))}const ct=new uI().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gt=new uI().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vQ={[Kg]:{transfer:UE,primaries:KE,toReference:B=>B,fromReference:B=>B},[Eg]:{transfer:ig,primaries:KE,toReference:B=>B.convertSRGBToLinear(),fromReference:B=>B.convertLinearToSRGB()},[uE]:{transfer:UE,primaries:dE,toReference:B=>B.applyMatrix3(Gt),fromReference:B=>B.applyMatrix3(ct)},[Bo]:{transfer:ig,primaries:dE,toReference:B=>B.convertSRGBToLinear().applyMatrix3(Gt),fromReference:B=>B.applyMatrix3(ct).convertLinearToSRGB()}},En=new Set([Kg,uE]),_I={enabled:!0,_workingColorSpace:Kg,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(B){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!B},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(B){if(!En.has(B))throw new Error(`Unsupported working color space, "${B}".`);this._workingColorSpace=B},convert:function(B,A,I){if(this.enabled===!1||A===I||!A||!I)return B;const g=vQ[A].toReference,C=vQ[I].fromReference;return C(g(B))},fromWorkingColorSpace:function(B,A){return this.convert(B,this._workingColorSpace,A)},toWorkingColorSpace:function(B,A){return this.convert(B,A,this._workingColorSpace)},getPrimaries:function(B){return vQ[B].primaries},getTransfer:function(B){return B===jg?UE:vQ[B].transfer}};function WB(B){return B<.04045?B*.0773993808:Math.pow(B*.9478672986+.0521327014,2.4)}function gi(B){return B<.0031308?B*12.92:1.055*Math.pow(B,.41666)-.055}let MB;class Xe{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{MB===void 0&&(MB=dQ("canvas")),MB.width=A.width,MB.height=A.height;const g=MB.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=MB}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=dQ("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const C=g.getImageData(0,0,A.width,A.height),Q=C.data;for(let i=0;i<Q.length;i++)Q[i]=WB(Q[i]/255)*255;return g.putImageData(C,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(WB(I[g]/255)*255):I[g]=WB(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let on=0;class Pe{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:on++}),this.uuid=CC(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},C=this.data;if(C!==null){let Q;if(Array.isArray(C)){Q=[];for(let i=0,o=C.length;i<o;i++)C[i].isDataTexture?Q.push(Ci(C[i].image)):Q.push(Ci(C[i]))}else Q=Ci(C);g.url=Q}return I||(A.images[this.uuid]=g),g}}function Ci(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap?Xe.getDataURL(B):B.data?{data:Array.from(B.data),width:B.width,height:B.height,type:B.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tn=0;class Ug extends rB{constructor(A=Ug.DEFAULT_IMAGE,I=Ug.DEFAULT_MAPPING,g=Xg,C=Xg,Q=mg,i=aB,o=Pg,e=vC,s=Ug.DEFAULT_ANISOTROPY,D=jg){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tn++}),this.uuid=CC(),this.name="",this.source=new Pe(A),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=g,this.wrapT=C,this.magFilter=Q,this.minFilter=i,this.anisotropy=s,this.format=o,this.internalFormat=null,this.type=e,this.offset=new VI(0,0),this.repeat=new VI(1,1),this.center=new VI(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new uI,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof D=="string"?this.colorSpace=D:(lQ("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=D===XC?Eg:jg),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==fe)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case PC:A.x=A.x-Math.floor(A.x);break;case Xg:A.x=A.x<0?0:1;break;case lE:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case PC:A.y=A.y-Math.floor(A.y);break;case Xg:A.y=A.y<0?0:1;break;case lE:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return lQ("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Eg?XC:We}set encoding(A){lQ("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=A===XC?Eg:jg}}Ug.DEFAULT_IMAGE=null;Ug.DEFAULT_MAPPING=fe;Ug.DEFAULT_ANISOTROPY=1;class Bg{constructor(A=0,I=0,g=0,C=1){Bg.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=C}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,C){return this.x=A,this.y=I,this.z=g,this.w=C,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,Q=this.w,i=A.elements;return this.x=i[0]*I+i[4]*g+i[8]*C+i[12]*Q,this.y=i[1]*I+i[5]*g+i[9]*C+i[13]*Q,this.z=i[2]*I+i[6]*g+i[10]*C+i[14]*Q,this.w=i[3]*I+i[7]*g+i[11]*C+i[15]*Q,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,C,Q;const e=A.elements,s=e[0],D=e[4],n=e[8],r=e[1],F=e[5],l=e[9],S=e[2],G=e[6],w=e[10];if(Math.abs(D-r)<.01&&Math.abs(n-S)<.01&&Math.abs(l-G)<.01){if(Math.abs(D+r)<.1&&Math.abs(n+S)<.1&&Math.abs(l+G)<.1&&Math.abs(s+F+w-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const K=(s+1)/2,f=(F+1)/2,q=(w+1)/2,b=(D+r)/4,T=(n+S)/4,BA=(l+G)/4;return K>f&&K>q?K<.01?(g=0,C=.707106781,Q=.707106781):(g=Math.sqrt(K),C=b/g,Q=T/g):f>q?f<.01?(g=.707106781,C=0,Q=.707106781):(C=Math.sqrt(f),g=b/C,Q=BA/C):q<.01?(g=.707106781,C=.707106781,Q=0):(Q=Math.sqrt(q),g=T/Q,C=BA/Q),this.set(g,C,Q,I),this}let Y=Math.sqrt((G-l)*(G-l)+(n-S)*(n-S)+(r-D)*(r-D));return Math.abs(Y)<.001&&(Y=1),this.x=(G-l)/Y,this.y=(n-S)/Y,this.z=(r-D)/Y,this.w=Math.acos((s+F+w-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class en extends rB{constructor(A=1,I=1,g={}){super(),this.isRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new Bg(0,0,A,I),this.scissorTest=!1,this.viewport=new Bg(0,0,A,I);const C={width:A,height:I,depth:1};g.encoding!==void 0&&(lQ("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),g.colorSpace=g.encoding===XC?Eg:jg),g=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mg,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},g),this.texture=new Ug(C,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=g.generateMipmaps,this.texture.internalFormat=g.internalFormat,this.depthBuffer=g.depthBuffer,this.stencilBuffer=g.stencilBuffer,this.depthTexture=g.depthTexture,this.samples=g.samples}setSize(A,I,g=1){(this.width!==A||this.height!==I||this.depth!==g)&&(this.width=A,this.height=I,this.depth=g,this.texture.image.width=A,this.texture.image.height=I,this.texture.image.depth=g,this.dispose()),this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new Pe(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class DB extends en{constructor(A=1,I=1,g={}){super(A,I,g),this.isWebGLRenderTarget=!0}}class je extends Ug{constructor(A=null,I=1,g=1,C=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=yg,this.minFilter=yg,this.wrapR=Xg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sn extends Ug{constructor(A=null,I=1,g=1,C=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=yg,this.minFilter=yg,this.wrapR=Xg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _g{constructor(A=0,I=0,g=0,C=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=C}static slerpFlat(A,I,g,C,Q,i,o){let e=g[C+0],s=g[C+1],D=g[C+2],n=g[C+3];const r=Q[i+0],F=Q[i+1],l=Q[i+2],S=Q[i+3];if(o===0){A[I+0]=e,A[I+1]=s,A[I+2]=D,A[I+3]=n;return}if(o===1){A[I+0]=r,A[I+1]=F,A[I+2]=l,A[I+3]=S;return}if(n!==S||e!==r||s!==F||D!==l){let G=1-o;const w=e*r+s*F+D*l+n*S,Y=w>=0?1:-1,K=1-w*w;if(K>Number.EPSILON){const q=Math.sqrt(K),b=Math.atan2(q,w*Y);G=Math.sin(G*b)/q,o=Math.sin(o*b)/q}const f=o*Y;if(e=e*G+r*f,s=s*G+F*f,D=D*G+l*f,n=n*G+S*f,G===1-o){const q=1/Math.sqrt(e*e+s*s+D*D+n*n);e*=q,s*=q,D*=q,n*=q}}A[I]=e,A[I+1]=s,A[I+2]=D,A[I+3]=n}static multiplyQuaternionsFlat(A,I,g,C,Q,i){const o=g[C],e=g[C+1],s=g[C+2],D=g[C+3],n=Q[i],r=Q[i+1],F=Q[i+2],l=Q[i+3];return A[I]=o*l+D*n+e*F-s*r,A[I+1]=e*l+D*r+s*n-o*F,A[I+2]=s*l+D*F+o*r-e*n,A[I+3]=D*l-o*n-e*r-s*F,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,C){return this._x=A,this._y=I,this._z=g,this._w=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I){const g=A._x,C=A._y,Q=A._z,i=A._order,o=Math.cos,e=Math.sin,s=o(g/2),D=o(C/2),n=o(Q/2),r=e(g/2),F=e(C/2),l=e(Q/2);switch(i){case"XYZ":this._x=r*D*n+s*F*l,this._y=s*F*n-r*D*l,this._z=s*D*l+r*F*n,this._w=s*D*n-r*F*l;break;case"YXZ":this._x=r*D*n+s*F*l,this._y=s*F*n-r*D*l,this._z=s*D*l-r*F*n,this._w=s*D*n+r*F*l;break;case"ZXY":this._x=r*D*n-s*F*l,this._y=s*F*n+r*D*l,this._z=s*D*l+r*F*n,this._w=s*D*n-r*F*l;break;case"ZYX":this._x=r*D*n-s*F*l,this._y=s*F*n+r*D*l,this._z=s*D*l-r*F*n,this._w=s*D*n+r*F*l;break;case"YZX":this._x=r*D*n+s*F*l,this._y=s*F*n+r*D*l,this._z=s*D*l-r*F*n,this._w=s*D*n-r*F*l;break;case"XZY":this._x=r*D*n-s*F*l,this._y=s*F*n-r*D*l,this._z=s*D*l+r*F*n,this._w=s*D*n+r*F*l;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+i)}return I!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,C=Math.sin(g);return this._x=A.x*C,this._y=A.y*C,this._z=A.z*C,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],C=I[4],Q=I[8],i=I[1],o=I[5],e=I[9],s=I[2],D=I[6],n=I[10],r=g+o+n;if(r>0){const F=.5/Math.sqrt(r+1);this._w=.25/F,this._x=(D-e)*F,this._y=(Q-s)*F,this._z=(i-C)*F}else if(g>o&&g>n){const F=2*Math.sqrt(1+g-o-n);this._w=(D-e)/F,this._x=.25*F,this._y=(C+i)/F,this._z=(Q+s)/F}else if(o>n){const F=2*Math.sqrt(1+o-g-n);this._w=(Q-s)/F,this._x=(C+i)/F,this._y=.25*F,this._z=(e+D)/F}else{const F=2*Math.sqrt(1+n-g-o);this._w=(i-C)/F,this._x=(Q+s)/F,this._y=(e+D)/F,this._z=.25*F}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(Yg(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const C=Math.min(1,I/g);return this.slerp(A,C),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,C=A._y,Q=A._z,i=A._w,o=I._x,e=I._y,s=I._z,D=I._w;return this._x=g*D+i*o+C*s-Q*e,this._y=C*D+i*e+Q*o-g*s,this._z=Q*D+i*s+g*e-C*o,this._w=i*D-g*o-C*e-Q*s,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,C=this._y,Q=this._z,i=this._w;let o=i*A._w+g*A._x+C*A._y+Q*A._z;if(o<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,o=-o):this.copy(A),o>=1)return this._w=i,this._x=g,this._y=C,this._z=Q,this;const e=1-o*o;if(e<=Number.EPSILON){const F=1-I;return this._w=F*i+I*this._w,this._x=F*g+I*this._x,this._y=F*C+I*this._y,this._z=F*Q+I*this._z,this.normalize(),this._onChangeCallback(),this}const s=Math.sqrt(e),D=Math.atan2(s,o),n=Math.sin((1-I)*D)/s,r=Math.sin(I*D)/s;return this._w=i*n+this._w*r,this._x=g*n+this._x*r,this._y=C*n+this._y*r,this._z=Q*n+this._z*r,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=Math.random(),I=Math.sqrt(1-A),g=Math.sqrt(A),C=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random();return this.set(I*Math.cos(C),g*Math.sin(Q),g*Math.cos(Q),I*Math.sin(C))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(A=0,I=0,g=0){Z.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(Rt.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(Rt.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,C=this.z,Q=A.elements;return this.x=Q[0]*I+Q[3]*g+Q[6]*C,this.y=Q[1]*I+Q[4]*g+Q[7]*C,this.z=Q[2]*I+Q[5]*g+Q[8]*C,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,Q=A.elements,i=1/(Q[3]*I+Q[7]*g+Q[11]*C+Q[15]);return this.x=(Q[0]*I+Q[4]*g+Q[8]*C+Q[12])*i,this.y=(Q[1]*I+Q[5]*g+Q[9]*C+Q[13])*i,this.z=(Q[2]*I+Q[6]*g+Q[10]*C+Q[14])*i,this}applyQuaternion(A){const I=this.x,g=this.y,C=this.z,Q=A.x,i=A.y,o=A.z,e=A.w,s=2*(i*C-o*g),D=2*(o*I-Q*C),n=2*(Q*g-i*I);return this.x=I+e*s+i*n-o*D,this.y=g+e*D+o*s-Q*n,this.z=C+e*n+Q*D-i*s,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,C=this.z,Q=A.elements;return this.x=Q[0]*I+Q[4]*g+Q[8]*C,this.y=Q[1]*I+Q[5]*g+Q[9]*C,this.z=Q[2]*I+Q[6]*g+Q[10]*C,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,C=A.y,Q=A.z,i=I.x,o=I.y,e=I.z;return this.x=C*e-Q*o,this.y=Q*i-g*e,this.z=g*o-C*i,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return Bi.copy(this).projectOnVector(A),this.sub(Bi)}reflect(A){return this.sub(Bi.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(Yg(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,C=this.z-A.z;return I*I+g*g+C*C}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const C=Math.sin(I)*A;return this.x=C*Math.sin(g),this.y=Math.cos(I)*A,this.z=C*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),C=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=C,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,I=Math.random()*Math.PI*2,g=Math.sqrt(1-A**2);return this.x=g*Math.cos(I),this.y=g*Math.sin(I),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bi=new Z,Rt=new _g;class dC{constructor(A=new Z(1/0,1/0,1/0),I=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I+=3)this.expandByPoint($g.fromArray(A,I));return this}setFromBufferAttribute(A){this.makeEmpty();for(let I=0,g=A.count;I<g;I++)this.expandByPoint($g.fromBufferAttribute(A,I));return this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=$g.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0){const Q=g.getAttribute("position");if(I===!0&&Q!==void 0&&A.isInstancedMesh!==!0)for(let i=0,o=Q.count;i<o;i++)A.isMesh===!0?A.getVertexPosition(i,$g):$g.fromBufferAttribute(Q,i),$g.applyMatrix4(A.matrixWorld),this.expandByPoint($g);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),XQ.copy(A.boundingBox)):(g.boundingBox===null&&g.computeBoundingBox(),XQ.copy(g.boundingBox)),XQ.applyMatrix4(A.matrixWorld),this.union(XQ)}const C=A.children;for(let Q=0,i=C.length;Q<i;Q++)this.expandByObject(C[Q],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,$g),$g.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(nQ),PQ.subVectors(this.max,nQ),lB.subVectors(A.a,nQ),SB.subVectors(A.b,nQ),UB.subVectors(A.c,nQ),HC.subVectors(SB,lB),pC.subVectors(UB,SB),IB.subVectors(lB,UB);let I=[0,-HC.z,HC.y,0,-pC.z,pC.y,0,-IB.z,IB.y,HC.z,0,-HC.x,pC.z,0,-pC.x,IB.z,0,-IB.x,-HC.y,HC.x,0,-pC.y,pC.x,0,-IB.y,IB.x,0];return!Qi(I,lB,SB,UB,PQ)||(I=[1,0,0,0,1,0,0,0,1],!Qi(I,lB,SB,UB,PQ))?!1:(jQ.crossVectors(HC,pC),I=[jQ.x,jQ.y,jQ.z],Qi(I,lB,SB,UB,PQ))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,$g).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize($g).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(rC[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),rC[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),rC[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),rC[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),rC[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),rC[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),rC[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),rC[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(rC),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const rC=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],$g=new Z,XQ=new dC,lB=new Z,SB=new Z,UB=new Z,HC=new Z,pC=new Z,IB=new Z,nQ=new Z,PQ=new Z,jQ=new Z,gB=new Z;function Qi(B,A,I,g,C){for(let Q=0,i=B.length-3;Q<=i;Q+=3){gB.fromArray(B,Q);const o=C.x*Math.abs(gB.x)+C.y*Math.abs(gB.y)+C.z*Math.abs(gB.z),e=A.dot(gB),s=I.dot(gB),D=g.dot(gB);if(Math.max(-Math.max(e,s,D),Math.min(e,s,D))>o)return!1}return!0}const an=new dC,hQ=new Z,Ei=new Z;class sC{constructor(A=new Z,I=-1){this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):an.setFromPoints(A).getCenter(g);let C=0;for(let Q=0,i=A.length;Q<i;Q++)C=Math.max(C,g.distanceToSquared(A[Q]));return this.radius=Math.sqrt(C),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;hQ.subVectors(A,this.center);const I=hQ.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),C=(g-this.radius)*.5;this.center.addScaledVector(hQ,C/g),this.radius+=C}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(Ei.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(hQ.copy(A.center).add(Ei)),this.expandByPoint(hQ.copy(A.center).sub(Ei))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wC=new Z,ii=new Z,zQ=new Z,mC=new Z,oi=new Z,_Q=new Z,ti=new Z;class HE{constructor(A=new Z,I=new Z(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,wC)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=wC.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(wC.copy(this.origin).addScaledVector(this.direction,I),wC.distanceToSquared(A))}distanceSqToSegment(A,I,g,C){ii.copy(A).add(I).multiplyScalar(.5),zQ.copy(I).sub(A).normalize(),mC.copy(this.origin).sub(ii);const Q=A.distanceTo(I)*.5,i=-this.direction.dot(zQ),o=mC.dot(this.direction),e=-mC.dot(zQ),s=mC.lengthSq(),D=Math.abs(1-i*i);let n,r,F,l;if(D>0)if(n=i*e-o,r=i*o-e,l=Q*D,n>=0)if(r>=-l)if(r<=l){const S=1/D;n*=S,r*=S,F=n*(n+i*r+2*o)+r*(i*n+r+2*e)+s}else r=Q,n=Math.max(0,-(i*r+o)),F=-n*n+r*(r+2*e)+s;else r=-Q,n=Math.max(0,-(i*r+o)),F=-n*n+r*(r+2*e)+s;else r<=-l?(n=Math.max(0,-(-i*Q+o)),r=n>0?-Q:Math.min(Math.max(-Q,-e),Q),F=-n*n+r*(r+2*e)+s):r<=l?(n=0,r=Math.min(Math.max(-Q,-e),Q),F=r*(r+2*e)+s):(n=Math.max(0,-(i*Q+o)),r=n>0?Q:Math.min(Math.max(-Q,-e),Q),F=-n*n+r*(r+2*e)+s);else r=i>0?-Q:Q,n=Math.max(0,-(i*r+o)),F=-n*n+r*(r+2*e)+s;return g&&g.copy(this.origin).addScaledVector(this.direction,n),C&&C.copy(ii).addScaledVector(zQ,r),F}intersectSphere(A,I){wC.subVectors(A.center,this.origin);const g=wC.dot(this.direction),C=wC.dot(wC)-g*g,Q=A.radius*A.radius;if(C>Q)return null;const i=Math.sqrt(Q-C),o=g-i,e=g+i;return e<0?null:o<0?this.at(e,I):this.at(o,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,C,Q,i,o,e;const s=1/this.direction.x,D=1/this.direction.y,n=1/this.direction.z,r=this.origin;return s>=0?(g=(A.min.x-r.x)*s,C=(A.max.x-r.x)*s):(g=(A.max.x-r.x)*s,C=(A.min.x-r.x)*s),D>=0?(Q=(A.min.y-r.y)*D,i=(A.max.y-r.y)*D):(Q=(A.max.y-r.y)*D,i=(A.min.y-r.y)*D),g>i||Q>C||((Q>g||isNaN(g))&&(g=Q),(i<C||isNaN(C))&&(C=i),n>=0?(o=(A.min.z-r.z)*n,e=(A.max.z-r.z)*n):(o=(A.max.z-r.z)*n,e=(A.min.z-r.z)*n),g>e||o>C)||((o>g||g!==g)&&(g=o),(e<C||C!==C)&&(C=e),C<0)?null:this.at(g>=0?g:C,I)}intersectsBox(A){return this.intersectBox(A,wC)!==null}intersectTriangle(A,I,g,C,Q){oi.subVectors(I,A),_Q.subVectors(g,A),ti.crossVectors(oi,_Q);let i=this.direction.dot(ti),o;if(i>0){if(C)return null;o=1}else if(i<0)o=-1,i=-i;else return null;mC.subVectors(this.origin,A);const e=o*this.direction.dot(_Q.crossVectors(mC,_Q));if(e<0)return null;const s=o*this.direction.dot(oi.cross(mC));if(s<0||e+s>i)return null;const D=-o*mC.dot(ti);return D<0?null:this.at(D/i,Q)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kI{constructor(A,I,g,C,Q,i,o,e,s,D,n,r,F,l,S,G){kI.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,I,g,C,Q,i,o,e,s,D,n,r,F,l,S,G)}set(A,I,g,C,Q,i,o,e,s,D,n,r,F,l,S,G){const w=this.elements;return w[0]=A,w[4]=I,w[8]=g,w[12]=C,w[1]=Q,w[5]=i,w[9]=o,w[13]=e,w[2]=s,w[6]=D,w[10]=n,w[14]=r,w[3]=F,w[7]=l,w[11]=S,w[15]=G,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kI().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,C=1/KB.setFromMatrixColumn(A,0).length(),Q=1/KB.setFromMatrixColumn(A,1).length(),i=1/KB.setFromMatrixColumn(A,2).length();return I[0]=g[0]*C,I[1]=g[1]*C,I[2]=g[2]*C,I[3]=0,I[4]=g[4]*Q,I[5]=g[5]*Q,I[6]=g[6]*Q,I[7]=0,I[8]=g[8]*i,I[9]=g[9]*i,I[10]=g[10]*i,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,C=A.y,Q=A.z,i=Math.cos(g),o=Math.sin(g),e=Math.cos(C),s=Math.sin(C),D=Math.cos(Q),n=Math.sin(Q);if(A.order==="XYZ"){const r=i*D,F=i*n,l=o*D,S=o*n;I[0]=e*D,I[4]=-e*n,I[8]=s,I[1]=F+l*s,I[5]=r-S*s,I[9]=-o*e,I[2]=S-r*s,I[6]=l+F*s,I[10]=i*e}else if(A.order==="YXZ"){const r=e*D,F=e*n,l=s*D,S=s*n;I[0]=r+S*o,I[4]=l*o-F,I[8]=i*s,I[1]=i*n,I[5]=i*D,I[9]=-o,I[2]=F*o-l,I[6]=S+r*o,I[10]=i*e}else if(A.order==="ZXY"){const r=e*D,F=e*n,l=s*D,S=s*n;I[0]=r-S*o,I[4]=-i*n,I[8]=l+F*o,I[1]=F+l*o,I[5]=i*D,I[9]=S-r*o,I[2]=-i*s,I[6]=o,I[10]=i*e}else if(A.order==="ZYX"){const r=i*D,F=i*n,l=o*D,S=o*n;I[0]=e*D,I[4]=l*s-F,I[8]=r*s+S,I[1]=e*n,I[5]=S*s+r,I[9]=F*s-l,I[2]=-s,I[6]=o*e,I[10]=i*e}else if(A.order==="YZX"){const r=i*e,F=i*s,l=o*e,S=o*s;I[0]=e*D,I[4]=S-r*n,I[8]=l*n+F,I[1]=n,I[5]=i*D,I[9]=-o*D,I[2]=-s*D,I[6]=F*n+l,I[10]=r-S*n}else if(A.order==="XZY"){const r=i*e,F=i*s,l=o*e,S=o*s;I[0]=e*D,I[4]=-n,I[8]=s*D,I[1]=r*n+S,I[5]=i*D,I[9]=F*n-l,I[2]=l*n-F,I[6]=o*D,I[10]=S*n+r}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(Dn,A,nn)}lookAt(A,I,g){const C=this.elements;return Tg.subVectors(A,I),Tg.lengthSq()===0&&(Tg.z=1),Tg.normalize(),qC.crossVectors(g,Tg),qC.lengthSq()===0&&(Math.abs(g.z)===1?Tg.x+=1e-4:Tg.z+=1e-4,Tg.normalize(),qC.crossVectors(g,Tg)),qC.normalize(),$Q.crossVectors(Tg,qC),C[0]=qC.x,C[4]=$Q.x,C[8]=Tg.x,C[1]=qC.y,C[5]=$Q.y,C[9]=Tg.y,C[2]=qC.z,C[6]=$Q.z,C[10]=Tg.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,Q=this.elements,i=g[0],o=g[4],e=g[8],s=g[12],D=g[1],n=g[5],r=g[9],F=g[13],l=g[2],S=g[6],G=g[10],w=g[14],Y=g[3],K=g[7],f=g[11],q=g[15],b=C[0],T=C[4],BA=C[8],d=C[12],x=C[1],DA=C[5],hA=C[9],rA=C[13],O=C[2],EA=C[6],wA=C[10],eA=C[14],kA=C[3],FA=C[7],cA=C[11],JA=C[15];return Q[0]=i*b+o*x+e*O+s*kA,Q[4]=i*T+o*DA+e*EA+s*FA,Q[8]=i*BA+o*hA+e*wA+s*cA,Q[12]=i*d+o*rA+e*eA+s*JA,Q[1]=D*b+n*x+r*O+F*kA,Q[5]=D*T+n*DA+r*EA+F*FA,Q[9]=D*BA+n*hA+r*wA+F*cA,Q[13]=D*d+n*rA+r*eA+F*JA,Q[2]=l*b+S*x+G*O+w*kA,Q[6]=l*T+S*DA+G*EA+w*FA,Q[10]=l*BA+S*hA+G*wA+w*cA,Q[14]=l*d+S*rA+G*eA+w*JA,Q[3]=Y*b+K*x+f*O+q*kA,Q[7]=Y*T+K*DA+f*EA+q*FA,Q[11]=Y*BA+K*hA+f*wA+q*cA,Q[15]=Y*d+K*rA+f*eA+q*JA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],C=A[8],Q=A[12],i=A[1],o=A[5],e=A[9],s=A[13],D=A[2],n=A[6],r=A[10],F=A[14],l=A[3],S=A[7],G=A[11],w=A[15];return l*(+Q*e*n-C*s*n-Q*o*r+g*s*r+C*o*F-g*e*F)+S*(+I*e*F-I*s*r+Q*i*r-C*i*F+C*s*D-Q*e*D)+G*(+I*s*n-I*o*F-Q*i*n+g*i*F+Q*o*D-g*s*D)+w*(-C*o*D-I*e*n+I*o*r+C*i*n-g*i*r+g*e*D)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const C=this.elements;return A.isVector3?(C[12]=A.x,C[13]=A.y,C[14]=A.z):(C[12]=A,C[13]=I,C[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],i=A[4],o=A[5],e=A[6],s=A[7],D=A[8],n=A[9],r=A[10],F=A[11],l=A[12],S=A[13],G=A[14],w=A[15],Y=n*G*s-S*r*s+S*e*F-o*G*F-n*e*w+o*r*w,K=l*r*s-D*G*s-l*e*F+i*G*F+D*e*w-i*r*w,f=D*S*s-l*n*s+l*o*F-i*S*F-D*o*w+i*n*w,q=l*n*e-D*S*e-l*o*r+i*S*r+D*o*G-i*n*G,b=I*Y+g*K+C*f+Q*q;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return A[0]=Y*T,A[1]=(S*r*Q-n*G*Q-S*C*F+g*G*F+n*C*w-g*r*w)*T,A[2]=(o*G*Q-S*e*Q+S*C*s-g*G*s-o*C*w+g*e*w)*T,A[3]=(n*e*Q-o*r*Q-n*C*s+g*r*s+o*C*F-g*e*F)*T,A[4]=K*T,A[5]=(D*G*Q-l*r*Q+l*C*F-I*G*F-D*C*w+I*r*w)*T,A[6]=(l*e*Q-i*G*Q-l*C*s+I*G*s+i*C*w-I*e*w)*T,A[7]=(i*r*Q-D*e*Q+D*C*s-I*r*s-i*C*F+I*e*F)*T,A[8]=f*T,A[9]=(l*n*Q-D*S*Q-l*g*F+I*S*F+D*g*w-I*n*w)*T,A[10]=(i*S*Q-l*o*Q+l*g*s-I*S*s-i*g*w+I*o*w)*T,A[11]=(D*o*Q-i*n*Q-D*g*s+I*n*s+i*g*F-I*o*F)*T,A[12]=q*T,A[13]=(D*S*C-l*n*C+l*g*r-I*S*r-D*g*G+I*n*G)*T,A[14]=(l*o*C-i*S*C-l*g*e+I*S*e+i*g*G-I*o*G)*T,A[15]=(i*n*C-D*o*C+D*g*e-I*n*e-i*g*r+I*o*r)*T,this}scale(A){const I=this.elements,g=A.x,C=A.y,Q=A.z;return I[0]*=g,I[4]*=C,I[8]*=Q,I[1]*=g,I[5]*=C,I[9]*=Q,I[2]*=g,I[6]*=C,I[10]*=Q,I[3]*=g,I[7]*=C,I[11]*=Q,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],C=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,C))}makeTranslation(A,I,g){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),C=Math.sin(I),Q=1-g,i=A.x,o=A.y,e=A.z,s=Q*i,D=Q*o;return this.set(s*i+g,s*o-C*e,s*e+C*o,0,s*o+C*e,D*o+g,D*e-C*i,0,s*e-C*o,D*e+C*i,Q*e*e+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,C,Q,i){return this.set(1,g,Q,0,A,1,i,0,I,C,1,0,0,0,0,1),this}compose(A,I,g){const C=this.elements,Q=I._x,i=I._y,o=I._z,e=I._w,s=Q+Q,D=i+i,n=o+o,r=Q*s,F=Q*D,l=Q*n,S=i*D,G=i*n,w=o*n,Y=e*s,K=e*D,f=e*n,q=g.x,b=g.y,T=g.z;return C[0]=(1-(S+w))*q,C[1]=(F+f)*q,C[2]=(l-K)*q,C[3]=0,C[4]=(F-f)*b,C[5]=(1-(r+w))*b,C[6]=(G+Y)*b,C[7]=0,C[8]=(l+K)*T,C[9]=(G-Y)*T,C[10]=(1-(r+S))*T,C[11]=0,C[12]=A.x,C[13]=A.y,C[14]=A.z,C[15]=1,this}decompose(A,I,g){const C=this.elements;let Q=KB.set(C[0],C[1],C[2]).length();const i=KB.set(C[4],C[5],C[6]).length(),o=KB.set(C[8],C[9],C[10]).length();this.determinant()<0&&(Q=-Q),A.x=C[12],A.y=C[13],A.z=C[14],AC.copy(this);const s=1/Q,D=1/i,n=1/o;return AC.elements[0]*=s,AC.elements[1]*=s,AC.elements[2]*=s,AC.elements[4]*=D,AC.elements[5]*=D,AC.elements[6]*=D,AC.elements[8]*=n,AC.elements[9]*=n,AC.elements[10]*=n,I.setFromRotationMatrix(AC),g.x=Q,g.y=i,g.z=o,this}makePerspective(A,I,g,C,Q,i,o=lC){const e=this.elements,s=2*Q/(I-A),D=2*Q/(g-C),n=(I+A)/(I-A),r=(g+C)/(g-C);let F,l;if(o===lC)F=-(i+Q)/(i-Q),l=-2*i*Q/(i-Q);else if(o===kE)F=-i/(i-Q),l=-i*Q/(i-Q);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return e[0]=s,e[4]=0,e[8]=n,e[12]=0,e[1]=0,e[5]=D,e[9]=r,e[13]=0,e[2]=0,e[6]=0,e[10]=F,e[14]=l,e[3]=0,e[7]=0,e[11]=-1,e[15]=0,this}makeOrthographic(A,I,g,C,Q,i,o=lC){const e=this.elements,s=1/(I-A),D=1/(g-C),n=1/(i-Q),r=(I+A)*s,F=(g+C)*D;let l,S;if(o===lC)l=(i+Q)*n,S=-2*n;else if(o===kE)l=Q*n,S=-1*n;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return e[0]=2*s,e[4]=0,e[8]=0,e[12]=-r,e[1]=0,e[5]=2*D,e[9]=0,e[13]=-F,e[2]=0,e[6]=0,e[10]=S,e[14]=-l,e[3]=0,e[7]=0,e[11]=0,e[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<16;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const KB=new Z,AC=new kI,Dn=new Z(0,0,0),nn=new Z(1,1,1),qC=new Z,$Q=new Z,Tg=new Z,Ft=new kI,Nt=new _g;class pE{constructor(A=0,I=0,g=0,C=pE.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=C}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,C=this._order){return this._x=A,this._y=I,this._z=g,this._order=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const C=A.elements,Q=C[0],i=C[4],o=C[8],e=C[1],s=C[5],D=C[9],n=C[2],r=C[6],F=C[10];switch(I){case"XYZ":this._y=Math.asin(Yg(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-D,F),this._z=Math.atan2(-i,Q)):(this._x=Math.atan2(r,s),this._z=0);break;case"YXZ":this._x=Math.asin(-Yg(D,-1,1)),Math.abs(D)<.9999999?(this._y=Math.atan2(o,F),this._z=Math.atan2(e,s)):(this._y=Math.atan2(-n,Q),this._z=0);break;case"ZXY":this._x=Math.asin(Yg(r,-1,1)),Math.abs(r)<.9999999?(this._y=Math.atan2(-n,F),this._z=Math.atan2(-i,s)):(this._y=0,this._z=Math.atan2(e,Q));break;case"ZYX":this._y=Math.asin(-Yg(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(r,F),this._z=Math.atan2(e,Q)):(this._x=0,this._z=Math.atan2(-i,s));break;case"YZX":this._z=Math.asin(Yg(e,-1,1)),Math.abs(e)<.9999999?(this._x=Math.atan2(-D,s),this._y=Math.atan2(-n,Q)):(this._x=0,this._y=Math.atan2(o,F));break;case"XZY":this._z=Math.asin(-Yg(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(r,s),this._y=Math.atan2(o,Q)):(this._x=Math.atan2(-D,F),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return Ft.makeRotationFromQuaternion(A),this.setFromRotationMatrix(Ft,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return Nt.setFromEuler(this),this.setFromQuaternion(Nt,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pE.DEFAULT_ORDER="XYZ";class ze{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let hn=0;const yt=new Z,dB=new _g,cC=new kI,AE=new Z,rQ=new Z,rn=new Z,wn=new _g,Mt=new Z(1,0,0),lt=new Z(0,1,0),St=new Z(0,0,1),cn={type:"added"},Gn={type:"removed"};class Dg extends rB{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hn++}),this.uuid=CC(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dg.DEFAULT_UP.clone();const A=new Z,I=new pE,g=new _g,C=new Z(1,1,1);function Q(){g.setFromEuler(I,!1)}function i(){I.setFromQuaternion(g,void 0,!1)}I._onChange(Q),g._onChange(i),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:C},modelViewMatrix:{value:new kI},normalMatrix:{value:new uI}}),this.matrix=new kI,this.matrixWorld=new kI,this.matrixAutoUpdate=Dg.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dg.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ze,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return dB.setFromAxisAngle(A,I),this.quaternion.multiply(dB),this}rotateOnWorldAxis(A,I){return dB.setFromAxisAngle(A,I),this.quaternion.premultiply(dB),this}rotateX(A){return this.rotateOnAxis(Mt,A)}rotateY(A){return this.rotateOnAxis(lt,A)}rotateZ(A){return this.rotateOnAxis(St,A)}translateOnAxis(A,I){return yt.copy(A).applyQuaternion(this.quaternion),this.position.add(yt.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(Mt,A)}translateY(A){return this.translateOnAxis(lt,A)}translateZ(A){return this.translateOnAxis(St,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(cC.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?AE.copy(A):AE.set(A,I,g);const C=this.parent;this.updateWorldMatrix(!0,!1),rQ.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cC.lookAt(rQ,AE,this.up):cC.lookAt(AE,rQ,this.up),this.quaternion.setFromRotationMatrix(cC),C&&(cC.extractRotation(C.matrixWorld),dB.setFromRotationMatrix(cC),this.quaternion.premultiply(dB.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(cn)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(Gn)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),cC.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),cC.multiply(A.parent.matrixWorld)),A.applyMatrix4(cC),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,C=this.children.length;g<C;g++){const i=this.children[g].getObjectByProperty(A,I);if(i!==void 0)return i}}getObjectsByProperty(A,I,g=[]){this[A]===I&&g.push(this);const C=this.children;for(let Q=0,i=C.length;Q<i;Q++)C[Q].getObjectsByProperty(A,I,g);return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rQ,A,rn),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rQ,wn,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,C=I.length;g<C;g++){const Q=I[g];(Q.matrixWorldAutoUpdate===!0||A===!0)&&Q.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const C=this.children;for(let Q=0,i=C.length;Q<i;Q++){const o=C[Q];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const C={};C.uuid=this.uuid,C.type=this.type,this.name!==""&&(C.name=this.name),this.castShadow===!0&&(C.castShadow=!0),this.receiveShadow===!0&&(C.receiveShadow=!0),this.visible===!1&&(C.visible=!1),this.frustumCulled===!1&&(C.frustumCulled=!1),this.renderOrder!==0&&(C.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(C.userData=this.userData),C.layers=this.layers.mask,C.matrix=this.matrix.toArray(),C.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(C.matrixAutoUpdate=!1),this.isInstancedMesh&&(C.type="InstancedMesh",C.count=this.count,C.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(C.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(C.type="BatchedMesh",C.perObjectFrustumCulled=this.perObjectFrustumCulled,C.sortObjects=this.sortObjects,C.drawRanges=this._drawRanges,C.reservedRanges=this._reservedRanges,C.visibility=this._visibility,C.active=this._active,C.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),C.maxGeometryCount=this._maxGeometryCount,C.maxVertexCount=this._maxVertexCount,C.maxIndexCount=this._maxIndexCount,C.geometryInitialized=this._geometryInitialized,C.geometryCount=this._geometryCount,C.matricesTexture=this._matricesTexture.toJSON(A),this.boundingSphere!==null&&(C.boundingSphere={center:C.boundingSphere.center.toArray(),radius:C.boundingSphere.radius}),this.boundingBox!==null&&(C.boundingBox={min:C.boundingBox.min.toArray(),max:C.boundingBox.max.toArray()}));function Q(o,e){return o[e.uuid]===void 0&&(o[e.uuid]=e.toJSON(A)),e.uuid}if(this.isScene)this.background&&(this.background.isColor?C.background=this.background.toJSON():this.background.isTexture&&(C.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(C.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){C.geometry=Q(A.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const e=o.shapes;if(Array.isArray(e))for(let s=0,D=e.length;s<D;s++){const n=e[s];Q(A.shapes,n)}else Q(A.shapes,e)}}if(this.isSkinnedMesh&&(C.bindMode=this.bindMode,C.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(Q(A.skeletons,this.skeleton),C.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let e=0,s=this.material.length;e<s;e++)o.push(Q(A.materials,this.material[e]));C.material=o}else C.material=Q(A.materials,this.material);if(this.children.length>0){C.children=[];for(let o=0;o<this.children.length;o++)C.children.push(this.children[o].toJSON(A).object)}if(this.animations.length>0){C.animations=[];for(let o=0;o<this.animations.length;o++){const e=this.animations[o];C.animations.push(Q(A.animations,e))}}if(I){const o=i(A.geometries),e=i(A.materials),s=i(A.textures),D=i(A.images),n=i(A.shapes),r=i(A.skeletons),F=i(A.animations),l=i(A.nodes);o.length>0&&(g.geometries=o),e.length>0&&(g.materials=e),s.length>0&&(g.textures=s),D.length>0&&(g.images=D),n.length>0&&(g.shapes=n),r.length>0&&(g.skeletons=r),F.length>0&&(g.animations=F),l.length>0&&(g.nodes=l)}return g.object=C,g;function i(o){const e=[];for(const s in o){const D=o[s];delete D.metadata,e.push(D)}return e}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const C=A.children[g];this.add(C.clone())}return this}}Dg.DEFAULT_UP=new Z(0,1,0);Dg.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dg.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const IC=new Z,GC=new Z,ei=new Z,RC=new Z,kB=new Z,JB=new Z,Ut=new Z,si=new Z,ai=new Z,Di=new Z;let IE=!1;class gC{constructor(A=new Z,I=new Z,g=new Z){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,C){C.subVectors(g,I),IC.subVectors(A,I),C.cross(IC);const Q=C.lengthSq();return Q>0?C.multiplyScalar(1/Math.sqrt(Q)):C.set(0,0,0)}static getBarycoord(A,I,g,C,Q){IC.subVectors(C,I),GC.subVectors(g,I),ei.subVectors(A,I);const i=IC.dot(IC),o=IC.dot(GC),e=IC.dot(ei),s=GC.dot(GC),D=GC.dot(ei),n=i*s-o*o;if(n===0)return Q.set(-2,-1,-1);const r=1/n,F=(s*e-o*D)*r,l=(i*D-o*e)*r;return Q.set(1-F-l,l,F)}static containsPoint(A,I,g,C){return this.getBarycoord(A,I,g,C,RC),RC.x>=0&&RC.y>=0&&RC.x+RC.y<=1}static getUV(A,I,g,C,Q,i,o,e){return IE===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),IE=!0),this.getInterpolation(A,I,g,C,Q,i,o,e)}static getInterpolation(A,I,g,C,Q,i,o,e){return this.getBarycoord(A,I,g,C,RC),e.setScalar(0),e.addScaledVector(Q,RC.x),e.addScaledVector(i,RC.y),e.addScaledVector(o,RC.z),e}static isFrontFacing(A,I,g,C){return IC.subVectors(g,I),GC.subVectors(A,I),IC.cross(GC).dot(C)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,C){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[C]),this}setFromAttributeAndIndices(A,I,g,C){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,C),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return IC.subVectors(this.c,this.b),GC.subVectors(this.a,this.b),IC.cross(GC).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return gC.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return gC.getBarycoord(A,this.a,this.b,this.c,I)}getUV(A,I,g,C,Q){return IE===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),IE=!0),gC.getInterpolation(A,this.a,this.b,this.c,I,g,C,Q)}getInterpolation(A,I,g,C,Q){return gC.getInterpolation(A,this.a,this.b,this.c,I,g,C,Q)}containsPoint(A){return gC.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return gC.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,C=this.b,Q=this.c;let i,o;kB.subVectors(C,g),JB.subVectors(Q,g),si.subVectors(A,g);const e=kB.dot(si),s=JB.dot(si);if(e<=0&&s<=0)return I.copy(g);ai.subVectors(A,C);const D=kB.dot(ai),n=JB.dot(ai);if(D>=0&&n<=D)return I.copy(C);const r=e*n-D*s;if(r<=0&&e>=0&&D<=0)return i=e/(e-D),I.copy(g).addScaledVector(kB,i);Di.subVectors(A,Q);const F=kB.dot(Di),l=JB.dot(Di);if(l>=0&&F<=l)return I.copy(Q);const S=F*s-e*l;if(S<=0&&s>=0&&l<=0)return o=s/(s-l),I.copy(g).addScaledVector(JB,o);const G=D*l-F*n;if(G<=0&&n-D>=0&&F-l>=0)return Ut.subVectors(Q,C),o=(n-D)/(n-D+(F-l)),I.copy(C).addScaledVector(Ut,o);const w=1/(G+S+r);return i=S*w,o=r*w,I.copy(g).addScaledVector(kB,i).addScaledVector(JB,o)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}const _e={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xC={h:0,s:0,l:0},gE={h:0,s:0,l:0};function ni(B,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?B+(A-B)*6*I:I<1/2?A:I<2/3?B+(A-B)*6*(2/3-I):B}class yI{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,I,g)}set(A,I,g){if(I===void 0&&g===void 0){const C=A;C&&C.isColor?this.copy(C):typeof C=="number"?this.setHex(C):typeof C=="string"&&this.setStyle(C)}else this.setRGB(A,I,g);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=Eg){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,_I.toWorkingColorSpace(this,I),this}setRGB(A,I,g,C=_I.workingColorSpace){return this.r=A,this.g=I,this.b=g,_I.toWorkingColorSpace(this,C),this}setHSL(A,I,g,C=_I.workingColorSpace){if(A=Qo(A,1),I=Yg(I,0,1),g=Yg(g,0,1),I===0)this.r=this.g=this.b=g;else{const Q=g<=.5?g*(1+I):g+I-g*I,i=2*g-Q;this.r=ni(i,Q,A+1/3),this.g=ni(i,Q,A),this.b=ni(i,Q,A-1/3)}return _I.toWorkingColorSpace(this,C),this}setStyle(A,I=Eg){function g(Q){Q!==void 0&&parseFloat(Q)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let C;if(C=/^(\w+)\(([^\)]*)\)/.exec(A)){let Q;const i=C[1],o=C[2];switch(i){case"rgb":case"rgba":if(Q=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return g(Q[4]),this.setRGB(Math.min(255,parseInt(Q[1],10))/255,Math.min(255,parseInt(Q[2],10))/255,Math.min(255,parseInt(Q[3],10))/255,I);if(Q=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return g(Q[4]),this.setRGB(Math.min(100,parseInt(Q[1],10))/100,Math.min(100,parseInt(Q[2],10))/100,Math.min(100,parseInt(Q[3],10))/100,I);break;case"hsl":case"hsla":if(Q=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return g(Q[4]),this.setHSL(parseFloat(Q[1])/360,parseFloat(Q[2])/100,parseFloat(Q[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(C=/^\#([A-Fa-f\d]+)$/.exec(A)){const Q=C[1],i=Q.length;if(i===3)return this.setRGB(parseInt(Q.charAt(0),16)/15,parseInt(Q.charAt(1),16)/15,parseInt(Q.charAt(2),16)/15,I);if(i===6)return this.setHex(parseInt(Q,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=Eg){const g=_e[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=WB(A.r),this.g=WB(A.g),this.b=WB(A.b),this}copyLinearToSRGB(A){return this.r=gi(A.r),this.g=gi(A.g),this.b=gi(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=Eg){return _I.fromWorkingColorSpace(Jg.copy(this),A),Math.round(Yg(Jg.r*255,0,255))*65536+Math.round(Yg(Jg.g*255,0,255))*256+Math.round(Yg(Jg.b*255,0,255))}getHexString(A=Eg){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=_I.workingColorSpace){_I.fromWorkingColorSpace(Jg.copy(this),I);const g=Jg.r,C=Jg.g,Q=Jg.b,i=Math.max(g,C,Q),o=Math.min(g,C,Q);let e,s;const D=(o+i)/2;if(o===i)e=0,s=0;else{const n=i-o;switch(s=D<=.5?n/(i+o):n/(2-i-o),i){case g:e=(C-Q)/n+(C<Q?6:0);break;case C:e=(Q-g)/n+2;break;case Q:e=(g-C)/n+4;break}e/=6}return A.h=e,A.s=s,A.l=D,A}getRGB(A,I=_I.workingColorSpace){return _I.fromWorkingColorSpace(Jg.copy(this),I),A.r=Jg.r,A.g=Jg.g,A.b=Jg.b,A}getStyle(A=Eg){_I.fromWorkingColorSpace(Jg.copy(this),A);const I=Jg.r,g=Jg.g,C=Jg.b;return A!==Eg?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${C.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(C*255)})`}offsetHSL(A,I,g){return this.getHSL(xC),this.setHSL(xC.h+A,xC.s+I,xC.l+g)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(xC),A.getHSL(gE);const g=MQ(xC.h,gE.h,I),C=MQ(xC.s,gE.s,I),Q=MQ(xC.l,gE.l,I);return this.setHSL(g,C,Q),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,C=this.b,Q=A.elements;return this.r=Q[0]*I+Q[3]*g+Q[6]*C,this.g=Q[1]*I+Q[4]*g+Q[7]*C,this.b=Q[2]*I+Q[5]*g+Q[8]*C,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jg=new yI;yI.NAMES=_e;let Rn=0;class eC extends rB{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rn++}),this.uuid=CC(),this.name="",this.type="Material",this.blending=VB,this.side=KC,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ui,this.blendDst=Hi,this.blendEquation=oB,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yI(0,0,0),this.blendAlpha=0,this.depthFunc=ME,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nt,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yB,this.stencilZFail=yB,this.stencilZPass=yB,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}const C=this[I];if(C===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}C&&C.isColor?C.set(g):C&&C.isVector3&&g&&g.isVector3?C.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(g.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(g.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(g.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==VB&&(g.blending=this.blending),this.side!==KC&&(g.side=this.side),this.vertexColors===!0&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=!0),this.blendSrc!==ui&&(g.blendSrc=this.blendSrc),this.blendDst!==Hi&&(g.blendDst=this.blendDst),this.blendEquation!==oB&&(g.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(g.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(g.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(g.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(g.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(g.blendAlpha=this.blendAlpha),this.depthFunc!==ME&&(g.depthFunc=this.depthFunc),this.depthTest===!1&&(g.depthTest=this.depthTest),this.depthWrite===!1&&(g.depthWrite=this.depthWrite),this.colorWrite===!1&&(g.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(g.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nt&&(g.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(g.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(g.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yB&&(g.stencilFail=this.stencilFail),this.stencilZFail!==yB&&(g.stencilZFail=this.stencilZFail),this.stencilZPass!==yB&&(g.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(g.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaHash===!0&&(g.alphaHash=!0),this.alphaToCoverage===!0&&(g.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=!0),this.forceSinglePass===!0&&(g.forceSinglePass=!0),this.wireframe===!0&&(g.wireframe=!0),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=!0),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function C(Q){const i=[];for(const o in Q){const e=Q[o];delete e.metadata,i.push(e)}return i}if(I){const Q=C(A.textures),i=C(A.images);Q.length>0&&(g.textures=Q),i.length>0&&(g.images=i)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const C=I.length;g=new Array(C);for(let Q=0;Q!==C;++Q)g[Q]=I[Q].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}class zg extends eC{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yI(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ye,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const rg=new Z,CE=new VI;class fg{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=bi,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=MC,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(A){return this.usage=A,this}addUpdateRange(A,I){this.updateRanges.push({start:A,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let C=0,Q=this.itemSize;C<Q;C++)this.array[A+C]=I.array[g+C];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)CE.fromBufferAttribute(this,I),CE.applyMatrix3(A),this.setXY(I,CE.x,CE.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)rg.fromBufferAttribute(this,I),rg.applyMatrix3(A),this.setXYZ(I,rg.x,rg.y,rg.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)rg.fromBufferAttribute(this,I),rg.applyMatrix4(A),this.setXYZ(I,rg.x,rg.y,rg.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)rg.fromBufferAttribute(this,I),rg.applyNormalMatrix(A),this.setXYZ(I,rg.x,rg.y,rg.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)rg.fromBufferAttribute(this,I),rg.transformDirection(A),this.setXYZ(I,rg.x,rg.y,rg.z);return this}set(A,I=0){return this.array.set(A,I),this}getComponent(A,I){let g=this.array[A*this.itemSize+I];return this.normalized&&(g=tC(g,this.array)),g}setComponent(A,I,g){return this.normalized&&(g=gg(g,this.array)),this.array[A*this.itemSize+I]=g,this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=tC(I,this.array)),I}setX(A,I){return this.normalized&&(I=gg(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=tC(I,this.array)),I}setY(A,I){return this.normalized&&(I=gg(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=tC(I,this.array)),I}setZ(A,I){return this.normalized&&(I=gg(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=tC(I,this.array)),I}setW(A,I){return this.normalized&&(I=gg(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=gg(I,this.array),g=gg(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=gg(I,this.array),g=gg(g,this.array),C=gg(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this}setXYZW(A,I,g,C,Q){return A*=this.itemSize,this.normalized&&(I=gg(I,this.array),g=gg(g,this.array),C=gg(C,this.array),Q=gg(Q,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this.array[A+3]=Q,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==bi&&(A.usage=this.usage),A}}class $e extends fg{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class As extends fg{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class UC extends fg{constructor(A,I,g){super(new Float32Array(A),I,g)}}let Fn=0;const Zg=new kI,hi=new Dg,YB=new Z,Vg=new dC,wQ=new dC,Ng=new Z;class BC extends rB{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fn++}),this.uuid=CC(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(ve(A)?As:$e)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const Q=new uI().getNormalMatrix(A);g.applyNormalMatrix(Q),g.needsUpdate=!0}const C=this.attributes.tangent;return C!==void 0&&(C.transformDirection(A),C.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return Zg.makeRotationFromQuaternion(A),this.applyMatrix4(Zg),this}rotateX(A){return Zg.makeRotationX(A),this.applyMatrix4(Zg),this}rotateY(A){return Zg.makeRotationY(A),this.applyMatrix4(Zg),this}rotateZ(A){return Zg.makeRotationZ(A),this.applyMatrix4(Zg),this}translate(A,I,g){return Zg.makeTranslation(A,I,g),this.applyMatrix4(Zg),this}scale(A,I,g){return Zg.makeScale(A,I,g),this.applyMatrix4(Zg),this}lookAt(A){return hi.lookAt(A),hi.updateMatrix(),this.applyMatrix4(hi.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(YB).negate(),this.translate(YB.x,YB.y,YB.z),this}setFromPoints(A){const I=[];for(let g=0,C=A.length;g<C;g++){const Q=A[g];I.push(Q.x,Q.y,Q.z||0)}return this.setAttribute("position",new UC(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dC);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,C=I.length;g<C;g++){const Q=I[g];Vg.setFromBufferAttribute(Q),this.morphTargetsRelative?(Ng.addVectors(this.boundingBox.min,Vg.min),this.boundingBox.expandByPoint(Ng),Ng.addVectors(this.boundingBox.max,Vg.max),this.boundingBox.expandByPoint(Ng)):(this.boundingBox.expandByPoint(Vg.min),this.boundingBox.expandByPoint(Vg.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sC);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Z,1/0);return}if(A){const g=this.boundingSphere.center;if(Vg.setFromBufferAttribute(A),I)for(let Q=0,i=I.length;Q<i;Q++){const o=I[Q];wQ.setFromBufferAttribute(o),this.morphTargetsRelative?(Ng.addVectors(Vg.min,wQ.min),Vg.expandByPoint(Ng),Ng.addVectors(Vg.max,wQ.max),Vg.expandByPoint(Ng)):(Vg.expandByPoint(wQ.min),Vg.expandByPoint(wQ.max))}Vg.getCenter(g);let C=0;for(let Q=0,i=A.count;Q<i;Q++)Ng.fromBufferAttribute(A,Q),C=Math.max(C,g.distanceToSquared(Ng));if(I)for(let Q=0,i=I.length;Q<i;Q++){const o=I[Q],e=this.morphTargetsRelative;for(let s=0,D=o.count;s<D;s++)Ng.fromBufferAttribute(o,s),e&&(YB.fromBufferAttribute(A,s),Ng.add(YB)),C=Math.max(C,g.distanceToSquared(Ng))}this.boundingSphere.radius=Math.sqrt(C),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=A.array,C=I.position.array,Q=I.normal.array,i=I.uv.array,o=C.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fg(new Float32Array(4*o),4));const e=this.getAttribute("tangent").array,s=[],D=[];for(let x=0;x<o;x++)s[x]=new Z,D[x]=new Z;const n=new Z,r=new Z,F=new Z,l=new VI,S=new VI,G=new VI,w=new Z,Y=new Z;function K(x,DA,hA){n.fromArray(C,x*3),r.fromArray(C,DA*3),F.fromArray(C,hA*3),l.fromArray(i,x*2),S.fromArray(i,DA*2),G.fromArray(i,hA*2),r.sub(n),F.sub(n),S.sub(l),G.sub(l);const rA=1/(S.x*G.y-G.x*S.y);isFinite(rA)&&(w.copy(r).multiplyScalar(G.y).addScaledVector(F,-S.y).multiplyScalar(rA),Y.copy(F).multiplyScalar(S.x).addScaledVector(r,-G.x).multiplyScalar(rA),s[x].add(w),s[DA].add(w),s[hA].add(w),D[x].add(Y),D[DA].add(Y),D[hA].add(Y))}let f=this.groups;f.length===0&&(f=[{start:0,count:g.length}]);for(let x=0,DA=f.length;x<DA;++x){const hA=f[x],rA=hA.start,O=hA.count;for(let EA=rA,wA=rA+O;EA<wA;EA+=3)K(g[EA+0],g[EA+1],g[EA+2])}const q=new Z,b=new Z,T=new Z,BA=new Z;function d(x){T.fromArray(Q,x*3),BA.copy(T);const DA=s[x];q.copy(DA),q.sub(T.multiplyScalar(T.dot(DA))).normalize(),b.crossVectors(BA,DA);const rA=b.dot(D[x])<0?-1:1;e[x*4]=q.x,e[x*4+1]=q.y,e[x*4+2]=q.z,e[x*4+3]=rA}for(let x=0,DA=f.length;x<DA;++x){const hA=f[x],rA=hA.start,O=hA.count;for(let EA=rA,wA=rA+O;EA<wA;EA+=3)d(g[EA+0]),d(g[EA+1]),d(g[EA+2])}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new fg(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let r=0,F=g.count;r<F;r++)g.setXYZ(r,0,0,0);const C=new Z,Q=new Z,i=new Z,o=new Z,e=new Z,s=new Z,D=new Z,n=new Z;if(A)for(let r=0,F=A.count;r<F;r+=3){const l=A.getX(r+0),S=A.getX(r+1),G=A.getX(r+2);C.fromBufferAttribute(I,l),Q.fromBufferAttribute(I,S),i.fromBufferAttribute(I,G),D.subVectors(i,Q),n.subVectors(C,Q),D.cross(n),o.fromBufferAttribute(g,l),e.fromBufferAttribute(g,S),s.fromBufferAttribute(g,G),o.add(D),e.add(D),s.add(D),g.setXYZ(l,o.x,o.y,o.z),g.setXYZ(S,e.x,e.y,e.z),g.setXYZ(G,s.x,s.y,s.z)}else for(let r=0,F=I.count;r<F;r+=3)C.fromBufferAttribute(I,r+0),Q.fromBufferAttribute(I,r+1),i.fromBufferAttribute(I,r+2),D.subVectors(i,Q),n.subVectors(C,Q),D.cross(n),g.setXYZ(r+0,D.x,D.y,D.z),g.setXYZ(r+1,D.x,D.y,D.z),g.setXYZ(r+2,D.x,D.y,D.z);this.normalizeNormals(),g.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)Ng.fromBufferAttribute(A,I),Ng.normalize(),A.setXYZ(I,Ng.x,Ng.y,Ng.z)}toNonIndexed(){function A(o,e){const s=o.array,D=o.itemSize,n=o.normalized,r=new s.constructor(e.length*D);let F=0,l=0;for(let S=0,G=e.length;S<G;S++){o.isInterleavedBufferAttribute?F=e[S]*o.data.stride+o.offset:F=e[S]*D;for(let w=0;w<D;w++)r[l++]=s[F++]}return new fg(r,D,n)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new BC,g=this.index.array,C=this.attributes;for(const o in C){const e=C[o],s=A(e,g);I.setAttribute(o,s)}const Q=this.morphAttributes;for(const o in Q){const e=[],s=Q[o];for(let D=0,n=s.length;D<n;D++){const r=s[D],F=A(r,g);e.push(F)}I.morphAttributes[o]=e}I.morphTargetsRelative=this.morphTargetsRelative;const i=this.groups;for(let o=0,e=i.length;o<e;o++){const s=i[o];I.addGroup(s.start,s.count,s.materialIndex)}return I}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const e=this.parameters;for(const s in e)e[s]!==void 0&&(A[s]=e[s]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const e in g){const s=g[e];A.data.attributes[e]=s.toJSON(A.data)}const C={};let Q=!1;for(const e in this.morphAttributes){const s=this.morphAttributes[e],D=[];for(let n=0,r=s.length;n<r;n++){const F=s[n];D.push(F.toJSON(A.data))}D.length>0&&(C[e]=D,Q=!0)}Q&&(A.data.morphAttributes=C,A.data.morphTargetsRelative=this.morphTargetsRelative);const i=this.groups;i.length>0&&(A.data.groups=JSON.parse(JSON.stringify(i)));const o=this.boundingSphere;return o!==null&&(A.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const C=A.attributes;for(const s in C){const D=C[s];this.setAttribute(s,D.clone(I))}const Q=A.morphAttributes;for(const s in Q){const D=[],n=Q[s];for(let r=0,F=n.length;r<F;r++)D.push(n[r].clone(I));this.morphAttributes[s]=D}this.morphTargetsRelative=A.morphTargetsRelative;const i=A.groups;for(let s=0,D=i.length;s<D;s++){const n=i[s];this.addGroup(n.start,n.count,n.materialIndex)}const o=A.boundingBox;o!==null&&(this.boundingBox=o.clone());const e=A.boundingSphere;return e!==null&&(this.boundingSphere=e.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kt=new kI,CB=new HE,BE=new sC,dt=new Z,fB=new Z,LB=new Z,uB=new Z,ri=new Z,QE=new Z,EE=new VI,iE=new VI,oE=new VI,kt=new Z,Jt=new Z,Yt=new Z,tE=new Z,eE=new Z;class Sg extends Dg{constructor(A=new BC,I=new zg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Q=0,i=C.length;Q<i;Q++){const o=C[Q].name||String(Q);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=Q}}}}getVertexPosition(A,I){const g=this.geometry,C=g.attributes.position,Q=g.morphAttributes.position,i=g.morphTargetsRelative;I.fromBufferAttribute(C,A);const o=this.morphTargetInfluences;if(Q&&o){QE.set(0,0,0);for(let e=0,s=Q.length;e<s;e++){const D=o[e],n=Q[e];D!==0&&(ri.fromBufferAttribute(n,A),i?QE.addScaledVector(ri,D):QE.addScaledVector(ri.sub(I),D))}I.add(QE)}return I}raycast(A,I){const g=this.geometry,C=this.material,Q=this.matrixWorld;C!==void 0&&(g.boundingSphere===null&&g.computeBoundingSphere(),BE.copy(g.boundingSphere),BE.applyMatrix4(Q),CB.copy(A.ray).recast(A.near),!(BE.containsPoint(CB.origin)===!1&&(CB.intersectSphere(BE,dt)===null||CB.origin.distanceToSquared(dt)>(A.far-A.near)**2))&&(Kt.copy(Q).invert(),CB.copy(A.ray).applyMatrix4(Kt),!(g.boundingBox!==null&&CB.intersectsBox(g.boundingBox)===!1)&&this._computeIntersections(A,I,CB)))}_computeIntersections(A,I,g){let C;const Q=this.geometry,i=this.material,o=Q.index,e=Q.attributes.position,s=Q.attributes.uv,D=Q.attributes.uv1,n=Q.attributes.normal,r=Q.groups,F=Q.drawRange;if(o!==null)if(Array.isArray(i))for(let l=0,S=r.length;l<S;l++){const G=r[l],w=i[G.materialIndex],Y=Math.max(G.start,F.start),K=Math.min(o.count,Math.min(G.start+G.count,F.start+F.count));for(let f=Y,q=K;f<q;f+=3){const b=o.getX(f),T=o.getX(f+1),BA=o.getX(f+2);C=sE(this,w,A,g,s,D,n,b,T,BA),C&&(C.faceIndex=Math.floor(f/3),C.face.materialIndex=G.materialIndex,I.push(C))}}else{const l=Math.max(0,F.start),S=Math.min(o.count,F.start+F.count);for(let G=l,w=S;G<w;G+=3){const Y=o.getX(G),K=o.getX(G+1),f=o.getX(G+2);C=sE(this,i,A,g,s,D,n,Y,K,f),C&&(C.faceIndex=Math.floor(G/3),I.push(C))}}else if(e!==void 0)if(Array.isArray(i))for(let l=0,S=r.length;l<S;l++){const G=r[l],w=i[G.materialIndex],Y=Math.max(G.start,F.start),K=Math.min(e.count,Math.min(G.start+G.count,F.start+F.count));for(let f=Y,q=K;f<q;f+=3){const b=f,T=f+1,BA=f+2;C=sE(this,w,A,g,s,D,n,b,T,BA),C&&(C.faceIndex=Math.floor(f/3),C.face.materialIndex=G.materialIndex,I.push(C))}}else{const l=Math.max(0,F.start),S=Math.min(e.count,F.start+F.count);for(let G=l,w=S;G<w;G+=3){const Y=G,K=G+1,f=G+2;C=sE(this,i,A,g,s,D,n,Y,K,f),C&&(C.faceIndex=Math.floor(G/3),I.push(C))}}}}function Nn(B,A,I,g,C,Q,i,o){let e;if(A.side===qg?e=g.intersectTriangle(i,Q,C,!0,o):e=g.intersectTriangle(C,Q,i,A.side===KC,o),e===null)return null;eE.copy(o),eE.applyMatrix4(B.matrixWorld);const s=I.ray.origin.distanceTo(eE);return s<I.near||s>I.far?null:{distance:s,point:eE.clone(),object:B}}function sE(B,A,I,g,C,Q,i,o,e,s){B.getVertexPosition(o,fB),B.getVertexPosition(e,LB),B.getVertexPosition(s,uB);const D=Nn(B,A,I,g,fB,LB,uB,tE);if(D){C&&(EE.fromBufferAttribute(C,o),iE.fromBufferAttribute(C,e),oE.fromBufferAttribute(C,s),D.uv=gC.getInterpolation(tE,fB,LB,uB,EE,iE,oE,new VI)),Q&&(EE.fromBufferAttribute(Q,o),iE.fromBufferAttribute(Q,e),oE.fromBufferAttribute(Q,s),D.uv1=gC.getInterpolation(tE,fB,LB,uB,EE,iE,oE,new VI),D.uv2=D.uv1),i&&(kt.fromBufferAttribute(i,o),Jt.fromBufferAttribute(i,e),Yt.fromBufferAttribute(i,s),D.normal=gC.getInterpolation(tE,fB,LB,uB,kt,Jt,Yt,new Z),D.normal.dot(g.direction)>0&&D.normal.multiplyScalar(-1));const n={a:o,b:e,c:s,normal:new Z,materialIndex:0};gC.getNormal(fB,LB,uB,n.normal),D.face=n}return D}class kQ extends BC{constructor(A=1,I=1,g=1,C=1,Q=1,i=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:C,heightSegments:Q,depthSegments:i};const o=this;C=Math.floor(C),Q=Math.floor(Q),i=Math.floor(i);const e=[],s=[],D=[],n=[];let r=0,F=0;l("z","y","x",-1,-1,g,I,A,i,Q,0),l("z","y","x",1,-1,g,I,-A,i,Q,1),l("x","z","y",1,1,A,g,I,C,i,2),l("x","z","y",1,-1,A,g,-I,C,i,3),l("x","y","z",1,-1,A,I,g,C,Q,4),l("x","y","z",-1,-1,A,I,-g,C,Q,5),this.setIndex(e),this.setAttribute("position",new UC(s,3)),this.setAttribute("normal",new UC(D,3)),this.setAttribute("uv",new UC(n,2));function l(S,G,w,Y,K,f,q,b,T,BA,d){const x=f/T,DA=q/BA,hA=f/2,rA=q/2,O=b/2,EA=T+1,wA=BA+1;let eA=0,kA=0;const FA=new Z;for(let cA=0;cA<wA;cA++){const JA=cA*DA-rA;for(let fA=0;fA<EA;fA++){const iA=fA*x-hA;FA[S]=iA*Y,FA[G]=JA*K,FA[w]=O,s.push(FA.x,FA.y,FA.z),FA[S]=0,FA[G]=0,FA[w]=b>0?1:-1,D.push(FA.x,FA.y,FA.z),n.push(fA/T),n.push(1-cA/BA),eA+=1}}for(let cA=0;cA<BA;cA++)for(let JA=0;JA<T;JA++){const fA=r+JA+EA*cA,iA=r+JA+EA*(cA+1),GA=r+(JA+1)+EA*(cA+1),qA=r+(JA+1)+EA*cA;e.push(fA,iA,qA),e.push(iA,GA,qA),kA+=6}o.addGroup(F,kA,d),F+=kA,r+=eA}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new kQ(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function zB(B){const A={};for(const I in B){A[I]={};for(const g in B[I]){const C=B[I][g];C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)?C.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[I][g]=null):A[I][g]=C.clone():Array.isArray(C)?A[I][g]=C.slice():A[I][g]=C}}return A}function ug(B){const A={};for(let I=0;I<B.length;I++){const g=zB(B[I]);for(const C in g)A[C]=g[C]}return A}function yn(B){const A=[];for(let I=0;I<B.length;I++)A.push(B[I].clone());return A}function Is(B){return B.getRenderTarget()===null?B.outputColorSpace:_I.workingColorSpace}const Mn={clone:zB,merge:ug};var ln=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sn=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nB extends eC{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ln,this.fragmentShader=Sn,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=zB(A.uniforms),this.uniformsGroups=yn(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const C in this.uniforms){const i=this.uniforms[C].value;i&&i.isTexture?I.uniforms[C]={type:"t",value:i.toJSON(A).uuid}:i&&i.isColor?I.uniforms[C]={type:"c",value:i.getHex()}:i&&i.isVector2?I.uniforms[C]={type:"v2",value:i.toArray()}:i&&i.isVector3?I.uniforms[C]={type:"v3",value:i.toArray()}:i&&i.isVector4?I.uniforms[C]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?I.uniforms[C]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?I.uniforms[C]={type:"m4",value:i.toArray()}:I.uniforms[C]={value:i}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;const g={};for(const C in this.extensions)this.extensions[C]===!0&&(g[C]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class gs extends Dg{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kI,this.projectionMatrix=new kI,this.projectionMatrixInverse=new kI,this.coordinateSystem=lC}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Hg extends gs{constructor(A=50,I=1,g=.1,C=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=C,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=jB*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(yQ*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return jB*2*Math.atan(Math.tan(yQ*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,I,g,C,Q,i){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=Q,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(yQ*.5*this.fov)/this.zoom,g=2*I,C=this.aspect*g,Q=-.5*C;const i=this.view;if(this.view!==null&&this.view.enabled){const e=i.fullWidth,s=i.fullHeight;Q+=i.offsetX*C/e,I-=i.offsetY*g/s,C*=i.width/e,g*=i.height/s}const o=this.filmOffset;o!==0&&(Q+=A*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(Q,Q+C,I,I-g,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const HB=-90,pB=1;class Un extends Dg{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g,this.coordinateSystem=null,this.activeMipmapLevel=0;const C=new Hg(HB,pB,A,I);C.layers=this.layers,this.add(C);const Q=new Hg(HB,pB,A,I);Q.layers=this.layers,this.add(Q);const i=new Hg(HB,pB,A,I);i.layers=this.layers,this.add(i);const o=new Hg(HB,pB,A,I);o.layers=this.layers,this.add(o);const e=new Hg(HB,pB,A,I);e.layers=this.layers,this.add(e);const s=new Hg(HB,pB,A,I);s.layers=this.layers,this.add(s)}updateCoordinateSystem(){const A=this.coordinateSystem,I=this.children.concat(),[g,C,Q,i,o,e]=I;for(const s of I)this.remove(s);if(A===lC)g.up.set(0,1,0),g.lookAt(1,0,0),C.up.set(0,1,0),C.lookAt(-1,0,0),Q.up.set(0,0,-1),Q.lookAt(0,1,0),i.up.set(0,0,1),i.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),e.up.set(0,1,0),e.lookAt(0,0,-1);else if(A===kE)g.up.set(0,-1,0),g.lookAt(-1,0,0),C.up.set(0,-1,0),C.lookAt(1,0,0),Q.up.set(0,0,1),Q.lookAt(0,1,0),i.up.set(0,0,-1),i.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),e.up.set(0,-1,0),e.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const s of I)this.add(s),s.updateMatrixWorld()}update(A,I){this.parent===null&&this.updateMatrixWorld();const{renderTarget:g,activeMipmapLevel:C}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[Q,i,o,e,s,D]=this.children,n=A.getRenderTarget(),r=A.getActiveCubeFace(),F=A.getActiveMipmapLevel(),l=A.xr.enabled;A.xr.enabled=!1;const S=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0,C),A.render(I,Q),A.setRenderTarget(g,1,C),A.render(I,i),A.setRenderTarget(g,2,C),A.render(I,o),A.setRenderTarget(g,3,C),A.render(I,e),A.setRenderTarget(g,4,C),A.render(I,s),g.texture.generateMipmaps=S,A.setRenderTarget(g,5,C),A.render(I,D),A.setRenderTarget(n,r,F),A.xr.enabled=l,g.texture.needsPMREMUpdate=!0}}class Cs extends Ug{constructor(A,I,g,C,Q,i,o,e,s,D){A=A!==void 0?A:[],I=I!==void 0?I:ZB,super(A,I,g,C,Q,i,o,e,s,D),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class Kn extends DB{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},C=[g,g,g,g,g,g];I.encoding!==void 0&&(lQ("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),I.colorSpace=I.encoding===XC?Eg:jg),this.texture=new Cs(C,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:mg}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},C=new kQ(5,5,5),Q=new nB({name:"CubemapFromEquirect",uniforms:zB(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:qg,blending:OC});Q.uniforms.tEquirect.value=I;const i=new Sg(C,Q),o=I.minFilter;return I.minFilter===aB&&(I.minFilter=mg),new Un(1,10,this).update(A,i),I.minFilter=o,i.geometry.dispose(),i.material.dispose(),this}clear(A,I,g,C){const Q=A.getRenderTarget();for(let i=0;i<6;i++)A.setRenderTarget(this,i),A.clear(I,g,C);A.setRenderTarget(Q)}}const wi=new Z,dn=new Z,kn=new uI;class EB{constructor(A=new Z(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,C){return this.normal.set(A,I,g),this.constant=C,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const C=wi.subVectors(g,I).cross(dn.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(C,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(wi),C=this.normal.dot(g);if(C===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const Q=-(A.start.dot(this.normal)+this.constant)/C;return Q<0||Q>1?null:I.copy(A.start).addScaledVector(g,Q)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||kn.getNormalMatrix(A),C=this.coplanarPoint(wi).applyMatrix4(A),Q=this.normal.applyMatrix3(g).normalize();return this.constant=-C.dot(Q),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const BB=new sC,aE=new Z;class Eo{constructor(A=new EB,I=new EB,g=new EB,C=new EB,Q=new EB,i=new EB){this.planes=[A,I,g,C,Q,i]}set(A,I,g,C,Q,i){const o=this.planes;return o[0].copy(A),o[1].copy(I),o[2].copy(g),o[3].copy(C),o[4].copy(Q),o[5].copy(i),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A,I=lC){const g=this.planes,C=A.elements,Q=C[0],i=C[1],o=C[2],e=C[3],s=C[4],D=C[5],n=C[6],r=C[7],F=C[8],l=C[9],S=C[10],G=C[11],w=C[12],Y=C[13],K=C[14],f=C[15];if(g[0].setComponents(e-Q,r-s,G-F,f-w).normalize(),g[1].setComponents(e+Q,r+s,G+F,f+w).normalize(),g[2].setComponents(e+i,r+D,G+l,f+Y).normalize(),g[3].setComponents(e-i,r-D,G-l,f-Y).normalize(),g[4].setComponents(e-o,r-n,G-S,f-K).normalize(),I===lC)g[5].setComponents(e+o,r+n,G+S,f+K).normalize();else if(I===kE)g[5].setComponents(o,n,S,K).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+I);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),BB.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const I=A.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),BB.copy(I.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(BB)}intersectsSprite(A){return BB.center.set(0,0,0),BB.radius=.7071067811865476,BB.applyMatrix4(A.matrixWorld),this.intersectsSphere(BB)}intersectsSphere(A){const I=this.planes,g=A.center,C=-A.radius;for(let Q=0;Q<6;Q++)if(I[Q].distanceToPoint(g)<C)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const C=I[g];if(aE.x=C.normal.x>0?A.max.x:A.min.x,aE.y=C.normal.y>0?A.max.y:A.min.y,aE.z=C.normal.z>0?A.max.z:A.min.z,C.distanceToPoint(aE)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bs(){let B=null,A=!1,I=null,g=null;function C(Q,i){I(Q,i),g=B.requestAnimationFrame(C)}return{start:function(){A!==!0&&I!==null&&(g=B.requestAnimationFrame(C),A=!0)},stop:function(){B.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(Q){I=Q},setContext:function(Q){B=Q}}}function Jn(B,A){const I=A.isWebGL2,g=new WeakMap;function C(s,D){const n=s.array,r=s.usage,F=n.byteLength,l=B.createBuffer();B.bindBuffer(D,l),B.bufferData(D,n,r),s.onUploadCallback();let S;if(n instanceof Float32Array)S=B.FLOAT;else if(n instanceof Uint16Array)if(s.isFloat16BufferAttribute)if(I)S=B.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=B.UNSIGNED_SHORT;else if(n instanceof Int16Array)S=B.SHORT;else if(n instanceof Uint32Array)S=B.UNSIGNED_INT;else if(n instanceof Int32Array)S=B.INT;else if(n instanceof Int8Array)S=B.BYTE;else if(n instanceof Uint8Array)S=B.UNSIGNED_BYTE;else if(n instanceof Uint8ClampedArray)S=B.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+n);return{buffer:l,type:S,bytesPerElement:n.BYTES_PER_ELEMENT,version:s.version,size:F}}function Q(s,D,n){const r=D.array,F=D._updateRange,l=D.updateRanges;if(B.bindBuffer(n,s),F.count===-1&&l.length===0&&B.bufferSubData(n,0,r),l.length!==0){for(let S=0,G=l.length;S<G;S++){const w=l[S];I?B.bufferSubData(n,w.start*r.BYTES_PER_ELEMENT,r,w.start,w.count):B.bufferSubData(n,w.start*r.BYTES_PER_ELEMENT,r.subarray(w.start,w.start+w.count))}D.clearUpdateRanges()}F.count!==-1&&(I?B.bufferSubData(n,F.offset*r.BYTES_PER_ELEMENT,r,F.offset,F.count):B.bufferSubData(n,F.offset*r.BYTES_PER_ELEMENT,r.subarray(F.offset,F.offset+F.count)),F.count=-1),D.onUploadCallback()}function i(s){return s.isInterleavedBufferAttribute&&(s=s.data),g.get(s)}function o(s){s.isInterleavedBufferAttribute&&(s=s.data);const D=g.get(s);D&&(B.deleteBuffer(D.buffer),g.delete(s))}function e(s,D){if(s.isGLBufferAttribute){const r=g.get(s);(!r||r.version<s.version)&&g.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}s.isInterleavedBufferAttribute&&(s=s.data);const n=g.get(s);if(n===void 0)g.set(s,C(s,D));else if(n.version<s.version){if(n.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Q(n.buffer,s,D),n.version=s.version}}return{get:i,remove:o,update:e}}class IQ extends BC{constructor(A=1,I=1,g=1,C=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:C};const Q=A/2,i=I/2,o=Math.floor(g),e=Math.floor(C),s=o+1,D=e+1,n=A/o,r=I/e,F=[],l=[],S=[],G=[];for(let w=0;w<D;w++){const Y=w*r-i;for(let K=0;K<s;K++){const f=K*n-Q;l.push(f,-Y,0),S.push(0,0,1),G.push(K/o),G.push(1-w/e)}}for(let w=0;w<e;w++)for(let Y=0;Y<o;Y++){const K=Y+s*w,f=Y+s*(w+1),q=Y+1+s*(w+1),b=Y+1+s*w;F.push(K,f,b),F.push(f,q,b)}this.setIndex(F),this.setAttribute("position",new UC(l,3)),this.setAttribute("normal",new UC(S,3)),this.setAttribute("uv",new UC(G,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new IQ(A.width,A.height,A.widthSegments,A.heightSegments)}}var Yn=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fn=`#ifdef USE_ALPHAHASH
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
#endif`,Ln=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,un=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hn=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,pn=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mn=`#ifdef USE_AOMAP
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
#endif`,qn=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xn=`#ifdef USE_BATCHING
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
#endif`,bn=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Tn=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vn=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wn=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,On=`#ifdef USE_IRIDESCENCE
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
#endif`,Zn=`#ifdef USE_BUMPMAP
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
#endif`,vn=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xn=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pn=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jn=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zn=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_n=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$n=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ah=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ih=`#define PI 3.141592653589793
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
} // validated`,gh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ch=`vec3 transformedNormal = objectNormal;
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
#endif`,Bh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ih=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oh="gl_FragColor = linearToOutputTexel( gl_FragColor );",th=`
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
}`,eh=`#ifdef USE_ENVMAP
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
#endif`,sh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ah=`#ifdef USE_ENVMAP
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
#endif`,Dh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nh=`#ifdef USE_ENVMAP
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
#endif`,hh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ch=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gh=`#ifdef USE_GRADIENTMAP
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
}`,Rh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mh=`uniform bool receiveShadow;
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
#endif`,lh=`#ifdef USE_ENVMAP
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
#endif`,Sh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kh=`PhysicalMaterial material;
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
#endif`,Jh=`struct PhysicalMaterial {
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
}`,Yh=`
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
#endif`,fh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ph=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Th=`#if defined( USE_POINTS_UV )
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
#endif`,Vh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Oh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zh=`#ifdef USE_MORPHNORMALS
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
#endif`,vh=`#ifdef USE_MORPHTARGETS
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
#endif`,Xh=`#ifdef USE_MORPHTARGETS
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
#endif`,Ph=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_h=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$h=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ar=`#ifdef USE_NORMALMAP
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
#endif`,Ir=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gr=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cr=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Br=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qr=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Er=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ir=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,or=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tr=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,er=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sr=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ar=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dr=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nr=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hr=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rr=`float getShadowMask() {
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
}`,wr=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cr=`#ifdef USE_SKINNING
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
#endif`,Gr=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rr=`#ifdef USE_SKINNING
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
#endif`,Fr=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nr=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yr=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mr=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lr=`#ifdef USE_TRANSMISSION
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
#endif`,Sr=`#ifdef USE_TRANSMISSION
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
#endif`,Ur=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kr=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dr=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kr=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jr=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yr=`uniform sampler2D t2D;
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
}`,fr=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lr=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ur=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hr=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pr=`#include <common>
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
}`,mr=`#if DEPTH_PACKING == 3200
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
}`,qr=`#define DISTANCE
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
}`,xr=`#define DISTANCE
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
}`,br=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tr=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vr=`uniform float scale;
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
}`,Wr=`uniform vec3 diffuse;
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
}`,Or=`#include <common>
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
}`,Zr=`uniform vec3 diffuse;
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
}`,vr=`#define LAMBERT
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
}`,Xr=`#define LAMBERT
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
}`,Pr=`#define MATCAP
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
}`,jr=`#define MATCAP
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
}`,zr=`#define NORMAL
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
}`,_r=`#define NORMAL
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
}`,$r=`#define PHONG
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
}`,A0=`#define PHONG
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
}`,I0=`#define STANDARD
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
}`,g0=`#define STANDARD
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
}`,C0=`#define TOON
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
}`,B0=`#define TOON
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
}`,Q0=`uniform float size;
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
}`,E0=`uniform vec3 diffuse;
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
}`,i0=`#include <common>
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
}`,o0=`uniform vec3 color;
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
}`,t0=`uniform float rotation;
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
}`,e0=`uniform vec3 diffuse;
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
}`,dI={alphahash_fragment:Yn,alphahash_pars_fragment:fn,alphamap_fragment:Ln,alphamap_pars_fragment:un,alphatest_fragment:Hn,alphatest_pars_fragment:pn,aomap_fragment:mn,aomap_pars_fragment:qn,batching_pars_vertex:xn,batching_vertex:bn,begin_vertex:Tn,beginnormal_vertex:Vn,bsdfs:Wn,iridescence_fragment:On,bumpmap_pars_fragment:Zn,clipping_planes_fragment:vn,clipping_planes_pars_fragment:Xn,clipping_planes_pars_vertex:Pn,clipping_planes_vertex:jn,color_fragment:zn,color_pars_fragment:_n,color_pars_vertex:$n,color_vertex:Ah,common:Ih,cube_uv_reflection_fragment:gh,defaultnormal_vertex:Ch,displacementmap_pars_vertex:Bh,displacementmap_vertex:Qh,emissivemap_fragment:Eh,emissivemap_pars_fragment:ih,colorspace_fragment:oh,colorspace_pars_fragment:th,envmap_fragment:eh,envmap_common_pars_fragment:sh,envmap_pars_fragment:ah,envmap_pars_vertex:Dh,envmap_physical_pars_fragment:lh,envmap_vertex:nh,fog_vertex:hh,fog_pars_vertex:rh,fog_fragment:wh,fog_pars_fragment:ch,gradientmap_pars_fragment:Gh,lightmap_fragment:Rh,lightmap_pars_fragment:Fh,lights_lambert_fragment:Nh,lights_lambert_pars_fragment:yh,lights_pars_begin:Mh,lights_toon_fragment:Sh,lights_toon_pars_fragment:Uh,lights_phong_fragment:Kh,lights_phong_pars_fragment:dh,lights_physical_fragment:kh,lights_physical_pars_fragment:Jh,lights_fragment_begin:Yh,lights_fragment_maps:fh,lights_fragment_end:Lh,logdepthbuf_fragment:uh,logdepthbuf_pars_fragment:Hh,logdepthbuf_pars_vertex:ph,logdepthbuf_vertex:mh,map_fragment:qh,map_pars_fragment:xh,map_particle_fragment:bh,map_particle_pars_fragment:Th,metalnessmap_fragment:Vh,metalnessmap_pars_fragment:Wh,morphcolor_vertex:Oh,morphnormal_vertex:Zh,morphtarget_pars_vertex:vh,morphtarget_vertex:Xh,normal_fragment_begin:Ph,normal_fragment_maps:jh,normal_pars_fragment:zh,normal_pars_vertex:_h,normal_vertex:$h,normalmap_pars_fragment:Ar,clearcoat_normal_fragment_begin:Ir,clearcoat_normal_fragment_maps:gr,clearcoat_pars_fragment:Cr,iridescence_pars_fragment:Br,opaque_fragment:Qr,packing:Er,premultiplied_alpha_fragment:ir,project_vertex:or,dithering_fragment:tr,dithering_pars_fragment:er,roughnessmap_fragment:sr,roughnessmap_pars_fragment:ar,shadowmap_pars_fragment:Dr,shadowmap_pars_vertex:nr,shadowmap_vertex:hr,shadowmask_pars_fragment:rr,skinbase_vertex:wr,skinning_pars_vertex:cr,skinning_vertex:Gr,skinnormal_vertex:Rr,specularmap_fragment:Fr,specularmap_pars_fragment:Nr,tonemapping_fragment:yr,tonemapping_pars_fragment:Mr,transmission_fragment:lr,transmission_pars_fragment:Sr,uv_pars_fragment:Ur,uv_pars_vertex:Kr,uv_vertex:dr,worldpos_vertex:kr,background_vert:Jr,background_frag:Yr,backgroundCube_vert:fr,backgroundCube_frag:Lr,cube_vert:ur,cube_frag:Hr,depth_vert:pr,depth_frag:mr,distanceRGBA_vert:qr,distanceRGBA_frag:xr,equirect_vert:br,equirect_frag:Tr,linedashed_vert:Vr,linedashed_frag:Wr,meshbasic_vert:Or,meshbasic_frag:Zr,meshlambert_vert:vr,meshlambert_frag:Xr,meshmatcap_vert:Pr,meshmatcap_frag:jr,meshnormal_vert:zr,meshnormal_frag:_r,meshphong_vert:$r,meshphong_frag:A0,meshphysical_vert:I0,meshphysical_frag:g0,meshtoon_vert:C0,meshtoon_frag:B0,points_vert:Q0,points_frag:E0,shadow_vert:i0,shadow_frag:o0,sprite_vert:t0,sprite_frag:e0},HA={common:{diffuse:{value:new yI(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new uI},alphaMap:{value:null},alphaMapTransform:{value:new uI},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new uI}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new uI}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new uI}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new uI},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new uI},normalScale:{value:new VI(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new uI},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new uI}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new uI}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new uI}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yI(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yI(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new uI},alphaTest:{value:0},uvTransform:{value:new uI}},sprite:{diffuse:{value:new yI(16777215)},opacity:{value:1},center:{value:new VI(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new uI},alphaMap:{value:null},alphaMapTransform:{value:new uI},alphaTest:{value:0}}},iC={basic:{uniforms:ug([HA.common,HA.specularmap,HA.envmap,HA.aomap,HA.lightmap,HA.fog]),vertexShader:dI.meshbasic_vert,fragmentShader:dI.meshbasic_frag},lambert:{uniforms:ug([HA.common,HA.specularmap,HA.envmap,HA.aomap,HA.lightmap,HA.emissivemap,HA.bumpmap,HA.normalmap,HA.displacementmap,HA.fog,HA.lights,{emissive:{value:new yI(0)}}]),vertexShader:dI.meshlambert_vert,fragmentShader:dI.meshlambert_frag},phong:{uniforms:ug([HA.common,HA.specularmap,HA.envmap,HA.aomap,HA.lightmap,HA.emissivemap,HA.bumpmap,HA.normalmap,HA.displacementmap,HA.fog,HA.lights,{emissive:{value:new yI(0)},specular:{value:new yI(1118481)},shininess:{value:30}}]),vertexShader:dI.meshphong_vert,fragmentShader:dI.meshphong_frag},standard:{uniforms:ug([HA.common,HA.envmap,HA.aomap,HA.lightmap,HA.emissivemap,HA.bumpmap,HA.normalmap,HA.displacementmap,HA.roughnessmap,HA.metalnessmap,HA.fog,HA.lights,{emissive:{value:new yI(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dI.meshphysical_vert,fragmentShader:dI.meshphysical_frag},toon:{uniforms:ug([HA.common,HA.aomap,HA.lightmap,HA.emissivemap,HA.bumpmap,HA.normalmap,HA.displacementmap,HA.gradientmap,HA.fog,HA.lights,{emissive:{value:new yI(0)}}]),vertexShader:dI.meshtoon_vert,fragmentShader:dI.meshtoon_frag},matcap:{uniforms:ug([HA.common,HA.bumpmap,HA.normalmap,HA.displacementmap,HA.fog,{matcap:{value:null}}]),vertexShader:dI.meshmatcap_vert,fragmentShader:dI.meshmatcap_frag},points:{uniforms:ug([HA.points,HA.fog]),vertexShader:dI.points_vert,fragmentShader:dI.points_frag},dashed:{uniforms:ug([HA.common,HA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dI.linedashed_vert,fragmentShader:dI.linedashed_frag},depth:{uniforms:ug([HA.common,HA.displacementmap]),vertexShader:dI.depth_vert,fragmentShader:dI.depth_frag},normal:{uniforms:ug([HA.common,HA.bumpmap,HA.normalmap,HA.displacementmap,{opacity:{value:1}}]),vertexShader:dI.meshnormal_vert,fragmentShader:dI.meshnormal_frag},sprite:{uniforms:ug([HA.sprite,HA.fog]),vertexShader:dI.sprite_vert,fragmentShader:dI.sprite_frag},background:{uniforms:{uvTransform:{value:new uI},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dI.background_vert,fragmentShader:dI.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:dI.backgroundCube_vert,fragmentShader:dI.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dI.cube_vert,fragmentShader:dI.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dI.equirect_vert,fragmentShader:dI.equirect_frag},distanceRGBA:{uniforms:ug([HA.common,HA.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dI.distanceRGBA_vert,fragmentShader:dI.distanceRGBA_frag},shadow:{uniforms:ug([HA.lights,HA.fog,{color:{value:new yI(0)},opacity:{value:1}}]),vertexShader:dI.shadow_vert,fragmentShader:dI.shadow_frag}};iC.physical={uniforms:ug([iC.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new uI},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new uI},clearcoatNormalScale:{value:new VI(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new uI},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new uI},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new uI},sheen:{value:0},sheenColor:{value:new yI(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new uI},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new uI},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new uI},transmissionSamplerSize:{value:new VI},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new uI},attenuationDistance:{value:0},attenuationColor:{value:new yI(0)},specularColor:{value:new yI(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new uI},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new uI},anisotropyVector:{value:new VI},anisotropyMap:{value:null},anisotropyMapTransform:{value:new uI}}]),vertexShader:dI.meshphysical_vert,fragmentShader:dI.meshphysical_frag};const DE={r:0,b:0,g:0};function s0(B,A,I,g,C,Q,i){const o=new yI(0);let e=Q===!0?0:1,s,D,n=null,r=0,F=null;function l(G,w){let Y=!1,K=w.isScene===!0?w.background:null;K&&K.isTexture&&(K=(w.backgroundBlurriness>0?I:A).get(K)),K===null?S(o,e):K&&K.isColor&&(S(K,1),Y=!0);const f=B.xr.getEnvironmentBlendMode();f==="additive"?g.buffers.color.setClear(0,0,0,1,i):f==="alpha-blend"&&g.buffers.color.setClear(0,0,0,0,i),(B.autoClear||Y)&&B.clear(B.autoClearColor,B.autoClearDepth,B.autoClearStencil),K&&(K.isCubeTexture||K.mapping===LE)?(D===void 0&&(D=new Sg(new kQ(1,1,1),new nB({name:"BackgroundCubeMaterial",uniforms:zB(iC.backgroundCube.uniforms),vertexShader:iC.backgroundCube.vertexShader,fragmentShader:iC.backgroundCube.fragmentShader,side:qg,depthTest:!1,depthWrite:!1,fog:!1})),D.geometry.deleteAttribute("normal"),D.geometry.deleteAttribute("uv"),D.onBeforeRender=function(q,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(D.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),C.update(D)),D.material.uniforms.envMap.value=K,D.material.uniforms.flipEnvMap.value=K.isCubeTexture&&K.isRenderTargetTexture===!1?-1:1,D.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,D.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,D.material.toneMapped=_I.getTransfer(K.colorSpace)!==ig,(n!==K||r!==K.version||F!==B.toneMapping)&&(D.material.needsUpdate=!0,n=K,r=K.version,F=B.toneMapping),D.layers.enableAll(),G.unshift(D,D.geometry,D.material,0,0,null)):K&&K.isTexture&&(s===void 0&&(s=new Sg(new IQ(2,2),new nB({name:"BackgroundMaterial",uniforms:zB(iC.background.uniforms),vertexShader:iC.background.vertexShader,fragmentShader:iC.background.fragmentShader,side:KC,depthTest:!1,depthWrite:!1,fog:!1})),s.geometry.deleteAttribute("normal"),Object.defineProperty(s.material,"map",{get:function(){return this.uniforms.t2D.value}}),C.update(s)),s.material.uniforms.t2D.value=K,s.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,s.material.toneMapped=_I.getTransfer(K.colorSpace)!==ig,K.matrixAutoUpdate===!0&&K.updateMatrix(),s.material.uniforms.uvTransform.value.copy(K.matrix),(n!==K||r!==K.version||F!==B.toneMapping)&&(s.material.needsUpdate=!0,n=K,r=K.version,F=B.toneMapping),s.layers.enableAll(),G.unshift(s,s.geometry,s.material,0,0,null))}function S(G,w){G.getRGB(DE,Is(B)),g.buffers.color.setClear(DE.r,DE.g,DE.b,w,i)}return{getClearColor:function(){return o},setClearColor:function(G,w=1){o.set(G),e=w,S(o,e)},getClearAlpha:function(){return e},setClearAlpha:function(G){e=G,S(o,e)},render:l}}function a0(B,A,I,g){const C=B.getParameter(B.MAX_VERTEX_ATTRIBS),Q=g.isWebGL2?null:A.get("OES_vertex_array_object"),i=g.isWebGL2||Q!==null,o={},e=G(null);let s=e,D=!1;function n(O,EA,wA,eA,kA){let FA=!1;if(i){const cA=S(eA,wA,EA);s!==cA&&(s=cA,F(s.object)),FA=w(O,eA,wA,kA),FA&&Y(O,eA,wA,kA)}else{const cA=EA.wireframe===!0;(s.geometry!==eA.id||s.program!==wA.id||s.wireframe!==cA)&&(s.geometry=eA.id,s.program=wA.id,s.wireframe=cA,FA=!0)}kA!==null&&I.update(kA,B.ELEMENT_ARRAY_BUFFER),(FA||D)&&(D=!1,BA(O,EA,wA,eA),kA!==null&&B.bindBuffer(B.ELEMENT_ARRAY_BUFFER,I.get(kA).buffer))}function r(){return g.isWebGL2?B.createVertexArray():Q.createVertexArrayOES()}function F(O){return g.isWebGL2?B.bindVertexArray(O):Q.bindVertexArrayOES(O)}function l(O){return g.isWebGL2?B.deleteVertexArray(O):Q.deleteVertexArrayOES(O)}function S(O,EA,wA){const eA=wA.wireframe===!0;let kA=o[O.id];kA===void 0&&(kA={},o[O.id]=kA);let FA=kA[EA.id];FA===void 0&&(FA={},kA[EA.id]=FA);let cA=FA[eA];return cA===void 0&&(cA=G(r()),FA[eA]=cA),cA}function G(O){const EA=[],wA=[],eA=[];for(let kA=0;kA<C;kA++)EA[kA]=0,wA[kA]=0,eA[kA]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:EA,enabledAttributes:wA,attributeDivisors:eA,object:O,attributes:{},index:null}}function w(O,EA,wA,eA){const kA=s.attributes,FA=EA.attributes;let cA=0;const JA=wA.getAttributes();for(const fA in JA)if(JA[fA].location>=0){const GA=kA[fA];let qA=FA[fA];if(qA===void 0&&(fA==="instanceMatrix"&&O.instanceMatrix&&(qA=O.instanceMatrix),fA==="instanceColor"&&O.instanceColor&&(qA=O.instanceColor)),GA===void 0||GA.attribute!==qA||qA&&GA.data!==qA.data)return!0;cA++}return s.attributesNum!==cA||s.index!==eA}function Y(O,EA,wA,eA){const kA={},FA=EA.attributes;let cA=0;const JA=wA.getAttributes();for(const fA in JA)if(JA[fA].location>=0){let GA=FA[fA];GA===void 0&&(fA==="instanceMatrix"&&O.instanceMatrix&&(GA=O.instanceMatrix),fA==="instanceColor"&&O.instanceColor&&(GA=O.instanceColor));const qA={};qA.attribute=GA,GA&&GA.data&&(qA.data=GA.data),kA[fA]=qA,cA++}s.attributes=kA,s.attributesNum=cA,s.index=eA}function K(){const O=s.newAttributes;for(let EA=0,wA=O.length;EA<wA;EA++)O[EA]=0}function f(O){q(O,0)}function q(O,EA){const wA=s.newAttributes,eA=s.enabledAttributes,kA=s.attributeDivisors;wA[O]=1,eA[O]===0&&(B.enableVertexAttribArray(O),eA[O]=1),kA[O]!==EA&&((g.isWebGL2?B:A.get("ANGLE_instanced_arrays"))[g.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,EA),kA[O]=EA)}function b(){const O=s.newAttributes,EA=s.enabledAttributes;for(let wA=0,eA=EA.length;wA<eA;wA++)EA[wA]!==O[wA]&&(B.disableVertexAttribArray(wA),EA[wA]=0)}function T(O,EA,wA,eA,kA,FA,cA){cA===!0?B.vertexAttribIPointer(O,EA,wA,kA,FA):B.vertexAttribPointer(O,EA,wA,eA,kA,FA)}function BA(O,EA,wA,eA){if(g.isWebGL2===!1&&(O.isInstancedMesh||eA.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;K();const kA=eA.attributes,FA=wA.getAttributes(),cA=EA.defaultAttributeValues;for(const JA in FA){const fA=FA[JA];if(fA.location>=0){let iA=kA[JA];if(iA===void 0&&(JA==="instanceMatrix"&&O.instanceMatrix&&(iA=O.instanceMatrix),JA==="instanceColor"&&O.instanceColor&&(iA=O.instanceColor)),iA!==void 0){const GA=iA.normalized,qA=iA.itemSize,PA=I.get(iA);if(PA===void 0)continue;const jA=PA.buffer,eI=PA.type,xA=PA.bytesPerElement,TA=g.isWebGL2===!0&&(eI===B.INT||eI===B.UNSIGNED_INT||iA.gpuType===ue);if(iA.isInterleavedBufferAttribute){const gI=iA.data,_=gI.stride,UA=iA.offset;if(gI.isInstancedInterleavedBuffer){for(let WA=0;WA<fA.locationSize;WA++)q(fA.location+WA,gI.meshPerAttribute);O.isInstancedMesh!==!0&&eA._maxInstanceCount===void 0&&(eA._maxInstanceCount=gI.meshPerAttribute*gI.count)}else for(let WA=0;WA<fA.locationSize;WA++)f(fA.location+WA);B.bindBuffer(B.ARRAY_BUFFER,jA);for(let WA=0;WA<fA.locationSize;WA++)T(fA.location+WA,qA/fA.locationSize,eI,GA,_*xA,(UA+qA/fA.locationSize*WA)*xA,TA)}else{if(iA.isInstancedBufferAttribute){for(let gI=0;gI<fA.locationSize;gI++)q(fA.location+gI,iA.meshPerAttribute);O.isInstancedMesh!==!0&&eA._maxInstanceCount===void 0&&(eA._maxInstanceCount=iA.meshPerAttribute*iA.count)}else for(let gI=0;gI<fA.locationSize;gI++)f(fA.location+gI);B.bindBuffer(B.ARRAY_BUFFER,jA);for(let gI=0;gI<fA.locationSize;gI++)T(fA.location+gI,qA/fA.locationSize,eI,GA,qA*xA,qA/fA.locationSize*gI*xA,TA)}}else if(cA!==void 0){const GA=cA[JA];if(GA!==void 0)switch(GA.length){case 2:B.vertexAttrib2fv(fA.location,GA);break;case 3:B.vertexAttrib3fv(fA.location,GA);break;case 4:B.vertexAttrib4fv(fA.location,GA);break;default:B.vertexAttrib1fv(fA.location,GA)}}}}b()}function d(){hA();for(const O in o){const EA=o[O];for(const wA in EA){const eA=EA[wA];for(const kA in eA)l(eA[kA].object),delete eA[kA];delete EA[wA]}delete o[O]}}function x(O){if(o[O.id]===void 0)return;const EA=o[O.id];for(const wA in EA){const eA=EA[wA];for(const kA in eA)l(eA[kA].object),delete eA[kA];delete EA[wA]}delete o[O.id]}function DA(O){for(const EA in o){const wA=o[EA];if(wA[O.id]===void 0)continue;const eA=wA[O.id];for(const kA in eA)l(eA[kA].object),delete eA[kA];delete wA[O.id]}}function hA(){rA(),D=!0,s!==e&&(s=e,F(s.object))}function rA(){e.geometry=null,e.program=null,e.wireframe=!1}return{setup:n,reset:hA,resetDefaultState:rA,dispose:d,releaseStatesOfGeometry:x,releaseStatesOfProgram:DA,initAttributes:K,enableAttribute:f,disableUnusedAttributes:b}}function D0(B,A,I,g){const C=g.isWebGL2;let Q;function i(D){Q=D}function o(D,n){B.drawArrays(Q,D,n),I.update(n,Q,1)}function e(D,n,r){if(r===0)return;let F,l;if(C)F=B,l="drawArraysInstanced";else if(F=A.get("ANGLE_instanced_arrays"),l="drawArraysInstancedANGLE",F===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}F[l](Q,D,n,r),I.update(n,Q,r)}function s(D,n,r){if(r===0)return;const F=A.get("WEBGL_multi_draw");if(F===null)for(let l=0;l<r;l++)this.render(D[l],n[l]);else{F.multiDrawArraysWEBGL(Q,D,0,n,0,r);let l=0;for(let S=0;S<r;S++)l+=n[S];I.update(l,Q,1)}}this.setMode=i,this.render=o,this.renderInstances=e,this.renderMultiDraw=s}function n0(B,A,I){let g;function C(){if(g!==void 0)return g;if(A.has("EXT_texture_filter_anisotropic")===!0){const T=A.get("EXT_texture_filter_anisotropic");g=B.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function Q(T){if(T==="highp"){if(B.getShaderPrecisionFormat(B.VERTEX_SHADER,B.HIGH_FLOAT).precision>0&&B.getShaderPrecisionFormat(B.FRAGMENT_SHADER,B.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&B.getShaderPrecisionFormat(B.VERTEX_SHADER,B.MEDIUM_FLOAT).precision>0&&B.getShaderPrecisionFormat(B.FRAGMENT_SHADER,B.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const i=typeof WebGL2RenderingContext<"u"&&B.constructor.name==="WebGL2RenderingContext";let o=I.precision!==void 0?I.precision:"highp";const e=Q(o);e!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",e,"instead."),o=e);const s=i||A.has("WEBGL_draw_buffers"),D=I.logarithmicDepthBuffer===!0,n=B.getParameter(B.MAX_TEXTURE_IMAGE_UNITS),r=B.getParameter(B.MAX_VERTEX_TEXTURE_IMAGE_UNITS),F=B.getParameter(B.MAX_TEXTURE_SIZE),l=B.getParameter(B.MAX_CUBE_MAP_TEXTURE_SIZE),S=B.getParameter(B.MAX_VERTEX_ATTRIBS),G=B.getParameter(B.MAX_VERTEX_UNIFORM_VECTORS),w=B.getParameter(B.MAX_VARYING_VECTORS),Y=B.getParameter(B.MAX_FRAGMENT_UNIFORM_VECTORS),K=r>0,f=i||A.has("OES_texture_float"),q=K&&f,b=i?B.getParameter(B.MAX_SAMPLES):0;return{isWebGL2:i,drawBuffers:s,getMaxAnisotropy:C,getMaxPrecision:Q,precision:o,logarithmicDepthBuffer:D,maxTextures:n,maxVertexTextures:r,maxTextureSize:F,maxCubemapSize:l,maxAttributes:S,maxVertexUniforms:G,maxVaryings:w,maxFragmentUniforms:Y,vertexTextures:K,floatFragmentTextures:f,floatVertexTextures:q,maxSamples:b}}function h0(B){const A=this;let I=null,g=0,C=!1,Q=!1;const i=new EB,o=new uI,e={value:null,needsUpdate:!1};this.uniform=e,this.numPlanes=0,this.numIntersection=0,this.init=function(n,r){const F=n.length!==0||r||g!==0||C;return C=r,g=n.length,F},this.beginShadows=function(){Q=!0,D(null)},this.endShadows=function(){Q=!1},this.setGlobalState=function(n,r){I=D(n,r,0)},this.setState=function(n,r,F){const l=n.clippingPlanes,S=n.clipIntersection,G=n.clipShadows,w=B.get(n);if(!C||l===null||l.length===0||Q&&!G)Q?D(null):s();else{const Y=Q?0:g,K=Y*4;let f=w.clippingState||null;e.value=f,f=D(l,r,K,F);for(let q=0;q!==K;++q)f[q]=I[q];w.clippingState=f,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=Y}};function s(){e.value!==I&&(e.value=I,e.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function D(n,r,F,l){const S=n!==null?n.length:0;let G=null;if(S!==0){if(G=e.value,l!==!0||G===null){const w=F+S*4,Y=r.matrixWorldInverse;o.getNormalMatrix(Y),(G===null||G.length<w)&&(G=new Float32Array(w));for(let K=0,f=F;K!==S;++K,f+=4)i.copy(n[K]).applyMatrix4(Y,o),i.normal.toArray(G,f),G[f+3]=i.constant}e.value=G,e.needsUpdate=!0}return A.numPlanes=S,A.numIntersection=0,G}}function r0(B){let A=new WeakMap;function I(i,o){return o===pi?i.mapping=ZB:o===mi&&(i.mapping=vB),i}function g(i){if(i&&i.isTexture){const o=i.mapping;if(o===pi||o===mi)if(A.has(i)){const e=A.get(i).texture;return I(e,i.mapping)}else{const e=i.image;if(e&&e.height>0){const s=new Kn(e.height/2);return s.fromEquirectangularTexture(B,i),A.set(i,s),i.addEventListener("dispose",C),I(s.texture,i.mapping)}else return null}}return i}function C(i){const o=i.target;o.removeEventListener("dispose",C);const e=A.get(o);e!==void 0&&(A.delete(o),e.dispose())}function Q(){A=new WeakMap}return{get:g,dispose:Q}}class io extends gs{constructor(A=-1,I=1,g=1,C=-1,Q=.1,i=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=C,this.near=Q,this.far=i,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,C,Q,i){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=Q,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,C=(this.top+this.bottom)/2;let Q=g-A,i=g+A,o=C+I,e=C-I;if(this.view!==null&&this.view.enabled){const s=(this.right-this.left)/this.view.fullWidth/this.zoom,D=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Q+=s*this.view.offsetX,i=Q+s*this.view.width,o-=D*this.view.offsetY,e=o-D*this.view.height}this.projectionMatrix.makeOrthographic(Q,i,o,e,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const TB=4,ft=[.125,.215,.35,.446,.526,.582],tB=20,ci=new io,Lt=new yI;let Gi=null,Ri=0,Fi=0;const iB=(1+Math.sqrt(5))/2,mB=1/iB,ut=[new Z(1,1,1),new Z(-1,1,1),new Z(1,1,-1),new Z(-1,1,-1),new Z(0,iB,mB),new Z(0,iB,-mB),new Z(mB,0,iB),new Z(-mB,0,iB),new Z(iB,mB,0),new Z(-iB,mB,0)];class Ht{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,C=100){Gi=this._renderer.getRenderTarget(),Ri=this._renderer.getActiveCubeFace(),Fi=this._renderer.getActiveMipmapLevel(),this._setSize(256);const Q=this._allocateTargets();return Q.depthBuffer=!0,this._sceneToCubeUV(A,g,C,Q),I>0&&this._blur(Q,0,0,I),this._applyPMREM(Q),this._cleanup(Q),Q}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qt(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mt(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(Gi,Ri,Fi),A.scissorTest=!1,nE(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===ZB||A.mapping===vB?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),Gi=this._renderer.getRenderTarget(),Ri=this._renderer.getActiveCubeFace(),Fi=this._renderer.getActiveMipmapLevel();const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:mg,minFilter:mg,generateMipmaps:!1,type:UQ,format:Pg,colorSpace:Kg,depthBuffer:!1},C=pt(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pt(A,I,g);const{_lodMax:Q}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=w0(Q)),this._blurMaterial=c0(Q,A,I)}return C}_compileMaterial(A){const I=new Sg(this._lodPlanes[0],A);this._renderer.compile(I,ci)}_sceneToCubeUV(A,I,g,C){const o=new Hg(90,1,I,g),e=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],D=this._renderer,n=D.autoClear,r=D.toneMapping;D.getClearColor(Lt),D.toneMapping=ZC,D.autoClear=!1;const F=new zg({name:"PMREM.Background",side:qg,depthWrite:!1,depthTest:!1}),l=new Sg(new kQ,F);let S=!1;const G=A.background;G?G.isColor&&(F.color.copy(G),A.background=null,S=!0):(F.color.copy(Lt),S=!0);for(let w=0;w<6;w++){const Y=w%3;Y===0?(o.up.set(0,e[w],0),o.lookAt(s[w],0,0)):Y===1?(o.up.set(0,0,e[w]),o.lookAt(0,s[w],0)):(o.up.set(0,e[w],0),o.lookAt(0,0,s[w]));const K=this._cubeSize;nE(C,Y*K,w>2?K:0,K,K),D.setRenderTarget(C),S&&D.render(l,o),D.render(A,o)}l.geometry.dispose(),l.material.dispose(),D.toneMapping=r,D.autoClear=n,A.background=G}_textureToCubeUV(A,I){const g=this._renderer,C=A.mapping===ZB||A.mapping===vB;C?(this._cubemapMaterial===null&&(this._cubemapMaterial=qt()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mt());const Q=C?this._cubemapMaterial:this._equirectMaterial,i=new Sg(this._lodPlanes[0],Q),o=Q.uniforms;o.envMap.value=A;const e=this._cubeSize;nE(I,0,0,3*e,2*e),g.setRenderTarget(I),g.render(i,ci)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;for(let C=1;C<this._lodPlanes.length;C++){const Q=Math.sqrt(this._sigmas[C]*this._sigmas[C]-this._sigmas[C-1]*this._sigmas[C-1]),i=ut[(C-1)%ut.length];this._blur(A,C-1,C,Q,i)}I.autoClear=g}_blur(A,I,g,C,Q){const i=this._pingPongRenderTarget;this._halfBlur(A,i,I,g,C,"latitudinal",Q),this._halfBlur(i,A,g,g,C,"longitudinal",Q)}_halfBlur(A,I,g,C,Q,i,o){const e=this._renderer,s=this._blurMaterial;i!=="latitudinal"&&i!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const D=3,n=new Sg(this._lodPlanes[C],s),r=s.uniforms,F=this._sizeLods[g]-1,l=isFinite(Q)?Math.PI/(2*F):2*Math.PI/(2*tB-1),S=Q/l,G=isFinite(Q)?1+Math.floor(D*S):tB;G>tB&&console.warn(`sigmaRadians, ${Q}, is too large and will clip, as it requested ${G} samples when the maximum is set to ${tB}`);const w=[];let Y=0;for(let T=0;T<tB;++T){const BA=T/S,d=Math.exp(-BA*BA/2);w.push(d),T===0?Y+=d:T<G&&(Y+=2*d)}for(let T=0;T<w.length;T++)w[T]=w[T]/Y;r.envMap.value=A.texture,r.samples.value=G,r.weights.value=w,r.latitudinal.value=i==="latitudinal",o&&(r.poleAxis.value=o);const{_lodMax:K}=this;r.dTheta.value=l,r.mipInt.value=K-g;const f=this._sizeLods[C],q=3*f*(C>K-TB?C-K+TB:0),b=4*(this._cubeSize-f);nE(I,q,b,3*f,2*f),e.setRenderTarget(I),e.render(n,ci)}}function w0(B){const A=[],I=[],g=[];let C=B;const Q=B-TB+1+ft.length;for(let i=0;i<Q;i++){const o=Math.pow(2,C);I.push(o);let e=1/o;i>B-TB?e=ft[i-B+TB-1]:i===0&&(e=0),g.push(e);const s=1/(o-2),D=-s,n=1+s,r=[D,D,n,D,n,n,D,D,n,n,D,n],F=6,l=6,S=3,G=2,w=1,Y=new Float32Array(S*l*F),K=new Float32Array(G*l*F),f=new Float32Array(w*l*F);for(let b=0;b<F;b++){const T=b%3*2/3-1,BA=b>2?0:-1,d=[T,BA,0,T+2/3,BA,0,T+2/3,BA+1,0,T,BA,0,T+2/3,BA+1,0,T,BA+1,0];Y.set(d,S*l*b),K.set(r,G*l*b);const x=[b,b,b,b,b,b];f.set(x,w*l*b)}const q=new BC;q.setAttribute("position",new fg(Y,S)),q.setAttribute("uv",new fg(K,G)),q.setAttribute("faceIndex",new fg(f,w)),A.push(q),C>TB&&C--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function pt(B,A,I){const g=new DB(B,A,I);return g.texture.mapping=LE,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function nE(B,A,I,g,C){B.viewport.set(A,I,g,C),B.scissor.set(A,I,g,C)}function c0(B,A,I){const g=new Float32Array(tB),C=new Z(0,1,0);return new nB({name:"SphericalGaussianBlur",defines:{n:tB,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${B}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:C}},vertexShader:oo(),fragmentShader:`

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
		`,blending:OC,depthTest:!1,depthWrite:!1})}function mt(){return new nB({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oo(),fragmentShader:`

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
		`,blending:OC,depthTest:!1,depthWrite:!1})}function qt(){return new nB({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:OC,depthTest:!1,depthWrite:!1})}function oo(){return`

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
	`}function G0(B){let A=new WeakMap,I=null;function g(o){if(o&&o.isTexture){const e=o.mapping,s=e===pi||e===mi,D=e===ZB||e===vB;if(s||D)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let n=A.get(o);return I===null&&(I=new Ht(B)),n=s?I.fromEquirectangular(o,n):I.fromCubemap(o,n),A.set(o,n),n.texture}else{if(A.has(o))return A.get(o).texture;{const n=o.image;if(s&&n&&n.height>0||D&&n&&C(n)){I===null&&(I=new Ht(B));const r=s?I.fromEquirectangular(o):I.fromCubemap(o);return A.set(o,r),o.addEventListener("dispose",Q),r.texture}else return null}}}return o}function C(o){let e=0;const s=6;for(let D=0;D<s;D++)o[D]!==void 0&&e++;return e===s}function Q(o){const e=o.target;e.removeEventListener("dispose",Q);const s=A.get(e);s!==void 0&&(A.delete(e),s.dispose())}function i(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:i}}function R0(B){const A={};function I(g){if(A[g]!==void 0)return A[g];let C;switch(g){case"WEBGL_depth_texture":C=B.getExtension("WEBGL_depth_texture")||B.getExtension("MOZ_WEBGL_depth_texture")||B.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":C=B.getExtension("EXT_texture_filter_anisotropic")||B.getExtension("MOZ_EXT_texture_filter_anisotropic")||B.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":C=B.getExtension("WEBGL_compressed_texture_s3tc")||B.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||B.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":C=B.getExtension("WEBGL_compressed_texture_pvrtc")||B.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:C=B.getExtension(g)}return A[g]=C,C}return{has:function(g){return I(g)!==null},init:function(g){g.isWebGL2?I("EXT_color_buffer_float"):(I("WEBGL_depth_texture"),I("OES_texture_float"),I("OES_texture_half_float"),I("OES_texture_half_float_linear"),I("OES_standard_derivatives"),I("OES_element_index_uint"),I("OES_vertex_array_object"),I("ANGLE_instanced_arrays")),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture")},get:function(g){const C=I(g);return C===null&&console.warn("THREE.WebGLRenderer: "+g+" extension not supported."),C}}}function F0(B,A,I,g){const C={},Q=new WeakMap;function i(n){const r=n.target;r.index!==null&&A.remove(r.index);for(const l in r.attributes)A.remove(r.attributes[l]);for(const l in r.morphAttributes){const S=r.morphAttributes[l];for(let G=0,w=S.length;G<w;G++)A.remove(S[G])}r.removeEventListener("dispose",i),delete C[r.id];const F=Q.get(r);F&&(A.remove(F),Q.delete(r)),g.releaseStatesOfGeometry(r),r.isInstancedBufferGeometry===!0&&delete r._maxInstanceCount,I.memory.geometries--}function o(n,r){return C[r.id]===!0||(r.addEventListener("dispose",i),C[r.id]=!0,I.memory.geometries++),r}function e(n){const r=n.attributes;for(const l in r)A.update(r[l],B.ARRAY_BUFFER);const F=n.morphAttributes;for(const l in F){const S=F[l];for(let G=0,w=S.length;G<w;G++)A.update(S[G],B.ARRAY_BUFFER)}}function s(n){const r=[],F=n.index,l=n.attributes.position;let S=0;if(F!==null){const Y=F.array;S=F.version;for(let K=0,f=Y.length;K<f;K+=3){const q=Y[K+0],b=Y[K+1],T=Y[K+2];r.push(q,b,b,T,T,q)}}else if(l!==void 0){const Y=l.array;S=l.version;for(let K=0,f=Y.length/3-1;K<f;K+=3){const q=K+0,b=K+1,T=K+2;r.push(q,b,b,T,T,q)}}else return;const G=new(ve(r)?As:$e)(r,1);G.version=S;const w=Q.get(n);w&&A.remove(w),Q.set(n,G)}function D(n){const r=Q.get(n);if(r){const F=n.index;F!==null&&r.version<F.version&&s(n)}else s(n);return Q.get(n)}return{get:o,update:e,getWireframeAttribute:D}}function N0(B,A,I,g){const C=g.isWebGL2;let Q;function i(F){Q=F}let o,e;function s(F){o=F.type,e=F.bytesPerElement}function D(F,l){B.drawElements(Q,l,o,F*e),I.update(l,Q,1)}function n(F,l,S){if(S===0)return;let G,w;if(C)G=B,w="drawElementsInstanced";else if(G=A.get("ANGLE_instanced_arrays"),w="drawElementsInstancedANGLE",G===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}G[w](Q,l,o,F*e,S),I.update(l,Q,S)}function r(F,l,S){if(S===0)return;const G=A.get("WEBGL_multi_draw");if(G===null)for(let w=0;w<S;w++)this.render(F[w]/e,l[w]);else{G.multiDrawElementsWEBGL(Q,l,0,o,F,0,S);let w=0;for(let Y=0;Y<S;Y++)w+=l[Y];I.update(w,Q,1)}}this.setMode=i,this.setIndex=s,this.render=D,this.renderInstances=n,this.renderMultiDraw=r}function y0(B){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(Q,i,o){switch(I.calls++,i){case B.TRIANGLES:I.triangles+=o*(Q/3);break;case B.LINES:I.lines+=o*(Q/2);break;case B.LINE_STRIP:I.lines+=o*(Q-1);break;case B.LINE_LOOP:I.lines+=o*Q;break;case B.POINTS:I.points+=o*Q;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i);break}}function C(){I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:C,update:g}}function M0(B,A){return B[0]-A[0]}function l0(B,A){return Math.abs(A[1])-Math.abs(B[1])}function S0(B,A,I){const g={},C=new Float32Array(8),Q=new WeakMap,i=new Bg,o=[];for(let s=0;s<8;s++)o[s]=[s,0];function e(s,D,n){const r=s.morphTargetInfluences;if(A.isWebGL2===!0){const l=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,S=l!==void 0?l.length:0;let G=Q.get(D);if(G===void 0||G.count!==S){let EA=function(){rA.dispose(),Q.delete(D),D.removeEventListener("dispose",EA)};var F=EA;G!==void 0&&G.texture.dispose();const K=D.morphAttributes.position!==void 0,f=D.morphAttributes.normal!==void 0,q=D.morphAttributes.color!==void 0,b=D.morphAttributes.position||[],T=D.morphAttributes.normal||[],BA=D.morphAttributes.color||[];let d=0;K===!0&&(d=1),f===!0&&(d=2),q===!0&&(d=3);let x=D.attributes.position.count*d,DA=1;x>A.maxTextureSize&&(DA=Math.ceil(x/A.maxTextureSize),x=A.maxTextureSize);const hA=new Float32Array(x*DA*4*S),rA=new je(hA,x,DA,S);rA.type=MC,rA.needsUpdate=!0;const O=d*4;for(let wA=0;wA<S;wA++){const eA=b[wA],kA=T[wA],FA=BA[wA],cA=x*DA*4*wA;for(let JA=0;JA<eA.count;JA++){const fA=JA*O;K===!0&&(i.fromBufferAttribute(eA,JA),hA[cA+fA+0]=i.x,hA[cA+fA+1]=i.y,hA[cA+fA+2]=i.z,hA[cA+fA+3]=0),f===!0&&(i.fromBufferAttribute(kA,JA),hA[cA+fA+4]=i.x,hA[cA+fA+5]=i.y,hA[cA+fA+6]=i.z,hA[cA+fA+7]=0),q===!0&&(i.fromBufferAttribute(FA,JA),hA[cA+fA+8]=i.x,hA[cA+fA+9]=i.y,hA[cA+fA+10]=i.z,hA[cA+fA+11]=FA.itemSize===4?i.w:1)}}G={count:S,texture:rA,size:new VI(x,DA)},Q.set(D,G),D.addEventListener("dispose",EA)}let w=0;for(let K=0;K<r.length;K++)w+=r[K];const Y=D.morphTargetsRelative?1:1-w;n.getUniforms().setValue(B,"morphTargetBaseInfluence",Y),n.getUniforms().setValue(B,"morphTargetInfluences",r),n.getUniforms().setValue(B,"morphTargetsTexture",G.texture,I),n.getUniforms().setValue(B,"morphTargetsTextureSize",G.size)}else{const l=r===void 0?0:r.length;let S=g[D.id];if(S===void 0||S.length!==l){S=[];for(let f=0;f<l;f++)S[f]=[f,0];g[D.id]=S}for(let f=0;f<l;f++){const q=S[f];q[0]=f,q[1]=r[f]}S.sort(l0);for(let f=0;f<8;f++)f<l&&S[f][1]?(o[f][0]=S[f][0],o[f][1]=S[f][1]):(o[f][0]=Number.MAX_SAFE_INTEGER,o[f][1]=0);o.sort(M0);const G=D.morphAttributes.position,w=D.morphAttributes.normal;let Y=0;for(let f=0;f<8;f++){const q=o[f],b=q[0],T=q[1];b!==Number.MAX_SAFE_INTEGER&&T?(G&&D.getAttribute("morphTarget"+f)!==G[b]&&D.setAttribute("morphTarget"+f,G[b]),w&&D.getAttribute("morphNormal"+f)!==w[b]&&D.setAttribute("morphNormal"+f,w[b]),C[f]=T,Y+=T):(G&&D.hasAttribute("morphTarget"+f)===!0&&D.deleteAttribute("morphTarget"+f),w&&D.hasAttribute("morphNormal"+f)===!0&&D.deleteAttribute("morphNormal"+f),C[f]=0)}const K=D.morphTargetsRelative?1:1-Y;n.getUniforms().setValue(B,"morphTargetBaseInfluence",K),n.getUniforms().setValue(B,"morphTargetInfluences",C)}}return{update:e}}function U0(B,A,I,g){let C=new WeakMap;function Q(e){const s=g.render.frame,D=e.geometry,n=A.get(e,D);if(C.get(n)!==s&&(A.update(n),C.set(n,s)),e.isInstancedMesh&&(e.hasEventListener("dispose",o)===!1&&e.addEventListener("dispose",o),C.get(e)!==s&&(I.update(e.instanceMatrix,B.ARRAY_BUFFER),e.instanceColor!==null&&I.update(e.instanceColor,B.ARRAY_BUFFER),C.set(e,s))),e.isSkinnedMesh){const r=e.skeleton;C.get(r)!==s&&(r.update(),C.set(r,s))}return n}function i(){C=new WeakMap}function o(e){const s=e.target;s.removeEventListener("dispose",o),I.remove(s.instanceMatrix),s.instanceColor!==null&&I.remove(s.instanceColor)}return{update:Q,dispose:i}}class Qs extends Ug{constructor(A,I,g,C,Q,i,o,e,s,D){if(D=D!==void 0?D:sB,D!==sB&&D!==XB)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&D===sB&&(g=WC),g===void 0&&D===XB&&(g=eB),super(null,C,Q,i,o,e,D,g,s),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=o!==void 0?o:yg,this.minFilter=e!==void 0?e:yg,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const I=super.toJSON(A);return this.compareFunction!==null&&(I.compareFunction=this.compareFunction),I}}const Es=new Ug,is=new Qs(1,1);is.compareFunction=Ze;const os=new je,ts=new sn,es=new Cs,xt=[],bt=[],Tt=new Float32Array(16),Vt=new Float32Array(9),Wt=new Float32Array(4);function gQ(B,A,I){const g=B[0];if(g<=0||g>0)return B;const C=A*I;let Q=xt[C];if(Q===void 0&&(Q=new Float32Array(C),xt[C]=Q),A!==0){g.toArray(Q,0);for(let i=1,o=0;i!==A;++i)o+=I,B[i].toArray(Q,o)}return Q}function cg(B,A){if(B.length!==A.length)return!1;for(let I=0,g=B.length;I<g;I++)if(B[I]!==A[I])return!1;return!0}function Gg(B,A){for(let I=0,g=A.length;I<g;I++)B[I]=A[I]}function mE(B,A){let I=bt[A];I===void 0&&(I=new Int32Array(A),bt[A]=I);for(let g=0;g!==A;++g)I[g]=B.allocateTextureUnit();return I}function K0(B,A){const I=this.cache;I[0]!==A&&(B.uniform1f(this.addr,A),I[0]=A)}function d0(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(cg(I,A))return;B.uniform2fv(this.addr,A),Gg(I,A)}}function k0(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(B.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(cg(I,A))return;B.uniform3fv(this.addr,A),Gg(I,A)}}function J0(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(cg(I,A))return;B.uniform4fv(this.addr,A),Gg(I,A)}}function Y0(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(cg(I,A))return;B.uniformMatrix2fv(this.addr,!1,A),Gg(I,A)}else{if(cg(I,g))return;Wt.set(g),B.uniformMatrix2fv(this.addr,!1,Wt),Gg(I,g)}}function f0(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(cg(I,A))return;B.uniformMatrix3fv(this.addr,!1,A),Gg(I,A)}else{if(cg(I,g))return;Vt.set(g),B.uniformMatrix3fv(this.addr,!1,Vt),Gg(I,g)}}function L0(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(cg(I,A))return;B.uniformMatrix4fv(this.addr,!1,A),Gg(I,A)}else{if(cg(I,g))return;Tt.set(g),B.uniformMatrix4fv(this.addr,!1,Tt),Gg(I,g)}}function u0(B,A){const I=this.cache;I[0]!==A&&(B.uniform1i(this.addr,A),I[0]=A)}function H0(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(cg(I,A))return;B.uniform2iv(this.addr,A),Gg(I,A)}}function p0(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(cg(I,A))return;B.uniform3iv(this.addr,A),Gg(I,A)}}function m0(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(cg(I,A))return;B.uniform4iv(this.addr,A),Gg(I,A)}}function q0(B,A){const I=this.cache;I[0]!==A&&(B.uniform1ui(this.addr,A),I[0]=A)}function x0(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(cg(I,A))return;B.uniform2uiv(this.addr,A),Gg(I,A)}}function b0(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(cg(I,A))return;B.uniform3uiv(this.addr,A),Gg(I,A)}}function T0(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(cg(I,A))return;B.uniform4uiv(this.addr,A),Gg(I,A)}}function V0(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C);const Q=this.type===B.SAMPLER_2D_SHADOW?is:Es;I.setTexture2D(A||Q,C)}function W0(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTexture3D(A||ts,C)}function O0(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTextureCube(A||es,C)}function Z0(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTexture2DArray(A||os,C)}function v0(B){switch(B){case 5126:return K0;case 35664:return d0;case 35665:return k0;case 35666:return J0;case 35674:return Y0;case 35675:return f0;case 35676:return L0;case 5124:case 35670:return u0;case 35667:case 35671:return H0;case 35668:case 35672:return p0;case 35669:case 35673:return m0;case 5125:return q0;case 36294:return x0;case 36295:return b0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return Z0}}function X0(B,A){B.uniform1fv(this.addr,A)}function P0(B,A){const I=gQ(A,this.size,2);B.uniform2fv(this.addr,I)}function j0(B,A){const I=gQ(A,this.size,3);B.uniform3fv(this.addr,I)}function z0(B,A){const I=gQ(A,this.size,4);B.uniform4fv(this.addr,I)}function _0(B,A){const I=gQ(A,this.size,4);B.uniformMatrix2fv(this.addr,!1,I)}function $0(B,A){const I=gQ(A,this.size,9);B.uniformMatrix3fv(this.addr,!1,I)}function Aw(B,A){const I=gQ(A,this.size,16);B.uniformMatrix4fv(this.addr,!1,I)}function Iw(B,A){B.uniform1iv(this.addr,A)}function gw(B,A){B.uniform2iv(this.addr,A)}function Cw(B,A){B.uniform3iv(this.addr,A)}function Bw(B,A){B.uniform4iv(this.addr,A)}function Qw(B,A){B.uniform1uiv(this.addr,A)}function Ew(B,A){B.uniform2uiv(this.addr,A)}function iw(B,A){B.uniform3uiv(this.addr,A)}function ow(B,A){B.uniform4uiv(this.addr,A)}function tw(B,A,I){const g=this.cache,C=A.length,Q=mE(I,C);cg(g,Q)||(B.uniform1iv(this.addr,Q),Gg(g,Q));for(let i=0;i!==C;++i)I.setTexture2D(A[i]||Es,Q[i])}function ew(B,A,I){const g=this.cache,C=A.length,Q=mE(I,C);cg(g,Q)||(B.uniform1iv(this.addr,Q),Gg(g,Q));for(let i=0;i!==C;++i)I.setTexture3D(A[i]||ts,Q[i])}function sw(B,A,I){const g=this.cache,C=A.length,Q=mE(I,C);cg(g,Q)||(B.uniform1iv(this.addr,Q),Gg(g,Q));for(let i=0;i!==C;++i)I.setTextureCube(A[i]||es,Q[i])}function aw(B,A,I){const g=this.cache,C=A.length,Q=mE(I,C);cg(g,Q)||(B.uniform1iv(this.addr,Q),Gg(g,Q));for(let i=0;i!==C;++i)I.setTexture2DArray(A[i]||os,Q[i])}function Dw(B){switch(B){case 5126:return X0;case 35664:return P0;case 35665:return j0;case 35666:return z0;case 35674:return _0;case 35675:return $0;case 35676:return Aw;case 5124:case 35670:return Iw;case 35667:case 35671:return gw;case 35668:case 35672:return Cw;case 35669:case 35673:return Bw;case 5125:return Qw;case 36294:return Ew;case 36295:return iw;case 36296:return ow;case 35678:case 36198:case 36298:case 36306:case 35682:return tw;case 35679:case 36299:case 36307:return ew;case 35680:case 36300:case 36308:case 36293:return sw;case 36289:case 36303:case 36311:case 36292:return aw}}class nw{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.setValue=v0(I.type)}}class hw{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.size=I.size,this.setValue=Dw(I.type)}}class rw{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const C=this.seq;for(let Q=0,i=C.length;Q!==i;++Q){const o=C[Q];o.setValue(A,I[o.id],g)}}}const Ni=/(\w+)(\])?(\[|\.)?/g;function Ot(B,A){B.seq.push(A),B.map[A.id]=A}function ww(B,A,I){const g=B.name,C=g.length;for(Ni.lastIndex=0;;){const Q=Ni.exec(g),i=Ni.lastIndex;let o=Q[1];const e=Q[2]==="]",s=Q[3];if(e&&(o=o|0),s===void 0||s==="["&&i+2===C){Ot(I,s===void 0?new nw(o,B,A):new hw(o,B,A));break}else{let n=I.map[o];n===void 0&&(n=new rw(o),Ot(I,n)),I=n}}}class yE{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let C=0;C<g;++C){const Q=A.getActiveUniform(I,C),i=A.getUniformLocation(I,Q.name);ww(Q,i,this)}}setValue(A,I,g,C){const Q=this.map[I];Q!==void 0&&Q.setValue(A,g,C)}setOptional(A,I,g){const C=I[g];C!==void 0&&this.setValue(A,g,C)}static upload(A,I,g,C){for(let Q=0,i=I.length;Q!==i;++Q){const o=I[Q],e=g[o.id];e.needsUpdate!==!1&&o.setValue(A,e.value,C)}}static seqWithValue(A,I){const g=[];for(let C=0,Q=A.length;C!==Q;++C){const i=A[C];i.id in I&&g.push(i)}return g}}function Zt(B,A,I){const g=B.createShader(A);return B.shaderSource(g,I),B.compileShader(g),g}const cw=37297;let Gw=0;function Rw(B,A){const I=B.split(`
`),g=[],C=Math.max(A-6,0),Q=Math.min(A+6,I.length);for(let i=C;i<Q;i++){const o=i+1;g.push(`${o===A?">":" "} ${o}: ${I[i]}`)}return g.join(`
`)}function Fw(B){const A=_I.getPrimaries(_I.workingColorSpace),I=_I.getPrimaries(B);let g;switch(A===I?g="":A===dE&&I===KE?g="LinearDisplayP3ToLinearSRGB":A===KE&&I===dE&&(g="LinearSRGBToLinearDisplayP3"),B){case Kg:case uE:return[g,"LinearTransferOETF"];case Eg:case Bo:return[g,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",B),[g,"LinearTransferOETF"]}}function vt(B,A,I){const g=B.getShaderParameter(A,B.COMPILE_STATUS),C=B.getShaderInfoLog(A).trim();if(g&&C==="")return"";const Q=/ERROR: 0:(\d+)/.exec(C);if(Q){const i=parseInt(Q[1]);return I.toUpperCase()+`

`+C+`

`+Rw(B.getShaderSource(A),i)}else return C}function Nw(B,A){const I=Fw(A);return`vec4 ${B}( vec4 value ) { return ${I[0]}( ${I[1]}( value ) ); }`}function yw(B,A){let I;switch(A){case rD:I="Linear";break;case wD:I="Reinhard";break;case cD:I="OptimizedCineon";break;case GD:I="ACESFilmic";break;case RD:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+B+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}function Mw(B){return[B.extensionDerivatives||B.envMapCubeUVHeight||B.bumpMap||B.normalMapTangentSpace||B.clearcoatNormalMap||B.flatShading||B.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(B.extensionFragDepth||B.logarithmicDepthBuffer)&&B.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",B.extensionDrawBuffers&&B.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(B.extensionShaderTextureLOD||B.envMap||B.transmission)&&B.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(NQ).join(`
`)}function lw(B){const A=[];for(const I in B){const g=B[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function Sw(B,A){const I={},g=B.getProgramParameter(A,B.ACTIVE_ATTRIBUTES);for(let C=0;C<g;C++){const Q=B.getActiveAttrib(A,C),i=Q.name;let o=1;Q.type===B.FLOAT_MAT2&&(o=2),Q.type===B.FLOAT_MAT3&&(o=3),Q.type===B.FLOAT_MAT4&&(o=4),I[i]={type:Q.type,location:B.getAttribLocation(A,i),locationSize:o}}return I}function NQ(B){return B!==""}function Xt(B,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return B.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function Pt(B,A){return B.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const Uw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wi(B){return B.replace(Uw,dw)}const Kw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function dw(B,A){let I=dI[A];if(I===void 0){const g=Kw.get(A);if(g!==void 0)I=dI[g],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,g);else throw new Error("Can not resolve #include <"+A+">")}return Wi(I)}const kw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jt(B){return B.replace(kw,Jw)}function Jw(B,A,I,g){let C="";for(let Q=parseInt(A);Q<parseInt(I);Q++)C+=g.replace(/\[\s*i\s*\]/g,"[ "+Q+" ]").replace(/UNROLLED_LOOP_INDEX/g,Q);return C}function zt(B){let A="precision "+B.precision+` float;
precision `+B.precision+" int;";return B.precision==="highp"?A+=`
#define HIGH_PRECISION`:B.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:B.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function Yw(B){let A="SHADOWMAP_TYPE_BASIC";return B.shadowMapType===Je?A="SHADOWMAP_TYPE_PCF":B.shadowMapType===Wa?A="SHADOWMAP_TYPE_PCF_SOFT":B.shadowMapType===NC&&(A="SHADOWMAP_TYPE_VSM"),A}function fw(B){let A="ENVMAP_TYPE_CUBE";if(B.envMap)switch(B.envMapMode){case ZB:case vB:A="ENVMAP_TYPE_CUBE";break;case LE:A="ENVMAP_TYPE_CUBE_UV";break}return A}function Lw(B){let A="ENVMAP_MODE_REFLECTION";if(B.envMap)switch(B.envMapMode){case vB:A="ENVMAP_MODE_REFRACTION";break}return A}function uw(B){let A="ENVMAP_BLENDING_NONE";if(B.envMap)switch(B.combine){case Ye:A="ENVMAP_BLENDING_MULTIPLY";break;case nD:A="ENVMAP_BLENDING_MIX";break;case hD:A="ENVMAP_BLENDING_ADD";break}return A}function Hw(B){const A=B.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function pw(B,A,I,g){const C=B.getContext(),Q=I.defines;let i=I.vertexShader,o=I.fragmentShader;const e=Yw(I),s=fw(I),D=Lw(I),n=uw(I),r=Hw(I),F=I.isWebGL2?"":Mw(I),l=lw(Q),S=C.createProgram();let G,w,Y=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(G=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,l].filter(NQ).join(`
`),G.length>0&&(G+=`
`),w=[F,"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,l].filter(NQ).join(`
`),w.length>0&&(w+=`
`)):(G=[zt(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,l,I.batching?"#define USE_BATCHING":"",I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+D:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+I.anisotropyMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors&&I.isWebGL2?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+e:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(NQ).join(`
`),w=[F,zt(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,l,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+s:"",I.envMap?"#define "+D:"",I.envMap?"#define "+n:"",r?"#define CUBEUV_TEXEL_WIDTH "+r.texelWidth:"",r?"#define CUBEUV_TEXEL_HEIGHT "+r.texelHeight:"",r?"#define CUBEUV_MAX_MIP "+r.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+e:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==ZC?"#define TONE_MAPPING":"",I.toneMapping!==ZC?dI.tonemapping_pars_fragment:"",I.toneMapping!==ZC?yw("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",dI.colorspace_pars_fragment,Nw("linearToOutputTexel",I.outputColorSpace),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(NQ).join(`
`)),i=Wi(i),i=Xt(i,I),i=Pt(i,I),o=Wi(o),o=Xt(o,I),o=Pt(o,I),i=jt(i),o=jt(o),I.isWebGL2&&I.isRawShaderMaterial!==!0&&(Y=`#version 300 es
`,G=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+G,w=["precision mediump sampler2DArray;","#define varying in",I.glslVersion===ht?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===ht?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const K=Y+G+i,f=Y+w+o,q=Zt(C,C.VERTEX_SHADER,K),b=Zt(C,C.FRAGMENT_SHADER,f);C.attachShader(S,q),C.attachShader(S,b),I.index0AttributeName!==void 0?C.bindAttribLocation(S,0,I.index0AttributeName):I.morphTargets===!0&&C.bindAttribLocation(S,0,"position"),C.linkProgram(S);function T(DA){if(B.debug.checkShaderErrors){const hA=C.getProgramInfoLog(S).trim(),rA=C.getShaderInfoLog(q).trim(),O=C.getShaderInfoLog(b).trim();let EA=!0,wA=!0;if(C.getProgramParameter(S,C.LINK_STATUS)===!1)if(EA=!1,typeof B.debug.onShaderError=="function")B.debug.onShaderError(C,S,q,b);else{const eA=vt(C,q,"vertex"),kA=vt(C,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+C.getError()+" - VALIDATE_STATUS "+C.getProgramParameter(S,C.VALIDATE_STATUS)+`

Program Info Log: `+hA+`
`+eA+`
`+kA)}else hA!==""?console.warn("THREE.WebGLProgram: Program Info Log:",hA):(rA===""||O==="")&&(wA=!1);wA&&(DA.diagnostics={runnable:EA,programLog:hA,vertexShader:{log:rA,prefix:G},fragmentShader:{log:O,prefix:w}})}C.deleteShader(q),C.deleteShader(b),BA=new yE(C,S),d=Sw(C,S)}let BA;this.getUniforms=function(){return BA===void 0&&T(this),BA};let d;this.getAttributes=function(){return d===void 0&&T(this),d};let x=I.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=C.getProgramParameter(S,cw)),x},this.destroy=function(){g.releaseStatesOfProgram(this),C.deleteProgram(S),this.program=void 0},this.type=I.shaderType,this.name=I.shaderName,this.id=Gw++,this.cacheKey=A,this.usedTimes=1,this.program=S,this.vertexShader=q,this.fragmentShader=b,this}let mw=0;class qw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,C=this._getShaderStage(I),Q=this._getShaderStage(g),i=this._getShaderCacheForMaterial(A);return i.has(C)===!1&&(i.add(C),C.usedTimes++),i.has(Q)===!1&&(i.add(Q),Q.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new xw(A),I.set(A,g)),g}}class xw{constructor(A){this.id=mw++,this.code=A,this.usedTimes=0}}function bw(B,A,I,g,C,Q,i){const o=new ze,e=new qw,s=[],D=C.isWebGL2,n=C.logarithmicDepthBuffer,r=C.vertexTextures;let F=C.precision;const l={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(d){return d===0?"uv":`uv${d}`}function G(d,x,DA,hA,rA){const O=hA.fog,EA=rA.geometry,wA=d.isMeshStandardMaterial?hA.environment:null,eA=(d.isMeshStandardMaterial?I:A).get(d.envMap||wA),kA=eA&&eA.mapping===LE?eA.image.height:null,FA=l[d.type];d.precision!==null&&(F=C.getMaxPrecision(d.precision),F!==d.precision&&console.warn("THREE.WebGLProgram.getParameters:",d.precision,"not supported, using",F,"instead."));const cA=EA.morphAttributes.position||EA.morphAttributes.normal||EA.morphAttributes.color,JA=cA!==void 0?cA.length:0;let fA=0;EA.morphAttributes.position!==void 0&&(fA=1),EA.morphAttributes.normal!==void 0&&(fA=2),EA.morphAttributes.color!==void 0&&(fA=3);let iA,GA,qA,PA;if(FA){const Ig=iC[FA];iA=Ig.vertexShader,GA=Ig.fragmentShader}else iA=d.vertexShader,GA=d.fragmentShader,e.update(d),qA=e.getVertexShaderID(d),PA=e.getFragmentShaderID(d);const jA=B.getRenderTarget(),eI=rA.isInstancedMesh===!0,xA=rA.isBatchedMesh===!0,TA=!!d.map,gI=!!d.matcap,_=!!eA,UA=!!d.aoMap,WA=!!d.lightMap,cI=!!d.bumpMap,zA=!!d.normalMap,ZI=!!d.displacementMap,CI=!!d.emissiveMap,iI=!!d.metalnessMap,mI=!!d.roughnessMap,vI=d.anisotropy>0,eg=d.clearcoat>0,m=d.iridescence>0,k=d.sheen>0,AA=d.transmission>0,lA=vI&&!!d.anisotropyMap,yA=eg&&!!d.clearcoatMap,NA=eg&&!!d.clearcoatNormalMap,OA=eg&&!!d.clearcoatRoughnessMap,KA=m&&!!d.iridescenceMap,pA=m&&!!d.iridescenceThicknessMap,QI=k&&!!d.sheenColorMap,oI=k&&!!d.sheenRoughnessMap,MA=!!d.specularMap,WI=!!d.specularColorMap,ZA=!!d.specularIntensityMap,EI=AA&&!!d.transmissionMap,_A=AA&&!!d.thicknessMap,RA=!!d.gradientMap,RI=!!d.alphaMap,V=d.alphaTest>0,LA=!!d.alphaHash,nA=!!d.extensions,P=!!EA.attributes.uv1,dA=!!EA.attributes.uv2,XA=!!EA.attributes.uv3;let fI=ZC;return d.toneMapped&&(jA===null||jA.isXRRenderTarget===!0)&&(fI=B.toneMapping),{isWebGL2:D,shaderID:FA,shaderType:d.type,shaderName:d.name,vertexShader:iA,fragmentShader:GA,defines:d.defines,customVertexShaderID:qA,customFragmentShaderID:PA,isRawShaderMaterial:d.isRawShaderMaterial===!0,glslVersion:d.glslVersion,precision:F,batching:xA,instancing:eI,instancingColor:eI&&rA.instanceColor!==null,supportsVertexTextures:r,outputColorSpace:jA===null?B.outputColorSpace:jA.isXRRenderTarget===!0?jA.texture.colorSpace:Kg,map:TA,matcap:gI,envMap:_,envMapMode:_&&eA.mapping,envMapCubeUVHeight:kA,aoMap:UA,lightMap:WA,bumpMap:cI,normalMap:zA,displacementMap:r&&ZI,emissiveMap:CI,normalMapObjectSpace:zA&&d.normalMapType===HD,normalMapTangentSpace:zA&&d.normalMapType===Oe,metalnessMap:iI,roughnessMap:mI,anisotropy:vI,anisotropyMap:lA,clearcoat:eg,clearcoatMap:yA,clearcoatNormalMap:NA,clearcoatRoughnessMap:OA,iridescence:m,iridescenceMap:KA,iridescenceThicknessMap:pA,sheen:k,sheenColorMap:QI,sheenRoughnessMap:oI,specularMap:MA,specularColorMap:WI,specularIntensityMap:ZA,transmission:AA,transmissionMap:EI,thicknessMap:_A,gradientMap:RA,opaque:d.transparent===!1&&d.blending===VB,alphaMap:RI,alphaTest:V,alphaHash:LA,combine:d.combine,mapUv:TA&&S(d.map.channel),aoMapUv:UA&&S(d.aoMap.channel),lightMapUv:WA&&S(d.lightMap.channel),bumpMapUv:cI&&S(d.bumpMap.channel),normalMapUv:zA&&S(d.normalMap.channel),displacementMapUv:ZI&&S(d.displacementMap.channel),emissiveMapUv:CI&&S(d.emissiveMap.channel),metalnessMapUv:iI&&S(d.metalnessMap.channel),roughnessMapUv:mI&&S(d.roughnessMap.channel),anisotropyMapUv:lA&&S(d.anisotropyMap.channel),clearcoatMapUv:yA&&S(d.clearcoatMap.channel),clearcoatNormalMapUv:NA&&S(d.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:OA&&S(d.clearcoatRoughnessMap.channel),iridescenceMapUv:KA&&S(d.iridescenceMap.channel),iridescenceThicknessMapUv:pA&&S(d.iridescenceThicknessMap.channel),sheenColorMapUv:QI&&S(d.sheenColorMap.channel),sheenRoughnessMapUv:oI&&S(d.sheenRoughnessMap.channel),specularMapUv:MA&&S(d.specularMap.channel),specularColorMapUv:WI&&S(d.specularColorMap.channel),specularIntensityMapUv:ZA&&S(d.specularIntensityMap.channel),transmissionMapUv:EI&&S(d.transmissionMap.channel),thicknessMapUv:_A&&S(d.thicknessMap.channel),alphaMapUv:RI&&S(d.alphaMap.channel),vertexTangents:!!EA.attributes.tangent&&(zA||vI),vertexColors:d.vertexColors,vertexAlphas:d.vertexColors===!0&&!!EA.attributes.color&&EA.attributes.color.itemSize===4,vertexUv1s:P,vertexUv2s:dA,vertexUv3s:XA,pointsUvs:rA.isPoints===!0&&!!EA.attributes.uv&&(TA||RI),fog:!!O,useFog:d.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:d.flatShading===!0,sizeAttenuation:d.sizeAttenuation===!0,logarithmicDepthBuffer:n,skinning:rA.isSkinnedMesh===!0,morphTargets:EA.morphAttributes.position!==void 0,morphNormals:EA.morphAttributes.normal!==void 0,morphColors:EA.morphAttributes.color!==void 0,morphTargetsCount:JA,morphTextureStride:fA,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:i.numPlanes,numClipIntersection:i.numIntersection,dithering:d.dithering,shadowMapEnabled:B.shadowMap.enabled&&DA.length>0,shadowMapType:B.shadowMap.type,toneMapping:fI,useLegacyLights:B._useLegacyLights,decodeVideoTexture:TA&&d.map.isVideoTexture===!0&&_I.getTransfer(d.map.colorSpace)===ig,premultipliedAlpha:d.premultipliedAlpha,doubleSided:d.side===oC,flipSided:d.side===qg,useDepthPacking:d.depthPacking>=0,depthPacking:d.depthPacking||0,index0AttributeName:d.index0AttributeName,extensionDerivatives:nA&&d.extensions.derivatives===!0,extensionFragDepth:nA&&d.extensions.fragDepth===!0,extensionDrawBuffers:nA&&d.extensions.drawBuffers===!0,extensionShaderTextureLOD:nA&&d.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:D||g.has("EXT_frag_depth"),rendererExtensionDrawBuffers:D||g.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:D||g.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:g.has("KHR_parallel_shader_compile"),customProgramCacheKey:d.customProgramCacheKey()}}function w(d){const x=[];if(d.shaderID?x.push(d.shaderID):(x.push(d.customVertexShaderID),x.push(d.customFragmentShaderID)),d.defines!==void 0)for(const DA in d.defines)x.push(DA),x.push(d.defines[DA]);return d.isRawShaderMaterial===!1&&(Y(x,d),K(x,d),x.push(B.outputColorSpace)),x.push(d.customProgramCacheKey),x.join()}function Y(d,x){d.push(x.precision),d.push(x.outputColorSpace),d.push(x.envMapMode),d.push(x.envMapCubeUVHeight),d.push(x.mapUv),d.push(x.alphaMapUv),d.push(x.lightMapUv),d.push(x.aoMapUv),d.push(x.bumpMapUv),d.push(x.normalMapUv),d.push(x.displacementMapUv),d.push(x.emissiveMapUv),d.push(x.metalnessMapUv),d.push(x.roughnessMapUv),d.push(x.anisotropyMapUv),d.push(x.clearcoatMapUv),d.push(x.clearcoatNormalMapUv),d.push(x.clearcoatRoughnessMapUv),d.push(x.iridescenceMapUv),d.push(x.iridescenceThicknessMapUv),d.push(x.sheenColorMapUv),d.push(x.sheenRoughnessMapUv),d.push(x.specularMapUv),d.push(x.specularColorMapUv),d.push(x.specularIntensityMapUv),d.push(x.transmissionMapUv),d.push(x.thicknessMapUv),d.push(x.combine),d.push(x.fogExp2),d.push(x.sizeAttenuation),d.push(x.morphTargetsCount),d.push(x.morphAttributeCount),d.push(x.numDirLights),d.push(x.numPointLights),d.push(x.numSpotLights),d.push(x.numSpotLightMaps),d.push(x.numHemiLights),d.push(x.numRectAreaLights),d.push(x.numDirLightShadows),d.push(x.numPointLightShadows),d.push(x.numSpotLightShadows),d.push(x.numSpotLightShadowsWithMaps),d.push(x.numLightProbes),d.push(x.shadowMapType),d.push(x.toneMapping),d.push(x.numClippingPlanes),d.push(x.numClipIntersection),d.push(x.depthPacking)}function K(d,x){o.disableAll(),x.isWebGL2&&o.enable(0),x.supportsVertexTextures&&o.enable(1),x.instancing&&o.enable(2),x.instancingColor&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),d.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.useLegacyLights&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),d.push(o.mask)}function f(d){const x=l[d.type];let DA;if(x){const hA=iC[x];DA=Mn.clone(hA.uniforms)}else DA=d.uniforms;return DA}function q(d,x){let DA;for(let hA=0,rA=s.length;hA<rA;hA++){const O=s[hA];if(O.cacheKey===x){DA=O,++DA.usedTimes;break}}return DA===void 0&&(DA=new pw(B,x,d,Q),s.push(DA)),DA}function b(d){if(--d.usedTimes===0){const x=s.indexOf(d);s[x]=s[s.length-1],s.pop(),d.destroy()}}function T(d){e.remove(d)}function BA(){e.dispose()}return{getParameters:G,getProgramCacheKey:w,getUniforms:f,acquireProgram:q,releaseProgram:b,releaseShaderCache:T,programs:s,dispose:BA}}function Tw(){let B=new WeakMap;function A(Q){let i=B.get(Q);return i===void 0&&(i={},B.set(Q,i)),i}function I(Q){B.delete(Q)}function g(Q,i,o){B.get(Q)[i]=o}function C(){B=new WeakMap}return{get:A,remove:I,update:g,dispose:C}}function Vw(B,A){return B.groupOrder!==A.groupOrder?B.groupOrder-A.groupOrder:B.renderOrder!==A.renderOrder?B.renderOrder-A.renderOrder:B.material.id!==A.material.id?B.material.id-A.material.id:B.z!==A.z?B.z-A.z:B.id-A.id}function _t(B,A){return B.groupOrder!==A.groupOrder?B.groupOrder-A.groupOrder:B.renderOrder!==A.renderOrder?B.renderOrder-A.renderOrder:B.z!==A.z?A.z-B.z:B.id-A.id}function $t(){const B=[];let A=0;const I=[],g=[],C=[];function Q(){A=0,I.length=0,g.length=0,C.length=0}function i(n,r,F,l,S,G){let w=B[A];return w===void 0?(w={id:n.id,object:n,geometry:r,material:F,groupOrder:l,renderOrder:n.renderOrder,z:S,group:G},B[A]=w):(w.id=n.id,w.object=n,w.geometry=r,w.material=F,w.groupOrder=l,w.renderOrder=n.renderOrder,w.z=S,w.group=G),A++,w}function o(n,r,F,l,S,G){const w=i(n,r,F,l,S,G);F.transmission>0?g.push(w):F.transparent===!0?C.push(w):I.push(w)}function e(n,r,F,l,S,G){const w=i(n,r,F,l,S,G);F.transmission>0?g.unshift(w):F.transparent===!0?C.unshift(w):I.unshift(w)}function s(n,r){I.length>1&&I.sort(n||Vw),g.length>1&&g.sort(r||_t),C.length>1&&C.sort(r||_t)}function D(){for(let n=A,r=B.length;n<r;n++){const F=B[n];if(F.id===null)break;F.id=null,F.object=null,F.geometry=null,F.material=null,F.group=null}}return{opaque:I,transmissive:g,transparent:C,init:Q,push:o,unshift:e,finish:D,sort:s}}function Ww(){let B=new WeakMap;function A(g,C){const Q=B.get(g);let i;return Q===void 0?(i=new $t,B.set(g,[i])):C>=Q.length?(i=new $t,Q.push(i)):i=Q[C],i}function I(){B=new WeakMap}return{get:A,dispose:I}}function Ow(){const B={};return{get:function(A){if(B[A.id]!==void 0)return B[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new Z,color:new yI};break;case"SpotLight":I={position:new Z,direction:new Z,color:new yI,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new Z,color:new yI,distance:0,decay:0};break;case"HemisphereLight":I={direction:new Z,skyColor:new yI,groundColor:new yI};break;case"RectAreaLight":I={color:new yI,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return B[A.id]=I,I}}}function Zw(){const B={};return{get:function(A){if(B[A.id]!==void 0)return B[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new VI};break;case"SpotLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new VI};break;case"PointLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new VI,shadowCameraNear:1,shadowCameraFar:1e3};break}return B[A.id]=I,I}}}let vw=0;function Xw(B,A){return(A.castShadow?2:0)-(B.castShadow?2:0)+(A.map?1:0)-(B.map?1:0)}function Pw(B,A){const I=new Ow,g=Zw(),C={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let D=0;D<9;D++)C.probe.push(new Z);const Q=new Z,i=new kI,o=new kI;function e(D,n){let r=0,F=0,l=0;for(let hA=0;hA<9;hA++)C.probe[hA].set(0,0,0);let S=0,G=0,w=0,Y=0,K=0,f=0,q=0,b=0,T=0,BA=0,d=0;D.sort(Xw);const x=n===!0?Math.PI:1;for(let hA=0,rA=D.length;hA<rA;hA++){const O=D[hA],EA=O.color,wA=O.intensity,eA=O.distance,kA=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)r+=EA.r*wA*x,F+=EA.g*wA*x,l+=EA.b*wA*x;else if(O.isLightProbe){for(let FA=0;FA<9;FA++)C.probe[FA].addScaledVector(O.sh.coefficients[FA],wA);d++}else if(O.isDirectionalLight){const FA=I.get(O);if(FA.color.copy(O.color).multiplyScalar(O.intensity*x),O.castShadow){const cA=O.shadow,JA=g.get(O);JA.shadowBias=cA.bias,JA.shadowNormalBias=cA.normalBias,JA.shadowRadius=cA.radius,JA.shadowMapSize=cA.mapSize,C.directionalShadow[S]=JA,C.directionalShadowMap[S]=kA,C.directionalShadowMatrix[S]=O.shadow.matrix,f++}C.directional[S]=FA,S++}else if(O.isSpotLight){const FA=I.get(O);FA.position.setFromMatrixPosition(O.matrixWorld),FA.color.copy(EA).multiplyScalar(wA*x),FA.distance=eA,FA.coneCos=Math.cos(O.angle),FA.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),FA.decay=O.decay,C.spot[w]=FA;const cA=O.shadow;if(O.map&&(C.spotLightMap[T]=O.map,T++,cA.updateMatrices(O),O.castShadow&&BA++),C.spotLightMatrix[w]=cA.matrix,O.castShadow){const JA=g.get(O);JA.shadowBias=cA.bias,JA.shadowNormalBias=cA.normalBias,JA.shadowRadius=cA.radius,JA.shadowMapSize=cA.mapSize,C.spotShadow[w]=JA,C.spotShadowMap[w]=kA,b++}w++}else if(O.isRectAreaLight){const FA=I.get(O);FA.color.copy(EA).multiplyScalar(wA),FA.halfWidth.set(O.width*.5,0,0),FA.halfHeight.set(0,O.height*.5,0),C.rectArea[Y]=FA,Y++}else if(O.isPointLight){const FA=I.get(O);if(FA.color.copy(O.color).multiplyScalar(O.intensity*x),FA.distance=O.distance,FA.decay=O.decay,O.castShadow){const cA=O.shadow,JA=g.get(O);JA.shadowBias=cA.bias,JA.shadowNormalBias=cA.normalBias,JA.shadowRadius=cA.radius,JA.shadowMapSize=cA.mapSize,JA.shadowCameraNear=cA.camera.near,JA.shadowCameraFar=cA.camera.far,C.pointShadow[G]=JA,C.pointShadowMap[G]=kA,C.pointShadowMatrix[G]=O.shadow.matrix,q++}C.point[G]=FA,G++}else if(O.isHemisphereLight){const FA=I.get(O);FA.skyColor.copy(O.color).multiplyScalar(wA*x),FA.groundColor.copy(O.groundColor).multiplyScalar(wA*x),C.hemi[K]=FA,K++}}Y>0&&(A.isWebGL2||B.has("OES_texture_float_linear")===!0?(C.rectAreaLTC1=HA.LTC_FLOAT_1,C.rectAreaLTC2=HA.LTC_FLOAT_2):B.has("OES_texture_half_float_linear")===!0?(C.rectAreaLTC1=HA.LTC_HALF_1,C.rectAreaLTC2=HA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),C.ambient[0]=r,C.ambient[1]=F,C.ambient[2]=l;const DA=C.hash;(DA.directionalLength!==S||DA.pointLength!==G||DA.spotLength!==w||DA.rectAreaLength!==Y||DA.hemiLength!==K||DA.numDirectionalShadows!==f||DA.numPointShadows!==q||DA.numSpotShadows!==b||DA.numSpotMaps!==T||DA.numLightProbes!==d)&&(C.directional.length=S,C.spot.length=w,C.rectArea.length=Y,C.point.length=G,C.hemi.length=K,C.directionalShadow.length=f,C.directionalShadowMap.length=f,C.pointShadow.length=q,C.pointShadowMap.length=q,C.spotShadow.length=b,C.spotShadowMap.length=b,C.directionalShadowMatrix.length=f,C.pointShadowMatrix.length=q,C.spotLightMatrix.length=b+T-BA,C.spotLightMap.length=T,C.numSpotLightShadowsWithMaps=BA,C.numLightProbes=d,DA.directionalLength=S,DA.pointLength=G,DA.spotLength=w,DA.rectAreaLength=Y,DA.hemiLength=K,DA.numDirectionalShadows=f,DA.numPointShadows=q,DA.numSpotShadows=b,DA.numSpotMaps=T,DA.numLightProbes=d,C.version=vw++)}function s(D,n){let r=0,F=0,l=0,S=0,G=0;const w=n.matrixWorldInverse;for(let Y=0,K=D.length;Y<K;Y++){const f=D[Y];if(f.isDirectionalLight){const q=C.directional[r];q.direction.setFromMatrixPosition(f.matrixWorld),Q.setFromMatrixPosition(f.target.matrixWorld),q.direction.sub(Q),q.direction.transformDirection(w),r++}else if(f.isSpotLight){const q=C.spot[l];q.position.setFromMatrixPosition(f.matrixWorld),q.position.applyMatrix4(w),q.direction.setFromMatrixPosition(f.matrixWorld),Q.setFromMatrixPosition(f.target.matrixWorld),q.direction.sub(Q),q.direction.transformDirection(w),l++}else if(f.isRectAreaLight){const q=C.rectArea[S];q.position.setFromMatrixPosition(f.matrixWorld),q.position.applyMatrix4(w),o.identity(),i.copy(f.matrixWorld),i.premultiply(w),o.extractRotation(i),q.halfWidth.set(f.width*.5,0,0),q.halfHeight.set(0,f.height*.5,0),q.halfWidth.applyMatrix4(o),q.halfHeight.applyMatrix4(o),S++}else if(f.isPointLight){const q=C.point[F];q.position.setFromMatrixPosition(f.matrixWorld),q.position.applyMatrix4(w),F++}else if(f.isHemisphereLight){const q=C.hemi[G];q.direction.setFromMatrixPosition(f.matrixWorld),q.direction.transformDirection(w),G++}}}return{setup:e,setupView:s,state:C}}function Ae(B,A){const I=new Pw(B,A),g=[],C=[];function Q(){g.length=0,C.length=0}function i(n){g.push(n)}function o(n){C.push(n)}function e(n){I.setup(g,n)}function s(n){I.setupView(g,n)}return{init:Q,state:{lightsArray:g,shadowsArray:C,lights:I},setupLights:e,setupLightsView:s,pushLight:i,pushShadow:o}}function jw(B,A){let I=new WeakMap;function g(Q,i=0){const o=I.get(Q);let e;return o===void 0?(e=new Ae(B,A),I.set(Q,[e])):i>=o.length?(e=new Ae(B,A),o.push(e)):e=o[i],e}function C(){I=new WeakMap}return{get:g,dispose:C}}class zw extends eC{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LD,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class _w extends eC{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const $w=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ac=`uniform sampler2D shadow_pass;
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
}`;function Ic(B,A,I){let g=new Eo;const C=new VI,Q=new VI,i=new Bg,o=new zw({depthPacking:uD}),e=new _w,s={},D=I.maxTextureSize,n={[KC]:qg,[qg]:KC,[oC]:oC},r=new nB({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new VI},radius:{value:4}},vertexShader:$w,fragmentShader:Ac}),F=r.clone();F.defines.HORIZONTAL_PASS=1;const l=new BC;l.setAttribute("position",new fg(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Sg(l,r),G=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Je;let w=this.type;this.render=function(q,b,T){if(G.enabled===!1||G.autoUpdate===!1&&G.needsUpdate===!1||q.length===0)return;const BA=B.getRenderTarget(),d=B.getActiveCubeFace(),x=B.getActiveMipmapLevel(),DA=B.state;DA.setBlending(OC),DA.buffers.color.setClear(1,1,1,1),DA.buffers.depth.setTest(!0),DA.setScissorTest(!1);const hA=w!==NC&&this.type===NC,rA=w===NC&&this.type!==NC;for(let O=0,EA=q.length;O<EA;O++){const wA=q[O],eA=wA.shadow;if(eA===void 0){console.warn("THREE.WebGLShadowMap:",wA,"has no shadow.");continue}if(eA.autoUpdate===!1&&eA.needsUpdate===!1)continue;C.copy(eA.mapSize);const kA=eA.getFrameExtents();if(C.multiply(kA),Q.copy(eA.mapSize),(C.x>D||C.y>D)&&(C.x>D&&(Q.x=Math.floor(D/kA.x),C.x=Q.x*kA.x,eA.mapSize.x=Q.x),C.y>D&&(Q.y=Math.floor(D/kA.y),C.y=Q.y*kA.y,eA.mapSize.y=Q.y)),eA.map===null||hA===!0||rA===!0){const cA=this.type!==NC?{minFilter:yg,magFilter:yg}:{};eA.map!==null&&eA.map.dispose(),eA.map=new DB(C.x,C.y,cA),eA.map.texture.name=wA.name+".shadowMap",eA.camera.updateProjectionMatrix()}B.setRenderTarget(eA.map),B.clear();const FA=eA.getViewportCount();for(let cA=0;cA<FA;cA++){const JA=eA.getViewport(cA);i.set(Q.x*JA.x,Q.y*JA.y,Q.x*JA.z,Q.y*JA.w),DA.viewport(i),eA.updateMatrices(wA,cA),g=eA.getFrustum(),f(b,T,eA.camera,wA,this.type)}eA.isPointLightShadow!==!0&&this.type===NC&&Y(eA,T),eA.needsUpdate=!1}w=this.type,G.needsUpdate=!1,B.setRenderTarget(BA,d,x)};function Y(q,b){const T=A.update(S);r.defines.VSM_SAMPLES!==q.blurSamples&&(r.defines.VSM_SAMPLES=q.blurSamples,F.defines.VSM_SAMPLES=q.blurSamples,r.needsUpdate=!0,F.needsUpdate=!0),q.mapPass===null&&(q.mapPass=new DB(C.x,C.y)),r.uniforms.shadow_pass.value=q.map.texture,r.uniforms.resolution.value=q.mapSize,r.uniforms.radius.value=q.radius,B.setRenderTarget(q.mapPass),B.clear(),B.renderBufferDirect(b,null,T,r,S,null),F.uniforms.shadow_pass.value=q.mapPass.texture,F.uniforms.resolution.value=q.mapSize,F.uniforms.radius.value=q.radius,B.setRenderTarget(q.map),B.clear(),B.renderBufferDirect(b,null,T,F,S,null)}function K(q,b,T,BA){let d=null;const x=T.isPointLight===!0?q.customDistanceMaterial:q.customDepthMaterial;if(x!==void 0)d=x;else if(d=T.isPointLight===!0?e:o,B.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const DA=d.uuid,hA=b.uuid;let rA=s[DA];rA===void 0&&(rA={},s[DA]=rA);let O=rA[hA];O===void 0&&(O=d.clone(),rA[hA]=O),d=O}if(d.visible=b.visible,d.wireframe=b.wireframe,BA===NC?d.side=b.shadowSide!==null?b.shadowSide:b.side:d.side=b.shadowSide!==null?b.shadowSide:n[b.side],d.alphaMap=b.alphaMap,d.alphaTest=b.alphaTest,d.map=b.map,d.clipShadows=b.clipShadows,d.clippingPlanes=b.clippingPlanes,d.clipIntersection=b.clipIntersection,d.displacementMap=b.displacementMap,d.displacementScale=b.displacementScale,d.displacementBias=b.displacementBias,d.wireframeLinewidth=b.wireframeLinewidth,d.linewidth=b.linewidth,T.isPointLight===!0&&d.isMeshDistanceMaterial===!0){const DA=B.properties.get(d);DA.light=T}return d}function f(q,b,T,BA,d){if(q.visible===!1)return;if(q.layers.test(b.layers)&&(q.isMesh||q.isLine||q.isPoints)&&(q.castShadow||q.receiveShadow&&d===NC)&&(!q.frustumCulled||g.intersectsObject(q))){q.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,q.matrixWorld);const hA=A.update(q),rA=q.material;if(Array.isArray(rA)){const O=hA.groups;for(let EA=0,wA=O.length;EA<wA;EA++){const eA=O[EA],kA=rA[eA.materialIndex];if(kA&&kA.visible){const FA=K(q,kA,BA,d);q.onBeforeShadow(B,q,b,T,hA,FA,eA),B.renderBufferDirect(T,null,hA,FA,q,eA),q.onAfterShadow(B,q,b,T,hA,FA,eA)}}}else if(rA.visible){const O=K(q,rA,BA,d);q.onBeforeShadow(B,q,b,T,hA,O,null),B.renderBufferDirect(T,null,hA,O,q,null),q.onAfterShadow(B,q,b,T,hA,O,null)}}const DA=q.children;for(let hA=0,rA=DA.length;hA<rA;hA++)f(DA[hA],b,T,BA,d)}}function gc(B,A,I){const g=I.isWebGL2;function C(){let V=!1;const LA=new Bg;let nA=null;const P=new Bg(0,0,0,0);return{setMask:function(dA){nA!==dA&&!V&&(B.colorMask(dA,dA,dA,dA),nA=dA)},setLocked:function(dA){V=dA},setClear:function(dA,XA,fI,W,Ig){Ig===!0&&(dA*=W,XA*=W,fI*=W),LA.set(dA,XA,fI,W),P.equals(LA)===!1&&(B.clearColor(dA,XA,fI,W),P.copy(LA))},reset:function(){V=!1,nA=null,P.set(-1,0,0,0)}}}function Q(){let V=!1,LA=null,nA=null,P=null;return{setTest:function(dA){dA?xA(B.DEPTH_TEST):TA(B.DEPTH_TEST)},setMask:function(dA){LA!==dA&&!V&&(B.depthMask(dA),LA=dA)},setFunc:function(dA){if(nA!==dA){switch(dA){case iD:B.depthFunc(B.NEVER);break;case oD:B.depthFunc(B.ALWAYS);break;case tD:B.depthFunc(B.LESS);break;case ME:B.depthFunc(B.LEQUAL);break;case eD:B.depthFunc(B.EQUAL);break;case sD:B.depthFunc(B.GEQUAL);break;case aD:B.depthFunc(B.GREATER);break;case DD:B.depthFunc(B.NOTEQUAL);break;default:B.depthFunc(B.LEQUAL)}nA=dA}},setLocked:function(dA){V=dA},setClear:function(dA){P!==dA&&(B.clearDepth(dA),P=dA)},reset:function(){V=!1,LA=null,nA=null,P=null}}}function i(){let V=!1,LA=null,nA=null,P=null,dA=null,XA=null,fI=null,W=null,Ig=null;return{setTest:function(sI){V||(sI?xA(B.STENCIL_TEST):TA(B.STENCIL_TEST))},setMask:function(sI){LA!==sI&&!V&&(B.stencilMask(sI),LA=sI)},setFunc:function(sI,Qg,hg){(nA!==sI||P!==Qg||dA!==hg)&&(B.stencilFunc(sI,Qg,hg),nA=sI,P=Qg,dA=hg)},setOp:function(sI,Qg,hg){(XA!==sI||fI!==Qg||W!==hg)&&(B.stencilOp(sI,Qg,hg),XA=sI,fI=Qg,W=hg)},setLocked:function(sI){V=sI},setClear:function(sI){Ig!==sI&&(B.clearStencil(sI),Ig=sI)},reset:function(){V=!1,LA=null,nA=null,P=null,dA=null,XA=null,fI=null,W=null,Ig=null}}}const o=new C,e=new Q,s=new i,D=new WeakMap,n=new WeakMap;let r={},F={},l=new WeakMap,S=[],G=null,w=!1,Y=null,K=null,f=null,q=null,b=null,T=null,BA=null,d=new yI(0,0,0),x=0,DA=!1,hA=null,rA=null,O=null,EA=null,wA=null;const eA=B.getParameter(B.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let kA=!1,FA=0;const cA=B.getParameter(B.VERSION);cA.indexOf("WebGL")!==-1?(FA=parseFloat(/^WebGL (\d)/.exec(cA)[1]),kA=FA>=1):cA.indexOf("OpenGL ES")!==-1&&(FA=parseFloat(/^OpenGL ES (\d)/.exec(cA)[1]),kA=FA>=2);let JA=null,fA={};const iA=B.getParameter(B.SCISSOR_BOX),GA=B.getParameter(B.VIEWPORT),qA=new Bg().fromArray(iA),PA=new Bg().fromArray(GA);function jA(V,LA,nA,P){const dA=new Uint8Array(4),XA=B.createTexture();B.bindTexture(V,XA),B.texParameteri(V,B.TEXTURE_MIN_FILTER,B.NEAREST),B.texParameteri(V,B.TEXTURE_MAG_FILTER,B.NEAREST);for(let fI=0;fI<nA;fI++)g&&(V===B.TEXTURE_3D||V===B.TEXTURE_2D_ARRAY)?B.texImage3D(LA,0,B.RGBA,1,1,P,0,B.RGBA,B.UNSIGNED_BYTE,dA):B.texImage2D(LA+fI,0,B.RGBA,1,1,0,B.RGBA,B.UNSIGNED_BYTE,dA);return XA}const eI={};eI[B.TEXTURE_2D]=jA(B.TEXTURE_2D,B.TEXTURE_2D,1),eI[B.TEXTURE_CUBE_MAP]=jA(B.TEXTURE_CUBE_MAP,B.TEXTURE_CUBE_MAP_POSITIVE_X,6),g&&(eI[B.TEXTURE_2D_ARRAY]=jA(B.TEXTURE_2D_ARRAY,B.TEXTURE_2D_ARRAY,1,1),eI[B.TEXTURE_3D]=jA(B.TEXTURE_3D,B.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),e.setClear(1),s.setClear(0),xA(B.DEPTH_TEST),e.setFunc(ME),CI(!1),iI(Ho),xA(B.CULL_FACE),zA(OC);function xA(V){r[V]!==!0&&(B.enable(V),r[V]=!0)}function TA(V){r[V]!==!1&&(B.disable(V),r[V]=!1)}function gI(V,LA){return F[V]!==LA?(B.bindFramebuffer(V,LA),F[V]=LA,g&&(V===B.DRAW_FRAMEBUFFER&&(F[B.FRAMEBUFFER]=LA),V===B.FRAMEBUFFER&&(F[B.DRAW_FRAMEBUFFER]=LA)),!0):!1}function _(V,LA){let nA=S,P=!1;if(V)if(nA=l.get(LA),nA===void 0&&(nA=[],l.set(LA,nA)),V.isWebGLMultipleRenderTargets){const dA=V.texture;if(nA.length!==dA.length||nA[0]!==B.COLOR_ATTACHMENT0){for(let XA=0,fI=dA.length;XA<fI;XA++)nA[XA]=B.COLOR_ATTACHMENT0+XA;nA.length=dA.length,P=!0}}else nA[0]!==B.COLOR_ATTACHMENT0&&(nA[0]=B.COLOR_ATTACHMENT0,P=!0);else nA[0]!==B.BACK&&(nA[0]=B.BACK,P=!0);P&&(I.isWebGL2?B.drawBuffers(nA):A.get("WEBGL_draw_buffers").drawBuffersWEBGL(nA))}function UA(V){return G!==V?(B.useProgram(V),G=V,!0):!1}const WA={[oB]:B.FUNC_ADD,[Za]:B.FUNC_SUBTRACT,[va]:B.FUNC_REVERSE_SUBTRACT};if(g)WA[xo]=B.MIN,WA[bo]=B.MAX;else{const V=A.get("EXT_blend_minmax");V!==null&&(WA[xo]=V.MIN_EXT,WA[bo]=V.MAX_EXT)}const cI={[Xa]:B.ZERO,[Pa]:B.ONE,[ja]:B.SRC_COLOR,[ui]:B.SRC_ALPHA,[gD]:B.SRC_ALPHA_SATURATE,[AD]:B.DST_COLOR,[_a]:B.DST_ALPHA,[za]:B.ONE_MINUS_SRC_COLOR,[Hi]:B.ONE_MINUS_SRC_ALPHA,[ID]:B.ONE_MINUS_DST_COLOR,[$a]:B.ONE_MINUS_DST_ALPHA,[CD]:B.CONSTANT_COLOR,[BD]:B.ONE_MINUS_CONSTANT_COLOR,[QD]:B.CONSTANT_ALPHA,[ED]:B.ONE_MINUS_CONSTANT_ALPHA};function zA(V,LA,nA,P,dA,XA,fI,W,Ig,sI){if(V===OC){w===!0&&(TA(B.BLEND),w=!1);return}if(w===!1&&(xA(B.BLEND),w=!0),V!==Oa){if(V!==Y||sI!==DA){if((K!==oB||b!==oB)&&(B.blendEquation(B.FUNC_ADD),K=oB,b=oB),sI)switch(V){case VB:B.blendFuncSeparate(B.ONE,B.ONE_MINUS_SRC_ALPHA,B.ONE,B.ONE_MINUS_SRC_ALPHA);break;case po:B.blendFunc(B.ONE,B.ONE);break;case mo:B.blendFuncSeparate(B.ZERO,B.ONE_MINUS_SRC_COLOR,B.ZERO,B.ONE);break;case qo:B.blendFuncSeparate(B.ZERO,B.SRC_COLOR,B.ZERO,B.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case VB:B.blendFuncSeparate(B.SRC_ALPHA,B.ONE_MINUS_SRC_ALPHA,B.ONE,B.ONE_MINUS_SRC_ALPHA);break;case po:B.blendFunc(B.SRC_ALPHA,B.ONE);break;case mo:B.blendFuncSeparate(B.ZERO,B.ONE_MINUS_SRC_COLOR,B.ZERO,B.ONE);break;case qo:B.blendFunc(B.ZERO,B.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}f=null,q=null,T=null,BA=null,d.set(0,0,0),x=0,Y=V,DA=sI}return}dA=dA||LA,XA=XA||nA,fI=fI||P,(LA!==K||dA!==b)&&(B.blendEquationSeparate(WA[LA],WA[dA]),K=LA,b=dA),(nA!==f||P!==q||XA!==T||fI!==BA)&&(B.blendFuncSeparate(cI[nA],cI[P],cI[XA],cI[fI]),f=nA,q=P,T=XA,BA=fI),(W.equals(d)===!1||Ig!==x)&&(B.blendColor(W.r,W.g,W.b,Ig),d.copy(W),x=Ig),Y=V,DA=!1}function ZI(V,LA){V.side===oC?TA(B.CULL_FACE):xA(B.CULL_FACE);let nA=V.side===qg;LA&&(nA=!nA),CI(nA),V.blending===VB&&V.transparent===!1?zA(OC):zA(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),e.setFunc(V.depthFunc),e.setTest(V.depthTest),e.setMask(V.depthWrite),o.setMask(V.colorWrite);const P=V.stencilWrite;s.setTest(P),P&&(s.setMask(V.stencilWriteMask),s.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),s.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),vI(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?xA(B.SAMPLE_ALPHA_TO_COVERAGE):TA(B.SAMPLE_ALPHA_TO_COVERAGE)}function CI(V){hA!==V&&(V?B.frontFace(B.CW):B.frontFace(B.CCW),hA=V)}function iI(V){V!==Ta?(xA(B.CULL_FACE),V!==rA&&(V===Ho?B.cullFace(B.BACK):V===Va?B.cullFace(B.FRONT):B.cullFace(B.FRONT_AND_BACK))):TA(B.CULL_FACE),rA=V}function mI(V){V!==O&&(kA&&B.lineWidth(V),O=V)}function vI(V,LA,nA){V?(xA(B.POLYGON_OFFSET_FILL),(EA!==LA||wA!==nA)&&(B.polygonOffset(LA,nA),EA=LA,wA=nA)):TA(B.POLYGON_OFFSET_FILL)}function eg(V){V?xA(B.SCISSOR_TEST):TA(B.SCISSOR_TEST)}function m(V){V===void 0&&(V=B.TEXTURE0+eA-1),JA!==V&&(B.activeTexture(V),JA=V)}function k(V,LA,nA){nA===void 0&&(JA===null?nA=B.TEXTURE0+eA-1:nA=JA);let P=fA[nA];P===void 0&&(P={type:void 0,texture:void 0},fA[nA]=P),(P.type!==V||P.texture!==LA)&&(JA!==nA&&(B.activeTexture(nA),JA=nA),B.bindTexture(V,LA||eI[V]),P.type=V,P.texture=LA)}function AA(){const V=fA[JA];V!==void 0&&V.type!==void 0&&(B.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function lA(){try{B.compressedTexImage2D.apply(B,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function yA(){try{B.compressedTexImage3D.apply(B,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function NA(){try{B.texSubImage2D.apply(B,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function OA(){try{B.texSubImage3D.apply(B,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function KA(){try{B.compressedTexSubImage2D.apply(B,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pA(){try{B.compressedTexSubImage3D.apply(B,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function QI(){try{B.texStorage2D.apply(B,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function oI(){try{B.texStorage3D.apply(B,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function MA(){try{B.texImage2D.apply(B,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function WI(){try{B.texImage3D.apply(B,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ZA(V){qA.equals(V)===!1&&(B.scissor(V.x,V.y,V.z,V.w),qA.copy(V))}function EI(V){PA.equals(V)===!1&&(B.viewport(V.x,V.y,V.z,V.w),PA.copy(V))}function _A(V,LA){let nA=n.get(LA);nA===void 0&&(nA=new WeakMap,n.set(LA,nA));let P=nA.get(V);P===void 0&&(P=B.getUniformBlockIndex(LA,V.name),nA.set(V,P))}function RA(V,LA){const P=n.get(LA).get(V);D.get(LA)!==P&&(B.uniformBlockBinding(LA,P,V.__bindingPointIndex),D.set(LA,P))}function RI(){B.disable(B.BLEND),B.disable(B.CULL_FACE),B.disable(B.DEPTH_TEST),B.disable(B.POLYGON_OFFSET_FILL),B.disable(B.SCISSOR_TEST),B.disable(B.STENCIL_TEST),B.disable(B.SAMPLE_ALPHA_TO_COVERAGE),B.blendEquation(B.FUNC_ADD),B.blendFunc(B.ONE,B.ZERO),B.blendFuncSeparate(B.ONE,B.ZERO,B.ONE,B.ZERO),B.blendColor(0,0,0,0),B.colorMask(!0,!0,!0,!0),B.clearColor(0,0,0,0),B.depthMask(!0),B.depthFunc(B.LESS),B.clearDepth(1),B.stencilMask(4294967295),B.stencilFunc(B.ALWAYS,0,4294967295),B.stencilOp(B.KEEP,B.KEEP,B.KEEP),B.clearStencil(0),B.cullFace(B.BACK),B.frontFace(B.CCW),B.polygonOffset(0,0),B.activeTexture(B.TEXTURE0),B.bindFramebuffer(B.FRAMEBUFFER,null),g===!0&&(B.bindFramebuffer(B.DRAW_FRAMEBUFFER,null),B.bindFramebuffer(B.READ_FRAMEBUFFER,null)),B.useProgram(null),B.lineWidth(1),B.scissor(0,0,B.canvas.width,B.canvas.height),B.viewport(0,0,B.canvas.width,B.canvas.height),r={},JA=null,fA={},F={},l=new WeakMap,S=[],G=null,w=!1,Y=null,K=null,f=null,q=null,b=null,T=null,BA=null,d=new yI(0,0,0),x=0,DA=!1,hA=null,rA=null,O=null,EA=null,wA=null,qA.set(0,0,B.canvas.width,B.canvas.height),PA.set(0,0,B.canvas.width,B.canvas.height),o.reset(),e.reset(),s.reset()}return{buffers:{color:o,depth:e,stencil:s},enable:xA,disable:TA,bindFramebuffer:gI,drawBuffers:_,useProgram:UA,setBlending:zA,setMaterial:ZI,setFlipSided:CI,setCullFace:iI,setLineWidth:mI,setPolygonOffset:vI,setScissorTest:eg,activeTexture:m,bindTexture:k,unbindTexture:AA,compressedTexImage2D:lA,compressedTexImage3D:yA,texImage2D:MA,texImage3D:WI,updateUBOMapping:_A,uniformBlockBinding:RA,texStorage2D:QI,texStorage3D:oI,texSubImage2D:NA,texSubImage3D:OA,compressedTexSubImage2D:KA,compressedTexSubImage3D:pA,scissor:ZA,viewport:EI,reset:RI}}function Cc(B,A,I,g,C,Q,i){const o=C.isWebGL2,e=C.maxTextures,s=C.maxCubemapSize,D=C.maxTextureSize,n=C.maxSamples,r=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,F=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new WeakMap;let S;const G=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function Y(m,k){return w?new OffscreenCanvas(m,k):dQ("canvas")}function K(m,k,AA,lA){let yA=1;if((m.width>lA||m.height>lA)&&(yA=lA/Math.max(m.width,m.height)),yA<1||k===!0)if(typeof HTMLImageElement<"u"&&m instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&m instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&m instanceof ImageBitmap){const NA=k?JE:Math.floor,OA=NA(yA*m.width),KA=NA(yA*m.height);S===void 0&&(S=Y(OA,KA));const pA=AA?Y(OA,KA):S;return pA.width=OA,pA.height=KA,pA.getContext("2d").drawImage(m,0,0,OA,KA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+m.width+"x"+m.height+") to ("+OA+"x"+KA+")."),pA}else return"data"in m&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+m.width+"x"+m.height+")."),m;return m}function f(m){return Vi(m.width)&&Vi(m.height)}function q(m){return o?!1:m.wrapS!==Xg||m.wrapT!==Xg||m.minFilter!==yg&&m.minFilter!==mg}function b(m,k){return m.generateMipmaps&&k&&m.minFilter!==yg&&m.minFilter!==mg}function T(m){B.generateMipmap(m)}function BA(m,k,AA,lA,yA=!1){if(o===!1)return k;if(m!==null){if(B[m]!==void 0)return B[m];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+m+"'")}let NA=k;if(k===B.RED&&(AA===B.FLOAT&&(NA=B.R32F),AA===B.HALF_FLOAT&&(NA=B.R16F),AA===B.UNSIGNED_BYTE&&(NA=B.R8)),k===B.RED_INTEGER&&(AA===B.UNSIGNED_BYTE&&(NA=B.R8UI),AA===B.UNSIGNED_SHORT&&(NA=B.R16UI),AA===B.UNSIGNED_INT&&(NA=B.R32UI),AA===B.BYTE&&(NA=B.R8I),AA===B.SHORT&&(NA=B.R16I),AA===B.INT&&(NA=B.R32I)),k===B.RG&&(AA===B.FLOAT&&(NA=B.RG32F),AA===B.HALF_FLOAT&&(NA=B.RG16F),AA===B.UNSIGNED_BYTE&&(NA=B.RG8)),k===B.RGBA){const OA=yA?UE:_I.getTransfer(lA);AA===B.FLOAT&&(NA=B.RGBA32F),AA===B.HALF_FLOAT&&(NA=B.RGBA16F),AA===B.UNSIGNED_BYTE&&(NA=OA===ig?B.SRGB8_ALPHA8:B.RGBA8),AA===B.UNSIGNED_SHORT_4_4_4_4&&(NA=B.RGBA4),AA===B.UNSIGNED_SHORT_5_5_5_1&&(NA=B.RGB5_A1)}return(NA===B.R16F||NA===B.R32F||NA===B.RG16F||NA===B.RG32F||NA===B.RGBA16F||NA===B.RGBA32F)&&A.get("EXT_color_buffer_float"),NA}function d(m,k,AA){return b(m,AA)===!0||m.isFramebufferTexture&&m.minFilter!==yg&&m.minFilter!==mg?Math.log2(Math.max(k.width,k.height))+1:m.mipmaps!==void 0&&m.mipmaps.length>0?m.mipmaps.length:m.isCompressedTexture&&Array.isArray(m.image)?k.mipmaps.length:1}function x(m){return m===yg||m===qi||m===NE?B.NEAREST:B.LINEAR}function DA(m){const k=m.target;k.removeEventListener("dispose",DA),rA(k),k.isVideoTexture&&l.delete(k)}function hA(m){const k=m.target;k.removeEventListener("dispose",hA),EA(k)}function rA(m){const k=g.get(m);if(k.__webglInit===void 0)return;const AA=m.source,lA=G.get(AA);if(lA){const yA=lA[k.__cacheKey];yA.usedTimes--,yA.usedTimes===0&&O(m),Object.keys(lA).length===0&&G.delete(AA)}g.remove(m)}function O(m){const k=g.get(m);B.deleteTexture(k.__webglTexture);const AA=m.source,lA=G.get(AA);delete lA[k.__cacheKey],i.memory.textures--}function EA(m){const k=m.texture,AA=g.get(m),lA=g.get(k);if(lA.__webglTexture!==void 0&&(B.deleteTexture(lA.__webglTexture),i.memory.textures--),m.depthTexture&&m.depthTexture.dispose(),m.isWebGLCubeRenderTarget)for(let yA=0;yA<6;yA++){if(Array.isArray(AA.__webglFramebuffer[yA]))for(let NA=0;NA<AA.__webglFramebuffer[yA].length;NA++)B.deleteFramebuffer(AA.__webglFramebuffer[yA][NA]);else B.deleteFramebuffer(AA.__webglFramebuffer[yA]);AA.__webglDepthbuffer&&B.deleteRenderbuffer(AA.__webglDepthbuffer[yA])}else{if(Array.isArray(AA.__webglFramebuffer))for(let yA=0;yA<AA.__webglFramebuffer.length;yA++)B.deleteFramebuffer(AA.__webglFramebuffer[yA]);else B.deleteFramebuffer(AA.__webglFramebuffer);if(AA.__webglDepthbuffer&&B.deleteRenderbuffer(AA.__webglDepthbuffer),AA.__webglMultisampledFramebuffer&&B.deleteFramebuffer(AA.__webglMultisampledFramebuffer),AA.__webglColorRenderbuffer)for(let yA=0;yA<AA.__webglColorRenderbuffer.length;yA++)AA.__webglColorRenderbuffer[yA]&&B.deleteRenderbuffer(AA.__webglColorRenderbuffer[yA]);AA.__webglDepthRenderbuffer&&B.deleteRenderbuffer(AA.__webglDepthRenderbuffer)}if(m.isWebGLMultipleRenderTargets)for(let yA=0,NA=k.length;yA<NA;yA++){const OA=g.get(k[yA]);OA.__webglTexture&&(B.deleteTexture(OA.__webglTexture),i.memory.textures--),g.remove(k[yA])}g.remove(k),g.remove(m)}let wA=0;function eA(){wA=0}function kA(){const m=wA;return m>=e&&console.warn("THREE.WebGLTextures: Trying to use "+m+" texture units while this GPU supports only "+e),wA+=1,m}function FA(m){const k=[];return k.push(m.wrapS),k.push(m.wrapT),k.push(m.wrapR||0),k.push(m.magFilter),k.push(m.minFilter),k.push(m.anisotropy),k.push(m.internalFormat),k.push(m.format),k.push(m.type),k.push(m.generateMipmaps),k.push(m.premultiplyAlpha),k.push(m.flipY),k.push(m.unpackAlignment),k.push(m.colorSpace),k.join()}function cA(m,k){const AA=g.get(m);if(m.isVideoTexture&&vI(m),m.isRenderTargetTexture===!1&&m.version>0&&AA.__version!==m.version){const lA=m.image;if(lA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xA(AA,m,k);return}}I.bindTexture(B.TEXTURE_2D,AA.__webglTexture,B.TEXTURE0+k)}function JA(m,k){const AA=g.get(m);if(m.version>0&&AA.__version!==m.version){xA(AA,m,k);return}I.bindTexture(B.TEXTURE_2D_ARRAY,AA.__webglTexture,B.TEXTURE0+k)}function fA(m,k){const AA=g.get(m);if(m.version>0&&AA.__version!==m.version){xA(AA,m,k);return}I.bindTexture(B.TEXTURE_3D,AA.__webglTexture,B.TEXTURE0+k)}function iA(m,k){const AA=g.get(m);if(m.version>0&&AA.__version!==m.version){TA(AA,m,k);return}I.bindTexture(B.TEXTURE_CUBE_MAP,AA.__webglTexture,B.TEXTURE0+k)}const GA={[PC]:B.REPEAT,[Xg]:B.CLAMP_TO_EDGE,[lE]:B.MIRRORED_REPEAT},qA={[yg]:B.NEAREST,[qi]:B.NEAREST_MIPMAP_NEAREST,[NE]:B.NEAREST_MIPMAP_LINEAR,[mg]:B.LINEAR,[Le]:B.LINEAR_MIPMAP_NEAREST,[aB]:B.LINEAR_MIPMAP_LINEAR},PA={[pD]:B.NEVER,[VD]:B.ALWAYS,[mD]:B.LESS,[Ze]:B.LEQUAL,[qD]:B.EQUAL,[TD]:B.GEQUAL,[xD]:B.GREATER,[bD]:B.NOTEQUAL};function jA(m,k,AA){if(AA?(B.texParameteri(m,B.TEXTURE_WRAP_S,GA[k.wrapS]),B.texParameteri(m,B.TEXTURE_WRAP_T,GA[k.wrapT]),(m===B.TEXTURE_3D||m===B.TEXTURE_2D_ARRAY)&&B.texParameteri(m,B.TEXTURE_WRAP_R,GA[k.wrapR]),B.texParameteri(m,B.TEXTURE_MAG_FILTER,qA[k.magFilter]),B.texParameteri(m,B.TEXTURE_MIN_FILTER,qA[k.minFilter])):(B.texParameteri(m,B.TEXTURE_WRAP_S,B.CLAMP_TO_EDGE),B.texParameteri(m,B.TEXTURE_WRAP_T,B.CLAMP_TO_EDGE),(m===B.TEXTURE_3D||m===B.TEXTURE_2D_ARRAY)&&B.texParameteri(m,B.TEXTURE_WRAP_R,B.CLAMP_TO_EDGE),(k.wrapS!==Xg||k.wrapT!==Xg)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),B.texParameteri(m,B.TEXTURE_MAG_FILTER,x(k.magFilter)),B.texParameteri(m,B.TEXTURE_MIN_FILTER,x(k.minFilter)),k.minFilter!==yg&&k.minFilter!==mg&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),k.compareFunction&&(B.texParameteri(m,B.TEXTURE_COMPARE_MODE,B.COMPARE_REF_TO_TEXTURE),B.texParameteri(m,B.TEXTURE_COMPARE_FUNC,PA[k.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){const lA=A.get("EXT_texture_filter_anisotropic");if(k.magFilter===yg||k.minFilter!==NE&&k.minFilter!==aB||k.type===MC&&A.has("OES_texture_float_linear")===!1||o===!1&&k.type===UQ&&A.has("OES_texture_half_float_linear")===!1)return;(k.anisotropy>1||g.get(k).__currentAnisotropy)&&(B.texParameterf(m,lA.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(k.anisotropy,C.getMaxAnisotropy())),g.get(k).__currentAnisotropy=k.anisotropy)}}function eI(m,k){let AA=!1;m.__webglInit===void 0&&(m.__webglInit=!0,k.addEventListener("dispose",DA));const lA=k.source;let yA=G.get(lA);yA===void 0&&(yA={},G.set(lA,yA));const NA=FA(k);if(NA!==m.__cacheKey){yA[NA]===void 0&&(yA[NA]={texture:B.createTexture(),usedTimes:0},i.memory.textures++,AA=!0),yA[NA].usedTimes++;const OA=yA[m.__cacheKey];OA!==void 0&&(yA[m.__cacheKey].usedTimes--,OA.usedTimes===0&&O(k)),m.__cacheKey=NA,m.__webglTexture=yA[NA].texture}return AA}function xA(m,k,AA){let lA=B.TEXTURE_2D;(k.isDataArrayTexture||k.isCompressedArrayTexture)&&(lA=B.TEXTURE_2D_ARRAY),k.isData3DTexture&&(lA=B.TEXTURE_3D);const yA=eI(m,k),NA=k.source;I.bindTexture(lA,m.__webglTexture,B.TEXTURE0+AA);const OA=g.get(NA);if(NA.version!==OA.__version||yA===!0){I.activeTexture(B.TEXTURE0+AA);const KA=_I.getPrimaries(_I.workingColorSpace),pA=k.colorSpace===jg?null:_I.getPrimaries(k.colorSpace),QI=k.colorSpace===jg||KA===pA?B.NONE:B.BROWSER_DEFAULT_WEBGL;B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment),B.pixelStorei(B.UNPACK_COLORSPACE_CONVERSION_WEBGL,QI);const oI=q(k)&&f(k.image)===!1;let MA=K(k.image,oI,!1,D);MA=eg(k,MA);const WI=f(MA)||o,ZA=Q.convert(k.format,k.colorSpace);let EI=Q.convert(k.type),_A=BA(k.internalFormat,ZA,EI,k.colorSpace,k.isVideoTexture);jA(lA,k,WI);let RA;const RI=k.mipmaps,V=o&&k.isVideoTexture!==!0&&_A!==be,LA=OA.__version===void 0||yA===!0,nA=d(k,MA,WI);if(k.isDepthTexture)_A=B.DEPTH_COMPONENT,o?k.type===MC?_A=B.DEPTH_COMPONENT32F:k.type===WC?_A=B.DEPTH_COMPONENT24:k.type===eB?_A=B.DEPTH24_STENCIL8:_A=B.DEPTH_COMPONENT16:k.type===MC&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),k.format===sB&&_A===B.DEPTH_COMPONENT&&k.type!==go&&k.type!==WC&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),k.type=WC,EI=Q.convert(k.type)),k.format===XB&&_A===B.DEPTH_COMPONENT&&(_A=B.DEPTH_STENCIL,k.type!==eB&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),k.type=eB,EI=Q.convert(k.type))),LA&&(V?I.texStorage2D(B.TEXTURE_2D,1,_A,MA.width,MA.height):I.texImage2D(B.TEXTURE_2D,0,_A,MA.width,MA.height,0,ZA,EI,null));else if(k.isDataTexture)if(RI.length>0&&WI){V&&LA&&I.texStorage2D(B.TEXTURE_2D,nA,_A,RI[0].width,RI[0].height);for(let P=0,dA=RI.length;P<dA;P++)RA=RI[P],V?I.texSubImage2D(B.TEXTURE_2D,P,0,0,RA.width,RA.height,ZA,EI,RA.data):I.texImage2D(B.TEXTURE_2D,P,_A,RA.width,RA.height,0,ZA,EI,RA.data);k.generateMipmaps=!1}else V?(LA&&I.texStorage2D(B.TEXTURE_2D,nA,_A,MA.width,MA.height),I.texSubImage2D(B.TEXTURE_2D,0,0,0,MA.width,MA.height,ZA,EI,MA.data)):I.texImage2D(B.TEXTURE_2D,0,_A,MA.width,MA.height,0,ZA,EI,MA.data);else if(k.isCompressedTexture)if(k.isCompressedArrayTexture){V&&LA&&I.texStorage3D(B.TEXTURE_2D_ARRAY,nA,_A,RI[0].width,RI[0].height,MA.depth);for(let P=0,dA=RI.length;P<dA;P++)RA=RI[P],k.format!==Pg?ZA!==null?V?I.compressedTexSubImage3D(B.TEXTURE_2D_ARRAY,P,0,0,0,RA.width,RA.height,MA.depth,ZA,RA.data,0,0):I.compressedTexImage3D(B.TEXTURE_2D_ARRAY,P,_A,RA.width,RA.height,MA.depth,0,RA.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?I.texSubImage3D(B.TEXTURE_2D_ARRAY,P,0,0,0,RA.width,RA.height,MA.depth,ZA,EI,RA.data):I.texImage3D(B.TEXTURE_2D_ARRAY,P,_A,RA.width,RA.height,MA.depth,0,ZA,EI,RA.data)}else{V&&LA&&I.texStorage2D(B.TEXTURE_2D,nA,_A,RI[0].width,RI[0].height);for(let P=0,dA=RI.length;P<dA;P++)RA=RI[P],k.format!==Pg?ZA!==null?V?I.compressedTexSubImage2D(B.TEXTURE_2D,P,0,0,RA.width,RA.height,ZA,RA.data):I.compressedTexImage2D(B.TEXTURE_2D,P,_A,RA.width,RA.height,0,RA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?I.texSubImage2D(B.TEXTURE_2D,P,0,0,RA.width,RA.height,ZA,EI,RA.data):I.texImage2D(B.TEXTURE_2D,P,_A,RA.width,RA.height,0,ZA,EI,RA.data)}else if(k.isDataArrayTexture)V?(LA&&I.texStorage3D(B.TEXTURE_2D_ARRAY,nA,_A,MA.width,MA.height,MA.depth),I.texSubImage3D(B.TEXTURE_2D_ARRAY,0,0,0,0,MA.width,MA.height,MA.depth,ZA,EI,MA.data)):I.texImage3D(B.TEXTURE_2D_ARRAY,0,_A,MA.width,MA.height,MA.depth,0,ZA,EI,MA.data);else if(k.isData3DTexture)V?(LA&&I.texStorage3D(B.TEXTURE_3D,nA,_A,MA.width,MA.height,MA.depth),I.texSubImage3D(B.TEXTURE_3D,0,0,0,0,MA.width,MA.height,MA.depth,ZA,EI,MA.data)):I.texImage3D(B.TEXTURE_3D,0,_A,MA.width,MA.height,MA.depth,0,ZA,EI,MA.data);else if(k.isFramebufferTexture){if(LA)if(V)I.texStorage2D(B.TEXTURE_2D,nA,_A,MA.width,MA.height);else{let P=MA.width,dA=MA.height;for(let XA=0;XA<nA;XA++)I.texImage2D(B.TEXTURE_2D,XA,_A,P,dA,0,ZA,EI,null),P>>=1,dA>>=1}}else if(RI.length>0&&WI){V&&LA&&I.texStorage2D(B.TEXTURE_2D,nA,_A,RI[0].width,RI[0].height);for(let P=0,dA=RI.length;P<dA;P++)RA=RI[P],V?I.texSubImage2D(B.TEXTURE_2D,P,0,0,ZA,EI,RA):I.texImage2D(B.TEXTURE_2D,P,_A,ZA,EI,RA);k.generateMipmaps=!1}else V?(LA&&I.texStorage2D(B.TEXTURE_2D,nA,_A,MA.width,MA.height),I.texSubImage2D(B.TEXTURE_2D,0,0,0,ZA,EI,MA)):I.texImage2D(B.TEXTURE_2D,0,_A,ZA,EI,MA);b(k,WI)&&T(lA),OA.__version=NA.version,k.onUpdate&&k.onUpdate(k)}m.__version=k.version}function TA(m,k,AA){if(k.image.length!==6)return;const lA=eI(m,k),yA=k.source;I.bindTexture(B.TEXTURE_CUBE_MAP,m.__webglTexture,B.TEXTURE0+AA);const NA=g.get(yA);if(yA.version!==NA.__version||lA===!0){I.activeTexture(B.TEXTURE0+AA);const OA=_I.getPrimaries(_I.workingColorSpace),KA=k.colorSpace===jg?null:_I.getPrimaries(k.colorSpace),pA=k.colorSpace===jg||OA===KA?B.NONE:B.BROWSER_DEFAULT_WEBGL;B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment),B.pixelStorei(B.UNPACK_COLORSPACE_CONVERSION_WEBGL,pA);const QI=k.isCompressedTexture||k.image[0].isCompressedTexture,oI=k.image[0]&&k.image[0].isDataTexture,MA=[];for(let P=0;P<6;P++)!QI&&!oI?MA[P]=K(k.image[P],!1,!0,s):MA[P]=oI?k.image[P].image:k.image[P],MA[P]=eg(k,MA[P]);const WI=MA[0],ZA=f(WI)||o,EI=Q.convert(k.format,k.colorSpace),_A=Q.convert(k.type),RA=BA(k.internalFormat,EI,_A,k.colorSpace),RI=o&&k.isVideoTexture!==!0,V=NA.__version===void 0||lA===!0;let LA=d(k,WI,ZA);jA(B.TEXTURE_CUBE_MAP,k,ZA);let nA;if(QI){RI&&V&&I.texStorage2D(B.TEXTURE_CUBE_MAP,LA,RA,WI.width,WI.height);for(let P=0;P<6;P++){nA=MA[P].mipmaps;for(let dA=0;dA<nA.length;dA++){const XA=nA[dA];k.format!==Pg?EI!==null?RI?I.compressedTexSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+P,dA,0,0,XA.width,XA.height,EI,XA.data):I.compressedTexImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+P,dA,RA,XA.width,XA.height,0,XA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):RI?I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+P,dA,0,0,XA.width,XA.height,EI,_A,XA.data):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+P,dA,RA,XA.width,XA.height,0,EI,_A,XA.data)}}}else{nA=k.mipmaps,RI&&V&&(nA.length>0&&LA++,I.texStorage2D(B.TEXTURE_CUBE_MAP,LA,RA,MA[0].width,MA[0].height));for(let P=0;P<6;P++)if(oI){RI?I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,MA[P].width,MA[P].height,EI,_A,MA[P].data):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,RA,MA[P].width,MA[P].height,0,EI,_A,MA[P].data);for(let dA=0;dA<nA.length;dA++){const fI=nA[dA].image[P].image;RI?I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+P,dA+1,0,0,fI.width,fI.height,EI,_A,fI.data):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+P,dA+1,RA,fI.width,fI.height,0,EI,_A,fI.data)}}else{RI?I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,EI,_A,MA[P]):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,RA,EI,_A,MA[P]);for(let dA=0;dA<nA.length;dA++){const XA=nA[dA];RI?I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+P,dA+1,0,0,EI,_A,XA.image[P]):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+P,dA+1,RA,EI,_A,XA.image[P])}}}b(k,ZA)&&T(B.TEXTURE_CUBE_MAP),NA.__version=yA.version,k.onUpdate&&k.onUpdate(k)}m.__version=k.version}function gI(m,k,AA,lA,yA,NA){const OA=Q.convert(AA.format,AA.colorSpace),KA=Q.convert(AA.type),pA=BA(AA.internalFormat,OA,KA,AA.colorSpace);if(!g.get(k).__hasExternalTextures){const oI=Math.max(1,k.width>>NA),MA=Math.max(1,k.height>>NA);yA===B.TEXTURE_3D||yA===B.TEXTURE_2D_ARRAY?I.texImage3D(yA,NA,pA,oI,MA,k.depth,0,OA,KA,null):I.texImage2D(yA,NA,pA,oI,MA,0,OA,KA,null)}I.bindFramebuffer(B.FRAMEBUFFER,m),mI(k)?r.framebufferTexture2DMultisampleEXT(B.FRAMEBUFFER,lA,yA,g.get(AA).__webglTexture,0,iI(k)):(yA===B.TEXTURE_2D||yA>=B.TEXTURE_CUBE_MAP_POSITIVE_X&&yA<=B.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&B.framebufferTexture2D(B.FRAMEBUFFER,lA,yA,g.get(AA).__webglTexture,NA),I.bindFramebuffer(B.FRAMEBUFFER,null)}function _(m,k,AA){if(B.bindRenderbuffer(B.RENDERBUFFER,m),k.depthBuffer&&!k.stencilBuffer){let lA=o===!0?B.DEPTH_COMPONENT24:B.DEPTH_COMPONENT16;if(AA||mI(k)){const yA=k.depthTexture;yA&&yA.isDepthTexture&&(yA.type===MC?lA=B.DEPTH_COMPONENT32F:yA.type===WC&&(lA=B.DEPTH_COMPONENT24));const NA=iI(k);mI(k)?r.renderbufferStorageMultisampleEXT(B.RENDERBUFFER,NA,lA,k.width,k.height):B.renderbufferStorageMultisample(B.RENDERBUFFER,NA,lA,k.width,k.height)}else B.renderbufferStorage(B.RENDERBUFFER,lA,k.width,k.height);B.framebufferRenderbuffer(B.FRAMEBUFFER,B.DEPTH_ATTACHMENT,B.RENDERBUFFER,m)}else if(k.depthBuffer&&k.stencilBuffer){const lA=iI(k);AA&&mI(k)===!1?B.renderbufferStorageMultisample(B.RENDERBUFFER,lA,B.DEPTH24_STENCIL8,k.width,k.height):mI(k)?r.renderbufferStorageMultisampleEXT(B.RENDERBUFFER,lA,B.DEPTH24_STENCIL8,k.width,k.height):B.renderbufferStorage(B.RENDERBUFFER,B.DEPTH_STENCIL,k.width,k.height),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.DEPTH_STENCIL_ATTACHMENT,B.RENDERBUFFER,m)}else{const lA=k.isWebGLMultipleRenderTargets===!0?k.texture:[k.texture];for(let yA=0;yA<lA.length;yA++){const NA=lA[yA],OA=Q.convert(NA.format,NA.colorSpace),KA=Q.convert(NA.type),pA=BA(NA.internalFormat,OA,KA,NA.colorSpace),QI=iI(k);AA&&mI(k)===!1?B.renderbufferStorageMultisample(B.RENDERBUFFER,QI,pA,k.width,k.height):mI(k)?r.renderbufferStorageMultisampleEXT(B.RENDERBUFFER,QI,pA,k.width,k.height):B.renderbufferStorage(B.RENDERBUFFER,pA,k.width,k.height)}}B.bindRenderbuffer(B.RENDERBUFFER,null)}function UA(m,k){if(k&&k.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(B.FRAMEBUFFER,m),!(k.depthTexture&&k.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!g.get(k.depthTexture).__webglTexture||k.depthTexture.image.width!==k.width||k.depthTexture.image.height!==k.height)&&(k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0),cA(k.depthTexture,0);const lA=g.get(k.depthTexture).__webglTexture,yA=iI(k);if(k.depthTexture.format===sB)mI(k)?r.framebufferTexture2DMultisampleEXT(B.FRAMEBUFFER,B.DEPTH_ATTACHMENT,B.TEXTURE_2D,lA,0,yA):B.framebufferTexture2D(B.FRAMEBUFFER,B.DEPTH_ATTACHMENT,B.TEXTURE_2D,lA,0);else if(k.depthTexture.format===XB)mI(k)?r.framebufferTexture2DMultisampleEXT(B.FRAMEBUFFER,B.DEPTH_STENCIL_ATTACHMENT,B.TEXTURE_2D,lA,0,yA):B.framebufferTexture2D(B.FRAMEBUFFER,B.DEPTH_STENCIL_ATTACHMENT,B.TEXTURE_2D,lA,0);else throw new Error("Unknown depthTexture format")}function WA(m){const k=g.get(m),AA=m.isWebGLCubeRenderTarget===!0;if(m.depthTexture&&!k.__autoAllocateDepthBuffer){if(AA)throw new Error("target.depthTexture not supported in Cube render targets");UA(k.__webglFramebuffer,m)}else if(AA){k.__webglDepthbuffer=[];for(let lA=0;lA<6;lA++)I.bindFramebuffer(B.FRAMEBUFFER,k.__webglFramebuffer[lA]),k.__webglDepthbuffer[lA]=B.createRenderbuffer(),_(k.__webglDepthbuffer[lA],m,!1)}else I.bindFramebuffer(B.FRAMEBUFFER,k.__webglFramebuffer),k.__webglDepthbuffer=B.createRenderbuffer(),_(k.__webglDepthbuffer,m,!1);I.bindFramebuffer(B.FRAMEBUFFER,null)}function cI(m,k,AA){const lA=g.get(m);k!==void 0&&gI(lA.__webglFramebuffer,m,m.texture,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,0),AA!==void 0&&WA(m)}function zA(m){const k=m.texture,AA=g.get(m),lA=g.get(k);m.addEventListener("dispose",hA),m.isWebGLMultipleRenderTargets!==!0&&(lA.__webglTexture===void 0&&(lA.__webglTexture=B.createTexture()),lA.__version=k.version,i.memory.textures++);const yA=m.isWebGLCubeRenderTarget===!0,NA=m.isWebGLMultipleRenderTargets===!0,OA=f(m)||o;if(yA){AA.__webglFramebuffer=[];for(let KA=0;KA<6;KA++)if(o&&k.mipmaps&&k.mipmaps.length>0){AA.__webglFramebuffer[KA]=[];for(let pA=0;pA<k.mipmaps.length;pA++)AA.__webglFramebuffer[KA][pA]=B.createFramebuffer()}else AA.__webglFramebuffer[KA]=B.createFramebuffer()}else{if(o&&k.mipmaps&&k.mipmaps.length>0){AA.__webglFramebuffer=[];for(let KA=0;KA<k.mipmaps.length;KA++)AA.__webglFramebuffer[KA]=B.createFramebuffer()}else AA.__webglFramebuffer=B.createFramebuffer();if(NA)if(C.drawBuffers){const KA=m.texture;for(let pA=0,QI=KA.length;pA<QI;pA++){const oI=g.get(KA[pA]);oI.__webglTexture===void 0&&(oI.__webglTexture=B.createTexture(),i.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&m.samples>0&&mI(m)===!1){const KA=NA?k:[k];AA.__webglMultisampledFramebuffer=B.createFramebuffer(),AA.__webglColorRenderbuffer=[],I.bindFramebuffer(B.FRAMEBUFFER,AA.__webglMultisampledFramebuffer);for(let pA=0;pA<KA.length;pA++){const QI=KA[pA];AA.__webglColorRenderbuffer[pA]=B.createRenderbuffer(),B.bindRenderbuffer(B.RENDERBUFFER,AA.__webglColorRenderbuffer[pA]);const oI=Q.convert(QI.format,QI.colorSpace),MA=Q.convert(QI.type),WI=BA(QI.internalFormat,oI,MA,QI.colorSpace,m.isXRRenderTarget===!0),ZA=iI(m);B.renderbufferStorageMultisample(B.RENDERBUFFER,ZA,WI,m.width,m.height),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+pA,B.RENDERBUFFER,AA.__webglColorRenderbuffer[pA])}B.bindRenderbuffer(B.RENDERBUFFER,null),m.depthBuffer&&(AA.__webglDepthRenderbuffer=B.createRenderbuffer(),_(AA.__webglDepthRenderbuffer,m,!0)),I.bindFramebuffer(B.FRAMEBUFFER,null)}}if(yA){I.bindTexture(B.TEXTURE_CUBE_MAP,lA.__webglTexture),jA(B.TEXTURE_CUBE_MAP,k,OA);for(let KA=0;KA<6;KA++)if(o&&k.mipmaps&&k.mipmaps.length>0)for(let pA=0;pA<k.mipmaps.length;pA++)gI(AA.__webglFramebuffer[KA][pA],m,k,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+KA,pA);else gI(AA.__webglFramebuffer[KA],m,k,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+KA,0);b(k,OA)&&T(B.TEXTURE_CUBE_MAP),I.unbindTexture()}else if(NA){const KA=m.texture;for(let pA=0,QI=KA.length;pA<QI;pA++){const oI=KA[pA],MA=g.get(oI);I.bindTexture(B.TEXTURE_2D,MA.__webglTexture),jA(B.TEXTURE_2D,oI,OA),gI(AA.__webglFramebuffer,m,oI,B.COLOR_ATTACHMENT0+pA,B.TEXTURE_2D,0),b(oI,OA)&&T(B.TEXTURE_2D)}I.unbindTexture()}else{let KA=B.TEXTURE_2D;if((m.isWebGL3DRenderTarget||m.isWebGLArrayRenderTarget)&&(o?KA=m.isWebGL3DRenderTarget?B.TEXTURE_3D:B.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),I.bindTexture(KA,lA.__webglTexture),jA(KA,k,OA),o&&k.mipmaps&&k.mipmaps.length>0)for(let pA=0;pA<k.mipmaps.length;pA++)gI(AA.__webglFramebuffer[pA],m,k,B.COLOR_ATTACHMENT0,KA,pA);else gI(AA.__webglFramebuffer,m,k,B.COLOR_ATTACHMENT0,KA,0);b(k,OA)&&T(KA),I.unbindTexture()}m.depthBuffer&&WA(m)}function ZI(m){const k=f(m)||o,AA=m.isWebGLMultipleRenderTargets===!0?m.texture:[m.texture];for(let lA=0,yA=AA.length;lA<yA;lA++){const NA=AA[lA];if(b(NA,k)){const OA=m.isWebGLCubeRenderTarget?B.TEXTURE_CUBE_MAP:B.TEXTURE_2D,KA=g.get(NA).__webglTexture;I.bindTexture(OA,KA),T(OA),I.unbindTexture()}}}function CI(m){if(o&&m.samples>0&&mI(m)===!1){const k=m.isWebGLMultipleRenderTargets?m.texture:[m.texture],AA=m.width,lA=m.height;let yA=B.COLOR_BUFFER_BIT;const NA=[],OA=m.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT,KA=g.get(m),pA=m.isWebGLMultipleRenderTargets===!0;if(pA)for(let QI=0;QI<k.length;QI++)I.bindFramebuffer(B.FRAMEBUFFER,KA.__webglMultisampledFramebuffer),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+QI,B.RENDERBUFFER,null),I.bindFramebuffer(B.FRAMEBUFFER,KA.__webglFramebuffer),B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0+QI,B.TEXTURE_2D,null,0);I.bindFramebuffer(B.READ_FRAMEBUFFER,KA.__webglMultisampledFramebuffer),I.bindFramebuffer(B.DRAW_FRAMEBUFFER,KA.__webglFramebuffer);for(let QI=0;QI<k.length;QI++){NA.push(B.COLOR_ATTACHMENT0+QI),m.depthBuffer&&NA.push(OA);const oI=KA.__ignoreDepthValues!==void 0?KA.__ignoreDepthValues:!1;if(oI===!1&&(m.depthBuffer&&(yA|=B.DEPTH_BUFFER_BIT),m.stencilBuffer&&(yA|=B.STENCIL_BUFFER_BIT)),pA&&B.framebufferRenderbuffer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.RENDERBUFFER,KA.__webglColorRenderbuffer[QI]),oI===!0&&(B.invalidateFramebuffer(B.READ_FRAMEBUFFER,[OA]),B.invalidateFramebuffer(B.DRAW_FRAMEBUFFER,[OA])),pA){const MA=g.get(k[QI]).__webglTexture;B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,MA,0)}B.blitFramebuffer(0,0,AA,lA,0,0,AA,lA,yA,B.NEAREST),F&&B.invalidateFramebuffer(B.READ_FRAMEBUFFER,NA)}if(I.bindFramebuffer(B.READ_FRAMEBUFFER,null),I.bindFramebuffer(B.DRAW_FRAMEBUFFER,null),pA)for(let QI=0;QI<k.length;QI++){I.bindFramebuffer(B.FRAMEBUFFER,KA.__webglMultisampledFramebuffer),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+QI,B.RENDERBUFFER,KA.__webglColorRenderbuffer[QI]);const oI=g.get(k[QI]).__webglTexture;I.bindFramebuffer(B.FRAMEBUFFER,KA.__webglFramebuffer),B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0+QI,B.TEXTURE_2D,oI,0)}I.bindFramebuffer(B.DRAW_FRAMEBUFFER,KA.__webglMultisampledFramebuffer)}}function iI(m){return Math.min(n,m.samples)}function mI(m){const k=g.get(m);return o&&m.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&k.__useRenderToTexture!==!1}function vI(m){const k=i.render.frame;l.get(m)!==k&&(l.set(m,k),m.update())}function eg(m,k){const AA=m.colorSpace,lA=m.format,yA=m.type;return m.isCompressedTexture===!0||m.isVideoTexture===!0||m.format===Ti||AA!==Kg&&AA!==jg&&(_I.getTransfer(AA)===ig?o===!1?A.has("EXT_sRGB")===!0&&lA===Pg?(m.format=Ti,m.minFilter=mg,m.generateMipmaps=!1):k=Xe.sRGBToLinear(k):(lA!==Pg||yA!==vC)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",AA)),k}this.allocateTextureUnit=kA,this.resetTextureUnits=eA,this.setTexture2D=cA,this.setTexture2DArray=JA,this.setTexture3D=fA,this.setTextureCube=iA,this.rebindTextures=cI,this.setupRenderTarget=zA,this.updateRenderTargetMipmap=ZI,this.updateMultisampleRenderTarget=CI,this.setupDepthRenderbuffer=WA,this.setupFrameBufferTexture=gI,this.useMultisampledRTT=mI}function Bc(B,A,I){const g=I.isWebGL2;function C(Q,i=jg){let o;const e=_I.getTransfer(i);if(Q===vC)return B.UNSIGNED_BYTE;if(Q===He)return B.UNSIGNED_SHORT_4_4_4_4;if(Q===pe)return B.UNSIGNED_SHORT_5_5_5_1;if(Q===ND)return B.BYTE;if(Q===yD)return B.SHORT;if(Q===go)return B.UNSIGNED_SHORT;if(Q===ue)return B.INT;if(Q===WC)return B.UNSIGNED_INT;if(Q===MC)return B.FLOAT;if(Q===UQ)return g?B.HALF_FLOAT:(o=A.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(Q===MD)return B.ALPHA;if(Q===Pg)return B.RGBA;if(Q===lD)return B.LUMINANCE;if(Q===SD)return B.LUMINANCE_ALPHA;if(Q===sB)return B.DEPTH_COMPONENT;if(Q===XB)return B.DEPTH_STENCIL;if(Q===Ti)return o=A.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(Q===UD)return B.RED;if(Q===me)return B.RED_INTEGER;if(Q===KD)return B.RG;if(Q===qe)return B.RG_INTEGER;if(Q===xe)return B.RGBA_INTEGER;if(Q===PE||Q===jE||Q===zE||Q===_E)if(e===ig)if(o=A.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(Q===PE)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Q===jE)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Q===zE)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Q===_E)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=A.get("WEBGL_compressed_texture_s3tc"),o!==null){if(Q===PE)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Q===jE)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Q===zE)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Q===_E)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Q===Vo||Q===Wo||Q===Oo||Q===Zo)if(o=A.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(Q===Vo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Q===Wo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Q===Oo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Q===Zo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Q===be)return o=A.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(Q===vo||Q===Xo)if(o=A.get("WEBGL_compressed_texture_etc"),o!==null){if(Q===vo)return e===ig?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(Q===Xo)return e===ig?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(Q===Po||Q===jo||Q===zo||Q===_o||Q===$o||Q===At||Q===It||Q===gt||Q===Ct||Q===Bt||Q===Qt||Q===Et||Q===it||Q===ot)if(o=A.get("WEBGL_compressed_texture_astc"),o!==null){if(Q===Po)return e===ig?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Q===jo)return e===ig?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Q===zo)return e===ig?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Q===_o)return e===ig?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Q===$o)return e===ig?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Q===At)return e===ig?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Q===It)return e===ig?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Q===gt)return e===ig?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Q===Ct)return e===ig?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Q===Bt)return e===ig?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Q===Qt)return e===ig?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Q===Et)return e===ig?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Q===it)return e===ig?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Q===ot)return e===ig?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Q===$E||Q===tt||Q===et)if(o=A.get("EXT_texture_compression_bptc"),o!==null){if(Q===$E)return e===ig?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Q===tt)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Q===et)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Q===dD||Q===st||Q===at||Q===Dt)if(o=A.get("EXT_texture_compression_rgtc"),o!==null){if(Q===$E)return o.COMPRESSED_RED_RGTC1_EXT;if(Q===st)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Q===at)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Q===Dt)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return Q===eB?g?B.UNSIGNED_INT_24_8:(o=A.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):B[Q]!==void 0?B[Q]:null}return{convert:C}}class Qc extends Hg{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class SC extends Dg{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ec={type:"move"};class yi{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new SC,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new SC,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new SC,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const g of A.hand.values())this._getHandJoint(I,g)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let C=null,Q=null,i=null;const o=this._targetRay,e=this._grip,s=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(s&&A.hand){i=!0;for(const S of A.hand.values()){const G=I.getJointPose(S,g),w=this._getHandJoint(s,S);G!==null&&(w.matrix.fromArray(G.transform.matrix),w.matrix.decompose(w.position,w.rotation,w.scale),w.matrixWorldNeedsUpdate=!0,w.jointRadius=G.radius),w.visible=G!==null}const D=s.joints["index-finger-tip"],n=s.joints["thumb-tip"],r=D.position.distanceTo(n.position),F=.02,l=.005;s.inputState.pinching&&r>F+l?(s.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!s.inputState.pinching&&r<=F-l&&(s.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else e!==null&&A.gripSpace&&(Q=I.getPose(A.gripSpace,g),Q!==null&&(e.matrix.fromArray(Q.transform.matrix),e.matrix.decompose(e.position,e.rotation,e.scale),e.matrixWorldNeedsUpdate=!0,Q.linearVelocity?(e.hasLinearVelocity=!0,e.linearVelocity.copy(Q.linearVelocity)):e.hasLinearVelocity=!1,Q.angularVelocity?(e.hasAngularVelocity=!0,e.angularVelocity.copy(Q.angularVelocity)):e.hasAngularVelocity=!1));o!==null&&(C=I.getPose(A.targetRaySpace,g),C===null&&Q!==null&&(C=Q),C!==null&&(o.matrix.fromArray(C.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,C.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(C.linearVelocity)):o.hasLinearVelocity=!1,C.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(C.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ec)))}return o!==null&&(o.visible=C!==null),e!==null&&(e.visible=Q!==null),s!==null&&(s.visible=i!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const g=new SC;g.matrixAutoUpdate=!1,g.visible=!1,A.joints[I.jointName]=g,A.add(g)}return A.joints[I.jointName]}}class ic extends rB{constructor(A,I){super();const g=this;let C=null,Q=1,i=null,o="local-floor",e=1,s=null,D=null,n=null,r=null,F=null,l=null;const S=I.getContextAttributes();let G=null,w=null;const Y=[],K=[],f=new VI;let q=null;const b=new Hg;b.layers.enable(1),b.viewport=new Bg;const T=new Hg;T.layers.enable(2),T.viewport=new Bg;const BA=[b,T],d=new Qc;d.layers.enable(1),d.layers.enable(2);let x=null,DA=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(iA){let GA=Y[iA];return GA===void 0&&(GA=new yi,Y[iA]=GA),GA.getTargetRaySpace()},this.getControllerGrip=function(iA){let GA=Y[iA];return GA===void 0&&(GA=new yi,Y[iA]=GA),GA.getGripSpace()},this.getHand=function(iA){let GA=Y[iA];return GA===void 0&&(GA=new yi,Y[iA]=GA),GA.getHandSpace()};function hA(iA){const GA=K.indexOf(iA.inputSource);if(GA===-1)return;const qA=Y[GA];qA!==void 0&&(qA.update(iA.inputSource,iA.frame,s||i),qA.dispatchEvent({type:iA.type,data:iA.inputSource}))}function rA(){C.removeEventListener("select",hA),C.removeEventListener("selectstart",hA),C.removeEventListener("selectend",hA),C.removeEventListener("squeeze",hA),C.removeEventListener("squeezestart",hA),C.removeEventListener("squeezeend",hA),C.removeEventListener("end",rA),C.removeEventListener("inputsourceschange",O);for(let iA=0;iA<Y.length;iA++){const GA=K[iA];GA!==null&&(K[iA]=null,Y[iA].disconnect(GA))}x=null,DA=null,A.setRenderTarget(G),F=null,r=null,n=null,C=null,w=null,fA.stop(),g.isPresenting=!1,A.setPixelRatio(q),A.setSize(f.width,f.height,!1),g.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(iA){Q=iA,g.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(iA){o=iA,g.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s||i},this.setReferenceSpace=function(iA){s=iA},this.getBaseLayer=function(){return r!==null?r:F},this.getBinding=function(){return n},this.getFrame=function(){return l},this.getSession=function(){return C},this.setSession=async function(iA){if(C=iA,C!==null){if(G=A.getRenderTarget(),C.addEventListener("select",hA),C.addEventListener("selectstart",hA),C.addEventListener("selectend",hA),C.addEventListener("squeeze",hA),C.addEventListener("squeezestart",hA),C.addEventListener("squeezeend",hA),C.addEventListener("end",rA),C.addEventListener("inputsourceschange",O),S.xrCompatible!==!0&&await I.makeXRCompatible(),q=A.getPixelRatio(),A.getSize(f),C.renderState.layers===void 0||A.capabilities.isWebGL2===!1){const GA={antialias:C.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:Q};F=new XRWebGLLayer(C,I,GA),C.updateRenderState({baseLayer:F}),A.setPixelRatio(1),A.setSize(F.framebufferWidth,F.framebufferHeight,!1),w=new DB(F.framebufferWidth,F.framebufferHeight,{format:Pg,type:vC,colorSpace:A.outputColorSpace,stencilBuffer:S.stencil})}else{let GA=null,qA=null,PA=null;S.depth&&(PA=S.stencil?I.DEPTH24_STENCIL8:I.DEPTH_COMPONENT24,GA=S.stencil?XB:sB,qA=S.stencil?eB:WC);const jA={colorFormat:I.RGBA8,depthFormat:PA,scaleFactor:Q};n=new XRWebGLBinding(C,I),r=n.createProjectionLayer(jA),C.updateRenderState({layers:[r]}),A.setPixelRatio(1),A.setSize(r.textureWidth,r.textureHeight,!1),w=new DB(r.textureWidth,r.textureHeight,{format:Pg,type:vC,depthTexture:new Qs(r.textureWidth,r.textureHeight,qA,void 0,void 0,void 0,void 0,void 0,void 0,GA),stencilBuffer:S.stencil,colorSpace:A.outputColorSpace,samples:S.antialias?4:0});const eI=A.properties.get(w);eI.__ignoreDepthValues=r.ignoreDepthValues}w.isXRRenderTarget=!0,this.setFoveation(e),s=null,i=await C.requestReferenceSpace(o),fA.setContext(C),fA.start(),g.isPresenting=!0,g.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(C!==null)return C.environmentBlendMode};function O(iA){for(let GA=0;GA<iA.removed.length;GA++){const qA=iA.removed[GA],PA=K.indexOf(qA);PA>=0&&(K[PA]=null,Y[PA].disconnect(qA))}for(let GA=0;GA<iA.added.length;GA++){const qA=iA.added[GA];let PA=K.indexOf(qA);if(PA===-1){for(let eI=0;eI<Y.length;eI++)if(eI>=K.length){K.push(qA),PA=eI;break}else if(K[eI]===null){K[eI]=qA,PA=eI;break}if(PA===-1)break}const jA=Y[PA];jA&&jA.connect(qA)}}const EA=new Z,wA=new Z;function eA(iA,GA,qA){EA.setFromMatrixPosition(GA.matrixWorld),wA.setFromMatrixPosition(qA.matrixWorld);const PA=EA.distanceTo(wA),jA=GA.projectionMatrix.elements,eI=qA.projectionMatrix.elements,xA=jA[14]/(jA[10]-1),TA=jA[14]/(jA[10]+1),gI=(jA[9]+1)/jA[5],_=(jA[9]-1)/jA[5],UA=(jA[8]-1)/jA[0],WA=(eI[8]+1)/eI[0],cI=xA*UA,zA=xA*WA,ZI=PA/(-UA+WA),CI=ZI*-UA;GA.matrixWorld.decompose(iA.position,iA.quaternion,iA.scale),iA.translateX(CI),iA.translateZ(ZI),iA.matrixWorld.compose(iA.position,iA.quaternion,iA.scale),iA.matrixWorldInverse.copy(iA.matrixWorld).invert();const iI=xA+ZI,mI=TA+ZI,vI=cI-CI,eg=zA+(PA-CI),m=gI*TA/mI*iI,k=_*TA/mI*iI;iA.projectionMatrix.makePerspective(vI,eg,m,k,iI,mI),iA.projectionMatrixInverse.copy(iA.projectionMatrix).invert()}function kA(iA,GA){GA===null?iA.matrixWorld.copy(iA.matrix):iA.matrixWorld.multiplyMatrices(GA.matrixWorld,iA.matrix),iA.matrixWorldInverse.copy(iA.matrixWorld).invert()}this.updateCamera=function(iA){if(C===null)return;d.near=T.near=b.near=iA.near,d.far=T.far=b.far=iA.far,(x!==d.near||DA!==d.far)&&(C.updateRenderState({depthNear:d.near,depthFar:d.far}),x=d.near,DA=d.far);const GA=iA.parent,qA=d.cameras;kA(d,GA);for(let PA=0;PA<qA.length;PA++)kA(qA[PA],GA);qA.length===2?eA(d,b,T):d.projectionMatrix.copy(b.projectionMatrix),FA(iA,d,GA)};function FA(iA,GA,qA){qA===null?iA.matrix.copy(GA.matrixWorld):(iA.matrix.copy(qA.matrixWorld),iA.matrix.invert(),iA.matrix.multiply(GA.matrixWorld)),iA.matrix.decompose(iA.position,iA.quaternion,iA.scale),iA.updateMatrixWorld(!0),iA.projectionMatrix.copy(GA.projectionMatrix),iA.projectionMatrixInverse.copy(GA.projectionMatrixInverse),iA.isPerspectiveCamera&&(iA.fov=jB*2*Math.atan(1/iA.projectionMatrix.elements[5]),iA.zoom=1)}this.getCamera=function(){return d},this.getFoveation=function(){if(!(r===null&&F===null))return e},this.setFoveation=function(iA){e=iA,r!==null&&(r.fixedFoveation=iA),F!==null&&F.fixedFoveation!==void 0&&(F.fixedFoveation=iA)};let cA=null;function JA(iA,GA){if(D=GA.getViewerPose(s||i),l=GA,D!==null){const qA=D.views;F!==null&&(A.setRenderTargetFramebuffer(w,F.framebuffer),A.setRenderTarget(w));let PA=!1;qA.length!==d.cameras.length&&(d.cameras.length=0,PA=!0);for(let jA=0;jA<qA.length;jA++){const eI=qA[jA];let xA=null;if(F!==null)xA=F.getViewport(eI);else{const gI=n.getViewSubImage(r,eI);xA=gI.viewport,jA===0&&(A.setRenderTargetTextures(w,gI.colorTexture,r.ignoreDepthValues?void 0:gI.depthStencilTexture),A.setRenderTarget(w))}let TA=BA[jA];TA===void 0&&(TA=new Hg,TA.layers.enable(jA),TA.viewport=new Bg,BA[jA]=TA),TA.matrix.fromArray(eI.transform.matrix),TA.matrix.decompose(TA.position,TA.quaternion,TA.scale),TA.projectionMatrix.fromArray(eI.projectionMatrix),TA.projectionMatrixInverse.copy(TA.projectionMatrix).invert(),TA.viewport.set(xA.x,xA.y,xA.width,xA.height),jA===0&&(d.matrix.copy(TA.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale)),PA===!0&&d.cameras.push(TA)}}for(let qA=0;qA<Y.length;qA++){const PA=K[qA],jA=Y[qA];PA!==null&&jA!==void 0&&jA.update(PA,GA,s||i)}cA&&cA(iA,GA),GA.detectedPlanes&&g.dispatchEvent({type:"planesdetected",data:GA}),l=null}const fA=new Bs;fA.setAnimationLoop(JA),this.setAnimationLoop=function(iA){cA=iA},this.dispose=function(){}}}function oc(B,A){function I(G,w){G.matrixAutoUpdate===!0&&G.updateMatrix(),w.value.copy(G.matrix)}function g(G,w){w.color.getRGB(G.fogColor.value,Is(B)),w.isFog?(G.fogNear.value=w.near,G.fogFar.value=w.far):w.isFogExp2&&(G.fogDensity.value=w.density)}function C(G,w,Y,K,f){w.isMeshBasicMaterial||w.isMeshLambertMaterial?Q(G,w):w.isMeshToonMaterial?(Q(G,w),n(G,w)):w.isMeshPhongMaterial?(Q(G,w),D(G,w)):w.isMeshStandardMaterial?(Q(G,w),r(G,w),w.isMeshPhysicalMaterial&&F(G,w,f)):w.isMeshMatcapMaterial?(Q(G,w),l(G,w)):w.isMeshDepthMaterial?Q(G,w):w.isMeshDistanceMaterial?(Q(G,w),S(G,w)):w.isMeshNormalMaterial?Q(G,w):w.isLineBasicMaterial?(i(G,w),w.isLineDashedMaterial&&o(G,w)):w.isPointsMaterial?e(G,w,Y,K):w.isSpriteMaterial?s(G,w):w.isShadowMaterial?(G.color.value.copy(w.color),G.opacity.value=w.opacity):w.isShaderMaterial&&(w.uniformsNeedUpdate=!1)}function Q(G,w){G.opacity.value=w.opacity,w.color&&G.diffuse.value.copy(w.color),w.emissive&&G.emissive.value.copy(w.emissive).multiplyScalar(w.emissiveIntensity),w.map&&(G.map.value=w.map,I(w.map,G.mapTransform)),w.alphaMap&&(G.alphaMap.value=w.alphaMap,I(w.alphaMap,G.alphaMapTransform)),w.bumpMap&&(G.bumpMap.value=w.bumpMap,I(w.bumpMap,G.bumpMapTransform),G.bumpScale.value=w.bumpScale,w.side===qg&&(G.bumpScale.value*=-1)),w.normalMap&&(G.normalMap.value=w.normalMap,I(w.normalMap,G.normalMapTransform),G.normalScale.value.copy(w.normalScale),w.side===qg&&G.normalScale.value.negate()),w.displacementMap&&(G.displacementMap.value=w.displacementMap,I(w.displacementMap,G.displacementMapTransform),G.displacementScale.value=w.displacementScale,G.displacementBias.value=w.displacementBias),w.emissiveMap&&(G.emissiveMap.value=w.emissiveMap,I(w.emissiveMap,G.emissiveMapTransform)),w.specularMap&&(G.specularMap.value=w.specularMap,I(w.specularMap,G.specularMapTransform)),w.alphaTest>0&&(G.alphaTest.value=w.alphaTest);const Y=A.get(w).envMap;if(Y&&(G.envMap.value=Y,G.flipEnvMap.value=Y.isCubeTexture&&Y.isRenderTargetTexture===!1?-1:1,G.reflectivity.value=w.reflectivity,G.ior.value=w.ior,G.refractionRatio.value=w.refractionRatio),w.lightMap){G.lightMap.value=w.lightMap;const K=B._useLegacyLights===!0?Math.PI:1;G.lightMapIntensity.value=w.lightMapIntensity*K,I(w.lightMap,G.lightMapTransform)}w.aoMap&&(G.aoMap.value=w.aoMap,G.aoMapIntensity.value=w.aoMapIntensity,I(w.aoMap,G.aoMapTransform))}function i(G,w){G.diffuse.value.copy(w.color),G.opacity.value=w.opacity,w.map&&(G.map.value=w.map,I(w.map,G.mapTransform))}function o(G,w){G.dashSize.value=w.dashSize,G.totalSize.value=w.dashSize+w.gapSize,G.scale.value=w.scale}function e(G,w,Y,K){G.diffuse.value.copy(w.color),G.opacity.value=w.opacity,G.size.value=w.size*Y,G.scale.value=K*.5,w.map&&(G.map.value=w.map,I(w.map,G.uvTransform)),w.alphaMap&&(G.alphaMap.value=w.alphaMap,I(w.alphaMap,G.alphaMapTransform)),w.alphaTest>0&&(G.alphaTest.value=w.alphaTest)}function s(G,w){G.diffuse.value.copy(w.color),G.opacity.value=w.opacity,G.rotation.value=w.rotation,w.map&&(G.map.value=w.map,I(w.map,G.mapTransform)),w.alphaMap&&(G.alphaMap.value=w.alphaMap,I(w.alphaMap,G.alphaMapTransform)),w.alphaTest>0&&(G.alphaTest.value=w.alphaTest)}function D(G,w){G.specular.value.copy(w.specular),G.shininess.value=Math.max(w.shininess,1e-4)}function n(G,w){w.gradientMap&&(G.gradientMap.value=w.gradientMap)}function r(G,w){G.metalness.value=w.metalness,w.metalnessMap&&(G.metalnessMap.value=w.metalnessMap,I(w.metalnessMap,G.metalnessMapTransform)),G.roughness.value=w.roughness,w.roughnessMap&&(G.roughnessMap.value=w.roughnessMap,I(w.roughnessMap,G.roughnessMapTransform)),A.get(w).envMap&&(G.envMapIntensity.value=w.envMapIntensity)}function F(G,w,Y){G.ior.value=w.ior,w.sheen>0&&(G.sheenColor.value.copy(w.sheenColor).multiplyScalar(w.sheen),G.sheenRoughness.value=w.sheenRoughness,w.sheenColorMap&&(G.sheenColorMap.value=w.sheenColorMap,I(w.sheenColorMap,G.sheenColorMapTransform)),w.sheenRoughnessMap&&(G.sheenRoughnessMap.value=w.sheenRoughnessMap,I(w.sheenRoughnessMap,G.sheenRoughnessMapTransform))),w.clearcoat>0&&(G.clearcoat.value=w.clearcoat,G.clearcoatRoughness.value=w.clearcoatRoughness,w.clearcoatMap&&(G.clearcoatMap.value=w.clearcoatMap,I(w.clearcoatMap,G.clearcoatMapTransform)),w.clearcoatRoughnessMap&&(G.clearcoatRoughnessMap.value=w.clearcoatRoughnessMap,I(w.clearcoatRoughnessMap,G.clearcoatRoughnessMapTransform)),w.clearcoatNormalMap&&(G.clearcoatNormalMap.value=w.clearcoatNormalMap,I(w.clearcoatNormalMap,G.clearcoatNormalMapTransform),G.clearcoatNormalScale.value.copy(w.clearcoatNormalScale),w.side===qg&&G.clearcoatNormalScale.value.negate())),w.iridescence>0&&(G.iridescence.value=w.iridescence,G.iridescenceIOR.value=w.iridescenceIOR,G.iridescenceThicknessMinimum.value=w.iridescenceThicknessRange[0],G.iridescenceThicknessMaximum.value=w.iridescenceThicknessRange[1],w.iridescenceMap&&(G.iridescenceMap.value=w.iridescenceMap,I(w.iridescenceMap,G.iridescenceMapTransform)),w.iridescenceThicknessMap&&(G.iridescenceThicknessMap.value=w.iridescenceThicknessMap,I(w.iridescenceThicknessMap,G.iridescenceThicknessMapTransform))),w.transmission>0&&(G.transmission.value=w.transmission,G.transmissionSamplerMap.value=Y.texture,G.transmissionSamplerSize.value.set(Y.width,Y.height),w.transmissionMap&&(G.transmissionMap.value=w.transmissionMap,I(w.transmissionMap,G.transmissionMapTransform)),G.thickness.value=w.thickness,w.thicknessMap&&(G.thicknessMap.value=w.thicknessMap,I(w.thicknessMap,G.thicknessMapTransform)),G.attenuationDistance.value=w.attenuationDistance,G.attenuationColor.value.copy(w.attenuationColor)),w.anisotropy>0&&(G.anisotropyVector.value.set(w.anisotropy*Math.cos(w.anisotropyRotation),w.anisotropy*Math.sin(w.anisotropyRotation)),w.anisotropyMap&&(G.anisotropyMap.value=w.anisotropyMap,I(w.anisotropyMap,G.anisotropyMapTransform))),G.specularIntensity.value=w.specularIntensity,G.specularColor.value.copy(w.specularColor),w.specularColorMap&&(G.specularColorMap.value=w.specularColorMap,I(w.specularColorMap,G.specularColorMapTransform)),w.specularIntensityMap&&(G.specularIntensityMap.value=w.specularIntensityMap,I(w.specularIntensityMap,G.specularIntensityMapTransform))}function l(G,w){w.matcap&&(G.matcap.value=w.matcap)}function S(G,w){const Y=A.get(w).light;G.referencePosition.value.setFromMatrixPosition(Y.matrixWorld),G.nearDistance.value=Y.shadow.camera.near,G.farDistance.value=Y.shadow.camera.far}return{refreshFogUniforms:g,refreshMaterialUniforms:C}}function tc(B,A,I,g){let C={},Q={},i=[];const o=I.isWebGL2?B.getParameter(B.MAX_UNIFORM_BUFFER_BINDINGS):0;function e(Y,K){const f=K.program;g.uniformBlockBinding(Y,f)}function s(Y,K){let f=C[Y.id];f===void 0&&(l(Y),f=D(Y),C[Y.id]=f,Y.addEventListener("dispose",G));const q=K.program;g.updateUBOMapping(Y,q);const b=A.render.frame;Q[Y.id]!==b&&(r(Y),Q[Y.id]=b)}function D(Y){const K=n();Y.__bindingPointIndex=K;const f=B.createBuffer(),q=Y.__size,b=Y.usage;return B.bindBuffer(B.UNIFORM_BUFFER,f),B.bufferData(B.UNIFORM_BUFFER,q,b),B.bindBuffer(B.UNIFORM_BUFFER,null),B.bindBufferBase(B.UNIFORM_BUFFER,K,f),f}function n(){for(let Y=0;Y<o;Y++)if(i.indexOf(Y)===-1)return i.push(Y),Y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function r(Y){const K=C[Y.id],f=Y.uniforms,q=Y.__cache;B.bindBuffer(B.UNIFORM_BUFFER,K);for(let b=0,T=f.length;b<T;b++){const BA=f[b];if(F(BA,b,q)===!0){const d=BA.__offset,x=Array.isArray(BA.value)?BA.value:[BA.value];let DA=0;for(let hA=0;hA<x.length;hA++){const rA=x[hA],O=S(rA);typeof rA=="number"?(BA.__data[0]=rA,B.bufferSubData(B.UNIFORM_BUFFER,d+DA,BA.__data)):rA.isMatrix3?(BA.__data[0]=rA.elements[0],BA.__data[1]=rA.elements[1],BA.__data[2]=rA.elements[2],BA.__data[3]=rA.elements[0],BA.__data[4]=rA.elements[3],BA.__data[5]=rA.elements[4],BA.__data[6]=rA.elements[5],BA.__data[7]=rA.elements[0],BA.__data[8]=rA.elements[6],BA.__data[9]=rA.elements[7],BA.__data[10]=rA.elements[8],BA.__data[11]=rA.elements[0]):(rA.toArray(BA.__data,DA),DA+=O.storage/Float32Array.BYTES_PER_ELEMENT)}B.bufferSubData(B.UNIFORM_BUFFER,d,BA.__data)}}B.bindBuffer(B.UNIFORM_BUFFER,null)}function F(Y,K,f){const q=Y.value;if(f[K]===void 0){if(typeof q=="number")f[K]=q;else{const b=Array.isArray(q)?q:[q],T=[];for(let BA=0;BA<b.length;BA++)T.push(b[BA].clone());f[K]=T}return!0}else if(typeof q=="number"){if(f[K]!==q)return f[K]=q,!0}else{const b=Array.isArray(f[K])?f[K]:[f[K]],T=Array.isArray(q)?q:[q];for(let BA=0;BA<b.length;BA++){const d=b[BA];if(d.equals(T[BA])===!1)return d.copy(T[BA]),!0}}return!1}function l(Y){const K=Y.uniforms;let f=0;const q=16;let b=0;for(let T=0,BA=K.length;T<BA;T++){const d=K[T],x={boundary:0,storage:0},DA=Array.isArray(d.value)?d.value:[d.value];for(let hA=0,rA=DA.length;hA<rA;hA++){const O=DA[hA],EA=S(O);x.boundary+=EA.boundary,x.storage+=EA.storage}if(d.__data=new Float32Array(x.storage/Float32Array.BYTES_PER_ELEMENT),d.__offset=f,T>0){b=f%q;const hA=q-b;b!==0&&hA-x.boundary<0&&(f+=q-b,d.__offset=f)}f+=x.storage}return b=f%q,b>0&&(f+=q-b),Y.__size=f,Y.__cache={},this}function S(Y){const K={boundary:0,storage:0};return typeof Y=="number"?(K.boundary=4,K.storage=4):Y.isVector2?(K.boundary=8,K.storage=8):Y.isVector3||Y.isColor?(K.boundary=16,K.storage=12):Y.isVector4?(K.boundary=16,K.storage=16):Y.isMatrix3?(K.boundary=48,K.storage=48):Y.isMatrix4?(K.boundary=64,K.storage=64):Y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",Y),K}function G(Y){const K=Y.target;K.removeEventListener("dispose",G);const f=i.indexOf(K.__bindingPointIndex);i.splice(f,1),B.deleteBuffer(C[K.id]),delete C[K.id],delete Q[K.id]}function w(){for(const Y in C)B.deleteBuffer(C[Y]);i=[],C={},Q={}}return{bind:e,update:s,dispose:w}}class ss{constructor(A={}){const{canvas:I=Qn(),context:g=null,depth:C=!0,stencil:Q=!0,alpha:i=!1,antialias:o=!1,premultipliedAlpha:e=!0,preserveDrawingBuffer:s=!1,powerPreference:D="default",failIfMajorPerformanceCaveat:n=!1}=A;this.isWebGLRenderer=!0;let r;g!==null?r=g.getContextAttributes().alpha:r=i;const F=new Uint32Array(4),l=new Int32Array(4);let S=null,G=null;const w=[],Y=[];this.domElement=I,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Eg,this._useLegacyLights=!1,this.toneMapping=ZC,this.toneMappingExposure=1;const K=this;let f=!1,q=0,b=0,T=null,BA=-1,d=null;const x=new Bg,DA=new Bg;let hA=null;const rA=new yI(0);let O=0,EA=I.width,wA=I.height,eA=1,kA=null,FA=null;const cA=new Bg(0,0,EA,wA),JA=new Bg(0,0,EA,wA);let fA=!1;const iA=new Eo;let GA=!1,qA=!1,PA=null;const jA=new kI,eI=new VI,xA=new Z,TA={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function gI(){return T===null?eA:1}let _=g;function UA(J,X){for(let IA=0;IA<J.length;IA++){const gA=J[IA],$=I.getContext(gA,X);if($!==null)return $}return null}try{const J={alpha:!0,depth:C,stencil:Q,antialias:o,premultipliedAlpha:e,preserveDrawingBuffer:s,powerPreference:D,failIfMajorPerformanceCaveat:n};if("setAttribute"in I&&I.setAttribute("data-engine",`three.js r${Io}`),I.addEventListener("webglcontextlost",RI,!1),I.addEventListener("webglcontextrestored",V,!1),I.addEventListener("webglcontextcreationerror",LA,!1),_===null){const X=["webgl2","webgl","experimental-webgl"];if(K.isWebGL1Renderer===!0&&X.shift(),_=UA(X,J),_===null)throw UA(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&_ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),_.getShaderPrecisionFormat===void 0&&(_.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(J){throw console.error("THREE.WebGLRenderer: "+J.message),J}let WA,cI,zA,ZI,CI,iI,mI,vI,eg,m,k,AA,lA,yA,NA,OA,KA,pA,QI,oI,MA,WI,ZA,EI;function _A(){WA=new R0(_),cI=new n0(_,WA,A),WA.init(cI),WI=new Bc(_,WA,cI),zA=new gc(_,WA,cI),ZI=new y0(_),CI=new Tw,iI=new Cc(_,WA,zA,CI,cI,WI,ZI),mI=new r0(K),vI=new G0(K),eg=new Jn(_,cI),ZA=new a0(_,WA,eg,cI),m=new F0(_,eg,ZI,ZA),k=new U0(_,m,eg,ZI),QI=new S0(_,cI,iI),OA=new h0(CI),AA=new bw(K,mI,vI,WA,cI,ZA,OA),lA=new oc(K,CI),yA=new Ww,NA=new jw(WA,cI),pA=new s0(K,mI,vI,zA,k,r,e),KA=new Ic(K,k,cI),EI=new tc(_,ZI,cI,zA),oI=new D0(_,WA,ZI,cI),MA=new N0(_,WA,ZI,cI),ZI.programs=AA.programs,K.capabilities=cI,K.extensions=WA,K.properties=CI,K.renderLists=yA,K.shadowMap=KA,K.state=zA,K.info=ZI}_A();const RA=new ic(K,_);this.xr=RA,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const J=WA.get("WEBGL_lose_context");J&&J.loseContext()},this.forceContextRestore=function(){const J=WA.get("WEBGL_lose_context");J&&J.restoreContext()},this.getPixelRatio=function(){return eA},this.setPixelRatio=function(J){J!==void 0&&(eA=J,this.setSize(EA,wA,!1))},this.getSize=function(J){return J.set(EA,wA)},this.setSize=function(J,X,IA=!0){if(RA.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}EA=J,wA=X,I.width=Math.floor(J*eA),I.height=Math.floor(X*eA),IA===!0&&(I.style.width=J+"px",I.style.height=X+"px"),this.setViewport(0,0,J,X)},this.getDrawingBufferSize=function(J){return J.set(EA*eA,wA*eA).floor()},this.setDrawingBufferSize=function(J,X,IA){EA=J,wA=X,eA=IA,I.width=Math.floor(J*IA),I.height=Math.floor(X*IA),this.setViewport(0,0,J,X)},this.getCurrentViewport=function(J){return J.copy(x)},this.getViewport=function(J){return J.copy(cA)},this.setViewport=function(J,X,IA,gA){J.isVector4?cA.set(J.x,J.y,J.z,J.w):cA.set(J,X,IA,gA),zA.viewport(x.copy(cA).multiplyScalar(eA).floor())},this.getScissor=function(J){return J.copy(JA)},this.setScissor=function(J,X,IA,gA){J.isVector4?JA.set(J.x,J.y,J.z,J.w):JA.set(J,X,IA,gA),zA.scissor(DA.copy(JA).multiplyScalar(eA).floor())},this.getScissorTest=function(){return fA},this.setScissorTest=function(J){zA.setScissorTest(fA=J)},this.setOpaqueSort=function(J){kA=J},this.setTransparentSort=function(J){FA=J},this.getClearColor=function(J){return J.copy(pA.getClearColor())},this.setClearColor=function(){pA.setClearColor.apply(pA,arguments)},this.getClearAlpha=function(){return pA.getClearAlpha()},this.setClearAlpha=function(){pA.setClearAlpha.apply(pA,arguments)},this.clear=function(J=!0,X=!0,IA=!0){let gA=0;if(J){let $=!1;if(T!==null){const mA=T.texture.format;$=mA===xe||mA===qe||mA===me}if($){const mA=T.texture.type,VA=mA===vC||mA===WC||mA===go||mA===eB||mA===He||mA===pe,$A=pA.getClearColor(),AI=pA.getClearAlpha(),wI=$A.r,aI=$A.g,DI=$A.b;VA?(F[0]=wI,F[1]=aI,F[2]=DI,F[3]=AI,_.clearBufferuiv(_.COLOR,0,F)):(l[0]=wI,l[1]=aI,l[2]=DI,l[3]=AI,_.clearBufferiv(_.COLOR,0,l))}else gA|=_.COLOR_BUFFER_BIT}X&&(gA|=_.DEPTH_BUFFER_BIT),IA&&(gA|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(gA)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){I.removeEventListener("webglcontextlost",RI,!1),I.removeEventListener("webglcontextrestored",V,!1),I.removeEventListener("webglcontextcreationerror",LA,!1),yA.dispose(),NA.dispose(),CI.dispose(),mI.dispose(),vI.dispose(),k.dispose(),ZA.dispose(),EI.dispose(),AA.dispose(),RA.dispose(),RA.removeEventListener("sessionstart",Ig),RA.removeEventListener("sessionend",sI),PA&&(PA.dispose(),PA=null),Qg.stop()};function RI(J){J.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const J=ZI.autoReset,X=KA.enabled,IA=KA.autoUpdate,gA=KA.needsUpdate,$=KA.type;_A(),ZI.autoReset=J,KA.enabled=X,KA.autoUpdate=IA,KA.needsUpdate=gA,KA.type=$}function LA(J){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",J.statusMessage)}function nA(J){const X=J.target;X.removeEventListener("dispose",nA),P(X)}function P(J){dA(J),CI.remove(J)}function dA(J){const X=CI.get(J).programs;X!==void 0&&(X.forEach(function(IA){AA.releaseProgram(IA)}),J.isShaderMaterial&&AA.releaseShaderCache(J))}this.renderBufferDirect=function(J,X,IA,gA,$,mA){X===null&&(X=TA);const VA=$.isMesh&&$.matrixWorld.determinant()<0,$A=QC(J,X,IA,gA,$);zA.setMaterial(gA,VA);let AI=IA.index,wI=1;if(gA.wireframe===!0){if(AI=m.getWireframeAttribute(IA),AI===void 0)return;wI=2}const aI=IA.drawRange,DI=IA.attributes.position;let $I=aI.start*wI,wg=(aI.start+aI.count)*wI;mA!==null&&($I=Math.max($I,mA.start*wI),wg=Math.min(wg,(mA.start+mA.count)*wI)),AI!==null?($I=Math.max($I,0),wg=Math.min(wg,AI.count)):DI!=null&&($I=Math.max($I,0),wg=Math.min(wg,DI.count));const og=wg-$I;if(og<0||og===1/0)return;ZA.setup($,gA,$A,IA,AI);let pg,XI=oI;if(AI!==null&&(pg=eg.get(AI),XI=MA,XI.setIndex(pg)),$.isMesh)gA.wireframe===!0?(zA.setLineWidth(gA.wireframeLinewidth*gI()),XI.setMode(_.LINES)):XI.setMode(_.TRIANGLES);else if($.isLine){let II=gA.linewidth;II===void 0&&(II=1),zA.setLineWidth(II*gI()),$.isLineSegments?XI.setMode(_.LINES):$.isLineLoop?XI.setMode(_.LINE_LOOP):XI.setMode(_.LINE_STRIP)}else $.isPoints?XI.setMode(_.POINTS):$.isSprite&&XI.setMode(_.TRIANGLES);if($.isBatchedMesh)XI.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)XI.renderInstances($I,og,$.count);else if(IA.isInstancedBufferGeometry){const II=IA._maxInstanceCount!==void 0?IA._maxInstanceCount:1/0,jC=Math.min(IA.instanceCount,II);XI.renderInstances($I,og,jC)}else XI.render($I,og)};function XA(J,X,IA){J.transparent===!0&&J.side===oC&&J.forceSinglePass===!1?(J.side=qg,J.needsUpdate=!0,JC(J,X,IA),J.side=KC,J.needsUpdate=!0,JC(J,X,IA),J.side=oC):JC(J,X,IA)}this.compile=function(J,X,IA=null){IA===null&&(IA=J),G=NA.get(IA),G.init(),Y.push(G),IA.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(G.pushLight($),$.castShadow&&G.pushShadow($))}),J!==IA&&J.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(G.pushLight($),$.castShadow&&G.pushShadow($))}),G.setupLights(K._useLegacyLights);const gA=new Set;return J.traverse(function($){const mA=$.material;if(mA)if(Array.isArray(mA))for(let VA=0;VA<mA.length;VA++){const $A=mA[VA];XA($A,IA,$),gA.add($A)}else XA(mA,IA,$),gA.add(mA)}),Y.pop(),G=null,gA},this.compileAsync=function(J,X,IA=null){const gA=this.compile(J,X,IA);return new Promise($=>{function mA(){if(gA.forEach(function(VA){CI.get(VA).currentProgram.isReady()&&gA.delete(VA)}),gA.size===0){$(J);return}setTimeout(mA,10)}WA.get("KHR_parallel_shader_compile")!==null?mA():setTimeout(mA,10)})};let fI=null;function W(J){fI&&fI(J)}function Ig(){Qg.stop()}function sI(){Qg.start()}const Qg=new Bs;Qg.setAnimationLoop(W),typeof self<"u"&&Qg.setContext(self),this.setAnimationLoop=function(J){fI=J,RA.setAnimationLoop(J),J===null?Qg.stop():Qg.start()},RA.addEventListener("sessionstart",Ig),RA.addEventListener("sessionend",sI),this.render=function(J,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),RA.enabled===!0&&RA.isPresenting===!0&&(RA.cameraAutoUpdate===!0&&RA.updateCamera(X),X=RA.getCamera()),J.isScene===!0&&J.onBeforeRender(K,J,X,T),G=NA.get(J,Y.length),G.init(),Y.push(G),jA.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),iA.setFromProjectionMatrix(jA),qA=this.localClippingEnabled,GA=OA.init(this.clippingPlanes,qA),S=yA.get(J,w.length),S.init(),w.push(S),hg(J,X,0,K.sortObjects),S.finish(),K.sortObjects===!0&&S.sort(kA,FA),this.info.render.frame++,GA===!0&&OA.beginShadows();const IA=G.state.shadowsArray;if(KA.render(IA,J,X),GA===!0&&OA.endShadows(),this.info.autoReset===!0&&this.info.reset(),pA.render(S,J),G.setupLights(K._useLegacyLights),X.isArrayCamera){const gA=X.cameras;for(let $=0,mA=gA.length;$<mA;$++){const VA=gA[$];cB(S,J,VA,VA.viewport)}}else cB(S,J,X);T!==null&&(iI.updateMultisampleRenderTarget(T),iI.updateRenderTargetMipmap(T)),J.isScene===!0&&J.onAfterRender(K,J,X),ZA.resetDefaultState(),BA=-1,d=null,Y.pop(),Y.length>0?G=Y[Y.length-1]:G=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function hg(J,X,IA,gA){if(J.visible===!1)return;if(J.layers.test(X.layers)){if(J.isGroup)IA=J.renderOrder;else if(J.isLOD)J.autoUpdate===!0&&J.update(X);else if(J.isLight)G.pushLight(J),J.castShadow&&G.pushShadow(J);else if(J.isSprite){if(!J.frustumCulled||iA.intersectsSprite(J)){gA&&xA.setFromMatrixPosition(J.matrixWorld).applyMatrix4(jA);const VA=k.update(J),$A=J.material;$A.visible&&S.push(J,VA,$A,IA,xA.z,null)}}else if((J.isMesh||J.isLine||J.isPoints)&&(!J.frustumCulled||iA.intersectsObject(J))){const VA=k.update(J),$A=J.material;if(gA&&(J.boundingSphere!==void 0?(J.boundingSphere===null&&J.computeBoundingSphere(),xA.copy(J.boundingSphere.center)):(VA.boundingSphere===null&&VA.computeBoundingSphere(),xA.copy(VA.boundingSphere.center)),xA.applyMatrix4(J.matrixWorld).applyMatrix4(jA)),Array.isArray($A)){const AI=VA.groups;for(let wI=0,aI=AI.length;wI<aI;wI++){const DI=AI[wI],$I=$A[DI.materialIndex];$I&&$I.visible&&S.push(J,VA,$I,IA,xA.z,DI)}}else $A.visible&&S.push(J,VA,$A,IA,xA.z,null)}}const mA=J.children;for(let VA=0,$A=mA.length;VA<$A;VA++)hg(mA[VA],X,IA,gA)}function cB(J,X,IA,gA){const $=J.opaque,mA=J.transmissive,VA=J.transparent;G.setupLightsView(IA),GA===!0&&OA.setGlobalState(K.clippingPlanes,IA),mA.length>0&&iQ($,mA,X,IA),gA&&zA.viewport(x.copy(gA)),$.length>0&&sg($,X,IA),mA.length>0&&sg(mA,X,IA),VA.length>0&&sg(VA,X,IA),zA.buffers.depth.setTest(!0),zA.buffers.depth.setMask(!0),zA.buffers.color.setMask(!0),zA.setPolygonOffset(!1)}function iQ(J,X,IA,gA){if((IA.isScene===!0?IA.overrideMaterial:null)!==null)return;const mA=cI.isWebGL2;PA===null&&(PA=new DB(1,1,{generateMipmaps:!0,type:WA.has("EXT_color_buffer_half_float")?UQ:vC,minFilter:aB,samples:mA?4:0})),K.getDrawingBufferSize(eI),mA?PA.setSize(eI.x,eI.y):PA.setSize(JE(eI.x),JE(eI.y));const VA=K.getRenderTarget();K.setRenderTarget(PA),K.getClearColor(rA),O=K.getClearAlpha(),O<1&&K.setClearColor(16777215,.5),K.clear();const $A=K.toneMapping;K.toneMapping=ZC,sg(J,IA,gA),iI.updateMultisampleRenderTarget(PA),iI.updateRenderTargetMipmap(PA);let AI=!1;for(let wI=0,aI=X.length;wI<aI;wI++){const DI=X[wI],$I=DI.object,wg=DI.geometry,og=DI.material,pg=DI.group;if(og.side===oC&&$I.layers.test(gA.layers)){const XI=og.side;og.side=qg,og.needsUpdate=!0,lI($I,IA,gA,wg,og,pg),og.side=XI,og.needsUpdate=!0,AI=!0}}AI===!0&&(iI.updateMultisampleRenderTarget(PA),iI.updateRenderTargetMipmap(PA)),K.setRenderTarget(VA),K.setClearColor(rA,O),K.toneMapping=$A}function sg(J,X,IA){const gA=X.isScene===!0?X.overrideMaterial:null;for(let $=0,mA=J.length;$<mA;$++){const VA=J[$],$A=VA.object,AI=VA.geometry,wI=gA===null?VA.material:gA,aI=VA.group;$A.layers.test(IA.layers)&&lI($A,X,IA,AI,wI,aI)}}function lI(J,X,IA,gA,$,mA){J.onBeforeRender(K,X,IA,gA,$,mA),J.modelViewMatrix.multiplyMatrices(IA.matrixWorldInverse,J.matrixWorld),J.normalMatrix.getNormalMatrix(J.modelViewMatrix),$.onBeforeRender(K,X,IA,gA,J,mA),$.transparent===!0&&$.side===oC&&$.forceSinglePass===!1?($.side=qg,$.needsUpdate=!0,K.renderBufferDirect(IA,X,gA,$,J,mA),$.side=KC,$.needsUpdate=!0,K.renderBufferDirect(IA,X,gA,$,J,mA),$.side=oC):K.renderBufferDirect(IA,X,gA,$,J,mA),J.onAfterRender(K,X,IA,gA,$,mA)}function JC(J,X,IA){X.isScene!==!0&&(X=TA);const gA=CI.get(J),$=G.state.lights,mA=G.state.shadowsArray,VA=$.state.version,$A=AA.getParameters(J,$.state,mA,X,IA),AI=AA.getProgramCacheKey($A);let wI=gA.programs;gA.environment=J.isMeshStandardMaterial?X.environment:null,gA.fog=X.fog,gA.envMap=(J.isMeshStandardMaterial?vI:mI).get(J.envMap||gA.environment),wI===void 0&&(J.addEventListener("dispose",nA),wI=new Map,gA.programs=wI);let aI=wI.get(AI);if(aI!==void 0){if(gA.currentProgram===aI&&gA.lightsStateVersion===VA)return Wg(J,$A),aI}else $A.uniforms=AA.getUniforms(J),J.onBuild(IA,$A,K),J.onBeforeCompile($A,K),aI=AA.acquireProgram($A,AI),wI.set(AI,aI),gA.uniforms=$A.uniforms;const DI=gA.uniforms;return(!J.isShaderMaterial&&!J.isRawShaderMaterial||J.clipping===!0)&&(DI.clippingPlanes=OA.uniform),Wg(J,$A),gA.needsLights=y(J),gA.lightsStateVersion=VA,gA.needsLights&&(DI.ambientLightColor.value=$.state.ambient,DI.lightProbe.value=$.state.probe,DI.directionalLights.value=$.state.directional,DI.directionalLightShadows.value=$.state.directionalShadow,DI.spotLights.value=$.state.spot,DI.spotLightShadows.value=$.state.spotShadow,DI.rectAreaLights.value=$.state.rectArea,DI.ltc_1.value=$.state.rectAreaLTC1,DI.ltc_2.value=$.state.rectAreaLTC2,DI.pointLights.value=$.state.point,DI.pointLightShadows.value=$.state.pointShadow,DI.hemisphereLights.value=$.state.hemi,DI.directionalShadowMap.value=$.state.directionalShadowMap,DI.directionalShadowMatrix.value=$.state.directionalShadowMatrix,DI.spotShadowMap.value=$.state.spotShadowMap,DI.spotLightMatrix.value=$.state.spotLightMatrix,DI.spotLightMap.value=$.state.spotLightMap,DI.pointShadowMap.value=$.state.pointShadowMap,DI.pointShadowMatrix.value=$.state.pointShadowMatrix),gA.currentProgram=aI,gA.uniformsList=null,aI}function dg(J){if(J.uniformsList===null){const X=J.currentProgram.getUniforms();J.uniformsList=yE.seqWithValue(X.seq,J.uniforms)}return J.uniformsList}function Wg(J,X){const IA=CI.get(J);IA.outputColorSpace=X.outputColorSpace,IA.batching=X.batching,IA.instancing=X.instancing,IA.instancingColor=X.instancingColor,IA.skinning=X.skinning,IA.morphTargets=X.morphTargets,IA.morphNormals=X.morphNormals,IA.morphColors=X.morphColors,IA.morphTargetsCount=X.morphTargetsCount,IA.numClippingPlanes=X.numClippingPlanes,IA.numIntersection=X.numClipIntersection,IA.vertexAlphas=X.vertexAlphas,IA.vertexTangents=X.vertexTangents,IA.toneMapping=X.toneMapping}function QC(J,X,IA,gA,$){X.isScene!==!0&&(X=TA),iI.resetTextureUnits();const mA=X.fog,VA=gA.isMeshStandardMaterial?X.environment:null,$A=T===null?K.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Kg,AI=(gA.isMeshStandardMaterial?vI:mI).get(gA.envMap||VA),wI=gA.vertexColors===!0&&!!IA.attributes.color&&IA.attributes.color.itemSize===4,aI=!!IA.attributes.tangent&&(!!gA.normalMap||gA.anisotropy>0),DI=!!IA.morphAttributes.position,$I=!!IA.morphAttributes.normal,wg=!!IA.morphAttributes.color;let og=ZC;gA.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(og=K.toneMapping);const pg=IA.morphAttributes.position||IA.morphAttributes.normal||IA.morphAttributes.color,XI=pg!==void 0?pg.length:0,II=CI.get(gA),jC=G.state.lights;if(GA===!0&&(qA===!0||J!==d)){const tg=J===d&&gA.id===BA;OA.setState(gA,J,tg)}let Ag=!1;gA.version===II.__version?(II.needsLights&&II.lightsStateVersion!==jC.state.version||II.outputColorSpace!==$A||$.isBatchedMesh&&II.batching===!1||!$.isBatchedMesh&&II.batching===!0||$.isInstancedMesh&&II.instancing===!1||!$.isInstancedMesh&&II.instancing===!0||$.isSkinnedMesh&&II.skinning===!1||!$.isSkinnedMesh&&II.skinning===!0||$.isInstancedMesh&&II.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&II.instancingColor===!1&&$.instanceColor!==null||II.envMap!==AI||gA.fog===!0&&II.fog!==mA||II.numClippingPlanes!==void 0&&(II.numClippingPlanes!==OA.numPlanes||II.numIntersection!==OA.numIntersection)||II.vertexAlphas!==wI||II.vertexTangents!==aI||II.morphTargets!==DI||II.morphNormals!==$I||II.morphColors!==wg||II.toneMapping!==og||cI.isWebGL2===!0&&II.morphTargetsCount!==XI)&&(Ag=!0):(Ag=!0,II.__version=gA.version);let xg=II.currentProgram;Ag===!0&&(xg=JC(gA,X,$));let YC=!1,DC=!1,fC=!1;const JI=xg.getUniforms(),Rg=II.uniforms;if(zA.useProgram(xg.program)&&(YC=!0,DC=!0,fC=!0),gA.id!==BA&&(BA=gA.id,DC=!0),YC||d!==J){JI.setValue(_,"projectionMatrix",J.projectionMatrix),JI.setValue(_,"viewMatrix",J.matrixWorldInverse);const tg=JI.map.cameraPosition;tg!==void 0&&tg.setValue(_,xA.setFromMatrixPosition(J.matrixWorld)),cI.logarithmicDepthBuffer&&JI.setValue(_,"logDepthBufFC",2/(Math.log(J.far+1)/Math.LN2)),(gA.isMeshPhongMaterial||gA.isMeshToonMaterial||gA.isMeshLambertMaterial||gA.isMeshBasicMaterial||gA.isMeshStandardMaterial||gA.isShaderMaterial)&&JI.setValue(_,"isOrthographic",J.isOrthographicCamera===!0),d!==J&&(d=J,DC=!0,fC=!0)}if($.isSkinnedMesh){JI.setOptional(_,$,"bindMatrix"),JI.setOptional(_,$,"bindMatrixInverse");const tg=$.skeleton;tg&&(cI.floatVertexTextures?(tg.boneTexture===null&&tg.computeBoneTexture(),JI.setValue(_,"boneTexture",tg.boneTexture,iI)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(JI.setOptional(_,$,"batchingTexture"),JI.setValue(_,"batchingTexture",$._matricesTexture,iI));const FI=IA.morphAttributes;if((FI.position!==void 0||FI.normal!==void 0||FI.color!==void 0&&cI.isWebGL2===!0)&&QI.update($,IA,xg),(DC||II.receiveShadow!==$.receiveShadow)&&(II.receiveShadow=$.receiveShadow,JI.setValue(_,"receiveShadow",$.receiveShadow)),gA.isMeshGouraudMaterial&&gA.envMap!==null&&(Rg.envMap.value=AI,Rg.flipEnvMap.value=AI.isCubeTexture&&AI.isRenderTargetTexture===!1?-1:1),DC&&(JI.setValue(_,"toneMappingExposure",K.toneMappingExposure),II.needsLights&&rI(Rg,fC),mA&&gA.fog===!0&&lA.refreshFogUniforms(Rg,mA),lA.refreshMaterialUniforms(Rg,gA,eA,wA,PA),yE.upload(_,dg(II),Rg,iI)),gA.isShaderMaterial&&gA.uniformsNeedUpdate===!0&&(yE.upload(_,dg(II),Rg,iI),gA.uniformsNeedUpdate=!1),gA.isSpriteMaterial&&JI.setValue(_,"center",$.center),JI.setValue(_,"modelViewMatrix",$.modelViewMatrix),JI.setValue(_,"normalMatrix",$.normalMatrix),JI.setValue(_,"modelMatrix",$.matrixWorld),gA.isShaderMaterial||gA.isRawShaderMaterial){const tg=gA.uniformsGroups;for(let zC=0,oQ=tg.length;zC<oQ;zC++)if(cI.isWebGL2){const GB=tg[zC];EI.update(GB,xg),EI.bind(GB,xg)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xg}function rI(J,X){J.ambientLightColor.needsUpdate=X,J.lightProbe.needsUpdate=X,J.directionalLights.needsUpdate=X,J.directionalLightShadows.needsUpdate=X,J.pointLights.needsUpdate=X,J.pointLightShadows.needsUpdate=X,J.spotLights.needsUpdate=X,J.spotLightShadows.needsUpdate=X,J.rectAreaLights.needsUpdate=X,J.hemisphereLights.needsUpdate=X}function y(J){return J.isMeshLambertMaterial||J.isMeshToonMaterial||J.isMeshPhongMaterial||J.isMeshStandardMaterial||J.isShadowMaterial||J.isShaderMaterial&&J.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(J,X,IA){CI.get(J.texture).__webglTexture=X,CI.get(J.depthTexture).__webglTexture=IA;const gA=CI.get(J);gA.__hasExternalTextures=!0,gA.__hasExternalTextures&&(gA.__autoAllocateDepthBuffer=IA===void 0,gA.__autoAllocateDepthBuffer||WA.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),gA.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(J,X){const IA=CI.get(J);IA.__webglFramebuffer=X,IA.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(J,X=0,IA=0){T=J,q=X,b=IA;let gA=!0,$=null,mA=!1,VA=!1;if(J){const AI=CI.get(J);AI.__useDefaultFramebuffer!==void 0?(zA.bindFramebuffer(_.FRAMEBUFFER,null),gA=!1):AI.__webglFramebuffer===void 0?iI.setupRenderTarget(J):AI.__hasExternalTextures&&iI.rebindTextures(J,CI.get(J.texture).__webglTexture,CI.get(J.depthTexture).__webglTexture);const wI=J.texture;(wI.isData3DTexture||wI.isDataArrayTexture||wI.isCompressedArrayTexture)&&(VA=!0);const aI=CI.get(J).__webglFramebuffer;J.isWebGLCubeRenderTarget?(Array.isArray(aI[X])?$=aI[X][IA]:$=aI[X],mA=!0):cI.isWebGL2&&J.samples>0&&iI.useMultisampledRTT(J)===!1?$=CI.get(J).__webglMultisampledFramebuffer:Array.isArray(aI)?$=aI[IA]:$=aI,x.copy(J.viewport),DA.copy(J.scissor),hA=J.scissorTest}else x.copy(cA).multiplyScalar(eA).floor(),DA.copy(JA).multiplyScalar(eA).floor(),hA=fA;if(zA.bindFramebuffer(_.FRAMEBUFFER,$)&&cI.drawBuffers&&gA&&zA.drawBuffers(J,$),zA.viewport(x),zA.scissor(DA),zA.setScissorTest(hA),mA){const AI=CI.get(J.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+X,AI.__webglTexture,IA)}else if(VA){const AI=CI.get(J.texture),wI=X||0;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,AI.__webglTexture,IA||0,wI)}BA=-1},this.readRenderTargetPixels=function(J,X,IA,gA,$,mA,VA){if(!(J&&J.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $A=CI.get(J).__webglFramebuffer;if(J.isWebGLCubeRenderTarget&&VA!==void 0&&($A=$A[VA]),$A){zA.bindFramebuffer(_.FRAMEBUFFER,$A);try{const AI=J.texture,wI=AI.format,aI=AI.type;if(wI!==Pg&&WI.convert(wI)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const DI=aI===UQ&&(WA.has("EXT_color_buffer_half_float")||cI.isWebGL2&&WA.has("EXT_color_buffer_float"));if(aI!==vC&&WI.convert(aI)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_TYPE)&&!(aI===MC&&(cI.isWebGL2||WA.has("OES_texture_float")||WA.has("WEBGL_color_buffer_float")))&&!DI){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=J.width-gA&&IA>=0&&IA<=J.height-$&&_.readPixels(X,IA,gA,$,WI.convert(wI),WI.convert(aI),mA)}finally{const AI=T!==null?CI.get(T).__webglFramebuffer:null;zA.bindFramebuffer(_.FRAMEBUFFER,AI)}}},this.copyFramebufferToTexture=function(J,X,IA=0){const gA=Math.pow(2,-IA),$=Math.floor(X.image.width*gA),mA=Math.floor(X.image.height*gA);iI.setTexture2D(X,0),_.copyTexSubImage2D(_.TEXTURE_2D,IA,0,0,J.x,J.y,$,mA),zA.unbindTexture()},this.copyTextureToTexture=function(J,X,IA,gA=0){const $=X.image.width,mA=X.image.height,VA=WI.convert(IA.format),$A=WI.convert(IA.type);iI.setTexture2D(IA,0),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,IA.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,IA.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,IA.unpackAlignment),X.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,gA,J.x,J.y,$,mA,VA,$A,X.image.data):X.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,gA,J.x,J.y,X.mipmaps[0].width,X.mipmaps[0].height,VA,X.mipmaps[0].data):_.texSubImage2D(_.TEXTURE_2D,gA,J.x,J.y,VA,$A,X.image),gA===0&&IA.generateMipmaps&&_.generateMipmap(_.TEXTURE_2D),zA.unbindTexture()},this.copyTextureToTexture3D=function(J,X,IA,gA,$=0){if(K.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const mA=J.max.x-J.min.x+1,VA=J.max.y-J.min.y+1,$A=J.max.z-J.min.z+1,AI=WI.convert(gA.format),wI=WI.convert(gA.type);let aI;if(gA.isData3DTexture)iI.setTexture3D(gA,0),aI=_.TEXTURE_3D;else if(gA.isDataArrayTexture)iI.setTexture2DArray(gA,0),aI=_.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,gA.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,gA.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,gA.unpackAlignment);const DI=_.getParameter(_.UNPACK_ROW_LENGTH),$I=_.getParameter(_.UNPACK_IMAGE_HEIGHT),wg=_.getParameter(_.UNPACK_SKIP_PIXELS),og=_.getParameter(_.UNPACK_SKIP_ROWS),pg=_.getParameter(_.UNPACK_SKIP_IMAGES),XI=IA.isCompressedTexture?IA.mipmaps[0]:IA.image;_.pixelStorei(_.UNPACK_ROW_LENGTH,XI.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,XI.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,J.min.x),_.pixelStorei(_.UNPACK_SKIP_ROWS,J.min.y),_.pixelStorei(_.UNPACK_SKIP_IMAGES,J.min.z),IA.isDataTexture||IA.isData3DTexture?_.texSubImage3D(aI,$,X.x,X.y,X.z,mA,VA,$A,AI,wI,XI.data):IA.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),_.compressedTexSubImage3D(aI,$,X.x,X.y,X.z,mA,VA,$A,AI,XI.data)):_.texSubImage3D(aI,$,X.x,X.y,X.z,mA,VA,$A,AI,wI,XI),_.pixelStorei(_.UNPACK_ROW_LENGTH,DI),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,$I),_.pixelStorei(_.UNPACK_SKIP_PIXELS,wg),_.pixelStorei(_.UNPACK_SKIP_ROWS,og),_.pixelStorei(_.UNPACK_SKIP_IMAGES,pg),$===0&&gA.generateMipmaps&&_.generateMipmap(aI),zA.unbindTexture()},this.initTexture=function(J){J.isCubeTexture?iI.setTextureCube(J,0):J.isData3DTexture?iI.setTexture3D(J,0):J.isDataArrayTexture||J.isCompressedArrayTexture?iI.setTexture2DArray(J,0):iI.setTexture2D(J,0),zA.unbindTexture()},this.resetState=function(){q=0,b=0,T=null,zA.reset(),ZA.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return lC}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(A){this._outputColorSpace=A;const I=this.getContext();I.drawingBufferColorSpace=A===Bo?"display-p3":"srgb",I.unpackColorSpace=_I.workingColorSpace===uE?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(A){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!A}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Eg?XC:We}set outputEncoding(A){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=A===XC?Eg:Kg}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(A){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=A}}class ec extends ss{}ec.prototype.isWebGL1Renderer=!0;class Ie extends Dg{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(A,I){return super.copy(A,I),A.background!==null&&(this.background=A.background.clone()),A.environment!==null&&(this.environment=A.environment.clone()),A.fog!==null&&(this.fog=A.fog.clone()),this.backgroundBlurriness=A.backgroundBlurriness,this.backgroundIntensity=A.backgroundIntensity,A.overrideMaterial!==null&&(this.overrideMaterial=A.overrideMaterial.clone()),this.matrixAutoUpdate=A.matrixAutoUpdate,this}toJSON(A){const I=super.toJSON(A);return this.fog!==null&&(I.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(I.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(I.object.backgroundIntensity=this.backgroundIntensity),I}}class sc{constructor(A,I){this.isInterleavedBuffer=!0,this.array=A,this.stride=I,this.count=A!==void 0?A.length/I:0,this.usage=bi,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=CC()}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}get updateRange(){return console.warn('THREE.InterleavedBuffer: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(A){return this.usage=A,this}addUpdateRange(A,I){this.updateRanges.push({start:A,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.array=new A.array.constructor(A.array),this.count=A.count,this.stride=A.stride,this.usage=A.usage,this}copyAt(A,I,g){A*=this.stride,g*=I.stride;for(let C=0,Q=this.stride;C<Q;C++)this.array[A+C]=I.array[g+C];return this}set(A,I=0){return this.array.set(A,I),this}clone(A){A.arrayBuffers===void 0&&(A.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=CC()),A.arrayBuffers[this.array.buffer._uuid]===void 0&&(A.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const I=new this.array.constructor(A.arrayBuffers[this.array.buffer._uuid]),g=new this.constructor(I,this.stride);return g.setUsage(this.usage),g}onUpload(A){return this.onUploadCallback=A,this}toJSON(A){return A.arrayBuffers===void 0&&(A.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=CC()),A.arrayBuffers[this.array.buffer._uuid]===void 0&&(A.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Lg=new Z;class to{constructor(A,I,g,C=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=A,this.itemSize=I,this.offset=g,this.normalized=C}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(A){this.data.needsUpdate=A}applyMatrix4(A){for(let I=0,g=this.data.count;I<g;I++)Lg.fromBufferAttribute(this,I),Lg.applyMatrix4(A),this.setXYZ(I,Lg.x,Lg.y,Lg.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)Lg.fromBufferAttribute(this,I),Lg.applyNormalMatrix(A),this.setXYZ(I,Lg.x,Lg.y,Lg.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)Lg.fromBufferAttribute(this,I),Lg.transformDirection(A),this.setXYZ(I,Lg.x,Lg.y,Lg.z);return this}setX(A,I){return this.normalized&&(I=gg(I,this.array)),this.data.array[A*this.data.stride+this.offset]=I,this}setY(A,I){return this.normalized&&(I=gg(I,this.array)),this.data.array[A*this.data.stride+this.offset+1]=I,this}setZ(A,I){return this.normalized&&(I=gg(I,this.array)),this.data.array[A*this.data.stride+this.offset+2]=I,this}setW(A,I){return this.normalized&&(I=gg(I,this.array)),this.data.array[A*this.data.stride+this.offset+3]=I,this}getX(A){let I=this.data.array[A*this.data.stride+this.offset];return this.normalized&&(I=tC(I,this.array)),I}getY(A){let I=this.data.array[A*this.data.stride+this.offset+1];return this.normalized&&(I=tC(I,this.array)),I}getZ(A){let I=this.data.array[A*this.data.stride+this.offset+2];return this.normalized&&(I=tC(I,this.array)),I}getW(A){let I=this.data.array[A*this.data.stride+this.offset+3];return this.normalized&&(I=tC(I,this.array)),I}setXY(A,I,g){return A=A*this.data.stride+this.offset,this.normalized&&(I=gg(I,this.array),g=gg(g,this.array)),this.data.array[A+0]=I,this.data.array[A+1]=g,this}setXYZ(A,I,g,C){return A=A*this.data.stride+this.offset,this.normalized&&(I=gg(I,this.array),g=gg(g,this.array),C=gg(C,this.array)),this.data.array[A+0]=I,this.data.array[A+1]=g,this.data.array[A+2]=C,this}setXYZW(A,I,g,C,Q){return A=A*this.data.stride+this.offset,this.normalized&&(I=gg(I,this.array),g=gg(g,this.array),C=gg(C,this.array),Q=gg(Q,this.array)),this.data.array[A+0]=I,this.data.array[A+1]=g,this.data.array[A+2]=C,this.data.array[A+3]=Q,this}clone(A){if(A===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const I=[];for(let g=0;g<this.count;g++){const C=g*this.data.stride+this.offset;for(let Q=0;Q<this.itemSize;Q++)I.push(this.data.array[C+Q])}return new fg(new this.array.constructor(I),this.itemSize,this.normalized)}else return A.interleavedBuffers===void 0&&(A.interleavedBuffers={}),A.interleavedBuffers[this.data.uuid]===void 0&&(A.interleavedBuffers[this.data.uuid]=this.data.clone(A)),new to(A.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(A){if(A===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const I=[];for(let g=0;g<this.count;g++){const C=g*this.data.stride+this.offset;for(let Q=0;Q<this.itemSize;Q++)I.push(this.data.array[C+Q])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:I,normalized:this.normalized}}else return A.interleavedBuffers===void 0&&(A.interleavedBuffers={}),A.interleavedBuffers[this.data.uuid]===void 0&&(A.interleavedBuffers[this.data.uuid]=this.data.toJSON(A)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ge=new Z,Ce=new Bg,Be=new Bg,ac=new Z,Qe=new kI,hE=new Z,Mi=new sC,Ee=new kI,li=new HE;class Dc extends Sg{constructor(A,I){super(A,I),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=To,this.bindMatrix=new kI,this.bindMatrixInverse=new kI,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const A=this.geometry;this.boundingBox===null&&(this.boundingBox=new dC),this.boundingBox.makeEmpty();const I=A.getAttribute("position");for(let g=0;g<I.count;g++)this.getVertexPosition(g,hE),this.boundingBox.expandByPoint(hE)}computeBoundingSphere(){const A=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new sC),this.boundingSphere.makeEmpty();const I=A.getAttribute("position");for(let g=0;g<I.count;g++)this.getVertexPosition(g,hE),this.boundingSphere.expandByPoint(hE)}copy(A,I){return super.copy(A,I),this.bindMode=A.bindMode,this.bindMatrix.copy(A.bindMatrix),this.bindMatrixInverse.copy(A.bindMatrixInverse),this.skeleton=A.skeleton,A.boundingBox!==null&&(this.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(this.boundingSphere=A.boundingSphere.clone()),this}raycast(A,I){const g=this.material,C=this.matrixWorld;g!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mi.copy(this.boundingSphere),Mi.applyMatrix4(C),A.ray.intersectsSphere(Mi)!==!1&&(Ee.copy(C).invert(),li.copy(A.ray).applyMatrix4(Ee),!(this.boundingBox!==null&&li.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(A,I,li)))}getVertexPosition(A,I){return super.getVertexPosition(A,I),this.applyBoneTransform(A,I),I}bind(A,I){this.skeleton=A,I===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),I=this.matrixWorld),this.bindMatrix.copy(I),this.bindMatrixInverse.copy(I).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const A=new Bg,I=this.geometry.attributes.skinWeight;for(let g=0,C=I.count;g<C;g++){A.fromBufferAttribute(I,g);const Q=1/A.manhattanLength();Q!==1/0?A.multiplyScalar(Q):A.set(1,0,0,0),I.setXYZW(g,A.x,A.y,A.z,A.w)}}updateMatrixWorld(A){super.updateMatrixWorld(A),this.bindMode===To?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===FD?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(A,I){const g=this.skeleton,C=this.geometry;Ce.fromBufferAttribute(C.attributes.skinIndex,A),Be.fromBufferAttribute(C.attributes.skinWeight,A),ge.copy(I).applyMatrix4(this.bindMatrix),I.set(0,0,0);for(let Q=0;Q<4;Q++){const i=Be.getComponent(Q);if(i!==0){const o=Ce.getComponent(Q);Qe.multiplyMatrices(g.bones[o].matrixWorld,g.boneInverses[o]),I.addScaledVector(ac.copy(ge).applyMatrix4(Qe),i)}}return I.applyMatrix4(this.bindMatrixInverse)}boneTransform(A,I){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(A,I)}}class as extends Dg{constructor(){super(),this.isBone=!0,this.type="Bone"}}class nc extends Ug{constructor(A=null,I=1,g=1,C,Q,i,o,e,s=yg,D=yg,n,r){super(null,i,o,e,s,D,C,Q,n,r),this.isDataTexture=!0,this.image={data:A,width:I,height:g},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ie=new kI,hc=new kI;class eo{constructor(A=[],I=[]){this.uuid=CC(),this.bones=A.slice(0),this.boneInverses=I,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const A=this.bones,I=this.boneInverses;if(this.boneMatrices=new Float32Array(A.length*16),I.length===0)this.calculateInverses();else if(A.length!==I.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let g=0,C=this.bones.length;g<C;g++)this.boneInverses.push(new kI)}}calculateInverses(){this.boneInverses.length=0;for(let A=0,I=this.bones.length;A<I;A++){const g=new kI;this.bones[A]&&g.copy(this.bones[A].matrixWorld).invert(),this.boneInverses.push(g)}}pose(){for(let A=0,I=this.bones.length;A<I;A++){const g=this.bones[A];g&&g.matrixWorld.copy(this.boneInverses[A]).invert()}for(let A=0,I=this.bones.length;A<I;A++){const g=this.bones[A];g&&(g.parent&&g.parent.isBone?(g.matrix.copy(g.parent.matrixWorld).invert(),g.matrix.multiply(g.matrixWorld)):g.matrix.copy(g.matrixWorld),g.matrix.decompose(g.position,g.quaternion,g.scale))}}update(){const A=this.bones,I=this.boneInverses,g=this.boneMatrices,C=this.boneTexture;for(let Q=0,i=A.length;Q<i;Q++){const o=A[Q]?A[Q].matrixWorld:hc;ie.multiplyMatrices(o,I[Q]),ie.toArray(g,Q*16)}C!==null&&(C.needsUpdate=!0)}clone(){return new eo(this.bones,this.boneInverses)}computeBoneTexture(){let A=Math.sqrt(this.bones.length*4);A=Math.ceil(A/4)*4,A=Math.max(A,4);const I=new Float32Array(A*A*4);I.set(this.boneMatrices);const g=new nc(I,A,A,Pg,MC);return g.needsUpdate=!0,this.boneMatrices=I,this.boneTexture=g,this}getBoneByName(A){for(let I=0,g=this.bones.length;I<g;I++){const C=this.bones[I];if(C.name===A)return C}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(A,I){this.uuid=A.uuid;for(let g=0,C=A.bones.length;g<C;g++){const Q=A.bones[g];let i=I[Q];i===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",Q),i=new as),this.bones.push(i),this.boneInverses.push(new kI().fromArray(A.boneInverses[g]))}return this.init(),this}toJSON(){const A={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};A.uuid=this.uuid;const I=this.bones,g=this.boneInverses;for(let C=0,Q=I.length;C<Q;C++){const i=I[C];A.bones.push(i.uuid);const o=g[C];A.boneInverses.push(o.toArray())}return A}}class Oi extends fg{constructor(A,I,g,C=1){super(A,I,g),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=C}copy(A){return super.copy(A),this.meshPerAttribute=A.meshPerAttribute,this}toJSON(){const A=super.toJSON();return A.meshPerAttribute=this.meshPerAttribute,A.isInstancedBufferAttribute=!0,A}}const qB=new kI,oe=new kI,rE=[],te=new dC,rc=new kI,cQ=new Sg,GQ=new sC;class wc extends Sg{constructor(A,I,g){super(A,I),this.isInstancedMesh=!0,this.instanceMatrix=new Oi(new Float32Array(g*16),16),this.instanceColor=null,this.count=g,this.boundingBox=null,this.boundingSphere=null;for(let C=0;C<g;C++)this.setMatrixAt(C,rc)}computeBoundingBox(){const A=this.geometry,I=this.count;this.boundingBox===null&&(this.boundingBox=new dC),A.boundingBox===null&&A.computeBoundingBox(),this.boundingBox.makeEmpty();for(let g=0;g<I;g++)this.getMatrixAt(g,qB),te.copy(A.boundingBox).applyMatrix4(qB),this.boundingBox.union(te)}computeBoundingSphere(){const A=this.geometry,I=this.count;this.boundingSphere===null&&(this.boundingSphere=new sC),A.boundingSphere===null&&A.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let g=0;g<I;g++)this.getMatrixAt(g,qB),GQ.copy(A.boundingSphere).applyMatrix4(qB),this.boundingSphere.union(GQ)}copy(A,I){return super.copy(A,I),this.instanceMatrix.copy(A.instanceMatrix),A.instanceColor!==null&&(this.instanceColor=A.instanceColor.clone()),this.count=A.count,A.boundingBox!==null&&(this.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(this.boundingSphere=A.boundingSphere.clone()),this}getColorAt(A,I){I.fromArray(this.instanceColor.array,A*3)}getMatrixAt(A,I){I.fromArray(this.instanceMatrix.array,A*16)}raycast(A,I){const g=this.matrixWorld,C=this.count;if(cQ.geometry=this.geometry,cQ.material=this.material,cQ.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),GQ.copy(this.boundingSphere),GQ.applyMatrix4(g),A.ray.intersectsSphere(GQ)!==!1))for(let Q=0;Q<C;Q++){this.getMatrixAt(Q,qB),oe.multiplyMatrices(g,qB),cQ.matrixWorld=oe,cQ.raycast(A,rE);for(let i=0,o=rE.length;i<o;i++){const e=rE[i];e.instanceId=Q,e.object=this,I.push(e)}rE.length=0}}setColorAt(A,I){this.instanceColor===null&&(this.instanceColor=new Oi(new Float32Array(this.instanceMatrix.count*3),3)),I.toArray(this.instanceColor.array,A*3)}setMatrixAt(A,I){I.toArray(this.instanceMatrix.array,A*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ds extends eC{constructor(A){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yI(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.linewidth=A.linewidth,this.linecap=A.linecap,this.linejoin=A.linejoin,this.fog=A.fog,this}}const ee=new Z,se=new Z,ae=new kI,Si=new HE,wE=new sC;class so extends Dg{constructor(A=new BC,I=new Ds){super(),this.isLine=!0,this.type="Line",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}computeLineDistances(){const A=this.geometry;if(A.index===null){const I=A.attributes.position,g=[0];for(let C=1,Q=I.count;C<Q;C++)ee.fromBufferAttribute(I,C-1),se.fromBufferAttribute(I,C),g[C]=g[C-1],g[C]+=ee.distanceTo(se);A.setAttribute("lineDistance",new UC(g,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(A,I){const g=this.geometry,C=this.matrixWorld,Q=A.params.Line.threshold,i=g.drawRange;if(g.boundingSphere===null&&g.computeBoundingSphere(),wE.copy(g.boundingSphere),wE.applyMatrix4(C),wE.radius+=Q,A.ray.intersectsSphere(wE)===!1)return;ae.copy(C).invert(),Si.copy(A.ray).applyMatrix4(ae);const o=Q/((this.scale.x+this.scale.y+this.scale.z)/3),e=o*o,s=new Z,D=new Z,n=new Z,r=new Z,F=this.isLineSegments?2:1,l=g.index,G=g.attributes.position;if(l!==null){const w=Math.max(0,i.start),Y=Math.min(l.count,i.start+i.count);for(let K=w,f=Y-1;K<f;K+=F){const q=l.getX(K),b=l.getX(K+1);if(s.fromBufferAttribute(G,q),D.fromBufferAttribute(G,b),Si.distanceSqToSegment(s,D,r,n)>e)continue;r.applyMatrix4(this.matrixWorld);const BA=A.ray.origin.distanceTo(r);BA<A.near||BA>A.far||I.push({distance:BA,point:n.clone().applyMatrix4(this.matrixWorld),index:K,face:null,faceIndex:null,object:this})}}else{const w=Math.max(0,i.start),Y=Math.min(G.count,i.start+i.count);for(let K=w,f=Y-1;K<f;K+=F){if(s.fromBufferAttribute(G,K),D.fromBufferAttribute(G,K+1),Si.distanceSqToSegment(s,D,r,n)>e)continue;r.applyMatrix4(this.matrixWorld);const b=A.ray.origin.distanceTo(r);b<A.near||b>A.far||I.push({distance:b,point:n.clone().applyMatrix4(this.matrixWorld),index:K,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Q=0,i=C.length;Q<i;Q++){const o=C[Q].name||String(Q);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=Q}}}}}const De=new Z,ne=new Z;class cc extends so{constructor(A,I){super(A,I),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const A=this.geometry;if(A.index===null){const I=A.attributes.position,g=[];for(let C=0,Q=I.count;C<Q;C+=2)De.fromBufferAttribute(I,C),ne.fromBufferAttribute(I,C+1),g[C]=C===0?0:g[C-1],g[C+1]=g[C]+De.distanceTo(ne);A.setAttribute("lineDistance",new UC(g,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gc extends so{constructor(A,I){super(A,I),this.isLineLoop=!0,this.type="LineLoop"}}class ns extends eC{constructor(A){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yI(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.alphaMap=A.alphaMap,this.size=A.size,this.sizeAttenuation=A.sizeAttenuation,this.fog=A.fog,this}}const he=new kI,Zi=new HE,cE=new sC,GE=new Z;class Rc extends Dg{constructor(A=new BC,I=new ns){super(),this.isPoints=!0,this.type="Points",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}raycast(A,I){const g=this.geometry,C=this.matrixWorld,Q=A.params.Points.threshold,i=g.drawRange;if(g.boundingSphere===null&&g.computeBoundingSphere(),cE.copy(g.boundingSphere),cE.applyMatrix4(C),cE.radius+=Q,A.ray.intersectsSphere(cE)===!1)return;he.copy(C).invert(),Zi.copy(A.ray).applyMatrix4(he);const o=Q/((this.scale.x+this.scale.y+this.scale.z)/3),e=o*o,s=g.index,n=g.attributes.position;if(s!==null){const r=Math.max(0,i.start),F=Math.min(s.count,i.start+i.count);for(let l=r,S=F;l<S;l++){const G=s.getX(l);GE.fromBufferAttribute(n,G),re(GE,G,e,C,A,I,this)}}else{const r=Math.max(0,i.start),F=Math.min(n.count,i.start+i.count);for(let l=r,S=F;l<S;l++)GE.fromBufferAttribute(n,l),re(GE,l,e,C,A,I,this)}}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Q=0,i=C.length;Q<i;Q++){const o=C[Q].name||String(Q);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=Q}}}}}function re(B,A,I,g,C,Q,i){const o=Zi.distanceSqToPoint(B);if(o<I){const e=new Z;Zi.closestPointToPoint(B,e),e.applyMatrix4(g);const s=C.ray.origin.distanceTo(e);if(s<C.near||s>C.far)return;Q.push({distance:s,distanceToRay:Math.sqrt(o),point:e,index:A,face:null,object:i})}}class qE extends eC{constructor(A){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new yI(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yI(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oe,this.normalScale=new VI(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.defines={STANDARD:""},this.color.copy(A.color),this.roughness=A.roughness,this.metalness=A.metalness,this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.emissive.copy(A.emissive),this.emissiveMap=A.emissiveMap,this.emissiveIntensity=A.emissiveIntensity,this.bumpMap=A.bumpMap,this.bumpScale=A.bumpScale,this.normalMap=A.normalMap,this.normalMapType=A.normalMapType,this.normalScale.copy(A.normalScale),this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.roughnessMap=A.roughnessMap,this.metalnessMap=A.metalnessMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapIntensity=A.envMapIntensity,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.flatShading=A.flatShading,this.fog=A.fog,this}}class kC extends qE{constructor(A){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new VI(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yg(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(I){this.ior=(1+.4*I)/(1-.4*I)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new yI(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new yI(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new yI(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(A)}get anisotropy(){return this._anisotropy}set anisotropy(A){this._anisotropy>0!=A>0&&this.version++,this._anisotropy=A}get clearcoat(){return this._clearcoat}set clearcoat(A){this._clearcoat>0!=A>0&&this.version++,this._clearcoat=A}get iridescence(){return this._iridescence}set iridescence(A){this._iridescence>0!=A>0&&this.version++,this._iridescence=A}get sheen(){return this._sheen}set sheen(A){this._sheen>0!=A>0&&this.version++,this._sheen=A}get transmission(){return this._transmission}set transmission(A){this._transmission>0!=A>0&&this.version++,this._transmission=A}copy(A){return super.copy(A),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=A.anisotropy,this.anisotropyRotation=A.anisotropyRotation,this.anisotropyMap=A.anisotropyMap,this.clearcoat=A.clearcoat,this.clearcoatMap=A.clearcoatMap,this.clearcoatRoughness=A.clearcoatRoughness,this.clearcoatRoughnessMap=A.clearcoatRoughnessMap,this.clearcoatNormalMap=A.clearcoatNormalMap,this.clearcoatNormalScale.copy(A.clearcoatNormalScale),this.ior=A.ior,this.iridescence=A.iridescence,this.iridescenceMap=A.iridescenceMap,this.iridescenceIOR=A.iridescenceIOR,this.iridescenceThicknessRange=[...A.iridescenceThicknessRange],this.iridescenceThicknessMap=A.iridescenceThicknessMap,this.sheen=A.sheen,this.sheenColor.copy(A.sheenColor),this.sheenColorMap=A.sheenColorMap,this.sheenRoughness=A.sheenRoughness,this.sheenRoughnessMap=A.sheenRoughnessMap,this.transmission=A.transmission,this.transmissionMap=A.transmissionMap,this.thickness=A.thickness,this.thicknessMap=A.thicknessMap,this.attenuationDistance=A.attenuationDistance,this.attenuationColor.copy(A.attenuationColor),this.specularIntensity=A.specularIntensity,this.specularIntensityMap=A.specularIntensityMap,this.specularColor.copy(A.specularColor),this.specularColorMap=A.specularColorMap,this}}function RE(B,A,I){return!B||!I&&B.constructor===A?B:typeof A.BYTES_PER_ELEMENT=="number"?new A(B):Array.prototype.slice.call(B)}function Fc(B){return ArrayBuffer.isView(B)&&!(B instanceof DataView)}function Nc(B){function A(C,Q){return B[C]-B[Q]}const I=B.length,g=new Array(I);for(let C=0;C!==I;++C)g[C]=C;return g.sort(A),g}function we(B,A,I){const g=B.length,C=new B.constructor(g);for(let Q=0,i=0;i!==g;++Q){const o=I[Q]*A;for(let e=0;e!==A;++e)C[i++]=B[o+e]}return C}function hs(B,A,I,g){let C=1,Q=B[0];for(;Q!==void 0&&Q[g]===void 0;)Q=B[C++];if(Q===void 0)return;let i=Q[g];if(i!==void 0)if(Array.isArray(i))do i=Q[g],i!==void 0&&(A.push(Q.time),I.push.apply(I,i)),Q=B[C++];while(Q!==void 0);else if(i.toArray!==void 0)do i=Q[g],i!==void 0&&(A.push(Q.time),i.toArray(I,I.length)),Q=B[C++];while(Q!==void 0);else do i=Q[g],i!==void 0&&(A.push(Q.time),I.push(i)),Q=B[C++];while(Q!==void 0)}class JQ{constructor(A,I,g,C){this.parameterPositions=A,this._cachedIndex=0,this.resultBuffer=C!==void 0?C:new I.constructor(g),this.sampleValues=I,this.valueSize=g,this.settings=null,this.DefaultSettings_={}}evaluate(A){const I=this.parameterPositions;let g=this._cachedIndex,C=I[g],Q=I[g-1];A:{I:{let i;g:{C:if(!(A<C)){for(let o=g+2;;){if(C===void 0){if(A<Q)break C;return g=I.length,this._cachedIndex=g,this.copySampleValue_(g-1)}if(g===o)break;if(Q=C,C=I[++g],A<C)break I}i=I.length;break g}if(!(A>=Q)){const o=I[1];A<o&&(g=2,Q=o);for(let e=g-2;;){if(Q===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(g===e)break;if(C=Q,Q=I[--g-1],A>=Q)break I}i=g,g=0;break g}break A}for(;g<i;){const o=g+i>>>1;A<I[o]?i=o:g=o+1}if(C=I[g],Q=I[g-1],Q===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(C===void 0)return g=I.length,this._cachedIndex=g,this.copySampleValue_(g-1)}this._cachedIndex=g,this.intervalChanged_(g,Q,C)}return this.interpolate_(g,Q,A,C)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(A){const I=this.resultBuffer,g=this.sampleValues,C=this.valueSize,Q=A*C;for(let i=0;i!==C;++i)I[i]=g[Q+i];return I}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class yc extends JQ{constructor(A,I,g,C){super(A,I,g,C),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xB,endingEnd:xB}}intervalChanged_(A,I,g){const C=this.parameterPositions;let Q=A-2,i=A+1,o=C[Q],e=C[i];if(o===void 0)switch(this.getSettings_().endingStart){case bB:Q=A,o=2*I-g;break;case SE:Q=C.length-2,o=I+C[Q]-C[Q+1];break;default:Q=A,o=g}if(e===void 0)switch(this.getSettings_().endingEnd){case bB:i=A,e=2*g-I;break;case SE:i=1,e=g+C[1]-C[0];break;default:i=A-1,e=I}const s=(g-I)*.5,D=this.valueSize;this._weightPrev=s/(I-o),this._weightNext=s/(e-g),this._offsetPrev=Q*D,this._offsetNext=i*D}interpolate_(A,I,g,C){const Q=this.resultBuffer,i=this.sampleValues,o=this.valueSize,e=A*o,s=e-o,D=this._offsetPrev,n=this._offsetNext,r=this._weightPrev,F=this._weightNext,l=(g-I)/(C-I),S=l*l,G=S*l,w=-r*G+2*r*S-r*l,Y=(1+r)*G+(-1.5-2*r)*S+(-.5+r)*l+1,K=(-1-F)*G+(1.5+F)*S+.5*l,f=F*G-F*S;for(let q=0;q!==o;++q)Q[q]=w*i[D+q]+Y*i[s+q]+K*i[e+q]+f*i[n+q];return Q}}class rs extends JQ{constructor(A,I,g,C){super(A,I,g,C)}interpolate_(A,I,g,C){const Q=this.resultBuffer,i=this.sampleValues,o=this.valueSize,e=A*o,s=e-o,D=(g-I)/(C-I),n=1-D;for(let r=0;r!==o;++r)Q[r]=i[s+r]*n+i[e+r]*D;return Q}}class Mc extends JQ{constructor(A,I,g,C){super(A,I,g,C)}interpolate_(A){return this.copySampleValue_(A-1)}}class aC{constructor(A,I,g,C){if(A===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(I===void 0||I.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+A);this.name=A,this.times=RE(I,this.TimeBufferType),this.values=RE(g,this.ValueBufferType),this.setInterpolation(C||this.DefaultInterpolation)}static toJSON(A){const I=A.constructor;let g;if(I.toJSON!==this.toJSON)g=I.toJSON(A);else{g={name:A.name,times:RE(A.times,Array),values:RE(A.values,Array)};const C=A.getInterpolation();C!==A.DefaultInterpolation&&(g.interpolation=C)}return g.type=A.ValueTypeName,g}InterpolantFactoryMethodDiscrete(A){return new Mc(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodLinear(A){return new rs(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodSmooth(A){return new yc(this.times,this.values,this.getValueSize(),A)}setInterpolation(A){let I;switch(A){case KQ:I=this.InterpolantFactoryMethodDiscrete;break;case PB:I=this.InterpolantFactoryMethodLinear;break;case Ai:I=this.InterpolantFactoryMethodSmooth;break}if(I===void 0){const g="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(A!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(g);return console.warn("THREE.KeyframeTrack:",g),this}return this.createInterpolant=I,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return KQ;case this.InterpolantFactoryMethodLinear:return PB;case this.InterpolantFactoryMethodSmooth:return Ai}}getValueSize(){return this.values.length/this.times.length}shift(A){if(A!==0){const I=this.times;for(let g=0,C=I.length;g!==C;++g)I[g]+=A}return this}scale(A){if(A!==1){const I=this.times;for(let g=0,C=I.length;g!==C;++g)I[g]*=A}return this}trim(A,I){const g=this.times,C=g.length;let Q=0,i=C-1;for(;Q!==C&&g[Q]<A;)++Q;for(;i!==-1&&g[i]>I;)--i;if(++i,Q!==0||i!==C){Q>=i&&(i=Math.max(i,1),Q=i-1);const o=this.getValueSize();this.times=g.slice(Q,i),this.values=this.values.slice(Q*o,i*o)}return this}validate(){let A=!0;const I=this.getValueSize();I-Math.floor(I)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),A=!1);const g=this.times,C=this.values,Q=g.length;Q===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),A=!1);let i=null;for(let o=0;o!==Q;o++){const e=g[o];if(typeof e=="number"&&isNaN(e)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,e),A=!1;break}if(i!==null&&i>e){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,e,i),A=!1;break}i=e}if(C!==void 0&&Fc(C))for(let o=0,e=C.length;o!==e;++o){const s=C[o];if(isNaN(s)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,s),A=!1;break}}return A}optimize(){const A=this.times.slice(),I=this.values.slice(),g=this.getValueSize(),C=this.getInterpolation()===Ai,Q=A.length-1;let i=1;for(let o=1;o<Q;++o){let e=!1;const s=A[o],D=A[o+1];if(s!==D&&(o!==1||s!==A[0]))if(C)e=!0;else{const n=o*g,r=n-g,F=n+g;for(let l=0;l!==g;++l){const S=I[n+l];if(S!==I[r+l]||S!==I[F+l]){e=!0;break}}}if(e){if(o!==i){A[i]=A[o];const n=o*g,r=i*g;for(let F=0;F!==g;++F)I[r+F]=I[n+F]}++i}}if(Q>0){A[i]=A[Q];for(let o=Q*g,e=i*g,s=0;s!==g;++s)I[e+s]=I[o+s];++i}return i!==A.length?(this.times=A.slice(0,i),this.values=I.slice(0,i*g)):(this.times=A,this.values=I),this}clone(){const A=this.times.slice(),I=this.values.slice(),g=this.constructor,C=new g(this.name,A,I);return C.createInterpolant=this.createInterpolant,C}}aC.prototype.TimeBufferType=Float32Array;aC.prototype.ValueBufferType=Float32Array;aC.prototype.DefaultInterpolation=PB;class CQ extends aC{}CQ.prototype.ValueTypeName="bool";CQ.prototype.ValueBufferType=Array;CQ.prototype.DefaultInterpolation=KQ;CQ.prototype.InterpolantFactoryMethodLinear=void 0;CQ.prototype.InterpolantFactoryMethodSmooth=void 0;class ws extends aC{}ws.prototype.ValueTypeName="color";class _B extends aC{}_B.prototype.ValueTypeName="number";class lc extends JQ{constructor(A,I,g,C){super(A,I,g,C)}interpolate_(A,I,g,C){const Q=this.resultBuffer,i=this.sampleValues,o=this.valueSize,e=(g-I)/(C-I);let s=A*o;for(let D=s+o;s!==D;s+=4)_g.slerpFlat(Q,0,i,s-o,i,s,e);return Q}}class hB extends aC{InterpolantFactoryMethodLinear(A){return new lc(this.times,this.values,this.getValueSize(),A)}}hB.prototype.ValueTypeName="quaternion";hB.prototype.DefaultInterpolation=PB;hB.prototype.InterpolantFactoryMethodSmooth=void 0;class BQ extends aC{}BQ.prototype.ValueTypeName="string";BQ.prototype.ValueBufferType=Array;BQ.prototype.DefaultInterpolation=KQ;BQ.prototype.InterpolantFactoryMethodLinear=void 0;BQ.prototype.InterpolantFactoryMethodSmooth=void 0;class $B extends aC{}$B.prototype.ValueTypeName="vector";class vi{constructor(A,I=-1,g,C=Co){this.name=A,this.tracks=g,this.duration=I,this.blendMode=C,this.uuid=CC(),this.duration<0&&this.resetDuration()}static parse(A){const I=[],g=A.tracks,C=1/(A.fps||1);for(let i=0,o=g.length;i!==o;++i)I.push(Uc(g[i]).scale(C));const Q=new this(A.name,A.duration,I,A.blendMode);return Q.uuid=A.uuid,Q}static toJSON(A){const I=[],g=A.tracks,C={name:A.name,duration:A.duration,tracks:I,uuid:A.uuid,blendMode:A.blendMode};for(let Q=0,i=g.length;Q!==i;++Q)I.push(aC.toJSON(g[Q]));return C}static CreateFromMorphTargetSequence(A,I,g,C){const Q=I.length,i=[];for(let o=0;o<Q;o++){let e=[],s=[];e.push((o+Q-1)%Q,o,(o+1)%Q),s.push(0,1,0);const D=Nc(e);e=we(e,1,D),s=we(s,1,D),!C&&e[0]===0&&(e.push(Q),s.push(s[0])),i.push(new _B(".morphTargetInfluences["+I[o].name+"]",e,s).scale(1/g))}return new this(A,-1,i)}static findByName(A,I){let g=A;if(!Array.isArray(A)){const C=A;g=C.geometry&&C.geometry.animations||C.animations}for(let C=0;C<g.length;C++)if(g[C].name===I)return g[C];return null}static CreateClipsFromMorphTargetSequences(A,I,g){const C={},Q=/^([\w-]*?)([\d]+)$/;for(let o=0,e=A.length;o<e;o++){const s=A[o],D=s.name.match(Q);if(D&&D.length>1){const n=D[1];let r=C[n];r||(C[n]=r=[]),r.push(s)}}const i=[];for(const o in C)i.push(this.CreateFromMorphTargetSequence(o,C[o],I,g));return i}static parseAnimation(A,I){if(!A)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const g=function(n,r,F,l,S){if(F.length!==0){const G=[],w=[];hs(F,G,w,l),G.length!==0&&S.push(new n(r,G,w))}},C=[],Q=A.name||"default",i=A.fps||30,o=A.blendMode;let e=A.length||-1;const s=A.hierarchy||[];for(let n=0;n<s.length;n++){const r=s[n].keys;if(!(!r||r.length===0))if(r[0].morphTargets){const F={};let l;for(l=0;l<r.length;l++)if(r[l].morphTargets)for(let S=0;S<r[l].morphTargets.length;S++)F[r[l].morphTargets[S]]=-1;for(const S in F){const G=[],w=[];for(let Y=0;Y!==r[l].morphTargets.length;++Y){const K=r[l];G.push(K.time),w.push(K.morphTarget===S?1:0)}C.push(new _B(".morphTargetInfluence["+S+"]",G,w))}e=F.length*i}else{const F=".bones["+I[n].name+"]";g($B,F+".position",r,"pos",C),g(hB,F+".quaternion",r,"rot",C),g($B,F+".scale",r,"scl",C)}}return C.length===0?null:new this(Q,e,C,o)}resetDuration(){const A=this.tracks;let I=0;for(let g=0,C=A.length;g!==C;++g){const Q=this.tracks[g];I=Math.max(I,Q.times[Q.times.length-1])}return this.duration=I,this}trim(){for(let A=0;A<this.tracks.length;A++)this.tracks[A].trim(0,this.duration);return this}validate(){let A=!0;for(let I=0;I<this.tracks.length;I++)A=A&&this.tracks[I].validate();return A}optimize(){for(let A=0;A<this.tracks.length;A++)this.tracks[A].optimize();return this}clone(){const A=[];for(let I=0;I<this.tracks.length;I++)A.push(this.tracks[I].clone());return new this.constructor(this.name,this.duration,A,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Sc(B){switch(B.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _B;case"vector":case"vector2":case"vector3":case"vector4":return $B;case"color":return ws;case"quaternion":return hB;case"bool":case"boolean":return CQ;case"string":return BQ}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+B)}function Uc(B){if(B.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const A=Sc(B.type);if(B.times===void 0){const I=[],g=[];hs(B.keys,I,g,"value"),B.times=I,B.values=g}return A.parse!==void 0?A.parse(B):new A(B.name,B.times,B.values,B.interpolation)}const AQ={enabled:!1,files:{},add:function(B,A){this.enabled!==!1&&(this.files[B]=A)},get:function(B){if(this.enabled!==!1)return this.files[B]},remove:function(B){delete this.files[B]},clear:function(){this.files={}}};class Kc{constructor(A,I,g){const C=this;let Q=!1,i=0,o=0,e;const s=[];this.onStart=void 0,this.onLoad=A,this.onProgress=I,this.onError=g,this.itemStart=function(D){o++,Q===!1&&C.onStart!==void 0&&C.onStart(D,i,o),Q=!0},this.itemEnd=function(D){i++,C.onProgress!==void 0&&C.onProgress(D,i,o),i===o&&(Q=!1,C.onLoad!==void 0&&C.onLoad())},this.itemError=function(D){C.onError!==void 0&&C.onError(D)},this.resolveURL=function(D){return e?e(D):D},this.setURLModifier=function(D){return e=D,this},this.addHandler=function(D,n){return s.push(D,n),this},this.removeHandler=function(D){const n=s.indexOf(D);return n!==-1&&s.splice(n,2),this},this.getHandler=function(D){for(let n=0,r=s.length;n<r;n+=2){const F=s[n],l=s[n+1];if(F.global&&(F.lastIndex=0),F.test(D))return l}return null}}}const dc=new Kc;class QQ{constructor(A){this.manager=A!==void 0?A:dc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(A,I){const g=this;return new Promise(function(C,Q){g.load(A,C,I,Q)})}parse(){}setCrossOrigin(A){return this.crossOrigin=A,this}setWithCredentials(A){return this.withCredentials=A,this}setPath(A){return this.path=A,this}setResourcePath(A){return this.resourcePath=A,this}setRequestHeader(A){return this.requestHeader=A,this}}QQ.DEFAULT_MATERIAL_NAME="__DEFAULT";const FC={};class kc extends Error{constructor(A,I){super(A),this.response=I}}class cs extends QQ{constructor(A){super(A)}load(A,I,g,C){A===void 0&&(A=""),this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const Q=AQ.get(A);if(Q!==void 0)return this.manager.itemStart(A),setTimeout(()=>{I&&I(Q),this.manager.itemEnd(A)},0),Q;if(FC[A]!==void 0){FC[A].push({onLoad:I,onProgress:g,onError:C});return}FC[A]=[],FC[A].push({onLoad:I,onProgress:g,onError:C});const i=new Request(A,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,e=this.responseType;fetch(i).then(s=>{if(s.status===200||s.status===0){if(s.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||s.body===void 0||s.body.getReader===void 0)return s;const D=FC[A],n=s.body.getReader(),r=s.headers.get("Content-Length")||s.headers.get("X-File-Size"),F=r?parseInt(r):0,l=F!==0;let S=0;const G=new ReadableStream({start(w){Y();function Y(){n.read().then(({done:K,value:f})=>{if(K)w.close();else{S+=f.byteLength;const q=new ProgressEvent("progress",{lengthComputable:l,loaded:S,total:F});for(let b=0,T=D.length;b<T;b++){const BA=D[b];BA.onProgress&&BA.onProgress(q)}w.enqueue(f),Y()}})}}});return new Response(G)}else throw new kc(`fetch for "${s.url}" responded with ${s.status}: ${s.statusText}`,s)}).then(s=>{switch(e){case"arraybuffer":return s.arrayBuffer();case"blob":return s.blob();case"document":return s.text().then(D=>new DOMParser().parseFromString(D,o));case"json":return s.json();default:if(o===void 0)return s.text();{const n=/charset="?([^;"\s]*)"?/i.exec(o),r=n&&n[1]?n[1].toLowerCase():void 0,F=new TextDecoder(r);return s.arrayBuffer().then(l=>F.decode(l))}}}).then(s=>{AQ.add(A,s);const D=FC[A];delete FC[A];for(let n=0,r=D.length;n<r;n++){const F=D[n];F.onLoad&&F.onLoad(s)}}).catch(s=>{const D=FC[A];if(D===void 0)throw this.manager.itemError(A),s;delete FC[A];for(let n=0,r=D.length;n<r;n++){const F=D[n];F.onError&&F.onError(s)}this.manager.itemError(A)}).finally(()=>{this.manager.itemEnd(A)}),this.manager.itemStart(A)}setResponseType(A){return this.responseType=A,this}setMimeType(A){return this.mimeType=A,this}}class Jc extends QQ{constructor(A){super(A)}load(A,I,g,C){this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const Q=this,i=AQ.get(A);if(i!==void 0)return Q.manager.itemStart(A),setTimeout(function(){I&&I(i),Q.manager.itemEnd(A)},0),i;const o=dQ("img");function e(){D(),AQ.add(A,this),I&&I(this),Q.manager.itemEnd(A)}function s(n){D(),C&&C(n),Q.manager.itemError(A),Q.manager.itemEnd(A)}function D(){o.removeEventListener("load",e,!1),o.removeEventListener("error",s,!1)}return o.addEventListener("load",e,!1),o.addEventListener("error",s,!1),A.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Q.manager.itemStart(A),o.src=A,o}}class ao extends QQ{constructor(A){super(A)}load(A,I,g,C){const Q=new Ug,i=new Jc(this.manager);return i.setCrossOrigin(this.crossOrigin),i.setPath(this.path),i.load(A,function(o){Q.image=o,Q.needsUpdate=!0,I!==void 0&&I(Q)},g,C),Q}}class Do extends Dg{constructor(A,I=1){super(),this.isLight=!0,this.type="Light",this.color=new yI(A),this.intensity=I}dispose(){}copy(A,I){return super.copy(A,I),this.color.copy(A.color),this.intensity=A.intensity,this}toJSON(A){const I=super.toJSON(A);return I.object.color=this.color.getHex(),I.object.intensity=this.intensity,this.groundColor!==void 0&&(I.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(I.object.distance=this.distance),this.angle!==void 0&&(I.object.angle=this.angle),this.decay!==void 0&&(I.object.decay=this.decay),this.penumbra!==void 0&&(I.object.penumbra=this.penumbra),this.shadow!==void 0&&(I.object.shadow=this.shadow.toJSON()),I}}const Ui=new kI,ce=new Z,Ge=new Z;class no{constructor(A){this.camera=A,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new VI(512,512),this.map=null,this.mapPass=null,this.matrix=new kI,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new VI(1,1),this._viewportCount=1,this._viewports=[new Bg(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(A){const I=this.camera,g=this.matrix;ce.setFromMatrixPosition(A.matrixWorld),I.position.copy(ce),Ge.setFromMatrixPosition(A.target.matrixWorld),I.lookAt(Ge),I.updateMatrixWorld(),Ui.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ui),g.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),g.multiply(Ui)}getViewport(A){return this._viewports[A]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(A){return this.camera=A.camera.clone(),this.bias=A.bias,this.radius=A.radius,this.mapSize.copy(A.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const A={};return this.bias!==0&&(A.bias=this.bias),this.normalBias!==0&&(A.normalBias=this.normalBias),this.radius!==1&&(A.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(A.mapSize=this.mapSize.toArray()),A.camera=this.camera.toJSON(!1).object,delete A.camera.matrix,A}}class Yc extends no{constructor(){super(new Hg(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(A){const I=this.camera,g=jB*2*A.angle*this.focus,C=this.mapSize.width/this.mapSize.height,Q=A.distance||I.far;(g!==I.fov||C!==I.aspect||Q!==I.far)&&(I.fov=g,I.aspect=C,I.far=Q,I.updateProjectionMatrix()),super.updateMatrices(A)}copy(A){return super.copy(A),this.focus=A.focus,this}}class fc extends Do{constructor(A,I,g=0,C=Math.PI/3,Q=0,i=2){super(A,I),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dg.DEFAULT_UP),this.updateMatrix(),this.target=new Dg,this.distance=g,this.angle=C,this.penumbra=Q,this.decay=i,this.map=null,this.shadow=new Yc}get power(){return this.intensity*Math.PI}set power(A){this.intensity=A/Math.PI}dispose(){this.shadow.dispose()}copy(A,I){return super.copy(A,I),this.distance=A.distance,this.angle=A.angle,this.penumbra=A.penumbra,this.decay=A.decay,this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}}const Re=new kI,RQ=new Z,Ki=new Z;class Lc extends no{constructor(){super(new Hg(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new VI(4,2),this._viewportCount=6,this._viewports=[new Bg(2,1,1,1),new Bg(0,1,1,1),new Bg(3,1,1,1),new Bg(1,1,1,1),new Bg(3,0,1,1),new Bg(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(A,I=0){const g=this.camera,C=this.matrix,Q=A.distance||g.far;Q!==g.far&&(g.far=Q,g.updateProjectionMatrix()),RQ.setFromMatrixPosition(A.matrixWorld),g.position.copy(RQ),Ki.copy(g.position),Ki.add(this._cubeDirections[I]),g.up.copy(this._cubeUps[I]),g.lookAt(Ki),g.updateMatrixWorld(),C.makeTranslation(-RQ.x,-RQ.y,-RQ.z),Re.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Re)}}class uc extends Do{constructor(A,I,g=0,C=2){super(A,I),this.isPointLight=!0,this.type="PointLight",this.distance=g,this.decay=C,this.shadow=new Lc}get power(){return this.intensity*4*Math.PI}set power(A){this.intensity=A/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(A,I){return super.copy(A,I),this.distance=A.distance,this.decay=A.decay,this.shadow=A.shadow.clone(),this}}class Hc extends no{constructor(){super(new io(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pc extends Do{constructor(A,I){super(A,I),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dg.DEFAULT_UP),this.updateMatrix(),this.target=new Dg,this.shadow=new Hc}dispose(){this.shadow.dispose()}copy(A){return super.copy(A),this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}}class SQ{static decodeText(A){if(typeof TextDecoder<"u")return new TextDecoder().decode(A);let I="";for(let g=0,C=A.length;g<C;g++)I+=String.fromCharCode(A[g]);try{return decodeURIComponent(escape(I))}catch{return I}}static extractUrlBase(A){const I=A.lastIndexOf("/");return I===-1?"./":A.slice(0,I+1)}static resolveURL(A,I){return typeof A!="string"||A===""?"":(/^https?:\/\//i.test(I)&&/^\//.test(A)&&(I=I.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(A)||/^data:.*,.*$/i.test(A)||/^blob:.*$/i.test(A)?A:I+A)}}class mc extends QQ{constructor(A){super(A),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(A){return this.options=A,this}load(A,I,g,C){A===void 0&&(A=""),this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const Q=this,i=AQ.get(A);if(i!==void 0)return Q.manager.itemStart(A),setTimeout(function(){I&&I(i),Q.manager.itemEnd(A)},0),i;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(A,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(Q.options,{colorSpaceConversion:"none"}))}).then(function(e){AQ.add(A,e),I&&I(e),Q.manager.itemEnd(A)}).catch(function(e){C&&C(e),Q.manager.itemError(A),Q.manager.itemEnd(A)}),Q.manager.itemStart(A)}}class qc{constructor(A,I,g){this.binding=A,this.valueSize=g;let C,Q,i;switch(I){case"quaternion":C=this._slerp,Q=this._slerpAdditive,i=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(g*6),this._workIndex=5;break;case"string":case"bool":C=this._select,Q=this._select,i=this._setAdditiveIdentityOther,this.buffer=new Array(g*5);break;default:C=this._lerp,Q=this._lerpAdditive,i=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(g*5)}this._mixBufferRegion=C,this._mixBufferRegionAdditive=Q,this._setIdentity=i,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(A,I){const g=this.buffer,C=this.valueSize,Q=A*C+C;let i=this.cumulativeWeight;if(i===0){for(let o=0;o!==C;++o)g[Q+o]=g[o];i=I}else{i+=I;const o=I/i;this._mixBufferRegion(g,Q,0,o,C)}this.cumulativeWeight=i}accumulateAdditive(A){const I=this.buffer,g=this.valueSize,C=g*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(I,C,0,A,g),this.cumulativeWeightAdditive+=A}apply(A){const I=this.valueSize,g=this.buffer,C=A*I+I,Q=this.cumulativeWeight,i=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,Q<1){const e=I*this._origIndex;this._mixBufferRegion(g,C,e,1-Q,I)}i>0&&this._mixBufferRegionAdditive(g,C,this._addIndex*I,1,I);for(let e=I,s=I+I;e!==s;++e)if(g[e]!==g[e+I]){o.setValue(g,C);break}}saveOriginalState(){const A=this.binding,I=this.buffer,g=this.valueSize,C=g*this._origIndex;A.getValue(I,C);for(let Q=g,i=C;Q!==i;++Q)I[Q]=I[C+Q%g];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const A=this.valueSize*3;this.binding.setValue(this.buffer,A)}_setAdditiveIdentityNumeric(){const A=this._addIndex*this.valueSize,I=A+this.valueSize;for(let g=A;g<I;g++)this.buffer[g]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const A=this._origIndex*this.valueSize,I=this._addIndex*this.valueSize;for(let g=0;g<this.valueSize;g++)this.buffer[I+g]=this.buffer[A+g]}_select(A,I,g,C,Q){if(C>=.5)for(let i=0;i!==Q;++i)A[I+i]=A[g+i]}_slerp(A,I,g,C){_g.slerpFlat(A,I,A,I,A,g,C)}_slerpAdditive(A,I,g,C,Q){const i=this._workIndex*Q;_g.multiplyQuaternionsFlat(A,i,A,I,A,g),_g.slerpFlat(A,I,A,I,A,i,C)}_lerp(A,I,g,C,Q){const i=1-C;for(let o=0;o!==Q;++o){const e=I+o;A[e]=A[e]*i+A[g+o]*C}}_lerpAdditive(A,I,g,C,Q){for(let i=0;i!==Q;++i){const o=I+i;A[o]=A[o]+A[g+i]*C}}}const ho="\\[\\]\\.:\\/",xc=new RegExp("["+ho+"]","g"),ro="[^"+ho+"]",bc="[^"+ho.replace("\\.","")+"]",Tc=/((?:WC+[\/:])*)/.source.replace("WC",ro),Vc=/(WCOD+)?/.source.replace("WCOD",bc),Wc=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ro),Oc=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ro),Zc=new RegExp("^"+Tc+Vc+Wc+Oc+"$"),vc=["material","materials","bones","map"];class Xc{constructor(A,I,g){const C=g||zI.parseTrackName(I);this._targetGroup=A,this._bindings=A.subscribe_(I,C)}getValue(A,I){this.bind();const g=this._targetGroup.nCachedObjects_,C=this._bindings[g];C!==void 0&&C.getValue(A,I)}setValue(A,I){const g=this._bindings;for(let C=this._targetGroup.nCachedObjects_,Q=g.length;C!==Q;++C)g[C].setValue(A,I)}bind(){const A=this._bindings;for(let I=this._targetGroup.nCachedObjects_,g=A.length;I!==g;++I)A[I].bind()}unbind(){const A=this._bindings;for(let I=this._targetGroup.nCachedObjects_,g=A.length;I!==g;++I)A[I].unbind()}}class zI{constructor(A,I,g){this.path=I,this.parsedPath=g||zI.parseTrackName(I),this.node=zI.findNode(A,this.parsedPath.nodeName),this.rootNode=A,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(A,I,g){return A&&A.isAnimationObjectGroup?new zI.Composite(A,I,g):new zI(A,I,g)}static sanitizeNodeName(A){return A.replace(/\s/g,"_").replace(xc,"")}static parseTrackName(A){const I=Zc.exec(A);if(I===null)throw new Error("PropertyBinding: Cannot parse trackName: "+A);const g={nodeName:I[2],objectName:I[3],objectIndex:I[4],propertyName:I[5],propertyIndex:I[6]},C=g.nodeName&&g.nodeName.lastIndexOf(".");if(C!==void 0&&C!==-1){const Q=g.nodeName.substring(C+1);vc.indexOf(Q)!==-1&&(g.nodeName=g.nodeName.substring(0,C),g.objectName=Q)}if(g.propertyName===null||g.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+A);return g}static findNode(A,I){if(I===void 0||I===""||I==="."||I===-1||I===A.name||I===A.uuid)return A;if(A.skeleton){const g=A.skeleton.getBoneByName(I);if(g!==void 0)return g}if(A.children){const g=function(Q){for(let i=0;i<Q.length;i++){const o=Q[i];if(o.name===I||o.uuid===I)return o;const e=g(o.children);if(e)return e}return null},C=g(A.children);if(C)return C}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(A,I){A[I]=this.targetObject[this.propertyName]}_getValue_array(A,I){const g=this.resolvedProperty;for(let C=0,Q=g.length;C!==Q;++C)A[I++]=g[C]}_getValue_arrayElement(A,I){A[I]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(A,I){this.resolvedProperty.toArray(A,I)}_setValue_direct(A,I){this.targetObject[this.propertyName]=A[I]}_setValue_direct_setNeedsUpdate(A,I){this.targetObject[this.propertyName]=A[I],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(A,I){this.targetObject[this.propertyName]=A[I],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(A,I){const g=this.resolvedProperty;for(let C=0,Q=g.length;C!==Q;++C)g[C]=A[I++]}_setValue_array_setNeedsUpdate(A,I){const g=this.resolvedProperty;for(let C=0,Q=g.length;C!==Q;++C)g[C]=A[I++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(A,I){const g=this.resolvedProperty;for(let C=0,Q=g.length;C!==Q;++C)g[C]=A[I++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(A,I){this.resolvedProperty[this.propertyIndex]=A[I]}_setValue_arrayElement_setNeedsUpdate(A,I){this.resolvedProperty[this.propertyIndex]=A[I],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(A,I){this.resolvedProperty[this.propertyIndex]=A[I],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(A,I){this.resolvedProperty.fromArray(A,I)}_setValue_fromArray_setNeedsUpdate(A,I){this.resolvedProperty.fromArray(A,I),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(A,I){this.resolvedProperty.fromArray(A,I),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(A,I){this.bind(),this.getValue(A,I)}_setValue_unbound(A,I){this.bind(),this.setValue(A,I)}bind(){let A=this.node;const I=this.parsedPath,g=I.objectName,C=I.propertyName;let Q=I.propertyIndex;if(A||(A=zI.findNode(this.rootNode,I.nodeName),this.node=A),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!A){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(g){let s=I.objectIndex;switch(g){case"materials":if(!A.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!A.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}A=A.material.materials;break;case"bones":if(!A.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}A=A.skeleton.bones;for(let D=0;D<A.length;D++)if(A[D].name===s){s=D;break}break;case"map":if("map"in A){A=A.map;break}if(!A.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!A.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}A=A.material.map;break;default:if(A[g]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}A=A[g]}if(s!==void 0){if(A[s]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,A);return}A=A[s]}}const i=A[C];if(i===void 0){const s=I.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+s+"."+C+" but it wasn't found.",A);return}let o=this.Versioning.None;this.targetObject=A,A.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:A.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let e=this.BindingType.Direct;if(Q!==void 0){if(C==="morphTargetInfluences"){if(!A.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!A.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}A.morphTargetDictionary[Q]!==void 0&&(Q=A.morphTargetDictionary[Q])}e=this.BindingType.ArrayElement,this.resolvedProperty=i,this.propertyIndex=Q}else i.fromArray!==void 0&&i.toArray!==void 0?(e=this.BindingType.HasFromToArray,this.resolvedProperty=i):Array.isArray(i)?(e=this.BindingType.EntireArray,this.resolvedProperty=i):this.propertyName=C;this.getValue=this.GetterByBindingType[e],this.setValue=this.SetterByBindingTypeAndVersioning[e][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}zI.Composite=Xc;zI.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zI.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zI.prototype.GetterByBindingType=[zI.prototype._getValue_direct,zI.prototype._getValue_array,zI.prototype._getValue_arrayElement,zI.prototype._getValue_toArray];zI.prototype.SetterByBindingTypeAndVersioning=[[zI.prototype._setValue_direct,zI.prototype._setValue_direct_setNeedsUpdate,zI.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zI.prototype._setValue_array,zI.prototype._setValue_array_setNeedsUpdate,zI.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zI.prototype._setValue_arrayElement,zI.prototype._setValue_arrayElement_setNeedsUpdate,zI.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zI.prototype._setValue_fromArray,zI.prototype._setValue_fromArray_setNeedsUpdate,zI.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Pc{constructor(A,I,g=null,C=I.blendMode){this._mixer=A,this._clip=I,this._localRoot=g,this.blendMode=C;const Q=I.tracks,i=Q.length,o=new Array(i),e={endingStart:xB,endingEnd:xB};for(let s=0;s!==i;++s){const D=Q[s].createInterpolant(null);o[s]=D,D.settings=e}this._interpolantSettings=e,this._interpolants=o,this._propertyBindings=new Array(i),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Te,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(A){return this._startTime=A,this}setLoop(A,I){return this.loop=A,this.repetitions=I,this}setEffectiveWeight(A){return this.weight=A,this._effectiveWeight=this.enabled?A:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(A){return this._scheduleFading(A,0,1)}fadeOut(A){return this._scheduleFading(A,1,0)}crossFadeFrom(A,I,g){if(A.fadeOut(I),this.fadeIn(I),g){const C=this._clip.duration,Q=A._clip.duration,i=Q/C,o=C/Q;A.warp(1,i,I),this.warp(o,1,I)}return this}crossFadeTo(A,I,g){return A.crossFadeFrom(this,I,g)}stopFading(){const A=this._weightInterpolant;return A!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(A)),this}setEffectiveTimeScale(A){return this.timeScale=A,this._effectiveTimeScale=this.paused?0:A,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(A){return this.timeScale=this._clip.duration/A,this.stopWarping()}syncWith(A){return this.time=A.time,this.timeScale=A.timeScale,this.stopWarping()}halt(A){return this.warp(this._effectiveTimeScale,0,A)}warp(A,I,g){const C=this._mixer,Q=C.time,i=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=C._lendControlInterpolant(),this._timeScaleInterpolant=o);const e=o.parameterPositions,s=o.sampleValues;return e[0]=Q,e[1]=Q+g,s[0]=A/i,s[1]=I/i,this}stopWarping(){const A=this._timeScaleInterpolant;return A!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(A)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(A,I,g,C){if(!this.enabled){this._updateWeight(A);return}const Q=this._startTime;if(Q!==null){const e=(A-Q)*g;e<0||g===0?I=0:(this._startTime=null,I=g*e)}I*=this._updateTimeScale(A);const i=this._updateTime(I),o=this._updateWeight(A);if(o>0){const e=this._interpolants,s=this._propertyBindings;switch(this.blendMode){case YD:for(let D=0,n=e.length;D!==n;++D)e[D].evaluate(i),s[D].accumulateAdditive(o);break;case Co:default:for(let D=0,n=e.length;D!==n;++D)e[D].evaluate(i),s[D].accumulate(C,o)}}}_updateWeight(A){let I=0;if(this.enabled){I=this.weight;const g=this._weightInterpolant;if(g!==null){const C=g.evaluate(A)[0];I*=C,A>g.parameterPositions[1]&&(this.stopFading(),C===0&&(this.enabled=!1))}}return this._effectiveWeight=I,I}_updateTimeScale(A){let I=0;if(!this.paused){I=this.timeScale;const g=this._timeScaleInterpolant;if(g!==null){const C=g.evaluate(A)[0];I*=C,A>g.parameterPositions[1]&&(this.stopWarping(),I===0?this.paused=!0:this.timeScale=I)}}return this._effectiveTimeScale=I,I}_updateTime(A){const I=this._clip.duration,g=this.loop;let C=this.time+A,Q=this._loopCount;const i=g===JD;if(A===0)return Q===-1?C:i&&(Q&1)===1?I-C:C;if(g===kD){Q===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));A:{if(C>=I)C=I;else if(C<0)C=0;else{this.time=C;break A}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=C,this._mixer.dispatchEvent({type:"finished",action:this,direction:A<0?-1:1})}}else{if(Q===-1&&(A>=0?(Q=0,this._setEndings(!0,this.repetitions===0,i)):this._setEndings(this.repetitions===0,!0,i)),C>=I||C<0){const o=Math.floor(C/I);C-=I*o,Q+=Math.abs(o);const e=this.repetitions-Q;if(e<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,C=A>0?I:0,this.time=C,this._mixer.dispatchEvent({type:"finished",action:this,direction:A>0?1:-1});else{if(e===1){const s=A<0;this._setEndings(s,!s,i)}else this._setEndings(!1,!1,i);this._loopCount=Q,this.time=C,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=C;if(i&&(Q&1)===1)return I-C}return C}_setEndings(A,I,g){const C=this._interpolantSettings;g?(C.endingStart=bB,C.endingEnd=bB):(A?C.endingStart=this.zeroSlopeAtStart?bB:xB:C.endingStart=SE,I?C.endingEnd=this.zeroSlopeAtEnd?bB:xB:C.endingEnd=SE)}_scheduleFading(A,I,g){const C=this._mixer,Q=C.time;let i=this._weightInterpolant;i===null&&(i=C._lendControlInterpolant(),this._weightInterpolant=i);const o=i.parameterPositions,e=i.sampleValues;return o[0]=Q,e[0]=I,o[1]=Q+A,e[1]=g,this}}const jc=new Float32Array(1);class zc extends rB{constructor(A){super(),this._root=A,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(A,I){const g=A._localRoot||this._root,C=A._clip.tracks,Q=C.length,i=A._propertyBindings,o=A._interpolants,e=g.uuid,s=this._bindingsByRootAndName;let D=s[e];D===void 0&&(D={},s[e]=D);for(let n=0;n!==Q;++n){const r=C[n],F=r.name;let l=D[F];if(l!==void 0)++l.referenceCount,i[n]=l;else{if(l=i[n],l!==void 0){l._cacheIndex===null&&(++l.referenceCount,this._addInactiveBinding(l,e,F));continue}const S=I&&I._propertyBindings[n].binding.parsedPath;l=new qc(zI.create(g,F,S),r.ValueTypeName,r.getValueSize()),++l.referenceCount,this._addInactiveBinding(l,e,F),i[n]=l}o[n].resultBuffer=l.buffer}}_activateAction(A){if(!this._isActiveAction(A)){if(A._cacheIndex===null){const g=(A._localRoot||this._root).uuid,C=A._clip.uuid,Q=this._actionsByClip[C];this._bindAction(A,Q&&Q.knownActions[0]),this._addInactiveAction(A,C,g)}const I=A._propertyBindings;for(let g=0,C=I.length;g!==C;++g){const Q=I[g];Q.useCount++===0&&(this._lendBinding(Q),Q.saveOriginalState())}this._lendAction(A)}}_deactivateAction(A){if(this._isActiveAction(A)){const I=A._propertyBindings;for(let g=0,C=I.length;g!==C;++g){const Q=I[g];--Q.useCount===0&&(Q.restoreOriginalState(),this._takeBackBinding(Q))}this._takeBackAction(A)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const A=this;this.stats={actions:{get total(){return A._actions.length},get inUse(){return A._nActiveActions}},bindings:{get total(){return A._bindings.length},get inUse(){return A._nActiveBindings}},controlInterpolants:{get total(){return A._controlInterpolants.length},get inUse(){return A._nActiveControlInterpolants}}}}_isActiveAction(A){const I=A._cacheIndex;return I!==null&&I<this._nActiveActions}_addInactiveAction(A,I,g){const C=this._actions,Q=this._actionsByClip;let i=Q[I];if(i===void 0)i={knownActions:[A],actionByRoot:{}},A._byClipCacheIndex=0,Q[I]=i;else{const o=i.knownActions;A._byClipCacheIndex=o.length,o.push(A)}A._cacheIndex=C.length,C.push(A),i.actionByRoot[g]=A}_removeInactiveAction(A){const I=this._actions,g=I[I.length-1],C=A._cacheIndex;g._cacheIndex=C,I[C]=g,I.pop(),A._cacheIndex=null;const Q=A._clip.uuid,i=this._actionsByClip,o=i[Q],e=o.knownActions,s=e[e.length-1],D=A._byClipCacheIndex;s._byClipCacheIndex=D,e[D]=s,e.pop(),A._byClipCacheIndex=null;const n=o.actionByRoot,r=(A._localRoot||this._root).uuid;delete n[r],e.length===0&&delete i[Q],this._removeInactiveBindingsForAction(A)}_removeInactiveBindingsForAction(A){const I=A._propertyBindings;for(let g=0,C=I.length;g!==C;++g){const Q=I[g];--Q.referenceCount===0&&this._removeInactiveBinding(Q)}}_lendAction(A){const I=this._actions,g=A._cacheIndex,C=this._nActiveActions++,Q=I[C];A._cacheIndex=C,I[C]=A,Q._cacheIndex=g,I[g]=Q}_takeBackAction(A){const I=this._actions,g=A._cacheIndex,C=--this._nActiveActions,Q=I[C];A._cacheIndex=C,I[C]=A,Q._cacheIndex=g,I[g]=Q}_addInactiveBinding(A,I,g){const C=this._bindingsByRootAndName,Q=this._bindings;let i=C[I];i===void 0&&(i={},C[I]=i),i[g]=A,A._cacheIndex=Q.length,Q.push(A)}_removeInactiveBinding(A){const I=this._bindings,g=A.binding,C=g.rootNode.uuid,Q=g.path,i=this._bindingsByRootAndName,o=i[C],e=I[I.length-1],s=A._cacheIndex;e._cacheIndex=s,I[s]=e,I.pop(),delete o[Q],Object.keys(o).length===0&&delete i[C]}_lendBinding(A){const I=this._bindings,g=A._cacheIndex,C=this._nActiveBindings++,Q=I[C];A._cacheIndex=C,I[C]=A,Q._cacheIndex=g,I[g]=Q}_takeBackBinding(A){const I=this._bindings,g=A._cacheIndex,C=--this._nActiveBindings,Q=I[C];A._cacheIndex=C,I[C]=A,Q._cacheIndex=g,I[g]=Q}_lendControlInterpolant(){const A=this._controlInterpolants,I=this._nActiveControlInterpolants++;let g=A[I];return g===void 0&&(g=new rs(new Float32Array(2),new Float32Array(2),1,jc),g.__cacheIndex=I,A[I]=g),g}_takeBackControlInterpolant(A){const I=this._controlInterpolants,g=A.__cacheIndex,C=--this._nActiveControlInterpolants,Q=I[C];A.__cacheIndex=C,I[C]=A,Q.__cacheIndex=g,I[g]=Q}clipAction(A,I,g){const C=I||this._root,Q=C.uuid;let i=typeof A=="string"?vi.findByName(C,A):A;const o=i!==null?i.uuid:A,e=this._actionsByClip[o];let s=null;if(g===void 0&&(i!==null?g=i.blendMode:g=Co),e!==void 0){const n=e.actionByRoot[Q];if(n!==void 0&&n.blendMode===g)return n;s=e.knownActions[0],i===null&&(i=s._clip)}if(i===null)return null;const D=new Pc(this,i,I,g);return this._bindAction(D,s),this._addInactiveAction(D,o,Q),D}existingAction(A,I){const g=I||this._root,C=g.uuid,Q=typeof A=="string"?vi.findByName(g,A):A,i=Q?Q.uuid:A,o=this._actionsByClip[i];return o!==void 0&&o.actionByRoot[C]||null}stopAllAction(){const A=this._actions,I=this._nActiveActions;for(let g=I-1;g>=0;--g)A[g].stop();return this}update(A){A*=this.timeScale;const I=this._actions,g=this._nActiveActions,C=this.time+=A,Q=Math.sign(A),i=this._accuIndex^=1;for(let s=0;s!==g;++s)I[s]._update(C,A,Q,i);const o=this._bindings,e=this._nActiveBindings;for(let s=0;s!==e;++s)o[s].apply(i);return this}setTime(A){this.time=0;for(let I=0;I<this._actions.length;I++)this._actions[I].time=0;return this.update(A)}getRoot(){return this._root}uncacheClip(A){const I=this._actions,g=A.uuid,C=this._actionsByClip,Q=C[g];if(Q!==void 0){const i=Q.knownActions;for(let o=0,e=i.length;o!==e;++o){const s=i[o];this._deactivateAction(s);const D=s._cacheIndex,n=I[I.length-1];s._cacheIndex=null,s._byClipCacheIndex=null,n._cacheIndex=D,I[D]=n,I.pop(),this._removeInactiveBindingsForAction(s)}delete C[g]}}uncacheRoot(A){const I=A.uuid,g=this._actionsByClip;for(const i in g){const o=g[i].actionByRoot,e=o[I];e!==void 0&&(this._deactivateAction(e),this._removeInactiveAction(e))}const C=this._bindingsByRootAndName,Q=C[I];if(Q!==void 0)for(const i in Q){const o=Q[i];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(A,I){const g=this.existingAction(A,I);g!==null&&(this._deactivateAction(g),this._removeInactiveAction(g))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Io}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Io);const Fe=new Z,_c=new _g,Ne=new Z,EC=new kI,$c=new kI;class AG{constructor(A={}){const I=this;let g,C,Q,i;const o={camera:{style:""},objects:new WeakMap},e=A.element!==void 0?A.element:document.createElement("div");e.style.overflow="hidden",this.domElement=e;const s=document.createElement("div");s.style.transformOrigin="0 0",s.style.pointerEvents="none",e.appendChild(s);const D=document.createElement("div");D.style.transformStyle="preserve-3d",s.appendChild(D),this.getSize=function(){return{width:g,height:C}},this.render=function(S,G){const w=G.projectionMatrix.elements[5]*i;G.view&&G.view.enabled?(s.style.transform=`translate( ${-G.view.offsetX*(g/G.view.width)}px, ${-G.view.offsetY*(C/G.view.height)}px )`,s.style.transform+=`scale( ${G.view.fullWidth/G.view.width}, ${G.view.fullHeight/G.view.height} )`):s.style.transform="",S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld();let Y,K;G.isOrthographicCamera&&(Y=-(G.right+G.left)/2,K=(G.top+G.bottom)/2);const f=G.view&&G.view.enabled?G.view.height/G.view.fullHeight:1,q=G.isOrthographicCamera?`scale( ${f} )scale(`+w+")translate("+n(Y)+"px,"+n(K)+"px)"+r(G.matrixWorldInverse):`scale( ${f} )translateZ(`+w+"px)"+r(G.matrixWorldInverse),T=(G.isPerspectiveCamera?"perspective("+w+"px) ":"")+q+"translate("+Q+"px,"+i+"px)";o.camera.style!==T&&(D.style.transform=T,o.camera.style=T),l(S,S,G)},this.setSize=function(S,G){g=S,C=G,Q=g/2,i=C/2,e.style.width=S+"px",e.style.height=G+"px",s.style.width=S+"px",s.style.height=G+"px",D.style.width=S+"px",D.style.height=G+"px"};function n(S){return Math.abs(S)<1e-10?0:S}function r(S){const G=S.elements;return"matrix3d("+n(G[0])+","+n(-G[1])+","+n(G[2])+","+n(G[3])+","+n(G[4])+","+n(-G[5])+","+n(G[6])+","+n(G[7])+","+n(G[8])+","+n(-G[9])+","+n(G[10])+","+n(G[11])+","+n(G[12])+","+n(-G[13])+","+n(G[14])+","+n(G[15])+")"}function F(S){const G=S.elements;return"translate(-50%,-50%)"+("matrix3d("+n(G[0])+","+n(G[1])+","+n(G[2])+","+n(G[3])+","+n(-G[4])+","+n(-G[5])+","+n(-G[6])+","+n(-G[7])+","+n(G[8])+","+n(G[9])+","+n(G[10])+","+n(G[11])+","+n(G[12])+","+n(G[13])+","+n(G[14])+","+n(G[15])+")")}function l(S,G,w,Y){if(S.isCSS3DObject){const K=S.visible===!0&&S.layers.test(w.layers)===!0;if(S.element.style.display=K===!0?"":"none",K===!0){S.onBeforeRender(I,G,w);let f;S.isCSS3DSprite?(EC.copy(w.matrixWorldInverse),EC.transpose(),S.rotation2D!==0&&EC.multiply($c.makeRotationZ(S.rotation2D)),S.matrixWorld.decompose(Fe,_c,Ne),EC.setPosition(Fe),EC.scale(Ne),EC.elements[3]=0,EC.elements[7]=0,EC.elements[11]=0,EC.elements[15]=1,f=F(EC)):f=F(S.matrixWorld);const q=S.element,b=o.objects.get(S);if(b===void 0||b.style!==f){q.style.transform=f;const T={style:f};o.objects.set(S,T)}q.parentNode!==D&&D.appendChild(q),S.onAfterRender(I,G,w)}}for(let K=0,f=S.children.length;K<f;K++)l(S.children[K],G,w)}}}var di=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};const ye=(B,A)=>{const I=2*Math.PI*A*B;return I/(I+1)},Me=(B,A,I)=>B*A+(1-B)*I;class ki{constructor({minCutOff:A,beta:I}){this.minCutOff=A,this.beta=I,this.dCutOff=.001,this.xPrev=null,this.dxPrev=null,this.tPrev=null,this.initialized=!1}reset(){this.initialized=!1}filter(A,I){if(!this.initialized)return this.initialized=!0,this.xPrev=I,this.dxPrev=I.map(()=>0),this.tPrev=A,I;const{xPrev:g,tPrev:C,dxPrev:Q}=this,i=A-C,o=ye(i,this.dCutOff),e=[],s=[],D=[];for(let n=0;n<I.length;n++){e[n]=(I[n]-g[n])/i,s[n]=Me(o,e[n],Q[n]);const r=this.minCutOff+this.beta*Math.abs(s[n]),F=ye(i,r);D[n]=Me(F,I[n],g[n])}return this.xPrev=D,this.dxPrev=s,this.tPrev=A,D}}const IG=`<div class="mindar-ui-overlay mindar-ui-loading">
  <div class="loader"/>
</div>
`,gG=`<div class="mindar-ui-overlay mindar-ui-compatibility">
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
`,CG=`<div class="mindar-ui-overlay mindar-ui-scanning">
  <div class="scanning">
    <div class="inner">
      <div class="scanline"/>
    </div>
  </div>
</div>
`,BG=".mindar-ui-overlay{display:flex;align-items:center;justify-content:center;position:absolute;left:0;right:0;top:0;bottom:0;background:transparent;z-index:2}.mindar-ui-overlay.hidden{display:none}.mindar-ui-loading .loader{border:16px solid #222;border-top:16px solid white;opacity:.8;border-radius:50%;width:120px;height:120px;animation:spin 2s linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.mindar-ui-compatibility .content{background:black;color:#fff;opacity:.8;text-align:center;margin:20px;padding:20px;min-height:50vh}@media (min-aspect-ratio: 1/1){.mindar-ui-scanning .scanning{width:50vh;height:50vh}}@media (max-aspect-ratio: 1/1){.mindar-ui-scanning .scanning{width:80vw;height:80vw}}.mindar-ui-scanning .scanning .inner{position:relative;width:100%;height:100%;opacity:.8;background:linear-gradient(to right,white 10px,transparent 10px) 0 0,linear-gradient(to right,white 10px,transparent 10px) 0 100%,linear-gradient(to left,white 10px,transparent 10px) 100% 0,linear-gradient(to left,white 10px,transparent 10px) 100% 100%,linear-gradient(to bottom,white 10px,transparent 10px) 0 0,linear-gradient(to bottom,white 10px,transparent 10px) 100% 0,linear-gradient(to top,white 10px,transparent 10px) 0 100%,linear-gradient(to top,white 10px,transparent 10px) 100% 100%;background-repeat:no-repeat;background-size:40px 40px}.mindar-ui-scanning .scanning .inner .scanline{position:absolute;width:100%;height:10px;background:white;animation:move 2s linear infinite}@keyframes move{0%,to{top:0%}50%{top:calc(100% - 10px)}}";class QG{constructor({uiLoading:A,uiScanning:I,uiError:g}){const C=document.createElement("style");C.innerText=BG,document.head.appendChild(C),A==="yes"?this.loadingModal=this._loadHTML(IG):A!=="no"&&(this.loadingModal=document.querySelector(A)),g==="yes"?this.compatibilityModal=this._loadHTML(gG):g!=="no"&&(this.compatibilityModal=document.querySelector(g)),I==="yes"?this.scanningMask=this._loadHTML(CG):I!=="no"&&(this.scanningMask=document.querySelector(I)),this.hideLoading(),this.hideCompatibility(),this.hideScanning()}showLoading(){this.loadingModal&&this.loadingModal.classList.remove("hidden")}hideLoading(){this.loadingModal&&this.loadingModal.classList.add("hidden")}showCompatibility(){this.compatibilityModal&&this.compatibilityModal.classList.remove("hidden")}hideCompatibility(){this.compatibilityModal&&this.compatibilityModal.classList.add("hidden")}showScanning(){this.scanningMask&&this.scanningMask.classList.remove("hidden")}hideScanning(){this.scanningMask&&this.scanningMask.classList.add("hidden")}_loadHTML(A){const I=document.createElement("template");I.innerHTML=A.trim();const g=I.content.firstChild;return document.getElementsByTagName("body")[0].appendChild(g),g}}var EG={};(function(){var B;function A(h){var R=0;return function(){return R<h.length?{done:!1,value:h[R++]}:{done:!0}}}var I=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,R,N){return h==Array.prototype||h==Object.prototype||(h[R]=N.value),h};function g(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof di=="object"&&di];for(var R=0;R<h.length;++R){var N=h[R];if(N&&N.Math==Math)return N}throw Error("Cannot find global object")}var C=g(this);function Q(h,R){if(R)A:{var N=C;h=h.split(".");for(var p=0;p<h.length-1;p++){var v=h[p];if(!(v in N))break A;N=N[v]}h=h[h.length-1],p=N[h],R=R(p),R!=p&&R!=null&&I(N,h,{configurable:!0,writable:!0,value:R})}}Q("Symbol",function(h){function R(tA){if(this instanceof R)throw new TypeError("Symbol is not a constructor");return new N(p+(tA||"")+"_"+v++,tA)}function N(tA,z){this.g=tA,I(this,"description",{configurable:!0,writable:!0,value:z})}if(h)return h;N.prototype.toString=function(){return this.g};var p="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",v=0;return R}),Q("Symbol.iterator",function(h){if(h)return h;h=Symbol("Symbol.iterator");for(var R="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),N=0;N<R.length;N++){var p=C[R[N]];typeof p=="function"&&typeof p.prototype[h]!="function"&&I(p.prototype,h,{configurable:!0,writable:!0,value:function(){return i(A(this))}})}return h});function i(h){return h={next:h},h[Symbol.iterator]=function(){return this},h}function o(h){var R=typeof Symbol<"u"&&Symbol.iterator&&h[Symbol.iterator];return R?R.call(h):{next:A(h)}}function e(h){if(!(h instanceof Array)){h=o(h);for(var R,N=[];!(R=h.next()).done;)N.push(R.value);h=N}return h}var s=typeof Object.create=="function"?Object.create:function(h){function R(){}return R.prototype=h,new R},D;if(typeof Object.setPrototypeOf=="function")D=Object.setPrototypeOf;else{var n;A:{var r={a:!0},F={};try{F.__proto__=r,n=F.a;break A}catch{}n=!1}D=n?function(h,R){if(h.__proto__=R,h.__proto__!==R)throw new TypeError(h+" is not extensible");return h}:null}var l=D;function S(h,R){if(h.prototype=s(R.prototype),h.prototype.constructor=h,l)l(h,R);else for(var N in R)if(N!="prototype")if(Object.defineProperties){var p=Object.getOwnPropertyDescriptor(R,N);p&&Object.defineProperty(h,N,p)}else h[N]=R[N];h.ea=R.prototype}function G(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.s=this.m=0,this.j=null}function w(h){if(h.l)throw new TypeError("Generator is already running");h.l=!0}G.prototype.o=function(h){this.h=h};function Y(h,R){h.j={U:R,V:!0},h.g=h.m||h.s}G.prototype.return=function(h){this.j={return:h},this.g=this.s};function K(h,R,N){return h.g=N,{value:R}}function f(h){this.g=new G,this.h=h}function q(h,R){w(h.g);var N=h.g.i;return N?b(h,"return"in N?N.return:function(p){return{value:p,done:!0}},R,h.g.return):(h.g.return(R),T(h))}function b(h,R,N,p){try{var v=R.call(h.g.i,N);if(!(v instanceof Object))throw new TypeError("Iterator result "+v+" is not an object");if(!v.done)return h.g.l=!1,v;var tA=v.value}catch(z){return h.g.i=null,Y(h.g,z),T(h)}return h.g.i=null,p.call(h.g,tA),T(h)}function T(h){for(;h.g.g;)try{var R=h.h(h.g);if(R)return h.g.l=!1,{value:R.value,done:!1}}catch(N){h.g.h=void 0,Y(h.g,N)}if(h.g.l=!1,h.g.j){if(R=h.g.j,h.g.j=null,R.V)throw R.U;return{value:R.return,done:!0}}return{value:void 0,done:!0}}function BA(h){this.next=function(R){return w(h.g),h.g.i?R=b(h,h.g.i.next,R,h.g.o):(h.g.o(R),R=T(h)),R},this.throw=function(R){return w(h.g),h.g.i?R=b(h,h.g.i.throw,R,h.g.o):(Y(h.g,R),R=T(h)),R},this.return=function(R){return q(h,R)},this[Symbol.iterator]=function(){return this}}function d(h,R){return R=new BA(new f(R)),l&&h.prototype&&l(R,h.prototype),R}function x(h,R){h instanceof String&&(h+="");var N=0,p=!1,v={next:function(){if(!p&&N<h.length){var tA=N++;return{value:R(tA,h[tA]),done:!1}}return p=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}var DA=typeof Object.assign=="function"?Object.assign:function(h,R){for(var N=1;N<arguments.length;N++){var p=arguments[N];if(p)for(var v in p)Object.prototype.hasOwnProperty.call(p,v)&&(h[v]=p[v])}return h};Q("Object.assign",function(h){return h||DA}),Q("Promise",function(h){function R(z){this.h=0,this.i=void 0,this.g=[],this.o=!1;var sA=this.j();try{z(sA.resolve,sA.reject)}catch(SA){sA.reject(SA)}}function N(){this.g=null}function p(z){return z instanceof R?z:new R(function(sA){sA(z)})}if(h)return h;N.prototype.h=function(z){if(this.g==null){this.g=[];var sA=this;this.i(function(){sA.l()})}this.g.push(z)};var v=C.setTimeout;N.prototype.i=function(z){v(z,0)},N.prototype.l=function(){for(;this.g&&this.g.length;){var z=this.g;this.g=[];for(var sA=0;sA<z.length;++sA){var SA=z[sA];z[sA]=null;try{SA()}catch(bA){this.j(bA)}}}this.g=null},N.prototype.j=function(z){this.i(function(){throw z})},R.prototype.j=function(){function z(bA){return function(nI){SA||(SA=!0,bA.call(sA,nI))}}var sA=this,SA=!1;return{resolve:z(this.C),reject:z(this.l)}},R.prototype.C=function(z){if(z===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(z instanceof R)this.F(z);else{A:switch(typeof z){case"object":var sA=z!=null;break A;case"function":sA=!0;break A;default:sA=!1}sA?this.u(z):this.m(z)}},R.prototype.u=function(z){var sA=void 0;try{sA=z.then}catch(SA){this.l(SA);return}typeof sA=="function"?this.G(sA,z):this.m(z)},R.prototype.l=function(z){this.s(2,z)},R.prototype.m=function(z){this.s(1,z)},R.prototype.s=function(z,sA){if(this.h!=0)throw Error("Cannot settle("+z+", "+sA+"): Promise already settled in state"+this.h);this.h=z,this.i=sA,this.h===2&&this.D(),this.A()},R.prototype.D=function(){var z=this;v(function(){if(z.B()){var sA=C.console;typeof sA<"u"&&sA.error(z.i)}},1)},R.prototype.B=function(){if(this.o)return!1;var z=C.CustomEvent,sA=C.Event,SA=C.dispatchEvent;return typeof SA>"u"?!0:(typeof z=="function"?z=new z("unhandledrejection",{cancelable:!0}):typeof sA=="function"?z=new sA("unhandledrejection",{cancelable:!0}):(z=C.document.createEvent("CustomEvent"),z.initCustomEvent("unhandledrejection",!1,!0,z)),z.promise=this,z.reason=this.i,SA(z))},R.prototype.A=function(){if(this.g!=null){for(var z=0;z<this.g.length;++z)tA.h(this.g[z]);this.g=null}};var tA=new N;return R.prototype.F=function(z){var sA=this.j();z.J(sA.resolve,sA.reject)},R.prototype.G=function(z,sA){var SA=this.j();try{z.call(sA,SA.resolve,SA.reject)}catch(bA){SA.reject(bA)}},R.prototype.then=function(z,sA){function SA(SI,GI){return typeof SI=="function"?function(vA){try{bA(SI(vA))}catch(hI){nI(hI)}}:GI}var bA,nI,xI=new R(function(SI,GI){bA=SI,nI=GI});return this.J(SA(z,bA),SA(sA,nI)),xI},R.prototype.catch=function(z){return this.then(void 0,z)},R.prototype.J=function(z,sA){function SA(){switch(bA.h){case 1:z(bA.i);break;case 2:sA(bA.i);break;default:throw Error("Unexpected state: "+bA.h)}}var bA=this;this.g==null?tA.h(SA):this.g.push(SA),this.o=!0},R.resolve=p,R.reject=function(z){return new R(function(sA,SA){SA(z)})},R.race=function(z){return new R(function(sA,SA){for(var bA=o(z),nI=bA.next();!nI.done;nI=bA.next())p(nI.value).J(sA,SA)})},R.all=function(z){var sA=o(z),SA=sA.next();return SA.done?p([]):new R(function(bA,nI){function xI(vA){return function(hI){SI[vA]=hI,GI--,GI==0&&bA(SI)}}var SI=[],GI=0;do SI.push(void 0),GI++,p(SA.value).J(xI(SI.length-1),nI),SA=sA.next();while(!SA.done)})},R}),Q("Object.is",function(h){return h||function(R,N){return R===N?R!==0||1/R===1/N:R!==R&&N!==N}}),Q("Array.prototype.includes",function(h){return h||function(R,N){var p=this;p instanceof String&&(p=String(p));var v=p.length;for(N=N||0,0>N&&(N=Math.max(N+v,0));N<v;N++){var tA=p[N];if(tA===R||Object.is(tA,R))return!0}return!1}}),Q("String.prototype.includes",function(h){return h||function(R,N){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(R instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(R,N||0)!==-1}}),Q("Array.prototype.keys",function(h){return h||function(){return x(this,function(R){return R})}});var hA=this||self;function rA(h,R){h=h.split(".");var N=hA;h[0]in N||typeof N.execScript>"u"||N.execScript("var "+h[0]);for(var p;h.length&&(p=h.shift());)h.length||R===void 0?N[p]&&N[p]!==Object.prototype[p]?N=N[p]:N=N[p]={}:N[p]=R}function O(h,R){return R=String.fromCharCode.apply(null,R),h==null?R:h+R}var EA,wA=typeof TextDecoder<"u",eA,kA=typeof TextEncoder<"u";function FA(h){if(kA)h=(eA||(eA=new TextEncoder)).encode(h);else{var R=void 0;R=R===void 0?!1:R;for(var N=0,p=new Uint8Array(3*h.length),v=0;v<h.length;v++){var tA=h.charCodeAt(v);if(128>tA)p[N++]=tA;else{if(2048>tA)p[N++]=tA>>6|192;else{if(55296<=tA&&57343>=tA){if(56319>=tA&&v<h.length){var z=h.charCodeAt(++v);if(56320<=z&&57343>=z){tA=1024*(tA-55296)+z-56320+65536,p[N++]=tA>>18|240,p[N++]=tA>>12&63|128,p[N++]=tA>>6&63|128,p[N++]=tA&63|128;continue}else v--}if(R)throw Error("Found an unpaired surrogate");tA=65533}p[N++]=tA>>12|224,p[N++]=tA>>6&63|128}p[N++]=tA&63|128}}h=p.subarray(0,N)}return h}var cA={},JA=null;function fA(h,R){R===void 0&&(R=0),qA(),R=cA[R];for(var N=Array(Math.floor(h.length/3)),p=R[64]||"",v=0,tA=0;v<h.length-2;v+=3){var z=h[v],sA=h[v+1],SA=h[v+2],bA=R[z>>2];z=R[(z&3)<<4|sA>>4],sA=R[(sA&15)<<2|SA>>6],SA=R[SA&63],N[tA++]=bA+z+sA+SA}switch(bA=0,SA=p,h.length-v){case 2:bA=h[v+1],SA=R[(bA&15)<<2]||p;case 1:h=h[v],N[tA]=R[h>>2]+R[(h&3)<<4|bA>>4]+SA+p}return N.join("")}function iA(h){var R=h.length,N=3*R/4;N%3?N=Math.floor(N):"=.".indexOf(h[R-1])!=-1&&(N="=.".indexOf(h[R-2])!=-1?N-2:N-1);var p=new Uint8Array(N),v=0;return GA(h,function(tA){p[v++]=tA}),p.subarray(0,v)}function GA(h,R){function N(SA){for(;p<h.length;){var bA=h.charAt(p++),nI=JA[bA];if(nI!=null)return nI;if(!/^[\s\xa0]*$/.test(bA))throw Error("Unknown base64 encoding at char: "+bA)}return SA}qA();for(var p=0;;){var v=N(-1),tA=N(0),z=N(64),sA=N(64);if(sA===64&&v===-1)break;R(v<<2|tA>>4),z!=64&&(R(tA<<4&240|z>>2),sA!=64&&R(z<<6&192|sA))}}function qA(){if(!JA){JA={};for(var h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),R=["+/=","+/","-_=","-_.","-_"],N=0;5>N;N++){var p=h.concat(R[N].split(""));cA[N]=p;for(var v=0;v<p.length;v++){var tA=p[v];JA[tA]===void 0&&(JA[tA]=v)}}}}var PA=typeof Uint8Array.prototype.slice=="function",jA;function eI(h,R,N){return R===N?jA||(jA=new Uint8Array(0)):PA?h.slice(R,N):new Uint8Array(h.subarray(R,N))}var xA=0,TA=0;function gI(h,R){R=R===void 0?{}:R,R=R.v===void 0?!1:R.v,this.h=null,this.g=this.j=this.l=0,this.m=!1,this.v=R,h&&_(this,h)}function _(h,R){R=R.constructor===Uint8Array?R:R.constructor===ArrayBuffer?new Uint8Array(R):R.constructor===Array?new Uint8Array(R):R.constructor===String?iA(R):R instanceof Uint8Array?new Uint8Array(R.buffer,R.byteOffset,R.byteLength):new Uint8Array(0),h.h=R,h.l=0,h.j=h.h.length,h.g=h.l}gI.prototype.reset=function(){this.g=this.l};function UA(h){for(var R=128,N=0,p=0,v=0;4>v&&128<=R;v++)R=h.h[h.g++],N|=(R&127)<<7*v;if(128<=R&&(R=h.h[h.g++],N|=(R&127)<<28,p|=(R&127)>>4),128<=R)for(v=0;5>v&&128<=R;v++)R=h.h[h.g++],p|=(R&127)<<7*v+3;if(128>R)return h=N>>>0,R=p>>>0,(p=R&2147483648)&&(h=~h+1>>>0,R=~R>>>0,h==0&&(R=R+1>>>0)),h=4294967296*R+(h>>>0),p?-h:h;h.m=!0}gI.prototype.i=function(){var h=this.h,R=h[this.g],N=R&127;return 128>R?(this.g+=1,N):(R=h[this.g+1],N|=(R&127)<<7,128>R?(this.g+=2,N):(R=h[this.g+2],N|=(R&127)<<14,128>R?(this.g+=3,N):(R=h[this.g+3],N|=(R&127)<<21,128>R?(this.g+=4,N):(R=h[this.g+4],N|=(R&15)<<28,128>R?(this.g+=5,N>>>0):(this.g+=5,128<=h[this.g++]&&128<=h[this.g++]&&128<=h[this.g++]&&128<=h[this.g++]&&this.g++,N)))))},gI.prototype.o=function(){var h=this.h[this.g],R=this.h[this.g+1],N=this.h[this.g+2],p=this.h[this.g+3];return this.g+=4,N=(h<<0|R<<8|N<<16|p<<24)>>>0,h=2*(N>>31)+1,R=N>>>23&255,N&=8388607,R==255?N?NaN:1/0*h:R==0?h*Math.pow(2,-149)*N:h*Math.pow(2,R-150)*(N+Math.pow(2,23))};var WA=[];function cI(){this.g=new Uint8Array(64),this.h=0}cI.prototype.push=function(h){if(!(this.h+1<this.g.length)){var R=this.g;this.g=new Uint8Array(Math.ceil(1+2*this.g.length)),this.g.set(R)}this.g[this.h++]=h},cI.prototype.length=function(){return this.h},cI.prototype.end=function(){var h=this.g,R=this.h;return this.h=0,eI(h,0,R)};function zA(h,R){for(;127<R;)h.push(R&127|128),R>>>=7;h.push(R)}function ZI(h){var R={},N=R.N===void 0?!1:R.N;this.o={v:R.v===void 0?!1:R.v},this.N=N,R=this.o,WA.length?(N=WA.pop(),R&&(N.v=R.v),h&&_(N,h),h=N):h=new gI(h,R),this.g=h,this.m=this.g.g,this.h=this.i=this.l=-1,this.j=!1}ZI.prototype.reset=function(){this.g.reset(),this.h=this.l=-1};function CI(h){var R=h.g;if((R=R.g==R.j)||(R=h.j)||(R=h.g,R=R.m||0>R.g||R.g>R.j),R)return!1;h.m=h.g.g,R=h.g.i();var N=R&7;return N!=0&&N!=5&&N!=1&&N!=2&&N!=3&&N!=4?(h.j=!0,!1):(h.i=R,h.l=R>>>3,h.h=N,!0)}function iI(h){switch(h.h){case 0:if(h.h!=0)iI(h);else{for(h=h.g;h.h[h.g]&128;)h.g++;h.g++}break;case 1:h.h!=1?iI(h):(h=h.g,h.g+=8);break;case 2:if(h.h!=2)iI(h);else{var R=h.g.i();h=h.g,h.g+=R}break;case 5:h.h!=5?iI(h):(h=h.g,h.g+=4);break;case 3:R=h.l;do{if(!CI(h)){h.j=!0;break}if(h.h==4){h.l!=R&&(h.j=!0);break}iI(h)}while(!0);break;default:h.j=!0}}function mI(h,R,N){var p=h.g.j,v=h.g.i(),tA=h.g.g+v;if(h.g.j=tA,N(R,h),N=tA-h.g.g,N!==0)throw Error("Message parsing ended unexpectedly. Expected to read "+v+" bytes, instead read "+(v-N)+" bytes, either the data ended unexpectedly or the message misreported its own length");return h.g.g=tA,h.g.j=p,R}function vI(h){return h.g.o()}function eg(h){var R=h.g.i();h=h.g;var N=h.g;h.g+=R,h=h.h;var p;if(wA)(p=EA)||(p=EA=new TextDecoder("utf-8",{fatal:!1})),p=p.decode(h.subarray(N,N+R));else{R=N+R;for(var v=[],tA=null,z,sA,SA;N<R;)z=h[N++],128>z?v.push(z):224>z?N>=R?v.push(65533):(sA=h[N++],194>z||(sA&192)!==128?(N--,v.push(65533)):v.push((z&31)<<6|sA&63)):240>z?N>=R-1?v.push(65533):(sA=h[N++],(sA&192)!==128||z===224&&160>sA||z===237&&160<=sA||((p=h[N++])&192)!==128?(N--,v.push(65533)):v.push((z&15)<<12|(sA&63)<<6|p&63)):244>=z?N>=R-2?v.push(65533):(sA=h[N++],(sA&192)!==128||(z<<28)+(sA-144)>>30||((p=h[N++])&192)!==128||((SA=h[N++])&192)!==128?(N--,v.push(65533)):(z=(z&7)<<18|(sA&63)<<12|(p&63)<<6|SA&63,z-=65536,v.push((z>>10&1023)+55296,(z&1023)+56320))):v.push(65533),8192<=v.length&&(tA=O(tA,v),v.length=0);p=O(tA,v)}return p}function m(h,R,N){var p=h.g.i();for(p=h.g.g+p;h.g.g<p;)N.push(R.call(h.g))}function k(h,R){h.h==2?m(h,gI.prototype.o,R):R.push(vI(h))}function AA(){this.h=[],this.i=0,this.g=new cI}function lA(h,R){R.length!==0&&(h.h.push(R),h.i+=R.length)}function yA(h){var R=h.i+h.g.length();if(R===0)return new Uint8Array(0);R=new Uint8Array(R);for(var N=h.h,p=N.length,v=0,tA=0;tA<p;tA++){var z=N[tA];z.length!==0&&(R.set(z,v),v+=z.length)}return N=h.g,p=N.h,p!==0&&(R.set(N.g.subarray(0,p),v),N.h=0),h.h=[R],R}function NA(h,R,N){if(N!=null){zA(h.g,8*R+5),h=h.g;var p=N;p=(N=0>p?1:0)?-p:p,p===0?0<1/p?xA=TA=0:(TA=0,xA=2147483648):isNaN(p)?(TA=0,xA=2147483647):34028234663852886e22<p?(TA=0,xA=(N<<31|2139095040)>>>0):11754943508222875e-54>p?(p=Math.round(p/Math.pow(2,-149)),TA=0,xA=(N<<31|p)>>>0):(R=Math.floor(Math.log(p)/Math.LN2),p*=Math.pow(2,-R),p=Math.round(8388608*p),16777216<=p&&++R,TA=0,xA=(N<<31|R+127<<23|p&8388607)>>>0),N=xA,h.push(N>>>0&255),h.push(N>>>8&255),h.push(N>>>16&255),h.push(N>>>24&255)}}var OA=typeof Uint8Array=="function";function KA(h,R,N){if(h!=null)return typeof h=="object"?OA&&h instanceof Uint8Array?N(h):pA(h,R,N):R(h)}function pA(h,R,N){if(Array.isArray(h)){for(var p=Array(h.length),v=0;v<h.length;v++)p[v]=KA(h[v],R,N);return Array.isArray(h)&&h.W&&MA(p),p}p={};for(v in h)p[v]=KA(h[v],R,N);return p}function QI(h){return typeof h=="number"?isFinite(h)?h:String(h):h}var oI={W:{value:!0,configurable:!0}};function MA(h){return Array.isArray(h)&&!Object.isFrozen(h)&&Object.defineProperties(h,oI),h}var WI;function ZA(h,R,N){var p=WI;WI=null,h||(h=p),p=this.constructor.ca,h||(h=p?[p]:[]),this.j=p?0:-1,this.m=this.g=null,this.h=h;A:{if(p=this.h.length,h=p-1,p&&(p=this.h[h],!(p===null||typeof p!="object"||Array.isArray(p)||OA&&p instanceof Uint8Array))){this.l=h-this.j,this.i=p;break A}R!==void 0&&-1<R?(this.l=Math.max(R,h+1-this.j),this.i=null):this.l=Number.MAX_VALUE}if(N)for(R=0;R<N.length;R++)h=N[R],h<this.l?(h+=this.j,(p=this.h[h])?MA(p):this.h[h]=EI):(_A(this),(p=this.i[h])?MA(p):this.i[h]=EI)}var EI=Object.freeze(MA([]));function _A(h){var R=h.l+h.j;h.h[R]||(h.i=h.h[R]={})}function RA(h,R,N){return R===-1?null:N!==void 0&&N||R>=h.l?h.i?h.i[R]:void 0:h.h[R+h.j]}function RI(h,R){var N=N===void 0?!1:N,p=RA(h,R,N);return p==null&&(p=EI),p===EI&&(p=MA([]),P(h,R,p,N)),p}function V(h){var R=RI(h,3);if(h.m||(h.m={}),!h.m[3]){for(var N=0;N<R.length;N++)R[N]=+R[N];h.m[3]=!0}return R}function LA(h,R,N){return h=RA(h,R),h??N}function nA(h,R,N){return h=RA(h,R),h=h==null?h:+h,h??(N===void 0?0:N)}function P(h,R,N,p){p!==void 0&&p||R>=h.l?(_A(h),h.i[R]=N):h.h[R+h.j]=N}function dA(h,R,N){if(N===-1)return null;if(h.g||(h.g={}),!h.g[N]){var p=RA(h,N,!1);p&&(h.g[N]=new R(p))}return h.g[N]}function XA(h,R){h.g||(h.g={});var N=h.g[1];if(!N){var p=RI(h,1);N=[];for(var v=0;v<p.length;v++)N[v]=new R(p[v]);h.g[1]=N}return N}function fI(h,R,N){var p=p===void 0?!1:p;h.g||(h.g={});var v=N&&Ig(N);h.g[R]=N,P(h,R,v,p)}function W(h,R,N,p){var v=XA(h,N);R=R||new N,h=RI(h,1),p!=null?(v.splice(p,0,R),h.splice(p,0,Ig(R))):(v.push(R),h.push(Ig(R)))}ZA.prototype.toJSON=function(){var h=Ig(this);return pA(h,QI,fA)};function Ig(h,R){if(h.g)for(var N in h.g){var p=h.g[N];if(Array.isArray(p))for(var v=0;v<p.length;v++)p[v]&&Ig(p[v]);else p&&Ig(p)}return h.h}ZA.prototype.toString=function(){return Ig(this).toString()};function sI(h,R){if(h=h.o){lA(R,R.g.end());for(var N=0;N<h.length;N++)lA(R,h[N])}}function Qg(h,R){if(R.h==4)return!1;var N=R.m;return iI(R),R.N||(R=eI(R.g.h,N,R.g.g),(N=h.o)?N.push(R):h.o=[R]),!0}function hg(h){ZA.call(this,h,-1,iQ)}S(hg,ZA),hg.prototype.getRows=function(){return RA(this,1)},hg.prototype.getCols=function(){return RA(this,2)},hg.prototype.getPackedDataList=function(){return V(this)},hg.prototype.getLayout=function(){return LA(this,4,0)};function cB(h,R){for(;CI(R);)switch(R.i){case 8:var N=R.g.i();P(h,1,N);break;case 16:N=R.g.i(),P(h,2,N);break;case 29:case 26:k(R,h.getPackedDataList());break;case 32:N=UA(R.g),P(h,4,N);break;default:if(!Qg(h,R))return h}return h}var iQ=[3];function sg(h,R){var N=void 0;return new(N||(N=Promise))(function(p,v){function tA(SA){try{sA(R.next(SA))}catch(bA){v(bA)}}function z(SA){try{sA(R.throw(SA))}catch(bA){v(bA)}}function sA(SA){SA.done?p(SA.value):new N(function(bA){bA(SA.value)}).then(tA,z)}sA((R=R.apply(h,void 0)).next())})}function lI(h){ZA.call(this,h)}S(lI,ZA);function JC(h,R){for(;CI(R);)switch(R.i){case 8:var N=R.g.i();P(h,1,N);break;case 21:N=vI(R),P(h,2,N);break;case 26:N=eg(R),P(h,3,N);break;case 34:N=eg(R),P(h,4,N);break;default:if(!Qg(h,R))return h}return h}function dg(h){ZA.call(this,h,-1,Wg)}S(dg,ZA),dg.prototype.addClassification=function(h,R){return W(this,h,lI,R),this};var Wg=[1];function QC(h){ZA.call(this,h)}S(QC,ZA);function rI(h,R){for(;CI(R);)switch(R.i){case 13:var N=vI(R);P(h,1,N);break;case 21:N=vI(R),P(h,2,N);break;case 29:N=vI(R),P(h,3,N);break;case 37:N=vI(R),P(h,4,N);break;case 45:N=vI(R),P(h,5,N);break;default:if(!Qg(h,R))return h}return h}function y(h){ZA.call(this,h,-1,X)}S(y,ZA);function J(h){A:{var R=new y;for(h=new ZI(h);CI(h);)switch(h.i){case 10:var N=mI(h,new QC,rI);W(R,N,QC,void 0);break;default:if(!Qg(R,h))break A}}return R}var X=[1];function IA(h){ZA.call(this,h)}S(IA,ZA);function gA(h){ZA.call(this,h,-1,mA)}S(gA,ZA),gA.prototype.getVertexType=function(){return LA(this,1,0)},gA.prototype.getPrimitiveType=function(){return LA(this,2,0)},gA.prototype.getVertexBufferList=function(){return V(this)},gA.prototype.getIndexBufferList=function(){return RI(this,4)};function $(h,R){for(;CI(R);)switch(R.i){case 8:var N=UA(R.g);P(h,1,N);break;case 16:N=UA(R.g),P(h,2,N);break;case 29:case 26:k(R,h.getVertexBufferList());break;case 32:case 34:N=R;var p=h.getIndexBufferList();N.h==2?m(N,gI.prototype.i,p):p.push(N.g.i());break;default:if(!Qg(h,R))return h}return h}var mA=[3,4];function VA(h){ZA.call(this,h)}S(VA,ZA),VA.prototype.getMesh=function(){return dA(this,gA,1)},VA.prototype.getPoseTransformMatrix=function(){return dA(this,hg,2)};function $A(h){A:{var R=new VA;for(h=new ZI(h);CI(h);)switch(h.i){case 10:var N=mI(h,new gA,$);fI(R,1,N);break;case 18:N=mI(h,new hg,cB),fI(R,2,N);break;default:if(!Qg(R,h))break A}}return R}function AI(h,R,N){if(N=h.createShader(N===0?h.VERTEX_SHADER:h.FRAGMENT_SHADER),h.shaderSource(N,R),h.compileShader(N),!h.getShaderParameter(N,h.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+h.getShaderInfoLog(N));return N}function wI(h){return XA(h,lI).map(function(R){return{index:LA(R,1,0),Y:nA(R,2),label:RA(R,3)!=null?LA(R,3,""):void 0,displayName:RA(R,4)!=null?LA(R,4,""):void 0}})}function aI(h){return{x:nA(h,1),y:nA(h,2),z:nA(h,3),visibility:RA(h,4)!=null?nA(h,4):void 0}}function DI(h,R){this.h=h,this.g=R,this.l=0}function $I(h,R,N){return wg(h,R),typeof h.g.canvas.transferToImageBitmap=="function"?Promise.resolve(h.g.canvas.transferToImageBitmap()):N?Promise.resolve(h.g.canvas):typeof createImageBitmap=="function"?createImageBitmap(h.g.canvas):(h.i===void 0&&(h.i=document.createElement("canvas")),new Promise(function(p){h.i.height=h.g.canvas.height,h.i.width=h.g.canvas.width,h.i.getContext("2d",{}).drawImage(h.g.canvas,0,0,h.g.canvas.width,h.g.canvas.height),p(h.i)}))}function wg(h,R){var N=h.g;if(h.m===void 0){var p=AI(N,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),v=AI(N,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),tA=N.createProgram();if(N.attachShader(tA,p),N.attachShader(tA,v),N.linkProgram(tA),!N.getProgramParameter(tA,N.LINK_STATUS))throw Error(`Could not compile WebGL program.

`)):typeof readline=="function"&&(t=readline(),t!==null&&(t+=`
`));if(!t)return null;E.input=TQ(t,!0)}return E.input.shift()},put_char:function(E,t){t===null||t===10?(K(rA(E.output,0)),E.output=[]):t!=0&&E.output.push(t)},flush:function(E){E.output&&E.output.length>0&&(K(rA(E.output,0)),E.output=[])}},default_tty1_ops:{put_char:function(E,t){t===null||t===10?(f(rA(E.output,0)),E.output=[]):t!=0&&E.output.push(t)},flush:function(E){E.output&&E.output.length>0&&(f(rA(E.output,0)),E.output=[])}}};function QC(E){for(var t=b(E,16384),a=DQ(t);E<t;)xA[a+E++]=0;return a}var rI={ops_table:null,mount:function(E){return rI.createNode(null,"/",16895,0)},createNode:function(E,t,a,c){if(y.isBlkdev(a)||y.isFIFO(a))throw new y.ErrnoError(63);rI.ops_table||(rI.ops_table={dir:{node:{getattr:rI.node_ops.getattr,setattr:rI.node_ops.setattr,lookup:rI.node_ops.lookup,mknod:rI.node_ops.mknod,rename:rI.node_ops.rename,unlink:rI.node_ops.unlink,rmdir:rI.node_ops.rmdir,readdir:rI.node_ops.readdir,symlink:rI.node_ops.symlink},stream:{llseek:rI.stream_ops.llseek}},file:{node:{getattr:rI.node_ops.getattr,setattr:rI.node_ops.setattr},stream:{llseek:rI.stream_ops.llseek,read:rI.stream_ops.read,write:rI.stream_ops.write,allocate:rI.stream_ops.allocate,mmap:rI.stream_ops.mmap,msync:rI.stream_ops.msync}},link:{node:{getattr:rI.node_ops.getattr,setattr:rI.node_ops.setattr,readlink:rI.node_ops.readlink},stream:{}},chrdev:{node:{getattr:rI.node_ops.getattr,setattr:rI.node_ops.setattr},stream:y.chrdev_stream_ops}});var M=y.createNode(E,t,a,c);return y.isDir(M.mode)?(M.node_ops=rI.ops_table.dir.node,M.stream_ops=rI.ops_table.dir.stream,M.contents={}):y.isFile(M.mode)?(M.node_ops=rI.ops_table.file.node,M.stream_ops=rI.ops_table.file.stream,M.usedBytes=0,M.contents=null):y.isLink(M.mode)?(M.node_ops=rI.ops_table.link.node,M.stream_ops=rI.ops_table.link.stream):y.isChrdev(M.mode)&&(M.node_ops=rI.ops_table.chrdev.node,M.stream_ops=rI.ops_table.chrdev.stream),M.timestamp=Date.now(),E&&(E.contents[t]=M),M},getFileDataAsRegularArray:function(E){if(E.contents&&E.contents.subarray){for(var t=[],a=0;a<E.usedBytes;++a)t.push(E.contents[a]);return t}return E.contents},getFileDataAsTypedArray:function(E){return E.contents?E.contents.subarray?E.contents.subarray(0,E.usedBytes):new Uint8Array(E.contents):new Uint8Array(0)},expandFileStorage:function(E,t){var a=E.contents?E.contents.length:0;if(!(a>=t)){var c=1048576;t=Math.max(t,a*(a<c?2:1.125)>>>0),a!=0&&(t=Math.max(t,256));var M=E.contents;E.contents=new Uint8Array(t),E.usedBytes>0&&E.contents.set(M.subarray(0,E.usedBytes),0)}},resizeFileStorage:function(E,t){if(E.usedBytes!=t){if(t==0){E.contents=null,E.usedBytes=0;return}if(!E.contents||E.contents.subarray){var a=E.contents;E.contents=new Uint8Array(t),a&&E.contents.set(a.subarray(0,Math.min(t,E.usedBytes))),E.usedBytes=t;return}if(E.contents||(E.contents=[]),E.contents.length>t)E.contents.length=t;else for(;E.contents.length<t;)E.contents.push(0);E.usedBytes=t}},node_ops:{getattr:function(E){var t={};return t.dev=y.isChrdev(E.mode)?E.id:1,t.ino=E.id,t.mode=E.mode,t.nlink=1,t.uid=0,t.gid=0,t.rdev=E.rdev,y.isDir(E.mode)?t.size=4096:y.isFile(E.mode)?t.size=E.usedBytes:y.isLink(E.mode)?t.size=E.link.length:t.size=0,t.atime=new Date(E.timestamp),t.mtime=new Date(E.timestamp),t.ctime=new Date(E.timestamp),t.blksize=4096,t.blocks=Math.ceil(t.size/t.blksize),t},setattr:function(E,t){t.mode!==void 0&&(E.mode=t.mode),t.timestamp!==void 0&&(E.timestamp=t.timestamp),t.size!==void 0&&rI.resizeFileStorage(E,t.size)},lookup:function(E,t){throw y.genericErrors[44]},mknod:function(E,t,a,c){return rI.createNode(E,t,a,c)},rename:function(E,t,a){if(y.isDir(E.mode)){var c;try{c=y.lookupNode(t,a)}catch{}if(c)for(var M in c.contents)throw new y.ErrnoError(55)}delete E.parent.contents[E.name],E.name=a,t.contents[a]=E,E.parent=t},unlink:function(E,t){delete E.contents[t]},rmdir:function(E,t){var a=y.lookupNode(E,t);for(var c in a.contents)throw new y.ErrnoError(55);delete E.contents[t]},readdir:function(E){var t=[".",".."];for(var a in E.contents)E.contents.hasOwnProperty(a)&&t.push(a);return t},symlink:function(E,t,a){var c=rI.createNode(E,t,41471,0);return c.link=a,c},readlink:function(E){if(!y.isLink(E.mode))throw new y.ErrnoError(28);return E.link}},stream_ops:{read:function(E,t,a,c,M){var U=E.node.contents;if(M>=E.node.usedBytes)return 0;var L=Math.min(E.node.usedBytes-M,c);if(L>8&&U.subarray)t.set(U.subarray(M,M+L),a);else for(var u=0;u<L;u++)t[a+u]=U[M+u];return L},write:function(E,t,a,c,M,U){if(t.buffer===xA.buffer&&(U=!1),!c)return 0;var L=E.node;if(L.timestamp=Date.now(),t.subarray&&(!L.contents||L.contents.subarray)){if(U)return L.contents=t.subarray(a,a+c),L.usedBytes=c,c;if(L.usedBytes===0&&M===0)return L.contents=t.slice(a,a+c),L.usedBytes=c,c;if(M+c<=L.usedBytes)return L.contents.set(t.subarray(a,a+c),M),c}if(rI.expandFileStorage(L,M+c),L.contents.subarray&&t.subarray)L.contents.set(t.subarray(a,a+c),M);else for(var u=0;u<c;u++)L.contents[M+u]=t[a+u];return L.usedBytes=Math.max(L.usedBytes,M+c),c},llseek:function(E,t,a){var c=t;if(a===1?c+=E.position:a===2&&y.isFile(E.node.mode)&&(c+=E.node.usedBytes),c<0)throw new y.ErrnoError(28);return c},allocate:function(E,t,a){rI.expandFileStorage(E.node,t+a),E.node.usedBytes=Math.max(E.node.usedBytes,t+a)},mmap:function(E,t,a,c,M,U){if(DA(t===0),!y.isFile(E.node.mode))throw new y.ErrnoError(43);var L,u,H=E.node.contents;if(!(U&2)&&H.buffer===eI)u=!1,L=H.byteOffset;else{if((c>0||c+a<H.length)&&(H.subarray?H=H.subarray(c,c+a):H=Array.prototype.slice.call(H,c,c+a)),u=!0,L=QC(a),!L)throw new y.ErrnoError(48);xA.set(H,L)}return{ptr:L,allocated:u}},msync:function(E,t,a,c,M){if(!y.isFile(E.node.mode))throw new y.ErrnoError(43);return M&2||rI.stream_ops.write(E,t,0,c,a,!1),0}}},y={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,trackingDelegate:{},tracking:{openFlags:{READ:1,WRITE:2}},ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:function(E,t){if(E=dg.resolve(y.cwd(),E),t=t||{},!E)return{path:"",node:null};var a={follow_mount:!0,recurse_count:0};for(var c in a)t[c]===void 0&&(t[c]=a[c]);if(t.recurse_count>8)throw new y.ErrnoError(32);for(var M=lI.normalizeArray(E.split("/").filter(function(oA){return!!oA}),!1),U=y.root,L="/",u=0;u<M.length;u++){var H=u===M.length-1;if(H&&t.parent)break;if(U=y.lookupNode(U,M[u]),L=lI.join2(L,M[u]),y.isMountpoint(U)&&(!H||H&&t.follow_mount)&&(U=U.mounted.root),!H||t.follow)for(var j=0;y.isLink(U.mode);){var CA=y.readlink(L);L=dg.resolve(lI.dirname(L),CA);var QA=y.lookupPath(L,{recurse_count:t.recurse_count});if(U=QA.node,j++>40)throw new y.ErrnoError(32)}}return{path:L,node:U}},getPath:function(E){for(var t;;){if(y.isRoot(E)){var a=E.mount.mountpoint;return t?a[a.length-1]!=="/"?a+"/"+t:a+t:a}t=t?E.name+"/"+t:E.name,E=E.parent}},hashName:function(E,t){for(var a=0,c=0;c<t.length;c++)a=(a<<5)-a+t.charCodeAt(c)|0;return(E+a>>>0)%y.nameTable.length},hashAddNode:function(E){var t=y.hashName(E.parent.id,E.name);E.name_next=y.nameTable[t],y.nameTable[t]=E},hashRemoveNode:function(E){var t=y.hashName(E.parent.id,E.name);if(y.nameTable[t]===E)y.nameTable[t]=E.name_next;else for(var a=y.nameTable[t];a;){if(a.name_next===E){a.name_next=E.name_next;break}a=a.name_next}},lookupNode:function(E,t){var a=y.mayLookup(E);if(a)throw new y.ErrnoError(a,E);for(var c=y.hashName(E.id,t),M=y.nameTable[c];M;M=M.name_next){var U=M.name;if(M.parent.id===E.id&&U===t)return M}return y.lookup(E,t)},createNode:function(E,t,a,c){var M=new y.FSNode(E,t,a,c);return y.hashAddNode(M),M},destroyNode:function(E){y.hashRemoveNode(E)},isRoot:function(E){return E===E.parent},isMountpoint:function(E){return!!E.mounted},isFile:function(E){return(E&61440)===32768},isDir:function(E){return(E&61440)===16384},isLink:function(E){return(E&61440)===40960},isChrdev:function(E){return(E&61440)===8192},isBlkdev:function(E){return(E&61440)===24576},isFIFO:function(E){return(E&61440)===4096},isSocket:function(E){return(E&49152)===49152},flagModes:{r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},modeStringToFlags:function(E){var t=y.flagModes[E];if(typeof t>"u")throw new Error("Unknown file open mode: "+E);return t},flagsToPermissionString:function(E){var t=["r","w","rw"][E&3];return E&512&&(t+="w"),t},nodePermissions:function(E,t){return y.ignorePermissions?0:t.indexOf("r")!==-1&&!(E.mode&292)||t.indexOf("w")!==-1&&!(E.mode&146)||t.indexOf("x")!==-1&&!(E.mode&73)?2:0},mayLookup:function(E){var t=y.nodePermissions(E,"x");return t||(E.node_ops.lookup?0:2)},mayCreate:function(E,t){try{var a=y.lookupNode(E,t);return 20}catch{}return y.nodePermissions(E,"wx")},mayDelete:function(E,t,a){var c;try{c=y.lookupNode(E,t)}catch(U){return U.errno}var M=y.nodePermissions(E,"wx");if(M)return M;if(a){if(!y.isDir(c.mode))return 54;if(y.isRoot(c)||y.getPath(c)===y.cwd())return 10}else if(y.isDir(c.mode))return 31;return 0},mayOpen:function(E,t){return E?y.isLink(E.mode)?32:y.isDir(E.mode)&&(y.flagsToPermissionString(t)!=="r"||t&512)?31:y.nodePermissions(E,y.flagsToPermissionString(t)):44},MAX_OPEN_FDS:4096,nextfd:function(E,t){E=E||0,t=t||y.MAX_OPEN_FDS;for(var a=E;a<=t;a++)if(!y.streams[a])return a;throw new y.ErrnoError(33)},getStream:function(E){return y.streams[E]},createStream:function(E,t,a){y.FSStream||(y.FSStream=function(){},y.FSStream.prototype={object:{get:function(){return this.node},set:function(L){this.node=L}},isRead:{get:function(){return(this.flags&2097155)!==1}},isWrite:{get:function(){return(this.flags&2097155)!==0}},isAppend:{get:function(){return this.flags&1024}}});var c=new y.FSStream;for(var M in E)c[M]=E[M];E=c;var U=y.nextfd(t,a);return E.fd=U,y.streams[U]=E,E},closeStream:function(E){y.streams[E]=null},chrdev_stream_ops:{open:function(E){var t=y.getDevice(E.node.rdev);E.stream_ops=t.stream_ops,E.stream_ops.open&&E.stream_ops.open(E)},llseek:function(){throw new y.ErrnoError(70)}},major:function(E){return E>>8},minor:function(E){return E&255},makedev:function(E,t){return E<<8|t},registerDevice:function(E,t){y.devices[E]={stream_ops:t}},getDevice:function(E){return y.devices[E]},getMounts:function(E){for(var t=[],a=[E];a.length;){var c=a.pop();t.push(c),a.push.apply(a,c.mounts)}return t},syncfs:function(E,t){typeof E=="function"&&(t=E,E=!1),y.syncFSRequests++,y.syncFSRequests>1&&f("warning: "+y.syncFSRequests+" FS.syncfs operations in flight at once, probably just doing extra work");var a=y.getMounts(y.root.mount),c=0;function M(L){return y.syncFSRequests--,t(L)}function U(L){if(L)return U.errored?void 0:(U.errored=!0,M(L));++c>=a.length&&M(null)}a.forEach(function(L){if(!L.type.syncfs)return U(null);L.type.syncfs(L,E,U)})},mount:function(E,t,a){var c=a==="/",M=!a,U;if(c&&y.root)throw new y.ErrnoError(10);if(!c&&!M){var L=y.lookupPath(a,{follow_mount:!1});if(a=L.path,U=L.node,y.isMountpoint(U))throw new y.ErrnoError(10);if(!y.isDir(U.mode))throw new y.ErrnoError(54)}var u={type:E,opts:t,mountpoint:a,mounts:[]},H=E.mount(u);return H.mount=u,u.root=H,c?y.root=H:U&&(U.mounted=u,U.mount&&U.mount.mounts.push(u)),H},unmount:function(E){var t=y.lookupPath(E,{follow_mount:!1});if(!y.isMountpoint(t.node))throw new y.ErrnoError(28);var a=t.node,c=a.mounted,M=y.getMounts(c);Object.keys(y.nameTable).forEach(function(L){for(var u=y.nameTable[L];u;){var H=u.name_next;M.indexOf(u.mount)!==-1&&y.destroyNode(u),u=H}}),a.mounted=null;var U=a.mount.mounts.indexOf(c);a.mount.mounts.splice(U,1)},lookup:function(E,t){return E.node_ops.lookup(E,t)},mknod:function(E,t,a){var c=y.lookupPath(E,{parent:!0}),M=c.node,U=lI.basename(E);if(!U||U==="."||U==="..")throw new y.ErrnoError(28);var L=y.mayCreate(M,U);if(L)throw new y.ErrnoError(L);if(!M.node_ops.mknod)throw new y.ErrnoError(63);return M.node_ops.mknod(M,U,t,a)},create:function(E,t){return t=t!==void 0?t:438,t&=4095,t|=32768,y.mknod(E,t,0)},mkdir:function(E,t){return t=t!==void 0?t:511,t&=1023,t|=16384,y.mknod(E,t,0)},mkdirTree:function(E,t){for(var a=E.split("/"),c="",M=0;M<a.length;++M)if(a[M]){c+="/"+a[M];try{y.mkdir(c,t)}catch(U){if(U.errno!=20)throw U}}},mkdev:function(E,t,a){return typeof a>"u"&&(a=t,t=438),t|=8192,y.mknod(E,t,a)},symlink:function(E,t){if(!dg.resolve(E))throw new y.ErrnoError(44);var a=y.lookupPath(t,{parent:!0}),c=a.node;if(!c)throw new y.ErrnoError(44);var M=lI.basename(t),U=y.mayCreate(c,M);if(U)throw new y.ErrnoError(U);if(!c.node_ops.symlink)throw new y.ErrnoError(63);return c.node_ops.symlink(c,M,E)},rename:function(E,t){var a=lI.dirname(E),c=lI.dirname(t),M=lI.basename(E),U=lI.basename(t),L,u,H;if(L=y.lookupPath(E,{parent:!0}),u=L.node,L=y.lookupPath(t,{parent:!0}),H=L.node,!u||!H)throw new y.ErrnoError(44);if(u.mount!==H.mount)throw new y.ErrnoError(75);var j=y.lookupNode(u,M),CA=dg.relative(E,c);if(CA.charAt(0)!==".")throw new y.ErrnoError(28);if(CA=dg.relative(t,a),CA.charAt(0)!==".")throw new y.ErrnoError(55);var QA;try{QA=y.lookupNode(H,U)}catch{}if(j!==QA){var oA=y.isDir(j.mode),YA=y.mayDelete(u,M,oA);if(YA)throw new y.ErrnoError(YA);if(YA=QA?y.mayDelete(H,U,oA):y.mayCreate(H,U),YA)throw new y.ErrnoError(YA);if(!u.node_ops.rename)throw new y.ErrnoError(63);if(y.isMountpoint(j)||QA&&y.isMountpoint(QA))throw new y.ErrnoError(10);if(H!==u&&(YA=y.nodePermissions(u,"w"),YA))throw new y.ErrnoError(YA);try{y.trackingDelegate.willMovePath&&y.trackingDelegate.willMovePath(E,t)}catch(tI){f("FS.trackingDelegate['willMovePath']('"+E+"', '"+t+"') threw an exception: "+tI.message)}y.hashRemoveNode(j);try{u.node_ops.rename(j,H,U)}catch(tI){throw tI}finally{y.hashAddNode(j)}try{y.trackingDelegate.onMovePath&&y.trackingDelegate.onMovePath(E,t)}catch(tI){f("FS.trackingDelegate['onMovePath']('"+E+"', '"+t+"') threw an exception: "+tI.message)}}},rmdir:function(E){var t=y.lookupPath(E,{parent:!0}),a=t.node,c=lI.basename(E),M=y.lookupNode(a,c),U=y.mayDelete(a,c,!0);if(U)throw new y.ErrnoError(U);if(!a.node_ops.rmdir)throw new y.ErrnoError(63);if(y.isMountpoint(M))throw new y.ErrnoError(10);try{y.trackingDelegate.willDeletePath&&y.trackingDelegate.willDeletePath(E)}catch(L){f("FS.trackingDelegate['willDeletePath']('"+E+"') threw an exception: "+L.message)}a.node_ops.rmdir(a,c),y.destroyNode(M);try{y.trackingDelegate.onDeletePath&&y.trackingDelegate.onDeletePath(E)}catch(L){f("FS.trackingDelegate['onDeletePath']('"+E+"') threw an exception: "+L.message)}},readdir:function(E){var t=y.lookupPath(E,{follow:!0}),a=t.node;if(!a.node_ops.readdir)throw new y.ErrnoError(54);return a.node_ops.readdir(a)},unlink:function(E){var t=y.lookupPath(E,{parent:!0}),a=t.node,c=lI.basename(E),M=y.lookupNode(a,c),U=y.mayDelete(a,c,!1);if(U)throw new y.ErrnoError(U);if(!a.node_ops.unlink)throw new y.ErrnoError(63);if(y.isMountpoint(M))throw new y.ErrnoError(10);try{y.trackingDelegate.willDeletePath&&y.trackingDelegate.willDeletePath(E)}catch(L){f("FS.trackingDelegate['willDeletePath']('"+E+"') threw an exception: "+L.message)}a.node_ops.unlink(a,c),y.destroyNode(M);try{y.trackingDelegate.onDeletePath&&y.trackingDelegate.onDeletePath(E)}catch(L){f("FS.trackingDelegate['onDeletePath']('"+E+"') threw an exception: "+L.message)}},readlink:function(E){var t=y.lookupPath(E),a=t.node;if(!a)throw new y.ErrnoError(44);if(!a.node_ops.readlink)throw new y.ErrnoError(28);return dg.resolve(y.getPath(a.parent),a.node_ops.readlink(a))},stat:function(E,t){var a=y.lookupPath(E,{follow:!t}),c=a.node;if(!c)throw new y.ErrnoError(44);if(!c.node_ops.getattr)throw new y.ErrnoError(63);return c.node_ops.getattr(c)},lstat:function(E){return y.stat(E,!0)},chmod:function(E,t,a){var c;if(typeof E=="string"){var M=y.lookupPath(E,{follow:!a});c=M.node}else c=E;if(!c.node_ops.setattr)throw new y.ErrnoError(63);c.node_ops.setattr(c,{mode:t&4095|c.mode&-4096,timestamp:Date.now()})},lchmod:function(E,t){y.chmod(E,t,!0)},fchmod:function(E,t){var a=y.getStream(E);if(!a)throw new y.ErrnoError(8);y.chmod(a.node,t)},chown:function(E,t,a,c){var M;if(typeof E=="string"){var U=y.lookupPath(E,{follow:!c});M=U.node}else M=E;if(!M.node_ops.setattr)throw new y.ErrnoError(63);M.node_ops.setattr(M,{timestamp:Date.now()})},lchown:function(E,t,a){y.chown(E,t,a,!0)},fchown:function(E,t,a){var c=y.getStream(E);if(!c)throw new y.ErrnoError(8);y.chown(c.node,t,a)},truncate:function(E,t){if(t<0)throw new y.ErrnoError(28);var a;if(typeof E=="string"){var c=y.lookupPath(E,{follow:!0});a=c.node}else a=E;if(!a.node_ops.setattr)throw new y.ErrnoError(63);if(y.isDir(a.mode))throw new y.ErrnoError(31);if(!y.isFile(a.mode))throw new y.ErrnoError(28);var M=y.nodePermissions(a,"w");if(M)throw new y.ErrnoError(M);a.node_ops.setattr(a,{size:t,timestamp:Date.now()})},ftruncate:function(E,t){var a=y.getStream(E);if(!a)throw new y.ErrnoError(8);if(!(a.flags&2097155))throw new y.ErrnoError(28);y.truncate(a.node,t)},utime:function(E,t,a){var c=y.lookupPath(E,{follow:!0}),M=c.node;M.node_ops.setattr(M,{timestamp:Math.max(t,a)})},open:function(E,t,a,c,M){if(E==="")throw new y.ErrnoError(44);t=typeof t=="string"?y.modeStringToFlags(t):t,a=typeof a>"u"?438:a,t&64?a=a&4095|32768:a=0;var U;if(typeof E=="object")U=E;else{E=lI.normalize(E);try{var L=y.lookupPath(E,{follow:!(t&131072)});U=L.node}catch{}}var u=!1;if(t&64)if(U){if(t&128)throw new y.ErrnoError(20)}else U=y.mknod(E,a,0),u=!0;if(!U)throw new y.ErrnoError(44);if(y.isChrdev(U.mode)&&(t&=-513),t&65536&&!y.isDir(U.mode))throw new y.ErrnoError(54);if(!u){var H=y.mayOpen(U,t);if(H)throw new y.ErrnoError(H)}t&512&&y.truncate(U,0),t&=-131713;var j=y.createStream({node:U,path:y.getPath(U),flags:t,seekable:!0,position:0,stream_ops:U.stream_ops,ungotten:[],error:!1},c,M);j.stream_ops.open&&j.stream_ops.open(j),I.logReadFiles&&!(t&1)&&(y.readFiles||(y.readFiles={}),E in y.readFiles||(y.readFiles[E]=1,f("FS.trackingDelegate error on read file: "+E)));try{if(y.trackingDelegate.onOpenFile){var CA=0;(t&2097155)!==1&&(CA|=y.tracking.openFlags.READ),t&2097155&&(CA|=y.tracking.openFlags.WRITE),y.trackingDelegate.onOpenFile(E,CA)}}catch(QA){f("FS.trackingDelegate['onOpenFile']('"+E+"', flags) threw an exception: "+QA.message)}return j},close:function(E){if(y.isClosed(E))throw new y.ErrnoError(8);E.getdents&&(E.getdents=null);try{E.stream_ops.close&&E.stream_ops.close(E)}catch(t){throw t}finally{y.closeStream(E.fd)}E.fd=null},isClosed:function(E){return E.fd===null},llseek:function(E,t,a){if(y.isClosed(E))throw new y.ErrnoError(8);if(!E.seekable||!E.stream_ops.llseek)throw new y.ErrnoError(70);if(a!=0&&a!=1&&a!=2)throw new y.ErrnoError(28);return E.position=E.stream_ops.llseek(E,t,a),E.ungotten=[],E.position},read:function(E,t,a,c,M){if(c<0||M<0)throw new y.ErrnoError(28);if(y.isClosed(E))throw new y.ErrnoError(8);if((E.flags&2097155)===1)throw new y.ErrnoError(8);if(y.isDir(E.node.mode))throw new y.ErrnoError(31);if(!E.stream_ops.read)throw new y.ErrnoError(28);var U=typeof M<"u";if(!U)M=E.position;else if(!E.seekable)throw new y.ErrnoError(70);var L=E.stream_ops.read(E,t,a,c,M);return U||(E.position+=L),L},write:function(E,t,a,c,M,U){if(c<0||M<0)throw new y.ErrnoError(28);if(y.isClosed(E))throw new y.ErrnoError(8);if(!(E.flags&2097155))throw new y.ErrnoError(8);if(y.isDir(E.node.mode))throw new y.ErrnoError(31);if(!E.stream_ops.write)throw new y.ErrnoError(28);E.seekable&&E.flags&1024&&y.llseek(E,0,2);var L=typeof M<"u";if(!L)M=E.position;else if(!E.seekable)throw new y.ErrnoError(70);var u=E.stream_ops.write(E,t,a,c,M,U);L||(E.position+=u);try{E.path&&y.trackingDelegate.onWriteToFile&&y.trackingDelegate.onWriteToFile(E.path)}catch(H){f("FS.trackingDelegate['onWriteToFile']('"+E.path+"') threw an exception: "+H.message)}return u},allocate:function(E,t,a){if(y.isClosed(E))throw new y.ErrnoError(8);if(t<0||a<=0)throw new y.ErrnoError(28);if(!(E.flags&2097155))throw new y.ErrnoError(8);if(!y.isFile(E.node.mode)&&!y.isDir(E.node.mode))throw new y.ErrnoError(43);if(!E.stream_ops.allocate)throw new y.ErrnoError(138);E.stream_ops.allocate(E,t,a)},mmap:function(E,t,a,c,M,U){if(M&2&&!(U&2)&&(E.flags&2097155)!==2)throw new y.ErrnoError(2);if((E.flags&2097155)===1)throw new y.ErrnoError(2);if(!E.stream_ops.mmap)throw new y.ErrnoError(43);return E.stream_ops.mmap(E,t,a,c,M,U)},msync:function(E,t,a,c,M){return!E||!E.stream_ops.msync?0:E.stream_ops.msync(E,t,a,c,M)},munmap:function(E){return 0},ioctl:function(E,t,a){if(!E.stream_ops.ioctl)throw new y.ErrnoError(59);return E.stream_ops.ioctl(E,t,a)},readFile:function(E,t){if(t=t||{},t.flags=t.flags||0,t.encoding=t.encoding||"binary",t.encoding!=="utf8"&&t.encoding!=="binary")throw new Error('Invalid encoding type "'+t.encoding+'"');var a,c=y.open(E,t.flags),M=y.stat(E),U=M.size,L=new Uint8Array(U);return y.read(c,L,0,U,0),t.encoding==="utf8"?a=rA(L,0):t.encoding==="binary"&&(a=L),y.close(c),a},writeFile:function(E,t,a){a=a||{},a.flags=a.flags||577;var c=y.open(E,a.flags,a.mode);if(typeof t=="string"){var M=new Uint8Array(eA(t)+1),U=EA(t,M,0,M.length);y.write(c,M,0,U,void 0,a.canOwn)}else if(ArrayBuffer.isView(t))y.write(c,t,0,t.byteLength,void 0,a.canOwn);else throw new Error("Unsupported data type");y.close(c)},cwd:function(){return y.currentPath},chdir:function(E){var t=y.lookupPath(E,{follow:!0});if(t.node===null)throw new y.ErrnoError(44);if(!y.isDir(t.node.mode))throw new y.ErrnoError(54);var a=y.nodePermissions(t.node,"x");if(a)throw new y.ErrnoError(a);y.currentPath=t.path},createDefaultDirectories:function(){y.mkdir("/tmp"),y.mkdir("/home"),y.mkdir("/home/web_user")},createDefaultDevices:function(){y.mkdir("/dev"),y.registerDevice(y.makedev(1,3),{read:function(){return 0},write:function(t,a,c,M,U){return M}}),y.mkdev("/dev/null",y.makedev(1,3)),Wg.register(y.makedev(5,0),Wg.default_tty_ops),Wg.register(y.makedev(6,0),Wg.default_tty1_ops),y.mkdev("/dev/tty",y.makedev(5,0)),y.mkdev("/dev/tty1",y.makedev(6,0));var E=JC();y.createDevice("/dev","random",E),y.createDevice("/dev","urandom",E),y.mkdir("/dev/shm"),y.mkdir("/dev/shm/tmp")},createSpecialDirectories:function(){y.mkdir("/proc"),y.mkdir("/proc/self"),y.mkdir("/proc/self/fd"),y.mount({mount:function(){var E=y.createNode("/proc/self","fd",16895,73);return E.node_ops={lookup:function(t,a){var c=+a,M=y.getStream(c);if(!M)throw new y.ErrnoError(8);var U={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:function(){return M.path}}};return U.parent=U,U}},E}},{},"/proc/self/fd")},createStandardStreams:function(){I.stdin?y.createDevice("/dev","stdin",I.stdin):y.symlink("/dev/tty","/dev/stdin"),I.stdout?y.createDevice("/dev","stdout",null,I.stdout):y.symlink("/dev/tty","/dev/stdout"),I.stderr?y.createDevice("/dev","stderr",null,I.stderr):y.symlink("/dev/tty1","/dev/stderr"),y.open("/dev/stdin",0),y.open("/dev/stdout",1),y.open("/dev/stderr",1)},ensureErrnoError:function(){y.ErrnoError||(y.ErrnoError=function(E,t){this.node=t,this.setErrno=function(a){this.errno=a},this.setErrno(E),this.message="FS error"},y.ErrnoError.prototype=new Error,y.ErrnoError.prototype.constructor=y.ErrnoError,[44].forEach(function(E){y.genericErrors[E]=new y.ErrnoError(E),y.genericErrors[E].stack="<generic error, no stack>"}))},staticInit:function(){y.ensureErrnoError(),y.nameTable=new Array(4096),y.mount(rI,{},"/"),y.createDefaultDirectories(),y.createDefaultDevices(),y.createSpecialDirectories(),y.filesystems={MEMFS:rI}},init:function(E,t,a){y.init.initialized=!0,y.ensureErrnoError(),I.stdin=E||I.stdin,I.stdout=t||I.stdout,I.stderr=a||I.stderr,y.createStandardStreams()},quit:function(){y.init.initialized=!1;var E=I._fflush;E&&E(0);for(var t=0;t<y.streams.length;t++){var a=y.streams[t];a&&y.close(a)}},getMode:function(E,t){var a=0;return E&&(a|=365),t&&(a|=146),a},findObject:function(E,t){var a=y.analyzePath(E,t);return a.exists?a.object:null},analyzePath:function(E,t){try{var a=y.lookupPath(E,{follow:!t});E=a.path}catch{}var c={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var a=y.lookupPath(E,{parent:!0});c.parentExists=!0,c.parentPath=a.path,c.parentObject=a.node,c.name=lI.basename(E),a=y.lookupPath(E,{follow:!t}),c.exists=!0,c.path=a.path,c.object=a.node,c.name=a.node.name,c.isRoot=a.path==="/"}catch(M){c.error=M.errno}return c},createPath:function(E,t,a,c){E=typeof E=="string"?E:y.getPath(E);for(var M=t.split("/").reverse();M.length;){var U=M.pop();if(U){var L=lI.join2(E,U);try{y.mkdir(L)}catch{}E=L}}return L},createFile:function(E,t,a,c,M){var U=lI.join2(typeof E=="string"?E:y.getPath(E),t),L=y.getMode(c,M);return y.create(U,L)},createDataFile:function(E,t,a,c,M,U){var L=t?lI.join2(typeof E=="string"?E:y.getPath(E),t):E,u=y.getMode(c,M),H=y.create(L,u);if(a){if(typeof a=="string"){for(var j=new Array(a.length),CA=0,QA=a.length;CA<QA;++CA)j[CA]=a.charCodeAt(CA);a=j}y.chmod(H,u|146);var oA=y.open(H,577);y.write(oA,a,0,a.length,0,U),y.close(oA),y.chmod(H,u)}return H},createDevice:function(E,t,a,c){var M=lI.join2(typeof E=="string"?E:y.getPath(E),t),U=y.getMode(!!a,!!c);y.createDevice.major||(y.createDevice.major=64);var L=y.makedev(y.createDevice.major++,0);return y.registerDevice(L,{open:function(u){u.seekable=!1},close:function(u){c&&c.buffer&&c.buffer.length&&c(10)},read:function(u,H,j,CA,QA){for(var oA=0,YA=0;YA<CA;YA++){var tI;try{tI=a()}catch{throw new y.ErrnoError(29)}if(tI===void 0&&oA===0)throw new y.ErrnoError(6);if(tI==null)break;oA++,H[j+YA]=tI}return oA&&(u.node.timestamp=Date.now()),oA},write:function(u,H,j,CA,QA){for(var oA=0;oA<CA;oA++)try{c(H[j+oA])}catch{throw new y.ErrnoError(29)}return CA&&(u.node.timestamp=Date.now()),oA}}),y.mkdev(M,U,L)},forceLoadFile:function(E){if(E.isDevice||E.isFolder||E.link||E.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(l)try{E.contents=TQ(l(E.url),!0),E.usedBytes=E.contents.length}catch{throw new y.ErrnoError(29)}else throw new Error("Cannot load without read() or XMLHttpRequest.")},createLazyFile:function(E,t,a,c,M){function U(){this.lengthKnown=!1,this.chunks=[]}if(U.prototype.get=function(QA){if(!(QA>this.length-1||QA<0)){var oA=QA%this.chunkSize,YA=QA/this.chunkSize|0;return this.getter(YA)[oA]}},U.prototype.setDataGetter=function(QA){this.getter=QA},U.prototype.cacheLength=function(){var QA=new XMLHttpRequest;if(QA.open("HEAD",a,!1),QA.send(null),!(QA.status>=200&&QA.status<300||QA.status===304))throw new Error("Couldn't load "+a+". Status: "+QA.status);var oA=Number(QA.getResponseHeader("Content-length")),YA,tI=(YA=QA.getResponseHeader("Accept-Ranges"))&&YA==="bytes",pI=(YA=QA.getResponseHeader("Content-Encoding"))&&YA==="gzip",LI=1024*1024;tI||(LI=oA);var jI=function(uA,OI){if(uA>OI)throw new Error("invalid range ("+uA+", "+OI+") or no bytes requested!");if(OI>oA-1)throw new Error("only "+oA+" bytes available! programmer error!");var BI=new XMLHttpRequest;if(BI.open("GET",a,!1),oA!==LI&&BI.setRequestHeader("Range","bytes="+uA+"-"+OI),typeof Uint8Array<"u"&&(BI.responseType="arraybuffer"),BI.overrideMimeType&&BI.overrideMimeType("text/plain; charset=x-user-defined"),BI.send(null),!(BI.status>=200&&BI.status<300||BI.status===304))throw new Error("Couldn't load "+a+". Status: "+BI.status);return BI.response!==void 0?new Uint8Array(BI.response||[]):TQ(BI.responseText||"",!0)},aA=this;aA.setDataGetter(function(uA){var OI=uA*LI,BI=(uA+1)*LI-1;if(BI=Math.min(BI,oA-1),typeof aA.chunks[uA]>"u"&&(aA.chunks[uA]=jI(OI,BI)),typeof aA.chunks[uA]>"u")throw new Error("doXHR failed!");return aA.chunks[uA]}),(pI||!oA)&&(LI=oA=1,oA=this.getter(0).length,LI=oA,K("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=oA,this._chunkSize=LI,this.lengthKnown=!0},typeof XMLHttpRequest<"u"){if(!s)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var L=new U;Object.defineProperties(L,{length:{get:function(){return this.lengthKnown||this.cacheLength(),this._length}},chunkSize:{get:function(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}});var u={isDevice:!1,contents:L}}else var u={isDevice:!1,url:a};var H=y.createFile(E,t,u,c,M);u.contents?H.contents=u.contents:u.url&&(H.contents=null,H.url=u.url),Object.defineProperties(H,{usedBytes:{get:function(){return this.contents.length}}});var j={},CA=Object.keys(H.stream_ops);return CA.forEach(function(QA){var oA=H.stream_ops[QA];j[QA]=function(){return y.forceLoadFile(H),oA.apply(null,arguments)}}),j.read=function(QA,oA,YA,tI,pI){y.forceLoadFile(H);var LI=QA.node.contents;if(pI>=LI.length)return 0;var jI=Math.min(LI.length-pI,tI);if(LI.slice)for(var aA=0;aA<jI;aA++)oA[YA+aA]=LI[pI+aA];else for(var aA=0;aA<jI;aA++)oA[YA+aA]=LI.get(pI+aA);return jI},H.stream_ops=j,H},createPreloadedFile:function(E,t,a,c,M,U,L,u,H,j){W.init();var CA=t?dg.resolve(lI.join2(E,t)):E;function QA(oA){function YA(pI){j&&j(),u||y.createDataFile(E,t,pI,c,M,H),U&&U(),QI()}var tI=!1;I.preloadPlugins.forEach(function(pI){tI||pI.canHandle(CA)&&(pI.handle(oA,CA,YA,function(){L&&L(),QI()}),tI=!0)}),tI||YA(oA)}pA(),typeof a=="string"?W.asyncLoad(a,function(oA){QA(oA)},L):QA(a)},indexedDB:function(){return window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB},DB_NAME:function(){return"EM_FS_"+window.location.pathname},DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(E,t,a){t=t||function(){},a=a||function(){};var c=y.indexedDB();try{var M=c.open(y.DB_NAME(),y.DB_VERSION)}catch(U){return a(U)}M.onupgradeneeded=function(){K("creating db");var U=M.result;U.createObjectStore(y.DB_STORE_NAME)},M.onsuccess=function(){var U=M.result,L=U.transaction([y.DB_STORE_NAME],"readwrite"),u=L.objectStore(y.DB_STORE_NAME),H=0,j=0,CA=E.length;function QA(){j==0?t():a()}E.forEach(function(oA){var YA=u.put(y.analyzePath(oA).object.contents,oA);YA.onsuccess=function(){H++,H+j==CA&&QA()},YA.onerror=function(){j++,H+j==CA&&QA()}}),L.onerror=a},M.onerror=a},loadFilesFromDB:function(E,t,a){t=t||function(){},a=a||function(){};var c=y.indexedDB();try{var M=c.open(y.DB_NAME(),y.DB_VERSION)}catch(U){return a(U)}M.onupgradeneeded=a,M.onsuccess=function(){var U=M.result;try{var L=U.transaction([y.DB_STORE_NAME],"readonly")}catch(oA){a(oA);return}var u=L.objectStore(y.DB_STORE_NAME),H=0,j=0,CA=E.length;function QA(){j==0?t():a()}E.forEach(function(oA){var YA=u.get(oA);YA.onsuccess=function(){y.analyzePath(oA).exists&&y.unlink(oA),y.createDataFile(lI.dirname(oA),lI.basename(oA),YA.result,!0,!0,!0),H++,H+j==CA&&QA()},YA.onerror=function(){j++,H+j==CA&&QA()}}),L.onerror=a},M.onerror=a}},J={mappings:{},DEFAULT_POLLMASK:5,umask:511,calculateAt:function(E,t){if(t[0]!=="/"){var a;if(E===-100)a=y.cwd();else{var c=y.getStream(E);if(!c)throw new y.ErrnoError(8);a=c.path}t=lI.join2(a,t)}return t},doStat:function(E,t,a){try{var c=E(t)}catch(M){if(M&&M.node&&lI.normalize(t)!==lI.normalize(y.getPath(M.node)))return-54;throw M}return UA[a>>2]=c.dev,UA[a+4>>2]=0,UA[a+8>>2]=c.ino,UA[a+12>>2]=c.mode,UA[a+16>>2]=c.nlink,UA[a+20>>2]=c.uid,UA[a+24>>2]=c.gid,UA[a+28>>2]=c.rdev,UA[a+32>>2]=0,P=[c.size>>>0,(nA=c.size,+Math.abs(nA)>=1?nA>0?(Math.min(+Math.floor(nA/4294967296),4294967295)|0)>>>0:~~+Math.ceil((nA-+(~~nA>>>0))/4294967296)>>>0:0)],UA[a+40>>2]=P[0],UA[a+44>>2]=P[1],UA[a+48>>2]=4096,UA[a+52>>2]=c.blocks,UA[a+56>>2]=c.atime.getTime()/1e3|0,UA[a+60>>2]=0,UA[a+64>>2]=c.mtime.getTime()/1e3|0,UA[a+68>>2]=0,UA[a+72>>2]=c.ctime.getTime()/1e3|0,UA[a+76>>2]=0,P=[c.ino>>>0,(nA=c.ino,+Math.abs(nA)>=1?nA>0?(Math.min(+Math.floor(nA/4294967296),4294967295)|0)>>>0:~~+Math.ceil((nA-+(~~nA>>>0))/4294967296)>>>0:0)],UA[a+80>>2]=P[0],UA[a+84>>2]=P[1],0},doMsync:function(E,t,a,c,M){var U=TA.slice(E,E+a);y.msync(t,U,M,a,c)},doMkdir:function(E,t){return E=lI.normalize(E),E[E.length-1]==="/"&&(E=E.substr(0,E.length-1)),y.mkdir(E,t,0),0},doMknod:function(E,t,a){switch(t&61440){case 32768:case 8192:case 24576:case 4096:case 49152:break;default:return-28}return y.mknod(E,t,a),0},doReadlink:function(E,t,a){if(a<=0)return-28;var c=y.readlink(E),M=Math.min(a,eA(c)),U=xA[t+M];return wA(c,t,a+1),xA[t+M]=U,M},doAccess:function(E,t){if(t&-8)return-28;var a,c=y.lookupPath(E,{follow:!0});if(a=c.node,!a)return-44;var M="";return t&4&&(M+="r"),t&2&&(M+="w"),t&1&&(M+="x"),M&&y.nodePermissions(a,M)?-2:0},doDup:function(E,t,a){var c=y.getStream(a);return c&&y.close(c),y.open(E,t,0,a,a).fd},doReadv:function(E,t,a,c){for(var M=0,U=0;U<a;U++){var L=UA[t+U*8>>2],u=UA[t+(U*8+4)>>2],H=y.read(E,xA,L,u,c);if(H<0)return-1;if(M+=H,H<u)break}return M},doWritev:function(E,t,a,c){for(var M=0,U=0;U<a;U++){var L=UA[t+U*8>>2],u=UA[t+(U*8+4)>>2],H=y.write(E,xA,L,u,c);if(H<0)return-1;M+=H}return M},varargs:void 0,get:function(){J.varargs+=4;var E=UA[J.varargs-4>>2];return E},getStr:function(E){var t=O(E);return t},getStreamFromFD:function(E){var t=y.getStream(E);if(!t)throw new y.ErrnoError(8);return t},get64:function(E,t){return E}};function X(E,t,a){J.varargs=a;try{var c=J.getStreamFromFD(E);switch(t){case 0:{var M=J.get();if(M<0)return-28;var U;return U=y.open(c.path,c.flags,0,M),U.fd}case 1:case 2:return 0;case 3:return c.flags;case 4:{var M=J.get();return c.flags|=M,0}case 12:{var M=J.get(),L=0;return gI[M+L>>1]=2,0}case 13:case 14:return 0;case 16:case 8:return-28;case 9:return sg(28),-1;default:return-28}}catch(u){return(typeof y>"u"||!(u instanceof y.ErrnoError))&&oI(u),-u.errno}}function IA(E,t,a){J.varargs=a;try{var c=J.getStreamFromFD(E);switch(t){case 21509:case 21505:return c.tty?0:-59;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return c.tty?0:-59;case 21519:{if(!c.tty)return-59;var M=J.get();return UA[M>>2]=0,0}case 21520:return c.tty?-28:-59;case 21531:{var M=J.get();return y.ioctl(c,t,M)}case 21523:return c.tty?0:-59;case 21524:return c.tty?0:-59;default:oI("bad ioctl syscall "+t)}}catch(U){return(typeof y>"u"||!(U instanceof y.ErrnoError))&&oI(U),-U.errno}}function gA(E,t,a){J.varargs=a;try{var c=J.getStr(E),M=J.get(),U=y.open(c,t,M);return U.fd}catch(L){return(typeof y>"u"||!(L instanceof y.ErrnoError))&&oI(L),-L.errno}}var $={};function mA(E){for(;E.length;){var t=E.pop(),a=E.pop();a(t)}}function VA(E){return this.fromWireType(WA[E>>2])}var $A={},AI={},wI={},aI=48,DI=57;function $I(E){if(E===void 0)return"_unknown";E=E.replace(/[^a-zA-Z0-9_]/g,"$");var t=E.charCodeAt(0);return t>=aI&&t<=DI?"_"+E:E}function wg(E,t){return E=$I(E),new Function("body","return function "+E+`() {
    "use strict" ;    return body.apply(this, arguments);
};
`)(t)}function og(E,t){var a=wg(t,function(c){this.name=t,this.message=c;var M=new Error(c).stack;M!==void 0&&(this.stack=this.toString()+`
`+M.replace(/^Error(:[^\n]*)?\n/,""))});return a.prototype=Object.create(E.prototype),a.prototype.constructor=a,a.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},a}var pg=void 0;function XI(E){throw new pg(E)}function II(E,t,a){E.forEach(function(u){wI[u]=t});function c(u){var H=a(u);H.length!==E.length&&XI("Mismatched type converter count");for(var j=0;j<E.length;++j)tg(E[j],H[j])}var M=new Array(t.length),U=[],L=0;t.forEach(function(u,H){AI.hasOwnProperty(u)?M[H]=AI[u]:(U.push(u),$A.hasOwnProperty(u)||($A[u]=[]),$A[u].push(function(){M[H]=AI[u],++L,L===U.length&&c(M)}))}),U.length===0&&c(M)}function jC(E){var t=$[E];delete $[E];var a=t.elements,c=a.length,M=a.map(function(u){return u.getterReturnType}).concat(a.map(function(u){return u.setterArgumentType})),U=t.rawConstructor,L=t.rawDestructor;II([E],M,function(u){return a.forEach(function(H,j){var CA=u[j],QA=H.getter,oA=H.getterContext,YA=u[j+c],tI=H.setter,pI=H.setterContext;H.read=function(LI){return CA.fromWireType(QA(oA,LI))},H.write=function(LI,jI){var aA=[];tI(pI,LI,YA.toWireType(aA,jI)),mA(aA)}}),[{name:t.name,fromWireType:function(H){for(var j=new Array(c),CA=0;CA<c;++CA)j[CA]=a[CA].read(H);return L(H),j},toWireType:function(H,j){if(c!==j.length)throw new TypeError("Incorrect number of tuple elements for "+t.name+": expected="+c+", actual="+j.length);for(var CA=U(),QA=0;QA<c;++QA)a[QA].write(CA,j[QA]);return H!==null&&H.push(L,CA),CA},argPackAdvance:8,readValueFromPointer:VA,destructorFunction:L}]})}var Ag={};function xg(E){var t=Ag[E];delete Ag[E];var a=t.rawConstructor,c=t.rawDestructor,M=t.fields,U=M.map(function(L){return L.getterReturnType}).concat(M.map(function(L){return L.setterArgumentType}));II([E],U,function(L){var u={};return M.forEach(function(H,j){var CA=H.fieldName,QA=L[j],oA=H.getter,YA=H.getterContext,tI=L[j+M.length],pI=H.setter,LI=H.setterContext;u[CA]={read:function(jI){return QA.fromWireType(oA(YA,jI))},write:function(jI,aA){var uA=[];pI(LI,jI,tI.toWireType(uA,aA)),mA(uA)}}}),[{name:t.name,fromWireType:function(H){var j={};for(var CA in u)j[CA]=u[CA].read(H);return c(H),j},toWireType:function(H,j){for(var CA in u)if(!(CA in j))throw new TypeError('Missing field:  "'+CA+'"');var QA=a();for(CA in u)u[CA].write(QA,j[CA]);return H!==null&&H.push(c,QA),QA},argPackAdvance:8,readValueFromPointer:VA,destructorFunction:c}]})}function YC(E){switch(E){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+E)}}function DC(){for(var E=new Array(256),t=0;t<256;++t)E[t]=String.fromCharCode(t);fC=E}var fC=void 0;function JI(E){for(var t="",a=E;TA[a];)t+=fC[TA[a++]];return t}var Rg=void 0;function FI(E){throw new Rg(E)}function tg(E,t,a){if(a=a||{},!("argPackAdvance"in t))throw new TypeError("registerType registeredInstance requires argPackAdvance");var c=t.name;if(E||FI('type "'+c+'" must have a positive integer typeid pointer'),AI.hasOwnProperty(E)){if(a.ignoreDuplicateRegistrations)return;FI("Cannot register type '"+c+"' twice")}if(AI[E]=t,delete wI[E],$A.hasOwnProperty(E)){var M=$A[E];delete $A[E],M.forEach(function(U){U()})}}function zC(E,t,a,c,M){var U=YC(a);t=JI(t),tg(E,{name:t,fromWireType:function(L){return!!L},toWireType:function(L,u){return u?c:M},argPackAdvance:8,readValueFromPointer:function(L){var u;if(a===1)u=xA;else if(a===2)u=gI;else if(a===4)u=UA;else throw new TypeError("Unknown boolean type size: "+t);return this.fromWireType(u[L>>U])},destructorFunction:null})}function oQ(E){if(!(this instanceof z)||!(E instanceof z))return!1;for(var t=this.$$.ptrType.registeredClass,a=this.$$.ptr,c=E.$$.ptrType.registeredClass,M=E.$$.ptr;t.baseClass;)a=t.upcast(a),t=t.baseClass;for(;c.baseClass;)M=c.upcast(M),c=c.baseClass;return t===c&&a===M}function GB(E){return{count:E.count,deleteScheduled:E.deleteScheduled,preservePointerOnDelete:E.preservePointerOnDelete,ptr:E.ptr,ptrType:E.ptrType,smartPtr:E.smartPtr,smartPtrType:E.smartPtrType}}function RB(E){function t(a){return a.$$.ptrType.registeredClass.name}FI(t(E)+" instance already deleted")}var FB=!1;function tQ(E){}function YQ(E){E.smartPtr?E.smartPtrType.rawDestructor(E.smartPtr):E.ptrType.registeredClass.rawDestructor(E.ptr)}function eQ(E){E.count.value-=1;var t=E.count.value===0;t&&YQ(E)}function LC(E){return typeof FinalizationGroup>"u"?(LC=function(t){return t},E):(FB=new FinalizationGroup(function(t){for(var a=t.next();!a.done;a=t.next()){var c=a.value;c.ptr?eQ(c):console.warn("object already deleted: "+c.ptr)}}),LC=function(t){return FB.register(t,t.$$,t.$$),t},tQ=function(t){FB.unregister(t.$$)},LC(E))}function VE(){if(this.$$.ptr||RB(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var E=LC(Object.create(Object.getPrototypeOf(this),{$$:{value:GB(this.$$)}}));return E.$$.count.value+=1,E.$$.deleteScheduled=!1,E}function fQ(){this.$$.ptr||RB(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&FI("Object already scheduled for deletion"),tQ(this),eQ(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function h(){return!this.$$.ptr}var R=void 0,N=[];function p(){for(;N.length;){var E=N.pop();E.$$.deleteScheduled=!1,E.delete()}}function v(){return this.$$.ptr||RB(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&FI("Object already scheduled for deletion"),N.push(this),N.length===1&&R&&R(p),this.$$.deleteScheduled=!0,this}function tA(){z.prototype.isAliasOf=oQ,z.prototype.clone=VE,z.prototype.delete=fQ,z.prototype.isDeleted=h,z.prototype.deleteLater=v}function z(){}var sA={};function SA(E,t,a){if(E[t].overloadTable===void 0){var c=E[t];E[t]=function(){return E[t].overloadTable.hasOwnProperty(arguments.length)||FI("Function '"+a+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+E[t].overloadTable+")!"),E[t].overloadTable[arguments.length].apply(this,arguments)},E[t].overloadTable=[],E[t].overloadTable[c.argCount]=c}}function bA(E,t,a){I.hasOwnProperty(E)?((a===void 0||I[E].overloadTable!==void 0&&I[E].overloadTable[a]!==void 0)&&FI("Cannot register public name '"+E+"' twice"),SA(I,E,E),I.hasOwnProperty(a)&&FI("Cannot register multiple overloads of a function with the same number of arguments ("+a+")!"),I[E].overloadTable[a]=t):(I[E]=t,a!==void 0&&(I[E].numArguments=a))}function nI(E,t,a,c,M,U,L,u){this.name=E,this.constructor=t,this.instancePrototype=a,this.rawDestructor=c,this.baseClass=M,this.getActualType=U,this.upcast=L,this.downcast=u,this.pureVirtualFunctions=[]}function xI(E,t,a){for(;t!==a;)t.upcast||FI("Expected null or instance of "+a.name+", got an instance of "+t.name),E=t.upcast(E),t=t.baseClass;return E}function SI(E,t){if(t===null)return this.isReference&&FI("null is not a valid "+this.name),0;t.$$||FI('Cannot pass "'+NB(t)+'" as a '+this.name),t.$$.ptr||FI("Cannot pass deleted object as a pointer of type "+this.name);var a=t.$$.ptrType.registeredClass,c=xI(t.$$.ptr,a,this.registeredClass);return c}function GI(E,t){var a;if(t===null)return this.isReference&&FI("null is not a valid "+this.name),this.isSmartPointer?(a=this.rawConstructor(),E!==null&&E.push(this.rawDestructor,a),a):0;t.$$||FI('Cannot pass "'+NB(t)+'" as a '+this.name),t.$$.ptr||FI("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&t.$$.ptrType.isConst&&FI("Cannot convert argument of type "+(t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name)+" to parameter type "+this.name);var c=t.$$.ptrType.registeredClass;if(a=xI(t.$$.ptr,c,this.registeredClass),this.isSmartPointer)switch(t.$$.smartPtr===void 0&&FI("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:t.$$.smartPtrType===this?a=t.$$.smartPtr:FI("Cannot convert argument of type "+(t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:a=t.$$.smartPtr;break;case 2:if(t.$$.smartPtrType===this)a=t.$$.smartPtr;else{var M=t.clone();a=this.rawShare(a,sQ(function(){M.delete()})),E!==null&&E.push(this.rawDestructor,a)}break;default:FI("Unsupporting sharing policy")}return a}function vA(E,t){if(t===null)return this.isReference&&FI("null is not a valid "+this.name),0;t.$$||FI('Cannot pass "'+NB(t)+'" as a '+this.name),t.$$.ptr||FI("Cannot pass deleted object as a pointer of type "+this.name),t.$$.ptrType.isConst&&FI("Cannot convert argument of type "+t.$$.ptrType.name+" to parameter type "+this.name);var a=t.$$.ptrType.registeredClass,c=xI(t.$$.ptr,a,this.registeredClass);return c}function hI(E){return this.rawGetPointee&&(E=this.rawGetPointee(E)),E}function MI(E){this.rawDestructor&&this.rawDestructor(E)}function HI(E){E!==null&&E.delete()}function ng(E,t,a){if(t===a)return E;if(a.baseClass===void 0)return null;var c=ng(E,t,a.baseClass);return c===null?null:a.downcast(c)}function PI(){return Object.keys(UI).length}function Mg(){var E=[];for(var t in UI)UI.hasOwnProperty(t)&&E.push(UI[t]);return E}function ag(E){R=E,N.length&&R&&R(p)}function NI(){I.getInheritedInstanceCount=PI,I.getLiveInheritedInstances=Mg,I.flushPendingDeletes=p,I.setDelayFunction=ag}var UI={};function bI(E,t){for(t===void 0&&FI("ptr should not be undefined");E.baseClass;)t=E.upcast(t),E=E.baseClass;return t}function KI(E,t){return t=bI(E,t),UI[t]}function YI(E,t){(!t.ptrType||!t.ptr)&&XI("makeClassHandle requires ptr and ptrType");var a=!!t.smartPtrType,c=!!t.smartPtr;return a!==c&&XI("Both smartPtrType and smartPtr must be specified"),t.count={value:1},LC(Object.create(E,{$$:{value:t}}))}function TI(E){var t=this.getPointee(E);if(!t)return this.destructor(E),null;var a=KI(this.registeredClass,t);if(a!==void 0){if(a.$$.count.value===0)return a.$$.ptr=t,a.$$.smartPtr=E,a.clone();var c=a.clone();return this.destructor(E),c}function M(){return this.isSmartPointer?YI(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:t,smartPtrType:this,smartPtr:E}):YI(this.registeredClass.instancePrototype,{ptrType:this,ptr:E})}var U=this.registeredClass.getActualType(t),L=sA[U];if(!L)return M.call(this);var u;this.isConst?u=L.constPointerType:u=L.pointerType;var H=ng(t,this.registeredClass,u.registeredClass);return H===null?M.call(this):this.isSmartPointer?YI(u.registeredClass.instancePrototype,{ptrType:u,ptr:H,smartPtrType:this,smartPtr:E}):YI(u.registeredClass.instancePrototype,{ptrType:u,ptr:H})}function uC(){nC.prototype.getPointee=hI,nC.prototype.destructor=MI,nC.prototype.argPackAdvance=8,nC.prototype.readValueFromPointer=VA,nC.prototype.deleteObject=HI,nC.prototype.fromWireType=TI}function nC(E,t,a,c,M,U,L,u,H,j,CA){this.name=E,this.registeredClass=t,this.isReference=a,this.isConst=c,this.isSmartPointer=M,this.pointeeType=U,this.sharingPolicy=L,this.rawGetPointee=u,this.rawConstructor=H,this.rawShare=j,this.rawDestructor=CA,!M&&t.baseClass===void 0?c?(this.toWireType=SI,this.destructorFunction=null):(this.toWireType=vA,this.destructorFunction=null):this.toWireType=GI}function Go(E,t,a){I.hasOwnProperty(E)||XI("Replacing nonexistant public symbol"),I[E].overloadTable!==void 0&&a!==void 0?I[E].overloadTable[a]=t:(I[E]=t,I[E].argCount=a)}function us(E,t,a){return a&&a.length?I["dynCall_"+E].apply(null,[t].concat(a)):I["dynCall_"+E].call(null,t)}function Hs(E,t,a){return E.indexOf("j")!=-1?us(E,t,a):CI.get(t).apply(null,a)}function ps(E,t){DA(E.indexOf("j")>=0,"getDynCaller should only be called with i64 sigs");var a=[];return function(){a.length=arguments.length;for(var c=0;c<arguments.length;c++)a[c]=arguments[c];return Hs(E,t,a)}}function Fg(E,t){E=JI(E);function a(){return E.indexOf("j")!=-1?ps(E,t):CI.get(t)}var c=a();return typeof c!="function"&&FI("unknown function pointer with signature "+E+": "+t),c}var Ro=void 0;function Fo(E){var t=Lo(E),a=JI(t);return hC(t),a}function _C(E,t){var a=[],c={};function M(U){if(!c[U]&&!AI[U]){if(wI[U]){wI[U].forEach(M);return}a.push(U),c[U]=!0}}throw t.forEach(M),new Ro(E+": "+a.map(Fo).join([", "]))}function ms(E,t,a,c,M,U,L,u,H,j,CA,QA,oA){CA=JI(CA),U=Fg(M,U),u&&(u=Fg(L,u)),j&&(j=Fg(H,j)),oA=Fg(QA,oA);var YA=$I(CA);bA(YA,function(){_C("Cannot construct "+CA+" due to unbound types",[c])}),II([E,t,a],c?[c]:[],function(tI){tI=tI[0];var pI,LI;c?(pI=tI.registeredClass,LI=pI.instancePrototype):LI=z.prototype;var jI=wg(YA,function(){if(Object.getPrototypeOf(this)!==aA)throw new Rg("Use 'new' to construct "+CA);if(uA.constructor_body===void 0)throw new Rg(CA+" has no accessible constructor");var bg=uA.constructor_body[arguments.length];if(bg===void 0)throw new Rg("Tried to invoke ctor of "+CA+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(uA.constructor_body).toString()+") parameters instead!");return bg.apply(this,arguments)}),aA=Object.create(LI,{constructor:{value:jI}});jI.prototype=aA;var uA=new nI(CA,jI,aA,oA,pI,U,u,j),OI=new nC(CA,uA,!0,!1,!1),BI=new nC(CA+"*",uA,!1,!1,!1),lg=new nC(CA+" const*",uA,!1,!0,!1);return sA[E]={pointerType:BI,constPointerType:lg},Go(YA,jI),[OI,BI,lg]})}function No(E,t){if(!(E instanceof Function))throw new TypeError("new_ called with constructor type "+typeof E+" which is not a function");var a=wg(E.name||"unknownFunctionName",function(){});a.prototype=E.prototype;var c=new a,M=E.apply(c,t);return M instanceof Object?M:c}function WE(E,t,a,c,M){var U=t.length;U<2&&FI("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var L=t[1]!==null&&a!==null,u=!1,H=1;H<t.length;++H)if(t[H]!==null&&t[H].destructorFunction===void 0){u=!0;break}for(var j=t[0].name!=="void",CA="",QA="",H=0;H<U-2;++H)CA+=(H!==0?", ":"")+"arg"+H,QA+=(H!==0?", ":"")+"arg"+H+"Wired";var oA="return function "+$I(E)+"("+CA+`) {
if (arguments.length !== `+(U-2)+`) {
throwBindingError('function `+E+" called with ' + arguments.length + ' arguments, expected "+(U-2)+` args!');
}
`;u&&(oA+=`var destructors = [];
`);var YA=u?"destructors":"null",tI=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],pI=[FI,c,M,mA,t[0],t[1]];L&&(oA+="var thisWired = classParam.toWireType("+YA+`, this);
`);for(var H=0;H<U-2;++H)oA+="var arg"+H+"Wired = argType"+H+".toWireType("+YA+", arg"+H+"); // "+t[H+2].name+`
`,tI.push("argType"+H),pI.push(t[H+2]);if(L&&(QA="thisWired"+(QA.length>0?", ":"")+QA),oA+=(j?"var rv = ":"")+"invoker(fn"+(QA.length>0?", ":"")+QA+`);
`,u)oA+=`runDestructors(destructors);
`;else for(var H=L?1:2;H<t.length;++H){var LI=H===1?"thisWired":"arg"+(H-2)+"Wired";t[H].destructorFunction!==null&&(oA+=LI+"_dtor("+LI+"); // "+t[H].name+`
`,tI.push(LI+"_dtor"),pI.push(t[H].destructorFunction))}j&&(oA+=`var ret = retType.fromWireType(rv);
return ret;
`),oA+=`}
`,tI.push(oA);var jI=No(Function,tI).apply(null,pI);return jI}function LQ(E,t){for(var a=[],c=0;c<E;c++)a.push(UA[(t>>2)+c]);return a}function qs(E,t,a,c,M,U,L){var u=LQ(a,c);t=JI(t),U=Fg(M,U),II([],[E],function(H){H=H[0];var j=H.name+"."+t;function CA(){_C("Cannot call "+j+" due to unbound types",u)}var QA=H.registeredClass.constructor;return QA[t]===void 0?(CA.argCount=a-1,QA[t]=CA):(SA(QA,t,j),QA[t].overloadTable[a-1]=CA),II([],u,function(oA){var YA=[oA[0],null].concat(oA.slice(1)),tI=WE(j,YA,null,U,L);return QA[t].overloadTable===void 0?(tI.argCount=a-1,QA[t]=tI):QA[t].overloadTable[a-1]=tI,[]}),[]})}function xs(E,t,a,c,M,U){DA(t>0);var L=LQ(t,a);M=Fg(c,M);var u=[U],H=[];II([],[E],function(j){j=j[0];var CA="constructor "+j.name;if(j.registeredClass.constructor_body===void 0&&(j.registeredClass.constructor_body=[]),j.registeredClass.constructor_body[t-1]!==void 0)throw new Rg("Cannot register multiple constructors with identical number of parameters ("+(t-1)+") for class '"+j.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return j.registeredClass.constructor_body[t-1]=function(){_C("Cannot construct "+j.name+" due to unbound types",L)},II([],L,function(QA){return j.registeredClass.constructor_body[t-1]=function(){arguments.length!==t-1&&FI(CA+" called with "+arguments.length+" arguments, expected "+(t-1)),H.length=0,u.length=t;for(var oA=1;oA<t;++oA)u[oA]=QA[oA].toWireType(H,arguments[oA-1]);var YA=M.apply(null,u);return mA(H),QA[0].fromWireType(YA)},[]}),[]})}function bs(E,t,a,c,M,U,L,u){var H=LQ(a,c);t=JI(t),U=Fg(M,U),II([],[E],function(j){j=j[0];var CA=j.name+"."+t;u&&j.registeredClass.pureVirtualFunctions.push(t);function QA(){_C("Cannot call "+CA+" due to unbound types",H)}var oA=j.registeredClass.instancePrototype,YA=oA[t];return YA===void 0||YA.overloadTable===void 0&&YA.className!==j.name&&YA.argCount===a-2?(QA.argCount=a-2,QA.className=j.name,oA[t]=QA):(SA(oA,t,CA),oA[t].overloadTable[a-2]=QA),II([],H,function(tI){var pI=WE(CA,tI,j,U,L);return oA[t].overloadTable===void 0?(pI.argCount=a-2,oA[t]=pI):oA[t].overloadTable[a-2]=pI,[]}),[]})}function yo(E,t,a){return E instanceof Object||FI(a+' with invalid "this": '+E),E instanceof t.registeredClass.constructor||FI(a+' incompatible with "this" of type '+E.constructor.name),E.$$.ptr||FI("cannot call emscripten binding method "+a+" on deleted object"),xI(E.$$.ptr,E.$$.ptrType.registeredClass,t.registeredClass)}function Ts(E,t,a,c,M,U,L,u,H,j){t=JI(t),M=Fg(c,M),II([],[E],function(CA){CA=CA[0];var QA=CA.name+"."+t,oA={get:function(){_C("Cannot access "+QA+" due to unbound types",[a,L])},enumerable:!0,configurable:!0};return H?oA.set=function(){_C("Cannot access "+QA+" due to unbound types",[a,L])}:oA.set=function(YA){FI(QA+" is a read-only property")},Object.defineProperty(CA.registeredClass.instancePrototype,t,oA),II([],H?[a,L]:[a],function(YA){var tI=YA[0],pI={get:function(){var jI=yo(this,CA,QA+" getter");return tI.fromWireType(M(U,jI))},enumerable:!0};if(H){H=Fg(u,H);var LI=YA[1];pI.set=function(jI){var aA=yo(this,CA,QA+" setter"),uA=[];H(j,aA,LI.toWireType(uA,jI)),mA(uA)}}return Object.defineProperty(CA.registeredClass.instancePrototype,t,pI),[]}),[]})}function Vs(E,t,a){E=JI(E),II([],[t],function(c){return c=c[0],I[E]=c.fromWireType(a),[]})}var OE=[],Og=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Mo(E){E>4&&--Og[E].refcount===0&&(Og[E]=void 0,OE.push(E))}function Ws(){for(var E=0,t=5;t<Og.length;++t)Og[t]!==void 0&&++E;return E}function Os(){for(var E=5;E<Og.length;++E)if(Og[E]!==void 0)return Og[E];return null}function Zs(){I.count_emval_handles=Ws,I.get_first_emval=Os}function sQ(E){switch(E){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:{var t=OE.length?OE.pop():Og.length;return Og[t]={refcount:1,value:E},t}}}function vs(E,t){t=JI(t),tg(E,{name:t,fromWireType:function(a){var c=Og[a].value;return Mo(a),c},toWireType:function(a,c){return sQ(c)},argPackAdvance:8,readValueFromPointer:VA,destructorFunction:null})}function NB(E){if(E===null)return"null";var t=typeof E;return t==="object"||t==="array"||t==="function"?E.toString():""+E}function Xs(E,t){switch(t){case 2:return function(a){return this.fromWireType(cI[a>>2])};case 3:return function(a){return this.fromWireType(zA[a>>3])};default:throw new TypeError("Unknown float type: "+E)}}function Ps(E,t,a){var c=YC(a);t=JI(t),tg(E,{name:t,fromWireType:function(M){return M},toWireType:function(M,U){if(typeof U!="number"&&typeof U!="boolean")throw new TypeError('Cannot convert "'+NB(U)+'" to '+this.name);return U},argPackAdvance:8,readValueFromPointer:Xs(t,c),destructorFunction:null})}function js(E,t,a,c,M,U){var L=LQ(t,a);E=JI(E),M=Fg(c,M),bA(E,function(){_C("Cannot call "+E+" due to unbound types",L)},t-1),II([],L,function(u){var H=[u[0],null].concat(u.slice(1));return Go(E,WE(E,H,null,M,U),t-1),[]})}function zs(E,t,a){switch(t){case 0:return a?function(c){return xA[c]}:function(c){return TA[c]};case 1:return a?function(c){return gI[c>>1]}:function(c){return _[c>>1]};case 2:return a?function(c){return UA[c>>2]}:function(c){return WA[c>>2]};default:throw new TypeError("Unknown integer type: "+E)}}function _s(E,t,a,c,M){t=JI(t),M===-1&&(M=4294967295);var U=YC(a),L=function(j){return j};if(c===0){var u=32-8*a;L=function(j){return j<<u>>>u}}var H=t.indexOf("unsigned")!=-1;tg(E,{name:t,fromWireType:L,toWireType:function(j,CA){if(typeof CA!="number"&&typeof CA!="boolean")throw new TypeError('Cannot convert "'+NB(CA)+'" to '+this.name);if(CA<c||CA>M)throw new TypeError('Passing a number "'+NB(CA)+'" from JS side to C/C++ side to an argument of type "'+t+'", which is outside the valid range ['+c+", "+M+"]!");return H?CA>>>0:CA|0},argPackAdvance:8,readValueFromPointer:zs(t,U,c!==0),destructorFunction:null})}function $s(E,t,a){var c=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],M=c[t];function U(L){L=L>>2;var u=WA,H=u[L],j=u[L+1];return new M(eI,j,H)}a=JI(a),tg(E,{name:a,fromWireType:U,argPackAdvance:8,readValueFromPointer:U},{ignoreDuplicateRegistrations:!0})}function Aa(E,t){t=JI(t);var a=t==="std::string";tg(E,{name:t,fromWireType:function(c){var M=WA[c>>2],U;if(a)for(var L=c+4,u=0;u<=M;++u){var H=c+4+u;if(u==M||TA[H]==0){var j=H-L,CA=O(L,j);U===void 0?U=CA:(U+="\0",U+=CA),L=H+1}}else{for(var QA=new Array(M),u=0;u<M;++u)QA[u]=String.fromCharCode(TA[c+4+u]);U=QA.join("")}return hC(c),U},toWireType:function(c,M){M instanceof ArrayBuffer&&(M=new Uint8Array(M));var U,L=typeof M=="string";L||M instanceof Uint8Array||M instanceof Uint8ClampedArray||M instanceof Int8Array||FI("Cannot pass non-string to std::string"),a&&L?U=function(){return eA(M)}:U=function(){return M.length};var u=U(),H=DQ(4+u+1);if(WA[H>>2]=u,a&&L)wA(M,H+4,u+1);else if(L)for(var j=0;j<u;++j){var CA=M.charCodeAt(j);CA>255&&(hC(H),FI("String has UTF-16 code units that do not fit in 8 bits")),TA[H+4+j]=CA}else for(var j=0;j<u;++j)TA[H+4+j]=M[j];return c!==null&&c.push(hC,H),H},argPackAdvance:8,readValueFromPointer:VA,destructorFunction:function(c){hC(c)}})}function Ia(E,t,a){a=JI(a);var c,M,U,L,u;t===2?(c=FA,M=cA,L=JA,U=function(){return _},u=1):t===4&&(c=fA,M=iA,L=GA,U=function(){return WA},u=2),tg(E,{name:a,fromWireType:function(H){for(var j=WA[H>>2],CA=U(),QA,oA=H+4,YA=0;YA<=j;++YA){var tI=H+4+YA*t;if(YA==j||CA[tI>>u]==0){var pI=tI-oA,LI=c(oA,pI);QA===void 0?QA=LI:(QA+="\0",QA+=LI),oA=tI+t}}return hC(H),QA},toWireType:function(H,j){typeof j!="string"&&FI("Cannot pass non-string to C++ string type "+a);var CA=L(j),QA=DQ(4+CA+t);return WA[QA>>2]=CA>>u,M(j,QA+4,CA+t),H!==null&&H.push(hC,QA),QA},argPackAdvance:8,readValueFromPointer:VA,destructorFunction:function(H){hC(H)}})}function ga(E,t,a,c,M,U){$[E]={name:JI(t),rawConstructor:Fg(a,c),rawDestructor:Fg(M,U),elements:[]}}function Ca(E,t,a,c,M,U,L,u,H){$[E].elements.push({getterReturnType:t,getter:Fg(a,c),getterContext:M,setterArgumentType:U,setter:Fg(L,u),setterContext:H})}function Ba(E,t,a,c,M,U){Ag[E]={name:JI(t),rawConstructor:Fg(a,c),rawDestructor:Fg(M,U),fields:[]}}function Qa(E,t,a,c,M,U,L,u,H,j){Ag[E].fields.push({fieldName:JI(t),getterReturnType:a,getter:Fg(c,M),getterContext:U,setterArgumentType:L,setter:Fg(u,H),setterContext:j})}function Ea(E,t){t=JI(t),tg(E,{isVoid:!0,name:t,argPackAdvance:0,fromWireType:function(){},toWireType:function(a,c){}})}var ia={};function lo(E){var t=ia[E];return t===void 0?JI(E):t}var ZE=[];function uQ(E){return E||FI("Cannot use deleted val. handle = "+E),Og[E].value}function oa(E,t,a,c){E=ZE[E],t=uQ(t),a=lo(a),E(t,a,null,c)}function ta(E){var t=ZE.length;return ZE.push(E),t}function So(E,t){var a=AI[E];return a===void 0&&FI(t+" has unknown type "+Fo(E)),a}function ea(E,t){for(var a=new Array(E),c=0;c<E;++c)a[c]=So(UA[(t>>2)+c],"parameter "+c);return a}function sa(E,t){for(var a=ea(E,t),c=a[0],M=c.name+"_$"+a.slice(1).map(function(YA){return YA.name}).join("_")+"$",U=["retType"],L=[c],u="",H=0;H<E-1;++H)u+=(H!==0?", ":"")+"arg"+H,U.push("argType"+H),L.push(a[1+H]);for(var j=$I("methodCaller_"+M),CA="return function "+j+`(handle, name, destructors, args) {
`,QA=0,H=0;H<E-1;++H)CA+="    var arg"+H+" = argType"+H+".readValueFromPointer(args"+(QA?"+"+QA:"")+`);
`,QA+=a[H+1].argPackAdvance;CA+="    var rv = handle[name]("+u+`);
`;for(var H=0;H<E-1;++H)a[H+1].deleteObject&&(CA+="    argType"+H+".deleteObject(arg"+H+`);
`);c.isVoid||(CA+=`    return retType.toWireType(destructors, rv);
`),CA+=`};
`,U.push(CA);var oA=No(Function,U).apply(null,L);return ta(oA)}function aa(E){E>4&&(Og[E].refcount+=1)}function Da(){return sQ([])}function na(E){return sQ(lo(E))}function ha(E,t,a){E=uQ(E),t=uQ(t),a=uQ(a),E[t]=a}function ra(E,t){E=So(E,"_emval_take_value");var a=E.readValueFromPointer(t);return sQ(a)}function wa(){oI()}var ca=!0;function Ga(E,t){var a;if(E===0)a=Date.now();else if((E===1||E===4)&&ca)a=XA();else return sg(28),-1;return UA[t>>2]=a/1e3|0,UA[t+4>>2]=a%1e3*1e3*1e3|0,0}function Ra(E,t,a){TA.copyWithin(E,t,t+a)}function Fa(){return TA.length}function Na(E){try{return d.grow(E-eI.byteLength+65535>>>16),ZI(d.buffer),1}catch{}}function ya(E){E=E>>>0;var t=Fa(),a=1073741824;if(E>a)return!1;for(var c=16777216,M=1;M<=4;M*=2){var U=t*(1+.2/M);U=Math.min(U,E+100663296);var L=Math.min(a,jA(Math.max(c,E,U),65536)),u=Na(L);if(u)return!0}return!1}var Uo={};function Ma(){return o||"./this.program"}function aQ(){if(!aQ.strings){var E=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",t={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:E,_:Ma()};for(var a in Uo)t[a]=Uo[a];var c=[];for(var a in t)c.push(a+"="+t[a]);aQ.strings=c}return aQ.strings}function la(E,t){try{var a=0;return aQ().forEach(function(c,M){var U=t+a;UA[E+M*4>>2]=U,PA(c,U),a+=c.length+1}),0}catch(c){return(typeof y>"u"||!(c instanceof y.ErrnoError))&&oI(c),c.errno}}function Sa(E,t){try{var a=aQ();UA[E>>2]=a.length;var c=0;return a.forEach(function(M){c+=M.length+1}),UA[t>>2]=c,0}catch(M){return(typeof y>"u"||!(M instanceof y.ErrnoError))&&oI(M),M.errno}}function Ua(E){try{var t=J.getStreamFromFD(E);return y.close(t),0}catch(a){return(typeof y>"u"||!(a instanceof y.ErrnoError))&&oI(a),a.errno}}function Ka(E,t,a,c){try{var M=J.getStreamFromFD(E),U=J.doReadv(M,t,a);return UA[c>>2]=U,0}catch(L){return(typeof y>"u"||!(L instanceof y.ErrnoError))&&oI(L),L.errno}}function da(E,t,a,c,M){try{var U=J.getStreamFromFD(E),L=4294967296,u=a*L+(t>>>0),H=9007199254740992;return u<=-H||u>=H?-61:(y.llseek(U,u,c),P=[U.position>>>0,(nA=U.position,+Math.abs(nA)>=1?nA>0?(Math.min(+Math.floor(nA/4294967296),4294967295)|0)>>>0:~~+Math.ceil((nA-+(~~nA>>>0))/4294967296)>>>0:0)],UA[M>>2]=P[0],UA[M+4>>2]=P[1],U.getdents&&u===0&&c===0&&(U.getdents=null),0)}catch(j){return(typeof y>"u"||!(j instanceof y.ErrnoError))&&oI(j),j.errno}}function ka(E,t,a,c){try{var M=J.getStreamFromFD(E),U=J.doWritev(M,t,a);return UA[c>>2]=U,0}catch(L){return(typeof y>"u"||!(L instanceof y.ErrnoError))&&oI(L),L.errno}}function Ja(E){}function HQ(E){return E%4===0&&(E%100!==0||E%400===0)}function vE(E,t){for(var a=0,c=0;c<=t;a+=E[c++]);return a}var pQ=[31,29,31,30,31,30,31,31,30,31,30,31],mQ=[31,28,31,30,31,30,31,31,30,31,30,31];function qQ(E,t){for(var a=new Date(E.getTime());t>0;){var c=HQ(a.getFullYear()),M=a.getMonth(),U=(c?pQ:mQ)[M];if(t>U-a.getDate())t-=U-a.getDate()+1,a.setDate(1),M<11?a.setMonth(M+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else return a.setDate(a.getDate()+t),a}return a}function Ya(E,t,a,c){var M=UA[c+40>>2],U={tm_sec:UA[c>>2],tm_min:UA[c+4>>2],tm_hour:UA[c+8>>2],tm_mday:UA[c+12>>2],tm_mon:UA[c+16>>2],tm_year:UA[c+20>>2],tm_wday:UA[c+24>>2],tm_yday:UA[c+28>>2],tm_isdst:UA[c+32>>2],tm_gmtoff:UA[c+36>>2],tm_zone:M?O(M):""},L=O(a),u={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var H in u)L=L.replace(new RegExp(H,"g"),u[H]);var j=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],CA=["January","February","March","April","May","June","July","August","September","October","November","December"];function QA(aA,uA,OI){for(var BI=typeof aA=="number"?aA.toString():aA||"";BI.length<uA;)BI=OI[0]+BI;return BI}function oA(aA,uA){return QA(aA,uA,"0")}function YA(aA,uA){function OI(lg){return lg<0?-1:lg>0?1:0}var BI;return(BI=OI(aA.getFullYear()-uA.getFullYear()))===0&&(BI=OI(aA.getMonth()-uA.getMonth()))===0&&(BI=OI(aA.getDate()-uA.getDate())),BI}function tI(aA){switch(aA.getDay()){case 0:return new Date(aA.getFullYear()-1,11,29);case 1:return aA;case 2:return new Date(aA.getFullYear(),0,3);case 3:return new Date(aA.getFullYear(),0,2);case 4:return new Date(aA.getFullYear(),0,1);case 5:return new Date(aA.getFullYear()-1,11,31);case 6:return new Date(aA.getFullYear()-1,11,30)}}function pI(aA){var uA=qQ(new Date(aA.tm_year+1900,0,1),aA.tm_yday),OI=new Date(uA.getFullYear(),0,4),BI=new Date(uA.getFullYear()+1,0,4),lg=tI(OI),bg=tI(BI);return YA(lg,uA)<=0?YA(bg,uA)<=0?uA.getFullYear()+1:uA.getFullYear():uA.getFullYear()-1}var LI={"%a":function(aA){return j[aA.tm_wday].substring(0,3)},"%A":function(aA){return j[aA.tm_wday]},"%b":function(aA){return CA[aA.tm_mon].substring(0,3)},"%B":function(aA){return CA[aA.tm_mon]},"%C":function(aA){var uA=aA.tm_year+1900;return oA(uA/100|0,2)},"%d":function(aA){return oA(aA.tm_mday,2)},"%e":function(aA){return QA(aA.tm_mday,2," ")},"%g":function(aA){return pI(aA).toString().substring(2)},"%G":function(aA){return pI(aA)},"%H":function(aA){return oA(aA.tm_hour,2)},"%I":function(aA){var uA=aA.tm_hour;return uA==0?uA=12:uA>12&&(uA-=12),oA(uA,2)},"%j":function(aA){return oA(aA.tm_mday+vE(HQ(aA.tm_year+1900)?pQ:mQ,aA.tm_mon-1),3)},"%m":function(aA){return oA(aA.tm_mon+1,2)},"%M":function(aA){return oA(aA.tm_min,2)},"%n":function(){return`
`},"%p":function(aA){return aA.tm_hour>=0&&aA.tm_hour<12?"AM":"PM"},"%S":function(aA){return oA(aA.tm_sec,2)},"%t":function(){return"	"},"%u":function(aA){return aA.tm_wday||7},"%U":function(aA){var uA=new Date(aA.tm_year+1900,0,1),OI=uA.getDay()===0?uA:qQ(uA,7-uA.getDay()),BI=new Date(aA.tm_year+1900,aA.tm_mon,aA.tm_mday);if(YA(OI,BI)<0){var lg=vE(HQ(BI.getFullYear())?pQ:mQ,BI.getMonth()-1)-31,bg=31-OI.getDate(),AB=bg+lg+BI.getDate();return oA(Math.ceil(AB/7),2)}return YA(OI,uA)===0?"01":"00"},"%V":function(aA){var uA=new Date(aA.tm_year+1900,0,4),OI=new Date(aA.tm_year+1901,0,4),BI=tI(uA),lg=tI(OI),bg=qQ(new Date(aA.tm_year+1900,0,1),aA.tm_yday);if(YA(bg,BI)<0)return"53";if(YA(lg,bg)<=0)return"01";var AB;return BI.getFullYear()<aA.tm_year+1900?AB=aA.tm_yday+32-BI.getDate():AB=aA.tm_yday+1-BI.getDate(),oA(Math.ceil(AB/7),2)},"%w":function(aA){return aA.tm_wday},"%W":function(aA){var uA=new Date(aA.tm_year,0,1),OI=uA.getDay()===1?uA:qQ(uA,uA.getDay()===0?1:7-uA.getDay()+1),BI=new Date(aA.tm_year+1900,aA.tm_mon,aA.tm_mday);if(YA(OI,BI)<0){var lg=vE(HQ(BI.getFullYear())?pQ:mQ,BI.getMonth()-1)-31,bg=31-OI.getDate(),AB=bg+lg+BI.getDate();return oA(Math.ceil(AB/7),2)}return YA(OI,uA)===0?"01":"00"},"%y":function(aA){return(aA.tm_year+1900).toString().substring(2)},"%Y":function(aA){return aA.tm_year+1900},"%z":function(aA){var uA=aA.tm_gmtoff,OI=uA>=0;return uA=Math.abs(uA)/60,uA=uA/60*100+uA%60,(OI?"+":"-")+("0000"+uA).slice(-4)},"%Z":function(aA){return aA.tm_zone},"%%":function(){return"%"}};for(var H in LI)L.indexOf(H)>=0&&(L=L.replace(new RegExp(H,"g"),LI[H](U)));var jI=TQ(L,!1);return jI.length>t?0:(qA(jI,E),jI.length-1)}function fa(E,t,a,c){return Ya(E,t,a,c)}I.requestFullscreen=function(E,t){W.requestFullscreen(E,t)},I.requestAnimationFrame=function(E){W.requestAnimationFrame(E)},I.setCanvasSize=function(E,t,a){W.setCanvasSize(E,t,a)},I.pauseMainLoop=function(){W.mainLoop.pause()},I.resumeMainLoop=function(){W.mainLoop.resume()},I.getUserMedia=function(){W.getUserMedia()},I.createContext=function(E,t,a,c){return W.createContext(E,t,a,c)};var Ko=function(E,t,a,c){E||(E=this),this.parent=E,this.mount=E.mount,this.mounted=null,this.id=y.nextInode++,this.name=t,this.mode=a,this.node_ops={},this.stream_ops={},this.rdev=c},xQ=365,bQ=146;Object.defineProperties(Ko.prototype,{read:{get:function(){return(this.mode&xQ)===xQ},set:function(E){E?this.mode|=xQ:this.mode&=~xQ}},write:{get:function(){return(this.mode&bQ)===bQ},set:function(E){E?this.mode|=bQ:this.mode&=~bQ}},isFolder:{get:function(){return y.isDir(this.mode)}},isDevice:{get:function(){return y.isChrdev(this.mode)}}}),y.FSNode=Ko,y.staticInit(),I.FS_createPath=y.createPath,I.FS_createDataFile=y.createDataFile,I.FS_createPreloadedFile=y.createPreloadedFile,I.FS_createLazyFile=y.createLazyFile,I.FS_createDevice=y.createDevice,I.FS_unlink=y.unlink,pg=I.InternalError=og(Error,"InternalError"),DC(),Rg=I.BindingError=og(Error,"BindingError"),tA(),uC(),NI(),Ro=I.UnboundTypeError=og(Error,"UnboundTypeError"),Zs();function TQ(E,t,a){var c=a>0?a:eA(E)+1,M=new Array(c),U=EA(E,M,0,M.length);return t&&(M.length=U),M}function ko(E){for(var t=[],a=0;a<E.length;a++){var c=E[a];c>255&&(c&=255),t.push(String.fromCharCode(c))}return t.join("")}var La=typeof atob=="function"?atob:function(E){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",a="",c,M,U,L,u,H,j,CA=0;E=E.replace(/[^A-Za-z0-9\+\/\=]/g,"");do L=t.indexOf(E.charAt(CA++)),u=t.indexOf(E.charAt(CA++)),H=t.indexOf(E.charAt(CA++)),j=t.indexOf(E.charAt(CA++)),c=L<<2|u>>4,M=(u&15)<<4|H>>2,U=(H&3)<<6|j,a=a+String.fromCharCode(c),H!==64&&(a=a+String.fromCharCode(M)),j!==64&&(a=a+String.fromCharCode(U));while(CA<E.length);return a};function ua(E){if(typeof D=="boolean"&&D){var t;try{t=Buffer.from(E,"base64")}catch{t=new Buffer(E,"base64")}return new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}try{for(var a=La(E),c=new Uint8Array(a.length),M=0;M<a.length;++M)c[M]=a.charCodeAt(M);return c}catch{throw new Error("Converting base64 string to bytes failed.")}}function $C(E){if(ZA(E))return ua(E.slice(WI.length))}mI.push({func:function(){Yo()}});var Jo={__cxa_allocate_exception:Qg,__cxa_atexit:hg,__cxa_throw:iQ,__sys_fcntl64:X,__sys_ioctl:IA,__sys_open:gA,_embind_finalize_value_array:jC,_embind_finalize_value_object:xg,_embind_register_bool:zC,_embind_register_class:ms,_embind_register_class_class_function:qs,_embind_register_class_constructor:xs,_embind_register_class_function:bs,_embind_register_class_property:Ts,_embind_register_constant:Vs,_embind_register_emval:vs,_embind_register_float:Ps,_embind_register_function:js,_embind_register_integer:_s,_embind_register_memory_view:$s,_embind_register_std_string:Aa,_embind_register_std_wstring:Ia,_embind_register_value_array:ga,_embind_register_value_array_element:Ca,_embind_register_value_object:Ba,_embind_register_value_object_field:Qa,_embind_register_void:Ea,_emval_call_void_method:oa,_emval_decref:Mo,_emval_get_method_caller:sa,_emval_incref:aa,_emval_new_array:Da,_emval_new_cstring:na,_emval_set_property:ha,_emval_take_value:ra,abort:wa,clock_gettime:Ga,emscripten_memcpy_big:Ra,emscripten_resize_heap:ya,environ_get:la,environ_sizes_get:Sa,fd_close:Ua,fd_read:Ka,fd_seek:da,fd_write:ka,setTempRet0:Ja,strftime_l:fa};LA();var Yo=I.___wasm_call_ctors=function(){return(Yo=I.___wasm_call_ctors=I.asm.__wasm_call_ctors).apply(null,arguments)},DQ=I._malloc=function(){return(DQ=I._malloc=I.asm.malloc).apply(null,arguments)},hC=I._free=function(){return(hC=I._free=I.asm.free).apply(null,arguments)},fo=I.___errno_location=function(){return(fo=I.___errno_location=I.asm.__errno_location).apply(null,arguments)},Lo=I.___getTypeName=function(){return(Lo=I.___getTypeName=I.asm.__getTypeName).apply(null,arguments)};I.___embind_register_native_and_builtin_types=function(){return(I.___embind_register_native_and_builtin_types=I.asm.__embind_register_native_and_builtin_types).apply(null,arguments)},I._emscripten_main_thread_process_queued_calls=function(){return(I._emscripten_main_thread_process_queued_calls=I.asm.emscripten_main_thread_process_queued_calls).apply(null,arguments)},I.stackSave=function(){return(I.stackSave=I.asm.stackSave).apply(null,arguments)},I.stackRestore=function(){return(I.stackRestore=I.asm.stackRestore).apply(null,arguments)},I.stackAlloc=function(){return(I.stackAlloc=I.asm.stackAlloc).apply(null,arguments)},I._setThrew=function(){return(I._setThrew=I.asm.setThrew).apply(null,arguments)},I.___cxa_demangle=function(){return(I.___cxa_demangle=I.asm.__cxa_demangle).apply(null,arguments)},I.dynCall_viijii=function(){return(I.dynCall_viijii=I.asm.dynCall_viijii).apply(null,arguments)},I.dynCall_ji=function(){return(I.dynCall_ji=I.asm.dynCall_ji).apply(null,arguments)},I.dynCall_vij=function(){return(I.dynCall_vij=I.asm.dynCall_vij).apply(null,arguments)},I.dynCall_jiji=function(){return(I.dynCall_jiji=I.asm.dynCall_jiji).apply(null,arguments)},I.dynCall_iiiiij=function(){return(I.dynCall_iiiiij=I.asm.dynCall_iiiiij).apply(null,arguments)},I.dynCall_iiiiijj=function(){return(I.dynCall_iiiiijj=I.asm.dynCall_iiiiijj).apply(null,arguments)},I.dynCall_iiiiiijj=function(){return(I.dynCall_iiiiiijj=I.asm.dynCall_iiiiiijj).apply(null,arguments)},I.addRunDependency=pA,I.removeRunDependency=QI,I.FS_createPath=y.createPath,I.FS_createDataFile=y.createDataFile,I.FS_createPreloadedFile=y.createPreloadedFile,I.FS_createLazyFile=y.createLazyFile,I.FS_createDevice=y.createDevice,I.FS_unlink=y.unlink;var VQ;function uo(E){this.name="ExitStatus",this.message="Program terminated with exit("+E+")",this.status=E}KA=function E(){VQ||XE(),VQ||(KA=E)};function XE(E){if(OA>0||(m(),OA>0))return;function t(){VQ||(VQ=!0,I.calledRun=!0,!x&&(k(),AA(),g(I),I.onRuntimeInitialized&&I.onRuntimeInitialized(),lA()))}I.setStatus?(I.setStatus("Running..."),setTimeout(function(){setTimeout(function(){I.setStatus("")},1),t()},1)):t()}if(I.run=XE,I.preInit)for(typeof I.preInit=="function"&&(I.preInit=[I.preInit]);I.preInit.length>0;)I.preInit.pop()();XE(),typeof I.FS>"u"&&typeof y<"u"&&(I.FS=y),I.imread=function(E){var t=null;typeof E=="string"?t=document.getElementById(E):t=E;var a=null,c=null;if(t instanceof HTMLImageElement)a=document.createElement("canvas"),a.width=t.width,a.height=t.height,c=a.getContext("2d"),c.drawImage(t,0,0,t.width,t.height);else if(t instanceof HTMLCanvasElement)a=t,c=a.getContext("2d");else throw new Error("Please input the valid canvas or img id.");var M=c.getImageData(0,0,a.width,a.height);return A.matFromImageData(M)},I.imshow=function(E,t){var a=null;if(typeof E=="string"?a=document.getElementById(E):a=E,!(a instanceof HTMLCanvasElement))throw new Error("Please input the valid canvas element or id.");if(!(t instanceof A.Mat))throw new Error("Please input the valid cv.Mat instance.");var c=new A.Mat,M=t.type()%8,U=M<=A.CV_8S?1:M<=A.CV_32S?1/256:255,L=M===A.CV_8S||M===A.CV_16S?128:0;switch(t.convertTo(c,A.CV_8U,U,L),c.type()){case A.CV_8UC1:A.cvtColor(c,c,A.COLOR_GRAY2RGBA);break;case A.CV_8UC3:A.cvtColor(c,c,A.COLOR_RGB2RGBA);break;case A.CV_8UC4:break;default:throw new Error("Bad number of channels (Source image must have 1, 3 or 4 channels)")}var u=new ImageData(new Uint8ClampedArray(c.data),c.cols,c.rows),H=a.getContext("2d");H.clearRect(0,0,a.width,a.height),a.width=u.width,a.height=u.height,H.putImageData(u,0,0),c.delete()},I.VideoCapture=function(E){var t=null;if(typeof E=="string"?t=document.getElementById(E):t=E,!(t instanceof HTMLVideoElement))throw new Error("Please input the valid video element or id.");var a=document.createElement("canvas");a.width=t.width,a.height=t.height;var c=a.getContext("2d");this.video=t,this.read=function(M){if(!(M instanceof A.Mat))throw new Error("Please input the valid cv.Mat instance.");if(M.type()!==A.CV_8UC4)throw new Error("Bad type of input mat: the type should be cv.CV_8UC4.");if(M.cols!==t.width||M.rows!==t.height)throw new Error("Bad size of input mat: the size should be same as the video.");c.drawImage(t,0,0,t.width,t.height),M.data.set(c.getImageData(0,0,t.width,t.height).data)}};function Ha(E,t){this.start=typeof E>"u"?0:E,this.end=typeof t>"u"?0:t}I.Range=Ha;function WQ(E,t){this.x=typeof E>"u"?0:E,this.y=typeof t>"u"?0:t}I.Point=WQ;function pa(E,t){this.width=typeof E>"u"?0:E,this.height=typeof t>"u"?0:t}I.Size=pa;function ma(){switch(arguments.length){case 0:{this.x=0,this.y=0,this.width=0,this.height=0;break}case 1:{var E=arguments[0];this.x=E.x,this.y=E.y,this.width=E.width,this.height=E.height;break}case 2:{var t=arguments[0],a=arguments[1];this.x=t.x,this.y=t.y,this.width=a.width,this.height=a.height;break}case 4:{this.x=arguments[0],this.y=arguments[1],this.width=arguments[2],this.height=arguments[3];break}default:throw new Error("Invalid arguments")}}I.Rect=ma;function OQ(){switch(arguments.length){case 0:{this.center={x:0,y:0},this.size={width:0,height:0},this.angle=0;break}case 3:{this.center=arguments[0],this.size=arguments[1],this.angle=arguments[2];break}default:throw new Error("Invalid arguments")}}OQ.points=function(E){return I.rotatedRectPoints(E)},OQ.boundingRect=function(E){return I.rotatedRectBoundingRect(E)},OQ.boundingRect2f=function(E){return I.rotatedRectBoundingRect2f(E)},I.RotatedRect=OQ;function ZQ(E,t,a,c){this.push(typeof E>"u"?0:E),this.push(typeof t>"u"?0:t),this.push(typeof a>"u"?0:a),this.push(typeof c>"u"?0:c)}ZQ.prototype=new Array,ZQ.all=function(E){return new ZQ(E,E,E,E)},I.Scalar=ZQ;function qa(){switch(arguments.length){case 0:{this.minVal=0,this.maxVal=0,this.minLoc=new WQ,this.maxLoc=new WQ;break}case 4:{this.minVal=arguments[0],this.maxVal=arguments[1],this.minLoc=arguments[2],this.maxLoc=arguments[3];break}default:throw new Error("Invalid arguments")}}I.MinMaxLoc=qa;function xa(){switch(arguments.length){case 0:{this.center=new WQ,this.radius=0;break}case 2:{this.center=arguments[0],this.radius=arguments[1];break}default:throw new Error("Invalid arguments")}}I.Circle=xa;function ba(){switch(arguments.length){case 0:{this.type=0,this.maxCount=0,this.epsilon=0;break}case 3:{this.type=arguments[0],this.maxCount=arguments[1],this.epsilon=arguments[2];break}default:throw new Error("Invalid arguments")}}return I.TermCriteria=ba,I.matFromArray=function(E,t,a,c){var M=new A.Mat(E,t,a);switch(a){case A.CV_8U:case A.CV_8UC1:case A.CV_8UC2:case A.CV_8UC3:case A.CV_8UC4:{M.data.set(c);break}case A.CV_8S:case A.CV_8SC1:case A.CV_8SC2:case A.CV_8SC3:case A.CV_8SC4:{M.data8S.set(c);break}case A.CV_16U:case A.CV_16UC1:case A.CV_16UC2:case A.CV_16UC3:case A.CV_16UC4:{M.data16U.set(c);break}case A.CV_16S:case A.CV_16SC1:case A.CV_16SC2:case A.CV_16SC3:case A.CV_16SC4:{M.data16S.set(c);break}case A.CV_32S:case A.CV_32SC1:case A.CV_32SC2:case A.CV_32SC3:case A.CV_32SC4:{M.data32S.set(c);break}case A.CV_32F:case A.CV_32FC1:case A.CV_32FC2:case A.CV_32FC3:case A.CV_32FC4:{M.data32F.set(c);break}case A.CV_64F:case A.CV_64FC1:case A.CV_64FC2:case A.CV_64FC3:case A.CV_64FC4:{M.data64F.set(c);break}default:throw new Error("Type is unsupported")}return M},I.matFromImageData=function(E){var t=new A.Mat(E.height,E.width,A.CV_8UC4);return t.data.set(E.data),t},A.ready}}();Gs(oG);let Rs=!1;const Fs={},Ns=[],tG=async()=>Rs?!0:new Promise((B,A)=>{Ns.push(B)});Gs().then(B=>{Rs=!0,Object.assign(Fs,B),Ns.forEach(A=>{A()})});const Cg=Fs,yC=[[0,-3.406404,5.979507],[0,-1.126865,7.475604],[0,-2.089024,6.058267],[-.463928,.955357,6.633583],[0,-.46317,7.58658],[0,.365669,7.24287],[0,2.473255,5.788627],[-4.253081,2.577646,3.279702],[0,4.019042,5.284764],[0,4.885979,5.385258],[0,8.261778,4.481535],[0,-3.706811,5.864924],[0,-3.918301,5.56943],[0,-3.994436,5.219482],[0,-4.5424,5.404754],[0,-4.745577,5.529457],[0,-5.019567,5.601448],[0,-5.365123,5.535441],[0,-6.149624,5.071372],[0,-1.501095,7.112196],[-.416106,-1.466449,6.447657],[-7.08796,5.434801,.09962],[-2.628639,2.035898,3.848121],[-3.198363,1.985815,3.796952],[-3.775151,2.039402,3.646194],[-4.465819,2.42295,3.155168],[-2.164289,2.189867,3.851822],[-3.208229,3.223926,4.115822],[-2.673803,3.205337,4.092203],[-3.745193,3.165286,3.972409],[-4.161018,3.059069,3.719554],[-5.062006,1.934418,2.776093],[-2.266659,-7.425768,4.389812],[-4.445859,2.663991,3.173422],[-7.21453,2.263009,.07315],[-5.799793,2.349546,2.204059],[-2.844939,-.720868,4.43313],[-.711452,-3.329355,5.877044],[-.606033,-3.924562,5.444923],[-1.431615,-3.500953,5.496189],[-1.91491,-3.803146,5.02893],[-1.131043,-3.973937,5.189648],[-1.563548,-4.082763,4.842263],[-2.650112,-5.003649,4.188483],[-.427049,-1.094134,7.360529],[-.496396,-.475659,7.440358],[-5.253307,3.881582,3.363159],[-1.718698,.974609,4.558359],[-1.608635,-.942516,5.814193],[-1.651267,-.610868,5.581319],[-4.765501,-.701554,3.534632],[-.478306,.295766,7.101013],[-3.734964,4.50823,4.550454],[-4.588603,4.302037,4.048484],[-6.279331,6.615427,1.42585],[-1.220941,4.142165,5.106035],[-2.193489,3.100317,4.000575],[-3.102642,-4.352984,4.095905],[-6.719682,-4.788645,-1.745401],[-1.193824,-1.306795,5.737747],[-.729766,-1.593712,5.833208],[-2.456206,-4.342621,4.283884],[-2.204823,-4.304508,4.162499],[-4.985894,4.802461,3.751977],[-1.592294,-1.257709,5.456949],[-2.644548,4.524654,4.921559],[-2.760292,5.100971,5.01599],[-3.523964,8.005976,3.729163],[-5.599763,5.71547,2.724259],[-3.063932,6.566144,4.529981],[-5.720968,4.254584,2.830852],[-6.374393,4.78559,1.591691],[-.672728,-3.688016,5.737804],[-1.26256,-3.787691,5.417779],[-1.732553,-3.952767,5.000579],[-1.043625,-1.464973,5.662455],[-2.321234,-4.329069,4.258156],[-2.056846,-4.477671,4.520883],[-2.153084,-4.276322,4.038093],[-.946874,-1.035249,6.512274],[-1.469132,-4.036351,4.604908],[-1.02434,-3.989851,4.926693],[-.533422,-3.993222,5.138202],[-.76972,-6.095394,4.985883],[-.699606,-5.29185,5.448304],[-.669687,-4.94977,5.509612],[-.630947,-4.695101,5.449371],[-.583218,-4.517982,5.339869],[-1.53717,-4.423206,4.74547],[-1.6156,-4.475942,4.813632],[-1.729053,-4.61868,4.854463],[-1.838624,-4.828746,4.823737],[-2.36825,-3.106237,4.868096],[-7.542244,-1.049282,-2.431321],[0,-1.724003,6.60139],[-1.826614,-4.399531,4.399021],[-1.929558,-4.411831,4.497052],[-.597442,-2.013686,5.866456],[-1.405627,-1.714196,5.241087],[-.662449,-1.819321,5.863759],[-2.34234,.572222,4.294303],[-3.327324,.104863,4.11386],[-1.726175,-.919165,5.273355],[-5.133204,7.485602,2.660442],[-4.538641,6.319907,3.683424],[-3.986562,5.109487,4.466315],[-2.169681,-5.440433,4.455874],[-1.395634,5.011963,5.316032],[-1.6195,6.599217,4.921106],[-1.891399,8.236377,4.274997],[-4.195832,2.235205,3.375099],[-5.733342,1.411738,2.431726],[-1.859887,2.355757,3.843181],[-4.988612,3.074654,3.083858],[-1.303263,1.416453,4.831091],[-1.305757,-.672779,6.415959],[-6.46517,.937119,1.689873],[-5.258659,.945811,2.974312],[-4.432338,.722096,3.522615],[-3.300681,.861641,3.872784],[-2.430178,1.131492,4.039035],[-1.820731,1.467954,4.224124],[-.563221,2.307693,5.566789],[-6.338145,-.529279,1.881175],[-5.587698,3.208071,2.687839],[-.242624,-1.462857,7.071491],[-1.611251,.339326,4.895421],[-7.743095,2.364999,-2.005167],[-1.391142,1.851048,4.448999],[-1.785794,-.978284,4.85047],[-4.670959,2.664461,3.084075],[-1.33397,-.283761,6.097047],[-7.270895,-2.890917,-2.252455],[-1.856432,2.585245,3.757904],[-.923388,.073076,6.671944],[-5.000589,-6.135128,1.892523],[-5.085276,-7.17859,.714711],[-7.159291,-.81182,-.072044],[-5.843051,-5.248023,.924091],[-6.847258,3.662916,.724695],[-2.412942,-8.258853,4.119213],[-.179909,-1.689864,6.573301],[-2.103655,-.163946,4.566119],[-6.407571,2.236021,1.560843],[-3.670075,2.360153,3.63523],[-3.177186,2.294265,3.775704],[-2.196121,-4.598322,4.479786],[-6.234883,-1.94443,1.663542],[-1.292924,-9.29592,4.094063],[-3.210651,-8.533278,2.802001],[-4.068926,-7.993109,1.925119],[0,6.54539,5.027311],[0,-9.403378,4.264492],[-2.724032,2.315802,3.777151],[-2.28846,2.398891,3.697603],[-1.998311,2.496547,3.689148],[-6.13004,3.399261,2.038516],[-2.28846,2.886504,3.775031],[-2.724032,2.96181,3.871767],[-3.177186,2.964136,3.876973],[-3.670075,2.927714,3.724325],[-4.018389,2.857357,3.482983],[-7.555811,4.106811,-.991917],[-4.018389,2.483695,3.440898],[0,-2.521945,5.932265],[-1.776217,-2.683946,5.213116],[-1.222237,-1.182444,5.952465],[-.731493,-2.536683,5.815343],[0,3.271027,5.236015],[-4.135272,-6.996638,2.67197],[-3.311811,-7.660815,3.382963],[-1.313701,-8.639995,4.702456],[-5.940524,-6.223629,-.631468],[-1.998311,2.743838,3.74403],[-.901447,1.236992,5.754256],[0,-8.765243,4.891441],[-2.308977,-8.974196,3.60907],[-6.954154,-2.439843,-.131163],[-1.098819,-4.458788,5.120727],[-1.181124,-4.579996,5.189564],[-1.255818,-4.787901,5.237051],[-1.325085,-5.106507,5.20501],[-1.546388,-5.819392,4.757893],[-1.953754,-4.183892,4.431713],[-2.117802,-4.137093,4.555096],[-2.285339,-4.051196,4.582438],[-2.85016,-3.66572,4.484994],[-5.278538,-2.238942,2.861224],[-.946709,1.907628,5.196779],[-1.314173,3.104912,4.231404],[-1.78,2.86,3.881555],[-1.84511,-4.09888,4.247264],[-5.436187,-4.030482,2.109852],[-.766444,3.182131,4.861453],[-1.938616,-6.61441,4.521085],[0,1.059413,6.774605],[-.516573,1.583572,6.148363],[0,1.728369,6.31675],[-1.246815,.230297,5.681036],[0,-7.942194,5.181173],[0,-6.991499,5.153478],[-.997827,-6.930921,4.979576],[-3.288807,-5.382514,3.795752],[-2.311631,-1.566237,4.590085],[-2.68025,-6.111567,4.096152],[-3.832928,-1.537326,4.137731],[-2.96186,-2.274215,4.440943],[-4.386901,-2.683286,3.643886],[-1.217295,-7.834465,4.969286],[-1.542374,-.136843,5.201008],[-3.878377,-6.041764,3.311079],[-3.084037,-6.809842,3.814195],[-3.747321,-4.503545,3.726453],[-6.094129,-3.205991,1.473482],[-4.588995,-4.728726,2.983221],[-6.583231,-3.941269,.070268],[-3.49258,-3.19582,4.130198],[-1.255543,.802341,5.307551],[-1.126122,-.933602,6.538785],[-1.443109,-1.142774,5.905127],[-.923043,-.529042,7.003423],[-1.755386,3.529117,4.327696],[-2.632589,3.713828,4.364629],[-3.388062,3.721976,4.309028],[-4.075766,3.675413,4.076063],[-4.62291,3.474691,3.646321],[-5.171755,2.535753,2.670867],[-7.297331,.763172,-.048769],[-4.706828,1.651,3.109532],[-4.071712,1.476821,3.476944],[-3.269817,1.470659,3.731945],[-2.527572,1.617311,3.865444],[-1.970894,1.858505,3.961782],[-1.579543,2.097941,4.084996],[-7.664182,.673132,-2.435867],[-1.397041,-1.340139,5.630378],[-.884838,.65874,6.233232],[-.767097,-.968035,7.077932],[-.460213,-1.334106,6.787447],[-.748618,-1.067994,6.798303],[-1.236408,-1.585568,5.48049],[-.387306,-1.40999,6.957705],[-.319925,-1.607931,6.508676],[-1.639633,2.556298,3.863736],[-1.255645,2.467144,4.2038],[-1.031362,2.382663,4.615849],[-4.253081,2.772296,3.315305],[-4.53,2.91,3.339685],[.463928,.955357,6.633583],[4.253081,2.577646,3.279702],[.416106,-1.466449,6.447657],[7.08796,5.434801,.09962],[2.628639,2.035898,3.848121],[3.198363,1.985815,3.796952],[3.775151,2.039402,3.646194],[4.465819,2.42295,3.155168],[2.164289,2.189867,3.851822],[3.208229,3.223926,4.115822],[2.673803,3.205337,4.092203],[3.745193,3.165286,3.972409],[4.161018,3.059069,3.719554],[5.062006,1.934418,2.776093],[2.266659,-7.425768,4.389812],[4.445859,2.663991,3.173422],[7.21453,2.263009,.07315],[5.799793,2.349546,2.204059],[2.844939,-.720868,4.43313],[.711452,-3.329355,5.877044],[.606033,-3.924562,5.444923],[1.431615,-3.500953,5.496189],[1.91491,-3.803146,5.02893],[1.131043,-3.973937,5.189648],[1.563548,-4.082763,4.842263],[2.650112,-5.003649,4.188483],[.427049,-1.094134,7.360529],[.496396,-.475659,7.440358],[5.253307,3.881582,3.363159],[1.718698,.974609,4.558359],[1.608635,-.942516,5.814193],[1.651267,-.610868,5.581319],[4.765501,-.701554,3.534632],[.478306,.295766,7.101013],[3.734964,4.50823,4.550454],[4.588603,4.302037,4.048484],[6.279331,6.615427,1.42585],[1.220941,4.142165,5.106035],[2.193489,3.100317,4.000575],[3.102642,-4.352984,4.095905],[6.719682,-4.788645,-1.745401],[1.193824,-1.306795,5.737747],[.729766,-1.593712,5.833208],[2.456206,-4.342621,4.283884],[2.204823,-4.304508,4.162499],[4.985894,4.802461,3.751977],[1.592294,-1.257709,5.456949],[2.644548,4.524654,4.921559],[2.760292,5.100971,5.01599],[3.523964,8.005976,3.729163],[5.599763,5.71547,2.724259],[3.063932,6.566144,4.529981],[5.720968,4.254584,2.830852],[6.374393,4.78559,1.591691],[.672728,-3.688016,5.737804],[1.26256,-3.787691,5.417779],[1.732553,-3.952767,5.000579],[1.043625,-1.464973,5.662455],[2.321234,-4.329069,4.258156],[2.056846,-4.477671,4.520883],[2.153084,-4.276322,4.038093],[.946874,-1.035249,6.512274],[1.469132,-4.036351,4.604908],[1.02434,-3.989851,4.926693],[.533422,-3.993222,5.138202],[.76972,-6.095394,4.985883],[.699606,-5.29185,5.448304],[.669687,-4.94977,5.509612],[.630947,-4.695101,5.449371],[.583218,-4.517982,5.339869],[1.53717,-4.423206,4.74547],[1.6156,-4.475942,4.813632],[1.729053,-4.61868,4.854463],[1.838624,-4.828746,4.823737],[2.36825,-3.106237,4.868096],[7.542244,-1.049282,-2.431321],[1.826614,-4.399531,4.399021],[1.929558,-4.411831,4.497052],[.597442,-2.013686,5.866456],[1.405627,-1.714196,5.241087],[.662449,-1.819321,5.863759],[2.34234,.572222,4.294303],[3.327324,.104863,4.11386],[1.726175,-.919165,5.273355],[5.133204,7.485602,2.660442],[4.538641,6.319907,3.683424],[3.986562,5.109487,4.466315],[2.169681,-5.440433,4.455874],[1.395634,5.011963,5.316032],[1.6195,6.599217,4.921106],[1.891399,8.236377,4.274997],[4.195832,2.235205,3.375099],[5.733342,1.411738,2.431726],[1.859887,2.355757,3.843181],[4.988612,3.074654,3.083858],[1.303263,1.416453,4.831091],[1.305757,-.672779,6.415959],[6.46517,.937119,1.689873],[5.258659,.945811,2.974312],[4.432338,.722096,3.522615],[3.300681,.861641,3.872784],[2.430178,1.131492,4.039035],[1.820731,1.467954,4.224124],[.563221,2.307693,5.566789],[6.338145,-.529279,1.881175],[5.587698,3.208071,2.687839],[.242624,-1.462857,7.071491],[1.611251,.339326,4.895421],[7.743095,2.364999,-2.005167],[1.391142,1.851048,4.448999],[1.785794,-.978284,4.85047],[4.670959,2.664461,3.084075],[1.33397,-.283761,6.097047],[7.270895,-2.890917,-2.252455],[1.856432,2.585245,3.757904],[.923388,.073076,6.671944],[5.000589,-6.135128,1.892523],[5.085276,-7.17859,.714711],[7.159291,-.81182,-.072044],[5.843051,-5.248023,.924091],[6.847258,3.662916,.724695],[2.412942,-8.258853,4.119213],[.179909,-1.689864,6.573301],[2.103655,-.163946,4.566119],[6.407571,2.236021,1.560843],[3.670075,2.360153,3.63523],[3.177186,2.294265,3.775704],[2.196121,-4.598322,4.479786],[6.234883,-1.94443,1.663542],[1.292924,-9.29592,4.094063],[3.210651,-8.533278,2.802001],[4.068926,-7.993109,1.925119],[2.724032,2.315802,3.777151],[2.28846,2.398891,3.697603],[1.998311,2.496547,3.689148],[6.13004,3.399261,2.038516],[2.28846,2.886504,3.775031],[2.724032,2.96181,3.871767],[3.177186,2.964136,3.876973],[3.670075,2.927714,3.724325],[4.018389,2.857357,3.482983],[7.555811,4.106811,-.991917],[4.018389,2.483695,3.440898],[1.776217,-2.683946,5.213116],[1.222237,-1.182444,5.952465],[.731493,-2.536683,5.815343],[4.135272,-6.996638,2.67197],[3.311811,-7.660815,3.382963],[1.313701,-8.639995,4.702456],[5.940524,-6.223629,-.631468],[1.998311,2.743838,3.74403],[.901447,1.236992,5.754256],[2.308977,-8.974196,3.60907],[6.954154,-2.439843,-.131163],[1.098819,-4.458788,5.120727],[1.181124,-4.579996,5.189564],[1.255818,-4.787901,5.237051],[1.325085,-5.106507,5.20501],[1.546388,-5.819392,4.757893],[1.953754,-4.183892,4.431713],[2.117802,-4.137093,4.555096],[2.285339,-4.051196,4.582438],[2.85016,-3.66572,4.484994],[5.278538,-2.238942,2.861224],[.946709,1.907628,5.196779],[1.314173,3.104912,4.231404],[1.78,2.86,3.881555],[1.84511,-4.09888,4.247264],[5.436187,-4.030482,2.109852],[.766444,3.182131,4.861453],[1.938616,-6.61441,4.521085],[.516573,1.583572,6.148363],[1.246815,.230297,5.681036],[.997827,-6.930921,4.979576],[3.288807,-5.382514,3.795752],[2.311631,-1.566237,4.590085],[2.68025,-6.111567,4.096152],[3.832928,-1.537326,4.137731],[2.96186,-2.274215,4.440943],[4.386901,-2.683286,3.643886],[1.217295,-7.834465,4.969286],[1.542374,-.136843,5.201008],[3.878377,-6.041764,3.311079],[3.084037,-6.809842,3.814195],[3.747321,-4.503545,3.726453],[6.094129,-3.205991,1.473482],[4.588995,-4.728726,2.983221],[6.583231,-3.941269,.070268],[3.49258,-3.19582,4.130198],[1.255543,.802341,5.307551],[1.126122,-.933602,6.538785],[1.443109,-1.142774,5.905127],[.923043,-.529042,7.003423],[1.755386,3.529117,4.327696],[2.632589,3.713828,4.364629],[3.388062,3.721976,4.309028],[4.075766,3.675413,4.076063],[4.62291,3.474691,3.646321],[5.171755,2.535753,2.670867],[7.297331,.763172,-.048769],[4.706828,1.651,3.109532],[4.071712,1.476821,3.476944],[3.269817,1.470659,3.731945],[2.527572,1.617311,3.865444],[1.970894,1.858505,3.961782],[1.579543,2.097941,4.084996],[7.664182,.673132,-2.435867],[1.397041,-1.340139,5.630378],[.884838,.65874,6.233232],[.767097,-.968035,7.077932],[.460213,-1.334106,6.787447],[.748618,-1.067994,6.798303],[1.236408,-1.585568,5.48049],[.387306,-1.40999,6.957705],[.319925,-1.607931,6.508676],[1.639633,2.556298,3.863736],[1.255645,2.467144,4.2038],[1.031362,2.382663,4.615849],[4.253081,2.772296,3.315305],[4.53,2.91,3.339685]],Xi=[[.499977,.347466],[.500026,.452513],[.499974,.397628],[.482113,.528021],[.500151,.472844],[.49991,.501747],[.499523,.598938],[.289712,.619236],[.499955,.687602],[.499987,.730081],[.500023,.89295],[.500023,.333766],[.500016,.320776],[.500023,.307652],[.499977,.304722],[.499977,.294066],[.499977,.280615],[.499977,.262981],[.499968,.218629],[.499816,.437019],[.473773,.42609],[.104907,.745859],[.36593,.590424],[.338758,.586975],[.31112,.59054],[.274658,.610869],[.393362,.596294],[.345234,.655989],[.370094,.653924],[.319322,.652735],[.297903,.646409],[.247792,.58919],[.396889,.157245],[.280098,.6244],[.10631,.600044],[.209925,.608647],[.355808,.465594],[.471751,.349596],[.474155,.319808],[.439785,.342771],[.414617,.333459],[.450374,.319139],[.428771,.317309],[.374971,.272195],[.486717,.452371],[.485301,.472605],[.257765,.68551],[.401223,.544828],[.429819,.451385],[.421352,.466259],[.276896,.467943],[.48337,.500413],[.337212,.717117],[.296392,.706757],[.169295,.806186],[.44758,.69739],[.39239,.646112],[.35449,.303216],[.067305,.269895],[.442739,.427174],[.457098,.415208],[.381974,.305289],[.392389,.305797],[.277076,.728068],[.422552,.436767],[.385919,.718636],[.383103,.74416],[.331431,.880286],[.229924,.767997],[.364501,.810886],[.229622,.700459],[.173287,.721252],[.472879,.333802],[.446828,.331473],[.422762,.32611],[.445308,.419934],[.388103,.306039],[.403039,.29346],[.403629,.306047],[.460042,.442861],[.431158,.307634],[.452182,.307634],[.475387,.307634],[.465828,.22081],[.472329,.263774],[.473087,.282143],[.473122,.295374],[.473033,.304722],[.427942,.304722],[.426479,.29646],[.423162,.288154],[.418309,.279937],[.390095,.360427],[.013954,.439966],[.499914,.419853],[.4132,.3046],[.409626,.298177],[.46808,.398465],[.422729,.414015],[.46308,.406216],[.37212,.526586],[.334562,.503927],[.411671,.453035],[.242176,.852324],[.290777,.798554],[.327338,.743473],[.39951,.251079],[.441728,.738324],[.429765,.812166],[.412198,.891099],[.288955,.601048],[.218937,.564589],[.412782,.60103],[.257135,.64456],[.427685,.562039],[.44834,.463064],[.17856,.542446],[.247308,.542806],[.286267,.532325],[.332828,.539288],[.368756,.552793],[.398964,.567345],[.47641,.594194],[.189241,.476076],[.228962,.651049],[.490726,.437599],[.40467,.514867],[.019469,.598436],[.426243,.579569],[.396993,.451203],[.26647,.623023],[.439121,.481042],[.032314,.355643],[.419054,.612845],[.462783,.494253],[.238979,.220255],[.198221,.168062],[.10755,.459245],[.18361,.259743],[.13441,.666317],[.385764,.116846],[.490967,.420622],[.382385,.491427],[.174399,.602329],[.318785,.603765],[.343364,.599403],[.3961,.289783],[.187885,.411462],[.430987,.055935],[.318993,.101715],[.266248,.130299],[.500023,.809424],[.499977,.045547],[.36617,.601178],[.393207,.604463],[.410373,.60892],[.194993,.657898],[.388665,.637716],[.365962,.644029],[.343364,.644643],[.318785,.64166],[.301415,.636844],[.058133,.680924],[.301415,.612551],[.499988,.381566],[.415838,.375804],[.445682,.433923],[.465844,.379359],[.499923,.648476],[.288719,.180054],[.335279,.14718],[.440512,.097581],[.128294,.208059],[.408772,.626106],[.455607,.548199],[.499877,.09101],[.375437,.075808],[.11421,.384978],[.448662,.304722],[.44802,.295368],[.447112,.284192],[.444832,.269206],[.430012,.233191],[.406787,.314327],[.400738,.318931],[.3924,.322297],[.367856,.336081],[.247923,.398667],[.45277,.57915],[.436392,.640113],[.416164,.631286],[.413386,.307634],[.228018,.316428],[.468268,.647329],[.411362,.195673],[.499989,.530175],[.479154,.557346],[.499974,.560363],[.432112,.506411],[.499886,.133083],[.499913,.178271],[.456549,.180799],[.344549,.254561],[.378909,.42599],[.374293,.219815],[.319688,.429262],[.357155,.39573],[.295284,.378419],[.44775,.137523],[.410986,.491277],[.313951,.224692],[.354128,.187447],[.324548,.296007],[.189096,.3537],[.279777,.285342],[.133823,.317299],[.336768,.355267],[.429884,.533478],[.455528,.451377],[.437114,.441104],[.467288,.470075],[.414712,.66478],[.377046,.677222],[.344108,.679849],[.312876,.677668],[.283526,.66681],[.241246,.617214],[.102986,.531237],[.267612,.57544],[.297879,.566824],[.333434,.566122],[.366427,.573884],[.396012,.583304],[.420121,.589772],[.007561,.519223],[.432949,.430482],[.458639,.520911],[.473466,.454256],[.476088,.43617],[.468472,.444943],[.433991,.417638],[.483518,.437016],[.482483,.422151],[.42645,.610201],[.438999,.603505],[.450067,.599566],[.289712,.631747],[.27667,.636627],[.517862,.528052],[.710288,.619236],[.526227,.42609],[.895093,.745859],[.63407,.590424],[.661242,.586975],[.68888,.59054],[.725342,.610869],[.60663,.596295],[.654766,.655989],[.629906,.653924],[.680678,.652735],[.702097,.646409],[.752212,.589195],[.602918,.157137],[.719902,.6244],[.893693,.60004],[.790082,.608646],[.643998,.465512],[.528249,.349596],[.52585,.319809],[.560215,.342771],[.585384,.333459],[.549626,.319139],[.571228,.317308],[.624852,.271901],[.51305,.452718],[.515097,.472748],[.742247,.685493],[.598631,.545021],[.570338,.451425],[.578632,.466377],[.723087,.467946],[.516446,.500361],[.662801,.717082],[.703624,.706729],[.830705,.806186],[.552386,.697432],[.60761,.646112],[.645429,.303293],[.932695,.269895],[.557261,.427174],[.542902,.415208],[.618026,.305289],[.607591,.305797],[.722943,.728037],[.577414,.436833],[.614083,.718613],[.616907,.744114],[.668509,.880086],[.770092,.767979],[.635536,.810751],[.770391,.700444],[.826722,.721245],[.527121,.333802],[.553172,.331473],[.577238,.32611],[.554692,.419934],[.611897,.306039],[.596961,.29346],[.596371,.306047],[.539958,.442861],[.568842,.307634],[.547818,.307634],[.524613,.307634],[.53409,.220859],[.527671,.263774],[.526913,.282143],[.526878,.295374],[.526967,.304722],[.572058,.304722],[.573521,.29646],[.576838,.288154],[.581691,.279937],[.609945,.36009],[.986046,.439966],[.5868,.3046],[.590372,.298177],[.531915,.398463],[.577268,.414065],[.536915,.406214],[.627543,.526648],[.665586,.504049],[.588354,.453138],[.757824,.852324],[.70925,.798492],[.672684,.743419],[.600409,.250995],[.558266,.738328],[.570304,.812129],[.588166,.890956],[.711045,.601048],[.78107,.564595],[.587247,.601068],[.74287,.644554],[.572156,.562348],[.551868,.46343],[.821442,.542444],[.752702,.542818],[.713757,.532373],[.667113,.539327],[.631101,.552846],[.600862,.567527],[.523481,.594373],[.810748,.476074],[.771046,.651041],[.509127,.437282],[.595293,.514976],[.980531,.598436],[.5735,.58],[.602995,.451312],[.73353,.623023],[.560611,.480983],[.967686,.355643],[.580985,.61284],[.537728,.494615],[.760966,.220247],[.801779,.168062],[.892441,.459239],[.816351,.25974],[.865595,.666313],[.614074,.116754],[.508953,.420562],[.617942,.491684],[.825608,.602325],[.681215,.603765],[.656636,.599403],[.6039,.289783],[.812086,.411461],[.568013,.055435],[.681008,.101715],[.733752,.130299],[.63383,.601178],[.606793,.604463],[.58966,.608938],[.805016,.657892],[.611335,.637716],[.634038,.644029],[.656636,.644643],[.681215,.64166],[.698585,.636844],[.941867,.680924],[.698585,.612551],[.584177,.375893],[.554318,.433923],[.534154,.37936],[.711218,.180025],[.66463,.147129],[.5591,.097368],[.871706,.208059],[.591234,.626106],[.544341,.548416],[.624563,.075808],[.88577,.384971],[.551338,.304722],[.55198,.295368],[.552888,.284192],[.555168,.269206],[.569944,.232965],[.593203,.314324],[.599262,.318931],[.6076,.322297],[.631938,.3365],[.752033,.398685],[.547226,.579605],[.563544,.640172],[.583841,.631286],[.586614,.307634],[.771915,.316422],[.531597,.647517],[.588371,.195559],[.520797,.557435],[.567985,.506521],[.543283,.180745],[.655317,.254485],[.621009,.425982],[.62556,.219688],[.680198,.429281],[.642764,.395662],[.704663,.37847],[.552012,.137408],[.589072,.491363],[.685945,.224643],[.645735,.18736],[.675343,.296022],[.810858,.353695],[.720122,.285333],[.866152,.317295],[.663187,.355403],[.570082,.533674],[.544562,.451624],[.562759,.441215],[.531987,.46986],[.585271,.664823],[.622953,.677221],[.655896,.679837],[.687132,.677654],[.716482,.666799],[.758757,.617213],[.897013,.531231],[.732392,.575453],[.702114,.566837],[.666525,.566134],[.633505,.573912],[.603876,.583413],[.579658,.590055],[.99244,.519223],[.567192,.43058],[.541366,.521101],[.526564,.453882],[.523913,.43617],[.531529,.444943],[.566036,.417671],[.516311,.436946],[.517472,.422123],[.573595,.610193],[.560698,.604668],[.549756,.600249],[.710288,.631747],[.72333,.636627]],eG=[173,155,133,246,33,7,382,398,362,263,466,249,308,415,324,78,95,191,356,389,264,127,34,162,368,264,389,139,162,34,267,0,302,37,72,0,11,302,0,11,0,72,349,451,350,120,121,231,452,350,451,232,231,121,267,302,269,37,39,72,303,269,302,73,72,39,357,343,350,128,121,114,277,350,343,47,114,121,350,452,357,121,128,232,453,357,452,233,232,128,299,333,297,69,67,104,332,297,333,103,104,67,175,152,396,175,171,152,377,396,152,148,152,171,381,384,382,154,155,157,398,382,384,173,157,155,280,347,330,50,101,118,348,330,347,119,118,101,269,303,270,39,40,73,304,270,303,74,73,40,9,336,151,9,151,107,337,151,336,108,107,151,344,278,360,115,131,48,279,360,278,49,48,131,262,431,418,32,194,211,424,418,431,204,211,194,304,408,270,74,40,184,409,270,408,185,184,40,272,310,407,42,183,80,415,407,310,191,80,183,322,270,410,92,186,40,409,410,270,185,40,186,347,449,348,118,119,229,450,348,449,230,229,119,434,432,430,214,210,212,422,430,432,202,212,210,313,314,18,83,18,84,17,18,314,17,84,18,307,375,306,77,76,146,291,306,375,61,146,76,259,387,260,29,30,160,388,260,387,161,160,30,286,414,384,56,157,190,398,384,414,173,190,157,418,424,406,194,182,204,335,406,424,106,204,182,367,416,364,138,135,192,434,364,416,214,192,135,391,423,327,165,98,203,358,327,423,129,203,98,298,301,284,68,54,71,251,284,301,21,71,54,4,275,5,4,5,45,281,5,275,51,45,5,254,373,253,24,23,144,374,253,373,145,144,23,320,321,307,90,77,91,375,307,321,146,91,77,280,425,411,50,187,205,427,411,425,207,205,187,421,313,200,201,200,83,18,200,313,18,83,200,335,321,406,106,182,91,405,406,321,181,91,182,405,321,404,181,180,91,320,404,321,90,91,180,17,314,16,17,16,84,315,16,314,85,84,16,425,266,426,205,206,36,423,426,266,203,36,206,369,396,400,140,176,171,377,400,396,148,171,176,391,269,322,165,92,39,270,322,269,40,39,92,417,465,413,193,189,245,464,413,465,244,245,189,257,258,386,27,159,28,385,386,258,158,28,159,260,388,467,30,247,161,466,467,388,246,161,247,248,456,419,3,196,236,399,419,456,174,236,196,333,298,332,104,103,68,284,332,298,54,68,103,285,8,417,55,193,8,168,417,8,168,8,193,340,261,346,111,117,31,448,346,261,228,31,117,285,417,441,55,221,193,413,441,417,189,193,221,327,460,326,98,97,240,328,326,460,99,240,97,277,355,329,47,100,126,371,329,355,142,126,100,309,392,438,79,218,166,439,438,392,219,166,218,381,382,256,154,26,155,341,256,382,112,155,26,360,279,420,131,198,49,429,420,279,209,49,198,365,364,379,136,150,135,394,379,364,169,135,150,355,277,437,126,217,47,343,437,277,114,47,217,443,444,282,223,52,224,283,282,444,53,224,52,281,275,363,51,134,45,440,363,275,220,45,134,431,262,395,211,170,32,369,395,262,140,32,170,337,299,338,108,109,69,297,338,299,67,69,109,335,273,321,106,91,43,375,321,273,146,43,91,348,450,349,119,120,230,451,349,450,231,230,120,467,359,342,247,113,130,446,342,359,226,130,113,282,283,334,52,105,53,293,334,283,63,53,105,250,458,462,20,242,238,461,462,458,241,238,242,276,353,300,46,70,124,383,300,353,156,124,70,325,292,324,96,95,62,308,324,292,78,62,95,283,276,293,53,63,46,300,293,276,70,46,63,447,264,345,227,116,34,372,345,264,143,34,116,352,345,346,123,117,116,340,346,345,111,116,117,1,19,274,1,44,19,354,274,19,125,19,44,248,281,456,3,236,51,363,456,281,134,51,236,425,426,427,205,207,206,436,427,426,216,206,207,380,381,252,153,22,154,256,252,381,26,154,22,391,393,269,165,39,167,267,269,393,37,167,39,199,428,200,199,200,208,421,200,428,201,208,200,330,329,266,101,36,100,371,266,329,142,100,36,422,432,273,202,43,212,287,273,432,57,212,43,290,250,328,60,99,20,462,328,250,242,20,99,258,286,385,28,158,56,384,385,286,157,56,158,342,446,353,113,124,226,265,353,446,35,226,124,257,386,259,27,29,159,387,259,386,160,159,29,430,422,431,210,211,202,424,431,422,204,202,211,445,342,276,225,46,113,353,276,342,124,113,46,424,422,335,204,106,202,273,335,422,43,202,106,306,292,307,76,77,62,325,307,292,96,62,77,366,447,352,137,123,227,345,352,447,116,227,123,302,268,303,72,73,38,271,303,268,41,38,73,371,358,266,142,36,129,423,266,358,203,129,36,327,294,460,98,240,64,455,460,294,235,64,240,294,331,278,64,48,102,279,278,331,49,102,48,303,271,304,73,74,41,272,304,271,42,41,74,427,436,434,207,214,216,432,434,436,212,216,214,304,272,408,74,184,42,407,408,272,183,42,184,394,430,395,169,170,210,431,395,430,211,210,170,395,369,378,170,149,140,400,378,369,176,140,149,296,334,299,66,69,105,333,299,334,104,105,69,417,168,351,193,122,168,6,351,168,6,168,122,280,411,352,50,123,187,376,352,411,147,187,123,319,320,325,89,96,90,307,325,320,77,90,96,285,295,336,55,107,65,296,336,295,66,65,107,404,320,403,180,179,90,319,403,320,89,90,179,330,348,329,101,100,119,349,329,348,120,119,100,334,293,333,105,104,63,298,333,293,68,63,104,323,454,366,93,137,234,447,366,454,227,234,137,16,315,15,16,15,85,316,15,315,86,85,15,429,279,358,209,129,49,331,358,279,102,49,129,15,316,14,15,14,86,317,14,316,87,86,14,8,285,9,8,9,55,336,9,285,107,55,9,329,349,277,100,47,120,350,277,349,121,120,47,252,253,380,22,153,23,374,380,253,145,23,153,402,403,318,178,88,179,319,318,403,89,179,88,351,6,419,122,196,6,197,419,6,197,6,196,324,318,325,95,96,88,319,325,318,89,88,96,397,367,365,172,136,138,364,365,367,135,138,136,288,435,397,58,172,215,367,397,435,138,215,172,438,439,344,218,115,219,278,344,439,48,219,115,271,311,272,41,42,81,310,272,311,80,81,42,5,281,195,5,195,51,248,195,281,3,51,195,273,287,375,43,146,57,291,375,287,61,57,146,396,428,175,171,175,208,199,175,428,199,208,175,268,312,271,38,41,82,311,271,312,81,82,41,444,445,283,224,53,225,276,283,445,46,225,53,254,339,373,24,144,110,390,373,339,163,110,144,295,282,296,65,66,52,334,296,282,105,52,66,346,448,347,117,118,228,449,347,448,229,228,118,454,356,447,234,227,127,264,447,356,34,127,227,336,296,337,107,108,66,299,337,296,69,66,108,151,337,10,151,10,108,338,10,337,109,108,10,278,439,294,48,64,219,455,294,439,235,219,64,407,415,292,183,62,191,308,292,415,78,191,62,358,371,429,129,209,142,355,429,371,126,142,209,345,372,340,116,111,143,265,340,372,35,143,111,388,390,466,161,246,163,249,466,390,7,163,246,352,346,280,123,50,117,347,280,346,118,117,50,295,442,282,65,52,222,443,282,442,223,222,52,19,94,354,19,125,94,370,354,94,141,94,125,295,285,442,65,222,55,441,442,285,221,55,222,419,197,248,196,3,197,195,248,197,195,197,3,359,263,255,130,25,33,249,255,263,7,33,25,275,274,440,45,220,44,457,440,274,237,44,220,300,383,301,70,71,156,368,301,383,139,156,71,417,351,465,193,245,122,412,465,351,188,122,245,466,263,467,246,247,33,359,467,263,130,33,247,389,251,368,162,139,21,301,368,251,71,21,139,374,386,380,145,153,159,385,380,386,158,159,153,379,394,378,150,149,169,395,378,394,170,169,149,351,419,412,122,188,196,399,412,419,174,196,188,426,322,436,206,216,92,410,436,322,186,92,216,387,373,388,160,161,144,390,388,373,163,144,161,393,326,164,167,164,97,2,164,326,2,97,164,354,370,461,125,241,141,462,461,370,242,141,241,0,267,164,0,164,37,393,164,267,167,37,164,11,12,302,11,72,12,268,302,12,38,12,72,386,374,387,159,160,145,373,387,374,144,145,160,12,13,268,12,38,13,312,268,13,82,13,38,293,300,298,63,68,70,301,298,300,71,70,68,340,265,261,111,31,35,446,261,265,226,35,31,380,385,381,153,154,158,384,381,385,157,158,154,280,330,425,50,205,101,266,425,330,36,101,205,423,391,426,203,206,165,322,426,391,92,165,206,429,355,420,209,198,126,437,420,355,217,126,198,391,327,393,165,167,98,326,393,327,97,98,167,457,438,440,237,220,218,344,440,438,115,218,220,382,362,341,155,112,133,463,341,362,243,133,112,457,461,459,237,239,241,458,459,461,238,241,239,434,430,364,214,135,210,394,364,430,169,210,135,414,463,398,190,173,243,362,398,463,133,243,173,262,428,369,32,140,208,396,369,428,171,208,140,457,274,461,237,241,44,354,461,274,125,44,241,316,403,317,86,87,179,402,317,403,178,179,87,315,404,316,85,86,180,403,316,404,179,180,86,314,405,315,84,85,181,404,315,405,180,181,85,313,406,314,83,84,182,405,314,406,181,182,84,418,406,421,194,201,182,313,421,406,83,182,201,366,401,323,137,93,177,361,323,401,132,177,93,408,407,306,184,76,183,292,306,407,62,183,76,408,306,409,184,185,76,291,409,306,61,76,185,410,409,287,186,57,185,291,287,409,61,185,57,436,410,432,216,212,186,287,432,410,57,186,212,434,416,427,214,207,192,411,427,416,187,192,207,264,368,372,34,143,139,383,372,368,156,139,143,457,459,438,237,218,239,309,438,459,79,239,218,352,376,366,123,137,147,401,366,376,177,147,137,4,1,275,4,45,1,274,275,1,44,1,45,428,262,421,208,201,32,418,421,262,194,32,201,327,358,294,98,64,129,331,294,358,102,129,64,367,435,416,138,192,215,433,416,435,213,215,192,455,439,289,235,59,219,392,289,439,166,219,59,328,462,326,99,97,242,370,326,462,141,242,97,326,370,2,97,2,141,94,2,370,94,141,2,460,455,305,240,75,235,289,305,455,59,235,75,448,339,449,228,229,110,254,449,339,24,110,229,261,446,255,31,25,226,359,255,446,130,226,25,449,254,450,229,230,24,253,450,254,23,24,230,450,253,451,230,231,23,252,451,253,22,23,231,451,252,452,231,232,22,256,452,252,26,22,232,256,341,452,26,232,112,453,452,341,233,112,232,413,464,414,189,190,244,463,414,464,243,244,190,441,413,286,221,56,189,414,286,413,190,189,56,441,286,442,221,222,56,258,442,286,28,56,222,442,258,443,222,223,28,257,443,258,27,28,223,444,443,259,224,29,223,257,259,443,27,223,29,259,260,444,29,224,30,445,444,260,225,30,224,260,467,445,30,225,247,342,445,467,113,247,225,250,309,458,20,238,79,459,458,309,239,79,238,290,305,392,60,166,75,289,392,305,59,75,166,460,305,328,240,99,75,290,328,305,60,75,99,376,433,401,147,177,213,435,401,433,215,213,177,250,290,309,20,79,60,392,309,290,166,60,79,411,416,376,187,147,192,433,376,416,213,192,147,341,463,453,112,233,243,464,453,463,244,243,233,453,464,357,233,128,244,465,357,464,245,244,128,412,343,465,188,245,114,357,465,343,128,114,245,437,343,399,217,174,114,412,399,343,188,114,174,363,440,360,134,131,220,344,360,440,115,220,131,456,420,399,236,174,198,437,399,420,217,198,174,456,363,420,236,198,134,360,420,363,131,134,198,361,401,288,132,58,177,435,288,401,215,177,58,353,265,383,124,156,35,372,383,265,143,35,156,255,249,339,25,110,7,390,339,249,163,7,110,261,255,448,31,228,25,339,448,255,110,25,228,14,317,13,14,13,87,312,13,317,82,87,13,317,402,312,87,82,178,311,312,402,81,178,82,402,318,311,178,81,88,310,311,318,80,88,81,318,324,310,88,80,95,415,310,324,191,95,80],ys=[[4,.070909939706326],[6,.032100144773722],[10,.008446550928056],[33,.058724168688059],[54,.007667080033571],[67,.009078059345484],[117,.009791937656701],[119,.014565368182957],[121,.018591361120343],[127,.005197994410992],[129,.120625205338001],[132,.005560018587857],[133,.05328618362546],[136,.066890455782413],[143,.014816547743976],[147,.014262833632529],[198,.025462191551924],[205,.047252278774977],[263,.058724168688059],[284,.007667080033571],[297,.009078059345484],[346,.009791937656701],[348,.014565368182957],[350,.018591361120343],[356,.005197994410992],[358,.120625205338001],[361,.005560018587857],[362,.05328618362546],[365,.066890455782413],[372,.014816547743976],[376,.014262833632529],[420,.025462191551924],[425,.047252278774977]],YE=[];for(let B=0;B<yC.length;B++)YE[B]=0;ys.forEach(([B,A])=>{YE[B]=A});const Pi=[];for(let B=0;B<YE.length;B++)Pi[B]=Math.sqrt(YE[B]);const fE=[33,263,61,291,199];ys.forEach(([B,A])=>{fE.includes(B)||fE.push(B)});fE.sort((B,A)=>B-A);let ji=0,zi=0;for(let B=0;B<yC.length;B++)yC[B][0]<yC[ji][0]&&(ji=B),yC[B][0]>yC[zi][0]&&(zi=B);class sG{constructor(A){const I=A.height,g=A.width,C=g,Q=2*Math.atan(I/(2*C)),i=2*1*Math.tan(.5*Q),o=g*i/I;this.near=1,this.far=1e4,this.frameHeight=I,this.frameWidth=g,this.focalLength=C,this.fov=Q,this.left=-.5*o,this.right=.5*o,this.bottom=-.5*i,this.top=.5*i,this.focalLength=C,this.center=[g/2,I/2]}estimate(A){const I=this._projectToScreen(A);let g=this._cloneLandmarks(I);this._changeHandedness(g);const C=I.reduce((BA,d)=>BA+d[2],0)/I.length,Q=this._estimateScale(g);g=this._cloneLandmarks(I),this._moveAndRescaleZ(C,Q,g),this._unprojectScreen(g),this._changeHandedness(g);const i=this._estimateScale(g);let o=this._cloneLandmarks(I);const e=Q*i;this._moveAndRescaleZ(C,e,o),this._unprojectScreen(o),this._changeHandedness(o);const s=this._solveWeightedOrthogonal(yC,o,Pi),D=Cg.matFromArray(4,4,Cg.CV_64F,[s[0][0],s[0][1],s[0][2],s[0][3],s[1][0],s[1][1],s[1][2],s[1][3],s[2][0],s[2][1],s[2][2],s[2][3],s[3][0],s[3][1],s[3][2],s[3][3]]).inv(0).data64F,n=[[D[0],D[1],D[2],D[3]],[D[4],D[5],D[6],D[7]],[D[8],D[9],D[10],D[11]],[D[12],D[13],D[14],D[15]]],r=[];for(let BA=0;BA<o.length;BA++){r[BA]=[];for(let d=0;d<3;d++){r[BA][d]=n[d][3];for(let x=0;x<3;x++)r[BA][d]+=n[d][x]*o[BA][x]}}const F=[],l=[];fE.forEach(BA=>{F.push(r[BA][0],r[BA][1],r[BA][2]),l.push(A[BA][0]*this.frameWidth,A[BA][1]*this.frameHeight)});const S=Cg.matFromArray(F.length/3,3,Cg.CV_64F,F),G=Cg.matFromArray(l.length/2,2,Cg.CV_64F,l),w=Cg.matFromArray(3,3,Cg.CV_64F,[this.focalLength,0,this.center[0],0,this.focalLength,this.center[1],0,0,1]),Y=Cg.Mat.zeros(4,1,Cg.CV_64F),K=new Cg.Mat(3,1,Cg.CV_64F),f=new Cg.Mat(3,1,Cg.CV_64F),q=new Cg.Mat(3,3,Cg.CV_64F);Cg.solvePnP(S,G,w,Y,K,f,!1),Cg.Rodrigues(K,q);const b=[q.data64F[0],q.data64F[1],q.data64F[2],f.data64F[0],-q.data64F[3],-q.data64F[4],-q.data64F[5],-f.data64F[1],-q.data64F[6],-q.data64F[7],-q.data64F[8],-f.data64F[2],0,0,0,1],T=r[zi][0]-r[ji][0];return{metricLandmarks:r,faceMatrix:b,faceScale:T}}_estimateScale(A){const I=this._solveWeightedOrthogonal(yC,A,Pi);return Math.sqrt(I[0][0]*I[0][0]+I[0][1]*I[0][1]+I[0][2]*I[0][2])}_solveWeightedOrthogonal(A,I,g){const C=[],Q=[];for(let w=0;w<A.length;w++)C.push([A[w][0]*g[w],A[w][1]*g[w],A[w][2]*g[w]]),Q.push([I[w][0]*g[w],I[w][1]*g[w],I[w][2]*g[w]]);const i=g.reduce((w,Y)=>w+Y*Y,0),o=[];for(let w=0;w<C.length;w++)o[w]=[C[w][0]*g[w],C[w][1]*g[w],C[w][2]*g[w]];const e=[0,0,0];for(let w=0;w<3;w++){for(let Y=0;Y<o.length;Y++)e[w]+=o[Y][w];e[w]/=i}const s=[];for(let w=0;w<o.length;w++){s[w]=[];for(let Y=0;Y<3;Y++)s[w][Y]=C[w][Y]-e[Y]*g[w]}const D=[[0,0,0],[0,0,0],[0,0,0]];for(let w=0;w<3;w++)for(let Y=0;Y<3;Y++)for(let K=0;K<Q.length;K++)D[w][Y]+=Q[K][w]*s[K][Y];const n=this._computeOptimalRotation(D),r=this._computeOptimalScale(s,C,Q,n),F=[[],[],[]];for(let w=0;w<3;w++)for(let Y=0;Y<3;Y++)F[w][Y]=r*n[w][Y];const l=[];for(let w=0;w<C.length;w++){l[w]=[];for(let Y=0;Y<3;Y++){l[w][Y]=Q[w][Y];for(let K=0;K<3;K++)l[w][Y]-=F[Y][K]*C[w][K]}}const S=[];for(let w=0;w<l.length;w++){S[w]=[];for(let Y=0;Y<3;Y++)S[w][Y]=l[w][Y]*g[w]}const G=[0,0,0];for(let w=0;w<3;w++){for(let Y=0;Y<S.length;Y++)G[w]+=S[Y][w];G[w]/=i}return[[F[0][0],F[0][1],F[0][2],G[0]],[F[1][0],F[1][1],F[1][2],G[1]],[F[2][0],F[2][1],F[2][2],G[2]],[0,0,0,1]]}_computeOptimalRotation(A){const I=Cg.matFromArray(3,3,Cg.CV_64F,[A[0][0],A[0][1],A[0][2],A[1][0],A[1][1],A[1][2],A[2][0],A[2][1],A[2][2]]),g=new Cg.Mat(3,1,Cg.CV_64F),C=new Cg.Mat(3,3,Cg.CV_64F),Q=new Cg.Mat(3,3,Cg.CV_64F);Cg.SVDecomp(I,g,C,Q);const i=[[0,0,0],[0,0,0],[0,0,0]];for(let o=0;o<3;o++)for(let e=0;e<3;e++)for(let s=0;s<3;s++)i[o][e]+=C.data64F[o*3+s]*Q.data64F[s*3+e];return i}_computeOptimalScale(A,I,g,C){const Q=[];for(let e=0;e<A.length;e++){Q[e]=[];for(let s=0;s<3;s++){Q[e][s]=0;for(let D=0;D<3;D++)Q[e][s]+=C[s][D]*A[e][D]}}let i=0;for(let e=0;e<Q.length;e++)for(let s=0;s<3;s++)i+=Q[e][s]*g[e][s];let o=0;for(let e=0;e<A.length;e++)for(let s=0;s<3;s++)o+=A[e][s]*I[e][s];return i/o}_projectToScreen(A){const I=[],g=this.right-this.left,C=this.top-this.bottom,Q=this.left,i=this.bottom;for(let o=0;o<A.length;o++)I.push([A[o][0]*g+Q,(1-A[o][1])*C+i,A[o][2]*g]);return I}_cloneLandmarks(A){const I=[];for(let g=0;g<A.length;g++)I[g]=[A[g][0],A[g][1],A[g][2]];return I}_changeHandedness(A){for(let I=0;I<A.length;I++)A[I][2]*=-1}_moveAndRescaleZ(A,I,g){for(let C=0;C<g.length;C++)g[C][2]=(g[C][2]-A+this.near)/I}_unprojectScreen(A){for(let I=0;I<A.length;I++)A[I][0]=A[I][0]*A[I][2]/this.near,A[I][1]=A[I][1]*A[I][2]/this.near}}const FE=Xi.length,aG=B=>{class A extends B.BufferGeometry{constructor(g={}){super(),this.positions=new Float32Array(FE*3),this.uvs=new Float32Array(FE*2),this.setAttribute("position",new B.BufferAttribute(this.positions,3)),this.setAttribute("uv",new B.BufferAttribute(this.uvs,2)),this.setUvs(),this.setIndex(eG)}setUvs(){for(let g=0;g<FE;g++)this.uvs[g*2]=Xi[g][0],this.uvs[g*2+1]=Xi[g][1];this.getAttribute("uv").needsUpdate=!0}updatePositions(g){for(let C=0;C<FE;C++)this.positions[C*3+0]=g[C][0],this.positions[C*3+1]=g[C][1],this.positions[C*3+2]=g[C][2];this.attributes.position.needsUpdate=!0,this.computeVertexNormals()}}return new A},DG=.001,nG=1;class hG{constructor({onUpdate:A=null,filterMinCF:I=null,filterBeta:g=null}){this.customFaceGeometries=[],this.estimator=null,this.lastEstimateResult=null,this.filterMinCF=I===null?DG:I,this.filterBeta=g===null?nG:g,this.onUpdate=A,this.landmarkFilters=[];for(let C=0;C<yC.length;C++)this.landmarkFilters[C]=new ki({minCutOff:this.filterMinCF,beta:this.filterBeta});this.faceMatrixFilter=new ki({minCutOff:this.filterMinCF,beta:this.filterBeta}),this.faceScaleFilter=new ki({minCutOff:this.filterMinCF,beta:this.filterBeta})}async setup(A){await tG(),this.faceMeshHelper=new iG(A)}onInputResized(A){this.estimator=new sG(A)}getCameraParams(){return{fov:this.estimator.fov*180/Math.PI,aspect:this.estimator.frameWidth/this.estimator.frameHeight,near:this.estimator.near,far:this.estimator.far}}async dummyRun(A){await this.faceMeshHelper.detect(A)}processVideo(A){if(this.processingVideo)return;this.processingVideo=!0;const I=async()=>{const g=await this.faceMeshHelper.detect(A);if(g.multiFaceLandmarks.length===0){this.lastEstimateResult=null,this.onUpdate({hasFace:!1});for(let C=0;C<this.landmarkFilters.length;C++)this.landmarkFilters[C].reset();this.faceMatrixFilter.reset(),this.faceScaleFilter.reset()}else{const C=g.multiFaceLandmarks[0].map(i=>[i.x,i.y,i.z]),Q=this.estimator.estimate(C);if(this.lastEstimateResult===null)this.lastEstimateResult=Q;else{const i=this.lastEstimateResult.metricLandmarks;this.lastEstimateResult.faceMatrix,this.lastEstimateResult.faceScale;const o=[];for(let D=0;D<i.length;D++)o[D]=this.landmarkFilters[D].filter(Date.now(),Q.metricLandmarks[D]);const e=this.faceMatrixFilter.filter(Date.now(),Q.faceMatrix),s=this.faceScaleFilter.filter(Date.now(),[Q.faceScale]);this.lastEstimateResult={metricLandmarks:o,faceMatrix:e,faceScale:s[0]}}this.onUpdate&&this.onUpdate({hasFace:!0,estimateResult:this.lastEstimateResult});for(let i=0;i<this.customFaceGeometries.length;i++)this.customFaceGeometries[i].updatePositions(Q.metricLandmarks)}this.processingVideo&&window.requestAnimationFrame(I)};window.requestAnimationFrame(I)}stopProcessVideo(){this.processingVideo=!1}createThreeFaceGeometry(A){const I=aG(A);return this.customFaceGeometries.push(I),I}getLandmarkMatrix(A){const{metricLandmarks:I,faceMatrix:g,faceScale:C}=this.lastEstimateResult,Q=g,i=C,o=[I[A][0],I[A][1],I[A][2]];return[Q[0]*i,Q[1]*i,Q[2]*i,Q[0]*o[0]+Q[1]*o[1]+Q[2]*o[2]+Q[3],Q[4]*i,Q[5]*i,Q[6]*i,Q[4]*o[0]+Q[5]*o[1]+Q[6]*o[2]+Q[7],Q[8]*i,Q[9]*i,Q[10]*i,Q[8]*o[0]+Q[9]*o[1]+Q[10]*o[2]+Q[11],Q[12]*i,Q[13]*i,Q[14]*i,Q[12]*o[0]+Q[13]*o[1]+Q[14]*o[2]+Q[15]]}}const rG={BufferGeometry:BC,BufferAttribute:fg};class Ms{constructor({container:A,uiLoading:I="yes",uiScanning:g="yes",uiError:C="yes",filterMinCF:Q=null,filterBeta:i=null,userDeviceId:o=null,environmentDeviceId:e=null,disableFaceMirror:s=!1}){this.container=A,this.ui=new QG({uiLoading:I,uiScanning:g,uiError:C}),this.controller=new hG({filterMinCF:Q,filterBeta:i}),this.disableFaceMirror=s,this.scene=new Ie,this.cssScene=new Ie,this.renderer=new ss({antialias:!0,alpha:!0}),this.cssRenderer=new AG({antialias:!0}),this.renderer.outputEncoding=XC,this.renderer.setPixelRatio(window.devicePixelRatio),this.camera=new Hg,this.userDeviceId=o,this.environmentDeviceId=e,this.anchors=[],this.faceMeshes=[],this.container.appendChild(this.renderer.domElement),this.container.appendChild(this.cssRenderer.domElement),this.shouldFaceUser=!0,window.addEventListener("resize",this._resize.bind(this))}async start(){this.ui.showLoading(),await this._startVideo(),await this._startAR(),this.ui.hideLoading()}stop(){this.video.srcObject.getTracks().forEach(function(A){A.stop()}),this.video.remove(),this.controller.stopProcessVideo()}switchCamera(){this.shouldFaceUser=!this.shouldFaceUser,this.stop(),this.start()}addFaceMesh(){const A=this.controller.createThreeFaceGeometry(rG),I=new Sg(A,new qE({color:16777215}));return I.visible=!1,I.matrixAutoUpdate=!1,this.faceMeshes.push(I),I}addAnchor(A){const I=new SC;I.matrixAutoUpdate=!1;const g={group:I,landmarkIndex:A,css:!1};return this.anchors.push(g),this.scene.add(I),g}addCSSAnchor(A){const I=new SC;I.matrixAutoUpdate=!1;const g={group:I,landmarkIndex:A,css:!0};return this.anchors.push(g),this.cssScene.add(I),g}_startVideo(){return new Promise((A,I)=>{if(this.video=document.createElement("video"),this.video.setAttribute("autoplay",""),this.video.setAttribute("muted",""),this.video.setAttribute("playsinline",""),this.video.style.position="absolute",this.video.style.top="0px",this.video.style.left="0px",this.video.style.zIndex="-2",this.container.appendChild(this.video),!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){this.ui.showCompatibility(),I();return}const g={audio:!1,video:{}};this.shouldFaceUser?this.userDeviceId?g.video.deviceId={exact:this.userDeviceId}:g.video.facingMode="user":this.environmentDeviceId?g.video.deviceId={exact:this.environmentDeviceId}:g.video.facingMode="environment",navigator.mediaDevices.getUserMedia(g).then(C=>{this.video.addEventListener("loadedmetadata",()=>{this.video.setAttribute("width",this.video.videoWidth),this.video.setAttribute("height",this.video.videoHeight),A()}),this.video.srcObject=C}).catch(C=>{console.log("getUserMedia error",C),I()})})}_startAR(){return new Promise(async(A,I)=>{const g=this.video;this.container,this.controller.onUpdate=({hasFace:Q,estimateResult:i})=>{for(let o=0;o<this.anchors.length;o++)this.anchors[o].css?this.anchors[o].group.children.forEach(e=>{e.element.style.visibility=Q?"visible":"hidden"}):this.anchors[o].group.visible=Q;for(let o=0;o<this.faceMeshes.length;o++)this.faceMeshes[o].visible=Q;if(Q){const{metricLandmarks:o,faceMatrix:e,faceScale:s}=i;for(let D=0;D<this.anchors.length;D++){const n=this.anchors[D].landmarkIndex,r=this.controller.getLandmarkMatrix(n);if(this.anchors[D].css){const F=[.001*r[0],.001*r[1],r[2],r[3],.001*r[4],.001*r[5],r[6],r[7],.001*r[8],.001*r[9],r[10],r[11],.001*r[12],.001*r[13],r[14],r[15]];this.anchors[D].group.matrix.set(...F)}else this.anchors[D].group.matrix.set(...r)}for(let D=0;D<this.faceMeshes.length;D++)this.faceMeshes[D].matrix.set(...e)}},this._resize();const C=this.shouldFaceUser&&!this.disableFaceMirror;await this.controller.setup(C),await this.controller.dummyRun(g),this._resize(),this.controller.processVideo(g),A()})}_resize(){const{renderer:A,cssRenderer:I,camera:g,container:C,video:Q}=this;if(!Q)return;{this.video.setAttribute("width",this.video.videoWidth),this.video.setAttribute("height",this.video.videoHeight),this.controller.onInputResized(Q);const{fov:r,aspect:F,near:l,far:S}=this.controller.getCameraParams();this.camera.fov=r,this.camera.aspect=F,this.camera.near=l,this.camera.far=S,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.video.videoWidth,this.video.videoHeight),this.cssRenderer.setSize(this.video.videoWidth,this.video.videoHeight)}let i,o;const e=Q.videoWidth/Q.videoHeight,s=C.clientWidth/C.clientHeight;e>s?(o=C.clientHeight,i=o*e):(i=C.clientWidth,o=i/e),Q.style.top=-(o-C.clientHeight)/2+"px",Q.style.left=-(i-C.clientWidth)/2+"px",Q.style.width=i+"px",Q.style.height=o+"px",this.shouldFaceUser&&!this.disableFaceMirror?Q.style.transform="scaleX(-1)":Q.style.transform="scaleX(1)";const D=A.domElement,n=I.domElement;D.style.position="absolute",D.style.top=Q.style.top,D.style.left=Q.style.left,D.style.width=Q.style.width,D.style.height=Q.style.height,n.style.position="absolute",n.style.top=Q.style.top,n.style.left=Q.style.left,n.style.transformOrigin="top left",n.style.transform="scale("+i/parseFloat(n.style.width)+","+o/parseFloat(n.style.height)+")"}}window.MINDAR||(window.MINDAR={});window.MINDAR.FACE||(window.MINDAR.FACE={});window.MINDAR.FACE.MindARThree=Ms;function le(B,A){if(A===fD)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),B;if(A===xi||A===Ve){let I=B.getIndex();if(I===null){const i=[],o=B.getAttribute("position");if(o!==void 0){for(let e=0;e<o.count;e++)i.push(e);B.setIndex(i),I=B.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),B}const g=I.count-2,C=[];if(A===xi)for(let i=1;i<=g;i++)C.push(I.getX(0)),C.push(I.getX(i)),C.push(I.getX(i+1));else for(let i=0;i<g;i++)i%2===0?(C.push(I.getX(i)),C.push(I.getX(i+1)),C.push(I.getX(i+2))):(C.push(I.getX(i+2)),C.push(I.getX(i+1)),C.push(I.getX(i)));C.length/3!==g&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const Q=B.clone();return Q.setIndex(C),Q.clearGroups(),Q}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",A),B}class wG extends QQ{constructor(A){super(A),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(I){return new NG(I)}),this.register(function(I){return new JG(I)}),this.register(function(I){return new YG(I)}),this.register(function(I){return new fG(I)}),this.register(function(I){return new MG(I)}),this.register(function(I){return new lG(I)}),this.register(function(I){return new SG(I)}),this.register(function(I){return new UG(I)}),this.register(function(I){return new FG(I)}),this.register(function(I){return new KG(I)}),this.register(function(I){return new yG(I)}),this.register(function(I){return new kG(I)}),this.register(function(I){return new dG(I)}),this.register(function(I){return new GG(I)}),this.register(function(I){return new LG(I)}),this.register(function(I){return new uG(I)})}load(A,I,g,C){const Q=this;let i;if(this.resourcePath!=="")i=this.resourcePath;else if(this.path!==""){const s=SQ.extractUrlBase(A);i=SQ.resolveURL(s,this.path)}else i=SQ.extractUrlBase(A);this.manager.itemStart(A);const o=function(s){C?C(s):console.error(s),Q.manager.itemError(A),Q.manager.itemEnd(A)},e=new cs(this.manager);e.setPath(this.path),e.setResponseType("arraybuffer"),e.setRequestHeader(this.requestHeader),e.setWithCredentials(this.withCredentials),e.load(A,function(s){try{Q.parse(s,i,function(D){I(D),Q.manager.itemEnd(A)},o)}catch(D){o(D)}},g,o)}setDRACOLoader(A){return this.dracoLoader=A,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(A){return this.ktx2Loader=A,this}setMeshoptDecoder(A){return this.meshoptDecoder=A,this}register(A){return this.pluginCallbacks.indexOf(A)===-1&&this.pluginCallbacks.push(A),this}unregister(A){return this.pluginCallbacks.indexOf(A)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(A),1),this}parse(A,I,g,C){let Q;const i={},o={},e=new TextDecoder;if(typeof A=="string")Q=JSON.parse(A);else if(A instanceof ArrayBuffer)if(e.decode(new Uint8Array(A,0,4))===ls){try{i[qI.KHR_BINARY_GLTF]=new HG(A)}catch(n){C&&C(n);return}Q=JSON.parse(i[qI.KHR_BINARY_GLTF].content)}else Q=JSON.parse(e.decode(A));else Q=A;if(Q.asset===void 0||Q.asset.version[0]<2){C&&C(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const s=new PG(Q,{path:I||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});s.fileLoader.setRequestHeader(this.requestHeader);for(let D=0;D<this.pluginCallbacks.length;D++){const n=this.pluginCallbacks[D](s);n.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[n.name]=n,i[n.name]=!0}if(Q.extensionsUsed)for(let D=0;D<Q.extensionsUsed.length;++D){const n=Q.extensionsUsed[D],r=Q.extensionsRequired||[];switch(n){case qI.KHR_MATERIALS_UNLIT:i[n]=new RG;break;case qI.KHR_DRACO_MESH_COMPRESSION:i[n]=new pG(Q,this.dracoLoader);break;case qI.KHR_TEXTURE_TRANSFORM:i[n]=new mG;break;case qI.KHR_MESH_QUANTIZATION:i[n]=new qG;break;default:r.indexOf(n)>=0&&o[n]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+n+'".')}}s.setExtensions(i),s.setPlugins(o),s.parse(g,C)}parseAsync(A,I){const g=this;return new Promise(function(C,Q){g.parse(A,I,C,Q)})}}function cG(){let B={};return{get:function(A){return B[A]},add:function(A,I){B[A]=I},remove:function(A){delete B[A]},removeAll:function(){B={}}}}const qI={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class GG{constructor(A){this.parser=A,this.name=qI.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const A=this.parser,I=this.parser.json.nodes||[];for(let g=0,C=I.length;g<C;g++){const Q=I[g];Q.extensions&&Q.extensions[this.name]&&Q.extensions[this.name].light!==void 0&&A._addNodeRef(this.cache,Q.extensions[this.name].light)}}_loadLight(A){const I=this.parser,g="light:"+A;let C=I.cache.get(g);if(C)return C;const Q=I.json,e=((Q.extensions&&Q.extensions[this.name]||{}).lights||[])[A];let s;const D=new yI(16777215);e.color!==void 0&&D.setRGB(e.color[0],e.color[1],e.color[2],Kg);const n=e.range!==void 0?e.range:0;switch(e.type){case"directional":s=new pc(D),s.target.position.set(0,0,-1),s.add(s.target);break;case"point":s=new uc(D),s.distance=n;break;case"spot":s=new fc(D),s.distance=n,e.spot=e.spot||{},e.spot.innerConeAngle=e.spot.innerConeAngle!==void 0?e.spot.innerConeAngle:0,e.spot.outerConeAngle=e.spot.outerConeAngle!==void 0?e.spot.outerConeAngle:Math.PI/4,s.angle=e.spot.outerConeAngle,s.penumbra=1-e.spot.innerConeAngle/e.spot.outerConeAngle,s.target.position.set(0,0,-1),s.add(s.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+e.type)}return s.position.set(0,0,0),s.decay=2,VC(s,e),e.intensity!==void 0&&(s.intensity=e.intensity),s.name=I.createUniqueName(e.name||"light_"+A),C=Promise.resolve(s),I.cache.add(g,C),C}getDependency(A,I){if(A==="light")return this._loadLight(I)}createNodeAttachment(A){const I=this,g=this.parser,Q=g.json.nodes[A],o=(Q.extensions&&Q.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(e){return g._getNodeRef(I.cache,o,e)})}}class RG{constructor(){this.name=qI.KHR_MATERIALS_UNLIT}getMaterialType(){return zg}extendParams(A,I,g){const C=[];A.color=new yI(1,1,1),A.opacity=1;const Q=I.pbrMetallicRoughness;if(Q){if(Array.isArray(Q.baseColorFactor)){const i=Q.baseColorFactor;A.color.setRGB(i[0],i[1],i[2],Kg),A.opacity=i[3]}Q.baseColorTexture!==void 0&&C.push(g.assignTexture(A,"map",Q.baseColorTexture,Eg))}return Promise.all(C)}}class FG{constructor(A){this.parser=A,this.name=qI.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(A,I){const C=this.parser.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=C.extensions[this.name].emissiveStrength;return Q!==void 0&&(I.emissiveIntensity=Q),Promise.resolve()}}class NG{constructor(A){this.parser=A,this.name=qI.KHR_MATERIALS_CLEARCOAT}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:kC}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[],i=C.extensions[this.name];if(i.clearcoatFactor!==void 0&&(I.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&Q.push(g.assignTexture(I,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(I.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&Q.push(g.assignTexture(I,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(Q.push(g.assignTexture(I,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const o=i.clearcoatNormalTexture.scale;I.clearcoatNormalScale=new VI(o,o)}return Promise.all(Q)}}class yG{constructor(A){this.parser=A,this.name=qI.KHR_MATERIALS_IRIDESCENCE}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:kC}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[],i=C.extensions[this.name];return i.iridescenceFactor!==void 0&&(I.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&Q.push(g.assignTexture(I,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(I.iridescenceIOR=i.iridescenceIor),I.iridescenceThicknessRange===void 0&&(I.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(I.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(I.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&Q.push(g.assignTexture(I,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(Q)}}class MG{constructor(A){this.parser=A,this.name=qI.KHR_MATERIALS_SHEEN}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:kC}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[];I.sheenColor=new yI(0,0,0),I.sheenRoughness=0,I.sheen=1;const i=C.extensions[this.name];if(i.sheenColorFactor!==void 0){const o=i.sheenColorFactor;I.sheenColor.setRGB(o[0],o[1],o[2],Kg)}return i.sheenRoughnessFactor!==void 0&&(I.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&Q.push(g.assignTexture(I,"sheenColorMap",i.sheenColorTexture,Eg)),i.sheenRoughnessTexture!==void 0&&Q.push(g.assignTexture(I,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(Q)}}class lG{constructor(A){this.parser=A,this.name=qI.KHR_MATERIALS_TRANSMISSION}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:kC}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[],i=C.extensions[this.name];return i.transmissionFactor!==void 0&&(I.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&Q.push(g.assignTexture(I,"transmissionMap",i.transmissionTexture)),Promise.all(Q)}}class SG{constructor(A){this.parser=A,this.name=qI.KHR_MATERIALS_VOLUME}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:kC}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[],i=C.extensions[this.name];I.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&Q.push(g.assignTexture(I,"thicknessMap",i.thicknessTexture)),I.attenuationDistance=i.attenuationDistance||1/0;const o=i.attenuationColor||[1,1,1];return I.attenuationColor=new yI().setRGB(o[0],o[1],o[2],Kg),Promise.all(Q)}}class UG{constructor(A){this.parser=A,this.name=qI.KHR_MATERIALS_IOR}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:kC}extendMaterialParams(A,I){const C=this.parser.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=C.extensions[this.name];return I.ior=Q.ior!==void 0?Q.ior:1.5,Promise.resolve()}}class KG{constructor(A){this.parser=A,this.name=qI.KHR_MATERIALS_SPECULAR}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:kC}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[],i=C.extensions[this.name];I.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&Q.push(g.assignTexture(I,"specularIntensityMap",i.specularTexture));const o=i.specularColorFactor||[1,1,1];return I.specularColor=new yI().setRGB(o[0],o[1],o[2],Kg),i.specularColorTexture!==void 0&&Q.push(g.assignTexture(I,"specularColorMap",i.specularColorTexture,Eg)),Promise.all(Q)}}class dG{constructor(A){this.parser=A,this.name=qI.EXT_MATERIALS_BUMP}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:kC}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[],i=C.extensions[this.name];return I.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&Q.push(g.assignTexture(I,"bumpMap",i.bumpTexture)),Promise.all(Q)}}class kG{constructor(A){this.parser=A,this.name=qI.KHR_MATERIALS_ANISOTROPY}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:kC}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[],i=C.extensions[this.name];return i.anisotropyStrength!==void 0&&(I.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(I.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&Q.push(g.assignTexture(I,"anisotropyMap",i.anisotropyTexture)),Promise.all(Q)}}class JG{constructor(A){this.parser=A,this.name=qI.KHR_TEXTURE_BASISU}loadTexture(A){const I=this.parser,g=I.json,C=g.textures[A];if(!C.extensions||!C.extensions[this.name])return null;const Q=C.extensions[this.name],i=I.options.ktx2Loader;if(!i){if(g.extensionsRequired&&g.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return I.loadTextureImage(A,Q.source,i)}}class YG{constructor(A){this.parser=A,this.name=qI.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(A){const I=this.name,g=this.parser,C=g.json,Q=C.textures[A];if(!Q.extensions||!Q.extensions[I])return null;const i=Q.extensions[I],o=C.images[i.source];let e=g.textureLoader;if(o.uri){const s=g.options.manager.getHandler(o.uri);s!==null&&(e=s)}return this.detectSupport().then(function(s){if(s)return g.loadTextureImage(A,i.source,e);if(C.extensionsRequired&&C.extensionsRequired.indexOf(I)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return g.loadTexture(A)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(A){const I=new Image;I.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",I.onload=I.onerror=function(){A(I.height===1)}})),this.isSupported}}class fG{constructor(A){this.parser=A,this.name=qI.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(A){const I=this.name,g=this.parser,C=g.json,Q=C.textures[A];if(!Q.extensions||!Q.extensions[I])return null;const i=Q.extensions[I],o=C.images[i.source];let e=g.textureLoader;if(o.uri){const s=g.options.manager.getHandler(o.uri);s!==null&&(e=s)}return this.detectSupport().then(function(s){if(s)return g.loadTextureImage(A,i.source,e);if(C.extensionsRequired&&C.extensionsRequired.indexOf(I)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return g.loadTexture(A)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(A){const I=new Image;I.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",I.onload=I.onerror=function(){A(I.height===1)}})),this.isSupported}}class LG{constructor(A){this.name=qI.EXT_MESHOPT_COMPRESSION,this.parser=A}loadBufferView(A){const I=this.parser.json,g=I.bufferViews[A];if(g.extensions&&g.extensions[this.name]){const C=g.extensions[this.name],Q=this.parser.getDependency("buffer",C.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(I.extensionsRequired&&I.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Q.then(function(o){const e=C.byteOffset||0,s=C.byteLength||0,D=C.count,n=C.byteStride,r=new Uint8Array(o,e,s);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(D,n,r,C.mode,C.filter).then(function(F){return F.buffer}):i.ready.then(function(){const F=new ArrayBuffer(D*n);return i.decodeGltfBuffer(new Uint8Array(F),D,n,r,C.mode,C.filter),F})})}else return null}}class uG{constructor(A){this.name=qI.EXT_MESH_GPU_INSTANCING,this.parser=A}createNodeMesh(A){const I=this.parser.json,g=I.nodes[A];if(!g.extensions||!g.extensions[this.name]||g.mesh===void 0)return null;const C=I.meshes[g.mesh];for(const s of C.primitives)if(s.mode!==vg.TRIANGLES&&s.mode!==vg.TRIANGLE_STRIP&&s.mode!==vg.TRIANGLE_FAN&&s.mode!==void 0)return null;const i=g.extensions[this.name].attributes,o=[],e={};for(const s in i)o.push(this.parser.getDependency("accessor",i[s]).then(D=>(e[s]=D,e[s])));return o.length<1?null:(o.push(this.parser.createNodeMesh(A)),Promise.all(o).then(s=>{const D=s.pop(),n=D.isGroup?D.children:[D],r=s[0].count,F=[];for(const l of n){const S=new kI,G=new Z,w=new _g,Y=new Z(1,1,1),K=new wc(l.geometry,l.material,r);for(let f=0;f<r;f++)e.TRANSLATION&&G.fromBufferAttribute(e.TRANSLATION,f),e.ROTATION&&w.fromBufferAttribute(e.ROTATION,f),e.SCALE&&Y.fromBufferAttribute(e.SCALE,f),K.setMatrixAt(f,S.compose(G,w,Y));for(const f in e)if(f==="_COLOR_0"){const q=e[f];K.instanceColor=new Oi(q.array,q.itemSize,q.normalized)}else f!=="TRANSLATION"&&f!=="ROTATION"&&f!=="SCALE"&&l.geometry.setAttribute(f,e[f]);Dg.prototype.copy.call(K,l),this.parser.assignFinalMaterial(K),F.push(K)}return D.isGroup?(D.clear(),D.add(...F),D):F[0]}))}}const ls="glTF",FQ=12,Se={JSON:1313821514,BIN:5130562};class HG{constructor(A){this.name=qI.KHR_BINARY_GLTF,this.content=null,this.body=null;const I=new DataView(A,0,FQ),g=new TextDecoder;if(this.header={magic:g.decode(new Uint8Array(A.slice(0,4))),version:I.getUint32(4,!0),length:I.getUint32(8,!0)},this.header.magic!==ls)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const C=this.header.length-FQ,Q=new DataView(A,FQ);let i=0;for(;i<C;){const o=Q.getUint32(i,!0);i+=4;const e=Q.getUint32(i,!0);if(i+=4,e===Se.JSON){const s=new Uint8Array(A,FQ+i,o);this.content=g.decode(s)}else if(e===Se.BIN){const s=FQ+i;this.body=A.slice(s,s+o)}i+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class pG{constructor(A,I){if(!I)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qI.KHR_DRACO_MESH_COMPRESSION,this.json=A,this.dracoLoader=I,this.dracoLoader.preload()}decodePrimitive(A,I){const g=this.json,C=this.dracoLoader,Q=A.extensions[this.name].bufferView,i=A.extensions[this.name].attributes,o={},e={},s={};for(const D in i){const n=_i[D]||D.toLowerCase();o[n]=i[D]}for(const D in A.attributes){const n=_i[D]||D.toLowerCase();if(i[D]!==void 0){const r=g.accessors[A.attributes[D]],F=OB[r.componentType];s[n]=F.name,e[n]=r.normalized===!0}}return I.getDependency("bufferView",Q).then(function(D){return new Promise(function(n){C.decodeDracoFile(D,function(r){for(const F in r.attributes){const l=r.attributes[F],S=e[F];S!==void 0&&(l.normalized=S)}n(r)},o,s)})})}}class mG{constructor(){this.name=qI.KHR_TEXTURE_TRANSFORM}extendTexture(A,I){return(I.texCoord===void 0||I.texCoord===A.channel)&&I.offset===void 0&&I.rotation===void 0&&I.scale===void 0||(A=A.clone(),I.texCoord!==void 0&&(A.channel=I.texCoord),I.offset!==void 0&&A.offset.fromArray(I.offset),I.rotation!==void 0&&(A.rotation=I.rotation),I.scale!==void 0&&A.repeat.fromArray(I.scale),A.needsUpdate=!0),A}}class qG{constructor(){this.name=qI.KHR_MESH_QUANTIZATION}}class Ss extends JQ{constructor(A,I,g,C){super(A,I,g,C)}copySampleValue_(A){const I=this.resultBuffer,g=this.sampleValues,C=this.valueSize,Q=A*C*3+C;for(let i=0;i!==C;i++)I[i]=g[Q+i];return I}interpolate_(A,I,g,C){const Q=this.resultBuffer,i=this.sampleValues,o=this.valueSize,e=o*2,s=o*3,D=C-I,n=(g-I)/D,r=n*n,F=r*n,l=A*s,S=l-s,G=-2*F+3*r,w=F-r,Y=1-G,K=w-r+n;for(let f=0;f!==o;f++){const q=i[S+f+o],b=i[S+f+e]*D,T=i[l+f+o],BA=i[l+f]*D;Q[f]=Y*q+K*b+G*T+w*BA}return Q}}const xG=new _g;class bG extends Ss{interpolate_(A,I,g,C){const Q=super.interpolate_(A,I,g,C);return xG.fromArray(Q).normalize().toArray(Q),Q}}const vg={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},OB={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ue={9728:yg,9729:mg,9984:qi,9985:Le,9986:NE,9987:aB},Ke={33071:Xg,33648:lE,10497:PC},Ji={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_i={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},bC={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},TG={CUBICSPLINE:void 0,LINEAR:PB,STEP:KQ},Yi={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function VG(B){return B.DefaultMaterial===void 0&&(B.DefaultMaterial=new qE({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:KC})),B.DefaultMaterial}function QB(B,A,I){for(const g in I.extensions)B[g]===void 0&&(A.userData.gltfExtensions=A.userData.gltfExtensions||{},A.userData.gltfExtensions[g]=I.extensions[g])}function VC(B,A){A.extras!==void 0&&(typeof A.extras=="object"?Object.assign(B.userData,A.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+A.extras))}function WG(B,A,I){let g=!1,C=!1,Q=!1;for(let s=0,D=A.length;s<D;s++){const n=A[s];if(n.POSITION!==void 0&&(g=!0),n.NORMAL!==void 0&&(C=!0),n.COLOR_0!==void 0&&(Q=!0),g&&C&&Q)break}if(!g&&!C&&!Q)return Promise.resolve(B);const i=[],o=[],e=[];for(let s=0,D=A.length;s<D;s++){const n=A[s];if(g){const r=n.POSITION!==void 0?I.getDependency("accessor",n.POSITION):B.attributes.position;i.push(r)}if(C){const r=n.NORMAL!==void 0?I.getDependency("accessor",n.NORMAL):B.attributes.normal;o.push(r)}if(Q){const r=n.COLOR_0!==void 0?I.getDependency("accessor",n.COLOR_0):B.attributes.color;e.push(r)}}return Promise.all([Promise.all(i),Promise.all(o),Promise.all(e)]).then(function(s){const D=s[0],n=s[1],r=s[2];return g&&(B.morphAttributes.position=D),C&&(B.morphAttributes.normal=n),Q&&(B.morphAttributes.color=r),B.morphTargetsRelative=!0,B})}function OG(B,A){if(B.updateMorphTargets(),A.weights!==void 0)for(let I=0,g=A.weights.length;I<g;I++)B.morphTargetInfluences[I]=A.weights[I];if(A.extras&&Array.isArray(A.extras.targetNames)){const I=A.extras.targetNames;if(B.morphTargetInfluences.length===I.length){B.morphTargetDictionary={};for(let g=0,C=I.length;g<C;g++)B.morphTargetDictionary[I[g]]=g}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ZG(B){let A;const I=B.extensions&&B.extensions[qI.KHR_DRACO_MESH_COMPRESSION];if(I?A="draco:"+I.bufferView+":"+I.indices+":"+fi(I.attributes):A=B.indices+":"+fi(B.attributes)+":"+B.mode,B.targets!==void 0)for(let g=0,C=B.targets.length;g<C;g++)A+=":"+fi(B.targets[g]);return A}function fi(B){let A="";const I=Object.keys(B).sort();for(let g=0,C=I.length;g<C;g++)A+=I[g]+":"+B[I[g]]+";";return A}function $i(B){switch(B){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vG(B){return B.search(/\.jpe?g($|\?)/i)>0||B.search(/^data\:image\/jpeg/)===0?"image/jpeg":B.search(/\.webp($|\?)/i)>0||B.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const XG=new kI;class PG{constructor(A={},I={}){this.json=A,this.extensions={},this.plugins={},this.options=I,this.cache=new cG,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let g=!1,C=!1,Q=-1;typeof navigator<"u"&&(g=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,C=navigator.userAgent.indexOf("Firefox")>-1,Q=C?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||g||C&&Q<98?this.textureLoader=new ao(this.options.manager):this.textureLoader=new mc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new cs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(A){this.extensions=A}setPlugins(A){this.plugins=A}parse(A,I){const g=this,C=this.json,Q=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(i){return i._markDefs&&i._markDefs()}),Promise.all(this._invokeAll(function(i){return i.beforeRoot&&i.beforeRoot()})).then(function(){return Promise.all([g.getDependencies("scene"),g.getDependencies("animation"),g.getDependencies("camera")])}).then(function(i){const o={scene:i[0][C.scene||0],scenes:i[0],animations:i[1],cameras:i[2],asset:C.asset,parser:g,userData:{}};return QB(Q,o,C),VC(o,C),Promise.all(g._invokeAll(function(e){return e.afterRoot&&e.afterRoot(o)})).then(function(){A(o)})}).catch(I)}_markDefs(){const A=this.json.nodes||[],I=this.json.skins||[],g=this.json.meshes||[];for(let C=0,Q=I.length;C<Q;C++){const i=I[C].joints;for(let o=0,e=i.length;o<e;o++)A[i[o]].isBone=!0}for(let C=0,Q=A.length;C<Q;C++){const i=A[C];i.mesh!==void 0&&(this._addNodeRef(this.meshCache,i.mesh),i.skin!==void 0&&(g[i.mesh].isSkinnedMesh=!0)),i.camera!==void 0&&this._addNodeRef(this.cameraCache,i.camera)}}_addNodeRef(A,I){I!==void 0&&(A.refs[I]===void 0&&(A.refs[I]=A.uses[I]=0),A.refs[I]++)}_getNodeRef(A,I,g){if(A.refs[I]<=1)return g;const C=g.clone(),Q=(i,o)=>{const e=this.associations.get(i);e!=null&&this.associations.set(o,e);for(const[s,D]of i.children.entries())Q(D,o.children[s])};return Q(g,C),C.name+="_instance_"+A.uses[I]++,C}_invokeOne(A){const I=Object.values(this.plugins);I.push(this);for(let g=0;g<I.length;g++){const C=A(I[g]);if(C)return C}return null}_invokeAll(A){const I=Object.values(this.plugins);I.unshift(this);const g=[];for(let C=0;C<I.length;C++){const Q=A(I[C]);Q&&g.push(Q)}return g}getDependency(A,I){const g=A+":"+I;let C=this.cache.get(g);if(!C){switch(A){case"scene":C=this.loadScene(I);break;case"node":C=this._invokeOne(function(Q){return Q.loadNode&&Q.loadNode(I)});break;case"mesh":C=this._invokeOne(function(Q){return Q.loadMesh&&Q.loadMesh(I)});break;case"accessor":C=this.loadAccessor(I);break;case"bufferView":C=this._invokeOne(function(Q){return Q.loadBufferView&&Q.loadBufferView(I)});break;case"buffer":C=this.loadBuffer(I);break;case"material":C=this._invokeOne(function(Q){return Q.loadMaterial&&Q.loadMaterial(I)});break;case"texture":C=this._invokeOne(function(Q){return Q.loadTexture&&Q.loadTexture(I)});break;case"skin":C=this.loadSkin(I);break;case"animation":C=this._invokeOne(function(Q){return Q.loadAnimation&&Q.loadAnimation(I)});break;case"camera":C=this.loadCamera(I);break;default:if(C=this._invokeOne(function(Q){return Q!=this&&Q.getDependency&&Q.getDependency(A,I)}),!C)throw new Error("Unknown type: "+A);break}this.cache.add(g,C)}return C}getDependencies(A){let I=this.cache.get(A);if(!I){const g=this,C=this.json[A+(A==="mesh"?"es":"s")]||[];I=Promise.all(C.map(function(Q,i){return g.getDependency(A,i)})),this.cache.add(A,I)}return I}loadBuffer(A){const I=this.json.buffers[A],g=this.fileLoader;if(I.type&&I.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+I.type+" buffer type is not supported.");if(I.uri===void 0&&A===0)return Promise.resolve(this.extensions[qI.KHR_BINARY_GLTF].body);const C=this.options;return new Promise(function(Q,i){g.load(SQ.resolveURL(I.uri,C.path),Q,void 0,function(){i(new Error('THREE.GLTFLoader: Failed to load buffer "'+I.uri+'".'))})})}loadBufferView(A){const I=this.json.bufferViews[A];return this.getDependency("buffer",I.buffer).then(function(g){const C=I.byteLength||0,Q=I.byteOffset||0;return g.slice(Q,Q+C)})}loadAccessor(A){const I=this,g=this.json,C=this.json.accessors[A];if(C.bufferView===void 0&&C.sparse===void 0){const i=Ji[C.type],o=OB[C.componentType],e=C.normalized===!0,s=new o(C.count*i);return Promise.resolve(new fg(s,i,e))}const Q=[];return C.bufferView!==void 0?Q.push(this.getDependency("bufferView",C.bufferView)):Q.push(null),C.sparse!==void 0&&(Q.push(this.getDependency("bufferView",C.sparse.indices.bufferView)),Q.push(this.getDependency("bufferView",C.sparse.values.bufferView))),Promise.all(Q).then(function(i){const o=i[0],e=Ji[C.type],s=OB[C.componentType],D=s.BYTES_PER_ELEMENT,n=D*e,r=C.byteOffset||0,F=C.bufferView!==void 0?g.bufferViews[C.bufferView].byteStride:void 0,l=C.normalized===!0;let S,G;if(F&&F!==n){const w=Math.floor(r/F),Y="InterleavedBuffer:"+C.bufferView+":"+C.componentType+":"+w+":"+C.count;let K=I.cache.get(Y);K||(S=new s(o,w*F,C.count*F/D),K=new sc(S,F/D),I.cache.add(Y,K)),G=new to(K,e,r%F/D,l)}else o===null?S=new s(C.count*e):S=new s(o,r,C.count*e),G=new fg(S,e,l);if(C.sparse!==void 0){const w=Ji.SCALAR,Y=OB[C.sparse.indices.componentType],K=C.sparse.indices.byteOffset||0,f=C.sparse.values.byteOffset||0,q=new Y(i[1],K,C.sparse.count*w),b=new s(i[2],f,C.sparse.count*e);o!==null&&(G=new fg(G.array.slice(),G.itemSize,G.normalized));for(let T=0,BA=q.length;T<BA;T++){const d=q[T];if(G.setX(d,b[T*e]),e>=2&&G.setY(d,b[T*e+1]),e>=3&&G.setZ(d,b[T*e+2]),e>=4&&G.setW(d,b[T*e+3]),e>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return G})}loadTexture(A){const I=this.json,g=this.options,Q=I.textures[A].source,i=I.images[Q];let o=this.textureLoader;if(i.uri){const e=g.manager.getHandler(i.uri);e!==null&&(o=e)}return this.loadTextureImage(A,Q,o)}loadTextureImage(A,I,g){const C=this,Q=this.json,i=Q.textures[A],o=Q.images[I],e=(o.uri||o.bufferView)+":"+i.sampler;if(this.textureCache[e])return this.textureCache[e];const s=this.loadImageSource(I,g).then(function(D){D.flipY=!1,D.name=i.name||o.name||"",D.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(D.name=o.uri);const r=(Q.samplers||{})[i.sampler]||{};return D.magFilter=Ue[r.magFilter]||mg,D.minFilter=Ue[r.minFilter]||aB,D.wrapS=Ke[r.wrapS]||PC,D.wrapT=Ke[r.wrapT]||PC,C.associations.set(D,{textures:A}),D}).catch(function(){return null});return this.textureCache[e]=s,s}loadImageSource(A,I){const g=this,C=this.json,Q=this.options;if(this.sourceCache[A]!==void 0)return this.sourceCache[A].then(n=>n.clone());const i=C.images[A],o=self.URL||self.webkitURL;let e=i.uri||"",s=!1;if(i.bufferView!==void 0)e=g.getDependency("bufferView",i.bufferView).then(function(n){s=!0;const r=new Blob([n],{type:i.mimeType});return e=o.createObjectURL(r),e});else if(i.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+A+" is missing URI and bufferView");const D=Promise.resolve(e).then(function(n){return new Promise(function(r,F){let l=r;I.isImageBitmapLoader===!0&&(l=function(S){const G=new Ug(S);G.needsUpdate=!0,r(G)}),I.load(SQ.resolveURL(n,Q.path),l,void 0,F)})}).then(function(n){return s===!0&&o.revokeObjectURL(e),n.userData.mimeType=i.mimeType||vG(i.uri),n}).catch(function(n){throw console.error("THREE.GLTFLoader: Couldn't load texture",e),n});return this.sourceCache[A]=D,D}assignTexture(A,I,g,C){const Q=this;return this.getDependency("texture",g.index).then(function(i){if(!i)return null;if(g.texCoord!==void 0&&g.texCoord>0&&(i=i.clone(),i.channel=g.texCoord),Q.extensions[qI.KHR_TEXTURE_TRANSFORM]){const o=g.extensions!==void 0?g.extensions[qI.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const e=Q.associations.get(i);i=Q.extensions[qI.KHR_TEXTURE_TRANSFORM].extendTexture(i,o),Q.associations.set(i,e)}}return C!==void 0&&(i.colorSpace=C),A[I]=i,i})}assignFinalMaterial(A){const I=A.geometry;let g=A.material;const C=I.attributes.tangent===void 0,Q=I.attributes.color!==void 0,i=I.attributes.normal===void 0;if(A.isPoints){const o="PointsMaterial:"+g.uuid;let e=this.cache.get(o);e||(e=new ns,eC.prototype.copy.call(e,g),e.color.copy(g.color),e.map=g.map,e.sizeAttenuation=!1,this.cache.add(o,e)),g=e}else if(A.isLine){const o="LineBasicMaterial:"+g.uuid;let e=this.cache.get(o);e||(e=new Ds,eC.prototype.copy.call(e,g),e.color.copy(g.color),e.map=g.map,this.cache.add(o,e)),g=e}if(C||Q||i){let o="ClonedMaterial:"+g.uuid+":";C&&(o+="derivative-tangents:"),Q&&(o+="vertex-colors:"),i&&(o+="flat-shading:");let e=this.cache.get(o);e||(e=g.clone(),Q&&(e.vertexColors=!0),i&&(e.flatShading=!0),C&&(e.normalScale&&(e.normalScale.y*=-1),e.clearcoatNormalScale&&(e.clearcoatNormalScale.y*=-1)),this.cache.add(o,e),this.associations.set(e,this.associations.get(g))),g=e}A.material=g}getMaterialType(){return qE}loadMaterial(A){const I=this,g=this.json,C=this.extensions,Q=g.materials[A];let i;const o={},e=Q.extensions||{},s=[];if(e[qI.KHR_MATERIALS_UNLIT]){const n=C[qI.KHR_MATERIALS_UNLIT];i=n.getMaterialType(),s.push(n.extendParams(o,Q,I))}else{const n=Q.pbrMetallicRoughness||{};if(o.color=new yI(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){const r=n.baseColorFactor;o.color.setRGB(r[0],r[1],r[2],Kg),o.opacity=r[3]}n.baseColorTexture!==void 0&&s.push(I.assignTexture(o,"map",n.baseColorTexture,Eg)),o.metalness=n.metallicFactor!==void 0?n.metallicFactor:1,o.roughness=n.roughnessFactor!==void 0?n.roughnessFactor:1,n.metallicRoughnessTexture!==void 0&&(s.push(I.assignTexture(o,"metalnessMap",n.metallicRoughnessTexture)),s.push(I.assignTexture(o,"roughnessMap",n.metallicRoughnessTexture))),i=this._invokeOne(function(r){return r.getMaterialType&&r.getMaterialType(A)}),s.push(Promise.all(this._invokeAll(function(r){return r.extendMaterialParams&&r.extendMaterialParams(A,o)})))}Q.doubleSided===!0&&(o.side=oC);const D=Q.alphaMode||Yi.OPAQUE;if(D===Yi.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,D===Yi.MASK&&(o.alphaTest=Q.alphaCutoff!==void 0?Q.alphaCutoff:.5)),Q.normalTexture!==void 0&&i!==zg&&(s.push(I.assignTexture(o,"normalMap",Q.normalTexture)),o.normalScale=new VI(1,1),Q.normalTexture.scale!==void 0)){const n=Q.normalTexture.scale;o.normalScale.set(n,n)}if(Q.occlusionTexture!==void 0&&i!==zg&&(s.push(I.assignTexture(o,"aoMap",Q.occlusionTexture)),Q.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=Q.occlusionTexture.strength)),Q.emissiveFactor!==void 0&&i!==zg){const n=Q.emissiveFactor;o.emissive=new yI().setRGB(n[0],n[1],n[2],Kg)}return Q.emissiveTexture!==void 0&&i!==zg&&s.push(I.assignTexture(o,"emissiveMap",Q.emissiveTexture,Eg)),Promise.all(s).then(function(){const n=new i(o);return Q.name&&(n.name=Q.name),VC(n,Q),I.associations.set(n,{materials:A}),Q.extensions&&QB(C,n,Q),n})}createUniqueName(A){const I=zI.sanitizeNodeName(A||"");return I in this.nodeNamesUsed?I+"_"+ ++this.nodeNamesUsed[I]:(this.nodeNamesUsed[I]=0,I)}loadGeometries(A){const I=this,g=this.extensions,C=this.primitiveCache;function Q(o){return g[qI.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,I).then(function(e){return de(e,o,I)})}const i=[];for(let o=0,e=A.length;o<e;o++){const s=A[o],D=ZG(s),n=C[D];if(n)i.push(n.promise);else{let r;s.extensions&&s.extensions[qI.KHR_DRACO_MESH_COMPRESSION]?r=Q(s):r=de(new BC,s,I),C[D]={primitive:s,promise:r},i.push(r)}}return Promise.all(i)}loadMesh(A){const I=this,g=this.json,C=this.extensions,Q=g.meshes[A],i=Q.primitives,o=[];for(let e=0,s=i.length;e<s;e++){const D=i[e].material===void 0?VG(this.cache):this.getDependency("material",i[e].material);o.push(D)}return o.push(I.loadGeometries(i)),Promise.all(o).then(function(e){const s=e.slice(0,e.length-1),D=e[e.length-1],n=[];for(let F=0,l=D.length;F<l;F++){const S=D[F],G=i[F];let w;const Y=s[F];if(G.mode===vg.TRIANGLES||G.mode===vg.TRIANGLE_STRIP||G.mode===vg.TRIANGLE_FAN||G.mode===void 0)w=Q.isSkinnedMesh===!0?new Dc(S,Y):new Sg(S,Y),w.isSkinnedMesh===!0&&w.normalizeSkinWeights(),G.mode===vg.TRIANGLE_STRIP?w.geometry=le(w.geometry,Ve):G.mode===vg.TRIANGLE_FAN&&(w.geometry=le(w.geometry,xi));else if(G.mode===vg.LINES)w=new cc(S,Y);else if(G.mode===vg.LINE_STRIP)w=new so(S,Y);else if(G.mode===vg.LINE_LOOP)w=new Gc(S,Y);else if(G.mode===vg.POINTS)w=new Rc(S,Y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+G.mode);Object.keys(w.geometry.morphAttributes).length>0&&OG(w,Q),w.name=I.createUniqueName(Q.name||"mesh_"+A),VC(w,Q),G.extensions&&QB(C,w,G),I.assignFinalMaterial(w),n.push(w)}for(let F=0,l=n.length;F<l;F++)I.associations.set(n[F],{meshes:A,primitives:F});if(n.length===1)return Q.extensions&&QB(C,n[0],Q),n[0];const r=new SC;Q.extensions&&QB(C,r,Q),I.associations.set(r,{meshes:A});for(let F=0,l=n.length;F<l;F++)r.add(n[F]);return r})}loadCamera(A){let I;const g=this.json.cameras[A],C=g[g.type];if(!C){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return g.type==="perspective"?I=new Hg(Bn.radToDeg(C.yfov),C.aspectRatio||1,C.znear||1,C.zfar||2e6):g.type==="orthographic"&&(I=new io(-C.xmag,C.xmag,C.ymag,-C.ymag,C.znear,C.zfar)),g.name&&(I.name=this.createUniqueName(g.name)),VC(I,g),Promise.resolve(I)}loadSkin(A){const I=this.json.skins[A],g=[];for(let C=0,Q=I.joints.length;C<Q;C++)g.push(this._loadNodeShallow(I.joints[C]));return I.inverseBindMatrices!==void 0?g.push(this.getDependency("accessor",I.inverseBindMatrices)):g.push(null),Promise.all(g).then(function(C){const Q=C.pop(),i=C,o=[],e=[];for(let s=0,D=i.length;s<D;s++){const n=i[s];if(n){o.push(n);const r=new kI;Q!==null&&r.fromArray(Q.array,s*16),e.push(r)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',I.joints[s])}return new eo(o,e)})}loadAnimation(A){const I=this.json,g=this,C=I.animations[A],Q=C.name?C.name:"animation_"+A,i=[],o=[],e=[],s=[],D=[];for(let n=0,r=C.channels.length;n<r;n++){const F=C.channels[n],l=C.samplers[F.sampler],S=F.target,G=S.node,w=C.parameters!==void 0?C.parameters[l.input]:l.input,Y=C.parameters!==void 0?C.parameters[l.output]:l.output;S.node!==void 0&&(i.push(this.getDependency("node",G)),o.push(this.getDependency("accessor",w)),e.push(this.getDependency("accessor",Y)),s.push(l),D.push(S))}return Promise.all([Promise.all(i),Promise.all(o),Promise.all(e),Promise.all(s),Promise.all(D)]).then(function(n){const r=n[0],F=n[1],l=n[2],S=n[3],G=n[4],w=[];for(let Y=0,K=r.length;Y<K;Y++){const f=r[Y],q=F[Y],b=l[Y],T=S[Y],BA=G[Y];if(f===void 0)continue;f.updateMatrix&&f.updateMatrix();const d=g._createAnimationTracks(f,q,b,T,BA);if(d)for(let x=0;x<d.length;x++)w.push(d[x])}return new vi(Q,void 0,w)})}createNodeMesh(A){const I=this.json,g=this,C=I.nodes[A];return C.mesh===void 0?null:g.getDependency("mesh",C.mesh).then(function(Q){const i=g._getNodeRef(g.meshCache,C.mesh,Q);return C.weights!==void 0&&i.traverse(function(o){if(o.isMesh)for(let e=0,s=C.weights.length;e<s;e++)o.morphTargetInfluences[e]=C.weights[e]}),i})}loadNode(A){const I=this.json,g=this,C=I.nodes[A],Q=g._loadNodeShallow(A),i=[],o=C.children||[];for(let s=0,D=o.length;s<D;s++)i.push(g.getDependency("node",o[s]));const e=C.skin===void 0?Promise.resolve(null):g.getDependency("skin",C.skin);return Promise.all([Q,Promise.all(i),e]).then(function(s){const D=s[0],n=s[1],r=s[2];r!==null&&D.traverse(function(F){F.isSkinnedMesh&&F.bind(r,XG)});for(let F=0,l=n.length;F<l;F++)D.add(n[F]);return D})}_loadNodeShallow(A){const I=this.json,g=this.extensions,C=this;if(this.nodeCache[A]!==void 0)return this.nodeCache[A];const Q=I.nodes[A],i=Q.name?C.createUniqueName(Q.name):"",o=[],e=C._invokeOne(function(s){return s.createNodeMesh&&s.createNodeMesh(A)});return e&&o.push(e),Q.camera!==void 0&&o.push(C.getDependency("camera",Q.camera).then(function(s){return C._getNodeRef(C.cameraCache,Q.camera,s)})),C._invokeAll(function(s){return s.createNodeAttachment&&s.createNodeAttachment(A)}).forEach(function(s){o.push(s)}),this.nodeCache[A]=Promise.all(o).then(function(s){let D;if(Q.isBone===!0?D=new as:s.length>1?D=new SC:s.length===1?D=s[0]:D=new Dg,D!==s[0])for(let n=0,r=s.length;n<r;n++)D.add(s[n]);if(Q.name&&(D.userData.name=Q.name,D.name=i),VC(D,Q),Q.extensions&&QB(g,D,Q),Q.matrix!==void 0){const n=new kI;n.fromArray(Q.matrix),D.applyMatrix4(n)}else Q.translation!==void 0&&D.position.fromArray(Q.translation),Q.rotation!==void 0&&D.quaternion.fromArray(Q.rotation),Q.scale!==void 0&&D.scale.fromArray(Q.scale);return C.associations.has(D)||C.associations.set(D,{}),C.associations.get(D).nodes=A,D}),this.nodeCache[A]}loadScene(A){const I=this.extensions,g=this.json.scenes[A],C=this,Q=new SC;g.name&&(Q.name=C.createUniqueName(g.name)),VC(Q,g),g.extensions&&QB(I,Q,g);const i=g.nodes||[],o=[];for(let e=0,s=i.length;e<s;e++)o.push(C.getDependency("node",i[e]));return Promise.all(o).then(function(e){for(let D=0,n=e.length;D<n;D++)Q.add(e[D]);const s=D=>{const n=new Map;for(const[r,F]of C.associations)(r instanceof eC||r instanceof Ug)&&n.set(r,F);return D.traverse(r=>{const F=C.associations.get(r);F!=null&&n.set(r,F)}),n};return C.associations=s(Q),Q})}_createAnimationTracks(A,I,g,C,Q){const i=[],o=A.name?A.name:A.uuid,e=[];bC[Q.path]===bC.weights?A.traverse(function(r){r.morphTargetInfluences&&e.push(r.name?r.name:r.uuid)}):e.push(o);let s;switch(bC[Q.path]){case bC.weights:s=_B;break;case bC.rotation:s=hB;break;case bC.position:case bC.scale:s=$B;break;default:switch(g.itemSize){case 1:s=_B;break;case 2:case 3:default:s=$B;break}break}const D=C.interpolation!==void 0?TG[C.interpolation]:PB,n=this._getArrayFromAccessor(g);for(let r=0,F=e.length;r<F;r++){const l=new s(e[r]+"."+bC[Q.path],I.array,n,D);C.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(l),i.push(l)}return i}_getArrayFromAccessor(A){let I=A.array;if(A.normalized){const g=$i(I.constructor),C=new Float32Array(I.length);for(let Q=0,i=I.length;Q<i;Q++)C[Q]=I[Q]*g;I=C}return I}_createCubicSplineTrackInterpolant(A){A.createInterpolant=function(g){const C=this instanceof hB?bG:Ss;return new C(this.times,this.values,this.getValueSize()/3,g)},A.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function jG(B,A,I){const g=A.attributes,C=new dC;if(g.POSITION!==void 0){const o=I.json.accessors[g.POSITION],e=o.min,s=o.max;if(e!==void 0&&s!==void 0){if(C.set(new Z(e[0],e[1],e[2]),new Z(s[0],s[1],s[2])),o.normalized){const D=$i(OB[o.componentType]);C.min.multiplyScalar(D),C.max.multiplyScalar(D)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const Q=A.targets;if(Q!==void 0){const o=new Z,e=new Z;for(let s=0,D=Q.length;s<D;s++){const n=Q[s];if(n.POSITION!==void 0){const r=I.json.accessors[n.POSITION],F=r.min,l=r.max;if(F!==void 0&&l!==void 0){if(e.setX(Math.max(Math.abs(F[0]),Math.abs(l[0]))),e.setY(Math.max(Math.abs(F[1]),Math.abs(l[1]))),e.setZ(Math.max(Math.abs(F[2]),Math.abs(l[2]))),r.normalized){const S=$i(OB[r.componentType]);e.multiplyScalar(S)}o.max(e)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}C.expandByVector(o)}B.boundingBox=C;const i=new sC;C.getCenter(i.center),i.radius=C.min.distanceTo(C.max)/2,B.boundingSphere=i}function de(B,A,I){const g=A.attributes,C=[];function Q(i,o){return I.getDependency("accessor",i).then(function(e){B.setAttribute(o,e)})}for(const i in g){const o=_i[i]||i.toLowerCase();o in B.attributes||C.push(Q(g[i],o))}if(A.indices!==void 0&&!B.index){const i=I.getDependency("accessor",A.indices).then(function(o){B.setIndex(o)});C.push(i)}return _I.workingColorSpace!==Kg&&"COLOR_0"in g&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${_I.workingColorSpace}" not supported.`),VC(B,A),jG(B,A,I),Promise.all(C).then(function(){return A.targets!==void 0?WG(B,A.targets,I):B})}const xE=new Ms({container:document.querySelector("#container")}),zG=new wG;var bE=new ao,Us=bE.load("/textures/rayavu.png");Us.colorSpace=Eg;var wo=bE.load("/textures/spritesheet.jpg");wo.colorSpace=Eg;var Ks=bE.load("/textures/thalappavu.png");Ks.colorSpace=Eg;var ds=bE.load("/textures/kannadi.png");ds.colorSpace=Eg;const ks=new zg({color:255,colorWrite:!1}),{renderer:Li,scene:Js,camera:_G}=xE,Ys=xE.addAnchor(1),co=xE.addFaceMesh();new ao().load("https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.2/examples/face-tracking/assets/canonical_face_model_uv_visualization.png");co.material=ks;co.material.needsUpdate=!0;Js.add(co);const fs=new IQ(1,1.35),$G=new IQ(1,.756),AR=new IQ(1,.391),IR=new zg({map:Us,transparent:!0,depthWrite:!1}),wB=new Sg(fs,IR),gR=new zg({map:wo}),EQ=new Sg(fs,gR);new iR(wo,6,4,100);const CR=new zg({map:Ks,transparent:!0,depthWrite:!1}),TE=new Sg($G,CR),BR=new zg({map:ds,transparent:!0,depthWrite:!1}),Ls=new Sg(AR,BR);wB.scale.set(5,5,5);wB.position.set(.15,-2.9,0);EQ.scale.set(8,8,8);EQ.position.z=-1;wB.position.z=-.5;TE.scale.set(1.25,1.25,1.25);TE.position.set(.03,.62,-.04);Ls.position.y=.15;wB.scale.set(2,2,2);wB.position.set(.05,-1.38,-.5);EQ.scale.set(5,5,5);EQ.position.set(0,0,-1);EQ.renderOrder=0;wB.renderOrder=1;TE.renderOrder=5;Ls.renderOrder=4;Ys.group.add(EQ,wB,TE);let TC,ke;zG.load("/textures/headOccluder.glb",function(B){TC=B.scene,ke=new zc(TC),TC.traverse(I=>{I.isMesh&&(I.material=ks,I.material.needsUpdate=!0)}),B.animations.forEach(I=>{const g=ke.clipAction(I);g.reset(),g.timeScale=1.5,g.setLoop(Te),g.play()});var A=.07;TC.scale.set(A,A,A),console.log(TC.scale),console.log(TC.rotation),TC.renderOrder=0,Ys.group.add(TC)},function(B){},function(B){console.log("An error happened"+B)});var Ao=!1;const QR=async()=>{await xE.start(),Li.setAnimationLoop(()=>{Li.render(Js,_G),Ao&&(Li.preserveDrawingBuffer=!0,ER(),Ao=!1)})};QR();stopButton.addEventListener("click",()=>{Ao=!0});const ER=()=>{const B=document.querySelector("#container").children[0],A=document.querySelector("#container").children[2];var I=parseInt(A.style.left,10),g=document.createElement("canvas");g.width=window.innerWidth,g.height=window.innerHeight;var C=parseInt(A.style.width,10),Q=parseInt(A.style.height,10),i=Q/C*2;console.log(i),console.log(-I),console.log(A.height,A.style.height),console.log(-I*(Q/C)),console.log(C,Q),console.log(Q*i),console.log(window.innerWidth,window.innerHeight);var o=Math.max(window.innerWidth/B.width,window.innerHeight/B.height);console.log("RATIO "+o);var e=(g.width-B.width*o)/2,s=(g.height-B.height*o)/2,D=g.getContext("2d");D.clearRect(0,0,g.width,g.height),D.save(),D.scale(-1,1),D.translate(-g.width,0),D.drawImage(A,0,0,A.width,A.height,e,s,B.width*o,B.height*o),D.setTransform(1,0,0,1,0,0),D.restore(),D.drawImage(B,0,0,B.width,B.height,e,s,B.width*o,B.height*o),D.save();const n=g.toDataURL("img/jpeg");var r=document.createElement("a");r.href=n,r.download="My Total Royal Twist.jpeg",r.click()};function iR(B,A,I,g){let C={};return C.texture=B,C.tilesHorizontal=A,C.tilesVertical=I,C.tileDisplayDuration=g,C.numberOfTiles=A*I,C.texture.wrapS=PC,C.texture.wrapT=PC,C.texture.repeat.set(1/A,1/I),C.currentTile=0,C.nextFrame=function(){C.currentTile++,C.currentTile==C.numberOfTiles&&(C.currentTile=0);let Q=C.currentTile%C.tilesHorizontal;C.texture.offset.x=Q/C.tilesHorizontal;let i=Math.floor(C.currentTile/C.tilesHorizontal);C.texture.offset.y=C.tilesVertical-i/C.tilesVertical},C.start=function(){C.intervalID=setInterval(C.nextFrame,C.tileDisplayDuration)},C.stop=function(){clearInterval(C.intervalID)},C.start(),C}