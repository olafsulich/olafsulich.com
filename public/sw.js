if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise(async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()})),a.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},a=(a,c)=>{Promise.all(a.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(a)};self.define=(a,i,s)=>{c[a]||(c[a]=Promise.resolve().then(()=>{let c={};const d={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return c;case"module":return d;default:return e(a)}})).then(e=>{const a=s(...e);return c.default||(c.default=a),c})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/1qxL1inkwcZGmJma5mQ0c/_buildManifest.js",revision:"c5950b5550a0ecb4e0fd4376912ec006"},{url:"/_next/static/1qxL1inkwcZGmJma5mQ0c/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/122871220829627de73f68cfc1e479303701bb2b.e9822ed50be8908c72cd.js",revision:"fc4b3685e3a54ca5636356665aaafe55"},{url:"/_next/static/chunks/75da2af423652fd0c814449032256e0bf7815bed.cbdfbd4b07a1ca6b7ad7.js",revision:"1031e59896cc6d80dc9d9f98938de0a6"},{url:"/_next/static/chunks/be05e7c691ebb866a9a072f3ec32ccc4d8b2566f.f492e0f92759bedbf4bb.js",revision:"9e69584882f2dd0c8b889afd1085daa0"},{url:"/_next/static/chunks/c9787b2e67d04485ea556b79e503c7f6cc1ff4d5.6255276349ddc2485d79.js",revision:"2edd4905278a4ab3ada12a55d1972023"},{url:"/_next/static/chunks/cd5bab3e.a4bd50c80a045b0a4dca.js",revision:"a3c28947c2fda94a62dd37f1dca74423"},{url:"/_next/static/chunks/commons.e3c12cb767780eaa6561.js",revision:"fb878106e2cbd2c33ff02f5572b882ee"},{url:"/_next/static/chunks/f4d6e91da9ac3e40aff49b764a5d47f7a8339801.5853e5897e7a423cc7d9.js",revision:"d85b01f732851ca7104adaba8498657e"},{url:"/_next/static/chunks/framework.9707fddd9ae5927c17c3.js",revision:"493773db7ca4f531e862834fccf9d157"},{url:"/_next/static/chunks/main-662eba8b802e28c82e98.js",revision:"542774ab2ac68c92c9bf77eb1154f8a3"},{url:"/_next/static/chunks/pages/_app-ad174e471e666dab3717.js",revision:"2a55acb37d63a1cec5f7396a926f91f6"},{url:"/_next/static/chunks/pages/_error-ffb34dc306e932acf91c.js",revision:"866bdcd4c851bc62a7aa80bc47efd442"},{url:"/_next/static/chunks/pages/blog-172667fa9f61e38827d5.js",revision:"4395bc14af0bec2b7196b629eae6b9b5"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-afc8a7aae7dc1ce42d17.js",revision:"839eeb12b8e0c67f9f29ec36e766cbd3"},{url:"/_next/static/chunks/pages/index-14e544e6dbb5542dadec.js",revision:"cd812a161bec991d419c28cf638491c2"},{url:"/_next/static/chunks/pages/kategorie-a233626c2c01004864cf.js",revision:"28944a2bb6fcd1e228f26d9b903b5778"},{url:"/_next/static/chunks/pages/kategorie/%5Bslug%5D-dec030bdca173cb39678.js",revision:"a4545985299e3f88e033322085dcc8f8"},{url:"/_next/static/chunks/pages/o-mnie-39cb0262f248a745f7d6.js",revision:"806a595ee0b061ae9527b1c45556b66f"},{url:"/_next/static/chunks/pages/portfolio-fc6e3868ee448cb58ad4.js",revision:"1034fffd4ca6c2cd2bd3bb5bd78497e6"},{url:"/_next/static/chunks/pages/portfolio/%5Bslug%5D-092198333309c031ce5e.js",revision:"11c44bc4d646eaeb002ed449090180e9"},{url:"/_next/static/chunks/polyfills-a928219009fd672c1f9f.js",revision:"18c1e069ba2cfd5f75859b660810a118"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/023fc8e90bcea10b7c25.css",revision:"47ba97e1004d0f636dab74dcd2d47133"},{url:"/_next/static/css/14d735667bf0964898de.css",revision:"5ce9add10cdd32e15cb63964c8811733"},{url:"/_next/static/css/23cede687db04e1bb653.css",revision:"7fb049391ecb6327b5b140cb63de1b63"},{url:"/_next/static/css/29eeb3c3b7782e5b17bf.css",revision:"dfe4cc77d3afa3cb5c13fbbd8e381d52"},{url:"/_next/static/css/435bfd899684fc25d747.css",revision:"588e43351f70497ae83cafb07f26ab9f"},{url:"/_next/static/css/8c0f28e8bcc17a7865fe.css",revision:"5cca180432bd9e34a6d6145b6e57ac58"},{url:"/_next/static/css/9514bd4a1ee48883506b.css",revision:"c344327a79f16a190c94a4a4854ab16b"},{url:"/_next/static/css/bdc09237e012503bcef9.css",revision:"1ea78d9c908947595896796287f99e06"},{url:"/_next/static/css/de23f5832227f039ea10.css",revision:"838d08e7826e712967f80c57ddbb55bd"},{url:"/_next/static/images/Apollo-app-27ada348ebf35c5f2f02d7d9a66e792c.png",revision:"27ada348ebf35c5f2f02d7d9a66e792c"},{url:"/_next/static/images/Apollo-app-5ebb4a339ff7934f84ec28e0e8365d5a.png.webp",revision:"5ebb4a339ff7934f84ec28e0e8365d5a"},{url:"/_next/static/images/Covid-ulotki-a9fb1e546a3c5d2a648c10ba5af1c0e8.png.webp",revision:"a9fb1e546a3c5d2a648c10ba5af1c0e8"},{url:"/_next/static/images/Covid-ulotki-e40d416b6b42a7df584662fbe69e874a.png",revision:"e40d416b6b42a7df584662fbe69e874a"},{url:"/_next/static/images/CyrisXD-Readme-2167bcee46ab94054939d0329b244169.png.webp",revision:"2167bcee46ab94054939d0329b244169"},{url:"/_next/static/images/CyrisXD-Readme-e5d926077879541bd424d29c3c749532.png",revision:"e5d926077879541bd424d29c3c749532"},{url:"/_next/static/images/DevTools-a11y-06466cc72ed39198f594955ed7c286a9.png",revision:"06466cc72ed39198f594955ed7c286a9"},{url:"/_next/static/images/DevTools-a11y-915fb7e90431ca3653ee038612366eea.png.webp",revision:"915fb7e90431ca3653ee038612366eea"},{url:"/_next/static/images/DevTools-vision-ac3956ee5de460601e319227ea9dd37f.jpg.webp",revision:"ac3956ee5de460601e319227ea9dd37f"},{url:"/_next/static/images/DevTools-vision-f23cad4b19254fef3bd47d5e4df6f409.jpg",revision:"f23cad4b19254fef3bd47d5e4df6f409"},{url:"/_next/static/images/Firestore-8c257f346776fc7fc4ceb6f9592b18fd.png",revision:"8c257f346776fc7fc4ceb6f9592b18fd"},{url:"/_next/static/images/Firestore-twórcy-a0f9d255a6ca02afb6a2721106466795.png.webp",revision:"a0f9d255a6ca02afb6a2721106466795"},{url:"/_next/static/images/Firestore-twórcy-e1651eb1c197b1e91f17e40738fa5674.png",revision:"e1651eb1c197b1e91f17e40738fa5674"},{url:"/_next/static/images/GraphQLvsRest-cfecc5bb79263275daf36ae3bf9142fa.png",revision:"cfecc5bb79263275daf36ae3bf9142fa"},{url:"/_next/static/images/GraphQLvsRest-f57fbbdbbd02474b461ce53c9a3ab123.png.webp",revision:"f57fbbdbbd02474b461ce53c9a3ab123"},{url:"/_next/static/images/InterfacevsType-a58e4f99165337b24a6cac10a35130e1.jpeg.webp",revision:"a58e4f99165337b24a6cac10a35130e1"},{url:"/_next/static/images/InterfacevsType-b80d52819b69721d1846df9e7411d7bb.jpeg",revision:"b80d52819b69721d1846df9e7411d7bb"},{url:"/_next/static/images/Jason-Readme-9915f72b3be0a2c495a59b90a7b3adb1.png",revision:"9915f72b3be0a2c495a59b90a7b3adb1"},{url:"/_next/static/images/Jason-Readme-c127d4050ee4f2a2de63c27f647faff7.png.webp",revision:"c127d4050ee4f2a2de63c27f647faff7"},{url:"/_next/static/images/Michael-Readme-1b438e010ce28c8a31b59fef1ad8ed51.png.webp",revision:"1b438e010ce28c8a31b59fef1ad8ed51"},{url:"/_next/static/images/Michael-Readme-c5bcdba44e7fbcadef390189d4f92ff4.png",revision:"c5bcdba44e7fbcadef390189d4f92ff4"},{url:"/_next/static/images/Monica-Readme-52bb26290d1f0d9e2e4fd3a0a45c3a85.png",revision:"52bb26290d1f0d9e2e4fd3a0a45c3a85"},{url:"/_next/static/images/Monica-Readme-996ecb68ce6c936ae256e8df98b25c6a.png.webp",revision:"996ecb68ce6c936ae256e8df98b25c6a"},{url:"/_next/static/images/Readme-Olaf-13d2051c01fae0374ebdd9041f9ab38e.png.webp",revision:"13d2051c01fae0374ebdd9041f9ab38e"},{url:"/_next/static/images/Readme-Olaf-7c0c6fe2a6132caf038a320c12306dcc.png",revision:"7c0c6fe2a6132caf038a320c12306dcc"},{url:"/_next/static/images/SR-01-6bc85d160a8bd780b3e4b64c751ca427.png.webp",revision:"6bc85d160a8bd780b3e4b64c751ca427"},{url:"/_next/static/images/SR-01-7b1794410ad5917501ed2efa7bc2ffb4.png",revision:"7b1794410ad5917501ed2efa7bc2ffb4"},{url:"/_next/static/images/SR-02-1eb5be44893ebfee3962fe66be9d723f.png",revision:"1eb5be44893ebfee3962fe66be9d723f"},{url:"/_next/static/images/SR-02-5e70364f36d2fe2457b33fe3da28d8fb.png.webp",revision:"5e70364f36d2fe2457b33fe3da28d8fb"},{url:"/_next/static/images/SR-03-1da3f575dd8b871cf105271365f0ead5.png",revision:"1da3f575dd8b871cf105271365f0ead5"},{url:"/_next/static/images/SR-03-27de84646472038dd6b9c368bcdcd1f6.png.webp",revision:"27de84646472038dd6b9c368bcdcd1f6"},{url:"/_next/static/images/TypedDocumentNode-86b1517f85d369daed33694cb3137d96.gif",revision:"86b1517f85d369daed33694cb3137d96"},{url:"/_next/static/images/TypedDocumentNode-86b1517f85d369daed33694cb3137d96.gif.webp",revision:"86b1517f85d369daed33694cb3137d96"},{url:"/_next/static/images/accessibility-tree-719fb4c36b861942cd35ac5d498844db.jpg",revision:"719fb4c36b861942cd35ac5d498844db"},{url:"/_next/static/images/accessibility-tree-dbdfc149bfface763ee2bfef8ab11ea2.jpg.webp",revision:"dbdfc149bfface763ee2bfef8ab11ea2"},{url:"/_next/static/images/alias-gql-6c4900f2998a134676d01075ab441051.png.webp",revision:"6c4900f2998a134676d01075ab441051"},{url:"/_next/static/images/alias-gql-b0646d3ead37bfe0e374d5aca4c7c1f6.png",revision:"b0646d3ead37bfe0e374d5aca4c7c1f6"},{url:"/_next/static/images/android-chrome-192x192-3ed83baa13122d8a5e201079728dc2e1.png",revision:"3ed83baa13122d8a5e201079728dc2e1"},{url:"/_next/static/images/android-chrome-512x512-3f7e0d596af14f59de4bc35e98bdba31.png.webp",revision:"3f7e0d596af14f59de4bc35e98bdba31"},{url:"/_next/static/images/android-chrome-512x512-84b227d4489a340e9d27255fb36b8793.png",revision:"84b227d4489a340e9d27255fb36b8793"},{url:"/_next/static/images/apollo-postacie-f42a72ce75d27c40a1c9f6777dbcaf07.png.webp",revision:"f42a72ce75d27c40a1c9f6777dbcaf07"},{url:"/_next/static/images/apollo-postacie-f5bfba2e7958a445c5ff536795e39d36.png",revision:"f5bfba2e7958a445c5ff536795e39d36"},{url:"/_next/static/images/apple-touch-icon-6601e4159da1fe4abc29e98d57f28f23.png",revision:"6601e4159da1fe4abc29e98d57f28f23"},{url:"/_next/static/images/atomic-bddce7360844e90f55867d03bfe913a7.png",revision:"bddce7360844e90f55867d03bfe913a7"},{url:"/_next/static/images/atomic-e07bb651aca2407e93a50ab5f3206af7.png.webp",revision:"e07bb651aca2407e93a50ab5f3206af7"},{url:"/_next/static/images/atoms-6dc3d4d52fd9ffbd628f5ca33ba63461.jpg",revision:"6dc3d4d52fd9ffbd628f5ca33ba63461"},{url:"/_next/static/images/atoms-e167c6d4b814333c14baa9d96c8f03c1.jpg.webp",revision:"e167c6d4b814333c14baa9d96c8f03c1"},{url:"/_next/static/images/category-css-3ec231a8c8d88fb890b0a5ebdbf197fd.png",revision:"3ec231a8c8d88fb890b0a5ebdbf197fd"},{url:"/_next/static/images/category-css-d351435e7812e10794d41c716e27f6fe.png.webp",revision:"d351435e7812e10794d41c716e27f6fe"},{url:"/_next/static/images/category-dostepnosc-a9811f27e5b2290bd112e5ef13e9c831.png",revision:"a9811f27e5b2290bd112e5ef13e9c831"},{url:"/_next/static/images/category-dostepnosc-e0c0e1e4f396f214b0d2b53d9d0ba206.png.webp",revision:"e0c0e1e4f396f214b0d2b53d9d0ba206"},{url:"/_next/static/images/category-firebase-6a2cbdc3775c18c369642f94e777c005.png.webp",revision:"6a2cbdc3775c18c369642f94e777c005"},{url:"/_next/static/images/category-firebase-fb2208bd56ce6765365bfcba7225cdae.png",revision:"fb2208bd56ce6765365bfcba7225cdae"},{url:"/_next/static/images/category-graphql-0b70dcd5e9a75d7793f6ec78a8da5b33.png.webp",revision:"0b70dcd5e9a75d7793f6ec78a8da5b33"},{url:"/_next/static/images/category-graphql-d3fff604d946f9e693b02f0101aa044e.png",revision:"d3fff604d946f9e693b02f0101aa044e"},{url:"/_next/static/images/category-javascript-5d3adacf7718dbe22ef1fbbcf4f069c4.png.webp",revision:"5d3adacf7718dbe22ef1fbbcf4f069c4"},{url:"/_next/static/images/category-javascript-d17e19e8206d98287d14361779144839.png",revision:"d17e19e8206d98287d14361779144839"},{url:"/_next/static/images/category-typescript-0bc72068b5105679b9d7dced5c069410.png.webp",revision:"0bc72068b5105679b9d7dced5c069410"},{url:"/_next/static/images/category-typescript-274e1b2e47b27806c17dc99fc7795bdc.png",revision:"274e1b2e47b27806c17dc99fc7795bdc"},{url:"/_next/static/images/category-webpack-3f114220e429e4ac3e0f43a69ef049cd.png",revision:"3f114220e429e4ac3e0f43a69ef049cd"},{url:"/_next/static/images/category-webpack-a8e0eae2728ccb6b58be5261b02bfc58.png.webp",revision:"a8e0eae2728ccb6b58be5261b02bfc58"},{url:"/_next/static/images/ci-test-97e1c462d0ee6b5e8fb97a2ff9ab409d.png.webp",revision:"97e1c462d0ee6b5e8fb97a2ff9ab409d"},{url:"/_next/static/images/ci-test-b3fcc2ef761a4d4fba4e19a0de2debbe.png",revision:"b3fcc2ef761a4d4fba4e19a0de2debbe"},{url:"/_next/static/images/clamp-fn-1-85a753591b5a39d3ab9599a22bda880a.png",revision:"85a753591b5a39d3ab9599a22bda880a"},{url:"/_next/static/images/clamp-fn-1-e53b614906bb515bc9f5b684ac322b2a.png.webp",revision:"e53b614906bb515bc9f5b684ac322b2a"},{url:"/_next/static/images/clamp-margin-730cceb0e9f6449f7b707d87404d87f2.png",revision:"730cceb0e9f6449f7b707d87404d87f2"},{url:"/_next/static/images/clamp-margin-f3e37a4d368c7974905687b7394cb94a.png.webp",revision:"f3e37a4d368c7974905687b7394cb94a"},{url:"/_next/static/images/clamp-paragraph-083b3b434fdc95a30d8704a460397e1e.png",revision:"083b3b434fdc95a30d8704a460397e1e"},{url:"/_next/static/images/clamp-paragraph-e204c92699874575c7d64124db955a62.png.webp",revision:"e204c92699874575c7d64124db955a62"},{url:"/_next/static/images/clamp-wsparcie-6ccf44663600ead8bd4cfb84f8614f22.png",revision:"6ccf44663600ead8bd4cfb84f8614f22"},{url:"/_next/static/images/clamp-wsparcie-a4c5237040b09dc336494705d9778b7a.png.webp",revision:"a4c5237040b09dc336494705d9778b7a"},{url:"/_next/static/images/color-contrast-63a5d9b918d4ffec79ccebdc7ea9d185.png.webp",revision:"63a5d9b918d4ffec79ccebdc7ea9d185"},{url:"/_next/static/images/color-contrast-b485c7782e595e4a76b5121f86a03cd6.png",revision:"b485c7782e595e4a76b5121f86a03cd6"},{url:"/_next/static/images/devfeedback-b87ed368ff6557a35b844c66f60ad53b.png.webp",revision:"b87ed368ff6557a35b844c66f60ad53b"},{url:"/_next/static/images/devfeedback-c636d62b72de57d466087186c0663da0.png",revision:"c636d62b72de57d466087186c0663da0"},{url:"/_next/static/images/gatsby-cta-620e5113806e44166478389760f3b521.png",revision:"620e5113806e44166478389760f3b521"},{url:"/_next/static/images/gatsby-cta-8a2764006ba3bd38842e1a51a49d22f8.png.webp",revision:"8a2764006ba3bd38842e1a51a49d22f8"},{url:"/_next/static/images/graphql-bf579a40b8b0fc3c65fce6c4290c2bed.svg",revision:"bf579a40b8b0fc3c65fce6c4290c2bed"},{url:"/_next/static/images/graphql-bf579a40b8b0fc3c65fce6c4290c2bed.svg.webp",revision:"bf579a40b8b0fc3c65fce6c4290c2bed"},{url:"/_next/static/images/grapqhl-playground-blank-2a2a3b780b39b043a99e62225ac2d5c6.png.webp",revision:"2a2a3b780b39b043a99e62225ac2d5c6"},{url:"/_next/static/images/grapqhl-playground-blank-863a7b2869671c0fc9c4e18d546ac6b9.png",revision:"863a7b2869671c0fc9c4e18d546ac6b9"},{url:"/_next/static/images/inne-846c927b763a489eddad5685a53e91de.png.webp",revision:"846c927b763a489eddad5685a53e91de"},{url:"/_next/static/images/karta-postaci-apollo-05b82eabc4f186df594165145e28e3b1.png.webp",revision:"05b82eabc4f186df594165145e28e3b1"},{url:"/_next/static/images/karta-postaci-apollo-2629ad044e46ad7742516a454e65af9f.png",revision:"2629ad044e46ad7742516a454e65af9f"},{url:"/_next/static/images/logo-0e655a6ef3db5d425c936e94e28076ab.png",revision:"0e655a6ef3db5d425c936e94e28076ab"},{url:"/_next/static/images/logo-cff84be654eb71789cc544db278fb541.png.webp",revision:"cff84be654eb71789cc544db278fb541"},{url:"/_next/static/images/main-b4f50f6123187592203d0c36ac9e311f.png.webp",revision:"b4f50f6123187592203d0c36ac9e311f"},{url:"/_next/static/images/main-e4ffec705f937f6f0f833fd3d8104fc3.png",revision:"e4ffec705f937f6f0f833fd3d8104fc3"},{url:"/_next/static/images/max-fn-1-1f18ee3868b1a935160667789084bf3f.png",revision:"1f18ee3868b1a935160667789084bf3f"},{url:"/_next/static/images/max-fn-1-b60df5bfc2a496a11a58b964ee594d01.png.webp",revision:"b60df5bfc2a496a11a58b964ee594d01"},{url:"/_next/static/images/max-fn-2-5200adf3a072ab2131ab395dbdbdb337.png",revision:"5200adf3a072ab2131ab395dbdbdb337"},{url:"/_next/static/images/max-fn-2-bda82ddff94c8a7249cbf11ca3ff8548.png.webp",revision:"bda82ddff94c8a7249cbf11ca3ff8548"},{url:"/_next/static/images/me-6fff841cdbb592f5b40bf101bf44cd15.png",revision:"6fff841cdbb592f5b40bf101bf44cd15"},{url:"/_next/static/images/me-77cef0612a0f5e86ec0fdda118a56055.png.webp",revision:"77cef0612a0f5e86ec0fdda118a56055"},{url:"/_next/static/images/min-fn-1-e0e82369bac025e848df789de5502d1d.png",revision:"e0e82369bac025e848df789de5502d1d"},{url:"/_next/static/images/min-fn-2-88cbd506fed763c78ffaa2cb9cc70e62.png",revision:"88cbd506fed763c78ffaa2cb9cc70e62"},{url:"/_next/static/images/molecule-71358925bac0478fa4d53d97b2aec24e.jpg",revision:"71358925bac0478fa4d53d97b2aec24e"},{url:"/_next/static/images/molecules-16b76b6496d5b10f01a8f42144bce914.png",revision:"16b76b6496d5b10f01a8f42144bce914"},{url:"/_next/static/images/molecules-2303f3f858e20cec447c0125949d3d59.png.webp",revision:"2303f3f858e20cec447c0125949d3d59"},{url:"/_next/static/images/mstile-150x150-b4689c0338289648c987396ffd60954e.png",revision:"b4689c0338289648c987396ffd60954e"},{url:"/_next/static/images/olaf-2ee40c050c0f070273410cf980a3f500.png",revision:"2ee40c050c0f070273410cf980a3f500"},{url:"/_next/static/images/olaf-98102817c5bfe76ef9e8fbd7cf6e8c18.png.webp",revision:"98102817c5bfe76ef9e8fbd7cf6e8c18"},{url:"/_next/static/images/organisms-084dcef2fb158aadab334c660c5871d1.jpg",revision:"084dcef2fb158aadab334c660c5871d1"},{url:"/_next/static/images/organisms-554b9d7ab36e9afdb563a03e4a205d7a.png",revision:"554b9d7ab36e9afdb563a03e4a205d7a"},{url:"/_next/static/images/organisms-7922a04cd5711bebbdb7a6fbd6098b46.png.webp",revision:"7922a04cd5711bebbdb7a6fbd6098b46"},{url:"/_next/static/images/pages-b9ef046d02aee4cfa272511c0e799d4d.jpg.webp",revision:"b9ef046d02aee4cfa272511c0e799d4d"},{url:"/_next/static/images/pages-eb19a3bc98cc129145376265e7e9b8d3.jpg",revision:"eb19a3bc98cc129145376265e7e9b8d3"},{url:"/_next/static/images/projecty-6def7270a592365476c54ddbe255d8fd.png",revision:"6def7270a592365476c54ddbe255d8fd"},{url:"/_next/static/images/przeprogramowani-5b725fa7f214afdfdee74c71e4ed4a33.png.webp",revision:"5b725fa7f214afdfdee74c71e4ed4a33"},{url:"/_next/static/images/przeprogramowani-f831c01065c86045bd396a39abf6e6bb.png",revision:"f831c01065c86045bd396a39abf6e6bb"},{url:"/_next/static/images/react-e201953d4bf08c6d4667305c72834072.png",revision:"e201953d4bf08c6d4667305c72834072"},{url:"/_next/static/images/react-e4f7a450155a19495e84c0c82300df9f.png.webp",revision:"e4f7a450155a19495e84c0c82300df9f"},{url:"/_next/static/images/readme-18e81e8cf3215a7adfbce4e85e7d01f8.png",revision:"18e81e8cf3215a7adfbce4e85e7d01f8"},{url:"/_next/static/images/readme-90bbf8b147dd71d08574b4be9b392b9b.png.webp",revision:"90bbf8b147dd71d08574b4be9b392b9b"},{url:"/_next/static/images/readme-template-2f342579959d4375db1d853e8cc36d80.png",revision:"2f342579959d4375db1d853e8cc36d80"},{url:"/_next/static/images/readme-template-b27eec3c33d47c11e5665d1f70918ea1.png.webp",revision:"b27eec3c33d47c11e5665d1f70918ea1"},{url:"/_next/static/images/recenzje-44c30ea562092d8e2275008df239d520.png",revision:"44c30ea562092d8e2275008df239d520"},{url:"/_next/static/images/templates-b214ba9428cb4ef0c29929faf2fe9b8b.jpg.webp",revision:"b214ba9428cb4ef0c29929faf2fe9b8b"},{url:"/_next/static/images/templates-e4ccae48036d6844ec6db4df7dbc7fe7.jpg",revision:"e4ccae48036d6844ec6db4df7dbc7fe7"},{url:"/_next/static/images/use-haki-569f841b9994e567d26ddeb2769b2656.png.webp",revision:"569f841b9994e567d26ddeb2769b2656"},{url:"/_next/static/images/use-haki-9a849c2c4e589227880b8591ceb3ca92.png",revision:"9a849c2c4e589227880b8591ceb3ca92"},{url:"/_next/static/images/whocanuse-ac96bac91661db4964f86f4cebb9e30d.png",revision:"ac96bac91661db4964f86f4cebb9e30d"},{url:"/_next/static/images/whocanuse-c900d8d680d848a0b324bf3cedf24ad7.png.webp",revision:"c900d8d680d848a0b324bf3cedf24ad7"},{url:"/_next/static/images/wsparcie-houdini-4184e75007dbc9d633e7a9a93c60e6ed.png.webp",revision:"4184e75007dbc9d633e7a9a93c60e6ed"},{url:"/_next/static/images/wsparcie-houdini-c56c5d1d8d626de2eba5a733a5ce5675.png",revision:"c56c5d1d8d626de2eba5a733a5ce5675"},{url:"/browserconfig.xml",revision:"d274430c2db6d83fbb368aeb171d5fa2"},{url:"/favicons/android-chrome-192x192.png",revision:"3ed83baa13122d8a5e201079728dc2e1"},{url:"/favicons/android-chrome-512x512.png",revision:"84b227d4489a340e9d27255fb36b8793"},{url:"/favicons/apple-touch-icon.png",revision:"6601e4159da1fe4abc29e98d57f28f23"},{url:"/favicons/favicon-16x16.png",revision:"6e21bb0063b15d9f8661eeb93964dafd"},{url:"/favicons/favicon-32x32.png",revision:"8a599f4d100652ab6698918d14237106"},{url:"/favicons/favicon.ico",revision:"4a958eed55fd112dcf97cad96ba7b822"},{url:"/favicons/mstile-150x150.png",revision:"b4689c0338289648c987396ffd60954e"},{url:"/favicons/safari-pinned-tab.svg",revision:"d1fe704636974ad72b2f6830d5cee737"},{url:"/fonts/CriteriaCFBold.ttf",revision:"a8a1593ce70a690380219fe00719e675"},{url:"/fonts/CriteriaCFBold.woff",revision:"e320ff75a066cfb5fd8072b90aa66e48"},{url:"/fonts/CriteriaCFDemibold.ttf",revision:"4c548f7c0863ea4aa143410c386fb34a"},{url:"/fonts/CriteriaCFDemibold.woff",revision:"450eec6514b85c04e557d25721c5603b"},{url:"/icons/anchor.svg",revision:"627c5d5e5cb9838617b2aea6141a5a1c"},{url:"/icons/arrow-right.svg",revision:"b45869161478ee5facc27c06f75a1449"},{url:"/icons/check-mark.svg",revision:"2e7eb535ba04f3974ff51d93e7dc4532"},{url:"/icons/circle.svg",revision:"7d569946bd3a7956772f09ea7ab7a1a5"},{url:"/icons/facebook.svg",revision:"246c880186fbe4d4859ad626a610cc23"},{url:"/icons/github.svg",revision:"c5297de4c7e16e0d8e681533ddd4e538"},{url:"/icons/graphql.svg",revision:"bf579a40b8b0fc3c65fce6c4290c2bed"},{url:"/icons/linkedin.svg",revision:"7f596d1c7040bfae2b9b20821b7c229f"},{url:"/icons/quote.svg",revision:"d889c4bd0f773144e273147ea1ccda61"},{url:"/icons/sparkle.svg",revision:"cbdd14b75508f862600296514bff38cf"},{url:"/icons/twitter.svg",revision:"6e5885cfaebab3acc43c844645b00abd"},{url:"/icons/typescript.svg",revision:"c71c26eb3c7d1b42da2ad9008450ff2c"},{url:"/images/a11y.png",revision:"8878a0f560ff8da304a6542fc1ea1b14"},{url:"/images/atomic-design/atomic.png",revision:"bddce7360844e90f55867d03bfe913a7"},{url:"/images/atomic-design/atoms.jpg",revision:"6dc3d4d52fd9ffbd628f5ca33ba63461"},{url:"/images/atomic-design/molecule.jpg",revision:"71358925bac0478fa4d53d97b2aec24e"},{url:"/images/atomic-design/molecules.png",revision:"16b76b6496d5b10f01a8f42144bce914"},{url:"/images/atomic-design/organisms.jpg",revision:"084dcef2fb158aadab334c660c5871d1"},{url:"/images/atomic-design/organisms.png",revision:"554b9d7ab36e9afdb563a03e4a205d7a"},{url:"/images/atomic-design/pages.jpg",revision:"eb19a3bc98cc129145376265e7e9b8d3"},{url:"/images/atomic-design/templates.jpg",revision:"e4ccae48036d6844ec6db4df7dbc7fe7"},{url:"/images/blacksoft-logo.png",revision:"ceec50160a1ff11a5520b83f65c82d7a"},{url:"/images/category-css.png",revision:"3ec231a8c8d88fb890b0a5ebdbf197fd"},{url:"/images/category-dostepnosc.png",revision:"a9811f27e5b2290bd112e5ef13e9c831"},{url:"/images/category-firebase.png",revision:"fb2208bd56ce6765365bfcba7225cdae"},{url:"/images/category-graphql.png",revision:"d3fff604d946f9e693b02f0101aa044e"},{url:"/images/category-javascript.png",revision:"d17e19e8206d98287d14361779144839"},{url:"/images/category-typescript.png",revision:"274e1b2e47b27806c17dc99fc7795bdc"},{url:"/images/category-webpack.png",revision:"3f114220e429e4ac3e0f43a69ef049cd"},{url:"/images/continous-integration-z-netlify-i-circleci/ci-test.png",revision:"b3fcc2ef761a4d4fba4e19a0de2debbe"},{url:"/images/css-fluid-typography/clamp-fn-1.png",revision:"85a753591b5a39d3ab9599a22bda880a"},{url:"/images/css-fluid-typography/clamp-margin.png",revision:"730cceb0e9f6449f7b707d87404d87f2"},{url:"/images/css-fluid-typography/clamp-paragraph.png",revision:"083b3b434fdc95a30d8704a460397e1e"},{url:"/images/css-fluid-typography/clamp-wsparcie.png",revision:"6ccf44663600ead8bd4cfb84f8614f22"},{url:"/images/css-fluid-typography/fluid-1.mp4",revision:"5779f671e16e962a6c4791c5430389cc"},{url:"/images/css-fluid-typography/max-fn-1.png",revision:"1f18ee3868b1a935160667789084bf3f"},{url:"/images/css-fluid-typography/max-fn-2.png",revision:"5200adf3a072ab2131ab395dbdbdb337"},{url:"/images/css-fluid-typography/min-fn-1.png",revision:"e0e82369bac025e848df789de5502d1d"},{url:"/images/css-fluid-typography/min-fn-2.png",revision:"88cbd506fed763c78ffaa2cb9cc70e62"},{url:"/images/css-houdini/wsparcie-houdini.png",revision:"c56c5d1d8d626de2eba5a733a5ce5675"},{url:"/images/css.png",revision:"32ead53a47966f17770095411ba97ceb"},{url:"/images/devfeedback.png",revision:"c636d62b72de57d466087186c0663da0"},{url:"/images/devfeedback1.png",revision:"4c0d3505dcc0e7533793f7dc72f4fa99"},{url:"/images/devops.png",revision:"0f60034df23d13caeb13227a356ceb44"},{url:"/images/dostepnosc-czytniki-ekranowe/DevTools-a11y.png",revision:"06466cc72ed39198f594955ed7c286a9"},{url:"/images/dostepnosc-czytniki-ekranowe/DevTools-vision.jpg",revision:"f23cad4b19254fef3bd47d5e4df6f409"},{url:"/images/dostepnosc-czytniki-ekranowe/SR-01.png",revision:"7b1794410ad5917501ed2efa7bc2ffb4"},{url:"/images/dostepnosc-czytniki-ekranowe/SR-02.png",revision:"1eb5be44893ebfee3962fe66be9d723f"},{url:"/images/dostepnosc-czytniki-ekranowe/SR-03.png",revision:"1da3f575dd8b871cf105271365f0ead5"},{url:"/images/dostepnosc-popularne-bledy/Covid-ulotki.png",revision:"e40d416b6b42a7df584662fbe69e874a"},{url:"/images/dostepnosc-semantyczny-html/accessibility-tree.jpg",revision:"719fb4c36b861942cd35ac5d498844db"},{url:"/images/dostepnosc-semantyczny-html/color-contrast.png",revision:"b485c7782e595e4a76b5121f86a03cd6"},{url:"/images/dostepnosc-semantyczny-html/whocanuse.png",revision:"ac96bac91661db4964f86f4cebb9e30d"},{url:"/images/firebase-pobieranie-danych-z-firestore/Firestore-twórcy.png",revision:"e1651eb1c197b1e91f17e40738fa5674"},{url:"/images/firebase-pobieranie-danych-z-firestore/Firestore.png",revision:"8c257f346776fc7fc4ceb6f9592b18fd"},{url:"/images/firebase.png",revision:"ed81dbc7c3f8047053f2890909132166"},{url:"/images/gatsby-cta.png",revision:"620e5113806e44166478389760f3b521"},{url:"/images/gatsby.png",revision:"75422f32e894f75846b2c7601383fd7a"},{url:"/images/github-profile-readme/CyrisXD-Readme.png",revision:"e5d926077879541bd424d29c3c749532"},{url:"/images/github-profile-readme/Jason-Readme.png",revision:"9915f72b3be0a2c495a59b90a7b3adb1"},{url:"/images/github-profile-readme/Michael-Readme.png",revision:"c5bcdba44e7fbcadef390189d4f92ff4"},{url:"/images/github-profile-readme/Monica-Readme.png",revision:"52bb26290d1f0d9e2e4fd3a0a45c3a85"},{url:"/images/github-profile-readme/Readme-Olaf.png",revision:"7c0c6fe2a6132caf038a320c12306dcc"},{url:"/images/graphql-apollo/Apollo-app.png",revision:"27ada348ebf35c5f2f02d7d9a66e792c"},{url:"/images/graphql-apollo/apollo-postacie.png",revision:"f5bfba2e7958a445c5ff536795e39d36"},{url:"/images/graphql-apollo/karta-postaci-apollo.png",revision:"2629ad044e46ad7742516a454e65af9f"},{url:"/images/graphql-generator/TypedDocumentNode.gif",revision:"86b1517f85d369daed33694cb3137d96"},{url:"/images/graphql-podstawy/GraphQLvsRest.png",revision:"cfecc5bb79263275daf36ae3bf9142fa"},{url:"/images/graphql-podstawy/grapqhl-playground-blank.png",revision:"863a7b2869671c0fc9c4e18d546ac6b9"},{url:"/images/graphql-sredniozaawansowany/alias-gql.png",revision:"b0646d3ead37bfe0e374d5aca4c7c1f6"},{url:"/images/graphql.png",revision:"616316b2719202a72b771ef296daf1a5"},{url:"/images/hypnocoders-logo.png",revision:"6bd279dcea8eefa16e7377a4e125fbc5"},{url:"/images/inne.png",revision:"b0fa5daceaee686b36707d8f63733306"},{url:"/images/javascript.png",revision:"d4917378901d9954c0e32187233a2075"},{url:"/images/logo.png",revision:"0e655a6ef3db5d425c936e94e28076ab"},{url:"/images/main.png",revision:"e4ffec705f937f6f0f833fd3d8104fc3"},{url:"/images/me.png",revision:"6fff841cdbb592f5b40bf101bf44cd15"},{url:"/images/olaf.png",revision:"2ee40c050c0f070273410cf980a3f500"},{url:"/images/projecty.png",revision:"6def7270a592365476c54ddbe255d8fd"},{url:"/images/przeprogramowani-logo.png",revision:"7c451b05e208e7ef21fd655610c999e8"},{url:"/images/przeprogramowani.png",revision:"f831c01065c86045bd396a39abf6e6bb"},{url:"/images/react.png",revision:"e201953d4bf08c6d4667305c72834072"},{url:"/images/readme-na-githubie-robisz-to-zle/readme-template.png",revision:"2f342579959d4375db1d853e8cc36d80"},{url:"/images/readme-na-githubie-robisz-to-zle/readme.png",revision:"18e81e8cf3215a7adfbce4e85e7d01f8"},{url:"/images/recenzje.png",revision:"44c30ea562092d8e2275008df239d520"},{url:"/images/svelte.png",revision:"f7a2394c93c7c9ae22e311a992fa8d20"},{url:"/images/typescript-klasy/InterfacevsType.jpeg",revision:"b80d52819b69721d1846df9e7411d7bb"},{url:"/images/typescript.png",revision:"168b54f4f969cfb89e5cd9a4618eb215"},{url:"/images/use-haki.png",revision:"9a849c2c4e589227880b8591ceb3ca92"},{url:"/images/user.png",revision:"48753a99c169bddaadb6ceb3d6d3a7b5"},{url:"/images/webpack.png",revision:"ae1ff2980d85ddb92647c77c464bf26e"},{url:"/robots.txt",revision:"25ea0615cbd9efeabf349585a9ecff1d"},{url:"/rss.xml",revision:"4745d386bf7322d46f5fff617f39c3ac"},{url:"/site.webmanifest",revision:"6262fc80be90383de40022c1f43d28b6"},{url:"/sitemap.xml",revision:"1947b479bc4090a5f8ff6649e23bc08e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
