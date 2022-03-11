(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap);", ""]);

// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _pages_People__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/People */ "./src/pages/People.jsx");
/* harmony import */ var _pages_Ingredientes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Ingredientes */ "./src/pages/Ingredientes.jsx");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/brm13769/Documentos/React/proyecto/src/App.jsx";






function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "margen",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Routes"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/people",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_pages_People__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 49
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/ingredientes",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_pages_Ingredientes__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 55
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Loading.jsx":
/*!************************************!*\
  !*** ./src/components/Loading.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/brm13769/Documentos/React/proyecto/src/components/Loading.jsx";


function Loading() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-center w-full h-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-center items-center space-x-1 text-sm text-gray-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    fill: "none",
    className: "w-6 h-6 animate-spin",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    clipRule: "evenodd",
    d: "M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",
    fill: "currentColor",
    fillRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Loading ...")));
}

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons */ "./node_modules/react-icons/lib/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/home/brm13769/Documentos/React/proyecto/src/components/Navbar.js";






var Navbar = function Navbar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "navbar-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_0__["IoMdWine"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/vasos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, "Tipo de Vasos")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "navbar-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_0__["IoMdWine"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/ingredientes",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, "Ingredientes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "navbar-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_0__["IoMdWine"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/people",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, "People")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/config.json":
/*!*************************!*\
  !*** ./src/config.json ***!
  \*************************/
/*! exports provided: baseUrl, default */
/***/ (function(module) {

module.exports = {"baseUrl":"https://ghibliapi.herokuapp.com/"};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.jsx");
var _jsxFileName = "/home/brm13769/Documentos/React/proyecto/src/index.jsx";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
})), document.getElementById("root"));

/***/ }),

/***/ "./src/pages/Ingredientes.jsx":
/*!************************************!*\
  !*** ./src/pages/Ingredientes.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/home/brm13769/Documentos/React/proyecto/src/pages/Ingredientes.jsx";



var Ingredientes = function Ingredientes() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, "Ingredientes");
};

/* harmony default export */ __webpack_exports__["default"] = (Ingredientes);

/***/ }),

/***/ "./src/pages/People.jsx":
/*!******************************!*\
  !*** ./src/pages/People.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Wraped; });
/* harmony import */ var _home_brm13769_Documentos_React_proyecto_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_brm13769_Documentos_React_proyecto_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_brm13769_Documentos_React_proyecto_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_brm13769_Documentos_React_proyecto_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_brm13769_Documentos_React_proyecto_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _components_Loading_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Loading.jsx */ "./src/components/Loading.jsx");
/* harmony import */ var _store_httpService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/httpService */ "./src/store/httpService.js");



var _jsxFileName = "/home/brm13769/Documentos/React/proyecto/src/pages/People.jsx";






var queryPeople = new react_query__WEBPACK_IMPORTED_MODULE_5__["QueryClient"]();

function People() {
  var _this = this;

  var navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useNavigate"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState2 = Object(_home_brm13769_Documentos_React_proyecto_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      people = _useState2[0],
      setPeople = _useState2[1];

  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_5__["useQuery"])('getPeople', /*#__PURE__*/Object(_home_brm13769_Documentos_React_proyecto_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_brm13769_Documentos_React_proyecto_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var _yield$http$get, _data;

    return _home_brm13769_Documentos_React_proyecto_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _store_httpService__WEBPACK_IMPORTED_MODULE_7__["default"].get('people');

          case 3:
            _yield$http$get = _context.sent;
            _data = _yield$http$get.data;
            return _context.abrupt("return", _data);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);

            if (_context.t0.response && _context.t0.response.status === 404) {
              navigate('/not-found');
            }

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }))),
      isLoading = _useQuery.isLoading,
      data = _useQuery.data;

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (data) {
      setPeople(data);
      console.log(data);
    }
  }, [data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "container mt-5",
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "Lista de Postres"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "py-16 px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Loading_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "pt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("table", {
    className: "table table-bordered",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("thead", {
    className: "thead-dark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 23
    }
  }, "Nombre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 23
    }
  }, "Genero"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 23
    }
  }, "Edad"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }, people.map(function (people) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
      key: people.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 27
      }
    }, people.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 27
      }
    }, people.gender), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 27
      }
    }, people.age));
  }))))))));
}

function Wraped() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_query__WEBPACK_IMPORTED_MODULE_5__["QueryClientProvider"], {
    client: queryPeople,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(People, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/store/httpService.js":
/*!**********************************!*\
  !*** ./src/store/httpService.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logService */ "./src/store/logService.js");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.json */ "./src/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config.json */ "./src/config.json", 1);



var instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: _config_json__WEBPACK_IMPORTED_MODULE_2__.baseUrl
});
instance.interceptors.response.use(null, function (error) {
  var expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

  if (!expectedError) {
    _logService__WEBPACK_IMPORTED_MODULE_1__["default"].log(error);
    alert('An unexpected error occurrred.');
  }

  return Promise.reject(error);
});
/* harmony default export */ __webpack_exports__["default"] = ({
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete
});

/***/ }),

/***/ "./src/store/logService.js":
/*!*********************************!*\
  !*** ./src/store/logService.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function log(error) {
  console.error(error);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  log: log
});

/***/ }),

/***/ 0:
/*!***********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.jsx ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/brm13769/Documentos/React/proyecto/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/brm13769/Documentos/React/proyecto/src/index.jsx */"./src/index.jsx");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map