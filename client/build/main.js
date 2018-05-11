!(function(t) {
  function e(n) {
    if (i[n]) return i[n].exports;
    var o = (i[n] = { i: n, l: !1, exports: {} });
    return t[n].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  var i = {};
  (e.m = t),
    (e.c = i),
    (e.d = function(t, i, n) {
      e.o(t, i) ||
        Object.defineProperty(t, i, {
          configurable: !1,
          enumerable: !0,
          get: n
        });
    }),
    (e.n = function(t) {
      var i =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return e.d(i, "a", i), i;
    }),
    (e.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (e.p = "build/"),
    e((e.s = 23));
})([
  function(t, e, i) {
    var n,
      o; /*! excalibur - v0.14.0 - 2017-12-02
* https://github.com/excaliburjs/Excalibur
* Copyright (c) 2017 Excalibur.js <https://github.com/excaliburjs/Excalibur/graphs/contributors>; Licensed BSD-2-Clause
* @preserve */
    !(function(i, r) {
      (n = []),
        void 0 !==
          (o = function(t) {
            return (i.ex = r());
          }.apply(e, n)) && (t.exports = o);
    })(this, function() {
      /**
       * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
       * Released under MIT license, http://github.com/requirejs/almond/LICENSE
       */
      var t, e, i;
      !(function(n) {
        function o(t, e) {
          return w.call(t, e);
        }
        function r(t, e) {
          var i,
            n,
            o,
            r,
            s,
            a,
            h,
            c,
            l,
            u,
            p,
            f,
            d = e && e.split("/"),
            g = m.map,
            y = (g && g["*"]) || {};
          if (t) {
            for (
              t = t.split("/"),
                s = t.length - 1,
                m.nodeIdCompat && P.test(t[s]) && (t[s] = t[s].replace(P, "")),
                "." === t[0].charAt(0) &&
                  d &&
                  ((f = d.slice(0, d.length - 1)), (t = f.concat(t))),
                l = 0;
              l < t.length;
              l++
            )
              if ("." === (p = t[l])) t.splice(l, 1), (l -= 1);
              else if (".." === p) {
                if (0 === l || (1 === l && ".." === t[2]) || ".." === t[l - 1])
                  continue;
                l > 0 && (t.splice(l - 1, 2), (l -= 2));
              }
            t = t.join("/");
          }
          if ((d || y) && g) {
            for (i = t.split("/"), l = i.length; l > 0; l -= 1) {
              if (((n = i.slice(0, l).join("/")), d))
                for (u = d.length; u > 0; u -= 1)
                  if ((o = g[d.slice(0, u).join("/")]) && (o = o[n])) {
                    (r = o), (a = l);
                    break;
                  }
              if (r) break;
              !h && y && y[n] && ((h = y[n]), (c = l));
            }
            !r && h && ((r = h), (a = c)),
              r && (i.splice(0, a, r), (t = i.join("/")));
          }
          return t;
        }
        function s(t, e) {
          return function() {
            var i = x.call(arguments, 0);
            return (
              "string" != typeof i[0] && 1 === i.length && i.push(null),
              d.apply(n, i.concat([t, e]))
            );
          };
        }
        function a(t) {
          return function(e) {
            return r(e, t);
          };
        }
        function h(t) {
          return function(e) {
            _[t] = e;
          };
        }
        function c(t) {
          if (o(v, t)) {
            var e = v[t];
            delete v[t], (b[t] = !0), f.apply(n, e);
          }
          if (!o(_, t) && !o(b, t)) throw new Error("No " + t);
          return _[t];
        }
        function l(t) {
          var e,
            i = t ? t.indexOf("!") : -1;
          return (
            i > -1 &&
              ((e = t.substring(0, i)), (t = t.substring(i + 1, t.length))),
            [e, t]
          );
        }
        function u(t) {
          return t ? l(t) : [];
        }
        function p(t) {
          return function() {
            return (m && m.config && m.config[t]) || {};
          };
        }
        var f,
          d,
          g,
          y,
          _ = {},
          v = {},
          m = {},
          b = {},
          w = Object.prototype.hasOwnProperty,
          x = [].slice,
          P = /\.js$/;
        (g = function(t, e) {
          var i,
            n = l(t),
            o = n[0],
            s = e[1];
          return (
            (t = n[1]),
            o && ((o = r(o, s)), (i = c(o))),
            o
              ? (t = i && i.normalize ? i.normalize(t, a(s)) : r(t, s))
              : ((t = r(t, s)),
                (n = l(t)),
                (o = n[0]),
                (t = n[1]),
                o && (i = c(o))),
            { f: o ? o + "!" + t : t, n: t, pr: o, p: i }
          );
        }),
          (y = {
            require: function(t) {
              return s(t);
            },
            exports: function(t) {
              var e = _[t];
              return void 0 !== e ? e : (_[t] = {});
            },
            module: function(t) {
              return { id: t, uri: "", exports: _[t], config: p(t) };
            }
          }),
          (f = function(t, e, i, r) {
            var a,
              l,
              p,
              f,
              d,
              m,
              w,
              x = [],
              P = typeof i;
            if (
              ((r = r || t), (m = u(r)), "undefined" === P || "function" === P)
            ) {
              for (
                e =
                  !e.length && i.length ? ["require", "exports", "module"] : e,
                  d = 0;
                d < e.length;
                d += 1
              )
                if (((f = g(e[d], m)), "require" === (l = f.f)))
                  x[d] = y.require(t);
                else if ("exports" === l) (x[d] = y.exports(t)), (w = !0);
                else if ("module" === l) a = x[d] = y.module(t);
                else if (o(_, l) || o(v, l) || o(b, l)) x[d] = c(l);
                else {
                  if (!f.p) throw new Error(t + " missing " + l);
                  f.p.load(f.n, s(r, !0), h(l), {}), (x[d] = _[l]);
                }
              (p = i ? i.apply(_[t], x) : void 0),
                t &&
                  (a && a.exports !== n && a.exports !== _[t]
                    ? (_[t] = a.exports)
                    : (p === n && w) || (_[t] = p));
            } else t && (_[t] = i);
          }),
          (t = e = d = function(t, e, i, o, r) {
            if ("string" == typeof t) return y[t] ? y[t](e) : c(g(t, u(e)).f);
            if (!t.splice) {
              if (((m = t), m.deps && d(m.deps, m.callback), !e)) return;
              e.splice ? ((t = e), (e = i), (i = null)) : (t = n);
            }
            return (
              (e = e || function() {}),
              "function" == typeof i && ((i = o), (o = r)),
              o
                ? f(n, t, e, i)
                : setTimeout(function() {
                    f(n, t, e, i);
                  }, 4),
              d
            );
          }),
          (d.config = function(t) {
            return d(t);
          }),
          (t._defined = _),
          (i = function(t, e, i) {
            if ("string" != typeof t)
              throw new Error(
                "See almond README: incorrect module build, no module name"
              );
            e.splice || ((i = e), (e = [])),
              o(_, t) || o(v, t) || (v[t] = [t, e, i]);
          }),
          (i.amd = { jQuery: !0 });
      })(); /*! excalibur - v0.14.0 - 2017-12-02
* https://github.com/excaliburjs/Excalibur
* Copyright (c) 2017 Excalibur.js <https://github.com/excaliburjs/Excalibur/graphs/contributors>; Licensed BSD-2-Clause
* @preserve */
      var n =
          (this && this.__extends) ||
          (function() {
            var t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e;
                }) ||
              function(t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
              };
            return function(e, i) {
              function n() {
                this.constructor = e;
              }
              t(e, i),
                (e.prototype =
                  null === i
                    ? Object.create(i)
                    : ((n.prototype = i.prototype), new n()));
            };
          })(),
        o =
          (this && this.__decorate) ||
          function(t, e, i, n) {
            var o,
              r = arguments.length,
              s =
                r < 3
                  ? e
                  : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, i))
                    : n;
            if (
              "object" == typeof Reflect &&
              "function" == typeof Reflect.decorate
            )
              s = Reflect.decorate(t, e, i, n);
            else
              for (var a = t.length - 1; a >= 0; a--)
                (o = t[a]) &&
                  (s = (r < 3 ? o(s) : r > 3 ? o(e, i, s) : o(e, i)) || s);
            return r > 3 && s && Object.defineProperty(e, i, s), s;
          };
      return (
        i("Actions/RotationType", ["require", "exports"], function(t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          !(function(t) {
            (t[(t.ShortestPath = 0)] = "ShortestPath"),
              (t[(t.LongestPath = 1)] = "LongestPath"),
              (t[(t.Clockwise = 2)] = "Clockwise"),
              (t[(t.CounterClockwise = 3)] = "CounterClockwise");
          })(e.RotationType || (e.RotationType = {}));
        }),
        i("Algebra", ["require", "exports"], function(t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
            function t(t, e) {
              (this.x = t), (this.y = e);
            }
            return (
              (t.fromAngle = function(e) {
                return new t(Math.cos(e), Math.sin(e));
              }),
              (t.isValid = function(t) {
                return (
                  null !== t &&
                  void 0 !== t &&
                  (!isNaN(t.x) &&
                    !isNaN(t.y) &&
                    (t.x !== 1 / 0 &&
                      t.y !== 1 / 0 &&
                      t.x !== -1 / 0 &&
                      t.y !== 1 / 0))
                );
              }),
              (t.distance = function(t, e) {
                return Math.sqrt(
                  Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)
                );
              }),
              (t.prototype.setTo = function(t, e) {
                (this.x = t), (this.y = e);
              }),
              (t.prototype.equals = function(t, e) {
                return (
                  void 0 === e && (e = 0.001),
                  Math.abs(this.x - t.x) <= e && Math.abs(this.y - t.y) <= e
                );
              }),
              (t.prototype.distance = function(e) {
                return (
                  e || (e = t.Zero),
                  Math.sqrt(
                    Math.pow(this.x - e.x, 2) + Math.pow(this.y - e.y, 2)
                  )
                );
              }),
              (t.prototype.magnitude = function() {
                return this.distance();
              }),
              (t.prototype.normalize = function() {
                var e = this.distance();
                return e > 0 ? new t(this.x / e, this.y / e) : new t(0, 1);
              }),
              (t.prototype.average = function(t) {
                return this.add(t).scale(0.5);
              }),
              (t.prototype.scale = function(e) {
                return new t(this.x * e, this.y * e);
              }),
              (t.prototype.add = function(e) {
                return new t(this.x + e.x, this.y + e.y);
              }),
              (t.prototype.sub = function(e) {
                return new t(this.x - e.x, this.y - e.y);
              }),
              (t.prototype.addEqual = function(t) {
                return (this.x += t.x), (this.y += t.y), this;
              }),
              (t.prototype.subEqual = function(t) {
                return (this.x -= t.x), (this.y -= t.y), this;
              }),
              (t.prototype.scaleEqual = function(t) {
                return (this.x *= t), (this.y *= t), this;
              }),
              (t.prototype.dot = function(t) {
                return this.x * t.x + this.y * t.y;
              }),
              (t.prototype.cross = function(e) {
                return e instanceof t
                  ? this.x * e.y - this.y * e.x
                  : "number" == typeof e
                    ? new t(e * this.y, -e * this.x)
                    : void 0;
              }),
              (t.prototype.perpendicular = function() {
                return new t(this.y, -this.x);
              }),
              (t.prototype.normal = function() {
                return this.perpendicular().normalize();
              }),
              (t.prototype.negate = function() {
                return this.scale(-1);
              }),
              (t.prototype.toAngle = function() {
                return Math.atan2(this.y, this.x);
              }),
              (t.prototype.rotate = function(e, i) {
                i || (i = new t(0, 0));
                var n = Math.sin(e),
                  o = Math.cos(e);
                return new t(
                  o * (this.x - i.x) - n * (this.y - i.y) + i.x,
                  n * (this.x - i.x) + o * (this.y - i.y) + i.y
                );
              }),
              (t.prototype.clone = function() {
                return new t(this.x, this.y);
              }),
              (t.prototype.toString = function() {
                return "(" + this.x + ", " + this.y + ")";
              }),
              t
            );
          })();
          (i.Zero = new i(0, 0)),
            (i.One = new i(1, 1)),
            (i.Half = new i(0.5, 0.5)),
            (i.Up = new i(0, -1)),
            (i.Down = new i(0, 1)),
            (i.Left = new i(-1, 0)),
            (i.Right = new i(1, 0)),
            (e.Vector = i);
          var n = (function() {
            function t(t, e) {
              (this.pos = t), (this.dir = e.normalize());
            }
            return (
              (t.prototype.intersect = function(t) {
                var e = t.begin.sub(this.pos);
                if (
                  0 === this.dir.cross(t.getSlope()) &&
                  0 !== e.cross(this.dir)
                )
                  return -1;
                var i = this.dir.cross(t.getSlope());
                if (0 === i) return -1;
                var n = e.cross(t.getSlope()) / i;
                if (n >= 0) {
                  var o = e.cross(this.dir) / i / t.getLength();
                  if (o >= 0 && o <= 1) return n;
                }
                return -1;
              }),
              (t.prototype.getPoint = function(t) {
                return this.pos.add(this.dir.scale(t));
              }),
              t
            );
          })();
          e.Ray = n;
          var o = (function() {
            function t(t, e) {
              (this.begin = t), (this.end = e);
            }
            return (
              Object.defineProperty(t.prototype, "slope", {
                get: function() {
                  return (
                    (this.end.y - this.begin.y) / (this.end.x - this.begin.x)
                  );
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(t.prototype, "intercept", {
                get: function() {
                  return this.begin.y - this.slope * this.begin.x;
                },
                enumerable: !0,
                configurable: !0
              }),
              (t.prototype.normal = function() {
                return this.end.sub(this.begin).normal();
              }),
              (t.prototype.getSlope = function() {
                var t = this.begin,
                  e = this.end,
                  i = t.distance(e);
                return e.sub(t).scale(1 / i);
              }),
              (t.prototype.getLength = function() {
                var t = this.begin,
                  e = this.end;
                return t.distance(e);
              }),
              (t.prototype.distanceToPoint = function(t) {
                var e = t.x,
                  i = t.y,
                  n = this.getLength(),
                  o = this.end.y - this.begin.y,
                  r = this.end.x - this.begin.x;
                return (
                  Math.abs(
                    o * e -
                      r * i +
                      this.end.x * this.begin.y -
                      this.end.y * this.begin.x
                  ) / n
                );
              }),
              (t.prototype.findPoint = function(t, e) {
                void 0 === t && (t = null), void 0 === e && (e = null);
                var n = this.slope,
                  o = this.intercept;
                if (null !== t) return new i(t, n * t + o);
                if (null !== e) return new i((e - o) / n, e);
                throw new Error("You must provide an X or a Y value");
              }),
              (t.prototype.hasPoint = function() {
                var t,
                  e = 0;
                if (
                  "number" == typeof arguments[0] &&
                  "number" == typeof arguments[1]
                )
                  (t = new i(arguments[0], arguments[1])),
                    (e = arguments[2] || 0);
                else {
                  if (!(arguments[0] instanceof i))
                    throw "Could not determine the arguments for Vector.hasPoint";
                  (t = arguments[0]), (e = arguments[1] || 0);
                }
                var n = t.x - this.begin.x,
                  o = t.y - this.begin.y,
                  r = this.end.x - this.begin.x,
                  s = this.end.y - this.begin.y,
                  a = n * s - o * r;
                return (
                  !(Math.abs(a) > e) &&
                  (Math.abs(r) >= Math.abs(s)
                    ? r > 0
                      ? this.begin.x <= t.x && t.x <= this.end.x
                      : this.end.x <= t.x && t.x <= this.begin.x
                    : s > 0
                      ? this.begin.y <= t.y && t.y <= this.end.y
                      : this.end.y <= t.y && t.y <= this.begin.y)
                );
              }),
              t
            );
          })();
          e.Line = o;
          var r = (function() {
            function t(t, e) {
              (this.min = t), (this.max = e);
            }
            return (
              (t.prototype.overlaps = function(t) {
                return this.max > t.min && t.max > this.min;
              }),
              (t.prototype.getOverlap = function(t) {
                return this.overlaps(t)
                  ? this.max > t.max ? t.max - this.min : this.max - t.min
                  : 0;
              }),
              t
            );
          })();
          e.Projection = r;
        }),
        i("Physics", ["require", "exports", "Algebra"], function(t, e, i) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n;
          !(function(t) {
            (t[(t.Box = 0)] = "Box"), (t[(t.RigidBody = 1)] = "RigidBody");
          })(
            (n =
              e.CollisionResolutionStrategy ||
              (e.CollisionResolutionStrategy = {}))
          );
          var o;
          !(function(t) {
            (t[(t.Naive = 0)] = "Naive"),
              (t[(t.DynamicAABBTree = 1)] = "DynamicAABBTree");
          })((o = e.BroadphaseStrategy || (e.BroadphaseStrategy = {})));
          var r;
          !(function(t) {
            t[(t.Euler = 0)] = "Euler";
          })((r = e.Integrator || (e.Integrator = {})));
          var s = (function() {
            function t() {}
            return (
              (t.useBoxPhysics = function() {
                t.collisionResolutionStrategy = n.Box;
              }),
              (t.useRigidBodyPhysics = function() {
                t.collisionResolutionStrategy = n.RigidBody;
              }),
              t
            );
          })();
          (s.acc = new i.Vector(0, 0)),
            (s.enabled = !0),
            (s.collisionPasses = 5),
            (s.broadphaseStrategy = o.DynamicAABBTree),
            (s.broadphaseDebug = !1),
            (s.showCollisionNormals = !1),
            (s.showMotionVectors = !1),
            (s.showBounds = !1),
            (s.showArea = !1),
            (s.showContacts = !1),
            (s.showNormals = !1),
            (s.collisionResolutionStrategy = n.Box),
            (s.defaultMass = 10),
            (s.integrator = r.Euler),
            (s.integrationSteps = 1),
            (s.allowRigidBodyRotation = !0),
            (s.collisionShift = 0.001),
            (s.dynamicTreeVelocityMultiplyer = 2),
            (s.boundsPadding = 5),
            (s.surfaceEpsilon = 0.1),
            (s.checkForFastBodies = !0),
            (s.disableMinimumSpeedForFastBody = !1),
            (e.Physics = s);
        }),
        i("Util/EasingFunctions", ["require", "exports"], function(t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
            function t() {}
            return t;
          })();
          (i.Linear = function(t, e, i, n) {
            return (i -= e) * t / n + e;
          }),
            (i.EaseInQuad = function(t, e, i, n) {
              return (i -= e), (t /= n), i * t * t + e;
            }),
            (i.EaseOutQuad = function(t, e, i, n) {
              return (i -= e), (t /= n), -i * t * (t - 2) + e;
            }),
            (i.EaseInOutQuad = function(t, e, i, n) {
              return (
                (i -= e),
                (t /= n / 2) < 1
                  ? i / 2 * t * t + e
                  : (t--, -i / 2 * (t * (t - 2) - 1) + e)
              );
            }),
            (i.EaseInCubic = function(t, e, i, n) {
              return (i -= e), (t /= n), i * t * t * t + e;
            }),
            (i.EaseOutCubic = function(t, e, i, n) {
              return (i -= e), (t /= n), t--, i * (t * t * t + 1) + e;
            }),
            (i.EaseInOutCubic = function(t, e, i, n) {
              return (
                (i -= e),
                (t /= n / 2) < 1
                  ? i / 2 * t * t * t + e
                  : ((t -= 2), i / 2 * (t * t * t + 2) + e)
              );
            }),
            (e.EasingFunctions = i);
        }),
        i("Promises", ["require", "exports"], function(t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i;
          !(function(t) {
            (t[(t.Resolved = 0)] = "Resolved"),
              (t[(t.Rejected = 1)] = "Rejected"),
              (t[(t.Pending = 2)] = "Pending");
          })((i = e.PromiseState || (e.PromiseState = {})));
          var n = (function() {
            function t() {
              (this._state = i.Pending),
                (this._successCallbacks = []),
                (this._rejectCallback = function() {});
            }
            return (
              (t.resolve = function(e) {
                return new t().resolve(e);
              }),
              (t.reject = function(e) {
                return new t().reject(e);
              }),
              (t.join = function() {
                var e = [];
                if (arguments.length > 0 && !Array.isArray(arguments[0]))
                  for (var i = 0; i < arguments.length; i++)
                    e[i - 0] = arguments[i];
                else
                  1 === arguments.length &&
                    Array.isArray(arguments[0]) &&
                    (e = arguments[0]);
                var n = new t();
                if (!e || !e.length) return n.resolve();
                var o = e.length,
                  r = 0,
                  s = 0,
                  a = [];
                return (
                  e.forEach(function(t) {
                    t
                      .then(
                        function() {
                          (r += 1),
                            r === o
                              ? n.resolve()
                              : r + s + a.length === o && n.reject(a);
                        },
                        function() {
                          (s += 1), r + s + a.length === o && n.reject(a);
                        }
                      )
                      .error(function(t) {
                        a.push(t), a.length + r + s === o && n.reject(a);
                      });
                  }),
                  n
                );
              }),
              (t.prototype.then = function(t, e) {
                if (
                  t &&
                  (this._successCallbacks.push(t), this.state() === i.Resolved)
                )
                  try {
                    t.call(this, this._value);
                  } catch (t) {
                    this._handleError(t);
                  }
                if (
                  e &&
                  ((this._rejectCallback = e), this.state() === i.Rejected)
                )
                  try {
                    e.call(this, this._value);
                  } catch (t) {
                    this._handleError(t);
                  }
                return this;
              }),
              (t.prototype.error = function(t) {
                return t && (this._errorCallback = t), this;
              }),
              (t.prototype.resolve = function(t) {
                var e = this;
                if (this._state !== i.Pending)
                  throw new Error(
                    "Cannot resolve a promise that is not in a pending state!"
                  );
                this._value = t;
                try {
                  (this._state = i.Resolved),
                    this._successCallbacks.forEach(function(t) {
                      t.call(e, e._value);
                    });
                } catch (t) {
                  this._handleError(t);
                }
                return this;
              }),
              (t.prototype.reject = function(t) {
                if (this._state !== i.Pending)
                  throw new Error(
                    "Cannot reject a promise that is not in a pending state!"
                  );
                this._value = t;
                try {
                  (this._state = i.Rejected),
                    this._rejectCallback.call(this, this._value);
                } catch (t) {
                  this._handleError(t);
                }
                return this;
              }),
              (t.prototype.state = function() {
                return this._state;
              }),
              (t.prototype._handleError = function(t) {
                if (!this._errorCallback) throw t;
                this._errorCallback.call(this, t);
              }),
              t
            );
          })();
          e.Promise = n;
        }),
        i("Collision/Side", ["require", "exports"], function(t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          !(function(t) {
            (t[(t.None = 0)] = "None"),
              (t[(t.Top = 1)] = "Top"),
              (t[(t.Bottom = 2)] = "Bottom"),
              (t[(t.Left = 3)] = "Left"),
              (t[(t.Right = 4)] = "Right");
          })(e.Side || (e.Side = {}));
        }),
        i(
          "Util/Util",
          ["require", "exports", "Algebra", "Collision/Side"],
          function(t, e, i, n) {
            "use strict";
            function o() {
              var t = {},
                e = !1,
                i = 0,
                n = arguments.length;
              "[object Boolean]" ===
                Object.prototype.toString.call(arguments[0]) &&
                ((e = arguments[0]), i++);
              var r = "function" == typeof Object.assign,
                s = null;
              for (
                s = r
                  ? Object.assign
                  : function(i) {
                      for (var n in i)
                        Object.prototype.hasOwnProperty.call(i, n) &&
                          (e &&
                          "[object Object]" ===
                            Object.prototype.toString.call(i[n])
                            ? (t[n] = o(!0, t[n], i[n]))
                            : (t[n] = i[n]));
                    };
                i < n;
                i++
              ) {
                var a = arguments[i];
                r ? s(t, a) : s(a);
              }
              return t;
            }
            function r(t) {
              for (
                var e =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                  i = "",
                  n = 0;
                n < t.length;

              ) {
                var o,
                  r,
                  s = 255 & t.charCodeAt(n++),
                  a = 255 & t.charCodeAt(n++),
                  h = 255 & t.charCodeAt(n++),
                  c = s >> 2,
                  l = ((3 & s) << 4) | (a >> 4);
                isNaN(a)
                  ? (o = r = 64)
                  : ((o = ((15 & a) << 2) | (h >> 6)),
                    (r = isNaN(h) ? 64 : 63 & h)),
                  (i += e.charAt(c) + e.charAt(l) + e.charAt(o) + e.charAt(r));
              }
              return i;
            }
            function s(t, e, i) {
              return Math.min(Math.max(e, t), i);
            }
            function a(t, e) {
              return t + Math.random() * (e - t);
            }
            function h(t, e) {
              return Math.round(a(t, e));
            }
            function c(t) {
              var i = t;
              if (t > e.TwoPI) for (; i > e.TwoPI; ) i -= e.TwoPI;
              if (t < 0) for (; i < 0; ) i += e.TwoPI;
              return i;
            }
            function l(t) {
              return 180 / Math.PI * t;
            }
            function u(t) {
              return t / 180 * Math.PI;
            }
            function p(t) {
              var e = 0,
                n = 0,
                o = function(t) {
                  (e += t.offsetLeft), t.offsetParent && o(t.offsetParent);
                },
                r = function(t) {
                  (n += t.offsetTop), t.offsetParent && r(t.offsetParent);
                };
              return o(t), r(t), new i.Vector(e, n);
            }
            function f(t, e) {
              return -1 === e.indexOf(t) && (e.push(t), !0);
            }
            function d(t, e) {
              var i = -1;
              return (i = e.indexOf(t)) > -1 && (e.splice(i, 1), !0);
            }
            function g(t, e) {
              for (var i = 0; i < t.length; i++) if (t[i] === e) return !0;
              return !1;
            }
            function y(t) {
              return t === n.Side.Top
                ? n.Side.Bottom
                : t === n.Side.Bottom
                  ? n.Side.Top
                  : t === n.Side.Left
                    ? n.Side.Right
                    : t === n.Side.Right ? n.Side.Left : n.Side.None;
            }
            function _(t) {
              for (
                var e = [
                    i.Vector.Left,
                    i.Vector.Right,
                    i.Vector.Up,
                    i.Vector.Down
                  ],
                  o = [n.Side.Left, n.Side.Right, n.Side.Top, n.Side.Bottom],
                  r = -Number.MAX_VALUE,
                  s = -1,
                  a = 0;
                a < e.length;
                a++
              )
                e[a].dot(t) > r && ((r = e[a].dot(t)), (s = a));
              return o[s];
            }
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.TwoPI = 2 * Math.PI),
              (e.extend = o),
              (e.base64Encode = r),
              (e.clamp = s),
              (e.randomInRange = a),
              (e.randomIntInRange = h),
              (e.canonicalizeAngle = c),
              (e.toDegrees = l),
              (e.toRadians = u),
              (e.getPosition = p),
              (e.addItemToArray = f),
              (e.removeItemFromArray = d),
              (e.contains = g),
              (e.getOppositeSide = y),
              (e.getSideFromVector = _);
            var v = (function() {
              function t(e) {
                void 0 === e && (e = t.DefaultSize),
                  (this._internalArray = null),
                  (this._endPointer = 0),
                  (this._internalArray = new Array(e));
              }
              return (
                (t.prototype._resize = function() {
                  for (
                    var t = 2 * this._internalArray.length,
                      e = new Array(t),
                      i = this.count(),
                      n = 0;
                    n < i;
                    n++
                  )
                    e[n] = this._internalArray[n];
                  delete this._internalArray, (this._internalArray = e);
                }),
                (t.prototype.push = function(t) {
                  return (
                    this._endPointer === this._internalArray.length &&
                      this._resize(),
                    (this._internalArray[this._endPointer++] = t)
                  );
                }),
                (t.prototype.pop = function() {
                  return (
                    (this._endPointer =
                      this._endPointer - 1 < 0 ? 0 : this._endPointer - 1),
                    this._internalArray[this._endPointer]
                  );
                }),
                (t.prototype.count = function() {
                  return this._endPointer;
                }),
                (t.prototype.clear = function() {
                  this._endPointer = 0;
                }),
                (t.prototype.internalSize = function() {
                  return this._internalArray.length;
                }),
                (t.prototype.elementAt = function(t) {
                  if (t >= this.count()) throw new Error("Invalid index " + t);
                  return this._internalArray[t];
                }),
                (t.prototype.insert = function(t, e) {
                  return (
                    t >= this.count() && this._resize(),
                    (this._internalArray[t] = e)
                  );
                }),
                (t.prototype.remove = function(t) {
                  var e = this.count();
                  if (0 === e) throw new Error("Invalid parameter " + t);
                  for (var i = this._internalArray[t], n = t; n < e; n++)
                    this._internalArray[n] = this._internalArray[n + 1];
                  return this._endPointer--, i;
                }),
                (t.prototype.removeElement = function(t) {
                  var e = this._internalArray.indexOf(t);
                  this.remove(e);
                }),
                (t.prototype.toArray = function() {
                  return this._internalArray.slice(0, this._endPointer);
                }),
                (t.prototype.forEach = function(t) {
                  var e = 0,
                    i = this.count();
                  for (e; e < i; e++) t.call(this, this._internalArray[e], e);
                }),
                (t.prototype.map = function(t) {
                  for (var e = this.count(), i = 0; i < e; i++)
                    this._internalArray[i] = t.call(
                      this,
                      this._internalArray[i],
                      i
                    );
                }),
                t
              );
            })();
            (v.DefaultSize = 200), (e.Collection = v);
          }
        ),
        i(
          "Camera",
          [
            "require",
            "exports",
            "Util/EasingFunctions",
            "Promises",
            "Algebra",
            "Util/Util"
          ],
          function(t, e, i, o, r, s) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var a = (function() {
              function t(t) {
                this.camera = t;
              }
              return (
                (t.prototype.lockToActor = function(t) {
                  this.camera.addStrategy(new c(t));
                }),
                (t.prototype.lockToActorAxis = function(t, e) {
                  this.camera.addStrategy(new l(t, e));
                }),
                (t.prototype.elasticToActor = function(t, e, i) {
                  this.camera.addStrategy(new u(t, e, i));
                }),
                (t.prototype.radiusAroundActor = function(t, e) {
                  this.camera.addStrategy(new p(t, e));
                }),
                t
              );
            })();
            e.StrategyContainer = a;
            var h;
            !(function(t) {
              (t[(t.X = 0)] = "X"), (t[(t.Y = 1)] = "Y");
            })((h = e.Axis || (e.Axis = {})));
            var c = (function() {
              function t(t) {
                (this.target = t),
                  (this.action = function(t, e, i, n) {
                    return t.getCenter();
                  });
              }
              return t;
            })();
            e.LockCameraToActorStrategy = c;
            var l = (function() {
              function t(t, e) {
                var i = this;
                (this.target = t),
                  (this.axis = e),
                  (this.action = function(t, e, n, o) {
                    var s = t.getCenter(),
                      a = e.getFocus();
                    return i.axis === h.X
                      ? new r.Vector(s.x, a.y)
                      : new r.Vector(a.x, s.y);
                  });
              }
              return t;
            })();
            e.LockCameraToActorAxisStrategy = l;
            var u = (function() {
              function t(t, e, i) {
                var n = this;
                (this.target = t),
                  (this.cameraElasticity = e),
                  (this.cameraFriction = i),
                  (this.action = function(t, e, i, o) {
                    var s = t.getCenter(),
                      a = e.getFocus(),
                      h = new r.Vector(e.dx, e.dy),
                      c = s.sub(a).scale(n.cameraElasticity);
                    h = h.add(c);
                    var l = h.scale(-1).scale(n.cameraFriction);
                    return (h = h.add(l)), (a = a.add(h));
                  });
              }
              return t;
            })();
            e.ElasticToActorStrategy = u;
            var p = (function() {
              function t(t, e) {
                var i = this;
                (this.target = t),
                  (this.radius = e),
                  (this.action = function(t, e, n, o) {
                    var r = t.getCenter(),
                      s = e.getFocus(),
                      a = r.sub(s),
                      h = a.magnitude();
                    if (h >= i.radius) {
                      var c = h - i.radius;
                      return s.add(a.normalize().scale(c));
                    }
                    return s;
                  });
              }
              return t;
            })();
            e.RadiusAroundActorStrategy = p;
            var f = (function() {
              function t() {
                (this._cameraStrategies = []),
                  (this.strategy = new a(this)),
                  (this.z = 1),
                  (this.dx = 0),
                  (this.dy = 0),
                  (this.dz = 0),
                  (this.ax = 0),
                  (this.ay = 0),
                  (this.az = 0),
                  (this.rotation = 0),
                  (this.rx = 0),
                  (this._x = 0),
                  (this._y = 0),
                  (this._cameraMoving = !1),
                  (this._currentLerpTime = 0),
                  (this._lerpDuration = 1e3),
                  (this._lerpStart = null),
                  (this._lerpEnd = null),
                  (this._isShaking = !1),
                  (this._shakeMagnitudeX = 0),
                  (this._shakeMagnitudeY = 0),
                  (this._shakeDuration = 0),
                  (this._elapsedShakeTime = 0),
                  (this._xShake = 0),
                  (this._yShake = 0),
                  (this._isZooming = !1),
                  (this._maxZoomScale = 1),
                  (this._zoomIncrement = 0.01),
                  (this._easing = i.EasingFunctions.EaseInOutCubic);
              }
              return (
                Object.defineProperty(t.prototype, "x", {
                  get: function() {
                    return this._x;
                  },
                  set: function(t) {
                    this._follow || this._cameraMoving || (this._x = t);
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "y", {
                  get: function() {
                    return this._y;
                  },
                  set: function(t) {
                    this._follow || this._cameraMoving || (this._y = t);
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "pos", {
                  get: function() {
                    return new r.Vector(this.x, this.y);
                  },
                  set: function(t) {
                    (this.x = t.x), (this.y = t.y);
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "vel", {
                  get: function() {
                    return new r.Vector(this.dx, this.dy);
                  },
                  set: function(t) {
                    (this.dx = t.x), (this.dy = t.y);
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.getFocus = function() {
                  return new r.Vector(this.x, this.y);
                }),
                (t.prototype.move = function(t, e, n) {
                  if (
                    (void 0 === n && (n = i.EasingFunctions.EaseInOutCubic),
                    "function" != typeof n)
                  )
                    throw "Please specify an EasingFunction";
                  return this._follow
                    ? new o.Promise().reject(t)
                    : (this._lerpPromise &&
                        this._lerpPromise.state() === o.PromiseState.Pending &&
                        this._lerpPromise.resolve(t),
                      (this._lerpPromise = new o.Promise()),
                      (this._lerpStart = this.getFocus().clone()),
                      (this._lerpDuration = e),
                      (this._lerpEnd = t),
                      (this._currentLerpTime = 0),
                      (this._cameraMoving = !0),
                      (this._easing = n),
                      this._lerpPromise);
                }),
                (t.prototype.shake = function(t, e, i) {
                  (this._isShaking = !0),
                    (this._shakeMagnitudeX = t),
                    (this._shakeMagnitudeY = e),
                    (this._shakeDuration = i);
                }),
                (t.prototype.zoom = function(t, e) {
                  return (
                    void 0 === e && (e = 0),
                    (this._zoomPromise = new o.Promise()),
                    e
                      ? ((this._isZooming = !0),
                        (this._maxZoomScale = t),
                        (this._zoomIncrement = (t - this.z) / e))
                      : ((this._isZooming = !1),
                        (this.z = t),
                        this._zoomPromise.resolve(!0)),
                    this._zoomPromise
                  );
                }),
                (t.prototype.getZoom = function() {
                  return this.z;
                }),
                (t.prototype.addStrategy = function(t) {
                  this._cameraStrategies.push(t);
                }),
                (t.prototype.removeStrategy = function(t) {
                  s.removeItemFromArray(t, this._cameraStrategies);
                }),
                (t.prototype.clearAllStrategies = function() {
                  this._cameraStrategies.length = 0;
                }),
                (t.prototype.update = function(t, e) {
                  if (
                    ((this._x += this.dx * e / 1e3),
                    (this._y += this.dy * e / 1e3),
                    (this.z += this.dz * e / 1e3),
                    (this.dx += this.ax * e / 1e3),
                    (this.dy += this.ay * e / 1e3),
                    (this.dz += this.az * e / 1e3),
                    (this.rotation += this.rx * e / 1e3),
                    this._isZooming)
                  ) {
                    var i = this.z + this._zoomIncrement * e;
                    (this.z = i),
                      this._zoomIncrement > 0
                        ? i >= this._maxZoomScale &&
                          ((this._isZooming = !1),
                          (this.z = this._maxZoomScale),
                          this._zoomPromise.resolve(!0))
                        : i <= this._maxZoomScale &&
                          ((this._isZooming = !1),
                          (this.z = this._maxZoomScale),
                          this._zoomPromise.resolve(!0));
                  }
                  this._cameraMoving &&
                    (this._currentLerpTime < this._lerpDuration
                      ? (this._lerpEnd.x < this._lerpStart.x
                          ? (this._x =
                              this._lerpStart.x -
                              (this._easing(
                                this._currentLerpTime,
                                this._lerpEnd.x,
                                this._lerpStart.x,
                                this._lerpDuration
                              ) -
                                this._lerpEnd.x))
                          : (this._x = this._easing(
                              this._currentLerpTime,
                              this._lerpStart.x,
                              this._lerpEnd.x,
                              this._lerpDuration
                            )),
                        this._lerpEnd.y < this._lerpStart.y
                          ? (this._y =
                              this._lerpStart.y -
                              (this._easing(
                                this._currentLerpTime,
                                this._lerpEnd.y,
                                this._lerpStart.y,
                                this._lerpDuration
                              ) -
                                this._lerpEnd.y))
                          : (this._y = this._easing(
                              this._currentLerpTime,
                              this._lerpStart.y,
                              this._lerpEnd.y,
                              this._lerpDuration
                            )),
                        (this._currentLerpTime += e))
                      : ((this._x = this._lerpEnd.x),
                        (this._y = this._lerpEnd.y),
                        this._lerpPromise.resolve(this._lerpEnd),
                        (this._lerpStart = null),
                        (this._lerpEnd = null),
                        (this._currentLerpTime = 0),
                        (this._cameraMoving = !1))),
                    this._isDoneShaking()
                      ? ((this._isShaking = !1),
                        (this._elapsedShakeTime = 0),
                        (this._shakeMagnitudeX = 0),
                        (this._shakeMagnitudeY = 0),
                        (this._shakeDuration = 0),
                        (this._xShake = 0),
                        (this._yShake = 0))
                      : ((this._elapsedShakeTime += e),
                        (this._xShake =
                          1 + ((Math.random() * this._shakeMagnitudeX) | 0)),
                        (this._yShake =
                          1 + ((Math.random() * this._shakeMagnitudeY) | 0)));
                  for (
                    var n = 0, o = this._cameraStrategies;
                    n < o.length;
                    n++
                  ) {
                    var r = o[n];
                    this.pos = r.action.call(r, r.target, this, t, e);
                  }
                }),
                (t.prototype.draw = function(t) {
                  var e = this.getFocus(),
                    i = t.canvas.width,
                    n = t.canvas.height,
                    o = window.devicePixelRatio,
                    r = this.getZoom(),
                    s = i / r / o,
                    a = n / r / o;
                  t.scale(r, r),
                    t.translate(
                      -e.x + s / 2 + this._xShake,
                      -e.y + a / 2 + this._yShake
                    );
                }),
                (t.prototype.debugDraw = function(t) {
                  var e = this.getFocus();
                  (t.fillStyle = "red"),
                    (t.strokeStyle = "white"),
                    (t.lineWidth = 3),
                    t.beginPath(),
                    t.arc(e.x, e.y, 15, 0, 2 * Math.PI),
                    t.closePath(),
                    t.stroke(),
                    t.beginPath(),
                    t.arc(e.x, e.y, 5, 0, 2 * Math.PI),
                    t.closePath(),
                    t.stroke();
                }),
                (t.prototype._isDoneShaking = function() {
                  return (
                    !this._isShaking ||
                    this._elapsedShakeTime >= this._shakeDuration
                  );
                }),
                t
              );
            })();
            e.BaseCamera = f;
            var d = (function(t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                n(e, t),
                (e.prototype.setActorToFollow = function(t) {
                  this._follow = t;
                }),
                (e.prototype.getFocus = function() {
                  return this._follow
                    ? new r.Vector(
                        this._follow.pos.x + this._follow.getWidth() / 2,
                        t.prototype.getFocus.call(this).y
                      )
                    : t.prototype.getFocus.call(this);
                }),
                e
              );
            })(f);
            e.SideCamera = d;
            var g = (function(t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                n(e, t),
                (e.prototype.setActorToFollow = function(t) {
                  this._follow = t;
                }),
                (e.prototype.getFocus = function() {
                  return this._follow
                    ? new r.Vector(
                        this._follow.pos.x + this._follow.getWidth() / 2,
                        this._follow.pos.y + this._follow.getHeight() / 2
                      )
                    : t.prototype.getFocus.call(this);
                }),
                e
              );
            })(f);
            e.LockedCamera = g;
          }
        ),
        i("DebugFlags", ["require", "exports"], function(t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        i("Drawing/Color", ["require", "exports"], function(t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
            function t(t, e, i, n) {
              (this.r = t),
                (this.g = e),
                (this.b = i),
                (this.a = null != n ? n : 1);
            }
            return (
              (t.fromRGB = function(e, i, n, o) {
                return new t(e, i, n, o);
              }),
              (t.fromHex = function(e) {
                var i = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
                  n = null;
                if ((n = e.match(i))) {
                  var o = parseInt(n[1], 16),
                    r = parseInt(n[2], 16),
                    s = parseInt(n[3], 16),
                    a = 1;
                  return (
                    n[4] && (a = parseInt(n[4], 16) / 255), new t(o, r, s, a)
                  );
                }
                throw new Error("Invalid hex string: " + e);
              }),
              (t.fromHSL = function(t, e, i, o) {
                return void 0 === o && (o = 1), new n(t, e, i, o).toRGBA();
              }),
              (t.prototype.lighten = function(t) {
                void 0 === t && (t = 0.1);
                var e = n.fromRGBA(this.r, this.g, this.b, this.a);
                return (e.l += e.l * t), e.toRGBA();
              }),
              (t.prototype.darken = function(t) {
                void 0 === t && (t = 0.1);
                var e = n.fromRGBA(this.r, this.g, this.b, this.a);
                return (e.l -= e.l * t), e.toRGBA();
              }),
              (t.prototype.saturate = function(t) {
                void 0 === t && (t = 0.1);
                var e = n.fromRGBA(this.r, this.g, this.b, this.a);
                return (e.s += e.s * t), e.toRGBA();
              }),
              (t.prototype.desaturate = function(t) {
                void 0 === t && (t = 0.1);
                var e = n.fromRGBA(this.r, this.g, this.b, this.a);
                return (e.s -= e.s * t), e.toRGBA();
              }),
              (t.prototype.mulitiply = function(e) {
                return new t(
                  e.r / 255 * this.r / 255 * 255,
                  e.g / 255 * this.g / 255 * 255,
                  e.b / 255 * this.b / 255 * 255,
                  e.a * this.a
                );
              }),
              (t.prototype.screen = function(t) {
                var e = t.invert(),
                  i = t.invert();
                return e.mulitiply(i).invert();
              }),
              (t.prototype.invert = function() {
                return new t(
                  255 - this.r,
                  255 - this.g,
                  255 - this.b,
                  1 - this.a
                );
              }),
              (t.prototype.average = function(e) {
                return new t(
                  (e.r + this.r) / 2,
                  (e.g + this.g) / 2,
                  (e.b + this.b) / 2,
                  (e.a + this.a) / 2
                );
              }),
              (t.prototype.toString = function(t) {
                switch ((void 0 === t && (t = "rgb"), t)) {
                  case "rgb":
                    return this.toRGBA();
                  case "hsl":
                    return this.toHSLA();
                  case "hex":
                    return this.toHex();
                  default:
                    throw new Error("Invalid Color format");
                }
              }),
              (t.prototype._componentToHex = function(t) {
                var e = t.toString(16);
                return 1 === e.length ? "0" + e : e;
              }),
              (t.prototype.toHex = function() {
                return (
                  "#" +
                  this._componentToHex(this.r) +
                  this._componentToHex(this.g) +
                  this._componentToHex(this.b)
                );
              }),
              (t.prototype.toRGBA = function() {
                var t =
                  String(this.r.toFixed(0)) +
                  ", " +
                  String(this.g.toFixed(0)) +
                  ", " +
                  String(this.b.toFixed(0));
                return void 0 !== this.a || null !== this.a
                  ? "rgba(" + t + ", " + String(this.a) + ")"
                  : "rgb(" + t + ")";
              }),
              (t.prototype.toHSLA = function() {
                return n.fromRGBA(this.r, this.g, this.b, this.a).toString();
              }),
              (t.prototype.fillStyle = function() {
                return this.toString();
              }),
              (t.prototype.clone = function() {
                return new t(this.r, this.g, this.b, this.a);
              }),
              t
            );
          })();
          (i.Black = i.fromHex("#000000")),
            (i.White = i.fromHex("#FFFFFF")),
            (i.Gray = i.fromHex("#808080")),
            (i.LightGray = i.fromHex("#D3D3D3")),
            (i.DarkGray = i.fromHex("#A9A9A9")),
            (i.Yellow = i.fromHex("#FFFF00")),
            (i.Orange = i.fromHex("#FFA500")),
            (i.Red = i.fromHex("#FF0000")),
            (i.Vermillion = i.fromHex("#FF5B31")),
            (i.Rose = i.fromHex("#FF007F")),
            (i.Magenta = i.fromHex("#FF00FF")),
            (i.Violet = i.fromHex("#7F00FF")),
            (i.Blue = i.fromHex("#0000FF")),
            (i.Azure = i.fromHex("#007FFF")),
            (i.Cyan = i.fromHex("#00FFFF")),
            (i.Viridian = i.fromHex("#59978F")),
            (i.Green = i.fromHex("#00FF00")),
            (i.Chartreuse = i.fromHex("#7FFF00")),
            (i.Transparent = i.fromHex("#FFFFFF00")),
            (e.Color = i);
          var n = (function() {
            function t(t, e, i, n) {
              (this.h = t), (this.s = e), (this.l = i), (this.a = n);
            }
            return (
              (t.hue2rgb = function(t, e, i) {
                return (
                  i < 0 && (i += 1),
                  i > 1 && (i -= 1),
                  i < 1 / 6
                    ? t + 6 * (e - t) * i
                    : i < 0.5
                      ? e
                      : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
                );
              }),
              (t.fromRGBA = function(e, i, n, o) {
                (e /= 255), (i /= 255), (n /= 255);
                var r,
                  s,
                  a = Math.max(e, i, n),
                  h = Math.min(e, i, n),
                  c = (a + h) / 2;
                if (a === h) r = s = 0;
                else {
                  var l = a - h;
                  switch (((s = c > 0.5 ? l / (2 - a - h) : l / (a + h)), a)) {
                    case e:
                      r = (i - n) / l + (i < n ? 6 : 0);
                      break;
                    case i:
                      r = (n - e) / l + 2;
                      break;
                    case n:
                      r = (e - i) / l + 4;
                  }
                  r /= 6;
                }
                return new t(r, s, c, o);
              }),
              (t.prototype.toRGBA = function() {
                var e, n, o;
                if (0 === this.s) e = n = o = this.l;
                else {
                  var r =
                      this.l < 0.5
                        ? this.l * (1 + this.s)
                        : this.l + this.s - this.l * this.s,
                    s = 2 * this.l - r;
                  (e = t.hue2rgb(s, r, this.h + 1 / 3)),
                    (n = t.hue2rgb(s, r, this.h)),
                    (o = t.hue2rgb(s, r, this.h - 1 / 3));
                }
                return new i(255 * e, 255 * n, 255 * o, this.a);
              }),
              (t.prototype.toString = function() {
                return (
                  "hsla(" +
                  this.h.toFixed(0) +
                  ", " +
                  this.s.toFixed(0) +
                  ", " +
                  this.l.toFixed(0) +
                  ", " +
                  this.a.toFixed(0) +
                  ")"
                );
              }),
              t
            );
          })();
        }),
        i(
          "Collision/CollisionContact",
          [
            "require",
            "exports",
            "Actor",
            "Algebra",
            "Physics",
            "Events",
            "Util/Util"
          ],
          function(t, e, i, n, o, r, s) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var a = (function() {
              function t(t, e, i, n, o) {
                (this.bodyA = t),
                  (this.bodyB = e),
                  (this.mtv = i),
                  (this.point = n),
                  (this.normal = o);
              }
              return (
                (t.prototype.resolve = function(t) {
                  if (t === o.CollisionResolutionStrategy.RigidBody)
                    this._resolveRigidBodyCollision();
                  else {
                    if (t !== o.CollisionResolutionStrategy.Box)
                      throw new Error("Unknown collision resolution strategy");
                    this._resolveBoxCollision();
                  }
                }),
                (t.prototype._applyBoxImpulse = function(t, e, n) {
                  if (
                    t.collisionType === i.CollisionType.Active &&
                    e.collisionType !== i.CollisionType.Passive
                  ) {
                    if (
                      (t.collisionType === i.CollisionType.Active &&
                        e.collisionType === i.CollisionType.Active &&
                        (n = n.scale(0.5)),
                      (t.pos.y += n.y),
                      (t.pos.x += n.x),
                      0 !== this.mtv.x)
                    ) {
                      var o = 0;
                      t.vel.x < 0 && e.vel.x < 0
                        ? (o = Math.min(t.vel.x, e.vel.x))
                        : t.vel.x > 0 && e.vel.x > 0
                          ? (o = Math.max(t.vel.x, e.vel.x))
                          : e.collisionType === i.CollisionType.Fixed &&
                            (o =
                              t.pos.sub(e.pos).dot(t.vel) > 0
                                ? t.vel.x
                                : e.vel.x),
                        (t.vel.x = o);
                    }
                    if (0 !== this.mtv.y) {
                      var a = 0;
                      t.vel.y < 0 && e.vel.y < 0
                        ? (a = Math.min(t.vel.y, e.vel.y))
                        : t.vel.y > 0 && e.vel.y > 0
                          ? (a = Math.max(t.vel.y, e.vel.y))
                          : e.collisionType === i.CollisionType.Fixed &&
                            (a =
                              t.pos.sub(e.pos).dot(t.vel) > 0
                                ? t.vel.y
                                : e.vel.y),
                        (t.vel.y = a);
                    }
                    t.emit(
                      "postcollision",
                      new r.PostCollisionEvent(t, e, s.getSideFromVector(n), n)
                    );
                  }
                }),
                (t.prototype._resolveBoxCollision = function() {
                  var t = this.bodyA.body.actor,
                    e = this.bodyB.body.actor,
                    i = s.getSideFromVector(this.mtv),
                    n = this.mtv.negate();
                  t.emit("precollision", new r.PreCollisionEvent(t, e, i, n)),
                    e.emit(
                      "precollision",
                      new r.PreCollisionEvent(
                        e,
                        t,
                        s.getOppositeSide(i),
                        n.negate()
                      )
                    ),
                    this._applyBoxImpulse(t, e, n),
                    this._applyBoxImpulse(e, t, n.negate());
                }),
                (t.prototype._resolveRigidBodyCollision = function() {
                  var t = this.bodyA.body,
                    e = this.bodyB.body,
                    a = this.mtv,
                    h = this.normal;
                  if (t.actor !== e.actor) {
                    var c = s.getSideFromVector(this.mtv);
                    if (
                      (t.actor.emit(
                        "precollision",
                        new r.PreCollisionEvent(
                          this.bodyA.body.actor,
                          this.bodyB.body.actor,
                          c,
                          this.mtv
                        )
                      ),
                      e.actor.emit(
                        "precollision",
                        new r.PreCollisionEvent(
                          this.bodyB.body.actor,
                          this.bodyA.body.actor,
                          s.getOppositeSide(c),
                          this.mtv.negate()
                        )
                      ),
                      t.actor.collisionType !== i.CollisionType.Passive &&
                        e.actor.collisionType !== i.CollisionType.Passive)
                    ) {
                      var l =
                          t.actor.collisionType === i.CollisionType.Fixed
                            ? 0
                            : 1 / t.mass,
                        u =
                          e.actor.collisionType === i.CollisionType.Fixed
                            ? 0
                            : 1 / e.mass,
                        p =
                          t.actor.collisionType === i.CollisionType.Fixed
                            ? 0
                            : 1 / t.moi,
                        f =
                          e.actor.collisionType === i.CollisionType.Fixed
                            ? 0
                            : 1 / e.moi,
                        d = Math.min(t.restitution, e.restitution),
                        g = Math.min(t.friction, e.friction);
                      h = h.normalize();
                      var y = h.normal().normalize(),
                        _ = this.point.sub(this.bodyA.getCenter()),
                        v = this.point.sub(this.bodyB.getCenter()),
                        m = e.vel
                          .add(v.cross(-e.rx))
                          .sub(t.vel.sub(_.cross(t.rx))),
                        b = m.dot(h),
                        w = m.dot(y),
                        x = _.dot(y),
                        P = _.dot(h),
                        C = v.dot(y),
                        A = v.dot(h);
                      if (!(b > 0)) {
                        var S = -(1 + d) * b / (l + u + p * x * x + f * C * C);
                        if (
                          (t.actor.collisionType === i.CollisionType.Fixed
                            ? ((e.vel = e.vel.add(h.scale(S * u))),
                              o.Physics.allowRigidBodyRotation &&
                                (e.rx -= S * f * -v.cross(h)),
                              e.addMtv(a))
                            : e.actor.collisionType === i.CollisionType.Fixed
                              ? ((t.vel = t.vel.sub(h.scale(S * l))),
                                o.Physics.allowRigidBodyRotation &&
                                  (t.rx += S * p * -_.cross(h)),
                                t.addMtv(a.negate()))
                              : ((e.vel = e.vel.add(h.scale(S * u))),
                                (t.vel = t.vel.sub(h.scale(S * l))),
                                o.Physics.allowRigidBodyRotation &&
                                  ((e.rx -= S * f * -v.cross(h)),
                                  (t.rx += S * p * -_.cross(h))),
                                e.addMtv(a.scale(0.5)),
                                t.addMtv(a.scale(-0.5))),
                          g && w)
                        ) {
                          var E = m.sub(h.scale(m.dot(h))).normalize(),
                            T = m.dot(E) / (l + u + P * P * p + A * A * f),
                            M = new n.Vector(0, 0);
                          (M =
                            Math.abs(T) <= S * g
                              ? E.scale(T).negate()
                              : E.scale(-S * g)),
                            t.actor.collisionType === i.CollisionType.Fixed
                              ? ((e.vel = e.vel.add(M.scale(u))),
                                o.Physics.allowRigidBodyRotation &&
                                  (e.rx += M.dot(E) * f * v.cross(E)))
                              : e.actor.collisionType === i.CollisionType.Fixed
                                ? ((t.vel = t.vel.sub(M.scale(l))),
                                  o.Physics.allowRigidBodyRotation &&
                                    (t.rx -= M.dot(E) * p * _.cross(E)))
                                : ((e.vel = e.vel.add(M.scale(u))),
                                  (t.vel = t.vel.sub(M.scale(l))),
                                  o.Physics.allowRigidBodyRotation &&
                                    ((e.rx += M.dot(E) * f * v.cross(E)),
                                    (t.rx -= M.dot(E) * p * _.cross(E))));
                        }
                        t.actor.emit(
                          "postcollision",
                          new r.PostCollisionEvent(
                            this.bodyA.body.actor,
                            this.bodyB.body.actor,
                            c,
                            this.mtv
                          )
                        ),
                          e.actor.emit(
                            "postcollision",
                            new r.PostCollisionEvent(
                              this.bodyB.body.actor,
                              this.bodyA.body.actor,
                              s.getOppositeSide(c),
                              this.mtv.negate()
                            )
                          );
                      }
                    }
                  }
                }),
                t
              );
            })();
            e.CollisionContact = a;
          }
        ),
        i("Collision/ICollisionArea", ["require", "exports"], function(t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        i(
          "Collision/CircleArea",
          [
            "require",
            "exports",
            "Collision/BoundingBox",
            "Collision/PolygonArea",
            "Collision/EdgeArea",
            "Collision/CollisionJumpTable",
            "Algebra",
            "Physics",
            "Drawing/Color"
          ],
          function(t, e, i, n, o, r, s, a, h) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var c = (function() {
              function t(t) {
                (this.pos = s.Vector.Zero.clone()),
                  (this.pos = t.pos || s.Vector.Zero.clone()),
                  (this.radius = t.radius || 0),
                  (this.body = t.body || null);
              }
              return (
                (t.prototype.getCenter = function() {
                  return this.body ? this.pos.add(this.body.pos) : this.pos;
                }),
                (t.prototype.contains = function(t) {
                  return this.body.pos.distance(t) <= this.radius;
                }),
                (t.prototype.rayCast = function(t, e) {
                  void 0 === e && (e = 1 / 0);
                  var i = this.getCenter(),
                    n = t.dir,
                    o = t.pos,
                    r = Math.sqrt(
                      Math.pow(n.dot(o.sub(i)), 2) -
                        Math.pow(o.sub(i).distance(), 2) +
                        Math.pow(this.radius, 2)
                    );
                  if (r < 0) return null;
                  var s = 0;
                  if (0 === r)
                    return (
                      (s = -n.dot(o.sub(i))),
                      s > 0 && s < e ? t.getPoint(s) : null
                    );
                  var a = -n.dot(o.sub(i)) + r,
                    h = -n.dot(o.sub(i)) - r,
                    c = Math.min(a, h);
                  return c <= e ? t.getPoint(c) : null;
                }),
                (t.prototype.collide = function(e) {
                  if (e instanceof t)
                    return r.CollisionJumpTable.CollideCircleCircle(this, e);
                  if (e instanceof n.PolygonArea)
                    return r.CollisionJumpTable.CollideCirclePolygon(this, e);
                  if (e instanceof o.EdgeArea)
                    return r.CollisionJumpTable.CollideCircleEdge(this, e);
                  throw new Error(
                    "Circle could not collide with unknown ICollisionArea " +
                      typeof e
                  );
                }),
                (t.prototype.getFurthestPoint = function(t) {
                  return this.getCenter().add(t.normalize().scale(this.radius));
                }),
                (t.prototype.getBounds = function() {
                  return new i.BoundingBox(
                    this.pos.x + this.body.pos.x - this.radius,
                    this.pos.y + this.body.pos.y - this.radius,
                    this.pos.x + this.body.pos.x + this.radius,
                    this.pos.y + this.body.pos.y + this.radius
                  );
                }),
                (t.prototype.getAxes = function() {
                  return null;
                }),
                (t.prototype.getMomentOfInertia = function() {
                  return (
                    (this.body ? this.body.mass : a.Physics.defaultMass) *
                    this.radius *
                    this.radius /
                    2
                  );
                }),
                (t.prototype.testSeparatingAxisTheorem = function(t) {
                  var e = t.getAxes(),
                    i = t.getCenter(),
                    n = t.getFurthestPoint(this.pos.sub(i));
                  e.push(this.pos.sub(n).normalize());
                  for (
                    var o = Number.MAX_VALUE, r = null, s = -1, a = 0;
                    a < e.length;
                    a++
                  ) {
                    var h = t.project(e[a]),
                      c = this.project(e[a]),
                      l = h.getOverlap(c);
                    if (l <= 0) return null;
                    l < o && ((o = l), (r = e[a]), (s = a));
                  }
                  return s < 0 ? null : r.normalize().scale(o);
                }),
                (t.prototype.recalc = function() {}),
                (t.prototype.project = function(t) {
                  var e = [],
                    i = this.getCenter(),
                    n = i.dot(t);
                  return (
                    e.push(n),
                    e.push(n + this.radius),
                    e.push(n - this.radius),
                    new s.Projection(
                      Math.min.apply(Math, e),
                      Math.max.apply(Math, e)
                    )
                  );
                }),
                (t.prototype.debugDraw = function(t, e) {
                  void 0 === e && (e = h.Color.Green.clone());
                  var i = this.body ? this.body.pos.add(this.pos) : this.pos,
                    n = this.body ? this.body.rotation : 0;
                  t.beginPath(),
                    (t.strokeStyle = e.toString()),
                    t.arc(i.x, i.y, this.radius, 0, 2 * Math.PI),
                    t.closePath(),
                    t.stroke(),
                    t.beginPath(),
                    t.moveTo(i.x, i.y),
                    t.lineTo(
                      Math.cos(n) * this.radius + i.x,
                      Math.sin(n) * this.radius + i.y
                    ),
                    t.closePath(),
                    t.stroke();
                }),
                t
              );
            })();
            e.CircleArea = c;
          }
        ),
        i(
          "Collision/CollisionJumpTable",
          [
            "require",
            "exports",
            "Collision/CollisionContact",
            "Collision/PolygonArea"
          ],
          function(t, e, i, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.CollisionJumpTable = {
                CollideCircleCircle: function(t, e) {
                  var n = t.radius + e.radius,
                    o = t.body.pos.add(t.pos),
                    r = e.body.pos.add(e.pos);
                  if (o.distance(r) > n) return null;
                  var s = r.sub(o).normalize(),
                    a = s.scale(n - r.distance(o)),
                    h = t.getFurthestPoint(s);
                  return new i.CollisionContact(t, e, a, h, s);
                },
                CollideCirclePolygon: function(t, e) {
                  var n = t.testSeparatingAxisTheorem(e);
                  if (!n) return null;
                  n =
                    n.dot(e.getCenter().sub(t.getCenter())) < 0
                      ? n.negate()
                      : n;
                  var o = [],
                    r = e.getFurthestPoint(n.negate()),
                    s = t.getFurthestPoint(n);
                  return (
                    t.contains(r) && o.push(r),
                    e.contains(s) && o.push(s),
                    0 === o.length
                      ? null
                      : new i.CollisionContact(
                          t,
                          e,
                          n,
                          2 === o.length ? o[0].average(o[1]) : o[0],
                          n.normalize()
                        )
                  );
                },
                CollideCircleEdge: function(t, e) {
                  var n = t.getCenter(),
                    o = e.end.sub(e.begin),
                    r = o.dot(e.end.sub(n)),
                    s = o.dot(n.sub(e.begin));
                  if (s <= 0) {
                    var a = e.begin.sub(n),
                      h = a.dot(a);
                    return h > t.radius * t.radius
                      ? null
                      : new i.CollisionContact(
                          t,
                          e,
                          a.normalize().scale(t.radius - Math.sqrt(h)),
                          e.begin,
                          a.normalize()
                        );
                  }
                  if (r <= 0) {
                    var c = e.end.sub(n),
                      l = c.dot(c);
                    return l > t.radius * t.radius
                      ? null
                      : new i.CollisionContact(
                          t,
                          e,
                          c.normalize().scale(t.radius - Math.sqrt(l)),
                          e.end,
                          c.normalize()
                        );
                  }
                  var u = o.dot(o),
                    p = e.begin
                      .scale(r)
                      .add(e.end.scale(s))
                      .scale(1 / u),
                    f = n.sub(p),
                    d = f.dot(f);
                  if (d > t.radius * t.radius) return null;
                  var g = o.perpendicular();
                  g.dot(n.sub(e.begin)) < 0 && ((g.x = -g.x), (g.y = -g.y)),
                    (g = g.normalize());
                  var y = g.scale(Math.abs(t.radius - Math.sqrt(d)));
                  return new i.CollisionContact(
                    t,
                    e,
                    y.negate(),
                    p,
                    g.negate()
                  );
                },
                CollideEdgeEdge: function() {
                  return null;
                },
                CollidePolygonEdge: function(t, e) {
                  var o = e.end.sub(e.begin),
                    r = o.normal();
                  if (t.contains(e.begin)) {
                    var s = t.getClosestFace(e.begin),
                      a = s.distance,
                      h = s.face;
                    if (a)
                      return new i.CollisionContact(
                        t,
                        e,
                        a.negate(),
                        e.begin.add(a.negate()),
                        h.normal().negate()
                      );
                  }
                  if (t.contains(e.end)) {
                    var c = t.getClosestFace(e.end),
                      a = c.distance,
                      h = c.face;
                    if (a)
                      return new i.CollisionContact(
                        t,
                        e,
                        a.negate(),
                        e.end.add(a.negate()),
                        h.normal().negate()
                      );
                  }
                  var l = t.getCenter(),
                    u = e.getCenter(),
                    p = u.sub(l).normalize(),
                    f = new n.PolygonArea({
                      points: [
                        e.begin,
                        e.end,
                        e.end.add(p.scale(30)),
                        e.begin.add(p.scale(30))
                      ]
                    }),
                    d = t.testSeparatingAxisTheorem(f);
                  return d
                    ? ((r = r.dot(p) < 0 ? r.negate() : r),
                      (d = d.dot(p) < 0 ? d.negate() : d),
                      new i.CollisionContact(t, e, d, t.getFurthestPoint(r), r))
                    : null;
                },
                CollidePolygonPolygon: function(t, e) {
                  var n = t.testSeparatingAxisTheorem(e);
                  if (!n) return null;
                  n =
                    n.dot(e.getCenter().sub(t.getCenter())) < 0
                      ? n.negate()
                      : n;
                  var o = [],
                    r = t.getFurthestPoint(n),
                    s = e.getFurthestPoint(n.negate());
                  e.contains(r) && o.push(r),
                    t.contains(s) && o.push(s),
                    0 === o.length && o.push(s);
                  var a = 2 === o.length ? o[0].add(o[1]).scale(0.5) : o[0];
                  return new i.CollisionContact(t, e, n, a, n.normalize());
                }
              });
          }
        ),
        i(
          "Collision/PolygonArea",
          [
            "require",
            "exports",
            "Drawing/Color",
            "Physics",
            "Collision/BoundingBox",
            "Collision/EdgeArea",
            "Collision/CollisionJumpTable",
            "Collision/CircleArea",
            "Algebra"
          ],
          function(t, e, i, n, o, r, s, a, h) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var c = (function() {
              function t(t) {
                (this._transformedPoints = []),
                  (this._axes = []),
                  (this._sides = []),
                  (this.pos = t.pos || h.Vector.Zero.clone());
                var e = !!t.clockwiseWinding;
                (this.points = (e ? t.points.reverse() : t.points) || []),
                  (this.body = t.body || null),
                  this._calculateTransformation();
              }
              return (
                (t.prototype.getCenter = function() {
                  return this.body ? this.body.pos.add(this.pos) : this.pos;
                }),
                (t.prototype._calculateTransformation = function() {
                  var t = this.body ? this.body.pos.add(this.pos) : this.pos,
                    e = this.body ? this.body.rotation : 0,
                    i = this.points.length;
                  this._transformedPoints.length = 0;
                  for (var n = 0; n < i; n++)
                    this._transformedPoints[n] = this.points[n]
                      .rotate(e)
                      .add(t);
                }),
                (t.prototype.getTransformedPoints = function() {
                  return (
                    this._transformedPoints.length ||
                      this._calculateTransformation(),
                    this._transformedPoints
                  );
                }),
                (t.prototype.getSides = function() {
                  if (this._sides.length) return this._sides;
                  for (
                    var t = [],
                      e = this.getTransformedPoints(),
                      i = e.length,
                      n = 0;
                    n < i;
                    n++
                  )
                    t.push(new h.Line(e[n], e[(n - 1 + i) % i]));
                  return (this._sides = t), this._sides;
                }),
                (t.prototype.recalc = function() {
                  (this._sides.length = 0),
                    (this._axes.length = 0),
                    (this._transformedPoints.length = 0),
                    this.getTransformedPoints(),
                    this.getAxes(),
                    this.getSides();
                }),
                (t.prototype.contains = function(t) {
                  var e = new h.Ray(t, new h.Vector(1, 0));
                  return (
                    this.getSides().reduce(function(t, i) {
                      return e.intersect(i) >= 0 ? t + 1 : t;
                    }, 0) %
                      2 !=
                    0
                  );
                }),
                (t.prototype.collide = function(e) {
                  if (e instanceof a.CircleArea)
                    return s.CollisionJumpTable.CollideCirclePolygon(e, this);
                  if (e instanceof t)
                    return s.CollisionJumpTable.CollidePolygonPolygon(this, e);
                  if (e instanceof r.EdgeArea)
                    return s.CollisionJumpTable.CollidePolygonEdge(this, e);
                  throw new Error(
                    "Polygon could not collide with unknown ICollisionArea " +
                      typeof e
                  );
                }),
                (t.prototype.getFurthestPoint = function(t) {
                  for (
                    var e = this.getTransformedPoints(),
                      i = null,
                      n = -Number.MAX_VALUE,
                      o = 0;
                    o < e.length;
                    o++
                  ) {
                    var r = t.dot(e[o]);
                    r > n && ((n = r), (i = e[o]));
                  }
                  return i;
                }),
                (t.prototype.getClosestFace = function(t) {
                  for (
                    var e = this.getSides(),
                      i = Number.POSITIVE_INFINITY,
                      n = -1,
                      o = -1,
                      r = 0;
                    r < e.length;
                    r++
                  ) {
                    var s = e[r].distanceToPoint(t);
                    s < i && ((i = s), (n = r), (o = s));
                  }
                  return -1 !== n
                    ? { distance: e[n].normal().scale(o), face: e[n] }
                    : null;
                }),
                (t.prototype.getBounds = function() {
                  var t = this.getTransformedPoints(),
                    e = t.reduce(function(t, e) {
                      return Math.min(t, e.x);
                    }, 999999999),
                    i = t.reduce(function(t, e) {
                      return Math.max(t, e.x);
                    }, -99999999),
                    n = t.reduce(function(t, e) {
                      return Math.min(t, e.y);
                    }, 9999999999),
                    r = t.reduce(function(t, e) {
                      return Math.max(t, e.y);
                    }, -9999999999);
                  return new o.BoundingBox(e, n, i, r);
                }),
                (t.prototype.getMomentOfInertia = function() {
                  for (
                    var t = this.body ? this.body.mass : n.Physics.defaultMass,
                      e = 0,
                      i = 0,
                      o = 0;
                    o < this.points.length;
                    o++
                  ) {
                    var r = (o + 1) % this.points.length,
                      s = this.points[r].cross(this.points[o]);
                    (e +=
                      s *
                      (this.points[o].dot(this.points[o]) +
                        this.points[o].dot(this.points[r]) +
                        this.points[r].dot(this.points[r]))),
                      (i += s);
                  }
                  return t / 6 * (e / i);
                }),
                (t.prototype.rayCast = function(t, e) {
                  void 0 === e && (e = 1 / 0);
                  for (
                    var i = this.getSides(),
                      n = i.length,
                      o = Number.MAX_VALUE,
                      r = -1,
                      s = 0;
                    s < n;
                    s++
                  ) {
                    var a = t.intersect(i[s]);
                    a >= 0 && a < o && a <= e && ((o = a), (r = s));
                  }
                  return r >= 0 ? t.getPoint(o) : null;
                }),
                (t.prototype.getAxes = function() {
                  if (this._axes.length) return this._axes;
                  for (
                    var t = [],
                      e = this.getTransformedPoints(),
                      i = e.length,
                      n = 0;
                    n < i;
                    n++
                  )
                    t.push(e[n].sub(e[(n + 1) % i]).normal());
                  return (this._axes = t), this._axes;
                }),
                (t.prototype.testSeparatingAxisTheorem = function(t) {
                  for (
                    var e = this,
                      i = t,
                      n = e.getAxes().concat(i.getAxes()),
                      o = Number.MAX_VALUE,
                      r = null,
                      s = -1,
                      a = 0;
                    a < n.length;
                    a++
                  ) {
                    var h = e.project(n[a]),
                      c = i.project(n[a]),
                      l = h.getOverlap(c);
                    if (l <= 0) return null;
                    l < o && ((o = l), (r = n[a]), (s = a));
                  }
                  return -1 === s ? null : r.normalize().scale(o);
                }),
                (t.prototype.project = function(t) {
                  for (
                    var e = this.getTransformedPoints(),
                      i = e.length,
                      n = Number.MAX_VALUE,
                      o = -Number.MAX_VALUE,
                      r = 0;
                    r < i;
                    r++
                  ) {
                    var s = e[r].dot(t);
                    (n = Math.min(n, s)), (o = Math.max(o, s));
                  }
                  return new h.Projection(n, o);
                }),
                (t.prototype.debugDraw = function(t, e) {
                  void 0 === e && (e = i.Color.Red.clone()),
                    t.beginPath(),
                    (t.strokeStyle = e.toString());
                  var n = this.getTransformedPoints()[0];
                  t.moveTo(n.x, n.y),
                    this.getTransformedPoints().forEach(function(e) {
                      t.lineTo(e.x, e.y);
                    }),
                    t.lineTo(n.x, n.y),
                    t.closePath(),
                    t.stroke();
                }),
                t
              );
            })();
            e.PolygonArea = c;
          }
        ),
        i(
          "Collision/BoundingBox",
          [
            "require",
            "exports",
            "Collision/PolygonArea",
            "Algebra",
            "Drawing/Color"
          ],
          function(t, e, i, n, o) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = (function() {
              function t(t, e, i, n) {
                void 0 === t && (t = 0),
                  void 0 === e && (e = 0),
                  void 0 === i && (i = 0),
                  void 0 === n && (n = 0),
                  (this.left = t),
                  (this.top = e),
                  (this.right = i),
                  (this.bottom = n);
              }
              return (
                (t.fromPoints = function(e) {
                  for (
                    var i = 1 / 0, n = 1 / 0, o = -1 / 0, r = -1 / 0, s = 0;
                    s < e.length;
                    s++
                  )
                    e[s].x < i && (i = e[s].x),
                      e[s].x > o && (o = e[s].x),
                      e[s].y < n && (n = e[s].y),
                      e[s].y > r && (r = e[s].y);
                  return new t(i, n, o, r);
                }),
                (t.prototype.getWidth = function() {
                  return this.right - this.left;
                }),
                (t.prototype.getHeight = function() {
                  return this.bottom - this.top;
                }),
                (t.prototype.rotate = function(e, i) {
                  void 0 === i && (i = n.Vector.Zero.clone());
                  var o = this.getPoints().map(function(t) {
                    return t.rotate(e, i);
                  });
                  return t.fromPoints(o);
                }),
                (t.prototype.getPerimeter = function() {
                  return 2 * (this.getWidth() + this.getHeight());
                }),
                (t.prototype.getPoints = function() {
                  var t = [];
                  return (
                    t.push(new n.Vector(this.left, this.top)),
                    t.push(new n.Vector(this.right, this.top)),
                    t.push(new n.Vector(this.right, this.bottom)),
                    t.push(new n.Vector(this.left, this.bottom)),
                    t
                  );
                }),
                (t.prototype.toPolygon = function(t) {
                  return new i.PolygonArea({
                    body: t ? t.body : null,
                    points: this.getPoints(),
                    pos: n.Vector.Zero.clone()
                  });
                }),
                (t.prototype.rayCast = function(t, e) {
                  void 0 === e && (e = 1 / 0);
                  var i = -1 / 0,
                    n = 1 / 0,
                    o = 0 === t.dir.x ? Number.MAX_VALUE : 1 / t.dir.x,
                    r = 0 === t.dir.y ? Number.MAX_VALUE : 1 / t.dir.y,
                    s = (this.left - t.pos.x) * o,
                    a = (this.right - t.pos.x) * o;
                  (i = Math.min(s, a)), (n = Math.max(s, a));
                  var h = (this.top - t.pos.y) * r,
                    c = (this.bottom - t.pos.y) * r;
                  return (
                    (i = Math.max(i, Math.min(h, c))),
                    (n = Math.min(n, Math.max(h, c))) >= Math.max(0, i) && i < e
                  );
                }),
                (t.prototype.rayCastTime = function(t, e) {
                  void 0 === e && (e = 1 / 0);
                  var i = -1 / 0,
                    n = 1 / 0,
                    o = 0 === t.dir.x ? Number.MAX_VALUE : 1 / t.dir.x,
                    r = 0 === t.dir.y ? Number.MAX_VALUE : 1 / t.dir.y,
                    s = (this.left - t.pos.x) * o,
                    a = (this.right - t.pos.x) * o;
                  (i = Math.min(s, a)), (n = Math.max(s, a));
                  var h = (this.top - t.pos.y) * r,
                    c = (this.bottom - t.pos.y) * r;
                  return (
                    (i = Math.max(i, Math.min(h, c))),
                    (n = Math.min(n, Math.max(h, c))),
                    n >= Math.max(0, i) && i < e ? i : -1
                  );
                }),
                (t.prototype.contains = function(e) {
                  return e instanceof n.Vector
                    ? this.left <= e.x &&
                        this.top <= e.y &&
                        this.bottom >= e.y &&
                        this.right >= e.x
                    : e instanceof t &&
                        (this.left < e.left &&
                          this.top < e.top &&
                          e.bottom < this.bottom &&
                          e.right < this.right);
                }),
                (t.prototype.combine = function(e) {
                  return new t(
                    Math.min(this.left, e.left),
                    Math.min(this.top, e.top),
                    Math.max(this.right, e.right),
                    Math.max(this.bottom, e.bottom)
                  );
                }),
                (t.prototype.collides = function(e) {
                  if (e instanceof t) {
                    var i = e,
                      o = this.combine(i);
                    if (
                      o.getWidth() < i.getWidth() + this.getWidth() &&
                      o.getHeight() < i.getHeight() + this.getHeight()
                    ) {
                      var r = 0;
                      r =
                        this.right >= i.left && this.right <= i.right
                          ? i.left - this.right
                          : i.right - this.left;
                      var s = 0;
                      return (
                        (s =
                          this.top <= i.bottom && this.top >= i.top
                            ? i.bottom - this.top
                            : i.top - this.bottom),
                        Math.abs(r) < Math.abs(s)
                          ? new n.Vector(r, 0)
                          : new n.Vector(0, s)
                      );
                    }
                    return null;
                  }
                  return null;
                }),
                (t.prototype.debugDraw = function(t, e) {
                  void 0 === e && (e = o.Color.Yellow),
                    (t.strokeStyle = e.toString()),
                    t.strokeRect(
                      this.left,
                      this.top,
                      this.getWidth(),
                      this.getHeight()
                    );
                }),
                t
              );
            })();
            e.BoundingBox = r;
          }
        ),
        i(
          "Collision/EdgeArea",
          [
            "require",
            "exports",
            "Collision/BoundingBox",
            "Collision/CollisionJumpTable",
            "Collision/CircleArea",
            "Collision/PolygonArea",
            "Algebra",
            "Physics",
            "Drawing/Color"
          ],
          function(t, e, i, n, o, r, s, a, h) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var c = (function() {
              function t(t) {
                (this.begin = t.begin || s.Vector.Zero.clone()),
                  (this.end = t.end || s.Vector.Zero.clone()),
                  (this.body = t.body || null),
                  (this.pos = this.getCenter());
              }
              return (
                (t.prototype.getCenter = function() {
                  return this.begin.average(this.end).add(this._getBodyPos());
                }),
                (t.prototype._getBodyPos = function() {
                  var t = s.Vector.Zero.clone();
                  return this.body.pos && (t = this.body.pos), t;
                }),
                (t.prototype._getTransformedBegin = function() {
                  var t = this.body ? this.body.rotation : 0;
                  return this.begin.rotate(t).add(this._getBodyPos());
                }),
                (t.prototype._getTransformedEnd = function() {
                  var t = this.body ? this.body.rotation : 0;
                  return this.end.rotate(t).add(this._getBodyPos());
                }),
                (t.prototype.getSlope = function() {
                  var t = this._getTransformedBegin(),
                    e = this._getTransformedEnd(),
                    i = t.distance(e);
                  return e.sub(t).scale(1 / i);
                }),
                (t.prototype.getLength = function() {
                  var t = this._getTransformedBegin(),
                    e = this._getTransformedEnd();
                  return t.distance(e);
                }),
                (t.prototype.contains = function() {
                  return !1;
                }),
                (t.prototype.rayCast = function(t, e) {
                  void 0 === e && (e = 1 / 0);
                  var i = this._getTransformedBegin().sub(t.pos);
                  if (
                    0 === t.dir.cross(this.getSlope()) &&
                    0 !== i.cross(t.dir)
                  )
                    return null;
                  var n = t.dir.cross(this.getSlope());
                  if (0 === n) return null;
                  var o = i.cross(this.getSlope()) / n;
                  if (o >= 0 && o <= e) {
                    var r = i.cross(t.dir) / n / this.getLength();
                    if (r >= 0 && r <= 1) return t.getPoint(o);
                  }
                  return null;
                }),
                (t.prototype.collide = function(e) {
                  if (e instanceof o.CircleArea)
                    return n.CollisionJumpTable.CollideCircleEdge(e, this);
                  if (e instanceof r.PolygonArea)
                    return n.CollisionJumpTable.CollidePolygonEdge(e, this);
                  if (e instanceof t)
                    return n.CollisionJumpTable.CollideEdgeEdge();
                  throw new Error(
                    "Edge could not collide with unknown ICollisionArea " +
                      typeof e
                  );
                }),
                (t.prototype.getFurthestPoint = function(t) {
                  var e = this._getTransformedBegin(),
                    i = this._getTransformedEnd();
                  return t.dot(e) > 0 ? e : i;
                }),
                (t.prototype.getBounds = function() {
                  var t = this._getTransformedBegin(),
                    e = this._getTransformedEnd();
                  return new i.BoundingBox(
                    Math.min(t.x, e.x),
                    Math.min(t.y, e.y),
                    Math.max(t.x, e.x),
                    Math.max(t.y, e.y)
                  );
                }),
                (t.prototype.getAxes = function() {
                  var t = this._getTransformedEnd().sub(
                      this._getTransformedBegin()
                    ),
                    e = t.normal(),
                    i = [];
                  return (
                    i.push(e),
                    i.push(e.negate()),
                    i.push(e.normal()),
                    i.push(e.normal().negate()),
                    i
                  );
                }),
                (t.prototype.getMomentOfInertia = function() {
                  var t = this.body ? this.body.mass : a.Physics.defaultMass,
                    e = this.end.sub(this.begin).distance() / 2;
                  return t * e * e;
                }),
                (t.prototype.recalc = function() {}),
                (t.prototype.project = function(t) {
                  for (
                    var e = [],
                      i = [
                        this._getTransformedBegin(),
                        this._getTransformedEnd()
                      ],
                      n = i.length,
                      o = 0;
                    o < n;
                    o++
                  )
                    e.push(i[o].dot(t));
                  return new s.Projection(
                    Math.min.apply(Math, e),
                    Math.max.apply(Math, e)
                  );
                }),
                (t.prototype.debugDraw = function(t, e) {
                  void 0 === e && (e = h.Color.Red.clone()),
                    (t.strokeStyle = e.toString()),
                    t.beginPath(),
                    t.moveTo(this.begin.x, this.begin.y),
                    t.lineTo(this.end.x, this.end.y),
                    t.closePath(),
                    t.stroke();
                }),
                t
              );
            })();
            e.EdgeArea = c;
          }
        ),
        i("Util/DrawUtil", ["require", "exports", "Drawing/Color"], function(
          t,
          e,
          i
        ) {
          "use strict";
          function n(t, e, n, o, r, s, a, h) {
            void 0 === e && (e = i.Color.Red.clone()),
              void 0 === a && (a = 1),
              void 0 === h && (h = "butt"),
              t.beginPath(),
              (t.lineWidth = a),
              (t.lineCap = h),
              (t.strokeStyle = e.toString()),
              t.moveTo(n, o),
              t.lineTo(r, s),
              t.closePath(),
              t.stroke();
          }
          function o(t, e, n) {
            void 0 === e && (e = i.Color.Red.clone()),
              t.beginPath(),
              (t.strokeStyle = e.toString()),
              t.arc(n.x, n.y, 5, 0, 2 * Math.PI),
              t.closePath(),
              t.stroke();
          }
          function r(t, e, i, n, o) {
            void 0 === o && (o = 1);
            var r = e ? e.toString() : "blue",
              s = n.scale(o);
            t.beginPath(),
              (t.strokeStyle = r),
              t.moveTo(i.x, i.y),
              t.lineTo(i.x + s.x, i.y + s.y),
              t.closePath(),
              t.stroke();
          }
          function s(t, e, n, o, r, s, a, h) {
            void 0 === s && (s = 5),
              void 0 === a && (a = i.Color.White),
              void 0 === h && (h = null);
            var c;
            if ("number" == typeof s) c = { tl: s, tr: s, br: s, bl: s };
            else {
              var l = { tl: 0, tr: 0, br: 0, bl: 0 };
              for (var u in l)
                if (l.hasOwnProperty(u)) {
                  var p = u;
                  c[p] = s[p] || l[p];
                }
            }
            t.beginPath(),
              t.moveTo(e + c.tl, n),
              t.lineTo(e + o - c.tr, n),
              t.quadraticCurveTo(e + o, n, e + o, n + c.tr),
              t.lineTo(e + o, n + r - c.br),
              t.quadraticCurveTo(e + o, n + r, e + o - c.br, n + r),
              t.lineTo(e + c.bl, n + r),
              t.quadraticCurveTo(e, n + r, e, n + r - c.bl),
              t.lineTo(e, n + c.tl),
              t.quadraticCurveTo(e, n, e + c.tl, n),
              t.closePath(),
              h && ((t.fillStyle = h.toString()), t.fill()),
              a && ((t.strokeStyle = a.toString()), t.stroke());
          }
          function a(t, e, n, o, r, s) {
            void 0 === r && (r = i.Color.White),
              void 0 === s && (s = null),
              t.beginPath(),
              t.arc(e, n, o, 0, 2 * Math.PI),
              t.closePath(),
              s && ((t.fillStyle = s.toString()), t.fill()),
              r && ((t.strokeStyle = r.toString()), t.stroke());
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.line = n),
            (e.point = o),
            (e.vector = r),
            (e.roundRect = s),
            (e.circle = a);
        }),
        i("Util/Log", ["require", "exports"], function(t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i;
          !(function(t) {
            (t[(t.Debug = 0)] = "Debug"),
              (t[(t.Info = 1)] = "Info"),
              (t[(t.Warn = 2)] = "Warn"),
              (t[(t.Error = 3)] = "Error"),
              (t[(t.Fatal = 4)] = "Fatal");
          })((i = e.LogLevel || (e.LogLevel = {})));
          var n = (function() {
            function t() {
              if (
                ((this._appenders = []),
                (this.defaultLevel = i.Info),
                t._instance)
              )
                throw new Error("Logger is a singleton");
              return (
                (t._instance = this),
                t._instance.addAppender(new o()),
                t._instance
              );
            }
            return (
              (t.getInstance = function() {
                return (
                  null == t._instance && (t._instance = new t()), t._instance
                );
              }),
              (t.prototype.addAppender = function(t) {
                this._appenders.push(t);
              }),
              (t.prototype.clearAppenders = function() {
                this._appenders.length = 0;
              }),
              (t.prototype._log = function(t, e) {
                null == t && (t = this.defaultLevel);
                var i = 0,
                  n = this._appenders.length;
                for (i; i < n; i++)
                  t >= this.defaultLevel && this._appenders[i].log(t, e);
              }),
              (t.prototype.debug = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
                this._log(i.Debug, t);
              }),
              (t.prototype.info = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
                this._log(i.Info, t);
              }),
              (t.prototype.warn = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
                this._log(i.Warn, t);
              }),
              (t.prototype.error = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
                this._log(i.Error, t);
              }),
              (t.prototype.fatal = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
                this._log(i.Fatal, t);
              }),
              t
            );
          })();
          (n._instance = null), (e.Logger = n);
          var o = (function() {
            function t() {}
            return (
              (t.prototype.log = function(t, e) {
                if (console || console.log || !console.warn || !console.error) {
                  var n = [];
                  n.unshift.apply(n, e),
                    n.unshift("[" + i[t] + "] : "),
                    t < i.Warn
                      ? console.log.apply
                        ? console.log.apply(console, n)
                        : console.log(n.join(" "))
                      : t < i.Error
                        ? console.warn.apply
                          ? console.warn.apply(console, n)
                          : console.warn(n.join(" "))
                        : console.error.apply
                          ? console.error.apply(console, n)
                          : console.error(n.join(" "));
                }
              }),
              t
            );
          })();
          e.ConsoleAppender = o;
          var r = (function() {
            function t(t, e) {
              (this._messages = []),
                (this._canvas = document.createElement("canvas")),
                (this._canvas.width = t || window.innerWidth),
                (this._canvas.height = e || window.innerHeight),
                (this._canvas.style.position = "absolute"),
                (this._ctx = this._canvas.getContext("2d")),
                document.body.appendChild(this._canvas);
            }
            return (
              (t.prototype.log = function(t, e) {
                var n = e.join(",");
                this._ctx.clearRect(
                  0,
                  0,
                  this._canvas.width,
                  this._canvas.height
                ),
                  this._messages.unshift("[" + i[t] + "] : " + n);
                for (var o = 10, r = 1, s = 0; s < this._messages.length; s++)
                  (this._ctx.fillStyle =
                    "rgba(255,255,255," + r.toFixed(2) + ")"),
                    this._ctx.fillText(this._messages[s], 200, o),
                    (o += 10),
                    (r = r > 0 ? r - 0.05 : 0);
              }),
              t
            );
          })();
          e.ScreenAppender = r;
        }),
        i(
          "Util/Decorators",
          ["require", "exports", "Util/Log", "Util/Util"],
          function(t, e, i, n) {
            "use strict";
            function o(t) {
              return (
                (t = n.extend(
                  {},
                  {
                    message:
                      "This method will be removed in future versions of Excalibur.",
                    alternateMethod: null
                  },
                  t
                )),
                function(e, o, r) {
                  if (
                    "function" != typeof r.value &&
                    "function" != typeof r.get &&
                    "function" != typeof r.set
                  )
                    throw new SyntaxError(
                      "Only functions/getters/setters can be marked as obsolete"
                    );
                  var s = (e.name || "") + (e.name ? "." : "") + o,
                    a =
                      s +
                      " is marked obsolete: " +
                      t.message +
                      (t.alternateMethod
                        ? " Use " + t.alternateMethod + " instead"
                        : ""),
                    h = n.extend({}, r);
                  return r.value
                    ? ((h.value = function() {
                        return (
                          i.Logger.getInstance().warn(a),
                          r.value.apply(this, arguments)
                        );
                      }),
                      h)
                    : (r.get &&
                        (h.get = function() {
                          return (
                            i.Logger.getInstance().warn(a),
                            r.get.apply(this, arguments)
                          );
                        }),
                      r.set &&
                        (h.set = function() {
                          return (
                            i.Logger.getInstance().warn(a),
                            r.set.apply(this, arguments)
                          );
                        }),
                      h);
                }
              );
            }
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.obsolete = o);
          }
        ),
        i(
          "Collision/Body",
          [
            "require",
            "exports",
            "Physics",
            "Collision/EdgeArea",
            "Collision/CircleArea",
            "Collision/PolygonArea",
            "Collision/Pair",
            "Algebra",
            "Drawing/Color",
            "Util/DrawUtil",
            "Util/Decorators"
          ],
          function(t, e, i, n, r, s, a, h, c, l, u) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var p = (function() {
              function t(t) {
                (this.actor = t),
                  (this.collisionArea = null),
                  (this.pos = new h.Vector(0, 0)),
                  (this.oldPos = new h.Vector(0, 0)),
                  (this.vel = new h.Vector(0, 0)),
                  (this.oldVel = new h.Vector(0, 0)),
                  (this.acc = new h.Vector(0, 0)),
                  (this.torque = 0),
                  (this.mass = 1),
                  (this.moi = 1e3),
                  (this.motion = 10),
                  (this.friction = 0.99),
                  (this.restitution = 0.2),
                  (this.rotation = 0),
                  (this.rx = 0),
                  (this._totalMtv = h.Vector.Zero.clone());
              }
              return (
                (t.prototype.addMtv = function(t) {
                  this._totalMtv.addEqual(t);
                }),
                (t.prototype.applyMtv = function() {
                  this.pos.addEqual(this._totalMtv), this._totalMtv.setTo(0, 0);
                }),
                (t.prototype.getBounds = function() {
                  return i.Physics.collisionResolutionStrategy ===
                    i.CollisionResolutionStrategy.Box
                    ? this.actor.getBounds()
                    : this.collisionArea.getBounds();
                }),
                (t.prototype.getRelativeBounds = function() {
                  return (
                    i.Physics.collisionResolutionStrategy,
                    i.CollisionResolutionStrategy.Box,
                    this.actor.getRelativeBounds()
                  );
                }),
                (t.prototype.update = function() {
                  this.collisionArea && this.collisionArea.recalc();
                }),
                (t.prototype.useBoxCollision = function(t) {
                  void 0 === t && (t = h.Vector.Zero.clone()),
                    (this.collisionArea = new s.PolygonArea({
                      body: this,
                      points: this.actor.getRelativeBounds().getPoints(),
                      pos: t
                    })),
                    (this.moi =
                      this.collisionArea.getMomentOfInertia() || this.moi);
                }),
                (t.prototype.usePolygonCollision = function(t, e) {
                  void 0 === e && (e = h.Vector.Zero.clone()),
                    (this.collisionArea = new s.PolygonArea({
                      body: this,
                      points: t,
                      pos: e
                    })),
                    (this.moi =
                      this.collisionArea.getMomentOfInertia() || this.moi);
                }),
                (t.prototype.useCircleCollision = function(t, e) {
                  void 0 === e && (e = h.Vector.Zero.clone()),
                    t || (t = this.actor.getWidth() / 2),
                    (this.collisionArea = new r.CircleArea({
                      body: this,
                      radius: t,
                      pos: e
                    })),
                    (this.moi =
                      this.collisionArea.getMomentOfInertia() || this.moi);
                }),
                (t.prototype.useEdgeCollision = function(t, e) {
                  (this.collisionArea = new n.EdgeArea({
                    begin: t,
                    end: e,
                    body: this
                  })),
                    (this.moi =
                      this.collisionArea.getMomentOfInertia() || this.moi);
                }),
                (t.prototype.debugDraw = function(t) {
                  i.Physics.showMotionVectors &&
                    (l.vector(
                      t,
                      c.Color.Yellow,
                      this.pos,
                      this.acc.add(i.Physics.acc)
                    ),
                    l.vector(t, c.Color.Red, this.pos, this.vel),
                    l.point(t, c.Color.Red, this.pos)),
                    i.Physics.showBounds &&
                      this.getBounds().debugDraw(t, c.Color.Yellow),
                    i.Physics.showArea &&
                      this.collisionArea.debugDraw(t, c.Color.Green);
                }),
                (t.prototype.touching = function(t) {
                  var e = new a.Pair(this, t.body);
                  return e.collide(), !!e.collision;
                }),
                (t.prototype.wasTouching = function(t, e) {
                  var i = new a.Pair(this, t.body),
                    n = !1;
                  e &&
                    e.stats.prevFrame &&
                    e.stats.prevFrame.physics.collidersHash[i.id] &&
                    (n = !0);
                  var o = this.touching(t);
                  return n && !o;
                }),
                t
              );
            })();
            o(
              [
                u.obsolete({
                  message:
                    "will be removed in v0.15, use the collisionend event instead"
                })
              ],
              p.prototype,
              "wasTouching",
              null
            ),
              (e.Body = p);
          }
        ),
        i(
          "Collision/Pair",
          [
            "require",
            "exports",
            "Physics",
            "Drawing/Color",
            "Actor",
            "Util/DrawUtil"
          ],
          function(t, e, i, n, o, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var s = (function() {
              function t(e, i) {
                (this.bodyA = e),
                  (this.bodyB = i),
                  (this.id = null),
                  (this.collision = null),
                  (this.id = t.calculatePairHash(e, i));
              }
              return (
                Object.defineProperty(t.prototype, "canCollide", {
                  get: function() {
                    var t = this.bodyA.actor,
                      e = this.bodyB.actor;
                    return (
                      (t.collisionType !== o.CollisionType.Fixed ||
                        e.collisionType !== o.CollisionType.Fixed) &&
                      (e.collisionType !== o.CollisionType.PreventCollision &&
                        !e.isKilled())
                    );
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.collide = function() {
                  this.collision = this.bodyA.collisionArea.collide(
                    this.bodyB.collisionArea
                  );
                }),
                (t.prototype.resolve = function(t) {
                  this.collision && this.collision.resolve(t);
                }),
                (t.calculatePairHash = function(t, e) {
                  return t.actor.id < e.actor.id
                    ? "#" + t.actor.id + "+" + e.actor.id
                    : "#" + e.actor.id + "+" + t.actor.id;
                }),
                (t.prototype.debugDraw = function(t) {
                  this.collision &&
                    (i.Physics.showContacts &&
                      r.point(t, n.Color.Red, this.collision.point),
                    i.Physics.showCollisionNormals &&
                      r.vector(
                        t,
                        n.Color.Cyan,
                        this.collision.point,
                        this.collision.normal,
                        30
                      ));
                }),
                t
              );
            })();
            e.Pair = s;
          }
        ),
        i("Debug", ["require", "exports"], function(t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
            function t() {
              this.stats = { currFrame: new n(), prevFrame: new n() };
            }
            return t;
          })();
          e.Debug = i;
          var n = (function() {
            function t() {
              (this._id = 0),
                (this._delta = 0),
                (this._fps = 0),
                (this._actorStats = {
                  alive: 0,
                  killed: 0,
                  ui: 0,
                  get remaining() {
                    return this.alive - this.killed;
                  },
                  get total() {
                    return this.remaining + this.ui;
                  }
                }),
                (this._durationStats = {
                  update: 0,
                  draw: 0,
                  get total() {
                    return this.update + this.draw;
                  }
                }),
                (this._physicsStats = new o());
            }
            return (
              (t.prototype.reset = function(t) {
                t
                  ? ((this.id = t.id),
                    (this.delta = t.delta),
                    (this.fps = t.fps),
                    (this.actors.alive = t.actors.alive),
                    (this.actors.killed = t.actors.killed),
                    (this.actors.ui = t.actors.ui),
                    (this.duration.update = t.duration.update),
                    (this.duration.draw = t.duration.draw),
                    this._physicsStats.reset(t.physics))
                  : ((this.id = this.delta = this.fps = 0),
                    (this.actors.alive = this.actors.killed = this.actors.ui = 0),
                    (this.duration.update = this.duration.draw = 0),
                    this._physicsStats.reset());
              }),
              (t.prototype.clone = function() {
                var e = new t();
                return e.reset(this), e;
              }),
              Object.defineProperty(t.prototype, "id", {
                get: function() {
                  return this._id;
                },
                set: function(t) {
                  this._id = t;
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(t.prototype, "delta", {
                get: function() {
                  return this._delta;
                },
                set: function(t) {
                  this._delta = t;
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(t.prototype, "fps", {
                get: function() {
                  return this._fps;
                },
                set: function(t) {
                  this._fps = t;
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(t.prototype, "actors", {
                get: function() {
                  return this._actorStats;
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(t.prototype, "duration", {
                get: function() {
                  return this._durationStats;
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(t.prototype, "physics", {
                get: function() {
                  return this._physicsStats;
                },
                enumerable: !0,
                configurable: !0
              }),
              t
            );
          })();
          e.FrameStats = n;
          var o = (function() {
            function t() {
              (this._pairs = 0),
                (this._collisions = 0),
                (this._collidersHash = {}),
                (this._fastBodies = 0),
                (this._fastBodyCollisions = 0),
                (this._broadphase = 0),
                (this._narrowphase = 0);
            }
            return (
              (t.prototype.reset = function(t) {
                t
                  ? ((this.pairs = t.pairs),
                    (this.collisions = t.collisions),
                    (this.collidersHash = t.collidersHash),
                    (this.fastBodies = t.fastBodies),
                    (this.fastBodyCollisions = t.fastBodyCollisions),
                    (this.broadphase = t.broadphase),
                    (this.narrowphase = t.narrowphase))
                  : ((this.pairs = this.collisions = this.fastBodies = 0),
                    (this.fastBodyCollisions = this.broadphase = this.narrowphase = 0),
                    (this.collidersHash = {}));
              }),
              (t.prototype.clone = function() {
                var e = new t();
                return e.reset(this), e;
              }),
              Object.defineProperty(t.prototype, "pairs", {
                get: function() {
                  return this._pairs;
                },
                set: function(t) {
                  this._pairs = t;
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(t.prototype, "collisions", {
                get: function() {
                  return this._collisions;
                },
                set: function(t) {
                  this._collisions = t;
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(t.prototype, "collidersHash", {
                get: function() {
                  return this._collidersHash;
                },
                set: function(t) {
                  this._collidersHash = t;
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(t.prototype, "fastBodies", {
                get: function() {
                  return this._fastBodies;
                },
                set: function(t) {
                  this._fastBodies = t;
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(t.prototype, "fastBodyCollisions", {
                get: function() {
                  return this._fastBodyCollisions;
                },
                set: function(t) {
                  this._fastBodyCollisions = t;
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(t.prototype, "broadphase", {
                get: function() {
                  return this._broadphase;
                },
                set: function(t) {
                  this._broadphase = t;
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(t.prototype, "narrowphase", {
                get: function() {
                  return this._narrowphase;
                },
                set: function(t) {
                  this._narrowphase = t;
                },
                enumerable: !0,
                configurable: !0
              }),
              t
            );
          })();
          e.PhysicsStats = o;
        }),
        i("Interfaces/IEvented", ["require", "exports"], function(t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        i("EventDispatcher", ["require", "exports", "Events"], function(
          t,
          e,
          i
        ) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n = (function() {
            function t(t) {
              (this._handlers = {}),
                (this._wiredEventDispatchers = []),
                (this._target = t);
            }
            return (
              (t.prototype.emit = function(t, e) {
                if (t) {
                  t = t.toLowerCase();
                  var n = this._target;
                  e || (e = new i.GameEvent()), (e.target = n);
                  var o, r;
                  if (this._handlers[t])
                    for (o = 0, r = this._handlers[t].length, o; o < r; o++)
                      this._handlers[t][o].call(n, e);
                  for (
                    o = 0, r = this._wiredEventDispatchers.length, o;
                    o < r;
                    o++
                  )
                    this._wiredEventDispatchers[o].emit(t, e);
                }
              }),
              (t.prototype.on = function(t, e) {
                (t = t.toLowerCase()),
                  this._handlers[t] || (this._handlers[t] = []),
                  this._handlers[t].push(e),
                  "unsubscribe" !== t &&
                    "subscribe" !== t &&
                    this.emit("subscribe", new i.SubscribeEvent(t, e));
              }),
              (t.prototype.off = function(t, e) {
                t = t.toLowerCase();
                var n = this._handlers[t];
                if (n)
                  if (e) {
                    var o = n.indexOf(e);
                    this._handlers[t].splice(o, 1);
                  } else this._handlers[t].length = 0;
                "unsubscribe" !== t &&
                  "subscribe" !== t &&
                  this.emit("unsubscribe", new i.UnsubscribeEvent(t, e));
              }),
              (t.prototype.once = function(t, e) {
                var n = this,
                  o = function(o) {
                    var r = o || new i.GameEvent();
                    (r.target = r.target || n._target),
                      n.off(t, e),
                      e.call(r.target, r);
                  };
                this.on(t, o);
              }),
              (t.prototype.wire = function(t) {
                t._wiredEventDispatchers.push(this);
              }),
              (t.prototype.unwire = function(t) {
                var e = t._wiredEventDispatchers.indexOf(this);
                e > -1 && t._wiredEventDispatchers.splice(e, 1);
              }),
              t
            );
          })();
          e.EventDispatcher = n;
        }),
        i(
          "Actions/ActionContext",
          [
            "require",
            "exports",
            "Actions/Action",
            "Promises",
            "Util/EasingFunctions"
          ],
          function(t, e, i, n, o) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = (function() {
              function t() {
                (this._actors = []),
                  (this._queues = []),
                  null !== arguments &&
                    ((this._actors = Array.prototype.slice.call(arguments, 0)),
                    (this._queues = this._actors.map(function(t) {
                      return t.actionQueue;
                    })));
              }
              return (
                (t.prototype.clearActions = function() {
                  var t = 0,
                    e = this._queues.length;
                  for (t; t < e; t++) this._queues[t].clearActions();
                }),
                (t.prototype.addActorToContext = function(t) {
                  this._actors.push(t), this._queues.push(t.actionQueue);
                }),
                (t.prototype.removeActorFromContext = function(t) {
                  var e = this._actors.indexOf(t);
                  e > -1 &&
                    (this._actors.splice(e, 1), this._queues.splice(e, 1));
                }),
                (t.prototype.easeTo = function(t, e, n, r) {
                  void 0 === r && (r = o.EasingFunctions.Linear);
                  var s = 0,
                    a = this._queues.length;
                  for (s; s < a; s++)
                    this._queues[s].add(
                      new i.EaseTo(this._actors[s], t, e, n, r)
                    );
                  return this;
                }),
                (t.prototype.moveTo = function(t, e, n) {
                  var o = 0,
                    r = this._queues.length;
                  for (o; o < r; o++)
                    this._queues[o].add(new i.MoveTo(this._actors[o], t, e, n));
                  return this;
                }),
                (t.prototype.moveBy = function(t, e, n) {
                  var o = 0,
                    r = this._queues.length;
                  for (o; o < r; o++)
                    this._queues[o].add(new i.MoveBy(this._actors[o], t, e, n));
                  return this;
                }),
                (t.prototype.rotateTo = function(t, e, n) {
                  var o = 0,
                    r = this._queues.length;
                  for (o; o < r; o++)
                    this._queues[o].add(
                      new i.RotateTo(this._actors[o], t, e, n)
                    );
                  return this;
                }),
                (t.prototype.rotateBy = function(t, e, n) {
                  var o = 0,
                    r = this._queues.length;
                  for (o; o < r; o++)
                    this._queues[o].add(
                      new i.RotateBy(this._actors[o], t, e, n)
                    );
                  return this;
                }),
                (t.prototype.scaleTo = function(t, e, n, o) {
                  var r = 0,
                    s = this._queues.length;
                  for (r; r < s; r++)
                    this._queues[r].add(
                      new i.ScaleTo(this._actors[r], t, e, n, o)
                    );
                  return this;
                }),
                (t.prototype.scaleBy = function(t, e, n) {
                  var o = 0,
                    r = this._queues.length;
                  for (o; o < r; o++)
                    this._queues[o].add(
                      new i.ScaleBy(this._actors[o], t, e, n)
                    );
                  return this;
                }),
                (t.prototype.blink = function(t, e, n) {
                  void 0 === n && (n = 1);
                  var o = 0,
                    r = this._queues.length;
                  for (o; o < r; o++)
                    this._queues[o].add(new i.Blink(this._actors[o], t, e, n));
                  return this;
                }),
                (t.prototype.fade = function(t, e) {
                  var n = 0,
                    o = this._queues.length;
                  for (n; n < o; n++)
                    this._queues[n].add(new i.Fade(this._actors[n], t, e));
                  return this;
                }),
                (t.prototype.delay = function(t) {
                  var e = 0,
                    n = this._queues.length;
                  for (e; e < n; e++)
                    this._queues[e].add(new i.Delay(this._actors[e], t));
                  return this;
                }),
                (t.prototype.die = function() {
                  var t = 0,
                    e = this._queues.length;
                  for (t; t < e; t++)
                    this._queues[t].add(new i.Die(this._actors[t]));
                  return this;
                }),
                (t.prototype.callMethod = function(t) {
                  var e = 0,
                    n = this._queues.length;
                  for (e; e < n; e++)
                    this._queues[e].add(new i.CallMethod(this._actors[e], t));
                  return this;
                }),
                (t.prototype.repeat = function(t) {
                  if (!t) return this.repeatForever(), this;
                  var e = 0,
                    n = this._queues.length;
                  for (e; e < n; e++)
                    this._queues[e].add(
                      new i.Repeat(
                        this._actors[e],
                        t,
                        this._actors[e].actionQueue.getActions()
                      )
                    );
                  return this;
                }),
                (t.prototype.repeatForever = function() {
                  var t = 0,
                    e = this._queues.length;
                  for (t; t < e; t++)
                    this._queues[t].add(
                      new i.RepeatForever(
                        this._actors[t],
                        this._actors[t].actionQueue.getActions()
                      )
                    );
                  return this;
                }),
                (t.prototype.follow = function(t, e) {
                  var n = 0,
                    o = this._queues.length;
                  for (n; n < o; n++)
                    void 0 === e
                      ? this._queues[n].add(new i.Follow(this._actors[n], t))
                      : this._queues[n].add(
                          new i.Follow(this._actors[n], t, e)
                        );
                  return this;
                }),
                (t.prototype.meet = function(t, e) {
                  var n = 0,
                    o = this._queues.length;
                  for (n; n < o; n++)
                    void 0 === e
                      ? this._queues[n].add(new i.Meet(this._actors[n], t))
                      : this._queues[n].add(new i.Meet(this._actors[n], t, e));
                  return this;
                }),
                (t.prototype.asPromise = function() {
                  var t = this,
                    e = this._queues.map(function(e, o) {
                      var r = new n.Promise();
                      return (
                        e.add(
                          new i.CallMethod(t._actors[o], function() {
                            r.resolve();
                          })
                        ),
                        r
                      );
                    });
                  return n.Promise.join.apply(this, e);
                }),
                t
              );
            })();
            e.ActionContext = r;
          }
        ),
        i("Actions/IActionable", ["require", "exports"], function(t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        i(
          "Group",
          [
            "require",
            "exports",
            "Algebra",
            "Actions/ActionContext",
            "Actor",
            "Util/Log",
            "Class"
          ],
          function(t, e, i, o, r, s, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var h = (function(t) {
              function e(e, i) {
                var n = t.call(this) || this;
                if (
                  ((n.name = e),
                  (n.scene = i),
                  (n._logger = s.Logger.getInstance()),
                  (n._members = []),
                  (n.actions = new o.ActionContext()),
                  null == i)
                )
                  n._logger.error(
                    "Invalid constructor arguments passed to Group: ",
                    e,
                    ", scene must not be null!"
                  );
                else {
                  i.groups[e] &&
                    n._logger.warn(
                      "Group with name",
                      e,
                      "already exists. This new group will replace it."
                    ),
                    (i.groups[e] = n);
                }
                return n;
              }
              return (
                n(e, t),
                (e.prototype.add = function(t) {
                  t instanceof r.Actor && (t = [].concat(t));
                  var e = 0,
                    i = t.length;
                  for (e; e < i; e++)
                    -1 === this.getMembers().indexOf(t[e]) &&
                      (this._members.push(t[e]),
                      this.scene.add(t[e]),
                      this.actions.addActorToContext(t[e]),
                      this.eventDispatcher.wire(t[e].eventDispatcher));
                }),
                (e.prototype.remove = function(t) {
                  var e = this._members.indexOf(t);
                  e > -1 &&
                    (this._members.splice(e, 1),
                    this.actions.removeActorFromContext(t),
                    this.eventDispatcher.unwire(t.eventDispatcher));
                }),
                (e.prototype.move = function(t) {
                  var e = 0,
                    n = this.getMembers(),
                    o = n.length;
                  if (1 === arguments.length && t instanceof i.Vector)
                    for (e; e < o; e++)
                      (n[e].pos.x += t.x), (n[e].pos.y += t.y);
                  else if (
                    "number" == typeof arguments[0] &&
                    "number" == typeof arguments[1]
                  ) {
                    var r = arguments[0],
                      s = arguments[1];
                    for (e; e < o; e++) (n[e].pos.x += r), (n[e].pos.y += s);
                  } else
                    this._logger.error(
                      "Invalid arguments passed to group move",
                      this.name,
                      "args:",
                      arguments
                    );
                }),
                (e.prototype.rotate = function(t) {
                  if ("number" != typeof t)
                    return void this._logger.error(
                      "Invalid arguments passed to group rotate",
                      this.name,
                      "args:",
                      arguments
                    );
                  for (var e = 0, i = this.getMembers(); e < i.length; e++) {
                    i[e].rotation += t;
                  }
                }),
                (e.prototype.on = function(t, e) {
                  this.eventDispatcher.on(t, e);
                }),
                (e.prototype.off = function(t, e) {
                  this.eventDispatcher.off(t, e);
                }),
                (e.prototype.emit = function(t, e) {
                  this.eventDispatcher.emit(t, e);
                }),
                (e.prototype.contains = function(t) {
                  return this.getMembers().indexOf(t) > -1;
                }),
                (e.prototype.getMembers = function() {
                  return this._members;
                }),
                (e.prototype.getRandomMember = function() {
                  return this._members[
                    Math.floor(Math.random() * this._members.length)
                  ];
                }),
                (e.prototype.getBounds = function() {
                  return this.getMembers()
                    .map(function(t) {
                      return t.getBounds();
                    })
                    .reduce(function(t, e) {
                      return t.combine(e);
                    });
                }),
                e
              );
            })(a.Class);
            e.Group = h;
          }
        ),
        i(
          "Drawing/SpriteEffects",
          ["require", "exports", "Drawing/Color"],
          function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var n = (function() {
              function t() {}
              return (
                (t.prototype.updatePixel = function(t, e, i) {
                  var n = 4 * (t + e * i.width),
                    o = i.data,
                    r = (o[n + 0] + o[n + 1] + o[n + 2]) / 3;
                  (o[n + 0] = r), (o[n + 1] = r), (o[n + 2] = r);
                }),
                t
              );
            })();
            e.Grayscale = n;
            var o = (function() {
              function t() {}
              return (
                (t.prototype.updatePixel = function(t, e, i) {
                  var n = 4 * (t + e * i.width),
                    o = i.data;
                  (o[n + 0] = 255 - o[n + 0]),
                    (o[n + 1] = 255 - o[n + 1]),
                    (o[n + 2] = 255 - o[n + 2]);
                }),
                t
              );
            })();
            e.Invert = o;
            var r = (function() {
              function t(t) {
                this.opacity = t;
              }
              return (
                (t.prototype.updatePixel = function(t, e, i) {
                  var n = 4 * (t + e * i.width),
                    o = i.data;
                  0 !== o[n + 3] &&
                    (o[n + 3] = Math.round(this.opacity * o[n + 3]));
                }),
                t
              );
            })();
            e.Opacity = r;
            var s = (function() {
              function t(t) {
                this.color = t;
              }
              return (
                (t.prototype.updatePixel = function(t, e, i) {
                  var n = 4 * (t + e * i.width),
                    o = i.data;
                  0 !== o[n + 3] &&
                    ((o[n + 0] = (o[n + 0] + this.color.r) / 2),
                    (o[n + 1] = (o[n + 1] + this.color.g) / 2),
                    (o[n + 2] = (o[n + 2] + this.color.b) / 2));
                }),
                t
              );
            })();
            e.Colorize = s;
            var a = (function() {
              function t(t) {
                void 0 === t && (t = 0.1), (this.factor = t);
              }
              return (
                (t.prototype.updatePixel = function(t, e, n) {
                  var o = 4 * (t + e * n.width),
                    r = n.data,
                    s = i.Color.fromRGB(
                      r[o + 0],
                      r[o + 1],
                      r[o + 2],
                      r[o + 3]
                    ).lighten(this.factor);
                  (r[o + 0] = s.r),
                    (r[o + 1] = s.g),
                    (r[o + 2] = s.b),
                    (r[o + 3] = s.a);
                }),
                t
              );
            })();
            e.Lighten = a;
            var h = (function() {
              function t(t) {
                void 0 === t && (t = 0.1), (this.factor = t);
              }
              return (
                (t.prototype.updatePixel = function(t, e, n) {
                  var o = 4 * (t + e * n.width),
                    r = n.data,
                    s = i.Color.fromRGB(
                      r[o + 0],
                      r[o + 1],
                      r[o + 2],
                      r[o + 3]
                    ).darken(this.factor);
                  (r[o + 0] = s.r),
                    (r[o + 1] = s.g),
                    (r[o + 2] = s.b),
                    (r[o + 3] = s.a);
                }),
                t
              );
            })();
            e.Darken = h;
            var c = (function() {
              function t(t) {
                void 0 === t && (t = 0.1), (this.factor = t);
              }
              return (
                (t.prototype.updatePixel = function(t, e, n) {
                  var o = 4 * (t + e * n.width),
                    r = n.data,
                    s = i.Color.fromRGB(
                      r[o + 0],
                      r[o + 1],
                      r[o + 2],
                      r[o + 3]
                    ).saturate(this.factor);
                  (r[o + 0] = s.r),
                    (r[o + 1] = s.g),
                    (r[o + 2] = s.b),
                    (r[o + 3] = s.a);
                }),
                t
              );
            })();
            e.Saturate = c;
            var l = (function() {
              function t(t) {
                void 0 === t && (t = 0.1), (this.factor = t);
              }
              return (
                (t.prototype.updatePixel = function(t, e, n) {
                  var o = 4 * (t + e * n.width),
                    r = n.data,
                    s = i.Color.fromRGB(
                      r[o + 0],
                      r[o + 1],
                      r[o + 2],
                      r[o + 3]
                    ).desaturate(this.factor);
                  (r[o + 0] = s.r),
                    (r[o + 1] = s.g),
                    (r[o + 2] = s.b),
                    (r[o + 3] = s.a);
                }),
                t
              );
            })();
            e.Desaturate = l;
            var u = (function() {
              function t(t) {
                this.color = t;
              }
              return (
                (t.prototype.updatePixel = function(t, e, i) {
                  var n = 4 * (t + e * i.width),
                    o = i.data;
                  0 !== o[n + 3] &&
                    ((o[n + 0] = this.color.r),
                    (o[n + 1] = this.color.g),
                    (o[n + 2] = this.color.b));
                }),
                t
              );
            })();
            e.Fill = u;
          }
        ),
        i("Interfaces/IDrawable", ["require", "exports"], function(t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        i("Interfaces/ILoadable", ["require", "exports"], function(t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        i(
          "Resources/Resource",
          ["require", "exports", "Class", "Promises", "Util/Log"],
          function(t, e, i, o, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var s = (function(t) {
              function e(e, i, n) {
                void 0 === n && (n = !0);
                var o = t.call(this) || this;
                return (
                  (o.path = e),
                  (o.responseType = i),
                  (o.bustCache = n),
                  (o.data = null),
                  (o.logger = r.Logger.getInstance()),
                  (o.onprogress = function() {}),
                  (o.oncomplete = function() {}),
                  (o.onerror = function() {}),
                  o
                );
              }
              return (
                n(e, t),
                (e.prototype.isLoaded = function() {
                  return null !== this.data;
                }),
                (e.prototype.wireEngine = function(t) {
                  this._engine = t;
                }),
                (e.prototype._cacheBust = function(t) {
                  return (
                    /\?\w*=\w*/.test(t)
                      ? (t += "&__=" + Date.now())
                      : (t += "?__=" + Date.now()),
                    t
                  );
                }),
                (e.prototype._start = function() {
                  this.logger.debug("Started loading resource " + this.path);
                }),
                (e.prototype.load = function() {
                  var t = this,
                    e = new o.Promise();
                  if (null !== this.data)
                    return (
                      this.logger.debug(
                        "Already have data for resource",
                        this.path
                      ),
                      e.resolve(this.data),
                      this.oncomplete(),
                      e
                    );
                  var i = new XMLHttpRequest();
                  return (
                    i.open(
                      "GET",
                      this.bustCache ? this._cacheBust(this.path) : this.path,
                      !0
                    ),
                    (i.responseType = this.responseType),
                    (i.onloadstart = function() {
                      t._start();
                    }),
                    (i.onprogress = this.onprogress),
                    (i.onerror = this.onerror),
                    (i.onload = function() {
                      if (0 !== i.status && 200 !== i.status)
                        return (
                          t.logger.error(
                            "Failed to load resource ",
                            t.path,
                            " server responded with error code",
                            i.status
                          ),
                          t.onerror(i.response),
                          void e.resolve(i.response)
                        );
                      (t.data = t.processData(i.response)),
                        t.oncomplete(),
                        t.logger.debug("Completed loading resource", t.path),
                        e.resolve(t.data);
                    }),
                    i.send(),
                    e
                  );
                }),
                (e.prototype.getData = function() {
                  return this.data;
                }),
                (e.prototype.setData = function(t) {
                  this.data = this.processData(t);
                }),
                (e.prototype.processData = function(t) {
                  return "blob" === this.responseType
                    ? URL.createObjectURL(t)
                    : t;
                }),
                e
              );
            })(i.Class);
            e.Resource = s;
          }
        ),
        i(
          "Resources/Texture",
          [
            "require",
            "exports",
            "Resources/Resource",
            "Promises",
            "Drawing/Sprite"
          ],
          function(t, e, i, o, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var s = (function(t) {
              function e(e, i) {
                void 0 === i && (i = !0);
                var n = t.call(this, e, "blob", i) || this;
                return (
                  (n.path = e),
                  (n.bustCache = i),
                  (n.loaded = new o.Promise()),
                  (n._isLoaded = !1),
                  (n._sprite = null),
                  (n._sprite = new r.Sprite(n, 0, 0, 0, 0)),
                  n
                );
              }
              return (
                n(e, t),
                (e.prototype.isLoaded = function() {
                  return this._isLoaded;
                }),
                (e.prototype.load = function() {
                  var e = this,
                    i = new o.Promise();
                  return (
                    t.prototype.load.call(this).then(
                      function() {
                        (e.image = new Image()),
                          e.image.addEventListener("load", function() {
                            (e._isLoaded = !0),
                              (e.width = e._sprite.swidth = e._sprite.naturalWidth = e._sprite.width =
                                e.image.naturalWidth),
                              (e.height = e._sprite.sheight = e._sprite.naturalHeight = e._sprite.height =
                                e.image.naturalHeight),
                              e.loaded.resolve(e.image),
                              i.resolve(e.image);
                          }),
                          (e.image.src = t.prototype.getData.call(e));
                      },
                      function() {
                        i.reject("Error loading texture.");
                      }
                    ),
                    i
                  );
                }),
                (e.prototype.asSprite = function() {
                  return this._sprite;
                }),
                e
              );
            })(i.Resource);
            e.Texture = s;
          }
        ),
        i(
          "Drawing/Sprite",
          [
            "require",
            "exports",
            "Drawing/SpriteEffects",
            "Drawing/Color",
            "Algebra",
            "Util/Log",
            "Util/Util"
          ],
          function(t, e, i, n, o, r, s) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var a = (function() {
              function t(t, e, i, n, s) {
                var a = this;
                (this.sx = e),
                  (this.sy = i),
                  (this.swidth = n),
                  (this.sheight = s),
                  (this.rotation = 0),
                  (this.anchor = new o.Vector(0, 0)),
                  (this.scale = new o.Vector(1, 1)),
                  (this.logger = r.Logger.getInstance()),
                  (this.flipVertical = !1),
                  (this.flipHorizontal = !1),
                  (this.width = 0),
                  (this.height = 0),
                  (this.effects = []),
                  (this.naturalWidth = 0),
                  (this.naturalHeight = 0),
                  (this._spriteCanvas = null),
                  (this._spriteCtx = null),
                  (this._pixelData = null),
                  (this._pixelsLoaded = !1),
                  (this._dirtyEffect = !1),
                  (e < 0 || i < 0 || n < 0 || s < 0) &&
                    this.logger.error(
                      "Sprite cannot have any negative dimensions x:",
                      e,
                      "y:",
                      i,
                      "width:",
                      n,
                      "height:",
                      s
                    ),
                  (this._texture = t),
                  (this._spriteCanvas = document.createElement("canvas")),
                  (this._spriteCanvas.width = n),
                  (this._spriteCanvas.height = s),
                  (this._spriteCtx = this._spriteCanvas.getContext("2d")),
                  this._texture.loaded
                    .then(function() {
                      (a._spriteCanvas.width =
                        a._spriteCanvas.width || a._texture.image.naturalWidth),
                        (a._spriteCanvas.height =
                          a._spriteCanvas.height ||
                          a._texture.image.naturalHeight),
                        a._loadPixels(),
                        (a._dirtyEffect = !0);
                    })
                    .error(function(t) {
                      a.logger.error(
                        "Error loading texture ",
                        a._texture.path,
                        t
                      );
                    }),
                  (this.width = n),
                  (this.height = s),
                  (this.naturalWidth = n),
                  (this.naturalHeight = s);
              }
              return (
                (t.prototype._loadPixels = function() {
                  if (this._texture.isLoaded() && !this._pixelsLoaded) {
                    var t = this._texture.image.naturalWidth || 0,
                      e = this._texture.image.naturalHeight || 0;
                    this.swidth > t &&
                      this.logger.warn(
                        "The sprite width",
                        this.swidth,
                        "exceeds the width",
                        t,
                        "of the backing texture",
                        this._texture.path
                      ),
                      this.sheight > e &&
                        this.logger.warn(
                          "The sprite height",
                          this.sheight,
                          "exceeds the height",
                          e,
                          "of the backing texture",
                          this._texture.path
                        ),
                      this._spriteCtx.drawImage(
                        this._texture.image,
                        s.clamp(this.sx, 0, t),
                        s.clamp(this.sy, 0, e),
                        s.clamp(this.swidth, 0, t),
                        s.clamp(this.sheight, 0, e),
                        0,
                        0,
                        this.swidth,
                        this.sheight
                      ),
                      (this._pixelsLoaded = !0);
                  }
                }),
                (t.prototype.opacity = function(t) {
                  this.addEffect(new i.Opacity(t));
                }),
                (t.prototype.grayscale = function() {
                  this.addEffect(new i.Grayscale());
                }),
                (t.prototype.invert = function() {
                  this.addEffect(new i.Invert());
                }),
                (t.prototype.fill = function(t) {
                  this.addEffect(new i.Fill(t));
                }),
                (t.prototype.colorize = function(t) {
                  this.addEffect(new i.Colorize(t));
                }),
                (t.prototype.lighten = function(t) {
                  void 0 === t && (t = 0.1), this.addEffect(new i.Lighten(t));
                }),
                (t.prototype.darken = function(t) {
                  void 0 === t && (t = 0.1), this.addEffect(new i.Darken(t));
                }),
                (t.prototype.saturate = function(t) {
                  void 0 === t && (t = 0.1), this.addEffect(new i.Saturate(t));
                }),
                (t.prototype.desaturate = function(t) {
                  void 0 === t && (t = 0.1),
                    this.addEffect(new i.Desaturate(t));
                }),
                (t.prototype.addEffect = function(t) {
                  this.effects.push(t),
                    this._texture.isLoaded() && this._pixelsLoaded
                      ? this._applyEffects()
                      : (this._dirtyEffect = !0);
                }),
                (t.prototype.removeEffect = function(t) {
                  var e = -1;
                  (e = "number" == typeof t ? t : this.effects.indexOf(t)) <
                    0 ||
                    e >= this.effects.length ||
                    (this.effects.splice(e, 1),
                    this._texture.isLoaded() && this._pixelsLoaded
                      ? this._applyEffects()
                      : (this._dirtyEffect = !0));
                }),
                (t.prototype._applyEffects = function() {
                  var t = this._texture.image.naturalWidth || 0,
                    e = this._texture.image.naturalHeight || 0;
                  this._spriteCtx.clearRect(0, 0, this.swidth, this.sheight),
                    this._spriteCtx.drawImage(
                      this._texture.image,
                      s.clamp(this.sx, 0, t),
                      s.clamp(this.sy, 0, e),
                      s.clamp(this.swidth, 0, t),
                      s.clamp(this.sheight, 0, e),
                      0,
                      0,
                      this.swidth,
                      this.sheight
                    ),
                    (this._pixelData = this._spriteCtx.getImageData(
                      0,
                      0,
                      this.swidth,
                      this.sheight
                    ));
                  var i = 0,
                    n = 0,
                    o = 0,
                    r = this.effects.length;
                  for (i; i < r; i++)
                    for (o = 0; o < this.sheight; o++)
                      for (n = 0; n < this.swidth; n++)
                        this.effects[i].updatePixel(n, o, this._pixelData);
                  this._spriteCtx.clearRect(0, 0, this.swidth, this.sheight),
                    this._spriteCtx.putImageData(this._pixelData, 0, 0),
                    (this._dirtyEffect = !1);
                }),
                (t.prototype.clearEffects = function() {
                  (this.effects.length = 0), this._applyEffects();
                }),
                (t.prototype.reset = function() {}),
                (t.prototype.debugDraw = function(t, e, i) {
                  t.save(), t.translate(e, i), t.rotate(this.rotation);
                  var o = this.width * this.scale.x,
                    r = this.height * this.scale.y,
                    s = o * this.anchor.x,
                    a = r * this.anchor.y;
                  (t.strokeStyle = n.Color.Black.toString()),
                    t.strokeRect(-s, -a, o, r),
                    t.restore();
                }),
                (t.prototype.draw = function(t, e, i) {
                  this._dirtyEffect && this._applyEffects(),
                    (this.width = this.naturalWidth * this.scale.x),
                    (this.height = this.naturalHeight * this.scale.y),
                    t.save();
                  var n = this.width * this.anchor.x,
                    o = this.height * this.anchor.y;
                  t.translate(e, i), t.rotate(this.rotation);
                  var r = this.swidth * this.scale.x,
                    s = this.sheight * this.scale.y;
                  this.flipHorizontal && (t.translate(r, 0), t.scale(-1, 1)),
                    this.flipVertical && (t.translate(0, s), t.scale(1, -1)),
                    t.drawImage(
                      this._spriteCanvas,
                      0,
                      0,
                      this.swidth,
                      this.sheight,
                      -n,
                      -o,
                      r,
                      s
                    ),
                    t.restore();
                }),
                (t.prototype.clone = function() {
                  var e = new t(
                    this._texture,
                    this.sx,
                    this.sy,
                    this.swidth,
                    this.sheight
                  );
                  (e.scale = this.scale.clone()),
                    (e.rotation = this.rotation),
                    (e.flipHorizontal = this.flipHorizontal),
                    (e.flipVertical = this.flipVertical);
                  var i = 0,
                    n = this.effects.length;
                  for (i; i < n; i++) e.addEffect(this.effects[i]);
                  return e;
                }),
                t
              );
            })();
            e.Sprite = a;
          }
        ),
        i(
          "Drawing/Animation",
          [
            "require",
            "exports",
            "Drawing/SpriteEffects",
            "Algebra",
            "Util/Util"
          ],
          function(t, e, i, n, o) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = (function() {
              function t(t, e, i, o) {
                (this.currentFrame = 0),
                  (this._oldTime = Date.now()),
                  (this.anchor = new n.Vector(0, 0)),
                  (this.rotation = 0),
                  (this.scale = new n.Vector(1, 1)),
                  (this.loop = !0),
                  (this.freezeFrame = -1),
                  (this.flipVertical = !1),
                  (this.flipHorizontal = !1),
                  (this.width = 0),
                  (this.height = 0),
                  (this.naturalWidth = 0),
                  (this.naturalHeight = 0),
                  (this.sprites = e),
                  (this.speed = i),
                  (this._engine = t),
                  null != o && (this.loop = o),
                  e &&
                    e[0] &&
                    ((this.height = e[0] ? e[0].height : 0),
                    (this.width = e[0] ? e[0].width : 0),
                    (this.naturalWidth = e[0] ? e[0].naturalWidth : 0),
                    (this.naturalHeight = e[0] ? e[0].naturalHeight : 0),
                    (this.freezeFrame = e.length - 1));
              }
              return (
                (t.prototype.opacity = function(t) {
                  this.addEffect(new i.Opacity(t));
                }),
                (t.prototype.grayscale = function() {
                  this.addEffect(new i.Grayscale());
                }),
                (t.prototype.invert = function() {
                  this.addEffect(new i.Invert());
                }),
                (t.prototype.fill = function(t) {
                  this.addEffect(new i.Fill(t));
                }),
                (t.prototype.colorize = function(t) {
                  this.addEffect(new i.Colorize(t));
                }),
                (t.prototype.lighten = function(t) {
                  void 0 === t && (t = 0.1), this.addEffect(new i.Lighten(t));
                }),
                (t.prototype.darken = function(t) {
                  void 0 === t && (t = 0.1), this.addEffect(new i.Darken(t));
                }),
                (t.prototype.saturate = function(t) {
                  void 0 === t && (t = 0.1), this.addEffect(new i.Saturate(t));
                }),
                (t.prototype.desaturate = function(t) {
                  void 0 === t && (t = 0.1),
                    this.addEffect(new i.Desaturate(t));
                }),
                (t.prototype.addEffect = function(t) {
                  for (var e in this.sprites) this.sprites[e].addEffect(t);
                }),
                (t.prototype.removeEffect = function(t) {
                  for (var e in this.sprites) this.sprites[e].removeEffect(t);
                }),
                (t.prototype.clearEffects = function() {
                  for (var t in this.sprites) this.sprites[t].clearEffects();
                }),
                (t.prototype._setAnchor = function(t) {
                  for (var e in this.sprites)
                    this.sprites[e].anchor.setTo(t.x, t.y);
                }),
                (t.prototype._setRotation = function(t) {
                  for (var e in this.sprites) this.sprites[e].rotation = t;
                }),
                (t.prototype._setScale = function(t) {
                  for (var e in this.sprites) this.sprites[e].scale = t;
                }),
                (t.prototype.reset = function() {
                  this.currentFrame = 0;
                }),
                (t.prototype.isDone = function() {
                  return !this.loop && this.currentFrame >= this.sprites.length;
                }),
                (t.prototype.tick = function() {
                  var t = Date.now();
                  t - this._oldTime > this.speed &&
                    ((this.currentFrame = this.loop
                      ? (this.currentFrame + 1) % this.sprites.length
                      : this.currentFrame + 1),
                    (this._oldTime = t));
                }),
                (t.prototype._updateValues = function() {
                  this._setAnchor(this.anchor),
                    this._setRotation(this.rotation),
                    this._setScale(this.scale);
                }),
                (t.prototype.skip = function(t) {
                  this.currentFrame =
                    (this.currentFrame + t) % this.sprites.length;
                }),
                (t.prototype.draw = function(t, e, i) {
                  this.tick(), this._updateValues();
                  var n;
                  this.currentFrame < this.sprites.length &&
                    ((n = this.sprites[this.currentFrame]),
                    this.flipVertical && (n.flipVertical = this.flipVertical),
                    this.flipHorizontal &&
                      (n.flipHorizontal = this.flipHorizontal),
                    n.draw(t, e, i)),
                    -1 !== this.freezeFrame &&
                      this.currentFrame >= this.sprites.length &&
                      ((n = this.sprites[
                        o.clamp(this.freezeFrame, 0, this.sprites.length - 1)
                      ]),
                      n.draw(t, e, i)),
                    n && ((this.width = n.width), (this.height = n.height));
                }),
                (t.prototype.play = function(t, e) {
                  this.reset(), this._engine.playAnimation(this, t, e);
                }),
                t
              );
            })();
            e.Animation = r;
          }
        ),
        i(
          "Drawing/SpriteSheet",
          [
            "require",
            "exports",
            "Drawing/Sprite",
            "Drawing/Animation",
            "Drawing/Color",
            "Drawing/SpriteEffects",
            "Util/Log",
            "Label"
          ],
          function(t, e, i, o, r, s, a, h) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var c = (function() {
              function t(t, e, n, o, r) {
                (this.image = t),
                  (this.columns = e),
                  (this.rows = n),
                  (this.sprites = []),
                  (this._internalImage = t.image),
                  (this.sprites = new Array(e * n));
                var s = 0,
                  a = 0;
                for (s = 0; s < n; s++)
                  for (a = 0; a < e; a++)
                    this.sprites[a + s * e] = new i.Sprite(
                      this.image,
                      a * o,
                      s * r,
                      o,
                      r
                    );
              }
              return (
                (t.prototype.getAnimationByIndices = function(t, e, i) {
                  var n = this,
                    r = e.map(function(t) {
                      return n.sprites[t];
                    });
                  return (
                    (r = r.map(function(t) {
                      return t.clone();
                    })),
                    new o.Animation(t, r, i)
                  );
                }),
                (t.prototype.getAnimationBetween = function(t, e, i, n) {
                  var r = this.sprites.slice(e, i);
                  return (
                    (r = r.map(function(t) {
                      return t.clone();
                    })),
                    new o.Animation(t, r, n)
                  );
                }),
                (t.prototype.getAnimationForAll = function(t, e) {
                  var i = this.sprites.map(function(t) {
                    return t.clone();
                  });
                  return new o.Animation(t, i, e);
                }),
                (t.prototype.getSprite = function(t) {
                  if (t >= 0 && t < this.sprites.length) return this.sprites[t];
                  throw new Error("Invalid index: " + t);
                }),
                t
              );
            })();
            e.SpriteSheet = c;
            var l = (function(t) {
              function e(e, i, n, o, s, a, h) {
                var c = t.call(this, e, o, s, a, h) || this;
                return (
                  (c.image = e),
                  (c.alphabet = i),
                  (c.caseInsensitive = n),
                  (c.spWidth = a),
                  (c.spHeight = h),
                  (c._currentColor = r.Color.Black.clone()),
                  (c._currentOpacity = 1),
                  (c._sprites = {}),
                  (c._textShadowOn = !1),
                  (c._textShadowDirty = !0),
                  (c._textShadowColor = r.Color.Black.clone()),
                  (c._textShadowSprites = {}),
                  (c._shadowOffsetX = 5),
                  (c._shadowOffsetY = 5),
                  (c._sprites = c.getTextSprites()),
                  c
                );
              }
              return (
                n(e, t),
                (e.prototype.getTextSprites = function() {
                  for (var t = {}, e = 0; e < this.alphabet.length; e++) {
                    var i = this.alphabet[e];
                    this.caseInsensitive && (i = i.toLowerCase()),
                      (t[i] = this.sprites[e].clone());
                  }
                  return t;
                }),
                (e.prototype.setTextShadow = function(t, e, i) {
                  (this._textShadowOn = !0),
                    (this._shadowOffsetX = t),
                    (this._shadowOffsetY = e),
                    (this._textShadowColor = i.clone()),
                    (this._textShadowDirty = !0);
                  for (var n in this._sprites)
                    this._textShadowSprites[n] = this._sprites[n].clone();
                }),
                (e.prototype.useTextShadow = function(t) {
                  (this._textShadowOn = t),
                    t && this.setTextShadow(5, 5, this._textShadowColor);
                }),
                (e.prototype.draw = function(t, e, i, n, o) {
                  if (
                    ((o = this._parseOptions(o)),
                    this._currentColor.toString() !== o.color.toString() ||
                      this._currentOpacity !== o.opacity)
                  ) {
                    (this._currentOpacity = o.opacity),
                      (this._currentColor = o.color);
                    for (var r in this._sprites)
                      this._sprites[r].clearEffects(),
                        this._sprites[r].fill(o.color),
                        this._sprites[r].opacity(o.opacity);
                  }
                  if (
                    this._textShadowOn &&
                    this._textShadowDirty &&
                    this._textShadowColor
                  ) {
                    for (var c in this._textShadowSprites)
                      this._textShadowSprites[c].clearEffects(),
                        this._textShadowSprites[c].addEffect(
                          new s.Fill(this._textShadowColor.clone())
                        );
                    this._textShadowDirty = !1;
                  }
                  var l = this.sprites[0],
                    u = l.sheight,
                    p = o.fontSize / u,
                    f = e.length * l.swidth * p + e.length * o.letterSpacing,
                    d = i;
                  o.textAlign === h.TextAlign.Left ||
                  o.textAlign === h.TextAlign.Start
                    ? (d = i)
                    : o.textAlign === h.TextAlign.Right ||
                      o.textAlign === h.TextAlign.End
                      ? (d = i - f)
                      : o.textAlign === h.TextAlign.Center && (d = i - f / 2);
                  var g = n - u * p;
                  o.baseAlign === h.BaseAlign.Top ||
                  o.baseAlign === h.BaseAlign.Hanging
                    ? (g = n)
                    : o.baseAlign === h.BaseAlign.Ideographic ||
                      o.baseAlign === h.BaseAlign.Bottom ||
                      o.baseAlign === h.BaseAlign.Alphabetic
                      ? (g = n - u * p)
                      : o.baseAlign === h.BaseAlign.Middle &&
                        (g = n - u * p / 2);
                  for (var y = 0; y < e.length; y++) {
                    var _ = e[y];
                    this.caseInsensitive && (_ = _.toLowerCase());
                    try {
                      this._textShadowOn &&
                        ((this._textShadowSprites[_].scale.x = p),
                        (this._textShadowSprites[_].scale.y = p),
                        this._textShadowSprites[_].draw(
                          t,
                          d + this._shadowOffsetX,
                          g + this._shadowOffsetY
                        ));
                      var v = this._sprites[_];
                      (v.scale.x = p),
                        (v.scale.y = p),
                        v.draw(t, d, g),
                        (d += v.width + o.letterSpacing);
                    } catch (t) {
                      a.Logger.getInstance().error(
                        "SpriteFont Error drawing char " + _
                      );
                    }
                  }
                }),
                (e.prototype._parseOptions = function(t) {
                  return {
                    fontSize: t.fontSize || 10,
                    letterSpacing: t.letterSpacing || 0,
                    color: t.color || r.Color.Black.clone(),
                    textAlign:
                      void 0 === typeof t.textAlign
                        ? h.TextAlign.Left
                        : t.textAlign,
                    baseAlign:
                      void 0 === typeof t.baseAlign
                        ? h.BaseAlign.Bottom
                        : t.baseAlign,
                    maxWidth: t.maxWidth || -1,
                    opacity: t.opacity || 0
                  };
                }),
                e
              );
            })(c);
            e.SpriteFont = l;
          }
        ),
        i("Label", ["require", "exports", "Drawing/Color", "Actor"], function(
          t,
          e,
          i,
          o
        ) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r;
          !(function(t) {
            (t[(t.Em = 0)] = "Em"),
              (t[(t.Rem = 1)] = "Rem"),
              (t[(t.Px = 2)] = "Px"),
              (t[(t.Pt = 3)] = "Pt"),
              (t[(t.Percent = 4)] = "Percent");
          })((r = e.FontUnit || (e.FontUnit = {})));
          var s;
          !(function(t) {
            (t[(t.Left = 0)] = "Left"),
              (t[(t.Right = 1)] = "Right"),
              (t[(t.Center = 2)] = "Center"),
              (t[(t.Start = 3)] = "Start"),
              (t[(t.End = 4)] = "End");
          })((s = e.TextAlign || (e.TextAlign = {})));
          var a;
          !(function(t) {
            (t[(t.Top = 0)] = "Top"),
              (t[(t.Hanging = 1)] = "Hanging"),
              (t[(t.Middle = 2)] = "Middle"),
              (t[(t.Alphabetic = 3)] = "Alphabetic"),
              (t[(t.Ideographic = 4)] = "Ideographic"),
              (t[(t.Bottom = 5)] = "Bottom");
          })((a = e.BaseAlign || (e.BaseAlign = {})));
          var h;
          !(function(t) {
            (t[(t.Normal = 0)] = "Normal"),
              (t[(t.Italic = 1)] = "Italic"),
              (t[(t.Oblique = 2)] = "Oblique");
          })((h = e.FontStyle || (e.FontStyle = {})));
          var c = (function(t) {
            function e(e, n, c, l, u) {
              var p = t.call(this, n, c) || this;
              return (
                (p.bold = !1),
                (p.fontSize = 10),
                (p.fontStyle = h.Normal),
                (p.fontUnit = r.Px),
                (p.textAlign = s.Left),
                (p.baseAlign = a.Bottom),
                (p.letterSpacing = 0),
                (p.caseInsensitive = !0),
                (p._textShadowOn = !1),
                (p._shadowOffsetX = 0),
                (p._shadowOffsetY = 0),
                (p._shadowColor = i.Color.Black.clone()),
                (p.text = e || ""),
                (p.color = i.Color.Black.clone()),
                (p.spriteFont = u),
                (p.collisionType = o.CollisionType.PreventCollision),
                (p.fontFamily = l || "sans-serif"),
                p
              );
            }
            return (
              n(e, t),
              (e.prototype.getTextWidth = function(t) {
                var e = t.font;
                t.font = this._fontString;
                var i = t.measureText(this.text).width;
                return (t.font = e), i;
              }),
              (e.prototype._lookupFontUnit = function(t) {
                switch (t) {
                  case r.Em:
                    return "em";
                  case r.Rem:
                    return "rem";
                  case r.Pt:
                    return "pt";
                  case r.Px:
                    return "px";
                  case r.Percent:
                    return "%";
                  default:
                    return "px";
                }
              }),
              (e.prototype._lookupTextAlign = function(t) {
                switch (t) {
                  case s.Left:
                    return "left";
                  case s.Right:
                    return "right";
                  case s.Center:
                    return "center";
                  case s.End:
                    return "end";
                  case s.Start:
                  default:
                    return "start";
                }
              }),
              (e.prototype._lookupBaseAlign = function(t) {
                switch (t) {
                  case a.Alphabetic:
                    return "alphabetic";
                  case a.Bottom:
                    return "bottom";
                  case a.Hanging:
                    return "hangin";
                  case a.Ideographic:
                    return "ideographic";
                  case a.Middle:
                    return "middle";
                  case a.Top:
                    return "top";
                  default:
                    return "alphabetic";
                }
              }),
              (e.prototype._lookupFontStyle = function(t) {
                var e = this.bold ? " bold" : "";
                switch (t) {
                  case h.Italic:
                    return "italic" + e;
                  case h.Normal:
                    return "normal" + e;
                  case h.Oblique:
                    return "oblique" + e;
                  default:
                    return "normal" + e;
                }
              }),
              (e.prototype.setTextShadow = function(t, e, i) {
                this.spriteFont.setTextShadow(t, e, i);
              }),
              (e.prototype.useTextShadow = function(t) {
                this.spriteFont.useTextShadow(t);
              }),
              (e.prototype.clearTextShadow = function() {
                (this._textShadowOn = !1),
                  (this._shadowOffsetX = 0),
                  (this._shadowOffsetY = 0),
                  (this._shadowColor = i.Color.Black.clone());
              }),
              (e.prototype.update = function(e, i) {
                t.prototype.update.call(this, e, i);
              }),
              (e.prototype.draw = function(e, i) {
                e.save(),
                  e.translate(this.pos.x, this.pos.y),
                  e.scale(this.scale.x, this.scale.y),
                  e.rotate(this.rotation),
                  this._textShadowOn &&
                    (e.save(),
                    e.translate(this._shadowOffsetX, this._shadowOffsetY),
                    this._fontDraw(e),
                    e.restore()),
                  this._fontDraw(e),
                  t.prototype.draw.call(this, e, i),
                  e.restore();
              }),
              (e.prototype._fontDraw = function(t) {
                if (this.spriteFont)
                  this.spriteFont.draw(t, this.text, 0, 0, {
                    color: this.color.clone(),
                    baseAlign: this.baseAlign,
                    textAlign: this.textAlign,
                    fontSize: this.fontSize,
                    letterSpacing: this.letterSpacing,
                    opacity: this.opacity
                  });
                else {
                  var e = t.textAlign,
                    i = t.textBaseline;
                  (t.textAlign = this._lookupTextAlign(this.textAlign)),
                    (t.textBaseline = this._lookupBaseAlign(this.baseAlign)),
                    this.color && (this.color.a = this.opacity),
                    (t.fillStyle = this.color.toString()),
                    (t.font = this._fontString),
                    this.maxWidth
                      ? t.fillText(this.text, 0, 0, this.maxWidth)
                      : t.fillText(this.text, 0, 0),
                    (t.textAlign = e),
                    (t.textBaseline = i);
                }
              }),
              Object.defineProperty(e.prototype, "_fontString", {
                get: function() {
                  return (
                    this._lookupFontStyle(this.fontStyle) +
                    " " +
                    this.fontSize +
                    this._lookupFontUnit(this.fontUnit) +
                    " " +
                    this.fontFamily
                  );
                },
                enumerable: !0,
                configurable: !0
              }),
              (e.prototype.debugDraw = function(e) {
                t.prototype.debugDraw.call(this, e);
              }),
              e
            );
          })(o.Actor);
          e.Label = c;
        }),
        i("Interfaces/IAudio", ["require", "exports"], function(t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        i("Interfaces/IAudioImplementation", ["require", "exports"], function(
          t,
          e
        ) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        i(
          "Resources/Sound",
          ["require", "exports", "Util/Log", "Util/Util", "Promises"],
          function(t, e, i, n, o) {
            "use strict";
            function r() {
              return window.AudioContext ? new h() : new a();
            }
            if (
              (Object.defineProperty(e, "__esModule", { value: !0 }),
              window.AudioContext)
            )
              var s = new window.AudioContext();
            var a = (function() {
              function t() {
                this.responseType = "blob";
              }
              return (
                (t.prototype.processData = function(t) {
                  var e = URL.createObjectURL(t);
                  return o.Promise.resolve(e);
                }),
                (t.prototype.createInstance = function(t) {
                  return new l(t);
                }),
                t
              );
            })();
            e.AudioTag = a;
            var h = (function() {
              function t() {
                (this._logger = i.Logger.getInstance()),
                  (this.responseType = "arraybuffer");
              }
              return (
                (t.prototype.processData = function(t) {
                  var e = this,
                    i = new o.Promise();
                  return (
                    s.decodeAudioData(
                      t,
                      function(t) {
                        i.resolve(t);
                      },
                      function() {
                        e._logger.error(
                          "Unable to decode  this browser may not fully support this format, or the file may be corrupt, if this is an mp3 try removing id3 tags and album art from the file."
                        ),
                          i.resolve(void 0);
                      }
                    ),
                    i
                  );
                }),
                (t.prototype.createInstance = function(t) {
                  return new u(t);
                }),
                (t.unlock = function() {
                  if (!t._unlocked && s) {
                    var e = s.createBuffer(1, 1, 22050),
                      i = s.createBufferSource(),
                      n = !1;
                    (i.buffer = e),
                      i.connect(s.destination),
                      (i.onended = function() {
                        return (n = !0);
                      }),
                      i.noteOn ? i.noteOn(0) : i.start(0),
                      setTimeout(function() {
                        if (i.playbackState) {
                          var e = i;
                          (e.playbackState !== e.PLAYING_STATE &&
                            e.playbackState !== e.FINISHED_STATE) ||
                            (t._unlocked = !0);
                        } else (s.currentTime > 0 || n) && (t._unlocked = !0);
                      }, 0);
                  }
                }),
                (t.isUnlocked = function() {
                  return this._unlocked;
                }),
                t
              );
            })();
            (h._unlocked = !1),
              (e.WebAudio = h),
              (e.getAudioImplementation = r);
            var c = (function() {
              function t() {
                for (var e = [], n = 0; n < arguments.length; n++)
                  e[n] = arguments[n];
                (this._logger = i.Logger.getInstance()),
                  (this._data = null),
                  (this._tracks = []),
                  (this._isLoaded = !1),
                  (this._isPaused = !1),
                  (this._loop = !1),
                  (this._volume = 1),
                  (this.onprogress = function() {}),
                  (this.oncomplete = function() {}),
                  (this.onerror = function() {}),
                  (this._wasPlayingOnHidden = !1),
                  (this.path = "");
                for (var o = 0, s = e; o < s.length; o++) {
                  var a = s[o];
                  if (t.canPlayFile(a)) {
                    this.path = a;
                    break;
                  }
                }
                this.path ||
                  (this._logger.warn(
                    "This browser does not support any of the audio files specified:",
                    e.join(", ")
                  ),
                  this._logger.warn("Attempting to use", e[0]),
                  (this.path = e[0])),
                  (this.sound = r());
              }
              return (
                (t.canPlayFile = function(t) {
                  try {
                    var e = new Audio(),
                      n = /.*\.([A-Za-z0-9]+)$/,
                      o = t.match(n)[1];
                    return !!e.canPlayType("audio/" + o);
                  } catch (t) {
                    return (
                      i.Logger.getInstance().warn(
                        "Cannot determine audio support, assuming no support for the Audio Tag",
                        t
                      ),
                      !1
                    );
                  }
                }),
                (t.prototype.wireEngine = function(t) {
                  var e = this;
                  t &&
                    ((this._engine = t),
                    this._engine.on("hidden", function() {
                      t.pauseAudioWhenHidden &&
                        e.isPlaying() &&
                        ((e._wasPlayingOnHidden = !0), e.pause());
                    }),
                    this._engine.on("visible", function() {
                      t.pauseAudioWhenHidden &&
                        e._wasPlayingOnHidden &&
                        (e.play(), (e._wasPlayingOnHidden = !1));
                    }));
                }),
                (t.prototype.instanceCount = function() {
                  return this._tracks.length;
                }),
                (t.prototype.setVolume = function(t) {
                  this._volume = t;
                  for (var e = 0, i = this._tracks; e < i.length; e++) {
                    i[e].setVolume(t);
                  }
                  this._logger.debug(
                    "Set volume for all instances of sound",
                    this.path,
                    "to",
                    t
                  );
                }),
                (t.prototype.setLoop = function(t) {
                  this._loop = t;
                  for (var e = 0, i = this._tracks; e < i.length; e++) {
                    i[e].setLoop(t);
                  }
                  this._logger.debug(
                    "Set loop for all instances of sound",
                    this.path,
                    "to",
                    t
                  );
                }),
                (t.prototype.isPlaying = function() {
                  return this._tracks.some(function(t) {
                    return t.isPlaying();
                  });
                }),
                (t.prototype.play = function(t) {
                  var e = this;
                  if (this._isLoaded) {
                    for (
                      var i = [], r = 0, s = this._tracks;
                      r < s.length;
                      r++
                    ) {
                      var a = s[r];
                      i.push(a.play());
                    }
                    if (this._isPaused)
                      return (
                        (this._isPaused = !1),
                        this._logger.debug(
                          "Resuming paused instances for sound",
                          this.path,
                          this._tracks
                        ),
                        o.Promise.join(i)
                      );
                    var h = this.sound.createInstance(this._data);
                    return (
                      h.setLoop(this._loop),
                      t
                        ? h.setVolume(n.clamp(t, 0, 1))
                        : h.setVolume(this._volume),
                      this._tracks.push(h),
                      this._logger.debug(
                        "Playing new instance for sound",
                        this.path
                      ),
                      h.play().then(function() {
                        return e._tracks.splice(e._tracks.indexOf(h), 1), !0;
                      })
                    );
                  }
                  return o.Promise.resolve(!0);
                }),
                (t.prototype.pause = function() {
                  for (var t = 0, e = this._tracks; t < e.length; t++) {
                    e[t].pause();
                  }
                  (this._isPaused = !0),
                    this._logger.debug(
                      "Paused all instances of sound",
                      this.path
                    );
                }),
                (t.prototype.stop = function() {
                  this._isPaused = !1;
                  for (
                    var t = this._tracks.concat([]), e = 0, i = t;
                    e < i.length;
                    e++
                  ) {
                    i[e].stop();
                  }
                  this._logger.debug(
                    "Stopped all instances of sound",
                    this.path
                  );
                }),
                (t.prototype.isLoaded = function() {
                  return this._isLoaded;
                }),
                (t.prototype.load = function() {
                  var t = this,
                    e = new o.Promise();
                  if (this.getData())
                    return (
                      this._logger.debug(
                        "Already have data for audio resource",
                        this.path
                      ),
                      e.resolve(this.sound),
                      this.oncomplete(),
                      e
                    );
                  this._logger.debug("Started loading sound", this.path);
                  try {
                    this._fetchResource(function(i) {
                      if (200 !== i.status)
                        return (
                          t._logger.error(
                            "Failed to load audio resource ",
                            t.path,
                            " server responded with error code",
                            i.status
                          ),
                          t.onerror(i.response),
                          void e.resolve(null)
                        );
                      t.setData(i.response).then(
                        function() {
                          t.oncomplete(),
                            t._logger.debug("Completed loading sound", t.path),
                            e.resolve(t.sound);
                        },
                        function(t) {
                          return e.resolve(t);
                        }
                      );
                    });
                  } catch (t) {
                    this._logger.error(
                      "Error loading sound! If this is a cross origin error,             you must host your sound with your html and javascript."
                    ),
                      this.onerror(t),
                      e.resolve(t);
                  }
                  return e;
                }),
                (t.prototype._fetchResource = function(t) {
                  var e = new XMLHttpRequest();
                  e.open("GET", this.path, !0),
                    (e.responseType = this.sound.responseType),
                    (e.onprogress = this.onprogress),
                    (e.onerror = this.onerror),
                    (e.onload = function() {
                      return t(e);
                    }),
                    e.send();
                }),
                (t.prototype.getData = function() {
                  return this._data;
                }),
                (t.prototype.setData = function(t) {
                  var e = this;
                  return this.sound.processData(t).then(function(t) {
                    return (e._isLoaded = !0), (e._data = e.processData(t)), t;
                  });
                }),
                (t.prototype.processData = function(t) {
                  return t;
                }),
                t
              );
            })();
            e.Sound = c;
            var l = (function() {
                function t(t) {
                  (this._isPlaying = !1),
                    (this._isPaused = !1),
                    (this._loop = !1),
                    (this._volume = 1),
                    (this._audioElement = new Audio(t));
                }
                return (
                  (t.prototype.isPlaying = function() {
                    return this._isPlaying;
                  }),
                  Object.defineProperty(t.prototype, "loop", {
                    get: function() {
                      return this._loop;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (t.prototype.setLoop = function(t) {
                    (this._loop = t),
                      (this._audioElement.loop = t),
                      this._wireUpOnEnded();
                  }),
                  (t.prototype.setVolume = function(t) {
                    (this._volume = t),
                      (this._audioElement.volume = n.clamp(t, 0, 1));
                  }),
                  (t.prototype.play = function() {
                    return (
                      this._isPaused
                        ? this._resume()
                        : this._isPlaying || this._start(),
                      this._playingPromise
                    );
                  }),
                  (t.prototype._start = function() {
                    this._audioElement.load(),
                      (this._audioElement.loop = this._loop),
                      this._audioElement.play(),
                      (this._isPlaying = !0),
                      (this._isPaused = !1),
                      (this._playingPromise = new o.Promise()),
                      this._wireUpOnEnded();
                  }),
                  (t.prototype._resume = function() {
                    this._isPaused &&
                      (this._audioElement.play(),
                      (this._isPaused = !1),
                      (this._isPlaying = !0),
                      this._wireUpOnEnded());
                  }),
                  (t.prototype.pause = function() {
                    this._isPlaying &&
                      (this._audioElement.pause(),
                      (this._isPaused = !0),
                      (this._isPlaying = !1));
                  }),
                  (t.prototype.stop = function() {
                    this._isPlaying &&
                      (this._audioElement.pause(),
                      (this._audioElement.currentTime = 0),
                      this._handleOnEnded());
                  }),
                  (t.prototype._wireUpOnEnded = function() {
                    var t = this;
                    this._loop ||
                      (this._audioElement.onended = function() {
                        return t._handleOnEnded();
                      });
                  }),
                  (t.prototype._handleOnEnded = function() {
                    (this._isPlaying = !1),
                      (this._isPaused = !1),
                      this._playingPromise.resolve(!0);
                  }),
                  t
                );
              })(),
              u = (function() {
                function t(t) {
                  (this._buffer = t),
                    (this._volumeNode = s.createGain()),
                    (this._isPlaying = !1),
                    (this._isPaused = !1),
                    (this._loop = !1),
                    (this._volume = 1),
                    (this._currentOffset = 0);
                }
                return (
                  (t.prototype.isPlaying = function() {
                    return this._isPlaying;
                  }),
                  (t.prototype.setVolume = function(t) {
                    (this._volume = t),
                      (this._volumeNode.gain.value = n.clamp(t, 0, 1));
                  }),
                  (t.prototype.setLoop = function(t) {
                    (this._loop = t),
                      this._bufferSource &&
                        ((this._bufferSource.loop = t), this._wireUpOnEnded());
                  }),
                  (t.prototype.play = function() {
                    return (
                      this._isPaused
                        ? this._resume()
                        : this._isPlaying || this._start(),
                      this._playingPromise
                    );
                  }),
                  (t.prototype._start = function() {
                    this._volumeNode.connect(s.destination),
                      this._createBufferSource(),
                      this._bufferSource.start(0, 0),
                      (this._startTime = new Date().getTime()),
                      (this._currentOffset = 0),
                      (this._isPlaying = !0),
                      (this._isPaused = !1),
                      (this._playingPromise = new o.Promise()),
                      this._wireUpOnEnded();
                  }),
                  (t.prototype._resume = function() {
                    if (this._isPaused) {
                      (this._bufferSource.onended = null),
                        this._createBufferSource();
                      var t =
                        1 /
                        this._bufferSource.playbackRate.value *
                        this._buffer.duration;
                      this._bufferSource.start(0, this._currentOffset % t),
                        (this._isPaused = !1),
                        (this._isPlaying = !0),
                        this._wireUpOnEnded();
                    }
                  }),
                  (t.prototype._createBufferSource = function() {
                    (this._bufferSource = s.createBufferSource()),
                      (this._bufferSource.buffer = this._buffer),
                      (this._bufferSource.loop = this._loop),
                      (this._bufferSource.playbackRate.value = 1),
                      this._bufferSource.connect(this._volumeNode);
                  }),
                  (t.prototype.pause = function() {
                    if (this._isPlaying) {
                      this._bufferSource.stop(0);
                      var t = 1 / (this._bufferSource.playbackRate.value || 1);
                      (this._currentOffset =
                        (new Date().getTime() - this._startTime) * t / 1e3),
                        (this._isPaused = !0),
                        (this._isPlaying = !1);
                    }
                  }),
                  (t.prototype.stop = function() {
                    this._isPlaying &&
                      (this._bufferSource.stop(0),
                      this._bufferSource.onended || this._handleOnEnded(),
                      (this._currentOffset = 0),
                      (this._isPlaying = !1),
                      (this._isPaused = !1));
                  }),
                  (t.prototype._wireUpOnEnded = function() {
                    var t = this;
                    this._loop ||
                      (this._bufferSource.onended = function() {
                        return t._handleOnEnded();
                      });
                  }),
                  (t.prototype._handleOnEnded = function() {
                    this._isPaused ||
                      ((this._isPlaying = !1),
                      this._playingPromise.resolve(!0));
                  }),
                  t
                );
              })();
          }
        ),
        i("Interfaces/ILoader", ["require", "exports"], function(t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        i(
          "Loader",
          [
            "require",
            "exports",
            "Drawing/Color",
            "Resources/Sound",
            "Util/Log",
            "Promises",
            "Class",
            "Util/DrawUtil"
          ],
          function(t, e, i, o, r, s, a, h) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var c = (function(t) {
              function e(e) {
                var i = t.call(this) || this;
                return (
                  (i._resourceList = []),
                  (i._index = 0),
                  (i._resourceCount = 0),
                  (i._numLoaded = 0),
                  (i._progressCounts = {}),
                  (i._totalCounts = {}),
                  (i.logo =
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdQAAAB2CAYAAABxhGI9AAAACXBIWXMAAAsSAAALEgHS3X78AAAKnUlEQVR42u3dP2wjSx0H8N8hJIonIRmJjsq0SBR+BQ1dcqKhe0lD77SvSwpKkJKGPulpktfRIMUdEqKIqV57rpAokM4dbSiyq7ONPTP7x39ifz7SFbnEnp3xer47O7uzH15fXwMA6OYHmgAABCoACFQAEKgAgEAFAIEKAAIVAAQqACBQAUCgAoBABQCBCgAIVAAQqAAgUAFAoAIAAhUABCoACFQAEKgAgECFLbmOiNeFf2PbAyz68Pr6qhUgbRwR92v+/zwiJrYHMEKFMmcN///UtgcQqFBk1PD/97U9Qx8VCFSgu4EmAIEKAAIVAAQqACBQ4Z25jojP8eX+0WtNAgIVaOY+Im5j+eKh24h41jQgUIEyZ7F5NaPU7wCBCiwYd/w9cOB+qAlgJ3KLLow0EV198803RWvJfvfddx+0lhEqHKu5JgAjVCBvlhmFzjQRXUekHz9+TP79y8uLRjNChXfvoePvAYEKxNtj1e42/O5JoIJABcrdRMRVLM+X3kTEpaaB988cKuzWg9EobTWdMx0Oly8uN4dqhAoARqgnaN3arHfqu7OyH8ItKLVB/P+CEfMTHyGPY3npx1m8zWGDEeoBfUk/xdti57dr/r1Wv2+6EPow3tZ5rRdS72s1neuF97xvWd+XTH0/V+UMttDWqbI/r2nrxfp+jv2uSjSO7S+OXy/A/3lN+9xX5T5HxEUPZZ0tfB71+w57eJ/HFu+z+jkv1u92YX9fbI/HhX3JA9rp5MPr66tWaG9UfUGbrHIzi7cLUyYFf/tpTady03EEeL8mUJ6i7MKYNvWNqr4Pe2jradXO60LrvPAz2PQ5RPX684ah8dxD+2zantnCgVipSVV+m/tgB9W2DDq2Sx/vM95wcHhZhWVJm8yrv58cSgfTdc70+++/X/r522+/tUKSEepBqo+om4ZLPerMjUwuNnQCtx1GWJtee1FwdD5uWd86xLs8UaVt2aNEO1/saZ/Z5rYMW4zq6v34rGV9Bg3q2eZ9SkeNm9qwyUh30OPIHYFKx5FG03C7znSOqYBq+qW/zpQ3anH037TNHluG6f0WPsPhHvab4QFty7ogOeuxDYcNy2/zu2214WNYWxmBurNO8bGn97pNBOO8xy/9uCorZZ4I2r4C7aJgO7ZV9iE49Dm6NvOWx+pWE9CUq3zbdTp9doz38TbXtzqH9RT5CyWe422OaZoZGeZCabrhPQY9HjwsjpTvCg4YtlE2+Ta/j2bzn8fqrDqgm+6yUHOmAvWUjAtGhbNYvsBknDnqH1Qhc7VmxHgeb/NbudA5j/UXlYwif2p6luhAc9teu1npiHKnDs8if6tCm7JLX3NKpgttXe9ruc9mHMd7a83iwdxF5vt8tutARaCeklRnNK9C8WnNF7geJQ4T4XG3JhSnVdilQrG+yOnrlVHfsEGYzhNBn7Lu6tS7+HJafJQ4EMiNlNqWXZ9WPvVgnVYHG5M1ByDXkT6leX2EgTqJtyt45yv7S2qO3sEZjZhDLXeR+YKdJ0Zdk8QocvH9N732KrNtq+FZ/zzIHABcJrYpd+Xv14lOd5ap76SgrduW/VTQ1qcQpqnbgu4ifZvUMNpd9XuoZmvCtPaQ2Y/BCHVLgbrJTeRPDdVf6pfMKDU2fOkHmVFFfXr3MsouLsnNvV5kRoe5+s431PeuoKPqWnaurY/ZPBEeqwceN4l96iwO6H7Mjq4y7VGPVNe10VaZMzVCPVWpI/Z6FZbcv5fMqGCU+dLfFGzj58jP8+bCdJCo7yzKTwdOF0bu9Ug7V4c+yz7FJfYeGoysUss0HssIdVZwYLDujMqlESoCdTtGsZtbHnJBeNdDSJSs0jTKdMJN1HNX54Wv7bvsU9NkVJVa13dX+/wuArV0X/l5RHyo/lnfF4G6p6DrS0kHdtXhy35TGErDPYZUn2WfWqDOo/lVqdMD2O/hKJhD7S/odukymq9s02QN4EEPR/zbaOumZc+r15zK1Zqznl9jsfiemTM1QmV3HUuTkedlg9HIQzRbUD93dfC+2tpj2fIHEH2+RqCCQH13gZq7hWXTNpVu19OB1fc9nQ0AKOKUb5lU0P1kDyOneoWk0lOZ9cIP0x7qu8+2BhCoR2wYu1+e7DmaXzBSsu5vaX1ne2zrpmUPTmxf7PM1Dm4y/vC7ny7Nif7+z/9ZmtM0Z3panPLtPmra9f16bcK0Dpbnwk43Vd/RHtu6zfNQTy1QBy3aqG2g9nVmxml+BOoJyT3NpWmn9xhfFnu4bvDa+44BXhqqfdf3uUF9+yz77AT31Yue2mjecYQ62NLfgkA9ghHqLNEhNem4H1c6vdyDxhf/bpz5m4coW/c39wi6VH2bPtHlcaV9cvXts+zxCe6rTeqc2ndL7uGd93QwM9bFcAzMoZZ7SgTBbWx+asui61h/iq1+RmjqdbnQXQ3T1DNQ63V/U9ucqm/pMzPb1rePsk/1iTOjgvatR4W3Lc8ULB78pELyrnAfeTcj1NU509/86mfJ33/8+Mf00a05UyPUEw7UVCeWG/WNEiExyHRMt5ltW30izUPk18ytt7lNfc8i//DvtvXto+ySA5BjljsLUF8lPkqMPEtW1JomDsiGBZ9Byb4NAvUITSN9GuwsIj6t6UTOqk7jJREkmzqli8xIs96udSO20sX0H1vW92IL9e1a9rgqVyf91gbPsTy9UD9n9lOkT8k+RfkFR5PMNqxOcdSf32PBvg3vilO+zdxE+okx9Wm0ph36XYsRZCpMF993GOk5qvqB3Dct6jvssb67KvuUNJ3frw92bhr8/STSF0JdRPMLpUCgnsgo9S76PZ246ZFk1wWvK5m3vVoYvW1Sz7nN91jfXbQ1ZQc7TW6HeaoOalypG/8/p/rP1aNAc6ZHzSnfdqPUPhdy2PQw6Nz9gSVhuhiqueUHR3uu7y7K3rdDX4u46ZrPbUa0IFBZ0seKQ3XQTRt2vm3W/a2DbNKys++rvm3ep6+y1x2UdP3bWU9lzra47U1GmlctX/sQ23t+aOlByLTh/4NAPaCRxtcdO5HLSJ/6vNtCwGx67VPmPbvWd1q9frKHtp4kAqRJ2HR9j762JfX3bZ//elPtj13PPDx1+D5tqk/Xi6NO8SHz7MmH19dXrdBNfVFP6T2PT1UHNit87/t4m5+aRH+nQBdvqyhZDKJLfZs8h7XPsqdV2ZOV+tanKB8aln0dyxdAXbV4j4gvt4oMOrbP6vbU73NW7TMlbdTnPrWpfqXfh9HKZ9vke7KuTeZRNtXRSe6+1FV//ce/ln5eXfsXgcqXzr6+9261M3moOoa7E6nvTZTfy7iNsmfb7kjfgXGsvxe0vihsEts9HTquPpt1q1vtahu2TqAiUAEEKj0zhwoARqgAu/OnX/442WH+9xc/Wvr58re/Tr7f41/+ZsRqhAoACFQAEKgAcHjMoQJskJsz/eqrr5Z+vvr7v5fmQFevAl5lztQIFQAQqAAgUAHgIJlDBdhgdQ41N2eKESoAIFABQKACwFEwhwoARqgAIFABQKACAAIVAAQqAAhUABCoAIBABQCBCgACFQAEKgAgUAFAoAKAQAUAgQoACFQAEKgAIFABQKACAAIVAAQqAAhUABCoAIBABQCBCgACFQAQqAAgUAFAoAKAQAUAlvwPcFDns1DsH4sAAAAASUVORK5CYII="),
                  (i.logoWidth = 468),
                  (i.logoHeight = 118),
                  (i.backgroundColor = "#176BAA"),
                  (i.getData = function() {}),
                  (i.setData = function() {}),
                  (i.processData = function() {}),
                  (i.onprogress = function(t) {
                    r.Logger.getInstance().debug(
                      "[ex.Loader] Loading " +
                        (100 * t.loaded / t.total).toFixed(0)
                    );
                  }),
                  (i.oncomplete = function() {}),
                  (i.onerror = function() {}),
                  e && i.addResources(e),
                  i
                );
              }
              return (
                n(e, t),
                Object.defineProperty(e.prototype, "_image", {
                  get: function() {
                    return (
                      this._imageElement ||
                        ((this._imageElement = new Image()),
                        (this._imageElement.src = this.logo)),
                      this._imageElement
                    );
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.wireEngine = function(t) {
                  this._engine = t;
                }),
                (e.prototype.addResource = function(t) {
                  var e = this._index++;
                  this._resourceList.push(t),
                    (this._progressCounts[e] = 0),
                    (this._totalCounts[e] = 1),
                    this._resourceCount++;
                }),
                (e.prototype.addResources = function(t) {
                  var e = 0,
                    i = t.length;
                  for (e; e < i; e++) this.addResource(t[e]);
                }),
                (e.prototype.isLoaded = function() {
                  return this._numLoaded === this._resourceCount;
                }),
                (e.prototype.load = function() {
                  function t(e, i) {
                    e[i] &&
                      e[i].load().then(function() {
                        t(e, i + 1);
                      });
                  }
                  var e = this,
                    i = new s.Promise(),
                    n = this;
                  if (0 === this._resourceList.length)
                    return n.oncomplete.call(n), i.resolve();
                  var o = new Array(this._resourceList.length),
                    r = this._resourceList.length;
                  return (
                    this._resourceList.forEach(function(t, s) {
                      e._engine && t.wireEngine(e._engine),
                        (t.onprogress = function(t) {
                          var e = t.total,
                            i = t.loaded;
                          o[s] = { loaded: i / e * (100 / r), total: 100 };
                          var a = o.reduce(
                            function(t, e) {
                              return {
                                loaded: t.loaded + e.loaded,
                                total: 100
                              };
                            },
                            { loaded: 0, total: 100 }
                          );
                          n.onprogress.call(n, a);
                        }),
                        (t.oncomplete = t.onerror = function() {
                          ++n._numLoaded === n._resourceCount &&
                            (n.oncomplete.call(n), i.resolve());
                        });
                    }),
                    t(this._resourceList, 0),
                    i
                  );
                }),
                (e.prototype.draw = function(t) {
                  var e = this._engine.canvasHeight / window.devicePixelRatio,
                    n = this._engine.canvasWidth / window.devicePixelRatio;
                  (t.fillStyle = this.backgroundColor), t.fillRect(0, 0, n, e);
                  var o = e / 2,
                    r = Math.min(this.logoWidth, 0.75 * n),
                    s = n / 2 - r / 2,
                    a = Math.floor(r * (this.logoHeight / this.logoWidth)),
                    c = this._engine.getAntialiasing();
                  this._engine.setAntialiasing(!0),
                    t.drawImage(
                      this._image,
                      0,
                      0,
                      this.logoWidth,
                      this.logoHeight,
                      s,
                      o - a - 20,
                      r,
                      a
                    ),
                    (t.lineWidth = 2),
                    h.roundRect(t, s, o, r, 20, 10);
                  var l = r * (this._numLoaded / this._resourceCount),
                    u = l - 10;
                  h.roundRect(
                    t,
                    s + 5,
                    o + 5,
                    u > 0 ? u : 0,
                    10,
                    5,
                    null,
                    i.Color.White
                  ),
                    this._engine.setAntialiasing(c);
                }),
                (e.prototype.update = function(t, e) {}),
                e
              );
            })(a.Class);
            e.Loader = c;
            var l = (function(t) {
              function e(e, i) {
                var n = t.call(this, i) || this;
                return (
                  (n._handleOnTrigger = function() {
                    return (
                      n._waitPromise.state() === s.PromiseState.Pending &&
                      (o.WebAudio.unlock(),
                      n._waitPromise.resolve(n._loadedValue),
                      (n._playTrigger.style.display = "none"),
                      !1)
                    );
                  }),
                  (n._playTrigger = document.getElementById(e)),
                  n._playTrigger.addEventListener("click", n._handleOnTrigger),
                  n
                );
              }
              return (
                n(e, t),
                (e.prototype.load = function() {
                  var e = this;
                  return (
                    (this._waitPromise = new s.Promise()),
                    t.prototype.load.call(this).then(
                      function(t) {
                        (e._loaded = !0),
                          (e._loadedValue = t),
                          (e._playTrigger.style.display = "block");
                      },
                      function(t) {
                        e._waitPromise.reject(t);
                      }
                    ),
                    this._waitPromise
                  );
                }),
                e
              );
            })(c);
            e.PauseAfterLoader = l;
          }
        ),
        i("Interfaces/IActorTrait", ["require", "exports"], function(t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        i("Traits/CapturePointer", ["require", "exports"], function(t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
            function t() {}
            return (
              (t.prototype.update = function(t, e) {
                t.enableCapturePointer &&
                  (t.isKilled() || e.input.pointers.propogate(t));
              }),
              t
            );
          })();
          e.CapturePointer = i;
        }),
        i(
          "Traits/EulerMovement",
          ["require", "exports", "Physics", "Actor"],
          function(t, e, i, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = (function() {
              function t() {}
              return (
                (t.prototype.update = function(t, e, o) {
                  var r = o / 1e3,
                    s = t.acc.clone();
                  t.collisionType === n.CollisionType.Active &&
                    s.addEqual(i.Physics.acc),
                    (t.oldVel = t.vel),
                    t.vel.addEqual(s.scale(r)),
                    t.pos
                      .addEqual(t.vel.scale(r))
                      .addEqual(s.scale(0.5 * r * r)),
                    (t.rx += t.torque * (1 / t.moi) * r),
                    (t.rotation += t.rx * r),
                    (t.scale.x += t.sx * o / 1e3),
                    (t.scale.y += t.sy * o / 1e3);
                }),
                t
              );
            })();
            e.EulerMovement = o;
          }
        ),
        i(
          "Util/CullingBox",
          ["require", "exports", "Algebra", "Drawing/Color"],
          function(t, e, i, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = (function() {
              function t() {
                (this._topLeft = new i.Vector(0, 0)),
                  (this._topRight = new i.Vector(0, 0)),
                  (this._bottomLeft = new i.Vector(0, 0)),
                  (this._bottomRight = new i.Vector(0, 0));
              }
              return (
                (t.prototype.isSpriteOffScreen = function(t, e) {
                  var n = t.currentDrawing.width,
                    o = t.currentDrawing.height,
                    r = t.rotation,
                    s = t.getCenter(),
                    a = t.getWorldPos();
                  (this._topLeft.x = a.x - n / 2),
                    (this._topLeft.y = a.y - o / 2),
                    (this._topLeft = this._topLeft.rotate(r, s)),
                    (this._topRight.x = a.x + n / 2),
                    (this._topRight.y = a.y - o / 2),
                    (this._topRight = this._topRight.rotate(r, s)),
                    (this._bottomLeft.x = a.x - n / 2),
                    (this._bottomLeft.y = a.y + o / 2),
                    (this._bottomLeft = this._bottomLeft.rotate(r, s)),
                    (this._bottomRight.x = a.x + n / 2),
                    (this._bottomRight.y = a.y + o / 2),
                    (this._bottomRight = this._bottomRight.rotate(r, s));
                  var h = e.worldToScreenCoordinates(this._topLeft),
                    c = e.worldToScreenCoordinates(this._topRight),
                    l = e.worldToScreenCoordinates(this._bottomLeft),
                    u = e.worldToScreenCoordinates(this._bottomRight);
                  (this._xCoords = []),
                    (this._yCoords = []),
                    this._xCoords.push(h.x, c.x, l.x, u.x),
                    this._yCoords.push(h.y, c.y, l.y, u.y),
                    (this._xMin = Math.min.apply(null, this._xCoords)),
                    (this._yMin = Math.min.apply(null, this._yCoords)),
                    (this._xMax = Math.max.apply(null, this._xCoords)),
                    (this._yMax = Math.max.apply(null, this._yCoords));
                  var p = e.screenToWorldCoordinates(
                      new i.Vector(this._xMin, this._yMin)
                    ),
                    f = e.screenToWorldCoordinates(
                      new i.Vector(this._xMax, this._yMax)
                    );
                  (this._xMinWorld = p.x),
                    (this._yMinWorld = p.y),
                    (this._xMaxWorld = f.x),
                    (this._yMaxWorld = f.y);
                  var d = [
                    new i.Vector(this._xMin, this._yMin),
                    new i.Vector(this._xMax, this._yMin),
                    new i.Vector(this._xMin, this._yMax),
                    new i.Vector(this._xMax, this._yMax)
                  ];
                  if (
                    d[0].x < 0 &&
                    d[1].x > e.canvas.clientWidth &&
                    (d[0].y > 0 || d[2].y < e.canvas.clientHeight)
                  )
                    return !1;
                  if (
                    d[0].y < 0 &&
                    d[2].y > e.canvas.clientHeight &&
                    (d[1].x > 0 || d[0].x < e.canvas.clientWidth)
                  )
                    return !1;
                  for (var g = 0; g < d.length; g++)
                    if (
                      d[g].x > 0 &&
                      d[g].y > 0 &&
                      d[g].x < e.canvas.clientWidth &&
                      d[g].y < e.canvas.clientHeight
                    )
                      return !1;
                  return !0;
                }),
                (t.prototype.debugDraw = function(t) {
                  t.beginPath(),
                    (t.strokeStyle = n.Color.White.toString()),
                    t.rect(
                      this._xMinWorld,
                      this._yMinWorld,
                      this._xMaxWorld - this._xMinWorld,
                      this._yMaxWorld - this._yMinWorld
                    ),
                    t.stroke(),
                    (t.fillStyle = n.Color.Red.toString()),
                    t.beginPath(),
                    t.arc(this._topLeft.x, this._topLeft.y, 5, 0, 2 * Math.PI),
                    t.closePath(),
                    t.fill(),
                    (t.fillStyle = n.Color.Green.toString()),
                    t.beginPath(),
                    t.arc(
                      this._topRight.x,
                      this._topRight.y,
                      5,
                      0,
                      2 * Math.PI
                    ),
                    t.closePath(),
                    t.fill(),
                    (t.fillStyle = n.Color.Blue.toString()),
                    t.beginPath(),
                    t.arc(
                      this._bottomLeft.x,
                      this._bottomLeft.y,
                      5,
                      0,
                      2 * Math.PI
                    ),
                    t.closePath(),
                    t.fill(),
                    (t.fillStyle = n.Color.Magenta.toString()),
                    t.beginPath(),
                    t.arc(
                      this._bottomRight.x,
                      this._bottomRight.y,
                      5,
                      0,
                      2 * Math.PI
                    ),
                    t.closePath(),
                    t.fill();
                }),
                t
              );
            })();
            e.CullingBox = o;
          }
        ),
        i(
          "Traits/OffscreenCulling",
          ["require", "exports", "Util/CullingBox", "Algebra", "Events"],
          function(t, e, i, n, o) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = (function() {
              function t() {
                this.cullingBox = new i.CullingBox();
              }
              return (
                (t.prototype.update = function(t, e) {
                  var i = t.eventDispatcher,
                    r = t.anchor,
                    s = t.getGlobalScale(),
                    a = s.x * t.getWidth() / t.scale.x,
                    h = s.y * t.getHeight() / t.scale.y,
                    c = t.getWorldPos(),
                    l = e.worldToScreenCoordinates(
                      new n.Vector(c.x - r.x * a, c.y - r.y * h)
                    ),
                    u = 1;
                  t.scene &&
                    t.scene.camera &&
                    (u = Math.abs(t.scene.camera.getZoom()));
                  var p = !0;
                  null != t.currentDrawing &&
                    (p = this.cullingBox.isSpriteOffScreen(t, e)),
                    t.isOffScreen
                      ? ((l.x + a * u > 0 &&
                          l.y + h * u > 0 &&
                          l.x < e.canvasWidth &&
                          l.y < e.canvasHeight) ||
                          !p) &&
                        (i.emit("enterviewport", new o.EnterViewPortEvent(t)),
                        (t.isOffScreen = !1))
                      : (l.x + a * u < 0 ||
                          l.y + h * u < 0 ||
                          l.x > e.canvasWidth ||
                          l.y > e.canvasHeight) &&
                        p &&
                        (i.emit("exitviewport", new o.ExitViewPortEvent(t)),
                        (t.isOffScreen = !0));
                }),
                t
              );
            })();
            e.OffscreenCulling = r;
          }
        ),
        i(
          "Traits/TileMapCollisionDetection",
          ["require", "exports", "Actor", "Collision/Side", "Events"],
          function(t, e, i, n, o) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = (function() {
              function t() {}
              return (
                (t.prototype.update = function(t, e) {
                  var r = t.eventDispatcher;
                  if (
                    t.collisionType !== i.CollisionType.PreventCollision &&
                    e.currentScene &&
                    e.currentScene.tileMaps
                  )
                    for (var s = 0; s < e.currentScene.tileMaps.length; s++)
                      for (
                        var a,
                          h = e.currentScene.tileMaps[s],
                          c = n.Side.None,
                          l = 2;
                        (a = h.collides(t)) && !(l-- < 0);

                      )
                        (c = t.getSideFromIntersect(a)),
                          r.emit(
                            "precollision",
                            new o.PreCollisionEvent(t, null, c, a)
                          ),
                          t.collisionType === i.CollisionType.Active &&
                            ((t.pos.y += a.y),
                            (t.pos.x += a.x),
                            r.emit(
                              "postcollision",
                              new o.PostCollisionEvent(t, null, c, a)
                            ));
                }),
                t
              );
            })();
            e.TileMapCollisionDetection = r;
          }
        ),
        i(
          "Traits/Index",
          [
            "require",
            "exports",
            "Traits/CapturePointer",
            "Traits/EulerMovement",
            "Traits/OffscreenCulling",
            "Traits/TileMapCollisionDetection"
          ],
          function(t, e, i, n, o, r) {
            "use strict";
            function s(t) {
              for (var i in t) e.hasOwnProperty(i) || (e[i] = t[i]);
            }
            Object.defineProperty(e, "__esModule", { value: !0 }),
              s(i),
              s(n),
              s(o),
              s(r);
          }
        ),
        i(
          "Particles",
          [
            "require",
            "exports",
            "Actor",
            "Drawing/Color",
            "Algebra",
            "Util/Util",
            "Util/DrawUtil",
            "Traits/Index"
          ],
          function(t, e, i, o, r, s, a, h) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var c;
            !(function(t) {
              (t[(t.Circle = 0)] = "Circle"),
                (t[(t.Rectangle = 1)] = "Rectangle");
            })((c = e.EmitterType || (e.EmitterType = {})));
            var l = (function() {
              function t(t, e, i, n, s, a, h, c, l, u) {
                (this.position = new r.Vector(0, 0)),
                  (this.velocity = new r.Vector(0, 0)),
                  (this.acceleration = new r.Vector(0, 0)),
                  (this.particleRotationalVelocity = 0),
                  (this.currentRotation = 0),
                  (this.focus = null),
                  (this.focusAccel = 0),
                  (this.opacity = 1),
                  (this.beginColor = o.Color.White.clone()),
                  (this.endColor = o.Color.White.clone()),
                  (this.life = 300),
                  (this.fadeFlag = !1),
                  (this._rRate = 1),
                  (this._gRate = 1),
                  (this._bRate = 1),
                  (this._aRate = 0),
                  (this._currentColor = o.Color.White.clone()),
                  (this.emitter = null),
                  (this.particleSize = 5),
                  (this.particleSprite = null),
                  (this.sizeRate = 0),
                  (this.elapsedMultiplier = 0),
                  (this.emitter = t),
                  (this.life = e || this.life),
                  (this.opacity = i || this.opacity),
                  (this.endColor = s || this.endColor.clone()),
                  (this.beginColor = n || this.beginColor.clone()),
                  (this._currentColor = this.beginColor.clone()),
                  (this.position = a || this.position),
                  (this.velocity = h || this.velocity),
                  (this.acceleration = c || this.acceleration),
                  (this._rRate =
                    (this.endColor.r - this.beginColor.r) / this.life),
                  (this._gRate =
                    (this.endColor.g - this.beginColor.g) / this.life),
                  (this._bRate =
                    (this.endColor.b - this.beginColor.b) / this.life),
                  (this._aRate = this.opacity / this.life),
                  (this.startSize = l || 0),
                  (this.endSize = u || 0),
                  this.endSize > 0 &&
                    this.startSize > 0 &&
                    ((this.sizeRate =
                      (this.endSize - this.startSize) / this.life),
                    (this.particleSize = this.startSize));
              }
              return (
                (t.prototype.kill = function() {
                  this.emitter.removeParticle(this);
                }),
                (t.prototype.update = function(t) {
                  if (
                    ((this.life = this.life - t),
                    (this.elapsedMultiplier = this.elapsedMultiplier + t),
                    this.life < 0 && this.kill(),
                    this.fadeFlag &&
                      (this.opacity = s.clamp(
                        this._aRate * this.life,
                        1e-4,
                        1
                      )),
                    this.startSize > 0 &&
                      this.endSize > 0 &&
                      (this.particleSize = s.clamp(
                        this.sizeRate * t + this.particleSize,
                        Math.min(this.startSize, this.endSize),
                        Math.max(this.startSize, this.endSize)
                      )),
                    (this._currentColor.r = s.clamp(
                      this._currentColor.r + this._rRate * t,
                      0,
                      255
                    )),
                    (this._currentColor.g = s.clamp(
                      this._currentColor.g + this._gRate * t,
                      0,
                      255
                    )),
                    (this._currentColor.b = s.clamp(
                      this._currentColor.b + this._bRate * t,
                      0,
                      255
                    )),
                    (this._currentColor.a = s.clamp(this.opacity, 1e-4, 1)),
                    this.focus)
                  ) {
                    var e = this.focus
                      .sub(this.position)
                      .normalize()
                      .scale(this.focusAccel)
                      .scale(t / 1e3);
                    this.velocity = this.velocity.add(e);
                  } else
                    this.velocity = this.velocity.add(
                      this.acceleration.scale(t / 1e3)
                    );
                  (this.position = this.position.add(
                    this.velocity.scale(t / 1e3)
                  )),
                    this.particleRotationalVelocity &&
                      (this.currentRotation =
                        (this.currentRotation +
                          this.particleRotationalVelocity * t / 1e3) %
                        (2 * Math.PI));
                }),
                (t.prototype.draw = function(t) {
                  if (this.particleSprite)
                    return (
                      (this.particleSprite.rotation = this.currentRotation),
                      this.particleSprite.scale.setTo(
                        this.particleSize,
                        this.particleSize
                      ),
                      void this.particleSprite.draw(
                        t,
                        this.position.x,
                        this.position.y
                      )
                    );
                  (this._currentColor.a = s.clamp(this.opacity, 1e-4, 1)),
                    (t.fillStyle = this._currentColor.toString()),
                    t.beginPath(),
                    t.arc(
                      this.position.x,
                      this.position.y,
                      this.particleSize,
                      0,
                      2 * Math.PI
                    ),
                    t.fill(),
                    t.closePath();
                }),
                t
              );
            })();
            e.Particle = l;
            var u = (function(t) {
              function e(e, n, a, l) {
                var u = t.call(this, e, n, a, l, o.Color.White) || this;
                (u._particlesToEmit = 0),
                  (u.numParticles = 0),
                  (u.isEmitting = !0),
                  (u.particles = null),
                  (u.deadParticles = null),
                  (u.minVel = 0),
                  (u.maxVel = 0),
                  (u.acceleration = new r.Vector(0, 0)),
                  (u.minAngle = 0),
                  (u.maxAngle = 0),
                  (u.emitRate = 1),
                  (u.particleLife = 2e3),
                  (u.opacity = 1),
                  (u.fadeFlag = !1),
                  (u.focus = null),
                  (u.focusAccel = 1),
                  (u.startSize = null),
                  (u.endSize = null),
                  (u.minSize = 5),
                  (u.maxSize = 5),
                  (u.beginColor = o.Color.White),
                  (u.endColor = o.Color.White),
                  (u.particleSprite = null),
                  (u.emitterType = c.Rectangle),
                  (u.radius = 0),
                  (u.particleRotationalVelocity = 0),
                  (u.randomRotation = !1),
                  (u.collisionType = i.CollisionType.PreventCollision),
                  (u.particles = new s.Collection()),
                  (u.deadParticles = new s.Collection());
                for (var p = 0; p < u.traits.length; p++)
                  u.traits[p] instanceof h.OffscreenCulling &&
                    u.traits.splice(p, 1);
                return u;
              }
              return (
                n(e, t),
                (e.prototype.removeParticle = function(t) {
                  this.deadParticles.push(t);
                }),
                (e.prototype.emitParticles = function(t) {
                  for (var e = 0; e < t; e++)
                    this.particles.push(this._createParticle());
                }),
                (e.prototype.clearParticles = function() {
                  this.particles.clear();
                }),
                (e.prototype._createParticle = function() {
                  var t = 0,
                    e = 0,
                    i = s.randomInRange(this.minAngle, this.maxAngle),
                    n = s.randomInRange(this.minVel, this.maxVel),
                    o =
                      this.startSize ||
                      s.randomInRange(this.minSize, this.maxSize),
                    a = n * Math.cos(i),
                    h = n * Math.sin(i);
                  if (this.emitterType === c.Rectangle)
                    (t = s.randomInRange(
                      this.pos.x,
                      this.pos.x + this.getWidth()
                    )),
                      (e = s.randomInRange(
                        this.pos.y,
                        this.pos.y + this.getHeight()
                      ));
                  else if (this.emitterType === c.Circle) {
                    var u = s.randomInRange(0, this.radius);
                    (t = u * Math.cos(i) + this.pos.x),
                      (e = u * Math.sin(i) + this.pos.y);
                  }
                  var p = new l(
                    this,
                    this.particleLife,
                    this.opacity,
                    this.beginColor,
                    this.endColor,
                    new r.Vector(t, e),
                    new r.Vector(a, h),
                    this.acceleration,
                    this.startSize,
                    this.endSize
                  );
                  return (
                    (p.fadeFlag = this.fadeFlag),
                    (p.particleSize = o),
                    this.particleSprite &&
                      (p.particleSprite = this.particleSprite),
                    (p.particleRotationalVelocity = this.particleRotationalVelocity),
                    this.randomRotation &&
                      (p.currentRotation = s.randomInRange(0, 2 * Math.PI)),
                    this.focus &&
                      ((p.focus = this.focus.add(
                        new r.Vector(this.pos.x, this.pos.y)
                      )),
                      (p.focusAccel = this.focusAccel)),
                    p
                  );
                }),
                (e.prototype.update = function(e, i) {
                  var n = this;
                  t.prototype.update.call(this, e, i),
                    this.isEmitting &&
                      ((this._particlesToEmit += this.emitRate * (i / 1e3)),
                      this._particlesToEmit > 1 &&
                        (this.emitParticles(Math.floor(this._particlesToEmit)),
                        (this._particlesToEmit =
                          this._particlesToEmit -
                          Math.floor(this._particlesToEmit)))),
                    this.particles.forEach(function(t) {
                      return t.update(i);
                    }),
                    this.deadParticles.forEach(function(t) {
                      return n.particles.removeElement(t);
                    }),
                    this.deadParticles.clear();
                }),
                (e.prototype.draw = function(t) {
                  this.particles.forEach(function(e) {
                    return e.draw(t);
                  });
                }),
                (e.prototype.debugDraw = function(e) {
                  t.prototype.debugDraw.call(this, e),
                    (e.fillStyle = o.Color.Black.toString()),
                    e.fillText(
                      "Particles: " + this.particles.count(),
                      this.pos.x,
                      this.pos.y + 20
                    ),
                    this.focus &&
                      (e.fillRect(
                        this.focus.x + this.pos.x,
                        this.focus.y + this.pos.y,
                        3,
                        3
                      ),
                      a.line(
                        e,
                        o.Color.Yellow,
                        this.focus.x + this.pos.x,
                        this.focus.y + this.pos.y,
                        t.prototype.getCenter.call(this).x,
                        t.prototype.getCenter.call(this).y
                      ),
                      e.fillText(
                        "Focus",
                        this.focus.x + this.pos.x,
                        this.focus.y + this.pos.y
                      ));
                }),
                e
              );
            })(i.Actor);
            e.ParticleEmitter = u;
          }
        ),
        i(
          "TileMap",
          [
            "require",
            "exports",
            "Collision/BoundingBox",
            "Drawing/Color",
            "Class",
            "Algebra",
            "Util/Log",
            "Events"
          ],
          function(t, e, i, o, r, s, a, h) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var c = (function(t) {
              function e(e, i, n, o, r, s) {
                var h = t.call(this) || this;
                (h.x = e),
                  (h.y = i),
                  (h.cellWidth = n),
                  (h.cellHeight = o),
                  (h.rows = r),
                  (h.cols = s),
                  (h._collidingX = -1),
                  (h._collidingY = -1),
                  (h._onScreenXStart = 0),
                  (h._onScreenXEnd = 9999),
                  (h._onScreenYStart = 0),
                  (h._onScreenYEnd = 9999),
                  (h._spriteSheets = {}),
                  (h.logger = a.Logger.getInstance()),
                  (h.data = []),
                  (h.data = new Array(r * s));
                for (var c = 0; c < s; c++)
                  for (var l = 0; l < r; l++)
                    !(function() {
                      var t = new u(c * n + e, l * o + i, n, o, c + l * s);
                      h.data[c + l * s] = t;
                    })();
                return h;
              }
              return (
                n(e, t),
                (e.prototype.on = function(e, i) {
                  t.prototype.on.call(this, e, i);
                }),
                (e.prototype.registerSpriteSheet = function(t, e) {
                  this._spriteSheets[t] = e;
                }),
                (e.prototype.collides = function(t) {
                  for (
                    var e = t.pos.x + t.getWidth(),
                      i = t.pos.y + t.getHeight(),
                      n = t.getBounds(),
                      o = [],
                      r = n.left;
                    r <= e;
                    r += Math.min(t.getWidth() / 2, this.cellWidth / 2)
                  )
                    for (
                      var a = n.top;
                      a <= i;
                      a += Math.min(t.getHeight() / 2, this.cellHeight / 2)
                    ) {
                      var h = this.getCellByPoint(r, a);
                      if (h && h.solid) {
                        var c = n.collides(h.getBounds()),
                          l = t.getCenter().sub(h.getCenter());
                        c && c.dot(l) > 0 && o.push(c);
                      }
                    }
                  return 0 === o.length
                    ? null
                    : o.reduce(function(t, e) {
                        var i = t.x,
                          n = t.y;
                        return (
                          Math.abs(t.x) < Math.abs(e.x) && (i = e.x),
                          Math.abs(t.y) < Math.abs(e.y) && (n = e.y),
                          new s.Vector(i, n)
                        );
                      });
                }),
                (e.prototype.getCellByIndex = function(t) {
                  return this.data[t];
                }),
                (e.prototype.getCell = function(t, e) {
                  return t < 0 || e < 0 || t >= this.cols || e >= this.rows
                    ? null
                    : this.data[t + e * this.cols];
                }),
                (e.prototype.getCellByPoint = function(t, e) {
                  (t = Math.floor((t - this.x) / this.cellWidth)),
                    (e = Math.floor((e - this.y) / this.cellHeight));
                  var i = this.getCell(t, e);
                  return t >= 0 && e >= 0 && t < this.cols && e < this.rows && i
                    ? i
                    : null;
                }),
                (e.prototype.update = function(t, e) {
                  this.emit("preupdate", new h.PreUpdateEvent(t, e, this));
                  var i = t.screenToWorldCoordinates(new s.Vector(0, 0)),
                    n = t.screenToWorldCoordinates(
                      new s.Vector(t.canvas.clientWidth, t.canvas.clientHeight)
                    );
                  (this._onScreenXStart = Math.max(
                    Math.floor(i.x / this.cellWidth) - 2,
                    0
                  )),
                    (this._onScreenYStart = Math.max(
                      Math.floor((i.y - this.y) / this.cellHeight) - 2,
                      0
                    )),
                    (this._onScreenXEnd = Math.max(
                      Math.floor(n.x / this.cellWidth) + 2,
                      0
                    )),
                    (this._onScreenYEnd = Math.max(
                      Math.floor((n.y - this.y) / this.cellHeight) + 2,
                      0
                    )),
                    this.emit("postupdate", new h.PostUpdateEvent(t, e, this));
                }),
                (e.prototype.draw = function(t, e) {
                  this.emit("predraw", new h.PreDrawEvent(t, e, this)),
                    t.save(),
                    t.translate(this.x, this.y);
                  var i,
                    n,
                    o,
                    r = this._onScreenXStart,
                    s = Math.min(this._onScreenXEnd, this.cols),
                    a = this._onScreenYStart,
                    c = Math.min(this._onScreenYEnd, this.rows);
                  for (r; r < s; r++) {
                    for (a; a < c; a++)
                      for (
                        i = this.getCell(r, a).sprites.filter(function(t) {
                          return t.spriteId > -1;
                        }),
                          n = 0,
                          o = i.length;
                        n < o;
                        n++
                      ) {
                        var l = this._spriteSheets[i[n].spriteSheetKey];
                        if (l) {
                          var u = l.getSprite(i[n].spriteId);
                          u
                            ? u.draw(t, r * this.cellWidth, a * this.cellHeight)
                            : this.logger.warn(
                                "Sprite does not exist for id",
                                i[n].spriteId,
                                "in sprite sheet",
                                i[n].spriteSheetKey,
                                u,
                                l
                              );
                        } else
                          this.logger.warn(
                            "Sprite sheet",
                            i[n].spriteSheetKey,
                            "does not exist",
                            l
                          );
                      }
                    a = this._onScreenYStart;
                  }
                  t.restore(),
                    this.emit("postdraw", new h.PostDrawEvent(t, e, this));
                }),
                (e.prototype.debugDraw = function(t) {
                  var e = this.cols * this.cellWidth,
                    i = this.rows * this.cellHeight;
                  t.save(), (t.strokeStyle = o.Color.Red.toString());
                  for (var n = 0; n < this.cols + 1; n++)
                    t.beginPath(),
                      t.moveTo(this.x + n * this.cellWidth, this.y),
                      t.lineTo(this.x + n * this.cellWidth, this.y + i),
                      t.stroke();
                  for (var r = 0; r < this.rows + 1; r++)
                    t.beginPath(),
                      t.moveTo(this.x, this.y + r * this.cellHeight),
                      t.lineTo(this.x + e, this.y + r * this.cellHeight),
                      t.stroke();
                  var s = o.Color.Red.clone();
                  (s.a = 0.3),
                    this.data
                      .filter(function(t) {
                        return t.solid;
                      })
                      .forEach(function(e) {
                        (t.fillStyle = s.toString()),
                          t.fillRect(e.x, e.y, e.width, e.height);
                      }),
                    this._collidingY > -1 &&
                      this._collidingX > -1 &&
                      ((t.fillStyle = o.Color.Cyan.toString()),
                      t.fillRect(
                        this.x + this._collidingX * this.cellWidth,
                        this.y + this._collidingY * this.cellHeight,
                        this.cellWidth,
                        this.cellHeight
                      )),
                    t.restore();
                }),
                e
              );
            })(r.Class);
            e.TileMap = c;
            var l = (function() {
              function t(t, e) {
                (this.spriteSheetKey = t), (this.spriteId = e);
              }
              return t;
            })();
            e.TileSprite = l;
            var u = (function() {
              function t(t, e, n, o, r, s, a) {
                void 0 === s && (s = !1),
                  void 0 === a && (a = []),
                  (this.x = t),
                  (this.y = e),
                  (this.width = n),
                  (this.height = o),
                  (this.index = r),
                  (this.solid = s),
                  (this.sprites = a),
                  (this._bounds = new i.BoundingBox(
                    this.x,
                    this.y,
                    this.x + this.width,
                    this.y + this.height
                  ));
              }
              return (
                (t.prototype.getBounds = function() {
                  return this._bounds;
                }),
                (t.prototype.getCenter = function() {
                  return new s.Vector(
                    this.x + this.width / 2,
                    this.y + this.height / 2
                  );
                }),
                (t.prototype.pushSprite = function(t) {
                  this.sprites.push(t);
                }),
                (t.prototype.removeSprite = function(t) {
                  var e = -1;
                  (e = this.sprites.indexOf(t)) > -1 &&
                    this.sprites.splice(e, 1);
                }),
                (t.prototype.clearSprites = function() {
                  this.sprites.length = 0;
                }),
                t
              );
            })();
            e.Cell = u;
          }
        ),
        i("Timer", ["require", "exports"], function(t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
            function t(e, i, n) {
              (this.id = 0),
                (this.interval = 10),
                (this.fcn = function() {}),
                (this.repeats = !1),
                (this._elapsedTime = 0),
                (this._totalTimeAlive = 0),
                (this._paused = !1),
                (this.complete = !1),
                (this.scene = null),
                (this.id = t.id++),
                (this.interval = i || this.interval),
                (this.fcn = e || this.fcn),
                (this.repeats = n || this.repeats);
            }
            return (
              (t.prototype.update = function(t) {
                this._paused ||
                  ((this._totalTimeAlive += t),
                  (this._elapsedTime += t),
                  !this.complete &&
                    this._elapsedTime >= this.interval &&
                    (this.fcn.call(this),
                    this.repeats
                      ? (this._elapsedTime = 0)
                      : (this.complete = !0)));
              }),
              (t.prototype.reset = function(t) {
                t && t >= 0 && (this.interval = t),
                  (this.complete = !1),
                  (this._elapsedTime = 0);
              }),
              (t.prototype.getTimeRunning = function() {
                return this._totalTimeAlive;
              }),
              (t.prototype.pause = function() {
                this._paused = !0;
              }),
              (t.prototype.unpause = function() {
                this._paused = !1;
              }),
              (t.prototype.cancel = function() {
                this.scene && this.scene.cancelTimer(this);
              }),
              t
            );
          })();
          (i.id = 0), (e.Timer = i);
        }),
        i(
          "Trigger",
          [
            "require",
            "exports",
            "Drawing/Color",
            "Actions/Action",
            "EventDispatcher",
            "Actor",
            "Algebra",
            "Events",
            "Util/Util"
          ],
          function(t, e, i, o, r, s, a, h, c) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var l = {
                pos: a.Vector.Zero.clone(),
                width: 10,
                height: 10,
                visible: !1,
                action: function() {},
                filter: function() {
                  return !0;
                },
                repeat: -1
              },
              u = (function(t) {
                function e(e) {
                  var i =
                    t.call(this, e.pos.x, e.pos.y, e.width, e.height) || this;
                  return (
                    (i.action = function() {}),
                    (i.filter = function() {
                      return !0;
                    }),
                    (i.repeat = -1),
                    (e = c.extend({}, l, e)),
                    (i.filter = e.filter || i.filter),
                    (i.repeat = e.repeat || i.repeat),
                    (i.action = e.action || i.action),
                    e.target && (i.target = e.target),
                    (i.visible = e.visible),
                    (i.collisionType = s.CollisionType.Passive),
                    (i.eventDispatcher = new r.EventDispatcher(i)),
                    (i.actionQueue = new o.ActionQueue(i)),
                    i.on("collisionstart", function(t) {
                      i.filter(t.other) &&
                        (i.emit("enter", new h.EnterTriggerEvent(i, t.other)),
                        i._dispatchAction(),
                        0 === i.repeat && i.kill());
                    }),
                    i.on("collisionend", function(t) {
                      i.filter(t.other) &&
                        i.emit("exit", new h.ExitTriggerEvent(i, t.other));
                    }),
                    i
                  );
                }
                return (
                  n(e, t),
                  Object.defineProperty(e.prototype, "target", {
                    get: function() {
                      return this._target;
                    },
                    set: function(t) {
                      (this._target = t),
                        (this.filter = function(e) {
                          return e === t;
                        });
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (e.prototype._initialize = function(e) {
                    t.prototype._initialize.call(this, e), (this._engine = e);
                  }),
                  (e.prototype._dispatchAction = function() {
                    this.action.call(this), this.repeat--;
                  }),
                  (e.prototype.debugDraw = function(e) {
                    t.prototype.debugDraw.call(this, e),
                      e.save(),
                      e.translate(this.pos.x, this.pos.y);
                    var n = this.getBounds(),
                      o = this.getWorldPos();
                    (n.left = n.left - o.x),
                      (n.right = n.right - o.x),
                      (n.top = n.top - o.y),
                      (n.bottom = n.bottom - o.y),
                      (e.fillStyle = i.Color.Violet.toString()),
                      (e.strokeStyle = i.Color.Violet.toString()),
                      e.fillText("Trigger", 10, 10),
                      n.debugDraw(e),
                      e.restore();
                  }),
                  e
                );
              })(s.Actor);
            e.Trigger = u;
          }
        ),
        i(
          "Actions/Index",
          [
            "require",
            "exports",
            "Actions/ActionContext",
            "Actions/RotationType",
            "Actions/Action"
          ],
          function(t, e, i, n, o) {
            "use strict";
            function r(t) {
              for (var i in t) e.hasOwnProperty(i) || (e[i] = t[i]);
            }
            Object.defineProperty(e, "__esModule", { value: !0 }),
              r(i),
              r(n),
              (e.Actions = o),
              (e.Internal = { Actions: o });
          }
        ),
        i(
          "Collision/DynamicTree",
          [
            "require",
            "exports",
            "Physics",
            "Collision/BoundingBox",
            "Util/Log"
          ],
          function(t, e, i, n, o) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = (function() {
              function t(t) {
                (this.parent = t),
                  (this.parent = t || null),
                  (this.body = null),
                  (this.bounds = new n.BoundingBox()),
                  (this.left = null),
                  (this.right = null),
                  (this.height = 0);
              }
              return (
                (t.prototype.isLeaf = function() {
                  return !this.left && !this.right;
                }),
                t
              );
            })();
            e.TreeNode = r;
            var s = (function() {
              function t(t) {
                void 0 === t &&
                  (t = new n.BoundingBox(
                    -Number.MAX_VALUE,
                    -Number.MAX_VALUE,
                    Number.MAX_VALUE,
                    Number.MAX_VALUE
                  )),
                  (this.worldBounds = t),
                  (this.root = null),
                  (this.nodes = {});
              }
              return (
                (t.prototype._insert = function(t) {
                  if (null === this.root)
                    return (this.root = t), void (this.root.parent = null);
                  for (var e = t.bounds, i = this.root; !i.isLeaf(); ) {
                    var n,
                      o,
                      s = i.left,
                      a = i.right,
                      h = i.bounds.getPerimeter(),
                      c = i.bounds.combine(e),
                      l = c.getPerimeter(),
                      u = 2 * l,
                      p = 2 * (l - h),
                      f = 0,
                      d = e.combine(s.bounds);
                    s.isLeaf()
                      ? (f = d.getPerimeter() + p)
                      : ((o = s.bounds.getPerimeter()),
                        (n = d.getPerimeter()),
                        (f = n - o + p));
                    var g = 0,
                      y = e.combine(a.bounds);
                    if (
                      (a.isLeaf()
                        ? (g = y.getPerimeter() + p)
                        : ((o = a.bounds.getPerimeter()),
                          (n = y.getPerimeter()),
                          (g = n - o + p)),
                      u < f && u < g)
                    )
                      break;
                    i = f < g ? s : a;
                  }
                  var _ = i.parent,
                    v = new r(_);
                  (v.bounds = e.combine(i.bounds)),
                    (v.height = i.height + 1),
                    null !== _
                      ? (_.left === i ? (_.left = v) : (_.right = v),
                        (v.left = i),
                        (v.right = t),
                        (i.parent = v),
                        (t.parent = v))
                      : ((v.left = i),
                        (v.right = t),
                        (i.parent = v),
                        (t.parent = v),
                        (this.root = v));
                  for (var m = t.parent; m; ) {
                    if (((m = this._balance(m)), !m.left))
                      throw new Error(
                        "Parent of current leaf cannot have a null left child" +
                          m
                      );
                    if (!m.right)
                      throw new Error(
                        "Parent of current leaf cannot have a null right child" +
                          m
                      );
                    (m.height = 1 + Math.max(m.left.height, m.right.height)),
                      (m.bounds = m.left.bounds.combine(m.right.bounds)),
                      (m = m.parent);
                  }
                }),
                (t.prototype._remove = function(t) {
                  if (t === this.root) return void (this.root = null);
                  var e,
                    i = t.parent,
                    n = i.parent;
                  if (((e = i.left === t ? i.right : i.left), n)) {
                    n.left === i ? (n.left = e) : (n.right = e), (e.parent = n);
                    for (var o = n; o; )
                      (o = this._balance(o)),
                        (o.bounds = o.left.bounds.combine(o.right.bounds)),
                        (o.height =
                          1 + Math.max(o.left.height, o.right.height)),
                        (o = o.parent);
                  } else (this.root = e), (e.parent = null);
                }),
                (t.prototype.trackBody = function(t) {
                  var e = new r();
                  (e.body = t),
                    (e.bounds = t.getBounds()),
                    (e.bounds.left -= 2),
                    (e.bounds.top -= 2),
                    (e.bounds.right += 2),
                    (e.bounds.bottom += 2),
                    (this.nodes[t.actor.id] = e),
                    this._insert(e);
                }),
                (t.prototype.updateBody = function(t) {
                  var e = this.nodes[t.actor.id];
                  if (!e) return !1;
                  var n = t.getBounds();
                  if (!this.worldBounds.contains(n))
                    return (
                      o.Logger.getInstance().warn(
                        "Actor with id " +
                          t.actor.id +
                          " is outside the world bounds and will no longer be tracked for physics"
                      ),
                      this.untrackBody(t),
                      !1
                    );
                  if (e.bounds.contains(n)) return !1;
                  this._remove(e),
                    (n.left -= i.Physics.boundsPadding),
                    (n.top -= i.Physics.boundsPadding),
                    (n.right += i.Physics.boundsPadding),
                    (n.bottom += i.Physics.boundsPadding);
                  var r = t.vel.x * i.Physics.dynamicTreeVelocityMultiplyer,
                    s = t.vel.y * i.Physics.dynamicTreeVelocityMultiplyer;
                  return (
                    r < 0 ? (n.left += r) : (n.right += r),
                    s < 0 ? (n.top += s) : (n.bottom += s),
                    (e.bounds = n),
                    this._insert(e),
                    !0
                  );
                }),
                (t.prototype.untrackBody = function(t) {
                  var e = this.nodes[t.actor.id];
                  e &&
                    (this._remove(e),
                    (this.nodes[t.actor.id] = null),
                    delete this.nodes[t.actor.id]);
                }),
                (t.prototype._balance = function(t) {
                  if (null === t)
                    throw new Error("Cannot balance at null node");
                  if (t.isLeaf() || t.height < 2) return t;
                  var e = t.left,
                    i = t.right,
                    n = t,
                    o = e,
                    r = i,
                    s = e.left,
                    a = e.right,
                    h = i.left,
                    c = i.right,
                    l = r.height - o.height;
                  if (l > 1)
                    return (
                      (r.left = n),
                      (r.parent = n.parent),
                      (n.parent = r),
                      r.parent
                        ? r.parent.left === n
                          ? (r.parent.left = r)
                          : (r.parent.right = r)
                        : (this.root = r),
                      h.height > c.height
                        ? ((r.right = h),
                          (n.right = c),
                          (c.parent = n),
                          (n.bounds = o.bounds.combine(c.bounds)),
                          (r.bounds = n.bounds.combine(h.bounds)),
                          (n.height = 1 + Math.max(o.height, c.height)),
                          (r.height = 1 + Math.max(n.height, h.height)))
                        : ((r.right = c),
                          (n.right = h),
                          (h.parent = n),
                          (n.bounds = o.bounds.combine(h.bounds)),
                          (r.bounds = n.bounds.combine(c.bounds)),
                          (n.height = 1 + Math.max(o.height, h.height)),
                          (r.height = 1 + Math.max(n.height, c.height))),
                      r
                    );
                  if (l < -1) {
                    if (
                      ((o.left = n),
                      (o.parent = n.parent),
                      (n.parent = o),
                      o.parent)
                    )
                      if (o.parent.left === n) o.parent.left = o;
                      else {
                        if (o.parent.right !== n)
                          throw "Error rotating Dynamic Tree";
                        o.parent.right = o;
                      }
                    else this.root = o;
                    return (
                      s.height > a.height
                        ? ((o.right = s),
                          (n.left = a),
                          (a.parent = n),
                          (n.bounds = r.bounds.combine(a.bounds)),
                          (o.bounds = n.bounds.combine(s.bounds)),
                          (n.height = 1 + Math.max(r.height, a.height)),
                          (o.height = 1 + Math.max(n.height, s.height)))
                        : ((o.right = a),
                          (n.left = s),
                          (s.parent = n),
                          (n.bounds = r.bounds.combine(s.bounds)),
                          (o.bounds = n.bounds.combine(a.bounds)),
                          (n.height = 1 + Math.max(r.height, s.height)),
                          (o.height = 1 + Math.max(n.height, a.height))),
                      o
                    );
                  }
                  return t;
                }),
                (t.prototype.getHeight = function() {
                  return null === this.root ? 0 : this.root.height;
                }),
                (t.prototype.query = function(t, e) {
                  var i = t.getBounds(),
                    n = function(o) {
                      if (o && o.bounds.collides(i)) {
                        if (!o.isLeaf() || o.body === t)
                          return n(o.left) || n(o.right);
                        if (e.call(t, o.body)) return !0;
                      }
                      return !1;
                    };
                  n(this.root);
                }),
                (t.prototype.rayCastQuery = function(t, e, i) {
                  void 0 === e && (e = 1 / 0);
                  var n = function(o) {
                    if (o && o.bounds.rayCast(t, e)) {
                      if (!o.isLeaf()) return n(o.left) || n(o.right);
                      if (i.call(t, o.body)) return !0;
                    }
                    return !1;
                  };
                  n(this.root);
                }),
                (t.prototype.getNodes = function() {
                  var t = function(e) {
                    return e ? [e].concat(t(e.left), t(e.right)) : [];
                  };
                  return t(this.root);
                }),
                (t.prototype.debugDraw = function(t) {
                  var e = function(i) {
                    i &&
                      (i.isLeaf()
                        ? ((t.lineWidth = 1), (t.strokeStyle = "green"))
                        : ((t.lineWidth = 1), (t.strokeStyle = "white")),
                      i.bounds.debugDraw(t),
                      i.left && e(i.left),
                      i.right && e(i.right));
                  };
                  e(this.root);
                }),
                t
              );
            })();
            e.DynamicTree = s;
          }
        ),
        i("Collision/ICollisionResolver", ["require", "exports"], function(
          t,
          e
        ) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        i(
          "Collision/DynamicTreeCollisionBroadphase",
          [
            "require",
            "exports",
            "Physics",
            "Collision/DynamicTree",
            "Collision/Pair",
            "Algebra",
            "Actor",
            "Util/Log",
            "Events"
          ],
          function(t, e, i, n, o, r, s, a, h) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var c = (function() {
              function t() {
                (this._dynamicCollisionTree = new n.DynamicTree()),
                  (this._collisionHash = {}),
                  (this._collisionPairCache = []),
                  (this._lastFramePairs = []),
                  (this._lastFramePairsHash = {});
              }
              return (
                (t.prototype.track = function(t) {
                  if (!t)
                    return void a.Logger.getInstance().warn(
                      "Cannot track null physics body"
                    );
                  this._dynamicCollisionTree.trackBody(t);
                }),
                (t.prototype.untrack = function(t) {
                  if (!t)
                    return void a.Logger.getInstance().warn(
                      "Cannot untrack a null physics body"
                    );
                  this._dynamicCollisionTree.untrackBody(t);
                }),
                (t.prototype._canCollide = function(t, e) {
                  var i = o.Pair.calculatePairHash(t.body, e.body);
                  return (
                    !this._collisionHash[i] &&
                    ((t.collisionType !== s.CollisionType.Fixed ||
                      e.collisionType !== s.CollisionType.Fixed) &&
                      (e.collisionType !== s.CollisionType.PreventCollision &&
                        !e.isKilled()))
                  );
                }),
                (t.prototype.broadphase = function(t, e, n) {
                  var a = this,
                    h = e / 1e3,
                    c = t.filter(function(t) {
                      return (
                        !t.isKilled() &&
                        t.collisionType !== s.CollisionType.PreventCollision
                      );
                    });
                  (this._collisionPairCache = []), (this._collisionHash = {});
                  for (var l, u = 0, p = c.length; u < p; u++)
                    (l = c[u]),
                      this._dynamicCollisionTree.query(l.body, function(t) {
                        if (a._canCollide(l, t.actor)) {
                          var e = new o.Pair(l.body, t);
                          (a._collisionHash[e.id] = !0),
                            a._collisionPairCache.push(e);
                        }
                        return !1;
                      });
                  if (
                    (n && (n.physics.pairs = this._collisionPairCache.length),
                    i.Physics.checkForFastBodies)
                  )
                    for (var f = 0, d = c; f < d.length; f++) {
                      var l = d[f];
                      if (l.collisionType === s.CollisionType.Active) {
                        var g =
                            l.vel.magnitude() * h +
                            0.5 * l.acc.magnitude() * h * h,
                          y = Math.min(
                            l.body.getBounds().getHeight(),
                            l.body.getBounds().getWidth()
                          );
                        if (
                          i.Physics.disableMinimumSpeedForFastBody ||
                          g > y / 2
                        ) {
                          n && n.physics.fastBodies++;
                          var _ = l.pos.sub(l.oldPos),
                            v = l.body.collisionArea.getCenter(),
                            m = l.body.collisionArea.getFurthestPoint(l.vel),
                            b = m.sub(_),
                            w = new r.Ray(b, l.vel);
                          w.pos = w.pos.add(
                            w.dir.scale(-2 * i.Physics.surfaceEpsilon)
                          );
                          var x,
                            P = new r.Vector(1 / 0, 1 / 0);
                          if (
                            (this._dynamicCollisionTree.rayCastQuery(
                              w,
                              g + 2 * i.Physics.surfaceEpsilon,
                              function(t) {
                                if (l.body !== t && t.collisionArea) {
                                  var e = t.collisionArea.rayCast(
                                    w,
                                    g + 10 * i.Physics.surfaceEpsilon
                                  );
                                  if (e) {
                                    var n = e.sub(b);
                                    n.magnitude() < P.magnitude() &&
                                      ((P = n), (x = t));
                                  }
                                }
                                return !1;
                              }
                            ),
                            x && r.Vector.isValid(P))
                          ) {
                            var C = new o.Pair(l.body, x);
                            this._collisionHash[C.id] ||
                              ((this._collisionHash[C.id] = !0),
                              this._collisionPairCache.push(C));
                            var A = v.sub(m);
                            (l.pos = b
                              .add(A)
                              .add(P)
                              .add(w.dir.scale(2 * i.Physics.surfaceEpsilon))),
                              l.body.collisionArea.recalc(),
                              n && n.physics.fastBodyCollisions++;
                          }
                        }
                      }
                    }
                  return this._collisionPairCache;
                }),
                (t.prototype.narrowphase = function(t, e) {
                  for (var i = 0; i < t.length; i++)
                    t[i].collide(),
                      e &&
                        t[i].collision &&
                        (e.physics.collisions++,
                        (e.physics.collidersHash[t[i].id] = t[i]));
                  return t.filter(function(t) {
                    return t.collision;
                  });
                }),
                (t.prototype.resolve = function(t, e, n) {
                  for (var o = 0, r = t; o < r.length; o++) {
                    var s = r[o];
                    s.resolve(n),
                      s.collision &&
                        (s.bodyA.applyMtv(),
                        s.bodyB.applyMtv(),
                        s.bodyA.actor.integrate(e * i.Physics.collisionShift),
                        s.bodyB.actor.integrate(e * i.Physics.collisionShift));
                  }
                  return t.filter(function(t) {
                    return t.canCollide;
                  });
                }),
                (t.prototype.runCollisionStartEnd = function(t) {
                  for (var e = {}, i = 0, n = t; i < n.length; i++) {
                    var o = n[i];
                    if (((e[o.id] = o), !this._lastFramePairsHash[o.id])) {
                      var r = o.bodyA.actor,
                        s = o.bodyB.actor;
                      r.emit(
                        "collisionstart",
                        new h.CollisionStartEvent(r, s, o)
                      ),
                        s.emit(
                          "collisionstart",
                          new h.CollisionStartEvent(s, r, o)
                        );
                    }
                  }
                  for (var a = 0, c = this._lastFramePairs; a < c.length; a++) {
                    var o = c[a];
                    if (!e[o.id]) {
                      var r = o.bodyA.actor,
                        s = o.bodyB.actor;
                      r.emit("collisionend", new h.CollisionEndEvent(r, s)),
                        s.emit("collisionend", new h.CollisionEndEvent(s, r));
                    }
                  }
                  (this._lastFramePairs = t), (this._lastFramePairsHash = e);
                }),
                (t.prototype.update = function(t) {
                  var e = 0,
                    i = 0,
                    n = t.length;
                  for (i; i < n; i++)
                    this._dynamicCollisionTree.updateBody(t[i].body) && e++;
                  return e;
                }),
                (t.prototype.debugDraw = function(t) {
                  if (
                    (i.Physics.broadphaseDebug &&
                      this._dynamicCollisionTree.debugDraw(t),
                    i.Physics.showContacts || i.Physics.showCollisionNormals)
                  )
                    for (
                      var e = 0, n = this._collisionPairCache;
                      e < n.length;
                      e++
                    ) {
                      var o = n[e];
                      o.debugDraw(t);
                    }
                }),
                t
              );
            })();
            e.DynamicTreeCollisionBroadphase = c;
          }
        ),
        i("Collision/IPhysics", ["require", "exports"], function(t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        i(
          "Collision/NaiveCollisionBroadphase",
          [
            "require",
            "exports",
            "Physics",
            "Collision/CollisionContact",
            "Collision/Pair",
            "Actor",
            "Events"
          ],
          function(t, e, i, n, o, r, s) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var a = (function() {
              function t() {
                (this._lastFramePairs = []), (this._lastFramePairsHash = {});
              }
              return (
                (t.prototype.track = function() {}),
                (t.prototype.untrack = function() {}),
                (t.prototype.broadphase = function(t) {
                  for (
                    var e,
                      i,
                      s = t.filter(function(t) {
                        return (
                          !t.isKilled() &&
                          t.collisionType !== r.CollisionType.PreventCollision
                        );
                      }),
                      a = [],
                      h = 0,
                      c = s.length;
                    h < c;
                    h++
                  ) {
                    e = s[h];
                    for (var l = h + 1; l < c; l++) {
                      i = s[l];
                      var u;
                      if ((u = e.collides(i))) {
                        var p = new o.Pair(e.body, i.body);
                        (p.collision = new n.CollisionContact(
                          e.collisionArea,
                          i.collisionArea,
                          u,
                          e.pos,
                          u
                        )),
                          a.some(function(t) {
                            return t.id === p.id;
                          }) || a.push(p);
                      }
                    }
                  }
                  return a;
                }),
                (t.prototype.narrowphase = function(t) {
                  return t;
                }),
                (t.prototype.runCollisionStartEnd = function(t) {
                  for (var e = {}, i = 0, n = t; i < n.length; i++) {
                    var o = n[i];
                    if (((e[o.id] = o), !this._lastFramePairsHash[o.id])) {
                      var r = o.bodyA.actor,
                        a = o.bodyB.actor;
                      r.emit(
                        "collisionstart",
                        new s.CollisionStartEvent(r, a, o)
                      ),
                        a.emit(
                          "collisionstart",
                          new s.CollisionStartEvent(a, r, o)
                        );
                    }
                  }
                  for (var h = 0, c = this._lastFramePairs; h < c.length; h++) {
                    var o = c[h];
                    if (!e[o.id]) {
                      var r = o.bodyA.actor,
                        a = o.bodyB.actor;
                      r.emit("collisionend", new s.CollisionEndEvent(r, a)),
                        a.emit("collisionend", new s.CollisionEndEvent(a, r));
                    }
                  }
                  (this._lastFramePairs = t), (this._lastFramePairsHash = e);
                }),
                (t.prototype.resolve = function(t) {
                  for (var e = 0, n = t; e < n.length; e++) {
                    n[e].resolve(i.Physics.collisionResolutionStrategy);
                  }
                  return t.filter(function(t) {
                    return t.canCollide;
                  });
                }),
                (t.prototype.update = function() {
                  return 0;
                }),
                (t.prototype.debugDraw = function() {}),
                t
              );
            })();
            e.NaiveCollisionBroadphase = a;
          }
        ),
        i(
          "Collision/Index",
          [
            "require",
            "exports",
            "Collision/Body",
            "Collision/BoundingBox",
            "Collision/CircleArea",
            "Collision/CollisionContact",
            "Collision/CollisionJumpTable",
            "Collision/DynamicTree",
            "Collision/DynamicTreeCollisionBroadphase",
            "Collision/EdgeArea",
            "Collision/NaiveCollisionBroadphase",
            "Collision/Pair",
            "Collision/PolygonArea",
            "Collision/Side"
          ],
          function(t, e, i, n, o, r, s, a, h, c, l, u, p, f) {
            "use strict";
            function d(t) {
              for (var i in t) e.hasOwnProperty(i) || (e[i] = t[i]);
            }
            Object.defineProperty(e, "__esModule", { value: !0 }),
              d(i),
              d(n),
              d(o),
              d(r),
              d(s),
              d(a),
              d(h),
              d(c),
              d(l),
              d(u),
              d(p),
              d(f);
          }
        ),
        i("Drawing/Polygon", ["require", "exports", "Algebra"], function(
          t,
          e,
          i
        ) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n = (function() {
            function t(t) {
              (this.lineWidth = 5),
                (this.filled = !1),
                (this._points = []),
                (this.anchor = new i.Vector(0, 0)),
                (this.rotation = 0),
                (this.scale = new i.Vector(1, 1)),
                (this._points = t);
              var e = this._points.reduce(function(t, e) {
                  return Math.min(t, e.x);
                }, 0),
                n = this._points.reduce(function(t, e) {
                  return Math.max(t, e.x);
                }, 0);
              this.width = n - e;
              var o = this._points.reduce(function(t, e) {
                  return Math.min(t, e.y);
                }, 0),
                r = this._points.reduce(function(t, e) {
                  return Math.max(t, e.y);
                }, 0);
              (this.height = r - o),
                (this.naturalHeight = this.height),
                (this.naturalWidth = this.width);
            }
            return (
              (t.prototype.addEffect = function() {}),
              (t.prototype.removeEffect = function() {}),
              (t.prototype.clearEffects = function() {}),
              (t.prototype.reset = function() {}),
              (t.prototype.draw = function(t, e, i) {
                t.save(),
                  t.translate(e + this.anchor.x, i + this.anchor.y),
                  t.scale(this.scale.x, this.scale.y),
                  t.rotate(this.rotation),
                  t.beginPath(),
                  (t.lineWidth = this.lineWidth);
                var n = this._points[0];
                t.moveTo(n.x, n.y);
                var o = 0,
                  r = this._points.length;
                for (o; o < r; o++)
                  t.lineTo(this._points[o].x, this._points[o].y);
                t.lineTo(n.x, n.y),
                  t.closePath(),
                  this.filled &&
                    ((t.fillStyle = this.fillColor.toString()), t.fill()),
                  (t.strokeStyle = this.lineColor.toString()),
                  this.flipHorizontal &&
                    (t.translate(this.width, 0), t.scale(-1, 1)),
                  this.flipVertical &&
                    (t.translate(0, this.height), t.scale(1, -1)),
                  t.stroke(),
                  t.restore();
              }),
              t
            );
          })();
          e.Polygon = n;
        }),
        i(
          "Drawing/Index",
          [
            "require",
            "exports",
            "Drawing/Animation",
            "Drawing/Color",
            "Drawing/Polygon",
            "Drawing/Sprite",
            "Drawing/SpriteSheet",
            "Drawing/SpriteEffects"
          ],
          function(t, e, i, n, o, r, s, a) {
            "use strict";
            function h(t) {
              for (var i in t) e.hasOwnProperty(i) || (e[i] = t[i]);
            }
            Object.defineProperty(e, "__esModule", { value: !0 }),
              h(i),
              h(n),
              h(o),
              h(r),
              h(s),
              (e.Effects = a);
          }
        ),
        i("Interfaces/Index", ["require", "exports"], function(t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        i("Math/Random", ["require", "exports"], function(t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
            function t(t) {
              (this.seed = t),
                (this._lowerMask = 2147483647),
                (this._upperMask = 2147483648),
                (this._w = 32),
                (this._n = 624),
                (this._m = 397),
                (this._a = 2567483615),
                (this._u = 11),
                (this._s = 7),
                (this._b = 2636928640),
                (this._t = 15),
                (this._c = 4022730752),
                (this._l = 18),
                (this._f = 1812433253),
                (this._mt = new Array(this._n)),
                (this._mt[0] = (t || Date.now()) >>> 0);
              for (var e = 1; e < this._n; e++) {
                var i = this._mt[e - 1] ^ (this._mt[e - 1] >>> (this._w - 2));
                this._mt[e] =
                  (((this._f * ((4294901760 & i) >>> 16)) << 16) +
                    this._f * (65535 & i) +
                    e) >>>
                  0;
              }
              this._index = this._n;
            }
            return (
              (t.prototype._twist = function() {
                for (
                  var t = [0, this._a], e = 0, i = 0;
                  i < this._n - this._m;
                  i++
                )
                  (e =
                    (this._mt[i] & this._upperMask) |
                    (this._mt[i + 1] & this._lowerMask)),
                    (this._mt[i] =
                      this._mt[i + this._m] ^
                      (e >>> 1) ^
                      (4294967295 & t[1 & e]));
                for (; i < this._n - 1; i++)
                  (e =
                    (this._mt[i] & this._upperMask) |
                    (this._mt[i + 1] & this._lowerMask)),
                    (this._mt[i] =
                      this._mt[i + (this._m - this._n)] ^
                      (e >>> 1) ^
                      (4294967295 & t[1 & e]));
                (e =
                  (this._mt[this._n - 1] & this._upperMask) |
                  (this._mt[0] & this._lowerMask)),
                  (this._mt[this._n - 1] =
                    this._mt[this._m - 1] ^
                    (e >>> 1) ^
                    (4294967295 & t[1 & e])),
                  (this._index = 0);
              }),
              (t.prototype.nextInt = function() {
                this._index >= this._n && this._twist();
                var t = this._mt[this._index++];
                return (
                  (t ^= t >>> this._u),
                  (t ^= (t << this._s) & this._b),
                  (t ^= (t << this._t) & this._c),
                  (t ^= t >>> this._l) >>> 0
                );
              }),
              (t.prototype.next = function() {
                return this.nextInt() * (1 / 4294967296);
              }),
              (t.prototype.floating = function(t, e) {
                return (e - t) * this.next() + t;
              }),
              (t.prototype.integer = function(t, e) {
                return Math.floor((e - t + 1) * this.next() + t);
              }),
              (t.prototype.bool = function(t) {
                return void 0 === t && (t = 0.5), this.next() <= t;
              }),
              (t.prototype.pickOne = function(t) {
                return t[this.integer(0, t.length - 1)];
              }),
              (t.prototype.pickSet = function(t, e, i) {
                return (
                  void 0 === i && (i = !1),
                  i
                    ? this._pickSetWithDuplicates(t, e)
                    : this._pickSetWithoutDuplicates(t, e)
                );
              }),
              (t.prototype._pickSetWithoutDuplicates = function(t, e) {
                if (e > t.length || e < 0)
                  throw new Error(
                    "Invalid number of elements to pick, must pick a value 0 < n <= length"
                  );
                if (e === t.length) return t;
                for (var i = new Array(e), n = 0, o = t.slice(0); n < e; ) {
                  var r = this.integer(0, o.length - 1);
                  (i[n++] = o[r]), o.splice(r, 1);
                }
                return i;
              }),
              (t.prototype._pickSetWithDuplicates = function(t, e) {
                if (e < 0)
                  throw new Error(
                    "Invalid number of elements to pick, must pick a value 0 <= n < MAX_INT"
                  );
                for (var i = new Array(e), n = 0; n < e; n++)
                  i.push(this.pickOne(t));
                return i;
              }),
              (t.prototype.shuffle = function(t) {
                for (
                  var e = t.slice(0), i = null, n = 0;
                  n < e.length - 2;
                  n++
                ) {
                  var o = this.integer(n, e.length - 1);
                  (i = e[n]), (e[n] = e[o]), (e[o] = i);
                }
                return e;
              }),
              (t.prototype.range = function(t, e, i) {
                for (var n = new Array(t), o = 0; o < t; o++)
                  n[o] = this.integer(e, i);
                return n;
              }),
              (t.prototype.d4 = function() {
                return this.integer(1, 4);
              }),
              (t.prototype.d6 = function() {
                return this.integer(1, 6);
              }),
              (t.prototype.d8 = function() {
                return this.integer(1, 8);
              }),
              (t.prototype.d10 = function() {
                return this.integer(1, 10);
              }),
              (t.prototype.d12 = function() {
                return this.integer(1, 12);
              }),
              (t.prototype.d20 = function() {
                return this.integer(1, 20);
              }),
              t
            );
          })();
          e.Random = i;
        }),
        i(
          "Math/PerlinNoise",
          ["require", "exports", "Math/Random", "Drawing/Color", "Util/Util"],
          function(t, e, i, n, o) {
            "use strict";
            function r(t, e, i) {
              return e + t * (i - e);
            }
            function s(t) {
              return t * t * t * (t * (6 * t - 15) + 10);
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var a = (function() {
              function t(t) {
                (this._perm = [
                  151,
                  160,
                  137,
                  91,
                  90,
                  15,
                  131,
                  13,
                  201,
                  95,
                  96,
                  53,
                  194,
                  233,
                  7,
                  225,
                  140,
                  36,
                  103,
                  30,
                  69,
                  142,
                  8,
                  99,
                  37,
                  240,
                  21,
                  10,
                  23,
                  190,
                  6,
                  148,
                  247,
                  120,
                  234,
                  75,
                  0,
                  26,
                  197,
                  62,
                  94,
                  252,
                  219,
                  203,
                  117,
                  35,
                  11,
                  32,
                  57,
                  177,
                  33,
                  88,
                  237,
                  149,
                  56,
                  87,
                  174,
                  20,
                  125,
                  136,
                  171,
                  168,
                  68,
                  175,
                  74,
                  165,
                  71,
                  134,
                  139,
                  48,
                  27,
                  166,
                  77,
                  146,
                  158,
                  231,
                  83,
                  111,
                  229,
                  122,
                  60,
                  211,
                  133,
                  230,
                  220,
                  105,
                  92,
                  41,
                  55,
                  46,
                  245,
                  40,
                  244,
                  102,
                  143,
                  54,
                  65,
                  25,
                  63,
                  161,
                  1,
                  216,
                  80,
                  73,
                  209,
                  76,
                  132,
                  187,
                  208,
                  89,
                  18,
                  169,
                  200,
                  196,
                  135,
                  130,
                  116,
                  188,
                  159,
                  86,
                  164,
                  100,
                  109,
                  198,
                  173,
                  186,
                  3,
                  64,
                  52,
                  217,
                  226,
                  250,
                  124,
                  123,
                  5,
                  202,
                  38,
                  147,
                  118,
                  126,
                  255,
                  82,
                  85,
                  212,
                  207,
                  206,
                  59,
                  227,
                  47,
                  16,
                  58,
                  17,
                  182,
                  189,
                  28,
                  42,
                  223,
                  183,
                  170,
                  213,
                  119,
                  248,
                  152,
                  2,
                  44,
                  154,
                  163,
                  70,
                  221,
                  153,
                  101,
                  155,
                  167,
                  43,
                  172,
                  9,
                  129,
                  22,
                  39,
                  253,
                  19,
                  98,
                  108,
                  110,
                  79,
                  113,
                  224,
                  232,
                  178,
                  185,
                  112,
                  104,
                  218,
                  246,
                  97,
                  228,
                  251,
                  34,
                  242,
                  193,
                  238,
                  210,
                  144,
                  12,
                  191,
                  179,
                  162,
                  241,
                  81,
                  51,
                  145,
                  235,
                  249,
                  14,
                  239,
                  107,
                  49,
                  192,
                  214,
                  31,
                  181,
                  199,
                  106,
                  157,
                  184,
                  84,
                  204,
                  176,
                  115,
                  121,
                  50,
                  45,
                  127,
                  4,
                  150,
                  254,
                  138,
                  236,
                  205,
                  93,
                  222,
                  114,
                  67,
                  29,
                  24,
                  72,
                  243,
                  141,
                  128,
                  195,
                  78,
                  66,
                  215,
                  61,
                  156,
                  180
                ]),
                  (this._p = new Uint8Array(512)),
                  (this._defaultPerlinOptions = {
                    octaves: 1,
                    frequency: 1,
                    amplitude: 1,
                    persistance: 0.5
                  }),
                  (t = o.extend({}, this._defaultPerlinOptions, t)),
                  (this.persistance = t.persistance),
                  (this.amplitude = t.amplitude),
                  (this.frequency = t.frequency),
                  (this.octaves = t.octaves),
                  t.seed
                    ? (this._random = new i.Random(t.seed))
                    : (this._random = new i.Random()),
                  (this._perm = this._random.shuffle(this._perm));
                for (var e = 0; e < 512; e++)
                  this._p[e] = 255 & this._perm[e % 256];
              }
              return (
                (t.prototype.noise = function() {
                  for (
                    var t = this.amplitude,
                      e = this.frequency,
                      i = 0,
                      n = 0,
                      o = 0;
                    o < this.octaves;
                    o++
                  ) {
                    switch (arguments.length) {
                      case 1:
                        i += this._noise1d(arguments[0] * e) * t;
                        break;
                      case 2:
                        i +=
                          this._noise2d(arguments[0] * e, arguments[1] * e) * t;
                        break;
                      case 3:
                        i +=
                          this._noise3d(
                            arguments[0] * e,
                            arguments[1] * e,
                            arguments[2] * e
                          ) * t;
                        break;
                      default:
                        throw new Error("Invalid arguments for perlin noise");
                    }
                    (n += t), (t *= this.persistance), (e *= 2);
                  }
                  return i / n;
                }),
                (t.prototype.sequence = function(t, e) {
                  e || (e = 1 / t);
                  for (var i = new Array(t), n = 0; n < t; n++)
                    i[n] = this.noise(n * e);
                  return i;
                }),
                (t.prototype.grid = function(t, e, i) {
                  i || (i = 1 / Math.min(t, e));
                  for (var n = new Array(t * e), o = 0; o < e; o++)
                    for (var r = 0; r < t; r++)
                      n[r + o * t] = this.noise(r * i, o * i);
                  return n;
                }),
                (t.prototype._gradient3d = function(t, e, i, n) {
                  var o = 15 & t,
                    r = o < 8 ? e : i,
                    s = o < 4 ? i : 12 === o || 14 === o ? e : n;
                  return (0 == (1 & o) ? r : -r) + (0 == (2 & o) ? s : -s);
                }),
                (t.prototype._gradient2d = function(t, e, i) {
                  var n = 0 == (1 & t) ? e : i;
                  return 0 == (2 & t) ? -n : n;
                }),
                (t.prototype._gradient1d = function(t, e) {
                  return 0 == (1 & t) ? -e : e;
                }),
                (t.prototype._noise1d = function(t) {
                  var e = 255 & Math.floor(t);
                  return (
                    (t -= Math.floor(t)),
                    (r(
                      s(t),
                      this._gradient1d(this._p[e], t),
                      this._gradient1d(this._p[e + 1], t - 1)
                    ) +
                      1) /
                      2
                  );
                }),
                (t.prototype._noise2d = function(t, e) {
                  var i = 255 & Math.floor(t),
                    n = 255 & Math.floor(e);
                  (t -= Math.floor(t)), (e -= Math.floor(e));
                  var o = s(t),
                    a = s(e),
                    h = this._p[i] + n,
                    c = this._p[i + 1] + n;
                  return (
                    (r(
                      a,
                      r(
                        o,
                        this._gradient2d(this._p[h], t, e),
                        this._gradient2d(this._p[c], t - 1, e)
                      ),
                      r(
                        o,
                        this._gradient2d(this._p[h + 1], t, e - 1),
                        this._gradient2d(this._p[c + 1], t - 1, e - 1)
                      )
                    ) +
                      1) /
                    2
                  );
                }),
                (t.prototype._noise3d = function(t, e, i) {
                  var n = 255 & Math.floor(t),
                    o = 255 & Math.floor(e),
                    a = 255 & Math.floor(i);
                  (t -= Math.floor(t)),
                    (e -= Math.floor(e)),
                    (i -= Math.floor(i));
                  var h = s(t),
                    c = s(e),
                    l = s(i),
                    u = this._p[n] + o,
                    p = this._p[n + 1] + o,
                    f = this._p[u] + a,
                    d = this._p[p] + a,
                    g = this._p[u + 1] + a,
                    y = this._p[p + 1] + a;
                  return (
                    (r(
                      l,
                      r(
                        c,
                        r(
                          h,
                          this._gradient3d(this._p[f], t, e, i),
                          this._gradient3d(this._p[d], t - 1, e, i)
                        ),
                        r(
                          h,
                          this._gradient3d(this._p[g], t, e - 1, i),
                          this._gradient3d(this._p[y], t - 1, e - 1, i)
                        )
                      ),
                      r(
                        c,
                        r(
                          h,
                          this._gradient3d(this._p[f + 1], t, e, i - 1),
                          this._gradient3d(this._p[d + 1], t - 1, e, i - 1)
                        ),
                        r(
                          h,
                          this._gradient3d(this._p[g + 1], t, e - 1, i - 1),
                          this._gradient3d(this._p[y + 1], t - 1, e - 1, i - 1)
                        )
                      )
                    ) +
                      1) /
                    2
                  );
                }),
                t
              );
            })();
            e.PerlinGenerator = a;
            var h = (function() {
              function t(t, e) {
                (this.generator = t),
                  (this.colorFcn = e),
                  e ||
                    (this.colorFcn = function(t) {
                      return t < 125 ? n.Color.Black : n.Color.White;
                    });
              }
              return (
                (t.prototype.image = function(t, e) {
                  var i = document.createElement("img"),
                    n = document.createElement("canvas");
                  (n.width = t), (n.height = e);
                  var o = n.getContext("2d");
                  return this.draw(o, 0, 0, t, e), (i.src = n.toDataURL()), i;
                }),
                (t.prototype.draw = function(t, e, i, n, o) {
                  for (
                    var r = this.generator.grid(n, o),
                      s = t.getImageData(e, i, n, o),
                      a = 0;
                    a < o;
                    a++
                  )
                    for (var h = 0; h < n; h++) {
                      var c = r[h + n * a],
                        l = 255 & Math.floor(255 * c),
                        u = 4 * (h + a * s.width),
                        p = this.colorFcn(l);
                      (s.data[u] = p.r),
                        (s.data[u + 1] = p.g),
                        (s.data[u + 2] = p.b),
                        (s.data[u + 3] = Math.floor(255 * p.a));
                    }
                  t.putImageData(s, e, i);
                }),
                t
              );
            })();
            e.PerlinDrawer2D = h;
          }
        ),
        i(
          "Math/Index",
          ["require", "exports", "Math/PerlinNoise", "Math/Random"],
          function(t, e, i, n) {
            "use strict";
            function o(t) {
              for (var i in t) e.hasOwnProperty(i) || (e[i] = t[i]);
            }
            Object.defineProperty(e, "__esModule", { value: !0 }), o(i), o(n);
          }
        ),
        i("PostProcessing/IPostProcessor", ["require", "exports"], function(
          t,
          e
        ) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        i(
          "PostProcessing/ColorBlindCorrector",
          ["require", "exports", "Util/Log"],
          function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var n;
            !(function(t) {
              (t[(t.Protanope = 0)] = "Protanope"),
                (t[(t.Deuteranope = 1)] = "Deuteranope"),
                (t[(t.Tritanope = 2)] = "Tritanope");
            })((n = e.ColorBlindness || (e.ColorBlindness = {})));
            var o = (function() {
              function t(t, e, o) {
                void 0 === e && (e = !1),
                  void 0 === o && (o = n.Protanope),
                  (this.engine = t),
                  (this.simulate = e),
                  (this.colorMode = o),
                  (this._vertexShader =
                    "attribute vec2 a_position;attribute vec2 a_texCoord;uniform vec2 u_resolution;varying vec2 v_texCoord;void main() {vec2 zeroToOne = a_position / u_resolution;vec2 zeroToTwo = zeroToOne * 2.0;vec2 clipSpace = zeroToTwo - 1.0;gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);v_texCoord = a_texCoord;}"),
                  (this._fragmentShader =
                    "precision mediump float;uniform sampler2D u_image;varying vec2 v_texCoord;void main() {vec4 o =  texture2D(u_image, v_texCoord);float L = (17.8824 * o.r) + (43.5161 * o.g) + (4.11935 * o.b);float M = (3.45565 * o.r) + (27.1554 * o.g) + (3.86714 * o.b);float S = (0.0299566 * o.r) + (0.184309 * o.g) + (1.46709 * o.b);//MODE CODE//vec4 error;error.r = (0.0809444479 * l) + (-0.130504409 * m) + (0.116721066 * s);error.g = (-0.0102485335 * l) + (0.0540193266 * m) + (-0.113614708 * s);error.b = (-0.000365296938 * l) + (-0.00412161469 * m) + (0.693511405 * s);error.a = 1.0;vec4 diff = o - error;vec4 correction;correction.r = 0.0;correction.g =  (diff.r * 0.7) + (diff.g * 1.0);correction.b =  (diff.r * 0.7) + (diff.b * 1.0);correction = o + correction;correction.a = o.a;//SIMULATE//}"),
                  (this._internalCanvas = document.createElement("canvas")),
                  (this._internalCanvas.width = t.drawWidth),
                  (this._internalCanvas.height = t.drawHeight),
                  (this._gl = this._internalCanvas.getContext("webgl", {
                    preserveDrawingBuffer: !0
                  })),
                  (this._program = this._gl.createProgram());
                var r = this._getShader(
                    "Fragment",
                    this._getFragmentShaderByMode(o)
                  ),
                  s = this._getShader("Vertex", this._vertexShader);
                this._gl.attachShader(this._program, s),
                  this._gl.attachShader(this._program, r),
                  this._gl.linkProgram(this._program),
                  this._gl.getProgramParameter(
                    this._program,
                    this._gl.LINK_STATUS
                  ) ||
                    i.Logger.getInstance().error(
                      "Unable to link shader program!"
                    ),
                  this._gl.useProgram(this._program);
              }
              return (
                (t.prototype._getFragmentShaderByMode = function(t) {
                  var e = "";
                  return (
                    t === n.Protanope
                      ? (e =
                          "float l = 0.0 * L + 2.02344 * M + -2.52581 * S;float m = 0.0 * L + 1.0 * M + 0.0 * S;float s = 0.0 * L + 0.0 * M + 1.0 * S;")
                      : t === n.Deuteranope
                        ? (e =
                            "float l = 1.0 * L + 0.0 * M + 0.0 * S;float m = 0.494207 * L + 0.0 * M + 1.24827 * S;float s = 0.0 * L + 0.0 * M + 1.0 * S;")
                        : t === n.Tritanope &&
                          (e =
                            "float l = 1.0 * L + 0.0 * M + 0.0 * S;float m = 0.0 * L + 1.0 * M + 0.0 * S;float s = -0.395913 * L + 0.801109 * M + 0.0 * S;"),
                    this.simulate
                      ? (this._fragmentShader = this._fragmentShader.replace(
                          "//SIMULATE//",
                          "gl_FragColor = error.rgba;"
                        ))
                      : (this._fragmentShader = this._fragmentShader.replace(
                          "//SIMULATE//",
                          "gl_FragColor = correction.rgba;"
                        )),
                    this._fragmentShader.replace("//MODE CODE//", e)
                  );
                }),
                (t.prototype._setRectangle = function(t, e, i, n) {
                  var o = t,
                    r = t + i,
                    s = e,
                    a = e + n;
                  this._gl.bufferData(
                    this._gl.ARRAY_BUFFER,
                    new Float32Array([o, s, r, s, o, a, o, a, r, s, r, a]),
                    this._gl.STATIC_DRAW
                  );
                }),
                (t.prototype._getShader = function(t, e) {
                  var n;
                  return (
                    "Fragment" === t
                      ? (n = this._gl.createShader(this._gl.FRAGMENT_SHADER))
                      : "Vertex" === t
                        ? (n = this._gl.createShader(this._gl.VERTEX_SHADER))
                        : i.Logger.getInstance().error(
                            "Error unknown shader type",
                            t
                          ),
                    this._gl.shaderSource(n, e),
                    this._gl.compileShader(n),
                    this._gl.getShaderParameter(n, this._gl.COMPILE_STATUS)
                      ? n
                      : (i.Logger.getInstance().error(
                          "Unable to compile shader!",
                          this._gl.getShaderInfoLog(n)
                        ),
                        null)
                  );
                }),
                (t.prototype.process = function(t, e) {
                  var i = this._gl.getAttribLocation(
                      this._program,
                      "a_position"
                    ),
                    n = this._gl.getAttribLocation(this._program, "a_texCoord"),
                    o = this._gl.createBuffer();
                  this._gl.bindBuffer(this._gl.ARRAY_BUFFER, o),
                    this._gl.bufferData(
                      this._gl.ARRAY_BUFFER,
                      new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]),
                      this._gl.STATIC_DRAW
                    ),
                    this._gl.enableVertexAttribArray(n),
                    this._gl.vertexAttribPointer(
                      n,
                      2,
                      this._gl.FLOAT,
                      !1,
                      0,
                      0
                    );
                  var r = this._gl.createTexture();
                  this._gl.bindTexture(this._gl.TEXTURE_2D, r),
                    this._gl.texParameteri(
                      this._gl.TEXTURE_2D,
                      this._gl.TEXTURE_WRAP_S,
                      this._gl.CLAMP_TO_EDGE
                    ),
                    this._gl.texParameteri(
                      this._gl.TEXTURE_2D,
                      this._gl.TEXTURE_WRAP_T,
                      this._gl.CLAMP_TO_EDGE
                    ),
                    this._gl.texParameteri(
                      this._gl.TEXTURE_2D,
                      this._gl.TEXTURE_MIN_FILTER,
                      this._gl.NEAREST
                    ),
                    this._gl.texParameteri(
                      this._gl.TEXTURE_2D,
                      this._gl.TEXTURE_MAG_FILTER,
                      this._gl.NEAREST
                    ),
                    this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, 1),
                    this._gl.texImage2D(
                      this._gl.TEXTURE_2D,
                      0,
                      this._gl.RGBA,
                      this._gl.RGBA,
                      this._gl.UNSIGNED_BYTE,
                      t
                    );
                  var s = this._gl.getUniformLocation(
                    this._program,
                    "u_resolution"
                  );
                  this._gl.uniform2f(
                    s,
                    this._internalCanvas.width,
                    this._internalCanvas.height
                  );
                  var a = this._gl.createBuffer();
                  this._gl.bindBuffer(this._gl.ARRAY_BUFFER, a),
                    this._gl.enableVertexAttribArray(i),
                    this._gl.vertexAttribPointer(
                      i,
                      2,
                      this._gl.FLOAT,
                      !1,
                      0,
                      0
                    ),
                    this._setRectangle(0, 0, t.width, t.height),
                    this._gl.drawArrays(this._gl.TRIANGLES, 0, 6);
                  var h = new Uint8Array(t.width * t.height * 4);
                  this._gl.readPixels(
                    0,
                    0,
                    t.width,
                    t.height,
                    this._gl.RGBA,
                    this._gl.UNSIGNED_BYTE,
                    h
                  ),
                    t.data.set(h),
                    e.putImageData(t, 0, 0);
                }),
                t
              );
            })();
            e.ColorBlindCorrector = o;
          }
        ),
        i(
          "PostProcessing/Index",
          ["require", "exports", "PostProcessing/ColorBlindCorrector"],
          function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (function(t) {
                for (var i in t) e.hasOwnProperty(i) || (e[i] = t[i]);
              })(i);
          }
        ),
        i(
          "Resources/Index",
          [
            "require",
            "exports",
            "Resources/Resource",
            "Resources/Sound",
            "Resources/Texture"
          ],
          function(t, e, i, n, o) {
            "use strict";
            function r(t) {
              for (var i in t) e.hasOwnProperty(i) || (e[i] = t[i]);
            }
            Object.defineProperty(e, "__esModule", { value: !0 }),
              r(i),
              r(n),
              r(o);
          }
        ),
        i("Input/Gamepad", ["require", "exports", "Class", "Events"], function(
          t,
          e,
          i,
          o
        ) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r = (function(t) {
            function e(e) {
              var i = t.call(this) || this;
              return (
                (i.enabled = !1),
                (i.supported = !!navigator.getGamepads),
                (i._gamePadTimeStamps = [0, 0, 0, 0]),
                (i._oldPads = []),
                (i._pads = []),
                (i._initSuccess = !1),
                (i._navigator = navigator),
                (i._minimumConfiguration = null),
                (i._engine = e),
                i
              );
            }
            return (
              n(e, t),
              (e.prototype.init = function() {
                this.supported &&
                  (this._initSuccess ||
                    ((this._oldPads = this._clonePads(
                      this._navigator.getGamepads()
                    )),
                    this._oldPads.length &&
                      this._oldPads[0] &&
                      (this._initSuccess = !0)));
              }),
              (e.prototype.setMinimumGamepadConfiguration = function(t) {
                this._enableAndUpdate(), (this._minimumConfiguration = t);
              }),
              (e.prototype._enableAndUpdate = function() {
                this.enabled || ((this.enabled = !0), this.update());
              }),
              (e.prototype._isGamepadValid = function(t) {
                if (!this._minimumConfiguration) return !0;
                if (!t) return !1;
                var e = t.axes.filter(function(t) {
                    return void 0 !== typeof t;
                  }).length,
                  i = t.buttons.filter(function(t) {
                    return void 0 !== typeof t;
                  }).length;
                return (
                  e >= this._minimumConfiguration.axis &&
                  i >= this._minimumConfiguration.buttons &&
                  t.connected
                );
              }),
              (e.prototype.on = function(e, i) {
                this._enableAndUpdate(), t.prototype.on.call(this, e, i);
              }),
              (e.prototype.off = function(e, i) {
                this._enableAndUpdate(), t.prototype.off.call(this, e, i);
              }),
              (e.prototype.update = function() {
                if (this.enabled && this.supported) {
                  this.init();
                  for (
                    var t = this._navigator.getGamepads(), e = 0;
                    e < t.length;
                    e++
                  )
                    if (t[e]) {
                      if (
                        (!this.at(e).connected &&
                          this._isGamepadValid(t[e]) &&
                          this.eventDispatcher.emit(
                            "connect",
                            new o.GamepadConnectEvent(e, this.at(e))
                          ),
                        (this.at(e).connected = !0),
                        !t[e].timestamp ||
                          t[e].timestamp !== this._gamePadTimeStamps[e])
                      ) {
                        (this._gamePadTimeStamps[e] = t[e].timestamp),
                          (this.at(e).navigatorGamepad = t[e]);
                        var i, n, r, s, c;
                        for (i in a)
                          "number" == typeof (n = a[i]) &&
                            t[e].buttons[n] &&
                            (c = t[e].buttons[n].value) !==
                              this._oldPads[e].getButton(n) &&
                            (t[e].buttons[n].pressed
                              ? (this.at(e).updateButton(n, c),
                                this.at(e).eventDispatcher.emit(
                                  "button",
                                  new o.GamepadButtonEvent(n, c, this.at(e))
                                ))
                              : this.at(e).updateButton(n, 0));
                        for (r in h)
                          "number" == typeof (s = h[r]) &&
                            (c = t[e].axes[s]) !==
                              this._oldPads[e].getAxes(s) &&
                            (this.at(e).updateAxes(s, c),
                            this.at(e).eventDispatcher.emit(
                              "axis",
                              new o.GamepadAxisEvent(s, c, this.at(e))
                            ));
                        this._oldPads[e] = this._clonePad(t[e]);
                      }
                    } else {
                      var l = this.at(e);
                      l.connected &&
                        this.eventDispatcher.emit(
                          "disconnect",
                          new o.GamepadDisconnectEvent(e, l)
                        ),
                        (l.connected = !1);
                    }
                }
              }),
              (e.prototype.at = function(t) {
                if ((this._enableAndUpdate(), t >= this._pads.length))
                  for (var e = this._pads.length - 1, i = t; e < i; e++)
                    this._pads.push(new s()), this._oldPads.push(new s());
                return this._pads[t];
              }),
              (e.prototype.getValidGamepads = function() {
                this._enableAndUpdate();
                for (var t = [], e = 0; e < this._pads.length; e++)
                  this._isGamepadValid(this.at(e).navigatorGamepad) &&
                    this.at(e).connected &&
                    t.push(this.at(e));
                return t;
              }),
              (e.prototype.count = function() {
                return this._pads.filter(function(t) {
                  return t.connected;
                }).length;
              }),
              (e.prototype._clonePads = function(t) {
                for (var e = [], i = 0, n = t.length; i < n; i++)
                  e.push(this._clonePad(t[i]));
                return e;
              }),
              (e.prototype._clonePad = function(t) {
                var e,
                  i,
                  n = new s();
                if (!t) return n;
                for (e = 0, i = t.buttons.length; e < i; e++)
                  t.buttons[e] && n.updateButton(e, t.buttons[e].value);
                for (e = 0, i = t.axes.length; e < i; e++)
                  n.updateAxes(e, t.axes[e]);
                return n;
              }),
              e
            );
          })(i.Class);
          (r.MinAxisMoveThreshold = 0.05), (e.Gamepads = r);
          var s = (function(t) {
            function e() {
              var e = t.call(this) || this;
              (e.connected = !1),
                (e._buttons = new Array(16)),
                (e._axes = new Array(4));
              var i;
              for (i = 0; i < e._buttons.length; i++) e._buttons[i] = 0;
              for (i = 0; i < e._axes.length; i++) e._axes[i] = 0;
              return e;
            }
            return (
              n(e, t),
              (e.prototype.isButtonPressed = function(t, e) {
                return void 0 === e && (e = 1), this._buttons[t] >= e;
              }),
              (e.prototype.getButton = function(t) {
                return this._buttons[t];
              }),
              (e.prototype.getAxes = function(t) {
                var e = this._axes[t];
                return Math.abs(e) < r.MinAxisMoveThreshold ? 0 : e;
              }),
              (e.prototype.updateButton = function(t, e) {
                this._buttons[t] = e;
              }),
              (e.prototype.updateAxes = function(t, e) {
                this._axes[t] = e;
              }),
              e
            );
          })(i.Class);
          e.Gamepad = s;
          var a;
          !(function(t) {
            (t[(t.Face1 = 0)] = "Face1"),
              (t[(t.Face2 = 1)] = "Face2"),
              (t[(t.Face3 = 2)] = "Face3"),
              (t[(t.Face4 = 3)] = "Face4"),
              (t[(t.LeftBumper = 4)] = "LeftBumper"),
              (t[(t.RightBumper = 5)] = "RightBumper"),
              (t[(t.LeftTrigger = 6)] = "LeftTrigger"),
              (t[(t.RightTrigger = 7)] = "RightTrigger"),
              (t[(t.Select = 8)] = "Select"),
              (t[(t.Start = 9)] = "Start"),
              (t[(t.LeftStick = 10)] = "LeftStick"),
              (t[(t.RightStick = 11)] = "RightStick"),
              (t[(t.DpadUp = 12)] = "DpadUp"),
              (t[(t.DpadDown = 13)] = "DpadDown"),
              (t[(t.DpadLeft = 14)] = "DpadLeft"),
              (t[(t.DpadRight = 15)] = "DpadRight");
          })((a = e.Buttons || (e.Buttons = {})));
          var h;
          !(function(t) {
            (t[(t.LeftStickX = 0)] = "LeftStickX"),
              (t[(t.LeftStickY = 1)] = "LeftStickY"),
              (t[(t.RightStickX = 2)] = "RightStickX"),
              (t[(t.RightStickY = 3)] = "RightStickY");
          })((h = e.Axes || (e.Axes = {})));
        }),
        i(
          "Input/Pointer",
          [
            "require",
            "exports",
            "Engine",
            "Events",
            "UIActor",
            "Algebra",
            "Class",
            "Util/Util"
          ],
          function(t, e, i, o, r, s, a, h) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var c;
            !(function(t) {
              (t[(t.Touch = 0)] = "Touch"),
                (t[(t.Mouse = 1)] = "Mouse"),
                (t[(t.Pen = 2)] = "Pen"),
                (t[(t.Unknown = 3)] = "Unknown");
            })((c = e.PointerType || (e.PointerType = {})));
            var l;
            !(function(t) {
              (t[(t.Left = 0)] = "Left"),
                (t[(t.Middle = 1)] = "Middle"),
                (t[(t.Right = 2)] = "Right"),
                (t[(t.Unknown = 3)] = "Unknown");
            })((l = e.PointerButton || (e.PointerButton = {})));
            var u;
            !(function(t) {
              (t[(t.Pixel = 0)] = "Pixel"),
                (t[(t.Line = 1)] = "Line"),
                (t[(t.Page = 2)] = "Page");
            })((u = e.WheelDeltaMode || (e.WheelDeltaMode = {})));
            !(function(t) {
              (t[(t.Canvas = 0)] = "Canvas"),
                (t[(t.Document = 1)] = "Document");
            })(e.PointerScope || (e.PointerScope = {}));
            var p = (function(t) {
              function e(e, i, n, o, r, s, a, h, c, l) {
                var u = t.call(this) || this;
                return (
                  (u.x = e),
                  (u.y = i),
                  (u.pageX = n),
                  (u.pageY = o),
                  (u.screenX = r),
                  (u.screenY = s),
                  (u.index = a),
                  (u.pointerType = h),
                  (u.button = c),
                  (u.ev = l),
                  u
                );
              }
              return (
                n(e, t),
                Object.defineProperty(e.prototype, "pos", {
                  get: function() {
                    return new s.Vector(this.x, this.y);
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                e
              );
            })(o.GameEvent);
            e.PointerEvent = p;
            var f = (function(t) {
              function e(e, i, n, o, r, s, a, h, c, l, u, p) {
                var f = t.call(this) || this;
                return (
                  (f.x = e),
                  (f.y = i),
                  (f.pageX = n),
                  (f.pageY = o),
                  (f.screenX = r),
                  (f.screenY = s),
                  (f.index = a),
                  (f.deltaX = h),
                  (f.deltaY = c),
                  (f.deltaZ = l),
                  (f.deltaMode = u),
                  (f.ev = p),
                  f
                );
              }
              return n(e, t), e;
            })(o.GameEvent);
            e.WheelEvent = f;
            var d = (function(t) {
              function e(e) {
                var i = t.call(this) || this;
                return (
                  (i._pointerDown = []),
                  (i._pointerUp = []),
                  (i._pointerMove = []),
                  (i._pointerCancel = []),
                  (i._wheel = []),
                  (i._pointers = []),
                  (i._activePointers = []),
                  (i._engine = e),
                  i._pointers.push(new g()),
                  (i._activePointers = [-1]),
                  (i.primary = i._pointers[0]),
                  i
                );
              }
              return (
                n(e, t),
                (e.prototype.on = function(e, i) {
                  t.prototype.on.call(this, e, i);
                }),
                (e.prototype.init = function(t) {
                  (t = t || this._engine.canvas),
                    t.addEventListener(
                      "touchstart",
                      this._handleTouchEvent("down", this._pointerDown)
                    ),
                    t.addEventListener(
                      "touchend",
                      this._handleTouchEvent("up", this._pointerUp)
                    ),
                    t.addEventListener(
                      "touchmove",
                      this._handleTouchEvent("move", this._pointerMove)
                    ),
                    t.addEventListener(
                      "touchcancel",
                      this._handleTouchEvent("cancel", this._pointerCancel)
                    ),
                    window.PointerEvent
                      ? ((this._engine.canvas.style.touchAction = "none"),
                        t.addEventListener(
                          "pointerdown",
                          this._handlePointerEvent("down", this._pointerDown)
                        ),
                        t.addEventListener(
                          "pointerup",
                          this._handlePointerEvent("up", this._pointerUp)
                        ),
                        t.addEventListener(
                          "pointermove",
                          this._handlePointerEvent("move", this._pointerMove)
                        ),
                        t.addEventListener(
                          "pointercancel",
                          this._handlePointerEvent("cancel", this._pointerMove)
                        ))
                      : window.MSPointerEvent
                        ? ((this._engine.canvas.style.msTouchAction = "none"),
                          t.addEventListener(
                            "MSPointerDown",
                            this._handlePointerEvent("down", this._pointerDown)
                          ),
                          t.addEventListener(
                            "MSPointerUp",
                            this._handlePointerEvent("up", this._pointerUp)
                          ),
                          t.addEventListener(
                            "MSPointerMove",
                            this._handlePointerEvent("move", this._pointerMove)
                          ),
                          t.addEventListener(
                            "MSPointerCancel",
                            this._handlePointerEvent(
                              "cancel",
                              this._pointerMove
                            )
                          ))
                        : (t.addEventListener(
                            "mousedown",
                            this._handleMouseEvent("down", this._pointerDown)
                          ),
                          t.addEventListener(
                            "mouseup",
                            this._handleMouseEvent("up", this._pointerUp)
                          ),
                          t.addEventListener(
                            "mousemove",
                            this._handleMouseEvent("move", this._pointerMove)
                          )),
                    "onwheel" in document.createElement("div")
                      ? t.addEventListener(
                          "wheel",
                          this._handleWheelEvent("wheel", this._wheel)
                        )
                      : void 0 !== document.onmousewheel
                        ? t.addEventListener(
                            "mousewheel",
                            this._handleWheelEvent("wheel", this._wheel)
                          )
                        : t.addEventListener(
                            "MozMousePixelScroll",
                            this._handleWheelEvent("wheel", this._wheel)
                          );
                }),
                (e.prototype.update = function() {
                  (this._pointerUp.length = 0),
                    (this._pointerDown.length = 0),
                    (this._pointerMove.length = 0),
                    (this._pointerCancel.length = 0),
                    (this._wheel.length = 0);
                }),
                (e.prototype.at = function(t) {
                  if (t >= this._pointers.length)
                    for (var e = this._pointers.length - 1, i = t; e < i; e++)
                      this._pointers.push(new g()),
                        this._activePointers.push(-1);
                  return this._pointers[t];
                }),
                (e.prototype.count = function() {
                  return this._pointers.length;
                }),
                (e.prototype.propogate = function(t) {
                  var e = t instanceof r.UIActor,
                    i = 0,
                    n = this._pointerUp.length;
                  for (i; i < n; i++)
                    t.contains(
                      this._pointerUp[i].x,
                      this._pointerUp[i].y,
                      !e
                    ) &&
                      t.eventDispatcher.emit("pointerup", this._pointerUp[i]);
                  for (i = 0, n = this._pointerDown.length, i; i < n; i++)
                    t.contains(
                      this._pointerDown[i].x,
                      this._pointerDown[i].y,
                      !e
                    ) &&
                      t.eventDispatcher.emit(
                        "pointerdown",
                        this._pointerDown[i]
                      );
                  if (t.capturePointer.captureMoveEvents)
                    for (i = 0, n = this._pointerMove.length, i; i < n; i++)
                      t.contains(
                        this._pointerMove[i].x,
                        this._pointerMove[i].y,
                        !e
                      ) &&
                        t.eventDispatcher.emit(
                          "pointermove",
                          this._pointerMove[i]
                        );
                  for (i = 0, n = this._pointerCancel.length, i; i < n; i++)
                    t.contains(
                      this._pointerCancel[i].x,
                      this._pointerCancel[i].y,
                      !e
                    ) &&
                      t.eventDispatcher.emit(
                        "pointercancel",
                        this._pointerCancel[i]
                      );
                  for (i = 0, n = this._wheel.length, i; i < n; i++)
                    t.contains(this._wheel[i].x, this._wheel[i].y, !e) &&
                      t.eventDispatcher.emit("pointerwheel", this._wheel[i]);
                }),
                (e.prototype._handleMouseEvent = function(t, e) {
                  var i = this;
                  return function(n) {
                    n.preventDefault();
                    var o = n.pageX - h.getPosition(i._engine.canvas).x,
                      r = n.pageY - h.getPosition(i._engine.canvas).y,
                      a = i._engine.screenToWorldCoordinates(
                        new s.Vector(o, r)
                      ),
                      l = new p(
                        a.x,
                        a.y,
                        n.pageX,
                        n.pageY,
                        o,
                        r,
                        0,
                        c.Mouse,
                        n.button,
                        n
                      );
                    e.push(l), i.at(0).eventDispatcher.emit(t, l);
                  };
                }),
                (e.prototype._handleTouchEvent = function(t, e) {
                  var i = this;
                  return function(n) {
                    n.preventDefault();
                    for (var o = 0, r = n.changedTouches.length; o < r; o++) {
                      var a =
                        i._pointers.length > 1
                          ? i._getPointerIndex(n.changedTouches[o].identifier)
                          : 0;
                      if (-1 !== a) {
                        var u =
                            n.changedTouches[o].pageX -
                            h.getPosition(i._engine.canvas).x,
                          f =
                            n.changedTouches[o].pageY -
                            h.getPosition(i._engine.canvas).y,
                          d = i._engine.screenToWorldCoordinates(
                            new s.Vector(u, f)
                          ),
                          g = new p(
                            d.x,
                            d.y,
                            n.changedTouches[o].pageX,
                            n.changedTouches[o].pageY,
                            u,
                            f,
                            a,
                            c.Touch,
                            l.Unknown,
                            n
                          );
                        e.push(g),
                          i.at(a).eventDispatcher.emit(t, g),
                          i._pointers.length > 1 &&
                            ("up" === t
                              ? (i._activePointers[a] = -1)
                              : "down" === t &&
                                (i._activePointers[a] =
                                  n.changedTouches[o].identifier));
                      }
                    }
                  };
                }),
                (e.prototype._handlePointerEvent = function(t, e) {
                  var i = this;
                  return function(n) {
                    n.preventDefault();
                    var o =
                      i._pointers.length > 1
                        ? i._getPointerIndex(n.pointerId)
                        : 0;
                    if (-1 !== o) {
                      var r = n.pageX - h.getPosition(i._engine.canvas).x,
                        a = n.pageY - h.getPosition(i._engine.canvas).y,
                        c = i._engine.screenToWorldCoordinates(
                          new s.Vector(r, a)
                        ),
                        l = new p(
                          c.x,
                          c.y,
                          n.pageX,
                          n.pageY,
                          r,
                          a,
                          o,
                          i._stringToPointerType(n.pointerType),
                          n.button,
                          n
                        );
                      e.push(l),
                        i.at(o).eventDispatcher.emit(t, l),
                        i._pointers.length > 1 &&
                          ("up" === t
                            ? (i._activePointers[o] = -1)
                            : "down" === t &&
                              (i._activePointers[o] = n.pointerId));
                    }
                  };
                }),
                (e.prototype._handleWheelEvent = function(t, e) {
                  var n = this;
                  return function(o) {
                    (n._engine.pageScrollPreventionMode ===
                      i.ScrollPreventionMode.All ||
                      (n._engine.pageScrollPreventionMode ===
                        i.ScrollPreventionMode.Canvas &&
                        o.target === n._engine.canvas)) &&
                      o.preventDefault();
                    var r = o.pageX - h.getPosition(n._engine.canvas).x,
                      a = o.pageY - h.getPosition(n._engine.canvas).y,
                      c = n._engine.screenToWorldCoordinates(
                        new s.Vector(r, a)
                      ),
                      l = o.deltaX || -0.025 * o.wheelDeltaX || 0,
                      p =
                        o.deltaY ||
                        -0.025 * o.wheelDeltaY ||
                        -0.025 * o.wheelDelta ||
                        o.detail ||
                        0,
                      d = o.deltaZ || 0,
                      g = u.Pixel;
                    o.deltaMode &&
                      (1 === o.deltaMode
                        ? (g = u.Line)
                        : 2 === o.deltaMode && (g = u.Page));
                    var y = new f(
                      c.x,
                      c.y,
                      o.pageX,
                      o.pageY,
                      r,
                      a,
                      0,
                      l,
                      p,
                      d,
                      g,
                      o
                    );
                    e.push(y), n.at(0).eventDispatcher.emit(t, y);
                  };
                }),
                (e.prototype._getPointerIndex = function(t) {
                  var e;
                  if ((e = this._activePointers.indexOf(t)) > -1) return e;
                  for (var i = 0; i < this._activePointers.length; i++)
                    if (-1 === this._activePointers[i]) return i;
                  return -1;
                }),
                (e.prototype._stringToPointerType = function(t) {
                  switch (t) {
                    case "touch":
                      return c.Touch;
                    case "mouse":
                      return c.Mouse;
                    case "pen":
                      return c.Pen;
                    default:
                      return c.Unknown;
                  }
                }),
                e
              );
            })(a.Class);
            e.Pointers = d;
            var g = (function(t) {
              function e() {
                var e = t.call(this) || this;
                return (
                  (e.lastPagePos = null),
                  (e.lastScreenPos = null),
                  (e.lastWorldPos = null),
                  e.on("move", e._onPointerMove),
                  e
                );
              }
              return (
                n(e, t),
                (e.prototype._onPointerMove = function(t) {
                  (this.lastWorldPos = new s.Vector(t.x, t.y)),
                    (this.lastPagePos = new s.Vector(t.pageX, t.pageY)),
                    (this.lastScreenPos = new s.Vector(t.screenX, t.screenY));
                }),
                e
              );
            })(a.Class);
            e.Pointer = g;
          }
        ),
        i("Input/Keyboard", ["require", "exports", "Class", "Events"], function(
          t,
          e,
          i,
          o
        ) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r;
          !(function(t) {
            (t[(t.Num1 = 97)] = "Num1"),
              (t[(t.Num2 = 98)] = "Num2"),
              (t[(t.Num3 = 99)] = "Num3"),
              (t[(t.Num4 = 100)] = "Num4"),
              (t[(t.Num5 = 101)] = "Num5"),
              (t[(t.Num6 = 102)] = "Num6"),
              (t[(t.Num7 = 103)] = "Num7"),
              (t[(t.Num8 = 104)] = "Num8"),
              (t[(t.Num9 = 105)] = "Num9"),
              (t[(t.Num0 = 96)] = "Num0"),
              (t[(t.Numlock = 144)] = "Numlock"),
              (t[(t.Semicolon = 186)] = "Semicolon"),
              (t[(t.A = 65)] = "A"),
              (t[(t.B = 66)] = "B"),
              (t[(t.C = 67)] = "C"),
              (t[(t.D = 68)] = "D"),
              (t[(t.E = 69)] = "E"),
              (t[(t.F = 70)] = "F"),
              (t[(t.G = 71)] = "G"),
              (t[(t.H = 72)] = "H"),
              (t[(t.I = 73)] = "I"),
              (t[(t.J = 74)] = "J"),
              (t[(t.K = 75)] = "K"),
              (t[(t.L = 76)] = "L"),
              (t[(t.M = 77)] = "M"),
              (t[(t.N = 78)] = "N"),
              (t[(t.O = 79)] = "O"),
              (t[(t.P = 80)] = "P"),
              (t[(t.Q = 81)] = "Q"),
              (t[(t.R = 82)] = "R"),
              (t[(t.S = 83)] = "S"),
              (t[(t.T = 84)] = "T"),
              (t[(t.U = 85)] = "U"),
              (t[(t.V = 86)] = "V"),
              (t[(t.W = 87)] = "W"),
              (t[(t.X = 88)] = "X"),
              (t[(t.Y = 89)] = "Y"),
              (t[(t.Z = 90)] = "Z"),
              (t[(t.Shift = 16)] = "Shift"),
              (t[(t.Alt = 18)] = "Alt"),
              (t[(t.Up = 38)] = "Up"),
              (t[(t.Down = 40)] = "Down"),
              (t[(t.Left = 37)] = "Left"),
              (t[(t.Right = 39)] = "Right"),
              (t[(t.Space = 32)] = "Space"),
              (t[(t.Esc = 27)] = "Esc");
          })((r = e.Keys || (e.Keys = {})));
          var s = (function(t) {
            function e(e) {
              var i = t.call(this) || this;
              return (i.key = e), i;
            }
            return n(e, t), e;
          })(o.GameEvent);
          e.KeyEvent = s;
          var a = (function(t) {
            function e(e) {
              var i = t.call(this) || this;
              return (
                (i._keys = []),
                (i._keysUp = []),
                (i._keysDown = []),
                (i._engine = e),
                i
              );
            }
            return (
              n(e, t),
              (e.prototype.on = function(e, i) {
                t.prototype.on.call(this, e, i);
              }),
              (e.prototype.init = function(t) {
                var e = this;
                (t = t || window),
                  t.addEventListener("blur", function() {
                    e._keys.length = 0;
                  }),
                  t.addEventListener("keyup", function(t) {
                    var i = e._normalizeKeyCode(t.keyCode),
                      n = e._keys.indexOf(i);
                    e._keys.splice(n, 1), e._keysUp.push(i);
                    var o = new s(i);
                    e.eventDispatcher.emit("up", o),
                      e.eventDispatcher.emit("release", o);
                  }),
                  t.addEventListener("keydown", function(t) {
                    var i = e._normalizeKeyCode(t.keyCode);
                    if (-1 === e._keys.indexOf(i)) {
                      e._keys.push(i), e._keysDown.push(i);
                      var n = new s(i);
                      e.eventDispatcher.emit("down", n),
                        e.eventDispatcher.emit("press", n);
                    }
                  });
              }),
              (e.prototype.update = function() {
                (this._keysDown.length = 0), (this._keysUp.length = 0);
                for (var t = 0; t < this._keys.length; t++)
                  this.eventDispatcher.emit("hold", new s(this._keys[t]));
              }),
              (e.prototype.getKeys = function() {
                return this._keys;
              }),
              (e.prototype.wasPressed = function(t) {
                return this._keysDown.indexOf(t) > -1;
              }),
              (e.prototype.isHeld = function(t) {
                return this._keys.indexOf(t) > -1;
              }),
              (e.prototype.wasReleased = function(t) {
                return this._keysUp.indexOf(t) > -1;
              }),
              (e.prototype._normalizeKeyCode = function(t) {
                switch (t) {
                  case 59:
                    return r.Semicolon;
                  default:
                    return t;
                }
              }),
              e
            );
          })(i.Class);
          e.Keyboard = a;
        }),
        i("Input/IEngineInput", ["require", "exports"], function(t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        i(
          "Input/Index",
          [
            "require",
            "exports",
            "Input/Gamepad",
            "Input/Pointer",
            "Input/Keyboard"
          ],
          function(t, e, i, n, o) {
            "use strict";
            function r(t) {
              for (var i in t) e.hasOwnProperty(i) || (e[i] = t[i]);
            }
            Object.defineProperty(e, "__esModule", { value: !0 }),
              r(i),
              r(n),
              r(o);
          }
        ),
        i(
          "Util/Index",
          ["require", "exports", "Util/Util", "Util/DrawUtil"],
          function(t, e, i, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (function(t) {
                for (var i in t) e.hasOwnProperty(i) || (e[i] = t[i]);
              })(i),
              (e.DrawUtil = n);
          }
        ),
        i("Util/Detector", ["require", "exports", "Util/Log"], function(
          t,
          e,
          i
        ) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n = {
              webgl: "WebGL",
              webaudio: "WebAudio",
              gamepadapi: "Gamepad API"
            },
            o = (function() {
              function t() {
                (this._features = null),
                  (this.failedTests = []),
                  (this._criticalTests = {
                    canvasSupport: function() {
                      var t = document.createElement("canvas");
                      return !(!t.getContext || !t.getContext("2d"));
                    },
                    arrayBufferSupport: function() {
                      var t = new XMLHttpRequest();
                      t.open("GET", "/");
                      try {
                        t.responseType = "arraybuffer";
                      } catch (t) {
                        return !1;
                      }
                      return "arraybuffer" === t.responseType;
                    },
                    dataUrlSupport: function() {
                      return (
                        0 ===
                        document
                          .createElement("canvas")
                          .toDataURL("image/png")
                          .indexOf("data:image/png")
                      );
                    },
                    objectUrlSupport: function() {
                      return (
                        "URL" in window &&
                        "revokeObjectURL" in URL &&
                        "createObjectURL" in URL
                      );
                    },
                    rgbaSupport: function() {
                      var t = document.createElement("a").style;
                      return (
                        (t.cssText = "background-color:rgba(150,255,150,.5)"),
                        ("" + t.backgroundColor).indexOf("rgba") > -1
                      );
                    }
                  }),
                  (this._warningTest = {
                    webAudioSupport: function() {
                      return !!(
                        window.AudioContext ||
                        window.webkitAudioContext ||
                        window.mozAudioContext ||
                        window.msAudioContext ||
                        window.oAudioContext
                      );
                    },
                    webglSupport: function() {
                      var t = document.createElement("canvas");
                      return !(!t.getContext || !t.getContext("webgl"));
                    }
                  }),
                  (this._features = this._loadBrowserFeatures());
              }
              return (
                (t.prototype.getBrowserFeatures = function() {
                  return (
                    null === this._features &&
                      (this._features = this._loadBrowserFeatures()),
                    this._features
                  );
                }),
                (t.prototype.logBrowserFeatures = function() {
                  for (
                    var t =
                        "%cSUPPORTED BROWSER FEATURES\n==========================%c\n",
                      e = [
                        "font-weight: bold; color: navy",
                        "font-weight: normal; color: inherit"
                      ],
                      i = this.getBrowserFeatures(),
                      o = 0,
                      r = Object.keys(n);
                    o < r.length;
                    o++
                  ) {
                    var s = r[o];
                    i[s]
                      ? ((t += "(%c✓%c)"),
                        e.push("font-weight: bold; color: green"),
                        e.push("font-weight: normal; color: inherit"))
                      : ((t += "(%c✗%c)"),
                        e.push("font-weight: bold; color: red"),
                        e.push("font-weight: normal; color: inherit")),
                      (t += " " + n[s] + "\n");
                  }
                  e.unshift(t), console.log.apply(console, e);
                }),
                (t.prototype._loadBrowserFeatures = function() {
                  var t = this;
                  return {
                    canvas: (function() {
                      return t._criticalTests.canvasSupport();
                    })(),
                    arraybuffer: (function() {
                      return t._criticalTests.arrayBufferSupport();
                    })(),
                    dataurl: (function() {
                      return t._criticalTests.dataUrlSupport();
                    })(),
                    objecturl: (function() {
                      return t._criticalTests.objectUrlSupport();
                    })(),
                    rgba: (function() {
                      return t._criticalTests.rgbaSupport();
                    })(),
                    webaudio: (function() {
                      return t._warningTest.webAudioSupport();
                    })(),
                    webgl: (function() {
                      return t._warningTest.webglSupport();
                    })(),
                    gamepadapi: (function() {
                      return !!navigator.getGamepads;
                    })()
                  };
                }),
                (t.prototype.test = function() {
                  var t = !1;
                  for (var e in this._criticalTests)
                    this._criticalTests[e].call(this) ||
                      (this.failedTests.push(e),
                      i.Logger.getInstance().error(
                        "Critical browser feature missing, Excalibur requires:",
                        e
                      ),
                      (t = !0));
                  if (t) return !1;
                  for (var n in this._warningTest)
                    this._warningTest[n]() ||
                      i.Logger.getInstance().warn(
                        "Warning browser feature missing, Excalibur will have reduced performance:",
                        n
                      );
                  return !0;
                }),
                t
              );
            })();
          e.Detector = o;
        }),
        i("Util/SortedList", ["require", "exports"], function(t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
            function t(t) {
              this._getComparable = t;
            }
            return (
              (t.prototype.find = function(t) {
                return this._find(this._root, t);
              }),
              (t.prototype._find = function(t, e) {
                return (
                  null != t &&
                  (this._getComparable.call(e) === t.getKey()
                    ? t.getData().indexOf(e) > -1
                    : this._getComparable.call(e) < t.getKey()
                      ? this._find(t.getLeft(), e)
                      : this._find(t.getRight(), e))
                );
              }),
              (t.prototype.get = function(t) {
                return this._get(this._root, t);
              }),
              (t.prototype._get = function(t, e) {
                return null == t
                  ? []
                  : e === t.getKey()
                    ? t.getData()
                    : e < t.getKey()
                      ? this._get(t.getLeft(), e)
                      : this._get(t.getRight(), e);
              }),
              (t.prototype.add = function(t) {
                return null == this._root
                  ? ((this._root = new n(
                      this._getComparable.call(t),
                      [t],
                      null,
                      null
                    )),
                    !0)
                  : this._insert(this._root, t);
              }),
              (t.prototype._insert = function(t, e) {
                return (
                  null != t &&
                  (this._getComparable.call(e) === t.getKey()
                    ? !(t.getData().indexOf(e) > -1) &&
                      (t.getData().push(e), !0)
                    : this._getComparable.call(e) < t.getKey()
                      ? null == t.getLeft()
                        ? (t.setLeft(
                            new n(this._getComparable.call(e), [e], null, null)
                          ),
                          !0)
                        : this._insert(t.getLeft(), e)
                      : null == t.getRight()
                        ? (t.setRight(
                            new n(this._getComparable.call(e), [e], null, null)
                          ),
                          !0)
                        : this._insert(t.getRight(), e))
                );
              }),
              (t.prototype.removeByComparable = function(t) {
                this._root = this._remove(this._root, t);
              }),
              (t.prototype._remove = function(t, e) {
                if (null == t) return null;
                if (this._getComparable.call(e) !== t.getKey())
                  return this._getComparable.call(e) < t.getKey()
                    ? (t.setLeft(this._remove(t.getLeft(), e)), t)
                    : (t.setRight(this._remove(t.getRight(), e)), t);
                var i = t.getData().indexOf(e);
                if (i > -1) {
                  if ((t.getData().splice(i, 1), 0 === t.getData().length)) {
                    if (null == t.getLeft() && null == t.getRight())
                      return null;
                    if (null == t.getLeft()) return t.getRight();
                    if (null == t.getRight()) return t.getLeft();
                    var n = this._findMinNode(t.getRight());
                    return (
                      t.setKey(n.getKey()),
                      t.setData(n.getData()),
                      t.setRight(this._cleanup(t.getRight(), n)),
                      t
                    );
                  }
                  return t;
                }
                return null;
              }),
              (t.prototype._cleanup = function(t, e) {
                var i = e.getKey();
                if (null == t) return null;
                if (i === t.getKey()) {
                  if (null == t.getLeft() && null == t.getRight()) return null;
                  if (null == t.getLeft()) return t.getRight();
                  if (null == t.getRight()) return t.getLeft();
                  var n = this._findMinNode(t.getRight());
                  return (
                    t.setKey(n.getKey()),
                    t.setData(n.getData()),
                    t.setRight(this._cleanup(t.getRight(), n)),
                    t
                  );
                }
                return this._getComparable.call(e) < t.getKey()
                  ? (t.setLeft(this._cleanup(t.getLeft(), e)), t)
                  : (t.setRight(this._cleanup(t.getRight(), e)), t);
              }),
              (t.prototype._findMinNode = function(t) {
                for (var e = t; null != e.getLeft(); ) e = e.getLeft();
                return e;
              }),
              (t.prototype.list = function() {
                var t = new Array();
                return this._list(this._root, t), t;
              }),
              (t.prototype._list = function(t, e) {
                null != t &&
                  (this._list(t.getLeft(), e),
                  t.getData().forEach(function(t) {
                    e.push(t);
                  }),
                  this._list(t.getRight(), e));
              }),
              t
            );
          })();
          e.SortedList = i;
          var n = (function() {
            function t(t, e, i, n) {
              (this._key = t),
                (this._data = e),
                (this._left = i),
                (this._right = n);
            }
            return (
              (t.prototype.getKey = function() {
                return this._key;
              }),
              (t.prototype.setKey = function(t) {
                this._key = t;
              }),
              (t.prototype.getData = function() {
                return this._data;
              }),
              (t.prototype.setData = function(t) {
                this._data = t;
              }),
              (t.prototype.getLeft = function() {
                return this._left;
              }),
              (t.prototype.setLeft = function(t) {
                this._left = t;
              }),
              (t.prototype.getRight = function() {
                return this._right;
              }),
              (t.prototype.setRight = function(t) {
                this._right = t;
              }),
              t
            );
          })();
          e.BinaryTreeNode = n;
          var o = (function() {
            function t(t) {
              (this._key = 0), (this._key = t);
            }
            return (
              (t.prototype.getTheKey = function() {
                return this._key;
              }),
              (t.prototype.setKey = function(t) {
                this._key = t;
              }),
              t
            );
          })();
          e.MockedElement = o;
        }),
        i(
          "Index",
          [
            "require",
            "exports",
            "Actor",
            "Algebra",
            "Camera",
            "Class",
            "Debug",
            "Engine",
            "EventDispatcher",
            "Events",
            "Group",
            "Label",
            "Loader",
            "Particles",
            "Physics",
            "Promises",
            "Scene",
            "TileMap",
            "Timer",
            "Trigger",
            "UIActor",
            "Actions/Index",
            "Collision/Index",
            "Drawing/Index",
            "Math/Index",
            "PostProcessing/Index",
            "Resources/Index",
            "Events",
            "Input/Index",
            "Traits/Index",
            "Util/Index",
            "Util/Decorators",
            "Util/Detector",
            "Util/CullingBox",
            "Util/EasingFunctions",
            "Util/Log",
            "Util/SortedList"
          ],
          function(
            t,
            e,
            i,
            n,
            o,
            r,
            s,
            a,
            h,
            c,
            l,
            u,
            p,
            f,
            d,
            g,
            y,
            _,
            v,
            m,
            b,
            w,
            x,
            P,
            C,
            A,
            S,
            E,
            T,
            M,
            O,
            R,
            D,
            I,
            k,
            B,
            L
          ) {
            "use strict";
            function j(t) {
              for (var i in t) e.hasOwnProperty(i) || (e[i] = t[i]);
            }
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.EX_VERSION = "0.14.0"),
              j(i),
              j(n),
              j(o),
              j(r),
              j(s),
              j(a),
              j(h),
              j(c),
              j(l),
              j(u),
              j(p),
              j(f),
              j(d),
              j(g),
              j(y),
              j(_),
              j(v),
              j(m),
              j(b),
              j(w),
              j(x),
              j(P),
              j(C),
              j(A),
              j(S),
              (e.Events = E),
              (e.Input = T),
              (e.Traits = M),
              (e.Util = O),
              j(R),
              j(D),
              j(I),
              j(k),
              j(B),
              j(L);
          }
        ),
        i(
          "Engine",
          [
            "require",
            "exports",
            "Index",
            "Promises",
            "Algebra",
            "UIActor",
            "Actor",
            "Timer",
            "TileMap",
            "Loader",
            "Util/Detector",
            "Events",
            "Util/Log",
            "Drawing/Color",
            "Scene",
            "Debug",
            "Class",
            "Input/Index",
            "Util/Util",
            "Collision/BoundingBox"
          ],
          function(t, e, i, o, r, s, a, h, c, l, u, p, f, d, g, y, _, v, m, b) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var w;
            !(function(t) {
              (t[(t.FullScreen = 0)] = "FullScreen"),
                (t[(t.Container = 1)] = "Container"),
                (t[(t.Fixed = 2)] = "Fixed"),
                (t[(t.Position = 3)] = "Position");
            })((w = e.DisplayMode || (e.DisplayMode = {})));
            var x;
            !(function(t) {
              (t[(t.None = 0)] = "None"),
                (t[(t.Canvas = 1)] = "Canvas"),
                (t[(t.All = 2)] = "All");
            })((x = e.ScrollPreventionMode || (e.ScrollPreventionMode = {})));
            var P = (function(t) {
              function e(n) {
                var o = t.call(this) || this;
                (o._hasStarted = !1),
                  (o.debug = new y.Debug()),
                  (o.postProcessors = []),
                  (o.scenes = {}),
                  (o._animations = []),
                  (o.isFullscreen = !1),
                  (o.displayMode = w.FullScreen),
                  (o.pauseAudioWhenHidden = !0),
                  (o.isDebug = !1),
                  (o.debugColor = new d.Color(255, 255, 255)),
                  (o.onFatalException = function(t) {
                    f.Logger.getInstance().fatal(t);
                  }),
                  (o._isSmoothingEnabled = !0),
                  (o._timescale = 1),
                  (o._isLoading = !1),
                  (n = m.extend({}, e._DefaultEngineOptions, n));
                var r = new u.Detector();
                if (
                  !n.suppressMinimumBrowserFeatureDetection &&
                  !(o._compatible = r.test())
                ) {
                  var s = document.createElement("div");
                  if (
                    ((s.innerText =
                      "Sorry, your browser does not support all the features needed for Excalibur"),
                    document.body.appendChild(s),
                    r.failedTests.forEach(function(t) {
                      var e = document.createElement("div");
                      (e.innerText = "Browser feature missing " + t),
                        document.body.appendChild(e);
                    }),
                    n.canvasElementId)
                  ) {
                    var a = document.getElementById(n.canvasElementId);
                    a && a.parentElement.removeChild(a);
                  }
                  return o;
                }
                return (
                  (o._compatible = !0),
                  console.log &&
                    !n.suppressConsoleBootMessage &&
                    (console.log(
                      "%cPowered by Excalibur.js (v" + i.EX_VERSION + ")",
                      "background: #176BAA; color: white; border-radius: 5px; padding: 15px; font-size: 1.5em; line-height: 80px;"
                    ),
                    console.log(
                      "\n      /| ________________\nO|===|* >________________>\n      \\|"
                    ),
                    console.log(
                      "Visit",
                      "http://excaliburjs.com",
                      "for more information"
                    )),
                  (o._logger = f.Logger.getInstance()),
                  o._logger.defaultLevel === f.LogLevel.Debug &&
                    r.logBrowserFeatures(),
                  o._logger.debug("Building engine..."),
                  (o.canvasElementId = n.canvasElementId),
                  n.canvasElementId
                    ? (o._logger.debug(
                        "Using Canvas element specified: " + n.canvasElementId
                      ),
                      (o.canvas = document.getElementById(n.canvasElementId)))
                    : (o._logger.debug("Using generated canvas element"),
                      (o.canvas = document.createElement("canvas"))),
                  n.width && n.height
                    ? (void 0 === n.displayMode && (o.displayMode = w.Fixed),
                      o._logger.debug(
                        "Engine viewport is size " + n.width + " x " + n.height
                      ),
                      (o.canvas.width = n.width),
                      (o.canvas.height = n.height))
                    : n.displayMode ||
                      (o._logger.debug("Engine viewport is fullscreen"),
                      (o.displayMode = w.FullScreen)),
                  n.backgroundColor &&
                    (o.backgroundColor = n.backgroundColor.clone()),
                  (o._loader = new l.Loader()),
                  o._initialize(n),
                  (o.rootScene = o.currentScene = new g.Scene(o)),
                  o.addScene("root", o.rootScene),
                  o.goToScene("root"),
                  o
                );
              }
              return (
                n(e, t),
                Object.defineProperty(e.prototype, "canvasWidth", {
                  get: function() {
                    return this.canvas.width;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "halfCanvasWidth", {
                  get: function() {
                    return this.canvas.width / 2;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "canvasHeight", {
                  get: function() {
                    return this.canvas.height;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "halfCanvasHeight", {
                  get: function() {
                    return this.canvas.height / 2;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "drawWidth", {
                  get: function() {
                    return this.currentScene && this.currentScene.camera
                      ? this.canvasWidth /
                          this.currentScene.camera.getZoom() /
                          this.pixelRatio
                      : this.canvasWidth / this.pixelRatio;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "halfDrawWidth", {
                  get: function() {
                    return this.drawWidth / 2;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "drawHeight", {
                  get: function() {
                    return this.currentScene && this.currentScene.camera
                      ? this.canvasHeight /
                          this.currentScene.camera.getZoom() /
                          this.pixelRatio
                      : this.canvasHeight / this.pixelRatio;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "halfDrawHeight", {
                  get: function() {
                    return this.drawHeight / 2;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "isHiDpi", {
                  get: function() {
                    return 1 !== this.pixelRatio;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "stats", {
                  get: function() {
                    return this.debug.stats;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "pixelRatio", {
                  get: function() {
                    return window.devicePixelRatio || 1;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.on = function(e, i) {
                  t.prototype.on.call(this, e, i);
                }),
                (e.prototype.getWorldBounds = function() {
                  var t = this.screenToWorldCoordinates(r.Vector.Zero).x,
                    e = this.screenToWorldCoordinates(r.Vector.Zero).y,
                    i = t + this.drawWidth,
                    n = e + this.drawHeight;
                  return new b.BoundingBox(t, e, i, n);
                }),
                Object.defineProperty(e.prototype, "timescale", {
                  get: function() {
                    return this._timescale;
                  },
                  set: function(t) {
                    if (t <= 0)
                      return void f.Logger.getInstance().error(
                        "Cannot set engine.timescale to a value of 0 or less than 0."
                      );
                    this._timescale = t;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.playAnimation = function(t, e, i) {
                  this._animations.push(new C(t, e, i));
                }),
                (e.prototype.addTileMap = function(t) {
                  this.currentScene.addTileMap(t);
                }),
                (e.prototype.removeTileMap = function(t) {
                  this.currentScene.removeTileMap(t);
                }),
                (e.prototype.addTimer = function(t) {
                  return this.currentScene.addTimer(t);
                }),
                (e.prototype.removeTimer = function(t) {
                  return this.currentScene.removeTimer(t);
                }),
                (e.prototype.addScene = function(t, e) {
                  this.scenes[t] &&
                    this._logger.warn("Scene", t, "already exists overwriting"),
                    (this.scenes[t] = e),
                    (e.engine = this);
                }),
                (e.prototype.removeScene = function(t) {
                  if (t instanceof g.Scene)
                    for (var e in this.scenes)
                      this.scenes.hasOwnProperty(e) &&
                        this.scenes[e] === t &&
                        delete this.scenes[e];
                  "string" == typeof t && delete this.scenes[t];
                }),
                (e.prototype.add = function(t) {
                  if (t instanceof s.UIActor)
                    return void this.currentScene.addUIActor(t);
                  t instanceof a.Actor && this._addChild(t),
                    t instanceof h.Timer && this.addTimer(t),
                    t instanceof c.TileMap && this.addTileMap(t),
                    2 === arguments.length &&
                      this.addScene(arguments[0], arguments[1]);
                }),
                (e.prototype.remove = function(t) {
                  if (t instanceof s.UIActor)
                    return void this.currentScene.removeUIActor(t);
                  t instanceof a.Actor && this._removeChild(t),
                    t instanceof h.Timer && this.removeTimer(t),
                    t instanceof c.TileMap && this.removeTileMap(t),
                    t instanceof g.Scene && this.removeScene(t),
                    "string" == typeof t && this.removeScene(t);
                }),
                (e.prototype._addChild = function(t) {
                  this.currentScene.add(t);
                }),
                (e.prototype._removeChild = function(t) {
                  this.currentScene.remove(t);
                }),
                (e.prototype.goToScene = function(t) {
                  if (this.scenes[t]) {
                    var e = this.currentScene,
                      i = this.scenes[t];
                    this._logger.debug("Going to scene:", t),
                      this.currentScene.isInitialized &&
                        (this.currentScene.onDeactivate.call(this.currentScene),
                        this.currentScene.eventDispatcher.emit(
                          "deactivate",
                          new p.DeactivateEvent(i, this.currentScene)
                        )),
                      (this.currentScene = i),
                      this.currentScene._initialize(this),
                      this.currentScene.onActivate.call(this.currentScene),
                      this.currentScene.eventDispatcher.emit(
                        "activate",
                        new p.ActivateEvent(e, this.currentScene)
                      );
                  } else this._logger.error("Scene", t, "does not exist!");
                }),
                (e.prototype.screenToWorldCoordinates = function(t) {
                  var e = t.x,
                    i = t.y;
                  if (
                    ((e = e / this.canvas.clientWidth * this.drawWidth),
                    (i = i / this.canvas.clientHeight * this.drawHeight),
                    (e -= this.halfDrawWidth),
                    (i -= this.halfDrawHeight),
                    this.currentScene && this.currentScene.camera)
                  ) {
                    var n = this.currentScene.camera.getFocus();
                    (e += n.x), (i += n.y);
                  }
                  return new r.Vector(Math.floor(e), Math.floor(i));
                }),
                (e.prototype.worldToScreenCoordinates = function(t) {
                  var e = t.x,
                    i = t.y;
                  if (this.currentScene && this.currentScene.camera) {
                    var n = this.currentScene.camera.getFocus();
                    (e -= n.x), (i -= n.y);
                  }
                  return (
                    (e += this.halfDrawWidth),
                    (i += this.halfDrawHeight),
                    (e = e * this.canvas.clientWidth / this.drawWidth),
                    (i = i * this.canvas.clientHeight / this.drawHeight),
                    new r.Vector(Math.floor(e), Math.floor(i))
                  );
                }),
                (e.prototype._setHeightByDisplayMode = function(t) {
                  this.displayMode === w.Container &&
                    ((this.canvas.width = t.clientWidth),
                    (this.canvas.height = t.clientHeight)),
                    this.displayMode === w.FullScreen &&
                      ((document.body.style.margin = "0px"),
                      (document.body.style.overflow = "hidden"),
                      (this.canvas.width = t.innerWidth),
                      (this.canvas.height = t.innerHeight));
                }),
                (e.prototype._initialize = function(t) {
                  var e = this;
                  if (
                    (t.displayMode && (this.displayMode = t.displayMode),
                    this.displayMode === w.FullScreen ||
                      this.displayMode === w.Container)
                  ) {
                    var i =
                      this.displayMode === w.Container
                        ? this.canvas.parentElement || document.body
                        : window;
                    this._setHeightByDisplayMode(i),
                      window.addEventListener("resize", function() {
                        e._logger.debug("View port resized"),
                          e._setHeightByDisplayMode(i),
                          e._logger.info(
                            "parent.clientHeight " + i.clientHeight
                          ),
                          e.setAntialiasing(e._isSmoothingEnabled);
                      });
                  } else
                    this.displayMode === w.Position &&
                      this._intializeDisplayModePosition(t);
                  (this.input = {
                    keyboard: new v.Keyboard(this),
                    pointers: new v.Pointers(this),
                    gamepads: new v.Gamepads(this)
                  }),
                    this.input.keyboard.init(),
                    this.input.pointers.init(
                      t && t.pointerScope === v.PointerScope.Document
                        ? document
                        : this.canvas
                    ),
                    this.input.gamepads.init(),
                    (this.pageScrollPreventionMode = t.scrollPreventionMode);
                  var n, o;
                  void 0 !== document.hidden
                    ? ((n = "hidden"), (o = "visibilitychange"))
                    : "msHidden" in document
                      ? ((n = "msHidden"), (o = "msvisibilitychange"))
                      : "webkitHidden" in document &&
                        ((n = "webkitHidden"), (o = "webkitvisibilitychange")),
                    document.addEventListener(o, function() {
                      document[n]
                        ? (e.eventDispatcher.emit(
                            "hidden",
                            new p.HiddenEvent(e)
                          ),
                          e._logger.debug("Window hidden"))
                        : (e.eventDispatcher.emit(
                            "visible",
                            new p.VisibleEvent(e)
                          ),
                          e._logger.debug("Window visible"));
                    }),
                    (this.ctx = this.canvas.getContext("2d")),
                    t.suppressHiDPIScaling || this._initializeHiDpi(),
                    this.canvasElementId ||
                      document.body.appendChild(this.canvas);
                }),
                (e.prototype._intializeDisplayModePosition = function(t) {
                  if (!t.position)
                    throw new Error(
                      "DisplayMode of Position was selected but no position option was given"
                    );
                  if (
                    ((this.canvas.style.display = "block"),
                    (this.canvas.style.position = "absolute"),
                    "string" == typeof t.position)
                  ) {
                    var e = t.position.split(" ");
                    switch (e[0]) {
                      case "top":
                        this.canvas.style.top = "0px";
                        break;
                      case "bottom":
                        this.canvas.style.bottom = "0px";
                        break;
                      case "middle":
                        this.canvas.style.top = "50%";
                        var i = -this.halfDrawHeight;
                        this.canvas.style.marginTop = i.toString();
                        break;
                      default:
                        throw new Error("Invalid Position Given");
                    }
                    if (e[1])
                      switch (e[1]) {
                        case "left":
                          this.canvas.style.left = "0px";
                          break;
                        case "right":
                          this.canvas.style.right = "0px";
                          break;
                        case "center":
                          this.canvas.style.left = "50%";
                          var n = -this.halfDrawWidth;
                          this.canvas.style.marginLeft = n.toString();
                          break;
                        default:
                          throw new Error("Invalid Position Given");
                      }
                  } else
                    t.position.top &&
                      ("number" == typeof t.position.top
                        ? (this.canvas.style.top =
                            t.position.top.toString() + "px")
                        : (this.canvas.style.top = t.position.top)),
                      t.position.right &&
                        ("number" == typeof t.position.right
                          ? (this.canvas.style.right =
                              t.position.right.toString() + "px")
                          : (this.canvas.style.right = t.position.right)),
                      t.position.bottom &&
                        ("number" == typeof t.position.bottom
                          ? (this.canvas.style.bottom =
                              t.position.bottom.toString() + "px")
                          : (this.canvas.style.bottom = t.position.bottom)),
                      t.position.left &&
                        ("number" == typeof t.position.left
                          ? (this.canvas.style.left =
                              t.position.left.toString() + "px")
                          : (this.canvas.style.left = t.position.left));
                }),
                (e.prototype._initializeHiDpi = function() {
                  if (this.isHiDpi) {
                    var t = this.canvas.width,
                      e = this.canvas.height;
                    (this.canvas.width = t * this.pixelRatio),
                      (this.canvas.height = e * this.pixelRatio),
                      (this.canvas.style.width = t + "px"),
                      (this.canvas.style.height = e + "px"),
                      this._logger.warn(
                        "Hi DPI screen detected, resetting canvas resolution from \n                           " +
                          t +
                          "x" +
                          e +
                          " to " +
                          this.canvas.width +
                          "x" +
                          this.canvas.height +
                          " \n                           css size will remain " +
                          t +
                          "x" +
                          e
                      ),
                      this.ctx.scale(this.pixelRatio, this.pixelRatio),
                      this._logger.warn(
                        "Canvas drawing context was scaled by " +
                          this.pixelRatio
                      );
                  }
                }),
                (e.prototype.setAntialiasing = function(t) {
                  this._isSmoothingEnabled = t;
                  var e = this.ctx;
                  e.imageSmoothingEnabled = t;
                  for (
                    var i = 0,
                      n = [
                        "webkitImageSmoothingEnabled",
                        "mozImageSmoothingEnabled",
                        "msImageSmoothingEnabled"
                      ];
                    i < n.length;
                    i++
                  ) {
                    var o = n[i];
                    o in e && (e[o] = t);
                  }
                }),
                (e.prototype.getAntialiasing = function() {
                  return (
                    this.ctx.imageSmoothingEnabled ||
                    this.ctx.webkitImageSmoothingEnabled ||
                    this.ctx.mozImageSmoothingEnabled ||
                    this.ctx.msImageSmoothingEnabled
                  );
                }),
                (e.prototype._update = function(t) {
                  if (this._isLoading)
                    return (
                      this._loader.update(this, t),
                      this.input.keyboard.update(),
                      this.input.pointers.update(),
                      void this.input.gamepads.update()
                    );
                  this.emit("preupdate", new p.PreUpdateEvent(this, t, this)),
                    this.currentScene.update(this, t),
                    (this._animations = this._animations.filter(function(t) {
                      return !t.animation.isDone();
                    })),
                    this.input.keyboard.update(),
                    this.input.pointers.update(),
                    this.input.gamepads.update(),
                    this.emit(
                      "postupdate",
                      new p.PostUpdateEvent(this, t, this)
                    );
                }),
                (e.prototype._draw = function(t) {
                  var e = this.ctx;
                  if (
                    (this.emit("predraw", new p.PreDrawEvent(e, t, this)),
                    this._isLoading)
                  )
                    return void this._loader.draw(e, t);
                  e.clearRect(0, 0, this.canvasWidth, this.canvasHeight),
                    (e.fillStyle = this.backgroundColor.toString()),
                    e.fillRect(0, 0, this.canvasWidth, this.canvasHeight),
                    this.currentScene.draw(this.ctx, t);
                  var i = 0,
                    n = this._animations.length;
                  for (i; i < n; i++)
                    this._animations[i].animation.draw(
                      e,
                      this._animations[i].x,
                      this._animations[i].y
                    );
                  if (this.isDebug) {
                    (this.ctx.font = "Consolas"),
                      (this.ctx.fillStyle = this.debugColor.toString());
                    for (
                      var o = this.input.keyboard.getKeys(), r = 0;
                      r < o.length;
                      r++
                    )
                      this.ctx.fillText(
                        o[r].toString() +
                          " : " +
                          (v.Keys[o[r]] ? v.Keys[o[r]] : "Not Mapped"),
                        100,
                        10 * r + 10
                      );
                    this.ctx.fillText(
                      "FPS:" + this.stats.currFrame.fps.toFixed(2).toString(),
                      10,
                      10
                    );
                  }
                  for (var s = 0; s < this.postProcessors.length; s++)
                    this.postProcessors[s].process(
                      this.ctx.getImageData(
                        0,
                        0,
                        this.canvasWidth,
                        this.canvasHeight
                      ),
                      this.ctx
                    );
                  this.emit("postdraw", new p.PostDrawEvent(e, t, this));
                }),
                (e.prototype.start = function(t) {
                  var i = this;
                  if (!this._compatible) {
                    return new o.Promise().reject(
                      "Excalibur is incompatible with your browser"
                    );
                  }
                  var n;
                  return (
                    t
                      ? ((this._loader = t),
                        this._loader.wireEngine(this),
                        (n = this.load(this._loader)))
                      : (n = o.Promise.resolve()),
                    n.then(function() {
                      i.emit("start", new p.GameStartEvent(i));
                    }),
                    this._hasStarted ||
                      ((this._hasStarted = !0),
                      this._logger.debug("Starting game..."),
                      e.createMainLoop(
                        this,
                        window.requestAnimationFrame,
                        Date.now
                      )(),
                      this._logger.debug("Game started")),
                    n
                  );
                }),
                (e.createMainLoop = function(t, e, i) {
                  var n = i();
                  return function o() {
                    if (t._hasStarted)
                      try {
                        (t._requestId = e(o)),
                          t.emit(
                            "preframe",
                            new p.PreFrameEvent(t, t.stats.prevFrame)
                          );
                        var r = i(),
                          s = Math.floor(r - n) || 1;
                        s > 200 && (s = 1);
                        var a = s * t.timescale,
                          h = t.stats.prevFrame.id + 1;
                        t.stats.prevFrame.reset(t.stats.currFrame),
                          t.stats.currFrame.reset(),
                          (t.stats.currFrame.id = h),
                          (t.stats.currFrame.delta = a),
                          (t.stats.currFrame.fps = 1 / (a / 1e3));
                        var c = i();
                        t._update(a);
                        var l = i();
                        t._draw(a);
                        var u = i();
                        (t.stats.currFrame.duration.update = l - c),
                          (t.stats.currFrame.duration.draw = u - l),
                          (n = r),
                          t.emit(
                            "postframe",
                            new p.PostFrameEvent(t, t.stats.currFrame)
                          );
                      } catch (e) {
                        window.cancelAnimationFrame(t._requestId),
                          t.stop(),
                          t.onFatalException(e);
                      }
                  };
                }),
                (e.prototype.stop = function() {
                  this._hasStarted &&
                    (this.emit("stop", new p.GameStopEvent(this)),
                    (this._hasStarted = !1),
                    this._logger.debug("Game stopped"));
                }),
                (e.prototype.isPaused = function() {
                  return !this._hasStarted;
                }),
                (e.prototype.screenshot = function() {
                  var t = new Image(),
                    e = this.canvas.toDataURL("image/png");
                  return (t.src = e), t;
                }),
                (e.prototype.load = function(t) {
                  var e = this,
                    i = new o.Promise();
                  return (
                    (this._isLoading = !0),
                    t.load().then(function() {
                      setTimeout(function() {
                        (e._isLoading = !1), i.resolve();
                      }, 500);
                    }),
                    i
                  );
                }),
                e
              );
            })(_.Class);
            (P._DefaultEngineOptions = {
              width: 0,
              height: 0,
              canvasElementId: "",
              pointerScope: v.PointerScope.Document,
              suppressConsoleBootMessage: null,
              suppressMinimumBrowserFeatureDetection: null,
              suppressHiDPIScaling: null,
              scrollPreventionMode: x.Canvas,
              backgroundColor: d.Color.fromHex("#2185d0")
            }),
              (e.Engine = P);
            var C = (function() {
              function t(t, e, i) {
                (this.animation = t), (this.x = e), (this.y = i);
              }
              return t;
            })();
          }
        ),
        i(
          "UIActor",
          ["require", "exports", "Algebra", "Actor", "Traits/Index"],
          function(t, e, i, o, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var s = (function(t) {
              function e(e, i, n, s) {
                var a = t.call(this, e, i, n, s) || this;
                return (
                  (a.traits = []),
                  a.traits.push(new r.CapturePointer()),
                  a.anchor.setTo(0, 0),
                  (a.collisionType = o.CollisionType.PreventCollision),
                  (a.enableCapturePointer = !0),
                  a
                );
              }
              return (
                n(e, t),
                (e.prototype.onInitialize = function(t) {
                  this._engine = t;
                }),
                (e.prototype.contains = function(e, n, o) {
                  if ((void 0 === o && (o = !0), o))
                    return t.prototype.contains.call(this, e, n);
                  var r = this._engine.worldToScreenCoordinates(
                    new i.Vector(e, n)
                  );
                  return t.prototype.contains.call(this, r.x, r.y);
                }),
                e
              );
            })(o.Actor);
            e.UIActor = s;
          }
        ),
        i(
          "Util/Actors",
          ["require", "exports", "UIActor", "Label", "Trigger"],
          function(t, e, i, n, o) {
            "use strict";
            function r(t) {
              return !(
                t instanceof i.UIActor ||
                t instanceof o.Trigger ||
                t instanceof n.Label
              );
            }
            function s(t) {
              return t instanceof i.UIActor;
            }
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.isVanillaActor = r),
              (e.isUIActor = s);
          }
        ),
        i(
          "Scene",
          [
            "require",
            "exports",
            "UIActor",
            "Physics",
            "Events",
            "Util/Log",
            "Timer",
            "Collision/DynamicTreeCollisionBroadphase",
            "Util/SortedList",
            "Group",
            "TileMap",
            "Camera",
            "Actor",
            "Class",
            "Util/Util",
            "Util/Actors",
            "Trigger"
          ],
          function(t, e, i, o, r, s, a, h, c, l, u, p, f, d, g, y, _) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var v = (function(t) {
              function e(e) {
                var i = t.call(this) || this;
                return (
                  (i.actors = []),
                  (i.triggers = []),
                  (i.tileMaps = []),
                  (i.groups = {}),
                  (i.uiActors = []),
                  (i._isInitialized = !1),
                  (i._sortedDrawingTree = new c.SortedList(
                    f.Actor.prototype.getZIndex
                  )),
                  (i._broadphase = new h.DynamicTreeCollisionBroadphase()),
                  (i._killQueue = []),
                  (i._triggerKillQueue = []),
                  (i._timers = []),
                  (i._cancelQueue = []),
                  (i._logger = s.Logger.getInstance()),
                  (i.camera = new p.BaseCamera()),
                  e &&
                    ((i.camera.x = e.halfDrawWidth),
                    (i.camera.y = e.halfDrawHeight)),
                  i
                );
              }
              return (
                n(e, t),
                (e.prototype.on = function(e, i) {
                  t.prototype.on.call(this, e, i);
                }),
                (e.prototype.onInitialize = function(t) {
                  this.camera &&
                    ((this.camera.x = t.halfDrawWidth),
                    (this.camera.y = t.halfDrawHeight)),
                    this._logger.debug("Scene.onInitialize", this, t);
                }),
                (e.prototype.onActivate = function() {
                  this._logger.debug("Scene.onActivate", this);
                }),
                (e.prototype.onDeactivate = function() {
                  this._logger.debug("Scene.onDeactivate", this);
                }),
                (e.prototype._initializeChildren = function() {
                  for (var t = 0, e = this.actors; t < e.length; t++) {
                    e[t]._initialize(this.engine);
                  }
                }),
                Object.defineProperty(e.prototype, "isInitialized", {
                  get: function() {
                    return this._isInitialized;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype._initialize = function(t) {
                  this.isInitialized ||
                    (this.onInitialize.call(this, t),
                    this.eventDispatcher.emit(
                      "initialize",
                      new r.InitializeEvent(t, this)
                    ),
                    this._initializeChildren(),
                    (this._isInitialized = !0));
                }),
                (e.prototype.update = function(t, e) {
                  this.emit("preupdate", new r.PreUpdateEvent(t, e, this));
                  var i, n;
                  for (i = 0, n = this._cancelQueue.length; i < n; i++)
                    this.removeTimer(this._cancelQueue[i]);
                  this._cancelQueue.length = 0;
                  for (var s = 0, a = this._timers; s < a.length; s++) {
                    a[s].update(e);
                  }
                  for (i = 0, n = this.uiActors.length; i < n; i++)
                    this.uiActors[i].update(t, e);
                  for (i = 0, n = this.tileMaps.length; i < n; i++)
                    this.tileMaps[i].update(t, e);
                  for (i = 0, n = this.actors.length; i < n; i++)
                    this.actors[i].update(t, e);
                  for (i = 0, n = this.triggers.length; i < n; i++)
                    this.triggers[i].update(t, e);
                  if (
                    (this._collectActorStats(t),
                    this._broadphase && o.Physics.enabled)
                  ) {
                    var h = Date.now();
                    this._broadphase.update(this.actors, e);
                    for (
                      var c = this._broadphase.broadphase(
                          this.actors,
                          e,
                          t.stats.currFrame
                        ),
                        l = Date.now(),
                        u = Date.now(),
                        p = o.Physics.collisionPasses,
                        f = e / p;
                      p > 0;

                    )
                      (c = this._broadphase.narrowphase(c, t.stats.currFrame)),
                        (c = this._broadphase.resolve(
                          c,
                          f,
                          o.Physics.collisionResolutionStrategy
                        )),
                        this._broadphase.runCollisionStartEnd(c),
                        p--;
                    var d = Date.now();
                    (t.stats.currFrame.physics.broadphase = l - h),
                      (t.stats.currFrame.physics.narrowphase = d - u);
                  }
                  (t.stats.currFrame.actors.killed =
                    this._killQueue.length + this._triggerKillQueue.length),
                    this._processKillQueue(this._killQueue, this.actors),
                    this._processKillQueue(
                      this._triggerKillQueue,
                      this.triggers
                    ),
                    this.camera && this.camera.update(t, e),
                    this.emit("postupdate", new r.PostUpdateEvent(t, e, this));
                }),
                (e.prototype._processKillQueue = function(t, e) {
                  for (var i, n = 0, o = t; n < o.length; n++) {
                    var r = o[n];
                    (i = e.indexOf(r)),
                      i > -1 &&
                        (this._sortedDrawingTree.removeByComparable(r),
                        e.splice(i, 1));
                  }
                  t.length = 0;
                }),
                (e.prototype.draw = function(t, e) {
                  this.emit("predraw", new r.PreDrawEvent(t, e, this)),
                    t.save(),
                    this.camera && this.camera.draw(t);
                  var i, n;
                  for (i = 0, n = this.tileMaps.length; i < n; i++)
                    this.tileMaps[i].draw(t, e);
                  var o = this._sortedDrawingTree.list();
                  for (i = 0, n = o.length; i < n; i++)
                    o[i].visible && !o[i].isOffScreen && o[i].draw(t, e);
                  for (
                    this.engine &&
                      this.engine.isDebug &&
                      ((t.strokeStyle = "yellow"), this.debugDraw(t)),
                      t.restore(),
                      i = 0,
                      n = this.uiActors.length;
                    i < n;
                    i++
                  )
                    this.uiActors[i].visible && this.uiActors[i].draw(t, e);
                  if (this.engine && this.engine.isDebug)
                    for (i = 0, n = this.uiActors.length; i < n; i++)
                      this.uiActors[i].debugDraw(t);
                  this.emit("postdraw", new r.PostDrawEvent(t, e, this));
                }),
                (e.prototype.debugDraw = function(t) {
                  this.emit("predebugdraw", new r.PreDebugDrawEvent(t, this));
                  var e, i;
                  for (e = 0, i = this.tileMaps.length; e < i; e++)
                    this.tileMaps[e].debugDraw(t);
                  for (e = 0, i = this.actors.length; e < i; e++)
                    this.actors[e].debugDraw(t);
                  for (e = 0, i = this.triggers.length; e < i; e++)
                    this.triggers[e].debugDraw(t);
                  this._broadphase.debugDraw(t, 20),
                    this.camera.debugDraw(t),
                    this.emit(
                      "postdebugdraw",
                      new r.PostDebugDrawEvent(t, this)
                    );
                }),
                (e.prototype.contains = function(t) {
                  return this.actors.indexOf(t) > -1;
                }),
                (e.prototype.add = function(t) {
                  return (
                    t instanceof f.Actor && t.unkill(),
                    t instanceof i.UIActor
                      ? void (
                          g.contains(this.uiActors, t) || this.addUIActor(t)
                        )
                      : t instanceof f.Actor
                        ? void (g.contains(this.actors, t) || this._addChild(t))
                        : t instanceof a.Timer
                          ? void (
                              g.contains(this._timers, t) || this.addTimer(t)
                            )
                          : void (
                              t instanceof u.TileMap &&
                              (g.contains(this.tileMaps, t) ||
                                this.addTileMap(t))
                            )
                  );
                }),
                (e.prototype.remove = function(t) {
                  if (t instanceof i.UIActor) return void this.removeUIActor(t);
                  t instanceof f.Actor &&
                    (this._broadphase.untrack(t.body), this._removeChild(t)),
                    t instanceof a.Timer && this.removeTimer(t),
                    t instanceof u.TileMap && this.removeTileMap(t);
                }),
                (e.prototype.addUIActor = function(t) {
                  this.uiActors.push(t), (t.scene = this);
                }),
                (e.prototype.removeUIActor = function(t) {
                  var e = this.uiActors.indexOf(t);
                  e > -1 && this.uiActors.splice(e, 1);
                }),
                (e.prototype._addChild = function(t) {
                  this._broadphase.track(t.body),
                    (t.scene = this),
                    t instanceof _.Trigger
                      ? this.triggers.push(t)
                      : this.actors.push(t),
                    this._sortedDrawingTree.add(t);
                }),
                (e.prototype.addTileMap = function(t) {
                  this.tileMaps.push(t);
                }),
                (e.prototype.removeTileMap = function(t) {
                  var e = this.tileMaps.indexOf(t);
                  e > -1 && this.tileMaps.splice(e, 1);
                }),
                (e.prototype._removeChild = function(t) {
                  this._broadphase.untrack(t.body),
                    t instanceof _.Trigger
                      ? this._triggerKillQueue.push(t)
                      : this._killQueue.push(t),
                    (t.parent = null);
                }),
                (e.prototype.addTimer = function(t) {
                  return this._timers.push(t), (t.scene = this), t;
                }),
                (e.prototype.removeTimer = function(t) {
                  var e = this._timers.indexOf(t);
                  return -1 !== e && this._timers.splice(e, 1), t;
                }),
                (e.prototype.cancelTimer = function(t) {
                  return this._cancelQueue.push(t), t;
                }),
                (e.prototype.isTimerActive = function(t) {
                  return this._timers.indexOf(t) > -1 && !t.complete;
                }),
                (e.prototype.createGroup = function(t) {
                  return new l.Group(t, this);
                }),
                (e.prototype.getGroup = function(t) {
                  return this.groups[t];
                }),
                (e.prototype.removeGroup = function(t) {
                  "string" == typeof t
                    ? delete this.groups[t]
                    : t instanceof l.Group
                      ? delete this.groups[t.name]
                      : this._logger.error(
                          "Invalid arguments to removeGroup",
                          t
                        );
                }),
                (e.prototype.cleanupDrawTree = function(t) {
                  this._sortedDrawingTree.removeByComparable(t);
                }),
                (e.prototype.updateDrawTree = function(t) {
                  this._sortedDrawingTree.add(t);
                }),
                (e.prototype._collectActorStats = function(t) {
                  for (var e = 0, i = this.uiActors; e < i.length; e++) {
                    i[e];
                    t.stats.currFrame.actors.ui++;
                  }
                  for (var n = 0, o = this.actors; n < o.length; n++) {
                    var r = o[n];
                    t.stats.currFrame.actors.alive++;
                    for (var s = 0, a = r.children; s < a.length; s++) {
                      var h = a[s];
                      y.isUIActor(h)
                        ? t.stats.currFrame.actors.ui++
                        : t.stats.currFrame.actors.alive++;
                    }
                  }
                }),
                e
              );
            })(d.Class);
            e.Scene = v;
          }
        ),
        i("Events", ["require", "exports"], function(t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function() {
            function t() {}
            return t;
          })();
          e.GameEvent = i;
          var o = (function(t) {
            function e(e) {
              var i = t.call(this) || this;
              return (i.target = e), i;
            }
            return n(e, t), e;
          })(i);
          e.KillEvent = o;
          var r = (function(t) {
            function e(e) {
              var i = t.call(this) || this;
              return (i.target = e), i;
            }
            return n(e, t), e;
          })(i);
          e.GameStartEvent = r;
          var s = (function(t) {
            function e(e) {
              var i = t.call(this) || this;
              return (i.target = e), i;
            }
            return n(e, t), e;
          })(i);
          e.GameStopEvent = s;
          var a = (function(t) {
            function e(e, i, n) {
              var o = t.call(this) || this;
              return (o.ctx = e), (o.delta = i), (o.target = n), o;
            }
            return n(e, t), e;
          })(i);
          e.PreDrawEvent = a;
          var h = (function(t) {
            function e(e, i, n) {
              var o = t.call(this) || this;
              return (o.ctx = e), (o.delta = i), (o.target = n), o;
            }
            return n(e, t), e;
          })(i);
          e.PostDrawEvent = h;
          var c = (function(t) {
            function e(e, i) {
              var n = t.call(this) || this;
              return (n.ctx = e), (n.target = i), n;
            }
            return n(e, t), e;
          })(i);
          e.PreDebugDrawEvent = c;
          var l = (function(t) {
            function e(e, i) {
              var n = t.call(this) || this;
              return (n.ctx = e), (n.target = i), n;
            }
            return n(e, t), e;
          })(i);
          e.PostDebugDrawEvent = l;
          var u = (function(t) {
            function e(e, i, n) {
              var o = t.call(this) || this;
              return (o.engine = e), (o.delta = i), (o.target = n), o;
            }
            return n(e, t), e;
          })(i);
          e.PreUpdateEvent = u;
          var p = (function(t) {
            function e(e, i, n) {
              var o = t.call(this) || this;
              return (o.engine = e), (o.delta = i), (o.target = n), o;
            }
            return n(e, t), e;
          })(i);
          e.PostUpdateEvent = p;
          var f = (function(t) {
            function e(e, i) {
              var n = t.call(this) || this;
              return (n.engine = e), (n.prevStats = i), (n.target = e), n;
            }
            return n(e, t), e;
          })(i);
          e.PreFrameEvent = f;
          var d = (function(t) {
            function e(e, i) {
              var n = t.call(this) || this;
              return (n.engine = e), (n.stats = i), (n.target = e), n;
            }
            return n(e, t), e;
          })(i);
          e.PostFrameEvent = d;
          var g = (function(t) {
            function e(e, i) {
              var n = t.call(this) || this;
              return (n.index = e), (n.gamepad = i), (n.target = i), n;
            }
            return n(e, t), e;
          })(i);
          e.GamepadConnectEvent = g;
          var y = (function(t) {
            function e(e, i) {
              var n = t.call(this) || this;
              return (n.index = e), (n.gamepad = i), (n.target = i), n;
            }
            return n(e, t), e;
          })(i);
          e.GamepadDisconnectEvent = y;
          var _ = (function(t) {
            function e(e, i, n) {
              var o = t.call(this) || this;
              return (o.button = e), (o.value = i), (o.target = n), o;
            }
            return n(e, t), e;
          })(i);
          e.GamepadButtonEvent = _;
          var v = (function(t) {
            function e(e, i, n) {
              var o = t.call(this) || this;
              return (o.axis = e), (o.value = i), (o.target = n), o;
            }
            return n(e, t), e;
          })(i);
          e.GamepadAxisEvent = v;
          var m = (function(t) {
            function e(e, i) {
              var n = t.call(this) || this;
              return (n.topic = e), (n.handler = i), n;
            }
            return n(e, t), e;
          })(i);
          e.SubscribeEvent = m;
          var b = (function(t) {
            function e(e, i) {
              var n = t.call(this) || this;
              return (n.topic = e), (n.handler = i), n;
            }
            return n(e, t), e;
          })(i);
          e.UnsubscribeEvent = b;
          var w = (function(t) {
            function e(e) {
              var i = t.call(this) || this;
              return (i.target = e), i;
            }
            return n(e, t), e;
          })(i);
          e.VisibleEvent = w;
          var x = (function(t) {
            function e(e) {
              var i = t.call(this) || this;
              return (i.target = e), i;
            }
            return n(e, t), e;
          })(i);
          e.HiddenEvent = x;
          var P = (function(t) {
            function e(e, i, n, o) {
              var r = t.call(this) || this;
              return (
                (r.actor = e),
                (r.other = i),
                (r.side = n),
                (r.intersection = o),
                (r.target = e),
                r
              );
            }
            return n(e, t), e;
          })(i);
          e.PreCollisionEvent = P;
          var C = (function(t) {
            function e(e, i, n, o) {
              var r = t.call(this) || this;
              return (
                (r.actor = e),
                (r.other = i),
                (r.side = n),
                (r.intersection = o),
                (r.target = e),
                r
              );
            }
            return n(e, t), e;
          })(i);
          e.PostCollisionEvent = C;
          var A = (function(t) {
            function e(e, i, n) {
              var o = t.call(this) || this;
              return (
                (o.actor = e), (o.other = i), (o.pair = n), (o.target = e), o
              );
            }
            return n(e, t), e;
          })(i);
          e.CollisionStartEvent = A;
          var S = (function(t) {
            function e(e, i) {
              var n = t.call(this) || this;
              return (n.actor = e), (n.other = i), (n.target = e), n;
            }
            return n(e, t), e;
          })(i);
          e.CollisionEndEvent = S;
          var E = (function(t) {
            function e(e, i) {
              var n = t.call(this) || this;
              return (n.engine = e), (n.target = i), n;
            }
            return n(e, t), e;
          })(i);
          e.InitializeEvent = E;
          var T = (function(t) {
            function e(e, i) {
              var n = t.call(this) || this;
              return (n.oldScene = e), (n.target = i), n;
            }
            return n(e, t), e;
          })(i);
          e.ActivateEvent = T;
          var M = (function(t) {
            function e(e, i) {
              var n = t.call(this) || this;
              return (n.newScene = e), (n.target = i), n;
            }
            return n(e, t), e;
          })(i);
          e.DeactivateEvent = M;
          var O = (function(t) {
            function e(e) {
              var i = t.call(this) || this;
              return (i.target = e), i;
            }
            return n(e, t), e;
          })(i);
          e.ExitViewPortEvent = O;
          var R = (function(t) {
            function e(e) {
              var i = t.call(this) || this;
              return (i.target = e), i;
            }
            return n(e, t), e;
          })(i);
          e.EnterViewPortEvent = R;
          var D = (function(t) {
            function e(e, i) {
              var n = t.call(this) || this;
              return (n.target = e), (n.actor = i), n;
            }
            return n(e, t), e;
          })(i);
          e.EnterTriggerEvent = D;
          var I = (function(t) {
            function e(e, i) {
              var n = t.call(this) || this;
              return (n.target = e), (n.actor = i), n;
            }
            return n(e, t), e;
          })(i);
          e.ExitTriggerEvent = I;
        }),
        i("Class", ["require", "exports", "EventDispatcher"], function(
          t,
          e,
          i
        ) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n = (function() {
            function t() {
              this.eventDispatcher = new i.EventDispatcher(this);
            }
            return (
              (t.prototype.on = function(t, e) {
                this.eventDispatcher.on(t, e);
              }),
              (t.prototype.off = function(t, e) {
                this.eventDispatcher.off(t, e);
              }),
              (t.prototype.emit = function(t, e) {
                this.eventDispatcher.emit(t, e);
              }),
              (t.prototype.once = function(t, e) {
                this.eventDispatcher.once(t, e);
              }),
              (t.extend = function(e) {
                var i,
                  n = this;
                i =
                  e && e.hasOwnProperty("constructor")
                    ? e.constructor
                    : function() {
                        return n.apply(this, arguments);
                      };
                var o = function() {
                  this.constructor = i;
                };
                if (((o.prototype = n.prototype), (i.prototype = new o()), e))
                  for (var r in e)
                    e.hasOwnProperty(r) && (i.prototype[r] = e[r]);
                return (i.extend = t.extend), i;
              }),
              t
            );
          })();
          e.Class = n;
        }),
        i(
          "Actor",
          [
            "require",
            "exports",
            "Physics",
            "Class",
            "Collision/BoundingBox",
            "Resources/Texture",
            "Events",
            "Drawing/Color",
            "Drawing/Sprite",
            "Util/Log",
            "Actions/ActionContext",
            "Actions/Action",
            "Algebra",
            "Collision/Body",
            "Collision/Side",
            "Traits/Index",
            "Drawing/SpriteEffects",
            "Util/Util"
          ],
          function(t, e, i, o, r, s, a, h, c, l, u, p, f, d, g, y, _, v) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var m = (function(t) {
              function e(i, n, o, r, s) {
                var a = t.call(this) || this;
                return (
                  (a.id = e.maxId++),
                  (a.body = new d.Body(a)),
                  (a._height = 0),
                  (a._width = 0),
                  (a.scale = new f.Vector(1, 1)),
                  (a.sx = 0),
                  (a.sy = 0),
                  (a.isOffScreen = !1),
                  (a.visible = !0),
                  (a.opacity = 1),
                  (a.previousOpacity = 1),
                  (a.logger = l.Logger.getInstance()),
                  (a.scene = null),
                  (a.parent = null),
                  (a.children = []),
                  (a.collisionType = b.PreventCollision),
                  (a.collisionGroups = []),
                  (a._collisionHandlers = {}),
                  (a._isInitialized = !1),
                  (a.frames = {}),
                  (a._effectsDirty = !1),
                  (a.currentDrawing = null),
                  (a.traits = []),
                  (a.enableCapturePointer = !1),
                  (a.capturePointer = { captureMoveEvents: !1 }),
                  (a._zIndex = 0),
                  (a._isKilled = !1),
                  (a._opacityFx = new _.Opacity(a.opacity)),
                  (a.pos.x = i || 0),
                  (a.pos.y = n || 0),
                  (a._width = o || 0),
                  (a._height = r || 0),
                  s && ((a.color = s), (a.opacity = s.a)),
                  a.traits.push(new y.TileMapCollisionDetection()),
                  a.traits.push(new y.OffscreenCulling()),
                  a.traits.push(new y.CapturePointer()),
                  (a.actionQueue = new p.ActionQueue(a)),
                  (a.actions = new u.ActionContext(a)),
                  (a.anchor = new f.Vector(0.5, 0.5)),
                  a.body.useBoxCollision(),
                  a
                );
              }
              return (
                n(e, t),
                Object.defineProperty(e.prototype, "collisionArea", {
                  get: function() {
                    return this.body.collisionArea;
                  },
                  set: function(t) {
                    this.body.collisionArea = t;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "x", {
                  get: function() {
                    return this.body.pos.x;
                  },
                  set: function(t) {
                    this.body.pos.x = t;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "y", {
                  get: function() {
                    return this.body.pos.y;
                  },
                  set: function(t) {
                    this.body.pos.y = t;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "pos", {
                  get: function() {
                    return this.body.pos;
                  },
                  set: function(t) {
                    this.body.pos.setTo(t.x, t.y);
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "oldPos", {
                  get: function() {
                    return this.body.oldPos;
                  },
                  set: function(t) {
                    this.body.oldPos.setTo(t.x, t.y);
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "vel", {
                  get: function() {
                    return this.body.vel;
                  },
                  set: function(t) {
                    this.body.vel.setTo(t.x, t.y);
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "oldVel", {
                  get: function() {
                    return this.body.oldVel;
                  },
                  set: function(t) {
                    this.body.oldVel.setTo(t.x, t.y);
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "acc", {
                  get: function() {
                    return this.body.acc;
                  },
                  set: function(t) {
                    this.body.acc.setTo(t.x, t.y);
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "rotation", {
                  get: function() {
                    return this.body.rotation;
                  },
                  set: function(t) {
                    this.body.rotation = t;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "rx", {
                  get: function() {
                    return this.body.rx;
                  },
                  set: function(t) {
                    this.body.rx = t;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "torque", {
                  get: function() {
                    return this.body.torque;
                  },
                  set: function(t) {
                    this.body.torque = t;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "mass", {
                  get: function() {
                    return this.body.mass;
                  },
                  set: function(t) {
                    this.body.mass = t;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "moi", {
                  get: function() {
                    return this.body.moi;
                  },
                  set: function(t) {
                    this.body.moi = t;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "friction", {
                  get: function() {
                    return this.body.friction;
                  },
                  set: function(t) {
                    this.body.friction = t;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "restitution", {
                  get: function() {
                    return this.body.restitution;
                  },
                  set: function(t) {
                    this.body.restitution = t;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "color", {
                  get: function() {
                    return this._color;
                  },
                  set: function(t) {
                    this._color = t.clone();
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.onInitialize = function(t) {}),
                Object.defineProperty(e.prototype, "isInitialized", {
                  get: function() {
                    return this._isInitialized;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype._initialize = function(t) {
                  this.isInitialized ||
                    (this.onInitialize(t),
                    this.eventDispatcher.emit(
                      "initialize",
                      new a.InitializeEvent(t, this)
                    ),
                    (this._isInitialized = !0));
                  for (var e = 0, i = this.children; e < i.length; e++) {
                    i[e]._initialize(t);
                  }
                }),
                (e.prototype._checkForPointerOptIn = function(t) {
                  if (t) {
                    var e = t.toLowerCase();
                    ("pointerup" !== e &&
                      "pointerdown" !== e &&
                      "pointermove" !== e) ||
                      ((this.enableCapturePointer = !0),
                      "pointermove" === e &&
                        (this.capturePointer.captureMoveEvents = !0));
                  }
                }),
                (e.prototype.on = function(t, e) {
                  this._checkForPointerOptIn(t), this.eventDispatcher.on(t, e);
                }),
                (e.prototype.once = function(t, e) {
                  this._checkForPointerOptIn(t),
                    this.eventDispatcher.once(t, e);
                }),
                (e.prototype.kill = function() {
                  this.scene
                    ? (this.emit("kill", new a.KillEvent(this)),
                      this.scene.remove(this),
                      (this._isKilled = !0))
                    : this.logger.warn(
                        "Cannot kill actor, it was never added to the Scene"
                      );
                }),
                (e.prototype.unkill = function() {
                  this._isKilled = !1;
                }),
                (e.prototype.isKilled = function() {
                  return this._isKilled;
                }),
                (e.prototype.add = function(t) {
                  (t.collisionType = b.PreventCollision),
                    v.addItemToArray(t, this.children) && (t.parent = this);
                }),
                (e.prototype.remove = function(t) {
                  v.removeItemFromArray(t, this.children) && (t.parent = null);
                }),
                (e.prototype.setDrawing = function(t) {
                  (t = t.toString()),
                    this.currentDrawing !== this.frames[t] &&
                      (null != this.frames[t]
                        ? (this.frames[t].reset(),
                          (this.currentDrawing = this.frames[t]))
                        : l.Logger.getInstance().error(
                            "the specified drawing key '" +
                              t +
                              "' does not exist"
                          ));
                }),
                (e.prototype.addDrawing = function() {
                  2 === arguments.length
                    ? ((this.frames[arguments[0]] = arguments[1]),
                      this.currentDrawing ||
                        (this.currentDrawing = arguments[1]),
                      (this._effectsDirty = !0))
                    : (arguments[0] instanceof c.Sprite &&
                        this.addDrawing("default", arguments[0]),
                      arguments[0] instanceof s.Texture &&
                        this.addDrawing("default", arguments[0].asSprite()));
                }),
                Object.defineProperty(e.prototype, "z", {
                  get: function() {
                    return this.getZIndex();
                  },
                  set: function(t) {
                    this.setZIndex(t);
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.getZIndex = function() {
                  return this._zIndex;
                }),
                (e.prototype.setZIndex = function(t) {
                  this.scene.cleanupDrawTree(this),
                    (this._zIndex = t),
                    this.scene.updateDrawTree(this);
                }),
                (e.prototype.addCollisionGroup = function(t) {
                  this.collisionGroups.push(t);
                }),
                (e.prototype.removeCollisionGroup = function(t) {
                  var e = this.collisionGroups.indexOf(t);
                  -1 !== e && this.collisionGroups.splice(e, 1);
                }),
                (e.prototype.getCenter = function() {
                  return new f.Vector(
                    this.pos.x +
                      this.getWidth() / 2 -
                      this.anchor.x * this.getWidth(),
                    this.pos.y +
                      this.getHeight() / 2 -
                      this.anchor.y * this.getHeight()
                  );
                }),
                (e.prototype.getWidth = function() {
                  return this._width * this.getGlobalScale().x;
                }),
                (e.prototype.setWidth = function(t) {
                  this._width = t / this.scale.x;
                }),
                (e.prototype.getHeight = function() {
                  return this._height * this.getGlobalScale().y;
                }),
                (e.prototype.setHeight = function(t) {
                  this._height = t / this.scale.y;
                }),
                (e.prototype.getLeft = function() {
                  return this.getBounds().left;
                }),
                (e.prototype.getRight = function() {
                  return this.getBounds().right;
                }),
                (e.prototype.getTop = function() {
                  return this.getBounds().top;
                }),
                (e.prototype.getBottom = function() {
                  return this.getBounds().bottom;
                }),
                (e.prototype.getWorldRotation = function() {
                  return this.parent
                    ? this.rotation + this.parent.getWorldRotation()
                    : this.rotation;
                }),
                (e.prototype.getWorldPos = function() {
                  if (!this.parent) return this.pos.clone();
                  var t = [],
                    e = this;
                  for (t.push(this); e.parent; ) (e = e.parent), t.push(e);
                  var i = t.reduceRight(function(t, e) {
                      return e.parent
                        ? t + e.pos.x * e.getGlobalScale().x
                        : t + e.pos.x;
                    }, 0),
                    n = t.reduceRight(function(t, e) {
                      return e.parent
                        ? t + e.pos.y * e.getGlobalScale().y
                        : t + e.pos.y;
                    }, 0),
                    o = e.getWorldPos(),
                    r = this.getWorldRotation();
                  return new f.Vector(i, n).rotate(r, o);
                }),
                (e.prototype.getGlobalScale = function() {
                  if (!this.parent)
                    return new f.Vector(this.scale.x, this.scale.y);
                  var t = this.parent.getGlobalScale();
                  return new f.Vector(this.scale.x * t.x, this.scale.y * t.y);
                }),
                (e.prototype.getBounds = function() {
                  var t = this._getCalculatedAnchor(),
                    e = this.getWorldPos();
                  return new r.BoundingBox(
                    e.x - t.x,
                    e.y - t.y,
                    e.x + this.getWidth() - t.x,
                    e.y + this.getHeight() - t.y
                  ).rotate(this.rotation, e);
                }),
                (e.prototype.getRelativeBounds = function() {
                  var t = this._getCalculatedAnchor();
                  return new r.BoundingBox(
                    -t.x,
                    -t.y,
                    this.getWidth() - t.x,
                    this.getHeight() - t.y
                  ).rotate(this.rotation);
                }),
                (e.prototype.contains = function(t, e, i) {
                  void 0 === i && (i = !1);
                  var n = this.getBounds().contains(new f.Vector(t, e));
                  return i
                    ? n ||
                        this.children.some(function(i) {
                          return i.contains(t, e, !0);
                        })
                    : n;
                }),
                (e.prototype.getSideFromIntersect = function(t) {
                  return t
                    ? Math.abs(t.x) > Math.abs(t.y)
                      ? t.x < 0 ? g.Side.Right : g.Side.Left
                      : t.y < 0 ? g.Side.Bottom : g.Side.Top
                    : g.Side.None;
                }),
                (e.prototype.collidesWithSide = function(t) {
                  var e = this.collides(t);
                  return e
                    ? Math.abs(e.x) > Math.abs(e.y)
                      ? this.pos.x < t.pos.x ? g.Side.Right : g.Side.Left
                      : this.pos.y < t.pos.y ? g.Side.Bottom : g.Side.Top
                    : g.Side.None;
                }),
                (e.prototype.collides = function(t) {
                  var e = this.getBounds(),
                    i = t.getBounds();
                  return e.collides(i);
                }),
                (e.prototype.onCollidesWith = function(t, e) {
                  this._collisionHandlers[t] ||
                    (this._collisionHandlers[t] = []),
                    this._collisionHandlers[t].push(e);
                }),
                (e.prototype.getCollisionHandlers = function() {
                  return this._collisionHandlers;
                }),
                (e.prototype.removeCollidesWith = function(t) {
                  this._collisionHandlers[t] = [];
                }),
                (e.prototype.within = function(t, e) {
                  return (
                    Math.sqrt(
                      Math.pow(this.pos.x - t.pos.x, 2) +
                        Math.pow(this.pos.y - t.pos.y, 2)
                    ) <= e
                  );
                }),
                (e.prototype._getCalculatedAnchor = function() {
                  return new f.Vector(
                    this.getWidth() * this.anchor.x,
                    this.getHeight() * this.anchor.y
                  );
                }),
                (e.prototype._reapplyEffects = function(t) {
                  t.removeEffect(this._opacityFx), t.addEffect(this._opacityFx);
                }),
                (e.prototype.integrate = function(t) {
                  var e = t / 1e3,
                    n = this.acc.clone();
                  this.collisionType === b.Active && n.addEqual(i.Physics.acc),
                    this.vel.addEqual(n.scale(e)),
                    this.pos
                      .addEqual(this.vel.scale(e))
                      .addEqual(n.scale(0.5 * e * e)),
                    (this.rx += this.torque * (1 / this.moi) * e),
                    (this.rotation += this.rx * e),
                    (this.scale.x += this.sx * t / 1e3),
                    (this.scale.y += this.sy * t / 1e3),
                    this.body.update();
                }),
                (e.prototype.update = function(t, e) {
                  this._initialize(t),
                    this.emit("preupdate", new a.PreUpdateEvent(t, e, this)),
                    this.actionQueue.update(e),
                    this.color && (this.color.a = this.opacity),
                    this.previousOpacity !== this.opacity &&
                      ((this.previousOpacity = this.opacity),
                      (this._opacityFx.opacity = this.opacity),
                      (this._effectsDirty = !0)),
                    this.oldVel.setTo(this.vel.x, this.vel.y),
                    this.oldPos.setTo(this.pos.x, this.pos.y),
                    this.integrate(e);
                  for (var i = 0, n = this.traits; i < n.length; i++) {
                    n[i].update(this, t, e);
                  }
                  for (var o = 0; o < this.children.length; o++)
                    this.children[o].update(t, e);
                  this.emit("postupdate", new a.PostUpdateEvent(t, e, this));
                }),
                (e.prototype.draw = function(t, e) {
                  if (
                    (t.save(),
                    t.translate(this.pos.x, this.pos.y),
                    t.rotate(this.rotation),
                    t.scale(this.scale.x, this.scale.y),
                    t.save(),
                    t.translate(
                      -this._width * this.anchor.x,
                      -this._height * this.anchor.y
                    ),
                    this.emit("predraw", new a.PreDrawEvent(t, e, this)),
                    this.currentDrawing)
                  ) {
                    var i = this.currentDrawing,
                      n =
                        (this._width - i.naturalWidth * i.scale.x) *
                        this.anchor.x,
                      o =
                        (this._height - i.naturalHeight * i.scale.y) *
                        this.anchor.y;
                    this._effectsDirty &&
                      (this._reapplyEffects(this.currentDrawing),
                      (this._effectsDirty = !1)),
                      this.currentDrawing.draw(t, n, o);
                  } else
                    this.color &&
                      ((t.fillStyle = this.color.toString()),
                      t.fillRect(0, 0, this._width, this._height));
                  t.restore();
                  for (var r = 0; r < this.children.length; r++)
                    this.children[r].visible && this.children[r].draw(t, e);
                  this.emit("postdraw", new a.PostDrawEvent(t, e, this)),
                    t.restore();
                }),
                (e.prototype.debugDraw = function(t) {
                  this.emit("predebugdraw", new a.PreDebugDrawEvent(t, this)),
                    this.body.debugDraw(t);
                  var e = this.getBounds();
                  e.debugDraw(t),
                    t.fillText("id: " + this.id, e.left + 3, e.top + 10),
                    (t.fillStyle = h.Color.Yellow.toString()),
                    t.beginPath(),
                    t.arc(
                      this.getWorldPos().x,
                      this.getWorldPos().y,
                      3,
                      0,
                      2 * Math.PI
                    ),
                    t.closePath(),
                    t.fill();
                  for (var i = 0; i < this.traits.length; i++)
                    this.traits[i] instanceof y.OffscreenCulling &&
                      this.traits[i].cullingBox.debugDraw(t);
                  (t.strokeStyle = h.Color.Yellow.toString()), t.beginPath();
                  var n = Math.min(this.getWidth(), this.getHeight());
                  t.arc(
                    this.getWorldPos().x,
                    this.getWorldPos().y,
                    n,
                    0,
                    2 * Math.PI
                  ),
                    t.closePath(),
                    t.stroke();
                  var o = {
                      "0 Pi": 0,
                      "Pi/2": Math.PI / 2,
                      Pi: Math.PI,
                      "3/2 Pi": 3 * Math.PI / 2
                    },
                    r = t.font;
                  for (var s in o)
                    (t.fillStyle = h.Color.Yellow.toString()),
                      (t.font = "14px"),
                      (t.textAlign = "center"),
                      t.fillText(
                        s,
                        this.getWorldPos().x + Math.cos(o[s]) * (n + 10),
                        this.getWorldPos().y + Math.sin(o[s]) * (n + 10)
                      );
                  t.font = r;
                  for (var c = 0; c < this.children.length; c++)
                    this.children[c].debugDraw(t);
                  this.emit("postdebugdraw", new a.PostDebugDrawEvent(t, this));
                }),
                e
              );
            })(o.Class);
            (m.maxId = 0), (e.Actor = m);
            var b;
            !(function(t) {
              (t[(t.PreventCollision = 0)] = "PreventCollision"),
                (t[(t.Passive = 1)] = "Passive"),
                (t[(t.Active = 2)] = "Active"),
                (t[(t.Fixed = 3)] = "Fixed");
            })((b = e.CollisionType || (e.CollisionType = {})));
          }
        ),
        i(
          "Actions/Action",
          [
            "require",
            "exports",
            "Actions/RotationType",
            "Algebra",
            "Util/Log",
            "Util/Util"
          ],
          function(t, e, i, n, o, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var s = (function() {
              function t(t, e, i, o, r) {
                (this.actor = t),
                  (this.easingFcn = r),
                  (this._currentLerpTime = 0),
                  (this._lerpDuration = 1e3),
                  (this._lerpStart = new n.Vector(0, 0)),
                  (this._lerpEnd = new n.Vector(0, 0)),
                  (this._initialized = !1),
                  (this._stopped = !1),
                  (this._distance = 0),
                  (this._lerpDuration = o),
                  (this._lerpEnd = new n.Vector(e, i));
              }
              return (
                (t.prototype._initialize = function() {
                  (this._lerpStart = new n.Vector(
                    this.actor.pos.x,
                    this.actor.pos.y
                  )),
                    (this._currentLerpTime = 0),
                    (this._distance = this._lerpStart.distance(this._lerpEnd));
                }),
                (t.prototype.update = function(t) {
                  this._initialized ||
                    (this._initialize(), (this._initialized = !0));
                  var e = this.actor.pos.x,
                    i = this.actor.pos.y;
                  this._currentLerpTime < this._lerpDuration
                    ? ((e =
                        this._lerpEnd.x < this._lerpStart.x
                          ? this._lerpStart.x -
                            (this.easingFcn(
                              this._currentLerpTime,
                              this._lerpEnd.x,
                              this._lerpStart.x,
                              this._lerpDuration
                            ) -
                              this._lerpEnd.x)
                          : this.easingFcn(
                              this._currentLerpTime,
                              this._lerpStart.x,
                              this._lerpEnd.x,
                              this._lerpDuration
                            )),
                      (i =
                        this._lerpEnd.y < this._lerpStart.y
                          ? this._lerpStart.y -
                            (this.easingFcn(
                              this._currentLerpTime,
                              this._lerpEnd.y,
                              this._lerpStart.y,
                              this._lerpDuration
                            ) -
                              this._lerpEnd.y)
                          : this.easingFcn(
                              this._currentLerpTime,
                              this._lerpStart.y,
                              this._lerpEnd.y,
                              this._lerpDuration
                            )),
                      (this.actor.pos.x = e),
                      (this.actor.pos.y = i),
                      (this._currentLerpTime += t))
                    : ((this.actor.pos.x = this._lerpEnd.x),
                      (this.actor.pos.y = this._lerpEnd.y));
                }),
                (t.prototype.isComplete = function(t) {
                  return (
                    this._stopped ||
                    new n.Vector(t.pos.x, t.pos.y).distance(this._lerpStart) >=
                      this._distance
                  );
                }),
                (t.prototype.reset = function() {
                  this._initialized = !1;
                }),
                (t.prototype.stop = function() {
                  this._stopped = !0;
                }),
                t
              );
            })();
            e.EaseTo = s;
            var a = (function() {
              function t(t, e, i, o) {
                (this._started = !1),
                  (this._stopped = !1),
                  (this._actor = t),
                  (this._end = new n.Vector(e, i)),
                  (this._speed = o);
              }
              return (
                (t.prototype.update = function(t) {
                  this._started ||
                    ((this._started = !0),
                    (this._start = new n.Vector(
                      this._actor.pos.x,
                      this._actor.pos.y
                    )),
                    (this._distance = this._start.distance(this._end)),
                    (this._dir = this._end.sub(this._start).normalize()));
                  var e = this._dir.scale(this._speed);
                  (this._actor.vel.x = e.x),
                    (this._actor.vel.y = e.y),
                    this.isComplete(this._actor) &&
                      ((this._actor.pos.x = this._end.x),
                      (this._actor.pos.y = this._end.y),
                      (this._actor.vel.y = 0),
                      (this._actor.vel.x = 0));
                }),
                (t.prototype.isComplete = function(t) {
                  return (
                    this._stopped ||
                    new n.Vector(t.pos.x, t.pos.y).distance(this._start) >=
                      this._distance
                  );
                }),
                (t.prototype.stop = function() {
                  (this._actor.vel.y = 0),
                    (this._actor.vel.x = 0),
                    (this._stopped = !0);
                }),
                (t.prototype.reset = function() {
                  this._started = !1;
                }),
                t
              );
            })();
            e.MoveTo = a;
            var h = (function() {
              function t(t, e, i, r) {
                if (
                  ((this._started = !1),
                  (this._stopped = !1),
                  (this._actor = t),
                  (this._end = new n.Vector(e, i)),
                  r <= 0)
                )
                  throw (o.Logger.getInstance().error(
                    "Attempted to moveBy time less than or equal to zero : " + r
                  ),
                  new Error("Cannot move in time <= 0"));
                this._time = r;
              }
              return (
                (t.prototype.update = function(t) {
                  this._started ||
                    ((this._started = !0),
                    (this._start = new n.Vector(
                      this._actor.pos.x,
                      this._actor.pos.y
                    )),
                    (this._distance = this._start.distance(this._end)),
                    (this._dir = this._end.sub(this._start).normalize()),
                    (this._speed = this._distance / (this._time / 1e3)));
                  var e = this._dir.scale(this._speed);
                  (this._actor.vel.x = e.x),
                    (this._actor.vel.y = e.y),
                    this.isComplete(this._actor) &&
                      ((this._actor.pos.x = this._end.x),
                      (this._actor.pos.y = this._end.y),
                      (this._actor.vel.y = 0),
                      (this._actor.vel.x = 0));
                }),
                (t.prototype.isComplete = function(t) {
                  return (
                    this._stopped ||
                    new n.Vector(t.pos.x, t.pos.y).distance(this._start) >=
                      this._distance
                  );
                }),
                (t.prototype.stop = function() {
                  (this._actor.vel.y = 0),
                    (this._actor.vel.x = 0),
                    (this._stopped = !0);
                }),
                (t.prototype.reset = function() {
                  this._started = !1;
                }),
                t
              );
            })();
            e.MoveBy = h;
            var c = (function() {
              function t(t, e, i) {
                (this._started = !1),
                  (this._stopped = !1),
                  (this._actor = t),
                  (this._actorToFollow = e),
                  (this._current = new n.Vector(
                    this._actor.pos.x,
                    this._actor.pos.y
                  )),
                  (this._end = new n.Vector(e.pos.x, e.pos.y)),
                  (this._maximumDistance =
                    void 0 !== i ? i : this._current.distance(this._end)),
                  (this._speed = 0);
              }
              return (
                (t.prototype.update = function(t) {
                  this._started ||
                    ((this._started = !0),
                    (this._distanceBetween = this._current.distance(this._end)),
                    (this._dir = this._end.sub(this._current).normalize()));
                  var e = Math.sqrt(
                    Math.pow(this._actorToFollow.vel.x, 2) +
                      Math.pow(this._actorToFollow.vel.y, 2)
                  );
                  if (
                    (0 !== e && (this._speed = e),
                    (this._current.x = this._actor.pos.x),
                    (this._current.y = this._actor.pos.y),
                    (this._end.x = this._actorToFollow.pos.x),
                    (this._end.y = this._actorToFollow.pos.y),
                    (this._distanceBetween = this._current.distance(this._end)),
                    (this._dir = this._end.sub(this._current).normalize()),
                    this._distanceBetween >= this._maximumDistance)
                  ) {
                    var i = this._dir.scale(this._speed);
                    (this._actor.vel.x = i.x), (this._actor.vel.y = i.y);
                  } else (this._actor.vel.x = 0), (this._actor.vel.y = 0);
                  this.isComplete() &&
                    ((this._actor.pos.x = this._end.x),
                    (this._actor.pos.y = this._end.y),
                    (this._actor.vel.y = 0),
                    (this._actor.vel.x = 0));
                }),
                (t.prototype.stop = function() {
                  (this._actor.vel.y = 0),
                    (this._actor.vel.x = 0),
                    (this._stopped = !0);
                }),
                (t.prototype.isComplete = function() {
                  return this._stopped;
                }),
                (t.prototype.reset = function() {
                  this._started = !1;
                }),
                t
              );
            })();
            e.Follow = c;
            var l = (function() {
              function t(t, e, i) {
                (this._started = !1),
                  (this._stopped = !1),
                  (this._speedWasSpecified = !1),
                  (this._actor = t),
                  (this._actorToMeet = e),
                  (this._current = new n.Vector(
                    this._actor.pos.x,
                    this._actor.pos.y
                  )),
                  (this._end = new n.Vector(e.pos.x, e.pos.y)),
                  (this._speed = i || 0),
                  void 0 !== i && (this._speedWasSpecified = !0);
              }
              return (
                (t.prototype.update = function(t) {
                  this._started ||
                    ((this._started = !0),
                    (this._distanceBetween = this._current.distance(this._end)),
                    (this._dir = this._end.sub(this._current).normalize()));
                  var e = Math.sqrt(
                    Math.pow(this._actorToMeet.vel.x, 2) +
                      Math.pow(this._actorToMeet.vel.y, 2)
                  );
                  0 === e || this._speedWasSpecified || (this._speed = e),
                    (this._current.x = this._actor.pos.x),
                    (this._current.y = this._actor.pos.y),
                    (this._end.x = this._actorToMeet.pos.x),
                    (this._end.y = this._actorToMeet.pos.y),
                    (this._distanceBetween = this._current.distance(this._end)),
                    (this._dir = this._end.sub(this._current).normalize());
                  var i = this._dir.scale(this._speed);
                  (this._actor.vel.x = i.x),
                    (this._actor.vel.y = i.y),
                    this.isComplete() &&
                      ((this._actor.pos.x = this._end.x),
                      (this._actor.pos.y = this._end.y),
                      (this._actor.vel.y = 0),
                      (this._actor.vel.x = 0));
                }),
                (t.prototype.isComplete = function() {
                  return this._stopped || this._distanceBetween <= 1;
                }),
                (t.prototype.stop = function() {
                  (this._actor.vel.y = 0),
                    (this._actor.vel.x = 0),
                    (this._stopped = !0);
                }),
                (t.prototype.reset = function() {
                  this._started = !1;
                }),
                t
              );
            })();
            e.Meet = l;
            var u = (function() {
              function t(t, e, n, o) {
                (this._started = !1),
                  (this._stopped = !1),
                  (this._actor = t),
                  (this._end = e),
                  (this._speed = n),
                  (this._rotationType = o || i.RotationType.ShortestPath);
              }
              return (
                (t.prototype.update = function(t) {
                  if (!this._started) {
                    (this._started = !0), (this._start = this._actor.rotation);
                    var e = Math.abs(this._end - this._start),
                      n = r.TwoPI - e;
                    switch ((e > n
                      ? ((this._shortDistance = n), (this._longDistance = e))
                      : ((this._shortDistance = e), (this._longDistance = n)),
                    (this._shortestPathIsPositive =
                      (this._start - this._end + r.TwoPI) % r.TwoPI >= Math.PI),
                    this._rotationType)) {
                      case i.RotationType.ShortestPath:
                        (this._distance = this._shortDistance),
                          this._shortestPathIsPositive
                            ? (this._direction = 1)
                            : (this._direction = -1);
                        break;
                      case i.RotationType.LongestPath:
                        (this._distance = this._longDistance),
                          this._shortestPathIsPositive
                            ? (this._direction = -1)
                            : (this._direction = 1);
                        break;
                      case i.RotationType.Clockwise:
                        (this._direction = 1),
                          this._shortestPathIsPositive
                            ? (this._distance = this._shortDistance)
                            : (this._distance = this._longDistance);
                        break;
                      case i.RotationType.CounterClockwise:
                        (this._direction = -1),
                          this._shortestPathIsPositive
                            ? (this._distance = this._longDistance)
                            : (this._distance = this._shortDistance);
                    }
                  }
                  (this._actor.rx = this._direction * this._speed),
                    this.isComplete() &&
                      ((this._actor.rotation = this._end),
                      (this._actor.rx = 0),
                      (this._stopped = !0));
                }),
                (t.prototype.isComplete = function() {
                  var t = Math.abs(this._actor.rotation - this._start);
                  return this._stopped || t >= Math.abs(this._distance);
                }),
                (t.prototype.stop = function() {
                  (this._actor.rx = 0), (this._stopped = !0);
                }),
                (t.prototype.reset = function() {
                  this._started = !1;
                }),
                t
              );
            })();
            e.RotateTo = u;
            var p = (function() {
              function t(t, e, n, o) {
                (this._started = !1),
                  (this._stopped = !1),
                  (this._actor = t),
                  (this._end = e),
                  (this._time = n),
                  (this._rotationType = o || i.RotationType.ShortestPath);
              }
              return (
                (t.prototype.update = function(t) {
                  if (!this._started) {
                    (this._started = !0), (this._start = this._actor.rotation);
                    var e = Math.abs(this._end - this._start),
                      n = r.TwoPI - e;
                    switch ((e > n
                      ? ((this._shortDistance = n), (this._longDistance = e))
                      : ((this._shortDistance = e), (this._longDistance = n)),
                    (this._shortestPathIsPositive =
                      (this._start - this._end + r.TwoPI) % r.TwoPI >= Math.PI),
                    this._rotationType)) {
                      case i.RotationType.ShortestPath:
                        (this._distance = this._shortDistance),
                          this._shortestPathIsPositive
                            ? (this._direction = 1)
                            : (this._direction = -1);
                        break;
                      case i.RotationType.LongestPath:
                        (this._distance = this._longDistance),
                          this._shortestPathIsPositive
                            ? (this._direction = -1)
                            : (this._direction = 1);
                        break;
                      case i.RotationType.Clockwise:
                        (this._direction = 1),
                          this._shortDistance >= 0
                            ? (this._distance = this._shortDistance)
                            : (this._distance = this._longDistance);
                        break;
                      case i.RotationType.CounterClockwise:
                        (this._direction = -1),
                          this._shortDistance <= 0
                            ? (this._distance = this._shortDistance)
                            : (this._distance = this._longDistance);
                    }
                    this._speed = Math.abs(this._distance / this._time * 1e3);
                  }
                  (this._actor.rx = this._direction * this._speed),
                    this.isComplete() &&
                      ((this._actor.rotation = this._end),
                      (this._actor.rx = 0),
                      (this._stopped = !0));
                }),
                (t.prototype.isComplete = function() {
                  var t = Math.abs(this._actor.rotation - this._start);
                  return this._stopped || t >= Math.abs(this._distance);
                }),
                (t.prototype.stop = function() {
                  (this._actor.rx = 0), (this._stopped = !0);
                }),
                (t.prototype.reset = function() {
                  this._started = !1;
                }),
                t
              );
            })();
            e.RotateBy = p;
            var f = (function() {
              function t(t, e, i, n, o) {
                (this._started = !1),
                  (this._stopped = !1),
                  (this._actor = t),
                  (this._endX = e),
                  (this._endY = i),
                  (this._speedX = n),
                  (this._speedY = o);
              }
              return (
                (t.prototype.update = function(t) {
                  if (
                    (this._started ||
                      ((this._started = !0),
                      (this._startX = this._actor.scale.x),
                      (this._startY = this._actor.scale.y),
                      (this._distanceX = Math.abs(this._endX - this._startX)),
                      (this._distanceY = Math.abs(this._endY - this._startY))),
                    Math.abs(this._actor.scale.x - this._startX) >=
                      this._distanceX)
                  )
                    this._actor.sx = 0;
                  else {
                    var e = this._endY < this._startY ? -1 : 1;
                    this._actor.sx = this._speedX * e;
                  }
                  if (
                    Math.abs(this._actor.scale.y - this._startY) >=
                    this._distanceY
                  )
                    this._actor.sy = 0;
                  else {
                    var i = this._endY < this._startY ? -1 : 1;
                    this._actor.sy = this._speedY * i;
                  }
                  this.isComplete() &&
                    ((this._actor.scale.x = this._endX),
                    (this._actor.scale.y = this._endY),
                    (this._actor.sx = 0),
                    (this._actor.sy = 0));
                }),
                (t.prototype.isComplete = function() {
                  return (
                    this._stopped ||
                    (Math.abs(this._actor.scale.y - this._startX) >=
                      this._distanceX &&
                      Math.abs(this._actor.scale.y - this._startY) >=
                        this._distanceY)
                  );
                }),
                (t.prototype.stop = function() {
                  (this._actor.sx = 0),
                    (this._actor.sy = 0),
                    (this._stopped = !0);
                }),
                (t.prototype.reset = function() {
                  this._started = !1;
                }),
                t
              );
            })();
            e.ScaleTo = f;
            var d = (function() {
              function t(t, e, i, n) {
                (this._started = !1),
                  (this._stopped = !1),
                  (this._actor = t),
                  (this._endX = e),
                  (this._endY = i),
                  (this._time = n),
                  (this._speedX = (this._endX - this._actor.scale.x) / n * 1e3),
                  (this._speedY = (this._endY - this._actor.scale.y) / n * 1e3);
              }
              return (
                (t.prototype.update = function(t) {
                  this._started ||
                    ((this._started = !0),
                    (this._startX = this._actor.scale.x),
                    (this._startY = this._actor.scale.y),
                    (this._distanceX = Math.abs(this._endX - this._startX)),
                    (this._distanceY = Math.abs(this._endY - this._startY)));
                  var e = this._endX < this._startX ? -1 : 1,
                    i = this._endY < this._startY ? -1 : 1;
                  (this._actor.sx = this._speedX * e),
                    (this._actor.sy = this._speedY * i),
                    this.isComplete() &&
                      ((this._actor.scale.x = this._endX),
                      (this._actor.scale.y = this._endY),
                      (this._actor.sx = 0),
                      (this._actor.sy = 0));
                }),
                (t.prototype.isComplete = function() {
                  return (
                    this._stopped ||
                    (Math.abs(this._actor.scale.x - this._startX) >=
                      this._distanceX &&
                      Math.abs(this._actor.scale.y - this._startY) >=
                        this._distanceY)
                  );
                }),
                (t.prototype.stop = function() {
                  (this._actor.sx = 0),
                    (this._actor.sy = 0),
                    (this._stopped = !0);
                }),
                (t.prototype.reset = function() {
                  this._started = !1;
                }),
                t
              );
            })();
            e.ScaleBy = d;
            var g = (function() {
              function t(t, e) {
                (this._elapsedTime = 0),
                  (this._started = !1),
                  (this._stopped = !1),
                  (this._actor = t),
                  (this._delay = e);
              }
              return (
                (t.prototype.update = function(t) {
                  this._started || (this._started = !0),
                    (this.x = this._actor.pos.x),
                    (this.y = this._actor.pos.y),
                    (this._elapsedTime += t);
                }),
                (t.prototype.isComplete = function() {
                  return this._stopped || this._elapsedTime >= this._delay;
                }),
                (t.prototype.stop = function() {
                  this._stopped = !0;
                }),
                (t.prototype.reset = function() {
                  (this._elapsedTime = 0), (this._started = !1);
                }),
                t
              );
            })();
            e.Delay = g;
            var y = (function() {
              function t(t, e, i, n) {
                void 0 === n && (n = 1),
                  (this._timeVisible = 0),
                  (this._timeNotVisible = 0),
                  (this._elapsedTime = 0),
                  (this._totalTime = 0),
                  (this._stopped = !1),
                  (this._started = !1),
                  (this._actor = t),
                  (this._timeVisible = e),
                  (this._timeNotVisible = i),
                  (this._duration = (e + i) * n);
              }
              return (
                (t.prototype.update = function(t) {
                  this._started || (this._started = !0),
                    (this._elapsedTime += t),
                    (this._totalTime += t),
                    this._actor.visible &&
                      this._elapsedTime >= this._timeVisible &&
                      ((this._actor.visible = !1), (this._elapsedTime = 0)),
                    !this._actor.visible &&
                      this._elapsedTime >= this._timeNotVisible &&
                      ((this._actor.visible = !0), (this._elapsedTime = 0)),
                    this.isComplete() && (this._actor.visible = !0);
                }),
                (t.prototype.isComplete = function() {
                  return this._stopped || this._totalTime >= this._duration;
                }),
                (t.prototype.stop = function() {
                  (this._actor.visible = !0), (this._stopped = !0);
                }),
                (t.prototype.reset = function() {
                  (this._started = !1),
                    (this._elapsedTime = 0),
                    (this._totalTime = 0);
                }),
                t
              );
            })();
            e.Blink = y;
            var _ = (function() {
              function t(t, e, i) {
                (this._multiplier = 1),
                  (this._started = !1),
                  (this._stopped = !1),
                  (this._actor = t),
                  (this._endOpacity = e),
                  (this._speed = i);
              }
              return (
                (t.prototype.update = function(t) {
                  this._started ||
                    ((this._started = !0),
                    this._endOpacity < this._actor.opacity
                      ? (this._multiplier = -1)
                      : (this._multiplier = 1)),
                    this._speed > 0 &&
                      (this._actor.opacity +=
                        this._multiplier *
                        (Math.abs(this._actor.opacity - this._endOpacity) * t) /
                        this._speed),
                    (this._speed -= t),
                    this.isComplete() &&
                      (this._actor.opacity = this._endOpacity),
                    o.Logger.getInstance().debug(
                      "[Action fade] Actor opacity:",
                      this._actor.opacity
                    );
                }),
                (t.prototype.isComplete = function() {
                  return (
                    this._stopped ||
                    Math.abs(this._actor.opacity - this._endOpacity) < 0.05
                  );
                }),
                (t.prototype.stop = function() {
                  this._stopped = !0;
                }),
                (t.prototype.reset = function() {
                  this._started = !1;
                }),
                t
              );
            })();
            e.Fade = _;
            var v = (function() {
              function t(t) {
                (this._stopped = !1), (this._actor = t);
              }
              return (
                (t.prototype.update = function(t) {
                  this._actor.actionQueue.clearActions(),
                    this._actor.kill(),
                    (this._stopped = !0);
                }),
                (t.prototype.isComplete = function() {
                  return this._stopped;
                }),
                (t.prototype.stop = function() {}),
                (t.prototype.reset = function() {}),
                t
              );
            })();
            e.Die = v;
            var m = (function() {
              function t(t, e) {
                (this._method = null),
                  (this._actor = null),
                  (this._hasBeenCalled = !1),
                  (this._actor = t),
                  (this._method = e);
              }
              return (
                (t.prototype.update = function(t) {
                  this._method.call(this._actor), (this._hasBeenCalled = !0);
                }),
                (t.prototype.isComplete = function() {
                  return this._hasBeenCalled;
                }),
                (t.prototype.reset = function() {
                  this._hasBeenCalled = !1;
                }),
                (t.prototype.stop = function() {
                  this._hasBeenCalled = !0;
                }),
                t
              );
            })();
            e.CallMethod = m;
            var b = (function() {
              function t(t, e, i) {
                (this._stopped = !1),
                  (this._actor = t),
                  (this._actionQueue = new x(t)),
                  (this._repeat = e),
                  (this._originalRepeat = e);
                var n = 0,
                  o = i.length;
                for (n; n < o; n++) i[n].reset(), this._actionQueue.add(i[n]);
              }
              return (
                (t.prototype.update = function(t) {
                  (this.x = this._actor.pos.x),
                    (this.y = this._actor.pos.y),
                    this._actionQueue.hasNext() ||
                      (this._actionQueue.reset(), this._repeat--),
                    this._actionQueue.update(t);
                }),
                (t.prototype.isComplete = function() {
                  return this._stopped || this._repeat <= 0;
                }),
                (t.prototype.stop = function() {
                  this._stopped = !0;
                }),
                (t.prototype.reset = function() {
                  this._repeat = this._originalRepeat;
                }),
                t
              );
            })();
            e.Repeat = b;
            var w = (function() {
              function t(t, e) {
                (this._stopped = !1),
                  (this._actor = t),
                  (this._actionQueue = new x(t));
                var i = 0,
                  n = e.length;
                for (i; i < n; i++) e[i].reset(), this._actionQueue.add(e[i]);
              }
              return (
                (t.prototype.update = function(t) {
                  (this.x = this._actor.pos.x),
                    (this.y = this._actor.pos.y),
                    this._stopped ||
                      (this._actionQueue.hasNext() || this._actionQueue.reset(),
                      this._actionQueue.update(t));
                }),
                (t.prototype.isComplete = function() {
                  return this._stopped;
                }),
                (t.prototype.stop = function() {
                  (this._stopped = !0), this._actionQueue.clearActions();
                }),
                (t.prototype.reset = function() {}),
                t
              );
            })();
            e.RepeatForever = w;
            var x = (function() {
              function t(t) {
                (this._actions = []),
                  (this._completedActions = []),
                  (this._actor = t);
              }
              return (
                (t.prototype.add = function(t) {
                  this._actions.push(t);
                }),
                (t.prototype.remove = function(t) {
                  var e = this._actions.indexOf(t);
                  this._actions.splice(e, 1);
                }),
                (t.prototype.clearActions = function() {
                  (this._actions.length = 0),
                    (this._completedActions.length = 0),
                    this._currentAction && this._currentAction.stop();
                }),
                (t.prototype.getActions = function() {
                  return this._actions.concat(this._completedActions);
                }),
                (t.prototype.hasNext = function() {
                  return this._actions.length > 0;
                }),
                (t.prototype.reset = function() {
                  this._actions = this.getActions();
                  var t = 0,
                    e = this._actions.length;
                  for (t; t < e; t++) this._actions[t].reset();
                  this._completedActions = [];
                }),
                (t.prototype.update = function(t) {
                  this._actions.length > 0 &&
                    ((this._currentAction = this._actions[0]),
                    this._currentAction.update(t),
                    this._currentAction.isComplete(this._actor) &&
                      this._completedActions.push(this._actions.shift()));
                }),
                t
              );
            })();
            e.ActionQueue = x;
          }
        ),
        "undefined" == typeof window &&
          (window = { audioContext: function() {} }),
        "undefined" == typeof window ||
          window.requestAnimationFrame ||
          (window.requestAnimationFrame =
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function(t) {
              window.setInterval(t, 1e3 / 60);
            }),
        "undefined" == typeof window ||
          window.cancelAnimationFrame ||
          (window.cancelAnimationFrame =
            window.webkitCancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            function() {}),
        "undefined" == typeof window ||
          window.AudioContext ||
          (window.AudioContext =
            window.AudioContext ||
            window.webkitAudioContext ||
            window.mozAudioContext ||
            window.msAudioContext ||
            window.oAudioContext),
        "undefined" == typeof window ||
          window.devicePixelRatio ||
          (window.devicePixelRatio = window.devicePixelRatio || 1),
        Array.prototype.forEach ||
          (Array.prototype.forEach = function(t, e) {
            var i, n;
            if (null == this)
              throw new TypeError("this is null or not defined");
            var o = Object(this),
              r = o.length >>> 0;
            if ("function" != typeof t)
              throw new TypeError(t + " is not a function");
            for (arguments.length > 1 && (i = e), n = 0; n < r; ) {
              var s;
              n in o && ((s = o[n]), t.call(i, s, n, o)), n++;
            }
          }),
        Array.prototype.some ||
          (Array.prototype.some = function(t) {
            "use strict";
            if (void 0 === this || null === this) throw new TypeError();
            var e = Object(this),
              i = e.length >>> 0;
            if ("function" != typeof t) throw new TypeError();
            for (
              var n = arguments.length >= 2 ? arguments[1] : void 0, o = 0;
              o < i;
              o++
            )
              if (o in e && t.call(n, e[o], o, e)) return !0;
            return !1;
          }),
        Function.prototype.bind ||
          (Function.prototype.bind = function(t) {
            if ("function" != typeof this)
              throw new TypeError(
                "Function.prototype.bind - what is trying to be bound is not callable"
              );
            var e = Array.prototype.slice.call(arguments, 1),
              i = this,
              n = function() {},
              o = function() {
                return i.apply(
                  this instanceof n && t ? this : t,
                  e.concat(Array.prototype.slice.call(arguments))
                );
              };
            return (n.prototype = this.prototype), (o.prototype = new n()), o;
          }),
        e("Index")
      );
    });
  },
  function(t, e, i) {
    "use strict";
    var n = i(51);
    i.d(e, "b", function() {
      return n.a;
    });
    var o = i(52);
    i.d(e, "g", function() {
      return o.a;
    });
    var r = i(53);
    i.d(e, "d", function() {
      return r.a;
    });
    var s = i(54);
    i.d(e, "c", function() {
      return s.a;
    });
    var a = i(55);
    i.d(e, "f", function() {
      return a.a;
    });
    var h = i(56);
    i.d(e, "a", function() {
      return h.a;
    });
    var c = i(57);
    i.d(e, "e", function() {
      return c.a;
    });
  },
  function(t, e, i) {
    "use strict";
    var n = (i(9), i(58));
    i.d(e, "b", function() {
      return n.a;
    });
    var o = i(59);
    i.d(e, "c", function() {
      return o.a;
    });
    var r = i(60);
    i.d(e, "a", function() {
      return r.a;
    });
  },
  function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return n;
    });
    var n,
      o = i(10),
      r = (i.n(o), "ws://localhost:8081");
    !(function(t) {
      function e() {
        h = new o.Client(r);
      }
      function i() {
        return h.id;
      }
      function n() {
        if ((console.log(c), !c)) throw new Error("Not connected to a room!");
        return c;
      }
      function s(t, e) {
        return (
          void 0 === e && (e = {}),
          new Promise(function(i, n) {
            if (((c = h.join(t, e)), console.log(c), !c))
              throw new Error("Could not connect to room!");
            c.onJoin.add(function() {
              return console.log(h.id, "joined", t);
            }),
              c.onData.add(function(t) {
                return console.log(h.id, "received", t);
              }),
              c.onLeave.add(function() {
                return console.log(h.id, "left", t);
              }),
              i(c);
          })
        );
      }
      function a(t) {
        if (!c) throw new Error("Error sending data!");
        c.send(t);
      }
      var h, c;
      (t.connect = e),
        (t.getClientId = i),
        (t.getConnectedRoom = n),
        (t.join = s),
        (t.send = a);
    })(n || (n = {}));
  },
  function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function() {
      function t(t, e, i, n) {
        void 0 === i && (i = !1),
          void 0 === n && (n = 0),
          (this._enabled = !0),
          (this._once = !1),
          (this._priority = 0),
          (this._listener = t),
          (this._once = i),
          (this._signal = e),
          (this._priority = n),
          this.verifyListener(t);
      }
      return (
        (t.prototype.execute0 = function() {
          if (this._enabled) {
            if (
              (this._once && this.remove(), this._params && this._params.length)
            )
              return void this._listener.apply(null, this._params);
            this._listener();
          }
        }),
        (t.prototype.execute1 = function(t) {
          if (this._enabled) {
            if (
              (this._once && this.remove(), this._params && this._params.length)
            )
              return void this._listener.apply(null, [t].concat(this._params));
            this._listener(t);
          }
        }),
        (t.prototype.execute = function(t) {
          if (this._enabled) {
            this._once && this.remove(),
              this._params &&
                this._params.length &&
                (t = t.concat(this._params));
            var e = t.length;
            0 == e
              ? this._listener()
              : 1 == e
                ? this._listener(t[0])
                : 2 == e
                  ? this._listener(t[0], t[1])
                  : 3 == e
                    ? this._listener(t[0], t[1], t[2])
                    : this._listener.apply(null, t);
          }
        }),
        Object.defineProperty(t.prototype, "listener", {
          get: function() {
            return this._listener;
          },
          set: function(t) {
            if (null == t)
              throw new Error(
                "Given listener is null.\nDid you want to set enabled to false instead?"
              );
            this.verifyListener(t), (this._listener = t);
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, "once", {
          get: function() {
            return this._once;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, "priority", {
          get: function() {
            return this._priority;
          },
          enumerable: !0,
          configurable: !0
        }),
        (t.prototype.toString = function() {
          return (
            "[Slot listener: " +
            this._listener +
            ", once: " +
            this._once +
            ", priority: " +
            this._priority +
            ", enabled: " +
            this._enabled +
            "]"
          );
        }),
        Object.defineProperty(t.prototype, "enabled", {
          get: function() {
            return this._enabled;
          },
          set: function(t) {
            this._enabled = t;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, "params", {
          get: function() {
            return this._params;
          },
          set: function(t) {
            this._params = t;
          },
          enumerable: !0,
          configurable: !0
        }),
        (t.prototype.remove = function() {
          this._signal.remove(this._listener);
        }),
        (t.prototype.verifyListener = function(t) {
          if (null == t) throw new Error("Given listener is null.");
          if (null == this._signal)
            throw new Error("Internal signal reference has not been set yet.");
        }),
        t
      );
    })();
    e.Slot = n;
  },
  function(t, e, i) {
    (e.encode = i(25)), (e.decode = i(26));
  },
  function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(14),
      o = i(4),
      r = (function() {
        function t() {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          (this.slots = n.SlotList.NIL),
            (this.valueClasses =
              1 == t.length && t[0] instanceof Array ? t[0] : t);
        }
        return (
          Object.defineProperty(t.prototype, "valueClasses", {
            get: function() {
              return this._valueClasses;
            },
            set: function(t) {
              this._valueClasses = t ? t.slice() : [];
              for (var e = this._valueClasses.length; e--; )
                if (!(this._valueClasses[e] instanceof Object))
                  throw new Error(
                    "Invalid valueClasses argument: item at index " +
                      e +
                      " should be a Class but was:<" +
                      this._valueClasses[e] +
                      ">." +
                      this._valueClasses[e]
                  );
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, "numListeners", {
            get: function() {
              return this.slots.length;
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.prototype.addOnce = function(t) {
            return this.registerListener(t, !0);
          }),
          (t.prototype.remove = function(t) {
            var e = this.slots.find(t);
            return e ? ((this.slots = this.slots.filterNot(t)), e) : null;
          }),
          (t.prototype.removeAll = function() {
            this.slots = n.SlotList.NIL;
          }),
          (t.prototype.dispatch = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            var i = this._valueClasses.length,
              n = t.length;
            if (n < i)
              throw new Error(
                "Incorrect number of arguments. Expected at least " +
                  i +
                  " but received " +
                  n +
                  "."
              );
            for (var o = 0; o < i; o++)
              if (
                !(
                  null === t[o] ||
                  t[o] instanceof this._valueClasses[o] ||
                  t[o].constructor === this._valueClasses[o]
                )
              )
                throw new Error(
                  "Value object <" +
                    t[o] +
                    "> is not an instance of <" +
                    this._valueClasses[o] +
                    ">."
                );
            var r = this.slots;
            if (r.nonEmpty)
              for (; r.nonEmpty; ) r.head.execute(t), (r = r.tail);
          }),
          (t.prototype.registerListener = function(t, e) {
            if ((void 0 === e && (e = !1), this.registrationPossible(t, e))) {
              var i = new o.Slot(t, this, e);
              return (this.slots = this.slots.prepend(i)), i;
            }
            return this.slots.find(t);
          }),
          (t.prototype.registrationPossible = function(t, e) {
            if (!this.slots.nonEmpty) return !0;
            var i = this.slots.find(t);
            if (!i) return !0;
            if (i.once != e)
              throw new Error(
                "You cannot addOnce() then add() the same listener without removing the relationship first."
              );
            return !1;
          }),
          t
        );
      })();
    e.OnceSignal = r;
  },
  function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    !(function(t) {
      (t[(t.USER_ID = 1)] = "USER_ID"),
        (t[(t.JOIN_ROOM = 10)] = "JOIN_ROOM"),
        (t[(t.JOIN_ERROR = 11)] = "JOIN_ERROR"),
        (t[(t.LEAVE_ROOM = 12)] = "LEAVE_ROOM"),
        (t[(t.ROOM_DATA = 13)] = "ROOM_DATA"),
        (t[(t.ROOM_STATE = 14)] = "ROOM_STATE"),
        (t[(t.ROOM_STATE_PATCH = 15)] = "ROOM_STATE_PATCH"),
        (t[(t.BAD_REQUEST = 50)] = "BAD_REQUEST");
    })(e.Protocol || (e.Protocol = {}));
  },
  function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return c;
    });
    var n = i(0),
      o = (i.n(n), i(17)),
      r = i.n(o),
      s = i(18),
      a = (new r.a(s, o.TiledMapFormat.JSON), i(19), i(20)),
      h = i(21),
      c = {
        map: new r.a(s, o.TiledMapFormat.JSON),
        playerRun: new n.Texture(a),
        playerJump: new n.Texture(h)
      };
  },
  function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return r;
    });
    var n = i(0),
      o = (i.n(n),
      (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
          return function(e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })()),
      r = (function(t) {
        function e(e, i) {
          return t.call(this, e, i) || this;
        }
        return o(e, t), e;
      })(n.UIActor);
  },
  function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(24);
    e.Client = n.Client;
    var o = i(7);
    e.Protocol = o.Protocol;
    var r = i(15);
    e.Room = r.Room;
    var s = i(16);
    (e.initializeSync = s.initializeSync),
      (e.sync = s.sync),
      (e.syncMap = s.syncMap),
      (e.syncObject = s.syncObject),
      (e.syncVar = s.syncVar),
      (e.syncList = s.syncList),
      (e.key = s.key),
      (e.room = s.room),
      (e.listen = s.listen);
  },
  function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(27);
    e.DeluxeSignal = n.DeluxeSignal;
    var o = i(28);
    e.GenericEvent = o.GenericEvent;
    var r = i(29);
    e.IOnceSignal = r.IOnceSignal;
    var s = i(30);
    e.IPrioritySignal = s.IPrioritySignal;
    var a = i(31);
    e.ISignal = a.ISignal;
    var h = i(32);
    e.ISlot = h.ISlot;
    var c = i(33);
    e.MonoSignal = c.MonoSignal;
    var l = i(6);
    e.OnceSignal = l.OnceSignal;
    var u = i(12);
    e.PrioritySignal = u.PrioritySignal;
    var p = i(34);
    e.Promise = p.Promise;
    var f = i(13);
    e.Signal = f.Signal;
    var d = i(4);
    e.Slot = d.Slot;
    var g = i(14);
    e.SlotList = g.SlotList;
  },
  function(t, e, i) {
    "use strict";
    var n =
      (this && this.__extends) ||
      (function() {
        var t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(t, e) {
              t.__proto__ = e;
            }) ||
          function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
          };
        return function(e, i) {
          function n() {
            this.constructor = e;
          }
          t(e, i),
            (e.prototype =
              null === i
                ? Object.create(i)
                : ((n.prototype = i.prototype), new n()));
        };
      })();
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(13),
      r = i(4),
      s = (function(t) {
        function e() {
          for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
          return (
            (e = 1 == e.length && e[0] instanceof Array ? e[0] : e),
            t.call(this, e) || this
          );
        }
        return (
          n(e, t),
          (e.prototype.addWithPriority = function(t, e) {
            return (
              void 0 === e && (e = 0),
              this.registerListenerWithPriority(t, !1, e)
            );
          }),
          (e.prototype.addOnceWithPriority = function(t, e) {
            return (
              void 0 === e && (e = 0),
              this.registerListenerWithPriority(t, !0, e)
            );
          }),
          (e.prototype.registerListener = function(t, e) {
            return (
              void 0 === e && (e = !1), this.registerListenerWithPriority(t, e)
            );
          }),
          (e.prototype.registerListenerWithPriority = function(t, e, i) {
            if (
              (void 0 === e && (e = !1),
              void 0 === i && (i = 0),
              this.registrationPossible(t, e))
            ) {
              var n = new r.Slot(t, this, e, i);
              return (this.slots = this.slots.insertWithPriority(n)), n;
            }
            return this.slots.find(t);
          }),
          e
        );
      })(o.Signal);
    e.PrioritySignal = s;
  },
  function(t, e, i) {
    "use strict";
    var n =
      (this && this.__extends) ||
      (function() {
        var t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(t, e) {
              t.__proto__ = e;
            }) ||
          function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
          };
        return function(e, i) {
          function n() {
            this.constructor = e;
          }
          t(e, i),
            (e.prototype =
              null === i
                ? Object.create(i)
                : ((n.prototype = i.prototype), new n()));
        };
      })();
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(6),
      r = (function(t) {
        function e() {
          for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
          return (
            (e = 1 == e.length && e[0] instanceof Array ? e[0] : e),
            t.call(this, e) || this
          );
        }
        return (
          n(e, t),
          (e.prototype.add = function(t) {
            return this.registerListener(t);
          }),
          e
        );
      })(o.OnceSignal);
    e.Signal = r;
  },
  function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function() {
      function t(e, i) {
        if ((void 0 === i && (i = null), (this.nonEmpty = !1), e || i)) {
          if (!e) throw new Error("Parameter head cannot be null.");
          (this.head = e), (this.tail = i || t.NIL), (this.nonEmpty = !0);
        } else {
          if (t.NIL)
            throw new Error(
              "Parameters head and tail are null. Use the NIL element instead."
            );
          this.nonEmpty = !1;
        }
      }
      return (
        Object.defineProperty(t.prototype, "length", {
          get: function() {
            if (!this.nonEmpty) return 0;
            if (this.tail == t.NIL) return 1;
            for (var e = 0, i = this; i.nonEmpty; ) ++e, (i = i.tail);
            return e;
          },
          enumerable: !0,
          configurable: !0
        }),
        (t.prototype.prepend = function(e) {
          return new t(e, this);
        }),
        (t.prototype.append = function(e) {
          if (!e) return this;
          if (!this.nonEmpty) return new t(e);
          if (this.tail == t.NIL) return new t(e).prepend(this.head);
          for (var i = new t(this.head), n = i, o = this.tail; o.nonEmpty; )
            (n = n.tail = new t(o.head)), (o = o.tail);
          return (n.tail = new t(e)), i;
        }),
        (t.prototype.insertWithPriority = function(e) {
          if (!this.nonEmpty) return new t(e);
          var i = e.priority;
          if (i > this.head.priority) return this.prepend(e);
          for (var n = new t(this.head), o = n, r = this.tail; r.nonEmpty; ) {
            if (i > r.head.priority) return (o.tail = r.prepend(e)), n;
            (o = o.tail = new t(r.head)), (r = r.tail);
          }
          return (o.tail = new t(e)), n;
        }),
        (t.prototype.filterNot = function(e) {
          if (!this.nonEmpty || null == e) return this;
          if (e == this.head.listener) return this.tail;
          for (var i = new t(this.head), n = i, o = this.tail; o.nonEmpty; ) {
            if (o.head.listener == e) return (n.tail = o.tail), i;
            (n = n.tail = new t(o.head)), (o = o.tail);
          }
          return this;
        }),
        (t.prototype.contains = function(t) {
          if (!this.nonEmpty) return !1;
          for (var e = this; e.nonEmpty; ) {
            if (e.head.listener == t) return !0;
            e = e.tail;
          }
          return !1;
        }),
        (t.prototype.find = function(t) {
          if (!this.nonEmpty) return null;
          for (var e = this; e.nonEmpty; ) {
            if (e.head.listener == t) return e.head;
            e = e.tail;
          }
          return null;
        }),
        (t.prototype.toString = function() {
          for (var t = "", e = this; e.nonEmpty; )
            (t += e.head + " -> "), (e = e.tail);
          return "[List " + (t += "NIL") + "]";
        }),
        (t.NIL = new t(null, null)),
        t
      );
    })();
    e.SlotList = n;
  },
  function(t, e, i) {
    "use strict";
    (function(t) {
      var n =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
          return function(e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })();
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = i(11),
        r = i(40),
        s = i(41),
        a = i(5),
        h = i(44),
        c = i(7),
        l = (function(e) {
          function i(t) {
            var i = e.call(this, {}) || this;
            return (
              (i.clock = new r()),
              (i.remoteClock = new r()),
              (i.onJoin = new o.Signal()),
              (i.onUpdate = new o.Signal()),
              (i.onData = new o.Signal()),
              (i.onError = new o.Signal()),
              (i.onLeave = new o.Signal()),
              (i.id = null),
              (i.name = t),
              i.onLeave.add(function() {
                return i.removeAllListeners();
              }),
              i
            );
          }
          return (
            n(i, e),
            (i.prototype.connect = function(t) {
              var e = this;
              (this.connection = t),
                (this.connection.onmessage = this.onMessageCallback.bind(this)),
                (this.connection.onclose = function(t) {
                  return e.onLeave.dispatch(t);
                });
            }),
            (i.prototype.onMessageCallback = function(t) {
              var e = a.decode(new Uint8Array(t.data)),
                i = e[0];
              if (i == c.Protocol.JOIN_ROOM)
                (this.sessionId = e[1]), this.onJoin.dispatch();
              else if (i == c.Protocol.JOIN_ERROR) this.onError.dispatch(e[2]);
              else if (i == c.Protocol.ROOM_STATE) {
                var n = e[2],
                  o = e[3],
                  r = e[4];
                this.setState(n, o, r);
              } else
                i == c.Protocol.ROOM_STATE_PATCH
                  ? this.patch(e[2])
                  : i == c.Protocol.ROOM_DATA
                    ? this.onData.dispatch(e[2])
                    : i == c.Protocol.LEAVE_ROOM && this.leave();
            }),
            (i.prototype.setState = function(t, e, i) {
              var n = a.decode(t);
              this.set(n),
                (this._previousState = new Uint8Array(t)),
                e &&
                  i &&
                  ((this.remoteClock.currentTime = e),
                  (this.remoteClock.elapsedTime = i)),
                this.clock.start(),
                this.onUpdate.dispatch(n);
            }),
            (i.prototype.patch = function(e) {
              var i = Date.now();
              this.lastPatchTime && (this.ping = i - this.lastPatchTime),
                (this.lastPatchTime = i),
                this.clock.tick(),
                (this._previousState = t.from(h.apply(this._previousState, e))),
                this.set(a.decode(this._previousState)),
                this.onUpdate.dispatch(this.data);
            }),
            (i.prototype.leave = function() {
              this.connection
                ? this.connection.close()
                : this.onLeave.dispatch();
            }),
            (i.prototype.send = function(t) {
              this.connection.send([c.Protocol.ROOM_DATA, this.id, t]);
            }),
            (i.prototype.removeAllListeners = function() {
              e.prototype.removeAllListeners.call(this),
                this.onJoin.removeAll(),
                this.onUpdate.removeAll(),
                this.onData.removeAll(),
                this.onError.removeAll(),
                this.onLeave.removeAll();
            }),
            i
          );
        })(s.DeltaContainer);
      e.Room = l;
    }.call(e, i(35).Buffer));
  },
  function(t, e, i) {
    "use strict";
    function n(t, e) {
      p(t, e, e);
    }
    function o(t, e, i) {
      return l(t, "map", e, i);
    }
    function r(t, e, i) {
      return l(t, "object", e, i);
    }
    function s(t, e, i) {
      return l(t, "var");
    }
    function a(t, e, i) {
      return l(t, "list", e, i);
    }
    function h() {
      return l(void 0, "key");
    }
    function c() {
      return function(t, e) {
        Object.defineProperty(t, e, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return t.constructor.$room;
          }
        });
      };
    }
    function l(t, e, i, n) {
      return (
        void 0 === e && (e = "var"),
        function(o, r) {
          o.constructor.properties || (o.constructor.properties = {});
          var s = r;
          "string" == typeof t && ((s = r), (r = t), (t = void 0)),
            (o.constructor.properties[r] = {
              type: t,
              holderType: e,
              addCallback: i,
              removeCallback: n,
              variable: s
            });
        }
      );
    }
    function u(t, e) {
      return function(i, n, o) {
        i.constructor.listeners || (i.constructor.listeners = {}),
          (i.constructor.listeners[t] = { methodName: n, op: e });
      };
    }
    function p(t, e, i, n) {
      f(e.constructor.properties || e.properties, t, e, i, n),
        d(e.constructor.listeners, t, e);
    }
    function f(t, e, i, n, o) {
      if (t) {
        Object.defineProperty(i, "$room", {
          value: e,
          enumerable: !1,
          configurable: !0,
          writable: !0
        }),
          (i.$room = e);
        for (var r in t) {
          var s = t[r],
            a = o ? o + "/" + r : r;
          if (("map" === s.holderType && (a += "/:id"), y[a])) return;
          y[a] = !0;
          var h = g[s.holderType + "Listener"];
          h && (e.listen(a, h(e, s, i, n, a)), s.type && p(e, s.type, i, a));
        }
      }
    }
    function d(t, e, i) {
      if (t) {
        for (var n in t)
          !(function(n) {
            var o = t[n],
              r = o.op
                ? function(t) {
                    t.operation === o.op && i[o.methodName](t);
                  }
                : i[o.methodName].bind(i);
            e.listen(n, r);
          })(n);
      }
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var g = i(48);
    (e.initializeSync = n),
      (e.syncMap = o),
      (e.syncObject = r),
      (e.syncVar = s),
      (e.syncList = a),
      (e.key = h),
      (e.room = c),
      (e.sync = l),
      (e.listen = u);
    var y = {};
    (e.createBindings = p), (e.bindListeners = d);
  },
  function(t, e, i) {
    !(function(e, n) {
      t.exports = n(i(0));
    })(0, function(t) {
      return (function(t) {
        function e(n) {
          if (i[n]) return i[n].exports;
          var o = (i[n] = { i: n, l: !1, exports: {} });
          return t[n].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
        }
        var i = {};
        return (
          (e.m = t),
          (e.c = i),
          (e.d = function(t, i, n) {
            e.o(t, i) ||
              Object.defineProperty(t, i, {
                configurable: !1,
                enumerable: !0,
                get: n
              });
          }),
          (e.n = function(t) {
            var i =
              t && t.__esModule
                ? function() {
                    return t.default;
                  }
                : function() {
                    return t;
                  };
            return e.d(i, "a", i), i;
          }),
          (e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }),
          (e.p = ""),
          e((e.s = 0))
        );
      })([
        function(t, e, i) {
          "use strict";
          var n =
            (this && this.__extends) ||
            (function() {
              var t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(t, e) {
                    t.__proto__ = e;
                  }) ||
                function(t, e) {
                  for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                };
              return function(e, i) {
                function n() {
                  this.constructor = e;
                }
                t(e, i),
                  (e.prototype =
                    null === i
                      ? Object.create(i)
                      : ((n.prototype = i.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o,
            r = i(1);
          !(function(t) {
            (t[(t.TMX = 0)] = "TMX"), (t[(t.JSON = 1)] = "JSON");
          })((o = e.TiledMapFormat || (e.TiledMapFormat = {})));
          var s = (function(t) {
            function e(e, i) {
              void 0 === i && (i = o.JSON);
              var n = this;
              switch (i) {
                case o.JSON:
                  n = t.call(this, e, "json") || this;
                  break;
                default:
                  throw "The format " +
                    i +
                    " is not currently supported. Please export Tiled map as JSON.";
              }
              return (
                (n.mapFormat = i),
                (n.imagePathAccessor = n.externalTilesetPathAccessor = function(
                  t,
                  i
                ) {
                  if (0 === t.indexOf("/")) return t;
                  var n = e.split("/"),
                    o = n.concat([]);
                  return n.length > 0 && o.splice(-1), o.push(t), o.join("/");
                }),
                n
              );
            }
            return (
              n(e, t),
              (e.prototype.load = function() {
                var e = this,
                  i = new r.Promise();
                return (
                  t.prototype.load.call(this).then(function(t) {
                    var n = [];
                    e.data.tilesets.forEach(function(t) {
                      if (t.source) {
                        var i = new r.Resource(
                          e.externalTilesetPathAccessor(t.source, t),
                          "json"
                        );
                        n.push(
                          i.load().then(function(e) {
                            Object.assign(t, e);
                          })
                        );
                      }
                    }),
                      r.Promise.join.apply(e, n).then(
                        function() {
                          (n = []),
                            e.data.tilesets.forEach(function(t) {
                              var i = new r.Texture(
                                e.imagePathAccessor(t.image, t)
                              );
                              (t.imageTexture = i),
                                n.push(i.load()),
                                r.Logger.getInstance().debug(
                                  "[Tiled] Loading associated tileset: " +
                                    t.image
                                );
                            }),
                            r.Promise.join.apply(e, n).then(
                              function() {
                                i.resolve(t);
                              },
                              function(t) {
                                i.reject(t);
                              }
                            );
                        },
                        function(t) {
                          i.reject(t);
                        }
                      );
                  }),
                  i
                );
              }),
              (e.prototype.processData = function(t) {
                if ("object" != typeof t)
                  throw "Tiled map resource " +
                    this.path +
                    " is not the correct content type";
                if (void 0 === t)
                  throw "Tiled map resource " + this.path + " is empty";
                switch (this.mapFormat) {
                  case o.JSON:
                    return a(t);
                }
              }),
              (e.prototype.getTilesetForTile = function(t) {
                for (var e = this.data.tilesets.length - 1; e >= 0; e--) {
                  var i = this.data.tilesets[e];
                  if (i.firstgid <= t) return i;
                }
                return null;
              }),
              (e.prototype.getTileMap = function() {
                for (
                  var t = new r.TileMap(
                      0,
                      0,
                      this.data.tilewidth,
                      this.data.tileheight,
                      this.data.height,
                      this.data.width
                    ),
                    e = 0,
                    i = this.data.tilesets;
                  e < i.length;
                  e++
                ) {
                  var n = i[e],
                    o = Math.floor(n.imagewidth / n.tilewidth),
                    s = Math.floor(n.imageheight / n.tileheight),
                    a = new r.SpriteSheet(
                      n.imageTexture,
                      o,
                      s,
                      n.tilewidth,
                      n.tileheight
                    );
                  t.registerSpriteSheet(n.firstgid.toString(), a);
                }
                for (var h = 0, c = this.data.layers; h < c.length; h++) {
                  var l = c[h];
                  if ("tilelayer" === l.type)
                    for (var u = 0; u < l.data.length; u++) {
                      var p = l.data[u];
                      if (0 !== p) {
                        var n = this.getTilesetForTile(p);
                        t.data[u].sprites.push(
                          new r.TileSprite(
                            n.firstgid.toString(),
                            p - n.firstgid
                          )
                        );
                      }
                    }
                }
                return t;
              }),
              e
            );
          })(r.Resource);
          e.default = s;
          var a = function(t) {
              if (t.layers)
                for (var e = 0, i = t.layers; e < i.length; e++) {
                  var n = i[e];
                  "string" == typeof n.data
                    ? "base64" === n.encoding &&
                      (n.data = h.decompressBase64(n.data, n.encoding))
                    : (n.data = h.decompressCsv(n.data));
                }
              return t;
            },
            h = {
              decompressCsv: function(t) {
                return t;
              },
              decompressBase64: function(t, e) {
                function i(t) {
                  var e = t.charCodeAt(0);
                  return e === u || e === y
                    ? 62
                    : e === p || e === _
                      ? 63
                      : e < f
                        ? -1
                        : e < f + 10
                          ? e - f + 26 + 26
                          : e < g + 26
                            ? e - g
                            : e < d + 26 ? e - d + 26 : void 0;
                }
                function n(t) {
                  c[m++] = t;
                }
                var o, r, s, a, h, c;
                if (t.length % 4 > 0)
                  throw new Error(
                    "Invalid string. Length must be a multiple of 4"
                  );
                var l = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                  u = "+".charCodeAt(0),
                  p = "/".charCodeAt(0),
                  f = "0".charCodeAt(0),
                  d = "a".charCodeAt(0),
                  g = "A".charCodeAt(0),
                  y = "-".charCodeAt(0),
                  _ = "_".charCodeAt(0),
                  v = t.length;
                (h =
                  "=" === t.charAt(v - 2)
                    ? 2
                    : "=" === t.charAt(v - 1) ? 1 : 0),
                  (c = new l(3 * t.length / 4 - h)),
                  (s = h > 0 ? t.length - 4 : t.length);
                var m = 0;
                for (o = 0, r = 0; o < s; o += 4, r += 3)
                  (a =
                    (i(t.charAt(o)) << 18) |
                    (i(t.charAt(o + 1)) << 12) |
                    (i(t.charAt(o + 2)) << 6) |
                    i(t.charAt(o + 3))),
                    n((16711680 & a) >> 16),
                    n((65280 & a) >> 8),
                    n(255 & a);
                2 === h
                  ? ((a = (i(t.charAt(o)) << 2) | (i(t.charAt(o + 1)) >> 4)),
                    n(255 & a))
                  : 1 === h &&
                    ((a =
                      (i(t.charAt(o)) << 10) |
                      (i(t.charAt(o + 1)) << 4) |
                      (i(t.charAt(o + 2)) >> 2)),
                    n((a >> 8) & 255),
                    n(255 & a));
                var b = c.length / 4,
                  w = new Array(b);
                for (o = 0; o < b; o++)
                  w[o] = (function(t) {
                    for (var e = 0, i = t.length - 1; i >= 0; i--)
                      e = 256 * e + 1 * t[i];
                    return e;
                  })(c.slice(4 * o, 4 * o + 3));
                return w;
              }
            };
        },
        function(e, i) {
          e.exports = t;
        }
      ]);
    });
  },
  function(t, e, i) {
    t.exports = i.p + "8a9a0d459d4d8d5be04128b934f0da52.json";
  },
  function(t, e, i) {
    t.exports = i.p + "06393e6e90edce3431067694e15d2b18.png";
  },
  function(t, e, i) {
    t.exports = i.p + "9621352f5b09cfe9c50b358b1b5e057e.png";
  },
  function(t, e, i) {
    t.exports = i.p + "f84e030bd92d47165c85ffbf90bd07ca.png";
  },
  function(t, e, i) {
    "use strict";
    var n = i(50);
    i.d(e, "d", function() {
      return n.a;
    });
    var o = i(62);
    i.d(e, "c", function() {
      return o.a;
    });
    var r = i(67);
    i.d(e, "a", function() {
      return r.a;
    });
    var s = i(68);
    i.d(e, "b", function() {
      return s.a;
    });
    var a = i(69);
    i.d(e, "f", function() {
      return a.a;
    });
    var h = (i(70), i(71));
    i.d(e, "e", function() {
      return h.a;
    });
  },
  function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(10),
      o = (i.n(n), i(0)),
      r = (i.n(o), i(49)),
      s = i(3),
      a = (new n.Client("ws://localhost:8081"), new r.a());
    a.setAntialiasing(!1),
      (o.Logger.getInstance().defaultLevel = o.LogLevel.Debug);
    var h = new o.Loader();
    a.start(h).then(function() {
      console.log("Started"), s.a.connect(), console.log(s.a.getClientId());
    });
  },
  function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(5),
      o = i(11),
      r = i(7),
      s = i(15),
      a = i(45),
      h = (function() {
        function t(t) {
          var e = this;
          (this.onOpen = new o.Signal()),
            (this.onMessage = new o.Signal()),
            (this.onClose = new o.Signal()),
            (this.onError = new o.Signal()),
            (this.rooms = {}),
            (this.connectingRooms = {}),
            (this.joinRequestId = 0),
            (this.storage = window.localStorage),
            (this.hostname = t);
          var i = this.storage.getItem("colyseusid");
          i instanceof Promise
            ? i.then(function(t) {
                return e.createConnection(t);
              })
            : this.createConnection(i);
        }
        return (
          (t.prototype.createConnection = function(t) {
            var e = this;
            (this.id = t || ""),
              (this.connection = new a.Connection(
                this.hostname + "/?colyseusid=" + this.id
              )),
              (this.connection.onmessage = this.onMessageCallback.bind(this)),
              (this.connection.onclose = function(t) {
                return e.onClose.dispatch();
              }),
              (this.connection.onerror = function(t) {
                return e.onError.dispatch();
              }),
              (this.connection.onopen = function() {
                e.id && e.onOpen.dispatch();
              });
          }),
          (t.prototype.join = function(t, e) {
            var i = this;
            void 0 === e && (e = {}), (e.requestId = ++this.joinRequestId);
            var n = new s.Room(t);
            return (
              n.onLeave.addOnce(function() {
                delete i.rooms[n.id], delete i.connectingRooms[e.requestId];
              }),
              (this.connectingRooms[e.requestId] = n),
              this.connection.send([r.Protocol.JOIN_ROOM, t, e]),
              n
            );
          }),
          (t.prototype.onMessageCallback = function(t) {
            var e = n.decode(new Uint8Array(t.data)),
              i = e[0];
            if (i == r.Protocol.USER_ID)
              this.storage.setItem("colyseusid", e[1]),
                (this.id = e[1]),
                this.onOpen.dispatch();
            else if (i == r.Protocol.JOIN_ROOM) {
              var o = e[2],
                s = this.connectingRooms[o];
              if (!s)
                return void console.warn(
                  "colyseus.js: client left room before receiving session id."
                );
              (this.rooms[s.id] = s),
                (s.id = e[1]),
                s.connect(
                  new a.Connection(
                    this.hostname + "/" + s.id + "?colyseusid=" + this.id
                  )
                ),
                delete this.connectingRooms[o];
            } else
              i == r.Protocol.JOIN_ERROR
                ? (console.error("colyseus.js: server error:", e[2]),
                  this.onError.dispatch(e[2]))
                : this.onMessage.dispatch(e);
          }),
          t
        );
      })();
    e.Client = h;
  },
  function(t, e, i) {
    "use strict";
    function n(t, e, i) {
      for (var n = 0, o = 0, r = i.length; o < r; o++)
        (n = i.charCodeAt(o)),
          n < 128
            ? t.setUint8(e++, n)
            : n < 2048
              ? (t.setUint8(e++, 192 | (n >> 6)),
                t.setUint8(e++, 128 | (63 & n)))
              : n < 55296 || n >= 57344
                ? (t.setUint8(e++, 224 | (n >> 12)),
                  t.setUint8(e++, 128 | ((n >> 6) & 63)),
                  t.setUint8(e++, 128 | (63 & n)))
                : (o++,
                  (n = 65536 + (((1023 & n) << 10) | (1023 & i.charCodeAt(o)))),
                  t.setUint8(e++, 240 | (n >> 18)),
                  t.setUint8(e++, 128 | ((n >> 12) & 63)),
                  t.setUint8(e++, 128 | ((n >> 6) & 63)),
                  t.setUint8(e++, 128 | (63 & n)));
    }
    function o(t) {
      for (var e = 0, i = 0, n = 0, o = t.length; n < o; n++)
        (e = t.charCodeAt(n)),
          e < 128
            ? (i += 1)
            : e < 2048
              ? (i += 2)
              : e < 55296 || e >= 57344 ? (i += 3) : (n++, (i += 4));
      return i;
    }
    function r(t, e, i) {
      var n = typeof i,
        s = 0,
        a = 0,
        h = 0,
        c = 0,
        l = 0,
        u = 0;
      if ("string" === n) {
        if ((l = o(i)) < 32) t.push(160 | l), (u = 1);
        else if (l < 256) t.push(217, l), (u = 2);
        else if (l < 65536) t.push(218, l >> 8, l), (u = 3);
        else {
          if (!(l < 4294967296)) throw new Error("String too long");
          t.push(219, l >> 24, l >> 16, l >> 8, l), (u = 5);
        }
        return e.push({ str: i, length: l, offset: t.length }), u + l;
      }
      if ("number" === n)
        return Math.floor(i) === i && isFinite(i)
          ? i >= 0
            ? i < 128
              ? (t.push(i), 1)
              : i < 256
                ? (t.push(204, i), 2)
                : i < 65536
                  ? (t.push(205, i >> 8, i), 3)
                  : i < 4294967296
                    ? (t.push(206, i >> 24, i >> 16, i >> 8, i), 5)
                    : ((h = (i / Math.pow(2, 32)) >> 0),
                      (c = i >>> 0),
                      t.push(
                        207,
                        h >> 24,
                        h >> 16,
                        h >> 8,
                        h,
                        c >> 24,
                        c >> 16,
                        c >> 8,
                        c
                      ),
                      9)
            : i >= -32
              ? (t.push(i), 1)
              : i >= -128
                ? (t.push(208, i), 2)
                : i >= -32768
                  ? (t.push(209, i >> 8, i), 3)
                  : i >= -2147483648
                    ? (t.push(210, i >> 24, i >> 16, i >> 8, i), 5)
                    : ((h = Math.floor(i / Math.pow(2, 32))),
                      (c = i >>> 0),
                      t.push(
                        211,
                        h >> 24,
                        h >> 16,
                        h >> 8,
                        h,
                        c >> 24,
                        c >> 16,
                        c >> 8,
                        c
                      ),
                      9)
          : (t.push(203), e.push({ float: i, length: 8, offset: t.length }), 9);
      if ("object" === n) {
        if (null === i) return t.push(192), 1;
        if (Array.isArray(i)) {
          if ((l = i.length) < 16) t.push(144 | l), (u = 1);
          else if (l < 65536) t.push(220, l >> 8, l), (u = 3);
          else {
            if (!(l < 4294967296)) throw new Error("Array too large");
            t.push(221, l >> 24, l >> 16, l >> 8, l), (u = 5);
          }
          for (s = 0; s < l; s++) u += r(t, e, i[s]);
          return u;
        }
        if (i instanceof Date) {
          var p = i.getTime();
          return (
            (h = Math.floor(p / Math.pow(2, 32))),
            (c = p >>> 0),
            t.push(
              215,
              0,
              h >> 24,
              h >> 16,
              h >> 8,
              h,
              c >> 24,
              c >> 16,
              c >> 8,
              c
            ),
            10
          );
        }
        if (i instanceof ArrayBuffer) {
          if ((l = i.byteLength) < 256) t.push(196, l), (u = 2);
          else if (l < 65536) t.push(197, l >> 8, l), (u = 3);
          else {
            if (!(l < 4294967296)) throw new Error("Buffer too large");
            t.push(198, l >> 24, l >> 16, l >> 8, l), (u = 5);
          }
          return e.push({ bin: i, length: l, offset: t.length }), u + l;
        }
        if ("function" == typeof i.toJSON) return r(t, e, i.toJSON());
        var f = [],
          d = "",
          g = Object.keys(i);
        for (s = 0, a = g.length; s < a; s++)
          (d = g[s]), "function" != typeof i[d] && f.push(d);
        if ((l = f.length) < 16) t.push(128 | l), (u = 1);
        else if (l < 65536) t.push(222, l >> 8, l), (u = 3);
        else {
          if (!(l < 4294967296)) throw new Error("Object too large");
          t.push(223, l >> 24, l >> 16, l >> 8, l), (u = 5);
        }
        for (s = 0; s < l; s++)
          (d = f[s]), (u += r(t, e, d)), (u += r(t, e, i[d]));
        return u;
      }
      if ("boolean" === n) return t.push(i ? 195 : 194), 1;
      if ("undefined" === n) return t.push(212, 0, 0), 3;
      throw new Error("Could not encode");
    }
    function s(t) {
      var e = [],
        i = [],
        o = r(e, i, t),
        s = new ArrayBuffer(o),
        a = new DataView(s),
        h = 0,
        c = 0,
        l = -1;
      i.length > 0 && (l = i[0].offset);
      for (var u, p = 0, f = 0, d = 0, g = e.length; d < g; d++)
        if ((a.setUint8(c + d, e[d]), d + 1 === l)) {
          if (((u = i[h]), (p = u.length), (f = c + l), u.bin))
            for (var y = new Uint8Array(u.bin), _ = 0; _ < p; _++)
              a.setUint8(f + _, y[_]);
          else
            u.str
              ? n(a, f, u.str)
              : void 0 !== u.float && a.setFloat64(f, u.float);
          h++, (c += p), i[h] && (l = i[h].offset);
        }
      return s;
    }
    t.exports = s;
  },
  function(t, e, i) {
    "use strict";
    function n(t) {
      if (((this.offset = 0), t instanceof ArrayBuffer))
        (this.buffer = t), (this.view = new DataView(this.buffer));
      else {
        if (!ArrayBuffer.isView(t)) throw new Error("Invalid argument");
        (this.buffer = t.buffer),
          (this.view = new DataView(this.buffer, t.byteOffset, t.byteLength));
      }
    }
    function o(t, e, i) {
      for (var n = "", o = 0, r = e, s = e + i; r < s; r++) {
        var a = t.getUint8(r);
        if (0 != (128 & a))
          if (192 != (224 & a))
            if (224 != (240 & a)) {
              if (240 != (248 & a))
                throw new Error("Invalid byte " + a.toString(16));
              (o =
                ((7 & a) << 18) |
                ((63 & t.getUint8(++r)) << 12) |
                ((63 & t.getUint8(++r)) << 6) |
                ((63 & t.getUint8(++r)) << 0)),
                o >= 65536
                  ? ((o -= 65536),
                    (n += String.fromCharCode(
                      55296 + (o >>> 10),
                      56320 + (1023 & o)
                    )))
                  : (n += String.fromCharCode(o));
            } else
              n += String.fromCharCode(
                ((15 & a) << 12) |
                  ((63 & t.getUint8(++r)) << 6) |
                  ((63 & t.getUint8(++r)) << 0)
              );
          else
            n += String.fromCharCode(((15 & a) << 6) | (63 & t.getUint8(++r)));
        else n += String.fromCharCode(a);
      }
      return n;
    }
    function r(t) {
      var e = new n(t),
        i = e.parse();
      if (e.offset !== t.byteLength)
        throw new Error(t.byteLength - e.offset + " trailing bytes");
      return i;
    }
    (n.prototype.array = function(t) {
      for (var e = new Array(t), i = 0; i < t; i++) e[i] = this.parse();
      return e;
    }),
      (n.prototype.map = function(t) {
        for (var e = "", i = {}, n = 0; n < t; n++)
          (e = this.parse()), (i[e] = this.parse());
        return i;
      }),
      (n.prototype.str = function(t) {
        var e = o(this.view, this.offset, t);
        return (this.offset += t), e;
      }),
      (n.prototype.bin = function(t) {
        var e = this.buffer.slice(this.offset, this.offset + t);
        return (this.offset += t), e;
      }),
      (n.prototype.parse = function() {
        var t,
          e = this.view.getUint8(this.offset++),
          i = 0,
          n = 0,
          o = 0,
          r = 0;
        if (e < 192)
          return e < 128
            ? e
            : e < 144
              ? this.map(15 & e)
              : e < 160 ? this.array(15 & e) : this.str(31 & e);
        if (e > 223) return -1 * (255 - e + 1);
        switch (e) {
          case 192:
            return null;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            return (
              (i = this.view.getUint8(this.offset)),
              (this.offset += 1),
              this.bin(i)
            );
          case 197:
            return (
              (i = this.view.getUint16(this.offset)),
              (this.offset += 2),
              this.bin(i)
            );
          case 198:
            return (
              (i = this.view.getUint32(this.offset)),
              (this.offset += 4),
              this.bin(i)
            );
          case 199:
            return (
              (i = this.view.getUint8(this.offset)),
              (n = this.view.getInt8(this.offset + 1)),
              (this.offset += 2),
              [n, this.bin(i)]
            );
          case 200:
            return (
              (i = this.view.getUint16(this.offset)),
              (n = this.view.getInt8(this.offset + 2)),
              (this.offset += 3),
              [n, this.bin(i)]
            );
          case 201:
            return (
              (i = this.view.getUint32(this.offset)),
              (n = this.view.getInt8(this.offset + 4)),
              (this.offset += 5),
              [n, this.bin(i)]
            );
          case 202:
            return (
              (t = this.view.getFloat32(this.offset)), (this.offset += 4), t
            );
          case 203:
            return (
              (t = this.view.getFloat64(this.offset)), (this.offset += 8), t
            );
          case 204:
            return (t = this.view.getUint8(this.offset)), (this.offset += 1), t;
          case 205:
            return (
              (t = this.view.getUint16(this.offset)), (this.offset += 2), t
            );
          case 206:
            return (
              (t = this.view.getUint32(this.offset)), (this.offset += 4), t
            );
          case 207:
            return (
              (o = this.view.getUint32(this.offset) * Math.pow(2, 32)),
              (r = this.view.getUint32(this.offset + 4)),
              (this.offset += 8),
              o + r
            );
          case 208:
            return (t = this.view.getInt8(this.offset)), (this.offset += 1), t;
          case 209:
            return (t = this.view.getInt16(this.offset)), (this.offset += 2), t;
          case 210:
            return (t = this.view.getInt32(this.offset)), (this.offset += 4), t;
          case 211:
            return (
              (o = this.view.getInt32(this.offset) * Math.pow(2, 32)),
              (r = this.view.getUint32(this.offset + 4)),
              (this.offset += 8),
              o + r
            );
          case 212:
            return (
              (n = this.view.getInt8(this.offset)),
              (this.offset += 1),
              0 === n ? void (this.offset += 1) : [n, this.bin(1)]
            );
          case 213:
            return (
              (n = this.view.getInt8(this.offset)),
              (this.offset += 1),
              [n, this.bin(2)]
            );
          case 214:
            return (
              (n = this.view.getInt8(this.offset)),
              (this.offset += 1),
              [n, this.bin(4)]
            );
          case 215:
            return (
              (n = this.view.getInt8(this.offset)),
              (this.offset += 1),
              0 === n
                ? ((o = this.view.getInt32(this.offset) * Math.pow(2, 32)),
                  (r = this.view.getUint32(this.offset + 4)),
                  (this.offset += 8),
                  new Date(o + r))
                : [n, this.bin(8)]
            );
          case 216:
            return (
              (n = this.view.getInt8(this.offset)),
              (this.offset += 1),
              [n, this.bin(16)]
            );
          case 217:
            return (
              (i = this.view.getUint8(this.offset)),
              (this.offset += 1),
              this.str(i)
            );
          case 218:
            return (
              (i = this.view.getUint16(this.offset)),
              (this.offset += 2),
              this.str(i)
            );
          case 219:
            return (
              (i = this.view.getUint32(this.offset)),
              (this.offset += 4),
              this.str(i)
            );
          case 220:
            return (
              (i = this.view.getUint16(this.offset)),
              (this.offset += 2),
              this.array(i)
            );
          case 221:
            return (
              (i = this.view.getUint32(this.offset)),
              (this.offset += 4),
              this.array(i)
            );
          case 222:
            return (
              (i = this.view.getUint16(this.offset)),
              (this.offset += 2),
              this.map(i)
            );
          case 223:
            return (
              (i = this.view.getUint32(this.offset)),
              (this.offset += 4),
              this.map(i)
            );
        }
        throw new Error("Could not parse");
      }),
      (t.exports = r);
  },
  function(t, e, i) {
    "use strict";
    var n =
      (this && this.__extends) ||
      (function() {
        var t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(t, e) {
              t.__proto__ = e;
            }) ||
          function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
          };
        return function(e, i) {
          function n() {
            this.constructor = e;
          }
          t(e, i),
            (e.prototype =
              null === i
                ? Object.create(i)
                : ((n.prototype = i.prototype), new n()));
        };
      })();
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(12),
      r = (function(t) {
        function e(e) {
          void 0 === e && (e = null);
          for (var i = [], n = 1; n < arguments.length; n++)
            i[n - 1] = arguments[n];
          var o = this;
          return (
            (i = 1 == i.length && i[0] instanceof Array ? i[0] : i),
            (o = t.call(this, i) || this),
            (o._target = e),
            o
          );
        }
        return (
          n(e, t),
          Object.defineProperty(e.prototype, "target", {
            get: function() {
              return this._target;
            },
            set: function(t) {
              t != this._target && (this.removeAll(), (this._target = t));
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.dispatch = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            var i = this._valueClasses.length,
              n = t.length;
            if (n < i)
              throw new Error(
                "Incorrect number of arguments. Expected at least " +
                  i +
                  " but received " +
                  n +
                  "."
              );
            for (var o = 0; o < i; o++)
              if (null !== t[o] && t[o].constructor !== this._valueClasses[o])
                throw new Error(
                  "Value object <" +
                    t[o] +
                    "> is not an instance of <" +
                    this._valueClasses[o] +
                    ">."
                );
            var r = t[0];
            r &&
              (r.target && ((r = r.clone()), (t[0] = r)),
              (r.target = this.target),
              (r.currentTarget = this.target),
              (r.signal = this));
            for (var s = this.slots; s.nonEmpty; )
              s.head.execute(t), (s = s.tail);
            if (r && r.bubbles)
              for (
                var a = this.target;
                a &&
                a.hasOwnProperty("parent") &&
                (a = a.parent) &&
                (void 0 === a.onEventBubbled ||
                  ((r.currentTarget = a), !a.onEventBubbled(r)));

              );
          }),
          e
        );
      })(o.PrioritySignal);
    e.DeluxeSignal = r;
  },
  function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function() {
      function t(t) {
        void 0 === t && (t = !1), (this._bubbles = t);
      }
      return (
        Object.defineProperty(t.prototype, "signal", {
          get: function() {
            return this._signal;
          },
          set: function(t) {
            this._signal = t;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, "target", {
          get: function() {
            return this._target;
          },
          set: function(t) {
            this._target = t;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, "currentTarget", {
          get: function() {
            return this._currentTarget;
          },
          set: function(t) {
            this._currentTarget = t;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, "bubbles", {
          get: function() {
            return this._bubbles;
          },
          set: function(t) {
            this._bubbles = t;
          },
          enumerable: !0,
          configurable: !0
        }),
        (t.prototype.clone = function() {
          return new t(this._bubbles);
        }),
        t
      );
    })();
    e.GenericEvent = n;
  },
  function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.IOnceSignal = Symbol("IOnceSignal"));
  },
  function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.IPrioritySignal = Symbol("IPrioritySignal"));
  },
  function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.ISignal = Symbol("ISignal"));
  },
  function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.ISlot = Symbol("ISlot"));
  },
  function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(4),
      o = (function() {
        function t() {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          this.valueClasses = 1 == t.length && t[0] instanceof Array ? t[0] : t;
        }
        return (
          Object.defineProperty(t.prototype, "valueClasses", {
            get: function() {
              return this._valueClasses;
            },
            set: function(t) {
              this._valueClasses = t ? t.slice() : [];
              for (var e = this._valueClasses.length; e--; )
                if (!(this._valueClasses[e] instanceof Object))
                  throw new Error(
                    "Invalid valueClasses argument: item at index " +
                      e +
                      " should be a Class but was:<" +
                      this._valueClasses[e] +
                      ">." +
                      this._valueClasses[e]
                  );
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, "numListeners", {
            get: function() {
              return this.slot ? 1 : 0;
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.prototype.add = function(t) {
            return this.registerListener(t);
          }),
          (t.prototype.addOnce = function(t) {
            return this.registerListener(t, !0);
          }),
          (t.prototype.remove = function(t) {
            if (this.slot && this.slot.listener == t) {
              var e = this.slot;
              return (this.slot = null), e;
            }
            return null;
          }),
          (t.prototype.removeAll = function() {
            this.slot && this.slot.remove();
          }),
          (t.prototype.dispatch = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            var i = this._valueClasses.length,
              n = t.length;
            if (n < i)
              throw new Error(
                "Incorrect number of arguments. Expected at least " +
                  i +
                  " but received " +
                  n +
                  "."
              );
            for (var o = 0; o < i; o++)
              if (
                !(
                  null === t[o] ||
                  t[o] instanceof this._valueClasses[o] ||
                  t[o].constructor === this._valueClasses[o]
                )
              )
                throw new Error(
                  "Value object <" +
                    t[o] +
                    "> is not an instance of <" +
                    this._valueClasses[o] +
                    ">."
                );
            this.slot && this.slot.execute(t);
          }),
          (t.prototype.registerListener = function(t, e) {
            if ((void 0 === e && (e = !1), this.slot))
              throw new Error(
                "You cannot add or addOnce with a listener already added, remove the current listener first."
              );
            return (this.slot = new n.Slot(t, this, e));
          }),
          t
        );
      })();
    e.MonoSignal = o;
  },
  function(t, e, i) {
    "use strict";
    var n =
      (this && this.__extends) ||
      (function() {
        var t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(t, e) {
              t.__proto__ = e;
            }) ||
          function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
          };
        return function(e, i) {
          function n() {
            this.constructor = e;
          }
          t(e, i),
            (e.prototype =
              null === i
                ? Object.create(i)
                : ((n.prototype = i.prototype), new n()));
        };
      })();
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(6),
      r = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          n(e, t),
          (e.prototype.addOnce = function(e) {
            var i = t.prototype.addOnce.call(this, e);
            return (
              this.isDispatched && (i.execute(this.valueObjects), i.remove()), i
            );
          }),
          (e.prototype.dispatch = function() {
            for (var e = [], i = 0; i < arguments.length; i++)
              e[i] = arguments[i];
            if (this.isDispatched)
              throw new Error("You cannot dispatch() a Promise more than once");
            (this.isDispatched = !0),
              (this.valueObjects = e),
              t.prototype.dispatch.apply(this, e);
          }),
          e
        );
      })(o.OnceSignal);
    e.Promise = r;
  },
  function(t, e, i) {
    "use strict";
    (function(t) {
      function n() {
        return r.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function o(t, e) {
        if (n() < e) throw new RangeError("Invalid typed array length");
        return (
          r.TYPED_ARRAY_SUPPORT
            ? ((t = new Uint8Array(e)), (t.__proto__ = r.prototype))
            : (null === t && (t = new r(e)), (t.length = e)),
          t
        );
      }
      function r(t, e, i) {
        if (!(r.TYPED_ARRAY_SUPPORT || this instanceof r))
          return new r(t, e, i);
        if ("number" == typeof t) {
          if ("string" == typeof e)
            throw new Error(
              "If encoding is specified then the first argument must be a string"
            );
          return c(this, t);
        }
        return s(this, t, e, i);
      }
      function s(t, e, i, n) {
        if ("number" == typeof e)
          throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
          ? p(t, e, i, n)
          : "string" == typeof e ? l(t, e, i) : f(t, e);
      }
      function a(t) {
        if ("number" != typeof t)
          throw new TypeError('"size" argument must be a number');
        if (t < 0) throw new RangeError('"size" argument must not be negative');
      }
      function h(t, e, i, n) {
        return (
          a(e),
          e <= 0
            ? o(t, e)
            : void 0 !== i
              ? "string" == typeof n ? o(t, e).fill(i, n) : o(t, e).fill(i)
              : o(t, e)
        );
      }
      function c(t, e) {
        if ((a(e), (t = o(t, e < 0 ? 0 : 0 | d(e))), !r.TYPED_ARRAY_SUPPORT))
          for (var i = 0; i < e; ++i) t[i] = 0;
        return t;
      }
      function l(t, e, i) {
        if (
          (("string" == typeof i && "" !== i) || (i = "utf8"), !r.isEncoding(i))
        )
          throw new TypeError('"encoding" must be a valid string encoding');
        var n = 0 | y(e, i);
        t = o(t, n);
        var s = t.write(e, i);
        return s !== n && (t = t.slice(0, s)), t;
      }
      function u(t, e) {
        var i = e.length < 0 ? 0 : 0 | d(e.length);
        t = o(t, i);
        for (var n = 0; n < i; n += 1) t[n] = 255 & e[n];
        return t;
      }
      function p(t, e, i, n) {
        if ((e.byteLength, i < 0 || e.byteLength < i))
          throw new RangeError("'offset' is out of bounds");
        if (e.byteLength < i + (n || 0))
          throw new RangeError("'length' is out of bounds");
        return (
          (e =
            void 0 === i && void 0 === n
              ? new Uint8Array(e)
              : void 0 === n ? new Uint8Array(e, i) : new Uint8Array(e, i, n)),
          r.TYPED_ARRAY_SUPPORT
            ? ((t = e), (t.__proto__ = r.prototype))
            : (t = u(t, e)),
          t
        );
      }
      function f(t, e) {
        if (r.isBuffer(e)) {
          var i = 0 | d(e.length);
          return (t = o(t, i)), 0 === t.length ? t : (e.copy(t, 0, 0, i), t);
        }
        if (e) {
          if (
            ("undefined" != typeof ArrayBuffer &&
              e.buffer instanceof ArrayBuffer) ||
            "length" in e
          )
            return "number" != typeof e.length || K(e.length)
              ? o(t, 0)
              : u(t, e);
          if ("Buffer" === e.type && Z(e.data)) return u(t, e.data);
        }
        throw new TypeError(
          "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
        );
      }
      function d(t) {
        if (t >= n())
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              n().toString(16) +
              " bytes"
          );
        return 0 | t;
      }
      function g(t) {
        return +t != t && (t = 0), r.alloc(+t);
      }
      function y(t, e) {
        if (r.isBuffer(t)) return t.length;
        if (
          "undefined" != typeof ArrayBuffer &&
          "function" == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
        )
          return t.byteLength;
        "string" != typeof t && (t = "" + t);
        var i = t.length;
        if (0 === i) return 0;
        for (var n = !1; ; )
          switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
              return i;
            case "utf8":
            case "utf-8":
            case void 0:
              return W(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * i;
            case "hex":
              return i >>> 1;
            case "base64":
              return G(t).length;
            default:
              if (n) return W(t).length;
              (e = ("" + e).toLowerCase()), (n = !0);
          }
      }
      function _(t, e, i) {
        var n = !1;
        if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
        if (((void 0 === i || i > this.length) && (i = this.length), i <= 0))
          return "";
        if (((i >>>= 0), (e >>>= 0), i <= e)) return "";
        for (t || (t = "utf8"); ; )
          switch (t) {
            case "hex":
              return D(this, e, i);
            case "utf8":
            case "utf-8":
              return T(this, e, i);
            case "ascii":
              return O(this, e, i);
            case "latin1":
            case "binary":
              return R(this, e, i);
            case "base64":
              return E(this, e, i);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return I(this, e, i);
            default:
              if (n) throw new TypeError("Unknown encoding: " + t);
              (t = (t + "").toLowerCase()), (n = !0);
          }
      }
      function v(t, e, i) {
        var n = t[e];
        (t[e] = t[i]), (t[i] = n);
      }
      function m(t, e, i, n, o) {
        if (0 === t.length) return -1;
        if (
          ("string" == typeof i
            ? ((n = i), (i = 0))
            : i > 2147483647
              ? (i = 2147483647)
              : i < -2147483648 && (i = -2147483648),
          (i = +i),
          isNaN(i) && (i = o ? 0 : t.length - 1),
          i < 0 && (i = t.length + i),
          i >= t.length)
        ) {
          if (o) return -1;
          i = t.length - 1;
        } else if (i < 0) {
          if (!o) return -1;
          i = 0;
        }
        if (("string" == typeof e && (e = r.from(e, n)), r.isBuffer(e)))
          return 0 === e.length ? -1 : b(t, e, i, n, o);
        if ("number" == typeof e)
          return (
            (e &= 255),
            r.TYPED_ARRAY_SUPPORT &&
            "function" == typeof Uint8Array.prototype.indexOf
              ? o
                ? Uint8Array.prototype.indexOf.call(t, e, i)
                : Uint8Array.prototype.lastIndexOf.call(t, e, i)
              : b(t, [e], i, n, o)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function b(t, e, i, n, o) {
        function r(t, e) {
          return 1 === s ? t[e] : t.readUInt16BE(e * s);
        }
        var s = 1,
          a = t.length,
          h = e.length;
        if (
          void 0 !== n &&
          ("ucs2" === (n = String(n).toLowerCase()) ||
            "ucs-2" === n ||
            "utf16le" === n ||
            "utf-16le" === n)
        ) {
          if (t.length < 2 || e.length < 2) return -1;
          (s = 2), (a /= 2), (h /= 2), (i /= 2);
        }
        var c;
        if (o) {
          var l = -1;
          for (c = i; c < a; c++)
            if (r(t, c) === r(e, -1 === l ? 0 : c - l)) {
              if ((-1 === l && (l = c), c - l + 1 === h)) return l * s;
            } else -1 !== l && (c -= c - l), (l = -1);
        } else
          for (i + h > a && (i = a - h), c = i; c >= 0; c--) {
            for (var u = !0, p = 0; p < h; p++)
              if (r(t, c + p) !== r(e, p)) {
                u = !1;
                break;
              }
            if (u) return c;
          }
        return -1;
      }
      function w(t, e, i, n) {
        i = Number(i) || 0;
        var o = t.length - i;
        n ? (n = Number(n)) > o && (n = o) : (n = o);
        var r = e.length;
        if (r % 2 != 0) throw new TypeError("Invalid hex string");
        n > r / 2 && (n = r / 2);
        for (var s = 0; s < n; ++s) {
          var a = parseInt(e.substr(2 * s, 2), 16);
          if (isNaN(a)) return s;
          t[i + s] = a;
        }
        return s;
      }
      function x(t, e, i, n) {
        return X(W(e, t.length - i), t, i, n);
      }
      function P(t, e, i, n) {
        return X(N(e), t, i, n);
      }
      function C(t, e, i, n) {
        return P(t, e, i, n);
      }
      function A(t, e, i, n) {
        return X(G(e), t, i, n);
      }
      function S(t, e, i, n) {
        return X(Y(e, t.length - i), t, i, n);
      }
      function E(t, e, i) {
        return 0 === e && i === t.length
          ? Q.fromByteArray(t)
          : Q.fromByteArray(t.slice(e, i));
      }
      function T(t, e, i) {
        i = Math.min(t.length, i);
        for (var n = [], o = e; o < i; ) {
          var r = t[o],
            s = null,
            a = r > 239 ? 4 : r > 223 ? 3 : r > 191 ? 2 : 1;
          if (o + a <= i) {
            var h, c, l, u;
            switch (a) {
              case 1:
                r < 128 && (s = r);
                break;
              case 2:
                (h = t[o + 1]),
                  128 == (192 & h) &&
                    (u = ((31 & r) << 6) | (63 & h)) > 127 &&
                    (s = u);
                break;
              case 3:
                (h = t[o + 1]),
                  (c = t[o + 2]),
                  128 == (192 & h) &&
                    128 == (192 & c) &&
                    (u = ((15 & r) << 12) | ((63 & h) << 6) | (63 & c)) >
                      2047 &&
                    (u < 55296 || u > 57343) &&
                    (s = u);
                break;
              case 4:
                (h = t[o + 1]),
                  (c = t[o + 2]),
                  (l = t[o + 3]),
                  128 == (192 & h) &&
                    128 == (192 & c) &&
                    128 == (192 & l) &&
                    (u =
                      ((15 & r) << 18) |
                      ((63 & h) << 12) |
                      ((63 & c) << 6) |
                      (63 & l)) > 65535 &&
                    u < 1114112 &&
                    (s = u);
            }
          }
          null === s
            ? ((s = 65533), (a = 1))
            : s > 65535 &&
              ((s -= 65536),
              n.push(((s >>> 10) & 1023) | 55296),
              (s = 56320 | (1023 & s))),
            n.push(s),
            (o += a);
        }
        return M(n);
      }
      function M(t) {
        var e = t.length;
        if (e <= $) return String.fromCharCode.apply(String, t);
        for (var i = "", n = 0; n < e; )
          i += String.fromCharCode.apply(String, t.slice(n, (n += $)));
        return i;
      }
      function O(t, e, i) {
        var n = "";
        i = Math.min(t.length, i);
        for (var o = e; o < i; ++o) n += String.fromCharCode(127 & t[o]);
        return n;
      }
      function R(t, e, i) {
        var n = "";
        i = Math.min(t.length, i);
        for (var o = e; o < i; ++o) n += String.fromCharCode(t[o]);
        return n;
      }
      function D(t, e, i) {
        var n = t.length;
        (!e || e < 0) && (e = 0), (!i || i < 0 || i > n) && (i = n);
        for (var o = "", r = e; r < i; ++r) o += V(t[r]);
        return o;
      }
      function I(t, e, i) {
        for (var n = t.slice(e, i), o = "", r = 0; r < n.length; r += 2)
          o += String.fromCharCode(n[r] + 256 * n[r + 1]);
        return o;
      }
      function k(t, e, i) {
        if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
        if (t + e > i)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function B(t, e, i, n, o, s) {
        if (!r.isBuffer(t))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > o || e < s)
          throw new RangeError('"value" argument is out of bounds');
        if (i + n > t.length) throw new RangeError("Index out of range");
      }
      function L(t, e, i, n) {
        e < 0 && (e = 65535 + e + 1);
        for (var o = 0, r = Math.min(t.length - i, 2); o < r; ++o)
          t[i + o] =
            (e & (255 << (8 * (n ? o : 1 - o)))) >>> (8 * (n ? o : 1 - o));
      }
      function j(t, e, i, n) {
        e < 0 && (e = 4294967295 + e + 1);
        for (var o = 0, r = Math.min(t.length - i, 4); o < r; ++o)
          t[i + o] = (e >>> (8 * (n ? o : 3 - o))) & 255;
      }
      function U(t, e, i, n, o, r) {
        if (i + n > t.length) throw new RangeError("Index out of range");
        if (i < 0) throw new RangeError("Index out of range");
      }
      function F(t, e, i, n, o) {
        return (
          o || U(t, e, i, 4, 3.4028234663852886e38, -3.4028234663852886e38),
          J.write(t, e, i, n, 23, 4),
          i + 4
        );
      }
      function z(t, e, i, n, o) {
        return (
          o || U(t, e, i, 8, 1.7976931348623157e308, -1.7976931348623157e308),
          J.write(t, e, i, n, 52, 8),
          i + 8
        );
      }
      function q(t) {
        if (((t = H(t).replace(tt, "")), t.length < 2)) return "";
        for (; t.length % 4 != 0; ) t += "=";
        return t;
      }
      function H(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
      }
      function V(t) {
        return t < 16 ? "0" + t.toString(16) : t.toString(16);
      }
      function W(t, e) {
        e = e || 1 / 0;
        for (var i, n = t.length, o = null, r = [], s = 0; s < n; ++s) {
          if ((i = t.charCodeAt(s)) > 55295 && i < 57344) {
            if (!o) {
              if (i > 56319) {
                (e -= 3) > -1 && r.push(239, 191, 189);
                continue;
              }
              if (s + 1 === n) {
                (e -= 3) > -1 && r.push(239, 191, 189);
                continue;
              }
              o = i;
              continue;
            }
            if (i < 56320) {
              (e -= 3) > -1 && r.push(239, 191, 189), (o = i);
              continue;
            }
            i = 65536 + (((o - 55296) << 10) | (i - 56320));
          } else o && (e -= 3) > -1 && r.push(239, 191, 189);
          if (((o = null), i < 128)) {
            if ((e -= 1) < 0) break;
            r.push(i);
          } else if (i < 2048) {
            if ((e -= 2) < 0) break;
            r.push((i >> 6) | 192, (63 & i) | 128);
          } else if (i < 65536) {
            if ((e -= 3) < 0) break;
            r.push((i >> 12) | 224, ((i >> 6) & 63) | 128, (63 & i) | 128);
          } else {
            if (!(i < 1114112)) throw new Error("Invalid code point");
            if ((e -= 4) < 0) break;
            r.push(
              (i >> 18) | 240,
              ((i >> 12) & 63) | 128,
              ((i >> 6) & 63) | 128,
              (63 & i) | 128
            );
          }
        }
        return r;
      }
      function N(t) {
        for (var e = [], i = 0; i < t.length; ++i)
          e.push(255 & t.charCodeAt(i));
        return e;
      }
      function Y(t, e) {
        for (var i, n, o, r = [], s = 0; s < t.length && !((e -= 2) < 0); ++s)
          (i = t.charCodeAt(s)),
            (n = i >> 8),
            (o = i % 256),
            r.push(o),
            r.push(n);
        return r;
      }
      function G(t) {
        return Q.toByteArray(q(t));
      }
      function X(t, e, i, n) {
        for (var o = 0; o < n && !(o + i >= e.length || o >= t.length); ++o)
          e[o + i] = t[o];
        return o;
      }
      function K(t) {
        return t !== t;
      } /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
      var Q = i(37),
        J = i(38),
        Z = i(39);
      (e.Buffer = r),
        (e.SlowBuffer = g),
        (e.INSPECT_MAX_BYTES = 50),
        (r.TYPED_ARRAY_SUPPORT =
          void 0 !== t.TYPED_ARRAY_SUPPORT
            ? t.TYPED_ARRAY_SUPPORT
            : (function() {
                try {
                  var t = new Uint8Array(1);
                  return (
                    (t.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function() {
                        return 42;
                      }
                    }),
                    42 === t.foo() &&
                      "function" == typeof t.subarray &&
                      0 === t.subarray(1, 1).byteLength
                  );
                } catch (t) {
                  return !1;
                }
              })()),
        (e.kMaxLength = n()),
        (r.poolSize = 8192),
        (r._augment = function(t) {
          return (t.__proto__ = r.prototype), t;
        }),
        (r.from = function(t, e, i) {
          return s(null, t, e, i);
        }),
        r.TYPED_ARRAY_SUPPORT &&
          ((r.prototype.__proto__ = Uint8Array.prototype),
          (r.__proto__ = Uint8Array),
          "undefined" != typeof Symbol &&
            Symbol.species &&
            r[Symbol.species] === r &&
            Object.defineProperty(r, Symbol.species, {
              value: null,
              configurable: !0
            })),
        (r.alloc = function(t, e, i) {
          return h(null, t, e, i);
        }),
        (r.allocUnsafe = function(t) {
          return c(null, t);
        }),
        (r.allocUnsafeSlow = function(t) {
          return c(null, t);
        }),
        (r.isBuffer = function(t) {
          return !(null == t || !t._isBuffer);
        }),
        (r.compare = function(t, e) {
          if (!r.isBuffer(t) || !r.isBuffer(e))
            throw new TypeError("Arguments must be Buffers");
          if (t === e) return 0;
          for (
            var i = t.length, n = e.length, o = 0, s = Math.min(i, n);
            o < s;
            ++o
          )
            if (t[o] !== e[o]) {
              (i = t[o]), (n = e[o]);
              break;
            }
          return i < n ? -1 : n < i ? 1 : 0;
        }),
        (r.isEncoding = function(t) {
          switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (r.concat = function(t, e) {
          if (!Z(t))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return r.alloc(0);
          var i;
          if (void 0 === e)
            for (e = 0, i = 0; i < t.length; ++i) e += t[i].length;
          var n = r.allocUnsafe(e),
            o = 0;
          for (i = 0; i < t.length; ++i) {
            var s = t[i];
            if (!r.isBuffer(s))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            s.copy(n, o), (o += s.length);
          }
          return n;
        }),
        (r.byteLength = y),
        (r.prototype._isBuffer = !0),
        (r.prototype.swap16 = function() {
          var t = this.length;
          if (t % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var e = 0; e < t; e += 2) v(this, e, e + 1);
          return this;
        }),
        (r.prototype.swap32 = function() {
          var t = this.length;
          if (t % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var e = 0; e < t; e += 4)
            v(this, e, e + 3), v(this, e + 1, e + 2);
          return this;
        }),
        (r.prototype.swap64 = function() {
          var t = this.length;
          if (t % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var e = 0; e < t; e += 8)
            v(this, e, e + 7),
              v(this, e + 1, e + 6),
              v(this, e + 2, e + 5),
              v(this, e + 3, e + 4);
          return this;
        }),
        (r.prototype.toString = function() {
          var t = 0 | this.length;
          return 0 === t
            ? ""
            : 0 === arguments.length ? T(this, 0, t) : _.apply(this, arguments);
        }),
        (r.prototype.equals = function(t) {
          if (!r.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
          return this === t || 0 === r.compare(this, t);
        }),
        (r.prototype.inspect = function() {
          var t = "",
            i = e.INSPECT_MAX_BYTES;
          return (
            this.length > 0 &&
              ((t = this.toString("hex", 0, i)
                .match(/.{2}/g)
                .join(" ")),
              this.length > i && (t += " ... ")),
            "<Buffer " + t + ">"
          );
        }),
        (r.prototype.compare = function(t, e, i, n, o) {
          if (!r.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
          if (
            (void 0 === e && (e = 0),
            void 0 === i && (i = t ? t.length : 0),
            void 0 === n && (n = 0),
            void 0 === o && (o = this.length),
            e < 0 || i > t.length || n < 0 || o > this.length)
          )
            throw new RangeError("out of range index");
          if (n >= o && e >= i) return 0;
          if (n >= o) return -1;
          if (e >= i) return 1;
          if (((e >>>= 0), (i >>>= 0), (n >>>= 0), (o >>>= 0), this === t))
            return 0;
          for (
            var s = o - n,
              a = i - e,
              h = Math.min(s, a),
              c = this.slice(n, o),
              l = t.slice(e, i),
              u = 0;
            u < h;
            ++u
          )
            if (c[u] !== l[u]) {
              (s = c[u]), (a = l[u]);
              break;
            }
          return s < a ? -1 : a < s ? 1 : 0;
        }),
        (r.prototype.includes = function(t, e, i) {
          return -1 !== this.indexOf(t, e, i);
        }),
        (r.prototype.indexOf = function(t, e, i) {
          return m(this, t, e, i, !0);
        }),
        (r.prototype.lastIndexOf = function(t, e, i) {
          return m(this, t, e, i, !1);
        }),
        (r.prototype.write = function(t, e, i, n) {
          if (void 0 === e) (n = "utf8"), (i = this.length), (e = 0);
          else if (void 0 === i && "string" == typeof e)
            (n = e), (i = this.length), (e = 0);
          else {
            if (!isFinite(e))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            (e |= 0),
              isFinite(i)
                ? ((i |= 0), void 0 === n && (n = "utf8"))
                : ((n = i), (i = void 0));
          }
          var o = this.length - e;
          if (
            ((void 0 === i || i > o) && (i = o),
            (t.length > 0 && (i < 0 || e < 0)) || e > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");
          for (var r = !1; ; )
            switch (n) {
              case "hex":
                return w(this, t, e, i);
              case "utf8":
              case "utf-8":
                return x(this, t, e, i);
              case "ascii":
                return P(this, t, e, i);
              case "latin1":
              case "binary":
                return C(this, t, e, i);
              case "base64":
                return A(this, t, e, i);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return S(this, t, e, i);
              default:
                if (r) throw new TypeError("Unknown encoding: " + n);
                (n = ("" + n).toLowerCase()), (r = !0);
            }
        }),
        (r.prototype.toJSON = function() {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
          };
        });
      var $ = 4096;
      (r.prototype.slice = function(t, e) {
        var i = this.length;
        (t = ~~t),
          (e = void 0 === e ? i : ~~e),
          t < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i),
          e < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i),
          e < t && (e = t);
        var n;
        if (r.TYPED_ARRAY_SUPPORT)
          (n = this.subarray(t, e)), (n.__proto__ = r.prototype);
        else {
          var o = e - t;
          n = new r(o, void 0);
          for (var s = 0; s < o; ++s) n[s] = this[s + t];
        }
        return n;
      }),
        (r.prototype.readUIntLE = function(t, e, i) {
          (t |= 0), (e |= 0), i || k(t, e, this.length);
          for (var n = this[t], o = 1, r = 0; ++r < e && (o *= 256); )
            n += this[t + r] * o;
          return n;
        }),
        (r.prototype.readUIntBE = function(t, e, i) {
          (t |= 0), (e |= 0), i || k(t, e, this.length);
          for (var n = this[t + --e], o = 1; e > 0 && (o *= 256); )
            n += this[t + --e] * o;
          return n;
        }),
        (r.prototype.readUInt8 = function(t, e) {
          return e || k(t, 1, this.length), this[t];
        }),
        (r.prototype.readUInt16LE = function(t, e) {
          return e || k(t, 2, this.length), this[t] | (this[t + 1] << 8);
        }),
        (r.prototype.readUInt16BE = function(t, e) {
          return e || k(t, 2, this.length), (this[t] << 8) | this[t + 1];
        }),
        (r.prototype.readUInt32LE = function(t, e) {
          return (
            e || k(t, 4, this.length),
            (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
              16777216 * this[t + 3]
          );
        }),
        (r.prototype.readUInt32BE = function(t, e) {
          return (
            e || k(t, 4, this.length),
            16777216 * this[t] +
              ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
          );
        }),
        (r.prototype.readIntLE = function(t, e, i) {
          (t |= 0), (e |= 0), i || k(t, e, this.length);
          for (var n = this[t], o = 1, r = 0; ++r < e && (o *= 256); )
            n += this[t + r] * o;
          return (o *= 128), n >= o && (n -= Math.pow(2, 8 * e)), n;
        }),
        (r.prototype.readIntBE = function(t, e, i) {
          (t |= 0), (e |= 0), i || k(t, e, this.length);
          for (var n = e, o = 1, r = this[t + --n]; n > 0 && (o *= 256); )
            r += this[t + --n] * o;
          return (o *= 128), r >= o && (r -= Math.pow(2, 8 * e)), r;
        }),
        (r.prototype.readInt8 = function(t, e) {
          return (
            e || k(t, 1, this.length),
            128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
          );
        }),
        (r.prototype.readInt16LE = function(t, e) {
          e || k(t, 2, this.length);
          var i = this[t] | (this[t + 1] << 8);
          return 32768 & i ? 4294901760 | i : i;
        }),
        (r.prototype.readInt16BE = function(t, e) {
          e || k(t, 2, this.length);
          var i = this[t + 1] | (this[t] << 8);
          return 32768 & i ? 4294901760 | i : i;
        }),
        (r.prototype.readInt32LE = function(t, e) {
          return (
            e || k(t, 4, this.length),
            this[t] |
              (this[t + 1] << 8) |
              (this[t + 2] << 16) |
              (this[t + 3] << 24)
          );
        }),
        (r.prototype.readInt32BE = function(t, e) {
          return (
            e || k(t, 4, this.length),
            (this[t] << 24) |
              (this[t + 1] << 16) |
              (this[t + 2] << 8) |
              this[t + 3]
          );
        }),
        (r.prototype.readFloatLE = function(t, e) {
          return e || k(t, 4, this.length), J.read(this, t, !0, 23, 4);
        }),
        (r.prototype.readFloatBE = function(t, e) {
          return e || k(t, 4, this.length), J.read(this, t, !1, 23, 4);
        }),
        (r.prototype.readDoubleLE = function(t, e) {
          return e || k(t, 8, this.length), J.read(this, t, !0, 52, 8);
        }),
        (r.prototype.readDoubleBE = function(t, e) {
          return e || k(t, 8, this.length), J.read(this, t, !1, 52, 8);
        }),
        (r.prototype.writeUIntLE = function(t, e, i, n) {
          if (((t = +t), (e |= 0), (i |= 0), !n)) {
            B(this, t, e, i, Math.pow(2, 8 * i) - 1, 0);
          }
          var o = 1,
            r = 0;
          for (this[e] = 255 & t; ++r < i && (o *= 256); )
            this[e + r] = (t / o) & 255;
          return e + i;
        }),
        (r.prototype.writeUIntBE = function(t, e, i, n) {
          if (((t = +t), (e |= 0), (i |= 0), !n)) {
            B(this, t, e, i, Math.pow(2, 8 * i) - 1, 0);
          }
          var o = i - 1,
            r = 1;
          for (this[e + o] = 255 & t; --o >= 0 && (r *= 256); )
            this[e + o] = (t / r) & 255;
          return e + i;
        }),
        (r.prototype.writeUInt8 = function(t, e, i) {
          return (
            (t = +t),
            (e |= 0),
            i || B(this, t, e, 1, 255, 0),
            r.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
            (this[e] = 255 & t),
            e + 1
          );
        }),
        (r.prototype.writeUInt16LE = function(t, e, i) {
          return (
            (t = +t),
            (e |= 0),
            i || B(this, t, e, 2, 65535, 0),
            r.TYPED_ARRAY_SUPPORT
              ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
              : L(this, t, e, !0),
            e + 2
          );
        }),
        (r.prototype.writeUInt16BE = function(t, e, i) {
          return (
            (t = +t),
            (e |= 0),
            i || B(this, t, e, 2, 65535, 0),
            r.TYPED_ARRAY_SUPPORT
              ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
              : L(this, t, e, !1),
            e + 2
          );
        }),
        (r.prototype.writeUInt32LE = function(t, e, i) {
          return (
            (t = +t),
            (e |= 0),
            i || B(this, t, e, 4, 4294967295, 0),
            r.TYPED_ARRAY_SUPPORT
              ? ((this[e + 3] = t >>> 24),
                (this[e + 2] = t >>> 16),
                (this[e + 1] = t >>> 8),
                (this[e] = 255 & t))
              : j(this, t, e, !0),
            e + 4
          );
        }),
        (r.prototype.writeUInt32BE = function(t, e, i) {
          return (
            (t = +t),
            (e |= 0),
            i || B(this, t, e, 4, 4294967295, 0),
            r.TYPED_ARRAY_SUPPORT
              ? ((this[e] = t >>> 24),
                (this[e + 1] = t >>> 16),
                (this[e + 2] = t >>> 8),
                (this[e + 3] = 255 & t))
              : j(this, t, e, !1),
            e + 4
          );
        }),
        (r.prototype.writeIntLE = function(t, e, i, n) {
          if (((t = +t), (e |= 0), !n)) {
            var o = Math.pow(2, 8 * i - 1);
            B(this, t, e, i, o - 1, -o);
          }
          var r = 0,
            s = 1,
            a = 0;
          for (this[e] = 255 & t; ++r < i && (s *= 256); )
            t < 0 && 0 === a && 0 !== this[e + r - 1] && (a = 1),
              (this[e + r] = (((t / s) >> 0) - a) & 255);
          return e + i;
        }),
        (r.prototype.writeIntBE = function(t, e, i, n) {
          if (((t = +t), (e |= 0), !n)) {
            var o = Math.pow(2, 8 * i - 1);
            B(this, t, e, i, o - 1, -o);
          }
          var r = i - 1,
            s = 1,
            a = 0;
          for (this[e + r] = 255 & t; --r >= 0 && (s *= 256); )
            t < 0 && 0 === a && 0 !== this[e + r + 1] && (a = 1),
              (this[e + r] = (((t / s) >> 0) - a) & 255);
          return e + i;
        }),
        (r.prototype.writeInt8 = function(t, e, i) {
          return (
            (t = +t),
            (e |= 0),
            i || B(this, t, e, 1, 127, -128),
            r.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          );
        }),
        (r.prototype.writeInt16LE = function(t, e, i) {
          return (
            (t = +t),
            (e |= 0),
            i || B(this, t, e, 2, 32767, -32768),
            r.TYPED_ARRAY_SUPPORT
              ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
              : L(this, t, e, !0),
            e + 2
          );
        }),
        (r.prototype.writeInt16BE = function(t, e, i) {
          return (
            (t = +t),
            (e |= 0),
            i || B(this, t, e, 2, 32767, -32768),
            r.TYPED_ARRAY_SUPPORT
              ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
              : L(this, t, e, !1),
            e + 2
          );
        }),
        (r.prototype.writeInt32LE = function(t, e, i) {
          return (
            (t = +t),
            (e |= 0),
            i || B(this, t, e, 4, 2147483647, -2147483648),
            r.TYPED_ARRAY_SUPPORT
              ? ((this[e] = 255 & t),
                (this[e + 1] = t >>> 8),
                (this[e + 2] = t >>> 16),
                (this[e + 3] = t >>> 24))
              : j(this, t, e, !0),
            e + 4
          );
        }),
        (r.prototype.writeInt32BE = function(t, e, i) {
          return (
            (t = +t),
            (e |= 0),
            i || B(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            r.TYPED_ARRAY_SUPPORT
              ? ((this[e] = t >>> 24),
                (this[e + 1] = t >>> 16),
                (this[e + 2] = t >>> 8),
                (this[e + 3] = 255 & t))
              : j(this, t, e, !1),
            e + 4
          );
        }),
        (r.prototype.writeFloatLE = function(t, e, i) {
          return F(this, t, e, !0, i);
        }),
        (r.prototype.writeFloatBE = function(t, e, i) {
          return F(this, t, e, !1, i);
        }),
        (r.prototype.writeDoubleLE = function(t, e, i) {
          return z(this, t, e, !0, i);
        }),
        (r.prototype.writeDoubleBE = function(t, e, i) {
          return z(this, t, e, !1, i);
        }),
        (r.prototype.copy = function(t, e, i, n) {
          if (
            (i || (i = 0),
            n || 0 === n || (n = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            n > 0 && n < i && (n = i),
            n === i)
          )
            return 0;
          if (0 === t.length || 0 === this.length) return 0;
          if (e < 0) throw new RangeError("targetStart out of bounds");
          if (i < 0 || i >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (n < 0) throw new RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length),
            t.length - e < n - i && (n = t.length - e + i);
          var o,
            s = n - i;
          if (this === t && i < e && e < n)
            for (o = s - 1; o >= 0; --o) t[o + e] = this[o + i];
          else if (s < 1e3 || !r.TYPED_ARRAY_SUPPORT)
            for (o = 0; o < s; ++o) t[o + e] = this[o + i];
          else Uint8Array.prototype.set.call(t, this.subarray(i, i + s), e);
          return s;
        }),
        (r.prototype.fill = function(t, e, i, n) {
          if ("string" == typeof t) {
            if (
              ("string" == typeof e
                ? ((n = e), (e = 0), (i = this.length))
                : "string" == typeof i && ((n = i), (i = this.length)),
              1 === t.length)
            ) {
              var o = t.charCodeAt(0);
              o < 256 && (t = o);
            }
            if (void 0 !== n && "string" != typeof n)
              throw new TypeError("encoding must be a string");
            if ("string" == typeof n && !r.isEncoding(n))
              throw new TypeError("Unknown encoding: " + n);
          } else "number" == typeof t && (t &= 255);
          if (e < 0 || this.length < e || this.length < i)
            throw new RangeError("Out of range index");
          if (i <= e) return this;
          (e >>>= 0), (i = void 0 === i ? this.length : i >>> 0), t || (t = 0);
          var s;
          if ("number" == typeof t) for (s = e; s < i; ++s) this[s] = t;
          else {
            var a = r.isBuffer(t) ? t : W(new r(t, n).toString()),
              h = a.length;
            for (s = 0; s < i - e; ++s) this[s + e] = a[s % h];
          }
          return this;
        });
      var tt = /[^+\/0-9A-Za-z-_]/g;
    }.call(e, i(36)));
  },
  function(t, e) {
    var i;
    i = (function() {
      return this;
    })();
    try {
      i = i || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" == typeof window && (i = window);
    }
    t.exports = i;
  },
  function(t, e, i) {
    "use strict";
    function n(t) {
      var e = t.length;
      if (e % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      return "=" === t[e - 2] ? 2 : "=" === t[e - 1] ? 1 : 0;
    }
    function o(t) {
      return 3 * t.length / 4 - n(t);
    }
    function r(t) {
      var e,
        i,
        o,
        r,
        s,
        a = t.length;
      (r = n(t)), (s = new u(3 * a / 4 - r)), (i = r > 0 ? a - 4 : a);
      var h = 0;
      for (e = 0; e < i; e += 4)
        (o =
          (l[t.charCodeAt(e)] << 18) |
          (l[t.charCodeAt(e + 1)] << 12) |
          (l[t.charCodeAt(e + 2)] << 6) |
          l[t.charCodeAt(e + 3)]),
          (s[h++] = (o >> 16) & 255),
          (s[h++] = (o >> 8) & 255),
          (s[h++] = 255 & o);
      return (
        2 === r
          ? ((o = (l[t.charCodeAt(e)] << 2) | (l[t.charCodeAt(e + 1)] >> 4)),
            (s[h++] = 255 & o))
          : 1 === r &&
            ((o =
              (l[t.charCodeAt(e)] << 10) |
              (l[t.charCodeAt(e + 1)] << 4) |
              (l[t.charCodeAt(e + 2)] >> 2)),
            (s[h++] = (o >> 8) & 255),
            (s[h++] = 255 & o)),
        s
      );
    }
    function s(t) {
      return (
        c[(t >> 18) & 63] + c[(t >> 12) & 63] + c[(t >> 6) & 63] + c[63 & t]
      );
    }
    function a(t, e, i) {
      for (var n, o = [], r = e; r < i; r += 3)
        (n =
          ((t[r] << 16) & 16711680) +
          ((t[r + 1] << 8) & 65280) +
          (255 & t[r + 2])),
          o.push(s(n));
      return o.join("");
    }
    function h(t) {
      for (
        var e, i = t.length, n = i % 3, o = "", r = [], s = 0, h = i - n;
        s < h;
        s += 16383
      )
        r.push(a(t, s, s + 16383 > h ? h : s + 16383));
      return (
        1 === n
          ? ((e = t[i - 1]),
            (o += c[e >> 2]),
            (o += c[(e << 4) & 63]),
            (o += "=="))
          : 2 === n &&
            ((e = (t[i - 2] << 8) + t[i - 1]),
            (o += c[e >> 10]),
            (o += c[(e >> 4) & 63]),
            (o += c[(e << 2) & 63]),
            (o += "=")),
        r.push(o),
        r.join("")
      );
    }
    (e.byteLength = o), (e.toByteArray = r), (e.fromByteArray = h);
    for (
      var c = [],
        l = [],
        u = "undefined" != typeof Uint8Array ? Uint8Array : Array,
        p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        f = 0,
        d = p.length;
      f < d;
      ++f
    )
      (c[f] = p[f]), (l[p.charCodeAt(f)] = f);
    (l["-".charCodeAt(0)] = 62), (l["_".charCodeAt(0)] = 63);
  },
  function(t, e) {
    (e.read = function(t, e, i, n, o) {
      var r,
        s,
        a = 8 * o - n - 1,
        h = (1 << a) - 1,
        c = h >> 1,
        l = -7,
        u = i ? o - 1 : 0,
        p = i ? -1 : 1,
        f = t[e + u];
      for (
        u += p, r = f & ((1 << -l) - 1), f >>= -l, l += a;
        l > 0;
        r = 256 * r + t[e + u], u += p, l -= 8
      );
      for (
        s = r & ((1 << -l) - 1), r >>= -l, l += n;
        l > 0;
        s = 256 * s + t[e + u], u += p, l -= 8
      );
      if (0 === r) r = 1 - c;
      else {
        if (r === h) return s ? NaN : 1 / 0 * (f ? -1 : 1);
        (s += Math.pow(2, n)), (r -= c);
      }
      return (f ? -1 : 1) * s * Math.pow(2, r - n);
    }),
      (e.write = function(t, e, i, n, o, r) {
        var s,
          a,
          h,
          c = 8 * r - o - 1,
          l = (1 << c) - 1,
          u = l >> 1,
          p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          f = n ? 0 : r - 1,
          d = n ? 1 : -1,
          g = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
        for (
          e = Math.abs(e),
            isNaN(e) || e === 1 / 0
              ? ((a = isNaN(e) ? 1 : 0), (s = l))
              : ((s = Math.floor(Math.log(e) / Math.LN2)),
                e * (h = Math.pow(2, -s)) < 1 && (s--, (h *= 2)),
                (e += s + u >= 1 ? p / h : p * Math.pow(2, 1 - u)),
                e * h >= 2 && (s++, (h /= 2)),
                s + u >= l
                  ? ((a = 0), (s = l))
                  : s + u >= 1
                    ? ((a = (e * h - 1) * Math.pow(2, o)), (s += u))
                    : ((a = e * Math.pow(2, u - 1) * Math.pow(2, o)), (s = 0)));
          o >= 8;
          t[i + f] = 255 & a, f += d, a /= 256, o -= 8
        );
        for (
          s = (s << o) | a, c += o;
          c > 0;
          t[i + f] = 255 & s, f += d, s /= 256, c -= 8
        );
        t[i + f - d] |= 128 * g;
      });
  },
  function(t, e) {
    var i = {}.toString;
    t.exports =
      Array.isArray ||
      function(t) {
        return "[object Array]" == i.call(t);
      };
  },
  function(t, e, i) {
    "use strict";
    var n = (function() {
      function t(t) {
        void 0 === t && (t = !1),
          (this.running = !1),
          (this.now =
            ("undefined" != typeof window &&
              window.performance &&
              window.performance.now &&
              window.performance.now.bind(window.performance)) ||
            Date.now),
          this.start(t);
      }
      return (
        (t.prototype.start = function(t) {
          void 0 === t && (t = !1),
            (this.deltaTime = 0),
            (this.currentTime = this.now()),
            (this.elapsedTime = 0),
            (this.running = !0),
            t && (this._interval = setInterval(this.tick.bind(this), 1e3 / 60));
        }),
        (t.prototype.stop = function() {
          (this.running = !1), this._interval && clearInterval(this._interval);
        }),
        (t.prototype.tick = function(t) {
          void 0 === t && (t = this.now()),
            (this.deltaTime = t - this.currentTime),
            (this.currentTime = t),
            (this.elapsedTime += this.deltaTime);
        }),
        t
      );
    })();
    t.exports = n;
  },
  function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(42);
    e.DeltaContainer = n.DeltaContainer;
  },
  function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(43),
      o = (function() {
        function t(t) {
          (this.listeners = []),
            (this.matcherPlaceholders = {
              ":id": /^([a-zA-Z0-9\-_]+)$/,
              ":number": /^([0-9]+)$/,
              ":string": /^(\w+)$/,
              ":axis": /^([xyz])$/,
              ":*": /(.*)/
            }),
            (this.data = t),
            this.reset();
        }
        return (
          (t.prototype.set = function(t) {
            var e = n.compare(this.data, t);
            return this.checkPatches(e), (this.data = t), e;
          }),
          (t.prototype.registerPlaceholder = function(t, e) {
            this.matcherPlaceholders[t] = e;
          }),
          (t.prototype.listen = function(t, e) {
            var i,
              n = this;
            "function" == typeof t ? ((i = []), (e = t)) : (i = t.split("/")),
              e.length > 1 &&
                console.warn(".listen() accepts only one parameter.");
            var o = {
              callback: e,
              rawRules: i,
              rules: i.map(function(t) {
                return "string" == typeof t
                  ? 0 === t.indexOf(":")
                    ? n.matcherPlaceholders[t] || n.matcherPlaceholders[":*"]
                    : new RegExp("^" + t + "$")
                  : t;
              })
            };
            return (
              0 === i.length
                ? (this.defaultListener = o)
                : this.listeners.push(o),
              o
            );
          }),
          (t.prototype.removeListener = function(t) {
            for (var e = this.listeners.length - 1; e >= 0; e--)
              this.listeners[e] === t && this.listeners.splice(e, 1);
          }),
          (t.prototype.removeAllListeners = function() {
            this.reset();
          }),
          (t.prototype.checkPatches = function(t) {
            for (var e = t.length - 1; e >= 0; e--) {
              for (var i = !1, n = 0, o = this.listeners.length; n < o; n++) {
                var r = this.listeners[n],
                  s = r && this.getPathVariables(t[e], r);
                s &&
                  (r.callback({
                    path: s,
                    rawPath: t[e].path,
                    operation: t[e].operation,
                    value: t[e].value
                  }),
                  (i = !0));
              }
              !i && this.defaultListener && this.defaultListener.callback(t[e]);
            }
          }),
          (t.prototype.getPathVariables = function(t, e) {
            if (t.path.length !== e.rules.length) return !1;
            for (var i = {}, n = 0, o = e.rules.length; n < o; n++) {
              var r = t.path[n].match(e.rules[n]);
              if (!r || 0 === r.length || r.length > 2) return !1;
              ":" === e.rawRules[n].substr(0, 1) &&
                (i[e.rawRules[n].substr(1)] = r[1]);
            }
            return i;
          }),
          (t.prototype.reset = function() {
            this.listeners = [];
          }),
          t
        );
      })();
    e.DeltaContainer = o;
  },
  function(t, e, i) {
    "use strict";
    function n(t, e) {
      var i = [];
      return s(t, e, i, []), i;
    }
    function o(t, e) {
      var i = t.slice();
      return i.push(e), i;
    }
    function r(t) {
      if (Array.isArray(t)) {
        for (var e = new Array(t.length), i = 0; i < e.length; i++)
          e[i] = "" + i;
        return e;
      }
      if (Object.keys) return Object.keys(t);
      var n = [];
      for (var o in t) t.hasOwnProperty(o) && n.push(o);
      return n;
    }
    function s(t, e, i, n) {
      for (var a = r(e), h = r(t), c = !1, l = h.length - 1; l >= 0; l--) {
        var u = h[l],
          p = t[u];
        if (
          !e.hasOwnProperty(u) ||
          (void 0 === e[u] && void 0 !== p && !1 === Array.isArray(e))
        )
          i.push({ operation: "remove", path: o(n, u) }), (c = !0);
        else {
          var f = e[u];
          "object" == typeof p && null != p && "object" == typeof f && null != f
            ? s(p, f, i, o(n, u))
            : p !== f &&
              (!0, i.push({ operation: "replace", path: o(n, u), value: f }));
        }
      }
      if (c || a.length != h.length)
        for (var l = 0; l < a.length; l++) {
          var u = a[l];
          if (!t.hasOwnProperty(u) && void 0 !== e[u]) {
            var f = e[u],
              d = o(n, u);
            "object" == typeof f && null != f && s({}, f, i, d),
              i.push({ operation: "add", path: d, value: f });
          }
        }
    }
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.compare = n);
  },
  function(t, e) {
    !(function(e, i) {
      void 0 !== t && t.exports ? (t.exports = i()) : (e.fossilDelta = i());
    })(this, function() {
      "use strict";
      function t() {
        (this.a = 0), (this.b = 0), (this.i = 0), (this.z = new Array(s));
      }
      function e(t) {
        (this.a = t), (this.pos = 0);
      }
      function i() {
        this.a = [];
      }
      function n(t) {
        var e, i;
        for (e = 1, i = 64; t >= i; e++, i <<= 6);
        return e;
      }
      function o(t) {
        for (var e = 0, i = 0, n = 0, o = 0, r = 0, s = t.length; s >= 16; )
          (e = (e + t[r + 0]) | 0),
            (i = (i + t[r + 1]) | 0),
            (n = (n + t[r + 2]) | 0),
            (o = (o + t[r + 3]) | 0),
            (e = (e + t[r + 4]) | 0),
            (i = (i + t[r + 5]) | 0),
            (n = (n + t[r + 6]) | 0),
            (o = (o + t[r + 7]) | 0),
            (e = (e + t[r + 8]) | 0),
            (i = (i + t[r + 9]) | 0),
            (n = (n + t[r + 10]) | 0),
            (o = (o + t[r + 11]) | 0),
            (e = (e + t[r + 12]) | 0),
            (i = (i + t[r + 13]) | 0),
            (n = (n + t[r + 14]) | 0),
            (o = (o + t[r + 15]) | 0),
            (r += 16),
            (s -= 16);
        for (; s >= 4; )
          (e = (e + t[r + 0]) | 0),
            (i = (i + t[r + 1]) | 0),
            (n = (n + t[r + 2]) | 0),
            (o = (o + t[r + 3]) | 0),
            (r += 4),
            (s -= 4);
        switch (((o =
          (((((o + (n << 8)) | 0) + (i << 16)) | 0) + (e << 24)) | 0),
        s)) {
          case 3:
            o = (o + (t[r + 2] << 8)) | 0;
          case 2:
            o = (o + (t[r + 1] << 16)) | 0;
          case 1:
            o = (o + (t[r + 0] << 24)) | 0;
        }
        return o >>> 0;
      }
      var r = {},
        s = 16;
      (t.prototype.init = function(t, e) {
        var i,
          n,
          o = 0,
          r = 0;
        for (i = 0; i < s; i++)
          (n = t[e + i]),
            (o = (o + n) & 65535),
            (r = (r + (s - i) * n) & 65535),
            (this.z[i] = n);
        (this.a = 65535 & o), (this.b = 65535 & r), (this.i = 0);
      }),
        (t.prototype.next = function(t) {
          var e = this.z[this.i];
          (this.z[this.i] = t),
            (this.i = (this.i + 1) & (s - 1)),
            (this.a = (this.a - e + t) & 65535),
            (this.b = (this.b - s * e + this.a) & 65535);
        }),
        (t.prototype.value = function() {
          return ((65535 & this.a) | ((65535 & this.b) << 16)) >>> 0;
        });
      var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~"
          .split("")
          .map(function(t) {
            return t.charCodeAt(0);
          }),
        h = [
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          -1,
          -1,
          -1,
          -1,
          36,
          -1,
          37,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          46,
          47,
          48,
          49,
          50,
          51,
          52,
          53,
          54,
          55,
          56,
          57,
          58,
          59,
          60,
          61,
          62,
          -1,
          -1,
          -1,
          63,
          -1
        ];
      return (
        (e.prototype.haveBytes = function() {
          return this.pos < this.a.length;
        }),
        (e.prototype.getByte = function() {
          var t = this.a[this.pos];
          if (++this.pos > this.a.length) throw new RangeError("out of bounds");
          return t;
        }),
        (e.prototype.getChar = function() {
          return String.fromCharCode(this.getByte());
        }),
        (e.prototype.getInt = function() {
          for (
            var t, e = 0;
            this.haveBytes() && (t = h[127 & this.getByte()]) >= 0;

          )
            e = (e << 6) + t;
          return this.pos--, e >>> 0;
        }),
        (i.prototype.toArray = function() {
          return this.a;
        }),
        (i.prototype.putByte = function(t) {
          this.a.push(255 & t);
        }),
        (i.prototype.putChar = function(t) {
          this.putByte(t.charCodeAt(0));
        }),
        (i.prototype.putInt = function(t) {
          var e,
            i,
            n = [];
          if (0 === t) return void this.putChar("0");
          for (e = 0; t > 0; e++, t >>>= 6) n.push(a[63 & t]);
          for (i = e - 1; i >= 0; i--) this.putByte(n[i]);
        }),
        (i.prototype.putArray = function(t, e, i) {
          for (var n = e; n < i; n++) this.a.push(t[n]);
        }),
        (r.create = function(e, r) {
          var a,
            h = new i(),
            c = r.length,
            l = e.length,
            u = -1;
          if ((h.putInt(c), h.putChar("\n"), l <= s))
            return (
              h.putInt(c),
              h.putChar(":"),
              h.putArray(r, 0, c),
              h.putInt(o(r)),
              h.putChar(";"),
              h.toArray()
            );
          var p = Math.ceil(l / s),
            f = new Array(p),
            d = new Array(p);
          for (a = 0; a < f.length; a++) f[a] = -1;
          for (a = 0; a < d.length; a++) d[a] = -1;
          var g,
            y = new t();
          for (a = 0; a < l - s; a += s)
            y.init(e, a),
              (g = y.value() % p),
              (f[a / s] = d[g]),
              (d[g] = a / s);
          for (var _, v, m, b, w, x = 0; x + s < c; )
            for (b = 0, w = 0, y.init(r, x), a = 0, m = 0; ; ) {
              var P = 250;
              for (g = y.value() % p, v = d[g]; v >= 0 && P-- > 0; ) {
                var C, A, S, E, T, M, O, R;
                for (
                  _ = v * s, E = 0, M = _, O = x + a;
                  M < l && O < c && e[M] === r[O];
                  E++, M++, O++
                );
                for (
                  E--, T = 1;
                  T < _ && T <= a && e[_ - T] === r[x + a - T];
                  T++
                );
                T--,
                  (A = _ - T),
                  (C = E + T + 1),
                  (S = a - T),
                  (R = n(a - T) + n(C) + n(A) + 3),
                  C >= R && C > m && ((m = C), (b = _ - T), (w = S)),
                  (v = f[v]);
              }
              if (m > 0) {
                w > 0 &&
                  (h.putInt(w),
                  h.putChar(":"),
                  h.putArray(r, x, x + w),
                  (x += w)),
                  (x += m),
                  h.putInt(m),
                  h.putChar("@"),
                  h.putInt(b),
                  h.putChar(","),
                  b + m - 1 > u && (u = b + m - 1),
                  (m = 0);
                break;
              }
              if (x + a + s >= c) {
                h.putInt(c - x),
                  h.putChar(":"),
                  h.putArray(r, x, x + c - x),
                  (x = c);
                break;
              }
              y.next(r[x + a + s]), a++;
            }
          return (
            x < c &&
              (h.putInt(c - x), h.putChar(":"), h.putArray(r, x, x + c - x)),
            h.putInt(o(r)),
            h.putChar(";"),
            h.toArray()
          );
        }),
        (r.outputSize = function(t) {
          var i = new e(t),
            n = i.getInt();
          if ("\n" !== i.getChar())
            throw new Error("size integer not terminated by '\\n'");
          return n;
        }),
        (r.apply = function(t, n, r) {
          var s,
            a = 0,
            h = new e(n),
            c = t.length,
            l = n.length;
          if (((s = h.getInt()), "\n" !== h.getChar()))
            throw new Error("size integer not terminated by '\\n'");
          for (var u = new i(); h.haveBytes(); ) {
            var p, f;
            switch (((p = h.getInt()), h.getChar())) {
              case "@":
                if (((f = h.getInt()), h.haveBytes() && "," !== h.getChar()))
                  throw new Error("copy command not terminated by ','");
                if ((a += p) > s)
                  throw new Error("copy exceeds output file size");
                if (f + p > c)
                  throw new Error("copy extends past end of input");
                u.putArray(t, f, f + p);
                break;
              case ":":
                if ((a += p) > s)
                  throw new Error(
                    "insert command gives an output larger than predicted"
                  );
                if (p > l)
                  throw new Error("insert count exceeds size of delta");
                u.putArray(h.a, h.pos, h.pos + p), (h.pos += p);
                break;
              case ";":
                var d = u.toArray();
                if ((!r || !1 !== r.verifyChecksum) && p !== o(d))
                  throw new Error("bad checksum");
                if (a !== s)
                  throw new Error(
                    "generated size does not match predicted size"
                  );
                return d;
              default:
                throw new Error("unknown delta operator");
            }
          }
          throw new Error("unterminated delta");
        }),
        r
      );
    });
  },
  function(t, e, i) {
    "use strict";
    var n =
      (this && this.__extends) ||
      (function() {
        var t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(t, e) {
              t.__proto__ = e;
            }) ||
          function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
          };
        return function(e, i) {
          function n() {
            this.constructor = e;
          }
          t(e, i),
            (e.prototype =
              null === i
                ? Object.create(i)
                : ((n.prototype = i.prototype), new n()));
        };
      })();
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(46),
      r = i(5),
      s = (function(t) {
        function e(e, i) {
          void 0 === i && (i = {});
          var n = t.call(this, e) || this;
          return (n._enqueuedCalls = []), (n.binaryType = "arraybuffer"), n;
        }
        return (
          n(e, t),
          (e.prototype.onOpenCallback = function(e) {
            if (
              (t.prototype.onOpenCallback.call(this),
              this._enqueuedCalls.length > 0)
            )
              for (var i = 0; i < this._enqueuedCalls.length; i++) {
                var n = this._enqueuedCalls[i],
                  o = n[0],
                  r = n[1];
                this[o].apply(this, r);
              }
          }),
          (e.prototype.send = function(e) {
            if (this.ws.readyState == WebSocket.OPEN)
              return t.prototype.send.call(this, r.encode(e));
            console.warn(
              "colyseus.js: trying to send data while in " +
                this.ws.readyState +
                " state"
            ),
              this._enqueuedCalls.push(["send", [e]]);
          }),
          e
        );
      })(o.default);
    e.Connection = s;
  },
  function(t, e, i) {
    "use strict";
    function n(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = (function() {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      r = i(47).createBackoff,
      s = (function() {
        function t(e, i) {
          var o =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          n(this, t),
            (this.url = e),
            (this.protocols = i),
            (this.reconnectEnabled = !0),
            (this.listeners = {}),
            (this.backoff = r(o.backoff || "exponential", o)),
            (this.backoff.onReady = this.onBackoffReady.bind(this)),
            this.open();
        }
        return (
          o(t, [
            {
              key: "open",
              value: function() {
                var t =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                this.isReconnect = t;
                var e = this.ws && this.ws.binaryType;
                (this.ws = new WebSocket(this.url, this.protocols)),
                  (this.ws.onclose = this.onCloseCallback.bind(this)),
                  (this.ws.onerror = this.onErrorCallback.bind(this)),
                  (this.ws.onmessage = this.onMessageCallback.bind(this)),
                  (this.ws.onopen = this.onOpenCallback.bind(this)),
                  e && (this.ws.binaryType = e);
              }
            },
            {
              key: "onBackoffReady",
              value: function(t, e) {
                this.open(!0);
              }
            },
            {
              key: "onCloseCallback",
              value: function(t) {
                !this.isReconnect &&
                  this.listeners.onclose &&
                  this.listeners.onclose.apply(null, arguments),
                  this.reconnectEnabled &&
                    t.code < 3e3 &&
                    this.backoff.backoff();
              }
            },
            {
              key: "onErrorCallback",
              value: function() {
                this.listeners.onerror &&
                  this.listeners.onerror.apply(null, arguments);
              }
            },
            {
              key: "onMessageCallback",
              value: function() {
                this.listeners.onmessage &&
                  this.listeners.onmessage.apply(null, arguments);
              }
            },
            {
              key: "onOpenCallback",
              value: function() {
                this.listeners.onopen &&
                  this.listeners.onopen.apply(null, arguments),
                  this.isReconnect &&
                    this.listeners.onreconnect &&
                    this.listeners.onreconnect.apply(null, arguments),
                  (this.isReconnect = !1);
              }
            },
            {
              key: "close",
              value: function(t, e) {
                void 0 === t && (t = 1e3),
                  (this.reconnectEnabled = !1),
                  this.ws.close(t, e);
              }
            },
            {
              key: "send",
              value: function(t) {
                this.ws.send(t);
              }
            },
            {
              key: "bufferedAmount",
              get: function() {
                return this.ws.bufferedAmount;
              }
            },
            {
              key: "readyState",
              get: function() {
                return this.ws.readyState;
              }
            },
            {
              key: "binaryType",
              get: function() {
                return this.ws.binaryType;
              },
              set: function(t) {
                this.ws.binaryType = t;
              }
            },
            {
              key: "extensions",
              get: function() {
                return this.ws.extensions;
              },
              set: function(t) {
                this.ws.extensions = t;
              }
            },
            {
              key: "protocol",
              get: function() {
                return this.ws.protocol;
              },
              set: function(t) {
                this.ws.protocol = t;
              }
            },
            {
              key: "onclose",
              set: function(t) {
                this.listeners.onclose = t;
              },
              get: function() {
                return this.listeners.onclose;
              }
            },
            {
              key: "onerror",
              set: function(t) {
                this.listeners.onerror = t;
              },
              get: function() {
                return this.listeners.onerror;
              }
            },
            {
              key: "onmessage",
              set: function(t) {
                this.listeners.onmessage = t;
              },
              get: function() {
                return this.listeners.onmessage;
              }
            },
            {
              key: "onopen",
              set: function(t) {
                this.listeners.onopen = t;
              },
              get: function() {
                return this.listeners.onopen;
              }
            },
            {
              key: "onreconnect",
              set: function(t) {
                this.listeners.onreconnect = t;
              },
              get: function() {
                return this.listeners.onreconnect;
              }
            }
          ]),
          t
        );
      })();
    (s.CONNECTING = WebSocket.CONNECTING),
      (s.OPEN = WebSocket.OPEN),
      (s.CLOSING = WebSocket.CLOSING),
      (s.CLOSED = WebSocket.CLOSED),
      (e.default = s);
  },
  function(t, e, i) {
    "use strict";
    function n(t, e) {
      return new o(r[t], e);
    }
    function o(t, e) {
      (this.func = t),
        (this.attempts = 0),
        (this.delay = void 0 !== e.initialDelay ? e.initialDelay : 100);
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.createBackoff = n);
    var r = {
      exponential: function(t, e) {
        return Math.floor(Math.random() * Math.pow(2, t) * e);
      },
      fibonacci: function(t, e) {
        var i = 1;
        if (t > i)
          for (var n = 1, i = 2, o = 2; o < t; o++) {
            var r = n + i;
            (n = i), (i = r);
          }
        return Math.floor(Math.random() * i * e);
      }
    };
    o.prototype.backoff = function() {
      setTimeout(this.onReady, this.func(++this.attempts, this.delay));
    };
  },
  function(t, e, i) {
    "use strict";
    function n(t, e, i, n, o) {
      "var" === e.holderType
        ? (t[i] = n)
        : "key" === e.holderType && (t[i] = o);
    }
    function o(t, e, i, o) {
      for (var r in e) n(t, e[r], r, i[r], o);
    }
    function r(t, e, i) {
      void 0 === i && (i = 0);
      for (
        var n = t, o = 0, r = e.length;
        o < r + i && "object" == typeof n[e[o]];
        o++
      )
        n = n[e[o]];
      return n;
    }
    function s(t, e, i, n, o) {
      return function(o) {
        if ("add" === o.operation) {
          var r = new e.type();
          for (var s in o.value) r[s] = o.value[s];
          c.bindListeners(e.type.listeners, t, r),
            (i[e.variable] = r),
            e.addCallback && e.addCallback.call(n, n, r, o);
        } else
          "replace" === o.operation
            ? (n[this.rawRules[0]][e.variable] = o.value)
            : "remove" === o.operation &&
              (e.removeCallback &&
                e.removeCallback.call(n, n, i[e.variable][o.path.id], o),
              delete i[e.variable]);
      };
    }
    function a(t, e, i, s, a) {
      return function(a) {
        var h = r(s, a.rawPath);
        if ("add" === a.operation) {
          var l = new e.type();
          Object.defineProperty(l, "__mapParent", {
            value: r(s, a.rawPath, -2),
            enumerable: !1,
            configurable: !0,
            writable: !0
          }),
            c.bindListeners(e.type.listeners, t, l),
            (h[a.path.id] = l),
            o(l, e.type.properties, a.value, a.path.id),
            e.addCallback &&
              e.addCallback.call(l.__mapParent, l.__mapParent, l, a);
        } else
          "replace" === a.operation
            ? n(h, e, e.variable, a.value)
            : "remove" === a.operation &&
              (e.removeCallback &&
                e.removeCallback.call(h.__mapParent, h.__mapParent, h, a),
              delete i[e.variable][a.path.id]);
      };
    }
    function h(t, e, i, o, s) {
      return function(t) {
        var i = r(o, t.rawPath);
        "remove" !== t.operation
          ? n(i, e, e.variable, t.value)
          : "remove" === t.operation && delete i[e.variable];
      };
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var c = i(16);
    (e.objectListener = s), (e.mapListener = a), (e.varListener = h);
  },
  function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return f;
    });
    var n = i(0),
      o = (i.n(n), i(17)),
      r = i.n(o),
      s = i(8),
      a = i(22),
      h =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
          return function(e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })(),
      c = i(18),
      l = (new r.a(c, o.TiledMapFormat.JSON), i(19)),
      u = i(20),
      p = i(21),
      f = (function(t) {
        function e() {
          var e = this,
            i = {
              width: 1e3,
              height: 800,
              displayMode: n.DisplayMode.Container,
              scrollPreventionMode: n.ScrollPreventionMode.All,
              canvasElementId: "game",
              backgroundColor: n.Color.fromHex("#5c9830")
            };
          (e = t.call(this, i) || this),
            console.log(JSON.stringify(c)),
            (n.Physics.collisionResolutionStrategy =
              n.CollisionResolutionStrategy.RigidBody),
            (n.Physics.defaultMass = 100),
            n.Physics.acc.setTo(0, 800),
            (n.Physics.collisionPasses = 10),
            (n.Physics.integrationSteps = 10),
            (n.Physics.checkForFastBodies = !0),
            (n.Physics.enabled = !0),
            (e.heartTexture = new n.Texture(l)),
            (e.runningTexture = new n.Texture(u)),
            (e.jumpingTexture = new n.Texture(p)),
            (e.vent = new n.EventDispatcher({}));
          var o = function(t) {
            console.log(t), e.goToScene("livegame");
          };
          return e.vent.on("toGame", o), e;
        }
        return (
          h(e, t),
          (e.prototype.switchScene = function(t) {
            switch (t) {
              case "toGame":
                this.vent.emit("toGame", new n.GameEvent());
            }
          }),
          (e.prototype.start = function(e) {
            var i = this,
              n = [];
            for (var o in s.a)
              o &&
                (e.addResource(s.a[o]),
                -1 !== o.search("charSheet") &&
                  (console.log(s.a[o]), n.push(o)));
            return (
              this.add("mainmenu", new a.d()),
              this.add("leaderboard", new a.b()),
              this.add("friends", new a.a()),
              this.add("settings", new a.f()),
              t.prototype.start.call(this, e).then(function() {
                i.goToScene("mainmenu");
              })
            );
          }),
          e
        );
      })(n.Engine);
  },
  function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return h;
    });
    var n = i(0),
      o = (i.n(n), i(1)),
      r = i(2),
      s = i(61),
      a =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
          return function(e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })(),
      h = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          a(e, t),
          (e.prototype.onInitialize = function(t) {
            var e = new s.a();
            this.add(e);
            var i = new o.d();
            this.add(i);
            var n = new o.c();
            this.add(n);
            var a = new o.f();
            this.add(a);
            var h = new r.b("Welcome to ForestRun! (v0.0.4)", 100, 100);
            this.add(h);
            var c = new r.c("Enjoy your stay :)", 120, 150);
            this.add(c);
          }),
          (e.prototype.onActivate = function() {}),
          (e.prototype.onDeactivate = function() {}),
          e
        );
      })(n.Scene);
  },
  function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return r;
    });
    var n = i(0),
      o = (i.n(n),
      (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
          return function(e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })()),
      r = (function(t) {
        function e(e, i, n, o, r, s) {
          var a = t.call(this, e, i, n, o) || this;
          return (a.color = r), (a._func = s), a;
        }
        return (
          o(e, t),
          (e.prototype.onInitialize = function(e) {
            var i = this;
            t.prototype.onInitialize.call(this, e),
              this.on("pointerup", function(t) {
                i._func(e);
              });
          }),
          e
        );
      })(n.UIActor);
  },
  function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return s;
    });
    var n = i(0),
      o = (i.n(n), i(1)),
      r =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
          return function(e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })(),
      s = (function(t) {
        function e() {
          var e =
            t.call(
              this,
              100,
              500,
              400,
              100,
              new n.Color(0, 255, 0, 1),
              function(t) {
                t.goToScene("livegame");
              }
            ) || this;
          (e.color = new n.Color(0, 255, 0, 1)), (e.enableCapturePointer = !0);
          var i = new n.Label();
          return (
            (i.x = 20),
            (i.y = 60),
            (i.fontFamily = "Arial"),
            (i.fontSize = 36),
            (i.fontUnit = n.FontUnit.Px),
            (i.text = "Start Game"),
            (i.color = n.Color.Black),
            (i.textAlign = n.TextAlign.Left),
            e.add(i),
            e
          );
        }
        return r(e, t), e;
      })(o.b);
  },
  function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return s;
    });
    var n = i(0),
      o = (i.n(n), i(1)),
      r =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
          return function(e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })(),
      s = (function(t) {
        function e() {
          var e =
            t.call(
              this,
              100,
              320,
              400,
              100,
              new n.Color(0, 255, 0, 1),
              function(t) {
                t.goToScene("leaderboard"), console.log("HIT");
              }
            ) || this;
          (e.color = new n.Color(0, 255, 0, 1)), (e.enableCapturePointer = !0);
          var i = new n.Label();
          return (
            (i.x = 20),
            (i.y = 60),
            (i.fontFamily = "Arial"),
            (i.fontSize = 36),
            (i.fontUnit = n.FontUnit.Px),
            (i.text = "Leaderboard"),
            (i.color = n.Color.Black),
            (i.textAlign = n.TextAlign.Left),
            e.add(i),
            e
          );
        }
        return r(e, t), e;
      })(o.b);
  },
  function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return s;
    });
    var n = i(0),
      o = (i.n(n), i(1)),
      r =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
          return function(e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })(),
      s = (function(t) {
        function e() {
          var e =
            t.call(
              this,
              100,
              440,
              400,
              100,
              new n.Color(0, 255, 0, 1),
              function(t) {
                t.goToScene("friends");
              }
            ) || this;
          (e.color = new n.Color(0, 255, 0, 1)), (e.enableCapturePointer = !0);
          var i = new n.Label();
          return (
            (i.x = 20),
            (i.y = 60),
            (i.fontFamily = "Arial"),
            (i.fontSize = 36),
            (i.fontUnit = n.FontUnit.Px),
            (i.text = "Friends"),
            (i.color = n.Color.Black),
            (i.textAlign = n.TextAlign.Left),
            e.add(i),
            e
          );
        }
        return r(e, t), e;
      })(o.b);
  },
  function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return s;
    });
    var n = i(0),
      o = (i.n(n), i(1)),
      r =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
          return function(e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })(),
      s = (function(t) {
        function e() {
          var e =
            t.call(
              this,
              100,
              560,
              400,
              100,
              new n.Color(0, 255, 0, 1),
              function(t) {
                t.goToScene("settings");
              }
            ) || this;
          (e.color = new n.Color(0, 255, 0, 1)), (e.enableCapturePointer = !0);
          var i = new n.Label();
          return (
            (i.x = 20),
            (i.y = 60),
            (i.fontFamily = "Arial"),
            (i.fontSize = 36),
            (i.fontUnit = n.FontUnit.Px),
            (i.text = "Settings"),
            (i.color = n.Color.Black),
            (i.textAlign = n.TextAlign.Left),
            e.add(i),
            e
          );
        }
        return r(e, t), e;
      })(o.b);
  },
  function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return s;
    });
    var n = i(0),
      o = (i.n(n), i(1)),
      r =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
          return function(e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })(),
      s = (function(t) {
        function e() {
          var e =
            t.call(this, 0, 0, 80, 80, new n.Color(255, 0, 0, 1), function(t) {
              t.goToScene("mainmenu"), console.log("HIT");
            }) || this;
          e.enableCapturePointer = !0;
          var i = new n.Label();
          return (
            (i.x = 20),
            (i.y = 60),
            (i.fontFamily = "Arial"),
            (i.fontSize = 36),
            (i.fontUnit = n.FontUnit.Px),
            (i.text = "<"),
            (i.color = n.Color.Black),
            (i.textAlign = n.TextAlign.Left),
            e.add(i),
            e
          );
        }
        return r(e, t), e;
      })(o.b);
  },
  function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return h;
    });
    var n = i(0),
      o = (i.n(n), i(3)),
      r = i(1),
      s = i(2),
      a =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
          return function(e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })(),
      h = (function(t) {
        function e(e) {
          void 0 === e && (e = !1);
          var i =
            t.call(
              this,
              100,
              300,
              400,
              100,
              new n.Color(0, 0, 255, 1),
              function(t) {
                console.log("READY TAPPED"),
                  (i.isReady = !i.isReady),
                  i.updateState(i.isReady),
                  o.a.send({ action: "SetPlayerReady", payload: i.isReady });
              }
            ) || this;
          return (
            (i.isReady = e),
            i.updateState(i.isReady),
            (i.enableCapturePointer = !0),
            i
          );
        }
        return (
          a(e, t),
          (e.prototype.updateState = function(t) {
            this.buttonText && this.remove(this.buttonText),
              t
                ? ((this.color = n.Color.Yellow),
                  (this.buttonText = new s.a(
                    "Waiting for Others!",
                    n.Color.Black
                  )),
                  this.add(this.buttonText))
                : ((this.color = n.Color.Blue),
                  (this.buttonText = new s.a("Ready Up!", n.Color.White)),
                  this.add(this.buttonText));
          }),
          e
        );
      })(r.b);
  },
  function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return s;
    });
    var n = i(0),
      o = (i.n(n), i(9)),
      r =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
          return function(e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })(),
      s = (function(t) {
        function e(e, i, n) {
          var o = t.call(this, i, n) || this;
          return (o.text = e), o;
        }
        return (
          r(e, t),
          (e.prototype.onInitialize = function(e) {
            t.prototype.onInitialize.call(this, e);
            var i = new n.Label();
            (i.x = 0),
              (i.y = 0),
              (i.fontFamily = "Arial"),
              (i.fontSize = 36),
              (i.fontUnit = n.FontUnit.Px),
              (i.text = this.text),
              (i.color = n.Color.Green),
              (i.textAlign = n.TextAlign.Left),
              this.add(i);
          }),
          e
        );
      })(o.a);
  },
  function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return s;
    });
    var n = i(0),
      o = (i.n(n), i(9)),
      r =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
          return function(e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })(),
      s = (function(t) {
        function e(e, i, n) {
          var o = t.call(this, i, n) || this;
          return (o.text = e), o;
        }
        return (
          r(e, t),
          (e.prototype.onInitialize = function(e) {
            t.prototype.onInitialize.call(this, e);
            var i = new n.Label();
            (i.x = 0),
              (i.y = 0),
              (i.fontFamily = "Arial"),
              (i.fontSize = 24),
              (i.fontUnit = n.FontUnit.Px),
              (i.text = this.text),
              (i.color = n.Color.White),
              (i.textAlign = n.TextAlign.Left),
              this.add(i);
          }),
          e
        );
      })(o.a);
  },
  function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return r;
    });
    var n = i(0),
      o = (i.n(n),
      (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
          return function(e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })()),
      r = (function(t) {
        function e(e, i, o, r) {
          void 0 === o && (o = 20), void 0 === r && (r = 60);
          var s = t.call(this, e, o, r) || this;
          return (
            (s.color = i),
            (s.fontFamily = "Arial"),
            (s.fontSize = 24),
            (s.fontUnit = n.FontUnit.Px),
            (s.textAlign = n.TextAlign.Left),
            s
          );
        }
        return o(e, t), e;
      })(n.Label);
  },
  function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return h;
    });
    var n = i(0),
      o = (i.n(n), i(1)),
      r = i(3),
      s = i(22),
      a =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
          return function(e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })(),
      h = (function(t) {
        function e() {
          var e =
            t.call(
              this,
              100,
              200,
              400,
              100,
              new n.Color(0, 255, 0, 1),
              function(t) {
                r.a
                  .join("lobbies", {
                    name: window.prompt("Enter your nickname") || ""
                  })
                  .then(function() {
                    t.add("prelobby", new s.e()),
                      t.add("livegame", new s.c(t)),
                      t.goToScene("prelobby");
                  });
              }
            ) || this;
          (e.color = new n.Color(0, 255, 0, 1)), (e.enableCapturePointer = !0);
          var i = new n.Label();
          return (
            (i.x = 20),
            (i.y = 60),
            (i.fontFamily = "Arial"),
            (i.fontSize = 36),
            (i.fontUnit = n.FontUnit.Px),
            (i.text = "Find Online Game"),
            (i.color = n.Color.Black),
            (i.textAlign = n.TextAlign.Left),
            e.add(i),
            e
          );
        }
        return a(e, t), e;
      })(o.b);
  },
  function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return l;
    });
    var n = i(0),
      o = (i.n(n), i(3)),
      r = i(63),
      s = i(2),
      a = i(8),
      h = i(66),
      c =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
          return function(e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })(),
      l = (function(t) {
        function e(e) {
          var i = t.call(this, e) || this;
          return (
            (i.runner = void 0),
            (i.otherRunner = void 0),
            (i.checkpoint = void 0),
            (i.connectedRoom = o.a.getConnectedRoom()),
            i
          );
        }
        return (
          c(e, t),
          (e.prototype.update = function(e, i) {
            this.runner &&
              this.camera.move(
                new n.Vector(this.runner.pos.x, this.runner.pos.y),
                0
              ),
              t.prototype.update.call(this, e, i),
              this.connectedRoom && this.runner;
          }),
          (e.prototype.onInitialize = function(t) {
            this.group = new n.Group("livegame", this);
          }),
          (e.prototype.onActivate = function() {
            this.initalizeUI(),
              (this.connectedRoom = o.a.getConnectedRoom()),
              this.connectedRoom &&
                this.connectedRoom.listen("players/:id/:attribute", function(
                  t
                ) {});
            for (
              var t = a.a.map, e = t.getTileMap(), i = t.data.layers[0], s = 0;
              s < i.height;
              s++
            )
              for (var c = 0; c < i.width; c++)
                0 !== i.data[s * i.width + c] &&
                  (e.data[s * i.width + c].solid = !0);
            this.addTileMap(e),
              (this.runner = new r.a(300, 1800, 32, 96)),
              (this.checkpoint = new h.a(
                300,
                1800,
                100,
                100,
                n.Color.fromHex("#FFFF00")
              )),
              this.add(this.checkpoint),
              this.add(this.runner);
          }),
          (e.prototype.onDeactivate = function() {}),
          (e.prototype.initalizeUI = function() {
            var t = new s.b("Welcome to ForestRun! (v0.0.4)", 100, 100),
              e = new s.c("LIVE GAME: USE A, W, D or < ^ > to MOVE", 120, 150);
            this.add(t), this.add(e);
          }),
          e
        );
      })(n.Scene);
  },
  function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return h;
    });
    var n = i(0),
      o = (i.n(n), i(64)),
      r = i(8),
      s = i(65),
      a =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
          return function(e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })(),
      h = (function(t) {
        function e(e, i, o, r) {
          void 0 === o && (o = 32), void 0 === r && (r = 96);
          var s =
            t.call(
              this,
              e || 0,
              i || 450,
              o || 32,
              r || 96,
              n.Color.Red.clone()
            ) || this;
          (s.width = o),
            (s.height = r),
            (s.jumping = 1),
            (s.sprintActive = !1),
            (s.timerSet = !1),
            (s.movementSpeed = 1),
            (s.ducking = !1),
            (s.checkpointx = 300),
            (s.checkpointy = 1800),
            (s.wjTimerSet = !1),
            (s.label2 = new n.Label()),
            (s.clicking = !1),
            (s.itemsPos = 1),
            (s.currentItem = "red square"),
            s.body.useCircleCollision(20),
            (s.collisionType = n.CollisionType.Active),
            (s.collisionArea = s.body.collisionArea),
            (s.body.restitution = 0),
            (s.body.mass = 300),
            (s.body.friction = 100),
            s.onCollidesWith("checkpoint", function(t) {
              s.setCheckpoint();
            });
          var a = 0.016;
          n.Vector.Zero;
          return (
            s.on("precollision", function(t) {
              t.side === n.Side.Bottom &&
                null === t.other &&
                ((t.actor.vel.y = 0),
                (t.actor.pos.y += t.intersection.y),
                (t.actor.pos.y -= n.Physics.acc.y * a * a));
            }),
            s.on("preupdate", function(t) {
              a = t.delta / 1e3;
            }),
            s.on("postupdate", function() {
              a > 0.032 &&
                ((s.vel = s.oldVel), (s.pos = s.oldPos), console.log("reset"));
            }),
            s.on("precollision", function(t) {
              s.ducking || (s.movementSpeed = 1),
                void 0 !== t &&
                  (2 === t.side && (s.jumping = 0),
                  0 !== s.jumping &&
                    ((1 === t.side || t.side) &&
                      (clearTimeout(s.timer),
                      (s.movementSpeed = 1),
                      (s.sprintActive = !1),
                      (s.jumping = -1)),
                    3 === t.side &&
                      (clearTimeout(s.timer),
                      (s.movementSpeed = 1),
                      (s.sprintActive = !1),
                      (s.jumping = -1))));
            }),
            s
          );
        }
        return (
          a(e, t),
          (e.prototype.onInitialize = function(e) {
            t.prototype.onInitialize.call(this, e),
              this.setupAnimationSprites(e),
              (this.members = this.scene.getGroup("livegame").getMembers()),
              (this.height = this.getHeight());
            var i = new n.Label();
            (i.x = 150),
              (i.y = 150),
              (i.fontFamily = "Arial"),
              (i.fontSize = 28),
              (i.fontUnit = n.FontUnit.Px),
              (i.text = "Player 1"),
              (i.color = n.Color.White),
              (i.textAlign = n.TextAlign.Center),
              this.add(i),
              (this.label2.x = 0),
              (this.label2.y = -100),
              (this.label2.fontFamily = "Arial"),
              (this.label2.fontSize = 36),
              (this.label2.fontUnit = n.FontUnit.Px),
              (this.label2.color = n.Color.White),
              (this.label2.textAlign = n.TextAlign.Center),
              this.add(this.label2);
          }),
          (e.prototype.update = function(e, i) {
            var o = this;
            (this.label2.text = "equipped: " + this.currentItem),
              e.input.pointers.primary.on("down", function(t) {
                (t.pointerType !== n.Input.PointerType.Mouse &&
                  t.pointerType !== n.Input.PointerType.Touch) ||
                  o.clicking ||
                  (o.addObstacle(o.itemsPos, t), (o.clicking = !0));
              }),
              e.input.pointers.primary.on("up", function(t) {
                (t.pointerType !== n.Input.PointerType.Mouse &&
                  t.pointerType !== n.Input.PointerType.Touch) ||
                  (o.clicking = !1);
              }),
              e.input.keyboard.on("release", function(t) {
                (40 !== t.key && 83 !== t.key) ||
                  (o.setHeight(o.height),
                  o.wjTimerSet || (o.movementSpeed = 1),
                  (o.ducking = !1)),
                  (37 !== t.key &&
                    65 !== t.key &&
                    39 !== t.key &&
                    68 !== t.key) ||
                    ((o.timerSet = !1),
                    clearTimeout(o.timer),
                    (o.sprintActive = !1),
                    o.ducking || o.wjTimerSet || (o.movementSpeed = 1));
              }),
              (e.input.keyboard.wasPressed(n.Input.Keys.W) ||
                e.input.keyboard.wasPressed(n.Input.Keys.Up)) &&
                (this.jumping
                  ? 1 === this.jumping
                    ? this.doubleJump()
                    : -1 === this.jumping &&
                      this.wallJump(this.movementDirection)
                  : this.jump()),
              (e.input.keyboard.isHeld(n.Input.Keys.A) ||
                e.input.keyboard.isHeld(n.Input.Keys.Left)) &&
                ((this.movementDirection = -1),
                this.jumping > 0 && clearTimeout(this.timer),
                this.sprintActive
                  ? 0 === this.jumping && (this.movementSpeed = 1.5)
                  : this.timerSet ||
                    this.ducking ||
                    0 !== this.jumping ||
                    ((this.timer = setTimeout(function() {
                      o.sprintActive = !0;
                    }, 500)),
                    (this.timerSet = !0)),
                this.moveLeft()),
              (e.input.keyboard.isHeld(n.Input.Keys.D) ||
                e.input.keyboard.isHeld(n.Input.Keys.Right)) &&
                ((this.movementDirection = 1),
                this.jumping > 0 && clearTimeout(this.timer),
                this.sprintActive
                  ? 0 === this.jumping && (this.movementSpeed = 1.5)
                  : this.timerSet ||
                    this.ducking ||
                    0 !== this.jumping ||
                    ((this.timer = setTimeout(function() {
                      o.sprintActive = !0;
                    }, 500)),
                    (this.timerSet = !0)),
                this.moveRight()),
              (e.input.keyboard.wasPressed(n.Input.Keys.S) ||
                e.input.keyboard.wasPressed(n.Input.Keys.Down)) &&
                this.duck(),
              this.pos.y > 2100 && this.die(),
              e.input.keyboard.wasPressed(49) &&
                (window.alert("pressed 1"),
                (this.itemsPos = 1),
                (this.currentItem = "red square")),
              e.input.keyboard.wasPressed(50) &&
                ((this.currentItem = "green square"), (this.itemsPos = 2)),
              e.input.keyboard.wasPressed(51) &&
                ((this.itemsPos = 3), (this.currentItem = "blue square")),
              e.input.keyboard.wasPressed(52) &&
                ((this.itemsPos = 4), (this.currentItem = "orange square")),
              e.input.keyboard.wasPressed(53) &&
                ((this.itemsPos = 5), (this.currentItem = "white square")),
              e.input.keyboard.wasPressed(54) &&
                ((this.itemsPos = 6), (this.currentItem = "large red square")),
              e.input.keyboard.wasPressed(55) &&
                ((this.itemsPos = 7),
                (this.currentItem = "large green square")),
              e.input.keyboard.wasPressed(56) &&
                ((this.itemsPos = 8), (this.currentItem = "large blue square")),
              e.input.keyboard.wasPressed(57) &&
                ((this.itemsPos = 9),
                (this.currentItem = "large orange square")),
              t.prototype.update.call(this, e, i);
          }),
          (e.prototype.die = function() {
            (this.pos.x = this.checkpointx), (this.pos.y = this.checkpointy);
          }),
          (e.prototype.setCheckpoint = function() {
            (this.checkpointx = this.pos.x), (this.checkpointy = this.pos.y);
          }),
          (e.prototype.jump = function() {
            (this.vel.y = -600),
              (this.jumping = 1),
              this.setDrawing(s.a.JumpRight);
          }),
          (e.prototype.doubleJump = function() {
            (this.vel.y = -400), (this.jumping = 2);
          }),
          (e.prototype.wallJump = function(t) {
            var e = this;
            clearTimeout(this.wjTimer),
              (this.vel.y = -600),
              (this.vel.x = 1 === t ? -600 : 600),
              (this.movementSpeed = 0.05),
              (this.wjTimer = setTimeout(function() {
                (e.vel.x = 0), (e.movementSpeed = 1);
              }, 750)),
              (this.wjTimerSet = !0),
              (this.jumping = 2),
              (this.movementDirection *= -1);
          }),
          (e.prototype.moveLeft = function() {
            (this.pos.x -= 10 * this.movementSpeed),
              0 === this.jumping && this.setDrawing(s.a.Left);
          }),
          (e.prototype.moveRight = function() {
            (this.pos.x += 10 * this.movementSpeed),
              0 === this.jumping && this.setDrawing(s.a.Right);
          }),
          (e.prototype.duck = function() {
            var t = this;
            this.sprintActive
              ? (this.setHeight(0.3 * this.height),
                (this.slideTimer = setTimeout(function() {
                  t.setHeight(t.height),
                    (t.movementSpeed = 1),
                    clearTimeout(t.timer),
                    (t.timerSet = !1),
                    (t.sprintActive = !1);
                }, 200)))
              : (clearTimeout(this.timer),
                this.setHeight(0.75 * this.height),
                (this.movementSpeed = 0.5),
                (this.ducking = !0));
          }),
          (e.prototype.addObstacle = function(t, e) {
            var i = new o.a();
            switch (t) {
              case 1:
                i = new o.a(e.x, e.y, 50, 50, n.Color.Red);
                break;
              case 2:
                i = new o.a(e.x, e.y, 50, 50, n.Color.Green);
                break;
              case 3:
                i = new o.a(e.x, e.y, 50, 50, n.Color.Blue);
                break;
              case 4:
                i = new o.a(e.x, e.y, 50, 50, n.Color.Orange);
                break;
              case 5:
                i = new o.a(e.x, e.y, 50, 50, n.Color.White);
                break;
              case 6:
                i = new o.a(e.x, e.y, 100, 100, n.Color.Red);
                break;
              case 7:
                i = new o.a(e.x, e.y, 100, 100, n.Color.Green);
                break;
              case 8:
                i = new o.a(e.x, e.y, 100, 100, n.Color.Blue);
                break;
              case 9:
                i = new o.a(e.x, e.y, 100, 100, n.Color.Orange);
            }
            this.scene.add(i);
          }),
          (e.prototype.setupAnimationSprites = function(t) {
            var e = new n.SpriteSheet(r.a.playerRun, 10, 1, 96, 96),
              i = new n.SpriteSheet(r.a.playerJump, 10, 1, 96, 96),
              o = e.getAnimationBetween(t, 1, 11, 50),
              a = e.getAnimationBetween(t, 1, 11, 50);
            a.flipHorizontal = !0;
            var h = e.getAnimationByIndices(t, [0], 200),
              c = i.getAnimationBetween(t, 0, 11, 100),
              l = i.getAnimationBetween(t, 0, 11, 100);
            (l.flipHorizontal = !0),
              (o.loop = !0),
              (a.loop = !0),
              (h.loop = !0),
              (l.freezeFrame = 0),
              (c.freezeFrame = 11),
              this.addDrawing(s.a.Left, o),
              this.addDrawing(s.a.Right, a),
              this.addDrawing(s.a.Idle, h),
              this.addDrawing(s.a.JumpRight, l),
              this.addDrawing(s.a.JumpLeft, c),
              this.setDrawing(s.a.Idle);
          }),
          e
        );
      })(n.Actor);
  },
  function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return r;
    });
    var n = i(0),
      o = (i.n(n),
      (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
          return function(e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })()),
      r = (function(t) {
        function e(e, i, o, r, s) {
          var a = t.call(this, e, i, o, r, s) || this;
          return (
            (a.collisionType = n.CollisionType.Fixed), (a.body.friction = 10), a
          );
        }
        return o(e, t), e;
      })(n.Actor);
  },
  function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return n;
    });
    var n;
    !(function(t) {
      (t[(t.Idle = 0)] = "Idle"),
        (t[(t.Left = 1)] = "Left"),
        (t[(t.Right = 2)] = "Right"),
        (t[(t.JumpRight = 3)] = "JumpRight"),
        (t[(t.JumpLeft = 4)] = "JumpLeft");
    })(n || (n = {}));
  },
  function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return r;
    });
    var n = i(0),
      o = (i.n(n),
      (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
          return function(e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })()),
      r = (function(t) {
        function e(e, i, o, r, s) {
          var a = t.call(this, e, i, o, r, s) || this;
          return (
            (a.collisionType = n.CollisionType.Passive),
            a.addCollisionGroup("checkpoint"),
            a
          );
        }
        return o(e, t), e;
      })(n.Actor);
  },
  function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return a;
    });
    var n = i(0),
      o = (i.n(n), i(1)),
      r = i(2),
      s =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
          return function(e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })(),
      a = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          s(e, t),
          (e.prototype.onInitialize = function(t) {
            var e = new o.a();
            this.add(e);
            var i = new r.b("This will be your friends", 100, 100);
            this.add(i);
            var n = new r.c("Here will be your friends", 120, 150);
            this.add(n);
          }),
          e
        );
      })(n.Scene);
  },
  function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return a;
    });
    var n = i(0),
      o = (i.n(n), i(1)),
      r = i(2),
      s =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
          return function(e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })(),
      a = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          s(e, t),
          (e.prototype.onInitialize = function(t) {
            var e = new o.a();
            this.add(e);
            var i = new r.b("This will be the Leaderboard", 100, 100);
            this.add(i);
            var n = new r.c("Here will be the stats", 120, 150);
            this.add(n);
          }),
          e
        );
      })(n.Scene);
  },
  function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return a;
    });
    var n = i(0),
      o = (i.n(n), i(1)),
      r = i(2),
      s =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
          return function(e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })(),
      a = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          s(e, t),
          (e.prototype.onInitialize = function(t) {
            var e = new o.a();
            this.add(e);
            var i = new r.b("This will be the settings", 100, 100);
            this.add(i);
            var n = new r.c("Here will be the stuff", 120, 150);
            this.add(n);
          }),
          e
        );
      })(n.Scene);
  },
  function(t, e, i) {
    "use strict";
    var n = i(0),
      o = (i.n(n), i(2)),
      r =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
          return function(e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })();
    !(function(t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      r(e, t),
        (e.prototype.onInitialize = function(t) {
          var e = new o.b("This will be the PostLobby", 100, 100);
          this.add(e);
          var i = new o.c("Here will be stuff", 120, 150);
          this.add(i);
        });
    })(n.Scene);
  },
  function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return c;
    });
    var n = i(0),
      o = (i.n(n), i(3)),
      r = i(72),
      s = i(1),
      a = i(2),
      h =
        (this && this.__extends) ||
        (function() {
          var t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            };
          return function(e, i) {
            function n() {
              this.constructor = e;
            }
            t(e, i),
              (e.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })(),
      c = (function(t) {
        function e() {
          var e = t.call(this) || this;
          return (e.playerIsReady = !1), e;
        }
        return (
          h(e, t),
          (e.prototype.onActivate = function() {
            this.initializeUI(),
              (this.connectedRoom = o.a.getConnectedRoom()),
              console.log("CURRENT ROOM " + this.connectedRoom),
              this.connectedRoom &&
                (r.a.post("CONNECTED TO PRELOBBY!"),
                this.connectedRoom.listen("players/:id/:attribute", function(
                  t
                ) {
                  console.log(JSON.stringify(t));
                  var e = t.path.id,
                    i = t.operation,
                    n = t.path.attribute,
                    o = t.value;
                  "replace" === i &&
                    "ready" === n &&
                    (o
                      ? r.a.post("PLAYER (" + e + ") READY!")
                      : r.a.error("PLAYER (" + e + ") UNREADIED!"));
                }),
                this.connectedRoom.listen("messages/:id/:attribute", function(
                  t
                ) {
                  console.log(t.operation),
                    console.log(t.value),
                    r.a.post("HIT " + t.value);
                }));
          }),
          (e.prototype.onInitialize = function(t) {}),
          (e.prototype.initializeUI = function() {
            var t = new a.b("This will be the PreLobby", 100, 100);
            this.add(t);
            var e = new a.c("Here will be stuff", 120, 150);
            this.add(e);
            var i = new s.e();
            this.add(i);
            var n = new s.g();
            this.add(n);
          }),
          e
        );
      })(n.Scene);
  },
  function(t, e, i) {
    "use strict";
    i.d(e, "a", function() {
      return n;
    });
    var n,
      o = i(73),
      r = i.n(o);
    !(function(t) {
      function e(t) {
        n.post(t, {
          type: "default",
          delay: "10000",
          animationShowClass: "notifier__item--animation-show",
          animationHideClass: "notifier__item--animation-hide"
        });
      }
      function i(t) {
        n.post(t, {
          type: "error",
          delay: "10000",
          animationShowClass: "notifier__item--animation-show",
          animationHideClass: "notifier__item--animation-hide"
        });
      }
      var n = new r.a({ theme: "default", position: "top-right" });
      (t.post = e), (t.error = i);
    })(n || (n = {}));
  },
  function(t, e, i) {
    !(function(e, i) {
      t.exports = i();
    })(0, function() {
      return (function(t) {
        function e(n) {
          if (i[n]) return i[n].exports;
          var o = (i[n] = { exports: {}, id: n, loaded: !1 });
          return (
            t[n].call(o.exports, o, o.exports, e), (o.loaded = !0), o.exports
          );
        }
        var i = {};
        return (e.m = t), (e.c = i), (e.p = ""), e(0);
      })([
        function(t, e, i) {
          var n, o, r;
          !(function(s) {
            if ("object" == typeof t && "object" == typeof t.exports) {
              var a = s(i(1), e);
              void 0 !== a && (t.exports = a);
            } else
              (o = [i, e, i(2)]),
                (n = s),
                void 0 !== (r = "function" == typeof n ? n.apply(e, o) : n) &&
                  (t.exports = r);
          })(function(t, e) {
            "use strict";
            t("./style.scss");
            var i = [],
              n = (function() {
                function t(e) {
                  this.baseOptions = {
                    theme: t.checkOptions(e, "theme") ? e.theme : "default",
                    position: t.checkOptions(e, "position")
                      ? e.position
                      : "top-right"
                  };
                  var i = document.createElement("div");
                  return (
                    i.classList.add("js-notifier"),
                    (i.innerHTML =
                      '<div id="js-notifier-list" class="notifier__list notifier__list--position-' +
                      this.baseOptions.position +
                      " notifier__list--theme-" +
                      this.baseOptions.theme +
                      '"></div>'),
                    document.body.appendChild(i),
                    (this.list = document.getElementById("js-notifier-list")),
                    this
                  );
                }
                return (
                  (t.checkOptions = function(t, e) {
                    return void 0 !== t && t.hasOwnProperty(e);
                  }),
                  (t.prototype.post = function(e, n) {
                    (this.notices = i),
                      (this.message = e),
                      (this.itemOptions = {
                        type: t.checkOptions(n, "type") ? n.type : "default",
                        delay: t.checkOptions(n, "delay") ? n.delay : 3e3,
                        animationShowClass: t.checkOptions(
                          n,
                          "animationShowClass"
                        )
                          ? n.animationShowClass
                          : "notifier__item--animation-show",
                        animationHideClass: t.checkOptions(
                          n,
                          "animationHideClass"
                        )
                          ? n.animationHideClass
                          : "notifier__item--animation-hide"
                      });
                    var o = this.notices.length;
                    return (
                      this.setAction("show", o),
                      this.setAction("activate", o),
                      this.setAction("hide", o),
                      o
                    );
                  }),
                  (t.prototype.setAction = function(t, e) {
                    var i = this;
                    return {
                      activate: function() {
                        i.activateClose(e);
                      },
                      show: function() {
                        i.addNotification(), i.renderNotification(e);
                      },
                      hide: function() {
                        setTimeout(function() {
                          i.removeNotification(e);
                        }, i.itemOptions.delay);
                      }
                    }[t]();
                  }),
                  (t.prototype.addNotification = function() {
                    return this.notices.push({
                      message: this.message,
                      options: this.itemOptions
                    });
                  }),
                  (t.prototype.removeNotification = function(t) {
                    if (void 0 !== this.notices[t]) {
                      var e = this.list.querySelector(
                        "div[data-notice-id='" + t + "']"
                      );
                      void 0 !== e &&
                        (e.classList.remove(
                          this.itemOptions.animationShowClass
                        ),
                        e.classList.add(this.itemOptions.animationHideClass),
                        setTimeout(function() {
                          e.parentNode.removeChild(e);
                        }, 500)),
                        delete this.notices[t];
                    }
                  }),
                  (t.prototype.renderNotification = function(t) {
                    var e = document.createElement("div");
                    return (
                      e.classList.add(
                        "notifier__item",
                        "notifier__item--type-" + this.itemOptions.type,
                        this.itemOptions.animationShowClass
                      ),
                      e.setAttribute("data-notice-id", t.toString()),
                      (e.innerHTML =
                        '<p class="notifier__text">' + this.message + "</p>"),
                      this.list.insertBefore(e, this.list.firstChild)
                    );
                  }),
                  (t.prototype.activateClose = function(t) {
                    var e = this;
                    this.list
                      .querySelector("div[data-notice-id='" + t + "']")
                      .addEventListener("click", function() {
                        return e.removeNotification(t);
                      });
                  }),
                  t
                );
              })();
            (e.__esModule = !0), (e.default = n);
          });
        },
        function(t, e, i) {
          function n(t) {
            return i(o(t));
          }
          function o(t) {
            return (
              r[t] ||
              (function() {
                throw new Error("Cannot find module '" + t + "'.");
              })()
            );
          }
          var r = { "./style.scss": 2 };
          (n.keys = function() {
            return Object.keys(r);
          }),
            (n.resolve = o),
            (t.exports = n),
            (n.id = 1);
        },
        function(t, e, i) {
          var n = i(3);
          "string" == typeof n && (n = [[t.id, n, ""]]);
          i(5)(n, {});
          n.locals && (t.exports = n.locals);
        },
        function(t, e, i) {
          (e = t.exports = i(4)()),
            e.push([
              t.id,
              ".notifier__list{position:fixed;z-index:1000;top:20px;left:auto;right:20px;bottom:auto}.notifier__list--position-top-left{top:20px;left:20px;right:auto;bottom:auto}.notifier__list--position-top-right{top:20px;left:auto;right:20px;bottom:auto}.notifier__list--position-bottom-left{top:auto;left:20px;right:auto;bottom:20px}.notifier__list--position-bottom-right{top:auto;left:auto;right:20px;bottom:20px}.notifier__item{width:200px;padding:15px 25px;margin-bottom:10px;border:1px solid #7dbce0;line-height:1.5;background:#cde8f6;color:#447eaf;cursor:pointer;border-radius:2px}.notifier__item--type-default{background:#cde8f6;border-color:#7dbce0;color:#447eaf}.notifier__item--type-warning{background:#f8f4d5;border-color:#d8cf82;color:#96722e}.notifier__item--type-error{background:#edc8c5;border-color:#be8181;color:#b4302b}.notifier__item--type-success{background:#ddf3d5;border-color:#afcda4;color:#597151}.notifier__item--animation-show{animation:notifier-show .18s cubic-bezier(.175,.885,.32,1.27499),notification-shrink .25s .25s cubic-bezier(.5,0,0,1)}.notifier__item--animation-hide{animation:notifier-hide .25s cubic-bezier(.33859,-.42,1,-.22),notifier-shrink .25s .25s cubic-bezier(.5,0,0,1);animation-fill-mode:forwards}.notifier__text{margin:0;padding:0}@keyframes notifier-shrink{0%{opacity:0;max-height:200px;transform:scale(.8)}to{opacity:0;max-height:0;transform:scale(.8)}}@keyframes notifier-show{0%{opacity:0;transform:perspective(450px) translateY(-30px) rotateX(90deg)}to{opacity:1;transform:perspective(450px) translate(0) rotateX(0deg)}}@keyframes notifier-hide{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}",
              ""
            ]);
        },
        function(t, e) {
          t.exports = function() {
            var t = [];
            return (
              (t.toString = function() {
                for (var t = [], e = 0; e < this.length; e++) {
                  var i = this[e];
                  i[2]
                    ? t.push("@media " + i[2] + "{" + i[1] + "}")
                    : t.push(i[1]);
                }
                return t.join("");
              }),
              (t.i = function(e, i) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var n = {}, o = 0; o < this.length; o++) {
                  var r = this[o][0];
                  "number" == typeof r && (n[r] = !0);
                }
                for (o = 0; o < e.length; o++) {
                  var s = e[o];
                  ("number" == typeof s[0] && n[s[0]]) ||
                    (i && !s[2]
                      ? (s[2] = i)
                      : i && (s[2] = "(" + s[2] + ") and (" + i + ")"),
                    t.push(s));
                }
              }),
              t
            );
          };
        },
        function(t, e, i) {
          function n(t, e) {
            for (var i = 0; i < t.length; i++) {
              var n = t[i],
                o = f[n.id];
              if (o) {
                o.refs++;
                for (var r = 0; r < o.parts.length; r++) o.parts[r](n.parts[r]);
                for (; r < n.parts.length; r++) o.parts.push(c(n.parts[r], e));
              } else {
                for (var s = [], r = 0; r < n.parts.length; r++)
                  s.push(c(n.parts[r], e));
                f[n.id] = { id: n.id, refs: 1, parts: s };
              }
            }
          }
          function o(t) {
            for (var e = [], i = {}, n = 0; n < t.length; n++) {
              var o = t[n],
                r = o[0],
                s = o[1],
                a = o[2],
                h = o[3],
                c = { css: s, media: a, sourceMap: h };
              i[r]
                ? i[r].parts.push(c)
                : e.push((i[r] = { id: r, parts: [c] }));
            }
            return e;
          }
          function r(t, e) {
            var i = y(),
              n = m[m.length - 1];
            if ("top" === t.insertAt)
              n
                ? n.nextSibling
                  ? i.insertBefore(e, n.nextSibling)
                  : i.appendChild(e)
                : i.insertBefore(e, i.firstChild),
                m.push(e);
            else {
              if ("bottom" !== t.insertAt)
                throw new Error(
                  "Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'."
                );
              i.appendChild(e);
            }
          }
          function s(t) {
            t.parentNode.removeChild(t);
            var e = m.indexOf(t);
            e >= 0 && m.splice(e, 1);
          }
          function a(t) {
            var e = document.createElement("style");
            return (e.type = "text/css"), r(t, e), e;
          }
          function h(t) {
            var e = document.createElement("link");
            return (e.rel = "stylesheet"), r(t, e), e;
          }
          function c(t, e) {
            var i, n, o;
            if (e.singleton) {
              var r = v++;
              (i = _ || (_ = a(e))),
                (n = l.bind(null, i, r, !1)),
                (o = l.bind(null, i, r, !0));
            } else
              t.sourceMap &&
              "function" == typeof URL &&
              "function" == typeof URL.createObjectURL &&
              "function" == typeof URL.revokeObjectURL &&
              "function" == typeof Blob &&
              "function" == typeof btoa
                ? ((i = h(e)),
                  (n = p.bind(null, i)),
                  (o = function() {
                    s(i), i.href && URL.revokeObjectURL(i.href);
                  }))
                : ((i = a(e)),
                  (n = u.bind(null, i)),
                  (o = function() {
                    s(i);
                  }));
            return (
              n(t),
              function(e) {
                if (e) {
                  if (
                    e.css === t.css &&
                    e.media === t.media &&
                    e.sourceMap === t.sourceMap
                  )
                    return;
                  n((t = e));
                } else o();
              }
            );
          }
          function l(t, e, i, n) {
            var o = i ? "" : n.css;
            if (t.styleSheet) t.styleSheet.cssText = b(e, o);
            else {
              var r = document.createTextNode(o),
                s = t.childNodes;
              s[e] && t.removeChild(s[e]),
                s.length ? t.insertBefore(r, s[e]) : t.appendChild(r);
            }
          }
          function u(t, e) {
            var i = e.css,
              n = e.media;
            if ((n && t.setAttribute("media", n), t.styleSheet))
              t.styleSheet.cssText = i;
            else {
              for (; t.firstChild; ) t.removeChild(t.firstChild);
              t.appendChild(document.createTextNode(i));
            }
          }
          function p(t, e) {
            var i = e.css,
              n = e.sourceMap;
            n &&
              (i +=
                "\n/*# sourceMappingURL=data:application/json;base64," +
                btoa(unescape(encodeURIComponent(JSON.stringify(n)))) +
                " */");
            var o = new Blob([i], { type: "text/css" }),
              r = t.href;
            (t.href = URL.createObjectURL(o)), r && URL.revokeObjectURL(r);
          }
          var f = {},
            d = function(t) {
              var e;
              return function() {
                return void 0 === e && (e = t.apply(this, arguments)), e;
              };
            },
            g = d(function() {
              return /msie [6-9]\b/.test(
                window.navigator.userAgent.toLowerCase()
              );
            }),
            y = d(function() {
              return document.head || document.getElementsByTagName("head")[0];
            }),
            _ = null,
            v = 0,
            m = [];
          t.exports = function(t, e) {
            if ("object" != typeof document)
              throw new Error(
                "The style-loader cannot be used in a non-browser environment"
              );
            (e = e || {}),
              void 0 === e.singleton && (e.singleton = g()),
              void 0 === e.insertAt && (e.insertAt = "bottom");
            var i = o(t);
            return (
              n(i, e),
              function(t) {
                for (var r = [], s = 0; s < i.length; s++) {
                  var a = i[s],
                    h = f[a.id];
                  h.refs--, r.push(h);
                }
                if (t) {
                  n(o(t), e);
                }
                for (var s = 0; s < r.length; s++) {
                  var h = r[s];
                  if (0 === h.refs) {
                    for (var c = 0; c < h.parts.length; c++) h.parts[c]();
                    delete f[h.id];
                  }
                }
              }
            );
          };
          var b = (function() {
            var t = [];
            return function(e, i) {
              return (t[e] = i), t.filter(Boolean).join("\n");
            };
          })();
        }
      ]);
    });
  }
]);
