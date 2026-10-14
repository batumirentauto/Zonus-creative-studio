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
      scope: 'Zero Homework Scope',
      specs: '48-Hour Process',
      contact: 'Direct Contact',
      callCta: 'Request 48-Hour Preview ($0 Down)',
    },
    hero: {
      eyebrow: '48-Hour Rapid Delivery · Zero Upfront Deposit · Zero Homework',
      title: 'High-ticket contractor websites engineered in 48 hours. Zero upfront deposit.',
      subtitle:
        'We design and deploy high-converting websites for roofing, tree care, and specialty trade businesses across the United States. No tedious 30-page briefs, no homework for you. We build your live website first; you pay only after you review and approve it.',
      primaryCta: 'Get Your Live Preview ($0 Down)',
      secondaryCta: 'How It Works',
      proofSpeedLabel: 'Rapid Delivery',
      proofSpeedVal: 'Live staging site in 48 hours',
      proofDispatcherLabel: 'Zero Homework',
      proofDispatcherVal: 'No briefs or copy needed from you',
      proofOwnershipLabel: 'Risk Reversal',
      proofOwnershipVal: 'Pay after review & approval ($0 down)',
    },
    market: {
      eyebrow: 'The Broken Agency Model',
      title:
        'Most agencies waste 6 weeks asking you to write your own copy. We build a live working site in 48 hours.',
      agencyModel: 'Traditional Agency Trap',
      agencyTitle: 'Endless Meetings & Your Own Homework',
      agencyDesc:
        'Traditional agencies demand $3,000–$10,000 upfront, hand you 30-page questionnaires, force you to write your own copy, and take 6 to 8 weeks to deliver a bloated WordPress template with slow plugins. You end up doing half their work while paying full price.',
      agencyPoints: [
        'Requires 10+ hours of your valuable time filling briefs',
        '6–8 weeks turnaround while you lose local leads',
        'Non-refundable upfront deposits with zero performance guarantee',
      ],
      zonusModel: 'The Zonus Standard',
      zonusBadge: 'ZERO RISK · 48 HOURS',
      zonusTitle: 'We Do All The Work. You Pay Only Upon Approval.',
      zonusDesc:
        'We respect your time. You spend 5 minutes giving us your trade, target counties, and direct phone number. Our team autonomously researches your local territory, crafts high-converting direct copy, and builds a custom high-performance asset in 48 hours. You review the real working site before spending a single dollar.',
      zonusPoints: [
        'Live functional preview delivered in 48 hours',
        'Zero copywriting or technical homework required from you',
        'Pay $0 upfront — full payment only after final approval',
      ],
    },
    capabilities: {
      eyebrow: 'Engineered For High Tickets',
      title: 'Tailored for contractors where every job counts.',
      subtitle:
        'Three functional pillars designed for businesses where a single closed client represents $5,000 to $50,000 in top-line revenue.',
      modules: [
        {
          tag: '01 / CONVERSION',
          title: 'High-Ticket Conversion Architecture',
          desc: 'Tailored for affluent homeowners hiring for $15,000+ roof replacements, $6,000+ hazardous crane tree removals, or foundation restorations. Includes structured Service Area directory pages, upfront estimate calculators, and prominent licensed & insured trust signals.',
        },
        {
          tag: '02 / SPEED',
          title: 'Sub-Second Speed & Mobile Focus',
          desc: 'Over 90% of emergency trade searches occur on mobile during severe weather, fallen trees, or sudden leaks. We eliminate render-blocking scripts, providing an interface that loads instantaneously on weak cellular signals and allows homeowners to snap and upload damage photos in seconds.',
        },
        {
          tag: '03 / DISPATCH',
          title: 'Direct Operations Integration',
          desc: 'Your website directly feeds your existing operational dispatch. We wire incoming calls and quote forms straight into Jobber, ServiceTitan, Housecall Pro, or CallRail with zero manual re-entry. Leads land immediately on the estimator’s tablet or office dispatch screen.',
        },
      ],
    },
    deliverable: {
      eyebrow: 'Transparent Scope',
      title: 'Everything handled end-to-end. Zero effort required from you.',
      desc: 'You never have to write copy, find stock photos, or configure DNS servers. We deliver a complete, battle-tested digital property with all documentation and source code handed over upon approval.',
      requestScope: 'Request 48-Hour Preview',
      checklist: [
        'Complete turnkey build with zero client copywriting or homework required',
        'Custom UI/UX architecture designed specifically for your local market and primary service categories',
        'Mobile-first responsive build compiled with Next.js App Router and Tailwind CSS',
        'Service Area directory pages configured for targeted city and county search dominance',
        'High-intent estimate request funnels with direct photo/file upload for storm or roof damage',
        'Full telephony & call-tracking setup (CallRail whisper messages, dynamic number insertion)',
        'Direct CRM dispatch sync (Jobber, ServiceTitan, Housecall Pro, or webhook automation)',
        'DNS configuration, SSL certificate generation, and global edge CDN deployment',
        '100% legal code and asset ownership transferred with full administrative credentials',
      ],
    },
    timeline: {
      eyebrow: '48-Hour Rapid Workflow',
      title: 'From intake to live preview in 48 hours.',
      subtitle:
        'A friction-free process designed for busy contractors. Less than 10 total minutes of your time required.',
      stages: [
        {
          stage: 'Hour 0–2',
          days: 'Step 01',
          title: '5-Minute Intake',
          desc: 'You provide basic details: your primary trade, target counties, and contact numbers. No 30-page briefs or complicated spreadsheets.',
          milestone: 'Zero Homework',
        },
        {
          stage: 'Hour 2–24',
          days: 'Step 02',
          title: 'Autonomous Research & Copy',
          desc: 'We independently analyze your local competitors, map high-margin services, and write high-converting copy for affluent US homeowners.',
          milestone: 'Turnkey Execution',
        },
        {
          stage: 'Hour 24–40',
          days: 'Step 03',
          title: 'High-Speed Engineering Build',
          desc: 'We compile your bespoke Next.js site, optimize sub-second mobile loading, wire CRM forms, and test click-to-call routing.',
          milestone: 'Production Quality',
        },
        {
          stage: 'Hour 40–48',
          days: 'Step 04',
          title: 'Live Staging Review & Payment',
          desc: 'You review the live, working site on your phone. Only when you are 100% satisfied do you pay and we connect your live domain.',
          milestone: 'Pay Upon Approval',
        },
      ],
    },
    contact: {
      eyebrow: 'Zero Risk Project Request',
      title: 'Get your live working website in 48 hours. $0 down.',
      desc: 'Tell us what trade you operate, your primary service area, and where to send the preview. We build the site first; you review it live before paying anything.',
      directCorrespondence: 'Direct Correspondence',
      activeTimezones: 'Active Timezones',
      timezonesVal: 'EST · CST · PST (Continental United States)',
      studioDomain: 'Studio Domain',
      successTitle: 'Project Request Received',
      successDesc:
        'Thank you. We have logged your details. We are already preparing your territory research and will send your private 48-hour live preview link shortly.',
      resetBtn: 'Submit another request',
      form: {
        nameLabel: 'Your Full Name *',
        namePlaceholder: 'John Miller',
        businessLabel: 'Company Name & Current Website *',
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
        serviceAreaLabel: 'Target Counties & Cities *',
        serviceAreaPlaceholder: 'e.g. Greater Dallas-Fort Worth, TX',
        contactLabel: 'Direct Phone or Email (Where to send preview) *',
        contactPlaceholder: 'john@millerroofing.com or (214) 555-0199',
        submitBtn: 'Build My Website First ($0 Upfront)',
        submittingBtn: 'Transmitting...',
        privacyNotice:
          '100% Risk-Free Guarantee: You pay nothing until you review and approve your live working website.',
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
      scope: 'Без рутины для вас',
      specs: 'Запуск за 48 часов',
      contact: 'Прямой контакт',
      callCta: 'Заказать сайт ($0 предоплаты)',
    },
    hero: {
      eyebrow: 'Запуск за 48 часов · Без предоплаты · Без сложных ТЗ',
      title: 'Веб-инфраструктура для американских подрядчиков за 48 часов. Сначала сайт — оплата потом.',
      subtitle:
        'Создаем скоростные сайты для кровельщиков (Roofing), специалистов по деревьям (Tree Care) и сложных сервисных ниш в США. Никаких длинных ТЗ и опросников — мы делаем всю работу сами. Сначала мы полностью собираем сайт, вы проверяете его в работе, и только потом оплачиваете.',
      primaryCta: 'Получить готовый сайт ($0 аванса)',
      secondaryCta: 'Как мы работаем',
      proofSpeedLabel: 'Срок реализации',
      proofSpeedVal: 'Рабочий сайт за 48 часов',
      proofDispatcherLabel: 'Ноль рутины для вас',
      proofDispatcherVal: 'Без ТЗ и текстов — всё пишем сами',
      proofOwnershipLabel: 'Оплата по факту',
      proofOwnershipVal: 'Оплата только после вашего одобрения',
    },
    market: {
      eyebrow: 'Проблема рынка',
      title:
        'Обычные агентства мучают вас 6 недель и заставляют самих писать тексты. Мы сдаем рабочий сайт за 48 часов.',
      agencyModel: 'Типичный агентский подход',
      agencyTitle: 'Бесконечные созвоны и домашние задания для клиента',
      agencyDesc:
        'Традиционные агентства требуют от $3,000 до $10,000 предоплаты, заваливают вас 30-страничными опросниками, заставляют писать тексты про свои услуги и тянут проект по 2 месяца, выдавая в итоге медленный шаблон на WordPress. В итоге вы делаете за них половину работы и еще платите за это.',
      agencyPoints: [
        'Требуют от вас часы времени на заполнение анкет и брифов',
        'Затягивают запуск на 6–8 недель, пока вы теряете звонки',
        'Берут невозвратный аванс без каких-либо гарантий результата',
      ],
      zonusModel: 'Подход Zonus Creative Studio',
      zonusBadge: 'БЕЗ РИСКА · 48 ЧАСОВ',
      zonusTitle: 'Вся работа на нас. Оплата только после готовности.',
      zonusDesc:
        'Мы ценим ваше время. От вас нужно всего 5 минут: назвать нишу, основные города и телефон для звонков. Мы сами анализируем ваш округ, конкурентов, пишем убедительные тексты для американских домовладельцев и собираем сайт за 48 часов. Вы смотрите готовый результат со своего смартфона, и только если всё нравится — оплачиваете.',
      zonusPoints: [
        'Рабочая демо-версия сайта готова через 48 часов',
        'Никаких ТЗ, опросников и написания текстов с вашей стороны',
        '$0 предоплаты — платите только тогда, когда сайт полностью утвержден',
      ],
    },
    capabilities: {
      eyebrow: 'Фокус на высокий чек',
      title: 'Спроектировано специально для услуг с чеком от $5,000.',
      subtitle:
        'Три функциональных модуля для бизнесов, где один закрытый контракт приносит от $5,000 до $50,000 выручки.',
      modules: [
        {
          tag: '01 / КОНВЕРСИЯ',
          title: 'Архитектура конверсии с высокого чека',
          desc: 'Адаптировано под состоятельных владельцев домов, заказывающих замену кровли за $15,000+, удаление опасных деревьев автокраном за $6,000+ или ремонт фундамента. Включает посадочные страницы под конкретные города и округа (Service Areas), форму расчета предварительной сметы и акцент на лицензии и страховку.',
        },
        {
          tag: '02 / СКОРОСТЬ',
          title: 'Скорость до 1 секунды и мобильный фокус',
          desc: 'Более 90% экстренных заявок происходят со смартфонов — во время града, урагана, падения деревьев или протечек. Мы исключили тяжелые скрипты: сайт мгновенно открывается даже при слабом 4G/5G и позволяет клиенту за 10 секунд сфотографировать и прикрепить фото повреждений.',
        },
        {
          tag: '03 / ДИСПЕТЧЕР',
          title: 'Прямая интеграция в операционку',
          desc: 'Сайт напрямую связывается с вашей диспетчерской службой. Мы подключаем входящие звонки и заявки напрямую в Jobber, ServiceTitan, Housecall Pro или CallRail без ручного копирования. Лид моментально падает на планшет замерщика или на экран диспетчера.',
        },
      ],
    },
    deliverable: {
      eyebrow: 'Прозрачный объем работ',
      title: 'Все «под ключ». От вас не требуется никаких усилий.',
      desc: 'Вам не нужно писать тексты, искать фотографии или разбираться в хостингах. Мы сдаем готовый, протестированный цифровой актив со всей документацией и исходным кодом, который полностью переходит в вашу собственность после оплаты.',
      requestScope: 'Заказать сайт за 48 часов ($0 аванса)',
      checklist: [
        'Полная сборка под ключ без необходимости для вас писать тексты или ТЗ',
        'Индивидуальный UI/UX дизайн, разработанный под ваш локальный рынок и маржинальные услуги',
        'Мобильная адаптивная сборка на Next.js App Router и Tailwind CSS со скоростью до 1 сек',
        'Структурированные страницы зон обслуживания (Service Areas) под целевые города и округа',
        'Воронки захвата лидов с прямой загрузкой фото повреждений кровли, деревьев или объектов',
        'Настройка телефонии и коллтрекинга (CallRail whisper-сообщения, динамическая подмена номеров)',
        'Прямая синхронизация с CRM диспетчера (Jobber, ServiceTitan, Housecall Pro или webhooks)',
        'Настройка DNS, SSL-сертификатов и глобальное развертывание на CDN (Railway / Vercel)',
        '100% юридическая передача прав на код и базу данных со всеми административными доступами',
      ],
    },
    timeline: {
      eyebrow: 'Процесс запуска за 48 часов',
      title: 'От первого контакта до готового сайта за 48 часов.',
      subtitle:
        'Процесс без трения, созданный специально для занятых предпринимателей. Всего 10 минут вашего времени на весь проект.',
      stages: [
        {
          stage: 'Час 0–2',
          days: 'Шаг 01',
          title: '5 минут на вводные',
          desc: 'Вы сообщаете базовые данные: вашу сферу, основные города обслуживания и номер для звонков. Никаких анкет, брифов и таблиц.',
          milestone: 'Без домашних заданий',
        },
        {
          stage: 'Час 2–24',
          days: 'Шаг 02',
          title: 'Автономное исследование и тексты',
          desc: 'Мы сами изучаем конкурентов в вашем округе, психологию американских домовладельцев и пишем продающий текст под высокий чек.',
          milestone: 'Полная автономность',
        },
        {
          stage: 'Час 24–40',
          days: 'Шаг 03',
          title: 'Чистая инженерная сборка',
          desc: 'Собираем индивидуальный сайт на Next.js со скоростью загрузки <1с на смартфонах, кнопками прямого звонка и формой отправки фото повреждений.',
          milestone: 'Высочайшее качество',
        },
        {
          stage: 'Час 40–48',
          days: 'Шаг 04',
          title: 'Проверка живого сайта и оплата',
          desc: 'Вы лично тестируете готовый сайт со смартфона. Когда всё на 100% утверждено — вы оплачиваете, и мы привязываем ваш основной домен.',
          milestone: 'Оплата по факту ($0 аванса)',
        },
      ],
    },
    contact: {
      eyebrow: 'Заказ сайта без риска',
      title: 'Получите готовый рабочий сайт через 48 часов. $0 предоплаты.',
      desc: 'Напишите, в какой сфере вы работаете, вашу основную территорию и куда прислать ссылку на предпросмотр. Мы сначала сделаем сайт, и только если он вам понравится — вы его оплатите.',
      directCorrespondence: 'Прямая почта',
      activeTimezones: 'Рабочие часовые пояса',
      timezonesVal: 'EST · CST · PST (Континентальные США)',
      studioDomain: 'Домен студии',
      successTitle: 'Заявка принята',
      successDesc:
        'Спасибо! Мы уже начали анализ вашего региона. В течение 48 часов мы пришлем вам прямую ссылку на полностью рабочий сайт для проверки.',
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
        serviceAreaLabel: 'Зона обслуживания / Округа и города *',
        serviceAreaPlaceholder: 'например, Dallas-Fort Worth, TX или Miami Metro',
        contactLabel: 'Телефон или Email (куда прислать ссылку на сайт) *',
        contactPlaceholder: 'john@millerroofing.com или +1 (214) 555-0199',
        submitBtn: 'Сделайте мне сайт ($0 предоплаты)',
        submittingBtn: 'Отправка заявки...',
        privacyNotice:
          '100% гарантия без риска: вы платите только после того, как лично проверите и одобрите готовый сайт.',
      },
    },
    footer: {
      rights: 'Все права защищены. Создано для максимальной производительности.',
    },
  },
}
