(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e14cc"],{"7a9e":function(e,t,a){"use strict";a.r(t);var r=a("7a23"),n={id:"account-page"},s={key:0,id:"loginForm"},o=Object(r["g"])("h1",null,"Login",-1),l=Object(r["g"])("small",{class:"formHelp"}," (Form is prefilled for demonstration purposes; remove in final application) ",-1),i=Object(r["f"])(" Email: "),c={key:0,class:"negativeFeedback"},d=Object(r["f"])(" Password: "),u={key:0,class:"negativeFeedback"},p={key:0};function b(e,t,a,b,j,O){return Object(r["p"])(),Object(r["d"])("div",n,[O.user?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("div",s,[o,l,Object(r["g"])("div",null,[Object(r["g"])("label",null,[i,Object(r["F"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return j.data.email=e}),onBlur:t[2]||(t[2]=function(){return O.validate&&O.validate.apply(O,arguments)}),"data-test":"email-input"},null,544),[[r["B"],j.data.email]])]),j.errors&&j.errors.email?(Object(r["p"])(),Object(r["d"])("div",c," Please check your email. ")):Object(r["e"])("",!0)]),Object(r["g"])("div",null,[Object(r["g"])("label",null,[d,Object(r["F"])(Object(r["g"])("input",{type:"password","onUpdate:modelValue":t[3]||(t[3]=function(e){return j.data.password=e}),onBlur:t[4]||(t[4]=function(){return O.validate&&O.validate.apply(O,arguments)}),"data-test":"password-input"},null,544),[[r["B"],j.data.password]])]),j.errors&&j.errors.password?(Object(r["p"])(),Object(r["d"])("div",u," Please check your password. ")):Object(r["e"])("",!0)]),!j.errors||j.errors.email||j.errors.password?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("ul",p,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(j.errors,(function(e,t){return Object(r["p"])(),Object(r["d"])("li",{class:"negativeFeedback",key:t},Object(r["y"])(e),1)})),128))])),Object(r["g"])("button",{onClick:t[5]||(t[5]=function(){return O.login&&O.login.apply(O,arguments)}),disabled:j.errors,id:"loginButton","data-test":"login-button"}," Login ",8,["disabled"])]))])}var j=a("0091"),O=a("1c4a"),f=a.n(O),g={data:function(){return{data:{email:"jill@harvard.edu",password:"asdfasdf"},errors:null}},computed:{user:function(){return this.$store.state.user}},methods:{validate:function(){var e=new f.a(this.data,{email:"required",password:"required"});return e.fails()?this.errors=e.errors.all():this.errors=null,e.passes()},login:function(){var e=this;j["a"].post("login",this.data).then((function(t){console.log(t),t.data.authenticated?(e.$store.commit("setUser",t.data.user),e.$router.push("/favorite")):e.errors=t.data.errors}))}}};g.render=b;t["default"]=g}}]);
//# sourceMappingURL=chunk-2d0e14cc.723fd6b0.js.map