var hc=0,no=1,uc=2;var mr=1,dc=2,Sn=3,zn=0,qe=1,je=2,Fn=0,Oi=1,io=2,so=3,ro=4,fc=5,si=100,pc=101,mc=102,ao=103,oo=104,gc=200,_c=201,xc=202,vc=203,oa=204,la=205,yc=206,Mc=207,Sc=208,bc=209,Ec=210,Tc=211,wc=212,Ac=213,Rc=214,Cc=0,Pc=1,Ic=2,Gs=3,Lc=4,Dc=5,Uc=6,Nc=7,Il=0,Fc=1,Oc=2,On=0,Bc=1,zc=2,kc=3,Hc=4,Vc=5,Gc=6,Wc=7;var Ll=300,ki=301,Hi=302,ca=303,ha=304,gr=306,Vi=1e3,an=1001,ua=1002,Le=1003,lo=1004;var Qi=1005;var Ge=1006,Ar=1007;var ai=1008;var Bn=1009,Xc=1010,qc=1011,Ga=1012,Dl=1013,Nn=1014,bn=1015,as=1016,Ul=1017,Nl=1018,oi=1020,Yc=1021,on=1023,Zc=1024,Jc=1025,li=1026,Gi=1027,$c=1028,Fl=1029,Kc=1030,Ol=1031,Bl=1033,Rr=33776,Cr=33777,Pr=33778,Ir=33779,co=35840,ho=35841,uo=35842,fo=35843,zl=36196,po=37492,mo=37496,go=37808,_o=37809,xo=37810,vo=37811,yo=37812,Mo=37813,So=37814,bo=37815,Eo=37816,To=37817,wo=37818,Ao=37819,Ro=37820,Co=37821,Lr=36492,Po=36494,Io=36495,jc=36283,Lo=36284,Do=36285,Uo=36286;var Ws=2300,Xs=2301,Dr=2302,No=2400,Fo=2401,Oo=2402;var Qc=3200,Wa=3201,kl=0,th=1,Un="",We="srgb",Xn="srgb-linear",Xa="display-p3",_r="display-p3-linear",qs="linear",de="srgb",Ys="rec709",Zs="p3";var _i=7680;var Bo=519,eh=512,nh=513,ih=514,Hl=515,sh=516,rh=517,ah=518,oh=519,zo=35044;var ko="300 es",da=1035,En=2e3,Js=2001,kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ur=Math.PI/180,fa=180/Math.PI;function ms(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function Xe(i,t,e){return Math.max(t,Math.min(e,i))}function lh(i,t){return(i%t+t)%t}function Nr(i,t,e){return(1-e)*i+e*t}function Ho(i){return(i&i-1)===0&&i!==0}function pa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ts(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Xt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],p=n[2],m=n[5],v=n[8],M=s[0],d=s[3],u=s[6],T=s[1],g=s[4],w=s[7],I=s[2],C=s[5],y=s[8];return r[0]=o*M+a*T+l*I,r[3]=o*d+a*g+l*C,r[6]=o*u+a*w+l*y,r[1]=c*M+h*T+f*I,r[4]=c*d+h*g+f*C,r[7]=c*u+h*w+f*y,r[2]=p*M+m*T+v*I,r[5]=p*d+m*g+v*C,r[8]=p*u+m*w+v*y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,p=a*l-h*r,m=c*r-o*l,v=e*f+n*p+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/v;return t[0]=f*M,t[1]=(s*c-h*n)*M,t[2]=(a*n-s*o)*M,t[3]=p*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-a*e)*M,t[6]=m*M,t[7]=(n*l-c*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fr.makeScale(t,e)),this}rotate(t){return this.premultiply(Fr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Fr=new Jt;function Vl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function $s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ch(){let i=$s("canvas");return i.style.display="block",i}var Vo={};function hh(i){i in Vo||(Vo[i]=!0,console.warn(i))}var Go=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wo=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ms={[Xn]:{transfer:qs,primaries:Ys,toReference:i=>i,fromReference:i=>i},[We]:{transfer:de,primaries:Ys,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[_r]:{transfer:qs,primaries:Zs,toReference:i=>i.applyMatrix3(Wo),fromReference:i=>i.applyMatrix3(Go)},[Xa]:{transfer:de,primaries:Zs,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Wo),fromReference:i=>i.applyMatrix3(Go).convertLinearToSRGB()}},uh=new Set([Xn,_r]),oe={enabled:!0,_workingColorSpace:Xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!uh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Ms[t].toReference,s=Ms[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ms[i].primaries},getTransfer:function(i){return i===Un?qs:Ms[i].transfer}};function Bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Or(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var xi,Ks=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xi===void 0&&(xi=$s("canvas")),xi.width=t.width,xi.height=t.height;let n=xi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=$s("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bi(e[n]/255)*255):e[n]=Bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},dh=0,js=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=ms(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Br(s[o].image)):r.push(Br(s[o]))}else r=Br(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Br(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ks.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var fh=0,Oe=class i extends kn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=an,s=an,r=Ge,o=ai,a=on,l=Bn,c=i.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=ms(),this.name="",this.source=new js(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ll)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vi:t.x=t.x-Math.floor(t.x);break;case an:t.x=t.x<0?0:1;break;case ua:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vi:t.y=t.y-Math.floor(t.y);break;case an:t.y=t.y<0?0:1;break;case ua:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}};Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Ll;Oe.DEFAULT_ANISOTROPY=1;var Re=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],p=l[1],m=l[5],v=l[9],M=l[2],d=l[6],u=l[10];if(Math.abs(h-p)<.01&&Math.abs(f-M)<.01&&Math.abs(v-d)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+M)<.1&&Math.abs(v+d)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let g=(c+1)/2,w=(m+1)/2,I=(u+1)/2,C=(h+p)/4,y=(f+M)/4,U=(v+d)/4;return g>w&&g>I?g<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(g),s=C/n,r=y/n):w>I?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=C/s,r=U/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=y/r,s=U/r),this.set(n,s,r,e),this}let T=Math.sqrt((d-v)*(d-v)+(f-M)*(f-M)+(p-h)*(p-h));return Math.abs(T)<.001&&(T=1),this.x=(d-v)/T,this.y=(f-M)/T,this.z=(p-h)/T,this.w=Math.acos((c+m+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ma=class extends kn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);let r=new Oe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new js(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends ma{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Qs=class extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ga=class extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],p=r[o+0],m=r[o+1],v=r[o+2],M=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=p,t[e+1]=m,t[e+2]=v,t[e+3]=M;return}if(f!==M||l!==p||c!==m||h!==v){let d=1-a,u=l*p+c*m+h*v+f*M,T=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){let I=Math.sqrt(g),C=Math.atan2(I,u*T);d=Math.sin(d*C)/I,a=Math.sin(a*C)/I}let w=a*T;if(l=l*d+p*w,c=c*d+m*w,h=h*d+v*w,f=f*d+M*w,d===1-a){let I=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=I,c*=I,h*=I,f*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],p=r[o+1],m=r[o+2],v=r[o+3];return t[e]=a*v+h*f+l*m-c*p,t[e+1]=l*v+h*p+c*f-a*m,t[e+2]=c*v+h*m+a*p-l*f,t[e+3]=h*v-a*f-l*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),p=l(n/2),m=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=p*h*f+c*m*v,this._y=c*m*f-p*h*v,this._z=c*h*v+p*m*f,this._w=c*h*f-p*m*v;break;case"YXZ":this._x=p*h*f+c*m*v,this._y=c*m*f-p*h*v,this._z=c*h*v-p*m*f,this._w=c*h*f+p*m*v;break;case"ZXY":this._x=p*h*f-c*m*v,this._y=c*m*f+p*h*v,this._z=c*h*v+p*m*f,this._w=c*h*f-p*m*v;break;case"ZYX":this._x=p*h*f-c*m*v,this._y=c*m*f+p*h*v,this._z=c*h*v-p*m*f,this._w=c*h*f+p*m*v;break;case"YZX":this._x=p*h*f+c*m*v,this._y=c*m*f+p*h*v,this._z=c*h*v-p*m*f,this._w=c*h*f-p*m*v;break;case"XZY":this._x=p*h*f-c*m*v,this._y=c*m*f-p*h*v,this._z=c*h*v+p*m*f,this._w=c*h*f+p*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],p=n+a+f;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>f){let m=2*Math.sqrt(1+n-a-f);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){let m=2*Math.sqrt(1+a-n-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xo.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zr.copy(this).projectOnVector(t),this.sub(zr)}reflect(t){return this.sub(zr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zr=new G,Xo=new Hn,ci=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,en):en.fromBufferAttribute(r,o),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ss.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ss.copy(n.boundingBox)),Ss.applyMatrix4(t.matrixWorld),this.union(Ss)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(es),bs.subVectors(this.max,es),vi.subVectors(t.a,es),yi.subVectors(t.b,es),Mi.subVectors(t.c,es),Rn.subVectors(yi,vi),Cn.subVectors(Mi,yi),Kn.subVectors(vi,Mi);let e=[0,-Rn.z,Rn.y,0,-Cn.z,Cn.y,0,-Kn.z,Kn.y,Rn.z,0,-Rn.x,Cn.z,0,-Cn.x,Kn.z,0,-Kn.x,-Rn.y,Rn.x,0,-Cn.y,Cn.x,0,-Kn.y,Kn.x,0];return!kr(e,vi,yi,Mi,bs)||(e=[1,0,0,0,1,0,0,0,1],!kr(e,vi,yi,Mi,bs))?!1:(Es.crossVectors(Rn,Cn),e=[Es.x,Es.y,Es.z],kr(e,vi,yi,Mi,bs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},_n=[new G,new G,new G,new G,new G,new G,new G,new G],en=new G,Ss=new ci,vi=new G,yi=new G,Mi=new G,Rn=new G,Cn=new G,Kn=new G,es=new G,bs=new G,Es=new G,jn=new G;function kr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){jn.fromArray(i,r);let a=s.x*Math.abs(jn.x)+s.y*Math.abs(jn.y)+s.z*Math.abs(jn.z),l=t.dot(jn),c=e.dot(jn),h=n.dot(jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ph=new ci,ns=new G,Hr=new G,os=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ph.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ns.subVectors(t,this.center);let e=ns.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ns,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ns.copy(t.center).add(Hr)),this.expandByPoint(ns.copy(t.center).sub(Hr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},xn=new G,Vr=new G,Ts=new G,Pn=new G,Gr=new G,ws=new G,Wr=new G,tr=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xn.copy(this.origin).addScaledVector(this.direction,e),xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Vr.copy(t).add(e).multiplyScalar(.5),Ts.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(Vr);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ts),a=Pn.dot(this.direction),l=-Pn.dot(Ts),c=Pn.lengthSq(),h=Math.abs(1-o*o),f,p,m,v;if(h>0)if(f=o*l-a,p=o*a-l,v=r*h,f>=0)if(p>=-v)if(p<=v){let M=1/h;f*=M,p*=M,m=f*(f+o*p+2*a)+p*(o*f+p+2*l)+c}else p=r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;else p=-r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;else p<=-v?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c):p<=v?(f=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Vr).addScaledVector(Ts,p),m}intersectSphere(t,e){xn.subVectors(t.center,this.origin);let n=xn.dot(this.direction),s=xn.dot(xn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),h>=0?(r=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-p.z)*f,l=(t.max.z-p.z)*f):(a=(t.max.z-p.z)*f,l=(t.min.z-p.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,xn)!==null}intersectTriangle(t,e,n,s,r){Gr.subVectors(e,t),ws.subVectors(n,t),Wr.crossVectors(Gr,ws);let o=this.direction.dot(Wr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pn.subVectors(this.origin,t);let l=a*this.direction.dot(ws.crossVectors(Pn,ws));if(l<0)return null;let c=a*this.direction.dot(Gr.cross(Pn));if(c<0||l+c>o)return null;let h=-a*Pn.dot(Wr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ve=class i{constructor(t,e,n,s,r,o,a,l,c,h,f,p,m,v,M,d){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,f,p,m,v,M,d)}set(t,e,n,s,r,o,a,l,c,h,f,p,m,v,M,d){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=p,u[3]=m,u[7]=v,u[11]=M,u[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Si.setFromMatrixColumn(t,0).length(),r=1/Si.setFromMatrixColumn(t,1).length(),o=1/Si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let p=o*h,m=o*f,v=a*h,M=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=m+v*c,e[5]=p-M*c,e[9]=-a*l,e[2]=M-p*c,e[6]=v+m*c,e[10]=o*l}else if(t.order==="YXZ"){let p=l*h,m=l*f,v=c*h,M=c*f;e[0]=p+M*a,e[4]=v*a-m,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=m*a-v,e[6]=M+p*a,e[10]=o*l}else if(t.order==="ZXY"){let p=l*h,m=l*f,v=c*h,M=c*f;e[0]=p-M*a,e[4]=-o*f,e[8]=v+m*a,e[1]=m+v*a,e[5]=o*h,e[9]=M-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let p=o*h,m=o*f,v=a*h,M=a*f;e[0]=l*h,e[4]=v*c-m,e[8]=p*c+M,e[1]=l*f,e[5]=M*c+p,e[9]=m*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let p=o*l,m=o*c,v=a*l,M=a*c;e[0]=l*h,e[4]=M-p*f,e[8]=v*f+m,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*f+v,e[10]=p-M*f}else if(t.order==="XZY"){let p=o*l,m=o*c,v=a*l,M=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=p*f+M,e[5]=o*h,e[9]=m*f-v,e[2]=v*f-m,e[6]=a*h,e[10]=M*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mh,t,gh)}lookAt(t,e,n){let s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),In.crossVectors(n,Ze),In.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),In.crossVectors(n,Ze)),In.normalize(),As.crossVectors(Ze,In),s[0]=In.x,s[4]=As.x,s[8]=Ze.x,s[1]=In.y,s[5]=As.y,s[9]=Ze.y,s[2]=In.z,s[6]=As.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],p=n[9],m=n[13],v=n[2],M=n[6],d=n[10],u=n[14],T=n[3],g=n[7],w=n[11],I=n[15],C=s[0],y=s[4],U=s[8],J=s[12],_=s[1],S=s[5],q=s[9],j=s[13],R=s[2],$=s[6],V=s[10],K=s[14],W=s[3],L=s[7],B=s[11],z=s[15];return r[0]=o*C+a*_+l*R+c*W,r[4]=o*y+a*S+l*$+c*L,r[8]=o*U+a*q+l*V+c*B,r[12]=o*J+a*j+l*K+c*z,r[1]=h*C+f*_+p*R+m*W,r[5]=h*y+f*S+p*$+m*L,r[9]=h*U+f*q+p*V+m*B,r[13]=h*J+f*j+p*K+m*z,r[2]=v*C+M*_+d*R+u*W,r[6]=v*y+M*S+d*$+u*L,r[10]=v*U+M*q+d*V+u*B,r[14]=v*J+M*j+d*K+u*z,r[3]=T*C+g*_+w*R+I*W,r[7]=T*y+g*S+w*$+I*L,r[11]=T*U+g*q+w*V+I*B,r[15]=T*J+g*j+w*K+I*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],p=t[10],m=t[14],v=t[3],M=t[7],d=t[11],u=t[15];return v*(+r*l*f-s*c*f-r*a*p+n*c*p+s*a*m-n*l*m)+M*(+e*l*m-e*c*p+r*o*p-s*o*m+s*c*h-r*l*h)+d*(+e*c*f-e*a*m-r*o*f+n*o*m+r*a*h-n*c*h)+u*(-s*a*h-e*l*f+e*a*p+s*o*f-n*o*p+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],p=t[10],m=t[11],v=t[12],M=t[13],d=t[14],u=t[15],T=f*d*c-M*p*c+M*l*m-a*d*m-f*l*u+a*p*u,g=v*p*c-h*d*c-v*l*m+o*d*m+h*l*u-o*p*u,w=h*M*c-v*f*c+v*a*m-o*M*m-h*a*u+o*f*u,I=v*f*l-h*M*l-v*a*p+o*M*p+h*a*d-o*f*d,C=e*T+n*g+s*w+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let y=1/C;return t[0]=T*y,t[1]=(M*p*r-f*d*r-M*s*m+n*d*m+f*s*u-n*p*u)*y,t[2]=(a*d*r-M*l*r+M*s*c-n*d*c-a*s*u+n*l*u)*y,t[3]=(f*l*r-a*p*r-f*s*c+n*p*c+a*s*m-n*l*m)*y,t[4]=g*y,t[5]=(h*d*r-v*p*r+v*s*m-e*d*m-h*s*u+e*p*u)*y,t[6]=(v*l*r-o*d*r-v*s*c+e*d*c+o*s*u-e*l*u)*y,t[7]=(o*p*r-h*l*r+h*s*c-e*p*c-o*s*m+e*l*m)*y,t[8]=w*y,t[9]=(v*f*r-h*M*r-v*n*m+e*M*m+h*n*u-e*f*u)*y,t[10]=(o*M*r-v*a*r+v*n*c-e*M*c-o*n*u+e*a*u)*y,t[11]=(h*a*r-o*f*r-h*n*c+e*f*c+o*n*m-e*a*m)*y,t[12]=I*y,t[13]=(h*M*s-v*f*s+v*n*p-e*M*p-h*n*d+e*f*d)*y,t[14]=(v*a*s-o*M*s-v*n*l+e*M*l+o*n*d-e*a*d)*y,t[15]=(o*f*s-h*a*s+h*n*l-e*f*l-o*n*p+e*a*p)*y,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,p=r*c,m=r*h,v=r*f,M=o*h,d=o*f,u=a*f,T=l*c,g=l*h,w=l*f,I=n.x,C=n.y,y=n.z;return s[0]=(1-(M+u))*I,s[1]=(m+w)*I,s[2]=(v-g)*I,s[3]=0,s[4]=(m-w)*C,s[5]=(1-(p+u))*C,s[6]=(d+T)*C,s[7]=0,s[8]=(v+g)*y,s[9]=(d-T)*y,s[10]=(1-(p+M))*y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Si.set(s[0],s[1],s[2]).length(),o=Si.set(s[4],s[5],s[6]).length(),a=Si.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],nn.copy(this);let c=1/r,h=1/o,f=1/a;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=f,nn.elements[9]*=f,nn.elements[10]*=f,e.setFromRotationMatrix(nn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=En){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s),m,v;if(a===En)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Js)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=En){let l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(o-r),p=(e+t)*c,m=(n+s)*h,v,M;if(a===En)v=(o+r)*f,M=-2*f;else if(a===Js)v=r*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Si=new G,nn=new ve,mh=new G(0,0,0),gh=new G(1,1,1),In=new G,As=new G,Ze=new G,qo=new ve,Yo=new Hn,fn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yo.setFromEuler(this),this.setFromQuaternion(Yo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER="XYZ";var ls=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},_h=0,Zo=new G,bi=new Hn,vn=new ve,Rs=new G,is=new G,xh=new G,vh=new Hn,Jo=new G(1,0,0),$o=new G(0,1,0),Ko=new G(0,0,1),yh={type:"added"},Mh={type:"removed"},Xr={type:"childadded",child:null},qr={type:"childremoved",child:null},He=class i extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new fn,n=new Hn,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new Jt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.multiply(bi),this}rotateOnWorldAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.premultiply(bi),this}rotateX(t){return this.rotateOnAxis(Jo,t)}rotateY(t){return this.rotateOnAxis($o,t)}rotateZ(t){return this.rotateOnAxis(Ko,t)}translateOnAxis(t,e){return Zo.copy(t).applyQuaternion(this.quaternion),this.position.add(Zo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jo,t)}translateY(t){return this.translateOnAxis($o,t)}translateZ(t){return this.translateOnAxis(Ko,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Rs.copy(t):Rs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(is,Rs,this.up):vn.lookAt(Rs,is,this.up),this.quaternion.setFromRotationMatrix(vn),s&&(vn.extractRotation(s.matrixWorld),bi.setFromRotationMatrix(vn),this.quaternion.premultiply(bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(yh),Xr.child=t,this.dispatchEvent(Xr),Xr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mh),qr.child=t,this.dispatchEvent(qr),qr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(vn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,t,xh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,vh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),p=o(t.skeletons),m=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};He.DEFAULT_UP=new G(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var sn=new G,yn=new G,Yr=new G,Mn=new G,Ei=new G,Ti=new G,jo=new G,Zr=new G,Jr=new G,$r=new G,Di=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),sn.subVectors(t,e),s.cross(sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){sn.subVectors(s,e),yn.subVectors(n,e),Yr.subVectors(t,e);let o=sn.dot(sn),a=sn.dot(yn),l=sn.dot(Yr),c=yn.dot(yn),h=yn.dot(Yr),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let p=1/f,m=(c*l-a*h)*p,v=(o*h-a*l)*p;return r.set(1-m-v,v,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mn.x),l.addScaledVector(o,Mn.y),l.addScaledVector(a,Mn.z),l)}static isFrontFacing(t,e,n,s){return sn.subVectors(n,e),yn.subVectors(t,e),sn.cross(yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),sn.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ei.subVectors(s,n),Ti.subVectors(r,n),Zr.subVectors(t,n);let l=Ei.dot(Zr),c=Ti.dot(Zr);if(l<=0&&c<=0)return e.copy(n);Jr.subVectors(t,s);let h=Ei.dot(Jr),f=Ti.dot(Jr);if(h>=0&&f<=h)return e.copy(s);let p=l*f-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ei,o);$r.subVectors(t,r);let m=Ei.dot($r),v=Ti.dot($r);if(v>=0&&m<=v)return e.copy(r);let M=m*c-l*v;if(M<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(n).addScaledVector(Ti,a);let d=h*v-m*f;if(d<=0&&f-h>=0&&m-v>=0)return jo.subVectors(r,s),a=(f-h)/(f-h+(m-v)),e.copy(s).addScaledVector(jo,a);let u=1/(d+M+p);return o=M*u,a=p*u,e.copy(n).addScaledVector(Ei,o).addScaledVector(Ti,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function Kr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=lh(t,1),e=Xe(e,0,1),n=Xe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Kr(o,r,t+1/3),this.g=Kr(o,r,t),this.b=Kr(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){let n=Gl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}copyLinearToSRGB(t){return this.r=Or(t.r),this.g=Or(t.g),this.b=Or(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return oe.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Xe(Ne.r*255,0,255))*65536+Math.round(Xe(Ne.g*255,0,255))*256+Math.round(Xe(Ne.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Ne.copy(this),e);let n=Ne.r,s=Ne.g,r=Ne.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=We){oe.fromWorkingColorSpace(Ne.copy(this),t);let e=Ne.r,n=Ne.g,s=Ne.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ln),this.setHSL(Ln.h+t,Ln.s+e,Ln.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ln),t.getHSL(Cs);let n=Nr(Ln.h,Cs.h,e),s=Nr(Ln.s,Cs.s,e),r=Nr(Ln.l,Cs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ne=new Qt;Qt.NAMES=Gl;var Sh=0,Vn=class extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=Oi,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oa,this.blendDst=la,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oa&&(n.blendSrc=this.blendSrc),this.blendDst!==la&&(n.blendDst=this.blendDst),this.blendEquation!==si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},er=class extends Vn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Me=new G,Ps=new Xt,Se=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return hh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ps.fromBufferAttribute(this,e),Ps.applyMatrix3(t),this.setXY(e,Ps.x,Ps.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ts(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ts(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ts(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ts(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ts(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zo&&(t.usage=this.usage),t}};var nr=class extends Se{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ir=class extends Se{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Tn=class extends Se{constructor(t,e,n){super(new Float32Array(t),e,n)}},bh=0,Ke=new ve,jr=new He,wi=new G,Je=new ci,ss=new ci,Ae=new G,hi=class i extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vl(t)?ir:nr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return jr.lookAt(t),jr.updateMatrix(),this.applyMatrix4(jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Tn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new os);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ss.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(Je.min,ss.min),Je.expandByPoint(Ae),Ae.addVectors(Je.max,ss.max),Je.expandByPoint(Ae)):(Je.expandByPoint(ss.min),Je.expandByPoint(ss.max))}Je.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ae));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ae.fromBufferAttribute(a,c),l&&(wi.fromBufferAttribute(t,c),Ae.add(wi)),s=Math.max(s,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Se(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new G,l[U]=new G;let c=new G,h=new G,f=new G,p=new Xt,m=new Xt,v=new Xt,M=new G,d=new G;function u(U,J,_){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,J),f.fromBufferAttribute(n,_),p.fromBufferAttribute(r,U),m.fromBufferAttribute(r,J),v.fromBufferAttribute(r,_),h.sub(c),f.sub(c),m.sub(p),v.sub(p);let S=1/(m.x*v.y-v.x*m.y);isFinite(S)&&(M.copy(h).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(S),d.copy(f).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(S),a[U].add(M),a[J].add(M),a[_].add(M),l[U].add(d),l[J].add(d),l[_].add(d))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let U=0,J=T.length;U<J;++U){let _=T[U],S=_.start,q=_.count;for(let j=S,R=S+q;j<R;j+=3)u(t.getX(j+0),t.getX(j+1),t.getX(j+2))}let g=new G,w=new G,I=new G,C=new G;function y(U){I.fromBufferAttribute(s,U),C.copy(I);let J=a[U];g.copy(J),g.sub(I.multiplyScalar(I.dot(J))).normalize(),w.crossVectors(C,J);let S=w.dot(l[U])<0?-1:1;o.setXYZW(U,g.x,g.y,g.z,S)}for(let U=0,J=T.length;U<J;++U){let _=T[U],S=_.start,q=_.count;for(let j=S,R=S+q;j<R;j+=3)y(t.getX(j+0)),y(t.getX(j+1)),y(t.getX(j+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,h=new G,f=new G;if(t)for(let p=0,m=t.count;p<m;p+=3){let v=t.getX(p+0),M=t.getX(p+1),d=t.getX(p+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,d),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,d),a.add(h),l.add(h),c.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,p=new c.constructor(l.length*h),m=0,v=0;for(let M=0,d=l.length;M<d;M++){a.isInterleavedBufferAttribute?m=l[M]*a.data.stride+a.offset:m=l[M]*h;for(let u=0;u<h;u++)p[v++]=c[m++]}return new Se(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let p=c[h],m=t(p,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,p=c.length;f<p;f++){let m=c[f];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let p=0,m=f.length;p<m;p++)h.push(f[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qo=new ve,Qn=new tr,Is=new os,tl=new G,Ai=new G,Ri=new G,Ci=new G,Qr=new G,Ls=new G,Ds=new Xt,Us=new Xt,Ns=new Xt,el=new G,nl=new G,il=new G,Fs=new G,Os=new G,Fe=class extends He{constructor(t=new hi,e=new er){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ls.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Qr.fromBufferAttribute(f,t),o?Ls.addScaledVector(Qr,h):Ls.addScaledVector(Qr.sub(e),h))}e.add(Ls)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(r),Qn.copy(t.ray).recast(t.near),!(Is.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Is,tl)===null||Qn.origin.distanceToSquared(tl)>(t.far-t.near)**2))&&(Qo.copy(r).invert(),Qn.copy(t.ray).applyMatrix4(Qo),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,M=p.length;v<M;v++){let d=p[v],u=o[d.materialIndex],T=Math.max(d.start,m.start),g=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let w=T,I=g;w<I;w+=3){let C=a.getX(w),y=a.getX(w+1),U=a.getX(w+2);s=Bs(this,u,t,n,c,h,f,C,y,U),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let v=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let d=v,u=M;d<u;d+=3){let T=a.getX(d),g=a.getX(d+1),w=a.getX(d+2);s=Bs(this,o,t,n,c,h,f,T,g,w),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,M=p.length;v<M;v++){let d=p[v],u=o[d.materialIndex],T=Math.max(d.start,m.start),g=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let w=T,I=g;w<I;w+=3){let C=w,y=w+1,U=w+2;s=Bs(this,u,t,n,c,h,f,C,y,U),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let v=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let d=v,u=M;d<u;d+=3){let T=d,g=d+1,w=d+2;s=Bs(this,o,t,n,c,h,f,T,g,w),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};function Eh(i,t,e,n,s,r,o,a){let l;if(t.side===qe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===zn,a),l===null)return null;Os.copy(a),Os.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Os);return c<e.near||c>e.far?null:{distance:c,point:Os.clone(),object:i}}function Bs(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ai),i.getVertexPosition(l,Ri),i.getVertexPosition(c,Ci);let h=Eh(i,t,e,n,Ai,Ri,Ci,Fs);if(h){s&&(Ds.fromBufferAttribute(s,a),Us.fromBufferAttribute(s,l),Ns.fromBufferAttribute(s,c),h.uv=Di.getInterpolation(Fs,Ai,Ri,Ci,Ds,Us,Ns,new Xt)),r&&(Ds.fromBufferAttribute(r,a),Us.fromBufferAttribute(r,l),Ns.fromBufferAttribute(r,c),h.uv1=Di.getInterpolation(Fs,Ai,Ri,Ci,Ds,Us,Ns,new Xt)),o&&(el.fromBufferAttribute(o,a),nl.fromBufferAttribute(o,l),il.fromBufferAttribute(o,c),h.normal=Di.getInterpolation(Fs,Ai,Ri,Ci,el,nl,il,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new G,materialIndex:0};Di.getNormal(Ai,Ri,Ci,f.normal),h.face=f}return h}var Gn=class i extends hi{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],p=0,m=0;v("z","y","x",-1,-1,n,e,t,o,r,0),v("z","y","x",1,-1,n,e,-t,o,r,1),v("x","z","y",1,1,t,n,e,s,o,2),v("x","z","y",1,-1,t,n,-e,s,o,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Tn(c,3)),this.setAttribute("normal",new Tn(h,3)),this.setAttribute("uv",new Tn(f,2));function v(M,d,u,T,g,w,I,C,y,U,J){let _=w/y,S=I/U,q=w/2,j=I/2,R=C/2,$=y+1,V=U+1,K=0,W=0,L=new G;for(let B=0;B<V;B++){let z=B*S-j;for(let et=0;et<$;et++){let yt=et*_-q;L[M]=yt*T,L[d]=z*g,L[u]=R,c.push(L.x,L.y,L.z),L[M]=0,L[d]=0,L[u]=C>0?1:-1,h.push(L.x,L.y,L.z),f.push(et/y),f.push(1-B/U),K+=1}}for(let B=0;B<U;B++)for(let z=0;z<y;z++){let et=p+z+$*B,yt=p+z+$*(B+1),Z=p+(z+1)+$*(B+1),st=p+(z+1)+$*B;l.push(et,yt,st),l.push(yt,Z,st),W+=6}a.addGroup(m,W,J),m+=W,p+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Wi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ze(i){let t={};for(let e=0;e<i.length;e++){let n=Wi(i[e]);for(let s in n)t[s]=n[s]}return t}function Th(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wl(i){return i.getRenderTarget()===null?i.outputColorSpace:oe.workingColorSpace}var wh={clone:Wi,merge:ze},Ah=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends Vn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ah,this.fragmentShader=Rh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=Th(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},sr=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=En}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Dn=new G,sl=new Xt,rl=new Xt,ke=class extends sr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=fa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fa*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z)}getViewSize(t,e){return this.getViewBounds(t,sl,rl),e.subVectors(rl,sl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ur*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Pi=-90,Ii=1,_a=class extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ke(Pi,Ii,t,e);s.layers=this.layers,this.add(s);let r=new ke(Pi,Ii,t,e);r.layers=this.layers,this.add(r);let o=new ke(Pi,Ii,t,e);o.layers=this.layers,this.add(o);let a=new ke(Pi,Ii,t,e);a.layers=this.layers,this.add(a);let l=new ke(Pi,Ii,t,e);l.layers=this.layers,this.add(l);let c=new ke(Pi,Ii,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,p,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},rr=class extends Oe{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ki,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xa=class extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new rr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ge}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gn(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:Fn});r.uniforms.tEquirect.value=e;let o=new Fe(s,r),a=e.minFilter;return e.minFilter===ai&&(e.minFilter=Ge),new _a(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ta=new G,Ch=new G,Ph=new Jt,rn=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ta.subVectors(n,e).cross(Ch.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ta),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ph.getNormalMatrix(t),s=this.coplanarPoint(ta).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ti=new os,zs=new G,cs=class{constructor(t=new rn,e=new rn,n=new rn,s=new rn,r=new rn,o=new rn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],p=s[7],m=s[8],v=s[9],M=s[10],d=s[11],u=s[12],T=s[13],g=s[14],w=s[15];if(n[0].setComponents(l-r,p-c,d-m,w-u).normalize(),n[1].setComponents(l+r,p+c,d+m,w+u).normalize(),n[2].setComponents(l+o,p+h,d+v,w+T).normalize(),n[3].setComponents(l-o,p-h,d-v,w-T).normalize(),n[4].setComponents(l-a,p-f,d-M,w-g).normalize(),e===En)n[5].setComponents(l+a,p+f,d+M,w+g).normalize();else if(e===Js)n[5].setComponents(a,f,M,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(zs.x=s.normal.x>0?t.max.x:t.min.x,zs.y=s.normal.y>0?t.max.y:t.min.y,zs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(zs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Xl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ih(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let f=c.array,p=c.usage,m=f.byteLength,v=i.createBuffer();i.bindBuffer(h,v),i.bufferData(h,f,p),c.onUploadCallback();let M;if(f instanceof Float32Array)M=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)M=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)M=i.SHORT;else if(f instanceof Uint32Array)M=i.UNSIGNED_INT;else if(f instanceof Int32Array)M=i.INT;else if(f instanceof Int8Array)M=i.BYTE;else if(f instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:M,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,f){let p=h.array,m=h._updateRange,v=h.updateRanges;if(i.bindBuffer(f,c),m.count===-1&&v.length===0&&i.bufferSubData(f,0,p),v.length!==0){for(let M=0,d=v.length;M<d;M++){let u=v[M];e?i.bufferSubData(f,u.start*p.BYTES_PER_ELEMENT,p,u.start,u.count):i.bufferSubData(f,u.start*p.BYTES_PER_ELEMENT,p.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=n.get(c);if(f===void 0)n.set(c,s(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,h),f.version=c.version}}return{get:o,remove:a,update:l}}var Wn=class i extends hi{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,p=e/l,m=[],v=[],M=[],d=[];for(let u=0;u<h;u++){let T=u*p-o;for(let g=0;g<c;g++){let w=g*f-r;v.push(w,-T,0),M.push(0,0,1),d.push(g/a),d.push(1-u/l)}}for(let u=0;u<l;u++)for(let T=0;T<a;T++){let g=T+c*u,w=T+c*(u+1),I=T+1+c*(u+1),C=T+1+c*u;m.push(g,w,C),m.push(w,I,C)}this.setIndex(m),this.setAttribute("position",new Tn(v,3)),this.setAttribute("normal",new Tn(M,3)),this.setAttribute("uv",new Tn(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Lh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dh=`#ifdef USE_ALPHAHASH
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
#endif`,Uh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Oh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bh=`#ifdef USE_AOMAP
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
#endif`,zh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kh=`#ifdef USE_BATCHING
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
#endif`,Vh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xh=`#ifdef USE_IRIDESCENCE
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
#endif`,qh=`#ifdef USE_BUMPMAP
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
#endif`,Yh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$h=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,eu=`#define PI 3.141592653589793
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
} // validated`,nu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iu=`vec3 transformedNormal = objectNormal;
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
#endif`,su=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ru=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,au=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ou=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lu="gl_FragColor = linearToOutputTexel( gl_FragColor );",cu=`
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
}`,hu=`#ifdef USE_ENVMAP
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
#endif`,uu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,du=`#ifdef USE_ENVMAP
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
#endif`,fu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pu=`#ifdef USE_ENVMAP
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
#endif`,mu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_u=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vu=`#ifdef USE_GRADIENTMAP
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
}`,yu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Mu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Su=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Eu=`uniform bool receiveShadow;
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
#endif`,Tu=`#ifdef USE_ENVMAP
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
#endif`,wu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Au=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ru=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pu=`PhysicalMaterial material;
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
#endif`,Iu=`struct PhysicalMaterial {
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
}`,Lu=`
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
#endif`,Du=`#if defined( RE_IndirectDiffuse )
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
#endif`,Uu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ou=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Bu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ku=`#ifdef USE_MAP
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
#endif`,Vu=`#if defined( USE_POINTS_UV )
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
#endif`,Gu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yu=`#ifdef USE_MORPHNORMALS
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
#endif`,Zu=`#ifdef USE_MORPHTARGETS
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
#endif`,Ju=`#ifdef USE_MORPHTARGETS
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
#endif`,$u=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ku=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ju=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ed=`#ifdef USE_NORMALMAP
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
#endif`,nd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,id=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ad=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,od=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ld=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ud=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,md=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_d=`float getShadowMask() {
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
}`,xd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vd=`#ifdef USE_SKINNING
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
#endif`,yd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Md=`#ifdef USE_SKINNING
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
#endif`,Sd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ed=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Td=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wd=`#ifdef USE_TRANSMISSION
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
#endif`,Ad=`#ifdef USE_TRANSMISSION
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
#endif`,Rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Id=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ld=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dd=`uniform sampler2D t2D;
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
}`,Ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Od=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`#include <common>
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
}`,zd=`#if DEPTH_PACKING == 3200
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
}`,kd=`#define DISTANCE
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
}`,Vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wd=`uniform float scale;
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
}`,Xd=`uniform vec3 diffuse;
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
}`,qd=`#include <common>
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
}`,Yd=`uniform vec3 diffuse;
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
}`,Zd=`#define LAMBERT
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
}`,Jd=`#define LAMBERT
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
}`,$d=`#define MATCAP
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
}`,Kd=`#define MATCAP
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
}`,jd=`#define NORMAL
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
}`,Qd=`#define NORMAL
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
}`,tf=`#define PHONG
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
}`,ef=`#define PHONG
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
}`,nf=`#define STANDARD
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
}`,sf=`#define STANDARD
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
}`,rf=`#define TOON
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
}`,af=`#define TOON
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
}`,of=`uniform float size;
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
}`,lf=`uniform vec3 diffuse;
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
}`,cf=`#include <common>
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
}`,hf=`uniform vec3 color;
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
}`,uf=`uniform float rotation;
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
}`,df=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Lh,alphahash_pars_fragment:Dh,alphamap_fragment:Uh,alphamap_pars_fragment:Nh,alphatest_fragment:Fh,alphatest_pars_fragment:Oh,aomap_fragment:Bh,aomap_pars_fragment:zh,batching_pars_vertex:kh,batching_vertex:Hh,begin_vertex:Vh,beginnormal_vertex:Gh,bsdfs:Wh,iridescence_fragment:Xh,bumpmap_pars_fragment:qh,clipping_planes_fragment:Yh,clipping_planes_pars_fragment:Zh,clipping_planes_pars_vertex:Jh,clipping_planes_vertex:$h,color_fragment:Kh,color_pars_fragment:jh,color_pars_vertex:Qh,color_vertex:tu,common:eu,cube_uv_reflection_fragment:nu,defaultnormal_vertex:iu,displacementmap_pars_vertex:su,displacementmap_vertex:ru,emissivemap_fragment:au,emissivemap_pars_fragment:ou,colorspace_fragment:lu,colorspace_pars_fragment:cu,envmap_fragment:hu,envmap_common_pars_fragment:uu,envmap_pars_fragment:du,envmap_pars_vertex:fu,envmap_physical_pars_fragment:Tu,envmap_vertex:pu,fog_vertex:mu,fog_pars_vertex:gu,fog_fragment:_u,fog_pars_fragment:xu,gradientmap_pars_fragment:vu,lightmap_fragment:yu,lightmap_pars_fragment:Mu,lights_lambert_fragment:Su,lights_lambert_pars_fragment:bu,lights_pars_begin:Eu,lights_toon_fragment:wu,lights_toon_pars_fragment:Au,lights_phong_fragment:Ru,lights_phong_pars_fragment:Cu,lights_physical_fragment:Pu,lights_physical_pars_fragment:Iu,lights_fragment_begin:Lu,lights_fragment_maps:Du,lights_fragment_end:Uu,logdepthbuf_fragment:Nu,logdepthbuf_pars_fragment:Fu,logdepthbuf_pars_vertex:Ou,logdepthbuf_vertex:Bu,map_fragment:zu,map_pars_fragment:ku,map_particle_fragment:Hu,map_particle_pars_fragment:Vu,metalnessmap_fragment:Gu,metalnessmap_pars_fragment:Wu,morphinstance_vertex:Xu,morphcolor_vertex:qu,morphnormal_vertex:Yu,morphtarget_pars_vertex:Zu,morphtarget_vertex:Ju,normal_fragment_begin:$u,normal_fragment_maps:Ku,normal_pars_fragment:ju,normal_pars_vertex:Qu,normal_vertex:td,normalmap_pars_fragment:ed,clearcoat_normal_fragment_begin:nd,clearcoat_normal_fragment_maps:id,clearcoat_pars_fragment:sd,iridescence_pars_fragment:rd,opaque_fragment:ad,packing:od,premultiplied_alpha_fragment:ld,project_vertex:cd,dithering_fragment:hd,dithering_pars_fragment:ud,roughnessmap_fragment:dd,roughnessmap_pars_fragment:fd,shadowmap_pars_fragment:pd,shadowmap_pars_vertex:md,shadowmap_vertex:gd,shadowmask_pars_fragment:_d,skinbase_vertex:xd,skinning_pars_vertex:vd,skinning_vertex:yd,skinnormal_vertex:Md,specularmap_fragment:Sd,specularmap_pars_fragment:bd,tonemapping_fragment:Ed,tonemapping_pars_fragment:Td,transmission_fragment:wd,transmission_pars_fragment:Ad,uv_pars_fragment:Rd,uv_pars_vertex:Cd,uv_vertex:Pd,worldpos_vertex:Id,background_vert:Ld,background_frag:Dd,backgroundCube_vert:Ud,backgroundCube_frag:Nd,cube_vert:Fd,cube_frag:Od,depth_vert:Bd,depth_frag:zd,distanceRGBA_vert:kd,distanceRGBA_frag:Hd,equirect_vert:Vd,equirect_frag:Gd,linedashed_vert:Wd,linedashed_frag:Xd,meshbasic_vert:qd,meshbasic_frag:Yd,meshlambert_vert:Zd,meshlambert_frag:Jd,meshmatcap_vert:$d,meshmatcap_frag:Kd,meshnormal_vert:jd,meshnormal_frag:Qd,meshphong_vert:tf,meshphong_frag:ef,meshphysical_vert:nf,meshphysical_frag:sf,meshtoon_vert:rf,meshtoon_frag:af,points_vert:of,points_frag:lf,shadow_vert:cf,shadow_frag:hf,sprite_vert:uf,sprite_frag:df},ut={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},dn={basic:{uniforms:ze([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:ze([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:ze([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:ze([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:ze([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:ze([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:ze([ut.points,ut.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:ze([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:ze([ut.common,ut.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:ze([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:ze([ut.sprite,ut.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:ze([ut.common,ut.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:ze([ut.lights,ut.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};dn.physical={uniforms:ze([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var ks={r:0,b:0,g:0},ei=new fn,ff=new ve;function pf(i,t,e,n,s,r,o){let a=new Qt(0),l=r===!0?0:1,c,h,f=null,p=0,m=null;function v(d,u){let T=!1,g=u.isScene===!0?u.background:null;g&&g.isTexture&&(g=(u.backgroundBlurriness>0?e:t).get(g)),g===null?M(a,l):g&&g.isColor&&(M(g,1),T=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||T)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),g&&(g.isCubeTexture||g.mapping===gr)?(h===void 0&&(h=new Fe(new Gn(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Wi(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,C,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ei.copy(u.backgroundRotation),ei.x*=-1,ei.y*=-1,ei.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ff.makeRotationFromEuler(ei)),h.material.toneMapped=oe.getTransfer(g.colorSpace)!==de,(f!==g||p!==g.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=g,p=g.version,m=i.toneMapping),h.layers.enableAll(),d.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Fe(new Wn(2,2),new pn({name:"BackgroundMaterial",uniforms:Wi(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=oe.getTransfer(g.colorSpace)!==de,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||p!==g.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=g,p=g.version,m=i.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function M(d,u){d.getRGB(ks,Wl(i)),n.buffers.color.setClear(ks.r,ks.g,ks.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(d,u=1){a.set(d),l=u,M(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,M(a,l)},render:v}}function mf(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=d(null),c=l,h=!1;function f(R,$,V,K,W){let L=!1;if(o){let B=M(K,V,$);c!==B&&(c=B,m(c.object)),L=u(R,K,V,W),L&&T(R,K,V,W)}else{let B=$.wireframe===!0;(c.geometry!==K.id||c.program!==V.id||c.wireframe!==B)&&(c.geometry=K.id,c.program=V.id,c.wireframe=B,L=!0)}W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(L||h)&&(h=!1,U(R,$,V,K),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?i.bindVertexArray(R):r.bindVertexArrayOES(R)}function v(R){return n.isWebGL2?i.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function M(R,$,V){let K=V.wireframe===!0,W=a[R.id];W===void 0&&(W={},a[R.id]=W);let L=W[$.id];L===void 0&&(L={},W[$.id]=L);let B=L[K];return B===void 0&&(B=d(p()),L[K]=B),B}function d(R){let $=[],V=[],K=[];for(let W=0;W<s;W++)$[W]=0,V[W]=0,K[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:V,attributeDivisors:K,object:R,attributes:{},index:null}}function u(R,$,V,K){let W=c.attributes,L=$.attributes,B=0,z=V.getAttributes();for(let et in z)if(z[et].location>=0){let Z=W[et],st=L[et];if(st===void 0&&(et==="instanceMatrix"&&R.instanceMatrix&&(st=R.instanceMatrix),et==="instanceColor"&&R.instanceColor&&(st=R.instanceColor)),Z===void 0||Z.attribute!==st||st&&Z.data!==st.data)return!0;B++}return c.attributesNum!==B||c.index!==K}function T(R,$,V,K){let W={},L=$.attributes,B=0,z=V.getAttributes();for(let et in z)if(z[et].location>=0){let Z=L[et];Z===void 0&&(et==="instanceMatrix"&&R.instanceMatrix&&(Z=R.instanceMatrix),et==="instanceColor"&&R.instanceColor&&(Z=R.instanceColor));let st={};st.attribute=Z,Z&&Z.data&&(st.data=Z.data),W[et]=st,B++}c.attributes=W,c.attributesNum=B,c.index=K}function g(){let R=c.newAttributes;for(let $=0,V=R.length;$<V;$++)R[$]=0}function w(R){I(R,0)}function I(R,$){let V=c.newAttributes,K=c.enabledAttributes,W=c.attributeDivisors;V[R]=1,K[R]===0&&(i.enableVertexAttribArray(R),K[R]=1),W[R]!==$&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,$),W[R]=$)}function C(){let R=c.newAttributes,$=c.enabledAttributes;for(let V=0,K=$.length;V<K;V++)$[V]!==R[V]&&(i.disableVertexAttribArray(V),$[V]=0)}function y(R,$,V,K,W,L,B){B===!0?i.vertexAttribIPointer(R,$,V,W,L):i.vertexAttribPointer(R,$,V,K,W,L)}function U(R,$,V,K){if(n.isWebGL2===!1&&(R.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();let W=K.attributes,L=V.getAttributes(),B=$.defaultAttributeValues;for(let z in L){let et=L[z];if(et.location>=0){let yt=W[z];if(yt===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(yt=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(yt=R.instanceColor)),yt!==void 0){let Z=yt.normalized,st=yt.itemSize,ct=e.get(yt);if(ct===void 0)continue;let Pt=ct.buffer,vt=ct.type,dt=ct.bytesPerElement,It=n.isWebGL2===!0&&(vt===i.INT||vt===i.UNSIGNED_INT||yt.gpuType===Dl);if(yt.isInterleavedBufferAttribute){let Mt=yt.data,D=Mt.stride,re=yt.offset;if(Mt.isInstancedInterleavedBuffer){for(let xt=0;xt<et.locationSize;xt++)I(et.location+xt,Mt.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let xt=0;xt<et.locationSize;xt++)w(et.location+xt);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let xt=0;xt<et.locationSize;xt++)y(et.location+xt,st/et.locationSize,vt,Z,D*dt,(re+st/et.locationSize*xt)*dt,It)}else{if(yt.isInstancedBufferAttribute){for(let Mt=0;Mt<et.locationSize;Mt++)I(et.location+Mt,yt.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Mt=0;Mt<et.locationSize;Mt++)w(et.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let Mt=0;Mt<et.locationSize;Mt++)y(et.location+Mt,st/et.locationSize,vt,Z,st*dt,st/et.locationSize*Mt*dt,It)}}else if(B!==void 0){let Z=B[z];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(et.location,Z);break;case 3:i.vertexAttrib3fv(et.location,Z);break;case 4:i.vertexAttrib4fv(et.location,Z);break;default:i.vertexAttrib1fv(et.location,Z)}}}}C()}function J(){q();for(let R in a){let $=a[R];for(let V in $){let K=$[V];for(let W in K)v(K[W].object),delete K[W];delete $[V]}delete a[R]}}function _(R){if(a[R.id]===void 0)return;let $=a[R.id];for(let V in $){let K=$[V];for(let W in K)v(K[W].object),delete K[W];delete $[V]}delete a[R.id]}function S(R){for(let $ in a){let V=a[$];if(V[R.id]===void 0)continue;let K=V[R.id];for(let W in K)v(K[W].object),delete K[W];delete V[R.id]}}function q(){j(),h=!0,c!==l&&(c=l,m(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:q,resetDefaultState:j,dispose:J,releaseStatesOfGeometry:_,releaseStatesOfProgram:S,initAttributes:g,enableAttribute:w,disableUnusedAttributes:C}}function gf(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,f){i.drawArrays(r,h,f),e.update(f,r,1)}function l(h,f,p){if(p===0)return;let m,v;if(s)m=i,v="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](r,h,f,p),e.update(f,r,p)}function c(h,f,p){if(p===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<p;v++)this.render(h[v],f[v]);else{m.multiDrawArraysWEBGL(r,h,0,f,0,p);let v=0;for(let M=0;M<p;M++)v+=f[M];e.update(v,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function _f(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let y=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),M=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),g=p>0,w=o||t.has("OES_texture_float"),I=g&&w,C=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:v,maxAttributes:M,maxVertexUniforms:d,maxVaryings:u,maxFragmentUniforms:T,vertexTextures:g,floatFragmentTextures:w,floatVertexTextures:I,maxSamples:C}}function xf(i){let t=this,e=null,n=0,s=!1,r=!1,o=new rn,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let m=f.length!==0||p||n!==0||s;return s=p,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){e=h(f,p,0)},this.setState=function(f,p,m){let v=f.clippingPlanes,M=f.clipIntersection,d=f.clipShadows,u=i.get(f);if(!s||v===null||v.length===0||r&&!d)r?h(null):c();else{let T=r?0:n,g=T*4,w=u.clippingState||null;l.value=w,w=h(v,p,g,m);for(let I=0;I!==g;++I)w[I]=e[I];u.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,p,m,v){let M=f!==null?f.length:0,d=null;if(M!==0){if(d=l.value,v!==!0||d===null){let u=m+M*4,T=p.matrixWorldInverse;a.getNormalMatrix(T),(d===null||d.length<u)&&(d=new Float32Array(u));for(let g=0,w=m;g!==M;++g,w+=4)o.copy(f[g]).applyMatrix4(T,a),o.normal.toArray(d,w),d[w+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,d}}function vf(i){let t=new WeakMap;function e(o,a){return a===ca?o.mapping=ki:a===ha&&(o.mapping=Hi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ca||a===ha)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new xa(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ar=class extends sr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ui=4,al=[.125,.215,.35,.446,.526,.582],ri=20,ea=new ar,ol=new Qt,na=null,ia=0,sa=0,ii=(1+Math.sqrt(5))/2,Li=1/ii,ll=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,ii,Li),new G(0,ii,-Li),new G(Li,0,ii),new G(-Li,0,ii),new G(ii,Li,0),new G(-ii,Li,0)],or=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(na,ia,sa),t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===Hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:as,format:on,colorSpace:Xn,depthBuffer:!1},s=cl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yf(r)),this._blurMaterial=Mf(r,t,e)}return s}_compileMaterial(t){let e=new Fe(this._lodPlanes[0],t);this._renderer.compile(e,ea)}_sceneToCubeUV(t,e,n,s){let a=new ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(ol),h.toneMapping=On,h.autoClear=!1;let m=new er({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),v=new Fe(new Gn,m),M=!1,d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,M=!0):(m.color.copy(ol),M=!0);for(let u=0;u<6;u++){let T=u%3;T===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):T===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let g=this._cubeSize;Hs(s,T*g,u>2?g:0,g,g),h.setRenderTarget(s),M&&h.render(v,a),h.render(t,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=d}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ki||t.mapping===Hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hl());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Fe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Hs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ea)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ll[(s-1)%ll.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Fe(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ri-1),M=r/v,d=isFinite(r)?1+Math.floor(h*M):ri;d>ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ri}`);let u=[],T=0;for(let y=0;y<ri;++y){let U=y/M,J=Math.exp(-U*U/2);u.push(J),y===0?T+=J:y<d&&(T+=2*J)}for(let y=0;y<u.length;y++)u[y]=u[y]/T;p.envMap.value=t.texture,p.samples.value=d,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:g}=this;p.dTheta.value=v,p.mipInt.value=g-n;let w=this._sizeLods[s],I=3*w*(s>g-Ui?s-g+Ui:0),C=4*(this._cubeSize-w);Hs(e,I,C,3*w,2*w),l.setRenderTarget(e),l.render(f,ea)}};function yf(i){let t=[],e=[],n=[],s=i,r=i-Ui+1+al.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ui?l=al[o-i+Ui-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,p=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,v=6,M=3,d=2,u=1,T=new Float32Array(M*v*m),g=new Float32Array(d*v*m),w=new Float32Array(u*v*m);for(let C=0;C<m;C++){let y=C%3*2/3-1,U=C>2?0:-1,J=[y,U,0,y+2/3,U,0,y+2/3,U+1,0,y,U,0,y+2/3,U+1,0,y,U+1,0];T.set(J,M*v*C),g.set(p,d*v*C);let _=[C,C,C,C,C,C];w.set(_,u*v*C)}let I=new hi;I.setAttribute("position",new Se(T,M)),I.setAttribute("uv",new Se(g,d)),I.setAttribute("faceIndex",new Se(w,u)),t.push(I),s>Ui&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function cl(i,t,e){let n=new wn(i,t,e);return n.texture.mapping=gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Mf(i,t,e){let n=new Float32Array(ri),s=new G(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qa(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function hl(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qa(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function ul(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function qa(){return`

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
	`}function Sf(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ca||l===ha,h=l===ki||l===Hi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=t.get(a);return e===null&&(e=new or(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),t.set(a,f),f.texture}else{if(t.has(a))return t.get(a).texture;{let f=a.image;if(c&&f&&f.height>0||h&&f&&s(f)){e===null&&(e=new or(i));let p=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function bf(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ef(i,t,e,n){let s={},r=new WeakMap;function o(f){let p=f.target;p.index!==null&&t.remove(p.index);for(let v in p.attributes)t.remove(p.attributes[v]);for(let v in p.morphAttributes){let M=p.morphAttributes[v];for(let d=0,u=M.length;d<u;d++)t.remove(M[d])}p.removeEventListener("dispose",o),delete s[p.id];let m=r.get(p);m&&(t.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function l(f){let p=f.attributes;for(let v in p)t.update(p[v],i.ARRAY_BUFFER);let m=f.morphAttributes;for(let v in m){let M=m[v];for(let d=0,u=M.length;d<u;d++)t.update(M[d],i.ARRAY_BUFFER)}}function c(f){let p=[],m=f.index,v=f.attributes.position,M=0;if(m!==null){let T=m.array;M=m.version;for(let g=0,w=T.length;g<w;g+=3){let I=T[g+0],C=T[g+1],y=T[g+2];p.push(I,C,C,y,y,I)}}else if(v!==void 0){let T=v.array;M=v.version;for(let g=0,w=T.length/3-1;g<w;g+=3){let I=g+0,C=g+1,y=g+2;p.push(I,C,C,y,y,I)}}else return;let d=new(Vl(p)?ir:nr)(p,1);d.version=M;let u=r.get(f);u&&t.remove(u),r.set(f,d)}function h(f){let p=r.get(f);if(p){let m=f.index;m!==null&&p.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Tf(i,t,e,n){let s=n.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,v){i.drawElements(r,v,a,m*l),e.update(v,r,1)}function f(m,v,M){if(M===0)return;let d,u;if(s)d=i,u="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[u](r,v,a,m*l,M),e.update(v,r,M)}function p(m,v,M){if(M===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<M;u++)this.render(m[u]/l,v[u]);else{d.multiDrawElementsWEBGL(r,v,0,a,m,0,M);let u=0;for(let T=0;T<M;T++)u+=v[T];e.update(u,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=p}function wf(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Af(i,t){return i[0]-t[0]}function Rf(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Cf(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new Re,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,f){let p=c.morphTargetInfluences;if(t.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=m!==void 0?m.length:0,M=r.get(h);if(M===void 0||M.count!==v){let q=function(){_.dispose(),r.delete(h),h.removeEventListener("dispose",q)};M!==void 0&&M.texture.dispose();let d=h.morphAttributes.position!==void 0,u=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,g=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],I=h.morphAttributes.color||[],C=0;d===!0&&(C=1),u===!0&&(C=2),T===!0&&(C=3);let y=h.attributes.position.count*C,U=1;y>t.maxTextureSize&&(U=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let J=new Float32Array(y*U*4*v),_=new Qs(J,y,U,v);_.type=bn,_.needsUpdate=!0;let S=C*4;for(let j=0;j<v;j++){let R=g[j],$=w[j],V=I[j],K=y*U*4*j;for(let W=0;W<R.count;W++){let L=W*S;d===!0&&(o.fromBufferAttribute(R,W),J[K+L+0]=o.x,J[K+L+1]=o.y,J[K+L+2]=o.z,J[K+L+3]=0),u===!0&&(o.fromBufferAttribute($,W),J[K+L+4]=o.x,J[K+L+5]=o.y,J[K+L+6]=o.z,J[K+L+7]=0),T===!0&&(o.fromBufferAttribute(V,W),J[K+L+8]=o.x,J[K+L+9]=o.y,J[K+L+10]=o.z,J[K+L+11]=V.itemSize===4?o.w:1)}}M={count:v,texture:_,size:new Xt(y,U)},r.set(h,M),h.addEventListener("dispose",q)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",c.morphTexture,e);else{let d=0;for(let T=0;T<p.length;T++)d+=p[T];let u=h.morphTargetsRelative?1:1-d;f.getUniforms().setValue(i,"morphTargetBaseInfluence",u),f.getUniforms().setValue(i,"morphTargetInfluences",p)}f.getUniforms().setValue(i,"morphTargetsTexture",M.texture,e),f.getUniforms().setValue(i,"morphTargetsTextureSize",M.size)}else{let m=p===void 0?0:p.length,v=n[h.id];if(v===void 0||v.length!==m){v=[];for(let g=0;g<m;g++)v[g]=[g,0];n[h.id]=v}for(let g=0;g<m;g++){let w=v[g];w[0]=g,w[1]=p[g]}v.sort(Rf);for(let g=0;g<8;g++)g<m&&v[g][1]?(a[g][0]=v[g][0],a[g][1]=v[g][1]):(a[g][0]=Number.MAX_SAFE_INTEGER,a[g][1]=0);a.sort(Af);let M=h.morphAttributes.position,d=h.morphAttributes.normal,u=0;for(let g=0;g<8;g++){let w=a[g],I=w[0],C=w[1];I!==Number.MAX_SAFE_INTEGER&&C?(M&&h.getAttribute("morphTarget"+g)!==M[I]&&h.setAttribute("morphTarget"+g,M[I]),d&&h.getAttribute("morphNormal"+g)!==d[I]&&h.setAttribute("morphNormal"+g,d[I]),s[g]=C,u+=C):(M&&h.hasAttribute("morphTarget"+g)===!0&&h.deleteAttribute("morphTarget"+g),d&&h.hasAttribute("morphNormal"+g)===!0&&h.deleteAttribute("morphNormal"+g),s[g]=0)}let T=h.morphTargetsRelative?1:1-u;f.getUniforms().setValue(i,"morphTargetBaseInfluence",T),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Pf(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var lr=class extends Oe{constructor(t,e,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:li,h!==li&&h!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===li&&(n=Nn),n===void 0&&h===Gi&&(n=oi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Le,this.minFilter=l!==void 0?l:Le,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ql=new Oe,Yl=new lr(1,1);Yl.compareFunction=Hl;var Zl=new Qs,Jl=new ga,$l=new rr,dl=[],fl=[],pl=new Float32Array(16),ml=new Float32Array(9),gl=new Float32Array(4);function qi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=dl[s];if(r===void 0&&(r=new Float32Array(s),dl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function xr(i,t){let e=fl[t];e===void 0&&(e=new Int32Array(t),fl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function If(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Lf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function Df(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function Uf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function Nf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,n))return;gl.set(n),i.uniformMatrix2fv(this.addr,!1,gl),Ee(e,n)}}function Ff(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,n))return;ml.set(n),i.uniformMatrix3fv(this.addr,!1,ml),Ee(e,n)}}function Of(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,n))return;pl.set(n),i.uniformMatrix4fv(this.addr,!1,pl),Ee(e,n)}}function Bf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function zf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function kf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function Hf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function Vf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Gf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function Wf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function Xf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function qf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Yl:ql;e.setTexture2D(t||r,s)}function Yf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jl,s)}function Zf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$l,s)}function Jf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Zl,s)}function $f(i){switch(i){case 5126:return If;case 35664:return Lf;case 35665:return Df;case 35666:return Uf;case 35674:return Nf;case 35675:return Ff;case 35676:return Of;case 5124:case 35670:return Bf;case 35667:case 35671:return zf;case 35668:case 35672:return kf;case 35669:case 35673:return Hf;case 5125:return Vf;case 36294:return Gf;case 36295:return Wf;case 36296:return Xf;case 35678:case 36198:case 36298:case 36306:case 35682:return qf;case 35679:case 36299:case 36307:return Yf;case 35680:case 36300:case 36308:case 36293:return Zf;case 36289:case 36303:case 36311:case 36292:return Jf}}function Kf(i,t){i.uniform1fv(this.addr,t)}function jf(i,t){let e=qi(t,this.size,2);i.uniform2fv(this.addr,e)}function Qf(i,t){let e=qi(t,this.size,3);i.uniform3fv(this.addr,e)}function tp(i,t){let e=qi(t,this.size,4);i.uniform4fv(this.addr,e)}function ep(i,t){let e=qi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function np(i,t){let e=qi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ip(i,t){let e=qi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function sp(i,t){i.uniform1iv(this.addr,t)}function rp(i,t){i.uniform2iv(this.addr,t)}function ap(i,t){i.uniform3iv(this.addr,t)}function op(i,t){i.uniform4iv(this.addr,t)}function lp(i,t){i.uniform1uiv(this.addr,t)}function cp(i,t){i.uniform2uiv(this.addr,t)}function hp(i,t){i.uniform3uiv(this.addr,t)}function up(i,t){i.uniform4uiv(this.addr,t)}function dp(i,t,e){let n=this.cache,s=t.length,r=xr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ql,r[o])}function fp(i,t,e){let n=this.cache,s=t.length,r=xr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Jl,r[o])}function pp(i,t,e){let n=this.cache,s=t.length,r=xr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||$l,r[o])}function mp(i,t,e){let n=this.cache,s=t.length,r=xr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Zl,r[o])}function gp(i){switch(i){case 5126:return Kf;case 35664:return jf;case 35665:return Qf;case 35666:return tp;case 35674:return ep;case 35675:return np;case 35676:return ip;case 5124:case 35670:return sp;case 35667:case 35671:return rp;case 35668:case 35672:return ap;case 35669:case 35673:return op;case 5125:return lp;case 36294:return cp;case 36295:return hp;case 36296:return up;case 35678:case 36198:case 36298:case 36306:case 35682:return dp;case 35679:case 36299:case 36307:return fp;case 35680:case 36300:case 36308:case 36293:return pp;case 36289:case 36303:case 36311:case 36292:return mp}}var va=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$f(e.type)}},ya=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gp(e.type)}},Ma=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ra=/(\w+)(\])?(\[|\.)?/g;function _l(i,t){i.seq.push(t),i.map[t.id]=t}function _p(i,t,e){let n=i.name,s=n.length;for(ra.lastIndex=0;;){let r=ra.exec(n),o=ra.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){_l(e,c===void 0?new va(a,i,t):new ya(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Ma(a),_l(e,f)),e=f}}}var zi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);_p(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function xl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var xp=37297,vp=0;function yp(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Mp(i){let t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(i),n;switch(t===e?n="":t===Zs&&e===Ys?n="LinearDisplayP3ToLinearSRGB":t===Ys&&e===Zs&&(n="LinearSRGBToLinearDisplayP3"),i){case Xn:case _r:return[n,"LinearTransferOETF"];case We:case Xa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function vl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+yp(i.getShaderSource(t),o)}else return s}function Sp(i,t){let e=Mp(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function bp(i,t){let e;switch(t){case Bc:e="Linear";break;case zc:e="Reinhard";break;case kc:e="OptimizedCineon";break;case Hc:e="ACESFilmic";break;case Gc:e="AgX";break;case Wc:e="Neutral";break;case Vc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ep(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ni).join(`
`)}function Tp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ni).join(`
`)}function wp(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ap(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ni(i){return i!==""}function yl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ml(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Rp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sa(i){return i.replace(Rp,Pp)}var Cp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Pp(i,t){let e=Zt[t];if(e===void 0){let n=Cp.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Sa(e)}var Ip=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sl(i){return i.replace(Ip,Lp)}function Lp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Dp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mr?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===dc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Sn&&(t="SHADOWMAP_TYPE_VSM"),t}function Up(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ki:case Hi:t="ENVMAP_TYPE_CUBE";break;case gr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Np(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Hi&&(t="ENVMAP_MODE_REFRACTION"),t}function Fp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Il:t="ENVMAP_BLENDING_MULTIPLY";break;case Fc:t="ENVMAP_BLENDING_MIX";break;case Oc:t="ENVMAP_BLENDING_ADD";break}return t}function Op(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Bp(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Dp(e),c=Up(e),h=Np(e),f=Fp(e),p=Op(e),m=e.isWebGL2?"":Ep(e),v=Tp(e),M=wp(r),d=s.createProgram(),u,T,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Ni).join(`
`),u.length>0&&(u+=`
`),T=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Ni).join(`
`),T.length>0&&(T+=`
`)):(u=[bl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ni).join(`
`),T=[m,bl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?Zt.tonemapping_pars_fragment:"",e.toneMapping!==On?bp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Sp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ni).join(`
`)),o=Sa(o),o=yl(o,e),o=Ml(o,e),a=Sa(a),a=yl(a,e),a=Ml(a,e),o=Sl(o),a=Sl(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,u=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,T=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);let w=g+u+o,I=g+T+a,C=xl(s,s.VERTEX_SHADER,w),y=xl(s,s.FRAGMENT_SHADER,I);s.attachShader(d,C),s.attachShader(d,y),e.index0AttributeName!==void 0?s.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(d,0,"position"),s.linkProgram(d);function U(q){if(i.debug.checkShaderErrors){let j=s.getProgramInfoLog(d).trim(),R=s.getShaderInfoLog(C).trim(),$=s.getShaderInfoLog(y).trim(),V=!0,K=!0;if(s.getProgramParameter(d,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,d,C,y);else{let W=vl(s,C,"vertex"),L=vl(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(d,s.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+j+`
`+W+`
`+L)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(R===""||$==="")&&(K=!1);K&&(q.diagnostics={runnable:V,programLog:j,vertexShader:{log:R,prefix:u},fragmentShader:{log:$,prefix:T}})}s.deleteShader(C),s.deleteShader(y),J=new zi(s,d),_=Ap(s,d)}let J;this.getUniforms=function(){return J===void 0&&U(this),J};let _;this.getAttributes=function(){return _===void 0&&U(this),_};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(d,xp)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(d),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vp++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=C,this.fragmentShader=y,this}var zp=0,ba=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ea(t),e.set(t,n)),n}},Ea=class{constructor(t){this.id=zp++,this.code=t,this.usedTimes=0}};function kp(i,t,e,n,s,r,o){let a=new ls,l=new ba,c=new Set,h=[],f=s.isWebGL2,p=s.logarithmicDepthBuffer,m=s.vertexTextures,v=s.precision,M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return c.add(_),_===0?"uv":`uv${_}`}function u(_,S,q,j,R){let $=j.fog,V=R.geometry,K=_.isMeshStandardMaterial?j.environment:null,W=(_.isMeshStandardMaterial?e:t).get(_.envMap||K),L=W&&W.mapping===gr?W.image.height:null,B=M[_.type];_.precision!==null&&(v=s.getMaxPrecision(_.precision),v!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",v,"instead."));let z=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,et=z!==void 0?z.length:0,yt=0;V.morphAttributes.position!==void 0&&(yt=1),V.morphAttributes.normal!==void 0&&(yt=2),V.morphAttributes.color!==void 0&&(yt=3);let Z,st,ct,Pt;if(B){let se=dn[B];Z=se.vertexShader,st=se.fragmentShader}else Z=_.vertexShader,st=_.fragmentShader,l.update(_),ct=l.getVertexShaderID(_),Pt=l.getFragmentShaderID(_);let vt=i.getRenderTarget(),dt=R.isInstancedMesh===!0,It=R.isBatchedMesh===!0,Mt=!!_.map,D=!!_.matcap,re=!!W,xt=!!_.aoMap,zt=!!_.lightMap,Tt=!!_.bumpMap,Vt=!!_.normalMap,Gt=!!_.displacementMap,$t=!!_.emissiveMap,ge=!!_.metalnessMap,A=!!_.roughnessMap,x=_.anisotropy>0,Q=_.clearcoat>0,it=_.iridescence>0,at=_.sheen>0,rt=_.transmission>0,kt=x&&!!_.anisotropyMap,gt=Q&&!!_.clearcoatMap,ht=Q&&!!_.clearcoatNormalMap,ft=Q&&!!_.clearcoatRoughnessMap,Nt=it&&!!_.iridescenceMap,ot=it&&!!_.iridescenceThicknessMap,fe=at&&!!_.sheenColorMap,qt=at&&!!_.sheenRoughnessMap,At=!!_.specularMap,bt=!!_.specularColorMap,St=!!_.specularIntensityMap,Kt=rt&&!!_.transmissionMap,Rt=rt&&!!_.thicknessMap,te=!!_.gradientMap,N=!!_.alphaMap,pt=_.alphaTest>0,X=!!_.alphaHash,lt=!!_.extensions,mt=On;_.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(mt=i.toneMapping);let jt={isWebGL2:f,shaderID:B,shaderType:_.type,shaderName:_.name,vertexShader:Z,fragmentShader:st,defines:_.defines,customVertexShaderID:ct,customFragmentShaderID:Pt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:v,batching:It,instancing:dt,instancingColor:dt&&R.instanceColor!==null,instancingMorph:dt&&R.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Xn,alphaToCoverage:!!_.alphaToCoverage,map:Mt,matcap:D,envMap:re,envMapMode:re&&W.mapping,envMapCubeUVHeight:L,aoMap:xt,lightMap:zt,bumpMap:Tt,normalMap:Vt,displacementMap:m&&Gt,emissiveMap:$t,normalMapObjectSpace:Vt&&_.normalMapType===th,normalMapTangentSpace:Vt&&_.normalMapType===kl,metalnessMap:ge,roughnessMap:A,anisotropy:x,anisotropyMap:kt,clearcoat:Q,clearcoatMap:gt,clearcoatNormalMap:ht,clearcoatRoughnessMap:ft,iridescence:it,iridescenceMap:Nt,iridescenceThicknessMap:ot,sheen:at,sheenColorMap:fe,sheenRoughnessMap:qt,specularMap:At,specularColorMap:bt,specularIntensityMap:St,transmission:rt,transmissionMap:Kt,thicknessMap:Rt,gradientMap:te,opaque:_.transparent===!1&&_.blending===Oi&&_.alphaToCoverage===!1,alphaMap:N,alphaTest:pt,alphaHash:X,combine:_.combine,mapUv:Mt&&d(_.map.channel),aoMapUv:xt&&d(_.aoMap.channel),lightMapUv:zt&&d(_.lightMap.channel),bumpMapUv:Tt&&d(_.bumpMap.channel),normalMapUv:Vt&&d(_.normalMap.channel),displacementMapUv:Gt&&d(_.displacementMap.channel),emissiveMapUv:$t&&d(_.emissiveMap.channel),metalnessMapUv:ge&&d(_.metalnessMap.channel),roughnessMapUv:A&&d(_.roughnessMap.channel),anisotropyMapUv:kt&&d(_.anisotropyMap.channel),clearcoatMapUv:gt&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:ht&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&d(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:qt&&d(_.sheenRoughnessMap.channel),specularMapUv:At&&d(_.specularMap.channel),specularColorMapUv:bt&&d(_.specularColorMap.channel),specularIntensityMapUv:St&&d(_.specularIntensityMap.channel),transmissionMapUv:Kt&&d(_.transmissionMap.channel),thicknessMapUv:Rt&&d(_.thicknessMap.channel),alphaMapUv:N&&d(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Vt||x),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!V.attributes.uv&&(Mt||N),fog:!!$,useFog:_.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:R.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:yt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:mt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Mt&&_.map.isVideoTexture===!0&&oe.getTransfer(_.map.colorSpace)===de,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===je,flipSided:_.side===qe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:lt&&_.extensions.derivatives===!0,extensionFragDepth:lt&&_.extensions.fragDepth===!0,extensionDrawBuffers:lt&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:lt&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:lt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:lt&&_.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function T(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let q in _.defines)S.push(q),S.push(_.defines[q]);return _.isRawShaderMaterial===!1&&(g(S,_),w(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function g(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function w(_,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.instancingMorph&&a.enable(4),S.matcap&&a.enable(5),S.envMap&&a.enable(6),S.normalMapObjectSpace&&a.enable(7),S.normalMapTangentSpace&&a.enable(8),S.clearcoat&&a.enable(9),S.iridescence&&a.enable(10),S.alphaTest&&a.enable(11),S.vertexColors&&a.enable(12),S.vertexAlphas&&a.enable(13),S.vertexUv1s&&a.enable(14),S.vertexUv2s&&a.enable(15),S.vertexUv3s&&a.enable(16),S.vertexTangents&&a.enable(17),S.anisotropy&&a.enable(18),S.alphaHash&&a.enable(19),S.batching&&a.enable(20),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),_.push(a.mask)}function I(_){let S=M[_.type],q;if(S){let j=dn[S];q=wh.clone(j.uniforms)}else q=_.uniforms;return q}function C(_,S){let q;for(let j=0,R=h.length;j<R;j++){let $=h[j];if($.cacheKey===S){q=$,++q.usedTimes;break}}return q===void 0&&(q=new Bp(i,S,_,r),h.push(q)),q}function y(_){if(--_.usedTimes===0){let S=h.indexOf(_);h[S]=h[h.length-1],h.pop(),_.destroy()}}function U(_){l.remove(_)}function J(){l.dispose()}return{getParameters:u,getProgramCacheKey:T,getUniforms:I,acquireProgram:C,releaseProgram:y,releaseShaderCache:U,programs:h,dispose:J}}function Hp(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Vp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function El(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Tl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,p,m,v,M,d){let u=i[t];return u===void 0?(u={id:f.id,object:f,geometry:p,material:m,groupOrder:v,renderOrder:f.renderOrder,z:M,group:d},i[t]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=m,u.groupOrder=v,u.renderOrder=f.renderOrder,u.z=M,u.group=d),t++,u}function a(f,p,m,v,M,d){let u=o(f,p,m,v,M,d);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(f,p,m,v,M,d){let u=o(f,p,m,v,M,d);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(f,p){e.length>1&&e.sort(f||Vp),n.length>1&&n.sort(p||El),s.length>1&&s.sort(p||El)}function h(){for(let f=t,p=i.length;f<p;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Gp(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Tl,i.set(n,[o])):s>=r.length?(o=new Tl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Wp(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new Qt};break;case"SpotLight":e={position:new G,direction:new G,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function Xp(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var qp=0;function Yp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Zp(i,t){let e=new Wp,n=Xp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new G);let r=new G,o=new ve,a=new ve;function l(h,f){let p=0,m=0,v=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let M=0,d=0,u=0,T=0,g=0,w=0,I=0,C=0,y=0,U=0,J=0;h.sort(Yp);let _=f===!0?Math.PI:1;for(let q=0,j=h.length;q<j;q++){let R=h[q],$=R.color,V=R.intensity,K=R.distance,W=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)p+=$.r*V*_,m+=$.g*V*_,v+=$.b*V*_;else if(R.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(R.sh.coefficients[L],V);J++}else if(R.isDirectionalLight){let L=e.get(R);if(L.color.copy(R.color).multiplyScalar(R.intensity*_),R.castShadow){let B=R.shadow,z=n.get(R);z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,s.directionalShadow[M]=z,s.directionalShadowMap[M]=W,s.directionalShadowMatrix[M]=R.shadow.matrix,w++}s.directional[M]=L,M++}else if(R.isSpotLight){let L=e.get(R);L.position.setFromMatrixPosition(R.matrixWorld),L.color.copy($).multiplyScalar(V*_),L.distance=K,L.coneCos=Math.cos(R.angle),L.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),L.decay=R.decay,s.spot[u]=L;let B=R.shadow;if(R.map&&(s.spotLightMap[y]=R.map,y++,B.updateMatrices(R),R.castShadow&&U++),s.spotLightMatrix[u]=B.matrix,R.castShadow){let z=n.get(R);z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,s.spotShadow[u]=z,s.spotShadowMap[u]=W,C++}u++}else if(R.isRectAreaLight){let L=e.get(R);L.color.copy($).multiplyScalar(V),L.halfWidth.set(R.width*.5,0,0),L.halfHeight.set(0,R.height*.5,0),s.rectArea[T]=L,T++}else if(R.isPointLight){let L=e.get(R);if(L.color.copy(R.color).multiplyScalar(R.intensity*_),L.distance=R.distance,L.decay=R.decay,R.castShadow){let B=R.shadow,z=n.get(R);z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,z.shadowCameraNear=B.camera.near,z.shadowCameraFar=B.camera.far,s.pointShadow[d]=z,s.pointShadowMap[d]=W,s.pointShadowMatrix[d]=R.shadow.matrix,I++}s.point[d]=L,d++}else if(R.isHemisphereLight){let L=e.get(R);L.skyColor.copy(R.color).multiplyScalar(V*_),L.groundColor.copy(R.groundColor).multiplyScalar(V*_),s.hemi[g]=L,g++}}T>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ut.LTC_FLOAT_1,s.rectAreaLTC2=ut.LTC_FLOAT_2):(s.rectAreaLTC1=ut.LTC_HALF_1,s.rectAreaLTC2=ut.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ut.LTC_FLOAT_1,s.rectAreaLTC2=ut.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ut.LTC_HALF_1,s.rectAreaLTC2=ut.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=m,s.ambient[2]=v;let S=s.hash;(S.directionalLength!==M||S.pointLength!==d||S.spotLength!==u||S.rectAreaLength!==T||S.hemiLength!==g||S.numDirectionalShadows!==w||S.numPointShadows!==I||S.numSpotShadows!==C||S.numSpotMaps!==y||S.numLightProbes!==J)&&(s.directional.length=M,s.spot.length=u,s.rectArea.length=T,s.point.length=d,s.hemi.length=g,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=C+y-U,s.spotLightMap.length=y,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=J,S.directionalLength=M,S.pointLength=d,S.spotLength=u,S.rectAreaLength=T,S.hemiLength=g,S.numDirectionalShadows=w,S.numPointShadows=I,S.numSpotShadows=C,S.numSpotMaps=y,S.numLightProbes=J,s.version=qp++)}function c(h,f){let p=0,m=0,v=0,M=0,d=0,u=f.matrixWorldInverse;for(let T=0,g=h.length;T<g;T++){let w=h[T];if(w.isDirectionalLight){let I=s.directional[p];I.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(u),p++}else if(w.isSpotLight){let I=s.spot[v];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(u),I.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(u),v++}else if(w.isRectAreaLight){let I=s.rectArea[M];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(u),a.identity(),o.copy(w.matrixWorld),o.premultiply(u),a.extractRotation(o),I.halfWidth.set(w.width*.5,0,0),I.halfHeight.set(0,w.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),M++}else if(w.isPointLight){let I=s.point[m];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(u),m++}else if(w.isHemisphereLight){let I=s.hemi[d];I.direction.setFromMatrixPosition(w.matrixWorld),I.direction.transformDirection(u),d++}}}return{setup:l,setupView:c,state:s}}function wl(i,t){let e=new Zp(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(f){n.push(f)}function a(f){s.push(f)}function l(f){e.setup(n,f)}function c(f){e.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Jp(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new wl(i,t),e.set(r,[l])):o>=a.length?(l=new wl(i,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var hs=class extends Vn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ta=class extends Vn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},$p=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kp=`uniform sampler2D shadow_pass;
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
}`;function jp(i,t,e){let n=new cs,s=new Xt,r=new Xt,o=new Re,a=new hs({depthPacking:Wa}),l=new Ta,c={},h=e.maxTextureSize,f={[zn]:qe,[qe]:zn,[je]:je},p=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:$p,fragmentShader:Kp}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let v=new hi;v.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Fe(v,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mr;let u=this.type;this.render=function(C,y,U){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||C.length===0)return;let J=i.getRenderTarget(),_=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Fn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let j=u!==Sn&&this.type===Sn,R=u===Sn&&this.type!==Sn;for(let $=0,V=C.length;$<V;$++){let K=C[$],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let L=W.getFrameExtents();if(s.multiply(L),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/L.x),s.x=r.x*L.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/L.y),s.y=r.y*L.y,W.mapSize.y=r.y)),W.map===null||j===!0||R===!0){let z=this.type!==Sn?{minFilter:Le,magFilter:Le}:{};W.map!==null&&W.map.dispose(),W.map=new wn(s.x,s.y,z),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let B=W.getViewportCount();for(let z=0;z<B;z++){let et=W.getViewport(z);o.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),q.viewport(o),W.updateMatrices(K,z),n=W.getFrustum(),w(y,U,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===Sn&&T(W,U),W.needsUpdate=!1}u=this.type,d.needsUpdate=!1,i.setRenderTarget(J,_,S)};function T(C,y){let U=t.update(M);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new wn(s.x,s.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(y,null,U,p,M,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(y,null,U,m,M,null)}function g(C,y,U,J){let _=null,S=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(S!==void 0)_=S;else if(_=U.isPointLight===!0?l:a,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){let q=_.uuid,j=y.uuid,R=c[q];R===void 0&&(R={},c[q]=R);let $=R[j];$===void 0&&($=_.clone(),R[j]=$,y.addEventListener("dispose",I)),_=$}if(_.visible=y.visible,_.wireframe=y.wireframe,J===Sn?_.side=y.shadowSide!==null?y.shadowSide:y.side:_.side=y.shadowSide!==null?y.shadowSide:f[y.side],_.alphaMap=y.alphaMap,_.alphaTest=y.alphaTest,_.map=y.map,_.clipShadows=y.clipShadows,_.clippingPlanes=y.clippingPlanes,_.clipIntersection=y.clipIntersection,_.displacementMap=y.displacementMap,_.displacementScale=y.displacementScale,_.displacementBias=y.displacementBias,_.wireframeLinewidth=y.wireframeLinewidth,_.linewidth=y.linewidth,U.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let q=i.properties.get(_);q.light=U}return _}function w(C,y,U,J,_){if(C.visible===!1)return;if(C.layers.test(y.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===Sn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);let j=t.update(C),R=C.material;if(Array.isArray(R)){let $=j.groups;for(let V=0,K=$.length;V<K;V++){let W=$[V],L=R[W.materialIndex];if(L&&L.visible){let B=g(C,L,J,_);C.onBeforeShadow(i,C,y,U,j,B,W),i.renderBufferDirect(U,null,j,B,C,W),C.onAfterShadow(i,C,y,U,j,B,W)}}}else if(R.visible){let $=g(C,R,J,_);C.onBeforeShadow(i,C,y,U,j,$,null),i.renderBufferDirect(U,null,j,$,C,null),C.onAfterShadow(i,C,y,U,j,$,null)}}let q=C.children;for(let j=0,R=q.length;j<R;j++)w(q[j],y,U,J,_)}function I(C){C.target.removeEventListener("dispose",I);for(let U in c){let J=c[U],_=C.target.uuid;_ in J&&(J[_].dispose(),delete J[_])}}}function Qp(i,t,e){let n=e.isWebGL2;function s(){let N=!1,pt=new Re,X=null,lt=new Re(0,0,0,0);return{setMask:function(mt){X!==mt&&!N&&(i.colorMask(mt,mt,mt,mt),X=mt)},setLocked:function(mt){N=mt},setClear:function(mt,jt,se,ue,xe){xe===!0&&(mt*=ue,jt*=ue,se*=ue),pt.set(mt,jt,se,ue),lt.equals(pt)===!1&&(i.clearColor(mt,jt,se,ue),lt.copy(pt))},reset:function(){N=!1,X=null,lt.set(-1,0,0,0)}}}function r(){let N=!1,pt=null,X=null,lt=null;return{setTest:function(mt){mt?dt(i.DEPTH_TEST):It(i.DEPTH_TEST)},setMask:function(mt){pt!==mt&&!N&&(i.depthMask(mt),pt=mt)},setFunc:function(mt){if(X!==mt){switch(mt){case Cc:i.depthFunc(i.NEVER);break;case Pc:i.depthFunc(i.ALWAYS);break;case Ic:i.depthFunc(i.LESS);break;case Gs:i.depthFunc(i.LEQUAL);break;case Lc:i.depthFunc(i.EQUAL);break;case Dc:i.depthFunc(i.GEQUAL);break;case Uc:i.depthFunc(i.GREATER);break;case Nc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}X=mt}},setLocked:function(mt){N=mt},setClear:function(mt){lt!==mt&&(i.clearDepth(mt),lt=mt)},reset:function(){N=!1,pt=null,X=null,lt=null}}}function o(){let N=!1,pt=null,X=null,lt=null,mt=null,jt=null,se=null,ue=null,xe=null;return{setTest:function(ne){N||(ne?dt(i.STENCIL_TEST):It(i.STENCIL_TEST))},setMask:function(ne){pt!==ne&&!N&&(i.stencilMask(ne),pt=ne)},setFunc:function(ne,Te,Ye){(X!==ne||lt!==Te||mt!==Ye)&&(i.stencilFunc(ne,Te,Ye),X=ne,lt=Te,mt=Ye)},setOp:function(ne,Te,Ye){(jt!==ne||se!==Te||ue!==Ye)&&(i.stencilOp(ne,Te,Ye),jt=ne,se=Te,ue=Ye)},setLocked:function(ne){N=ne},setClear:function(ne){xe!==ne&&(i.clearStencil(ne),xe=ne)},reset:function(){N=!1,pt=null,X=null,lt=null,mt=null,jt=null,se=null,ue=null,xe=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,f=new WeakMap,p={},m={},v=new WeakMap,M=[],d=null,u=!1,T=null,g=null,w=null,I=null,C=null,y=null,U=null,J=new Qt(0,0,0),_=0,S=!1,q=null,j=null,R=null,$=null,V=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,L=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(B)[1]),W=L>=1):B.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),W=L>=2);let z=null,et={},yt=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),st=new Re().fromArray(yt),ct=new Re().fromArray(Z);function Pt(N,pt,X,lt){let mt=new Uint8Array(4),jt=i.createTexture();i.bindTexture(N,jt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<X;se++)n&&(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)?i.texImage3D(pt,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(pt+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return jt}let vt={};vt[i.TEXTURE_2D]=Pt(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=Pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(vt[i.TEXTURE_2D_ARRAY]=Pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=Pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),dt(i.DEPTH_TEST),l.setFunc(Gs),Gt(!1),$t(no),dt(i.CULL_FACE),Tt(Fn);function dt(N){p[N]!==!0&&(i.enable(N),p[N]=!0)}function It(N){p[N]!==!1&&(i.disable(N),p[N]=!1)}function Mt(N,pt){return m[N]!==pt?(i.bindFramebuffer(N,pt),m[N]=pt,n&&(N===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=pt),N===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=pt)),!0):!1}function D(N,pt){let X=M,lt=!1;if(N){X=v.get(pt),X===void 0&&(X=[],v.set(pt,X));let mt=N.textures;if(X.length!==mt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let jt=0,se=mt.length;jt<se;jt++)X[jt]=i.COLOR_ATTACHMENT0+jt;X.length=mt.length,lt=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,lt=!0);if(lt)if(e.isWebGL2)i.drawBuffers(X);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(X);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function re(N){return d!==N?(i.useProgram(N),d=N,!0):!1}let xt={[si]:i.FUNC_ADD,[pc]:i.FUNC_SUBTRACT,[mc]:i.FUNC_REVERSE_SUBTRACT};if(n)xt[ao]=i.MIN,xt[oo]=i.MAX;else{let N=t.get("EXT_blend_minmax");N!==null&&(xt[ao]=N.MIN_EXT,xt[oo]=N.MAX_EXT)}let zt={[gc]:i.ZERO,[_c]:i.ONE,[xc]:i.SRC_COLOR,[oa]:i.SRC_ALPHA,[Ec]:i.SRC_ALPHA_SATURATE,[Sc]:i.DST_COLOR,[yc]:i.DST_ALPHA,[vc]:i.ONE_MINUS_SRC_COLOR,[la]:i.ONE_MINUS_SRC_ALPHA,[bc]:i.ONE_MINUS_DST_COLOR,[Mc]:i.ONE_MINUS_DST_ALPHA,[Tc]:i.CONSTANT_COLOR,[wc]:i.ONE_MINUS_CONSTANT_COLOR,[Ac]:i.CONSTANT_ALPHA,[Rc]:i.ONE_MINUS_CONSTANT_ALPHA};function Tt(N,pt,X,lt,mt,jt,se,ue,xe,ne){if(N===Fn){u===!0&&(It(i.BLEND),u=!1);return}if(u===!1&&(dt(i.BLEND),u=!0),N!==fc){if(N!==T||ne!==S){if((g!==si||C!==si)&&(i.blendEquation(i.FUNC_ADD),g=si,C=si),ne)switch(N){case Oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case io:i.blendFunc(i.ONE,i.ONE);break;case so:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ro:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case io:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case so:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ro:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,I=null,y=null,U=null,J.set(0,0,0),_=0,T=N,S=ne}return}mt=mt||pt,jt=jt||X,se=se||lt,(pt!==g||mt!==C)&&(i.blendEquationSeparate(xt[pt],xt[mt]),g=pt,C=mt),(X!==w||lt!==I||jt!==y||se!==U)&&(i.blendFuncSeparate(zt[X],zt[lt],zt[jt],zt[se]),w=X,I=lt,y=jt,U=se),(ue.equals(J)===!1||xe!==_)&&(i.blendColor(ue.r,ue.g,ue.b,xe),J.copy(ue),_=xe),T=N,S=!1}function Vt(N,pt){N.side===je?It(i.CULL_FACE):dt(i.CULL_FACE);let X=N.side===qe;pt&&(X=!X),Gt(X),N.blending===Oi&&N.transparent===!1?Tt(Fn):Tt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);let lt=N.stencilWrite;c.setTest(lt),lt&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),A(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):It(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(N){q!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),q=N)}function $t(N){N!==hc?(dt(i.CULL_FACE),N!==j&&(N===no?i.cullFace(i.BACK):N===uc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):It(i.CULL_FACE),j=N}function ge(N){N!==R&&(W&&i.lineWidth(N),R=N)}function A(N,pt,X){N?(dt(i.POLYGON_OFFSET_FILL),($!==pt||V!==X)&&(i.polygonOffset(pt,X),$=pt,V=X)):It(i.POLYGON_OFFSET_FILL)}function x(N){N?dt(i.SCISSOR_TEST):It(i.SCISSOR_TEST)}function Q(N){N===void 0&&(N=i.TEXTURE0+K-1),z!==N&&(i.activeTexture(N),z=N)}function it(N,pt,X){X===void 0&&(z===null?X=i.TEXTURE0+K-1:X=z);let lt=et[X];lt===void 0&&(lt={type:void 0,texture:void 0},et[X]=lt),(lt.type!==N||lt.texture!==pt)&&(z!==X&&(i.activeTexture(X),z=X),i.bindTexture(N,pt||vt[N]),lt.type=N,lt.texture=pt)}function at(){let N=et[z];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function kt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Nt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function qt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(N){st.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),st.copy(N))}function St(N){ct.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ct.copy(N))}function Kt(N,pt){let X=f.get(pt);X===void 0&&(X=new WeakMap,f.set(pt,X));let lt=X.get(N);lt===void 0&&(lt=i.getUniformBlockIndex(pt,N.name),X.set(N,lt))}function Rt(N,pt){let lt=f.get(pt).get(N);h.get(pt)!==lt&&(i.uniformBlockBinding(pt,lt,N.__bindingPointIndex),h.set(pt,lt))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},z=null,et={},m={},v=new WeakMap,M=[],d=null,u=!1,T=null,g=null,w=null,I=null,C=null,y=null,U=null,J=new Qt(0,0,0),_=0,S=!1,q=null,j=null,R=null,$=null,V=null,st.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:dt,disable:It,bindFramebuffer:Mt,drawBuffers:D,useProgram:re,setBlending:Tt,setMaterial:Vt,setFlipSided:Gt,setCullFace:$t,setLineWidth:ge,setPolygonOffset:A,setScissorTest:x,activeTexture:Q,bindTexture:it,unbindTexture:at,compressedTexImage2D:rt,compressedTexImage3D:kt,texImage2D:qt,texImage3D:At,updateUBOMapping:Kt,uniformBlockBinding:Rt,texStorage2D:ot,texStorage3D:fe,texSubImage2D:gt,texSubImage3D:ht,compressedTexSubImage2D:ft,compressedTexSubImage3D:Nt,scissor:bt,viewport:St,reset:te}}function tm(i,t,e,n,s,r,o){let a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Xt,f=new WeakMap,p,m=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,x){return v?new OffscreenCanvas(A,x):$s("canvas")}function d(A,x,Q,it){let at=1,rt=ge(A);if((rt.width>it||rt.height>it)&&(at=it/Math.max(rt.width,rt.height)),at<1||x===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let kt=x?pa:Math.floor,gt=kt(at*rt.width),ht=kt(at*rt.height);p===void 0&&(p=M(gt,ht));let ft=Q?M(gt,ht):p;return ft.width=gt,ft.height=ht,ft.getContext("2d").drawImage(A,0,0,gt,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+gt+"x"+ht+")."),ft}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),A;return A}function u(A){let x=ge(A);return Ho(x.width)&&Ho(x.height)}function T(A){return a?!1:A.wrapS!==an||A.wrapT!==an||A.minFilter!==Le&&A.minFilter!==Ge}function g(A,x){return A.generateMipmaps&&x&&A.minFilter!==Le&&A.minFilter!==Ge}function w(A){i.generateMipmap(A)}function I(A,x,Q,it,at=!1){if(a===!1)return x;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let rt=x;if(x===i.RED&&(Q===i.FLOAT&&(rt=i.R32F),Q===i.HALF_FLOAT&&(rt=i.R16F),Q===i.UNSIGNED_BYTE&&(rt=i.R8)),x===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(rt=i.R8UI),Q===i.UNSIGNED_SHORT&&(rt=i.R16UI),Q===i.UNSIGNED_INT&&(rt=i.R32UI),Q===i.BYTE&&(rt=i.R8I),Q===i.SHORT&&(rt=i.R16I),Q===i.INT&&(rt=i.R32I)),x===i.RG&&(Q===i.FLOAT&&(rt=i.RG32F),Q===i.HALF_FLOAT&&(rt=i.RG16F),Q===i.UNSIGNED_BYTE&&(rt=i.RG8)),x===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(rt=i.RG8UI),Q===i.UNSIGNED_SHORT&&(rt=i.RG16UI),Q===i.UNSIGNED_INT&&(rt=i.RG32UI),Q===i.BYTE&&(rt=i.RG8I),Q===i.SHORT&&(rt=i.RG16I),Q===i.INT&&(rt=i.RG32I)),x===i.RGBA){let kt=at?qs:oe.getTransfer(it);Q===i.FLOAT&&(rt=i.RGBA32F),Q===i.HALF_FLOAT&&(rt=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(rt=kt===de?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function C(A,x,Q){return g(A,Q)===!0||A.isFramebufferTexture&&A.minFilter!==Le&&A.minFilter!==Ge?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function y(A){return A===Le||A===lo||A===Qi?i.NEAREST:i.LINEAR}function U(A){let x=A.target;x.removeEventListener("dispose",U),_(x),x.isVideoTexture&&f.delete(x)}function J(A){let x=A.target;x.removeEventListener("dispose",J),q(x)}function _(A){let x=n.get(A);if(x.__webglInit===void 0)return;let Q=A.source,it=m.get(Q);if(it){let at=it[x.__cacheKey];at.usedTimes--,at.usedTimes===0&&S(A),Object.keys(it).length===0&&m.delete(Q)}n.remove(A)}function S(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let Q=A.source,it=m.get(Q);delete it[x.__cacheKey],o.memory.textures--}function q(A){let x=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(x.__webglFramebuffer[it]))for(let at=0;at<x.__webglFramebuffer[it].length;at++)i.deleteFramebuffer(x.__webglFramebuffer[it][at]);else i.deleteFramebuffer(x.__webglFramebuffer[it]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[it])}else{if(Array.isArray(x.__webglFramebuffer))for(let it=0;it<x.__webglFramebuffer.length;it++)i.deleteFramebuffer(x.__webglFramebuffer[it]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let it=0;it<x.__webglColorRenderbuffer.length;it++)x.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[it]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let Q=A.textures;for(let it=0,at=Q.length;it<at;it++){let rt=n.get(Q[it]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove(Q[it])}n.remove(A)}let j=0;function R(){j=0}function $(){let A=j;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),j+=1,A}function V(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function K(A,x){let Q=n.get(A);if(A.isVideoTexture&&Gt(A),A.isRenderTargetTexture===!1&&A.version>0&&Q.__version!==A.version){let it=A.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(Q,A,x);return}}e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+x)}function W(A,x){let Q=n.get(A);if(A.version>0&&Q.__version!==A.version){ct(Q,A,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+x)}function L(A,x){let Q=n.get(A);if(A.version>0&&Q.__version!==A.version){ct(Q,A,x);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+x)}function B(A,x){let Q=n.get(A);if(A.version>0&&Q.__version!==A.version){Pt(Q,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+x)}let z={[Vi]:i.REPEAT,[an]:i.CLAMP_TO_EDGE,[ua]:i.MIRRORED_REPEAT},et={[Le]:i.NEAREST,[lo]:i.NEAREST_MIPMAP_NEAREST,[Qi]:i.NEAREST_MIPMAP_LINEAR,[Ge]:i.LINEAR,[Ar]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},yt={[eh]:i.NEVER,[oh]:i.ALWAYS,[nh]:i.LESS,[Hl]:i.LEQUAL,[ih]:i.EQUAL,[ah]:i.GEQUAL,[sh]:i.GREATER,[rh]:i.NOTEQUAL};function Z(A,x,Q){if(x.type===bn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ge||x.magFilter===Ar||x.magFilter===Qi||x.magFilter===ai||x.minFilter===Ge||x.minFilter===Ar||x.minFilter===Qi||x.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Q?(i.texParameteri(A,i.TEXTURE_WRAP_S,z[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,z[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,z[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,et[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,et[x.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==an||x.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,y(x.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,y(x.minFilter)),x.minFilter!==Le&&x.minFilter!==Ge&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,yt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Le||x.minFilter!==Qi&&x.minFilter!==ai||x.type===bn&&t.has("OES_texture_float_linear")===!1||a===!1&&x.type===as&&t.has("OES_texture_half_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let it=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function st(A,x){let Q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",U));let it=x.source,at=m.get(it);at===void 0&&(at={},m.set(it,at));let rt=V(x);if(rt!==A.__cacheKey){at[rt]===void 0&&(at[rt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),at[rt].usedTimes++;let kt=at[A.__cacheKey];kt!==void 0&&(at[A.__cacheKey].usedTimes--,kt.usedTimes===0&&S(x)),A.__cacheKey=rt,A.__webglTexture=at[rt].texture}return Q}function ct(A,x,Q){let it=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(it=i.TEXTURE_3D);let at=st(A,x),rt=x.source;e.bindTexture(it,A.__webglTexture,i.TEXTURE0+Q);let kt=n.get(rt);if(rt.version!==kt.__version||at===!0){e.activeTexture(i.TEXTURE0+Q);let gt=oe.getPrimaries(oe.workingColorSpace),ht=x.colorSpace===Un?null:oe.getPrimaries(x.colorSpace),ft=x.colorSpace===Un||gt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Nt=T(x)&&u(x.image)===!1,ot=d(x.image,Nt,!1,s.maxTextureSize);ot=$t(x,ot);let fe=u(ot)||a,qt=r.convert(x.format,x.colorSpace),At=r.convert(x.type),bt=I(x.internalFormat,qt,At,x.colorSpace,x.isVideoTexture);Z(it,x,fe);let St,Kt=x.mipmaps,Rt=a&&x.isVideoTexture!==!0&&bt!==zl,te=kt.__version===void 0||at===!0,N=rt.dataReady,pt=C(x,ot,fe);if(x.isDepthTexture)bt=i.DEPTH_COMPONENT,a?x.type===bn?bt=i.DEPTH_COMPONENT32F:x.type===Nn?bt=i.DEPTH_COMPONENT24:x.type===oi?bt=i.DEPTH24_STENCIL8:bt=i.DEPTH_COMPONENT16:x.type===bn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===li&&bt===i.DEPTH_COMPONENT&&x.type!==Ga&&x.type!==Nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Nn,At=r.convert(x.type)),x.format===Gi&&bt===i.DEPTH_COMPONENT&&(bt=i.DEPTH_STENCIL,x.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=oi,At=r.convert(x.type))),te&&(Rt?e.texStorage2D(i.TEXTURE_2D,1,bt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,bt,ot.width,ot.height,0,qt,At,null));else if(x.isDataTexture)if(Kt.length>0&&fe){Rt&&te&&e.texStorage2D(i.TEXTURE_2D,pt,bt,Kt[0].width,Kt[0].height);for(let X=0,lt=Kt.length;X<lt;X++)St=Kt[X],Rt?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,St.width,St.height,qt,At,St.data):e.texImage2D(i.TEXTURE_2D,X,bt,St.width,St.height,0,qt,At,St.data);x.generateMipmaps=!1}else Rt?(te&&e.texStorage2D(i.TEXTURE_2D,pt,bt,ot.width,ot.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,qt,At,ot.data)):e.texImage2D(i.TEXTURE_2D,0,bt,ot.width,ot.height,0,qt,At,ot.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Rt&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,bt,Kt[0].width,Kt[0].height,ot.depth);for(let X=0,lt=Kt.length;X<lt;X++)St=Kt[X],x.format!==on?qt!==null?Rt?N&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,St.width,St.height,ot.depth,qt,St.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,bt,St.width,St.height,ot.depth,0,St.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,St.width,St.height,ot.depth,qt,At,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,bt,St.width,St.height,ot.depth,0,qt,At,St.data)}else{Rt&&te&&e.texStorage2D(i.TEXTURE_2D,pt,bt,Kt[0].width,Kt[0].height);for(let X=0,lt=Kt.length;X<lt;X++)St=Kt[X],x.format!==on?qt!==null?Rt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,St.width,St.height,qt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,X,bt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,St.width,St.height,qt,At,St.data):e.texImage2D(i.TEXTURE_2D,X,bt,St.width,St.height,0,qt,At,St.data)}else if(x.isDataArrayTexture)Rt?(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,bt,ot.width,ot.height,ot.depth),N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,qt,At,ot.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,ot.width,ot.height,ot.depth,0,qt,At,ot.data);else if(x.isData3DTexture)Rt?(te&&e.texStorage3D(i.TEXTURE_3D,pt,bt,ot.width,ot.height,ot.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,qt,At,ot.data)):e.texImage3D(i.TEXTURE_3D,0,bt,ot.width,ot.height,ot.depth,0,qt,At,ot.data);else if(x.isFramebufferTexture){if(te)if(Rt)e.texStorage2D(i.TEXTURE_2D,pt,bt,ot.width,ot.height);else{let X=ot.width,lt=ot.height;for(let mt=0;mt<pt;mt++)e.texImage2D(i.TEXTURE_2D,mt,bt,X,lt,0,qt,At,null),X>>=1,lt>>=1}}else if(Kt.length>0&&fe){if(Rt&&te){let X=ge(Kt[0]);e.texStorage2D(i.TEXTURE_2D,pt,bt,X.width,X.height)}for(let X=0,lt=Kt.length;X<lt;X++)St=Kt[X],Rt?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,qt,At,St):e.texImage2D(i.TEXTURE_2D,X,bt,qt,At,St);x.generateMipmaps=!1}else if(Rt){if(te){let X=ge(ot);e.texStorage2D(i.TEXTURE_2D,pt,bt,X.width,X.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,qt,At,ot)}else e.texImage2D(i.TEXTURE_2D,0,bt,qt,At,ot);g(x,fe)&&w(it),kt.__version=rt.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Pt(A,x,Q){if(x.image.length!==6)return;let it=st(A,x),at=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+Q);let rt=n.get(at);if(at.version!==rt.__version||it===!0){e.activeTexture(i.TEXTURE0+Q);let kt=oe.getPrimaries(oe.workingColorSpace),gt=x.colorSpace===Un?null:oe.getPrimaries(x.colorSpace),ht=x.colorSpace===Un||kt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let ft=x.isCompressedTexture||x.image[0].isCompressedTexture,Nt=x.image[0]&&x.image[0].isDataTexture,ot=[];for(let X=0;X<6;X++)!ft&&!Nt?ot[X]=d(x.image[X],!1,!0,s.maxCubemapSize):ot[X]=Nt?x.image[X].image:x.image[X],ot[X]=$t(x,ot[X]);let fe=ot[0],qt=u(fe)||a,At=r.convert(x.format,x.colorSpace),bt=r.convert(x.type),St=I(x.internalFormat,At,bt,x.colorSpace),Kt=a&&x.isVideoTexture!==!0,Rt=rt.__version===void 0||it===!0,te=at.dataReady,N=C(x,fe,qt);Z(i.TEXTURE_CUBE_MAP,x,qt);let pt;if(ft){Kt&&Rt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,N,St,fe.width,fe.height);for(let X=0;X<6;X++){pt=ot[X].mipmaps;for(let lt=0;lt<pt.length;lt++){let mt=pt[lt];x.format!==on?At!==null?Kt?te&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,lt,0,0,mt.width,mt.height,At,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,lt,St,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?te&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,lt,0,0,mt.width,mt.height,At,bt,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,lt,St,mt.width,mt.height,0,At,bt,mt.data)}}}else{if(pt=x.mipmaps,Kt&&Rt){pt.length>0&&N++;let X=ge(ot[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,N,St,X.width,X.height)}for(let X=0;X<6;X++)if(Nt){Kt?te&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ot[X].width,ot[X].height,At,bt,ot[X].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,St,ot[X].width,ot[X].height,0,At,bt,ot[X].data);for(let lt=0;lt<pt.length;lt++){let jt=pt[lt].image[X].image;Kt?te&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,lt+1,0,0,jt.width,jt.height,At,bt,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,lt+1,St,jt.width,jt.height,0,At,bt,jt.data)}}else{Kt?te&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,At,bt,ot[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,St,At,bt,ot[X]);for(let lt=0;lt<pt.length;lt++){let mt=pt[lt];Kt?te&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,lt+1,0,0,At,bt,mt.image[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,lt+1,St,At,bt,mt.image[X])}}}g(x,qt)&&w(i.TEXTURE_CUBE_MAP),rt.__version=at.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function vt(A,x,Q,it,at,rt){let kt=r.convert(Q.format,Q.colorSpace),gt=r.convert(Q.type),ht=I(Q.internalFormat,kt,gt,Q.colorSpace);if(!n.get(x).__hasExternalTextures){let Nt=Math.max(1,x.width>>rt),ot=Math.max(1,x.height>>rt);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,rt,ht,Nt,ot,x.depth,0,kt,gt,null):e.texImage2D(at,rt,ht,Nt,ot,0,kt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Vt(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,at,n.get(Q).__webglTexture,0,Tt(x)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,at,n.get(Q).__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(A,x,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer&&!x.stencilBuffer){let it=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Q||Vt(x)){let at=x.depthTexture;at&&at.isDepthTexture&&(at.type===bn?it=i.DEPTH_COMPONENT32F:at.type===Nn&&(it=i.DEPTH_COMPONENT24));let rt=Tt(x);Vt(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,it,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,it,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,it,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(x.depthBuffer&&x.stencilBuffer){let it=Tt(x);Q&&Vt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,i.DEPTH24_STENCIL8,x.width,x.height):Vt(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{let it=x.textures;for(let at=0;at<it.length;at++){let rt=it[at],kt=r.convert(rt.format,rt.colorSpace),gt=r.convert(rt.type),ht=I(rt.internalFormat,kt,gt,rt.colorSpace),ft=Tt(x);Q&&Vt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,ht,x.width,x.height):Vt(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,ht,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ht,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);let it=n.get(x.depthTexture).__webglTexture,at=Tt(x);if(x.depthTexture.format===li)Vt(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(x.depthTexture.format===Gi)Vt(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Mt(A){let x=n.get(A),Q=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");It(x.__webglFramebuffer,A)}else if(Q){x.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[it]),x.__webglDepthbuffer[it]=i.createRenderbuffer(),dt(x.__webglDepthbuffer[it],A,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),dt(x.__webglDepthbuffer,A,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function D(A,x,Q){let it=n.get(A);x!==void 0&&vt(it.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&Mt(A)}function re(A){let x=A.texture,Q=n.get(A),it=n.get(x);A.addEventListener("dispose",J);let at=A.textures,rt=A.isWebGLCubeRenderTarget===!0,kt=at.length>1,gt=u(A)||a;if(kt||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=x.version,o.memory.textures++),rt){Q.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(a&&x.mipmaps&&x.mipmaps.length>0){Q.__webglFramebuffer[ht]=[];for(let ft=0;ft<x.mipmaps.length;ft++)Q.__webglFramebuffer[ht][ft]=i.createFramebuffer()}else Q.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ht=0;ht<x.mipmaps.length;ht++)Q.__webglFramebuffer[ht]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(kt)if(s.drawBuffers)for(let ht=0,ft=at.length;ht<ft;ht++){let Nt=n.get(at[ht]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=i.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Vt(A)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ht=0;ht<at.length;ht++){let ft=at[ht];Q.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[ht]);let Nt=r.convert(ft.format,ft.colorSpace),ot=r.convert(ft.type),fe=I(ft.internalFormat,Nt,ot,ft.colorSpace,A.isXRRenderTarget===!0),qt=Tt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,fe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,Q.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(Q.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),Z(i.TEXTURE_CUBE_MAP,x,gt);for(let ht=0;ht<6;ht++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)vt(Q.__webglFramebuffer[ht][ft],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,ft);else vt(Q.__webglFramebuffer[ht],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);g(x,gt)&&w(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(kt){for(let ht=0,ft=at.length;ht<ft;ht++){let Nt=at[ht],ot=n.get(Nt);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),Z(i.TEXTURE_2D,Nt,gt),vt(Q.__webglFramebuffer,A,Nt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),g(Nt,gt)&&w(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ht=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,it.__webglTexture),Z(ht,x,gt),a&&x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)vt(Q.__webglFramebuffer[ft],A,x,i.COLOR_ATTACHMENT0,ht,ft);else vt(Q.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,ht,0);g(x,gt)&&w(ht),e.unbindTexture()}A.depthBuffer&&Mt(A)}function xt(A){let x=u(A)||a,Q=A.textures;for(let it=0,at=Q.length;it<at;it++){let rt=Q[it];if(g(rt,x)){let kt=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,gt=n.get(rt).__webglTexture;e.bindTexture(kt,gt),w(kt),e.unbindTexture()}}}function zt(A){if(a&&A.samples>0&&Vt(A)===!1){let x=A.textures,Q=A.width,it=A.height,at=i.COLOR_BUFFER_BIT,rt=[],kt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(A),ht=x.length>1;if(ht)for(let ft=0;ft<x.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ft=0;ft<x.length;ft++){rt.push(i.COLOR_ATTACHMENT0+ft),A.depthBuffer&&rt.push(kt);let Nt=gt.__ignoreDepthValues!==void 0?gt.__ignoreDepthValues:!1;if(Nt===!1&&(A.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),ht&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[ft]),Nt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[kt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[kt])),ht){let ot=n.get(x[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,Q,it,0,0,Q,it,at,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let ft=0;ft<x.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,gt.__webglColorRenderbuffer[ft]);let Nt=n.get(x[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}}function Tt(A){return Math.min(s.maxSamples,A.samples)}function Vt(A){let x=n.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Gt(A){let x=o.render.frame;f.get(A)!==x&&(f.set(A,x),A.update())}function $t(A,x){let Q=A.colorSpace,it=A.format,at=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===da||Q!==Xn&&Q!==Un&&(oe.getTransfer(Q)===de?a===!1?t.has("EXT_sRGB")===!0&&it===on?(A.format=da,A.minFilter=Ge,A.generateMipmaps=!1):x=Ks.sRGBToLinear(x):(it!==on||at!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),x}function ge(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=$,this.resetTextureUnits=R,this.setTexture2D=K,this.setTexture2DArray=W,this.setTexture3D=L,this.setTextureCube=B,this.rebindTextures=D,this.setupRenderTarget=re,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Vt}function em(i,t,e){let n=e.isWebGL2;function s(r,o=Un){let a,l=oe.getTransfer(o);if(r===Bn)return i.UNSIGNED_BYTE;if(r===Ul)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Nl)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Xc)return i.BYTE;if(r===qc)return i.SHORT;if(r===Ga)return i.UNSIGNED_SHORT;if(r===Dl)return i.INT;if(r===Nn)return i.UNSIGNED_INT;if(r===bn)return i.FLOAT;if(r===as)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Yc)return i.ALPHA;if(r===on)return i.RGBA;if(r===Zc)return i.LUMINANCE;if(r===Jc)return i.LUMINANCE_ALPHA;if(r===li)return i.DEPTH_COMPONENT;if(r===Gi)return i.DEPTH_STENCIL;if(r===da)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===$c)return i.RED;if(r===Fl)return i.RED_INTEGER;if(r===Kc)return i.RG;if(r===Ol)return i.RG_INTEGER;if(r===Bl)return i.RGBA_INTEGER;if(r===Rr||r===Cr||r===Pr||r===Ir)if(l===de)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Rr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ir)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Rr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ir)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===co||r===ho||r===uo||r===fo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===co)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ho)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===uo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zl)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===po||r===mo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===po)return l===de?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===mo)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===go||r===_o||r===xo||r===vo||r===yo||r===Mo||r===So||r===bo||r===Eo||r===To||r===wo||r===Ao||r===Ro||r===Co)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===go)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_o)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xo)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vo)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yo)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Mo)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===So)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bo)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Eo)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===To)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===wo)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ao)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ro)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Co)return l===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Lr||r===Po||r===Io)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Lr)return l===de?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Po)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Io)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===jc||r===Lo||r===Do||r===Uo)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Lr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Lo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Do)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Uo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===oi?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var wa=class extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Fi=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},nm={type:"move"},rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let M of t.hand.values()){let d=e.getJointPose(M,n),u=this._getHandJoint(c,M);d!==null&&(u.matrix.fromArray(d.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=d.radius),u.visible=d!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=h.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&p>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Fi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},im=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sm=`
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

}`,Aa=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Oe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){let n=e.cameras[0].viewport,s=new pn({extensions:{fragDepth:!0},vertexShader:im,fragmentShader:sm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Fe(new Wn(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}},Ra=class extends kn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,p=null,m=null,v=null,M=new Aa,d=e.getContextAttributes(),u=null,T=null,g=[],w=[],I=new Xt,C=null,y=new ke;y.layers.enable(1),y.viewport=new Re;let U=new ke;U.layers.enable(2),U.viewport=new Re;let J=[y,U],_=new wa;_.layers.enable(1),_.layers.enable(2);let S=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let st=g[Z];return st===void 0&&(st=new rs,g[Z]=st),st.getTargetRaySpace()},this.getControllerGrip=function(Z){let st=g[Z];return st===void 0&&(st=new rs,g[Z]=st),st.getGripSpace()},this.getHand=function(Z){let st=g[Z];return st===void 0&&(st=new rs,g[Z]=st),st.getHandSpace()};function j(Z){let st=w.indexOf(Z.inputSource);if(st===-1)return;let ct=g[st];ct!==void 0&&(ct.update(Z.inputSource,Z.frame,c||o),ct.dispatchEvent({type:Z.type,data:Z.inputSource}))}function R(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",R),s.removeEventListener("inputsourceschange",$);for(let Z=0;Z<g.length;Z++){let st=w[Z];st!==null&&(w[Z]=null,g[Z].disconnect(st))}S=null,q=null,M.reset(),t.setRenderTarget(u),m=null,p=null,f=null,s=null,T=null,yt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",R),s.addEventListener("inputsourceschange",$),d.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let st={antialias:s.renderState.layers===void 0?d.antialias:!0,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new wn(m.framebufferWidth,m.framebufferHeight,{format:on,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let st=null,ct=null,Pt=null;d.depth&&(Pt=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=d.stencil?Gi:li,ct=d.stencil?oi:Nn);let vt={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:r};f=new XRWebGLBinding(s,e),p=f.createProjectionLayer(vt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),T=new wn(p.textureWidth,p.textureHeight,{format:on,type:Bn,depthTexture:new lr(p.textureWidth,p.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0});let dt=t.properties.get(T);dt.__ignoreDepthValues=p.ignoreDepthValues}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),yt.setContext(s),yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function $(Z){for(let st=0;st<Z.removed.length;st++){let ct=Z.removed[st],Pt=w.indexOf(ct);Pt>=0&&(w[Pt]=null,g[Pt].disconnect(ct))}for(let st=0;st<Z.added.length;st++){let ct=Z.added[st],Pt=w.indexOf(ct);if(Pt===-1){for(let dt=0;dt<g.length;dt++)if(dt>=w.length){w.push(ct),Pt=dt;break}else if(w[dt]===null){w[dt]=ct,Pt=dt;break}if(Pt===-1)break}let vt=g[Pt];vt&&vt.connect(ct)}}let V=new G,K=new G;function W(Z,st,ct){V.setFromMatrixPosition(st.matrixWorld),K.setFromMatrixPosition(ct.matrixWorld);let Pt=V.distanceTo(K),vt=st.projectionMatrix.elements,dt=ct.projectionMatrix.elements,It=vt[14]/(vt[10]-1),Mt=vt[14]/(vt[10]+1),D=(vt[9]+1)/vt[5],re=(vt[9]-1)/vt[5],xt=(vt[8]-1)/vt[0],zt=(dt[8]+1)/dt[0],Tt=It*xt,Vt=It*zt,Gt=Pt/(-xt+zt),$t=Gt*-xt;st.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX($t),Z.translateZ(Gt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();let ge=It+Gt,A=Mt+Gt,x=Tt-$t,Q=Vt+(Pt-$t),it=D*Mt/A*ge,at=re*Mt/A*ge;Z.projectionMatrix.makePerspective(x,Q,it,at,ge,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function L(Z,st){st===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(st.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;M.texture!==null&&(Z.near=M.depthNear,Z.far=M.depthFar),_.near=U.near=y.near=Z.near,_.far=U.far=y.far=Z.far,(S!==_.near||q!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,q=_.far,y.near=S,y.far=q,U.near=S,U.far=q,y.updateProjectionMatrix(),U.updateProjectionMatrix(),Z.updateProjectionMatrix());let st=Z.parent,ct=_.cameras;L(_,st);for(let Pt=0;Pt<ct.length;Pt++)L(ct[Pt],st);ct.length===2?W(_,y,U):_.projectionMatrix.copy(y.projectionMatrix),B(Z,_,st)};function B(Z,st,ct){ct===null?Z.matrix.copy(st.matrixWorld):(Z.matrix.copy(ct.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(st.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(st.projectionMatrix),Z.projectionMatrixInverse.copy(st.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=fa*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(Z){l=Z,p!==null&&(p.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return M.texture!==null};let z=null;function et(Z,st){if(h=st.getViewerPose(c||o),v=st,h!==null){let ct=h.views;m!==null&&(t.setRenderTargetFramebuffer(T,m.framebuffer),t.setRenderTarget(T));let Pt=!1;ct.length!==_.cameras.length&&(_.cameras.length=0,Pt=!0);for(let dt=0;dt<ct.length;dt++){let It=ct[dt],Mt=null;if(m!==null)Mt=m.getViewport(It);else{let re=f.getViewSubImage(p,It);Mt=re.viewport,dt===0&&(t.setRenderTargetTextures(T,re.colorTexture,p.ignoreDepthValues?void 0:re.depthStencilTexture),t.setRenderTarget(T))}let D=J[dt];D===void 0&&(D=new ke,D.layers.enable(dt),D.viewport=new Re,J[dt]=D),D.matrix.fromArray(It.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(It.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),dt===0&&(_.matrix.copy(D.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Pt===!0&&_.cameras.push(D)}let vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")){let dt=f.getDepthInformation(ct[0]);dt&&dt.isValid&&dt.texture&&M.init(t,dt,s.renderState)}}for(let ct=0;ct<g.length;ct++){let Pt=w[ct],vt=g[ct];Pt!==null&&vt!==void 0&&vt.update(Pt,st,c||o)}M.render(t,_),z&&z(Z,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),v=null}let yt=new Xl;yt.setAnimationLoop(et),this.setAnimationLoop=function(Z){z=Z},this.dispose=function(){}}},ni=new fn,rm=new ve;function am(i,t){function e(d,u){d.matrixAutoUpdate===!0&&d.updateMatrix(),u.value.copy(d.matrix)}function n(d,u){u.color.getRGB(d.fogColor.value,Wl(i)),u.isFog?(d.fogNear.value=u.near,d.fogFar.value=u.far):u.isFogExp2&&(d.fogDensity.value=u.density)}function s(d,u,T,g,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(d,u):u.isMeshToonMaterial?(r(d,u),f(d,u)):u.isMeshPhongMaterial?(r(d,u),h(d,u)):u.isMeshStandardMaterial?(r(d,u),p(d,u),u.isMeshPhysicalMaterial&&m(d,u,w)):u.isMeshMatcapMaterial?(r(d,u),v(d,u)):u.isMeshDepthMaterial?r(d,u):u.isMeshDistanceMaterial?(r(d,u),M(d,u)):u.isMeshNormalMaterial?r(d,u):u.isLineBasicMaterial?(o(d,u),u.isLineDashedMaterial&&a(d,u)):u.isPointsMaterial?l(d,u,T,g):u.isSpriteMaterial?c(d,u):u.isShadowMaterial?(d.color.value.copy(u.color),d.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(d,u){d.opacity.value=u.opacity,u.color&&d.diffuse.value.copy(u.color),u.emissive&&d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(d.map.value=u.map,e(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.bumpMap&&(d.bumpMap.value=u.bumpMap,e(u.bumpMap,d.bumpMapTransform),d.bumpScale.value=u.bumpScale,u.side===qe&&(d.bumpScale.value*=-1)),u.normalMap&&(d.normalMap.value=u.normalMap,e(u.normalMap,d.normalMapTransform),d.normalScale.value.copy(u.normalScale),u.side===qe&&d.normalScale.value.negate()),u.displacementMap&&(d.displacementMap.value=u.displacementMap,e(u.displacementMap,d.displacementMapTransform),d.displacementScale.value=u.displacementScale,d.displacementBias.value=u.displacementBias),u.emissiveMap&&(d.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,d.emissiveMapTransform)),u.specularMap&&(d.specularMap.value=u.specularMap,e(u.specularMap,d.specularMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);let T=t.get(u),g=T.envMap,w=T.envMapRotation;if(g&&(d.envMap.value=g,ni.copy(w),ni.x*=-1,ni.y*=-1,ni.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),d.envMapRotation.value.setFromMatrix4(rm.makeRotationFromEuler(ni)),d.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=u.reflectivity,d.ior.value=u.ior,d.refractionRatio.value=u.refractionRatio),u.lightMap){d.lightMap.value=u.lightMap;let I=i._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=u.lightMapIntensity*I,e(u.lightMap,d.lightMapTransform)}u.aoMap&&(d.aoMap.value=u.aoMap,d.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,d.aoMapTransform))}function o(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,u.map&&(d.map.value=u.map,e(u.map,d.mapTransform))}function a(d,u){d.dashSize.value=u.dashSize,d.totalSize.value=u.dashSize+u.gapSize,d.scale.value=u.scale}function l(d,u,T,g){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.size.value=u.size*T,d.scale.value=g*.5,u.map&&(d.map.value=u.map,e(u.map,d.uvTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function c(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.rotation.value=u.rotation,u.map&&(d.map.value=u.map,e(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function h(d,u){d.specular.value.copy(u.specular),d.shininess.value=Math.max(u.shininess,1e-4)}function f(d,u){u.gradientMap&&(d.gradientMap.value=u.gradientMap)}function p(d,u){d.metalness.value=u.metalness,u.metalnessMap&&(d.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,d.metalnessMapTransform)),d.roughness.value=u.roughness,u.roughnessMap&&(d.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,d.roughnessMapTransform)),t.get(u).envMap&&(d.envMapIntensity.value=u.envMapIntensity)}function m(d,u,T){d.ior.value=u.ior,u.sheen>0&&(d.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),d.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(d.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,d.sheenColorMapTransform)),u.sheenRoughnessMap&&(d.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,d.sheenRoughnessMapTransform))),u.clearcoat>0&&(d.clearcoat.value=u.clearcoat,d.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(d.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,d.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(d.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===qe&&d.clearcoatNormalScale.value.negate())),u.iridescence>0&&(d.iridescence.value=u.iridescence,d.iridescenceIOR.value=u.iridescenceIOR,d.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(d.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,d.iridescenceMapTransform)),u.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),u.transmission>0&&(d.transmission.value=u.transmission,d.transmissionSamplerMap.value=T.texture,d.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(d.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,d.transmissionMapTransform)),d.thickness.value=u.thickness,u.thicknessMap&&(d.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=u.attenuationDistance,d.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(d.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(d.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=u.specularIntensity,d.specularColor.value.copy(u.specularColor),u.specularColorMap&&(d.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,d.specularColorMapTransform)),u.specularIntensityMap&&(d.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,d.specularIntensityMapTransform))}function v(d,u){u.matcap&&(d.matcap.value=u.matcap)}function M(d,u){let T=t.get(u).light;d.referencePosition.value.setFromMatrixPosition(T.matrixWorld),d.nearDistance.value=T.shadow.camera.near,d.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function om(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,g){let w=g.program;n.uniformBlockBinding(T,w)}function c(T,g){let w=s[T.id];w===void 0&&(v(T),w=h(T),s[T.id]=w,T.addEventListener("dispose",d));let I=g.program;n.updateUBOMapping(T,I);let C=t.render.frame;r[T.id]!==C&&(p(T),r[T.id]=C)}function h(T){let g=f();T.__bindingPointIndex=g;let w=i.createBuffer(),I=T.__size,C=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,I,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,w),w}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(T){let g=s[T.id],w=T.uniforms,I=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let C=0,y=w.length;C<y;C++){let U=Array.isArray(w[C])?w[C]:[w[C]];for(let J=0,_=U.length;J<_;J++){let S=U[J];if(m(S,C,J,I)===!0){let q=S.__offset,j=Array.isArray(S.value)?S.value:[S.value],R=0;for(let $=0;$<j.length;$++){let V=j[$],K=M(V);typeof V=="number"||typeof V=="boolean"?(S.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,q+R,S.__data)):V.isMatrix3?(S.__data[0]=V.elements[0],S.__data[1]=V.elements[1],S.__data[2]=V.elements[2],S.__data[3]=0,S.__data[4]=V.elements[3],S.__data[5]=V.elements[4],S.__data[6]=V.elements[5],S.__data[7]=0,S.__data[8]=V.elements[6],S.__data[9]=V.elements[7],S.__data[10]=V.elements[8],S.__data[11]=0):(V.toArray(S.__data,R),R+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,g,w,I){let C=T.value,y=g+"_"+w;if(I[y]===void 0)return typeof C=="number"||typeof C=="boolean"?I[y]=C:I[y]=C.clone(),!0;{let U=I[y];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return I[y]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function v(T){let g=T.uniforms,w=0,I=16;for(let y=0,U=g.length;y<U;y++){let J=Array.isArray(g[y])?g[y]:[g[y]];for(let _=0,S=J.length;_<S;_++){let q=J[_],j=Array.isArray(q.value)?q.value:[q.value];for(let R=0,$=j.length;R<$;R++){let V=j[R],K=M(V),W=w%I;W!==0&&I-W<K.boundary&&(w+=I-W),q.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=w,w+=K.storage}}}let C=w%I;return C>0&&(w+=I-C),T.__size=w,T.__cache={},this}function M(T){let g={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(g.boundary=4,g.storage=4):T.isVector2?(g.boundary=8,g.storage=8):T.isVector3||T.isColor?(g.boundary=16,g.storage=12):T.isVector4?(g.boundary=16,g.storage=16):T.isMatrix3?(g.boundary=48,g.storage=48):T.isMatrix4?(g.boundary=64,g.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),g}function d(T){let g=T.target;g.removeEventListener("dispose",d);let w=o.indexOf(g.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[g.id]),delete s[g.id],delete r[g.id]}function u(){for(let T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var us=class{constructor(t={}){let{canvas:e=ch(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;let m=new Uint32Array(4),v=new Int32Array(4),M=null,d=null,u=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this._useLegacyLights=!1,this.toneMapping=On,this.toneMappingExposure=1;let g=this,w=!1,I=0,C=0,y=null,U=-1,J=null,_=new Re,S=new Re,q=null,j=new Qt(0),R=0,$=e.width,V=e.height,K=1,W=null,L=null,B=new Re(0,0,$,V),z=new Re(0,0,$,V),et=!1,yt=new cs,Z=!1,st=!1,ct=null,Pt=new ve,vt=new Xt,dt=new G,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Mt(){return y===null?K:1}let D=n;function re(b,F){for(let H=0;H<b.length;H++){let Y=b[H],k=e.getContext(Y,F);if(k!==null)return k}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r162"),e.addEventListener("webglcontextlost",te,!1),e.addEventListener("webglcontextrestored",N,!1),e.addEventListener("webglcontextcreationerror",pt,!1),D===null){let F=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&F.shift(),D=re(F,b),D===null)throw re(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let xt,zt,Tt,Vt,Gt,$t,ge,A,x,Q,it,at,rt,kt,gt,ht,ft,Nt,ot,fe,qt,At,bt,St;function Kt(){xt=new bf(D),zt=new _f(D,xt,t),xt.init(zt),At=new em(D,xt,zt),Tt=new Qp(D,xt,zt),Vt=new wf(D),Gt=new Hp,$t=new tm(D,xt,Tt,Gt,zt,At,Vt),ge=new vf(g),A=new Sf(g),x=new Ih(D,zt),bt=new mf(D,xt,x,zt),Q=new Ef(D,x,Vt,bt),it=new Pf(D,Q,x,Vt),ot=new Cf(D,zt,$t),ht=new xf(Gt),at=new kp(g,ge,A,xt,zt,bt,ht),rt=new am(g,Gt),kt=new Gp,gt=new Jp(xt,zt),Nt=new pf(g,ge,A,Tt,it,p,l),ft=new jp(g,it,zt),St=new om(D,Vt,zt,Tt),fe=new gf(D,xt,Vt,zt),qt=new Tf(D,xt,Vt,zt),Vt.programs=at.programs,g.capabilities=zt,g.extensions=xt,g.properties=Gt,g.renderLists=kt,g.shadowMap=ft,g.state=Tt,g.info=Vt}Kt();let Rt=new Ra(g,D);this.xr=Rt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let b=xt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=xt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(b){b!==void 0&&(K=b,this.setSize($,V,!1))},this.getSize=function(b){return b.set($,V)},this.setSize=function(b,F,H=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,V=F,e.width=Math.floor(b*K),e.height=Math.floor(F*K),H===!0&&(e.style.width=b+"px",e.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set($*K,V*K).floor()},this.setDrawingBufferSize=function(b,F,H){$=b,V=F,K=H,e.width=Math.floor(b*H),e.height=Math.floor(F*H),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(_)},this.getViewport=function(b){return b.copy(B)},this.setViewport=function(b,F,H,Y){b.isVector4?B.set(b.x,b.y,b.z,b.w):B.set(b,F,H,Y),Tt.viewport(_.copy(B).multiplyScalar(K).round())},this.getScissor=function(b){return b.copy(z)},this.setScissor=function(b,F,H,Y){b.isVector4?z.set(b.x,b.y,b.z,b.w):z.set(b,F,H,Y),Tt.scissor(S.copy(z).multiplyScalar(K).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(b){Tt.setScissorTest(et=b)},this.setOpaqueSort=function(b){W=b},this.setTransparentSort=function(b){L=b},this.getClearColor=function(b){return b.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(b=!0,F=!0,H=!0){let Y=0;if(b){let k=!1;if(y!==null){let _t=y.texture.format;k=_t===Bl||_t===Ol||_t===Fl}if(k){let _t=y.texture.type,Et=_t===Bn||_t===Nn||_t===Ga||_t===oi||_t===Ul||_t===Nl,wt=Nt.getClearColor(),Lt=Nt.getClearAlpha(),Bt=wt.r,Ot=wt.g,Ft=wt.b;Et?(m[0]=Bt,m[1]=Ot,m[2]=Ft,m[3]=Lt,D.clearBufferuiv(D.COLOR,0,m)):(v[0]=Bt,v[1]=Ot,v[2]=Ft,v[3]=Lt,D.clearBufferiv(D.COLOR,0,v))}else Y|=D.COLOR_BUFFER_BIT}F&&(Y|=D.DEPTH_BUFFER_BIT),H&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",te,!1),e.removeEventListener("webglcontextrestored",N,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),kt.dispose(),gt.dispose(),Gt.dispose(),ge.dispose(),A.dispose(),it.dispose(),bt.dispose(),St.dispose(),at.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",xe),Rt.removeEventListener("sessionend",ne),ct&&(ct.dispose(),ct=null),Te.stop()};function te(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let b=Vt.autoReset,F=ft.enabled,H=ft.autoUpdate,Y=ft.needsUpdate,k=ft.type;Kt(),Vt.autoReset=b,ft.enabled=F,ft.autoUpdate=H,ft.needsUpdate=Y,ft.type=k}function pt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function X(b){let F=b.target;F.removeEventListener("dispose",X),lt(F)}function lt(b){mt(b),Gt.remove(b)}function mt(b){let F=Gt.get(b).programs;F!==void 0&&(F.forEach(function(H){at.releaseProgram(H)}),b.isShaderMaterial&&at.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,H,Y,k,_t){F===null&&(F=It);let Et=k.isMesh&&k.matrixWorld.determinant()<0,wt=xs(b,F,H,Y,k);Tt.setMaterial(Y,Et);let Lt=H.index,Bt=1;if(Y.wireframe===!0){if(Lt=Q.getWireframeAttribute(H),Lt===void 0)return;Bt=2}let Ot=H.drawRange,Ft=H.attributes.position,_e=Ot.start*Bt,Ce=(Ot.start+Ot.count)*Bt;_t!==null&&(_e=Math.max(_e,_t.start*Bt),Ce=Math.min(Ce,(_t.start+_t.count)*Bt)),Lt!==null?(_e=Math.max(_e,0),Ce=Math.min(Ce,Lt.count)):Ft!=null&&(_e=Math.max(_e,0),Ce=Math.min(Ce,Ft.count));let ye=Ce-_e;if(ye<0||ye===1/0)return;bt.setup(k,Y,wt,H,Lt);let Pe,ae=fe;if(Lt!==null&&(Pe=x.get(Lt),ae=qt,ae.setIndex(Pe)),k.isMesh)Y.wireframe===!0?(Tt.setLineWidth(Y.wireframeLinewidth*Mt()),ae.setMode(D.LINES)):ae.setMode(D.TRIANGLES);else if(k.isLine){let Ht=Y.linewidth;Ht===void 0&&(Ht=1),Tt.setLineWidth(Ht*Mt()),k.isLineSegments?ae.setMode(D.LINES):k.isLineLoop?ae.setMode(D.LINE_LOOP):ae.setMode(D.LINE_STRIP)}else k.isPoints?ae.setMode(D.POINTS):k.isSprite&&ae.setMode(D.TRIANGLES);if(k.isBatchedMesh)ae.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)ae.renderInstances(_e,ye,k.count);else if(H.isInstancedBufferGeometry){let Ht=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,An=Math.min(H.instanceCount,Ht);ae.renderInstances(_e,ye,An)}else ae.render(_e,ye)};function jt(b,F,H){b.transparent===!0&&b.side===je&&b.forceSinglePass===!1?(b.side=qe,b.needsUpdate=!0,Zn(b,F,H),b.side=zn,b.needsUpdate=!0,Zn(b,F,H),b.side=je):Zn(b,F,H)}this.compile=function(b,F,H=null){H===null&&(H=b),d=gt.get(H),d.init(),T.push(d),H.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),b!==H&&b.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights(g._useLegacyLights);let Y=new Set;return b.traverse(function(k){let _t=k.material;if(_t)if(Array.isArray(_t))for(let Et=0;Et<_t.length;Et++){let wt=_t[Et];jt(wt,H,k),Y.add(wt)}else jt(_t,H,k),Y.add(_t)}),T.pop(),d=null,Y},this.compileAsync=function(b,F,H=null){let Y=this.compile(b,F,H);return new Promise(k=>{function _t(){if(Y.forEach(function(Et){Gt.get(Et).currentProgram.isReady()&&Y.delete(Et)}),Y.size===0){k(b);return}setTimeout(_t,10)}xt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let se=null;function ue(b){se&&se(b)}function xe(){Te.stop()}function ne(){Te.start()}let Te=new Xl;Te.setAnimationLoop(ue),typeof self<"u"&&Te.setContext(self),this.setAnimationLoop=function(b){se=b,Rt.setAnimationLoop(b),b===null?Te.stop():Te.start()},Rt.addEventListener("sessionstart",xe),Rt.addEventListener("sessionend",ne),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(F),F=Rt.getCamera()),b.isScene===!0&&b.onBeforeRender(g,b,F,y),d=gt.get(b,T.length),d.init(),T.push(d),Pt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),yt.setFromProjectionMatrix(Pt),st=this.localClippingEnabled,Z=ht.init(this.clippingPlanes,st),M=kt.get(b,u.length),M.init(),u.push(M),Ye(b,F,0,g.sortObjects),M.finish(),g.sortObjects===!0&&M.sort(W,L),this.info.render.frame++,Z===!0&&ht.beginShadows();let H=d.state.shadowsArray;if(ft.render(H,b,F),Z===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1)&&Nt.render(M,b),d.setupLights(g._useLegacyLights),F.isArrayCamera){let Y=F.cameras;for(let k=0,_t=Y.length;k<_t;k++){let Et=Y[k];Zi(M,b,Et,Et.viewport)}}else Zi(M,b,F);y!==null&&($t.updateMultisampleRenderTarget(y),$t.updateRenderTargetMipmap(y)),b.isScene===!0&&b.onAfterRender(g,b,F),bt.resetDefaultState(),U=-1,J=null,T.pop(),T.length>0?d=T[T.length-1]:d=null,u.pop(),u.length>0?M=u[u.length-1]:M=null};function Ye(b,F,H,Y){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||yt.intersectsSprite(b)){Y&&dt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Pt);let Et=it.update(b),wt=b.material;wt.visible&&M.push(b,Et,wt,H,dt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||yt.intersectsObject(b))){let Et=it.update(b),wt=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),dt.copy(b.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),dt.copy(Et.boundingSphere.center)),dt.applyMatrix4(b.matrixWorld).applyMatrix4(Pt)),Array.isArray(wt)){let Lt=Et.groups;for(let Bt=0,Ot=Lt.length;Bt<Ot;Bt++){let Ft=Lt[Bt],_e=wt[Ft.materialIndex];_e&&_e.visible&&M.push(b,Et,_e,H,dt.z,Ft)}}else wt.visible&&M.push(b,Et,wt,H,dt.z,null)}}let _t=b.children;for(let Et=0,wt=_t.length;Et<wt;Et++)Ye(_t[Et],F,H,Y)}function Zi(b,F,H,Y){let k=b.opaque,_t=b.transmissive,Et=b.transparent;d.setupLightsView(H),Z===!0&&ht.setGlobalState(g.clippingPlanes,H),_t.length>0&&gs(k,_t,F,H),Y&&Tt.viewport(_.copy(Y)),k.length>0&&Yn(k,F,H),_t.length>0&&Yn(_t,F,H),Et.length>0&&Yn(Et,F,H),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function gs(b,F,H,Y){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let _t=zt.isWebGL2;ct===null&&(ct=new wn(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?as:Bn,minFilter:ai,samples:_t?4:0})),g.getDrawingBufferSize(vt),_t?ct.setSize(vt.x,vt.y):ct.setSize(pa(vt.x),pa(vt.y));let Et=g.getRenderTarget();g.setRenderTarget(ct),g.getClearColor(j),R=g.getClearAlpha(),R<1&&g.setClearColor(16777215,.5),g.clear();let wt=g.toneMapping;g.toneMapping=On,Yn(b,H,Y),$t.updateMultisampleRenderTarget(ct),$t.updateRenderTargetMipmap(ct);let Lt=!1;for(let Bt=0,Ot=F.length;Bt<Ot;Bt++){let Ft=F[Bt],_e=Ft.object,Ce=Ft.geometry,ye=Ft.material,Pe=Ft.group;if(ye.side===je&&_e.layers.test(Y.layers)){let ae=ye.side;ye.side=qe,ye.needsUpdate=!0,Ji(_e,H,Y,Ce,ye,Pe),ye.side=ae,ye.needsUpdate=!0,Lt=!0}}Lt===!0&&($t.updateMultisampleRenderTarget(ct),$t.updateRenderTargetMipmap(ct)),g.setRenderTarget(Et),g.setClearColor(j,R),g.toneMapping=wt}function Yn(b,F,H){let Y=F.isScene===!0?F.overrideMaterial:null;for(let k=0,_t=b.length;k<_t;k++){let Et=b[k],wt=Et.object,Lt=Et.geometry,Bt=Y===null?Et.material:Y,Ot=Et.group;wt.layers.test(H.layers)&&Ji(wt,F,H,Lt,Bt,Ot)}}function Ji(b,F,H,Y,k,_t){b.onBeforeRender(g,F,H,Y,k,_t),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(g,F,H,Y,b,_t),k.transparent===!0&&k.side===je&&k.forceSinglePass===!1?(k.side=qe,k.needsUpdate=!0,g.renderBufferDirect(H,F,Y,k,b,_t),k.side=zn,k.needsUpdate=!0,g.renderBufferDirect(H,F,Y,k,b,_t),k.side=je):g.renderBufferDirect(H,F,Y,k,b,_t),b.onAfterRender(g,F,H,Y,k,_t)}function Zn(b,F,H){F.isScene!==!0&&(F=It);let Y=Gt.get(b),k=d.state.lights,_t=d.state.shadowsArray,Et=k.state.version,wt=at.getParameters(b,k.state,_t,F,H),Lt=at.getProgramCacheKey(wt),Bt=Y.programs;Y.environment=b.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(b.isMeshStandardMaterial?A:ge).get(b.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Bt===void 0&&(b.addEventListener("dispose",X),Bt=new Map,Y.programs=Bt);let Ot=Bt.get(Lt);if(Ot!==void 0){if(Y.currentProgram===Ot&&Y.lightsStateVersion===Et)return $i(b,wt),Ot}else wt.uniforms=at.getUniforms(b),b.onBuild(H,wt,g),b.onBeforeCompile(wt,g),Ot=at.acquireProgram(wt,Lt),Bt.set(Lt,Ot),Y.uniforms=wt.uniforms;let Ft=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ft.clippingPlanes=ht.uniform),$i(b,wt),Y.needsLights=mn(b),Y.lightsStateVersion=Et,Y.needsLights&&(Ft.ambientLightColor.value=k.state.ambient,Ft.lightProbe.value=k.state.probe,Ft.directionalLights.value=k.state.directional,Ft.directionalLightShadows.value=k.state.directionalShadow,Ft.spotLights.value=k.state.spot,Ft.spotLightShadows.value=k.state.spotShadow,Ft.rectAreaLights.value=k.state.rectArea,Ft.ltc_1.value=k.state.rectAreaLTC1,Ft.ltc_2.value=k.state.rectAreaLTC2,Ft.pointLights.value=k.state.point,Ft.pointLightShadows.value=k.state.pointShadow,Ft.hemisphereLights.value=k.state.hemi,Ft.directionalShadowMap.value=k.state.directionalShadowMap,Ft.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ft.spotShadowMap.value=k.state.spotShadowMap,Ft.spotLightMatrix.value=k.state.spotLightMatrix,Ft.spotLightMap.value=k.state.spotLightMap,Ft.pointShadowMap.value=k.state.pointShadowMap,Ft.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=Ot,Y.uniformsList=null,Ot}function _s(b){if(b.uniformsList===null){let F=b.currentProgram.getUniforms();b.uniformsList=zi.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function $i(b,F){let H=Gt.get(b);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function xs(b,F,H,Y,k){F.isScene!==!0&&(F=It),$t.resetTextureUnits();let _t=F.fog,Et=Y.isMeshStandardMaterial?F.environment:null,wt=y===null?g.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Xn,Lt=(Y.isMeshStandardMaterial?A:ge).get(Y.envMap||Et),Bt=Y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ot=!!H.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ft=!!H.morphAttributes.position,_e=!!H.morphAttributes.normal,Ce=!!H.morphAttributes.color,ye=On;Y.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(ye=g.toneMapping);let Pe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ae=Pe!==void 0?Pe.length:0,Ht=Gt.get(Y),An=d.state.lights;if(Z===!0&&(st===!0||b!==J)){let De=b===J&&Y.id===U;ht.setState(Y,b,De)}let le=!1;Y.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==An.state.version||Ht.outputColorSpace!==wt||k.isBatchedMesh&&Ht.batching===!1||!k.isBatchedMesh&&Ht.batching===!0||k.isInstancedMesh&&Ht.instancing===!1||!k.isInstancedMesh&&Ht.instancing===!0||k.isSkinnedMesh&&Ht.skinning===!1||!k.isSkinnedMesh&&Ht.skinning===!0||k.isInstancedMesh&&Ht.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ht.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ht.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ht.instancingMorph===!1&&k.morphTexture!==null||Ht.envMap!==Lt||Y.fog===!0&&Ht.fog!==_t||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==ht.numPlanes||Ht.numIntersection!==ht.numIntersection)||Ht.vertexAlphas!==Bt||Ht.vertexTangents!==Ot||Ht.morphTargets!==Ft||Ht.morphNormals!==_e||Ht.morphColors!==Ce||Ht.toneMapping!==ye||zt.isWebGL2===!0&&Ht.morphTargetsCount!==ae)&&(le=!0):(le=!0,Ht.__version=Y.version);let hn=Ht.currentProgram;le===!0&&(hn=Zn(Y,F,k));let Ki=!1,Jn=!1,ji=!1,we=hn.getUniforms(),Qe=Ht.uniforms;if(Tt.useProgram(hn.program)&&(Ki=!0,Jn=!0,ji=!0),Y.id!==U&&(U=Y.id,Jn=!0),Ki||J!==b){we.setValue(D,"projectionMatrix",b.projectionMatrix),we.setValue(D,"viewMatrix",b.matrixWorldInverse);let De=we.map.cameraPosition;De!==void 0&&De.setValue(D,dt.setFromMatrixPosition(b.matrixWorld)),zt.logarithmicDepthBuffer&&we.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&we.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),J!==b&&(J=b,Jn=!0,ji=!0)}if(k.isSkinnedMesh){we.setOptional(D,k,"bindMatrix"),we.setOptional(D,k,"bindMatrixInverse");let De=k.skeleton;De&&(zt.floatVertexTextures?(De.boneTexture===null&&De.computeBoneTexture(),we.setValue(D,"boneTexture",De.boneTexture,$t)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(we.setOptional(D,k,"batchingTexture"),we.setValue(D,"batchingTexture",k._matricesTexture,$t));let mi=H.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0&&zt.isWebGL2===!0)&&ot.update(k,H,hn),(Jn||Ht.receiveShadow!==k.receiveShadow)&&(Ht.receiveShadow=k.receiveShadow,we.setValue(D,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Qe.envMap.value=Lt,Qe.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),Jn&&(we.setValue(D,"toneMappingExposure",g.toneMappingExposure),Ht.needsLights&&Mr(Qe,ji),_t&&Y.fog===!0&&rt.refreshFogUniforms(Qe,_t),rt.refreshMaterialUniforms(Qe,Y,K,V,ct),zi.upload(D,_s(Ht),Qe,$t)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(zi.upload(D,_s(Ht),Qe,$t),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&we.setValue(D,"center",k.center),we.setValue(D,"modelViewMatrix",k.modelViewMatrix),we.setValue(D,"normalMatrix",k.normalMatrix),we.setValue(D,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let De=Y.uniformsGroups;for(let gi=0,$e=De.length;gi<$e;gi++)if(zt.isWebGL2){let tn=De[gi];St.update(tn,hn),St.bind(tn,hn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hn}function Mr(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function mn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(b,F,H){Gt.get(b.texture).__webglTexture=F,Gt.get(b.depthTexture).__webglTexture=H;let Y=Gt.get(b);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=H===void 0,Y.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,F){let H=Gt.get(b);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,H=0){y=b,I=F,C=H;let Y=!0,k=null,_t=!1,Et=!1;if(b){let Lt=Gt.get(b);Lt.__useDefaultFramebuffer!==void 0?(Tt.bindFramebuffer(D.FRAMEBUFFER,null),Y=!1):Lt.__webglFramebuffer===void 0?$t.setupRenderTarget(b):Lt.__hasExternalTextures&&$t.rebindTextures(b,Gt.get(b.texture).__webglTexture,Gt.get(b.depthTexture).__webglTexture);let Bt=b.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Et=!0);let Ot=Gt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ot[F])?k=Ot[F][H]:k=Ot[F],_t=!0):zt.isWebGL2&&b.samples>0&&$t.useMultisampledRTT(b)===!1?k=Gt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ot)?k=Ot[H]:k=Ot,_.copy(b.viewport),S.copy(b.scissor),q=b.scissorTest}else _.copy(B).multiplyScalar(K).floor(),S.copy(z).multiplyScalar(K).floor(),q=et;if(Tt.bindFramebuffer(D.FRAMEBUFFER,k)&&zt.drawBuffers&&Y&&Tt.drawBuffers(b,k),Tt.viewport(_),Tt.scissor(S),Tt.setScissorTest(q),_t){let Lt=Gt.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Lt.__webglTexture,H)}else if(Et){let Lt=Gt.get(b.texture),Bt=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.__webglTexture,H||0,Bt)}U=-1},this.readRenderTargetPixels=function(b,F,H,Y,k,_t,Et){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Gt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Et!==void 0&&(wt=wt[Et]),wt){Tt.bindFramebuffer(D.FRAMEBUFFER,wt);try{let Lt=b.texture,Bt=Lt.format,Ot=Lt.type;if(Bt!==on&&At.convert(Bt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ft=Ot===as&&(xt.has("EXT_color_buffer_half_float")||zt.isWebGL2&&xt.has("EXT_color_buffer_float"));if(Ot!==Bn&&At.convert(Ot)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ot===bn&&(zt.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!Ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-Y&&H>=0&&H<=b.height-k&&D.readPixels(F,H,Y,k,At.convert(Bt),At.convert(Ot),_t)}finally{let Lt=y!==null?Gt.get(y).__webglFramebuffer:null;Tt.bindFramebuffer(D.FRAMEBUFFER,Lt)}}},this.copyFramebufferToTexture=function(b,F,H=0){let Y=Math.pow(2,-H),k=Math.floor(F.image.width*Y),_t=Math.floor(F.image.height*Y);$t.setTexture2D(F,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,b.x,b.y,k,_t),Tt.unbindTexture()},this.copyTextureToTexture=function(b,F,H,Y=0){let k=F.image.width,_t=F.image.height,Et=At.convert(H.format),wt=At.convert(H.type);$t.setTexture2D(H,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,H.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,H.unpackAlignment),F.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Y,b.x,b.y,k,_t,Et,wt,F.image.data):F.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Y,b.x,b.y,F.mipmaps[0].width,F.mipmaps[0].height,Et,F.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,Y,b.x,b.y,Et,wt,F.image),Y===0&&H.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Tt.unbindTexture()},this.copyTextureToTexture3D=function(b,F,H,Y,k=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let _t=Math.round(b.max.x-b.min.x),Et=Math.round(b.max.y-b.min.y),wt=b.max.z-b.min.z+1,Lt=At.convert(Y.format),Bt=At.convert(Y.type),Ot;if(Y.isData3DTexture)$t.setTexture3D(Y,0),Ot=D.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)$t.setTexture2DArray(Y,0),Ot=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,Y.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,Y.unpackAlignment);let Ft=D.getParameter(D.UNPACK_ROW_LENGTH),_e=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ce=D.getParameter(D.UNPACK_SKIP_PIXELS),ye=D.getParameter(D.UNPACK_SKIP_ROWS),Pe=D.getParameter(D.UNPACK_SKIP_IMAGES),ae=H.isCompressedTexture?H.mipmaps[k]:H.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,ae.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ae.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,b.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,b.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,b.min.z),H.isDataTexture||H.isData3DTexture?D.texSubImage3D(Ot,k,F.x,F.y,F.z,_t,Et,wt,Lt,Bt,ae.data):Y.isCompressedArrayTexture?D.compressedTexSubImage3D(Ot,k,F.x,F.y,F.z,_t,Et,wt,Lt,ae.data):D.texSubImage3D(Ot,k,F.x,F.y,F.z,_t,Et,wt,Lt,Bt,ae),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ft),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_e),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ce),D.pixelStorei(D.UNPACK_SKIP_ROWS,ye),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pe),k===0&&Y.generateMipmaps&&D.generateMipmap(Ot),Tt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?$t.setTextureCube(b,0):b.isData3DTexture?$t.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?$t.setTexture2DArray(b,0):$t.setTexture2D(b,0),Tt.unbindTexture()},this.resetState=function(){I=0,C=0,y=null,Tt.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Xa?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===_r?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Ca=class extends us{};Ca.prototype.isWebGL1Renderer=!0;var cr=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ds=class extends Oe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Le,h=Le,f,p){super(null,o,a,l,c,h,s,r,f,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ui=class extends Oe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hr=class extends Vn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Qt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var fs=class extends Vn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Vs(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function lm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Xi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Pa=class extends Xi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:No,endingEnd:No}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fo:r=t,a=2*e-n;break;case Oo:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fo:o=t,l=2*n-e;break;case Oo:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,m=this._weightNext,v=(n-e)/(s-e),M=v*v,d=M*v,u=-p*d+2*p*M-p*v,T=(1+p)*d+(-1.5-2*p)*M+(-.5+p)*v+1,g=(-1-m)*d+(1.5+m)*M+.5*v,w=m*d-m*M;for(let I=0;I!==a;++I)r[I]=u*o[h+I]+T*o[c+I]+g*o[l+I]+w*o[f+I];return r}},Ia=class extends Xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),f=1-h;for(let p=0;p!==a;++p)r[p]=o[c+p]*f+o[l+p]*h;return r}},La=class extends Xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ln=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vs(e,this.TimeBufferType),this.values=Vs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vs(t.times,Array),values:Vs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new La(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ia(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Pa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ws:e=this.InterpolantFactoryMethodDiscrete;break;case Xs:e=this.InterpolantFactoryMethodLinear;break;case Dr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ws;case this.InterpolantFactoryMethodLinear:return Xs;case this.InterpolantFactoryMethodSmooth:return Dr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&lm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Dr,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*n,p=f-n,m=f+n;for(let v=0;v!==n;++v){let M=e[f+v];if(M!==e[p+v]||M!==e[m+v]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,p=o*n;for(let m=0;m!==n;++m)e[p+m]=e[f+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=Xs;var di=class extends ln{};di.prototype.ValueTypeName="bool";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Ws;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var Da=class extends ln{};Da.prototype.ValueTypeName="color";var Ua=class extends ln{};Ua.prototype.ValueTypeName="number";var Na=class extends Xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Hn.slerpFlat(r,0,o,c-a,o,c,l);return r}},ps=class extends ln{InterpolantFactoryMethodLinear(t){return new Na(this.times,this.values,this.getValueSize(),t)}};ps.prototype.ValueTypeName="quaternion";ps.prototype.DefaultInterpolation=Xs;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var fi=class extends ln{};fi.prototype.ValueTypeName="string";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=Ws;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fa=class extends ln{};Fa.prototype.ValueTypeName="vector";var Oa=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=c.length;f<p;f+=2){let m=c[f],v=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return v}return null}}},cm=new Oa,Ba=class{constructor(t){this.manager=t!==void 0?t:cm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ba.DEFAULT_MATERIAL_NAME="__DEFAULT";var ur=class extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},dr=class extends ur{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},aa=new ve,Al=new G,Rl=new G,za=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cs,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Al.setFromMatrixPosition(t.matrixWorld),e.position.copy(Al),Rl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rl),e.updateMatrixWorld(),aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(aa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ka=class extends za{constructor(){super(new ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fr=class extends ur{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new ka}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ya="\\[\\]\\.:\\/",hm=new RegExp("["+Ya+"]","g"),Za="[^"+Ya+"]",um="[^"+Ya.replace("\\.","")+"]",dm=/((?:WC+[\/:])*)/.source.replace("WC",Za),fm=/(WCOD+)?/.source.replace("WCOD",um),pm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Za),mm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Za),gm=new RegExp("^"+dm+fm+pm+mm+"$"),_m=["material","materials","bones","map"],Ha=class{constructor(t,e,n){let s=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(hm,"")}static parseTrackName(t){let e=gm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);_m.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};me.Composite=Ha;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Pm=new Float32Array(1);var Cl=new ve,pr=class{constructor(t,e,n=0,s=1/0){this.ray=new tr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ls,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Cl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cl),this}intersectObject(t,e=!0,n=[]){return Va(t,this,n,e),n.sort(Pl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Va(t[s],this,n,e);return n.sort(Pl),n}};function Pl(i,t){return i.distance-t.distance}function Va(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)Va(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"162"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="162");var Kl={original:{label:"Paper original (specks)",specks:!0,scale:1,contrast:0,bump:0,roughness:.5},smooth:{label:"Smooth",generate:"flat",scale:1,contrast:0,bump:0,roughness:.55},fine:{label:"Fine tooth",generate:"fine",scale:2,contrast:.03,bump:.35,roughness:.62},laid:{label:"Laid",generate:"laid",scale:1,contrast:.03,bump:.45,roughness:.64},cotton:{label:"Cotton rag (scan)",toneMap:new URL("./textures/cotton-tone.jpg",import.meta.url).href,heightMap:new URL("./textures/cotton-height.jpg",import.meta.url).href,scale:2.5,contrast:.02,bump:.5,roughness:.72},fiber:{label:"Fibre (scan)",toneMap:new URL("./textures/fiber-tone.jpg",import.meta.url).href,heightMap:new URL("./textures/fiber-height.jpg",import.meta.url).href,scale:2,contrast:.045,bump:.25,roughness:.64},recycled:{label:"Recycled (scan)",toneMap:new URL("./textures/recycled-tone.jpg",import.meta.url).href,heightMap:new URL("./textures/recycled-height.jpg",import.meta.url).href,scale:2,contrast:.05,bump:.2,roughness:.6}},vr="original";function vm(i=vr){let t=typeof i=="string"?{preset:i}:{...i},n={...Kl[t.preset]??(t.texture||t.toneMap||t.heightMap?{}:Kl[vr]),...t};return t.texture?(n.toneMap=t.texture,n.heightMap=t.texture,delete n.generate):(t.toneMap||t.heightMap)&&delete n.generate,n.scale??=1,n.contrast??=.03,n.bump??=.3,n.roughness??=.6,n}async function $a(i){let t=vm(i),e,n;t.generate?e=n=Mm(t.generate):[e,n]=await Promise.all([jl(t.toneMap??t.heightMap),jl(t.heightMap??t.toneMap)]);let{mean:s,std:r}=ym(e);return{tone:e,height:n,mean:s,std:r,spec:t}}function jl(i){return typeof i!="string"?Promise.resolve(i):new Promise((t,e)=>{let n=new Image;n.crossOrigin="anonymous",n.onload=()=>t(n),n.onerror=()=>e(new Error(`paper texture failed to load: ${i}`)),n.src=i})}function ym(i){try{let t=i.naturalWidth||i.width,e=i.naturalHeight||i.height,n=Math.min(512,t,e),s=document.createElement("canvas");s.width=s.height=n;let r=s.getContext("2d",{willReadFrequently:!0});r.drawImage(i,0,0);let o=r.getImageData(0,0,n,n).data,a=0,l=0;for(let h=0;h<o.length;h+=4){let f=(.299*o[h]+.587*o[h+1]+.114*o[h+2])/255;a+=f,l+=f*f}let c=a/(n*n);return{mean:c,std:Math.max(Math.sqrt(Math.max(0,l/(n*n)-c*c)),.001)}}catch{return{mean:.5,std:.1}}}var Ja=new Map;function Mm(i){if(Ja.has(i))return Ja.get(i);let t=i==="flat"?4:1024,e=new Float32Array(t*t).fill(.5);if(i!=="flat"){let o=Sm(i==="laid"?7:3),a=new Float32Array(t*t).map(()=>o()),l=bm(a,t),c=Ql(t,32,o),h=Ql(t,8,o);for(let f=0;f<e.length;f++)e[f]=i==="laid"?.55*l[f]+.3*c[f]+.15*h[f]:.88*l[f]+.09*c[f]+.03*h[f];if(i==="laid")for(let m=0;m<t;m++){let v=.5+.5*Math.sin(m/t*146*2*Math.PI);for(let M=0;M<t;M++){let d=Math.min(M%128,128-M%128),u=m*t+M;e[u]=.65*e[u]+.3*v+.05-.18*Math.exp(-d*d/4)}}Em(e)}let n=document.createElement("canvas");n.width=n.height=t;let s=n.getContext("2d"),r=s.createImageData(t,t);for(let o=0;o<e.length;o++){let a=Math.round(e[o]*255);r.data[o*4]=r.data[o*4+1]=r.data[o*4+2]=a,r.data[o*4+3]=255}return s.putImageData(r,0,0),Ja.set(i,n),n}function Sm(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function bm(i,t){let e=new Float32Array(i.length);for(let n=0;n<t;n++)for(let s=0;s<t;s++){let r=0;for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++)r+=i[(n+o+t)%t*t+(s+a+t)%t]*(a===0&&o===0?4:a===0||o===0?2:1);e[n*t+s]=r/16}return e}function Ql(i,t,e){let n=Float32Array.from({length:t*t},e),s=new Float32Array(i*i),r=(o,a)=>n[(a+t)%t*t+(o+t)%t];for(let o=0;o<i;o++)for(let a=0;a<i;a++){let l=a/i*t,c=o/i*t,h=Math.floor(l),f=Math.floor(c),p=l-h,m=c-f;p=p*p*(3-2*p),m=m*m*(3-2*m);let v=r(h,f)+(r(h+1,f)-r(h,f))*p,M=r(h,f+1)+(r(h+1,f+1)-r(h,f+1))*p;s[o*i+a]=v+(M-v)*m}return s}function Em(i){let t=1/0,e=-1/0;for(let n of i)n<t&&(t=n),n>e&&(e=n);for(let n=0;n<i.length;n++)i[n]=(i[n]-t)/(e-t||1)}var Tm={book:{aspect:28/21,pageWidth:896,fit:.82,perspective:40,visibleSheets:5,single:!1,interactive:!0,maxDpr:2,splitX:.3},block:{thickness:.05,color:"#e8dbbb"},material:{metalness:.17,showThrough:.04,inkGloss:.33},cover:{hard:!1,overhang:.014,thickness:.015,raise:.004,pressPages:.35,texture:"smooth",color:"#ffffff",grain:1,contrast:.02,bump:.3,roughness:.45,metalness:0},specks:{size:1.46,darken:.17,roughen:.33},shape:{liftMaxX:.14,liftMaxZ:.04,liftDipX:.58,liftDipZ:.035,liftMidX:.72,liftMidZ:.04,liftEdgeZ:.03,wrinkle:.13},light:{shadowMapSize:2048,ambient:1.5,sky:"#ffffff",ground:"#a1aeaf",sun:2,sunColor:"#ffffff",sunX:-3.5,sunY:1.3,sunZ:4.1,shadow:.15},curl:{angleMaxDeg:45,curlArc:.88,curlArcJitter:.2,curlAngleJitter:.3,curlTiltJitterDeg:6,cornerRollMax:2.3,directionSmoothTime:.4,curveSmoothTime:.5},hover:{progress:.03,smoothTime:2,gapToSheetAbove:.1},jump:{last:.62,first:.78,total0:1,total1:1.45,ratio:.8},riffle:{startTime:.22,firstFlipTime:1.2,fastestFlipTime:.5,speedUpSheets:20,firstGapShare:.15,fastestGapShare:.05,moveSlopPx:40},drag:{turnFraction:.8,progressSmoothTime:.9,fallTime:1,fallTimeExponent:.5,landingSpeed:.5,commitProgress:.2,clickSlopPx:5},flip:{flipTime:.85,followArcGainMin:1,followArcGainMax:1.08}};function wm(i,t={}){let e=structuredClone(i);for(let[n,s]of Object.entries(t))s&&typeof s=="object"&&!Array.isArray(s)&&e[n]&&typeof e[n]=="object"?Object.assign(e[n],s):e[n]=s;return e}var Ka=1e-4;function tc(i,{pageCount:t,renderPage:e,pageColor:n="#f3efe6",config:s={},paper:r=vr,start:o=0,autoOpen:a=!1,onSpread:l,onReady:c,onIdle:h,view:f}){let p=wm(Tm,s),{CURL:m,HOVER:v,RIFFLE:M,DRAG:d,FLIP:u}={CURL:p.curl,HOVER:p.hover,RIFFLE:p.riffle,DRAG:p.drag,FLIP:p.flip},T=Math.ceil(t/2),g=p.book.aspect,w=g/2,I=Math.round(p.book.pageWidth),C=Math.round(I*g),y=cn(o|0,0,T),U=[],J=[],_=!1,S=!0,q=0,j=-1,R=!1,$=!1,V=!1,K=!0,W=!1,L=null,B=null,z=null,et=null,yt=!1,Z=0,st=0,ct=-1,Pt="",vt=new AbortController,dt=(E,P,O,tt)=>E.addEventListener(P,O,{signal:vt.signal,...tt}),It=new us({antialias:!0,alpha:!0});It.shadowMap.enabled=!0,It.shadowMap.type=mr,It.shadowMap.autoUpdate=!1,It.shadowMap.needsUpdate=!0;let Mt=It.domElement;Mt.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none;opacity:0;transition:opacity .6s ease";let D=document.createElement("div");D.style.cssText="position:absolute;inset:0;touch-action:pan-y pinch-zoom;cursor:pointer",i.append(Mt,D);let re=new cr,xt=new ke(40,1,1.5,4.5),zt=new dr,Tt=new fr;Tt.castShadow=!0,Tt.shadow.mapSize.set(p.light.shadowMapSize,p.light.shadowMapSize),Object.assign(Tt.shadow.camera,{left:-.8,right:1,top:w+.18,bottom:-(w+.38),near:1.5,far:6.6}),Tt.shadow.camera.updateProjectionMatrix(),Tt.shadow.bias=-.001;let Vt=new Fe(new Wn(8,8),new hr);Vt.position.z=-1e-5,Vt.receiveShadow=!0,re.add(zt,Tt,Tt.target,Vt);let Gt=new fs({color:p.block.color,roughness:.92,metalness:0});Gt.onBeforeCompile=E=>{E.vertexShader=`varying float vWz;
`+E.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vWz = (modelMatrix * vec4(transformed, 1.0)).z;`),E.fragmentShader=`varying float vWz;
float h1(float n){return fract(sin(n*127.1)*43758.5453);}
`+E.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
      float L = vWz * ${(1/.0016).toFixed(1)}; float id = floor(L), fr = fract(L);
      diffuseColor.rgb *= 0.88 + 0.12 * h1(id) - 0.10 * smoothstep(0.7, 1.0, fr);`)};let $t=new Gn(1,1,1),ge=[1,-1].map(E=>{let P=new Fe($t,Gt);return P.castShadow=!0,P.receiveShadow=!0,P.userData.side=E,re.add(P),P});function A(){let E=p.block.thickness,P=0,O=0,tt=0,nt=0;for(let Yt=0;Yt<T;Yt++)if(!St(Yt)){let ce=U[Yt];P+=ce.flipProgress,O++,!H(Yt)&&!(B&&B.sheet===Yt)&&(ce.flipProgress>.5?tt++:nt++)}P=O?P/O:0;let Ut=nt?E*(1-P):0,ee=tt?E*P:0;gt.uBr.value=Ut,gt.uBl.value=ee;for(let Yt of ge){let ce=Math.max(Yt.userData.side>0?Ut:ee,1e-4)-8e-4;Yt.visible=ce>.001,Yt.scale.set(.992,g-.006,Math.max(ce,1e-4));let Wt=Yt.userData.side<0?gt.uSquash.value:1;Yt.scale.x=.992*Wt,Yt.position.set(Yt.userData.side*.496*Wt,0,Math.max(ce,1e-4)/2)}}let x=It.capabilities.getMaxAnisotropy(),Q=new Map,it=E=>{if(!Q.has(E)){let P=new Qt(E),O=new ds(new Uint8Array([P.r,P.g,P.b].map(tt=>Math.round(tt*255)).concat(255)),1,1);O.colorSpace=We,O.needsUpdate=!0,Q.set(E,O)}return Q.get(E)},at=E=>it(typeof n=="function"?n(E):n),rt=new ds(new Uint8Array([128,128,128,255]),1,1);rt.needsUpdate=!0;let kt=(()=>{let P=document.createElement("canvas");P.width=P.height=256;let O=P.getContext("2d"),tt=O.createImageData(256,256),nt=new Float32Array(256*256);for(let ee=0;ee<nt.length;ee++)nt[ee]=Math.random();for(let ee=0;ee<256;ee++)for(let Yt=0;Yt<256;Yt++){let ce=ee*256+Yt,Wt=(nt[ce]+nt[ee*256+(Yt+1)%256]+nt[(ee+1)%256*256+Yt])/3,ie=Math.round((.55*nt[ce]+.45*Wt)*255);tt.data.set([ie,ie,ie,255],ce*4)}O.putImageData(tt,0,0);let Ut=new ui(P);return Ut.wrapS=Ut.wrapT=Vi,Ut.anisotropy=x,Ut})(),gt={LIFT_MAX_X:{value:0},LIFT_MAX_Z:{value:0},LIFT_DIP_X:{value:0},LIFT_DIP_Z:{value:0},LIFT_MID_X:{value:0},LIFT_MID_Z:{value:0},LIFT_EDGE_Z:{value:0},DEFORM:{value:0},PAPER_TRANSPARENCY:{value:0},INK_GLOSS:{value:0},PATTERN_SIZE:{value:0},TEXTURE_COLOR:{value:0},PATTERN_ROUGHNESS:{value:0},uPatternTex:{value:kt},uFloor:{value:-1e9},uCoverScale:{value:new Xt(1,1)},uBoardZ:{value:.05},uThickness:{value:0},uBr:{value:0},uBl:{value:0},uSquash:{value:1},uTabSquash:{value:1}},ht=`
    const float SHEET_ASPECT = ${g.toFixed(5)};
    const float NORMAL_EPSILON = 0.03;
    const float SHADOW_OFFSET_X = 0.004;
    uniform float LIFT_MAX_X, LIFT_MAX_Z, LIFT_DIP_X, LIFT_DIP_Z, LIFT_MID_X, LIFT_MID_Z, LIFT_EDGE_Z, DEFORM;
    uniform float PAPER_TRANSPARENCY, INK_GLOSS, PATTERN_SIZE, TEXTURE_COLOR, PATTERN_ROUGHNESS, uSpecks, uFloor;
  `,ft=`
    ${ht}
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
  `,Nt=(()=>{let E=new Wn(1,g,64,Math.round(64*g)),P=E.attributes.uv,O=P.count,tt=(Wt,ie)=>{let pe=Math.sin(Wt*127.1+ie*311.7)*43758.5453;return pe-Math.floor(pe)},nt=(Wt,ie)=>{let pe=Math.floor(Wt),Dt=Math.floor(ie),Ct=Wt-pe,he=ie-Dt,Ie=Ct*Ct*(3-2*Ct),Be=he*he*(3-2*he);return pi(pi(tt(pe,Dt),tt(pe+1,Dt),Ie),pi(tt(pe,Dt+1),tt(pe+1,Dt+1),Ie),Be)},Ut=(Wt,ie)=>{let pe=Wt/1.2+614.98,Dt=(ie-.5)*g/1.2+357.42,Ct=0,he=.5;for(let Ie=0;Ie<3;Ie++)Ct+=he*nt(pe,Dt),he*=.5,pe*=2,Dt*=2;return Ct},ee=new Float32Array(O*3),Yt=.03,ce=.03/g;for(let Wt=0;Wt<O;Wt++){let ie=P.getX(Wt),pe=P.getY(Wt);ee[Wt*3]=Ut(ie,pe),ee[Wt*3+1]=Ut(ie+Yt,pe),ee[Wt*3+2]=Ut(ie,pe+ce)}return E.setAttribute("aNoise",new Se(ee,3)),E})(),ot=(()=>{let E=new Gn(1,g,1),P=E.attributes.position,O=P.count,tt=new Float32Array(O*2),nt=new Float32Array(O);for(let Ut=0;Ut<O;Ut++)tt[2*Ut]=P.getX(Ut)+.5,tt[2*Ut+1]=P.getY(Ut)/g+.5,nt[Ut]=P.getZ(Ut)+.5;return E.setAttribute("uv",new Se(tt,2)),E.setAttribute("aThick",new Se(nt,1)),E.setAttribute("aNoise",new Se(new Float32Array(O*3),3)),E})();Nt.setAttribute("aThick",new Se(new Float32Array(Nt.attributes.uv.count),1));let fe=(E,P)=>.31+.69*(T>1?(E+(T-1-2*E)*(1-P))/(T-1):1);function qt(E,P){let O=new fs({map:P,side:je,metalness:p.material.metalness,roughness:.5,bumpMap:rt,bumpScale:0});O.onBeforeCompile=nt=>{Object.assign(nt.uniforms,E),nt.vertexShader=ft+nt.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
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
vThick = aThick;`),nt.fragmentShader=ht+`
        uniform sampler2D uBackMap, uPatternTex, uToneMap;
        uniform float uToneMean, uToneStd, uContrast, uRigid;
        uniform vec3 uTint;
        uniform float uTintSide;
        uniform vec2 uToneRepeat;
        varying vec2 vGrainUv;
        varying float vThick;
      `+nt.fragmentShader.replace("#include <normal_fragment_begin>",`
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
          gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.), pattern * TEXTURE_COLOR);`)};let tt=new hs({depthPacking:Wa,side:je});return tt.onBeforeCompile=nt=>{Object.assign(nt.uniforms,E),nt.vertexShader=ft+nt.vertexShader.replace("#include <begin_vertex>","vec3 transformed = _sheetPosition(uv, aNoise.x) - vec3(SHADOW_OFFSET_X, 0., 0.);")},{mat:O,depth:tt}}function At(E){let P={uDirection:{value:1},uStackLift:{value:1},uFlipProgress:{value:0},uWrinkleSide:{value:-1},uBendAngle:{value:0},uFold:{value:new Xt(1,0)},uCurl:{value:new Xt(0,1)},uFlipRotation:{value:new Xt(1,0)},uBackMap:{value:at(2*E+1)},uRigid:{value:0},...gt,uSpecks:{value:0},uToneMap:{value:rt},uToneMean:{value:.5},uToneStd:{value:.1},uContrast:{value:0},uToneRepeat:{value:new Xt(1,g)},uTint:{value:new Qt("#ffffff")},uTintSide:{value:1}},{mat:O,depth:tt}=qt(P,at(2*E)),nt=new Fe(Nt,O);return nt.customDepthMaterial=tt,nt.castShadow=!0,nt.receiveShadow=!0,re.add(nt),{mesh:nt,mat:O,depth:tt,uniforms:P,flipProgress:E<y?1:0,direction:1,directionSmooth:1,curve:{curlArc:0,curlAngleDeg:0},curveTarget:{curlArc:0,curlAngleDeg:0},wobble:{arc:.5,angle:.5,tilt:0},liftBase:fe(E,0),liftSpan:fe(E,1)-fe(E,0)}}for(let E=0;E<T;E++)U.push(At(E));function bt(){let E=p.shape,P=p.material,O=p.specks,tt=p.light;gt.LIFT_MAX_X.value=E.liftMaxX,gt.LIFT_MAX_Z.value=E.liftMaxZ,gt.LIFT_DIP_X.value=E.liftDipX,gt.LIFT_DIP_Z.value=E.liftDipZ,gt.LIFT_MID_X.value=E.liftMidX,gt.LIFT_MID_Z.value=E.liftMidZ,gt.LIFT_EDGE_Z.value=E.liftEdgeZ,gt.DEFORM.value=E.wrinkle,gt.PAPER_TRANSPARENCY.value=P.showThrough,gt.INK_GLOSS.value=P.inkGloss,gt.PATTERN_SIZE.value=O.size,gt.TEXTURE_COLOR.value=O.darken,gt.PATTERN_ROUGHNESS.value=O.roughen;let nt=p.cover;nt.hard&&(gt.DEFORM.value*=nt.pressPages),gt.uFloor.value=nt.hard?.002:-1e9,gt.uThickness.value=nt.thickness,Vt.position.z=-(nt.hard?nt.thickness:0)-1e-5,gt.uCoverScale.value.set(1+nt.overhang,1+2*nt.overhang/g),gt.uBoardZ.value=E.liftMaxZ+.5*gt.DEFORM.value+nt.raise,nt.hard&&nt.texture!==Zi&&_s(),Object.assign(xe,{scale:nt.grain,contrast:nt.contrast,bump:nt.bump,roughness:nt.roughness}),xe.height.repeat.set(nt.grain,nt.grain*g),Kt(),zt.intensity=tt.ambient,zt.color.set(tt.sky),zt.groundColor.set(tt.ground),Tt.intensity=tt.sun,Tt.color.set(tt.sunColor),Tt.position.set(tt.sunX,tt.sunY,tt.sunZ),Vt.material.opacity=tt.shadow,N(),S=!0}let St=E=>p.cover.hard&&T>1&&(E===0||E===T-1);function Kt(){U.forEach((E,P)=>{let O=St(P),tt=O?xe:ue,nt=E.uniforms;nt.uRigid.value=O?1:0,E.mesh.geometry=O?ot:Nt,nt.uSpecks.value=tt.specks?1:0,nt.uToneMap.value=tt.tone,nt.uToneMean.value=tt.mean,nt.uToneStd.value=tt.std,nt.uContrast.value=tt.contrast,nt.uToneRepeat.value.set(tt.scale,tt.scale*g),nt.uTint.value.set(O?p.cover.color:"#ffffff"),nt.uTintSide.value=P===0?1:-1,E.mat.bumpMap=tt.height,E.mat.bumpScale=tt.bump,E.mat.roughness=tt.roughness,E.mat.metalness=O?p.cover.metalness:p.material.metalness}),S=!0}let Rt=Object.assign({x:0,y:0,s:300},f||{}),te=null;function N(){let E=Mt.clientHeight||1,P=Mt.clientWidth||1,O=p.book.perspective,tt=2.99*Math.tan(20*Math.PI/180)/Math.tan(O/2*Math.PI/180);xt.fov=O,xt.aspect=P/E,xt.position.set(Rt.x,Rt.y,tt),xt.lookAt(Rt.x,Rt.y,0),xt.near=Math.max(.05,tt-1.6),xt.far=tt+1.6,xt.zoom=2*tt*Math.tan(O/2*Math.PI/180)*Rt.s/E,xt.updateProjectionMatrix(),S=!0}function pt(E,P=0){if(!P){te=null,Object.assign(Rt,E),N();return}te={from:{...Rt},to:{...Rt,...E},start:performance.now(),dur:P},S=!0}function X(E){if(!te)return!1;let P=cn((E-te.start)/te.dur,0,1),O=P<.5?4*P*P*P:1-Math.pow(-2*P+2,3)/2;for(let tt of["x","y","s"])Rt[tt]=pi(te.from[tt],te.to[tt],O);return N(),P>=1&&(te=null),!0}let lt=new G;function mt(E,P,O=0){let tt=Mt.getBoundingClientRect();return lt.set(E,P,O).project(xt),{x:tt.left+(lt.x+1)/2*tt.width,y:tt.top+(1-lt.y)/2*tt.height}}let jt=()=>2*Rt.s,se=()=>({tone:rt,height:rt,specks:!1,mean:.5,std:.1,scale:1,contrast:0,bump:0,roughness:.5}),ue=se(),xe=se(),ne={},Te=0,Ye=0,Zi=null,gs=E=>{let P=E instanceof HTMLCanvasElement?new ui(E):new Oe(E);return P.wrapS=P.wrapT=Vi,P.anisotropy=x,P.needsUpdate=!0,P};function Yn(E,P){if(E.tone!==rt&&E.tone.dispose(),E.height!==rt&&E.height!==E.tone&&E.height.dispose(),P.spec.specks||!P.tone)Object.assign(E,{tone:rt,height:rt,specks:!!P.spec.specks,mean:.5,std:.1});else{let O=gs(P.tone);Object.assign(E,{tone:O,height:P.height===P.tone?O:gs(P.height),specks:!1,mean:P.mean,std:P.std})}}async function Ji(E){let P=++Te,O=await $a(E);return W||P!==Te?O.spec:(Yn(ue,O),ne={...O.spec},Zn(O.spec))}function Zn({scale:E,contrast:P,bump:O,roughness:tt}={}){for(let[nt,Ut]of Object.entries({scale:E,contrast:P,bump:O,roughness:tt}))Ut!=null&&(ue[nt]=Ut,ne[nt]=Ut);return ue.height.repeat.set(ue.scale,ue.scale*g),Kt(),{...ne}}async function _s(){let E=++Ye,P=p.cover.texture;try{let O=await $a(P);if(W||E!==Ye)return;Yn(xe,O),Zi=P,xe.height.repeat.set(xe.scale,xe.scale*g),Kt()}catch(O){console.warn("page-turn-book: cover texture",O)}}let $i=new pr,xs=new Xt,Mr=new rn(new G(0,0,1),0),mn=new G;function b(E,P){let O=Mt.getBoundingClientRect();return xs.set((E-O.left)/O.width*2-1,-((P-O.top)/O.height)*2+1),$i.setFromCamera(xs,xt),$i.ray.intersectPlane(Mr,mn)?{angle:Math.atan2(mn.y,mn.x),dist:Math.hypot(mn.x,mn.y)}:null}let F=E=>{let P=Math.abs(E)*Math.PI/180;return m.cornerRollMax/(Math.PI*(Math.cos(P)/(1-w*Math.sin(P))))},H=E=>J.some(P=>P.sheet===E);function Y(E){let P=U[j];if(!(!P||j===E||!H(j)))return(P.direction>0?P.flipProgress>.5:P.flipProgress<.5)?void 0:P.curveTarget}function k(E,P){if(St(E))return{curlArc:0,curlAngleDeg:0};let O=U[E].wobble,tt=Y(E),nt=0;if(P){let Ut=P.angle*180/Math.PI;Ut>90&&(Ut=180-Ut),Ut<-90&&(Ut=-180-Ut),nt=cn(-(Ut/90)*m.angleMaxDeg*P.dist*(1-O.angle*m.curlAngleJitter)+O.tilt*m.curlTiltJitterDeg,-m.angleMaxDeg,m.angleMaxDeg)}return tt?(nt=cn(nt,Math.min(0,tt.curlAngleDeg),Math.max(0,tt.curlAngleDeg)),{curlArc:cn(tt.curlArc*pi(u.followArcGainMin,u.followArcGainMax,O.arc),tt.curlArc,F(nt)),curlAngleDeg:nt}):{curlArc:Math.min(m.curlArc*(1-O.arc*m.curlArcJitter),F(nt)),curlAngleDeg:nt}}let _t=(E,P,O)=>k(O,b(E,P)),Et=(E,P)=>{let O=U[E].wobble,tt=-.42+.25*O.angle,nt=P?.92:-.92;return k(E,{angle:Math.atan2(tt,nt),dist:Math.hypot(nt,tt)})};function wt(E,P,O){E.curveTarget.curlArc=P.curlArc,E.curveTarget.curlAngleDeg=P.curlAngleDeg,O&&(E.curve.curlArc=P.curlArc,E.curve.curlAngleDeg=P.curlAngleDeg)}function Lt(E,P){if(!b(E,P))return null;let O=mn.x,tt=mn.y;if(Math.abs(tt)>w+.04||O<(p.book.single?-.08:-1.04)||O>1.04)return null;let nt=O>=(p.book.single?p.book.splitX:0);return(nt?y>=T:y<=0)?null:{sheet:nt?y:y-1,forward:nt}}let Bt=E=>{let P=J.findIndex(O=>O.sheet===E);P!==-1&&J.splice(P,1)};function Ot(E,P){j=E,U[E].wobble={arc:Math.random(),angle:Math.random(),tilt:2*Math.random()-1},y=P===1?E+1:E,wr(),S=!0}function Ft(E,P,O,tt=u.flipTime){Ot(E,O);let nt=U[E].flipProgress;Bt(E),J.push({sheet:E,from:nt,to:O,direction:P?1:-1,start:performance.now(),duration:1e3*tt*Math.max(.2,Math.abs(O-nt))})}function _e(E,P){let O=cn((P-E.start)/E.duration,0,1);if(E.launch===void 0)return E.from+(E.to-E.from)*.5*(1-Math.cos(O*Math.PI));let tt=O*O,nt=tt*O,Ut=(nt-2*tt+O)*E.launch+(3*tt-2*nt)+(nt-tt)*d.landingSpeed;return E.from+(E.to-E.from)*Ut}let Ce=(E,P,O)=>E+(P-E)*Math.min(O/M.speedUpSheets,1);function ye(E,P,O){if(E?y>=T:y<=0)return!1;let tt=E?y:y-1,nt=U[tt];return wt(nt,O?_t(O[0],O[1],tt):P===0&&z?nt.curveTarget:Et(tt,E),!0),nt.direction=E?1:-1,Ft(tt,E,E?1:0,Ce(M.firstFlipTime,M.fastestFlipTime,P)),!0}let Pe=()=>{z&&(clearTimeout(z.timer),z=null)},ae=()=>{et&&(clearTimeout(et.timer),et=null)};function Ht(){if(!z)return;z.fired||(z.fired=!0,B=null);let E=Ce(M.firstFlipTime,M.fastestFlipTime,z.count)*Ce(M.firstGapShare,M.fastestGapShare,z.count);ye(z.forward,z.count,z.count===0?null:[z.x,z.y])?(z.count++,z.timer=setTimeout(Ht,1e3*E)):Pe()}function An(E){if(ae(),Pe(),E?y>=T:y<=0)return;let P=E?y:y-1,O=U[P];wt(O,Et(P,E),!0),O.direction=E?1:-1,Ft(P,E,E?1:0)}function le(E){if(E=cn(E|0,0,T),Pe(),ae(),E===y)return;let P=E>y,O=16;if(Math.abs(E-y)>O){let Wt=P?E-O:E+O;for(let ie=Math.min(y,Wt);ie<Math.max(y,Wt);ie++)Bt(ie),U[ie].flipProgress=P?1:0;y=Wt,wr(),S=!0}let tt=p.jump,nt=Math.abs(E-y);if(nt===1){An(P);return}let Ut=pi(tt.total0,tt.total1,cn((nt-2)/6,0,1)),ee=0;for(let Wt=0;Wt<nt-1;Wt++)ee+=Math.pow(tt.ratio,Wt);let Yt=Math.max(.04,(Ut-tt.last)/ee);et={target:E,forward:P,count:0};let ce=()=>{if(!et||y===et.target){et=null;return}let Wt=et.count,pe=Math.abs(et.target-y)===1?tt.last:pi(tt.first,tt.last*.8,Wt/Math.max(1,nt-2)),Dt=P?y:y-1,Ct=U[Dt];wt(Ct,Et(Dt,P),!0),Ct.direction=P?1:-1,Ft(Dt,P,P?1:0,pe),et.count++,et.timer=setTimeout(ce,1e3*Yt*Math.pow(tt.ratio,Wt))};ce()}let hn=(E,P=d.clickSlopPx)=>L&&(E.clientX-L.x)**2+(E.clientY-L.y)**2>P*P;dt(D,"pointermove",E=>{if(z&&hn(E,z.fired?M.moveSlopPx:void 0)&&Pe(),B){B.progress=cn(B.base-(E.clientX-L.x)/B.rectWidth/d.turnFraction,0,1),B.targetCurve=_t(E.clientX,E.clientY,B.sheet),S=!0;return}Z=E.clientX,st=E.clientY,yt=!0,S=!0}),dt(D,"pointerleave",()=>{yt=!1,S=!0}),dt(D,"pointerdown",E=>{if(E.button!==0||!R||!p.book.interactive)return;let P=Lt(E.clientX,E.clientY);if(!P)return;ae();let O=U[P.sheet];cc(P.sheet),H(P.sheet)||wt(O,_t(E.clientX,E.clientY,P.sheet),!0),Bt(P.sheet),L={x:E.clientX,y:E.clientY},B={sheet:P.sheet,forward:P.forward,base:O.flipProgress,progress:O.flipProgress,rectWidth:jt()/.63,targetCurve:{...O.curveTarget},speed:0},O.direction=P.forward?1:-1,Pe(),z={forward:P.forward,x:E.clientX,y:E.clientY,count:0,fired:!1,timer:setTimeout(Ht,1e3*M.startTime)};try{D.setPointerCapture(E.pointerId)}catch{}S=!0});function Ki(E){if(Pe(),!B){L=null;return}let P=B,O=hn(E);B=null,L=null;try{D.releasePointerCapture(E.pointerId)}catch{}if(!O)return Ft(P.sheet,P.forward,P.forward?1:0);let tt=(P.forward?P.progress-P.base:P.base-P.progress)>=d.commitProgress,nt=P.forward===tt?1:0;Ot(P.sheet,nt);let Ut=U[P.sheet].flipProgress,ee=Math.max(Math.abs(nt-Ut),.001),Yt=d.fallTime*Math.pow(ee,d.fallTimeExponent),ce=nt===1?P.speed:-P.speed;Bt(P.sheet),J.push({sheet:P.sheet,from:Ut,to:nt,direction:P.forward?1:-1,start:performance.now(),duration:1e3*Yt,launch:cn(ce*Yt/ee,0,2)})}dt(D,"pointerup",Ki),dt(D,"pointercancel",Ki);function Jn(E,P){let O=E.uniforms,tt=E.curve,nt=E.directionSmooth,Ut=E.flipProgress*Math.PI,ee=Math.sin(Ut)*Math.PI*tt.curlArc,Yt=tt.curlAngleDeg*Math.PI/180,ce=Math.cos(Yt),Wt=Math.sin(Yt),ie=1-w*Math.sin(Math.abs(Yt)),pe=1-ie,Dt=Math.max(0,ce+Wt*w*Math.sign(Wt)-pe),Ct=Dt/ie*ee,he=Ut+.5*nt*(Dt*(Math.abs(Ct)<1e-4?0:(1-Math.cos(Ct))/Ct));O.uFlipProgress.value=E.flipProgress,O.uWrinkleSide.value=-Math.cos(Ut),O.uDirection.value=nt,O.uStackLift.value=P,O.uBendAngle.value=ee,O.uFold.value.set(ce,Wt),O.uCurl.value.set(pe,ie),O.uFlipRotation.value.set(Math.cos(he),Math.sin(he))}function ji(E,P){let O=!1;for(let tt of["curlArc","curlAngleDeg"]){let nt=E.curveTarget[tt]-E.curve[tt];Math.abs(nt)<Ka?E.curve[tt]=E.curveTarget[tt]:(E.curve[tt]+=nt*P,O=!0)}return O}function we(E){let P=performance.now();for(let Dt=J.length-1;Dt>=0;Dt--){let Ct=J[Dt],he=U[Ct.sheet];he.flipProgress=_e(Ct,P),he.direction=Ct.direction,P>=Ct.start+Ct.duration&&(J.splice(Dt,1),S=!0)}let O=q?Math.min((E-q)/1e3,.1):1/60;q=E;let tt=1-Math.pow(.001,O/m.directionSmoothTime);if(B){let Dt=U[B.sheet],Ct=1-Math.pow(.01,O/d.progressSmoothTime),he=(B.progress-Dt.flipProgress)*Ct;Dt.flipProgress+=he,B.speed=O>0?he/O:0,wt(Dt,B.targetCurve,!1)}let nt=J.length>0||B!==null;X(P)&&(nt=!0);let Ut=1-Math.pow(.001,O/v.smoothTime),ee=1-Math.pow(.001,O/m.curveSmoothTime),Yt=!yt||!p.book.interactive||B||z||et?null:Lt(Z,st),ce=ct;ct=Yt&&R&&!H(Yt.sheet)?Yt.sheet:-1,ct!==-1&&wt(U[ct],_t(Z,st,ct),ct!==ce);for(let Dt=0;Dt<T;Dt++){let Ct=U[Dt];if(!H(Dt)&&!(B&&B.sheet===Dt)){let Ie=Dt>=y?0:1,Be=Dt===ct?Ie===0?v.progress:1-v.progress:Ie,un=Be-Ct.flipProgress;Math.abs(un)<Ka?Ct.flipProgress!==Be&&(Ct.flipProgress=Be,S=!0):(Ct.flipProgress+=un*Ut,nt=!0);let gn=U[Ie===0?Dt-1:Dt+1];if(gn){let eo=Ie===0?Math.min(Ct.flipProgress,Math.max(0,gn.flipProgress-v.gapToSheetAbove)):Math.max(Ct.flipProgress,Math.min(1,gn.flipProgress+v.gapToSheetAbove));eo!==Ct.flipProgress&&(Ct.flipProgress=eo,nt=!0)}Ct.direction=Ie===1&&Ct.flipProgress!==Ie?-1:1,Ct.directionSmooth=Ct.direction}let he=Ct.direction-Ct.directionSmooth;Math.abs(he)<Ka?Ct.directionSmooth!==Ct.direction&&(Ct.directionSmooth=Ct.direction,S=!0):(Ct.directionSmooth+=he*tt,nt=!0),ji(Ct,ee)&&(nt=!0),Jn(Ct,Ct.liftBase+Ct.liftSpan*Ct.flipProgress)}A();let Wt=J.length>0||B!==null||z!==null,ie=Wt||et!==null;_&&!ie&&setTimeout(()=>h?.(y),0),_=ie;let pe=y===0&&!Wt?"0 0 0 50%":y===T&&!Wt?"0 50% 0 0":"0";if(nt||S){for(let Dt=0;Dt<T;Dt++){let Ct=U[Dt].mesh,he=Dt>=y?Dt-y:y-1-Dt,Ie=H(Dt)||B!==null&&B.sheet===Dt;Ct.visible=he<=p.book.visibleSheets||Ie||St(Dt);let Be=he<3||Ie;Ct.castShadow!==Be&&(Ct.castShadow=Be),Ct.renderOrder=he,U[Dt].tab&&(U[Dt].tab.renderOrder=he)}It.shadowMap.needsUpdate=!0,It.render(re,xt),S=!1}}function Qe(){let E=K&&!document.hidden&&!W;E!==V&&(V=E,q=0,S=!0,It.setAnimationLoop(E?we:null))}dt(document,"visibilitychange",Qe);let mi=new IntersectionObserver(E=>{K=E[E.length-1].isIntersecting,Qe()},{rootMargin:"50% 0px"});mi.observe(i);function De(){let E=Mt.clientWidth,P=Mt.clientHeight;!E||!P||(It.setPixelRatio(Math.min(devicePixelRatio,p.book.maxDpr,Math.sqrt(15e6/(E*P)))),It.setSize(E,P,!1),N())}let gi=new ResizeObserver(De);gi.observe(Mt),dt(window,"resize",De);let $e=new Map,tn=new Set,vs=new Map,$n=[],Sr=(E,P)=>{let O=E>>1;return O>=y-P-1&&O<=y+P};function br(E,P){let O=U[E>>1];E%2===0?O.mat.map=P:O.uniforms.uBackMap.value=P,S=!0}function Er(){let E=2*y-.5,P=[];for(let O=Math.max(0,y-4);O<=Math.min(T-1,y+3);O++)for(let tt of[2*O,2*O+1])tt<t&&!$e.has(tt)&&!tn.has(tt)&&P.push(tt);$n=P.sort((O,tt)=>Math.abs(O-E)-Math.abs(tt-E));for(let[O,tt]of $e)Sr(O,7)||(br(O,at(O)),tt.dispose(),$e.delete(O));ys()}function cc(E){for(let P of[2*E+1,2*E+2,2*E])P<t&&!$e.has(P)&&!tn.has(P)&&($n=$n.filter(O=>O!==P),$n.unshift(P));ys()}function ys(){for(;tn.size<2&&$n.length;){let E=$n.shift();if($e.has(E)||tn.has(E)||!Sr(E,5))continue;tn.add(E);let P=vs.get(E)??0;Promise.resolve(e(E,{width:I,height:C})).then(O=>{if(tn.delete(E),!W){if((vs.get(E)??0)!==P){Er();return}if(O&&Sr(E,6)){let tt=new ui(O);tt.colorSpace=We,tt.anisotropy=x,br(E,tt),$e.set(E,tt)}Tr(),ys()}}).catch(O=>{tn.delete(E),console.warn(`page-turn-book: page ${E}`,O),Tr(),ys()})}}function Tr(){if(R||!$)return;[2*y-1,2*y].filter(P=>P>=0&&P<t).every(P=>$e.has(P)||!tn.has(P)&&!$n.includes(P))&&(R=!0,Mt.style.opacity="1",S=!0,c?.(),a&&y===0&&setTimeout(()=>y===0&&An(!0),700))}function wr(){l?.(y,{left:y>0?2*y-1:null,right:y<T&&2*y<t?2*y:null}),Er()}return bt(),De(),Ji(r).catch(E=>console.warn(E)).finally(()=>{$=!0,Tr()}),wr(),Qe(),{next:()=>An(!0),prev:()=>An(!1),jumpTo:le,setView:pt,project:mt,addTab(E,{y0:P,y1:O,w:tt,front:nt,back:Ut}){let ee=U[E];if(!ee)return;let Yt=new Wn(1,1,4,10),ce=Yt.attributes.uv,Wt=ce.count;for(let un=0;un<Wt;un++)ce.setXY(un,1+ce.getX(un)*tt,P+ce.getY(un)*(O-P));Yt.setAttribute("aNoise",new Se(new Float32Array(Wt*3),3)),Yt.setAttribute("aThick",new Se(new Float32Array(Wt),1));let ie=un=>{let gn=new ui(un);return gn.colorSpace=We,gn.anisotropy=Math.min(4,x),gn.repeat.set(1/tt,1/(O-P)),gn.offset.set(-1/tt,-P/(O-P)),gn},pe=ie(nt),Dt=ie(Ut),Ct={...ee.uniforms,uBackMap:{value:Dt}},{mat:he,depth:Ie}=qt(Ct,pe);he.roughness=.7,he.color.setScalar(1.3);let Be=new Fe(Yt,he);Be.customDepthMaterial=Ie,Be.frustumCulled=!1,Be.castShadow=!0,Be.receiveShadow=!1,re.add(Be),ee.tab=Be,S=!0},progress:E=>U[E]?U[E].flipProgress:0,setSquash(E,P){gt.uSquash.value=E,gt.uTabSquash.value=P,S=!0},get view(){return{...Rt}},get busy(){return J.length>0||et!==null||B!==null||te!==null},get renderer(){return It},redraw(){S=!0},goToPage:E=>le(Math.ceil(cn(E|0,0,t-1)/2)),setPaper:Ji,tunePaper:Zn,refreshPage(E){vs.set(E,(vs.get(E)??0)+1);let P=$e.get(E);P&&(P.dispose(),$e.delete(E),br(E,at(E))),Er()},get paper(){return{...ne}},set(E,P){if(typeof E=="object")for(let[O,tt]of Object.entries(E))Object.assign(p[O],tt);else{let[O,tt]=E.split(".");p[O][tt]=P}bt()},get config(){return structuredClone(p)},get sheet(){return y},get sheetCount(){return T},destroy(){W=!0,Pe(),ae(),vt.abort(),mi.disconnect(),gi.disconnect(),It.setAnimationLoop(null);for(let E of U)E.mat.dispose(),E.depth.dispose();for(let E of $e.values())E.dispose();for(let E of Q.values())E.dispose();for(let E of[ue,xe])E.tone!==rt&&E.tone.dispose(),E.height!==rt&&E.height!==E.tone&&E.height.dispose();rt.dispose(),kt.dispose(),Nt.dispose(),ot.dispose(),Vt.geometry.dispose(),Vt.material.dispose(),It.dispose(),Mt.remove(),D.remove()}}}function cn(i,t,e){return Math.max(t,Math.min(e,i))}function pi(i,t,e){return i+(t-i)*e}var ec="#2e2119",qn="#9a3a2b";var Am="#6e2d5c",nc="#8b6c4c",ic="#6d5640",Rm="#7a3a2c",rc='"IM Fell English", "EB Garamond", Georgia, serif',Cm='"Pirata One", "IM Fell English", serif',sc='"BZ Fraktur", "Pirata One", serif';var ja=new Map;function Yi(i){return ja.has(i)||ja.set(i,new Promise((t,e)=>{let n=new Image;n.decoding="async",n.onload=()=>(n.decode?n.decode().catch(()=>{}):Promise.resolve()).then(()=>t(n)),n.onerror=()=>e(new Error("img "+i)),n.src=i})),ja.get(i)}async function ac(){document.fonts&&await Promise.all(['400 40px "IM Fell English"','italic 400 40px "IM Fell English"','400 40px "Pirata One"','400 40px "BZ Fraktur"'].map(i=>document.fonts.load(i).catch(()=>{})))}function yr(i,t={},e=[]){for(let n of i.childNodes)if(n.nodeType===3)e.push({t:n.nodeValue,...t});else if(n.nodeType===1&&n.tagName==="BR")e.push({t:"\u2028",...t});else if(n.nodeType===1){let s={...t};(n.tagName==="I"||n.tagName==="EM")&&(s.i=!t.i),(n.tagName==="B"||n.tagName==="STRONG")&&(s.b=1),n.classList.contains("ph")&&(s.ph=1),yr(n,s,e)}return e}function Qa(i){let t=[],e=null;for(let n of i){let s=n.t.replace(/[ \t\n\r]+/g," ").split(/( |\u2028)/);for(let r of s){if(r===" "){e&&(t.push(e),e=null);continue}if(r==="\u2028"){e&&(t.push(e),e=null),t.push("BR");continue}r&&(e||=[]).push({...n,t:r})}}return e&&t.push(e),t}function oc({paper:i,ill:t}){let e,n,s=null,r=(d,u)=>`${d.i&&!d.g?"italic ":""}${d.b||d.w500?500:400} ${u}px ${d.ph?"Figtree, system-ui, sans-serif":d.g?Cm:rc}`,o=(d,u)=>(e.font=r(d,d.ph?u*.62:u),e.measureText(d.t).width),a=(d,u)=>d.reduce((T,g)=>T+o(g,u),0);function l(d,u,T,g=()=>0){let w=[],I=[],C=0,y=0,U=(e.font=r({},u),e.measureText(" ").width),J=_=>{w.push({ws:I,w:C,last:_,space:U}),I=[],C=0,y++};for(let _=0;_<d.length;_++){if(d[_]==="BR"){I.length&&J(!0);continue}let S=d[_],q=a(S,u),j=T-g(y),R=(I.length?C+U:0)+q;if(R<=j){C=R,I.push(S);continue}I.length&&J(!1),C=q,I.push(S)}return I.length&&J(!0),w}function c(d,u,T,g,w,I,C){let y=d.ws.length-1,U=d.space,J=u;if(I==="justify"&&!d.last&&y>0){let S=(g-d.w)/y;S<d.space*2.2&&(U=d.space+S)}let _=d.ws.reduce((S,q)=>S+a(q,w),0)+U*y;I==="center"?J=u+(g-_)/2:I==="right"&&(J=u+g-_);for(let S of d.ws){for(let q of S)e.font=r(q,q.ph?w*.62:w),e.fillStyle=q.color||C,e.fillText(q.t,J,q.ph?T-w*.15:T),J+=e.measureText(q.t).width;J+=U}}function h(d,u,T,g,w,I,C,y={}){e.font=r(y,w),e.fillStyle=C;let U=[...d],J=U.map(q=>e.measureText(q).width+I*w),_=J.reduce((q,j)=>q+j,0)-I*w,S=u+(g-_)/2;return U.forEach((q,j)=>{e.fillText(q,S,T),S+=J[j]}),_}function f(d,u,T,g){let w=u.y,I=u.x,C=u.w,y=n*T,U=(_,S)=>{let q=y*(S.size||1)*(S.st&&S.st.g?1:1.07),j=q*(S.lh||1.36),R=Qa(yr(_));S.upper&&(R=R.map(z=>z==="BR"?z:z.map(et=>({...et,t:et.t.toUpperCase()})))),R=R.map(z=>z==="BR"?z:z.map(et=>({...et,...S.st||{}})));let $=null,V=0,K=0;if(S.dc&&R.length){let z=R[0][0],et=z.t[0];$=et,R[0]=[{...z,t:z.t.slice(1)},...R[0].slice(1)],e.font=`400 ${q*3.3}px ${sc}`,V=e.measureText(et).width+q*.12,K=2}let W=S.indent||0,L=l(R,q,C-W,z=>z<K?V:0);for(let z=1;z<=8&&L.length>1&&L[L.length-1].ws.length<2&&S.align!=="center";z++)L=l(R,q,(C-W)*(1-.025*z),et=>et<K?V:0);w+=(S.mt||0)*y,g&&$&&(e.font=`400 ${q*3.3}px ${sc}`,e.fillStyle="rgba(154,58,43,.35)",e.fillText($,I+W+q*.05,w+q*.98+j+q*.04),e.fillStyle=qn,e.fillText($,I+W,w+q*.98+j)),L.forEach((z,et)=>{let yt=w+q*.98+et*j-(j-q)*0;g&&c(z,I+W+(et<K?V:0),yt,C-W-(et<K?V:0),q,S.align||"left",S.color||ec)});let B=L.length*j+(j-q)*.2;g&&S.bar&&(e.fillStyle="rgba(154,58,43,.6)",e.fillRect(I,w-y*.1,Math.max(1,y*.05),B+y*.2)),w+=B+(S.mb??.45)*y},J=(_,S)=>{let q=_.querySelector("img"),j=q&&t.get(q.getAttribute("src"));w+=.35*y;let R=s&&!_.classList.contains("fig--fin");if(R&&(w+=s.padA??s.pad),j){let V=R?s.h:Math.min(S*y,C*j.naturalHeight/j.naturalWidth),K=V*j.naturalWidth/j.naturalHeight;g&&(e.globalCompositeOperation="multiply",e.drawImage(j,I+(C-K)/2,w,K,V)),w+=V}let $=_.querySelector("figcaption");$&&(w+=.2*y,U($,{size:.76,lh:1.25,align:"center",st:{i:1},color:ic,mb:0})),w+=.15*y+.45*y+(R?s.padB??s.pad:0)};for(let _ of d){let S=_.classList,q=_.tagName;if(S.contains("pg-cap"))w+=p.capTop*y,g&&h(_.textContent,I,w+y*.66*.8,C,y*.9,.03,qn,{i:1}),w+=y*.66*1.36+p.capTitle*y;else if(S.contains("pg-h"))U(_,{size:1.5,lh:1.1,align:"center",st:{g:1},color:qn,mb:.2}),w+=p.titleRule*y,g&&(e.fillStyle="rgba(154,58,43,.75)",e.fillRect(I+C/2-y*1.1,w,y*2.2,Math.max(1,y*.045))),w+=p.ruleText*y;else if(S.contains("pg-h4"))U(_,{size:1.2,lh:1.15,align:"left",st:{g:1},color:qn,mb:.35});else if(S.contains("dc"))U(_,{dc:1});else if(S.contains("pg-note"))w+=.25*y,U(_,{size:.92,align:"left",st:{i:1},color:Rm,indent:.7*y,bar:1});else if(S.contains("pg-ex"))w+=1.2*y,g&&(e.fillStyle="rgba(110,45,92,.5)",e.fillRect(I+C/2-2*y,w,4*y,Math.max(1,y*.04))),w+=.7*y,U(_,{align:"center",st:{i:1},color:Am});else if(S.contains("fr-k"))g&&h(_.textContent,I,w+y*.66*.8,C,y*.92,.03,qn,{i:1}),w+=y*.66*1.5+.45*y;else if(S.contains("fr-t"))U(_,{size:2.6,lh:1,align:"center",st:{g:1},color:qn,mt:.05});else if(S.contains("fr-s"))U(_,{align:"center",st:{i:1},color:ic});else if(S.contains("fr-i"))w+=.6*y,U(_,{size:.82,lh:1.4,align:"center",st:{i:1},color:nc});else if(q==="FIGURE")J(_,S.contains("fig--front")?13:S.contains("fig--fin")?5.6:S.contains("fig--sm")?7.4:10.6);else if(q==="DL"){w+=.15*y,g&&(e.fillStyle="rgba(139,108,76,.4)",e.fillRect(I,w,C,Math.max(1,y*.03)));for(let j of _.children){let R=j.querySelector("dt"),$=j.querySelector("dd"),V=y*1.36+.44*y;if(g){let K=w+.22*y+y*.98;e.font=r({},y*.74),e.fillStyle=qn;let W=I;for(let et of R.textContent.toUpperCase())e.fillText(et,W,K-y*.05),W+=e.measureText(et).width+.14*y*.74;let L=Qa(yr($)).map(et=>et.map(yt=>({...yt,i:!yt.i}))),B=l(L,y,C-(W-I)-.8*y);B.forEach((et,yt)=>c(et,W+.8*y,K+yt*y*1.36,C-(W-I)-.8*y,y,"right",ec));let z=(B.length-1)*y*1.36;e.strokeStyle="rgba(139,108,76,.55)",e.lineWidth=Math.max(1,y*.035),e.setLineDash([y*.05,y*.12]),e.beginPath(),e.moveTo(I,w+V+z),e.lineTo(I+C,w+V+z),e.stroke(),e.setLineDash([]),w+=z}else{let K=Qa(yr($));e.font=r({},y*.74);let W=[...R.textContent].length*.14*y*.74+e.measureText(R.textContent.toUpperCase()).width;w+=(l(K,y,C-W-.8*y).length-1)*y*1.36}w+=V}w+=.6*y}else if(q==="UL"){w+=.2*y;for(let j of _.children)g&&(e.font=r({},y),e.fillStyle=qn,e.fillText("\xB6",I,w+y*.98)),U(j,{align:"left",indent:1.05*y,mb:.5})}else q==="P"&&U(_,{})}return w-u.y}let p={padT:2.55,padB:2.25,capTop:.75,capTitle:.7,titleRule:.1,ruleText:.85,fill:.95,figMin:4,figCap:14.5},m=d=>d.classList.contains("pg-note")||d.classList.contains("pg-ex")||d.classList.contains("fig--fin");function v(d,u){let T=[...d.querySelector(".pg-body").children],g=T.length;for(;g>0&&m(T[g-1]);)g--;let w=T.slice(0,g),I=T.slice(g),C=w.filter(K=>K.tagName==="FIGURE"),y=C.length===1&&C[0].querySelector("img"),U=y&&t.get(y.getAttribute("src")),J=1,_=()=>{s=U?{h:p.figMin*n*J,pad:0}:null;let K=f(w,u,J,!1)+(I.length?f(I,u,J,!1):0);return s=null,K};for(;_()>u.h&&J>.84;)J-=.02;let S=n*J;s=U?{h:0,pad:0}:null;let q=f(w,u,J,!1);s=null;let j=I.length?f(I,u,J,!1):0,R=U?U.naturalHeight/U.naturalWidth:0,$=U?Math.min(u.w*.8*R,u.w*.8,p.figCap*S):0,V=U?Math.min(p.figMin*S,$):0;return{main:w,closeEls:I,I:U,sc:J,text:q,close:j,cap:$,figMin:V,min:(q+V+j)/u.h,max:(q+$+j)/u.h}}function M(d){let u=+d.dataset.n,T=d.classList.contains("pg--l")?u+1:u-1,g=d.parentElement&&d.parentElement.querySelector(`.pg[data-n="${T}"]`);return g&&g.querySelector(".pg-body")&&!g.classList.contains("pg--front")?g:null}return function(u,T,g,w,I={}){let C=document.createElement("canvas");C.width=T,C.height=g,e=C.getContext("2d"),n=T/22,e.drawImage(i,0,0,T,g);let y=w==="l",U=e.createLinearGradient(y?T:0,0,y?0:T,0);U.addColorStop(0,"rgba(70,46,20,.26)"),U.addColorStop(.05,"rgba(84,58,28,.07)"),U.addColorStop(.14,"rgba(84,58,28,0)"),U.addColorStop(1,"rgba(84,58,28,0)"),e.fillStyle=U,e.fillRect(0,0,T,g);let J=e.createRadialGradient(T*(y?.4:.6),g*.45,Math.min(T,g)*.45,T*(y?.4:.6),g*.45,Math.max(T,g)*.78);if(J.addColorStop(0,"rgba(120,86,42,0)"),J.addColorStop(1,"rgba(120,86,42,.16)"),e.fillStyle=J,e.fillRect(0,0,T,g),!u)return C;e.globalCompositeOperation="multiply",e.textBaseline="alphabetic";let _=p.padT*n,S=p.padB*n,q=1.45*n,j=1.85*n,R={x:y?q:j,y:_,w:T-q-j,h:g-_-S},$=u.querySelector(".pg-rh"),V=u.querySelector(".pg-fo"),K=u.querySelector(".pg-body");if($){let W=h($.textContent,0,1.05*n+.6*n*.9,T,.8*n,.03,nc,{i:1});e.fillStyle="rgba(139,108,76,.55)";let L=1.05*n+.6*n*.62,B=2.6*n;e.fillRect(T/2-W/2-.9*n-B,L,B,Math.max(1,n*.03)),e.fillRect(T/2+W/2+.9*n,L,B,Math.max(1,n*.03))}if(V){e.font=r({},.72*n),e.fillStyle="#7b5f43";let W=V.textContent,L=e.measureText(W).width;e.fillText(W,(T-L)/2,g-.95*n)}if(K)if(u.classList.contains("pg--front")){let L=[...K.children],B=1,z=f(L,R,B,!1);for(;z>R.h&&B>.84;)B-=.02,z=f(L,R,B,!1);R.y+=Math.max(0,(R.h-z)/2)+.25*n,f(L,R,B,!0),I.fill=z/R.h,I.scale=B}else{let L=v(u,R),B=M(u),z=B&&v(B,R),et=p.fill;if(z){let vt=Math.max(L.min,z.min),dt=Math.min(L.max,z.max);et=vt<=dt?Math.max(vt,Math.min(p.fill,dt)):dt}et=Math.max(L.min,Math.min(et,L.max));let yt=L.sc,Z=n*yt;s=L.I?{h:Math.max(L.figMin,Math.min(L.cap,et*R.h-L.text-L.close)),pad:0}:null;let st=L.text+(s?s.h:0)+L.close,ct=Math.max(0,R.h-st);s&&(s.pad=0);let Pt=s?ct*.42:0;s&&(s.padA=Pt,s.padB=ct-Pt),f(L.main,R,yt,!0),L.closeEls.length&&f(L.closeEls,{...R,y:R.y+R.h-L.close},yt,!0),I.fill=st/R.h,I.scale=yt,I.T=et}return s=null,e.globalCompositeOperation="source-over",C}}function to(i,t,e,n,s=!1){let r=document.createElement("canvas");r.width=t,r.height=e;let o=r.getContext("2d");s&&(o.translate(t,0),o.scale(-1,1)),o.drawImage(i,0,0,t,e),s&&o.setTransform(1,0,0,1,0,0);let a=o.createLinearGradient(s?t:0,0,s?0:t,0);if(a.addColorStop(0,"rgba(0,0,0,.5)"),a.addColorStop(.035,"rgba(0,0,0,.1)"),a.addColorStop(.05,"rgba(255,235,200,.07)"),a.addColorStop(.08,"rgba(0,0,0,0)"),o.fillStyle=a,o.fillRect(0,0,t,e),n&&!s){let l=t/22*1.62*1.05,c=e*.155+l*.8;o.font=`italic 400 ${l}px ${rc}`,o.textAlign="center",o.fillStyle="rgba(10,4,12,.75)",o.fillText(n,t/2+l*.02,c+l*.045);let h=o.createLinearGradient(0,c-l*.8,0,c+l*.1);h.addColorStop(0,"#f3dfa9"),h.addColorStop(.45,"#c9a96e"),h.addColorStop(.75,"#a5824a"),h.addColorStop(1,"#7f6234"),o.fillStyle=h,o.fillText(n,t/2,c),o.globalCompositeOperation="overlay",o.fillStyle="rgba(255,240,200,.25)",o.fillText(n,t/2,c-l*.02),o.globalCompositeOperation="source-over",o.textAlign="start"}return r}function lc(i,t,e){let n=document.createElement("canvas");return n.width=t,n.height=e,n.getContext("2d").drawImage(i,0,0,t,e),n}async function Om(i,t){let e=performance.now(),n=t.host,s=t.single,r=[...i.querySelectorAll(".lb-flip .pg")],o=L=>r.find(B=>+B.dataset.n===L),a;if(!s)a=r.map(L=>({el:L,side:L.classList.contains("pg--l")?"l":"r"}));else{let L=r.filter(et=>et.classList.contains("pg--text")),B=r.filter(et=>et.classList.contains("pg--end")),z=r[r.length-1];a=[{el:r[0]},{el:B[0],side:"l"}];for(let et of L)a.push({el:et,side:"r"},{el:null,side:"l",blank:1});a.push({el:B[1],side:"r"},{el:z})}let l=a.length,c=L=>t.base+L,h=Math.min(window.devicePixelRatio||1,t.maxDpr||2),f=Math.min(t.maxTex||1024,Math.ceil(t.pw*h/64)*64),p=Math.round(f*1.4),[m,v,M]=await Promise.all([Yi(c("img/carta-antica.webp")),Yi(c("img/copertina.webp")),Yi(c("img/sguardia.webp")),ac()]),d=new Map,u=[...new Set(r.flatMap(L=>[...L.querySelectorAll(".pg-body img")].map(B=>B.getAttribute("src"))))],T=Promise.all(u.map(L=>Yi(new URL(L,location.href).href).then(B=>d.set(L,B)).catch(()=>{}))),g=oc({paper:m,ill:d}),w={fills:{}},I=(i.querySelector(".cv-t")||{}).textContent||"",C=new Map;async function y(L){if(C.has(L))return C.get(L);let B=a[L],z;if(!B)return null;if(L===0)z=to(v,f,p,I.trim());else if(L===l-1)z=to(v,f,p,"",!0);else if(B.el&&B.el.classList.contains("pg--end"))z=lc(M,f,p);else if(B.blank)z=g(null,f,p,"l");else{await T;let et={};z=g(B.el,f,p,B.side,et),w.fills[B.el.dataset.n]=et}return C.set(L,z),z}let U=L=>{let B=a.findIndex(z=>z.el&&+z.el.dataset.n===L);return Math.ceil(B/2)},J=!1,_=null,S=tc(n,{pageCount:l,renderPage:L=>y(L),pageColor:"#e6d9bb",paper:t.paper||"laid",view:t.view,config:{book:{aspect:1.4,pageWidth:f,single:s,interactive:!1,maxDpr:t.maxDpr||2,fit:1,perspective:26,visibleSheets:6},cover:{hard:!0,texture:"smooth",overhang:.018,thickness:.02,raise:.004,color:"#ffffff",grain:1,contrast:0,bump:0,roughness:.86,metalness:0},material:{metalness:.04,showThrough:.05,inkGloss:.18},light:{shadowMapSize:t.shadowMap||2048,ambient:1,sun:2.6,sunX:-3,sunY:2.4,sunZ:3.6,shadow:.5,sky:"#fff6e8",ground:"#8a7f73",sunColor:"#fff1dc"},flip:{flipTime:.9}},onSpread:(L,B)=>t.onSpread&&t.onSpread(L,B),onReady:()=>{J=!0,w.tti=performance.now()-e,_&&_()},onIdle:L=>t.onIdle&&t.onIdle(L)}),q=.085,j=[...i.querySelectorAll(".tab")],R=j.length,$=Math.min(.19,(.9-(R-1)*.045)/Math.max(1,R)),V=await Promise.all([0,1,2,3].map(L=>Yi(c(`img/linguetta-${L}.webp`)))),K=j.map((L,B)=>{let z=+L.dataset.to,et=a.findIndex(It=>It.el&&+It.el.dataset.n===z),yt=1-.05-B*($+.045),Z=yt-$,st=96,ct=Math.round(st*$*1.4/q),Pt=L.textContent.trim(),vt=It=>{let Mt=document.createElement("canvas");Mt.width=st,Mt.height=ct;let D=Mt.getContext("2d");D.drawImage(V[B%4],0,0,st,ct),D.globalCompositeOperation="saturation",D.fillStyle="rgba(128,128,128,.45)",D.fillRect(0,0,st,ct),D.globalCompositeOperation="source-over",D.fillStyle="rgba(238,229,210,.82)",D.fillRect(0,0,st,ct);let re=D.createLinearGradient(It?0:st,0,It?st:0,0);re.addColorStop(0,"rgba(40,24,14,.5)"),re.addColorStop(.22,"rgba(40,24,14,.12)"),re.addColorStop(.45,"rgba(40,24,14,0)"),D.fillStyle=re,D.fillRect(0,0,st,ct),D.save(),D.translate(st*(It?.58:.42),ct/2),D.rotate(It?Math.PI/2:-Math.PI/2);let xt=Math.round(st*.42);for(D.font=`italic 400 ${xt}px "IM Fell English", Georgia, serif`;D.measureText(Pt).width>ct*.88&&xt>20;)xt-=1,D.font=`italic 400 ${xt}px "IM Fell English", Georgia, serif`;return D.textAlign="center",D.textBaseline="middle",D.fillStyle="rgba(255,248,232,.5)",D.fillText(Pt,0,1.5),D.fillStyle="#2a160c",D.fillText(Pt,0,0),D.restore(),Mt},dt=et>=0?et>>1:0;return S.addTab(dt,{y0:Z,y1:yt,w:q,front:vt(!0),back:vt(!1)}),{sheet:dt,y0:Z,y1:yt,n:z}});s&&S.setSquash(.07,.4),await new Promise(L=>{J?L():_=L});let W=window.requestIdleCallback||(L=>setTimeout(L,60));return(function L(B){B>=l||W(()=>{y(B).then(()=>L(B+1))},{timeout:400})})(1),{book:S,stats:w,PW:f,PH:p,pageCount:l,list:a,tabs:K,TW:q,squash:s?[.07,.4]:null,sheetForPage:U,renderPage:y,visible(L){return s?[a[2*L]]:[a[2*L-1],a[2*L]]}}}export{Om as init};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
