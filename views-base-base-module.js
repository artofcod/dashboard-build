(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-base-base-module"],{

/***/ "./node_modules/ngx-bootstrap/carousel/fesm2015/ngx-bootstrap-carousel.js":
/*!********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/carousel/fesm2015/ngx-bootstrap-carousel.js ***!
  \********************************************************************************/
/*! exports provided: CarouselComponent, CarouselConfig, CarouselModule, SlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselConfig", function() { return CarouselConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return SlideComponent; });
/* harmony import */ var _home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var CarouselConfig = function CarouselConfig() {
  Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CarouselConfig);

  /* Default interval of auto changing of slides */
  this.interval = 5000;
  /* Is loop of auto changing of slides can be paused */

  this.noPause = false;
  /* Is slides can wrap from the last to the first slide */

  this.noWrap = false;
  /* Show carousel-indicators */

  this.showIndicators = true;
  /* Slides can be paused on focus */

  this.pauseOnFocus = false;
  /* If `true` - carousel indicators indicate slides chunks works ONLY if singleSlideOffset = FALSE */

  this.indicatorsByChunk = false;
  /* If value more then 1 — carousel works in multilist mode */

  this.itemsPerSlide = 1;
  /* If `true` — carousel shifts by one element. By default carousel shifts by number
      of visible elements (itemsPerSlide field) */

  this.singleSlideOffset = false;
};

CarouselConfig.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
}];

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Returns the index of the last element in the array where predicate is true, and -1
 * otherwise.
 * @template T
 * @param {?} array The source array to search in
 * @param {?} predicate find calls predicate once for each element of the array, in descending
 * order, until it finds one where predicate returns true. If such an element is found,
 * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
 * @return {?}
 */


function findLastIndex(array, predicate) {
  /** @type {?} */
  var l = array.length;

  while (l--) {
    if (predicate(array[l], l, array)) {
      return l;
    }
  }

  return -1;
}
/**
 * @template T
 * @param {?} array
 * @param {?} size
 * @return {?}
 */


function chunkByNumber(array, size) {
  /** @type {?} */
  var out = [];
  /** @type {?} */

  var n = Math.ceil(array.length / size);
  /** @type {?} */

  var i = 0;

  while (i < n) {
    /** @type {?} */
    var chunk = array.splice(0, i === n - 1 && size < array.length ? array.length : size);
    out.push(chunk);
    i++;
  }

  return out;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @enum {number} */


var Direction = {
  UNKNOWN: 0,
  NEXT: 1,
  PREV: 2
};
Direction[Direction.UNKNOWN] = 'UNKNOWN';
Direction[Direction.NEXT] = 'NEXT';
Direction[Direction.PREV] = 'PREV';
/**
 * Base element to create carousel
 */

var CarouselComponent = /*#__PURE__*/function () {
  /**
   * @param {?} config
   * @param {?} ngZone
   */
  function CarouselComponent(config, ngZone) {
    Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CarouselComponent);

    this.ngZone = ngZone;
    /* If `true` - carousel indicators indicate slides chunks
         works ONLY if singleSlideOffset = FALSE */

    this.indicatorsByChunk = false;
    /* If value more then 1 — carousel works in multilist mode */

    this.itemsPerSlide = 1;
    /* If `true` — carousel shifts by one element. By default carousel shifts by number
         of visible elements (itemsPerSlide field) */

    this.singleSlideOffset = false;
    /**
     * Turn on/off animation. Animation doesn't work for multilist carousel
     */

    this.isAnimated = false;
    /**
     * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
     */

    this.activeSlideChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](false);
    /**
     * Will be emitted when active slides has been changed in multilist mode
     */

    this.slideRangeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    /* Index to start display slides from it */

    this.startFromIndex = 0;
    this._slides = new ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_4__["LinkedList"]();
    this._currentVisibleSlidesIndex = 0;
    this.destroyed = false;

    this.getActive =
    /**
    * @param {?} slide
    * @return {?}
    */
    function (slide) {
      return slide.active;
    };

    this.makeSlidesConsistent =
    /**
    * @param {?} slides
    * @return {?}
    */
    function (slides) {
      slides.forEach(
      /**
      * @param {?} slide
      * @param {?} index
      * @return {?}
      */
      function (slide, index) {
        return slide.item.order = index;
      });
    };

    Object.assign(this, config);
  }
  /**
   * Index of currently displayed slide(started for 0)
   * @param {?} index
   * @return {?}
   */


  Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CarouselComponent, [{
    key: "ngAfterViewInit",

    /**
     * @return {?}
     */
    value: function ngAfterViewInit() {
      var _this = this;

      setTimeout(
      /**
      * @return {?}
      */
      function () {
        if (_this.singleSlideOffset) {
          _this.indicatorsByChunk = false;
        }

        if (_this.multilist) {
          _this._chunkedSlides = chunkByNumber(_this.mapSlidesAndIndexes(), _this.itemsPerSlide);

          _this.selectInitialSlides();
        }
      }, 0);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.destroyed = true;
    }
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param {?} slide
     * @return {?}
     */

  }, {
    key: "addSlide",
    value: function addSlide(slide) {
      this._slides.add(slide);

      if (this.multilist && this._slides.length <= this.itemsPerSlide) {
        slide.active = true;
      }

      if (!this.multilist && this.isAnimated) {
        slide.isAnimated = true;
      }

      if (!this.multilist && this._slides.length === 1) {
        this._currentActiveSlide = undefined;
        this.activeSlide = 0;
        this.play();
      }

      if (this.multilist && this._slides.length > this.itemsPerSlide) {
        this.play();
      }
    }
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param {?} slide
     * @return {?}
     */

  }, {
    key: "removeSlide",
    value: function removeSlide(slide) {
      var _this2 = this;

      /** @type {?} */
      var remIndex = this._slides.indexOf(slide);

      if (this._currentActiveSlide === remIndex) {
        // removing of active slide

        /** @type {?} */
        var nextSlideIndex = void 0;

        if (this._slides.length > 1) {
          // if this slide last - will roll to first slide, if noWrap flag is
          // FALSE or to previous, if noWrap is TRUE in case, if this slide in
          // middle of collection, index of next slide is same to removed
          nextSlideIndex = !this.isLast(remIndex) ? remIndex : this.noWrap ? remIndex - 1 : 0;
        }

        this._slides.remove(remIndex); // prevents exception with changing some value after checking


        setTimeout(
        /**
        * @return {?}
        */
        function () {
          _this2._select(nextSlideIndex);
        }, 0);
      } else {
        this._slides.remove(remIndex);
        /** @type {?} */


        var currentSlideIndex = this.getCurrentSlideIndex();
        setTimeout(
        /**
        * @return {?}
        */
        function () {
          // after removing, need to actualize index of current active slide
          _this2._currentActiveSlide = currentSlideIndex;

          _this2.activeSlideChange.emit(_this2._currentActiveSlide);
        }, 0);
      }
    }
    /**
     * @param {?=} force
     * @return {?}
     */

  }, {
    key: "nextSlideFromInterval",
    value: function nextSlideFromInterval() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.move(Direction.NEXT, force);
    }
    /**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */

  }, {
    key: "nextSlide",
    value: function nextSlide() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.isPlaying) {
        this.restartTimer();
      }

      this.move(Direction.NEXT, force);
    }
    /**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */

  }, {
    key: "previousSlide",
    value: function previousSlide() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.isPlaying) {
        this.restartTimer();
      }

      this.move(Direction.PREV, force);
    }
    /**
     * @return {?}
     */

  }, {
    key: "getFirstVisibleIndex",
    value: function getFirstVisibleIndex() {
      return this.slides.findIndex(this.getActive);
    }
    /**
     * @return {?}
     */

  }, {
    key: "getLastVisibleIndex",
    value: function getLastVisibleIndex() {
      return findLastIndex(this.slides, this.getActive);
    }
    /**
     * @param {?} direction
     * @param {?=} force
     * @return {?}
     */

  }, {
    key: "move",
    value: function move(direction) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      /** @type {?} */
      var firstVisibleIndex = this.getFirstVisibleIndex();
      /** @type {?} */

      var lastVisibleIndex = this.getLastVisibleIndex();

      if (this.noWrap) {
        if (direction === Direction.NEXT && this.isLast(lastVisibleIndex) || direction === Direction.PREV && firstVisibleIndex === 0) {
          return;
        }
      }

      if (!this.multilist) {
        this.activeSlide = this.findNextSlideIndex(direction, force);
      } else {
        this.moveMultilist(direction);
      }
    }
    /**
     * Swith slides by enter, space and arrows keys
     * \@internal
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "keydownPress",
    value: function keydownPress(event) {
      // tslint:disable-next-line:deprecation
      if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
        this.nextSlide();
        event.preventDefault();
        return;
      } // tslint:disable-next-line:deprecation


      if (event.keyCode === 37 || event.key === 'LeftArrow') {
        this.previousSlide();
        return;
      } // tslint:disable-next-line:deprecation


      if (event.keyCode === 39 || event.key === 'RightArrow') {
        this.nextSlide();
        return;
      }
    }
    /**
     * Play on mouse leave
     * \@internal
     * @return {?}
     */

  }, {
    key: "onMouseLeave",
    value: function onMouseLeave() {
      if (!this.pauseOnFocus) {
        this.play();
      }
    }
    /**
     * Play on mouse up
     * \@internal
     * @return {?}
     */

  }, {
    key: "onMouseUp",
    value: function onMouseUp() {
      if (!this.pauseOnFocus) {
        this.play();
      }
    }
    /**
     * When slides on focus autoplay is stopped(optional)
     * \@internal
     * @return {?}
     */

  }, {
    key: "pauseFocusIn",
    value: function pauseFocusIn() {
      if (this.pauseOnFocus) {
        this.isPlaying = false;
        this.resetTimer();
      }
    }
    /**
     * When slides out of focus autoplay is started
     * \@internal
     * @return {?}
     */

  }, {
    key: "pauseFocusOut",
    value: function pauseFocusOut() {
      this.play();
    }
    /**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */

  }, {
    key: "selectSlide",
    value: function selectSlide(index) {
      if (this.isPlaying) {
        this.restartTimer();
      }

      if (!this.multilist) {
        this.activeSlide = this.indicatorsByChunk ? index * this.itemsPerSlide : index;
      } else {
        this.selectSlideRange(this.indicatorsByChunk ? index * this.itemsPerSlide : index);
      }
    }
    /**
     * Starts a auto changing of slides
     * @return {?}
     */

  }, {
    key: "play",
    value: function play() {
      if (!this.isPlaying) {
        this.isPlaying = true;
        this.restartTimer();
      }
    }
    /**
     * Stops a auto changing of slides
     * @return {?}
     */

  }, {
    key: "pause",
    value: function pause() {
      if (!this.noPause) {
        this.isPlaying = false;
        this.resetTimer();
      }
    }
    /**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */

  }, {
    key: "getCurrentSlideIndex",
    value: function getCurrentSlideIndex() {
      return this._slides.findIndex(this.getActive);
    }
    /**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */

  }, {
    key: "isLast",
    value: function isLast(index) {
      return index + 1 >= this._slides.length;
    }
    /**
     * Defines, whether the specified index is first in collection
     * @param {?} index
     * @return {?}
     */

  }, {
    key: "isFirst",
    value: function isFirst(index) {
      return index === 0;
    }
    /**
     * @return {?}
     */

  }, {
    key: "indicatorsSlides",
    value: function indicatorsSlides() {
      var _this3 = this;

      return this.slides.filter(
      /**
      * @param {?} slide
      * @param {?} index
      * @return {?}
      */
      function (slide, index) {
        return !_this3.indicatorsByChunk || index % _this3.itemsPerSlide === 0;
      });
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "selectInitialSlides",
    value: function selectInitialSlides() {
      /** @type {?} */
      var startIndex = this.startFromIndex <= this._slides.length ? this.startFromIndex : 0;
      this.hideSlides();

      if (this.singleSlideOffset) {
        this._slidesWithIndexes = this.mapSlidesAndIndexes();

        if (this._slides.length - startIndex < this.itemsPerSlide) {
          /** @type {?} */
          var slidesToAppend = this._slidesWithIndexes.slice(0, startIndex);

          this._slidesWithIndexes = [].concat(Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this._slidesWithIndexes), Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(slidesToAppend)).slice(slidesToAppend.length).slice(0, this.itemsPerSlide);
        } else {
          this._slidesWithIndexes = this._slidesWithIndexes.slice(startIndex, startIndex + this.itemsPerSlide);
        }

        this._slidesWithIndexes.forEach(
        /**
        * @param {?} slide
        * @return {?}
        */
        function (slide) {
          return slide.item.active = true;
        });

        this.makeSlidesConsistent(this._slidesWithIndexes);
      } else {
        this.selectRangeByNestedIndex(startIndex);
      }

      this.slideRangeChange.emit(this.getVisibleIndexes());
    }
    /**
     * Defines next slide index, depending of direction
     * @private
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */

  }, {
    key: "findNextSlideIndex",
    value: function findNextSlideIndex(direction, force) {
      /** @type {?} */
      var nextSlideIndex = 0;

      if (!force && this.isLast(this.activeSlide) && direction !== Direction.PREV && this.noWrap) {
        return undefined;
      }

      switch (direction) {
        case Direction.NEXT:
          // if this is last slide, not force, looping is disabled
          // and need to going forward - select current slide, as a next
          nextSlideIndex = !this.isLast(this._currentActiveSlide) ? this._currentActiveSlide + 1 : !force && this.noWrap ? this._currentActiveSlide : 0;
          break;

        case Direction.PREV:
          // if this is first slide, not force, looping is disabled
          // and need to going backward - select current slide, as a next
          nextSlideIndex = this._currentActiveSlide > 0 ? this._currentActiveSlide - 1 : !force && this.noWrap ? this._currentActiveSlide : this._slides.length - 1;
          break;

        default:
          throw new Error('Unknown direction');
      }

      return nextSlideIndex;
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "mapSlidesAndIndexes",
    value: function mapSlidesAndIndexes() {
      return this.slides.slice().map(
      /**
      * @param {?} slide
      * @param {?} index
      * @return {?}
      */
      function (slide, index) {
        return {
          index: index,
          item: slide
        };
      });
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */

  }, {
    key: "selectSlideRange",
    value: function selectSlideRange(index) {
      if (this.isIndexInRange(index)) {
        return;
      }

      this.hideSlides();

      if (!this.singleSlideOffset) {
        this.selectRangeByNestedIndex(index);
      } else {
        /** @type {?} */
        var startIndex = this.isIndexOnTheEdges(index) ? index : index - this.itemsPerSlide + 1;
        /** @type {?} */

        var endIndex = this.isIndexOnTheEdges(index) ? index + this.itemsPerSlide : index + 1;
        this._slidesWithIndexes = this.mapSlidesAndIndexes().slice(startIndex, endIndex);
        this.makeSlidesConsistent(this._slidesWithIndexes);

        this._slidesWithIndexes.forEach(
        /**
        * @param {?} slide
        * @return {?}
        */
        function (slide) {
          return slide.item.active = true;
        });
      }

      this.slideRangeChange.emit(this.getVisibleIndexes());
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */

  }, {
    key: "selectRangeByNestedIndex",
    value: function selectRangeByNestedIndex(index) {
      /** @type {?} */
      var selectedRange = this._chunkedSlides.map(
      /**
      * @param {?} slidesList
      * @param {?} i
      * @return {?}
      */
      function (slidesList, i) {
        return {
          index: i,
          list: slidesList
        };
      }).find(
      /**
      * @param {?} slidesList
      * @return {?}
      */
      function (slidesList) {
        return slidesList.list.find(
        /**
        * @param {?} slide
        * @return {?}
        */
        function (slide) {
          return slide.index === index;
        }) !== undefined;
      });

      this._currentVisibleSlidesIndex = selectedRange.index;

      this._chunkedSlides[selectedRange.index].forEach(
      /**
      * @param {?} slide
      * @return {?}
      */
      function (slide) {
        slide.item.active = true;
      });
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */

  }, {
    key: "isIndexOnTheEdges",
    value: function isIndexOnTheEdges(index) {
      return index + 1 - this.itemsPerSlide <= 0 || index + this.itemsPerSlide <= this._slides.length;
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */

  }, {
    key: "isIndexInRange",
    value: function isIndexInRange(index) {
      if (this.singleSlideOffset) {
        /** @type {?} */
        var visibleIndexes = this._slidesWithIndexes.map(
        /**
        * @param {?} slide
        * @return {?}
        */
        function (slide) {
          return slide.index;
        });

        return visibleIndexes.indexOf(index) >= 0;
      }

      return index <= this.getLastVisibleIndex() && index >= this.getFirstVisibleIndex();
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "hideSlides",
    value: function hideSlides() {
      this.slides.forEach(
      /**
      * @param {?} slide
      * @return {?}
      */
      function (slide) {
        return slide.active = false;
      });
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "isVisibleSlideListLast",
    value: function isVisibleSlideListLast() {
      return this._currentVisibleSlidesIndex === this._chunkedSlides.length - 1;
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "isVisibleSlideListFirst",
    value: function isVisibleSlideListFirst() {
      return this._currentVisibleSlidesIndex === 0;
    }
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */

  }, {
    key: "moveSliderByOneItem",
    value: function moveSliderByOneItem(direction) {
      /** @type {?} */
      var firstVisibleIndex;
      /** @type {?} */

      var lastVisibleIndex;
      /** @type {?} */

      var indexToHide;
      /** @type {?} */

      var indexToShow;

      if (this.noWrap) {
        firstVisibleIndex = this.getFirstVisibleIndex();
        lastVisibleIndex = this.getLastVisibleIndex();
        indexToHide = direction === Direction.NEXT ? firstVisibleIndex : lastVisibleIndex;
        indexToShow = direction !== Direction.NEXT ? firstVisibleIndex - 1 : !this.isLast(lastVisibleIndex) ? lastVisibleIndex + 1 : 0;
        this._slides.get(indexToHide).active = false;
        this._slides.get(indexToShow).active = true;
        /** @type {?} */

        var slidesToReorder = this.mapSlidesAndIndexes().filter(
        /**
        * @param {?} slide
        * @return {?}
        */
        function (slide) {
          return slide.item.active;
        });
        this.makeSlidesConsistent(slidesToReorder);
        this.slideRangeChange.emit(this.getVisibleIndexes());
      } else {
        /** @type {?} */
        var displayedIndex;
        firstVisibleIndex = this._slidesWithIndexes[0].index;
        lastVisibleIndex = this._slidesWithIndexes[this._slidesWithIndexes.length - 1].index;

        if (direction === Direction.NEXT) {
          this._slidesWithIndexes.shift();

          displayedIndex = this.isLast(lastVisibleIndex) ? 0 : lastVisibleIndex + 1;

          this._slidesWithIndexes.push({
            index: displayedIndex,
            item: this._slides.get(displayedIndex)
          });
        } else {
          this._slidesWithIndexes.pop();

          displayedIndex = this.isFirst(firstVisibleIndex) ? this._slides.length - 1 : firstVisibleIndex - 1;
          this._slidesWithIndexes = [{
            index: displayedIndex,
            item: this._slides.get(displayedIndex)
          }].concat(Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this._slidesWithIndexes));
        }

        this.hideSlides();

        this._slidesWithIndexes.forEach(
        /**
        * @param {?} slide
        * @return {?}
        */
        function (slide) {
          return slide.item.active = true;
        });

        this.makeSlidesConsistent(this._slidesWithIndexes);
        this.slideRangeChange.emit(this._slidesWithIndexes.map(
        /**
        * @param {?} slide
        * @return {?}
        */
        function (slide) {
          return slide.index;
        }));
      }
    }
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */

  }, {
    key: "moveMultilist",
    value: function moveMultilist(direction) {
      if (this.singleSlideOffset) {
        this.moveSliderByOneItem(direction);
      } else {
        this.hideSlides();

        if (this.noWrap) {
          this._currentVisibleSlidesIndex = direction === Direction.NEXT ? this._currentVisibleSlidesIndex + 1 : this._currentVisibleSlidesIndex - 1;
        } else {
          if (direction === Direction.NEXT) {
            this._currentVisibleSlidesIndex = this.isVisibleSlideListLast() ? 0 : this._currentVisibleSlidesIndex + 1;
          } else {
            this._currentVisibleSlidesIndex = this.isVisibleSlideListFirst() ? this._chunkedSlides.length - 1 : this._currentVisibleSlidesIndex - 1;
          }
        }

        this._chunkedSlides[this._currentVisibleSlidesIndex].forEach(
        /**
        * @param {?} slide
        * @return {?}
        */
        function (slide) {
          return slide.item.active = true;
        });

        this.slideRangeChange.emit(this.getVisibleIndexes());
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "getVisibleIndexes",
    value: function getVisibleIndexes() {
      if (!this.singleSlideOffset) {
        return this._chunkedSlides[this._currentVisibleSlidesIndex].map(
        /**
        * @param {?} slide
        * @return {?}
        */
        function (slide) {
          return slide.index;
        });
      } else {
        return this._slidesWithIndexes.map(
        /**
        * @param {?} slide
        * @return {?}
        */
        function (slide) {
          return slide.index;
        });
      }
    }
    /**
     * Sets a slide, which specified through index, as active
     * @private
     * @param {?} index
     * @return {?}
     */

  }, {
    key: "_select",
    value: function _select(index) {
      if (isNaN(index)) {
        this.pause();
        return;
      }

      if (!this.multilist) {
        /** @type {?} */
        var currentSlide = this._slides.get(this._currentActiveSlide);

        if (currentSlide) {
          currentSlide.active = false;
        }
      }
      /** @type {?} */


      var nextSlide = this._slides.get(index);

      if (nextSlide) {
        this._currentActiveSlide = index;
        nextSlide.active = true;
        this.activeSlide = index;
        this.activeSlideChange.emit(index);
      }
    }
    /**
     * Starts loop of auto changing of slides
     * @private
     * @return {?}
     */

  }, {
    key: "restartTimer",
    value: function restartTimer() {
      var _this4 = this;

      this.resetTimer();
      /** @type {?} */

      var interval = +this.interval;

      if (!isNaN(interval) && interval > 0) {
        this.currentInterval = this.ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        function () {
          return setInterval(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var nInterval = +_this4.interval;

            _this4.ngZone.run(
            /**
            * @return {?}
            */
            function () {
              if (_this4.isPlaying && !isNaN(_this4.interval) && nInterval > 0 && _this4.slides.length) {
                _this4.nextSlideFromInterval();
              } else {
                _this4.pause();
              }
            });
          }, interval);
        });
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "resetTimer",

    /**
     * Stops loop of auto changing of slides
     * @private
     * @return {?}
     */
    value: function resetTimer() {
      if (this.currentInterval) {
        clearInterval(this.currentInterval);
        this.currentInterval = void 0;
      }
    }
  }, {
    key: "activeSlide",
    set: function set(index) {
      if (this.multilist) {
        return;
      }

      if (this._slides.length && index !== this._currentActiveSlide) {
        this._select(index);
      }
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._currentActiveSlide;
    }
    /**
     * Delay of item cycling in milliseconds. If false, carousel won't cycle
     * automatically.
     * @return {?}
     */

  }, {
    key: "interval",
    get: function get() {
      return this._interval;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ,
    set: function set(value) {
      this._interval = value;
      this.restartTimer();
    }
    /**
     * @return {?}
     */

  }, {
    key: "slides",
    get: function get() {
      return this._slides.toArray();
    }
    /**
     * @return {?}
     */

  }, {
    key: "isBs4",
    get: function get() {
      return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_4__["isBs3"])();
    }
  }, {
    key: "multilist",
    get: function get() {
      return this.itemsPerSlide > 1;
    }
  }]);

  return CarouselComponent;
}();

CarouselComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
  args: [{
    selector: 'carousel',
    template: "<div (mouseenter)=\"pause()\"\n     (mouseleave)=\"onMouseLeave()\"\n     (mouseup)=\"onMouseUp()\"\n     (keydown)=\"keydownPress($event)\"\n     (focusin)=\"pauseFocusIn()\"\n     (focusout)=\"pauseFocusOut()\"\n     class=\"carousel slide\" tabindex=\"0\">\n  <ol class=\"carousel-indicators\" *ngIf=\"showIndicators && slides.length > 1\">\n    <li *ngFor=\"let slide of indicatorsSlides(); let i = index;\"\n        [class.active]=\"slide.active === true\"\n        (click)=\"selectSlide(i)\">\n    </li>\n  </ol>\n  <div class=\"carousel-inner\" [ngStyle]=\"{'display': multilist ? 'flex' : 'block'}\">\n    <ng-content></ng-content>\n  </div>\n  <a class=\"left carousel-control carousel-control-prev\"\n     [class.disabled]=\"activeSlide === 0 && noWrap\"\n     (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\"\n      tabindex=\"0\" role=\"button\">\n    <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control carousel-control-next\"\n     [class.disabled]=\"isLast(activeSlide) && noWrap\"\n     (click)=\"nextSlide()\" *ngIf=\"slides.length > 1\"\n     tabindex=\"0\" role=\"button\">\n    <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"
  }]
}];
/** @nocollapse */

CarouselComponent.ctorParameters = function () {
  return [{
    type: CarouselConfig
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
  }];
};

CarouselComponent.propDecorators = {
  noWrap: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  noPause: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  showIndicators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  pauseOnFocus: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  indicatorsByChunk: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  itemsPerSlide: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  singleSlideOffset: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  isAnimated: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  activeSlideChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  slideRangeChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  activeSlide: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  startFromIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  interval: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }]
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var SlideComponent = /*#__PURE__*/function () {
  /**
   * @param {?} carousel
   */
  function SlideComponent(carousel) {
    Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SlideComponent);

    this.itemWidth = '100%';
    this.order = 0;
    /**
     * Wraps element by appropriate CSS classes
     */

    this.addClass = true;
    this.carousel = carousel;
  }
  /**
   * Fires changes in container collection after adding a new slide instance
   * @return {?}
   */


  Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SlideComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.carousel.addSlide(this);
      this.itemWidth = "".concat(100 / this.carousel.itemsPerSlide, "%");
    }
    /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.carousel.removeSlide(this);
    }
  }]);

  return SlideComponent;
}();

SlideComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
  args: [{
    selector: 'slide',
    template: "\n    <div [class.active]=\"active\" class=\"item\">\n      <ng-content></ng-content>\n    </div>\n  ",
    host: {
      '[attr.aria-hidden]': '!active'
    },
    styles: ["\n    :host.carousel-animation {\n       transition: opacity 0.6s ease, visibility 0.6s ease;\n       float: left;\n    }\n    :host.carousel-animation.active {\n      opacity: 1;\n      visibility: visible;\n    }\n    :host.carousel-animation:not(.active) {\n      display: block;\n      position: absolute;\n      opacity: 0;\n      visibility: hidden;\n    }\n  "]
  }]
}];
/** @nocollapse */

SlideComponent.ctorParameters = function () {
  return [{
    type: CarouselComponent
  }];
};

SlideComponent.propDecorators = {
  active: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
    args: ['class.active']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  itemWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
    args: ['style.width']
  }],
  order: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
    args: ['style.order']
  }],
  isAnimated: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
    args: ['class.carousel-animation']
  }],
  addClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
    args: ['class.item']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
    args: ['class.carousel-item']
  }]
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var CarouselModule = /*#__PURE__*/function () {
  function CarouselModule() {
    Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CarouselModule);
  }

  Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CarouselModule, null, [{
    key: "forRoot",

    /**
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: CarouselModule,
        providers: []
      };
    }
  }]);

  return CarouselModule;
}();

CarouselModule.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
  args: [{
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
    declarations: [SlideComponent, CarouselComponent],
    exports: [SlideComponent, CarouselComponent],
    providers: [CarouselConfig]
  }]
}];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



/***/ }),

/***/ "./node_modules/ngx-bootstrap/collapse/fesm2015/ngx-bootstrap-collapse.js":
/*!********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/collapse/fesm2015/ngx-bootstrap-collapse.js ***!
  \********************************************************************************/
/*! exports provided: CollapseDirective, CollapseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseDirective", function() { return CollapseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseModule", function() { return CollapseModule; });
/* harmony import */ var _home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */

var COLLAPSE_ANIMATION_TIMING = '400ms cubic-bezier(0.4,0.0,0.2,1)';
/** @type {?} */

var expandAnimation = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
  height: 0,
  visibility: 'hidden'
}), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(COLLAPSE_ANIMATION_TIMING, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
  height: '*',
  visibility: 'visible'
}))];
/** @type {?} */

var collapseAnimation = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
  height: '*',
  visibility: 'visible'
}), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(COLLAPSE_ANIMATION_TIMING, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
  height: 0,
  visibility: 'hidden'
}))];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var CollapseDirective = /*#__PURE__*/function () {
  /**
   * @param {?} _el
   * @param {?} _renderer
   * @param {?} _builder
   */
  function CollapseDirective(_el, _renderer, _builder) {
    Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CollapseDirective);

    this._el = _el;
    this._renderer = _renderer;
    /**
     * This event fires as soon as content collapses
     */

    this.collapsed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    /**
     * This event fires when collapsing is started
     */

    this.collapses = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    /**
     * This event fires as soon as content becomes visible
     */

    this.expanded = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    /**
     * This event fires when expansion is started
     */

    this.expands = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](); // shown

    this.isExpanded = true;
    this.collapseNewValue = true; // hidden

    this.isCollapsed = false; // stale state

    this.isCollapse = true; // animation state

    this.isCollapsing = false;
    /**
     * turn on/off animation
     */

    this.isAnimated = false;
    this._display = 'block';
    this._stylesLoaded = false;
    this._COLLAPSE_ACTION_NAME = 'collapse';
    this._EXPAND_ACTION_NAME = 'expand';
    this._factoryCollapseAnimation = _builder.build(collapseAnimation);
    this._factoryExpandAnimation = _builder.build(expandAnimation);
  }
  /**
   * @param {?} value
   * @return {?}
   */


  Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CollapseDirective, [{
    key: "ngAfterViewChecked",

    /**
     * @return {?}
     */
    value: function ngAfterViewChecked() {
      this._stylesLoaded = true;

      if (!this._player || !this._isAnimationDone) {
        return;
      }

      this._player.reset();

      this._renderer.setStyle(this._el.nativeElement, 'height', '*');
    }
    /**
     * allows to manually toggle content visibility
     * @return {?}
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this.isExpanded) {
        this.hide();
      } else {
        this.show();
      }
    }
    /**
     * allows to manually hide content
     * @return {?}
     */

  }, {
    key: "hide",
    value: function hide() {
      var _this = this;

      this.isCollapsing = true;
      this.isExpanded = false;
      this.isCollapsed = true;
      this.isCollapsing = false;
      this.collapses.emit(this);
      this._isAnimationDone = false;
      this.animationRun(this.isAnimated, this._COLLAPSE_ACTION_NAME)(
      /**
      * @return {?}
      */
      function () {
        _this._isAnimationDone = true;

        if (_this.collapseNewValue !== _this.isCollapsed && _this.isAnimated) {
          _this.show();

          return;
        }

        _this.collapsed.emit(_this);

        _this._renderer.setStyle(_this._el.nativeElement, 'display', 'none');
      });
    }
    /**
     * allows to manually show collapsed content
     * @return {?}
     */

  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      this._renderer.setStyle(this._el.nativeElement, 'display', this._display);

      this.isCollapsing = true;
      this.isExpanded = true;
      this.isCollapsed = false;
      this.isCollapsing = false;
      this.expands.emit(this);
      this._isAnimationDone = false;
      this.animationRun(this.isAnimated, this._EXPAND_ACTION_NAME)(
      /**
      * @return {?}
      */
      function () {
        _this2._isAnimationDone = true;

        if (_this2.collapseNewValue !== _this2.isCollapsed && _this2.isAnimated) {
          _this2.hide();

          return;
        }

        _this2.expanded.emit(_this2);

        _this2._renderer.removeStyle(_this2._el.nativeElement, 'overflow');
      });
    }
    /**
     * @param {?} isAnimated
     * @param {?} action
     * @return {?}
     */

  }, {
    key: "animationRun",
    value: function animationRun(isAnimated, action) {
      var _this3 = this;

      if (!isAnimated || !this._stylesLoaded) {
        return (
          /**
          * @param {?} callback
          * @return {?}
          */
          function (callback) {
            return callback();
          }
        );
      }

      this._renderer.setStyle(this._el.nativeElement, 'overflow', 'hidden');

      this._renderer.addClass(this._el.nativeElement, 'collapse');
      /** @type {?} */


      var factoryAnimation = action === this._EXPAND_ACTION_NAME ? this._factoryExpandAnimation : this._factoryCollapseAnimation;

      if (this._player) {
        this._player.destroy();
      }

      this._player = factoryAnimation.create(this._el.nativeElement);

      this._player.play();

      return (
        /**
        * @param {?} callback
        * @return {?}
        */
        function (callback) {
          return _this3._player.onDone(callback);
        }
      );
    }
  }, {
    key: "display",
    set: function set(value) {
      if (!this.isAnimated) {
        this._renderer.setStyle(this._el.nativeElement, 'display', value);

        return;
      }

      this._display = value;

      if (value === 'none') {
        this.hide();
        return;
      }

      this.show();
    }
    /**
     * A flag indicating visibility of content (shown or hidden)
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "collapse",
    set: function set(value) {
      this.collapseNewValue = value;

      if (!this._player || this._isAnimationDone) {
        this.isExpanded = value;
        this.toggle();
      }
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this.isExpanded;
    }
  }]);

  return CollapseDirective;
}();

CollapseDirective.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
  args: [{
    selector: '[collapse]',
    exportAs: 'bs-collapse',
    host: {
      '[class.collapse]': 'true'
    }
  }]
}];
/** @nocollapse */

CollapseDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
  }, {
    type: _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationBuilder"]
  }];
};

CollapseDirective.propDecorators = {
  collapsed: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  collapses: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  expanded: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  expands: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  isExpanded: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
    args: ['class.in']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
    args: ['class.show']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
    args: ['attr.aria-expanded']
  }],
  isCollapsed: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
    args: ['attr.aria-hidden']
  }],
  isCollapse: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
    args: ['class.collapse']
  }],
  isCollapsing: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
    args: ['class.collapsing']
  }],
  display: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  isAnimated: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  collapse: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }]
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var CollapseModule = /*#__PURE__*/function () {
  function CollapseModule() {
    Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CollapseModule);
  }

  Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CollapseModule, null, [{
    key: "forRoot",

    /**
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: CollapseModule,
        providers: []
      };
    }
  }]);

  return CollapseModule;
}();

CollapseModule.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
  args: [{
    declarations: [CollapseDirective],
    exports: [CollapseDirective]
  }]
}];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



/***/ }),

/***/ "./node_modules/ngx-bootstrap/pagination/fesm2015/ngx-bootstrap-pagination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/pagination/fesm2015/ngx-bootstrap-pagination.js ***!
  \************************************************************************************/
/*! exports provided: PagerComponent, PaginationComponent, PaginationConfig, PaginationModule, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return PagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationConfig", function() { return PaginationConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return PaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return PAGER_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return PAGINATION_CONTROL_VALUE_ACCESSOR; });
/* harmony import */ var _home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Provides default values for Pagination and pager components
 */

var PaginationConfig = function PaginationConfig() {
  Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PaginationConfig);

  this.main = {
    maxSize: void 0,
    itemsPerPage: 10,
    boundaryLinks: false,
    directionLinks: true,
    firstText: 'First',
    previousText: 'Previous',
    nextText: 'Next',
    lastText: 'Last',
    pageBtnClass: '',
    rotate: true
  };
  this.pager = {
    itemsPerPage: 15,
    previousText: '« Previous',
    nextText: 'Next »',
    pageBtnClass: '',
    align: true
  };
};

PaginationConfig.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
}];

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */


var PAGER_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],

  /* tslint:disable-next-line: no-use-before-declare */
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
  /**
  * @return {?}
  */
  function () {
    return PagerComponent;
  }),
  multi: true
};

var PagerComponent = /*#__PURE__*/function () {
  /**
   * @param {?} elementRef
   * @param {?} paginationConfig
   * @param {?} changeDetection
   */
  function PagerComponent(elementRef, paginationConfig, changeDetection) {
    Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PagerComponent);

    this.elementRef = elementRef;
    this.changeDetection = changeDetection;
    /**
     * fired when total pages count changes, $event:number equals to total pages count
     */

    this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    /**
     * fired when page was changed, $event:{page, itemsPerPage} equals to
     * object with current page index and number of items per page
     */

    this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    this.onChange = Function.prototype;
    this.onTouched = Function.prototype;
    this.inited = false;
    this._page = 1;
    this.elementRef = elementRef;

    if (!this.config) {
      this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
    }
  }
  /**
   * maximum number of items per page. If value less than 1 will display all items on one page
   * @return {?}
   */


  Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(PagerComponent, [{
    key: "configureOptions",

    /**
     * @param {?} config
     * @return {?}
     */
    value: function configureOptions(config) {
      this.config = Object.assign({}, config);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      if (typeof window !== 'undefined') {
        this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
      } // watch for maxSize


      this.maxSize = typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
      this.rotate = typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
      this.boundaryLinks = typeof this.boundaryLinks !== 'undefined' ? this.boundaryLinks : this.config.boundaryLinks;
      this.directionLinks = typeof this.directionLinks !== 'undefined' ? this.directionLinks : this.config.directionLinks;
      this.pageBtnClass = typeof this.pageBtnClass !== 'undefined' ? this.pageBtnClass : this.config.pageBtnClass; // base class

      this.itemsPerPage = typeof this.itemsPerPage !== 'undefined' ? this.itemsPerPage : this.config.itemsPerPage;
      this.totalPages = this.calculateTotalPages(); // this class

      this.pages = this.getPages(this.page, this.totalPages);
      this.inited = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      this.page = value;
      this.pages = this.getPages(this.page, this.totalPages);
    }
    /**
     * @param {?} key
     * @return {?}
     */

  }, {
    key: "getText",
    value: function getText(key) {
      // tslint:disable-next-line:no-any
      return (
        /** @type {?} */
        this["".concat(key, "Text")] ||
        /** @type {?} */
        this.config["".concat(key, "Text")]
      );
    }
    /**
     * @return {?}
     */

  }, {
    key: "noPrevious",
    value: function noPrevious() {
      return this.page === 1;
    }
    /**
     * @return {?}
     */

  }, {
    key: "noNext",
    value: function noNext() {
      return this.page === this.totalPages;
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */

  }, {
    key: "selectPage",
    value: function selectPage(page, event) {
      if (event) {
        event.preventDefault();
      }

      if (!this.disabled) {
        if (event && event.target) {
          // tslint:disable-next-line:no-any

          /** @type {?} */
          var target = event.target;
          target.blur();
        }

        this.writeValue(page);
        this.onChange(this.page);
      }
    } // Create page object used in template

    /**
     * @protected
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */

  }, {
    key: "makePage",
    value: function makePage(num, text, active) {
      return {
        text: text,
        number: num,
        active: active
      };
    }
    /**
     * @protected
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */

  }, {
    key: "getPages",
    value: function getPages(currentPage, totalPages) {
      /** @type {?} */
      var pages = []; // Default page limits

      /** @type {?} */

      var startPage = 1;
      /** @type {?} */

      var endPage = totalPages;
      /** @type {?} */

      var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages; // recompute if maxSize

      if (isMaxSized) {
        if (this.rotate) {
          // Current page is displayed in the middle of the visible ones
          startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
          endPage = startPage + this.maxSize - 1; // Adjust if limit is exceeded

          if (endPage > totalPages) {
            endPage = totalPages;
            startPage = endPage - this.maxSize + 1;
          }
        } else {
          // Visible pages are paginated with maxSize
          startPage = (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1; // Adjust last page if limit is exceeded

          endPage = Math.min(startPage + this.maxSize - 1, totalPages);
        }
      } // Add page number links


      for (var num = startPage; num <= endPage; num++) {
        /** @type {?} */
        var page = this.makePage(num, num.toString(), num === currentPage);
        pages.push(page);
      } // Add links to move between page sets


      if (isMaxSized && !this.rotate) {
        if (startPage > 1) {
          /** @type {?} */
          var previousPageSet = this.makePage(startPage - 1, '...', false);
          pages.unshift(previousPageSet);
        }

        if (endPage < totalPages) {
          /** @type {?} */
          var nextPageSet = this.makePage(endPage + 1, '...', false);
          pages.push(nextPageSet);
        }
      }

      return pages;
    } // base class

    /**
     * @protected
     * @return {?}
     */

  }, {
    key: "calculateTotalPages",
    value: function calculateTotalPages() {
      /** @type {?} */
      var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
      return Math.max(totalPages || 0, 1);
    }
  }, {
    key: "itemsPerPage",
    get: function get() {
      return this._itemsPerPage;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    ,
    set: function set(v) {
      this._itemsPerPage = v;
      this.totalPages = this.calculateTotalPages();
    }
    /**
     * total number of items in all pages
     * @return {?}
     */

  }, {
    key: "totalItems",
    get: function get() {
      return this._totalItems;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    ,
    set: function set(v) {
      this._totalItems = v;
      this.totalPages = this.calculateTotalPages();
    }
    /**
     * @return {?}
     */

  }, {
    key: "totalPages",
    get: function get() {
      return this._totalPages;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    ,
    set: function set(v) {
      this._totalPages = v;
      this.numPages.emit(v);

      if (this.inited) {
        this.selectPage(this.page);
      }
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "page",
    set: function set(value) {
      /** @type {?} */
      var _previous = this._page;
      this._page = value > this.totalPages ? this.totalPages : value || 1;
      this.changeDetection.markForCheck();

      if (_previous === this._page || typeof _previous === 'undefined') {
        return;
      }

      this.pageChanged.emit({
        page: this._page,
        itemsPerPage: this.itemsPerPage
      });
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._page;
    }
  }]);

  return PagerComponent;
}();

PagerComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
  args: [{
    selector: 'pager',
    template: "<ul class=\"pager\">\n  <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\"\n      [ngClass]=\"{'pull-left': align, 'float-left': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a>\n  </li>\n  <li [class.disabled]=\"noNext()\" [class.next]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a>\n  </li>\n</ul>\n",
    providers: [PAGER_CONTROL_VALUE_ACCESSOR]
  }]
}];
/** @nocollapse */

PagerComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
  }, {
    type: PaginationConfig
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
  }];
};

PagerComponent.propDecorators = {
  align: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  maxSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  boundaryLinks: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  directionLinks: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  firstText: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  previousText: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  nextText: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  lastText: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  rotate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  pageBtnClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  numPages: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  pageChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  itemsPerPage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  totalItems: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }]
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @record
 */


function PageChangedEvent() {}

if (false) {}
/** @type {?} */


var PAGINATION_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],

  /* tslint:disable-next-line: no-use-before-declare */
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
  /**
  * @return {?}
  */
  function () {
    return PaginationComponent;
  }),
  multi: true
};

var PaginationComponent = /*#__PURE__*/function () {
  /**
   * @param {?} elementRef
   * @param {?} paginationConfig
   * @param {?} changeDetection
   */
  function PaginationComponent(elementRef, paginationConfig, changeDetection) {
    Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PaginationComponent);

    this.elementRef = elementRef;
    this.changeDetection = changeDetection;
    /**
     * fired when total pages count changes, $event:number equals to total pages count
     */

    this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    /**
     * fired when page was changed, $event:{page, itemsPerPage} equals to object
     * with current page index and number of items per page
     */

    this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    this.onChange = Function.prototype;
    this.onTouched = Function.prototype;
    this.inited = false;
    this._page = 1;
    this.elementRef = elementRef;

    if (!this.config) {
      this.configureOptions(paginationConfig.main);
    }
  }
  /**
   * maximum number of items per page. If value less than 1 will display all items on one page
   * @return {?}
   */


  Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(PaginationComponent, [{
    key: "configureOptions",

    /**
     * @param {?} config
     * @return {?}
     */
    value: function configureOptions(config) {
      this.config = Object.assign({}, config);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      if (typeof window !== 'undefined') {
        this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
      } // watch for maxSize


      this.maxSize = typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
      this.rotate = typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
      this.boundaryLinks = typeof this.boundaryLinks !== 'undefined' ? this.boundaryLinks : this.config.boundaryLinks;
      this.directionLinks = typeof this.directionLinks !== 'undefined' ? this.directionLinks : this.config.directionLinks;
      this.pageBtnClass = typeof this.pageBtnClass !== 'undefined' ? this.pageBtnClass : this.config.pageBtnClass; // base class

      this.itemsPerPage = typeof this.itemsPerPage !== 'undefined' ? this.itemsPerPage : this.config.itemsPerPage;
      this.totalPages = this.calculateTotalPages(); // this class

      this.pages = this.getPages(this.page, this.totalPages);
      this.inited = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      this.page = value;
      this.pages = this.getPages(this.page, this.totalPages);
    }
    /**
     * @param {?} key
     * @return {?}
     */

  }, {
    key: "getText",
    value: function getText(key) {
      // tslint:disable-next-line:no-any
      return (
        /** @type {?} */
        this["".concat(key, "Text")] ||
        /** @type {?} */
        this.config["".concat(key, "Text")]
      );
    }
    /**
     * @return {?}
     */

  }, {
    key: "noPrevious",
    value: function noPrevious() {
      return this.page === 1;
    }
    /**
     * @return {?}
     */

  }, {
    key: "noNext",
    value: function noNext() {
      return this.page === this.totalPages;
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */

  }, {
    key: "selectPage",
    value: function selectPage(page, event) {
      if (event) {
        event.preventDefault();
      }

      if (!this.disabled) {
        if (event && event.target) {
          // tslint:disable-next-line:no-any

          /** @type {?} */
          var target = event.target;
          target.blur();
        }

        this.writeValue(page);
        this.onChange(this.page);
      }
    } // Create page object used in template

    /**
     * @protected
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */

  }, {
    key: "makePage",
    value: function makePage(num, text, active) {
      return {
        text: text,
        number: num,
        active: active
      };
    }
    /**
     * @protected
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */

  }, {
    key: "getPages",
    value: function getPages(currentPage, totalPages) {
      /** @type {?} */
      var pages = []; // Default page limits

      /** @type {?} */

      var startPage = 1;
      /** @type {?} */

      var endPage = totalPages;
      /** @type {?} */

      var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages; // recompute if maxSize

      if (isMaxSized) {
        if (this.rotate) {
          // Current page is displayed in the middle of the visible ones
          startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
          endPage = startPage + this.maxSize - 1; // Adjust if limit is exceeded

          if (endPage > totalPages) {
            endPage = totalPages;
            startPage = endPage - this.maxSize + 1;
          }
        } else {
          // Visible pages are paginated with maxSize
          startPage = (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1; // Adjust last page if limit is exceeded

          endPage = Math.min(startPage + this.maxSize - 1, totalPages);
        }
      } // Add page number links


      for (var num = startPage; num <= endPage; num++) {
        /** @type {?} */
        var page = this.makePage(num, num.toString(), num === currentPage);
        pages.push(page);
      } // Add links to move between page sets


      if (isMaxSized && !this.rotate) {
        if (startPage > 1) {
          /** @type {?} */
          var previousPageSet = this.makePage(startPage - 1, '...', false);
          pages.unshift(previousPageSet);
        }

        if (endPage < totalPages) {
          /** @type {?} */
          var nextPageSet = this.makePage(endPage + 1, '...', false);
          pages.push(nextPageSet);
        }
      }

      return pages;
    } // base class

    /**
     * @protected
     * @return {?}
     */

  }, {
    key: "calculateTotalPages",
    value: function calculateTotalPages() {
      /** @type {?} */
      var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
      return Math.max(totalPages || 0, 1);
    }
  }, {
    key: "itemsPerPage",
    get: function get() {
      return this._itemsPerPage;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    ,
    set: function set(v) {
      this._itemsPerPage = v;
      this.totalPages = this.calculateTotalPages();
    }
    /**
     * total number of items in all pages
     * @return {?}
     */

  }, {
    key: "totalItems",
    get: function get() {
      return this._totalItems;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    ,
    set: function set(v) {
      this._totalItems = v;
      this.totalPages = this.calculateTotalPages();
    }
    /**
     * @return {?}
     */

  }, {
    key: "totalPages",
    get: function get() {
      return this._totalPages;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    ,
    set: function set(v) {
      this._totalPages = v;
      this.numPages.emit(v);

      if (this.inited) {
        this.selectPage(this.page);
      }
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "page",
    set: function set(value) {
      /** @type {?} */
      var _previous = this._page;
      this._page = value > this.totalPages ? this.totalPages : value || 1;
      this.changeDetection.markForCheck();

      if (_previous === this._page || typeof _previous === 'undefined') {
        return;
      }

      this.pageChanged.emit({
        page: this._page,
        itemsPerPage: this.itemsPerPage
      });
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._page;
    }
  }]);

  return PaginationComponent;
}();

PaginationComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
  args: [{
    selector: 'pagination',
    template: "<ul class=\"pagination\" [ngClass]=\"classMap\">\n  <li class=\"pagination-first page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noPrevious() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customFirstTemplate || defaultFirstTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-prev page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noPrevious() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customPreviousTemplate || defaultPreviousTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li *ngFor=\"let pg of pages\"\n      [class.active]=\"pg.active\"\n      [class.disabled]=\"disabled && !pg.active\"\n      class=\"pagination-page page-item\">\n    <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customPageTemplate || defaultPageTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: disabled, $implicit: pg, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-next page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noNext() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customNextTemplate || defaultNextTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-last page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noNext() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customLastTemplate || defaultLastTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n</ul>\n\n<ng-template #defaultPageTemplate let-page>{{ page.text }}</ng-template>\n\n<ng-template #defaultNextTemplate>{{ getText('next') }}</ng-template>\n\n<ng-template #defaultPreviousTemplate>{{ getText('previous') }}</ng-template>\n\n<ng-template #defaultFirstTemplate>{{ getText('first') }}</ng-template>\n\n<ng-template #defaultLastTemplate>{{ getText('last') }}</ng-template>\n",
    providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
  }]
}];
/** @nocollapse */

PaginationComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
  }, {
    type: PaginationConfig
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
  }];
};

PaginationComponent.propDecorators = {
  align: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  maxSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  boundaryLinks: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  directionLinks: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  firstText: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  previousText: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  nextText: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  lastText: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  rotate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  pageBtnClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  customPageTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  customNextTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  customPreviousTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  customFirstTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  customLastTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  numPages: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  pageChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  itemsPerPage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  totalItems: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }]
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var PaginationModule = /*#__PURE__*/function () {
  function PaginationModule() {
    Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PaginationModule);
  }

  Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(PaginationModule, null, [{
    key: "forRoot",

    /**
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: PaginationModule,
        providers: [PaginationConfig]
      };
    }
  }]);

  return PaginationModule;
}();

PaginationModule.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
  args: [{
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
    declarations: [PagerComponent, PaginationComponent],
    exports: [PagerComponent, PaginationComponent]
  }]
}];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



/***/ }),

/***/ "./node_modules/ngx-bootstrap/popover/fesm2015/ngx-bootstrap-popover.js":
/*!******************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/popover/fesm2015/ngx-bootstrap-popover.js ***!
  \******************************************************************************/
/*! exports provided: PopoverConfig, PopoverContainerComponent, PopoverDirective, PopoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverConfig", function() { return PopoverConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverContainerComponent", function() { return PopoverContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverDirective", function() { return PopoverDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return PopoverModule; });
/* harmony import */ var _home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */

var PopoverConfig = function PopoverConfig() {
  Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PopoverConfig);

  /**
   * sets disable adaptive position
   */
  this.adaptivePosition = true;
  /**
   * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
   */

  this.placement = 'top';
  /**
   * Specifies events that should trigger. Supports a space separated list of
   * event names.
   */

  this.triggers = 'click';
  this.outsideClick = false;
  /**
   * delay before showing the tooltip
   */

  this.delay = 0;
};

PopoverConfig.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
}];

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var PopoverContainerComponent = /*#__PURE__*/function () {
  /**
   * @param {?} config
   */
  function PopoverContainerComponent(config) {
    Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PopoverContainerComponent);

    Object.assign(this, config);
  }
  /**
   * @return {?}
   */


  Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(PopoverContainerComponent, [{
    key: "isBs3",
    get: function get() {
      return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_4__["isBs3"])();
    }
  }]);

  return PopoverContainerComponent;
}();

PopoverContainerComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
  args: [{
    selector: 'popover-container',
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
    // tslint:disable-next-line
    host: {
      '[class]': '"popover in popover-" + placement + " " + "bs-popover-" + placement + " " + placement + " " + containerClass',
      '[class.show]': '!isBs3',
      '[class.bs3]': 'isBs3',
      role: 'tooltip',
      style: 'display:block;'
    },
    template: "<div class=\"popover-arrow arrow\"></div>\n<h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3>\n<div class=\"popover-content popover-body\">\n  <ng-content></ng-content>\n</div>\n",
    styles: ["\n    :host.bs3.popover-top {\n      margin-bottom: 10px;\n    }\n    :host.bs3.popover.top>.arrow {\n      margin-left: -2px;\n    }\n    :host.bs3.popover.top {\n      margin-bottom: 10px;\n    }\n    :host.popover.bottom>.arrow {\n      margin-left: -4px;\n    }\n    :host.bs3.bs-popover-left {\n      margin-right: .5rem;\n    }\n    :host.bs3.bs-popover-right .arrow, :host.bs3.bs-popover-left .arrow{\n      margin: .3rem 0;\n    }\n    "]
  }]
}];
/** @nocollapse */

PopoverContainerComponent.ctorParameters = function () {
  return [{
    type: PopoverConfig
  }];
};

PopoverContainerComponent.propDecorators = {
  placement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  title: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }]
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * A lightweight, extensible directive for fancy popover creation.
 */


var PopoverDirective = /*#__PURE__*/function () {
  /**
   * @param {?} _config
   * @param {?} _elementRef
   * @param {?} _renderer
   * @param {?} _viewContainerRef
   * @param {?} cis
   * @param {?} _positionService
   */
  function PopoverDirective(_config, _elementRef, _renderer, _viewContainerRef, cis, _positionService) {
    Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PopoverDirective);

    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this._positionService = _positionService;
    /**
     * Close popover on outside click
     */

    this.outsideClick = false;
    /**
     * Css class for popover container
     */

    this.containerClass = '';
    this._isInited = false;
    this._popover = cis.createLoader(_elementRef, _viewContainerRef, _renderer).provide({
      provide: PopoverConfig,
      useValue: _config
    });
    Object.assign(this, _config);
    this.onShown = this._popover.onShown;
    this.onHidden = this._popover.onHidden; // fix: no focus on button on Mac OS #1795

    if (typeof window !== 'undefined') {
      _elementRef.nativeElement.addEventListener('click',
      /**
      * @return {?}
      */
      function () {
        try {
          _elementRef.nativeElement.focus();
        } catch (err) {
          return;
        }
      });
    }
  }
  /**
   * Returns whether or not the popover is currently being shown
   * @return {?}
   */


  Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(PopoverDirective, [{
    key: "show",

    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    value: function show() {
      var _this = this;

      if (this._popover.isShown || !this.popover || this._delayTimeoutId) {
        return;
      }

      this._positionService.setOptions({
        modifiers: {
          flip: {
            enabled: this.adaptivePosition
          },
          preventOverflow: {
            enabled: this.adaptivePosition
          }
        }
      });
      /** @type {?} */


      var showPopover =
      /**
      * @return {?}
      */
      function showPopover() {
        if (_this._delayTimeoutId) {
          _this._delayTimeoutId = undefined;
        }

        _this._popover.attach(PopoverContainerComponent).to(_this.container).position({
          attachment: _this.placement
        }).show({
          content: _this.popover,
          context: _this.popoverContext,
          placement: _this.placement,
          title: _this.popoverTitle,
          containerClass: _this.containerClass
        });

        if (!_this.adaptivePosition) {
          _this._positionService.calcPosition();

          _this._positionService.deletePositionElement(_this._popover._componentRef.location);
        }

        _this.isOpen = true;
      };
      /** @type {?} */


      var cancelDelayedTooltipShowing =
      /**
      * @return {?}
      */
      function cancelDelayedTooltipShowing() {
        if (_this._popoverCancelShowFn) {
          _this._popoverCancelShowFn();
        }
      };

      if (this.delay) {
        /** @type {?} */
        var _timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(this.delay).subscribe(
        /**
        * @return {?}
        */
        function () {
          showPopover();
          cancelDelayedTooltipShowing();
        });

        if (this.triggers) {
          Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_4__["parseTriggers"])(this.triggers).forEach(
          /**
          * @param {?} trigger
          * @return {?}
          */
          function (trigger) {
            _this._popoverCancelShowFn = _this._renderer.listen(_this._elementRef.nativeElement, trigger.close,
            /**
            * @return {?}
            */
            function () {
              _timer.unsubscribe();

              cancelDelayedTooltipShowing();
            });
          });
        }
      } else {
        showPopover();
      }
    }
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */

  }, {
    key: "hide",
    value: function hide() {
      if (this._delayTimeoutId) {
        clearTimeout(this._delayTimeoutId);
        this._delayTimeoutId = undefined;
      }

      if (this.isOpen) {
        this._popover.hide();

        this.isOpen = false;
      }
    }
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this.isOpen) {
        return this.hide();
      }

      this.show();
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      // fix: seems there are an issue with `routerLinkActive`
      // which result in duplicated call ngOnInit without call to ngOnDestroy
      // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
      if (this._isInited) {
        return;
      }

      this._isInited = true;

      this._popover.listen({
        triggers: this.triggers,
        outsideClick: this.outsideClick,
        show:
        /**
        * @return {?}
        */
        function show() {
          return _this2.show();
        }
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._popover.dispose();
    }
  }, {
    key: "isOpen",
    get: function get() {
      return this._popover.isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ,
    set: function set(value) {
      if (value) {
        this.show();
      } else {
        this.hide();
      }
    }
  }]);

  return PopoverDirective;
}();

PopoverDirective.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
  args: [{
    selector: '[popover]',
    exportAs: 'bs-popover'
  }]
}];
/** @nocollapse */

PopoverDirective.ctorParameters = function () {
  return [{
    type: PopoverConfig
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
  }, {
    type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"]
  }, {
    type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_5__["PositioningService"]
  }];
};

PopoverDirective.propDecorators = {
  adaptivePosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  popover: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  popoverContext: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  popoverTitle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  placement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  outsideClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  triggers: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  container: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  containerClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  isOpen: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  delay: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  onShown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  onHidden: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }]
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var PopoverModule = /*#__PURE__*/function () {
  function PopoverModule() {
    Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PopoverModule);
  }

  Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(PopoverModule, null, [{
    key: "forRoot",

    /**
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: PopoverModule,
        providers: [PopoverConfig, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_5__["PositioningService"]]
      };
    }
  }]);

  return PopoverModule;
}();

PopoverModule.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
  args: [{
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]],
    declarations: [PopoverDirective, PopoverContainerComponent],
    exports: [PopoverDirective],
    entryComponents: [PopoverContainerComponent]
  }]
}];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



/***/ }),

/***/ "./node_modules/ngx-bootstrap/progressbar/fesm2015/ngx-bootstrap-progressbar.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/progressbar/fesm2015/ngx-bootstrap-progressbar.js ***!
  \**************************************************************************************/
/*! exports provided: BarComponent, ProgressbarComponent, ProgressbarConfig, ProgressbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarComponent", function() { return BarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function() { return ProgressbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarConfig", function() { return ProgressbarConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarModule", function() { return ProgressbarModule; });
/* harmony import */ var _home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var ProgressbarConfig = function ProgressbarConfig() {
  Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ProgressbarConfig);

  /**
   * if `true` changing value of progress bar will be animated
   */
  this.animate = false;
  /**
   * maximum total value of progress element
   */

  this.max = 100;
};

ProgressbarConfig.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
}];

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var ProgressbarComponent = /*#__PURE__*/function () {
  /**
   * @param {?} config
   */
  function ProgressbarComponent(config) {
    Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ProgressbarComponent);

    this.isStacked = false;
    this.addClass = true;
    /* tslint:disable-next-line:no-any */

    this.bars = [];
    this._max = 100;
    Object.assign(this, config);
  }
  /**
   * if `true` changing value of progress bar will be animated
   * @param {?} value
   * @return {?}
   */


  Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(ProgressbarComponent, [{
    key: "addBar",

    /**
     * @param {?} bar
     * @return {?}
     */
    value: function addBar(bar) {
      bar.animate = this._animate;
      bar.striped = this._striped;
      this.bars.push(bar);
    }
    /**
     * @param {?} bar
     * @return {?}
     */

  }, {
    key: "removeBar",
    value: function removeBar(bar) {
      this.bars.splice(this.bars.indexOf(bar), 1);
    }
  }, {
    key: "animate",
    set: function set(value) {
      this._animate = value;
      this.bars.forEach(
      /**
      * @param {?} b
      * @return {?}
      */
      function (b) {
        b.animate = value;
      });
    }
    /**
     * If `true`, striped classes are applied
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "striped",
    set: function set(value) {
      this._striped = value;
      this.bars.forEach(
      /**
      * @param {?} b
      * @return {?}
      */
      function (b) {
        b.striped = value;
      });
    }
    /**
     * current value of progress bar. Could be a number or array of objects
     * like {"value":15,"type":"info","label":"15 %"}
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "value",
    set: function set(value) {
      this.isStacked = Array.isArray(value);
      this._value = value;
    }
    /**
     * @return {?}
     */

  }, {
    key: "isBs3",
    get: function get() {
      return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["isBs3"])();
    }
    /**
     * maximum total value of progress element
     * @return {?}
     */

  }, {
    key: "max",
    get: function get() {
      return this._max;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    ,
    set: function set(v) {
      this._max = v;
      this.bars.forEach(
      /**
      * @param {?} bar
      * @return {?}
      */
      function (bar) {
        bar.recalculatePercentage();
      });
    }
  }]);

  return ProgressbarComponent;
}();

ProgressbarComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
  args: [{
    selector: 'progressbar',
    template: "<bar [type]=\"type\" [value]=\"_value\" *ngIf=\"!isStacked\">\n  <ng-content></ng-content>\n</bar>\n<ng-template [ngIf]=\"isStacked\">\n  <bar *ngFor=\"let item of _value\" [type]=\"item.type\" [value]=\"item.value\">{{ item.label }}</bar>\n</ng-template>\n",
    styles: ["\n    :host {\n      width: 100%;\n      display: flex;\n    }\n  "]
  }]
}];
/** @nocollapse */

ProgressbarComponent.ctorParameters = function () {
  return [{
    type: ProgressbarConfig
  }];
};

ProgressbarComponent.propDecorators = {
  animate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  striped: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  type: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  max: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
    args: ['attr.max']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  addClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
    args: ['class.progress']
  }]
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// todo: number pipe
// todo: use query from progress?


var BarComponent = /*#__PURE__*/function () {
  /**
   * @param {?} el
   * @param {?} progress
   * @param {?} renderer
   */
  function BarComponent(el, progress, renderer) {
    Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BarComponent);

    this.el = el;
    this.renderer = renderer;
    this.addClass = true;
    this.percent = 0;
    this.progress = progress;
  }
  /**
   * provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger`
   * @return {?}
   */


  Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(BarComponent, [{
    key: "ngOnInit",

    /**
     * @return {?}
     */
    value: function ngOnInit() {
      this.progress.addBar(this);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.progress.removeBar(this);
    }
    /**
     * @return {?}
     */

  }, {
    key: "recalculatePercentage",
    value: function recalculatePercentage() {
      this.percent = +(this.value / this.progress.max * 100).toFixed(2);
      /** @type {?} */

      var totalPercentage = this.progress.bars.reduce(
      /**
      * @param {?} total
      * @param {?} bar
      * @return {?}
      */
      function (total, bar) {
        return total + bar.percent;
      }, 0);

      if (totalPercentage > 100) {
        this.percent -= totalPercentage - 100;
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "applyTypeClasses",
    value: function applyTypeClasses() {
      if (this._prevType) {
        /** @type {?} */
        var barTypeClass = "progress-bar-".concat(this._prevType);
        /** @type {?} */

        var bgClass = "bg-".concat(this._prevType);
        this.renderer.removeClass(this.el.nativeElement, barTypeClass);
        this.renderer.removeClass(this.el.nativeElement, bgClass);
        this._prevType = null;
      }

      if (this._type) {
        /** @type {?} */
        var _barTypeClass = "progress-bar-".concat(this._type);
        /** @type {?} */


        var _bgClass = "bg-".concat(this._type);

        this.renderer.addClass(this.el.nativeElement, _barTypeClass);
        this.renderer.addClass(this.el.nativeElement, _bgClass);
        this._prevType = this._type;
      }
    }
  }, {
    key: "type",
    get: function get() {
      return this._type;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    ,
    set: function set(v) {
      this._type = v;
      this.applyTypeClasses();
    }
    /**
     * current value of progress bar
     * @return {?}
     */

  }, {
    key: "value",
    get: function get() {
      return this._value;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    ,
    set: function set(v) {
      if (!v && v !== 0) {
        return;
      }

      this._value = v;
      this.recalculatePercentage();
    }
    /**
     * @return {?}
     */

  }, {
    key: "setBarWidth",
    get: function get() {
      this.recalculatePercentage();
      return this.percent;
    }
    /**
     * @return {?}
     */

  }, {
    key: "isBs3",
    get: function get() {
      return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["isBs3"])();
    }
  }]);

  return BarComponent;
}();

BarComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
  args: [{
    selector: 'bar',
    template: "<ng-content></ng-content>\n",
    host: {
      role: 'progressbar',
      'aria-valuemin': '0',
      '[class.progress-bar-animated]': '!isBs3 && animate',
      '[class.progress-bar-striped]': 'striped',
      '[class.active]': 'isBs3 && animate',
      '[attr.aria-valuenow]': 'value',
      '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
      '[attr.aria-valuemax]': 'max',
      '[style.height.%]': '"100"'
    }
  }]
}];
/** @nocollapse */

BarComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
  }, {
    type: ProgressbarComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
  }];
};

BarComponent.propDecorators = {
  type: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  setBarWidth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
    args: ['style.width.%']
  }],
  addClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
    args: ['class.progress-bar']
  }]
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var ProgressbarModule = /*#__PURE__*/function () {
  function ProgressbarModule() {
    Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ProgressbarModule);
  }

  Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(ProgressbarModule, null, [{
    key: "forRoot",

    /**
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: ProgressbarModule,
        providers: [ProgressbarConfig]
      };
    }
  }]);

  return ProgressbarModule;
}();

ProgressbarModule.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
  args: [{
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
    declarations: [BarComponent, ProgressbarComponent],
    exports: [BarComponent, ProgressbarComponent]
  }]
}];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



/***/ }),

/***/ "./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js":
/*!******************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js ***!
  \******************************************************************************/
/*! exports provided: TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipConfig", function() { return TooltipConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipContainerComponent", function() { return TooltipContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony import */ var _home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Default values provider for tooltip
 */

var TooltipConfig = function TooltipConfig() {
  Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TooltipConfig);

  /**
   * sets disable adaptive position
   */
  this.adaptivePosition = true;
  /**
   * tooltip placement, supported positions: 'top', 'bottom', 'left', 'right'
   */

  this.placement = 'top';
  /**
   * array of event names which triggers tooltip opening
   */

  this.triggers = 'hover focus';
  /**
   * delay before showing the tooltip
   */

  this.delay = 0;
};

TooltipConfig.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
}];

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var TooltipContainerComponent = /*#__PURE__*/function () {
  /**
   * @param {?} config
   */
  function TooltipContainerComponent(config) {
    Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TooltipContainerComponent);

    Object.assign(this, config);
  }
  /**
   * @return {?}
   */


  Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(TooltipContainerComponent, [{
    key: "ngAfterViewInit",

    /**
     * @return {?}
     */
    value: function ngAfterViewInit() {
      this.classMap = {
        in: false,
        fade: false
      };
      this.classMap[this.placement] = true;
      this.classMap["tooltip-".concat(this.placement)] = true;
      this.classMap.in = true;

      if (this.animation) {
        this.classMap.fade = true;
      }

      if (this.containerClass) {
        this.classMap[this.containerClass] = true;
      }
    }
  }, {
    key: "isBs3",
    get: function get() {
      return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["isBs3"])();
    }
  }]);

  return TooltipContainerComponent;
}();

TooltipContainerComponent.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
  args: [{
    selector: 'bs-tooltip-container',
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
    // tslint:disable-next-line
    host: {
      '[class]': '"tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
      '[class.show]': '!isBs3',
      '[class.bs3]': 'isBs3',
      '[attr.id]': 'this.id',
      role: 'tooltip'
    },
    template: "\n    <div class=\"tooltip-arrow arrow\"></div>\n    <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n    ",
    styles: ["\n    :host.tooltip {\n      display: block;\n      pointer-events: none;\n    }\n    :host.bs3.tooltip.top>.arrow {\n      margin-left: -2px;\n    }\n    :host.bs3.tooltip.bottom {\n      margin-top: 0px;\n    }\n    :host.bs3.bs-tooltip-left, :host.bs3.bs-tooltip-right{\n      margin: 0px;\n    }\n    :host.bs3.bs-tooltip-right .arrow, :host.bs3.bs-tooltip-left .arrow {\n      margin: .3rem 0;\n    }\n  "]
  }]
}];
/** @nocollapse */

TooltipContainerComponent.ctorParameters = function () {
  return [{
    type: TooltipConfig
  }];
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */


var id = 0;

var TooltipDirective = /*#__PURE__*/function () {
  /**
   * @param {?} _viewContainerRef
   * @param {?} cis
   * @param {?} config
   * @param {?} _elementRef
   * @param {?} _renderer
   * @param {?} _positionService
   */
  function TooltipDirective(_viewContainerRef, cis, config, _elementRef, _renderer, _positionService) {
    Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TooltipDirective);

    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this._positionService = _positionService;
    this.tooltipId = id++;
    /**
     * Fired when tooltip content changes
     */

    /* tslint:disable-next-line:no-any */

    this.tooltipChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    /**
     * Css class for tooltip container
     */

    this.containerClass = '';
    /**
     * @deprecated - removed, will be added to configuration
     */

    this.tooltipAnimation = true;
    /**
     * @deprecated
     */

    this.tooltipFadeDuration = 150;
    /**
     * @deprecated
     */

    this.tooltipStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    this._tooltip = cis.createLoader(this._elementRef, _viewContainerRef, this._renderer).provide({
      provide: TooltipConfig,
      useValue: config
    });
    Object.assign(this, config);
    this.onShown = this._tooltip.onShown;
    this.onHidden = this._tooltip.onHidden;
  }
  /**
   * Returns whether or not the tooltip is currently being shown
   * @return {?}
   */


  Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(TooltipDirective, [{
    key: "ngOnInit",

    /**
     * @return {?}
     */
    value: function ngOnInit() {
      var _this = this;

      this._tooltip.listen({
        triggers: this.triggers,
        show:
        /**
        * @return {?}
        */
        function show() {
          return _this.show();
        }
      });
      /* tslint:disable-next-line:no-any */


      this.tooltipChange.subscribe(
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        if (!value) {
          _this._tooltip.hide();
        }
      });
      this.onShown.subscribe(
      /**
      * @return {?}
      */
      function () {
        _this.setAriaDescribedBy();
      });
      this.onHidden.subscribe(
      /**
      * @return {?}
      */
      function () {
        _this.setAriaDescribedBy();
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "setAriaDescribedBy",
    value: function setAriaDescribedBy() {
      this._ariaDescribedby = this.isOpen ? "tooltip-".concat(this.tooltipId) : null;

      if (this._ariaDescribedby) {
        this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ariaDescribedby);
      } else {
        this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
      }
    }
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this.isOpen) {
        return this.hide();
      }

      this.show();
    }
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */

  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      this._positionService.setOptions({
        modifiers: {
          flip: {
            enabled: this.adaptivePosition
          },
          preventOverflow: {
            enabled: this.adaptivePosition
          }
        }
      });

      if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.tooltip) {
        return;
      }
      /** @type {?} */


      var showTooltip =
      /**
      * @return {?}
      */
      function showTooltip() {
        if (_this2._delayTimeoutId) {
          _this2._delayTimeoutId = undefined;
        }

        _this2._tooltip.attach(TooltipContainerComponent).to(_this2.container).position({
          attachment: _this2.placement
        }).show({
          content: _this2.tooltip,
          placement: _this2.placement,
          containerClass: _this2.containerClass,
          id: "tooltip-".concat(_this2.tooltipId)
        });
      };
      /** @type {?} */


      var cancelDelayedTooltipShowing =
      /**
      * @return {?}
      */
      function cancelDelayedTooltipShowing() {
        if (_this2._tooltipCancelShowFn) {
          _this2._tooltipCancelShowFn();
        }
      };

      if (this.delay) {
        if (this._delaySubscription) {
          this._delaySubscription.unsubscribe();
        }

        this._delaySubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["timer"])(this.delay).subscribe(
        /**
        * @return {?}
        */
        function () {
          showTooltip();
          cancelDelayedTooltipShowing();
        });

        if (this.triggers) {
          Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["parseTriggers"])(this.triggers).forEach(
          /**
          * @param {?} trigger
          * @return {?}
          */
          function (trigger) {
            _this2._tooltipCancelShowFn = _this2._renderer.listen(_this2._elementRef.nativeElement, trigger.close,
            /**
            * @return {?}
            */
            function () {
              _this2._delaySubscription.unsubscribe();

              cancelDelayedTooltipShowing();
            });
          });
        }
      } else {
        showTooltip();
      }
    }
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */

  }, {
    key: "hide",
    value: function hide() {
      var _this3 = this;

      if (this._delayTimeoutId) {
        clearTimeout(this._delayTimeoutId);
        this._delayTimeoutId = undefined;
      }

      if (!this._tooltip.isShown) {
        return;
      }

      this._tooltip.instance.classMap.in = false;
      setTimeout(
      /**
      * @return {?}
      */
      function () {
        _this3._tooltip.hide();
      }, this.tooltipFadeDuration);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._tooltip.dispose();

      this.tooltipChange.unsubscribe();

      if (this._delaySubscription) {
        this._delaySubscription.unsubscribe();
      }

      this.onShown.unsubscribe();
      this.onHidden.unsubscribe();
    }
  }, {
    key: "isOpen",
    get: function get() {
      return this._tooltip.isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ,
    set: function set(value) {
      if (value) {
        this.show();
      } else {
        this.hide();
      }
    }
    /**
     * @deprecated - please use `tooltip` instead
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "htmlContent",
    set: function set(value) {
      Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["warnOnce"])('tooltipHtml was deprecated, please use `tooltip` instead');
      this.tooltip = value;
    }
    /**
     * @deprecated - please use `placement` instead
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "_placement",
    set: function set(value) {
      Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["warnOnce"])('tooltipPlacement was deprecated, please use `placement` instead');
      this.placement = value;
    }
    /**
     * @deprecated - please use `isOpen` instead
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "_isOpen",
    set: function set(value) {
      Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["warnOnce"])('tooltipIsOpen was deprecated, please use `isOpen` instead');
      this.isOpen = value;
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["warnOnce"])('tooltipIsOpen was deprecated, please use `isOpen` instead');
      return this.isOpen;
    }
    /**
     * @deprecated - please use `isDisabled` instead
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "_enable",
    set: function set(value) {
      Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["warnOnce"])('tooltipEnable was deprecated, please use `isDisabled` instead');
      this.isDisabled = !value;
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["warnOnce"])('tooltipEnable was deprecated, please use `isDisabled` instead');
      return this.isDisabled;
    }
    /**
     * @deprecated - please use `container="body"` instead
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "_appendToBody",
    set: function set(value) {
      Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["warnOnce"])('tooltipAppendToBody was deprecated, please use `container="body"` instead');
      this.container = value ? 'body' : this.container;
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["warnOnce"])('tooltipAppendToBody was deprecated, please use `container="body"` instead');
      return this.container === 'body';
    }
    /**
     * @deprecated - will replaced with customClass
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "_popupClass",
    set: function set(value) {
      Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["warnOnce"])('tooltipClass deprecated');
    }
    /**
     * @deprecated - removed
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "_tooltipContext",
    set: function set(value) {
      Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["warnOnce"])('tooltipContext deprecated');
    }
    /**
     * @deprecated
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "_tooltipPopupDelay",
    set: function set(value) {
      Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["warnOnce"])('tooltipPopupDelay is deprecated, use `delay` instead');
      this.delay = value;
    }
    /**
     * @deprecated -  please use `triggers` instead
     * @return {?}
     */

  }, {
    key: "_tooltipTrigger",
    get: function get() {
      Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["warnOnce"])('tooltipTrigger was deprecated, please use `triggers` instead');
      return this.triggers;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ,
    set: function set(value) {
      Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["warnOnce"])('tooltipTrigger was deprecated, please use `triggers` instead');
      this.triggers = (value || '').toString();
    }
  }]);

  return TooltipDirective;
}();

TooltipDirective.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
  args: [{
    selector: '[tooltip], [tooltipHtml]',
    exportAs: 'bs-tooltip'
  }]
}];
/** @nocollapse */

TooltipDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
  }, {
    type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_5__["ComponentLoaderFactory"]
  }, {
    type: TooltipConfig
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
  }, {
    type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_6__["PositioningService"]
  }];
};

TooltipDirective.propDecorators = {
  adaptivePosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  tooltip: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  tooltipChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  placement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  triggers: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  container: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  containerClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  isOpen: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  isDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  delay: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  onShown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  onHidden: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  htmlContent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['tooltipHtml']
  }],
  _placement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['tooltipPlacement']
  }],
  _isOpen: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['tooltipIsOpen']
  }],
  _enable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['tooltipEnable']
  }],
  _appendToBody: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['tooltipAppendToBody']
  }],
  tooltipAnimation: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  _popupClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['tooltipClass']
  }],
  _tooltipContext: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['tooltipContext']
  }],
  _tooltipPopupDelay: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['tooltipPopupDelay']
  }],
  tooltipFadeDuration: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  _tooltipTrigger: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['tooltipTrigger']
  }],
  tooltipStateChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }]
};

Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["OnChange"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)], TooltipDirective.prototype, "tooltip", void 0);

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var TooltipModule = /*#__PURE__*/function () {
  function TooltipModule() {
    Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TooltipModule);
  }

  Object(_home_ola_project_local2vocal_l2v_dashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(TooltipModule, null, [{
    key: "forRoot",

    /**
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: TooltipModule,
        providers: [TooltipConfig, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_5__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_6__["PositioningService"]]
      };
    }
  }]);

  return TooltipModule;
}();

TooltipModule.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
  args: [{
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"]],
    declarations: [TooltipDirective, TooltipContainerComponent],
    exports: [TooltipDirective],
    entryComponents: [TooltipContainerComponent]
  }]
}];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/cards.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/cards.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Card title\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n        <div class=\"card-footer\">Card footer</div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-check\"></i>Card with icon\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Card with switch\n          <div class=\"card-header-actions\" style=\"height: 21px;\" >\n            <label class=\"switch switch-sm switch-label switch-info\" >\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n            </label>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Card with label\n          <div class=\"card-header-actions\">\n            <span class=\"badge badge-success\">Success</span>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Card with label\n          <div class=\"card-header-actions\">\n            <span class=\"badge badge-pill badge-danger\">42</span>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card border-primary\">\n        <div class=\"card-header\">\n          Card outline\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card border-secondary\">\n        <div class=\"card-header\">\n          Card outline\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card border-success\">\n        <div class=\"card-header\">\n          Card outline\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card border-info\">\n        <div class=\"card-header\">\n          Card outline\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card border-warning\">\n        <div class=\"card-header\">\n          Card outline\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card border-danger\">\n        <div class=\"card-header\">\n          Card outline\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card card-accent-primary\">\n        <div class=\"card-header\">\n          Card with accent\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card card-accent-secondary\">\n        <div class=\"card-header\">\n          Card with accent\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card card-accent-success\">\n        <div class=\"card-header\">\n          Card with accent\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card card-accent-info\">\n        <div class=\"card-header\">\n          Card with accent\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card card-accent-warning\">\n        <div class=\"card-header\">\n          Card with accent\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card card-accent-danger\">\n        <div class=\"card-header\">\n          Card with accent\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-primary text-center\">\n        <div class=\"card-body\">\n          <blockquote class=\"card-bodyquote\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n            <footer>Someone famous in\n              <cite title=\"Source Title\">Source Title</cite>\n            </footer>\n          </blockquote>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-success text-center\">\n        <div class=\"card-body\">\n          <blockquote class=\"card-bodyquote\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n            <footer>Someone famous in\n              <cite title=\"Source Title\">Source Title</cite>\n            </footer>\n          </blockquote>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-info text-center\">\n        <div class=\"card-body\">\n          <blockquote class=\"card-bodyquote\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n            <footer>Someone famous in\n              <cite title=\"Source Title\">Source Title</cite>\n            </footer>\n          </blockquote>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-warning text-center\">\n        <div class=\"card-body\">\n          <blockquote class=\"card-bodyquote\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n            <footer>Someone famous in\n              <cite title=\"Source Title\">Source Title</cite>\n            </footer>\n          </blockquote>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-danger text-center\">\n        <div class=\"card-body\">\n          <blockquote class=\"card-bodyquote\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n            <footer>Someone famous in\n              <cite title=\"Source Title\">Source Title</cite>\n            </footer>\n          </blockquote>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-primary text-center\">\n        <div class=\"card-body\">\n          <blockquote class=\"card-bodyquote\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n            <footer>Someone famous in\n              <cite title=\"Source Title\">Source Title</cite>\n            </footer>\n          </blockquote>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-primary\">\n        <div class=\"card-header\">\n          Card title\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-success\">\n        <div class=\"card-header\">\n          Card title\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-info\">\n        <div class=\"card-header\">\n          Card title\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-warning\">\n        <div class=\"card-header\">\n          Card title\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"card text-white bg-danger\">\n        <div class=\"card-header\">\n          Card title\n        </div>\n        <div class=\"card-body\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/carousels.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/carousels.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Bootstrap Carousel\n          <div class=\"card-header-actions\">\n            <a href=\"https://valor-software.com/ngx-bootstrap/#/carousel\" target=\"_blank\">\n              <small className=\"text-muted\">docs</small>\n            </a>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <carousel [interval]=\"false\">\n            <slide>\n              <img src=\"https://picsum.photos/id/1/900/500\" alt=\"First slide\" style=\"display: block; width: 100%;\">\n            </slide>\n            <slide>\n              <img src=\"https://picsum.photos/id/1026/900/500\" alt=\"Second slide\" style=\"display: block; width: 100%;\">\n            </slide>\n            <slide>\n              <img src=\"https://picsum.photos/id/1031/900/500\" alt=\"Third slide\" style=\"display: block; width: 100%;\">\n            </slide>\n          </carousel>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Carousel\n          <small> optional captions</small>\n        </div>\n        <div class=\"card-body\">\n          <carousel [interval]=\"false\">\n            <slide>\n              <img src=\"https://picsum.photos/id/1032/900/500\" alt=\"First slide\" style=\"display: block; width: 100%;\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <h3>First slide label</h3>\n                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n              </div>\n            </slide>\n            <slide>\n              <img src=\"https://picsum.photos/id/1036/900/500\" alt=\"Second slide\" style=\"display: block; width: 100%;\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <h3>Second slide label</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n              </div>\n            </slide>\n            <slide>\n              <img src=\"https://picsum.photos/id/1043/900/500\" alt=\"Third slide\" style=\"display: block; width: 100%;\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <h3>Third slide label</h3>\n                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n              </div>\n            </slide>\n          </carousel>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Carousel\n          <small> configuring defaults</small>\n        </div>\n        <div class=\"card-body\">\n          <carousel [interval]=\"false\">\n            <slide>\n              <img src=\"https://picsum.photos/id/1054/900/500\" alt=\"First slide\" style=\"display: block; width: 100%;\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <h3>First slide label</h3>\n                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n              </div>\n            </slide>\n            <slide>\n              <img src=\"https://picsum.photos/id/1059/900/500\" alt=\"Second slide\" style=\"display: block; width: 100%;\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <h3>Second slide label</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n              </div>\n            </slide>\n            <slide>\n              <img src=\"https://picsum.photos/id/1065/900/500\" alt=\"Third slide\" style=\"display: block; width: 100%;\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <h3>Third slide label</h3>\n                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n              </div>\n            </slide>\n          </carousel>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Carousel\n          <small> dynamic slides</small>\n        </div>\n        <div class=\"card-body\">\n          <carousel [interval]=\"myInterval\" [noWrap]=\"noWrapSlides\" [(activeSlide)]=\"activeSlideIndex\">\n            <slide *ngFor=\"let slide of slides; let index=index\">\n              <img [src]=\"slide.image\" alt=\"image slide\" style=\"display: block; width: 100%;\">\n\n              <div class=\"carousel-caption\">\n                <h4>Slide {{index}}</h4>\n                <p>{{slide.text}}</p>\n              </div>\n            </slide>\n          </carousel>\n          <br/>\n          <div>\n            <button type=\"button\" class=\"btn btn-info\"\n                    (click)=\"addSlide()\">Add Slide\n            </button>\n            <button type=\"button\" class=\"btn btn-info\"\n                    (click)=\"removeSlide()\">Remove Current\n            </button>\n            <button type=\"button\" class=\"btn btn-info\"\n                    (click)=\"removeSlide(2)\">Remove #3\n            </button>\n          </div>\n          <div>\n            <div class=\"checkbox\">\n              <label><input type=\"checkbox\" [(ngModel)]=\"noWrapSlides\">Disable Slide Looping</label>\n            </div>\n\n            <span>Interval, in milliseconds (Enter a negative number or 0 to stop the interval.): </span>\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"myInterval\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/collapses.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/collapses.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Bootstrap Collapse\n      <div class=\"card-header-actions\">\n        <a href=\"https://valor-software.com/ngx-bootstrap/#/collapse\" target=\"_blank\">\n          <small className=\"text-muted\">docs</small>\n        </a>\n      </div>\n    </div>\n    <div class=\"card-body\"\n         (collapsed)=\"collapsed($event)\"\n         (expanded)=\"expanded($event)\"\n         [collapse]=\"isCollapsed\">\n      <p>\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo\n        consequat.\n      </p>\n    </div>\n    <div class=\"card-footer\">\n      <button type=\"button\" class=\"btn btn-primary\"\n              (click)=\"isCollapsed = !isCollapsed\">Toggle collapse\n      </button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/forms.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/forms.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Credit Card</strong>\n          <small>Form</small>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\">Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter your name\">\n              </div>\n            </div>\n          </div><!--/.row-->\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"ccnumber\">Credit Card Number</label>\n                <input type=\"text\" class=\"form-control\" id=\"ccnumber\" placeholder=\"0000 0000 0000 0000\">\n              </div>\n            </div>\n          </div><!--/.row-->\n          <div class=\"row\">\n            <div class=\"form-group col-sm-4\">\n              <label for=\"ccmonth\">Month</label>\n              <select class=\"form-control\" id=\"ccmonth\">\n                <option>1</option>\n                <option>2</option>\n                <option>3</option>\n                <option>4</option>\n                <option>5</option>\n                <option>6</option>\n                <option>7</option>\n                <option>8</option>\n                <option>9</option>\n                <option>10</option>\n                <option>11</option>\n                <option>12</option>\n              </select>\n            </div>\n            <div class=\"form-group col-sm-4\">\n              <label for=\"ccyear\">Year</label>\n              <select class=\"form-control\" id=\"ccyear\">\n                <option>2014</option>\n                <option>2015</option>\n                <option>2016</option>\n                <option>2017</option>\n                <option>2018</option>\n                <option>2019</option>\n                <option>2020</option>\n                <option>2021</option>\n                <option>2022</option>\n                <option>2023</option>\n                <option>2024</option>\n                <option>2025</option>\n              </select>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label for=\"cvv\">CVV/CVC</label>\n                <input type=\"text\" class=\"form-control\" id=\"cvv\" placeholder=\"123\">\n              </div>\n            </div>\n          </div><!--/.row-->\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Company</strong>\n          <small>Form</small>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"form-group\">\n            <label for=\"company\">Company</label>\n            <input type=\"text\" class=\"form-control\" id=\"company\" placeholder=\"Enter your company name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"vat\">VAT</label>\n            <input type=\"text\" class=\"form-control\" id=\"vat\" placeholder=\"PL1234567890\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"street\">Street</label>\n            <input type=\"text\" class=\"form-control\" id=\"street\" placeholder=\"Enter street name\">\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-sm-8\">\n              <label for=\"city\">City</label>\n              <input type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"Enter your city\">\n            </div>\n            <div class=\"form-group col-sm-4\">\n              <label for=\"postal-code\">Postal Code</label>\n              <input type=\"text\" class=\"form-control\" id=\"postal-code\" placeholder=\"Postal Code\">\n            </div>\n          </div><!--/.row-->\n          <div class=\"form-group\">\n            <label for=\"country\">Country</label>\n            <input type=\"text\" class=\"form-control\" id=\"country\" placeholder=\"Country name\">\n          </div>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Basic Form</strong> Elements\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\">Static</label>\n              <div class=\"col-md-9\">\n                <p class=\"form-control-static\">Username</p>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Text Input</label>\n              <div class=\"col-md-9\">\n                <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"Text\">\n                <span class=\"help-block\">This is a help text</span>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"email-input\">Email Input</label>\n              <div class=\"col-md-9\">\n                <input type=\"email\" id=\"email-input\" name=\"email-input\" class=\"form-control\" placeholder=\"Enter Email\" autocomplete=\"email\">\n                <span class=\"help-block\">Please enter your email</span>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"password-input\">Password</label>\n              <div class=\"col-md-9\">\n                <input type=\"password\" id=\"password-input\" name=\"password-input\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"current-password\">\n                <span class=\"help-block\">Please enter a complex password</span>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"date-input\">Date Input</label>\n              <div class=\"col-md-9\">\n                <input class=\"form-control\" id=\"date-input\" type=\"date\" name=\"date-input\" placeholder=\"date\">\n                <span class=\"help-block\">Please enter a valid date</span>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"disabled-input\">Disabled Input</label>\n              <div class=\"col-md-9\">\n                <input type=\"text\" id=\"disabled-input\" name=\"disabled-input\" class=\"form-control\" placeholder=\"Disabled\" disabled>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"textarea-input\">Textarea</label>\n              <div class=\"col-md-9\">\n                <textarea id=\"textarea-input\" name=\"textarea-input\" rows=\"9\" class=\"form-control\" placeholder=\"Content..\"></textarea>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"select1\">Select</label>\n              <div class=\"col-md-9\">\n                <select id=\"select1\" name=\"select1\" class=\"form-control\">\n                  <option value=\"0\">Please select</option>\n                  <option value=\"1\">Option #1</option>\n                  <option value=\"2\">Option #2</option>\n                  <option value=\"3\">Option #3</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"select2\">Select Large</label>\n              <div class=\"col-md-9\">\n                <select id=\"select2\" name=\"select2\" class=\"form-control form-control-lg\">\n                  <option value=\"0\">Please select</option>\n                  <option value=\"1\">Option #1</option>\n                  <option value=\"2\">Option #2</option>\n                  <option value=\"3\">Option #3</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"select3\">Select Small</label>\n              <div class=\"col-md-9\">\n                <select id=\"select3\" name=\"select3\" class=\"form-control form-control-sm\">\n                  <option value=\"0\">Please select</option>\n                  <option value=\"1\">Option #1</option>\n                  <option value=\"2\">Option #2</option>\n                  <option value=\"3\">Option #3</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"disabledSelect\">Disabled Select</label>\n              <div class=\"col-md-9\">\n                <select id=\"disabledSelect\" class=\"form-control\" disabled>\n                  <option value=\"0\">Please select</option>\n                  <option value=\"1\">Option #1</option>\n                  <option value=\"2\">Option #2</option>\n                  <option value=\"3\">Option #3</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"multiple-select\">Multiple select</label>\n              <div class=\"col-md-9\">\n                <select id=\"multiple-select\" name=\"multiple-select\" class=\"form-control\" size=\"5\" multiple>\n                  <option value=\"1\">Option #1</option>\n                  <option value=\"2\">Option #2</option>\n                  <option value=\"3\">Option #3</option>\n                  <option value=\"4\">Option #4</option>\n                  <option value=\"5\">Option #5</option>\n                  <option value=\"6\">Option #6</option>\n                  <option value=\"7\">Option #7</option>\n                  <option value=\"8\">Option #8</option>\n                  <option value=\"9\">Option #9</option>\n                  <option value=\"10\">Option #10</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" >Radios</label>\n              <div class=\"col-md-9 col-form-label\">\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"radios\" id=\"radio1\" value=\"option1\" checked>\n                  <label class=\"form-check-label\" for=\"radio1\">\n                    Option 1\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"radios\" id=\"radio2\" value=\"option2\">\n                  <label class=\"form-check-label\" for=\"radio2\">\n                    Option 2\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"radios\" id=\"radio3\" value=\"option3\">\n                  <label class=\"form-check-label\" for=\"radio3\">\n                    Option 3\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"inline-radios\">Inline Radios</label>\n              <div class=\"col-md-9 col-form-label\">\n                <div class=\"form-check form-check-inline mr-1\" id=\"inline-radios\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"inline-radios\" id=\"inlineRadio1\" value=\"option1\">\n                  <label class=\"form-check-label\" for=\"inlineRadio1\">One</label>\n                </div>\n                <div class=\"form-check form-check-inline mr-1\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"inline-radios\" id=\"inlineRadio2\" value=\"option2\">\n                  <label class=\"form-check-label\" for=\"inlineRadio2\">Two</label>\n                </div>\n                <div class=\"form-check form-check-inline mr-1\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"inline-radios\" id=\"inlineRadio3\" value=\"option3\">\n                  <label class=\"form-check-label\" for=\"inlineRadio3\">Three</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\">Checkboxes</label>\n              <div class=\"col-md-9 col-form-label\">\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"checkbox\" value=\"option1\" id=\"checkbox1\">\n                  <label class=\"form-check-label\" for=\"checkbox1\">\n                    Option 1\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"checkbox\" value=\"option1\" id=\"checkbox2\">\n                  <label class=\"form-check-label\" for=\"checkbox2\">\n                    Option 2\n                  </label>\n                </div>\n                <div class=\"form-check checkbox\">\n                  <input class=\"form-check-input\" type=\"checkbox\" value=\"option1\" id=\"checkbox3\">\n                  <label class=\"form-check-label\" for=\"checkbox3\">\n                    Option 3\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\">Inline Checkboxes</label>\n              <div class=\"col-md-9 col-form-label\">\n                <div class=\"form-check form-check-inline mr-1\">\n                  <input class=\"form-check-input\" type=\"checkbox\" id=\"inline-checkbox1\" value=\"option1\">\n                  <label class=\"form-check-label\" for=\"inline-checkbox1\">One</label>\n                </div>\n                <div class=\"form-check form-check-inline mr-1\">\n                  <input class=\"form-check-input\" type=\"checkbox\" id=\"inline-checkbox2\" value=\"option2\">\n                  <label class=\"form-check-label\" for=\"inline-checkbox2\">Two</label>\n                </div>\n                <div class=\"form-check form-check-inline mr-1\">\n                  <input class=\"form-check-input\" type=\"checkbox\" id=\"inline-checkbox3\" value=\"option3\">\n                  <label class=\"form-check-label\" for=\"inline-checkbox3\">Three</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"file-input\">File input</label>\n              <div class=\"col-md-9\">\n                <input type=\"file\" id=\"file-input\" name=\"file-input\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"file-multiple-input\">Multiple File input</label>\n              <div class=\"col-md-9\">\n                <input type=\"file\" id=\"file-multiple-input\" name=\"file-multiple-input\" multiple>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Inline</strong> Form\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-inline\">\n            <div class=\"form-group\">\n              <label class=\"sr-only\" for=\"if-email\">Email</label>\n              <input type=\"email\" id=\"if-email\" name=\"if-email\" class=\"form-control\" placeholder=\"Enter Email..\" autocomplete=\"email\">\n            </div>\n            <div class=\"form-group\">\n              <label class=\"sr-only\" for=\"if-password\">Password</label>\n              <input type=\"password\" id=\"if-password\" name=\"if-password\" class=\"form-control\" placeholder=\"Enter Password..\" autocomplete=\"current-password\">\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Horizontal</strong> Form\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"hf-email\">Email</label>\n              <div class=\"col-md-9\">\n                <input type=\"email\" id=\"hf-email\" name=\"hf-email\" class=\"form-control\" placeholder=\"Enter Email..\" autocomplete=\"email\">\n                <span class=\"help-block\">Please enter your email</span>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"hf-password\">Password</label>\n              <div class=\"col-md-9\">\n                <input type=\"password\" id=\"hf-password\" name=\"hf-password\" class=\"form-control\" placeholder=\"Enter Password..\" autocomplete=\"current-password\">\n                <span class=\"help-block\">Please enter your password</span>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Normal</strong> Form\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\">\n            <div class=\"form-group\">\n              <label for=\"nf-email\">Email</label>\n              <input type=\"email\" id=\"nf-email\" name=\"nf-email\" class=\"form-control\" placeholder=\"Enter Email..\" autocomplete=\"email\">\n              <span class=\"help-block\">Please enter your email</span>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"nf-password\">Password</label>\n              <input type=\"password\" id=\"nf-password\" name=\"nf-password\" class=\"form-control\" placeholder=\"Enter Password..\" autocomplete=\"current-password\">\n              <span class=\"help-block\">Please enter your password</span>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Input\n          <strong>Grid</strong>\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-3\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-3\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-4\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-4\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-5\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-5\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-6\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-7\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-7\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-8\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-8\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-9\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-9\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-10\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-11\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-11\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-sm-12\">\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-user\"></i> Login</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Input\n          <strong>Sizes</strong>\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-5 col-form-label\" for=\"input-small\">Small Input</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" id=\"input-small\" name=\"input-small\" class=\"form-control form-control-sm\" placeholder=\".form-control-sm\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-sm-5 col-form-label\" for=\"input-normal\">Normal Input</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" id=\"input-normal\" name=\"input-normal\" class=\"form-control\" placeholder=\"Normal\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-sm-5 col-form-label\" for=\"input-large\">Large Input</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" id=\"input-large\" name=\"input-large\" class=\"form-control form-control-lg\" placeholder=\".form-control-lg\">\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Validation states</strong> Form\n        </div>\n        <form>\n          <div class=\"card-body\">\n            <div class=\"form-group\">\n              <label class=\"form-col-form-label\" for=\"inputSuccess1\">Input with success</label>\n              <input type=\"text\" class=\"form-control is-valid\" id=\"inputSuccess1\">\n              <div class=\"valid-feedback\">\n                Input is valid.\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"form-col-form-label\" for=\"inputError1\">Input with error</label>\n              <input type=\"text\" class=\"form-control is-invalid\" id=\"inputError1\">\n              <div class=\"invalid-feedback\">\n                Please provide a valid information.\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Validation </strong> <code>was-validated</code>\n        </div>\n        <div class=\"card-body\">\n          <form class=\"was-validated\">\n            <div class=\"form-group\">\n              <label class=\"form-col-form-label\" for=\"inputSuccess2\">Input is valid</label>\n              <input type=\"text\" class=\"form-control is-valid\" id=\"inputSuccess2\">\n              <div class=\"valid-feedback\">\n                Looks good!\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"form-col-form-label\" for=\"inputError2\">Input required</label>\n              <input type=\"text\" class=\"form-control\" id=\"inputError2\" required>\n              <div class=\"valid-feedback\">\n                Input is valid.\n              </div>\n              <div class=\"invalid-feedback\">\n                Please provide a valid information.\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Icon/Text</strong> Groups\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                  </div>\n                  <input type=\"text\" id=\"input1-group1\" name=\"input1-group1\" class=\"form-control\" placeholder=\"Username\">\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <input type=\"email\" id=\"input2-group1\" name=\"input2-group1\" class=\"form-control\" placeholder=\"Email\" autocomplete=\"email\">\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\"><i class=\"fa fa-envelope-o\"></i></span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"fa fa-euro\"></i></span>\n                  </div>\n                  <input type=\"text\" id=\"input3-group1\" name=\"input3-group1\" class=\"form-control\" placeholder=\"..\">\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">.00</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-success\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Buttons</strong> Groups\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-prepend\">\n                    <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i> Search</button>\n                  </span>\n                  <input type=\"text\" id=\"input1-group2\" name=\"input1-group2\" class=\"form-control\" placeholder=\"Username\">\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <input type=\"email\" id=\"input2-group2\" name=\"input2-group2\" class=\"form-control\" placeholder=\"Email\" autocomplete=\"email\">\n                  <span class=\"input-group-append\">\n                    <button type=\"button\" class=\"btn btn-primary\">Submit</button>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-prepend\">\n                    <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-facebook\"></i></button>\n                  </span>\n                  <input type=\"text\" id=\"input3-group2\" name=\"input3-group2\" class=\"form-control\" placeholder=\"Search\">\n                  <span class=\"input-group-append\">\n                    <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-twitter\"></i></button>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-success\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Dropdowns</strong> Groups\n        </div>\n        <div class=\"card-body\">\n\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\" dropdown>\n                    <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" dropdownToggle>Action\n                      <span class=\"caret\"></span>\n                    </button>\n                    <div class=\"dropdown-menu\" *dropdownMenu>\n                      <a class=\"dropdown-item\" href=\"#\">Action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                      <div role=\"separator\" class=\"dropdown-divider\"></div>\n                      <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n                    </div>\n                  </div>\n                  <input type=\"text\" id=\"input1-group3\" name=\"input1-group3\" class=\"form-control\" placeholder=\"Username\">\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <input type=\"email\" id=\"input2-group3\" name=\"input2-group3\" class=\"form-control\" placeholder=\"Email\" autocomplete=\"email\">\n                  <div class=\"input-group-append\" dropdown>\n                    <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" dropdownToggle>Action\n                      <span class=\"caret\"></span>\n                    </button>\n                    <div class=\"dropdown-menu\" *dropdownMenu>\n                      <a class=\"dropdown-item\" href=\"#\">Action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                      <div role=\"separator\" class=\"dropdown-divider\"></div>\n                      <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\" dropdown>\n                    <button type=\"button\" class=\"btn btn-primary\">Action</button>\n                    <button type=\"button\" dropdownToggle class=\"btn btn-primary dropdown-toggle dropdown-toggle-split\">\n                      <span class=\"caret\"></span>\n                      <span class=\"sr-only\">Split button!</span>\n                    </button>\n                    <div class=\"dropdown-menu\" *dropdownMenu>\n                      <a class=\"dropdown-item\" href=\"#\">Action prepend</a>\n                      <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                      <div role=\"separator\" class=\"dropdown-divider\"></div>\n                      <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n                    </div>\n                  </div>\n                  <input type=\"text\" id=\"input3-group3\" name=\"input3-group3\" class=\"form-control\" placeholder=\"..\">\n                  <div class=\"input-group-append\" dropdown>\n                    <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" dropdownToggle>Action\n                      <span class=\"caret\"></span>\n                    </button>\n                    <div class=\"dropdown-menu\" *dropdownMenu>\n                      <a class=\"dropdown-item\" href=\"#\">Action append</a>\n                      <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                      <div role=\"separator\" class=\"dropdown-divider\"></div>\n                      <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-success\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Use the grid for big devices!\n          <small>\n            <code>.col-lg-*</code>\n            <code>.col-md-*</code>\n            <code>.col-sm-*</code>\n          </small>\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <div class=\"col-md-8\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-8\">\n              </div>\n              <div class=\"col-md-4\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-4\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-7\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-7\">\n              </div>\n              <div class=\"col-md-5\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-5\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-6\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-6\">\n              </div>\n              <div class=\"col-md-6\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-6\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-5\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-5\">\n              </div>\n              <div class=\"col-md-7\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-7\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-4\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-4\">\n              </div>\n              <div class=\"col-md-8\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-md-8\">\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-danger\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-warning\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-info\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-success\">Action</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Input Grid for small devices!\n          <small>\n            <code>.col-*</code>\n          </small>\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\" class=\"form-horizontal\">\n            <div class=\"form-group row\">\n              <div class=\"col-4\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-4\">\n              </div>\n              <div class=\"col-8\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-8\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-5\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-5\">\n              </div>\n              <div class=\"col-7\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-7\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-6\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-6\">\n              </div>\n              <div class=\"col-6\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-6\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-7\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-5\">\n              </div>\n              <div class=\"col-5\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-5\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-8\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-8\">\n              </div>\n              <div class=\"col-4\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".col-4\">\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-danger\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-warning\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-info\">Action</button>\n          <button type=\"button\" class=\"btn btn-sm btn-success\">Action</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Example Form\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\">\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">Username</span>\n                </div>\n                <input type=\"text\" id=\"username3\" name=\"username3\" class=\"form-control\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">Email</span>\n                </div>\n                <input type=\"email\" id=\"email3\" name=\"email3\" class=\"form-control\" autocomplete=\"email\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-envelope\"></i></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">Password</span>\n                </div>\n                <input type=\"password\" id=\"password3\" name=\"password3\" class=\"form-control\" autocomplete=\"current-password\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-asterisk\"></i></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group form-actions\">\n              <button type=\"submit\" class=\"btn btn-sm btn-primary\">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Example Form <code>append</code>\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\">\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <input type=\"text\" id=\"username2\" name=\"username2\" class=\"form-control\" placeholder=\"Username\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <input type=\"email\" id=\"email2\" name=\"email2\" class=\"form-control\" placeholder=\"Email\" autocomplete=\"email\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-envelope\"></i></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <input type=\"password\" id=\"password2\" name=\"password2\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"current-password\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-asterisk\"></i></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group form-actions\">\n              <button type=\"submit\" class=\"btn btn-sm btn-secondary\">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Example Form <code>prepend</code>\n        </div>\n        <div class=\"card-body\">\n          <form action=\"\" method=\"post\">\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                </div>\n                <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Username\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-envelope\"></i></span>\n                </div>\n                <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" autocomplete=\"email\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-asterisk\"></i></span>\n                </div>\n                <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"current-password\">\n              </div>\n            </div>\n            <div class=\"form-group form-actions\">\n              <button type=\"submit\" class=\"btn btn-sm btn-success\">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-edit\"></i>Form Elements\n          <div class=\"card-header-actions\">\n            <button type=\"button\" class=\"card-header-action btn btn-link btn-setting\"><i class=\"icon-settings\"></i></button>\n            <button type=\"button\" class=\"card-header-action btn btn-link btn-minimize\"(click)=\"toggleCollapse()\"><i class={{iconCollapse}}></i></button>\n            <button type=\"button\" class=\"card-header-action btn btn-link btn-close\"><i class=\"icon-close\"></i></button>\n          </div>\n        </div>\n        <div (collapsed)=\"collapsed($event)\"\n             (expanded)=\"expanded($event)\"\n             [collapse]=\"isCollapsed\"\n             class=\"card-body\">\n          <form class=\"form-horizontal\">\n          <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"prependedInput\">Prepended text</label>\n            <div class=\"controls\">\n              <div class=\"input-prepend input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">@</span>\n                </div>\n                <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\">\n              </div>\n              <p class=\"help-block\">Here's some help text</p>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"appendedInput\">Appended text</label>\n            <div class=\"controls\">\n              <div class=\"input-group\">\n                <input id=\"appendedInput\" class=\"form-control\" size=\"16\" type=\"text\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\">.00</span>\n                </div>\n              </div>\n              <span class=\"help-block\">Here's more help text</span>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"appendedPrependedInput\">Append and prepend</label>\n            <div class=\"controls\">\n              <div class=\"input-prepend input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">$</span>\n                </div>\n                <input id=\"appendedPrependedInput\" class=\"form-control\" size=\"16\" type=\"text\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\">.00</span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"appendedInputButton\">Append with button</label>\n            <div class=\"controls\">\n              <div class=\"input-group\">\n                <input id=\"appendedInputButton\" class=\"form-control\" size=\"16\" type=\"text\">\n                <span class=\"input-group-append\">\n                  <button class=\"btn btn-secondary\" type=\"button\">Go!</button>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-form-label\" for=\"appendedInputButtons\">Two-button append</label>\n            <div class=\"controls\">\n              <div class=\"input-group\">\n                <input id=\"appendedInputButtons\" size=\"16\" class=\"form-control\" type=\"text\">\n                <span class=\"input-group-append\">\n                  <button class=\"btn btn-secondary\" type=\"button\">Search</button>\n                  <button class=\"btn btn-secondary\" type=\"button\">Options</button>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-actions\">\n            <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n            <button class=\"btn btn-secondary\" type=\"button\">Cancel</button>\n          </div>\n        </form>\n        </div>\n      </div>\n    </div> <!--/.col-->\n  </div><!--/.row-->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/navbars/navbars.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/navbars/navbars.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Bootstrap Navbar\n        </div>\n        <div class=\"card-body\">\n          <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n            <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n            <button aria-controls=\"navbarSupportedContent\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" class=\"navbar-toggler\" type=\"button\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-icon\"></span>\n            </button>\n\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [collapse]=\"isCollapsed\" [isAnimated]=\"true\">\n              <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item active\">\n                  <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#\">Link</a>\n                </li>\n                <li class=\"nav-item dropdown\" dropdown>\n                  <a id=\"link-dropdown\" class=\"nav-link dropdown-toggle\" href dropdownToggle (click)=\"false\" aria-controls=\"your-dropdown\">\n                    Dropdown\n                  </a>\n                  <div id=\"your-dropdown\" class=\"dropdown-menu\" aria-labelledby=\"link-dropdown\" *dropdownMenu>\n                    <a class=\"dropdown-item\" href=\"#\">Action</a>\n                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                  </div>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n                </li>\n              </ul>\n              <form class=\"form-inline my-2 my-lg-0\">\n                <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n                <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n              </form>\n            </div>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/paginations.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/paginations.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Bootstrap Pagination\n      <div class=\"card-header-actions\">\n        <a href=\"https://valor-software.com/ngx-bootstrap/#/pagination\" target=\"_blank\">\n          <small className=\"text-muted\">docs</small>\n        </a>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-12 d-sm-down-none\">\n          <pagination [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" (pageChanged)=\"pageChanged($event)\"></pagination>\n        </div>\n        <div class=\"col-xs-12 col-12\">\n          <pagination [boundaryLinks]=\"true\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" class=\"pagination-sm\" [maxSize]=\"6\"\n                      previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"></pagination>\n        </div>\n        <div class=\"col-xs-12 col-12 d-sm-down-none\">\n          <pagination [directionLinks]=\"false\" [boundaryLinks]=\"true\" [totalItems]=\"totalItems\"\n                      [(ngModel)]=\"currentPage\"></pagination>\n        </div>\n        <div class=\"col-xs-12 col-12\">\n          <pagination [directionLinks]=\"false\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\"\n                      (numPages)=\"smallnumPages = $event\"></pagination>\n        </div>\n      </div>\n      <pre class=\"card card-body card-header mb-3\">The selected page no: {{currentPage}}/{{smallnumPages}}</pre>\n    </div>\n    <div class=\"card-footer\">\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"setPage(3)\">Set current page to: 3</button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Pagination <small>states & limits</small>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-12\">\n          <pagination [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\" [maxSize]=\"maxSize\" class=\"pagination-sm\"\n                      previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" [boundaryLinks]=\"true\"></pagination>\n        </div>\n\n        <div class=\"col-xs-12 col-12\">\n          <pagination [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\" [maxSize]=\"maxSize\" class=\"pagination-sm\"\n                      previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"\n                      [boundaryLinks]=\"true\" [rotate]=\"false\" (numPages)=\"numPages = $event\"></pagination>\n        </div>\n      </div>\n      <pre class=\"card card-body card-header\">Page: {{bigCurrentPage}} / {{numPages}}</pre>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Pager\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-12 col-md-6\">\n          <pagination\n            [directionLinks]=\"false\"\n            [totalItems]=\"totalItems\"\n            [(ngModel)]=\"currentPager\"\n            (numPages)=\"smallnumPages = $event\">\n          </pagination>\n        </div>\n\n        <div class=\"col-xs-12 col-12 col-md-6\">\n          <pager\n            [totalItems]=\"totalItems\"\n            [(ngModel)]=\"currentPager\"\n            (pageChanged)=\"pageChanged($event)\"\n            pageBtnClass=\"btn\"\n            [itemsPerPage]=\"10\"\n            class=\"pull-left\">\n          </pager>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/popovers.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/popovers.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Bootstrap Popover\n      <div class=\"card-header-actions\">\n        <a href=\"https://valor-software.com/ngx-bootstrap/#/popover\" target=\"_blank\">\n          <small className=\"text-muted\">docs</small>\n        </a>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-primary\"\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n        Live demo\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Popover\n      <small>positioning</small>\n    </div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              popoverTitle=\"Popover on top\"\n              placement=\"top\">\n        Popover on top\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              popoverTitle=\"Popover on right\"\n              placement=\"right\">\n        Popover on right\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              popoverTitle=\"Popover auto\"\n              placement=\"auto\">\n        Popover auto\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              popoverTitle=\"Popover on left\"\n              placement=\"left\">\n        Popover on left\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              popoverTitle=\"Popover on bottom\"\n              placement=\"bottom\">\n        Popover on bottom\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Popover\n      <small><code>focus</code> trigger</small>\n    </div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-success\"\n              popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              popoverTitle=\"Dismissible popover\"\n              triggers=\"focus\">\n        Dismissible popover\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Popover\n      <small>dynamic content</small>\n    </div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-info\"\n              [popover]=\"content\" [popoverTitle]=\"title\">\n        Simple binding\n      </button>\n\n      <ng-template #popTemplate>Just another: {{content}}</ng-template>\n      <button type=\"button\" class=\"btn btn-warning\"\n              [popover]=\"popTemplate\" popoverTitle=\"Template ref content inside\">\n        TemplateRef binding\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Popover\n      <small>dynamic HTML</small>\n    </div>\n    <div class=\"card-body\">\n      <ng-template #popTemplateHtml>Here we go:\n        <div [innerHtml]=\"html\"></div>\n      </ng-template>\n      <button type=\"button\" class=\"btn btn-success\"\n              [popover]=\"popTemplateHtml\" popoverTitle=\"Dynamic html inside\">\n        Show me popover with html\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Popover\n      <small>append to <code>body</code></small>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row panel\" style=\"position: relative; overflow: hidden;\">\n        <div class=\"card-body panel-body\">\n          <button type=\"button\" class=\"btn btn-danger\"\n                  popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n            Default popover\n          </button>\n          <button type=\"button\" class=\"btn btn-success\"\n                  popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n                  container=\"body\">\n            Popover appended to body\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Popover\n      <small>custom triggers</small>\n    </div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-info\"\n              popover=\"I will hide on blur\"\n              triggers=\"mouseenter:mouseleave\">\n        Hover over me!\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Popover\n      <small>manual triggering</small>\n    </div>\n    <div class=\"card-body\">\n      <p>\n        <span popover=\"Hello there! I was triggered manually\"\n              triggers=\"\" #pop=\"bs-popover\">\n        This text has attached popover\n        </span>\n      </p>\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"pop.show()\">\n        Show\n      </button>\n      <button type=\"button\" class=\"btn btn-warning\" (click)=\"pop.hide()\">\n        Hide\n      </button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/progress.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/progress.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Bootstrap Progress\n      <div class=\"card-header-actions\">\n        <a href=\"https://valor-software.com/ngx-bootstrap/#/progressbar\" target=\"_blank\">\n          <small className=\"text-muted\">docs</small>\n        </a>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n          <progressbar class=\"progress\" [value]=\"55\" [max]=\"100\"></progressbar>\n        </div>\n        <div class=\"col-sm-4\">\n          <progressbar class=\"progress progress-striped\" [value]=\"22\" [max]=\"100\" type=\"warning\">22%</progressbar>\n        </div>\n        <div class=\"col-sm-4\">\n          <progressbar class=\"progress progress-striped active\" [max]=\"200\" [value]=\"166\" type=\"danger\"><i>166 / 200</i></progressbar>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Progress <small>dynamic</small>\n    </div>\n    <div class=\"card-body\">\n      <progressbar class=\"progress progress-striped progress-animated\" [max]=\"max\" [value]=\"dynamic\">\n        <span style=\"color:white; white-space:nowrap;\">{{dynamic}} / {{max}}</span>\n      </progressbar>\n\n      <small><em>No animation</em></small>\n      <progressbar class=\"progress progress-success\" [value]=\"dynamic\" [max]=\"100\" type=\"success\"><b>{{dynamic}}%</b></progressbar>\n\n      <small><em>Object (changes type based on value)</em></small>\n      <progressbar class=\"progress-bar progress-bar-striped progress-bar-animated\" [value]=\"dynamic\" [max]=\"max\" [type]=\"type\">\n        {{type}} <i *ngIf=\"showWarning\">!!! Watch out !!!</i>\n      </progressbar>\n      <br>\n      <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"random()\">Randomize</button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Progress <small>stacked</small>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row col-lg-12\">\n        <progressbar class=\"progress\" [value]=\"stacked\" [max]=\"100\"></progressbar>\n      </div>\n      <br>\n      <div class=\"row col-md-12\">\n        <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"randomize()\">{{buttonCaption}} randomize</button>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/switches.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/switches.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          3d Switch\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-3d switch-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-3d switch-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-3d switch-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-3d switch-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-3d switch-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-3d switch-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch default\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch default - pills\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-pill switch-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch outline\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-outline-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch outline - pills\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-pill switch-outline-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch outline alternative\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-outline-primary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-secondary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-success-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-warning-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-info-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-outline-danger-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch outline alternative - pills\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-pill switch-outline-primary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-secondary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-success-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-warning-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-info-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-pill switch-outline-danger-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with text\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with text - pills\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-pill switch-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with text outline\n        </div>\n        <div class=\"card-body\">\n\n          <label class=\"switch switch-label switch-outline-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with text outline - pills\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-pill switch-outline-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with text outline alternative\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-outline-primary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-secondary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-success-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-warning-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-info-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-danger-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with text outline alternative - pills\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-pill switch-outline-primary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-secondary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-success-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-warning-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-info-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-danger-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with icon\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with icon - pills\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-pill switch-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with icon outline\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-outline-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with icon outline - pills\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-pill switch-outline-primary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-secondary\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-success\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-warning\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-info\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-danger\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with icon outline alternative\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-outline-primary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-secondary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-success-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-warning-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-info-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-outline-danger-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Switch with icon outline alternative - pills\n        </div>\n        <div class=\"card-body\">\n          <label class=\"switch switch-label switch-pill switch-outline-primary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-secondary-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-success-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-warning-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-info-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n          &nbsp;&nbsp;&nbsp;\n          <label class=\"switch switch-label switch-pill switch-outline-danger-alt\">\n            <input type=\"checkbox\" class=\"switch-input\" checked>\n            <span class=\"switch-slider\" data-checked=\"&#x2713;\" data-unchecked=\"&#x2715;\"></span>\n          </label>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Sizes\n        </div>\n        <div class=\"card-body p-0\">\n          <table class=\"table table-hover table-striped table-align-middle mb-0\">\n            <thead>\n              <th>Size</th>\n              <th>Example</th>\n              <th>CSS Class</th>\n            </thead>\n            <tbody>\n              <tr>\n                <td>\n                  Large\n                </td>\n                <td>\n                  <label class=\"switch switch-lg switch-3d switch-primary\">\n                    <input type=\"checkbox\" class=\"switch-input\" checked>\n                    <span class=\"switch-slider\"></span>\n                  </label>\n                </td>\n                <td>\n                  Add following class <code>.switch-lg</code>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Normal\n                </td>\n                <td>\n                  <label class=\"switch switch-3d switch-primary\">\n                    <input type=\"checkbox\" class=\"switch-input\" checked>\n                    <span class=\"switch-slider\"></span>\n                  </label>\n                </td>\n                <td>\n                  -\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Small\n                </td>\n                <td>\n                  <label class=\"switch switch-sm switch-3d switch-primary\">\n                    <input type=\"checkbox\" class=\"switch-input\" checked>\n                    <span class=\"switch-slider\"></span>\n                  </label>\n                </td>\n                <td>\n                  Add following class <code>.switch-sm</code>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/tables.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/tables.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Simple Table\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>Username</th>\n                <th>Date registered</th>\n                <th>Role</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Samppa Nori</td>\n                <td>2012/01/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Estavan Lykos</td>\n                <td>2012/02/01</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-danger\">Banned</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Chetan Mohamed</td>\n                <td>2012/02/01</td>\n                <td>Admin</td>\n                <td>\n                  <span class=\"badge badge-secondary\">Inactive</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Derick Maximinus</td>\n                <td>2012/03/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-warning\">Pending</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Friderik Dávid</td>\n                <td>2012/01/21</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <ul class=\"pagination\">\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n            <li class=\"page-item active\">\n              <a class=\"page-link\" href=\"#\">1</a>\n            </li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Striped Table\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th>Username</th>\n                <th>Date registered</th>\n                <th>Role</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Yiorgos Avraamu</td>\n                <td>2012/01/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Avram Tarasios</td>\n                <td>2012/02/01</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-danger\">Banned</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Quintin Ed</td>\n                <td>2012/02/01</td>\n                <td>Admin</td>\n                <td>\n                  <span class=\"badge badge-secondary\">Inactive</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Enéas Kwadwo</td>\n                <td>2012/03/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-warning\">Pending</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Agapetus Tadeáš</td>\n                <td>2012/01/21</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <ul class=\"pagination\">\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n            <li class=\"page-item active\">\n              <a class=\"page-link\" href=\"#\">1</a>\n            </li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n  <!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Condensed Table\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-sm\">\n            <thead>\n              <tr>\n                <th>Username</th>\n                <th>Date registered</th>\n                <th>Role</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Carwyn Fachtna</td>\n                <td>2012/01/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Nehemiah Tatius</td>\n                <td>2012/02/01</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-danger\">Banned</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Ebbe Gemariah</td>\n                <td>2012/02/01</td>\n                <td>Admin</td>\n                <td>\n                  <span class=\"badge badge-secondary\">Inactive</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Eustorgios Amulius</td>\n                <td>2012/03/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-warning\">Pending</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Leopold Gáspár</td>\n                <td>2012/01/21</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <ul class=\"pagination\">\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n            <li class=\"page-item active\">\n              <a class=\"page-link\" href=\"#\">1</a>\n            </li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n    <div class=\"col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Bordered Table\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th>Username</th>\n                <th>Date registered</th>\n                <th>Role</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Pompeius René</td>\n                <td>2012/01/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Paĉjo Jadon</td>\n                <td>2012/02/01</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-danger\">Banned</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Micheal Mercurius</td>\n                <td>2012/02/01</td>\n                <td>Admin</td>\n                <td>\n                  <span class=\"badge badge-secondary\">Inactive</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Ganesha Dubhghall</td>\n                <td>2012/03/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-warning\">Pending</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Hiroto Šimun</td>\n                <td>2012/01/21</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <ul class=\"pagination\">\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n            <li class=\"page-item active\">\n              <a class=\"page-link\" href=\"#\">1</a>\n            </li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n  <!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Combined All Table\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-bordered table-striped table-sm\">\n            <thead>\n              <tr>\n                <th>Username</th>\n                <th>Date registered</th>\n                <th>Role</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Vishnu Serghei</td>\n                <td>2012/01/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Zbyněk Phoibos</td>\n                <td>2012/02/01</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-danger\">Banned</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Einar Randall</td>\n                <td>2012/02/01</td>\n                <td>Admin</td>\n                <td>\n                  <span class=\"badge badge-secondary\">Inactive</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Félix Troels</td>\n                <td>2012/03/01</td>\n                <td>Member</td>\n                <td>\n                  <span class=\"badge badge-warning\">Pending</span>\n                </td>\n              </tr>\n              <tr>\n                <td>Aulus Agmundr</td>\n                <td>2012/01/21</td>\n                <td>Staff</td>\n                <td>\n                  <span class=\"badge badge-success\">Active</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <nav>\n            <ul class=\"pagination\">\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n              <li class=\"page-item active\">\n                <a class=\"page-link\" href=\"#\">1</a>\n              </li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n            </ul>\n          </nav>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n  <!--/.row-->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/tabs.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/tabs.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-6 mb-4\">\n      <!-- Nav tabs -->\n      <tabset>\n        <tab heading=\"Home\">\n          1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab heading=\"Profile\">\n          2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab heading=\"Messages\">\n          3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n      </tabset>\n    </div><!--/.col-->\n    <div class=\"col-md-6 mb-4\">\n      <!-- Nav tabs -->\n      <tabset>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-calculator\"></i></ng-template>\n          2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-basket-loaded\"></i></ng-template>\n          3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-pie-chart\"></i></ng-template>\n          4. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n      </tabset>\n    </div><!--/.col-->\n    <div class=\"col-md-6 mb-4\">\n      <!-- Nav tabs -->\n      <tabset>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-calculator\"></i> Calculator</ng-template>\n          2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-basket-loaded\"></i> Shoping cart</ng-template>\n          3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-pie-chart\"></i> Charts</ng-template>\n          4. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n      </tabset>\n    </div><!--/.col-->\n    <div class=\"col-md-6 mb-4\">\n      <!-- Nav tabs -->\n      <tabset>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-list\"></i> Menu &nbsp;<span class=\"badge badge-success\">New</span></ng-template>\n          1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-calculator\"></i> Calculator &nbsp;<span class=\"badge badge-pill badge-danger\">29</span></ng-template>\n          2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n        <tab>\n          <ng-template tabHeading><i class=\"icon-pie-chart\"></i> Charts</ng-template>\n          4. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </tab>\n      </tabset>\n    </div><!--/.col-->\n  </div><!--/.row-->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/tooltips.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/tooltips.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Bootstrap Tooltips\n      <div class=\"card-header-actions\">\n        <a href=\"https://valor-software.com/ngx-bootstrap/#/tooltip\" target=\"_blank\">\n          <small className=\"text-muted\">docs</small>\n        </a>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-primary\"\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n        Simple demo\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Tooltips <small>positioning</small>\n    </div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              placement=\"top\">\n        Tooltip on top\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              placement=\"right\">\n        Tooltip on right\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              placement=\"auto\">\n        Tooltip auto\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              placement=\"left\">\n        Tooltip on left\n      </button>\n\n      <button type=\"button\" class=\"btn btn-default btn-secondary\"\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              placement=\"bottom\">\n        Tooltip on bottom\n      </button>\n    </div>\n</div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Tooltips <small>dismissible</small>\n    </div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-success\"\n              tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n              triggers=\"focus\">\n        Dismissible tooltip\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Tooltips <small>dynamic content</small>\n    </div>\n    <div class=\"card-body\">\n      <button type=\"button\" class=\"btn btn-info\" [tooltip]=\"content\">\n        Simple binding\n      </button>\n\n      <ng-template #tolTemplate>Just another: {{content}}</ng-template>\n      <button type=\"button\" class=\"btn btn-warning\" [tooltip]=\"tolTemplate\">\n        TemplateRef binding\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Tooltips <small>dynamic html</small>\n    </div>\n    <div class=\"card-body\">\n      <ng-template #popTemplate>Here we go: <div [innerHtml]=\"html\"></div></ng-template>\n      <button type=\"button\" class=\"btn btn-success\"\n              [tooltip]=\"popTemplate\">\n        Show me tooltip with html\n      </button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Tooltips <small>append to <code>body</code></small>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\" style=\"position: relative; overflow: hidden; padding-top: 10px;\">\n        <div class=\"col-xs-12 col-12\">\n          <button type=\"button\" class=\"btn btn-danger\"\n                  tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n            Default tooltip\n          </button>\n          <button type=\"button\" class=\"btn btn-success\"\n                  tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n                  container=\"body\">\n            Tooltip appended to body\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Tooltips <small>custom triggers</small>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-6\">\n          <p>Desktop</p>\n          <button type=\"button\" class=\"btn btn-info\"\n                  tooltip=\"I will hide on click\"\n                  triggers=\"mouseenter:click\">\n            Hover over me!\n          </button>\n        </div>\n\n        <div class=\"col-xs-6 col-6\">\n          <p>Mobile</p>\n          <button type=\"button\" class=\"btn btn-info\"\n                  tooltip=\"I will hide on click\"\n                  triggers=\"click\">\n            Click on me!\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Tooltips <small>manual triggers</small>\n    </div>\n    <div class=\"card-body\">\n      <p>\n  <span tooltip=\"Hello there! I was triggered manually\"\n        triggers=\"\" #pop=\"bs-tooltip\">\n  This text has attached tooltip\n  </span>\n      </p>\n\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"pop.show()\">\n        Show\n      </button>\n      <button type=\"button\" class=\"btn btn-warning\" (click)=\"pop.hide()\">\n        Hide\n      </button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/views/base/base-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/base/base-routing.module.ts ***!
  \***************************************************/
/*! exports provided: BaseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRoutingModule", function() { return BaseRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cards.component */ "./src/app/views/base/cards.component.ts");
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms.component */ "./src/app/views/base/forms.component.ts");
/* harmony import */ var _switches_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./switches.component */ "./src/app/views/base/switches.component.ts");
/* harmony import */ var _tables_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tables.component */ "./src/app/views/base/tables.component.ts");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs.component */ "./src/app/views/base/tabs.component.ts");
/* harmony import */ var _carousels_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./carousels.component */ "./src/app/views/base/carousels.component.ts");
/* harmony import */ var _collapses_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./collapses.component */ "./src/app/views/base/collapses.component.ts");
/* harmony import */ var _paginations_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./paginations.component */ "./src/app/views/base/paginations.component.ts");
/* harmony import */ var _popovers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./popovers.component */ "./src/app/views/base/popovers.component.ts");
/* harmony import */ var _progress_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./progress.component */ "./src/app/views/base/progress.component.ts");
/* harmony import */ var _tooltips_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tooltips.component */ "./src/app/views/base/tooltips.component.ts");
/* harmony import */ var _navbars_navbars_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navbars/navbars.component */ "./src/app/views/base/navbars/navbars.component.ts");















var routes = [
    {
        path: '',
        data: {
            title: 'Base'
        },
        children: [
            {
                path: '',
                redirectTo: 'cards'
            },
            {
                path: 'cards',
                component: _cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsComponent"],
                data: {
                    title: 'Cards'
                }
            },
            {
                path: 'forms',
                component: _forms_component__WEBPACK_IMPORTED_MODULE_4__["FormsComponent"],
                data: {
                    title: 'Forms'
                }
            },
            {
                path: 'switches',
                component: _switches_component__WEBPACK_IMPORTED_MODULE_5__["SwitchesComponent"],
                data: {
                    title: 'Switches'
                }
            },
            {
                path: 'tables',
                component: _tables_component__WEBPACK_IMPORTED_MODULE_6__["TablesComponent"],
                data: {
                    title: 'Tables'
                }
            },
            {
                path: 'tabs',
                component: _tabs_component__WEBPACK_IMPORTED_MODULE_7__["TabsComponent"],
                data: {
                    title: 'Tabs'
                }
            },
            {
                path: 'carousels',
                component: _carousels_component__WEBPACK_IMPORTED_MODULE_8__["CarouselsComponent"],
                data: {
                    title: 'Carousels'
                }
            },
            {
                path: 'collapses',
                component: _collapses_component__WEBPACK_IMPORTED_MODULE_9__["CollapsesComponent"],
                data: {
                    title: 'Collapses'
                }
            },
            {
                path: 'paginations',
                component: _paginations_component__WEBPACK_IMPORTED_MODULE_10__["PaginationsComponent"],
                data: {
                    title: 'Pagination'
                }
            },
            {
                path: 'popovers',
                component: _popovers_component__WEBPACK_IMPORTED_MODULE_11__["PopoversComponent"],
                data: {
                    title: 'Popover'
                }
            },
            {
                path: 'progress',
                component: _progress_component__WEBPACK_IMPORTED_MODULE_12__["ProgressComponent"],
                data: {
                    title: 'Progress'
                }
            },
            {
                path: 'tooltips',
                component: _tooltips_component__WEBPACK_IMPORTED_MODULE_13__["TooltipsComponent"],
                data: {
                    title: 'Tooltips'
                }
            },
            {
                path: 'navbars',
                component: _navbars_navbars_component__WEBPACK_IMPORTED_MODULE_14__["NavbarsComponent"],
                data: {
                    title: 'Navbars'
                }
            }
        ]
    }
];
var BaseRoutingModule = /** @class */ (function () {
    function BaseRoutingModule() {
    }
    BaseRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BaseRoutingModule);
    return BaseRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/base/base.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/base/base.module.ts ***!
  \*******************************************/
/*! exports provided: BaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModule", function() { return BaseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _cards_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cards.component */ "./src/app/views/base/cards.component.ts");
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms.component */ "./src/app/views/base/forms.component.ts");
/* harmony import */ var _switches_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./switches.component */ "./src/app/views/base/switches.component.ts");
/* harmony import */ var _tables_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tables.component */ "./src/app/views/base/tables.component.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm2015/ngx-bootstrap-tabs.js");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabs.component */ "./src/app/views/base/tabs.component.ts");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var _carousels_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./carousels.component */ "./src/app/views/base/carousels.component.ts");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm2015/ngx-bootstrap-collapse.js");
/* harmony import */ var _collapses_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./collapses.component */ "./src/app/views/base/collapses.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm2015/ngx-bootstrap-pagination.js");
/* harmony import */ var _popovers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./popovers.component */ "./src/app/views/base/popovers.component.ts");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/popover/fesm2015/ngx-bootstrap-popover.js");
/* harmony import */ var _paginations_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./paginations.component */ "./src/app/views/base/paginations.component.ts");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm2015/ngx-bootstrap-progressbar.js");
/* harmony import */ var _progress_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./progress.component */ "./src/app/views/base/progress.component.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var _tooltips_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tooltips.component */ "./src/app/views/base/tooltips.component.ts");
/* harmony import */ var _navbars_navbars_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./navbars/navbars.component */ "./src/app/views/base/navbars/navbars.component.ts");
/* harmony import */ var _base_routing_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./base-routing.module */ "./src/app/views/base/base-routing.module.ts");

// Angular




// Forms Component



// Tabs Component


// Carousel Component


// Collapse Component


// Dropdowns Component

// Pagination Component


// Popover Component


// Progress Component


// Tooltip Component


// navbars

// Components Routing

var BaseModule = /** @class */ (function () {
    function BaseModule() {
    }
    BaseModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _base_routing_module__WEBPACK_IMPORTED_MODULE_24__["BaseRoutingModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_14__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_12__["CollapseModule"].forRoot(),
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__["PaginationModule"].forRoot(),
                ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_17__["PopoverModule"].forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_19__["ProgressbarModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_21__["TooltipModule"].forRoot()
            ],
            declarations: [
                _cards_component__WEBPACK_IMPORTED_MODULE_4__["CardsComponent"],
                _forms_component__WEBPACK_IMPORTED_MODULE_5__["FormsComponent"],
                _switches_component__WEBPACK_IMPORTED_MODULE_6__["SwitchesComponent"],
                _tables_component__WEBPACK_IMPORTED_MODULE_7__["TablesComponent"],
                _tabs_component__WEBPACK_IMPORTED_MODULE_9__["TabsComponent"],
                _carousels_component__WEBPACK_IMPORTED_MODULE_11__["CarouselsComponent"],
                _collapses_component__WEBPACK_IMPORTED_MODULE_13__["CollapsesComponent"],
                _paginations_component__WEBPACK_IMPORTED_MODULE_18__["PaginationsComponent"],
                _popovers_component__WEBPACK_IMPORTED_MODULE_16__["PopoversComponent"],
                _progress_component__WEBPACK_IMPORTED_MODULE_20__["ProgressComponent"],
                _tooltips_component__WEBPACK_IMPORTED_MODULE_22__["TooltipsComponent"],
                _navbars_navbars_component__WEBPACK_IMPORTED_MODULE_23__["NavbarsComponent"]
            ]
        })
    ], BaseModule);
    return BaseModule;
}());



/***/ }),

/***/ "./src/app/views/base/cards.component.ts":
/*!***********************************************!*\
  !*** ./src/app/views/base/cards.component.ts ***!
  \***********************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
    }
    CardsComponent.ctorParameters = function () { return []; };
    CardsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/cards.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/views/base/carousels.component.ts":
/*!***************************************************!*\
  !*** ./src/app/views/base/carousels.component.ts ***!
  \***************************************************/
/*! exports provided: CarouselsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselsComponent", function() { return CarouselsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm2015/ngx-bootstrap-carousel.js");



var CarouselsComponent = /** @class */ (function () {
    function CarouselsComponent() {
        this.myInterval = 6000;
        this.slides = [];
        this.activeSlideIndex = 0;
        this.noWrapSlides = false;
        for (var i = 0; i < 4; i++) {
            this.addSlide();
        }
    }
    CarouselsComponent.prototype.ngOnDestroy = function () {
        this.myInterval = 0;
        this.noWrapSlides = true;
        this.myInterval = false;
    };
    CarouselsComponent.prototype.addSlide = function () {
        var _this = this;
        setTimeout(function () {
            var seed = Math.random().toString(36).slice(-6);
            _this.slides.push({
                image: "https://picsum.photos/seed/" + seed + "/900/500"
            });
        }, 500);
    };
    CarouselsComponent.prototype.removeSlide = function (index) {
        var toRemove = index ? index : this.activeSlideIndex;
        this.slides.splice(toRemove, 1);
    };
    CarouselsComponent.ctorParameters = function () { return []; };
    CarouselsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carousels.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/carousels.component.html")).default,
            providers: [
                { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselConfig"], useValue: { interval: 1500, noPause: false } },
            ]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CarouselsComponent);
    return CarouselsComponent;
}());



/***/ }),

/***/ "./src/app/views/base/collapses.component.ts":
/*!***************************************************!*\
  !*** ./src/app/views/base/collapses.component.ts ***!
  \***************************************************/
/*! exports provided: CollapsesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsesComponent", function() { return CollapsesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var CollapsesComponent = /** @class */ (function () {
    function CollapsesComponent() {
        this.isCollapsed = false;
    }
    CollapsesComponent.prototype.collapsed = function (event) {
        // console.log(event);
    };
    CollapsesComponent.prototype.expanded = function (event) {
        // console.log(event);
    };
    CollapsesComponent.ctorParameters = function () { return []; };
    CollapsesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./collapses.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/collapses.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CollapsesComponent);
    return CollapsesComponent;
}());



/***/ }),

/***/ "./src/app/views/base/forms.component.ts":
/*!***********************************************!*\
  !*** ./src/app/views/base/forms.component.ts ***!
  \***********************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
        this.isCollapsed = false;
        this.iconCollapse = 'icon-arrow-up';
    }
    FormsComponent.prototype.collapsed = function (event) {
        // console.log(event);
    };
    FormsComponent.prototype.expanded = function (event) {
        // console.log(event);
    };
    FormsComponent.prototype.toggleCollapse = function () {
        this.isCollapsed = !this.isCollapsed;
        this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
    };
    FormsComponent.ctorParameters = function () { return []; };
    FormsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/forms.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/views/base/navbars/navbars.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/base/navbars/navbars.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Jhc2UvbmF2YmFycy9uYXZiYXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/base/navbars/navbars.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/base/navbars/navbars.component.ts ***!
  \*********************************************************/
/*! exports provided: NavbarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarsComponent", function() { return NavbarsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm2015/ngx-bootstrap-collapse.js");



var NavbarsComponent = /** @class */ (function () {
    function NavbarsComponent(renderer) {
        this.renderer = renderer;
        this._isCollapsed = true;
    }
    Object.defineProperty(NavbarsComponent.prototype, "isCollapsed", {
        get: function () {
            if (this.collapseRef) {
                // temp fix for "overflow: hidden"
                if (getComputedStyle(this.collapseRef.nativeElement).getPropertyValue('display') === 'flex') {
                    this.renderer.removeStyle(this.collapseRef.nativeElement, 'overflow');
                }
            }
            return this._isCollapsed;
        },
        set: function (value) {
            this._isCollapsed = value;
        },
        enumerable: false,
        configurable: true
    });
    NavbarsComponent.prototype.ngOnInit = function () { };
    NavbarsComponent.prototype.ngAfterViewChecked = function () {
        this.collapseRef = this.collapse;
    };
    NavbarsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    NavbarsComponent.propDecorators = {
        collapse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_2__["CollapseDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false },] }]
    };
    NavbarsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbars',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./navbars.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/navbars/navbars.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./navbars.component.css */ "./src/app/views/base/navbars/navbars.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], NavbarsComponent);
    return NavbarsComponent;
}());



/***/ }),

/***/ "./src/app/views/base/paginations.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/base/paginations.component.ts ***!
  \*****************************************************/
/*! exports provided: PaginationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationsComponent", function() { return PaginationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var PaginationsComponent = /** @class */ (function () {
    function PaginationsComponent() {
        this.totalItems = 64;
        this.currentPage = 4;
        this.smallnumPages = 0;
        this.maxSize = 5;
        this.bigTotalItems = 675;
        this.bigCurrentPage = 1;
        this.numPages = 0;
        this.currentPager = 4;
    }
    PaginationsComponent.prototype.setPage = function (pageNo) {
        this.currentPage = pageNo;
    };
    PaginationsComponent.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
    PaginationsComponent.ctorParameters = function () { return []; };
    PaginationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./paginations.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/paginations.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [".pager li.btn:active { box-shadow: none; }"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], PaginationsComponent);
    return PaginationsComponent;
}());



/***/ }),

/***/ "./src/app/views/base/popovers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/base/popovers.component.ts ***!
  \**************************************************/
/*! exports provided: PopoversComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoversComponent", function() { return PopoversComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



var PopoversComponent = /** @class */ (function () {
    function PopoversComponent(sanitizer) {
        this.title = 'Welcome word';
        this.content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
        this.html = "<span class=\"btn btn-warning\">Never trust not sanitized <code>HTML</code>!!!</span>";
        this.html = sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, this.html);
    }
    PopoversComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    PopoversComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./popovers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/popovers.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], PopoversComponent);
    return PopoversComponent;
}());



/***/ }),

/***/ "./src/app/views/base/progress.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/base/progress.component.ts ***!
  \**************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var ProgressComponent = /** @class */ (function () {
    function ProgressComponent() {
        this.max = 200;
        this.stacked = [];
        this.timer = null;
        this.buttonCaption = 'Start';
        this.random();
        this.randomStacked();
    }
    ProgressComponent.prototype.ngOnDestroy = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
        // console.log(`onDestroy`, this.timer);
    };
    ProgressComponent.prototype.random = function () {
        var value = Math.floor(Math.random() * 100 + 1);
        var type;
        if (value < 25) {
            type = 'success';
        }
        else if (value < 50) {
            type = 'info';
        }
        else if (value < 75) {
            type = 'warning';
        }
        else {
            type = 'danger';
        }
        this.showWarning = type === 'danger' || type === 'warning';
        this.dynamic = value;
        this.type = type;
    };
    ProgressComponent.prototype.randomStacked = function () {
        var types = ['success', 'info', 'warning', 'danger'];
        this.stacked = [];
        var n = Math.floor(Math.random() * 4 + 1);
        for (var i = 0; i < n; i++) {
            var index = Math.floor(Math.random() * 4);
            var value = Math.floor(Math.random() * 27 + 3);
            this.stacked.push({
                value: value,
                type: types[index],
                label: value + ' %'
            });
        }
    };
    ProgressComponent.prototype.randomize = function () {
        var _this = this;
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        else {
            this.timer = setInterval(function () { return _this.randomStacked(); }, 2000);
        }
        this.buttonCaption = this.timer ? 'Stop' : 'Start';
    };
    ProgressComponent.ctorParameters = function () { return []; };
    ProgressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./progress.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/progress.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./src/app/views/base/switches.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/base/switches.component.ts ***!
  \**************************************************/
/*! exports provided: SwitchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchesComponent", function() { return SwitchesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var SwitchesComponent = /** @class */ (function () {
    function SwitchesComponent() {
    }
    SwitchesComponent.ctorParameters = function () { return []; };
    SwitchesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./switches.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/switches.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SwitchesComponent);
    return SwitchesComponent;
}());



/***/ }),

/***/ "./src/app/views/base/tables.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/base/tables.component.ts ***!
  \************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var TablesComponent = /** @class */ (function () {
    function TablesComponent() {
    }
    TablesComponent.ctorParameters = function () { return []; };
    TablesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tables.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/tables.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TablesComponent);
    return TablesComponent;
}());



/***/ }),

/***/ "./src/app/views/base/tabs.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/base/tabs.component.ts ***!
  \**********************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent.ctorParameters = function () { return []; };
    TabsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/tabs.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/views/base/tooltips.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/base/tooltips.component.ts ***!
  \**************************************************/
/*! exports provided: TooltipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipsComponent", function() { return TooltipsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



var TooltipsComponent = /** @class */ (function () {
    function TooltipsComponent(sanitizer) {
        this.content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
        this.html = "<span class=\"btn btn-danger\">Never trust not sanitized HTML!!!</span>";
        this.html = sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, this.html);
    }
    TooltipsComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    TooltipsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tooltips.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/base/tooltips.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], TooltipsComponent);
    return TooltipsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-base-base-module.js.map