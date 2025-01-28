import{Aa as h,Ba as o,Ca as t,Da as a,Ea as w,Fa as c,Ga as P,T as f,U as g,Wa as T,_a as M,bb as A,cb as E,db as S,fb as I,gb as L,ha as b,ib as D,ja as n,jb as d,kb as p,pa as m,ra as x,wa as s,xa as v,ya as C,za as y}from"./chunk-6P3VO6M2.js";function z(i,r){if(i&1&&a(0,"lucide-angular",5),i&2){let e=w();s("img",e.icon)}}var u=class i{title;describe="";icon;constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["acordion"]],inputs:{title:"title",describe:"describe",icon:"icon"},decls:12,vars:3,consts:[[1,"flex","flex-col","w-full","gap-4"],[1,"w-full"],[1,"group"],[1,"flex","justify-between","bg-white","p-4","items-center","font-medium","cursor-pointer","list-none","text-gray-800"],[1,"flex","items-center","gap-2"],[1,"w-8",3,"img"],[1,"flex-1"],[1,"transition","group-open:rotate-180"],["fill","none","height","24","shape-rendering","geometricPrecision","stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","1.5","viewBox","0 0 24 24","width","24"],["d","M6 9l6 6 6-6"],[1,"p-4","bg-white","text-neutral-600","group-open:animate-fadeIn",3,"innerHTML"]],template:function(e,l){e&1&&(o(0,"div",0)(1,"div",1)(2,"details",2)(3,"summary",3)(4,"div",4),x(5,z,1,1,"lucide-angular",5),o(6,"span",6),c(7),t()(),o(8,"span",7),f(),o(9,"svg",8),a(10,"path",9),t()()(),g(),a(11,"p",10),t()()()),e&2&&(n(5),v(l.icon?5:-1),n(2),P(l.title),n(4),s("innerHTML",l.describe,b))},dependencies:[T,p,d],encapsulation:2})};function H(i,r){if(i&1&&a(0,"acordion",6),i&2){let e=r.$implicit;s("icon",e.icon)("title",e.title)("describe",e.describe)}}var F=class i{FileText=S;constructor(){}regras=[{title:"Piscina",icon:D,describe:`
        <ol class="list-decimal list-inside">
          <li>Proibido nadar de roupa normal.</li>
          <li>Proibido pular ou fazer acrobacias.</li>
          <li>Proibido crian\xE7as menores de 12 anos permanecer sem o acompanhamento de um respons\xE1vel maior.</li>
        </ol>
      `},{title:"Garagens",icon:A,describe:`
        <ol class="list-decimal list-inside">
          <li>O condom\xEDnio n\xE3o se responsabiliza por danos ou roubos.</li>
          <li>\xC9 proibido usar a garagem para consertos de ve\xEDculos, exceto em emerg\xEAncias.</li>
          <li>\xC9 proibido estacionar na garagem de outro morador sem autoriza\xE7\xE3o.</li>
        </ol>
      `},{title:"Sal\xE3o de Festas",icon:I,describe:`
        <ol class="list-decimal list-inside">
          <li>Reservas devem ser feitas com anteced\xEAncia.</li>
          <li>O sal\xE3o deve ser entregue limpo e organizado ap\xF3s o uso.</li>
          <li>\xC9 proibido usar o sal\xE3o para fins comerciais ou pol\xEDticos.</li>
        </ol>
      `},{title:"Playground",icon:M,describe:`
        <ol class="list-decimal list-inside">
          <li>Hor\xE1rio de uso: 8h \xE0s 22h.</li>
          <li>Idade m\xE1xima permitida: 11 anos.</li>
          <li>Crian\xE7as devem estar acompanhadas por um respons\xE1vel.</li>
        </ol>
      `},{title:"Academia ao Ar Livre",icon:E,describe:`
        <ol class="list-decimal list-inside">
          <li>Hor\xE1rio de uso: 6h \xE0s 24h.</li>
          <li>Uso permitido apenas para maiores de 12 anos.</li>
          <li>Visitantes n\xE3o podem usar a academia.</li>
        </ol>
      `},{title:"Espa\xE7o Pet",icon:L,describe:`
        <ol class="list-decimal list-inside">
          <li>Uso exclusivo para animais dos moradores.</li>
          <li>\xC9 proibido levar filhotes n\xE3o vacinados.</li>
          <li>O dono deve recolher os excrementos do animal.</li>
        </ol>
      `}];static \u0275fac=function(e){return new(e||i)};static \u0275cmp=m({type:i,selectors:[["regimento"]],decls:11,vars:1,consts:[[1,"flex","flex-col","items-center","min-w-screen","gap-4","p-4"],[1,"text-md","font-bold","text-gray-800"],[1,"w-full","flex","flex-col","items-center","justify-start","gap-2"],["href","/documentos/regimento.pdf",1,"flex","gap-2","text-center","p-2","border-2","border-gray-500","text-gray-500"],[1,"w-8",3,"img"],[1,"font-medium"],[1,"w-full",3,"icon","title","describe"]],template:function(e,l){e&1&&(o(0,"div",0)(1,"h2",1),c(2," REGIMENTO INTERNO "),t(),o(3,"section",2)(4,"a",3),a(5,"lucide-angular",4),o(6,"span",5),c(7,"Fazer Download do regimento."),t()()(),o(8,"section",2),y(9,H,1,3,"acordion",6,C),t()()),e&2&&(n(5),s("img",l.FileText),n(4),h(l.regras))},dependencies:[u,p,d],encapsulation:2})};export{F as RegimentoComponent};
