(this["webpackJsonpface-recognition"]=this["webpackJsonpface-recognition"]||[]).push([[0],{328:function(e,t,n){"use strict";n.r(t);var a=n(9),s=n.n(a),i=n(45),o=n.n(i),c=(n(85),n(20)),r=n(21),l=n(23),u=n(22),d=(n(86),n(2)),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){fetch("https://quiet-meadow-82973.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={signInEmail:"",signInPassword:""},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.onRouteChange;return Object(d.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(d.jsx)("main",{className:"pa4 black-80",children:Object(d.jsxs)("div",{className:"measure",children:[Object(d.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(d.jsx)("legend",{className:"f2 fw6 ph0 mh0",children:"Sign In"}),Object(d.jsxs)("div",{className:"mt3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(d.jsx)("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",autoComplete:"autoComplete"})]}),Object(d.jsxs)("div",{className:"mv3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",autoComplete:"autoComplete",onChange:this.onPasswordChange})]})]}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in",autoComplete:"autoComplete"})}),Object(d.jsx)("div",{className:"lh-copy mt3",children:Object(d.jsx)("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer",children:"Register"})})]})})})}}]),n}(s.a.Component),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitSignIn=function(){fetch("https://quiet-meadow-82973.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password,name:a.state.name})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={email:"",password:"",name:""},a}return Object(r.a)(n,[{key:"render",value:function(){return Object(d.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(d.jsx)("main",{className:"pa4 black-80",children:Object(d.jsxs)("div",{className:"measure",children:[Object(d.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(d.jsx)("legend",{className:"f2 fw6 ph0 mh0",children:"Register"}),Object(d.jsxs)("div",{className:"mt3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(d.jsx)("input",{onChange:this.onNameChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",autoComplete:"autoComplete"})]}),Object(d.jsxs)("div",{className:"mt3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(d.jsx)("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",autoComplete:"autoComplete"})]}),Object(d.jsxs)("div",{className:"mv3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",autoComplete:"autoComplete"})]})]}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register",autoComplete:"autoComplete"})})]})})})}}]),n}(s.a.Component),h=function(e){var t=e.onRouteChange;return e.isSignin?Object(d.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(d.jsx)("p",{onClick:function(){return t("logout")},className:"f3 link dim black underline pa3 pointer",children:"Log out"})}):Object(d.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(d.jsx)("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer",children:"Sign In"}),Object(d.jsx)("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer",children:"Register"})]})},b=n(79),j=n.n(b),g=(n(88),n.p+"static/media/brain.04dd9926.png"),f=function(){return Object(d.jsx)("div",{className:"ma4 mt0 logo",children:Object(d.jsx)(j.a,{className:"Tilt br2 shadow-2",options:{max:25},style:{height:100,width:100},children:Object(d.jsxs)("div",{className:"Tilt-inner pa3",children:[Object(d.jsx)("img",{alt:"brain",src:g,style:{paddingTop:"5px"}})," "]})})})},x=(n(89),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"This Magic Brain will detect faces in your pictures, Give it a link"}),Object(d.jsx)("div",{className:"center",children:Object(d.jsxs)("div",{className:"pa4 br3 shadow-5 center form",children:[Object(d.jsx)("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t}),Object(d.jsx)("button",{className:"w-30 grow f4 link ph3 pv2 dib white",style:{backgroundColor:"#f99f81",border:"1px solid orange"},onClick:n,children:"Detect"})]})})]})}),O=(n(90),function(e){var t=e.imageUrl,n=e.faceFrame,a=e.concepts,s=a.value&&a.value.toFixed(2);return Object(d.jsx)("div",{className:"center ma",children:Object(d.jsxs)("div",{className:"absolute mt2",children:[Object(d.jsx)("img",{id:"inputimage",alt:"",src:t,width:"580px",height:"auto"}),Object(d.jsx)("div",{className:"faceBox",style:{inset:"".concat(n.topRow,"px ").concat(n.rightCol,"px ").concat(n.bottomRow,"px ").concat(n.leftCol,"px")},children:Object(d.jsxs)("div",{className:"concepts",children:[Object(d.jsx)("span",{children:a.name}),Object(d.jsx)("span",{children:s})]})})]})})}),v=function(e){var t=e.name,n=e.entries;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"white f4",children:Object(d.jsx)("p",{children:"".concat(t,", Your current entry count is...")})}),Object(d.jsx)("div",{className:"white f3",children:n})]})},w=n(80),C=n.n(w),N={particles:{number:30,density:{enable:!0,value_area:800}}},y={urlInput:"",imageUrl:"",faceFrame:{},concepts:{},route:"signin",isSignin:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.eamil,entries:t.entries,joined:t.joined}})},e.onInputChange=function(t){console.log(t.target.value),e.setState({urlInput:t.target.value})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputimage"),a=Number(n.width),s=Number(n.height);return{leftCol:t.left_col*a,topRow:t.top_row*s,rightCol:a-t.right_col*a,bottomRow:s-t.bottom_row*s}},e.displayFaceFrame=function(t){e.setState({faceFrame:t})},e.getConcepts=function(t){var n=t.outputs[0].data.regions[0].data.concepts[0];e.setState({concepts:n})},e.onButtonSubmit=function(){console.log("click"),e.setState({imageUrl:e.state.urlInput}),fetch("https://quiet-meadow-82973.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.urlInput})}).then((function(e){return e.json()})).then((function(t){return t&&fetch("https://quiet-meadow-82973.herokuapp.com/image",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})),e.getConcepts(t),e.calculateFaceLocation(t)})).then((function(t){e.displayFaceFrame(t)})).catch((function(e){console.log("There are some errors",e)}))},e.onRouteChange=function(t){"logout"===t?e.setState(y):"home"===t&&e.setState({isSignin:!0}),e.setState({route:t})},e.state=y,e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.route,a=t.imageUrl,s=t.concepts,i=t.isSignin,o=t.faceFrame;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(C.a,{className:"particles",params:N}),Object(d.jsx)(h,{onRouteChange:this.onRouteChange,isSignin:i}),Object(d.jsx)(f,{}),function(t){return"home"===t?Object(d.jsxs)("div",{children:[Object(d.jsx)(v,{name:e.state.user.name,entries:e.state.user.entries}),Object(d.jsx)(x,{onInputChange:e.onInputChange,onButtonSubmit:e.onButtonSubmit}),Object(d.jsx)(O,{imageUrl:a,faceFrame:o,concepts:s})]}):"register"===t?Object(d.jsx)(p,{loadUser:e.loadUser,onRouteChange:e.onRouteChange}):Object(d.jsx)(m,{loadUser:e.loadUser,onRouteChange:e.onRouteChange})}(n)]})}}]),n}(a.Component),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,329)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),i(e),o(e)}))};n(327);o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),k()},85:function(e,t,n){},86:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){}},[[328,1,2]]]);
//# sourceMappingURL=main.784dfd53.chunk.js.map