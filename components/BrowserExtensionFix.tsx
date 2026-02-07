'use client';

import { useEffect } from 'react';

export default function BrowserExtensionFix() {
  useEffect(() => {
    // Remove Grammarly attributes that cause hydration issues
    const removeGrammarlyAttributes = () => {
      const body = document.body;
      if (body) {
        body.removeAttribute('data-new-gr-c-s-check-loaded');
        body.removeAttribute('data-gr-ext-installed');
      }
    };

    // Run immediately and on DOM changes
    removeGrammarlyAttributes();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.target === document.body) {
          removeGrammarlyAttributes();
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-new-gr-c-s-check-loaded', 'data-gr-ext-installed']
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
