(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-df0516fe"],{"07c7":function(t,e,i){t.exports=i.p+"img/monochrome-black-and-white-acrylic-liquid-art-shams-0.75a53e50.jpg"},"0c8f":function(t,e,i){t.exports=i.p+"img/image-not-found.690b1894.jpg"},3297:function(t,e,i){t.exports=i.p+"img/bright-mandala-pastel-acrylic-liquid-art-shams-0.98e3a90b.jpg"},"57f9":function(t,e,i){t.exports=i.p+"img/bright-mandala-pastel-acrylic-liquid-art-folding-stools-0.c4b00855.jpg"},"5d94":function(t,e,i){t.exports=i.p+"img/trendy-acrylic-liquid-art-with-colors-of-the-year-2021-folding-stools-0.e8e8212c.jpg"},"628a":function(t,e,i){var a={"./bright-mandala-pastel-acrylic-liquid-art-folding-stools-0.jpg":"57f9","./bright-mandala-pastel-acrylic-liquid-art-shams-0.jpg":"3297","./bright-spring-pastel-acrylic-liquid-art-cutting-board-0.jpg":"a792","./bright-spring-pastel-acrylic-liquid-art-serving-trays-0.jpg":"93e0","./marble-blue-and-white-acrylic-liquid-art-coasters-0.jpg":"bd31","./marble-blue-and-white-acrylic-liquid-art-travel-mugs-0.jpg":"aaee","./monochrome-black-and-white-acrylic-liquid-art-coasters-0.jpg":"f600","./monochrome-black-and-white-acrylic-liquid-art-shams-0.jpg":"07c7","./monochrome-blue-and-white-acrylic-liquid-art-cutting-board-0.jpg":"dcf9","./monochrome-blue-and-white-acrylic-liquid-art-serving-trays-0.jpg":"9263","./trendy-acrylic-liquid-art-with-colors-of-the-year-2021-folding-stools-0.jpg":"5d94","./trendy-acrylic-liquid-art-with-colors-of-the-year-2021-travel-mugs-0.jpg":"9c2c"};function r(t){var e=o(t);return i(e)}function o(t){if(!i.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="628a"},"7d16":function(t,e,i){"use strict";i.r(e);i("b0c0");var a=i("7a23"),r={key:0},o={"data-test":"welcome-message"},c={id:"favorites"},n=Object(a["g"])("h2",null,"Your Favorites",-1),s={key:0},u={class:"posts"},d={key:1,class:"noUser"},l=Object(a["f"])(" Please "),p=Object(a["f"])("log in "),f=Object(a["f"])(" or "),b=Object(a["f"])("sign up "),g=Object(a["f"])(" to add and see your favorites ");function v(t,e,i,v,h,j){var m=Object(a["w"])("show-post"),y=Object(a["w"])("fav-buttons"),O=Object(a["w"])("router-link");return Object(a["p"])(),Object(a["d"])("div",null,[j.user?(Object(a["p"])(),Object(a["d"])("div",r,[Object(a["g"])("h1",o,"Hi, "+Object(a["y"])(j.user.name)+"!",1),Object(a["g"])("div",c,[n,h.favorites&&0==h.favorites.length?(Object(a["p"])(),Object(a["d"])("p",s,"No favorites yet.")):Object(a["e"])("",!0),Object(a["g"])("div",u,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(h.favorites,(function(t){return Object(a["p"])(),Object(a["d"])(O,{class:"show-post",to:"/post/"+t.id,key:t.id},{default:Object(a["E"])((function(){return[Object(a["g"])(m,{post:t},null,8,["post"]),Object(a["g"])(y,{post:t},null,8,["post"])]})),_:2},1032,["to"])})),128))])])])):Object(a["e"])("",!0),j.user?Object(a["e"])("",!0):(Object(a["p"])(),Object(a["d"])("div",d,[l,Object(a["g"])(O,{to:"/login"},{default:Object(a["E"])((function(){return[p]})),_:1}),f,Object(a["g"])(O,{to:"/signup"},{default:Object(a["E"])((function(){return[b]})),_:1}),g]))])}i("d81d");var h=i("0091"),j=i("88e5"),m=i("bf0d"),y={components:{"show-post":j["a"],"fav-buttons":m["a"]},data:function(){return{favorites:[]}},computed:{user:function(){return this.$store.state.user},posts:function(){return this.$store.state.posts}},methods:{loadFavorites:function(){var t=this;this.user&&h["a"].get("favoritePost/query?user_id="+this.user.id).then((function(e){console.log(e),t.favorites=e.data.favoritePost.map((function(e){return t.$store.getters.getPostById(e.post_id)}))}))}},watch:{user:function(){this.loadFavorites()}},mounted:function(){this.loadFavorites()}};y.render=v;e["default"]=y},"88e5":function(t,e,i){"use strict";var a=i("7a23"),r=Object(a["G"])("data-v-49b33a2c");Object(a["s"])("data-v-49b33a2c");var o={"data-test":"post-title"};Object(a["q"])();var c=r((function(t,e,i,r,c,n){return Object(a["p"])(),Object(a["d"])("div",null,[Object(a["g"])("h3",o,Object(a["y"])(i.post.title),1),Object(a["g"])("img",{class:"pic",src:n.imgSrc,"data-test":"post-image-"+i.post.sku},null,8,["src","data-test"])])})),n={component:{},props:{post:{type:Object}},computed:{imgSrc:function(){try{return i("628a")("./"+this.post.sku+"-0.jpg")}catch(t){return i("0c8f")}}}};i("fa30");n.render=c,n.__scopeId="data-v-49b33a2c";e["a"]=n},9263:function(t,e,i){t.exports=i.p+"img/monochrome-blue-and-white-acrylic-liquid-art-serving-trays-0.d9174263.jpg"},"93e0":function(t,e,i){t.exports=i.p+"img/bright-spring-pastel-acrylic-liquid-art-serving-trays-0.7e43db8b.jpg"},"9c2c":function(t,e,i){t.exports=i.p+"img/trendy-acrylic-liquid-art-with-colors-of-the-year-2021-travel-mugs-0.80594a4c.jpg"},a792:function(t,e,i){t.exports=i.p+"img/bright-spring-pastel-acrylic-liquid-art-cutting-board-0.e8bdd17d.jpg"},aaee:function(t,e,i){t.exports=i.p+"img/marble-blue-and-white-acrylic-liquid-art-travel-mugs-0.d9a24f59.jpg"},b0c0:function(t,e,i){var a=i("83ab"),r=i("9bf2").f,o=Function.prototype,c=o.toString,n=/^\s*function ([^ (]*)/,s="name";a&&!(s in o)&&r(o,s,{configurable:!0,get:function(){try{return c.call(this).match(n)[1]}catch(t){return""}}})},bd31:function(t,e,i){t.exports=i.p+"img/marble-blue-and-white-acrylic-liquid-art-coasters-0.82b57c2d.jpg"},bf0d:function(t,e,i){"use strict";var a=i("7a23");function r(t,e,i,r,o,c){return Object(a["p"])(),Object(a["d"])("div",null,[o.isFav?Object(a["e"])("",!0):(Object(a["p"])(),Object(a["d"])("button",{key:0,onClick:e[1]||(e[1]=function(){return c.addToFav&&c.addToFav.apply(c,arguments)})},"❤︎ add to fav")),o.isFav?(Object(a["p"])(),Object(a["d"])("button",{key:1,onClick:e[2]||(e[2]=function(){return c.removeFromFav&&c.removeFromFav.apply(c,arguments)})},"✘ remove from fav")):Object(a["e"])("",!0)])}var o=i("0091"),c={props:{post:{type:Object}},data:function(){return{isFav:!1,favId:null}},computed:{posts:function(){return this.$store.state.posts},user:function(){return this.$store.state.user}},methods:{isFavorite:function(){var t=this;o["a"].get("/favoritePost/query?post_id="+this.post.id+"&user_id="+this.user.id).then((function(e){e.data.favoritePost.length>0&&(t.favId=e.data.favoritePost[0].id,t.isFav=!0)}))},addToFav:function(){var t=this;o["a"].post("/favoritePost",{post_id:this.post.id,user_id:this.user.id}).then((function(e){e.data.success&&(t.isFav=!0,t.favId=e.data.favoritePost.id,t.$router.push("/favorite"))}))},removeFromFav:function(){var t=this;o["a"].delete("/favoritePost/"+this.favId).then((function(e){e.data.success&&(t.isFav=!1,t.favId=null,t.$router.push("/favorite"))}))}},mounted:function(){this.isFavorite()}};c.render=r;e["a"]=c},d81d:function(t,e,i){"use strict";var a=i("23e7"),r=i("b727").map,o=i("1dde"),c=o("map");a({target:"Array",proto:!0,forced:!c},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},dcf9:function(t,e,i){t.exports=i.p+"img/monochrome-blue-and-white-acrylic-liquid-art-cutting-board-0.4cf7942d.jpg"},e9e9:function(t,e,i){},f600:function(t,e,i){t.exports=i.p+"img/monochrome-black-and-white-acrylic-liquid-art-coasters-0.00aa4546.jpg"},fa30:function(t,e,i){"use strict";i("e9e9")}}]);
//# sourceMappingURL=chunk-df0516fe.17058916.js.map