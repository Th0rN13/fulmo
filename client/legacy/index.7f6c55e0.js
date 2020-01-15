import { i as init, s as safe_not_equal, f as dispatch_dev, S as SvelteComponentDev, h as element, t as text, j as claim_element, k as children, l as claim_text, m as detach_dev, o as attr_dev, T as toggle_class, q as add_location, r as insert_dev, u as append_dev, U as listen_dev, w as set_data_dev, V as prop_dev, n as noop, W as bubble, M as empty, X as svg_element, x as create_component, z as claim_component, B as mount_component, C as transition_in, D as transition_out, E as destroy_component, y as space, A as claim_space, F as group_outros, G as check_outros, a as _inherits$1, b as _classCallCheck$1, c as _possibleConstructorReturn$1, d as _getPrototypeOf$1, e as _assertThisInitialized$1, N as query_selector_all, v as _slicedToArray$1 } from './index.b5677b82.js';
import _classCallCheck from '@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '@babel/runtime/helpers/esm/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/esm/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/esm/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/esm/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/esm/inherits';
import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray';
import { A as AnimPage } from './_animate-page.bf91efe6.js';

var file = "home/runner/work/fulmo/fulmo/cmp/Button.svelte";

function create_fragment(ctx) {
  var button;
  var t;
  var dispose;
  var block = {
    c: function create() {
      button = element("button");
      t = text(
      /*title*/
      ctx[0]);
      this.h();
    },
    l: function claim(nodes) {
      button = claim_element(nodes, "BUTTON", {
        disabled: true,
        class: true
      });
      var button_nodes = children(button);
      t = claim_text(button_nodes,
      /*title*/
      ctx[0]);
      button_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      button.disabled =
      /*disabled*/
      ctx[1];
      attr_dev(button, "class", "button svelte-1rmh7gq");
      toggle_class(button, "disabled",
      /*disabled*/
      ctx[1]);
      toggle_class(button, "loading",
      /*loading*/
      ctx[2]);
      add_location(button, file, 6, 0, 101);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);
      append_dev(button, t);
      dispose = listen_dev(button, "click",
      /*click_handler*/
      ctx[3], false, false, false);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*title*/
      1) set_data_dev(t,
      /*title*/
      ctx[0]);

      if (dirty &
      /*disabled*/
      2) {
        prop_dev(button, "disabled",
        /*disabled*/
        ctx[1]);
      }

      if (dirty &
      /*disabled*/
      2) {
        toggle_class(button, "disabled",
        /*disabled*/
        ctx[1]);
      }

      if (dirty &
      /*loading*/
      4) {
        toggle_class(button, "loading",
        /*loading*/
        ctx[2]);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(button);
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var title = $$props.title;
  var _$$props$disabled = $$props.disabled,
      disabled = _$$props$disabled === void 0 ? false : _$$props$disabled;
  var _$$props$loading = $$props.loading,
      loading = _$$props$loading === void 0 ? false : _$$props$loading;
  var writable_props = ["title", "disabled", "loading"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Button> was created with unknown prop '".concat(key, "'"));
  });

  function click_handler(event) {
    bubble($$self, event);
  }

  $$self.$set = function ($$props) {
    if ("title" in $$props) $$invalidate(0, title = $$props.title);
    if ("disabled" in $$props) $$invalidate(1, disabled = $$props.disabled);
    if ("loading" in $$props) $$invalidate(2, loading = $$props.loading);
  };

  $$self.$capture_state = function () {
    return {
      title: title,
      disabled: disabled,
      loading: loading
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("title" in $$props) $$invalidate(0, title = $$props.title);
    if ("disabled" in $$props) $$invalidate(1, disabled = $$props.disabled);
    if ("loading" in $$props) $$invalidate(2, loading = $$props.loading);
  };

  return [title, disabled, loading, click_handler];
}

var Button =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Button, _SvelteComponentDev);

  function Button(options) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      title: 0,
      disabled: 1,
      loading: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Button",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*title*/
    ctx[0] === undefined && !("title" in props)) {
      console.warn("<Button> was created without expected prop 'title'");
    }

    return _this;
  }

  _createClass(Button, [{
    key: "title",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "disabled",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "loading",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Button;
}(SvelteComponentDev);

var file$1 = "home/runner/work/fulmo/fulmo/cmp/SvgIcon.svelte"; // (34:15) 

function create_if_block_3(ctx) {
  var svg;
  var path;
  var block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_element(nodes, "svg", {
        viewBox: true
      }, 1);
      var svg_nodes = children(svg);
      path = claim_element(svg_nodes, "path", {
        fill: true,
        d: true
      }, 1);
      children(path).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(path, "fill", "currentColor");
      attr_dev(path, "d", "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z");
      add_location(path, file$1, 35, 4, 1220);
      attr_dev(svg, "viewBox", "0 0 24 24");
      add_location(svg, file$1, 34, 2, 1190);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_3.name,
    type: "if",
    source: "(34:15) ",
    ctx: ctx
  });
  return block;
} // (30:16) 


function create_if_block_2(ctx) {
  var svg;
  var path;
  var block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_element(nodes, "svg", {
        viewBox: true
      }, 1);
      var svg_nodes = children(svg);
      path = claim_element(svg_nodes, "path", {
        fill: true,
        d: true
      }, 1);
      children(path).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(path, "fill", "currentColor");
      attr_dev(path, "d", "M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z");
      add_location(path, file$1, 31, 4, 918);
      attr_dev(svg, "viewBox", "0 0 24 24");
      add_location(svg, file$1, 30, 2, 888);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_2.name,
    type: "if",
    source: "(30:16) ",
    ctx: ctx
  });
  return block;
} // (26:15) 


function create_if_block_1(ctx) {
  var svg;
  var path;
  var block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_element(nodes, "svg", {
        viewBox: true
      }, 1);
      var svg_nodes = children(svg);
      path = claim_element(svg_nodes, "path", {
        fill: true,
        d: true
      }, 1);
      children(path).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(path, "fill", "currentColor");
      attr_dev(path, "d", "M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z");
      add_location(path, file$1, 27, 4, 591);
      attr_dev(svg, "viewBox", "0 0 24 24");
      add_location(svg, file$1, 26, 2, 561);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(26:15) ",
    ctx: ctx
  });
  return block;
} // (22:0) {#if check}


function create_if_block(ctx) {
  var svg;
  var path;
  var block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_element(nodes, "svg", {
        viewBox: true
      }, 1);
      var svg_nodes = children(svg);
      path = claim_element(svg_nodes, "path", {
        fill: true,
        d: true
      }, 1);
      children(path).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(path, "fill", "currentColor");
      attr_dev(path, "d", "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z");
      add_location(path, file$1, 23, 4, 445);
      attr_dev(svg, "viewBox", "0 0 24 24");
      add_location(svg, file$1, 22, 2, 415);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(22:0) {#if check}",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var if_block_anchor;

  function select_block_type(ctx, dirty) {
    if (
    /*check*/
    ctx[0]) return create_if_block;
    if (
    /*lock*/
    ctx[1]) return create_if_block_1;
    if (
    /*radio*/
    ctx[2]) return create_if_block_2;
    if (
    /*user*/
    ctx[3]) return create_if_block_3;
  }

  var current_block_type = select_block_type(ctx);
  var if_block = current_block_type && current_block_type(ctx);
  var block = {
    c: function create() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (current_block_type !== (current_block_type = select_block_type(ctx))) {
        if (if_block) if_block.d(1);
        if_block = current_block_type && current_block_type(ctx);

        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (if_block) {
        if_block.d(detaching);
      }

      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var _$$props$check = $$props.check,
      check = _$$props$check === void 0 ? false : _$$props$check;
  var _$$props$lock = $$props.lock,
      lock = _$$props$lock === void 0 ? false : _$$props$lock;
  var _$$props$radio = $$props.radio,
      radio = _$$props$radio === void 0 ? false : _$$props$radio;
  var _$$props$user = $$props.user,
      user = _$$props$user === void 0 ? false : _$$props$user;
  var icon = $$props.icon;

  function iconSet(icon) {
    if (icon) {
      $$invalidate(0, check = icon === "check");
      $$invalidate(1, lock = icon === "lock");
      $$invalidate(2, radio = icon === "radio");
      $$invalidate(3, user = icon === "user");
    }
  }

  var writable_props = ["check", "lock", "radio", "user", "icon"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<SvgIcon> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$set = function ($$props) {
    if ("check" in $$props) $$invalidate(0, check = $$props.check);
    if ("lock" in $$props) $$invalidate(1, lock = $$props.lock);
    if ("radio" in $$props) $$invalidate(2, radio = $$props.radio);
    if ("user" in $$props) $$invalidate(3, user = $$props.user);
    if ("icon" in $$props) $$invalidate(4, icon = $$props.icon);
  };

  $$self.$capture_state = function () {
    return {
      check: check,
      lock: lock,
      radio: radio,
      user: user,
      icon: icon
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("check" in $$props) $$invalidate(0, check = $$props.check);
    if ("lock" in $$props) $$invalidate(1, lock = $$props.lock);
    if ("radio" in $$props) $$invalidate(2, radio = $$props.radio);
    if ("user" in $$props) $$invalidate(3, user = $$props.user);
    if ("icon" in $$props) $$invalidate(4, icon = $$props.icon);
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*icon*/
    16) {
       iconSet(icon);
    }
  };

  return [check, lock, radio, user, icon];
}

var SvgIcon =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(SvgIcon, _SvelteComponentDev);

  function SvgIcon(options) {
    var _this;

    _classCallCheck(this, SvgIcon);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SvgIcon).call(this, options));
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      check: 0,
      lock: 1,
      radio: 2,
      user: 3,
      icon: 4
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "SvgIcon",
      options: options,
      id: create_fragment$1.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*icon*/
    ctx[4] === undefined && !("icon" in props)) {
      console.warn("<SvgIcon> was created without expected prop 'icon'");
    }

    return _this;
  }

  _createClass(SvgIcon, [{
    key: "check",
    get: function get() {
      throw new Error("<SvgIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<SvgIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "lock",
    get: function get() {
      throw new Error("<SvgIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<SvgIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "radio",
    get: function get() {
      throw new Error("<SvgIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<SvgIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "user",
    get: function get() {
      throw new Error("<SvgIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<SvgIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "icon",
    get: function get() {
      throw new Error("<SvgIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<SvgIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return SvgIcon;
}(SvelteComponentDev);

var file$2 = "home/runner/work/fulmo/fulmo/cmp/Checkbox.svelte"; // (10:4) {#if checked}

function create_if_block$1(ctx) {
  var current;
  var svgicon = new SvgIcon({
    props: {
      icon: "check"
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(svgicon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(svgicon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(svgicon, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      transition_in(svgicon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(svgicon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(svgicon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block$1.name,
    type: "if",
    source: "(10:4) {#if checked}",
    ctx: ctx
  });
  return block;
}

function create_fragment$2(ctx) {
  var label_1;
  var input;
  var t0;
  var div;
  var t1;
  var p;
  var t2;
  var current;
  var if_block =
  /*checked*/
  ctx[0] && create_if_block$1(ctx);
  var block = {
    c: function create() {
      label_1 = element("label");
      input = element("input");
      t0 = space();
      div = element("div");
      if (if_block) if_block.c();
      t1 = space();
      p = element("p");
      t2 = text(
      /*label*/
      ctx[1]);
      this.h();
    },
    l: function claim(nodes) {
      label_1 = claim_element(nodes, "LABEL", {});
      var label_1_nodes = children(label_1);
      input = claim_element(label_1_nodes, "INPUT", {
        type: true,
        checked: true,
        class: true
      });
      t0 = claim_space(label_1_nodes);
      div = claim_element(label_1_nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      if (if_block) if_block.l(div_nodes);
      div_nodes.forEach(detach_dev);
      t1 = claim_space(label_1_nodes);
      p = claim_element(label_1_nodes, "P", {});
      var p_nodes = children(p);
      t2 = claim_text(p_nodes,
      /*label*/
      ctx[1]);
      p_nodes.forEach(detach_dev);
      label_1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(input, "type", "checkbox");
      input.checked =
      /*checked*/
      ctx[0];
      attr_dev(input, "class", "svelte-1ccwnzz");
      add_location(input, file$2, 7, 2, 115);
      attr_dev(div, "class", "border svelte-1ccwnzz");
      toggle_class(div, "checked",
      /*checked*/
      ctx[0]);
      add_location(div, file$2, 8, 2, 152);
      add_location(p, file$2, 13, 2, 256);
      add_location(label_1, file$2, 6, 0, 105);
    },
    m: function mount(target, anchor) {
      insert_dev(target, label_1, anchor);
      append_dev(label_1, input);
      append_dev(label_1, t0);
      append_dev(label_1, div);
      if (if_block) if_block.m(div, null);
      append_dev(label_1, t1);
      append_dev(label_1, p);
      append_dev(p, t2);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (!current || dirty &
      /*checked*/
      1) {
        prop_dev(input, "checked",
        /*checked*/
        ctx[0]);
      }

      if (
      /*checked*/
      ctx[0]) {
        if (!if_block) {
          if_block = create_if_block$1(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, null);
        } else {
          transition_in(if_block, 1);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, function () {
          if_block = null;
        });
        check_outros();
      }

      if (dirty &
      /*checked*/
      1) {
        toggle_class(div, "checked",
        /*checked*/
        ctx[0]);
      }

      if (!current || dirty &
      /*label*/
      2) set_data_dev(t2,
      /*label*/
      ctx[1]);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(label_1);
      if (if_block) if_block.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$2($$self, $$props, $$invalidate) {
  var _$$props$checked = $$props.checked,
      checked = _$$props$checked === void 0 ? false : _$$props$checked;
  var label = $$props.label;
  var writable_props = ["checked", "label"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Checkbox> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$set = function ($$props) {
    if ("checked" in $$props) $$invalidate(0, checked = $$props.checked);
    if ("label" in $$props) $$invalidate(1, label = $$props.label);
  };

  $$self.$capture_state = function () {
    return {
      checked: checked,
      label: label
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("checked" in $$props) $$invalidate(0, checked = $$props.checked);
    if ("label" in $$props) $$invalidate(1, label = $$props.label);
  };

  return [checked, label];
}

var Checkbox =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(Checkbox, _SvelteComponentDev);

  function Checkbox(options) {
    var _this;

    _classCallCheck(this, Checkbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).call(this, options));
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
      checked: 0,
      label: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Checkbox",
      options: options,
      id: create_fragment$2.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*label*/
    ctx[1] === undefined && !("label" in props)) {
      console.warn("<Checkbox> was created without expected prop 'label'");
    }

    return _this;
  }

  _createClass(Checkbox, [{
    key: "checked",
    get: function get() {
      throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "label",
    get: function get() {
      throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Checkbox;
}(SvelteComponentDev);

function create_default_slot(ctx) {
  var t0;
  var t1;
  var current;
  var button = new Button({
    props: {
      title: "Main Page"
    },
    $$inline: true
  });
  var checkbox0 = new Checkbox({
    props: {
      label: "Remember me",
      checked: true
    },
    $$inline: true
  });
  var checkbox1 = new Checkbox({
    props: {
      label: "Remember me"
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(button.$$.fragment);
      t0 = space();
      create_component(checkbox0.$$.fragment);
      t1 = space();
      create_component(checkbox1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(button.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(checkbox0.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(checkbox1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(checkbox0, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(checkbox1, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(button.$$.fragment, local);
      transition_in(checkbox0.$$.fragment, local);
      transition_in(checkbox1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      transition_out(checkbox0.$$.fragment, local);
      transition_out(checkbox1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(checkbox0, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(checkbox1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(10:0) <AnimPage>",
    ctx: ctx
  });
  return block;
}

function create_fragment$3(ctx) {
  var t;
  var current;
  var animpage = new AnimPage({
    props: {
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      t = space();
      create_component(animpage.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-n3ior8\"]", document.head);
      head_nodes.forEach(detach_dev);
      t = claim_space(nodes);
      claim_component(animpage.$$.fragment, nodes);
      this.h();
    },
    h: function hydrate() {
      document.title = "Home";
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
      mount_component(animpage, target, anchor);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray$1(_ref, 1),
          dirty = _ref2[0];

      var animpage_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        animpage_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      animpage.$set(animpage_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(animpage.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(animpage.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
      destroy_component(animpage, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

var Routes =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits$1(Routes, _SvelteComponentDev);

  function Routes(options) {
    var _this;

    _classCallCheck$1(this, Routes);

    _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(Routes).call(this, options));
    init(_assertThisInitialized$1(_this), options, null, create_fragment$3, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized$1(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment$3.name
    });
    return _this;
  }

  return Routes;
}(SvelteComponentDev);

export default Routes;
