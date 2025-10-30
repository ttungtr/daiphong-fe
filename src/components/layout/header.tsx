'use client';
import Link from 'next/link';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import ImageWithFallback from '../common/ImageWithFallback';
import { MobileNavigationWrapper } from './mobile-navigation-wrapper';
import { Navigation } from './navigation';
import { SEONav } from './seo-nav';
import SearchBar from '../common/SearchBar';
import { useRouter } from 'next/navigation';
import { Phone, Search } from 'lucide-react';
import { CATEGORY_SLUG_MAP, PRODUCTS, Product } from '@/data/products';

export const Header: FunctionComponent = () => {
  const [lang, setLang] = useState<'vi' | 'en'>('vi');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const router = useRouter();
  const searchWrapperRef = useRef<HTMLDivElement | null>(null);
  const filteredResults = keyword
    ? PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(keyword.trim().toLowerCase())
      ).slice(0, 8)
    : [];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        isSearchOpen &&
        searchWrapperRef.current &&
        !searchWrapperRef.current.contains(e.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSearchOpen]);

  const handleSearchSubmit = () => {
    setIsSearchOpen(false);
    const q = keyword.trim();
    if (q) {
      router.push(`/san-pham?q=${encodeURIComponent(q)}`);
    } else {
      router.push('/san-pham');
    }
  };

  const highlight = (text: string, q: string) => {
    const idx = text.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1 || !q) return text;
    const before = text.slice(0, idx);
    const match = text.slice(idx, idx + q.length);
    const after = text.slice(idx + q.length);
    return (
      <>
        {before}
        <span className="font-semibold">{match}</span>
        {after}
      </>
    );
  };

  const goToProduct = (product: Product) => {
    const categorySlug = CATEGORY_SLUG_MAP[product.category] ?? 'tat-ca';
    router.push(`/san-pham/${categorySlug}/${product.slug}`);
    setIsSearchOpen(false);
  };
  return (
    <>
      <SEONav />

      <header className="sticky top-0 z-50 w-full backdrop-blur shadow-sm bg-primary-blue-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-20 px-4 xl:px-0 ">
            <Link href="/" className="shrink-0 group">
              <div className="relative">
                <ImageWithFallback
                  src="/images/logo/horizontal-logo.png"
                  alt="Nhà sản xuất ống thông gió Logo"
                  width={220}
                  height={100}
                  className="max-w-48 h-auto transition-all duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>

            <Navigation />

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-3">
                <div className="relative" ref={searchWrapperRef}>
                  <button
                    type="button"
                    aria-label="Tìm kiếm sản phẩm"
                    onClick={() => setIsSearchOpen((v) => !v)}
                    className="flex items-center justify-center rounded-md bg-white/90 text-slate-700 hover:bg-white transition-colors shadow-sm h-10 w-10"
                  >
                    <Search />
                  </button>

                  {isSearchOpen && (
                    <div className="absolute right-0 mt-3 w-[560px] max-w-[90vw] rounded-md bg-white p-4 shadow-2xl">
                      <div className="flex items-stretch gap-0 overflow-hidden rounded-md border border-slate-200 shadow-sm">
                        <div className="flex-1">
                          <SearchBar
                            value={keyword}
                            onChange={setKeyword}
                            onSubmit={handleSearchSubmit}
                            placeholder="Tìm kiếm..."
                            className="focus-within:ring-none focus-within:ring-0"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={handleSearchSubmit}
                          className="flex items-center justify-center bg-primary-blue-1 px-4 text-white hover:bg-primary-blue-1/90"
                          aria-label="Thực hiện tìm kiếm"
                        >
                          <Search />
                        </button>
                      </div>

                      {keyword && (
                        <div className="mt-3 max-h-[60vh] overflow-auto divide-y divide-slate-100">
                          {filteredResults.length === 0 ? (
                            <div className="py-6 text-center text-slate-500 text-sm">
                              Không tìm thấy sản phẩm phù hợp
                            </div>
                          ) : (
                            filteredResults.map((p) => (
                              <button
                                key={p.id}
                                onClick={() => goToProduct(p)}
                                className="flex w-full items-center gap-4 py-3 hover:bg-slate-50 text-left"
                              >
                                <span className="h-12 w-12 shrink-0 inline-flex items-center justify-center">
                                  <ImageWithFallback
                                    src={p.image}
                                    alt={p.name}
                                    width={48}
                                    height={48}
                                    className="h-12 w-12 object-contain"
                                  />
                                </span>
                                <div className="flex-1 text-slate-800">
                                  <div className="text-base">
                                    {highlight(p.name, keyword)}
                                  </div>
                                  <div className="text-xs text-slate-500">
                                    {p.category}
                                  </div>
                                </div>
                              </button>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="inline-flex items-center overflow-hidden rounded-md border border-white/30">
                  <button
                    type="button"
                    onClick={() => setLang('vi')}
                    className={`h-10 px-3 text-sm transition-colors ${
                      lang === 'vi'
                        ? 'bg-white text-slate-800'
                        : 'bg-transparent text-white/90 hover:bg-white/10'
                    }`}
                    aria-pressed={lang === 'vi'}
                    aria-label="Chuyển tiếng Việt"
                  >
                    🇻🇳
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang('en')}
                    className={`h-10 px-3 text-sm transition-colors ${
                      lang === 'en'
                        ? 'bg-white text-slate-800'
                        : 'bg-transparent text-white/90 hover:bg-white/10'
                    }`}
                    aria-pressed={lang === 'en'}
                    aria-label="Switch to English"
                  >
                    🇺🇸
                  </button>
                </div>

                <a
                  href="tel:+84982400400"
                  className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-primary-blue-1 font-medium shadow-sm hover:bg-white/70 transition-colors"
                >
                  <Phone />
                  Gọi ngay
                </a>
              </div>

              <MobileNavigationWrapper />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
