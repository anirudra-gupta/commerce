'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';

export function WelcomeToast() {
  useEffect(() => {
    // ignore if screen height is too small
    if (window.innerHeight < 650) return;
    if (!document.cookie.includes('welcome-toast=2')) {
      toast('🛍️ Welcome to Infinity Services Providers Commerce!', {
        id: 'welcome-toast',
        duration: Infinity,
        onDismiss: () => {
          document.cookie = 'welcome-toast=2; max-age=31536000; path=/';
        },
        description: (
          <>
            This is a high-performance, Website by INFINITY SERVICES PROVIDERS.{' '}
            <a
              href="https://www.infinityservicesproviders.com/infinityservicesproviders-com"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              Get Your Own Just Order to INFINITY SERVICES PROVIDERS 
            </a>
            .
          </>
        )
      });
    }
  }, []);

  return null;
}
