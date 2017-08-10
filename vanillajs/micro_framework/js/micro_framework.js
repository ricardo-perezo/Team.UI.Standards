var micro_framework = (function create_Module() {
  var virtualDom = {}; //Creating a "hidden variable"     
  var app = function app(params) {
    var component = this;    
    component.data = params.data;
    component.loadData = function loadData(container) {
      virtualDom.inputs.map(function (element) {
        var newProperty = element.getAttribute("data-input");
        if (!component.data.hasOwnProperty(newProperty)) {
          component.data[element.getAttribute("data-input")] = element.value;
        }
      });
      virtualDom.texts.map(function (element) {
        var newProperty = element.getAttribute("data-text");
        if (!component.data.hasOwnProperty(newProperty)) {
          component.data[element.getAttribute("data-text")] = "";
        }
      });
      Object.keys(component.data).map(function (data) {
        component.renderValues(data)
      })
    }
    component.getDynamicDom = function getDynamicDom(container) {
      try {
        virtualDom.inputs = [].slice.call(container.querySelectorAll("[data-input]"));
      } catch (e) {}
      try {
        virtualDom.texts = [].slice.call(container.querySelectorAll("[data-text]"));
      } catch (e) {}
    }
    component.addListeners = function addListeners(inputs) {
      inputs.map(function (element) {
        element.addEventListener("keyup", component.changeValues);
        element.addEventListener("keydown", component.changeValues);
        element.addEventListener("keypress", component.changeValues);
      });
    }
    component.changeValues = function changeValues(event) {
      var variable = event.target.getAttribute("data-input");
      component.data[variable] = event.target.value;
      component.renderValues(variable)
    }
    component.renderValues = function renderValues(variable) {
      try {
        [].map.call(component.container.querySelectorAll('[data-text="' + variable + '"]'), function (element) {
          element.innerHTML = component.data[variable];
        });
      } catch (e) {} // you can't make a map of null values 
      try {
        [].map.call(component.container.querySelectorAll('[data-input="' + variable + '"]'), function (element) {
          element.value = component.data[variable];
        });
      } catch (e) {}
    }
    component.container = document.querySelector(params.element);
    component.model = params.data;
    component.getDynamicDom(this.container);
    component.loadData(this.container);
    component.addListeners(virtualDom.inputs);
  };
  return app;
})();
var Router = (function createRouter() {
  function router(routes) {
    var router = this;
        router.routes=routes,
        router.view=document.getElementById("data-view");
        
    function loadRoute(validRoute) {
    var defaultComponent={template:'<h1>404 error not found</h1>'}
    var componentToLoad=(validRoute.index>=0)?router.routes[validRoute.index]:defaultComponent;        
        console.log()         
            router.view.innerHTML=componentToLoad.template||"";
          if(componentToLoad.component){
            new micro_framework(componentToLoad.component);
          }
    }
    function checkRoute() {
       var path= location.hash.slice(1);
       var findedIndex=-1;
       var finded=router.routes.some(function findPath(route,index){
         if(route.path===path){
           findedIndex=index;           
           return true;
         }         
       });
        if(!finded){
          router.routes.some(function findPath(route,index){
          if(route.path==="404"){
           findedIndex=index;           
           return true;
          }          
       });
        }
        
       var validRoute={
         path:(finded)?path:"404",
         index:findedIndex,
       }

       return validRoute;
  }

    function changeRoute() {
      var validRoute= checkRoute();
      loadRoute(validRoute);
    }

    router.routes = routes;
    window.addEventListener("hashchange", changeRoute, false);
    changeRoute();
  }
  return router;
})();