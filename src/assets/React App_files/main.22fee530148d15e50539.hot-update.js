webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.22fee530148d15e50539.hot-update.js.map