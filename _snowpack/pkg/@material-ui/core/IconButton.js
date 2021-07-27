import { c as createCommonjsModule, r as react, g as getDefaultExportFromCjs } from '../../common/index-8af8b000.js';
import { p as propTypes } from '../../common/index-7f489936.js';
import { _ as __pika_web_default_export_for_treeshaking__$1 } from '../../common/clsx.m-e1755476.js';
import { r as reactDom } from '../../common/index-36c3da37.js';

var interopRequireDefault = createCommonjsModule(function (module) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var objectWithoutPropertiesLoose = createCommonjsModule(function (module) {
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

function chainPropTypes(propType1, propType2) {
  {
    return () => null;
  }
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function isPlainObject(item) {
  return item !== null && typeof item === 'object' && // TS thinks `item is possibly null` even though this was our first guard.
  // @ts-expect-error
  item.constructor === Object;
}
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? _extends({}, target) : target;

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(key => {
      // Avoid prototype pollution
      if (key === '__proto__') {
        return;
      }

      if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
        // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
}

const elementAcceptingRef = chainPropTypes(propTypes.element);
elementAcceptingRef.isRequired = chainPropTypes(propTypes.element.isRequired);

var elementTypeAcceptingRef = chainPropTypes(propTypes.elementType);

function exactProp(propTypes) {
  {
    return propTypes;
  }
}

/**
 * WARNING: Don't import this directly.
 * Use `MuiError` from `@material-ui/utils/macros/MuiError.macro` instead.
 * @param {number} code
 */
function formatMuiErrorMessage(code) {
  // Apply babel-plugin-transform-template-literals in loose mode
  // loose mode is safe iff we're concatenating primitives
  // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose

  /* eslint-disable prefer-template */
  let url = 'https://material-ui.com/production-error/?code=' + code;

  for (let i = 1; i < arguments.length; i += 1) {
    // rest params over-transpile for this case
    // eslint-disable-next-line prefer-rest-params
    url += '&args[]=' + encodeURIComponent(arguments[i]);
  }

  return 'Minified Material-UI error #' + code + '; visit ' + url + ' for the full message.';
  /* eslint-enable prefer-template */
}

/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=60103,c=60106,d=60107,e=60108,f=60114,g=60109,h=60110,k=60112,l=60113,m=60120,n=60115,p=60116,q=60121,r=60122,u=60117,v=60129,w=60131;
if("function"===typeof Symbol&&Symbol.for){var x=Symbol.for;b=x("react.element");c=x("react.portal");d=x("react.fragment");e=x("react.strict_mode");f=x("react.profiler");g=x("react.provider");h=x("react.context");k=x("react.forward_ref");l=x("react.suspense");m=x("react.suspense_list");n=x("react.memo");p=x("react.lazy");q=x("react.block");r=x("react.server.block");u=x("react.fundamental");v=x("react.debug_trace_mode");w=x("react.legacy_hidden");}
function y(a){if("object"===typeof a&&null!==a){var t=a.$$typeof;switch(t){case b:switch(a=a.type,a){case d:case f:case e:case l:case m:return a;default:switch(a=a&&a.$$typeof,a){case h:case k:case p:case n:case g:return a;default:return t}}case c:return t}}}var z=g,A=b,B=k,C=d,D=p,E=n,F=c,G=f,H=e,I=l;var ContextConsumer=h;var ContextProvider=z;var Element=A;var ForwardRef=B;var Fragment=C;var Lazy=D;var Memo=E;var Portal=F;var Profiler=G;var StrictMode=H;
var Suspense=I;var isAsyncMode=function(){return !1};var isConcurrentMode=function(){return !1};var isContextConsumer=function(a){return y(a)===h};var isContextProvider=function(a){return y(a)===g};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===b};var isForwardRef=function(a){return y(a)===k};var isFragment=function(a){return y(a)===d};var isLazy=function(a){return y(a)===p};var isMemo=function(a){return y(a)===n};
var isPortal=function(a){return y(a)===c};var isProfiler=function(a){return y(a)===f};var isStrictMode=function(a){return y(a)===e};var isSuspense=function(a){return y(a)===l};var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===d||a===f||a===v||a===e||a===l||a===m||a===w||"object"===typeof a&&null!==a&&(a.$$typeof===p||a.$$typeof===n||a.$$typeof===g||a.$$typeof===h||a.$$typeof===k||a.$$typeof===u||a.$$typeof===q||a[0]===r)?!0:!1};
var typeOf=y;

var reactIs_production_min = {
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs = createCommonjsModule(function (module) {

{
  module.exports = reactIs_production_min;
}
});

// https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3

const fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function getFunctionName(fn) {
  const match = `${fn}`.match(fnNameMatchRegex);
  const name = match && match[1];
  return name || '';
}

function getFunctionComponentName(Component, fallback = '') {
  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
}

function getWrappedName(outerType, innerType, wrapperName) {
  const functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== '' ? `${wrapperName}(${functionName})` : wrapperName);
}
/**
 * cherry-pick from
 * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
 * originally forked from recompose/getDisplayName with added IE11 support
 */


function getDisplayName(Component) {
  if (Component == null) {
    return undefined;
  }

  if (typeof Component === 'string') {
    return Component;
  }

  if (typeof Component === 'function') {
    return getFunctionComponentName(Component, 'Component');
  } // TypeScript can't have components as objects but they exist in the form of `memo` or `Suspense`


  if (typeof Component === 'object') {
    switch (Component.$$typeof) {
      case reactIs.ForwardRef:
        return getWrappedName(Component, Component.render, 'ForwardRef');

      case reactIs.Memo:
        return getWrappedName(Component, Component.type, 'memo');

      default:
        return undefined;
    }
  }

  return undefined;
}

function HTMLElementType(props, propName, componentName, location, propFullName) {
  {
    return null;
  }
}

/* eslint-disable */
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var ponyfillGlobal = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();

const refType = propTypes.oneOfType([propTypes.func, propTypes.object]);

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word in the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error( formatMuiErrorMessage(7));
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Safe chained function.
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 */
function createChainedFunction(...funcs) {
  return funcs.reduce((acc, func) => {
    if (func == null) {
      return acc;
    }

    return function chainedFunction(...args) {
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, () => {});
}

// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
function debounce(func, wait = 166) {
  let timeout;

  function debounced(...args) {
    const later = () => {
      func.apply(this, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }

  debounced.clear = () => {
    clearTimeout(timeout);
  };

  return debounced;
}

function deprecatedPropType(validator, reason) {
  {
    return () => null;
  }
}

function isMuiElement(element, muiNames) {
  return /*#__PURE__*/react.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
}

function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

function ownerWindow(node) {
  const doc = ownerDocument(node);
  return doc.defaultView || window;
}

function requirePropFactory(componentNameInError, Component) {
  {
    return () => null;
  } // eslint-disable-next-line react/forbid-foreign-prop-types
}

/**
 * TODO v5: consider making it private
 *
 * passes {value} to {ref}
 *
 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
 * Otherwise, make sure to cleanup the previous {ref} if it changes. See
 * https://github.com/mui-org/material-ui/issues/13539
 *
 * Useful if you want to expose the ref of an inner component to the public API
 * while still using it inside the component.
 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
 */
function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

const useEnhancedEffect = typeof window !== 'undefined' ? react.useLayoutEffect : react.useEffect;

function useId(idOverride) {
  const [defaultId, setDefaultId] = react.useState(idOverride);
  const id = idOverride || defaultId;
  react.useEffect(() => {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the random value for client-side rendering only.
      // We can't use it server-side.
      setDefaultId(`mui-${Math.round(Math.random() * 1e9)}`);
    }
  }, [defaultId]);
  return id;
}

function unsupportedProp(props, propName, componentName, location, propFullName) {
  {
    return null;
  }
}

/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */
function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = 'value'
}) {
  // isControlled is ignored in the hook dependency lists as it should never change.
  const {
    current: isControlled
  } = react.useRef(controlled !== undefined);
  const [valueState, setValue] = react.useState(defaultProp);
  const value = isControlled ? controlled : valueState;

  const setValueIfUncontrolled = react.useCallback(newValue => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}

/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */

function useEventCallback(fn) {
  const ref = react.useRef(fn);
  useEnhancedEffect(() => {
    ref.current = fn;
  });
  return react.useCallback((...args) => // @ts-expect-error hide `this`
  // tslint:disable-next-line:ban-comma-operator
  (0, ref.current)(...args), []);
}

function useForkRef(refA, refB) {
  /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior.
   */
  return react.useMemo(() => {
    if (refA == null && refB == null) {
      return null;
    }

    return refValue => {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}

// based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js
let hadKeyboardEvent = true;
let hadFocusVisibleRecently = false;
let hadFocusVisibleRecentlyTimeout = null;
const inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  'datetime-local': true
};
/**
 * Computes whether the given element should automatically trigger the
 * `focus-visible` class being added, i.e. whether it should always match
 * `:focus-visible` when focused.
 * @param {Element} node
 * @returns {boolean}
 */

function focusTriggersKeyboardModality(node) {
  const {
    type,
    tagName
  } = node;

  if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
    return true;
  }

  if (tagName === 'TEXTAREA' && !node.readOnly) {
    return true;
  }

  if (node.isContentEditable) {
    return true;
  }

  return false;
}
/**
 * Keep track of our keyboard modality state with `hadKeyboardEvent`.
 * If the most recent user interaction was via the keyboard;
 * and the key press did not include a meta, alt/option, or control key;
 * then the modality is keyboard. Otherwise, the modality is not keyboard.
 * @param {KeyboardEvent} event
 */


function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }

  hadKeyboardEvent = true;
}
/**
 * If at any point a user clicks with a pointing device, ensure that we change
 * the modality away from keyboard.
 * This avoids the situation where a user presses a key on an already focused
 * element, and then clicks on a different element, focusing it with a
 * pointing device, while we still think we're in keyboard modality.
 */


function handlePointerDown() {
  hadKeyboardEvent = false;
}

function handleVisibilityChange() {
  if (this.visibilityState === 'hidden') {
    // If the tab becomes active again, the browser will handle calling focus
    // on the element (Safari actually calls it twice).
    // If this tab change caused a blur on an element with focus-visible,
    // re-apply the class when the user switches back to the tab.
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}

function prepare(doc) {
  doc.addEventListener('keydown', handleKeyDown, true);
  doc.addEventListener('mousedown', handlePointerDown, true);
  doc.addEventListener('pointerdown', handlePointerDown, true);
  doc.addEventListener('touchstart', handlePointerDown, true);
  doc.addEventListener('visibilitychange', handleVisibilityChange, true);
}

function isFocusVisible(event) {
  const {
    target
  } = event;

  try {
    return target.matches(':focus-visible');
  } catch (error) {// Browsers not implementing :focus-visible will throw a SyntaxError.
    // We use our own heuristic for those browsers.
    // Rethrow might be better if it's not the expected error but do we really
    // want to crash if focus-visible malfunctioned?
  } // No need for validFocusTarget check. The user does that by attaching it to
  // focusable events only.


  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}

function useIsFocusVisible() {
  const ref = react.useCallback(node => {
    if (node != null) {
      prepare(node.ownerDocument);
    }
  }, []);
  const isFocusVisibleRef = react.useRef(false);
  /**
   * Should be called if a blur event is fired
   */

  function handleBlurVisible() {
    // checking against potential state variable does not suffice if we focus and blur synchronously.
    // React wouldn't have time to trigger a re-render so `focusVisible` would be stale.
    // Ideally we would adjust `isFocusVisible(event)` to look at `relatedTarget` for blur events.
    // This doesn't work in IE11 due to https://github.com/facebook/react/issues/3751
    // TODO: check again if React releases their internal changes to focus event handling (https://github.com/facebook/react/pull/19186).
    if (isFocusVisibleRef.current) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(() => {
        hadFocusVisibleRecently = false;
      }, 100);
      isFocusVisibleRef.current = false;
      return true;
    }

    return false;
  }
  /**
   * Should be called if a blur event is fired
   */


  function handleFocusVisible(event) {
    if (isFocusVisible(event)) {
      isFocusVisibleRef.current = true;
      return true;
    }

    return false;
  }

  return {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref
  };
}

// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/488fd8afc535ca3a6ad4dc581f5e89217b6a36ac/js/src/util/scrollbar.js#L14-L18
function getScrollbarSize(doc) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
  const documentWidth = doc.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
}

// Source from https://github.com/alitaheri/normalize-scroll-left
let cachedType;
/**
 * Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
 *
 * Types of scrollLeft, assuming scrollWidth=100 and direction is rtl.
 *
 * Type             | <- Most Left | Most Right -> | Initial
 * ---------------- | ------------ | ------------- | -------
 * default          | 0            | 100           | 100
 * negative (spec*) | -100         | 0             | 0
 * reverse          | 100          | 0             | 0
 *
 * Edge 85: default
 * Safari 14: negative
 * Chrome 85: negative
 * Firefox 81: negative
 * IE11: reverse
 *
 * spec* https://drafts.csswg.org/cssom-view/#dom-window-scroll
 */

function detectScrollType() {
  if (cachedType) {
    return cachedType;
  }

  const dummy = document.createElement('div');
  const container = document.createElement('div');
  container.style.width = '10px';
  container.style.height = '1px';
  dummy.appendChild(container);
  dummy.dir = 'rtl';
  dummy.style.fontSize = '14px';
  dummy.style.width = '4px';
  dummy.style.height = '1px';
  dummy.style.position = 'absolute';
  dummy.style.top = '-1000px';
  dummy.style.overflow = 'scroll';
  document.body.appendChild(dummy);
  cachedType = 'reverse';

  if (dummy.scrollLeft > 0) {
    cachedType = 'default';
  } else {
    dummy.scrollLeft = 1;

    if (dummy.scrollLeft === 0) {
      cachedType = 'negative';
    }
  }

  document.body.removeChild(dummy);
  return cachedType;
} // Based on https://stackoverflow.com/a/24394376

function getNormalizedScrollLeft(element, direction) {
  const scrollLeft = element.scrollLeft; // Perform the calculations only when direction is rtl to avoid messing up the ltr behavior

  if (direction !== 'rtl') {
    return scrollLeft;
  }

  const type = detectScrollType();

  switch (type) {
    case 'negative':
      return element.scrollWidth - element.clientWidth + scrollLeft;

    case 'reverse':
      return element.scrollWidth - element.clientWidth - scrollLeft;

    default:
      return scrollLeft;
  }
}

const usePreviousProps = value => {
  const ref = react.useRef({});
  react.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const visuallyHidden = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px'
};

function validatorNoop() {
  return null;
}
validatorNoop.isRequired = validatorNoop;
var integerPropType =  validatorNoop ;

var esm = /*#__PURE__*/Object.freeze({
  __proto__: null,
  chainPropTypes: chainPropTypes,
  deepmerge: deepmerge,
  elementAcceptingRef: elementAcceptingRef,
  elementTypeAcceptingRef: elementTypeAcceptingRef,
  exactProp: exactProp,
  formatMuiErrorMessage: formatMuiErrorMessage,
  getDisplayName: getDisplayName,
  HTMLElementType: HTMLElementType,
  ponyfillGlobal: ponyfillGlobal,
  refType: refType,
  unstable_capitalize: capitalize,
  unstable_createChainedFunction: createChainedFunction,
  unstable_debounce: debounce,
  unstable_deprecatedPropType: deprecatedPropType,
  unstable_isMuiElement: isMuiElement,
  unstable_ownerDocument: ownerDocument,
  unstable_ownerWindow: ownerWindow,
  unstable_requirePropFactory: requirePropFactory,
  unstable_setRef: setRef,
  unstable_useEnhancedEffect: useEnhancedEffect,
  unstable_useId: useId,
  unstable_unsupportedProp: unsupportedProp,
  unstable_useControlled: useControlled,
  unstable_useEventCallback: useEventCallback,
  unstable_useForkRef: useForkRef,
  unstable_useIsFocusVisible: useIsFocusVisible,
  unstable_getScrollbarSize: getScrollbarSize,
  unstable_detectScrollType: detectScrollType,
  unstable_getNormalizedScrollLeft: getNormalizedScrollLeft,
  usePreviousProps: usePreviousProps,
  visuallyHidden: visuallyHidden,
  integerPropType: integerPropType
});

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function composeClasses(slots, getUtilityClass, classes) {
  const output = {};
  Object.keys(slots).forEach( // `Objet.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
  // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
  slot => {
    output[slot] = slots[slot].reduce((acc, key) => {
      if (key) {
        if (classes && classes[key]) {
          acc.push(classes[key]);
        }

        acc.push(getUtilityClass(key));
      }

      return acc;
    }, []).join(' ');
  });
  return output;
}

/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent(element) {
  return typeof element === 'string';
}

const globalPseudoClassesMapping = {
  active: 'Mui-active',
  checked: 'Mui-checked',
  completed: 'Mui-completed',
  disabled: 'Mui-disabled',
  error: 'Mui-error',
  expanded: 'Mui-expanded',
  focused: 'Mui-focused',
  focusVisible: 'Mui-focusVisible',
  required: 'Mui-required',
  selected: 'Mui-selected'
};
function generateUtilityClass(componentName, slot) {
  const globalPseudoClass = globalPseudoClassesMapping[slot];
  return globalPseudoClass || `${componentName}-${slot}`;
}

function generateUtilityClasses(componentName, slots) {
  const result = {};
  slots.forEach(slot => {
    result[slot] = generateUtilityClass(componentName, slot);
  });
  return result;
}

function getBackdropUtilityClass(slot) {
  return generateUtilityClass('MuiBackdrop', slot);
}
const backdropUnstyledClasses = generateUtilityClasses('MuiBackdrop', ['root', 'invisible']);

var reactJsxRuntime_production_min = createCommonjsModule(function (module, exports) {
var g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment");}var m=react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q;exports.jsxs=q;
});

var jsxRuntime = createCommonjsModule(function (module) {

{
  module.exports = reactJsxRuntime_production_min;
}
});

const _excluded = ["classes", "className", "invisible", "component", "components", "componentsProps", "theme"];

const useUtilityClasses = styleProps => {
  const {
    classes,
    invisible
  } = styleProps;
  const slots = {
    root: ['root', invisible && 'invisible']
  };
  return composeClasses(slots, getBackdropUtilityClass, classes);
};

const BackdropUnstyled = /*#__PURE__*/react.forwardRef(function BackdropUnstyled(props, ref) {
  const {
    classes: classesProp,
    className,
    invisible = false,
    component = 'div',
    components = {},
    componentsProps = {},

    /* eslint-disable react/prop-types */
    theme
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded);

  const styleProps = _extends({}, props, {
    classes: classesProp,
    invisible
  });

  const classes = useUtilityClasses(styleProps);
  const Root = components.Root || component;
  const rootProps = componentsProps.root || {};
  return /*#__PURE__*/jsxRuntime.jsx(Root, _extends({
    "aria-hidden": true
  }, rootProps, !isHostComponent(Root) && {
    as: component,
    styleProps: _extends({}, styleProps, rootProps.styleProps),
    theme
  }, {
    ref: ref
  }, other, {
    className: __pika_web_default_export_for_treeshaking__$1(classes.root, rootProps.className, className)
  }));
});

function getBadgeUtilityClass(slot) {
  return generateUtilityClass('MuiBadge', slot);
}
const badgeUnstyledClasses = generateUtilityClasses('MuiBadge', ['root', 'badge', 'dot', 'standard', 'anchorOriginTopLeftCircular', 'anchorOriginTopLeftRectangular', 'anchorOriginTopRightCircular', 'anchorOriginTopRightRectangular', 'anchorOriginBottomLeftCircular', 'anchorOriginBottomLeftRectangular', 'anchorOriginBottomRightCircular', 'anchorOriginBottomRightRectangular', 'invisible']);

const _excluded$1 = ["anchorOrigin", "classes", "badgeContent", "component", "children", "className", "components", "componentsProps", "invisible", "max", "overlap", "showZero", "variant", "theme"];

const useUtilityClasses$1 = styleProps => {
  const {
    variant,
    anchorOrigin,
    overlap,
    invisible,
    classes
  } = styleProps;
  const slots = {
    root: ['root'],
    badge: ['badge', variant, `anchorOrigin${capitalize(anchorOrigin.vertical)}${capitalize(anchorOrigin.horizontal)}${capitalize(overlap)}`, invisible && 'invisible']
  };
  return composeClasses(slots, getBadgeUtilityClass, classes);
};

const BadgeUnstyled = /*#__PURE__*/react.forwardRef(function BadgeUnstyled(props, ref) {
  const {
    anchorOrigin: anchorOriginProp = {
      vertical: 'top',
      horizontal: 'right'
    },
    classes: classesProp,
    badgeContent: badgeContentProp,
    component = 'span',
    children,
    className,
    components = {},
    componentsProps = {},
    invisible: invisibleProp,
    max: maxProp = 99,
    overlap: overlapProp = 'rectangular',
    showZero = false,
    variant: variantProp = 'standard',

    /* eslint-disable react/prop-types */
    theme
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$1);

  const prevProps = usePreviousProps({
    anchorOrigin: anchorOriginProp,
    badgeContent: badgeContentProp,
    max: maxProp,
    overlap: overlapProp,
    variant: variantProp
  });
  let invisible = invisibleProp;

  if (invisibleProp == null && (badgeContentProp === 0 && !showZero || badgeContentProp == null && variantProp !== 'dot')) {
    invisible = true;
  }

  const {
    anchorOrigin = anchorOriginProp,
    badgeContent,
    max = maxProp,
    overlap = overlapProp,
    variant = variantProp
  } = invisible ? prevProps : props;

  const styleProps = _extends({}, props, {
    anchorOrigin,
    badgeContent,
    classes: classesProp,
    invisible,
    max,
    overlap,
    variant
  });

  let displayValue = '';

  if (variant !== 'dot') {
    displayValue = badgeContent > max ? `${max}+` : badgeContent;
  }

  const classes = useUtilityClasses$1(styleProps);
  const Root = components.Root || component;
  const rootProps = componentsProps.root || {};
  const Badge = components.Badge || 'span';
  const badgeProps = componentsProps.badge || {};
  return /*#__PURE__*/jsxRuntime.jsxs(Root, _extends({}, rootProps, !isHostComponent(Root) && {
    as: component,
    styleProps: _extends({}, styleProps, rootProps.styleProps),
    theme
  }, {
    ref: ref
  }, other, {
    className: __pika_web_default_export_for_treeshaking__$1(classes.root, rootProps.className, className),
    children: [children, /*#__PURE__*/jsxRuntime.jsx(Badge, _extends({}, badgeProps, !isHostComponent(Badge) && {
      styleProps: _extends({}, styleProps, badgeProps.styleProps),
      theme
    }, {
      className: __pika_web_default_export_for_treeshaking__$1(classes.badge, badgeProps.className),
      children: displayValue
    }))]
  }));
});

function getContainer(container) {
  return typeof container === 'function' ? container() : container;
}
/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */


const Portal$1 = /*#__PURE__*/react.forwardRef(function Portal(props, ref) {
  const {
    children,
    container,
    disablePortal = false
  } = props;
  const [mountNode, setMountNode] = react.useState(null);
  const handleRef = useForkRef( /*#__PURE__*/react.isValidElement(children) ? children.ref : null, ref);
  useEnhancedEffect(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect(() => {
    if (mountNode && !disablePortal) {
      setRef(ref, mountNode);
      return () => {
        setRef(ref, null);
      };
    }

    return undefined;
  }, [ref, mountNode, disablePortal]);

  if (disablePortal) {
    if ( /*#__PURE__*/react.isValidElement(children)) {
      return /*#__PURE__*/react.cloneElement(children, {
        ref: handleRef
      });
    }

    return children;
  }

  return mountNode ? /*#__PURE__*/reactDom.createPortal(children, mountNode) : mountNode;
});

// Is a vertical scrollbar displayed?
function isOverflowing(container) {
  const doc = ownerDocument(container);

  if (doc.body === container) {
    return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
  }

  return container.scrollHeight > container.clientHeight;
}

function ariaHidden(element, show) {
  if (show) {
    element.setAttribute('aria-hidden', 'true');
  } else {
    element.removeAttribute('aria-hidden');
  }
}

function getPaddingRight(element) {
  return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
}

function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude = [], show) {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  const blacklistTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE'];
  [].forEach.call(container.children, element => {
    if (blacklist.indexOf(element) === -1 && blacklistTagNames.indexOf(element.tagName) === -1) {
      ariaHidden(element, show);
    }
  });
}

function findIndexOf(items, callback) {
  let idx = -1;
  items.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }

    return false;
  });
  return idx;
}

function handleContainer(containerInfo, props) {
  const restoreStyle = [];
  const container = containerInfo.container;

  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      // Compute the size before applying overflow hidden to avoid any scroll jumps.
      const scrollbarSize = getScrollbarSize(ownerDocument(container));
      restoreStyle.push({
        value: container.style.paddingRight,
        property: 'padding-right',
        el: container
      }); // Use computed style, here to get the real padding to add our scrollbar width.

      container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`; // .mui-fixed is a global helper.

      const fixedElements = ownerDocument(container).querySelectorAll('.mui-fixed');
      [].forEach.call(fixedElements, element => {
        restoreStyle.push({
          value: element.style.paddingRight,
          property: 'padding-right',
          el: element
        });
        element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
      });
    } // Improve Gatsby support
    // https://css-tricks.com/snippets/css/force-vertical-scrollbar/


    const parent = container.parentElement;
    const containerWindow = ownerWindow(container);
    const scrollContainer = (parent == null ? void 0 : parent.nodeName) === 'HTML' && containerWindow.getComputedStyle(parent).overflowY === 'scroll' ? parent : container; // Block the scroll even if no scrollbar is visible to account for mobile keyboard
    // screensize shrink.

    restoreStyle.push({
      value: scrollContainer.style.overflow,
      property: 'overflow',
      el: scrollContainer
    });
    scrollContainer.style.overflow = 'hidden';
  }

  const restore = () => {
    restoreStyle.forEach(({
      value,
      el,
      property
    }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };

  return restore;
}

function getHiddenSiblings(container) {
  const hiddenSiblings = [];
  [].forEach.call(container.children, element => {
    if (element.getAttribute('aria-hidden') === 'true') {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}

/**
 * @ignore - do not document.
 *
 * Proper state management for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class.
 * Used by the Modal to ensure proper styling of containers.
 */
class ModalManager {
  constructor() {
    this.containers = void 0;
    this.modals = void 0;
    this.modals = [];
    this.containers = [];
  }

  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal);

    if (modalIndex !== -1) {
      return modalIndex;
    }

    modalIndex = this.modals.length;
    this.modals.push(modal); // If the modal we are adding is already in the DOM.

    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }

    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
    const containerIndex = findIndexOf(this.containers, item => item.container === container);

    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }

    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings
    });
    return modalIndex;
  }

  mount(modal, props) {
    const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];

    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo, props);
    }
  }

  remove(modal) {
    const modalIndex = this.modals.indexOf(modal);

    if (modalIndex === -1) {
      return modalIndex;
    }

    const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1); // If that was the last modal in a container, clean up the container.

    if (containerInfo.modals.length === 0) {
      // The modal might be closed before it had the chance to be mounted in the DOM.
      if (containerInfo.restore) {
        containerInfo.restore();
      }

      if (modal.modalRef) {
        // In case the modal wasn't in the DOM yet.
        ariaHidden(modal.modalRef, true);
      }

      ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
      this.containers.splice(containerIndex, 1);
    } else {
      // Otherwise make sure the next top modal is visible to a screen reader.
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1]; // as soon as a modal is adding its modalRef is undefined. it can't set
      // aria-hidden because the dom element doesn't exist either
      // when modal was unmounted before modalRef gets null

      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }

    return modalIndex;
  }

  isTopModal(modal) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }

}

/* eslint-disable @typescript-eslint/naming-convention, consistent-return, jsx-a11y/no-noninteractive-tabindex */
const candidatesSelector = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'].join(',');

function getTabIndex(node) {
  const tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);

  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr;
  } // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // https://bugs.chromium.org/p/chromium/issues/detail?id=661108&q=contenteditable%20tabindex&can=2
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
  //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
  //  yet they are still part of the regular tab order; in FF, they get a default
  //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
  //  order, consider their tab index to be 0.


  if (node.contentEditable === 'true' || (node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
    return 0;
  }

  return node.tabIndex;
}

function isNonTabbableRadio(node) {
  if (node.tagName !== 'INPUT' || node.type !== 'radio') {
    return false;
  }

  if (!node.name) {
    return false;
  }

  const getRadio = selector => node.ownerDocument.querySelector(`input[type="radio"]${selector}`);

  let roving = getRadio(`[name="${node.name}"]:checked`);

  if (!roving) {
    roving = getRadio(`[name="${node.name}"]`);
  }

  return roving !== node;
}

function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || node.tagName === 'INPUT' && node.type === 'hidden' || isNonTabbableRadio(node)) {
    return false;
  }

  return true;
}

function defaultGetTabbable(root) {
  const regularTabNodes = [];
  const orderedTabNodes = [];
  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
    const nodeTabIndex = getTabIndex(node);

    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
      return;
    }

    if (nodeTabIndex === 0) {
      regularTabNodes.push(node);
    } else {
      orderedTabNodes.push({
        documentOrder: i,
        tabIndex: nodeTabIndex,
        node
      });
    }
  });
  return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map(a => a.node).concat(regularTabNodes);
}

function defaultIsEnabled() {
  return true;
}
/**
 * Utility component that locks focus inside the component.
 */


function Unstable_TrapFocus(props) {
  const {
    children,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open
  } = props;
  const ignoreNextEnforceFocus = react.useRef();
  const sentinelStart = react.useRef(null);
  const sentinelEnd = react.useRef(null);
  const nodeToRestore = react.useRef(null);
  const reactFocusEventTarget = react.useRef(null); // This variable is useful when disableAutoFocus is true.
  // It waits for the active element to move into the component to activate.

  const activated = react.useRef(false);
  const rootRef = react.useRef(null);
  const handleRef = useForkRef(children.ref, rootRef);
  const lastKeydown = react.useRef(null);
  react.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }

    activated.current = !disableAutoFocus;
  }, [disableAutoFocus, open]);
  react.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }

    const doc = ownerDocument(rootRef.current);

    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute('tabIndex')) {

        rootRef.current.setAttribute('tabIndex', -1);
      }

      if (activated.current) {
        rootRef.current.focus();
      }
    }

    return () => {
      // restoreLastFocus()
      if (!disableRestoreFocus) {
        // In IE11 it is possible for document.activeElement to be null resulting
        // in nodeToRestore.current being null.
        // Not all elements in IE11 have a focus method.
        // Once IE11 support is dropped the focus() call can be unconditional.
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          ignoreNextEnforceFocus.current = true;
          nodeToRestore.current.focus();
        }

        nodeToRestore.current = null;
      }
    }; // Missing `disableRestoreFocus` which is fine.
    // We don't support changing that prop on an open TrapFocus
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  react.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }

    const doc = ownerDocument(rootRef.current);

    const contain = nativeEvent => {
      const {
        current: rootElement
      } = rootRef; // Cleanup functions are executed lazily in React 17.
      // Contain can be called between the component being unmounted and its cleanup function being run.

      if (rootElement === null) {
        return;
      }

      if (!doc.hasFocus() || disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }

      if (!rootElement.contains(doc.activeElement)) {
        // if the focus event is not coming from inside the children's react tree, reset the refs
        if (nativeEvent && reactFocusEventTarget.current !== nativeEvent.target || doc.activeElement !== reactFocusEventTarget.current) {
          reactFocusEventTarget.current = null;
        } else if (reactFocusEventTarget.current !== null) {
          return;
        }

        if (!activated.current) {
          return;
        }

        let tabbable = [];

        if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
          tabbable = getTabbable(rootRef.current);
        }

        if (tabbable.length > 0) {
          var _lastKeydown$current, _lastKeydown$current2;

          const isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) == null ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) == null ? void 0 : _lastKeydown$current2.key) === 'Tab');
          const focusNext = tabbable[0];
          const focusPrevious = tabbable[tabbable.length - 1];

          if (isShiftTab) {
            focusPrevious.focus();
          } else {
            focusNext.focus();
          }
        } else {
          rootElement.focus();
        }
      }
    };

    const loopFocus = nativeEvent => {
      lastKeydown.current = nativeEvent;

      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== 'Tab') {
        return;
      } // Make sure the next tab starts from the right place.
      // doc.activeElement referes to the origin.


      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
        // We need to ignore the next contain as
        // it will try to move the focus back to the rootRef element.
        ignoreNextEnforceFocus.current = true;
        sentinelEnd.current.focus();
      }
    };

    doc.addEventListener('focusin', contain);
    doc.addEventListener('keydown', loopFocus, true); // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area.
    // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
    // Instead, we can look if the active element was restored on the BODY element.
    //
    // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
    // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.

    const interval = setInterval(() => {
      if (doc.activeElement.tagName === 'BODY') {
        contain();
      }
    }, 50);
    return () => {
      clearInterval(interval);
      doc.removeEventListener('focusin', contain);
      doc.removeEventListener('keydown', loopFocus, true);
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);

  const onFocus = event => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }

    activated.current = true;
    reactFocusEventTarget.current = event.target;
    const childrenPropsHandler = children.props.onFocus;

    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };

  const handleFocusSentinel = event => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }

    activated.current = true;
  };

  return /*#__PURE__*/jsxRuntime.jsxs(react.Fragment, {
    children: [/*#__PURE__*/jsxRuntime.jsx("div", {
      tabIndex: 0,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-test": "sentinelStart"
    }), /*#__PURE__*/react.cloneElement(children, {
      ref: handleRef,
      onFocus
    }), /*#__PURE__*/jsxRuntime.jsx("div", {
      tabIndex: 0,
      onFocus: handleFocusSentinel,
      ref: sentinelEnd,
      "data-test": "sentinelEnd"
    })]
  });
}

function getModalUtilityClass(slot) {
  return generateUtilityClass('MuiModal', slot);
}
const modalUnstyledClasses = generateUtilityClasses('MuiModal', ['root', 'hidden']);

const _excluded$2 = ["BackdropComponent", "BackdropProps", "children", "classes", "className", "closeAfterTransition", "component", "components", "componentsProps", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "theme", "onTransitionEnter", "onTransitionExited"];

const useUtilityClasses$2 = styleProps => {
  const {
    open,
    exited,
    classes
  } = styleProps;
  const slots = {
    root: ['root', !open && exited && 'hidden']
  };
  return composeClasses(slots, getModalUtilityClass, classes);
};

function getContainer$1(container) {
  return typeof container === 'function' ? container() : container;
}

function getHasTransition(props) {
  return props.children ? props.children.props.hasOwnProperty('in') : false;
} // A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.


const defaultManager = new ModalManager();
/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * - [Dialog](/api/dialog/)
 * - [Drawer](/api/drawer/)
 * - [Menu](/api/menu/)
 * - [Popover](/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 */

const ModalUnstyled = /*#__PURE__*/react.forwardRef(function ModalUnstyled(props, ref) {
  const {
    BackdropComponent,
    BackdropProps,
    children,
    classes: classesProp,
    className,
    closeAfterTransition = false,
    component = 'div',
    components = {},
    componentsProps = {},
    container,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    // private
    // eslint-disable-next-line react/prop-types
    manager = defaultManager,
    onBackdropClick,
    onClose,
    onKeyDown,
    open,

    /* eslint-disable react/prop-types */
    theme,
    onTransitionEnter,
    onTransitionExited
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$2);

  const [exited, setExited] = react.useState(true);
  const modal = react.useRef({});
  const mountNodeRef = react.useRef(null);
  const modalRef = react.useRef(null);
  const handleRef = useForkRef(modalRef, ref);
  const hasTransition = getHasTransition(props);

  const getDoc = () => ownerDocument(mountNodeRef.current);

  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mountNode = mountNodeRef.current;
    return modal.current;
  };

  const handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    }); // Fix a bug on Chrome where the scroll isn't initially 0.

    modalRef.current.scrollTop = 0;
  };

  const handleOpen = useEventCallback(() => {
    const resolvedContainer = getContainer$1(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer); // The element was already mounted.

    if (modalRef.current) {
      handleMounted();
    }
  });
  const isTopModal = react.useCallback(() => manager.isTopModal(getModal()), [manager]);
  const handlePortalRef = useEventCallback(node => {
    mountNodeRef.current = node;

    if (!node) {
      return;
    }

    if (open && isTopModal()) {
      handleMounted();
    } else {
      ariaHidden(modalRef.current, true);
    }
  });
  const handleClose = react.useCallback(() => {
    manager.remove(getModal());
  }, [manager]);
  react.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);
  react.useEffect(() => {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);

  const styleProps = _extends({}, props, {
    classes: classesProp,
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    exited,
    hideBackdrop,
    keepMounted
  });

  const classes = useUtilityClasses$2(styleProps);

  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }

  const handleEnter = () => {
    setExited(false);

    if (onTransitionEnter) {
      onTransitionEnter();
    }
  };

  const handleExited = () => {
    setExited(true);

    if (onTransitionExited) {
      onTransitionExited();
    }

    if (closeAfterTransition) {
      handleClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (onClose) {
      onClose(event, 'backdropClick');
    }
  };

  const handleKeyDown = event => {
    if (onKeyDown) {
      onKeyDown(event);
    } // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviors like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.


    if (event.key !== 'Escape' || !isTopModal()) {
      return;
    }

    if (!disableEscapeKeyDown) {
      // Swallow the event, in case someone is listening for the escape key on the body.
      event.stopPropagation();

      if (onClose) {
        onClose(event, 'escapeKeyDown');
      }
    }
  };

  const childProps = {};

  if (children.props.tabIndex === undefined) {
    childProps.tabIndex = children.props.tabIndex || '-1';
  } // It's a Transition like component


  if (hasTransition) {
    childProps.onEnter = createChainedFunction(handleEnter, children.props.onEnter);
    childProps.onExited = createChainedFunction(handleExited, children.props.onExited);
  }

  const Root = components.Root || component;
  const rootProps = componentsProps.root || {};
  return /*#__PURE__*/jsxRuntime.jsx(Portal$1, {
    ref: handlePortalRef,
    container: container,
    disablePortal: disablePortal,
    children: /*#__PURE__*/jsxRuntime.jsxs(Root, _extends({
      role: "presentation"
    }, rootProps, !isHostComponent(Root) && {
      as: component,
      styleProps: _extends({}, styleProps, rootProps.styleProps),
      theme
    }, other, {
      ref: handleRef,
      onKeyDown: handleKeyDown,
      className: __pika_web_default_export_for_treeshaking__$1(classes.root, rootProps.className, className),
      children: [!hideBackdrop && BackdropComponent ? /*#__PURE__*/jsxRuntime.jsx(BackdropComponent, _extends({
        open: open,
        onClick: handleBackdropClick
      }, BackdropProps)) : null, /*#__PURE__*/jsxRuntime.jsx(Unstable_TrapFocus, {
        disableEnforceFocus: disableEnforceFocus,
        disableAutoFocus: disableAutoFocus,
        disableRestoreFocus: disableRestoreFocus,
        isEnabled: isTopModal,
        open: open,
        children: /*#__PURE__*/react.cloneElement(children, childProps)
      })]
    }))
  });
});

function NoSsr(props) {
  const {
    children,
    defer = false,
    fallback = null
  } = props;
  const [mountedState, setMountedState] = react.useState(false);
  useEnhancedEffect(() => {
    if (!defer) {
      setMountedState(true);
    }
  }, [defer]);
  react.useEffect(() => {
    if (defer) {
      setMountedState(true);
    }
  }, [defer]); // We need the Fragment here to force react-docgen to recognise NoSsr as a component.

  return /*#__PURE__*/jsxRuntime.jsx(react.Fragment, {
    children: mountedState ? children : fallback
  });
}

function getSliderUtilityClass(slot) {
  return generateUtilityClass('MuiSlider', slot);
}
const sliderUnstyledClasses = generateUtilityClasses('MuiSlider', ['root', 'active', 'focusVisible', 'disabled', 'dragging', 'marked', 'vertical', 'trackInverted', 'trackFalse', 'rail', 'track', 'mark', 'markActive', 'markLabel', 'markLabelActive', 'thumb', 'valueLabel', 'valueLabelOpen', 'valueLabelCircle', 'valueLabelLabel']);

const useValueLabelClasses = props => {
  const {
    open
  } = props;
  const utilityClasses = {
    offset: __pika_web_default_export_for_treeshaking__$1(open && sliderUnstyledClasses.valueLabelOpen),
    circle: sliderUnstyledClasses.valueLabelCircle,
    label: sliderUnstyledClasses.valueLabelLabel
  };
  return utilityClasses;
};
/**
 * @ignore - internal component.
 */


function SliderValueLabelUnstyled(props) {
  const {
    children,
    className,
    value,
    theme
  } = props;
  const classes = useValueLabelClasses(props);
  return /*#__PURE__*/react.cloneElement(children, {
    className: __pika_web_default_export_for_treeshaking__$1(children.props.className)
  }, /*#__PURE__*/jsxRuntime.jsxs(react.Fragment, {
    children: [children.props.children, /*#__PURE__*/jsxRuntime.jsx("span", {
      className: __pika_web_default_export_for_treeshaking__$1(classes.offset, className),
      theme: theme,
      "aria-hidden": true,
      children: /*#__PURE__*/jsxRuntime.jsx("span", {
        className: classes.circle,
        children: /*#__PURE__*/jsxRuntime.jsx("span", {
          className: classes.label,
          children: value
        })
      })
    })]
  }));
}

const _excluded$3 = ["aria-label", "aria-labelledby", "aria-valuetext", "className", "component", "classes", "defaultValue", "disableSwap", "disabled", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "onMouseDown", "orientation", "scale", "step", "tabIndex", "track", "value", "valueLabelDisplay", "valueLabelFormat", "isRtl", "components", "componentsProps"];
const INTENTIONAL_DRAG_COUNT_THRESHOLD = 2;

function asc(a, b) {
  return a - b;
}

function clamp(value, min, max) {
  if (value == null) {
    return min;
  }

  return Math.min(Math.max(min, value), max);
}

function findClosest(values, currentValue) {
  const {
    index: closestIndex
  } = values.reduce((acc, value, index) => {
    const distance = Math.abs(currentValue - value);

    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance,
        index
      };
    }

    return acc;
  }, null);
  return closestIndex;
}

function trackFinger(event, touchId) {
  if (touchId.current !== undefined && event.changedTouches) {
    for (let i = 0; i < event.changedTouches.length; i += 1) {
      const touch = event.changedTouches[i];

      if (touch.identifier === touchId.current) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }

    return false;
  }

  return {
    x: event.clientX,
    y: event.clientY
  };
}

function valueToPercent(value, min, max) {
  return (value - min) * 100 / (max - min);
}

function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}

function getDecimalPrecision(num) {
  // This handles the case when num is very small (0.00000001), js will turn this into 1e-8.
  // When num is bigger than 1 or less than -1 it won't get converted to this notation so it's fine.
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split('e-');
    const matissaDecimalPart = parts[0].split('.')[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }

  const decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}

function roundValueToStep(value, step, min) {
  const nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}

function setValueIndex({
  values,
  source,
  newValue,
  index
}) {
  // Performance shortcut
  if (source[index] === newValue) {
    return source;
  }

  const output = values.slice();
  output[index] = newValue;
  return output;
}

function focusThumb({
  sliderRef,
  activeIndex,
  setActive
}) {
  const doc = ownerDocument(sliderRef.current);

  if (!sliderRef.current.contains(doc.activeElement) || Number(doc.activeElement.getAttribute('data-index')) !== activeIndex) {
    sliderRef.current.querySelector(`[type="range"][data-index="${activeIndex}"]`).focus();
  }

  if (setActive) {
    setActive(activeIndex);
  }
}

const axisProps = {
  horizontal: {
    offset: percent => ({
      left: `${percent}%`
    }),
    leap: percent => ({
      width: `${percent}%`
    })
  },
  'horizontal-reverse': {
    offset: percent => ({
      right: `${percent}%`
    }),
    leap: percent => ({
      width: `${percent}%`
    })
  },
  vertical: {
    offset: percent => ({
      bottom: `${percent}%`
    }),
    leap: percent => ({
      height: `${percent}%`
    })
  }
};

const Identity = x => x; // TODO: remove support for Safari < 13.
// https://caniuse.com/#search=touch-action
//
// Safari, on iOS, supports touch action since v13.
// Over 80% of the iOS phones are compatible
// in August 2020.


let cachedSupportsTouchActionNone;

function doesSupportTouchActionNone() {
  if (cachedSupportsTouchActionNone === undefined) {
    const element = document.createElement('div');
    element.style.touchAction = 'none';
    document.body.appendChild(element);
    cachedSupportsTouchActionNone = window.getComputedStyle(element).touchAction === 'none';
    element.parentElement.removeChild(element);
  }

  return cachedSupportsTouchActionNone;
}

const useUtilityClasses$3 = styleProps => {
  const {
    disabled,
    dragging,
    marked,
    orientation,
    track,
    classes
  } = styleProps;
  const slots = {
    root: ['root', disabled && 'disabled', dragging && 'dragging', marked && 'marked', orientation === 'vertical' && 'vertical', track === 'inverted' && 'trackInverted', track === false && 'trackFalse'],
    rail: ['rail'],
    track: ['track'],
    mark: ['mark'],
    markActive: ['markActive'],
    markLabel: ['markLabel'],
    markLabelActive: ['markLabelActive'],
    valueLabel: ['valueLabel'],
    thumb: ['thumb', disabled && 'disabled'],
    active: ['active'],
    disabled: ['disabled'],
    focusVisible: ['focusVisible']
  };
  return composeClasses(slots, getSliderUtilityClass, classes);
};

const Forward = ({
  children
}) => children;

const SliderUnstyled = /*#__PURE__*/react.forwardRef(function SliderUnstyled(props, ref) {
  const {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    'aria-valuetext': ariaValuetext,
    className,
    component = 'span',
    classes: classesProp,
    defaultValue,
    disableSwap = false,
    disabled = false,
    getAriaLabel,
    getAriaValueText,
    marks: marksProp = false,
    max = 100,
    min = 0,
    name,
    onChange,
    onChangeCommitted,
    onMouseDown,
    orientation = 'horizontal',
    scale = Identity,
    step = 1,
    tabIndex,
    track = 'normal',
    value: valueProp,
    valueLabelDisplay = 'off',
    valueLabelFormat = Identity,
    isRtl = false,
    components = {},
    componentsProps = {}
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$3);

  const touchId = react.useRef(); // We can't use the :active browser pseudo-classes.
  // - The active state isn't triggered when clicking on the rail.
  // - The active state isn't transferred when inversing a range slider.

  const [active, setActive] = react.useState(-1);
  const [open, setOpen] = react.useState(-1);
  const [dragging, setDragging] = react.useState(false);
  const moveCount = react.useRef(0);
  const [valueDerived, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue != null ? defaultValue : min,
    name: 'Slider'
  });

  const handleChange = onChange && ((event, value, thumbIndex) => {
    // Redefine target to allow name and value to be read.
    // This allows seamless integration with the most popular form libraries.
    // https://github.com/mui-org/material-ui/issues/13485#issuecomment-676048492
    // Clone the event to not override `target` of the original event.
    const nativeEvent = event.nativeEvent || event;
    const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
    Object.defineProperty(clonedEvent, 'target', {
      writable: true,
      value: {
        value,
        name
      }
    });
    onChange(clonedEvent, value, thumbIndex);
  });

  const range = Array.isArray(valueDerived);
  let values = range ? valueDerived.slice().sort(asc) : [valueDerived];
  values = values.map(value => clamp(value, min, max));
  const marks = marksProp === true && step !== null ? [...Array(Math.floor((max - min) / step) + 1)].map((_, index) => ({
    value: min + step * index
  })) : marksProp || [];
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = react.useState(-1);
  const sliderRef = react.useRef();
  const handleFocusRef = useForkRef(focusVisibleRef, sliderRef);
  const handleRef = useForkRef(ref, handleFocusRef);
  const handleFocus = useEventCallback(event => {
    const index = Number(event.currentTarget.getAttribute('data-index'));
    handleFocusVisible(event);

    if (isFocusVisibleRef.current === true) {
      setFocusVisible(index);
    }

    setOpen(index);
  });
  const handleBlur = useEventCallback(event => {
    handleBlurVisible(event);

    if (isFocusVisibleRef.current === false) {
      setFocusVisible(-1);
    }

    setOpen(-1);
  });
  const handleMouseOver = useEventCallback(event => {
    const index = Number(event.currentTarget.getAttribute('data-index'));
    setOpen(index);
  });
  const handleMouseLeave = useEventCallback(() => {
    setOpen(-1);
  });
  useEnhancedEffect(() => {
    if (disabled && sliderRef.current.contains(document.activeElement)) {
      // This is necessary because Firefox and Safari will keep focus
      // on a disabled element:
      // https://codesandbox.io/s/mui-pr-22247-forked-h151h?file=/src/App.js
      document.activeElement.blur();
    }
  }, [disabled]);

  if (disabled && active !== -1) {
    setActive(-1);
  }

  if (disabled && focusVisible !== -1) {
    setFocusVisible(-1);
  }

  const handleHiddenInputChange = useEventCallback(event => {
    const index = Number(event.currentTarget.getAttribute('data-index'));
    const value = values[index];
    const marksValues = marks.map(mark => mark.value);
    const marksIndex = marksValues.indexOf(value);
    let newValue = event.target.valueAsNumber;

    if (marks && step == null) {
      newValue = newValue < value ? marksValues[marksIndex - 1] : marksValues[marksIndex + 1];
    }

    newValue = clamp(newValue, min, max);

    if (marks && step == null) {
      const markValues = marks.map(mark => mark.value);
      const currentMarkIndex = markValues.indexOf(values[index]);
      newValue = newValue < values[index] ? markValues[currentMarkIndex - 1] : markValues[currentMarkIndex + 1];
    }

    if (range) {
      // Bound the new value to the thumb's neighbours.
      if (disableSwap) {
        newValue = clamp(newValue, values[index - 1] || -Infinity, values[index + 1] || Infinity);
      }

      const previousValue = newValue;
      newValue = setValueIndex({
        values,
        source: valueDerived,
        newValue,
        index
      }).sort(asc);
      let activeIndex = index; // Potentially swap the index if needed.

      if (!disableSwap) {
        activeIndex = newValue.indexOf(previousValue);
      }

      focusThumb({
        sliderRef,
        activeIndex
      });
    }

    setValueState(newValue);
    setFocusVisible(index);

    if (handleChange) {
      handleChange(event, newValue, index);
    }

    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }
  });
  const previousIndex = react.useRef();
  let axis = orientation;

  if (isRtl && orientation !== "vertical") {
    axis += '-reverse';
  }

  const getFingerNewValue = ({
    finger,
    move = false,
    values: values2,
    source
  }) => {
    const {
      current: slider
    } = sliderRef;
    const {
      width,
      height,
      bottom,
      left
    } = slider.getBoundingClientRect();
    let percent;

    if (axis.indexOf('vertical') === 0) {
      percent = (bottom - finger.y) / height;
    } else {
      percent = (finger.x - left) / width;
    }

    if (axis.indexOf('-reverse') !== -1) {
      percent = 1 - percent;
    }

    let newValue;
    newValue = percentToValue(percent, min, max);

    if (step) {
      newValue = roundValueToStep(newValue, step, min);
    } else {
      const marksValues = marks.map(mark => mark.value);
      const closestIndex = findClosest(marksValues, newValue);
      newValue = marksValues[closestIndex];
    }

    newValue = clamp(newValue, min, max);
    let activeIndex = 0;

    if (range) {
      if (!move) {
        activeIndex = findClosest(values2, newValue);
      } else {
        activeIndex = previousIndex.current;
      } // Bound the new value to the thumb's neighbours.


      if (disableSwap) {
        newValue = clamp(newValue, values2[activeIndex - 1] || -Infinity, values2[activeIndex + 1] || Infinity);
      }

      const previousValue = newValue;
      newValue = setValueIndex({
        values: values2,
        source,
        newValue,
        index: activeIndex
      }).sort(asc); // Potentially swap the index if needed.

      if (!(disableSwap && move)) {
        activeIndex = newValue.indexOf(previousValue);
        previousIndex.current = activeIndex;
      }
    }

    return {
      newValue,
      activeIndex
    };
  };

  const handleTouchMove = useEventCallback(nativeEvent => {
    const finger = trackFinger(nativeEvent, touchId);

    if (!finger) {
      return;
    }

    moveCount.current += 1; // Cancel move in case some other element consumed a mouseup event and it was not fired.

    if (nativeEvent.type === 'mousemove' && nativeEvent.buttons === 0) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      handleTouchEnd(nativeEvent);
      return;
    }

    const {
      newValue,
      activeIndex
    } = getFingerNewValue({
      finger,
      move: true,
      values,
      source: valueDerived
    });
    focusThumb({
      sliderRef,
      activeIndex,
      setActive
    });
    setValueState(newValue);

    if (!dragging && moveCount.current > INTENTIONAL_DRAG_COUNT_THRESHOLD) {
      setDragging(true);
    }

    if (handleChange) {
      handleChange(nativeEvent, newValue, activeIndex);
    }
  });
  const handleTouchEnd = useEventCallback(nativeEvent => {
    const finger = trackFinger(nativeEvent, touchId);
    setDragging(false);

    if (!finger) {
      return;
    }

    const {
      newValue
    } = getFingerNewValue({
      finger,
      values,
      source: valueDerived
    });
    setActive(-1);

    if (nativeEvent.type === 'touchend') {
      setOpen(-1);
    }

    if (onChangeCommitted) {
      onChangeCommitted(nativeEvent, newValue);
    }

    touchId.current = undefined; // eslint-disable-next-line @typescript-eslint/no-use-before-define

    stopListening();
  });
  const handleTouchStart = useEventCallback(nativeEvent => {
    // If touch-action: none; is not supported we need to prevent the scroll manually.
    if (!doesSupportTouchActionNone()) {
      nativeEvent.preventDefault();
    }

    const touch = nativeEvent.changedTouches[0];

    if (touch != null) {
      // A number that uniquely identifies the current finger in the touch session.
      touchId.current = touch.identifier;
    }

    const finger = trackFinger(nativeEvent, touchId);
    const {
      newValue,
      activeIndex
    } = getFingerNewValue({
      finger,
      values,
      source: valueDerived
    });
    focusThumb({
      sliderRef,
      activeIndex,
      setActive
    });
    setValueState(newValue);

    if (handleChange) {
      handleChange(nativeEvent, newValue, activeIndex);
    }

    moveCount.current = 0;
    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener('touchmove', handleTouchMove);
    doc.addEventListener('touchend', handleTouchEnd);
  });
  const stopListening = react.useCallback(() => {
    const doc = ownerDocument(sliderRef.current);
    doc.removeEventListener('mousemove', handleTouchMove);
    doc.removeEventListener('mouseup', handleTouchEnd);
    doc.removeEventListener('touchmove', handleTouchMove);
    doc.removeEventListener('touchend', handleTouchEnd);
  }, [handleTouchEnd, handleTouchMove]);
  react.useEffect(() => {
    const {
      current: slider
    } = sliderRef;
    slider.addEventListener('touchstart', handleTouchStart, {
      passive: doesSupportTouchActionNone()
    });
    return () => {
      slider.removeEventListener('touchstart', handleTouchStart, {
        passive: doesSupportTouchActionNone()
      });
      stopListening();
    };
  }, [stopListening, handleTouchStart]);
  react.useEffect(() => {
    if (disabled) {
      stopListening();
    }
  }, [disabled, stopListening]);
  const handleMouseDown = useEventCallback(event => {
    if (onMouseDown) {
      onMouseDown(event);
    } // Only handle left clicks


    if (event.button !== 0) {
      return;
    } // Avoid text selection


    event.preventDefault();
    const finger = trackFinger(event, touchId);
    const {
      newValue,
      activeIndex
    } = getFingerNewValue({
      finger,
      values,
      source: valueDerived
    });
    focusThumb({
      sliderRef,
      activeIndex,
      setActive
    });
    setValueState(newValue);

    if (handleChange) {
      handleChange(event, newValue, activeIndex);
    }

    moveCount.current = 0;
    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener('mousemove', handleTouchMove);
    doc.addEventListener('mouseup', handleTouchEnd);
  });
  const trackOffset = valueToPercent(range ? values[0] : min, min, max);
  const trackLeap = valueToPercent(values[values.length - 1], min, max) - trackOffset;

  const trackStyle = _extends({}, axisProps[axis].offset(trackOffset), axisProps[axis].leap(trackLeap));

  const Root = components.Root || component;
  const rootProps = componentsProps.root || {};
  const Rail = components.Rail || 'span';
  const railProps = componentsProps.rail || {};
  const Track = components.Track || 'span';
  const trackProps = componentsProps.track || {};
  const Thumb = components.Thumb || 'span';
  const thumbProps = componentsProps.thumb || {};
  const ValueLabel = components.ValueLabel || SliderValueLabelUnstyled;
  const valueLabelProps = componentsProps.valueLabel || {};
  const Mark = components.Mark || 'span';
  const markProps = componentsProps.mark || {};
  const MarkLabel = components.MarkLabel || 'span';
  const markLabelProps = componentsProps.markLabel || {}; // all props with defaults
  // consider extracting to hook an reusing the lint rule for the varints

  const styleProps = _extends({}, props, {
    classes: classesProp,
    disabled,
    dragging,
    isRtl,
    marked: marks.length > 0 && marks.some(mark => mark.label),
    max,
    min,
    orientation,
    scale,
    step,
    track,
    valueLabelDisplay,
    valueLabelFormat
  });

  const classes = useUtilityClasses$3(styleProps);
  return /*#__PURE__*/jsxRuntime.jsxs(Root, _extends({
    ref: handleRef,
    onMouseDown: handleMouseDown
  }, rootProps, !isHostComponent(Root) && {
    as: component,
    styleProps: _extends({}, styleProps, rootProps.styleProps)
  }, other, {
    className: __pika_web_default_export_for_treeshaking__$1(classes.root, rootProps.className, className),
    children: [/*#__PURE__*/jsxRuntime.jsx(Rail, _extends({}, railProps, !isHostComponent(Rail) && {
      styleProps: _extends({}, styleProps, railProps.styleProps)
    }, {
      className: __pika_web_default_export_for_treeshaking__$1(classes.rail, railProps.className)
    })), /*#__PURE__*/jsxRuntime.jsx(Track, _extends({}, trackProps, !isHostComponent(Track) && {
      styleProps: _extends({}, styleProps, trackProps.styleProps)
    }, {
      className: __pika_web_default_export_for_treeshaking__$1(classes.track, trackProps.className),
      style: _extends({}, trackStyle, trackProps.style)
    })), marks.map((mark, index) => {
      const percent = valueToPercent(mark.value, min, max);
      const style = axisProps[axis].offset(percent);
      let markActive;

      if (track === false) {
        markActive = values.indexOf(mark.value) !== -1;
      } else {
        markActive = track === 'normal' && (range ? mark.value >= values[0] && mark.value <= values[values.length - 1] : mark.value <= values[0]) || track === 'inverted' && (range ? mark.value <= values[0] || mark.value >= values[values.length - 1] : mark.value >= values[0]);
      }

      return /*#__PURE__*/jsxRuntime.jsxs(react.Fragment, {
        children: [/*#__PURE__*/jsxRuntime.jsx(Mark, _extends({
          "data-index": index
        }, markProps, !isHostComponent(Mark) && {
          styleProps: _extends({}, styleProps, markProps.styleProps, {
            markActive
          })
        }, {
          style: _extends({}, style, markProps.style),
          className: __pika_web_default_export_for_treeshaking__$1(classes.mark, markProps.className, markActive && classes.markActive)
        })), mark.label != null ? /*#__PURE__*/jsxRuntime.jsx(MarkLabel, _extends({
          "aria-hidden": true,
          "data-index": index
        }, markLabelProps, !isHostComponent(MarkLabel) && {
          styleProps: _extends({}, styleProps, markLabelProps.styleProps, {
            markLabelActive: markActive
          })
        }, {
          style: _extends({}, style, markLabelProps.style),
          className: __pika_web_default_export_for_treeshaking__$1(classes.markLabel, markLabelProps.className, markActive && classes.markLabelActive),
          children: mark.label
        })) : null]
      }, mark.value);
    }), values.map((value, index) => {
      const percent = valueToPercent(value, min, max);
      const style = axisProps[axis].offset(percent);
      const ValueLabelComponent = valueLabelDisplay === 'off' ? Forward : ValueLabel;
      return /*#__PURE__*/jsxRuntime.jsx(react.Fragment, {
        children: /*#__PURE__*/jsxRuntime.jsx(ValueLabelComponent, _extends({
          valueLabelFormat: valueLabelFormat,
          valueLabelDisplay: valueLabelDisplay,
          value: typeof valueLabelFormat === 'function' ? valueLabelFormat(scale(value), index) : valueLabelFormat,
          index: index,
          open: open === index || active === index || valueLabelDisplay === 'on',
          disabled: disabled
        }, valueLabelProps, {
          className: __pika_web_default_export_for_treeshaking__$1(classes.valueLabel, valueLabelProps.className)
        }, !isHostComponent(ValueLabel) && {
          styleProps: _extends({}, styleProps, valueLabelProps.styleProps)
        }, {
          children: /*#__PURE__*/jsxRuntime.jsx(Thumb, _extends({
            "data-index": index,
            onMouseOver: handleMouseOver,
            onMouseLeave: handleMouseLeave
          }, thumbProps, {
            className: __pika_web_default_export_for_treeshaking__$1(classes.thumb, thumbProps.className, active === index && classes.active, focusVisible === index && classes.focusVisible)
          }, !isHostComponent(Thumb) && {
            styleProps: _extends({}, styleProps, thumbProps.styleProps)
          }, {
            style: _extends({}, style, {
              pointerEvents: disableSwap && active !== index ? 'none' : undefined
            }, thumbProps.style),
            children: /*#__PURE__*/jsxRuntime.jsx("input", {
              tabIndex: tabIndex,
              "data-index": index,
              "aria-label": getAriaLabel ? getAriaLabel(index) : ariaLabel,
              "aria-labelledby": ariaLabelledby,
              "aria-orientation": orientation,
              "aria-valuemax": scale(max),
              "aria-valuemin": scale(min),
              "aria-valuenow": scale(value),
              "aria-valuetext": getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext,
              onFocus: handleFocus,
              onBlur: handleBlur,
              name: name,
              type: "range",
              min: props.min,
              max: props.max,
              step: props.step,
              disabled: disabled,
              value: values[index],
              onChange: handleHiddenInputChange,
              style: _extends({}, visuallyHidden, {
                direction: isRtl ? 'rtl' : 'ltr',
                // So that VoiceOver's focus indicator matches the thumb's dimensions
                width: '100%',
                height: '100%'
              })
            })
          }))
        }))
      }, index);
    })]
  }));
});

/**
 * The basic building block for creating custom switches.
 *
 * Demos:
 *
 * - [Switches](https://material-ui.com/components/switches/)
 */
function useSwitch(props) {
  const {
    checked: checkedProp,
    defaultChecked,
    disabled,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly,
    required
  } = props;
  const [checked, setCheckedState] = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: 'Switch',
    state: 'checked'
  });
  const handleInputChange = useEventCallback((event, otherHandler) => {
    // Workaround for https://github.com/facebook/react/issues/9023
    if (event.nativeEvent.defaultPrevented) {
      return;
    }

    setCheckedState(event.target.checked);
    onChange == null ? void 0 : onChange(event);
    otherHandler == null ? void 0 : otherHandler(event);
  });
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = react.useState(false);

  if (disabled && focusVisible) {
    setFocusVisible(false);
  }

  react.useEffect(() => {
    isFocusVisibleRef.current = focusVisible;
  }, [focusVisible, isFocusVisibleRef]);
  const inputRef = react.useRef(null);
  const handleFocus = useEventCallback((event, otherHandler) => {
    // Fix for https://github.com/facebook/react/issues/7769
    if (!inputRef.current) {
      inputRef.current = event.currentTarget;
    }

    handleFocusVisible(event);

    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
      onFocusVisible == null ? void 0 : onFocusVisible(event);
    }

    onFocus == null ? void 0 : onFocus(event);
    otherHandler == null ? void 0 : otherHandler(event);
  });
  const handleBlur = useEventCallback((event, otherHandler) => {
    handleBlurVisible(event);

    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }

    onBlur == null ? void 0 : onBlur(event);
    otherHandler == null ? void 0 : otherHandler(event);
  });
  const handleRefChange = useForkRef(focusVisibleRef, inputRef);

  const getInputProps = (otherProps = {}) => _extends({
    checked: checkedProp,
    defaultChecked,
    disabled,
    readOnly,
    required,
    type: 'checkbox'
  }, otherProps, {
    onChange: event => handleInputChange(event, otherProps.onChange),
    onFocus: event => handleFocus(event, otherProps.onFocus),
    onBlur: event => handleBlur(event, otherProps.onBlur),
    ref: handleRefChange
  });

  return {
    checked,
    disabled: Boolean(disabled),
    focusVisible,
    getInputProps,
    readOnly: Boolean(readOnly)
  };
}

function getSwitchUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiSwitch', slot);
}
const switchUnstyledClasses = generateUtilityClasses('MuiSwitch', ['root', 'input', 'thumb', 'checked', 'disabled', 'focusVisible', 'readOnly']);

const _excluded$4 = ["checked", "className", "component", "components", "componentsProps", "defaultChecked", "disabled", "onBlur", "onChange", "onFocus", "onFocusVisible", "readOnly", "required"];

const appendStyleProps = (component, componentsProps, state) => {
  if (!isHostComponent(component)) {
    componentsProps.styleProps = _extends({}, componentsProps.styleProps, state);
  }
};
/**
 * The foundation for building custom-styled switches.
 *
 * Demos:
 *
 * - [Switches](https://material-ui.com/components/switches/)
 *
 * API:
 *
 * - [SwitchUnstyled API](https://material-ui.com/api/switch-unstyled/)
 */


const SwitchUnstyled = /*#__PURE__*/react.forwardRef(function SwitchUnstyled(props, ref) {
  var _ref, _components$Thumb, _componentsProps$thum, _components$Input, _componentsProps$inpu;

  const {
    checked: checkedProp,
    className,
    component,
    components = {},
    componentsProps = {},
    defaultChecked,
    disabled: disabledProp,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly: readOnlyProp
  } = props,
        otherProps = _objectWithoutPropertiesLoose(props, _excluded$4);

  const Root = (_ref = component != null ? component : components.Root) != null ? _ref : 'span';

  const rootProps = _extends({}, otherProps, componentsProps.root);

  const Thumb = (_components$Thumb = components.Thumb) != null ? _components$Thumb : 'span';
  const thumbProps = (_componentsProps$thum = componentsProps.thumb) != null ? _componentsProps$thum : {};
  const Input = (_components$Input = components.Input) != null ? _components$Input : 'input';
  const inputProps = (_componentsProps$inpu = componentsProps.input) != null ? _componentsProps$inpu : {};
  const useSwitchProps = {
    checked: checkedProp,
    defaultChecked,
    disabled: disabledProp,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly: readOnlyProp
  };
  const {
    getInputProps,
    checked,
    disabled,
    focusVisible,
    readOnly
  } = useSwitch(useSwitchProps);

  const styleProps = _extends({}, props, {
    checked,
    disabled,
    focusVisible,
    readOnly
  });

  appendStyleProps(Root, rootProps, styleProps);
  appendStyleProps(Input, inputProps, styleProps);
  appendStyleProps(Thumb, thumbProps, styleProps);
  const stateClasses = __pika_web_default_export_for_treeshaking__$1(checked && switchUnstyledClasses.checked, disabled && switchUnstyledClasses.disabled, focusVisible && switchUnstyledClasses.focusVisible, readOnly && switchUnstyledClasses.readOnly);
  return /*#__PURE__*/jsxRuntime.jsxs(Root, _extends({
    ref: ref
  }, rootProps, {
    className: __pika_web_default_export_for_treeshaking__$1(switchUnstyledClasses.root, stateClasses, className, rootProps == null ? void 0 : rootProps.className),
    children: [/*#__PURE__*/jsxRuntime.jsx(Thumb, _extends({}, thumbProps, {
      className: __pika_web_default_export_for_treeshaking__$1(switchUnstyledClasses.thumb, thumbProps == null ? void 0 : thumbProps.className)
    })), /*#__PURE__*/jsxRuntime.jsx(Input, _extends({}, getInputProps(inputProps), {
      className: __pika_web_default_export_for_treeshaking__$1(switchUnstyledClasses.input, inputProps == null ? void 0 : inputProps.className)
    }))]
  }));
});

/** @license Material-UI v5.0.0-alpha.41
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var unstyled = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BackdropUnstyled: BackdropUnstyled,
  BadgeUnstyled: BadgeUnstyled,
  unstable_composeClasses: composeClasses,
  generateUtilityClass: generateUtilityClass,
  generateUtilityClasses: generateUtilityClasses,
  ModalUnstyled: ModalUnstyled,
  NoSsr: NoSsr,
  Portal: Portal$1,
  SliderUnstyled: SliderUnstyled,
  SwitchUnstyled: SwitchUnstyled,
  Unstable_TrapFocus: Unstable_TrapFocus,
  backdropUnstyledClasses: backdropUnstyledClasses,
  getBackdropUtilityClass: getBackdropUtilityClass,
  badgeUnstyledClasses: badgeUnstyledClasses,
  getBadgeUtilityClass: getBadgeUtilityClass,
  ModalManager: ModalManager,
  modalUnstyledClasses: modalUnstyledClasses,
  getModalUtilityClass: getModalUtilityClass,
  SliderValueLabelUnstyled: SliderValueLabelUnstyled,
  sliderUnstyledClasses: sliderUnstyledClasses,
  getSliderUtilityClass: getSliderUtilityClass,
  useSwitch: useSwitch,
  switchUnstyledClasses: switchUnstyledClasses,
  getSwitchUnstyledUtilityClass: getSwitchUnstyledUtilityClass,
  isHostComponent: isHostComponent
});

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        before = _this.prepend ? _this.container.firstChild : _this.before;
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();

var e$1 = "-ms-";
var r$1 = "-moz-";
var a = "-webkit-";
var c$1 = "comm";
var n$1 = "rule";
var t = "decl";
var i = "@import";
var p$1 = "@keyframes";
var k$1 = Math.abs;
var d$1 = String.fromCharCode;
function m$1(e2, r2) {
  return (((r2 << 2 ^ z$1(e2, 0)) << 2 ^ z$1(e2, 1)) << 2 ^ z$1(e2, 2)) << 2 ^ z$1(e2, 3);
}
function g$1(e2) {
  return e2.trim();
}
function x$1(e2, r2) {
  return (e2 = r2.exec(e2)) ? e2[0] : e2;
}
function y$1(e2, r2, a2) {
  return e2.replace(r2, a2);
}
function j(e2, r2) {
  return e2.indexOf(r2);
}
function z$1(e2, r2) {
  return e2.charCodeAt(r2) | 0;
}
function C$1(e2, r2, a2) {
  return e2.slice(r2, a2);
}
function A$1(e2) {
  return e2.length;
}
function M(e2) {
  return e2.length;
}
function O(e2, r2) {
  return r2.push(e2), e2;
}
function S(e2, r2) {
  return e2.map(r2).join("");
}
var q$1 = 1;
var B$1 = 1;
var D$1 = 0;
var E$1 = 0;
var F$1 = 0;
var G$1 = "";
function H$1(e2, r2, a2, c2, n2, t2, s2) {
  return {value: e2, root: r2, parent: a2, type: c2, props: n2, children: t2, line: q$1, column: B$1, length: s2, return: ""};
}
function I$1(e2, r2, a2) {
  return H$1(e2, r2.root, r2.parent, a2, r2.props, r2.children, 0);
}
function J() {
  return F$1;
}
function K() {
  F$1 = E$1 > 0 ? z$1(G$1, --E$1) : 0;
  if (B$1--, F$1 === 10)
    B$1 = 1, q$1--;
  return F$1;
}
function L() {
  F$1 = E$1 < D$1 ? z$1(G$1, E$1++) : 0;
  if (B$1++, F$1 === 10)
    B$1 = 1, q$1++;
  return F$1;
}
function N() {
  return z$1(G$1, E$1);
}
function P() {
  return E$1;
}
function Q(e2, r2) {
  return C$1(G$1, e2, r2);
}
function R(e2) {
  switch (e2) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function T(e2) {
  return q$1 = B$1 = 1, D$1 = A$1(G$1 = e2), E$1 = 0, [];
}
function U(e2) {
  return G$1 = "", e2;
}
function V(e2) {
  return g$1(Q(E$1 - 1, _(e2 === 91 ? e2 + 2 : e2 === 40 ? e2 + 1 : e2)));
}
function X(e2) {
  while (F$1 = N())
    if (F$1 < 33)
      L();
    else
      break;
  return R(e2) > 2 || R(F$1) > 3 ? "" : " ";
}
function Z(e2, r2) {
  while (--r2 && L())
    if (F$1 < 48 || F$1 > 102 || F$1 > 57 && F$1 < 65 || F$1 > 70 && F$1 < 97)
      break;
  return Q(e2, P() + (r2 < 6 && N() == 32 && L() == 32));
}
function _(e2) {
  while (L())
    switch (F$1) {
      case e2:
        return E$1;
      case 34:
      case 39:
        return _(e2 === 34 || e2 === 39 ? e2 : F$1);
      case 40:
        if (e2 === 41)
          _(e2);
        break;
      case 92:
        L();
        break;
    }
  return E$1;
}
function ee(e2, r2) {
  while (L())
    if (e2 + F$1 === 47 + 10)
      break;
    else if (e2 + F$1 === 42 + 42 && N() === 47)
      break;
  return "/*" + Q(r2, E$1 - 1) + "*" + d$1(e2 === 47 ? e2 : L());
}
function re(e2) {
  while (!R(N()))
    L();
  return Q(e2, E$1);
}
function ae(e2) {
  return U(ce("", null, null, null, [""], e2 = T(e2), 0, [0], e2));
}
function ce(e2, r2, a2, c2, n2, t2, s2, u2, i2) {
  var f2 = 0;
  var o2 = 0;
  var l2 = s2;
  var v2 = 0;
  var h2 = 0;
  var p2 = 0;
  var b2 = 1;
  var w2 = 1;
  var $2 = 1;
  var k2 = 0;
  var m2 = "";
  var g2 = n2;
  var x2 = t2;
  var j2 = c2;
  var z2 = m2;
  while (w2)
    switch (p2 = k2, k2 = L()) {
      case 34:
      case 39:
      case 91:
      case 40:
        z2 += V(k2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        z2 += X(p2);
        break;
      case 92:
        z2 += Z(P() - 1, 7);
        continue;
      case 47:
        switch (N()) {
          case 42:
          case 47:
            O(te(ee(L(), P()), r2, a2), i2);
            break;
          default:
            z2 += "/";
        }
        break;
      case 123 * b2:
        u2[f2++] = A$1(z2) * $2;
      case 125 * b2:
      case 59:
      case 0:
        switch (k2) {
          case 0:
          case 125:
            w2 = 0;
          case 59 + o2:
            if (h2 > 0 && A$1(z2) - l2)
              O(h2 > 32 ? se(z2 + ";", c2, a2, l2 - 1) : se(y$1(z2, " ", "") + ";", c2, a2, l2 - 2), i2);
            break;
          case 59:
            z2 += ";";
          default:
            O(j2 = ne(z2, r2, a2, f2, o2, n2, u2, m2, g2 = [], x2 = [], l2), t2);
            if (k2 === 123)
              if (o2 === 0)
                ce(z2, r2, j2, j2, g2, t2, l2, u2, x2);
              else
                switch (v2) {
                  case 100:
                  case 109:
                  case 115:
                    ce(e2, j2, j2, c2 && O(ne(e2, j2, j2, 0, 0, n2, u2, m2, n2, g2 = [], l2), x2), n2, x2, l2, u2, c2 ? g2 : x2);
                    break;
                  default:
                    ce(z2, j2, j2, j2, [""], x2, l2, u2, x2);
                }
        }
        f2 = o2 = h2 = 0, b2 = $2 = 1, m2 = z2 = "", l2 = s2;
        break;
      case 58:
        l2 = 1 + A$1(z2), h2 = p2;
      default:
        if (b2 < 1) {
          if (k2 == 123)
            --b2;
          else if (k2 == 125 && b2++ == 0 && K() == 125)
            continue;
        }
        switch (z2 += d$1(k2), k2 * b2) {
          case 38:
            $2 = o2 > 0 ? 1 : (z2 += "\f", -1);
            break;
          case 44:
            u2[f2++] = (A$1(z2) - 1) * $2, $2 = 1;
            break;
          case 64:
            if (N() === 45)
              z2 += V(L());
            v2 = N(), o2 = A$1(m2 = z2 += re(P())), k2++;
            break;
          case 45:
            if (p2 === 45 && A$1(z2) == 2)
              b2 = 0;
        }
    }
  return t2;
}
function ne(e2, r2, a2, c2, t2, s2, u2, i2, f2, o2, l2) {
  var v2 = t2 - 1;
  var h2 = t2 === 0 ? s2 : [""];
  var p2 = M(h2);
  for (var b2 = 0, w2 = 0, $2 = 0; b2 < c2; ++b2)
    for (var d2 = 0, m2 = C$1(e2, v2 + 1, v2 = k$1(w2 = u2[b2])), x2 = e2; d2 < p2; ++d2)
      if (x2 = g$1(w2 > 0 ? h2[d2] + " " + m2 : y$1(m2, /&\f/g, h2[d2])))
        f2[$2++] = x2;
  return H$1(e2, r2, a2, t2 === 0 ? n$1 : i2, f2, o2, l2);
}
function te(e2, r2, a2) {
  return H$1(e2, r2, a2, c$1, d$1(J()), C$1(e2, 2, -2), 0);
}
function se(e2, r2, a2, c2) {
  return H$1(e2, r2, a2, t, C$1(e2, 0, c2), C$1(e2, c2 + 1, -1), c2);
}
function ue(c2, n2) {
  switch (m$1(c2, n2)) {
    case 5103:
      return a + "print-" + c2 + c2;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return a + c2 + c2;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return a + c2 + r$1 + c2 + e$1 + c2 + c2;
    case 6828:
    case 4268:
      return a + c2 + e$1 + c2 + c2;
    case 6165:
      return a + c2 + e$1 + "flex-" + c2 + c2;
    case 5187:
      return a + c2 + y$1(c2, /(\w+).+(:[^]+)/, a + "box-$1$2" + e$1 + "flex-$1$2") + c2;
    case 5443:
      return a + c2 + e$1 + "flex-item-" + y$1(c2, /flex-|-self/, "") + c2;
    case 4675:
      return a + c2 + e$1 + "flex-line-pack" + y$1(c2, /align-content|flex-|-self/, "") + c2;
    case 5548:
      return a + c2 + e$1 + y$1(c2, "shrink", "negative") + c2;
    case 5292:
      return a + c2 + e$1 + y$1(c2, "basis", "preferred-size") + c2;
    case 6060:
      return a + "box-" + y$1(c2, "-grow", "") + a + c2 + e$1 + y$1(c2, "grow", "positive") + c2;
    case 4554:
      return a + y$1(c2, /([^-])(transform)/g, "$1" + a + "$2") + c2;
    case 6187:
      return y$1(y$1(y$1(c2, /(zoom-|grab)/, a + "$1"), /(image-set)/, a + "$1"), c2, "") + c2;
    case 5495:
    case 3959:
      return y$1(c2, /(image-set\([^]*)/, a + "$1$`$1");
    case 4968:
      return y$1(y$1(c2, /(.+:)(flex-)?(.*)/, a + "box-pack:$3" + e$1 + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + a + c2 + c2;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return y$1(c2, /(.+)-inline(.+)/, a + "$1$2") + c2;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (A$1(c2) - 1 - n2 > 6)
        switch (z$1(c2, n2 + 1)) {
          case 109:
            if (z$1(c2, n2 + 4) !== 45)
              break;
          case 102:
            return y$1(c2, /(.+:)(.+)-([^]+)/, "$1" + a + "$2-$3$1" + r$1 + (z$1(c2, n2 + 3) == 108 ? "$3" : "$2-$3")) + c2;
          case 115:
            return ~j(c2, "stretch") ? ue(y$1(c2, "stretch", "fill-available"), n2) + c2 : c2;
        }
      break;
    case 4949:
      if (z$1(c2, n2 + 1) !== 115)
        break;
    case 6444:
      switch (z$1(c2, A$1(c2) - 3 - (~j(c2, "!important") && 10))) {
        case 107:
          return y$1(c2, ":", ":" + a) + c2;
        case 101:
          return y$1(c2, /(.+:)([^;!]+)(;|!.+)?/, "$1" + a + (z$1(c2, 14) === 45 ? "inline-" : "") + "box$3$1" + a + "$2$3$1" + e$1 + "$2box$3") + c2;
      }
      break;
    case 5936:
      switch (z$1(c2, n2 + 11)) {
        case 114:
          return a + c2 + e$1 + y$1(c2, /[svh]\w+-[tblr]{2}/, "tb") + c2;
        case 108:
          return a + c2 + e$1 + y$1(c2, /[svh]\w+-[tblr]{2}/, "tb-rl") + c2;
        case 45:
          return a + c2 + e$1 + y$1(c2, /[svh]\w+-[tblr]{2}/, "lr") + c2;
      }
      return a + c2 + e$1 + c2 + c2;
  }
  return c2;
}
function ie(e2, r2) {
  var a2 = "";
  var c2 = M(e2);
  for (var n2 = 0; n2 < c2; n2++)
    a2 += r2(e2[n2], n2, e2, r2) || "";
  return a2;
}
function fe(e2, r2, a2, s2) {
  switch (e2.type) {
    case i:
    case t:
      return e2.return = e2.return || e2.value;
    case c$1:
      return "";
    case n$1:
      e2.value = e2.props.join(",");
  }
  return A$1(a2 = ie(e2.children, s2)) ? e2.return = e2.value + "{" + a2 + "}" : "";
}
function oe(e2) {
  var r2 = M(e2);
  return function(a2, c2, n2, t2) {
    var s2 = "";
    for (var u2 = 0; u2 < r2; u2++)
      s2 += e2[u2](a2, c2, n2, t2) || "";
    return s2;
  };
}
function le(e2) {
  return function(r2) {
    if (!r2.root) {
      if (r2 = r2.return)
        e2(r2);
    }
  };
}
function ve(c2, s2, u2, i2) {
  if (!c2.return)
    switch (c2.type) {
      case t:
        c2.return = ue(c2.value, c2.length);
        break;
      case p$1:
        return ie([I$1(y$1(c2.value, "@", "@" + a), c2, "")], i2);
      case n$1:
        if (c2.length)
          return S(c2.props, function(n2) {
            switch (x$1(n2, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return ie([I$1(y$1(n2, /:(read-\w+)/, ":" + r$1 + "$1"), c2, "")], i2);
              case "::placeholder":
                return ie([I$1(y$1(n2, /:(plac\w+)/, ":" + a + "input-$1"), c2, ""), I$1(y$1(n2, /:(plac\w+)/, ":" + r$1 + "$1"), c2, ""), I$1(y$1(n2, /:(plac\w+)/, e$1 + "input-$1"), c2, "")], i2);
            }
            return "";
          });
    }
}

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (R(character)) {
      case 0:
        // &\f
        if (character === 38 && N() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += re(E$1 - 1);
        break;

      case 2:
        parsed[index] += V(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = N() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += d$1(character);
    }
  } while (character = L());

  return parsed;
};

var getRules = function getRules(value, points) {
  return U(toRules(T(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // .length indicates if this rule contains pseudo or not
  !element.length) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};

var defaultStylisPlugins = [ve];

var createCache = function createCache(options) {
  var key = options.key;

  if ( key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  var inserted = {}; // $FlowFixMe

  var container;
  var nodesToHydrate = [];

  {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  {
    var currentSheet;
    var finalizingPlugins = [fe,  le(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = oe(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return ie(ae(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1="function"===typeof Symbol&&Symbol.for,c$2=b$1?Symbol.for("react.element"):60103,d$2=b$1?Symbol.for("react.portal"):60106,e$2=b$1?Symbol.for("react.fragment"):60107,f$1=b$1?Symbol.for("react.strict_mode"):60108,g$2=b$1?Symbol.for("react.profiler"):60114,h$1=b$1?Symbol.for("react.provider"):60109,k$2=b$1?Symbol.for("react.context"):60110,l$1=b$1?Symbol.for("react.async_mode"):60111,m$2=b$1?Symbol.for("react.concurrent_mode"):60111,n$2=b$1?Symbol.for("react.forward_ref"):60112,p$2=b$1?Symbol.for("react.suspense"):60113,q$2=b$1?
Symbol.for("react.suspense_list"):60120,r$2=b$1?Symbol.for("react.memo"):60115,t$1=b$1?Symbol.for("react.lazy"):60116,v$1=b$1?Symbol.for("react.block"):60121,w$1=b$1?Symbol.for("react.fundamental"):60117,x$2=b$1?Symbol.for("react.responder"):60118,y$2=b$1?Symbol.for("react.scope"):60119;
function z$2(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c$2:switch(a=a.type,a){case l$1:case m$2:case e$2:case g$2:case f$1:case p$2:return a;default:switch(a=a&&a.$$typeof,a){case k$2:case n$2:case t$1:case r$2:case h$1:return a;default:return u}}case d$2:return u}}}function A$2(a){return z$2(a)===m$2}var AsyncMode=l$1;var ConcurrentMode=m$2;var ContextConsumer$1=k$2;var ContextProvider$1=h$1;var Element$1=c$2;var ForwardRef$1=n$2;var Fragment$1=e$2;var Lazy$1=t$1;var Memo$1=r$2;var Portal$2=d$2;
var Profiler$1=g$2;var StrictMode$1=f$1;var Suspense$1=p$2;var isAsyncMode$1=function(a){return A$2(a)||z$2(a)===l$1};var isConcurrentMode$1=A$2;var isContextConsumer$1=function(a){return z$2(a)===k$2};var isContextProvider$1=function(a){return z$2(a)===h$1};var isElement$1=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c$2};var isForwardRef$1=function(a){return z$2(a)===n$2};var isFragment$1=function(a){return z$2(a)===e$2};var isLazy$1=function(a){return z$2(a)===t$1};
var isMemo$1=function(a){return z$2(a)===r$2};var isPortal$1=function(a){return z$2(a)===d$2};var isProfiler$1=function(a){return z$2(a)===g$2};var isStrictMode$1=function(a){return z$2(a)===f$1};var isSuspense$1=function(a){return z$2(a)===p$2};
var isValidElementType$1=function(a){return "string"===typeof a||"function"===typeof a||a===e$2||a===m$2||a===g$2||a===f$1||a===p$2||a===q$2||"object"===typeof a&&null!==a&&(a.$$typeof===t$1||a.$$typeof===r$2||a.$$typeof===h$1||a.$$typeof===k$2||a.$$typeof===n$2||a.$$typeof===w$1||a.$$typeof===x$2||a.$$typeof===y$2||a.$$typeof===v$1)};var typeOf$1=z$2;

var reactIs_production_min$1 = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer$1,
	ContextProvider: ContextProvider$1,
	Element: Element$1,
	ForwardRef: ForwardRef$1,
	Fragment: Fragment$1,
	Lazy: Lazy$1,
	Memo: Memo$1,
	Portal: Portal$2,
	Profiler: Profiler$1,
	StrictMode: StrictMode$1,
	Suspense: Suspense$1,
	isAsyncMode: isAsyncMode$1,
	isConcurrentMode: isConcurrentMode$1,
	isContextConsumer: isContextConsumer$1,
	isContextProvider: isContextProvider$1,
	isElement: isElement$1,
	isForwardRef: isForwardRef$1,
	isFragment: isFragment$1,
	isLazy: isLazy$1,
	isMemo: isMemo$1,
	isPortal: isPortal$1,
	isProfiler: isProfiler$1,
	isStrictMode: isStrictMode$1,
	isSuspense: isSuspense$1,
	isValidElementType: isValidElementType$1,
	typeOf: typeOf$1
};

var reactIs$1 = createCommonjsModule(function (module) {

{
  module.exports = reactIs_production_min$1;
}
});

var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs$1.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs$1.Memo] = MEMO_STATICS;

var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false ) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        }

        break;
      }
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {

      styles += strings[i];
    }
  }


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmur2(styles) + identifierName;

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

var EmotionCacheContext = /* #__PURE__ */react.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
  key: 'css'
}) : null);
var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/react.forwardRef(function (props, ref) {
    // the cache will never be null in the browser
    var cache = react.useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

var ThemeContext = /* #__PURE__ */react.createContext({});

// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */withEmotionCache(function (props, cache) {

  var styles = props.styles;
  var serialized = serializeStyles([styles], undefined, typeof styles === 'function' || Array.isArray(styles) ? react.useContext(ThemeContext) : undefined);
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything


  var sheetRef = react.useRef();
  react.useLayoutEffect(function () {
    var key = cache.key + "-global";
    var sheet = new StyleSheet({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false; // $FlowFixMe

    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }

    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }

    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  react.useLayoutEffect(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
        rehydrating = sheetRefCurrent[1];

    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }

    if (serialized.next !== undefined) {
      // insert keyframes
      insertStyles(cache, serialized.next, true);
    }

    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }

    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return serializeStyles(args);
}

var keyframes = function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var testOmitPropsOnStringTag = isPropValid;

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
  var shouldForwardProp;

  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  return shouldForwardProp;
};

var createStyled = function createStyled(tag, options) {

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
  }

  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = withEmotionCache(function (props, cache, ref) {
      var finalTag = shouldUseAs && props.as || baseTag;
      var className = '';
      var classInterpolations = [];
      var mergedProps = props;

      if (props.theme == null) {
        mergedProps = {};

        for (var key in props) {
          mergedProps[key] = props[key];
        }

        mergedProps.theme = react.useContext(ThemeContext);
      }

      if (typeof props.className === 'string') {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }

      var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
      var rules = insertStyles(cache, serialized, typeof finalTag === 'string');
      className += cache.key + "-" + serialized.name;

      if (targetClassName !== undefined) {
        className += " " + targetClassName;
      }

      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
      var newProps = {};

      for (var _key in props) {
        if (shouldUseAs && _key === 'as') continue;

        if ( // $FlowFixMe
        finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }

      newProps.className = className;
      newProps.ref = ref;
      var ele = /*#__PURE__*/react.createElement(finalTag, newProps);

      return ele;
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && "production" !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, _extends({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles);
    };

    return Styled;
  };
};

var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

var newStyled = createStyled.bind();
tags.forEach(function (tagName) {
  // $FlowFixMe: we can ignore this because its exposed type is defined by the CreateStyled type
  newStyled[tagName] = newStyled(tagName);
});

const cache = createCache({
  key: 'css',
  prepend: true
});
function StyledEngineProvider(props) {
  const {
    injectFirst,
    children
  } = props;
  return injectFirst ? /*#__PURE__*/jsxRuntime.jsx(CacheProvider, {
    value: cache,
    children: children
  }) : children;
}

function isEmpty(obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0;
}

function GlobalStyles(props) {
  const {
    styles,
    defaultTheme = {}
  } = props;
  const globalStyles = typeof styles === 'function' ? themeInput => styles(isEmpty(themeInput) ? defaultTheme : themeInput) : styles;
  return /*#__PURE__*/jsxRuntime.jsx(Global, {
    styles: globalStyles
  });
}

/** @license Material-UI v5.0.0-beta.1
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function styled(tag, options) {
  const stylesFactory = newStyled(tag, options);

  return stylesFactory;
}

function merge(acc, item) {
  if (!item) {
    return acc;
  }

  return deepmerge(acc, item, {
    clone: false // No need to clone deep, it's way faster.

  });
}

// For instance with the first breakpoint xs: [xs, sm[.

const values = {
  xs: 0,
  // phone
  sm: 600,
  // tablets
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536 // large screens

};
const defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: key => `@media (min-width:${values[key]}px)`
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  const theme = props.theme || {};

  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }

  if (typeof propValue === 'object') {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      // key is breakpoint
      if (Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !== -1) {
        const mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        const cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }

      return acc;
    }, {});
  }

  const output = styleFromPropValue(propValue);
  return output;
}

function breakpoints(styleFunction) {
  const newStyleFunction = props => {
    const theme = props.theme || {};
    const base = styleFunction(props);
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    const extended = themeBreakpoints.keys.reduce((acc, key) => {
      if (props[key]) {
        acc = acc || {};
        acc[themeBreakpoints.up(key)] = styleFunction(_extends({
          theme
        }, props[key]));
      }

      return acc;
    }, null);
    return merge(base, extended);
  };

  newStyleFunction.propTypes =  {};
  newStyleFunction.filterProps = ['xs', 'sm', 'md', 'lg', 'xl', ...styleFunction.filterProps];
  return newStyleFunction;
}

function createEmptyBreakpointObject(breakpointsInput = {}) {
  var _breakpointsInput$key;

  const breakpointsInOrder = breakpointsInput == null ? void 0 : (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
    const breakpointStyleKey = breakpointsInput.up(key);
    acc[breakpointStyleKey] = {};
    return acc;
  }, {});
  return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key];
    const isBreakpointUnused = Object.keys(breakpointOutput).length === 0;

    if (isBreakpointUnused) {
      delete acc[key];
    }

    return acc;
  }, style);
}
function mergeBreakpointsInOrder(breakpointsInput, ...styles) {
  const emptyBreakpoints = createEmptyBreakpointObject(breakpointsInput);
  const mergedOutput = [emptyBreakpoints, ...styles].reduce((prev, next) => deepmerge(prev, next), {});
  return removeUnusedBreakpoints(Object.keys(emptyBreakpoints), mergedOutput);
}

function getPath(obj, path) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  return path.split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
}

function getValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
  let value;

  if (typeof themeMapping === 'function') {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }

  if (transform) {
    value = transform(value);
  }

  return value;
}

function style(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform
  } = options;

  const fn = props => {
    if (props[prop] == null) {
      return null;
    }

    const propValue = props[prop];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};

    const styleFromPropValue = propValueFinal => {
      let value = getValue(themeMapping, transform, propValueFinal);

      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = getValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize(propValueFinal)}`, propValueFinal);
      }

      if (cssProperty === false) {
        return value;
      }

      return {
        [cssProperty]: value
      };
    };

    return handleBreakpoints(props, propValue, styleFromPropValue);
  };

  fn.propTypes =  {};
  fn.filterProps = [prop];
  return fn;
}

function compose(...styles) {
  const handlers = styles.reduce((acc, style) => {
    style.filterProps.forEach(prop => {
      acc[prop] = style;
    });
    return acc;
  }, {});

  const fn = props => {
    return Object.keys(props).reduce((acc, prop) => {
      if (handlers[prop]) {
        return merge(acc, handlers[prop](props));
      }

      return acc;
    }, {});
  };

  fn.propTypes =  {};
  fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
  return fn;
}

function memoize$1(fn) {
  const cache = {};
  return arg => {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }

    return cache[arg];
  };
}

const properties = {
  m: 'margin',
  p: 'padding'
};
const directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};
const aliases = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py'
}; // memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec

const getCssProperties = memoize$1(prop => {
  // It's not a shorthand notation.
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }

  const [a, b] = prop.split('');
  const property = properties[a];
  const direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map(dir => property + dir) : [property + direction];
});
const marginKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY'];
const paddingKeys = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY'];
const spacingKeys = [...marginKeys, ...paddingKeys];
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
  const themeSpacing = getPath(theme, themeKey) || defaultValue;

  if (typeof themeSpacing === 'number') {
    return abs => {
      if (typeof abs === 'string') {
        return abs;
      }

      return themeSpacing * abs;
    };
  }

  if (Array.isArray(themeSpacing)) {
    return abs => {
      if (typeof abs === 'string') {
        return abs;
      }

      return themeSpacing[abs];
    };
  }

  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }

  return () => undefined;
}
function createUnarySpacing(theme) {
  return createUnaryUnit(theme, 'spacing', 8);
}
function getValue$1(transformer, propValue) {
  if (typeof propValue === 'string' || propValue == null) {
    return propValue;
  }

  const abs = Math.abs(propValue);
  const transformed = transformer(abs);

  if (propValue >= 0) {
    return transformed;
  }

  if (typeof transformed === 'number') {
    return -transformed;
  }

  return `-${transformed}`;
}
function getStyleFromPropValue(cssProperties, transformer) {
  return propValue => cssProperties.reduce((acc, cssProperty) => {
    acc[cssProperty] = getValue$1(transformer, propValue);
    return acc;
  }, {});
}

function resolveCssProperty(props, keys, prop, transformer) {
  // Using a hash computation over an array iteration could be faster, but with only 28 items,
  // it's doesn't worth the bundle size.
  if (keys.indexOf(prop) === -1) {
    return null;
  }

  const cssProperties = getCssProperties(prop);
  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  const propValue = props[prop];
  return handleBreakpoints(props, propValue, styleFromPropValue);
}

function style$1(props, keys) {
  const transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map(prop => resolveCssProperty(props, keys, prop, transformer)).reduce(merge, {});
}

function margin(props) {
  return style$1(props, marginKeys);
}
margin.propTypes =  {};
margin.filterProps = marginKeys;
function padding(props) {
  return style$1(props, paddingKeys);
}
padding.propTypes =  {};
padding.filterProps = paddingKeys;

function spacing(props) {
  return style$1(props, spacingKeys);
}

spacing.propTypes =  {};
spacing.filterProps = spacingKeys;

function getBorder(value) {
  if (typeof value !== 'number') {
    return value;
  }

  return `${value}px solid`;
}

const border = style({
  prop: 'border',
  themeKey: 'borders',
  transform: getBorder
});
const borderTop = style({
  prop: 'borderTop',
  themeKey: 'borders',
  transform: getBorder
});
const borderRight = style({
  prop: 'borderRight',
  themeKey: 'borders',
  transform: getBorder
});
const borderBottom = style({
  prop: 'borderBottom',
  themeKey: 'borders',
  transform: getBorder
});
const borderLeft = style({
  prop: 'borderLeft',
  themeKey: 'borders',
  transform: getBorder
});
const borderColor = style({
  prop: 'borderColor',
  themeKey: 'palette'
});
const borderRadius = props => {
  if (props.borderRadius) {
    const transformer = createUnaryUnit(props.theme, 'shape.borderRadius', 4);

    const styleFromPropValue = propValue => ({
      borderRadius: getValue$1(transformer, propValue)
    });

    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
  }

  return null;
};
borderRadius.propTypes =  {};
borderRadius.filterProps = ['borderRadius'];
const borders = compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderRadius);

const displayPrint = style({
  prop: 'displayPrint',
  cssProperty: false,
  transform: value => ({
    '@media print': {
      display: value
    }
  })
});
const displayRaw = style({
  prop: 'display'
});
const overflow = style({
  prop: 'overflow'
});
const textOverflow = style({
  prop: 'textOverflow'
});
const visibility = style({
  prop: 'visibility'
});
const whiteSpace = style({
  prop: 'whiteSpace'
});
var display = compose(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace);

const flexBasis = style({
  prop: 'flexBasis'
});
const flexDirection = style({
  prop: 'flexDirection'
});
const flexWrap = style({
  prop: 'flexWrap'
});
const justifyContent = style({
  prop: 'justifyContent'
});
const alignItems = style({
  prop: 'alignItems'
});
const alignContent = style({
  prop: 'alignContent'
});
const order = style({
  prop: 'order'
});
const flex = style({
  prop: 'flex'
});
const flexGrow = style({
  prop: 'flexGrow'
});
const flexShrink = style({
  prop: 'flexShrink'
});
const alignSelf = style({
  prop: 'alignSelf'
});
const justifyItems = style({
  prop: 'justifyItems'
});
const justifySelf = style({
  prop: 'justifySelf'
});
const flexbox = compose(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);

const gap = props => {
  if (props.gap) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8);

    const styleFromPropValue = propValue => ({
      gap: getValue$1(transformer, propValue)
    });

    return handleBreakpoints(props, props.gap, styleFromPropValue);
  }

  return null;
};
gap.propTypes =  {};
gap.filterProps = ['gap'];
const columnGap = props => {
  if (props.columnGap) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8);

    const styleFromPropValue = propValue => ({
      columnGap: getValue$1(transformer, propValue)
    });

    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
  }

  return null;
};
columnGap.propTypes =  {};
columnGap.filterProps = ['columnGap'];
const rowGap = props => {
  if (props.rowGap) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8);

    const styleFromPropValue = propValue => ({
      rowGap: getValue$1(transformer, propValue)
    });

    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
  }

  return null;
};
rowGap.propTypes =  {};
rowGap.filterProps = ['rowGap'];
const gridColumn = style({
  prop: 'gridColumn'
});
const gridRow = style({
  prop: 'gridRow'
});
const gridAutoFlow = style({
  prop: 'gridAutoFlow'
});
const gridAutoColumns = style({
  prop: 'gridAutoColumns'
});
const gridAutoRows = style({
  prop: 'gridAutoRows'
});
const gridTemplateColumns = style({
  prop: 'gridTemplateColumns'
});
const gridTemplateRows = style({
  prop: 'gridTemplateRows'
});
const gridTemplateAreas = style({
  prop: 'gridTemplateAreas'
});
const gridArea = style({
  prop: 'gridArea'
});
const grid = compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);

const color = style({
  prop: 'color',
  themeKey: 'palette'
});
const bgcolor = style({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette'
});
const backgroundColor = style({
  prop: 'backgroundColor',
  themeKey: 'palette'
});
const palette = compose(color, bgcolor, backgroundColor);

const position = style({
  prop: 'position'
});
const zIndex = style({
  prop: 'zIndex',
  themeKey: 'zIndex'
});
const top = style({
  prop: 'top'
});
const right = style({
  prop: 'right'
});
const bottom = style({
  prop: 'bottom'
});
const left = style({
  prop: 'left'
});
var positions = compose(position, zIndex, top, right, bottom, left);

const boxShadow = style({
  prop: 'boxShadow',
  themeKey: 'shadows'
});

function transform(value) {
  return value <= 1 ? `${value * 100}%` : value;
}

const width = style({
  prop: 'width',
  transform
});
const maxWidth = props => {
  if (props.maxWidth) {
    const styleFromPropValue = propValue => {
      const breakpoint = props.theme.breakpoints.values[propValue];
      return {
        maxWidth: breakpoint || transform(propValue)
      };
    };

    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
  }

  return null;
};
maxWidth.filterProps = ['maxWidth'];
const minWidth = style({
  prop: 'minWidth',
  transform
});
const height = style({
  prop: 'height',
  transform
});
const maxHeight = style({
  prop: 'maxHeight',
  transform
});
const minHeight = style({
  prop: 'minHeight',
  transform
});
const sizeWidth = style({
  prop: 'size',
  cssProperty: 'width',
  transform
});
const sizeHeight = style({
  prop: 'size',
  cssProperty: 'height',
  transform
});
const boxSizing = style({
  prop: 'boxSizing'
});
const sizing = compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);

const fontFamily = style({
  prop: 'fontFamily',
  themeKey: 'typography'
});
const fontSize = style({
  prop: 'fontSize',
  themeKey: 'typography'
});
const fontStyle = style({
  prop: 'fontStyle',
  themeKey: 'typography'
});
const fontWeight = style({
  prop: 'fontWeight',
  themeKey: 'typography'
});
const letterSpacing = style({
  prop: 'letterSpacing'
});
const lineHeight = style({
  prop: 'lineHeight'
});
const textAlign = style({
  prop: 'textAlign'
});
const typographyVariant = style({
  prop: 'typography',
  cssProperty: false,
  themeKey: 'typography'
});
const typography = compose(typographyVariant, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign);

const filterPropsMapping = {
  borders: borders.filterProps,
  display: display.filterProps,
  flexbox: flexbox.filterProps,
  grid: grid.filterProps,
  positions: positions.filterProps,
  palette: palette.filterProps,
  shadows: boxShadow.filterProps,
  sizing: sizing.filterProps,
  spacing: spacing.filterProps,
  typography: typography.filterProps
};
const styleFunctionMapping = {
  borders,
  display,
  flexbox,
  grid,
  positions,
  palette,
  shadows: boxShadow,
  sizing,
  spacing,
  typography
};
const propToStyleFunction = Object.keys(filterPropsMapping).reduce((acc, styleFnName) => {
  filterPropsMapping[styleFnName].forEach(propName => {
    acc[propName] = styleFunctionMapping[styleFnName];
  });
  return acc;
}, {});

function getThemeValue(prop, value, theme) {
  const inputProps = {
    [prop]: value,
    theme
  };
  const styleFunction = propToStyleFunction[prop];
  return styleFunction ? styleFunction(inputProps) : {
    [prop]: value
  };
}

function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
  const union = new Set(allKeys);
  return objects.every(object => union.size === Object.keys(object).length);
}

function callIfFn(maybeFn, arg) {
  return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
}

function styleFunctionSx(props) {
  const {
    sx: styles,
    theme = {}
  } = props || {};
  if (!styles) return null;

  if (typeof styles === 'function') {
    return styles(theme);
  }

  if (typeof styles !== 'object') {
    // value
    return styles;
  }

  const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
  const breakpointsKeys = Object.keys(emptyBreakpoints);
  let css = emptyBreakpoints;
  Object.keys(styles).forEach(styleKey => {
    const value = callIfFn(styles[styleKey], theme);

    if (typeof value === 'object') {
      if (propToStyleFunction[styleKey]) {
        css = merge(css, getThemeValue(styleKey, value, theme));
      } else {
        const breakpointsValues = handleBreakpoints({
          theme
        }, value, x => ({
          [styleKey]: x
        }));

        if (objectsHaveSameKeys(breakpointsValues, value)) {
          css[styleKey] = styleFunctionSx({
            sx: value,
            theme
          });
        } else {
          css = merge(css, breakpointsValues);
        }
      }
    } else {
      css = merge(css, getThemeValue(styleKey, value, theme));
    }
  });
  return removeUnusedBreakpoints(breakpointsKeys, css);
}

styleFunctionSx.filterProps = ['sx'];

const _excluded$5 = ["sx"];

const splitProps = props => {
  const result = {
    systemProps: {},
    otherProps: {}
  };
  Object.keys(props).forEach(prop => {
    if (propToStyleFunction[prop]) {
      result.systemProps[prop] = props[prop];
    } else {
      result.otherProps[prop] = props[prop];
    }
  });
  return result;
};

function extendSxProp(props) {
  const {
    sx: inSx
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$5);

  const {
    systemProps,
    otherProps
  } = splitProps(other);
  return _extends({}, otherProps, {
    sx: _extends({}, systemProps, inSx)
  });
}

const _excluded$6 = ["values", "unit", "step"];

function createBreakpoints(breakpoints) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values = {
      xs: 0,
      // phone
      sm: 600,
      // tablets
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536 // large screens

    },
    unit = 'px',
    step = 5
  } = breakpoints,
        other = _objectWithoutPropertiesLoose(breakpoints, _excluded$6);

  const keys = Object.keys(values);

  function up(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  }

  function down(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }

  function between(start, end) {
    const endIndex = keys.indexOf(end);
    return `@media (min-width:${typeof values[start] === 'number' ? values[start] : start}${unit}) and ` + `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100}${unit})`;
  }

  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }

    return up(key);
  }

  return _extends({
    keys,
    values,
    up,
    down,
    between,
    only,
    unit
  }, other);
}

const shape = {
  borderRadius: 4
};

/* tslint:enable:unified-signatures */
function createSpacing(spacingInput = 8) {
  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid, which aligns both spacing and the overall layout.
  // Smaller components, such as icons, can align to a 4dp grid.
  // https://material.io/design/layout/understanding-layout.html#usage


  const transform = createUnarySpacing({
    spacing: spacingInput
  });

  const spacing = (...argsInput) => {

    const args = argsInput.length === 0 ? [1] : argsInput;
    return args.map(argument => {
      const output = transform(argument);
      return typeof output === 'number' ? `${output}px` : output;
    }).join(' ');
  };

  spacing.mui = true;
  return spacing;
}

const _excluded$7 = ["breakpoints", "palette", "spacing", "shape"];

function createTheme(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    shape: shapeInput = {}
  } = options,
        other = _objectWithoutPropertiesLoose(options, _excluded$7);

  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing = createSpacing(spacingInput);
  let muiTheme = deepmerge({
    breakpoints,
    direction: 'ltr',
    components: {},
    // Inject component definitions.
    palette: _extends({
      mode: 'light'
    }, paletteInput),
    spacing,
    shape: _extends({}, shape, shapeInput)
  }, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  return muiTheme;
}

const ThemeContext$1 = /*#__PURE__*/react.createContext(null);

function useTheme() {
  const theme = react.useContext(ThemeContext$1);

  return theme;
}

const hasSymbol = typeof Symbol === 'function' && Symbol.for;
var nested = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';

function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    const mergedTheme = localTheme(outerTheme);

    return mergedTheme;
  }

  return _extends({}, outerTheme, localTheme);
}
/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */


function ThemeProvider(props) {
  const {
    children,
    theme: localTheme
  } = props;
  const outerTheme = useTheme();

  const theme = react.useMemo(() => {
    const output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);

    if (output != null) {
      output[nested] = outerTheme !== null;
    }

    return output;
  }, [localTheme, outerTheme]);
  return /*#__PURE__*/jsxRuntime.jsx(ThemeContext$1.Provider, {
    value: theme,
    children: children
  });
}

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function useTheme$1(defaultTheme = null) {
  const contextTheme = useTheme();
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
}

const systemDefaultTheme = createTheme();

function useTheme$2(defaultTheme = systemDefaultTheme) {
  return useTheme$1(defaultTheme);
}

const _excluded$8 = ["className", "component"];
function createBox(options = {}) {
  const {
    defaultTheme
  } = options;
  const BoxRoot = styled('div')(styleFunctionSx);
  const Box = /*#__PURE__*/react.forwardRef(function Box(inProps, ref) {
    const theme = useTheme$2(defaultTheme);

    const _extendSxProp = extendSxProp(inProps),
          {
      className,
      component = 'div'
    } = _extendSxProp,
          other = _objectWithoutPropertiesLoose(_extendSxProp, _excluded$8);

    return /*#__PURE__*/jsxRuntime.jsx(BoxRoot, _extends({
      as: component,
      ref: ref,
      className: __pika_web_default_export_for_treeshaking__$1(className, 'MuiBox-root'),
      theme: theme
    }, other));
  });
  return Box;
}

const Box = createBox();

const _excluded$9 = ["variant"];

function isEmpty$1(string) {
  return string.length === 0;
}
/**
 * Generates string classKey based on the properties provided. It starts with the
 * variant if defined, and then it appends all other properties in alphabetical order.
 * @param {object} props - the properties for which the classKey should be created.
 */


function propsToClassKey(props) {
  const {
    variant
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$9);

  let classKey = variant || '';
  Object.keys(other).sort().forEach(key => {
    if (key === 'color') {
      classKey += isEmpty$1(classKey) ? props[key] : capitalize(props[key]);
    } else {
      classKey += `${isEmpty$1(classKey) ? key : capitalize(key)}${capitalize(props[key].toString())}`;
    }
  });
  return classKey;
}

const _excluded$a = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"],
      _excluded2 = ["theme"],
      _excluded3 = ["theme"];

function isEmpty$2(obj) {
  return Object.keys(obj).length === 0;
}

const getStyleOverrides = (name, theme) => {
  if (theme.components && theme.components[name] && theme.components[name].styleOverrides) {
    return theme.components[name].styleOverrides;
  }

  return null;
};

const getVariantStyles = (name, theme) => {
  let variants = [];

  if (theme && theme.components && theme.components[name] && theme.components[name].variants) {
    variants = theme.components[name].variants;
  }

  const variantsStyles = {};
  variants.forEach(definition => {
    const key = propsToClassKey(definition.props);
    variantsStyles[key] = definition.style;
  });
  return variantsStyles;
};

const variantsResolver = (props, styles, theme, name) => {
  var _theme$components, _theme$components$nam;

  const {
    styleProps = {}
  } = props;
  let variantsStyles = {};
  const themeVariants = theme == null ? void 0 : (_theme$components = theme.components) == null ? void 0 : (_theme$components$nam = _theme$components[name]) == null ? void 0 : _theme$components$nam.variants;

  if (themeVariants) {
    themeVariants.forEach(themeVariant => {
      let isMatch = true;
      Object.keys(themeVariant.props).forEach(key => {
        if (styleProps[key] !== themeVariant.props[key] && props[key] !== themeVariant.props[key]) {
          isMatch = false;
        }
      });

      if (isMatch) {
        variantsStyles = _extends({}, variantsStyles, styles[propsToClassKey(themeVariant.props)]);
      }
    });
  }

  return variantsStyles;
};

function shouldForwardProp(prop) {
  return prop !== 'styleProps' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
const systemDefaultTheme$1 = createTheme();

const lowercaseFirstLetter = string => {
  return string.charAt(0).toLowerCase() + string.slice(1);
};

function createStyled$1(input = {}) {
  const {
    defaultTheme = systemDefaultTheme$1,
    rootShouldForwardProp = shouldForwardProp,
    slotShouldForwardProp = shouldForwardProp
  } = input;
  return (tag, inputOptions = {}) => {
    const {
      name: componentName,
      slot: componentSlot,
      skipVariantsResolver: inputSkipVariantsResolver,
      skipSx: inputSkipSx,
      overridesResolver
    } = inputOptions,
          options = _objectWithoutPropertiesLoose(inputOptions, _excluded$a); // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.


    const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver : componentSlot && componentSlot !== 'Root' || false;
    const skipSx = inputSkipSx || false;
    let className;

    if (componentName) {
      className = `${componentName}-${lowercaseFirstLetter(componentSlot || 'Root')}`;
    }

    const defaultStyledResolver = styled(tag, _extends({}, !componentSlot || componentSlot === 'Root' ? {
      shouldForwardProp: rootShouldForwardProp
    } : {
      shouldForwardProp: slotShouldForwardProp
    }, {
      label: className || componentName || ''
    }, options));

    const muiStyledResolver = (styleArg, ...expressions) => {
      const expressionsWithDefaultTheme = expressions ? expressions.map(stylesArg => {
        return typeof stylesArg === 'function' ? _ref => {
          let {
            theme: themeInput
          } = _ref,
              other = _objectWithoutPropertiesLoose(_ref, _excluded2);

          return stylesArg(_extends({
            theme: isEmpty$2(themeInput) ? defaultTheme : themeInput
          }, other));
        } : stylesArg;
      }) : [];
      let transformedStyleArg = styleArg;

      if (componentName && overridesResolver) {
        expressionsWithDefaultTheme.push(props => {
          const theme = isEmpty$2(props.theme) ? defaultTheme : props.theme;
          const styleOverrides = getStyleOverrides(componentName, theme);

          if (styleOverrides) {
            return overridesResolver(props, styleOverrides);
          }

          return null;
        });
      }

      if (componentName && overridesResolver && !skipVariantsResolver) {
        expressionsWithDefaultTheme.push(props => {
          const theme = isEmpty$2(props.theme) ? defaultTheme : props.theme;
          return variantsResolver(props, getVariantStyles(componentName, theme), theme, componentName);
        });
      }

      if (!skipSx) {
        expressionsWithDefaultTheme.push(props => {
          const theme = isEmpty$2(props.theme) ? defaultTheme : props.theme;
          return styleFunctionSx(_extends({}, props, {
            theme
          }));
        });
      }

      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;

      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
        const placeholders = new Array(numOfCustomFnsApplied).fill(''); // If the type is array, than we need to add placeholders in the template for the overrides, variants and the sx styles.

        transformedStyleArg = [...styleArg, ...placeholders];
        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
      } else if (typeof styleArg === 'function') {
        // If the type is function, we need to define the default theme.
        transformedStyleArg = _ref2 => {
          let {
            theme: themeInput
          } = _ref2,
              other = _objectWithoutPropertiesLoose(_ref2, _excluded3);

          return styleArg(_extends({
            theme: isEmpty$2(themeInput) ? defaultTheme : themeInput
          }, other));
        };
      }

      const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);

      return Component;
    };

    return muiStyledResolver;
  };
}

const styled$1 = createStyled$1();

/* eslint-disable no-restricted-syntax */
function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;

  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }

  const output = _extends({}, props); // Resolve default props, code borrow from React source.
  // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221


  const defaultProps = theme.components[name].defaultProps;
  let propName;

  for (propName in defaultProps) {
    if (output[propName] === undefined) {
      output[propName] = defaultProps[propName];
    }
  }

  return output;
}

function useThemeProps({
  props,
  name,
  defaultTheme
}) {
  const theme = useTheme$2(defaultTheme);
  const mergedProps = getThemeProps({
    theme,
    name,
    props
  });
  return mergedProps;
}

/* eslint-disable @typescript-eslint/no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp$1(value, min = 0, max = 1) {

  return Math.min(Math.max(min, value), max);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function hexToRgb(color) {
  color = color.substr(1);
  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
  let colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(n => n + n);
  }

  return colors ? `rgb${colors.length === 4 ? 'a' : ''}(${colors.map((n, index) => {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', ')})` : '';
}

function intToHex(int) {
  const hex = int.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}
/**
 * Converts a color from CSS rgb format to CSS hex format.
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */


function rgbToHex(color) {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }

  const {
    values
  } = decomposeColor(color);
  return `#${values.map((n, i) => intToHex(i === 3 ? Math.round(255 * n) : n)).join('')}`;
}
/**
 * Converts a color from hsl format to rgb format.
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */

function hslToRgb(color) {
  color = decomposeColor(color);
  const {
    values
  } = color;
  const h = values[0];
  const s = values[1] / 100;
  const l = values[2] / 100;
  const a = s * Math.min(l, 1 - l);

  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

  let type = 'rgb';
  const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type,
    values: rgb
  });
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */

function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  const marker = color.indexOf('(');
  const type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(type) === -1) {
    throw new Error( formatMuiErrorMessage(9, color));
  }

  let values = color.substring(marker + 1, color.length - 1);
  let colorSpace;

  if (type === 'color') {
    values = values.split(' ');
    colorSpace = values.shift();

    if (values.length === 4 && values[3].charAt(0) === '/') {
      values[3] = values[3].substr(1);
    }

    if (['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(colorSpace) === -1) {
      throw new Error( formatMuiErrorMessage(10, colorSpace));
    }
  } else {
    values = values.split(',');
  }

  values = values.map(value => parseFloat(value));
  return {
    type,
    values,
    colorSpace
  };
}
/**
 * Converts a color object with type and values to a string.
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */

function recomposeColor(color) {
  const {
    type,
    colorSpace
  } = color;
  let {
    values
  } = color;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map((n, i) => i < 3 ? parseInt(n, 10) : n);
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = `${values[1]}%`;
    values[2] = `${values[2]}%`;
  }

  if (type.indexOf('color') !== -1) {
    values = `${colorSpace} ${values.join(' ')}`;
  } else {
    values = `${values.join(', ')}`;
  }

  return `${type}(${values})`;
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */

function getContrastRatio(foreground, background) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */

function getLuminance(color) {
  color = decomposeColor(color);
  let rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(val => {
    if (color.type !== 'color') {
      val /= 255; // normalized
    }

    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  }); // Truncate at 3 digits

  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function emphasize(color, coefficient = 0.15) {
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
/**
 * Sets the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} value - value to set the alpha channel to in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function alpha(color, value) {
  color = decomposeColor(color);
  value = clamp$1(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  if (color.type === 'color') {
    color.values[3] = `/${value}`;
  } else {
    color.values[3] = value;
  }

  return recomposeColor(color);
}
/**
 * Darkens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp$1(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1 || color.type.indexOf('color') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp$1(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  } else if (color.type.indexOf('color') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (1 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

function InnerThemeProvider(props) {
  const theme = useTheme$2();
  return /*#__PURE__*/jsxRuntime.jsx(ThemeContext.Provider, {
    value: typeof theme === 'object' ? theme : {},
    children: props.children
  });
}
/**
 * This component makes the `theme` available down the React tree.
 * It should preferably be used at **the root of your component tree**.
 */

function ThemeProvider$1(props) {
  const {
    children,
    theme: localTheme
  } = props;
  return /*#__PURE__*/jsxRuntime.jsx(ThemeProvider, {
    theme: localTheme,
    children: /*#__PURE__*/jsxRuntime.jsx(InnerThemeProvider, {
      children: children
    })
  });
}

var esm$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  css: css,
  keyframes: keyframes,
  GlobalStyles: GlobalStyles,
  StyledEngineProvider: StyledEngineProvider,
  borders: borders,
  breakpoints: breakpoints,
  handleBreakpoints: handleBreakpoints,
  mergeBreakpointsInOrder: mergeBreakpointsInOrder,
  compose: compose,
  display: display,
  flexbox: flexbox,
  grid: grid,
  palette: palette,
  positions: positions,
  shadows: boxShadow,
  sizing: sizing,
  spacing: spacing,
  style: style,
  getPath: getPath,
  typography: typography,
  unstable_styleFunctionSx: styleFunctionSx,
  unstable_extendSxProp: extendSxProp,
  unstable_getThemeValue: getThemeValue,
  Box: Box,
  createBox: createBox,
  createStyled: createStyled$1,
  styled: styled$1,
  createTheme: createTheme,
  createBreakpoints: createBreakpoints,
  createSpacing: createSpacing,
  shape: shape,
  useThemeProps: useThemeProps,
  getThemeProps: getThemeProps,
  useTheme: useTheme$2,
  useThemeWithoutDefault: useTheme$1,
  ThemeProvider: ThemeProvider$1,
  border: border,
  borderTop: borderTop,
  borderRight: borderRight,
  borderBottom: borderBottom,
  borderLeft: borderLeft,
  borderColor: borderColor,
  borderRadius: borderRadius,
  flexBasis: flexBasis,
  flexDirection: flexDirection,
  flexWrap: flexWrap,
  justifyContent: justifyContent,
  alignItems: alignItems,
  alignContent: alignContent,
  order: order,
  flex: flex,
  flexGrow: flexGrow,
  flexShrink: flexShrink,
  alignSelf: alignSelf,
  justifyItems: justifyItems,
  justifySelf: justifySelf,
  gap: gap,
  columnGap: columnGap,
  rowGap: rowGap,
  gridColumn: gridColumn,
  gridRow: gridRow,
  gridAutoFlow: gridAutoFlow,
  gridAutoColumns: gridAutoColumns,
  gridAutoRows: gridAutoRows,
  gridTemplateColumns: gridTemplateColumns,
  gridTemplateRows: gridTemplateRows,
  gridTemplateAreas: gridTemplateAreas,
  gridArea: gridArea,
  color: color,
  bgcolor: bgcolor,
  backgroundColor: backgroundColor,
  position: position,
  zIndex: zIndex,
  top: top,
  right: right,
  bottom: bottom,
  left: left,
  width: width,
  maxWidth: maxWidth,
  minWidth: minWidth,
  height: height,
  maxHeight: maxHeight,
  minHeight: minHeight,
  sizeWidth: sizeWidth,
  sizeHeight: sizeHeight,
  boxSizing: boxSizing,
  createUnaryUnit: createUnaryUnit,
  createUnarySpacing: createUnarySpacing,
  getValue: getValue$1,
  getStyleFromPropValue: getStyleFromPropValue,
  margin: margin,
  padding: padding,
  fontFamily: fontFamily,
  fontSize: fontSize,
  fontStyle: fontStyle,
  fontWeight: fontWeight,
  letterSpacing: letterSpacing,
  lineHeight: lineHeight,
  textAlign: textAlign,
  typographyVariant: typographyVariant,
  shouldForwardProp: shouldForwardProp,
  systemDefaultTheme: systemDefaultTheme$1,
  hexToRgb: hexToRgb,
  rgbToHex: rgbToHex,
  hslToRgb: hslToRgb,
  decomposeColor: decomposeColor,
  recomposeColor: recomposeColor,
  getContrastRatio: getContrastRatio,
  getLuminance: getLuminance,
  emphasize: emphasize,
  alpha: alpha,
  darken: darken,
  lighten: lighten
});

var createMixins_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createMixins;

var _extends2 = interopRequireDefault(_extends_1);

function createMixins(breakpoints, spacing, mixins) {
  return (0, _extends2.default)({
    toolbar: {
      minHeight: 56,
      [`${breakpoints.up('xs')} and (orientation: landscape)`]: {
        minHeight: 48
      },
      [breakpoints.up('sm')]: {
        minHeight: 64
      }
    }
  }, mixins);
}
});

var common_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const common = {
  black: '#000',
  white: '#fff'
};
var _default = common;
exports.default = _default;
});

var grey_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#f5f5f5',
  A200: '#eeeeee',
  A400: '#bdbdbd',
  A700: '#616161'
};
var _default = grey;
exports.default = _default;
});

var purple_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const purple = {
  50: '#f3e5f5',
  100: '#e1bee7',
  200: '#ce93d8',
  300: '#ba68c8',
  400: '#ab47bc',
  500: '#9c27b0',
  600: '#8e24aa',
  700: '#7b1fa2',
  800: '#6a1b9a',
  900: '#4a148c',
  A100: '#ea80fc',
  A200: '#e040fb',
  A400: '#d500f9',
  A700: '#aa00ff'
};
var _default = purple;
exports.default = _default;
});

var red_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
var _default = red;
exports.default = _default;
});

var orange_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};
var _default = orange;
exports.default = _default;
});

var blue_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};
var _default = blue;
exports.default = _default;
});

var lightBlue_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const lightBlue = {
  50: '#e1f5fe',
  100: '#b3e5fc',
  200: '#81d4fa',
  300: '#4fc3f7',
  400: '#29b6f6',
  500: '#03a9f4',
  600: '#039be5',
  700: '#0288d1',
  800: '#0277bd',
  900: '#01579b',
  A100: '#80d8ff',
  A200: '#40c4ff',
  A400: '#00b0ff',
  A700: '#0091ea'
};
var _default = lightBlue;
exports.default = _default;
});

var green_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};
var _default = green;
exports.default = _default;
});

var createPalette_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPalette;
exports.dark = exports.light = void 0;

var _extends2 = interopRequireDefault(_extends_1);

var _objectWithoutPropertiesLoose2 = interopRequireDefault(objectWithoutPropertiesLoose);





var _common = interopRequireDefault(common_1);

var _grey = interopRequireDefault(grey_1);

var _purple = interopRequireDefault(purple_1);

var _red = interopRequireDefault(red_1);

var _orange = interopRequireDefault(orange_1);

var _blue = interopRequireDefault(blue_1);

var _lightBlue = interopRequireDefault(lightBlue_1);

var _green = interopRequireDefault(green_1);

const _excluded = ["mode", "contrastThreshold", "tonalOffset"];
const light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.6)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: _common.default.white,
    default: _common.default.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
exports.light = light;
const dark = {
  text: {
    primary: _common.default.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#121212',
    default: '#121212'
  },
  action: {
    active: _common.default.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
exports.dark = dark;

function addLightOrDark(intent, direction, shade, tonalOffset) {
  const tonalOffsetLight = tonalOffset.light || tonalOffset;
  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = (0, esm$1.lighten)(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = (0, esm$1.darken)(intent.main, tonalOffsetDark);
    }
  }
}

function getDefaultPrimary(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: _blue.default[200],
      light: _blue.default[50],
      dark: _blue.default[400]
    };
  }

  return {
    main: _blue.default[700],
    light: _blue.default[400],
    dark: _blue.default[800]
  };
}

function getDefaultSecondary(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: _purple.default[200],
      light: _purple.default[50],
      dark: _purple.default[400]
    };
  }

  return {
    main: _purple.default[500],
    light: _purple.default[300],
    dark: _purple.default[700]
  };
}

function getDefaultError(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: _red.default[500],
      light: _red.default[300],
      dark: _red.default[700]
    };
  }

  return {
    main: _red.default[700],
    light: _red.default[400],
    dark: _red.default[800]
  };
}

function getDefaultInfo(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: _lightBlue.default[400],
      light: _lightBlue.default[300],
      dark: _lightBlue.default[700]
    };
  }

  return {
    main: _lightBlue.default[700],
    light: _lightBlue.default[500],
    dark: _lightBlue.default[900]
  };
}

function getDefaultSuccess(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: _green.default[400],
      light: _green.default[300],
      dark: _green.default[700]
    };
  }

  return {
    main: _green.default[800],
    light: _green.default[500],
    dark: _green.default[900]
  };
}

function getDefaultWarning(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: _orange.default[400],
      light: _orange.default[300],
      dark: _orange.default[700]
    };
  }

  return {
    main: '#ED6C02',
    // closest to orange[800] that pass 3:1.
    light: _orange.default[500],
    dark: _orange.default[900]
  };
}

function createPalette(palette) {
  const {
    mode = 'light',
    contrastThreshold = 3,
    tonalOffset = 0.2
  } = palette,
        other = (0, _objectWithoutPropertiesLoose2.default)(palette, _excluded);
  const primary = palette.primary || getDefaultPrimary(mode);
  const secondary = palette.secondary || getDefaultSecondary(mode);
  const error = palette.error || getDefaultError(mode);
  const info = palette.info || getDefaultInfo(mode);
  const success = palette.success || getDefaultSuccess(mode);
  const warning = palette.warning || getDefaultWarning(mode); // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54

  function getContrastText(background) {
    const contrastText = (0, esm$1.getContrastRatio)(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    return contrastText;
  }

  const augmentColor = ({
    color,
    name,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700
  }) => {
    color = (0, _extends2.default)({}, color);

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    if (!color.hasOwnProperty('main')) {
      throw new Error( (0, esm.formatMuiErrorMessage)(11, name ? ` (${name})` : '', mainShade));
    }

    if (typeof color.main !== 'string') {
      throw new Error( (0, esm.formatMuiErrorMessage)(12, name ? ` (${name})` : '', JSON.stringify(color.main)));
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  };

  const modes = {
    dark,
    light
  };

  const paletteOutput = (0, esm.deepmerge)((0, _extends2.default)({
    // A collection of common colors.
    common: _common.default,
    // The palette mode, can be light or dark.
    mode,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor({
      color: primary,
      name: 'primary'
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor({
      color: secondary,
      name: 'secondary',
      mainShade: 'A400',
      lightShade: 'A200',
      darkShade: 'A700'
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor({
      color: error,
      name: 'error'
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor({
      color: warning,
      name: 'warning'
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor({
      color: info,
      name: 'info'
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor({
      color: success,
      name: 'success'
    }),
    // The grey colors.
    grey: _grey.default,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText,
    // Generate a rich color object.
    augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset
  }, modes[mode]), other);
  return paletteOutput;
}
});

var createTypography_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTypography;

var _extends2 = interopRequireDefault(_extends_1);

var _objectWithoutPropertiesLoose2 = interopRequireDefault(objectWithoutPropertiesLoose);



const _excluded = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];

function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

const caseAllCaps = {
  textTransform: 'uppercase'
};
const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */

function createTypography(palette, typography) {
  const _ref = typeof typography === 'function' ? typography(palette) : typography,
        {
    fontFamily = defaultFontFamily,
    // The default font size of the Material Specification.
    fontSize = 14,
    // px
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    // Tell Material-UI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16,
    // Apply the CSS properties to all the variants.
    allVariants,
    pxToRem: pxToRem2
  } = _ref,
        other = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  const coef = fontSize / 14;

  const pxToRem = pxToRem2 || (size => `${size / htmlFontSize * coef}rem`);

  const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => (0, _extends2.default)({
    fontFamily,
    fontWeight,
    fontSize: pxToRem(size),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight
  }, fontFamily === defaultFontFamily ? {
    letterSpacing: `${round(letterSpacing / size)}em`
  } : {}, casing, allVariants);

  const variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return (0, esm.deepmerge)((0, _extends2.default)({
    htmlFontSize,
    pxToRem,
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep

  });
}
});

var shadows_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;

function createShadow(...px) {
  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(',');
} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


const shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
var _default = shadows;
exports.default = _default;
});

var createTransitions_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTransitions;
exports.duration = exports.easing = void 0;

var _objectWithoutPropertiesLoose2 = interopRequireDefault(objectWithoutPropertiesLoose);

var _extends2 = interopRequireDefault(_extends_1);

const _excluded = ["duration", "easing", "delay"];
// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
const easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing

exports.easing = easing;
const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
exports.duration = duration;

function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}

function getAutoHeightDuration(height) {
  if (!height) {
    return 0;
  }

  const constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}

function createTransitions(inputTransitions) {
  const mergedEasing = (0, _extends2.default)({}, easing, inputTransitions.easing);
  const mergedDuration = (0, _extends2.default)({}, duration, inputTransitions.duration);

  const create = (props = ['all'], options = {}) => {
    const {
      duration: durationOption = mergedDuration.standard,
      easing: easingOption = mergedEasing.easeInOut,
      delay = 0
    } = options,
          other = (0, _objectWithoutPropertiesLoose2.default)(options, _excluded);

    return (Array.isArray(props) ? props : [props]).map(animatedProp => `${animatedProp} ${typeof durationOption === 'string' ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`).join(',');
  };

  return (0, _extends2.default)({
    getAutoHeightDuration,
    create
  }, inputTransitions, {
    easing: mergedEasing,
    duration: mergedDuration
  });
}
});

var zIndex_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// We need to centralize the zIndex definitions as they work
// like global values in the browser.
const zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
var _default = zIndex;
exports.default = _default;
});

var createTheme_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMuiTheme = createMuiTheme;
exports.default = void 0;

var _extends2 = interopRequireDefault(_extends_1);

var _objectWithoutPropertiesLoose2 = interopRequireDefault(objectWithoutPropertiesLoose);







var _createMixins = interopRequireDefault(createMixins_1);

var _createPalette = interopRequireDefault(createPalette_1);

var _createTypography = interopRequireDefault(createTypography_1);

var _shadows = interopRequireDefault(shadows_1);

var _createTransitions = interopRequireDefault(createTransitions_1);

var _zIndex = interopRequireDefault(zIndex_1);

const _excluded = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];

function createTheme(options = {}, ...args) {
  const {
    mixins: mixinsInput = {},
    palette: paletteInput = {},
    transitions: transitionsInput = {},
    typography: typographyInput = {}
  } = options,
        other = (0, _objectWithoutPropertiesLoose2.default)(options, _excluded);
  const palette = (0, _createPalette.default)(paletteInput);
  const systemTheme = (0, esm$1.createTheme)(options);
  let muiTheme = (0, esm.deepmerge)(systemTheme, {
    mixins: (0, _createMixins.default)(systemTheme.breakpoints, systemTheme.spacing, mixinsInput),
    palette,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: _shadows.default.slice(),
    typography: (0, _createTypography.default)(palette, typographyInput),
    transitions: (0, _createTransitions.default)(transitionsInput),
    zIndex: (0, _extends2.default)({}, _zIndex.default)
  });
  muiTheme = (0, esm.deepmerge)(muiTheme, other);
  muiTheme = args.reduce((acc, argument) => (0, esm.deepmerge)(acc, argument), muiTheme);

  return muiTheme;
}

function createMuiTheme(...args) {

  return createTheme(...args);
}

var _default = createTheme;
exports.default = _default;
});

var defaultTheme_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createTheme = interopRequireDefault(createTheme_1);

const defaultTheme = (0, _createTheme.default)();
var _default = defaultTheme;
exports.default = _default;
});

var styled_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.slotShouldForwardProp = exports.rootShouldForwardProp = void 0;



var _defaultTheme = interopRequireDefault(defaultTheme_1);

const rootShouldForwardProp = prop => (0, esm$1.shouldForwardProp)(prop) && prop !== 'classes';

exports.rootShouldForwardProp = rootShouldForwardProp;
const slotShouldForwardProp = esm$1.shouldForwardProp;
exports.slotShouldForwardProp = slotShouldForwardProp;
const styled = (0, esm$1.createStyled)({
  defaultTheme: _defaultTheme.default,
  rootShouldForwardProp
});
var _default = styled;
exports.default = _default;
});

var useThemeProps_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useThemeProps;



var _defaultTheme = interopRequireDefault(defaultTheme_1);

function useThemeProps({
  props,
  name
}) {
  return (0, esm$1.useThemeProps)({
    props,
    name,
    defaultTheme: _defaultTheme.default
  });
}
});

var useForkRef$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;



var _default = esm.unstable_useForkRef;
exports.default = _default;
});

var useEventCallback$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;



var _default = esm.unstable_useEventCallback;
exports.default = _default;
});

var useIsFocusVisible$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;



var _default = esm.unstable_useIsFocusVisible;
exports.default = _default;
});

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

var config = {
  disabled: false
};

var TransitionGroupContext = react.createContext(null);

var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [reactDom.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : reactDom.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : reactDom.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react.cloneElement(react.Children.only(children), childProps))
    );
  };

  return Transition;
}(react.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes =  {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;

var _addClass = function addClass$1(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return addClass(node, c);
  });
};

var removeClass$1 = function removeClass$1(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return removeClass(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass$1(node, baseClassName);
    }

    if (activeClassName) {
      removeClass$1(node, activeClassName);
    }

    if (doneClassName) {
      removeClass$1(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);

    return /*#__PURE__*/react.createElement(Transition, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(react.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  {};

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && react.isValidElement(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return react.cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!react.isValidElement(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = react.isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = react.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = react.cloneElement(child, {
        in: false
      });
    } else if (hasNext && hasPrev && react.isValidElement(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = react.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

var values$1 = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values$1(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react.createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/react.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react.Component);

TransitionGroup.propTypes =  {};
TransitionGroup.defaultProps = defaultProps;

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;
    var child = react.Children.toArray(children)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);

    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? undefined : reactDom.findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = react.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return /*#__PURE__*/react.createElement(TransitionGroup, props, inProp ? react.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : react.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(react.Component);

ReplaceTransition.propTypes =  {};

var _leaveRenders, _enterRenders;

function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (react.isValidElement(oldChildren) && react.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }

  return true;
}
/**
 * Enum of modes for SwitchTransition component
 * @enum { string }
 */


var modes = {
  out: 'out-in',
  in: 'in-out'
};

var callHook = function callHook(element, name, cb) {
  return function () {
    var _element$props;

    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};

var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function (_ref) {
  var current = _ref.current,
      changeState = _ref.changeState;
  return react.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(ENTERING, null);
    })
  });
}, _leaveRenders[modes.in] = function (_ref2) {
  var current = _ref2.current,
      changeState = _ref2.changeState,
      children = _ref2.children;
  return [current, react.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(ENTERING);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
  var children = _ref3.children,
      changeState = _ref3.changeState;
  return react.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(ENTERED, react.cloneElement(children, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function (_ref4) {
  var current = _ref4.current,
      children = _ref4.children,
      changeState = _ref4.changeState;
  return [react.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(ENTERED, react.cloneElement(children, {
        in: true
      }));
    })
  }), react.cloneElement(children, {
    in: true
  })];
}, _enterRenders);
/**
 * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
 * You can use it when you want to control the render between state transitions.
 * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
 *
 * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
 * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child.
 *
 * **Note**: If you want the animation to happen simultaneously
 * (that is, to have the old child removed and a new child inserted **at the same time**),
 * you should use
 * [`TransitionGroup`](https://reactcommunity.org/react-transition-group/transition-group)
 * instead.
 *
 * ```jsx
 * function App() {
 *  const [state, setState] = useState(false);
 *  return (
 *    <SwitchTransition>
 *      <CSSTransition
 *        key={state ? "Goodbye, world!" : "Hello, world!"}
 *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
 *        classNames='fade'
 *      >
 *        <button onClick={() => setState(state => !state)}>
 *          {state ? "Goodbye, world!" : "Hello, world!"}
 *        </button>
 *      </CSSTransition>
 *    </SwitchTransition>
 *  );
 * }
 * ```
 *
 * ```css
 * .fade-enter{
 *    opacity: 0;
 * }
 * .fade-exit{
 *    opacity: 1;
 * }
 * .fade-enter-active{
 *    opacity: 1;
 * }
 * .fade-exit-active{
 *    opacity: 0;
 * }
 * .fade-enter-active,
 * .fade-exit-active{
 *    transition: opacity 500ms;
 * }
 * ```
 */

var SwitchTransition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(SwitchTransition, _React$Component);

  function SwitchTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: ENTERED,
      current: null
    };
    _this.appeared = false;

    _this.changeState = function (status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }

      _this.setState({
        status: status,
        current: current
      });
    };

    return _this;
  }

  var _proto = SwitchTransition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }

    if (state.status === ENTERING && props.mode === modes.in) {
      return {
        status: ENTERING
      };
    }

    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: EXITING
      };
    }

    return {
      current: react.cloneElement(props.children, {
        in: true
      })
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        mode = _this$props.mode,
        _this$state = this.state,
        status = _this$state.status,
        current = _this$state.current;
    var data = {
      children: children,
      current: current,
      changeState: this.changeState,
      status: status
    };
    var component;

    switch (status) {
      case ENTERING:
        component = enterRenders[mode](data);
        break;

      case EXITING:
        component = leaveRenders[mode](data);
        break;

      case ENTERED:
        component = current;
    }

    return /*#__PURE__*/react.createElement(TransitionGroupContext.Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };

  return SwitchTransition;
}(react.Component);

SwitchTransition.propTypes =  {};
SwitchTransition.defaultProps = {
  mode: modes.out
};

var esm$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  CSSTransition: CSSTransition,
  ReplaceTransition: ReplaceTransition,
  SwitchTransition: SwitchTransition,
  TransitionGroup: TransitionGroup,
  Transition: Transition,
  config: config
});

var Ripple_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(react);

var _propTypes = interopRequireDefault(propTypes);

var _clsx = interopRequireDefault(__pika_web_default_export_for_treeshaking__$1);



function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @ignore - internal component.
 */
function Ripple(props) {
  const {
    className,
    classes,
    pulsate = false,
    rippleX,
    rippleY,
    rippleSize,
    in: inProp,
    onExited,
    timeout
  } = props;
  const [leaving, setLeaving] = React.useState(false);
  const rippleClassName = (0, _clsx.default)(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  const childClassName = (0, _clsx.default)(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);

  if (!inProp && !leaving) {
    setLeaving(true);
  }

  React.useEffect(() => {
    if (!inProp && onExited != null) {
      // react-transition-group#onExited
      const timeoutId = setTimeout(onExited, timeout);
      return () => {
        clearTimeout(timeoutId);
      };
    }

    return undefined;
  }, [onExited, inProp, timeout]);
  return /*#__PURE__*/(0, jsxRuntime.jsx)("span", {
    className: rippleClassName,
    style: rippleStyles,
    children: /*#__PURE__*/(0, jsxRuntime.jsx)("span", {
      className: childClassName
    })
  });
}
var _default = Ripple;
exports.default = _default;
});

var touchRippleClasses_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTouchRippleUtilityClass = getTouchRippleUtilityClass;
exports.default = void 0;



function getTouchRippleUtilityClass(slot) {
  return (0, unstyled.generateUtilityClass)('MuiTouchRipple', slot);
}

const touchRippleClasses = (0, unstyled.generateUtilityClasses)('MuiTouchRipple', ['root', 'ripple', 'rippleVisible', 'ripplePulsate', 'child', 'childLeaving', 'childPulsate']);
var _default = touchRippleClasses;
exports.default = _default;
});

var TouchRipple_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TouchRippleRipple = exports.TouchRippleRoot = exports.DELAY_RIPPLE = void 0;

var _extends2 = interopRequireDefault(_extends_1);

var _objectWithoutPropertiesLoose2 = interopRequireDefault(objectWithoutPropertiesLoose);

var React = _interopRequireWildcard(react);

var _propTypes = interopRequireDefault(propTypes);



var _clsx = interopRequireDefault(__pika_web_default_export_for_treeshaking__$1);



var _styled = interopRequireDefault(styled_1);

var _useThemeProps = interopRequireDefault(useThemeProps_1);

var _Ripple = interopRequireDefault(Ripple_1);

var _touchRippleClasses = interopRequireDefault(touchRippleClasses_1);



const _excluded = ["center", "classes", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DURATION = 550;
const DELAY_RIPPLE = 80;
exports.DELAY_RIPPLE = DELAY_RIPPLE;
const enterKeyframe = (esm$1.keyframes)`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`;
const exitKeyframe = (esm$1.keyframes)`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;
const pulsateKeyframe = (esm$1.keyframes)`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`;
const TouchRippleRoot = (0, _styled.default)('span', {
  name: 'MuiTouchRipple',
  slot: 'Root',
  skipSx: true
})({
  overflow: 'hidden',
  pointerEvents: 'none',
  position: 'absolute',
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: 'inherit'
}); // This `styled()` function invokes keyframes. `styled-components` only supports keyframes
// in string templates. Do not convert these styles in JS object as it will break.

exports.TouchRippleRoot = TouchRippleRoot;
const TouchRippleRipple = (0, _styled.default)(_Ripple.default, {
  name: 'MuiTouchRipple',
  slot: 'Ripple'
})`
  opacity: 0;
  position: absolute;

  &.${_touchRippleClasses.default.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${enterKeyframe};
    animation-duration: ${DURATION}ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
  }

  &.${_touchRippleClasses.default.ripplePulsate} {
    animation-duration: ${({
  theme
}) => theme.transitions.duration.shorter}ms;
  }

  & .${_touchRippleClasses.default.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${_touchRippleClasses.default.childLeaving} {
    opacity: 0;
    animation-name: ${exitKeyframe};
    animation-duration: ${DURATION}ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
  }

  & .${_touchRippleClasses.default.childPulsate} {
    position: absolute;
    left: 0;
    top: 0;
    animation-name: ${pulsateKeyframe};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`;
/**
 * @ignore - internal component.
 *
 * TODO v5: Make private
 */

exports.TouchRippleRipple = TouchRippleRipple;
const TouchRipple = /*#__PURE__*/React.forwardRef(function TouchRipple(inProps, ref) {
  const props = (0, _useThemeProps.default)({
    props: inProps,
    name: 'MuiTouchRipple'
  });
  const {
    center: centerProp = false,
    classes = {},
    className
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const [ripples, setRipples] = React.useState([]);
  const nextKey = React.useRef(0);
  const rippleCallback = React.useRef(null);
  React.useEffect(() => {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]); // Used to filter out mouse emulated events on mobile.

  const ignoringMouseDown = React.useRef(false); // We use a timer in order to only show the ripples for touch "click" like events.
  // We don't want to display the ripple for touch scroll events.

  const startTimer = React.useRef(null); // This is the hook called once the previous timeout is ready.

  const startTimerCommit = React.useRef(null);
  const container = React.useRef(null);
  React.useEffect(() => {
    return () => {
      clearTimeout(startTimer.current);
    };
  }, []);
  const startCommit = React.useCallback(params => {
    const {
      pulsate,
      rippleX,
      rippleY,
      rippleSize,
      cb
    } = params;
    setRipples(oldRipples => [...oldRipples, /*#__PURE__*/(0, jsxRuntime.jsx)(TouchRippleRipple, {
      classes: {
        ripple: (0, _clsx.default)(classes.ripple, _touchRippleClasses.default.ripple),
        rippleVisible: (0, _clsx.default)(classes.rippleVisible, _touchRippleClasses.default.rippleVisible),
        ripplePulsate: (0, _clsx.default)(classes.ripplePulsate, _touchRippleClasses.default.ripplePulsate),
        child: (0, _clsx.default)(classes.child, _touchRippleClasses.default.child),
        childLeaving: (0, _clsx.default)(classes.childLeaving, _touchRippleClasses.default.childLeaving),
        childPulsate: (0, _clsx.default)(classes.childPulsate, _touchRippleClasses.default.childPulsate)
      },
      timeout: DURATION,
      pulsate: pulsate,
      rippleX: rippleX,
      rippleY: rippleY,
      rippleSize: rippleSize
    }, nextKey.current)]);
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  const start = React.useCallback((event = {}, options = {}, cb) => {
    const {
      pulsate = false,
      center = centerProp || options.pulsate,
      fakeElement = false // For test purposes

    } = options;

    if (event.type === 'mousedown' && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }

    if (event.type === 'touchstart') {
      ignoringMouseDown.current = true;
    }

    const element = fakeElement ? null : container.current;
    const rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    }; // Get the size of the ripple

    let rippleX;
    let rippleY;
    let rippleSize;

    if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const {
        clientX,
        clientY
      } = event.touches ? event.touches[0] : event;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }

    if (center) {
      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3); // For some reason the animation is broken on Mobile Chrome if the size if even.

      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    } // Touche devices


    if (event.touches) {
      // check that this isn't another touchstart due to multitouch
      // otherwise we will only clear a single timer when unmounting while two
      // are running
      if (startTimerCommit.current === null) {
        // Prepare the ripple effect.
        startTimerCommit.current = () => {
          startCommit({
            pulsate,
            rippleX,
            rippleY,
            rippleSize,
            cb
          });
        }; // Delay the execution of the ripple effect.


        startTimer.current = setTimeout(() => {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
      }
    } else {
      startCommit({
        pulsate,
        rippleX,
        rippleY,
        rippleSize,
        cb
      });
    }
  }, [centerProp, startCommit]);
  const pulsate = React.useCallback(() => {
    start({}, {
      pulsate: true
    });
  }, [start]);
  const stop = React.useCallback((event, cb) => {
    clearTimeout(startTimer.current); // The touch interaction occurs too quickly.
    // We still want to show ripple effect.

    if (event.type === 'touchend' && startTimerCommit.current) {
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.current = setTimeout(() => {
        stop(event, cb);
      });
      return;
    }

    startTimerCommit.current = null;
    setRipples(oldRipples => {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }

      return oldRipples;
    });
    rippleCallback.current = cb;
  }, []);
  React.useImperativeHandle(ref, () => ({
    pulsate,
    start,
    stop
  }), [pulsate, start, stop]);
  return /*#__PURE__*/(0, jsxRuntime.jsx)(TouchRippleRoot, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, _touchRippleClasses.default.root, className),
    ref: container
  }, other, {
    children: /*#__PURE__*/(0, jsxRuntime.jsx)(esm$2.TransitionGroup, {
      component: null,
      exit: true,
      children: ripples
    })
  }));
});
var _default = TouchRipple;
exports.default = _default;
});

var buttonBaseClasses_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getButtonBaseUtilityClass = getButtonBaseUtilityClass;
exports.default = void 0;



function getButtonBaseUtilityClass(slot) {
  return (0, unstyled.generateUtilityClass)('MuiButtonBase', slot);
}

const buttonBaseClasses = (0, unstyled.generateUtilityClasses)('MuiButtonBase', ['root', 'disabled', 'focusVisible']);
var _default = buttonBaseClasses;
exports.default = _default;
});

var ButtonBase_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ButtonBaseRoot = void 0;

var _extends2 = interopRequireDefault(_extends_1);

var _objectWithoutPropertiesLoose2 = interopRequireDefault(objectWithoutPropertiesLoose);

var React = _interopRequireWildcard(react);

var _propTypes = interopRequireDefault(propTypes);

var _clsx = interopRequireDefault(__pika_web_default_export_for_treeshaking__$1);





var _styled = interopRequireDefault(styled_1);

var _useThemeProps = interopRequireDefault(useThemeProps_1);

var _useForkRef = interopRequireDefault(useForkRef$1);

var _useEventCallback = interopRequireDefault(useEventCallback$1);

var _useIsFocusVisible = interopRequireDefault(useIsFocusVisible$1);

var _TouchRipple = interopRequireDefault(TouchRipple_1);

var _buttonBaseClasses = _interopRequireWildcard(buttonBaseClasses_1);



const _excluded = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "type"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useUtilityClasses = styleProps => {
  const {
    disabled,
    focusVisible,
    focusVisibleClassName,
    classes
  } = styleProps;
  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible']
  };
  const composedClasses = (0, unstyled.unstable_composeClasses)(slots, _buttonBaseClasses.getButtonBaseUtilityClass, classes);

  if (focusVisible && focusVisibleClassName) {
    composedClasses.root += ` ${focusVisibleClassName}`;
  }

  return composedClasses;
};

const ButtonBaseRoot = (0, _styled.default)('button', {
  name: 'MuiButtonBase',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'transparent',
  backgroundColor: 'transparent',
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  MozAppearance: 'none',
  // Reset
  WebkitAppearance: 'none',
  // Reset
  textDecoration: 'none',
  // So we take precedent over the style of a native <a /> element.
  color: 'inherit',
  '&::-moz-focus-inner': {
    borderStyle: 'none' // Remove Firefox dotted outline.

  },
  [`&.${_buttonBaseClasses.default.disabled}`]: {
    pointerEvents: 'none',
    // Disable link interactions
    cursor: 'default'
  },
  '@media print': {
    colorAdjust: 'exact'
  }
});
/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */

exports.ButtonBaseRoot = ButtonBaseRoot;
const ButtonBase = /*#__PURE__*/React.forwardRef(function ButtonBase(inProps, ref) {
  const props = (0, _useThemeProps.default)({
    props: inProps,
    name: 'MuiButtonBase'
  });
  const {
    action,
    centerRipple = false,
    children,
    className,
    component = 'button',
    disabled = false,
    disableRipple = false,
    disableTouchRipple = false,
    focusRipple = false,
    LinkComponent = 'a',
    onBlur,
    onClick,
    onContextMenu,
    onDragLeave,
    onFocus,
    onFocusVisible,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    tabIndex = 0,
    TouchRippleProps,
    type
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const buttonRef = React.useRef(null);
  const rippleRef = React.useRef(null);
  const {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = (0, _useIsFocusVisible.default)();
  const [focusVisible, setFocusVisible] = React.useState(false);

  if (disabled && focusVisible) {
    setFocusVisible(false);
  }

  React.useEffect(() => {
    isFocusVisibleRef.current = focusVisible;
  }, [focusVisible, isFocusVisibleRef]);
  React.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), []);
  React.useEffect(() => {
    if (focusVisible && focusRipple && !disableRipple) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible]);

  function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
    return (0, _useEventCallback.default)(event => {
      if (eventCallback) {
        eventCallback(event);
      }

      const ignore = skipRippleAction;

      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }

      return true;
    });
  }

  const handleMouseDown = useRippleHandler('start', onMouseDown);
  const handleContextMenu = useRippleHandler('stop', onContextMenu);
  const handleDragLeave = useRippleHandler('stop', onDragLeave);
  const handleMouseUp = useRippleHandler('stop', onMouseUp);
  const handleMouseLeave = useRippleHandler('stop', event => {
    if (focusVisible) {
      event.preventDefault();
    }

    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  const handleTouchStart = useRippleHandler('start', onTouchStart);
  const handleTouchEnd = useRippleHandler('stop', onTouchEnd);
  const handleTouchMove = useRippleHandler('stop', onTouchMove);
  const handleBlur = useRippleHandler('stop', event => {
    handleBlurVisible(event);

    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }

    if (onBlur) {
      onBlur(event);
    }
  }, false);
  const handleFocus = (0, _useEventCallback.default)(event => {
    // Fix for https://github.com/facebook/react/issues/7769
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }

    handleFocusVisible(event);

    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);

      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }

    if (onFocus) {
      onFocus(event);
    }
  });

  const isNonNativeButton = () => {
    const button = buttonRef.current;
    return component && component !== 'button' && !(button.tagName === 'A' && button.href);
  };
  /**
   * IE11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
   */


  const keydownRef = React.useRef(false);
  const handleKeyDown = (0, _useEventCallback.default)(event => {
    // Check if key is already down to avoid repeats being counted as multiple activations
    if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === ' ') {
      keydownRef.current = true;
      rippleRef.current.stop(event, () => {
        rippleRef.current.start(event);
      });
    }

    if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    } // Keyboard accessibility for non interactive elements


    if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
      event.preventDefault();

      if (onClick) {
        onClick(event);
      }
    }
  });
  const handleKeyUp = (0, _useEventCallback.default)(event => {
    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
    // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
    if (focusRipple && event.key === ' ' && rippleRef.current && focusVisible && !event.defaultPrevented) {
      keydownRef.current = false;
      rippleRef.current.stop(event, () => {
        rippleRef.current.pulsate(event);
      });
    }

    if (onKeyUp) {
      onKeyUp(event);
    } // Keyboard accessibility for non interactive elements


    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
      onClick(event);
    }
  });
  let ComponentProp = component;

  if (ComponentProp === 'button' && (other.href || other.to)) {
    ComponentProp = LinkComponent;
  }

  const buttonProps = {};

  if (ComponentProp === 'button') {
    buttonProps.type = type === undefined ? 'button' : type;
    buttonProps.disabled = disabled;
  } else {
    if (!other.href && !other.to) {
      buttonProps.role = 'button';
    }

    if (disabled) {
      buttonProps['aria-disabled'] = disabled;
    }
  }

  const handleOwnRef = (0, _useForkRef.default)(focusVisibleRef, buttonRef);
  const handleRef = (0, _useForkRef.default)(ref, handleOwnRef);
  const [mountedState, setMountedState] = React.useState(false);
  React.useEffect(() => {
    setMountedState(true);
  }, []);
  const enableTouchRipple = mountedState && !disableRipple && !disabled;

  const styleProps = (0, _extends2.default)({}, props, {
    centerRipple,
    component,
    disabled,
    disableRipple,
    disableTouchRipple,
    focusRipple,
    tabIndex,
    focusVisible
  });
  const classes = useUtilityClasses(styleProps);
  return /*#__PURE__*/(0, jsxRuntime.jsxs)(ButtonBaseRoot, (0, _extends2.default)({
    as: ComponentProp,
    className: (0, _clsx.default)(classes.root, className),
    styleProps: styleProps,
    onBlur: handleBlur,
    onClick: onClick,
    onContextMenu: handleContextMenu,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex,
    type: type
  }, buttonProps, other, {
    children: [children, enableTouchRipple ?
    /*#__PURE__*/

    /* TouchRipple is only needed client-side, x2 boost on the server. */
    (0, jsxRuntime.jsx)(_TouchRipple.default, (0, _extends2.default)({
      ref: rippleRef,
      center: centerRipple
    }, TouchRippleProps)) : null]
  }));
});
var _default = ButtonBase;
exports.default = _default;
});

var ButtonBase = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  buttonBaseClasses: true,
  touchRippleClasses: true
};
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _ButtonBase.default;
  }
});
Object.defineProperty(exports, "buttonBaseClasses", {
  enumerable: true,
  get: function () {
    return _buttonBaseClasses.default;
  }
});
Object.defineProperty(exports, "touchRippleClasses", {
  enumerable: true,
  get: function () {
    return _touchRippleClasses.default;
  }
});

var _ButtonBase = interopRequireDefault(ButtonBase_1);

var _buttonBaseClasses = _interopRequireWildcard(buttonBaseClasses_1);

Object.keys(_buttonBaseClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _buttonBaseClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _buttonBaseClasses[key];
    }
  });
});

var _touchRippleClasses = _interopRequireWildcard(touchRippleClasses_1);

Object.keys(_touchRippleClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _touchRippleClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _touchRippleClasses[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
});

var capitalize$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;



var _default = esm.unstable_capitalize;
exports.default = _default;
});

var iconButtonClasses_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIconButtonUtilityClass = getIconButtonUtilityClass;
exports.default = void 0;



function getIconButtonUtilityClass(slot) {
  return (0, unstyled.generateUtilityClass)('MuiIconButton', slot);
}

const iconButtonClasses = (0, unstyled.generateUtilityClasses)('MuiIconButton', ['root', 'disabled', 'colorInherit', 'colorPrimary', 'colorSecondary', 'edgeStart', 'edgeEnd', 'sizeSmall', 'sizeMedium', 'sizeLarge']);
var _default = iconButtonClasses;
exports.default = _default;
});

var IconButton_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutPropertiesLoose2 = interopRequireDefault(objectWithoutPropertiesLoose);

var _extends2 = interopRequireDefault(_extends_1);

var React = _interopRequireWildcard(react);

var _propTypes = interopRequireDefault(propTypes);

var _clsx = interopRequireDefault(__pika_web_default_export_for_treeshaking__$1);







var _styled = interopRequireDefault(styled_1);

var _useThemeProps = interopRequireDefault(useThemeProps_1);

var _ButtonBase = interopRequireDefault(ButtonBase);

var _capitalize = interopRequireDefault(capitalize$1);

var _iconButtonClasses = _interopRequireWildcard(iconButtonClasses_1);



const _excluded = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useUtilityClasses = styleProps => {
  const {
    classes,
    disabled,
    color,
    edge,
    size
  } = styleProps;
  const slots = {
    root: ['root', disabled && 'disabled', color !== 'default' && `color${(0, _capitalize.default)(color)}`, edge && `edge${(0, _capitalize.default)(edge)}`, `size${(0, _capitalize.default)(size)}`]
  };
  return (0, unstyled.unstable_composeClasses)(slots, _iconButtonClasses.getIconButtonUtilityClass, classes);
};

const IconButtonRoot = (0, _styled.default)(_ButtonBase.default, {
  name: 'MuiIconButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      styleProps
    } = props;
    return [styles.root, styleProps.color !== 'default' && styles[`color${(0, _capitalize.default)(styleProps.color)}`], styleProps.edge && styles[`edge${(0, _capitalize.default)(styleProps.edge)}`], styles[`size${(0, _capitalize.default)(styleProps.size)}`]];
  }
})(({
  theme,
  styleProps
}) => (0, _extends2.default)({
  textAlign: 'center',
  flex: '0 0 auto',
  fontSize: theme.typography.pxToRem(24),
  padding: 8,
  borderRadius: '50%',
  overflow: 'visible',
  // Explicitly set the default value to solve a bug on IE11.
  color: theme.palette.action.active,
  transition: theme.transitions.create('background-color', {
    duration: theme.transitions.duration.shortest
  }),
  '&:hover': {
    backgroundColor: (0, esm$1.alpha)(theme.palette.action.active, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  }
}, styleProps.edge === 'start' && {
  marginLeft: styleProps.size === 'small' ? -3 : -12
}, styleProps.edge === 'end' && {
  marginRight: styleProps.size === 'small' ? -3 : -12
}), ({
  theme,
  styleProps
}) => (0, _extends2.default)({}, styleProps.color === 'inherit' && {
  color: 'inherit'
}, styleProps.color !== 'inherit' && styleProps.color !== 'default' && {
  color: theme.palette[styleProps.color].main,
  '&:hover': {
    backgroundColor: (0, esm$1.alpha)(theme.palette[styleProps.color].main, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  }
}, styleProps.size === 'small' && {
  padding: 5,
  fontSize: theme.typography.pxToRem(18)
}, styleProps.size === 'large' && {
  padding: 12,
  fontSize: theme.typography.pxToRem(28)
}, {
  [`&.${_iconButtonClasses.default.disabled}`]: {
    backgroundColor: 'transparent',
    color: theme.palette.action.disabled
  }
}));
/**
 * Refer to the [Icons](/components/icons/) section of the documentation
 * regarding the available icon options.
 */

const IconButton = /*#__PURE__*/React.forwardRef(function IconButton(inProps, ref) {
  const props = (0, _useThemeProps.default)({
    props: inProps,
    name: 'MuiIconButton'
  });
  const {
    edge = false,
    children,
    className,
    color = 'default',
    disabled = false,
    disableFocusRipple = false,
    size = 'medium'
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const styleProps = (0, _extends2.default)({}, props, {
    edge,
    color,
    disabled,
    disableFocusRipple,
    size
  });
  const classes = useUtilityClasses(styleProps);
  return /*#__PURE__*/(0, jsxRuntime.jsx)(IconButtonRoot, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled,
    ref: ref,
    styleProps: styleProps
  }, other, {
    children: children
  }));
});
var _default = IconButton;
exports.default = _default;
});

var IconButton = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  iconButtonClasses: true
};
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _IconButton.default;
  }
});
Object.defineProperty(exports, "iconButtonClasses", {
  enumerable: true,
  get: function () {
    return _iconButtonClasses.default;
  }
});

var _IconButton = interopRequireDefault(IconButton_1);

var _iconButtonClasses = _interopRequireWildcard(iconButtonClasses_1);

Object.keys(_iconButtonClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _iconButtonClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _iconButtonClasses[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(IconButton);

export default __pika_web_default_export_for_treeshaking__;
