# План миграции с Vite на Next.js

## Текущий стек
- **Фреймворк**: Vite + React 18
- **Роутинг**: react-router-dom v6
- **Стили**: Tailwind CSS 3.4
- **Анимации**: Framer Motion
- **Иконки**: Lucide React
- **Язык**: TypeScript

## Целевой стек
- **Фреймворк**: Next.js 14+ (App Router)
- **Стили**: Tailwind CSS (без изменений)
- **Анимации**: Framer Motion (без изменений)
- **Иконки**: Lucide React (без изменений)
- **Язык**: TypeScript

---

## Этапы миграции

### Этап 1: Инициализация проекта Next.js
- [ ] Создать новый Next.js проект с TypeScript
- [ ] Настроить Tailwind CSS
- [ ] Установить зависимости: `framer-motion`, `lucide-react`
- [ ] Перенести `tailwind.config.js` и `postcss.config.js`
- [ ] Перенести глобальные стили из `src/index.css` в `app/globals.css`

### Этап 2: Структура папок
Текущая структура → Новая структура Next.js (App Router):

```
src/                          →  app/
├── pages/                    →  app/
│   ├── HomePage.tsx          →  app/page.tsx
│   ├── AboutPage.tsx         →  app/about/page.tsx
│   ├── ServicesPage.tsx      →  app/services/page.tsx
│   ├── GeographyPage.tsx     →  app/geography/page.tsx
│   ├── HowWeWorkPage.tsx     →  app/how-we-work/page.tsx
│   ├── FAQPage.tsx           →  app/faq/page.tsx
│   ├── ContactsPage.tsx      →  app/contacts/page.tsx
│   ├── PrivacyPolicyPage.tsx →  app/privacy-policy/page.tsx
│   └── PersonalDataConsentPage.tsx → app/personal-data-consent/page.tsx
│
├── components/               →  components/
│   ├── Layout.tsx            →  app/layout.tsx (частично)
│   ├── Navigation.tsx        →  components/Navigation.tsx
│   ├── Footer.tsx            →  components/Footer.tsx
│   ├── AdvantageCard.tsx     →  components/AdvantageCard.tsx
│   ├── ContactForm.tsx       →  components/ContactForm.tsx
│   ├── FAQItem.tsx           →  components/FAQItem.tsx
│   ├── ServiceCard.tsx       →  components/ServiceCard.tsx
│   ├── TimelineStep.tsx      →  components/TimelineStep.tsx
│   └── ui/Button.tsx         →  components/ui/Button.tsx
```

### Этап 3: Миграция Layout
- [ ] Создать `app/layout.tsx` — корневой layout
- [ ] Перенести логику из `Layout.tsx` (Navigation + Footer)
- [ ] Добавить метаданные (`metadata` export)
- [ ] Настроить шрифты через `next/font`

### Этап 4: Миграция компонентов
Для каждого компонента:
- [ ] Определить, нужен ли `"use client"` директива
- [ ] Заменить `react-router-dom` Link на `next/link`
- [ ] Заменить `useNavigate()` на `useRouter()` из `next/navigation`

**Компоненты, требующие `"use client"`:**
- `Navigation.tsx` — если есть интерактивность (бургер-меню)
- `ContactForm.tsx` — формы с состоянием
- `FAQItem.tsx` — если есть анимации/состояние
- Все компоненты с Framer Motion анимациями

### Этап 5: Миграция страниц
Для каждой страницы:
- [ ] Создать папку и `page.tsx` файл
- [ ] Добавить `"use client"` если есть клиентская логика
- [ ] Экспортировать компонент как `default export`
- [ ] Добавить метаданные через `generateMetadata` или статический `metadata`

**Список страниц для миграции:**
| Страница | Путь | Примечания |
|----------|------|------------|
| HomePage | `/` | `app/page.tsx` |
| AboutPage | `/about` | `app/about/page.tsx` |
| ServicesPage | `/services` | `app/services/page.tsx` |
| GeographyPage | `/geography` | `app/geography/page.tsx` |
| HowWeWorkPage | `/how-we-work` | `app/how-we-work/page.tsx` |
| FAQPage | `/faq` | `app/faq/page.tsx` |
| ContactsPage | `/contacts` | `app/contacts/page.tsx` |
| PrivacyPolicyPage | `/privacy-policy` | `app/privacy-policy/page.tsx` |
| PersonalDataConsentPage | `/personal-data-consent` | `app/personal-data-consent/page.tsx` |

### Этап 6: Замена роутинга
**Замены в коде:**

```tsx
// БЫЛО (react-router-dom)
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

<Link to="/about">О нас</Link>
navigate('/contacts');

// СТАЛО (next.js)
import Link from 'next/link';
import { useRouter } from 'next/navigation';

<Link href="/about">О нас</Link>
router.push('/contacts');
```

### Этап 7: Оптимизация изображений
- [ ] Заменить `<img>` на `<Image>` из `next/image`
- [ ] Настроить `next.config.js` для внешних изображений (если есть)
- [ ] Добавить `width`, `height` или `fill` для всех изображений

### Этап 8: SEO и метаданные
- [ ] Добавить `metadata` export в `app/layout.tsx`
- [ ] Добавить уникальные метаданные для каждой страницы
- [ ] Создать `app/sitemap.ts` для генерации sitemap
- [ ] Создать `app/robots.ts` для robots.txt

**Пример метаданных:**
```tsx
// app/layout.tsx
export const metadata = {
  title: {
    default: 'SLGC Trans',
    template: '%s | SLGC Trans'
  },
  description: 'Транспортная компания SLGC Trans',
};

// app/about/page.tsx
export const metadata = {
  title: 'О компании',
  description: 'Информация о компании SLGC Trans',
};
```

### Этап 9: Финальная настройка
- [ ] Настроить `next.config.js`
- [ ] Обновить `.gitignore` для Next.js
- [ ] Удалить ненужные файлы (vite.config.ts, index.html и т.д.)
- [ ] Обновить скрипты в `package.json`
- [ ] Протестировать все маршруты
- [ ] Проверить работу анимаций Framer Motion

---

## Файлы для удаления после миграции
- `vite.config.ts`
- `index.html`
- `src/index.tsx`
- `src/App.tsx`
- `tsconfig.node.json`

## Файлы для создания
- `next.config.js`
- `app/layout.tsx`
- `app/globals.css`
- `app/page.tsx`
- Папки для каждой страницы в `app/`

---

## Оценка времени
| Этап | Время |
|------|-------|
| Инициализация | 30 мин |
| Структура папок | 15 мин |
| Миграция Layout | 30 мин |
| Миграция компонентов | 1-2 часа |
| Миграция страниц | 1-2 часа |
| Замена роутинга | 30 мин |
| Оптимизация изображений | 30 мин |
| SEO и метаданные | 30 мин |
| Тестирование и отладка | 1 час |
| **Итого** | **5-7 часов** |

---

## Преимущества миграции на Next.js
1. **SSR/SSG** — лучшая индексация поисковиками
2. **Автоматический роутинг** — на основе файловой системы
3. **Оптимизация изображений** — встроенный Image компонент
4. **SEO** — встроенная поддержка метаданных
5. **Производительность** — автоматическое code splitting
6. **Кэширование** — встроенное кэширование запросов
7. **Vercel** — простой деплой на Vercel

## Возможные сложности
1. Компоненты с Framer Motion должны быть клиентскими (`"use client"`)
2. Формы потребуют либо клиентский рендеринг, либо Server Actions
3. Если есть глобальное состояние — нужно будет адаптировать

