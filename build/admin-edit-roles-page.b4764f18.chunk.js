(self.webpackChunkepo_project=self.webpackChunkepo_project||[]).push([[2544],{23341:(Y,Z,r)=>{"use strict";r.r(Z),r.d(Z,{CreatePage:()=>Ce,default:()=>Me});var e=r(67294),E=r(66115),o=r(5458),T=r(185),I=r(53979),b=r(11047),P=r(29728),R=r(49066),x=r(41580),B=r(75515),j=r(11276),F=r(74571),y=r(16364),u=r(61467),N=r(67109),Q=r(41054),z=r(27361),he=r.n(z),A=r(41609),X=r.n(A),me=r(86896),h=r(16550),q=r(88972),w=r(18280),ee=r(95428),ie=r(87751),le=r(87561);const ye=le.Ry().shape({name:le.Z_().required(o.I0.required),description:le.Z_().required(o.I0.required)}),ce=q.ZP.div`
  border: 1px solid ${({theme:U})=>U.colors.primary200};
  background: ${({theme:U})=>U.colors.primary100};
  padding: ${({theme:U})=>`${U.spaces[2]} ${U.spaces[4]}`};
  color: ${({theme:U})=>U.colors.primary600};
  border-radius: ${({theme:U})=>U.borderRadius};
  font-size: ${12/16}rem;
  font-weight: bold;
`,Ce=()=>{const U=(0,o.lm)(),{lockApp:re,unlockApp:O}=(0,o.o1)(),{formatMessage:$}=(0,me.Z)(),[_,se]=(0,e.useState)(!1),{replace:de}=(0,h.k6)(),te=(0,e.useRef)(),{trackUsage:ue}=(0,o.rS)(),Ie=(0,h.$B)("/settings/roles/duplicate/:id"),Re=he()(Ie,"params.id",null),{isLoading:Ze,data:fe}=(0,ee.U_)(),{permissions:Oe,isLoading:$e}=(0,ee.Dq)(Re),{post:Be,put:De}=(0,o.kY)(),Ve=ae=>{re(),se(!0),ue(Re?"willDuplicateRole":"willCreateNewRole"),Promise.resolve(Be("/admin/roles",ae)).then(async({data:V})=>{const{permissionsToSend:K}=te.current.getPermissions();return ue(Re?"didDuplicateRole":"didCreateNewRole"),V.data.id&&!X()(K)&&await De(`/admin/roles/${V.data.id}/permissions`,{permissions:K}),V}).then(V=>{se(!1),U({type:"success",message:{id:"Settings.roles.created",defaultMessage:"created"}}),de(`/settings/roles/${V.data.id}`)}).catch(V=>{console.error(V),se(!1),U({type:"warning",message:{id:"notification.error"}})}).finally(()=>{O()})},je=`${$({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${(0,E.Z)(new Date,"PPP")}`;return e.createElement(T.o,null,e.createElement(o.SL,{name:"Roles"}),e.createElement(Q.J9,{initialValues:{name:"",description:je},onSubmit:Ve,validationSchema:ye,validateOnChange:!1},({handleSubmit:ae,values:V,errors:K,handleReset:Ee,handleChange:ve})=>e.createElement(o.l0,{noValidate:!0},e.createElement(e.Fragment,null,e.createElement(I.T,{primaryAction:e.createElement(b.k,{gap:2},e.createElement(P.z,{variant:"secondary",onClick:()=>{Ee(),te.current.resetForm()},size:"L"},$({id:"app.components.Button.reset",defaultMessage:"Reset"})),e.createElement(P.z,{onClick:ae,loading:_,size:"L"},$({id:"global.save",defaultMessage:"Save"}))),title:$({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:$({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(o.rU,{startIcon:e.createElement(N.Z,null),to:"/settings/roles"},$({id:"global.back",defaultMessage:"Back"}))}),e.createElement(R.D,null,e.createElement(b.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(x.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(b.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(b.k,{justifyContent:"space-between"},e.createElement(x.x,null,e.createElement(x.x,null,e.createElement(B.Z,{fontWeight:"bold"},$({id:"global.details",defaultMessage:"Details"}))),e.createElement(x.x,null,e.createElement(B.Z,{variant:"pi",textColor:"neutral600"},$({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(ce,null,$({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0}))),e.createElement(j.r,{gap:4},e.createElement(F.P,{col:6},e.createElement(y.o,{name:"name",error:K.name&&$({id:K.name}),label:$({id:"global.name",defaultMessage:"Name"}),onChange:ve,value:V.name})),e.createElement(F.P,{col:6},e.createElement(u.g,{label:$({id:"global.description",defaultMessage:"Description"}),id:"description",error:K.description&&$({id:K.description}),onChange:ve},V.description))))),!Ze&&!$e?e.createElement(x.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(w.Z,{isFormDisabled:!1,ref:te,permissions:Oe,layout:fe})):e.createElement(x.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(o.dO,null))))))))};function Me(){return e.createElement(o.O4,{permissions:ie.Z.settings.roles.create},e.createElement(Ce,null))}},18280:(Y,Z,r)=>{"use strict";r.d(Z,{Z:()=>_n});var e=r(67294),E=r(45697),o=r.n(E),T=r(5458),I=r(82777),b=r(77296),P=r(42761),R=r(18721),x=r.n(R),B=r(41609),j=r.n(B),F=r(86896),y=r(41580),u=r(88972),N=r(89734),Q=r.n(N),z=r(52337),he=r(66942),A=r(11047),X=r(92155),me=r(27361),h=r.n(me),q=r(57557),w=r.n(q),ee=r(95428),ie=r(78114),le=r(29728);const Se=u.ZP.div`
  position: relative;

  ${({hasConditions:t,disabled:n,theme:a})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${n?a.colors.neutral100:a.colors.primary600};
    }
  `}
`,ye=({onClick:t,className:n,hasConditions:a,variant:s})=>{const{formatMessage:i}=(0,F.Z)();return e.createElement(Se,{hasConditions:a,className:n},e.createElement(le.z,{variant:s,startIcon:e.createElement(ie.Z,null),onClick:t},i({id:"global.settings",defaultMessage:"Settings"})))};ye.defaultProps={className:null,hasConditions:!1,variant:"tertiary"},ye.propTypes={onClick:o().func.isRequired,className:o().string,hasConditions:o().bool,variant:o().string};const ce=(0,u.ZP)(ye)``;var Ce=r(42866),Me=r(24969),U=r(2407),re=r(59946),O=r(75515),$=r(36856),_=r(18172),se=r(7739),de=r.n(se),te=r(11700),ue=r.n(te),Ie=r(38953);const Re=t=>Object.values(t).map(n=>Object.entries(n).filter(([,a])=>a).map(([a])=>a)).flat(),Ze=t=>t.reduce((n,[a,s])=>(n.push({label:ue()(a),children:s.map(i=>({label:i.displayName,value:i.id}))}),n),[]),fe=(t,n)=>t.map(([,a])=>a).flat().reduce((a,s)=>({[s.id]:n.includes(s.id),...a}),{}),Oe=({arrayOfOptionsGroupedByCategory:t,isFormDisabled:n,isGrey:a,label:s,name:i,onChange:l,value:c})=>{const{formatMessage:d}=(0,F.Z)(),p=m=>{l(i,fe(t,m))};return e.createElement(A.k,{as:"li",background:a?"neutral100":"neutral0",paddingBottom:3,paddingTop:3},e.createElement(A.k,{paddingLeft:6,style:{width:180}},e.createElement(O.Z,{variant:"sigma",textColor:"neutral600"},d({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"),e.createElement(O.Z,{variant:"sigma",title:s,textColor:"primary600",ellipsis:!0},d({id:`Settings.roles.form.permissions.${s.toLowerCase()}`,defaultMessage:s})),e.createElement(O.Z,{variant:"sigma",textColor:"neutral600"},"\xA0",d({id:"Settings.permissions.conditions.when",defaultMessage:"When"}))),e.createElement(y.x,{style:{maxWidth:430,width:"100%"}},e.createElement(Ie.Q,{id:i,customizeContent:m=>`${m.length} currently selected`,onChange:p,value:Re(c),options:Ze(t),disabled:n})))};Oe.propTypes={arrayOfOptionsGroupedByCategory:o().array.isRequired,isFormDisabled:o().bool.isRequired,isGrey:o().bool.isRequired,label:o().string.isRequired,name:o().string.isRequired,value:o().object.isRequired,onChange:o().func.isRequired};const $e=Oe,Be=(t,n)=>t.reduce((a,s)=>(a[s.id]=h()(n,s.id,!1),a),{}),De=(t,n)=>t.reduce((a,s)=>{const[i,l]=s,c=Be(l,n);return a[i]=c,a},{}),je=(t,n,a)=>t.reduce((s,i)=>{const l=h()(n,[...i.pathToConditionsObject,"conditions"],{}),c=De(a,l);return s[i.pathToConditionsObject.join("..")]=c,s},{}),ae=({actions:t,headerBreadCrumbs:n,isFormDisabled:a,onClosed:s,onToggle:i})=>{const{formatMessage:l}=(0,F.Z)(),{availableConditions:c,modifiedData:d,onChangeConditions:p}=(0,ee.$_)(),m=(0,e.useMemo)(()=>Object.entries(de()(c,"category")),[c]),g=t.filter(({isDisplayed:f,hasSomeActionsSelected:L,hasAllActionsSelected:D})=>f&&(L||D)),C=(0,e.useMemo)(()=>je(g,d,m),[g,d,m]),[S,W]=(0,e.useState)(C),M=(f,L)=>{W((0,_.ZP)(D=>{D[f]||(D[f]={}),D[f].default||(D[f].default={}),D[f].default=L}))},v=()=>{const f=Object.entries(S).reduce((L,D)=>{const[k,ne]=D,G=Object.values(ne).reduce((J,H)=>({...J,...H}),{});return L[k]=G,L},{});p(f),i()};return e.createElement(Ce.P,{labelledBy:"condition-modal-breadcrumbs",onClose:s},e.createElement(Me.x,null,e.createElement(U.O,{id:"condition-modal-breadcrumbs",label:n.join(", ")},n.map(f=>e.createElement(U.$,{key:f},ue()(l({id:f,defaultMessage:f})))))),e.createElement(re.f,null,g.length===0&&e.createElement(O.Z,null,l({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})),e.createElement("ul",null,g.map(({actionId:f,label:L,pathToConditionsObject:D},k)=>{const ne=D.join("..");return e.createElement($e,{key:f,arrayOfOptionsGroupedByCategory:m,label:L,isFormDisabled:a,isGrey:k%2===0,name:ne,onChange:M,value:h()(S,ne,{})})}))),e.createElement($.m,{startActions:e.createElement(le.z,{variant:"tertiary",onClick:i},l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(le.z,{onClick:v},l({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"}))}))};ae.propTypes={actions:o().arrayOf(o().shape({actionId:o().string.isRequired,checkboxName:o().string,hasSomeActionsSelected:o().bool.isRequired,hasAllActionsSelected:o().bool,isDisplayed:o().bool.isRequired,label:o().string})).isRequired,headerBreadCrumbs:o().arrayOf(o().string).isRequired,isFormDisabled:o().bool.isRequired,onClosed:o().func.isRequired,onToggle:o().func.isRequired};const V=ae,K=`${120/16}rem`,Ee=`${200/16}rem`,ve=`${53/16}rem`,Ue=u.ZP.div`
  width: ${K};
`,st=(0,u.ZP)(A.k)`
  padding-right: ${({theme:t})=>t.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:t})=>t&&"cursor: pointer;"}
`,Ke=({children:t,isCollapsable:n,isActive:a,isFormDisabled:s,label:i,onChange:l,onClick:c,checkboxName:d,someChecked:p,value:m})=>{const{formatMessage:g}=(0,F.Z)();return e.createElement(A.k,{alignItems:"center",paddingLeft:6,style:{width:Ee,flexShrink:0}},e.createElement(y.x,{paddingRight:2},e.createElement(X.C,{name:d,"aria-label":g({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:i}),disabled:s,onValueChange:C=>l({target:{name:d,value:C}}),indeterminate:p,value:m})),e.createElement(st,{title:i,alignItems:"center",isCollapsable:n,...n&&{onClick:c,"aria-expanded":a,onKeyDown:({key:C})=>(C==="Enter"||C===" ")&&c(),tabIndex:0,role:"button"}},e.createElement(O.Z,{fontWeight:a?"bold":"",textColor:a?"primary600":"neutral800",ellipsis:!0},ue()(i)),t))};Ke.defaultProps={children:null,checkboxName:"",onChange(){},value:!1,someChecked:!1,isCollapsable:!1},Ke.propTypes={checkboxName:o().string,children:o().node,label:o().string.isRequired,isCollapsable:o().bool,isFormDisabled:o().bool.isRequired,onChange:o().func,onClick:o().func.isRequired,someChecked:o().bool,value:o().bool,isActive:o().bool.isRequired};const ot=(0,e.memo)(Ke);var Bt=r(42348),Ft=r.n(Bt),Nt=r(13218),xe=r.n(Nt);const rt=t=>xe()(t)?Ft()(Object.values(t).map(n=>xe()(n)?rt(n):n)):[],Le=rt,Ge=t=>t?Object.keys(t).reduce((n,a)=>(a!=="conditions"&&(n[a]=t[a]),n),{}):null,Pe=t=>{const n=Ge(t),a=Le(n);if(!a.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const s=a.every(l=>l),i=a.some(l=>l)&&!s;return{hasAllActionsSelected:s,hasSomeActionsSelected:i}},Wt=(t,n,a)=>t.map(({actionId:s,isDisplayed:i,applyToProperties:l,label:c})=>{if(!i)return{actionId:s,hasSomeActionsSelected:!1,isDisplayed:i};const d=[...a.split(".."),s],p=j()(l)?[...d,"properties","enabled"]:d,m=p.join(".."),g=h()(n,[...d,"conditions"],null),C=Le(g).some(v=>v);if(j()(l)){const v=h()(n,p,!1);return{actionId:s,checkboxName:m,hasAllActionsSelected:v,hasConditions:C,hasSomeActionsSelected:v,isDisplayed:i,isParentCheckbox:!1,label:c,pathToConditionsObject:d}}const S=h()(n,p,null),{hasAllActionsSelected:W,hasSomeActionsSelected:M}=Pe(S);return{actionId:s,checkboxName:m,hasAllActionsSelected:W,hasConditions:C,hasSomeActionsSelected:M,isDisplayed:i,isParentCheckbox:!0,label:c,pathToConditionsObject:d}});var Vt=r(12645);const Fe=(0,u.ZP)(Vt.Z)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:t})=>t?"180":"0"}deg);
  margin-left: ${({theme:t})=>t.spaces[2]};
`,Ne=t=>`
  ${O.Z} {
    color: ${t.colors.primary600};
    font-weight: ${t.fontWeights.bold}
  }
  ${Fe} {
    display: block;
    path {
      fill: ${t.colors.primary600}
    };
  }
`,ze=(t,n)=>`
  ${at} {
    background-color: ${t.colors.primary100};
    color: ${t.colors.primary600};
    border-radius: ${n?"2px 2px 0 0":"2px"};
  }
  ${lt} {
    display: flex;
  }
  ${ce} {
    display: block;
  }
  &:hover {
   ${Ne(t)}
  }

  &:focus-within {
    ${({theme:a,isActive:s})=>ze(a,s)}
  }
  
`,at=u.ZP.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: ${ve};
  background-color: ${({isGrey:t,theme:n})=>t?n.colors.neutral100:n.colors.neutral0};
  border: 1px solid transparent;
`,Ht=u.ZP.div`
  display: inline-flex;
  min-width: 100%;

  ${ce} {
    display: none;
  }
  ${({isActive:t,theme:n})=>t&&ze(n,t)}
  &:hover {
    ${({theme:t,isActive:n})=>ze(t,n)}
  }
`,it=(0,u.ZP)(A.k)`
  width: ${K};
  position: relative;
`,lt=(0,u.ZP)(y.x)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,ct=u.ZP.span`
  position: absolute;
  top: -6px;
  left: 37px;
  width: 6px;
  height: 6px;
  border-radius: 20px;
  background: ${({theme:t})=>t.colors.primary600};
`,Ut=(0,u.ZP)(y.x)`
  position: absolute;
  right: 9px;
  transform: translateY(10px);
`,dt=({availableActions:t,isActive:n,isGrey:a,isFormDisabled:s,label:i,onClickToggle:l,pathToData:c})=>{const[d,p]=(0,e.useState)(!1),{formatMessage:m}=(0,F.Z)(),{modifiedData:g,onChangeParentCheckbox:C,onChangeSimpleCheckbox:S}=(0,ee.$_)(),W=()=>{p(G=>!G)},M=()=>{p(!1)},v=h()(g,c.split(".."),{}),f=(0,e.useMemo)(()=>Object.keys(v).reduce((G,J)=>(G[J]=w()(v[J],"conditions"),G),{}),[v]),{hasAllActionsSelected:L,hasSomeActionsSelected:D}=Pe(f),k=(0,e.useMemo)(()=>Wt(t,g,c),[t,g,c]),ne=k.some(({hasConditions:G})=>G);return e.createElement(Ht,{isActive:n},e.createElement(at,{isGrey:a},e.createElement(ot,{isCollapsable:!0,isFormDisabled:s,label:i,checkboxName:c,onChange:C,onClick:l,someChecked:D,value:L,isActive:n},e.createElement(lt,{paddingLeft:2},n?e.createElement(z.Z,null):e.createElement(he.Z,null))),e.createElement(A.k,{style:{flex:1}},k.map(({actionId:G,hasConditions:J,hasAllActionsSelected:H,hasSomeActionsSelected:ge,isDisplayed:ke,isParentCheckbox:oe,checkboxName:be,label:We})=>ke?oe?e.createElement(it,{key:G,justifyContent:"center",alignItems:"center"},J&&e.createElement(ct,null),e.createElement(X.C,{disabled:s,name:be,"aria-label":m({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${We} ${i}`}),onValueChange:Ae=>{C({target:{name:be,value:Ae}})},indeterminate:ge,value:H})):e.createElement(it,{key:G,justifyContent:"center",alignItems:"center"},J&&e.createElement(ct,null),e.createElement(X.C,{disabled:s,indeterminate:J,name:be,onValueChange:Ae=>{S({target:{name:be,value:Ae}})},value:H})):e.createElement(Ue,{key:G}))),d&&e.createElement(V,{headerBreadCrumbs:[i,"Settings.permissions.conditions.conditions"],actions:k,isFormDisabled:s,onClosed:M,onToggle:W})),e.createElement(Ut,null,e.createElement(ce,{onClick:W,hasConditions:ne})))};dt.propTypes={availableActions:o().array.isRequired,isActive:o().bool.isRequired,isGrey:o().bool.isRequired,isFormDisabled:o().bool.isRequired,label:o().string.isRequired,onClickToggle:o().func.isRequired,pathToData:o().string.isRequired};const Kt=dt,Gt=(t,n)=>t.map(a=>{const s=Array.isArray(a.applyToProperties)&&a.applyToProperties.indexOf(n)!==-1&&a.isDisplayed;return{label:a.label,actionId:a.actionId,isActionRelatedToCurrentProperty:s}}),ut=(0,u.ZP)(A.k)`
  width: ${K};
  flex-shrink: 0;
`,zt=(0,u.ZP)(A.k)`
  width: ${Ee};
  height: ${ve};
  flex-shrink: 0;
`,mt=({headers:t,label:n})=>{const{formatMessage:a}=(0,F.Z)(),s=a({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:n});return e.createElement(A.k,null,e.createElement(zt,{alignItems:"center",paddingLeft:6},e.createElement(O.Z,{variant:"sigma",textColor:"neutral500"},s)),t.map(i=>i.isActionRelatedToCurrentProperty?e.createElement(ut,{justifyContent:"center",key:i.label},e.createElement(O.Z,{variant:"sigma",textColor:"neutral500"},a({id:`Settings.roles.form.permissions.${i.label.toLowerCase()}`,defaultMessage:i.label}))):e.createElement(ut,{key:i.label})))};mt.propTypes={headers:o().arrayOf(o().shape({label:o().string.isRequired,isActionRelatedToCurrentProperty:o().bool.isRequired})).isRequired,label:o().string.isRequired};const Xt=mt,wt=u.ZP.span`
  color: ${({theme:t})=>t.colors.danger700};
  padding-left: ${({theme:t})=>t.spaces[1]}px;
`,pt=()=>e.createElement(wt,null,"*"),Yt=(t,n)=>t.map(a=>{const s=Array.isArray(a.subjects)&&a.subjects.indexOf(n)!==-1;return{...a,isDisplayed:s}}),Jt=(0,u.ZP)(y.x)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t})=>t.colors.primary200};
    display: block;
  }
`,Qt=u.ZP.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:n})=>t.colors[n]};
  }
`,Xe=t=>e.createElement(Jt,null,e.createElement(Qt,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})));Xe.defaultProps={fill:"primary200"},Xe.propTypes={fill:o().string};const qt=(0,e.memo)(Xe),gt=(0,u.ZP)(A.k)`
  width: ${K};
  position: relative;
`,_t=(0,u.ZP)(A.k)`
  height: ${ve};
`,en=(0,u.ZP)(y.x)`
  padding-left: ${31/16}rem;
`,tn=(0,u.ZP)(y.x)`
  border-left: ${({isVisible:t,theme:n})=>t?`4px solid ${n.colors.primary200}`:"4px solid transparent"};
`,nn=(0,u.ZP)(A.k)`
  padding-left: ${({theme:t})=>t.spaces[4]};
  width: ${({level:t})=>145-t*36}px;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${Fe} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${Ne(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&Ne(n)};
`,sn=u.ZP.div`
  padding-top: ${({theme:t})=>t.spaces[2]};
  margin-top: ${({theme:t})=>t.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:t})=>t.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,we=({childrenForm:t,isFormDisabled:n,recursiveLevel:a,pathToDataFromActionRow:s,propertyActions:i,parentName:l,propertyName:c})=>{const{formatMessage:d}=(0,F.Z)(),{modifiedData:p,onChangeParentCheckbox:m,onChangeSimpleCheckbox:g}=(0,ee.$_)(),[C,S]=(0,e.useState)(null),W=v=>{S(f=>f===v?null:v)},M=(0,e.useMemo)(()=>C?t.find(({value:v})=>v===C):null,[C,t]);return e.createElement(en,null,e.createElement(sn,null),t.map(({label:v,value:f,required:L,children:D},k)=>{const ne=k+1<t.length,G=Array.isArray(D),J=C===f;return e.createElement(tn,{key:f,isVisible:ne},e.createElement(_t,null,e.createElement(qt,{color:"primary200"}),e.createElement(A.k,{style:{flex:1}},e.createElement(nn,{level:a,isActive:J,isCollapsable:G},e.createElement(st,{alignItems:"center",isCollapsable:G,...G&&{onClick:()=>W(f),"aria-expanded":J,onKeyDown:({key:H})=>(H==="Enter"||H===" ")&&W(f),tabIndex:0,role:"button"},title:v},e.createElement(O.Z,{ellipsis:!0},ue()(v)),L&&e.createElement(pt,null),e.createElement(Fe,{$isActive:J}))),e.createElement(A.k,{style:{flex:1}},i.map(({actionId:H,label:ge,isActionRelatedToCurrentProperty:ke})=>{if(!ke)return e.createElement(Ue,{key:H});const oe=[...s.split(".."),H,"properties",c,...l.split(".."),f],be=h()(p,oe,!1);if(!D)return e.createElement(gt,{key:ge,justifyContent:"center",alignItems:"center"},e.createElement(X.C,{disabled:n,name:oe.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${v} ${ge}`}),onValueChange:Te=>{g({target:{name:oe.join(".."),value:Te}})},value:be}));const{hasAllActionsSelected:We,hasSomeActionsSelected:Ae}=Pe(be);return e.createElement(gt,{key:ge,justifyContent:"center",alignItems:"center"},e.createElement(X.C,{key:ge,disabled:n,name:oe.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${v} ${ge}`}),onValueChange:Te=>{m({target:{name:oe.join(".."),value:Te}})},value:We,indeterminate:Ae}))})))),M&&J&&e.createElement(y.x,{paddingBottom:2},e.createElement(we,{isFormDisabled:n,parentName:`${l}..${f}`,pathToDataFromActionRow:s,propertyActions:i,propertyName:c,recursiveLevel:a+1,childrenForm:M.children})))}))};we.propTypes={childrenForm:o().array.isRequired,isFormDisabled:o().bool.isRequired,parentName:o().string.isRequired,pathToDataFromActionRow:o().string.isRequired,propertyActions:o().array.isRequired,propertyName:o().string.isRequired,recursiveLevel:o().number.isRequired};const on=(0,e.memo)(we),rn=t=>t.reduce((a,s)=>(s.isActionRelatedToCurrentProperty&&a.push(s.actionId),a),[]),an=(t,n,a,s,i)=>{const c=rn(t).reduce((d,p)=>{const m=[...a.split(".."),p,"properties",s,i],g=h()(n,m,!1);return d[p]=g,d},{});return Pe(c)},ht=(0,u.ZP)(A.k)`
  width: ${K};
  position: relative;
`,ln=(0,u.ZP)(A.k)`
  height: ${ve};
  flex: 1;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${Fe} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${Ne(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&Ne(n)};
`,Ye=({childrenForm:t,label:n,isFormDisabled:a,name:s,required:i,pathToData:l,propertyActions:c,propertyName:d,isOdd:p})=>{const{formatMessage:m}=(0,F.Z)(),[g,C]=(0,e.useState)(null),{modifiedData:S,onChangeCollectionTypeLeftActionRowCheckbox:W,onChangeParentCheckbox:M,onChangeSimpleCheckbox:v}=(0,ee.$_)(),f=g===s,L=(0,e.useMemo)(()=>Array.isArray(t)?t:[],[t]),D=L.length>0,k=(0,e.useCallback)(()=>{D&&C(H=>H===s?null:s)},[D,s]),ne=({target:{value:H}})=>{W(l,d,s,H)},{hasAllActionsSelected:G,hasSomeActionsSelected:J}=(0,e.useMemo)(()=>an(c,S,l,d,s),[c,S,l,d,s]);return e.createElement(e.Fragment,null,e.createElement(ln,{alignItems:"center",isCollapsable:D,isActive:f,background:p?"neutral100":"neutral0"},e.createElement(A.k,null,e.createElement(ot,{onChange:ne,onClick:k,isCollapsable:D,isFormDisabled:a,label:n,someChecked:J,value:G,isActive:f},i&&e.createElement(pt,null),e.createElement(Fe,{$isActive:f})),e.createElement(A.k,null,c.map(({label:H,isActionRelatedToCurrentProperty:ge,actionId:ke})=>{if(!ge)return e.createElement(Ue,{key:H});const oe=[...l.split(".."),ke,"properties",d,s];if(!D){const Te=h()(S,oe,!1);return e.createElement(ht,{key:ke,justifyContent:"center",alignItems:"center"},e.createElement(X.C,{disabled:a,name:oe.join(".."),"aria-label":m({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${s} ${H}`}),onValueChange:es=>{v({target:{name:oe.join(".."),value:es}})},value:Te}))}const be=h()(S,oe,{}),{hasAllActionsSelected:We,hasSomeActionsSelected:Ae}=Pe(be);return e.createElement(ht,{key:H,justifyContent:"center",alignItems:"center"},e.createElement(X.C,{disabled:a,name:oe.join(".."),onValueChange:Te=>{M({target:{name:oe.join(".."),value:Te}})},"aria-label":m({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${s} ${H}`}),value:We,indeterminate:Ae}))})))),f&&e.createElement(on,{childrenForm:L,isFormDisabled:a,parentName:s,pathToDataFromActionRow:l,propertyName:d,propertyActions:c,recursiveLevel:0}))};Ye.defaultProps={childrenForm:[],required:!1},Ye.propTypes={childrenForm:o().array,label:o().string.isRequired,isFormDisabled:o().bool.isRequired,name:o().string.isRequired,pathToData:o().string.isRequired,propertyActions:o().array.isRequired,propertyName:o().string.isRequired,required:o().bool,isOdd:o().bool.isRequired};const cn=(0,e.memo)(Ye),dn=u.ZP.div`
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
`,ft=({availableActions:t,childrenForm:n,isFormDisabled:a,label:s,pathToData:i,propertyName:l})=>{const c=(0,e.useMemo)(()=>Gt(t,l),[t,l]);return e.createElement(dn,null,e.createElement(Xt,{label:s,headers:c}),e.createElement(y.x,null,n.map(({children:d,label:p,value:m,required:g},C)=>e.createElement(cn,{childrenForm:d,key:m,label:p,isFormDisabled:a,name:m,required:g,propertyActions:c,pathToData:i,propertyName:l,isOdd:C%2===0}))))};ft.propTypes={childrenForm:o().array.isRequired,availableActions:o().array.isRequired,isFormDisabled:o().bool.isRequired,label:o().string.isRequired,pathToData:o().string.isRequired,propertyName:o().string.isRequired};const un=ft,mn=u.ZP.div`
  flex-direction: column;
  display: inline-flex;
  min-width: 100%;
  ${({theme:t,isActive:n})=>n&&`border: 1px solid ${t.colors.primary600};`}
`,yt=({allActions:t,contentTypeName:n,label:a,index:s,isActive:i,isFormDisabled:l,onClickToggleCollapse:c,pathToData:d,properties:p})=>{const m=(0,e.useCallback)(()=>{c(n)},[n,c]),g=(0,e.useMemo)(()=>Yt(t,n),[t,n]);return e.createElement(mn,{isActive:i},e.createElement(Kt,{availableActions:g,isActive:i,isGrey:s%2===0,isFormDisabled:l,label:a,onClickToggle:m,pathToData:d}),i&&p.map(({label:C,value:S,children:W})=>e.createElement(un,{availableActions:g,childrenForm:W,isFormDisabled:l,label:C,pathToData:d,propertyName:S,key:S})))};yt.propTypes={allActions:o().array.isRequired,contentTypeName:o().string.isRequired,index:o().number.isRequired,isActive:o().bool.isRequired,isFormDisabled:o().bool.isRequired,label:o().string.isRequired,onClickToggleCollapse:o().func.isRequired,pathToData:o().string.isRequired,properties:o().array.isRequired};const pn=yt,Je=({actions:t,isFormDisabled:n,pathToData:a,subjects:s})=>{const[i,l]=(0,e.useState)(null),c=d=>{l(i===d?null:d)};return s.map(({uid:d,label:p,properties:m},g)=>e.createElement(pn,{allActions:t,key:d,contentTypeName:d,label:p,isActive:i===d,isFormDisabled:n,index:g,onClickToggleCollapse:c,pathToData:`${a}..${d}`,properties:m}))};Je.defaultProps={actions:[],subjects:[]},Je.propTypes={actions:o().array.isRequired,isFormDisabled:o().bool.isRequired,pathToData:o().string.isRequired,subjects:o().arrayOf(o().shape({uid:o().string.isRequired,label:o().string.isRequired,properties:o().array.isRequired}))};const gn=(0,e.memo)(Je),hn=t=>t.filter(({subjects:n})=>n&&n.length),fn=t=>t.map(({actionId:n})=>n),yn=(t,n)=>t.reduce((a,s)=>(Object.keys(n).forEach(i=>{const l=h()(n,[i,s],{}),c={[i]:Ge(l)};a[s]?a[s]={...a[s],...c}:a[s]=c}),a),{}),Cn=(t,n)=>{const a=fn(t),s=yn(a,n);return Object.keys(s).reduce((l,c)=>(l[c]=Pe(s[c]),l),{})},En=(0,u.ZP)(A.k)`
  width: ${K};
  flex-shrink: 0;
`,Qe=({actions:t,isFormDisabled:n,kind:a})=>{const{formatMessage:s}=(0,F.Z)(),{modifiedData:i,onChangeCollectionTypeGlobalActionCheckbox:l}=(0,ee.$_)(),c=(0,e.useMemo)(()=>hn(t),[t]),d=(0,e.useMemo)(()=>Cn(c,i[a]),[i,c,a]);return e.createElement(y.x,{paddingBottom:4,paddingTop:6,style:{paddingLeft:Ee}},e.createElement(A.k,{gap:0},c.map(({label:p,actionId:m})=>e.createElement(En,{direction:"column",alignItems:"center",justifyContent:"center",key:m,gap:3},e.createElement(O.Z,{variant:"sigma",textColor:"neutral500"},s({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})),e.createElement(X.C,{disabled:n,onValueChange:g=>{l(a,m,g)},name:m,"aria-label":s({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:s({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})}),value:h()(d,[m,"hasAllActionsSelected"],!1),indeterminate:h()(d,[m,"hasSomeActionsSelected"],!1)})))))};Qe.defaultProps={actions:[]},Qe.propTypes={actions:o().arrayOf(o().shape({label:o().string.isRequired,actionId:o().string.isRequired,subjects:o().array.isRequired})),isFormDisabled:o().bool.isRequired,kind:o().string.isRequired};const vn=(0,e.memo)(Qe),bn=(0,u.ZP)(y.x)`
  overflow-x: auto;
`,Ct=({isFormDisabled:t,kind:n,layout:{actions:a,subjects:s}})=>{const i=Q()([...s],"label");return e.createElement(bn,{background:"neutral0"},e.createElement(vn,{actions:a,kind:n,isFormDisabled:t}),e.createElement(gn,{actions:a,isFormDisabled:t,pathToData:n,subjects:i}))};Ct.propTypes={isFormDisabled:o().bool.isRequired,kind:o().string.isRequired,layout:o().shape({actions:o().array,subjects:o().arrayOf(o().shape({uid:o().string.isRequired,label:o().string.isRequired,properties:o().array.isRequired}))}).isRequired};const Et=(0,e.memo)(Ct);var xn=r(47713);const vt=({children:t,value:n})=>e.createElement(xn.$l.Provider,{value:n},t);vt.propTypes={children:o().node.isRequired,value:o().exact({availableConditions:o().array.isRequired,modifiedData:o().object.isRequired,onChangeCollectionTypeLeftActionRowCheckbox:o().func.isRequired,onChangeConditions:o().func.isRequired,onChangeSimpleCheckbox:o().func.isRequired,onChangeParentCheckbox:o().func.isRequired,onChangeCollectionTypeGlobalActionCheckbox:o().func.isRequired}).isRequired};const Rn=vt;var Pn=r(48734),An=r(74756),Tn=r(63081),bt=r(36213),Sn=r(11276),Mn=r(74571);const On=(t,n,a)=>t.map(s=>{const i=[...a,s.action,"properties","enabled"],l=h()(n,i,!1),c=h()(n,[...a,s.action,"conditions"],{}),d=Le(c).some(p=>p);return{...s,isDisplayed:l,checkboxName:i.join(".."),hasSomeActionsSelected:l,value:l,hasConditions:d,label:s.displayName,actionId:s.action,pathToConditionsObject:[...a,s.action]}}),$n=t=>{const n=Object.entries(t).reduce((s,i)=>{const[l,{conditions:c}]=i;return s[l]=c,s},{});return Le(n).some(s=>s)},Dn=u.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,jn=u.ZP.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:t,disabled:n,theme:a})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${n?a.colors.neutral100:a.colors.primary600};
    }
  `}
`,xt=({categoryName:t,isFormDisabled:n,subCategoryName:a,actions:s,pathToData:i})=>{const[l,c]=(0,e.useState)(!1),{modifiedData:d,onChangeParentCheckbox:p,onChangeSimpleCheckbox:m}=(0,ee.$_)(),{formatMessage:g}=(0,F.Z)(),C=h()(d,i,{}),S=(0,e.useMemo)(()=>Object.keys(C).reduce((k,ne)=>(k[ne]=Ge(C[ne]),k),{}),[C]),{hasAllActionsSelected:W,hasSomeActionsSelected:M}=Pe(S),v=()=>{c(k=>!k)},f=()=>{c(!1)},L=On(s,d,i),D=$n(h()(d,[...i],{}));return e.createElement(e.Fragment,null,e.createElement(y.x,null,e.createElement(A.k,{justifyContent:"space-between",alignItems:"center"},e.createElement(y.x,{paddingRight:4},e.createElement(O.Z,{variant:"sigma",textColor:"neutral600"},a)),e.createElement(Dn,null),e.createElement(y.x,{paddingLeft:4},e.createElement(bt.X,{name:i.join(".."),disabled:n,onValueChange:k=>{p({target:{name:i.join(".."),value:k}})},indeterminate:M,value:W},g({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(A.k,{paddingTop:6,paddingBottom:6},e.createElement(Sn.r,{gap:2,style:{flex:1}},L.map(({checkboxName:k,value:ne,action:G,displayName:J,hasConditions:H})=>e.createElement(Mn.P,{col:3,key:G},e.createElement(jn,{disabled:n,hasConditions:H},e.createElement(bt.X,{name:k,disabled:n,onValueChange:ge=>{m({target:{name:k,value:ge}})},value:ne},J))))),e.createElement(ce,{hasConditions:D,onClick:v}))),l&&e.createElement(V,{headerBreadCrumbs:[t,a],actions:L,isFormDisabled:n,onClosed:f,onToggle:v}))};xt.propTypes={actions:o().array.isRequired,categoryName:o().string.isRequired,isFormDisabled:o().bool.isRequired,subCategoryName:o().string.isRequired,pathToData:o().array.isRequired};const Ln=xt,qe=({childrenForm:t,kind:n,name:a,isOpen:s,isFormDisabled:i,isWhite:l,onOpenCategory:c,pathToData:d})=>{const{formatMessage:p}=(0,F.Z)(),m=()=>{c(a)},g=(0,e.useMemo)(()=>a.split("::").pop(),[a]);return e.createElement(Pn.U,{expanded:s,onToggle:m,id:`accordion-${a}`,variant:l?"primary":"secondary"},e.createElement(An.B,{title:ue()(g),description:`${p({id:"Settings.permissions.category"},{category:g})} ${n==="plugins"?"plugin":n}`}),e.createElement(Tn.v,null,e.createElement(y.x,{padding:6},t.map(({actions:C,subCategoryName:S,subCategoryId:W})=>e.createElement(Ln,{key:S,actions:C,categoryName:g,isFormDisabled:i,subCategoryName:S,pathToData:[...d,W]})))))};qe.defaultProps={},qe.propTypes={childrenForm:o().array.isRequired,isOpen:o().bool.isRequired,isFormDisabled:o().bool.isRequired,isWhite:o().bool.isRequired,kind:o().string.isRequired,name:o().string.isRequired,onOpenCategory:o().func.isRequired,pathToData:o().array.isRequired};const kn=qe,Rt=({isFormDisabled:t,kind:n,layout:a})=>{const[s,i]=(0,e.useState)(null),l=c=>{i(c===s?null:c)};return e.createElement(y.x,{padding:6,background:"neutral0"},a.map(({category:c,categoryId:d,childrenForm:p},m)=>e.createElement(kn,{key:c,childrenForm:p,kind:n,isFormDisabled:t,isOpen:s===c,isWhite:m%2===1,name:c,onOpenCategory:l,pathToData:[n,d]})))};Rt.propTypes={isFormDisabled:o().bool.isRequired,kind:o().string.isRequired,layout:o().arrayOf(o().shape({category:o().string.isRequired,categoryId:o().string.isRequired,childrenForm:o().arrayOf(o().shape({actions:o().array.isRequired})).isRequired}).isRequired).isRequired};const Pt=Rt;var In=r(82492),Zn=r.n(In),Bn=r(36968),pe=r.n(Bn);const At=(t,n,a)=>t.find(s=>s.action===n&&s.subject===a),Tt=(t,n=[])=>t.reduce((a,s)=>(a[s.id]=n.indexOf(s.id)!==-1,a),{}),St=({children:t},n,a="")=>t.reduce((s,i)=>{if(i.children)return{...s,[i.value]:St(i,n,`${a}${i.value}.`)};const l=n.indexOf(`${a}${i.value}`)!==-1;return s[i.value]=l,s},{}),Fn=(t,n,a)=>t.reduce((s,i)=>{const l=n.properties.find(({value:c})=>c===i);if(l){const c=h()(a,["properties",l.value],[]),d=St(l,c);s.properties[i]=d}return s},{properties:{}}),Nn=(t,n)=>n.reduce((a,s)=>{const i=t.find(({uid:l})=>l===s)||null;return i&&(a[s]=i),a},{}),Mt=({subjects:t},n,a,s=[])=>n.reduce((i,l)=>{const c=l.subjects,d=Nn(t,c);if(j()(d))return i;const p=Object.keys(d).reduce((m,g)=>{const{actionId:C,applyToProperties:S}=l,v=d[g].properties.map(({value:k})=>k).every(k=>(S||[]).indexOf(k)===-1),f=At(s,C,g),L=Tt(a,h()(f,"conditions",[]));if(j()(S)||v)return pe()(m,[g,C],{properties:{enabled:f!==void 0},conditions:L}),m;const D=Fn(S,d[g],f);return pe()(m,[g,C],{...D,conditions:L}),m},{});return Zn()(i,p)},{}),Wn=(t,n,a)=>t.reduce((s,i)=>{const l=At(a,i.action,null);return s[i.action]={properties:{enabled:l!==void 0},conditions:Tt(n,l?.conditions??[])},s},{}),Vn=(t,n,a)=>t.reduce((s,i)=>(s[i.subCategoryId]=Wn(i.actions,n,a),s),{}),Ot=(t,n,a=[])=>t.reduce((s,{categoryId:i,childrenForm:l})=>{const c=Vn(l,n,a);return s[i]=c,s},{}),$t=t=>t.split(" ").join("-"),Dt=(t,n)=>Object.entries(de()(t,n)).map(([a,s])=>({category:a,categoryId:$t(a),childrenForm:Object.entries(de()(s,"subCategory")).map(([i,l])=>({subCategoryName:i,subCategoryId:$t(i),actions:l}))})),Hn=(t,n)=>{const{conditions:a,sections:{collectionTypes:s,singleTypes:i,plugins:l,settings:c}}=t,d={collectionTypes:s,singleTypes:i,plugins:Dt(l,"plugin"),settings:Dt(c,"category")},p={collectionTypes:Mt(s,s.actions||[],a,n),singleTypes:Mt(i,i.actions||[],a,n),plugins:Ot(d.plugins,a,n),settings:Ot(d.settings,a,n)};return{initialData:p,modifiedData:p,layouts:d}};var Un=r(50361),_e=r.n(Un);const jt=t=>Object.keys(t).reduce((n,a)=>{const s=t[a];if(xe()(s)&&!x()(s,"conditions"))return{...n,[a]:jt(s)};if(xe()(s)&&x()(s,"conditions")&&!Le(w()(s,"conditions")).some(l=>l)){const l=Object.keys(s.conditions).reduce((c,d)=>(c[d]=!1,c),{});return{...n,[a]:{...s,conditions:l}}}return n[a]=s,n},{}),et=jt,Lt=(t,n,a=!1)=>Object.keys(t).reduce((s,i)=>{const l=t[i];return i==="conditions"&&!a?(s[i]=l,s):xe()(l)?{...s,[i]:Lt(l,n,i==="fields")}:(s[i]=n,s)},{}),He=Lt,Kn={initialData:{},modifiedData:{},layouts:{}},Gn=(t,n)=>(0,_.ZP)(t,a=>{switch(n.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:s,actionId:i,value:l}=n,c=["modifiedData",s];Object.keys(h()(t,c)).forEach(d=>{const p=h()(t,[...c,d,i],void 0);if(p){let m=He(p,l);if(!l&&m.conditions){const g=He(m.conditions,!1);m={...m,conditions:g}}pe()(a,[...c,d,i],m)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:s,propertyName:i,rowName:l,value:c}=n;let d=_e()(t.modifiedData);const p=s.split(".."),m=h()(d,p,{});Object.keys(m).forEach(g=>{if(x()(m[g],`properties.${i}`)){const C=h()(m,[g,"properties",i,l]),S=[...p,g,"properties",i,l];if(!xe()(C))pe()(d,S,c);else{const W=He(C,c);pe()(d,S,W)}}}),c||(d=et(d)),pe()(a,"modifiedData",d);break}case"ON_CHANGE_CONDITIONS":{Object.entries(n.conditions).forEach(s=>{const[i,l]=s;pe()(a,["modifiedData",...i.split(".."),"conditions"],l)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let s=_e()(t.modifiedData);pe()(s,[...n.keys.split("..")],n.value),n.value||(s=et(s)),pe()(a,"modifiedData",s);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:s,value:i}=n,l=[...s.split("..")];let c=_e()(t.modifiedData);const d=h()(c,l,{}),p=He(d,i);pe()(c,l,p),i||(c=et(c)),pe()(a,["modifiedData"],c);break}case"RESET_FORM":{a.modifiedData=t.initialData;break}case"SET_FORM_AFTER_SUBMIT":{a.initialData=t.modifiedData;break}default:return a}}),tt=t=>Object.entries(t).filter(([,n])=>n).map(([n])=>n),zn=t=>{const[n,{conditions:a}]=t;return{action:n,subject:null,conditions:tt(a),properties:{}}},Xn=t=>Object.values(t).reduce((n,a)=>{const s=Object.entries(a).reduce((i,l)=>{const[,{properties:{enabled:c}}]=l;if(!c)return i;const d=zn(l);return i.push(d),i},[]);return[...n,...s]},[]),kt=t=>Object.values(t).reduce((n,a)=>{const s=Xn(a);return[...n,...s]},[]),It=(t,n="")=>Object.entries(t).reduce((a,s)=>{const[i,l]=s;return xe()(l)?[...a,...It(l,`${n}${i}.`)]:(l&&!xe()(l)&&a.push(`${n}${i}`),a)},[]),wn=(t,n,{conditions:a,properties:s})=>Object.entries(s).reduce((i,l)=>{const[c,d]=l;return i.properties[c]=It(d),i},{action:t,subject:n,conditions:tt(a),properties:{}}),Yn=(t,n,{conditions:a})=>({action:t,subject:n,properties:{},conditions:tt(a)}),Jn=(t,n)=>Object.entries(n).reduce((s,i)=>{const[l,c]=i;if(!Le(c).some(m=>m))return s;if(!c?.properties?.enabled){const m=wn(l,t,c);return[...s,m]}if(!c.properties.enabled)return s;const p=Yn(l,t,c);return s.push(p),s},[]),Zt=t=>Object.entries(t).reduce((a,s)=>{const[i,l]=s,c=Jn(i,l);return[...a,...c]},[]),Qn=t=>{const n=kt(t.plugins),a=kt(t.settings),s=Zt(t.collectionTypes),i=Zt(t.singleTypes);return[...n,...a,...s,...i]},qn=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],nt=(0,e.forwardRef)(({layout:t,isFormDisabled:n,permissions:a},s)=>{const[{initialData:i,layouts:l,modifiedData:c},d]=(0,e.useReducer)(Gn,Kn,()=>Hn(t,a)),{formatMessage:p}=(0,F.Z)();(0,e.useImperativeHandle)(s,()=>({getPermissions(){const M=(0,T.e5)(i.collectionTypes,c.collectionTypes),v=(0,T.e5)(i.singleTypes,c.singleTypes),f={...M,...v};let L;return j()(f)?L=!1:L=Object.values(f).some(D=>Object.values(D).some(k=>x()(k,"conditions"))),{permissionsToSend:Qn(c),didUpdateConditions:L}},resetForm(){d({type:"RESET_FORM"})},setFormAfterSubmit(){d({type:"SET_FORM_AFTER_SUBMIT"})}}));const m=(M,v,f,L)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:M,propertyName:v,rowName:f,value:L})},g=(M,v,f)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:M,actionId:v,value:f})},C=M=>{d({type:"ON_CHANGE_CONDITIONS",conditions:M})},S=(0,e.useCallback)(({target:{name:M,value:v}})=>{d({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:M,value:v})},[]),W=(0,e.useCallback)(({target:{name:M,value:v}})=>{d({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:M,value:v})},[]);return e.createElement(Rn,{value:{availableConditions:t.conditions,modifiedData:c,onChangeConditions:C,onChangeSimpleCheckbox:S,onChangeParentCheckbox:W,onChangeCollectionTypeLeftActionRowCheckbox:m,onChangeCollectionTypeGlobalActionCheckbox:g}},e.createElement(I.v,{id:"tabs",label:p({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"})},e.createElement(b.m,null,qn.map(M=>e.createElement(b.O,{key:M.id},p({id:M.labelId,defaultMessage:M.defaultMessage})))),e.createElement(P.n,{style:{position:"relative"}},e.createElement(P.x,null,e.createElement(Et,{layout:l.collectionTypes,kind:"collectionTypes",isFormDisabled:n})),e.createElement(P.x,null,e.createElement(Et,{layout:l.singleTypes,kind:"singleTypes",isFormDisabled:n})),e.createElement(P.x,null,e.createElement(Pt,{layout:l.plugins,kind:"plugins",isFormDisabled:n})),e.createElement(P.x,null,e.createElement(Pt,{layout:l.settings,kind:"settings",isFormDisabled:n})))))});nt.defaultProps={permissions:[],layout:{conditions:[],sections:{collectionTypes:{},singleTypes:{actions:[]},settings:[],plugins:[]}}},nt.propTypes={layout:o().object,isFormDisabled:o().bool.isRequired,permissions:o().array};const _n=(0,e.memo)(nt)},92100:(Y,Z,r)=>{"use strict";r.r(Z),r.d(Z,{default:()=>U});var e=r(67294),E=r(5458),o=r(16550),T=r(87751),I=r(185),b=r(53979),P=r(11047),R=r(29728),x=r(49066),B=r(41580),j=r(41054),F=r(67109),y=r(27361),u=r.n(y),N=r(86896),Q=r(18280),z=r(75515),he=r(11276),A=r(74571),X=r(16364),me=r(61467),h=r(45697),q=r.n(h);const w=({disabled:re,role:O,values:$,errors:_,onChange:se,onBlur:de})=>{const{formatMessage:te}=(0,N.Z)();return e.createElement(B.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(P.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(P.k,{justifyContent:"space-between"},e.createElement(B.x,null,e.createElement(B.x,null,e.createElement(z.Z,{fontWeight:"bold"},O?O.name:te({id:"global.details",defaultMessage:"Details"}))),e.createElement(B.x,null,e.createElement(z.Z,{textColor:"neutral500",variant:"pi"},O?O.description:te({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(R.z,{disabled:!0,variant:"secondary"},te({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:O.usersCount}))),e.createElement(he.r,{gap:4},e.createElement(A.P,{col:6},e.createElement(X.o,{disabled:re,name:"name",error:_.name&&te({id:_.name}),label:te({id:"global.name",defaultMessage:"Name"}),onChange:se,onBlur:de,value:$.name||""})),e.createElement(A.P,{col:6},e.createElement(me.g,{disabled:re,label:te({id:"global.description",defaultMessage:"Description"}),id:"description",error:_.name&&te({id:_.name}),onChange:se,onBlur:de},$.description||"")))))};w.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},w.propTypes={disabled:q().bool,errors:q().object.isRequired,onBlur:q().func.isRequired,onChange:q().func.isRequired,role:q().object,values:q().object};const ee=w;var ie=r(95428),le=r(87561);const ye=le.Ry().shape({name:le.Z_().required(E.I0.required)}),Ce=()=>{const re=(0,E.lm)(),{formatMessage:O}=(0,N.Z)(),{params:{id:$}}=(0,o.$B)("/settings/roles/:id"),[_,se]=(0,e.useState)(!1),de=(0,e.useRef)(),{lockApp:te,unlockApp:ue}=(0,E.o1)(),{trackUsage:Ie}=(0,E.rS)(),{isLoading:Re,data:Ze}=(0,ie.U_)($),{role:fe,permissions:Oe,isLoading:$e,onSubmitSucceeded:Be}=(0,ie.Dq)($),{put:De}=(0,E.kY)(),Ve=async ae=>{try{te(),se(!0);const{permissionsToSend:V,didUpdateConditions:K}=de.current.getPermissions();await De(`/admin/roles/${$}`,ae),fe.code!=="strapi-super-admin"&&(await De(`/admin/roles/${$}/permissions`,{permissions:V}),K&&Ie("didUpdateConditions")),de.current.setFormAfterSubmit(),Be({name:ae.name,description:ae.description}),re({type:"success",message:{id:"notification.success.saved"}})}catch(V){console.error(V.response);const K=u()(V,"response.payload.message","An error occured"),Ee=u()(V,"response.payload.data.permissions[0]",K);re({type:"warning",message:Ee})}finally{se(!1),ue()}},je=fe.code==="strapi-super-admin";return e.createElement(I.o,null,e.createElement(E.SL,{name:"Roles"}),e.createElement(j.J9,{enableReinitialize:!0,initialValues:{name:fe.name,description:fe.description},onSubmit:Ve,validationSchema:ye,validateOnChange:!1},({handleSubmit:ae,values:V,errors:K,handleChange:Ee,handleBlur:ve})=>e.createElement("form",{onSubmit:ae},e.createElement(b.T,{primaryAction:e.createElement(P.k,{gap:2},e.createElement(R.z,{disabled:fe.code==="strapi-super-admin",onClick:ae,loading:_,size:"L"},O({id:"global.save",defaultMessage:"Save"}))),title:O({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:O({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(E.rU,{startIcon:e.createElement(F.Z,null),to:"/settings/roles"},O({id:"global.back",defaultMessage:"Back"}))}),e.createElement(x.D,null,e.createElement(P.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(ee,{isLoading:$e,disabled:je,errors:K,values:V,onChange:Ee,onBlur:ve,role:fe}),!Re&&!$e?e.createElement(B.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(Q.Z,{isFormDisabled:je,permissions:Oe,ref:de,layout:Ze})):e.createElement(B.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(E.dO,null)))))))},U=()=>{const re=(0,e.useMemo)(()=>({read:T.Z.settings.roles.read,update:T.Z.settings.roles.update}),[]),{isLoading:O,allowedActions:{canRead:$,canUpdate:_}}=(0,E.ss)(re);return O?e.createElement(E.dO,null):!$&&!_?e.createElement(o.l_,{to:"/"}):e.createElement(Ce,null)}},44174:Y=>{function Z(r,e,E,o){for(var T=-1,I=r==null?0:r.length;++T<I;){var b=r[T];e(o,b,E(b),r)}return o}Y.exports=Z},81119:(Y,Z,r)=>{var e=r(89881);function E(o,T,I,b){return e(o,function(P,R,x){T(b,P,I(P),x)}),b}Y.exports=E},55189:(Y,Z,r)=>{var e=r(44174),E=r(81119),o=r(67206),T=r(1469);function I(b,P){return function(R,x){var B=T(R)?e:E,j=P?P():{};return B(R,b,o(x,2),j)}}Y.exports=I},42348:(Y,Z,r)=>{var e=r(21078),E=1/0;function o(T){var I=T==null?0:T.length;return I?e(T,E):[]}Y.exports=o},7739:(Y,Z,r)=>{var e=r(89465),E=r(55189),o=Object.prototype,T=o.hasOwnProperty,I=E(function(b,P,R){T.call(b,R)?b[R].push(P):e(b,R,[P])});Y.exports=I},48734:(Y,Z,r)=>{"use strict";r.d(Z,{U:()=>F,y:()=>B});var e=r(85893),E=r(67294),o=r(88972),T=r(13819),I=r(2504),b=r(75515),P=r(11047),R=r(41580);const x=({theme:y,expanded:u,variant:N,disabled:Q,error:z})=>z?`1px solid ${y.colors.danger600} !important`:Q?`1px solid ${y.colors.neutral150}`:u?`1px solid ${y.colors.primary600}`:N==="primary"?`1px solid ${y.colors.neutral0}`:`1px solid ${y.colors.neutral100}`,B=(0,o.ZP)(b.Z)``,j=(0,o.ZP)(R.x)`
  border: ${x};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:y})=>y.colors.primary600};

    ${B} {
      color: ${({theme:y,expanded:u})=>u?void 0:y.colors.primary700};
    }

    ${b.Z} {
      color: ${({theme:y,expanded:u})=>u?void 0:y.colors.primary600};
    }

    & > ${P.k} {
      background: ${({theme:y})=>y.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:y})=>y.colors.primary200};
    }
  }
`,F=({children:y,disabled:u=!1,error:N,expanded:Q=!1,hasErrorMessage:z=!0,id:he,onToggle:A,toggle:X,size:me="M",variant:h="primary",shadow:q})=>{const w=(0,I.M)(he),ee=E.useMemo(()=>({expanded:Q,onToggle:A,toggle:X,id:w,size:me,variant:h,disabled:u}),[u,Q,w,A,me,X,h]);return(0,e.jsxs)(T.S.Provider,{value:ee,children:[(0,e.jsx)(j,{"data-strapi-expanded":Q,disabled:u,"aria-disabled":u,expanded:Q,hasRadius:!0,variant:h,error:N,shadow:q,children:y}),N&&z&&(0,e.jsx)(R.x,{paddingTop:1,children:(0,e.jsx)(b.Z,{variant:"pi",textColor:"danger600",children:N})})]})}},63081:(Y,Z,r)=>{"use strict";r.d(Z,{v:()=>T});var e=r(85893),E=r(13819),o=r(41580);const T=({children:I,...b})=>{const{expanded:P,id:R}=(0,E.A)();if(!P)return null;const x=`accordion-content-${R}`,B=`accordion-label-${R}`,j=`accordion-desc-${R}`;return(0,e.jsx)(o.x,{role:"region",id:x,"aria-labelledby":B,"aria-describedby":j,...b,children:I})}},13819:(Y,Z,r)=>{"use strict";r.d(Z,{A:()=>o,S:()=>E});var e=r(67294);const E=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),o=()=>(0,e.useContext)(E)},74756:(Y,Z,r)=>{"use strict";r.d(Z,{B:()=>y});var e=r(85893),E=r(12645),o=r(88972),T=r(48734),I=r(13819);const b=({expanded:u,disabled:N,variant:Q})=>{let z="neutral100";return u?z="primary100":N?z="neutral150":Q==="primary"&&(z="neutral0"),z};var P=r(39785),R=r(52624),x=r(11047),B=r(75515);const j=(0,o.ZP)(P.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:u,expanded:N})=>N?u.colors.primary600:u.colors.neutral500};
    }
  }
`,F=(0,o.ZP)(x.k)`
  min-height: ${({theme:u,size:N})=>u.sizes.accordions[N]};
  border-radius: ${({theme:u,expanded:N})=>N?`${u.borderRadius} ${u.borderRadius} 0 0`:u.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:u})=>u.colors.primary600};
      }
    }
  }
`,y=({title:u,description:N,as:Q="span",togglePosition:z="right",action:he,...A})=>{const{onToggle:X,toggle:me,expanded:h,id:q,size:w,variant:ee,disabled:ie}=(0,I.A)(),le=`accordion-content-${q}`,Se=`accordion-label-${q}`,ye=`accordion-desc-${q}`,ce=w==="M"?6:4,Ce=w==="M"?ce:ce-2,Me=b({expanded:h,disabled:ie,variant:ee}),U={as:Q,fontWeight:w==="S"?"bold":void 0,id:Se,textColor:h?"primary600":"neutral700",ellipsis:!0,variant:w==="M"?"delta":void 0},re=h?"primary600":"neutral600",O=h?"primary200":"neutral200",$=w==="M"?`${32/16}rem`:`${24/16}rem`,_=()=>{ie||(me&&!X?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),me()):X&&X())},se=(0,e.jsx)(x.k,{justifyContent:"center",borderRadius:"50%",height:$,width:$,transform:h?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:O,cursor:ie?"not-allowed":"pointer",onClick:_,shrink:0,children:(0,e.jsx)(R.J,{as:E.Z,width:w==="M"?`${11/16}rem`:`${8/16}rem`,color:h?"primary600":"neutral600"})});return(0,e.jsx)(F,{paddingBottom:Ce,paddingLeft:ce,paddingRight:ce,paddingTop:Ce,background:Me,expanded:h,size:w,justifyContent:"space-between",cursor:ie?"not-allowed":"",children:(0,e.jsxs)(x.k,{gap:3,flex:1,maxWidth:"100%",children:[z==="left"&&se,(0,e.jsx)(j,{onClick:_,"aria-disabled":ie,"aria-expanded":h,"aria-controls":le,"aria-labelledby":Se,"data-strapi-accordion-toggle":!0,expanded:h,type:"button",flex:1,minWidth:0,...A,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(T.y,{...U,children:u}),N&&(0,e.jsx)(B.Z,{as:"p",id:ye,textColor:re,children:N})]})}),z==="right"&&(0,e.jsxs)(x.k,{gap:3,children:[se,he]}),z==="left"&&he]})})}},2407:(Y,Z,r)=>{"use strict";r.d(Z,{$:()=>x,O:()=>B});var e=r(85893),E=r(16405),o=r(88972),T=r(63237),I=r(11047),b=r(41580),P=r(75515);const R=(0,o.ZP)(I.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:j})=>j.colors.neutral500};
    }
  }
  :last-of-type ${b.x} {
    display: none;
  }
  :last-of-type ${P.Z} {
    color: ${({theme:j})=>j.colors.neutral800};
    font-weight: ${({theme:j})=>j.fontWeights.bold};
  }
`,x=({children:j})=>(0,e.jsxs)(R,{inline:!0,as:"li",children:[(0,e.jsx)(P.Z,{variant:"pi",textColor:"neutral600",children:j}),(0,e.jsx)(b.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3,children:(0,e.jsx)(E.Z,{})})]});x.displayName="Crumb";const B=({children:j,label:F,...y})=>(0,e.jsxs)(I.k,{...y,children:[(0,e.jsx)(T.T,{children:F}),(0,e.jsx)("ol",{"aria-hidden":!0,children:j})]});B.displayName="Breadcrumbs"},38953:(Y,Z,r)=>{"use strict";r.d(Z,{Q:()=>T});var e=r(85893),E=r(88972),o=r(67730);const T=({options:b,...P})=>(0,e.jsx)(o.NU,{...P,children:b.map(R=>"children"in R?(0,e.jsx)(o.Ab,{label:R.label,values:R.children.map(x=>x.value.toString()),children:R.children.map(x=>(0,e.jsx)(I,{value:x.value,children:x.label},x.value))},R.label):(0,e.jsx)(o.ML,{value:R.value,children:R.label},R.value))}),I=(0,E.ZP)(o.ML)`
  padding-left: ${({theme:b})=>b.spaces[7]};
`}}]);
