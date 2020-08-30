(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-theme-theme-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/admininfo/adminadd/adminadd.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/admininfo/adminadd/adminadd.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  \n           \n            <!--------2nd Div Start-->\n            <form [formGroup]=\"addAdminForm\" (ngSubmit)=\"addAdmin();\">\n              <div class=\"basic_details\">\n  \n                <div class=\"row\">\n                  <div class=\"col-sm-3 col-md-offset-1\">\n                    <div class=\"form-group\">\n                      <label>First Name<span class=\"star_class\">*</span></label>\n                      <input class=\"form-control\" type=\"text\" id=\"first_name\" name=\"first_name\"\n                        formControlName=\"firstName\" placeholder=\"Enter first name\" [(ngModel)]=\"first_name\"\n                        [ngClass]=\"{ 'is-invalid': submitted && adminVal.firstName.errors }\" />\n  \n                      <div *ngIf=\"submitted && adminVal.firstName.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"adminVal.firstName.errors.required\">\n                          <div class=\"error_msg\"> First name is required</div>\n                        </div>\n  \n                      </div>\n                    </div>\n                  </div>\n  \n                  <div class=\"col-sm-3\">\n                    <div class=\"form-group\">\n                      <label >Last Name<span class=\"star_class\">*</span></label>\n  \n                      <!----Validation Start-->\n                      <input class=\"form-control\" type=\"text\" id=\"last_name\" name=\"last_name\" formControlName=\"lastName\"\n                        placeholder=\"Enter last name\" [(ngModel)]=\"last_name\"\n                        [ngClass]=\"{ 'is-invalid': submitted && adminVal.lastName.errors }\" />\n  \n                      <div *ngIf=\"submitted && adminVal.lastName.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"adminVal.lastName.errors.required\">\n                          <div class=\"error_msg\"> Last name is required</div>\n                        </div>\n  \n                      </div>\n  \n                      <!----Validation End-->\n                    </div>\n                  </div>\n  \n  \n  \n                  <div class=\"col-sm-3\">\n                    <div class=\"form-group\">\n                      <label for=\"company\">Phone Number<span class=\"star_class\">*</span> </label>\n  \n                      <!----Validation Start-->\n                      <input class=\"form-control\" type=\"text\" id=\"phone\" name=\"phone\" formControlName=\"phoneNumber\"\n                        placeholder=\"Enter phone\" [(ngModel)]=\"phone\" maxlength=\"10\" minlength=\"10\"\n                        (keypress)=\"numberOnly($event)\"\n                        [ngClass]=\"{ 'is-invalid': submitted && adminVal.phoneNumber.errors }\" />\n  \n                      <div *ngIf=\"submitted && adminVal.phoneNumber.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"adminVal.phoneNumber.errors.required\">\n                          <div class=\"error_msg\">Phone is required</div>\n                        </div>\n  \n                      </div>\n  \n                      <!----Validation End-->\n                    </div>\n                  </div>\n  \n                  <div class=\"col-sm-3\">\n  \n                    <div class=\"form-group\">\n                      <label for=\"name\">Gender<span class=\"star_class\">*</span></label>\n                      <select class=\"form-control\" (change)=\"changeGender($event)\" ng-Model=\"gender\" name=\"gender\"\n                        formControlName=\"genderName\"\n                        [ngClass]=\"{ 'is-invalid': submitted && adminVal.genderName.errors }\">\n                        <option value=\"\">--Choose Gender--</option>\n                        <option *ngFor=\"let gender of genders\" [ngValue]=\"gender\">{{gender}}</option>\n  \n                      </select>\n  \n                      <div *ngIf=\"submitted && adminVal.genderName.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"adminVal.genderName.errors.required\">\n                          <div class=\"error_msg\">Choose gender</div>\n                        </div>\n                      </div>\n  \n  \n                    </div>\n  \n                  </div>\n  \n  \n  \n                </div>\n  \n                <div class=\"row\">\n                  <div class=\"col-sm-3 col-md-offset-1\">\n                    <div class=\"form-group\">\n                      <label>Password<span class=\"star_class\">*</span></label>\n                      <div class=\"input-group mb-3 field_size_apple\">\n  \n                        <input [type]=\"addTextType ? 'text' : 'password'\" class=\"form-control\" id=\"add_password\" name=\"add_password\"\n                        formControlName=\"addPassword\" placeholder=\"Enter password\" [(ngModel)]=\"add_password\" appProtectedfield\n                        maxlength=\"10\" minlength=\"10\"\n                        [ngClass]=\"{ 'is-invalid': submitted && adminVal.addPassword.errors }\" />\n                         <!---------------Password Show Hide-->\n                         <div class=\"input-group-append\">\n                          <span class=\"input-group-text\">\n                            <i class=\"fa\" [ngClass]=\"{\n                          'fa-eye-slash': !addTextType,\n                          'fa-eye': addTextType }\" (click)=\"toggleAddTextType()\"></i>\n                          </span>\n                        </div>\n                        <!---------------Password Show Hide end-->\n  \n                       <div *ngIf=\"submitted && adminVal.addPassword.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"adminVal.addPassword.errors.required\" >\n                          <div class=\"error_msg\">Password is required</div>\n                        </div>\n                        <div *ngIf=\"adminVal.addPassword.errors.pattern\" >\n                          <div class=\"error_msg\">  First is upper case</div>\n                        </div>\n                        <div *ngIf=\"adminVal.addPassword.errors.pattern\" >\n                          <div class=\"error_msg\"> Next is number & character(1, 2, @)</div>\n                            <div class=\"error_msg\">  (eg. Local2@code)</div>\n                        </div>\n                      </div>\n  \n                      </div>\n                      \n                      \n                    </div>\n                  </div>\n  \n                  <div class=\"col-sm-3 col-md-offset-1\">\n                    <div class=\"form-group\">\n                      <label>Confirm Password<span class=\"star_class\">*</span></label>\n                      <div class=\"input-group mb-3 field_size_apple\">\n  \n                        <input [type]=\"confTextType ? 'text' : 'password'\" class=\"form-control\" id=\"conf_password\" name=\"conf_password\"\n                        formControlName=\"confPassword\" placeholder=\"Enter confirm password\"  appProtectedfield\n                        maxlength=\"10\" minlength=\"10\"\n                        [(ngModel)]=\"conf_password\" appConfirmEqualValidatorDirective=\"addPassword\"\n                        [ngClass]=\"{ 'is-invalid': submitted && adminVal.confPassword.errors }\" />\n                         <!---------------Password Show Hide-->\n                         <div class=\"input-group-append\">\n                          <span class=\"input-group-text\">\n                            <i class=\"fa\" [ngClass]=\"{\n                          'fa-eye-slash': !confTextType,\n                          'fa-eye': confTextType }\" (click)=\"toggleConfTextType()\"></i>\n                          </span>\n                        </div>\n                        <!---------------Password Show Hide end-->\n  \n                       <div *ngIf=\"submitted && adminVal.confPassword.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"adminVal.confPassword.errors.required\" >\n                          <div class=\"error_msg\">Confirm password is required</div>\n                        </div>\n                        <div *ngIf=\"adminVal.confPassword.errors.pattern\" >\n                          <div class=\"error_msg\">  Password pattern must be same</div>\n                        </div>\n                        <div *ngIf=\"adminVal.confPassword.errors.notEqual\" >\n                          <div class=\"error_msg\"> Add & Confirm Password does not match</div>\n                        </div>\n                      </div>\n  \n                      </div>\n                      \n                      \n                    </div>\n                  </div>\n  \n  \n                </div>\n  \n  \n  \n                <div class=\"row button_row\">\n                  <div class=\"card-footer1 buttons\">\n                    <button type=\"submit\" class=\"btn btn-sm btn-success\"><i class=\"fa fa-dot-circle-o\"></i>\n                      Submit</button>\n                  </div>\n                </div>\n  \n              </div>\n            </form>\n            <!------Basic Details Div2 End-->\n  \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/admininfo/admininfo/admininfo.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/admininfo/admininfo/admininfo.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn upper_space\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <strong>Admin Details</strong>\n  \n          </div>\n  \n  \n          <div class=\"card-body\">\n            <span class=\"pro_para\">Admin Information</span>\n  \n            <!--------First Div-->\n            <app-adminview></app-adminview>\n            <!------Basic Details Div1 End-->\n  \n            <span class=\"pro_para\">Add Admin</span>\n            <!--------2nd Div Start-->\n            <app-adminadd></app-adminadd>\n            <!------Basic Details Div2 End-->\n  \n  \n            <span class=\"pro_para\">Reset Admin Password(Optional)</span>\n            <!--------3nd Div Start-->\n           <app-resetadmin></app-resetadmin>\n            <!------Basic Details Div3 End-->\n  \n  \n          </div>\n  \n  \n  \n  \n        </div>\n      </div>\n  \n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/admininfo/adminview/adminview.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/admininfo/adminview/adminview.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  \n            <!--------First Div-->\n            <form>\n              <div class=\"basic_details admin-view\">\n  \n                <div class=\"row view_form\">\n  \n  \n                  <div class=\"col-sm-3\">\n                    <div class=\"form-group\">\n                      <label for=\"name\">First Name</label>\n                      <input class=\"form-control\" id=\"f_name\" name=\"f_name\" value=\"Gupi\" disabled>\n                    </div>\n                  </div>\n  \n  \n                  <div class=\"col-sm-3\">\n                    <div class=\"form-group\">\n                      <label for=\"ccnumber\">Last Name</label>\n  \n                      <input class=\"form-control\" id=\"l_name\" name=\"l_name\" value=\"Gayan\" disabled />\n                    </div>\n                  </div>\n  \n                  <div class=\"col-sm-3\">\n                    <div class=\"form-group\">\n                      <label for=\"name\">Phone Number</label>\n                      <input class=\"form-control\" id=\"phone\" name=\"phone\" value=\"8961272806\" disabled />\n                    </div>\n                  </div>\n  \n                  <div class=\"col-sm-3\">\n                    <div class=\"form-group\">\n                      <label for=\"ccnumber\">Gender</label>\n                      <input class=\"form-control\" id=\"gender\" name=\"gender\" value=\"Male\" disabled />\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </form>\n            <!------Basic Details Div1 End-->\n  \n          \n  \n  \n         ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/admininfo/resetadmin/resetadmin.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/admininfo/resetadmin/resetadmin.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n            \n  \n            \n  \n            \n            <!--------3nd Div Start-->\n            <form [formGroup]=\"resetPassForm\" (ngSubmit)=\"resetPass();\">\n              <div class=\"basic_details admin_reset_pass\">\n          \n                <div class=\"row\">\n                  <div class=\"col-md-6 mx-auto\">\n                    \n                      \n                        <div class=\"form-group\">\n                          <label>Old Password<span class=\"star_class\">*</span></label>\n                          <div class=\"input-group mb-3\">\n                            <input [type]=\"oldTextType ? 'text' : 'password'\" class=\"form-control\" id=\"old_pass\"\n                              name=\"old_pass\" formControlName=\"oldPass\"  placeholder=\"Enter old password\"\n                              [(ngModel)]=\"first_name\" appProtectedfield maxlength=\"10\" minlength=\"10\"\n                              [ngClass]=\"{ 'is-invalid': isPasswordSubmitte && passVal.oldPass.errors }\" />\n          \n                            <!---------------Password Show Hide-->\n                            <div class=\"input-group-append\">\n                              <span class=\"input-group-text\">\n                                <i class=\"fa\" [ngClass]=\"{\n                              'fa-eye-slash': !oldTextType,\n                              'fa-eye': oldTextType }\" (click)=\"toggleOldTextType()\"></i>\n                              </span>\n                            </div>\n                            <!---------------Password Show Hide end-->\n          \n                            <div *ngIf=\"isPasswordSubmitte && passVal.oldPass.errors\" class=\"invalid-feedback\">\n                              <div *ngIf=\"passVal.oldPass.errors.required\" >\n                                <div class=\"error_msg\">Old password is required</div>\n                              </div>\n                              <div *ngIf=\"passVal.oldPass.errors.pattern\" >\n                                <div class=\"error_msg\">  First is upper case</div>\n                              </div>\n                              <div *ngIf=\"passVal.oldPass.errors.pattern\" >\n                                <div class=\"error_msg\"> Next is number & character(1, 2, @)</div>\n                                  <div class=\"error_msg\">  (eg. Local2@code)</div>\n                              </div>\n                            </div>\n          \n                          </div>\n          \n                        </div>\n          \n          \n          \n                        <div class=\"form-group\">\n                          <label>New Password<span class=\"star_class\">*</span></label>\n          \n                          <!----Validation Start-->\n                          <div class=\"input-group mb-3\">\n                            <input [type]=\"newTextType ? 'text' : 'password'\" class=\"form-control\" id=\"new_pass\"\n                              name=\"new_pass\" formControlName=\"newPass\" placeholder=\"Enter new password\"\n                              [(ngModel)]=\"new_pass\" appProtectedfield maxlength=\"10\" minlength=\"10\"\n                              [ngClass]=\"{ 'is-invalid': isPasswordSubmitte && passVal.newPass.errors }\" />\n                              \n                            <!---------------Password Show Hide-->\n                            <div class=\"input-group-append\">\n                              <span class=\"input-group-text\">\n                                <i class=\"fa\" [ngClass]=\"{\n                              'fa-eye-slash': !newTextType,\n                              'fa-eye': newTextType }\" (click)=\"toggleNewTextType()\"></i>\n                              </span>\n                            </div>\n                            <!---------------Password Show Hide end-->\n          \n                            <div *ngIf=\"isPasswordSubmitte && passVal.newPass.errors\" class=\"invalid-feedback\">\n                              <div *ngIf=\"passVal.newPass.errors.required\" >\n                                <div class=\"error_msg\">New password is required</div>\n                              </div>\n                              <div *ngIf=\"passVal.newPass.errors.pattern\" >\n                                <div class=\"error_msg\">  First is upper case</div>\n                              </div>\n                              <div *ngIf=\"passVal.newPass.errors.pattern\" >\n                                <div class=\"error_msg\"> Next is number & character(1, 2, @)</div>\n                                  <div class=\"error_msg\">  (eg. Local2@code)</div>\n                              </div>\n                            </div>\n                          </div>\n                          <!----Validation End-->\n          \n                        </div>\n          \n                        <div class=\"form-group\">\n                          <label>Confirm Password<span class=\"star_class\">*</span> </label>\n          \n                          <!----Validation Start-->\n                          <div class=\"input-group mb-3\">\n                            <input [type]=\"confirmTextType ? 'text' : 'password'\" class=\"form-control\" id=\"confirm_pass\"\n                              name=\"confirm_pass\" formControlName=\"confirmPass\" placeholder=\"Enter confirm password\"\n                              maxlength=\"10\" minlength=\"10\"\n                              [(ngModel)]=\"confirm_pass\" appConfirmEqualValidatorDirective=\"newPass\" appProtectedfield\n                              [ngClass]=\"{ 'is-invalid': isPasswordSubmitte && passVal.confirmPass.errors }\" />\n          \n                            <!---------------Password Show Hide-->\n                            <div class=\"input-group-append\">\n                              <span class=\"input-group-text\">\n                                <i class=\"fa\" [ngClass]=\"{\n                              'fa-eye-slash': !confirmTextType,\n                              'fa-eye': confirmTextType\n                            }\" (click)=\"toggleConfirmTextType()\"></i>\n                              </span>\n                            </div>\n                            <!---------------Password Show Hide end-->\n          \n                            <div *ngIf=\"isPasswordSubmitte && passVal.confirmPass.errors\" class=\"invalid-feedback\">\n                              <div *ngIf=\"passVal.confirmPass.errors.required\" >\n                                <div class=\"error_msg\">Confirm password is required</div>\n                              </div>\n                              <div *ngIf=\"passVal.confirmPass.errors.pattern\" >\n                                <div class=\"error_msg\">Password pattern must be same</div>\n                              </div>\n                              <div *ngIf=\"passVal.confirmPass.errors.notEqual\" >\n                                <div class=\"error_msg\">New & Confirm Password does not match</div>\n                              </div>\n          \n                            </div>\n                          </div>\n                          <!----Validation End-->\n                        </div>\n          \n                        <div class=\"row button_row\">\n                          <div class=\"card-footer1 buttons\">\n                            <button type=\"submit\" class=\"btn btn-sm btn-success\"><i class=\"fa fa-dot-circle-o\"></i>\n                              Submit</button>\n                          </div>\n                        </div>\n                    \n                  </div>\n          \n          \n          \n          \n                </div>\n          \n          \n          \n                \n          \n              </div>\n            </form>\n            <!------Basic Details Div3 End-->\n  \n  \n          ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/banner/banneradd.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/banner/banneradd.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"banner_images upper_space\">\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <strong>Banner Add</strong>\n      </div>\n      <form id=\"bannerImage\" name=\"bannerImage\"  [formGroup]=\"bannerImageForm\" (ngSubmit)=\"bannerSubmit()\">\n        <div class=\"card-body\">\n            <div class=\"form-group field_inn\">\n              <label class=\"form-col-form-label\" for=\"inputSuccess1\">Display Image Here</label>\n              <div class=\"display_image\">\n\n                <img *ngFor=\"let url of urls\" [src]=\"url\" width=\"100\" height=\"100\"  />\n\n              </div>\n            \n\n            </div>\n            <div class=\"form-group field_inn1\">\n              <label class=\"form-col-form-label\" for=\"inputError1\">Upload Image Here<span class=\"star_class\">*</span></label>\n\n              \n                 <!----Validation Start-->\n                 <input type=\"file\" class=\"form-control\" id=\"banner_image\" [(ngModel)]=\"banner_image\"\n                 formControlName=\"bannerImg\"\n                 [ngClass]=\"{ 'is-invalid': submitted && bannerval.bannerImg.errors }\"\n                 (change)=\"onSelectFile($event)\" multiple accept=\"image/*\" />\n\n                 <div *ngIf=\"submitted && bannerval.bannerImg.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"bannerval.bannerImg.errors.required\">\n                    <div class=\"error_msg\"> Banner image is required</div>\n                  </div>\n                  </div>\n                <!----Validation End-->\n\n                 \n\n\n            </div>\n          </div>\n\n\n\n            <div class=\"card-footer buttons \">\n              <!--button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button-->\n          <button type=\"submit\" class=\"btn btn-sm btn-primary \" >\n            <i class=\"fa fa-dot-circle-o\"></i> Add\n          </button>\n          \n          </div>\n\n          \n        \n      </form>\n    </div>\n  </div><!--/.col-->\n  <div class=\"col-sm-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <strong>Banner List </strong> \n      </div>\n      <div class=\"card-body\">\n\n        <div class=\"scrolling_div\">\n          \n        <table class=\"table table-bordered\">\n          <thead>\n            <tr>\n              <th>Sl.No</th>\n              <th>Banner Image</th>\n              <th>Banner Name</th>\n              \n              <th colspan=2>Action</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>1</td>\n              <td><img alt=\"admin@bootstrapmaster.com\" class=\"img-avatar\" src=\"assets/img/avatars/6.jpg\"></td>\n              <td>head.jpg</td>\n              \n              \n              <td>\n                <!--a href=\"\" onclick=\"return confirm ('Do you want to edit ??')\" class=\"badge badge-primary\"><i class=\"cui-pencil icons font-2xl mt-4\"></i></a--> &nbsp; \n                <a href=\"\" onclick=\"return confirm ('Are you sure ??')\" class=\"badge badge-danger\"><i class=\"cui-trash icons font-2xl mt-4\"></i></a>\n              </td>\n            </tr>\n\n            <tr>\n              <td>2</td>\n              <td><img alt=\"admin@bootstrapmaster.com\" class=\"img-avatar\" src=\"assets/img/avatars/6.jpg\"></td>\n              <td>head.jpg</td>\n              \n              \n              <td>\n                <!--a href=\"\" onclick=\"return confirm ('Do you want to edit ??')\" class=\"badge badge-primary\"><i class=\"cui-pencil icons font-2xl mt-4\"></i></a--> &nbsp; \n                <a href=\"\" onclick=\"return confirm ('Are you sure ??')\" class=\"badge badge-danger\"><i class=\"cui-trash icons font-2xl mt-4\"></i></a>\n              </td>\n            </tr>\n          \n           \n           \n           \n           \n          </tbody>\n        </table>\n  \n      </div> <!------scrolling_div----->\n  \n  \n        <ul class=\"pagination\">\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n          <li class=\"page-item active\">\n            <a class=\"page-link\" href=\"#\">1</a>\n          </li>\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n        </ul>\n      </div>\n    </div>\n  </div><!--/.col-->\n\n  \n</div></div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/category/categoryadd.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/category/categoryadd.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn upper_space\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Category Details</strong>\n\n\n        </div>\n\n        <form id=\"categoryDetails\" name=\"categoryDetails\" [formGroup]=\"categoryDetailsForm\"\n          (ngSubmit)=\"categoryDetails()\">\n\n          <div class=\"card-body\">\n           \n\n            <div class=\"basic_details\">\n\n              <div class=\"row\">\n\n\n                <div class=\"col-sm-6\">\n                  <div class=\"form-group\">\n                    <label for=\"name\">Category Name<span class=\"star_class\">*</span></label>\n\n\n                    <input class=\"form-control\" type=\"text\" id=\"cat_name\" name=\"cat_name\"\n                      formControlName=\"categoryName\" placeholder=\"Enter category name\"\n                      [(ngModel)]=\"cat_name\" \n                      [ngClass]=\"{ 'is-invalid': submitted && catVal.categoryName.errors }\" />\n\n                    <div *ngIf=\"submitted && catVal.categoryName.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"catVal.categoryName.errors.required\">\n                        <div class=\"error_msg\"> Category name is required</div>\n                      </div>\n\n                    </div>\n\n\n                  </div>\n                </div>\n\n\n\n                <div class=\"col-sm-6\">\n                  <div class=\"form-group\">\n                    <label for=\"ccnumber\">SEO Url(Optional)</label>\n                    <input type=\"text\" id=\"cat_meta\" name=\"cat_meta\" [(ngModel)]=\"cat_meta\"\n                      class=\"form-control\" placeholder=\"Enter seo url\" formControlName=\"seoURL\">\n\n                  </div>\n                </div>\n              </div>\n\n\n\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\">\n                    <label for=\"ccnumber\">Category Description<span class=\"star_class\">*</span></label>\n\n                    <angular-editor id=\"cat_detailse\" name=\"cat_detailse\" formControlName=\"categoryDescription\"\n                      [placeholder]=\"'Enter description here...'\" [(ngModel)]=\"cat_detailse\"\n                      [ngClass]=\"{ 'is-invalid': submitted && catVal.categoryDescription.errors }\">\n                    </angular-editor>\n\n                    <div *ngIf=\"submitted && catVal.categoryDescription.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"catVal.categoryDescription.errors.required\">\n                        <div class=\"error_msg\"> Description is required(Max 400 - Min 4)</div>\n                      </div>\n\n                      <div *ngIf=\"catVal.categoryDescription.errors.minLength\">\n                        <div class=\"error_msg\">Text length(Min 4)</div>\n                      </div>\n\n                    </div>\n\n                  </div>\n                </div>\n              </div>\n\n\n              <div class=\"row\">\n\n\n                <div class=\"form-group col-sm-3 \">\n                  <label for=\"city\">Category Image<span class=\"star_class\">*</span></label>\n\n                  <input type=\"file\" class=\"form-control\" name=\"cat_img_loc\" id=\"cat_img_loc\"\n                    [(ngModel)]=\"local_cat_img_loc\" formControlName=\"categoryImg\"\n                    [ngClass]=\"{ 'is-invalid': submitted && catVal.categoryImg.errors }\" (change)=\"preview(file.files)\"\n                    #file accept=\"image/*\" />\n\n                  <div *ngIf=\"submitted && catVal.categoryImg.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"catVal.categoryImg.errors.required\">\n                      <div class=\"error_msg\"> Category image is required</div>\n                    </div>\n                  </div>\n\n\n\n\n\n                </div>\n                <div class=\"form-group col-sm-3\">\n\n\n                  <img class=\"img-avatar fox\" *ngIf=\"imgURL\" [src]=\"imgURL\" width=\"100\" height=\"100\" />\n                </div>\n\n\n              </div>\n\n            </div>\n            <!------Basic Details Div-->\n\n\n\n          </div>\n\n\n          <div class=\"card-footer buttons\">\n            <button type=\"submit\"  class=\"btn btn-sm btn-success\"\n            ><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n            <!--button type=\"reset\" class=\"btn btn-sm btn-danger\" [disabled]=\"!categoryDetails.valid\"><i\n                class=\"fa fa-ban\"></i> Reset</button-->\n          </div>\n\n        </form>\n\n\n      </div>\n    </div>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/category/categorylist.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/category/categorylist.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"animated fadeIn upper_space\">\n\n  <div class=\"col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-md-3\">\n            <i class=\"fa fa-align-justify\"></i> Category List\n          </div>\n          <div class=\"col-md-6 mb-3 mb-xl-0 input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"icon-magnifier\"></i></span>\n            </div>\n\n            <input class=\"form-control\" name=\"valuetosearch\" placeholder=\"Search..\" type=\"text\">\n          </div>\n\n          <div class=\"col-md-3\">\n            <button class=\"btn btn-block btn-success\" [routerLink]=\"['/theme/categoryadd']\" type=\"button\">Add\n              Category</button>\n          </div>\n        </div>\n\n      </div>\n\n      <!--Progress Bar----->\n      \n      <!--Progress Bar End----->\n\n      <div class=\"card-body\">\n        \n        <div class=\"scrolling_div\">\n          \n          <table class=\"table table-bordered\" >\n            <thead>\n              <tr>\n                <th>Sl.No</th>\n                <th>Category Name</th>\n                <th>Category Meta</th>\n                <th>Category Description</th>\n                <th>Category Image</th>\n                <th colspan=2>Action</th>\n              </tr>\n            </thead>\n           \n            <tbody >\n              \n              <tr  *ngFor=\"let category of categoryData; let i = index\">\n                <!--td>{{category.cat_id}}</td-->\n                <td>{{i+1}}</td>\n                <td>{{category.cat_name}}</td>\n                <td>{{category.cat_meta}}</td>\n                <td>{{category.cat_detailse}}</td>\n                <td><img alt=\"admin@bootstrapmaster.com\" class=\"img-avatar\" src=\"assets/img/avatars/6.jpg\"></td>\n\n                <td><button \n                  class=\"badge badge-primary ox mx-2\"\n                  mwlConfirmationPopover\n                  [popoverTitle]=\"updateTitle\"\n                  [popoverMessage]=\"updateMessage\"\n                  placement=\"top\"\n                  (confirm)=\"confirmUpdated(category.cat_id)\"\n                  (cancel)=\"cancelUpdated = true\"\n                 >\n                  <i class=\"cui-pencil icons font-2xl mt-4\"></i></button> \n\n                  <button type=\"button\"\n                  class=\"badge badge-danger mx-2\"\n                  mwlConfirmationPopover\n                  [popoverTitle]=\"popoverTitle\"\n                  [popoverMessage]=\"popoverMessage\"\n                  placement=\"top\"\n                  (confirm)=\"confirmDeleted(category.cat_id)\"\n                  (cancel)=\"cancelDeleted = true\"><i\n                      class=\"cui-trash icons font-2xl mt-4\"></i></button>\n\n                      \n                </td>\n              </tr>\n\n\n\n            </tbody>\n          </table>\n        </div>\n        <!------scrolling_div--(click)=\"deleteCatecory(category.cat_id)\"-\n                  (click)=\"updateCategoryClick(category.cat_id)\"-->\n\n        <ul class=\"pagination\">\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n          <li class=\"page-item active\">\n            <a class=\"page-link\" href=\"#\">1</a>\n          </li>\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-----mwlConfirmationPopover\n                  [popoverUpdateTitle]=\"popoverUpdateTitle\"\n                  [popoverUpdateMessage]=\"popoverUpdateMessage\"\n                  placement=\"left\"\n                  (confirm)=\"confirmUpdated()\"\n                  (cancel)=\"cancelUpdated = true\"-->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/customer/customer.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/customer/customer.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"animated fadeIn upper_space\">\n<div class=\"col-lg-12\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-4\">\n          <i class=\"fa fa-align-justify\"></i> Customer List\n        </div>\n        \n        <div class=\"col-12 col-sm-12 col-md-2 col-xl mb-3 mb-xl-0 input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"icon-magnifier\"></i></span>\n          </div>\n          \n           <input class=\"form-control\" name=\"valuetosearch\" id=\"myInput\" placeholder=\"Search..\" type=\"text\">\n        </div>\n        \n        <div class=\"col-lg-3\">\n          <button class=\"btn btn-block btn-success\" routerLink=\"/theme/customeradd\" type=\"button\">Add Customer</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-body\">\n\n        <div class=\"scrolling_div\">\n\n\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th>Sl.No</th>\n            <th>Customer-Id</th>\n            <th>Date registered</th>\n            <th>Customer Name</th>\n            <th>Phone Number</th>\n            <th>Address</th>\n            <th>Street</th>\n            <th>Status</th>\n            <th colspan=2>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>1</td>\n            <td>012</td>\n            <td>2012/01/01</td>\n            <td>Binod Singh</td>\n            <td>+91-7875454515</td>\n            <td>Jadavpur</td>\n            <td>Golipure</td>\n            <td>\n              <span class=\"badge badge-success\">Active</span>\n            </td>\n            <td><a href=\"\" onclick=\"return confirm ('Do you want to edit ??')\" class=\"badge badge-primary\"><i class=\"cui-pencil icons font-2xl mt-4\"></i></a> &nbsp; \n              <a href=\"\" onclick=\"return confirm ('Are you sure ??')\" class=\"badge badge-danger\"><i class=\"cui-trash icons font-2xl mt-4\"></i></a>\n            </td>\n          </tr>\n          <tr>\n            <td>1</td>\n            <td>012</td>\n            <td>2012/01/01</td>\n            <td>Binod Singh</td>\n            <td>+91-7875454515</td>\n            <td>Jadavpur</td>\n            <td>Golipure</td>\n            <td>\n              <span class=\"badge badge-success\">Active</span>\n            </td>\n            <td><a href=\"\" onclick=\"return confirm ('Do you want to edit ??')\" class=\"badge badge-primary\"><i class=\"cui-pencil icons font-2xl mt-4\"></i></a> &nbsp; \n              <a href=\"\" onclick=\"return confirm ('Are you sure ??')\" class=\"badge badge-danger\"><i class=\"cui-trash icons font-2xl mt-4\"></i></a>\n            </td>\n          </tr>\n          <tr>\n            <td>1</td>\n            <td>012</td>\n            <td>2012/01/01</td>\n            <td>Binod Singh</td>\n            <td>+91-7875454515</td>\n            <td>Jadavpur</td>\n            <td>Golipure</td>\n            <td>\n              <span class=\"badge badge-success\">Active</span>\n            </td>\n            <td><a href=\"\" onclick=\"return confirm ('Do you want to edit ??')\" class=\"badge badge-primary\"><i class=\"cui-pencil icons font-2xl mt-4\"></i></a> &nbsp; \n              <a href=\"\" onclick=\"return confirm ('Are you sure ??')\"  class=\"badge badge-danger\"><i class=\"cui-trash icons font-2xl mt-4\"></i></a>\n            </td>\n          </tr>\n          <tr>\n            <td>1</td>\n            <td>012</td>\n            <td>2012/01/01</td>\n            <td>Binod Singh</td>\n            <td>+91-7875454515</td>\n            <td>Jadavpur</td>\n            <td>Golipure</td>\n            <td>\n              <span class=\"badge badge-success\">Active</span>\n            </td>\n            <td><a href=\"\" onclick=\"return confirm ('Do you want to edit ??')\" class=\"badge badge-primary\"><i class=\"cui-pencil icons font-2xl mt-4\"></i></a> &nbsp; \n              <a href=\"\" onclick=\"return confirm ('Are you sure ??')\" class=\"badge badge-danger\"><i class=\"cui-trash icons font-2xl mt-4\"></i></a>\n            </td>\n          </tr>\n          <tr>\n            <td>1</td>\n            <td>012</td>\n            <td>2012/01/01</td>\n            <td>Binod Singh</td>\n            <td>+91-7875454515</td>\n            <td>Jadavpur</td>\n            <td>Golipure</td>\n            <td>\n              <span class=\"badge badge-success\">Active</span>\n            </td>\n            <td><a href=\"\" onclick=\"return confirm ('Do you want to edit ??')\" class=\"badge badge-primary\"><i class=\"cui-pencil icons font-2xl mt-4\"></i></a> &nbsp; \n              <a href=\"\" onclick=\"return confirm ('Are you sure ??')\" class=\"badge badge-danger\"><i class=\"cui-trash icons font-2xl mt-4\"></i></a>\n            </td>\n          </tr>\n         \n        </tbody>\n      </table>\n    </div> <!------scrolling_div----->\n\n      <ul class=\"pagination\">\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n        <li class=\"page-item active\">\n          <a class=\"page-link\" href=\"#\">1</a>\n        </li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/customer/customeradd.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/customer/customeradd.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div class=\"animated fadeIn upper_space\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n\n          \n            <div class=\"card\">\n              <div class=\"card-header\">\n                <strong>Customer Information Details</strong>\n               <!--small>Fill up The Form Below</small-->\n              </div>\n\n\n              <form id=\"customerAdd\" name=\"customerAdd\" (ngSubmit)=\"customerAdd.valid && onSubmit()\" >\n                  <!----------First Section Body Start-->\n                  \n                  <div class=\"card-body\">\n                    \n                    <h2 class=\"local_class1\">Basic Information</h2>\n                    <div class=\"basic_details\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-4\">\n                        <div class=\"form-group\" >\n                          <label for=\"name\">First Name</label>\n                          <input class=\"form-control\" id=\"first_name\" placeholder=\"Enter your first name\" type=\"text\">\n                        </div>\n                      </div>\n\n                      <div class=\"col-sm-4\">\n                        <div class=\"form-group\">\n                          <label for=\"name\">Middle Name</label>\n                          <input class=\"form-control\" id=\"middle_name\" placeholder=\"Enter your middle name\" type=\"text\">\n                        </div>\n                      </div>\n\n                      <div class=\"col-sm-4\">\n                        <div class=\"form-group\">\n                          <label for=\"name\">Last Name</label>\n                          <input class=\"form-control\" id=\"last_name\" placeholder=\"Enter your last name\" type=\"text\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n\n                      <div class=\"col-sm-4\">\n                        <div class=\"form-group\">\n                          <label for=\"gender\">Gender</label>\n                          <select id=\"gender\" name=\"gender\" class=\"form-control\">\n                            <option value=\"0\">Please select</option>\n                            <option value=\"1\">Male</option>\n                            <option value=\"2\">Female</option>\n                            <option value=\"3\">Others</option>\n                          </select>\n                  \n                        </div>\n                      </div>\n\n\n                      <div class=\"col-sm-4\">\n                        <div class=\"form-group\">\n                          <label for=\"ccnumber\">Email</label>\n                          <input type=\"email\" id=\"nf-email\" name=\"nf-email\" class=\"form-control\" placeholder=\"Enter Email\" autocomplete=\"email\">\n                  \n                        </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                        <div class=\"form-group\">\n                          <label for=\"ccnumber\">Phone Number</label>\n                          <input type=\"tel\" id=\"phone\" name=\"phone\" class=\"form-control\" placeholder=\"Enter phone number\" autocomplete=\"phone\">\n                  \n                        </div>\n                      </div>\n                    </div> <!------Basic Details Div-->\n\n                  </div>\n                  \n                   \n\n\n                      \n                \n                \n                    <!----------First Section Body End-->\n\n                      <!----------Second Section Body Start-->\n                      \n\n                        \n                      <h2 class=\"local_class1\">Address Details</h2>\n                      <div class=\"basic_details\">\n                          <div class=\"row\">\n                            <div class=\"form-group col-sm-4\">\n                              <label for=\"company\">House Number/ Flat Number</label>\n                              <input type=\"number\" class=\"form-control\" id=\"house_flat_number\" placeholder=\"Enter house or flat number\">\n                            </div>\n                            <div class=\"form-group col-sm-4\">\n                              <label for=\"street\">Street Name</label>\n                              <input type=\"text\" class=\"form-control\" id=\"street_name\" placeholder=\"Enter street name\">\n                            </div>\n\n                            <div class=\"form-group col-sm-4\">\n                              <label for=\"city\">Country</label>\n                              <input type=\"text\" class=\"form-control\" id=\"country\" value=\"India\" readonly >\n                          </div>\n                          \n                          </div>\n                          <div class=\"row\">\n                             \n                              <div class=\"form-group col-sm-4\">\n                                <label for=\"street\">State/ Region</label>\n                                <!--input type=\"text\" class=\"form-control\" id=\"street_name\" placeholder=\"Enter state name\"-->\n          \n                                <select id=\"state\" name=\"state\" class=\"form-control\">\n                                  <option value=\"0\">Please select</option>\n                                  <option value=\"1\">Option #1</option>\n                                  <option value=\"2\">Option #2</option>\n                                  <option value=\"3\">Option #3</option>\n                                </select>\n                              </div>\n\n                              <div class=\"form-group col-sm-4\">\n                                <label for=\"street\">City</label>\n                                <input type=\"text\" class=\"form-control\" id=\"street_name\" placeholder=\"Enter city\">\n                              </div>\n\n                              <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label for=\"city\">Postal Code/ Pin Code/ Zip Code</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"postal_code\" placeholder=\"Enter postal code\">\n                                  \n                                </div>\n                              </div>\n                             \n                            </div>\n\n                            </div><!------Basic Details Div-->\n\n                            \n          \n                           \n          \n                            \n                       \n\n\n                     \n\n                      <!----------Second Section Body End-->\n\n                    <!----------Third Section Body Start-->\n                    <h2 class=\"local_class1\">Other Details</h2>\n\n                    <div class=\"basic_details\">\n                    <div class=\"row\">\n                      <div class=\"form-group col-sm-4 upload_sec\">\n                          <label for=\"city\">Customer Image</label>\n                          <input type=\"file\" class=\"form-control\" id=\"customer_image\" placeholder=\"\">\n                      </div>\n                      <div class=\"form-group col-sm-2 image_tag\">\n                        <img alt=\"\" class=\"img-avatar\" src=\"assets/img/avatars/6.jpg\">\n                    </div>\n                      <div class=\"form-group col-sm-4\">\n  \n                      <label for=\"street\">Status</label>\n                      <div class=\"col-md-9 col-form-label\">\n                        <div class=\"form-check form-check-inline mr-1\">\n                          <input class=\"form-check-input\" type=\"checkbox\" id=\"active_checkbox\" value=\"active\" checked>\n                          <label class=\"form-check-label\" for=\"inline-checkbox1\">Active</label>\n                        </div>\n                        <div class=\"form-check form-check-inline mr-1\">\n                          <input class=\"form-check-input\" type=\"checkbox\" id=\"inactive_checkbox\" value=\"inactive\">\n                          <label class=\"form-check-label\" for=\"inline-checkbox2\">Inactive</label>\n                        </div>\n                      \n                      </div>\n\n\n                    </div>\n                  \n                      \n  \n                      </div>\n  \n\n                    </div><!------Basic Details Div-->\n\n\n                      <!----------Third Section Body End-->\n\n                \n                    </div>\n              <div class=\"card-footer buttons\">\n                <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n                <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n              </div>\n              \n            \n</form>\n\n\n\n          </div>\n\n        </div>\n    </div>\n\n\n\n   \n     \n\n\n\n \n   ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/productinfo/product/product.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/productinfo/product/product.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn upper_space\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Product Details</strong>\n\n        </div>\n\n\n        <div class=\"card-body\">\n          <span class=\"pro_para\">Product Information</span>\n\n          <!--------First Div-->\n          <app-productadd></app-productadd>\n          <!------Basic Details Div1 End-->\n\n          <span class=\"pro_para\">Add Quantity</span>\n          <!--------2nd Div Start-->\n           <app-quantityadd></app-quantityadd>\n          <!------Basic Details Div2 End-->\n\n\n\n\n\n        </div>\n\n\n\n\n      </div>\n    </div>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/productinfo/productadd/productadd.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/productinfo/productadd/productadd.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--------First Div-->\n<form [formGroup]=\"productInfoForm\" (ngSubmit)=\"productInfo();\">\n  <div class=\"basic_details\">\n    <!---For_Edit Button-->\n    <!--div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"form-groups\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary info_edit basic_label\" name=\"editbutton\"\n            id=\"editbutton\" (click)=\"catShowHide()\">\n            <i class=\"cui-pencil icons font-2xl mt-4\"></i></button>\n\n        </div>\n      </div>\n    </div-->\n    <!---For_Edit Button-->\n    <!----ALWAYS NAME AND ID SAME AS POST MAN KEY {{product_code}}-->\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <div class=\"form-group\">\n          <label for=\"name\">Category Name<span class=\"star_class\">*</span></label>\n          <select class=\"form-control\" name=\"categoryName\" id=\"categoryName\" (change)=\"changeCategory($event)\" \n          formControlName=\"category_id\" ng-model=\"category_id\"\n          [ngClass]=\"{ 'is-invalid': submitted && pval.category_id.errors }\">\n            <option value=\"\">--Choose Category--</option>\n            <option *ngFor=\"let category of categories\" [ngValue]=\"category.cat_id\">\n              {{category.cat_name}}\n            </option>\n          </select>\n\n            <div *ngIf=\"submitted && pval.category_id.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"pval.category_id.errors.required\">\n              <div class=\"error_msg\">Choose category </div>\n            </div>\n            </div>\n\n\n        </div>\n      </div>\n\n      <div class=\"col-sm-3\">\n        <div class=\"form-group\">\n          <label for=\"name\">Product Code</label>\n          <input class=\"form-control\" id=\"product_code\" name=\"product_code\"  type=\"text\"\n          formControlName='product_code' [(ngModel)]='product_code' placeholder=\"Product code\">\n        </div>\n      </div>\n\n\n      <div class=\"col-sm-3\">\n        <div class=\"form-group\" >\n          <label for=\"ccnumber\">Product Name<span class=\"star_class\">*</span></label>\n\n          <input class=\"form-control\"  type=\"text\" id=\"product_name\" name=\"product_name\" \n          formControlName=\"product_name\"\n          placeholder=\"Product name\"  [(ngModel)]=\"product_name\"\n          [ngClass]=\"{ 'is-invalid': submitted && pval.product_name.errors }\"/>\n\n            <div *ngIf=\"submitted && pval.product_name.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"pval.product_name.errors.required\">\n              <div class=\"error_msg\"> Product Name is required</div>\n            </div>\n              \n            </div>\n\n\n        </div>\n      </div>\n\n      <div class=\"col-sm-3\">\n        <div class=\"form-group\" >\n          <label for=\"name\">Brand Name<span class=\"star_class\">*</span></label>\n          <!----Validation Start-->\n          <input class=\"form-control\"  type=\"text\" id=\"product_brand_name\" name=\"product_brand_name\" \n          formControlName=\"product_brand_name\"\n          placeholder=\"Enter brand name\" [(ngModel)]=\"product_brand_name\"\n          [ngClass]=\"{ 'is-invalid': submitted && pval.product_brand_name.errors }\"/>\n\n            <div *ngIf=\"submitted && pval.product_brand_name.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"pval.product_brand_name.errors.required\">\n              <div class=\"error_msg\"> Product Name is required</div>\n            </div>\n              \n            </div>\n\n          <!----Validation End-->\n        </div>\n      </div>\n\n\n    </div>\n\n\n\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"form-group\" >\n          <label for=\"ccnumber\">Product Description<span class=\"star_class\">*</span></label>\n\n          \n          <angular-editor id=\"product_details\" name=\"product_details\"\n            formControlName=\"product_details\" [placeholder]=\"'Enter description here...'\"\n            [(ngModel)]=\"product_details\" \n            [ngClass]=\"{ 'is-invalid': submitted && pval.product_details.errors }\">\n          </angular-editor>\n          \n          <div *ngIf=\"submitted && pval.product_details.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"pval.product_details.errors.required\">\n              <div class=\"error_msg\"> Description is required(Max 400 - Min 4)</div>\n            </div>\n\n            <div *ngIf=\"pval.product_details.errors.minLength\">\n              <div class=\"error_msg\">Text length(Min 4)</div>\n            </div>\n              \n            </div>\n\n         \n\n        </div>\n      </div>\n    </div>\n\n\n\n\n    <div class=\"row\">\n      \n      <div class=\"form-group col-sm-3 \" >\n        <label for=\"city\">Product Image<span class=\"star_class\">*</span></label>\n\n\n        \n        <input type=\"file\" class=\"form-control\" name=\"product_img\" id=\"product_img\" \n        [(ngModel)]=\"product_img\" formControlName=\"product_img\"\n          [ngClass]=\"{ 'is-invalid': submitted && pval.product_img.errors }\"\n          (change)=\"preview(file.files)\" #file accept=\"image/*\" />\n\n          <div *ngIf=\"submitted && pval.product_img.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"pval.product_img.errors.required\">\n              <div class=\"error_msg\"> product image is required</div>\n            </div>\n            </div>\n\n      </div>\n      <div class=\"form-group col-sm-5 \">\n        <img class=\"img-avatar fox\" *ngIf=\"imgURL\" [src]=\"imgURL\" width=\"100\" height=\"100\" />\n      </div>\n      \n    </div>\n    \n    <div class=\"row button_row\">\n      <div class=\"card-footer1 buttons\">\n        <button type=\"submit\"  class=\"btn btn-sm btn-success\"><i\n            class=\"fa fa-dot-circle-o\"></i> Submit</button>\n      </div>\n    </div>\n\n\n  </div>\n</form>\n<!------Basic Details Div1 End-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/productinfo/productlist.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/productinfo/productlist.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"animated fadeIn upper_space\">\n\n<div class=\"col-lg-12\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n    \n      <div class=\"row align-items-center\">\n        <div class=\"col-md-3\">\n          <i class=\"fa fa-align-justify\"></i> Product List\n        </div>\n        <div class=\"col-md-6 mb-3 mb-xl-0 input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"icon-magnifier\"></i></span>\n          </div>\n          \n           <input class=\"form-control\" name=\"valuetosearch\" id=\"myInput\" placeholder=\"Search..\" type=\"text\">\n        </div>\n        \n        <div class=\"col-md-3\">\n          <button class=\"btn btn-block btn-success\" routerLink=\"/theme/product\" type=\"button\">Add Product</button>\n        </div>\n      </div>\n\n    </div>\n    <!-----Product Information List-->\n    <div class=\"card-body\">\n    \n      <div class=\"scrolling_div\">\n\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th>Sl.No</th>\n            <th>Product Code </th>\n            <th>Product Name</th>\n            <th>Brand Name</th>\n            <th>Price</th>\n            <th colspan=2>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor='let product of (productData$ | async);index as i'>\n          <!--tr *ngFor='let product of prodata;index as i'-->\n            <td>{{i+1}}</td>\n            <td>{{product.productCode}}</td>\n            <td>{{product.productName}}</td>\n            <td>{{product.brandName}}</td>\n            <td>{{product.price}}{{\" \"}}{{product.unit}}</td>\n            <td>\n              <button \n              (click)=\"editProduct(product.id)\"\n              class=\"badge badge-primary\"><i class=\"cui-pencil icons font-2xl mt-4\"></i></button> &nbsp; \n\n              <button \n              class=\"badge badge-danger\" \n              (click)=\"deleteProduct(product.id)\"\n             \n              ><i class=\"cui-trash icons font-2xl mt-4\"></i></button>\n              <!------always use 'id' for State management Using NGRX  \n----->\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div> <!------scrolling_div-- --->\n\n      <ul class=\"pagination\">\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n        <li class=\"page-item active\">\n          <a class=\"page-link\" href=\"#\">1</a>\n        </li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n      </ul>\n    </div>\n\n    <!-----Product Information List End-->\n\n    <hr/>\n<!-----Product Quantity List-->\n    \n    <!-----Product Quantity List End-->\n  </div>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/productinfo/quantityadd/quantityadd.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/productinfo/quantityadd/quantityadd.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"manageQtyForm\" (ngSubmit)=\"manageQty();\">\n  <div class=\"basic_details\">\n\n    <!---For_Edit Button-->\n    <!--div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"form-groups\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary info_edit basic_label\" name=\"editbutton\"\n            id=\"editbutton\" (click)=\"basicShowHide()\">\n            <i class=\"cui-pencil icons font-2xl mt-4\"></i></button>\n\n        </div>\n      </div>\n    </div-->\n    <!---For_Edit Button-->\n\n    <div class=\"row\">\n      <div class=\"col-sm-3 col-md-offset-1\">\n        <div class=\"form-group\">\n          <label for=\"ccnumber\">Existing Quantity</label>\n          <label class=\"form-control\" name=\"qty_exist\" id=\"qty_exist\">1000</label>\n\n        </div>\n      </div>\n\n      <div class=\"col-sm-3\">\n        <div class=\"form-group\" >\n          <label for=\"ccnumber\">Product Quantity<span class=\"star_class\">*</span></label>\n          \n          <!----Validation Start-->\n          <input class=\"form-control\"  type=\"text\" id=\"quantity\" name=\"quantity\" formControlName=\"quantity\"\n          placeholder=\"Enter quantity\" (keypress)=\"numberOnly($event)\" [(ngModel)]=\"quantity\" \n          [ngClass]=\"{ 'is-invalid': isPasswordSubmitte && mval.quantity.errors }\"/>\n\n            <div *ngIf=\"isPasswordSubmitte && mval.quantity.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"mval.quantity.errors.required\">\n              <div class=\"error_msg\"> Product quantity is required</div>\n            </div>\n              \n            </div>\n\n          <!----Validation End-->\n        </div>\n      </div>\n      \n     \n      \n      <div class=\"col-sm-3\">\n        <div class=\"form-group\">\n          <label for=\"company\">Price<span class=\"star_class\">*</span> </label>\n         \n          <!----Validation Start-->\n          <input class=\"form-control\"  type=\"text\" id=\"price\" name=\"price\" formControlName=\"price\"\n          placeholder=\"Enter price\" [(ngModel)]=\"price\" (keypress)=\"numberDotOnly($event)\"\n          [ngClass]=\"{ 'is-invalid': isPasswordSubmitte && mval.price.errors }\"/>\n\n            <div *ngIf=\"isPasswordSubmitte && mval.price.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"mval.price.errors.required\">\n              <div class=\"error_msg\">Product price is required</div>\n            </div>\n              \n            </div>\n\n          <!----Validation End-->\n        </div>\n      </div>\n\n      <div class=\"col-sm-3\">\n\n        <div class=\"form-group\">\n          <label for=\"name\">Selling Unit<span class=\"star_class\">*</span></label>\n          <select class=\"form-control\" (change)=\"changeUnit($event)\" \n          formControlName=\"sellingUnitId\" ng-Model=\"sellunit\" name=\"sellunit\"\n          [ngClass]=\"{ 'is-invalid': isPasswordSubmitte && mval.sellingUnitId.errors }\">\n            <option value=\"\">--Choose Unit--</option>\n            <!--option *ngFor=\"let sellunit of sellunits\" [ngValue]=\"sellunit\">{{sellunit}}</option-->\n            <option *ngFor=\"let sellunit of sellingUnits\" [ngValue]=\"sellunit.su_id\">{{sellunit.unit}}</option>\n            <!---'su_id' and 'unit' taken from db table--->\n          </select>\n\n            <div *ngIf=\"isPasswordSubmitte && mval.sellingUnitId.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"mval.sellingUnitId.errors.required\">\n              <div class=\"error_msg\">Choose unit</div>\n            </div>\n            </div>\n\n\n        </div>\n\n      </div>\n\n    </div>\n\n \n\n    <div class=\"row button_row\">\n      <div class=\"card-footer1 buttons\">\n        <button type=\"submit\" class=\"btn btn-sm btn-success\"><i class=\"fa fa-dot-circle-o\"></i>\n          Submit</button>\n      </div>\n    </div>\n\n  </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/resetpass/resetpass.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/resetpass/resetpass.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn upper_space\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Reset Password</strong>\n\n        </div>\n\n\n        <div class=\"card-body\">\n          \n          <!--------3nd Div Start-->\n          <form [formGroup]=\"resetPassForm\" (ngSubmit)=\"resetPass();\">\n            <div class=\"basic_details admin_reset_pass\">\n        \n              <div class=\"row\">\n                <div class=\"col-md-6 mx-auto\">\n                  \n                    \n                      <div class=\"form-group\">\n                        <label>Old Password<span class=\"star_class\">*</span></label>\n                        <div class=\"input-group mb-3\">\n                          <input [type]=\"oldTextType ? 'text' : 'password'\" class=\"form-control\" id=\"old_pass\"\n                            name=\"old_pass\" formControlName=\"oldPass\"  placeholder=\"Enter old password\"\n                            [(ngModel)]=\"first_name\" appProtectedfield maxlength=\"10\" minlength=\"10\"\n                            [ngClass]=\"{ 'is-invalid': isPasswordSubmitte && passVal.oldPass.errors }\" />\n        \n                          <!---------------Password Show Hide-->\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fa\" [ngClass]=\"{\n                            'fa-eye-slash': !oldTextType,\n                            'fa-eye': oldTextType }\" (click)=\"toggleOldTextType()\"></i>\n                            </span>\n                          </div>\n                          <!---------------Password Show Hide end-->\n        \n                          <div *ngIf=\"isPasswordSubmitte && passVal.oldPass.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"passVal.oldPass.errors.required\" >\n                              <div class=\"error_msg\">Old password is required</div>\n                            </div>\n                            <div *ngIf=\"passVal.oldPass.errors.pattern\" >\n                              <div class=\"error_msg\">  First is upper case</div>\n                            </div>\n                            <div *ngIf=\"passVal.oldPass.errors.pattern\" >\n                              <div class=\"error_msg\"> Next is number & character(1, 2, @)</div>\n                                <div class=\"error_msg\">  (eg. Local2@code)</div>\n                            </div>\n                          </div>\n        \n                        </div>\n        \n                      </div>\n        \n        \n        \n                      <div class=\"form-group\">\n                        <label>New Password<span class=\"star_class\">*</span></label>\n        \n                        <!----Validation Start-->\n                        <div class=\"input-group mb-3\">\n                          <input [type]=\"newTextType ? 'text' : 'password'\" class=\"form-control\" id=\"new_pass\"\n                            name=\"new_pass\" formControlName=\"newPass\" placeholder=\"Enter new password\"\n                            [(ngModel)]=\"new_pass\" appProtectedfield maxlength=\"10\" minlength=\"10\"\n                            [ngClass]=\"{ 'is-invalid': isPasswordSubmitte && passVal.newPass.errors }\" />\n                            \n                          <!---------------Password Show Hide-->\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fa\" [ngClass]=\"{\n                            'fa-eye-slash': !newTextType,\n                            'fa-eye': newTextType }\" (click)=\"toggleNewTextType()\"></i>\n                            </span>\n                          </div>\n                          <!---------------Password Show Hide end-->\n        \n                          <div *ngIf=\"isPasswordSubmitte && passVal.newPass.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"passVal.newPass.errors.required\" >\n                              <div class=\"error_msg\">New password is required</div>\n                            </div>\n                            <div *ngIf=\"passVal.newPass.errors.pattern\" >\n                              <div class=\"error_msg\">  First is upper case</div>\n                            </div>\n                            <div *ngIf=\"passVal.newPass.errors.pattern\" >\n                              <div class=\"error_msg\"> Next is number & character(1, 2, @)</div>\n                                <div class=\"error_msg\">  (eg. Local2@code)</div>\n                            </div>\n                          </div>\n                        </div>\n                        <!----Validation End-->\n        \n                      </div>\n        \n                      <div class=\"form-group\">\n                        <label>Confirm Password<span class=\"star_class\">*</span> </label>\n        \n                        <!----Validation Start-->\n                        <div class=\"input-group mb-3\">\n                          <input [type]=\"confirmTextType ? 'text' : 'password'\" class=\"form-control\" id=\"confirm_pass\"\n                            name=\"confirm_pass\" formControlName=\"confirmPass\" placeholder=\"Enter confirm password\"\n                            maxlength=\"10\" minlength=\"10\"\n                            [(ngModel)]=\"confirm_pass\" appConfirmEqualValidatorDirective=\"newPass\" appProtectedfield\n                            [ngClass]=\"{ 'is-invalid': isPasswordSubmitte && passVal.confirmPass.errors }\" />\n        \n                          <!---------------Password Show Hide-->\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">\n                              <i class=\"fa\" [ngClass]=\"{\n                            'fa-eye-slash': !confirmTextType,\n                            'fa-eye': confirmTextType\n                          }\" (click)=\"toggleConfirmTextType()\"></i>\n                            </span>\n                          </div>\n                          <!---------------Password Show Hide end-->\n        \n                          <div *ngIf=\"isPasswordSubmitte && passVal.confirmPass.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"passVal.confirmPass.errors.required\" >\n                              <div class=\"error_msg\">Confirm password is required</div>\n                            </div>\n                            <div *ngIf=\"passVal.confirmPass.errors.pattern\" >\n                              <div class=\"error_msg\">Password pattern must be same</div>\n                            </div>\n                            <div *ngIf=\"passVal.confirmPass.errors.notEqual\" >\n                              <div class=\"error_msg\">New & Confirm Password does not match</div>\n                            </div>\n        \n                          </div>\n                        </div>\n                        <!----Validation End-->\n                      </div>\n        \n                      <div class=\"row button_row\">\n                        <div class=\"card-footer1 buttons\">\n                          <button type=\"submit\" class=\"btn btn-sm btn-success\"><i class=\"fa fa-dot-circle-o\"></i>\n                            Submit</button>\n                        </div>\n                      </div>\n                  \n                </div>\n        \n        \n        \n        \n              </div>\n        \n        \n        \n              \n        \n            </div>\n          </form>\n          <!------Basic Details Div3 End-->\n\n\n        </div>\n\n\n\n\n      </div>\n    </div>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/settings/settings.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/settings/settings.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn upper_space\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Settings Information</strong>\n\n        </div>\n\n\n        <div class=\"card-body\">\n\n          <!--------2nd Div Start-->\n          <form [formGroup]=\"socialInfoForm\" (ngSubmit)=\"socialInfo();\">\n            <div class=\"basic_details\">\n\n              <div class=\"row\">\n                <div class=\"col-sm-3 col-md-offset-1\">\n                  <div class=\"form-group\">\n                    <label>Address<span class=\"star_class\">*</span></label>\n                    <input class=\"form-control\" type=\"text\" id=\"address\" name=\"address\"\n                      formControlName=\"address\" placeholder=\"Enter address\" [(ngModel)]=\"address\"\n                      [ngClass]=\"{ 'is-invalid': submitted && socialVal.address.errors }\" />\n\n                    <div *ngIf=\"submitted && socialVal.address.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"socialVal.address.errors.required\">\n                        <div class=\"error_msg\"> Address is required</div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-sm-3\">\n                  <div class=\"form-group\">\n                    <label >Support Email<span class=\"star_class\">*</span></label>\n\n                    <!----Validation Start-->\n                    <input class=\"form-control\" type=\"text\" id=\"email\" name=\"email\" formControlName=\"email\"\n                      placeholder=\"Enter support email\" [(ngModel)]=\"email\"\n                      [ngClass]=\"{ 'is-invalid': submitted && socialVal.email.errors }\" />\n\n                    <div *ngIf=\"submitted && socialVal.email.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"socialVal.email.errors.required\">\n                        <div class=\"error_msg\"> Email is required</div>\n                      </div>\n                      <div *ngIf=\"socialVal.email.errors.pattern\" >\n                        <div class=\"error_msg\">Type valid email</div>\n                      </div>\n\n                    </div>\n\n                    <!----Validation End-->\n                  </div>\n                </div>\n\n\n\n                <div class=\"col-sm-3\">\n                  <div class=\"form-group\">\n                    <label >Primary Phone<span class=\"star_class\">*</span> </label>\n\n                    <!----Validation Start-->\n                    <input class=\"form-control\" type=\"text\" id=\"supportPhone\" name=\"supportPhone\" formControlName=\"supportPhone\"\n                      placeholder=\"Enter phone\" [(ngModel)]=\"supportPhone\" maxlength=\"10\" minlength=\"10\"\n                      (keypress)=\"numberOnly($event)\"\n                      [ngClass]=\"{ 'is-invalid': submitted && socialVal.supportPhone.errors }\" />\n\n                    <div *ngIf=\"submitted && socialVal.supportPhone.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"socialVal.supportPhone.errors.required\">\n                        <div class=\"error_msg\">phone is required</div>\n                      </div>\n                      <div *ngIf=\"socialVal.supportPhone.errors.pattern\">\n                        <div class=\"error_msg\">Type valid phone number</div>\n                      </div>\n\n                    </div>\n\n                    <!----Validation End-->\n                  </div>\n                </div>\n\n                <div class=\"col-sm-3\">\n                  <div class=\"form-group\">\n                    <label >Alternative Phone</label>\n\n                    <!----Validation Start-->\n                    <input class=\"form-control\" type=\"text\" id=\"altPhone\" name=\"altPhone\"\n                     formControlName=\"altPhone\"\n                      placeholder=\"Enter phone\" [(ngModel)]=\"altPhone\" maxlength=\"10\" minlength=\"10\"\n                      (keypress)=\"numberOnly($event)\"\n                      [ngClass]=\"{ 'is-invalid': submitted && socialVal.altPhone.errors }\" />\n\n                    <div *ngIf=\"submitted && socialVal.altPhone.errors\" class=\"invalid-feedback\">\n                      <!--div *ngIf=\"socialVal.altPhone.errors.required\">\n                        <div class=\"error_msg\">phone is required</div>\n                      </div-->\n                      <div *ngIf=\"socialVal.altPhone.errors.pattern\">\n                        <div class=\"error_msg\">Type valid phone number</div>\n                      </div>\n\n                    </div>\n\n                    <!----Validation End-->\n                  </div>\n                </div>\n\n\n\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-sm-3 col-md-offset-1\">\n                  <div class=\"form-group\">\n                    <label >Facebook </label>\n\n                    <!----Validation Start-->\n                    <input class=\"form-control\" type=\"text\" id=\"facebookUrl\" name=\"facebookUrl\" formControlName=\"facebookUrl\"\n                      placeholder=\"Enter facebook url\" [(ngModel)]=\"facebook_url\" \n                      \n                      [ngClass]=\"{ 'is-invalid': submitted && socialVal.facebookUrl.errors }\" />\n\n                    <div *ngIf=\"submitted && socialVal.facebookUrl.errors\" class=\"invalid-feedback\">\n                      <!--div *ngIf=\"socialVal.facebookUrl.errors.required\">\n                        <div class=\"error_msg\">Facebook is required</div>\n                      </div-->\n\n                    </div>\n\n                    <!----Validation End-->\n                  </div>\n                </div>\n\n                <div class=\"col-sm-3 \">\n                  <div class=\"form-group\">\n                    <label >Twitter </label>\n\n                    <!----Validation Start-->\n                    <input class=\"form-control\" type=\"text\" id=\"twitterUrl\" name=\"twitterUrl\" formControlName=\"twitterUrl\"\n                      placeholder=\"Enter twitter url\" [(ngModel)]=\"twitterUrl\" \n                      \n                      [ngClass]=\"{ 'is-invalid': submitted && socialVal.twitterUrl.errors }\" />\n\n                    <div *ngIf=\"submitted && socialVal.twitterUrl.errors\" class=\"invalid-feedback\">\n                      <!--div *ngIf=\"socialVal.twitterUrl.errors.required\">\n                        <div class=\"error_msg\">Twitter is required</div>\n                      </div-->\n\n                    </div>\n\n                    <!----Validation End-->\n                  </div>\n                </div>\n\n               \n\n                <div class=\"col-sm-3 \">\n                  <div class=\"form-group\">\n                    <label >Youtube </label>\n\n                    <!----Validation Start-->\n                    <input class=\"form-control\" type=\"text\" id=\"youtubeUrl\" name=\"youtubeUrl\" formControlName=\"youtubeUrl\"\n                      placeholder=\"Enter youtube url\" [(ngModel)]=\"youtubeUrl\" \n                      \n                      [ngClass]=\"{ 'is-invalid': submitted && socialVal.youtubeUrl.errors }\" />\n\n                    <div *ngIf=\"submitted && socialVal.youtubeUrl.errors\" class=\"invalid-feedback\">\n                      <!--div *ngIf=\"socialVal.youtubeUrl.errors.required\">\n                        <div class=\"error_msg\">Youtube is required</div>\n                      </div-->\n\n                    </div>\n\n                    <!----Validation End-->\n                  </div>\n                </div>\n\n                <div class=\"col-sm-3 \">\n                  <div class=\"form-group\">\n                    <label >Instagram</label>\n\n                    \n                    <input class=\"form-control\" type=\"text\" id=\"instagramUrl\" name=\"instagramUrl\" \n                      placeholder=\"Enter instagram url\" formControlName=\"instagramUrl\" [(ngModel)]=\"instagramUrl\"  />\n\n                   \n                  </div>\n                </div>\n\n\n              </div>\n\n\n\n              <div class=\"row button_row\">\n                <div class=\"card-footer1 buttons\">\n                  <button type=\"submit\" class=\"btn btn-sm btn-success\"><i class=\"fa fa-dot-circle-o\"></i>\n                    Submit</button>\n                </div>\n              </div>\n\n            </div>\n          </form>\n          <!------Basic Details Div2 End-->\n\n\n        </div>\n\n\n\n\n      </div>\n    </div>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/shoperInfo/addressInfo/addressinfo.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/shoperInfo/addressInfo/addressinfo.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"pro_para\">Shop Address Details</span>\n<div class=\"basic_details shopper_details\">\n    <!---For_Edit Button-->\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"form-groups\">\n                <button type=\"submit\" class=\"btn btn-sm btn-primary info_edit address_pencil\" name=\"editbutton\"\n                    id=\"editbutton\" (click)=\"addressShowHide()\">\n                    <i class=\"cui-pencil icons font-2xl mt-4\"></i></button>\n\n            </div>\n        </div>\n    </div>\n    <!---For_Edit Button-->\n    <form [formGroup]=\"addressInfoForm\" (ngSubmit)=\"addressInfo();\">\n\n\n        <div class=\"row\">\n            <div class=\"form-group col-sm-4\">\n                <label for=\"company\">Shop Name<span class=\"star_class\">*</span></label>\n                <!----Validation Start-->\n                <input type=\"text\" placeholder=\"Enter shop name\" class=\"form-control address_input\" id=\"shop_name\"\n                    formControlName=\"shopName\" name=\"shop_name\" [(ngModel)]=\"shop_name\"\n                    [ngClass]=\"{ 'is-invalid': addressSubmitted && addressVal.shopName.errors }\" />\n\n\n                <div *ngIf=\"addressSubmitted && addressVal.shopName.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"addressVal.shopName.errors.required\">\n                        <div class=\"error_msg\"> Shop Name is required</div>\n                    </div>\n                </div>\n                <!----Validation End-->\n\n            </div>\n            <div class=\"form-group col-sm-4\">\n                <label for=\"street\">Street Name<span class=\"star_class\">*</span></label>\n\n\n                <input type=\"text\" placeholder=\"Enter street name\" class=\"form-control address_input\" id=\"street\"\n                    [(ngModel)]=\"street\" formControlName=\"streetName\"\n                    [ngClass]=\"{'is-invalid' : addressSubmitted && addressVal.streetName.errors}\" />\n                <div *ngIf=\"addressSubmitted && addressVal.streetName.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"addressVal.streetName.errors.required\">\n                        <div class=\"error_msg\"> Street Name is required</div>\n                    </div>\n\n                </div>\n            </div>\n\n            <div class=\"form-group col-sm-4\">\n                <label for=\"country\">Country<span class=\"star_class\">*</span></label>\n\n                <select name=\"country\" id=\"country\" (change)=\"changeCountryVal($event)\" formControlName=\"countryName\"\n                    class=\"form-control address_input\" ng-model=\"country\"\n                    [ngClass]=\"{ 'is-invalid': addressSubmitted && addressVal.countryName.errors }\">\n                    <option value=\"\">---Please select---</option>\n                    <option *ngFor=\"let country of countries\" [ngValue]=\"country.c_id\">{{country.country}}</option>\n                </select>\n                <div *ngIf=\"addressSubmitted && addressVal.countryName.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"addressVal.countryName.errors.required\">\n                        <div class=\"error_msg\">Choose your country </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n        <div class=\"row\">\n\n            <div class=\"form-group col-sm-4\">\n                <label for=\"State\">State<span class=\"star_class\">*</span></label>\n\n\n                <select name=\"state\" id=\"state\" ng-model=\"state\" class=\"form-control address_input\"\n                    (change)=\"changeState($event)\" formControlName=\"stateName\"\n                    [ngClass]=\"{ 'is-invalid': addressSubmitted && addressVal.stateName.errors }\">\n                    <option value=\"\">---Please select---</option>\n                    <option *ngFor=\"let state of states\" [ngValue]=\"state.s_id\">{{state.state}}</option>\n                </select>\n\n\n                <div *ngIf=\"addressSubmitted && addressVal.stateName.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"addressVal.stateName.errors.required\">\n                        <div class=\"error_msg\"> State is required</div>\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div class=\"form-group col-sm-4\">\n                <label for=\"street\">City<span class=\"star_class\">*</span></label>\n\n\n                <input type=\"text\" placeholder=\"Enter city name\" class=\"form-control address_input\" id=\"city\"\n                    [(ngModel)]=\"city\" formControlName=\"cityName\"\n                    [ngClass]=\"{ 'is-invalid': addressSubmitted && addressVal.cityName.errors }\" />\n\n                <div *ngIf=\"addressSubmitted && addressVal.cityName.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"addressVal.cityName.errors.required\">\n                        <div class=\"error_msg\"> City is required</div>\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div class=\"col-sm-4\">\n                <div class=\"form-group\">\n                    <label for=\"city\">Postal/ Pin/ Zip<span class=\"star_class\">*</span></label>\n\n                    <input type=\"text\" name=\"zip\" placeholder=\"Enter zip code\" class=\"form-control address_input\"\n                        [(ngModel)]=\"zip\" formControlName=\"zipCode\"\n                        [ngClass]=\"{ 'is-invalid': addressSubmitted && addressVal.zipCode.errors }\" />\n\n                    <div *ngIf=\"addressSubmitted && addressVal.zipCode.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"addressVal.zipCode.errors.required\">\n                            <div class=\"error_msg\"> Pin code is required</div>\n                        </div>\n                        <div *ngIf=\"addressVal.zipCode.errors.pattern\">\n                            <div class=\"error_msg\">Type valid pin code</div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <!-----------Buttons start-->\n\n        <button class=\"btn btn-sm btn-primary button_edit address_btn\" type=\"submit\">\n            <i class=\"fa fa-dot-circle-o\"></i>&nbsp;Save\n        </button>\n        <!-----------Buttons end-->\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/shoperInfo/basicinfo/basicinfo.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/shoperInfo/basicinfo/basicinfo.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"pro_para\">Basic Information</span>\n\n<div class=\"basic_details shopper_details\">\n    <!---For_Edit Button-->\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"form-groups\">\n                <button type=\"submit\" class=\"btn btn-sm btn-primary info_edit basic_pencil\" name=\"editbutton\"\n                    id=\"editbutton\" (click)=\"basicShowHide()\">\n                    <i class=\"cui-pencil icons font-2xl mt-4\"></i></button>\n\n            </div>\n        </div>\n    </div>\n    <!---For_Edit Button-->\n    <form id=\"basicInfo\" name=\"basicInfo\" [formGroup]=\"basicInfoForm\" (ngSubmit)=\"basicInfo()\">\n\n\n\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <div class=\"form-group\">\n                    <label>First Name<span class=\"star_class\">*</span></label>\n\n                    <!----Validation Start-->\n\n                    <input class=\"form-control basic_input\" type=\"text\" placeholder=\"Enter first name\" id=\"f_name\"\n                        formControlName=\"firstName\" [(ngModel)]=\"f_name\"\n                        [ngClass]=\"{ 'is-invalid': submitted && basicVal.firstName.errors }\" />\n\n\n                    <div *ngIf=\"submitted && basicVal.firstName.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"basicVal.firstName.errors.required\">\n                            <div class=\"error_msg\"> First Name is required</div>\n                        </div>\n\n                    </div>\n\n                    <!----Validation End-->\n\n                </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n                <div class=\"form-group\">\n                    <label>Middle Name(Optional)</label>\n\n                    <input type=\"text\" class=\"form-control basic_input\" [(ngModel)]=\"m_name\" name=\"m_name\" id=\"m_name\"\n                        formControlName=\"middleName\" placeholder=\"Enter middle name\">\n\n                    <!----Validation Start-->\n\n\n                    <!----Validation End-->\n                </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n                <div class=\"form-group\">\n                    <label for=\"name\">Last Name<span class=\"star_class\">*</span></label>\n\n                    <input type=\"text\" placeholder=\"Enter last name\" class=\"form-control basic_input\" id=\"l_name\"\n                        formControlName=\"lastName\" [(ngModel)]=\"l_name\"\n                        [ngClass]=\"{ 'is-invalid': submitted && basicVal.lastName.errors }\" />\n\n\n                    <div *ngIf=\"submitted && basicVal.lastName.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"basicVal.lastName.errors.required\">\n                            <div class=\"error_msg\"> Last Name is required</div>\n                        </div>\n                    </div>\n\n\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n\n            <div class=\"col-sm-4\">\n                <div class=\"form-group\">\n                    <label for=\"gender\">Gender<span class=\"star_class\">*</span></label>\n\n\n\n                    <select id=\"gender\" class=\"form-control basic_input\" id=\"gender\" ng-Model=\"gender\"\n                        (change)=\"changeGender($event)\" formControlName=\"genderName\"\n                        [ngClass]=\"{ 'is-invalid': submitted && basicVal.genderName.errors }\">\n                        <option value=\"\"> ---Select Gender---</option>\n                        <option [ngValue]=\"gender\" *ngFor=\"let gender of genders\"> {{gender}}</option>\n                    </select>\n                    <div *ngIf=\"submitted && basicVal.genderName.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"basicVal.genderName.errors.required\">\n                            <div class=\"error_msg\"> Gender is required</div>\n                        </div>\n                    </div>\n\n\n                </div>\n            </div>\n\n\n            <div class=\"col-sm-4\">\n                <div class=\"form-group\">\n                    <label for=\"ccnumber\">Email(Optional)</label>\n\n                    <input type=\"text\" placeholder=\"Enter valid email\" class=\"form-control basic_input\" id=\"email\"\n                        [(ngModel)]=\"email\" formControlName=\"Email\"\n                        [ngClass]=\"{'is-invalid': submitted && basicVal.Email.errors}\" />\n                    <div *ngIf=\"submitted && basicVal.Email.errors\" class=\"invalid-feedback\">\n\n                        <div *ngIf=\"basicVal.Email.errors.pattern\">\n                            <div class=\"error_msg\"> Type valid email</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"form-group\">\n                    <label for=\"ccnumber\">Phone Number<span class=\"star_class\">*</span></label>\n\n\n\n                    <input type=\"text\" placeholder=\"Enter phone number\" class=\"form-control basic_input\" id=\"phone\"\n                        [(ngModel)]=\"phone\" formControlName=\"phoneNumber\" minlength=\"10\" maxLength=\"10\"\n                        [ngClass]=\"{'is-invalid': submitted && basicVal.phoneNumber.errors}\" />\n                    <div *ngIf=\"submitted && basicVal.phoneNumber.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"basicVal.phoneNumber.errors.required\">\n                            <div class=\"error_msg\"> Phone is required</div>\n                        </div>\n                        <div *ngIf=\"basicVal.phoneNumber.errors.pattern\">\n                            <div class=\"error_msg\"> Type valid Phone number</div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n        <!------Basic Details Div-->\n        <!-----------Buttons start-->\n\n        <button class=\"btn btn-sm btn-primary button_edit basic_btn\" type=\"submit\">\n            <i class=\"fa fa-dot-circle-o\"></i>&nbsp;Save\n        </button>\n        <!-----------Buttons end-->\n\n    </form>\n</div>\n<!----------First_Section Body End-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/shoperInfo/myinfo.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/shoperInfo/myinfo.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn upper_space\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n\n\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Shopper Information Details</strong> &nbsp;&nbsp;&nbsp;\n\n        </div>\n        <div class=\"card-body\">\n\n          <app-basicinfo></app-basicinfo>\n\n          <app-addressinfo></app-addressinfo>\n\n          <app-othersinfo></app-othersinfo>\n\n        </div>\n\n      </div>\n\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/shoperInfo/othersInfo/othersinfo.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/shoperInfo/othersInfo/othersinfo.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"pro_para\">Other Details</span>\n\n<div class=\"basic_details shopper_details\">\n    <!---For_Edit Button-->\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"form-groups\">\n                <button type=\"submit\" class=\"btn btn-sm btn-primary info_edit image_label\" name=\"editbutton\"\n                    id=\"editbutton\" (click)=\"imageShowHide()\">\n                    <i class=\"cui-pencil icons font-2xl mt-4\"></i></button>\n\n            </div>\n        </div>\n    </div>\n    <!---For_Edit Button-->\n    <form id=\"imageInfo\" name=\"imageInfo\" [formGroup]=\"imageInfoForm\" (ngSubmit)=\"imageInfo()\">\n\n        <div class=\"row\">\n\n\n\n\n            <div class=\"form-group col-sm-2 upload_sec\">\n                <label for=\"city\">Shop Image<span class=\"star_class\">*</span></label>\n\n                <!----Validation Start-->\n                <input type=\"file\" class=\"form-control image_edit\" id=\"shop_image\" [(ngModel)]=\"shop_image\"\n                    formControlName=\"shopImage\" [ngClass]=\"{ 'is-invalid': imageSubmitted && imgVal.shopImage.errors }\"\n                    (change)=\"shopPreview(shopfile.files)\" #shopfile accept=\"image/*\" />\n\n                <div *ngIf=\"imageSubmitted && imgVal.shopImage.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"imgVal.shopImage.errors.required\">\n                        <div class=\"error_msg\"> Image is required</div>\n                    </div>\n\n                </div>\n\n\n            </div>\n            <div class=\"form-group col-sm-3 image_tag\">\n                <img class=\"img-avatar fox url_img\" *ngIf=\"shopImgURL\" [src]=\"shopImgURL\" width=\"100\" height=\"100\" />\n            </div>\n\n        </div>\n\n        <!-----------Buttons start-->\n\n        <button class=\"btn btn-sm btn-primary button_edit image_edit\" type=\"submit\" (click)=\"imageSave()\">\n            <i class=\"fa fa-dot-circle-o\"></i>&nbsp;Save\n        </button>\n        <!-----------Buttons end-->\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/shoperInfo/shopperlist.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/shoperInfo/shopperlist.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"animated fadeIn upper_space\">\n<div class=\"col-lg-12\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n    \n      <div class=\"row align-items-center\">\n        <div class=\"col-md-3\">\n          <i class=\"fa fa-align-justify\"></i> Shopper List\n        </div>\n        <div class=\"col-md-6 mb-3 mb-xl-0 input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"icon-magnifier\"></i></span>\n          </div>\n          \n           <input class=\"form-control\" name=\"valuetosearch\" id=\"myInput\" placeholder=\"Search..\" type=\"text\">\n        </div>\n        \n        <div class=\"col-md-3\">\n          <button class=\"btn btn-block btn-success\" routerLink=\"/theme/myinfo\" type=\"button\">Add Shopper</button>\n        </div>\n      </div>\n\n    </div>\n    \n    <div class=\"card-body\">\n\n      <div class=\"scrolling_div\">\n        \n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th>Sl.No</th>\n            \n            <th>Shopper Name</th>\n            \n            <th>Shop Name</th>\n            <th>Phone Number</th>\n            <th>Gender</th>\n            <th>Shop Image</th>\n            <th colspan=2>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor= \"let obj of userData; let j=index\">\n            <td>{{ obj.u_id }}</td>\n            <td>{{ obj.f_name }}{{\" \"}}{{ obj.l_name }}</td>\n            <td>{{ obj.phone }}</td>\n            <td>{{ obj.gender }}</td>\n            <td>{{ obj.u_type }}</td>\n            <td><img alt=\"admin@bootstrapmaster.com\" class=\"img-avatar\" src=\"assets/img/avatars/6.jpg\"></td>\n            \n         \n            \n            <td><a href=\"\" onclick=\"return confirm ('Do you want to edit ??')\" class=\"badge badge-primary\"><i class=\"cui-pencil icons font-2xl mt-4\"></i></a> &nbsp; \n              <a href=\"\" onclick=\"return confirm ('Are you sure ??')\" class=\"badge badge-danger\"><i class=\"cui-trash icons font-2xl mt-4\"></i></a>\n            </td>\n          </tr>\n        \n         \n        \n         \n         \n          \n        \n         \n         \n        </tbody>\n      </table>\n\n    </div> <!------scrolling_div----->\n\n\n      <ul class=\"pagination\">\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n        <li class=\"page-item active\">\n          <a class=\"page-link\" href=\"#\">1</a>\n        </li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n</div>\n");

/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


 //Needed
var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
        this.url = "api";
    }
    //Category API Start
    CategoryService.prototype.addCategoryData = function (categoryData) {
        return this.http.post(this.url + "/addcategory", categoryData);
    };
    CategoryService.prototype.updateCategoryData = function (cat_id, categoryData) {
        console.log("updatePascal", cat_id);
        return this.http.put("api/putcategory/" + cat_id, categoryData);
    };
    CategoryService.prototype.getCategoryList = function () {
        return this.http.get('api/getcategory/');
    };
    CategoryService.prototype.daleteCategorydata = function (cat_id) {
        return this.http.delete("api/delcategory/" + cat_id);
    };
    //For update category single api
    CategoryService.prototype.getOneCategory = function (cat_id) {
        console.log("service Get", cat_id);
        return this.http.get('api/singlecategory/' + cat_id); // "cat_id" taken from component add
    };
    CategoryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/services/shopper.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/shopper.service.ts ***!
  \*********************************************/
/*! exports provided: ShopperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopperService", function() { return ShopperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


 //Needed
var ShopperService = /** @class */ (function () {
    function ShopperService(http) {
        this.http = http;
        this.url = "api";
    }
    //All apis for add-edit-delete-fetch
    ShopperService.prototype.getUserData = function () {
        //return this.http.get('https://jsonplaceholder.typicode.com/posts');
        return this.http.get(this.url + "/getuser");
    };
    ShopperService.prototype.createData = function (userInfo) {
        return this.http.post(this.url + "/adduser", userInfo);
    };
    //get single user data
    ShopperService.prototype.getSingleUserData = function (u_id) {
        return this.http.get("api/singleuser/" + 6);
    };
    //All apis for add-edit-delete-fetch end
    ShopperService.prototype.getState = function () {
        return this.http.get(this.url + "/getstate");
    };
    ShopperService.prototype.getCountry = function () {
        return this.http.get(this.url + "/getcountry");
    };
    ShopperService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ShopperService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ShopperService);
    return ShopperService;
}());



/***/ }),

/***/ "./src/app/stores/product/product.selectors.ts":
/*!*****************************************************!*\
  !*** ./src/app/stores/product/product.selectors.ts ***!
  \*****************************************************/
/*! exports provided: reducers, selectProductfeature, selectProductEntities, currentSingleProductId, singleProductBasedOnId, productTest, productTestAll, selectProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProductfeature", function() { return selectProductfeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProductEntities", function() { return selectProductEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentSingleProductId", function() { return currentSingleProductId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleProductBasedOnId", function() { return singleProductBasedOnId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productTest", function() { return productTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productTestAll", function() { return productTestAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProducts", function() { return selectProducts; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _product_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.reducer */ "./src/app/stores/product/product.reducer.ts");


;
//Connect with reducer
var reducers = {
    product: _product_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
};
//Create Feature selector & Select these
var selectProductfeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_product_reducer__WEBPACK_IMPORTED_MODULE_1__["productFeatureKey"]);
//Selecting only entity or other state (Create)
var selectProductEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectProductfeature, function (ProductReducer) { return ProductReducer.entities; });
//Single Value Id
var currentSingleProductId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectProductfeature, 
//Coming from reducer selector which is exported
_product_reducer__WEBPACK_IMPORTED_MODULE_1__["getSelectedProductId"]);
//Single Product Value based id
var singleProductBasedOnId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectProductfeature, currentSingleProductId, function (state, pid) {
    console.log('state', state, "id", pid);
    return state.entities[pid];
});
var productTest = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectProductfeature, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["selectIds"]);
//get state and  convert entity object into array
var productTestAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectProductEntities, function (entities) {
    return Object.keys(entities).map(function (k) { return entities[k]; });
});
//same as converting to array like upper function
//Get all data
var selectProducts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectProductfeature, 
/* (e)=>{
    console.log('Selector->>',e)
    return e;
}, */
_product_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);


/***/ }),

/***/ "./src/app/stores/quantity/quantity.selectors.ts":
/*!*******************************************************!*\
  !*** ./src/app/stores/quantity/quantity.selectors.ts ***!
  \*******************************************************/
/*! exports provided: reducers, selectQuantityFeature, selectQuantityEntities, currentSingleQuantityId, singleQuantityBasedOnId, Test, TestAll, selectQuantity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectQuantityFeature", function() { return selectQuantityFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectQuantityEntities", function() { return selectQuantityEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentSingleQuantityId", function() { return currentSingleQuantityId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleQuantityBasedOnId", function() { return singleQuantityBasedOnId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test", function() { return Test; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestAll", function() { return TestAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectQuantity", function() { return selectQuantity; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _quantity_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quantity.reducer */ "./src/app/stores/quantity/quantity.reducer.ts");


;
//Connect with reducer
var reducers = {
    quantity: _quantity_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
};
//Selecting & making feature selector
var selectQuantityFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_quantity_reducer__WEBPACK_IMPORTED_MODULE_1__["quantityFeatureKey"]);
//Selecting only entity or other state (Create)
var selectQuantityEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectQuantityFeature, function (fromQuantityReducer) { return fromQuantityReducer.entities; });
//Single Value Id
var currentSingleQuantityId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectQuantityFeature, 
//Coming from reducer selector which is exported
_quantity_reducer__WEBPACK_IMPORTED_MODULE_1__["getSelectdQuantityId"]);
//Single Data Value based id
var singleQuantityBasedOnId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectQuantityFeature, currentSingleQuantityId, function (state, id) { return state.entities[id]; });
var Test = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectQuantityFeature, _quantity_reducer__WEBPACK_IMPORTED_MODULE_1__["selectIds"]);
//get state and  convert entity object into array
var TestAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectQuantityEntities, function (entities) {
    return Object.keys(entities).map(function (k) { return entities[k]; });
});
//same as converting to array like upper function
var selectQuantity = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectQuantityFeature, _quantity_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);


/***/ }),

/***/ "./src/app/stores/settings/settings.selectors.ts":
/*!*******************************************************!*\
  !*** ./src/app/stores/settings/settings.selectors.ts ***!
  \*******************************************************/
/*! exports provided: reducers, selectSettingsFeature, selectSettingsEntities, currentSingleSettingsId, singleSettingsBasedOnId, Test, TestAll, selectSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSettingsFeature", function() { return selectSettingsFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSettingsEntities", function() { return selectSettingsEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentSingleSettingsId", function() { return currentSingleSettingsId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSettingsBasedOnId", function() { return singleSettingsBasedOnId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test", function() { return Test; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestAll", function() { return TestAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSettings", function() { return selectSettings; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _settings_settings_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings/settings.reducer */ "./src/app/stores/settings/settings.reducer.ts");


;
//Connect with reducer
var reducers = {
    settings: _settings_settings_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
};
//Selecting feature selector
var selectSettingsFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_1__["settingsFeatureKey"]);
//Selecting only entity or other state (Create)
var selectSettingsEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSettingsFeature, function (fromSettings) { return fromSettings.entities; });
//Single Value Id
var currentSingleSettingsId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSettingsFeature, 
//Coming from reducer selector which is exported
_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_1__["getSelectdSettingsId"]);
//Single Settings Value based id
var singleSettingsBasedOnId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSettingsFeature, currentSingleSettingsId, function (state, id) { return state.entities[id]; });
var Test = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSettingsFeature, _settings_settings_reducer__WEBPACK_IMPORTED_MODULE_1__["selectIds"]);
//get state and  convert entity object into array
var TestAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSettingsEntities, function (entities) {
    return Object.keys(entities).map(function (k) { return entities[k]; });
});
//same as converting to array like upper function
var selectSettings = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSettingsFeature, _settings_settings_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);


/***/ }),

/***/ "./src/app/views/theme/admininfo/adminadd/adminadd.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/views/theme/admininfo/adminadd/adminadd.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RoZW1lL2FkbWluaW5mby9hZG1pbmFkZC9hZG1pbmFkZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/theme/admininfo/adminadd/adminadd.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/theme/admininfo/adminadd/adminadd.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminaddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminaddComponent", function() { return AdminaddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_shopper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/shopper.service */ "./src/app/services/shopper.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");







var AdminaddComponent = /** @class */ (function () {
    //testsub = false;
    function AdminaddComponent(formBuilder, router, shopperData, route, // For Edit data
    httpClient, toastr) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.shopperData = shopperData;
        this.route = route;
        this.httpClient = httpClient;
        this.toastr = toastr;
        this.genders = ['Male', 'Female', 'Others'];
        this.submitted = false;
    }
    AdminaddComponent.prototype.ngOnInit = function () {
        this.addAdminValidation();
    };
    AdminaddComponent.prototype.addAdminValidation = function () {
        this.addAdminForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            genderName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            addPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,12})")]],
            confPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,12})")]]
        });
    };
    Object.defineProperty(AdminaddComponent.prototype, "adminVal", {
        get: function () {
            return this.addAdminForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AdminaddComponent.prototype.addAdmin = function () {
        this.submitted = true;
        if (this.addAdminForm.invalid) {
            console.log(this.addAdminForm);
            return;
        }
        alert('form fields are validated successfully!');
    };
    // Toggle Eye button  
    AdminaddComponent.prototype.toggleAddTextType = function () {
        this.addTextType = !this.addTextType;
    };
    // Toggle Eye button  
    AdminaddComponent.prototype.toggleConfTextType = function () {
        this.confTextType = !this.confTextType;
    };
    AdminaddComponent.prototype.changeGender = function (gender) {
        this.gender = gender.target.value.split(' ')[1];
    };
    //Numeric accepted
    AdminaddComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    AdminaddComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_shopper_service__WEBPACK_IMPORTED_MODULE_5__["ShopperService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
    ]; };
    AdminaddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminadd',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./adminadd.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/admininfo/adminadd/adminadd.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./adminadd.component.scss */ "./src/app/views/theme/admininfo/adminadd/adminadd.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_shopper_service__WEBPACK_IMPORTED_MODULE_5__["ShopperService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], AdminaddComponent);
    return AdminaddComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/admininfo/admininfo.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/theme/admininfo/admininfo.module.ts ***!
  \***********************************************************/
/*! exports provided: AdminInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminInfoModule", function() { return AdminInfoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _theme_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme-routing.module */ "./src/app/views/theme/theme-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _confirm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm-equal-validator.directive */ "./src/app/views/theme/admininfo/confirm-equal-validator.directive.ts");
/* harmony import */ var _middlewares_protectedfield_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../middlewares/protectedfield.directive */ "./src/app/views/theme/middlewares/protectedfield.directive.ts");
/* harmony import */ var _adminview_adminview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./adminview/adminview.component */ "./src/app/views/theme/admininfo/adminview/adminview.component.ts");
/* harmony import */ var _adminadd_adminadd_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./adminadd/adminadd.component */ "./src/app/views/theme/admininfo/adminadd/adminadd.component.ts");
/* harmony import */ var _resetadmin_resetadmin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resetadmin/resetadmin.component */ "./src/app/views/theme/admininfo/resetadmin/resetadmin.component.ts");
/* harmony import */ var _admininfo_admininfo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admininfo/admininfo.component */ "./src/app/views/theme/admininfo/admininfo/admininfo.component.ts");



// required modules

 //Needed
//protected-Field & Equal-field validation Directive






var AdminInfoModule = /** @class */ (function () {
    function AdminInfoModule() {
    }
    AdminInfoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                //Directives
                _confirm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_5__["ConfirmEqualValidatorDirective"],
                _middlewares_protectedfield_directive__WEBPACK_IMPORTED_MODULE_6__["ProtectedfieldDirective"],
                //All Components
                _adminview_adminview_component__WEBPACK_IMPORTED_MODULE_7__["AdminviewComponent"],
                _adminadd_adminadd_component__WEBPACK_IMPORTED_MODULE_8__["AdminaddComponent"],
                _resetadmin_resetadmin_component__WEBPACK_IMPORTED_MODULE_9__["ResetadminComponent"],
                _admininfo_admininfo_component__WEBPACK_IMPORTED_MODULE_10__["AdmininfoComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                // NgForm,
                _theme_routing_module__WEBPACK_IMPORTED_MODULE_3__["ThemeRoutingModule"]
            ]
        })
    ], AdminInfoModule);
    return AdminInfoModule;
}());



/***/ }),

/***/ "./src/app/views/theme/admininfo/admininfo/admininfo.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/views/theme/admininfo/admininfo/admininfo.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RoZW1lL2FkbWluaW5mby9hZG1pbmluZm8vYWRtaW5pbmZvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/theme/admininfo/admininfo/admininfo.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/theme/admininfo/admininfo/admininfo.component.ts ***!
  \************************************************************************/
/*! exports provided: AdmininfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmininfoComponent", function() { return AdmininfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var AdmininfoComponent = /** @class */ (function () {
    //testsub = false;
    function AdmininfoComponent() {
    }
    AdmininfoComponent.prototype.ngOnInit = function () {
    };
    AdmininfoComponent.ctorParameters = function () { return []; };
    AdmininfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admininfo',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admininfo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/admininfo/admininfo/admininfo.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admininfo.component.scss */ "./src/app/views/theme/admininfo/admininfo/admininfo.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AdmininfoComponent);
    return AdmininfoComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/admininfo/adminview/adminview.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/views/theme/admininfo/adminview/adminview.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row.view_form .col-sm-3 {\n  border-right: 1px solid #000;\n}\n\n.row.view_form .col-sm-3:last-child {\n  border: none !important;\n}\n\n.row.view_form input {\n  border: none;\n  font-size: 20px;\n  background: no-repeat;\n  text-align: center;\n  color: #a71710 !important;\n  font-weight: 500;\n}\n\n.row.view_form .form-group {\n  text-align: center;\n}\n\n.row.view_form label {\n  letter-spacing: 1px;\n}\n\n.basic_details.admin-view label {\n  color: #00000085;\n}\n\n@media (max-width: 760px) {\n  .row.view_form .col-sm-3 {\n    border-right: none !important;\n    border-bottom: 1px solid #000 !important;\n    margin-top: 16px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdGhlbWUvYWRtaW5pbmZvL2FkbWludmlldy9hZG1pbnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUVJO0lBQ0ksNkJBQUE7SUFDQSx3Q0FBQTtJQUNBLDJCQUFBO0VBQU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RoZW1lL2FkbWluaW5mby9hZG1pbnZpZXcvYWRtaW52aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy52aWV3X2Zvcm0gLmNvbC1zbS0zIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwO1xufVxuXG4ucm93LnZpZXdfZm9ybSAuY29sLXNtLTM6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5yb3cudmlld19mb3JtIGlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNhNzE3MTAgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucm93LnZpZXdfZm9ybSAuZm9ybS1ncm91cCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucm93LnZpZXdfZm9ybSBsYWJlbCB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLmJhc2ljX2RldGFpbHMuYWRtaW4tdmlldyBsYWJlbCB7XG4gICAgY29sb3I6ICMwMDAwMDA4NTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KXtcbiAgICBcbiAgICAucm93LnZpZXdfZm9ybSAuY29sLXNtLTMge1xuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/views/theme/admininfo/adminview/adminview.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/theme/admininfo/adminview/adminview.component.ts ***!
  \************************************************************************/
/*! exports provided: AdminviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminviewComponent", function() { return AdminviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_shopper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/shopper.service */ "./src/app/services/shopper.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");







var AdminviewComponent = /** @class */ (function () {
    //testsub = false;
    function AdminviewComponent(formBuilder, router, shopperData, route, // For Edit data
    httpClient, toastr) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.shopperData = shopperData;
        this.route = route;
        this.httpClient = httpClient;
        this.toastr = toastr;
    }
    AdminviewComponent.prototype.ngOnInit = function () {
    };
    AdminviewComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_shopper_service__WEBPACK_IMPORTED_MODULE_5__["ShopperService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
    ]; };
    AdminviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminview',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./adminview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/admininfo/adminview/adminview.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./adminview.component.scss */ "./src/app/views/theme/admininfo/adminview/adminview.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_shopper_service__WEBPACK_IMPORTED_MODULE_5__["ShopperService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], AdminviewComponent);
    return AdminviewComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/admininfo/confirm-equal-validator.directive.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/theme/admininfo/confirm-equal-validator.directive.ts ***!
  \****************************************************************************/
/*! exports provided: ConfirmEqualValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmEqualValidatorDirective", function() { return ConfirmEqualValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



var ConfirmEqualValidatorDirective = /** @class */ (function () {
    function ConfirmEqualValidatorDirective() {
    }
    ConfirmEqualValidatorDirective_1 = ConfirmEqualValidatorDirective;
    ConfirmEqualValidatorDirective.prototype.validate = function (control) {
        var controlToCompare = control.parent.get(this.appConfirmEqualValidatorDirective);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    };
    var ConfirmEqualValidatorDirective_1;
    ConfirmEqualValidatorDirective.propDecorators = {
        appConfirmEqualValidatorDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
            selector: '[appConfirmEqualValidatorDirective]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: ConfirmEqualValidatorDirective_1,
                    multi: true
                }]
        })
    ], ConfirmEqualValidatorDirective);
    return ConfirmEqualValidatorDirective;
}());



/***/ }),

/***/ "./src/app/views/theme/admininfo/resetadmin/resetadmin.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/views/theme/admininfo/resetadmin/resetadmin.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RoZW1lL2FkbWluaW5mby9yZXNldGFkbWluL3Jlc2V0YWRtaW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/theme/admininfo/resetadmin/resetadmin.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/theme/admininfo/resetadmin/resetadmin.component.ts ***!
  \**************************************************************************/
/*! exports provided: ResetadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetadminComponent", function() { return ResetadminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_shopper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/shopper.service */ "./src/app/services/shopper.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");







var ResetadminComponent = /** @class */ (function () {
    //testsub = false;
    function ResetadminComponent(formBuilder, router, shopperData, route, // For Edit data
    httpClient, toastr) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.shopperData = shopperData;
        this.route = route;
        this.httpClient = httpClient;
        this.toastr = toastr;
        this.isPasswordSubmitte = false;
    }
    ResetadminComponent.prototype.ngOnInit = function () {
        this.resetPassValidation();
    };
    ResetadminComponent.prototype.resetPassValidation = function () {
        this.resetPassForm = this.formBuilder.group({
            oldPass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,12})")]],
            newPass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,12})")]],
            confirmPass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,12})")]]
        });
    };
    Object.defineProperty(ResetadminComponent.prototype, "passVal", {
        get: function () {
            return this.resetPassForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    ResetadminComponent.prototype.resetPass = function () {
        this.isPasswordSubmitte = true;
        if (this.resetPassForm.invalid) {
            return;
        }
        alert('form fields are validated successfully!');
    };
    // Toggle Eye button
    ResetadminComponent.prototype.toggleOldTextType = function () {
        this.oldTextType = !this.oldTextType;
    };
    // Toggle Eye button
    ResetadminComponent.prototype.toggleNewTextType = function () {
        this.newTextType = !this.newTextType;
    };
    // Toggle Eye button
    ResetadminComponent.prototype.toggleConfirmTextType = function () {
        this.confirmTextType = !this.confirmTextType;
    };
    ResetadminComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_shopper_service__WEBPACK_IMPORTED_MODULE_5__["ShopperService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
    ]; };
    ResetadminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resetadmin',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./resetadmin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/admininfo/resetadmin/resetadmin.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./resetadmin.component.scss */ "./src/app/views/theme/admininfo/resetadmin/resetadmin.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_shopper_service__WEBPACK_IMPORTED_MODULE_5__["ShopperService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], ResetadminComponent);
    return ResetadminComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/banner/banneradd.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/theme/banner/banneradd.component.ts ***!
  \***********************************************************/
/*! exports provided: BanneraddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanneraddComponent", function() { return BanneraddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



var BanneraddComponent = /** @class */ (function () {
    function BanneraddComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
        /* onSubmit() {
          alert(JSON.stringify(this.myInfo.value));
          alert("Image upload successfully");
        } */
        /*******Form Validation reactive end */
        this.urls = [];
    }
    BanneraddComponent.prototype.ngOnInit = function () {
        this.bannerValidation();
    };
    /*******Form Validation reactive */
    BanneraddComponent.prototype.bannerValidation = function () {
        this.bannerImageForm = this.formBuilder.group({
            bannerImg: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(BanneraddComponent.prototype, "bannerval", {
        get: function () {
            return this.bannerImageForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    BanneraddComponent.prototype.bannerSubmit = function () {
        this.submitted = true;
        // console.log(this.submitted)
        if (this.bannerImageForm.invalid) {
            return;
        }
        alert('form fields are validated successfully!');
    };
    BanneraddComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var filesAmount = event.target.files.length;
            for (var i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    console.log(event.target.result);
                    _this.urls.push(event.target.result);
                };
                reader.readAsDataURL(event.target.files[i]);
            }
        }
    };
    BanneraddComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    BanneraddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./banneradd.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/banner/banneradd.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], BanneraddComponent);
    return BanneraddComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/category/categoryadd.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/theme/category/categoryadd.component.ts ***!
  \***************************************************************/
/*! exports provided: CategoryaddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryaddComponent", function() { return CategoryaddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");







var CategoryaddComponent = /** @class */ (function () {
    function CategoryaddComponent(formBuilder, router, httpClient, categoryService, toastr, route //For data update needed
    ) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.httpClient = httpClient;
        this.categoryService = categoryService;
        this.toastr = toastr;
        this.route = route;
        this.submitted = false;
        this.Edit = false;
    }
    CategoryaddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryInfoValidation();
        //getSingleCatData for update
        //'cat_id' defined theme.routing module
        //Pass 'cat_id' to Categoryservice
        //Immediate Invocable Function
        (function () {
            var cat_id = _this.route.snapshot.params.cat_id;
            if (cat_id) {
                _this.Edit = true;
                _this.cat_id = cat_id;
                _this.getSingleCatData();
            }
        })();
    };
    //For Insert Variable Defined function
    CategoryaddComponent.prototype.getData = function () {
        return {
            category_name: this.cat_name,
            category_meta: this.cat_meta,
            category_details: this.cat_detailse,
            category_img_loc: this.local_cat_img_loc,
        };
    };
    //For Single Variable Defined function
    CategoryaddComponent.prototype.setCatData = function (data) {
        console.log(" setting data ", data.cat_name);
        (this.cat_name = data.cat_name),
            (this.cat_meta = data.cat_meta),
            (this.cat_detailse = data.cat_detailse),
            (this.imgURL = data.cat_img_loc);
    };
    // Form Validation
    CategoryaddComponent.prototype.categoryInfoValidation = function () {
        this.categoryDetailsForm = this.formBuilder.group({
            getCatId: [],
            categoryName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            seoURL: [],
            categoryDescription: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(400),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4),
                ],
            ],
            categoryImg: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    Object.defineProperty(CategoryaddComponent.prototype, "catVal", {
        get: function () {
            return this.categoryDetailsForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    CategoryaddComponent.prototype.categoryDetails = function () {
        this.submitted = true;
        if (this.categoryDetailsForm.invalid) {
            return;
        }
        //Need FormsModule & ReactiveFormsModule import in app.module.ts
        //insert & Update here
        if (this.Edit) {
            this.updateCategory();
        }
        else {
            this.insertCategory(this.getData());
        }
    };
    //Insert Function
    CategoryaddComponent.prototype.insertCategory = function (objCategory) {
        var _this = this;
        this.categoryService.addCategoryData(objCategory)
            .subscribe(function (res) {
            _this.addCatValue = res;
            if (res.inserted) {
                _this.toastr.success('Category inserted successfully', 'Success', {
                    timeOut: 1000 * 2,
                    progressBar: true
                });
            }
            else {
                _this.toastr.error('category insert failed', 'Failure', {
                    timeOut: 1000 * 2,
                    progressBar: true
                });
            }
            console.log("Add Cat-Value", res);
        });
    };
    //Get single data for update
    CategoryaddComponent.prototype.getSingleCatData = function () {
        var _this = this;
        this.categoryService.getOneCategory(this.cat_id).subscribe(function (res) {
            console.log("One Cat Data", res);
            _this.catData = res;
            _this.setCatData(_this.catData[0]);
            console.log("Full->>", _this.cat_name);
        });
    };
    //Update data category
    CategoryaddComponent.prototype.updateCategory = function () {
        var _this = this;
        this.categoryService
            .updateCategoryData(this.cat_id, this.getData())
            .subscribe(function (res) {
            if (res.updated) {
                _this.toastr.error('category update failed', 'Failure', {
                    timeOut: 1000 * 2,
                    progressBar: true
                });
            }
            else {
                _this.toastr.success('Category updated successfully', 'Success', {
                    timeOut: 1000 * 2,
                    progressBar: true
                });
                _this.router.navigate(['/theme/categorylist']);
            }
            console.log("UpdatedData", res);
        });
    };
    CategoryaddComponent.prototype.preview = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.imgURL = reader.result;
        };
    };
    CategoryaddComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    CategoryaddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categoryadd.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/category/categoryadd.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] //For data update needed
        ])
    ], CategoryaddComponent);
    return CategoryaddComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/category/categorylist.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/theme/category/categorylist.component.ts ***!
  \****************************************************************/
/*! exports provided: CategorylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorylistComponent", function() { return CategorylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");






//import { ConfirmationDialogService } from '../../../middlewares/confirmation-dialog/confirmation-dialog.service'
 //For Spinner
var CategorylistComponent = /** @class */ (function () {
    function CategorylistComponent(categoryService, router, httpClient, toastr, spinner) {
        this.categoryService = categoryService;
        this.router = router;
        this.httpClient = httpClient;
        this.toastr = toastr;
        this.spinner = spinner;
        //Delete Popup
        this.popoverTitle = 'Delete Confirm';
        this.popoverMessage = 'Do you want?';
        this.cancelDeleted = false;
        //For update Popup
        this.updateTitle = 'Update Confirm';
        this.updateMessage = 'Are you sure?';
        this.cancelUpdated = false;
    }
    CategorylistComponent.prototype.ngOnInit = function () {
        this.getCategoryData();
    };
    //Get data to display list
    CategorylistComponent.prototype.getCategoryData = function () {
        var _this = this;
        this.categoryService.getCategoryList().subscribe(function (categoryList) {
            _this.categoryData = categoryList;
            //console.log("List Data", this.categoryData);
        });
    };
    //Delete Popup Function
    CategorylistComponent.prototype.confirmDeleted = function (cat_id) {
        this.deleteCatecory(cat_id);
    };
    //Delete catagory from list
    CategorylistComponent.prototype.deleteCatecory = function (cat_id) {
        // var deleteConfirm = confirm('Do you really want to ... ?');
        var _this = this;
        this.categoryService.daleteCategorydata(cat_id)
            .subscribe(function (catDelete) {
            console.log("Cat Delete", catDelete);
            if (catDelete.deleted) {
                //Alert msg
                _this.toastr.success('category deleted successfully', 'Success', {
                    timeOut: 1000 * 2,
                    progressBar: true
                });
            }
            else {
                _this.toastr.error('category deletion failed', 'Failure', {
                    timeOut: 1000 * 2,
                    progressBar: true
                });
            }
            _this.getCategoryData();
        });
    };
    //Popup Update Function
    CategorylistComponent.prototype.confirmUpdated = function (cat_id) {
        this.updateCategoryClick(cat_id);
    };
    //Update catagory from list route
    CategorylistComponent.prototype.updateCategoryClick = function (cat_id) {
        this.router.navigate(['/theme/categoryadd/edit/' + cat_id]);
        /* var updateData =  confirm("Do you want to update?");
        if(updateData){
      
          this.router.navigate(['/theme/categoryadd/edit/'+ cat_id])
        }
       */
    };
    CategorylistComponent.ctorParameters = function () { return [
        { type: _services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
    ]; };
    CategorylistComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categorylist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/category/categorylist.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], CategorylistComponent);
    return CategorylistComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/customer/customer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/theme/customer/customer.component.ts ***!
  \************************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



var CustomerComponent = /** @class */ (function () {
    /*******Form Validation reactive */
    /*******Form Validation reactive end */
    function CustomerComponent(router) {
        this.router = router;
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    CustomerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/customer/customer.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/customer/customeradd.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/theme/customer/customeradd.component.ts ***!
  \***************************************************************/
/*! exports provided: CustomeraddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomeraddComponent", function() { return CustomeraddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var CustomeraddComponent = /** @class */ (function () {
    function CustomeraddComponent() {
    }
    CustomeraddComponent.ctorParameters = function () { return []; };
    CustomeraddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./customeradd.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/customer/customeradd.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CustomeraddComponent);
    return CustomeraddComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/middlewares/protectedfield.directive.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/theme/middlewares/protectedfield.directive.ts ***!
  \*********************************************************************/
/*! exports provided: ProtectedfieldDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectedfieldDirective", function() { return ProtectedfieldDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


//import { RegService } from '../views/register/register.component';
var ProtectedfieldDirective = /** @class */ (function () {
    function ProtectedfieldDirective() {
    }
    ProtectedfieldDirective.prototype.blockPaste = function (e) {
        e.preventDefault();
    };
    ProtectedfieldDirective.prototype.blockCopy = function (e) {
        e.preventDefault();
    };
    ProtectedfieldDirective.prototype.blockCut = function (e) {
        e.preventDefault();
    };
    ProtectedfieldDirective.prototype.ngOnInit = function () { };
    ProtectedfieldDirective.ctorParameters = function () { return []; };
    ProtectedfieldDirective.propDecorators = {
        blockPaste: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['paste', ['$event'],] }],
        blockCopy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['copy', ['$event'],] }],
        blockCut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['cut', ['$event'],] }]
    };
    ProtectedfieldDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appProtectedfield]'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ProtectedfieldDirective);
    return ProtectedfieldDirective;
}());



/***/ }),

/***/ "./src/app/views/theme/productinfo/product/product.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/views/theme/productinfo/product/product.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RoZW1lL3Byb2R1Y3RpbmZvL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/theme/productinfo/product/product.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/theme/productinfo/product/product.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



var ProductComponent = /** @class */ (function () {
    function ProductComponent(route) {
        this.route = route;
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/productinfo/product/product.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product.component.scss */ "./src/app/views/theme/productinfo/product/product.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/productinfo/productadd/productadd.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/views/theme/productinfo/productadd/productadd.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RoZW1lL3Byb2R1Y3RpbmZvL3Byb2R1Y3RhZGQvcHJvZHVjdGFkZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/theme/productinfo/productadd/productadd.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/theme/productinfo/productadd/productadd.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProductaddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductaddComponent", function() { return ProductaddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _stores_product_product_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../stores/product/product.actions */ "./src/app/stores/product/product.actions.ts");
/* harmony import */ var app_stores_product_product_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/stores/product/product.selectors */ "./src/app/stores/product/product.selectors.ts");










var ProductaddComponent = /** @class */ (function () {
    function ProductaddComponent(formBuilder, router, categoryService, route, // For Edit data
    store, httpClient, toastr) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.categoryService = categoryService;
        this.route = route;
        this.store = store;
        this.httpClient = httpClient;
        this.toastr = toastr;
        this.submitted = false;
        this.EditProduct = false;
    }
    ProductaddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cat_id = this.route.snapshot.params['cat_id']; // For Edit data
        this.getCategoryList(); //Fetch Data Into Category Field
        this.productInfoValidation();
        this.getSingleValue();
        //Immediate Invocable Function
        (function () {
            var pid = _this.route.snapshot.params.pid;
            if (pid) {
                _this.EditProduct = true;
                _this.pid = pid;
                // this.getSingleValue();
            }
        })();
        console.log('Main PID->', typeof this.pid);
    };
    ProductaddComponent.prototype.productInfo = function () {
        this.submitted = true;
        // console.log(this.submitted)
        if (this.productInfoForm.invalid) {
            return;
        }
        //this.productInfoForm.reset();
        //console.log('Print-data->', this.getData());
        if (this.EditProduct) {
            this.updateProduct();
        }
        else {
            this.productInsert();
        }
    };
    //For Update
    ProductaddComponent.prototype.getSingleValue = function () {
        var _this = this;
        var productValue$ = this.store.select(app_stores_product_product_selectors__WEBPACK_IMPORTED_MODULE_9__["singleProductBasedOnId"]);
        productValue$.subscribe(function (currentProduct) {
            console.log('getSingle-pro->', currentProduct);
            if (currentProduct) {
                _this.category_id = currentProduct.categoryName;
                _this.product_name = currentProduct.productName;
                _this.product_code = currentProduct.productCode;
                _this.product_brand_name = currentProduct.brandName;
                _this.product_details = currentProduct.productDetails;
                _this.imgURL = currentProduct.productImage;
                _this.pid = currentProduct.pid;
            }
        });
    };
    //Update function
    ProductaddComponent.prototype.updateProduct = function () {
        var updatedProduct = {
            category_id: this.productInfoForm.get("category_id").value,
            product_code: this.productInfoForm.get("product_code").value,
            product_name: this.productInfoForm.get("product_name").value,
            product_brand_name: this.productInfoForm.get("product_brand_name").value,
            product_details: this.productInfoForm.get("product_details").value,
            product_img: this.productInfoForm.get("product_img").value,
            pid: this.pid
        };
        var pid = this.productInfoForm.get('pid').value;
        console.log('Main Id-->', this.pid);
        console.log('Update Data=>', updatedProduct);
        this.store.dispatch(_stores_product_product_actions__WEBPACK_IMPORTED_MODULE_8__["updateProduct"]({ product: updatedProduct, pid: pid }));
        this.toastr.success('Product update successfully', 'Success', {
            timeOut: 1000 * 2,
            progressBar: true
        });
        this.router.navigate(['/theme/productlist']);
        //this.clientForm.reset();
    };
    //For Insert
    ProductaddComponent.prototype.productInsert = function () {
        var insertProduct = {
            category_id: this.productInfoForm.get('category_id').value,
            product_code: this.productInfoForm.get('product_code').value,
            product_name: this.productInfoForm.get('product_name').value,
            product_brand_name: this.productInfoForm.get('product_brand_name').value,
            product_details: this.productInfoForm.get('product_details').value,
            product_img: this.productInfoForm.get('product_img').value,
        };
        this.store.dispatch(_stores_product_product_actions__WEBPACK_IMPORTED_MODULE_8__["createProduct"]({ product: insertProduct }));
        //{product: insertProduct} object distructering & 'product' coming from action
        //this.productInfoForm.reset();
        this.toastr.success('Product inserted successfully', 'Success', {
            timeOut: 1000 * 2,
            progressBar: true
        });
    };
    ProductaddComponent.prototype.productInfoValidation = function () {
        this.productInfoForm = this.formBuilder.group({
            category_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            product_code: [],
            product_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            product_brand_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            product_details: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(400), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)]],
            product_img: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pid: null
        });
    };
    Object.defineProperty(ProductaddComponent.prototype, "pval", {
        get: function () {
            return this.productInfoForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    //Category List For Dropdown
    ProductaddComponent.prototype.getCategoryList = function () {
        var _this = this;
        this.categoryService.getCategoryList().subscribe(function (categories) {
            _this.categories = categories;
            //console.log('All Category Data->', this.categories);
        });
    };
    // Choose category using select dropdown
    ProductaddComponent.prototype.changeCategory = function (category) {
        this.category = category.target.value.split(' ')[1];
    };
    //Single Image Upload
    ProductaddComponent.prototype.preview = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            //this.message = "Only images are supported.";
            return;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.imgURL = reader.result;
        };
    };
    ProductaddComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
    ]; };
    ProductaddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productadd',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./productadd.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/productinfo/productadd/productadd.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./productadd.component.scss */ "./src/app/views/theme/productinfo/productadd/productadd.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], ProductaddComponent);
    return ProductaddComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/productinfo/productinfo.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/theme/productinfo/productinfo.module.ts ***!
  \***************************************************************/
/*! exports provided: ProductinfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductinfoModule", function() { return ProductinfoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _theme_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme-routing.module */ "./src/app/views/theme/theme-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm2015/kolkov-angular-editor.js");
/* harmony import */ var _productadd_productadd_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./productadd/productadd.component */ "./src/app/views/theme/productinfo/productadd/productadd.component.ts");
/* harmony import */ var _quantityadd_quantityadd_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quantityadd/quantityadd.component */ "./src/app/views/theme/productinfo/quantityadd/quantityadd.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/product.component */ "./src/app/views/theme/productinfo/product/product.component.ts");
/* harmony import */ var _productlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./productlist.component */ "./src/app/views/theme/productinfo/productlist.component.ts");



// for getting ng model
// required modules


 //Needed

//Components




var ProductinfoModule = /** @class */ (function () {
    function ProductinfoModule() {
    }
    ProductinfoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_productadd_productadd_component__WEBPACK_IMPORTED_MODULE_7__["ProductaddComponent"], _quantityadd_quantityadd_component__WEBPACK_IMPORTED_MODULE_8__["QuantityaddComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"], _productlist_component__WEBPACK_IMPORTED_MODULE_10__["ProductlistComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _theme_routing_module__WEBPACK_IMPORTED_MODULE_4__["ThemeRoutingModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_6__["AngularEditorModule"],
            ]
        })
    ], ProductinfoModule);
    return ProductinfoModule;
}());



/***/ }),

/***/ "./src/app/views/theme/productinfo/productlist.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/theme/productinfo/productlist.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductlistComponent", function() { return ProductlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _stores_product_product_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../stores/product/product.selectors */ "./src/app/stores/product/product.selectors.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _stores_product_product_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../stores/product/product.actions */ "./src/app/stores/product/product.actions.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");


 //Needed





var ProductlistComponent = /** @class */ (function () {
    function ProductlistComponent(productService, router, store, toastr) {
        this.productService = productService;
        this.router = router;
        this.store = store;
        this.toastr = toastr;
    }
    ProductlistComponent.prototype.ngOnInit = function () {
        this.getProductData();
    };
    ProductlistComponent.prototype.getProductData = function () {
        //Get data dispatching from action
        this.store.dispatch(_stores_product_product_actions__WEBPACK_IMPORTED_MODULE_6__["loadProducts"]());
        this.productData$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_stores_product_product_selectors__WEBPACK_IMPORTED_MODULE_4__["selectProducts"]));
    };
    ProductlistComponent.prototype.deleteProduct = function (pid) {
        var delPop = confirm('Do you want to delete ??');
        if (delPop) {
            //console.log('Delete-Id>', pid);
            this.store.dispatch(_stores_product_product_actions__WEBPACK_IMPORTED_MODULE_6__["deleteProduct"]({ pid: pid }));
            //Alert msg
            this.toastr.success('category deleted successfully', 'Success', {
                timeOut: 1000 * 2,
                progressBar: true
            });
        }
        else {
            this.toastr.error('category deletion failed', 'Failure', {
                timeOut: 1000 * 2,
                progressBar: true
            });
            this.getProductData();
        }
    };
    ProductlistComponent.prototype.editProduct = function (pid) {
        if (confirm('Do you want to edit ??')) {
            console.log('Edit-Id>', pid);
            this.store.dispatch(_stores_product_product_actions__WEBPACK_IMPORTED_MODULE_6__["loadProduct"]({ productId: pid }));
            this.router.navigate(['/theme/product/edit/' + pid]);
            //'productId' taken from action 
        }
    };
    ProductlistComponent.ctorParameters = function () { return [
        { type: _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }
    ]; };
    ProductlistComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./productlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/productinfo/productlist.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], ProductlistComponent);
    return ProductlistComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/productinfo/quantityadd/quantityadd.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/views/theme/productinfo/quantityadd/quantityadd.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RoZW1lL3Byb2R1Y3RpbmZvL3F1YW50aXR5YWRkL3F1YW50aXR5YWRkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/theme/productinfo/quantityadd/quantityadd.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/theme/productinfo/quantityadd/quantityadd.component.ts ***!
  \******************************************************************************/
/*! exports provided: QuantityaddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuantityaddComponent", function() { return QuantityaddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_quantity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/quantity.service */ "./src/app/services/quantity.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _stores_quantity_quantity_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../stores/quantity/quantity.actions */ "./src/app/stores/quantity/quantity.actions.ts");
/* harmony import */ var _stores_quantity_quantity_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../stores/quantity/quantity.selectors */ "./src/app/stores/quantity/quantity.selectors.ts");







//NGRX Directory



var QuantityaddComponent = /** @class */ (function () {
    function QuantityaddComponent(formBuilder, router, quantityService, route, // For Edit data
    httpClient, toastr, store) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.quantityService = quantityService;
        this.route = route;
        this.httpClient = httpClient;
        this.toastr = toastr;
        this.store = store;
        this.isPasswordSubmitte = false;
    }
    QuantityaddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.manageQtyValidation();
        this.getAllSellingUnits();
        //Using NGRX
        //this.getSingleQuantity();
        //Get single value 
        var quantity$ = this.store.select(_stores_quantity_quantity_selectors__WEBPACK_IMPORTED_MODULE_9__["singleQuantityBasedOnId"]);
        //Subscribe for update
        quantity$.subscribe(function (currentQuantity) {
            console.log('qty Value->', currentQuantity);
            if (currentQuantity) {
                _this.manageQtyForm.patchValue({
                    quantity: currentQuantity.quantity,
                    price: currentQuantity.price,
                    sellingUnitId: currentQuantity.sellingUnitId,
                    pid: currentQuantity.pid
                });
            }
        });
    };
    //Without NGRX select all selling units for unit drop-down
    QuantityaddComponent.prototype.getAllSellingUnits = function () {
        var _this = this;
        this.quantityService.getAllUnits().subscribe(function (resUnit) {
            _this.sellingUnits = resUnit;
            //console.log('All Units-->', this.sellingUnits);
        });
    };
    //Get single value for update
    /*  getSingleQuantity(){
   
       
   
     } */
    QuantityaddComponent.prototype.manageQtyValidation = function () {
        this.manageQtyForm = this.formBuilder.group({
            quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            sellingUnitId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pid: null
        });
    };
    Object.defineProperty(QuantityaddComponent.prototype, "mval", {
        get: function () {
            return this.manageQtyForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    QuantityaddComponent.prototype.manageQty = function () {
        this.isPasswordSubmitte = true;
        if (this.manageQtyForm.invalid) {
            return;
        }
        //alert('form fields are validated successfully!');
        var updatedQuantity = {
            quantity: this.manageQtyForm.get('quantity').value,
            price: this.manageQtyForm.get('price').value,
            sellingUnitId: this.manageQtyForm.get('sellingUnitId').value,
            pid: this.manageQtyForm.get('pid').value,
        };
        this.store.dispatch(_stores_quantity_quantity_actions__WEBPACK_IMPORTED_MODULE_8__["updateQuantity"]({ quantity: updatedQuantity, pid: this.pid }));
    };
    QuantityaddComponent.prototype.changeUnit = function (sellunit) {
        this.sellunit = sellunit.target.value;
    };
    //Numeric accepted
    QuantityaddComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    //Numeric and dot accepted
    QuantityaddComponent.prototype.numberDotOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        var dot = event.target;
        if (charCode == 46) {
            //  console.log('chart',el);
            if (dot.value.indexOf('.') === -1) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                return false;
            }
            return true;
        }
    };
    QuantityaddComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_quantity_service__WEBPACK_IMPORTED_MODULE_5__["QuantityService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }
    ]; };
    QuantityaddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quantityadd',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./quantityadd.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/productinfo/quantityadd/quantityadd.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./quantityadd.component.scss */ "./src/app/views/theme/productinfo/quantityadd/quantityadd.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_quantity_service__WEBPACK_IMPORTED_MODULE_5__["QuantityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]])
    ], QuantityaddComponent);
    return QuantityaddComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/resetpass/resetpass.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/theme/resetpass/resetpass.component.ts ***!
  \**************************************************************/
/*! exports provided: ResetPassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassComponent", function() { return ResetPassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_shopper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shopper.service */ "./src/app/services/shopper.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");







var ResetPassComponent = /** @class */ (function () {
    //testsub = false;
    function ResetPassComponent(formBuilder, router, shopperData, route, // For Edit data
    httpClient, toastr) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.shopperData = shopperData;
        this.route = route;
        this.httpClient = httpClient;
        this.toastr = toastr;
        this.isPasswordSubmitte = false;
    }
    ResetPassComponent.prototype.ngOnInit = function () {
        this.resetPassValidation();
    };
    ResetPassComponent.prototype.resetPassValidation = function () {
        this.resetPassForm = this.formBuilder.group({
            oldPass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,12})")]],
            newPass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,12})")]],
            confirmPass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,12})")]]
        });
    };
    Object.defineProperty(ResetPassComponent.prototype, "passVal", {
        get: function () {
            return this.resetPassForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    ResetPassComponent.prototype.resetPass = function () {
        this.isPasswordSubmitte = true;
        if (this.resetPassForm.invalid) {
            return;
        }
        alert('form fields are validated successfully!');
    };
    // Toggle Eye button  
    ResetPassComponent.prototype.toggleAddTextType = function () {
        this.addTextType = !this.addTextType;
    };
    // Toggle Eye button  
    ResetPassComponent.prototype.toggleConfTextType = function () {
        this.confTextType = !this.confTextType;
    };
    // Toggle Eye button
    ResetPassComponent.prototype.toggleOldTextType = function () {
        this.oldTextType = !this.oldTextType;
    };
    // Toggle Eye button
    ResetPassComponent.prototype.toggleNewTextType = function () {
        this.newTextType = !this.newTextType;
    };
    // Toggle Eye button
    ResetPassComponent.prototype.toggleConfirmTextType = function () {
        this.confirmTextType = !this.confirmTextType;
    };
    ResetPassComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_shopper_service__WEBPACK_IMPORTED_MODULE_5__["ShopperService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
    ]; };
    ResetPassComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./resetpass.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/resetpass/resetpass.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_shopper_service__WEBPACK_IMPORTED_MODULE_5__["ShopperService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], ResetPassComponent);
    return ResetPassComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/settings/settings.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/theme/settings/settings.component.ts ***!
  \************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _stores_settings_settings_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../stores/settings/settings.actions */ "./src/app/stores/settings/settings.actions.ts");
/* harmony import */ var _stores_settings_settings_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../stores/settings/settings.selectors */ "./src/app/stores/settings/settings.selectors.ts");







//NGRX Directory



var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(formBuilder, router, route, // For Edit data
    httpClient, toastr, settingsService, store) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.httpClient = httpClient;
        this.toastr = toastr;
        this.settingsService = settingsService;
        this.store = store;
        this.submitted = false;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.socialInfoValidation();
        this.getSettingsData();
        //Get Data of settings
    };
    //Get Single value from actions and selectors with service using dispatch
    SettingsComponent.prototype.getSettingsData = function () {
        var _this = this;
        this.store.dispatch(_stores_settings_settings_actions__WEBPACK_IMPORTED_MODULE_8__["loadSettings"]());
        var settingsData = this.store.select(_stores_settings_settings_selectors__WEBPACK_IMPORTED_MODULE_9__["selectSettings"]);
        settingsData.subscribe(function (currentSettings) {
            console.log('sty Value->', currentSettings);
            if (currentSettings[0]) {
                _this.sid = currentSettings[0].sid;
                _this.socialInfoForm.patchValue({
                    address: currentSettings[0].address,
                    email: currentSettings[0].email,
                    supportPhone: currentSettings[0].supportPhone,
                    altPhone: currentSettings[0].altPhone,
                    facebookUrl: currentSettings[0].facebookUrl,
                    twitterUrl: currentSettings[0].twitterUrl,
                    youtubeUrl: currentSettings[0].youtubeUrl,
                    instagramUrl: currentSettings[0].instagramUrl,
                    sid: currentSettings[0].sid
                });
            }
        });
    };
    SettingsComponent.prototype.socialInfoValidation = function () {
        this.socialInfoForm = this.formBuilder.group({
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$')]],
            supportPhone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
            altPhone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
            facebookUrl: [],
            twitterUrl: [],
            youtubeUrl: [],
            instagramUrl: [],
            sid: null
        });
    };
    Object.defineProperty(SettingsComponent.prototype, "socialVal", {
        get: function () {
            return this.socialInfoForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    SettingsComponent.prototype.socialInfo = function () {
        this.submitted = true;
        // console.log(this.submitted)
        if (this.socialInfoForm.invalid) {
            return;
        }
        //alert('form fields are validated successfully!');
        var updatedSettings = {
            address: this.socialInfoForm.get('address').value,
            email: this.socialInfoForm.get('email').value,
            support_phone: this.socialInfoForm.get('supportPhone').value,
            alt_phone: this.socialInfoForm.get('altPhone').value,
            facebook_url: this.socialInfoForm.get('facebookUrl').value,
            twitter_url: this.socialInfoForm.get('twitterUrl').value,
            youtube_url: this.socialInfoForm.get('youtubeUrl').value,
            instagram_url: this.socialInfoForm.get('instagramUrl').value,
            sid: this.socialInfoForm.get('sid').value
        };
        var sid = this.socialInfoForm.get('sid').value;
        //console.log('Main Id-->', this.sid);
        //console.log('Update Data=>', updatedSettings);
        this.store.dispatch(_stores_settings_settings_actions__WEBPACK_IMPORTED_MODULE_8__["updateSetting"]({ settings: updatedSettings, sid: this.sid }));
        //Alert msg
        this.toastr.success('Settings updated successfully', 'Success', {
            timeOut: 1000 * 2,
            progressBar: true
        });
    };
    //Numeric accepted
    SettingsComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    SettingsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }
    ]; };
    SettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/settings/settings.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/shoperInfo/addressInfo/addressinfo.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/theme/shoperInfo/addressInfo/addressinfo.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddressinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressinfoComponent", function() { return AddressinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var app_services_shopper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/shopper.service */ "./src/app/services/shopper.service.ts");






var AddressinfoComponent = /** @class */ (function () {
    function AddressinfoComponent(shopperData, formBuilder, route, //to get id for edit and view
    toastr) {
        this.shopperData = shopperData;
        this.formBuilder = formBuilder;
        this.route = route;
        this.toastr = toastr;
        this.addressSubmitted = false;
    }
    AddressinfoComponent.prototype.ngOnInit = function () {
        this.getStateValue();
        this.getCountryValue();
        this.addressInfoValidation();
    };
    //For State Selection And fetch to select field
    AddressinfoComponent.prototype.getStateValue = function () {
        var _this = this;
        this.shopperData.getState().subscribe(function (states) {
            _this.states = states;
            console.log("All States", _this.states);
        });
    };
    //For Country Selection And fetch to select field
    AddressinfoComponent.prototype.getCountryValue = function () {
        var _this = this;
        this.shopperData.getCountry().subscribe(function (countries) {
            _this.countries = countries;
            console.log("All Country Data->", _this.countries);
        });
    };
    AddressinfoComponent.prototype.changeCountryVal = function (country) {
        this.country = country.target.value.split(" ")[1];
    };
    AddressinfoComponent.prototype.changeState = function (state) {
        this.state = state.target.value;
    };
    //Address validation
    AddressinfoComponent.prototype.addressInfoValidation = function () {
        this.addressInfoForm = this.formBuilder.group({
            shopName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            streetName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            countryName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            stateName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cityName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            zipCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[0-9]{4,6}")]],
        });
    };
    Object.defineProperty(AddressinfoComponent.prototype, "addressVal", {
        get: function () {
            return this.addressInfoForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddressinfoComponent.prototype.addressInfo = function () {
        this.addressSubmitted = true;
        if (this.addressInfoForm.invalid) {
            return;
        }
        //alert("form fields are validated successfully!");
        //After click on save button toggle to fields disable
        var saveBtn = document.getElementsByClassName("address_btn");
        var editPencil = document.getElementsByClassName('address_pencil');
        var invisibleBasicInput = document.getElementsByClassName('address_input');
        editPencil[0].setAttribute('style', 'display : block');
        saveBtn[0].setAttribute('style', 'display : none');
        for (var i = 0; i != invisibleBasicInput.length; i++) {
            invisibleBasicInput[i].removeAttribute("disabled", true);
        }
        //Alert msg
        console.dir(editPencil[0]);
        this.toastr.success('Details submitted successfully', 'Basic details editted', {
            timeOut: 1000,
            progressBar: false
        });
        //After click on save button toggle to fields disable End
    };
    AddressinfoComponent.prototype.addressShowHide = function () {
        var saveBtn = document.getElementsByClassName("address_btn");
        var editPencil = document.getElementsByClassName("address_pencil");
        var invisibleAddressInput = document.getElementsByClassName("address_input");
        for (var i = 0; i != editPencil.length; i++) {
            editPencil[i].setAttribute("style", "display : none");
            saveBtn[i].setAttribute("style", "display : block");
        }
        for (var i = 0; i != invisibleAddressInput.length; i++) {
            invisibleAddressInput[i].removeAttribute("disabled", false);
        }
    };
    AddressinfoComponent.ctorParameters = function () { return [
        { type: app_services_shopper_service__WEBPACK_IMPORTED_MODULE_5__["ShopperService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    AddressinfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addressinfo',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addressinfo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/shoperInfo/addressInfo/addressinfo.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [app_services_shopper_service__WEBPACK_IMPORTED_MODULE_5__["ShopperService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AddressinfoComponent);
    return AddressinfoComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/shoperInfo/basicinfo/basicinfo.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/theme/shoperInfo/basicinfo/basicinfo.component.ts ***!
  \*************************************************************************/
/*! exports provided: BasicinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicinfoComponent", function() { return BasicinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var app_services_shopper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/shopper.service */ "./src/app/services/shopper.service.ts");






var BasicinfoComponent = /** @class */ (function () {
    function BasicinfoComponent(formBuilder, route, toastr, shopperData) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.toastr = toastr;
        this.shopperData = shopperData;
        this.genders = ["Male", "Female", "Others"];
        this.submitted = false;
    }
    BasicinfoComponent.prototype.ngOnInit = function () {
        this.getUserData();
        this.u_id = this.route.snapshot.params["u_id"];
        this.basicInfoValidation();
        this.disabledbydefault();
    };
    BasicinfoComponent.prototype.changeGender = function (gender) {
        this.gender = gender.target.value.split(" ")[1];
    };
    BasicinfoComponent.prototype.disabledbydefault = function () {
        var invisibleBasicInput = document.getElementsByClassName("basic_input");
        var invisibleAddressInput = document.getElementsByClassName("address_input");
        for (var i = 0; i != invisibleBasicInput.length; i++) {
            invisibleBasicInput[i].setAttribute("disabled", true);
        }
        for (var i = 0; i != invisibleAddressInput.length; i++) {
            invisibleAddressInput[i].setAttribute("disabled", true);
        }
    };
    BasicinfoComponent.prototype.basicShowHide = function () {
        var saveBtn = document.getElementsByClassName("basic_btn");
        var editPencil = document.getElementsByClassName("basic_pencil");
        var invisibleBasicInput = document.getElementsByClassName("basic_input");
        for (var i = 0; i != editPencil.length; i++) {
            editPencil[i].setAttribute("style", "display : none");
            saveBtn[i].setAttribute("style", "display : block");
        }
        for (var i = 0; i != invisibleBasicInput.length; i++) {
            invisibleBasicInput[i].removeAttribute("disabled", false);
        }
    };
    //  Form Validation reactive
    BasicinfoComponent.prototype.basicInfoValidation = function () {
        this.basicInfoForm = this.formBuilder.group({
            firstName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            middleName: [],
            lastName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            genderName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$")]],
            phoneNumber: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")],
            ],
        });
    };
    Object.defineProperty(BasicinfoComponent.prototype, "basicVal", {
        get: function () {
            return this.basicInfoForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    BasicinfoComponent.prototype.basicInfo = function () {
        this.submitted = true;
        if (this.basicInfoForm.invalid) {
            return;
        }
        //alert('form fields are validated successfully!');
        //After click on save button toggle to fields disable
        var saveBtn = document.getElementsByClassName("basic_btn");
        var editPencil = document.getElementsByClassName("basic_pencil");
        var invisibleBasicInput = document.getElementsByClassName("basic_input");
        console.log('Invisible', invisibleBasicInput);
        for (var i = 0; i != editPencil.length; i++) {
            console.log('Invisible', invisibleBasicInput);
            editPencil[i].setAttribute("style", "display : block");
            saveBtn[i].setAttribute("style", "display : none");
        }
        for (var i = 0; i != invisibleBasicInput.length; i++) {
            invisibleBasicInput[i].removeAttribute("disabled", true);
        }
        //After click on save button toggle to fields disable End
        //Alert msg
        this.toastr.success("Details submitted successfully", "Basic details editted", {
            timeOut: 1000,
            progressBar: false,
        });
    };
    BasicinfoComponent.prototype.getUserData = function () {
        var _this = this;
        this.shopperData.getUserData().subscribe(function (data) {
            _this.userData = data;
            console.log("all user details", _this.userData);
        });
    };
    BasicinfoComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: app_services_shopper_service__WEBPACK_IMPORTED_MODULE_5__["ShopperService"] }
    ]; };
    BasicinfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basicinfo',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./basicinfo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/shoperInfo/basicinfo/basicinfo.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            app_services_shopper_service__WEBPACK_IMPORTED_MODULE_5__["ShopperService"]])
    ], BasicinfoComponent);
    return BasicinfoComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/shoperInfo/myinfo.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/theme/shoperInfo/myinfo.component.ts ***!
  \************************************************************/
/*! exports provided: MyinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyinfoComponent", function() { return MyinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var MyinfoComponent = /** @class */ (function () {
    function MyinfoComponent() {
    }
    MyinfoComponent.prototype.ngOnInit = function () { };
    MyinfoComponent.ctorParameters = function () { return []; };
    MyinfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./myinfo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/shoperInfo/myinfo.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], MyinfoComponent);
    return MyinfoComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/shoperInfo/myinfo.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/theme/shoperInfo/myinfo.module.ts ***!
  \*********************************************************/
/*! exports provided: MyinfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyinfoModule", function() { return MyinfoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _theme_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme-routing.module */ "./src/app/views/theme/theme-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm2015/kolkov-angular-editor.js");
/* harmony import */ var _basicinfo_basicinfo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basicinfo/basicinfo.component */ "./src/app/views/theme/shoperInfo/basicinfo/basicinfo.component.ts");
/* harmony import */ var _addressInfo_addressinfo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addressInfo/addressinfo.component */ "./src/app/views/theme/shoperInfo/addressInfo/addressinfo.component.ts");
/* harmony import */ var _othersInfo_othersinfo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./othersInfo/othersinfo.component */ "./src/app/views/theme/shoperInfo/othersInfo/othersinfo.component.ts");
/* harmony import */ var _myinfo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./myinfo.component */ "./src/app/views/theme/shoperInfo/myinfo.component.ts");
/* harmony import */ var _shopperlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shopperlist.component */ "./src/app/views/theme/shoperInfo/shopperlist.component.ts");



// required modules

 //Needed

//Directive
//import { ConfirmEqualValidatorDirective } from '../confirm-equal-validator.directive';
//import { ProtectedfieldDirective } from '../middlewares/protectedfield.directive';
//components





var MyinfoModule = /** @class */ (function () {
    function MyinfoModule() {
    }
    MyinfoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                //Directives
                //ConfirmEqualValidatorDirective,
                //ProtectedfieldDirective,
                //Components
                _basicinfo_basicinfo_component__WEBPACK_IMPORTED_MODULE_6__["BasicinfoComponent"],
                _addressInfo_addressinfo_component__WEBPACK_IMPORTED_MODULE_7__["AddressinfoComponent"],
                _othersInfo_othersinfo_component__WEBPACK_IMPORTED_MODULE_8__["OthersinfoComponent"],
                _myinfo_component__WEBPACK_IMPORTED_MODULE_9__["MyinfoComponent"],
                _shopperlist_component__WEBPACK_IMPORTED_MODULE_10__["ShopperlistComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _theme_routing_module__WEBPACK_IMPORTED_MODULE_3__["ThemeRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__["AngularEditorModule"],
                //NgForm, //Needed
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ]
        })
    ], MyinfoModule);
    return MyinfoModule;
}());



/***/ }),

/***/ "./src/app/views/theme/shoperInfo/othersInfo/othersinfo.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/theme/shoperInfo/othersInfo/othersinfo.component.ts ***!
  \***************************************************************************/
/*! exports provided: OthersinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersinfoComponent", function() { return OthersinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




var OthersinfoComponent = /** @class */ (function () {
    function OthersinfoComponent(toastr, formBuilder) {
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.imgURL = "assets/img/avatars/6.jpg";
        this.shopImgURL = "assets/img/avatars/6.jpg";
        this.imageSubmitted = false;
    }
    OthersinfoComponent.prototype.ngOnInit = function () {
        this.imageInfoValidation();
    };
    OthersinfoComponent.prototype.imageInfoValidation = function () {
        this.imageInfoForm = this.formBuilder.group({
            shopImage: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    Object.defineProperty(OthersinfoComponent.prototype, "imgVal", {
        get: function () {
            return this.imageInfoForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    OthersinfoComponent.prototype.imageInfo = function () {
        this.imageSubmitted = true;
        if (this.imageInfoForm.invalid) {
            return;
        }
        //alert("form fields are validated successfully!");
    };
    OthersinfoComponent.prototype.imageShowHide = function () {
        var ImageInputsAndSaveBtn = document.getElementsByClassName("image_edit");
        var labelx = document.getElementsByClassName("image_label");
        for (var i = 0; i != ImageInputsAndSaveBtn.length; i++) {
            labelx[0].setAttribute("style", "display : none");
            ImageInputsAndSaveBtn[i].setAttribute("style", "display : block");
        }
    };
    OthersinfoComponent.prototype.imageSave = function () {
        var hiddeninputs = document.getElementsByClassName("image_edit");
        var labelx = document.getElementsByClassName("image_label");
        for (var i = 0; i != hiddeninputs.length; i++) {
            labelx[0].setAttribute("style", "display : block");
            hiddeninputs[i].setAttribute("style", "display: none");
        }
        //Alert msg
        this.toastr.success("Details submitted successfully", "Other details editted", {
            timeOut: 1000,
            progressBar: false,
        });
    };
    //Single Image Preview Upload
    OthersinfoComponent.prototype.preview = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            // this.message = "Only images are supported.";
            return;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.imgURL = reader.result;
        };
    };
    //Single Image Preview Upload
    OthersinfoComponent.prototype.shopPreview = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            //this.shopMessage = "Only images are supported.";
            return;
        }
        var reader = new FileReader();
        this.shopImagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.shopImgURL = reader.result;
        };
    };
    OthersinfoComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    OthersinfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-othersinfo',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./othersinfo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/shoperInfo/othersInfo/othersinfo.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], OthersinfoComponent);
    return OthersinfoComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/shoperInfo/shopperlist.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/theme/shoperInfo/shopperlist.component.ts ***!
  \*****************************************************************/
/*! exports provided: ShopperlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopperlistComponent", function() { return ShopperlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_shopper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shopper.service */ "./src/app/services/shopper.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






var ShopperlistComponent = /** @class */ (function () {
    function ShopperlistComponent(shopperData, router, httpClient, toastr) {
        this.shopperData = shopperData;
        this.router = router;
        this.httpClient = httpClient;
        this.toastr = toastr;
    }
    ShopperlistComponent.prototype.ngOnInit = function () {
        this.getUserData();
    };
    ShopperlistComponent.prototype.getUserData = function () {
        var _this = this;
        this.shopperData.getUserData().subscribe(function (data) {
            _this.userData = data;
            console.log(_this.userData);
        });
    };
    ShopperlistComponent.ctorParameters = function () { return [
        { type: _services_shopper_service__WEBPACK_IMPORTED_MODULE_3__["ShopperService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    ShopperlistComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./shopperlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/shoperInfo/shopperlist.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_shopper_service__WEBPACK_IMPORTED_MODULE_3__["ShopperService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], ShopperlistComponent);
    return ShopperlistComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/theme-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/theme/theme-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ThemeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeRoutingModule", function() { return ThemeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admininfo_admininfo_admininfo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admininfo/admininfo/admininfo.component */ "./src/app/views/theme/admininfo/admininfo/admininfo.component.ts");
/* harmony import */ var _shoperInfo_myinfo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shoperInfo/myinfo.component */ "./src/app/views/theme/shoperInfo/myinfo.component.ts");
/* harmony import */ var _productinfo_product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productinfo/product/product.component */ "./src/app/views/theme/productinfo/product/product.component.ts");
/* harmony import */ var _shoperInfo_shopperlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shoperInfo/shopperlist.component */ "./src/app/views/theme/shoperInfo/shopperlist.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/views/theme/customer/customer.component.ts");
/* harmony import */ var _customer_customeradd_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer/customeradd.component */ "./src/app/views/theme/customer/customeradd.component.ts");
/* harmony import */ var _productinfo_productlist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./productinfo/productlist.component */ "./src/app/views/theme/productinfo/productlist.component.ts");
/* harmony import */ var _banner_banneradd_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./banner/banneradd.component */ "./src/app/views/theme/banner/banneradd.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/views/theme/settings/settings.component.ts");
/* harmony import */ var _category_categoryadd_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./category/categoryadd.component */ "./src/app/views/theme/category/categoryadd.component.ts");
/* harmony import */ var _category_categorylist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./category/categorylist.component */ "./src/app/views/theme/category/categorylist.component.ts");
/* harmony import */ var _resetpass_resetpass_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resetpass/resetpass.component */ "./src/app/views/theme/resetpass/resetpass.component.ts");















var routes = [
    {
        path: '',
        data: {
            title: 'Theme'
        },
        children: [
            {
                path: '',
                redirectTo: 'product'
            },
            {
                path: 'product',
                component: _productinfo_product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"],
                data: {
                    title: 'Product'
                }
            },
            {
                path: 'product/edit/:pid',
                component: _productinfo_product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"],
                data: {
                    title: 'Product'
                }
            },
            {
                path: 'myinfo',
                component: _shoperInfo_myinfo_component__WEBPACK_IMPORTED_MODULE_4__["MyinfoComponent"],
                data: {
                    title: 'Myinfo'
                }
            },
            {
                path: 'myinfo/:u_id',
                component: _shoperInfo_myinfo_component__WEBPACK_IMPORTED_MODULE_4__["MyinfoComponent"],
                data: {
                    title: 'Myinfo'
                }
            },
            {
                path: 'shopperlist',
                component: _shoperInfo_shopperlist_component__WEBPACK_IMPORTED_MODULE_6__["ShopperlistComponent"],
                data: {
                    title: 'Shopperlist'
                }
            },
            {
                path: 'customer',
                component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_7__["CustomerComponent"],
                data: {
                    title: 'Customer'
                }
            },
            {
                path: 'customeradd',
                component: _customer_customeradd_component__WEBPACK_IMPORTED_MODULE_8__["CustomeraddComponent"],
                data: {
                    title: 'Customeradd'
                }
            },
            {
                path: 'productlist',
                component: _productinfo_productlist_component__WEBPACK_IMPORTED_MODULE_9__["ProductlistComponent"],
                data: {
                    title: 'Productlist'
                }
            },
            {
                path: 'categoryadd',
                component: _category_categoryadd_component__WEBPACK_IMPORTED_MODULE_12__["CategoryaddComponent"],
                data: {
                    title: 'Categoryadd'
                }
            },
            {
                path: 'categoryadd/edit/:cat_id',
                component: _category_categoryadd_component__WEBPACK_IMPORTED_MODULE_12__["CategoryaddComponent"],
                data: {
                    title: 'Categoryedit'
                }
            },
            {
                path: 'categorylist',
                component: _category_categorylist_component__WEBPACK_IMPORTED_MODULE_13__["CategorylistComponent"],
                data: {
                    title: 'Categorylist'
                }
            },
            {
                path: 'banneradd',
                component: _banner_banneradd_component__WEBPACK_IMPORTED_MODULE_10__["BanneraddComponent"],
                data: {
                    title: 'Banner'
                }
            },
            {
                path: 'admininfo',
                component: _admininfo_admininfo_admininfo_component__WEBPACK_IMPORTED_MODULE_3__["AdmininfoComponent"],
                data: {
                    title: 'Admin'
                }
            },
            {
                path: 'settings',
                component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"],
                data: {
                    title: 'Settings'
                }
            },
            {
                path: 'resetpass',
                component: _resetpass_resetpass_component__WEBPACK_IMPORTED_MODULE_14__["ResetPassComponent"],
                data: {
                    title: 'Resetpass'
                }
            }
        ]
    }
];
var ThemeRoutingModule = /** @class */ (function () {
    function ThemeRoutingModule() {
    }
    ThemeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ThemeRoutingModule);
    return ThemeRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/theme/theme.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/theme/theme.module.ts ***!
  \*********************************************/
/*! exports provided: ThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return ThemeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm2015/kolkov-angular-editor.js");
/* harmony import */ var _shoperInfo_myinfo_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shoperInfo/myinfo.module */ "./src/app/views/theme/shoperInfo/myinfo.module.ts");
/* harmony import */ var _admininfo_admininfo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admininfo/admininfo.module */ "./src/app/views/theme/admininfo/admininfo.module.ts");
/* harmony import */ var _productinfo_productinfo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productinfo/productinfo.module */ "./src/app/views/theme/productinfo/productinfo.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-loading-bar/router */ "./node_modules/@ngx-loading-bar/router/fesm2015/ngx-loading-bar-router.js");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/fesm2015/ngx-loading-bar-core.js");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/views/theme/customer/customer.component.ts");
/* harmony import */ var _customer_customeradd_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customer/customeradd.component */ "./src/app/views/theme/customer/customeradd.component.ts");
/* harmony import */ var _banner_banneradd_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./banner/banneradd.component */ "./src/app/views/theme/banner/banneradd.component.ts");
/* harmony import */ var _category_categoryadd_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./category/categoryadd.component */ "./src/app/views/theme/category/categoryadd.component.ts");
/* harmony import */ var _category_categorylist_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./category/categorylist.component */ "./src/app/views/theme/category/categorylist.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/views/theme/settings/settings.component.ts");
/* harmony import */ var _resetpass_resetpass_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./resetpass/resetpass.component */ "./src/app/views/theme/resetpass/resetpass.component.ts");
/* harmony import */ var _theme_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./theme-routing.module */ "./src/app/views/theme/theme-routing.module.ts");
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-confirmation-popover */ "./node_modules/angular-confirmation-popover/fesm2015/angular-confirmation-popover.js");

// Angular

//For Spinners





// for getting ng model
 //Needed
//protected-Field & Equal-field validation Directive
//import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';
//import { ProtectedfieldDirective } from '../../middlewares/protectedfield.directive';//Needed
//NGRX Modules
//import { StoreModule } from '@ngrx/store';
//For Spinners

//For Spinners2









// Theme Routing

//Confirmation edit-delete
 //Confirmation Popup 
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _theme_routing_module__WEBPACK_IMPORTED_MODULE_18__["ThemeRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_3__["AngularEditorModule"],
                //NgForm, //Needed
                ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"],
                _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_9__["LoadingBarRouterModule"],
                _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_10__["LoadingBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _shoperInfo_myinfo_module__WEBPACK_IMPORTED_MODULE_4__["MyinfoModule"],
                angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_19__["ConfirmationPopoverModule"].forRoot({
                    confirmButtonType: 'success',
                }),
                _admininfo_admininfo_module__WEBPACK_IMPORTED_MODULE_5__["AdminInfoModule"],
                _productinfo_productinfo_module__WEBPACK_IMPORTED_MODULE_6__["ProductinfoModule"],
            ],
            declarations: [
                _customer_customer_component__WEBPACK_IMPORTED_MODULE_11__["CustomerComponent"],
                _customer_customeradd_component__WEBPACK_IMPORTED_MODULE_12__["CustomeraddComponent"],
                _banner_banneradd_component__WEBPACK_IMPORTED_MODULE_13__["BanneraddComponent"],
                _category_categoryadd_component__WEBPACK_IMPORTED_MODULE_14__["CategoryaddComponent"],
                _category_categorylist_component__WEBPACK_IMPORTED_MODULE_15__["CategorylistComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_16__["SettingsComponent"],
                _resetpass_resetpass_component__WEBPACK_IMPORTED_MODULE_17__["ResetPassComponent"],
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], ThemeModule);
    return ThemeModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-theme-theme-module.js.map