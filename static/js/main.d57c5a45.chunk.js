(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(7),i=n.n(o),r=(n(14),n(8)),s=n(2),b=n(3),u=n(5),d=n(4),l=(n(15),n(0)),j=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var t=this.props,e=t.title,n=t.children;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{children:e}),n]})}}]),n}(a.Component),h=j,p=n(9),O=n.n(p),v=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var t=this.props,e=t.good,n=t.neutral,a=t.bad,c=t.total,o=t.positivePercentage;return Object(l.jsxs)("div",{className:O.a.statistics,children:[Object(l.jsxs)("span",{children:["Good:",e]}),Object(l.jsxs)("span",{children:["Neutral:",n]}),Object(l.jsxs)("span",{children:["Bad:",a]}),Object(l.jsxs)("span",{children:["Total:",c]}),Object(l.jsxs)("span",{children:["Positive feedback:",o,"%"]})]})}}]),n}(a.Component),f=v,k=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var t=this.props.onLeaveFeedback;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{type:"button",name:"good",onClick:t,children:"Good"}),Object(l.jsx)("button",{type:"button",name:"neutral",onClick:t,children:"Neutral"}),Object(l.jsx)("button",{type:"button",name:"bad",onClick:t,children:"Bad"})]})}}]),n}(a.Component),g=k;var x=function(t){var e=t.message;return Object(l.jsx)("h2",{children:e})},F=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0,total:0,positiveFeedback:0},t.handleGoFeedback=function(e){var n=e.target.name;t.setState((function(t){return Object(r.a)({},n,t[n]+1)})),t.countTotalFeedback(),t.countPositiveFeedbackPercentage()},t.countTotalFeedback=function(){t.setState((function(t){return{total:t.total+1}}))},t.countPositiveFeedbackPercentage=function(){t.setState((function(t){return{positiveFeedback:(t.good/t.total*100).toFixed()}}))},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,a=t.bad,c=t.total,o=t.positiveFeedback;return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(h,{title:"Please leave feedback",children:Object(l.jsx)(g,{options:this.state,onLeaveFeedback:this.handleGoFeedback})}),Object(l.jsx)(h,{title:"Statistics",children:0===c?Object(l.jsx)(x,{message:"No feedback given"}):Object(l.jsx)(f,{good:e,neutral:n,bad:a,total:c,positivePercentage:o})})]})}}]),n}(a.Component),m=F,y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),o(t),i(t)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),y()},9:function(t,e,n){t.exports={statistics:"Statistics_statistics___hXzG"}}},[[17,1,2]]]);
//# sourceMappingURL=main.d57c5a45.chunk.js.map