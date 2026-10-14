export interface TranslationType {
  nav: {
    whatWeBuild: string
    scope: string
    specs: string
    contact: string
    callCta: string
  }
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
    proofSpeedLabel: string
    proofSpeedVal: string
    proofDispatcherLabel: string
    proofDispatcherVal: string
    proofOwnershipLabel: string
    proofOwnershipVal: string
  }
  market: {
    eyebrow: string
    title: string
    agencyModel: string
    agencyTitle: string
    agencyDesc: string
    agencyPoints: string[]
    zonusModel: string
    zonusBadge: string
    zonusTitle: string
    zonusDesc: string
    zonusPoints: string[]
  }
  capabilities: {
    eyebrow: string
    title: string
    subtitle: string
    modules: Array<{
      tag: string
      title: string
      desc: string
    }>
  }
  deliverable: {
    eyebrow: string
    title: string
    desc: string
    requestScope: string
    checklist: string[]
  }
  timeline: {
    eyebrow: string
    title: string
    subtitle: string
    stages: Array<{
      stage: string
      days: string
      title: string
      desc: string
      milestone: string
    }>
  }
  contact: {
    eyebrow: string
    title: string
    desc: string
    directCorrespondence: string
    activeTimezones: string
    timezonesVal: string
    studioDomain: string
    successTitle: string
    successDesc: string
    resetBtn: string
    form: {
      nameLabel: string
      namePlaceholder: string
      businessLabel: string
      businessPlaceholder: string
      tradeLabel: string
      trades: Array<{ value: string; label: string }>
      serviceAreaLabel: string
      serviceAreaPlaceholder: string
      contactLabel: string
      contactPlaceholder: string
      submitBtn: string
      submittingBtn: string
      privacyNotice: string
    }
  }
  footer: {
    rights: string
  }
}

export const translations: Record<'en' | 'ru', TranslationType> = {
  // =========================================================================
  // АНГЛИЙСКАЯ ВЕРСИЯ (ORIGINAL US ENGLISH)
  // =========================================================================
  en: {
    nav: {
      whatWeBuild: 'What We Build',
      scope: 'Scope of Work',
      specs: 'Architecture & Speed',
      contact: 'Direct Contact',
      callCta: 'Book a 15-Min Scoping Call',
    },
    hero: {
      eyebrow: 'High-Ticket Trade Infrastructure',
      title: 'Web infrastructure engineered for high-ticket contractors.',
      subtitle:
        'We design and deploy high-performance websites for roofing, tree care, and specialty trade businesses across the United States. Fast loading, clear architecture, zero agency fluff.',
      primaryCta: 'Start a Project',
      secondaryCta: 'Review Technical Specs',
      proofSpeedLabel: 'Speed Benchmark',
      proofSpeedVal: 'Sub-second load speed (under 1s)',
      proofDispatcherLabel: 'Dispatcher Sync',
      proofDispatcherVal: 'Direct CRM & CallRail routing',
      proofOwnershipLabel: 'Capital Ownership',
      proofOwnershipVal: '100% owned assets (no lock-in)',
    },
    market: {
      eyebrow: 'Market Reality',
      title:
        'Most contractor websites look like generic templates from 2012. Or bloated WordPress sites that take 7 seconds to load.',
      agencyModel: 'Standard Agency Model',
      agencyTitle: 'The Illusion of Complexity',
      agencyDesc:
        'Typical web marketing agencies sell vague promises, install 40+ unvetted WordPress plugins that create security vulnerabilities, and charge recurring monthly "maintenance fees" for simply keeping the server on. When severe weather hits your market, their shared servers crash.',
      agencyPoints: [
        '6–10 second mobile load times on cellular 5G',
        'Buried phone numbers behind hamburger menus',
        'Proprietary platform lock-in (Wix / Squarespace)',
      ],
      zonusModel: 'The Zonus Standard',
      zonusBadge: 'NEXT.JS + PAYLOAD',
      zonusTitle: 'Direct Engineering Build',
      zonusDesc:
        'We treat your website as critical revenue infrastructure. You receive a clean, lightweight, bespoke digital asset built on modern TypeScript and edge networks. It renders instantly on any mobile device, inspires immediate credibility with high-net-worth homeowners, and directs inbound calls straight to your dispatcher without friction.',
      zonusPoints: [
        'Under 1-second Core Web Vitals on mobile',
        'Persistent 1-tap call routing to your office',
        '100% asset & codebase ownership transferred',
      ],
    },
    capabilities: {
      eyebrow: 'Core Capabilities',
      title: 'Engineered specifically for high-ticket trades.',
      subtitle:
        'Three functional pillars designed for businesses where a single closed client represents $5,000 to $50,000 in top-line revenue.',
      modules: [
        {
          tag: '01 / CONVERSION',
          title: 'High-Ticket Conversion Architecture',
          desc: 'Tailored for affluent homeowners hiring for $15,000+ roof replacements, $6,000+ hazardous crane tree removals, or foundation restorations. Includes structured Service Area directory pages, upfront estimate calculators, and prominent licensed & insured trust signals.',
        },
        {
          tag: '02 / PERFORMANCE',
          title: 'Speed & Mobile Execution',
          desc: 'Over 90% of home service emergencies occur on smartphones during hail storms, fallen trees, or sudden leaks. We eliminate render-blocking scripts, providing an interface that loads instantaneously on weak cellular signals and allows homeowners to snap and upload damage photos in seconds.',
        },
        {
          tag: '03 / INTEGRATION',
          title: 'Direct Operations Integration',
          desc: 'Your website directly feeds your existing operational dispatch. We wire incoming calls and quote forms straight into Jobber, ServiceTitan, Housecall Pro, or CallRail with zero manual re-entry. Leads land immediately on the estimator’s tablet or office dispatch screen.',
        },
      ],
    },
    deliverable: {
      eyebrow: 'The Deliverable',
      title: 'What you actually receive. Transparent and complete.',
      desc: 'No nebulous retainer invoices. We deliver a finished, battle-tested digital property with all documentation and source code handed over to your company.',
      requestScope: 'Request Full Project Scope',
      checklist: [
        'Custom UI/UX architecture designed specifically for your local market and primary service categories',
        'Mobile-first responsive build compiled with Next.js App Router and Tailwind CSS',
        'Service Area directory pages configured for targeted city and county search dominance',
        'High-intent estimate request funnels with direct photo/file upload for storm or roof damage',
        'Full telephony & call-tracking setup (CallRail whisper messages, dynamic number insertion)',
        'Direct CRM dispatch sync (Jobber, ServiceTitan, Housecall Pro, or webhook automation)',
        'Google Analytics 4, Tag Manager, and Conversion API event tracking configured',
        'DNS records management, SSL certification, and global edge CDN deployment on Railway / Vercel',
        '100% legal code and database ownership transferred with full administrative credentials',
      ],
    },
    timeline: {
      eyebrow: 'Execution Timeline',
      title: '20-day structured deployment. No endless revisions.',
      subtitle:
        'A linear 4-stage process with clear sign-offs so your internal team spends less than 3 total hours on calls.',
      stages: [
        {
          stage: 'Stage 01',
          days: 'Day 1–3',
          title: 'Audit & Discovery',
          desc: 'Deep teardown of your current traffic, highest-margin service categories, service territories, and primary local competitors.',
          milestone: 'Verified Milestone',
        },
        {
          stage: 'Stage 02',
          days: 'Day 4–8',
          title: 'Architecture & Copy',
          desc: 'Structuring the user conversion paths and writing direct, high-credibility copy aimed at US homeowners with substantial home equity.',
          milestone: 'Verified Milestone',
        },
        {
          stage: 'Stage 03',
          days: 'Day 9–16',
          title: 'Interface & Build',
          desc: 'Pixel-perfect responsive coding, edge speed benchmarking, CRM webhook wiring, and mobile click-to-call verification.',
          milestone: 'Verified Milestone',
        },
        {
          stage: 'Stage 04',
          days: 'Day 17–20',
          title: 'QA & Live Deployment',
          desc: 'Stress testing forms, Google Tag Manager event verification, DNS cutover, and full administrative credential transfer.',
          milestone: 'Verified Milestone',
        },
      ],
    },
    contact: {
      eyebrow: 'Direct Inquiry',
      title: 'Direct communication. No account managers.',
      desc: 'Tell us what trade you operate, your primary service area, and your current bottleneck. We review your request and reply within 24 hours with an honest scope assessment.',
      directCorrespondence: 'Direct Correspondence',
      activeTimezones: 'Active Timezones',
      timezonesVal: 'EST · CST · PST (Continental United States)',
      studioDomain: 'Studio Domain',
      successTitle: 'Inquiry Received',
      successDesc:
        'Thank you. We have logged your details. A senior engineer will examine your territory and reply within 24 business hours.',
      resetBtn: 'Submit another inquiry',
      form: {
        nameLabel: 'Your Full Name *',
        namePlaceholder: 'John Miller',
        businessLabel: 'Company & Current Website *',
        businessPlaceholder: 'Miller Roofing LLC (or none)',
        tradeLabel: 'Primary Trade / Niche *',
        trades: [
          { value: 'roofing', label: 'Roofing & Storm Restoration' },
          { value: 'tree-service', label: 'Tree Care & Emergency Removal' },
          { value: 'concrete', label: 'Concrete, Foundations & Flatwork' },
          { value: 'landscaping', label: 'High-End Landscaping & Hardscapes' },
          { value: 'restoration', label: 'Water & Fire Disaster Restoration' },
          { value: 'other', label: 'Other High-Ticket Specialty Trade' },
        ],
        serviceAreaLabel: 'Target Service Area / Counties *',
        serviceAreaPlaceholder: 'e.g. Greater Dallas-Fort Worth, TX',
        contactLabel: 'Direct Phone or Email *',
        contactPlaceholder: 'john@millerroofing.com or (214) 555-0199',
        submitBtn: 'Submit Inquiry for Scope Assessment',
        submittingBtn: 'Transmitting...',
        privacyNotice:
          'Strict confidentiality guaranteed. We never sell contractor information or run spam sequences.',
      },
    },
    footer: {
      rights: 'All rights reserved. Built for performance.',
    },
  },

  // =========================================================================
  // РУССКАЯ ВЕРСИЯ (ДЛЯ ПРАВОК И РАБОТЫ)
  // =========================================================================
  ru: {
    nav: {
      whatWeBuild: 'Что мы создаем',
      scope: 'Объем работ',
      specs: 'Архитектура и скорость',
      contact: 'Прямой контакт',
      callCta: 'Обсудить проект (15 мин)',
    },
    hero: {
      eyebrow: 'Инфраструктура для высокочековых услуг',
      title: 'Веб-инфраструктура для американских подрядчиков и сервисных компаний.',
      subtitle:
        'Проектируем и запускаем скоростные сайты для кровельных компаний (Roofing), специалистов по деревьям (Tree Services) и сложных сервисных ниш по всей территории США. Мгновенная загрузка, четкая архитектура, ноль агентской воды.',
      primaryCta: 'Начать проект',
      secondaryCta: 'Технические спецификации',
      proofSpeedLabel: 'Стандарт скорости',
      proofSpeedVal: 'Загрузка быстрее 1 секунды (<1s)',
      proofDispatcherLabel: 'Связка с диспетчером',
      proofDispatcherVal: 'Прямая интеграция с CRM и CallRail',
      proofOwnershipLabel: 'Владение активами',
      proofOwnershipVal: '100% код и база в вашей собственности',
    },
    market: {
      eyebrow: 'Реальность рынка',
      title:
        'Большинство сайтов подрядчиков выглядят как шаблоны 2012 года. Или как раздутые сайты на WordPress, которые грузятся по 7 секунд.',
      agencyModel: 'Стандартная агентская модель',
      agencyTitle: 'Иллюзия сложности',
      agencyDesc:
        'Типичные маркетинговые агентства продают абстрактные обещания, ставят 40+ сомнительных плагинов для WordPress, создающих дыры в безопасности, и выставляют ежемесячные счета за «обслуживание» просто за то, чтобы сервер не выключался. А когда в городе случается ураган и домовладельцы массово ищут ремонт — их медленные хостинги зависают.',
      agencyPoints: [
        'Загрузка 6–10 секунд на мобильном интернете 5G',
        'Телефоны спрятаны глубоко в выпадающих меню',
        'Привязка к закрытым конструкторам (Wix / Squarespace)',
      ],
      zonusModel: 'Стандарт Zonus',
      zonusBadge: 'NEXT.JS + PAYLOAD',
      zonusTitle: 'Прямая инженерная сборка',
      zonusDesc:
        'Мы относимся к сайту как к ключевой инфраструктуре генерации выручки. Вы получаете чистый, сверхбыстрый и индивидуальный цифровой актив на базе современного TypeScript и edge-сетей. Он мгновенно открывается на любом смартфоне, вызывает доверие у состоятельных домовладельцев и направляет входящие звонки прямо вашему диспетчеру без потерь.',
      zonusPoints: [
        'Идеальные Core Web Vitals на мобильных (<1 сек)',
        'Сквозной звонок в офис в один клик с любого экрана',
        'Полная передача всех исходников и базы данных',
      ],
    },
    capabilities: {
      eyebrow: 'Ключевые возможности',
      title: 'Спроектировано специально для услуг с высоким средним чеком.',
      subtitle:
        'Три функциональных модуля для бизнесов, где один закрытый контракт приносит от $5,000 до $50,000 выручки.',
      modules: [
        {
          tag: '01 / КОНВЕРСИЯ',
          title: 'Архитектура конверсии с высокого чека',
          desc: 'Адаптировано под состоятельных владельцев домов, заказывающих замену кровли за $15,000+, удаление аварийных деревьев автокраном за $6,000+ или ремонт фундамента. Включает посадочные страницы под конкретные города и округа (Service Areas), форму расчета предварительной сметы и акцент на лицензии и страховку.',
        },
        {
          tag: '02 / СКОРОСТЬ',
          title: 'Скорость и мобильный фокус',
          desc: 'Более 90% экстренных заявок в сервисных нишах происходят со смартфонов — во время града, урагана, падения деревьев или протечек. Мы исключили тяжелые скрипты: сайт мгновенно открывается даже при слабом сигнале и позволяет клиенту за 10 секунд сфотографировать и прикрепить фото повреждений.',
        },
        {
          tag: '03 / ИНТЕГРАЦИЯ',
          title: 'Прямая интеграция в операционку',
          desc: 'Сайт напрямую связывается с вашей диспетчерской службой. Мы подключаем входящие звонки и заявки напрямую в Jobber, ServiceTitan, Housecall Pro или CallRail без ручного копирования. Лид моментально падает на планшет замерщика или на экран диспетчера.',
        },
      ],
    },
    deliverable: {
      eyebrow: 'Результат работы',
      title: 'Что конкретно вы получаете. Прозрачно и под ключ.',
      desc: 'Никаких размытых ежемесячных подписок. Мы сдаем готовый, протестированный цифровой актив со всей документацией и исходным кодом, который полностью переходит в собственность вашей компании.',
      requestScope: 'Запросить подробную смету проекта',
      checklist: [
        'Индивидуальный UI/UX дизайн, разработанный под ваш локальный рынок и маржинальные услуги',
        'Мобильная адаптивная сборка на Next.js App Router и Tailwind CSS',
        'Структурированные страницы зон обслуживания (Service Areas) под целевые города и округа',
        'Воронки захвата лидов с прямой загрузкой фото повреждений кровли, деревьев или объектов',
        'Настройка телефонии и коллтрекинга (CallRail whisper-сообщения, динамическая подмена номеров)',
        'Прямая синхронизация с CRM диспетчера (Jobber, ServiceTitan, Housecall Pro или webhooks)',
        'Настройка аналитики: Google Analytics 4, Tag Manager и Conversion API',
        'Настройка DNS, SSL-сертификатов и глобальное развертывание на CDN (Railway / Vercel)',
        '100% юридическая передача прав на код и базу данных со всеми административными доступами',
      ],
    },
    timeline: {
      eyebrow: 'Сроки реализации',
      title: 'Четкий запуск за 20 дней. Без бесконечных правок.',
      subtitle:
        'Линейный процесс из 4 этапов с четкой приемкой каждого шага. Ваша команда потратит менее 3 часов на звонки за весь проект.',
      stages: [
        {
          stage: 'Этап 01',
          days: 'Дни 1–3',
          title: 'Аудит и исследование',
          desc: 'Детальный разбор текущего трафика, самых маржинальных услуг, зон обслуживания и прямых местных конкурентов.',
          milestone: 'Фиксированный этап',
        },
        {
          stage: 'Этап 02',
          days: 'Дни 4–8',
          title: 'Архитектура и копирайтинг',
          desc: 'Проектирование путей клиента и написание прямого, убедительного текста для американских домовладельцев с высоким доходом.',
          milestone: 'Фиксированный этап',
        },
        {
          stage: 'Этап 03',
          days: 'Дни 9–16',
          title: 'Интерфейс и разработка',
          desc: 'Идеальная верстка, тестирование скорости на edge-серверах, интеграция вебхуков CRM и проверка звонков с мобильных устройств.',
          milestone: 'Фиксированный этап',
        },
        {
          stage: 'Этап 04',
          days: 'Дни 17–20',
          title: 'Тестирование и релиз',
          desc: 'Стресс-тест форм, проверка событий Google Tag Manager, переключение DNS на основной домен и передача всех доступов.',
          milestone: 'Фиксированный этап',
        },
      ],
    },
    contact: {
      eyebrow: 'Прямой контакт',
      title: 'Прямая связь с инженерами. Без аккаунт-менеджеров.',
      desc: 'Напишите, в какой сфере вы работаете, вашу основную территорию обслуживания и текущее узкое место. Мы изучим задачу и ответим в течение 24 часов с честной оценкой объема и сроков.',
      directCorrespondence: 'Прямая почта',
      activeTimezones: 'Рабочие часовые пояса',
      timezonesVal: 'EST · CST · PST (Континентальные США)',
      studioDomain: 'Домен студии',
      successTitle: 'Заявка принята',
      successDesc:
        'Спасибо! Мы зафиксировали ваши данные. Ведущий специалист изучит информацию по вашему региону и свяжется с вами в течение 24 рабочих часов.',
      resetBtn: 'Отправить еще одну заявку',
      form: {
        nameLabel: 'Ваше имя *',
        namePlaceholder: 'Иван / John Miller',
        businessLabel: 'Компания и текущий сайт *',
        businessPlaceholder: 'Miller Roofing LLC (или пока нет)',
        tradeLabel: 'Основная сфера / Ниша *',
        trades: [
          { value: 'roofing', label: 'Кровельные работы и ремонт после стихии (Roofing)' },
          { value: 'tree-service', label: 'Уход за деревьями и спил краном (Tree Service)' },
          { value: 'concrete', label: 'Бетон, фундаменты и плиты (Concrete & Foundations)' },
          { value: 'landscaping', label: 'Премиальный ландшафт и хардскейп (Landscaping)' },
          { value: 'restoration', label: 'Устранение последствий затоплений и пожаров (Restoration)' },
          { value: 'other', label: 'Другие высокочековые подрядные услуги (Specialty Trade)' },
        ],
        serviceAreaLabel: 'Зона обслуживания / Округа *',
        serviceAreaPlaceholder: 'например, Greater Dallas-Fort Worth, TX или Miami Metro',
        contactLabel: 'Телефон или Email для связи *',
        contactPlaceholder: 'john@millerroofing.com или +1 (214) 555-0199',
        submitBtn: 'Отправить заявку на оценку проекта',
        submittingBtn: 'Отправка...',
        privacyNotice:
          'Строгая конфиденциальность гарантирована. Мы никогда не передаем данные третьим лицам и не рассылаем спам.',
      },
    },
    footer: {
      rights: 'Все права защищены. Создано для максимальной производительности.',
    },
  },
}
