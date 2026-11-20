var uc=0,no=1,dc=2;var dr=1,fc=2,vn=3,Fn=0,Xe=1,Ke=2,Dn=0,Di=1,io=2,so=3,ro=4,pc=5,ti=100,mc=101,gc=102,ao=103,oo=104,_c=200,xc=201,vc=202,yc=203,aa=204,oa=205,Mc=206,Sc=207,bc=208,Ec=209,Tc=210,wc=211,Ac=212,Rc=213,Cc=214,Pc=0,Ic=1,Lc=2,ks=3,Dc=4,Uc=5,Nc=6,Fc=7,Il=0,Oc=1,Bc=2,Un=0,zc=1,kc=2,Vc=3,Hc=4,Gc=5,Wc=6,Xc=7;var Ll=300,Fi=301,Oi=302,la=303,ca=304,fr=306,Bi=1e3,nn=1001,ha=1002,Re=1003,lo=1004;var Ji=1005;var Ge=1006,wr=1007;var ni=1008;var Nn=1009,qc=1010,Yc=1011,Ha=1012,Dl=1013,Ln=1014,yn=1015,ns=1016,Ul=1017,Nl=1018,ii=1020,Zc=1021,sn=1023,Jc=1024,$c=1025,si=1026,zi=1027,Kc=1028,Fl=1029,jc=1030,Ol=1031,Bl=1033,Ar=33776,Rr=33777,Cr=33778,Pr=33779,co=35840,ho=35841,uo=35842,fo=35843,zl=36196,po=37492,mo=37496,go=37808,_o=37809,xo=37810,vo=37811,yo=37812,Mo=37813,So=37814,bo=37815,Eo=37816,To=37817,wo=37818,Ao=37819,Ro=37820,Co=37821,Ir=36492,Po=36494,Io=36495,Qc=36283,Lo=36284,Do=36285,Uo=36286;var Vs=2300,Hs=2301,Lr=2302,No=2400,Fo=2401,Oo=2402;var th=3200,Ga=3201,kl=0,eh=1,In="",Je="srgb",Vn="srgb-linear",Wa="display-p3",pr="display-p3-linear",Gs="linear",he="srgb",Ws="rec709",Xs="p3";var fi=7680;var Bo=519,nh=512,ih=513,sh=514,Vl=515,rh=516,ah=517,oh=518,lh=519,zo=35044;var ko="300 es",ua=1035,Mn=2e3,qs=2001,On=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Dr=Math.PI/180,da=180/Math.PI;function us(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function We(i,t,e){return Math.max(t,Math.min(e,i))}function ch(i,t){return(i%t+t)%t}function Ur(i,t,e){return(1-e)*i+e*t}function Vo(i){return(i&i-1)===0&&i!==0}function fa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $i(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Xt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],x=s[0],p=s[3],u=s[6],M=s[1],_=s[4],C=s[7],I=s[2],A=s[5],S=s[8];return r[0]=o*x+a*M+l*I,r[3]=o*p+a*_+l*A,r[6]=o*u+a*C+l*S,r[1]=c*x+h*M+d*I,r[4]=c*p+h*_+d*A,r[7]=c*u+h*C+d*S,r[2]=f*x+m*M+g*I,r[5]=f*p+m*_+g*A,r[8]=f*u+m*C+g*S,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,m=c*r-o*l,g=e*d+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=m*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Nr.makeScale(t,e)),this}rotate(t){return this.premultiply(Nr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Nr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Nr=new Yt;function Hl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hh(){let i=Ys("canvas");return i.style.display="block",i}var Ho={};function uh(i){i in Ho||(Ho[i]=!0,console.warn(i))}var Go=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wo=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xs={[Vn]:{transfer:Gs,primaries:Ws,toReference:i=>i,fromReference:i=>i},[Je]:{transfer:he,primaries:Ws,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[pr]:{transfer:Gs,primaries:Xs,toReference:i=>i.applyMatrix3(Wo),fromReference:i=>i.applyMatrix3(Go)},[Wa]:{transfer:he,primaries:Xs,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Wo),fromReference:i=>i.applyMatrix3(Go).convertLinearToSRGB()}},dh=new Set([Vn,pr]),ie={enabled:!0,_workingColorSpace:Vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!dh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=xs[t].toReference,s=xs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return xs[i].primaries},getTransfer:function(i){return i===In?Gs:xs[i].transfer}};function Ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var pi,Zs=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{pi===void 0&&(pi=Ys("canvas")),pi.width=t.width,pi.height=t.height;let n=pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ys("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ui(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ui(e[n]/255)*255):e[n]=Ui(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},fh=0,Js=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=us(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Or(s[o].image)):r.push(Or(s[o]))}else r=Or(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Or(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zs.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ph=0,Ie=class i extends On{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=nn,s=nn,r=Ge,o=ni,a=sn,l=Nn,c=i.DEFAULT_ANISOTROPY,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=us(),this.name="",this.source=new Js(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ll)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bi:t.x=t.x-Math.floor(t.x);break;case nn:t.x=t.x<0?0:1;break;case ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bi:t.y=t.y-Math.floor(t.y);break;case nn:t.y=t.y<0?0:1;break;case ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}};Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=Ll;Ie.DEFAULT_ANISOTROPY=1;var Te=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,C=(m+1)/2,I=(u+1)/2,A=(h+f)/4,S=(d+x)/4,D=(g+p)/4;return _>C&&_>I?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=S/n):C>I?C<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(C),n=A/s,r=D/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=S/r,s=D/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-x)/M,this.z=(f-h)/M,this.w=Math.acos((c+m+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pa=class extends On{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);let r=new Ie(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Js(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends pa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},$s=class extends Ie{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ma=class extends Ie{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],m=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=x;return}if(d!==x||l!==f||c!==m||h!==g){let p=1-a,u=l*f+c*m+h*g+d*x,M=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){let I=Math.sqrt(_),A=Math.atan2(I,u*M);p=Math.sin(p*A)/I,a=Math.sin(a*A)/I}let C=a*M;if(l=l*p+f*C,c=c*p+m*C,h=h*p+g*C,d=d*p+x*C,p===1-a){let I=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=I,c*=I,h*=I,d*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*m-c*f,t[e+1]=l*g+h*f+c*d-a*m,t[e+2]=c*g+h*m+a*f-l*d,t[e+3]=h*g-a*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>d){let m=2*Math.sqrt(1+n-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){let m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xo.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Br.copy(this).projectOnVector(t),this.sub(Br)}reflect(t){return this.sub(Br.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Br=new V,Xo=new Bn,ri=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,je):je.fromBufferAttribute(r,o),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vs.copy(n.boundingBox)),vs.applyMatrix4(t.matrixWorld),this.union(vs)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ki),ys.subVectors(this.max,Ki),mi.subVectors(t.a,Ki),gi.subVectors(t.b,Ki),_i.subVectors(t.c,Ki),Tn.subVectors(gi,mi),wn.subVectors(_i,gi),Yn.subVectors(mi,_i);let e=[0,-Tn.z,Tn.y,0,-wn.z,wn.y,0,-Yn.z,Yn.y,Tn.z,0,-Tn.x,wn.z,0,-wn.x,Yn.z,0,-Yn.x,-Tn.y,Tn.x,0,-wn.y,wn.x,0,-Yn.y,Yn.x,0];return!zr(e,mi,gi,_i,ys)||(e=[1,0,0,0,1,0,0,0,1],!zr(e,mi,gi,_i,ys))?!1:(Ms.crossVectors(Tn,wn),e=[Ms.x,Ms.y,Ms.z],zr(e,mi,gi,_i,ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},pn=[new V,new V,new V,new V,new V,new V,new V,new V],je=new V,vs=new ri,mi=new V,gi=new V,_i=new V,Tn=new V,wn=new V,Yn=new V,Ki=new V,ys=new V,Ms=new V,Zn=new V;function zr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Zn.fromArray(i,r);let a=s.x*Math.abs(Zn.x)+s.y*Math.abs(Zn.y)+s.z*Math.abs(Zn.z),l=t.dot(Zn),c=e.dot(Zn),h=n.dot(Zn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var mh=new ri,ji=new V,kr=new V,is=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):mh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ji.subVectors(t,this.center);let e=ji.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ji,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ji.copy(t.center).add(kr)),this.expandByPoint(ji.copy(t.center).sub(kr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},mn=new V,Vr=new V,Ss=new V,An=new V,Hr=new V,bs=new V,Gr=new V,Ks=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Vr.copy(t).add(e).multiplyScalar(.5),Ss.copy(e).sub(t).normalize(),An.copy(this.origin).sub(Vr);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ss),a=An.dot(this.direction),l=-An.dot(Ss),c=An.lengthSq(),h=Math.abs(1-o*o),d,f,m,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){let x=1/h;d*=x,f*=x,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Vr).addScaledVector(Ss,f),m}intersectSphere(t,e){mn.subVectors(t.center,this.origin);let n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,s,r){Hr.subVectors(e,t),bs.subVectors(n,t),Gr.crossVectors(Hr,bs);let o=this.direction.dot(Gr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;An.subVectors(this.origin,t);let l=a*this.direction.dot(bs.crossVectors(An,bs));if(l<0)return null;let c=a*this.direction.dot(Hr.cross(An));if(c<0||l+c>o)return null;let h=-a*An.dot(Gr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_e=class i{constructor(t,e,n,s,r,o,a,l,c,h,d,f,m,g,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,f,m,g,x,p)}set(t,e,n,s,r,o,a,l,c,h,d,f,m,g,x,p){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/xi.setFromMatrixColumn(t,0).length(),r=1/xi.setFromMatrixColumn(t,1).length(),o=1/xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,m=o*d,g=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,m=l*d,g=c*h,x=c*d;e[0]=f+x*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,m=l*d,g=c*h,x=c*d;e[0]=f-x*a,e[4]=-o*d,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,m=o*d,g=a*h,x=a*d;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+x,e[1]=l*d,e[5]=x*c+f,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,m=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*d,e[8]=g*d+m,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*d+g,e[10]=f-x*d}else if(t.order==="XZY"){let f=o*l,m=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+x,e[5]=o*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=a*h,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gh,t,_h)}lookAt(t,e,n){let s=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Rn.crossVectors(n,Ye),Rn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Rn.crossVectors(n,Ye)),Rn.normalize(),Es.crossVectors(Ye,Rn),s[0]=Rn.x,s[4]=Es.x,s[8]=Ye.x,s[1]=Rn.y,s[5]=Es.y,s[9]=Ye.y,s[2]=Rn.z,s[6]=Es.z,s[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],x=n[6],p=n[10],u=n[14],M=n[3],_=n[7],C=n[11],I=n[15],A=s[0],S=s[4],D=s[8],X=s[12],y=s[1],T=s[5],Q=s[9],F=s[13],R=s[2],H=s[6],z=s[10],Z=s[14],J=s[3],K=s[7],et=s[11],nt=s[15];return r[0]=o*A+a*y+l*R+c*J,r[4]=o*S+a*T+l*H+c*K,r[8]=o*D+a*Q+l*z+c*et,r[12]=o*X+a*F+l*Z+c*nt,r[1]=h*A+d*y+f*R+m*J,r[5]=h*S+d*T+f*H+m*K,r[9]=h*D+d*Q+f*z+m*et,r[13]=h*X+d*F+f*Z+m*nt,r[2]=g*A+x*y+p*R+u*J,r[6]=g*S+x*T+p*H+u*K,r[10]=g*D+x*Q+p*z+u*et,r[14]=g*X+x*F+p*Z+u*nt,r[3]=M*A+_*y+C*R+I*J,r[7]=M*S+_*T+C*H+I*K,r[11]=M*D+_*Q+C*z+I*et,r[15]=M*X+_*F+C*Z+I*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],m=t[14],g=t[3],x=t[7],p=t[11],u=t[15];return g*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*m-n*l*m)+x*(+e*l*m-e*c*f+r*o*f-s*o*m+s*c*h-r*l*h)+p*(+e*c*d-e*a*m-r*o*d+n*o*m+r*a*h-n*c*h)+u*(-s*a*h-e*l*d+e*a*f+s*o*d-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],m=t[11],g=t[12],x=t[13],p=t[14],u=t[15],M=d*p*c-x*f*c+x*l*m-a*p*m-d*l*u+a*f*u,_=g*f*c-h*p*c-g*l*m+o*p*m+h*l*u-o*f*u,C=h*x*c-g*d*c+g*a*m-o*x*m-h*a*u+o*d*u,I=g*d*l-h*x*l-g*a*f+o*x*f+h*a*p-o*d*p,A=e*M+n*_+s*C+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/A;return t[0]=M*S,t[1]=(x*f*r-d*p*r-x*s*m+n*p*m+d*s*u-n*f*u)*S,t[2]=(a*p*r-x*l*r+x*s*c-n*p*c-a*s*u+n*l*u)*S,t[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*m-n*l*m)*S,t[4]=_*S,t[5]=(h*p*r-g*f*r+g*s*m-e*p*m-h*s*u+e*f*u)*S,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*u-e*l*u)*S,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*m+e*l*m)*S,t[8]=C*S,t[9]=(g*d*r-h*x*r-g*n*m+e*x*m+h*n*u-e*d*u)*S,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*u+e*a*u)*S,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*m-e*a*m)*S,t[12]=I*S,t[13]=(h*x*s-g*d*s+g*n*f-e*x*f-h*n*p+e*d*p)*S,t[14]=(g*a*s-o*x*s-g*n*l+e*x*l+o*n*p-e*a*p)*S,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*f+e*a*f)*S,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,m=r*h,g=r*d,x=o*h,p=o*d,u=a*d,M=l*c,_=l*h,C=l*d,I=n.x,A=n.y,S=n.z;return s[0]=(1-(x+u))*I,s[1]=(m+C)*I,s[2]=(g-_)*I,s[3]=0,s[4]=(m-C)*A,s[5]=(1-(f+u))*A,s[6]=(p+M)*A,s[7]=0,s[8]=(g+_)*S,s[9]=(p-M)*S,s[10]=(1-(f+x))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=xi.set(s[0],s[1],s[2]).length(),o=xi.set(s[4],s[5],s[6]).length(),a=xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Qe.copy(this);let c=1/r,h=1/o,d=1/a;return Qe.elements[0]*=c,Qe.elements[1]*=c,Qe.elements[2]*=c,Qe.elements[4]*=h,Qe.elements[5]*=h,Qe.elements[6]*=h,Qe.elements[8]*=d,Qe.elements[9]*=d,Qe.elements[10]*=d,e.setFromRotationMatrix(Qe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Mn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),m,g;if(a===Mn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===qs)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Mn){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),f=(e+t)*c,m=(n+s)*h,g,x;if(a===Mn)g=(o+r)*d,x=-2*d;else if(a===qs)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},xi=new V,Qe=new _e,gh=new V(0,0,0),_h=new V(1,1,1),Rn=new V,Es=new V,Ye=new V,qo=new _e,Yo=new Bn,un=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yo.setFromEuler(this),this.setFromQuaternion(Yo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER="XYZ";var ss=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xh=0,Zo=new V,vi=new Bn,gn=new _e,Ts=new V,Qi=new V,vh=new V,yh=new Bn,Jo=new V(1,0,0),$o=new V(0,1,0),Ko=new V(0,0,1),Mh={type:"added"},Sh={type:"removed"},Wr={type:"childadded",child:null},Xr={type:"childremoved",child:null},ze=class i extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new V,e=new un,n=new Bn,s=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new Yt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vi.setFromAxisAngle(t,e),this.quaternion.multiply(vi),this}rotateOnWorldAxis(t,e){return vi.setFromAxisAngle(t,e),this.quaternion.premultiply(vi),this}rotateX(t){return this.rotateOnAxis(Jo,t)}rotateY(t){return this.rotateOnAxis($o,t)}rotateZ(t){return this.rotateOnAxis(Ko,t)}translateOnAxis(t,e){return Zo.copy(t).applyQuaternion(this.quaternion),this.position.add(Zo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jo,t)}translateY(t){return this.translateOnAxis($o,t)}translateZ(t){return this.translateOnAxis(Ko,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ts.copy(t):Ts.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Qi,Ts,this.up):gn.lookAt(Ts,Qi,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),vi.setFromRotationMatrix(gn),this.quaternion.premultiply(vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Mh),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sh),Xr.child=t,this.dispatchEvent(Xr),Xr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,t,vh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,yh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ze.DEFAULT_UP=new V(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tn=new V,_n=new V,qr=new V,xn=new V,yi=new V,Mi=new V,jo=new V,Yr=new V,Zr=new V,Jr=new V,Ci=class i{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),tn.subVectors(t,e),s.cross(tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){tn.subVectors(s,e),_n.subVectors(n,e),qr.subVectors(t,e);let o=tn.dot(tn),a=tn.dot(_n),l=tn.dot(qr),c=_n.dot(_n),h=_n.dot(qr),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xn.x),l.addScaledVector(o,xn.y),l.addScaledVector(a,xn.z),l)}static isFrontFacing(t,e,n,s){return tn.subVectors(n,e),_n.subVectors(t,e),tn.cross(_n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),tn.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;yi.subVectors(s,n),Mi.subVectors(r,n),Yr.subVectors(t,n);let l=yi.dot(Yr),c=Mi.dot(Yr);if(l<=0&&c<=0)return e.copy(n);Zr.subVectors(t,s);let h=yi.dot(Zr),d=Mi.dot(Zr);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(yi,o);Jr.subVectors(t,r);let m=yi.dot(Jr),g=Mi.dot(Jr);if(g>=0&&m<=g)return e.copy(r);let x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Mi,a);let p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return jo.subVectors(r,s),a=(d-h)/(d-h+(m-g)),e.copy(s).addScaledVector(jo,a);let u=1/(p+x+f);return o=x*u,a=f*u,e.copy(n).addScaledVector(yi,o).addScaledVector(Mi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},ws={h:0,s:0,l:0};function $r(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=ch(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=$r(o,r,t+1/3),this.g=$r(o,r,t),this.b=$r(o,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=Je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){let n=Gl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=Fr(t.r),this.g=Fr(t.g),this.b=Fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return ie.fromWorkingColorSpace(Pe.copy(this),t),Math.round(We(Pe.r*255,0,255))*65536+Math.round(We(Pe.g*255,0,255))*256+Math.round(We(Pe.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Pe.copy(this),e);let n=Pe.r,s=Pe.g,r=Pe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=Je){ie.fromWorkingColorSpace(Pe.copy(this),t);let e=Pe.r,n=Pe.g,s=Pe.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Cn),this.setHSL(Cn.h+t,Cn.s+e,Cn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Cn),t.getHSL(ws);let n=Ur(Cn.h,ws.h,e),s=Ur(Cn.s,ws.s,e),r=Ur(Cn.l,ws.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pe=new Kt;Kt.NAMES=Gl;var bh=0,zn=class extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=us(),this.name="",this.type="Material",this.blending=Di,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=aa,this.blendDst=oa,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==aa&&(n.blendSrc=this.blendSrc),this.blendDst!==oa&&(n.blendDst=this.blendDst),this.blendEquation!==ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},js=class extends zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ye=new V,As=new Xt,we=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return uh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)As.fromBufferAttribute(this,e),As.applyMatrix3(t),this.setXY(e,As.x,As.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$i(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$i(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$i(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zo&&(t.usage=this.usage),t}};var Qs=class extends we{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var tr=class extends we{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Sn=class extends we{constructor(t,e,n){super(new Float32Array(t),e,n)}},Eh=0,$e=new _e,Kr=new ze,Si=new V,Ze=new ri,ts=new ri,Ee=new V,ai=class i extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hl(t)?tr:Qs)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return Kr.lookAt(t),Kr.updateMatrix(),this.applyMatrix4(Kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Sn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ts.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(Ze.min,ts.min),Ze.expandByPoint(Ee),Ee.addVectors(Ze.max,ts.max),Ze.expandByPoint(Ee)):(Ze.expandByPoint(ts.min),Ze.expandByPoint(ts.max))}Ze.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ee));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ee.fromBufferAttribute(a,c),l&&(Si.fromBufferAttribute(t,c),Ee.add(Si)),s=Math.max(s,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new we(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new V,l[D]=new V;let c=new V,h=new V,d=new V,f=new Xt,m=new Xt,g=new Xt,x=new V,p=new V;function u(D,X,y){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,X),d.fromBufferAttribute(n,y),f.fromBufferAttribute(r,D),m.fromBufferAttribute(r,X),g.fromBufferAttribute(r,y),h.sub(c),d.sub(c),m.sub(f),g.sub(f);let T=1/(m.x*g.y-g.x*m.y);isFinite(T)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(T),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(T),a[D].add(x),a[X].add(x),a[y].add(x),l[D].add(p),l[X].add(p),l[y].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let D=0,X=M.length;D<X;++D){let y=M[D],T=y.start,Q=y.count;for(let F=T,R=T+Q;F<R;F+=3)u(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let _=new V,C=new V,I=new V,A=new V;function S(D){I.fromBufferAttribute(s,D),A.copy(I);let X=a[D];_.copy(X),_.sub(I.multiplyScalar(I.dot(X))).normalize(),C.crossVectors(A,X);let T=C.dot(l[D])<0?-1:1;o.setXYZW(D,_.x,_.y,_.z,T)}for(let D=0,X=M.length;D<X;++D){let y=M[D],T=y.start,Q=y.count;for(let F=T,R=T+Q;F<R;F+=3)S(t.getX(F+0)),S(t.getX(F+1)),S(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,h=new V,d=new V;if(t)for(let f=0,m=t.count;f<m;f+=3){let g=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),m=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*h;for(let u=0;u<h;u++)f[g++]=c[m++]}return new we(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qo=new _e,Jn=new Ks,Rs=new is,tl=new V,bi=new V,Ei=new V,Ti=new V,jr=new V,Cs=new V,Ps=new Xt,Is=new Xt,Ls=new Xt,el=new V,nl=new V,il=new V,Ds=new V,Us=new V,Be=class extends ze{constructor(t=new ai,e=new js){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Cs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(jr.fromBufferAttribute(d,t),o?Cs.addScaledVector(jr,h):Cs.addScaledVector(jr.sub(e),h))}e.add(Cs)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(r),Jn.copy(t.ray).recast(t.near),!(Rs.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Rs,tl)===null||Jn.origin.distanceToSquared(tl)>(t.far-t.near)**2))&&(Qo.copy(r).invert(),Jn.copy(t.ray).applyMatrix4(Qo),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Jn)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],u=o[p.materialIndex],M=Math.max(p.start,m.start),_=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let C=M,I=_;C<I;C+=3){let A=a.getX(C),S=a.getX(C+1),D=a.getX(C+2);s=Ns(this,u,t,n,c,h,d,A,S,D),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=g,u=x;p<u;p+=3){let M=a.getX(p),_=a.getX(p+1),C=a.getX(p+2);s=Ns(this,o,t,n,c,h,d,M,_,C),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],u=o[p.materialIndex],M=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let C=M,I=_;C<I;C+=3){let A=C,S=C+1,D=C+2;s=Ns(this,u,t,n,c,h,d,A,S,D),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,u=x;p<u;p+=3){let M=p,_=p+1,C=p+2;s=Ns(this,o,t,n,c,h,d,M,_,C),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Th(i,t,e,n,s,r,o,a){let l;if(t.side===Xe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Fn,a),l===null)return null;Us.copy(a),Us.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Us);return c<e.near||c>e.far?null:{distance:c,point:Us.clone(),object:i}}function Ns(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,bi),i.getVertexPosition(l,Ei),i.getVertexPosition(c,Ti);let h=Th(i,t,e,n,bi,Ei,Ti,Ds);if(h){s&&(Ps.fromBufferAttribute(s,a),Is.fromBufferAttribute(s,l),Ls.fromBufferAttribute(s,c),h.uv=Ci.getInterpolation(Ds,bi,Ei,Ti,Ps,Is,Ls,new Xt)),r&&(Ps.fromBufferAttribute(r,a),Is.fromBufferAttribute(r,l),Ls.fromBufferAttribute(r,c),h.uv1=Ci.getInterpolation(Ds,bi,Ei,Ti,Ps,Is,Ls,new Xt)),o&&(el.fromBufferAttribute(o,a),nl.fromBufferAttribute(o,l),il.fromBufferAttribute(o,c),h.normal=Ci.getInterpolation(Ds,bi,Ei,Ti,el,nl,il,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new V,materialIndex:0};Ci.getNormal(bi,Ei,Ti,d.normal),h.face=d}return h}var kn=class i extends ai{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Sn(c,3)),this.setAttribute("normal",new Sn(h,3)),this.setAttribute("uv",new Sn(d,2));function g(x,p,u,M,_,C,I,A,S,D,X){let y=C/S,T=I/D,Q=C/2,F=I/2,R=A/2,H=S+1,z=D+1,Z=0,J=0,K=new V;for(let et=0;et<z;et++){let nt=et*T-F;for(let ht=0;ht<H;ht++){let Ft=ht*y-Q;K[x]=Ft*M,K[p]=nt*_,K[u]=R,c.push(K.x,K.y,K.z),K[x]=0,K[p]=0,K[u]=A>0?1:-1,h.push(K.x,K.y,K.z),d.push(ht/S),d.push(1-et/D),Z+=1}}for(let et=0;et<D;et++)for(let nt=0;nt<S;nt++){let ht=f+nt+H*et,Ft=f+nt+H*(et+1),q=f+(nt+1)+H*(et+1),st=f+(nt+1)+H*et;l.push(ht,Ft,st),l.push(Ft,q,st),J+=6}a.addGroup(m,J,X),m+=J,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ki(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Fe(i){let t={};for(let e=0;e<i.length;e++){let n=ki(i[e]);for(let s in n)t[s]=n[s]}return t}function wh(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wl(i){return i.getRenderTarget()===null?i.outputColorSpace:ie.workingColorSpace}var Ah={clone:ki,merge:Fe},Rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ch=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rh,this.fragmentShader=Ch,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ki(t.uniforms),this.uniformsGroups=wh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},er=class extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pn=new V,sl=new Xt,rl=new Xt,Oe=class extends er{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=da*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return da*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z)}getViewSize(t,e){return this.getViewBounds(t,sl,rl),e.subVectors(rl,sl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},wi=-90,Ai=1,ga=class extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Oe(wi,Ai,t,e);s.layers=this.layers,this.add(s);let r=new Oe(wi,Ai,t,e);r.layers=this.layers,this.add(r);let o=new Oe(wi,Ai,t,e);o.layers=this.layers,this.add(o);let a=new Oe(wi,Ai,t,e);a.layers=this.layers,this.add(a);let l=new Oe(wi,Ai,t,e);l.layers=this.layers,this.add(l);let c=new Oe(wi,Ai,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},nr=class extends Ie{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Fi,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_a=class extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new nr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ge}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kn(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:Dn});r.uniforms.tEquirect.value=e;let o=new Be(s,r),a=e.minFilter;return e.minFilter===ni&&(e.minFilter=Ge),new ga(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Qr=new V,Ph=new V,Ih=new Yt,en=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Qr.subVectors(n,e).cross(Ph.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Qr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ih.getNormalMatrix(t),s=this.coplanarPoint(Qr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},$n=new is,Fs=new V,rs=class{constructor(t=new en,e=new en,n=new en,s=new en,r=new en,o=new en){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],m=s[8],g=s[9],x=s[10],p=s[11],u=s[12],M=s[13],_=s[14],C=s[15];if(n[0].setComponents(l-r,f-c,p-m,C-u).normalize(),n[1].setComponents(l+r,f+c,p+m,C+u).normalize(),n[2].setComponents(l+o,f+h,p+g,C+M).normalize(),n[3].setComponents(l-o,f-h,p-g,C-M).normalize(),n[4].setComponents(l-a,f-d,p-x,C-_).normalize(),e===Mn)n[5].setComponents(l+a,f+d,p+x,C+_).normalize();else if(e===qs)n[5].setComponents(a,d,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(t){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(t.matrixWorld),this.intersectsSphere($n)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Fs.x=s.normal.x>0?t.max.x:t.min.x,Fs.y=s.normal.y>0?t.max.y:t.min.y,Fs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Xl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Lh(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let d=c.array,f=c.usage,m=d.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,d,f),c.onUploadCallback();let x;if(d instanceof Float32Array)x=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=i.SHORT;else if(d instanceof Uint32Array)x=i.UNSIGNED_INT;else if(d instanceof Int32Array)x=i.INT;else if(d instanceof Int8Array)x=i.BYTE;else if(d instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,d){let f=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(d,c),m.count===-1&&g.length===0&&i.bufferSubData(d,0,f),g.length!==0){for(let x=0,p=g.length;x<p;x++){let u=g[x];e?i.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):i.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}var oi=class i extends ai{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,m=[],g=[],x=[],p=[];for(let u=0;u<h;u++){let M=u*f-o;for(let _=0;_<c;_++){let C=_*d-r;g.push(C,-M,0),x.push(0,0,1),p.push(_/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let M=0;M<a;M++){let _=M+c*u,C=M+c*(u+1),I=M+1+c*(u+1),A=M+1+c*u;m.push(_,C,A),m.push(C,I,A)}this.setIndex(m),this.setAttribute("position",new Sn(g,3)),this.setAttribute("normal",new Sn(x,3)),this.setAttribute("uv",new Sn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Dh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uh=`#ifdef USE_ALPHAHASH
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
#endif`,Nh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zh=`#ifdef USE_AOMAP
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
#endif`,kh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vh=`#ifdef USE_BATCHING
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
#endif`,Hh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Gh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qh=`#ifdef USE_IRIDESCENCE
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
#endif`,Yh=`#ifdef USE_BUMPMAP
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
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$h=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,nu=`#define PI 3.141592653589793
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
} // validated`,iu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,su=`vec3 transformedNormal = objectNormal;
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
#endif`,ru=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,au=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ou=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cu="gl_FragColor = linearToOutputTexel( gl_FragColor );",hu=`
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
}`,uu=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,du=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fu=`#ifdef USE_ENVMAP
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
#endif`,pu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mu=`#ifdef USE_ENVMAP
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
#endif`,gu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_u=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yu=`#ifdef USE_GRADIENTMAP
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
}`,Mu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Su=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tu=`uniform bool receiveShadow;
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
#endif`,wu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Au=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ru=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Iu=`PhysicalMaterial material;
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
#endif`,Lu=`struct PhysicalMaterial {
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
}`,Du=`
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
#endif`,Uu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ou=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ku=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gu=`#if defined( USE_POINTS_UV )
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
#endif`,Wu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zu=`#ifdef USE_MORPHNORMALS
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
#endif`,Ju=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
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
#endif`,$u=`#ifdef USE_MORPHTARGETS
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
#endif`,Ku=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ju=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ed=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nd=`#ifdef USE_NORMALMAP
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
#endif`,id=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ad=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,od=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ld=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ud=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,md=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_d=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xd=`float getShadowMask() {
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
}`,vd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yd=`#ifdef USE_SKINNING
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
#endif`,Md=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sd=`#ifdef USE_SKINNING
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
#endif`,bd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ed=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Td=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wd=`#ifndef saturate
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ad=`#ifdef USE_TRANSMISSION
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
#endif`,Rd=`#ifdef USE_TRANSMISSION
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
#endif`,Cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ld=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Dd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ud=`uniform sampler2D t2D;
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
}`,Nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zd=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,kd=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
}`,Vd=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Hd=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xd=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qd=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yd=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Zd=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Jd=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,$d=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Kd=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,jd=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Qd=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,tf=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ef=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,nf=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,sf=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,rf=`#define STANDARD
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,af=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,of=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,lf=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,cf=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,hf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,uf=`uniform vec3 color;
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
}`,df=`uniform float rotation;
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
}`,ff=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,qt={alphahash_fragment:Dh,alphahash_pars_fragment:Uh,alphamap_fragment:Nh,alphamap_pars_fragment:Fh,alphatest_fragment:Oh,alphatest_pars_fragment:Bh,aomap_fragment:zh,aomap_pars_fragment:kh,batching_pars_vertex:Vh,batching_vertex:Hh,begin_vertex:Gh,beginnormal_vertex:Wh,bsdfs:Xh,iridescence_fragment:qh,bumpmap_pars_fragment:Yh,clipping_planes_fragment:Zh,clipping_planes_pars_fragment:Jh,clipping_planes_pars_vertex:$h,clipping_planes_vertex:Kh,color_fragment:jh,color_pars_fragment:Qh,color_pars_vertex:tu,color_vertex:eu,common:nu,cube_uv_reflection_fragment:iu,defaultnormal_vertex:su,displacementmap_pars_vertex:ru,displacementmap_vertex:au,emissivemap_fragment:ou,emissivemap_pars_fragment:lu,colorspace_fragment:cu,colorspace_pars_fragment:hu,envmap_fragment:uu,envmap_common_pars_fragment:du,envmap_pars_fragment:fu,envmap_pars_vertex:pu,envmap_physical_pars_fragment:wu,envmap_vertex:mu,fog_vertex:gu,fog_pars_vertex:_u,fog_fragment:xu,fog_pars_fragment:vu,gradientmap_pars_fragment:yu,lightmap_fragment:Mu,lightmap_pars_fragment:Su,lights_lambert_fragment:bu,lights_lambert_pars_fragment:Eu,lights_pars_begin:Tu,lights_toon_fragment:Au,lights_toon_pars_fragment:Ru,lights_phong_fragment:Cu,lights_phong_pars_fragment:Pu,lights_physical_fragment:Iu,lights_physical_pars_fragment:Lu,lights_fragment_begin:Du,lights_fragment_maps:Uu,lights_fragment_end:Nu,logdepthbuf_fragment:Fu,logdepthbuf_pars_fragment:Ou,logdepthbuf_pars_vertex:Bu,logdepthbuf_vertex:zu,map_fragment:ku,map_pars_fragment:Vu,map_particle_fragment:Hu,map_particle_pars_fragment:Gu,metalnessmap_fragment:Wu,metalnessmap_pars_fragment:Xu,morphinstance_vertex:qu,morphcolor_vertex:Yu,morphnormal_vertex:Zu,morphtarget_pars_vertex:Ju,morphtarget_vertex:$u,normal_fragment_begin:Ku,normal_fragment_maps:ju,normal_pars_fragment:Qu,normal_pars_vertex:td,normal_vertex:ed,normalmap_pars_fragment:nd,clearcoat_normal_fragment_begin:id,clearcoat_normal_fragment_maps:sd,clearcoat_pars_fragment:rd,iridescence_pars_fragment:ad,opaque_fragment:od,packing:ld,premultiplied_alpha_fragment:cd,project_vertex:hd,dithering_fragment:ud,dithering_pars_fragment:dd,roughnessmap_fragment:fd,roughnessmap_pars_fragment:pd,shadowmap_pars_fragment:md,shadowmap_pars_vertex:gd,shadowmap_vertex:_d,shadowmask_pars_fragment:xd,skinbase_vertex:vd,skinning_pars_vertex:yd,skinning_vertex:Md,skinnormal_vertex:Sd,specularmap_fragment:bd,specularmap_pars_fragment:Ed,tonemapping_fragment:Td,tonemapping_pars_fragment:wd,transmission_fragment:Ad,transmission_pars_fragment:Rd,uv_pars_fragment:Cd,uv_pars_vertex:Pd,uv_vertex:Id,worldpos_vertex:Ld,background_vert:Dd,background_frag:Ud,backgroundCube_vert:Nd,backgroundCube_frag:Fd,cube_vert:Od,cube_frag:Bd,depth_vert:zd,depth_frag:kd,distanceRGBA_vert:Vd,distanceRGBA_frag:Hd,equirect_vert:Gd,equirect_frag:Wd,linedashed_vert:Xd,linedashed_frag:qd,meshbasic_vert:Yd,meshbasic_frag:Zd,meshlambert_vert:Jd,meshlambert_frag:$d,meshmatcap_vert:Kd,meshmatcap_frag:jd,meshnormal_vert:Qd,meshnormal_frag:tf,meshphong_vert:ef,meshphong_frag:nf,meshphysical_vert:sf,meshphysical_frag:rf,meshtoon_vert:af,meshtoon_frag:of,points_vert:lf,points_frag:cf,shadow_vert:hf,shadow_frag:uf,sprite_vert:df,sprite_frag:ff},ct={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},hn={basic:{uniforms:Fe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Fe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Kt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Fe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Fe([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Fe([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Kt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Fe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Fe([ct.points,ct.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Fe([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Fe([ct.common,ct.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Fe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Fe([ct.sprite,ct.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Fe([ct.common,ct.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Fe([ct.lights,ct.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};hn.physical={uniforms:Fe([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var Os={r:0,b:0,g:0},Kn=new un,pf=new _e;function mf(i,t,e,n,s,r,o){let a=new Kt(0),l=r===!0?0:1,c,h,d=null,f=0,m=null;function g(p,u){let M=!1,_=u.isScene===!0?u.background:null;_&&_.isTexture&&(_=(u.backgroundBlurriness>0?e:t).get(_)),_===null?x(a,l):_&&_.isColor&&(x(_,1),M=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===fr)?(h===void 0&&(h=new Be(new kn(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:ki(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Kn.copy(u.backgroundRotation),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pf.makeRotationFromEuler(Kn)),h.material.toneMapped=ie.getTransfer(_.colorSpace)!==he,(d!==_||f!==_.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=_,f=_.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Be(new oi(2,2),new dn({name:"BackgroundMaterial",uniforms:ki(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=ie.getTransfer(_.colorSpace)!==he,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,u){p.getRGB(Os,Wl(i)),n.buffers.color.setClear(Os.r,Os.g,Os.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:g}}function gf(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null),c=l,h=!1;function d(R,H,z,Z,J){let K=!1;if(o){let et=x(Z,z,H);c!==et&&(c=et,m(c.object)),K=u(R,Z,z,J),K&&M(R,Z,z,J)}else{let et=H.wireframe===!0;(c.geometry!==Z.id||c.program!==z.id||c.wireframe!==et)&&(c.geometry=Z.id,c.program=z.id,c.wireframe=et,K=!0)}J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,D(R,H,z,Z),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?i.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?i.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function x(R,H,z){let Z=z.wireframe===!0,J=a[R.id];J===void 0&&(J={},a[R.id]=J);let K=J[H.id];K===void 0&&(K={},J[H.id]=K);let et=K[Z];return et===void 0&&(et=p(f()),K[Z]=et),et}function p(R){let H=[],z=[],Z=[];for(let J=0;J<s;J++)H[J]=0,z[J]=0,Z[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:z,attributeDivisors:Z,object:R,attributes:{},index:null}}function u(R,H,z,Z){let J=c.attributes,K=H.attributes,et=0,nt=z.getAttributes();for(let ht in nt)if(nt[ht].location>=0){let q=J[ht],st=K[ht];if(st===void 0&&(ht==="instanceMatrix"&&R.instanceMatrix&&(st=R.instanceMatrix),ht==="instanceColor"&&R.instanceColor&&(st=R.instanceColor)),q===void 0||q.attribute!==st||st&&q.data!==st.data)return!0;et++}return c.attributesNum!==et||c.index!==Z}function M(R,H,z,Z){let J={},K=H.attributes,et=0,nt=z.getAttributes();for(let ht in nt)if(nt[ht].location>=0){let q=K[ht];q===void 0&&(ht==="instanceMatrix"&&R.instanceMatrix&&(q=R.instanceMatrix),ht==="instanceColor"&&R.instanceColor&&(q=R.instanceColor));let st={};st.attribute=q,q&&q.data&&(st.data=q.data),J[ht]=st,et++}c.attributes=J,c.attributesNum=et,c.index=Z}function _(){let R=c.newAttributes;for(let H=0,z=R.length;H<z;H++)R[H]=0}function C(R){I(R,0)}function I(R,H){let z=c.newAttributes,Z=c.enabledAttributes,J=c.attributeDivisors;z[R]=1,Z[R]===0&&(i.enableVertexAttribArray(R),Z[R]=1),J[R]!==H&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,H),J[R]=H)}function A(){let R=c.newAttributes,H=c.enabledAttributes;for(let z=0,Z=H.length;z<Z;z++)H[z]!==R[z]&&(i.disableVertexAttribArray(z),H[z]=0)}function S(R,H,z,Z,J,K,et){et===!0?i.vertexAttribIPointer(R,H,z,J,K):i.vertexAttribPointer(R,H,z,Z,J,K)}function D(R,H,z,Z){if(n.isWebGL2===!1&&(R.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let J=Z.attributes,K=z.getAttributes(),et=H.defaultAttributeValues;for(let nt in K){let ht=K[nt];if(ht.location>=0){let Ft=J[nt];if(Ft===void 0&&(nt==="instanceMatrix"&&R.instanceMatrix&&(Ft=R.instanceMatrix),nt==="instanceColor"&&R.instanceColor&&(Ft=R.instanceColor)),Ft!==void 0){let q=Ft.normalized,st=Ft.itemSize,pt=e.get(Ft);if(pt===void 0)continue;let Ut=pt.buffer,Et=pt.type,_t=pt.bytesPerElement,Ot=n.isWebGL2===!0&&(Et===i.INT||Et===i.UNSIGNED_INT||Ft.gpuType===Dl);if(Ft.isInterleavedBufferAttribute){let Tt=Ft.data,N=Tt.stride,pe=Ft.offset;if(Tt.isInstancedInterleavedBuffer){for(let vt=0;vt<ht.locationSize;vt++)I(ht.location+vt,Tt.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let vt=0;vt<ht.locationSize;vt++)C(ht.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Ut);for(let vt=0;vt<ht.locationSize;vt++)S(ht.location+vt,st/ht.locationSize,Et,q,N*_t,(pe+st/ht.locationSize*vt)*_t,Ot)}else{if(Ft.isInstancedBufferAttribute){for(let Tt=0;Tt<ht.locationSize;Tt++)I(ht.location+Tt,Ft.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ft.meshPerAttribute*Ft.count)}else for(let Tt=0;Tt<ht.locationSize;Tt++)C(ht.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,Ut);for(let Tt=0;Tt<ht.locationSize;Tt++)S(ht.location+Tt,st/ht.locationSize,Et,q,st*_t,st/ht.locationSize*Tt*_t,Ot)}}else if(et!==void 0){let q=et[nt];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(ht.location,q);break;case 3:i.vertexAttrib3fv(ht.location,q);break;case 4:i.vertexAttrib4fv(ht.location,q);break;default:i.vertexAttrib1fv(ht.location,q)}}}}A()}function X(){Q();for(let R in a){let H=a[R];for(let z in H){let Z=H[z];for(let J in Z)g(Z[J].object),delete Z[J];delete H[z]}delete a[R]}}function y(R){if(a[R.id]===void 0)return;let H=a[R.id];for(let z in H){let Z=H[z];for(let J in Z)g(Z[J].object),delete Z[J];delete H[z]}delete a[R.id]}function T(R){for(let H in a){let z=a[H];if(z[R.id]===void 0)continue;let Z=z[R.id];for(let J in Z)g(Z[J].object),delete Z[J];delete z[R.id]}}function Q(){F(),h=!0,c!==l&&(c=l,m(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:F,dispose:X,releaseStatesOfGeometry:y,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:C,disableUnusedAttributes:A}}function _f(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,d){i.drawArrays(r,h,d),e.update(d,r,1)}function l(h,d,f){if(f===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,d,f),e.update(d,r,f)}function c(h,d,f){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=d[x];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function xf(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let S=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,C=o||t.has("OES_texture_float"),I=_&&C,A=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:C,floatVertexTextures:I,maxSamples:A}}function vf(i){let t=this,e=null,n=0,s=!1,r=!1,o=new en,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){let g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let M=r?0:n,_=M*4,C=u.clippingState||null;l.value=C,C=h(g,f,_,m);for(let I=0;I!==_;++I)C[I]=e[I];u.clippingState=C,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,m,g){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let u=m+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<u)&&(p=new Float32Array(u));for(let _=0,C=m;_!==x;++_,C+=4)o.copy(d[_]).applyMatrix4(M,a),o.normal.toArray(p,C),p[C+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function yf(i){let t=new WeakMap;function e(o,a){return a===la?o.mapping=Fi:a===ca&&(o.mapping=Oi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===la||a===ca)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new _a(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ir=class extends er{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Pi=4,al=[.125,.215,.35,.446,.526,.582],ei=20,ta=new ir,ol=new Kt,ea=null,na=0,ia=0,Qn=(1+Math.sqrt(5))/2,Ri=1/Qn,ll=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Qn,Ri),new V(0,Qn,-Ri),new V(Ri,0,Qn),new V(-Ri,0,Qn),new V(Qn,Ri,0),new V(-Qn,Ri,0)],sr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ea=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ea,na,ia),t.scissorTest=!1,Bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fi||t.mapping===Oi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ea=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:ns,format:sn,colorSpace:Vn,depthBuffer:!1},s=cl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mf(r)),this._blurMaterial=Sf(r,t,e)}return s}_compileMaterial(t){let e=new Be(this._lodPlanes[0],t);this._renderer.compile(e,ta)}_sceneToCubeUV(t,e,n,s){let a=new Oe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(ol),h.toneMapping=Un,h.autoClear=!1;let m=new js({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),g=new Be(new kn,m),x=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,x=!0):(m.color.copy(ol),x=!0);for(let u=0;u<6;u++){let M=u%3;M===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):M===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let _=this._cubeSize;Bs(s,M*_,u>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Fi||t.mapping===Oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hl());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Bs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ta)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ll[(s-1)%ll.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Be(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ei-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):ei;p>ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ei}`);let u=[],M=0;for(let S=0;S<ei;++S){let D=S/x,X=Math.exp(-D*D/2);u.push(X),S===0?M+=X:S<p&&(M+=2*X)}for(let S=0;S<u.length;S++)u[S]=u[S]/M;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;let C=this._sizeLods[s],I=3*C*(s>_-Pi?s-_+Pi:0),A=4*(this._cubeSize-C);Bs(e,I,A,3*C,2*C),l.setRenderTarget(e),l.render(d,ta)}};function Mf(i){let t=[],e=[],n=[],s=i,r=i-Pi+1+al.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Pi?l=al[o-i+Pi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,x=3,p=2,u=1,M=new Float32Array(x*g*m),_=new Float32Array(p*g*m),C=new Float32Array(u*g*m);for(let A=0;A<m;A++){let S=A%3*2/3-1,D=A>2?0:-1,X=[S,D,0,S+2/3,D,0,S+2/3,D+1,0,S,D,0,S+2/3,D+1,0,S,D+1,0];M.set(X,x*g*A),_.set(f,p*g*A);let y=[A,A,A,A,A,A];C.set(y,u*g*A)}let I=new ai;I.setAttribute("position",new we(M,x)),I.setAttribute("uv",new we(_,p)),I.setAttribute("faceIndex",new we(C,u)),t.push(I),s>Pi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function cl(i,t,e){let n=new bn(i,t,e);return n.texture.mapping=fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Sf(i,t,e){let n=new Float32Array(ei),s=new V(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function hl(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function ul(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Xa(){return`

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
	`}function bf(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===la||l===ca,h=l===Fi||l===Oi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new sr(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||h&&d&&s(d)){e===null&&(e=new sr(i));let f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ef(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Tf(i,t,e,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let p=0,u=x.length;p<u;p++)t.remove(x[p])}f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let x=m[g];for(let p=0,u=x.length;p<u;p++)t.update(x[p],i.ARRAY_BUFFER)}}function c(d){let f=[],m=d.index,g=d.attributes.position,x=0;if(m!==null){let M=m.array;x=m.version;for(let _=0,C=M.length;_<C;_+=3){let I=M[_+0],A=M[_+1],S=M[_+2];f.push(I,A,A,S,S,I)}}else if(g!==void 0){let M=g.array;x=g.version;for(let _=0,C=M.length/3-1;_<C;_+=3){let I=_+0,A=_+1,S=_+2;f.push(I,A,A,S,S,I)}}else return;let p=new(Hl(f)?tr:Qs)(f,1);p.version=x;let u=r.get(d);u&&t.remove(u),r.set(d,p)}function h(d){let f=r.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function wf(i,t,e,n){let s=n.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){i.drawElements(r,g,a,m*l),e.update(g,r,1)}function d(m,g,x){if(x===0)return;let p,u;if(s)p=i,u="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,g,a,m*l,x),e.update(g,r,x)}function f(m,g,x){if(x===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<x;u++)this.render(m[u]/l,g[u]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,x);let u=0;for(let M=0;M<x;M++)u+=g[M];e.update(u,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function Af(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Rf(i,t){return i[0]-t[0]}function Cf(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Pf(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new Te,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,x=r.get(h);if(x===void 0||x.count!==g){let Q=function(){y.dispose(),r.delete(h),h.removeEventListener("dispose",Q)};x!==void 0&&x.texture.dispose();let p=h.morphAttributes.position!==void 0,u=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],I=h.morphAttributes.color||[],A=0;p===!0&&(A=1),u===!0&&(A=2),M===!0&&(A=3);let S=h.attributes.position.count*A,D=1;S>t.maxTextureSize&&(D=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let X=new Float32Array(S*D*4*g),y=new $s(X,S,D,g);y.type=yn,y.needsUpdate=!0;let T=A*4;for(let F=0;F<g;F++){let R=_[F],H=C[F],z=I[F],Z=S*D*4*F;for(let J=0;J<R.count;J++){let K=J*T;p===!0&&(o.fromBufferAttribute(R,J),X[Z+K+0]=o.x,X[Z+K+1]=o.y,X[Z+K+2]=o.z,X[Z+K+3]=0),u===!0&&(o.fromBufferAttribute(H,J),X[Z+K+4]=o.x,X[Z+K+5]=o.y,X[Z+K+6]=o.z,X[Z+K+7]=0),M===!0&&(o.fromBufferAttribute(z,J),X[Z+K+8]=o.x,X[Z+K+9]=o.y,X[Z+K+10]=o.z,X[Z+K+11]=z.itemSize===4?o.w:1)}}x={count:g,texture:y,size:new Xt(S,D)},r.set(h,x),h.addEventListener("dispose",Q)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",c.morphTexture,e);else{let p=0;for(let M=0;M<f.length;M++)p+=f[M];let u=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(i,"morphTargetBaseInfluence",u),d.getUniforms().setValue(i,"morphTargetInfluences",f)}d.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),d.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let m=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let _=0;_<m;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<m;_++){let C=g[_];C[0]=_,C[1]=f[_]}g.sort(Cf);for(let _=0;_<8;_++)_<m&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Rf);let x=h.morphAttributes.position,p=h.morphAttributes.normal,u=0;for(let _=0;_<8;_++){let C=a[_],I=C[0],A=C[1];I!==Number.MAX_SAFE_INTEGER&&A?(x&&h.getAttribute("morphTarget"+_)!==x[I]&&h.setAttribute("morphTarget"+_,x[I]),p&&h.getAttribute("morphNormal"+_)!==p[I]&&h.setAttribute("morphNormal"+_,p[I]),s[_]=A,u+=A):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),p&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let M=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(i,"morphTargetBaseInfluence",M),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function If(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var rr=class extends Ie{constructor(t,e,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:si,h!==si&&h!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===si&&(n=Ln),n===void 0&&h===zi&&(n=ii),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Re,this.minFilter=l!==void 0?l:Re,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ql=new Ie,Yl=new rr(1,1);Yl.compareFunction=Vl;var Zl=new $s,Jl=new ma,$l=new nr,dl=[],fl=[],pl=new Float32Array(16),ml=new Float32Array(9),gl=new Float32Array(4);function Gi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=dl[s];if(r===void 0&&(r=new Float32Array(s),dl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function mr(i,t){let e=fl[t];e===void 0&&(e=new Int32Array(t),fl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Lf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Df(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),Se(e,t)}}function Uf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),Se(e,t)}}function Nf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),Se(e,t)}}function Ff(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;gl.set(n),i.uniformMatrix2fv(this.addr,!1,gl),Se(e,n)}}function Of(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;ml.set(n),i.uniformMatrix3fv(this.addr,!1,ml),Se(e,n)}}function Bf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;pl.set(n),i.uniformMatrix4fv(this.addr,!1,pl),Se(e,n)}}function zf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function kf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),Se(e,t)}}function Vf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),Se(e,t)}}function Hf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),Se(e,t)}}function Gf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),Se(e,t)}}function Xf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),Se(e,t)}}function qf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),Se(e,t)}}function Yf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Yl:ql;e.setTexture2D(t||r,s)}function Zf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jl,s)}function Jf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$l,s)}function $f(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Zl,s)}function Kf(i){switch(i){case 5126:return Lf;case 35664:return Df;case 35665:return Uf;case 35666:return Nf;case 35674:return Ff;case 35675:return Of;case 35676:return Bf;case 5124:case 35670:return zf;case 35667:case 35671:return kf;case 35668:case 35672:return Vf;case 35669:case 35673:return Hf;case 5125:return Gf;case 36294:return Wf;case 36295:return Xf;case 36296:return qf;case 35678:case 36198:case 36298:case 36306:case 35682:return Yf;case 35679:case 36299:case 36307:return Zf;case 35680:case 36300:case 36308:case 36293:return Jf;case 36289:case 36303:case 36311:case 36292:return $f}}function jf(i,t){i.uniform1fv(this.addr,t)}function Qf(i,t){let e=Gi(t,this.size,2);i.uniform2fv(this.addr,e)}function tp(i,t){let e=Gi(t,this.size,3);i.uniform3fv(this.addr,e)}function ep(i,t){let e=Gi(t,this.size,4);i.uniform4fv(this.addr,e)}function np(i,t){let e=Gi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ip(i,t){let e=Gi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function sp(i,t){let e=Gi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function rp(i,t){i.uniform1iv(this.addr,t)}function ap(i,t){i.uniform2iv(this.addr,t)}function op(i,t){i.uniform3iv(this.addr,t)}function lp(i,t){i.uniform4iv(this.addr,t)}function cp(i,t){i.uniform1uiv(this.addr,t)}function hp(i,t){i.uniform2uiv(this.addr,t)}function up(i,t){i.uniform3uiv(this.addr,t)}function dp(i,t){i.uniform4uiv(this.addr,t)}function fp(i,t,e){let n=this.cache,s=t.length,r=mr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ql,r[o])}function pp(i,t,e){let n=this.cache,s=t.length,r=mr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Jl,r[o])}function mp(i,t,e){let n=this.cache,s=t.length,r=mr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||$l,r[o])}function gp(i,t,e){let n=this.cache,s=t.length,r=mr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Zl,r[o])}function _p(i){switch(i){case 5126:return jf;case 35664:return Qf;case 35665:return tp;case 35666:return ep;case 35674:return np;case 35675:return ip;case 35676:return sp;case 5124:case 35670:return rp;case 35667:case 35671:return ap;case 35668:case 35672:return op;case 35669:case 35673:return lp;case 5125:return cp;case 36294:return hp;case 36295:return up;case 36296:return dp;case 35678:case 36198:case 36298:case 36306:case 35682:return fp;case 35679:case 36299:case 36307:return pp;case 35680:case 36300:case 36308:case 36293:return mp;case 36289:case 36303:case 36311:case 36292:return gp}}var xa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Kf(e.type)}},va=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_p(e.type)}},ya=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},sa=/(\w+)(\])?(\[|\.)?/g;function _l(i,t){i.seq.push(t),i.map[t.id]=t}function xp(i,t,e){let n=i.name,s=n.length;for(sa.lastIndex=0;;){let r=sa.exec(n),o=sa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){_l(e,c===void 0?new xa(a,i,t):new va(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new ya(a),_l(e,d)),e=d}}}var Ni=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);xp(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function xl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var vp=37297,yp=0;function Mp(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Sp(i){let t=ie.getPrimaries(ie.workingColorSpace),e=ie.getPrimaries(i),n;switch(t===e?n="":t===Xs&&e===Ws?n="LinearDisplayP3ToLinearSRGB":t===Ws&&e===Xs&&(n="LinearSRGBToLinearDisplayP3"),i){case Vn:case pr:return[n,"LinearTransferOETF"];case Je:case Wa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function vl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Mp(i.getShaderSource(t),o)}else return s}function bp(i,t){let e=Sp(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Ep(i,t){let e;switch(t){case zc:e="Linear";break;case kc:e="Reinhard";break;case Vc:e="OptimizedCineon";break;case Hc:e="ACESFilmic";break;case Wc:e="AgX";break;case Xc:e="Neutral";break;case Gc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Tp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ii).join(`
`)}function wp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ii).join(`
`)}function Ap(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rp(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ii(i){return i!==""}function yl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ml(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Cp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ma(i){return i.replace(Cp,Ip)}var Pp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ip(i,t){let e=qt[t];if(e===void 0){let n=Pp.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ma(e)}var Lp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sl(i){return i.replace(Lp,Dp)}function Dp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(t+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Up(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===dr?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===fc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function Np(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fi:case Oi:t="ENVMAP_TYPE_CUBE";break;case fr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Fp(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Oi&&(t="ENVMAP_MODE_REFRACTION"),t}function Op(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Il:t="ENVMAP_BLENDING_MULTIPLY";break;case Oc:t="ENVMAP_BLENDING_MIX";break;case Bc:t="ENVMAP_BLENDING_ADD";break}return t}function Bp(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function zp(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Up(e),c=Np(e),h=Fp(e),d=Op(e),f=Bp(e),m=e.isWebGL2?"":Tp(e),g=wp(e),x=Ap(r),p=s.createProgram(),u,M,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ii).join(`
`),u.length>0&&(u+=`
`),M=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ii).join(`
`),M.length>0&&(M+=`
`)):(u=[bl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),M=[m,bl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?qt.tonemapping_pars_fragment:"",e.toneMapping!==Un?Ep("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,bp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ii).join(`
`)),o=Ma(o),o=yl(o,e),o=Ml(o,e),a=Ma(a),a=yl(a,e),a=Ml(a,e),o=Sl(o),a=Sl(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,M=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let C=_+u+o,I=_+M+a,A=xl(s,s.VERTEX_SHADER,C),S=xl(s,s.FRAGMENT_SHADER,I);s.attachShader(p,A),s.attachShader(p,S),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function D(Q){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(p).trim(),R=s.getShaderInfoLog(A).trim(),H=s.getShaderInfoLog(S).trim(),z=!0,Z=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,A,S);else{let J=vl(s,A,"vertex"),K=vl(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+Q.name+`
Material Type: `+Q.type+`

Program Info Log: `+F+`
`+J+`
`+K)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(R===""||H==="")&&(Z=!1);Z&&(Q.diagnostics={runnable:z,programLog:F,vertexShader:{log:R,prefix:u},fragmentShader:{log:H,prefix:M}})}s.deleteShader(A),s.deleteShader(S),X=new Ni(s,p),y=Rp(s,p)}let X;this.getUniforms=function(){return X===void 0&&D(this),X};let y;this.getAttributes=function(){return y===void 0&&D(this),y};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(p,vp)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yp++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=S,this}var kp=0,Sa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ba(t),e.set(t,n)),n}},ba=class{constructor(t){this.id=kp++,this.code=t,this.usedTimes=0}};function Vp(i,t,e,n,s,r,o){let a=new ss,l=new Sa,c=new Set,h=[],d=s.isWebGL2,f=s.logarithmicDepthBuffer,m=s.vertexTextures,g=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,T,Q,F,R){let H=F.fog,z=R.geometry,Z=y.isMeshStandardMaterial?F.environment:null,J=(y.isMeshStandardMaterial?e:t).get(y.envMap||Z),K=J&&J.mapping===fr?J.image.height:null,et=x[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let nt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ht=nt!==void 0?nt.length:0,Ft=0;z.morphAttributes.position!==void 0&&(Ft=1),z.morphAttributes.normal!==void 0&&(Ft=2),z.morphAttributes.color!==void 0&&(Ft=3);let q,st,pt,Ut;if(et){let Qt=hn[et];q=Qt.vertexShader,st=Qt.fragmentShader}else q=y.vertexShader,st=y.fragmentShader,l.update(y),pt=l.getVertexShaderID(y),Ut=l.getFragmentShaderID(y);let Et=i.getRenderTarget(),_t=R.isInstancedMesh===!0,Ot=R.isBatchedMesh===!0,Tt=!!y.map,N=!!y.matcap,pe=!!J,vt=!!y.aoMap,zt=!!y.lightMap,bt=!!y.bumpMap,Ht=!!y.normalMap,Gt=!!y.displacementMap,Zt=!!y.emissiveMap,fe=!!y.metalnessMap,w=!!y.roughnessMap,v=y.anisotropy>0,Y=y.clearcoat>0,j=y.iridescence>0,rt=y.sheen>0,tt=y.transmission>0,kt=v&&!!y.anisotropyMap,gt=Y&&!!y.clearcoatMap,lt=Y&&!!y.clearcoatNormalMap,ut=Y&&!!y.clearcoatRoughnessMap,Lt=j&&!!y.iridescenceMap,at=j&&!!y.iridescenceThicknessMap,ue=rt&&!!y.sheenColorMap,Jt=rt&&!!y.sheenRoughnessMap,wt=!!y.specularMap,Mt=!!y.specularColorMap,St=!!y.specularIntensityMap,Dt=tt&&!!y.transmissionMap,At=tt&&!!y.thicknessMap,te=!!y.gradientMap,L=!!y.alphaMap,dt=y.alphaTest>0,k=!!y.alphaHash,ot=!!y.extensions,ft=Un;y.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(ft=i.toneMapping);let $t={isWebGL2:d,shaderID:et,shaderType:y.type,shaderName:y.name,vertexShader:q,fragmentShader:st,defines:y.defines,customVertexShaderID:pt,customFragmentShaderID:Ut,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Ot,instancing:_t,instancingColor:_t&&R.instanceColor!==null,instancingMorph:_t&&R.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Et===null?i.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:Vn,alphaToCoverage:!!y.alphaToCoverage,map:Tt,matcap:N,envMap:pe,envMapMode:pe&&J.mapping,envMapCubeUVHeight:K,aoMap:vt,lightMap:zt,bumpMap:bt,normalMap:Ht,displacementMap:m&&Gt,emissiveMap:Zt,normalMapObjectSpace:Ht&&y.normalMapType===eh,normalMapTangentSpace:Ht&&y.normalMapType===kl,metalnessMap:fe,roughnessMap:w,anisotropy:v,anisotropyMap:kt,clearcoat:Y,clearcoatMap:gt,clearcoatNormalMap:lt,clearcoatRoughnessMap:ut,iridescence:j,iridescenceMap:Lt,iridescenceThicknessMap:at,sheen:rt,sheenColorMap:ue,sheenRoughnessMap:Jt,specularMap:wt,specularColorMap:Mt,specularIntensityMap:St,transmission:tt,transmissionMap:Dt,thicknessMap:At,gradientMap:te,opaque:y.transparent===!1&&y.blending===Di&&y.alphaToCoverage===!1,alphaMap:L,alphaTest:dt,alphaHash:k,combine:y.combine,mapUv:Tt&&p(y.map.channel),aoMapUv:vt&&p(y.aoMap.channel),lightMapUv:zt&&p(y.lightMap.channel),bumpMapUv:bt&&p(y.bumpMap.channel),normalMapUv:Ht&&p(y.normalMap.channel),displacementMapUv:Gt&&p(y.displacementMap.channel),emissiveMapUv:Zt&&p(y.emissiveMap.channel),metalnessMapUv:fe&&p(y.metalnessMap.channel),roughnessMapUv:w&&p(y.roughnessMap.channel),anisotropyMapUv:kt&&p(y.anisotropyMap.channel),clearcoatMapUv:gt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:lt&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:at&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&p(y.sheenRoughnessMap.channel),specularMapUv:wt&&p(y.specularMap.channel),specularColorMapUv:Mt&&p(y.specularColorMap.channel),specularIntensityMapUv:St&&p(y.specularIntensityMap.channel),transmissionMapUv:Dt&&p(y.transmissionMap.channel),thicknessMapUv:At&&p(y.thicknessMap.channel),alphaMapUv:L&&p(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ht||v),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!z.attributes.uv&&(Tt||L),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:R.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Ft,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&Q.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Tt&&y.map.isVideoTexture===!0&&ie.getTransfer(y.map.colorSpace)===he,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ke,flipSided:y.side===Xe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ot&&y.extensions.derivatives===!0,extensionFragDepth:ot&&y.extensions.fragDepth===!0,extensionDrawBuffers:ot&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ot&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ot&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ot&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return $t.vertexUv1s=c.has(1),$t.vertexUv2s=c.has(2),$t.vertexUv3s=c.has(3),c.clear(),$t}function M(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let Q in y.defines)T.push(Q),T.push(y.defines[Q]);return y.isRawShaderMaterial===!1&&(_(T,y),C(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function _(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function C(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.instancingMorph&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.normalMapObjectSpace&&a.enable(7),T.normalMapTangentSpace&&a.enable(8),T.clearcoat&&a.enable(9),T.iridescence&&a.enable(10),T.alphaTest&&a.enable(11),T.vertexColors&&a.enable(12),T.vertexAlphas&&a.enable(13),T.vertexUv1s&&a.enable(14),T.vertexUv2s&&a.enable(15),T.vertexUv3s&&a.enable(16),T.vertexTangents&&a.enable(17),T.anisotropy&&a.enable(18),T.alphaHash&&a.enable(19),T.batching&&a.enable(20),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),y.push(a.mask)}function I(y){let T=x[y.type],Q;if(T){let F=hn[T];Q=Ah.clone(F.uniforms)}else Q=y.uniforms;return Q}function A(y,T){let Q;for(let F=0,R=h.length;F<R;F++){let H=h[F];if(H.cacheKey===T){Q=H,++Q.usedTimes;break}}return Q===void 0&&(Q=new zp(i,T,y,r),h.push(Q)),Q}function S(y){if(--y.usedTimes===0){let T=h.indexOf(y);h[T]=h[h.length-1],h.pop(),y.destroy()}}function D(y){l.remove(y)}function X(){l.dispose()}return{getParameters:u,getProgramCacheKey:M,getUniforms:I,acquireProgram:A,releaseProgram:S,releaseShaderCache:D,programs:h,dispose:X}}function Hp(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Gp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function El(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Tl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,m,g,x,p){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:x,group:p},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=x,u.group=p),t++,u}function a(d,f,m,g,x,p){let u=o(d,f,m,g,x,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(d,f,m,g,x,p){let u=o(d,f,m,g,x,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||Gp),n.length>1&&n.sort(f||El),s.length>1&&s.sort(f||El)}function h(){for(let d=t,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Wp(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Tl,i.set(n,[o])):s>=r.length?(o=new Tl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Xp(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new Kt};break;case"SpotLight":e={position:new V,direction:new V,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function qp(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Yp=0;function Zp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Jp(i,t){let e=new Xp,n=qp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new V);let r=new V,o=new _e,a=new _e;function l(h,d){let f=0,m=0,g=0;for(let Q=0;Q<9;Q++)s.probe[Q].set(0,0,0);let x=0,p=0,u=0,M=0,_=0,C=0,I=0,A=0,S=0,D=0,X=0;h.sort(Zp);let y=d===!0?Math.PI:1;for(let Q=0,F=h.length;Q<F;Q++){let R=h[Q],H=R.color,z=R.intensity,Z=R.distance,J=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=H.r*z*y,m+=H.g*z*y,g+=H.b*z*y;else if(R.isLightProbe){for(let K=0;K<9;K++)s.probe[K].addScaledVector(R.sh.coefficients[K],z);X++}else if(R.isDirectionalLight){let K=e.get(R);if(K.color.copy(R.color).multiplyScalar(R.intensity*y),R.castShadow){let et=R.shadow,nt=n.get(R);nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,s.directionalShadow[x]=nt,s.directionalShadowMap[x]=J,s.directionalShadowMatrix[x]=R.shadow.matrix,C++}s.directional[x]=K,x++}else if(R.isSpotLight){let K=e.get(R);K.position.setFromMatrixPosition(R.matrixWorld),K.color.copy(H).multiplyScalar(z*y),K.distance=Z,K.coneCos=Math.cos(R.angle),K.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),K.decay=R.decay,s.spot[u]=K;let et=R.shadow;if(R.map&&(s.spotLightMap[S]=R.map,S++,et.updateMatrices(R),R.castShadow&&D++),s.spotLightMatrix[u]=et.matrix,R.castShadow){let nt=n.get(R);nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,s.spotShadow[u]=nt,s.spotShadowMap[u]=J,A++}u++}else if(R.isRectAreaLight){let K=e.get(R);K.color.copy(H).multiplyScalar(z),K.halfWidth.set(R.width*.5,0,0),K.halfHeight.set(0,R.height*.5,0),s.rectArea[M]=K,M++}else if(R.isPointLight){let K=e.get(R);if(K.color.copy(R.color).multiplyScalar(R.intensity*y),K.distance=R.distance,K.decay=R.decay,R.castShadow){let et=R.shadow,nt=n.get(R);nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,nt.shadowCameraNear=et.camera.near,nt.shadowCameraFar=et.camera.far,s.pointShadow[p]=nt,s.pointShadowMap[p]=J,s.pointShadowMatrix[p]=R.shadow.matrix,I++}s.point[p]=K,p++}else if(R.isHemisphereLight){let K=e.get(R);K.skyColor.copy(R.color).multiplyScalar(z*y),K.groundColor.copy(R.groundColor).multiplyScalar(z*y),s.hemi[_]=K,_++}}M>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_FLOAT_1,s.rectAreaLTC2=ct.LTC_FLOAT_2):(s.rectAreaLTC1=ct.LTC_HALF_1,s.rectAreaLTC2=ct.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_FLOAT_1,s.rectAreaLTC2=ct.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_HALF_1,s.rectAreaLTC2=ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;let T=s.hash;(T.directionalLength!==x||T.pointLength!==p||T.spotLength!==u||T.rectAreaLength!==M||T.hemiLength!==_||T.numDirectionalShadows!==C||T.numPointShadows!==I||T.numSpotShadows!==A||T.numSpotMaps!==S||T.numLightProbes!==X)&&(s.directional.length=x,s.spot.length=u,s.rectArea.length=M,s.point.length=p,s.hemi.length=_,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=A+S-D,s.spotLightMap.length=S,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=X,T.directionalLength=x,T.pointLength=p,T.spotLength=u,T.rectAreaLength=M,T.hemiLength=_,T.numDirectionalShadows=C,T.numPointShadows=I,T.numSpotShadows=A,T.numSpotMaps=S,T.numLightProbes=X,s.version=Yp++)}function c(h,d){let f=0,m=0,g=0,x=0,p=0,u=d.matrixWorldInverse;for(let M=0,_=h.length;M<_;M++){let C=h[M];if(C.isDirectionalLight){let I=s.directional[f];I.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(u),f++}else if(C.isSpotLight){let I=s.spot[g];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(u),I.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(u),g++}else if(C.isRectAreaLight){let I=s.rectArea[x];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(u),a.identity(),o.copy(C.matrixWorld),o.premultiply(u),a.extractRotation(o),I.halfWidth.set(C.width*.5,0,0),I.halfHeight.set(0,C.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),x++}else if(C.isPointLight){let I=s.point[m];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(u),m++}else if(C.isHemisphereLight){let I=s.hemi[p];I.direction.setFromMatrixPosition(C.matrixWorld),I.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:s}}function wl(i,t){let e=new Jp(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(d){n.push(d)}function a(d){s.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function $p(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new wl(i,t),e.set(r,[l])):o>=a.length?(l=new wl(i,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var as=class extends zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=th,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ea=class extends zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Kp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jp=`uniform sampler2D shadow_pass;
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
}`;function Qp(i,t,e){let n=new rs,s=new Xt,r=new Xt,o=new Te,a=new as({depthPacking:Ga}),l=new Ea,c={},h=e.maxTextureSize,d={[Fn]:Xe,[Xe]:Fn,[Ke]:Ke},f=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:Kp,fragmentShader:jp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new ai;g.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Be(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dr;let u=this.type;this.render=function(A,S,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;let X=i.getRenderTarget(),y=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(Dn),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);let F=u!==vn&&this.type===vn,R=u===vn&&this.type!==vn;for(let H=0,z=A.length;H<z;H++){let Z=A[H],J=Z.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let K=J.getFrameExtents();if(s.multiply(K),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,J.mapSize.y=r.y)),J.map===null||F===!0||R===!0){let nt=this.type!==vn?{minFilter:Re,magFilter:Re}:{};J.map!==null&&J.map.dispose(),J.map=new bn(s.x,s.y,nt),J.map.texture.name=Z.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();let et=J.getViewportCount();for(let nt=0;nt<et;nt++){let ht=J.getViewport(nt);o.set(r.x*ht.x,r.y*ht.y,r.x*ht.z,r.y*ht.w),Q.viewport(o),J.updateMatrices(Z,nt),n=J.getFrustum(),C(S,D,J.camera,Z,this.type)}J.isPointLightShadow!==!0&&this.type===vn&&M(J,D),J.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(X,y,T)};function M(A,S){let D=t.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new bn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(S,null,D,f,x,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(S,null,D,m,x,null)}function _(A,S,D,X){let y=null,T=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)y=T;else if(y=D.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let Q=y.uuid,F=S.uuid,R=c[Q];R===void 0&&(R={},c[Q]=R);let H=R[F];H===void 0&&(H=y.clone(),R[F]=H,S.addEventListener("dispose",I)),y=H}if(y.visible=S.visible,y.wireframe=S.wireframe,X===vn?y.side=S.shadowSide!==null?S.shadowSide:S.side:y.side=S.shadowSide!==null?S.shadowSide:d[S.side],y.alphaMap=S.alphaMap,y.alphaTest=S.alphaTest,y.map=S.map,y.clipShadows=S.clipShadows,y.clippingPlanes=S.clippingPlanes,y.clipIntersection=S.clipIntersection,y.displacementMap=S.displacementMap,y.displacementScale=S.displacementScale,y.displacementBias=S.displacementBias,y.wireframeLinewidth=S.wireframeLinewidth,y.linewidth=S.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let Q=i.properties.get(y);Q.light=D}return y}function C(A,S,D,X,y){if(A.visible===!1)return;if(A.layers.test(S.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===vn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);let F=t.update(A),R=A.material;if(Array.isArray(R)){let H=F.groups;for(let z=0,Z=H.length;z<Z;z++){let J=H[z],K=R[J.materialIndex];if(K&&K.visible){let et=_(A,K,X,y);A.onBeforeShadow(i,A,S,D,F,et,J),i.renderBufferDirect(D,null,F,et,A,J),A.onAfterShadow(i,A,S,D,F,et,J)}}}else if(R.visible){let H=_(A,R,X,y);A.onBeforeShadow(i,A,S,D,F,H,null),i.renderBufferDirect(D,null,F,H,A,null),A.onAfterShadow(i,A,S,D,F,H,null)}}let Q=A.children;for(let F=0,R=Q.length;F<R;F++)C(Q[F],S,D,X,y)}function I(A){A.target.removeEventListener("dispose",I);for(let D in c){let X=c[D],y=A.target.uuid;y in X&&(X[y].dispose(),delete X[y])}}}function tm(i,t,e){let n=e.isWebGL2;function s(){let L=!1,dt=new Te,k=null,ot=new Te(0,0,0,0);return{setMask:function(ft){k!==ft&&!L&&(i.colorMask(ft,ft,ft,ft),k=ft)},setLocked:function(ft){L=ft},setClear:function(ft,$t,Qt,ae,Ae){Ae===!0&&(ft*=ae,$t*=ae,Qt*=ae),dt.set(ft,$t,Qt,ae),ot.equals(dt)===!1&&(i.clearColor(ft,$t,Qt,ae),ot.copy(dt))},reset:function(){L=!1,k=null,ot.set(-1,0,0,0)}}}function r(){let L=!1,dt=null,k=null,ot=null;return{setTest:function(ft){ft?_t(i.DEPTH_TEST):Ot(i.DEPTH_TEST)},setMask:function(ft){dt!==ft&&!L&&(i.depthMask(ft),dt=ft)},setFunc:function(ft){if(k!==ft){switch(ft){case Pc:i.depthFunc(i.NEVER);break;case Ic:i.depthFunc(i.ALWAYS);break;case Lc:i.depthFunc(i.LESS);break;case ks:i.depthFunc(i.LEQUAL);break;case Dc:i.depthFunc(i.EQUAL);break;case Uc:i.depthFunc(i.GEQUAL);break;case Nc:i.depthFunc(i.GREATER);break;case Fc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}k=ft}},setLocked:function(ft){L=ft},setClear:function(ft){ot!==ft&&(i.clearDepth(ft),ot=ft)},reset:function(){L=!1,dt=null,k=null,ot=null}}}function o(){let L=!1,dt=null,k=null,ot=null,ft=null,$t=null,Qt=null,ae=null,Ae=null;return{setTest:function(ee){L||(ee?_t(i.STENCIL_TEST):Ot(i.STENCIL_TEST))},setMask:function(ee){dt!==ee&&!L&&(i.stencilMask(ee),dt=ee)},setFunc:function(ee,be,qe){(k!==ee||ot!==be||ft!==qe)&&(i.stencilFunc(ee,be,qe),k=ee,ot=be,ft=qe)},setOp:function(ee,be,qe){($t!==ee||Qt!==be||ae!==qe)&&(i.stencilOp(ee,be,qe),$t=ee,Qt=be,ae=qe)},setLocked:function(ee){L=ee},setClear:function(ee){Ae!==ee&&(i.clearStencil(ee),Ae=ee)},reset:function(){L=!1,dt=null,k=null,ot=null,ft=null,$t=null,Qt=null,ae=null,Ae=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,d=new WeakMap,f={},m={},g=new WeakMap,x=[],p=null,u=!1,M=null,_=null,C=null,I=null,A=null,S=null,D=null,X=new Kt(0,0,0),y=0,T=!1,Q=null,F=null,R=null,H=null,z=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,K=0,et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(et)[1]),J=K>=1):et.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),J=K>=2);let nt=null,ht={},Ft=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),st=new Te().fromArray(Ft),pt=new Te().fromArray(q);function Ut(L,dt,k,ot){let ft=new Uint8Array(4),$t=i.createTexture();i.bindTexture(L,$t),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qt=0;Qt<k;Qt++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(dt,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(dt+Qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return $t}let Et={};Et[i.TEXTURE_2D]=Ut(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=Ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Et[i.TEXTURE_2D_ARRAY]=Ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=Ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),_t(i.DEPTH_TEST),l.setFunc(ks),Gt(!1),Zt(no),_t(i.CULL_FACE),bt(Dn);function _t(L){f[L]!==!0&&(i.enable(L),f[L]=!0)}function Ot(L){f[L]!==!1&&(i.disable(L),f[L]=!1)}function Tt(L,dt){return m[L]!==dt?(i.bindFramebuffer(L,dt),m[L]=dt,n&&(L===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=dt),L===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=dt)),!0):!1}function N(L,dt){let k=x,ot=!1;if(L){k=g.get(dt),k===void 0&&(k=[],g.set(dt,k));let ft=L.textures;if(k.length!==ft.length||k[0]!==i.COLOR_ATTACHMENT0){for(let $t=0,Qt=ft.length;$t<Qt;$t++)k[$t]=i.COLOR_ATTACHMENT0+$t;k.length=ft.length,ot=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,ot=!0);if(ot)if(e.isWebGL2)i.drawBuffers(k);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(k);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function pe(L){return p!==L?(i.useProgram(L),p=L,!0):!1}let vt={[ti]:i.FUNC_ADD,[mc]:i.FUNC_SUBTRACT,[gc]:i.FUNC_REVERSE_SUBTRACT};if(n)vt[ao]=i.MIN,vt[oo]=i.MAX;else{let L=t.get("EXT_blend_minmax");L!==null&&(vt[ao]=L.MIN_EXT,vt[oo]=L.MAX_EXT)}let zt={[_c]:i.ZERO,[xc]:i.ONE,[vc]:i.SRC_COLOR,[aa]:i.SRC_ALPHA,[Tc]:i.SRC_ALPHA_SATURATE,[bc]:i.DST_COLOR,[Mc]:i.DST_ALPHA,[yc]:i.ONE_MINUS_SRC_COLOR,[oa]:i.ONE_MINUS_SRC_ALPHA,[Ec]:i.ONE_MINUS_DST_COLOR,[Sc]:i.ONE_MINUS_DST_ALPHA,[wc]:i.CONSTANT_COLOR,[Ac]:i.ONE_MINUS_CONSTANT_COLOR,[Rc]:i.CONSTANT_ALPHA,[Cc]:i.ONE_MINUS_CONSTANT_ALPHA};function bt(L,dt,k,ot,ft,$t,Qt,ae,Ae,ee){if(L===Dn){u===!0&&(Ot(i.BLEND),u=!1);return}if(u===!1&&(_t(i.BLEND),u=!0),L!==pc){if(L!==M||ee!==T){if((_!==ti||A!==ti)&&(i.blendEquation(i.FUNC_ADD),_=ti,A=ti),ee)switch(L){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case io:i.blendFunc(i.ONE,i.ONE);break;case so:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ro:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case io:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case so:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ro:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}C=null,I=null,S=null,D=null,X.set(0,0,0),y=0,M=L,T=ee}return}ft=ft||dt,$t=$t||k,Qt=Qt||ot,(dt!==_||ft!==A)&&(i.blendEquationSeparate(vt[dt],vt[ft]),_=dt,A=ft),(k!==C||ot!==I||$t!==S||Qt!==D)&&(i.blendFuncSeparate(zt[k],zt[ot],zt[$t],zt[Qt]),C=k,I=ot,S=$t,D=Qt),(ae.equals(X)===!1||Ae!==y)&&(i.blendColor(ae.r,ae.g,ae.b,Ae),X.copy(ae),y=Ae),M=L,T=!1}function Ht(L,dt){L.side===Ke?Ot(i.CULL_FACE):_t(i.CULL_FACE);let k=L.side===Xe;dt&&(k=!k),Gt(k),L.blending===Di&&L.transparent===!1?bt(Dn):bt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);let ot=L.stencilWrite;c.setTest(ot),ot&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),w(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):Ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(L){Q!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),Q=L)}function Zt(L){L!==uc?(_t(i.CULL_FACE),L!==F&&(L===no?i.cullFace(i.BACK):L===dc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ot(i.CULL_FACE),F=L}function fe(L){L!==R&&(J&&i.lineWidth(L),R=L)}function w(L,dt,k){L?(_t(i.POLYGON_OFFSET_FILL),(H!==dt||z!==k)&&(i.polygonOffset(dt,k),H=dt,z=k)):Ot(i.POLYGON_OFFSET_FILL)}function v(L){L?_t(i.SCISSOR_TEST):Ot(i.SCISSOR_TEST)}function Y(L){L===void 0&&(L=i.TEXTURE0+Z-1),nt!==L&&(i.activeTexture(L),nt=L)}function j(L,dt,k){k===void 0&&(nt===null?k=i.TEXTURE0+Z-1:k=nt);let ot=ht[k];ot===void 0&&(ot={type:void 0,texture:void 0},ht[k]=ot),(ot.type!==L||ot.texture!==dt)&&(nt!==k&&(i.activeTexture(k),nt=k),i.bindTexture(L,dt||Et[L]),ot.type=L,ot.texture=dt)}function rt(){let L=ht[nt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function kt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Jt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(L){st.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),st.copy(L))}function St(L){pt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),pt.copy(L))}function Dt(L,dt){let k=d.get(dt);k===void 0&&(k=new WeakMap,d.set(dt,k));let ot=k.get(L);ot===void 0&&(ot=i.getUniformBlockIndex(dt,L.name),k.set(L,ot))}function At(L,dt){let ot=d.get(dt).get(L);h.get(dt)!==ot&&(i.uniformBlockBinding(dt,ot,L.__bindingPointIndex),h.set(dt,ot))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},nt=null,ht={},m={},g=new WeakMap,x=[],p=null,u=!1,M=null,_=null,C=null,I=null,A=null,S=null,D=null,X=new Kt(0,0,0),y=0,T=!1,Q=null,F=null,R=null,H=null,z=null,st.set(0,0,i.canvas.width,i.canvas.height),pt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:_t,disable:Ot,bindFramebuffer:Tt,drawBuffers:N,useProgram:pe,setBlending:bt,setMaterial:Ht,setFlipSided:Gt,setCullFace:Zt,setLineWidth:fe,setPolygonOffset:w,setScissorTest:v,activeTexture:Y,bindTexture:j,unbindTexture:rt,compressedTexImage2D:tt,compressedTexImage3D:kt,texImage2D:Jt,texImage3D:wt,updateUBOMapping:Dt,uniformBlockBinding:At,texStorage2D:at,texStorage3D:ue,texSubImage2D:gt,texSubImage3D:lt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Lt,scissor:Mt,viewport:St,reset:te}}function em(i,t,e,n,s,r,o){let a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Xt,d=new WeakMap,f,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,v){return g?new OffscreenCanvas(w,v):Ys("canvas")}function p(w,v,Y,j){let rt=1,tt=fe(w);if((tt.width>j||tt.height>j)&&(rt=j/Math.max(tt.width,tt.height)),rt<1||v===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let kt=v?fa:Math.floor,gt=kt(rt*tt.width),lt=kt(rt*tt.height);f===void 0&&(f=x(gt,lt));let ut=Y?x(gt,lt):f;return ut.width=gt,ut.height=lt,ut.getContext("2d").drawImage(w,0,0,gt,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+gt+"x"+lt+")."),ut}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),w;return w}function u(w){let v=fe(w);return Vo(v.width)&&Vo(v.height)}function M(w){return a?!1:w.wrapS!==nn||w.wrapT!==nn||w.minFilter!==Re&&w.minFilter!==Ge}function _(w,v){return w.generateMipmaps&&v&&w.minFilter!==Re&&w.minFilter!==Ge}function C(w){i.generateMipmap(w)}function I(w,v,Y,j,rt=!1){if(a===!1)return v;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let tt=v;if(v===i.RED&&(Y===i.FLOAT&&(tt=i.R32F),Y===i.HALF_FLOAT&&(tt=i.R16F),Y===i.UNSIGNED_BYTE&&(tt=i.R8)),v===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(tt=i.R8UI),Y===i.UNSIGNED_SHORT&&(tt=i.R16UI),Y===i.UNSIGNED_INT&&(tt=i.R32UI),Y===i.BYTE&&(tt=i.R8I),Y===i.SHORT&&(tt=i.R16I),Y===i.INT&&(tt=i.R32I)),v===i.RG&&(Y===i.FLOAT&&(tt=i.RG32F),Y===i.HALF_FLOAT&&(tt=i.RG16F),Y===i.UNSIGNED_BYTE&&(tt=i.RG8)),v===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(tt=i.RG8UI),Y===i.UNSIGNED_SHORT&&(tt=i.RG16UI),Y===i.UNSIGNED_INT&&(tt=i.RG32UI),Y===i.BYTE&&(tt=i.RG8I),Y===i.SHORT&&(tt=i.RG16I),Y===i.INT&&(tt=i.RG32I)),v===i.RGBA){let kt=rt?Gs:ie.getTransfer(j);Y===i.FLOAT&&(tt=i.RGBA32F),Y===i.HALF_FLOAT&&(tt=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(tt=kt===he?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function A(w,v,Y){return _(w,Y)===!0||w.isFramebufferTexture&&w.minFilter!==Re&&w.minFilter!==Ge?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function S(w){return w===Re||w===lo||w===Ji?i.NEAREST:i.LINEAR}function D(w){let v=w.target;v.removeEventListener("dispose",D),y(v),v.isVideoTexture&&d.delete(v)}function X(w){let v=w.target;v.removeEventListener("dispose",X),Q(v)}function y(w){let v=n.get(w);if(v.__webglInit===void 0)return;let Y=w.source,j=m.get(Y);if(j){let rt=j[v.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&T(w),Object.keys(j).length===0&&m.delete(Y)}n.remove(w)}function T(w){let v=n.get(w);i.deleteTexture(v.__webglTexture);let Y=w.source,j=m.get(Y);delete j[v.__cacheKey],o.memory.textures--}function Q(w){let v=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let rt=0;rt<v.__webglFramebuffer[j].length;rt++)i.deleteFramebuffer(v.__webglFramebuffer[j][rt]);else i.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)i.deleteFramebuffer(v.__webglFramebuffer[j]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let Y=w.textures;for(let j=0,rt=Y.length;j<rt;j++){let tt=n.get(Y[j]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(Y[j])}n.remove(w)}let F=0;function R(){F=0}function H(){let w=F;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),F+=1,w}function z(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function Z(w,v){let Y=n.get(w);if(w.isVideoTexture&&Gt(w),w.isRenderTargetTexture===!1&&w.version>0&&Y.__version!==w.version){let j=w.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(Y,w,v);return}}e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+v)}function J(w,v){let Y=n.get(w);if(w.version>0&&Y.__version!==w.version){pt(Y,w,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+v)}function K(w,v){let Y=n.get(w);if(w.version>0&&Y.__version!==w.version){pt(Y,w,v);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+v)}function et(w,v){let Y=n.get(w);if(w.version>0&&Y.__version!==w.version){Ut(Y,w,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+v)}let nt={[Bi]:i.REPEAT,[nn]:i.CLAMP_TO_EDGE,[ha]:i.MIRRORED_REPEAT},ht={[Re]:i.NEAREST,[lo]:i.NEAREST_MIPMAP_NEAREST,[Ji]:i.NEAREST_MIPMAP_LINEAR,[Ge]:i.LINEAR,[wr]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},Ft={[nh]:i.NEVER,[lh]:i.ALWAYS,[ih]:i.LESS,[Vl]:i.LEQUAL,[sh]:i.EQUAL,[oh]:i.GEQUAL,[rh]:i.GREATER,[ah]:i.NOTEQUAL};function q(w,v,Y){if(v.type===yn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ge||v.magFilter===wr||v.magFilter===Ji||v.magFilter===ni||v.minFilter===Ge||v.minFilter===wr||v.minFilter===Ji||v.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Y?(i.texParameteri(w,i.TEXTURE_WRAP_S,nt[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,nt[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,nt[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ht[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ht[v.minFilter])):(i.texParameteri(w,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(w,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==nn||v.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,i.TEXTURE_MAG_FILTER,S(v.magFilter)),i.texParameteri(w,i.TEXTURE_MIN_FILTER,S(v.minFilter)),v.minFilter!==Re&&v.minFilter!==Ge&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ft[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Re||v.minFilter!==Ji&&v.minFilter!==ni||v.type===yn&&t.has("OES_texture_float_linear")===!1||a===!1&&v.type===ns&&t.has("OES_texture_half_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let j=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function st(w,v){let Y=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",D));let j=v.source,rt=m.get(j);rt===void 0&&(rt={},m.set(j,rt));let tt=z(v);if(tt!==w.__cacheKey){rt[tt]===void 0&&(rt[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),rt[tt].usedTimes++;let kt=rt[w.__cacheKey];kt!==void 0&&(rt[w.__cacheKey].usedTimes--,kt.usedTimes===0&&T(v)),w.__cacheKey=tt,w.__webglTexture=rt[tt].texture}return Y}function pt(w,v,Y){let j=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=i.TEXTURE_3D);let rt=st(w,v),tt=v.source;e.bindTexture(j,w.__webglTexture,i.TEXTURE0+Y);let kt=n.get(tt);if(tt.version!==kt.__version||rt===!0){e.activeTexture(i.TEXTURE0+Y);let gt=ie.getPrimaries(ie.workingColorSpace),lt=v.colorSpace===In?null:ie.getPrimaries(v.colorSpace),ut=v.colorSpace===In||gt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Lt=M(v)&&u(v.image)===!1,at=p(v.image,Lt,!1,s.maxTextureSize);at=Zt(v,at);let ue=u(at)||a,Jt=r.convert(v.format,v.colorSpace),wt=r.convert(v.type),Mt=I(v.internalFormat,Jt,wt,v.colorSpace,v.isVideoTexture);q(j,v,ue);let St,Dt=v.mipmaps,At=a&&v.isVideoTexture!==!0&&Mt!==zl,te=kt.__version===void 0||rt===!0,L=tt.dataReady,dt=A(v,at,ue);if(v.isDepthTexture)Mt=i.DEPTH_COMPONENT,a?v.type===yn?Mt=i.DEPTH_COMPONENT32F:v.type===Ln?Mt=i.DEPTH_COMPONENT24:v.type===ii?Mt=i.DEPTH24_STENCIL8:Mt=i.DEPTH_COMPONENT16:v.type===yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===si&&Mt===i.DEPTH_COMPONENT&&v.type!==Ha&&v.type!==Ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Ln,wt=r.convert(v.type)),v.format===zi&&Mt===i.DEPTH_COMPONENT&&(Mt=i.DEPTH_STENCIL,v.type!==ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=ii,wt=r.convert(v.type))),te&&(At?e.texStorage2D(i.TEXTURE_2D,1,Mt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Mt,at.width,at.height,0,Jt,wt,null));else if(v.isDataTexture)if(Dt.length>0&&ue){At&&te&&e.texStorage2D(i.TEXTURE_2D,dt,Mt,Dt[0].width,Dt[0].height);for(let k=0,ot=Dt.length;k<ot;k++)St=Dt[k],At?L&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,St.width,St.height,Jt,wt,St.data):e.texImage2D(i.TEXTURE_2D,k,Mt,St.width,St.height,0,Jt,wt,St.data);v.generateMipmaps=!1}else At?(te&&e.texStorage2D(i.TEXTURE_2D,dt,Mt,at.width,at.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,Jt,wt,at.data)):e.texImage2D(i.TEXTURE_2D,0,Mt,at.width,at.height,0,Jt,wt,at.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){At&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Mt,Dt[0].width,Dt[0].height,at.depth);for(let k=0,ot=Dt.length;k<ot;k++)St=Dt[k],v.format!==sn?Jt!==null?At?L&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,St.width,St.height,at.depth,Jt,St.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,Mt,St.width,St.height,at.depth,0,St.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,St.width,St.height,at.depth,Jt,wt,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,k,Mt,St.width,St.height,at.depth,0,Jt,wt,St.data)}else{At&&te&&e.texStorage2D(i.TEXTURE_2D,dt,Mt,Dt[0].width,Dt[0].height);for(let k=0,ot=Dt.length;k<ot;k++)St=Dt[k],v.format!==sn?Jt!==null?At?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,St.width,St.height,Jt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,k,Mt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?L&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,St.width,St.height,Jt,wt,St.data):e.texImage2D(i.TEXTURE_2D,k,Mt,St.width,St.height,0,Jt,wt,St.data)}else if(v.isDataArrayTexture)At?(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Mt,at.width,at.height,at.depth),L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Jt,wt,at.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,at.width,at.height,at.depth,0,Jt,wt,at.data);else if(v.isData3DTexture)At?(te&&e.texStorage3D(i.TEXTURE_3D,dt,Mt,at.width,at.height,at.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Jt,wt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,at.width,at.height,at.depth,0,Jt,wt,at.data);else if(v.isFramebufferTexture){if(te)if(At)e.texStorage2D(i.TEXTURE_2D,dt,Mt,at.width,at.height);else{let k=at.width,ot=at.height;for(let ft=0;ft<dt;ft++)e.texImage2D(i.TEXTURE_2D,ft,Mt,k,ot,0,Jt,wt,null),k>>=1,ot>>=1}}else if(Dt.length>0&&ue){if(At&&te){let k=fe(Dt[0]);e.texStorage2D(i.TEXTURE_2D,dt,Mt,k.width,k.height)}for(let k=0,ot=Dt.length;k<ot;k++)St=Dt[k],At?L&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,Jt,wt,St):e.texImage2D(i.TEXTURE_2D,k,Mt,Jt,wt,St);v.generateMipmaps=!1}else if(At){if(te){let k=fe(at);e.texStorage2D(i.TEXTURE_2D,dt,Mt,k.width,k.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Jt,wt,at)}else e.texImage2D(i.TEXTURE_2D,0,Mt,Jt,wt,at);_(v,ue)&&C(j),kt.__version=tt.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Ut(w,v,Y){if(v.image.length!==6)return;let j=st(w,v),rt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+Y);let tt=n.get(rt);if(rt.version!==tt.__version||j===!0){e.activeTexture(i.TEXTURE0+Y);let kt=ie.getPrimaries(ie.workingColorSpace),gt=v.colorSpace===In?null:ie.getPrimaries(v.colorSpace),lt=v.colorSpace===In||kt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let ut=v.isCompressedTexture||v.image[0].isCompressedTexture,Lt=v.image[0]&&v.image[0].isDataTexture,at=[];for(let k=0;k<6;k++)!ut&&!Lt?at[k]=p(v.image[k],!1,!0,s.maxCubemapSize):at[k]=Lt?v.image[k].image:v.image[k],at[k]=Zt(v,at[k]);let ue=at[0],Jt=u(ue)||a,wt=r.convert(v.format,v.colorSpace),Mt=r.convert(v.type),St=I(v.internalFormat,wt,Mt,v.colorSpace),Dt=a&&v.isVideoTexture!==!0,At=tt.__version===void 0||j===!0,te=rt.dataReady,L=A(v,ue,Jt);q(i.TEXTURE_CUBE_MAP,v,Jt);let dt;if(ut){Dt&&At&&e.texStorage2D(i.TEXTURE_CUBE_MAP,L,St,ue.width,ue.height);for(let k=0;k<6;k++){dt=at[k].mipmaps;for(let ot=0;ot<dt.length;ot++){let ft=dt[ot];v.format!==sn?wt!==null?Dt?te&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,ot,0,0,ft.width,ft.height,wt,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,ot,St,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?te&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,ot,0,0,ft.width,ft.height,wt,Mt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,ot,St,ft.width,ft.height,0,wt,Mt,ft.data)}}}else{if(dt=v.mipmaps,Dt&&At){dt.length>0&&L++;let k=fe(at[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,L,St,k.width,k.height)}for(let k=0;k<6;k++)if(Lt){Dt?te&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,at[k].width,at[k].height,wt,Mt,at[k].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,St,at[k].width,at[k].height,0,wt,Mt,at[k].data);for(let ot=0;ot<dt.length;ot++){let $t=dt[ot].image[k].image;Dt?te&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,ot+1,0,0,$t.width,$t.height,wt,Mt,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,ot+1,St,$t.width,$t.height,0,wt,Mt,$t.data)}}else{Dt?te&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,wt,Mt,at[k]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,St,wt,Mt,at[k]);for(let ot=0;ot<dt.length;ot++){let ft=dt[ot];Dt?te&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,ot+1,0,0,wt,Mt,ft.image[k]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,ot+1,St,wt,Mt,ft.image[k])}}}_(v,Jt)&&C(i.TEXTURE_CUBE_MAP),tt.__version=rt.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Et(w,v,Y,j,rt,tt){let kt=r.convert(Y.format,Y.colorSpace),gt=r.convert(Y.type),lt=I(Y.internalFormat,kt,gt,Y.colorSpace);if(!n.get(v).__hasExternalTextures){let Lt=Math.max(1,v.width>>tt),at=Math.max(1,v.height>>tt);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,tt,lt,Lt,at,v.depth,0,kt,gt,null):e.texImage2D(rt,tt,lt,Lt,at,0,kt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),Ht(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,rt,n.get(Y).__webglTexture,0,bt(v)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,rt,n.get(Y).__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(w,v,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer&&!v.stencilBuffer){let j=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Y||Ht(v)){let rt=v.depthTexture;rt&&rt.isDepthTexture&&(rt.type===yn?j=i.DEPTH_COMPONENT32F:rt.type===Ln&&(j=i.DEPTH_COMPONENT24));let tt=bt(v);Ht(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,j,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,j,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,j,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(v.depthBuffer&&v.stencilBuffer){let j=bt(v);Y&&Ht(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,j,i.DEPTH24_STENCIL8,v.width,v.height):Ht(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{let j=v.textures;for(let rt=0;rt<j.length;rt++){let tt=j[rt],kt=r.convert(tt.format,tt.colorSpace),gt=r.convert(tt.type),lt=I(tt.internalFormat,kt,gt,tt.colorSpace),ut=bt(v);Y&&Ht(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,lt,v.width,v.height):Ht(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,lt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,lt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ot(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);let j=n.get(v.depthTexture).__webglTexture,rt=bt(v);if(v.depthTexture.format===si)Ht(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(v.depthTexture.format===zi)Ht(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Tt(w){let v=n.get(w),Y=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ot(v.__webglFramebuffer,w)}else if(Y){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]=i.createRenderbuffer(),_t(v.__webglDepthbuffer[j],w,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),_t(v.__webglDepthbuffer,w,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function N(w,v,Y){let j=n.get(w);v!==void 0&&Et(j.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Tt(w)}function pe(w){let v=w.texture,Y=n.get(w),j=n.get(v);w.addEventListener("dispose",X);let rt=w.textures,tt=w.isWebGLCubeRenderTarget===!0,kt=rt.length>1,gt=u(w)||a;if(kt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=v.version,o.memory.textures++),tt){Y.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(a&&v.mipmaps&&v.mipmaps.length>0){Y.__webglFramebuffer[lt]=[];for(let ut=0;ut<v.mipmaps.length;ut++)Y.__webglFramebuffer[lt][ut]=i.createFramebuffer()}else Y.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){Y.__webglFramebuffer=[];for(let lt=0;lt<v.mipmaps.length;lt++)Y.__webglFramebuffer[lt]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(kt)if(s.drawBuffers)for(let lt=0,ut=rt.length;lt<ut;lt++){let Lt=n.get(rt[lt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&Ht(w)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let lt=0;lt<rt.length;lt++){let ut=rt[lt];Y.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[lt]);let Lt=r.convert(ut.format,ut.colorSpace),at=r.convert(ut.type),ue=I(ut.internalFormat,Lt,at,ut.colorSpace,w.isXRRenderTarget===!0),Jt=bt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,ue,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,Y.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),_t(Y.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),q(i.TEXTURE_CUBE_MAP,v,gt);for(let lt=0;lt<6;lt++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)Et(Y.__webglFramebuffer[lt][ut],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ut);else Et(Y.__webglFramebuffer[lt],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);_(v,gt)&&C(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(kt){for(let lt=0,ut=rt.length;lt<ut;lt++){let Lt=rt[lt],at=n.get(Lt);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),q(i.TEXTURE_2D,Lt,gt),Et(Y.__webglFramebuffer,w,Lt,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),_(Lt,gt)&&C(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?lt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(lt,j.__webglTexture),q(lt,v,gt),a&&v.mipmaps&&v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)Et(Y.__webglFramebuffer[ut],w,v,i.COLOR_ATTACHMENT0,lt,ut);else Et(Y.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,lt,0);_(v,gt)&&C(lt),e.unbindTexture()}w.depthBuffer&&Tt(w)}function vt(w){let v=u(w)||a,Y=w.textures;for(let j=0,rt=Y.length;j<rt;j++){let tt=Y[j];if(_(tt,v)){let kt=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,gt=n.get(tt).__webglTexture;e.bindTexture(kt,gt),C(kt),e.unbindTexture()}}}function zt(w){if(a&&w.samples>0&&Ht(w)===!1){let v=w.textures,Y=w.width,j=w.height,rt=i.COLOR_BUFFER_BIT,tt=[],kt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(w),lt=v.length>1;if(lt)for(let ut=0;ut<v.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ut=0;ut<v.length;ut++){tt.push(i.COLOR_ATTACHMENT0+ut),w.depthBuffer&&tt.push(kt);let Lt=gt.__ignoreDepthValues!==void 0?gt.__ignoreDepthValues:!1;if(Lt===!1&&(w.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),lt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[ut]),Lt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[kt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[kt])),lt){let at=n.get(v[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,Y,j,0,0,Y,j,rt,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let ut=0;ut<v.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,gt.__webglColorRenderbuffer[ut]);let Lt=n.get(v[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}}function bt(w){return Math.min(s.maxSamples,w.samples)}function Ht(w){let v=n.get(w);return a&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Gt(w){let v=o.render.frame;d.get(w)!==v&&(d.set(w,v),w.update())}function Zt(w,v){let Y=w.colorSpace,j=w.format,rt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===ua||Y!==Vn&&Y!==In&&(ie.getTransfer(Y)===he?a===!1?t.has("EXT_sRGB")===!0&&j===sn?(w.format=ua,w.minFilter=Ge,w.generateMipmaps=!1):v=Zs.sRGBToLinear(v):(j!==sn||rt!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),v}function fe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=H,this.resetTextureUnits=R,this.setTexture2D=Z,this.setTexture2DArray=J,this.setTexture3D=K,this.setTextureCube=et,this.rebindTextures=N,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Ht}function nm(i,t,e){let n=e.isWebGL2;function s(r,o=In){let a,l=ie.getTransfer(o);if(r===Nn)return i.UNSIGNED_BYTE;if(r===Ul)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Nl)return i.UNSIGNED_SHORT_5_5_5_1;if(r===qc)return i.BYTE;if(r===Yc)return i.SHORT;if(r===Ha)return i.UNSIGNED_SHORT;if(r===Dl)return i.INT;if(r===Ln)return i.UNSIGNED_INT;if(r===yn)return i.FLOAT;if(r===ns)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Zc)return i.ALPHA;if(r===sn)return i.RGBA;if(r===Jc)return i.LUMINANCE;if(r===$c)return i.LUMINANCE_ALPHA;if(r===si)return i.DEPTH_COMPONENT;if(r===zi)return i.DEPTH_STENCIL;if(r===ua)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Kc)return i.RED;if(r===Fl)return i.RED_INTEGER;if(r===jc)return i.RG;if(r===Ol)return i.RG_INTEGER;if(r===Bl)return i.RGBA_INTEGER;if(r===Ar||r===Rr||r===Cr||r===Pr)if(l===he)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ar)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Rr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Cr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ar)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Rr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Cr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===co||r===ho||r===uo||r===fo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===co)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ho)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===uo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zl)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===po||r===mo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===po)return l===he?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===mo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===go||r===_o||r===xo||r===vo||r===yo||r===Mo||r===So||r===bo||r===Eo||r===To||r===wo||r===Ao||r===Ro||r===Co)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===go)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_o)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Mo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===So)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Eo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===To)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===wo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ao)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ro)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Co)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ir||r===Po||r===Io)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Ir)return l===he?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Po)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Io)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Qc||r===Lo||r===Do||r===Uo)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ir)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Lo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Do)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Uo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ii?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Ta=class extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Li=class extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},im={type:"move"},es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(im)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Li;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},sm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,wa=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ie,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){let n=e.cameras[0].viewport,s=new dn({extensions:{fragDepth:!0},vertexShader:sm,fragmentShader:rm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Be(new oi(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}},Aa=class extends On{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null,x=new wa,p=e.getContextAttributes(),u=null,M=null,_=[],C=[],I=new Xt,A=null,S=new Oe;S.layers.enable(1),S.viewport=new Te;let D=new Oe;D.layers.enable(2),D.viewport=new Te;let X=[S,D],y=new Ta;y.layers.enable(1),y.layers.enable(2);let T=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let st=_[q];return st===void 0&&(st=new es,_[q]=st),st.getTargetRaySpace()},this.getControllerGrip=function(q){let st=_[q];return st===void 0&&(st=new es,_[q]=st),st.getGripSpace()},this.getHand=function(q){let st=_[q];return st===void 0&&(st=new es,_[q]=st),st.getHandSpace()};function F(q){let st=C.indexOf(q.inputSource);if(st===-1)return;let pt=_[st];pt!==void 0&&(pt.update(q.inputSource,q.frame,c||o),pt.dispatchEvent({type:q.type,data:q.inputSource}))}function R(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",R),s.removeEventListener("inputsourceschange",H);for(let q=0;q<_.length;q++){let st=C[q];st!==null&&(C[q]=null,_[q].disconnect(st))}T=null,Q=null,x.reset(),t.setRenderTarget(u),m=null,f=null,d=null,s=null,M=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",R),s.addEventListener("inputsourceschange",H),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let st={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new bn(m.framebufferWidth,m.framebufferHeight,{format:sn,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let st=null,pt=null,Ut=null;p.depth&&(Ut=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=p.stencil?zi:si,pt=p.stencil?ii:Ln);let Et={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Et),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new bn(f.textureWidth,f.textureHeight,{format:sn,type:Nn,depthTexture:new rr(f.textureWidth,f.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});let _t=t.properties.get(M);_t.__ignoreDepthValues=f.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ft.setContext(s),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function H(q){for(let st=0;st<q.removed.length;st++){let pt=q.removed[st],Ut=C.indexOf(pt);Ut>=0&&(C[Ut]=null,_[Ut].disconnect(pt))}for(let st=0;st<q.added.length;st++){let pt=q.added[st],Ut=C.indexOf(pt);if(Ut===-1){for(let _t=0;_t<_.length;_t++)if(_t>=C.length){C.push(pt),Ut=_t;break}else if(C[_t]===null){C[_t]=pt,Ut=_t;break}if(Ut===-1)break}let Et=_[Ut];Et&&Et.connect(pt)}}let z=new V,Z=new V;function J(q,st,pt){z.setFromMatrixPosition(st.matrixWorld),Z.setFromMatrixPosition(pt.matrixWorld);let Ut=z.distanceTo(Z),Et=st.projectionMatrix.elements,_t=pt.projectionMatrix.elements,Ot=Et[14]/(Et[10]-1),Tt=Et[14]/(Et[10]+1),N=(Et[9]+1)/Et[5],pe=(Et[9]-1)/Et[5],vt=(Et[8]-1)/Et[0],zt=(_t[8]+1)/_t[0],bt=Ot*vt,Ht=Ot*zt,Gt=Ut/(-vt+zt),Zt=Gt*-vt;st.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Zt),q.translateZ(Gt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let fe=Ot+Gt,w=Tt+Gt,v=bt-Zt,Y=Ht+(Ut-Zt),j=N*Tt/w*fe,rt=pe*Tt/w*fe;q.projectionMatrix.makePerspective(v,Y,j,rt,fe,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function K(q,st){st===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(st.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;x.texture!==null&&(q.near=x.depthNear,q.far=x.depthFar),y.near=D.near=S.near=q.near,y.far=D.far=S.far=q.far,(T!==y.near||Q!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,Q=y.far,S.near=T,S.far=Q,D.near=T,D.far=Q,S.updateProjectionMatrix(),D.updateProjectionMatrix(),q.updateProjectionMatrix());let st=q.parent,pt=y.cameras;K(y,st);for(let Ut=0;Ut<pt.length;Ut++)K(pt[Ut],st);pt.length===2?J(y,S,D):y.projectionMatrix.copy(S.projectionMatrix),et(q,y,st)};function et(q,st,pt){pt===null?q.matrix.copy(st.matrixWorld):(q.matrix.copy(pt.matrixWorld),q.matrix.invert(),q.matrix.multiply(st.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(st.projectionMatrix),q.projectionMatrixInverse.copy(st.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=da*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null};let nt=null;function ht(q,st){if(h=st.getViewerPose(c||o),g=st,h!==null){let pt=h.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let Ut=!1;pt.length!==y.cameras.length&&(y.cameras.length=0,Ut=!0);for(let _t=0;_t<pt.length;_t++){let Ot=pt[_t],Tt=null;if(m!==null)Tt=m.getViewport(Ot);else{let pe=d.getViewSubImage(f,Ot);Tt=pe.viewport,_t===0&&(t.setRenderTargetTextures(M,pe.colorTexture,f.ignoreDepthValues?void 0:pe.depthStencilTexture),t.setRenderTarget(M))}let N=X[_t];N===void 0&&(N=new Oe,N.layers.enable(_t),N.viewport=new Te,X[_t]=N),N.matrix.fromArray(Ot.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(Ot.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),_t===0&&(y.matrix.copy(N.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Ut===!0&&y.cameras.push(N)}let Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")){let _t=d.getDepthInformation(pt[0]);_t&&_t.isValid&&_t.texture&&x.init(t,_t,s.renderState)}}for(let pt=0;pt<_.length;pt++){let Ut=C[pt],Et=_[pt];Ut!==null&&Et!==void 0&&Et.update(Ut,st,c||o)}x.render(t,y),nt&&nt(q,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}let Ft=new Xl;Ft.setAnimationLoop(ht),this.setAnimationLoop=function(q){nt=q},this.dispose=function(){}}},jn=new un,am=new _e;function om(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Wl(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,M,_,C){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,C)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),x(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,M,_):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Xe&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Xe&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let M=t.get(u),_=M.envMap,C=M.envMapRotation;if(_&&(p.envMap.value=_,jn.copy(C),jn.x*=-1,jn.y*=-1,jn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),p.envMapRotation.value.setFromMatrix4(am.makeRotationFromEuler(jn)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;let I=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*I,e(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,M,_){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*M,p.scale.value=_*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),t.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,M){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Xe&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){let M=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lm(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,_){let C=_.program;n.uniformBlockBinding(M,C)}function c(M,_){let C=s[M.id];C===void 0&&(g(M),C=h(M),s[M.id]=C,M.addEventListener("dispose",p));let I=_.program;n.updateUBOMapping(M,I);let A=t.render.frame;r[M.id]!==A&&(f(M),r[M.id]=A)}function h(M){let _=d();M.__bindingPointIndex=_;let C=i.createBuffer(),I=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,I,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,C),C}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let _=s[M.id],C=M.uniforms,I=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,S=C.length;A<S;A++){let D=Array.isArray(C[A])?C[A]:[C[A]];for(let X=0,y=D.length;X<y;X++){let T=D[X];if(m(T,A,X,I)===!0){let Q=T.__offset,F=Array.isArray(T.value)?T.value:[T.value],R=0;for(let H=0;H<F.length;H++){let z=F[H],Z=x(z);typeof z=="number"||typeof z=="boolean"?(T.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,Q+R,T.__data)):z.isMatrix3?(T.__data[0]=z.elements[0],T.__data[1]=z.elements[1],T.__data[2]=z.elements[2],T.__data[3]=0,T.__data[4]=z.elements[3],T.__data[5]=z.elements[4],T.__data[6]=z.elements[5],T.__data[7]=0,T.__data[8]=z.elements[6],T.__data[9]=z.elements[7],T.__data[10]=z.elements[8],T.__data[11]=0):(z.toArray(T.__data,R),R+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Q,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,_,C,I){let A=M.value,S=_+"_"+C;if(I[S]===void 0)return typeof A=="number"||typeof A=="boolean"?I[S]=A:I[S]=A.clone(),!0;{let D=I[S];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return I[S]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(M){let _=M.uniforms,C=0,I=16;for(let S=0,D=_.length;S<D;S++){let X=Array.isArray(_[S])?_[S]:[_[S]];for(let y=0,T=X.length;y<T;y++){let Q=X[y],F=Array.isArray(Q.value)?Q.value:[Q.value];for(let R=0,H=F.length;R<H;R++){let z=F[R],Z=x(z),J=C%I;J!==0&&I-J<Z.boundary&&(C+=I-J),Q.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=C,C+=Z.storage}}}let A=C%I;return A>0&&(C+=I-A),M.__size=C,M.__cache={},this}function x(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function p(M){let _=M.target;_.removeEventListener("dispose",p);let C=o.indexOf(_.__bindingPointIndex);o.splice(C,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function u(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var os=class{constructor(t={}){let{canvas:e=hh(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let m=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,u=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this._useLegacyLights=!1,this.toneMapping=Un,this.toneMappingExposure=1;let _=this,C=!1,I=0,A=0,S=null,D=-1,X=null,y=new Te,T=new Te,Q=null,F=new Kt(0),R=0,H=e.width,z=e.height,Z=1,J=null,K=null,et=new Te(0,0,H,z),nt=new Te(0,0,H,z),ht=!1,Ft=new rs,q=!1,st=!1,pt=null,Ut=new _e,Et=new Xt,_t=new V,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Tt(){return S===null?Z:1}let N=n;function pe(b,U){for(let G=0;G<b.length;G++){let W=b[G],B=e.getContext(W,U);if(B!==null)return B}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r162"),e.addEventListener("webglcontextlost",te,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",dt,!1),N===null){let U=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&U.shift(),N=pe(U,b),N===null)throw pe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let vt,zt,bt,Ht,Gt,Zt,fe,w,v,Y,j,rt,tt,kt,gt,lt,ut,Lt,at,ue,Jt,wt,Mt,St;function Dt(){vt=new Ef(N),zt=new xf(N,vt,t),vt.init(zt),wt=new nm(N,vt,zt),bt=new tm(N,vt,zt),Ht=new Af(N),Gt=new Hp,Zt=new em(N,vt,bt,Gt,zt,wt,Ht),fe=new yf(_),w=new bf(_),v=new Lh(N,zt),Mt=new gf(N,vt,v,zt),Y=new Tf(N,v,Ht,Mt),j=new If(N,Y,v,Ht),at=new Pf(N,zt,Zt),lt=new vf(Gt),rt=new Vp(_,fe,w,vt,zt,Mt,lt),tt=new om(_,Gt),kt=new Wp,gt=new $p(vt,zt),Lt=new mf(_,fe,w,bt,j,f,l),ut=new Qp(_,j,zt),St=new lm(N,Ht,zt,bt),ue=new _f(N,vt,Ht,zt),Jt=new wf(N,vt,Ht,zt),Ht.programs=rt.programs,_.capabilities=zt,_.extensions=vt,_.properties=Gt,_.renderLists=kt,_.shadowMap=ut,_.state=bt,_.info=Ht}Dt();let At=new Aa(_,N);this.xr=At,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let b=vt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=vt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(b){b!==void 0&&(Z=b,this.setSize(H,z,!1))},this.getSize=function(b){return b.set(H,z)},this.setSize=function(b,U,G=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,z=U,e.width=Math.floor(b*Z),e.height=Math.floor(U*Z),G===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(H*Z,z*Z).floor()},this.setDrawingBufferSize=function(b,U,G){H=b,z=U,Z=G,e.width=Math.floor(b*G),e.height=Math.floor(U*G),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(et)},this.setViewport=function(b,U,G,W){b.isVector4?et.set(b.x,b.y,b.z,b.w):et.set(b,U,G,W),bt.viewport(y.copy(et).multiplyScalar(Z).round())},this.getScissor=function(b){return b.copy(nt)},this.setScissor=function(b,U,G,W){b.isVector4?nt.set(b.x,b.y,b.z,b.w):nt.set(b,U,G,W),bt.scissor(T.copy(nt).multiplyScalar(Z).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(b){bt.setScissorTest(ht=b)},this.setOpaqueSort=function(b){J=b},this.setTransparentSort=function(b){K=b},this.getClearColor=function(b){return b.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(b=!0,U=!0,G=!0){let W=0;if(b){let B=!1;if(S!==null){let mt=S.texture.format;B=mt===Bl||mt===Ol||mt===Fl}if(B){let mt=S.texture.type,yt=mt===Nn||mt===Ln||mt===Ha||mt===ii||mt===Ul||mt===Nl,Rt=Lt.getClearColor(),Pt=Lt.getClearAlpha(),Wt=Rt.r,It=Rt.g,Vt=Rt.b;yt?(m[0]=Wt,m[1]=It,m[2]=Vt,m[3]=Pt,N.clearBufferuiv(N.COLOR,0,m)):(g[0]=Wt,g[1]=It,g[2]=Vt,g[3]=Pt,N.clearBufferiv(N.COLOR,0,g))}else W|=N.COLOR_BUFFER_BIT}U&&(W|=N.DEPTH_BUFFER_BIT),G&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",te,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),kt.dispose(),gt.dispose(),Gt.dispose(),fe.dispose(),w.dispose(),j.dispose(),Mt.dispose(),St.dispose(),rt.dispose(),At.dispose(),At.removeEventListener("sessionstart",Ae),At.removeEventListener("sessionend",ee),pt&&(pt.dispose(),pt=null),be.stop()};function te(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let b=Ht.autoReset,U=ut.enabled,G=ut.autoUpdate,W=ut.needsUpdate,B=ut.type;Dt(),Ht.autoReset=b,ut.enabled=U,ut.autoUpdate=G,ut.needsUpdate=W,ut.type=B}function dt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function k(b){let U=b.target;U.removeEventListener("dispose",k),ot(U)}function ot(b){ft(b),Gt.remove(b)}function ft(b){let U=Gt.get(b).programs;U!==void 0&&(U.forEach(function(G){rt.releaseProgram(G)}),b.isShaderMaterial&&rt.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,G,W,B,mt){U===null&&(U=Ot);let yt=B.isMesh&&B.matrixWorld.determinant()<0,Rt=vr(b,U,G,W,B);bt.setMaterial(W,yt);let Pt=G.index,Wt=1;if(W.wireframe===!0){if(Pt=Y.getWireframeAttribute(G),Pt===void 0)return;Wt=2}let It=G.drawRange,Vt=G.attributes.position,ce=It.start*Wt,Le=(It.start+It.count)*Wt;mt!==null&&(ce=Math.max(ce,mt.start*Wt),Le=Math.min(Le,(mt.start+mt.count)*Wt)),Pt!==null?(ce=Math.max(ce,0),Le=Math.min(Le,Pt.count)):Vt!=null&&(ce=Math.max(ce,0),Le=Math.min(Le,Vt.count));let oe=Le-ce;if(oe<0||oe===1/0)return;Mt.setup(B,W,Rt,G,Pt);let ke,le=ue;if(Pt!==null&&(ke=v.get(Pt),le=Jt,le.setIndex(ke)),B.isMesh)W.wireframe===!0?(bt.setLineWidth(W.wireframeLinewidth*Tt()),le.setMode(N.LINES)):le.setMode(N.TRIANGLES);else if(B.isLine){let Nt=W.linewidth;Nt===void 0&&(Nt=1),bt.setLineWidth(Nt*Tt()),B.isLineSegments?le.setMode(N.LINES):B.isLineLoop?le.setMode(N.LINE_LOOP):le.setMode(N.LINE_STRIP)}else B.isPoints?le.setMode(N.POINTS):B.isSprite&&le.setMode(N.TRIANGLES);if(B.isBatchedMesh)le.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)le.renderInstances(ce,oe,B.count);else if(G.isInstancedBufferGeometry){let Nt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,di=Math.min(G.instanceCount,Nt);le.renderInstances(ce,oe,di)}else le.render(ce,oe)};function $t(b,U,G){b.transparent===!0&&b.side===Ke&&b.forceSinglePass===!1?(b.side=Xe,b.needsUpdate=!0,ui(b,U,G),b.side=Fn,b.needsUpdate=!0,ui(b,U,G),b.side=Ke):ui(b,U,G)}this.compile=function(b,U,G=null){G===null&&(G=b),p=gt.get(G),p.init(),M.push(p),G.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),b!==G&&b.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights(_._useLegacyLights);let W=new Set;return b.traverse(function(B){let mt=B.material;if(mt)if(Array.isArray(mt))for(let yt=0;yt<mt.length;yt++){let Rt=mt[yt];$t(Rt,G,B),W.add(Rt)}else $t(mt,G,B),W.add(mt)}),M.pop(),p=null,W},this.compileAsync=function(b,U,G=null){let W=this.compile(b,U,G);return new Promise(B=>{function mt(){if(W.forEach(function(yt){Gt.get(yt).currentProgram.isReady()&&W.delete(yt)}),W.size===0){B(b);return}setTimeout(mt,10)}vt.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Qt=null;function ae(b){Qt&&Qt(b)}function Ae(){be.stop()}function ee(){be.start()}let be=new Xl;be.setAnimationLoop(ae),typeof self<"u"&&be.setContext(self),this.setAnimationLoop=function(b){Qt=b,At.setAnimationLoop(b),b===null?be.stop():be.start()},At.addEventListener("sessionstart",Ae),At.addEventListener("sessionend",ee),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(U),U=At.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,U,S),p=gt.get(b,M.length),p.init(),M.push(p),Ut.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ft.setFromProjectionMatrix(Ut),st=this.localClippingEnabled,q=lt.init(this.clippingPlanes,st),x=kt.get(b,u.length),x.init(),u.push(x),qe(b,U,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(J,K),this.info.render.frame++,q===!0&&lt.beginShadows();let G=p.state.shadowsArray;if(ut.render(G,b,U),q===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1)&&Lt.render(x,b),p.setupLights(_._useLegacyLights),U.isArrayCamera){let W=U.cameras;for(let B=0,mt=W.length;B<mt;B++){let yt=W[B];Wi(x,b,yt,yt.viewport)}}else Wi(x,b,U);S!==null&&(Zt.updateMultisampleRenderTarget(S),Zt.updateRenderTargetMipmap(S)),b.isScene===!0&&b.onAfterRender(_,b,U),Mt.resetDefaultState(),D=-1,X=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function qe(b,U,G,W){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ft.intersectsSprite(b)){W&&_t.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ut);let yt=j.update(b),Rt=b.material;Rt.visible&&x.push(b,yt,Rt,G,_t.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ft.intersectsObject(b))){let yt=j.update(b),Rt=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),_t.copy(b.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),_t.copy(yt.boundingSphere.center)),_t.applyMatrix4(b.matrixWorld).applyMatrix4(Ut)),Array.isArray(Rt)){let Pt=yt.groups;for(let Wt=0,It=Pt.length;Wt<It;Wt++){let Vt=Pt[Wt],ce=Rt[Vt.materialIndex];ce&&ce.visible&&x.push(b,yt,ce,G,_t.z,Vt)}}else Rt.visible&&x.push(b,yt,Rt,G,_t.z,null)}}let mt=b.children;for(let yt=0,Rt=mt.length;yt<Rt;yt++)qe(mt[yt],U,G,W)}function Wi(b,U,G,W){let B=b.opaque,mt=b.transmissive,yt=b.transparent;p.setupLightsView(G),q===!0&&lt.setGlobalState(_.clippingPlanes,G),mt.length>0&&ps(B,mt,U,G),W&&bt.viewport(y.copy(W)),B.length>0&&Hn(B,U,G),mt.length>0&&Hn(mt,U,G),yt.length>0&&Hn(yt,U,G),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function ps(b,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;let mt=zt.isWebGL2;pt===null&&(pt=new bn(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")?ns:Nn,minFilter:ni,samples:mt?4:0})),_.getDrawingBufferSize(Et),mt?pt.setSize(Et.x,Et.y):pt.setSize(fa(Et.x),fa(Et.y));let yt=_.getRenderTarget();_.setRenderTarget(pt),_.getClearColor(F),R=_.getClearAlpha(),R<1&&_.setClearColor(16777215,.5),_.clear();let Rt=_.toneMapping;_.toneMapping=Un,Hn(b,G,W),Zt.updateMultisampleRenderTarget(pt),Zt.updateRenderTargetMipmap(pt);let Pt=!1;for(let Wt=0,It=U.length;Wt<It;Wt++){let Vt=U[Wt],ce=Vt.object,Le=Vt.geometry,oe=Vt.material,ke=Vt.group;if(oe.side===Ke&&ce.layers.test(W.layers)){let le=oe.side;oe.side=Xe,oe.needsUpdate=!0,Xi(ce,G,W,Le,oe,ke),oe.side=le,oe.needsUpdate=!0,Pt=!0}}Pt===!0&&(Zt.updateMultisampleRenderTarget(pt),Zt.updateRenderTargetMipmap(pt)),_.setRenderTarget(yt),_.setClearColor(F,R),_.toneMapping=Rt}function Hn(b,U,G){let W=U.isScene===!0?U.overrideMaterial:null;for(let B=0,mt=b.length;B<mt;B++){let yt=b[B],Rt=yt.object,Pt=yt.geometry,Wt=W===null?yt.material:W,It=yt.group;Rt.layers.test(G.layers)&&Xi(Rt,U,G,Pt,Wt,It)}}function Xi(b,U,G,W,B,mt){b.onBeforeRender(_,U,G,W,B,mt),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(_,U,G,W,b,mt),B.transparent===!0&&B.side===Ke&&B.forceSinglePass===!1?(B.side=Xe,B.needsUpdate=!0,_.renderBufferDirect(G,U,W,B,b,mt),B.side=Fn,B.needsUpdate=!0,_.renderBufferDirect(G,U,W,B,b,mt),B.side=Ke):_.renderBufferDirect(G,U,W,B,b,mt),b.onAfterRender(_,U,G,W,B,mt)}function ui(b,U,G){U.isScene!==!0&&(U=Ot);let W=Gt.get(b),B=p.state.lights,mt=p.state.shadowsArray,yt=B.state.version,Rt=rt.getParameters(b,B.state,mt,U,G),Pt=rt.getProgramCacheKey(Rt),Wt=W.programs;W.environment=b.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(b.isMeshStandardMaterial?w:fe).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Wt===void 0&&(b.addEventListener("dispose",k),Wt=new Map,W.programs=Wt);let It=Wt.get(Pt);if(It!==void 0){if(W.currentProgram===It&&W.lightsStateVersion===yt)return Yi(b,Rt),It}else Rt.uniforms=rt.getUniforms(b),b.onBuild(G,Rt,_),b.onBeforeCompile(Rt,_),It=rt.acquireProgram(Rt,Pt),Wt.set(Pt,It),W.uniforms=Rt.uniforms;let Vt=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Vt.clippingPlanes=lt.uniform),Yi(b,Rt),W.needsLights=ms(b),W.lightsStateVersion=yt,W.needsLights&&(Vt.ambientLightColor.value=B.state.ambient,Vt.lightProbe.value=B.state.probe,Vt.directionalLights.value=B.state.directional,Vt.directionalLightShadows.value=B.state.directionalShadow,Vt.spotLights.value=B.state.spot,Vt.spotLightShadows.value=B.state.spotShadow,Vt.rectAreaLights.value=B.state.rectArea,Vt.ltc_1.value=B.state.rectAreaLTC1,Vt.ltc_2.value=B.state.rectAreaLTC2,Vt.pointLights.value=B.state.point,Vt.pointLightShadows.value=B.state.pointShadow,Vt.hemisphereLights.value=B.state.hemi,Vt.directionalShadowMap.value=B.state.directionalShadowMap,Vt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Vt.spotShadowMap.value=B.state.spotShadowMap,Vt.spotLightMatrix.value=B.state.spotLightMatrix,Vt.spotLightMap.value=B.state.spotLightMap,Vt.pointShadowMap.value=B.state.pointShadowMap,Vt.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=It,W.uniformsList=null,It}function qi(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=Ni.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Yi(b,U){let G=Gt.get(b);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function vr(b,U,G,W,B){U.isScene!==!0&&(U=Ot),Zt.resetTextureUnits();let mt=U.fog,yt=W.isMeshStandardMaterial?U.environment:null,Rt=S===null?_.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Vn,Pt=(W.isMeshStandardMaterial?w:fe).get(W.envMap||yt),Wt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,It=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Vt=!!G.morphAttributes.position,ce=!!G.morphAttributes.normal,Le=!!G.morphAttributes.color,oe=Un;W.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(oe=_.toneMapping);let ke=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,le=ke!==void 0?ke.length:0,Nt=Gt.get(W),di=p.state.lights;if(q===!0&&(st===!0||b!==X)){let De=b===X&&W.id===D;lt.setState(W,b,De)}let se=!1;W.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==di.state.version||Nt.outputColorSpace!==Rt||B.isBatchedMesh&&Nt.batching===!1||!B.isBatchedMesh&&Nt.batching===!0||B.isInstancedMesh&&Nt.instancing===!1||!B.isInstancedMesh&&Nt.instancing===!0||B.isSkinnedMesh&&Nt.skinning===!1||!B.isSkinnedMesh&&Nt.skinning===!0||B.isInstancedMesh&&Nt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Nt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Nt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Nt.instancingMorph===!1&&B.morphTexture!==null||Nt.envMap!==Pt||W.fog===!0&&Nt.fog!==mt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==lt.numPlanes||Nt.numIntersection!==lt.numIntersection)||Nt.vertexAlphas!==Wt||Nt.vertexTangents!==It||Nt.morphTargets!==Vt||Nt.morphNormals!==ce||Nt.morphColors!==Le||Nt.toneMapping!==oe||zt.isWebGL2===!0&&Nt.morphTargetsCount!==le)&&(se=!0):(se=!0,Nt.__version=W.version);let on=Nt.currentProgram;se===!0&&(on=ui(W,U,B));let gs=!1,Gn=!1,Zi=!1,xe=on.getUniforms(),ln=Nt.uniforms;if(bt.useProgram(on.program)&&(gs=!0,Gn=!0,Zi=!0),W.id!==D&&(D=W.id,Gn=!0),gs||X!==b){xe.setValue(N,"projectionMatrix",b.projectionMatrix),xe.setValue(N,"viewMatrix",b.matrixWorldInverse);let De=xe.map.cameraPosition;De!==void 0&&De.setValue(N,_t.setFromMatrixPosition(b.matrixWorld)),zt.logarithmicDepthBuffer&&xe.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&xe.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),X!==b&&(X=b,Gn=!0,Zi=!0)}if(B.isSkinnedMesh){xe.setOptional(N,B,"bindMatrix"),xe.setOptional(N,B,"bindMatrixInverse");let De=B.skeleton;De&&(zt.floatVertexTextures?(De.boneTexture===null&&De.computeBoneTexture(),xe.setValue(N,"boneTexture",De.boneTexture,Zt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(xe.setOptional(N,B,"batchingTexture"),xe.setValue(N,"batchingTexture",B._matricesTexture,Zt));let Wn=G.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0&&zt.isWebGL2===!0)&&at.update(B,G,on),(Gn||Nt.receiveShadow!==B.receiveShadow)&&(Nt.receiveShadow=B.receiveShadow,xe.setValue(N,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ln.envMap.value=Pt,ln.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Gn&&(xe.setValue(N,"toneMappingExposure",_.toneMappingExposure),Nt.needsLights&&fn(ln,Zi),mt&&W.fog===!0&&tt.refreshFogUniforms(ln,mt),tt.refreshMaterialUniforms(ln,W,Z,z,pt),Ni.upload(N,qi(Nt),ln,Zt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ni.upload(N,qi(Nt),ln,Zt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&xe.setValue(N,"center",B.center),xe.setValue(N,"modelViewMatrix",B.modelViewMatrix),xe.setValue(N,"normalMatrix",B.normalMatrix),xe.setValue(N,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let De=W.uniformsGroups;for(let Ve=0,cn=De.length;Ve<cn;Ve++)if(zt.isWebGL2){let Xn=De[Ve];St.update(Xn,on),St.bind(Xn,on)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return on}function fn(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function ms(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(b,U,G){Gt.get(b.texture).__webglTexture=U,Gt.get(b.depthTexture).__webglTexture=G;let W=Gt.get(b);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){let G=Gt.get(b);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,G=0){S=b,I=U,A=G;let W=!0,B=null,mt=!1,yt=!1;if(b){let Pt=Gt.get(b);Pt.__useDefaultFramebuffer!==void 0?(bt.bindFramebuffer(N.FRAMEBUFFER,null),W=!1):Pt.__webglFramebuffer===void 0?Zt.setupRenderTarget(b):Pt.__hasExternalTextures&&Zt.rebindTextures(b,Gt.get(b.texture).__webglTexture,Gt.get(b.depthTexture).__webglTexture);let Wt=b.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(yt=!0);let It=Gt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(It[U])?B=It[U][G]:B=It[U],mt=!0):zt.isWebGL2&&b.samples>0&&Zt.useMultisampledRTT(b)===!1?B=Gt.get(b).__webglMultisampledFramebuffer:Array.isArray(It)?B=It[G]:B=It,y.copy(b.viewport),T.copy(b.scissor),Q=b.scissorTest}else y.copy(et).multiplyScalar(Z).floor(),T.copy(nt).multiplyScalar(Z).floor(),Q=ht;if(bt.bindFramebuffer(N.FRAMEBUFFER,B)&&zt.drawBuffers&&W&&bt.drawBuffers(b,B),bt.viewport(y),bt.scissor(T),bt.setScissorTest(Q),mt){let Pt=Gt.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Pt.__webglTexture,G)}else if(yt){let Pt=Gt.get(b.texture),Wt=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pt.__webglTexture,G||0,Wt)}D=-1},this.readRenderTargetPixels=function(b,U,G,W,B,mt,yt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Gt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&yt!==void 0&&(Rt=Rt[yt]),Rt){bt.bindFramebuffer(N.FRAMEBUFFER,Rt);try{let Pt=b.texture,Wt=Pt.format,It=Pt.type;if(Wt!==sn&&wt.convert(Wt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Vt=It===ns&&(vt.has("EXT_color_buffer_half_float")||zt.isWebGL2&&vt.has("EXT_color_buffer_float"));if(It!==Nn&&wt.convert(It)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(It===yn&&(zt.isWebGL2||vt.has("OES_texture_float")||vt.has("WEBGL_color_buffer_float")))&&!Vt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-W&&G>=0&&G<=b.height-B&&N.readPixels(U,G,W,B,wt.convert(Wt),wt.convert(It),mt)}finally{let Pt=S!==null?Gt.get(S).__webglFramebuffer:null;bt.bindFramebuffer(N.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(b,U,G=0){let W=Math.pow(2,-G),B=Math.floor(U.image.width*W),mt=Math.floor(U.image.height*W);Zt.setTexture2D(U,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,b.x,b.y,B,mt),bt.unbindTexture()},this.copyTextureToTexture=function(b,U,G,W=0){let B=U.image.width,mt=U.image.height,yt=wt.convert(G.format),Rt=wt.convert(G.type);Zt.setTexture2D(G,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment),U.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,W,b.x,b.y,B,mt,yt,Rt,U.image.data):U.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,W,b.x,b.y,U.mipmaps[0].width,U.mipmaps[0].height,yt,U.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,W,b.x,b.y,yt,Rt,U.image),W===0&&G.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),bt.unbindTexture()},this.copyTextureToTexture3D=function(b,U,G,W,B=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let mt=Math.round(b.max.x-b.min.x),yt=Math.round(b.max.y-b.min.y),Rt=b.max.z-b.min.z+1,Pt=wt.convert(W.format),Wt=wt.convert(W.type),It;if(W.isData3DTexture)Zt.setTexture3D(W,0),It=N.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)Zt.setTexture2DArray(W,0),It=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment);let Vt=N.getParameter(N.UNPACK_ROW_LENGTH),ce=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Le=N.getParameter(N.UNPACK_SKIP_PIXELS),oe=N.getParameter(N.UNPACK_SKIP_ROWS),ke=N.getParameter(N.UNPACK_SKIP_IMAGES),le=G.isCompressedTexture?G.mipmaps[B]:G.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,le.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,le.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,b.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,b.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,b.min.z),G.isDataTexture||G.isData3DTexture?N.texSubImage3D(It,B,U.x,U.y,U.z,mt,yt,Rt,Pt,Wt,le.data):W.isCompressedArrayTexture?N.compressedTexSubImage3D(It,B,U.x,U.y,U.z,mt,yt,Rt,Pt,le.data):N.texSubImage3D(It,B,U.x,U.y,U.z,mt,yt,Rt,Pt,Wt,le),N.pixelStorei(N.UNPACK_ROW_LENGTH,Vt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ce),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Le),N.pixelStorei(N.UNPACK_SKIP_ROWS,oe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ke),B===0&&W.generateMipmaps&&N.generateMipmap(It),bt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Zt.setTextureCube(b,0):b.isData3DTexture?Zt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Zt.setTexture2DArray(b,0):Zt.setTexture2D(b,0),bt.unbindTexture()},this.resetState=function(){I=0,A=0,S=null,bt.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Wa?"display-p3":"srgb",e.unpackColorSpace=ie.workingColorSpace===pr?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Ra=class extends os{};Ra.prototype.isWebGL1Renderer=!0;var ar=class extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ls=class extends Ie{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Re,h=Re,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vi=class extends Ie{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var or=class extends zn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Kt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var cs=class extends zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function zs(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function cm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Hi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ca=class extends Hi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:No,endingEnd:No}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fo:r=t,a=2*e-n;break;case Oo:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fo:o=t,l=2*n-e;break;case Oo:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),x=g*g,p=x*g,u=-f*p+2*f*x-f*g,M=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*g+1,_=(-1-m)*p+(1.5+m)*x+.5*g,C=m*p-m*x;for(let I=0;I!==a;++I)r[I]=u*o[h+I]+M*o[c+I]+_*o[l+I]+C*o[d+I];return r}},Pa=class extends Hi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},Ia=class extends Hi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},rn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=zs(e,this.TimeBufferType),this.values=zs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:zs(t.times,Array),values:zs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ia(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ca(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Vs:e=this.InterpolantFactoryMethodDiscrete;break;case Hs:e=this.InterpolantFactoryMethodLinear;break;case Lr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return Hs;case this.InterpolantFactoryMethodSmooth:return Lr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&cm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Lr,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,f=d-n,m=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[f+g]||x!==e[m+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let m=0;m!==n;++m)e[f+m]=e[d+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=Hs;var li=class extends rn{};li.prototype.ValueTypeName="bool";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Vs;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var La=class extends rn{};La.prototype.ValueTypeName="color";var Da=class extends rn{};Da.prototype.ValueTypeName="number";var Ua=class extends Hi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Bn.slerpFlat(r,0,o,c-a,o,c,l);return r}},hs=class extends rn{InterpolantFactoryMethodLinear(t){return new Ua(this.times,this.values,this.getValueSize(),t)}};hs.prototype.ValueTypeName="quaternion";hs.prototype.DefaultInterpolation=Hs;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var ci=class extends rn{};ci.prototype.ValueTypeName="string";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=Vs;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends rn{};Na.prototype.ValueTypeName="vector";var Fa=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},hm=new Fa,Oa=class{constructor(t){this.manager=t!==void 0?t:hm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Oa.DEFAULT_MATERIAL_NAME="__DEFAULT";var lr=class extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},cr=class extends lr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ra=new _e,Al=new V,Rl=new V,Ba=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rs,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Al.setFromMatrixPosition(t.matrixWorld),e.position.copy(Al),Rl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rl),e.updateMatrixWorld(),ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ra),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var za=class extends Ba{constructor(){super(new ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hr=class extends lr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new za}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var qa="\\[\\]\\.:\\/",um=new RegExp("["+qa+"]","g"),Ya="[^"+qa+"]",dm="[^"+qa.replace("\\.","")+"]",fm=/((?:WC+[\/:])*)/.source.replace("WC",Ya),pm=/(WCOD+)?/.source.replace("WCOD",dm),mm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ya),gm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ya),_m=new RegExp("^"+fm+pm+mm+gm+"$"),xm=["material","materials","bones","map"],ka=class{constructor(t,e,n){let s=n||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},de=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(um,"")}static parseTrackName(t){let e=_m.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);xm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};de.Composite=ka;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Im=new Float32Array(1);var Cl=new _e,ur=class{constructor(t,e,n=0,s=1/0){this.ray=new Ks(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ss,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Cl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cl),this}intersectObject(t,e=!0,n=[]){return Va(t,this,n,e),n.sort(Pl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Va(t[s],this,n,e);return n.sort(Pl),n}};function Pl(i,t){return i.distance-t.distance}function Va(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)Va(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"162"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="162");var Kl={original:{label:"Paper original (specks)",specks:!0,scale:1,contrast:0,bump:0,roughness:.5},smooth:{label:"Smooth",generate:"flat",scale:1,contrast:0,bump:0,roughness:.55},fine:{label:"Fine tooth",generate:"fine",scale:2,contrast:.03,bump:.35,roughness:.62},laid:{label:"Laid",generate:"laid",scale:1,contrast:.03,bump:.45,roughness:.64},cotton:{label:"Cotton rag (scan)",toneMap:new URL("./textures/cotton-tone.jpg",import.meta.url).href,heightMap:new URL("./textures/cotton-height.jpg",import.meta.url).href,scale:2.5,contrast:.02,bump:.5,roughness:.72},fiber:{label:"Fibre (scan)",toneMap:new URL("./textures/fiber-tone.jpg",import.meta.url).href,heightMap:new URL("./textures/fiber-height.jpg",import.meta.url).href,scale:2,contrast:.045,bump:.25,roughness:.64},recycled:{label:"Recycled (scan)",toneMap:new URL("./textures/recycled-tone.jpg",import.meta.url).href,heightMap:new URL("./textures/recycled-height.jpg",import.meta.url).href,scale:2,contrast:.05,bump:.2,roughness:.6}},gr="original";function ym(i=gr){let t=typeof i=="string"?{preset:i}:{...i},n={...Kl[t.preset]??(t.texture||t.toneMap||t.heightMap?{}:Kl[gr]),...t};return t.texture?(n.toneMap=t.texture,n.heightMap=t.texture,delete n.generate):(t.toneMap||t.heightMap)&&delete n.generate,n.scale??=1,n.contrast??=.03,n.bump??=.3,n.roughness??=.6,n}async function Ja(i){let t=ym(i),e,n;t.generate?e=n=Sm(t.generate):[e,n]=await Promise.all([jl(t.toneMap??t.heightMap),jl(t.heightMap??t.toneMap)]);let{mean:s,std:r}=Mm(e);return{tone:e,height:n,mean:s,std:r,spec:t}}function jl(i){return typeof i!="string"?Promise.resolve(i):new Promise((t,e)=>{let n=new Image;n.crossOrigin="anonymous",n.onload=()=>t(n),n.onerror=()=>e(new Error(`paper texture failed to load: ${i}`)),n.src=i})}function Mm(i){try{let t=i.naturalWidth||i.width,e=i.naturalHeight||i.height,n=Math.min(512,t,e),s=document.createElement("canvas");s.width=s.height=n;let r=s.getContext("2d",{willReadFrequently:!0});r.drawImage(i,0,0);let o=r.getImageData(0,0,n,n).data,a=0,l=0;for(let h=0;h<o.length;h+=4){let d=(.299*o[h]+.587*o[h+1]+.114*o[h+2])/255;a+=d,l+=d*d}let c=a/(n*n);return{mean:c,std:Math.max(Math.sqrt(Math.max(0,l/(n*n)-c*c)),.001)}}catch{return{mean:.5,std:.1}}}var Za=new Map;function Sm(i){if(Za.has(i))return Za.get(i);let t=i==="flat"?4:1024,e=new Float32Array(t*t).fill(.5);if(i!=="flat"){let o=bm(i==="laid"?7:3),a=new Float32Array(t*t).map(()=>o()),l=Em(a,t),c=Ql(t,32,o),h=Ql(t,8,o);for(let d=0;d<e.length;d++)e[d]=i==="laid"?.55*l[d]+.3*c[d]+.15*h[d]:.88*l[d]+.09*c[d]+.03*h[d];if(i==="laid")for(let m=0;m<t;m++){let g=.5+.5*Math.sin(m/t*146*2*Math.PI);for(let x=0;x<t;x++){let p=Math.min(x%128,128-x%128),u=m*t+x;e[u]=.65*e[u]+.3*g+.05-.18*Math.exp(-p*p/4)}}Tm(e)}let n=document.createElement("canvas");n.width=n.height=t;let s=n.getContext("2d"),r=s.createImageData(t,t);for(let o=0;o<e.length;o++){let a=Math.round(e[o]*255);r.data[o*4]=r.data[o*4+1]=r.data[o*4+2]=a,r.data[o*4+3]=255}return s.putImageData(r,0,0),Za.set(i,n),n}function bm(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Em(i,t){let e=new Float32Array(i.length);for(let n=0;n<t;n++)for(let s=0;s<t;s++){let r=0;for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++)r+=i[(n+o+t)%t*t+(s+a+t)%t]*(a===0&&o===0?4:a===0||o===0?2:1);e[n*t+s]=r/16}return e}function Ql(i,t,e){let n=Float32Array.from({length:t*t},e),s=new Float32Array(i*i),r=(o,a)=>n[(a+t)%t*t+(o+t)%t];for(let o=0;o<i;o++)for(let a=0;a<i;a++){let l=a/i*t,c=o/i*t,h=Math.floor(l),d=Math.floor(c),f=l-h,m=c-d;f=f*f*(3-2*f),m=m*m*(3-2*m);let g=r(h,d)+(r(h+1,d)-r(h,d))*f,x=r(h,d+1)+(r(h+1,d+1)-r(h,d+1))*f;s[o*i+a]=g+(x-g)*m}return s}function Tm(i){let t=1/0,e=-1/0;for(let n of i)n<t&&(t=n),n>e&&(e=n);for(let n=0;n<i.length;n++)i[n]=(i[n]-t)/(e-t||1)}var wm={book:{aspect:28/21,pageWidth:896,fit:.82,perspective:40,visibleSheets:5,single:!1,interactive:!0,maxDpr:2,splitX:.3},block:{thickness:.05,color:"#e8dbbb"},material:{metalness:.17,showThrough:.04,inkGloss:.33},cover:{hard:!1,overhang:.014,thickness:.015,raise:.004,pressPages:.35,texture:"smooth",color:"#ffffff",grain:1,contrast:.02,bump:.3,roughness:.45,metalness:0},specks:{size:1.46,darken:.17,roughen:.33},shape:{liftMaxX:.14,liftMaxZ:.04,liftDipX:.58,liftDipZ:.035,liftMidX:.72,liftMidZ:.04,liftEdgeZ:.03,wrinkle:.13},light:{shadowMapSize:2048,ambient:1.5,sky:"#ffffff",ground:"#a1aeaf",sun:2,sunColor:"#ffffff",sunX:-3.5,sunY:1.3,sunZ:4.1,shadow:.15},curl:{angleMaxDeg:45,curlArc:.88,curlArcJitter:.2,curlAngleJitter:.3,curlTiltJitterDeg:6,cornerRollMax:2.3,directionSmoothTime:.4,curveSmoothTime:.5},hover:{progress:.03,smoothTime:2,gapToSheetAbove:.1},jump:{last:.62,first:.78,total0:1,total1:1.45,ratio:.8},riffle:{startTime:.22,firstFlipTime:1.2,fastestFlipTime:.5,speedUpSheets:20,firstGapShare:.15,fastestGapShare:.05,moveSlopPx:40},drag:{turnFraction:.8,progressSmoothTime:.9,fallTime:1,fallTimeExponent:.5,landingSpeed:.5,commitProgress:.2,clickSlopPx:5},flip:{flipTime:.85,followArcGainMin:1,followArcGainMax:1.08}};function Am(i,t={}){let e=structuredClone(i);for(let[n,s]of Object.entries(t))s&&typeof s=="object"&&!Array.isArray(s)&&e[n]&&typeof e[n]=="object"?Object.assign(e[n],s):e[n]=s;return e}var $a=1e-4;function tc(i,{pageCount:t,renderPage:e,pageColor:n="#f3efe6",config:s={},paper:r=gr,start:o=0,autoOpen:a=!1,onSpread:l,onReady:c,onIdle:h,view:d}){let f=Am(wm,s),{CURL:m,HOVER:g,RIFFLE:x,DRAG:p,FLIP:u}={CURL:f.curl,HOVER:f.hover,RIFFLE:f.riffle,DRAG:f.drag,FLIP:f.flip},M=Math.ceil(t/2),_=f.book.aspect,C=_/2,I=Math.round(f.book.pageWidth),A=Math.round(I*_),S=an(o|0,0,M),D=[],X=[],y=!1,T=!0,Q=0,F=-1,R=!1,H=!1,z=!1,Z=!0,J=!1,K=null,et=null,nt=null,ht=null,Ft=!1,q=0,st=0,pt=-1,Ut="",Et=new AbortController,_t=(E,P,O,$)=>E.addEventListener(P,O,{signal:Et.signal,...$}),Ot=new os({antialias:!0,alpha:!0});Ot.shadowMap.enabled=!0,Ot.shadowMap.type=dr,Ot.shadowMap.autoUpdate=!1,Ot.shadowMap.needsUpdate=!0;let Tt=Ot.domElement;Tt.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none;opacity:0;transition:opacity .6s ease";let N=document.createElement("div");N.style.cssText="position:absolute;inset:0;touch-action:pan-y pinch-zoom;cursor:pointer",i.append(Tt,N);let pe=new ar,vt=new Oe(40,1,1.5,4.5),zt=new cr,bt=new hr;bt.castShadow=!0,bt.shadow.mapSize.set(f.light.shadowMapSize,f.light.shadowMapSize),Object.assign(bt.shadow.camera,{left:-.8,right:1,top:C+.18,bottom:-(C+.38),near:1.5,far:6.6}),bt.shadow.camera.updateProjectionMatrix(),bt.shadow.bias=-.001;let Ht=new Be(new oi(8,8),new or);Ht.position.z=-1e-5,Ht.receiveShadow=!0,pe.add(zt,bt,bt.target,Ht);let Gt=new cs({color:f.block.color,roughness:.92,metalness:0});Gt.onBeforeCompile=E=>{E.vertexShader=`varying float vWz;
`+E.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vWz = (modelMatrix * vec4(transformed, 1.0)).z;`),E.fragmentShader=`varying float vWz;
float h1(float n){return fract(sin(n*127.1)*43758.5453);}
`+E.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
      float L = vWz * ${(1/.0016).toFixed(1)}; float id = floor(L), fr = fract(L);
      diffuseColor.rgb *= 0.88 + 0.12 * h1(id) - 0.10 * smoothstep(0.7, 1.0, fr);`)};let Zt=new kn(1,1,1),fe=[1,-1].map(E=>{let P=new Be(Zt,Gt);return P.castShadow=!0,P.receiveShadow=!0,P.userData.side=E,pe.add(P),P});function w(){let E=f.block.thickness,P=0,O=0;for(let xt=0;xt<M;xt++)Mt(xt)||(P+=D[xt].flipProgress,O++);P=O?P/O:0;let $=E*(1-P),it=E*P;gt.uBr.value=$,gt.uBl.value=it;for(let xt of fe){let ne=Math.max(xt.userData.side>0?$:it,1e-4)-8e-4;xt.visible=ne>.001,xt.scale.set(.992,_-.006,Math.max(ne,1e-4)),xt.position.set(xt.userData.side*.496,0,Math.max(ne,1e-4)/2)}}let v=Ot.capabilities.getMaxAnisotropy(),Y=new Map,j=E=>{if(!Y.has(E)){let P=new Kt(E),O=new ls(new Uint8Array([P.r,P.g,P.b].map($=>Math.round($*255)).concat(255)),1,1);O.colorSpace=Je,O.needsUpdate=!0,Y.set(E,O)}return Y.get(E)},rt=E=>j(typeof n=="function"?n(E):n),tt=new ls(new Uint8Array([128,128,128,255]),1,1);tt.needsUpdate=!0;let kt=(()=>{let P=document.createElement("canvas");P.width=P.height=256;let O=P.getContext("2d"),$=O.createImageData(256,256),it=new Float32Array(256*256);for(let ne=0;ne<it.length;ne++)it[ne]=Math.random();for(let ne=0;ne<256;ne++)for(let ve=0;ve<256;ve++){let Ue=ne*256+ve,jt=(it[Ue]+it[ne*256+(ve+1)%256]+it[(ne+1)%256*256+ve])/3,re=Math.round((.55*it[Ue]+.45*jt)*255);$.data.set([re,re,re,255],Ue*4)}O.putImageData($,0,0);let xt=new Vi(P);return xt.wrapS=xt.wrapT=Bi,xt.anisotropy=v,xt})(),gt={LIFT_MAX_X:{value:0},LIFT_MAX_Z:{value:0},LIFT_DIP_X:{value:0},LIFT_DIP_Z:{value:0},LIFT_MID_X:{value:0},LIFT_MID_Z:{value:0},LIFT_EDGE_Z:{value:0},DEFORM:{value:0},PAPER_TRANSPARENCY:{value:0},INK_GLOSS:{value:0},PATTERN_SIZE:{value:0},TEXTURE_COLOR:{value:0},PATTERN_ROUGHNESS:{value:0},uPatternTex:{value:kt},uFloor:{value:-1e9},uCoverScale:{value:new Xt(1,1)},uBoardZ:{value:.05},uThickness:{value:0},uBr:{value:0},uBl:{value:0}},lt=`
    const float SHEET_ASPECT = ${_.toFixed(5)};
    const float NORMAL_EPSILON = 0.03;
    const float SHADOW_OFFSET_X = 0.004;
    uniform float LIFT_MAX_X, LIFT_MAX_Z, LIFT_DIP_X, LIFT_DIP_Z, LIFT_MID_X, LIFT_MID_Z, LIFT_EDGE_Z, DEFORM;
    uniform float PAPER_TRANSPARENCY, INK_GLOSS, PATTERN_SIZE, TEXTURE_COLOR, PATTERN_ROUGHNESS, uSpecks, uFloor;
  `,ut=`
    ${lt}
    uniform float uFlipProgress, uWrinkleSide, uBendAngle, uDirection, uStackLift;
    uniform vec2 uFold, uCurl, uFlipRotation;
    uniform float uRigid, uBoardZ, uThickness, uBr, uBl;
    uniform vec2 uCoverScale;
    varying vec2 vGrainUv;
    varying float vThick;
    attribute vec3 aNoise;
    attribute float aThick;
    const float HALF_PI = 1.57079633;

    vec3 _sheetPosition(vec2 uv, float rawNoise) {
      float flatX = uv.x * mix(1.0, uCoverScale.x, uRigid);
      float flatY = (uv.y - 0.5) * SHEET_ASPECT * mix(1.0, uCoverScale.y, uRigid);
      float wrinkle = mix(rawNoise, 1.0 - rawNoise, uFlipProgress) - .5;
      wrinkle *= smoothstep(0.0, 0.35, uv.x) * DEFORM * uStackLift * (1.0 - uRigid);

      float lift;
      if (uv.x <= LIFT_MAX_X) lift = LIFT_MAX_Z * sin(uv.x / LIFT_MAX_X * HALF_PI);
      else if (uv.x <= LIFT_DIP_X) lift = mix(LIFT_MAX_Z, LIFT_DIP_Z, smoothstep(LIFT_MAX_X, LIFT_DIP_X, uv.x));
      else if (uv.x <= LIFT_MID_X) lift = mix(LIFT_DIP_Z, LIFT_MID_Z, smoothstep(LIFT_DIP_X, LIFT_MID_X, uv.x));
      else lift = mix(LIFT_MID_Z, LIFT_EDGE_Z, 1.0 - cos((uv.x - LIFT_MID_X) / (1.0 - LIFT_MID_X) * HALF_PI));
      lift *= uStackLift;
      // a board stays flat: on top of its stack when it's the top sheet, on the table when it's the bottom one
      float onTop = clamp((uStackLift - 0.31) / 0.69, 0.0, 1.0);
      lift = mix(lift, uBoardZ * onTop, uRigid);

      float localU =  flatX * uFold.x + flatY * uFold.y;
      float localV = -flatX * uFold.y + flatY * uFold.x;
      float beyond = max(0.0, localU - uCurl.x);
      float angle = beyond / uCurl.y * uBendAngle;
      float sinc = abs(angle) < 1e-4 ? 1.0 : sin(angle) / angle;
      float versine = abs(angle) < 1e-4 ? 0.0 : (1.0 - cos(angle)) / angle;
      float curledU = localU - beyond + beyond * sinc;
      float pz = -uDirection * beyond * versine;
      // board thickness: grows upward when the board is on top of its stack, downward when it's underneath
      // which way the slab grows flips with the board: on the right it is +z local, once turned over, -z local
      float base = mix(1.0 - onTop, onTop, 0.5 * (1.0 - uFlipRotation.x));
      pz += uRigid * (aThick - base) * uThickness;
      float px = curledU * uFold.x - localV * uFold.y;
      float py = curledU * uFold.y + localV * uFold.x;

      vec3 p = vec3(px * uFlipRotation.x - pz * uFlipRotation.y, py, px * uFlipRotation.y + pz * uFlipRotation.x);
      p.z += lift + uWrinkleSide * wrinkle;
      p.z += mix(1.0, clamp((uStackLift - 0.31) / 0.69, 0.0, 1.0), uRigid) * mix(uBr, uBl, uFlipProgress);   // [bz] il foglio poggia sul blocco
      p.z = mix(max(p.z, uFloor), p.z, uRigid);   // pages can't sink into the table or a board
      return p;
    }
    vec3 _sheetP;
  `,Lt=(()=>{let E=new oi(1,_,64,Math.round(64*_)),P=E.attributes.uv,O=P.count,$=(jt,re)=>{let me=Math.sin(jt*127.1+re*311.7)*43758.5453;return me-Math.floor(me)},it=(jt,re)=>{let me=Math.floor(jt),Bt=Math.floor(re),Ct=jt-me,ge=re-Bt,Ne=Ct*Ct*(3-2*Ct),En=ge*ge*(3-2*ge);return hi(hi($(me,Bt),$(me+1,Bt),Ne),hi($(me,Bt+1),$(me+1,Bt+1),Ne),En)},xt=(jt,re)=>{let me=jt/1.2+614.98,Bt=(re-.5)*_/1.2+357.42,Ct=0,ge=.5;for(let Ne=0;Ne<3;Ne++)Ct+=ge*it(me,Bt),ge*=.5,me*=2,Bt*=2;return Ct},ne=new Float32Array(O*3),ve=.03,Ue=.03/_;for(let jt=0;jt<O;jt++){let re=P.getX(jt),me=P.getY(jt);ne[jt*3]=xt(re,me),ne[jt*3+1]=xt(re+ve,me),ne[jt*3+2]=xt(re,me+Ue)}return E.setAttribute("aNoise",new we(ne,3)),E})(),at=(()=>{let E=new kn(1,_,1),P=E.attributes.position,O=P.count,$=new Float32Array(O*2),it=new Float32Array(O);for(let xt=0;xt<O;xt++)$[2*xt]=P.getX(xt)+.5,$[2*xt+1]=P.getY(xt)/_+.5,it[xt]=P.getZ(xt)+.5;return E.setAttribute("uv",new we($,2)),E.setAttribute("aThick",new we(it,1)),E.setAttribute("aNoise",new we(new Float32Array(O*3),3)),E})();Lt.setAttribute("aThick",new we(new Float32Array(Lt.attributes.uv.count),1));let ue=(E,P)=>.31+.69*(M>1?(E+(M-1-2*E)*(1-P))/(M-1):1);function Jt(E){let P={uDirection:{value:1},uStackLift:{value:1},uFlipProgress:{value:0},uWrinkleSide:{value:-1},uBendAngle:{value:0},uFold:{value:new Xt(1,0)},uCurl:{value:new Xt(0,1)},uFlipRotation:{value:new Xt(1,0)},uBackMap:{value:rt(2*E+1)},uRigid:{value:0},...gt,uSpecks:{value:0},uToneMap:{value:tt},uToneMean:{value:.5},uToneStd:{value:.1},uContrast:{value:0},uToneRepeat:{value:new Xt(1,_)},uTint:{value:new Kt("#ffffff")},uTintSide:{value:1}},O=new cs({map:rt(2*E),side:Ke,metalness:f.material.metalness,roughness:.5,bumpMap:tt,bumpScale:0});O.onBeforeCompile=xt=>{Object.assign(xt.uniforms,P),xt.vertexShader=ut+xt.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
          if (uRigid > 0.5) {
            // a board only rotates about the spine, so its normal is the mesh normal rotated the same way
            objectNormal = vec3(normal.x * uFlipRotation.x - normal.z * uFlipRotation.y, normal.y, normal.x * uFlipRotation.y + normal.z * uFlipRotation.x);
            _sheetP = _sheetPosition(uv, 0.0);
          } else {
            vec2 du = vec2(NORMAL_EPSILON, NORMAL_EPSILON / SHEET_ASPECT);
            vec3 p0 = _sheetPosition(uv, aNoise.x);
            vec3 px = _sheetPosition(uv + vec2(du.x, 0.0), aNoise.y);
            vec3 py = _sheetPosition(uv + vec2(0.0, du.y), aNoise.z);
            objectNormal = normalize(cross(px - p0, py - p0));
            _sheetP = p0;
          }`).replace("#include <begin_vertex>",`vec3 transformed = _sheetP;
vGrainUv = uv;
vThick = aThick;`),xt.fragmentShader=lt+`
        uniform sampler2D uBackMap, uPatternTex, uToneMap;
        uniform float uToneMean, uToneStd, uContrast, uRigid;
        uniform vec3 uTint;
        uniform float uTintSide;
        uniform vec2 uToneRepeat;
        varying vec2 vGrainUv;
        varying float vThick;
      `+xt.fragmentShader.replace("#include <normal_fragment_begin>",`
          vec3 normal = normalize(vNormal);
          float faceDirection = normal.z >= 0.0 ? 1.0 : -1.0;
          normal *= faceDirection;
          vec3 nonPerturbedNormal = normal;`).replace("#include <map_fragment>",`
          float inkAmount = 0.0;
          #ifdef USE_MAP
            vec4 frontColor = texture2D(map, vMapUv);
            vec4 backColor = texture2D(uBackMap, vec2(1.0 - vMapUv.x, vMapUv.y));
            bool facing = gl_FrontFacing;
            if (uRigid > 0.5 && vThick < 0.5) facing = !facing;   // the underside of a board is its own front face
            vec4 faceColor = facing ? frontColor : backColor;
            vec4 otherColor = facing ? backColor : frontColor;
            vec4 sheetColor = faceColor;
            sheetColor.rgb *= mix(vec3(1.0), otherColor.rgb, PAPER_TRANSPARENCY);
            diffuseColor *= sheetColor;
            inkAmount = 1.0 - dot(faceColor.rgb, vec3(0.299, 0.587, 0.114));
          #endif
          float paperTone = dot(texture2D(uToneMap, vGrainUv * uToneRepeat).rgb, vec3(0.299, 0.587, 0.114));
          diffuseColor.rgb *= clamp(1.0 + (paperTone - uToneMean) / uToneStd * uContrast, 0.0, 2.0);
          // the cover colour goes on the outside of a board only; the inside keeps the page's own look
          float outside = (facing ? 1.0 : -1.0) * uTintSide > 0.0 ? 1.0 : 0.0;
          diffuseColor.rgb *= mix(vec3(1.0), uTint, outside);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
          roughnessFactor *= mix(1., 0., inkAmount * INK_GLOSS);
          float pattern = texture2D(uPatternTex, vGrainUv * PATTERN_SIZE * vec2(1.0, SHEET_ASPECT)).r;
          pattern = 2. * pow(pattern, 7.) * uSpecks;
          roughnessFactor = clamp(mix(roughnessFactor, 1.0, clamp(pattern * PATTERN_ROUGHNESS, 0.0, 1.0)), 0.0, 1.0);`).replace("#include <opaque_fragment>",`#include <opaque_fragment>
          gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.), pattern * TEXTURE_COLOR);`)};let $=new as({depthPacking:Ga,side:Ke});$.onBeforeCompile=xt=>{Object.assign(xt.uniforms,P),xt.vertexShader=ut+xt.vertexShader.replace("#include <begin_vertex>","vec3 transformed = _sheetPosition(uv, aNoise.x) - vec3(SHADOW_OFFSET_X, 0., 0.);")};let it=new Be(Lt,O);return it.customDepthMaterial=$,it.castShadow=!0,it.receiveShadow=!0,pe.add(it),{mesh:it,mat:O,depth:$,uniforms:P,flipProgress:E<S?1:0,direction:1,directionSmooth:1,curve:{curlArc:0,curlAngleDeg:0},curveTarget:{curlArc:0,curlAngleDeg:0},wobble:{arc:.5,angle:.5,tilt:0},liftBase:ue(E,0),liftSpan:ue(E,1)-ue(E,0)}}for(let E=0;E<M;E++)D.push(Jt(E));function wt(){let E=f.shape,P=f.material,O=f.specks,$=f.light;gt.LIFT_MAX_X.value=E.liftMaxX,gt.LIFT_MAX_Z.value=E.liftMaxZ,gt.LIFT_DIP_X.value=E.liftDipX,gt.LIFT_DIP_Z.value=E.liftDipZ,gt.LIFT_MID_X.value=E.liftMidX,gt.LIFT_MID_Z.value=E.liftMidZ,gt.LIFT_EDGE_Z.value=E.liftEdgeZ,gt.DEFORM.value=E.wrinkle,gt.PAPER_TRANSPARENCY.value=P.showThrough,gt.INK_GLOSS.value=P.inkGloss,gt.PATTERN_SIZE.value=O.size,gt.TEXTURE_COLOR.value=O.darken,gt.PATTERN_ROUGHNESS.value=O.roughen;let it=f.cover;it.hard&&(gt.DEFORM.value*=it.pressPages),gt.uFloor.value=it.hard?.002:-1e9,gt.uThickness.value=it.thickness,Ht.position.z=-(it.hard?it.thickness:0)-1e-5,gt.uCoverScale.value.set(1+it.overhang,1+2*it.overhang/_),gt.uBoardZ.value=E.liftMaxZ+.5*gt.DEFORM.value+it.raise,it.hard&&it.texture!==qe&&ui(),Object.assign(ae,{scale:it.grain,contrast:it.contrast,bump:it.bump,roughness:it.roughness}),ae.height.repeat.set(it.grain,it.grain*_),St(),zt.intensity=$.ambient,zt.color.set($.sky),zt.groundColor.set($.ground),bt.intensity=$.sun,bt.color.set($.sunColor),bt.position.set($.sunX,$.sunY,$.sunZ),Ht.material.opacity=$.shadow,te(),T=!0}let Mt=E=>f.cover.hard&&M>1&&(E===0||E===M-1);function St(){D.forEach((E,P)=>{let O=Mt(P),$=O?ae:Qt,it=E.uniforms;it.uRigid.value=O?1:0,E.mesh.geometry=O?at:Lt,it.uSpecks.value=$.specks?1:0,it.uToneMap.value=$.tone,it.uToneMean.value=$.mean,it.uToneStd.value=$.std,it.uContrast.value=$.contrast,it.uToneRepeat.value.set($.scale,$.scale*_),it.uTint.value.set(O?f.cover.color:"#ffffff"),it.uTintSide.value=P===0?1:-1,E.mat.bumpMap=$.height,E.mat.bumpScale=$.bump,E.mat.roughness=$.roughness,E.mat.metalness=O?f.cover.metalness:f.material.metalness}),T=!0}let Dt=Object.assign({x:0,y:0,s:300},d||{}),At=null;function te(){let E=Tt.clientHeight||1,P=Tt.clientWidth||1,O=f.book.perspective,$=2.99*Math.tan(20*Math.PI/180)/Math.tan(O/2*Math.PI/180);vt.fov=O,vt.aspect=P/E,vt.position.set(Dt.x,Dt.y,$),vt.lookAt(Dt.x,Dt.y,0),vt.near=Math.max(.05,$-1.6),vt.far=$+1.6,vt.zoom=2*$*Math.tan(O/2*Math.PI/180)*Dt.s/E,vt.updateProjectionMatrix(),T=!0}function L(E,P=0){if(!P){At=null,Object.assign(Dt,E),te();return}At={from:{...Dt},to:{...Dt,...E},start:performance.now(),dur:P},T=!0}function dt(E){if(!At)return!1;let P=an((E-At.start)/At.dur,0,1),O=P<.5?4*P*P*P:1-Math.pow(-2*P+2,3)/2;for(let $ of["x","y","s"])Dt[$]=hi(At.from[$],At.to[$],O);return te(),P>=1&&(At=null),!0}let k=new V;function ot(E,P,O=0){let $=Tt.getBoundingClientRect();return k.set(E,P,O).project(vt),{x:$.left+(k.x+1)/2*$.width,y:$.top+(1-k.y)/2*$.height}}let ft=()=>2*Dt.s,$t=()=>({tone:tt,height:tt,specks:!1,mean:.5,std:.1,scale:1,contrast:0,bump:0,roughness:.5}),Qt=$t(),ae=$t(),Ae={},ee=0,be=0,qe=null,Wi=E=>{let P=E instanceof HTMLCanvasElement?new Vi(E):new Ie(E);return P.wrapS=P.wrapT=Bi,P.anisotropy=v,P.needsUpdate=!0,P};function ps(E,P){if(E.tone!==tt&&E.tone.dispose(),E.height!==tt&&E.height!==E.tone&&E.height.dispose(),P.spec.specks||!P.tone)Object.assign(E,{tone:tt,height:tt,specks:!!P.spec.specks,mean:.5,std:.1});else{let O=Wi(P.tone);Object.assign(E,{tone:O,height:P.height===P.tone?O:Wi(P.height),specks:!1,mean:P.mean,std:P.std})}}async function Hn(E){let P=++ee,O=await Ja(E);return J||P!==ee?O.spec:(ps(Qt,O),Ae={...O.spec},Xi(O.spec))}function Xi({scale:E,contrast:P,bump:O,roughness:$}={}){for(let[it,xt]of Object.entries({scale:E,contrast:P,bump:O,roughness:$}))xt!=null&&(Qt[it]=xt,Ae[it]=xt);return Qt.height.repeat.set(Qt.scale,Qt.scale*_),St(),{...Ae}}async function ui(){let E=++be,P=f.cover.texture;try{let O=await Ja(P);if(J||E!==be)return;ps(ae,O),qe=P,ae.height.repeat.set(ae.scale,ae.scale*_),St()}catch(O){console.warn("page-turn-book: cover texture",O)}}let qi=new ur,Yi=new Xt,vr=new en(new V(0,0,1),0),fn=new V;function ms(E,P){let O=Tt.getBoundingClientRect();return Yi.set((E-O.left)/O.width*2-1,-((P-O.top)/O.height)*2+1),qi.setFromCamera(Yi,vt),qi.ray.intersectPlane(vr,fn)?{angle:Math.atan2(fn.y,fn.x),dist:Math.hypot(fn.x,fn.y)}:null}let b=E=>{let P=Math.abs(E)*Math.PI/180;return m.cornerRollMax/(Math.PI*(Math.cos(P)/(1-C*Math.sin(P))))},U=E=>X.some(P=>P.sheet===E);function G(E){let P=D[F];if(!(!P||F===E||!U(F)))return(P.direction>0?P.flipProgress>.5:P.flipProgress<.5)?void 0:P.curveTarget}function W(E,P){if(Mt(E))return{curlArc:0,curlAngleDeg:0};let O=D[E].wobble,$=G(E),it=0;if(P){let xt=P.angle*180/Math.PI;xt>90&&(xt=180-xt),xt<-90&&(xt=-180-xt),it=an(-(xt/90)*m.angleMaxDeg*P.dist*(1-O.angle*m.curlAngleJitter)+O.tilt*m.curlTiltJitterDeg,-m.angleMaxDeg,m.angleMaxDeg)}return $?(it=an(it,Math.min(0,$.curlAngleDeg),Math.max(0,$.curlAngleDeg)),{curlArc:an($.curlArc*hi(u.followArcGainMin,u.followArcGainMax,O.arc),$.curlArc,b(it)),curlAngleDeg:it}):{curlArc:Math.min(m.curlArc*(1-O.arc*m.curlArcJitter),b(it)),curlAngleDeg:it}}let B=(E,P,O)=>W(O,ms(E,P)),mt=(E,P)=>{let O=D[E].wobble,$=-.42+.25*O.angle,it=P?.92:-.92;return W(E,{angle:Math.atan2($,it),dist:Math.hypot(it,$)})};function yt(E,P,O){E.curveTarget.curlArc=P.curlArc,E.curveTarget.curlAngleDeg=P.curlAngleDeg,O&&(E.curve.curlArc=P.curlArc,E.curve.curlAngleDeg=P.curlAngleDeg)}function Rt(E,P){if(!ms(E,P))return null;let O=fn.x,$=fn.y;if(Math.abs($)>C+.04||O<(f.book.single?-.08:-1.04)||O>1.04)return null;let it=O>=(f.book.single?f.book.splitX:0);return(it?S>=M:S<=0)?null:{sheet:it?S:S-1,forward:it}}let Pt=E=>{let P=X.findIndex(O=>O.sheet===E);P!==-1&&X.splice(P,1)};function Wt(E,P){F=E,D[E].wobble={arc:Math.random(),angle:Math.random(),tilt:2*Math.random()-1},S=P===1?E+1:E,Er(),T=!0}function It(E,P,O,$=u.flipTime){Wt(E,O);let it=D[E].flipProgress;Pt(E),X.push({sheet:E,from:it,to:O,direction:P?1:-1,start:performance.now(),duration:1e3*$*Math.max(.2,Math.abs(O-it))})}function Vt(E,P){let O=an((P-E.start)/E.duration,0,1);if(E.launch===void 0)return E.from+(E.to-E.from)*.5*(1-Math.cos(O*Math.PI));let $=O*O,it=$*O,xt=(it-2*$+O)*E.launch+(3*$-2*it)+(it-$)*p.landingSpeed;return E.from+(E.to-E.from)*xt}let ce=(E,P,O)=>E+(P-E)*Math.min(O/x.speedUpSheets,1);function Le(E,P,O){if(E?S>=M:S<=0)return!1;let $=E?S:S-1,it=D[$];return yt(it,O?B(O[0],O[1],$):P===0&&nt?it.curveTarget:mt($,E),!0),it.direction=E?1:-1,It($,E,E?1:0,ce(x.firstFlipTime,x.fastestFlipTime,P)),!0}let oe=()=>{nt&&(clearTimeout(nt.timer),nt=null)},ke=()=>{ht&&(clearTimeout(ht.timer),ht=null)};function le(){if(!nt)return;nt.fired||(nt.fired=!0,et=null);let E=ce(x.firstFlipTime,x.fastestFlipTime,nt.count)*ce(x.firstGapShare,x.fastestGapShare,nt.count);Le(nt.forward,nt.count,nt.count===0?null:[nt.x,nt.y])?(nt.count++,nt.timer=setTimeout(le,1e3*E)):oe()}function Nt(E){if(ke(),oe(),E?S>=M:S<=0)return;let P=E?S:S-1,O=D[P];yt(O,mt(P,E),!0),O.direction=E?1:-1,It(P,E,E?1:0)}function di(E){if(E=an(E|0,0,M),oe(),ke(),E===S)return;let P=E>S,O=16;if(Math.abs(E-S)>O){let jt=P?E-O:E+O;for(let re=Math.min(S,jt);re<Math.max(S,jt);re++)Pt(re),D[re].flipProgress=P?1:0;S=jt,Er(),T=!0}let $=f.jump,it=Math.abs(E-S);if(it===1){Nt(P);return}let xt=hi($.total0,$.total1,an((it-2)/6,0,1)),ne=0;for(let jt=0;jt<it-1;jt++)ne+=Math.pow($.ratio,jt);let ve=Math.max(.04,(xt-$.last)/ne);ht={target:E,forward:P,count:0};let Ue=()=>{if(!ht||S===ht.target){ht=null;return}let jt=ht.count,me=Math.abs(ht.target-S)===1?$.last:hi($.first,$.last*.8,jt/Math.max(1,it-2)),Bt=P?S:S-1,Ct=D[Bt];yt(Ct,mt(Bt,P),!0),Ct.direction=P?1:-1,It(Bt,P,P?1:0,me),ht.count++,ht.timer=setTimeout(Ue,1e3*ve*Math.pow($.ratio,jt))};Ue()}let se=(E,P=p.clickSlopPx)=>K&&(E.clientX-K.x)**2+(E.clientY-K.y)**2>P*P;_t(N,"pointermove",E=>{if(nt&&se(E,nt.fired?x.moveSlopPx:void 0)&&oe(),et){et.progress=an(et.base-(E.clientX-K.x)/et.rectWidth/p.turnFraction,0,1),et.targetCurve=B(E.clientX,E.clientY,et.sheet),T=!0;return}q=E.clientX,st=E.clientY,Ft=!0,T=!0}),_t(N,"pointerleave",()=>{Ft=!1,T=!0}),_t(N,"pointerdown",E=>{if(E.button!==0||!R||!f.book.interactive)return;let P=Rt(E.clientX,E.clientY);if(!P)return;ke();let O=D[P.sheet];hc(P.sheet),U(P.sheet)||yt(O,B(E.clientX,E.clientY,P.sheet),!0),Pt(P.sheet),K={x:E.clientX,y:E.clientY},et={sheet:P.sheet,forward:P.forward,base:O.flipProgress,progress:O.flipProgress,rectWidth:ft()/.63,targetCurve:{...O.curveTarget},speed:0},O.direction=P.forward?1:-1,oe(),nt={forward:P.forward,x:E.clientX,y:E.clientY,count:0,fired:!1,timer:setTimeout(le,1e3*x.startTime)};try{N.setPointerCapture(E.pointerId)}catch{}T=!0});function on(E){if(oe(),!et){K=null;return}let P=et,O=se(E);et=null,K=null;try{N.releasePointerCapture(E.pointerId)}catch{}if(!O)return It(P.sheet,P.forward,P.forward?1:0);let $=(P.forward?P.progress-P.base:P.base-P.progress)>=p.commitProgress,it=P.forward===$?1:0;Wt(P.sheet,it);let xt=D[P.sheet].flipProgress,ne=Math.max(Math.abs(it-xt),.001),ve=p.fallTime*Math.pow(ne,p.fallTimeExponent),Ue=it===1?P.speed:-P.speed;Pt(P.sheet),X.push({sheet:P.sheet,from:xt,to:it,direction:P.forward?1:-1,start:performance.now(),duration:1e3*ve,launch:an(Ue*ve/ne,0,2)})}_t(N,"pointerup",on),_t(N,"pointercancel",on);function gs(E,P){let O=E.uniforms,$=E.curve,it=E.directionSmooth,xt=E.flipProgress*Math.PI,ne=Math.sin(xt)*Math.PI*$.curlArc,ve=$.curlAngleDeg*Math.PI/180,Ue=Math.cos(ve),jt=Math.sin(ve),re=1-C*Math.sin(Math.abs(ve)),me=1-re,Bt=Math.max(0,Ue+jt*C*Math.sign(jt)-me),Ct=Bt/re*ne,ge=xt+.5*it*(Bt*(Math.abs(Ct)<1e-4?0:(1-Math.cos(Ct))/Ct));O.uFlipProgress.value=E.flipProgress,O.uWrinkleSide.value=-Math.cos(xt),O.uDirection.value=it,O.uStackLift.value=P,O.uBendAngle.value=ne,O.uFold.value.set(Ue,jt),O.uCurl.value.set(me,re),O.uFlipRotation.value.set(Math.cos(ge),Math.sin(ge))}function Gn(E,P){let O=!1;for(let $ of["curlArc","curlAngleDeg"]){let it=E.curveTarget[$]-E.curve[$];Math.abs(it)<$a?E.curve[$]=E.curveTarget[$]:(E.curve[$]+=it*P,O=!0)}return O}function Zi(E){let P=performance.now();for(let Bt=X.length-1;Bt>=0;Bt--){let Ct=X[Bt],ge=D[Ct.sheet];ge.flipProgress=Vt(Ct,P),ge.direction=Ct.direction,P>=Ct.start+Ct.duration&&(X.splice(Bt,1),T=!0)}let O=Q?Math.min((E-Q)/1e3,.1):1/60;Q=E;let $=1-Math.pow(.001,O/m.directionSmoothTime);if(et){let Bt=D[et.sheet],Ct=1-Math.pow(.01,O/p.progressSmoothTime),ge=(et.progress-Bt.flipProgress)*Ct;Bt.flipProgress+=ge,et.speed=O>0?ge/O:0,yt(Bt,et.targetCurve,!1)}let it=X.length>0||et!==null;dt(P)&&(it=!0);let xt=1-Math.pow(.001,O/g.smoothTime),ne=1-Math.pow(.001,O/m.curveSmoothTime),ve=!Ft||!f.book.interactive||et||nt||ht?null:Rt(q,st),Ue=pt;pt=ve&&R&&!U(ve.sheet)?ve.sheet:-1,pt!==-1&&yt(D[pt],B(q,st,pt),pt!==Ue);for(let Bt=0;Bt<M;Bt++){let Ct=D[Bt];if(!U(Bt)&&!(et&&et.sheet===Bt)){let Ne=Bt>=S?0:1,En=Bt===pt?Ne===0?g.progress:1-g.progress:Ne,to=En-Ct.flipProgress;Math.abs(to)<$a?Ct.flipProgress!==En&&(Ct.flipProgress=En,T=!0):(Ct.flipProgress+=to*xt,it=!0);let Tr=D[Ne===0?Bt-1:Bt+1];if(Tr){let eo=Ne===0?Math.min(Ct.flipProgress,Math.max(0,Tr.flipProgress-g.gapToSheetAbove)):Math.max(Ct.flipProgress,Math.min(1,Tr.flipProgress+g.gapToSheetAbove));eo!==Ct.flipProgress&&(Ct.flipProgress=eo,it=!0)}Ct.direction=Ne===1&&Ct.flipProgress!==Ne?-1:1,Ct.directionSmooth=Ct.direction}let ge=Ct.direction-Ct.directionSmooth;Math.abs(ge)<$a?Ct.directionSmooth!==Ct.direction&&(Ct.directionSmooth=Ct.direction,T=!0):(Ct.directionSmooth+=ge*$,it=!0),Gn(Ct,ne)&&(it=!0),gs(Ct,Ct.liftBase+Ct.liftSpan*Ct.flipProgress)}w();let jt=X.length>0||et!==null||nt!==null,re=jt||ht!==null;y&&!re&&setTimeout(()=>h?.(S),0),y=re;let me=S===0&&!jt?"0 0 0 50%":S===M&&!jt?"0 50% 0 0":"0";if(it||T){for(let Bt=0;Bt<M;Bt++){let Ct=D[Bt].mesh,ge=Bt>=S?Bt-S:S-1-Bt,Ne=U(Bt)||et!==null&&et.sheet===Bt;Ct.visible=ge<=f.book.visibleSheets||Ne||Mt(Bt);let En=ge<3||Ne;Ct.castShadow!==En&&(Ct.castShadow=En),Ct.renderOrder=ge}Ot.shadowMap.needsUpdate=!0,Ot.render(pe,vt),T=!1}}function xe(){let E=Z&&!document.hidden&&!J;E!==z&&(z=E,Q=0,T=!0,Ot.setAnimationLoop(E?Zi:null))}_t(document,"visibilitychange",xe);let ln=new IntersectionObserver(E=>{Z=E[E.length-1].isIntersecting,xe()},{rootMargin:"50% 0px"});ln.observe(i);function Wn(){let E=Tt.clientWidth,P=Tt.clientHeight;!E||!P||(Ot.setPixelRatio(Math.min(devicePixelRatio,f.book.maxDpr,Math.sqrt(15e6/(E*P)))),Ot.setSize(E,P,!1),te())}let De=new ResizeObserver(Wn);De.observe(Tt),_t(window,"resize",Wn);let Ve=new Map,cn=new Set,Xn=new Map,qn=[],yr=(E,P)=>{let O=E>>1;return O>=S-P-1&&O<=S+P};function Mr(E,P){let O=D[E>>1];E%2===0?O.mat.map=P:O.uniforms.uBackMap.value=P,T=!0}function Sr(){let E=2*S-.5,P=[];for(let O=Math.max(0,S-4);O<=Math.min(M-1,S+3);O++)for(let $ of[2*O,2*O+1])$<t&&!Ve.has($)&&!cn.has($)&&P.push($);qn=P.sort((O,$)=>Math.abs(O-E)-Math.abs($-E));for(let[O,$]of Ve)yr(O,7)||(Mr(O,rt(O)),$.dispose(),Ve.delete(O));_s()}function hc(E){for(let P of[2*E+1,2*E+2,2*E])P<t&&!Ve.has(P)&&!cn.has(P)&&(qn=qn.filter(O=>O!==P),qn.unshift(P));_s()}function _s(){for(;cn.size<2&&qn.length;){let E=qn.shift();if(Ve.has(E)||cn.has(E)||!yr(E,5))continue;cn.add(E);let P=Xn.get(E)??0;Promise.resolve(e(E,{width:I,height:A})).then(O=>{if(cn.delete(E),!J){if((Xn.get(E)??0)!==P){Sr();return}if(O&&yr(E,6)){let $=new Vi(O);$.colorSpace=Je,$.anisotropy=v,Mr(E,$),Ve.set(E,$)}br(),_s()}}).catch(O=>{cn.delete(E),console.warn(`page-turn-book: page ${E}`,O),br(),_s()})}}function br(){if(R||!H)return;[2*S-1,2*S].filter(P=>P>=0&&P<t).every(P=>Ve.has(P)||!cn.has(P)&&!qn.includes(P))&&(R=!0,Tt.style.opacity="1",T=!0,c?.(),a&&S===0&&setTimeout(()=>S===0&&Nt(!0),700))}function Er(){l?.(S,{left:S>0?2*S-1:null,right:S<M&&2*S<t?2*S:null}),Sr()}return wt(),Wn(),Hn(r).catch(E=>console.warn(E)).finally(()=>{H=!0,br()}),Er(),xe(),{next:()=>Nt(!0),prev:()=>Nt(!1),jumpTo:di,setView:L,project:ot,get view(){return{...Dt}},get busy(){return X.length>0||ht!==null||et!==null||At!==null},get renderer(){return Ot},redraw(){T=!0},goToPage:E=>di(Math.ceil(an(E|0,0,t-1)/2)),setPaper:Hn,tunePaper:Xi,refreshPage(E){Xn.set(E,(Xn.get(E)??0)+1);let P=Ve.get(E);P&&(P.dispose(),Ve.delete(E),Mr(E,rt(E))),Sr()},get paper(){return{...Ae}},set(E,P){if(typeof E=="object")for(let[O,$]of Object.entries(E))Object.assign(f[O],$);else{let[O,$]=E.split(".");f[O][$]=P}wt()},get config(){return structuredClone(f)},get sheet(){return S},get sheetCount(){return M},destroy(){J=!0,oe(),ke(),Et.abort(),ln.disconnect(),De.disconnect(),Ot.setAnimationLoop(null);for(let E of D)E.mat.dispose(),E.depth.dispose();for(let E of Ve.values())E.dispose();for(let E of Y.values())E.dispose();for(let E of[Qt,ae])E.tone!==tt&&E.tone.dispose(),E.height!==tt&&E.height!==E.tone&&E.height.dispose();tt.dispose(),kt.dispose(),Lt.dispose(),at.dispose(),Ht.geometry.dispose(),Ht.material.dispose(),Ot.dispose(),Tt.remove(),N.remove()}}}function an(i,t,e){return Math.max(t,Math.min(e,i))}function hi(i,t,e){return i+(t-i)*e}var ec="#2e2119",ds="#9a3a2b",nc="#3b1f3f",ic="#6e2d5c",sc="#8b6c4c",rc="#6d5640",Rm="#7a3a2c",_r='"EB Garamond", Baskervville, Georgia, serif',Ka=new Map;function fs(i){return Ka.has(i)||Ka.set(i,new Promise((t,e)=>{let n=new Image;n.decoding="async",n.onload=()=>(n.decode?n.decode().catch(()=>{}):Promise.resolve()).then(()=>t(n)),n.onerror=()=>e(new Error("img "+i)),n.src=i})),Ka.get(i)}async function oc(){document.fonts&&await Promise.all(["400 40px","italic 400 40px","500 40px"].map(i=>document.fonts.load(`${i} "EB Garamond"`).catch(()=>{})))}var ac=/[aeiouàèéìíòóùú]/i,Cm="bcdfgkptv";function Pm(i){let t=[],e=i.toLowerCase();if(i.length<6||/[’'\-]/.test(i))return t;let n=0;for(;n<e.length;){if(!ac.test(e[n])){n++;continue}let s=n+1;for(;s<e.length&&!ac.test(e[s]);)s++;if(s>=e.length)break;let r=e.slice(n+1,s),o;if(r.length===0){n=s;continue}r.length===1?o=n+1:r[0]===r[1]?o=n+2:r[0]==="s"||(r[1]==="l"||r[1]==="r")&&Cm.includes(r[0])||/^(gn|gl|ch|gh|sc|qu)/.test(r)?o=n+1:o=n+2,o>=2&&i.length-o>=3&&t.push(o),n=s}return t}function xr(i,t={},e=[]){for(let n of i.childNodes)if(n.nodeType===3)e.push({t:n.nodeValue,...t});else if(n.nodeType===1){let s={...t};(n.tagName==="I"||n.tagName==="EM")&&(s.i=!t.i),(n.tagName==="B"||n.tagName==="STRONG")&&(s.b=1),n.classList.contains("ph")&&(s.ph=1),xr(n,s,e)}return e}function ja(i){let t=[],e=null;for(let n of i){let s=n.t.replace(/\s+/g," ").split(/( )/);for(let r of s){if(r===" "){e&&(t.push(e),e=null);continue}r&&(e||=[]).push({...n,t:r})}}return e&&t.push(e),t}function lc({paper:i,ill:t}){let e,n,s=(d,f)=>`${d.i?"italic ":""}${d.b||d.w500?500:400} ${f}px ${d.ph?"Figtree, system-ui, sans-serif":_r}`,r=(d,f)=>(e.font=s(d,d.ph?f*.62:f),e.measureText(d.t).width),o=(d,f)=>d.reduce((m,g)=>m+r(g,f),0);function a(d,f,m,g=()=>0){let x=[],p=[],u=0,M=0,_=(e.font=s({},f),e.measureText(" ").width),C=I=>{x.push({ws:p,w:u,last:I,space:_}),p=[],u=0,M++};for(let I=0;I<d.length;I++){let A=d[I],S=o(A,f),D=m-g(M),X=(p.length?u+_:0)+S;if(X<=D){u=X,p.push(A);continue}if(A.length===1&&!A[0].ph){let y=A[0].t,T=Pm(y.replace(/[.,;:!?»«)(]/g,"")).reverse(),Q=!1;for(let F of T){let R=[{...A[0],t:y.slice(0,F)+"-"}],H=o(R,f);if((p.length?u+_:0)+H<=D&&D-((p.length?u+_:0)+H)<D*.5){u=(p.length?u+_:0)+H,p.push(R),C(!1),d=d.slice(),d.splice(I+1,0,[{...A[0],t:y.slice(F)}]),Q=!0;break}}if(Q)continue}p.length&&C(!1),u=S,p.push(A)}return p.length&&C(!0),x}function l(d,f,m,g,x,p,u){let M=d.ws.length-1,_=d.space,C=f;if(p==="justify"&&!d.last&&M>0){let A=(g-d.w)/M;A<d.space*2.2&&(_=d.space+A)}let I=d.ws.reduce((A,S)=>A+o(S,x),0)+_*M;p==="center"?C=f+(g-I)/2:p==="right"&&(C=f+g-I);for(let A of d.ws){for(let S of A)e.font=s(S,S.ph?x*.62:x),e.fillStyle=S.color||u,e.fillText(S.t,C,S.ph?m-x*.15:m),C+=e.measureText(S.t).width;C+=_}}function c(d,f,m,g,x,p,u,M={}){e.font=s(M,x),e.fillStyle=u;let _=[...d],C=_.map(S=>e.measureText(S).width+p*x),I=C.reduce((S,D)=>S+D,0)-p*x,A=f+(g-I)/2;return _.forEach((S,D)=>{e.fillText(S,A,m),A+=C[D]}),I}function h(d,f,m,g){let x=f.y,p=f.x,u=f.w,M=n*m,_=(I,A)=>{let S=M*(A.size||1),D=S*(A.lh||1.36),X=ja(xr(I));A.upper&&(X=X.map(z=>z.map(Z=>({...Z,t:Z.t.toUpperCase()})))),X=X.map(z=>z.map(Z=>({...Z,...A.st||{}})));let y=null,T=0,Q=0;if(A.dc&&X.length){let z=X[0][0],Z=z.t[0];y=Z,X[0]=[{...z,t:z.t.slice(1)},...X[0].slice(1)],e.font=`500 ${S*3.3}px ${_r}`,T=e.measureText(Z).width+S*.12,Q=2}let F=A.indent||0,R=a(X,S,u-F,z=>z<Q?T:0);x+=(A.mt||0)*M,g&&y&&(e.font=`500 ${S*3.3}px ${_r}`,e.fillStyle="rgba(154,58,43,.35)",e.fillText(y,p+F+S*.05,x+S*.98+D+S*.04),e.fillStyle=ic,e.fillText(y,p+F,x+S*.98+D)),R.forEach((z,Z)=>{let J=x+S*.98+Z*D-(D-S)*0;g&&l(z,p+F+(Z<Q?T:0),J,u-F-(Z<Q?T:0),S,A.align||"justify",A.color||ec)});let H=R.length*D+(D-S)*.2;g&&A.bar&&(e.fillStyle="rgba(154,58,43,.6)",e.fillRect(p,x-M*.1,Math.max(1,M*.05),H+M*.2)),x+=H+(A.mb??.45)*M},C=(I,A)=>{let S=I.querySelector("img"),D=S&&t.get(S.getAttribute("src"));if(x+=.35*M,D){let y=Math.min(A*M,u*D.naturalHeight/D.naturalWidth),T=y*D.naturalWidth/D.naturalHeight;g&&(e.globalCompositeOperation="multiply",e.drawImage(D,p+(u-T)/2,x,T,y),e.globalCompositeOperation="source-over"),x+=y}let X=I.querySelector("figcaption");X&&(x+=.2*M,_(X,{size:.76,lh:1.25,align:"center",st:{i:1},color:rc,mb:0})),x+=.15*M+.45*M};for(let I of d.children){let A=I.classList,S=I.tagName;if(A.contains("pg-cap"))x+=.1*M,g&&c(I.textContent.toUpperCase(),p,x+M*.66*.8,u,M*.66,.24,ds),x+=M*.66*1.36+.15*M;else if(A.contains("pg-h"))_(I,{size:1.42,lh:1.1,align:"center",st:{w500:1},color:nc,mb:.2}),g&&(e.fillStyle="rgba(154,58,43,.75)",e.fillRect(p+u/2-M*1.1,x,M*2.2,Math.max(1,M*.045))),x+=.55*M;else if(A.contains("pg-h4"))_(I,{size:1.14,lh:1.15,align:"left",st:{i:1},color:ds,mb:.35});else if(A.contains("dc"))_(I,{dc:1});else if(A.contains("pg-note"))x+=.25*M,_(I,{size:.92,align:"left",st:{i:1},color:Rm,indent:.7*M,bar:1});else if(A.contains("pg-ex"))x+=1.2*M,g&&(e.fillStyle="rgba(110,45,92,.5)",e.fillRect(p+u/2-2*M,x,4*M,Math.max(1,M*.04))),x+=.7*M,_(I,{align:"center",st:{i:1},color:ic});else if(A.contains("fr-k"))g&&c(I.textContent.toUpperCase(),p,x+M*.66*.8,u,M*.66,.3,ds),x+=M*.66*1.5+.45*M;else if(A.contains("fr-t"))_(I,{size:2.45,lh:1,align:"center",st:{i:1},color:nc,mt:.05});else if(A.contains("fr-s"))_(I,{align:"center",st:{i:1},color:rc});else if(A.contains("fr-i"))x+=.6*M,_(I,{size:.7,lh:1.5,align:"center",upper:1,color:sc});else if(S==="FIGURE")C(I,A.contains("fig--front")?13:A.contains("fig--fin")?5.6:A.contains("fig--sm")?7.4:10.6);else if(S==="DL"){x+=.15*M,g&&(e.fillStyle="rgba(139,108,76,.4)",e.fillRect(p,x,u,Math.max(1,M*.03)));for(let D of I.children){let X=D.querySelector("dt"),y=D.querySelector("dd"),T=M*1.36+.44*M;if(g){let Q=x+.22*M+M*.98;e.font=s({},M*.74),e.fillStyle=ds;let F=p;for(let Z of X.textContent.toUpperCase())e.fillText(Z,F,Q-M*.05),F+=e.measureText(Z).width+.14*M*.74;let R=ja(xr(y)).map(Z=>Z.map(J=>({...J,i:!J.i}))),H=a(R,M,u-(F-p)-.8*M);H.forEach((Z,J)=>l(Z,F+.8*M,Q+J*M*1.36,u-(F-p)-.8*M,M,"right",ec));let z=(H.length-1)*M*1.36;e.strokeStyle="rgba(139,108,76,.55)",e.lineWidth=Math.max(1,M*.035),e.setLineDash([M*.05,M*.12]),e.beginPath(),e.moveTo(p,x+T+z),e.lineTo(p+u,x+T+z),e.stroke(),e.setLineDash([]),x+=z}else{let Q=ja(xr(y));e.font=s({},M*.74);let F=[...X.textContent].length*.14*M*.74+e.measureText(X.textContent.toUpperCase()).width;x+=(a(Q,M,u-F-.8*M).length-1)*M*1.36}x+=T}x+=.6*M}else if(S==="UL"){x+=.2*M;for(let D of I.children)g&&(e.font=s({},M),e.fillStyle=ds,e.fillText("\xB6",p,x+M*.98)),_(D,{align:"left",indent:1.05*M,mb:.5})}else S==="P"&&_(I,{})}return x-f.y}return function(f,m,g,x,p={}){let u=document.createElement("canvas");u.width=m,u.height=g,e=u.getContext("2d"),n=m/22,e.drawImage(i,0,0,m,g);let M=x==="l",_=e.createLinearGradient(M?m:0,0,M?0:m,0);_.addColorStop(0,"rgba(70,46,20,.26)"),_.addColorStop(.05,"rgba(84,58,28,.07)"),_.addColorStop(.14,"rgba(84,58,28,0)"),_.addColorStop(1,"rgba(84,58,28,0)"),e.fillStyle=_,e.fillRect(0,0,m,g);let C=e.createRadialGradient(m*(M?.4:.6),g*.45,Math.min(m,g)*.45,m*(M?.4:.6),g*.45,Math.max(m,g)*.78);if(C.addColorStop(0,"rgba(120,86,42,0)"),C.addColorStop(1,"rgba(120,86,42,.16)"),e.fillStyle=C,e.fillRect(0,0,m,g),!f)return u;e.globalCompositeOperation="multiply",e.textBaseline="alphabetic";let I=2.15*n,A=2.2*n,S=1.45*n,D=1.85*n,X={x:M?S:D,y:I,w:m-S-D,h:g-I-A},y=f.querySelector(".pg-rh"),T=f.querySelector(".pg-fo"),Q=f.querySelector(".pg-body");if(y){let F=c(y.textContent.toUpperCase(),0,1.05*n+.6*n*.9,m,.6*n,.2,sc);e.fillStyle="rgba(139,108,76,.55)";let R=1.05*n+.6*n*.62,H=2.6*n;e.fillRect(m/2-F/2-.9*n-H,R,H,Math.max(1,n*.03)),e.fillRect(m/2+F/2+.9*n,R,H,Math.max(1,n*.03))}if(T){e.font=s({},.72*n),e.fillStyle="#7b5f43";let F=T.textContent,R=e.measureText(F).width;e.fillText(F,(m-R)/2,g-.95*n)}if(Q){let F=f.classList.contains("pg--front"),R=1,H=h(Q,X,R,!1);for(;H>X.h&&R>.84;)R-=.02,H=h(Q,X,R,!1);F&&(X.y+=Math.max(0,(X.h-H)/2)+.25*n),h(Q,X,R,!0),p.fill=H/X.h,p.scale=R}return e.globalCompositeOperation="source-over",u}}function Qa(i,t,e,n,s=!1){let r=document.createElement("canvas");r.width=t,r.height=e;let o=r.getContext("2d");s&&(o.translate(t,0),o.scale(-1,1)),o.drawImage(i,0,0,t,e),s&&o.setTransform(1,0,0,1,0,0);let a=o.createLinearGradient(s?t:0,0,s?0:t,0);if(a.addColorStop(0,"rgba(0,0,0,.5)"),a.addColorStop(.035,"rgba(0,0,0,.1)"),a.addColorStop(.05,"rgba(255,235,200,.07)"),a.addColorStop(.08,"rgba(0,0,0,0)"),o.fillStyle=a,o.fillRect(0,0,t,e),n&&!s){let l=t/22*1.62*1.05,c=e*.155+l*.8;o.font=`italic 400 ${l}px ${_r}`,o.textAlign="center",o.fillStyle="rgba(10,4,12,.75)",o.fillText(n,t/2+l*.02,c+l*.045);let h=o.createLinearGradient(0,c-l*.8,0,c+l*.1);h.addColorStop(0,"#f3dfa9"),h.addColorStop(.45,"#c9a96e"),h.addColorStop(.75,"#a5824a"),h.addColorStop(1,"#7f6234"),o.fillStyle=h,o.fillText(n,t/2,c),o.globalCompositeOperation="overlay",o.fillStyle="rgba(255,240,200,.25)",o.fillText(n,t/2,c-l*.02),o.globalCompositeOperation="source-over",o.textAlign="start"}return r}function cc(i,t,e){let n=document.createElement("canvas");return n.width=t,n.height=e,n.getContext("2d").drawImage(i,0,0,t,e),n}async function Bm(i,t){let e=performance.now(),n=t.host,s=t.single,r=[...i.querySelectorAll(".lb-flip .pg")],o=F=>r.find(R=>+R.dataset.n===F),a;if(!s)a=r.map(F=>({el:F,side:F.classList.contains("pg--l")?"l":"r"}));else{let F=r.filter(z=>z.classList.contains("pg--text")),R=r.filter(z=>z.classList.contains("pg--end")),H=r[r.length-1];a=[{el:r[0]},{el:R[0],side:"l"}];for(let z of F)a.push({el:z,side:"r"},{el:null,side:"l",blank:1});a.push({el:R[1],side:"r"},{el:H})}let l=a.length,c=F=>t.base+F,h=Math.min(window.devicePixelRatio||1,t.maxDpr||2),d=Math.min(t.maxTex||1024,Math.ceil(t.pw*h/64)*64),f=Math.round(d*1.4),[m,g,x]=await Promise.all([fs(c("img/carta-antica.webp")),fs(c("img/copertina.webp")),fs(c("img/sguardia.webp")),oc()]),p=new Map,u=[...new Set(r.flatMap(F=>[...F.querySelectorAll(".pg-body img")].map(R=>R.getAttribute("src"))))],M=Promise.all(u.map(F=>fs(new URL(F,location.href).href).then(R=>p.set(F,R)).catch(()=>{}))),_=lc({paper:m,ill:p}),C={fills:{}},I=(i.querySelector(".cv-t")||{}).textContent||"",A=new Map;async function S(F){if(A.has(F))return A.get(F);let R=a[F],H;if(!R)return null;if(F===0)H=Qa(g,d,f,I.trim());else if(F===l-1)H=Qa(g,d,f,"",!0);else if(R.el&&R.el.classList.contains("pg--end"))H=cc(x,d,f);else if(R.blank)H=_(null,d,f,"l");else{await M;let z={};H=_(R.el,d,f,R.side,z),C.fills[R.el.dataset.n]=z}return A.set(F,H),H}let D=F=>{let R=a.findIndex(H=>H.el&&+H.el.dataset.n===F);return Math.ceil(R/2)},X=!1,y=null,T=tc(n,{pageCount:l,renderPage:F=>S(F),pageColor:"#e6d9bb",paper:t.paper||"laid",view:t.view,config:{book:{aspect:1.4,pageWidth:d,single:s,interactive:!1,maxDpr:t.maxDpr||2,fit:1,perspective:26,visibleSheets:6},cover:{hard:!0,texture:"smooth",overhang:.018,thickness:.02,raise:.004,color:"#ffffff",grain:1,contrast:0,bump:0,roughness:.86,metalness:0},material:{metalness:.04,showThrough:.05,inkGloss:.18},light:{shadowMapSize:t.shadowMap||2048,ambient:1,sun:2.6,sunX:-3,sunY:2.4,sunZ:3.6,shadow:.5,sky:"#fff6e8",ground:"#8a7f73",sunColor:"#fff1dc"},flip:{flipTime:.9}},onSpread:(F,R)=>t.onSpread&&t.onSpread(F,R),onReady:()=>{X=!0,C.tti=performance.now()-e,y&&y()},onIdle:F=>t.onIdle&&t.onIdle(F)});await new Promise(F=>{X?F():y=F});let Q=window.requestIdleCallback||(F=>setTimeout(F,60));return(function F(R){R>=l||Q(()=>{S(R).then(()=>F(R+1))},{timeout:400})})(1),{book:T,stats:C,PW:d,PH:f,pageCount:l,list:a,sheetForPage:D,visible(F){return s?[a[2*F]]:[a[2*F-1],a[2*F]]}}}export{Bm as init};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
