'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from '@/lib/translations';
import { ChangeEvent, useTransition } from 'react';

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      const segments = pathname.split('/');
      segments[1] = nextLocale;
      router.push(segments.join('/') || `/${nextLocale}`);
    });
  };

  return (
    <label className='border border-brand-gold/20 rounded bg-brand-white/10'>
      <span className='sr-only'>{locale === 'id' ? 'Ganti bahasa' : 'Change language'}</span>
      <select
        value={locale}
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
