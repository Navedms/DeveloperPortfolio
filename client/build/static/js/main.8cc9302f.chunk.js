(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{42:function(e,t,a){e.exports=a(74)},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),l=a.n(o),s=a(8),c=a(3),i=a(14),u=a(38),m=a.n(u),p=a(39),d=a(2),h=a(4),f=a(5),v=a(6),E=a(7),g=a(15),k=a.n(g),b=a(40),w=a.n(b);var y=Object(c.b)((function(e){return{user:e.user}}))((function(e){var t=e.user,a=[{type:"navItem",icon:"home",text:"Home",link:"/",restricted:!1},{type:"navItem",icon:"user",text:"My Profile",link:"/user",restricted:!0},{type:"navItem",icon:"briefcase",text:"My Works",link:"/user/works",restricted:!0},{type:"navItem",icon:"upload",text:"Add Work",link:"/user/add-work",restricted:!0},{type:"navItem",icon:"sign-in",text:"Sign in",link:"/signin",restricted:!1,exclude:!0},{type:"navItem",icon:"sign-out",text:"Sign out",link:"/user/signout",restricted:!0},{type:"navItem",icon:"plus-circle",text:"Sign up",link:"/user/signup",restricted:!1,exclude:!0}],n=function(e,t){return r.a.createElement("div",{key:t,className:e.type},r.a.createElement(s.b,{to:e.link},r.a.createElement(k.a,{name:e.icon}),e.text))};return r.a.createElement("div",null,t.login?a.map((function(e,a){return t.login.isAuth?e.exclude?null:n(e,a):e.restricted?null:n(e,a)})):null)})),N=function(e){return r.a.createElement(w.a,{showNav:e.showNav,onHideNav:e.onHideNav,navStyle:{background:"#242424",maxWidth:"220px"}},r.a.createElement(y,null))},_=function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showNav:!1},e.onHideNav=function(){e.setState({showNav:!1})},e}return Object(f.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("header",null,r.a.createElement("div",{className:"open_nav"},r.a.createElement(k.a,{name:"bars",onClick:function(){return e.setState({showNav:!0})},className:"bars-icon"})),r.a.createElement(N,{showNav:this.state.showNav,onHideNav:function(){return e.onHideNav()}}),r.a.createElement(s.b,{to:"/",className:"logo"},"The ",r.a.createElement("span",null,"Developer")," Portfolios"))}}]),a}(n.Component),j=function(e){return r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement("div",null,e.children))},O=a(27),U=a(9),W=a.n(U);function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"asc",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=W.a.get("/api/portfolios?limit=".concat(e,"&skip=").concat(t,"&order=").concat(a)).then((function(e){return n?[].concat(Object(O.a)(n),Object(O.a)(e.data)):e.data}));return{type:"Get_Works",payload:r}}function C(e){return{type:"Get_Work",payload:W.a.get("/api/getportfolio?id=".concat(e)).then((function(e){return e.data}))}}function S(e){return{type:"Update_Work",payload:W.a.post("/api/portfolio_update",e).then((function(e){return e.data}))}}function I(e){return{type:"Delete_work",payload:W.a.delete("/api/portfolio_delete?id=".concat(e)).then((function(e){return e.data}))}}function L(e){var t=e.email,a=e.password;return{type:"User_Login",payload:W.a.post("/api/login",{email:t,password:a}).then((function(e){return e.data}))}}function R(e){return{type:"Add_portfolio",payload:W.a.post("/api/portfolio",e).then((function(e){return e.data}))}}function M(e){return{type:"Register_user",payload:W.a.post("/api/register",e).then((function(e){return e.data}))}}var A=function(e){return r.a.createElement(s.b,{to:"/work/".concat(e._id),className:"work_item"},r.a.createElement("div",{className:"work-top-wrap"},r.a.createElement("div",{className:"work-screenShot"},r.a.createElement("img",{alt:"work",src:e.imageUrl})),r.a.createElement("div",{className:"work_header_wrap"},r.a.createElement("div",{className:"work_header"},r.a.createElement("h2",null,e.workName)),r.a.createElement("div",{className:"work_author"},e.developerName," ",e.developerLastName))),r.a.createElement("div",{className:"work_items"},e.technologies.map((function(e,t){return t<7?r.a.createElement("div",{className:"work_bubble",key:t},e):7===t?r.a.createElement("div",{className:"work_bubble and-more",key:t},"& More"):null}))))},D=function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={hideLoadMore:!1},e.renderItems=function(e){return e.list?e.list.map((function(e){return r.a.createElement(A,Object.assign({},e,{key:e._id}))})):null},e.loadmore=function(){var t=e.props.portfolio.list.length;e.props.dispatch(x(3,t,"desc",e.props.portfolio.list)),e.hideLoadMore(t)},e.hideLoadMore=function(t){setTimeout((function(){e.props.portfolio.list.length===t&&e.setState({hideLoadMore:!0})}),100)},e.LoadMoreYesorNot=function(){return e.state.hideLoadMore?r.a.createElement("div",{className:"loadmore-2"},"There are no more posts to show right now..."):r.a.createElement("div",{className:"loadmore",onClick:e.loadmore},"Load More")},e}return Object(f.a)(a,[{key:"componentWillMount",value:function(){this.props.dispatch(x(4,0,"desc"))}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderItems(this.props.portfolio),this.LoadMoreYesorNot())}}]),a}(n.Component);var P=Object(c.b)((function(e){return{portfolio:e.portfolio}}))(D),F=function(){return r.a.createElement("div",null,r.a.createElement(P,null))},T=function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).renderWorks=function(e){return e?r.a.createElement("div",null,r.a.createElement("div",{className:"goback"},r.a.createElement(s.b,{to:"/"},r.a.createElement(k.a,{name:"arrow-left"}))),r.a.createElement("div",{className:"br_container"},r.a.createElement("div",{className:"br_header"},r.a.createElement("h2",null,e.workName),r.a.createElement("h5",null,e.developerName," ",e.developerLastName),r.a.createElement("div",{className:"br_site"},r.a.createElement("span",null,"Web site: "),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.siteURL},e.siteURL))),r.a.createElement("div",{className:"br_content-wrap"},r.a.createElement("div",{className:"br_photo"},r.a.createElement("img",{alt:"work",src:e.imageUrl})),r.a.createElement("div",{className:"br_text"},e.abstract)),r.a.createElement("div",{className:"br_box"},r.a.createElement("span",null,"Technologies:"),e.technologies?e.technologies.map((function(e,t){return r.a.createElement("div",{className:"left",key:t},e)})):null))):null},e}return Object(f.a)(a,[{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"Clear_Work",payload:{}})}},{key:"componentWillMount",value:function(){this.props.dispatch(C(this.props.match.params.id))}},{key:"render",value:function(){var e=this.props.portfolio.work;return r.a.createElement("div",null,this.renderWorks(e))}}]),a}(n.Component);var H=Object(c.b)((function(e){return{portfolio:e.portfolio}}))(T),G=function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",error:"",success:!1},e.submitForm=function(t){t.preventDefault(),e.props.dispatch(L(e.state))},e.handleInputEmail=function(t){e.setState({email:t.target.value})},e.handleInputPassword=function(t){e.setState({password:t.target.value})},e}return Object(f.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.user.login.isAuth&&this.props.history.push("/user")}},{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",{className:"rl_container"},r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("h2",null,"Sign in here"),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"email",placeholder:"Enter your mail",value:this.state.email,onChange:this.handleInputEmail})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"password",placeholder:"Enter your password",value:this.state.password,onChange:this.handleInputPassword})),r.a.createElement("button",{type:"submit"},"Log in"),r.a.createElement("div",{className:"error"},e.login?r.a.createElement("div",null,e.login.message):null)))}}]),a}(n.Component);var Y=Object(c.b)((function(e){return{user:e.user}}))(G),J=function(e,t){var a=function(a){Object(E.a)(o,a);var n=Object(v.a)(o);function o(){var e;Object(h.a)(this,o);for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).state={loading:!0},e}return Object(f.a)(o,[{key:"componentWillMount",value:function(){this.props.dispatch({type:"User_Auth",payload:W.a.get("/api/auth").then((function(e){return e.data}))})}},{key:"componentWillReceiveProps",value:function(e){this.setState({loading:!1}),e.user.login.isAuth?!1===t&&this.props.history.push("/user"):t&&this.props.history.push("/signin")}},{key:"render",value:function(){return this.state.loading?r.a.createElement("div",{className:"loader"},"Loading..."):r.a.createElement(e,Object.assign({},this.props,{user:this.props.user}))}}]),o}(n.Component);return Object(c.b)((function(e){return{user:e.user}}))(a)},B=function(e){var t=e.user.login;return r.a.createElement("div",{className:"user_container"},r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{alt:"avatar",src:"/images/avatar.png"})),r.a.createElement("div",{className:"nfo"},r.a.createElement("div",null,r.a.createElement("span",null,"Name:")," ",t.name),r.a.createElement("div",null,r.a.createElement("span",null,"Lastname:")," ",t.lastname),r.a.createElement("div",null,r.a.createElement("span",null,"Email:")," ",t.email)))},q=a(16),z=a.n(q),K=a(20),Q=a(1),V="https://api.cloudinary.com/v1_1/navedms/image/upload",X=function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={formdata:{workName:"",siteURL:"",technologies:"",selectedFile:null,preview:"/images/uploadicon.png",abstract:""}},e.showNewWork=function(e){return e.post?r.a.createElement("div",{className:"conf_link",id:"okMsgAdd"},"YES!! ",r.a.createElement(s.b,{to:"/work/".concat(e.portfolioId)},"Click here to see you'r new work!")):null},e.handelInput=function(t,a){var n=Object(Q.a)({},e.state.formdata);n[a]=t.target.value,e.setState({formdata:n})},e.handelInputScreen=function(t){var a=Object(Q.a)({},e.state.formdata);a.preview=URL.createObjectURL(t.target.files[0]),e.setState({formdata:a}),e.onUploadImage(t.target.files[0])},e.onUploadImage=function(){var t=Object(K.a)(z.a.mark((function t(a){var n,r,o,l;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("file",a),n.append("upload_preset","gsd2cwto"),t.prev=3,t.next=6,W.a.post(V,n);case 6:r=t.sent,o=r.data.secure_url,(l=Object(Q.a)({},e.state.formdata)).selectedFile=o,e.setState({formdata:l}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),console.error(t.t0);case 16:case 17:case"end":return t.stop()}}),t,null,[[3,13]])})));return function(e){return t.apply(this,arguments)}}(),e.submitForm=function(t){t.preventDefault();var a=e.state.formdata.technologies.split(", ");e.props.dispatch(R({workName:e.state.formdata.workName,siteURL:e.state.formdata.siteURL,imageUrl:e.state.formdata.selectedFile,abstract:e.state.formdata.abstract,technologies:a,developerId:e.props.user.login.id,developerName:e.props.user.login.name,developerLastName:e.props.user.login.lastname}))},e}return Object(f.a)(a,[{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"Clear_NewWork",payload:{}})}},{key:"handleClick",value:function(e){this.refs.fileUploader.click()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"rl_container article"},r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("h2",null,"Add new Work"),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"text",placeholder:"Enter a name of your work",value:this.state.formdata.workName,onChange:function(t){return e.handelInput(t,"workName")}})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"text",placeholder:"Enter a website address",value:this.state.formdata.siteURL,onChange:function(t){return e.handelInput(t,"siteURL")}})),r.a.createElement("textarea",{value:this.state.formdata.abstract,onChange:function(t){return e.handelInput(t,"abstract")},placeholder:"Please enter a few words about your work"}),r.a.createElement("div",{className:"form_element"},r.a.createElement("div",{className:"upload-screenshot-title"},"Upload a Screenshot"),r.a.createElement("img",{alt:"preview",src:this.state.formdata.preview,width:"80",height:"auto",onClick:function(t){return e.handleClick(t)}}),r.a.createElement("input",{type:"file",id:"screenshote",className:"screen-shot-input",name:"file",ref:"fileUploader",accept:"image/x-png,image/gif,image/jpeg",onChange:function(t){return e.handelInputScreen(t)},value:this.state.formdata.screenShot})),r.a.createElement("textarea",{value:this.state.formdata.technologies,onChange:function(t){return e.handelInput(t,"technologies")},placeholder:"What technologies did you use? for example: HTML, CSS, JavaScript, React and so..."}),r.a.createElement("button",{type:"submit"},"Add work"),this.props.works.newwork?this.showNewWork(this.props.works.newwork):null))}}]),a}(n.Component);var Z=Object(c.b)((function(e){return{works:e.portfolio}}))(X),$=a(41),ee=a.n($),te=function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).showUserPosts=function(e){return e.userWorks?e.userWorks.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,r.a.createElement(s.b,{to:"/user/edit-post/".concat(e._id)},e.workName)),r.a.createElement("td",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.siteURL},e.siteURL)),r.a.createElement("td",null,ee()(e.createAt).format("DD/MM/YY")))})):null},e}return Object(f.a)(a,[{key:"componentWillMount",value:function(){var e;this.props.dispatch((e=this.props.user.login.id,{type:"Get_User_Works",payload:W.a.get("/api/user_posts?user=".concat(e)).then((function(e){return e.data}))}))}},{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",{className:"user_posts"},r.a.createElement("h4",null,"My Works"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Web site"),r.a.createElement("th",null,"Date"))),r.a.createElement("tbody",null,this.showUserPosts(e))))}}]),a}(n.Component);var ae=Object(c.b)((function(e){return{user:e.user}}))(te),ne="https://api.cloudinary.com/v1_1/navedms/image/upload",re=function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={formdata:{_id:e.props.match.params.id,workName:"",siteURL:"",technologies:"",selectedFile:null,preview:"",abstract:""}},e.handelInput=function(t,a){var n=Object(Q.a)({},e.state.formdata);n[a]=t.target.value,e.setState({formdata:n})},e.submitForm=function(t){t.preventDefault();var a=e.state.formdata.technologies.split(", ");e.props.dispatch(S({_id:e.state.formdata._id,workName:e.state.formdata.workName,siteURL:e.state.formdata.siteURL,imageUrl:e.state.formdata.selectedFile,abstract:e.state.formdata.abstract,technologies:a}))},e.deletePost=function(){e.props.dispatch(I(e.props.match.params.id))},e.redirectUser=function(){setTimeout((function(){e.props.history.push("/user/works")}),1e3)},e.handelInputScreen=function(t){var a=Object(Q.a)({},e.state.formdata);a.preview=URL.createObjectURL(t.target.files[0]),e.setState({formdata:a}),e.onUploadImage(t.target.files[0])},e.onUploadImage=function(){var t=Object(K.a)(z.a.mark((function t(a){var n,r,o,l;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("file",a),n.append("upload_preset","gsd2cwto"),t.prev=3,t.next=6,W.a.post(ne,n);case 6:r=t.sent,o=r.data.secure_url,(l=Object(Q.a)({},e.state.formdata)).selectedFile=o,e.setState({formdata:l}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),console.error(t.t0);case 16:case 17:case"end":return t.stop()}}),t,null,[[3,13]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(f.a)(a,[{key:"componentWillMount",value:function(){this.props.dispatch(C(this.props.match.params.id))}},{key:"componentWillReceiveProps",value:function(e){var t=e.work.work,a=t.technologies.join(", ");this.setState({formdata:{_id:t._id,workName:t.workName,siteURL:t.siteURL,preview:t.imageUrl,technologies:a,abstract:t.abstract}})}},{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"Clear_Workedit",payload:{work:{},updateWork:!1,postDeleted:!1}})}},{key:"handleClick",value:function(e){this.refs.fileUploader.click()}},{key:"render",value:function(){var e=this,t=this.props.work;return r.a.createElement("div",{className:"rl_container article"},r.a.createElement("form",{onSubmit:this.submitForm},t.updateWork?r.a.createElement("div",{className:"edit_confirm"},"post updated, ",r.a.createElement(s.b,{to:"/work/".concat(t.work._id)},"Click here to see your post")):null,t.postDeleted?r.a.createElement("div",{className:"red_tag"},"Post Deleted",this.redirectUser()):null,r.a.createElement("h2",null,"Edit Work"),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"text",placeholder:"Enter a name of your work",value:this.state.formdata.workName,onChange:function(t){return e.handelInput(t,"workName")}})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"text",placeholder:"Enter a website address",value:this.state.formdata.siteURL,onChange:function(t){return e.handelInput(t,"siteURL")}})),r.a.createElement("textarea",{value:this.state.formdata.abstract,onChange:function(t){return e.handelInput(t,"abstract")},placeholder:"Please enter a few words about your work"}),r.a.createElement("div",{className:"form_element"},r.a.createElement("div",{className:"upload-screenshot-title"},"Edit Screenshot"),r.a.createElement("img",{alt:"preview",src:this.state.formdata.preview,width:"80",height:"auto",onClick:function(t){return e.handleClick(t)}}),r.a.createElement("input",{type:"file",id:"screenshote",className:"screen-shot-input",name:"file",ref:"fileUploader",accept:"image/x-png,image/gif,image/jpeg",onChange:function(t){return e.handelInputScreen(t)},value:this.state.formdata.screenShot})),r.a.createElement("textarea",{value:this.state.formdata.technologies,onChange:function(t){return e.handelInput(t,"technologies")},placeholder:"What technologies did you use? for example: HTML, CSS, JavaScript, React and so..."}),r.a.createElement("button",{type:"submit"},"Edit work"),r.a.createElement("div",{className:"delete_post"},r.a.createElement("div",{className:"button",onClick:this.deletePost},"Delete Work"))))}}]),a}(n.PureComponent);var oe=Object(c.b)((function(e){return{work:e.portfolio}}))(re),le=function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",lastname:"",email:"",password:"",error:""},e.handleInputEmail=function(t){e.setState({email:t.target.value})},e.handleInputPassword=function(t){e.setState({password:t.target.value})},e.handleInputName=function(t){e.setState({name:t.target.value})},e.handleInputLastname=function(t){e.setState({lastname:t.target.value})},e.redirectUser=function(){setTimeout((function(){e.props.history.push("/signin")}),1e3)},e.submitForm=function(t){t.preventDefault(),e.setState({error:""}),e.props.dispatch(M({email:e.state.email,password:e.state.password,name:e.state.name,lastname:e.state.lastname}))},e}return Object(f.a)(a,[{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"Clear_Register",payload:{}})}},{key:"render",value:function(){var e=this.props.user.user||!1;return r.a.createElement("div",{className:"rl_container"},e.success?r.a.createElement("div",{className:"edit_confirm"},"You have successfully registered!",this.redirectUser()):null,r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("h2",null,"Sign up"),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"text",placeholder:"Enter Name",value:this.state.name,onChange:this.handleInputName})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"text",placeholder:"Enter Lastname",value:this.state.lastname,onChange:this.handleInputLastname})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"text",placeholder:"Enter Email",value:this.state.email,onChange:this.handleInputEmail})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"password",placeholder:"Enter Password",value:this.state.password,onChange:this.handleInputPassword})),r.a.createElement("button",{type:"submit"},"Sign up"),r.a.createElement("div",{className:"error"},this.state.error)))}}]),a}(n.Component);var se=Object(c.b)((function(e){return{user:e.user}}))(le),ce=function(e){W.a.get("/api/logout").then((function(t){setTimeout((function(){e.history.push("/")}),2e3)}));return r.a.createElement("div",{className:"logout_container"},r.a.createElement("h1",null,"Goodbye ",e.user.login.name,"!"))},ie=function(){return r.a.createElement(j,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",exact:!0,component:J(F,null)}),r.a.createElement(d.a,{path:"/work/:id",exact:!0,component:J(H,null)}),r.a.createElement(d.a,{path:"/user",exact:!0,component:J(B,!0)}),r.a.createElement(d.a,{path:"/user/add-work",exact:!0,component:J(Z,!0)}),r.a.createElement(d.a,{path:"/user/edit-post/:id",exact:!0,component:J(oe,!0)}),r.a.createElement(d.a,{path:"/signin",exact:!0,component:J(Y,!1)}),r.a.createElement(d.a,{path:"/user/works",exact:!0,component:J(ae,!0)}),r.a.createElement(d.a,{path:"/user/signout",exact:!0,component:J(ce,!0)}),r.a.createElement(d.a,{path:"/user/signup",exact:!0,component:J(se,!1)})))},ue=Object(i.c)({portfolio:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Get_Works":return Object(Q.a)({},e,{list:t.payload});case"Get_Work":case"Clear_Work":return Object(Q.a)({},e,{work:t.payload});case"Add_portfolio":case"Clear_NewWork":return Object(Q.a)({},e,{newwork:t.payload});case"Update_Work":return Object(Q.a)({},e,{updateWork:t.payload.success,work:t.payload.doc});case"Delete_work":return Object(Q.a)({},e,{postDeleted:t.payload});case"Clear_Workedit":return Object(Q.a)({},e,{updateWork:t.payload.updateWork,postDeleted:t.payload.postDeleted,work:t.payload.work});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"User_Login":case"User_Auth":return Object(Q.a)({},e,{login:t.payload});case"Get_User_Works":return Object(Q.a)({},e,{userWorks:t.payload});case"Register_user":case"Clear_Register":return Object(Q.a)({},e,{user:t.payload});default:return e}}}),me=Object(i.a)(m.a,p.a)(i.d);l.a.render(r.a.createElement(c.a,{store:me(ue)},r.a.createElement(s.a,null,r.a.createElement(ie,null))),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.8cc9302f.chunk.js.map