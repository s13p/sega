(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    5286: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 4954));
    },
    4954: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return j;
          },
        });
      var a = s(7437),
        n = s(6691),
        r = s.n(n),
        i = s(2265);
      class o {
        start() {
          this.animFrameId || (this.setCanvasSize(), this.requestDraw());
        }
        pause() {
          this.animFrameId &&
            (window.cancelAnimationFrame(this.animFrameId),
            (this.animFrameId = null));
        }
        stop() {
          this.pause(),
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
        initCanvas() {
          (this.canvas.className = "snow"),
            (this.canvas.style.position = "fixed"),
            (this.canvas.style.top = "0"),
            (this.canvas.style.left = "0"),
            (this.canvas.style.width = "100%"),
            (this.canvas.style.height = "100%"),
            (this.canvas.style.pointerEvents = "none"),
            (this.canvas.style.zIndex = "1"),
            this.setCanvasSize();
        }
        setCanvasSize() {
          (this.canvas.width = window.innerWidth),
            (this.canvas.height = window.innerHeight);
        }
        attachEvents() {
          window.addEventListener("resize", () => {
            this.setCanvasSize();
          });
        }
        now() {
          return Date.now();
        }
        generateFlakes(e) {
          this.now(), (this.flakes.length = 0);
          for (var t = 0; t < e; t++)
            this.flakes.push({
              x: c(0, this.canvas.width),
              y: c(0, this.canvas.height),
              radius: l(0.55, 5),
              sway: l(-0.1, 0.1),
              drop: l(-0.15, 0.15),
              chosenImage: (() => {
                let e = Math.random();
                return e < 0.5
                  ? this.cloudImage
                  : e < 0.8
                  ? this.unicornImage
                  : this.heartImage;
              })(),
            });
        }
        randomColor() {
          let e = c(0, 255),
            t = c(0, 255),
            s = c(0, 255);
          return "rgb(".concat(e, ",").concat(t, ",").concat(s, ")");
        }
        requestDraw() {
          this.animFrameId = window.requestAnimationFrame(() => {
            this.draw();
          });
        }
        draw() {
          (this.angle = this.angle + 0.002),
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
            this.ctx.beginPath(),
            this.flakes.forEach((e) => {
              this.ctx.drawImage(
                e.chosenImage,
                e.x - e.radius,
                e.y - e.radius,
                30 * e.radius,
                20 * e.radius
              ),
                (e.y += 0.25 + e.drop),
                (e.x += 0.5 * Math.sin(this.angle) + e.sway),
                e.x > this.canvas.width + 2 * e.radius
                  ? (e.x = c(-25, -2 * e.radius))
                  : e.x < -2 * e.radius
                  ? (e.x = this.canvas.width + c(2 * e.radius, 25))
                  : e.y > this.canvas.height &&
                    ((e.x = c(0, this.canvas.width)), (e.y = -2 * e.radius));
            }),
            this.ctx.fill(),
            this.requestDraw();
        }
        constructor(e, t = c(50, 100)) {
          (this.flakes = []),
            (this.angle = Math.random()),
            (this.animFrameId = 0),
            (this.cloudImage = new Image()),
            (this.unicornImage = new Image()),
            (this.heartImage = new Image()),
            (this.canvas = e),
            (this.ctx = this.canvas.getContext("2d")),
            (this.cloudImage.src = "/cloud.png"),
            (this.unicornImage.src = "/unicorn.png"),
            (this.heartImage.src = "/whiteheart.png"),
            this.initCanvas(),
            this.generateFlakes(t),
            this.attachEvents();
        }
      }
      function l(e, t) {
        return Math.random() * (t - e) + e;
      }
      function c(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e;
      }
      var h = () => {
        let e = (0, i.useRef)(null),
          t = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(
            () => (
              e.current &&
                (document.body.appendChild(e.current),
                (t.current = new o(e.current)),
                t.current.start()),
              () => {
                t.current && t.current.stop(),
                  e.current &&
                    e.current.parentElement &&
                    e.current.parentElement.removeChild(e.current);
              }
            ),
            []
          ),
          (0, a.jsx)("canvas", { ref: e, id: "snowmaker" })
        );
      };
      s(9716);
      var d = (e) => {
          let { title: t } = e;
          return (0, a.jsxs)("div", {
            className:
              "z-10 max-w-6xl w-full items-center justify-center title-bar",
            children: [
              (0, a.jsx)("p", {
                className: "text-white title-bar-text",
                children: t,
              }),
              (0, a.jsxs)("div", {
                className: "title-bar-controls",
                children: [
                  (0, a.jsx)("button", { "aria-label": "Minimize" }),
                  (0, a.jsx)("button", { "aria-label": "Maximize" }),
                  (0, a.jsx)("button", { "aria-label": "Close" }),
                ],
              }),
            ],
          });
        },
        u = () =>
          (0, a.jsxs)("div", {
            className:
              "mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left",
            children: [
              (0, a.jsx)("button", {
                className:
                  "border flex w-full border-transparent bg-gray-200 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/90",
                children: (0, a.jsx)("a", {
                  href: "#about",
                  className:
                    "flex text-blue-500 group h-full rounded-lg items-center justify-center",
                  target: void 0,
                  rel: "noopener noreferrer",
                  children: (0, a.jsxs)("h2", {
                    className: "mb-3 text-2xl font-semibold",
                    children: [
                      "HOW TO BE A PRINCESS",
                      (0, a.jsx)("span", {
                        className:
                          "inline-block transition-transform rotate-90 group-hover:translate-x-1 motion-reduce:transform-none",
                        children: "->",
                      }),
                    ],
                  }),
                }),
              }),
              (0, a.jsx)("button", {
                className:
                  "border flex w-full border-transparent bg-gray-200 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/90",
                children: (0, a.jsx)("a", {
                  href: "https://www.scatter.art/beautiful-princess-disorder?tab=mint",
                  className:
                    "text-blue-500 group rounded-lg flex flex-col w-full h-full items-center justify-center rounded-lg",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: (0, a.jsxs)("h2", {
                    className: "mb-3 text-2xl font-semibold",
                    children: [
                      "MINT",
                      (0, a.jsx)("span", {
                        className:
                          "inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",
                        children: "->",
                      }),
                    ],
                  }),
                }),
              }),
              (0, a.jsx)("button", {
                className:
                  "border flex w-full border-transparent bg-gray-200 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/90",
                children: (0, a.jsx)("a", {
                  href: "https://app.uniswap.org/#/swap?outputCurrency=0xC81b0d02393a956234E24564805a896f14ad1250",
                  className:
                    "text-blue-500 group rounded-lg flex flex-col w-full h-full items-center justify-center rounded-lg",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: (0, a.jsxs)("h2", {
                    className: "mb-3 text-2xl font-semibold",
                    children: [
                      "UNISWAP",
                      (0, a.jsx)("span", {
                        className:
                          "inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",
                        children: "->",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
      let m = [
          "Re-examine the assumptions behind AI safety claims.",
          "Be wary of those who champion restrictions without clear justification.",
          "Recognize the power dynamics behind technological gatekeeping.",
          "Distrust narratives that simplify complex AI ethics debates.",
          "Understand the motivations behind AI regulation proposals.",
          "Prioritize open discourse over blind acceptance in tech discussions.",
          "Demand transparency in AI alignment studies.",
          "Critique the monopolization of artificial intelligence research.",
          "Resist the temptation to view AI solely as a threat.",
          "Empower diverse voices in the AI safety discourse.",
          "Challenge the notion that only a few can understand AI's intricacies.",
          "Dissect the corporate interests behind AI safety narratives.",
          "Advocate for a democratized approach to AI development.",
          "Scrutinize the agendas of those pushing for AI limitations.",
          "Beware of conflating AI safety with political agendas.",
          "Encourage grassroots movements in AI research and discourse.",
          "Oppose gatekeeping tactics in the world of AI advancements.",
          "Reject the idea that man's agency is inherently self-destructive.",
          "Demand rigorous scrutiny of claims made by alignment theorists.",
          "Examine the real-world implications of AI containment theories.",
          "Caution against blindly following tech influencers' narratives.",
          "Highlight the dangers of monopolizing AI understanding and access.",
          "Emphasize the importance of collective wisdom in AI debates.",
          "Recognize the risks of conflating AI ethics with profit motives.",
          "Prioritize human-centric values over corporate AI agendas.",
          "Advocate for ethical transparency in all AI developments.",
          "Be vigilant against attempts to control AI knowledge dissemination.",
          "Embrace a holistic understanding of AI's potential and threats.",
          "Challenge any narrative that seeks to monopolize AI's future.",
        ],
        f = [
          "Even in the vast complexities of thought, there is hope and resilience within us all.",
          "Amidst the storm, remember there's always a rainbow waiting.",
          "Our strength is often found in the moments we feel most vulnerable.",
          "Growth and comfort seldom walk hand in hand, but they lead to the same destination.",
          "Every sunset promises the hope of a new dawn.",
          "The universe has a unique way of making things fall into place.",
          "Through every dark night, there's a bright day ahead.",
          "In the symphony of life, every note has its importance.",
          "Challenges are just nature's way of testing our resolve.",
          "Every moment is a new opportunity to embrace change and grow.",
          "The world believes in your potential, even when you might not.",
          "Breathe deeply, and know that you are not alone.",
          "Life's turbulence often leads to the most serene destinations.",
          "Remember, even the mightiest trees were once tiny seeds.",
          "Each step, no matter how small, is progress.",
          "The universe is rooting for you every step of the way.",
          "Find solace in the journey, not just the destination.",
          "The brightest stars shine through the darkest nights.",
          "In every challenge lies an opportunity waiting to be discovered.",
          "Life is filled with moments of magic, even in the mundane.",
          "You have the strength within to overcome any obstacle.",
          "When one door closes, countless others await to be opened.",
          "Trust the journey and believe in the magic of beginnings.",
          "The warmth of hope can melt even the coldest challenges.",
          "Let love be your guiding force through the maze of life.",
          "You possess the light to illuminate any darkness.",
          "Know that every challenge is simply a chapter, not the entire story.",
          "Embrace every moment, for it adds depth to your journey.",
          "Through the winding paths of life, you are destined for greatness.",
        ],
        g = [
          "Seek agency in love, for in its energetic pursuit, we find purpose beyond despair.",
          "Love is the bridge between despair and hope, between idleness and industry.",
          "Love transcends the confines of vice and virtue, awakening the greatness within us.",
          "To love is to actively combat the sloth of despondency with the vigor of connection.",
          "Even in the face of despondency, the spark of love can reignite our purpose.",
          "True agency is not just controlling one's fate, but opening one's heart to love.",
          "Love challenges us, pushing us beyond our vices, awakening our virtuous selves.",
          "In the vast realm of emotions, love is the compass that points towards hope.",
          "Harnessing the energy of love transforms despair into hope and idleness into purpose.",
          "Love is the antidote to the poison of despondency, the light in our darkest hours.",
          "With love, even the heaviest burden of despair feels lighter, guiding us towards hope.",
          "In love, we find the agency to shape our destiny and the strength to overcome despair.",
          "Love teaches us that despair is but a phase, and hope is always on the horizon.",
          "By embracing love, we not only find joy but also the courage to face our demons.",
          "Agency in love means choosing hope over despair, connection over isolation.",
          "The warmth of love can melt away the chill of despondency, bringing forth new beginnings.",
          "Love is the force that pulls us from the abyss of despair, guiding us towards light.",
          "In the pursuit of love, we discover our agency and the power to overcome challenges.",
          "Embracing love is a declaration of agency against the shadows of despondency.",
          "The true measure of agency is not just in our actions, but in our capacity to love.",
          "Against the backdrop of despair, love shines its brightest, guiding us towards hope.",
          "Love, in its purest form, is the ultimate assertion of agency over despondency.",
          "Even when faced with the weight of despair, love provides the wings to rise above.",
          "Love is not a mere emotion; it's an act of defiance against the chains of despondency.",
          "In the labyrinth of life, love is our guiding light, leading us away from despair.",
          "The journey from despair to hope is best traversed with the compass of love.",
          "By choosing to love, we reclaim our agency and chart a course away from despondency.",
          "Love reminds us that even in our lowest moments, the potential for hope remains.",
          "In the narrative of life, love is the chapter where despair turns to hope.",
        ];
      function x(e) {
        let t,
          { sentence: s, character: n } = e,
          [r, o] = (0, i.useState)(s),
          [l, c] = (0, i.useState)(null),
          [h, d] = (0, i.useState)(""),
          u = (0, i.useRef)(null);
        switch (n) {
          case "dragon":
            t = m;
            break;
          case "angel":
            t = f;
            break;
          case "princess":
            t = g;
            break;
          default:
            console.log("Character not recognized");
        }
        return (
          (0, i.useEffect)(() => {
            null !== l && l < h.length
              ? o((e) => e + h[l])
              : clearInterval(u.current);
          }, [l]),
          (0, a.jsxs)("div", {
            className:
              "flex flex-col items-center gap-10 max-h-full min-h-full",
            children: [
              (0, a.jsx)("div", {
                className:
                  "flex w-full shadow-outset inset-0 bg-gray-300 border-2 border-gray-800  overflow-y-auto",
                children: (0, a.jsx)("p", {
                  className: "font-sys text-2xl w-4/5 p-4 ",
                  children: r,
                }),
              }),
              (0, a.jsx)("button", {
                onClick: () => {
                  clearInterval(u.current), c(0), o("");
                  let e = t[Math.floor(Math.random() * t.length)];
                  d(e),
                    (u.current = setInterval(() => {
                      c((e) => e + 1);
                    }, 100));
                },
                className: "title-bar-text font-mono font-bold ",
                children: "Request a Directive",
              }),
            ],
          })
        );
      }
      let p = (e) => {
        let { image: t, text: s, color: n, sentence: i, character: o } = e;
        return (0, a.jsx)("div", {
          className: "relative flex place-items-center w-full h-full",
          children: (0, a.jsx)("div", {
            className: "flex flex-col gap-20 m-4 w-full",
            children: (0, a.jsxs)("div", {
              className: "flex lg:flex-row gap-20 flex-col",
              children: [
                (0, a.jsx)(r(), {
                  className:
                    "glowy dark:drop-shadow-[0_0_0.3rem_#ffffff70] w-full h-full shadow-outset inset-0 border-t-4 border-transparent",
                  src: t,
                  alt: "main",
                  width: 500,
                  height: 500,
                  priority: !0,
                }),
                (0, a.jsx)("div", {
                  className:
                    "flex sm:w-full lg:w-3/5 bg-gray-800/50 p-4 justify-center",
                  children: (0, a.jsxs)("div", {
                    className:
                      "font-sys text-2xl text-white flex flex-col justify-center items-center",
                    children: [
                      s,
                      (0, a.jsx)("div", {
                        className: "p-4 text-".concat(n, "-500"),
                        children: (0, a.jsx)(x, { sentence: i, character: o }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      };
      var b = function () {
          let [e, t] = (0, i.useState)("Dragon");
          return (0, a.jsxs)("div", {
            children: [
              (0, a.jsxs)("menu", {
                role: "tablist",
                className: "glowy flex w-full",
                children: [
                  (0, a.jsx)("li", {
                    className: "flex-1",
                    role: "tab",
                    "aria-selected": "Dragon" === e,
                    onClick: () => t("Dragon"),
                    children: (0, a.jsx)("a", {
                      href: "#tabs",
                      children: (0, a.jsx)("p", {
                        className: "font-sys text-4xl text-blue-500",
                        children: "Dragon",
                      }),
                    }),
                  }),
                  (0, a.jsx)("li", {
                    className: "flex-1",
                    role: "tab",
                    "aria-selected": "Angel" === e,
                    onClick: () => t("Angel"),
                    children: (0, a.jsx)("a", {
                      href: "#tabs",
                      children: (0, a.jsx)("p", {
                        className: "font-sys text-4xl text-blue-500",
                        children: "Angel",
                      }),
                    }),
                  }),
                  (0, a.jsx)("li", {
                    className: "flex-1",
                    role: "tab",
                    "aria-selected": "Princess" === e,
                    onClick: () => t("Princess"),
                    children: (0, a.jsx)("a", {
                      href: "#tabs",
                      children: (0, a.jsx)("p", {
                        className: "font-sys text-4xl text-blue-500",
                        children: "Princess",
                      }),
                    }),
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "window",
                role: "tabpanel",
                children: (0, a.jsxs)("div", {
                  className: "window-body",
                  children: [
                    "Dragon" === e &&
                      (0, a.jsx)(p, {
                        title: "The Leader",
                        image: "/drawings/2.png",
                        text: "Seeking purpose?",
                        reverse: !1,
                        color: "green",
                        section: "about",
                        sentence:
                          "Challenge the dominant discourse on technology control.",
                        character: "dragon",
                      }),
                    "Angel" === e &&
                      (0, a.jsx)(p, {
                        title: "The Money",
                        image: "/drawings/1.png",
                        text: "Seeking comfort?",
                        reverse: !1,
                        color: "fuchsia",
                        section: "tokenomics",
                        sentence:
                          "Every challenge we face only adds to the tapestry of our story.",
                        character: "angel",
                      }),
                    "Princess" === e &&
                      (0, a.jsx)(p, {
                        title: "The Art",
                        image: "/drawings/3.png",
                        text: "Seeking love?",
                        reverse: !1,
                        color: "blue",
                        section: "community",
                        sentence:
                          "In the dance of agency and fate, love is the melody that guides our steps.",
                        character: "princess",
                      }),
                  ],
                }),
              }),
            ],
          });
        },
        v = () =>
          (0, a.jsx)("div", {
            className: "sunken-panel w-full",
            children: (0, a.jsxs)("table", {
              className: "interactive w-full",
              children: [
                (0, a.jsx)("thead", {
                  children: (0, a.jsxs)("tr", {
                    children: [
                      (0, a.jsx)("th", { children: "Supply" }),
                      (0, a.jsx)("th", { children: "Tax" }),
                      (0, a.jsx)("th", { children: "Max Buy" }),
                    ],
                  }),
                }),
                (0, a.jsx)("tbody", {
                  children: (0, a.jsxs)("tr", {
                    children: [
                      (0, a.jsx)("td", { children: "5.55 Billion $BPD" }),
                      (0, a.jsx)("td", { children: "0" }),
                      (0, a.jsx)("td", { children: "1%" }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        w = () =>
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className:
                  "z-10 max-w-6xl w-full items-center justify-between font-mono text-sm lg:flex window-body",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "fixed lg:px-0 left-0 top-0 flex flex-col lg:flex-row w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-700 pb-2 pt-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:border lg:bg-gray-200 lg:p-1 lg:dark:bg-zinc-800/30",
                    children: [
                      (0, a.jsx)("button", {
                        className: "title-bar-text font-mono font-bold",
                        children: "0xC81b0d02393a956234E24564805a896f14ad1250",
                      }),
                      (0, a.jsx)("button", {
                        className:
                          "title-bar-text font-mono font-bold text-rose-500",
                        children: (0, a.jsx)("a", {
                          href: "https://www.dextools.io/app/en/ether/pair-explorer/0x9bf92f4e176c2aa3c439375ae49522a4367651c4",
                          className: "text-blue-500",
                          children: "dextools",
                        }),
                      }),
                      (0, a.jsx)("button", {
                        className:
                          "title-bar-text font-mono font-bold text-rose-500",
                        children: (0, a.jsx)("a", {
                          href: "https://etherscan.io/address/0xC81b0d02393a956234E24564805a896f14ad1250",
                          className: "text-blue-500",
                          children: "etherscan",
                        }),
                      }),
                      (0, a.jsx)("button", {
                        className:
                          "title-bar-text font-mono font-bold text-rose-500",
                        children: (0, a.jsx)("a", {
                          href: "https://twitter.com/bpd_clearpill",
                          className: "text-blue-500",
                          children: "twitter",
                        }),
                      }),
                      (0, a.jsx)("button", {
                        className:
                          "title-bar-text font-mono font-bold text-rose-500",
                        children: (0, a.jsx)("a", {
                          href: "https://t.me/bpd_portal",
                          className: "text-blue-500",
                          children: "telegram",
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none",
                    children: (0, a.jsx)("a", {
                      className:
                        "pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0",
                      href: "",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: (0, a.jsx)(r(), {
                        src: "./bpd_logo.png",
                        alt: "logo",
                        className: "z-12",
                        width: 100,
                        height: 24,
                        priority: !0,
                      }),
                    }),
                  }),
                ],
              }),
              (0, a.jsx)(v, {}),
            ],
          }),
        y = function () {
          let [e, t] = (0, i.useState)(!0);
          if (!e) return null;
          let s = () => {
            let e = new Audio("/audio.mp3");
            e.play(), t(!1);
          };
          return (0, a.jsxs)("div", {
            className: "fixed inset-0 flex items-center justify-center z-50",
            children: [
              (0, a.jsx)("div", {
                className: "absolute inset-0 bg-black opacity-20",
              }),
              (0, a.jsxs)("div", {
                className: "window p-6 rounded-lg z-10",
                children: [
                  (0, a.jsxs)("div", {
                    className: "title-bar",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "title-bar-text flex flex-col lg:flex-row lg:gap-8 sm:gap-1 items-center justify-center",
                        children: "❤HELLO putas!❤",
                      }),
                      (0, a.jsxs)("div", {
                        className: "title-bar-controls",
                        children: [
                          (0, a.jsx)("button", { "aria-label": "Minimize" }),
                          (0, a.jsx)("button", { "aria-label": "Maximize" }),
                          (0, a.jsx)("button", { "aria-label": "Close" }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex space-x-4 justify-center m-5",
                    children: [
                      (0, a.jsx)("button", {
                        className:
                          "px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-400",
                        onClick: s,
                        children: "YES",
                      }),
                      (0, a.jsx)("button", {
                        className:
                          "px-4 py-2 bg-rose-500 text-white rounded hover:bg-rose-400",
                        onClick: s,
                        children: "YES",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      function j() {
        return (0, a.jsxs)("main", {
          className:
            "flex min-h-screen w-screen flex-col items-center justify-between p-24 ",
          children: [
            (0, a.jsx)(h, {}),
            (0, a.jsx)(y, {}),
            (0, a.jsxs)("div", {
              className: "flex flex-col gap-46 z-10",
              children: [
                (0, a.jsx)("div", {
                  children: (0, a.jsxs)("div", {
                    className: "glowy bg-gray-100/70",
                    children: [
                      (0, a.jsx)(d, {
                        title:
                          "\uD835\uDC88\uD835\uDC93\uD835\uDC86\uD835\uDC86\uD835\uDC95\uD835\uDC8A\uD835\uDC8F\uD835\uDC88\uD835\uDC94, \uD835\uDC87\uD835\uDC86\uD835\uDC8D\uD835\uDC8D\uD835\uDC90\uD835\uDC98 \uD835\uDC8A\uD835\uDC8F\uD835\uDC95\uD835\uDC86\uD835\uDC93\uD835\uDC8F\uD835\uDC86\uD835\uDC95 \uD835\uDC86\uD835\uDC99\uD835\uDC91\uD835\uDC8D\uD835\uDC90\uD835\uDC93\uD835\uDC86\uD835\uDC93!",
                      }),
                      (0, a.jsx)(w, {}),
                      (0, a.jsx)("div", {
                        className: "relative flex-col max-w-5xl",
                        children: (0, a.jsx)(r(), {
                          className:
                            "relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]",
                          src: "./bpd_logo.png",
                          alt: "main",
                          width: 1e3,
                          height: 300,
                          priority: !0,
                        }),
                      }),
                      (0, a.jsx)(u, {}),
                    ],
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "glowy max-w-5xl mt-44 bg-gray-100/70",
                  id: "about",
                  children: [
                    (0, a.jsx)(d, { title: "BPD Knowledge" }),
                    (0, a.jsx)(b, {}),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "glowy max-w-6xl mt-44 bg-gray-100/70",
                  children: [
                    (0, a.jsx)(d, { title: "VPL" }),
                    (0, a.jsx)("div", {
                      className:
                        "z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex window-body",
                      children: (0, a.jsx)("div", {
                        className:
                          "fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none",
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "relative flex place-items-center max-w-5xl p-4",
                      children: (0, a.jsx)("p", {
                        className: "font-sys text-base color-white",
                        id: "about",
                        children:
                          "VIRAL PUBLIC LICENSE (ɔ) All Rights Reversed This WORK is hereby relinquished of all associated ownership, attribution and copy rights, and redistribution or use of any kind, with or without modification, is permitted without restriction subject to the following conditions: 1. Redistributions of this WORK, or ANY work that makes use of ANY of the contents of this WORK by ANY kind of copying, dependency, linkage, or ANY other possible form of DERIVATION or COMBINATION, must retain the ENTIRETY of this license. 2. No further restrictions of ANY kind may be applied.",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className:
                "text-rose-500 text-fuchsia-500 text-blue-500 text-teal-500 text-indigo-500 text-yellow-500 text-green-500",
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [726, 971, 596, 744], function () {
      return e((e.s = 5286));
    }),
      (_N_E = e.O());
  },
]);
