'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from '@/lib/translations';
import { ChangeEvent, useTransition } from 'react';

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const locale = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.push(`/${nextLocale}`);
    });
  };

  return (
    <label className='border border-brand-gold/20 rounded bg-brand-white/10'>
      <p className='sr-only'>change language</p>
      <select
        defaultValue={locale}
        className='bg-transparent text-brand-white py-2 px-3 text-sm font-light tracking-wide uppercase focus:outline-none cursor-pointer'
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value='en' className='text-brand-black'>EN</option>
        <option value='id' className='text-brand-black'>ID</option>
      </select>
    </label>
  );
} 