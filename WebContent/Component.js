// create your own component

sap.ui.core.UIComponent.extend("smax.batch27.A1.Component", {
	
	metadata : {
		rootView : "smax.batch27.A1.view.App",
		routing : {
			config : {
				routerClass : "sap.m.routing.Router",
				viewType : "XML",
				controlId : "idApp",
				controlAggregation : "pages",
				viewPath : "smax.batch27.A1.view"
			},
			routes : [
				{
					pattern : "",
					name : "homePage",
					viewName : "MyPage"					
				},
				{
					pattern : "detailPage",
					name : "detailPage",
					viewName : "ProductDetails"
					
				}
			]
		}
	},
	init : function(){
		sap.ui.core.UIComponent.prototype.init.apply(this);
		this.getRouter().initialize();
	}
	

});

