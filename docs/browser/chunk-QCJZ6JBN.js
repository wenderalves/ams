import{Aa as w,Ba as o,Ca as n,Da as r,Ea as P,Fa as c,Ga as T,Ja as M,Ka as A,T as f,U as g,Ya as E,ab as S,db as I,eb as L,fb as _,ha as b,hb as D,ia as x,ib as F,ja as t,kb as z,lb as d,mb as p,nb as N,pa as m,ra as v,wa as a,xa as y,ya as C,za as h}from"./chunk-CDNTTA5D.js";function O(i,l){if(i&1&&r(0,"lucide-angular",5),i&2){let e=P();a("img",e.icon)}}var u=class i{title;describe="";icon;constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["acordion"]],inputs:{title:"title",describe:"describe",icon:"icon"},decls:12,vars:3,consts:[[1,"flex","flex-col","w-full","gap-4"],[1,"w-full"],[1,"group"],[1,"flex","justify-between","bg-white","p-4","items-center","font-medium","cursor-pointer","list-none","text-gray-800"],[1,"flex","items-center","gap-2"],[1,"w-8",3,"img"],[1,"flex-1"],[1,"transition","group-open:rotate-180"],["fill","none","height","24","shape-rendering","geometricPrecision","stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","1.5","viewBox","0 0 24 24","width","24"],["d","M6 9l6 6 6-6"],[1,"p-4","bg-white","text-neutral-600","group-open:animate-fadeIn",3,"innerHTML"]],template:function(e,s){e&1&&(o(0,"div",0)(1,"div",1)(2,"details",2)(3,"summary",3)(4,"div",4),v(5,O,1,1,"lucide-angular",5),o(6,"span",6),c(7),n()(),o(8,"span",7),f(),o(9,"svg",8),r(10,"path",9),n()()(),g(),r(11,"p",10),n()()()),e&2&&(t(5),y(s.icon?5:-1),t(2),T(s.title),t(4),a("innerHTML",s.describe,b))},dependencies:[E,p,d],encapsulation:2})};function U(i,l){if(i&1&&r(0,"acordion",6),i&2){let e=l.$implicit;a("icon",e.icon)("title",e.title)("describe",e.describe)}}var R=class i{FileText=_;constructor(){}regras=[{title:"Piscina",icon:z,describe:`
        <ol class="list-decimal list-inside">
          <li>Proibido nadar de roupa normal.</li>
          <li>Proibido pular ou fazer acrobacias.</li>
          <li>Proibido crian\xE7as menores de 12 anos permanecer sem o acompanhamento de um respons\xE1vel maior.</li>
        </ol>
      `},{title:"Garagens",icon:I,describe:`
        <ol class="list-decimal list-inside">
          <li>O condom\xEDnio n\xE3o se responsabiliza por danos ou roubos.</li>
          <li>\xC9 proibido usar a garagem para consertos de ve\xEDculos, exceto em emerg\xEAncias.</li>
          <li>\xC9 proibido estacionar na garagem de outro morador sem autoriza\xE7\xE3o.</li>
        </ol>
      `},{title:"Sal\xE3o de Festas",icon:D,describe:`
        <ol class="list-decimal list-inside">
          <li>Reservas devem ser feitas com anteced\xEAncia.</li>
          <li>O sal\xE3o deve ser entregue limpo e organizado ap\xF3s o uso.</li>
          <li>\xC9 proibido usar o sal\xE3o para fins comerciais ou pol\xEDticos.</li>
        </ol>
      `},{title:"Playground",icon:S,describe:`
        <ol class="list-decimal list-inside">
          <li>Hor\xE1rio de uso: 8h \xE0s 22h.</li>
          <li>Idade m\xE1xima permitida: 11 anos.</li>
          <li>Crian\xE7as devem estar acompanhadas por um respons\xE1vel.</li>
        </ol>
      `},{title:"Academia ao Ar Livre",icon:L,describe:`
        <ol class="list-decimal list-inside">
          <li>Hor\xE1rio de uso: 6h \xE0s 24h.</li>
          <li>Uso permitido apenas para maiores de 12 anos.</li>
          <li>Visitantes n\xE3o podem usar a academia.</li>
        </ol>
      `},{title:"Espa\xE7o Pet",icon:F,describe:`
        <ol class="list-decimal list-inside">
          <li>Uso exclusivo para animais dos moradores.</li>
          <li>\xC9 proibido levar filhotes n\xE3o vacinados.</li>
          <li>O dono deve recolher os excrementos do animal.</li>
        </ol>
      `}];static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["regimento"]],decls:12,vars:4,consts:[[1,"flex","flex-col","items-center","min-w-screen","gap-4","p-4"],[1,"text-md","font-bold","text-gray-800"],[1,"w-full","flex","flex-col","items-center","justify-start","gap-2"],["target","_blank",1,"flex","gap-2","text-center","p-2","border-2","border-gray-500","text-gray-500",3,"href"],[1,"w-8",3,"img"],[1,"font-medium"],[1,"w-full",3,"icon","title","describe"]],template:function(e,s){e&1&&(o(0,"div",0)(1,"h2",1),c(2," REGIMENTO INTERNO "),n(),o(3,"section",2)(4,"a",3),M(5,"baseUrl"),r(6,"lucide-angular",4),o(7,"span",5),c(8,"Fazer Download do regimento."),n()()(),o(9,"section",2),h(10,U,1,3,"acordion",6,C),n()()),e&2&&(t(4),a("href",A(5,2,"/documentos/regimento.pdf"),x),t(2),a("img",s.FileText),t(4),w(s.regras))},dependencies:[u,p,d,N],encapsulation:2})};export{R as RegimentoComponent};
