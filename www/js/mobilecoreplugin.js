var MobilecorePlugin = {


/**
 * Function to init Mobilecore
 * @param successcallback
 * @param errorcallback
 * @param devHash 
 */
initMobilecore: function(successCallback, errorCallback, devHash, logLevel, adUnits) {
   	if (errorCallback == null) { errorCallback = function() {}}
       if (typeof errorCallback != "function")  {
           console.log("error callback parameter must be a function");
           return
       }
       if (typeof successCallback != "function") {
           console.log("success callback parameter must be a function");
           return
       }
       
   	cordova.exec(
               successCallback, // success callback function
               errorCallback, // error callback function
               'MobilecorePlugin', // mapped to our native Java class called "MobilecorePlugin"
               'initMobilecore',   // with this action name
               [				   // and this array of custom arguments to create our entry
				{                
                   "devHash": devHash,
				   "logLevel": logLevel,
				   "adUnits": adUnits
				}
			   ]
       ); 
},
   
/**
* Function to Show Interstitial
* @param successcallback
* @param errorcallback
*/
showInterstitial: function(successCallback, errorCallback) {
	if (errorCallback == null) { errorCallback = function() {}}
       if (typeof errorCallback != "function")  {
           console.log("error callback parameter must be a function");
           return
       }
       if (typeof successCallback != "function") {
           console.log("success callback parameter must be a function");
           return
       }
       
	cordova.exec(
               successCallback, // success callback function
               errorCallback, // error callback function
               'MobilecorePlugin', // mapped to our native Java class called
								// "MobilecorePlugin"
               'showInterstitial', // with this action name
               [{                  // and this array of custom arguments to
								// create our entry
                   
               }]
       ); 
},

/**
 * Function to check if Interstitial is ready
 */
isInterstitialReady: function(successCallback, errorCallback) {
		if (errorCallback == null) { errorCallback = function() {}}
        if (typeof errorCallback != "function")  {
            console.log("error callback parameter must be a function");
            return
        }
        if (typeof successCallback != "function") {
            console.log("success callback parameter must be a function");
            return
        }
        
		cordova.exec(
                successCallback, // success callback function
                errorCallback, // error callback function
                'MobilecorePlugin', // mapped to our native Java class called
									// "MobilecorePlugin"
                'isInterstitialReady', // with this action name
                [{                  // and this array of custom arguments to
									// create our entry
                   
                }]
        );
},

/**
* Function to Refresh Offers
* @param successcallback
* @param errorcallback
*/
refreshOffers: function(successCallback, errorCallback) {
	if (errorCallback == null) { errorCallback = function() {}}
    if (typeof errorCallback != "function")  {
           console.log("error callback parameter must be a function");
           return
    }
    if (typeof successCallback != "function") {
           console.log("success callback parameter must be a function");
           return
    }
       
	cordova.exec(
               successCallback, // success callback function
               errorCallback, // error callback function
               'MobilecorePlugin', // mapped to our native Java class called
								// "MobilecorePlugin"
               'refreshOffers', // with this action name
               [{                  // and this array of custom arguments to
								// create our entry
                   
               }]
       ); 
},

/**
 * Function to open url
 * @param successcallback
 * @param errorcallback
 * @param url
 * @param internal
 */
openUrl: function(successCallback, errorCallback, url, internal) {
		if (errorCallback == null) { errorCallback = function() {}}
        if (typeof errorCallback != "function")  {
            console.log("error callback parameter must be a function");
            return
        }
        if (typeof successCallback != "function") {
            console.log("success callback parameter must be a function");
            return
        }
        
		cordova.exec(
                successCallback, // success callback function
                errorCallback, // error callback function
                'MobilecorePlugin', // mapped to our native Java class called
									// "MobilecorePlugin"
                'openUrl', // with this action name
                [{                  // and this array of custom arguments to
									// create our entry
                    "url": url,
                    "internal": internal
                }]
        );
},

/**
 * Function to register an Interstitial Ready Listener
 * @param successcallback
 * @param errorcallback
 */
setInterstitialReadyListener: function(successCallback, errorCallback) {
		if (errorCallback == null) { errorCallback = function() {}}
        if (typeof errorCallback != "function")  {
            console.log("error callback parameter must be a function");
            return
        }
        if (typeof successCallback != "function") {
            console.log("success callback parameter must be a function");
            return
        }
        
		cordova.exec(
                successCallback, // success callback function
                errorCallback, // error callback function
                'MobilecorePlugin', // mapped to our native Java class called
									// "MobilecorePlugin"
                'setInterstitialReadyListener', // with this action name
                [{                  // and this array of custom arguments to
									// create our entry
                    
                }]
        );
},


/**
 * Function to listen widgets callbacks
 */
listenWidgetCallbacks: function(successCallback, errorCallback) {
		if (errorCallback == null) { errorCallback = function() {}}
        if (typeof errorCallback != "function")  {
            console.log("error callback parameter must be a function");
            return
        }
        if (typeof successCallback != "function") {
            console.log("success callback parameter must be a function");
            return
        }
        
		cordova.exec(
                successCallback, // success callback function
                errorCallback, // error callback function
                'MobilecorePlugin', // mapped to our native Java class called
									// "MobilecorePlugin"
                'listenWidgetCallbacks', // with this action name
                [{                  // and this array of custom arguments to
									// create our entry
                   
                }]
        );
},


/**
 * Function to set widget text property, property should be one of: "MAIN_TEXT", "SECONDARY_TEXT", "BADGE_TEXT"
 * @param widgetId
 * @param property
 * @param text
 */
setWidgetTextProperty: function(successCallback, errorCallback, widgetId, property, text) {
		if (errorCallback == null) { errorCallback = function() {}}
        if (typeof errorCallback != "function")  {
            console.log("error callback parameter must be a function");
            return
        }
        if (typeof successCallback != "function") {
            console.log("success callback parameter must be a function");
            return
        }
        
		cordova.exec(
                successCallback, // success callback function
                errorCallback, // error callback function
                'MobilecorePlugin', // mapped to our native Java class called
									// "MobilecorePlugin"
                'setWidgetTextProperty', // with this action name
                [{                  // and this array of custom arguments to
									// create our entry
                    "widgetId": widgetId,
                    "property": property,
                    "text" : text
                }]
        );
},

/**
 * Function to get widget text property, property should be one of: "MAIN_TEXT", "SECONDARY_TEXT", "BADGE_TEXT"
 * @param widgetId
 * @param property
 */
getWidgetTextProperty: function(successCallback, errorCallback, widgetId, property) {
		if (errorCallback == null) { errorCallback = function() {}}
        if (typeof errorCallback != "function")  {
            console.log("error callback parameter must be a function");
            return
        }
        if (typeof successCallback != "function") {
            console.log("success callback parameter must be a function");
            return
        }
        
		cordova.exec(
                successCallback, // success callback function
                errorCallback, // error callback function
                'MobilecorePlugin', // mapped to our native Java class called
									// "MobilecorePlugin"
                'getWidgetTextProperty', // with this action name
                [{                  // and this array of custom arguments to
									// create our entry
                    "widgetId": widgetId,
                    "property": property
                }]
        );
},

/**
 * Function to set widget icon resource, resDrawableName is a name of an icon from res\drawable folders
 * @param widgetId
 * @param resDrawableName
 */
setWidgetIconResource: function(successCallback, errorCallback, widgetId, resDrawableName) {
		if (errorCallback == null) { errorCallback = function() {}}
        if (typeof errorCallback != "function")  {
            console.log("error callback parameter must be a function");
            return
        }
        if (typeof successCallback != "function") {
            console.log("success callback parameter must be a function");
            return
        }
        
		cordova.exec(
                successCallback, // success callback function
                errorCallback, // error callback function
                'MobilecorePlugin', // mapped to our native Java class called
									// "MobilecorePlugin"
                'setWidgetIconResource', // with this action name
                [{                  // and this array of custom arguments to
									// create our entry
                    "widgetId": widgetId,
                    "resDrawableName": resDrawableName
                }]
        );
},

/**
 * Function to open slider menu
 * @param animate
 */
openSliderMenu: function(successCallback, errorCallback, animate) {
		if (errorCallback == null) { errorCallback = function() {}}
        if (typeof errorCallback != "function")  {
            console.log("error callback parameter must be a function");
            return
        }
        if (typeof successCallback != "function") {
            console.log("success callback parameter must be a function");
            return
        }
        
		cordova.exec(
                successCallback, // success callback function
                errorCallback, // error callback function
                'MobilecorePlugin', // mapped to our native Java class called
									// "MobilecorePlugin"
                'openSliderMenu', // with this action name
                [{                  // and this array of custom arguments to
									// create our entry
                    "animate": animate
                }]
        );
},

/**
 * Function to close slider menu
 * @param animate
 */
closeSliderMenu: function(successCallback, errorCallback, animate) {
		if (errorCallback == null) { errorCallback = function() {}}
        if (typeof errorCallback != "function")  {
            console.log("error callback parameter must be a function");
            return
        }
        if (typeof successCallback != "function") {
            console.log("success callback parameter must be a function");
            return
        }
        
		cordova.exec(
                successCallback, // success callback function
                errorCallback, // error callback function
                'MobilecorePlugin', // mapped to our native Java class called
									// "MobilecorePlugin"
                'closeSliderMenu', // with this action name
                [{                  // and this array of custom arguments to
									// create our entry
                    "animate": animate
                }]
        );
},

/**
 * Function to toggle slider menu
 * @param animate
 */
toggleSliderMenu: function(successCallback, errorCallback, animate) {
		if (errorCallback == null) { errorCallback = function() {}}
        if (typeof errorCallback != "function")  {
            console.log("error callback parameter must be a function");
            return
        }
        if (typeof successCallback != "function") {
            console.log("success callback parameter must be a function");
            return
        }
        
		cordova.exec(
                successCallback, // success callback function
                errorCallback, // error callback function
                'MobilecorePlugin', // mapped to our native Java class called
									// "MobilecorePlugin"
                'toggleSliderMenu', // with this action name
                [{                  // and this array of custom arguments to
									// create our entry
                    "animate": animate
                }]
        );
},

/**
 * Function to show widget
 * @param widgetId
 */
showWidget: function(successCallback, errorCallback, widgetId) {
		if (errorCallback == null) { errorCallback = function() {}}
        if (typeof errorCallback != "function")  {
            console.log("error callback parameter must be a function");
            return
        }
        if (typeof successCallback != "function") {
            console.log("success callback parameter must be a function");
            return
        }
        
		cordova.exec(
                successCallback, // success callback function
                errorCallback, // error callback function
                'MobilecorePlugin', // mapped to our native Java class called
									// "MobilecorePlugin"
                'showWidget', // with this action name
                [{                  // and this array of custom arguments to
									// create our entry
                    "widgetId": widgetId
                }]
        );
},

/**
 * Function to hide widget
 * @param widgetId
 */
hideWidget: function(successCallback, errorCallback, widgetId) {
		if (errorCallback == null) { errorCallback = function() {}}
        if (typeof errorCallback != "function")  {
            console.log("error callback parameter must be a function");
            return
        }
        if (typeof successCallback != "function") {
            console.log("success callback parameter must be a function");
            return
        }
        
		cordova.exec(
                successCallback, // success callback function
                errorCallback, // error callback function
                'MobilecorePlugin', // mapped to our native Java class called
									// "MobilecorePlugin"
                'hideWidget', // with this action name
                [{                  // and this array of custom arguments to
									// create our entry
                    "widgetId": widgetId
                }]
        );
},

/**
 * Function to set emphasized widget
 * @param widgetId
 */
setEmphasizedWidget: function(successCallback, errorCallback, widgetId) {
		if (errorCallback == null) { errorCallback = function() {}}
        if (typeof errorCallback != "function")  {
            console.log("error callback parameter must be a function");
            return
        }
        if (typeof successCallback != "function") {
            console.log("success callback parameter must be a function");
            return
        }
        
		cordova.exec(
                successCallback, // success callback function
                errorCallback, // error callback function
                'MobilecorePlugin', // mapped to our native Java class called
									// "MobilecorePlugin"
                'setEmphasizedWidget', // with this action name
                [{                  // and this array of custom arguments to
									// create our entry
                    "widgetId": widgetId
                }]
        );
},

/**
 * Function to check if slider menu is open
 */
isSliderMenuOpen: function(successCallback, errorCallback) {
		if (errorCallback == null) { errorCallback = function() {}}
        if (typeof errorCallback != "function")  {
            console.log("error callback parameter must be a function");
            return
        }
        if (typeof successCallback != "function") {
            console.log("success callback parameter must be a function");
            return
        }
        
		cordova.exec(
                successCallback, // success callback function
                errorCallback, // error callback function
                'MobilecorePlugin', // mapped to our native Java class called
									// "MobilecorePlugin"
                'isSliderMenuOpen', // with this action name
                [{                  // and this array of custom arguments to
									// create our entry
                   
                }]
        );
},

/**
 * Function to show Stickee
 * @param successcallback
 * @param errorcallback
 */
showStickee: function(successCallback, errorCallback) {
		if (errorCallback == null) { errorCallback = function() {}}
        if (typeof errorCallback != "function")  {
            console.log("error callback parameter must be a function");
            return
        }
        if (typeof successCallback != "function") {
            console.log("success callback parameter must be a function");
            return
        }
        
		cordova.exec(
                successCallback, // success callback function
                errorCallback, // error callback function
                'MobilecorePlugin', // mapped to our native Java class called
									// "MobilecorePlugin"
                'showStickee', // with this action name
                [{                  // and this array of custom arguments to
									// create our entry
                }]
        );
},

/**
 * Function to hide Stickee
 * @param successcallback
 * @param errorcallback
 */
hideStickee: function(successCallback, errorCallback) {
		if (errorCallback == null) { errorCallback = function() {}}
        if (typeof errorCallback != "function")  {
            console.log("error callback parameter must be a function");
            return
        }
        if (typeof successCallback != "function") {
            console.log("success callback parameter must be a function");
            return
        }
        
		cordova.exec(
                successCallback, // success callback function
                errorCallback, // error callback function
                'MobilecorePlugin', // mapped to our native Java class called
									// "MobilecorePlugin"
                'hideStickee', // with this action name
                [{                  // and this array of custom arguments to
									// create our entry
                }]
        );
},

/**
 * Function to check if Stickee is ready
 * @param successcallback
 * @param errorcallback
 */
isStickeeReady: function(successCallback, errorCallback) {
		if (errorCallback == null) { errorCallback = function() {}}
        if (typeof errorCallback != "function")  {
            console.log("error callback parameter must be a function");
            return
        }
        if (typeof successCallback != "function") {
            console.log("success callback parameter must be a function");
            return
        }
        
		cordova.exec(
                successCallback, // success callback function
                errorCallback, // error callback function
                'MobilecorePlugin', // mapped to our native Java class called
									// "MobilecorePlugin"
                'isStickeeReady', // with this action name
                [{                  // and this array of custom arguments to
									// create our entry
                }]
        );
},

/**
 * Function to check if Stickee is showing
 * @param successcallback
 * @param errorcallback
 */
isStickeeShowing: function(successCallback, errorCallback) {
		if (errorCallback == null) { errorCallback = function() {}}
        if (typeof errorCallback != "function")  {
            console.log("error callback parameter must be a function");
            return
        }
        if (typeof successCallback != "function") {
            console.log("success callback parameter must be a function");
            return
        }
        
		cordova.exec(
                successCallback, // success callback function
                errorCallback, // error callback function
                'MobilecorePlugin', // mapped to our native Java class called
									// "MobilecorePlugin"
                'isStickeeShowing', // with this action name
                [{                  // and this array of custom arguments to
									// create our entry
                }]
        );
},

/**
 * Function to check if Stickee is showing offers
 * @param successcallback
 * @param errorcallback
 */
isStickeeShowingOffers: function(successCallback, errorCallback) {
		if (errorCallback == null) { errorCallback = function() {}}
        if (typeof errorCallback != "function")  {
            console.log("error callback parameter must be a function");
            return
        }
        if (typeof successCallback != "function") {
            console.log("success callback parameter must be a function");
            return
        }
        
		cordova.exec(
                successCallback, // success callback function
                errorCallback, // error callback function
                'MobilecorePlugin', // mapped to our native Java class called
									// "MobilecorePlugin"
                'isStickeeShowingOffers', // with this action name
                [{                  // and this array of custom arguments to
									// create our entry
                }]
        );
},

/**
 * Function to register Stickeez Ready Listener
 * @param successcallback
 * @param errorcallback
 */
setStickeezReadyListener: function(successCallback, errorCallback) {
		if (errorCallback == null) { errorCallback = function() {}}
        if (typeof errorCallback != "function")  {
            console.log("error callback parameter must be a function");
            return
        }
        if (typeof successCallback != "function") {
            console.log("success callback parameter must be a function");
            return
        }
        
		cordova.exec(
                successCallback, // success callback function
                errorCallback, // error callback function
                'MobilecorePlugin', // mapped to our native Java class called
									// "MobilecorePlugin"
                'setStickeezReadyListener', // with this action name
                [{                  // and this array of custom arguments to
									// create our entry
                }]
        );
},

/**
 * Function to set Stickeez position
 * @param successcallback
 * @param errorcallback
 * @param position
 */
setStickeezPosition: function(successCallback, errorCallback, position) {
		if (errorCallback == null) { errorCallback = function() {}}
        if (typeof errorCallback != "function")  {
            console.log("error callback parameter must be a function");
            return
        }
        if (typeof successCallback != "function") {
            console.log("success callback parameter must be a function");
            return
        }
        
		cordova.exec(
                successCallback, // success callback function
                errorCallback, // error callback function
                'MobilecorePlugin', // mapped to our native Java class called
									// "MobilecorePlugin"
                'setStickeezPosition', // with this action name
                [{                  // and this array of custom arguments to
									// create our entry
                    "position": position
                }]
        );
},

/**
 * Function to show Direct to Market
 * @param successcallback
 * @param errorcallback
 */
directToMarket: function(successCallback, errorCallback) {
		if (errorCallback == null) { errorCallback = function() {}}
        if (typeof errorCallback != "function")  {
            console.log("error callback parameter must be a function");
            return
        }
        if (typeof successCallback != "function") {
            console.log("success callback parameter must be a function");
            return
        }
        
		cordova.exec(
                successCallback, // success callback function
                errorCallback, // error callback function
                'MobilecorePlugin', // mapped to our native Java class called
									// "MobilecorePlugin"
                'directToMarket', // with this action name
                [{                  // and this array of custom arguments to
									// create our entry
                }]
        );
},


/**
 * Function to check if Direct to Market is ready
 * @param successcallback
 * @param errorcallback
 */
isDirectToMarketReady: function(successCallback, errorCallback) {
		if (errorCallback == null) { errorCallback = function() {}}
        if (typeof errorCallback != "function")  {
            console.log("error callback parameter must be a function");
            return
        }
        if (typeof successCallback != "function") {
            console.log("success callback parameter must be a function");
            return
        }
        
		cordova.exec(
                successCallback, // success callback function
                errorCallback, // error callback function
                'MobilecorePlugin', // mapped to our native Java class called
									// "MobilecorePlugin"
                'isDirectToMarketReady', // with this action name
                [{                  // and this array of custom arguments to
									// create our entry
                }]
        );
},

/**
 * Function to register Direct to Market Ready Listener
 * @param successcallback
 * @param errorcallback
 */
setDirectToMarketReadyListener: function(successCallback, errorCallback) {
		if (errorCallback == null) { errorCallback = function() {}}
        if (typeof errorCallback != "function")  {
            console.log("error callback parameter must be a function");
            return
        }
        if (typeof successCallback != "function") {
            console.log("success callback parameter must be a function");
            return
        }
        
		cordova.exec(
                successCallback, // success callback function
                errorCallback, // error callback function
                'MobilecorePlugin', // mapped to our native Java class called
									// "MobilecorePlugin"
                'setDirectToMarketReadyListener', // with this action name
                [{                  // and this array of custom arguments to
									// create our entry
                }]
        );
},

/**
 * Function to register Ad Units Event Listener
 * @param successcallback
 * @param errorcallback
 */
setAdUnitEventListener: function(successCallback, errorCallback) {
        if (errorCallback == null) { errorCallback = function() {}}
        if (typeof errorCallback != "function")  {
            console.log("error callback parameter must be a function");
            return
        }
        if (typeof successCallback != "function") {
            console.log("success callback parameter must be a function");
            return
        }
        
        cordova.exec(
                successCallback, // success callback function
                errorCallback, // error callback function
                'MobilecorePlugin', // mapped to our native Java class called
                                    // "MobilecorePlugin"
                'setAdUnitEventListener', // with this action name
                [{                  // and this array of custom arguments to
                                    // create our entry
                }]
        );
},

}

MobilecorePlugin.AD_UNIT_READY = "AD_UNIT_READY";
MobilecorePlugin.AD_UNIT_NOT_READY = "AD_UNIT_NOT_READY";
MobilecorePlugin.AD_UNIT_DISMISSED = "AD_UNIT_DISMISSED";

MobilecorePlugin.STICKEEZ_POSITION_TOP_LEFT = 10;
MobilecorePlugin.STICKEEZ_POSITION_TOP_RIGHT = 11;
MobilecorePlugin.STICKEEZ_POSITION_MIDDLE_LEFT = 12;
MobilecorePlugin.STICKEEZ_POSITION_MIDDLE_RIGHT = 13;
MobilecorePlugin.STICKEEZ_POSITION_BOTTOM_LEFT = 14;
MobilecorePlugin.STICKEEZ_POSITION_BOTTOM_RIGHT = 15;


//-------------------------------------------------------------------

module.exports = MobilecorePlugin;