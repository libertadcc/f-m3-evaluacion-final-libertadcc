(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(42)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),i=a.n(c),l=(a(29),a(23)),s=a(6),o=a(7),u=a(9),m=a(8),h=a(14),p=a(10),d=(a(30),a(31),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.action;return r.a.createElement("input",{className:"input",type:"text",placeholder:"Insert character name to search",onChange:e})}}]),t}(r.a.Component)),f=(a(32),a(11)),b=a(5),E=a.n(b),v=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filterInput,a=e.characters;return r.a.createElement("div",{className:"pannel"},r.a.createElement("ul",{className:"pannel__list"},a.filter(function(e){return e.name.includes(t)}).map(function(e){return r.a.createElement("li",{className:"character",key:e.id},r.a.createElement(f.b,{className:"link",to:"/detail/".concat(e.id)},r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card__img",src:e.image,alt:"Imagen de ".concat(e.name)}),r.a.createElement("div",{className:"card__info"},r.a.createElement("h2",{className:"card__name"},e.name),r.a.createElement("h3",{className:"card__house"},""!==e.house?"House: ".concat(e.house):"No house"," ")))))})))}}]),t}(r.a.Component);v.defaultProps={filterInput:E.a.string,characters:E.a.array};var j=v,N=(a(41),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentWillUnmount",value:function(){this.setState({filterInput:""})}},{key:"render",value:function(){var e=this.props.characters,t=parseInt(this.props.parameters.match.params.child),a=e.find(function(e){return e.id===t});return r.a.createElement(r.a.Fragment,null,void 0!==a?r.a.createElement("div",{className:"detail"},r.a.createElement("img",{className:"detail__img",src:a.image,alt:"Imagen de ".concat(a.name)}),r.a.createElement("h2",{className:"detail__name"},a.name),r.a.createElement("div",{className:"detail__info"},r.a.createElement("h3",{className:"detail__info--dob"},a.dateOfBirth),r.a.createElement("h3",{className:"detail__info--house"},a.patronus),r.a.createElement("h3",{className:"detail__info--surviver"},a.alive?"Alive":"Dead"))):r.a.createElement("p",null,"As\xed no"),r.a.createElement(f.b,{to:"/"},r.a.createElement("button",{className:"btn__back"},"Return")))}}]),t}(r.a.Component));N.defaultProps={characters:E.a.array,characterId:E.a.number,selected:E.a.obj};var O=N,_=a(12),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={characters:[],filterInput:""},a.getCharacters=a.getCharacters.bind(Object(h.a)(a)),a.filterName=a.filterName.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getCharacters()}},{key:"getCharacters",value:function(){var e=this;fetch("http://hp-api.herokuapp.com/api/characters").then(function(e){return e.json()}).then(function(t){var a=t.map(function(e,t){return Object(l.a)({},e,{id:t})});console.log(a),e.setState({characters:a})})}},{key:"filterName",value:function(e){var t=e.currentTarget.value;this.setState({filterInput:t})}},{key:"render",value:function(){var e=this,t=this.state,a=t.characters,n=t.filterInput;return r.a.createElement("div",{className:"page"},r.a.createElement("h1",{className:"title"},"Hogwarts School of Witchcraft and Wizardry"),r.a.createElement(_.c,null,r.a.createElement(_.a,{exact:!0,path:"/",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{action:e.filterName}),r.a.createElement(j,{characters:a,filterInput:n}))}}),r.a.createElement(_.a,{path:"/detail/:child",render:function(e){return r.a.createElement(O,{parameters:e,characters:a})}})))}}]),t}(r.a.Component);i.a.render(r.a.createElement(f.a,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.e57162fa.chunk.js.map