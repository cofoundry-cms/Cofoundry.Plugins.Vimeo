/*! BasicTestSite 2018-10-26 */
angular.module("cms.shared").factory("shared.vimeoService",["$http","$q","shared.errorService",function(a,b,c){function d(a){function d(){var a=this,b=!1,d="";switch(a.status){case 200:break;case 404:d="You aren't able to access the video because of privacy or permissions issues, or because the video is still transcoding.";break;case 403:d="Embed permissions are disabled for this video, so you can't embed it.";break;default:b=!0,d="Something unexpected happened whilst connecting to the Vimeo API."}if(d.length){var f={title:"Vimeo API Error",message:d,response:a};b&&c.raise(f),e.reject(f)}else e.resolve(a)}var e=b.defer(),f=new XMLHttpRequest;return f.addEventListener("load",d),f.open("GET",a),f.send(),e.promise}var e={},f="https://vimeo.com/api/oembed.json?url=https%3A%2F%2Fvimeo.com%2F";return e.getVideoInfo=function(a){return d(f+a).then(function(a){return JSON.parse(a.responseText)})},e}]),angular.module("cms.shared").directive("cmsFormFieldVimeo",["_","shared.pluginModulePath","shared.pluginContentPath","shared.modalDialogService","shared.stringUtilities","baseFormFieldFactory",function(a,b,c,d,e,f){function g(c,e,f,g){function i(){n.showPicker=k,n.remove=j,n.isRemovable=n.model&&!o,m()}function j(){l(null)}function k(){d.show({templateUrl:b+"UIComponents/VimeoPickerDialog.html",controller:"VimeoPickerDialogController",options:{currentVideo:a.clone(n.model),modelType:n.modelType,onSelected:l}})}function l(a){a?(n.isRemovable=!o,n.model=a):(n.isRemovable=!1,n.model&&(n.model=null)),m()}function m(){n.buttonText=n.model?"Change":"Select"}var n=c.vm,o=a.has(f,"required");return i(),h.link(c,e,f,g)}var h=f.defaultConfig,i={templateUrl:b+"UIComponents/FormFieldVimeo.html",scope:a.extend(f.defaultConfig.scope,{modelType:"@cmsModelType"}),passThroughAttributes:["required"],link:g};return f.create(i)}]),angular.module("cms.shared").directive("cmsFormFieldVimeoId",["_","shared.pluginModulePath","shared.LoadState","shared.vimeoService","shared.validationErrorService","baseFormFieldFactory",function(a,b,c,d,e,f){function g(b,g,h,i){function j(){o.setEditing=m.bind(null,!0),o.updateVideoId=k,o.cancelEditing=l,o.updateIdLoadState=new c,b.$watch("vm.model",function(a){m(!a)})}function k(){function a(a){f(a.message)}function b(a){a?(o.model=o.idOrUrlInput=a.video_id,c(a)):f("Video not found")}function c(a){o.onVideoSelected&&o.onVideoSelected({model:a})}function f(a){e.raise([{properties:[o.modelName],message:a}])}var g=o.idOrUrlInput,h=n(g);g?g&&!h?f("The url/id is invalid"):h&&h!=o.model?(o.updateIdLoadState.on(),d.getVideoInfo(h).then(b)["catch"](a)["finally"](o.updateIdLoadState.off)):l():(o.model=null,c(null))}function l(){o.idOrUrlInput=o.model,o.onChange(),m(!1)}function m(a){o.isEditing=a}function n(a){var b,c=/^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;if(a)return/^\d+$/.test(a)?a:(b=c.exec(a),b&&b[5])}var o=b.vm;a.has(h,"required"),i[0];return j(),f.defaultConfig.link(b,g,h,i)}var h={templateUrl:b+"UIComponents/FormFieldVimeoId.html",scope:a.extend(f.defaultConfig.scope,{onVideoSelected:"&cmsOnVideoSelected"}),passThroughAttributes:["required"],link:g};return f.create(h)}]),angular.module("cms.shared").controller("VimeoPickerDialogController",["$scope","shared.LoadState","shared.stringUtilities","shared.vimeoService","options","close",function(a,b,c,d,e,f){function g(){k.onOk=j,k.onCancel=i,k.close=i,k.onVideoSelected=h,k.isModelId="id"===e.modelType,k.loadState=new b,k.isModelId&&e.currentVideo?(k.loadState.on(),d.getVideoInfo(e.currentVideo).then(h)["finally"](k.loadState.off)):k.model=e.currentVideo}function h(a){a?k.model={id:a.video_id,title:a.title,description:c.stripTags(a.description),width:a.width,height:a.height,uploadDate:a.upload_date,duration:a.duration,thumbnailUrl:a.thumbnail_url,thumbnailWidth:a.thumbnail_width,thumbnailHeight:a.thumbnail_height}:k.model=null}function i(){f()}function j(){k.model&&k.isModelId?e.onSelected(k.model.id):e.onSelected(k.model),f()}var k=a;g()}]),angular.module("cms.shared").directive("cmsVimeoVideo",["$sce","shared.pluginModulePath","shared.pluginContentPath","shared.urlLibrary",function(a,b,c,d){return{restrict:"E",scope:{model:"=cmsModel"},templateUrl:b+"UIComponents/VimeoVideo.html",link:function(b,d,e){b.replacementUrl=c+"img/AssetReplacement/vimeo-replacement.png",b.$watch("model",function(c){var d;c?(d=c.id||c,b.videoUrl=a.trustAsResourceUrl("//player.vimeo.com/video/"+d)):b.videoUrl=null})}}}]);