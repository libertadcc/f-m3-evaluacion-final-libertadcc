(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,a,t){e.exports=t(43)},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(20),l=t.n(c),i=(t(29),t(23)),s=t(6),o=t(7),u=t(9),m=t(8),h=t(13),f=t(10),d=(t(30),t(31),function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.action,t=e.checked,n=e.checkHouse;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"filters"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Introduce el nombre del personaje",onChange:a})),r.a.createElement("div",{className:"filter__houses"},r.a.createElement("p",{className:"filter__houses-name"},"Selecciona la casa"),r.a.createElement("div",{className:"option"},r.a.createElement("label",{htmlFor:"todas"},r.a.createElement("input",{id:"todas",type:"radio",value:"",name:"houses",onChange:n,checked:""===t}),"Todas")),r.a.createElement("div",{className:"option"},r.a.createElement("label",{htmlFor:"Gryffindor"},r.a.createElement("input",{id:"Gryffindor",type:"radio",value:"Gryffindor",name:"houses",onChange:n,checked:"Gryffindor"===t}),"Gryffindor")),r.a.createElement("div",{className:"option"},r.a.createElement("label",{htmlFor:"Slytherin"},r.a.createElement("input",{id:"Slytherin",type:"radio",value:"Slytherin",name:"houses",onChange:n,checked:"Slytherin"===t}),"Slytherin")),r.a.createElement("div",{className:"option"},r.a.createElement("label",{htmlFor:"Ravenclaw"},r.a.createElement("input",{id:"Ravenclaw",type:"radio",value:"Ravenclaw",name:"houses",onChange:n,checked:"Ravenclaw"===t}),"Ravenclaw")),r.a.createElement("div",{className:"option"},r.a.createElement("label",{htmlFor:"Hufflepuff"},r.a.createElement("input",{id:"Hufflepuff",type:"radio",value:"Hufflepuff",name:"houses",onChange:n,checked:"Hufflepuff"===t}),"Hufflepuff"))))}}]),a}(r.a.Component)),p=(t(32),t(11)),v=t(2),E=t.n(v),b=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.filterInput,t=e.characters,n=e.checked,c=t.filter(function(e){return e.house.includes(n)}).filter(function(e){return e.name.toLowerCase().includes(a)}).map(function(e){return r.a.createElement("li",{className:"character",key:e.id},r.a.createElement(p.b,{className:"link",to:"/detail/".concat(e.id)},r.a.createElement("span",{className:"tooltiptext"},"Haz click para saber m\xe1s"),r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card__img",src:e.image,alt:"Imagen de ".concat(e.name)}),r.a.createElement("div",{className:"card__info"},r.a.createElement("h2",{className:"card__name"},e.name),r.a.createElement("h3",{className:"card__house"},""!==e.house?"Casa: ".concat(e.house):"Sin casa"," ")))))});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pannel"},r.a.createElement("ul",{className:"pannel__list"},0===c.length&&""!==a?r.a.createElement("p",{className:"incorrect"},"Este personaje no existe"):c)))}}]),a}(r.a.Component);b.defaultProps={filterInput:E.a.string,characters:E.a.array,checked:E.a.string};var g=b,y=(t(41),function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",{className:"title"},"Colegio Hogwarts de Magia y Hechicer\xeda")}}]),a}(r.a.Component)),N=(t(42),function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(o.a)(a,[{key:"componentWillUnmount",value:function(){this.props.reset()}},{key:"render",value:function(){var e=this.props.characters,a=parseInt(this.props.parameters.match.params.child),t=e.find(function(e){return e.id===a});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper__card"},r.a.createElement(y,null),void 0!==t?r.a.createElement("div",{className:"wrapper__detail"},r.a.createElement("div",{className:"detail  detail-".concat("Gryffindor"===t.house?"gryffindor":"Slytherin"===t.house?"slytherin":"Hufflepuff"===t.house?"hufflepuff":"Ravenclaw"===t.house?"ravenclaw":"")},r.a.createElement("img",{className:"detail__img",src:t.image,alt:"Imagen de ".concat(t.name)}),r.a.createElement("div",{className:"detail__info"},r.a.createElement("h2",{className:"detail__name"},t.name),r.a.createElement("h3",{className:"detail__info--house"},""!==t.house?"Casa: ".concat(t.house):"Sin casa"," "),r.a.createElement("h3",{className:"detail__info--dob"},"Nacimiento:  ",t.yearOfBirth),r.a.createElement("h3",{className:"detail__info--patronus"},""===t.patronus?"Sin patronus":"Patronus: ".concat(t.patronus)),r.a.createElement("h3",{className:"detail__info--surviver"},"Estado: ",t.alive&&"female"===t.gender?"Viva":t.alive&&"male"===t.gender?"Vivo":!1===t.alive&&"female"===t.gender?"Muerta \ud83d\udc80":"Muerto \ud83d\udc80"),r.a.createElement("div",{className:"detail--shield"},r.a.createElement("img",{className:"shield",alt:"Escudo de la casa",src:"Gryffindor"===t.house?"https://vignette.wikia.nocookie.net/es.harrypotter/images/a/a3/Gryffindor_Pottermore.png/revision/latest?cb=20140922195249":"Slytherin"===t.house?"https://vignette.wikia.nocookie.net/es.harrypotter/images/6/69/Slytherin_Pottermore.png/revision/latest?cb=20141001130915":"Hufflepuff"===t.house?"https://vignette.wikia.nocookie.net/es.harrypotter/images/4/42/Hufflepuff_Pottermore.png/revision/latest?cb=20141001131135":"Ravenclaw"===t.house?"https://vignette.wikia.nocookie.net/es.harrypotter/images/7/76/Ravenclaw_Pottermore.png/revision/latest?cb=20141001130914":""}))))):r.a.createElement("p",{className:"error__message"},"No has seleccionado ning\xfan personaje"),r.a.createElement(p.b,{to:"/"},r.a.createElement("button",{className:"btn__back"},"Volver"))))}}]),a}(r.a.Component));N.defaultProps={characters:E.a.array,characterId:E.a.number,selected:E.a.obj};var k=N,_=t(12),j=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).state={characters:[],filterInput:"",checked:""},t.getCharacters=t.getCharacters.bind(Object(h.a)(t)),t.filterName=t.filterName.bind(Object(h.a)(t)),t.reset=t.reset.bind(Object(h.a)(t)),t.filterHouse=t.filterHouse.bind(Object(h.a)(t)),t}return Object(f.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getCharacters()}},{key:"reset",value:function(){this.setState({filterInput:""})}},{key:"getCharacters",value:function(){var e=this;fetch("http://hp-api.herokuapp.com/api/characters").then(function(e){return e.json()}).then(function(a){var t=a.map(function(e,a){return Object(i.a)({},e,{id:a})});e.setState({characters:t})})}},{key:"filterName",value:function(e){var a=e.currentTarget.value;this.setState({filterInput:a.toLowerCase()})}},{key:"filterHouse",value:function(e){var a=e.currentTarget.value;this.setState({checked:a})}},{key:"render",value:function(){var e=this,a=this.state,t=a.characters,n=a.filterInput,c=a.checked;return r.a.createElement("div",{className:"page"},r.a.createElement(_.c,null,r.a.createElement(_.a,{exact:!0,path:"/",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement(d,{action:e.filterName,checkHouse:e.filterHouse,checked:c}),r.a.createElement(g,{characters:t,filterInput:n,checked:c}))}}),r.a.createElement(_.a,{path:"/detail/:child",render:function(a){return r.a.createElement(k,{parameters:a,characters:t,reset:e.reset})}})))}}]),a}(r.a.Component);l.a.render(r.a.createElement(p.a,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.76221105.chunk.js.map