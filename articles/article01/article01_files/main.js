(() => {
  // src/scripts/utilities.js
 
  var hideElement = function(targets = void 0) {
    targets = targets === void 0 ? this.targets() : targets.targets();
    for (let item of targets) {
      item.classList.add("is-inactive");
      item.classList.remove("is-active");
      item.style.opacity = "";
      item.style.display = "";
    }
  };
  var setupShowElement = function(targets = void 0) {
    targets = targets === void 0 ? this.targets() : targets.targets();
    for (let item of targets) {
      item.classList.remove("is-inactive");
    }
  };
  var showElement = function(targets = void 0) {
    targets = targets === void 0 ? this.targets() : targets.targets();
    for (let item of targets) {
      item.classList.remove("is-inactive", "is-invisible");
      item.classList.add("is-active");
      item.style.opacity = "";
    }
  };
  var elementExists = function(element) {
    return element !== void 0 && element !== null;
  };
  var animationPlay = function(element, timeout = 0) {
    if (!elementExists(element))
      return;
    element.classList.remove("is-paused");
    element.classList.remove("reset-anim");
    element.classList.add("is-playing");
    if (timeout > 0) {
      setTimeout(() => {
        animationPause(element);
      }, timeout);
    }
  };
  var animationPause = function(element, timeout = 0) {
    if (!elementExists(element))
      return;
    element.classList.remove("is-playing");
    element.classList.remove("reset-anim");
    element.classList.add("is-paused");
    if (timeout > 0) {
      setTimeout(() => {
        animationPlay(element);
      }, timeout);
    }
  };
  var timelineElementExists = function(selector, checkContent = true) {
    let exists = false;
    let element = typeof selector === "string" ? document.querySelector(selector) : selector;
    if (elementExists(element)) {
      if (checkContent) {
        let elementContent;
        if (element.tagName === "IMG") {
          elementContent = element.getAttribute("src");
        } else {
          elementContent = element.textContent;
        }
        if (elementContent !== "" && !elementContent.includes("empty.png"))
          exists = true;
      } else {
        exists = true;
      }
    }
    return exists;
  };
  var timelinePauseOnTextLength = function(timeline, frame, selector, threshold, pause) {
    let element = document.querySelector(selector);
    if (element === null)
      return;
    if (element.textContent.length > threshold) {
      if (element.classList.contains("font-size-2")) {
        element.classList.remove("font-size-2");
        element.classList.add("font-size-3");
      }
      if (element.classList.contains("font-size-1")) {
        element.classList.remove("font-size-1");
        element.classList.add("font-size-2");
      }
    }
  };

  // src/scripts/main.js
  var advert = function() {
    const options = {
      version: "22_ACG_ES_SMA_DFT_MOFU_GVDash",
      size: "970x250",
      width: 970,
      height: 250,
      animTransition: 0.2,
      animTransitionFirst: 0.25,
      animPause: 4,
      animEase: Power1.easeOut
    };
    const timeline = gsap.timeline({ease: options.animEase });
    const timelineEnd = gsap.timeline({ease: options.animEase, paused: true });
    const bannerSizeMobile = options.size === "320x50" || options.size === "320x100";
    const secondSVGOffset = options.size === "120x600" || options.size === "160x600" || options.size === "300x250" || options.size === "300x600" || options.size === "970x250" || options.size === "728x90";
    let frameEndOverlap = options.animTransition;

    const init = function() {
      animate();
    };

    function replay(){
      setTimeout(() => {
       // return;
        //timeline.kill();
        //timelineEnd.kill();
        gsap.set(".frame-1", { x: 0, y:0, opacity:0 });
        gsap.set([".frame-2",".frame-3",".frame-4"], { x: 300, y:0});
        gsap.set(".svg-animated--line", { x: 0, opacity:1 });
        gsap.set(".sprite-sheet-1", { marginLeft: 0 });
         gsap.set(".logo", { opacity: 0 });
         

        document.querySelector(".svg-animated--icon").classList.remove("is-paused");
        document.querySelector(".svg-animated--icon").classList.remove("is-playing");
        document.querySelector(".svg-animated--icon").classList.add("reset-anim");
       // document.querySelector(".logo0").classList.add("reset-anim");

        document.querySelector(".svg-animated--line").classList.remove("is-paused");
        document.querySelector(".svg-animated--line").classList.remove("is-playing");
        document.querySelector(".svg-animated--line").classList.add("reset-anim");

        document.querySelector(".sprite-sheet-1").classList.remove("is-paused");
        document.querySelector(".sprite-sheet-1").classList.remove("is-playing");
        document.querySelector(".sprite-sheet-1").classList.add("reset-anim");

       

         setTimeout(() => {
          gsap.set(".btn", { x: options.width });
            timeline.restart();
          }, 200);
      }, 3500);
    }

    const animateEnd = function() {
      if (!bannerSizeMobile) {
        timelineEnd.to(".btn", { x: 0, opacity: 1, duration: options.animTransition, ease: "none", onComplete: showElement, clearProps: "opacity" });
      } else {
        timelineEnd.to(".arrow", { x: 6, duration: 0.2, delay: 0.25, repeat: 1, yoyo: true });
      }
      timeline.add(timelineEnd.play(), ">");
    };
    const animate = function() {
      let svgAnimatedIcon = document.querySelector(".svg-animated--icon");
      let svgAnimatedLine = document.querySelector(".svg-animated--line");
      let spriteSheet1 = document.querySelector(".sprite-sheet-1");
      let spriteSheet2 = document.querySelector(".sprite-sheet-2");
      if (options.size === "300x600") {
        gsap.set(".btn", { fontSize: "1.4rem", padding: "1rem 2rem" });
      }
      if (options.size === "970x250") {
        gsap.set(".btn", { fontSize: "1.2rem", padding: "0.9rem 1.9rem" });
      }
      if (options.size === "728x90") {
        gsap.set(".btn", { fontSize: "1.8rem" });
      }
      if (bannerSizeMobile || options.size === "728x90") {
        gsap.set(".frame-end", { y: options.height });
        frameEndOverlap = 0;
      } else {
        gsap.set(".frame", { x: options.width });
        gsap.set(".btn", { x: options.width });
      }
      gsap.set(".frame-1", { x: 0, y: 0 });
      if (timelineElementExists(".text-1")) {
        timeline.to(".frame-1", {
          opacity: 1,
          duration: options.animTransitionFirst,
          onStart: setupShowElement,
          onComplete: function() {
            showElement(this);
            animationPlay(svgAnimatedIcon);
          }
        });
        if (options.size != "728x90") {
          if (timelineElementExists(".logo0")) {
            timeline.to(".logo0", { opacity: 1, duration: 0.5 }, 0);
          } else {
            timeline.to(".logo", { opacity: 1, duration: 0.5 }, 0);
          }
        }
        timeline.addLabel("frame-1");
        timeline.to(".frame-1", { x: options.width * -1, duration: options.animTransition, delay: options.animPause, onComplete: hideElement });
        timeline.addLabel("frame-1-end");
      }
      if (timelineElementExists(spriteSheet1, false)) {
        if (options.size === "300x250" || options.size === "970x250") {
          if (timelineElementExists(".logo0")) {
            timeline.to(".logo0", { opacity: 0, duration: 0.5 }, "-=0.5");
          } else {
            timeline.to(".logo", { opacity: 0, duration: 0.5 }, "-=0.5");
          }
        }
        timeline.to(".frame-2", {
          x: 0,
          duration: options.animTransition,
          onStart: function() {
            setupShowElement(this);
            animationPlay(svgAnimatedLine);
          },
          onComplete: function() {
            showElement(this);
            if (!secondSVGOffset)
              animationPlay(spriteSheet1);
          }
        }, `-=${options.animTransition}`);
        if (secondSVGOffset) {
          let animatedLineOffset = -1;
          gsap.set(spriteSheet1, { marginLeft: options.width });
          if (options.size === "120x600") {
            animatedLineOffset = -2;
          }
          if (options.size === "160x600") {
            animatedLineOffset = -1.4;
          }
          if (options.size === "300x250") {
            animatedLineOffset = -1;
          }
          if (options.size === "300x600") {
            animatedLineOffset = -1;
          }
          if (options.size === "970x250") {
            animatedLineOffset = -0.5;
          }
          if (options.size === "728x90") {
            animatedLineOffset = -0.4;
          }
          timeline.to(svgAnimatedLine, { x: options.width * animatedLineOffset, duration: 0.5 });
          timeline.to(spriteSheet1, { marginLeft: 0, duration: options.animTransition, onComplete: function() {
            animationPlay(spriteSheet1);
          } });
        }
        timeline.addLabel("frame-2");
        timeline.to(".frame-2", { x: options.width * -1, duration: options.animTransition, delay: options.animPause + 1, onComplete: hideElement });
        timeline.to(svgAnimatedLine, { opacity: 0, duration: 0.1 }, `-=${options.animTransition}`);
        if (timelineElementExists(".frame1")) {
          timeline.to(".frame1", { opacity: 1, duration: 0.2 }, "-=6");
          timeline.to(".frame1", { opacity: 0, duration: 0.2 }, "-=4.9");
          timeline.to(".frame2", { opacity: 1, duration: 0.2 }, "-=5");
          timeline.to(".frame2", { opacity: 0, duration: 0.2 }, "-=3.8");
          timeline.to(".frame3", { opacity: 1, duration: 0.2 }, "-=4");
          timeline.to(".frame3", { opacity: 0, duration: 0.2 }, "-=2.8");
          timeline.to(".frame4", { opacity: 1, duration: 0.2 }, "-=3");
        }
      }
      if (timelineElementExists(spriteSheet2, false)) {
        // timeline.to(spriteSheet1, { opacity: 0, duration: options.animTransition+0.3},7.8);
        timeline.to(spriteSheet2, { opacity: 1, duration: options.animTransition, onComplete: function() {
          animationPlay(spriteSheet2);
        } }, 8);
      }
      if (timelineElementExists(".text-3")) {
        timeline.to(".frame-3", { x: 0, duration: options.animTransition, onStart: setupShowElement, onComplete: showElement }, `-=${options.animTransition}`);
        timeline.addLabel("frame-3");
        timeline.to(".frame-3", { x: options.width * -1, duration: options.animTransition, delay: options.animPause, onComplete: hideElement });
      }
      if (timelineElementExists(".text-4")) {
        timeline.to(".frame-4", { x: 0, duration: options.animTransition, onStart: setupShowElement, onComplete: showElement }, `-=${options.animTransition}`);
        timeline.addLabel("frame-4");
        timeline.to(".frame-4", { x: options.width * -1, duration: options.animTransition, delay: options.animPause, onComplete: hideElement });
      }
      timeline.to(".frame-end", {
        x: 0,
        y: 0,
        duration: options.animTransition,
        onStart: setupShowElement,
        onComplete: function() {
          showElement(this);
        }
      }, `-=${frameEndOverlap}`);
      animateEnd();
      timeline.addLabel("frame-end");
      timeline.to(".logo", { opacity: 1, duration: 0.5, onComplete: replay });
      //timelinePauseOnTextLength(timeline, "frame-1", ".text-1", 60, 1e3);
      //timelinePauseOnTextLength(timeline, "frame-end", ".text-1", 180, 1e3);
    };
    return {
      init
    };
  }();
  window.advert = advert;
})();
