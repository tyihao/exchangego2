(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d229625"],{dce5:function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",[t("br"),t("br"),t("br"),t("h1",[e._v(" University Details ")]),t("p",[e._v(" Find out more about the university that you are interested in ")]),t("hr"),t("br"),t("br"),t("br"),t("br"),t("regions-dropdown",{attrs:{id:"university_details"},on:{newRegions:e.updateRegions}}),t("university-dropdown",{attrs:{regionsList:e.regions},on:{selectedSchool:e.updateSchool}}),t("further-details",{directives:[{name:"show",rawName:"v-show",value:e.selectedUniversity,expression:"selectedUniversity"}],attrs:{id:"further_details",selectedSchool:e.selectedUniversity}})],1)},r=[],o={name:"University Details",components:{UniversityDropdown:function(){return Promise.all([t.e("chunk-4de88042"),t.e("chunk-537d36a6"),t.e("chunk-cb6bcf16")]).then(t.bind(null,"23b5"))},RegionsDropdown:function(){return Promise.all([t.e("chunk-4de88042"),t.e("chunk-537d36a6"),t.e("chunk-1bf39ff1")]).then(t.bind(null,"67f3"))},FurtherDetails:function(){return t.e("chunk-c4370130").then(t.bind(null,"bb1e"))},Autocomplete:function(){return Promise.all([t.e("chunk-4de88042"),t.e("chunk-537d36a6"),t.e("chunk-2d0e8c50")]).then(t.bind(null,"8b4d"))}},data:function(){return{regions:[],selectedUniversity:""}},methods:{updateRegions:function(e){this.regions=e},updateSchool:function(e){this.selectedUniversity=e;var n=document.getElementById("further_details");n.scrollIntoView()}}},s=o,u=t("2877"),c=t("6544"),d=t.n(c),l=t("a523"),a=Object(u["a"])(s,i,r,!1,null,null,null);n["default"]=a.exports;d()(a,{VContainer:l["a"]})}}]);
//# sourceMappingURL=chunk-2d229625.803e2cea.js.map