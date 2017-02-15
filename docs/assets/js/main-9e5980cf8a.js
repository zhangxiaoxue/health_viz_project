!function(){function e(e,t){return(/string|function/.test(typeof t)?c:n)(e,t)}function t(e,r){return"string"!=typeof e&&(r=typeof e,"number"===r?e+="":e="function"===r?t(e.call(e)):""),e}function r(e){return d[e]}function o(e){return t(e).replace(/&(?![\w#]+;)|[<>"']/g,r)}function a(e,t){if(u(e))for(var r=0,o=e.length;o>r;r++)t.call(e,e[r],r,e);else for(r in e)t.call(e,e[r],r)}function i(e,t){var r=/(\/)[^\/]+\1\.\.\1/,o=("./"+e).replace(/[^\/]+$/,""),a=o+t;for(a=a.replace(/\/\.\//g,"/");a.match(r);)a=a.replace(r,"/");return a}function n(t,r){var o=e.get(t)||l({filename:t,name:"Render Error",message:"Template not found"});return r?o(r):o}function c(e,t){if("string"==typeof t){var r=t;t=function(){return new p(r)}}var o=s[e]=function(r){try{return new t(r,e)+""}catch(o){return l(o)()}};return o.prototype=t.prototype=h,o.toString=function(){return t+""},o}function l(e){var t="{Template Error}",r=e.stack||"";if(r)r=r.split("\n").slice(0,2).join("\n");else for(var o in e)r+="<"+o+">\n"+e[o]+"\n\n";return function(){return"object"==typeof console&&console.error(t+"\n\n"+r),t}}var s=e.cache={},p=this.String,d={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},u=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},h=e.utils={$helpers:{},$include:function(e,t,r){return e=i(r,e),n(e,t)},$string:t,$escape:o,$each:a},m=e.helpers=h.$helpers;e.get=function(e){return s[e.replace(/^\.\//,"")]},e.helper=function(e,t){m[e]=t},"function"==typeof define?define(function(){return e}):"undefined"!=typeof exports?module.exports=e:this.template=e,e("chart-legend",function(e){"use strict";var t=this,r=(t.$helpers,t.$escape),o=e.colors,a=e.data,i="";return i+='<div class="chart-legend" id="chart-legend"> <ul> <li><i class="icon-circle bottom-fifth" style="color:',i+=r(o[4]),i+='"></i> <label>Bottom Fifth</label><br/><i class="desp">',i+=r(a[4]),i+=' Tracts</i></li> <li><i class="icon-circle lower-middle" style="color:',i+=r(o[3]),i+='"></i> <label>Lower Middle</label><br/><i class="desp">',i+=r(a[3]),i+=' Tracts</i></li> <li><i class="icon-circle middle-class" style="color:',i+=r(o[2]),i+='"></i> <label>Middle</label><br/><i class="desp">',i+=r(a[2]),i+=' Tracts</i></li> <li><i class="icon-circle upper-middle" style="color:',i+=r(o[1]),i+='"></i> <label>Upper Middle</label><br/><i class="desp">',i+=r(a[1]),i+=' Tracts</i></li> <li><i class="icon-circle top-fifth" style="color:',i+=r(o[0]),i+='"></i> <label>Top Fifth</label><br/><i class="desp">',i+=r(a[0]),i+=" Tracts</i></li> </ul> </div>",new p(i)}),e("chart-popup",function(e){"use strict";var t=this,r=(t.$helpers,t.$escape),o=e.data,a=e.chartId,i="";return i+='<div class="chart-popup"> ',i+=r(o),i+=' <div class="tract-name"> ',i+=r(o.tract_name),i+=' </div> <div class="tract-data"> <p>',i+=r(o[a].name),i+=": <strong>",i+=r(o[a].num),i+="</strong></p> ","income"==a?i+=" ":"insurance"==a?(i+=" <p>Percentage: <strong>",i+=r(o[a].pct),i+="</strong></p> <p>Total Population: <strong>",i+=r(o.total_pop),i+="</strong></p> "):"hospital"==a?(i+=" <p>Maximum of Facilities in a Tract: <strong>",i+=r(o[a].max),i+="</strong></p> "):"emergency"==a?(i+=" <p>Maximum of Facilities in a Tract: <strong>",i+=r(o[a].max),i+="</strong></p> "):(i+=" <p>Percentage: <strong>",i+=r(o[a].pct),i+="</strong></p> <p>Total Births: <strong>",i+=r(o.total_birth_pop),i+="</strong></p> "),i+=" </div> </div>",new p(i)}),e("legend",function(e){"use strict";var t=this,r=(t.$helpers,t.$escape),o=e.currentIndicatorName,a=e.unit,i=e.colors,n=e.ranges,c="";return c+='<div class="legend-title">',c+=r(o),c+=" (",c+=r(a),c+=')</div> <ul> <li><i class="icon-rect top-fifth" id="top-fifth" style="color:',c+=r(i[0]),c+='"></i> <label for="top-fifth">Top Fifth</label><i class="desp">',c+=r(n[0]),c+='</i></li> <li><i class="icon-rect upper-middle" id="upper-middle" style="color:',c+=r(i[1]),c+='"></i> <label for="upper-middle">Upper Middle</label><i class="desp">',c+=r(n[1]),c+='</i></li> <li><i class="icon-rect middle-class" id="middle-class" style="color:',c+=r(i[2]),c+='"></i> <label for="middle-class">Middle</label><i class="desp">',c+=r(n[2]),c+='</i></li> <li><i class="icon-rect lower-middle" id="lower-middle" style="color:',c+=r(i[3]),c+='"></i> <label for="lower-middle">Lower Middle</label><i class="desp">',c+=r(n[3]),c+='</i></li> <li><i class="icon-rect bottom-fifth" id="bottom-fifth" style="color:',c+=r(i[4]),c+='"></i> <label for="bottom-fifth">Bottom Fifth</label><i class="desp">',c+=r(n[4]),c+='</i></li> <li><i class="icon-rect undefined" id="undefined" style="color:',c+=r(i[5]),c+='"></i> <label for="undefined">Undefined</label></li> </ul>',new p(c)}),e("map-popup",function(e){"use strict";var t=this,r=(t.$helpers,t.$escape),o=e.tract_name,a=e.total_pop,i=e.color,n=e.income,c=e.weight,l=e.teen,s=e.premature,d=e.insurance,u=e.hospital,h=e.emergency,m="";return m+='<div class="map-popup"> <div class="title"> <div class="tract-name">',m+=r(o),m+=" (POP. ",m+=r(a),m+=')</div> <div class="class"> <i class="icon-rect top-fifth" style="color:',m+=r(i),m+='"></i> </div> </div> <div class="income">',m+=r(n.name),m+=": <strong>$",m+=r(n.num),m+='</strong></div> <table> <thead> <tr> <th class="indicator">Health Indicator</th> <th class="num">NUM.</th> <th class="pct">PCT.</th> </tr> </thead> <tbody> <tr> <td class="indicator">',m+=r(c.name),m+="</td> <td>",m+=r(c.num),m+="</td> <td>",m+=r(c.pct),m+='</td> </tr> <tr> <td class="indicator">',m+=r(l.name),m+="</td> <td>",m+=r(l.num),m+="</td> <td>",m+=r(l.pct),m+='</td> </tr> <tr> <td class="indicator">',m+=r(s.name),m+="</td> <td>",m+=r(s.num),m+="</td> <td>",m+=r(s.pct),m+='</td> </tr> <tr> <td class="indicator">',m+=r(d.name),m+="</td> <td>",m+=r(d.num),m+="</td> <td>",m+=r(d.pct),m+='</td> </tr> <tr> <td class="indicator">',m+=r(u.name),m+="</td> <td>",m+=r(u.num),m+="</td> <td>MAX: ",m+=r(u.max),m+='</td> </tr> <tr> <td class="indicator">',m+=r(h.name),m+="</td> <td>",m+=r(h.num),m+="</td> <td>MAX: ",m+=r(h.max),m+="</td> </tr> </tbody> </table> </div>",new p(m)})}();var hi={healthData:{},facilityProjection:{},gridMapData:{},cartoMapData:{},map:null,geoLayer:null,popupLayer:null,strokeColor:"#152740",groups:["Top Fifth","Upper Middle","Middle","Lower Middle","Bottom Fifth"],groupColors:["#00C8FF","#4096BF","#806480","#BF3240","#EE3345","#DBE2E6"],reversedGroupColors:["#EE3345","#BF3240","#806480","#4096BF","#00C8FF","#DBE2E6"],tract2grid:[[0,12],[1,13],[2,9],[3,16],[4,20],[5,5],[6,7],[7,4],[8,1],[9,8],[10,17],[11,10],[12,11],[13,3],[14,18],[15,0],[16,2],[17,150],[18,121],[19,149],[20,181],[21,241],[22,365],[23,304],[24,273],[25,242],[26,151],[27,122],[28,182],[29,211],[30,212],[31,335],[32,180],[33,243],[34,213],[35,272],[36,334],[37,784],[38,814],[39,844],[40,785],[41,816],[42,842],[43,782],[44,726],[45,783],[46,870],[47,815],[48,843],[49,754],[50,813],[51,871],[52,296],[53,329],[54,201],[55,268],[56,235],[57,204],[58,139],[59,140],[60,267],[61,199],[62,237],[63,141],[64,171],[65,142],[66,170],[67,203],[68,234],[69,172],[70,227],[71,259],[72,143],[73,50],[74,236],[75,98],[76,111],[77,257],[78,258],[79,226],[80,112],[81,225],[82,194],[83,205],[84,136],[85,202],[86,108],[87,362],[88,198],[89,779],[90,750],[91,607],[92,745],[93,691],[94,636],[95,746],[96,718],[97,719],[98,693],[99,547],[100,775],[101,776],[102,721],[103,110],[104,82],[105,107],[106,79],[107,137],[108,389],[109,357],[110,228],[111,196],[112,262],[113,197],[114,518],[115,609],[116,638],[117,777],[118,778],[119,806],[120,807],[121,808],[122,488],[123,519],[124,106],[125,174],[126,163],[127,164],[128,76],[129,166],[130,113],[131,102],[132,101],[133,83],[134,114],[135,637],[136,694],[137,692],[138,717],[139,579],[140,549],[141,548],[142,667],[143,608],[144,578],[145,747],[146,666],[147,720],[148,723],[149,752],[150,751],[151,748],[152,722],[153,77],[154,78],[155,165],[156,134],[157,173],[158,131],[159,162],[160,99],[161,780],[162,836],[163,749],[164,49],[165,229],[166,260],[167,291],[168,261],[169,232],[170,231],[171,230],[172,292],[173,109],[174,80],[175,81],[176,294],[177,293],[178,263],[179,295],[180,360],[181,361],[182,298],[183,299],[184,75],[185,74],[186,145],[187,144],[188,233],[189,200],[190,169],[191,130],[192,103],[193,104],[194,324],[195,325],[196,135],[197,167],[198,168],[199,138],[200,105],[201,132],[202,100],[203,388],[204,326],[205,327],[206,359],[207,133],[208,328],[209,330],[210,195],[211,264],[212,297],[213,265],[214,290],[215,266],[216,358],[217,585],[218,306],[219,396],[220,552],[221,522],[222,460],[223,492],[224,524],[225,554],[226,491],[227,493],[228,555],[229,525],[230,495],[231,432],[232,430],[233,494],[234,307],[235,274],[236,463],[237,277],[238,428],[239,459],[240,398],[241,337],[242,369],[243,308],[244,338],[245,461],[246,246],[247,584],[248,523],[249,368],[250,400],[251,431],[252,276],[253,370],[254,397],[255,553],[256,305],[257,366],[258,399],[259,462],[260,401],[261,429],[262,245],[263,339],[264,367],[265,336],[266,275],[267,668],[268,724],[269,643],[270,490],[271,581],[272,641],[273,640],[274,725],[275,669],[276,696],[277,642],[278,670],[279,613],[280,671],[281,644],[282,697],[283,615],[284,612],[285,583],[286,753],[287,582],[288,695],[289,614],[290,781],[291,810],[292,148],[293,117],[294,59],[295,118],[296,115],[297,60],[298,146],[299,62],[300,61],[301,87],[302,86],[303,88],[304,116],[305,85],[306,147],[307,686],[308,689],[309,713],[310,742],[311,771],[312,855],[313,827],[314,853],[315,846],[316,820],[317,847],[318,874],[319,872],[320,873],[321,882],[322,905],[323,768],[324,767],[325,856],[326,854],[327,899],[328,877],[329,879],[330,900],[331,880],[332,901],[333,919],[334,902],[335,881],[336,741],[337,826],[338,769],[339,797],[340,850],[341,825],[342,824],[343,796],[344,819],[345,765],[346,794],[347,795],[348,766],[349,683],[350,709],[351,684],[352,573],[353,812],[354,840],[355,811],[356,891],[357,841],[358,866],[359,893],[360,867],[361,839],[362,868],[363,869],[364,892],[365,894],[366,603],[367,602],[368,659],[369,601],[370,688],[371,744],[372,715],[373,714],[374,743],[375,800],[376,770],[377,799],[378,828],[379,829],[380,857],[381,858],[382,772],[383,801],[384,830],[385,773],[386,802],[387,804],[388,774],[389,832],[390,803],[391,711],[392,600],[393,710],[394,631],[395,831],[396,690],[397,658],[398,712],[399,633],[400,661],[401,687],[402,660],[403,632],[404,738],[405,685],[406,572],[407,657],[408,851],[409,878],[410,852],[411,798],[412,792],[413,791],[414,823],[415,739],[416,737],[417,876],[418,822],[419,848],[420,875],[421,845],[422,821],[423,790],[424,849],[425,793],[426,764],[427,818],[428,763],[429,740],[430,708],[431,736],[432,762],[433,351],[434,154],[435,125],[436,126],[437,127],[438,314],[439,217],[440,279],[441,248],[442,155],[443,190],[444,464],[445,186],[446,926],[447,930],[448,928],[449,927],[450,929],[451,931],[452,837],[453,888],[454,889],[455,835],[456,862],[457,911],[458,912],[459,864],[460,187],[461,157],[462,218],[463,545],[464,516],[465,575],[466,485],[467,340],[468,278],[469,313],[470,288],[471,256],[472,348],[473,349],[474,409],[475,378],[476,350],[477,543],[478,310],[479,189],[480,220],[481,286],[482,317],[483,513],[484,512],[485,453],[486,482],[487,438],[488,417],[489,356],[490,387],[491,420],[492,287],[493,223],[494,192],[495,312],[496,158],[497,216],[498,224],[499,247],[500,374],[501,406],[502,316],[503,665],[504,345],[505,376],[506,421],[507,514],[508,515],[509,544],[510,185],[511,215],[512,402],[513,214],[514,184],[515,153],[516,664],[517,716],[518,574],[519,390],[520,424],[521,418],[522,442],[523,441],[524,443],[525,379],[526,411],[527,412],[528,191],[529,159],[530,128],[531,255],[532,193],[533,386],[534,452],[535,353],[536,320],[537,382],[538,383],[539,156],[540,662],[541,663],[542,634],[543,576],[544,577],[545,380],[546,381],[547,321],[548,319],[549,289],[550,323],[551,355],[552,496],[553,434],[554,466],[555,467],[556,436],[557,471],[558,160],[559,152],[560,123],[561,97],[562,129],[563,546],[564,486],[565,517],[566,606],[567,484],[568,635],[569,605],[570,604],[571,391],[572,392],[573,346],[574,439],[575,440],[576,469],[577,309],[578,341],[579,403],[580,435],[581,373],[582,161],[583,124],[584,95],[585,96],[586,94],[587,68],[588,67],[589,454],[590,455],[591,393],[592,423],[593,371],[594,372],[595,342],[596,343],[597,311],[598,404],[599,405],[600,375],[601,407],[602,422],[603,425],[604,487],[605,456],[606,183],[607,244],[608,483],[609,419],[610,408],[611,410],[612,377],[613,347],[614,344],[615,437],[616,282],[617,315],[618,284],[619,285],[620,883],[621,907],[622,451],[623,416],[624,447],[625,449],[626,385],[627,318],[628,280],[629,249],[630,281],[631,250],[632,470],[633,468],[634,465],[635,188],[636,860],[637,910],[638,859],[639,884],[640,805],[641,833],[642,925],[643,908],[644,861],[645,885],[646,354],[647,322],[648,413],[649,444],[650,384],[651,414],[652,415],[653,352],[654,219],[655,283],[656,251],[657,253],[658,252],[659,254],[660,221],[661,222],[662,433],[663,834],[664,886],[665,909],[666,863],[667,887],[668,838],[669,809],[670,865],[671,913],[672,890],[673,427],[674,611],[675,639],[676,520],[677,580],[678,610],[679,550],[680,458],[681,489],[682,521],[683,551],[684,303],[685,71],[686,70],[687,36],[688,44],[689,35],[690,64],[691,210],[692,119],[693,92],[694,41],[695,32],[696,90],[697,179],[698,120],[699,91],[700,66],[701,65],[702,45],[703,43],[704,37],[705,28],[706,46],[707,19],[708,73],[709,69],[710,42],[711,33],[712,89],[713,63],[714,23],[715,93],[716,24],[717,15],[718,47],[719,26],[720,27],[721,72],[722,34],[723,25],[724,38],[725,559],[726,728],[727,698],[728,473],[729,595],[730,624],[731,565],[732,528],[733,534],[734,561],[735,533],[736,645],[737,594],[738,526],[739,672],[740,760],[741,788],[742,674],[743,564],[744,558],[745,618],[746,557],[747,587],[748,619],[749,678],[750,650],[751,735],[752,681],[753,566],[754,535],[755,504],[756,649],[757,755],[758,620],[759,503],[760,498],[761,531],[762,500],[763,499],[764,537],[765,480],[766,706],[767,560],[768,475],[769,507],[770,477],[771,501],[772,532],[773,472],[774,527],[775,497],[776,529],[777,648],[778,647],[779,727],[780,556],[781,586],[782,616],[783,817],[784,758],[785,651],[786,646],[787,673],[788,702],[789,761],[790,703],[791,622],[792,653],[793,677],[794,629],[795,538],[796,510],[797,675],[798,617],[799,699],[800,621],[801,592],[802,733],[803,541],[804,448],[805,506],[806,446],[807,789],[808,787],[809,590],[810,591],[811,563],[812,562],[813,623],[814,679],[815,700],[816,593],[817,654],[818,734],[819,630],[820,567],[821,568],[822,680],[823,652],[824,704],[825,625],[826,676],[827,502],[828,570],[829,571],[830,505],[831,474],[832,445],[833,569],[834,589],[835,508],[836,732],[837,756],[838,530],[839,628],[840,481],[841,655],[842,656],[843,627],[844,707],[845,682],[846,626],[847,596],[848,598],[849,705],[850,757],[851,701],[852,729],[853,759],[854,786],[855,597],[856,542],[857,511],[858,450],[859,599],[860,540],[861,478],[862,476],[863,509],[864,539],[865,479],[866,730],[867,731],[868,588],[869,536],[870,269],[871,300],[872,208],[873,333],[874,332],[875,239],[876,394],[877,426],[878,331],[879,270],[880,206],[881,175],[882,177],[883,176],[884,240],[885,915],[886,897],[887,896],[888,895],[889,914],[890,898],[891,916],[892,917],[893,918],[894,932],[895,933],[896,934],[897,942],[898,943],[899,935],[900,238],[901,207],[902,302],[903,271],[904,363],[905,364],[906,178],[907,301],[908,457],[909,395],[910,209],[911,939],[912,922],[913,945],[914,941],[915,904],[916,906],[917,947],[918,938],[919,936],[920,944],[921,937],[922,920],[923,946],[924,940],[925,924],[926,903],[927,923],[928,921],[929,57],[930,39],[931,48],[932,40],[933,51],[934,55],[935,84],[936,22],[937,30],[938,21],[939,29],[940,53],[941,54],[942,14],[943,56],[944,58],[945,31],[946,52],[947,6]],indicatorIds:["income","weight","teen","premature","insurance","hospital","emergency"],indicatorCodes:["Median_household_income","LowBirthw_2500_grams_2008_2012","BirthsTeens_15_19_2008_2012","PreBirths_37wks_Gest_2008_2012","Pop_wNo_Health_Ins","Hospital_Amount","Emergency_Amount"],indicatorNames:["Median Household Income","Low Birthweight Births","Teen Pregnancy","Premature Births","Population without Health Insurance","Hospital Community Facilities","Emergency Medical Service Community Facilities"],chartData:{matrixObject:[]},currentIndicatorId:"income",currentIndicatorCode:"Median_household_income",currentIndicatorName:"Median Household Income",currentMapType:"grid",currentGroupThreshold:{},currentGroupNames:[],currentTract:{},currentColors:[],currentColor:"",currentRange:null,isLocked:!1,lockedTractId:null,lockedLayer:null,slider:null,init:function(){var e=this;$(document).ajaxStart(function(){}).ajaxComplete(function(){$("#page-loader").fadeOut()});var t={};$.each($(".selectbox"),function(){var e=$(this);t[e.attr("id")]=e.selectize({create:!0})}),e.currentColors=e.groupColors,$.when($.getJSON("data/health_inside_atlanta.json"),$.getJSON("data/grid.geojson"),$.getJSON("data/facility_projection.json")).done(function(t,r,o){e.healthData=t[0],e.gridMapData=r[0],e.facilityProjection=o[0],e.currentGroupThreshold=e.process.getGroupThreshold(e.currentIndicatorCode),e.currentGroupNames=e.process.getGroupNames(e.currentGroupThreshold),e.chart.createAllBoxplots(),e.geomap.createGridMap(),e.createRangeSlider()}),e.addEventListener()},addEventListener:function(){var e=hi;$("#indicator-select").on("change",function(t){t.preventDefault(),e.geomap.startLoading(),e.chart.startLoading();var r=$(this).val();e.currentIndicatorId=r,e.currentIndicatorCode=e.indicatorCodes[e.indicatorIds.indexOf(r)],e.currentIndicatorName=e.indicatorNames[e.indicatorIds.indexOf(r)],e.currentGroupThreshold=e.process.getGroupThreshold(e.currentIndicatorCode),e.currentGroupNames=e.process.getGroupNames(e.currentGroupThreshold),"income"===r?e.currentColors=e.groupColors:e.currentColors=e.reversedGroupColors,e.updateRangeSlider(),window.setTimeout(function(){e.chart.updateAllBoxplots(),e.geomap.updateMap()},5)}),$("#map-type-select").on("change",function(t){t.preventDefault(),e.geomap.startLoading();var r=$(this).val();e.currentMapType=r,window.setTimeout(function(){"grid"===r?e.geomap.createGridMap():e.geomap.createCartoMap()},5)})},createRangeSlider:function(){var e=hi,t=!1,r=e.currentGroupThreshold,o=e.process.getUnit();$(".range-slider h3").html(e.currentIndicatorName+" ("+o+")"),$("#range-slider").ionRangeSlider({type:"double",min:r.minVal,max:r.maxVal,from:r.minVal,to:r.maxVal,hide_min_max:!0,hide_from_to:!1,grid:!0,grid_num:5,onChange:function(){var r=null!==e.slider;return!t&&(t=!0,e.isLocked&&(e.lockedTractId=null,e.geomap.resetLocker(),e.chart.resetLocker()),r&&(e.geomap.startLoading(),e.chart.startLoading()),void 0)},onUpdate:function(t){e.currentRange={min:t.from,max:t.to}},onFinish:function(r){var o=null!==e.slider;e.currentRange={min:r.from,max:r.to},o&&(e.chart.updateAllBoxplots(),e.geomap.updateMap(),e.geomap.stopLoading(),e.chart.stopLoading()),t=!1}}),e.slider=$("#range-slider").data("ionRangeSlider")},updateRangeSlider:function(){var e=hi,t=e.currentGroupThreshold,r=e.process.getUnit();$(".range-slider h3").html(e.currentIndicatorName+" ("+r+")"),e.slider.update({min:t.minVal,max:t.maxVal,from:t.minVal,to:t.maxVal}),"income"===e.currentIndicatorId?$(".irs-line").css("background-image","url(./assets/img/slider_bg.png)"):$(".irs-line").css("background-image","url(./assets/img/slider_reversed_bg.png)")}};hi.geomap={createMap:function(){var e=hi,t="mapbox://styles/xiaoxuezhang/ciy0tczyo005k2rqjn4oncbhp";L.mapbox.accessToken="pk.eyJ1IjoieGlhb3h1ZXpoYW5nIiwiYSI6ImNpc2dzcWN5eTAwMGoyeW1zcTI5OTQ3YTgifQ.DCqBTREvXqcE1iEeVNwoYQ";var r=L.mapbox.map("map").setView([33.8356178,-84.3984737],9);L.mapbox.styleLayer(t).addTo(r);r.scrollWheelZoom.disable(),e.map=r},createGridMap:function(){var e=hi;null===e.map&&e.geomap.createMap(),null!==e.geoLayer&&e.geoLayer.clearLayers(),e.geomap.createGeoLayer(),e.geomap.stopLoading()},createCartoMap:function(){var e=hi;null===e.map&&e.geomap.createMap(),$.isEmptyObject(e.cartoMapData)?$.when($.getJSON("data/boundaries.geojson")).done(function(t){e.cartoMapData=t,null!==e.geoLayer&&e.geoLayer.clearLayers(),e.geomap.createGeoLayer(),e.geomap.stopLoading()}):(null!==e.geoLayer&&e.geoLayer.clearLayers(),e.geomap.createGeoLayer(),e.geomap.stopLoading())},updateMap:function(){var e=hi;null!==e.geoLayer&&e.geoLayer.clearLayers(),e.geomap.createGeoLayer(),e.geomap.stopLoading()},createGeoLayer:function(){function e(e,a){a.on({mouseover:t,mouseout:r,click:o})}function t(e){var t=e.target;return(!t.feature.properties.disabled||1!=t.feature.properties.disabled)&&(a.geomap.setHighlight(t),void a.chart.setHighlight(".tract_"+t.feature.properties.OBJECTID))}function r(e){var t=e.target;return(!t.feature.properties.disabled||1!=t.feature.properties.disabled)&&(a.geomap.resetHighlight(t),void a.chart.resetHighlight(".tract_"+t.feature.properties.OBJECTID))}function o(e){function t(){a.lockedTractId=r.feature.properties.OBJECTID,a.geomap.setLocker(r),a.chart.setLocker(".tract_"+a.lockedTractId)}var r=e.target;return(!r.feature.properties.disabled||1!=r.feature.properties.disabled)&&void(a.isLocked?a.lockedTractId===r.feature.properties.OBJECTID?(a.lockedTractId=null,a.geomap.resetLocker(),a.chart.resetLocker()):(a.geomap.resetLocker(),a.chart.resetLocker(),t()):t())}var a=hi,i="carto"===a.currentMapType?a.cartoMapData:a.gridMapData,n=a.map,c=a.currentIndicatorCode,l=a.process.transformToObject();i.features.forEach(function(e,t){var r=l[t];e.properties=a.healthData[r];var o=e.properties[c]-0,i=a.process.getGroupIndex(o),n=a.currentColors[i],s=!1;e.properties.disabled=0;var p=0,d=0;null!==a.currentRange&&(p=a.currentRange.min,d=a.currentRange.max,(o<p||o>d)&&(s=!0,e.properties.disabled=1)),e.properties.style={fillColor:n,fillOpacity:1,color:a.strokeColor,weight:2,opacity:0},s&&(e.properties.style={fillColor:n,fillOpacity:0,color:a.strokeColor,weight:2,opacity:0})}),a.geoLayer=L.geoJson(i,{style:{smoothFactor:0},onEachFeature:e}).eachLayer(function(e){e.setStyle(e.feature.properties.style)}).addTo(n)},createLegend:function(){function e(e){return numeral(e).format("0a")}var t=hi,r=t.currentGroupThreshold,o=t.process.getUnit(),a=[e(r.p80)+" - "+e(r.maxVal),e(r.p60)+" - "+e(r.p80),e(r.p40)+" - "+e(r.p60),e(r.p20)+" - "+e(r.p40),e(r.minVal)+" - "+e(r.p20)],i={currentIndicatorName:t.currentIndicatorName,colors:t.currentColors,unit:o,ranges:a},n=template("legend",i);$("#legend").html(n)},openFixedPopup:function(e){function t(e){return numeral(e).format("0.00%")}var r=hi,o=e.feature.properties,a=$("#map-popup"),i={tract_id:o.OBJECTID,tract_name:"TRACT "+o.NAME10,total_pop:o.Total_Population,total_birth_pop:o.Total_Births__2008_2012,color:r.isLocked?r.currentColor:e.options.fillColor,income:{name:r.indicatorNames[0],num:o.Median_household_income},weight:{name:r.indicatorNames[1],num:o.LowBirthw_2500_grams_2008_2012,pct:t(o.LowBirthw_2500_grams_2008_2012/o.Total_Births__2008_2012)},teen:{name:r.indicatorNames[2],num:o.BirthsTeens_15_19_2008_2012,pct:t(o.BirthsTeens_15_19_2008_2012/o.Total_Births__2008_2012)},premature:{name:r.indicatorNames[3],num:o.PreBirths_37wks_Gest_2008_2012,pct:t(o.PreBirths_37wks_Gest_2008_2012/o.Total_Births__2008_2012)},insurance:{name:r.indicatorNames[4],num:o.Pop_wNo_Health_Ins,pct:t(o.Pop_wNo_Health_Ins/o.Total_Population)},hospital:{name:r.indicatorNames[5],num:o.Hospital_Amount,max:3},emergency:{name:r.indicatorNames[6],num:o.Emergency_Amount,max:5}},n=template("map-popup",i);a.find(".content").html(n).end().show(),a.off(),a.on("click",".close",function(e){e.preventDefault(),r.geomap.resetLocker(),r.chart.resetLocker()}),r.currentTract=i},closeFixedPopup:function(){var e=hi;if(!e.popupLayer){var t=$("#map-popup");t.hide(),e.popupLayer=null}},createGrid:function(){var e=[-85.33823447054434,33.178626321468165,-83.50593195157465,34.51410261996982],t=2.8,r="miles";grid=turf.squareGrid(e,t,r),L.mapbox.featureLayer().setGeoJSON(grid).addTo(map)},setHighlight:function(e){var t=hi;e.setStyle({opacity:1}),L.Browser.ie||L.Browser.opera||L.Browser.edge||e.bringToFront(),t.isLocked||t.geomap.openFixedPopup(e)},resetHighlight:function(e){var t=hi;e.setStyle({opacity:0}),t.isLocked||t.geomap.closeFixedPopup()},setLocker:function(e){var t=hi;t.currentColor=e.options.fillColor,t.lockedLayer=e,t.isLocked=!0,t.lockedLayer.setStyle({fillColor:t.strokeColor}),t.geomap.openFixedPopup(e)},resetLocker:function(){var e=hi;e.lockedLayer.setStyle({fillColor:e.currentColor}),e.geomap.closeFixedPopup(),e.lockedLayer=null,e.isLocked=!1},startLoading:function(){var e=".map-loading-overlay",t=$("#map");$(e).css({width:t.width(),height:t.height(),display:"table"})},stopLoading:function(){var e=".map-loading-overlay";$(e).fadeOut(150)}},d3.selection.prototype.moveToFront=function(){return this.each(function(){this.parentNode.appendChild(this)})},d3.selection.prototype.moveToBack=function(){return this.each(function(){var e=this.parentNode.firstChild;e&&this.parentNode.insertBefore(this,e)})},hi.chart={createBoxplot:function(e){function t(e,t){var l=[],s=1/0,u=1/0,h=1/0,m=0,g=-(1/0),L=0,T=-(1/0),b=-(1/0),I=[],C=[];$.each(e,function(e,t){"pct"===c.type?I.push(t.pct):I.push(t.value)}),C=I.sort(d3.ascending),s=C[0],h=d3.quantile(C,.25),m=d3.quantile(C,.5),g=d3.quantile(C,.75),L=g-h,b=C[C.length-1];for(var x=_.append("g").attr("height",f+v).attr("transform","translate(0, "+(f+v)*t+")"),w=0;w<C.length&&u==1/0;)C[w]>=h-1.5*L?u=C[w]:l.push(C[w]),w++;for(w=C.length-1;w>=0&&T==-(1/0);)C[w]<=g+1.5*L?T=C[w]:l.push(C[w]),w--;x.selectAll("circle").data(e).enter().append("circle").attr("r",d).attr("class",function(e){var t="tract_"+e.tractId;e.disabled=0;var r=0,o=0;return null!==n.currentRange?(r=n.currentRange.min,o=n.currentRange.max,e.rangeValue<r||e.rangeValue>o?(e.disabled=1,t+" disabled"):t):t}).attr("cy",function(e){return i()}).attr("cx",function(e){var t="num"===c.type?e.value:e.pct;return k(t)}).attr("fill",function(e){var r="num"===c.type?e.value:e.pct;return r<u||r>T?e.color="#F7BB4D":e.color=p[t],e.color}).on("mouseover",r).on("mouseout",o).on("click",a).append("title"),x.append("line").attr("class","whisker").attr("x1",k(u)).attr("x2",k(h)).attr("stroke",n.strokeColor).attr("y1",y).attr("y2",y),x.append("line").attr("class","whisker").attr("x1",k(g)).attr("x2",k(T)).attr("stroke",n.strokeColor).attr("y1",y).attr("y2",y),x.append("rect").attr("class","box").attr("stroke",n.strokeColor).attr("fill","none").attr("x",k(h)).attr("y",y-f/2).attr("width",k(L)).attr("height",f),x.append("line").attr("class","median").attr("stroke",n.strokeColor).attr("stroke-width",2).attr("x1",k(m)).attr("x2",k(m)).attr("y1",y-f/2).attr("y2",y+f/2)}function r(e){return 1!=e.disabled&&(n.geoLayer.eachLayer(function(t){if(t.feature.properties.OBJECTID==e.tractId)return n.geomap.setHighlight(t),!1}),void n.chart.setHighlight(this,e))}function o(e){return 1!=e.disabled&&(n.geoLayer.eachLayer(function(t){if(t.feature.properties.OBJECTID==e.tractId)return n.geomap.resetHighlight(t),!1}),void n.chart.resetHighlight(this))}function a(e){function t(){n.lockedTractId=e.tractId,n.geoLayer.eachLayer(function(e){if(e.feature.properties.OBJECTID==n.lockedTractId)return n.geomap.setLocker(e),!1}),n.chart.setLocker(r)}var r=this;n.isLocked?n.lockedTractId===e.tractId?(n.lockedTractId=null,n.geomap.resetLocker(),n.chart.resetLocker()):(n.geomap.resetLocker(),n.chart.resetLocker(),t()):t()}function i(){if(0==Math.round(1*Math.random()))var e=-f/3;else var e=f/3;return y+Math.floor(Math.random()*e+1)}var n=hi,c=$.extend({selector:"#chart-low-weight",groups:n.groups,type:"num",width:480,height:240,margin:{top:20,right:8,bottom:20,left:9},colors:n.currentColors,data:[],matrixObject:[]},e),l=c.matrixObject,s=l.length,p=c.colors,d=2.5,u=0,h=c.margin,m=c.width-h.left-h.right,g=c.height-h.top-h.bottom,f=g/s/2,v=f,y=f/2;$(c.selector).html("");var _=d3.select(c.selector).append("svg").attr("width",m+h.left+h.right).attr("height",g+h.top+h.bottom).append("g").attr("transform","translate("+h.left+","+h.top+")"),L=[];$.each(l,function(e,t){$.each(t,function(e,t){"pct"===c.type?L.push(t.pct):L.push(t.value)})}),L=L.sort(d3.ascending),u=d3.max(L);var k=d3.scale.linear().range([0,m]);k.domain([0,1*u]);var T=d3.svg.axis().scale(k).orient("bottom");"pct"===c.type&&T.tickFormat(d3.format("%")),_.append("g").attr("class","axis").attr("transform","translate(0, "+g+")").call(T);var b=$(c.selector).closest(".chart-component");0===b.find(".tooltip").length&&b.append('<div class="tooltip" style="display: none"></div>'),$.each(l,function(e,r){t(r,e)})},createAllBoxplots:function(){var e=hi,t={},r=e.groups.length;$.each(e.indicatorIds,function(e,o){t[o]=[];for(var a=0;a<r;a++)t[o][a]=[]}),$.each(e.healthData,function(o,a){var i=a[e.currentIndicatorCode],n=e.process.getGroupIndex(i),c=a.OBJECTID;$.each(e.indicatorCodes,function(o,i){var l=e.indicatorIds[o],s=0,p=0,d=0,u=0;if("emergency"===l||"hospital"===l){var h=e.facilityProjection[l],m=h[c]&&h[c].length?h[c].length:0;s=m}else s=a[i];p=s-0,0===d&&(d=a.Total_Births__2008_2012-0),u="weight"===l||"teen"===l||"premature"===l?0===d?0:numeral(p/d).format("0.000"):"insurance"===l?(a.Pct_Pop_wNo_Health_Ins-0)/100:0,u=numeral(u).value();for(var g=0;g<r;g++)n===g&&""!==s&&t[l][g].push({value:p,tractId:c,chartId:l,pct:u,rangeValue:a[e.currentIndicatorCode]})})}),e.chartData.matrixObject=t,$.each(e.indicatorIds,function(r,o){e.chart.createBoxplot({selector:"#chart-"+o,matrixObject:t[o]})}),e.chart.createChartLegend(),e.chart.addEventListener()},updateAllBoxplots:function(){var e=hi;$.each(e.indicatorIds,function(e,t){$("#chart-"+t).html("")}),$(".tooltip").remove(),e.chart.createAllBoxplots(),e.chart.stopLoading()},createChartLegend:function(){var e=hi,t=[];$.each(e.chartData.matrixObject[e.currentIndicatorId],function(e,r){t.push(r.length)}),$("#chart-legend-container").html(template("chart-legend",{data:t,colors:e.currentColors})),$("#chart-legend").makeFixed({container:"#panel",defTopPos:47})},setHighlight:function(e,t){var r=hi,t=t||{},e="string"==typeof e?e:"."+e.getAttribute("class").replace(" is-locked",""),o=d3.selectAll(e+":not(.is-locked)");o.attr("r",5).style({stroke:r.strokeColor,"stroke-width":2,fill:t.color,"stroke-opacity":1}).moveToFront(),r.isLocked||(r.chart.closeTooltip(),$.each($(e),function(e,t){var o=$(t).closest(".chart-component");r.chart.updateTooltip(o,"."+$(t).attr("class"))}))},resetHighlight:function(e){var t=hi;t.isLocked||t.chart.closeTooltip();var e="string"==typeof e?e:"."+e.getAttribute("class").replace(" is-locked",""),r=d3.selectAll(e+":not(.is-locked)");r.attr("r",2.5).style({"stroke-opacity":0}).moveToBack()},setLocker:function(e){var t=hi,e="string"==typeof e?e:"."+e.getAttribute("class").replace(" is-locked","");t.chart.setLockedCircle(e),$.each($(e),function(e){var r=$(".chart-component").eq(e);t.chart.updateTooltip(r,".tract_"+t.lockedTractId)})},resetLocker:function(){var e=hi;e.chart.resetLockedCircle(".is-locked"),e.chart.closeTooltip()},addEventListener:function(){var e=hi;$(".button-group").on("click",".button:not(.active)",function(){var t=$(this),r=t.data("chartId"),o=t.data("type"),a="#chart-component-"+r,i=t.closest(a);if(e.chart.createBoxplot({selector:"#chart-"+r,type:o,matrixObject:e.chartData.matrixObject[r]}),i.find(".button").removeClass("active"),t.addClass("active"),e.isLocked){var n=".tract_"+e.lockedTractId;e.chart.setLockedCircle(a+" "+n),e.chart.updateTooltip(a,n)}})},updateTooltip:function(e,t){var r=hi,o=$("#panel"),a=parseInt(o.css("left")),i=$(e).find(t)[0],n=$(e).closest(".chart-component").find(".tooltip");if(d3.select(i).data()[0]){var c=d3.select(i).data()[0].chartId;n.html(template("chart-popup",{data:r.currentTract,chartId:c}));var l=$(i).offset().left-a-n.width()/2-5,s=$(i).offset().top+$(i).scrollTop()+o.scrollTop()-parseInt(o.css("top"))-n.height()-30;n.css("left",(l<0?0:l)+"px").css("top",s+"px").show()}},closeTooltip:function(){$(".tooltip").hide()},setLockedCircle:function(e){var t=hi,r=d3.selectAll(e);r.attr("r",5).style({stroke:t.strokeColor,"stroke-width":2,fill:t.strokeColor,"stroke-opacity":1
}).classed("is-locked",!0).moveToFront()},resetLockedCircle:function(e){var t=hi,r=d3.selectAll(e);r.attr("r",2.5).style({"stroke-opacity":0,fill:t.currentColor}).classed("is-locked",!1).moveToBack()},startLoading:function(){var e=".chart-loading-overlay";$(e).css("display","table")},stopLoading:function(){var e=".chart-loading-overlay";$(e).fadeOut(150)}},hi.process={getFacilityCount:function(){var e={emergency:{},hospital:{}};$.when($.getJSON("data/emergency_service_facilities.json"),$.getJSON("data/hospital_community_facilities.json"),$.getJSON("data/boundaries.geojson")).done(function(t,r,o){for(var a=t[0],i=r[0],n=o[0],c=a.length>i.length?a.length:i.length,l=0;l<c;l++){var s=a[l]?{type:"Feature",properties:{},geometry:{type:"Point",coordinates:[a[l].X,a[l].Y]}}:{},p=i[l]?{type:"Feature",properties:{},geometry:{type:"Point",coordinates:[i[l].X,i[l].Y]}}:{};$.each(n.features,function(t,r){var o={type:"Feature",properties:{},geometry:r.geometry};return s.geometry&&turf.inside(s,o)?(e.emergency[r.properties.OBJECTID]||(e.emergency[r.properties.OBJECTID]=[]),void e.emergency[r.properties.OBJECTID].push(a[l].OBJECTID)):p.geometry&&turf.inside(p,o)?(e.hospital[r.properties.OBJECTID]||(e.hospital[r.properties.OBJECTID]=[]),void e.hospital[r.properties.OBJECTID].push(i[l].OBJECTID)):void 0})}console.log(e)})},getProjection:function(){function e(e,i){$.each(e.features,function(e,o){var a={type:"Feature",properties:{},geometry:o.geometry},i=turf.centroid(a);t.push(i),r.push(i.geometry.coordinates)}),t=turf.featurecollection(t),$.each(i.features,function(e,t){var r={type:"Feature",properties:{},geometry:t.geometry},i=turf.centroid(r);o.push(i),a.push(i.geometry.coordinates)}),o=turf.featurecollection(o);for(var n=[],c=0;c<=r.length-1;c++){console.log(c),n[c]=[];for(var l=0;l<=a.length-1;l++)n[c][l]=(r[c][0]-a[l][0])*(r[c][0]-a[l][0])+(r[c][1]-a[l][1])*(r[c][1]-a[l][1])}var s=new Munkres,p=s.compute(n);return console.log(p),p}var t=[],r=[],o=[],a=[];$.when($.getJSON("data/boundaries.geojson"),$.getJSON("data/grid.geojson")).done(function(t,r){e(t[0],r[0])})},transformToObject:function(){var e=hi,t=e.tract2grid,r={};return $.each(t,function(e,t){r[t[1]]=t[0]}),r},getGroupThreshold:function(e){function t(e){return Math.floor(100*e)/100}var r=hi,o=$.merge([],r.healthData).sort(function(t,r){return d3.ascending(t[e]-0,r[e]-0)}),a=0,i=0,n=0,c=0,l=0,s=0;return $.each(o,function(){var t=o[0];return""!==t[e]?(a=t[e]-0,!1):void o.shift()}),i=o[o.length-1][e]-0,n=.2*(i-a),c=.4*(i-a),l=.6*(i-a),s=.8*(i-a),{minVal:t(a),maxVal:t(i),p20:t(n),p40:t(c),p60:t(l),p80:t(s)}},getGroupIndex:function(e,t,r){var o=hi,r=r||o.currentIndicatorCode,t=t||o.process.getGroupThreshold(r),a=0;return a=t.p80<e&&e<=t.maxVal?0:t.p60<e&&e<=t.p80?1:t.p40<e&&e<=t.p60?2:t.p20<e&&e<=t.p40?3:t.minVal<e&&e<=t.p20?4:5},getGroupNames:function(e){var e=e;return[e.minVal+" - "+e.p20,e.p20+" - "+e.p40,e.p40+" - "+e.p60,e.p60+" - "+e.p80,e.p80+" - "+e.maxVal]},getUnit:function(){var e=hi,t="",r=e.currentIndicatorId;switch(r){case"income":t="Dollars";break;case"weight":case"teen":case"premature":case"insurance":t="Persons";break;case"hospital":case"emergency":t="Facilities";break;default:t=""}return t}},function(){hi.init()}();