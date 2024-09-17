
gsap.to(".--x", {x:200, duration: 2});
gsap.to(".--y", {y:-130, duration: 2});
gsap.to(".--x.--repeat", {x:200, duration: 2, repeat: -1, repeatDelay: 1});
gsap.to(".--y.--repeat", {y:-130, duration: 2, repeat: -1, repeatDelay: 1});
gsap.to(".--x.--repeat-yoyo", {x:200, duration: 2, repeat: -1, yoyo: true, repeatDelay: 1});
gsap.to(".--y.--repeat-yoyo", {y:-130, duration: 2, repeat: -1, yoyo: true, repeatDelay: 1});


//rotate
gsap.to(".--rotate", {rotation: 360, duration: 2, repeat: -1, ease: "none"});
gsap.to(".--rotate .text", {rotation: -360, duration: 2, repeat: -1, ease: "none"});
gsap.to(".--rotate-yoyo", {rotation: 360, duration: 2, repeat: -1, ease: "none", yoyo: true});
gsap.to(".--rotate-yoyo .text", {rotation: -360, duration: 2, repeat: -1, ease: "none", yoyo: true});

//scale
gsap.to(".--scale", {scale: 1.2, duration: 2, repeat: -1});
gsap.to(".--scale .text", {scale: 0.8, duration: 2, repeat: -1});
gsap.to(".--scale-yoyo", {scale: 1.2, duration: 2, repeat: -1, yoyo: true});
gsap.to(".--scale-yoyo .text", {scale: 0.8, duration: 2, repeat: -1, yoyo: true});

//skewX
gsap.to(".--skewX", {skewX: 20, duration: 2, repeat: -1});
gsap.to(".--skewX .text", {skewX: -20, duration: 2, repeat: -1});
gsap.to(".--skewX-yoyo", {skewX: 20, duration: 2, repeat: -1, yoyo: true});
gsap.to(".--skewX-yoyo .text", {skewX: -20, duration: 2, repeat: -1, yoyo: true});

//skewY
gsap.to(".--skewY", {skewY: 20, duration: 2, repeat: -1});
gsap.to(".--skewY .text", {skewY: -20, duration: 2, repeat: -1});
gsap.to(".--skewY-yoyo", {skewY: 20, duration: 2, repeat: -1, yoyo: true});
gsap.to(".--skewY-yoyo .text", {skewY: -20, duration: 2, repeat: -1, yoyo: true});

//background-color
gsap.to(".--red-yoyo", {backgroundColor: "red", duration: 2, repeat: -1, yoyo: true});
gsap.to(".--blue-yoyo", {backgroundColor: "blue", duration: 2, repeat: -1, yoyo: true});

//opacity,alpha,autoAlpha
gsap.to(".--opacity-yoyo", {opacity: 0, duration: 2, repeat: -1, yoyo: true, repeatDelay: 2});
gsap.to(".--alpha-yoyo", {alpha: 0, duration: 2, repeat: -1, yoyo: true, repeatDelay: 2});
gsap.to(".--autoAlpha-yoyo", {autoAlpha: 0, duration: 2, repeat: -1, yoyo: true, repeatDelay: 2});

//ease power
gsap.to(".--ease-yoyo.--power1", {x:500, duration: 5, ease: "power1.inOut", repeat: -1, yoyo: true});
gsap.to(".--ease-yoyo.--power2", {x:500, duration: 5, ease: "power2.inOut", repeat: -1, yoyo: true});
gsap.to(".--ease-yoyo.--power3", {x:500, duration: 5, ease: "power3.inOut", repeat: -1, yoyo: true});
gsap.to(".--ease-yoyo.--power4", {x:500, duration: 5, ease: "power4.inOut", repeat: -1, yoyo: true});

//ease back
gsap.to(".--ease.--back", {x:500, duration: 2, ease: "back.inOut", repeat: -1});
gsap.to(".--ease.--back1", {x:500, duration: 2, ease: "back.inOut(1)", repeat: -1});
gsap.to(".--ease.--back2", {x:500, duration: 2, ease: "back.inOut(2)", repeat: -1});
gsap.to(".--ease.--back3", {x:500, duration: 2, ease: "back.inOut(3)", repeat: -1});


//ease elastic
gsap.to(".--ease.--elastic", {x:500, duration: 2, ease: "elastic.inOut", repeat: -1});
gsap.to(".--ease.--elastic1", {x:500, duration: 2, ease: "elastic.inOut(1, 1)", repeat: -1});
gsap.to(".--ease.--elastic2", {x:500, duration: 2, ease: "elastic.inOut(2, 1)", repeat: -1});
gsap.to(".--ease.--elastic3", {x:500, duration: 2, ease: "elastic.inOut(2, 2)", repeat: -1});

//stagger
gsap.from(".--stagger", {
	y: 10,
	autoAlpha: 0,
	duration: 1,
	ease: "power4.inOut",
	stagger: 0.05,//0.05秒ごとに出現
});

//stagger random
gsap.to(".--stagger-random", {
  y: "100px",
  duration: 2,
  ease: "bounce.out",
	repeat: -1,
  stagger: {
    each: 0.01, // ばらす間隔（秒）
    from: "random" // ランダムに開始
  },
});

// 格子状に適用
gsap.from(".--stagger-grid", {
  scale: 0,
  duration: 1,
  ease: "power4.out",
	repeat: -1,
  stagger: {
    each: 0.05,
    from: "random", // 中央から
    grid: "auto", // 格子状に開始
    ease: "power4.out", // 間隔に対するイージング
  },
});

const params = { pointX: 0, pointY: 0 };

gsap.to(params, {
  pointX: 100,
	pointY: 100,
	duration: 2,
  ease: "power4.inOut",
  onUpdate: () => {
		console.log(params.pointX, params.pointY);
		const x = params.pointX;
		const y = params.pointY;
		gsap.set(".--object", { x, y }); // 座標を適用
  },
  repeat: -1,
});

const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
tl.to(".--timeline", { x: 200, duration: 1 });
tl.to(".--timeline", { y: 200, duration: 1 });
tl.to(".--timeline", { rotate: "360deg", duration: 1 });
tl.to(".--timeline", { x:0, y: 0, duration: 1 , delay: 2 });
tl.to(".--timeline", { rotate: "0deg", duration: 1 });

const tl_time = gsap.timeline({ repeat: -1, repeatDelay: 1 });

tl_time.set(".--timeline-time__txt", { textContent: "モーションを重ねない動き", color: "red" });
tl_time.to(".--timeline-time1", { y: -100, autoAlpha: 0, duration: 1 });
tl_time.to(".--timeline-time2", { y: 100, autoAlpha: 0, duration: 1 });
tl_time.to(".--timeline-time3", { y: -100, autoAlpha: 0, duration: 1 });
tl_time.to(".--timeline-time4", { y: 100, autoAlpha: 0, duration: 1 });
tl_time.to(".--timeline-time5", { y: -100, autoAlpha: 0, duration: 1 });
tl_time.set(".--timeline-time__txt", { textContent: "モーションを重ねる動き", color: "blue", delay: 1 });
tl_time.to(".--timeline-time1", { y: 0, autoAlpha: 1, duration: 1 });
tl_time.to(".--timeline-time2", { y: 0, autoAlpha: 1, duration: 1 }, "-=0.7");
tl_time.to(".--timeline-time3", { y: 0, autoAlpha: 1, duration: 1 }, "-=0.7");
tl_time.to(".--timeline-time4", { y: 0, autoAlpha: 1, duration: 1 }, "-=0.7");
tl_time.to(".--timeline-time5", { y: 0, autoAlpha: 1, duration: 1 }, "-=0.7");
