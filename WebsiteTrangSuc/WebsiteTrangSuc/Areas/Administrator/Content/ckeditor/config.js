/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
    // config.uiColor = '#AADC6E';
    // Define changes to default configuration here. For example:
    config.language = 'en';
    // config.uiColor = '#AADC6E';
    config.filebrowserBrowseUrl = "/Areas/Administrator/Content/ckfinder/ckfinder.html";
    config.filebrowserImageUrl = "/Areas/AdministratorContent/ckfinder/ckfinder.html?type=Images";
    config.filebrowserUploadUrl = "/Areas/Administrator/Content/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Files";

};
