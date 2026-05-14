"use client";

import { useEffect } from "react";

export function AnimationObserver() {
  useEffect(() => {
    // Delay observer startup until after React hydration is complete.
    // Without this, IntersectionObserver fires synchronously and adds
    // "visible" to in-viewport elements before React can reconcile the
    // SSR HTML, causing a className hydration mismatch.
    const timer = setTimeout(() => {
      const observerCallback: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      };

      const observerOptions: IntersectionObserverInit = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);

      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));

      // Watch for dynamically added elements
      const mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement) {
              if (node.classList.contains("animate-on-scroll")) {
                observer.observe(node);
              }
              node.querySelectorAll(".animate-on-scroll").forEach((el) =>
                observer.observe(el)
              );
            }
          });
        });
      });

      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });

      // Store refs for cleanup
      (window as Window & { __animObserver?: IntersectionObserver; __mutObserver?: MutationObserver }).__animObserver = observer;
      (window as Window & { __animObserver?: IntersectionObserver; __mutObserver?: MutationObserver }).__mutObserver = mutationObserver;
    }, 0); // 0ms — runs after current call stack (after React hydration)

    return () => {
      clearTimeout(timer);
      const w = window as Window & { __animObserver?: IntersectionObserver; __mutObserver?: MutationObserver };
      w.__animObserver?.disconnect();
      w.__mutObserver?.disconnect();
    };
  }, []);

  return null;
}
