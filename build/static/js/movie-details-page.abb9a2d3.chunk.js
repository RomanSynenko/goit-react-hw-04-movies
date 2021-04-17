(this.webpackJsonproute=this.webpackJsonproute||[]).push([[5],{104:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return x}));var n=r(44),a=r.n(n),c=r(54),o=r(45),i=r(38),s=r(39),u=r(41),p=r(40),l=r(0),f=r(1),h=r(42),v=r(53),d=r(43),b=r(19),j=[{name:"Cast",path:"/cast",exact:!0,visible:!0,component:Object(l.lazy)((function(){return r.e(2).then(r.bind(null,101))}))},{name:"Reviews",path:"/reviews",exact:!0,visible:!0,component:Object(l.lazy)((function(){return r.e(6).then(r.bind(null,102))}))}],m=r(47),O=(r(99),r(2)),y=!0,x=function(e){Object(u.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={genres:[],original_title:"",overview:"",poster_path:"",release_date:"",vote_average:"",vote_count:"",from:"",query:"",renderBlock:!1},e.handleGoBack=function(){var t=e.state,r=t.from,n=t.query,a=e.props.history;r&&n?a.push({pathname:r,search:"query=".concat(n),query:n}):a.push("/")},e}return Object(s.a)(r,[{key:"componentDidMount",value:function(){var e=Object(o.a)(a.a.mark((function e(){var t,r=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y=!0,t=this.props.match.params.movieId,h.a.fetchMoviesDetail(t).then((function(e){var t,n;y&&r.setState(Object(c.a)(Object(c.a)({},e),{},{from:null===(t=r.props.location.state)||void 0===t?void 0:t.from,query:null===(n=r.props.location.state)||void 0===n?void 0:n.query}))})).finally((function(){y&&r.setState({renderBlock:!0})}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){y=!1}},{key:"render",value:function(){var e=this,t=this.state,r=t.popularity,n=t.genres,a=t.original_title,o=t.overview,i=t.poster_path,s=t.release_date,u=t.vote_average,p=t.backdrop_path,h=t.renderBlock,y=this.props.match.params.movieId;console.log();var x="https://image.tmdb.org/t/p/original";return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"Back_button",children:Object(O.jsx)(v.a,{handleGoBack:this.handleGoBack,text:"Go back"})}),h&&Object(O.jsxs)("div",{className:"movie-section",style:{background:"url(".concat(x).concat(p,") 0 0 / cover")},children:[Object(O.jsxs)("div",{className:"movie-section_image-block",children:[Object(O.jsx)("img",{src:i?"".concat(x).concat(i):d.a,alt:"foto",width:"400"}),Object(O.jsxs)("p",{children:["Popularity: ",r]}),Object(O.jsxs)("p",{children:["Stars: ",u]}),Object(O.jsxs)("p",{children:["Ralease: ",s]}),Object(O.jsx)("h3",{children:"Genres"}),Object(O.jsx)("ul",{className:"genre_list",children:n.map((function(e){return Object(O.jsx)("li",{className:"genre_list-item",children:e.name},e.id)}))})]}),Object(O.jsxs)("div",{className:"movie-subscribe",children:[Object(O.jsx)("h2",{children:a}),Object(O.jsx)("p",{children:o}),Object(O.jsx)("p",{className:"movies-information-text",children:"Additional information"}),Object(O.jsx)(b.a,{routes:j,match:this.props.match.url}),Object(O.jsx)(l.Suspense,{fallback:Object(O.jsx)(m.a,{}),children:j.map((function(t){var r=t.path,n=t.component;return Object(O.jsx)(f.b,{path:"".concat(e.props.match.url).concat(r),render:function(e){return Object(O.jsx)(n,Object(c.a)({movieId:y},e))}},r)}))})]})]})]})}}]),r}(l.Component)},42:function(e,t,r){"use strict";var n=r(44),a=r.n(n),c=r(45),o=r(50),i=r.n(o),s=r(8),u=r.n(s);i.a.defaults.baseURL="https://api.themoviedb.org/3",i.a.defaults.params={api_key:"93638e3fbf6f3d3914a333647822b76d"};var p=function(){var e=Object(c.a)(a.a.mark((function e(){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/trending/movie/day");case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=t.page,e.prev=1,e.next=4,i.a.get("/search/movie",{params:{query:r,page:n}});case 4:return c=e.sent,o=c.data,e.abrupt("return",o);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/movie/".concat(t));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/movie/".concat(t,"/credits"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/movie/".concat(t,"/reviews"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();l.propTypes={query:u.a.string.isRequired,page:u.a.number.isRequired},f.propTypes={movieId:u.a.number.isRequired},h.propTypes={movieId:u.a.number.isRequired},v.propTypes={movieId:u.a.number.isRequired},t.a={fetchMoviesDay:p,fetchMoviesSearch:l,fetchMoviesDetail:f,fetchCast:h,fetchReviews:v}},43:function(e,t,r){"use strict";t.a=r.p+"static/media/defaultImage.a234994d.jpeg"},46:function(e,t,r){e.exports={Loader:"Loader_Loader__BIuQd"}},47:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r(38),a=r(39),c=r(41),o=r(40),i=r(0),s=r(48),u=r.n(s),p=(r(49),r(46)),l=r.n(p),f=r(2),h=function(e){Object(c.a)(r,e);var t=Object(o.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){return Object(f.jsx)(u.a,{className:l.a.Loader,type:"Puff",color:"#3f51b5",height:100,width:100})}}]),r}(i.Component)},51:function(e,t,r){},53:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r(0);var n=r(8),a=r.n(n),c=(r(51),r(2)),o=function(e){var t=e.handleGoBack,r=e.text;return Object(c.jsx)("button",{className:"Button",type:"button",onClick:t,children:r})};o.prototype={handleGoBack:a.a.func.isRequired,text:a.a.string.isRequired};var i=o},54:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"a",(function(){return c}))},99:function(e,t,r){}}]);
//# sourceMappingURL=movie-details-page.abb9a2d3.chunk.js.map