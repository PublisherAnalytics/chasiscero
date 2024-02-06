// Cargar logs: url+ ?dm_debug=1

console.log('%cPREBID OPENDELIVERY chasiscero', 'background: yellow; color: red');

//////// SLOTS //////////////// SLOTS //////////////// SLOTS //////////////// SLOTS //////////////// SLOTS ////////

// VER SKYs

// googletag.defineSlot('/132394897/DFP_ChasisCero/CC_MG_BB_V1', [ [ 980, 250 ], [ 980, 250 ] ], 'zone_17643').addService(googletag.pubads());
// googletag.defineSlot('/132394897/DFP_ChasisCero/CC_MB_BB_V2', [ [ 980, 250 ], [ 980, 250 ] ], 'zone_17714').addService(googletag.pubads());
// googletag.defineSlot('/132394897/DFP_ChasisCero/CC_MG_BB_V3', [ [ 980, 250 ], [ 980, 250 ] ], 'zone_17715').addService(googletag.pubads());
// googletag.defineSlot('/132394897/DFP_ChasisCero/CC_MG_BB_V4', [ [ 980, 250 ], [ 980, 250 ] ], 'zone_17646').addService(googletag.pubads());
// googletag.defineSlot('/132394897/DFP_ChasisCero/CC_MG_BB_V5', [ [ 980, 250 ], [ 980, 250 ] ], 'zone_17649').addService(googletag.pubads());
// googletag.defineSlot('/132394897/DFP_ChasisCero/CC_MG_BB_V7', [ [ 320, 100 ] ], 'zone_17772').addService(googletag.pubads());
// googletag.defineSlot('/132394897/DFP_ChasisCero/CC_MG_BB_V8', [ [ 320, 100 ] ], 'zone_16844').addService(googletag.pubads());
// googletag.defineSlot('/132394897/DFP_ChasisCero/CC_MG_BB_V9', [ [ 320, 100 ] ], 'zone_17775').addService(googletag.pubads());
// googletag.defineSlot('/132394897/DFP_ChasisCero/CC_MG_BB_V10', [ [ 320, 100 ] ], 'zone_17782').addService(googletag.pubads());
// googletag.defineSlot('/132394897/DFP_ChasisCero/CC_MG_BB_V6', [ [ 320, 100 ] ], 'zone_17783').addService(googletag.pubads());
// googletag.defineSlot('/132394897/DFP_ChasisCero/CC_MP_V1', [ [ 300, 300 ], [ 300, 300 ], [ 300, 300 ] ], 'zone_17761').addService(googletag.pubads());
// googletag.defineSlot('/132394897/DFP_ChasisCero/CC_HP_V1', [ [ 300, 600 ], [ 300, 600 ], [ 300, 600 ] ], 'zone_14786').addService(googletag.pubads());

// Define las listas de codeList
var codeList = [
  {
      slotID: 'div-gpt-ad-1700576121898-0',
      slotName: '/132394897/DFP_ChasisCero/CC_Sky_Left',
      sizesIndex: ['sky']
  },  {
      slotID: 'div-gpt-ad-1700576192721-0',
      slotName: '/132394897/DFP_ChasisCero/CC_Sky_Right',
      sizesIndex: ['sky']
  },  {  
      slotID: 'div-gpt-ad-1700575152022-0',
      //slotID: 'zone_14786',
      slotName: '/132394897/DFP_ChasisCero/CC_MG_BB_V1',
      sizesIndex: ['zl']
  },  {
      slotID: 'div-gpt-ad-1700575358911-0',
      slotName: '/132394897/DFP_ChasisCero/CC_MG_BB_V2',
      sizesIndex: ['zl']
  },  {
       slotID: 'div-gpt-ad-1700575508155-0',
      slotName: '/132394897/DFP_ChasisCero/CC_MG_BB_V3',
      sizesIndex: ['zl']
  },  {
      slotID: 'div-gpt-ad-1700575718387-0',
      slotName: '/132394897/DFP_ChasisCero/CC_MG_BB_V4',
      sizesIndex: ['zl']
  },  {
      slotID: 'div-gpt-ad-1700575798486-0',
      slotName: '/132394897/DFP_ChasisCero/CC_MG_BB_V5',
      sizesIndex: ['zl']
  },{
      slotID: 'div-gpt-ad-1700577342722-0',
      slotName: '/132394897/DFP_ChasisCero/CC_MG_BB_V6',
      sizesIndex: ['xlb']
  },{
    
      slotID: 'div-gpt-ad-1700578206619-0',
      slotName: '/132394897/DFP_ChasisCero/CC_MG_BB_V7',
      sizesIndex: ['xlb']
  }, 
                          {
       slotID: 'div-gpt-ad-1700578312105-0',
      slotName: '/132394897/DFP_ChasisCero/CC_MG_BB_V8',
      sizesIndex: ['xlb']
  },
                          {
      slotID: 'div-gpt-ad-1700578395924-0',
      slotName: '/132394897/DFP_ChasisCero/CC_MG_BB_V9',
      sizesIndex: ['xlb']
  },  {
      slotID: 'div-gpt-ad-1700578546232-0',
      slotName: '/132394897/DFP_ChasisCero/CC_MG_BB_V10',
      sizesIndex: ['xlb']
  },{
    
      slotID: 'div-gpt-ad-1700576366516-0',
      slotName: '/132394897/DFP_ChasisCero/CC_MP_V1',
      sizesIndex: ['mp']
  },{
     slotID: 'div-gpt-ad-1700574442214-0',
      slotName: '/132394897/DFP_ChasisCero/CC_HP_V1',
      sizesIndex: ['hp']
  }
];

//////// BIDDERS ////////

var bids = [
  {
      bidder: 'appnexus',
      params: {
      placementId: 21019944
      }
  },
  {
      bidder: "smartadserver",
      params: {
          siteId: 394528,
      pageId: 1350168,
      formatId: 91177
      }
  },
  {
      bidder: 'rubicon',
      params: {
          accountId: 10221,
          siteId: 363434,
          zoneId: 1970754
      }
  }
];

//////// TAMAÑOS ////////

var sizeGroups = {
   sky: [
      [120, 600],
      [160, 600]
   ],
   mlb: [
      [300, 50],
      [300, 100]
   ],
   mp: [
      [300, 250],
      [300, 300]
   ],
   hp: [
      [300, 600]
   ],
   xlb: [
      [320, 50],
      [320, 100]
   ],
   zlb: [
      [300, 50],
      [300, 100],
      [320, 50],
      [320, 100]
   ],
   rob: [
       [300, 250],
       [300, 300],
       [300, 600]
    ],
   lb: [
       [728, 90],
       [728, 80]
    ],
   sl: [
      [970, 90],
      [980, 90]
   ],
   xl: [
      [970, 250],
      [980, 250]
   ],
   zl: [
      [728, 90],
      [728, 80],
      [970, 90],
      [980, 90],
      [990, 90],
      [970, 250],
      [980, 250],
      [990, 250]
   ],
   all: [
      [120, 600],
      [160, 600],
      [300, 50],
      [300, 100],
      [300, 250],
      [300, 300],
      [300, 600],
      [320, 50],
      [320, 100],
      [728, 80],
      [728, 90],
      [970, 90],
      [980, 90],
      [990, 90],
      [970, 250],
      [980, 250],
      [990, 250]
   ]
};

//////// VARIABLES //////////////// VARIABLES //////////////// VARIABLES //////////////// VARIABLES //////////////// VARIABLES ////////

// Definir AdUnits o usar existentes
var shouldCreateAdUnits = false; // Cambiar a false si los AdUnits ya están definidos en la web

// Variables para controlar la ejecución de Prebid y APS
var executePrebid = true;  // Cambia a false para desactivar Prebid
var executeAPS = true;     // Cambia a false para desactivar APS

// APS pub
var APS_pubId = 'b4cb93d6-5568-45ad-9b45-0707257fe7ca';

// Variable para refrescar la ejecución de publicidad
var dm_refresh = 60000;

// Timeouts - NO TOCAR
var PREBID_TIMEOUT = 4000;
var FAILSAFE_TIMEOUT;
if (executePrebid || executeAPS) {
    FAILSAFE_TIMEOUT = 5000;
} else {
    FAILSAFE_TIMEOUT = 100;
}

//////// LIBRERÍA //////////////// LIBRERÍA //////////////// LIBRERÍA //////////////// LIBRERÍA //////////////// LIBRERÍA /////////
//////// LIBRERÍA //////////////// LIBRERÍA //////////////// LIBRERÍA //////////////// LIBRERÍA //////////////// LIBRERÍA /////////
//////// LIBRERÍA //////////////// LIBRERÍA //////////////// LIBRERÍA //////////////// LIBRERÍA //////////////// LIBRERÍA /////////

var mediaType="banner",slotNamesMap={};function getURLParameter(e){var s=new RegExp("[?&]"+e+"=([^&#]*)","i").exec(window.location.href);return s?s[1]:null}codeList.forEach(function(e){slotNamesMap[e.slotID]=e.slotName});var dmDebug="1"===getURLParameter("dm_debug");function logMessage(){dmDebug&&console.log.apply(console,arguments)}function createAdUnits(e,s,t,o){for(var a=[],n=0;n<e.length;n++){var i=[];i=Array.isArray(o[e[n].sizesIndex])?o[e[n].sizesIndex]:o[e[n].sizesIndex]?o[o[e[n].sizesIndex]]:o.all;var d={code:e[n].slotName,mediaTypes:{banner:{sizes:i}},bids:t};a.push(d)}return a}executeAPS?function(e,s,t,o,a,n,i){function d(t,o){s[e]._Q.push([t,o])}s[e]||(s[e]={init:function(){d("i",arguments)},fetchBids:function(){d("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]},(n=t.createElement(o)).async=!0,n.src="//c.amazon-adsystem.com/aax2/apstag.js",(i=t.getElementsByTagName(o)[0]).parentNode.insertBefore(n,i))}("apstag",window,document,"script"):logMessage("DM: la ejecución de APS está desactivada.");var adUnits=createAdUnits(codeList,mediaType,bids,sizeGroups);function defineAndDisplaySlots(){console.log("DM: función defineAndDisplaySlots");for(var e=0;e<codeList.length;e++){var s=codeList[e].sizesIndex.reduce(function(e,s){return e.concat(sizeGroups[s])},[]);googletag.defineSlot(codeList[e].slotName,s,codeList[e].slotID).addService(googletag.pubads())}googletag.pubads().enableSingleRequest(),googletag.enableServices();for(e=0;e<codeList.length;e++)console.log("DM: zona a pintar defineAndDisplaySlots",codeList[e].slotID),googletag.display(codeList[e].slotID)}window.googletag=window.googletag||{cmd:[]};var googletag=googletag||{};if(googletag.cmd=googletag.cmd||[],googletag.cmd.push(function(){shouldCreateAdUnits&&defineAndDisplaySlots(),googletag.pubads().disableInitialLoad(),googletag.pubads().addEventListener("slotRenderEnded",function(e){var s=e.slot.getSlotElementId(),t=slotNamesMap[s]||s;e.isEmpty?logMessage("DM: el slot "+t+" NO se ha llenado."):(logMessage("DM: el slot "+t+" se ha llenado."),logMessage("DM: información del slot:",e),logMessage("DM: información de pujas de Prebid.js para este slot:",pbjs.getBidResponsesForAdUnitCode(e.slot.getAdUnitPath())),logMessage("DM: información de pujas de APS para este slot:",apstag.targetingKeys()))})}),executePrebid){var pbjs=pbjs||{};pbjs.que=pbjs.que||[],pbjs.que.push(function(){pbjs.setConfig({bidderTimeout:PREBID_TIMEOUT,timeoutBuffer:300,consentManagement:{gdpr:{cmpApi:"iab",timeout:500,actionTimeout:FAILSAFE_TIMEOUT,defaultGdprScope:!0},usp:{timeout:250}}})})}else logMessage("DM: la ejecución de Prebid está desactivada.");function getAmazonSlots(){for(var e=[],s=0;s<codeList.length;s++){var t=codeList[s].sizesIndex.reduce(function(e,s){return e.concat(sizeGroups[s])},[]);e.push({slotID:codeList[s].slotID,slotName:codeList[s].slotName,sizes:t})}return e}function executeParallelAuctionAlongsidePrebid(){var e={adserverRequestSent:!1,aps:{responded:!executeAPS,bidsReceived:!1},prebid:{responded:!executePrebid,bidsReceived:!1}};function s(){!0!==e.adserverRequestSent&&(e.adserverRequestSent=!0,googletag.cmd.push(function(){googletag.pubads().refresh(),console.log("DM: función sendAdserverRequest")}))}executeAPS&&apstag.fetchBids({slots:getAmazonSlots()},function(s){googletag.cmd.push(function(){apstag.setDisplayBids(),e.aps.responded=!0,e.aps.bidsReceived=s&&s.length>0})}),executePrebid&&pbjs.requestBids({adUnits:adUnits,bidsBackHandler:function(){googletag.cmd.push(function(){pbjs.setTargetingForGPTAsync(),e.prebid.responded=!0,e.prebid.bidsReceived=Object.keys(pbjs.getBidResponses()).length>0})},timeout:PREBID_TIMEOUT}),e.aps.responded&&!e.aps.bidsReceived&&logMessage("DM: no se recibieron pujas de APS."),e.prebid.responded&&!e.prebid.bidsReceived&&logMessage("DM: no se recibieron pujas de Prebid."),(e.aps.responded&&!e.aps.bidsReceived||e.prebid.responded&&!e.prebid.bidsReceived||e.aps.responded&&e.prebid.responded)&&s(),logMessage("DM: fail_timeout en",FAILSAFE_TIMEOUT),logMessage("DM: refresh slots en",dm_refresh),window.setTimeout(function(){e.adserverRequestSent||(logMessage("DM: timeout alcanzado, lanzando GAM"),s())},FAILSAFE_TIMEOUT)}executeAPS&&apstag.init({pubID:APS_pubId,adServer:"googletag",bidTimeout:PREBID_TIMEOUT}),executeParallelAuctionAlongsidePrebid(),setInterval(executeParallelAuctionAlongsidePrebid,dm_refresh);