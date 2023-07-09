/*
 GSAP 3.12.2
 https://greensock.com

 @license Copyright 2023, GreenSock. All rights reserved.
 Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 @author: Jack Doyle, jack@greensock.com
*/
!function(na, rc) {
    "object" == typeof exports && "undefined" != typeof module ? rc(exports) : "function" == typeof define && define.amd ? define(["exports"], rc) : rc((na = na || self).window = na.window || {});
  }(this, function(na) {
    function rc(c, b) {
      c.prototype = Object.create(b.prototype);
      (c.prototype.constructor = c).__proto__ = b;
    }
    function Cc(c) {
      if (void 0 === c) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return c;
    }
    function Sa(c) {
      return "string" == typeof c;
    }
    function za(c) {
      return "function" == typeof c;
    }
    function sc(c) {
      return "number" == typeof c;
    }
    function cc(c) {
      return "object" == typeof c;
    }
    function Kb() {
      return "undefined" != typeof window;
    }
    function tc(c) {
      return za(c) || Sa(c);
    }
    function ke(c) {
      return (vb = w(c, wb)) && Za;
    }
    function kd(c, b) {
      return console.warn("Invalid property", c, "set to", b, "Missing plugin? gsap.registerPlugin()");
    }
    function He(c, b) {
      return c && (wb[c] = b) && vb && (vb[c] = b) || wb;
    }
    function vd() {
      return 0;
    }
    function le(c) {
      var b, a, g = c[0];
      if (cc(g) || za(g) || (c = [c]), !(b = (g._gsap || {}).harness)) {
        for (a = q.length; a-- && !q[a].targetTest(g);) {
        }
        b = q[a];
      }
      for (a = c.length; a--;) {
        c[a] && (c[a]._gsap || (c[a]._gsap = new Ga(c[a], b))) || c.splice(a, 1);
      }
      return c;
    }
    function Lc(c) {
      return c._gsap || le(oa(c))[0]._gsap;
    }
    function Ie(c, b, a) {
      return (a = c[b]) && za(a) ? c[b]() : void 0 === a && c.getAttribute && c.getAttribute(b) || a;
    }
    function Rb(c, b) {
      return (c = c.split(",")).forEach(b) || c;
    }
    function cb(c) {
      return Math.round(1e5 * c) / 1e5 || 0;
    }
    function xb(c) {
      return Math.round(1e7 * c) / 1e7 || 0;
    }
    function Sb(c, b) {
      var a = b.charAt(0), g = parseFloat(b.substr(2));
      return c = parseFloat(c), "+" === a ? c + g : "-" === a ? c - g : "*" === a ? c * g : c / g;
    }
    function Yc() {
      var c, b, a = uc.length, g = uc.slice(0);
      Je = {};
      for (c = uc.length = 0; c < a; c++) {
        (b = g[c]) && b._lazy && (b.render(b._lazy[0], b._lazy[1], !0)._lazy = 0);
      }
    }
    function Ke(c, b, a, g) {
      uc.length && !yb && Yc();
      c.render(b, a, g || yb && 0 > b && (c._initted || c._startAt));
      uc.length && !yb && Yc();
    }
    function Le(c) {
      var b = parseFloat(c);
      return (b || 0 === b) && 2 > (c + "").match(Rd).length ? b : Sa(c) ? c.trim() : c;
    }
    function Me(c) {
      return c;
    }
    function lb(c, b) {
      for (var a in b) {
        a in c || (c[a] = b[a]);
      }
      return c;
    }
    function wd(c, b) {
      for (var a in b) {
        "__proto__" !== a && "constructor" !== a && "prototype" !== a && (c[a] = cc(b[a]) ? wd(c[a] || (c[a] = {}), b[a]) : b[a]);
      }
      return c;
    }
    function zb(c, b) {
      var a, g = {};
      for (a in c) {
        a in b || (g[a] = c[a]);
      }
      return g;
    }
    function Zc(c) {
      var b = c.parent || Ia, a = c.keyframes ? function(g) {
        return function(f, d) {
          for (var h in d) {
            h in f || "duration" === h && g || "ease" === h || (f[h] = d[h]);
          }
        };
      }(db(c.keyframes)) : lb;
      if (!1 !== c.inherit) {
        for (; b;) {
          a(c, b.vars.defaults), b = b.parent || b._dp;
        }
      }
      return c;
    }
    function $c(c, b, a, g, f) {
      void 0 === a && (a = "_first");
      void 0 === g && (g = "_last");
      var d, h = c[g];
      if (f) {
        for (d = b[f]; h && h[f] > d;) {
          h = h._prev;
        }
      }
      return h ? (b._next = h._next, h._next = b) : (b._next = c[a], c[a] = b), b._next ? b._next._prev = b : c[g] = b, b._prev = h, b.parent = b._dp = c, b;
    }
    function ad(c, b, a, g) {
      void 0 === a && (a = "_first");
      void 0 === g && (g = "_last");
      var f = b._prev, d = b._next;
      f ? f._next = d : c[a] === b && (c[a] = d);
      d ? d._prev = f : c[g] === b && (c[g] = f);
      b._next = b._prev = b.parent = null;
    }
    function Dc(c, b) {
      c.parent && (!b || c.parent.autoRemoveChildren) && c.parent.remove && c.parent.remove(c);
      c._act = 0;
    }
    function qb(c, b) {
      if (c && (!b || b._end > c._dur || 0 > b._start)) {
        for (var a = c; a;) {
          a._dirty = 1, a = a.parent;
        }
      }
      return c;
    }
    function me(c, b, a, g) {
      return c._startAt && (yb ? c._startAt.revert(ne) : c.vars.immediateRender && !c.vars.autoRevert || c._startAt.render(b, !0, g));
    }
    function oe(c) {
      return c._repeat ? E(c._tTime, c = c.duration() + c._rDelay) * c : 0;
    }
    function Sd(c, b) {
      return (c - b._start) * b._ts + (0 <= b._ts ? 0 : b._dirty ? b.totalDuration() : b._tDur);
    }
    function xd(c) {
      return c._end = xb(c._start + (c._tDur / Math.abs(c._ts || c._rts || Ja) || 0));
    }
    function ld(c, b) {
      var a = c._dp;
      return a && a.smoothChildTiming && c._ts && (c._start = xb(a._time - (0 < c._ts ? b / c._ts : ((c._dirty ? c.totalDuration() : c._tDur) - b) / -c._ts)), xd(c), a._dirty || qb(a, c)), c;
    }
    function rb(c, b) {
      var a;
      if ((b._time || !b._dur && b._initted || b._start < c._time && (b._dur || !b.add)) && (a = Sd(c.rawTime(), b), (!b._dur || pa(0, b.totalDuration(), a) - b._tTime > Ja) && b.render(a, !0)), qb(c, b)._dp && c._initted && c._time >= c._dur && c._ts) {
        if (c._dur < c.duration()) {
          for (a = c; a._dp;) {
            0 <= a.rawTime() && a.totalTime(a._tTime), a = a._dp;
          }
        }
        c._zTime = -Ja;
      }
    }
    function Ma(c, b, a, g) {
      return b.parent && Dc(b), b._start = xb((sc(a) ? a : a || c !== Ia ? U(c, a, b) : c._time) + b._delay), b._end = xb(b._start + (b.totalDuration() / Math.abs(b.timeScale()) || 0)), $c(c, b, "_first", "_last", c._sort ? "_start" : 0), H(b) || (c._recent = b), g || rb(c, b), 0 > c._ts && ld(c, c._tTime), c;
    }
    function Td(c, b) {
      return (wb.ScrollTrigger || kd("scrollTrigger", b)) && wb.ScrollTrigger.create(b, c);
    }
    function Ud(c, b, a, g, f) {
      return Fb(c, b, f), c._initted ? !a && c._pt && !yb && (c._dur && !1 !== c.vars.lazy || !c._dur && c.vars.lazy) && Ne !== aa.frame ? (uc.push(c), c._lazy = [f, g], 1) : void 0 : 1;
    }
    function Ec(c, b, a, g) {
      var f = c._repeat;
      b = xb(b) || 0;
      var d = c._tTime / c._tDur;
      return d && !g && (c._time *= b / c._dur), c._dur = b, c._tDur = f ? 0 > f ? 1E10 : xb(b * (f + 1) + c._rDelay * f) : b, 0 < d && !g && ld(c, c._tTime = c._tDur * d), c.parent && xd(c), a || qb(c.parent, c), c;
    }
    function yd(c, b, a) {
      var g = sc(b[1]);
      var f = (g ? 2 : 1) + (2 > c ? 0 : 1), d = b[f];
      if (g && (d.duration = b[1]), d.parent = a, c) {
        for (g = d; a && !("immediateRender" in g);) {
          g = a.vars.defaults || {}, a = !1 !== a.vars.inherit && a.parent;
        }
        d.immediateRender = !1 !== g.immediateRender;
        2 > c ? d.runBackwards = 1 : d.startAt = b[f - 1];
      }
      return new ta(b[0], d, b[1 + f]);
    }
    function dc(c, b) {
      return c || 0 === c ? b(c) : b;
    }
    function Ab(c, b) {
      return Sa(c) && (b = ff.exec(c)) ? b[1] : "";
    }
    function zd(c, b) {
      return c && cc(c) && "length" in c && (!b && !c.length || c.length - 1 in c && cc(c[0])) && !c.nodeType && c !== Zb;
    }
    function Vd(c) {
      return c = oa(c)[0] || console.warn("Invalid scope") || {}, function(b) {
        var a = c.current || c.nativeElement || c;
        return oa(b, a.querySelectorAll ? a : a === c ? console.warn("Invalid scope") || md.createElement("div") : c);
      };
    }
    function Oe(c) {
      return c.sort(function() {
        return .5 - Math.random();
      });
    }
    function pe(c) {
      if (za(c)) {
        return c;
      }
      var b = cc(c) ? c : {each:c}, a = ha(b.ease), g = b.from || 0, f = parseFloat(b.base) || 0, d = {};
      c = 0 < g && 1 > g;
      var h = isNaN(g) || c, k = b.axis, l = g, p = g;
      return Sa(g) ? l = p = {center:.5, edges:.5, end:1}[g] || 0 : !c && h && (l = g[0], p = g[1]), function(u, t, x) {
        var z, y, v = (x || b).length, I = d[v];
        if (!I) {
          if (!(y = "auto" === b.grid ? 0 : (b.grid || [1, Tb])[1])) {
            for (t = -Tb; t < (t = x[y++].getBoundingClientRect().left) && y < v;) {
            }
            y--;
          }
          I = d[v] = [];
          x = h ? Math.min(y, v) * l - .5 : g % y;
          var G = y === Tb ? 0 : h ? v * p / y - .5 : g / y | 0;
          var B = Tb;
          for (z = t = 0; z < v; z++) {
            var F = z % y - x;
            var J = G - (z / y | 0);
            I[z] = F = k ? Math.abs("y" === k ? J : F) : bd(F * F + J * J);
            t < F && (t = F);
            F < B && (B = F);
          }
          "random" === g && Oe(I);
          I.max = t - B;
          I.min = B;
          I.v = v = (parseFloat(b.amount) || parseFloat(b.each) * (v < y ? v - 1 : k ? "y" === k ? v / y : y : Math.max(y, v / y)) || 0) * ("edges" === g ? -1 : 1);
          I.b = 0 > v ? f - v : f;
          I.u = Ab(b.amount || b.each) || 0;
          a = a && 0 > v ? ec(a) : a;
        }
        return v = (I[u] - I.min) / I.max || 0, xb(I.b + (a ? a(v) : v) * I.v) + I.u;
      };
    }
    function qe(c) {
      var b = Math.pow(10, ((c + "").split(".")[1] || "").length);
      return function(a) {
        var g = xb(Math.round(parseFloat(a) / c) * c * b);
        return (g - g % 1) / b + (sc(a) ? 0 : Ab(a));
      };
    }
    function Pe(c, b) {
      var a, g, f = db(c);
      return !f && cc(c) && (a = f = c.radius || Tb, c.values ? (c = oa(c.values), (g = !sc(c[0])) && (a *= a)) : c = qe(c.increment)), dc(b, f ? za(c) ? function(d) {
        return g = c(d), Math.abs(g - d) <= a ? g : d;
      } : function(d) {
        for (var h, k, l = parseFloat(g ? d.x : d), p = parseFloat(g ? d.y : 0), u = Tb, t = 0, x = c.length; x--;) {
          (h = g ? (h = c[x].x - l) * h + (k = c[x].y - p) * k : Math.abs(c[x] - l)) < u && (u = h, t = x);
        }
        return t = !a || u <= a ? c[t] : d, g || t === d || sc(d) ? t : t + Ab(d);
      } : qe(c));
    }
    function re(c, b, a, g) {
      return dc(db(c) ? !b : !0 === a ? !!(a = 0) : !g, function() {
        return db(c) ? c[~~(Math.random() * c.length)] : (a = a || 1E-5, g = 1 > a ? Math.pow(10, (a + "").length - 2) : 1) && Math.floor(Math.round((c - a / 2 + Math.random() * (b - c + .99 * a)) / a) * a * g) / g;
      });
    }
    function Wd(c, b, a) {
      return dc(a, function(g) {
        return c[~~b(g)];
      });
    }
    function Ad(c) {
      for (var b, a, g, f, d = 0, h = ""; ~(b = c.indexOf("random(", d));) {
        g = c.indexOf(")", b), f = "[" === c.charAt(b + 7), a = c.substr(b + 7, g - b - 7).match(f ? Rd : Mc), h += c.substr(d, b - d) + re(f ? a : +a[0], f ? 0 : +a[1], +a[2] || 1E-5), d = g + 1;
      }
      return h + c.substr(d, c.length - d);
    }
    function Qe(c, b, a) {
      var g, f, d;
      c = c.labels;
      var h = Tb;
      for (g in c) {
        0 > (f = c[g] - b) == !!a && f && h > (f = Math.abs(f)) && (d = g, h = f);
      }
      return d;
    }
    function Bd(c) {
      return Dc(c), c.scrollTrigger && c.scrollTrigger.kill(!!yb), 1 > c.progress() && Y(c, "onInterrupt"), c;
    }
    function Xd(c) {
      if (Kb() && c) {
        var b = (c = !c.name && c["default"] || c).name, a = za(c);
        a = b && !a && c.init ? function() {
          this._props = [];
        } : c;
        var g = {init:vd, render:Na, add:vc, kill:Gb, modifier:Cd, rawVars:0}, f = {targetTest:0, get:0, getSetter:Nc, aliases:{}, register:0};
        if (qa(), c !== a) {
          if ($b[b]) {
            return;
          }
          lb(a, lb(zb(c, g), f));
          w(a.prototype, w(g, zb(c, f)));
          $b[a.prop = b] = a;
          c.targetTest && (q.push(a), se[b] = 1);
          b = ("css" === b ? "CSS" : b.charAt(0).toUpperCase() + b.substr(1)) + "Plugin";
        }
        He(b, a);
        c.register && c.register(Za, a, sb);
      } else {
        c && Hb.push(c);
      }
    }
    function te(c, b, a) {
      return (1 > 6 * (c += 0 > c ? 1 : 1 < c ? -1 : 0) ? b + (a - b) * c * 6 : .5 > c ? a : 2 > 3 * c ? b + (a - b) * (2 / 3 - c) * 6 : b) * ia + .5 | 0;
    }
    function eb(c, b, a) {
      var g, f, d, h, k, l, p, u, t = c ? sc(c) ? [c >> 16, c >> 8 & ia, c & ia] : 0 : $a.black;
      if (!t) {
        if ("," === c.substr(-1) && (c = c.substr(0, c.length - 1)), $a[c]) {
          t = $a[c];
        } else if ("#" === c.charAt(0)) {
          if (6 > c.length && (c = "#" + (g = c.charAt(1)) + g + (f = c.charAt(2)) + f + (d = c.charAt(3)) + d + (5 === c.length ? c.charAt(4) + c.charAt(4) : "")), 9 === c.length) {
            return [(t = parseInt(c.substr(1, 6), 16)) >> 16, t >> 8 & ia, t & ia, parseInt(c.substr(7), 16) / 255];
          }
          t = [(c = parseInt(c.substr(1), 16)) >> 16, c >> 8 & ia, c & ia];
        } else if ("hsl" === c.substr(0, 3)) {
          if (t = u = c.match(Mc), b) {
            if (~c.indexOf("=")) {
              return t = c.match(ue), a && 4 > t.length && (t[3] = 1), t;
            }
          } else {
            var x = +t[0] % 360 / 360;
            var z = t[1] / 100;
            g = 2 * (h = t[2] / 100) - (f = .5 >= h ? h * (z + 1) : h + z - h * z);
            3 < t.length && (t[3] *= 1);
            t[0] = te(x + 1 / 3, g, f);
            t[1] = te(x, g, f);
            t[2] = te(x - 1 / 3, g, f);
          }
        } else {
          t = c.match(Mc) || $a.transparent;
        }
        t = t.map(Number);
      }
      return b && !u && (g = t[0] / ia, f = t[1] / ia, d = t[2] / ia, h = ((k = Math.max(g, f, d)) + (l = Math.min(g, f, d))) / 2, k === l ? x = z = 0 : (p = k - l, z = .5 < h ? p / (2 - k - l) : p / (k + l), x = k === g ? (f - d) / p + (f < d ? 6 : 0) : k === f ? (d - g) / p + 2 : (g - f) / p + 4, x *= 60), t[0] = ~~(x + .5), t[1] = ~~(100 * z + .5), t[2] = ~~(100 * h + .5)), a && 4 > t.length && (t[3] = 1), t;
    }
    function Re(c) {
      var b = [], a = [], g = -1;
      return c.split(da).forEach(function(f) {
        f = f.match(Oc) || [];
        b.push.apply(b, f);
        a.push(g += f.length + 1);
      }), b.c = a, b;
    }
    function Yd(c, b, a) {
      var g, f, d, h, k = "", l = (c + k).match(da), p = b ? "hsla(" : "rgba(", u = 0;
      if (!l) {
        return c;
      }
      if (l = l.map(function(t) {
        return (t = eb(t, b, 1)) && p + (b ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
      }), a && (d = Re(c), (g = a.c).join(k) !== d.c.join(k))) {
        for (h = (f = c.replace(da, "1").split(Oc)).length - 1; u < h; u++) {
          k += f[u] + (~g.indexOf(u) ? l.shift() || p + "0,0,0,0)" : (d.length ? d : l.length ? l : a).shift());
        }
      }
      if (!f) {
        for (h = (f = c.split(da)).length - 1; u < h; u++) {
          k += f[u] + l[u];
        }
      }
      return k + f[h];
    }
    function af(c) {
      var b, a = c.join(" ");
      if (da.lastIndex = 0, da.test(a)) {
        return b = T.test(a), c[1] = Yd(c[1], b), c[0] = Yd(c[0], b, Re(c[1])), !0;
      }
    }
    function bf(c) {
      var b = (c + "").split("("), a = S[b[0]];
      return a && 1 < b.length && a.config ? a.config.apply(null, ~c.indexOf("{") ? [function(g) {
        for (var f, d, h = {}, k = g.substr(1, g.length - 3).split(":"), l = k[0], p = 1, u = k.length; p < u; p++) {
          f = k[p], g = p !== u - 1 ? f.lastIndexOf(",") : f.length, d = f.substr(0, g), h[l] = isNaN(d) ? d.replace(cd, "").trim() : +d, l = f.substr(g + 1).trim();
        }
        return h;
      }(b[1])] : function(g) {
        var f = g.indexOf("(") + 1, d = g.indexOf(")"), h = g.indexOf("(", f);
        return g.substring(f, ~h && h < d ? g.indexOf(")", d + 1) : d);
      }(c).split(",").map(Le)) : S._CE && Ub.test(c) ? S._CE("", c) : a;
    }
    function ve(c, b) {
      for (var a, g = c._first; g;) {
        g instanceof Da ? ve(g, b) : !g.vars.yoyoEase || g._yoyo && g._repeat || g._yoyo === b || (g.timeline ? ve(g.timeline, b) : (a = g._ease, g._ease = g._yEase, g._yEase = a, g._yoyo = b)), g = g._next;
      }
    }
    function fb(c, b, a, g) {
      void 0 === a && (a = function(h) {
        return 1 - b(1 - h);
      });
      void 0 === g && (g = function(h) {
        return .5 > h ? b(2 * h) / 2 : 1 - b(2 * (1 - h)) / 2;
      });
      var f, d = {easeIn:b, easeOut:a, easeInOut:g};
      return Rb(c, function(h) {
        for (var k in S[h] = wb[h] = d, S[f = h.toLowerCase()] = a, d) {
          S[f + ("easeIn" === k ? ".in" : "easeOut" === k ? ".out" : ".inOut")] = S[h + "." + k] = d[k];
        }
      }), d;
    }
    function we(c) {
      return function(b) {
        return .5 > b ? (1 - c(1 - 2 * b)) / 2 : .5 + c(2 * (b - .5)) / 2;
      };
    }
    function Lb(c, b, a) {
      function g(k) {
        return 1 === k ? 1 : f * Math.pow(2, -10 * k) * nd((k - h) * d) + 1;
      }
      var f = 1 <= b ? b : 1, d = (a || (c ? .3 : .45)) / (1 > b ? b : 1), h = d / Dd * (Math.asin(1 / f) || 0);
      b = "out" === c ? g : "in" === c ? function(k) {
        return 1 - g(1 - k);
      } : we(g);
      return d = Dd / d, b.config = function(k, l) {
        return Lb(c, k, l);
      }, b;
    }
    function Fc(c, b) {
      function a(f) {
        return f ? --f * f * ((b + 1) * f + b) + 1 : 0;
      }
      void 0 === b && (b = 1.70158);
      var g = "out" === c ? a : "in" === c ? function(f) {
        return 1 - a(1 - f);
      } : we(a);
      return g.config = function(f) {
        return Fc(c, f);
      }, g;
    }
    function Gc(c) {
      var b, a, g, f, d = dd() - Pc, h = !0 === c;
      if (Ed < d && (Hc += d - Zd), (0 < (b = (g = (Pc += d) - Hc) - Mb) || h) && (f = ++mb.frame, od = g - 1E3 * mb.time, mb.time = g /= 1E3, Mb += b + (Xa <= b ? 4 : Xa - b), a = 1), h || (Fd = Ib(Gc)), a) {
        for (Bb = 0; Bb < gb.length; Bb++) {
          gb[Bb](g, od, f, c);
        }
      }
    }
    function pd(c) {
      return c < Vb ? wc * c * c : .7272727272727273 > c ? wc * Math.pow(c - 1.5 / 2.75, 2) + .75 : .9090909090909092 > c ? wc * (c -= 2.25 / 2.75) * c + .9375 : wc * Math.pow(c - 2.625 / 2.75, 2) + .984375;
    }
    function Se(c) {
      this.vars = c;
      this._delay = +c.delay || 0;
      (this._repeat = c.repeat === 1 / 0 ? -2 : c.repeat || 0) && (this._rDelay = c.repeatDelay || 0, this._yoyo = !!c.yoyo || !!c.yoyoEase);
      this._ts = 1;
      Ec(this, +c.duration, 1, 1);
      this.data = c.data;
      Ta && (this._ctx = Ta).data.push(this);
      Qc || aa.wake();
    }
    function ed(c, b, a, g, f, d) {
      var h, k, l;
      if (l = $b[c]) {
        l = h = new $b[c]();
        var p = l.init;
        if (h.rawVars) {
          var u = b[c];
        } else {
          if (b = b[c], za(b) && (b = Rc(b, a, g, f, d)), !cc(b) || b.style && b.nodeType || db(b) || ac(b)) {
            u = Sa(b) ? Rc(b, a, g, f, d) : b;
          } else {
            var t = {};
            for (u in b) {
              t[u] = Rc(b[u], a, g, f, d);
            }
            u = t;
          }
        }
        l = !1 !== p.call(l, f, u, a, g, d);
      }
      if (l && (a._pt = k = new sb(a._pt, f, c, 0, 1, h.render, h, 0, h.priority), a !== n)) {
        for (c = a._ptLookup[a._targets.indexOf(f)], a = h._props.length; a--;) {
          c[h._props[a]] = k;
        }
      }
      return h;
    }
    function xe(c, b, a, g) {
      var f, d = b.ease || g || "power1.inOut";
      if (db(b)) {
        var h = a[c] || (a[c] = []);
        b.forEach(function(k, l) {
          return h.push({t:l / (b.length - 1) * 100, v:k, e:d});
        });
      } else {
        for (f in b) {
          h = a[f] || (a[f] = []), "ease" === f || h.push({t:parseFloat(c), v:b[f], e:d});
        }
      }
    }
    function Gd(c, b, a) {
      return c.setAttribute(b, a);
    }
    function Sc(c, b, a, g) {
      g.mSet(c, b, g.m.call(g.tween, a, g.mt), g);
    }
    function mc(c, b, a, g, f, d, h, k, l) {
      this.t = b;
      this.s = g;
      this.c = f;
      this.p = a;
      this.r = d || Hd;
      this.d = h || this;
      this.set = k || V;
      this.pr = l || 0;
      (this._next = c) && (c._prev = this);
    }
    function ye(c) {
      return (Ea[c] || Tc).map(function(b) {
        return b();
      });
    }
    function ze() {
      var c = Date.now(), b = [];
      2 < c - tb && (ye("matchMediaInit"), hb.forEach(function(a) {
        var g, f, d, h, k = a.queries, l = a.conditions;
        for (f in k) {
          (g = Zb.matchMedia(k[f]).matches) && (d = 1), g !== l[f] && (l[f] = g, h = 1);
        }
        h && (a.revert(), d && b.push(a));
      }), ye("matchMediaRevert"), b.forEach(function(a) {
        return a.onMatch(a);
      }), tb = c, ye("matchMedia"));
    }
    function fd(c, b) {
      this.selector = b && Vd(b);
      this.data = [];
      this._r = [];
      this.isReverted = !1;
      this.id = fc++;
      c && this.add(c);
    }
    function ua(c) {
      this.contexts = [];
      this.scope = c;
    }
    function nc(c, b) {
      return {name:c, rawVars:1, init:function(a, g, f) {
        f._onInit = function(d) {
          var h, k;
          if (Sa(g) && (h = {}, Rb(g, function(l) {
            return h[l] = 1;
          }), g = h), b) {
            for (k in h = {}, g) {
              h[k] = b(g[k]);
            }
            g = h;
          }
          !function(l, p) {
            var u, t, x, z = l._targets;
            for (u in p) {
              for (t = z.length; t--;) {
                if (x = (x = l._ptLookup[t][u]) && x.d) {
                  if (x._pt) {
                    for (x = x._pt; x && x.p !== u && x.op !== u && x.fp !== u;) {
                      x = x._next;
                    }
                  }
                  x && x.modifier && x.modifier(p[u], l, z[t], u);
                }
              }
            }
          }(d, g);
        };
      }};
    }
    function qd(c, b) {
      return b.set(b.t, b.p, Math.round(1E4 * (b.s + b.c * c)) / 1E4 + b.u, b);
    }
    function Te(c, b) {
      return b.set(b.t, b.p, 1 === c ? b.e : Math.round(1E4 * (b.s + b.c * c)) / 1E4 + b.u, b);
    }
    function Wb(c, b) {
      return b.set(b.t, b.p, c ? Math.round(1E4 * (b.s + b.c * c)) / 1E4 + b.u : b.b, b);
    }
    function ub(c, b) {
      var a = b.s + b.c * c;
      b.set(b.t, b.p, ~~(a + (0 > a ? -.5 : .5)) + b.u, b);
    }
    function nb(c, b) {
      return b.set(b.t, b.p, c ? b.e : b.b, b);
    }
    function N(c, b) {
      return b.set(b.t, b.p, 1 !== c ? b.b : b.e, b);
    }
    function Id(c, b, a) {
      return c.style[b] = a;
    }
    function Aa(c, b, a) {
      return c.style.setProperty(b, a);
    }
    function ab(c, b, a) {
      return c._gsap[b] = a;
    }
    function xc(c, b, a) {
      return c._gsap.scaleX = c._gsap.scaleY = a;
    }
    function Ua(c, b, a, g, f) {
      c = c._gsap;
      c.scaleX = c.scaleY = a;
      c.renderTransform(f, c);
    }
    function gd(c, b, a, g, f) {
      c = c._gsap;
      c[b] = a;
      c.renderTransform(f, c);
    }
    function $d(c, b) {
      var a = this, g = this.target, f = g.style;
      if (c in Nb && f) {
        if (this.tfm = this.tfm || {}, "transform" === c) {
          return ob.transform.split(",").forEach(function(d) {
            return $d.call(a, d, b);
          });
        }
        if (~(c = ob[c] || c).indexOf(",") ? c.split(",").forEach(function(d) {
          return a.tfm[d] = yc(g, d);
        }) : this.tfm[c] = g._gsap.x ? g._gsap[c] : yc(g, c), 0 <= this.props.indexOf(Oa)) {
          return;
        }
        g._gsap.svg && (this.svgo = g.getAttribute("data-svg-origin"), this.props.push(gc, b, ""));
        c = Oa;
      }
      (f || b) && this.props.push(c, b, f[c]);
    }
    function ae(c) {
      c.translate && (c.removeProperty("translate"), c.removeProperty("scale"), c.removeProperty("rotate"));
    }
    function Jd() {
      var c, b, a = this.props, g = this.target, f = g.style, d = g._gsap;
      for (c = 0; c < a.length; c += 3) {
        a[c + 1] ? g[a[c]] = a[c + 2] : a[c + 2] ? f[a[c]] = a[c + 2] : f.removeProperty("--" === a[c].substr(0, 2) ? a[c] : a[c].replace(oc, "-$1").toLowerCase());
      }
      if (this.tfm) {
        for (b in this.tfm) {
          d[b] = this.tfm[b];
        }
        d.svg && (d.renderTransform(), g.setAttribute("data-svg-origin", this.svgo || ""));
        (c = Ka()) && c.isStart || f[Oa] || (ae(f), d.uncache = 1);
      }
    }
    function be(c, b) {
      var a = {target:c, props:[], revert:Jd, save:$d};
      return c._gsap || Za.core.getCache(c), b && b.split(",").forEach(function(g) {
        return a.save(g);
      }), a;
    }
    function Kd(c, b) {
      var a = Ob.createElementNS ? Ob.createElementNS((b || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), c) : Ob.createElement(c);
      return a.style ? a : Ob.createElement(c);
    }
    function Ra(c, b, a) {
      var g = getComputedStyle(c);
      return g[b] || g.getPropertyValue(b.replace(oc, "-$1").toLowerCase()) || g.getPropertyValue(b) || !a && Ra(c, Xb(b) || b, 1) || "";
    }
    function Ld() {
      "undefined" != typeof window && window.document && (Md = window, Ob = Md.document, pc = Ob.documentElement, Va = Kd("div") || {style:{}}, Kd("div"), Oa = Xb(Oa), gc = Oa + "Origin", Va.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", pb = !!Xb("perspective"), Ka = Za.core.reverting, hc = 1);
    }
    function Nd(c) {
      var b = Kd("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), a = this.parentNode, g = this.nextSibling, f = this.style.cssText;
      if (pc.appendChild(b), b.appendChild(this), this.style.display = "block", c) {
        try {
          var d = this.getBBox();
          this._gsapBBox = this.getBBox;
          this.getBBox = Nd;
        } catch (h) {
        }
      } else {
        this._gsapBBox && (d = this._gsapBBox());
      }
      return a && (g ? a.insertBefore(this, g) : a.appendChild(this)), pc.removeChild(b), this.style.cssText = f, d;
    }
    function Pb(c, b) {
      for (var a = b.length; a--;) {
        if (c.hasAttribute(b[a])) {
          return c.getAttribute(b[a]);
        }
      }
    }
    function Ae(c) {
      try {
        var b = c.getBBox();
      } catch (a) {
        b = Nd.call(c, !0);
      }
      return b && (b.width || b.height) || c.getBBox === Nd || (b = Nd.call(c, !0)), !b || b.width || b.x || b.y ? b : {x:+Pb(c, ["x", "cx", "x1"]) || 0, y:+Pb(c, ["y", "cy", "y1"]) || 0, width:0, height:0};
    }
    function Od(c, b) {
      if (b) {
        var a = c.style;
        b in Nb && b !== gc && (b = Oa);
        a.removeProperty ? ("ms" !== b.substr(0, 2) && "webkit" !== b.substr(0, 6) || (b = "-" + b), a.removeProperty(b.replace(oc, "-$1").toLowerCase())) : a.removeAttribute(b);
      }
    }
    function ic(c, b, a, g, f, d) {
      b = new sb(c._pt, b, a, 0, 1, d ? N : nb);
      return (c._pt = b).b = g, b.e = f, c._props.push(a), b;
    }
    function Ic(c, b, a, g) {
      var f, d, h, k, l = parseFloat(a) || 0, p = (a + "").trim().substr((l + "").length) || "px", u = Va.style, t = jc.test(b), x = "svg" === c.tagName.toLowerCase(), z = (x ? "client" : "offset") + (t ? "Width" : "Height"), y = "px" === g, v = "%" === g;
      return g === p || !l || Ue[g] || Ue[p] ? l : ("px" === p || y || (l = Ic(c, b, a, "px")), k = c.getCTM && !(!c.getCTM || c.parentNode && !c.ownerSVGElement || !Ae(c)), !v && "%" !== p || !Nb[b] && !~b.indexOf("adius") ? (u[t ? "width" : "height"] = 100 + (y ? p : g), d = ~b.indexOf("adius") || "em" === g && c.appendChild && !x ? c : c.parentNode, k && (d = (c.ownerSVGElement || {}).parentNode), d && d !== Ob && d.appendChild || (d = Ob.body), (h = d._gsap) && v && h.width && t && h.time === aa.time && 
      !h.uncache ? cb(l / h.width * 100) : (!v && "%" !== p || ce[Ra(d, "display")] || (u.position = Ra(c, "position")), d === c && (u.position = "static"), d.appendChild(Va), f = Va[z], d.removeChild(Va), u.position = "absolute", t && v && ((h = Lc(d)).time = aa.time, h.width = d[z]), cb(y ? f * l / 100 : f && l ? 100 / f * l : 0))) : (f = k ? c.getBBox()[t ? "width" : "height"] : c[z], cb(v ? l / f * 100 : l / 100 * f)));
    }
    function Ve(c, b) {
      if (b.tween && b.tween._time === b.tween._dur) {
        var a, g = b.t, f = g.style, d = b.u, h = g._gsap;
        if ("all" === d || !0 === d) {
          f.cssText = "";
          var k = 1;
        } else {
          for (a = (d = d.split(",")).length; -1 < --a;) {
            var l = d[a];
            Nb[l] && (k = 1, l = "transformOrigin" === l ? gc : Oa);
            Od(g, l);
          }
        }
        k && (Od(g, Oa), h && (h.svg && g.removeAttribute("transform"), We(g, 1), h.uncache = 1, ae(f)));
      }
    }
    function Xe(c) {
      return "matrix(1, 0, 0, 1, 0, 0)" === c || "none" === c || !c;
    }
    function bc(c) {
      c = Ra(c, Oa);
      return Xe(c) ? Ye : c.substr(7).match(ue).map(cb);
    }
    function Be(c, b) {
      var a, g, f, d, h = c._gsap || Lc(c), k = c.style, l = bc(c);
      return h.svg && c.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(f = c.transform.baseVal.consolidate().matrix).a, f.b, f.c, f.d, f.e, f.f]).join(",") ? Ye : l : (l !== Ye || c.offsetParent || c === pc || h.svg || (f = k.display, k.display = "block", (a = c.parentNode) && c.offsetParent || (d = 1, g = c.nextElementSibling, pc.appendChild(c)), l = bc(c), f ? k.display = f : Od(c, "display"), d && (g ? a.insertBefore(c, g) : a ? a.appendChild(c) : pc.removeChild(c))), b && 6 < l.length ? [l[0], 
      l[1], l[4], l[5], l[12], l[13]] : l);
    }
    function Ce(c, b, a, g, f, d) {
      var h, k, l, p = c._gsap;
      f = f || Be(c, !0);
      var u = p.xOrigin || 0, t = p.yOrigin || 0, x = p.xOffset || 0, z = p.yOffset || 0, y = f[0], v = f[1], I = f[2], G = f[3], B = f[4], F = f[5], J = b.split(" "), A = parseFloat(J[0]) || 0, O = parseFloat(J[1]) || 0;
      a ? f !== Ye && (k = y * G - v * I) && (l = -v / k * A + y / k * O - (y * F - v * B) / k, A = G / k * A + -I / k * O + (I * F - G * B) / k, O = l) : (A = (h = Ae(c)).x + (~J[0].indexOf("%") ? A / 100 * h.width : A), O = h.y + (~(J[1] || J[0]).indexOf("%") ? O / 100 * h.height : O));
      g || !1 !== g && p.smooth ? (B = A - u, F = O - t, p.xOffset = x + (B * y + F * I) - B, p.yOffset = z + (B * v + F * G) - F) : p.xOffset = p.yOffset = 0;
      p.xOrigin = A;
      p.yOrigin = O;
      p.smooth = !!g;
      p.origin = b;
      p.originIsAbsolute = !!a;
      c.style[gc] = "0px 0px";
      d && (ic(d, p, "xOrigin", u, A), ic(d, p, "yOrigin", t, O), ic(d, p, "xOffset", x, p.xOffset), ic(d, p, "yOffset", z, p.yOffset));
      c.setAttribute("data-svg-origin", A + " " + O);
    }
    function De(c, b, a) {
      var g = Ab(b);
      return cb(parseFloat(b) + parseFloat(Ic(c, "x", a + "px", g))) + g;
    }
    function hd(c, b) {
      for (var a in b) {
        c[a] = b[a];
      }
      return c;
    }
    var de, yb, Ta, Zb, ee, md, vb, Ne, Qc, Fd, Ib, fe, mb, od, Bb, dd, Ed, Zd, Hc, Pc, Xa, Mb, gb, ib = {autoSleep:120, force3D:"auto", nullTargetWarn:1, units:{lineHeight:""}}, rd = {duration:.5, overwrite:!1, delay:0}, Tb = 1E8, Ja = 1 / Tb, Dd = 2 * Math.PI, va = Dd / 4, Ze = 0, bd = Math.sqrt, gf = Math.cos, nd = Math.sin, ac = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {
    }, db = Array.isArray, Mc = /(?:-?\.?\d|\.)+/gi, ue = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Oc = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, zc = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Ee = /[+-]=-?[.\d]+/, Rd = /[^,'"\[\]\s]+/gi, ff = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, wb = {}, Fe = {suppressEvents:!0, isStart:!0, kill:!1}, ne = {suppressEvents:!0, kill:!1}, xa = {suppressEvents:!0}, se = {}, uc = [], Je = {}, $b = {}, e = {}, m = 30, q = [], r = "", w = function(c, b) {
      for (var a in b) {
        c[a] = b[a];
      }
      return c;
    }, E = function(c, b) {
      var a = Math.floor(c /= b);
      return c && a === c ? a - 1 : a;
    }, H = function(c) {
      c = c.data;
      return "isFromStart" === c || "isStart" === c;
    }, P = {_start:0, endTime:vd, totalDuration:vd}, U = function f(b, a, g) {
      var d, h, k, l = b.labels, p = b._recent || P, u = b.duration() >= Tb ? p.endTime(!1) : b._dur;
      return Sa(a) && (isNaN(a) || a in l) ? (h = a.charAt(0), k = "%" === a.substr(-1), d = a.indexOf("="), "<" === h || ">" === h ? (0 <= d && (a = a.replace(/=/, "")), ("<" === h ? p._start : p.endTime(0 <= p._repeat)) + (parseFloat(a.substr(1)) || 0) * (k ? (0 > d ? p : g).totalDuration() / 100 : 1)) : 0 > d ? (a in l || (l[a] = u), l[a]) : (h = parseFloat(a.charAt(d - 1) + a.substr(d + 1)), k && g && (h = h / 100 * (db(g) ? g[0] : g).totalDuration()), 1 < d ? f(b, a.substr(0, d - 1), g) + h : 
      u + h)) : null == a ? u : +a;
    }, pa = function(b, a, g) {
      return g < b ? b : a < g ? a : g;
    }, W = [].slice, oa = function(b, a, g) {
      return Ta && !a && Ta.selector ? Ta.selector(b) : !Sa(b) || g || !ee && qa() ? db(b) ? function(f, d, h) {
        return void 0 === h && (h = []), f.forEach(function(k) {
          return Sa(k) && !d || zd(k, 1) ? h.push.apply(h, oa(k)) : h.push(k);
        }) || h;
      }(b, g) : zd(b) ? W.call(b, 0) : b ? [b] : [] : W.call((a || md).querySelectorAll(b), 0);
    }, ra = function(b, a, g, f, d) {
      var h = a - b, k = f - g;
      return dc(d, function(l) {
        return g + ((l - b) / h * k || 0);
      });
    }, Y = function(b, a, g) {
      var f, d, h, k = b.vars, l = k[a], p = Ta, u = b._ctx;
      if (l) {
        return f = k[a + "Params"], d = k.callbackScope || b, g && uc.length && Yc(), u && (Ta = u), h = f ? l.apply(d, f) : l.call(d), Ta = p, h;
      }
    }, Hb = [], ia = 255, $a = {aqua:[0, ia, ia], lime:[0, ia, 0], silver:[192, 192, 192], black:[0, 0, 0], maroon:[128, 0, 0], teal:[0, 128, 128], blue:[0, 0, ia], navy:[0, 0, 128], white:[ia, ia, ia], olive:[128, 128, 0], yellow:[ia, ia, 0], orange:[ia, 165, 0], gray:[128, 128, 128], purple:[128, 0, 128], green:[0, 128, 0], red:[ia, 0, 0], pink:[ia, 192, 203], cyan:[0, ia, ia], transparent:[ia, ia, ia, 0]}, da = function() {
      var b, a = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (b in $a) {
        a += "|" + b + "\\b";
      }
      return new RegExp(a + ")", "gi");
    }(), T = /hsl[a]?\(/, aa = (dd = Date.now, Ed = 500, Zd = 33, Hc = dd(), Pc = Hc, Mb = Xa = 1E3 / 240, mb = {time:0, frame:0, tick:function() {
      Gc(!0);
    }, deltaRatio:function(b) {
      return od / (1E3 / (b || 60));
    }, wake:function() {
      ge && (!ee && Kb() && (Zb = ee = window, md = Zb.document || {}, wb.gsap = Za, (Zb.gsapVersions || (Zb.gsapVersions = [])).push(Za.version), ke(vb || Zb.GreenSockGlobals || !Zb.gsap && Zb || {}), fe = Zb.requestAnimationFrame, Hb.forEach(Xd)), Fd && mb.sleep(), Ib = fe || function(b) {
        return setTimeout(b, Mb - 1E3 * mb.time + 1 | 0);
      }, Qc = 1, Gc(2));
    }, sleep:function() {
      (fe ? Zb.cancelAnimationFrame : clearTimeout)(Fd);
      Qc = 0;
      Ib = vd;
    }, lagSmoothing:function(b, a) {
      Ed = b || 1 / 0;
      Zd = Math.min(a || 33, Ed);
    }, fps:function(b) {
      Xa = 1E3 / (b || 240);
      Mb = 1E3 * mb.time + Xa;
    }, add:function(b, a, g) {
      var f = a ? function(d, h, k, l) {
        b(d, h, k, l);
        mb.remove(f);
      } : b;
      return mb.remove(b), gb[g ? "unshift" : "push"](f), qa(), f;
    }, remove:function(b, a) {
      ~(a = gb.indexOf(b)) && gb.splice(a, 1) && a <= Bb && Bb--;
    }, _listeners:gb = []}), qa = function() {
      return !Qc && aa.wake();
    }, S = {}, Ub = /^[\d.\-M][\d.\-,\s]/, cd = /["']/g, ec = function(b) {
      return function(a) {
        return 1 - b(1 - a);
      };
    }, ha = function(b, a) {
      return b && (za(b) ? b : S[b] || bf(b)) || a;
    };
    Rb("Linear,Quad,Cubic,Quart,Quint,Strong", function(b, a) {
      var g = 5 > a ? a + 1 : a;
      fb(b + ",Power" + (g - 1), a ? function(f) {
        return Math.pow(f, g);
      } : function(f) {
        return f;
      }, function(f) {
        return 1 - Math.pow(1 - f, g);
      }, function(f) {
        return .5 > f ? Math.pow(2 * f, g) / 2 : 1 - Math.pow(2 * (1 - f), g) / 2;
      });
    });
    S.Linear.easeNone = S.none = S.Linear.easeIn;
    fb("Elastic", Lb("in"), Lb("out"), Lb());
    var wc = 7.5625;
    var Vb = 1 / 2.75;
    fb("Bounce", function(b) {
      return 1 - pd(1 - b);
    }, pd);
    fb("Expo", function(b) {
      return b ? Math.pow(2, 10 * (b - 1)) : 0;
    });
    fb("Circ", function(b) {
      return -(bd(1 - b * b) - 1);
    });
    fb("Sine", function(b) {
      return 1 === b ? 1 : 1 - gf(b * va);
    });
    fb("Back", Fc("in"), Fc("out"), Fc());
    S.SteppedEase = S.steps = wb.SteppedEase = {config:function(b, a) {
      void 0 === b && (b = 1);
      var g = 1 / b, f = b + (a ? 0 : 1), d = a ? 1 : 0;
      return function(h) {
        return ((f * pa(0, .99999999, h) | 0) + d) * g;
      };
    }};
    rd.ease = S["quad.out"];
    Rb("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(b) {
      return r += b + "," + b + "Params,";
    });
    var ba, Ga = function(b, a) {
      this.id = Ze++;
      (b._gsap = this).target = b;
      this.get = (this.harness = a) ? a.get : Ie;
      this.set = a ? a.getSetter : Nc;
    }, Ha = ((ba = Se.prototype).delay = function(b) {
      return b || 0 === b ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + b - this._delay), this._delay = b, this) : this._delay;
    }, ba.duration = function(b) {
      return arguments.length ? this.totalDuration(0 < this._repeat ? b + (b + this._rDelay) * this._repeat : b) : this.totalDuration() && this._dur;
    }, ba.totalDuration = function(b) {
      return arguments.length ? (this._dirty = 0, Ec(this, 0 > this._repeat ? b : (b - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
    }, ba.totalTime = function(b, a) {
      if (qa(), !arguments.length) {
        return this._tTime;
      }
      var g = this._dp;
      if (g && g.smoothChildTiming && this._ts) {
        ld(this, b);
        for (!g._dp || g.parent || rb(g, this); g && g.parent;) {
          g.parent._time !== g._start + (0 <= g._ts ? g._tTime / g._ts : (g.totalDuration() - g._tTime) / -g._ts) && g.totalTime(g._tTime, !0), g = g.parent;
        }
        !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && b < this._tDur || 0 > this._ts && 0 < b || !this._tDur && !b) && Ma(this._dp, this, this._start - this._delay);
      }
      return (this._tTime !== b || !this._dur && !a || this._initted && Math.abs(this._zTime) === Ja || !b && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = b), Ke(this, b, a)), this;
    }, ba.time = function(b, a) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), b + oe(this)) % (this._dur + this._rDelay) || (b ? this._dur : 0), a) : this._time;
    }, ba.totalProgress = function(b, a) {
      return arguments.length ? this.totalTime(this.totalDuration() * b, a) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    }, ba.progress = function(b, a) {
      return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? b : 1 - b) + oe(this), a) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    }, ba.iteration = function(b, a) {
      var g = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (b - 1) * g, a) : this._repeat ? E(this._tTime, g) + 1 : 1;
    }, ba.timeScale = function(b) {
      if (!arguments.length) {
        return this._rts === -Ja ? 0 : this._rts;
      }
      if (this._rts === b) {
        return this;
      }
      var a = this.parent && this._ts ? Sd(this.parent._time, this) : this._tTime;
      this._rts = +b || 0;
      this._ts = this._ps || b === -Ja ? 0 : this._rts;
      this.totalTime(pa(-Math.abs(this._delay), this._tDur, a), !0);
      xd(this);
      for (a = this.parent; a && a.parent;) {
        a._dirty = 1, a.totalDuration(), a = a.parent;
      }
      return this;
    }, ba.paused = function(b) {
      return arguments.length ? (this._ps !== b && ((this._ps = b) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (qa(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== Ja && (this._tTime -= Ja)))), this) : this._ps;
    }, ba.startTime = function(b) {
      if (arguments.length) {
        this._start = b;
        var a = this.parent || this._dp;
        return !a || !a._sort && this.parent || Ma(a, this, b - this._delay), this;
      }
      return this._start;
    }, ba.endTime = function(b) {
      return this._start + (!1 !== b ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    }, ba.rawTime = function(b) {
      var a = this.parent || this._dp;
      return a ? b && (!this._ts || this._repeat && this._time && 1 > this.totalProgress()) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Sd(a.rawTime(b), this) : this._tTime : this._tTime;
    }, ba.revert = function(b) {
      void 0 === b && (b = xa);
      var a = yb;
      return yb = b, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(b), this.totalTime(-.01, b.suppressEvents)), "nested" !== this.data && !1 !== b.kill && this.kill(), yb = a, this;
    }, ba.globalTime = function(b) {
      for (var a = this, g = arguments.length ? b : a.rawTime(); a;) {
        g = a._start + g / (a._ts || 1), a = a._dp;
      }
      return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(b) : g;
    }, ba.repeat = function(b) {
      return arguments.length ? (this._repeat = b === 1 / 0 ? -2 : b, this instanceof Da ? qb(this) : Ec(this, this._dur)) : -2 === this._repeat ? 1 / 0 : this._repeat;
    }, ba.repeatDelay = function(b) {
      if (arguments.length) {
        var a = this._time;
        return this._rDelay = b, this instanceof Da ? qb(this) : Ec(this, this._dur), a ? this.time(a) : this;
      }
      return this._rDelay;
    }, ba.yoyo = function(b) {
      return arguments.length ? (this._yoyo = b, this) : this._yoyo;
    }, ba.seek = function(b, a) {
      return this.totalTime(U(this, b), !1 !== a);
    }, ba.restart = function(b, a) {
      return this.play().totalTime(b ? -this._delay : 0, !1 !== a);
    }, ba.play = function(b, a) {
      return null != b && this.seek(b, a), this.reversed(!1).paused(!1);
    }, ba.reverse = function(b, a) {
      return null != b && this.seek(b || this.totalDuration(), a), this.reversed(!0).paused(!1);
    }, ba.pause = function(b, a) {
      return null != b && this.seek(b, a), this.paused(!0);
    }, ba.resume = function() {
      return this.paused(!1);
    }, ba.reversed = function(b) {
      return arguments.length ? (!!b !== this.reversed() && this.timeScale(-this._rts || (b ? -Ja : 0)), this) : 0 > this._rts;
    }, ba.invalidate = function() {
      return this._initted = this._act = 0, this._zTime = -Ja, this;
    }, ba.isActive = function() {
      var b, a = this.parent || this._dp, g = this._start;
      return !(a && !(this._ts && this._initted && a.isActive() && (b = a.rawTime(!0)) >= g && b < this.endTime(!0) - Ja));
    }, ba.eventCallback = function(b, a, g) {
      var f = this.vars;
      return 1 < arguments.length ? (a ? (f[b] = a, g && (f[b + "Params"] = g), "onUpdate" === b && (this._onUpdate = a)) : delete f[b], this) : f[b];
    }, ba.then = function(b) {
      var a = this;
      return new Promise(function(g) {
        function f() {
          var h = a.then;
          a.then = null;
          za(d) && (d = d(a)) && (d.then || d === a) && (a.then = h);
          g(d);
          a.then = h;
        }
        var d = za(b) ? b : Me;
        a._initted && 1 === a.totalProgress() && 0 <= a._ts || !a._tTime && 0 > a._ts ? f() : a._prom = f;
      });
    }, ba.kill = function() {
      Bd(this);
    }, Se);
    lb(Ha.prototype, {_time:0, _start:0, _end:0, _tTime:0, _tDur:0, _dirty:0, _repeat:0, _yoyo:!1, parent:null, _initted:!1, _rDelay:0, _ts:1, _dp:0, ratio:0, _zTime:-Ja, _prom:0, _ps:!1, _rts:1});
    var Da = function(b) {
      function a(f, d) {
        var h;
        return void 0 === f && (f = {}), (h = b.call(this, f) || this).labels = {}, h.smoothChildTiming = !!f.smoothChildTiming, h.autoRemoveChildren = !!f.autoRemoveChildren, h._sort = !1 !== f.sortChildren, Ia && Ma(f.parent || Ia, Cc(h), d), f.reversed && h.reverse(), f.paused && h.paused(!0), f.scrollTrigger && Td(Cc(h), f.scrollTrigger), h;
      }
      rc(a, b);
      var g = a.prototype;
      return g.to = function(f, d, h) {
        return yd(0, arguments, this), this;
      }, g.from = function(f, d, h) {
        return yd(1, arguments, this), this;
      }, g.fromTo = function(f, d, h, k) {
        return yd(2, arguments, this), this;
      }, g.set = function(f, d, h) {
        return d.duration = 0, d.parent = this, Zc(d).repeatDelay || (d.repeat = 0), d.immediateRender = !!d.immediateRender, new ta(f, d, U(this, h), 1), this;
      }, g.call = function(f, d, h) {
        return Ma(this, ta.delayedCall(0, f, d), h);
      }, g.staggerTo = function(f, d, h, k, l, p, u) {
        return h.duration = d, h.stagger = h.stagger || k, h.onComplete = p, h.onCompleteParams = u, h.parent = this, new ta(f, h, U(this, l)), this;
      }, g.staggerFrom = function(f, d, h, k, l, p, u) {
        return h.runBackwards = 1, Zc(h).immediateRender = !1 !== h.immediateRender, this.staggerTo(f, d, h, k, l, p, u);
      }, g.staggerFromTo = function(f, d, h, k, l, p, u, t) {
        return k.startAt = h, Zc(k).immediateRender = !1 !== k.immediateRender, this.staggerTo(f, d, k, l, p, u, t);
      }, g.render = function(f, d, h) {
        var k, l, p, u, t, x, z, y, v = this._time, I = this._dirty ? this.totalDuration() : this._tDur, G = this._dur, B = 0 >= f ? 0 : xb(f);
        var F = 0 > this._zTime != 0 > f && (this._initted || !G);
        if (this !== Ia && I < B && 0 <= f && (B = I), B !== this._tTime || h || F) {
          if (v !== this._time && G && (B += this._time - v, f += this._time - v), k = B, x = this._start, u = !(t = this._ts), F && (G || (v = this._zTime), !f && d || (this._zTime = f)), this._repeat) {
            if (z = this._yoyo, F = G + this._rDelay, -1 > this._repeat && 0 > f) {
              return this.totalTime(100 * F + f, d, h);
            }
            if (k = xb(B % F), B === I ? (l = this._repeat, k = G) : ((l = ~~(B / F)) && l === B / F && (k = G, l--), G < k && (k = G)), p = E(this._tTime, F), !v && this._tTime && p !== l && 0 >= this._tTime - p * F - this._dur && (p = l), z && 1 & l && (k = G - k, y = 1), l !== p && !this._lock) {
              var J = z && 1 & p;
              z = J === (z && 1 & l);
              if ((l < p && (J = !J), v = J ? 0 : B % G ? G : B, this._lock = 1, this.render(v || (y ? 0 : xb(l * F)), d, !G)._lock = 0, this._tTime = B, !d && this.parent && Y(this, "onRepeat"), this.vars.repeatRefresh && !y && (this.invalidate()._lock = 1), v && v !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act) || (G = this._dur, I = this._tDur, z && (this._lock = 2, v = J ? G : -1E-4, this.render(v, !0), this.vars.repeatRefresh && !y && this.invalidate()), this._lock = 
              0, !this._ts && !u)) {
                return this;
              }
              ve(this, y);
            }
          }
          if (p = this._hasPause && !this._forcing && 2 > this._lock) {
            a: {
              var A = xb(v);
              p = xb(k);
              if (A < p) {
                for (y = this._first; y && y._start <= p;) {
                  if ("isPause" === y.data && y._start > A) {
                    A = y;
                    break a;
                  }
                  y = y._next;
                }
              } else {
                for (y = this._last; y && y._start >= p;) {
                  if ("isPause" === y.data && y._start < A) {
                    A = y;
                    break a;
                  }
                  y = y._prev;
                }
              }
              A = void 0;
            }
            p = A;
          }
          if (p && (B -= k - (k = A._start)), this._tTime = B, this._time = k, this._act = !t, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = f, v = 0), !v && k && !d && !l && (Y(this, "onStart"), this._tTime !== B)) {
            return this;
          }
          if (v <= k && 0 <= f) {
            for (l = this._first; l;) {
              if (p = l._next, (l._act || k >= l._start) && l._ts && A !== l) {
                if (l.parent !== this) {
                  return this.render(f, d, h);
                }
                if (l.render(0 < l._ts ? (k - l._start) * l._ts : (l._dirty ? l.totalDuration() : l._tDur) + (k - l._start) * l._ts, d, h), k !== this._time || !this._ts && !u) {
                  A = 0;
                  p && (B += this._zTime = -Ja);
                  break;
                }
              }
              l = p;
            }
          } else {
            for (l = this._last, y = 0 > f ? f : k; l;) {
              if (p = l._prev, (l._act || y <= l._end) && l._ts && A !== l) {
                if (l.parent !== this) {
                  return this.render(f, d, h);
                }
                if (l.render(0 < l._ts ? (y - l._start) * l._ts : (l._dirty ? l.totalDuration() : l._tDur) + (y - l._start) * l._ts, d, h || yb && (l._initted || l._startAt)), k !== this._time || !this._ts && !u) {
                  A = 0;
                  p && (B += this._zTime = y ? -Ja : Ja);
                  break;
                }
              }
              l = p;
            }
          }
          if (A && !d && (this.pause(), A.render(v <= k ? 0 : -Ja)._zTime = v <= k ? 1 : -1, this._ts)) {
            return this._start = x, xd(this), this.render(f, d, h);
          }
          this._onUpdate && !d && Y(this, "onUpdate", !0);
          (B === I && this._tTime >= this.totalDuration() || !B && v) && (x !== this._start && Math.abs(t) === Math.abs(this._ts) || this._lock || (!f && G || !(B === I && 0 < this._ts || !B && 0 > this._ts) || Dc(this, 1), d || 0 > f && !v || !B && !v && I || (Y(this, B === I && 0 <= f ? "onComplete" : "onReverseComplete", !0), !this._prom || B < I && 0 < this.timeScale() || this._prom())));
        }
        return this;
      }, g.add = function(f, d) {
        var h = this;
        if (sc(d) || (d = U(this, d, f)), !(f instanceof Ha)) {
          if (db(f)) {
            return f.forEach(function(k) {
              return h.add(k, d);
            }), this;
          }
          if (Sa(f)) {
            return this.addLabel(f, d);
          }
          if (!za(f)) {
            return this;
          }
          f = ta.delayedCall(0, f);
        }
        return this !== f ? Ma(this, f, d) : this;
      }, g.getChildren = function(f, d, h, k) {
        void 0 === f && (f = !0);
        void 0 === d && (d = !0);
        void 0 === h && (h = !0);
        void 0 === k && (k = -Tb);
        for (var l = [], p = this._first; p;) {
          p._start >= k && (p instanceof ta ? d && l.push(p) : (h && l.push(p), f && l.push.apply(l, p.getChildren(!0, d, h)))), p = p._next;
        }
        return l;
      }, g.getById = function(f) {
        for (var d = this.getChildren(1, 1, 1), h = d.length; h--;) {
          if (d[h].vars.id === f) {
            return d[h];
          }
        }
      }, g.remove = function(f) {
        return Sa(f) ? this.removeLabel(f) : za(f) ? this.killTweensOf(f) : (ad(this, f), f === this._recent && (this._recent = this._last), qb(this));
      }, g.totalTime = function(f, d) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = xb(aa.time - (0 < this._ts ? f / this._ts : (this.totalDuration() - f) / -this._ts))), b.prototype.totalTime.call(this, f, d), this._forcing = 0, this) : this._tTime;
      }, g.addLabel = function(f, d) {
        return this.labels[f] = U(this, d), this;
      }, g.removeLabel = function(f) {
        return delete this.labels[f], this;
      }, g.addPause = function(f, d, h) {
        d = ta.delayedCall(0, d || vd, h);
        return d.data = "isPause", this._hasPause = 1, Ma(this, d, U(this, f));
      }, g.removePause = function(f) {
        var d = this._first;
        for (f = U(this, f); d;) {
          d._start === f && "isPause" === d.data && Dc(d), d = d._next;
        }
      }, g.killTweensOf = function(f, d, h) {
        h = this.getTweensOf(f, h);
        for (var k = h.length; k--;) {
          Pa !== h[k] && h[k].kill(f, d);
        }
        return this;
      }, g.getTweensOf = function(f, d) {
        for (var h, k = [], l = oa(f), p = this._first, u = sc(d); p;) {
          if (p instanceof ta) {
            for (var t = p._targets, x = l, z = x.length, y = 0; 0 > t.indexOf(x[y]) && ++y < z;) {
            }
            y < z && (u ? (!Pa || p._initted && p._ts) && p.globalTime(0) <= d && p.globalTime(p.totalDuration()) > d : !d || p.isActive()) && k.push(p);
          } else {
            (h = p.getTweensOf(l, d)).length && k.push.apply(k, h);
          }
          p = p._next;
        }
        return k;
      }, g.tweenTo = function(f, d) {
        d = d || {};
        var h, k = this, l = U(k, f), p = d.startAt, u = d.onStart, t = d.onStartParams, x = d.immediateRender, z = ta.to(k, lb({ease:d.ease || "none", lazy:!1, immediateRender:!1, time:l, overwrite:"auto", duration:d.duration || Math.abs((l - (p && "time" in p ? p.time : k._time)) / k.timeScale()) || Ja, onStart:function() {
          if (k.pause(), !h) {
            var y = d.duration || Math.abs((l - (p && "time" in p ? p.time : k._time)) / k.timeScale());
            z._dur !== y && Ec(z, y, 0, 1).render(z._time, !0, !0);
            h = 1;
          }
          u && u.apply(z, t || []);
        }}, d));
        return x ? z.render(0) : z;
      }, g.tweenFromTo = function(f, d, h) {
        return this.tweenTo(d, lb({startAt:{time:U(this, f)}}, h));
      }, g.recent = function() {
        return this._recent;
      }, g.nextLabel = function(f) {
        return void 0 === f && (f = this._time), Qe(this, U(this, f));
      }, g.previousLabel = function(f) {
        return void 0 === f && (f = this._time), Qe(this, U(this, f), 1);
      }, g.currentLabel = function(f) {
        return arguments.length ? this.seek(f, !0) : this.previousLabel(this._time + Ja);
      }, g.shiftChildren = function(f, d, h) {
        void 0 === h && (h = 0);
        for (var k, l = this._first, p = this.labels; l;) {
          l._start >= h && (l._start += f, l._end += f), l = l._next;
        }
        if (d) {
          for (k in p) {
            p[k] >= h && (p[k] += f);
          }
        }
        return qb(this);
      }, g.invalidate = function(f) {
        var d = this._first;
        for (this._lock = 0; d;) {
          d.invalidate(f), d = d._next;
        }
        return b.prototype.invalidate.call(this, f);
      }, g.clear = function(f) {
        void 0 === f && (f = !0);
        for (var d, h = this._first; h;) {
          d = h._next, this.remove(h), h = d;
        }
        return this._dp && (this._time = this._tTime = this._pTime = 0), f && (this.labels = {}), qb(this);
      }, g.totalDuration = function(f) {
        var d, h, k = 0, l = this._last, p = Tb;
        if (arguments.length) {
          return this.timeScale((0 > this._repeat ? this.duration() : this.totalDuration()) / (this.reversed() ? -f : f));
        }
        if (this._dirty) {
          for (h = this.parent; l;) {
            var u = l._prev;
            l._dirty && l.totalDuration();
            p < (d = l._start) && this._sort && l._ts && !this._lock ? (this._lock = 1, Ma(this, l, d - l._delay, 1)._lock = 0) : p = d;
            0 > d && l._ts && (k -= d, (!h && !this._dp || h && h.smoothChildTiming) && (this._start += d / this._ts, this._time -= d, this._tTime -= d), this.shiftChildren(-d, !1, -Infinity), p = 0);
            l._end > k && l._ts && (k = l._end);
            l = u;
          }
          Ec(this, this === Ia && this._time > k ? this._time : k, 1, 1);
          this._dirty = 0;
        }
        return this._tDur;
      }, a.updateRoot = function(f) {
        if (Ia._ts && (Ke(Ia, Sd(f, Ia)), Ne = aa.frame), aa.frame >= m) {
          if (m += ib.autoSleep || 120, f = Ia._first, (!f || !f._ts) && ib.autoSleep && 2 > aa._listeners.length) {
            for (; f && !f._ts;) {
              f = f._next;
            }
            f || aa.sleep();
          }
        }
      }, a;
    }(Ha);
    lb(Da.prototype, {_lock:0, _hasPause:0, _forcing:0});
    var Pa, Wa, vc = function(b, a, g, f, d, h, k, l, p, u) {
      za(f) && (f = f(d || 0, b, h));
      var t;
      d = b[a];
      h = "get" !== g ? g : za(d) ? p ? b[a.indexOf("set") || !za(b["get" + a.substr(3)]) ? a : "get" + a.substr(3)](p) : b[a]() : d;
      g = za(d) ? p ? Ge : Yb : V;
      if (Sa(f) && (~f.indexOf("random(") && (f = Ad(f)), "=" === f.charAt(1) && (!(t = Sb(h, f) + (Ab(h) || 0)) && 0 !== t || (f = t))), !u || h !== f || Wa) {
        var x;
        if (isNaN(h * f) || "" === f) {
          d || a in b || kd(a, f);
          d = h;
          h = l || ib.stringFilter;
          var z, y;
          k = new sb(this._pt, b, a, 0, 1, sd, null, g);
          u = t = 0;
          k.b = d;
          k.e = f;
          d += "";
          (l = ~(f += "").indexOf("random(")) && (f = Ad(f));
          h && (h(z = [d, f], b, a), d = z[0], f = z[1]);
          for (b = d.match(zc) || []; z = zc.exec(f);) {
            a = z[0], z = f.substring(t, z.index), x ? x = (x + 1) % 5 : "rgba(" === z.substr(-5) && (x = 1), a !== b[u++] && (y = parseFloat(b[u - 1]) || 0, k._pt = {_next:k._pt, p:z || 1 === u ? z : ",", s:y, c:"=" === a.charAt(1) ? Sb(y, a) - y : parseFloat(a) - y, m:x && 4 > x ? Math.round : 0}, t = zc.lastIndex);
          }
          x = (k.c = t < f.length ? f.substring(t, f.length) : "", k.fp = p, (Ee.test(f) || l) && (k.e = 0), this._pt = k);
        } else {
          x = (t = new sb(this._pt, b, a, +h || 0, f - (h || 0), "boolean" == typeof d ? Uc : Hd, 0, g), p && (t.fp = p), k && t.modifier(k, this, b), this._pt = t);
        }
        return x;
      }
    }, Fb = function d(a, g, f) {
      var h, k, l, p, u, t, x, z, y, v, I = a.vars;
      var G = I.ease;
      var B = I.startAt, F = I.immediateRender, J = I.lazy, A = I.onUpdate, O = I.onUpdateParams, Q = I.callbackScope, M = I.runBackwards;
      var ka = I.yoyoEase;
      var ca = I.keyframes, ea = I.autoRevert, X = a._dur, fa = a._startAt, la = a._targets, ma = a.parent, Fa = ma && "nested" === ma.data ? ma.vars.targets : la, Cb = "auto" === a._overwrite && !de, Ba = a.timeline;
      if (!Ba || ca && G || (G = "none"), a._ease = ha(G, rd.ease), a._yEase = ka ? ec(ha(!0 === ka ? G : ka, rd.ease)) : 0, ka && a._yoyo && !a._repeat && (ka = a._yEase, a._yEase = a._ease, a._ease = ka), a._from = !Ba && !!I.runBackwards, !Ba || ca && !I.stagger) {
        if (ka = (t = la[0] ? Lc(la[0]).harness : 0) && I[t.prop], G = zb(I, se), fa && (0 > fa._zTime && fa.progress(1), 0 > g && M && F && !ea ? fa.render(-1, !0) : fa.revert(M && X ? ne : Fe), fa._lazy = 0), B) {
          if (Dc(a._startAt = ta.set(la, lb({data:"isStart", overwrite:!1, parent:ma, immediateRender:!0, lazy:!fa && !1 !== J, startAt:null, delay:0, onUpdate:A, onUpdateParams:O, callbackScope:Q, stagger:0}, B))), a._startAt._dp = 0, a._startAt._sat = a, 0 > g && (yb || !F && !ea) && a._startAt.revert(ne), F && X && 0 >= g && 0 >= f) {
            return void(g && (a._zTime = g));
          }
        } else if (M && X && !fa) {
          if (g && (F = !1), h = lb({overwrite:!1, data:"isFromStart", lazy:F && !fa && !1 !== J, immediateRender:F, stagger:0, parent:ma}, G), ka && (h[t.prop] = ka), Dc(a._startAt = ta.set(la, h)), a._startAt._dp = 0, a._startAt._sat = a, 0 > g && (yb ? a._startAt.revert(ne) : a._startAt.render(-1, !0)), a._zTime = g, F) {
            if (!g) {
              return;
            }
          } else {
            d(a._startAt, Ja, Ja);
          }
        }
        a._pt = a._ptCache = 0;
        J = X && !1 !== J || J && !X;
        for (f = 0; f < la.length; f++) {
          if (u = (l = la[f])._gsap || le(la)[f]._gsap, a._ptLookup[f] = z = {}, Je[u.id] && uc.length && Yc(), y = Fa === la ? f : Fa.indexOf(l), t && !1 !== (x = new t()).init(l, ka || G, a, y, Fa) && (a._pt = k = new sb(a._pt, l, x.name, 0, 1, x.render, x, 0, x.priority), x._props.forEach(function(jb) {
            z[jb] = k;
          }), x.priority && (p = 1)), !t || ka) {
            for (h in G) {
              $b[h] && (x = ed(h, G, a, y, l, Fa)) ? x.priority && (p = 1) : z[h] = k = vc.call(a, l, h, "get", G[h], y, Fa, 0, I.stringFilter);
            }
          }
          a._op && a._op[f] && a.kill(l, a._op[f]);
          Cb && a._pt && (Pa = a, Ia.killTweensOf(l, z, a.globalTime(g)), v = !a.parent, Pa = 0);
          a._pt && J && (Je[u.id] = 1);
        }
        p && wa(a);
        a._onInit && a._onInit(a);
      }
      a._onUpdate = A;
      a._initted = (!a._op || a._pt) && !v;
      ca && 0 >= g && Ba.render(Tb, !0, !0);
    }, Rc = function(a, g, f, d, h) {
      return za(a) ? a.call(g, f, d, h) : Sa(a) && ~a.indexOf("random(") ? Ad(a) : a;
    }, Pd = r + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", id = {};
    Rb(Pd + ",id,stagger,delay,duration,paused,scrollTrigger", function(a) {
      return id[a] = 1;
    });
    var ta = function(a) {
      function g(d, h, k, l) {
        "number" == typeof h && (k.duration = h, h = k, k = null);
        var p, u, t, x, z = (l = a.call(this, l ? h : Zc(h)) || this).vars, y = z.duration, v = z.delay, I = z.immediateRender, G = z.stagger, B = z.overwrite, F = z.keyframes;
        var J = z.defaults;
        var A = z.scrollTrigger, O = z.yoyoEase;
        z = h.parent || Ia;
        var Q = (db(d) || ac(d) ? sc(d[0]) : "length" in h) ? [d] : oa(d);
        if (l._targets = Q.length ? le(Q) : !!ib.nullTargetWarn && console.warn("GSAP target " + d + " not found. https://greensock.com") || [], l._ptLookup = [], l._overwrite = B, F || G || tc(y) || tc(v)) {
          if (h = l.vars, (p = l.timeline = new Da({data:"nested", defaults:J || {}, targets:z && "nested" === z.data ? z.vars.targets : Q})).kill(), p.parent = p._dp = Cc(l), p._start = 0, G || tc(y) || tc(v)) {
            if (u = Q.length, t = G && pe(G), cc(G)) {
              for (M in G) {
                ~Pd.indexOf(M) && ((x = x || {})[M] = G[M]);
              }
            }
            for (d = 0; d < u; d++) {
              (J = zb(h, id)).stagger = 0;
              O && (J.yoyoEase = O);
              x && w(J, x);
              var M = Q[d];
              J.duration = +Rc(y, Cc(l), d, M, Q);
              J.delay = (+Rc(v, Cc(l), d, M, Q) || 0) - l._delay;
              !G && 1 === u && J.delay && (l._delay = v = J.delay, l._start += v, J.delay = 0);
              p.to(M, J, t ? t(d, M, Q) : 0);
              p._ease = S.none;
            }
            p.duration() ? y = v = 0 : l.timeline = 0;
          } else if (F) {
            if (Zc(lb(p.vars.defaults, {ease:"none"})), p._ease = ha(F.ease || h.ease || "none"), O = 0, db(F)) {
              F.forEach(function(ka) {
                return p.to(Q, ka, ">");
              }), p.duration();
            } else {
              for (M in J = {}, F) {
                "ease" === M || "easeEach" === M || xe(M, F[M], J, F.easeEach);
              }
              for (M in J) {
                for (x = J[M].sort(function(ka, ca) {
                  return ka.t - ca.t;
                }), d = O = 0; d < x.length; d++) {
                  (G = {ease:(u = x[d]).e, duration:(u.t - (d ? x[d - 1].t : 0)) / 100 * y})[M] = u.v, p.to(Q, G, O), O += G.duration;
                }
              }
              p.duration() < y && p.to({}, {duration:y - p.duration()});
            }
          }
          y || l.duration(y = p.duration());
        } else {
          l.timeline = 0;
        }
        return !0 !== B || de || (Pa = Cc(l), Ia.killTweensOf(Q), Pa = 0), Ma(z, Cc(l), k), h.reversed && l.reverse(), h.paused && l.paused(!0), (I || !y && !F && l._start === xb(z._time) && !1 !== I && function ea(ca) {
          return !ca || ca._ts && ea(ca.parent);
        }(Cc(l)) && "nested" !== z.data) && (l._tTime = -Ja, l.render(Math.max(0, -v) || 0)), A && Td(Cc(l), A), l;
      }
      rc(g, a);
      var f = g.prototype;
      return f.render = function(d, h, k) {
        var l, p, u, t, x, z, y, v, I = this._time, G = this._tDur, B = this._dur, F = 0 > d, J = G - Ja < d && !F ? G : d < Ja ? 0 : d;
        if (B) {
          if (J !== this._tTime || !d || k || !this._initted && this._tTime || this._startAt && 0 > this._zTime != F) {
            if (l = J, y = this.timeline, this._repeat) {
              if (p = B + this._rDelay, -1 > this._repeat && F) {
                return this.totalTime(100 * p + d, h, k);
              }
              if (l = xb(J % p), J === G ? (u = this._repeat, l = B) : ((u = ~~(J / p)) && u === J / p && (l = B, u--), B < l && (l = B)), (x = this._yoyo && 1 & u) && (v = this._yEase, l = B - l), t = E(this._tTime, p), l === I && !k && this._initted) {
                return this._tTime = J, this;
              }
              u !== t && (y && this._yEase && ve(y, x), !this.vars.repeatRefresh || x || this._lock || (this._lock = k = 1, this.render(xb(p * u), !0).invalidate()._lock = 0));
            }
            if (!this._initted) {
              if (Ud(this, F ? d : l, k, h, J)) {
                return this._tTime = 0, this;
              }
              if (I !== this._time) {
                return this;
              }
              if (B !== this._dur) {
                return this.render(d, h, k);
              }
            }
            if (this._tTime = J, this._time = l, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = z = (v || this._ease)(l / B), this._from && (this.ratio = z = 1 - z), l && !I && !h && !u && (Y(this, "onStart"), this._tTime !== J)) {
              return this;
            }
            for (p = this._pt; p;) {
              p.r(z, p.d), p = p._next;
            }
            y && y.render(0 > d ? d : !l && x ? -Ja : y._dur * y._ease(l / this._dur), h, k) || this._startAt && (this._zTime = d);
            this._onUpdate && !h && (F && me(this, d, 0, k), Y(this, "onUpdate"));
            this._repeat && u !== t && this.vars.onRepeat && !h && this.parent && Y(this, "onRepeat");
            J !== this._tDur && J || this._tTime !== J || (F && !this._onUpdate && me(this, d, 0, !0), !d && B || !(J === this._tDur && 0 < this._ts || !J && 0 > this._ts) || Dc(this, 1), h || F && !I || !(J || I || x) || (Y(this, J === G ? "onComplete" : "onReverseComplete", !0), !this._prom || J < G && 0 < this.timeScale() || this._prom()));
          }
        } else {
          !function(A, O, Q, M) {
            var ka, ca = A.ratio, ea = 0 > O || !O && (!A._start && function Fa(ma) {
              return (ma = ma.parent) && ma._ts && ma._initted && !ma._lock && (0 > ma.rawTime() || Fa(ma));
            }(A) && (A._initted || !H(A)) || (0 > A._ts || 0 > A._dp._ts) && !H(A)) ? 0 : 1, X = A._rDelay, fa = 0;
            if (X && A._repeat && (fa = pa(0, A._tDur, O), ka = E(fa, X), A._yoyo && 1 & ka && (ea = 1 - ea), ka !== E(A._tTime, X) && (ca = 1 - ea, A.vars.repeatRefresh && A._initted && A.invalidate())), ea !== ca || yb || M || A._zTime === Ja || !O && A._zTime) {
              if (A._initted || !Ud(A, O, M, Q, fa)) {
                M = A._zTime;
                A._zTime = O || (Q ? Ja : 0);
                Q = Q || O && !M;
                A.ratio = ea;
                A._from && (ea = 1 - ea);
                A._time = 0;
                A._tTime = fa;
                for (M = A._pt; M;) {
                  M.r(ea, M.d), M = M._next;
                }
                0 > O && me(A, O, 0, !0);
                A._onUpdate && !Q && Y(A, "onUpdate");
                fa && A._repeat && !Q && A.parent && Y(A, "onRepeat");
                (O >= A._tDur || 0 > O) && A.ratio === ea && (ea && Dc(A, 1), Q || yb || (Y(A, ea ? "onComplete" : "onReverseComplete", !0), A._prom && A._prom()));
              }
            } else {
              A._zTime || (A._zTime = O);
            }
          }(this, d, h, k);
        }
        return this;
      }, f.targets = function() {
        return this._targets;
      }, f.invalidate = function(d) {
        return d && this.vars.runBackwards || (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(d), a.prototype.invalidate.call(this, d);
      }, f.resetTo = function(d, h, k, l) {
        Qc || aa.wake();
        this._ts || this.play();
        var p = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        this._initted || Fb(this, p);
        var u = this._ease(p / this._dur);
        a: {
          var t, x, z, y = (this._pt && this._ptCache || (this._ptCache = {}))[d];
          if (!y) {
            y = this._ptCache[d] = [];
            var v = this._ptLookup;
            for (z = this._targets.length; z--;) {
              if ((t = v[z][d]) && t.d && t.d._pt) {
                for (t = t.d._pt; t && t.p !== d && t.fp !== d;) {
                  t = t._next;
                }
              }
              if (!t) {
                u = (Wa = 1, this.vars[d] = "+=0", Fb(this, p), Wa = 0, 1);
                break a;
              }
              y.push(t);
            }
          }
          for (z = y.length; z--;) {
            (t = (x = y[z])._pt || x).s = !k && 0 !== k || l ? t.s + (k || 0) + u * t.c : k, t.c = h - t.s, x.e && (x.e = cb(h) + Ab(x.e)), x.b && (x.b = t.s + Ab(x.b));
          }
          u = void 0;
        }
        return u ? this.resetTo(d, h, k, l) : (ld(this, 0), this.parent || $c(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
      }, f.kill = function(d, h) {
        if (void 0 === h && (h = "all"), !(d || h && "all" !== h)) {
          return this._lazy = this._pt = 0, this.parent ? Bd(this) : this;
        }
        if (this.timeline) {
          var k = this.timeline.totalDuration();
          return this.timeline.killTweensOf(d, h, Pa && !0 !== Pa.vars.overwrite)._first || Bd(this), this.parent && k !== this.timeline.totalDuration() && Ec(this, this._dur * this.timeline._tDur / k, 0, 1), this;
        }
        var l, p, u, t, x, z, y = this._targets, v = d ? oa(d) : y, I = this._ptLookup, G = this._pt;
        if ((!h || "all" === h) && function(B, F) {
          for (var J = B.length, A = J === F.length; A && J-- && B[J] === F[J];) {
          }
          return 0 > J;
        }(y, v)) {
          return "all" === h && (this._pt = 0), Bd(this);
        }
        k = this._op = this._op || [];
        "all" !== h && (Sa(h) && (t = {}, Rb(h, function(B) {
          return t[B] = 1;
        }), h = t), h = function(B, F) {
          var J, A, O, Q, M = (J = B[0] ? Lc(B[0]).harness : 0) && J.aliases;
          if (!M) {
            return F;
          }
          for (A in J = w({}, F), M) {
            if (A in J) {
              for (O = (Q = M[A].split(",")).length; O--;) {
                J[Q[O]] = J[A];
              }
            }
          }
          return J;
        }(y, h));
        for (z = y.length; z--;) {
          if (~v.indexOf(y[z])) {
            for (t in l = I[z], "all" === h ? (k[z] = h, u = l, p = {}) : (p = k[z] = k[z] || {}, u = h), u) {
              (x = l && l[t]) && ("kill" in x.d && !0 !== x.d.kill(t) || ad(this, x, "_pt"), delete l[t]), "all" !== p && (p[t] = 1);
            }
          }
        }
        return this._initted && !this._pt && G && Bd(this), this;
      }, g.to = function(d, h, k) {
        return new g(d, h, k);
      }, g.from = function(d, h) {
        return yd(1, arguments);
      }, g.delayedCall = function(d, h, k, l) {
        return new g(h, 0, {immediateRender:!1, lazy:!1, overwrite:!1, delay:d, onComplete:h, onReverseComplete:h, onCompleteParams:k, onReverseCompleteParams:k, callbackScope:l});
      }, g.fromTo = function(d, h, k) {
        return yd(2, arguments);
      }, g.set = function(d, h) {
        return h.duration = 0, h.repeatDelay || (h.repeat = 0), new g(d, h);
      }, g.killTweensOf = function(d, h, k) {
        return Ia.killTweensOf(d, h, k);
      }, g;
    }(Ha);
    lb(ta.prototype, {_targets:[], _lazy:0, _startAt:0, _op:0, _onInit:0});
    Rb("staggerTo,staggerFrom,staggerFromTo", function(a) {
      ta[a] = function() {
        var g = new Da(), f = W.call(arguments, 0);
        return f.splice("staggerFromTo" === a ? 5 : 4, 0, 0), g[a].apply(g, f);
      };
    });
    var V = function(a, g, f) {
      return a[g] = f;
    }, Yb = function(a, g, f) {
      return a[g](f);
    }, Ge = function(a, g, f, d) {
      return a[g](d.fp, f);
    }, Nc = function(a, g) {
      return za(a[g]) ? Yb : void 0 === a[g] && a.setAttribute ? Gd : V;
    }, Hd = function(a, g) {
      return g.set(g.t, g.p, Math.round(1E6 * (g.s + g.c * a)) / 1E6, g);
    }, Uc = function(a, g) {
      return g.set(g.t, g.p, !!(g.s + g.c * a), g);
    }, sd = function(a, g) {
      var f = g._pt, d = "";
      if (!a && g.b) {
        d = g.b;
      } else if (1 === a && g.e) {
        d = g.e;
      } else {
        for (; f;) {
          d = f.p + (f.m ? f.m(f.s + f.c * a) : Math.round(1E4 * (f.s + f.c * a)) / 1E4) + d, f = f._next;
        }
        d += g.c;
      }
      g.set(g.t, g.p, d, g);
    }, Na = function(a, g) {
      for (var f = g._pt; f;) {
        f.r(a, f.d), f = f._next;
      }
    }, Cd = function(a, g, f, d) {
      for (var h, k = this._pt; k;) {
        h = k._next, k.p === d && k.modifier(a, g, f), k = h;
      }
    }, Gb = function(a) {
      for (var g, f, d = this._pt; d;) {
        f = d._next, d.p === a && !d.op || d.op === a ? ad(this, d, "_pt") : d.dep || (g = 1), d = f;
      }
      return !g;
    }, wa = function(a) {
      for (var g, f, d, h, k = a._pt; k;) {
        g = k._next;
        for (f = d; f && f.pr > k.pr;) {
          f = f._next;
        }
        (k._prev = f ? f._prev : h) ? k._prev._next = k : d = k;
        (k._next = f) ? f._prev = k : h = k;
        k = g;
      }
      a._pt = d;
    }, sb = (mc.prototype.modifier = function(a, g, f) {
      this.mSet = this.mSet || this.set;
      this.set = Sc;
      this.m = a;
      this.mt = f;
      this.tween = g;
    }, mc);
    Rb(r + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(a) {
      return se[a] = 1;
    });
    wb.TweenMax = wb.TweenLite = ta;
    wb.TimelineLite = wb.TimelineMax = Da;
    var Ia = new Da({sortChildren:!1, defaults:rd, autoRemoveChildren:!0, id:"root", smoothChildTiming:!0});
    ib.stringFilter = af;
    var R, hb = [], Ea = {}, Tc = [], tb = 0, fc = 0, Jc = ((R = fd.prototype).add = function(a, g, f) {
      function d() {
        var k, l = Ta, p = h.selector;
        return l && l !== h && l.data.push(h), f && (h.selector = Vd(f)), Ta = h, k = g.apply(h, arguments), za(k) && h._r.push(k), Ta = l, h.selector = p, h.isReverted = !1, k;
      }
      za(a) && (f = g, g = a, a = za);
      var h = this;
      return h.last = d, a === za ? d(h) : a ? h[a] = d : d;
    }, R.ignore = function(a) {
      var g = Ta;
      Ta = null;
      a(this);
      Ta = g;
    }, R.getTweens = function() {
      var a = [];
      return this.data.forEach(function(g) {
        return g instanceof fd ? a.push.apply(a, g.getTweens()) : g instanceof ta && !(g.parent && "nested" === g.parent.data) && a.push(g);
      }), a;
    }, R.clear = function() {
      this._r.length = this.data.length = 0;
    }, R.kill = function(a, g) {
      var f = this;
      if (a) {
        var d = this.getTweens();
        this.data.forEach(function(k) {
          "isFlip" === k.data && (k.revert(), k.getChildren(!0, !0, !1).forEach(function(l) {
            return d.splice(d.indexOf(l), 1);
          }));
        });
        d.map(function(k) {
          return {g:k.globalTime(0), t:k};
        }).sort(function(k, l) {
          return l.g - k.g || -1 / 0;
        }).forEach(function(k) {
          return k.t.revert(a);
        });
        this.data.forEach(function(k) {
          return !(k instanceof ta) && k.revert && k.revert(a);
        });
        this._r.forEach(function(k) {
          return k(a, f);
        });
        this.isReverted = !0;
      } else {
        this.data.forEach(function(k) {
          return k.kill && k.kill();
        });
      }
      if (this.clear(), g) {
        for (var h = hb.length; h--;) {
          hb[h].id === this.id && hb.splice(h, 1);
        }
      }
    }, R.revert = function(a) {
      this.kill(a || {});
    }, fd), Vc, jd = ((Vc = ua.prototype).add = function(a, g, f) {
      cc(a) || (a = {matches:a});
      var d, h, k;
      f = new Jc(0, f || this.scope);
      var l = f.conditions = {};
      for (h in Ta && !f.selector && (f.selector = Ta.selector), this.contexts.push(f), g = f.add("onMatch", g), f.queries = a) {
        "all" === h ? k = 1 : (d = Zb.matchMedia(a[h])) && (0 > hb.indexOf(f) && hb.push(f), (l[h] = d.matches) && (k = 1), d.addListener ? d.addListener(ze) : d.addEventListener("change", ze));
      }
      return k && g(f), this;
    }, Vc.revert = function(a) {
      this.kill(a || {});
    }, Vc.kill = function(a) {
      this.contexts.forEach(function(g) {
        return g.kill(a, !0);
      });
    }, ua), Ac = {registerPlugin:function() {
      for (var a = arguments.length, g = Array(a), f = 0; f < a; f++) {
        g[f] = arguments[f];
      }
      g.forEach(function(d) {
        return Xd(d);
      });
    }, timeline:function(a) {
      return new Da(a);
    }, getTweensOf:function(a, g) {
      return Ia.getTweensOf(a, g);
    }, getProperty:function(a, g, f, d) {
      Sa(a) && (a = oa(a)[0]);
      var h = Lc(a || {}).get, k = f ? Me : Le;
      return "native" === f && (f = ""), a ? g ? k(($b[g] && $b[g].get || h)(a, g, f, d)) : function(l, p, u) {
        return k(($b[l] && $b[l].get || h)(a, l, p, u));
      } : a;
    }, quickSetter:function(a, g, f) {
      if (1 < (a = oa(a)).length) {
        var d = a.map(function(t) {
          return Za.quickSetter(t, g, f);
        }), h = d.length;
        return function(t) {
          for (var x = h; x--;) {
            d[x](t);
          }
        };
      }
      a = a[0] || {};
      var k = $b[g], l = Lc(a), p = l.harness && (l.harness.aliases || {})[g] || g, u = k ? function(t) {
        var x = new k();
        n._pt = 0;
        x.init(a, f ? t + f : t, n, 0, [a]);
        x.render(1, x);
        n._pt && Na(1, n);
      } : l.set(a, p);
      return k ? u : function(t) {
        return u(a, p, f ? t + f : t, l, 1);
      };
    }, quickTo:function(a, g, f) {
      function d(l, p, u) {
        return k.resetTo(g, l, p, u);
      }
      var h, k = Za.to(a, w(((h = {})[g] = "+=0.1", h.paused = !0, h), f || {}));
      return d.tween = k, d;
    }, isTweening:function(a) {
      return 0 < Ia.getTweensOf(a, !0).length;
    }, defaults:function(a) {
      return a && a.ease && (a.ease = ha(a.ease, rd.ease)), wd(rd, a || {});
    }, config:function(a) {
      return wd(ib, a || {});
    }, registerEffect:function(a) {
      var g = a.name, f = a.effect, d = a.defaults, h = a.extendTimeline;
      (a.plugins || "").split(",").forEach(function(k) {
        return k && !$b[k] && !wb[k] && console.warn(g + " effect requires " + k + " plugin.");
      });
      e[g] = function(k, l, p) {
        return f(oa(k), lb(l || {}, d), p);
      };
      h && (Da.prototype[g] = function(k, l, p) {
        return this.add(e[g](k, cc(l) ? l : (p = l) && {}, this), p);
      });
    }, registerEase:function(a, g) {
      S[a] = ha(g);
    }, parseEase:function(a, g) {
      return arguments.length ? ha(a, g) : S;
    }, getById:function(a) {
      return Ia.getById(a);
    }, exportRoot:function(a, g) {
      void 0 === a && (a = {});
      var f, d = new Da(a);
      d.smoothChildTiming = !1 !== a.smoothChildTiming;
      Ia.remove(d);
      d._dp = 0;
      d._time = d._tTime = Ia._time;
      for (f = Ia._first; f;) {
        var h = f._next;
        !g && !f._dur && f instanceof ta && f.vars.onComplete === f._targets[0] || Ma(d, f, f._start - f._delay);
        f = h;
      }
      return Ma(Ia, d, 0), d;
    }, context:function(a, g) {
      return a ? new Jc(a, g) : Ta;
    }, matchMedia:function(a) {
      return new jd(a);
    }, matchMediaRefresh:function() {
      return hb.forEach(function(a) {
        var g, f, d = a.conditions;
        for (f in d) {
          d[f] && (d[f] = !1, g = 1);
        }
        g && a.revert();
      }) || ze();
    }, addEventListener:function(a, g) {
      var f = Ea[a] || (Ea[a] = []);
      ~f.indexOf(g) || f.push(g);
    }, removeEventListener:function(a, g) {
      var f = Ea[a], d = f && f.indexOf(g);
      0 <= d && f.splice(d, 1);
    }, utils:{wrap:function h(g, f, d) {
      var k = f - g;
      return db(g) ? Wd(g, h(0, g.length), f) : dc(d, function(l) {
        return (k + (l - g) % k) % k + g;
      });
    }, wrapYoyo:function k(f, d, h) {
      var l = d - f, p = 2 * l;
      return db(f) ? Wd(f, k(0, f.length - 1), d) : dc(h, function(u) {
        return f + (l < (u = (p + (u - f) % p) % p || 0) ? p - u : u);
      });
    }, distribute:pe, random:re, snap:Pe, normalize:function(f, d, h) {
      return ra(f, d, 0, 1, h);
    }, getUnit:Ab, clamp:function(f, d, h) {
      return dc(h, function(k) {
        return pa(f, d, k);
      });
    }, splitColor:eb, toArray:oa, selector:Vd, mapRange:ra, pipe:function() {
      for (var f = arguments.length, d = Array(f), h = 0; h < f; h++) {
        d[h] = arguments[h];
      }
      return function(k) {
        return d.reduce(function(l, p) {
          return p(l);
        }, k);
      };
    }, unitize:function(f, d) {
      return function(h) {
        return f(parseFloat(h)) + (d || Ab(h));
      };
    }, interpolate:function p(d, h, k, l) {
      var u = isNaN(d + h) ? 0 : function(G) {
        return (1 - G) * d + G * h;
      };
      if (!u) {
        var t, x = Sa(d), z = {};
        if (!0 === k && (l = 1) && (k = null), x) {
          d = {p:d}, h = {p:h};
        } else if (db(d) && !db(h)) {
          var y = [];
          var v = d.length;
          var I = v - 2;
          for (k = 1; k < v; k++) {
            y.push(p(d[k - 1], d[k]));
          }
          v--;
          u = function(G) {
            G *= v;
            var B = Math.min(I, ~~G);
            return y[B](G - B);
          };
          k = h;
        } else {
          l || (d = w(db(d) ? [] : {}, d));
        }
        if (!y) {
          for (t in h) {
            vc.call(z, d, t, "get", h[t]);
          }
          u = function(G) {
            return Na(G, z) || (x ? d.p : d);
          };
        }
      }
      return dc(k, u);
    }, shuffle:Oe}, install:ke, effects:e, ticker:aa, updateRoot:Da.updateRoot, plugins:$b, globalTimeline:Ia, core:{PropTween:sb, globals:He, Tween:ta, Timeline:Da, Animation:Ha, getCache:Lc, _removeLinkedListItem:ad, reverting:function() {
      return yb;
    }, context:function(d) {
      return d && Ta && (Ta.data.push(d), d._ctx = Ta), Ta;
    }, suppressOverwrites:function(d) {
      return de = d;
    }}};
    Rb("to,from,fromTo,delayedCall,set,killTweensOf", function(d) {
      return Ac[d] = ta[d];
    });
    aa.add(Da.updateRoot);
    var n = Ac.to({}, {duration:0});
    var Za = Ac.registerPlugin({name:"attr", init:function(d, h, k, l, p) {
      var u;
      for (u in this.tween = k, h) {
        var t = d.getAttribute(u) || "";
        (k = this.add(d, "setAttribute", (t || 0) + "", h[u], l, p, 0, 0, u)).op = u;
        k.b = t;
        this._props.push(u);
      }
    }, render:function(d, h) {
      for (var k = h._pt; k;) {
        yb ? k.set(k.t, k.p, k.b, k) : k.r(d, k.d), k = k._next;
      }
    }}, {name:"endArray", init:function(d, h) {
      for (var k = h.length; k--;) {
        this.add(d, k, d[k] || 0, h[k], 0, 0, 0, 0, 0, 1);
      }
    }}, nc("roundProps", qe), nc("modifiers"), nc("snap", Pe)) || Ac;
    ta.version = Da.version = Za.version = "3.12.2";
    var ge = 1;
    Kb() && qa();
    var Md, Ob, pc, hc, Va, Jb, Ka, pb, Qb = S.Power0, he = S.Power1, ie = S.Power2, Qd = S.Power3, kb = S.Power4, C = S.Linear, D = S.Quad, L = S.Cubic, K = S.Quart, ya = S.Quint, ja = S.Strong, Z = S.Elastic, sa = S.Back, Qa = S.SteppedEase, kc = S.Bounce, Ca = S.Sine, Ya = S.Expo, Bc = S.Circ, Nb = {}, Wc = 180 / Math.PI, td = Math.PI / 180, qc = Math.atan2, oc = /([A-Z])/g, jc = /(left|right|width|margin|padding|x)/i, $e = /[\s,\(]\S/, ob = {autoAlpha:"opacity,visibility", scale:"scaleX,scaleY", 
    alpha:"opacity"}, Oa = "transform", gc = Oa + "Origin", Kc = ["O", "Moz", "ms", "Ms", "Webkit"], Xb = function(d, h, k) {
      h = (h || Va).style;
      var l = 5;
      if (d in h && !k) {
        return d;
      }
      for (d = d.charAt(0).toUpperCase() + d.substr(1); l-- && !(Kc[l] + d in h);) {
      }
      return 0 > l ? null : (3 === l ? "ms" : 0 <= l ? Kc[l] : "") + d;
    }, Ue = {deg:1, rad:1, turn:1}, ce = {grid:1, flex:1}, yc = function(d, h, k, l) {
      var p;
      return hc || Ld(), h in ob && "transform" !== h && ~(h = ob[h]).indexOf(",") && (h = h.split(",")[0]), Nb[h] && "transform" !== h ? (p = We(d, l), p = "transformOrigin" !== h ? p[h] : p.svg ? p.origin : cf(Ra(d, gc)) + " " + p.zOrigin + "px") : (p = d.style[h]) && "auto" !== p && !l && !~(p + "").indexOf("calc(") || (p = ud[h] && ud[h](d, h, k) || Ra(d, h) || Ie(d, h) || ("opacity" === h ? 1 : 0)), k && !~(p + "").trim().indexOf(" ") ? Ic(d, h, p, k) + k : p;
    }, df = {top:"0%", bottom:"100%", left:"0%", right:"100%", center:"50%"}, ud = {clearProps:function(d, h, k, l, p) {
      if ("isFromStart" !== p.data) {
        return h = d._pt = new sb(d._pt, h, k, 0, 0, Ve), h.u = l, h.pr = -10, h.tween = p, d._props.push(k), 1;
      }
    }}, Ye = [1, 0, 0, 1, 0, 0], kf = {}, We = function(d, h) {
      var k = d._gsap || new Ga(d);
      if ("x" in k && !h && !k.uncache) {
        return k;
      }
      var l, p, u, t, x, z, y, v, I, G, B, F, J, A, O, Q, M, ka, ca, ea, X, fa, la, ma, Fa, Cb, Ba, jb, La, Xc, Db, bb, Eb = d.style, je = 0 > k.scaleX, lc = getComputedStyle(d), ef = Ra(d, gc) || "0";
      return l = p = u = z = y = v = I = G = B = 0, t = x = 1, k.svg = !(!d.getCTM || !d.getCTM || d.parentNode && !d.ownerSVGElement || !Ae(d)), lc.translate && ("none" === lc.translate && "none" === lc.scale && "none" === lc.rotate || (Eb[Oa] = ("none" !== lc.translate ? "translate3d(" + (lc.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== lc.rotate ? "rotate(" + lc.rotate + ") " : "") + ("none" !== lc.scale ? "scale(" + lc.scale.split(" ").join(",") + ") " : "") + 
      ("none" !== lc[Oa] ? lc[Oa] : "")), Eb.scale = Eb.rotate = Eb.translate = "none"), A = Be(d, k.svg), k.svg && (ma = k.uncache ? (Fa = d.getBBox(), ef = k.xOrigin - Fa.x + "px " + (k.yOrigin - Fa.y) + "px", "") : !h && d.getAttribute("data-svg-origin"), Ce(d, ma || ef, !!ma || k.originIsAbsolute, !1 !== k.smooth, A)), F = k.xOrigin || 0, J = k.yOrigin || 0, A !== Ye && (ka = A[0], ca = A[1], ea = A[2], X = A[3], l = fa = A[4], p = la = A[5], 6 === A.length ? (t = Math.sqrt(ka * ka + ca * ca), 
      x = Math.sqrt(X * X + ea * ea), z = ka || ca ? qc(ca, ka) * Wc : 0, (I = ea || X ? qc(ea, X) * Wc + z : 0) && (x *= Math.abs(Math.cos(I * td))), k.svg && (l -= F - (F * ka + J * ea), p -= J - (F * ca + J * X))) : (bb = A[6], Xc = A[7], Ba = A[8], jb = A[9], La = A[10], Db = A[11], l = A[12], p = A[13], u = A[14], y = (O = qc(bb, La)) * Wc, O && (ma = fa * (Q = Math.cos(-O)) + Ba * (M = Math.sin(-O)), Fa = la * Q + jb * M, Cb = bb * Q + La * M, Ba = fa * -M + Ba * Q, jb = la * -M + jb * Q, La = 
      bb * -M + La * Q, Db = Xc * -M + Db * Q, fa = ma, la = Fa, bb = Cb), v = (O = qc(-ea, La)) * Wc, O && (Q = Math.cos(-O), Db = X * (M = Math.sin(-O)) + Db * Q, ka = ka * Q - Ba * M, ca = ca * Q - jb * M, ea = ea * Q - La * M), z = (O = qc(ca, ka)) * Wc, O && (ma = ka * (Q = Math.cos(O)) + ca * (M = Math.sin(O)), Fa = fa * Q + la * M, ca = ca * Q - ka * M, la = la * Q - fa * M, ka = ma, fa = Fa), y && 359.9 < Math.abs(y) + Math.abs(z) && (y = z = 0, v = 180 - v), t = cb(Math.sqrt(ka * ka + ca * 
      ca + ea * ea)), x = cb(Math.sqrt(la * la + bb * bb)), O = qc(fa, la), I = 2E-4 < Math.abs(O) ? O * Wc : 0, B = Db ? 1 / (0 > Db ? -Db : Db) : 0), k.svg && (ma = d.getAttribute("transform"), k.forceCSS = d.setAttribute("transform", "") || !Xe(Ra(d, Oa)), ma && d.setAttribute("transform", ma))), 90 < Math.abs(I) && 270 > Math.abs(I) && (je ? (t *= -1, I += 0 >= z ? 180 : -180, z += 0 >= z ? 180 : -180) : (x *= -1, I += 0 >= I ? 180 : -180)), h = h || k.uncache, k.x = l - ((k.xPercent = l && (!h && 
      k.xPercent || (Math.round(d.offsetWidth / 2) === Math.round(-l) ? -50 : 0))) ? d.offsetWidth * k.xPercent / 100 : 0) + "px", k.y = p - ((k.yPercent = p && (!h && k.yPercent || (Math.round(d.offsetHeight / 2) === Math.round(-p) ? -50 : 0))) ? d.offsetHeight * k.yPercent / 100 : 0) + "px", k.z = u + "px", k.scaleX = cb(t), k.scaleY = cb(x), k.rotation = cb(z) + "deg", k.rotationX = cb(y) + "deg", k.rotationY = cb(v) + "deg", k.skewX = I + "deg", k.skewY = G + "deg", k.transformPerspective = B + 
      "px", (k.zOrigin = parseFloat(ef.split(" ")[2]) || 0) && (Eb[gc] = cf(ef)), k.xOffset = k.yOffset = 0, k.force3D = ib.force3D, k.renderTransform = k.svg ? nf : pb ? lf : of, k.uncache = 0, k;
    }, cf = function(d) {
      return (d = d.split(" "))[0] + " " + d[1];
    }, of = function(d, h) {
      h.z = "0px";
      h.rotationY = h.rotationX = "0deg";
      h.force3D = 0;
      lf(d, h);
    }, lf = function(d, h) {
      var k = h || this, l = k.xPercent, p = k.yPercent, u = k.x, t = k.y, x = k.z, z = k.rotation, y = k.rotationY, v = k.rotationX, I = k.skewX, G = k.skewY, B = k.scaleX, F = k.scaleY, J = k.transformPerspective, A = k.force3D, O = k.target;
      k = k.zOrigin;
      var Q = "";
      A = "auto" === A && d && 1 !== d || !0 === A;
      if (k && ("0deg" !== v || "0deg" !== y)) {
        var M = parseFloat(y) * td, ka = Math.sin(M), ca = Math.cos(M);
        M = parseFloat(v) * td;
        var ea = Math.cos(M);
        u = De(O, u, ka * ea * -k);
        t = De(O, t, -Math.sin(M) * -k);
        x = De(O, x, ca * ea * -k + k);
      }
      "0px" !== J && (Q += "perspective(" + J + ") ");
      (l || p) && (Q += "translate(" + l + "%, " + p + "%) ");
      !A && "0px" === u && "0px" === t && "0px" === x || (Q += "0px" !== x || A ? "translate3d(" + u + ", " + t + ", " + x + ") " : "translate(" + u + ", " + t + ") ");
      "0deg" !== z && (Q += "rotate(" + z + ") ");
      "0deg" !== y && (Q += "rotateY(" + y + ") ");
      "0deg" !== v && (Q += "rotateX(" + v + ") ");
      "0deg" === I && "0deg" === G || (Q += "skew(" + I + ", " + G + ") ");
      1 === B && 1 === F || (Q += "scale(" + B + ", " + F + ") ");
      O.style[Oa] = Q || "translate(0, 0)";
    }, nf = function(d, h) {
      var k, l, p, u, t, x = h || this, z = x.xPercent, y = x.yPercent, v = x.x, I = x.y, G = x.rotation, B = x.skewX, F = x.skewY, J = x.scaleX, A = x.scaleY, O = x.target, Q = x.xOrigin, M = x.yOrigin, ka = x.xOffset, ca = x.yOffset;
      x = x.forceCSS;
      var ea = parseFloat(v), X = parseFloat(I);
      G = parseFloat(G);
      B = parseFloat(B);
      (F = parseFloat(F)) && (B += F = parseFloat(F), G += F);
      G || B ? (G *= td, B *= td, k = Math.cos(G) * J, l = Math.sin(G) * J, p = Math.sin(G - B) * -A, u = Math.cos(G - B) * A, B && (F *= td, t = Math.tan(B - F), p *= t = Math.sqrt(1 + t * t), u *= t, F && (t = Math.tan(F), k *= t = Math.sqrt(1 + t * t), l *= t)), k = cb(k), l = cb(l), p = cb(p), u = cb(u)) : (k = J, u = A, l = p = 0);
      (ea && !~(v + "").indexOf("px") || X && !~(I + "").indexOf("px")) && (ea = Ic(O, "x", v, "px"), X = Ic(O, "y", I, "px"));
      (Q || M || ka || ca) && (ea = cb(ea + Q - (Q * k + M * p) + ka), X = cb(X + M - (Q * l + M * u) + ca));
      (z || y) && (t = O.getBBox(), ea = cb(ea + z / 100 * t.width), X = cb(X + y / 100 * t.height));
      t = "matrix(" + k + "," + l + "," + p + "," + u + "," + ea + "," + X + ")";
      O.setAttribute("transform", t);
      x && (O.style[Oa] = t);
    };
    Rb("padding,margin,Width,Radius", function(d, h) {
      var k = (3 > h ? ["Top", "Right", "Bottom", "Left"] : ["TopLeft", "TopRight", "BottomRight", "BottomLeft"]).map(function(l) {
        return 2 > h ? d + l : "border" + l + d;
      });
      ud[1 < h ? "border" + d : d] = function(l, p, u, t, x) {
        var z, y;
        if (4 > arguments.length) {
          return z = k.map(function(v) {
            return yc(l, v, u);
          }), 5 === (y = z.join(" ")).split(z[0]).length ? z[0] : y;
        }
        z = (t + "").split(" ");
        y = {};
        k.forEach(function(v, I) {
          return y[v] = z[I] = z[I] || z[(I - 1) / 2 | 0];
        });
        l.init(p, y, x);
      };
    });
    var hf = {name:"css", register:Ld, targetTest:function(d) {
      return d.style && d.nodeType;
    }, init:function(d, h, k, l, p) {
      var u, t, x, z, y, v, I, G, B, F, J, A, O, Q, M, ka = this._props, ca = d.style, ea = k.vars.startAt;
      for (v in hc || Ld(), this.styles = this.styles || be(d), M = this.styles.props, this.tween = k, h) {
        if ("autoRound" !== v && (u = h[v], !$b[v] || !ed(v, h, k, l, d, p))) {
          if (z = typeof u, y = ud[v], "function" === z && (z = typeof(u = u.call(k, l, d, p))), "string" === z && ~u.indexOf("random(") && (u = Ad(u)), y) {
            y(this, d, v, u, k) && (Q = 1);
          } else if ("--" === v.substr(0, 2)) {
            var X = (getComputedStyle(d).getPropertyValue(v) + "").trim();
            u += "";
            da.lastIndex = 0;
            da.test(X) || (I = Ab(X), G = Ab(u));
            G ? I !== G && (X = Ic(d, v, X, G) + G) : I && (u += I);
            this.add(ca, "setProperty", X, u, l, p, 0, 0, v);
            ka.push(v);
            M.push(v, 0, ca[v]);
          } else if ("undefined" !== z) {
            if (ea && v in ea ? (X = "function" == typeof ea[v] ? ea[v].call(k, l, d, p) : ea[v], Sa(X) && ~X.indexOf("random(") && (X = Ad(X)), Ab(X + "") || (X += ib.units[v] || Ab(yc(d, v)) || ""), "=" === (X + "").charAt(1) && (X = yc(d, v))) : X = yc(d, v), x = parseFloat(X), (B = "string" === z && "=" === u.charAt(1) && u.substr(0, 2)) && (u = u.substr(2)), t = parseFloat(u), v in ob && ("autoAlpha" === v && (1 === x && "hidden" === yc(d, "visibility") && t && (x = 0), M.push("visibility", 0, 
            ca.visibility), ic(this, ca, "visibility", x ? "inherit" : "hidden", t ? "inherit" : "hidden", !t)), "scale" !== v && "transform" !== v && ~(v = ob[v]).indexOf(",") && (v = v.split(",")[0])), F = v in Nb) {
              if (this.styles.save(v), J || ((A = d._gsap).renderTransform && !h.parseTransform || We(d, h.parseTransform), O = !1 !== h.smoothOrigin && A.smooth, (J = this._pt = new sb(this._pt, ca, Oa, 0, 1, A.renderTransform, A, 0, -1)).dep = 1), "scale" === v) {
                this._pt = new sb(this._pt, A, "scaleY", A.scaleY, (B ? Sb(A.scaleY, B + t) : t) - A.scaleY || 0, qd), this._pt.u = 0, ka.push("scaleY", v), v += "X";
              } else {
                if ("transformOrigin" === v) {
                  M.push(gc, 0, ca[gc]);
                  F = u;
                  var fa = F.split(" "), la = fa[0], ma = fa[1] || "50%";
                  u = ("top" !== la && "bottom" !== la && "left" !== ma && "right" !== ma || (F = la, la = ma, ma = F), fa[0] = df[la] || la, fa[1] = df[ma] || ma, fa.join(" "));
                  A.svg ? Ce(d, u, 0, O, 0, this) : ((G = parseFloat(u.split(" ")[2]) || 0) !== A.zOrigin && ic(this, A, "zOrigin", A.zOrigin, G), ic(this, ca, v, cf(X), cf(u)));
                  continue;
                }
                if ("svgOrigin" === v) {
                  Ce(d, u, 1, O, 0, this);
                  continue;
                }
                if (v in kf) {
                  fa = void 0;
                  la = A;
                  F = v;
                  ma = x;
                  var Fa = B ? Sb(x, B + u) : u, Cb = Sa(Fa), Ba = parseFloat(Fa) * (Cb && ~Fa.indexOf("rad") ? Wc : 1) - ma, jb = ma + Ba + "deg";
                  Cb && ("short" === (fa = Fa.split("_")[1]) && (Ba %= 360) !== Ba % 180 && (Ba += 0 > Ba ? 360 : -360), "cw" === fa && 0 > Ba ? Ba = (Ba + 36E9) % 360 - 360 * ~~(Ba / 360) : "ccw" === fa && 0 < Ba && (Ba = (Ba - 36E9) % 360 - 360 * ~~(Ba / 360)));
                  this._pt = fa = new sb(this._pt, la, F, ma, Ba, Te);
                  fa.e = jb;
                  fa.u = "deg";
                  this._props.push(F);
                  continue;
                }
                if ("smoothOrigin" === v) {
                  ic(this, A, "smooth", A.smooth, u);
                  continue;
                }
                if ("force3D" === v) {
                  A[v] = u;
                  continue;
                }
                if ("transform" === v) {
                  Cb = Fa = jb = ma = la = fa = F = void 0;
                  Ba = u;
                  var La = d;
                  B = hd({}, La._gsap);
                  var Xc = La.style;
                  for (Fa in B.svg ? (jb = La.getAttribute("transform"), La.setAttribute("transform", ""), Xc[Oa] = Ba, Cb = We(La, 1), Od(La, Oa), La.setAttribute("transform", jb)) : (jb = getComputedStyle(La)[Oa], Xc[Oa] = Ba, Cb = We(La, 1), Xc[Oa] = jb), Nb) {
                    (jb = B[Fa]) !== (ma = Cb[Fa]) && 0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(Fa) && (la = Ab(jb) !== (F = Ab(ma)) ? Ic(La, Fa, jb, F) : parseFloat(jb), fa = parseFloat(ma), this._pt = new sb(this._pt, Cb, Fa, la, fa - la, qd), this._pt.u = F || 0, this._props.push(Fa));
                  }
                  hd(Cb, B);
                  continue;
                }
              }
            } else {
              v in ca || (v = Xb(v) || v);
            }
            if (F || (t || 0 === t) && (x || 0 === x) && !$e.test(u) && v in ca) {
              t = t || 0, (I = (X + "").substr((x + "").length)) !== (G = Ab(u) || (v in ib.units ? ib.units[v] : I)) && (x = Ic(d, v, X, G)), this._pt = new sb(this._pt, F ? A : ca, v, x, (B ? Sb(x, B + t) : t) - x, F || "px" !== G && "zIndex" !== v || !1 === h.autoRound ? qd : ub), this._pt.u = G || 0, I !== G && "%" !== G && (this._pt.b = X, this._pt.r = Wb);
            } else if (v in ca) {
              la = fa = void 0;
              ma = void 0;
              var Db = Cb = Fa = jb = void 0;
              Ba = d;
              La = v;
              var bb = X;
              B = B ? B + u : u;
              if (!bb || "none" === bb) {
                var Eb = (Xc = Xb(La, Ba, 1)) && Ra(Ba, Xc, 1);
                Eb && Eb !== bb ? (La = Xc, bb = Eb) : "borderColor" === La && (bb = Ra(Ba, "borderTopColor"));
              }
              Eb = new sb(this._pt, Ba.style, La, 0, 1, sd);
              var je = 0, lc = 0;
              if (Eb.b = bb, Eb.e = B, bb += "", "auto" === (B += "") && (Ba.style[La] = B, B = Ra(Ba, La) || B, Ba.style[La] = bb), af(Db = [bb, B]), B = Db[1], Xc = Db[0].match(Oc) || [], (B.match(Oc) || []).length) {
                for (; bb = Oc.exec(B);) {
                  Db = bb[0], bb = B.substring(je, bb.index), Fa ? Fa = (Fa + 1) % 5 : "rgba(" !== bb.substr(-5) && "hsla(" !== bb.substr(-5) || (Fa = 1), Db !== (jb = Xc[lc++] || "") && (Cb = parseFloat(jb) || 0, fa = jb.substr((Cb + "").length), "=" === Db.charAt(1) && (Db = Sb(Cb, Db) + fa), ma = parseFloat(Db), la = Db.substr((ma + "").length), je = Oc.lastIndex - la.length, la || (la = la || ib.units[La] || fa, je === B.length && (B += la, Eb.e += la)), fa !== la && (Cb = Ic(Ba, La, jb, la) || 
                  0), Eb._pt = {_next:Eb._pt, p:bb || 1 === lc ? bb : ",", s:Cb, c:ma - Cb, m:Fa && 4 > Fa || "zIndex" === La ? Math.round : 0});
                }
                Eb.c = je < B.length ? B.substring(je, B.length) : "";
              } else {
                Eb.r = "display" === La && "none" === B ? N : nb;
              }
              Ee.test(B) && (Eb.e = 0);
              this._pt = Eb;
            } else if (v in d) {
              this.add(d, v, X || d[v], B ? B + u : u, l, p);
            } else if ("parseTransform" !== v) {
              kd(v, u);
              continue;
            }
            F || (v in ca ? M.push(v, 0, ca[v]) : M.push(v, 1, X || d[v]));
            ka.push(v);
          }
        }
      }
      Q && wa(this);
    }, render:function(d, h) {
      if (h.tween._time || !Ka()) {
        for (var k = h._pt; k;) {
          k.r(d, k.d), k = k._next;
        }
      } else {
        h.styles.revert();
      }
    }, get:yc, aliases:ob, getSetter:function(d, h, k) {
      var l = ob[h];
      return l && 0 > l.indexOf(",") && (h = l), h in Nb && h !== gc && (d._gsap.x || yc(d, "x")) ? k && Jb === k ? "scale" === h ? xc : ab : (Jb = k || {}, "scale" === h ? Ua : gd) : d.style && void 0 !== d.style[h] ? Id : ~h.indexOf("-") ? Aa : Nc(d, h);
    }, core:{_removeProperty:Od, _getMatrix:Be}};
    Za.utils.checkPrefix = Xb;
    Za.core.getStyleSaver = be;
    var mf = Rb("x,y,z,scale,scaleX,scaleY,xPercent,yPercent,rotation,rotationX,rotationY,skewX,skewY,transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(d) {
      Nb[d] = 1;
    });
    Rb("rotation,rotationX,rotationY,skewX,skewY", function(d) {
      ib.units[d] = "deg";
      kf[d] = 1;
    });
    ob[mf[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent,rotation,rotationX,rotationY,skewX,skewY";
    Rb("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(d) {
      d = d.split(":");
      ob[d[1]] = mf[d[0]];
    });
    Rb("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(d) {
      ib.units[d] = "px";
    });
    Za.registerPlugin(hf);
    var jf = Za.registerPlugin(hf) || Za, pf = jf.core.Tween;
    na.Back = sa;
    na.Bounce = kc;
    na.CSSPlugin = hf;
    na.Circ = Bc;
    na.Cubic = L;
    na.Elastic = Z;
    na.Expo = Ya;
    na.Linear = C;
    na.Power0 = Qb;
    na.Power1 = he;
    na.Power2 = ie;
    na.Power3 = Qd;
    na.Power4 = kb;
    na.Quad = D;
    na.Quart = K;
    na.Quint = ya;
    na.Sine = Ca;
    na.SteppedEase = Qa;
    na.Strong = ja;
    na.TimelineLite = Da;
    na.TimelineMax = Da;
    na.TweenLite = ta;
    na.TweenMax = pf;
    na["default"] = jf;
    na.gsap = jf;
    "undefined" === typeof window || window !== na ? Object.defineProperty(na, "__esModule", {value:!0}) : delete na["default"];
  });
  /*
   ScrollTrigger 3.12.2
   https://greensock.com
  
   @license Copyright 2023, GreenSock. All rights reserved.
   Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
   @author: Jack Doyle, jack@greensock.com
  */
  !function(na, rc) {
    "object" == typeof exports && "undefined" != typeof module ? rc(exports) : "function" == typeof define && define.amd ? define(["exports"], rc) : rc((na = na || self).window = na.window || {});
  }(this, function(na) {
    function rc(e, m) {
      for (var q = 0; q < m.length; q++) {
        var r = m[q];
        r.enumerable = r.enumerable || !1;
        r.configurable = !0;
        "value" in r && (r.writable = !0);
        Object.defineProperty(e, r.key, r);
      }
    }
    function Cc() {
      return fb || "undefined" != typeof window && (fb = window.gsap) && fb.registerPlugin && fb;
    }
    function Sa(e, m) {
      return ~nc.indexOf(e) && nc[nc.indexOf(e) + 1][m];
    }
    function za(e, m, q, r, w) {
      return e.addEventListener(m, q, {passive:!r, capture:!!w});
    }
    function sc() {
      return Sc && Sc.isPressed || ua.cache++;
    }
    function cc(e, m) {
      function q(r) {
        if (r || 0 === r) {
          ze && (Lb.history.scrollRestoration = "manual");
          var w = Sc && Sc.isPressed;
          r = q.v = Math.round(r) || (Sc && Sc.iOS ? 1 : 0);
          e(r);
          q.cacheID = ua.cache;
          w && Te("ss", r);
        } else {
          (m || ua.cache !== q.cacheID || Te("ref")) && (q.cacheID = ua.cache, q.v = e());
        }
        return q.v + q.offset;
      }
      return q.offset = 0, e && q;
    }
    function Kb(e, m) {
      return (m && m._ctx && m._ctx.selector || fb.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== fb.config().nullTargetWarn ? console.warn("Element not found:", e) : null);
    }
    function tc(e, m) {
      var q = m.s, r = m.sc;
      ~Gd.indexOf(e) && (e = Fc.scrollingElement || Gc);
      var w = ua.indexOf(e), E = r === ub.sc ? 1 : 2;
      ~w || (w = ua.push(e) - 1);
      ua[w + E] || za(e, "scroll", sc);
      var H = ua[w + E];
      r = H || (ua[w + E] = cc(Sa(e, q), !0) || (~Gd.indexOf(e) ? r : cc(function(P) {
        return arguments.length ? e[q] = P : e[q];
      })));
      return r.target = e, H || (r.smooth = "smooth" === fb.getProperty(e, "scrollBehavior")), r;
    }
    function ke(e, m, q) {
      function r(W, oa) {
        var ra = qd();
        oa || U < ra - H ? (E = w, w = W, P = H, H = ra) : q ? w += W : w = E + (W - E) / (ra - P) * (H - P);
      }
      var w = e, E = e, H = qd(), P = H, U = m || 50, pa = Math.max(500, 3 * U);
      return {update:r, reset:function() {
        E = w = q ? 0 : w;
        P = H = 0;
      }, getVelocity:function(W) {
        var oa = P, ra = E, Y = qd();
        return !W && 0 !== W || W === w || r(W), H === P || pa < Y - P ? 0 : (w + (q ? ra : -ra)) / ((q ? Y : H) - oa) * 1e3;
      }};
    }
    function kd(e, m) {
      return m && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
    }
    function He(e) {
      var m = Math.max.apply(Math, e);
      e = Math.min.apply(Math, e);
      return Math.abs(m) >= Math.abs(e) ? m : e;
    }
    function vd() {
      (xe = fb.core.globals().ScrollTrigger) && xe.core && function() {
        var e = xe.core, m = e.bridge || {}, q = e._scrollers;
        e = e._proxies;
        q.push.apply(q, ua);
        e.push.apply(e, nc);
        ua = q;
        nc = e;
        Te = function(r, w) {
          return m[r](w);
        };
      }();
    }
    function le(e) {
      return (fb = e || Cc()) && "undefined" != typeof document && document.body && (Lb = window, Gc = (Fc = document).documentElement, pd = Fc.body, Gd = [Lb, Fc, Gc, pd], fb.utils.clamp, ye = fb.core.context || function() {
      }, ed = "onpointerenter" in pd ? "pointer" : "mouse", Se = nb.isTouch = Lb.matchMedia && Lb.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Lb || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0, mc = nb.eventTypes = ("ontouchstart" in Gc ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Gc ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
        return ze = 0;
      }, 500), vd(), we = 1), we;
    }
    function Lc(e) {
      this.init(e);
    }
    function Ie(e, m, q) {
      var r = Bb(e) && ("clamp(" === e.substr(0, 6) || -1 < e.indexOf("max"));
      return (q["_" + m + "Clamp"] = r) ? e.substr(6, e.length - 7) : e;
    }
    function Rb(e, m) {
      return !m || Bb(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")";
    }
    function cb() {
      return Ld = 1;
    }
    function xb() {
      return Ld = 0;
    }
    function Sb(e) {
      return e;
    }
    function Yc(e) {
      return Math.round(1E5 * e) / 1E5 || 0;
    }
    function Ke() {
      return N || "undefined" != typeof window && (N = window.gsap) && N.registerPlugin && N;
    }
    function Le(e) {
      return ("Height" === e ? Zb : Aa["inner" + e]) || xc["client" + e] || Ua["client" + e];
    }
    function Me(e) {
      return Sa(e, "getBoundingClientRect") || (~gd.indexOf(e) ? function() {
        return Fe.width = Aa.innerWidth, Fe.height = Zb, Fe;
      } : function() {
        return ib(e);
      });
    }
    function lb(e, m) {
      var q = m.s, r = m.d2, w = m.d, E = m.a;
      return Math.max(0, (q = "scroll" + r) && (E = Sa(e, q)) ? E() - Me(e)()[w] : ~gd.indexOf(e) ? (xc[q] || Ua[q]) - Le(r) : e[q] - e["offset" + r]);
    }
    function wd(e, m) {
      for (var q = 0; q < ic.length; q += 3) {
        m && !~m.indexOf(ic[q + 1]) || e(ic[q], ic[q + 1], ic[q + 2]);
      }
    }
    function zb(e) {
      return "function" == typeof e;
    }
    function Zc(e) {
      return "number" == typeof e;
    }
    function $c(e) {
      return "object" == typeof e;
    }
    function ad(e, m, q) {
      return e && e.progress(m ? 0 : 1) && q && e.pause();
    }
    function Dc(e, m) {
      if (e.enabled) {
        var q = m(e);
        q && q.totalTime && (e.callbackAnimation = q);
      }
    }
    function qb(e) {
      return Aa.getComputedStyle(e);
    }
    function me(e, m) {
      for (var q in m) {
        q in e || (e[q] = m[q]);
      }
      return e;
    }
    function oe(e, m) {
      var q = m.d2;
      return e["offset" + q] || e["client" + q] || 0;
    }
    function Sd(e) {
      var m, q = [], r = e.labels;
      e = e.duration();
      for (m in r) {
        q.push(r[m] / e);
      }
      return q;
    }
    function xd(e) {
      var m = N.utils.snap(e), q = Array.isArray(e) && e.slice(0).sort(function(r, w) {
        return r - w;
      });
      return q ? function(r, w, E) {
        if (void 0 === E && (E = .001), !w) {
          return m(r);
        }
        if (0 < w) {
          r -= E;
          for (w = 0; w < q.length; w++) {
            if (q[w] >= r) {
              return q[w];
            }
          }
          return q[w - 1];
        }
        w = q.length;
        for (r += E; w--;) {
          if (q[w] <= r) {
            return q[w];
          }
        }
        return q[0];
      } : function(r, w, E) {
        void 0 === E && (E = .001);
        var H = m(r);
        return !w || Math.abs(H - r) < E || 0 > H - r == 0 > w ? H : m(0 > w ? r - e : r + e);
      };
    }
    function ld(e, m, q, r) {
      return q.split(",").forEach(function(w) {
        return e(m, w, r);
      });
    }
    function rb(e, m, q, r, w) {
      return e.addEventListener(m, q, {passive:!r, capture:!!w});
    }
    function Ma(e, m, q, r) {
      return e.removeEventListener(m, q, !!r);
    }
    function Td(e, m, q) {
      (q = q && q.wheelHandler) && (e(m, "wheel", q), e(m, "touchmove", q));
    }
    function Ud(e, m) {
      if (Bb(e)) {
        var q = e.indexOf("="), r = ~q ? (e.charAt(q - 1) + 1) * parseFloat(e.substr(q + 1)) : 0;
        ~q && (e.indexOf("%") > q && (r *= m / 100), e = e.substr(0, q - 1));
        e = r + (e in Ja ? Ja[e] * m : ~e.indexOf("%") ? parseFloat(e) * m / 100 : parseFloat(e) || 0);
      }
      return e;
    }
    function Ec(e, m, q, r, w, E, H, P) {
      var U = w.startColor, pa = w.endColor, W = w.fontSize, oa = w.indent, ra = w.fontWeight;
      w = ab.createElement("div");
      var Y = !!~gd.indexOf(q) || "fixed" === Sa(q, "pinType"), Hb = -1 !== e.indexOf("scroller");
      q = Y ? Ua : q;
      var ia = -1 !== e.indexOf("start");
      U = ia ? U : pa;
      W = "border-color:" + U + ";font-size:" + W + ";color:" + U + ";font-weight:" + ra + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return W += "position:" + ((Hb || P) && Y ? "fixed;" : "absolute;"), !Hb && !P && Y || (W += (r === ub ? Ed : Zd) + ":" + (E + parseFloat(oa)) + "px;"), H && (W += "box-sizing:border-box;text-align:left;width:" + H.offsetWidth + "px;"), w._isStart = ia, w.setAttribute("class", "gsap-marker-" + e + (m ? " marker-" + m : "")), w.style.cssText = W, w.innerText = m || 0 === m ? e + "-" + m : e, q.children[0] ? q.insertBefore(w, q.children[0]) : q.appendChild(w), w._offset = w["offset" + r.op.d2], 
      Dd(w, 0, r, ia), w;
    }
    function yd() {
      return 34 < Ib() - mb && (md = md || requestAnimationFrame(zc));
    }
    function dc() {
      bc && bc.isPressed && !(bc.startX > Ua.clientWidth) || (ua.cache++, bc ? md = md || requestAnimationFrame(zc) : zc(), mb || nd("scrollStart"), mb = Ib());
    }
    function Ab() {
      De = Aa.innerWidth;
      Ce = Aa.innerHeight;
    }
    function zd() {
      ua.cache++;
      Ra || Xe || ab.fullscreenElement || ab.webkitFullscreenElement || Be && De === Aa.innerWidth && !(Math.abs(Aa.innerHeight - Ce) > .25 * Aa.innerHeight) || $d.restart(!0);
    }
    function Vd() {
      return Ma(xa, "scrollEnd", Vd) || Mc(!0);
    }
    function Oe(e) {
      for (var m = 0; m < ac.length; m += 5) {
        (!e || ac[m + 4] && ac[m + 4].query === e) && (ac[m].style.cssText = ac[m + 1], ac[m].getBBox && ac[m].setAttribute("transform", ac[m + 2] || ""), ac[m + 3].uncache = 1);
      }
    }
    function pe(e, m) {
      var q;
      for (Pb = 0; Pb < va.length; Pb++) {
        !(q = va[Pb]) || m && q._ctx !== m || (e ? q.kill(1) : q.revert(!0, !0));
      }
      m && Oe(m);
      m || nd("revert");
    }
    function qe(e, m) {
      ua.cache++;
      !m && vb || ua.forEach(function(q) {
        return zb(q) && q.cacheID++ && (q.rec = 0);
      });
      Bb(e) && (Aa.history.scrollRestoration = yb = e);
    }
    function Pe() {
      Ua.appendChild(Ta);
      Zb = Ta.offsetHeight || Aa.innerHeight;
      Ua.removeChild(Ta);
    }
    function re(e, m, q, r) {
      if (!e._gsap.swappedIn) {
        for (var w, E = Ee.length, H = m.style, P = e.style; E--;) {
          H[w = Ee[E]] = q[w];
        }
        H.position = "absolute" === q.position ? "absolute" : "relative";
        "inline" === q.display && (H.display = "inline-block");
        P[Zd] = P[Ed] = "auto";
        H.flexBasis = q.flexBasis || "auto";
        H.overflow = "visible";
        H.boxSizing = "border-box";
        H[Hc] = oe(e, Wb) + gb;
        H[Pc] = oe(e, ub) + gb;
        H[Xa] = P[Mb] = P.top = P.left = "0";
        wb(r);
        P[Hc] = P.maxWidth = q[Hc];
        P[Pc] = P.maxHeight = q[Pc];
        P[Xa] = q[Xa];
        e.parentNode !== m && (e.parentNode.insertBefore(m, e), m.appendChild(e));
        e._gsap.swappedIn = !0;
      }
    }
    function Wd(e) {
      for (var m = Rd.length, q = e.style, r = [], w = 0; w < m; w++) {
        r.push(Rd[w], q[Rd[w]]);
      }
      return r.t = e, r;
    }
    function Ad(e, m, q, r, w, E, H, P, U, pa, W, oa, ra, Y) {
      zb(e) && (e = e(P));
      Bb(e) && "max" === e.substr(0, 3) && (e = oa + ("=" === e.charAt(4) ? Ud("0" + e.substr(3), q) : 0));
      var Hb, ia = ra ? ra.time() : 0;
      if (ra && ra.seek(0), isNaN(e) || (e = +e), Zc(e)) {
        ra && (e = N.utils.mapRange(ra.scrollTrigger.start, ra.scrollTrigger.end, 0, oa, e)), H && Dd(H, q, r, !0);
      } else {
        zb(m) && (m = m(P));
        var $a, da;
        e = (e || "0").split(" ");
        var T = Kb(m, P) || Ua;
        ($a = ib(T) || {}, $a.left || $a.top) || "none" !== qb(T).display || (da = T.style.display, T.style.display = "block", $a = ib(T), da ? T.style.display = da : T.style.removeProperty("display"));
        m = Ud(e[0], $a[r.d]);
        da = Ud(e[1] || "0", q);
        e = $a[r.p] - U[r.p] - pa + m + w - da;
        H && Dd(H, da, r, 20 > q - da || H._isStart && 20 < da);
        q -= q - da;
      }
      if (Y && (P[Y] = e || -.001, 0 > e && (e = 0)), E) {
        q = e + q;
        w = E._isStart;
        var aa = "scroll" + r.d2;
        Dd(E, q, r, w && 20 < q || !w && (W ? Math.max(Ua[aa], xc[aa]) : E.parentNode[aa]) <= q + 1);
        W && (U = ib(H), W && (E.style[r.op.p] = U[r.op.p] - r.op.m - E._offset + gb));
      }
      return ra && T && (aa = ib(T), ra.seek(oa), Hb = ib(T), ra._caScrollDist = aa[r.p] - Hb[r.p], e = e / ra._caScrollDist * oa), ra && ra.seek(ia), ra ? e : Math.round(e);
    }
    function Qe(e, m, q, r) {
      if (e.parentNode !== m) {
        var w, E, H = e.style;
        if (m === Ua) {
          for (w in e._stOrig = H.cssText, E = qb(e)) {
            +w || ne.test(w) || !E[w] || "string" != typeof H[w] || "0" === w || (H[w] = E[w]);
          }
          H.top = q;
          H.left = r;
        } else {
          H.cssText = e._stOrig;
        }
        N.core.getCache(e).uncache = 1;
        m.appendChild(e);
      }
    }
    function Bd(e, m, q) {
      var r = m, w = r;
      return function(E) {
        var H = Math.round(e());
        return H !== r && H !== w && 3 < Math.abs(H - r) && 3 < Math.abs(H - w) && (E = H, q && q()), w = r, r = E;
      };
    }
    function Xd(e, m, q) {
      var r = {};
      r[m.p] = "+=" + q;
      N.set(e, r);
    }
    function te(e, m) {
      function q(E, H, P, U, pa) {
        var W = q.tween, oa = H.onComplete;
        P = P || r();
        var ra = Bd(r, P, function() {
          W.kill();
          q.tween = 0;
        });
        return pa = U && pa || 0, U = U || E - P, W && W.kill(), H[w] = E, (H.modifiers = {})[w] = function() {
          return ra(P + U * W.ratio + pa * W.ratio * W.ratio);
        }, H.onUpdate = function() {
          ua.cache++;
          zc();
        }, H.onComplete = function() {
          q.tween = 0;
          oa && oa.call(W);
        }, W = q.tween = N.to(e, H);
      }
      var r = tc(e, m), w = "_scroll" + m.p2;
      return (e[w] = r).wheelHandler = function() {
        return q.tween && q.tween.kill() && (q.tween = 0);
      }, rb(e, "wheel", r.wheelHandler), xa.isTouch && rb(e, "touchmove", r.wheelHandler), q;
    }
    function eb(e, m) {
      Id || eb.register(N) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
      de(this);
      this.init(e, m);
    }
    function Re(e, m, q, r) {
      return r < m ? e(r) : 0 > m && e(0), r < q ? (r - m) / (q - m) : 0 > q ? m / (m - q) : 1;
    }
    function Yd(e, m) {
      !0 === m ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === m ? "auto" : m ? "pan-" + m + (nb.isTouch ? " pinch-zoom" : "") : "none";
      e === xc && Yd(Ua, m);
    }
    function af(e) {
      var m, q = e.event, r = e.target;
      e = e.axis;
      var w = (q.changedTouches ? q.changedTouches[0] : q).target, E = w._gsap || N.core.getCache(w), H = Ib();
      if (!E._isScrollT || 2E3 < H - E._isScrollT) {
        for (; w && w !== Ua && (w.scrollHeight <= w.clientHeight && w.scrollWidth <= w.clientWidth || !uc[(m = qb(w)).overflowY] && !uc[m.overflowX]);) {
          w = w.parentNode;
        }
        E._isScroll = w && w !== r && !~gd.indexOf(w) && (uc[(m = qb(w)).overflowY] || uc[m.overflowX]);
        E._isScrollT = H;
      }
      !E._isScroll && "x" !== e || (q.stopPropagation(), q._gsapAllow = !0);
    }
    function bf(e, m, q, r) {
      return nb.create({target:e, capture:!0, debounce:!1, lockAxis:!0, type:m, onWheel:r = r && af, onPress:r, onDrag:r, onScroll:r, onEnable:function() {
        return q && rb(ab, nb.eventTypes[0], $b, !1, !0);
      }, onDisable:function() {
        return Ma(ab, nb.eventTypes[0], $b, !0);
      }});
    }
    function ve(e) {
      function m() {
        return U = !1;
      }
      function q() {
        H = lb(da, ub);
        ba = Jd(hd ? 1 : 0, H);
        Y && (Vb = Jd(0, lb(da, Wb)));
        P = db;
      }
      function r() {
        aa._gsap.y = Yc(parseFloat(aa._gsap.y) + qa.offset) + "px";
        aa.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(aa._gsap.y) + ", 0, 1)";
        qa.offset = qa.cacheID = 0;
      }
      function w() {
        q();
        pa.isActive() && pa.vars.scrollY > H && (qa() > H ? pa.progress(1) && qa(H) : pa.resetTo("scrollY", H));
      }
      $c(e) || (e = {});
      e.preventDefault = e.isNormalizer = e.allowClicks = !0;
      e.type || (e.type = "wheel,touch");
      e.debounce = !!e.debounce;
      e.id = e.id || "normalizer";
      var E, H, P, U, pa, W, oa, ra, Y = e.normalizeScrollX, Hb = e.momentum, ia = e.allowNestedScroll, $a = e.onRelease, da = Kb(e.target) || xc, T = N.core.globals().ScrollSmoother;
      T = T && T.get();
      var aa = hd && (e.content && Kb(e.content) || T && !1 !== e.content && !T.smooth() && T.content()), qa = tc(da, ub), S = tc(da, Wb), Ub = 1, cd = (nb.isTouch && Aa.visualViewport ? Aa.visualViewport.scale * Aa.visualViewport.width : Aa.outerWidth) / Aa.innerWidth, ec = 0, ha = zb(Hb) ? function() {
        return Hb(E);
      } : function() {
        return Hb || 2.8;
      }, wc = bf(da, e.type, !0, ia), Vb = Sb, ba = Sb;
      return aa && N.set(aa, {y:"+=0"}), e.ignoreCheck = function(Ga) {
        var Ha;
        if (Ha = hd && "touchmove" === Ga.type) {
          U ? (requestAnimationFrame(m), Ha = Yc(E.deltaY / 2), Ha = ba(qa.v - Ha), aa && Ha !== qa.v + qa.offset && (qa.offset = Ha - qa.v, Ha = Yc((parseFloat(aa && aa._gsap.y) || 0) - qa.offset), aa.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + Ha + ", 0, 1)", aa._gsap.y = Ha + "px", qa.cacheID = ua.cache, zc()), Ha = !0) : (qa.offset && r(), U = !0, Ha = void 0);
        }
        return Ha || 1.05 < Ub && "touchstart" !== Ga.type || E.isGesturing || Ga.touches && 1 < Ga.touches.length;
      }, e.onPress = function() {
        U = !1;
        var Ga = Ub;
        Ub = Yc((Aa.visualViewport && Aa.visualViewport.scale || 1) / cd);
        pa.pause();
        Ga !== Ub && Yd(da, 1.01 < Ub || !Y && "x");
        W = S();
        oa = qa();
        q();
        P = db;
      }, e.onRelease = e.onGestureStart = function(Ga, Ha) {
        if (qa.offset && r(), Ha) {
          ua.cache++;
          var Da, Pa, Wa = ha();
          Y && (Pa = (Da = S()) + .05 * Wa * -Ga.velocityX / .227, Wa *= Re(S, Da, Pa, lb(da, Wb)), pa.vars.scrollX = Vb(Pa));
          Pa = (Da = qa()) + .05 * Wa * -Ga.velocityY / .227;
          Wa *= Re(qa, Da, Pa, lb(da, ub));
          pa.vars.scrollY = ba(Pa);
          pa.invalidate().duration(Wa).play(.01);
          (hd && pa.vars.scrollY >= H || H - 1 <= Da) && N.to({}, {onUpdate:w, duration:Wa});
        } else {
          ra.restart(!0);
        }
        $a && $a(Ga);
      }, e.onWheel = function() {
        pa._ts && pa.pause();
        1E3 < Ib() - ec && (P = 0, ec = Ib());
      }, e.onChange = function(Ga, Ha, Da, Pa, Wa) {
        if (db !== P && q(), Ha && Y && S(Vb(Pa[2] === Ha ? W + (Ga.startX - Ga.x) : S() + Ha - Pa[1])), Da) {
          qa.offset && r(), Ga = (Pa = Wa[2] === Da) ? oa + Ga.startY - Ga.y : qa() + Da - Wa[1], Wa = ba(Ga), Pa && Ga !== Wa && (oa += Wa - Ga), qa(Wa);
        }
        (Da || Ha) && zc();
      }, e.onEnable = function() {
        Yd(da, !Y && "x");
        xa.addEventListener("refresh", w);
        rb(Aa, "resize", w);
        qa.smooth && (qa.target.style.scrollBehavior = "auto", qa.smooth = S.smooth = !1);
        wc.enable();
      }, e.onDisable = function() {
        Yd(da, !0);
        Ma(Aa, "resize", w);
        xa.removeEventListener("refresh", w);
        wc.kill();
      }, e.lockAxis = !1 !== e.lockAxis, ((E = new nb(e)).iOS = hd) && !qa() && qa(1), hd && N.ticker.add(Sb), ra = E._dc, pa = N.to(E, {ease:"power4", paused:!0, scrollX:Y ? "+=0.1" : "+=0", scrollY:"+=0.1", modifiers:{scrollY:Bd(qa, qa(), function() {
        return pa.pause();
      })}, onUpdate:zc, onComplete:ra.vars.onComplete}), E;
    }
    var fb, we, Lb, Fc, Gc, pd, Se, ed, xe, Gd, Sc, mc, ye, ze = 1, fd = [], ua = [], nc = [], qd = Date.now, Te = function(e, m) {
      return m;
    }, Wb = {s:"scrollLeft", p:"left", p2:"Left", os:"right", os2:"Right", d:"width", d2:"Width", a:"x", sc:cc(function(e) {
      return arguments.length ? Lb.scrollTo(e, ub.sc()) : Lb.pageXOffset || Fc.scrollLeft || Gc.scrollLeft || pd.scrollLeft || 0;
    })}, ub = {s:"scrollTop", p:"top", p2:"Top", os:"bottom", os2:"Bottom", d:"height", d2:"Height", a:"y", op:Wb, sc:cc(function(e) {
      return arguments.length ? Lb.scrollTo(Wb.sc(), e) : Lb.pageYOffset || Fc.scrollTop || Gc.scrollTop || pd.scrollTop || 0;
    })};
    Wb.op = ub;
    ua.cache = 0;
    var nb = (Lc.prototype.init = function(e) {
      function m() {
        return he = qd();
      }
      function q(C, D) {
        return (n.event = C) && ec && ~ec.indexOf(C.target) || D && Va && "touch" !== C.pointerType || Hd && Hd(C, D);
      }
      function r() {
        var C = n.deltaX = He(pb), D = n.deltaY = He(Qb), L = Math.abs(C) >= ia, K = Math.abs(D) >= ia;
        id && (L || K) && id(n, C, D, pb, Qb);
        L && (Pa && 0 < n.deltaX && Pa(n), Wa && 0 > n.deltaX && Wa(n), Rc && Rc(n), ta && 0 > n.deltaX != 0 > Za && ta(n), Za = n.deltaX, pb[0] = pb[1] = pb[2] = 0);
        K && (Fb && 0 < n.deltaY && Fb(n), vc && 0 > n.deltaY && vc(n), Pd && Pd(n), V && 0 > n.deltaY != 0 > ge && V(n), ge = n.deltaY, Qb[0] = Qb[1] = Qb[2] = 0);
        (Jc || fc) && (Nc && Nc(n), fc && (Ga(n), fc = !1), Jc = !1);
        jd && !(jd = !1) && Tc && Tc(n);
        Vc && (Cd(n), Vc = !1);
        tb = 0;
      }
      function w(C, D, L) {
        pb[L] += C;
        Qb[L] += D;
        n._vx.update(C);
        n._vy.update(D);
        qa ? tb = tb || requestAnimationFrame(r) : r();
      }
      function E(C, D) {
        Ea && !Ac && (n.axis = Ac = Math.abs(C) > Math.abs(D) ? "x" : "y", jd = !0);
        "y" !== Ac && (pb[2] += C, n._vx.update(C, !0));
        "x" !== Ac && (Qb[2] += D, n._vy.update(D, !0));
        qa ? tb = tb || requestAnimationFrame(r) : r();
      }
      function H(C) {
        if (!q(C, 1)) {
          var D = (C = kd(C, S)).clientX;
          C = C.clientY;
          var L = D - n.x, K = C - n.y, ya = n.isDragging;
          n.x = D;
          n.y = C;
          (ya || Math.abs(n.startX - D) >= $a || Math.abs(n.startY - C) >= $a) && (Ga && (fc = !0), ya || (n.isDragging = !0), E(L, K), ya || Vb && Vb(n));
        }
      }
      function P(C) {
        return C.touches && 1 < C.touches.length && (n.isGesturing = !0) && sd(C, n.isDragging);
      }
      function U() {
        return n.isGesturing = !1, Na(n);
      }
      function pa(C) {
        if (!q(C)) {
          C = Md();
          var D = Ob();
          w((C - pc) * Ia, (D - hc) * Ia, 1);
          pc = C;
          hc = D;
          Ub && kb.restart(!0);
        }
      }
      function W(C) {
        if (!q(C)) {
          C = kd(C, S);
          Cd && (Vc = !0);
          var D = (1 === C.deltaMode ? aa : 2 === C.deltaMode ? Lb.innerHeight : 1) * ha;
          w(C.deltaX * D, C.deltaY * D, 0);
          Ub && !Uc && kb.restart(!0);
        }
      }
      function oa(C) {
        if (!q(C)) {
          var D = C.clientX;
          C = C.clientY;
          var L = D - n.x, K = C - n.y;
          n.x = D;
          n.y = C;
          Jc = !0;
          (L || K) && E(L, K);
        }
      }
      function ra(C) {
        n.event = C;
        Yb(n);
      }
      function Y(C) {
        n.event = C;
        Ge(n);
      }
      function Hb(C) {
        return q(C) || kd(C, S) && sb(n);
      }
      we || le(fb) || console.warn("Please gsap.registerPlugin(Observer)");
      xe || vd();
      var ia = e.tolerance, $a = e.dragMinimum, da = e.type, T = e.target, aa = e.lineHeight, qa = e.debounce, S = e.preventDefault, Ub = e.onStop, cd = e.onStopDelay, ec = e.ignore, ha = e.wheelSpeed, wc = e.event, Vb = e.onDragStart, ba = e.onDragEnd, Ga = e.onDrag, Ha = e.onPress, Da = e.onRelease, Pa = e.onRight, Wa = e.onLeft, vc = e.onUp, Fb = e.onDown, Rc = e.onChangeX, Pd = e.onChangeY, id = e.onChange, ta = e.onToggleX, V = e.onToggleY, Yb = e.onHover, Ge = e.onHoverEnd, Nc = e.onMove, Hd = 
      e.ignoreCheck, Uc = e.isNormalizer, sd = e.onGestureStart, Na = e.onGestureEnd, Cd = e.onWheel, Gb = e.onEnable, wa = e.onDisable, sb = e.onClick, Ia = e.scrollSpeed, R = e.capture, hb = e.allowClicks, Ea = e.lockAxis, Tc = e.onLockAxis;
      this.target = T = Kb(T) || Gc;
      this.vars = e;
      ec = ec && fb.utils.toArray(ec);
      ia = ia || 1E-9;
      $a = $a || 0;
      ha = ha || 1;
      Ia = Ia || 1;
      da = da || "wheel,touch,pointer";
      qa = !1 !== qa;
      aa = aa || parseFloat(Lb.getComputedStyle(pd).lineHeight) || 22;
      var tb, fc, Jc, Vc, jd, Ac, n = this, Za = 0, ge = 0, Md = tc(T, Wb), Ob = tc(T, ub), pc = Md(), hc = Ob(), Va = ~da.indexOf("touch") && !~da.indexOf("pointer") && "pointerdown" === mc[0], Jb = !!~Gd.indexOf(T), Ka = T.ownerDocument || Fc, pb = [0, 0, 0], Qb = [0, 0, 0], he = 0, ie = n.onPress = function(C) {
        q(C, 1) || C && C.button || (n.axis = Ac = null, kb.pause(), n.isPressed = !0, C = kd(C), Za = ge = 0, n.startX = n.x = C.clientX, n.startY = n.y = C.clientY, n._vx.reset(), n._vy.reset(), za(Uc ? T : Ka, mc[1], H, S, !0), n.deltaX = n.deltaY = 0, Ha && Ha(n));
      }, Qd = n.onRelease = function(C) {
        if (!q(C, 1)) {
          (Uc ? T : Ka).removeEventListener(mc[1], H, !0);
          var D = !isNaN(n.y - n.startY), L = n.isDragging && (3 < Math.abs(n.x - n.startX) || 3 < Math.abs(n.y - n.startY)), K = kd(C);
          !L && D && (n._vx.reset(), n._vy.reset(), S && hb && fb.delayedCall(.08, function() {
            if (300 < qd() - he && !C.defaultPrevented) {
              if (C.target.click) {
                C.target.click();
              } else if (Ka.createEvent) {
                var ya = Ka.createEvent("MouseEvents");
                ya.initMouseEvent("click", !0, !0, Lb, 1, K.screenX, K.screenY, K.clientX, K.clientY, !1, !1, !1, !1, 0, null);
                C.target.dispatchEvent(ya);
              }
            }
          }));
          n.isDragging = n.isGesturing = n.isPressed = !1;
          Ub && !Uc && kb.restart(!0);
          ba && L && ba(n);
          Da && Da(n, L);
        }
      };
      var kb = n._dc = fb.delayedCall(cd || .25, function() {
        n._vx.reset();
        n._vy.reset();
        kb.pause();
        Ub && Ub(n);
      }).pause();
      n.deltaX = n.deltaY = 0;
      n._vx = ke(0, 50, !0);
      n._vy = ke(0, 50, !0);
      n.scrollX = Md;
      n.scrollY = Ob;
      n.isDragging = n.isGesturing = n.isPressed = !1;
      ye(this);
      n.enable = function(C) {
        return n.isEnabled || (za(Jb ? Ka : T, "scroll", sc), 0 <= da.indexOf("scroll") && za(Jb ? Ka : T, "scroll", pa, S, R), 0 <= da.indexOf("wheel") && za(T, "wheel", W, S, R), (0 <= da.indexOf("touch") && Se || 0 <= da.indexOf("pointer")) && (za(T, mc[0], ie, S, R), za(Ka, mc[2], Qd), za(Ka, mc[3], Qd), hb && za(T, "click", m, !1, !0), sb && za(T, "click", Hb), sd && za(Ka, "gesturestart", P), Na && za(Ka, "gestureend", U), Yb && za(T, ed + "enter", ra), Ge && za(T, ed + "leave", Y), Nc && za(T, 
        ed + "move", oa)), n.isEnabled = !0, C && C.type && ie(C), Gb && Gb(n)), n;
      };
      n.disable = function() {
        n.isEnabled && (fd.filter(function(C) {
          return C !== n && !!~Gd.indexOf(C.target);
        }).length || (Jb ? Ka : T).removeEventListener("scroll", sc, !1), n.isPressed && (n._vx.reset(), n._vy.reset(), (Uc ? T : Ka).removeEventListener(mc[1], H, !0)), (Jb ? Ka : T).removeEventListener("scroll", pa, !!R), T.removeEventListener("wheel", W, !!R), T.removeEventListener(mc[0], ie, !!R), Ka.removeEventListener(mc[2], Qd, !1), Ka.removeEventListener(mc[3], Qd, !1), T.removeEventListener("click", m, !0), T.removeEventListener("click", Hb, !1), Ka.removeEventListener("gesturestart", P, !1), 
        Ka.removeEventListener("gestureend", U, !1), T.removeEventListener(ed + "enter", ra, !1), T.removeEventListener(ed + "leave", Y, !1), T.removeEventListener(ed + "move", oa, !1), n.isEnabled = n.isPressed = n.isDragging = !1, wa && wa(n));
      };
      n.kill = n.revert = function() {
        n.disable();
        var C = fd.indexOf(n);
        0 <= C && fd.splice(C, 1);
        Sc === n && (Sc = 0);
      };
      fd.push(n);
      Uc && ~Gd.indexOf(T) && (Sc = n);
      n.enable(wc);
    }, function(e, m, q) {
      return m && rc(e.prototype, m), q && rc(e, q), e;
    }(Lc, [{key:"velocityX", get:function() {
      return this._vx.getVelocity();
    }}, {key:"velocityY", get:function() {
      return this._vy.getVelocity();
    }}]), Lc);
    nb.version = "3.12.2";
    nb.create = function(e) {
      return new nb(e);
    };
    nb.register = le;
    nb.getAll = function() {
      return fd.slice();
    };
    nb.getById = function(e) {
      return fd.filter(function(m) {
        return m.vars.id === e;
      })[0];
    };
    Cc() && fb.registerPlugin(nb);
    var N, Id, Aa, ab, xc, Ua, gd, $d, ae, Jd, be, Kd, Ra, Ld, Nd, Pb, Ae, Od, ic, Ic, Ve, Xe, bc, Be, Ce, De, hd, de, yb, Ta, Zb, ee, md, vb, Ne, Qc, Fd = 1, Ib = Date.now, fe = Ib(), mb = 0, od = 0, Bb = function(e) {
      return "string" == typeof e;
    }, dd = Math.abs, Ed = "right", Zd = "bottom", Hc = "width", Pc = "height", Xa = "padding", Mb = "margin", gb = "px", ib = function(e, m) {
      var q = m && "matrix(1, 0, 0, 1, 0, 0)" !== qb(e)[Nd] && N.to(e, {x:0, y:0, xPercent:0, yPercent:0, rotation:0, rotationX:0, rotationY:0, scale:1, skewX:0, skewY:0}).progress(1), r = e.getBoundingClientRect();
      return q && q.progress(0).kill(), r;
    }, rd = {startColor:"green", endColor:"red", indent:0, fontSize:"16px", fontWeight:"normal"}, Tb = {toggleActions:"play", anticipatePin:0}, Ja = {top:0, left:0, center:.5, bottom:1, right:1}, Dd = function(e, m, q, r) {
      var w = {display:"block"}, E = q[r ? "os2" : "p2"], H = q[r ? "p2" : "os2"];
      e._isFlipped = r;
      w[q.a + "Percent"] = r ? -100 : 0;
      w[q.a] = r ? "1px" : 0;
      w["border" + E + "Width"] = 1;
      w["border" + H + "Width"] = 0;
      w[q.p] = m + "px";
      N.set(e, w);
    }, va = [], Ze = {}, bd = {}, gf = [], nd = function(e) {
      return bd[e] && bd[e].map(function(m) {
        return m();
      }) || gf;
    }, ac = [], db = 0, Mc = function(e, m) {
      if (!mb || e) {
        Pe();
        vb = xa.isRefreshing = !0;
        ua.forEach(function(r) {
          return zb(r) && ++r.cacheID && (r.rec = r());
        });
        var q = nd("refreshInit");
        Ic && xa.sort();
        m || pe();
        ua.forEach(function(r) {
          zb(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
        });
        va.slice(0).forEach(function(r) {
          return r.refresh();
        });
        va.forEach(function(r, w) {
          if (r._subPinOffset && r.pin) {
            var E = r.vars.horizontal ? "offsetWidth" : "offsetHeight", H = r.pin[E];
            r.revert(!0, 1);
            r.adjustPinSpacing(r.pin[E] - H);
            r.refresh();
          }
        });
        va.forEach(function(r) {
          var w = lb(r.scroller, r._dir);
          ("max" === r.vars.end || r._endClamp && r.end > w) && r.setPositions(r.start, Math.max(r.start + 1, w), !0);
        });
        q.forEach(function(r) {
          return r && r.render && r.render(-1);
        });
        ua.forEach(function(r) {
          zb(r) && (r.smooth && requestAnimationFrame(function() {
            return r.target.style.scrollBehavior = "smooth";
          }), r.rec && r(r.rec));
        });
        qe(yb, 1);
        $d.pause();
        db++;
        zc(vb = 2);
        va.forEach(function(r) {
          return zb(r.vars.onRefresh) && r.vars.onRefresh(r);
        });
        vb = xa.isRefreshing = !1;
        nd("refresh");
      } else {
        rb(xa, "scrollEnd", Vd);
      }
    }, ue = 0, Oc = 1, zc = function(e) {
      if (!vb || 2 === e) {
        xa.isUpdating = !0;
        Qc && Qc.update(0);
        e = va.length;
        var m = Ib(), q = 50 <= m - fe, r = e && va[0].scroll();
        if (Oc = r < ue ? -1 : 1, vb || (ue = r), q && (mb && !Ld && 200 < m - mb && (mb = 0, nd("scrollEnd")), be = fe, fe = m), 0 > Oc) {
          for (Pb = e; 0 < Pb--;) {
            va[Pb] && va[Pb].update(0, q);
          }
          Oc = 1;
        } else {
          for (Pb = 0; Pb < e; Pb++) {
            va[Pb] && va[Pb].update(0, q);
          }
        }
        xa.isUpdating = !1;
      }
      md = 0;
    }, Ee = ["left", "top", Zd, Ed, Mb + "Bottom", Mb + "Right", Mb + "Top", Mb + "Left", "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Rd = Ee.concat([Hc, Pc, "boxSizing", "maxWidth", "maxHeight", "position", Mb, Xa, Xa + "Top", Xa + "Right", Xa + "Bottom", Xa + "Left"]), ff = /([A-Z])/g, wb = function(e) {
      if (e) {
        var m = e.t.style, q = e.length, r = 0;
        for ((e.t._gsap || N.core.getCache(e.t)).uncache = 1; r < q; r += 2) {
          var w = e[r + 1];
          var E = e[r];
          w ? m[E] = w : m[E] && m.removeProperty(E.replace(ff, "-$1").toLowerCase());
        }
      }
    }, Fe = {left:0, top:0}, ne = /(webkit|moz|length|cssText|inset)/i, xa = (eb.prototype.init = function(e, m) {
      if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), od) {
        var q, r, w, E, H, P, U, pa, W, oa, ra, Y, Hb, ia, $a, da, T, aa, qa, S, Ub, cd, ec, ha, wc, Vb, ba, Ga, Ha, Da, Pa, Wa = (e = me(Bb(e) || Zc(e) || e.nodeType ? {trigger:e} : e, Tb)).onUpdate, vc = e.toggleClass, Fb = e.id, Rc = e.onToggle, Pd = e.onRefresh, id = e.scrub, ta = e.trigger, V = e.pin, Yb = e.pinSpacing, Ge = e.invalidateOnRefresh, Nc = e.anticipatePin, Hd = e.onScrubComplete, Uc = e.onSnapComplete, sd = e.once, Na = e.snap, Cd = e.pinReparent;
        var Gb = e.pinSpacer;
        var wa = e.containerAnimation, sb = e.fastScrollEnd, Ia = e.preventOverlaps, R = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? Wb : ub, hb = !id && 0 !== id, Ea = Kb(e.scroller || Aa), Tc = N.core.getCache(Ea), tb = !!~gd.indexOf(Ea), fc = "fixed" === ("pinType" in e ? e.pinType : Sa(Ea, "pinType") || tb && "fixed"), Jc = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack], Vc = hb && e.toggleActions.split(" "), jd = "markers" in e ? e.markers : Tb.markers, Ac = tb ? 0 : parseFloat(qb(Ea)["border" + 
        R.p2 + "Width"]) || 0, n = this, Za = e.onRefreshInit && function() {
          return e.onRefreshInit(n);
        }, ge = function(D, L, K) {
          var ya = K.d, ja = K.d2, Z = K.a;
          return (Z = Sa(D, "getBoundingClientRect")) ? function() {
            return Z()[ya];
          } : function() {
            return (L ? Le(ja) : D["client" + ja]) || 0;
          };
        }(Ea, tb, R), Md = function(D, L) {
          return !L || ~nc.indexOf(D) ? Me(D) : function() {
            return Fe;
          };
        }(Ea, tb), Ob = 0, pc = 0, hc = 0, Va = tc(Ea, R);
        if (n._startClamp = n._endClamp = !1, n._dir = R, Nc *= 45, n.scroller = Ea, n.scroll = wa ? wa.time.bind(wa) : Va, E = Va(), n.vars = e, m = m || e.animation, "refreshPriority" in e && (Ic = 1, -9999 === e.refreshPriority && (Qc = n)), Tc.tweenScroll = Tc.tweenScroll || {top:te(Ea, ub), left:te(Ea, Wb)}, n.tweenTo = q = Tc.tweenScroll[R.p], n.scrubDuration = function(D) {
          (wc = Zc(D) && D) ? ha ? ha.duration(D) : ha = N.to(m, {ease:"expo", totalProgress:"+=0", duration:wc, paused:!0, onComplete:function() {
            return Hd && Hd(n);
          }}) : (ha && ha.progress(1).kill(), ha = 0);
        }, m && (m.vars.lazy = !1, m._initted && !n.isReverted || !1 !== m.vars.immediateRender && !1 !== e.immediateRender && m.duration() && m.render(0, !0, !0), n.animation = m.pause(), (m.scrollTrigger = n).scrubDuration(id), cd = 0, Fb = Fb || m.vars.id), Na && ($c(Na) && !Na.push || (Na = {snapTo:Na}), "scrollBehavior" in Ua.style && N.set(tb ? [Ua, xc] : Ea, {scrollBehavior:"auto"}), ua.forEach(function(D) {
          return zb(D) && D.target === (tb ? ab.scrollingElement || xc : Ea) && (D.smooth = !1);
        }), w = zb(Na.snapTo) ? Na.snapTo : "labels" === Na.snapTo ? function(D) {
          return function(L) {
            return N.utils.snap(Sd(D), L);
          };
        }(m) : "labelsDirectional" === Na.snapTo ? function(D) {
          return function(L, K) {
            return xd(Sd(D))(L, K.direction);
          };
        }(m) : !1 !== Na.directional ? function(D, L) {
          return xd(Na.snapTo)(D, 500 > Ib() - pc ? 0 : L.direction);
        } : N.utils.snap(Na.snapTo), Vb = Na.duration || {min:.1, max:2}, Vb = $c(Vb) ? Jd(Vb.min, Vb.max) : Jd(Vb, Vb), ba = N.delayedCall(Na.delay || wc / 2 || .1, function() {
          var D = Va(), L = 500 > Ib() - pc, K = q.tween;
          if (!(L || 10 > Math.abs(n.getVelocity())) || K || Ld || Ob === D) {
            n.isActive && Ob !== D && ba.restart(!0);
          } else {
            var ya = (D - C) / kb, ja = m && !hb ? m.totalProgress() : ya;
            L = L ? 0 : (ja - ec) / (Ib() - be) * 1E3 || 0;
            var Z = N.utils.clamp(-ya, 1 - ya, dd(L / 2) * L / .185), sa = ya + (!1 === Na.inertia ? 0 : Z), Qa = Jd(0, 1, w(sa, n)), kc = Math.round(C + Qa * kb), Ca = Na.onStart, Ya = Na.onInterrupt, Bc = Na.onComplete;
            D <= P && C <= D && kc !== D && !(K && !K._initted && K.data <= dd(kc - D)) && (!1 === Na.inertia && (Z = Qa - ya), q(kc, {duration:Vb(dd(.185 * Math.max(dd(sa - ja), dd(Qa - ja)) / L / .05 || 0)), ease:Na.ease || "power3", data:dd(kc - D), onInterrupt:function() {
              return ba.restart(!0) && Ya && Ya(n);
            }, onComplete:function() {
              n.update();
              Ob = Va();
              cd = ec = m && !hb ? m.totalProgress() : n.progress;
              Uc && Uc(n);
              Bc && Bc(n);
            }}, D, Z * kb, kc - D - Z * kb), Ca && Ca(n, q.tween));
          }
        }).pause()), Fb && (Ze[Fb] = n), Pa = (Pa = (ta = n.trigger = Kb(ta || !0 !== V && V)) && ta._gsap && ta._gsap.stRevert) && Pa(n), V = !0 === V ? ta : Kb(V), Bb(vc) && (vc = {targets:ta, className:vc}), V && (!1 === Yb || Yb === Mb || (Yb = !(!Yb && V.parentNode && V.parentNode.style && "flex" === qb(V.parentNode).display) && Xa), n.pin = V, (r = N.core.getCache(V)).spacer ? W = r.pinState : (Gb && ((Gb = Kb(Gb)) && !Gb.nodeType && (Gb = Gb.current || Gb.nativeElement), r.spacerIsNative = !!Gb, 
        Gb && (r.spacerState = Wd(Gb))), r.spacer = Y = Gb || ab.createElement("div"), Y.classList.add("pin-spacer"), Fb && Y.classList.add("pin-spacer-" + Fb), r.pinState = W = Wd(V)), !1 !== e.force3D && N.set(V, {force3D:!0}), n.spacer = Y = r.spacer, U = qb(V), T = U[Yb + R.os2], Hb = N.getProperty(V), ia = N.quickSetter(V, R.a, gb), re(V, Y, U), ra = Wd(V)), jd) {
          U = $c(jd) ? me(jd, rd) : rd;
          var Jb = Ec("scroller-start", Fb, Ea, R, U, 0);
          var Ka = Ec("scroller-end", Fb, Ea, R, U, 0, Jb);
          Gb = Jb["offset" + R.op.d2];
          Tc = Kb(Sa(Ea, "content") || Ea);
          var pb = this.markerStart = Ec("start", Fb, Tc, R, U, Gb, 0, wa);
          var Qb = this.markerEnd = Ec("end", Fb, Tc, R, U, Gb, 0, wa);
          wa && (Da = N.quickSetter([pb, Qb], R.a, gb));
          fc || nc.length && !0 === Sa(Ea, "fixedMarkers") || (function(D) {
            var L = qb(D).position;
            D.style.position = "absolute" === L || "fixed" === L ? L : "relative";
          }(tb ? Ua : Ea), N.set([Jb, Ka], {force3D:!0}), qa = N.quickSetter(Jb, R.a, gb), Ub = N.quickSetter(Ka, R.a, gb));
        }
        if (wa) {
          var he = wa.vars.onUpdate, ie = wa.vars.onUpdateParams;
          wa.eventCallback("onUpdate", function() {
            n.update(0, 0, 1);
            he && he.apply(wa, ie || []);
          });
        }
        if (n.previous = function() {
          return va[va.indexOf(n) - 1];
        }, n.next = function() {
          return va[va.indexOf(n) + 1];
        }, n.revert = function(D, L) {
          if (!L) {
            return n.kill(!0);
          }
          var K = !1 !== D || !n.enabled, ya = Ra;
          K !== n.isReverted && (K && (Ga = Math.max(Va(), n.scroll.rec || 0), hc = n.progress, Ha = m && m.progress()), pb && [pb, Qb, Jb, Ka].forEach(function(ja) {
            return ja.style.display = K ? "none" : "block";
          }), K && (Ra = n).update(K), !V || Cd && n.isActive || (K ? function(ja, Z, sa) {
            wb(sa);
            sa = ja._gsap;
            sa.spacerIsNative ? wb(sa.spacerState) : ja._gsap.swappedIn && (sa = Z.parentNode) && (sa.insertBefore(ja, Z), sa.removeChild(Z));
            ja._gsap.swappedIn = !1;
          }(V, Y, W) : re(V, Y, qb(V), aa)), K || n.update(K), Ra = ya, n.isReverted = K);
        }, n.refresh = function(D, L, K, ya) {
          if (!Ra && n.enabled || L) {
            if (V && D && mb) {
              rb(eb, "scrollEnd", Vd);
            } else {
              !vb && Za && Za(n);
              Ra = n;
              q.tween && !K && (q.tween.kill(), q.tween = 0);
              ha && ha.pause();
              Ge && m && m.revert({kill:!1}).invalidate();
              n.isReverted || n.revert(!0, !0);
              n._subPinOffset = !1;
              var ja, Z, sa, Qa, kc, Ca, Ya, Bc, Nb, Wc = ge(), td = Md();
              var qc = wa ? wa.duration() : lb(Ea, R);
              D = .01 >= kb;
              var oc = 0;
              L = ya || 0;
              var jc = $c(K) ? K.end : e.end, $e = e.endTrigger || ta, ob = $c(K) ? K.start : e.start || (0 !== e.start && ta ? V ? "0 0" : "0 100%" : 0), Oa = n.pinnedContainer = e.pinnedContainer && Kb(e.pinnedContainer, n), gc = ta && Math.max(0, va.indexOf(n)) || 0, Kc = gc;
              for (jd && $c(K) && (Bc = N.getProperty(Jb, R.p), Nb = N.getProperty(Ka, R.p)); Kc--;) {
                (sa = va[Kc]).end || sa.refresh(0, 1) || (Ra = n), !(Z = sa.pin) || Z !== ta && Z !== V && Z !== Oa || sa.isReverted || ((Ca = Ca || []).unshift(sa), sa.revert(!0, !0)), sa !== va[Kc] && (gc--, Kc--);
              }
              zb(ob) && (ob = ob(n));
              ob = Ie(ob, "start", n);
              C = Ad(ob, ta, Wc, R, Va(), pb, Jb, n, td, Ac, fc, qc, wa, n._startClamp && "_startClamp") || (V ? -.001 : 0);
              zb(jc) && (jc = jc(n));
              Bb(jc) && !jc.indexOf("+=") && (~jc.indexOf(" ") ? jc = (Bb(ob) ? ob.split(" ")[0] : "") + jc : (oc = Ud(jc.substr(2), Wc), jc = Bb(ob) ? ob : (wa ? N.utils.mapRange(0, wa.duration(), wa.scrollTrigger.start, wa.scrollTrigger.end, C) : C) + oc, $e = ta));
              jc = Ie(jc, "end", n);
              P = Math.max(C, Ad(jc || ($e ? "100% 0" : qc), $e, Wc, R, Va() + oc, Qb, Ka, n, td, Ac, fc, qc, wa, n._endClamp && "_endClamp")) || -.001;
              oc = 0;
              for (Kc = gc; Kc--;) {
                (Z = (sa = va[Kc]).pin) && sa.start - sa._pinPush <= C && !wa && 0 < sa.end && (ja = sa.end - (n._startClamp ? Math.max(0, sa.start) : sa.start), (Z === ta && sa.start - sa._pinPush < C || Z === Oa) && isNaN(ob) && (oc += ja * (1 - sa.progress)), Z === V && (L += ja));
              }
              if (C += oc, P += oc, n._startClamp && (n._startClamp += oc), n._endClamp && !vb && (n._endClamp = P || -.001, P = Math.min(P, lb(Ea, R))), kb = P - C || (C -= .01) && .001, D && (hc = N.utils.clamp(0, 1, N.utils.normalize(C, P, Ga))), n._pinPush = L, pb && oc && ((ja = {})[R.a] = "+=" + oc, Oa && (ja[R.p] = "-=" + Va()), N.set([pb, Qb], ja)), V) {
                ja = qb(V), sa = R === ub, K = Va(), $a = parseFloat(Hb(R.a)) + L, !qc && 1 < P && (Ya = {style:Ya = (tb ? ab.scrollingElement || xc : Ea).style, value:Ya["overflow" + R.a.toUpperCase()]}, tb && "scroll" !== qb(Ua)["overflow" + R.a.toUpperCase()] && (Ya.style["overflow" + R.a.toUpperCase()] = "scroll")), re(V, Y, ja), ra = Wd(V), Z = ib(V, !0), qc = fc && tc(Ea, sa ? Wb : ub)(), Yb && ((aa = [Yb + R.os2, kb + L + gb]).t = Y, (Kc = Yb === Xa ? oe(V, R) + kb + L : 0) && aa.push(R.d, Kc + 
                gb), wb(aa), Oa && va.forEach(function(Xb) {
                  Xb.pin === Oa && !1 !== Xb.vars.pinSpacing && (Xb._subPinOffset = !0);
                }), fc && Va(Ga)), fc && ((Qa = {top:Z.top + (sa ? K - C : qc) + gb, left:Z.left + (sa ? qc : K - C) + gb, boxSizing:"border-box", position:"fixed"})[Hc] = Qa.maxWidth = Math.ceil(Z.width) + gb, Qa[Pc] = Qa.maxHeight = Math.ceil(Z.height) + gb, Qa[Mb] = Qa[Mb + "Top"] = Qa[Mb + "Right"] = Qa[Mb + "Bottom"] = Qa[Mb + "Left"] = "0", Qa[Xa] = ja[Xa], Qa[Xa + "Top"] = ja[Xa + "Top"], Qa[Xa + "Right"] = ja[Xa + "Right"], Qa[Xa + "Bottom"] = ja[Xa + "Bottom"], Qa[Xa + "Left"] = ja[Xa + "Left"], 
                oa = function(Xb, Ue, ce) {
                  for (var yc = [], df = Xb.length, ud = ce ? 8 : 0; ud < df; ud += 2) {
                    ce = Xb[ud], yc.push(ce, ce in Ue ? Ue[ce] : Xb[ud + 1]);
                  }
                  return yc.t = Xb.t, yc;
                }(W, Qa, Cd), vb && Va(0)), m ? (kc = m._initted, Ve(1), m.render(m.duration(), !0, !0), da = Hb(R.a) - $a + kb + L, S = 1 < Math.abs(kb - da), fc && S && oa.splice(oa.length - 2, 2), m.render(0, !0, !0), kc || m.invalidate(!0), m.parent || m.totalTime(m.totalTime()), Ve(0)) : da = kb, Ya && (Ya.value ? Ya.style["overflow" + R.a.toUpperCase()] = Ya.value : Ya.style.removeProperty("overflow-" + R.a));
              } else if (ta && Va() && !wa) {
                for (Z = ta.parentNode; Z && Z !== Ua;) {
                  Z._pinOffset && (C -= Z._pinOffset, P -= Z._pinOffset), Z = Z.parentNode;
                }
              }
              Ca && Ca.forEach(function(Xb) {
                return Xb.revert(!1, !0);
              });
              n.start = C;
              n.end = P;
              E = H = vb ? Ga : Va();
              wa || vb || (E < Ga && Va(Ga), n.scroll.rec = 0);
              n.revert(!1, !0);
              pc = Ib();
              ba && (Ob = -1, ba.restart(!0));
              Ra = 0;
              m && hb && (m._initted || Ha) && m.progress() !== Ha && m.progress(Ha || 0, !0).render(m.time(), !0, !0);
              (D || hc !== n.progress || wa) && (m && !hb && m.totalProgress(wa && -.001 > C && !hc ? N.utils.normalize(C, P, 0) : hc, !0), n.progress = D || (E - C) / kb === hc ? 0 : hc);
              V && Yb && (Y._pinOffset = Math.round(n.progress * da));
              ha && ha.invalidate();
              isNaN(Bc) || (Bc -= N.getProperty(Jb, R.p), Nb -= N.getProperty(Ka, R.p), Xd(Jb, R, Bc), Xd(pb, R, Bc - (ya || 0)), Xd(Ka, R, Nb), Xd(Qb, R, Nb - (ya || 0)));
              D && !vb && n.update();
              !Pd || vb || pa || (pa = !0, Pd(n), pa = !1);
            }
          }
        }, n.getVelocity = function() {
          return (Va() - H) / (Ib() - be) * 1E3 || 0;
        }, n.endAnimation = function() {
          ad(n.callbackAnimation);
          m && (ha ? ha.progress(1) : m.paused() ? hb || ad(m, 0 > n.direction, 1) : ad(m, m.reversed()));
        }, n.labelToScroll = function(D) {
          return m && m.labels && (C || n.refresh() || C) + m.labels[D] / m.duration() * kb || 0;
        }, n.getTrailing = function(D) {
          var L = va.indexOf(n);
          L = 0 < n.direction ? va.slice(0, L).reverse() : va.slice(L + 1);
          return (Bb(D) ? L.filter(function(K) {
            return K.vars.preventOverlaps === D;
          }) : L).filter(function(K) {
            return 0 < n.direction ? K.end <= C : K.start >= P;
          });
        }, n.update = function(D, L, K) {
          if (!wa || K || D) {
            var ya, ja, Z, sa, Qa, kc;
            K = !0 === vb ? Ga : n.scroll();
            var Ca = D ? 0 : (K - C) / kb;
            Ca = 0 > Ca ? 0 : 1 < Ca ? 1 : Ca || 0;
            var Ya = n.progress;
            if (L && (H = E, E = wa ? Va() : K, Na && (ec = cd, cd = m && !hb ? m.totalProgress() : Ca)), Nc && !Ca && V && !Ra && !Fd && mb && C < K + (K - H) / (Ib() - be) * Nc && (Ca = 1E-4), Ca !== Ya && n.enabled) {
              if (sa = (Qa = (ya = n.isActive = !!Ca && 1 > Ca) != (!!Ya && 1 > Ya)) || !!Ca != !!Ya, n.direction = Ya < Ca ? 1 : -1, n.progress = Ca, sa && !Ra && (ja = Ca && !Ya ? 0 : 1 === Ca ? 1 : 1 === Ya ? 2 : 3, hb && (Z = !Qa && "none" !== Vc[ja + 1] && Vc[ja + 1] || Vc[ja], kc = m && ("complete" === Z || "reset" === Z || Z in m))), Ia && (Qa || kc) && (kc || id || !m) && (zb(Ia) ? Ia(n) : n.getTrailing(Ia).forEach(function(Nb) {
                return Nb.endAnimation();
              })), hb || (!ha || Ra || Fd ? m && m.totalProgress(Ca, !(!Ra || !pc && !D)) : (ha._dp._time - ha._start !== ha._time && ha.render(ha._dp._time - ha._start), ha.resetTo ? ha.resetTo("totalProgress", Ca, m._tTime / m._tDur) : (ha.vars.totalProgress = Ca, ha.invalidate().restart()))), V) {
                if (D && Yb && (Y.style[Yb + R.os2] = T), fc) {
                  if (sa) {
                    if (L = !D && Ya < Ca && K < P + 1 && K + 1 >= lb(Ea, R), Cd) {
                      if (D || !ya && !L) {
                        Qe(V, Y);
                      } else {
                        Ya = ib(V, !0);
                        var Bc = K - C;
                        Qe(V, Ua, Ya.top + (R === ub ? Bc : 0) + gb, Ya.left + (R === ub ? 0 : Bc) + gb);
                      }
                    }
                    wb(ya || L ? oa : ra);
                    S && 1 > Ca && ya || ia($a + (1 !== Ca || L ? 0 : da));
                  }
                } else {
                  ia(Yc($a + da * Ca));
                }
              }
              !Na || q.tween || Ra || Fd || ba.restart(!0);
              vc && (Qa || sd && Ca && (1 > Ca || !ee)) && ae(vc.targets).forEach(function(Nb) {
                return Nb.classList[ya || sd ? "add" : "remove"](vc.className);
              });
              !Wa || hb || D || Wa(n);
              sa && !Ra ? (hb && (kc && ("complete" === Z ? m.pause().totalProgress(1) : "reset" === Z ? m.restart(!0).pause() : "restart" === Z ? m.restart(!0) : m[Z]()), Wa && Wa(n)), !Qa && ee || (Rc && Qa && Dc(n, Rc), Jc[ja] && Dc(n, Jc[ja]), sd && (1 === Ca ? n.kill(!1, 1) : Jc[ja] = 0), Qa || Jc[ja = 1 === Ca ? 1 : 3] && Dc(n, Jc[ja])), sb && !ya && Math.abs(n.getVelocity()) > (Zc(sb) ? sb : 2500) && (ad(n.callbackAnimation), ha ? ha.progress(1) : ad(m, "reverse" === Z ? 1 : !Ca, 1))) : hb && 
              Wa && !Ra && Wa(n);
            }
            Ub && (D = wa ? K / wa.duration() * (wa._caScrollDist || 0) : K, qa(D + (Jb._isFlipped ? 1 : 0)), Ub(D));
            Da && Da(-K / wa.duration() * (wa._caScrollDist || 0));
          }
        }, n.enable = function(D, L) {
          n.enabled || (n.enabled = !0, rb(Ea, "resize", zd), tb || rb(Ea, "scroll", dc), Za && rb(eb, "refreshInit", Za), !1 !== D && (n.progress = hc = 0, E = H = Ob = Va()), !1 !== L && n.refresh());
        }, n.getTween = function(D) {
          return D && q ? q.tween : ha;
        }, n.setPositions = function(D, L, K, ya) {
          if (wa) {
            var ja = wa.scrollTrigger, Z = wa.duration(), sa = ja.end - ja.start;
            D = ja.start + sa * D / Z;
            L = ja.start + sa * L / Z;
          }
          n.refresh(!1, !1, {start:Rb(D, K && !!n._startClamp), end:Rb(L, K && !!n._endClamp)}, ya);
          n.update();
        }, n.adjustPinSpacing = function(D) {
          if (aa && D) {
            var L = aa.indexOf(R.d) + 1;
            aa[L] = parseFloat(aa[L]) + D + gb;
            aa[1] = parseFloat(aa[1]) + D + gb;
            wb(aa);
          }
        }, n.disable = function(D, L) {
          if (n.enabled && (!1 !== D && n.revert(!0, !0), n.enabled = n.isActive = !1, L || ha && ha.pause(), Ga = 0, r && (r.uncache = 1), Za && Ma(eb, "refreshInit", Za), ba && (ba.pause(), q.tween && q.tween.kill() && (q.tween = 0)), !tb)) {
            for (var K = va.length; K--;) {
              if (va[K].scroller === Ea && va[K] !== n) {
                return;
              }
            }
            Ma(Ea, "resize", zd);
            tb || Ma(Ea, "scroll", dc);
          }
        }, n.kill = function(D, L) {
          n.disable(D, L);
          ha && !L && ha.kill();
          Fb && delete Ze[Fb];
          var K = va.indexOf(n);
          0 <= K && va.splice(K, 1);
          K === Pb && 0 < Oc && Pb--;
          K = 0;
          va.forEach(function(ya) {
            return ya.scroller === n.scroller && (K = 1);
          });
          K || vb || (n.scroll.rec = 0);
          m && (m.scrollTrigger = null, D && m.revert({kill:!1}), L || m.kill());
          pb && [pb, Qb, Jb, Ka].forEach(function(ya) {
            return ya.parentNode && ya.parentNode.removeChild(ya);
          });
          Qc === n && (Qc = 0);
          V && (r && (r.uncache = 1), K = 0, va.forEach(function(ya) {
            return ya.pin === V && K++;
          }), K || (r.spacer = 0));
          e.onKill && e.onKill(n);
        }, va.push(n), n.enable(!1, !1), Pa && Pa(n), m && m.add && !kb) {
          var Qd = n.update;
          n.update = function() {
            n.update = Qd;
            C || P || n.refresh();
          };
          N.delayedCall(.01, n.update);
          var kb = .01;
          var C = P = 0;
        } else {
          n.refresh();
        }
        V && function() {
          if (Ne !== db) {
            var D = Ne = db;
            requestAnimationFrame(function() {
              return D === db && Mc(!0);
            });
          }
        }();
      } else {
        this.update = this.refresh = this.kill = Sb;
      }
    }, eb.register = function(e) {
      return Id || (N = e || Ke(), "undefined" != typeof window && window.document && eb.enable(), Id = od), Id;
    }, eb.defaults = function(e) {
      if (e) {
        for (var m in e) {
          Tb[m] = e[m];
        }
      }
      return Tb;
    }, eb.disable = function(e, m) {
      od = 0;
      va.forEach(function(r) {
        return r[m ? "kill" : "disable"](e);
      });
      Ma(Aa, "wheel", dc);
      Ma(ab, "scroll", dc);
      clearInterval(Kd);
      Ma(ab, "touchcancel", Sb);
      Ma(Ua, "touchstart", Sb);
      ld(Ma, ab, "pointerdown,touchstart,mousedown", cb);
      ld(Ma, ab, "pointerup,touchend,mouseup", xb);
      $d.kill();
      wd(Ma);
      for (var q = 0; q < ua.length; q += 3) {
        Td(Ma, ua[q], ua[q + 1]), Td(Ma, ua[q], ua[q + 2]);
      }
    }, eb.enable = function() {
      if (Aa = window, ab = document, xc = ab.documentElement, Ua = ab.body, N && (ae = N.utils.toArray, Jd = N.utils.clamp, de = N.core.context || Sb, Ve = N.core.suppressOverwrites || Sb, yb = Aa.history.scrollRestoration || "auto", ue = Aa.pageYOffset, N.core.globals("ScrollTrigger", eb), Ua)) {
        od = 1;
        (Ta = document.createElement("div")).style.height = "100vh";
        Ta.style.position = "absolute";
        Pe();
        (function w() {
          return od && requestAnimationFrame(w);
        })();
        nb.register(N);
        hd = (eb.isTouch = nb.isTouch) && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
        rb(Aa, "wheel", dc);
        gd = [Aa, ab, xc, Ua];
        N.matchMedia ? (eb.matchMedia = function(w) {
          var E, H = N.matchMedia();
          for (E in w) {
            H.add(E, w[E]);
          }
          return H;
        }, N.addEventListener("matchMediaInit", function() {
          return pe();
        }), N.addEventListener("matchMediaRevert", function() {
          return Oe();
        }), N.addEventListener("matchMedia", function() {
          Mc(0, 1);
          nd("matchMedia");
        }), N.matchMedia("(orientation: portrait)", function() {
          return Ab(), Ab;
        })) : console.warn("Requires GSAP 3.11.0 or later");
        Ab();
        rb(ab, "scroll", dc);
        var e = Ua.style;
        var m = e.borderTopStyle;
        var q = N.core.Animation.prototype;
        q.revert || Object.defineProperty(q, "revert", {value:function() {
          return this.time(-.01, !0);
        }});
        e.borderTopStyle = "solid";
        q = ib(Ua);
        ub.m = Math.round(q.top + ub.sc()) || 0;
        Wb.m = Math.round(q.left + Wb.sc()) || 0;
        m ? e.borderTopStyle = m : e.removeProperty("border-top-style");
        Kd = setInterval(yd, 250);
        N.delayedCall(.5, function() {
          return Fd = 0;
        });
        rb(ab, "touchcancel", Sb);
        rb(Ua, "touchstart", Sb);
        ld(rb, ab, "pointerdown,touchstart,mousedown", cb);
        ld(rb, ab, "pointerup,touchend,mouseup", xb);
        Nd = N.utils.checkPrefix("transform");
        Rd.push(Nd);
        Id = Ib();
        $d = N.delayedCall(.2, Mc).pause();
        ic = [ab, "visibilitychange", function() {
          var w = Aa.innerWidth, E = Aa.innerHeight;
          ab.hidden ? (Ae = w, Od = E) : Ae === w && Od === E || zd();
        }, ab, "DOMContentLoaded", Mc, Aa, "load", Mc, Aa, "resize", zd];
        wd(rb);
        va.forEach(function(w) {
          return w.enable(0, 1);
        });
        for (e = 0; e < ua.length; e += 3) {
          Td(Ma, ua[e], ua[e + 1]), Td(Ma, ua[e], ua[e + 2]);
        }
      }
    }, eb.config = function(e) {
      "limitCallbacks" in e && (ee = !!e.limitCallbacks);
      var m = e.syncInterval;
      m && clearInterval(Kd) || (Kd = m) && setInterval(yd, m);
      "ignoreMobileResize" in e && (Be = 1 === eb.isTouch && e.ignoreMobileResize);
      "autoRefreshEvents" in e && (wd(Ma) || wd(rb, e.autoRefreshEvents || "none"), Xe = -1 === (e.autoRefreshEvents + "").indexOf("resize"));
    }, eb.scrollerProxy = function(e, m) {
      var q = Kb(e), r = ua.indexOf(q), w = !!~gd.indexOf(q);
      ~r && ua.splice(r, w ? 6 : 2);
      m && (w ? nc.unshift(Aa, m, Ua, m, xc, m) : nc.unshift(q, m));
    }, eb.clearMatchMedia = function(e) {
      va.forEach(function(m) {
        return m._ctx && m._ctx.query === e && m._ctx.kill(!0, !0);
      });
    }, eb.isInViewport = function(e, m, q) {
      e = (Bb(e) ? Kb(e) : e).getBoundingClientRect();
      m = e[q ? Hc : Pc] * m || 0;
      return q ? 0 < e.right - m && e.left + m < Aa.innerWidth : 0 < e.bottom - m && e.top + m < Aa.innerHeight;
    }, eb.positionInViewport = function(e, m, q) {
      Bb(e) && (e = Kb(e));
      e = e.getBoundingClientRect();
      var r = e[q ? Hc : Pc];
      m = null == m ? r / 2 : m in Ja ? Ja[m] * r : ~m.indexOf("%") ? parseFloat(m) * r / 100 : parseFloat(m) || 0;
      return q ? (e.left + m) / Aa.innerWidth : (e.top + m) / Aa.innerHeight;
    }, eb.killAll = function(e) {
      if (va.slice(0).forEach(function(m) {
        return "ScrollSmoother" !== m.vars.id && m.kill();
      }), !0 !== e) {
        e = bd.killAll || [], bd = {}, e.forEach(function(m) {
          return m();
        });
      }
    }, eb);
    xa.version = "3.12.2";
    xa.saveStyles = function(e) {
      return e ? ae(e).forEach(function(m) {
        if (m && m.style) {
          var q = ac.indexOf(m);
          0 <= q && ac.splice(q, 5);
          ac.push(m, m.style.cssText, m.getBBox && m.getAttribute("transform"), N.core.getCache(m), de());
        }
      }) : ac;
    };
    xa.revert = function(e, m) {
      return pe(!e, m);
    };
    xa.create = function(e, m) {
      return new xa(e, m);
    };
    xa.refresh = function(e) {
      return e ? zd() : (Id || xa.register()) && Mc(!0);
    };
    xa.update = function(e) {
      return ++ua.cache && zc(!0 === e ? 2 : 0);
    };
    xa.clearScrollMemory = qe;
    xa.maxScroll = function(e, m) {
      return lb(e, m ? Wb : ub);
    };
    xa.getScrollFunc = function(e, m) {
      return tc(Kb(e), m ? Wb : ub);
    };
    xa.getById = function(e) {
      return Ze[e];
    };
    xa.getAll = function() {
      return va.filter(function(e) {
        return "ScrollSmoother" !== e.vars.id;
      });
    };
    xa.isScrolling = function() {
      return !!mb;
    };
    xa.snapDirectional = xd;
    xa.addEventListener = function(e, m) {
      var q = bd[e] || (bd[e] = []);
      ~q.indexOf(m) || q.push(m);
    };
    xa.removeEventListener = function(e, m) {
      var q = bd[e], r = q && q.indexOf(m);
      0 <= r && q.splice(r, 1);
    };
    xa.batch = function(e, m) {
      function q(U, pa) {
        var W = [], oa = [], ra = N.delayedCall(H, function() {
          pa(W, oa);
          W = [];
          oa = [];
        }).pause();
        return function(Y) {
          W.length || ra.restart(!0);
          W.push(Y.trigger);
          oa.push(Y);
          P <= W.length && ra.progress(1);
        };
      }
      var r, w = [], E = {}, H = m.interval || .016, P = m.batchMax || 1E9;
      for (r in m) {
        E[r] = "on" === r.substr(0, 2) && zb(m[r]) && "onRefreshInit" !== r ? q(0, m[r]) : m[r];
      }
      return zb(P) && (P = P(), rb(xa, "refresh", function() {
        return P = m.batchMax();
      })), ae(e).forEach(function(U) {
        var pa = {};
        for (r in E) {
          pa[r] = E[r];
        }
        pa.trigger = U;
        w.push(xa.create(pa));
      }), w;
    };
    var se, uc = {auto:1, scroll:1}, Je = /(input|label|select|textarea)/i, $b = function(e) {
      var m = Je.test(e.target.tagName);
      (m || se) && (e._gsapAllow = !0, se = m);
    };
    xa.sort = function(e) {
      return va.sort(e || function(m, q) {
        return -1E6 * (m.vars.refreshPriority || 0) + m.start - (q.start + -1E6 * (q.vars.refreshPriority || 0));
      });
    };
    xa.observe = function(e) {
      return new nb(e);
    };
    xa.normalizeScroll = function(e) {
      if (void 0 === e) {
        return bc;
      }
      if (!0 === e && bc) {
        return bc.enable();
      }
      if (!1 === e) {
        return bc && bc.kill();
      }
      e = e instanceof nb ? e : ve(e);
      return bc && bc.target === e.target && bc.kill(), !!~gd.indexOf(e.target) && (bc = e), e;
    };
    xa.core = {_getVelocityProp:ke, _inputObserver:bf, _scrollers:ua, _proxies:nc, bridge:{ss:function() {
      mb || nd("scrollStart");
      mb = Ib();
    }, ref:function() {
      return Ra;
    }}};
    Ke() && N.registerPlugin(xa);
    na.ScrollTrigger = xa;
    na["default"] = xa;
    "undefined" === typeof window || window !== na ? Object.defineProperty(na, "__esModule", {value:!0}) : delete na["default"];
  });