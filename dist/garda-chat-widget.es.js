import Ht, { forwardRef as Kt, createElement as Qe, useState as W, useRef as Xe, useEffect as Ze } from "react";
import Jt from "react-dom";
var x = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Vt(i) {
  if (i.__esModule)
    return i;
  var e = i.default;
  if (typeof e == "function") {
    var t = function s() {
      return this instanceof s ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(i).forEach(function(s) {
    var r = Object.getOwnPropertyDescriptor(i, s);
    Object.defineProperty(t, s, r.get ? r : {
      enumerable: !0,
      get: function() {
        return i[s];
      }
    });
  }), t;
}
var _t = { exports: {} }, we = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yt = Ht, Qt = Symbol.for("react.element"), Xt = Symbol.for("react.fragment"), Zt = Object.prototype.hasOwnProperty, es = Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ts = { key: !0, ref: !0, __self: !0, __source: !0 };
function vt(i, e, t) {
  var s, r = {}, n = null, a = null;
  t !== void 0 && (n = "" + t), e.key !== void 0 && (n = "" + e.key), e.ref !== void 0 && (a = e.ref);
  for (s in e)
    Zt.call(e, s) && !ts.hasOwnProperty(s) && (r[s] = e[s]);
  if (i && i.defaultProps)
    for (s in e = i.defaultProps, e)
      r[s] === void 0 && (r[s] = e[s]);
  return { $$typeof: Qt, type: i, key: n, ref: a, props: r, _owner: es.current };
}
we.Fragment = Xt;
we.jsx = vt;
we.jsxs = vt;
_t.exports = we;
var y = _t.exports, yt, et = Jt;
yt = et.createRoot, et.hydrateRoot;
var ss = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const rs = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), is = (i, e) => {
  const t = Kt(
    ({ color: s = "currentColor", size: r = 24, strokeWidth: n = 2, absoluteStrokeWidth: a, children: o, ...l }, h) => Qe(
      "svg",
      {
        ref: h,
        ...ss,
        width: r,
        height: r,
        stroke: s,
        strokeWidth: a ? Number(n) * 24 / Number(r) : n,
        className: `lucide lucide-${rs(i)}`,
        ...l
      },
      [
        ...e.map(([c, u]) => Qe(c, u)),
        ...(Array.isArray(o) ? o : [o]) || []
      ]
    )
  );
  return t.displayName = `${i}`, t;
};
var be = is;
const ns = be("MessageCircle", [
  ["path", { d: "m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z", key: "v2veuj" }]
]), as = be("Minimize2", [
  ["polyline", { points: "4 14 10 14 10 20", key: "11kfnr" }],
  ["polyline", { points: "20 10 14 10 14 4", key: "rlmsce" }],
  ["line", { x1: "14", x2: "21", y1: "10", y2: "3", key: "o5lafz" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]), os = be("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]), ls = be("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), cs = (i) => {
  let e;
  return i ? e = i : typeof fetch > "u" ? e = (...t) => Promise.resolve().then(() => re).then(({ default: s }) => s(...t)) : e = fetch, (...t) => e(...t);
};
class We extends Error {
  constructor(e, t = "FunctionsError", s) {
    super(e), this.name = t, this.context = s;
  }
}
class hs extends We {
  constructor(e) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", e);
  }
}
class us extends We {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}
class ds extends We {
  constructor(e) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e);
  }
}
var De;
(function(i) {
  i.Any = "any", i.ApNortheast1 = "ap-northeast-1", i.ApNortheast2 = "ap-northeast-2", i.ApSouth1 = "ap-south-1", i.ApSoutheast1 = "ap-southeast-1", i.ApSoutheast2 = "ap-southeast-2", i.CaCentral1 = "ca-central-1", i.EuCentral1 = "eu-central-1", i.EuWest1 = "eu-west-1", i.EuWest2 = "eu-west-2", i.EuWest3 = "eu-west-3", i.SaEast1 = "sa-east-1", i.UsEast1 = "us-east-1", i.UsWest1 = "us-west-1", i.UsWest2 = "us-west-2";
})(De || (De = {}));
var fs = globalThis && globalThis.__awaiter || function(i, e, t, s) {
  function r(n) {
    return n instanceof t ? n : new t(function(a) {
      a(n);
    });
  }
  return new (t || (t = Promise))(function(n, a) {
    function o(c) {
      try {
        h(s.next(c));
      } catch (u) {
        a(u);
      }
    }
    function l(c) {
      try {
        h(s.throw(c));
      } catch (u) {
        a(u);
      }
    }
    function h(c) {
      c.done ? n(c.value) : r(c.value).then(o, l);
    }
    h((s = s.apply(i, e || [])).next());
  });
};
class gs {
  constructor(e, { headers: t = {}, customFetch: s, region: r = De.Any } = {}) {
    this.url = e, this.headers = t, this.region = r, this.fetch = cs(s);
  }
  /**
   * Updates the authorization header
   * @param token - the new jwt token sent in the authorisation header
   */
  setAuth(e) {
    this.headers.Authorization = `Bearer ${e}`;
  }
  /**
   * Invokes a function
   * @param functionName - The name of the Function to invoke.
   * @param options - Options for invoking the Function.
   */
  invoke(e, t = {}) {
    var s;
    return fs(this, void 0, void 0, function* () {
      try {
        const { headers: r, method: n, body: a } = t;
        let o = {}, { region: l } = t;
        l || (l = this.region), l && l !== "any" && (o["x-region"] = l);
        let h;
        a && (r && !Object.prototype.hasOwnProperty.call(r, "Content-Type") || !r) && (typeof Blob < "u" && a instanceof Blob || a instanceof ArrayBuffer ? (o["Content-Type"] = "application/octet-stream", h = a) : typeof a == "string" ? (o["Content-Type"] = "text/plain", h = a) : typeof FormData < "u" && a instanceof FormData ? h = a : (o["Content-Type"] = "application/json", h = JSON.stringify(a)));
        const c = yield this.fetch(`${this.url}/${e}`, {
          method: n || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, o), this.headers), r),
          body: h
        }).catch((_) => {
          throw new hs(_);
        }), u = c.headers.get("x-relay-error");
        if (u && u === "true")
          throw new us(c);
        if (!c.ok)
          throw new ds(c);
        let d = ((s = c.headers.get("Content-Type")) !== null && s !== void 0 ? s : "text/plain").split(";")[0].trim(), f;
        return d === "application/json" ? f = yield c.json() : d === "application/octet-stream" ? f = yield c.blob() : d === "text/event-stream" ? f = c : d === "multipart/form-data" ? f = yield c.formData() : f = yield c.text(), { data: f, error: null };
      } catch (r) {
        return { data: null, error: r };
      }
    });
  }
}
var $ = {}, He = {}, ke = {}, ue = {}, Se = {}, Te = {}, ps = function() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}, se = ps();
const ms = se.fetch, wt = se.fetch.bind(se), bt = se.Headers, _s = se.Request, vs = se.Response, re = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Headers: bt,
  Request: _s,
  Response: vs,
  default: wt,
  fetch: ms
}, Symbol.toStringTag, { value: "Module" })), ys = /* @__PURE__ */ Vt(re);
var Ee = {};
Object.defineProperty(Ee, "__esModule", { value: !0 });
let ws = class extends Error {
  constructor(e) {
    super(e.message), this.name = "PostgrestError", this.details = e.details, this.hint = e.hint, this.code = e.code;
  }
};
Ee.default = ws;
var kt = x && x.__importDefault || function(i) {
  return i && i.__esModule ? i : { default: i };
};
Object.defineProperty(Te, "__esModule", { value: !0 });
const bs = kt(ys), ks = kt(Ee);
let Ss = class {
  constructor(e) {
    this.shouldThrowOnError = !1, this.method = e.method, this.url = e.url, this.headers = e.headers, this.schema = e.schema, this.body = e.body, this.shouldThrowOnError = e.shouldThrowOnError, this.signal = e.signal, this.isMaybeSingle = e.isMaybeSingle, e.fetch ? this.fetch = e.fetch : typeof fetch > "u" ? this.fetch = bs.default : this.fetch = fetch;
  }
  /**
   * If there's an error with the query, throwOnError will reject the promise by
   * throwing the error instead of returning it as part of a successful response.
   *
   * {@link https://github.com/supabase/supabase-js/issues/92}
   */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
   * Set an HTTP header for the request.
   */
  setHeader(e, t) {
    return this.headers = Object.assign({}, this.headers), this.headers[e] = t, this;
  }
  then(e, t) {
    this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers["Accept-Profile"] = this.schema : this.headers["Content-Profile"] = this.schema), this.method !== "GET" && this.method !== "HEAD" && (this.headers["Content-Type"] = "application/json");
    const s = this.fetch;
    let r = s(this.url.toString(), {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify(this.body),
      signal: this.signal
    }).then(async (n) => {
      var a, o, l;
      let h = null, c = null, u = null, d = n.status, f = n.statusText;
      if (n.ok) {
        if (this.method !== "HEAD") {
          const T = await n.text();
          T === "" || (this.headers.Accept === "text/csv" || this.headers.Accept && this.headers.Accept.includes("application/vnd.pgrst.plan+text") ? c = T : c = JSON.parse(T));
        }
        const b = (a = this.headers.Prefer) === null || a === void 0 ? void 0 : a.match(/count=(exact|planned|estimated)/), p = (o = n.headers.get("content-range")) === null || o === void 0 ? void 0 : o.split("/");
        b && p && p.length > 1 && (u = parseInt(p[1])), this.isMaybeSingle && this.method === "GET" && Array.isArray(c) && (c.length > 1 ? (h = {
          // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
          code: "PGRST116",
          details: `Results contain ${c.length} rows, application/vnd.pgrst.object+json requires 1 row`,
          hint: null,
          message: "JSON object requested, multiple (or no) rows returned"
        }, c = null, u = null, d = 406, f = "Not Acceptable") : c.length === 1 ? c = c[0] : c = null);
      } else {
        const b = await n.text();
        try {
          h = JSON.parse(b), Array.isArray(h) && n.status === 404 && (c = [], h = null, d = 200, f = "OK");
        } catch {
          n.status === 404 && b === "" ? (d = 204, f = "No Content") : h = {
            message: b
          };
        }
        if (h && this.isMaybeSingle && (!((l = h == null ? void 0 : h.details) === null || l === void 0) && l.includes("0 rows")) && (h = null, d = 200, f = "OK"), h && this.shouldThrowOnError)
          throw new ks.default(h);
      }
      return {
        error: h,
        data: c,
        count: u,
        status: d,
        statusText: f
      };
    });
    return this.shouldThrowOnError || (r = r.catch((n) => {
      var a, o, l;
      return {
        error: {
          message: `${(a = n == null ? void 0 : n.name) !== null && a !== void 0 ? a : "FetchError"}: ${n == null ? void 0 : n.message}`,
          details: `${(o = n == null ? void 0 : n.stack) !== null && o !== void 0 ? o : ""}`,
          hint: "",
          code: `${(l = n == null ? void 0 : n.code) !== null && l !== void 0 ? l : ""}`
        },
        data: null,
        count: null,
        status: 0,
        statusText: ""
      };
    })), r.then(e, t);
  }
  /**
   * Override the type of the returned `data`.
   *
   * @typeParam NewResult - The new result type to override with
   * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
   */
  returns() {
    return this;
  }
  /**
   * Override the type of the returned `data` field in the response.
   *
   * @typeParam NewResult - The new type to cast the response data to
   * @typeParam Options - Optional type configuration (defaults to { merge: true })
   * @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
   * @example
   * ```typescript
   * // Merge with existing types (default behavior)
   * const query = supabase
   *   .from('users')
   *   .select()
   *   .overrideTypes<{ custom_field: string }>()
   *
   * // Replace existing types completely
   * const replaceQuery = supabase
   *   .from('users')
   *   .select()
   *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
   * ```
   * @returns A PostgrestBuilder instance with the new type
   */
  overrideTypes() {
    return this;
  }
};
Te.default = Ss;
var Ts = x && x.__importDefault || function(i) {
  return i && i.__esModule ? i : { default: i };
};
Object.defineProperty(Se, "__esModule", { value: !0 });
const Es = Ts(Te);
let Cs = class extends Es.default {
  /**
   * Perform a SELECT on the query result.
   *
   * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
   * return modified rows. By calling this method, modified rows are returned in
   * `data`.
   *
   * @param columns - The columns to retrieve, separated by commas
   */
  select(e) {
    let t = !1;
    const s = (e ?? "*").split("").map((r) => /\s/.test(r) && !t ? "" : (r === '"' && (t = !t), r)).join("");
    return this.url.searchParams.set("select", s), this.headers.Prefer && (this.headers.Prefer += ","), this.headers.Prefer += "return=representation", this;
  }
  /**
   * Order the query result by `column`.
   *
   * You can call this method multiple times to order by multiple columns.
   *
   * You can order referenced tables, but it only affects the ordering of the
   * parent table if you use `!inner` in the query.
   *
   * @param column - The column to order by
   * @param options - Named parameters
   * @param options.ascending - If `true`, the result will be in ascending order
   * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
   * `null`s appear last.
   * @param options.referencedTable - Set this to order a referenced table by
   * its columns
   * @param options.foreignTable - Deprecated, use `options.referencedTable`
   * instead
   */
  order(e, { ascending: t = !0, nullsFirst: s, foreignTable: r, referencedTable: n = r } = {}) {
    const a = n ? `${n}.order` : "order", o = this.url.searchParams.get(a);
    return this.url.searchParams.set(a, `${o ? `${o},` : ""}${e}.${t ? "asc" : "desc"}${s === void 0 ? "" : s ? ".nullsfirst" : ".nullslast"}`), this;
  }
  /**
   * Limit the query result by `count`.
   *
   * @param count - The maximum number of rows to return
   * @param options - Named parameters
   * @param options.referencedTable - Set this to limit rows of referenced
   * tables instead of the parent table
   * @param options.foreignTable - Deprecated, use `options.referencedTable`
   * instead
   */
  limit(e, { foreignTable: t, referencedTable: s = t } = {}) {
    const r = typeof s > "u" ? "limit" : `${s}.limit`;
    return this.url.searchParams.set(r, `${e}`), this;
  }
  /**
   * Limit the query result by starting at an offset `from` and ending at the offset `to`.
   * Only records within this range are returned.
   * This respects the query order and if there is no order clause the range could behave unexpectedly.
   * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
   * and fourth rows of the query.
   *
   * @param from - The starting index from which to limit the result
   * @param to - The last index to which to limit the result
   * @param options - Named parameters
   * @param options.referencedTable - Set this to limit rows of referenced
   * tables instead of the parent table
   * @param options.foreignTable - Deprecated, use `options.referencedTable`
   * instead
   */
  range(e, t, { foreignTable: s, referencedTable: r = s } = {}) {
    const n = typeof r > "u" ? "offset" : `${r}.offset`, a = typeof r > "u" ? "limit" : `${r}.limit`;
    return this.url.searchParams.set(n, `${e}`), this.url.searchParams.set(a, `${t - e + 1}`), this;
  }
  /**
   * Set the AbortSignal for the fetch request.
   *
   * @param signal - The AbortSignal to use for the fetch request
   */
  abortSignal(e) {
    return this.signal = e, this;
  }
  /**
   * Return `data` as a single object instead of an array of objects.
   *
   * Query result must be one row (e.g. using `.limit(1)`), otherwise this
   * returns an error.
   */
  single() {
    return this.headers.Accept = "application/vnd.pgrst.object+json", this;
  }
  /**
   * Return `data` as a single object instead of an array of objects.
   *
   * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
   * this returns an error.
   */
  maybeSingle() {
    return this.method === "GET" ? this.headers.Accept = "application/json" : this.headers.Accept = "application/vnd.pgrst.object+json", this.isMaybeSingle = !0, this;
  }
  /**
   * Return `data` as a string in CSV format.
   */
  csv() {
    return this.headers.Accept = "text/csv", this;
  }
  /**
   * Return `data` as an object in [GeoJSON](https://geojson.org) format.
   */
  geojson() {
    return this.headers.Accept = "application/geo+json", this;
  }
  /**
   * Return `data` as the EXPLAIN plan for the query.
   *
   * You need to enable the
   * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
   * setting before using this method.
   *
   * @param options - Named parameters
   *
   * @param options.analyze - If `true`, the query will be executed and the
   * actual run time will be returned
   *
   * @param options.verbose - If `true`, the query identifier will be returned
   * and `data` will include the output columns of the query
   *
   * @param options.settings - If `true`, include information on configuration
   * parameters that affect query planning
   *
   * @param options.buffers - If `true`, include information on buffer usage
   *
   * @param options.wal - If `true`, include information on WAL record generation
   *
   * @param options.format - The format of the output, can be `"text"` (default)
   * or `"json"`
   */
  explain({ analyze: e = !1, verbose: t = !1, settings: s = !1, buffers: r = !1, wal: n = !1, format: a = "text" } = {}) {
    var o;
    const l = [
      e ? "analyze" : null,
      t ? "verbose" : null,
      s ? "settings" : null,
      r ? "buffers" : null,
      n ? "wal" : null
    ].filter(Boolean).join("|"), h = (o = this.headers.Accept) !== null && o !== void 0 ? o : "application/json";
    return this.headers.Accept = `application/vnd.pgrst.plan+${a}; for="${h}"; options=${l};`, a === "json" ? this : this;
  }
  /**
   * Rollback the query.
   *
   * `data` will still be returned, but the query is not committed.
   */
  rollback() {
    var e;
    return ((e = this.headers.Prefer) !== null && e !== void 0 ? e : "").trim().length > 0 ? this.headers.Prefer += ",tx=rollback" : this.headers.Prefer = "tx=rollback", this;
  }
  /**
   * Override the type of the returned `data`.
   *
   * @typeParam NewResult - The new result type to override with
   * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
   */
  returns() {
    return this;
  }
};
Se.default = Cs;
var Os = x && x.__importDefault || function(i) {
  return i && i.__esModule ? i : { default: i };
};
Object.defineProperty(ue, "__esModule", { value: !0 });
const As = Os(Se);
let js = class extends As.default {
  /**
   * Match only rows where `column` is equal to `value`.
   *
   * To check if the value of `column` is NULL, you should use `.is()` instead.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  eq(e, t) {
    return this.url.searchParams.append(e, `eq.${t}`), this;
  }
  /**
   * Match only rows where `column` is not equal to `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  neq(e, t) {
    return this.url.searchParams.append(e, `neq.${t}`), this;
  }
  /**
   * Match only rows where `column` is greater than `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  gt(e, t) {
    return this.url.searchParams.append(e, `gt.${t}`), this;
  }
  /**
   * Match only rows where `column` is greater than or equal to `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  gte(e, t) {
    return this.url.searchParams.append(e, `gte.${t}`), this;
  }
  /**
   * Match only rows where `column` is less than `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  lt(e, t) {
    return this.url.searchParams.append(e, `lt.${t}`), this;
  }
  /**
   * Match only rows where `column` is less than or equal to `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  lte(e, t) {
    return this.url.searchParams.append(e, `lte.${t}`), this;
  }
  /**
   * Match only rows where `column` matches `pattern` case-sensitively.
   *
   * @param column - The column to filter on
   * @param pattern - The pattern to match with
   */
  like(e, t) {
    return this.url.searchParams.append(e, `like.${t}`), this;
  }
  /**
   * Match only rows where `column` matches all of `patterns` case-sensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  likeAllOf(e, t) {
    return this.url.searchParams.append(e, `like(all).{${t.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` matches any of `patterns` case-sensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  likeAnyOf(e, t) {
    return this.url.searchParams.append(e, `like(any).{${t.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` matches `pattern` case-insensitively.
   *
   * @param column - The column to filter on
   * @param pattern - The pattern to match with
   */
  ilike(e, t) {
    return this.url.searchParams.append(e, `ilike.${t}`), this;
  }
  /**
   * Match only rows where `column` matches all of `patterns` case-insensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  ilikeAllOf(e, t) {
    return this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` matches any of `patterns` case-insensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  ilikeAnyOf(e, t) {
    return this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` IS `value`.
   *
   * For non-boolean columns, this is only relevant for checking if the value of
   * `column` is NULL by setting `value` to `null`.
   *
   * For boolean columns, you can also set `value` to `true` or `false` and it
   * will behave the same way as `.eq()`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  is(e, t) {
    return this.url.searchParams.append(e, `is.${t}`), this;
  }
  /**
   * Match only rows where `column` is included in the `values` array.
   *
   * @param column - The column to filter on
   * @param values - The values array to filter with
   */
  in(e, t) {
    const s = Array.from(new Set(t)).map((r) => typeof r == "string" && new RegExp("[,()]").test(r) ? `"${r}"` : `${r}`).join(",");
    return this.url.searchParams.append(e, `in.(${s})`), this;
  }
  /**
   * Only relevant for jsonb, array, and range columns. Match only rows where
   * `column` contains every element appearing in `value`.
   *
   * @param column - The jsonb, array, or range column to filter on
   * @param value - The jsonb, array, or range value to filter with
   */
  contains(e, t) {
    return typeof t == "string" ? this.url.searchParams.append(e, `cs.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`) : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`), this;
  }
  /**
   * Only relevant for jsonb, array, and range columns. Match only rows where
   * every element appearing in `column` is contained by `value`.
   *
   * @param column - The jsonb, array, or range column to filter on
   * @param value - The jsonb, array, or range value to filter with
   */
  containedBy(e, t) {
    return typeof t == "string" ? this.url.searchParams.append(e, `cd.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`) : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is greater than any element in `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeGt(e, t) {
    return this.url.searchParams.append(e, `sr.${t}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is either contained in `range` or greater than any element in
   * `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeGte(e, t) {
    return this.url.searchParams.append(e, `nxl.${t}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is less than any element in `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeLt(e, t) {
    return this.url.searchParams.append(e, `sl.${t}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is either contained in `range` or less than any element in
   * `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeLte(e, t) {
    return this.url.searchParams.append(e, `nxr.${t}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where `column` is
   * mutually exclusive to `range` and there can be no element between the two
   * ranges.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeAdjacent(e, t) {
    return this.url.searchParams.append(e, `adj.${t}`), this;
  }
  /**
   * Only relevant for array and range columns. Match only rows where
   * `column` and `value` have an element in common.
   *
   * @param column - The array or range column to filter on
   * @param value - The array or range value to filter with
   */
  overlaps(e, t) {
    return typeof t == "string" ? this.url.searchParams.append(e, `ov.${t}`) : this.url.searchParams.append(e, `ov.{${t.join(",")}}`), this;
  }
  /**
   * Only relevant for text and tsvector columns. Match only rows where
   * `column` matches the query string in `query`.
   *
   * @param column - The text or tsvector column to filter on
   * @param query - The query text to match with
   * @param options - Named parameters
   * @param options.config - The text search configuration to use
   * @param options.type - Change how the `query` text is interpreted
   */
  textSearch(e, t, { config: s, type: r } = {}) {
    let n = "";
    r === "plain" ? n = "pl" : r === "phrase" ? n = "ph" : r === "websearch" && (n = "w");
    const a = s === void 0 ? "" : `(${s})`;
    return this.url.searchParams.append(e, `${n}fts${a}.${t}`), this;
  }
  /**
   * Match only rows where each column in `query` keys is equal to its
   * associated value. Shorthand for multiple `.eq()`s.
   *
   * @param query - The object to filter with, with column names as keys mapped
   * to their filter values
   */
  match(e) {
    return Object.entries(e).forEach(([t, s]) => {
      this.url.searchParams.append(t, `eq.${s}`);
    }), this;
  }
  /**
   * Match only rows which doesn't satisfy the filter.
   *
   * Unlike most filters, `opearator` and `value` are used as-is and need to
   * follow [PostgREST
   * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
   * to make sure they are properly sanitized.
   *
   * @param column - The column to filter on
   * @param operator - The operator to be negated to filter with, following
   * PostgREST syntax
   * @param value - The value to filter with, following PostgREST syntax
   */
  not(e, t, s) {
    return this.url.searchParams.append(e, `not.${t}.${s}`), this;
  }
  /**
   * Match only rows which satisfy at least one of the filters.
   *
   * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
   * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
   * to make sure it's properly sanitized.
   *
   * It's currently not possible to do an `.or()` filter across multiple tables.
   *
   * @param filters - The filters to use, following PostgREST syntax
   * @param options - Named parameters
   * @param options.referencedTable - Set this to filter on referenced tables
   * instead of the parent table
   * @param options.foreignTable - Deprecated, use `referencedTable` instead
   */
  or(e, { foreignTable: t, referencedTable: s = t } = {}) {
    const r = s ? `${s}.or` : "or";
    return this.url.searchParams.append(r, `(${e})`), this;
  }
  /**
   * Match only rows which satisfy the filter. This is an escape hatch - you
   * should use the specific filter methods wherever possible.
   *
   * Unlike most filters, `opearator` and `value` are used as-is and need to
   * follow [PostgREST
   * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
   * to make sure they are properly sanitized.
   *
   * @param column - The column to filter on
   * @param operator - The operator to filter with, following PostgREST syntax
   * @param value - The value to filter with, following PostgREST syntax
   */
  filter(e, t, s) {
    return this.url.searchParams.append(e, `${t}.${s}`), this;
  }
};
ue.default = js;
var Ps = x && x.__importDefault || function(i) {
  return i && i.__esModule ? i : { default: i };
};
Object.defineProperty(ke, "__esModule", { value: !0 });
const ne = Ps(ue);
let Rs = class {
  constructor(e, { headers: t = {}, schema: s, fetch: r }) {
    this.url = e, this.headers = t, this.schema = s, this.fetch = r;
  }
  /**
   * Perform a SELECT query on the table or view.
   *
   * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
   *
   * @param options - Named parameters
   *
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   *
   * @param options.count - Count algorithm to use to count rows in the table or view.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  select(e, { head: t = !1, count: s } = {}) {
    const r = t ? "HEAD" : "GET";
    let n = !1;
    const a = (e ?? "*").split("").map((o) => /\s/.test(o) && !n ? "" : (o === '"' && (n = !n), o)).join("");
    return this.url.searchParams.set("select", a), s && (this.headers.Prefer = `count=${s}`), new ne.default({
      method: r,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
  /**
   * Perform an INSERT into the table or view.
   *
   * By default, inserted rows are not returned. To return it, chain the call
   * with `.select()`.
   *
   * @param values - The values to insert. Pass an object to insert a single row
   * or an array to insert multiple rows.
   *
   * @param options - Named parameters
   *
   * @param options.count - Count algorithm to use to count inserted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   *
   * @param options.defaultToNull - Make missing fields default to `null`.
   * Otherwise, use the default value for the column. Only applies for bulk
   * inserts.
   */
  insert(e, { count: t, defaultToNull: s = !0 } = {}) {
    const r = "POST", n = [];
    if (this.headers.Prefer && n.push(this.headers.Prefer), t && n.push(`count=${t}`), s || n.push("missing=default"), this.headers.Prefer = n.join(","), Array.isArray(e)) {
      const a = e.reduce((o, l) => o.concat(Object.keys(l)), []);
      if (a.length > 0) {
        const o = [...new Set(a)].map((l) => `"${l}"`);
        this.url.searchParams.set("columns", o.join(","));
      }
    }
    return new ne.default({
      method: r,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: e,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
  /**
   * Perform an UPSERT on the table or view. Depending on the column(s) passed
   * to `onConflict`, `.upsert()` allows you to perform the equivalent of
   * `.insert()` if a row with the corresponding `onConflict` columns doesn't
   * exist, or if it does exist, perform an alternative action depending on
   * `ignoreDuplicates`.
   *
   * By default, upserted rows are not returned. To return it, chain the call
   * with `.select()`.
   *
   * @param values - The values to upsert with. Pass an object to upsert a
   * single row or an array to upsert multiple rows.
   *
   * @param options - Named parameters
   *
   * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
   * duplicate rows are determined. Two rows are duplicates if all the
   * `onConflict` columns are equal.
   *
   * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
   * `false`, duplicate rows are merged with existing rows.
   *
   * @param options.count - Count algorithm to use to count upserted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   *
   * @param options.defaultToNull - Make missing fields default to `null`.
   * Otherwise, use the default value for the column. This only applies when
   * inserting new rows, not when merging with existing rows under
   * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
   */
  upsert(e, { onConflict: t, ignoreDuplicates: s = !1, count: r, defaultToNull: n = !0 } = {}) {
    const a = "POST", o = [`resolution=${s ? "ignore" : "merge"}-duplicates`];
    if (t !== void 0 && this.url.searchParams.set("on_conflict", t), this.headers.Prefer && o.push(this.headers.Prefer), r && o.push(`count=${r}`), n || o.push("missing=default"), this.headers.Prefer = o.join(","), Array.isArray(e)) {
      const l = e.reduce((h, c) => h.concat(Object.keys(c)), []);
      if (l.length > 0) {
        const h = [...new Set(l)].map((c) => `"${c}"`);
        this.url.searchParams.set("columns", h.join(","));
      }
    }
    return new ne.default({
      method: a,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: e,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
  /**
   * Perform an UPDATE on the table or view.
   *
   * By default, updated rows are not returned. To return it, chain the call
   * with `.select()` after filters.
   *
   * @param values - The values to update with
   *
   * @param options - Named parameters
   *
   * @param options.count - Count algorithm to use to count updated rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  update(e, { count: t } = {}) {
    const s = "PATCH", r = [];
    return this.headers.Prefer && r.push(this.headers.Prefer), t && r.push(`count=${t}`), this.headers.Prefer = r.join(","), new ne.default({
      method: s,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: e,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
  /**
   * Perform a DELETE on the table or view.
   *
   * By default, deleted rows are not returned. To return it, chain the call
   * with `.select()` after filters.
   *
   * @param options - Named parameters
   *
   * @param options.count - Count algorithm to use to count deleted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  delete({ count: e } = {}) {
    const t = "DELETE", s = [];
    return e && s.push(`count=${e}`), this.headers.Prefer && s.unshift(this.headers.Prefer), this.headers.Prefer = s.join(","), new ne.default({
      method: t,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
};
ke.default = Rs;
var Ce = {}, Oe = {};
Object.defineProperty(Oe, "__esModule", { value: !0 });
Oe.version = void 0;
Oe.version = "0.0.0-automated";
Object.defineProperty(Ce, "__esModule", { value: !0 });
Ce.DEFAULT_HEADERS = void 0;
const Is = Oe;
Ce.DEFAULT_HEADERS = { "X-Client-Info": `postgrest-js/${Is.version}` };
var St = x && x.__importDefault || function(i) {
  return i && i.__esModule ? i : { default: i };
};
Object.defineProperty(He, "__esModule", { value: !0 });
const $s = St(ke), xs = St(ue), Ls = Ce;
let Ds = class Tt {
  // TODO: Add back shouldThrowOnError once we figure out the typings
  /**
   * Creates a PostgREST client.
   *
   * @param url - URL of the PostgREST endpoint
   * @param options - Named parameters
   * @param options.headers - Custom headers
   * @param options.schema - Postgres schema to switch to
   * @param options.fetch - Custom fetch
   */
  constructor(e, { headers: t = {}, schema: s, fetch: r } = {}) {
    this.url = e, this.headers = Object.assign(Object.assign({}, Ls.DEFAULT_HEADERS), t), this.schemaName = s, this.fetch = r;
  }
  /**
   * Perform a query on a table or a view.
   *
   * @param relation - The table or view name to query
   */
  from(e) {
    const t = new URL(`${this.url}/${e}`);
    return new $s.default(t, {
      headers: Object.assign({}, this.headers),
      schema: this.schemaName,
      fetch: this.fetch
    });
  }
  /**
   * Select a schema to query or perform an function (rpc) call.
   *
   * The schema needs to be on the list of exposed schemas inside Supabase.
   *
   * @param schema - The schema to query
   */
  schema(e) {
    return new Tt(this.url, {
      headers: this.headers,
      schema: e,
      fetch: this.fetch
    });
  }
  /**
   * Perform a function call.
   *
   * @param fn - The function name to call
   * @param args - The arguments to pass to the function call
   * @param options - Named parameters
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   * @param options.get - When set to `true`, the function will be called with
   * read-only access mode.
   * @param options.count - Count algorithm to use to count rows returned by the
   * function. Only applicable for [set-returning
   * functions](https://www.postgresql.org/docs/current/functions-srf.html).
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  rpc(e, t = {}, { head: s = !1, get: r = !1, count: n } = {}) {
    let a;
    const o = new URL(`${this.url}/rpc/${e}`);
    let l;
    s || r ? (a = s ? "HEAD" : "GET", Object.entries(t).filter(([c, u]) => u !== void 0).map(([c, u]) => [c, Array.isArray(u) ? `{${u.join(",")}}` : `${u}`]).forEach(([c, u]) => {
      o.searchParams.append(c, u);
    })) : (a = "POST", l = t);
    const h = Object.assign({}, this.headers);
    return n && (h.Prefer = `count=${n}`), new xs.default({
      method: a,
      url: o,
      headers: h,
      schema: this.schemaName,
      body: l,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
};
He.default = Ds;
var ie = x && x.__importDefault || function(i) {
  return i && i.__esModule ? i : { default: i };
};
Object.defineProperty($, "__esModule", { value: !0 });
$.PostgrestError = $.PostgrestBuilder = $.PostgrestTransformBuilder = $.PostgrestFilterBuilder = $.PostgrestQueryBuilder = $.PostgrestClient = void 0;
const Et = ie(He);
$.PostgrestClient = Et.default;
const Ct = ie(ke);
$.PostgrestQueryBuilder = Ct.default;
const Ot = ie(ue);
$.PostgrestFilterBuilder = Ot.default;
const At = ie(Se);
$.PostgrestTransformBuilder = At.default;
const jt = ie(Te);
$.PostgrestBuilder = jt.default;
const Pt = ie(Ee);
$.PostgrestError = Pt.default;
var Us = $.default = {
  PostgrestClient: Et.default,
  PostgrestQueryBuilder: Ct.default,
  PostgrestFilterBuilder: Ot.default,
  PostgrestTransformBuilder: At.default,
  PostgrestBuilder: jt.default,
  PostgrestError: Pt.default
};
const {
  PostgrestClient: Ns,
  PostgrestQueryBuilder: Li,
  PostgrestFilterBuilder: Di,
  PostgrestTransformBuilder: Ui,
  PostgrestBuilder: Ni,
  PostgrestError: Mi
} = Us;
let Ue;
typeof window > "u" ? Ue = require("ws") : Ue = window.WebSocket;
const Ms = Ue, Bs = "2.11.10", qs = { "X-Client-Info": `realtime-js/${Bs}` }, Gs = "1.0.0", Rt = 1e4, Fs = 1e3;
var te;
(function(i) {
  i[i.connecting = 0] = "connecting", i[i.open = 1] = "open", i[i.closing = 2] = "closing", i[i.closed = 3] = "closed";
})(te || (te = {}));
var R;
(function(i) {
  i.closed = "closed", i.errored = "errored", i.joined = "joined", i.joining = "joining", i.leaving = "leaving";
})(R || (R = {}));
var D;
(function(i) {
  i.close = "phx_close", i.error = "phx_error", i.join = "phx_join", i.reply = "phx_reply", i.leave = "phx_leave", i.access_token = "access_token";
})(D || (D = {}));
var Ne;
(function(i) {
  i.websocket = "websocket";
})(Ne || (Ne = {}));
var J;
(function(i) {
  i.Connecting = "connecting", i.Open = "open", i.Closing = "closing", i.Closed = "closed";
})(J || (J = {}));
class zs {
  constructor() {
    this.HEADER_LENGTH = 1;
  }
  decode(e, t) {
    return e.constructor === ArrayBuffer ? t(this._binaryDecode(e)) : t(typeof e == "string" ? JSON.parse(e) : {});
  }
  _binaryDecode(e) {
    const t = new DataView(e), s = new TextDecoder();
    return this._decodeBroadcast(e, t, s);
  }
  _decodeBroadcast(e, t, s) {
    const r = t.getUint8(1), n = t.getUint8(2);
    let a = this.HEADER_LENGTH + 2;
    const o = s.decode(e.slice(a, a + r));
    a = a + r;
    const l = s.decode(e.slice(a, a + n));
    a = a + n;
    const h = JSON.parse(s.decode(e.slice(a, e.byteLength)));
    return { ref: null, topic: o, event: l, payload: h };
  }
}
class It {
  constructor(e, t) {
    this.callback = e, this.timerCalc = t, this.timer = void 0, this.tries = 0, this.callback = e, this.timerCalc = t;
  }
  reset() {
    this.tries = 0, clearTimeout(this.timer);
  }
  // Cancels any previous scheduleTimeout and schedules callback
  scheduleTimeout() {
    clearTimeout(this.timer), this.timer = setTimeout(() => {
      this.tries = this.tries + 1, this.callback();
    }, this.timerCalc(this.tries + 1));
  }
}
var S;
(function(i) {
  i.abstime = "abstime", i.bool = "bool", i.date = "date", i.daterange = "daterange", i.float4 = "float4", i.float8 = "float8", i.int2 = "int2", i.int4 = "int4", i.int4range = "int4range", i.int8 = "int8", i.int8range = "int8range", i.json = "json", i.jsonb = "jsonb", i.money = "money", i.numeric = "numeric", i.oid = "oid", i.reltime = "reltime", i.text = "text", i.time = "time", i.timestamp = "timestamp", i.timestamptz = "timestamptz", i.timetz = "timetz", i.tsrange = "tsrange", i.tstzrange = "tstzrange";
})(S || (S = {}));
const tt = (i, e, t = {}) => {
  var s;
  const r = (s = t.skipTypes) !== null && s !== void 0 ? s : [];
  return Object.keys(e).reduce((n, a) => (n[a] = Ws(a, i, e, r), n), {});
}, Ws = (i, e, t, s) => {
  const r = e.find((o) => o.name === i), n = r == null ? void 0 : r.type, a = t[i];
  return n && !s.includes(n) ? $t(n, a) : Me(a);
}, $t = (i, e) => {
  if (i.charAt(0) === "_") {
    const t = i.slice(1, i.length);
    return Vs(e, t);
  }
  switch (i) {
    case S.bool:
      return Hs(e);
    case S.float4:
    case S.float8:
    case S.int2:
    case S.int4:
    case S.int8:
    case S.numeric:
    case S.oid:
      return Ks(e);
    case S.json:
    case S.jsonb:
      return Js(e);
    case S.timestamp:
      return Ys(e);
    case S.abstime:
    case S.date:
    case S.daterange:
    case S.int4range:
    case S.int8range:
    case S.money:
    case S.reltime:
    case S.text:
    case S.time:
    case S.timestamptz:
    case S.timetz:
    case S.tsrange:
    case S.tstzrange:
      return Me(e);
    default:
      return Me(e);
  }
}, Me = (i) => i, Hs = (i) => {
  switch (i) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return i;
  }
}, Ks = (i) => {
  if (typeof i == "string") {
    const e = parseFloat(i);
    if (!Number.isNaN(e))
      return e;
  }
  return i;
}, Js = (i) => {
  if (typeof i == "string")
    try {
      return JSON.parse(i);
    } catch (e) {
      return console.log(`JSON parse error: ${e}`), i;
    }
  return i;
}, Vs = (i, e) => {
  if (typeof i != "string")
    return i;
  const t = i.length - 1, s = i[t];
  if (i[0] === "{" && s === "}") {
    let n;
    const a = i.slice(1, t);
    try {
      n = JSON.parse("[" + a + "]");
    } catch {
      n = a ? a.split(",") : [];
    }
    return n.map((o) => $t(e, o));
  }
  return i;
}, Ys = (i) => typeof i == "string" ? i.replace(" ", "T") : i, xt = (i) => {
  let e = i;
  return e = e.replace(/^ws/i, "http"), e = e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, ""), e.replace(/\/+$/, "");
};
class Pe {
  /**
   * Initializes the Push
   *
   * @param channel The Channel
   * @param event The event, for example `"phx_join"`
   * @param payload The payload, for example `{user_id: 123}`
   * @param timeout The push timeout in milliseconds
   */
  constructor(e, t, s = {}, r = Rt) {
    this.channel = e, this.event = t, this.payload = s, this.timeout = r, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null;
  }
  resend(e) {
    this.timeout = e, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send();
  }
  send() {
    this._hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload,
      ref: this.ref,
      join_ref: this.channel._joinRef()
    }));
  }
  updatePayload(e) {
    this.payload = Object.assign(Object.assign({}, this.payload), e);
  }
  receive(e, t) {
    var s;
    return this._hasReceived(e) && t((s = this.receivedResp) === null || s === void 0 ? void 0 : s.response), this.recHooks.push({ status: e, callback: t }), this;
  }
  startTimeout() {
    if (this.timeoutTimer)
      return;
    this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref);
    const e = (t) => {
      this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = t, this._matchReceive(t);
    };
    this.channel._on(this.refEvent, {}, e), this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  trigger(e, t) {
    this.refEvent && this.channel._trigger(this.refEvent, { status: e, response: t });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0;
  }
  _matchReceive({ status: e, response: t }) {
    this.recHooks.filter((s) => s.status === e).forEach((s) => s.callback(t));
  }
  _hasReceived(e) {
    return this.receivedResp && this.receivedResp.status === e;
  }
}
var st;
(function(i) {
  i.SYNC = "sync", i.JOIN = "join", i.LEAVE = "leave";
})(st || (st = {}));
class oe {
  /**
   * Initializes the Presence.
   *
   * @param channel - The RealtimeChannel
   * @param opts - The options,
   *        for example `{events: {state: 'state', diff: 'diff'}}`
   */
  constructor(e, t) {
    this.channel = e, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.caller = {
      onJoin: () => {
      },
      onLeave: () => {
      },
      onSync: () => {
      }
    };
    const s = (t == null ? void 0 : t.events) || {
      state: "presence_state",
      diff: "presence_diff"
    };
    this.channel._on(s.state, {}, (r) => {
      const { onJoin: n, onLeave: a, onSync: o } = this.caller;
      this.joinRef = this.channel._joinRef(), this.state = oe.syncState(this.state, r, n, a), this.pendingDiffs.forEach((l) => {
        this.state = oe.syncDiff(this.state, l, n, a);
      }), this.pendingDiffs = [], o();
    }), this.channel._on(s.diff, {}, (r) => {
      const { onJoin: n, onLeave: a, onSync: o } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(r) : (this.state = oe.syncDiff(this.state, r, n, a), o());
    }), this.onJoin((r, n, a) => {
      this.channel._trigger("presence", {
        event: "join",
        key: r,
        currentPresences: n,
        newPresences: a
      });
    }), this.onLeave((r, n, a) => {
      this.channel._trigger("presence", {
        event: "leave",
        key: r,
        currentPresences: n,
        leftPresences: a
      });
    }), this.onSync(() => {
      this.channel._trigger("presence", { event: "sync" });
    });
  }
  /**
   * Used to sync the list of presences on the server with the
   * client's state.
   *
   * An optional `onJoin` and `onLeave` callback can be provided to
   * react to changes in the client's local presences across
   * disconnects and reconnects with the server.
   *
   * @internal
   */
  static syncState(e, t, s, r) {
    const n = this.cloneDeep(e), a = this.transformState(t), o = {}, l = {};
    return this.map(n, (h, c) => {
      a[h] || (l[h] = c);
    }), this.map(a, (h, c) => {
      const u = n[h];
      if (u) {
        const d = c.map((p) => p.presence_ref), f = u.map((p) => p.presence_ref), _ = c.filter((p) => f.indexOf(p.presence_ref) < 0), b = u.filter((p) => d.indexOf(p.presence_ref) < 0);
        _.length > 0 && (o[h] = _), b.length > 0 && (l[h] = b);
      } else
        o[h] = c;
    }), this.syncDiff(n, { joins: o, leaves: l }, s, r);
  }
  /**
   * Used to sync a diff of presence join and leave events from the
   * server, as they happen.
   *
   * Like `syncState`, `syncDiff` accepts optional `onJoin` and
   * `onLeave` callbacks to react to a user joining or leaving from a
   * device.
   *
   * @internal
   */
  static syncDiff(e, t, s, r) {
    const { joins: n, leaves: a } = {
      joins: this.transformState(t.joins),
      leaves: this.transformState(t.leaves)
    };
    return s || (s = () => {
    }), r || (r = () => {
    }), this.map(n, (o, l) => {
      var h;
      const c = (h = e[o]) !== null && h !== void 0 ? h : [];
      if (e[o] = this.cloneDeep(l), c.length > 0) {
        const u = e[o].map((f) => f.presence_ref), d = c.filter((f) => u.indexOf(f.presence_ref) < 0);
        e[o].unshift(...d);
      }
      s(o, c, l);
    }), this.map(a, (o, l) => {
      let h = e[o];
      if (!h)
        return;
      const c = l.map((u) => u.presence_ref);
      h = h.filter((u) => c.indexOf(u.presence_ref) < 0), e[o] = h, r(o, h, l), h.length === 0 && delete e[o];
    }), e;
  }
  /** @internal */
  static map(e, t) {
    return Object.getOwnPropertyNames(e).map((s) => t(s, e[s]));
  }
  /**
   * Remove 'metas' key
   * Change 'phx_ref' to 'presence_ref'
   * Remove 'phx_ref' and 'phx_ref_prev'
   *
   * @example
   * // returns {
   *  abc123: [
   *    { presence_ref: '2', user_id: 1 },
   *    { presence_ref: '3', user_id: 2 }
   *  ]
   * }
   * RealtimePresence.transformState({
   *  abc123: {
   *    metas: [
   *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
   *      { phx_ref: '3', user_id: 2 }
   *    ]
   *  }
   * })
   *
   * @internal
   */
  static transformState(e) {
    return e = this.cloneDeep(e), Object.getOwnPropertyNames(e).reduce((t, s) => {
      const r = e[s];
      return "metas" in r ? t[s] = r.metas.map((n) => (n.presence_ref = n.phx_ref, delete n.phx_ref, delete n.phx_ref_prev, n)) : t[s] = r, t;
    }, {});
  }
  /** @internal */
  static cloneDeep(e) {
    return JSON.parse(JSON.stringify(e));
  }
  /** @internal */
  onJoin(e) {
    this.caller.onJoin = e;
  }
  /** @internal */
  onLeave(e) {
    this.caller.onLeave = e;
  }
  /** @internal */
  onSync(e) {
    this.caller.onSync = e;
  }
  /** @internal */
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var rt;
(function(i) {
  i.ALL = "*", i.INSERT = "INSERT", i.UPDATE = "UPDATE", i.DELETE = "DELETE";
})(rt || (rt = {}));
var it;
(function(i) {
  i.BROADCAST = "broadcast", i.PRESENCE = "presence", i.POSTGRES_CHANGES = "postgres_changes", i.SYSTEM = "system";
})(it || (it = {}));
var M;
(function(i) {
  i.SUBSCRIBED = "SUBSCRIBED", i.TIMED_OUT = "TIMED_OUT", i.CLOSED = "CLOSED", i.CHANNEL_ERROR = "CHANNEL_ERROR";
})(M || (M = {}));
class Ke {
  constructor(e, t = { config: {} }, s) {
    this.topic = e, this.params = t, this.socket = s, this.bindings = {}, this.state = R.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = e.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "" },
      private: !1
    }, t.config), this.timeout = this.socket.timeout, this.joinPush = new Pe(this, D.join, this.params, this.timeout), this.rejoinTimer = new It(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
      this.state = R.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((r) => r.send()), this.pushBuffer = [];
    }), this._onClose(() => {
      this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = R.closed, this.socket._remove(this);
    }), this._onError((r) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, r), this.state = R.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("timeout", () => {
      this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = R.errored, this.rejoinTimer.scheduleTimeout());
    }), this._on(D.reply, {}, (r, n) => {
      this._trigger(this._replyEventName(n), r);
    }), this.presence = new oe(this), this.broadcastEndpointURL = xt(this.socket.endPoint) + "/api/broadcast", this.private = this.params.config.private || !1;
  }
  /** Subscribe registers your client with the server */
  subscribe(e, t = this.timeout) {
    var s, r;
    if (this.socket.isConnected() || this.socket.connect(), this.joinedOnce)
      throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
    {
      const { config: { broadcast: n, presence: a, private: o } } = this.params;
      this._onError((c) => e == null ? void 0 : e(M.CHANNEL_ERROR, c)), this._onClose(() => e == null ? void 0 : e(M.CLOSED));
      const l = {}, h = {
        broadcast: n,
        presence: a,
        postgres_changes: (r = (s = this.bindings.postgres_changes) === null || s === void 0 ? void 0 : s.map((c) => c.filter)) !== null && r !== void 0 ? r : [],
        private: o
      };
      this.socket.accessTokenValue && (l.access_token = this.socket.accessTokenValue), this.updateJoinPayload(Object.assign({ config: h }, l)), this.joinedOnce = !0, this._rejoin(t), this.joinPush.receive("ok", async ({ postgres_changes: c }) => {
        var u;
        if (this.socket.setAuth(), c === void 0) {
          e == null || e(M.SUBSCRIBED);
          return;
        } else {
          const d = this.bindings.postgres_changes, f = (u = d == null ? void 0 : d.length) !== null && u !== void 0 ? u : 0, _ = [];
          for (let b = 0; b < f; b++) {
            const p = d[b], { filter: { event: T, schema: j, table: g, filter: k } } = p, O = c && c[b];
            if (O && O.event === T && O.schema === j && O.table === g && O.filter === k)
              _.push(Object.assign(Object.assign({}, p), { id: O.id }));
            else {
              this.unsubscribe(), this.state = R.errored, e == null || e(M.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
              return;
            }
          }
          this.bindings.postgres_changes = _, e && e(M.SUBSCRIBED);
          return;
        }
      }).receive("error", (c) => {
        this.state = R.errored, e == null || e(M.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(c).join(", ") || "error")));
      }).receive("timeout", () => {
        e == null || e(M.TIMED_OUT);
      });
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(e, t = {}) {
    return await this.send({
      type: "presence",
      event: "track",
      payload: e
    }, t.timeout || this.timeout);
  }
  async untrack(e = {}) {
    return await this.send({
      type: "presence",
      event: "untrack"
    }, e);
  }
  on(e, t, s) {
    return this._on(e, t, s);
  }
  /**
   * Sends a message into the channel.
   *
   * @param args Arguments to send to channel
   * @param args.type The type of event to send
   * @param args.event The name of the event being sent
   * @param args.payload Payload to be sent
   * @param opts Options to be used during the send process
   */
  async send(e, t = {}) {
    var s, r;
    if (!this._canPush() && e.type === "broadcast") {
      const { event: n, payload: a } = e, l = {
        method: "POST",
        headers: {
          Authorization: this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "",
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: n,
              payload: a,
              private: this.private
            }
          ]
        })
      };
      try {
        const h = await this._fetchWithTimeout(this.broadcastEndpointURL, l, (s = t.timeout) !== null && s !== void 0 ? s : this.timeout);
        return await ((r = h.body) === null || r === void 0 ? void 0 : r.cancel()), h.ok ? "ok" : "error";
      } catch (h) {
        return h.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((n) => {
        var a, o, l;
        const h = this._push(e.type, e, t.timeout || this.timeout);
        e.type === "broadcast" && !(!((l = (o = (a = this.params) === null || a === void 0 ? void 0 : a.config) === null || o === void 0 ? void 0 : o.broadcast) === null || l === void 0) && l.ack) && n("ok"), h.receive("ok", () => n("ok")), h.receive("error", () => n("error")), h.receive("timeout", () => n("timed out"));
      });
  }
  updateJoinPayload(e) {
    this.joinPush.updatePayload(e);
  }
  /**
   * Leaves the channel.
   *
   * Unsubscribes from server events, and instructs channel to terminate on server.
   * Triggers onClose() hooks.
   *
   * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
   * channel.unsubscribe().receive("ok", () => alert("left!") )
   */
  unsubscribe(e = this.timeout) {
    this.state = R.leaving;
    const t = () => {
      this.socket.log("channel", `leave ${this.topic}`), this._trigger(D.close, "leave", this._joinRef());
    };
    return this.joinPush.destroy(), new Promise((s) => {
      const r = new Pe(this, D.leave, {}, e);
      r.receive("ok", () => {
        t(), s("ok");
      }).receive("timeout", () => {
        t(), s("timed out");
      }).receive("error", () => {
        s("error");
      }), r.send(), this._canPush() || r.trigger("ok", {});
    });
  }
  /**
   * Teardown the channel.
   *
   * Destroys and stops related timers.
   */
  teardown() {
    this.pushBuffer.forEach((e) => e.destroy()), this.rejoinTimer && clearTimeout(this.rejoinTimer.timer), this.joinPush.destroy();
  }
  /** @internal */
  async _fetchWithTimeout(e, t, s) {
    const r = new AbortController(), n = setTimeout(() => r.abort(), s), a = await this.socket.fetch(e, Object.assign(Object.assign({}, t), { signal: r.signal }));
    return clearTimeout(n), a;
  }
  /** @internal */
  _push(e, t, s = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let r = new Pe(this, e, t, s);
    return this._canPush() ? r.send() : (r.startTimeout(), this.pushBuffer.push(r)), r;
  }
  /**
   * Overridable message hook
   *
   * Receives all events for specialized message handling before dispatching to the channel callbacks.
   * Must return the payload, modified or unmodified.
   *
   * @internal
   */
  _onMessage(e, t, s) {
    return t;
  }
  /** @internal */
  _isMember(e) {
    return this.topic === e;
  }
  /** @internal */
  _joinRef() {
    return this.joinPush.ref;
  }
  /** @internal */
  _trigger(e, t, s) {
    var r, n;
    const a = e.toLocaleLowerCase(), { close: o, error: l, leave: h, join: c } = D;
    if (s && [o, l, h, c].indexOf(a) >= 0 && s !== this._joinRef())
      return;
    let d = this._onMessage(a, t, s);
    if (t && !d)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(a) ? (r = this.bindings.postgres_changes) === null || r === void 0 || r.filter((f) => {
      var _, b, p;
      return ((_ = f.filter) === null || _ === void 0 ? void 0 : _.event) === "*" || ((p = (b = f.filter) === null || b === void 0 ? void 0 : b.event) === null || p === void 0 ? void 0 : p.toLocaleLowerCase()) === a;
    }).map((f) => f.callback(d, s)) : (n = this.bindings[a]) === null || n === void 0 || n.filter((f) => {
      var _, b, p, T, j, g;
      if (["broadcast", "presence", "postgres_changes"].includes(a))
        if ("id" in f) {
          const k = f.id, O = (_ = f.filter) === null || _ === void 0 ? void 0 : _.event;
          return k && ((b = t.ids) === null || b === void 0 ? void 0 : b.includes(k)) && (O === "*" || (O == null ? void 0 : O.toLocaleLowerCase()) === ((p = t.data) === null || p === void 0 ? void 0 : p.type.toLocaleLowerCase()));
        } else {
          const k = (j = (T = f == null ? void 0 : f.filter) === null || T === void 0 ? void 0 : T.event) === null || j === void 0 ? void 0 : j.toLocaleLowerCase();
          return k === "*" || k === ((g = t == null ? void 0 : t.event) === null || g === void 0 ? void 0 : g.toLocaleLowerCase());
        }
      else
        return f.type.toLocaleLowerCase() === a;
    }).map((f) => {
      if (typeof d == "object" && "ids" in d) {
        const _ = d.data, { schema: b, table: p, commit_timestamp: T, type: j, errors: g } = _;
        d = Object.assign(Object.assign({}, {
          schema: b,
          table: p,
          commit_timestamp: T,
          eventType: j,
          new: {},
          old: {},
          errors: g
        }), this._getPayloadRecords(_));
      }
      f.callback(d, s);
    });
  }
  /** @internal */
  _isClosed() {
    return this.state === R.closed;
  }
  /** @internal */
  _isJoined() {
    return this.state === R.joined;
  }
  /** @internal */
  _isJoining() {
    return this.state === R.joining;
  }
  /** @internal */
  _isLeaving() {
    return this.state === R.leaving;
  }
  /** @internal */
  _replyEventName(e) {
    return `chan_reply_${e}`;
  }
  /** @internal */
  _on(e, t, s) {
    const r = e.toLocaleLowerCase(), n = {
      type: r,
      filter: t,
      callback: s
    };
    return this.bindings[r] ? this.bindings[r].push(n) : this.bindings[r] = [n], this;
  }
  /** @internal */
  _off(e, t) {
    const s = e.toLocaleLowerCase();
    return this.bindings[s] = this.bindings[s].filter((r) => {
      var n;
      return !(((n = r.type) === null || n === void 0 ? void 0 : n.toLocaleLowerCase()) === s && Ke.isEqual(r.filter, t));
    }), this;
  }
  /** @internal */
  static isEqual(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
      return !1;
    for (const s in e)
      if (e[s] !== t[s])
        return !1;
    return !0;
  }
  /** @internal */
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin();
  }
  /**
   * Registers a callback that will be executed when the channel closes.
   *
   * @internal
   */
  _onClose(e) {
    this._on(D.close, {}, e);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(e) {
    this._on(D.error, {}, (t) => e(t));
  }
  /**
   * Returns `true` if the socket is connected and the channel has been joined.
   *
   * @internal
   */
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  /** @internal */
  _rejoin(e = this.timeout) {
    this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = R.joining, this.joinPush.resend(e));
  }
  /** @internal */
  _getPayloadRecords(e) {
    const t = {
      new: {},
      old: {}
    };
    return (e.type === "INSERT" || e.type === "UPDATE") && (t.new = tt(e.columns, e.record)), (e.type === "UPDATE" || e.type === "DELETE") && (t.old = tt(e.columns, e.old_record)), t;
  }
}
const nt = () => {
}, Qs = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class Xs {
  /**
   * Initializes the Socket.
   *
   * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
   * @param httpEndpoint The string HTTP endpoint, ie, "https://example.com", "/" (inherited host & protocol)
   * @param options.transport The Websocket Transport, for example WebSocket. This can be a custom implementation
   * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
   * @param options.params The optional params to pass when connecting.
   * @param options.headers The optional headers to pass when connecting.
   * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
   * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
   * @param options.logLevel Sets the log level for Realtime
   * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
   * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
   * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
   * @param options.worker Use Web Worker to set a side flow. Defaults to false.
   * @param options.workerUrl The URL of the worker script. Defaults to https://realtime.supabase.com/worker.js that includes a heartbeat event call to keep the connection alive.
   */
  constructor(e, t) {
    var s;
    this.accessTokenValue = null, this.apiKey = null, this.channels = new Array(), this.endPoint = "", this.httpEndpoint = "", this.headers = qs, this.params = {}, this.timeout = Rt, this.heartbeatIntervalMs = 25e3, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.heartbeatCallback = nt, this.ref = 0, this.logger = nt, this.conn = null, this.sendBuffer = [], this.serializer = new zs(), this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    }, this.accessToken = null, this._resolveFetch = (n) => {
      let a;
      return n ? a = n : typeof fetch > "u" ? a = (...o) => Promise.resolve().then(() => re).then(({ default: l }) => l(...o)) : a = fetch, (...o) => a(...o);
    }, this.endPoint = `${e}/${Ne.websocket}`, this.httpEndpoint = xt(e), t != null && t.transport ? this.transport = t.transport : this.transport = null, t != null && t.params && (this.params = t.params), t != null && t.headers && (this.headers = Object.assign(Object.assign({}, this.headers), t.headers)), t != null && t.timeout && (this.timeout = t.timeout), t != null && t.logger && (this.logger = t.logger), (t != null && t.logLevel || t != null && t.log_level) && (this.logLevel = t.logLevel || t.log_level, this.params = Object.assign(Object.assign({}, this.params), { log_level: this.logLevel })), t != null && t.heartbeatIntervalMs && (this.heartbeatIntervalMs = t.heartbeatIntervalMs);
    const r = (s = t == null ? void 0 : t.params) === null || s === void 0 ? void 0 : s.apikey;
    if (r && (this.accessTokenValue = r, this.apiKey = r), this.reconnectAfterMs = t != null && t.reconnectAfterMs ? t.reconnectAfterMs : (n) => [1e3, 2e3, 5e3, 1e4][n - 1] || 1e4, this.encode = t != null && t.encode ? t.encode : (n, a) => a(JSON.stringify(n)), this.decode = t != null && t.decode ? t.decode : this.serializer.decode.bind(this.serializer), this.reconnectTimer = new It(async () => {
      this.disconnect(), this.connect();
    }, this.reconnectAfterMs), this.fetch = this._resolveFetch(t == null ? void 0 : t.fetch), t != null && t.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.worker = (t == null ? void 0 : t.worker) || !1, this.workerUrl = t == null ? void 0 : t.workerUrl;
    }
    this.accessToken = (t == null ? void 0 : t.accessToken) || null;
  }
  /**
   * Connects the socket, unless already connected.
   */
  connect() {
    if (!this.conn) {
      if (this.transport || (this.transport = Ms), this.transport) {
        typeof window < "u" && this.transport === window.WebSocket ? this.conn = new this.transport(this.endpointURL()) : this.conn = new this.transport(this.endpointURL(), void 0, {
          headers: this.headers
        }), this.setupConnection();
        return;
      }
      this.conn = new Zs(this.endpointURL(), void 0, {
        close: () => {
          this.conn = null;
        }
      });
    }
  }
  /**
   * Returns the URL of the websocket.
   * @returns string The URL of the websocket.
   */
  endpointURL() {
    return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: Gs }));
  }
  /**
   * Disconnects the socket.
   *
   * @param code A numeric status code to send on disconnect.
   * @param reason A custom reason for the disconnect.
   */
  disconnect(e, t) {
    this.conn && (this.conn.onclose = function() {
    }, e ? this.conn.close(e, t ?? "") : this.conn.close(), this.conn = null, this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.reset(), this.channels.forEach((s) => s.teardown()));
  }
  /**
   * Returns all created channels
   */
  getChannels() {
    return this.channels;
  }
  /**
   * Unsubscribes and removes a single channel
   * @param channel A RealtimeChannel instance
   */
  async removeChannel(e) {
    const t = await e.unsubscribe();
    return this.channels = this.channels.filter((s) => s._joinRef !== e._joinRef), this.channels.length === 0 && this.disconnect(), t;
  }
  /**
   * Unsubscribes and removes all channels
   */
  async removeAllChannels() {
    const e = await Promise.all(this.channels.map((t) => t.unsubscribe()));
    return this.channels = [], this.disconnect(), e;
  }
  /**
   * Logs the message.
   *
   * For customized logging, `this.logger` can be overridden.
   */
  log(e, t, s) {
    this.logger(e, t, s);
  }
  /**
   * Returns the current state of the socket.
   */
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case te.connecting:
        return J.Connecting;
      case te.open:
        return J.Open;
      case te.closing:
        return J.Closing;
      default:
        return J.Closed;
    }
  }
  /**
   * Returns `true` is the connection is open.
   */
  isConnected() {
    return this.connectionState() === J.Open;
  }
  channel(e, t = { config: {} }) {
    const s = `realtime:${e}`, r = this.getChannels().find((n) => n.topic === s);
    if (r)
      return r;
    {
      const n = new Ke(`realtime:${e}`, t, this);
      return this.channels.push(n), n;
    }
  }
  /**
   * Push out a message if the socket is connected.
   *
   * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
   */
  push(e) {
    const { topic: t, event: s, payload: r, ref: n } = e, a = () => {
      this.encode(e, (o) => {
        var l;
        (l = this.conn) === null || l === void 0 || l.send(o);
      });
    };
    this.log("push", `${t} ${s} (${n})`, r), this.isConnected() ? a() : this.sendBuffer.push(a);
  }
  /**
   * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
   *
   * If param is null it will use the `accessToken` callback function or the token set on the client.
   *
   * On callback used, it will set the value of the token internal to the client.
   *
   * @param token A JWT string to override the token set on the client.
   */
  async setAuth(e = null) {
    let t = e || this.accessToken && await this.accessToken() || this.accessTokenValue;
    this.accessTokenValue != t && (this.accessTokenValue = t, this.channels.forEach((s) => {
      t && s.updateJoinPayload({
        access_token: t,
        version: this.headers && this.headers["X-Client-Info"]
      }), s.joinedOnce && s._isJoined() && s._push(D.access_token, {
        access_token: t
      });
    }));
  }
  /**
   * Sends a heartbeat message if the socket is connected.
   */
  async sendHeartbeat() {
    var e;
    if (!this.isConnected()) {
      this.heartbeatCallback("disconnected");
      return;
    }
    if (this.pendingHeartbeatRef) {
      this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), this.heartbeatCallback("timeout"), (e = this.conn) === null || e === void 0 || e.close(Fs, "hearbeat timeout");
      return;
    }
    this.pendingHeartbeatRef = this._makeRef(), this.push({
      topic: "phoenix",
      event: "heartbeat",
      payload: {},
      ref: this.pendingHeartbeatRef
    }), this.heartbeatCallback("sent"), await this.setAuth();
  }
  onHeartbeat(e) {
    this.heartbeatCallback = e;
  }
  /**
   * Flushes send buffer
   */
  flushSendBuffer() {
    this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((e) => e()), this.sendBuffer = []);
  }
  /**
   * Return the next message ref, accounting for overflows
   *
   * @internal
   */
  _makeRef() {
    let e = this.ref + 1;
    return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString();
  }
  /**
   * Unsubscribe from channels with the specified topic.
   *
   * @internal
   */
  _leaveOpenTopic(e) {
    let t = this.channels.find((s) => s.topic === e && (s._isJoined() || s._isJoining()));
    t && (this.log("transport", `leaving duplicate topic "${e}"`), t.unsubscribe());
  }
  /**
   * Removes a subscription from the socket.
   *
   * @param channel An open subscription.
   *
   * @internal
   */
  _remove(e) {
    this.channels = this.channels.filter((t) => t.topic !== e.topic);
  }
  /**
   * Sets up connection handlers.
   *
   * @internal
   */
  setupConnection() {
    this.conn && (this.conn.binaryType = "arraybuffer", this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = (e) => this._onConnError(e), this.conn.onmessage = (e) => this._onConnMessage(e), this.conn.onclose = (e) => this._onConnClose(e));
  }
  /** @internal */
  _onConnMessage(e) {
    this.decode(e.data, (t) => {
      let { topic: s, event: r, payload: n, ref: a } = t;
      s === "phoenix" && r === "phx_reply" && this.heartbeatCallback(t.payload.status == "ok" ? "ok" : "error"), a && a === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null), this.log("receive", `${n.status || ""} ${s} ${r} ${a && "(" + a + ")" || ""}`, n), Array.from(this.channels).filter((o) => o._isMember(s)).forEach((o) => o._trigger(r, n, a)), this.stateChangeCallbacks.message.forEach((o) => o(t));
    });
  }
  /** @internal */
  _onConnOpen() {
    if (this.log("transport", `connected to ${this.endpointURL()}`), this.flushSendBuffer(), this.reconnectTimer.reset(), !this.worker)
      this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
    else {
      this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
      const e = this._workerObjectUrl(this.workerUrl);
      this.workerRef = new Worker(e), this.workerRef.onerror = (t) => {
        this.log("worker", "worker error", t.message), this.workerRef.terminate();
      }, this.workerRef.onmessage = (t) => {
        t.data.event === "keepAlive" && this.sendHeartbeat();
      }, this.workerRef.postMessage({
        event: "start",
        interval: this.heartbeatIntervalMs
      });
    }
    this.stateChangeCallbacks.open.forEach((e) => e());
  }
  /** @internal */
  _onConnClose(e) {
    this.log("transport", "close", e), this._triggerChanError(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach((t) => t(e));
  }
  /** @internal */
  _onConnError(e) {
    this.log("transport", e.message), this._triggerChanError(), this.stateChangeCallbacks.error.forEach((t) => t(e));
  }
  /** @internal */
  _triggerChanError() {
    this.channels.forEach((e) => e._trigger(D.error));
  }
  /** @internal */
  _appendParams(e, t) {
    if (Object.keys(t).length === 0)
      return e;
    const s = e.match(/\?/) ? "&" : "?", r = new URLSearchParams(t);
    return `${e}${s}${r}`;
  }
  _workerObjectUrl(e) {
    let t;
    if (e)
      t = e;
    else {
      const s = new Blob([Qs], { type: "application/javascript" });
      t = URL.createObjectURL(s);
    }
    return t;
  }
}
class Zs {
  constructor(e, t, s) {
    this.binaryType = "arraybuffer", this.onclose = () => {
    }, this.onerror = () => {
    }, this.onmessage = () => {
    }, this.onopen = () => {
    }, this.readyState = te.connecting, this.send = () => {
    }, this.url = null, this.url = e, this.close = s.close;
  }
}
class Je extends Error {
  constructor(e) {
    super(e), this.__isStorageError = !0, this.name = "StorageError";
  }
}
function A(i) {
  return typeof i == "object" && i !== null && "__isStorageError" in i;
}
class er extends Je {
  constructor(e, t) {
    super(e), this.name = "StorageApiError", this.status = t;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status
    };
  }
}
class Be extends Je {
  constructor(e, t) {
    super(e), this.name = "StorageUnknownError", this.originalError = t;
  }
}
var tr = globalThis && globalThis.__awaiter || function(i, e, t, s) {
  function r(n) {
    return n instanceof t ? n : new t(function(a) {
      a(n);
    });
  }
  return new (t || (t = Promise))(function(n, a) {
    function o(c) {
      try {
        h(s.next(c));
      } catch (u) {
        a(u);
      }
    }
    function l(c) {
      try {
        h(s.throw(c));
      } catch (u) {
        a(u);
      }
    }
    function h(c) {
      c.done ? n(c.value) : r(c.value).then(o, l);
    }
    h((s = s.apply(i, e || [])).next());
  });
};
const Lt = (i) => {
  let e;
  return i ? e = i : typeof fetch > "u" ? e = (...t) => Promise.resolve().then(() => re).then(({ default: s }) => s(...t)) : e = fetch, (...t) => e(...t);
}, sr = () => tr(void 0, void 0, void 0, function* () {
  return typeof Response > "u" ? (yield Promise.resolve().then(() => re)).Response : Response;
}), qe = (i) => {
  if (Array.isArray(i))
    return i.map((t) => qe(t));
  if (typeof i == "function" || i !== Object(i))
    return i;
  const e = {};
  return Object.entries(i).forEach(([t, s]) => {
    const r = t.replace(/([-_][a-z])/gi, (n) => n.toUpperCase().replace(/[-_]/g, ""));
    e[r] = qe(s);
  }), e;
};
var V = globalThis && globalThis.__awaiter || function(i, e, t, s) {
  function r(n) {
    return n instanceof t ? n : new t(function(a) {
      a(n);
    });
  }
  return new (t || (t = Promise))(function(n, a) {
    function o(c) {
      try {
        h(s.next(c));
      } catch (u) {
        a(u);
      }
    }
    function l(c) {
      try {
        h(s.throw(c));
      } catch (u) {
        a(u);
      }
    }
    function h(c) {
      c.done ? n(c.value) : r(c.value).then(o, l);
    }
    h((s = s.apply(i, e || [])).next());
  });
};
const Re = (i) => i.msg || i.message || i.error_description || i.error || JSON.stringify(i), rr = (i, e, t) => V(void 0, void 0, void 0, function* () {
  const s = yield sr();
  i instanceof s && !(t != null && t.noResolveJson) ? i.json().then((r) => {
    e(new er(Re(r), i.status || 500));
  }).catch((r) => {
    e(new Be(Re(r), r));
  }) : e(new Be(Re(i), i));
}), ir = (i, e, t, s) => {
  const r = { method: i, headers: (e == null ? void 0 : e.headers) || {} };
  return i === "GET" ? r : (r.headers = Object.assign({ "Content-Type": "application/json" }, e == null ? void 0 : e.headers), s && (r.body = JSON.stringify(s)), Object.assign(Object.assign({}, r), t));
};
function de(i, e, t, s, r, n) {
  return V(this, void 0, void 0, function* () {
    return new Promise((a, o) => {
      i(t, ir(e, s, r, n)).then((l) => {
        if (!l.ok)
          throw l;
        return s != null && s.noResolveJson ? l : l.json();
      }).then((l) => a(l)).catch((l) => rr(l, o, s));
    });
  });
}
function ve(i, e, t, s) {
  return V(this, void 0, void 0, function* () {
    return de(i, "GET", e, t, s);
  });
}
function q(i, e, t, s, r) {
  return V(this, void 0, void 0, function* () {
    return de(i, "POST", e, s, r, t);
  });
}
function nr(i, e, t, s, r) {
  return V(this, void 0, void 0, function* () {
    return de(i, "PUT", e, s, r, t);
  });
}
function ar(i, e, t, s) {
  return V(this, void 0, void 0, function* () {
    return de(i, "HEAD", e, Object.assign(Object.assign({}, t), { noResolveJson: !0 }), s);
  });
}
function Dt(i, e, t, s, r) {
  return V(this, void 0, void 0, function* () {
    return de(i, "DELETE", e, s, r, t);
  });
}
var I = globalThis && globalThis.__awaiter || function(i, e, t, s) {
  function r(n) {
    return n instanceof t ? n : new t(function(a) {
      a(n);
    });
  }
  return new (t || (t = Promise))(function(n, a) {
    function o(c) {
      try {
        h(s.next(c));
      } catch (u) {
        a(u);
      }
    }
    function l(c) {
      try {
        h(s.throw(c));
      } catch (u) {
        a(u);
      }
    }
    function h(c) {
      c.done ? n(c.value) : r(c.value).then(o, l);
    }
    h((s = s.apply(i, e || [])).next());
  });
};
const or = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
}, at = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: !1
};
class lr {
  constructor(e, t = {}, s, r) {
    this.url = e, this.headers = t, this.bucketId = s, this.fetch = Lt(r);
  }
  /**
   * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
   *
   * @param method HTTP method.
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadOrUpdate(e, t, s, r) {
    return I(this, void 0, void 0, function* () {
      try {
        let n;
        const a = Object.assign(Object.assign({}, at), r);
        let o = Object.assign(Object.assign({}, this.headers), e === "POST" && { "x-upsert": String(a.upsert) });
        const l = a.metadata;
        typeof Blob < "u" && s instanceof Blob ? (n = new FormData(), n.append("cacheControl", a.cacheControl), l && n.append("metadata", this.encodeMetadata(l)), n.append("", s)) : typeof FormData < "u" && s instanceof FormData ? (n = s, n.append("cacheControl", a.cacheControl), l && n.append("metadata", this.encodeMetadata(l))) : (n = s, o["cache-control"] = `max-age=${a.cacheControl}`, o["content-type"] = a.contentType, l && (o["x-metadata"] = this.toBase64(this.encodeMetadata(l)))), r != null && r.headers && (o = Object.assign(Object.assign({}, o), r.headers));
        const h = this._removeEmptyFolders(t), c = this._getFinalPath(h), u = yield this.fetch(`${this.url}/object/${c}`, Object.assign({ method: e, body: n, headers: o }, a != null && a.duplex ? { duplex: a.duplex } : {})), d = yield u.json();
        return u.ok ? {
          data: { path: h, id: d.Id, fullPath: d.Key },
          error: null
        } : { data: null, error: d };
      } catch (n) {
        if (A(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Uploads a file to an existing bucket.
   *
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  upload(e, t, s) {
    return I(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("POST", e, t, s);
    });
  }
  /**
   * Upload a file with a token generated from `createSignedUploadUrl`.
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param token The token generated from `createSignedUploadUrl`
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadToSignedUrl(e, t, s, r) {
    return I(this, void 0, void 0, function* () {
      const n = this._removeEmptyFolders(e), a = this._getFinalPath(n), o = new URL(this.url + `/object/upload/sign/${a}`);
      o.searchParams.set("token", t);
      try {
        let l;
        const h = Object.assign({ upsert: at.upsert }, r), c = Object.assign(Object.assign({}, this.headers), { "x-upsert": String(h.upsert) });
        typeof Blob < "u" && s instanceof Blob ? (l = new FormData(), l.append("cacheControl", h.cacheControl), l.append("", s)) : typeof FormData < "u" && s instanceof FormData ? (l = s, l.append("cacheControl", h.cacheControl)) : (l = s, c["cache-control"] = `max-age=${h.cacheControl}`, c["content-type"] = h.contentType);
        const u = yield this.fetch(o.toString(), {
          method: "PUT",
          body: l,
          headers: c
        }), d = yield u.json();
        return u.ok ? {
          data: { path: n, fullPath: d.Key },
          error: null
        } : { data: null, error: d };
      } catch (l) {
        if (A(l))
          return { data: null, error: l };
        throw l;
      }
    });
  }
  /**
   * Creates a signed upload URL.
   * Signed upload URLs can be used to upload files to the bucket without further authentication.
   * They are valid for 2 hours.
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
   */
  createSignedUploadUrl(e, t) {
    return I(this, void 0, void 0, function* () {
      try {
        let s = this._getFinalPath(e);
        const r = Object.assign({}, this.headers);
        t != null && t.upsert && (r["x-upsert"] = "true");
        const n = yield q(this.fetch, `${this.url}/object/upload/sign/${s}`, {}, { headers: r }), a = new URL(this.url + n.url), o = a.searchParams.get("token");
        if (!o)
          throw new Je("No token returned by API");
        return { data: { signedUrl: a.toString(), path: e, token: o }, error: null };
      } catch (s) {
        if (A(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Replaces an existing file at the specified path with a new one.
   *
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  update(e, t, s) {
    return I(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("PUT", e, t, s);
    });
  }
  /**
   * Moves an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
   * @param options The destination options.
   */
  move(e, t, s) {
    return I(this, void 0, void 0, function* () {
      try {
        return { data: yield q(this.fetch, `${this.url}/object/move`, {
          bucketId: this.bucketId,
          sourceKey: e,
          destinationKey: t,
          destinationBucket: s == null ? void 0 : s.destinationBucket
        }, { headers: this.headers }), error: null };
      } catch (r) {
        if (A(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Copies an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
   * @param options The destination options.
   */
  copy(e, t, s) {
    return I(this, void 0, void 0, function* () {
      try {
        return { data: { path: (yield q(this.fetch, `${this.url}/object/copy`, {
          bucketId: this.bucketId,
          sourceKey: e,
          destinationKey: t,
          destinationBucket: s == null ? void 0 : s.destinationBucket
        }, { headers: this.headers })).Key }, error: null };
      } catch (r) {
        if (A(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  createSignedUrl(e, t, s) {
    return I(this, void 0, void 0, function* () {
      try {
        let r = this._getFinalPath(e), n = yield q(this.fetch, `${this.url}/object/sign/${r}`, Object.assign({ expiresIn: t }, s != null && s.transform ? { transform: s.transform } : {}), { headers: this.headers });
        const a = s != null && s.download ? `&download=${s.download === !0 ? "" : s.download}` : "";
        return n = { signedUrl: encodeURI(`${this.url}${n.signedURL}${a}`) }, { data: n, error: null };
      } catch (r) {
        if (A(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
   * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   */
  createSignedUrls(e, t, s) {
    return I(this, void 0, void 0, function* () {
      try {
        const r = yield q(this.fetch, `${this.url}/object/sign/${this.bucketId}`, { expiresIn: t, paths: e }, { headers: this.headers }), n = s != null && s.download ? `&download=${s.download === !0 ? "" : s.download}` : "";
        return {
          data: r.map((a) => Object.assign(Object.assign({}, a), { signedUrl: a.signedURL ? encodeURI(`${this.url}${a.signedURL}${n}`) : null })),
          error: null
        };
      } catch (r) {
        if (A(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
   *
   * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
   * @param options.transform Transform the asset before serving it to the client.
   */
  download(e, t) {
    return I(this, void 0, void 0, function* () {
      const r = typeof (t == null ? void 0 : t.transform) < "u" ? "render/image/authenticated" : "object", n = this.transformOptsToQueryString((t == null ? void 0 : t.transform) || {}), a = n ? `?${n}` : "";
      try {
        const o = this._getFinalPath(e);
        return { data: yield (yield ve(this.fetch, `${this.url}/${r}/${o}${a}`, {
          headers: this.headers,
          noResolveJson: !0
        })).blob(), error: null };
      } catch (o) {
        if (A(o))
          return { data: null, error: o };
        throw o;
      }
    });
  }
  /**
   * Retrieves the details of an existing file.
   * @param path
   */
  info(e) {
    return I(this, void 0, void 0, function* () {
      const t = this._getFinalPath(e);
      try {
        const s = yield ve(this.fetch, `${this.url}/object/info/${t}`, {
          headers: this.headers
        });
        return { data: qe(s), error: null };
      } catch (s) {
        if (A(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Checks the existence of a file.
   * @param path
   */
  exists(e) {
    return I(this, void 0, void 0, function* () {
      const t = this._getFinalPath(e);
      try {
        return yield ar(this.fetch, `${this.url}/object/${t}`, {
          headers: this.headers
        }), { data: !0, error: null };
      } catch (s) {
        if (A(s) && s instanceof Be) {
          const r = s.originalError;
          if ([400, 404].includes(r == null ? void 0 : r.status))
            return { data: !1, error: s };
        }
        throw s;
      }
    });
  }
  /**
   * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
   * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
   *
   * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
   * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  getPublicUrl(e, t) {
    const s = this._getFinalPath(e), r = [], n = t != null && t.download ? `download=${t.download === !0 ? "" : t.download}` : "";
    n !== "" && r.push(n);
    const o = typeof (t == null ? void 0 : t.transform) < "u" ? "render/image" : "object", l = this.transformOptsToQueryString((t == null ? void 0 : t.transform) || {});
    l !== "" && r.push(l);
    let h = r.join("&");
    return h !== "" && (h = `?${h}`), {
      data: { publicUrl: encodeURI(`${this.url}/${o}/public/${s}${h}`) }
    };
  }
  /**
   * Deletes files within the same bucket
   *
   * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
   */
  remove(e) {
    return I(this, void 0, void 0, function* () {
      try {
        return { data: yield Dt(this.fetch, `${this.url}/object/${this.bucketId}`, { prefixes: e }, { headers: this.headers }), error: null };
      } catch (t) {
        if (A(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Get file metadata
   * @param id the file id to retrieve metadata
   */
  // async getMetadata(
  //   id: string
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await get(this.fetch, `${this.url}/metadata/${id}`, { headers: this.headers })
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Update file metadata
   * @param id the file id to update metadata
   * @param meta the new file metadata
   */
  // async updateMetadata(
  //   id: string,
  //   meta: Metadata
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await post(
  //       this.fetch,
  //       `${this.url}/metadata/${id}`,
  //       { ...meta },
  //       { headers: this.headers }
  //     )
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Lists all the files within a bucket.
   * @param path The folder path.
   */
  list(e, t, s) {
    return I(this, void 0, void 0, function* () {
      try {
        const r = Object.assign(Object.assign(Object.assign({}, or), t), { prefix: e || "" });
        return { data: yield q(this.fetch, `${this.url}/object/list/${this.bucketId}`, r, { headers: this.headers }, s), error: null };
      } catch (r) {
        if (A(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  encodeMetadata(e) {
    return JSON.stringify(e);
  }
  toBase64(e) {
    return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e);
  }
  _getFinalPath(e) {
    return `${this.bucketId}/${e}`;
  }
  _removeEmptyFolders(e) {
    return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(e) {
    const t = [];
    return e.width && t.push(`width=${e.width}`), e.height && t.push(`height=${e.height}`), e.resize && t.push(`resize=${e.resize}`), e.format && t.push(`format=${e.format}`), e.quality && t.push(`quality=${e.quality}`), t.join("&");
  }
}
const cr = "2.7.1", hr = { "X-Client-Info": `storage-js/${cr}` };
var Y = globalThis && globalThis.__awaiter || function(i, e, t, s) {
  function r(n) {
    return n instanceof t ? n : new t(function(a) {
      a(n);
    });
  }
  return new (t || (t = Promise))(function(n, a) {
    function o(c) {
      try {
        h(s.next(c));
      } catch (u) {
        a(u);
      }
    }
    function l(c) {
      try {
        h(s.throw(c));
      } catch (u) {
        a(u);
      }
    }
    function h(c) {
      c.done ? n(c.value) : r(c.value).then(o, l);
    }
    h((s = s.apply(i, e || [])).next());
  });
};
class ur {
  constructor(e, t = {}, s) {
    this.url = e, this.headers = Object.assign(Object.assign({}, hr), t), this.fetch = Lt(s);
  }
  /**
   * Retrieves the details of all Storage buckets within an existing project.
   */
  listBuckets() {
    return Y(this, void 0, void 0, function* () {
      try {
        return { data: yield ve(this.fetch, `${this.url}/bucket`, { headers: this.headers }), error: null };
      } catch (e) {
        if (A(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
  /**
   * Retrieves the details of an existing Storage bucket.
   *
   * @param id The unique identifier of the bucket you would like to retrieve.
   */
  getBucket(e) {
    return Y(this, void 0, void 0, function* () {
      try {
        return { data: yield ve(this.fetch, `${this.url}/bucket/${e}`, { headers: this.headers }), error: null };
      } catch (t) {
        if (A(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Creates a new Storage bucket
   *
   * @param id A unique identifier for the bucket you are creating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   * @returns newly created bucket id
   */
  createBucket(e, t = {
    public: !1
  }) {
    return Y(this, void 0, void 0, function* () {
      try {
        return { data: yield q(this.fetch, `${this.url}/bucket`, {
          id: e,
          name: e,
          public: t.public,
          file_size_limit: t.fileSizeLimit,
          allowed_mime_types: t.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (s) {
        if (A(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Updates a Storage bucket
   *
   * @param id A unique identifier for the bucket you are updating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   */
  updateBucket(e, t) {
    return Y(this, void 0, void 0, function* () {
      try {
        return { data: yield nr(this.fetch, `${this.url}/bucket/${e}`, {
          id: e,
          name: e,
          public: t.public,
          file_size_limit: t.fileSizeLimit,
          allowed_mime_types: t.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (s) {
        if (A(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Removes all objects inside a single bucket.
   *
   * @param id The unique identifier of the bucket you would like to empty.
   */
  emptyBucket(e) {
    return Y(this, void 0, void 0, function* () {
      try {
        return { data: yield q(this.fetch, `${this.url}/bucket/${e}/empty`, {}, { headers: this.headers }), error: null };
      } catch (t) {
        if (A(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
   * You must first `empty()` the bucket.
   *
   * @param id The unique identifier of the bucket you would like to delete.
   */
  deleteBucket(e) {
    return Y(this, void 0, void 0, function* () {
      try {
        return { data: yield Dt(this.fetch, `${this.url}/bucket/${e}`, {}, { headers: this.headers }), error: null };
      } catch (t) {
        if (A(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
}
class dr extends ur {
  constructor(e, t = {}, s) {
    super(e, t, s);
  }
  /**
   * Perform file operation in a bucket.
   *
   * @param id The bucket id to operate on.
   */
  from(e) {
    return new lr(this.url, this.headers, e, this.fetch);
  }
}
const fr = "2.50.0";
let ae = "";
typeof Deno < "u" ? ae = "deno" : typeof document < "u" ? ae = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? ae = "react-native" : ae = "node";
const gr = { "X-Client-Info": `supabase-js-${ae}/${fr}` }, pr = {
  headers: gr
}, mr = {
  schema: "public"
}, _r = {
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  flowType: "implicit"
}, vr = {};
var yr = globalThis && globalThis.__awaiter || function(i, e, t, s) {
  function r(n) {
    return n instanceof t ? n : new t(function(a) {
      a(n);
    });
  }
  return new (t || (t = Promise))(function(n, a) {
    function o(c) {
      try {
        h(s.next(c));
      } catch (u) {
        a(u);
      }
    }
    function l(c) {
      try {
        h(s.throw(c));
      } catch (u) {
        a(u);
      }
    }
    function h(c) {
      c.done ? n(c.value) : r(c.value).then(o, l);
    }
    h((s = s.apply(i, e || [])).next());
  });
};
const wr = (i) => {
  let e;
  return i ? e = i : typeof fetch > "u" ? e = wt : e = fetch, (...t) => e(...t);
}, br = () => typeof Headers > "u" ? bt : Headers, kr = (i, e, t) => {
  const s = wr(t), r = br();
  return (n, a) => yr(void 0, void 0, void 0, function* () {
    var o;
    const l = (o = yield e()) !== null && o !== void 0 ? o : i;
    let h = new r(a == null ? void 0 : a.headers);
    return h.has("apikey") || h.set("apikey", i), h.has("Authorization") || h.set("Authorization", `Bearer ${l}`), s(n, Object.assign(Object.assign({}, a), { headers: h }));
  });
};
var Sr = globalThis && globalThis.__awaiter || function(i, e, t, s) {
  function r(n) {
    return n instanceof t ? n : new t(function(a) {
      a(n);
    });
  }
  return new (t || (t = Promise))(function(n, a) {
    function o(c) {
      try {
        h(s.next(c));
      } catch (u) {
        a(u);
      }
    }
    function l(c) {
      try {
        h(s.throw(c));
      } catch (u) {
        a(u);
      }
    }
    function h(c) {
      c.done ? n(c.value) : r(c.value).then(o, l);
    }
    h((s = s.apply(i, e || [])).next());
  });
};
function Tr(i) {
  return i.endsWith("/") ? i : i + "/";
}
function Er(i, e) {
  var t, s;
  const { db: r, auth: n, realtime: a, global: o } = i, { db: l, auth: h, realtime: c, global: u } = e, d = {
    db: Object.assign(Object.assign({}, l), r),
    auth: Object.assign(Object.assign({}, h), n),
    realtime: Object.assign(Object.assign({}, c), a),
    global: Object.assign(Object.assign(Object.assign({}, u), o), { headers: Object.assign(Object.assign({}, (t = u == null ? void 0 : u.headers) !== null && t !== void 0 ? t : {}), (s = o == null ? void 0 : o.headers) !== null && s !== void 0 ? s : {}) }),
    accessToken: () => Sr(this, void 0, void 0, function* () {
      return "";
    })
  };
  return i.accessToken ? d.accessToken = i.accessToken : delete d.accessToken, d;
}
const Ut = "2.70.0", ee = 30 * 1e3, Ge = 3, Ie = Ge * ee, Cr = "http://localhost:9999", Or = "supabase.auth.token", Ar = { "X-Client-Info": `gotrue-js/${Ut}` }, Fe = "X-Supabase-Api-Version", Nt = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
}, jr = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, Pr = 6e5;
class Ve extends Error {
  constructor(e, t, s) {
    super(e), this.__isAuthError = !0, this.name = "AuthError", this.status = t, this.code = s;
  }
}
function m(i) {
  return typeof i == "object" && i !== null && "__isAuthError" in i;
}
class Rr extends Ve {
  constructor(e, t, s) {
    super(e, t, s), this.name = "AuthApiError", this.status = t, this.code = s;
  }
}
function Ir(i) {
  return m(i) && i.name === "AuthApiError";
}
class Mt extends Ve {
  constructor(e, t) {
    super(e), this.name = "AuthUnknownError", this.originalError = t;
  }
}
class F extends Ve {
  constructor(e, t, s, r) {
    super(e, s, r), this.name = t, this.status = s;
  }
}
class B extends F {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function $r(i) {
  return m(i) && i.name === "AuthSessionMissingError";
}
class fe extends F {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class ge extends F {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class pe extends F {
  constructor(e, t = null) {
    super(e, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = t;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
function xr(i) {
  return m(i) && i.name === "AuthImplicitGrantRedirectError";
}
class ot extends F {
  constructor(e, t = null) {
    super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = t;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
class ze extends F {
  constructor(e, t) {
    super(e, "AuthRetryableFetchError", t, void 0);
  }
}
function $e(i) {
  return m(i) && i.name === "AuthRetryableFetchError";
}
class lt extends F {
  constructor(e, t, s) {
    super(e, "AuthWeakPasswordError", t, "weak_password"), this.reasons = s;
  }
}
class le extends F {
  constructor(e) {
    super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const ye = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), ct = ` 	
\r=`.split(""), Lr = (() => {
  const i = new Array(128);
  for (let e = 0; e < i.length; e += 1)
    i[e] = -1;
  for (let e = 0; e < ct.length; e += 1)
    i[ct[e].charCodeAt(0)] = -2;
  for (let e = 0; e < ye.length; e += 1)
    i[ye[e].charCodeAt(0)] = e;
  return i;
})();
function ht(i, e, t) {
  if (i !== null)
    for (e.queue = e.queue << 8 | i, e.queuedBits += 8; e.queuedBits >= 6; ) {
      const s = e.queue >> e.queuedBits - 6 & 63;
      t(ye[s]), e.queuedBits -= 6;
    }
  else if (e.queuedBits > 0)
    for (e.queue = e.queue << 6 - e.queuedBits, e.queuedBits = 6; e.queuedBits >= 6; ) {
      const s = e.queue >> e.queuedBits - 6 & 63;
      t(ye[s]), e.queuedBits -= 6;
    }
}
function Bt(i, e, t) {
  const s = Lr[i];
  if (s > -1)
    for (e.queue = e.queue << 6 | s, e.queuedBits += 6; e.queuedBits >= 8; )
      t(e.queue >> e.queuedBits - 8 & 255), e.queuedBits -= 8;
  else {
    if (s === -2)
      return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(i)}"`);
  }
}
function ut(i) {
  const e = [], t = (a) => {
    e.push(String.fromCodePoint(a));
  }, s = {
    utf8seq: 0,
    codepoint: 0
  }, r = { queue: 0, queuedBits: 0 }, n = (a) => {
    Nr(a, s, t);
  };
  for (let a = 0; a < i.length; a += 1)
    Bt(i.charCodeAt(a), r, n);
  return e.join("");
}
function Dr(i, e) {
  if (i <= 127) {
    e(i);
    return;
  } else if (i <= 2047) {
    e(192 | i >> 6), e(128 | i & 63);
    return;
  } else if (i <= 65535) {
    e(224 | i >> 12), e(128 | i >> 6 & 63), e(128 | i & 63);
    return;
  } else if (i <= 1114111) {
    e(240 | i >> 18), e(128 | i >> 12 & 63), e(128 | i >> 6 & 63), e(128 | i & 63);
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${i.toString(16)}`);
}
function Ur(i, e) {
  for (let t = 0; t < i.length; t += 1) {
    let s = i.charCodeAt(t);
    if (s > 55295 && s <= 56319) {
      const r = (s - 55296) * 1024 & 65535;
      s = (i.charCodeAt(t + 1) - 56320 & 65535 | r) + 65536, t += 1;
    }
    Dr(s, e);
  }
}
function Nr(i, e, t) {
  if (e.utf8seq === 0) {
    if (i <= 127) {
      t(i);
      return;
    }
    for (let s = 1; s < 6; s += 1)
      if (!(i >> 7 - s & 1)) {
        e.utf8seq = s;
        break;
      }
    if (e.utf8seq === 2)
      e.codepoint = i & 31;
    else if (e.utf8seq === 3)
      e.codepoint = i & 15;
    else if (e.utf8seq === 4)
      e.codepoint = i & 7;
    else
      throw new Error("Invalid UTF-8 sequence");
    e.utf8seq -= 1;
  } else if (e.utf8seq > 0) {
    if (i <= 127)
      throw new Error("Invalid UTF-8 sequence");
    e.codepoint = e.codepoint << 6 | i & 63, e.utf8seq -= 1, e.utf8seq === 0 && t(e.codepoint);
  }
}
function Mr(i) {
  const e = [], t = { queue: 0, queuedBits: 0 }, s = (r) => {
    e.push(r);
  };
  for (let r = 0; r < i.length; r += 1)
    Bt(i.charCodeAt(r), t, s);
  return new Uint8Array(e);
}
function Br(i) {
  const e = [];
  return Ur(i, (t) => e.push(t)), new Uint8Array(e);
}
function qr(i) {
  const e = [], t = { queue: 0, queuedBits: 0 }, s = (r) => {
    e.push(r);
  };
  return i.forEach((r) => ht(r, t, s)), ht(null, t, s), e.join("");
}
function Gr(i) {
  return Math.round(Date.now() / 1e3) + i;
}
function Fr() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(i) {
    const e = Math.random() * 16 | 0;
    return (i == "x" ? e : e & 3 | 8).toString(16);
  });
}
const L = () => typeof window < "u" && typeof document < "u", H = {
  tested: !1,
  writable: !1
}, ce = () => {
  if (!L())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (H.tested)
    return H.writable;
  const i = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(i, i), globalThis.localStorage.removeItem(i), H.tested = !0, H.writable = !0;
  } catch {
    H.tested = !0, H.writable = !1;
  }
  return H.writable;
};
function zr(i) {
  const e = {}, t = new URL(i);
  if (t.hash && t.hash[0] === "#")
    try {
      new URLSearchParams(t.hash.substring(1)).forEach((r, n) => {
        e[n] = r;
      });
    } catch {
    }
  return t.searchParams.forEach((s, r) => {
    e[r] = s;
  }), e;
}
const qt = (i) => {
  let e;
  return i ? e = i : typeof fetch > "u" ? e = (...t) => Promise.resolve().then(() => re).then(({ default: s }) => s(...t)) : e = fetch, (...t) => e(...t);
}, Wr = (i) => typeof i == "object" && i !== null && "status" in i && "ok" in i && "json" in i && typeof i.json == "function", Gt = async (i, e, t) => {
  await i.setItem(e, JSON.stringify(t));
}, me = async (i, e) => {
  const t = await i.getItem(e);
  if (!t)
    return null;
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}, _e = async (i, e) => {
  await i.removeItem(e);
};
class Ae {
  constructor() {
    this.promise = new Ae.promiseConstructor((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
}
Ae.promiseConstructor = Promise;
function xe(i) {
  const e = i.split(".");
  if (e.length !== 3)
    throw new le("Invalid JWT structure");
  for (let s = 0; s < e.length; s++)
    if (!jr.test(e[s]))
      throw new le("JWT not in base64url format");
  return {
    // using base64url lib
    header: JSON.parse(ut(e[0])),
    payload: JSON.parse(ut(e[1])),
    signature: Mr(e[2]),
    raw: {
      header: e[0],
      payload: e[1]
    }
  };
}
async function Hr(i) {
  return await new Promise((e) => {
    setTimeout(() => e(null), i);
  });
}
function Kr(i, e) {
  return new Promise((s, r) => {
    (async () => {
      for (let n = 0; n < 1 / 0; n++)
        try {
          const a = await i(n);
          if (!e(n, null, a)) {
            s(a);
            return;
          }
        } catch (a) {
          if (!e(n, a)) {
            r(a);
            return;
          }
        }
    })();
  });
}
function Jr(i) {
  return ("0" + i.toString(16)).substr(-2);
}
function Vr() {
  const e = new Uint32Array(56);
  if (typeof crypto > "u") {
    const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", s = t.length;
    let r = "";
    for (let n = 0; n < 56; n++)
      r += t.charAt(Math.floor(Math.random() * s));
    return r;
  }
  return crypto.getRandomValues(e), Array.from(e, Jr).join("");
}
async function Yr(i) {
  const t = new TextEncoder().encode(i), s = await crypto.subtle.digest("SHA-256", t), r = new Uint8Array(s);
  return Array.from(r).map((n) => String.fromCharCode(n)).join("");
}
async function Qr(i) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), i;
  const t = await Yr(i);
  return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function Q(i, e, t = !1) {
  const s = Vr();
  let r = s;
  t && (r += "/PASSWORD_RECOVERY"), await Gt(i, `${e}-code-verifier`, r);
  const n = await Qr(s);
  return [n, s === n ? "plain" : "s256"];
}
const Xr = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function Zr(i) {
  const e = i.headers.get(Fe);
  if (!e || !e.match(Xr))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${e}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function ei(i) {
  if (!i)
    throw new Error("Missing exp claim");
  const e = Math.floor(Date.now() / 1e3);
  if (i <= e)
    throw new Error("JWT has expired");
}
function ti(i) {
  switch (i) {
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: { name: "SHA-256" }
      };
    case "ES256":
      return {
        name: "ECDSA",
        namedCurve: "P-256",
        hash: { name: "SHA-256" }
      };
    default:
      throw new Error("Invalid alg claim");
  }
}
const si = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function X(i) {
  if (!si.test(i))
    throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
}
var ri = globalThis && globalThis.__rest || function(i, e) {
  var t = {};
  for (var s in i)
    Object.prototype.hasOwnProperty.call(i, s) && e.indexOf(s) < 0 && (t[s] = i[s]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, s = Object.getOwnPropertySymbols(i); r < s.length; r++)
      e.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(i, s[r]) && (t[s[r]] = i[s[r]]);
  return t;
};
const K = (i) => i.msg || i.message || i.error_description || i.error || JSON.stringify(i), ii = [502, 503, 504];
async function dt(i) {
  var e;
  if (!Wr(i))
    throw new ze(K(i), 0);
  if (ii.includes(i.status))
    throw new ze(K(i), i.status);
  let t;
  try {
    t = await i.json();
  } catch (n) {
    throw new Mt(K(n), n);
  }
  let s;
  const r = Zr(i);
  if (r && r.getTime() >= Nt["2024-01-01"].timestamp && typeof t == "object" && t && typeof t.code == "string" ? s = t.code : typeof t == "object" && t && typeof t.error_code == "string" && (s = t.error_code), s) {
    if (s === "weak_password")
      throw new lt(K(t), i.status, ((e = t.weak_password) === null || e === void 0 ? void 0 : e.reasons) || []);
    if (s === "session_not_found")
      throw new B();
  } else if (typeof t == "object" && t && typeof t.weak_password == "object" && t.weak_password && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.reasons.reduce((n, a) => n && typeof a == "string", !0))
    throw new lt(K(t), i.status, t.weak_password.reasons);
  throw new Rr(K(t), i.status || 500, s);
}
const ni = (i, e, t, s) => {
  const r = { method: i, headers: (e == null ? void 0 : e.headers) || {} };
  return i === "GET" ? r : (r.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, e == null ? void 0 : e.headers), r.body = JSON.stringify(s), Object.assign(Object.assign({}, r), t));
};
async function w(i, e, t, s) {
  var r;
  const n = Object.assign({}, s == null ? void 0 : s.headers);
  n[Fe] || (n[Fe] = Nt["2024-01-01"].name), s != null && s.jwt && (n.Authorization = `Bearer ${s.jwt}`);
  const a = (r = s == null ? void 0 : s.query) !== null && r !== void 0 ? r : {};
  s != null && s.redirectTo && (a.redirect_to = s.redirectTo);
  const o = Object.keys(a).length ? "?" + new URLSearchParams(a).toString() : "", l = await ai(i, e, t + o, {
    headers: n,
    noResolveJson: s == null ? void 0 : s.noResolveJson
  }, {}, s == null ? void 0 : s.body);
  return s != null && s.xform ? s == null ? void 0 : s.xform(l) : { data: Object.assign({}, l), error: null };
}
async function ai(i, e, t, s, r, n) {
  const a = ni(e, s, r, n);
  let o;
  try {
    o = await i(t, Object.assign({}, a));
  } catch (l) {
    throw console.error(l), new ze(K(l), 0);
  }
  if (o.ok || await dt(o), s != null && s.noResolveJson)
    return o;
  try {
    return await o.json();
  } catch (l) {
    await dt(l);
  }
}
function N(i) {
  var e;
  let t = null;
  hi(i) && (t = Object.assign({}, i), i.expires_at || (t.expires_at = Gr(i.expires_in)));
  const s = (e = i.user) !== null && e !== void 0 ? e : i;
  return { data: { session: t, user: s }, error: null };
}
function ft(i) {
  const e = N(i);
  return !e.error && i.weak_password && typeof i.weak_password == "object" && Array.isArray(i.weak_password.reasons) && i.weak_password.reasons.length && i.weak_password.message && typeof i.weak_password.message == "string" && i.weak_password.reasons.reduce((t, s) => t && typeof s == "string", !0) && (e.data.weak_password = i.weak_password), e;
}
function G(i) {
  var e;
  return { data: { user: (e = i.user) !== null && e !== void 0 ? e : i }, error: null };
}
function oi(i) {
  return { data: i, error: null };
}
function li(i) {
  const { action_link: e, email_otp: t, hashed_token: s, redirect_to: r, verification_type: n } = i, a = ri(i, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), o = {
    action_link: e,
    email_otp: t,
    hashed_token: s,
    redirect_to: r,
    verification_type: n
  }, l = Object.assign({}, a);
  return {
    data: {
      properties: o,
      user: l
    },
    error: null
  };
}
function ci(i) {
  return i;
}
function hi(i) {
  return i.access_token && i.refresh_token && i.expires_in;
}
const Le = ["global", "local", "others"];
var ui = globalThis && globalThis.__rest || function(i, e) {
  var t = {};
  for (var s in i)
    Object.prototype.hasOwnProperty.call(i, s) && e.indexOf(s) < 0 && (t[s] = i[s]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, s = Object.getOwnPropertySymbols(i); r < s.length; r++)
      e.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(i, s[r]) && (t[s[r]] = i[s[r]]);
  return t;
};
class di {
  constructor({ url: e = "", headers: t = {}, fetch: s }) {
    this.url = e, this.headers = t, this.fetch = qt(s), this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    };
  }
  /**
   * Removes a logged-in session.
   * @param jwt A valid, logged-in JWT.
   * @param scope The logout sope.
   */
  async signOut(e, t = Le[0]) {
    if (Le.indexOf(t) < 0)
      throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Le.join(", ")}`);
    try {
      return await w(this.fetch, "POST", `${this.url}/logout?scope=${t}`, {
        headers: this.headers,
        jwt: e,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (s) {
      if (m(s))
        return { data: null, error: s };
      throw s;
    }
  }
  /**
   * Sends an invite link to an email address.
   * @param email The email address of the user.
   * @param options Additional options to be included when inviting.
   */
  async inviteUserByEmail(e, t = {}) {
    try {
      return await w(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: e, data: t.data },
        headers: this.headers,
        redirectTo: t.redirectTo,
        xform: G
      });
    } catch (s) {
      if (m(s))
        return { data: { user: null }, error: s };
      throw s;
    }
  }
  /**
   * Generates email links and OTPs to be sent via a custom email provider.
   * @param email The user's email.
   * @param options.password User password. For signup only.
   * @param options.data Optional user metadata. For signup only.
   * @param options.redirectTo The redirect url which should be appended to the generated link
   */
  async generateLink(e) {
    try {
      const { options: t } = e, s = ui(e, ["options"]), r = Object.assign(Object.assign({}, s), t);
      return "newEmail" in s && (r.new_email = s == null ? void 0 : s.newEmail, delete r.newEmail), await w(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: r,
        headers: this.headers,
        xform: li,
        redirectTo: t == null ? void 0 : t.redirectTo
      });
    } catch (t) {
      if (m(t))
        return {
          data: {
            properties: null,
            user: null
          },
          error: t
        };
      throw t;
    }
  }
  // User Admin API
  /**
   * Creates a new user.
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async createUser(e) {
    try {
      return await w(this.fetch, "POST", `${this.url}/admin/users`, {
        body: e,
        headers: this.headers,
        xform: G
      });
    } catch (t) {
      if (m(t))
        return { data: { user: null }, error: t };
      throw t;
    }
  }
  /**
   * Get a list of users.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
   */
  async listUsers(e) {
    var t, s, r, n, a, o, l;
    try {
      const h = { nextPage: null, lastPage: 0, total: 0 }, c = await w(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (s = (t = e == null ? void 0 : e.page) === null || t === void 0 ? void 0 : t.toString()) !== null && s !== void 0 ? s : "",
          per_page: (n = (r = e == null ? void 0 : e.perPage) === null || r === void 0 ? void 0 : r.toString()) !== null && n !== void 0 ? n : ""
        },
        xform: ci
      });
      if (c.error)
        throw c.error;
      const u = await c.json(), d = (a = c.headers.get("x-total-count")) !== null && a !== void 0 ? a : 0, f = (l = (o = c.headers.get("link")) === null || o === void 0 ? void 0 : o.split(",")) !== null && l !== void 0 ? l : [];
      return f.length > 0 && (f.forEach((_) => {
        const b = parseInt(_.split(";")[0].split("=")[1].substring(0, 1)), p = JSON.parse(_.split(";")[1].split("=")[1]);
        h[`${p}Page`] = b;
      }), h.total = parseInt(d)), { data: Object.assign(Object.assign({}, u), h), error: null };
    } catch (h) {
      if (m(h))
        return { data: { users: [] }, error: h };
      throw h;
    }
  }
  /**
   * Get user by id.
   *
   * @param uid The user's unique identifier
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async getUserById(e) {
    X(e);
    try {
      return await w(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        xform: G
      });
    } catch (t) {
      if (m(t))
        return { data: { user: null }, error: t };
      throw t;
    }
  }
  /**
   * Updates the user data.
   *
   * @param attributes The data you want to update.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async updateUserById(e, t) {
    X(e);
    try {
      return await w(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
        body: t,
        headers: this.headers,
        xform: G
      });
    } catch (s) {
      if (m(s))
        return { data: { user: null }, error: s };
      throw s;
    }
  }
  /**
   * Delete a user. Requires a `service_role` key.
   *
   * @param id The user id you want to remove.
   * @param shouldSoftDelete If true, then the user will be soft-deleted from the auth schema. Soft deletion allows user identification from the hashed user ID but is not reversible.
   * Defaults to false for backward compatibility.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async deleteUser(e, t = !1) {
    X(e);
    try {
      return await w(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        body: {
          should_soft_delete: t
        },
        xform: G
      });
    } catch (s) {
      if (m(s))
        return { data: { user: null }, error: s };
      throw s;
    }
  }
  async _listFactors(e) {
    X(e.userId);
    try {
      const { data: t, error: s } = await w(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
        headers: this.headers,
        xform: (r) => ({ data: { factors: r }, error: null })
      });
      return { data: t, error: s };
    } catch (t) {
      if (m(t))
        return { data: null, error: t };
      throw t;
    }
  }
  async _deleteFactor(e) {
    X(e.userId), X(e.id);
    try {
      return { data: await w(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
        headers: this.headers
      }), error: null };
    } catch (t) {
      if (m(t))
        return { data: null, error: t };
      throw t;
    }
  }
}
const fi = {
  getItem: (i) => ce() ? globalThis.localStorage.getItem(i) : null,
  setItem: (i, e) => {
    ce() && globalThis.localStorage.setItem(i, e);
  },
  removeItem: (i) => {
    ce() && globalThis.localStorage.removeItem(i);
  }
};
function gt(i = {}) {
  return {
    getItem: (e) => i[e] || null,
    setItem: (e, t) => {
      i[e] = t;
    },
    removeItem: (e) => {
      delete i[e];
    }
  };
}
function gi() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function() {
          return this;
        },
        configurable: !0
      }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
const Z = {
  /**
   * @experimental
   */
  debug: !!(globalThis && ce() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class Ft extends Error {
  constructor(e) {
    super(e), this.isAcquireTimeout = !0;
  }
}
class pi extends Ft {
}
async function mi(i, e, t) {
  Z.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", i, e);
  const s = new globalThis.AbortController();
  return e > 0 && setTimeout(() => {
    s.abort(), Z.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", i);
  }, e), await Promise.resolve().then(() => globalThis.navigator.locks.request(i, e === 0 ? {
    mode: "exclusive",
    ifAvailable: !0
  } : {
    mode: "exclusive",
    signal: s.signal
  }, async (r) => {
    if (r) {
      Z.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", i, r.name);
      try {
        return await t();
      } finally {
        Z.debug && console.log("@supabase/gotrue-js: navigatorLock: released", i, r.name);
      }
    } else {
      if (e === 0)
        throw Z.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", i), new pi(`Acquiring an exclusive Navigator LockManager lock "${i}" immediately failed`);
      if (Z.debug)
        try {
          const n = await globalThis.navigator.locks.query();
          console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(n, null, "  "));
        } catch (n) {
          console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", n);
        }
      return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), await t();
    }
  }));
}
gi();
const _i = {
  url: Cr,
  storageKey: Or,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: Ar,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1
};
async function pt(i, e, t) {
  return await t();
}
class he {
  /**
   * Create a new client for use in the browser.
   */
  constructor(e) {
    var t, s;
    this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log, this.instanceID = he.nextInstanceID, he.nextInstanceID += 1, this.instanceID > 0 && L() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
    const r = Object.assign(Object.assign({}, _i), e);
    if (this.logDebugMessages = !!r.debug, typeof r.debug == "function" && (this.logger = r.debug), this.persistSession = r.persistSession, this.storageKey = r.storageKey, this.autoRefreshToken = r.autoRefreshToken, this.admin = new di({
      url: r.url,
      headers: r.headers,
      fetch: r.fetch
    }), this.url = r.url, this.headers = r.headers, this.fetch = qt(r.fetch), this.lock = r.lock || pt, this.detectSessionInUrl = r.detectSessionInUrl, this.flowType = r.flowType, this.hasCustomAuthorizationHeader = r.hasCustomAuthorizationHeader, r.lock ? this.lock = r.lock : L() && (!((t = globalThis == null ? void 0 : globalThis.navigator) === null || t === void 0) && t.locks) ? this.lock = mi : this.lock = pt, this.jwks = { keys: [] }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER, this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
    }, this.persistSession ? r.storage ? this.storage = r.storage : ce() ? this.storage = fi : (this.memoryStorage = {}, this.storage = gt(this.memoryStorage)) : (this.memoryStorage = {}, this.storage = gt(this.memoryStorage)), L() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (n) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", n);
      }
      (s = this.broadcastChannel) === null || s === void 0 || s.addEventListener("message", async (n) => {
        this._debug("received broadcast notification from other tab or client", n), await this._notifyAllSubscribers(n.data.event, n.data.session, !1);
      });
    }
    this.initialize();
  }
  _debug(...e) {
    return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${Ut}) ${(/* @__PURE__ */ new Date()).toISOString()}`, ...e), this;
  }
  /**
   * Initializes the client session either from the url or from storage.
   * This method is automatically called when instantiating the client, but should also be called
   * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
   */
  async initialize() {
    return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))(), await this.initializePromise);
  }
  /**
   * IMPORTANT:
   * 1. Never throw in this method, as it is called from the constructor
   * 2. Never return a session from this method as it would be cached over
   *    the whole lifetime of the client
   */
  async _initialize() {
    var e;
    try {
      const t = zr(window.location.href);
      let s = "none";
      if (this._isImplicitGrantCallback(t) ? s = "implicit" : await this._isPKCECallback(t) && (s = "pkce"), L() && this.detectSessionInUrl && s !== "none") {
        const { data: r, error: n } = await this._getSessionFromURL(t, s);
        if (n) {
          if (this._debug("#_initialize()", "error detecting session from URL", n), xr(n)) {
            const l = (e = n.details) === null || e === void 0 ? void 0 : e.code;
            if (l === "identity_already_exists" || l === "identity_not_found" || l === "single_identity_not_deletable")
              return { error: n };
          }
          return await this._removeSession(), { error: n };
        }
        const { session: a, redirectType: o } = r;
        return this._debug("#_initialize()", "detected session in URL", a, "redirect type", o), await this._saveSession(a), setTimeout(async () => {
          o === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", a) : await this._notifyAllSubscribers("SIGNED_IN", a);
        }, 0), { error: null };
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (t) {
      return m(t) ? { error: t } : {
        error: new Mt("Unexpected error during initialization", t)
      };
    } finally {
      await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
    }
  }
  /**
   * Creates a new anonymous user.
   *
   * @returns A session where the is_anonymous claim in the access token JWT set to true
   */
  async signInAnonymously(e) {
    var t, s, r;
    try {
      const n = await w(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (s = (t = e == null ? void 0 : e.options) === null || t === void 0 ? void 0 : t.data) !== null && s !== void 0 ? s : {},
          gotrue_meta_security: { captcha_token: (r = e == null ? void 0 : e.options) === null || r === void 0 ? void 0 : r.captchaToken }
        },
        xform: N
      }), { data: a, error: o } = n;
      if (o || !a)
        return { data: { user: null, session: null }, error: o };
      const l = a.session, h = a.user;
      return a.session && (await this._saveSession(a.session), await this._notifyAllSubscribers("SIGNED_IN", l)), { data: { user: h, session: l }, error: null };
    } catch (n) {
      if (m(n))
        return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  /**
   * Creates a new user.
   *
   * Be aware that if a user account exists in the system you may get back an
   * error message that attempts to hide this information from the user.
   * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
   *
   * @returns A logged-in session if the server has "autoconfirm" ON
   * @returns A user if the server has "autoconfirm" OFF
   */
  async signUp(e) {
    var t, s, r;
    try {
      let n;
      if ("email" in e) {
        const { email: c, password: u, options: d } = e;
        let f = null, _ = null;
        this.flowType === "pkce" && ([f, _] = await Q(this.storage, this.storageKey)), n = await w(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: d == null ? void 0 : d.emailRedirectTo,
          body: {
            email: c,
            password: u,
            data: (t = d == null ? void 0 : d.data) !== null && t !== void 0 ? t : {},
            gotrue_meta_security: { captcha_token: d == null ? void 0 : d.captchaToken },
            code_challenge: f,
            code_challenge_method: _
          },
          xform: N
        });
      } else if ("phone" in e) {
        const { phone: c, password: u, options: d } = e;
        n = await w(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: c,
            password: u,
            data: (s = d == null ? void 0 : d.data) !== null && s !== void 0 ? s : {},
            channel: (r = d == null ? void 0 : d.channel) !== null && r !== void 0 ? r : "sms",
            gotrue_meta_security: { captcha_token: d == null ? void 0 : d.captchaToken }
          },
          xform: N
        });
      } else
        throw new ge("You must provide either an email or phone number and a password");
      const { data: a, error: o } = n;
      if (o || !a)
        return { data: { user: null, session: null }, error: o };
      const l = a.session, h = a.user;
      return a.session && (await this._saveSession(a.session), await this._notifyAllSubscribers("SIGNED_IN", l)), { data: { user: h, session: l }, error: null };
    } catch (n) {
      if (m(n))
        return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  /**
   * Log in an existing user with an email and password or phone and password.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or that the
   * email/phone and password combination is wrong or that the account can only
   * be accessed via social login.
   */
  async signInWithPassword(e) {
    try {
      let t;
      if ("email" in e) {
        const { email: n, password: a, options: o } = e;
        t = await w(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: n,
            password: a,
            gotrue_meta_security: { captcha_token: o == null ? void 0 : o.captchaToken }
          },
          xform: ft
        });
      } else if ("phone" in e) {
        const { phone: n, password: a, options: o } = e;
        t = await w(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: n,
            password: a,
            gotrue_meta_security: { captcha_token: o == null ? void 0 : o.captchaToken }
          },
          xform: ft
        });
      } else
        throw new ge("You must provide either an email or phone number and a password");
      const { data: s, error: r } = t;
      return r ? { data: { user: null, session: null }, error: r } : !s || !s.session || !s.user ? { data: { user: null, session: null }, error: new fe() } : (s.session && (await this._saveSession(s.session), await this._notifyAllSubscribers("SIGNED_IN", s.session)), {
        data: Object.assign({ user: s.user, session: s.session }, s.weak_password ? { weakPassword: s.weak_password } : null),
        error: r
      });
    } catch (t) {
      if (m(t))
        return { data: { user: null, session: null }, error: t };
      throw t;
    }
  }
  /**
   * Log in an existing user via a third-party provider.
   * This method supports the PKCE flow.
   */
  async signInWithOAuth(e) {
    var t, s, r, n;
    return await this._handleProviderSignIn(e.provider, {
      redirectTo: (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo,
      scopes: (s = e.options) === null || s === void 0 ? void 0 : s.scopes,
      queryParams: (r = e.options) === null || r === void 0 ? void 0 : r.queryParams,
      skipBrowserRedirect: (n = e.options) === null || n === void 0 ? void 0 : n.skipBrowserRedirect
    });
  }
  /**
   * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
   */
  async exchangeCodeForSession(e) {
    return await this.initializePromise, this._acquireLock(-1, async () => this._exchangeCodeForSession(e));
  }
  /**
   * Signs in a user by verifying a message signed by the user's private key.
   * Only Solana supported at this time, using the Sign in with Solana standard.
   */
  async signInWithWeb3(e) {
    const { chain: t } = e;
    if (t === "solana")
      return await this.signInWithSolana(e);
    throw new Error(`@supabase/auth-js: Unsupported chain "${t}"`);
  }
  async signInWithSolana(e) {
    var t, s, r, n, a, o, l, h, c, u, d, f;
    let _, b;
    if ("message" in e)
      _ = e.message, b = e.signature;
    else {
      const { chain: p, wallet: T, statement: j, options: g } = e;
      let k;
      if (L())
        if (typeof T == "object")
          k = T;
        else {
          const E = window;
          if ("solana" in E && typeof E.solana == "object" && ("signIn" in E.solana && typeof E.solana.signIn == "function" || "signMessage" in E.solana && typeof E.solana.signMessage == "function"))
            k = E.solana;
          else
            throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof T != "object" || !(g != null && g.url))
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        k = T;
      }
      const O = new URL((t = g == null ? void 0 : g.url) !== null && t !== void 0 ? t : window.location.href);
      if ("signIn" in k && k.signIn) {
        const E = await k.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: (/* @__PURE__ */ new Date()).toISOString() }, g == null ? void 0 : g.signInWithSolana), {
          // non-overridable properties
          version: "1",
          domain: O.host,
          uri: O.href
        }), j ? { statement: j } : null));
        let P;
        if (Array.isArray(E) && E[0] && typeof E[0] == "object")
          P = E[0];
        else if (E && typeof E == "object" && "signedMessage" in E && "signature" in E)
          P = E;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
        if ("signedMessage" in P && "signature" in P && (typeof P.signedMessage == "string" || P.signedMessage instanceof Uint8Array) && P.signature instanceof Uint8Array)
          _ = typeof P.signedMessage == "string" ? P.signedMessage : new TextDecoder().decode(P.signedMessage), b = P.signature;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
      } else {
        if (!("signMessage" in k) || typeof k.signMessage != "function" || !("publicKey" in k) || typeof k != "object" || !k.publicKey || !("toBase58" in k.publicKey) || typeof k.publicKey.toBase58 != "function")
          throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
        _ = [
          `${O.host} wants you to sign in with your Solana account:`,
          k.publicKey.toBase58(),
          ...j ? ["", j, ""] : [""],
          "Version: 1",
          `URI: ${O.href}`,
          `Issued At: ${(r = (s = g == null ? void 0 : g.signInWithSolana) === null || s === void 0 ? void 0 : s.issuedAt) !== null && r !== void 0 ? r : (/* @__PURE__ */ new Date()).toISOString()}`,
          ...!((n = g == null ? void 0 : g.signInWithSolana) === null || n === void 0) && n.notBefore ? [`Not Before: ${g.signInWithSolana.notBefore}`] : [],
          ...!((a = g == null ? void 0 : g.signInWithSolana) === null || a === void 0) && a.expirationTime ? [`Expiration Time: ${g.signInWithSolana.expirationTime}`] : [],
          ...!((o = g == null ? void 0 : g.signInWithSolana) === null || o === void 0) && o.chainId ? [`Chain ID: ${g.signInWithSolana.chainId}`] : [],
          ...!((l = g == null ? void 0 : g.signInWithSolana) === null || l === void 0) && l.nonce ? [`Nonce: ${g.signInWithSolana.nonce}`] : [],
          ...!((h = g == null ? void 0 : g.signInWithSolana) === null || h === void 0) && h.requestId ? [`Request ID: ${g.signInWithSolana.requestId}`] : [],
          ...!((u = (c = g == null ? void 0 : g.signInWithSolana) === null || c === void 0 ? void 0 : c.resources) === null || u === void 0) && u.length ? [
            "Resources",
            ...g.signInWithSolana.resources.map((P) => `- ${P}`)
          ] : []
        ].join(`
`);
        const E = await k.signMessage(new TextEncoder().encode(_), "utf8");
        if (!E || !(E instanceof Uint8Array))
          throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
        b = E;
      }
    }
    try {
      const { data: p, error: T } = await w(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({ chain: "solana", message: _, signature: qr(b) }, !((d = e.options) === null || d === void 0) && d.captchaToken ? { gotrue_meta_security: { captcha_token: (f = e.options) === null || f === void 0 ? void 0 : f.captchaToken } } : null),
        xform: N
      });
      if (T)
        throw T;
      return !p || !p.session || !p.user ? {
        data: { user: null, session: null },
        error: new fe()
      } : (p.session && (await this._saveSession(p.session), await this._notifyAllSubscribers("SIGNED_IN", p.session)), { data: Object.assign({}, p), error: T });
    } catch (p) {
      if (m(p))
        return { data: { user: null, session: null }, error: p };
      throw p;
    }
  }
  async _exchangeCodeForSession(e) {
    const t = await me(this.storage, `${this.storageKey}-code-verifier`), [s, r] = (t ?? "").split("/");
    try {
      const { data: n, error: a } = await w(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: e,
          code_verifier: s
        },
        xform: N
      });
      if (await _e(this.storage, `${this.storageKey}-code-verifier`), a)
        throw a;
      return !n || !n.session || !n.user ? {
        data: { user: null, session: null, redirectType: null },
        error: new fe()
      } : (n.session && (await this._saveSession(n.session), await this._notifyAllSubscribers("SIGNED_IN", n.session)), { data: Object.assign(Object.assign({}, n), { redirectType: r ?? null }), error: a });
    } catch (n) {
      if (m(n))
        return { data: { user: null, session: null, redirectType: null }, error: n };
      throw n;
    }
  }
  /**
   * Allows signing in with an OIDC ID token. The authentication provider used
   * should be enabled and configured.
   */
  async signInWithIdToken(e) {
    try {
      const { options: t, provider: s, token: r, access_token: n, nonce: a } = e, o = await w(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: s,
          id_token: r,
          access_token: n,
          nonce: a,
          gotrue_meta_security: { captcha_token: t == null ? void 0 : t.captchaToken }
        },
        xform: N
      }), { data: l, error: h } = o;
      return h ? { data: { user: null, session: null }, error: h } : !l || !l.session || !l.user ? {
        data: { user: null, session: null },
        error: new fe()
      } : (l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("SIGNED_IN", l.session)), { data: l, error: h });
    } catch (t) {
      if (m(t))
        return { data: { user: null, session: null }, error: t };
      throw t;
    }
  }
  /**
   * Log in a user using magiclink or a one-time password (OTP).
   *
   * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
   * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
   * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or, that the account
   * can only be accessed via social login.
   *
   * Do note that you will need to configure a Whatsapp sender on Twilio
   * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
   * channel is not supported on other providers
   * at this time.
   * This method supports PKCE when an email is passed.
   */
  async signInWithOtp(e) {
    var t, s, r, n, a;
    try {
      if ("email" in e) {
        const { email: o, options: l } = e;
        let h = null, c = null;
        this.flowType === "pkce" && ([h, c] = await Q(this.storage, this.storageKey));
        const { error: u } = await w(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: o,
            data: (t = l == null ? void 0 : l.data) !== null && t !== void 0 ? t : {},
            create_user: (s = l == null ? void 0 : l.shouldCreateUser) !== null && s !== void 0 ? s : !0,
            gotrue_meta_security: { captcha_token: l == null ? void 0 : l.captchaToken },
            code_challenge: h,
            code_challenge_method: c
          },
          redirectTo: l == null ? void 0 : l.emailRedirectTo
        });
        return { data: { user: null, session: null }, error: u };
      }
      if ("phone" in e) {
        const { phone: o, options: l } = e, { data: h, error: c } = await w(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: o,
            data: (r = l == null ? void 0 : l.data) !== null && r !== void 0 ? r : {},
            create_user: (n = l == null ? void 0 : l.shouldCreateUser) !== null && n !== void 0 ? n : !0,
            gotrue_meta_security: { captcha_token: l == null ? void 0 : l.captchaToken },
            channel: (a = l == null ? void 0 : l.channel) !== null && a !== void 0 ? a : "sms"
          }
        });
        return { data: { user: null, session: null, messageId: h == null ? void 0 : h.message_id }, error: c };
      }
      throw new ge("You must provide either an email or phone number.");
    } catch (o) {
      if (m(o))
        return { data: { user: null, session: null }, error: o };
      throw o;
    }
  }
  /**
   * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
   */
  async verifyOtp(e) {
    var t, s;
    try {
      let r, n;
      "options" in e && (r = (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo, n = (s = e.options) === null || s === void 0 ? void 0 : s.captchaToken);
      const { data: a, error: o } = await w(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, e), { gotrue_meta_security: { captcha_token: n } }),
        redirectTo: r,
        xform: N
      });
      if (o)
        throw o;
      if (!a)
        throw new Error("An error occurred on token verification.");
      const l = a.session, h = a.user;
      return l != null && l.access_token && (await this._saveSession(l), await this._notifyAllSubscribers(e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)), { data: { user: h, session: l }, error: null };
    } catch (r) {
      if (m(r))
        return { data: { user: null, session: null }, error: r };
      throw r;
    }
  }
  /**
   * Attempts a single-sign on using an enterprise Identity Provider. A
   * successful SSO attempt will redirect the current page to the identity
   * provider authorization page. The redirect URL is implementation and SSO
   * protocol specific.
   *
   * You can use it by providing a SSO domain. Typically you can extract this
   * domain by asking users for their email address. If this domain is
   * registered on the Auth instance the redirect will use that organization's
   * currently active SSO Identity Provider for the login.
   *
   * If you have built an organization-specific login page, you can use the
   * organization's SSO Identity Provider UUID directly instead.
   */
  async signInWithSSO(e) {
    var t, s, r;
    try {
      let n = null, a = null;
      return this.flowType === "pkce" && ([n, a] = await Q(this.storage, this.storageKey)), await w(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? { provider_id: e.providerId } : null), "domain" in e ? { domain: e.domain } : null), { redirect_to: (s = (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo) !== null && s !== void 0 ? s : void 0 }), !((r = e == null ? void 0 : e.options) === null || r === void 0) && r.captchaToken ? { gotrue_meta_security: { captcha_token: e.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: n, code_challenge_method: a }),
        headers: this.headers,
        xform: oi
      });
    } catch (n) {
      if (m(n))
        return { data: null, error: n };
      throw n;
    }
  }
  /**
   * Sends a reauthentication OTP to the user's email or phone number.
   * Requires the user to be signed-in.
   */
  async reauthenticate() {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._reauthenticate());
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (e) => {
        const { data: { session: t }, error: s } = e;
        if (s)
          throw s;
        if (!t)
          throw new B();
        const { error: r } = await w(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: t.access_token
        });
        return { data: { user: null, session: null }, error: r };
      });
    } catch (e) {
      if (m(e))
        return { data: { user: null, session: null }, error: e };
      throw e;
    }
  }
  /**
   * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
   */
  async resend(e) {
    try {
      const t = `${this.url}/resend`;
      if ("email" in e) {
        const { email: s, type: r, options: n } = e, { error: a } = await w(this.fetch, "POST", t, {
          headers: this.headers,
          body: {
            email: s,
            type: r,
            gotrue_meta_security: { captcha_token: n == null ? void 0 : n.captchaToken }
          },
          redirectTo: n == null ? void 0 : n.emailRedirectTo
        });
        return { data: { user: null, session: null }, error: a };
      } else if ("phone" in e) {
        const { phone: s, type: r, options: n } = e, { data: a, error: o } = await w(this.fetch, "POST", t, {
          headers: this.headers,
          body: {
            phone: s,
            type: r,
            gotrue_meta_security: { captcha_token: n == null ? void 0 : n.captchaToken }
          }
        });
        return { data: { user: null, session: null, messageId: a == null ? void 0 : a.message_id }, error: o };
      }
      throw new ge("You must provide either an email or phone number and a type");
    } catch (t) {
      if (m(t))
        return { data: { user: null, session: null }, error: t };
      throw t;
    }
  }
  /**
   * Returns the session, refreshing it if necessary.
   *
   * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
   *
   * **IMPORTANT:** This method loads values directly from the storage attached
   * to the client. If that storage is based on request cookies for example,
   * the values in it may not be authentic and therefore it's strongly advised
   * against using this method and its results in such circumstances. A warning
   * will be emitted if this is detected. Use {@link #getUser()} instead.
   */
  async getSession() {
    return await this.initializePromise, await this._acquireLock(-1, async () => this._useSession(async (t) => t));
  }
  /**
   * Acquires a global lock based on the storage key.
   */
  async _acquireLock(e, t) {
    this._debug("#_acquireLock", "begin", e);
    try {
      if (this.lockAcquired) {
        const s = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), r = (async () => (await s, await t()))();
        return this.pendingInLock.push((async () => {
          try {
            await r;
          } catch {
          }
        })()), r;
      }
      return await this.lock(`lock:${this.storageKey}`, e, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = !0;
          const s = t();
          for (this.pendingInLock.push((async () => {
            try {
              await s;
            } catch {
            }
          })()), await s; this.pendingInLock.length; ) {
            const r = [...this.pendingInLock];
            await Promise.all(r), this.pendingInLock.splice(0, r.length);
          }
          return await s;
        } finally {
          this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1;
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  /**
   * Use instead of {@link #getSession} inside the library. It is
   * semantically usually what you want, as getting a session involves some
   * processing afterwards that requires only one client operating on the
   * session at once across multiple tabs or processes.
   */
  async _useSession(e) {
    this._debug("#_useSession", "begin");
    try {
      const t = await this.__loadSession();
      return await e(t);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  /**
   * NEVER USE DIRECTLY!
   *
   * Always use {@link #_useSession}.
   */
  async __loadSession() {
    this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
    try {
      let e = null;
      const t = await me(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", t), t !== null && (this._isValidSession(t) ? e = t : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !e)
        return { data: { session: null }, error: null };
      const s = e.expires_at ? e.expires_at * 1e3 - Date.now() < Ie : !1;
      if (this._debug("#__loadSession()", `session has${s ? "" : " not"} expired`, "expires_at", e.expires_at), !s) {
        if (this.storage.isServer) {
          let a = this.suppressGetSessionWarning;
          e = new Proxy(e, {
            get: (l, h, c) => (!a && h === "user" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), a = !0, this.suppressGetSessionWarning = !0), Reflect.get(l, h, c))
          });
        }
        return { data: { session: e }, error: null };
      }
      const { session: r, error: n } = await this._callRefreshToken(e.refresh_token);
      return n ? { data: { session: null }, error: n } : { data: { session: r }, error: null };
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  /**
   * Gets the current user details if there is an existing session. This method
   * performs a network request to the Supabase Auth server, so the returned
   * value is authentic and can be used to base authorization rules on.
   *
   * @param jwt Takes in an optional access token JWT. If no JWT is provided, the JWT from the current session is used.
   */
  async getUser(e) {
    return e ? await this._getUser(e) : (await this.initializePromise, await this._acquireLock(-1, async () => await this._getUser()));
  }
  async _getUser(e) {
    try {
      return e ? await w(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: e,
        xform: G
      }) : await this._useSession(async (t) => {
        var s, r, n;
        const { data: a, error: o } = t;
        if (o)
          throw o;
        return !(!((s = a.session) === null || s === void 0) && s.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new B() } : await w(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (n = (r = a.session) === null || r === void 0 ? void 0 : r.access_token) !== null && n !== void 0 ? n : void 0,
          xform: G
        });
      });
    } catch (t) {
      if (m(t))
        return $r(t) && (await this._removeSession(), await _e(this.storage, `${this.storageKey}-code-verifier`)), { data: { user: null }, error: t };
      throw t;
    }
  }
  /**
   * Updates user data for a logged in user.
   */
  async updateUser(e, t = {}) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._updateUser(e, t));
  }
  async _updateUser(e, t = {}) {
    try {
      return await this._useSession(async (s) => {
        const { data: r, error: n } = s;
        if (n)
          throw n;
        if (!r.session)
          throw new B();
        const a = r.session;
        let o = null, l = null;
        this.flowType === "pkce" && e.email != null && ([o, l] = await Q(this.storage, this.storageKey));
        const { data: h, error: c } = await w(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: t == null ? void 0 : t.emailRedirectTo,
          body: Object.assign(Object.assign({}, e), { code_challenge: o, code_challenge_method: l }),
          jwt: a.access_token,
          xform: G
        });
        if (c)
          throw c;
        return a.user = h.user, await this._saveSession(a), await this._notifyAllSubscribers("USER_UPDATED", a), { data: { user: a.user }, error: null };
      });
    } catch (s) {
      if (m(s))
        return { data: { user: null }, error: s };
      throw s;
    }
  }
  /**
   * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
   * If the refresh token or access token in the current session is invalid, an error will be thrown.
   * @param currentSession The current session that minimally contains an access token and refresh token.
   */
  async setSession(e) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._setSession(e));
  }
  async _setSession(e) {
    try {
      if (!e.access_token || !e.refresh_token)
        throw new B();
      const t = Date.now() / 1e3;
      let s = t, r = !0, n = null;
      const { payload: a } = xe(e.access_token);
      if (a.exp && (s = a.exp, r = s <= t), r) {
        const { session: o, error: l } = await this._callRefreshToken(e.refresh_token);
        if (l)
          return { data: { user: null, session: null }, error: l };
        if (!o)
          return { data: { user: null, session: null }, error: null };
        n = o;
      } else {
        const { data: o, error: l } = await this._getUser(e.access_token);
        if (l)
          throw l;
        n = {
          access_token: e.access_token,
          refresh_token: e.refresh_token,
          user: o.user,
          token_type: "bearer",
          expires_in: s - t,
          expires_at: s
        }, await this._saveSession(n), await this._notifyAllSubscribers("SIGNED_IN", n);
      }
      return { data: { user: n.user, session: n }, error: null };
    } catch (t) {
      if (m(t))
        return { data: { session: null, user: null }, error: t };
      throw t;
    }
  }
  /**
   * Returns a new session, regardless of expiry status.
   * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
   * If the current session's refresh token is invalid, an error will be thrown.
   * @param currentSession The current session. If passed in, it must contain a refresh token.
   */
  async refreshSession(e) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._refreshSession(e));
  }
  async _refreshSession(e) {
    try {
      return await this._useSession(async (t) => {
        var s;
        if (!e) {
          const { data: a, error: o } = t;
          if (o)
            throw o;
          e = (s = a.session) !== null && s !== void 0 ? s : void 0;
        }
        if (!(e != null && e.refresh_token))
          throw new B();
        const { session: r, error: n } = await this._callRefreshToken(e.refresh_token);
        return n ? { data: { user: null, session: null }, error: n } : r ? { data: { user: r.user, session: r }, error: null } : { data: { user: null, session: null }, error: null };
      });
    } catch (t) {
      if (m(t))
        return { data: { user: null, session: null }, error: t };
      throw t;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(e, t) {
    try {
      if (!L())
        throw new pe("No browser detected.");
      if (e.error || e.error_description || e.error_code)
        throw new pe(e.error_description || "Error in URL with unspecified error_description", {
          error: e.error || "unspecified_error",
          code: e.error_code || "unspecified_code"
        });
      switch (t) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new ot("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new pe("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (t === "pkce") {
        if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !e.code)
          throw new ot("No code detected.");
        const { data: j, error: g } = await this._exchangeCodeForSession(e.code);
        if (g)
          throw g;
        const k = new URL(window.location.href);
        return k.searchParams.delete("code"), window.history.replaceState(window.history.state, "", k.toString()), { data: { session: j.session, redirectType: null }, error: null };
      }
      const { provider_token: s, provider_refresh_token: r, access_token: n, refresh_token: a, expires_in: o, expires_at: l, token_type: h } = e;
      if (!n || !o || !a || !h)
        throw new pe("No session defined in URL");
      const c = Math.round(Date.now() / 1e3), u = parseInt(o);
      let d = c + u;
      l && (d = parseInt(l));
      const f = d - c;
      f * 1e3 <= ee && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${u}s`);
      const _ = d - u;
      c - _ >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", _, d, c) : c - _ < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", _, d, c);
      const { data: b, error: p } = await this._getUser(n);
      if (p)
        throw p;
      const T = {
        provider_token: s,
        provider_refresh_token: r,
        access_token: n,
        expires_in: u,
        expires_at: d,
        refresh_token: a,
        token_type: h,
        user: b.user
      };
      return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), { data: { session: T, redirectType: e.type }, error: null };
    } catch (s) {
      if (m(s))
        return { data: { session: null, redirectType: null }, error: s };
      throw s;
    }
  }
  /**
   * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
   */
  _isImplicitGrantCallback(e) {
    return !!(e.access_token || e.error_description);
  }
  /**
   * Checks if the current URL and backing storage contain parameters given by a PKCE flow
   */
  async _isPKCECallback(e) {
    const t = await me(this.storage, `${this.storageKey}-code-verifier`);
    return !!(e.code && t);
  }
  /**
   * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
   *
   * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
   * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
   *
   * If using `others` scope, no `SIGNED_OUT` event is fired!
   */
  async signOut(e = { scope: "global" }) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._signOut(e));
  }
  async _signOut({ scope: e } = { scope: "global" }) {
    return await this._useSession(async (t) => {
      var s;
      const { data: r, error: n } = t;
      if (n)
        return { error: n };
      const a = (s = r.session) === null || s === void 0 ? void 0 : s.access_token;
      if (a) {
        const { error: o } = await this.admin.signOut(a, e);
        if (o && !(Ir(o) && (o.status === 404 || o.status === 401 || o.status === 403)))
          return { error: o };
      }
      return e !== "others" && (await this._removeSession(), await _e(this.storage, `${this.storageKey}-code-verifier`)), { error: null };
    });
  }
  /**
   * Receive a notification every time an auth event happens.
   * @param callback A callback function to be invoked when an auth event happens.
   */
  onAuthStateChange(e) {
    const t = Fr(), s = {
      id: t,
      callback: e,
      unsubscribe: () => {
        this._debug("#unsubscribe()", "state change callback with id removed", t), this.stateChangeEmitters.delete(t);
      }
    };
    return this._debug("#onAuthStateChange()", "registered callback with id", t), this.stateChangeEmitters.set(t, s), (async () => (await this.initializePromise, await this._acquireLock(-1, async () => {
      this._emitInitialSession(t);
    })))(), { data: { subscription: s } };
  }
  async _emitInitialSession(e) {
    return await this._useSession(async (t) => {
      var s, r;
      try {
        const { data: { session: n }, error: a } = t;
        if (a)
          throw a;
        await ((s = this.stateChangeEmitters.get(e)) === null || s === void 0 ? void 0 : s.callback("INITIAL_SESSION", n)), this._debug("INITIAL_SESSION", "callback id", e, "session", n);
      } catch (n) {
        await ((r = this.stateChangeEmitters.get(e)) === null || r === void 0 ? void 0 : r.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", e, "error", n), console.error(n);
      }
    });
  }
  /**
   * Sends a password reset request to an email address. This method supports the PKCE flow.
   *
   * @param email The email address of the user.
   * @param options.redirectTo The URL to send the user to after they click the password reset link.
   * @param options.captchaToken Verification token received when the user completes the captcha on the site.
   */
  async resetPasswordForEmail(e, t = {}) {
    let s = null, r = null;
    this.flowType === "pkce" && ([s, r] = await Q(
      this.storage,
      this.storageKey,
      !0
      // isPasswordRecovery
    ));
    try {
      return await w(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: e,
          code_challenge: s,
          code_challenge_method: r,
          gotrue_meta_security: { captcha_token: t.captchaToken }
        },
        headers: this.headers,
        redirectTo: t.redirectTo
      });
    } catch (n) {
      if (m(n))
        return { data: null, error: n };
      throw n;
    }
  }
  /**
   * Gets all the identities linked to a user.
   */
  async getUserIdentities() {
    var e;
    try {
      const { data: t, error: s } = await this.getUser();
      if (s)
        throw s;
      return { data: { identities: (e = t.user.identities) !== null && e !== void 0 ? e : [] }, error: null };
    } catch (t) {
      if (m(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * Links an oauth identity to an existing user.
   * This method supports the PKCE flow.
   */
  async linkIdentity(e) {
    var t;
    try {
      const { data: s, error: r } = await this._useSession(async (n) => {
        var a, o, l, h, c;
        const { data: u, error: d } = n;
        if (d)
          throw d;
        const f = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
          redirectTo: (a = e.options) === null || a === void 0 ? void 0 : a.redirectTo,
          scopes: (o = e.options) === null || o === void 0 ? void 0 : o.scopes,
          queryParams: (l = e.options) === null || l === void 0 ? void 0 : l.queryParams,
          skipBrowserRedirect: !0
        });
        return await w(this.fetch, "GET", f, {
          headers: this.headers,
          jwt: (c = (h = u.session) === null || h === void 0 ? void 0 : h.access_token) !== null && c !== void 0 ? c : void 0
        });
      });
      if (r)
        throw r;
      return L() && !(!((t = e.options) === null || t === void 0) && t.skipBrowserRedirect) && window.location.assign(s == null ? void 0 : s.url), { data: { provider: e.provider, url: s == null ? void 0 : s.url }, error: null };
    } catch (s) {
      if (m(s))
        return { data: { provider: e.provider, url: null }, error: s };
      throw s;
    }
  }
  /**
   * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
   */
  async unlinkIdentity(e) {
    try {
      return await this._useSession(async (t) => {
        var s, r;
        const { data: n, error: a } = t;
        if (a)
          throw a;
        return await w(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
          headers: this.headers,
          jwt: (r = (s = n.session) === null || s === void 0 ? void 0 : s.access_token) !== null && r !== void 0 ? r : void 0
        });
      });
    } catch (t) {
      if (m(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * Generates a new JWT.
   * @param refreshToken A valid refresh token that was returned on login.
   */
  async _refreshAccessToken(e) {
    const t = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
    this._debug(t, "begin");
    try {
      const s = Date.now();
      return await Kr(async (r) => (r > 0 && await Hr(200 * Math.pow(2, r - 1)), this._debug(t, "refreshing attempt", r), await w(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: e },
        headers: this.headers,
        xform: N
      })), (r, n) => {
        const a = 200 * Math.pow(2, r);
        return n && $e(n) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + a - s < ee;
      });
    } catch (s) {
      if (this._debug(t, "error", s), m(s))
        return { data: { session: null, user: null }, error: s };
      throw s;
    } finally {
      this._debug(t, "end");
    }
  }
  _isValidSession(e) {
    return typeof e == "object" && e !== null && "access_token" in e && "refresh_token" in e && "expires_at" in e;
  }
  async _handleProviderSignIn(e, t) {
    const s = await this._getUrlForProvider(`${this.url}/authorize`, e, {
      redirectTo: t.redirectTo,
      scopes: t.scopes,
      queryParams: t.queryParams
    });
    return this._debug("#_handleProviderSignIn()", "provider", e, "options", t, "url", s), L() && !t.skipBrowserRedirect && window.location.assign(s), { data: { provider: e, url: s }, error: null };
  }
  /**
   * Recovers the session from LocalStorage and refreshes the token
   * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
   */
  async _recoverAndRefresh() {
    var e;
    const t = "#_recoverAndRefresh()";
    this._debug(t, "begin");
    try {
      const s = await me(this.storage, this.storageKey);
      if (this._debug(t, "session from storage", s), !this._isValidSession(s)) {
        this._debug(t, "session is not valid"), s !== null && await this._removeSession();
        return;
      }
      const r = ((e = s.expires_at) !== null && e !== void 0 ? e : 1 / 0) * 1e3 - Date.now() < Ie;
      if (this._debug(t, `session has${r ? "" : " not"} expired with margin of ${Ie}s`), r) {
        if (this.autoRefreshToken && s.refresh_token) {
          const { error: n } = await this._callRefreshToken(s.refresh_token);
          n && (console.error(n), $e(n) || (this._debug(t, "refresh failed with a non-retryable error, removing the session", n), await this._removeSession()));
        }
      } else
        await this._notifyAllSubscribers("SIGNED_IN", s);
    } catch (s) {
      this._debug(t, "error", s), console.error(s);
      return;
    } finally {
      this._debug(t, "end");
    }
  }
  async _callRefreshToken(e) {
    var t, s;
    if (!e)
      throw new B();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    const r = `#_callRefreshToken(${e.substring(0, 5)}...)`;
    this._debug(r, "begin");
    try {
      this.refreshingDeferred = new Ae();
      const { data: n, error: a } = await this._refreshAccessToken(e);
      if (a)
        throw a;
      if (!n.session)
        throw new B();
      await this._saveSession(n.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", n.session);
      const o = { session: n.session, error: null };
      return this.refreshingDeferred.resolve(o), o;
    } catch (n) {
      if (this._debug(r, "error", n), m(n)) {
        const a = { session: null, error: n };
        return $e(n) || await this._removeSession(), (t = this.refreshingDeferred) === null || t === void 0 || t.resolve(a), a;
      }
      throw (s = this.refreshingDeferred) === null || s === void 0 || s.reject(n), n;
    } finally {
      this.refreshingDeferred = null, this._debug(r, "end");
    }
  }
  async _notifyAllSubscribers(e, t, s = !0) {
    const r = `#_notifyAllSubscribers(${e})`;
    this._debug(r, "begin", t, `broadcast = ${s}`);
    try {
      this.broadcastChannel && s && this.broadcastChannel.postMessage({ event: e, session: t });
      const n = [], a = Array.from(this.stateChangeEmitters.values()).map(async (o) => {
        try {
          await o.callback(e, t);
        } catch (l) {
          n.push(l);
        }
      });
      if (await Promise.all(a), n.length > 0) {
        for (let o = 0; o < n.length; o += 1)
          console.error(n[o]);
        throw n[0];
      }
    } finally {
      this._debug(r, "end");
    }
  }
  /**
   * set currentSession and currentUser
   * process to _startAutoRefreshToken if possible
   */
  async _saveSession(e) {
    this._debug("#_saveSession()", e), this.suppressGetSessionWarning = !0, await Gt(this.storage, this.storageKey, e);
  }
  async _removeSession() {
    this._debug("#_removeSession()"), await _e(this.storage, this.storageKey), await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  /**
   * Removes any registered visibilitychange callback.
   *
   * {@see #startAutoRefresh}
   * {@see #stopAutoRefresh}
   */
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const e = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      e && L() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", e);
    } catch (t) {
      console.error("removing visibilitychange callback failed", t);
    }
  }
  /**
   * This is the private implementation of {@link #startAutoRefresh}. Use this
   * within the library.
   */
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const e = setInterval(() => this._autoRefreshTokenTick(), ee);
    this.autoRefreshTicker = e, e && typeof e == "object" && typeof e.unref == "function" ? e.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(e), setTimeout(async () => {
      await this.initializePromise, await this._autoRefreshTokenTick();
    }, 0);
  }
  /**
   * This is the private implementation of {@link #stopAutoRefresh}. Use this
   * within the library.
   */
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const e = this.autoRefreshTicker;
    this.autoRefreshTicker = null, e && clearInterval(e);
  }
  /**
   * Starts an auto-refresh process in the background. The session is checked
   * every few seconds. Close to the time of expiration a process is started to
   * refresh the session. If refreshing fails it will be retried for as long as
   * necessary.
   *
   * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
   * to call this function, it will be called for you.
   *
   * On browsers the refresh process works only when the tab/window is in the
   * foreground to conserve resources as well as prevent race conditions and
   * flooding auth with requests. If you call this method any managed
   * visibility change callback will be removed and you must manage visibility
   * changes on your own.
   *
   * On non-browser platforms the refresh process works *continuously* in the
   * background, which may not be desirable. You should hook into your
   * platform's foreground indication mechanism and call these methods
   * appropriately to conserve resources.
   *
   * {@see #stopAutoRefresh}
   */
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  /**
   * Stops an active auto refresh process running in the background (if any).
   *
   * If you call this method any managed visibility change callback will be
   * removed and you must manage visibility changes on your own.
   *
   * See {@link #startAutoRefresh} for more details.
   */
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  /**
   * Runs the auto refresh token tick.
   */
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const e = Date.now();
          try {
            return await this._useSession(async (t) => {
              const { data: { session: s } } = t;
              if (!s || !s.refresh_token || !s.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const r = Math.floor((s.expires_at * 1e3 - e) / ee);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${r} ticks, a tick lasts ${ee}ms, refresh threshold is ${Ge} ticks`), r <= Ge && await this._callRefreshToken(s.refresh_token);
            });
          } catch (t) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", t);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (e) {
      if (e.isAcquireTimeout || e instanceof Ft)
        this._debug("auto refresh token tick lock not available");
      else
        throw e;
    }
  }
  /**
   * Registers callbacks on the browser / platform, which in-turn run
   * algorithms when the browser window/tab are in foreground. On non-browser
   * platforms it assumes always foreground.
   */
  async _handleVisibilityChange() {
    if (this._debug("#_handleVisibilityChange()"), !L() || !(window != null && window.addEventListener))
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1), window == null || window.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0);
    } catch (e) {
      console.error("_handleVisibilityChange", e);
    }
  }
  /**
   * Callback registered with `window.addEventListener('visibilitychange')`.
   */
  async _onVisibilityChanged(e) {
    const t = `#_onVisibilityChanged(${e})`;
    this._debug(t, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), e || (await this.initializePromise, await this._acquireLock(-1, async () => {
      if (document.visibilityState !== "visible") {
        this._debug(t, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
        return;
      }
      await this._recoverAndRefresh();
    }))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh();
  }
  /**
   * Generates the relevant login URL for a third-party provider.
   * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param options.scopes A space-separated list of scopes granted to the OAuth application.
   * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
   */
  async _getUrlForProvider(e, t, s) {
    const r = [`provider=${encodeURIComponent(t)}`];
    if (s != null && s.redirectTo && r.push(`redirect_to=${encodeURIComponent(s.redirectTo)}`), s != null && s.scopes && r.push(`scopes=${encodeURIComponent(s.scopes)}`), this.flowType === "pkce") {
      const [n, a] = await Q(this.storage, this.storageKey), o = new URLSearchParams({
        code_challenge: `${encodeURIComponent(n)}`,
        code_challenge_method: `${encodeURIComponent(a)}`
      });
      r.push(o.toString());
    }
    if (s != null && s.queryParams) {
      const n = new URLSearchParams(s.queryParams);
      r.push(n.toString());
    }
    return s != null && s.skipBrowserRedirect && r.push(`skip_http_redirect=${s.skipBrowserRedirect}`), `${e}?${r.join("&")}`;
  }
  async _unenroll(e) {
    try {
      return await this._useSession(async (t) => {
        var s;
        const { data: r, error: n } = t;
        return n ? { data: null, error: n } : await w(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
          headers: this.headers,
          jwt: (s = r == null ? void 0 : r.session) === null || s === void 0 ? void 0 : s.access_token
        });
      });
    } catch (t) {
      if (m(t))
        return { data: null, error: t };
      throw t;
    }
  }
  async _enroll(e) {
    try {
      return await this._useSession(async (t) => {
        var s, r;
        const { data: n, error: a } = t;
        if (a)
          return { data: null, error: a };
        const o = Object.assign({ friendly_name: e.friendlyName, factor_type: e.factorType }, e.factorType === "phone" ? { phone: e.phone } : { issuer: e.issuer }), { data: l, error: h } = await w(this.fetch, "POST", `${this.url}/factors`, {
          body: o,
          headers: this.headers,
          jwt: (s = n == null ? void 0 : n.session) === null || s === void 0 ? void 0 : s.access_token
        });
        return h ? { data: null, error: h } : (e.factorType === "totp" && (!((r = l == null ? void 0 : l.totp) === null || r === void 0) && r.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`), { data: l, error: null });
      });
    } catch (t) {
      if (m(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * {@see GoTrueMFAApi#verify}
   */
  async _verify(e) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (t) => {
          var s;
          const { data: r, error: n } = t;
          if (n)
            return { data: null, error: n };
          const { data: a, error: o } = await w(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
            body: { code: e.code, challenge_id: e.challengeId },
            headers: this.headers,
            jwt: (s = r == null ? void 0 : r.session) === null || s === void 0 ? void 0 : s.access_token
          });
          return o ? { data: null, error: o } : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + a.expires_in }, a)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a), { data: a, error: o });
        });
      } catch (t) {
        if (m(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challenge}
   */
  async _challenge(e) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (t) => {
          var s;
          const { data: r, error: n } = t;
          return n ? { data: null, error: n } : await w(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
            body: { channel: e.channel },
            headers: this.headers,
            jwt: (s = r == null ? void 0 : r.session) === null || s === void 0 ? void 0 : s.access_token
          });
        });
      } catch (t) {
        if (m(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challengeAndVerify}
   */
  async _challengeAndVerify(e) {
    const { data: t, error: s } = await this._challenge({
      factorId: e.factorId
    });
    return s ? { data: null, error: s } : await this._verify({
      factorId: e.factorId,
      challengeId: t.id,
      code: e.code
    });
  }
  /**
   * {@see GoTrueMFAApi#listFactors}
   */
  async _listFactors() {
    const { data: { user: e }, error: t } = await this.getUser();
    if (t)
      return { data: null, error: t };
    const s = (e == null ? void 0 : e.factors) || [], r = s.filter((a) => a.factor_type === "totp" && a.status === "verified"), n = s.filter((a) => a.factor_type === "phone" && a.status === "verified");
    return {
      data: {
        all: s,
        totp: r,
        phone: n
      },
      error: null
    };
  }
  /**
   * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  async _getAuthenticatorAssuranceLevel() {
    return this._acquireLock(-1, async () => await this._useSession(async (e) => {
      var t, s;
      const { data: { session: r }, error: n } = e;
      if (n)
        return { data: null, error: n };
      if (!r)
        return {
          data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
          error: null
        };
      const { payload: a } = xe(r.access_token);
      let o = null;
      a.aal && (o = a.aal);
      let l = o;
      ((s = (t = r.user.factors) === null || t === void 0 ? void 0 : t.filter((u) => u.status === "verified")) !== null && s !== void 0 ? s : []).length > 0 && (l = "aal2");
      const c = a.amr || [];
      return { data: { currentLevel: o, nextLevel: l, currentAuthenticationMethods: c }, error: null };
    }));
  }
  async fetchJwk(e, t = { keys: [] }) {
    let s = t.keys.find((a) => a.kid === e);
    if (s || (s = this.jwks.keys.find((a) => a.kid === e), s && this.jwks_cached_at + Pr > Date.now()))
      return s;
    const { data: r, error: n } = await w(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
      headers: this.headers
    });
    if (n)
      throw n;
    if (!r.keys || r.keys.length === 0)
      throw new le("JWKS is empty");
    if (this.jwks = r, this.jwks_cached_at = Date.now(), s = r.keys.find((a) => a.kid === e), !s)
      throw new le("No matching signing key found in JWKS");
    return s;
  }
  /**
   * @experimental This method may change in future versions.
   * @description Gets the claims from a JWT. If the JWT is symmetric JWTs, it will call getUser() to verify against the server. If the JWT is asymmetric, it will be verified against the JWKS using the WebCrypto API.
   */
  async getClaims(e, t = { keys: [] }) {
    try {
      let s = e;
      if (!s) {
        const { data: f, error: _ } = await this.getSession();
        if (_ || !f.session)
          return { data: null, error: _ };
        s = f.session.access_token;
      }
      const { header: r, payload: n, signature: a, raw: { header: o, payload: l } } = xe(s);
      if (ei(n.exp), !r.kid || r.alg === "HS256" || !("crypto" in globalThis && "subtle" in globalThis.crypto)) {
        const { error: f } = await this.getUser(s);
        if (f)
          throw f;
        return {
          data: {
            claims: n,
            header: r,
            signature: a
          },
          error: null
        };
      }
      const h = ti(r.alg), c = await this.fetchJwk(r.kid, t), u = await crypto.subtle.importKey("jwk", c, h, !0, [
        "verify"
      ]);
      if (!await crypto.subtle.verify(h, u, a, Br(`${o}.${l}`)))
        throw new le("Invalid JWT signature");
      return {
        data: {
          claims: n,
          header: r,
          signature: a
        },
        error: null
      };
    } catch (s) {
      if (m(s))
        return { data: null, error: s };
      throw s;
    }
  }
}
he.nextInstanceID = 0;
const vi = he;
class yi extends vi {
  constructor(e) {
    super(e);
  }
}
var wi = globalThis && globalThis.__awaiter || function(i, e, t, s) {
  function r(n) {
    return n instanceof t ? n : new t(function(a) {
      a(n);
    });
  }
  return new (t || (t = Promise))(function(n, a) {
    function o(c) {
      try {
        h(s.next(c));
      } catch (u) {
        a(u);
      }
    }
    function l(c) {
      try {
        h(s.throw(c));
      } catch (u) {
        a(u);
      }
    }
    function h(c) {
      c.done ? n(c.value) : r(c.value).then(o, l);
    }
    h((s = s.apply(i, e || [])).next());
  });
};
class bi {
  /**
   * Create a new client for use in the browser.
   * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
   * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
   * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
   * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
   * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
   * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
   * @param options.realtime Options passed along to realtime-js constructor.
   * @param options.global.fetch A custom fetch implementation.
   * @param options.global.headers Any additional headers to send with each network request.
   */
  constructor(e, t, s) {
    var r, n, a;
    if (this.supabaseUrl = e, this.supabaseKey = t, !e)
      throw new Error("supabaseUrl is required.");
    if (!t)
      throw new Error("supabaseKey is required.");
    const o = Tr(e), l = new URL(o);
    this.realtimeUrl = new URL("realtime/v1", l), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", l), this.storageUrl = new URL("storage/v1", l), this.functionsUrl = new URL("functions/v1", l);
    const h = `sb-${l.hostname.split(".")[0]}-auth-token`, c = {
      db: mr,
      realtime: vr,
      auth: Object.assign(Object.assign({}, _r), { storageKey: h }),
      global: pr
    }, u = Er(s ?? {}, c);
    this.storageKey = (r = u.auth.storageKey) !== null && r !== void 0 ? r : "", this.headers = (n = u.global.headers) !== null && n !== void 0 ? n : {}, u.accessToken ? (this.accessToken = u.accessToken, this.auth = new Proxy({}, {
      get: (d, f) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(f)} is not possible`);
      }
    })) : this.auth = this._initSupabaseAuthClient((a = u.auth) !== null && a !== void 0 ? a : {}, this.headers, u.global.fetch), this.fetch = kr(t, this._getAccessToken.bind(this), u.global.fetch), this.realtime = this._initRealtimeClient(Object.assign({ headers: this.headers, accessToken: this._getAccessToken.bind(this) }, u.realtime)), this.rest = new Ns(new URL("rest/v1", l).href, {
      headers: this.headers,
      schema: u.db.schema,
      fetch: this.fetch
    }), u.accessToken || this._listenForAuthEvents();
  }
  /**
   * Supabase Functions allows you to deploy and invoke edge functions.
   */
  get functions() {
    return new gs(this.functionsUrl.href, {
      headers: this.headers,
      customFetch: this.fetch
    });
  }
  /**
   * Supabase Storage allows you to manage user-generated content, such as photos or videos.
   */
  get storage() {
    return new dr(this.storageUrl.href, this.headers, this.fetch);
  }
  /**
   * Perform a query on a table or a view.
   *
   * @param relation - The table or view name to query
   */
  from(e) {
    return this.rest.from(e);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.schema
  /**
   * Select a schema to query or perform an function (rpc) call.
   *
   * The schema needs to be on the list of exposed schemas inside Supabase.
   *
   * @param schema - The schema to query
   */
  schema(e) {
    return this.rest.schema(e);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.rpc
  /**
   * Perform a function call.
   *
   * @param fn - The function name to call
   * @param args - The arguments to pass to the function call
   * @param options - Named parameters
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   * @param options.get - When set to `true`, the function will be called with
   * read-only access mode.
   * @param options.count - Count algorithm to use to count rows returned by the
   * function. Only applicable for [set-returning
   * functions](https://www.postgresql.org/docs/current/functions-srf.html).
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  rpc(e, t = {}, s = {}) {
    return this.rest.rpc(e, t, s);
  }
  /**
   * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
   *
   * @param {string} name - The name of the Realtime channel.
   * @param {Object} opts - The options to pass to the Realtime channel.
   *
   */
  channel(e, t = { config: {} }) {
    return this.realtime.channel(e, t);
  }
  /**
   * Returns all Realtime channels.
   */
  getChannels() {
    return this.realtime.getChannels();
  }
  /**
   * Unsubscribes and removes Realtime channel from Realtime client.
   *
   * @param {RealtimeChannel} channel - The name of the Realtime channel.
   *
   */
  removeChannel(e) {
    return this.realtime.removeChannel(e);
  }
  /**
   * Unsubscribes and removes all Realtime channels from Realtime client.
   */
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  _getAccessToken() {
    var e, t;
    return wi(this, void 0, void 0, function* () {
      if (this.accessToken)
        return yield this.accessToken();
      const { data: s } = yield this.auth.getSession();
      return (t = (e = s.session) === null || e === void 0 ? void 0 : e.access_token) !== null && t !== void 0 ? t : null;
    });
  }
  _initSupabaseAuthClient({ autoRefreshToken: e, persistSession: t, detectSessionInUrl: s, storage: r, storageKey: n, flowType: a, lock: o, debug: l }, h, c) {
    const u = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new yi({
      url: this.authUrl.href,
      headers: Object.assign(Object.assign({}, u), h),
      storageKey: n,
      autoRefreshToken: e,
      persistSession: t,
      detectSessionInUrl: s,
      storage: r,
      flowType: a,
      lock: o,
      debug: l,
      fetch: c,
      // auth checks if there is a custom authorizaiton header using this flag
      // so it knows whether to return an error when getUser is called with no session
      hasCustomAuthorizationHeader: "Authorization" in this.headers
    });
  }
  _initRealtimeClient(e) {
    return new Xs(this.realtimeUrl.href, Object.assign(Object.assign({}, e), { params: Object.assign({ apikey: this.supabaseKey }, e == null ? void 0 : e.params) }));
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((t, s) => {
      this._handleTokenChanged(t, "CLIENT", s == null ? void 0 : s.access_token);
    });
  }
  _handleTokenChanged(e, t, s) {
    (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") && this.changedAccessToken !== s ? this.changedAccessToken = s : e === "SIGNED_OUT" && (this.realtime.setAuth(), t == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0);
  }
}
const ki = (i, e, t) => new bi(i, e, t);
class Si {
  constructor() {
    this.intentPatterns = /* @__PURE__ */ new Map(), this.entityPatterns = /* @__PURE__ */ new Map(), this.initializePatterns();
  }
  initializePatterns() {
    this.intentPatterns.set("greeting", [
      /^(привет|hello|ciao|hi|добро пожаловать|buongiorno)/i,
      /^(здравствуйте|good morning|salve)/i
    ]), this.intentPatterns.set("book_session", [
      /(хочу|want|voglio).*(забронировать|book|prenotare)/i,
      /(бронь|booking|prenotazione)/i,
      /(участвовать|participate|partecipare)/i
    ]), this.intentPatterns.set("check_availability", [
      /(доступно|available|disponibile)/i,
      /(свободно|free|libero)/i,
      /(можно|possible|possibile)/i
    ]), this.intentPatterns.set("get_info", [
      /(информация|information|informazioni)/i,
      /(подробнее|details|dettagli)/i,
      /(что включено|what's included|cosa include)/i
    ]), this.intentPatterns.set("help", [
      /(помощь|help|aiuto)/i,
      /(не понимаю|don't understand|non capisco)/i
    ]), this.entityPatterns.set("email", /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/), this.entityPatterns.set("phone", /(\+\d{1,3}[-.\s]?)?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}/), this.entityPatterns.set("date", /(\d{1,2}[\.\/\-]\d{1,2}(?:[\.\/\-]\d{2,4})?)|завтра|tomorrow|domani/i), this.entityPatterns.set("number", /\b(\d+|один|два|три|четыре|one|two|three|four|uno|due|tre|quattro)\b/i), this.entityPatterns.set("time", /(утр|morning|mattina|днем|afternoon|pomeriggio)/i);
  }
  async classifyIntent(e) {
    const t = e.toLowerCase().trim();
    let s = { name: "unknown", confidence: 0, entities: [] };
    for (const [r, n] of this.intentPatterns)
      for (const a of n)
        if (a.test(t)) {
          const o = this.calculateConfidence(t, a);
          o > s.confidence && (s = {
            name: r,
            confidence: o,
            entities: this.extractEntities(e)
          });
        }
    return s;
  }
  extractEntities(e) {
    const t = [];
    for (const [s, r] of this.entityPatterns) {
      const n = e.match(r);
      n && n.forEach((a) => {
        t.push({
          type: s,
          value: this.normalizeEntityValue(s, a),
          confidence: 0.9,
          raw: a
        });
      });
    }
    return t;
  }
  normalizeEntityValue(e, t) {
    switch (e) {
      case "number":
        return this.convertNumberToDigit(t);
      case "date":
        return this.normalizeDateValue(t);
      case "time":
        return this.normalizeTimeValue(t);
      default:
        return t.trim();
    }
  }
  convertNumberToDigit(e) {
    return {
      один: "1",
      one: "1",
      uno: "1",
      два: "2",
      two: "2",
      due: "2",
      три: "3",
      three: "3",
      tre: "3",
      четыре: "4",
      four: "4",
      quattro: "4"
    }[e.toLowerCase()] || e;
  }
  normalizeDateValue(e) {
    const t = /* @__PURE__ */ new Date(), s = new Date(t);
    if (s.setDate(t.getDate() + 1), /завтра|tomorrow|domani/i.test(e))
      return s.toISOString().split("T")[0];
    const r = e.match(/(\d{1,2})[\.\/\-](\d{1,2})(?:[\.\/\-](\d{2,4}))?/);
    if (r) {
      const n = r[1].padStart(2, "0"), a = r[2].padStart(2, "0");
      return `${r[3] || t.getFullYear().toString()}-${a}-${n}`;
    }
    return e;
  }
  normalizeTimeValue(e) {
    return /утр|morning|mattina/i.test(e) ? "morning" : /днем|afternoon|pomeriggio/i.test(e) ? "afternoon" : e;
  }
  calculateConfidence(e, t) {
    const s = e.match(t);
    if (!s)
      return 0;
    const r = s[0].length, n = e.length;
    return Math.min(0.95, r / n * 2);
  }
  // Extract specific entity types
  extractDate(e) {
    const s = this.extractEntities(e).find((r) => r.type === "date");
    if (s) {
      const r = new Date(s.value);
      return isNaN(r.getTime()) ? null : r;
    }
    return null;
  }
  extractParticipantCount(e) {
    const s = this.extractEntities(e).find((r) => r.type === "number");
    if (s) {
      const r = parseInt(s.value);
      return r >= 1 && r <= 4 ? r : null;
    }
    return null;
  }
  extractTimeSlot(e) {
    const s = this.extractEntities(e).find((r) => r.type === "time");
    return (s == null ? void 0 : s.value) || null;
  }
  extractContactInfo(e) {
    const t = this.extractEntities(e), s = {}, r = t.find((a) => a.type === "email");
    r && (s.email = r.value);
    const n = t.find((a) => a.type === "phone");
    return n && (s.phone = n.value), s;
  }
}
var v = /* @__PURE__ */ ((i) => (i.WELCOME = "welcome", i.COLLECTING_DATE = "collecting_date", i.COLLECTING_TIME = "collecting_time", i.COLLECTING_PARTICIPANTS = "collecting_participants", i.CHECKING_AVAILABILITY = "checking_availability", i.COLLECTING_CONTACT = "collecting_contact", i.CONFIRMING_BOOKING = "confirming_booking", i.COMPLETED = "completed", i.ERROR_RECOVERY = "error_recovery", i.PROVIDING_INFO = "providing_info", i))(v || {});
class Ti {
  constructor() {
    this.templates = {
      welcome: {
        ru: [
          "Привет! Добро пожаловать в Garda Racing Yacht Club! 🏆 Готов к адреналину на воде?",
          "Ciao! Хочешь участвовать в захватывающих регатах на озере Гарда?",
          "Привет! Мы проводим зрелищные регаты каждый день. Интересно?"
        ],
        en: [
          "Hello! Welcome to Garda Racing Yacht Club! 🏆 Ready for some adrenaline on the water?",
          "Hi there! Want to join our exciting yacht regattas on Lake Garda?",
          "Welcome! We run spectacular regattas every day. Interested?"
        ],
        it: [
          "Ciao! Benvenuto al Garda Racing Yacht Club! 🏆 Pronto per l'adrenalina sull'acqua?",
          "Salve! Vuoi partecipare alle nostre emozionanti regate sul Lago di Garda?",
          "Benvenuto! Organizziamo regate spettacolari ogni giorno. Ti interessa?"
        ]
      },
      ask_date: {
        ru: "На какую дату хотите забронировать? (например: завтра, 15.05, или конкретную дату)",
        en: "What date would you like to book? (e.g., tomorrow, 15.05, or specific date)",
        it: "Per quale data vorresti prenotare? (es: domani, 15.05, o data specifica)"
      },
      ask_time: {
        ru: `Выберите время:
🌅 Утренняя сессия (9:00)
☀️ Дневная сессия (13:00)`,
        en: `Choose your time:
🌅 Morning session (9:00)
☀️ Afternoon session (13:00)`,
        it: `Scegli l'orario:
🌅 Sessione mattutina (9:00)
☀️ Sessione pomeridiana (13:00)`
      },
      ask_participants: {
        ru: "Сколько участников? (максимум 4 человека)",
        en: "How many participants? (maximum 4 people)",
        it: "Quanti partecipanti? (massimo 4 persone)"
      },
      availability_check: {
        ru: "Проверяю доступность... ⏳",
        en: "Checking availability... ⏳",
        it: "Controllo disponibilità... ⏳"
      },
      available_session: {
        ru: "Отлично! {date} в {timeSlot} доступно. Стоимость €199 на человека. Продолжаем?",
        en: "Great! {date} at {timeSlot} is available. Cost €199 per person. Shall we continue?",
        it: "Perfetto! {date} alle {timeSlot} è disponibile. Costo €199 a persona. Continuiamo?"
      },
      unavailable_session: {
        ru: "К сожалению, {date} в {timeSlot} занято. Могу предложить альтернативы:",
        en: "Unfortunately, {date} at {timeSlot} is booked. I can suggest alternatives:",
        it: "Purtroppo {date} alle {timeSlot} è occupato. Posso suggerire alternative:"
      },
      ask_contact: {
        ru: "Для завершения брони нужны ваши контакты. Укажите email и телефон:",
        en: "To complete the booking, I need your contact details. Please provide email and phone:",
        it: "Per completare la prenotazione, ho bisogno dei tuoi contatti. Fornisci email e telefono:"
      },
      booking_confirmation: {
        ru: `Отлично! Бронь создана:
📅 Дата: {date}
⏰ Время: {timeSlot}
👥 Участники: {participants}
💰 Сумма: €{totalAmount}
🎫 Номер брони: {bookingReference}

Увидимся на воде! 🌊`,
        en: `Excellent! Booking created:
📅 Date: {date}
⏰ Time: {timeSlot}
👥 Participants: {participants}
💰 Amount: €{totalAmount}
🎫 Booking reference: {bookingReference}

See you on the water! 🌊`,
        it: `Eccellente! Prenotazione creata:
📅 Data: {date}
⏰ Orario: {timeSlot}
👥 Partecipanti: {participants}
💰 Importo: €{totalAmount}
🎫 Riferimento prenotazione: {bookingReference}

Ci vediamo sull'acqua! 🌊`
      },
      regatta_info: {
        ru: `🏆 Garda Racing Yacht Club - Регаты на озере Гарда

🚤 Что включено:
• Профессиональный шкипер и экипаж
• Участие в настоящей регате на яхтах J/70
• Медали для всех участников
• Фото и видео с гонки
• Бар после регаты
• Страховка жизни на борту

💰 Стоимость: €199 на человека
📅 Сезон: апрель - октябрь
⏰ Сессии: утренняя (9:00) и дневная (13:00)
👥 До 4 участников на яхту

Адреналин, общение и спортивный опыт гарантированы!`,
        en: `🏆 Garda Racing Yacht Club - Lake Garda Regattas

🚤 What's included:
• Professional skipper and crew
• Real regatta participation on J/70 yachts
• Medals for all participants
• Photos and videos from the race
• Post-race bar
• Life insurance on board

💰 Cost: €199 per person
📅 Season: April - October
⏰ Sessions: morning (9:00) and afternoon (13:00)
👥 Up to 4 participants per yacht

Adrenaline, socializing, and sporting experience guaranteed!`,
        it: `🏆 Garda Racing Yacht Club - Regate sul Lago di Garda

🚤 Cosa include:
• Skipper professionale ed equipaggio
• Partecipazione a vera regata su yacht J/70
• Medaglie per tutti i partecipanti
• Foto e video dalla gara
• Bar post-regata
• Assicurazione vita a bordo

💰 Costo: €199 a persona
📅 Stagione: aprile - ottobre
⏰ Sessioni: mattutina (9:00) e pomeridiana (13:00)
👥 Fino a 4 partecipanti per yacht

Adrenalina, socializzazione ed esperienza sportiva garantite!`
      },
      error_fallback: {
        ru: "Передал менеджеру, скоро свяжемся!",
        en: "Passed to manager, we'll contact you soon!",
        it: "Passato al manager, ti contatteremo presto!"
      },
      misunderstanding: {
        ru: [
          "Не совсем понял. Можете переформулировать?",
          "Извините, не понял. Попробуйте еще раз?",
          "Можете сказать по-другому?"
        ],
        en: [
          "I didn't quite understand. Could you rephrase?",
          "Sorry, I didn't get that. Try again?",
          "Could you say that differently?"
        ],
        it: [
          "Non ho capito bene. Potresti riformulare?",
          "Scusa, non ho capito. Riprova?",
          "Potresti dirlo diversamente?"
        ]
      },
      invalid_date: {
        ru: "Пожалуйста, укажите дату в формате ДД.ММ или 'завтра'",
        en: "Please specify date in DD.MM format or 'tomorrow'",
        it: "Per favore specifica la data in formato GG.MM o 'domani'"
      },
      invalid_participants: {
        ru: "Количество участников должно быть от 1 до 4",
        en: "Number of participants must be between 1 and 4",
        it: "Il numero di partecipanti deve essere tra 1 e 4"
      },
      season_closed: {
        ru: "Сезон регат проходит с апреля по октябрь. Выберите дату в этом периоде.",
        en: "Regatta season runs from April to October. Please choose a date in this period.",
        it: "La stagione delle regate va da aprile a ottobre. Scegli una data in questo periodo."
      }
    };
  }
  getMessage(e, t = "ru", s) {
    var a;
    const r = (a = this.templates[e]) == null ? void 0 : a[t];
    if (!r)
      return this.templates.error_fallback[t] || "Error occurred";
    let n;
    return Array.isArray(r) ? n = r[Math.floor(Math.random() * r.length)] : n = r, s && Object.keys(s).forEach((o) => {
      n = n.replace(new RegExp(`{${o}}`, "g"), s[o]);
    }), n;
  }
  getQuickReplies(e, t = "ru") {
    var r;
    return ((r = {
      [v.WELCOME]: {
        ru: ["Забронировать", "Подробнее", "Цены"],
        en: ["Book now", "More info", "Prices"],
        it: ["Prenota", "Più info", "Prezzi"]
      },
      [v.COLLECTING_TIME]: {
        ru: ["Утром", "Днем"],
        en: ["Morning", "Afternoon"],
        it: ["Mattina", "Pomeriggio"]
      },
      [v.COLLECTING_PARTICIPANTS]: {
        ru: ["1 человек", "2 человека", "3 человека", "4 человека"],
        en: ["1 person", "2 people", "3 people", "4 people"],
        it: ["1 persona", "2 persone", "3 persone", "4 persone"]
      }
    }[e]) == null ? void 0 : r[t]) || [];
  }
  formatTimeSlot(e, t = "ru") {
    var r;
    return ((r = {
      morning: {
        ru: "утром (9:00)",
        en: "morning (9:00)",
        it: "mattina (9:00)"
      },
      afternoon: {
        ru: "днем (13:00)",
        en: "afternoon (13:00)",
        it: "pomeriggio (13:00)"
      }
    }[e]) == null ? void 0 : r[t]) || e;
  }
  formatDate(e, t = "ru") {
    const s = {
      day: "numeric",
      month: "long",
      weekday: "long"
    }, r = t === "ru" ? "ru-RU" : t === "it" ? "it-IT" : "en-US";
    return e.toLocaleDateString(r, s);
  }
}
class Ei {
  constructor(e) {
    this.conversations = /* @__PURE__ */ new Map(), this.config = e, this.nlp = new Si(), this.responseGenerator = new Ti(), this.supabase = ki(
      {}.VITE_SUPABASE_URL,
      {}.VITE_SUPABASE_ANON_KEY
    );
  }
  async processMessage(e, t, s) {
    try {
      const r = this.getOrCreateContext(e, s);
      r.lastMessage = t;
      const n = await this.nlp.classifyIntent(t);
      this.logAnalytics("intent_recognized", e, { intent: n.name, confidence: n.confidence });
      const a = await this.handleMessage(r, t, n);
      return this.conversations.set(e, r), a;
    } catch (r) {
      return console.error("Chatbot error:", r), this.logAnalytics("error_occurred", e, { error: r.message }), {
        message: this.responseGenerator.getMessage("error_fallback", this.config.defaultLanguage),
        metadata: { nextState: v.ERROR_RECOVERY }
      };
    }
  }
  async handleMessage(e, t, s) {
    switch (e.state) {
      case v.WELCOME:
        return this.handleWelcome(e, s);
      case v.COLLECTING_DATE:
        return this.handleDateCollection(e, t);
      case v.COLLECTING_TIME:
        return this.handleTimeCollection(e, t);
      case v.COLLECTING_PARTICIPANTS:
        return this.handleParticipantCollection(e, t);
      case v.CHECKING_AVAILABILITY:
        return this.handleAvailabilityCheck(e);
      case v.COLLECTING_CONTACT:
        return this.handleContactCollection(e, t);
      case v.CONFIRMING_BOOKING:
        return this.handleBookingConfirmation(e);
      default:
        return this.handleUnknownState(e);
    }
  }
  handleWelcome(e, t) {
    return t.name === "get_info" ? {
      message: this.responseGenerator.getMessage("regatta_info", e.language),
      quickReplies: ["Забронировать", "Еще вопросы"],
      metadata: { nextState: v.WELCOME }
    } : t.name === "book_session" || t.name === "greeting" ? (e.state = v.COLLECTING_DATE, {
      message: this.responseGenerator.getMessage("ask_date", e.language),
      quickReplies: ["Завтра", "На выходных", "Конкретную дату"],
      metadata: { nextState: v.COLLECTING_DATE }
    }) : {
      message: this.responseGenerator.getMessage("welcome", e.language),
      quickReplies: this.responseGenerator.getQuickReplies(v.WELCOME, e.language),
      metadata: { nextState: v.WELCOME }
    };
  }
  handleDateCollection(e, t) {
    const s = this.nlp.extractDate(t);
    if (!s)
      return e.retryCount = (e.retryCount || 0) + 1, e.retryCount >= this.config.maxRetries ? this.escalateToHuman(e) : {
        message: this.responseGenerator.getMessage("invalid_date", e.language),
        quickReplies: ["Завтра", "15.05", "20.05"],
        metadata: { nextState: v.COLLECTING_DATE }
      };
    const r = s.getMonth() + 1;
    return r < 4 || r > 10 ? {
      message: this.responseGenerator.getMessage("season_closed", e.language),
      quickReplies: ["Выбрать другую дату"],
      metadata: { nextState: v.COLLECTING_DATE }
    } : (e.selectedDate = s, e.state = v.COLLECTING_TIME, e.retryCount = 0, {
      message: this.responseGenerator.getMessage("ask_time", e.language),
      quickReplies: this.responseGenerator.getQuickReplies(v.COLLECTING_TIME, e.language),
      metadata: { nextState: v.COLLECTING_TIME }
    });
  }
  handleTimeCollection(e, t) {
    const s = this.nlp.extractTimeSlot(t);
    return s ? (e.selectedTimeSlot = s, e.state = v.COLLECTING_PARTICIPANTS, {
      message: this.responseGenerator.getMessage("ask_participants", e.language),
      quickReplies: this.responseGenerator.getQuickReplies(v.COLLECTING_PARTICIPANTS, e.language),
      metadata: { nextState: v.COLLECTING_PARTICIPANTS }
    }) : {
      message: this.responseGenerator.getMessage("ask_time", e.language),
      quickReplies: ["Утром", "Днем"],
      metadata: { nextState: v.COLLECTING_TIME }
    };
  }
  handleParticipantCollection(e, t) {
    const s = this.nlp.extractParticipantCount(t);
    return s ? (e.participantCount = s, e.state = v.CHECKING_AVAILABILITY, this.handleAvailabilityCheck(e)) : {
      message: this.responseGenerator.getMessage("invalid_participants", e.language),
      quickReplies: ["1", "2", "3", "4"],
      metadata: { nextState: v.COLLECTING_PARTICIPANTS }
    };
  }
  async handleAvailabilityCheck(e) {
    try {
      const t = {
        message: this.responseGenerator.getMessage("availability_check", e.language),
        metadata: { nextState: v.CHECKING_AVAILABILITY }
      }, s = await this.checkSessionAvailability(
        e.selectedDate,
        e.selectedTimeSlot,
        e.participantCount
      );
      if (s && s.availableSpots >= e.participantCount) {
        e.state = v.COLLECTING_CONTACT;
        const r = e.participantCount * s.pricePerPerson;
        return {
          message: this.responseGenerator.getMessage("available_session", e.language, {
            date: this.responseGenerator.formatDate(e.selectedDate, e.language),
            timeSlot: this.responseGenerator.formatTimeSlot(e.selectedTimeSlot, e.language),
            totalAmount: r
          }),
          quickReplies: ["Да, бронируем!", "Изменить дату"],
          metadata: { nextState: v.COLLECTING_CONTACT }
        };
      } else {
        const r = await this.findAlternativeSessions(e.selectedDate, e.participantCount);
        return {
          message: this.responseGenerator.getMessage("unavailable_session", e.language, {
            date: this.responseGenerator.formatDate(e.selectedDate, e.language),
            timeSlot: this.responseGenerator.formatTimeSlot(e.selectedTimeSlot, e.language)
          }) + `

` + this.formatAlternatives(r, e.language),
          quickReplies: ["Выбрать альтернативу", "Другую дату"],
          metadata: { nextState: v.COLLECTING_DATE }
        };
      }
    } catch (t) {
      return console.error("Availability check error:", t), this.escalateToHuman(e);
    }
  }
  handleContactCollection(e, t) {
    const s = this.nlp.extractContactInfo(t);
    return e.customerInfo || (e.customerInfo = {}), s.email && (e.customerInfo.email = s.email), s.phone && (e.customerInfo.phone = s.phone), !e.customerInfo.fullName && !s.email && !s.phone && (e.customerInfo.fullName = t.trim()), e.customerInfo.email ? (e.state = v.CONFIRMING_BOOKING, this.handleBookingConfirmation(e)) : {
      message: this.responseGenerator.getMessage("ask_contact", e.language),
      quickReplies: ["example@email.com", "+39 123 456 789"],
      metadata: { nextState: v.COLLECTING_CONTACT }
    };
  }
  async handleBookingConfirmation(e) {
    try {
      const t = await this.createBooking(e);
      return e.bookingReference = t.bookingReference, e.state = v.COMPLETED, this.logAnalytics("booking_completed", e.userId, {
        bookingReference: t.bookingReference,
        amount: t.totalAmount
      }), {
        message: this.responseGenerator.getMessage("booking_confirmation", e.language, {
          date: this.responseGenerator.formatDate(e.selectedDate, e.language),
          timeSlot: this.responseGenerator.formatTimeSlot(e.selectedTimeSlot, e.language),
          participants: e.participantCount,
          totalAmount: t.totalAmount,
          bookingReference: t.bookingReference
        }),
        metadata: { nextState: v.COMPLETED }
      };
    } catch (t) {
      return console.error("Booking creation error:", t), this.escalateToHuman(e);
    }
  }
  handleUnknownState(e) {
    return e.state = v.WELCOME, {
      message: this.responseGenerator.getMessage("welcome", e.language),
      quickReplies: this.responseGenerator.getQuickReplies(v.WELCOME, e.language),
      metadata: { nextState: v.WELCOME }
    };
  }
  escalateToHuman(e) {
    return this.logAnalytics("user_dropoff", e.userId, { state: e.state }), {
      message: this.responseGenerator.getMessage("error_fallback", e.language),
      metadata: { nextState: v.ERROR_RECOVERY }
    };
  }
  // Database operations
  async checkSessionAvailability(e, t, s) {
    const { data: r, error: n } = await this.supabase.from("sessions").select("*").eq("date", e.toISOString().split("T")[0]).eq("time_slot", t).eq("status", "active").gte("available_spots", s).single();
    return n ? (console.error("Session availability check error:", n), null) : r ? {
      id: r.id,
      date: new Date(r.date),
      timeSlot: r.time_slot,
      availableSpots: r.available_spots,
      maxParticipants: r.max_participants,
      pricePerPerson: r.price_per_person
    } : null;
  }
  async findAlternativeSessions(e, t) {
    const s = new Date(e);
    s.setDate(e.getDate() - 3);
    const r = new Date(e);
    r.setDate(e.getDate() + 7);
    const { data: n, error: a } = await this.supabase.from("sessions").select("*").gte("date", s.toISOString().split("T")[0]).lte("date", r.toISOString().split("T")[0]).eq("status", "active").gte("available_spots", t).order("date", { ascending: !0 }).limit(5);
    return a ? (console.error("Alternative sessions error:", a), []) : n.map((o) => ({
      id: o.id,
      date: new Date(o.date),
      timeSlot: o.time_slot,
      availableSpots: o.available_spots,
      maxParticipants: o.max_participants,
      pricePerPerson: o.price_per_person
    }));
  }
  async createBooking(e) {
    const t = await this.createOrGetCustomer(e.customerInfo), s = await this.checkSessionAvailability(
      e.selectedDate,
      e.selectedTimeSlot,
      e.participantCount
    );
    if (!s)
      throw new Error("Session no longer available");
    const r = await this.generateBookingReference(), n = e.participantCount * s.pricePerPerson, { data: a, error: o } = await this.supabase.from("bookings").insert({
      session_id: s.id,
      customer_id: t.id,
      participants_count: e.participantCount,
      total_amount: n,
      booking_reference: r,
      status: "pending"
    }).select().single();
    if (o)
      throw new Error(`Booking creation failed: ${o.message}`);
    return {
      id: a.id,
      bookingReference: a.booking_reference,
      sessionDate: e.selectedDate,
      timeSlot: e.selectedTimeSlot,
      participantCount: e.participantCount,
      totalAmount: n,
      status: "pending"
    };
  }
  async createOrGetCustomer(e) {
    const { data: t } = await this.supabase.from("customers").select("*").eq("email", e.email).single();
    if (t)
      return t;
    const { data: s, error: r } = await this.supabase.from("customers").insert({
      email: e.email,
      phone: e.phone,
      full_name: e.fullName || e.email.split("@")[0]
    }).select().single();
    if (r)
      throw new Error(`Customer creation failed: ${r.message}`);
    return s;
  }
  async generateBookingReference() {
    const { data: e } = await this.supabase.rpc("generate_booking_reference");
    return e || `GRC-${Date.now()}`;
  }
  formatAlternatives(e, t) {
    return e.length === 0 ? this.responseGenerator.getMessage("no_alternatives", t) || "No alternatives available" : e.map(
      (s) => `• ${this.responseGenerator.formatDate(s.date, t)} ${this.responseGenerator.formatTimeSlot(s.timeSlot, t)} (${s.availableSpots} мест)`
    ).join(`
`);
  }
  getOrCreateContext(e, t) {
    let s = this.conversations.get(e);
    return s || (s = {
      userId: e,
      sessionId: t || `session_${Date.now()}`,
      state: v.WELCOME,
      language: this.config.defaultLanguage,
      retryCount: 0
    }, this.logAnalytics("conversation_started", e, { sessionId: s.sessionId })), s;
  }
  logAnalytics(e, t, s) {
    this.config.enableAnalytics && console.log(`Analytics: ${e}`, {
      userId: t,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      data: s
    });
  }
  // Public methods for external integration
  getConversationState(e) {
    var t;
    return ((t = this.conversations.get(e)) == null ? void 0 : t.state) || null;
  }
  resetConversation(e) {
    this.conversations.delete(e);
  }
  setLanguage(e, t) {
    const s = this.conversations.get(e);
    s && (s.language = t);
  }
}
const Ci = {
  defaultLanguage: "ru",
  maxRetries: 3,
  sessionTimeout: 30,
  // minutes
  enableAnalytics: !0,
  fallbackToHuman: !0
}, mt = ({
  position: i = "bottom-right",
  theme: e = "light",
  primaryColor: t = "#0066cc"
}) => {
  const [s, r] = W(!1), [n, a] = W(!1), [o, l] = W([]), [h, c] = W(""), [u, d] = W(!1), [f] = W(() => new Ei(Ci)), [_] = W(() => `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`), b = Xe(null), p = Xe(null), T = () => {
    var C;
    (C = b.current) == null || C.scrollIntoView({ behavior: "smooth" });
  };
  Ze(() => {
    T();
  }, [o]), Ze(() => {
    s && !n && o.length === 0 && j("Привет! 👋");
  }, [s, n]);
  const j = async (C) => {
    d(!0);
    try {
      const U = await f.processMessage(_, C);
      setTimeout(() => {
        const z = {
          id: `bot_${Date.now()}`,
          text: U.message,
          isBot: !0,
          timestamp: /* @__PURE__ */ new Date(),
          quickReplies: U.quickReplies
        };
        l((je) => [...je, z]), d(!1);
      }, 1e3 + Math.random() * 1e3);
    } catch (U) {
      console.error("Chatbot error:", U), d(!1);
      const z = {
        id: `bot_error_${Date.now()}`,
        text: "Извините, произошла ошибка. Попробуйте еще раз.",
        isBot: !0,
        timestamp: /* @__PURE__ */ new Date()
      };
      l((je) => [...je, z]);
    }
  }, g = async (C) => {
    if (!C.trim())
      return;
    const U = {
      id: `user_${Date.now()}`,
      text: C.trim(),
      isBot: !1,
      timestamp: /* @__PURE__ */ new Date()
    };
    l((z) => [...z, U]), c(""), await j(C.trim());
  }, k = (C) => {
    g(C);
  }, O = (C) => {
    C.preventDefault(), g(h);
  }, E = () => {
    r(!s), a(!1);
  }, P = () => {
    a(!0);
  }, Ye = i === "bottom-right" ? "bottom-4 right-4" : "bottom-4 left-4", Wt = e === "dark" ? "bg-gray-800 text-white border-gray-700" : "bg-white text-gray-900 border-gray-200";
  return s ? /* @__PURE__ */ y.jsx("div", { className: `fixed ${Ye} z-50`, children: /* @__PURE__ */ y.jsxs("div", { className: `w-80 h-96 ${Wt} border rounded-lg shadow-xl flex flex-col transition-all duration-300 ${n ? "h-12" : "h-96"}`, children: [
    /* @__PURE__ */ y.jsxs(
      "div",
      {
        className: "flex items-center justify-between p-4 border-b rounded-t-lg text-white",
        style: { backgroundColor: t },
        children: [
          /* @__PURE__ */ y.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ y.jsx("div", { className: "w-8 h-8 bg-white rounded-full flex items-center justify-center", children: /* @__PURE__ */ y.jsx("span", { className: "text-blue-600 font-bold text-sm", children: "GRC" }) }),
            /* @__PURE__ */ y.jsxs("div", { children: [
              /* @__PURE__ */ y.jsx("h3", { className: "font-semibold text-sm", children: "Garda Racing Club" }),
              /* @__PURE__ */ y.jsx("p", { className: "text-xs opacity-90", children: "Yacht Regatta Booking" })
            ] })
          ] }),
          /* @__PURE__ */ y.jsxs("div", { className: "flex space-x-1", children: [
            /* @__PURE__ */ y.jsx(
              "button",
              {
                onClick: P,
                className: "text-white hover:bg-white hover:bg-opacity-20 rounded p-1 transition-colors",
                children: /* @__PURE__ */ y.jsx(as, { size: 16 })
              }
            ),
            /* @__PURE__ */ y.jsx(
              "button",
              {
                onClick: E,
                className: "text-white hover:bg-white hover:bg-opacity-20 rounded p-1 transition-colors",
                children: /* @__PURE__ */ y.jsx(ls, { size: 16 })
              }
            )
          ] })
        ]
      }
    ),
    !n && /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      /* @__PURE__ */ y.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-3", children: [
        o.map((C) => /* @__PURE__ */ y.jsx("div", { className: `flex ${C.isBot ? "justify-start" : "justify-end"}`, children: /* @__PURE__ */ y.jsxs(
          "div",
          {
            className: `max-w-xs px-3 py-2 rounded-lg ${C.isBot ? "bg-gray-100 text-gray-800" : "text-white"}`,
            style: C.isBot ? {} : { backgroundColor: t },
            children: [
              /* @__PURE__ */ y.jsx("p", { className: "text-sm whitespace-pre-line", children: C.text }),
              C.quickReplies && /* @__PURE__ */ y.jsx("div", { className: "mt-2 space-y-1", children: C.quickReplies.map((U, z) => /* @__PURE__ */ y.jsx(
                "button",
                {
                  onClick: () => k(U),
                  className: "block w-full text-left text-xs px-2 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors",
                  children: U
                },
                z
              )) })
            ]
          }
        ) }, C.id)),
        u && /* @__PURE__ */ y.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ y.jsx("div", { className: "bg-gray-100 px-3 py-2 rounded-lg", children: /* @__PURE__ */ y.jsxs("div", { className: "flex space-x-1", children: [
          /* @__PURE__ */ y.jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce" }),
          /* @__PURE__ */ y.jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce", style: { animationDelay: "0.1s" } }),
          /* @__PURE__ */ y.jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce", style: { animationDelay: "0.2s" } })
        ] }) }) }),
        /* @__PURE__ */ y.jsx("div", { ref: b })
      ] }),
      /* @__PURE__ */ y.jsx("div", { className: "border-t p-3", children: /* @__PURE__ */ y.jsxs("form", { onSubmit: O, className: "flex space-x-2", children: [
        /* @__PURE__ */ y.jsx(
          "input",
          {
            ref: p,
            type: "text",
            value: h,
            onChange: (C) => c(C.target.value),
            placeholder: "Напишите сообщение...",
            className: "flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm",
            disabled: u
          }
        ),
        /* @__PURE__ */ y.jsx(
          "button",
          {
            type: "submit",
            disabled: !h.trim() || u,
            className: "px-3 py-2 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
            style: { backgroundColor: t },
            children: /* @__PURE__ */ y.jsx(os, { size: 16 })
          }
        )
      ] }) })
    ] })
  ] }) }) : /* @__PURE__ */ y.jsx("div", { className: `fixed ${Ye} z-50`, children: /* @__PURE__ */ y.jsx(
    "button",
    {
      onClick: E,
      className: "bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110",
      style: { backgroundColor: t },
      children: /* @__PURE__ */ y.jsx(ns, { size: 24 })
    }
  ) });
};
class Oi {
  constructor() {
    this.root = null, this.container = null;
  }
  init(e = {}) {
    const {
      containerId: t = "garda-chat-widget",
      position: s = "bottom-right",
      theme: r = "light",
      primaryColor: n = "#0066cc"
    } = e;
    this.container = document.getElementById(t), this.container || (this.container = document.createElement("div"), this.container.id = t, document.body.appendChild(this.container)), e.supabaseUrl && (window.VITE_SUPABASE_URL = e.supabaseUrl), e.supabaseAnonKey && (window.VITE_SUPABASE_ANON_KEY = e.supabaseAnonKey), this.root = yt(this.container), this.root.render(
      /* @__PURE__ */ y.jsx(
        mt,
        {
          position: s,
          theme: r,
          primaryColor: n
        }
      )
    );
  }
  destroy() {
    this.root && (this.root.unmount(), this.root = null), this.container && this.container.parentNode && (this.container.parentNode.removeChild(this.container), this.container = null);
  }
  updateConfig(e) {
    if (this.root && this.container) {
      const t = {
        position: "bottom-right",
        theme: "light",
        primaryColor: "#0066cc",
        ...e
      };
      this.root.render(
        /* @__PURE__ */ y.jsx(
          mt,
          {
            position: t.position,
            theme: t.theme,
            primaryColor: t.primaryColor
          }
        )
      );
    }
  }
}
const zt = new Oi();
window.GardaRacingChatWidget = zt;
document.addEventListener("DOMContentLoaded", () => {
  const i = window.gardaChatWidgetConfig;
  i && zt.init(i);
});
export {
  zt as default
};
