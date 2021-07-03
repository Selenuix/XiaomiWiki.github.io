(self.webpackChunkxiaomiwiki_github_io=self.webpackChunkxiaomiwiki_github_io||[]).push([[2368],{4177:(e,t,i)=>{"use strict";i.r(t),i.d(t,{data:()=>o});const o={key:"v-217ca08a",path:"/wiki/Fix_sensor_issues.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Fix sensor issues",slug:"fix-sensor-issues",children:[{level:3,title:"Instructions",slug:"instructions",children:[]}]}],filePathRelative:"wiki/Fix_sensor_issues.md",git:{updatedTime:1625257604e3,contributors:[]}}},8593:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>y});var o=i(6252);const s=(0,o.Uk)("Index page"),n=(0,o.Wm)("h2",{id:"fix-sensor-issues",tabindex:"-1"},[(0,o.Wm)("a",{class:"header-anchor",href:"#fix-sensor-issues","aria-hidden":"true"},"#"),(0,o.Uk)(" Fix sensor issues")],-1),l=(0,o.Wm)("p",null,[(0,o.Uk)("On Xiaomi devices, sensor data is stored in a partition called "),(0,o.Wm)("em",null,"persist"),(0,o.Uk)(". This partition is flashable and an image of it is included with all fastboot ROMs but devices made after 2016 don't allow you to modify it in fastboot mode, regardless of the status of the bootloader. Unfortunately, software issues may cause the sensors in the device to misbehave or stop working completely, but usually reflashing this partition solves these problems. If the partition is write protected in fastboot mode, you'll have to use Qualcomm's EDL mode to flash it. The EDL flashing script originally skips the persist partition but you can modify it to flash that as well when you are flashing with MiFlash.")],-1),a=(0,o.Wm)("h3",{id:"instructions",tabindex:"-1"},[(0,o.Wm)("a",{class:"header-anchor",href:"#instructions","aria-hidden":"true"},"#"),(0,o.Uk)(" Instructions")],-1),r=(0,o.Wm)("p",null,[(0,o.Wm)("strong",null,"Requirements:"),(0,o.Uk)(" Qualcomm Snapdragon chipset")],-1),u=(0,o.Uk)("Download the latest MiFlash from "),d=(0,o.Uk)("here"),h=(0,o.Uk)(" and install it."),m=(0,o.Uk)("Download the Fastboot ROM you want to flash from "),c={href:"https://xiaomifirmwareupdater.com/miui/",target:"_blank",rel:"noopener noreferrer"},p=(0,o.Uk)("here"),f=(0,o.Uk)(" and unzip it."),g=(0,o.Wm)("div",{class:"custom-container tip"},[(0,o.Wm)("p",{class:"custom-container-title"},"TIP"),(0,o.Wm)("p",null,"You might get a single .tar file after unzipping which has to be unzipped again in order to get the necessary files.")],-1),k={start:"3"},w=(0,o.uE)("<li><p>In the unzipped folder, enter the <code>images</code> folder and open the file <code>rawprogram0.xml</code> in a text editor (Notepad++ or VS Code recommended).</p></li><li><p>In the <strong>line</strong> that contains the string <code>label=&quot;persist&quot;</code>, change <code>filename=&quot;&quot;</code> to <code>filename=&quot;persist.img&quot;</code>.</p><p>If there&#39;s a line right below it, that contains the string <code>label=&quot;persistbak&quot;</code>, change its <code>filename=&quot;&quot;</code> to <code>filename=&quot;persist.img&quot;</code> as well.</p></li><li><p>Save <code>rawprogram0.xml</code> and close the text editor.</p></li>",3),W=(0,o.Uk)("Connect the device to your PC and "),b=(0,o.Uk)("enter EDL mode"),v=(0,o.Uk)("."),x=(0,o.Wm)("li",null,[(0,o.Wm)("p",null,"Launch MiFlash and with the Select button browse for the unzipped folder, then click Refresh. The device should appear as a COM port.")],-1),U=(0,o.Wm)("li",null,[(0,o.Wm)("p",null,"Click Flash and wait until the flashing sequence finishes.")],-1),_=(0,o.Wm)("li",null,[(0,o.Wm)("p",null,"Disconnect the device and hold the Power button until the device turns on."),(0,o.Wm)("p",null,"The first boot may take up to 15 minutes.")],-1),y={render:function(e,t){const i=(0,o.up)("RouterLink"),y=(0,o.up)("OutboundLink");return(0,o.wg)(),(0,o.j4)(o.HY,null,[(0,o.Wm)("p",null,[(0,o.Wm)(i,{to:"/"},{default:(0,o.w5)((()=>[s])),_:1})]),n,l,a,r,(0,o.Wm)("ol",null,[(0,o.Wm)("li",null,[(0,o.Wm)("p",null,[u,(0,o.Wm)(i,{to:"/wiki/Tools_for_Xiaomi_devices.html"},{default:(0,o.w5)((()=>[d])),_:1}),h])]),(0,o.Wm)("li",null,[(0,o.Wm)("p",null,[m,(0,o.Wm)("a",c,[p,(0,o.Wm)(y)]),f])])]),g,(0,o.Wm)("ol",k,[w,(0,o.Wm)("li",null,[(0,o.Wm)("p",null,[W,(0,o.Wm)(i,{to:"/wiki/Access_EDL_mode.html"},{default:(0,o.w5)((()=>[b])),_:1}),v])]),x,U,_])],64)}}}}]);