export default function track(eventName){
    console.log("tracking");
    if(window.mixpanel)
        return

    console.log("tracking", eventName)
    window.mixpanel.track(eventName,{level:1} );

}