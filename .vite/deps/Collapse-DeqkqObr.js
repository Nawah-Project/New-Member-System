import { __toESM, require_react } from "./react-BaqBjuxQ.js";
import { ClassNameGenerator_default, clsx_default, composeClasses, duration, generateUtilityClass, generateUtilityClasses, require_jsx_runtime, require_prop_types, styled_default, useDefaultProps, useEnhancedEffect_default as useEnhancedEffect_default$1, useId, useTheme } from "./DefaultPropsProvider-B9QAhXBu.js";
import { memoTheme_default } from "./createSvgIcon-CFxLgTrp.js";
import { chainPropTypes } from "./chainPropTypes-DUgDBFoG.js";
import { require_react_dom } from "./react-dom-BlejFq9i.js";

//#region node_modules/@mui/utils/esm/createChainedFunction/createChainedFunction.js
/**
* Safe chained function.
*
* Will only create a new function if needed,
* otherwise will pass back existing functions or null.
*/
function createChainedFunction(...funcs) {
	return funcs.reduce((acc, func) => {
		if (func == null) return acc;
		return function chainedFunction(...args) {
			acc.apply(this, args);
			func.apply(this, args);
		};
	}, () => {});
}

//#endregion
//#region node_modules/@mui/material/esm/utils/createChainedFunction.js
var createChainedFunction_default = createChainedFunction;

//#endregion
//#region node_modules/@mui/utils/esm/isMuiElement/isMuiElement.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function isMuiElement(element, muiNames) {
	return /* @__PURE__ */ import_react.isValidElement(element) && muiNames.indexOf(element.type.muiName ?? element.type?._payload?.value?.muiName) !== -1;
}

//#endregion
//#region node_modules/@mui/utils/esm/debounce/debounce.js
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

//#endregion
//#region node_modules/@mui/material/esm/utils/debounce.js
var debounce_default = debounce;

//#endregion
//#region node_modules/@mui/utils/esm/deprecatedPropType/deprecatedPropType.js
function deprecatedPropType(validator, reason) {
	return (props, propName, componentName, location, propFullName) => {
		const componentNameSafe = componentName || "<<anonymous>>";
		const propFullNameSafe = propFullName || propName;
		if (typeof props[propName] !== "undefined") return /* @__PURE__ */ new Error(`The ${location} \`${propFullNameSafe}\` of \`${componentNameSafe}\` is deprecated. ${reason}`);
		return null;
	};
}

//#endregion
//#region node_modules/@mui/material/esm/utils/deprecatedPropType.js
var deprecatedPropType_default = deprecatedPropType;

//#endregion
//#region node_modules/@mui/material/esm/utils/isMuiElement.js
var isMuiElement_default = isMuiElement;

//#endregion
//#region node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js
function ownerDocument(node) {
	return node && node.ownerDocument || document;
}

//#endregion
//#region node_modules/@mui/material/esm/utils/ownerDocument.js
var ownerDocument_default = ownerDocument;

//#endregion
//#region node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js
function ownerWindow(node) {
	return ownerDocument(node).defaultView || window;
}

//#endregion
//#region node_modules/@mui/material/esm/utils/ownerWindow.js
var ownerWindow_default = ownerWindow;

//#endregion
//#region node_modules/@mui/utils/esm/requirePropFactory/requirePropFactory.js
function requirePropFactory(componentNameInError, Component) {
	const prevPropTypes = Component ? { ...Component.propTypes } : null;
	const requireProp = (requiredProp) => (props, propName, componentName, location, propFullName, ...args) => {
		const propFullNameSafe = propFullName || propName;
		const defaultTypeChecker = prevPropTypes?.[propFullNameSafe];
		if (defaultTypeChecker) {
			const typeCheckerResult = defaultTypeChecker(props, propName, componentName, location, propFullName, ...args);
			if (typeCheckerResult) return typeCheckerResult;
		}
		if (typeof props[propName] !== "undefined" && !props[requiredProp]) return /* @__PURE__ */ new Error(`The prop \`${propFullNameSafe}\` of \`${componentNameInError}\` can only be used together with the \`${requiredProp}\` prop.`);
		return null;
	};
	return requireProp;
}

//#endregion
//#region node_modules/@mui/material/esm/utils/requirePropFactory.js
var requirePropFactory_default = requirePropFactory;

//#endregion
//#region node_modules/@mui/utils/esm/setRef/setRef.js
/**
* TODO v5: consider making it private
*
* passes {value} to {ref}
*
* WARNING: Be sure to only call this inside a callback that is passed as a ref.
* Otherwise, make sure to cleanup the previous {ref} if it changes. See
* https://github.com/mui/material-ui/issues/13539
*
* Useful if you want to expose the ref of an inner component to the public API
* while still using it inside the component.
* @param ref A ref callback or ref object. If anything falsy, this is a no-op.
*/
function setRef(ref, value) {
	if (typeof ref === "function") ref(value);
	else if (ref) ref.current = value;
}

//#endregion
//#region node_modules/@mui/material/esm/utils/setRef.js
var setRef_default = setRef;

//#endregion
//#region node_modules/@mui/material/esm/utils/useEnhancedEffect.js
var useEnhancedEffect_default = useEnhancedEffect_default$1;

//#endregion
//#region node_modules/@mui/material/esm/utils/useId.js
var useId_default = useId;

//#endregion
//#region node_modules/@mui/utils/esm/unsupportedProp/unsupportedProp.js
function unsupportedProp(props, propName, componentName, location, propFullName) {
	const propFullNameSafe = propFullName || propName;
	if (typeof props[propName] !== "undefined") return /* @__PURE__ */ new Error(`The prop \`${propFullNameSafe}\` is not supported. Please remove it.`);
	return null;
}

//#endregion
//#region node_modules/@mui/material/esm/utils/unsupportedProp.js
var unsupportedProp_default = unsupportedProp;

//#endregion
//#region node_modules/@mui/utils/esm/useControlled/useControlled.js
function useControlled(props) {
	const { controlled, default: defaultProp, name, state = "value" } = props;
	const { current: isControlled } = import_react.useRef(controlled !== void 0);
	const [valueState, setValue] = import_react.useState(defaultProp);
	const value = isControlled ? controlled : valueState;
	{
		import_react.useEffect(() => {
			if (isControlled !== (controlled !== void 0)) console.error([
				`MUI: A component is changing the ${isControlled ? "" : "un"}controlled ${state} state of ${name} to be ${isControlled ? "un" : ""}controlled.`,
				"Elements should not switch from uncontrolled to controlled (or vice versa).",
				`Decide between using a controlled or uncontrolled ${name} element for the lifetime of the component.`,
				"The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.",
				"More info: https://fb.me/react-controlled-components"
			].join("\n"));
		}, [
			state,
			name,
			controlled
		]);
		const { current: defaultValue } = import_react.useRef(defaultProp);
		import_react.useEffect(() => {
			if (!isControlled && JSON.stringify(defaultProp) !== JSON.stringify(defaultValue)) console.error([`MUI: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. To suppress this warning opt to use a controlled ${name}.`].join("\n"));
		}, [JSON.stringify(defaultProp)]);
	}
	const setValueIfUncontrolled = import_react.useCallback((newValue) => {
		if (!isControlled) setValue(newValue);
	}, []);
	return [value, setValueIfUncontrolled];
}

//#endregion
//#region node_modules/@mui/material/esm/utils/useControlled.js
var useControlled_default = useControlled;

//#endregion
//#region node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js
/**
* Inspired by https://github.com/facebook/react/issues/14099#issuecomment-440013892
* See RFC in https://github.com/reactjs/rfcs/pull/220
*/
function useEventCallback(fn) {
	const ref = import_react.useRef(fn);
	useEnhancedEffect_default$1(() => {
		ref.current = fn;
	});
	return import_react.useRef((...args) => (0, ref.current)(...args)).current;
}
var useEventCallback_default$1 = useEventCallback;

//#endregion
//#region node_modules/@mui/material/esm/utils/useEventCallback.js
var useEventCallback_default = useEventCallback_default$1;

//#endregion
//#region node_modules/@mui/utils/esm/useForkRef/useForkRef.js
/**
* Merges refs into a single memoized callback ref or `null`.
*
* ```tsx
* const rootRef = React.useRef<Instance>(null);
* const refFork = useForkRef(rootRef, props.ref);
*
* return (
*   <Root {...props} ref={refFork} />
* );
* ```
*
* @param {Array<React.Ref<Instance> | undefined>} refs The ref array.
* @returns {React.RefCallback<Instance> | null} The new ref callback.
*/
function useForkRef(...refs) {
	const cleanupRef = import_react.useRef(void 0);
	const refEffect = import_react.useCallback((instance) => {
		const cleanups = refs.map((ref) => {
			if (ref == null) return null;
			if (typeof ref === "function") {
				const refCallback = ref;
				const refCleanup = refCallback(instance);
				return typeof refCleanup === "function" ? refCleanup : () => {
					refCallback(null);
				};
			}
			ref.current = instance;
			return () => {
				ref.current = null;
			};
		});
		return () => {
			cleanups.forEach((refCleanup) => refCleanup?.());
		};
	}, refs);
	return import_react.useMemo(() => {
		if (refs.every((ref) => ref == null)) return null;
		return (value) => {
			if (cleanupRef.current) {
				cleanupRef.current();
				cleanupRef.current = void 0;
			}
			if (value != null) cleanupRef.current = refEffect(value);
		};
	}, refs);
}

//#endregion
//#region node_modules/@mui/material/esm/utils/useForkRef.js
var useForkRef_default = useForkRef;

//#endregion
//#region node_modules/@mui/material/esm/utils/mergeSlotProps.js
function isEventHandler(key, value) {
	const thirdCharCode = key.charCodeAt(2);
	return key[0] === "o" && key[1] === "n" && thirdCharCode >= 65 && thirdCharCode <= 90 && typeof value === "function";
}
function mergeSlotProps$1(externalSlotProps, defaultSlotProps) {
	if (!externalSlotProps) return defaultSlotProps;
	function extractHandlers(externalSlotPropsValue, defaultSlotPropsValue) {
		const handlers$1 = {};
		Object.keys(defaultSlotPropsValue).forEach((key) => {
			if (isEventHandler(key, defaultSlotPropsValue[key]) && typeof externalSlotPropsValue[key] === "function") handlers$1[key] = (...args) => {
				externalSlotPropsValue[key](...args);
				defaultSlotPropsValue[key](...args);
			};
		});
		return handlers$1;
	}
	if (typeof externalSlotProps === "function" || typeof defaultSlotProps === "function") return (ownerState) => {
		const defaultSlotPropsValue = typeof defaultSlotProps === "function" ? defaultSlotProps(ownerState) : defaultSlotProps;
		const externalSlotPropsValue = typeof externalSlotProps === "function" ? externalSlotProps({
			...ownerState,
			...defaultSlotPropsValue
		}) : externalSlotProps;
		const className$1 = clsx_default(ownerState?.className, defaultSlotPropsValue?.className, externalSlotPropsValue?.className);
		const handlers$1 = extractHandlers(externalSlotPropsValue, defaultSlotPropsValue);
		return {
			...defaultSlotPropsValue,
			...externalSlotPropsValue,
			...handlers$1,
			...!!className$1 && { className: className$1 },
			...defaultSlotPropsValue?.style && externalSlotPropsValue?.style && { style: {
				...defaultSlotPropsValue.style,
				...externalSlotPropsValue.style
			} },
			...defaultSlotPropsValue?.sx && externalSlotPropsValue?.sx && { sx: [...Array.isArray(defaultSlotPropsValue.sx) ? defaultSlotPropsValue.sx : [defaultSlotPropsValue.sx], ...Array.isArray(externalSlotPropsValue.sx) ? externalSlotPropsValue.sx : [externalSlotPropsValue.sx]] }
		};
	};
	const typedDefaultSlotProps = defaultSlotProps;
	const handlers = extractHandlers(externalSlotProps, typedDefaultSlotProps);
	const className = clsx_default(typedDefaultSlotProps?.className, externalSlotProps?.className);
	return {
		...defaultSlotProps,
		...externalSlotProps,
		...handlers,
		...!!className && { className },
		...typedDefaultSlotProps?.style && externalSlotProps?.style && { style: {
			...typedDefaultSlotProps.style,
			...externalSlotProps.style
		} },
		...typedDefaultSlotProps?.sx && externalSlotProps?.sx && { sx: [...Array.isArray(typedDefaultSlotProps.sx) ? typedDefaultSlotProps.sx : [typedDefaultSlotProps.sx], ...Array.isArray(externalSlotProps.sx) ? externalSlotProps.sx : [externalSlotProps.sx]] }
	};
}

//#endregion
//#region node_modules/@mui/material/esm/utils/index.js
const unstable_ClassNameGenerator = { configure: (generator) => {
	console.warn([
		"MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.",
		"",
		"You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead",
		"",
		"The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401",
		"",
		"The updated documentation: https://mui.com/guides/classname-generator/"
	].join("\n"));
	ClassNameGenerator_default.configure(generator);
} };

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
	return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t$1, e$1) {
		return t$1.__proto__ = e$1, t$1;
	}, _setPrototypeOf(t, e);
}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t, o) {
	t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

//#endregion
//#region node_modules/react-transition-group/esm/config.js
var config_default = { disabled: false };

//#endregion
//#region node_modules/react-transition-group/esm/utils/PropTypes.js
var import_prop_types$3 = /* @__PURE__ */ __toESM(require_prop_types());
var timeoutsShape = import_prop_types$3.default.oneOfType([import_prop_types$3.default.number, import_prop_types$3.default.shape({
	enter: import_prop_types$3.default.number,
	exit: import_prop_types$3.default.number,
	appear: import_prop_types$3.default.number
}).isRequired]);
var classNamesShape = import_prop_types$3.default.oneOfType([
	import_prop_types$3.default.string,
	import_prop_types$3.default.shape({
		enter: import_prop_types$3.default.string,
		exit: import_prop_types$3.default.string,
		active: import_prop_types$3.default.string
	}),
	import_prop_types$3.default.shape({
		enter: import_prop_types$3.default.string,
		enterDone: import_prop_types$3.default.string,
		enterActive: import_prop_types$3.default.string,
		exit: import_prop_types$3.default.string,
		exitDone: import_prop_types$3.default.string,
		exitActive: import_prop_types$3.default.string
	})
]);

//#endregion
//#region node_modules/react-transition-group/esm/TransitionGroupContext.js
var TransitionGroupContext_default = import_react.createContext(null);

//#endregion
//#region node_modules/react-transition-group/esm/utils/reflow.js
var forceReflow = function forceReflow$1(node) {
	return node.scrollTop;
};

//#endregion
//#region node_modules/react-transition-group/esm/Transition.js
var import_prop_types$2 = /* @__PURE__ */ __toESM(require_prop_types());
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
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
var Transition = /* @__PURE__ */ function(_React$Component) {
	_inheritsLoose(Transition$1, _React$Component);
	function Transition$1(props, context) {
		var _this = _React$Component.call(this, props, context) || this;
		var parentGroup = context;
		var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
		var initialStatus;
		_this.appearStatus = null;
		if (props.in) if (appear) {
			initialStatus = EXITED;
			_this.appearStatus = ENTERING;
		} else initialStatus = ENTERED;
		else if (props.unmountOnExit || props.mountOnEnter) initialStatus = UNMOUNTED;
		else initialStatus = EXITED;
		_this.state = { status: initialStatus };
		_this.nextCallback = null;
		return _this;
	}
	Transition$1.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
		if (_ref.in && prevState.status === UNMOUNTED) return { status: EXITED };
		return null;
	};
	var _proto = Transition$1.prototype;
	_proto.componentDidMount = function componentDidMount() {
		this.updateStatus(true, this.appearStatus);
	};
	_proto.componentDidUpdate = function componentDidUpdate(prevProps) {
		var nextStatus = null;
		if (prevProps !== this.props) {
			var status = this.state.status;
			if (this.props.in) {
				if (status !== ENTERING && status !== ENTERED) nextStatus = ENTERING;
			} else if (status === ENTERING || status === ENTERED) nextStatus = EXITING;
		}
		this.updateStatus(false, nextStatus);
	};
	_proto.componentWillUnmount = function componentWillUnmount() {
		this.cancelNextCallback();
	};
	_proto.getTimeouts = function getTimeouts() {
		var timeout = this.props.timeout;
		var exit = enter = appear = timeout, enter, appear;
		if (timeout != null && typeof timeout !== "number") {
			exit = timeout.exit;
			enter = timeout.enter;
			appear = timeout.appear !== void 0 ? timeout.appear : enter;
		}
		return {
			exit,
			enter,
			appear
		};
	};
	_proto.updateStatus = function updateStatus(mounting, nextStatus) {
		if (mounting === void 0) mounting = false;
		if (nextStatus !== null) {
			this.cancelNextCallback();
			if (nextStatus === ENTERING) {
				if (this.props.unmountOnExit || this.props.mountOnEnter) {
					var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
					if (node) forceReflow(node);
				}
				this.performEnter(mounting);
			} else this.performExit();
		} else if (this.props.unmountOnExit && this.state.status === EXITED) this.setState({ status: UNMOUNTED });
	};
	_proto.performEnter = function performEnter(mounting) {
		var _this2 = this;
		var enter = this.props.enter;
		var appearing = this.context ? this.context.isMounting : mounting;
		var _ref2 = this.props.nodeRef ? [appearing] : [import_react_dom.default.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
		var timeouts = this.getTimeouts();
		var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
		if (!mounting && !enter || config_default.disabled) {
			this.safeSetState({ status: ENTERED }, function() {
				_this2.props.onEntered(maybeNode);
			});
			return;
		}
		this.props.onEnter(maybeNode, maybeAppearing);
		this.safeSetState({ status: ENTERING }, function() {
			_this2.props.onEntering(maybeNode, maybeAppearing);
			_this2.onTransitionEnd(enterTimeout, function() {
				_this2.safeSetState({ status: ENTERED }, function() {
					_this2.props.onEntered(maybeNode, maybeAppearing);
				});
			});
		});
	};
	_proto.performExit = function performExit() {
		var _this3 = this;
		var exit = this.props.exit;
		var timeouts = this.getTimeouts();
		var maybeNode = this.props.nodeRef ? void 0 : import_react_dom.default.findDOMNode(this);
		if (!exit || config_default.disabled) {
			this.safeSetState({ status: EXITED }, function() {
				_this3.props.onExited(maybeNode);
			});
			return;
		}
		this.props.onExit(maybeNode);
		this.safeSetState({ status: EXITING }, function() {
			_this3.props.onExiting(maybeNode);
			_this3.onTransitionEnd(timeouts.exit, function() {
				_this3.safeSetState({ status: EXITED }, function() {
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
		callback = this.setNextCallback(callback);
		this.setState(nextState, callback);
	};
	_proto.setNextCallback = function setNextCallback(callback) {
		var _this4 = this;
		var active = true;
		this.nextCallback = function(event) {
			if (active) {
				active = false;
				_this4.nextCallback = null;
				callback(event);
			}
		};
		this.nextCallback.cancel = function() {
			active = false;
		};
		return this.nextCallback;
	};
	_proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
		this.setNextCallback(handler);
		var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
		var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
		if (!node || doesNotHaveTimeoutOrListener) {
			setTimeout(this.nextCallback, 0);
			return;
		}
		if (this.props.addEndListener) {
			var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
			this.props.addEndListener(maybeNode, maybeNextCallback);
		}
		if (timeout != null) setTimeout(this.nextCallback, timeout);
	};
	_proto.render = function render() {
		var status = this.state.status;
		if (status === UNMOUNTED) return null;
		var _this$props = this.props, children = _this$props.children;
		_this$props.in;
		_this$props.mountOnEnter;
		_this$props.unmountOnExit;
		_this$props.appear;
		_this$props.enter;
		_this$props.exit;
		_this$props.timeout;
		_this$props.addEndListener;
		_this$props.onEnter;
		_this$props.onEntering;
		_this$props.onEntered;
		_this$props.onExit;
		_this$props.onExiting;
		_this$props.onExited;
		_this$props.nodeRef;
		var childProps = _objectWithoutPropertiesLoose(_this$props, [
			"children",
			"in",
			"mountOnEnter",
			"unmountOnExit",
			"appear",
			"enter",
			"exit",
			"timeout",
			"addEndListener",
			"onEnter",
			"onEntering",
			"onEntered",
			"onExit",
			"onExiting",
			"onExited",
			"nodeRef"
		]);
		return /* @__PURE__ */ import_react.createElement(TransitionGroupContext_default.Provider, { value: null }, typeof children === "function" ? children(status, childProps) : import_react.cloneElement(import_react.Children.only(children), childProps));
	};
	return Transition$1;
}(import_react.Component);
Transition.contextType = TransitionGroupContext_default;
Transition.propTypes = {
	nodeRef: import_prop_types$2.default.shape({ current: typeof Element === "undefined" ? import_prop_types$2.default.any : function(propValue, key, componentName, location, propFullName, secret) {
		var value = propValue[key];
		return import_prop_types$2.default.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
	} }),
	children: import_prop_types$2.default.oneOfType([import_prop_types$2.default.func.isRequired, import_prop_types$2.default.element.isRequired]).isRequired,
	in: import_prop_types$2.default.bool,
	mountOnEnter: import_prop_types$2.default.bool,
	unmountOnExit: import_prop_types$2.default.bool,
	appear: import_prop_types$2.default.bool,
	enter: import_prop_types$2.default.bool,
	exit: import_prop_types$2.default.bool,
	timeout: function timeout(props) {
		var pt = timeoutsShape;
		if (!props.addEndListener) pt = pt.isRequired;
		for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
		return pt.apply(void 0, [props].concat(args));
	},
	addEndListener: import_prop_types$2.default.func,
	onEnter: import_prop_types$2.default.func,
	onEntering: import_prop_types$2.default.func,
	onEntered: import_prop_types$2.default.func,
	onExit: import_prop_types$2.default.func,
	onExiting: import_prop_types$2.default.func,
	onExited: import_prop_types$2.default.func
};
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
var Transition_default = Transition;

//#endregion
//#region node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js
var UNINITIALIZED = {};
/**
* A React.useRef() that is initialized lazily with a function. Note that it accepts an optional
* initialization argument, so the initialization function doesn't need to be an inline closure.
*
* @usage
*   const ref = useLazyRef(sortColumns, columns)
*/
function useLazyRef(init, initArg) {
	const ref = import_react.useRef(UNINITIALIZED);
	if (ref.current === UNINITIALIZED) ref.current = init(initArg);
	return ref;
}

//#endregion
//#region node_modules/@mui/utils/esm/useOnMount/useOnMount.js
var EMPTY = [];
/**
* A React.useEffect equivalent that runs once, when the component is mounted.
*/
function useOnMount(fn) {
	import_react.useEffect(fn, EMPTY);
}

//#endregion
//#region node_modules/@mui/utils/esm/useTimeout/useTimeout.js
var Timeout = class Timeout {
	static create() {
		return new Timeout();
	}
	currentId = null;
	/**
	* Executes `fn` after `delay`, clearing any previously scheduled call.
	*/
	start(delay, fn) {
		this.clear();
		this.currentId = setTimeout(() => {
			this.currentId = null;
			fn();
		}, delay);
	}
	clear = () => {
		if (this.currentId !== null) {
			clearTimeout(this.currentId);
			this.currentId = null;
		}
	};
	disposeEffect = () => {
		return this.clear;
	};
};
function useTimeout() {
	const timeout = useLazyRef(Timeout.create).current;
	useOnMount(timeout.disposeEffect);
	return timeout;
}

//#endregion
//#region node_modules/@mui/utils/esm/elementTypeAcceptingRef/elementTypeAcceptingRef.js
var import_prop_types$1 = /* @__PURE__ */ __toESM(require_prop_types(), 1);
function isClassComponent(elementType) {
	const { prototype = {} } = elementType;
	return Boolean(prototype.isReactComponent);
}
function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
	const propValue = props[propName];
	const safePropName = propFullName || propName;
	if (propValue == null || typeof window === "undefined") return null;
	let warningHint;
	/**
	* Blacklisting instead of whitelisting
	*
	* Blacklisting will miss some components, such as React.Fragment. Those will at least
	* trigger a warning in React.
	* We can't whitelist because there is no safe way to detect React.forwardRef
	* or class components. "Safe" means there's no public API.
	*
	*/
	if (typeof propValue === "function" && !isClassComponent(propValue)) warningHint = "Did you accidentally provide a plain function component instead?";
	if (warningHint !== void 0) return /* @__PURE__ */ new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. Expected an element type that can hold a ref. ${warningHint} For more information see https://mui.com/r/caveat-with-refs-guide`);
	return null;
}
var elementTypeAcceptingRef_default = chainPropTypes(import_prop_types$1.default.elementType, elementTypeAcceptingRef);

//#endregion
//#region node_modules/@mui/material/esm/transitions/utils.js
const reflow = (node) => node.scrollTop;
function getTransitionProps(props, options) {
	const { timeout, easing, style = {} } = props;
	return {
		duration: style.transitionDuration ?? (typeof timeout === "number" ? timeout : timeout[options.mode] || 0),
		easing: style.transitionTimingFunction ?? (typeof easing === "object" ? easing[options.mode] : easing),
		delay: style.transitionDelay
	};
}

//#endregion
//#region node_modules/@mui/utils/esm/isHostComponent/isHostComponent.js
/**
* Determines if a given element is a DOM element name (i.e. not a React component).
*/
function isHostComponent(element) {
	return typeof element === "string";
}
var isHostComponent_default = isHostComponent;

//#endregion
//#region node_modules/@mui/utils/esm/appendOwnerState/appendOwnerState.js
/**
* Type of the ownerState based on the type of an element it applies to.
* This resolves to the provided OwnerState for React components and `undefined` for host components.
* Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
*/
/**
* Appends the ownerState object to the props, merging with the existing one if necessary.
*
* @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
* @param otherProps Props of the element.
* @param ownerState
*/
function appendOwnerState(elementType, otherProps, ownerState) {
	if (elementType === void 0 || isHostComponent_default(elementType)) return otherProps;
	return {
		...otherProps,
		ownerState: {
			...otherProps.ownerState,
			...ownerState
		}
	};
}
var appendOwnerState_default = appendOwnerState;

//#endregion
//#region node_modules/@mui/utils/esm/resolveComponentProps/resolveComponentProps.js
/**
* If `componentProps` is a function, calls it with the provided `ownerState`.
* Otherwise, just returns `componentProps`.
*/
function resolveComponentProps(componentProps, ownerState, slotState) {
	if (typeof componentProps === "function") return componentProps(ownerState, slotState);
	return componentProps;
}
var resolveComponentProps_default = resolveComponentProps;

//#endregion
//#region node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js
/**
* Extracts event handlers from a given object.
* A prop is considered an event handler if it is a function and its name starts with `on`.
*
* @param object An object to extract event handlers from.
* @param excludeKeys An array of keys to exclude from the returned object.
*/
function extractEventHandlers(object, excludeKeys = []) {
	if (object === void 0) return {};
	const result = {};
	Object.keys(object).filter((prop) => prop.match(/^on[A-Z]/) && typeof object[prop] === "function" && !excludeKeys.includes(prop)).forEach((prop) => {
		result[prop] = object[prop];
	});
	return result;
}
var extractEventHandlers_default = extractEventHandlers;

//#endregion
//#region node_modules/@mui/utils/esm/omitEventHandlers/omitEventHandlers.js
/**
* Removes event handlers from the given object.
* A field is considered an event handler if it is a function with a name beginning with `on`.
*
* @param object Object to remove event handlers from.
* @returns Object with event handlers removed.
*/
function omitEventHandlers(object) {
	if (object === void 0) return {};
	const result = {};
	Object.keys(object).filter((prop) => !(prop.match(/^on[A-Z]/) && typeof object[prop] === "function")).forEach((prop) => {
		result[prop] = object[prop];
	});
	return result;
}
var omitEventHandlers_default = omitEventHandlers;

//#endregion
//#region node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js
/**
* Merges the slot component internal props (usually coming from a hook)
* with the externally provided ones.
*
* The merge order is (the latter overrides the former):
* 1. The internal props (specified as a getter function to work with get*Props hook result)
* 2. Additional props (specified internally on a Base UI component)
* 3. External props specified on the owner component. These should only be used on a root slot.
* 4. External props specified in the `slotProps.*` prop.
* 5. The `className` prop - combined from all the above.
* @param parameters
* @returns
*/
function mergeSlotProps(parameters) {
	const { getSlotProps, additionalProps, externalSlotProps, externalForwardedProps, className } = parameters;
	if (!getSlotProps) {
		const joinedClasses$1 = clsx_default(additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
		const mergedStyle$1 = {
			...additionalProps?.style,
			...externalForwardedProps?.style,
			...externalSlotProps?.style
		};
		const props$1 = {
			...additionalProps,
			...externalForwardedProps,
			...externalSlotProps
		};
		if (joinedClasses$1.length > 0) props$1.className = joinedClasses$1;
		if (Object.keys(mergedStyle$1).length > 0) props$1.style = mergedStyle$1;
		return {
			props: props$1,
			internalRef: void 0
		};
	}
	const eventHandlers = extractEventHandlers_default({
		...externalForwardedProps,
		...externalSlotProps
	});
	const componentsPropsWithoutEventHandlers = omitEventHandlers_default(externalSlotProps);
	const otherPropsWithoutEventHandlers = omitEventHandlers_default(externalForwardedProps);
	const internalSlotProps = getSlotProps(eventHandlers);
	const joinedClasses = clsx_default(internalSlotProps?.className, additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
	const mergedStyle = {
		...internalSlotProps?.style,
		...additionalProps?.style,
		...externalForwardedProps?.style,
		...externalSlotProps?.style
	};
	const props = {
		...internalSlotProps,
		...additionalProps,
		...otherPropsWithoutEventHandlers,
		...componentsPropsWithoutEventHandlers
	};
	if (joinedClasses.length > 0) props.className = joinedClasses;
	if (Object.keys(mergedStyle).length > 0) props.style = mergedStyle;
	return {
		props,
		internalRef: internalSlotProps.ref
	};
}
var mergeSlotProps_default = mergeSlotProps;

//#endregion
//#region node_modules/@mui/material/esm/utils/useSlot.js
/**
* An internal function to create a Material UI slot.
*
* This is an advanced version of Base UI `useSlotProps` because Material UI allows leaf component to be customized via `component` prop
* while Base UI does not need to support leaf component customization.
*
* @param {string} name: name of the slot
* @param {object} parameters
* @returns {[Slot, slotProps]} The slot's React component and the slot's props
*
* Note: the returned slot's props
* - will never contain `component` prop.
* - might contain `as` prop.
*/
function useSlot(name, parameters) {
	const { className, elementType: initialElementType, ownerState, externalForwardedProps, internalForwardedProps, shouldForwardComponentProp = false,...useSlotPropsParams } = parameters;
	const { component: rootComponent, slots = { [name]: void 0 }, slotProps = { [name]: void 0 },...other } = externalForwardedProps;
	const elementType = slots[name] || initialElementType;
	const resolvedComponentsProps = resolveComponentProps_default(slotProps[name], ownerState);
	const { props: { component: slotComponent,...mergedProps }, internalRef } = mergeSlotProps_default({
		className,
		...useSlotPropsParams,
		externalForwardedProps: name === "root" ? other : void 0,
		externalSlotProps: resolvedComponentsProps
	});
	const ref = useForkRef(internalRef, resolvedComponentsProps?.ref, parameters.ref);
	const LeafComponent = name === "root" ? slotComponent || rootComponent : slotComponent;
	const props = appendOwnerState_default(elementType, {
		...name === "root" && !rootComponent && !slots[name] && internalForwardedProps,
		...name !== "root" && !slots[name] && internalForwardedProps,
		...mergedProps,
		...LeafComponent && !shouldForwardComponentProp && { as: LeafComponent },
		...LeafComponent && shouldForwardComponentProp && { component: LeafComponent },
		ref
	}, ownerState);
	return [elementType, props];
}

//#endregion
//#region node_modules/@mui/material/esm/Collapse/collapseClasses.js
function getCollapseUtilityClass(slot) {
	return generateUtilityClass("MuiCollapse", slot);
}
var collapseClasses = generateUtilityClasses("MuiCollapse", [
	"root",
	"horizontal",
	"vertical",
	"entered",
	"hidden",
	"wrapper",
	"wrapperInner"
]);
var collapseClasses_default = collapseClasses;

//#endregion
//#region node_modules/@mui/material/esm/Collapse/Collapse.js
var import_prop_types = /* @__PURE__ */ __toESM(require_prop_types(), 1);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
var useUtilityClasses = (ownerState) => {
	const { orientation, classes } = ownerState;
	const slots = {
		root: ["root", `${orientation}`],
		entered: ["entered"],
		hidden: ["hidden"],
		wrapper: ["wrapper", `${orientation}`],
		wrapperInner: ["wrapperInner", `${orientation}`]
	};
	return composeClasses(slots, getCollapseUtilityClass, classes);
};
var CollapseRoot = styled_default("div", {
	name: "MuiCollapse",
	slot: "Root",
	overridesResolver: (props, styles) => {
		const { ownerState } = props;
		return [
			styles.root,
			styles[ownerState.orientation],
			ownerState.state === "entered" && styles.entered,
			ownerState.state === "exited" && !ownerState.in && ownerState.collapsedSize === "0px" && styles.hidden
		];
	}
})(memoTheme_default(({ theme }) => ({
	height: 0,
	overflow: "hidden",
	transition: theme.transitions.create("height"),
	variants: [
		{
			props: { orientation: "horizontal" },
			style: {
				height: "auto",
				width: 0,
				transition: theme.transitions.create("width")
			}
		},
		{
			props: { state: "entered" },
			style: {
				height: "auto",
				overflow: "visible"
			}
		},
		{
			props: {
				state: "entered",
				orientation: "horizontal"
			},
			style: { width: "auto" }
		},
		{
			props: ({ ownerState }) => ownerState.state === "exited" && !ownerState.in && ownerState.collapsedSize === "0px",
			style: { visibility: "hidden" }
		}
	]
})));
var CollapseWrapper = styled_default("div", {
	name: "MuiCollapse",
	slot: "Wrapper"
})({
	display: "flex",
	width: "100%",
	variants: [{
		props: { orientation: "horizontal" },
		style: {
			width: "auto",
			height: "100%"
		}
	}]
});
var CollapseWrapperInner = styled_default("div", {
	name: "MuiCollapse",
	slot: "WrapperInner"
})({
	width: "100%",
	variants: [{
		props: { orientation: "horizontal" },
		style: {
			width: "auto",
			height: "100%"
		}
	}]
});
/**
* The Collapse transition is used by the
* [Vertical Stepper](/material-ui/react-stepper/#vertical-stepper) StepContent component.
* It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
*/
var Collapse = /* @__PURE__ */ import_react.forwardRef(function Collapse$1(inProps, ref) {
	const props = useDefaultProps({
		props: inProps,
		name: "MuiCollapse"
	});
	const { addEndListener, children, className, collapsedSize: collapsedSizeProp = "0px", component, easing, in: inProp, onEnter, onEntered, onEntering, onExit, onExited, onExiting, orientation = "vertical", slots = {}, slotProps = {}, style, timeout = duration.standard, TransitionComponent = Transition_default,...other } = props;
	const ownerState = {
		...props,
		orientation,
		collapsedSize: collapsedSizeProp
	};
	const classes = useUtilityClasses(ownerState);
	const theme = useTheme();
	const timer = useTimeout();
	const wrapperRef = import_react.useRef(null);
	const autoTransitionDuration = import_react.useRef();
	const collapsedSize = typeof collapsedSizeProp === "number" ? `${collapsedSizeProp}px` : collapsedSizeProp;
	const isHorizontal = orientation === "horizontal";
	const size = isHorizontal ? "width" : "height";
	const nodeRef = import_react.useRef(null);
	const handleRef = useForkRef_default(ref, nodeRef);
	const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
		if (callback) {
			const node = nodeRef.current;
			if (maybeIsAppearing === void 0) callback(node);
			else callback(node, maybeIsAppearing);
		}
	};
	const getWrapperSize = () => wrapperRef.current ? wrapperRef.current[isHorizontal ? "clientWidth" : "clientHeight"] : 0;
	const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
		if (wrapperRef.current && isHorizontal) wrapperRef.current.style.position = "absolute";
		node.style[size] = collapsedSize;
		if (onEnter) onEnter(node, isAppearing);
	});
	const handleEntering = normalizedTransitionCallback((node, isAppearing) => {
		const wrapperSize = getWrapperSize();
		if (wrapperRef.current && isHorizontal) wrapperRef.current.style.position = "";
		const { duration: transitionDuration, easing: transitionTimingFunction } = getTransitionProps({
			style,
			timeout,
			easing
		}, { mode: "enter" });
		if (timeout === "auto") {
			const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
			node.style.transitionDuration = `${duration2}ms`;
			autoTransitionDuration.current = duration2;
		} else node.style.transitionDuration = typeof transitionDuration === "string" ? transitionDuration : `${transitionDuration}ms`;
		node.style[size] = `${wrapperSize}px`;
		node.style.transitionTimingFunction = transitionTimingFunction;
		if (onEntering) onEntering(node, isAppearing);
	});
	const handleEntered = normalizedTransitionCallback((node, isAppearing) => {
		node.style[size] = "auto";
		if (onEntered) onEntered(node, isAppearing);
	});
	const handleExit = normalizedTransitionCallback((node) => {
		node.style[size] = `${getWrapperSize()}px`;
		if (onExit) onExit(node);
	});
	const handleExited = normalizedTransitionCallback(onExited);
	const handleExiting = normalizedTransitionCallback((node) => {
		const wrapperSize = getWrapperSize();
		const { duration: transitionDuration, easing: transitionTimingFunction } = getTransitionProps({
			style,
			timeout,
			easing
		}, { mode: "exit" });
		if (timeout === "auto") {
			const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
			node.style.transitionDuration = `${duration2}ms`;
			autoTransitionDuration.current = duration2;
		} else node.style.transitionDuration = typeof transitionDuration === "string" ? transitionDuration : `${transitionDuration}ms`;
		node.style[size] = collapsedSize;
		node.style.transitionTimingFunction = transitionTimingFunction;
		if (onExiting) onExiting(node);
	});
	const handleAddEndListener = (next) => {
		if (timeout === "auto") timer.start(autoTransitionDuration.current || 0, next);
		if (addEndListener) addEndListener(nodeRef.current, next);
	};
	const externalForwardedProps = {
		slots,
		slotProps,
		component
	};
	const [RootSlot, rootSlotProps] = useSlot("root", {
		ref: handleRef,
		className: clsx_default(classes.root, className),
		elementType: CollapseRoot,
		externalForwardedProps,
		ownerState,
		additionalProps: { style: {
			[isHorizontal ? "minWidth" : "minHeight"]: collapsedSize,
			...style
		} }
	});
	const [WrapperSlot, wrapperSlotProps] = useSlot("wrapper", {
		ref: wrapperRef,
		className: classes.wrapper,
		elementType: CollapseWrapper,
		externalForwardedProps,
		ownerState
	});
	const [WrapperInnerSlot, wrapperInnerSlotProps] = useSlot("wrapperInner", {
		className: classes.wrapperInner,
		elementType: CollapseWrapperInner,
		externalForwardedProps,
		ownerState
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransitionComponent, {
		in: inProp,
		onEnter: handleEnter,
		onEntered: handleEntered,
		onEntering: handleEntering,
		onExit: handleExit,
		onExited: handleExited,
		onExiting: handleExiting,
		addEndListener: handleAddEndListener,
		nodeRef,
		timeout: timeout === "auto" ? null : timeout,
		...other,
		children: (state, { ownerState: incomingOwnerState,...restChildProps }) => {
			const stateOwnerState = {
				...ownerState,
				state
			};
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RootSlot, {
				...rootSlotProps,
				className: clsx_default(rootSlotProps.className, {
					"entered": classes.entered,
					"exited": !inProp && collapsedSize === "0px" && classes.hidden
				}[state]),
				ownerState: stateOwnerState,
				...restChildProps,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WrapperSlot, {
					...wrapperSlotProps,
					ownerState: stateOwnerState,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WrapperInnerSlot, {
						...wrapperInnerSlotProps,
						ownerState: stateOwnerState,
						children
					})
				})
			});
		}
	});
});
Collapse.propTypes = {
	addEndListener: import_prop_types.default.func,
	children: import_prop_types.default.node,
	classes: import_prop_types.default.object,
	className: import_prop_types.default.string,
	collapsedSize: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]),
	component: elementTypeAcceptingRef_default,
	easing: import_prop_types.default.oneOfType([import_prop_types.default.shape({
		enter: import_prop_types.default.string,
		exit: import_prop_types.default.string
	}), import_prop_types.default.string]),
	in: import_prop_types.default.bool,
	onEnter: import_prop_types.default.func,
	onEntered: import_prop_types.default.func,
	onEntering: import_prop_types.default.func,
	onExit: import_prop_types.default.func,
	onExited: import_prop_types.default.func,
	onExiting: import_prop_types.default.func,
	orientation: import_prop_types.default.oneOf(["horizontal", "vertical"]),
	slotProps: import_prop_types.default.shape({
		root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
		wrapper: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
		wrapperInner: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
	}),
	slots: import_prop_types.default.shape({
		root: import_prop_types.default.elementType,
		wrapper: import_prop_types.default.elementType,
		wrapperInner: import_prop_types.default.elementType
	}),
	style: import_prop_types.default.object,
	sx: import_prop_types.default.oneOfType([
		import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([
			import_prop_types.default.func,
			import_prop_types.default.object,
			import_prop_types.default.bool
		])),
		import_prop_types.default.func,
		import_prop_types.default.object
	]),
	timeout: import_prop_types.default.oneOfType([
		import_prop_types.default.oneOf(["auto"]),
		import_prop_types.default.number,
		import_prop_types.default.shape({
			appear: import_prop_types.default.number,
			enter: import_prop_types.default.number,
			exit: import_prop_types.default.number
		})
	])
};
if (Collapse) Collapse.muiSupportAuto = true;
var Collapse_default = Collapse;

//#endregion
export { Collapse_default, Timeout, TransitionGroupContext_default, Transition_default, _inheritsLoose, _objectWithoutPropertiesLoose, appendOwnerState_default, collapseClasses_default, createChainedFunction, createChainedFunction_default, debounce, debounce_default, deprecatedPropType_default, elementTypeAcceptingRef_default, extractEventHandlers_default, getCollapseUtilityClass, getTransitionProps, isHostComponent_default, isMuiElement, isMuiElement_default, mergeSlotProps$1 as mergeSlotProps, mergeSlotProps_default, ownerDocument, ownerDocument_default, ownerWindow, ownerWindow_default, reflow, requirePropFactory_default, resolveComponentProps_default, setRef, setRef_default, unstable_ClassNameGenerator, unsupportedProp_default, useControlled, useControlled_default, useEnhancedEffect_default, useEventCallback_default, useEventCallback_default$1, useForkRef, useForkRef_default, useId_default, useLazyRef, useSlot, useTimeout };
//# sourceMappingURL=Collapse-DeqkqObr.js.map