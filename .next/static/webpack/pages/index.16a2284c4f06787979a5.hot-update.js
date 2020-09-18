webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/api */ "./pages/api.js");

var _jsxFileName = "C:\\xampp\\htdocs\\Meus_Projetos\\tutorial-react-next\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class App extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      artigos: []
    });
  }

  async componentDidMount() {
    const response = await _pages_api__WEBPACK_IMPORTED_MODULE_2__["default"].get('/artigo');
    this.setState({
      artigos: response.data
    });
  }

  render() {
    const {
      artigos
    } = this.state;
    console.log(artigos);
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }
    }, __jsx("style", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }
    }), __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }, "Lista de Artigos"), __jsx("div", {
      className: "conteudo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, __jsx("ul", {
      style: {
        listStyleType: "none"
      },
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }, artigos.map(artigo => __jsx("li", {
      key: artigo._id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 15
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }, "Titulo: ", artigo.titulo), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }, artigo.conteudo))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwiYXJ0aWdvcyIsImNvbXBvbmVudERpZE1vdW50IiwicmVzcG9uc2UiLCJhcGkiLCJnZXQiLCJzZXRTdGF0ZSIsImRhdGEiLCJyZW5kZXIiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJsaXN0U3R5bGVUeXBlIiwibWFwIiwiYXJ0aWdvIiwiX2lkIiwidGl0dWxvIiwiY29udGV1ZG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsTUFBTUEsR0FBTixTQUFrQkMsK0NBQWxCLENBQTJCO0FBQUE7QUFBQTs7QUFBQSw2R0FDakI7QUFDTkMsYUFBTyxFQUFHO0FBREosS0FEaUI7QUFBQTs7QUFJekIsUUFBTUMsaUJBQU4sR0FBeUI7QUFDdkIsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLGtEQUFHLENBQUNDLEdBQUosQ0FBUSxTQUFSLENBQXZCO0FBQ0EsU0FBS0MsUUFBTCxDQUFjO0FBQUNMLGFBQU8sRUFBQ0UsUUFBUSxDQUFDSTtBQUFsQixLQUFkO0FBQ0Q7O0FBQ0RDLFFBQU0sR0FBRTtBQUNOLFVBQU07QUFBQ1A7QUFBRCxRQUFZLEtBQUtRLEtBQXZCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVixPQUFaO0FBQ0EsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFKRixFQUtFO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUksV0FBSyxFQUFFO0FBQUNXLHFCQUFhLEVBQUM7QUFBZixPQUFYO0FBQW1DLGVBQVMsRUFBQyxXQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dYLE9BQU8sQ0FBQ1ksR0FBUixDQUFZQyxNQUFNLElBQ2pCO0FBQUksU0FBRyxFQUFFQSxNQUFNLENBQUNDLEdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFhRCxNQUFNLENBQUNFLE1BQXBCLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlGLE1BQU0sQ0FBQ0csUUFBWCxDQUZGLENBREQsQ0FESCxDQURGLENBTEYsQ0FERjtBQWtCRDs7QUE3QndCOztBQWdDWmxCLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE2YTIyODRjNGYwNjc4Nzk3OWE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IGFwaSBmcm9tICcuLi9wYWdlcy9hcGknO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gIHN0YXRlID0ge1xyXG4gICAgYXJ0aWdvcyA6IFtdLFxyXG4gIH1cclxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KCcvYXJ0aWdvJyk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHthcnRpZ29zOnJlc3BvbnNlLmRhdGF9KVxyXG4gIH1cclxuICByZW5kZXIoKXtcclxuICAgIGNvbnN0IHthcnRpZ29zfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zb2xlLmxvZyhhcnRpZ29zKTtcclxuICAgIHJldHVybihcclxuICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPGgxPkxpc3RhIGRlIEFydGlnb3M8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGV1ZG9cIj5cclxuICAgICAgICAgIDx1bCBzdHlsZT17e2xpc3RTdHlsZVR5cGU6XCJub25lXCJ9fSBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAge2FydGlnb3MubWFwKGFydGlnbyA9PihcclxuICAgICAgICAgICAgICA8bGkga2V5PXthcnRpZ28uX2lkfT5cclxuICAgICAgICAgICAgICAgIDxoMj5UaXR1bG86IHthcnRpZ28udGl0dWxvfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD57YXJ0aWdvLmNvbnRldWRvfTwvcD5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9