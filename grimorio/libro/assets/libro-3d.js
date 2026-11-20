var dc=0,io=1,fc=2;var mr=1,pc=2,Sn=3,zn=0,qe=1,je=2,Fn=0,Fi=1,so=2,ro=3,ao=4,mc=5,ii=100,gc=101,_c=102,oo=103,lo=104,xc=200,vc=201,yc=202,Mc=203,la=204,ca=205,Sc=206,bc=207,Ec=208,Tc=209,wc=210,Ac=211,Rc=212,Cc=213,Pc=214,Ic=0,Lc=1,Dc=2,Gs=3,Uc=4,Nc=5,Fc=6,Oc=7,Ll=0,Bc=1,zc=2,On=0,kc=1,Hc=2,Vc=3,Gc=4,Wc=5,Xc=6,qc=7;var Dl=300,zi=301,ki=302,ha=303,ua=304,gr=306,Hi=1e3,an=1001,da=1002,Le=1003,co=1004;var ji=1005;var Ge=1006,Rr=1007;var ri=1008;var Bn=1009,Yc=1010,Zc=1011,Wa=1012,Ul=1013,Nn=1014,bn=1015,rs=1016,Nl=1017,Fl=1018,ai=1020,Jc=1021,on=1023,$c=1024,Kc=1025,oi=1026,Vi=1027,jc=1028,Ol=1029,Qc=1030,Bl=1031,zl=1033,Cr=33776,Pr=33777,Ir=33778,Lr=33779,ho=35840,uo=35841,fo=35842,po=35843,kl=36196,mo=37492,go=37496,_o=37808,xo=37809,vo=37810,yo=37811,Mo=37812,So=37813,bo=37814,Eo=37815,To=37816,wo=37817,Ao=37818,Ro=37819,Co=37820,Po=37821,Dr=36492,Io=36494,Lo=36495,th=36283,Do=36284,Uo=36285,No=36286;var Ws=2300,Xs=2301,Ur=2302,Fo=2400,Oo=2401,Bo=2402;var eh=3200,Xa=3201,Hl=0,nh=1,Un="",We="srgb",Xn="srgb-linear",qa="display-p3",_r="display-p3-linear",qs="linear",ue="srgb",Ys="rec709",Zs="p3";var gi=7680;var zo=519,ih=512,sh=513,rh=514,Vl=515,ah=516,oh=517,lh=518,ch=519,ko=35044;var Ho="300 es",fa=1035,En=2e3,Js=2001,kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Nr=Math.PI/180,pa=180/Math.PI;function ps(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function Xe(i,t,e){return Math.max(t,Math.min(e,i))}function hh(i,t){return(i%t+t)%t}function Fr(i,t,e){return(1-e)*i+e*t}function Vo(i){return(i&i-1)===0&&i!==0}function ma(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Wt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],p=n[7],f=n[2],m=n[5],_=n[8],y=s[0],d=s[3],u=s[6],E=s[1],g=s[4],A=s[7],U=s[2],R=s[5],M=s[8];return r[0]=o*y+a*E+l*U,r[3]=o*d+a*g+l*R,r[6]=o*u+a*A+l*M,r[1]=c*y+h*E+p*U,r[4]=c*d+h*g+p*R,r[7]=c*u+h*A+p*M,r[2]=f*y+m*E+_*U,r[5]=f*d+m*g+_*R,r[8]=f*u+m*A+_*M,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],p=h*o-a*c,f=a*l-h*r,m=c*r-o*l,_=e*p+n*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return t[0]=p*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=f*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=m*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Or.makeScale(t,e)),this}rotate(t){return this.premultiply(Or.makeRotation(-t)),this}translate(t,e){return this.premultiply(Or.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Or=new Yt;function Gl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function $s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uh(){let i=$s("canvas");return i.style.display="block",i}var Go={};function dh(i){i in Go||(Go[i]=!0,console.warn(i))}var Wo=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xo=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ms={[Xn]:{transfer:qs,primaries:Ys,toReference:i=>i,fromReference:i=>i},[We]:{transfer:ue,primaries:Ys,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[_r]:{transfer:qs,primaries:Zs,toReference:i=>i.applyMatrix3(Xo),fromReference:i=>i.applyMatrix3(Wo)},[qa]:{transfer:ue,primaries:Zs,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Xo),fromReference:i=>i.applyMatrix3(Wo).convertLinearToSRGB()}},fh=new Set([Xn,_r]),oe={enabled:!0,_workingColorSpace:Xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!fh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Ms[t].toReference,s=Ms[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ms[i].primaries},getTransfer:function(i){return i===Un?qs:Ms[i].transfer}};function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Br(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _i,Ks=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_i===void 0&&(_i=$s("canvas")),_i.width=t.width,_i.height=t.height;let n=_i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=$s("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Oi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Oi(e[n]/255)*255):e[n]=Oi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ph=0,js=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=ps(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(zr(s[o].image)):r.push(zr(s[o]))}else r=zr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function zr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ks.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var mh=0,Oe=class i extends kn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=an,s=an,r=Ge,o=ri,a=on,l=Bn,c=i.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=ps(),this.name="",this.source=new js(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hi:t.x=t.x-Math.floor(t.x);break;case an:t.x=t.x<0?0:1;break;case da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hi:t.y=t.y-Math.floor(t.y);break;case an:t.y=t.y<0?0:1;break;case da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}};Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Dl;Oe.DEFAULT_ANISOTROPY=1;var Re=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],p=l[8],f=l[1],m=l[5],_=l[9],y=l[2],d=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(p-y)<.01&&Math.abs(_-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+y)<.1&&Math.abs(_+d)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let g=(c+1)/2,A=(m+1)/2,U=(u+1)/2,R=(h+f)/4,M=(p+y)/4,I=(_+d)/4;return g>A&&g>U?g<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(g),s=R/n,r=M/n):A>U?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=R/s,r=I/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=M/r,s=I/r),this.set(n,s,r,e),this}let E=Math.sqrt((d-_)*(d-_)+(p-y)*(p-y)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(d-_)/E,this.y=(p-y)/E,this.z=(f-h)/E,this.w=Math.acos((c+m+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ga=class extends kn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);let r=new Oe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new js(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends ga{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Qs=class extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _a=class extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],f=r[o+0],m=r[o+1],_=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=_,t[e+3]=y;return}if(p!==y||l!==f||c!==m||h!==_){let d=1-a,u=l*f+c*m+h*_+p*y,E=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){let U=Math.sqrt(g),R=Math.atan2(U,u*E);d=Math.sin(d*R)/U,a=Math.sin(a*R)/U}let A=a*E;if(l=l*d+f*A,c=c*d+m*A,h=h*d+_*A,p=p*d+y*A,d===1-a){let U=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=U,c*=U,h*=U,p*=U}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return t[e]=a*_+h*p+l*m-c*f,t[e+1]=l*_+h*f+c*p-a*m,t[e+2]=c*_+h*m+a*f-l*p,t[e+3]=h*_-a*p-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),p=a(r/2),f=l(n/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*p+c*m*_,this._y=c*m*p-f*h*_,this._z=c*h*_+f*m*p,this._w=c*h*p-f*m*_;break;case"YXZ":this._x=f*h*p+c*m*_,this._y=c*m*p-f*h*_,this._z=c*h*_-f*m*p,this._w=c*h*p+f*m*_;break;case"ZXY":this._x=f*h*p-c*m*_,this._y=c*m*p+f*h*_,this._z=c*h*_+f*m*p,this._w=c*h*p-f*m*_;break;case"ZYX":this._x=f*h*p-c*m*_,this._y=c*m*p+f*h*_,this._z=c*h*_-f*m*p,this._w=c*h*p+f*m*_;break;case"YZX":this._x=f*h*p+c*m*_,this._y=c*m*p+f*h*_,this._z=c*h*_-f*m*p,this._w=c*h*p-f*m*_;break;case"XZY":this._x=f*h*p-c*m*_,this._y=c*m*p-f*h*_,this._z=c*h*_+f*m*p,this._w=c*h*p+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],p=e[10],f=n+a+p;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>p){let m=2*Math.sqrt(1+n-a-p);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>p){let m=2*Math.sqrt(1+a-n-p);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+p-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),p=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*p+this._w*f,this._x=n*p+this._x*f,this._y=s*p+this._y*f,this._z=r*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qo.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),p=2*(r*n-o*e);return this.x=e+l*c+o*p-a*h,this.y=n+l*h+a*c-r*p,this.z=s+l*p+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return kr.copy(this).projectOnVector(t),this.sub(kr)}reflect(t){return this.sub(kr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kr=new H,qo=new Hn,li=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,en):en.fromBufferAttribute(r,o),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ss.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ss.copy(n.boundingBox)),Ss.applyMatrix4(t.matrixWorld),this.union(Ss)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ts),bs.subVectors(this.max,ts),xi.subVectors(t.a,ts),vi.subVectors(t.b,ts),yi.subVectors(t.c,ts),Rn.subVectors(vi,xi),Cn.subVectors(yi,vi),$n.subVectors(xi,yi);let e=[0,-Rn.z,Rn.y,0,-Cn.z,Cn.y,0,-$n.z,$n.y,Rn.z,0,-Rn.x,Cn.z,0,-Cn.x,$n.z,0,-$n.x,-Rn.y,Rn.x,0,-Cn.y,Cn.x,0,-$n.y,$n.x,0];return!Hr(e,xi,vi,yi,bs)||(e=[1,0,0,0,1,0,0,0,1],!Hr(e,xi,vi,yi,bs))?!1:(Es.crossVectors(Rn,Cn),e=[Es.x,Es.y,Es.z],Hr(e,xi,vi,yi,bs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},_n=[new H,new H,new H,new H,new H,new H,new H,new H],en=new H,Ss=new li,xi=new H,vi=new H,yi=new H,Rn=new H,Cn=new H,$n=new H,ts=new H,bs=new H,Es=new H,Kn=new H;function Hr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Kn.fromArray(i,r);let a=s.x*Math.abs(Kn.x)+s.y*Math.abs(Kn.y)+s.z*Math.abs(Kn.z),l=t.dot(Kn),c=e.dot(Kn),h=n.dot(Kn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var gh=new li,es=new H,Vr=new H,as=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):gh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;es.subVectors(t,this.center);let e=es.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(es,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(es.copy(t.center).add(Vr)),this.expandByPoint(es.copy(t.center).sub(Vr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},xn=new H,Gr=new H,Ts=new H,Pn=new H,Wr=new H,ws=new H,Xr=new H,tr=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xn.copy(this.origin).addScaledVector(this.direction,e),xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Gr.copy(t).add(e).multiplyScalar(.5),Ts.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(Gr);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ts),a=Pn.dot(this.direction),l=-Pn.dot(Ts),c=Pn.lengthSq(),h=Math.abs(1-o*o),p,f,m,_;if(h>0)if(p=o*l-a,f=o*a-l,_=r*h,p>=0)if(f>=-_)if(f<=_){let y=1/h;p*=y,f*=y,m=p*(p+o*f+2*a)+f*(o*p+f+2*l)+c}else f=r,p=Math.max(0,-(o*f+a)),m=-p*p+f*(f+2*l)+c;else f=-r,p=Math.max(0,-(o*f+a)),m=-p*p+f*(f+2*l)+c;else f<=-_?(p=Math.max(0,-(-o*r+a)),f=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+f*(f+2*l)+c):f<=_?(p=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(p=Math.max(0,-(o*r+a)),f=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+f*(f+2*l)+c);else f=o>0?-r:r,p=Math.max(0,-(o*f+a)),m=-p*p+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Gr).addScaledVector(Ts,f),m}intersectSphere(t,e){xn.subVectors(t.center,this.origin);let n=xn.dot(this.direction),s=xn.dot(xn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(t.min.z-f.z)*p,l=(t.max.z-f.z)*p):(a=(t.max.z-f.z)*p,l=(t.min.z-f.z)*p),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,xn)!==null}intersectTriangle(t,e,n,s,r){Wr.subVectors(e,t),ws.subVectors(n,t),Xr.crossVectors(Wr,ws);let o=this.direction.dot(Xr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pn.subVectors(this.origin,t);let l=a*this.direction.dot(ws.crossVectors(Pn,ws));if(l<0)return null;let c=a*this.direction.dot(Wr.cross(Pn));if(c<0||l+c>o)return null;let h=-a*Pn.dot(Xr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class i{constructor(t,e,n,s,r,o,a,l,c,h,p,f,m,_,y,d){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,p,f,m,_,y,d)}set(t,e,n,s,r,o,a,l,c,h,p,f,m,_,y,d){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=p,u[14]=f,u[3]=m,u[7]=_,u[11]=y,u[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Mi.setFromMatrixColumn(t,0).length(),r=1/Mi.setFromMatrixColumn(t,1).length(),o=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let f=o*h,m=o*p,_=a*h,y=a*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=m+_*c,e[5]=f-y*c,e[9]=-a*l,e[2]=y-f*c,e[6]=_+m*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,m=l*p,_=c*h,y=c*p;e[0]=f+y*a,e[4]=_*a-m,e[8]=o*c,e[1]=o*p,e[5]=o*h,e[9]=-a,e[2]=m*a-_,e[6]=y+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,m=l*p,_=c*h,y=c*p;e[0]=f-y*a,e[4]=-o*p,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*h,e[9]=y-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,m=o*p,_=a*h,y=a*p;e[0]=l*h,e[4]=_*c-m,e[8]=f*c+y,e[1]=l*p,e[5]=y*c+f,e[9]=m*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,m=o*c,_=a*l,y=a*c;e[0]=l*h,e[4]=y-f*p,e[8]=_*p+m,e[1]=p,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*p+_,e[10]=f-y*p}else if(t.order==="XZY"){let f=o*l,m=o*c,_=a*l,y=a*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=f*p+y,e[5]=o*h,e[9]=m*p-_,e[2]=_*p-m,e[6]=a*h,e[10]=y*p+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_h,t,xh)}lookAt(t,e,n){let s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),In.crossVectors(n,Ze),In.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),In.crossVectors(n,Ze)),In.normalize(),As.crossVectors(Ze,In),s[0]=In.x,s[4]=As.x,s[8]=Ze.x,s[1]=In.y,s[5]=As.y,s[9]=Ze.y,s[2]=In.z,s[6]=As.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],p=n[5],f=n[9],m=n[13],_=n[2],y=n[6],d=n[10],u=n[14],E=n[3],g=n[7],A=n[11],U=n[15],R=s[0],M=s[4],I=s[8],J=s[12],x=s[1],T=s[5],et=s[9],j=s[13],P=s[2],G=s[6],V=s[10],q=s[14],k=s[3],N=s[7],X=s[11],Q=s[15];return r[0]=o*R+a*x+l*P+c*k,r[4]=o*M+a*T+l*G+c*N,r[8]=o*I+a*et+l*V+c*X,r[12]=o*J+a*j+l*q+c*Q,r[1]=h*R+p*x+f*P+m*k,r[5]=h*M+p*T+f*G+m*N,r[9]=h*I+p*et+f*V+m*X,r[13]=h*J+p*j+f*q+m*Q,r[2]=_*R+y*x+d*P+u*k,r[6]=_*M+y*T+d*G+u*N,r[10]=_*I+y*et+d*V+u*X,r[14]=_*J+y*j+d*q+u*Q,r[3]=E*R+g*x+A*P+U*k,r[7]=E*M+g*T+A*G+U*N,r[11]=E*I+g*et+A*V+U*X,r[15]=E*J+g*j+A*q+U*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],p=t[6],f=t[10],m=t[14],_=t[3],y=t[7],d=t[11],u=t[15];return _*(+r*l*p-s*c*p-r*a*f+n*c*f+s*a*m-n*l*m)+y*(+e*l*m-e*c*f+r*o*f-s*o*m+s*c*h-r*l*h)+d*(+e*c*p-e*a*m-r*o*p+n*o*m+r*a*h-n*c*h)+u*(-s*a*h-e*l*p+e*a*f+s*o*p-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],p=t[9],f=t[10],m=t[11],_=t[12],y=t[13],d=t[14],u=t[15],E=p*d*c-y*f*c+y*l*m-a*d*m-p*l*u+a*f*u,g=_*f*c-h*d*c-_*l*m+o*d*m+h*l*u-o*f*u,A=h*y*c-_*p*c+_*a*m-o*y*m-h*a*u+o*p*u,U=_*p*l-h*y*l-_*a*f+o*y*f+h*a*d-o*p*d,R=e*E+n*g+s*A+r*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let M=1/R;return t[0]=E*M,t[1]=(y*f*r-p*d*r-y*s*m+n*d*m+p*s*u-n*f*u)*M,t[2]=(a*d*r-y*l*r+y*s*c-n*d*c-a*s*u+n*l*u)*M,t[3]=(p*l*r-a*f*r-p*s*c+n*f*c+a*s*m-n*l*m)*M,t[4]=g*M,t[5]=(h*d*r-_*f*r+_*s*m-e*d*m-h*s*u+e*f*u)*M,t[6]=(_*l*r-o*d*r-_*s*c+e*d*c+o*s*u-e*l*u)*M,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*m+e*l*m)*M,t[8]=A*M,t[9]=(_*p*r-h*y*r-_*n*m+e*y*m+h*n*u-e*p*u)*M,t[10]=(o*y*r-_*a*r+_*n*c-e*y*c-o*n*u+e*a*u)*M,t[11]=(h*a*r-o*p*r-h*n*c+e*p*c+o*n*m-e*a*m)*M,t[12]=U*M,t[13]=(h*y*s-_*p*s+_*n*f-e*y*f-h*n*d+e*p*d)*M,t[14]=(_*a*s-o*y*s-_*n*l+e*y*l+o*n*d-e*a*d)*M,t[15]=(o*p*s-h*a*s+h*n*l-e*p*l-o*n*f+e*a*f)*M,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,p=a+a,f=r*c,m=r*h,_=r*p,y=o*h,d=o*p,u=a*p,E=l*c,g=l*h,A=l*p,U=n.x,R=n.y,M=n.z;return s[0]=(1-(y+u))*U,s[1]=(m+A)*U,s[2]=(_-g)*U,s[3]=0,s[4]=(m-A)*R,s[5]=(1-(f+u))*R,s[6]=(d+E)*R,s[7]=0,s[8]=(_+g)*M,s[9]=(d-E)*M,s[10]=(1-(f+y))*M,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Mi.set(s[0],s[1],s[2]).length(),o=Mi.set(s[4],s[5],s[6]).length(),a=Mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],nn.copy(this);let c=1/r,h=1/o,p=1/a;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=p,nn.elements[9]*=p,nn.elements[10]*=p,e.setFromRotationMatrix(nn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=En){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),p=(e+t)/(e-t),f=(n+s)/(n-s),m,_;if(a===En)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Js)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=En){let l=this.elements,c=1/(e-t),h=1/(n-s),p=1/(o-r),f=(e+t)*c,m=(n+s)*h,_,y;if(a===En)_=(o+r)*p,y=-2*p;else if(a===Js)_=r*p,y=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Mi=new H,nn=new xe,_h=new H(0,0,0),xh=new H(1,1,1),In=new H,As=new H,Ze=new H,Yo=new xe,Zo=new Hn,fn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],p=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zo.setFromEuler(this),this.setFromQuaternion(Zo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER="XYZ";var os=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vh=0,Jo=new H,Si=new Hn,vn=new xe,Rs=new H,ns=new H,yh=new H,Mh=new Hn,$o=new H(1,0,0),Ko=new H(0,1,0),jo=new H(0,0,1),Sh={type:"added"},bh={type:"removed"},qr={type:"childadded",child:null},Yr={type:"childremoved",child:null},He=class i extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new H,e=new fn,n=new Hn,s=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new Yt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis($o,t)}rotateY(t){return this.rotateOnAxis(Ko,t)}rotateZ(t){return this.rotateOnAxis(jo,t)}translateOnAxis(t,e){return Jo.copy(t).applyQuaternion(this.quaternion),this.position.add(Jo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($o,t)}translateY(t){return this.translateOnAxis(Ko,t)}translateZ(t){return this.translateOnAxis(jo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Rs.copy(t):Rs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(ns,Rs,this.up):vn.lookAt(Rs,ns,this.up),this.quaternion.setFromRotationMatrix(vn),s&&(vn.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(vn),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Sh),qr.child=t,this.dispatchEvent(qr),qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bh),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(vn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,t,yh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,Mh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),p=o(t.shapes),f=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};He.DEFAULT_UP=new H(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var sn=new H,yn=new H,Zr=new H,Mn=new H,bi=new H,Ei=new H,Qo=new H,Jr=new H,$r=new H,Kr=new H,Li=class i{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),sn.subVectors(t,e),s.cross(sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){sn.subVectors(s,e),yn.subVectors(n,e),Zr.subVectors(t,e);let o=sn.dot(sn),a=sn.dot(yn),l=sn.dot(Zr),c=yn.dot(yn),h=yn.dot(Zr),p=o*c-a*a;if(p===0)return r.set(0,0,0),null;let f=1/p,m=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mn.x),l.addScaledVector(o,Mn.y),l.addScaledVector(a,Mn.z),l)}static isFrontFacing(t,e,n,s){return sn.subVectors(n,e),yn.subVectors(t,e),sn.cross(yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),sn.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;bi.subVectors(s,n),Ei.subVectors(r,n),Jr.subVectors(t,n);let l=bi.dot(Jr),c=Ei.dot(Jr);if(l<=0&&c<=0)return e.copy(n);$r.subVectors(t,s);let h=bi.dot($r),p=Ei.dot($r);if(h>=0&&p<=h)return e.copy(s);let f=l*p-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(bi,o);Kr.subVectors(t,r);let m=bi.dot(Kr),_=Ei.dot(Kr);if(_>=0&&m<=_)return e.copy(r);let y=m*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Ei,a);let d=h*_-m*p;if(d<=0&&p-h>=0&&m-_>=0)return Qo.subVectors(r,s),a=(p-h)/(p-h+(m-_)),e.copy(s).addScaledVector(Qo,a);let u=1/(d+y+f);return o=y*u,a=f*u,e.copy(n).addScaledVector(bi,o).addScaledVector(Ei,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function jr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=hh(t,1),e=Xe(e,0,1),n=Xe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=jr(o,r,t+1/3),this.g=jr(o,r,t),this.b=jr(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){let n=Wl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=Br(t.r),this.g=Br(t.g),this.b=Br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return oe.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Xe(Ne.r*255,0,255))*65536+Math.round(Xe(Ne.g*255,0,255))*256+Math.round(Xe(Ne.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Ne.copy(this),e);let n=Ne.r,s=Ne.g,r=Ne.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let p=o-a;switch(c=h<=.5?p/(o+a):p/(2-o-a),o){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=We){oe.fromWorkingColorSpace(Ne.copy(this),t);let e=Ne.r,n=Ne.g,s=Ne.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ln),this.setHSL(Ln.h+t,Ln.s+e,Ln.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ln),t.getHSL(Cs);let n=Fr(Ln.h,Cs.h,e),s=Fr(Ln.s,Cs.s,e),r=Fr(Ln.l,Cs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ne=new jt;jt.NAMES=Wl;var Eh=0,Vn=class extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=Fi,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=la,this.blendDst=ca,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==la&&(n.blendSrc=this.blendSrc),this.blendDst!==ca&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},er=class extends Vn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Me=new H,Ps=new Wt,Se=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ko,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return dh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ps.fromBufferAttribute(this,e),Ps.applyMatrix3(t),this.setXY(e,Ps.x,Ps.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ko&&(t.usage=this.usage),t}};var nr=class extends Se{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ir=class extends Se{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Tn=class extends Se{constructor(t,e,n){super(new Float32Array(t),e,n)}},Th=0,Ke=new xe,Qr=new He,Ti=new H,Je=new li,is=new li,Ae=new H,ci=class i extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gl(t)?ir:nr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return Qr.lookAt(t),Qr.updateMatrix(),this.applyMatrix4(Qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Tn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];is.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(Je.min,is.min),Je.expandByPoint(Ae),Ae.addVectors(Je.max,is.max),Je.expandByPoint(Ae)):(Je.expandByPoint(is.min),Je.expandByPoint(is.max))}Je.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ae));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ae.fromBufferAttribute(a,c),l&&(Ti.fromBufferAttribute(t,c),Ae.add(Ti)),s=Math.max(s,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Se(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new H,l[I]=new H;let c=new H,h=new H,p=new H,f=new Wt,m=new Wt,_=new Wt,y=new H,d=new H;function u(I,J,x){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,J),p.fromBufferAttribute(n,x),f.fromBufferAttribute(r,I),m.fromBufferAttribute(r,J),_.fromBufferAttribute(r,x),h.sub(c),p.sub(c),m.sub(f),_.sub(f);let T=1/(m.x*_.y-_.x*m.y);isFinite(T)&&(y.copy(h).multiplyScalar(_.y).addScaledVector(p,-m.y).multiplyScalar(T),d.copy(p).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(T),a[I].add(y),a[J].add(y),a[x].add(y),l[I].add(d),l[J].add(d),l[x].add(d))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let I=0,J=E.length;I<J;++I){let x=E[I],T=x.start,et=x.count;for(let j=T,P=T+et;j<P;j+=3)u(t.getX(j+0),t.getX(j+1),t.getX(j+2))}let g=new H,A=new H,U=new H,R=new H;function M(I){U.fromBufferAttribute(s,I),R.copy(U);let J=a[I];g.copy(J),g.sub(U.multiplyScalar(U.dot(J))).normalize(),A.crossVectors(R,J);let T=A.dot(l[I])<0?-1:1;o.setXYZW(I,g.x,g.y,g.z,T)}for(let I=0,J=E.length;I<J;++I){let x=E[I],T=x.start,et=x.count;for(let j=T,P=T+et;j<P;j+=3)M(t.getX(j+0)),M(t.getX(j+1)),M(t.getX(j+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,h=new H,p=new H;if(t)for(let f=0,m=t.count;f<m;f+=3){let _=t.getX(f+0),y=t.getX(f+1),d=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,d),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,d),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,p=a.normalized,f=new c.constructor(l.length*h),m=0,_=0;for(let y=0,d=l.length;y<d;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*h;for(let u=0;u<h;u++)f[_++]=c[m++]}return new Se(f,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,p=c.length;h<p;h++){let f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,f=c.length;p<f;p++){let m=c[p];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],p=r[c];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},tl=new xe,jn=new tr,Is=new as,el=new H,wi=new H,Ai=new H,Ri=new H,ta=new H,Ls=new H,Ds=new Wt,Us=new Wt,Ns=new Wt,nl=new H,il=new H,sl=new H,Fs=new H,Os=new H,Fe=class extends He{constructor(t=new ci,e=new er){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ls.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],p=r[l];h!==0&&(ta.fromBufferAttribute(p,t),o?Ls.addScaledVector(ta,h):Ls.addScaledVector(ta.sub(e),h))}e.add(Ls)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(r),jn.copy(t.ray).recast(t.near),!(Is.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Is,el)===null||jn.origin.distanceToSquared(el)>(t.far-t.near)**2))&&(tl.copy(r).invert(),jn.copy(t.ray).applyMatrix4(tl),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,jn)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){let d=f[_],u=o[d.materialIndex],E=Math.max(d.start,m.start),g=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let A=E,U=g;A<U;A+=3){let R=a.getX(A),M=a.getX(A+1),I=a.getX(A+2);s=Bs(this,u,t,n,c,h,p,R,M,I),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let d=_,u=y;d<u;d+=3){let E=a.getX(d),g=a.getX(d+1),A=a.getX(d+2);s=Bs(this,o,t,n,c,h,p,E,g,A),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){let d=f[_],u=o[d.materialIndex],E=Math.max(d.start,m.start),g=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let A=E,U=g;A<U;A+=3){let R=A,M=A+1,I=A+2;s=Bs(this,u,t,n,c,h,p,R,M,I),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let d=_,u=y;d<u;d+=3){let E=d,g=d+1,A=d+2;s=Bs(this,o,t,n,c,h,p,E,g,A),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};function wh(i,t,e,n,s,r,o,a){let l;if(t.side===qe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===zn,a),l===null)return null;Os.copy(a),Os.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Os);return c<e.near||c>e.far?null:{distance:c,point:Os.clone(),object:i}}function Bs(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,wi),i.getVertexPosition(l,Ai),i.getVertexPosition(c,Ri);let h=wh(i,t,e,n,wi,Ai,Ri,Fs);if(h){s&&(Ds.fromBufferAttribute(s,a),Us.fromBufferAttribute(s,l),Ns.fromBufferAttribute(s,c),h.uv=Li.getInterpolation(Fs,wi,Ai,Ri,Ds,Us,Ns,new Wt)),r&&(Ds.fromBufferAttribute(r,a),Us.fromBufferAttribute(r,l),Ns.fromBufferAttribute(r,c),h.uv1=Li.getInterpolation(Fs,wi,Ai,Ri,Ds,Us,Ns,new Wt)),o&&(nl.fromBufferAttribute(o,a),il.fromBufferAttribute(o,l),sl.fromBufferAttribute(o,c),h.normal=Li.getInterpolation(Fs,wi,Ai,Ri,nl,il,sl,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new H,materialIndex:0};Li.getNormal(wi,Ai,Ri,p.normal),h.face=p}return h}var Gn=class i extends ci{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],p=[],f=0,m=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Tn(c,3)),this.setAttribute("normal",new Tn(h,3)),this.setAttribute("uv",new Tn(p,2));function _(y,d,u,E,g,A,U,R,M,I,J){let x=A/M,T=U/I,et=A/2,j=U/2,P=R/2,G=M+1,V=I+1,q=0,k=0,N=new H;for(let X=0;X<V;X++){let Q=X*T-j;for(let at=0;at<G;at++){let It=at*x-et;N[y]=It*E,N[d]=Q*g,N[u]=P,c.push(N.x,N.y,N.z),N[y]=0,N[d]=0,N[u]=R>0?1:-1,h.push(N.x,N.y,N.z),p.push(at/M),p.push(1-X/I),q+=1}}for(let X=0;X<I;X++)for(let Q=0;Q<M;Q++){let at=f+Q+G*X,It=f+Q+G*(X+1),Y=f+(Q+1)+G*(X+1),it=f+(Q+1)+G*X;l.push(at,It,it),l.push(It,Y,it),k+=6}a.addGroup(m,k,J),m+=k,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Gi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ze(i){let t={};for(let e=0;e<i.length;e++){let n=Gi(i[e]);for(let s in n)t[s]=n[s]}return t}function Ah(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Xl(i){return i.getRenderTarget()===null?i.outputColorSpace:oe.workingColorSpace}var Rh={clone:Gi,merge:ze},Ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ph=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends Vn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ch,this.fragmentShader=Ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=Ah(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},sr=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=En}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Dn=new H,rl=new Wt,al=new Wt,ke=class extends sr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=pa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pa*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z)}getViewSize(t,e){return this.getViewBounds(t,rl,al),e.subVectors(al,rl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Nr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ci=-90,Pi=1,xa=class extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ke(Ci,Pi,t,e);s.layers=this.layers,this.add(s);let r=new ke(Ci,Pi,t,e);r.layers=this.layers,this.add(r);let o=new ke(Ci,Pi,t,e);o.layers=this.layers,this.add(o);let a=new ke(Ci,Pi,t,e);a.layers=this.layers,this.add(a);let l=new ke(Ci,Pi,t,e);l.layers=this.layers,this.add(l);let c=new ke(Ci,Pi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,p=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(p,f,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},rr=class extends Oe{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:zi,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},va=class extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new rr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ge}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gn(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:Fn});r.uniforms.tEquirect.value=e;let o=new Fe(s,r),a=e.minFilter;return e.minFilter===ri&&(e.minFilter=Ge),new xa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ea=new H,Ih=new H,Lh=new Yt,rn=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ea.subVectors(n,e).cross(Ih.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ea),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Lh.getNormalMatrix(t),s=this.coplanarPoint(ea).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qn=new as,zs=new H,ls=class{constructor(t=new rn,e=new rn,n=new rn,s=new rn,r=new rn,o=new rn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],p=s[6],f=s[7],m=s[8],_=s[9],y=s[10],d=s[11],u=s[12],E=s[13],g=s[14],A=s[15];if(n[0].setComponents(l-r,f-c,d-m,A-u).normalize(),n[1].setComponents(l+r,f+c,d+m,A+u).normalize(),n[2].setComponents(l+o,f+h,d+_,A+E).normalize(),n[3].setComponents(l-o,f-h,d-_,A-E).normalize(),n[4].setComponents(l-a,f-p,d-y,A-g).normalize(),e===En)n[5].setComponents(l+a,f+p,d+y,A+g).normalize();else if(e===Js)n[5].setComponents(a,p,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(t){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(zs.x=s.normal.x>0?t.max.x:t.min.x,zs.y=s.normal.y>0?t.max.y:t.min.y,zs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(zs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ql(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Dh(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let p=c.array,f=c.usage,m=p.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,p,f),c.onUploadCallback();let y;if(p instanceof Float32Array)y=i.FLOAT;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=i.SHORT;else if(p instanceof Uint32Array)y=i.UNSIGNED_INT;else if(p instanceof Int32Array)y=i.INT;else if(p instanceof Int8Array)y=i.BYTE;else if(p instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,p){let f=h.array,m=h._updateRange,_=h.updateRanges;if(i.bindBuffer(p,c),m.count===-1&&_.length===0&&i.bufferSubData(p,0,f),_.length!==0){for(let y=0,d=_.length;y<d;y++){let u=_[y];e?i.bufferSubData(p,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):i.bufferSubData(p,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(p,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(p,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let p=n.get(c);if(p===void 0)n.set(c,s(c,h));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,c,h),p.version=c.version}}return{get:o,remove:a,update:l}}var Wn=class i extends ci{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,p=t/a,f=e/l,m=[],_=[],y=[],d=[];for(let u=0;u<h;u++){let E=u*f-o;for(let g=0;g<c;g++){let A=g*p-r;_.push(A,-E,0),y.push(0,0,1),d.push(g/a),d.push(1-u/l)}}for(let u=0;u<l;u++)for(let E=0;E<a;E++){let g=E+c*u,A=E+c*(u+1),U=E+1+c*(u+1),R=E+1+c*u;m.push(g,A,R),m.push(A,U,R)}this.setIndex(m),this.setAttribute("position",new Tn(_,3)),this.setAttribute("normal",new Tn(y,3)),this.setAttribute("uv",new Tn(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Uh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nh=`#ifdef USE_ALPHAHASH
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
#endif`,Fh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Oh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kh=`#ifdef USE_AOMAP
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
#endif`,Hh=`#ifdef USE_AOMAP
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
#endif`,Gh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Wh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yh=`#ifdef USE_IRIDESCENCE
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
#endif`,Zh=`#ifdef USE_BUMPMAP
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
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$h=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,iu=`#define PI 3.141592653589793
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
} // validated`,su=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ru=`vec3 transformedNormal = objectNormal;
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
#endif`,au=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ou=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hu="gl_FragColor = linearToOutputTexel( gl_FragColor );",uu=`
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
}`,du=`#ifdef USE_ENVMAP
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
#endif`,fu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pu=`#ifdef USE_ENVMAP
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
#endif`,mu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gu=`#ifdef USE_ENVMAP
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
#endif`,_u=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mu=`#ifdef USE_GRADIENTMAP
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
}`,Su=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Eu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wu=`uniform bool receiveShadow;
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
#endif`,Au=`#ifdef USE_ENVMAP
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
#endif`,Ru=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lu=`PhysicalMaterial material;
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
#endif`,Du=`struct PhysicalMaterial {
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
}`,Uu=`
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
#endif`,Nu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ou=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ku=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Hu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wu=`#if defined( USE_POINTS_UV )
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
#endif`,Xu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ju=`#ifdef USE_MORPHNORMALS
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
#endif`,$u=`#ifdef USE_MORPHTARGETS
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
#endif`,Ku=`#ifdef USE_MORPHTARGETS
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
#endif`,ju=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,id=`#ifdef USE_NORMALMAP
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
#endif`,sd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ad=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,od=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ld=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ud=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,md=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_d=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vd=`float getShadowMask() {
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
}`,yd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Md=`#ifdef USE_SKINNING
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
#endif`,Sd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bd=`#ifdef USE_SKINNING
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
#endif`,Ed=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Td=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ad=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rd=`#ifdef USE_TRANSMISSION
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
#endif`,Cd=`#ifdef USE_TRANSMISSION
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
#endif`,Pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ud=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nd=`uniform sampler2D t2D;
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
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Od=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`#include <common>
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
}`,Hd=`#if DEPTH_PACKING == 3200
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
}`,Gd=`#define DISTANCE
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
}`,Wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qd=`uniform float scale;
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
}`,Yd=`uniform vec3 diffuse;
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
}`,Zd=`#include <common>
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
}`,Jd=`uniform vec3 diffuse;
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
}`,$d=`#define LAMBERT
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
}`,Kd=`#define LAMBERT
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
}`,jd=`#define MATCAP
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
}`,Qd=`#define MATCAP
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
}`,tf=`#define NORMAL
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
}`,ef=`#define NORMAL
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
}`,nf=`#define PHONG
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
}`,sf=`#define PHONG
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
}`,rf=`#define STANDARD
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
}`,af=`#define STANDARD
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
}`,of=`#define TOON
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
}`,lf=`#define TOON
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
}`,cf=`uniform float size;
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
}`,hf=`uniform vec3 diffuse;
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
}`,uf=`#include <common>
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
}`,df=`uniform vec3 color;
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
}`,ff=`uniform float rotation;
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
}`,pf=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Uh,alphahash_pars_fragment:Nh,alphamap_fragment:Fh,alphamap_pars_fragment:Oh,alphatest_fragment:Bh,alphatest_pars_fragment:zh,aomap_fragment:kh,aomap_pars_fragment:Hh,batching_pars_vertex:Vh,batching_vertex:Gh,begin_vertex:Wh,beginnormal_vertex:Xh,bsdfs:qh,iridescence_fragment:Yh,bumpmap_pars_fragment:Zh,clipping_planes_fragment:Jh,clipping_planes_pars_fragment:$h,clipping_planes_pars_vertex:Kh,clipping_planes_vertex:jh,color_fragment:Qh,color_pars_fragment:tu,color_pars_vertex:eu,color_vertex:nu,common:iu,cube_uv_reflection_fragment:su,defaultnormal_vertex:ru,displacementmap_pars_vertex:au,displacementmap_vertex:ou,emissivemap_fragment:lu,emissivemap_pars_fragment:cu,colorspace_fragment:hu,colorspace_pars_fragment:uu,envmap_fragment:du,envmap_common_pars_fragment:fu,envmap_pars_fragment:pu,envmap_pars_vertex:mu,envmap_physical_pars_fragment:Au,envmap_vertex:gu,fog_vertex:_u,fog_pars_vertex:xu,fog_fragment:vu,fog_pars_fragment:yu,gradientmap_pars_fragment:Mu,lightmap_fragment:Su,lightmap_pars_fragment:bu,lights_lambert_fragment:Eu,lights_lambert_pars_fragment:Tu,lights_pars_begin:wu,lights_toon_fragment:Ru,lights_toon_pars_fragment:Cu,lights_phong_fragment:Pu,lights_phong_pars_fragment:Iu,lights_physical_fragment:Lu,lights_physical_pars_fragment:Du,lights_fragment_begin:Uu,lights_fragment_maps:Nu,lights_fragment_end:Fu,logdepthbuf_fragment:Ou,logdepthbuf_pars_fragment:Bu,logdepthbuf_pars_vertex:zu,logdepthbuf_vertex:ku,map_fragment:Hu,map_pars_fragment:Vu,map_particle_fragment:Gu,map_particle_pars_fragment:Wu,metalnessmap_fragment:Xu,metalnessmap_pars_fragment:qu,morphinstance_vertex:Yu,morphcolor_vertex:Zu,morphnormal_vertex:Ju,morphtarget_pars_vertex:$u,morphtarget_vertex:Ku,normal_fragment_begin:ju,normal_fragment_maps:Qu,normal_pars_fragment:td,normal_pars_vertex:ed,normal_vertex:nd,normalmap_pars_fragment:id,clearcoat_normal_fragment_begin:sd,clearcoat_normal_fragment_maps:rd,clearcoat_pars_fragment:ad,iridescence_pars_fragment:od,opaque_fragment:ld,packing:cd,premultiplied_alpha_fragment:hd,project_vertex:ud,dithering_fragment:dd,dithering_pars_fragment:fd,roughnessmap_fragment:pd,roughnessmap_pars_fragment:md,shadowmap_pars_fragment:gd,shadowmap_pars_vertex:_d,shadowmap_vertex:xd,shadowmask_pars_fragment:vd,skinbase_vertex:yd,skinning_pars_vertex:Md,skinning_vertex:Sd,skinnormal_vertex:bd,specularmap_fragment:Ed,specularmap_pars_fragment:Td,tonemapping_fragment:wd,tonemapping_pars_fragment:Ad,transmission_fragment:Rd,transmission_pars_fragment:Cd,uv_pars_fragment:Pd,uv_pars_vertex:Id,uv_vertex:Ld,worldpos_vertex:Dd,background_vert:Ud,background_frag:Nd,backgroundCube_vert:Fd,backgroundCube_frag:Od,cube_vert:Bd,cube_frag:zd,depth_vert:kd,depth_frag:Hd,distanceRGBA_vert:Vd,distanceRGBA_frag:Gd,equirect_vert:Wd,equirect_frag:Xd,linedashed_vert:qd,linedashed_frag:Yd,meshbasic_vert:Zd,meshbasic_frag:Jd,meshlambert_vert:$d,meshlambert_frag:Kd,meshmatcap_vert:jd,meshmatcap_frag:Qd,meshnormal_vert:tf,meshnormal_frag:ef,meshphong_vert:nf,meshphong_frag:sf,meshphysical_vert:rf,meshphysical_frag:af,meshtoon_vert:of,meshtoon_frag:lf,points_vert:cf,points_frag:hf,shadow_vert:uf,shadow_frag:df,sprite_vert:ff,sprite_frag:pf},ut={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},dn={basic:{uniforms:ze([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:ze([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new jt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:ze([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:ze([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:ze([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new jt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:ze([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:ze([ut.points,ut.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:ze([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:ze([ut.common,ut.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:ze([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:ze([ut.sprite,ut.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:ze([ut.common,ut.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:ze([ut.lights,ut.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};dn.physical={uniforms:ze([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var ks={r:0,b:0,g:0},ti=new fn,mf=new xe;function gf(i,t,e,n,s,r,o){let a=new jt(0),l=r===!0?0:1,c,h,p=null,f=0,m=null;function _(d,u){let E=!1,g=u.isScene===!0?u.background:null;g&&g.isTexture&&(g=(u.backgroundBlurriness>0?e:t).get(g)),g===null?y(a,l):g&&g.isColor&&(y(g,1),E=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),g&&(g.isCubeTexture||g.mapping===gr)?(h===void 0&&(h=new Fe(new Gn(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Gi(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,R,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ti.copy(u.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(mf.makeRotationFromEuler(ti)),h.material.toneMapped=oe.getTransfer(g.colorSpace)!==ue,(p!==g||f!==g.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,p=g,f=g.version,m=i.toneMapping),h.layers.enableAll(),d.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Fe(new Wn(2,2),new pn({name:"BackgroundMaterial",uniforms:Gi(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=oe.getTransfer(g.colorSpace)!==ue,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(p!==g||f!==g.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,p=g,f=g.version,m=i.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function y(d,u){d.getRGB(ks,Xl(i)),n.buffers.color.setClear(ks.r,ks.g,ks.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(d,u=1){a.set(d),l=u,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,y(a,l)},render:_}}function _f(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=d(null),c=l,h=!1;function p(P,G,V,q,k){let N=!1;if(o){let X=y(q,V,G);c!==X&&(c=X,m(c.object)),N=u(P,q,V,k),N&&E(P,q,V,k)}else{let X=G.wireframe===!0;(c.geometry!==q.id||c.program!==V.id||c.wireframe!==X)&&(c.geometry=q.id,c.program=V.id,c.wireframe=X,N=!0)}k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(N||h)&&(h=!1,I(P,G,V,q),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function _(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function y(P,G,V){let q=V.wireframe===!0,k=a[P.id];k===void 0&&(k={},a[P.id]=k);let N=k[G.id];N===void 0&&(N={},k[G.id]=N);let X=N[q];return X===void 0&&(X=d(f()),N[q]=X),X}function d(P){let G=[],V=[],q=[];for(let k=0;k<s;k++)G[k]=0,V[k]=0,q[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:V,attributeDivisors:q,object:P,attributes:{},index:null}}function u(P,G,V,q){let k=c.attributes,N=G.attributes,X=0,Q=V.getAttributes();for(let at in Q)if(Q[at].location>=0){let Y=k[at],it=N[at];if(it===void 0&&(at==="instanceMatrix"&&P.instanceMatrix&&(it=P.instanceMatrix),at==="instanceColor"&&P.instanceColor&&(it=P.instanceColor)),Y===void 0||Y.attribute!==it||it&&Y.data!==it.data)return!0;X++}return c.attributesNum!==X||c.index!==q}function E(P,G,V,q){let k={},N=G.attributes,X=0,Q=V.getAttributes();for(let at in Q)if(Q[at].location>=0){let Y=N[at];Y===void 0&&(at==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),at==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor));let it={};it.attribute=Y,Y&&Y.data&&(it.data=Y.data),k[at]=it,X++}c.attributes=k,c.attributesNum=X,c.index=q}function g(){let P=c.newAttributes;for(let G=0,V=P.length;G<V;G++)P[G]=0}function A(P){U(P,0)}function U(P,G){let V=c.newAttributes,q=c.enabledAttributes,k=c.attributeDivisors;V[P]=1,q[P]===0&&(i.enableVertexAttribArray(P),q[P]=1),k[P]!==G&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,G),k[P]=G)}function R(){let P=c.newAttributes,G=c.enabledAttributes;for(let V=0,q=G.length;V<q;V++)G[V]!==P[V]&&(i.disableVertexAttribArray(V),G[V]=0)}function M(P,G,V,q,k,N,X){X===!0?i.vertexAttribIPointer(P,G,V,k,N):i.vertexAttribPointer(P,G,V,q,k,N)}function I(P,G,V,q){if(n.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();let k=q.attributes,N=V.getAttributes(),X=G.defaultAttributeValues;for(let Q in N){let at=N[Q];if(at.location>=0){let It=k[Q];if(It===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(It=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(It=P.instanceColor)),It!==void 0){let Y=It.normalized,it=It.itemSize,ht=e.get(It);if(ht===void 0)continue;let Lt=ht.buffer,bt=ht.type,_t=ht.bytesPerElement,Pt=n.isWebGL2===!0&&(bt===i.INT||bt===i.UNSIGNED_INT||It.gpuType===Ul);if(It.isInterleavedBufferAttribute){let vt=It.data,L=vt.stride,se=It.offset;if(vt.isInstancedInterleavedBuffer){for(let xt=0;xt<at.locationSize;xt++)U(at.location+xt,vt.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let xt=0;xt<at.locationSize;xt++)A(at.location+xt);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let xt=0;xt<at.locationSize;xt++)M(at.location+xt,it/at.locationSize,bt,Y,L*_t,(se+it/at.locationSize*xt)*_t,Pt)}else{if(It.isInstancedBufferAttribute){for(let vt=0;vt<at.locationSize;vt++)U(at.location+vt,It.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=It.meshPerAttribute*It.count)}else for(let vt=0;vt<at.locationSize;vt++)A(at.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let vt=0;vt<at.locationSize;vt++)M(at.location+vt,it/at.locationSize,bt,Y,it*_t,it/at.locationSize*vt*_t,Pt)}}else if(X!==void 0){let Y=X[Q];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(at.location,Y);break;case 3:i.vertexAttrib3fv(at.location,Y);break;case 4:i.vertexAttrib4fv(at.location,Y);break;default:i.vertexAttrib1fv(at.location,Y)}}}}R()}function J(){et();for(let P in a){let G=a[P];for(let V in G){let q=G[V];for(let k in q)_(q[k].object),delete q[k];delete G[V]}delete a[P]}}function x(P){if(a[P.id]===void 0)return;let G=a[P.id];for(let V in G){let q=G[V];for(let k in q)_(q[k].object),delete q[k];delete G[V]}delete a[P.id]}function T(P){for(let G in a){let V=a[G];if(V[P.id]===void 0)continue;let q=V[P.id];for(let k in q)_(q[k].object),delete q[k];delete V[P.id]}}function et(){j(),h=!0,c!==l&&(c=l,m(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:et,resetDefaultState:j,dispose:J,releaseStatesOfGeometry:x,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:A,disableUnusedAttributes:R}}function xf(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,p){i.drawArrays(r,h,p),e.update(p,r,1)}function l(h,p,f){if(f===0)return;let m,_;if(s)m=i,_="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,h,p,f),e.update(p,r,f)}function c(h,p,f){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<f;_++)this.render(h[_],p[_]);else{m.multiDrawArraysWEBGL(r,h,0,p,0,f);let _=0;for(let y=0;y<f;y++)_+=p[y];e.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function vf(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let M=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),g=f>0,A=o||t.has("OES_texture_float"),U=g&&A,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:d,maxVaryings:u,maxFragmentUniforms:E,vertexTextures:g,floatFragmentTextures:A,floatVertexTextures:U,maxSamples:R}}function yf(i){let t=this,e=null,n=0,s=!1,r=!1,o=new rn,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let m=p.length!==0||f||n!==0||s;return s=f,n=p.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){e=h(p,f,0)},this.setState=function(p,f,m){let _=p.clippingPlanes,y=p.clipIntersection,d=p.clipShadows,u=i.get(p);if(!s||_===null||_.length===0||r&&!d)r?h(null):c();else{let E=r?0:n,g=E*4,A=u.clippingState||null;l.value=A,A=h(_,f,g,m);for(let U=0;U!==g;++U)A[U]=e[U];u.clippingState=A,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,f,m,_){let y=p!==null?p.length:0,d=null;if(y!==0){if(d=l.value,_!==!0||d===null){let u=m+y*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(d===null||d.length<u)&&(d=new Float32Array(u));for(let g=0,A=m;g!==y;++g,A+=4)o.copy(p[g]).applyMatrix4(E,a),o.normal.toArray(d,A),d[A+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,d}}function Mf(i){let t=new WeakMap;function e(o,a){return a===ha?o.mapping=zi:a===ua&&(o.mapping=ki),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ha||a===ua)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new va(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ar=class extends sr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Di=4,ol=[.125,.215,.35,.446,.526,.582],si=20,na=new ar,ll=new jt,ia=null,sa=0,ra=0,ni=(1+Math.sqrt(5))/2,Ii=1/ni,cl=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,ni,Ii),new H(0,ni,-Ii),new H(Ii,0,ni),new H(-Ii,0,ni),new H(ni,Ii,0),new H(-ni,Ii,0)],or=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ia=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ia,sa,ra),t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zi||t.mapping===ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ia=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:rs,format:on,colorSpace:Xn,depthBuffer:!1},s=hl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sf(r)),this._blurMaterial=bf(r,t,e)}return s}_compileMaterial(t){let e=new Fe(this._lodPlanes[0],t);this._renderer.compile(e,na)}_sceneToCubeUV(t,e,n,s){let a=new ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(ll),h.toneMapping=On,h.autoClear=!1;let m=new er({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),_=new Fe(new Gn,m),y=!1,d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,y=!0):(m.color.copy(ll),y=!0);for(let u=0;u<6;u++){let E=u%3;E===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):E===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let g=this._cubeSize;Hs(s,E*g,u>2?g:0,g,g),h.setRenderTarget(s),y&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=p,t.background=d}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===zi||t.mapping===ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ul());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Fe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Hs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,na)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=cl[(s-1)%cl.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,p=new Fe(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*si-1),y=r/_,d=isFinite(r)?1+Math.floor(h*y):si;d>si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${si}`);let u=[],E=0;for(let M=0;M<si;++M){let I=M/y,J=Math.exp(-I*I/2);u.push(J),M===0?E+=J:M<d&&(E+=2*J)}for(let M=0;M<u.length;M++)u[M]=u[M]/E;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:g}=this;f.dTheta.value=_,f.mipInt.value=g-n;let A=this._sizeLods[s],U=3*A*(s>g-Di?s-g+Di:0),R=4*(this._cubeSize-A);Hs(e,U,R,3*A,2*A),l.setRenderTarget(e),l.render(p,na)}};function Sf(i){let t=[],e=[],n=[],s=i,r=i-Di+1+ol.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Di?l=ol[o-i+Di-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,p=1+c,f=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,_=6,y=3,d=2,u=1,E=new Float32Array(y*_*m),g=new Float32Array(d*_*m),A=new Float32Array(u*_*m);for(let R=0;R<m;R++){let M=R%3*2/3-1,I=R>2?0:-1,J=[M,I,0,M+2/3,I,0,M+2/3,I+1,0,M,I,0,M+2/3,I+1,0,M,I+1,0];E.set(J,y*_*R),g.set(f,d*_*R);let x=[R,R,R,R,R,R];A.set(x,u*_*R)}let U=new ci;U.setAttribute("position",new Se(E,y)),U.setAttribute("uv",new Se(g,d)),U.setAttribute("faceIndex",new Se(A,u)),t.push(U),s>Di&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function hl(i,t,e){let n=new wn(i,t,e);return n.texture.mapping=gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function bf(i,t,e){let n=new Float32Array(si),s=new H(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ya(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function ul(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ya(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function dl(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Ya(){return`

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
	`}function Ef(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ha||l===ua,h=l===zi||l===ki;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=t.get(a);return e===null&&(e=new or(i)),p=c?e.fromEquirectangular(a,p):e.fromCubemap(a,p),t.set(a,p),p.texture}else{if(t.has(a))return t.get(a).texture;{let p=a.image;if(c&&p&&p.height>0||h&&p&&s(p)){e===null&&(e=new or(i));let f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Tf(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function wf(i,t,e,n){let s={},r=new WeakMap;function o(p){let f=p.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);for(let _ in f.morphAttributes){let y=f.morphAttributes[_];for(let d=0,u=y.length;d<u;d++)t.remove(y[d])}f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(p,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(p){let f=p.attributes;for(let _ in f)t.update(f[_],i.ARRAY_BUFFER);let m=p.morphAttributes;for(let _ in m){let y=m[_];for(let d=0,u=y.length;d<u;d++)t.update(y[d],i.ARRAY_BUFFER)}}function c(p){let f=[],m=p.index,_=p.attributes.position,y=0;if(m!==null){let E=m.array;y=m.version;for(let g=0,A=E.length;g<A;g+=3){let U=E[g+0],R=E[g+1],M=E[g+2];f.push(U,R,R,M,M,U)}}else if(_!==void 0){let E=_.array;y=_.version;for(let g=0,A=E.length/3-1;g<A;g+=3){let U=g+0,R=g+1,M=g+2;f.push(U,R,R,M,M,U)}}else return;let d=new(Gl(f)?ir:nr)(f,1);d.version=y;let u=r.get(p);u&&t.remove(u),r.set(p,d)}function h(p){let f=r.get(p);if(f){let m=p.index;m!==null&&f.version<m.version&&c(p)}else c(p);return r.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function Af(i,t,e,n){let s=n.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,_){i.drawElements(r,_,a,m*l),e.update(_,r,1)}function p(m,_,y){if(y===0)return;let d,u;if(s)d=i,u="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[u](r,_,a,m*l,y),e.update(_,r,y)}function f(m,_,y){if(y===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<y;u++)this.render(m[u]/l,_[u]);else{d.multiDrawElementsWEBGL(r,_,0,a,m,0,y);let u=0;for(let E=0;E<y;E++)u+=_[E];e.update(u,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=p,this.renderMultiDraw=f}function Rf(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Cf(i,t){return i[0]-t[0]}function Pf(i,t){return Math.abs(t[1])-Math.abs(i[1])}function If(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new Re,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,p){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0,y=r.get(h);if(y===void 0||y.count!==_){let et=function(){x.dispose(),r.delete(h),h.removeEventListener("dispose",et)};y!==void 0&&y.texture.dispose();let d=h.morphAttributes.position!==void 0,u=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,g=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],U=h.morphAttributes.color||[],R=0;d===!0&&(R=1),u===!0&&(R=2),E===!0&&(R=3);let M=h.attributes.position.count*R,I=1;M>t.maxTextureSize&&(I=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let J=new Float32Array(M*I*4*_),x=new Qs(J,M,I,_);x.type=bn,x.needsUpdate=!0;let T=R*4;for(let j=0;j<_;j++){let P=g[j],G=A[j],V=U[j],q=M*I*4*j;for(let k=0;k<P.count;k++){let N=k*T;d===!0&&(o.fromBufferAttribute(P,k),J[q+N+0]=o.x,J[q+N+1]=o.y,J[q+N+2]=o.z,J[q+N+3]=0),u===!0&&(o.fromBufferAttribute(G,k),J[q+N+4]=o.x,J[q+N+5]=o.y,J[q+N+6]=o.z,J[q+N+7]=0),E===!0&&(o.fromBufferAttribute(V,k),J[q+N+8]=o.x,J[q+N+9]=o.y,J[q+N+10]=o.z,J[q+N+11]=V.itemSize===4?o.w:1)}}y={count:_,texture:x,size:new Wt(M,I)},r.set(h,y),h.addEventListener("dispose",et)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(i,"morphTexture",c.morphTexture,e);else{let d=0;for(let E=0;E<f.length;E++)d+=f[E];let u=h.morphTargetsRelative?1:1-d;p.getUniforms().setValue(i,"morphTargetBaseInfluence",u),p.getUniforms().setValue(i,"morphTargetInfluences",f)}p.getUniforms().setValue(i,"morphTargetsTexture",y.texture,e),p.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}else{let m=f===void 0?0:f.length,_=n[h.id];if(_===void 0||_.length!==m){_=[];for(let g=0;g<m;g++)_[g]=[g,0];n[h.id]=_}for(let g=0;g<m;g++){let A=_[g];A[0]=g,A[1]=f[g]}_.sort(Pf);for(let g=0;g<8;g++)g<m&&_[g][1]?(a[g][0]=_[g][0],a[g][1]=_[g][1]):(a[g][0]=Number.MAX_SAFE_INTEGER,a[g][1]=0);a.sort(Cf);let y=h.morphAttributes.position,d=h.morphAttributes.normal,u=0;for(let g=0;g<8;g++){let A=a[g],U=A[0],R=A[1];U!==Number.MAX_SAFE_INTEGER&&R?(y&&h.getAttribute("morphTarget"+g)!==y[U]&&h.setAttribute("morphTarget"+g,y[U]),d&&h.getAttribute("morphNormal"+g)!==d[U]&&h.setAttribute("morphNormal"+g,d[U]),s[g]=R,u+=R):(y&&h.hasAttribute("morphTarget"+g)===!0&&h.deleteAttribute("morphTarget"+g),d&&h.hasAttribute("morphNormal"+g)===!0&&h.deleteAttribute("morphNormal"+g),s[g]=0)}let E=h.morphTargetsRelative?1:1-u;p.getUniforms().setValue(i,"morphTargetBaseInfluence",E),p.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Lf(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,p=t.get(l,h);if(s.get(p)!==c&&(t.update(p),s.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return p}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var lr=class extends Oe{constructor(t,e,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:oi,h!==oi&&h!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===oi&&(n=Nn),n===void 0&&h===Vi&&(n=ai),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Le,this.minFilter=l!==void 0?l:Le,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Yl=new Oe,Zl=new lr(1,1);Zl.compareFunction=Vl;var Jl=new Qs,$l=new _a,Kl=new rr,fl=[],pl=[],ml=new Float32Array(16),gl=new Float32Array(9),_l=new Float32Array(4);function Xi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=fl[s];if(r===void 0&&(r=new Float32Array(s),fl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function xr(i,t){let e=pl[t];e===void 0&&(e=new Int32Array(t),pl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Df(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Uf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function Nf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function Ff(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function Of(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,n))return;_l.set(n),i.uniformMatrix2fv(this.addr,!1,_l),Ee(e,n)}}function Bf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,n))return;gl.set(n),i.uniformMatrix3fv(this.addr,!1,gl),Ee(e,n)}}function zf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,n))return;ml.set(n),i.uniformMatrix4fv(this.addr,!1,ml),Ee(e,n)}}function kf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Hf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function Vf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function Gf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function Wf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Xf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function qf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function Yf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function Zf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Zl:Yl;e.setTexture2D(t||r,s)}function Jf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||$l,s)}function $f(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Kl,s)}function Kf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Jl,s)}function jf(i){switch(i){case 5126:return Df;case 35664:return Uf;case 35665:return Nf;case 35666:return Ff;case 35674:return Of;case 35675:return Bf;case 35676:return zf;case 5124:case 35670:return kf;case 35667:case 35671:return Hf;case 35668:case 35672:return Vf;case 35669:case 35673:return Gf;case 5125:return Wf;case 36294:return Xf;case 36295:return qf;case 36296:return Yf;case 35678:case 36198:case 36298:case 36306:case 35682:return Zf;case 35679:case 36299:case 36307:return Jf;case 35680:case 36300:case 36308:case 36293:return $f;case 36289:case 36303:case 36311:case 36292:return Kf}}function Qf(i,t){i.uniform1fv(this.addr,t)}function tp(i,t){let e=Xi(t,this.size,2);i.uniform2fv(this.addr,e)}function ep(i,t){let e=Xi(t,this.size,3);i.uniform3fv(this.addr,e)}function np(i,t){let e=Xi(t,this.size,4);i.uniform4fv(this.addr,e)}function ip(i,t){let e=Xi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function sp(i,t){let e=Xi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function rp(i,t){let e=Xi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ap(i,t){i.uniform1iv(this.addr,t)}function op(i,t){i.uniform2iv(this.addr,t)}function lp(i,t){i.uniform3iv(this.addr,t)}function cp(i,t){i.uniform4iv(this.addr,t)}function hp(i,t){i.uniform1uiv(this.addr,t)}function up(i,t){i.uniform2uiv(this.addr,t)}function dp(i,t){i.uniform3uiv(this.addr,t)}function fp(i,t){i.uniform4uiv(this.addr,t)}function pp(i,t,e){let n=this.cache,s=t.length,r=xr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Yl,r[o])}function mp(i,t,e){let n=this.cache,s=t.length,r=xr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||$l,r[o])}function gp(i,t,e){let n=this.cache,s=t.length,r=xr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Kl,r[o])}function _p(i,t,e){let n=this.cache,s=t.length,r=xr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Jl,r[o])}function xp(i){switch(i){case 5126:return Qf;case 35664:return tp;case 35665:return ep;case 35666:return np;case 35674:return ip;case 35675:return sp;case 35676:return rp;case 5124:case 35670:return ap;case 35667:case 35671:return op;case 35668:case 35672:return lp;case 35669:case 35673:return cp;case 5125:return hp;case 36294:return up;case 36295:return dp;case 36296:return fp;case 35678:case 36198:case 36298:case 36306:case 35682:return pp;case 35679:case 36299:case 36307:return mp;case 35680:case 36300:case 36308:case 36293:return gp;case 36289:case 36303:case 36311:case 36292:return _p}}var ya=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=jf(e.type)}},Ma=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xp(e.type)}},Sa=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},aa=/(\w+)(\])?(\[|\.)?/g;function xl(i,t){i.seq.push(t),i.map[t.id]=t}function vp(i,t,e){let n=i.name,s=n.length;for(aa.lastIndex=0;;){let r=aa.exec(n),o=aa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){xl(e,c===void 0?new ya(a,i,t):new Ma(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new Sa(a),xl(e,p)),e=p}}}var Bi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);vp(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function vl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var yp=37297,Mp=0;function Sp(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function bp(i){let t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(i),n;switch(t===e?n="":t===Zs&&e===Ys?n="LinearDisplayP3ToLinearSRGB":t===Ys&&e===Zs&&(n="LinearSRGBToLinearDisplayP3"),i){case Xn:case _r:return[n,"LinearTransferOETF"];case We:case qa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function yl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Sp(i.getShaderSource(t),o)}else return s}function Ep(i,t){let e=bp(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Tp(i,t){let e;switch(t){case kc:e="Linear";break;case Hc:e="Reinhard";break;case Vc:e="OptimizedCineon";break;case Gc:e="ACESFilmic";break;case Xc:e="AgX";break;case qc:e="Neutral";break;case Wc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function wp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ui).join(`
`)}function Ap(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ui).join(`
`)}function Rp(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cp(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ui(i){return i!==""}function Ml(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Pp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ba(i){return i.replace(Pp,Lp)}var Ip=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Lp(i,t){let e=qt[t];if(e===void 0){let n=Ip.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ba(e)}var Dp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bl(i){return i.replace(Dp,Up)}function Up(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function El(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Np(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mr?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===pc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Sn&&(t="SHADOWMAP_TYPE_VSM"),t}function Fp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zi:case ki:t="ENVMAP_TYPE_CUBE";break;case gr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Op(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ki&&(t="ENVMAP_MODE_REFRACTION"),t}function Bp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ll:t="ENVMAP_BLENDING_MULTIPLY";break;case Bc:t="ENVMAP_BLENDING_MIX";break;case zc:t="ENVMAP_BLENDING_ADD";break}return t}function zp(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function kp(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Np(e),c=Fp(e),h=Op(e),p=Bp(e),f=zp(e),m=e.isWebGL2?"":wp(e),_=Ap(e),y=Rp(r),d=s.createProgram(),u,E,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Ui).join(`
`),u.length>0&&(u+=`
`),E=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Ui).join(`
`),E.length>0&&(E+=`
`)):(u=[El(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ui).join(`
`),E=[m,El(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?qt.tonemapping_pars_fragment:"",e.toneMapping!==On?Tp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Ep("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ui).join(`
`)),o=ba(o),o=Ml(o,e),o=Sl(o,e),a=ba(a),a=Ml(a,e),a=Sl(a,e),o=bl(o),a=bl(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ho?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ho?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);let A=g+u+o,U=g+E+a,R=vl(s,s.VERTEX_SHADER,A),M=vl(s,s.FRAGMENT_SHADER,U);s.attachShader(d,R),s.attachShader(d,M),e.index0AttributeName!==void 0?s.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(d,0,"position"),s.linkProgram(d);function I(et){if(i.debug.checkShaderErrors){let j=s.getProgramInfoLog(d).trim(),P=s.getShaderInfoLog(R).trim(),G=s.getShaderInfoLog(M).trim(),V=!0,q=!0;if(s.getProgramParameter(d,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,d,R,M);else{let k=yl(s,R,"vertex"),N=yl(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(d,s.VALIDATE_STATUS)+`

Material Name: `+et.name+`
Material Type: `+et.type+`

Program Info Log: `+j+`
`+k+`
`+N)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(P===""||G==="")&&(q=!1);q&&(et.diagnostics={runnable:V,programLog:j,vertexShader:{log:P,prefix:u},fragmentShader:{log:G,prefix:E}})}s.deleteShader(R),s.deleteShader(M),J=new Bi(s,d),x=Cp(s,d)}let J;this.getUniforms=function(){return J===void 0&&I(this),J};let x;this.getAttributes=function(){return x===void 0&&I(this),x};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(d,yp)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(d),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Mp++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=R,this.fragmentShader=M,this}var Hp=0,Ea=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ta(t),e.set(t,n)),n}},Ta=class{constructor(t){this.id=Hp++,this.code=t,this.usedTimes=0}};function Vp(i,t,e,n,s,r,o){let a=new os,l=new Ea,c=new Set,h=[],p=s.isWebGL2,f=s.logarithmicDepthBuffer,m=s.vertexTextures,_=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return c.add(x),x===0?"uv":`uv${x}`}function u(x,T,et,j,P){let G=j.fog,V=P.geometry,q=x.isMeshStandardMaterial?j.environment:null,k=(x.isMeshStandardMaterial?e:t).get(x.envMap||q),N=k&&k.mapping===gr?k.image.height:null,X=y[x.type];x.precision!==null&&(_=s.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));let Q=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,at=Q!==void 0?Q.length:0,It=0;V.morphAttributes.position!==void 0&&(It=1),V.morphAttributes.normal!==void 0&&(It=2),V.morphAttributes.color!==void 0&&(It=3);let Y,it,ht,Lt;if(X){let ie=dn[X];Y=ie.vertexShader,it=ie.fragmentShader}else Y=x.vertexShader,it=x.fragmentShader,l.update(x),ht=l.getVertexShaderID(x),Lt=l.getFragmentShaderID(x);let bt=i.getRenderTarget(),_t=P.isInstancedMesh===!0,Pt=P.isBatchedMesh===!0,vt=!!x.map,L=!!x.matcap,se=!!k,xt=!!x.aoMap,zt=!!x.lightMap,Et=!!x.bumpMap,Vt=!!x.normalMap,Gt=!!x.displacementMap,Zt=!!x.emissiveMap,me=!!x.metalnessMap,w=!!x.roughnessMap,v=x.anisotropy>0,$=x.clearcoat>0,nt=x.iridescence>0,rt=x.sheen>0,st=x.transmission>0,kt=v&&!!x.anisotropyMap,mt=$&&!!x.clearcoatMap,ct=$&&!!x.clearcoatNormalMap,dt=$&&!!x.clearcoatRoughnessMap,Nt=nt&&!!x.iridescenceMap,ot=nt&&!!x.iridescenceThicknessMap,de=rt&&!!x.sheenColorMap,Xt=rt&&!!x.sheenRoughnessMap,At=!!x.specularMap,Mt=!!x.specularColorMap,yt=!!x.specularIntensityMap,$t=st&&!!x.transmissionMap,Rt=st&&!!x.thicknessMap,Qt=!!x.gradientMap,D=!!x.alphaMap,ft=x.alphaTest>0,W=!!x.alphaHash,lt=!!x.extensions,pt=On;x.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(pt=i.toneMapping);let Kt={isWebGL2:p,shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:Y,fragmentShader:it,defines:x.defines,customVertexShaderID:ht,customFragmentShaderID:Lt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:Pt,instancing:_t,instancingColor:_t&&P.instanceColor!==null,instancingMorph:_t&&P.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:bt===null?i.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Xn,alphaToCoverage:!!x.alphaToCoverage,map:vt,matcap:L,envMap:se,envMapMode:se&&k.mapping,envMapCubeUVHeight:N,aoMap:xt,lightMap:zt,bumpMap:Et,normalMap:Vt,displacementMap:m&&Gt,emissiveMap:Zt,normalMapObjectSpace:Vt&&x.normalMapType===nh,normalMapTangentSpace:Vt&&x.normalMapType===Hl,metalnessMap:me,roughnessMap:w,anisotropy:v,anisotropyMap:kt,clearcoat:$,clearcoatMap:mt,clearcoatNormalMap:ct,clearcoatRoughnessMap:dt,iridescence:nt,iridescenceMap:Nt,iridescenceThicknessMap:ot,sheen:rt,sheenColorMap:de,sheenRoughnessMap:Xt,specularMap:At,specularColorMap:Mt,specularIntensityMap:yt,transmission:st,transmissionMap:$t,thicknessMap:Rt,gradientMap:Qt,opaque:x.transparent===!1&&x.blending===Fi&&x.alphaToCoverage===!1,alphaMap:D,alphaTest:ft,alphaHash:W,combine:x.combine,mapUv:vt&&d(x.map.channel),aoMapUv:xt&&d(x.aoMap.channel),lightMapUv:zt&&d(x.lightMap.channel),bumpMapUv:Et&&d(x.bumpMap.channel),normalMapUv:Vt&&d(x.normalMap.channel),displacementMapUv:Gt&&d(x.displacementMap.channel),emissiveMapUv:Zt&&d(x.emissiveMap.channel),metalnessMapUv:me&&d(x.metalnessMap.channel),roughnessMapUv:w&&d(x.roughnessMap.channel),anisotropyMapUv:kt&&d(x.anisotropyMap.channel),clearcoatMapUv:mt&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:ct&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&d(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:de&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&d(x.sheenRoughnessMap.channel),specularMapUv:At&&d(x.specularMap.channel),specularColorMapUv:Mt&&d(x.specularColorMap.channel),specularIntensityMapUv:yt&&d(x.specularIntensityMap.channel),transmissionMapUv:$t&&d(x.transmissionMap.channel),thicknessMapUv:Rt&&d(x.thicknessMap.channel),alphaMapUv:D&&d(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Vt||v),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!V.attributes.uv&&(vt||D),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:P.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:It,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&et.length>0,shadowMapType:i.shadowMap.type,toneMapping:pt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:vt&&x.map.isVideoTexture===!0&&oe.getTransfer(x.map.colorSpace)===ue,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===je,flipSided:x.side===qe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:lt&&x.extensions.derivatives===!0,extensionFragDepth:lt&&x.extensions.fragDepth===!0,extensionDrawBuffers:lt&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:lt&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:lt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:lt&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:p||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Kt.vertexUv1s=c.has(1),Kt.vertexUv2s=c.has(2),Kt.vertexUv3s=c.has(3),c.clear(),Kt}function E(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let et in x.defines)T.push(et),T.push(x.defines[et]);return x.isRawShaderMaterial===!1&&(g(T,x),A(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function g(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function A(x,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.instancingMorph&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.normalMapObjectSpace&&a.enable(7),T.normalMapTangentSpace&&a.enable(8),T.clearcoat&&a.enable(9),T.iridescence&&a.enable(10),T.alphaTest&&a.enable(11),T.vertexColors&&a.enable(12),T.vertexAlphas&&a.enable(13),T.vertexUv1s&&a.enable(14),T.vertexUv2s&&a.enable(15),T.vertexUv3s&&a.enable(16),T.vertexTangents&&a.enable(17),T.anisotropy&&a.enable(18),T.alphaHash&&a.enable(19),T.batching&&a.enable(20),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),x.push(a.mask)}function U(x){let T=y[x.type],et;if(T){let j=dn[T];et=Rh.clone(j.uniforms)}else et=x.uniforms;return et}function R(x,T){let et;for(let j=0,P=h.length;j<P;j++){let G=h[j];if(G.cacheKey===T){et=G,++et.usedTimes;break}}return et===void 0&&(et=new kp(i,T,x,r),h.push(et)),et}function M(x){if(--x.usedTimes===0){let T=h.indexOf(x);h[T]=h[h.length-1],h.pop(),x.destroy()}}function I(x){l.remove(x)}function J(){l.dispose()}return{getParameters:u,getProgramCacheKey:E,getUniforms:U,acquireProgram:R,releaseProgram:M,releaseShaderCache:I,programs:h,dispose:J}}function Gp(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Wp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Tl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function wl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(p,f,m,_,y,d){let u=i[t];return u===void 0?(u={id:p.id,object:p,geometry:f,material:m,groupOrder:_,renderOrder:p.renderOrder,z:y,group:d},i[t]=u):(u.id=p.id,u.object=p,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=p.renderOrder,u.z=y,u.group=d),t++,u}function a(p,f,m,_,y,d){let u=o(p,f,m,_,y,d);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(p,f,m,_,y,d){let u=o(p,f,m,_,y,d);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(p,f){e.length>1&&e.sort(p||Wp),n.length>1&&n.sort(f||Tl),s.length>1&&s.sort(f||Tl)}function h(){for(let p=t,f=i.length;p<f;p++){let m=i[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Xp(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new wl,i.set(n,[o])):s>=r.length?(o=new wl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function qp(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new jt};break;case"SpotLight":e={position:new H,direction:new H,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function Yp(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Zp=0;function Jp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $p(i,t){let e=new qp,n=Yp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new H);let r=new H,o=new xe,a=new xe;function l(h,p){let f=0,m=0,_=0;for(let et=0;et<9;et++)s.probe[et].set(0,0,0);let y=0,d=0,u=0,E=0,g=0,A=0,U=0,R=0,M=0,I=0,J=0;h.sort(Jp);let x=p===!0?Math.PI:1;for(let et=0,j=h.length;et<j;et++){let P=h[et],G=P.color,V=P.intensity,q=P.distance,k=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=G.r*V*x,m+=G.g*V*x,_+=G.b*V*x;else if(P.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(P.sh.coefficients[N],V);J++}else if(P.isDirectionalLight){let N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity*x),P.castShadow){let X=P.shadow,Q=n.get(P);Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize=X.mapSize,s.directionalShadow[y]=Q,s.directionalShadowMap[y]=k,s.directionalShadowMatrix[y]=P.shadow.matrix,A++}s.directional[y]=N,y++}else if(P.isSpotLight){let N=e.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(G).multiplyScalar(V*x),N.distance=q,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,s.spot[u]=N;let X=P.shadow;if(P.map&&(s.spotLightMap[M]=P.map,M++,X.updateMatrices(P),P.castShadow&&I++),s.spotLightMatrix[u]=X.matrix,P.castShadow){let Q=n.get(P);Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize=X.mapSize,s.spotShadow[u]=Q,s.spotShadowMap[u]=k,R++}u++}else if(P.isRectAreaLight){let N=e.get(P);N.color.copy(G).multiplyScalar(V),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),s.rectArea[E]=N,E++}else if(P.isPointLight){let N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity*x),N.distance=P.distance,N.decay=P.decay,P.castShadow){let X=P.shadow,Q=n.get(P);Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize=X.mapSize,Q.shadowCameraNear=X.camera.near,Q.shadowCameraFar=X.camera.far,s.pointShadow[d]=Q,s.pointShadowMap[d]=k,s.pointShadowMatrix[d]=P.shadow.matrix,U++}s.point[d]=N,d++}else if(P.isHemisphereLight){let N=e.get(P);N.skyColor.copy(P.color).multiplyScalar(V*x),N.groundColor.copy(P.groundColor).multiplyScalar(V*x),s.hemi[g]=N,g++}}E>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ut.LTC_FLOAT_1,s.rectAreaLTC2=ut.LTC_FLOAT_2):(s.rectAreaLTC1=ut.LTC_HALF_1,s.rectAreaLTC2=ut.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ut.LTC_FLOAT_1,s.rectAreaLTC2=ut.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ut.LTC_HALF_1,s.rectAreaLTC2=ut.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=_;let T=s.hash;(T.directionalLength!==y||T.pointLength!==d||T.spotLength!==u||T.rectAreaLength!==E||T.hemiLength!==g||T.numDirectionalShadows!==A||T.numPointShadows!==U||T.numSpotShadows!==R||T.numSpotMaps!==M||T.numLightProbes!==J)&&(s.directional.length=y,s.spot.length=u,s.rectArea.length=E,s.point.length=d,s.hemi.length=g,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=R+M-I,s.spotLightMap.length=M,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=J,T.directionalLength=y,T.pointLength=d,T.spotLength=u,T.rectAreaLength=E,T.hemiLength=g,T.numDirectionalShadows=A,T.numPointShadows=U,T.numSpotShadows=R,T.numSpotMaps=M,T.numLightProbes=J,s.version=Zp++)}function c(h,p){let f=0,m=0,_=0,y=0,d=0,u=p.matrixWorldInverse;for(let E=0,g=h.length;E<g;E++){let A=h[E];if(A.isDirectionalLight){let U=s.directional[f];U.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(u),f++}else if(A.isSpotLight){let U=s.spot[_];U.position.setFromMatrixPosition(A.matrixWorld),U.position.applyMatrix4(u),U.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(u),_++}else if(A.isRectAreaLight){let U=s.rectArea[y];U.position.setFromMatrixPosition(A.matrixWorld),U.position.applyMatrix4(u),a.identity(),o.copy(A.matrixWorld),o.premultiply(u),a.extractRotation(o),U.halfWidth.set(A.width*.5,0,0),U.halfHeight.set(0,A.height*.5,0),U.halfWidth.applyMatrix4(a),U.halfHeight.applyMatrix4(a),y++}else if(A.isPointLight){let U=s.point[m];U.position.setFromMatrixPosition(A.matrixWorld),U.position.applyMatrix4(u),m++}else if(A.isHemisphereLight){let U=s.hemi[d];U.direction.setFromMatrixPosition(A.matrixWorld),U.direction.transformDirection(u),d++}}}return{setup:l,setupView:c,state:s}}function Al(i,t){let e=new $p(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(p){n.push(p)}function a(p){s.push(p)}function l(p){e.setup(n,p)}function c(p){e.setupView(n,p)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Kp(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new Al(i,t),e.set(r,[l])):o>=a.length?(l=new Al(i,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var cs=class extends Vn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},wa=class extends Vn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},jp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qp=`uniform sampler2D shadow_pass;
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
}`;function tm(i,t,e){let n=new ls,s=new Wt,r=new Wt,o=new Re,a=new cs({depthPacking:Xa}),l=new wa,c={},h=e.maxTextureSize,p={[zn]:qe,[qe]:zn,[je]:je},f=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:jp,fragmentShader:Qp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let _=new ci;_.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Fe(_,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mr;let u=this.type;this.render=function(R,M,I){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||R.length===0)return;let J=i.getRenderTarget(),x=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),et=i.state;et.setBlending(Fn),et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);let j=u!==Sn&&this.type===Sn,P=u===Sn&&this.type!==Sn;for(let G=0,V=R.length;G<V;G++){let q=R[G],k=q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let N=k.getFrameExtents();if(s.multiply(N),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/N.x),s.x=r.x*N.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/N.y),s.y=r.y*N.y,k.mapSize.y=r.y)),k.map===null||j===!0||P===!0){let Q=this.type!==Sn?{minFilter:Le,magFilter:Le}:{};k.map!==null&&k.map.dispose(),k.map=new wn(s.x,s.y,Q),k.map.texture.name=q.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let X=k.getViewportCount();for(let Q=0;Q<X;Q++){let at=k.getViewport(Q);o.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),et.viewport(o),k.updateMatrices(q,Q),n=k.getFrustum(),A(M,I,k.camera,q,this.type)}k.isPointLightShadow!==!0&&this.type===Sn&&E(k,I),k.needsUpdate=!1}u=this.type,d.needsUpdate=!1,i.setRenderTarget(J,x,T)};function E(R,M){let I=t.update(y);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new wn(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(M,null,I,f,y,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(M,null,I,m,y,null)}function g(R,M,I,J){let x=null,T=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)x=T;else if(x=I.isPointLight===!0?l:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){let et=x.uuid,j=M.uuid,P=c[et];P===void 0&&(P={},c[et]=P);let G=P[j];G===void 0&&(G=x.clone(),P[j]=G,M.addEventListener("dispose",U)),x=G}if(x.visible=M.visible,x.wireframe=M.wireframe,J===Sn?x.side=M.shadowSide!==null?M.shadowSide:M.side:x.side=M.shadowSide!==null?M.shadowSide:p[M.side],x.alphaMap=M.alphaMap,x.alphaTest=M.alphaTest,x.map=M.map,x.clipShadows=M.clipShadows,x.clippingPlanes=M.clippingPlanes,x.clipIntersection=M.clipIntersection,x.displacementMap=M.displacementMap,x.displacementScale=M.displacementScale,x.displacementBias=M.displacementBias,x.wireframeLinewidth=M.wireframeLinewidth,x.linewidth=M.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let et=i.properties.get(x);et.light=I}return x}function A(R,M,I,J,x){if(R.visible===!1)return;if(R.layers.test(M.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===Sn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);let j=t.update(R),P=R.material;if(Array.isArray(P)){let G=j.groups;for(let V=0,q=G.length;V<q;V++){let k=G[V],N=P[k.materialIndex];if(N&&N.visible){let X=g(R,N,J,x);R.onBeforeShadow(i,R,M,I,j,X,k),i.renderBufferDirect(I,null,j,X,R,k),R.onAfterShadow(i,R,M,I,j,X,k)}}}else if(P.visible){let G=g(R,P,J,x);R.onBeforeShadow(i,R,M,I,j,G,null),i.renderBufferDirect(I,null,j,G,R,null),R.onAfterShadow(i,R,M,I,j,G,null)}}let et=R.children;for(let j=0,P=et.length;j<P;j++)A(et[j],M,I,J,x)}function U(R){R.target.removeEventListener("dispose",U);for(let I in c){let J=c[I],x=R.target.uuid;x in J&&(J[x].dispose(),delete J[x])}}}function em(i,t,e){let n=e.isWebGL2;function s(){let D=!1,ft=new Re,W=null,lt=new Re(0,0,0,0);return{setMask:function(pt){W!==pt&&!D&&(i.colorMask(pt,pt,pt,pt),W=pt)},setLocked:function(pt){D=pt},setClear:function(pt,Kt,ie,he,_e){_e===!0&&(pt*=he,Kt*=he,ie*=he),ft.set(pt,Kt,ie,he),lt.equals(ft)===!1&&(i.clearColor(pt,Kt,ie,he),lt.copy(ft))},reset:function(){D=!1,W=null,lt.set(-1,0,0,0)}}}function r(){let D=!1,ft=null,W=null,lt=null;return{setTest:function(pt){pt?_t(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(pt){ft!==pt&&!D&&(i.depthMask(pt),ft=pt)},setFunc:function(pt){if(W!==pt){switch(pt){case Ic:i.depthFunc(i.NEVER);break;case Lc:i.depthFunc(i.ALWAYS);break;case Dc:i.depthFunc(i.LESS);break;case Gs:i.depthFunc(i.LEQUAL);break;case Uc:i.depthFunc(i.EQUAL);break;case Nc:i.depthFunc(i.GEQUAL);break;case Fc:i.depthFunc(i.GREATER);break;case Oc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}W=pt}},setLocked:function(pt){D=pt},setClear:function(pt){lt!==pt&&(i.clearDepth(pt),lt=pt)},reset:function(){D=!1,ft=null,W=null,lt=null}}}function o(){let D=!1,ft=null,W=null,lt=null,pt=null,Kt=null,ie=null,he=null,_e=null;return{setTest:function(ee){D||(ee?_t(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(ee){ft!==ee&&!D&&(i.stencilMask(ee),ft=ee)},setFunc:function(ee,Te,Ye){(W!==ee||lt!==Te||pt!==Ye)&&(i.stencilFunc(ee,Te,Ye),W=ee,lt=Te,pt=Ye)},setOp:function(ee,Te,Ye){(Kt!==ee||ie!==Te||he!==Ye)&&(i.stencilOp(ee,Te,Ye),Kt=ee,ie=Te,he=Ye)},setLocked:function(ee){D=ee},setClear:function(ee){_e!==ee&&(i.clearStencil(ee),_e=ee)},reset:function(){D=!1,ft=null,W=null,lt=null,pt=null,Kt=null,ie=null,he=null,_e=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,p=new WeakMap,f={},m={},_=new WeakMap,y=[],d=null,u=!1,E=null,g=null,A=null,U=null,R=null,M=null,I=null,J=new jt(0,0,0),x=0,T=!1,et=null,j=null,P=null,G=null,V=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,N=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=N>=1):X.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=N>=2);let Q=null,at={},It=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),it=new Re().fromArray(It),ht=new Re().fromArray(Y);function Lt(D,ft,W,lt){let pt=new Uint8Array(4),Kt=i.createTexture();i.bindTexture(D,Kt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ie=0;ie<W;ie++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(ft,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(ft+ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return Kt}let bt={};bt[i.TEXTURE_2D]=Lt(i.TEXTURE_2D,i.TEXTURE_2D,1),bt[i.TEXTURE_CUBE_MAP]=Lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(bt[i.TEXTURE_2D_ARRAY]=Lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),bt[i.TEXTURE_3D]=Lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),_t(i.DEPTH_TEST),l.setFunc(Gs),Gt(!1),Zt(io),_t(i.CULL_FACE),Et(Fn);function _t(D){f[D]!==!0&&(i.enable(D),f[D]=!0)}function Pt(D){f[D]!==!1&&(i.disable(D),f[D]=!1)}function vt(D,ft){return m[D]!==ft?(i.bindFramebuffer(D,ft),m[D]=ft,n&&(D===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ft),D===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ft)),!0):!1}function L(D,ft){let W=y,lt=!1;if(D){W=_.get(ft),W===void 0&&(W=[],_.set(ft,W));let pt=D.textures;if(W.length!==pt.length||W[0]!==i.COLOR_ATTACHMENT0){for(let Kt=0,ie=pt.length;Kt<ie;Kt++)W[Kt]=i.COLOR_ATTACHMENT0+Kt;W.length=pt.length,lt=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,lt=!0);if(lt)if(e.isWebGL2)i.drawBuffers(W);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(W);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function se(D){return d!==D?(i.useProgram(D),d=D,!0):!1}let xt={[ii]:i.FUNC_ADD,[gc]:i.FUNC_SUBTRACT,[_c]:i.FUNC_REVERSE_SUBTRACT};if(n)xt[oo]=i.MIN,xt[lo]=i.MAX;else{let D=t.get("EXT_blend_minmax");D!==null&&(xt[oo]=D.MIN_EXT,xt[lo]=D.MAX_EXT)}let zt={[xc]:i.ZERO,[vc]:i.ONE,[yc]:i.SRC_COLOR,[la]:i.SRC_ALPHA,[wc]:i.SRC_ALPHA_SATURATE,[Ec]:i.DST_COLOR,[Sc]:i.DST_ALPHA,[Mc]:i.ONE_MINUS_SRC_COLOR,[ca]:i.ONE_MINUS_SRC_ALPHA,[Tc]:i.ONE_MINUS_DST_COLOR,[bc]:i.ONE_MINUS_DST_ALPHA,[Ac]:i.CONSTANT_COLOR,[Rc]:i.ONE_MINUS_CONSTANT_COLOR,[Cc]:i.CONSTANT_ALPHA,[Pc]:i.ONE_MINUS_CONSTANT_ALPHA};function Et(D,ft,W,lt,pt,Kt,ie,he,_e,ee){if(D===Fn){u===!0&&(Pt(i.BLEND),u=!1);return}if(u===!1&&(_t(i.BLEND),u=!0),D!==mc){if(D!==E||ee!==T){if((g!==ii||R!==ii)&&(i.blendEquation(i.FUNC_ADD),g=ii,R=ii),ee)switch(D){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case so:i.blendFunc(i.ONE,i.ONE);break;case ro:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ao:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case so:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ro:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ao:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}A=null,U=null,M=null,I=null,J.set(0,0,0),x=0,E=D,T=ee}return}pt=pt||ft,Kt=Kt||W,ie=ie||lt,(ft!==g||pt!==R)&&(i.blendEquationSeparate(xt[ft],xt[pt]),g=ft,R=pt),(W!==A||lt!==U||Kt!==M||ie!==I)&&(i.blendFuncSeparate(zt[W],zt[lt],zt[Kt],zt[ie]),A=W,U=lt,M=Kt,I=ie),(he.equals(J)===!1||_e!==x)&&(i.blendColor(he.r,he.g,he.b,_e),J.copy(he),x=_e),E=D,T=!1}function Vt(D,ft){D.side===je?Pt(i.CULL_FACE):_t(i.CULL_FACE);let W=D.side===qe;ft&&(W=!W),Gt(W),D.blending===Fi&&D.transparent===!1?Et(Fn):Et(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);let lt=D.stencilWrite;c.setTest(lt),lt&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),w(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(D){et!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),et=D)}function Zt(D){D!==dc?(_t(i.CULL_FACE),D!==j&&(D===io?i.cullFace(i.BACK):D===fc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),j=D}function me(D){D!==P&&(k&&i.lineWidth(D),P=D)}function w(D,ft,W){D?(_t(i.POLYGON_OFFSET_FILL),(G!==ft||V!==W)&&(i.polygonOffset(ft,W),G=ft,V=W)):Pt(i.POLYGON_OFFSET_FILL)}function v(D){D?_t(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function $(D){D===void 0&&(D=i.TEXTURE0+q-1),Q!==D&&(i.activeTexture(D),Q=D)}function nt(D,ft,W){W===void 0&&(Q===null?W=i.TEXTURE0+q-1:W=Q);let lt=at[W];lt===void 0&&(lt={type:void 0,texture:void 0},at[W]=lt),(lt.type!==D||lt.texture!==ft)&&(Q!==W&&(i.activeTexture(W),Q=W),i.bindTexture(D,ft||bt[D]),lt.type=D,lt.texture=ft)}function rt(){let D=at[Q];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function st(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function kt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(D){it.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),it.copy(D))}function yt(D){ht.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ht.copy(D))}function $t(D,ft){let W=p.get(ft);W===void 0&&(W=new WeakMap,p.set(ft,W));let lt=W.get(D);lt===void 0&&(lt=i.getUniformBlockIndex(ft,D.name),W.set(D,lt))}function Rt(D,ft){let lt=p.get(ft).get(D);h.get(ft)!==lt&&(i.uniformBlockBinding(ft,lt,D.__bindingPointIndex),h.set(ft,lt))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},Q=null,at={},m={},_=new WeakMap,y=[],d=null,u=!1,E=null,g=null,A=null,U=null,R=null,M=null,I=null,J=new jt(0,0,0),x=0,T=!1,et=null,j=null,P=null,G=null,V=null,it.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:_t,disable:Pt,bindFramebuffer:vt,drawBuffers:L,useProgram:se,setBlending:Et,setMaterial:Vt,setFlipSided:Gt,setCullFace:Zt,setLineWidth:me,setPolygonOffset:w,setScissorTest:v,activeTexture:$,bindTexture:nt,unbindTexture:rt,compressedTexImage2D:st,compressedTexImage3D:kt,texImage2D:Xt,texImage3D:At,updateUBOMapping:$t,uniformBlockBinding:Rt,texStorage2D:ot,texStorage3D:de,texSubImage2D:mt,texSubImage3D:ct,compressedTexSubImage2D:dt,compressedTexSubImage3D:Nt,scissor:Mt,viewport:yt,reset:Qt}}function nm(i,t,e,n,s,r,o){let a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Wt,p=new WeakMap,f,m=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(w,v){return _?new OffscreenCanvas(w,v):$s("canvas")}function d(w,v,$,nt){let rt=1,st=me(w);if((st.width>nt||st.height>nt)&&(rt=nt/Math.max(st.width,st.height)),rt<1||v===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let kt=v?ma:Math.floor,mt=kt(rt*st.width),ct=kt(rt*st.height);f===void 0&&(f=y(mt,ct));let dt=$?y(mt,ct):f;return dt.width=mt,dt.height=ct,dt.getContext("2d").drawImage(w,0,0,mt,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+mt+"x"+ct+")."),dt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),w;return w}function u(w){let v=me(w);return Vo(v.width)&&Vo(v.height)}function E(w){return a?!1:w.wrapS!==an||w.wrapT!==an||w.minFilter!==Le&&w.minFilter!==Ge}function g(w,v){return w.generateMipmaps&&v&&w.minFilter!==Le&&w.minFilter!==Ge}function A(w){i.generateMipmap(w)}function U(w,v,$,nt,rt=!1){if(a===!1)return v;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let st=v;if(v===i.RED&&($===i.FLOAT&&(st=i.R32F),$===i.HALF_FLOAT&&(st=i.R16F),$===i.UNSIGNED_BYTE&&(st=i.R8)),v===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(st=i.R8UI),$===i.UNSIGNED_SHORT&&(st=i.R16UI),$===i.UNSIGNED_INT&&(st=i.R32UI),$===i.BYTE&&(st=i.R8I),$===i.SHORT&&(st=i.R16I),$===i.INT&&(st=i.R32I)),v===i.RG&&($===i.FLOAT&&(st=i.RG32F),$===i.HALF_FLOAT&&(st=i.RG16F),$===i.UNSIGNED_BYTE&&(st=i.RG8)),v===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(st=i.RG8UI),$===i.UNSIGNED_SHORT&&(st=i.RG16UI),$===i.UNSIGNED_INT&&(st=i.RG32UI),$===i.BYTE&&(st=i.RG8I),$===i.SHORT&&(st=i.RG16I),$===i.INT&&(st=i.RG32I)),v===i.RGBA){let kt=rt?qs:oe.getTransfer(nt);$===i.FLOAT&&(st=i.RGBA32F),$===i.HALF_FLOAT&&(st=i.RGBA16F),$===i.UNSIGNED_BYTE&&(st=kt===ue?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function R(w,v,$){return g(w,$)===!0||w.isFramebufferTexture&&w.minFilter!==Le&&w.minFilter!==Ge?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function M(w){return w===Le||w===co||w===ji?i.NEAREST:i.LINEAR}function I(w){let v=w.target;v.removeEventListener("dispose",I),x(v),v.isVideoTexture&&p.delete(v)}function J(w){let v=w.target;v.removeEventListener("dispose",J),et(v)}function x(w){let v=n.get(w);if(v.__webglInit===void 0)return;let $=w.source,nt=m.get($);if(nt){let rt=nt[v.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&T(w),Object.keys(nt).length===0&&m.delete($)}n.remove(w)}function T(w){let v=n.get(w);i.deleteTexture(v.__webglTexture);let $=w.source,nt=m.get($);delete nt[v.__cacheKey],o.memory.textures--}function et(w){let v=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(v.__webglFramebuffer[nt]))for(let rt=0;rt<v.__webglFramebuffer[nt].length;rt++)i.deleteFramebuffer(v.__webglFramebuffer[nt][rt]);else i.deleteFramebuffer(v.__webglFramebuffer[nt]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[nt])}else{if(Array.isArray(v.__webglFramebuffer))for(let nt=0;nt<v.__webglFramebuffer.length;nt++)i.deleteFramebuffer(v.__webglFramebuffer[nt]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let nt=0;nt<v.__webglColorRenderbuffer.length;nt++)v.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[nt]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let $=w.textures;for(let nt=0,rt=$.length;nt<rt;nt++){let st=n.get($[nt]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),o.memory.textures--),n.remove($[nt])}n.remove(w)}let j=0;function P(){j=0}function G(){let w=j;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),j+=1,w}function V(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function q(w,v){let $=n.get(w);if(w.isVideoTexture&&Gt(w),w.isRenderTargetTexture===!1&&w.version>0&&$.__version!==w.version){let nt=w.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht($,w,v);return}}e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+v)}function k(w,v){let $=n.get(w);if(w.version>0&&$.__version!==w.version){ht($,w,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+v)}function N(w,v){let $=n.get(w);if(w.version>0&&$.__version!==w.version){ht($,w,v);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+v)}function X(w,v){let $=n.get(w);if(w.version>0&&$.__version!==w.version){Lt($,w,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+v)}let Q={[Hi]:i.REPEAT,[an]:i.CLAMP_TO_EDGE,[da]:i.MIRRORED_REPEAT},at={[Le]:i.NEAREST,[co]:i.NEAREST_MIPMAP_NEAREST,[ji]:i.NEAREST_MIPMAP_LINEAR,[Ge]:i.LINEAR,[Rr]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},It={[ih]:i.NEVER,[ch]:i.ALWAYS,[sh]:i.LESS,[Vl]:i.LEQUAL,[rh]:i.EQUAL,[lh]:i.GEQUAL,[ah]:i.GREATER,[oh]:i.NOTEQUAL};function Y(w,v,$){if(v.type===bn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ge||v.magFilter===Rr||v.magFilter===ji||v.magFilter===ri||v.minFilter===Ge||v.minFilter===Rr||v.minFilter===ji||v.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),$?(i.texParameteri(w,i.TEXTURE_WRAP_S,Q[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Q[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Q[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,at[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,at[v.minFilter])):(i.texParameteri(w,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(w,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==an||v.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,i.TEXTURE_MAG_FILTER,M(v.magFilter)),i.texParameteri(w,i.TEXTURE_MIN_FILTER,M(v.minFilter)),v.minFilter!==Le&&v.minFilter!==Ge&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,It[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Le||v.minFilter!==ji&&v.minFilter!==ri||v.type===bn&&t.has("OES_texture_float_linear")===!1||a===!1&&v.type===rs&&t.has("OES_texture_half_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let nt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function it(w,v){let $=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",I));let nt=v.source,rt=m.get(nt);rt===void 0&&(rt={},m.set(nt,rt));let st=V(v);if(st!==w.__cacheKey){rt[st]===void 0&&(rt[st]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),rt[st].usedTimes++;let kt=rt[w.__cacheKey];kt!==void 0&&(rt[w.__cacheKey].usedTimes--,kt.usedTimes===0&&T(v)),w.__cacheKey=st,w.__webglTexture=rt[st].texture}return $}function ht(w,v,$){let nt=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(nt=i.TEXTURE_3D);let rt=it(w,v),st=v.source;e.bindTexture(nt,w.__webglTexture,i.TEXTURE0+$);let kt=n.get(st);if(st.version!==kt.__version||rt===!0){e.activeTexture(i.TEXTURE0+$);let mt=oe.getPrimaries(oe.workingColorSpace),ct=v.colorSpace===Un?null:oe.getPrimaries(v.colorSpace),dt=v.colorSpace===Un||mt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Nt=E(v)&&u(v.image)===!1,ot=d(v.image,Nt,!1,s.maxTextureSize);ot=Zt(v,ot);let de=u(ot)||a,Xt=r.convert(v.format,v.colorSpace),At=r.convert(v.type),Mt=U(v.internalFormat,Xt,At,v.colorSpace,v.isVideoTexture);Y(nt,v,de);let yt,$t=v.mipmaps,Rt=a&&v.isVideoTexture!==!0&&Mt!==kl,Qt=kt.__version===void 0||rt===!0,D=st.dataReady,ft=R(v,ot,de);if(v.isDepthTexture)Mt=i.DEPTH_COMPONENT,a?v.type===bn?Mt=i.DEPTH_COMPONENT32F:v.type===Nn?Mt=i.DEPTH_COMPONENT24:v.type===ai?Mt=i.DEPTH24_STENCIL8:Mt=i.DEPTH_COMPONENT16:v.type===bn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===oi&&Mt===i.DEPTH_COMPONENT&&v.type!==Wa&&v.type!==Nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Nn,At=r.convert(v.type)),v.format===Vi&&Mt===i.DEPTH_COMPONENT&&(Mt=i.DEPTH_STENCIL,v.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=ai,At=r.convert(v.type))),Qt&&(Rt?e.texStorage2D(i.TEXTURE_2D,1,Mt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Mt,ot.width,ot.height,0,Xt,At,null));else if(v.isDataTexture)if($t.length>0&&de){Rt&&Qt&&e.texStorage2D(i.TEXTURE_2D,ft,Mt,$t[0].width,$t[0].height);for(let W=0,lt=$t.length;W<lt;W++)yt=$t[W],Rt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,yt.width,yt.height,Xt,At,yt.data):e.texImage2D(i.TEXTURE_2D,W,Mt,yt.width,yt.height,0,Xt,At,yt.data);v.generateMipmaps=!1}else Rt?(Qt&&e.texStorage2D(i.TEXTURE_2D,ft,Mt,ot.width,ot.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,Xt,At,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Mt,ot.width,ot.height,0,Xt,At,ot.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Rt&&Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Mt,$t[0].width,$t[0].height,ot.depth);for(let W=0,lt=$t.length;W<lt;W++)yt=$t[W],v.format!==on?Xt!==null?Rt?D&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,yt.width,yt.height,ot.depth,Xt,yt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Mt,yt.width,yt.height,ot.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,yt.width,yt.height,ot.depth,Xt,At,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Mt,yt.width,yt.height,ot.depth,0,Xt,At,yt.data)}else{Rt&&Qt&&e.texStorage2D(i.TEXTURE_2D,ft,Mt,$t[0].width,$t[0].height);for(let W=0,lt=$t.length;W<lt;W++)yt=$t[W],v.format!==on?Xt!==null?Rt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,yt.width,yt.height,Xt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Mt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,yt.width,yt.height,Xt,At,yt.data):e.texImage2D(i.TEXTURE_2D,W,Mt,yt.width,yt.height,0,Xt,At,yt.data)}else if(v.isDataArrayTexture)Rt?(Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Mt,ot.width,ot.height,ot.depth),D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Xt,At,ot.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,ot.width,ot.height,ot.depth,0,Xt,At,ot.data);else if(v.isData3DTexture)Rt?(Qt&&e.texStorage3D(i.TEXTURE_3D,ft,Mt,ot.width,ot.height,ot.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Xt,At,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,ot.width,ot.height,ot.depth,0,Xt,At,ot.data);else if(v.isFramebufferTexture){if(Qt)if(Rt)e.texStorage2D(i.TEXTURE_2D,ft,Mt,ot.width,ot.height);else{let W=ot.width,lt=ot.height;for(let pt=0;pt<ft;pt++)e.texImage2D(i.TEXTURE_2D,pt,Mt,W,lt,0,Xt,At,null),W>>=1,lt>>=1}}else if($t.length>0&&de){if(Rt&&Qt){let W=me($t[0]);e.texStorage2D(i.TEXTURE_2D,ft,Mt,W.width,W.height)}for(let W=0,lt=$t.length;W<lt;W++)yt=$t[W],Rt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Xt,At,yt):e.texImage2D(i.TEXTURE_2D,W,Mt,Xt,At,yt);v.generateMipmaps=!1}else if(Rt){if(Qt){let W=me(ot);e.texStorage2D(i.TEXTURE_2D,ft,Mt,W.width,W.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Xt,At,ot)}else e.texImage2D(i.TEXTURE_2D,0,Mt,Xt,At,ot);g(v,de)&&A(nt),kt.__version=st.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Lt(w,v,$){if(v.image.length!==6)return;let nt=it(w,v),rt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+$);let st=n.get(rt);if(rt.version!==st.__version||nt===!0){e.activeTexture(i.TEXTURE0+$);let kt=oe.getPrimaries(oe.workingColorSpace),mt=v.colorSpace===Un?null:oe.getPrimaries(v.colorSpace),ct=v.colorSpace===Un||kt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let dt=v.isCompressedTexture||v.image[0].isCompressedTexture,Nt=v.image[0]&&v.image[0].isDataTexture,ot=[];for(let W=0;W<6;W++)!dt&&!Nt?ot[W]=d(v.image[W],!1,!0,s.maxCubemapSize):ot[W]=Nt?v.image[W].image:v.image[W],ot[W]=Zt(v,ot[W]);let de=ot[0],Xt=u(de)||a,At=r.convert(v.format,v.colorSpace),Mt=r.convert(v.type),yt=U(v.internalFormat,At,Mt,v.colorSpace),$t=a&&v.isVideoTexture!==!0,Rt=st.__version===void 0||nt===!0,Qt=rt.dataReady,D=R(v,de,Xt);Y(i.TEXTURE_CUBE_MAP,v,Xt);let ft;if(dt){$t&&Rt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,D,yt,de.width,de.height);for(let W=0;W<6;W++){ft=ot[W].mipmaps;for(let lt=0;lt<ft.length;lt++){let pt=ft[lt];v.format!==on?At!==null?$t?Qt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,lt,0,0,pt.width,pt.height,At,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,lt,yt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?Qt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,lt,0,0,pt.width,pt.height,At,Mt,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,lt,yt,pt.width,pt.height,0,At,Mt,pt.data)}}}else{if(ft=v.mipmaps,$t&&Rt){ft.length>0&&D++;let W=me(ot[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,D,yt,W.width,W.height)}for(let W=0;W<6;W++)if(Nt){$t?Qt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,ot[W].width,ot[W].height,At,Mt,ot[W].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,yt,ot[W].width,ot[W].height,0,At,Mt,ot[W].data);for(let lt=0;lt<ft.length;lt++){let Kt=ft[lt].image[W].image;$t?Qt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,lt+1,0,0,Kt.width,Kt.height,At,Mt,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,lt+1,yt,Kt.width,Kt.height,0,At,Mt,Kt.data)}}else{$t?Qt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,At,Mt,ot[W]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,yt,At,Mt,ot[W]);for(let lt=0;lt<ft.length;lt++){let pt=ft[lt];$t?Qt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,lt+1,0,0,At,Mt,pt.image[W]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,lt+1,yt,At,Mt,pt.image[W])}}}g(v,Xt)&&A(i.TEXTURE_CUBE_MAP),st.__version=rt.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function bt(w,v,$,nt,rt,st){let kt=r.convert($.format,$.colorSpace),mt=r.convert($.type),ct=U($.internalFormat,kt,mt,$.colorSpace);if(!n.get(v).__hasExternalTextures){let Nt=Math.max(1,v.width>>st),ot=Math.max(1,v.height>>st);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,st,ct,Nt,ot,v.depth,0,kt,mt,null):e.texImage2D(rt,st,ct,Nt,ot,0,kt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),Vt(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,rt,n.get($).__webglTexture,0,Et(v)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,rt,n.get($).__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(w,v,$){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer&&!v.stencilBuffer){let nt=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if($||Vt(v)){let rt=v.depthTexture;rt&&rt.isDepthTexture&&(rt.type===bn?nt=i.DEPTH_COMPONENT32F:rt.type===Nn&&(nt=i.DEPTH_COMPONENT24));let st=Et(v);Vt(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,nt,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,st,nt,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,nt,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(v.depthBuffer&&v.stencilBuffer){let nt=Et(v);$&&Vt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,i.DEPTH24_STENCIL8,v.width,v.height):Vt(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{let nt=v.textures;for(let rt=0;rt<nt.length;rt++){let st=nt[rt],kt=r.convert(st.format,st.colorSpace),mt=r.convert(st.type),ct=U(st.internalFormat,kt,mt,st.colorSpace),dt=Et(v);$&&Vt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,ct,v.width,v.height):Vt(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,ct,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ct,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);let nt=n.get(v.depthTexture).__webglTexture,rt=Et(v);if(v.depthTexture.format===oi)Vt(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(v.depthTexture.format===Vi)Vt(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function vt(w){let v=n.get(w),$=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Pt(v.__webglFramebuffer,w)}else if($){v.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[nt]),v.__webglDepthbuffer[nt]=i.createRenderbuffer(),_t(v.__webglDepthbuffer[nt],w,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),_t(v.__webglDepthbuffer,w,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function L(w,v,$){let nt=n.get(w);v!==void 0&&bt(nt.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&vt(w)}function se(w){let v=w.texture,$=n.get(w),nt=n.get(v);w.addEventListener("dispose",J);let rt=w.textures,st=w.isWebGLCubeRenderTarget===!0,kt=rt.length>1,mt=u(w)||a;if(kt||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=v.version,o.memory.textures++),st){$.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(a&&v.mipmaps&&v.mipmaps.length>0){$.__webglFramebuffer[ct]=[];for(let dt=0;dt<v.mipmaps.length;dt++)$.__webglFramebuffer[ct][dt]=i.createFramebuffer()}else $.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){$.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)$.__webglFramebuffer[ct]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(kt)if(s.drawBuffers)for(let ct=0,dt=rt.length;ct<dt;ct++){let Nt=n.get(rt[ct]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=i.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&Vt(w)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ct=0;ct<rt.length;ct++){let dt=rt[ct];$.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[ct]);let Nt=r.convert(dt.format,dt.colorSpace),ot=r.convert(dt.type),de=U(dt.internalFormat,Nt,ot,dt.colorSpace,w.isXRRenderTarget===!0),Xt=Et(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,de,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,$.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),_t($.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),Y(i.TEXTURE_CUBE_MAP,v,mt);for(let ct=0;ct<6;ct++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)bt($.__webglFramebuffer[ct][dt],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,dt);else bt($.__webglFramebuffer[ct],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);g(v,mt)&&A(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(kt){for(let ct=0,dt=rt.length;ct<dt;ct++){let Nt=rt[ct],ot=n.get(Nt);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),Y(i.TEXTURE_2D,Nt,mt),bt($.__webglFramebuffer,w,Nt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),g(Nt,mt)&&A(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?ct=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,nt.__webglTexture),Y(ct,v,mt),a&&v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)bt($.__webglFramebuffer[dt],w,v,i.COLOR_ATTACHMENT0,ct,dt);else bt($.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,ct,0);g(v,mt)&&A(ct),e.unbindTexture()}w.depthBuffer&&vt(w)}function xt(w){let v=u(w)||a,$=w.textures;for(let nt=0,rt=$.length;nt<rt;nt++){let st=$[nt];if(g(st,v)){let kt=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,mt=n.get(st).__webglTexture;e.bindTexture(kt,mt),A(kt),e.unbindTexture()}}}function zt(w){if(a&&w.samples>0&&Vt(w)===!1){let v=w.textures,$=w.width,nt=w.height,rt=i.COLOR_BUFFER_BIT,st=[],kt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(w),ct=v.length>1;if(ct)for(let dt=0;dt<v.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let dt=0;dt<v.length;dt++){st.push(i.COLOR_ATTACHMENT0+dt),w.depthBuffer&&st.push(kt);let Nt=mt.__ignoreDepthValues!==void 0?mt.__ignoreDepthValues:!1;if(Nt===!1&&(w.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),ct&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[dt]),Nt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[kt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[kt])),ct){let ot=n.get(v[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,$,nt,0,0,$,nt,rt,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let dt=0;dt<v.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[dt]);let Nt=n.get(v[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}}function Et(w){return Math.min(s.maxSamples,w.samples)}function Vt(w){let v=n.get(w);return a&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Gt(w){let v=o.render.frame;p.get(w)!==v&&(p.set(w,v),w.update())}function Zt(w,v){let $=w.colorSpace,nt=w.format,rt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===fa||$!==Xn&&$!==Un&&(oe.getTransfer($)===ue?a===!1?t.has("EXT_sRGB")===!0&&nt===on?(w.format=fa,w.minFilter=Ge,w.generateMipmaps=!1):v=Ks.sRGBToLinear(v):(nt!==on||rt!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),v}function me(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=G,this.resetTextureUnits=P,this.setTexture2D=q,this.setTexture2DArray=k,this.setTexture3D=N,this.setTextureCube=X,this.rebindTextures=L,this.setupRenderTarget=se,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Vt}function im(i,t,e){let n=e.isWebGL2;function s(r,o=Un){let a,l=oe.getTransfer(o);if(r===Bn)return i.UNSIGNED_BYTE;if(r===Nl)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Fl)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Yc)return i.BYTE;if(r===Zc)return i.SHORT;if(r===Wa)return i.UNSIGNED_SHORT;if(r===Ul)return i.INT;if(r===Nn)return i.UNSIGNED_INT;if(r===bn)return i.FLOAT;if(r===rs)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Jc)return i.ALPHA;if(r===on)return i.RGBA;if(r===$c)return i.LUMINANCE;if(r===Kc)return i.LUMINANCE_ALPHA;if(r===oi)return i.DEPTH_COMPONENT;if(r===Vi)return i.DEPTH_STENCIL;if(r===fa)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===jc)return i.RED;if(r===Ol)return i.RED_INTEGER;if(r===Qc)return i.RG;if(r===Bl)return i.RG_INTEGER;if(r===zl)return i.RGBA_INTEGER;if(r===Cr||r===Pr||r===Ir||r===Lr)if(l===ue)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Cr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ir)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Cr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ir)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ho||r===uo||r===fo||r===po)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ho)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===uo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===fo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===po)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===kl)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===mo||r===go)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===mo)return l===ue?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===go)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===_o||r===xo||r===vo||r===yo||r===Mo||r===So||r===bo||r===Eo||r===To||r===wo||r===Ao||r===Ro||r===Co||r===Po)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===_o)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xo)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vo)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yo)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Mo)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===So)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bo)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Eo)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===To)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wo)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ao)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ro)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Co)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Po)return l===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dr||r===Io||r===Lo)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Dr)return l===ue?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Io)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===th||r===Do||r===Uo||r===No)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Dr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Do)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Uo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===No)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ai?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Aa=class extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ni=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},sm={type:"move"},ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let d=e.getJointPose(y,n),u=this._getHandJoint(c,y);d!==null&&(u.matrix.fromArray(d.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=d.radius),u.visible=d!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ni;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},rm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,am=`
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

}`,Ra=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Oe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){let n=e.cameras[0].viewport,s=new pn({extensions:{fragDepth:!0},vertexShader:rm,fragmentShader:am,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Fe(new Wn(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}},Ca=class extends kn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,p=null,f=null,m=null,_=null,y=new Ra,d=e.getContextAttributes(),u=null,E=null,g=[],A=[],U=new Wt,R=null,M=new ke;M.layers.enable(1),M.viewport=new Re;let I=new ke;I.layers.enable(2),I.viewport=new Re;let J=[M,I],x=new Aa;x.layers.enable(1),x.layers.enable(2);let T=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let it=g[Y];return it===void 0&&(it=new ss,g[Y]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Y){let it=g[Y];return it===void 0&&(it=new ss,g[Y]=it),it.getGripSpace()},this.getHand=function(Y){let it=g[Y];return it===void 0&&(it=new ss,g[Y]=it),it.getHandSpace()};function j(Y){let it=A.indexOf(Y.inputSource);if(it===-1)return;let ht=g[it];ht!==void 0&&(ht.update(Y.inputSource,Y.frame,c||o),ht.dispatchEvent({type:Y.type,data:Y.inputSource}))}function P(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",G);for(let Y=0;Y<g.length;Y++){let it=A[Y];it!==null&&(A[Y]=null,g[Y].disconnect(it))}T=null,et=null,y.reset(),t.setRenderTarget(u),m=null,f=null,p=null,s=null,E=null,It.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",P),s.addEventListener("inputsourceschange",G),d.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let it={antialias:s.renderState.layers===void 0?d.antialias:!0,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new wn(m.framebufferWidth,m.framebufferHeight,{format:on,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let it=null,ht=null,Lt=null;d.depth&&(Lt=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=d.stencil?Vi:oi,ht=d.stencil?ai:Nn);let bt={colorFormat:e.RGBA8,depthFormat:Lt,scaleFactor:r};p=new XRWebGLBinding(s,e),f=p.createProjectionLayer(bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new wn(f.textureWidth,f.textureHeight,{format:on,type:Bn,depthTexture:new lr(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0});let _t=t.properties.get(E);_t.__ignoreDepthValues=f.ignoreDepthValues}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),It.setContext(s),It.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function G(Y){for(let it=0;it<Y.removed.length;it++){let ht=Y.removed[it],Lt=A.indexOf(ht);Lt>=0&&(A[Lt]=null,g[Lt].disconnect(ht))}for(let it=0;it<Y.added.length;it++){let ht=Y.added[it],Lt=A.indexOf(ht);if(Lt===-1){for(let _t=0;_t<g.length;_t++)if(_t>=A.length){A.push(ht),Lt=_t;break}else if(A[_t]===null){A[_t]=ht,Lt=_t;break}if(Lt===-1)break}let bt=g[Lt];bt&&bt.connect(ht)}}let V=new H,q=new H;function k(Y,it,ht){V.setFromMatrixPosition(it.matrixWorld),q.setFromMatrixPosition(ht.matrixWorld);let Lt=V.distanceTo(q),bt=it.projectionMatrix.elements,_t=ht.projectionMatrix.elements,Pt=bt[14]/(bt[10]-1),vt=bt[14]/(bt[10]+1),L=(bt[9]+1)/bt[5],se=(bt[9]-1)/bt[5],xt=(bt[8]-1)/bt[0],zt=(_t[8]+1)/_t[0],Et=Pt*xt,Vt=Pt*zt,Gt=Lt/(-xt+zt),Zt=Gt*-xt;it.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Zt),Y.translateZ(Gt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();let me=Pt+Gt,w=vt+Gt,v=Et-Zt,$=Vt+(Lt-Zt),nt=L*vt/w*me,rt=se*vt/w*me;Y.projectionMatrix.makePerspective(v,$,nt,rt,me,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function N(Y,it){it===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(it.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;y.texture!==null&&(Y.near=y.depthNear,Y.far=y.depthFar),x.near=I.near=M.near=Y.near,x.far=I.far=M.far=Y.far,(T!==x.near||et!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,et=x.far,M.near=T,M.far=et,I.near=T,I.far=et,M.updateProjectionMatrix(),I.updateProjectionMatrix(),Y.updateProjectionMatrix());let it=Y.parent,ht=x.cameras;N(x,it);for(let Lt=0;Lt<ht.length;Lt++)N(ht[Lt],it);ht.length===2?k(x,M,I):x.projectionMatrix.copy(M.projectionMatrix),X(Y,x,it)};function X(Y,it,ht){ht===null?Y.matrix.copy(it.matrixWorld):(Y.matrix.copy(ht.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(it.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=pa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return y.texture!==null};let Q=null;function at(Y,it){if(h=it.getViewerPose(c||o),_=it,h!==null){let ht=h.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let Lt=!1;ht.length!==x.cameras.length&&(x.cameras.length=0,Lt=!0);for(let _t=0;_t<ht.length;_t++){let Pt=ht[_t],vt=null;if(m!==null)vt=m.getViewport(Pt);else{let se=p.getViewSubImage(f,Pt);vt=se.viewport,_t===0&&(t.setRenderTargetTextures(E,se.colorTexture,f.ignoreDepthValues?void 0:se.depthStencilTexture),t.setRenderTarget(E))}let L=J[_t];L===void 0&&(L=new ke,L.layers.enable(_t),L.viewport=new Re,J[_t]=L),L.matrix.fromArray(Pt.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Pt.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(vt.x,vt.y,vt.width,vt.height),_t===0&&(x.matrix.copy(L.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Lt===!0&&x.cameras.push(L)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){let _t=p.getDepthInformation(ht[0]);_t&&_t.isValid&&_t.texture&&y.init(t,_t,s.renderState)}}for(let ht=0;ht<g.length;ht++){let Lt=A[ht],bt=g[ht];Lt!==null&&bt!==void 0&&bt.update(Lt,it,c||o)}y.render(t,x),Q&&Q(Y,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),_=null}let It=new ql;It.setAnimationLoop(at),this.setAnimationLoop=function(Y){Q=Y},this.dispose=function(){}}},ei=new fn,om=new xe;function lm(i,t){function e(d,u){d.matrixAutoUpdate===!0&&d.updateMatrix(),u.value.copy(d.matrix)}function n(d,u){u.color.getRGB(d.fogColor.value,Xl(i)),u.isFog?(d.fogNear.value=u.near,d.fogFar.value=u.far):u.isFogExp2&&(d.fogDensity.value=u.density)}function s(d,u,E,g,A){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(d,u):u.isMeshToonMaterial?(r(d,u),p(d,u)):u.isMeshPhongMaterial?(r(d,u),h(d,u)):u.isMeshStandardMaterial?(r(d,u),f(d,u),u.isMeshPhysicalMaterial&&m(d,u,A)):u.isMeshMatcapMaterial?(r(d,u),_(d,u)):u.isMeshDepthMaterial?r(d,u):u.isMeshDistanceMaterial?(r(d,u),y(d,u)):u.isMeshNormalMaterial?r(d,u):u.isLineBasicMaterial?(o(d,u),u.isLineDashedMaterial&&a(d,u)):u.isPointsMaterial?l(d,u,E,g):u.isSpriteMaterial?c(d,u):u.isShadowMaterial?(d.color.value.copy(u.color),d.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(d,u){d.opacity.value=u.opacity,u.color&&d.diffuse.value.copy(u.color),u.emissive&&d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(d.map.value=u.map,e(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.bumpMap&&(d.bumpMap.value=u.bumpMap,e(u.bumpMap,d.bumpMapTransform),d.bumpScale.value=u.bumpScale,u.side===qe&&(d.bumpScale.value*=-1)),u.normalMap&&(d.normalMap.value=u.normalMap,e(u.normalMap,d.normalMapTransform),d.normalScale.value.copy(u.normalScale),u.side===qe&&d.normalScale.value.negate()),u.displacementMap&&(d.displacementMap.value=u.displacementMap,e(u.displacementMap,d.displacementMapTransform),d.displacementScale.value=u.displacementScale,d.displacementBias.value=u.displacementBias),u.emissiveMap&&(d.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,d.emissiveMapTransform)),u.specularMap&&(d.specularMap.value=u.specularMap,e(u.specularMap,d.specularMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);let E=t.get(u),g=E.envMap,A=E.envMapRotation;if(g&&(d.envMap.value=g,ei.copy(A),ei.x*=-1,ei.y*=-1,ei.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),d.envMapRotation.value.setFromMatrix4(om.makeRotationFromEuler(ei)),d.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=u.reflectivity,d.ior.value=u.ior,d.refractionRatio.value=u.refractionRatio),u.lightMap){d.lightMap.value=u.lightMap;let U=i._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=u.lightMapIntensity*U,e(u.lightMap,d.lightMapTransform)}u.aoMap&&(d.aoMap.value=u.aoMap,d.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,d.aoMapTransform))}function o(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,u.map&&(d.map.value=u.map,e(u.map,d.mapTransform))}function a(d,u){d.dashSize.value=u.dashSize,d.totalSize.value=u.dashSize+u.gapSize,d.scale.value=u.scale}function l(d,u,E,g){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.size.value=u.size*E,d.scale.value=g*.5,u.map&&(d.map.value=u.map,e(u.map,d.uvTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function c(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.rotation.value=u.rotation,u.map&&(d.map.value=u.map,e(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function h(d,u){d.specular.value.copy(u.specular),d.shininess.value=Math.max(u.shininess,1e-4)}function p(d,u){u.gradientMap&&(d.gradientMap.value=u.gradientMap)}function f(d,u){d.metalness.value=u.metalness,u.metalnessMap&&(d.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,d.metalnessMapTransform)),d.roughness.value=u.roughness,u.roughnessMap&&(d.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,d.roughnessMapTransform)),t.get(u).envMap&&(d.envMapIntensity.value=u.envMapIntensity)}function m(d,u,E){d.ior.value=u.ior,u.sheen>0&&(d.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),d.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(d.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,d.sheenColorMapTransform)),u.sheenRoughnessMap&&(d.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,d.sheenRoughnessMapTransform))),u.clearcoat>0&&(d.clearcoat.value=u.clearcoat,d.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(d.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,d.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(d.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===qe&&d.clearcoatNormalScale.value.negate())),u.iridescence>0&&(d.iridescence.value=u.iridescence,d.iridescenceIOR.value=u.iridescenceIOR,d.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(d.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,d.iridescenceMapTransform)),u.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),u.transmission>0&&(d.transmission.value=u.transmission,d.transmissionSamplerMap.value=E.texture,d.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(d.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,d.transmissionMapTransform)),d.thickness.value=u.thickness,u.thicknessMap&&(d.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=u.attenuationDistance,d.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(d.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(d.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=u.specularIntensity,d.specularColor.value.copy(u.specularColor),u.specularColorMap&&(d.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,d.specularColorMapTransform)),u.specularIntensityMap&&(d.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,u){u.matcap&&(d.matcap.value=u.matcap)}function y(d,u){let E=t.get(u).light;d.referencePosition.value.setFromMatrixPosition(E.matrixWorld),d.nearDistance.value=E.shadow.camera.near,d.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cm(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,g){let A=g.program;n.uniformBlockBinding(E,A)}function c(E,g){let A=s[E.id];A===void 0&&(_(E),A=h(E),s[E.id]=A,E.addEventListener("dispose",d));let U=g.program;n.updateUBOMapping(E,U);let R=t.render.frame;r[E.id]!==R&&(f(E),r[E.id]=R)}function h(E){let g=p();E.__bindingPointIndex=g;let A=i.createBuffer(),U=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,U,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,A),A}function p(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let g=s[E.id],A=E.uniforms,U=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let R=0,M=A.length;R<M;R++){let I=Array.isArray(A[R])?A[R]:[A[R]];for(let J=0,x=I.length;J<x;J++){let T=I[J];if(m(T,R,J,U)===!0){let et=T.__offset,j=Array.isArray(T.value)?T.value:[T.value],P=0;for(let G=0;G<j.length;G++){let V=j[G],q=y(V);typeof V=="number"||typeof V=="boolean"?(T.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,et+P,T.__data)):V.isMatrix3?(T.__data[0]=V.elements[0],T.__data[1]=V.elements[1],T.__data[2]=V.elements[2],T.__data[3]=0,T.__data[4]=V.elements[3],T.__data[5]=V.elements[4],T.__data[6]=V.elements[5],T.__data[7]=0,T.__data[8]=V.elements[6],T.__data[9]=V.elements[7],T.__data[10]=V.elements[8],T.__data[11]=0):(V.toArray(T.__data,P),P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,et,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,g,A,U){let R=E.value,M=g+"_"+A;if(U[M]===void 0)return typeof R=="number"||typeof R=="boolean"?U[M]=R:U[M]=R.clone(),!0;{let I=U[M];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return U[M]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function _(E){let g=E.uniforms,A=0,U=16;for(let M=0,I=g.length;M<I;M++){let J=Array.isArray(g[M])?g[M]:[g[M]];for(let x=0,T=J.length;x<T;x++){let et=J[x],j=Array.isArray(et.value)?et.value:[et.value];for(let P=0,G=j.length;P<G;P++){let V=j[P],q=y(V),k=A%U;k!==0&&U-k<q.boundary&&(A+=U-k),et.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=A,A+=q.storage}}}let R=A%U;return R>0&&(A+=U-R),E.__size=A,E.__cache={},this}function y(E){let g={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(g.boundary=4,g.storage=4):E.isVector2?(g.boundary=8,g.storage=8):E.isVector3||E.isColor?(g.boundary=16,g.storage=12):E.isVector4?(g.boundary=16,g.storage=16):E.isMatrix3?(g.boundary=48,g.storage=48):E.isMatrix4?(g.boundary=64,g.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),g}function d(E){let g=E.target;g.removeEventListener("dispose",d);let A=o.indexOf(g.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(s[g.id]),delete s[g.id],delete r[g.id]}function u(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var hs=class{constructor(t={}){let{canvas:e=uh(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let m=new Uint32Array(4),_=new Int32Array(4),y=null,d=null,u=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this._useLegacyLights=!1,this.toneMapping=On,this.toneMappingExposure=1;let g=this,A=!1,U=0,R=0,M=null,I=-1,J=null,x=new Re,T=new Re,et=null,j=new jt(0),P=0,G=e.width,V=e.height,q=1,k=null,N=null,X=new Re(0,0,G,V),Q=new Re(0,0,G,V),at=!1,It=new ls,Y=!1,it=!1,ht=null,Lt=new xe,bt=new Wt,_t=new H,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function vt(){return M===null?q:1}let L=n;function se(S,F){for(let z=0;z<S.length;z++){let Z=S[z],B=e.getContext(Z,F);if(B!==null)return B}return null}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r162"),e.addEventListener("webglcontextlost",Qt,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",ft,!1),L===null){let F=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&F.shift(),L=se(F,S),L===null)throw se(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let xt,zt,Et,Vt,Gt,Zt,me,w,v,$,nt,rt,st,kt,mt,ct,dt,Nt,ot,de,Xt,At,Mt,yt;function $t(){xt=new Tf(L),zt=new vf(L,xt,t),xt.init(zt),At=new im(L,xt,zt),Et=new em(L,xt,zt),Vt=new Rf(L),Gt=new Gp,Zt=new nm(L,xt,Et,Gt,zt,At,Vt),me=new Mf(g),w=new Ef(g),v=new Dh(L,zt),Mt=new _f(L,xt,v,zt),$=new wf(L,v,Vt,Mt),nt=new Lf(L,$,v,Vt),ot=new If(L,zt,Zt),ct=new yf(Gt),rt=new Vp(g,me,w,xt,zt,Mt,ct),st=new lm(g,Gt),kt=new Xp,mt=new Kp(xt,zt),Nt=new gf(g,me,w,Et,nt,f,l),dt=new tm(g,nt,zt),yt=new cm(L,Vt,zt,Et),de=new xf(L,xt,Vt,zt),Xt=new Af(L,xt,Vt,zt),Vt.programs=rt.programs,g.capabilities=zt,g.extensions=xt,g.properties=Gt,g.renderLists=kt,g.shadowMap=dt,g.state=Et,g.info=Vt}$t();let Rt=new Ca(g,L);this.xr=Rt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let S=xt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=xt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(S){S!==void 0&&(q=S,this.setSize(G,V,!1))},this.getSize=function(S){return S.set(G,V)},this.setSize=function(S,F,z=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,V=F,e.width=Math.floor(S*q),e.height=Math.floor(F*q),z===!0&&(e.style.width=S+"px",e.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(G*q,V*q).floor()},this.setDrawingBufferSize=function(S,F,z){G=S,V=F,q=z,e.width=Math.floor(S*z),e.height=Math.floor(F*z),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(x)},this.getViewport=function(S){return S.copy(X)},this.setViewport=function(S,F,z,Z){S.isVector4?X.set(S.x,S.y,S.z,S.w):X.set(S,F,z,Z),Et.viewport(x.copy(X).multiplyScalar(q).round())},this.getScissor=function(S){return S.copy(Q)},this.setScissor=function(S,F,z,Z){S.isVector4?Q.set(S.x,S.y,S.z,S.w):Q.set(S,F,z,Z),Et.scissor(T.copy(Q).multiplyScalar(q).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(S){Et.setScissorTest(at=S)},this.setOpaqueSort=function(S){k=S},this.setTransparentSort=function(S){N=S},this.getClearColor=function(S){return S.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(S=!0,F=!0,z=!0){let Z=0;if(S){let B=!1;if(M!==null){let gt=M.texture.format;B=gt===zl||gt===Bl||gt===Ol}if(B){let gt=M.texture.type,St=gt===Bn||gt===Nn||gt===Wa||gt===ai||gt===Nl||gt===Fl,wt=Nt.getClearColor(),Dt=Nt.getClearAlpha(),Bt=wt.r,Ot=wt.g,Ft=wt.b;St?(m[0]=Bt,m[1]=Ot,m[2]=Ft,m[3]=Dt,L.clearBufferuiv(L.COLOR,0,m)):(_[0]=Bt,_[1]=Ot,_[2]=Ft,_[3]=Dt,L.clearBufferiv(L.COLOR,0,_))}else Z|=L.COLOR_BUFFER_BIT}F&&(Z|=L.DEPTH_BUFFER_BIT),z&&(Z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Qt,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),kt.dispose(),mt.dispose(),Gt.dispose(),me.dispose(),w.dispose(),nt.dispose(),Mt.dispose(),yt.dispose(),rt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",_e),Rt.removeEventListener("sessionend",ee),ht&&(ht.dispose(),ht=null),Te.stop()};function Qt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let S=Vt.autoReset,F=dt.enabled,z=dt.autoUpdate,Z=dt.needsUpdate,B=dt.type;$t(),Vt.autoReset=S,dt.enabled=F,dt.autoUpdate=z,dt.needsUpdate=Z,dt.type=B}function ft(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function W(S){let F=S.target;F.removeEventListener("dispose",W),lt(F)}function lt(S){pt(S),Gt.remove(S)}function pt(S){let F=Gt.get(S).programs;F!==void 0&&(F.forEach(function(z){rt.releaseProgram(z)}),S.isShaderMaterial&&rt.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,z,Z,B,gt){F===null&&(F=Pt);let St=B.isMesh&&B.matrixWorld.determinant()<0,wt=xs(S,F,z,Z,B);Et.setMaterial(Z,St);let Dt=z.index,Bt=1;if(Z.wireframe===!0){if(Dt=$.getWireframeAttribute(z),Dt===void 0)return;Bt=2}let Ot=z.drawRange,Ft=z.attributes.position,ge=Ot.start*Bt,Ce=(Ot.start+Ot.count)*Bt;gt!==null&&(ge=Math.max(ge,gt.start*Bt),Ce=Math.min(Ce,(gt.start+gt.count)*Bt)),Dt!==null?(ge=Math.max(ge,0),Ce=Math.min(Ce,Dt.count)):Ft!=null&&(ge=Math.max(ge,0),Ce=Math.min(Ce,Ft.count));let ve=Ce-ge;if(ve<0||ve===1/0)return;Mt.setup(B,Z,wt,z,Dt);let Pe,re=de;if(Dt!==null&&(Pe=v.get(Dt),re=Xt,re.setIndex(Pe)),B.isMesh)Z.wireframe===!0?(Et.setLineWidth(Z.wireframeLinewidth*vt()),re.setMode(L.LINES)):re.setMode(L.TRIANGLES);else if(B.isLine){let Ht=Z.linewidth;Ht===void 0&&(Ht=1),Et.setLineWidth(Ht*vt()),B.isLineSegments?re.setMode(L.LINES):B.isLineLoop?re.setMode(L.LINE_LOOP):re.setMode(L.LINE_STRIP)}else B.isPoints?re.setMode(L.POINTS):B.isSprite&&re.setMode(L.TRIANGLES);if(B.isBatchedMesh)re.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)re.renderInstances(ge,ve,B.count);else if(z.isInstancedBufferGeometry){let Ht=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,An=Math.min(z.instanceCount,Ht);re.renderInstances(ge,ve,An)}else re.render(ge,ve)};function Kt(S,F,z){S.transparent===!0&&S.side===je&&S.forceSinglePass===!1?(S.side=qe,S.needsUpdate=!0,Yn(S,F,z),S.side=zn,S.needsUpdate=!0,Yn(S,F,z),S.side=je):Yn(S,F,z)}this.compile=function(S,F,z=null){z===null&&(z=S),d=mt.get(z),d.init(),E.push(d),z.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),S!==z&&S.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights(g._useLegacyLights);let Z=new Set;return S.traverse(function(B){let gt=B.material;if(gt)if(Array.isArray(gt))for(let St=0;St<gt.length;St++){let wt=gt[St];Kt(wt,z,B),Z.add(wt)}else Kt(gt,z,B),Z.add(gt)}),E.pop(),d=null,Z},this.compileAsync=function(S,F,z=null){let Z=this.compile(S,F,z);return new Promise(B=>{function gt(){if(Z.forEach(function(St){Gt.get(St).currentProgram.isReady()&&Z.delete(St)}),Z.size===0){B(S);return}setTimeout(gt,10)}xt.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let ie=null;function he(S){ie&&ie(S)}function _e(){Te.stop()}function ee(){Te.start()}let Te=new ql;Te.setAnimationLoop(he),typeof self<"u"&&Te.setContext(self),this.setAnimationLoop=function(S){ie=S,Rt.setAnimationLoop(S),S===null?Te.stop():Te.start()},Rt.addEventListener("sessionstart",_e),Rt.addEventListener("sessionend",ee),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(F),F=Rt.getCamera()),S.isScene===!0&&S.onBeforeRender(g,S,F,M),d=mt.get(S,E.length),d.init(),E.push(d),Lt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),It.setFromProjectionMatrix(Lt),it=this.localClippingEnabled,Y=ct.init(this.clippingPlanes,it),y=kt.get(S,u.length),y.init(),u.push(y),Ye(S,F,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(k,N),this.info.render.frame++,Y===!0&&ct.beginShadows();let z=d.state.shadowsArray;if(dt.render(z,S,F),Y===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1)&&Nt.render(y,S),d.setupLights(g._useLegacyLights),F.isArrayCamera){let Z=F.cameras;for(let B=0,gt=Z.length;B<gt;B++){let St=Z[B];Yi(y,S,St,St.viewport)}}else Yi(y,S,F);M!==null&&(Zt.updateMultisampleRenderTarget(M),Zt.updateRenderTargetMipmap(M)),S.isScene===!0&&S.onAfterRender(g,S,F),Mt.resetDefaultState(),I=-1,J=null,E.pop(),E.length>0?d=E[E.length-1]:d=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function Ye(S,F,z,Z){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||It.intersectsSprite(S)){Z&&_t.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Lt);let St=nt.update(S),wt=S.material;wt.visible&&y.push(S,St,wt,z,_t.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||It.intersectsObject(S))){let St=nt.update(S),wt=S.material;if(Z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),_t.copy(S.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),_t.copy(St.boundingSphere.center)),_t.applyMatrix4(S.matrixWorld).applyMatrix4(Lt)),Array.isArray(wt)){let Dt=St.groups;for(let Bt=0,Ot=Dt.length;Bt<Ot;Bt++){let Ft=Dt[Bt],ge=wt[Ft.materialIndex];ge&&ge.visible&&y.push(S,St,ge,z,_t.z,Ft)}}else wt.visible&&y.push(S,St,wt,z,_t.z,null)}}let gt=S.children;for(let St=0,wt=gt.length;St<wt;St++)Ye(gt[St],F,z,Z)}function Yi(S,F,z,Z){let B=S.opaque,gt=S.transmissive,St=S.transparent;d.setupLightsView(z),Y===!0&&ct.setGlobalState(g.clippingPlanes,z),gt.length>0&&gs(B,gt,F,z),Z&&Et.viewport(x.copy(Z)),B.length>0&&qn(B,F,z),gt.length>0&&qn(gt,F,z),St.length>0&&qn(St,F,z),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function gs(S,F,z,Z){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let gt=zt.isWebGL2;ht===null&&(ht=new wn(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?rs:Bn,minFilter:ri,samples:gt?4:0})),g.getDrawingBufferSize(bt),gt?ht.setSize(bt.x,bt.y):ht.setSize(ma(bt.x),ma(bt.y));let St=g.getRenderTarget();g.setRenderTarget(ht),g.getClearColor(j),P=g.getClearAlpha(),P<1&&g.setClearColor(16777215,.5),g.clear();let wt=g.toneMapping;g.toneMapping=On,qn(S,z,Z),Zt.updateMultisampleRenderTarget(ht),Zt.updateRenderTargetMipmap(ht);let Dt=!1;for(let Bt=0,Ot=F.length;Bt<Ot;Bt++){let Ft=F[Bt],ge=Ft.object,Ce=Ft.geometry,ve=Ft.material,Pe=Ft.group;if(ve.side===je&&ge.layers.test(Z.layers)){let re=ve.side;ve.side=qe,ve.needsUpdate=!0,Zi(ge,z,Z,Ce,ve,Pe),ve.side=re,ve.needsUpdate=!0,Dt=!0}}Dt===!0&&(Zt.updateMultisampleRenderTarget(ht),Zt.updateRenderTargetMipmap(ht)),g.setRenderTarget(St),g.setClearColor(j,P),g.toneMapping=wt}function qn(S,F,z){let Z=F.isScene===!0?F.overrideMaterial:null;for(let B=0,gt=S.length;B<gt;B++){let St=S[B],wt=St.object,Dt=St.geometry,Bt=Z===null?St.material:Z,Ot=St.group;wt.layers.test(z.layers)&&Zi(wt,F,z,Dt,Bt,Ot)}}function Zi(S,F,z,Z,B,gt){S.onBeforeRender(g,F,z,Z,B,gt),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(g,F,z,Z,S,gt),B.transparent===!0&&B.side===je&&B.forceSinglePass===!1?(B.side=qe,B.needsUpdate=!0,g.renderBufferDirect(z,F,Z,B,S,gt),B.side=zn,B.needsUpdate=!0,g.renderBufferDirect(z,F,Z,B,S,gt),B.side=je):g.renderBufferDirect(z,F,Z,B,S,gt),S.onAfterRender(g,F,z,Z,B,gt)}function Yn(S,F,z){F.isScene!==!0&&(F=Pt);let Z=Gt.get(S),B=d.state.lights,gt=d.state.shadowsArray,St=B.state.version,wt=rt.getParameters(S,B.state,gt,F,z),Dt=rt.getProgramCacheKey(wt),Bt=Z.programs;Z.environment=S.isMeshStandardMaterial?F.environment:null,Z.fog=F.fog,Z.envMap=(S.isMeshStandardMaterial?w:me).get(S.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Bt===void 0&&(S.addEventListener("dispose",W),Bt=new Map,Z.programs=Bt);let Ot=Bt.get(Dt);if(Ot!==void 0){if(Z.currentProgram===Ot&&Z.lightsStateVersion===St)return Ji(S,wt),Ot}else wt.uniforms=rt.getUniforms(S),S.onBuild(z,wt,g),S.onBeforeCompile(wt,g),Ot=rt.acquireProgram(wt,Dt),Bt.set(Dt,Ot),Z.uniforms=wt.uniforms;let Ft=Z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ft.clippingPlanes=ct.uniform),Ji(S,wt),Z.needsLights=mn(S),Z.lightsStateVersion=St,Z.needsLights&&(Ft.ambientLightColor.value=B.state.ambient,Ft.lightProbe.value=B.state.probe,Ft.directionalLights.value=B.state.directional,Ft.directionalLightShadows.value=B.state.directionalShadow,Ft.spotLights.value=B.state.spot,Ft.spotLightShadows.value=B.state.spotShadow,Ft.rectAreaLights.value=B.state.rectArea,Ft.ltc_1.value=B.state.rectAreaLTC1,Ft.ltc_2.value=B.state.rectAreaLTC2,Ft.pointLights.value=B.state.point,Ft.pointLightShadows.value=B.state.pointShadow,Ft.hemisphereLights.value=B.state.hemi,Ft.directionalShadowMap.value=B.state.directionalShadowMap,Ft.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ft.spotShadowMap.value=B.state.spotShadowMap,Ft.spotLightMatrix.value=B.state.spotLightMatrix,Ft.spotLightMap.value=B.state.spotLightMap,Ft.pointShadowMap.value=B.state.pointShadowMap,Ft.pointShadowMatrix.value=B.state.pointShadowMatrix),Z.currentProgram=Ot,Z.uniformsList=null,Ot}function _s(S){if(S.uniformsList===null){let F=S.currentProgram.getUniforms();S.uniformsList=Bi.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Ji(S,F){let z=Gt.get(S);z.outputColorSpace=F.outputColorSpace,z.batching=F.batching,z.instancing=F.instancing,z.instancingColor=F.instancingColor,z.instancingMorph=F.instancingMorph,z.skinning=F.skinning,z.morphTargets=F.morphTargets,z.morphNormals=F.morphNormals,z.morphColors=F.morphColors,z.morphTargetsCount=F.morphTargetsCount,z.numClippingPlanes=F.numClippingPlanes,z.numIntersection=F.numClipIntersection,z.vertexAlphas=F.vertexAlphas,z.vertexTangents=F.vertexTangents,z.toneMapping=F.toneMapping}function xs(S,F,z,Z,B){F.isScene!==!0&&(F=Pt),Zt.resetTextureUnits();let gt=F.fog,St=Z.isMeshStandardMaterial?F.environment:null,wt=M===null?g.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Xn,Dt=(Z.isMeshStandardMaterial?w:me).get(Z.envMap||St),Bt=Z.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ot=!!z.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ft=!!z.morphAttributes.position,ge=!!z.morphAttributes.normal,Ce=!!z.morphAttributes.color,ve=On;Z.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(ve=g.toneMapping);let Pe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,re=Pe!==void 0?Pe.length:0,Ht=Gt.get(Z),An=d.state.lights;if(Y===!0&&(it===!0||S!==J)){let De=S===J&&Z.id===I;ct.setState(Z,S,De)}let le=!1;Z.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==An.state.version||Ht.outputColorSpace!==wt||B.isBatchedMesh&&Ht.batching===!1||!B.isBatchedMesh&&Ht.batching===!0||B.isInstancedMesh&&Ht.instancing===!1||!B.isInstancedMesh&&Ht.instancing===!0||B.isSkinnedMesh&&Ht.skinning===!1||!B.isSkinnedMesh&&Ht.skinning===!0||B.isInstancedMesh&&Ht.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ht.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ht.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ht.instancingMorph===!1&&B.morphTexture!==null||Ht.envMap!==Dt||Z.fog===!0&&Ht.fog!==gt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==ct.numPlanes||Ht.numIntersection!==ct.numIntersection)||Ht.vertexAlphas!==Bt||Ht.vertexTangents!==Ot||Ht.morphTargets!==Ft||Ht.morphNormals!==ge||Ht.morphColors!==Ce||Ht.toneMapping!==ve||zt.isWebGL2===!0&&Ht.morphTargetsCount!==re)&&(le=!0):(le=!0,Ht.__version=Z.version);let hn=Ht.currentProgram;le===!0&&(hn=Yn(Z,F,B));let $i=!1,Zn=!1,Ki=!1,we=hn.getUniforms(),Qe=Ht.uniforms;if(Et.useProgram(hn.program)&&($i=!0,Zn=!0,Ki=!0),Z.id!==I&&(I=Z.id,Zn=!0),$i||J!==S){we.setValue(L,"projectionMatrix",S.projectionMatrix),we.setValue(L,"viewMatrix",S.matrixWorldInverse);let De=we.map.cameraPosition;De!==void 0&&De.setValue(L,_t.setFromMatrixPosition(S.matrixWorld)),zt.logarithmicDepthBuffer&&we.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&we.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),J!==S&&(J=S,Zn=!0,Ki=!0)}if(B.isSkinnedMesh){we.setOptional(L,B,"bindMatrix"),we.setOptional(L,B,"bindMatrixInverse");let De=B.skeleton;De&&(zt.floatVertexTextures?(De.boneTexture===null&&De.computeBoneTexture(),we.setValue(L,"boneTexture",De.boneTexture,Zt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(we.setOptional(L,B,"batchingTexture"),we.setValue(L,"batchingTexture",B._matricesTexture,Zt));let pi=z.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0&&zt.isWebGL2===!0)&&ot.update(B,z,hn),(Zn||Ht.receiveShadow!==B.receiveShadow)&&(Ht.receiveShadow=B.receiveShadow,we.setValue(L,"receiveShadow",B.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Qe.envMap.value=Dt,Qe.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),Zn&&(we.setValue(L,"toneMappingExposure",g.toneMappingExposure),Ht.needsLights&&Sr(Qe,Ki),gt&&Z.fog===!0&&st.refreshFogUniforms(Qe,gt),st.refreshMaterialUniforms(Qe,Z,q,V,ht),Bi.upload(L,_s(Ht),Qe,Zt)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Bi.upload(L,_s(Ht),Qe,Zt),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&we.setValue(L,"center",B.center),we.setValue(L,"modelViewMatrix",B.modelViewMatrix),we.setValue(L,"normalMatrix",B.normalMatrix),we.setValue(L,"modelMatrix",B.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let De=Z.uniformsGroups;for(let mi=0,$e=De.length;mi<$e;mi++)if(zt.isWebGL2){let tn=De[mi];yt.update(tn,hn),yt.bind(tn,hn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hn}function Sr(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function mn(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(S,F,z){Gt.get(S.texture).__webglTexture=F,Gt.get(S.depthTexture).__webglTexture=z;let Z=Gt.get(S);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=z===void 0,Z.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,F){let z=Gt.get(S);z.__webglFramebuffer=F,z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,z=0){M=S,U=F,R=z;let Z=!0,B=null,gt=!1,St=!1;if(S){let Dt=Gt.get(S);Dt.__useDefaultFramebuffer!==void 0?(Et.bindFramebuffer(L.FRAMEBUFFER,null),Z=!1):Dt.__webglFramebuffer===void 0?Zt.setupRenderTarget(S):Dt.__hasExternalTextures&&Zt.rebindTextures(S,Gt.get(S.texture).__webglTexture,Gt.get(S.depthTexture).__webglTexture);let Bt=S.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(St=!0);let Ot=Gt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ot[F])?B=Ot[F][z]:B=Ot[F],gt=!0):zt.isWebGL2&&S.samples>0&&Zt.useMultisampledRTT(S)===!1?B=Gt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ot)?B=Ot[z]:B=Ot,x.copy(S.viewport),T.copy(S.scissor),et=S.scissorTest}else x.copy(X).multiplyScalar(q).floor(),T.copy(Q).multiplyScalar(q).floor(),et=at;if(Et.bindFramebuffer(L.FRAMEBUFFER,B)&&zt.drawBuffers&&Z&&Et.drawBuffers(S,B),Et.viewport(x),Et.scissor(T),Et.setScissorTest(et),gt){let Dt=Gt.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,Dt.__webglTexture,z)}else if(St){let Dt=Gt.get(S.texture),Bt=F||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Dt.__webglTexture,z||0,Bt)}I=-1},this.readRenderTargetPixels=function(S,F,z,Z,B,gt,St){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Gt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&St!==void 0&&(wt=wt[St]),wt){Et.bindFramebuffer(L.FRAMEBUFFER,wt);try{let Dt=S.texture,Bt=Dt.format,Ot=Dt.type;if(Bt!==on&&At.convert(Bt)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ft=Ot===rs&&(xt.has("EXT_color_buffer_half_float")||zt.isWebGL2&&xt.has("EXT_color_buffer_float"));if(Ot!==Bn&&At.convert(Ot)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ot===bn&&(zt.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!Ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-Z&&z>=0&&z<=S.height-B&&L.readPixels(F,z,Z,B,At.convert(Bt),At.convert(Ot),gt)}finally{let Dt=M!==null?Gt.get(M).__webglFramebuffer:null;Et.bindFramebuffer(L.FRAMEBUFFER,Dt)}}},this.copyFramebufferToTexture=function(S,F,z=0){let Z=Math.pow(2,-z),B=Math.floor(F.image.width*Z),gt=Math.floor(F.image.height*Z);Zt.setTexture2D(F,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,S.x,S.y,B,gt),Et.unbindTexture()},this.copyTextureToTexture=function(S,F,z,Z=0){let B=F.image.width,gt=F.image.height,St=At.convert(z.format),wt=At.convert(z.type);Zt.setTexture2D(z,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment),F.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Z,S.x,S.y,B,gt,St,wt,F.image.data):F.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Z,S.x,S.y,F.mipmaps[0].width,F.mipmaps[0].height,St,F.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,Z,S.x,S.y,St,wt,F.image),Z===0&&z.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Et.unbindTexture()},this.copyTextureToTexture3D=function(S,F,z,Z,B=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let gt=Math.round(S.max.x-S.min.x),St=Math.round(S.max.y-S.min.y),wt=S.max.z-S.min.z+1,Dt=At.convert(Z.format),Bt=At.convert(Z.type),Ot;if(Z.isData3DTexture)Zt.setTexture3D(Z,0),Ot=L.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)Zt.setTexture2DArray(Z,0),Ot=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Z.unpackAlignment);let Ft=L.getParameter(L.UNPACK_ROW_LENGTH),ge=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ce=L.getParameter(L.UNPACK_SKIP_PIXELS),ve=L.getParameter(L.UNPACK_SKIP_ROWS),Pe=L.getParameter(L.UNPACK_SKIP_IMAGES),re=z.isCompressedTexture?z.mipmaps[B]:z.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,re.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,re.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,S.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,S.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,S.min.z),z.isDataTexture||z.isData3DTexture?L.texSubImage3D(Ot,B,F.x,F.y,F.z,gt,St,wt,Dt,Bt,re.data):Z.isCompressedArrayTexture?L.compressedTexSubImage3D(Ot,B,F.x,F.y,F.z,gt,St,wt,Dt,re.data):L.texSubImage3D(Ot,B,F.x,F.y,F.z,gt,St,wt,Dt,Bt,re),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ft),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ge),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ce),L.pixelStorei(L.UNPACK_SKIP_ROWS,ve),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pe),B===0&&Z.generateMipmaps&&L.generateMipmap(Ot),Et.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Zt.setTextureCube(S,0):S.isData3DTexture?Zt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Zt.setTexture2DArray(S,0):Zt.setTexture2D(S,0),Et.unbindTexture()},this.resetState=function(){U=0,R=0,M=null,Et.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===qa?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===_r?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Pa=class extends hs{};Pa.prototype.isWebGL1Renderer=!0;var cr=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var us=class extends Oe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Le,h=Le,p,f){super(null,o,a,l,c,h,s,r,p,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hi=class extends Oe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hr=class extends Vn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new jt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var ds=class extends Vn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hl,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Vs(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function hm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Wi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ia=class extends Wi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fo,endingEnd:Fo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Oo:r=t,a=2*e-n;break;case Bo:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Oo:o=t,l=2*n-e;break;case Bo:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,m=this._weightNext,_=(n-e)/(s-e),y=_*_,d=y*_,u=-f*d+2*f*y-f*_,E=(1+f)*d+(-1.5-2*f)*y+(-.5+f)*_+1,g=(-1-m)*d+(1.5+m)*y+.5*_,A=m*d-m*y;for(let U=0;U!==a;++U)r[U]=u*o[h+U]+E*o[c+U]+g*o[l+U]+A*o[p+U];return r}},La=class extends Wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),p=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*p+o[l+f]*h;return r}},Da=class extends Wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ln=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vs(e,this.TimeBufferType),this.values=Vs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vs(t.times,Array),values:Vs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new La(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ia(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ws:e=this.InterpolantFactoryMethodDiscrete;break;case Xs:e=this.InterpolantFactoryMethodLinear;break;case Ur:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ws;case this.InterpolantFactoryMethodLinear:return Xs;case this.InterpolantFactoryMethodSmooth:return Ur}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&hm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ur,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let p=a*n,f=p-n,m=p+n;for(let _=0;_!==n;++_){let y=e[p+_];if(y!==e[f+_]||y!==e[m+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let p=a*n,f=o*n;for(let m=0;m!==n;++m)e[f+m]=e[p+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=Xs;var ui=class extends ln{};ui.prototype.ValueTypeName="bool";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Ws;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends ln{};Ua.prototype.ValueTypeName="color";var Na=class extends ln{};Na.prototype.ValueTypeName="number";var Fa=class extends Wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Hn.slerpFlat(r,0,o,c-a,o,c,l);return r}},fs=class extends ln{InterpolantFactoryMethodLinear(t){return new Fa(this.times,this.values,this.getValueSize(),t)}};fs.prototype.ValueTypeName="quaternion";fs.prototype.DefaultInterpolation=Xs;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var di=class extends ln{};di.prototype.ValueTypeName="string";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Ws;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends ln{};Oa.prototype.ValueTypeName="vector";var Ba=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,f=c.length;p<f;p+=2){let m=c[p],_=c[p+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}},um=new Ba,za=class{constructor(t){this.manager=t!==void 0?t:um,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};za.DEFAULT_MATERIAL_NAME="__DEFAULT";var ur=class extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},dr=class extends ur{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},oa=new xe,Rl=new H,Cl=new H,ka=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ls,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Rl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rl),Cl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cl),e.updateMatrixWorld(),oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ha=class extends ka{constructor(){super(new ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fr=class extends ur{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new Ha}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Za="\\[\\]\\.:\\/",dm=new RegExp("["+Za+"]","g"),Ja="[^"+Za+"]",fm="[^"+Za.replace("\\.","")+"]",pm=/((?:WC+[\/:])*)/.source.replace("WC",Ja),mm=/(WCOD+)?/.source.replace("WCOD",fm),gm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ja),_m=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ja),xm=new RegExp("^"+pm+mm+gm+_m+"$"),vm=["material","materials","bones","map"],Va=class{constructor(t,e,n){let s=n||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(dm,"")}static parseTrackName(t){let e=xm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);vm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=Va;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Lm=new Float32Array(1);var Pl=new xe,pr=class{constructor(t,e,n=0,s=1/0){this.ray=new tr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new os,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Pl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pl),this}intersectObject(t,e=!0,n=[]){return Ga(t,this,n,e),n.sort(Il),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ga(t[s],this,n,e);return n.sort(Il),n}};function Il(i,t){return i.distance-t.distance}function Ga(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)Ga(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"162"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="162");var jl={original:{label:"Paper original (specks)",specks:!0,scale:1,contrast:0,bump:0,roughness:.5},smooth:{label:"Smooth",generate:"flat",scale:1,contrast:0,bump:0,roughness:.55},fine:{label:"Fine tooth",generate:"fine",scale:2,contrast:.03,bump:.35,roughness:.62},laid:{label:"Laid",generate:"laid",scale:1,contrast:.03,bump:.45,roughness:.64},cotton:{label:"Cotton rag (scan)",toneMap:new URL("./textures/cotton-tone.jpg",import.meta.url).href,heightMap:new URL("./textures/cotton-height.jpg",import.meta.url).href,scale:2.5,contrast:.02,bump:.5,roughness:.72},fiber:{label:"Fibre (scan)",toneMap:new URL("./textures/fiber-tone.jpg",import.meta.url).href,heightMap:new URL("./textures/fiber-height.jpg",import.meta.url).href,scale:2,contrast:.045,bump:.25,roughness:.64},recycled:{label:"Recycled (scan)",toneMap:new URL("./textures/recycled-tone.jpg",import.meta.url).href,heightMap:new URL("./textures/recycled-height.jpg",import.meta.url).href,scale:2,contrast:.05,bump:.2,roughness:.6}},vr="original";function Mm(i=vr){let t=typeof i=="string"?{preset:i}:{...i},n={...jl[t.preset]??(t.texture||t.toneMap||t.heightMap?{}:jl[vr]),...t};return t.texture?(n.toneMap=t.texture,n.heightMap=t.texture,delete n.generate):(t.toneMap||t.heightMap)&&delete n.generate,n.scale??=1,n.contrast??=.03,n.bump??=.3,n.roughness??=.6,n}async function Ka(i){let t=Mm(i),e,n;t.generate?e=n=bm(t.generate):[e,n]=await Promise.all([Ql(t.toneMap??t.heightMap),Ql(t.heightMap??t.toneMap)]);let{mean:s,std:r}=Sm(e);return{tone:e,height:n,mean:s,std:r,spec:t}}function Ql(i){return typeof i!="string"?Promise.resolve(i):new Promise((t,e)=>{let n=new Image;n.crossOrigin="anonymous",n.onload=()=>t(n),n.onerror=()=>e(new Error(`paper texture failed to load: ${i}`)),n.src=i})}function Sm(i){try{let t=i.naturalWidth||i.width,e=i.naturalHeight||i.height,n=Math.min(512,t,e),s=document.createElement("canvas");s.width=s.height=n;let r=s.getContext("2d",{willReadFrequently:!0});r.drawImage(i,0,0);let o=r.getImageData(0,0,n,n).data,a=0,l=0;for(let h=0;h<o.length;h+=4){let p=(.299*o[h]+.587*o[h+1]+.114*o[h+2])/255;a+=p,l+=p*p}let c=a/(n*n);return{mean:c,std:Math.max(Math.sqrt(Math.max(0,l/(n*n)-c*c)),.001)}}catch{return{mean:.5,std:.1}}}var $a=new Map;function bm(i){if($a.has(i))return $a.get(i);let t=i==="flat"?4:1024,e=new Float32Array(t*t).fill(.5);if(i!=="flat"){let o=Em(i==="laid"?7:3),a=new Float32Array(t*t).map(()=>o()),l=Tm(a,t),c=tc(t,32,o),h=tc(t,8,o);for(let p=0;p<e.length;p++)e[p]=i==="laid"?.55*l[p]+.3*c[p]+.15*h[p]:.88*l[p]+.09*c[p]+.03*h[p];if(i==="laid")for(let m=0;m<t;m++){let _=.5+.5*Math.sin(m/t*146*2*Math.PI);for(let y=0;y<t;y++){let d=Math.min(y%128,128-y%128),u=m*t+y;e[u]=.65*e[u]+.3*_+.05-.18*Math.exp(-d*d/4)}}wm(e)}let n=document.createElement("canvas");n.width=n.height=t;let s=n.getContext("2d"),r=s.createImageData(t,t);for(let o=0;o<e.length;o++){let a=Math.round(e[o]*255);r.data[o*4]=r.data[o*4+1]=r.data[o*4+2]=a,r.data[o*4+3]=255}return s.putImageData(r,0,0),$a.set(i,n),n}function Em(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Tm(i,t){let e=new Float32Array(i.length);for(let n=0;n<t;n++)for(let s=0;s<t;s++){let r=0;for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++)r+=i[(n+o+t)%t*t+(s+a+t)%t]*(a===0&&o===0?4:a===0||o===0?2:1);e[n*t+s]=r/16}return e}function tc(i,t,e){let n=Float32Array.from({length:t*t},e),s=new Float32Array(i*i),r=(o,a)=>n[(a+t)%t*t+(o+t)%t];for(let o=0;o<i;o++)for(let a=0;a<i;a++){let l=a/i*t,c=o/i*t,h=Math.floor(l),p=Math.floor(c),f=l-h,m=c-p;f=f*f*(3-2*f),m=m*m*(3-2*m);let _=r(h,p)+(r(h+1,p)-r(h,p))*f,y=r(h,p+1)+(r(h+1,p+1)-r(h,p+1))*f;s[o*i+a]=_+(y-_)*m}return s}function wm(i){let t=1/0,e=-1/0;for(let n of i)n<t&&(t=n),n>e&&(e=n);for(let n=0;n<i.length;n++)i[n]=(i[n]-t)/(e-t||1)}var Am={book:{aspect:28/21,pageWidth:896,fit:.82,perspective:40,visibleSheets:5,single:!1,interactive:!0,maxDpr:2,splitX:.3},block:{thickness:.05,color:"#e8dbbb"},material:{metalness:.17,showThrough:.04,inkGloss:.33},cover:{hard:!1,overhang:.014,thickness:.015,raise:.004,pressPages:.35,texture:"smooth",color:"#ffffff",grain:1,contrast:.02,bump:.3,roughness:.45,metalness:0},specks:{size:1.46,darken:.17,roughen:.33},shape:{liftMaxX:.14,liftMaxZ:.04,liftDipX:.58,liftDipZ:.035,liftMidX:.72,liftMidZ:.04,liftEdgeZ:.03,wrinkle:.13},light:{shadowMapSize:2048,ambient:1.5,sky:"#ffffff",ground:"#a1aeaf",sun:2,sunColor:"#ffffff",sunX:-3.5,sunY:1.3,sunZ:4.1,shadow:.15},curl:{angleMaxDeg:45,curlArc:.88,curlArcJitter:.2,curlAngleJitter:.3,curlTiltJitterDeg:6,cornerRollMax:2.3,directionSmoothTime:.4,curveSmoothTime:.5},hover:{progress:.03,smoothTime:2,gapToSheetAbove:.1},jump:{last:.62,first:.78,total0:1,total1:1.45,ratio:.8},riffle:{startTime:.22,firstFlipTime:1.2,fastestFlipTime:.5,speedUpSheets:20,firstGapShare:.15,fastestGapShare:.05,moveSlopPx:40},drag:{turnFraction:.8,progressSmoothTime:.9,fallTime:1,fallTimeExponent:.5,landingSpeed:.5,commitProgress:.2,clickSlopPx:5},flip:{flipTime:.85,followArcGainMin:1,followArcGainMax:1.08}};function Rm(i,t={}){let e=structuredClone(i);for(let[n,s]of Object.entries(t))s&&typeof s=="object"&&!Array.isArray(s)&&e[n]&&typeof e[n]=="object"?Object.assign(e[n],s):e[n]=s;return e}var ja=1e-4;function ec(i,{pageCount:t,renderPage:e,pageColor:n="#f3efe6",config:s={},paper:r=vr,start:o=0,autoOpen:a=!1,onSpread:l,onReady:c,onIdle:h,view:p}){let f=Rm(Am,s),{CURL:m,HOVER:_,RIFFLE:y,DRAG:d,FLIP:u}={CURL:f.curl,HOVER:f.hover,RIFFLE:f.riffle,DRAG:f.drag,FLIP:f.flip},E=Math.ceil(t/2),g=f.book.aspect,A=g/2,U=Math.round(f.book.pageWidth),R=Math.round(U*g),M=cn(o|0,0,E),I=[],J=[],x=!1,T=!0,et=0,j=-1,P=!1,G=!1,V=!1,q=!0,k=!1,N=null,X=null,Q=null,at=null,It=!1,Y=0,it=0,ht=-1,Lt="",bt=new AbortController,_t=(b,C,O,K)=>b.addEventListener(C,O,{signal:bt.signal,...K}),Pt=new hs({antialias:!0,alpha:!0});Pt.shadowMap.enabled=!0,Pt.shadowMap.type=mr,Pt.shadowMap.autoUpdate=!1,Pt.shadowMap.needsUpdate=!0;let vt=Pt.domElement;vt.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none;opacity:0;transition:opacity .6s ease";let L=document.createElement("div");L.style.cssText="position:absolute;inset:0;touch-action:pan-y pinch-zoom;cursor:pointer",i.append(vt,L);let se=new cr,xt=new ke(40,1,1.5,4.5),zt=new dr,Et=new fr;Et.castShadow=!0,Et.shadow.mapSize.set(f.light.shadowMapSize,f.light.shadowMapSize),Object.assign(Et.shadow.camera,{left:-.8,right:1,top:A+.18,bottom:-(A+.38),near:1.5,far:6.6}),Et.shadow.camera.updateProjectionMatrix(),Et.shadow.bias=-.001;let Vt=new Fe(new Wn(8,8),new hr);Vt.position.z=-1e-5,Vt.receiveShadow=!0,se.add(zt,Et,Et.target,Vt);let Gt=new ds({color:f.block.color,roughness:.92,metalness:0});Gt.onBeforeCompile=b=>{b.vertexShader=`varying float vWz;
`+b.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vWz = (modelMatrix * vec4(transformed, 1.0)).z;`),b.fragmentShader=`varying float vWz;
float h1(float n){return fract(sin(n*127.1)*43758.5453);}
`+b.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
      float L = vWz * ${(1/.0016).toFixed(1)}; float id = floor(L), fr = fract(L);
      diffuseColor.rgb *= 0.88 + 0.12 * h1(id) - 0.10 * smoothstep(0.7, 1.0, fr);`)};let Zt=new Gn(1,1,1),me=[1,-1].map(b=>{let C=new Fe(Zt,Gt);return C.castShadow=!0,C.receiveShadow=!0,C.userData.side=b,se.add(C),C});function w(){let b=f.block.thickness,C=0,O=0;for(let Tt=0;Tt<E;Tt++)yt(Tt)||(C+=I[Tt].flipProgress,O++);C=O?C/O:0;let K=b*(1-C),tt=b*C;mt.uBr.value=K,mt.uBl.value=tt;for(let Tt of me){let te=Math.max(Tt.userData.side>0?K:tt,1e-4)-8e-4;Tt.visible=te>.001,Tt.scale.set(.992,g-.006,Math.max(te,1e-4));let ae=Tt.userData.side<0?mt.uSquash.value:1;Tt.scale.x=.992*ae,Tt.position.set(Tt.userData.side*.496*ae,0,Math.max(te,1e-4)/2)}}let v=Pt.capabilities.getMaxAnisotropy(),$=new Map,nt=b=>{if(!$.has(b)){let C=new jt(b),O=new us(new Uint8Array([C.r,C.g,C.b].map(K=>Math.round(K*255)).concat(255)),1,1);O.colorSpace=We,O.needsUpdate=!0,$.set(b,O)}return $.get(b)},rt=b=>nt(typeof n=="function"?n(b):n),st=new us(new Uint8Array([128,128,128,255]),1,1);st.needsUpdate=!0;let kt=(()=>{let C=document.createElement("canvas");C.width=C.height=256;let O=C.getContext("2d"),K=O.createImageData(256,256),tt=new Float32Array(256*256);for(let te=0;te<tt.length;te++)tt[te]=Math.random();for(let te=0;te<256;te++)for(let ae=0;ae<256;ae++){let ye=te*256+ae,Jt=(tt[ye]+tt[te*256+(ae+1)%256]+tt[(te+1)%256*256+ae])/3,ne=Math.round((.55*tt[ye]+.45*Jt)*255);K.data.set([ne,ne,ne,255],ye*4)}O.putImageData(K,0,0);let Tt=new hi(C);return Tt.wrapS=Tt.wrapT=Hi,Tt.anisotropy=v,Tt})(),mt={LIFT_MAX_X:{value:0},LIFT_MAX_Z:{value:0},LIFT_DIP_X:{value:0},LIFT_DIP_Z:{value:0},LIFT_MID_X:{value:0},LIFT_MID_Z:{value:0},LIFT_EDGE_Z:{value:0},DEFORM:{value:0},PAPER_TRANSPARENCY:{value:0},INK_GLOSS:{value:0},PATTERN_SIZE:{value:0},TEXTURE_COLOR:{value:0},PATTERN_ROUGHNESS:{value:0},uPatternTex:{value:kt},uFloor:{value:-1e9},uCoverScale:{value:new Wt(1,1)},uBoardZ:{value:.05},uThickness:{value:0},uBr:{value:0},uBl:{value:0},uSquash:{value:1},uTabSquash:{value:1}},ct=`
    const float SHEET_ASPECT = ${g.toFixed(5)};
    const float NORMAL_EPSILON = 0.03;
    const float SHADOW_OFFSET_X = 0.004;
    uniform float LIFT_MAX_X, LIFT_MAX_Z, LIFT_DIP_X, LIFT_DIP_Z, LIFT_MID_X, LIFT_MID_Z, LIFT_EDGE_Z, DEFORM;
    uniform float PAPER_TRANSPARENCY, INK_GLOSS, PATTERN_SIZE, TEXTURE_COLOR, PATTERN_ROUGHNESS, uSpecks, uFloor;
  `,dt=`
    ${ct}
    uniform float uFlipProgress, uWrinkleSide, uBendAngle, uDirection, uStackLift;
    uniform vec2 uFold, uCurl, uFlipRotation;
    uniform float uRigid, uBoardZ, uThickness, uBr, uBl, uSquash, uTabSquash;
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
      // [bz] una pagina sola: la met\xE0 letta del libro si alza verso chi guarda e, vista dall'alto, diventa un filo; i segnapagina restano fuori
      if (p.x < 0.0 && uSquash < 1.0) { float ax = -p.x; p.x = -(min(ax, 1.0) * uSquash + max(ax - 1.0, 0.0) * uTabSquash); }
      return p;
    }
    vec3 _sheetP;
  `,Nt=(()=>{let b=new Wn(1,g,64,Math.round(64*g)),C=b.attributes.uv,O=C.count,K=(Jt,ne)=>{let fe=Math.sin(Jt*127.1+ne*311.7)*43758.5453;return fe-Math.floor(fe)},tt=(Jt,ne)=>{let fe=Math.floor(Jt),Ut=Math.floor(ne),Ct=Jt-fe,ce=ne-Ut,Ie=Ct*Ct*(3-2*Ct),Be=ce*ce*(3-2*ce);return fi(fi(K(fe,Ut),K(fe+1,Ut),Ie),fi(K(fe,Ut+1),K(fe+1,Ut+1),Ie),Be)},Tt=(Jt,ne)=>{let fe=Jt/1.2+614.98,Ut=(ne-.5)*g/1.2+357.42,Ct=0,ce=.5;for(let Ie=0;Ie<3;Ie++)Ct+=ce*tt(fe,Ut),ce*=.5,fe*=2,Ut*=2;return Ct},te=new Float32Array(O*3),ae=.03,ye=.03/g;for(let Jt=0;Jt<O;Jt++){let ne=C.getX(Jt),fe=C.getY(Jt);te[Jt*3]=Tt(ne,fe),te[Jt*3+1]=Tt(ne+ae,fe),te[Jt*3+2]=Tt(ne,fe+ye)}return b.setAttribute("aNoise",new Se(te,3)),b})(),ot=(()=>{let b=new Gn(1,g,1),C=b.attributes.position,O=C.count,K=new Float32Array(O*2),tt=new Float32Array(O);for(let Tt=0;Tt<O;Tt++)K[2*Tt]=C.getX(Tt)+.5,K[2*Tt+1]=C.getY(Tt)/g+.5,tt[Tt]=C.getZ(Tt)+.5;return b.setAttribute("uv",new Se(K,2)),b.setAttribute("aThick",new Se(tt,1)),b.setAttribute("aNoise",new Se(new Float32Array(O*3),3)),b})();Nt.setAttribute("aThick",new Se(new Float32Array(Nt.attributes.uv.count),1));let de=(b,C)=>.31+.69*(E>1?(b+(E-1-2*b)*(1-C))/(E-1):1);function Xt(b,C){let O=new ds({map:C,side:je,metalness:f.material.metalness,roughness:.5,bumpMap:st,bumpScale:0});O.onBeforeCompile=tt=>{Object.assign(tt.uniforms,b),tt.vertexShader=dt+tt.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
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
vThick = aThick;`),tt.fragmentShader=ct+`
        uniform sampler2D uBackMap, uPatternTex, uToneMap;
        uniform float uToneMean, uToneStd, uContrast, uRigid;
        uniform vec3 uTint;
        uniform float uTintSide;
        uniform vec2 uToneRepeat;
        varying vec2 vGrainUv;
        varying float vThick;
      `+tt.fragmentShader.replace("#include <normal_fragment_begin>",`
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
          gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.), pattern * TEXTURE_COLOR);`)};let K=new cs({depthPacking:Xa,side:je});return K.onBeforeCompile=tt=>{Object.assign(tt.uniforms,b),tt.vertexShader=dt+tt.vertexShader.replace("#include <begin_vertex>","vec3 transformed = _sheetPosition(uv, aNoise.x) - vec3(SHADOW_OFFSET_X, 0., 0.);")},{mat:O,depth:K}}function At(b){let C={uDirection:{value:1},uStackLift:{value:1},uFlipProgress:{value:0},uWrinkleSide:{value:-1},uBendAngle:{value:0},uFold:{value:new Wt(1,0)},uCurl:{value:new Wt(0,1)},uFlipRotation:{value:new Wt(1,0)},uBackMap:{value:rt(2*b+1)},uRigid:{value:0},...mt,uSpecks:{value:0},uToneMap:{value:st},uToneMean:{value:.5},uToneStd:{value:.1},uContrast:{value:0},uToneRepeat:{value:new Wt(1,g)},uTint:{value:new jt("#ffffff")},uTintSide:{value:1}},{mat:O,depth:K}=Xt(C,rt(2*b)),tt=new Fe(Nt,O);return tt.customDepthMaterial=K,tt.castShadow=!0,tt.receiveShadow=!0,se.add(tt),{mesh:tt,mat:O,depth:K,uniforms:C,flipProgress:b<M?1:0,direction:1,directionSmooth:1,curve:{curlArc:0,curlAngleDeg:0},curveTarget:{curlArc:0,curlAngleDeg:0},wobble:{arc:.5,angle:.5,tilt:0},liftBase:de(b,0),liftSpan:de(b,1)-de(b,0)}}for(let b=0;b<E;b++)I.push(At(b));function Mt(){let b=f.shape,C=f.material,O=f.specks,K=f.light;mt.LIFT_MAX_X.value=b.liftMaxX,mt.LIFT_MAX_Z.value=b.liftMaxZ,mt.LIFT_DIP_X.value=b.liftDipX,mt.LIFT_DIP_Z.value=b.liftDipZ,mt.LIFT_MID_X.value=b.liftMidX,mt.LIFT_MID_Z.value=b.liftMidZ,mt.LIFT_EDGE_Z.value=b.liftEdgeZ,mt.DEFORM.value=b.wrinkle,mt.PAPER_TRANSPARENCY.value=C.showThrough,mt.INK_GLOSS.value=C.inkGloss,mt.PATTERN_SIZE.value=O.size,mt.TEXTURE_COLOR.value=O.darken,mt.PATTERN_ROUGHNESS.value=O.roughen;let tt=f.cover;tt.hard&&(mt.DEFORM.value*=tt.pressPages),mt.uFloor.value=tt.hard?.002:-1e9,mt.uThickness.value=tt.thickness,Vt.position.z=-(tt.hard?tt.thickness:0)-1e-5,mt.uCoverScale.value.set(1+tt.overhang,1+2*tt.overhang/g),mt.uBoardZ.value=b.liftMaxZ+.5*mt.DEFORM.value+tt.raise,tt.hard&&tt.texture!==Yi&&_s(),Object.assign(_e,{scale:tt.grain,contrast:tt.contrast,bump:tt.bump,roughness:tt.roughness}),_e.height.repeat.set(tt.grain,tt.grain*g),$t(),zt.intensity=K.ambient,zt.color.set(K.sky),zt.groundColor.set(K.ground),Et.intensity=K.sun,Et.color.set(K.sunColor),Et.position.set(K.sunX,K.sunY,K.sunZ),Vt.material.opacity=K.shadow,D(),T=!0}let yt=b=>f.cover.hard&&E>1&&(b===0||b===E-1);function $t(){I.forEach((b,C)=>{let O=yt(C),K=O?_e:he,tt=b.uniforms;tt.uRigid.value=O?1:0,b.mesh.geometry=O?ot:Nt,tt.uSpecks.value=K.specks?1:0,tt.uToneMap.value=K.tone,tt.uToneMean.value=K.mean,tt.uToneStd.value=K.std,tt.uContrast.value=K.contrast,tt.uToneRepeat.value.set(K.scale,K.scale*g),tt.uTint.value.set(O?f.cover.color:"#ffffff"),tt.uTintSide.value=C===0?1:-1,b.mat.bumpMap=K.height,b.mat.bumpScale=K.bump,b.mat.roughness=K.roughness,b.mat.metalness=O?f.cover.metalness:f.material.metalness}),T=!0}let Rt=Object.assign({x:0,y:0,s:300},p||{}),Qt=null;function D(){let b=vt.clientHeight||1,C=vt.clientWidth||1,O=f.book.perspective,K=2.99*Math.tan(20*Math.PI/180)/Math.tan(O/2*Math.PI/180);xt.fov=O,xt.aspect=C/b,xt.position.set(Rt.x,Rt.y,K),xt.lookAt(Rt.x,Rt.y,0),xt.near=Math.max(.05,K-1.6),xt.far=K+1.6,xt.zoom=2*K*Math.tan(O/2*Math.PI/180)*Rt.s/b,xt.updateProjectionMatrix(),T=!0}function ft(b,C=0){if(!C){Qt=null,Object.assign(Rt,b),D();return}Qt={from:{...Rt},to:{...Rt,...b},start:performance.now(),dur:C},T=!0}function W(b){if(!Qt)return!1;let C=cn((b-Qt.start)/Qt.dur,0,1),O=C<.5?4*C*C*C:1-Math.pow(-2*C+2,3)/2;for(let K of["x","y","s"])Rt[K]=fi(Qt.from[K],Qt.to[K],O);return D(),C>=1&&(Qt=null),!0}let lt=new H;function pt(b,C,O=0){let K=vt.getBoundingClientRect();return lt.set(b,C,O).project(xt),{x:K.left+(lt.x+1)/2*K.width,y:K.top+(1-lt.y)/2*K.height}}let Kt=()=>2*Rt.s,ie=()=>({tone:st,height:st,specks:!1,mean:.5,std:.1,scale:1,contrast:0,bump:0,roughness:.5}),he=ie(),_e=ie(),ee={},Te=0,Ye=0,Yi=null,gs=b=>{let C=b instanceof HTMLCanvasElement?new hi(b):new Oe(b);return C.wrapS=C.wrapT=Hi,C.anisotropy=v,C.needsUpdate=!0,C};function qn(b,C){if(b.tone!==st&&b.tone.dispose(),b.height!==st&&b.height!==b.tone&&b.height.dispose(),C.spec.specks||!C.tone)Object.assign(b,{tone:st,height:st,specks:!!C.spec.specks,mean:.5,std:.1});else{let O=gs(C.tone);Object.assign(b,{tone:O,height:C.height===C.tone?O:gs(C.height),specks:!1,mean:C.mean,std:C.std})}}async function Zi(b){let C=++Te,O=await Ka(b);return k||C!==Te?O.spec:(qn(he,O),ee={...O.spec},Yn(O.spec))}function Yn({scale:b,contrast:C,bump:O,roughness:K}={}){for(let[tt,Tt]of Object.entries({scale:b,contrast:C,bump:O,roughness:K}))Tt!=null&&(he[tt]=Tt,ee[tt]=Tt);return he.height.repeat.set(he.scale,he.scale*g),$t(),{...ee}}async function _s(){let b=++Ye,C=f.cover.texture;try{let O=await Ka(C);if(k||b!==Ye)return;qn(_e,O),Yi=C,_e.height.repeat.set(_e.scale,_e.scale*g),$t()}catch(O){console.warn("page-turn-book: cover texture",O)}}let Ji=new pr,xs=new Wt,Sr=new rn(new H(0,0,1),0),mn=new H;function S(b,C){let O=vt.getBoundingClientRect();return xs.set((b-O.left)/O.width*2-1,-((C-O.top)/O.height)*2+1),Ji.setFromCamera(xs,xt),Ji.ray.intersectPlane(Sr,mn)?{angle:Math.atan2(mn.y,mn.x),dist:Math.hypot(mn.x,mn.y)}:null}let F=b=>{let C=Math.abs(b)*Math.PI/180;return m.cornerRollMax/(Math.PI*(Math.cos(C)/(1-A*Math.sin(C))))},z=b=>J.some(C=>C.sheet===b);function Z(b){let C=I[j];if(!(!C||j===b||!z(j)))return(C.direction>0?C.flipProgress>.5:C.flipProgress<.5)?void 0:C.curveTarget}function B(b,C){if(yt(b))return{curlArc:0,curlAngleDeg:0};let O=I[b].wobble,K=Z(b),tt=0;if(C){let Tt=C.angle*180/Math.PI;Tt>90&&(Tt=180-Tt),Tt<-90&&(Tt=-180-Tt),tt=cn(-(Tt/90)*m.angleMaxDeg*C.dist*(1-O.angle*m.curlAngleJitter)+O.tilt*m.curlTiltJitterDeg,-m.angleMaxDeg,m.angleMaxDeg)}return K?(tt=cn(tt,Math.min(0,K.curlAngleDeg),Math.max(0,K.curlAngleDeg)),{curlArc:cn(K.curlArc*fi(u.followArcGainMin,u.followArcGainMax,O.arc),K.curlArc,F(tt)),curlAngleDeg:tt}):{curlArc:Math.min(m.curlArc*(1-O.arc*m.curlArcJitter),F(tt)),curlAngleDeg:tt}}let gt=(b,C,O)=>B(O,S(b,C)),St=(b,C)=>{let O=I[b].wobble,K=-.42+.25*O.angle,tt=C?.92:-.92;return B(b,{angle:Math.atan2(K,tt),dist:Math.hypot(tt,K)})};function wt(b,C,O){b.curveTarget.curlArc=C.curlArc,b.curveTarget.curlAngleDeg=C.curlAngleDeg,O&&(b.curve.curlArc=C.curlArc,b.curve.curlAngleDeg=C.curlAngleDeg)}function Dt(b,C){if(!S(b,C))return null;let O=mn.x,K=mn.y;if(Math.abs(K)>A+.04||O<(f.book.single?-.08:-1.04)||O>1.04)return null;let tt=O>=(f.book.single?f.book.splitX:0);return(tt?M>=E:M<=0)?null:{sheet:tt?M:M-1,forward:tt}}let Bt=b=>{let C=J.findIndex(O=>O.sheet===b);C!==-1&&J.splice(C,1)};function Ot(b,C){j=b,I[b].wobble={arc:Math.random(),angle:Math.random(),tilt:2*Math.random()-1},M=C===1?b+1:b,Ar(),T=!0}function Ft(b,C,O,K=u.flipTime){Ot(b,O);let tt=I[b].flipProgress;Bt(b),J.push({sheet:b,from:tt,to:O,direction:C?1:-1,start:performance.now(),duration:1e3*K*Math.max(.2,Math.abs(O-tt))})}function ge(b,C){let O=cn((C-b.start)/b.duration,0,1);if(b.launch===void 0)return b.from+(b.to-b.from)*.5*(1-Math.cos(O*Math.PI));let K=O*O,tt=K*O,Tt=(tt-2*K+O)*b.launch+(3*K-2*tt)+(tt-K)*d.landingSpeed;return b.from+(b.to-b.from)*Tt}let Ce=(b,C,O)=>b+(C-b)*Math.min(O/y.speedUpSheets,1);function ve(b,C,O){if(b?M>=E:M<=0)return!1;let K=b?M:M-1,tt=I[K];return wt(tt,O?gt(O[0],O[1],K):C===0&&Q?tt.curveTarget:St(K,b),!0),tt.direction=b?1:-1,Ft(K,b,b?1:0,Ce(y.firstFlipTime,y.fastestFlipTime,C)),!0}let Pe=()=>{Q&&(clearTimeout(Q.timer),Q=null)},re=()=>{at&&(clearTimeout(at.timer),at=null)};function Ht(){if(!Q)return;Q.fired||(Q.fired=!0,X=null);let b=Ce(y.firstFlipTime,y.fastestFlipTime,Q.count)*Ce(y.firstGapShare,y.fastestGapShare,Q.count);ve(Q.forward,Q.count,Q.count===0?null:[Q.x,Q.y])?(Q.count++,Q.timer=setTimeout(Ht,1e3*b)):Pe()}function An(b){if(re(),Pe(),b?M>=E:M<=0)return;let C=b?M:M-1,O=I[C];wt(O,St(C,b),!0),O.direction=b?1:-1,Ft(C,b,b?1:0)}function le(b){if(b=cn(b|0,0,E),Pe(),re(),b===M)return;let C=b>M,O=16;if(Math.abs(b-M)>O){let Jt=C?b-O:b+O;for(let ne=Math.min(M,Jt);ne<Math.max(M,Jt);ne++)Bt(ne),I[ne].flipProgress=C?1:0;M=Jt,Ar(),T=!0}let K=f.jump,tt=Math.abs(b-M);if(tt===1){An(C);return}let Tt=fi(K.total0,K.total1,cn((tt-2)/6,0,1)),te=0;for(let Jt=0;Jt<tt-1;Jt++)te+=Math.pow(K.ratio,Jt);let ae=Math.max(.04,(Tt-K.last)/te);at={target:b,forward:C,count:0};let ye=()=>{if(!at||M===at.target){at=null;return}let Jt=at.count,fe=Math.abs(at.target-M)===1?K.last:fi(K.first,K.last*.8,Jt/Math.max(1,tt-2)),Ut=C?M:M-1,Ct=I[Ut];wt(Ct,St(Ut,C),!0),Ct.direction=C?1:-1,Ft(Ut,C,C?1:0,fe),at.count++,at.timer=setTimeout(ye,1e3*ae*Math.pow(K.ratio,Jt))};ye()}let hn=(b,C=d.clickSlopPx)=>N&&(b.clientX-N.x)**2+(b.clientY-N.y)**2>C*C;_t(L,"pointermove",b=>{if(Q&&hn(b,Q.fired?y.moveSlopPx:void 0)&&Pe(),X){X.progress=cn(X.base-(b.clientX-N.x)/X.rectWidth/d.turnFraction,0,1),X.targetCurve=gt(b.clientX,b.clientY,X.sheet),T=!0;return}Y=b.clientX,it=b.clientY,It=!0,T=!0}),_t(L,"pointerleave",()=>{It=!1,T=!0}),_t(L,"pointerdown",b=>{if(b.button!==0||!P||!f.book.interactive)return;let C=Dt(b.clientX,b.clientY);if(!C)return;re();let O=I[C.sheet];uc(C.sheet),z(C.sheet)||wt(O,gt(b.clientX,b.clientY,C.sheet),!0),Bt(C.sheet),N={x:b.clientX,y:b.clientY},X={sheet:C.sheet,forward:C.forward,base:O.flipProgress,progress:O.flipProgress,rectWidth:Kt()/.63,targetCurve:{...O.curveTarget},speed:0},O.direction=C.forward?1:-1,Pe(),Q={forward:C.forward,x:b.clientX,y:b.clientY,count:0,fired:!1,timer:setTimeout(Ht,1e3*y.startTime)};try{L.setPointerCapture(b.pointerId)}catch{}T=!0});function $i(b){if(Pe(),!X){N=null;return}let C=X,O=hn(b);X=null,N=null;try{L.releasePointerCapture(b.pointerId)}catch{}if(!O)return Ft(C.sheet,C.forward,C.forward?1:0);let K=(C.forward?C.progress-C.base:C.base-C.progress)>=d.commitProgress,tt=C.forward===K?1:0;Ot(C.sheet,tt);let Tt=I[C.sheet].flipProgress,te=Math.max(Math.abs(tt-Tt),.001),ae=d.fallTime*Math.pow(te,d.fallTimeExponent),ye=tt===1?C.speed:-C.speed;Bt(C.sheet),J.push({sheet:C.sheet,from:Tt,to:tt,direction:C.forward?1:-1,start:performance.now(),duration:1e3*ae,launch:cn(ye*ae/te,0,2)})}_t(L,"pointerup",$i),_t(L,"pointercancel",$i);function Zn(b,C){let O=b.uniforms,K=b.curve,tt=b.directionSmooth,Tt=b.flipProgress*Math.PI,te=Math.sin(Tt)*Math.PI*K.curlArc,ae=K.curlAngleDeg*Math.PI/180,ye=Math.cos(ae),Jt=Math.sin(ae),ne=1-A*Math.sin(Math.abs(ae)),fe=1-ne,Ut=Math.max(0,ye+Jt*A*Math.sign(Jt)-fe),Ct=Ut/ne*te,ce=Tt+.5*tt*(Ut*(Math.abs(Ct)<1e-4?0:(1-Math.cos(Ct))/Ct));O.uFlipProgress.value=b.flipProgress,O.uWrinkleSide.value=-Math.cos(Tt),O.uDirection.value=tt,O.uStackLift.value=C,O.uBendAngle.value=te,O.uFold.value.set(ye,Jt),O.uCurl.value.set(fe,ne),O.uFlipRotation.value.set(Math.cos(ce),Math.sin(ce))}function Ki(b,C){let O=!1;for(let K of["curlArc","curlAngleDeg"]){let tt=b.curveTarget[K]-b.curve[K];Math.abs(tt)<ja?b.curve[K]=b.curveTarget[K]:(b.curve[K]+=tt*C,O=!0)}return O}function we(b){let C=performance.now();for(let Ut=J.length-1;Ut>=0;Ut--){let Ct=J[Ut],ce=I[Ct.sheet];ce.flipProgress=ge(Ct,C),ce.direction=Ct.direction,C>=Ct.start+Ct.duration&&(J.splice(Ut,1),T=!0)}let O=et?Math.min((b-et)/1e3,.1):1/60;et=b;let K=1-Math.pow(.001,O/m.directionSmoothTime);if(X){let Ut=I[X.sheet],Ct=1-Math.pow(.01,O/d.progressSmoothTime),ce=(X.progress-Ut.flipProgress)*Ct;Ut.flipProgress+=ce,X.speed=O>0?ce/O:0,wt(Ut,X.targetCurve,!1)}let tt=J.length>0||X!==null;W(C)&&(tt=!0);let Tt=1-Math.pow(.001,O/_.smoothTime),te=1-Math.pow(.001,O/m.curveSmoothTime),ae=!It||!f.book.interactive||X||Q||at?null:Dt(Y,it),ye=ht;ht=ae&&P&&!z(ae.sheet)?ae.sheet:-1,ht!==-1&&wt(I[ht],gt(Y,it,ht),ht!==ye);for(let Ut=0;Ut<E;Ut++){let Ct=I[Ut];if(!z(Ut)&&!(X&&X.sheet===Ut)){let Ie=Ut>=M?0:1,Be=Ut===ht?Ie===0?_.progress:1-_.progress:Ie,un=Be-Ct.flipProgress;Math.abs(un)<ja?Ct.flipProgress!==Be&&(Ct.flipProgress=Be,T=!0):(Ct.flipProgress+=un*Tt,tt=!0);let gn=I[Ie===0?Ut-1:Ut+1];if(gn){let no=Ie===0?Math.min(Ct.flipProgress,Math.max(0,gn.flipProgress-_.gapToSheetAbove)):Math.max(Ct.flipProgress,Math.min(1,gn.flipProgress+_.gapToSheetAbove));no!==Ct.flipProgress&&(Ct.flipProgress=no,tt=!0)}Ct.direction=Ie===1&&Ct.flipProgress!==Ie?-1:1,Ct.directionSmooth=Ct.direction}let ce=Ct.direction-Ct.directionSmooth;Math.abs(ce)<ja?Ct.directionSmooth!==Ct.direction&&(Ct.directionSmooth=Ct.direction,T=!0):(Ct.directionSmooth+=ce*K,tt=!0),Ki(Ct,te)&&(tt=!0),Zn(Ct,Ct.liftBase+Ct.liftSpan*Ct.flipProgress)}w();let Jt=J.length>0||X!==null||Q!==null,ne=Jt||at!==null;x&&!ne&&setTimeout(()=>h?.(M),0),x=ne;let fe=M===0&&!Jt?"0 0 0 50%":M===E&&!Jt?"0 50% 0 0":"0";if(tt||T){for(let Ut=0;Ut<E;Ut++){let Ct=I[Ut].mesh,ce=Ut>=M?Ut-M:M-1-Ut,Ie=z(Ut)||X!==null&&X.sheet===Ut;Ct.visible=ce<=f.book.visibleSheets||Ie||yt(Ut);let Be=ce<3||Ie;Ct.castShadow!==Be&&(Ct.castShadow=Be),Ct.renderOrder=ce,I[Ut].tab&&(I[Ut].tab.renderOrder=ce)}Pt.shadowMap.needsUpdate=!0,Pt.render(se,xt),T=!1}}function Qe(){let b=q&&!document.hidden&&!k;b!==V&&(V=b,et=0,T=!0,Pt.setAnimationLoop(b?we:null))}_t(document,"visibilitychange",Qe);let pi=new IntersectionObserver(b=>{q=b[b.length-1].isIntersecting,Qe()},{rootMargin:"50% 0px"});pi.observe(i);function De(){let b=vt.clientWidth,C=vt.clientHeight;!b||!C||(Pt.setPixelRatio(Math.min(devicePixelRatio,f.book.maxDpr,Math.sqrt(15e6/(b*C)))),Pt.setSize(b,C,!1),D())}let mi=new ResizeObserver(De);mi.observe(vt),_t(window,"resize",De);let $e=new Map,tn=new Set,vs=new Map,Jn=[],br=(b,C)=>{let O=b>>1;return O>=M-C-1&&O<=M+C};function Er(b,C){let O=I[b>>1];b%2===0?O.mat.map=C:O.uniforms.uBackMap.value=C,T=!0}function Tr(){let b=2*M-.5,C=[];for(let O=Math.max(0,M-4);O<=Math.min(E-1,M+3);O++)for(let K of[2*O,2*O+1])K<t&&!$e.has(K)&&!tn.has(K)&&C.push(K);Jn=C.sort((O,K)=>Math.abs(O-b)-Math.abs(K-b));for(let[O,K]of $e)br(O,7)||(Er(O,rt(O)),K.dispose(),$e.delete(O));ys()}function uc(b){for(let C of[2*b+1,2*b+2,2*b])C<t&&!$e.has(C)&&!tn.has(C)&&(Jn=Jn.filter(O=>O!==C),Jn.unshift(C));ys()}function ys(){for(;tn.size<2&&Jn.length;){let b=Jn.shift();if($e.has(b)||tn.has(b)||!br(b,5))continue;tn.add(b);let C=vs.get(b)??0;Promise.resolve(e(b,{width:U,height:R})).then(O=>{if(tn.delete(b),!k){if((vs.get(b)??0)!==C){Tr();return}if(O&&br(b,6)){let K=new hi(O);K.colorSpace=We,K.anisotropy=v,Er(b,K),$e.set(b,K)}wr(),ys()}}).catch(O=>{tn.delete(b),console.warn(`page-turn-book: page ${b}`,O),wr(),ys()})}}function wr(){if(P||!G)return;[2*M-1,2*M].filter(C=>C>=0&&C<t).every(C=>$e.has(C)||!tn.has(C)&&!Jn.includes(C))&&(P=!0,vt.style.opacity="1",T=!0,c?.(),a&&M===0&&setTimeout(()=>M===0&&An(!0),700))}function Ar(){l?.(M,{left:M>0?2*M-1:null,right:M<E&&2*M<t?2*M:null}),Tr()}return Mt(),De(),Zi(r).catch(b=>console.warn(b)).finally(()=>{G=!0,wr()}),Ar(),Qe(),{next:()=>An(!0),prev:()=>An(!1),jumpTo:le,setView:ft,project:pt,addTab(b,{y0:C,y1:O,w:K,front:tt,back:Tt}){let te=I[b];if(!te)return;let ae=new Wn(1,1,4,10),ye=ae.attributes.uv,Jt=ye.count;for(let un=0;un<Jt;un++)ye.setXY(un,1+ye.getX(un)*K,C+ye.getY(un)*(O-C));ae.setAttribute("aNoise",new Se(new Float32Array(Jt*3),3)),ae.setAttribute("aThick",new Se(new Float32Array(Jt),1));let ne=un=>{let gn=new hi(un);return gn.colorSpace=We,gn.anisotropy=Math.min(4,v),gn.repeat.set(1/K,1/(O-C)),gn.offset.set(-1/K,-C/(O-C)),gn},fe=ne(tt),Ut=ne(Tt),Ct={...te.uniforms,uBackMap:{value:Ut}},{mat:ce,depth:Ie}=Xt(Ct,fe);ce.roughness=.7,ce.color.setScalar(1.3);let Be=new Fe(ae,ce);Be.customDepthMaterial=Ie,Be.frustumCulled=!1,Be.castShadow=!0,Be.receiveShadow=!1,se.add(Be),te.tab=Be,T=!0},progress:b=>I[b]?I[b].flipProgress:0,setSquash(b,C){mt.uSquash.value=b,mt.uTabSquash.value=C,T=!0},get view(){return{...Rt}},get busy(){return J.length>0||at!==null||X!==null||Qt!==null},get renderer(){return Pt},redraw(){T=!0},goToPage:b=>le(Math.ceil(cn(b|0,0,t-1)/2)),setPaper:Zi,tunePaper:Yn,refreshPage(b){vs.set(b,(vs.get(b)??0)+1);let C=$e.get(b);C&&(C.dispose(),$e.delete(b),Er(b,rt(b))),Tr()},get paper(){return{...ee}},set(b,C){if(typeof b=="object")for(let[O,K]of Object.entries(b))Object.assign(f[O],K);else{let[O,K]=b.split(".");f[O][K]=C}Mt()},get config(){return structuredClone(f)},get sheet(){return M},get sheetCount(){return E},destroy(){k=!0,Pe(),re(),bt.abort(),pi.disconnect(),mi.disconnect(),Pt.setAnimationLoop(null);for(let b of I)b.mat.dispose(),b.depth.dispose();for(let b of $e.values())b.dispose();for(let b of $.values())b.dispose();for(let b of[he,_e])b.tone!==st&&b.tone.dispose(),b.height!==st&&b.height!==b.tone&&b.height.dispose();st.dispose(),kt.dispose(),Nt.dispose(),ot.dispose(),Vt.geometry.dispose(),Vt.material.dispose(),Pt.dispose(),vt.remove(),L.remove()}}}function cn(i,t,e){return Math.max(t,Math.min(e,i))}function fi(i,t,e){return i+(t-i)*e}var nc="#2e2119",ms="#9a3a2b",ic="#3b1f3f",sc="#6e2d5c",rc="#8b6c4c",ac="#6d5640",Cm="#7a3a2c",yr='"EB Garamond", Baskervville, Georgia, serif',Qa=new Map;function qi(i){return Qa.has(i)||Qa.set(i,new Promise((t,e)=>{let n=new Image;n.decoding="async",n.onload=()=>(n.decode?n.decode().catch(()=>{}):Promise.resolve()).then(()=>t(n)),n.onerror=()=>e(new Error("img "+i)),n.src=i})),Qa.get(i)}async function lc(){document.fonts&&await Promise.all(["400 40px","italic 400 40px","500 40px"].map(i=>document.fonts.load(`${i} "EB Garamond"`).catch(()=>{})))}var oc=/[aeiouàèéìíòóùú]/i,Pm="bcdfgkptv";function Im(i){let t=[],e=i.toLowerCase();if(i.length<6||/[’'\-]/.test(i))return t;let n=0;for(;n<e.length;){if(!oc.test(e[n])){n++;continue}let s=n+1;for(;s<e.length&&!oc.test(e[s]);)s++;if(s>=e.length)break;let r=e.slice(n+1,s),o;if(r.length===0){n=s;continue}r.length===1?o=n+1:r[0]===r[1]?o=n+2:r[0]==="s"||(r[1]==="l"||r[1]==="r")&&Pm.includes(r[0])||/^(gn|gl|ch|gh|sc|qu)/.test(r)?o=n+1:o=n+2,o>=2&&i.length-o>=3&&t.push(o),n=s}return t}function Mr(i,t={},e=[]){for(let n of i.childNodes)if(n.nodeType===3)e.push({t:n.nodeValue,...t});else if(n.nodeType===1&&n.tagName==="BR")e.push({t:"\u2028",...t});else if(n.nodeType===1){let s={...t};(n.tagName==="I"||n.tagName==="EM")&&(s.i=!t.i),(n.tagName==="B"||n.tagName==="STRONG")&&(s.b=1),n.classList.contains("ph")&&(s.ph=1),Mr(n,s,e)}return e}function to(i){let t=[],e=null;for(let n of i){let s=n.t.replace(/[ \t\n\r]+/g," ").split(/( |\u2028)/);for(let r of s){if(r===" "){e&&(t.push(e),e=null);continue}if(r==="\u2028"){e&&(t.push(e),e=null),t.push("BR");continue}r&&(e||=[]).push({...n,t:r})}}return e&&t.push(e),t}function cc({paper:i,ill:t}){let e,n,s=null,r=(f,m)=>`${f.i?"italic ":""}${f.b||f.w500?500:400} ${m}px ${f.ph?"Figtree, system-ui, sans-serif":yr}`,o=(f,m)=>(e.font=r(f,f.ph?m*.62:m),e.measureText(f.t).width),a=(f,m)=>f.reduce((_,y)=>_+o(y,m),0);function l(f,m,_,y=()=>0){let d=[],u=[],E=0,g=0,A=(e.font=r({},m),e.measureText(" ").width),U=R=>{d.push({ws:u,w:E,last:R,space:A}),u=[],E=0,g++};for(let R=0;R<f.length;R++){if(f[R]==="BR"){u.length&&U(!0);continue}let M=f[R],I=a(M,m),J=_-y(g),x=(u.length?E+A:0)+I;if(x<=J){E=x,u.push(M);continue}if(M.length===1&&!M[0].ph&&M[0].t.replace(/[^\p{L}]/gu,"").length>=10&&J-(u.length?E:0)>J*.24){let T=M[0].t,et=Im(T.replace(/[.,;:!?»«)(]/g,"")).reverse(),j=!1;for(let P of et){let G=[{...M[0],t:T.slice(0,P)+"-"}],V=a(G,m);if((u.length?E+A:0)+V<=J&&T.length-P>=4&&P>=4){E=(u.length?E+A:0)+V,u.push(G),U(!1),f=f.slice(),f.splice(R+1,0,[{...M[0],t:T.slice(P)}]),j=!0;break}}if(j)continue}u.length&&U(!1),E=I,u.push(M)}return u.length&&U(!0),d}function c(f,m,_,y,d,u,E){let g=f.ws.length-1,A=f.space,U=m;if(u==="justify"&&!f.last&&g>0){let M=(y-f.w)/g;M<f.space*2.2&&(A=f.space+M)}let R=f.ws.reduce((M,I)=>M+a(I,d),0)+A*g;u==="center"?U=m+(y-R)/2:u==="right"&&(U=m+y-R);for(let M of f.ws){for(let I of M)e.font=r(I,I.ph?d*.62:d),e.fillStyle=I.color||E,e.fillText(I.t,U,I.ph?_-d*.15:_),U+=e.measureText(I.t).width;U+=A}}function h(f,m,_,y,d,u,E,g={}){e.font=r(g,d),e.fillStyle=E;let A=[...f],U=A.map(I=>e.measureText(I).width+u*d),R=U.reduce((I,J)=>I+J,0)-u*d,M=m+(y-R)/2;return A.forEach((I,J)=>{e.fillText(I,M,_),M+=U[J]}),R}function p(f,m,_,y){let d=m.y,u=m.x,E=m.w,g=n*_,A=(R,M)=>{let I=g*(M.size||1),J=I*(M.lh||1.36),x=to(Mr(R));M.upper&&(x=x.map(q=>q==="BR"?q:q.map(k=>({...k,t:k.t.toUpperCase()})))),x=x.map(q=>q==="BR"?q:q.map(k=>({...k,...M.st||{}})));let T=null,et=0,j=0;if(M.dc&&x.length){let q=x[0][0],k=q.t[0];T=k,x[0]=[{...q,t:q.t.slice(1)},...x[0].slice(1)],e.font=`500 ${I*3.3}px ${yr}`,et=e.measureText(k).width+I*.12,j=2}let P=M.indent||0,G=l(x,I,E-P,q=>q<j?et:0);for(let q=1;q<=8&&G.length>1&&G[G.length-1].ws.length<2&&M.align!=="center";q++)G=l(x,I,(E-P)*(1-.025*q),k=>k<j?et:0);d+=(M.mt||0)*g,y&&T&&(e.font=`500 ${I*3.3}px ${yr}`,e.fillStyle="rgba(154,58,43,.35)",e.fillText(T,u+P+I*.05,d+I*.98+J+I*.04),e.fillStyle=sc,e.fillText(T,u+P,d+I*.98+J)),G.forEach((q,k)=>{let N=d+I*.98+k*J-(J-I)*0;y&&c(q,u+P+(k<j?et:0),N,E-P-(k<j?et:0),I,M.align||"left",M.color||nc)});let V=G.length*J+(J-I)*.2;y&&M.bar&&(e.fillStyle="rgba(154,58,43,.6)",e.fillRect(u,d-g*.1,Math.max(1,g*.05),V+g*.2)),d+=V+(M.mb??.45)*g},U=(R,M)=>{let I=R.querySelector("img"),J=I&&t.get(I.getAttribute("src"));d+=.35*g;let x=s&&!R.classList.contains("fig--fin");if(x&&(d+=s.pad),J){let et=x?s.h:Math.min(M*g,E*J.naturalHeight/J.naturalWidth),j=et*J.naturalWidth/J.naturalHeight;y&&(e.globalCompositeOperation="multiply",e.drawImage(J,u+(E-j)/2,d,j,et)),d+=et}let T=R.querySelector("figcaption");T&&(d+=.2*g,A(T,{size:.76,lh:1.25,align:"center",st:{i:1},color:ac,mb:0})),d+=.15*g+.45*g+(x?s.pad:0)};for(let R of f.children){let M=R.classList,I=R.tagName;if(M.contains("pg-cap"))d+=.1*g,y&&h(R.textContent.toUpperCase(),u,d+g*.66*.8,E,g*.66,.24,ms),d+=g*.66*1.36+.15*g;else if(M.contains("pg-h"))A(R,{size:1.42,lh:1.1,align:"center",st:{w500:1},color:ic,mb:.2}),y&&(e.fillStyle="rgba(154,58,43,.75)",e.fillRect(u+E/2-g*1.1,d,g*2.2,Math.max(1,g*.045))),d+=.55*g;else if(M.contains("pg-h4"))A(R,{size:1.14,lh:1.15,align:"left",st:{i:1},color:ms,mb:.35});else if(M.contains("dc"))A(R,{dc:1});else if(M.contains("pg-note"))d+=.25*g,A(R,{size:.92,align:"left",st:{i:1},color:Cm,indent:.7*g,bar:1});else if(M.contains("pg-ex"))d+=1.2*g,y&&(e.fillStyle="rgba(110,45,92,.5)",e.fillRect(u+E/2-2*g,d,4*g,Math.max(1,g*.04))),d+=.7*g,A(R,{align:"center",st:{i:1},color:sc});else if(M.contains("fr-k"))y&&h(R.textContent.toUpperCase(),u,d+g*.66*.8,E,g*.66,.3,ms),d+=g*.66*1.5+.45*g;else if(M.contains("fr-t"))A(R,{size:2.45,lh:1,align:"center",st:{i:1},color:ic,mt:.05});else if(M.contains("fr-s"))A(R,{align:"center",st:{i:1},color:ac});else if(M.contains("fr-i"))d+=.6*g,A(R,{size:.7,lh:1.5,align:"center",upper:1,color:rc});else if(I==="FIGURE")U(R,M.contains("fig--front")?13:M.contains("fig--fin")?5.6:M.contains("fig--sm")?7.4:10.6);else if(I==="DL"){d+=.15*g,y&&(e.fillStyle="rgba(139,108,76,.4)",e.fillRect(u,d,E,Math.max(1,g*.03)));for(let J of R.children){let x=J.querySelector("dt"),T=J.querySelector("dd"),et=g*1.36+.44*g;if(y){let j=d+.22*g+g*.98;e.font=r({},g*.74),e.fillStyle=ms;let P=u;for(let k of x.textContent.toUpperCase())e.fillText(k,P,j-g*.05),P+=e.measureText(k).width+.14*g*.74;let G=to(Mr(T)).map(k=>k.map(N=>({...N,i:!N.i}))),V=l(G,g,E-(P-u)-.8*g);V.forEach((k,N)=>c(k,P+.8*g,j+N*g*1.36,E-(P-u)-.8*g,g,"right",nc));let q=(V.length-1)*g*1.36;e.strokeStyle="rgba(139,108,76,.55)",e.lineWidth=Math.max(1,g*.035),e.setLineDash([g*.05,g*.12]),e.beginPath(),e.moveTo(u,d+et+q),e.lineTo(u+E,d+et+q),e.stroke(),e.setLineDash([]),d+=q}else{let j=to(Mr(T));e.font=r({},g*.74);let P=[...x.textContent].length*.14*g*.74+e.measureText(x.textContent.toUpperCase()).width;d+=(l(j,g,E-P-.8*g).length-1)*g*1.36}d+=et}d+=.6*g}else if(I==="UL"){d+=.2*g;for(let J of R.children)y&&(e.font=r({},g),e.fillStyle=ms,e.fillText("\xB6",u,d+g*.98)),A(J,{align:"left",indent:1.05*g,mb:.5})}else I==="P"&&A(R,{})}return d-m.y}return function(m,_,y,d,u={}){let E=document.createElement("canvas");E.width=_,E.height=y,e=E.getContext("2d"),n=_/22,e.drawImage(i,0,0,_,y);let g=d==="l",A=e.createLinearGradient(g?_:0,0,g?0:_,0);A.addColorStop(0,"rgba(70,46,20,.26)"),A.addColorStop(.05,"rgba(84,58,28,.07)"),A.addColorStop(.14,"rgba(84,58,28,0)"),A.addColorStop(1,"rgba(84,58,28,0)"),e.fillStyle=A,e.fillRect(0,0,_,y);let U=e.createRadialGradient(_*(g?.4:.6),y*.45,Math.min(_,y)*.45,_*(g?.4:.6),y*.45,Math.max(_,y)*.78);if(U.addColorStop(0,"rgba(120,86,42,0)"),U.addColorStop(1,"rgba(120,86,42,.16)"),e.fillStyle=U,e.fillRect(0,0,_,y),!m)return E;e.globalCompositeOperation="multiply",e.textBaseline="alphabetic";let R=2.15*n,M=2.2*n,I=1.45*n,J=1.85*n,x={x:g?I:J,y:R,w:_-I-J,h:y-R-M},T=m.querySelector(".pg-rh"),et=m.querySelector(".pg-fo"),j=m.querySelector(".pg-body");if(T){let P=h(T.textContent.toUpperCase(),0,1.05*n+.6*n*.9,_,.6*n,.2,rc);e.fillStyle="rgba(139,108,76,.55)";let G=1.05*n+.6*n*.62,V=2.6*n;e.fillRect(_/2-P/2-.9*n-V,G,V,Math.max(1,n*.03)),e.fillRect(_/2+P/2+.9*n,G,V,Math.max(1,n*.03))}if(et){e.font=r({},.72*n),e.fillStyle="#7b5f43";let P=et.textContent,G=e.measureText(P).width;e.fillText(P,(_-G)/2,y-.95*n)}if(j){let P=m.classList.contains("pg--front"),G=1,V=p(j,x,G,!1);for(;V>x.h&&G>.84;)G-=.02,V=p(j,x,G,!1);P&&(x.y+=Math.max(0,(x.h-V)/2)+.25*n);let q=[...j.querySelectorAll("figure:not(.fig--fin)")],k=q.length===1&&!P&&q[0].querySelector("img"),N=k&&t.get(k.getAttribute("src"));if(N){s={h:0,pad:0};let X=n*G,Q=p(j,x,G,!1),at=x.h-Q,It=N.naturalHeight/N.naturalWidth,Y=Math.min(x.w*.8*It,x.w*.8,12.5*X),it=Math.min(Y,at-1.4*X);it>=4.5*X?(s.h=it,s.pad=Math.min((at-it)/2,4.2*X)*.9,V=p(j,x,G,!1)):s=null}p(j,x,G,!0),u.fill=V/x.h,u.scale=G}return s=null,e.globalCompositeOperation="source-over",E}}function eo(i,t,e,n,s=!1){let r=document.createElement("canvas");r.width=t,r.height=e;let o=r.getContext("2d");s&&(o.translate(t,0),o.scale(-1,1)),o.drawImage(i,0,0,t,e),s&&o.setTransform(1,0,0,1,0,0);let a=o.createLinearGradient(s?t:0,0,s?0:t,0);if(a.addColorStop(0,"rgba(0,0,0,.5)"),a.addColorStop(.035,"rgba(0,0,0,.1)"),a.addColorStop(.05,"rgba(255,235,200,.07)"),a.addColorStop(.08,"rgba(0,0,0,0)"),o.fillStyle=a,o.fillRect(0,0,t,e),n&&!s){let l=t/22*1.62*1.05,c=e*.155+l*.8;o.font=`italic 400 ${l}px ${yr}`,o.textAlign="center",o.fillStyle="rgba(10,4,12,.75)",o.fillText(n,t/2+l*.02,c+l*.045);let h=o.createLinearGradient(0,c-l*.8,0,c+l*.1);h.addColorStop(0,"#f3dfa9"),h.addColorStop(.45,"#c9a96e"),h.addColorStop(.75,"#a5824a"),h.addColorStop(1,"#7f6234"),o.fillStyle=h,o.fillText(n,t/2,c),o.globalCompositeOperation="overlay",o.fillStyle="rgba(255,240,200,.25)",o.fillText(n,t/2,c-l*.02),o.globalCompositeOperation="source-over",o.textAlign="start"}return r}function hc(i,t,e){let n=document.createElement("canvas");return n.width=t,n.height=e,n.getContext("2d").drawImage(i,0,0,t,e),n}async function zm(i,t){let e=performance.now(),n=t.host,s=t.single,r=[...i.querySelectorAll(".lb-flip .pg")],o=N=>r.find(X=>+X.dataset.n===N),a;if(!s)a=r.map(N=>({el:N,side:N.classList.contains("pg--l")?"l":"r"}));else{let N=r.filter(at=>at.classList.contains("pg--text")),X=r.filter(at=>at.classList.contains("pg--end")),Q=r[r.length-1];a=[{el:r[0]},{el:X[0],side:"l"}];for(let at of N)a.push({el:at,side:"r"},{el:null,side:"l",blank:1});a.push({el:X[1],side:"r"},{el:Q})}let l=a.length,c=N=>t.base+N,h=Math.min(window.devicePixelRatio||1,t.maxDpr||2),p=Math.min(t.maxTex||1024,Math.ceil(t.pw*h/64)*64),f=Math.round(p*1.4),[m,_,y]=await Promise.all([qi(c("img/carta-antica.webp")),qi(c("img/copertina.webp")),qi(c("img/sguardia.webp")),lc()]),d=new Map,u=[...new Set(r.flatMap(N=>[...N.querySelectorAll(".pg-body img")].map(X=>X.getAttribute("src"))))],E=Promise.all(u.map(N=>qi(new URL(N,location.href).href).then(X=>d.set(N,X)).catch(()=>{}))),g=cc({paper:m,ill:d}),A={fills:{}},U=(i.querySelector(".cv-t")||{}).textContent||"",R=new Map;async function M(N){if(R.has(N))return R.get(N);let X=a[N],Q;if(!X)return null;if(N===0)Q=eo(_,p,f,U.trim());else if(N===l-1)Q=eo(_,p,f,"",!0);else if(X.el&&X.el.classList.contains("pg--end"))Q=hc(y,p,f);else if(X.blank)Q=g(null,p,f,"l");else{await E;let at={};Q=g(X.el,p,f,X.side,at),A.fills[X.el.dataset.n]=at}return R.set(N,Q),Q}let I=N=>{let X=a.findIndex(Q=>Q.el&&+Q.el.dataset.n===N);return Math.ceil(X/2)},J=!1,x=null,T=ec(n,{pageCount:l,renderPage:N=>M(N),pageColor:"#e6d9bb",paper:t.paper||"laid",view:t.view,config:{book:{aspect:1.4,pageWidth:p,single:s,interactive:!1,maxDpr:t.maxDpr||2,fit:1,perspective:26,visibleSheets:6},cover:{hard:!0,texture:"smooth",overhang:.018,thickness:.02,raise:.004,color:"#ffffff",grain:1,contrast:0,bump:0,roughness:.86,metalness:0},material:{metalness:.04,showThrough:.05,inkGloss:.18},light:{shadowMapSize:t.shadowMap||2048,ambient:1,sun:2.6,sunX:-3,sunY:2.4,sunZ:3.6,shadow:.5,sky:"#fff6e8",ground:"#8a7f73",sunColor:"#fff1dc"},flip:{flipTime:.9}},onSpread:(N,X)=>t.onSpread&&t.onSpread(N,X),onReady:()=>{J=!0,A.tti=performance.now()-e,x&&x()},onIdle:N=>t.onIdle&&t.onIdle(N)}),et=.085,j=[...i.querySelectorAll(".tab")],P=j.length,G=Math.min(.19,(.9-(P-1)*.045)/Math.max(1,P)),V=await Promise.all([0,1,2,3].map(N=>qi(c(`img/linguetta-${N}.webp`)))),q=j.map((N,X)=>{let Q=+N.dataset.to,at=a.findIndex(Pt=>Pt.el&&+Pt.el.dataset.n===Q),It=1-.05-X*(G+.045),Y=It-G,it=96,ht=Math.round(it*G*1.4/et),Lt=N.textContent.trim(),bt=Pt=>{let vt=document.createElement("canvas");vt.width=it,vt.height=ht;let L=vt.getContext("2d");L.drawImage(V[X%4],0,0,it,ht),L.globalCompositeOperation="saturation",L.fillStyle="rgba(128,128,128,.45)",L.fillRect(0,0,it,ht),L.globalCompositeOperation="source-over",L.fillStyle="rgba(238,229,210,.82)",L.fillRect(0,0,it,ht);let se=L.createLinearGradient(Pt?0:it,0,Pt?it:0,0);se.addColorStop(0,"rgba(40,24,14,.5)"),se.addColorStop(.22,"rgba(40,24,14,.12)"),se.addColorStop(.45,"rgba(40,24,14,0)"),L.fillStyle=se,L.fillRect(0,0,it,ht),L.save(),L.translate(it*(Pt?.58:.42),ht/2),L.rotate(Pt?Math.PI/2:-Math.PI/2);let xt=Math.round(it*.42);for(L.font=`italic 500 ${xt}px "EB Garamond", Georgia, serif`;L.measureText(Lt).width>ht*.88&&xt>20;)xt-=1,L.font=`italic 500 ${xt}px "EB Garamond", Georgia, serif`;return L.textAlign="center",L.textBaseline="middle",L.fillStyle="rgba(255,248,232,.5)",L.fillText(Lt,0,1.5),L.fillStyle="#2a160c",L.fillText(Lt,0,0),L.restore(),vt},_t=at>=0?at>>1:0;return T.addTab(_t,{y0:Y,y1:It,w:et,front:bt(!0),back:bt(!1)}),{sheet:_t,y0:Y,y1:It,n:Q}});s&&T.setSquash(.07,.4),await new Promise(N=>{J?N():x=N});let k=window.requestIdleCallback||(N=>setTimeout(N,60));return(function N(X){X>=l||k(()=>{M(X).then(()=>N(X+1))},{timeout:400})})(1),{book:T,stats:A,PW:p,PH:f,pageCount:l,list:a,tabs:q,TW:et,squash:s?[.07,.4]:null,sheetForPage:I,renderPage:M,visible(N){return s?[a[2*N]]:[a[2*N-1],a[2*N]]}}}export{zm as init};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
