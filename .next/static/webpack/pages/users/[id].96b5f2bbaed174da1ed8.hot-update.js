webpackHotUpdate_N_E("pages/users/[id]",{

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return User; });\n/* harmony import */ var _Users_federico_Documents_apps_nextjs_tailwind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_federico_Documents_apps_nextjs_tailwind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_federico_Documents_apps_nextjs_tailwind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_federico_Documents_apps_nextjs_tailwind_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_postCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/postCard */ \"./components/postCard.js\");\n\n\n\nvar _jsxFileName = \"/Users/federico/Documents/apps/nextjs-tailwind/pages/users/[id].js\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\nfunction User(_ref) {\n  _s();\n\n  var _this = this;\n\n  var user = _ref.user;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      posts = _useState[0],\n      setPosts = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var fetchData = /*#__PURE__*/function () {\n    var _ref2 = Object(_Users_federico_Documents_apps_nextjs_tailwind_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_federico_Documents_apps_nextjs_tailwind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _Users_federico_Documents_apps_nextjs_tailwind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(\"https://jsonplaceholder.typicode.com/posts?userId=\".concat(user.id));\n\n            case 2:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchData() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    fetchData().then(function (res) {\n      setLoading(true);\n      res.json().then(function (res) {\n        setPosts(res);\n        setLoading(false);\n      });\n    });\n  }, []);\n  console.log(loading);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, \"User #\", user.id)), __jsx(\"div\", {\n    className: \"jsx-1404897129\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-1404897129\" + \" \" + \"w-36 m-auto flex justify-center mt-2 mb-12 bg-gray-30 rounded-xl cursor-pointer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/users\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-1404897129\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, \"Back to users\"))), __jsx(\"h1\", {\n    className: \"jsx-1404897129\" + \" \" + \"text-2xl text-center text-black\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, user.name), __jsx(\"h4\", {\n    className: \"jsx-1404897129\" + \" \" + \"text-base text-center text-black\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, user.email), __jsx(\"h4\", {\n    className: \"jsx-1404897129\" + \" \" + \"text-base text-center text-black\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, user.company.name), __jsx(\"h4\", {\n    className: \"jsx-1404897129\" + \" \" + \"text-xl mt-6 text-center text-black\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, \"Posts: \", loading ? \"Loading\" : posts.length), __jsx(\"div\", {\n    className: \"jsx-1404897129\" + \" \" + \"grid grid-template-columns gap-x-6 p-16\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, posts.map(function (post) {\n    return __jsx(_components_postCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      key: post.id,\n      post: post,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 13\n      }\n    });\n  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    id: \"1404897129\",\n    __self: this\n  }, \".grid-template-columns.jsx-1404897129{grid-template-columns:repeat(auto-fill,minmax(250px,1fr));}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWRlcmljby9Eb2N1bWVudHMvYXBwcy9uZXh0anMtdGFpbHdpbmQvcGFnZXMvdXNlcnMvW2lkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRG9CLEFBR3lFLDBEQUM5RCIsImZpbGUiOiIvVXNlcnMvZmVkZXJpY28vRG9jdW1lbnRzL2FwcHMvbmV4dGpzLXRhaWx3aW5kL3BhZ2VzL3VzZXJzL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9zdENhcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcih7IHVzZXIgfSkge1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+XG4gICAgYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cz91c2VySWQ9JHt1c2VyLmlkfWApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hEYXRhKCkudGhlbigocmVzKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgcmVzLmpzb24oKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0UG9zdHMocmVzKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnNvbGUubG9nKGxvYWRpbmcpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VXNlciAje3VzZXIuaWR9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zNiBtLWF1dG8gZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0yIG1iLTEyIGJnLWdyYXktMzAgcm91bmRlZC14bCBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlcnNcIj5cbiAgICAgICAgICAgIDxhPkJhY2sgdG8gdXNlcnM8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtY2VudGVyIHRleHQtYmxhY2tcIj57dXNlci5uYW1lfTwvaDE+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1jZW50ZXIgdGV4dC1ibGFja1wiPnt1c2VyLmVtYWlsfTwvaDQ+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1jZW50ZXIgdGV4dC1ibGFja1wiPlxuICAgICAgICAgIHt1c2VyLmNvbXBhbnkubmFtZX1cbiAgICAgICAgPC9oND5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQteGwgbXQtNiB0ZXh0LWNlbnRlciB0ZXh0LWJsYWNrXCI+XG4gICAgICAgICAgUG9zdHM6IHtsb2FkaW5nID8gXCJMb2FkaW5nXCIgOiBwb3N0cy5sZW5ndGh9XG4gICAgICAgIDwvaDQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLXRlbXBsYXRlLWNvbHVtbnMgZ2FwLXgtNiBwLTE2XCI+XG4gICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zIHtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5Vc2VyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IChcbiAgICAgIGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzLyR7Y29udGV4dC5xdWVyeS5pZH1gXG4gICAgICApXG4gICAgKS5qc29uKCk7XG5cbiAgICByZXR1cm4geyB1c2VyIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7fVxufTtcbiJdfQ== */\\n/*@ sourceURL=/Users/federico/Documents/apps/nextjs-tailwind/pages/users/[id].js */\")));\n}\n\n_s(User, \"B1HzkMAPjjnIS0Dl8KHRKFHtmnE=\");\n\n_c = User;\n\nUser.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = Object(_Users_federico_Documents_apps_nextjs_tailwind_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_federico_Documents_apps_nextjs_tailwind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(context) {\n    var user;\n    return _Users_federico_Documents_apps_nextjs_tailwind_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return fetch(\"https://jsonplaceholder.typicode.com/users/\".concat(context.query.id));\n\n          case 3:\n            _context2.next = 5;\n            return _context2.sent.json();\n\n          case 5:\n            user = _context2.sent;\n            return _context2.abrupt(\"return\", {\n              user: user\n            });\n\n          case 9:\n            _context2.prev = 9;\n            _context2.t0 = _context2[\"catch\"](0);\n\n          case 11:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 9]]);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\nvar _c;\n\n$RefreshReg$(_c, \"User\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvLmpzPzJjZWIiXSwibmFtZXMiOlsiVXNlciIsInVzZXIiLCJ1c2VTdGF0ZSIsInBvc3RzIiwic2V0UG9zdHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoRGF0YSIsImZldGNoIiwiaWQiLCJ1c2VFZmZlY3QiLCJ0aGVuIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiZW1haWwiLCJjb21wYW55IiwibGVuZ3RoIiwibWFwIiwicG9zdCIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsT0FBd0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUEsa0JBQ1hDLHNEQUFRLENBQUMsRUFBRCxDQURHO0FBQUEsTUFDOUJDLEtBRDhCO0FBQUEsTUFDdkJDLFFBRHVCOztBQUFBLG1CQUVQRixzREFBUSxDQUFDLEtBQUQsQ0FGRDtBQUFBLE1BRTlCRyxPQUY4QjtBQUFBLE1BRXJCQyxVQUZxQjs7QUFJckMsTUFBTUMsU0FBUztBQUFBLHVUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNWQyxLQUFLLDZEQUFzRFAsSUFBSSxDQUFDUSxFQUEzRCxFQURLOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVEYsU0FBUztBQUFBO0FBQUE7QUFBQSxLQUFmOztBQUdBRyx5REFBUyxDQUFDLFlBQU07QUFDZEgsYUFBUyxHQUFHSSxJQUFaLENBQWlCLFVBQUNDLEdBQUQsRUFBUztBQUN4Qk4sZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDQU0sU0FBRyxDQUFDQyxJQUFKLEdBQVdGLElBQVgsQ0FBZ0IsVUFBQ0MsR0FBRCxFQUFTO0FBQ3ZCUixnQkFBUSxDQUFDUSxHQUFELENBQVI7QUFDQU4sa0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxPQUhEO0FBSUQsS0FORDtBQU9ELEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQVEsU0FBTyxDQUFDQyxHQUFSLENBQVlWLE9BQVo7QUFFQSxTQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBY0osSUFBSSxDQUFDUSxFQUFuQixDQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLGlGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixDQURGLENBREYsRUFNRTtBQUFBLHdDQUFjLGlDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaURSLElBQUksQ0FBQ2UsSUFBdEQsQ0FORixFQU9FO0FBQUEsd0NBQWMsa0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrRGYsSUFBSSxDQUFDZ0IsS0FBdkQsQ0FQRixFQVFFO0FBQUEsd0NBQWMsa0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHaEIsSUFBSSxDQUFDaUIsT0FBTCxDQUFhRixJQURoQixDQVJGLEVBV0U7QUFBQSx3Q0FBYyxxQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUNVWCxPQUFPLEdBQUcsU0FBSCxHQUFlRixLQUFLLENBQUNnQixNQUR0QyxDQVhGLEVBY0U7QUFBQSx3Q0FBZSx5Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0doQixLQUFLLENBQUNpQixHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLFdBQ1QsTUFBQyw0REFBRDtBQUFVLFNBQUcsRUFBRUEsSUFBSSxDQUFDWixFQUFwQjtBQUF3QixVQUFJLEVBQUVZLElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEUztBQUFBLEdBQVYsQ0FESCxDQWRGO0FBQUE7QUFBQTtBQUFBLG9xR0FKRixDQURGO0FBZ0NEOztHQW5EdUJyQixJOztLQUFBQSxJOztBQXFEeEJBLElBQUksQ0FBQ3NCLGVBQUw7QUFBQSxxVEFBdUIsa0JBQU9DLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUdYZixLQUFLLHNEQUNxQ2UsT0FBTyxDQUFDQyxLQUFSLENBQWNmLEVBRG5ELEVBSE07O0FBQUE7QUFBQTtBQUFBLGtDQU1qQkksSUFOaUI7O0FBQUE7QUFFYlosZ0JBRmE7QUFBQSw4Q0FRWjtBQUFFQSxrQkFBSSxFQUFKQTtBQUFGLGFBUlk7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXZCOztBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vcGFnZXMvdXNlcnMvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wb3N0Q2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyKHsgdXNlciB9KSB7XG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT5cbiAgICBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzP3VzZXJJZD0ke3VzZXIuaWR9YCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaERhdGEoKS50aGVuKChyZXMpID0+IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICByZXMuanNvbigpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXRQb3N0cyhyZXMpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc29sZS5sb2cobG9hZGluZyk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Vc2VyICN7dXNlci5pZH08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTM2IG0tYXV0byBmbGV4IGp1c3RpZnktY2VudGVyIG10LTIgbWItMTIgYmctZ3JheS0zMCByb3VuZGVkLXhsIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi91c2Vyc1wiPlxuICAgICAgICAgICAgPGE+QmFjayB0byB1c2VyczwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1jZW50ZXIgdGV4dC1ibGFja1wiPnt1c2VyLm5hbWV9PC9oMT5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LWNlbnRlciB0ZXh0LWJsYWNrXCI+e3VzZXIuZW1haWx9PC9oND5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LWNlbnRlciB0ZXh0LWJsYWNrXCI+XG4gICAgICAgICAge3VzZXIuY29tcGFueS5uYW1lfVxuICAgICAgICA8L2g0PlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC14bCBtdC02IHRleHQtY2VudGVyIHRleHQtYmxhY2tcIj5cbiAgICAgICAgICBQb3N0czoge2xvYWRpbmcgPyBcIkxvYWRpbmdcIiA6IHBvc3RzLmxlbmd0aH1cbiAgICAgICAgPC9oND5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtdGVtcGxhdGUtY29sdW1ucyBnYXAteC02IHAtMTZcIj5cbiAgICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICA8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5ncmlkLXRlbXBsYXRlLWNvbHVtbnMge1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cblVzZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgKFxuICAgICAgYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvJHtjb250ZXh0LnF1ZXJ5LmlkfWBcbiAgICAgIClcbiAgICApLmpzb24oKTtcblxuICAgIHJldHVybiB7IHVzZXIgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHt9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ })

})