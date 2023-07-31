"use strict";(self.webpackChunkepo_project=self.webpackChunkepo_project||[]).push([[4121],{59657:(R,E,t)=>{t.r(E),t.d(E,{default:()=>ce});var e=t(67294),s=t(5458),c=t(87751),h=t(16550),f=t(86896),M=t(88767),T=t(14087),D=t(17034),S=t(185),i=t(53979),j=t(36989),m=t(75515),I=t(29728),q=t(49066),U=t(41580),_=t(38939),ee=t(49386),te=t(8060),K=t(79031),r=t(37909),V=t(92155),ae=t(63237),ne=t(15234),P=t(11047),b=t(85893),F=t(88972);const k=F.ZP.div`
  background: ${({theme:o})=>o.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:o})=>o?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:o})=>o.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:o})=>o.spaces[1]};
    top: ${({theme:o})=>o.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,se=F.ZP.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${k} {
    background: ${({theme:o})=>o.colors.success500};
  }

  &[aria-checked='true'] ${k}:before {
    transform: translateX(1rem);
  }
`,oe=e.forwardRef(({label:o,onChange:u,onLabel:v="On",offLabel:d="Off",selected:n,visibleLabels:g=!1,...x},$)=>(0,b.jsx)(se,{ref:$,role:"switch","aria-checked":n,"aria-label":o,onClick:u,visibleLabels:g,type:"button",...x,children:(0,b.jsxs)(P.k,{children:[(0,b.jsxs)(k,{children:[(0,b.jsx)("span",{children:v}),(0,b.jsx)("span",{children:d})]}),g&&(0,b.jsx)(U.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:n?"success600":"danger600",children:n?v:d})]})}));var z=t(12028),le=t(89722),w=t(96315),H=t(20022),re=t(4585),ie=t(86031);const de=()=>{const[o,u]=(0,e.useState)(!1),[v,d]=(0,e.useState)([]),{formatMessage:n}=(0,f.Z)(),{formatAPIError:g}=(0,s.So)(),x=(0,s.lm)();(0,s.go)();const{push:$}=(0,h.k6)(),{pathname:N}=(0,h.TH)(),{isLoading:me,allowedActions:{canCreate:O,canUpdate:Q,canDelete:Y}}=(0,s.ss)(c.Z.settings.webhooks),{get:he,post:ue,put:ge}=(0,s.kY)(),{notifyStatus:G}=(0,T.G)(),Ee="webhooks",{isLoading:fe,data:p,error:Z,refetch:X}=(0,M.useQuery)(Ee,async()=>{const{data:{data:a}}=await he("/admin/webhooks");return a});(0,e.useEffect)(()=>{if(Z){x({type:"warning",message:g(Z)});return}p&&G(n({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[p,Z,x,n,G,g]);const J=(0,M.useMutation)(async()=>{await ue("/admin/webhooks/batch-delete",{ids:v})},{onError(a){x({type:"warning",message:g(a)}),u(!1)},onSuccess(){d([]),u(!1),X()}}),be=(0,M.useMutation)(async({isEnabled:a,id:l})=>{const{id:L,...W}=p.find(Ce=>Ce.id===l)??{},Me={...W,isEnabled:a};await ge(`/admin/webhooks/${l}`,Me)},{onError(a){x({type:"warning",message:g(a)})},onSuccess(){X()}}),ve=()=>J.mutate(),xe=a=>d(a?p.map(l=>l.id):[]),pe=(a,l)=>d(a?L=>[...L,l]:L=>L.filter(W=>W!==l)),A=a=>$(`${N}/${a}`),B=me||fe,y=p?.length??0,C=v.length;return e.createElement(D.A,null,e.createElement(s.SL,{name:"Webhooks"}),e.createElement(S.o,{"aria-busy":B},e.createElement(i.T,{title:n({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:n({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:O&&!B&&e.createElement(s.Qj,{startIcon:e.createElement(w.Z,null),variant:"default",to:`${N}/create`,size:"S"},n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),C>0&&Y&&e.createElement(j.Z,{startActions:e.createElement(e.Fragment,null,e.createElement(m.Z,{variant:"epsilon",textColor:"neutral600"},n({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:C})),e.createElement(I.z,{onClick:()=>u(!0),startIcon:e.createElement(H.Z,null),size:"L",variant:"danger-light"},n({id:"global.delete",defaultMessage:"Delete"})))}),e.createElement(q.D,null,B?e.createElement(U.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(s.dO,null)):y>0?e.createElement(_.i,{colCount:5,rowCount:y+1,footer:e.createElement(ee.c,{onClick:()=>O?A("create"):{},icon:e.createElement(w.Z,null)},n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},e.createElement(te.h,null,e.createElement(K.Tr,null,e.createElement(r.Th,null,e.createElement(V.C,{"aria-label":n({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:C>0&&C<y,value:C===y,onValueChange:xe})),e.createElement(r.Th,{width:"20%"},e.createElement(m.Z,{variant:"sigma",textColor:"neutral600"},n({id:"global.name",defaultMessage:"Name"}))),e.createElement(r.Th,{width:"60%"},e.createElement(m.Z,{variant:"sigma",textColor:"neutral600"},n({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),e.createElement(r.Th,{width:"20%"},e.createElement(m.Z,{variant:"sigma",textColor:"neutral600"},n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),e.createElement(r.Th,null,e.createElement(ae.T,null,n({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),e.createElement(ne.p,null,p.map(a=>e.createElement(K.Tr,{key:a.id,...(0,s.X7)({fn:()=>A(a.id),condition:Q})},e.createElement(r.Td,{...s.UW},e.createElement(V.C,{"aria-label":`${n({id:"global.select",defaultMessage:"Select"})} ${a.name}`,value:v?.includes(a.id),onValueChange:l=>pe(l,a.id),name:"select"})),e.createElement(r.Td,null,e.createElement(m.Z,{fontWeight:"semiBold",textColor:"neutral800"},a.name)),e.createElement(r.Td,null,e.createElement(m.Z,{textColor:"neutral800"},a.url)),e.createElement(r.Td,null,e.createElement(P.k,null,e.createElement(oe,{onLabel:n({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:n({id:"global.disabled",defaultMessage:"Disabled"}),label:`${a.name} ${n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:a.isEnabled,onChange:l=>{l.stopPropagation(),be.mutate({isEnabled:!a.isEnabled,id:a.id})},visibleLabels:!0}))),e.createElement(r.Td,null,e.createElement(P.k,{gap:1},Q&&e.createElement(z.h,{label:n({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:e.createElement(re.Z,null),noBorder:!0}),Y&&e.createElement(z.h,{onClick:l=>{l.stopPropagation(),d([a.id]),u(!0)},label:n({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:e.createElement(H.Z,null),noBorder:!0}))))))):e.createElement(le.x,{icon:e.createElement(ie.Z,{width:"160px"}),content:n({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:e.createElement(I.z,{variant:"secondary",startIcon:e.createElement(w.Z,null),onClick:()=>O?A("create"):{}},n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}))),e.createElement(s.QH,{isOpen:o,onToggleDialog:()=>u(a=>!a),onConfirm:ve,isConfirmButtonLoading:J.isLoading}))},ce=()=>e.createElement(s.O4,{permissions:c.Z.settings.webhooks.main},e.createElement(de,null))},36989:(R,E,t)=>{t.d(E,{Z:()=>c});var e=t(85893),s=t(11047);const c=({startActions:h,endActions:f})=>!h&&!f?null:(0,e.jsxs)(s.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(s.k,{gap:2,wrap:"wrap",children:h}),(0,e.jsx)(s.k,{gap:2,shrink:0,wrap:"wrap",children:f})]})},49386:(R,E,t)=>{t.d(E,{c:()=>S});var e=t(85893),s=t(88972),c=t(41580),h=t(70004),f=t(11047),M=t(75515);const T=(0,s.ZP)(c.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:i})=>i.colors.primary600};
  }
`,D=(0,s.ZP)(c.x)`
  border-radius: 0 0 ${({theme:i})=>i.borderRadius} ${({theme:i})=>i.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,S=({children:i,icon:j,...m})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(h.i,{}),(0,e.jsx)(D,{as:"button",background:"primary100",padding:5,...m,children:(0,e.jsxs)(f.k,{children:[(0,e.jsx)(T,{"aria-hidden":!0,background:"primary200",children:j}),(0,e.jsx)(c.x,{paddingLeft:3,children:(0,e.jsx)(M.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:i})})]})})]})}}]);
