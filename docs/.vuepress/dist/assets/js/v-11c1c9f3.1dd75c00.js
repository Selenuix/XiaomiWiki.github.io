(self.webpackChunkxiaomiwiki_github_io=self.webpackChunkxiaomiwiki_github_io||[]).push([[2251],{7832:(e,i,a)=>{"use strict";a.r(i),a.d(i,{data:()=>n});const n={key:"v-11c1c9f3",path:"/fr/wiki/A_propos_de_ARP.html",title:"",lang:"fr-FR",frontmatter:{},excerpt:"",headers:[{level:2,title:"À propos de ARP (Protection Anti-Rollback)",slug:"a-propos-de-arp-protection-anti-rollback",children:[{level:3,title:"Vérifier si ARP est activé",slug:"verifier-si-arp-est-active",children:[]},{level:3,title:"Explications de l'anti version",slug:"explications-de-l-anti-version",children:[]}]}],filePathRelative:"fr/wiki/A_propos_de_ARP.md",git:{updatedTime:1625257604e3,contributors:[{name:"Selenuix",email:"anthony.ciszek@outlook.com",commits:1}]}}},7870:(e,i,a)=>{"use strict";a.r(i),a.d(i,{default:()=>f});var n=a(6252);const l=(0,n.Uk)("Page d'index"),r=(0,n.Wm)("h2",{id:"a-propos-de-arp-protection-anti-rollback",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#a-propos-de-arp-protection-anti-rollback","aria-hidden":"true"},"#"),(0,n.Uk)(" À propos de ARP (Protection Anti-Rollback)")],-1),s=(0,n.Wm)("p",null,"La protection anti-rollback (ARP) a été introduite par Google dans Android 8.0 (Oreo) et ils ont rendu sa mise en œuvre obligatoire pour les appareils lancés avec Android 9.0 (Pie). L'ARP est une contre-mesure de sécurité visant à empêcher les appareils de démarrer des versions plus anciennes et moins sûres d'Android. Dans l'implémentation de Google, l'ARP est désactivé si le bootloader est déverrouillé, alors que sur les appareils Xiaomi, il ne peut pas être désactivé une fois qu'il est activé par une ROM qui l'implémente. Xiaomi a probablement pris cette décision pour empêcher les revendeurs d'exploiter les vulnérabilités trouvées dans les anciennes versions de MIUI.",-1),t=(0,n.Wm)("h3",{id:"verifier-si-arp-est-active",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#verifier-si-arp-est-active","aria-hidden":"true"},"#"),(0,n.Uk)(" Vérifier si ARP est activé")],-1),o=(0,n.Uk)("Téléchargez et lancez Xiaomi ADB/Fastboot Tools depuis "),u=(0,n.Uk)("ici"),p=(0,n.Uk)("."),d=(0,n.Uk)("Connectez l'appareil en mode Fastboot. Voir les instructions "),c={href:"https://szaki.github.io/XiaomiADBFastbootTools/",target:"_blank",rel:"noopener noreferrer"},v=(0,n.Uk)("ici"),m=(0,n.Uk)("."),h=(0,n.uE)('<p>Si vous n&#39;obtenez pas de numéro pour l&#39;anti version, l&#39;ARP n&#39;est pas activé. Si vous obtenez un numéro, l&#39;ARP est activé.</p><h3 id="explications-de-l-anti-version" tabindex="-1"><a class="header-anchor" href="#explications-de-l-anti-version" aria-hidden="true">#</a> Explications de l&#39;anti version</h3><p>Avoir une anti version signifie que vous ne pouvez pas flasher la ROM que vous voulez, seulement les ROM qui ont une anti version égale ou supérieure à celle de l&#39;appareil.</p><ul><li>Flasher une ROM dont l&#39;anti version est supérieure à celle de l&#39;appareil lui donne une valeur plus élevée.</li><li>Flasher une ROM avec une anti version égale à celle de l&#39;appareil ne changera rien.</li><li>Flasher une ROM avec une anti version inférieure à celle de l&#39;appareil donnera lieu à un <em>hard brick</em>.</li></ul><p>Pour l&#39;instant, seules les ROM Fastboot vérifient l&#39;anti version et agissent en conséquence. Elles seront abandonnées sans modification si la version anti de l&#39;appareil est supérieure à la sienne.</p><p>Les ROMs customs ne sont pas affectées par l&#39;ARP et le fait de les flasher ne brickera pas l&#39;appareil ou ne changera pas l&#39;anti version.</p>',6),f={render:function(e,i){const a=(0,n.up)("RouterLink"),f=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[(0,n.Wm)("p",null,[(0,n.Wm)(a,{to:"/fr/"},{default:(0,n.w5)((()=>[l])),_:1})]),r,s,t,(0,n.Wm)("ol",null,[(0,n.Wm)("li",null,[(0,n.Wm)("p",null,[o,(0,n.Wm)(a,{to:"/fr/wiki/Outils_pour_les_appareils_Xiaomi.html"},{default:(0,n.w5)((()=>[u])),_:1}),p])]),(0,n.Wm)("li",null,[(0,n.Wm)("p",null,[d,(0,n.Wm)("a",c,[v,(0,n.Wm)(f)]),m])])]),h],64)}}}}]);