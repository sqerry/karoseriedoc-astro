export const languages = {
  cs: 'Čeština',
  de: 'Deutsch',
} as const;

export const defaultLang = 'cs' as const;

export type Lang = keyof typeof languages;

export const ui = {
  cs: {
    // Global
    'global.email': 'karoseriedoc@gmail.com',

    // URLs
    'urls.opravy-vozidel-kroupy': 'opravy-vozidel-po-kroupach-bez-poskozeni-laku',
    'urls.opravy-deformaci-pdr': 'opravy-deformaci-bez-lakovani-metodou-pdr',
    'urls.ochrane-nastriky': 'ochranne-nastriky-dutin-a-podvozku',
    'urls.klempirnicka-lakyrnicka': 'drobne-klempirske-a-lakyrnicke-prace',
    'urls.vyvarovani': 'vyvarovani-a-karosarske-opravy',
    'urls.udrzba-klimatizace': 'udrzba-a-opravy-klimatizaci',
    'urls.pneuservis': 'pneuservis',
    'urls.cisteni-a-myti': 'cisteni-a-myti-vozidel',
    'urls.bezna-udrzba': 'bezna-udrzba-vozidel',

    // About
    'about.title': 'O nás',
    'about.subtitle': 'Profesionální přístup s důrazem na kvalitu',
    'about.description': 'Vážení zákazníci,',
    'about.description2': 'Komunikace se zákazníkem je pro mě radostí, a proto u mě nečekejte otrávené hovory, kde byste se cítili, jako byste překáželi nebo dokonce někoho obtěžovali. Každému zákazníkovi se věnuji, jak jen mi to mé časové možnosti dovolí.',
    'about.description3': 'U každé opravy poskytujeme pečlivou fotodokumentaci a zákazníka vždy kompletně informujeme o provedených úkonech. Auta máme rádi, a naše práce nás opravdu baví.',
    'about.description4': 'Vyzkoušejte něco nového a nechte se mile překvapit. Bude mi ctí postarat se o vaše auto.',
    'about.stat1': 'Vymačkaných důlků',
    'about.stat2': 'Úderů kladivem',
    'about.stat3': 'spasovaných blatníků',
    'about.stat4': 'Nalakovaných dílů',

    // USP
    'usp.title1': 'Krátké objednávací termíny',
    'usp.text1': 'Většinu oprav provedeme do 7 dnů od objednaní',
    'usp.title2': 'Slušné a férové jednání',
    'usp.text2': 'Po celou dobu jste informováni o průběhu prováděných pracích',
    'usp.title3': 'Kvalitně odvedená práce',
    'usp.text3': 'Záruka bezpečnostní a pohodlí na vašich cestách',

    // Nav
    'nav.home': 'Úvodní stránka',
    'nav.about': 'O nás',
    'nav.gallery': 'Galerie',
    'nav.services': 'Služby',
    'nav.contact': 'Kontakt',

    // Header
    'header.tel.number': '+420 777 076 174',
    'header.tel.cto': 'Konzultace zdarma!',

    // Contact
    'contact.contactPageTitle': 'Kontakt',
    'contact.consultation': 'Konzultace zdarma!',
    'contact.title': 'Potřebujete poradit?',
    'contact.description': 'Napište mi na Email nebo Whatsapp s fotkou vašeho poškození a já se vám ozvu zpátky s cenovou nabídkou.',
    'contact.button': 'Kontaktujte nás!',

    // Form
    'form.name': 'Jméno',
    'form.namePlaceholder': 'Petr Novák',
    'form.tel': 'Telefon',
    'form.telPlaceholder': '+420 777 777 777',
    'form.email': 'E-mail',
    'form.mailPlaceholder': 'petr.novak@email.cz',
    'form.message': 'Zpráva',
    'form.messagePlaceholder': 'Vaše zpráva',
    'form.send': 'Odeslat',
    'form.messageSuccess': 'Zpráva byla úspěšně odeslána.',
    'form.messageError': 'Zpráva nebyla odeslána. Zkuste to znovu.',
    'form.upload': 'Zde můžete nahrát fotku vašeho poškození',

    // Gallery
    'gallery.galleryPageTitle': 'Galerie',
    'gallery.filter.all': 'Vše',
    'gallery.filter.filter1': 'Pneuservis',
    'gallery.filter.filter2': 'Opravy vozidel kroupách',
    'gallery.filter.filter3': 'Ochranné nástřiky',

    // Services
    'services.servicesPageTitle': 'Služby',
    'services.subtitle': 'Co nabízíme',
    'services.moreInfo': 'Více informací',
    'services.title': 'VŠE NA JEDNOM MÍSTĚ.',
    'services.serviceCard.card1': 'Opravy vozidel po kroupách bez poškození laku',
    'services.serviceCard.card2': 'Opravy deformací bez lakování metodou PDR',
    'services.serviceCard.card3': 'Ochranné nástřiky dutin a podvozků',
    'services.serviceCard.card4': 'Vyvařování a karosářské opravy',
    'services.serviceCard.card5': 'Údržba a opravy klimatizací',
    'services.serviceCard.card6': 'Pneuservis',
    'services.serviceCard.card7': 'Běžná údržba vozidel',
    'services.serviceCard.card8': 'Čištění a mytí vozidel',

    // Ratings
    'ratings.title': 'Co o nás říkají',
    'ratings.subtitle': 'Recenze Google',

    // Footer
    'footer.address': 'Adresa',
    'footer.tel': 'Zavolejte',
    'footer.services.title': 'Služby',
    'footer.openingHours.title': 'Otevírací doba',
    'footer.openingHours.monday': 'Po - Pá: 9:00 - 17:00',
    'footer.openingHours.saturday': 'So - pouze na objednání',
    'footer.openingHours.sunday': 'Ne: Zavřeno',
    'footer.openingHours.phone': 'Případně dle telefonické domluvy',
  },
  de: {
    // Global
    'global.email': 'karoseriedoc@gmail.com',

    // URLs
    'urls.opravy-vozidel-kroupy': 'opravy-vozidel-po-kroupach-bez-poskozeni-laku',
    'urls.opravy-deformaci-pdr': 'opravy-deformaci-bez-lakovani-metodou-pdr',
    'urls.ochrane-nastriky': 'ochranne-nastriky-dutin-a-podvozku',
    'urls.klempirnicka-lakyrnicka': 'drobne-klempirske-a-lakyrnicke-prace',
    'urls.vyvarovani': 'vyvarovani-a-karosarske-opravy',
    'urls.udrzba-klimatizace': 'udrzba-a-opravy-klimatizaci',
    'urls.pneuservis': 'pneuservis',
    'urls.cisteni-a-myti': 'cisteni-a-myti-vozidel',
    'urls.bezna-udrzba': 'bezna-udrzba-vozidel',

    // About
    'about.title': 'Über uns',
    'about.subtitle': 'Professioneller Ansatz mit Schwerpunkt auf Qualität',
    'about.description': 'Sehr geehrte Kunden,',
    'about.description2': 'die Kommunikation mit Kunden ist mir ein Vergnügen. Erwarten Sie also keine genervten Anrufe, bei denen Sie das Gefühl haben, dass Sie im Weg sind oder gar jemanden belästigen. Ich kümmere mich um jeden Kunden so viel, wie es meine Zeit erlaubt.',
    'about.description3': 'Jede Reparatur wird mit einer sorgfältigen Fotodokumentation versehen, und der Kunde wird stets umfassend über die durchgeführten Arbeiten informiert. Wir lieben Autos, und unsere Arbeit macht uns wirklich Spaß',
    'about.description4': 'Probieren Sie etwas Neues und lassen Sie sich angenehm überraschen. Es wird mir eine Ehre sein, mich um Ihr Auto zu kümmern.',
    'about.stat1': 'Gequetschte Grübchen',
    'about.stat2': 'Hammerschläge',
    'about.stat3': 'der Kotflügelverbreiterungen',
    'about.stat4': 'Lackierte Teile',

    // USP
    'usp.title1': 'Kurze Bestellfristen',
    'usp.text1': 'Die meisten Reparaturen werden innerhalb von 7 Tagen nach der Bestellung ausgeführt.',
    'usp.title2': 'Anständige und faire Behandlung',
    'usp.text2': 'Sie jederzeit über den Fortgang der Arbeiten informiert werden',
    'usp.title3': 'Eine gut gemachte Arbeit',
    'usp.text3': 'Eine Garantie für Sicherheit und Komfort auf Ihren Reisen',

    // Nav
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.gallery': 'Galerie',
    'nav.services': 'Dienstleistungen',
    'nav.contact': 'Kontakt',

    // Header
    'header.tel.number': '+420 777 076 174',
    'header.tel.cto': 'Kostenlose Beratung!',

    // Contact
    'contact.contactPageTitle': 'Kontakt',
    'contact.consultation': 'Kostenlose Beratung!',
    'contact.title': 'Brauchen Sie einen Rat?',
    'contact.description': 'Schicken Sie mir eine E-Mail oder Whatsapp mit einem Foto Ihres Schadens und ich werde Ihnen einen Kostenvoranschlag unterbreiten.',
    'contact.button': 'Kontaktieren Sie uns!',

    // Form
    'form.name': 'Name',
    'form.namePlaceholder': 'Petr Novák',
    'form.tel': 'Telefon',
    'form.telPlaceholder': '+420 777 777 777',
    'form.email': 'E-mail',
    'form.mailPlaceholder': 'petr.novak@email.cz',
    'form.message': 'Bericht',
    'form.messagePlaceholder': 'Ihre Nachricht',
    'form.send': 'Senden',
    'form.messageSuccess': 'Nachricht wurde erfolgreich gesendet.',
    'form.messageError': 'Nachricht wurde nicht gesendet. Bitte versuchen Sie es erneut.',
    'form.upload': 'Hier können Sie ein Foto Ihres Schadens hochladen',

    // Gallery
    'gallery.galleryPageTitle': 'Galerie',
    'gallery.filter.all': 'Alle',
    'gallery.filter.filter1': 'Pneuservis',
    'gallery.filter.filter2': 'Opravy vozidel kroupách',
    'gallery.filter.filter3': 'Ochranné nástřiky',

    // Services
    'services.servicesPageTitle': 'Dienstleistungen',
    'services.subtitle': 'Was wir anbieten',
    'services.moreInfo': 'Weitere Informationen',
    'services.title': 'ALLES AN EINEM ORT.',
    'services.serviceCard.card1': 'Reparatur von Fahrzeugen nach Hagelstürmen ohne Lackschäden',
    'services.serviceCard.card2': 'Lackschadenfreie Ausbeultechnik (PDR-Verfahren)',
    'services.serviceCard.card3': 'Schutzbesprühung von Hohlräumen und Chassis',
    'services.serviceCard.card4': 'Schweißen und Karosseriereparaturen',
    'services.serviceCard.card5': 'Wartung und Reparatur von Klimaanlagen',
    'services.serviceCard.card6': 'Pneuservice',
    'services.serviceCard.card7': 'Routinemäßige Fahrzeugwartung',
    'services.serviceCard.card8': 'Fahrzeugreinigung und -wäsche',

    // Ratings
    'ratings.title': 'Was sie über uns sagen',
    'ratings.subtitle': 'Google-Bewertungen',

    // Footer
    'footer.address': 'Adresse',
    'footer.tel': 'Rufen Sie  an.',
    'footer.services.title': 'Dienstleistungen',
    'footer.openingHours.title': 'Die Öffnungszeiten',
    'footer.openingHours.monday': 'Mo - Fr: 9:00 - 17:00',
    'footer.openingHours.saturday': 'Sa - nur auf Anfrage',
    'footer.openingHours.sunday': 'So: Geschlossen',
    'footer.openingHours.phone': 'Nach telefonischer Vereinbarung',
  },
} as const;

export type TranslationKey = keyof typeof ui.cs;
