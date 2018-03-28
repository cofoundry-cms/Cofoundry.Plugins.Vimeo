angular.module('cms.shared').run(['$templateCache',function(t){t.put('/Plugins/Admin/Modules/Shared/Js/UIComponents/FormFieldVimeo.html','<div class="control-group form-field-vimeo-preview">    <cms-field>        <label class="control-label" for="{{vm.modelName}}">{{vm.title}}:</label>        <div class="controls">            <div class="image-asset">                <input type="hidden"                       id="{{vm.modelName}}"                       name="{{vm.modelName}}"                       ng-model="vm.model"                       ng-change="vm.onChange()" />                <cms-vimeo-video cms-model="vm.model"                                 class="form-field-vimeo-preview"></cms-vimeo-video>                <div ng-if="vm.model.videoUrl">{{vm.model.title}}</div>                <div ng-if="vm.model.videoUrl">{{vm.model.descripion}}</div>            </div>            <div class="collection-actions" ng-show="vm.formScope.editMode">                <cms-button-icon cms-title="{{vm.buttonText}}"                                 cms-icon="cog"                                 ng-click="vm.showPicker()"                                 ng-disabled="vm.disabled">                </cms-button-icon>                <cms-button-icon cms-title="Remove"                                 cms-icon="check-trash-o"                                 ng-if="vm.isRemovable"                                 ng-click="vm.remove()"                                 ng-disabled="vm.disabled">                </cms-button-icon>            </div>            <cms-form-field-validation-summary></cms-form-field-validation-summary>        </div>    </cms-field>    <p class="help-inline" ng-if="vm.description">        <small>{{vm.description}}</small>    </p></div>');
t.put('/Plugins/Admin/Modules/Shared/Js/UIComponents/FormFieldVimeoId.html','<div class="control-group">    <div class="control-group-area">        <label class="control-label" for="{{vm.modelName}}">Video Id:</label>        <div class="controls">            <div ng-show="!vm.isEditing">                {{vm.model}}                <cms-button-icon cms-title="Change" cms-icon="cog"                            ng-click="vm.setEditing()"></cms-button-icon>            </div>            <div ng-show="vm.isEditing">                <input type="text"                       id="{{vm.modelName}}"                       name="{{vm.modelName}}"                       placeholder="enter a vimeo url or id"                       ng-change="vm.onChange()"                       ng-model="vm.idOrUrlInput"                       ng-disabled="vm.disabled" />                <div class="form-field-input-actions">                    <cms-button cms-text="Ok" class="btn"                                ng-click="vm.updateVideoId()"                                cms-loading="vm.updateIdLoadState.isLoading"></cms-button>                    <cms-button cms-text="Cancel" class="btn"                                ng-click="vm.cancelEditing()"                                ng-if="vm.model"></cms-button>                </div>                <cms-form-field-validation-summary></cms-form-field-validation-summary>            </div>        </div>        <p class="help-inline" ng-if="vm.description">            <small>The numerical identifier of the Vimeo video</small>        </p>    </div></div>');
t.put('/Plugins/Admin/Modules/Shared/Js/UIComponents/VimeoPickerDialog.html','<cms-modal-dialog-container cms-modal-size="large">    <cms-modal-dialog-header>        Vimeo Video    </cms-modal-dialog-header>    <cms-form cms-name="videoDetailsForm"              cms-loading="loadState.isLoading">        <cms-page-actions>            <cms-button class="main-cta" cms-text="Ok"                        ng-click="onOk()"                        ng-disabled="!model.id"></cms-button>            <cms-button cms-text="Cancel" ng-click="onCancel()"></cms-button>        </cms-page-actions>        <cms-page-body>            <cms-form-section cms-title="Vimeo video">                <cms-form-field-vimeo-id cms-model="model.id"                                            cms-on-video-selected="onVideoSelected(model)"></cms-form-field-vimeo-id>                <cms-form-field-container cms-title="Preview" class="form-field-vimeo-preview">                    <cms-vimeo-video cms-model="model"></cms-vimeo-video>                </cms-form-field-container>                <cms-form-field-text cms-title="Title"                                        cms-model="model.title"                                        cms-disabled="isEditingVideoId"                                        ng-if="!isModelId"></cms-form-field-text>                <cms-form-field-text-area cms-title="Description"                                            cms-model="model.description"                                            cms-disabled="isEditingVideoId"                                            ng-if="!isModelId"></cms-form-field-text-area>                <cms-form-field-readonly cms-title="Title"                                            cms-model="model.title"                                            ng-if="isModelId"></cms-form-field-readonly>                <cms-form-field-readonly cms-title="Description"                                            cms-model="model.description"                                            ng-if="isModelId"></cms-form-field-readonly>            </cms-form-section>        <cms-page-body>    </cms-form></cms-modal-dialog-container>');
t.put('/Plugins/Admin/Modules/Shared/Js/UIComponents/VimeoVideo.html','<img ng-if="!model"     ng-src="{{::replacementUrl}}"     title="Not set" /><iframe ng-if="model"        ng-src="{{videoUrl}}"        width="100%"        frameborder="0"        webkitallowfullscreen        mozallowfullscreen        allowfullscreen></iframe>');}]);