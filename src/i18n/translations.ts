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
    'about.title': 'O nás a naší práci v KaroserieDoc',
    'about.subtitle': 'Profesionální přístup s důrazem na kvalitu',
    'about.description': 'Vážení zákazníci, vítejte u KaroserieDoc. Specializuji se především na opravy promáčklin bez lakování metodou PDR, ale nabízím i komplexní karosářské práce, ochranné nástřiky podvozků a další servisní služby v Chodové Plané a okolí.',
    'about.description2': 'Protože je metoda PDR vysoce odborná a vyžaduje maximální přesnost, prošel jsem profesionálním výcvikem na opravy PDR u specialistů z firmy PROPDR, abych vašemu vozu mohl zaručit ten nejlepší výsledek bez poškození laku.',
    'about.description3': 'Automobilový trh je dynamický a technologie jdou neustále kupředu. Proto nezůstáváme pozadu a pravidelně se účastníme kurzů a vzdělávacích akcí přímo od automobilek či specializovaných škol. V posledním roce se můžeme pochlubit získáním oprávnění Vysokonapěťový technik. Díky tomu můžeme zcela bezpečně opravovat i vaše elektrovozidla a hybridy, které se na našich silnicích objevují stále častěji.',
    'about.description4': 'Komunikace se zákazníkem je pro mě radostí, a proto u mě nečekejte otrávené hovory, kde byste se cítili, jako byste překáželi nebo dokonce někoho obtěžovali. Každému zákazníkovi se věnuji, jak jen mi to mé časové možnosti dovolí.',
    'about.description5': 'U každé opravy poskytujeme pečlivou fotodokumentaci a zákazníka vždy kompletně informujeme o provedených úkonech.',
    'about.description6': 'Auta máme rádi, naše práce nás opravdu baví a ke každému vozu přistupujeme s maximální pečlivostí, ať už jde o drobný parkovací důlek nebo rozsáhlejší opravu po kroupách. Vyzkoušejte něco nového a nechte se mile překvapit. Bude mi ctí postarat se o vaše auto.',
    'about.stat1': 'Let zkušeností',
    'about.stat2': 'Opravených aut po kroupách',
    'about.stat3': 'Spokojených zákazníků',
    'about.stat4': 'Úderů kladivem',

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
    'services.serviceCard.desc1': 'Krupobití zanechalo na vaší karoserii stovky důlků? Specializujeme se na hromadné vytahování promáčklin po kroupách. Vaše auto vrátíme do původního stavu za zlomek času oproti běžnému lakování, a to se 100% garancí kvality a udržení hodnoty vozu.',
    'services.serviceCard.card2': 'Opravy deformací bez lakování metodou PDR',
    'services.serviceCard.desc2': 'Rychlé a šetrné odstranění důlků z parkovišť, poškození od vandalismu nebo pádu větví. Metoda PDR (Paintless Dent Repair) zachová váš originální lak, nevyžaduje kytování a šetří váš čas i peníze. Opravy provádíme pro zákazníky z Plzně, Tachovska, Mariánských Lázní a okolí.',
    'services.serviceCard.card3': 'Ochranné nástřiky dutin a podvozků',
    'services.serviceCard.desc3': 'Prodlužte životnost svého auta a chraňte ho před rzí, solí a vlhkostí. Provádíme pečlivé antikorozní nástřiky podvozků a dutin profesionálními materiály. Ideální příprava před zimou nebo pro starší vozy, kterým chcete vrátit odolnost.',
    'services.serviceCard.card4': 'Vyvařování a karosářské opravy',
    'services.serviceCard.desc4': 'Trápí váš vůz koroze nebo potřebujete opravit následky drobné havárie? Zajišťujeme precizní vyvařování zrezivělých prahů, lemů blatníků, podlah i nosných částí karoserie. Klademe důraz na přesné slícování dílů a maximální pevnost svárů pro vaši bezpečnost na silnicích.',
    'services.serviceCard.card5': 'Údržba a opravy klimatizací',
    'services.serviceCard.desc5': 'Ztrácí vaše auto výkon při chlazení nebo se z něj line nepříjemný zápach? Provádíme kompletní servis autoklimatizací – od plnění chladivem přes dezinfekci ozonem až po detekci úniků a výměnu poškozených dílů. Dýchejte ve svém voze opět čistý a chladný vzduch.',
    'services.serviceCard.card6': 'Pneuservis',
    'services.serviceCard.desc6': 'Nabízíme kompletní pneuservisní služby pro osobní a dodávková vozidla. Zajišťujeme přezouvání pneumatik, přesné vyvažování kol i opravy defektů. Připravíme váš vůz na letní i zimní sezónu rychle, spolehlivě a bez zbytečného čekání.',
    'services.serviceCard.card7': 'Běžná údržba vozidel',
    'services.serviceCard.desc7': 'Zajišťujeme kompletní pravidelný servis a údržbu vašeho vozu, abyste na silnici jezdili bezpečně a bez starostí. Provádíme výměny motorových olejů a filtrů, kontrolu a opravy brzdových systémů, diagnostiku závad i standardní servisní prohlídky. Postaráme se o auto rychle a kvalitně přímo v Chodové Plané.',
    'services.serviceCard.card8': 'Čištění a mytí vozidel',
    'services.serviceCard.desc8': 'Navrátíme vašemu autu lesk a čistotu, aby vypadalo opět jako nové. Nabízíme důkladné ruční mytí karoserie, hloubkové čištění interiérů včetně tepování sedaček, dezinfekci ozonem i detailní ošetření plastových a kožených částí vozu.',

    // Ratings
    'ratings.title': 'Co o nás říkají',
    'ratings.subtitle': 'Recenze Google',
    'ratings.review1.name': 'Marek Šuraba',
    'ratings.review1.description': 'Dnes mi pán dokázal, že je opravdu kouzelník!!! Měl jsem na své audi velmi špatně promáčklý lem zadního blatníku, u nejmenované konkurence mi řekli, že tohle nikdo nevytáhne na 100% protože to bylo fakt blbě promačklé přímo v lemu. Nicméně pán od KaroserieDoc řekl že to zvládne a taky zvládl!! Když jsem si byl auto vyzvednout nikdo by nepoznal že tam někdy promáčklina byla! A cena proti konkurenci byla opravdu luxusní, maximální spokojenost. Pánovi moc děkuji a určitě přijedu zas když to někde bouchnu 😅',
    'ratings.review1.date': '27.2.2022',
    'ratings.review2.name': 'Elušenka',
    'ratings.review2.description': 'Chtěla bych se s Vámi podělit o skvělou péči mého auta.👌 Jak spasovaní dílů ,tak ošetření podvozku na jedničku.👌 Skvělá komunikace i práce mohu jen doporučit.🌼 Vím na koho se vždy obrátit.🤗',
    'ratings.review2.date': '27.2.2022',
    'ratings.review3.name': 'Drahoslav Koura',
    'ratings.review3.description': 'Profesionální práce a vstřícnost.  Promáčklý zadní blatník u 3dv auta od fotbalového míče. Hloubka cca 12 mm a průměr 220 mm.Vypadalo to jak od medicinbalu. Má zlaté a šikovné ruce. Nepoznáte, že se autíčku něco stalo. Moc díky',
    'ratings.review3.date': '27.2.2023',
    'ratings.review4.name': 'Jana Hrdličková',
    'ratings.review4.description': 'Perfektní, můžeme jen doporučit  - oprava promáčklé kapoty trvala sotva hodinku, na kapotě není poznat, že by byla kdy poškozená. S cenou jsme také spokojení - konkurence by stála rozhodně víc! A co určitě chci vyzvednout, je přístup k zákazníkovi - máme většinou problém zajet do servisu kvůli pracovnímu vytížení, ale pán nám velmi ochotně vyšel vstříc a opravu provedl v neděli. Takže, i když doufám, že už se našemu autu nic nestane, ale pokud ano, víme, na koho se obrátit.',
    'ratings.review4.date': '27.2.2023',
    'ratings.review5.name': 'Matteo Borgorelli',
    'ratings.review5.description': 'Pan mi opravil nalakoval zrezlý blatnik. S opravou jsem více než spokojen. Mnohokrát děkuji .',
    'ratings.review5.date': '27.2.2021',

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
    'about.title': 'Über uns und unsere Arbeit bei KaroserieDoc',
    'about.subtitle': 'Professioneller Ansatz mit Schwerpunkt auf Qualität',
    'about.description': 'Sehr geehrte Kunden, willkommen bei KaroserieDoc. Ich spezialisiere mich vor allem auf die Reparatur von Dellen ohne Lackierung mit der PDR-Methode, biete aber auch umfassende Karosseriearbeiten, Unterbodenschutz-Beschichtungen und weitere Serviceleistungen in Chodová Planá und Umgebung an.',
    'about.description2': 'Da die PDR-Methode hochspezialisiert ist und maximale Präzision erfordert, habe ich eine professionelle Ausbildung in PDR-Reparaturen bei den Spezialisten der Firma PROPDR absolviert, um Ihrem Fahrzeug das bestmögliche Ergebnis ohne Lackschäden garantieren zu können.',
    'about.description3': 'Der Automobilmarkt ist dynamisch und die Technologien schreiten stetig voran. Deshalb bleiben wir nicht zurück und nehmen regelmäßig an Kursen und Schulungen direkt von Automobilherstellern oder spezialisierten Schulen teil. Im letzten Jahr können wir stolz auf den Erwerb der Qualifikation als Hochvolt-Techniker sein. Dadurch können wir auch Ihre Elektrofahrzeuge und Hybride, die auf unseren Straßen immer häufiger anzutreffen sind, völlig sicher reparieren.',
    'about.description4': 'Die Kommunikation mit Kunden ist mir ein Vergnügen. Erwarten Sie also keine genervten Anrufe, bei denen Sie das Gefühl haben, dass Sie im Weg sind oder gar jemanden belästigen. Ich kümmere mich um jeden Kunden so viel, wie es meine Zeit erlaubt.',
    'about.description5': 'Jede Reparatur wird mit einer sorgfältigen Fotodokumentation versehen, und der Kunde wird stets umfassend über die durchgeführten Arbeiten informiert.',
    'about.description6': 'Wir lieben Autos, unsere Arbeit macht uns wirklich Spaß und wir gehen jedes Fahrzeug mit größter Sorgfalt an, ob es sich um eine kleine Parkdelle oder eine umfangreichere Hagelreparatur handelt. Probieren Sie etwas Neues und lassen Sie sich angenehm überraschen. Es wird mir eine Ehre sein, mich um Ihr Auto zu kümmern.',
    'about.stat1': 'Jahre Erfahrung',
    'about.stat2': 'Reparierte Autos nach Hagel',
    'about.stat3': 'Zufriedene Kunden',
    'about.stat4': 'Hammerschläge',

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
    'services.serviceCard.desc1': 'Hat ein Hagelsturm Hunderte von Dellen auf Ihrer Karosserie hinterlassen? Wir sind auf das massenhafte Ausbeulen von Hagelschäden spezialisiert. Wir bringen Ihr Auto in einem Bruchteil der Zeit im Vergleich zur herkömmlichen Lackierung in den Originalzustand zurück – mit 100%iger Qualitätsgarantie und Werterhaltung.',
    'services.serviceCard.card2': 'Lackschadenfreie Ausbeultechnik (PDR-Verfahren)',
    'services.serviceCard.desc2': 'Schnelle und schonende Entfernung von Parkdellen, Vandalismusschäden oder Schäden durch herabfallende Äste. Die PDR-Methode (Paintless Dent Repair) bewahrt Ihren Originallack, erfordert kein Spachteln und spart Zeit und Geld. Wir reparieren für Kunden aus Pilsen, Tachov, Marienbad und Umgebung.',
    'services.serviceCard.card3': 'Schutzbesprühung von Hohlräumen und Chassis',
    'services.serviceCard.desc3': 'Verlängern Sie die Lebensdauer Ihres Autos und schützen Sie es vor Rost, Salz und Feuchtigkeit. Wir führen sorgfältige Korrosionsschutzbeschichtungen von Unterboden und Hohlräumen mit professionellen Materialien durch. Ideale Vorbereitung vor dem Winter oder für ältere Fahrzeuge.',
    'services.serviceCard.card4': 'Schweißen und Karosseriereparaturen',
    'services.serviceCard.desc4': 'Leidet Ihr Fahrzeug unter Korrosion oder müssen Sie die Folgen eines kleineren Unfalls beheben? Wir führen präzise Schweißarbeiten an verrosteten Schwellern, Kotflügelkanten, Böden und tragenden Karosserieteilen durch. Wir legen Wert auf exakte Passgenauigkeit und maximale Schweißnahtfestigkeit für Ihre Sicherheit.',
    'services.serviceCard.card5': 'Wartung und Reparatur von Klimaanlagen',
    'services.serviceCard.desc5': 'Verliert Ihr Auto an Kühlleistung oder riecht es unangenehm? Wir bieten einen kompletten Klimaanlagenservice – von der Kältemittelbefüllung über die Ozondesinfektion bis hin zur Lecksuche und zum Austausch beschädigter Teile. Atmen Sie in Ihrem Auto wieder saubere und kühle Luft.',
    'services.serviceCard.card6': 'Pneuservice',
    'services.serviceCard.desc6': 'Wir bieten komplette Reifenserviceleistungen für PKW und Transporter. Wir übernehmen den Reifenwechsel, das präzise Auswuchten der Räder sowie Reparaturen von Reifenschäden. Wir bereiten Ihr Fahrzeug schnell, zuverlässig und ohne unnötige Wartezeiten auf die Sommer- und Wintersaison vor.',
    'services.serviceCard.card7': 'Routinemäßige Fahrzeugwartung',
    'services.serviceCard.desc7': 'Wir gewährleisten einen kompletten regelmäßigen Service und die Wartung Ihres Fahrzeugs, damit Sie sicher und sorgenfrei unterwegs sind. Wir führen Motorölwechsel, Filterwechsel, Bremssystemprüfungen und -reparaturen, Fehlerdiagnosen sowie Standard-Serviceinspektionen durch.',
    'services.serviceCard.card8': 'Fahrzeugreinigung und -wäsche',
    'services.serviceCard.desc8': 'Wir geben Ihrem Auto Glanz und Sauberkeit zurück, damit es wieder wie neu aussieht. Wir bieten gründliche Handwäsche der Karosserie, Tiefenreinigung des Innenraums einschließlich Polsterreinigung, Ozondesinfektion sowie detaillierte Pflege von Kunststoff- und Lederteilen.',

    // Ratings
    'ratings.title': 'Was sie über uns sagen',
    'ratings.subtitle': 'Google-Bewertungen',
    'ratings.review1.name': 'Marek Šuraba',
    'ratings.review1.description': 'Heute hat mir der Herr bewiesen, dass er ein echter Zauberer ist!!! Ich hatte an meinem Audi eine sehr schlecht eingedrückte Kante am hinteren Kotflügel, bei einem namenlosen Konkurrenten sagten sie mir, dass das niemand zu 100% rausbekommt, weil es wirklich schlecht direkt in der Kante eingedrückt war. Aber der Herr von KaroserieDoc sagte, er schafft das und er hat es geschafft!! Als ich das Auto abholte, konnte niemand erkennen, dass dort jemals eine Delle war! Und der Preis war im Vergleich zur Konkurrenz wirklich luxuriös, maximale Zufriedenheit. Ich danke dem Herrn sehr und werde sicher wiederkommen, wenn ich irgendwo eine Delle bekomme 😅',
    'ratings.review1.date': '27.2.2022',
    'ratings.review2.name': 'Elušenka',
    'ratings.review2.description': 'Ich möchte mit Ihnen die hervorragende Pflege meines Autos teilen.👌 Sowohl die Passgenauigkeit der Teile als auch die Behandlung des Unterbodens waren erstklassig.👌 Hervorragende Kommunikation und Arbeit, kann ich nur empfehlen.🌼 Ich weiß, an wen ich mich immer wenden kann.🤗',
    'ratings.review2.date': '27.2.2022',
    'ratings.review3.name': 'Drahoslav Koura',
    'ratings.review3.description': 'Professionelle Arbeit und Hilfsbereitschaft. Eingedrückter hinterer Kotflügel bei einem 3-Türer-Auto durch einen Fußball. Tiefe ca. 12 mm und Durchmesser 220 mm. Es sah aus wie von einem Medizinball. Er hat goldene und geschickte Hände. Man erkennt nicht, dass dem Auto etwas passiert ist. Vielen Dank',
    'ratings.review3.date': '27.2.2023',
    'ratings.review4.name': 'Jana Hrdličková',
    'ratings.review4.description': 'Perfekt, wir können nur empfehlen - die Reparatur der eingedrückten Motorhaube dauerte kaum eine Stunde, an der Haube ist nicht zu erkennen, dass sie jemals beschädigt war. Mit dem Preis sind wir auch zufrieden - die Konkurrenz wäre definitiv teurer gewesen! Und was ich besonders hervorheben möchte, ist der Kundenservice - wir haben meistens Probleme, wegen der Arbeitsbelastung in die Werkstatt zu fahren, aber der Herr kam uns sehr entgegen und führte die Reparatur am Sonntag durch. Also, auch wenn ich hoffe, dass unserem Auto nichts mehr passiert, aber falls doch, wissen wir, an wen wir uns wenden können.',
    'ratings.review4.date': '27.2.2023',
    'ratings.review5.name': 'Matteo Borgorelli',
    'ratings.review5.description': 'Der Herr hat meinen verrosteten Kotflügel repariert und lackiert. Mit der Reparatur bin ich mehr als zufrieden. Vielen Dank.',
    'ratings.review5.date': '27.2.2021',

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
