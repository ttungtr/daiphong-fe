'use client';

import { ReactNode, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';

interface I18nProviderProps {
  children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  // Ensure i18n is initialized on the client
  useEffect(() => {
    // no-op, just to make sure this runs on client
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

export default I18nProvider;

