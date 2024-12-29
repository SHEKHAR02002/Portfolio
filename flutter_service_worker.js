'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7f60361bbfb3ef3514fc0ae34388dc35",
".git/config": "a2876c350b0b4e1fdf991ec41c1b5f31",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7198384db18a861a3879d1cea95e8952",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "43c5ef6f91b848dc2a6369b370cedee9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a8e81d7bac5f9d0ca2b6fc7bf83628a6",
".git/logs/refs/heads/main": "81595a7c26959a65ea438e4454b4c938",
".git/logs/refs/remotes/origin/main": "3588937a4b5489a6b704b7dc4373e13e",
".git/objects/02/8c630d641011d3510691dea4793aa425e3c033": "9cc6800e9a3a8b871a97ce7c48097610",
".git/objects/03/465c648d1a07d9047be3bfef46d6840d304400": "09a9d4c4bcbcd98bd43cb95bd37f3cf7",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/27254a53ac76565018ce979f19dbe2335179d4": "b5dfe6202f6fe94a2e0d7b159e53ecf8",
".git/objects/0d/933605b31bd929fa1b961e86ad59932de51e09": "88aa7b1a382d1d890af8f5c483f7ab77",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/d8b35e034612f29051d8c6fe5751ab73f1fa5f": "8fa1c818d91ac126b3c8887377bccd31",
".git/objects/13/bf8a51b97bcf38a647ebc887781f921022893f": "9aa8cfa35cd2535c8d3d97a56b1032c2",
".git/objects/14/79ae6a74049b2ed5fc258c1648793ea09e3de5": "54198afed22e9827ee3b903dc25f8948",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/764ba02768974a483e8c3aac23adadc2ec34a7": "aefcdcfeaf973a081c4cd980c9f52544",
".git/objects/22/f3597156042ae583010263e1b95e4f266da017": "0e450a3bd98d6303ee3975c13ca2f9da",
".git/objects/23/4bca350b5e7581df8d4dd8b28b2636d8ce22e5": "c15b719216010db5d9b0445a60045845",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2d/3118ab9ff3e700b562f5a395459a88cc00724d": "90c9cd73fb547aeae3cfe1f60c087a3f",
".git/objects/38/30ac8139aa59f9de2d206479236550a27856e5": "aa7a2406bcccf6d86757507099033cc2",
".git/objects/39/738d60c0bcf1d6fddc93ba92c26fc6e5fa1385": "83ee19bd851e44d082e3e4e9baeae48b",
".git/objects/40/0dd047f1033499726a126ea14f039051a1afe4": "1cda926d47c13faf7df914e36d61962a",
".git/objects/40/93350667c08e37484c17a8137fe655d54c9281": "84891946e93f4b1da0571a82a312df48",
".git/objects/42/cfdaf3a509262484dac21179766815b210c539": "873e93cfe4f2a349956f5c6d7f5d5967",
".git/objects/45/b7166f49d5929c28c4f5bc0f85f04deb529c15": "173def1ea13261a005dcf17f94dfb5f1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/51/d325012c3e480962525c9694a5d8ed9e715a35": "1d389d0e185735b4ab5338e95abfacbf",
".git/objects/55/d4bba688f585cb54a60763925820a6cb024c46": "d02c3b6daa40f7e4beb7b2edf7cc1f73",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/58/069f8ae5e0730bf65365457dfd856ad6f4bab5": "3646a1a420989b22c4ed523d54d84075",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5c/aeba00620c139e616c3ebf1e727efb12937490": "da713a509ac1bac032b5baa21b31fc16",
".git/objects/5d/f82384131d5b1038778e3736dcfd0ba8e8dd49": "6080fef9f14672530ba628b64c9efae8",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/66/83e39b2d16cede76ff8d58be71d8e3bdeea754": "4042d13dbfb7d5bbff1ab70e0dcea277",
".git/objects/69/676cd29e2f002d41af87eec22f10aaf8f78edc": "0433fdaf602743d2356313885ddeda2d",
".git/objects/69/82824391d266073e2208f33a0830bfc6aa2027": "8cb74fc2e200e7f0d08110d474d22959",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/69/e3b7ff288d94df5a74f5cc5bf43971a49ef707": "a26ce327d0a27537896764f606d8de43",
".git/objects/6f/429216668393ca63ca40d5ab489f5b218c8b43": "30b7d3e34cdab85a4d10afc360d2cd19",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/75/377e040c7689d8c090056f896ebe78a72e6add": "663c59672b40bc151c106050bb987543",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7f/0d9200fff8f976c15546dc213f354e44a5f4f0": "e4be185e5b13bc9f0229211629160957",
".git/objects/7f/40c2b02dbd5398187c12b6246fb06afe4c5844": "69959f156845b8453d0ed4c6edc296c6",
".git/objects/82/ce5fb30c5b5a403b38ea26f28050a388604a58": "c176d382fc13eea21eb9ef05a4e01798",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/a7feabbd0ae29dc5b6625c8d3311dc5c0d2331": "78635b459c3242b2dac65a5e99c07452",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/8c425ac2ba9a70c8595f7a29c0f8fe7f04b966": "c50120dfe0221ee19bf2e8f2b1ef9595",
".git/objects/8c/d8fcf67ce4d336ca7545d6a67b2d0034cf2c6b": "7d3bce0a08fee78d2f4b588eb1e67c84",
".git/objects/8d/cd7cabafd114313eb03d4e3537edc1246f1e0d": "1a0c422617d7a44fbbfda9d1dea8b4bc",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9b/23a4c64d1eb458ded77590e1f66525bf5381b7": "d557401ee58c6be200607edcba7505de",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "a391c0384d1cabd19155f2907d961b09",
".git/objects/a1/d73e6d58764f0b339ebde2a8bedd488e0c4769": "4c032ccc3b8f20bcad1d223ead107a92",
".git/objects/a8/8528be216f8b7fef46474eea814c89865def3c": "cf1aa5e9616b35e853249b2912cf72c4",
".git/objects/aa/27785c7fe7b89b368ad02f4f6023bf4fd0f3ef": "0e4c5e2426fcc0ac6a17ddbcb3dd8e2d",
".git/objects/ab/381ace798ddfa3e333f9fe44c1121c680227e3": "835e430692965bc5184d3e7b4e02310a",
".git/objects/b3/6cd0485ceaa4e1296826d5c8844a1a5bd0583a": "59819319eb0da36b11a1dcbed0bf4349",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/c506031b2dc04cf54c9caf1bc161e29a4734e9": "ff57c0b78a569251be05ecd465aee5b6",
".git/objects/c2/3155a61ee41ecea70dff6960e887aeabac47e2": "e837b95f2ca456887a547e1b8088bc5d",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/1faa1dc30d9345b7ba098ac495e6e17c68da75": "984ec4878c754596858d0817e2993d76",
".git/objects/e4/03b4e8961bdfd1c4be8d4e32cc1c50fd7f00d0": "08aaf20e4325c3b6d431a508dde5a4f1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/28f798ac0d6d30cd870263996a1cc4d4f4fced": "625f4c823ed9123cf73f636fb0f29d49",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/4035880637eaa4d2f422f00437384f6206fe83": "0582cc55e7bdb7361fbb99346603c657",
".git/objects/f9/fdaf09436ad05dabd9e5869a0f5d0bd7af3dde": "a2c5fd96ca302d8d03d4b28353578bc9",
".git/objects/fd/0b14f2c9c39c0c66f3dc537e160b8c17eca4d6": "7949e038ec8b9a39be7d5e783ec7c9b9",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/ORIG_HEAD": "a2f676e25cea9fc5d31bd46e58fede01",
".git/refs/heads/main": "a2f676e25cea9fc5d31bd46e58fede01",
".git/refs/remotes/origin/main": "a2f676e25cea9fc5d31bd46e58fede01",
"assets/AssetManifest.bin": "860a255c46484af3a1ebf76eecd076b4",
"assets/AssetManifest.bin.json": "e2df536b00fab624b13750429331891b",
"assets/AssetManifest.json": "c612522506ee33f5dbea05934d5fb423",
"assets/assets/boppoTech.png": "361558d1ada56b785cc4100b843e8185",
"assets/assets/dottedImage.jpg": "b4d4ad155c7bf47256334e9ded56008f",
"assets/assets/dribbble.svg": "2e795e6240c08fca21b56a9853210455",
"assets/assets/heartBetter.png": "689339a1727c13c76a1cf119cb9f57ab",
"assets/assets/instagram.svg": "2fa21f6fce030076be9d89dd85496a56",
"assets/assets/linkedin.svg": "2c20928ddc18c3e2ac70e6f8f38ca825",
"assets/assets/petaraa.png": "ee439d5ff98f8078e9074ca63b32cd22",
"assets/assets/petaraa_main.png": "c3175f04f44eec1c44b59a66f8c8eefe",
"assets/assets/petaraa_text.png": "ebcab910f090217cf727113f0a100cad",
"assets/assets/sakshiImage.png": "a25f02def15be3c3b5a30fc9b4ec1a55",
"assets/assets/uiLogo.png": "caf815e520930ed1c1a2ef7bd4e068cd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "3eaad9540da99c750e7774b787eff41f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "a7b69bb8bd2badc9d670321c2f9f6cf9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a351800389c739e73688244d13c11763",
"/": "a351800389c739e73688244d13c11763",
"main.dart.js": "29efcec2175353b892b1458cc4f57ffc",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
