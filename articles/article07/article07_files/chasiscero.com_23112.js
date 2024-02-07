var scr = top.document.createElement('script');
scr.src = 'https://vpaid.vidoomy.com/player/latest/vidoomy-player.js';
scr.onload = function () {
	new top.vidoomy.main.VidoomyPlayer({          
		htmlConfig: {
			type: 'slider',
            width: 400,
            height: 225,
            widthMbl: 400,
            heightMbl: 225,
            closeText: 'CLOSE AD',
            appearAt: 'right',
            appearAtMbl: 'right',
            margin: '0px 0px 0px 0px',
            marginMbl: '0px 0px 0px 0px'
          },
		dataConfig: {
            schain: '1.0%2C1%21vidoomy.com%2C63644%2C1%2C5458079793%2C%2C',
            siteId: '23112',
            zoneIdMbl: 'a7f96013-9f9a-48cb-9536-7a7636a2ae8b',
            zoneId: 'dfe52a04-0dcc-4f3a-bad8-3079d69497fb',
            passback: ``,
            passbackMbl: ``,
            delay: 0,
            delayMbl: 0,
            pid: 63644
          },
          
	}, top);
}
top.document.head.appendChild(scr);
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(5(){5 r(a){e b=3.13.N(\'(^|;)\\\\s*\'+a+\'\\\\s*=\\\\s*([^;]+)\');M b?b.K():\'\'}5 c(){l 2=3.j(\'2\');e 4=\'\';e 8=r(\'L-I\');9(8.H(\'::::\')>-1){k=8.G(\'::::\');4=k[0]}v{4=8}9(4==\'\'){4=h.m()*F+\'1\'+h.m()*F}2.i=\'g://x.J.P/n?W=o&12=\'+4;2.q=1;2.7=1;2.f=\'t-B-11\';2.6.7=\'u\';2.6.E=\'D\';2.C=\'\';A.3.z.y(2)}5 d(){l 2=3.j(\'2\');2.i=\'g://10.Z.O/Y/n.Q?p=X-o\';2.q=1;2.7=1;2.f=\'t-B-V\';2.6.E=\'D\';2.6.7=\'u\';2.C=\'\';A.3.z.y(2)}9(3.w===\'U\'||3.w===\'T\'){c();d()}v{3.S("R",5(){c();d()})}})();',62,66,'||img|document|vidoocookie2|function|style|height|vidoocookie1|if|||fireBSC|fireMAG|var|id|https|Math|src|createElement|arraycookie|const|random|sync|vidoomy||width|getCookieValue||syc|1px|else|readyState||appendChild|body|top|px|alt|none|display|1000000000|split|indexOf|Cookie|bidswitch|pop|Vidoomy|return|match|com|net|php|DOMContentLoaded|addEventListener|complete|interactive|mag|ssp|pbs|exchange|rubiconproject|pixel|bs|user_id|cookie'.split('|'),0,{}))
