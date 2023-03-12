export const showSpellDesc = (spellName) => {
    return desc[spellName];
}

const desc = {
    "Leczenie (zadawanie) lekkich ran":
    `Poziom czaru: K1
    Zasięg: Dotyk
    Czas trwania: Natychmiastowy
    1. Ten czar, rzucony jako Leczenie lekkich
    ran, przywraca 1k6+1 PŻ.
    2. Rzucony jako Zadawanie lekkich ran za-
    daje 1k6+1 obrażeń.`,

    "Ochrona przed Chaosem (Ładem)":
    `Poziom czaru: K1, M1
    Zasięg: Tylko czarujący
    Czas trwania: 2 godz. (K), godzina (M)
    1. Czar Ochrony przed Chaosem tworzy
    magiczne pole ochronne dookoła czarujące-
    go, które nie przepuszcza chaotycznych po-
    tworów, które przez to otrzymują modyfika-
    tor -1 do rzutów na trafienie chronionej po-
    staci. Czarujący otrzymuje ponadto modyfi-
    kator +1 do wszystkich rzutów obronnych
    przeciwko ich atakom.
    2. Czar Ochrony przed Ładem działa tak
    samo, tylko wpływa na istoty Ładu.`,

    "Oczyszczenie (splugawienie) jedzenia i wody":
    `Poziom czaru: K1
    Zasięg: Bliski/dotyk
    Czas trwania: Natychmiastowy
    1. Zaklęcie Oczyszczenia sprawia, że dość je-
    dzenia i wody dla dwunastu ludzi zostaje
    oczyszczone i przestaje być zepsute lub za-
    trute.
    2. Zaklęcie Splugawienia sprawia, że taka
    sama ilość jedzenia i wody staje się spluga-
    wiona, zaczyna się psuć i napełnia się truci-
    znami.`,

    "Światło (ciemność)":
    `Poziom czaru: K1, M1
    Zasięg: 120 stóp (36 m)
    Czas trwania: 2 godziny (K), godzina+10 min/po-
    ziom (M)
    1. Rzucając czar Światło, czarujący sprawia,
    że osoba lub przedmiot zaczyna świecić z ja-
    snością pochodni w promieniu 20 stóp
    (6 m).
    2. Rzucając czar Ciemność, czarujący spra-
    wia, że w promieniu 20 stóp (6 m) zapadają
    ciemności`,

    "Wykrycie magii": 
    `Poziom czaru: K1, M1
    Zasięg: 60 stóp (18 m)
    Czas trwania: 20 minut
    Czar pozwala czarującemu dostrzec obecność czarów
    i magii w miejscach, ludziach i przedmiotach. Można
    dzięki niemu np. wykryć obecność magicznych
    przedmiotów albo to, że ktoś jest pod wpływem za-
    uroczenia.`,

    "Wykrycie Chaosu (Ładu)":
    `Poziom czaru: K1, M2
    Zasięg: kapłan: 120 stóp (36 m), mag: 60 stóp (18 m)
    Czas trwania: Godzina (K), 20 min (M)
    1. Wykrycie Chaosu pozwala czarującemu
    wykryć wszystkie chaotyczne stworzenia w
    zasięgu zaklęcia, jak również te o wrogich in-
    tencjach, złych myślach, negatywnej aurze
    lub pod działaniem złej magii. Trucizna nie
    jest zła sama w sobie i nie może zostać wy-
    kryta przy użyciu tego czaru.
    2. Wykrycie Ładu działa tak samo poza tym,
    że wykrywa Ład zamiast Chaosu.`,

    "Błogosławieństwo (klątwa)":
    `Poziom czaru: K2
    Zasięg: Postać gracza lub BN (poza walką)
    Czas trwania: Godzina
    Czarujący musi wybrać, którą z wersji czaru rzuca.
    Celem czaru może być dowolne stworzenie, które nie
    znajduje się w walce.
    1. Czar Ładu, Błogosławieństwo, zapewnia
    modyfikator +1 do rzutów na atak (i popra-
    wia morale, jeśli nie zostaje rzucony na po-
    stać gracza).
    2. Czar Chaosu, Klątwa, obdarza modyfikato-
    rem -1 zamiast +1.`,

    "Rozmawianie ze zwierzętami":
    `Poziom czaru: K2
    Zasięg: 30 stóp (9 m)
    Czas trwania: godzina
    Ten czar pozwala czarującemu rozmawiać ze wszyst-
    kimi zwierzętami w zasięgu. Istnieje szansa, że zwie-
    rzęta pójdą za nim i nie zaatakują drużyny - chyba,
    że powie im coś szczególnie obraźliwego.`,

    "Wykrycie pułapek":
    `Poziom czaru: K2
    Zasięg: 30 stóp (9 m)
    Czas trwania: 20 minut
    Czarujący jest w stanie wykryć magiczne i zwykłe pu-
    łapki w promieniu 30 stóp.`,

    "Zawładnięcie osobami":
    `Poziom czaru: K2, M3
    Zasięg: Kapłan 180 stóp (54 m), mag 120 stóp (36 m)
    Czas trwania: 90 minut (K), godzina +10 minut/po-
    ziom (M)
    Czarujący rzuca zaklęcie na 1k4 osoby (wymagania
    takie, jak przy czarze Zauroczenie osoby; mogą
    wykonać rzut obronny). Zamiast tego czarujący może
    wybrać tylko jedną osobę; wtedy rzut obronny jest
    wykonywany z modyfikatorem -2.`,

    "Leczenie (wywoływanie) chorób":
    `Poziom czaru: K3
    Zasięg: Dotyk
    Czas trwania: Natychmiastowy
    1. Leczenie chorób leczy dotkniętego ze
    wszystkich chorób, również tych wywoła-
    nych przy pomocy magii.
    2. Wywoływanie chorób zaraża dotkniętego
    chorobą wybraną przez Prowadzącego.`,

    "Światło (ciemność), stałe":
    `Poziom czaru: K3, M2
    Zasięg: 120 stóp (36 m)
    Czas trwania: Trwały do zdjęcia czaru
    3. Rzucając czar Stałe światło, czarujący
    sprawia, że osoba lub przedmiot zaczyna
    świecić z jasnością pochodni w promieniu 20
    stóp (6 m).
    4. Rzucając czar Stała ciemność, czarujący
    sprawia, że w promieniu 20 stóp (6 m) zapa-
    dają ciemności.`,

    "Zdjęcie klątwy":
    `Poziom czaru: K3, M4
    Zasięg: Dotyk
    Czas trwania: Natychmiastowy
    Ten czar zdejmuje jedną klątwę z osoby lub przed-
    miotu.`,

    "Zlokalizowanie przedmiotu":
    `Poziom czaru: K3, M2
    Zasięg: Kapłan: 90 stóp (27 m), mag: 60 stóp (18 m)
    + 10 stóp (3 m)/poziom (M)
    Czas trwania: 1 runda/poziom
    Czarujący określa jakiś przedmiot, opisując go, a czar
    określa kierunek, w jakim on się znajduje. Przedmiot
    nie może być czymś, czego mag nigdy nie widział, ale
    można wykryć przedmioty o ogólnych cechach zna-
    nych magowi: schody, złoto itp.`,

    "Leczenie (zadawanie) poważnych ran":
    `Poziom czaru: K4
    Zasięg: Dotyk
    Czas trwania: Natychmiastowy
    1. Ten czar, rzucony jako Leczenie poważ-
    nych ran, przywraca 3k6+3 PŻ.
    2. Rzucony jako Zadawanie poważnych
    ran zadaje 3k6+3 obrażeń.`,

    "Neutralizacja trucizny":
    `Poziom czaru: K4
    Zasięg: Decyzja Prowadzącego
    Czas trwania: 10 minut
    Ten czar przeciwdziała truciźnie, ale nie przywraca
    zmarłych do życia.`,

    "Ochrona przed Chaosem (Ładem), promień 3 m":
    `Poziom czaru: K4, M3
    Zasięg: promień 10 stóp (3 m) dookoła czarującego
    Czas trwania: 2 godziny
    To zaklęcie działa tak samo, jak Ochrona przed
    Chaosem (Ładem), poza tym, że chroni nie tylko
    czarującego, ale również obszar dookoła niego.`,

    "Patyki w węże":
    `Poziom czaru: K4
    Zasięg: 120 stóp (36 m)
    Czas trwania: Godzina
    Czarujący może przemienić do 2k8 patyków w węże,
    z których każdy może być jadowity (szansa 50%).
    Węże wykonują jego rozkazy, ale przemieniają się
    z powrotem pod koniec działania czaru lub jeśli zo-
    staną zabite.`,

    "Rozmawianie z roślinami":
    `Poziom czaru: K4
    Zasięg: 30 stóp (9 m)
    Czas trwania: 6 tur
    Czarujący może mówić do roślin i rozumieć ich od-
    powiedzi. Rośliny będą posłuszne jego rozkazom tak
    długo, jak długo będą w stanie je wykonać (np. wygi-
    nając się przed nim, żeby ułatwić mu przejście itp.).`,

    "Misja":
    `Poziom czaru: K5, M6
    Zasięg: 30 stóp (9 m)
    Czas trwania: Do wykonania misji
    Jeśli rzucenie czaru się powiedzie (rzut obronny), to
    rzucający może wyznaczyć jakieś zadanie ofierze za-
    klęcia.
    Jeśli ofiara nie przykłada się do wykonania zadania,
    to dotykają ją konsekwencje zależne od klasy postaci
    czarującego. Jeśli czar został rzucony przez maga, to
    rezygnacja z zadania oznacza śmierć, a jeśli przez ka-
    płana, to konsekwencje zależą od Prowadzącego.`,

    "Plaga insektów":
    `Poziom czaru: K5
    Zasięg: 480 stóp (144 m)
    Czas trwania: 1 dzień
    Ten czar działa tylko na otwartej przestrzeni. Chmu-
    ra owadów zbiera się i przemieszcza się wszędzie,
    gdzie zażyczy sobie tego czarujący. Chmura ma
    w przybliżeniu 36 metrów kwadratowych (20 × 20
    stóp (6 × 6 m), z podobną wysokością). Każde stwo-
    rzenie o 2 Kostkach lub mniej znajdujące się w pobli-
    żu chmury ucieka w panice.`,

    "Rozproszenie Chaosu (Ładu)":
    `Poziom czaru: K5
    Zasięg: 30 stóp (9 m)
    Czas trwania: 10 minut
    1. Czar Rozproszenia Chaosu działa podob-
    nie do Rozproszenia magii, ale wpływa
    jedynie na przedmioty, zaklęcia i sługi Cha-
    osu. W przeciwieństwie do Rozproszenia
    magii jest jednak w stanie rozproszyć magię
    boskiego pochodzenia, na przykład zesłane
    sny czy wysłanników mocy chaosu.
    2. Przeciwny czar, Rozproszenie Ładu, dzia-
    ła podobnie, ale wpływa na magię Ładu.`,

    "Stworzenie jedzenia i wody":
    `Poziom czaru: K4
    Zasięg: Bliski
    Czas trwania: Natychmiastowy
    Ten czar stwarza jednodniowe zapasy jedzenia
    i wody dla 24 osób (lub koni, które na potrzeby gry
    jedzą i piją tyle samo, co ludzie).`,

    "Wskrzeszenie":
    `Poziom czaru: K5
    Zasięg: Pole widzenia
    Czas trwania: Patrz niżej
    Wskrzeszenie pozwala kapłanowi przywrócić mar-
    twego do życia, jeśli ten zmarł nie wcześniej, niż w
    określonym czasie przed rzuceniem czaru. Zwykłe
    ograniczenie czasu to 4 dni, ale za każdy poziom cza-
    rującego powyżej ósmego ten limit wydłuża się o ko-
    lejne 4 dni. Postacie z niską Kondycją mogą nie prze-
    trwać wskrzeszenia, a nawet te wytrzymałe potrzebu-
    ją potem dwóch tygodni, zanim wrócą do pełni sił.
    Ten czar działa tylko na rasy używane przez postacie
    graczy (czyli na stworzenia człekokształtne).`,

    "Zjednoczenie":
    `Poziom czaru: K5
    Zasięg: Czarujący
    Czas trwania: 3 pytania
    Wyższe potęgi udzielają odpowiedzi na trzy pytania,
    jakie zada im rzucający. Potęgi nie lubią być ciągle
    wypytywane przez nędznych śmiertelników, więc
    czar nie powinien być rzucany częściej, niż raz na ty-
    dzień lub raz na podobny czas, określony przez Pro-
    wadzącego.
    Prowadzący może zdecydować, że raz na rok Zjedno-
    czenie można rzucić z „podwójną siłą” i zadać sześć
    pytań.`,

    "Czytanie języków":
    `Poziom czaru: M1
    Zasięg: Zasięg wzroku
    Czas trwania: Jeden lub dwa teksty
    Ten czar pozwala magowi odczytywać wskazówki, in-
    strukcje i podobne zapiski, które są zapisane w na-
    wet całkowicie nieznanych językach. Jest szczególnie
    pomocny przy odczytywaniu map prowadzących do
    skarbów.`,

    "Czytanie magii":
    `Poziom czaru: M1
    Zasięg: Zasięg wzroku
    Czas trwania: 2 zwoje lub inne zapiski
    Ten czar pozwala magowi odczytać magiczne zapiski
    na przedmiotach i zwojach. Magiczne pismo nie
    może zostać odczytane bez użycia tego zaklęcia.`,

    "Uśpienie":
    `Poziom czaru: M1
    Zasięg: 240 stóp (72 m)
    Czas trwania: Decyzja Prowadzącego
    Ten czar sprowadza na wrogów magiczny sen. Jego
    skuteczność zależy od ilości Kostek celów.
    Tabela 22: Ilość uśpionych stworzeń
    Kostki celów    Ilość uśpionych
    1 lub mniej     2k6+3
    Od 1+ do 2      2k6
    Od 3+ do 4+1    1k6`,

    "Zablokowanie drzwi":
    `Poziom czaru: M1
    Zasięg: Decyzja Prowadzącego
    Czas trwania: 2k6 tur
    Ten czar magicznie unieruchamia drzwi w jednej po-
    zycji na czas trwania czaru lub do rozproszenia za-
    klęcia. Stworzenia odporne na magię mogą bez wiel-
    kiego wysiłku przełamać czar.`,

    "Zauroczenie osoby":
    `Poziom czaru: M1
    Zasięg: 120 stóp (36 m)
    Czas trwania: Do rozproszenia magii
    Ten czar wpływa na dwunogie stworzenia rozmiaru
    człowieka lub mniejsze, takie jak gobliny czy driady.
    Jeśli uda się rzucić czar (cel ma prawo do rzutu
    obronnego), to stworzenie dostaje się pod wpływ
    czarującego.`,

    "Lewitacja":
    `Poziom czaru: M2
    Zasięg: 20 stóp (6 m)/poziom
    Czas trwania: 10 min/poziom
    Ten czar pozwala magowi unieść się w powietrze
    i poruszać się w górę lub w dół, ale nie zapewnia
    możliwości poruszania się poziomo. Ściana, krawędź
    klifu lub sufit mogą oczywiście zostać użyte, żeby
    przeciągać się na boki.
    Lewitacja pozwala na ruch w tempie 6 stóp na minu-
    tę (60 stóp na turę), a czarujący nie może wznieść się
    wyżej niż na 20 stóp (6 m) na poziom (liczone od po-
    ziomu ziemi w miejscu, gdzie czar został rzucony).
    Ten dystans stosuje się zarówno do ruchu w górę, jak
    i do ruchu w dół w przepaść lub przez szyb w podło-
    dze.`,

    "Magiczny zamek":
    `Poziom czaru: M2
    Zasięg: Bliski
    Czas trwania: Trwały do rozproszenia magii
    Czar działa jak Zablokowanie drzwi, ale trwa aż
    do rozproszenia magii. Stworzenia odporne na magię
    mogą przełamać czar bez wysiłku. Drzwi będzie po-
    trafił otworzyć każdy mag o trzy poziomy potężniej-
    szy od czarującego, podobnie jak każdy, kto użyje
    czaru Otwarcie, w tych wypadkach jednak czar nie
    zostaje trwałe rozproszony.`,

    "Niewidzialność":
    `Poziom czaru: M2
    Zasięg: 240 stóp (72 m)
    Czas trwania: Do rozproszenia magii lub do wykona-
    nia ataku
    Cel czaru, niezależnie, czy to przedmiot, czy osoba,
    staje się niewidzialny (również dla oczu widzących
    w ciemnościach). Jeśli Prowadzący używa niezmie-
    nionych zasad niewidzialności, to w wyniku działania
    czaru niewidzialne stworzenie nie może być atako-
    wane, chyba że znane jest jego przybliżone położe-
    nie. Nawet wtedy wszystkie ataki przeciw niemu wy-
    konywane są z modyfikatorem -4.
    Jeżeli niewidzialne stworzenie zaatakuje, czar się
    kończy. W innym wypadku zaklęcie trwa aż do zdję-
    cia go przez rzucającego albo do użycia Rozprosze-
    nia magii.`,

    "Otwarcie":
    `Poziom czaru: M2
    Zasięg: 60 stóp (18 m)
    Czas trwania: Natychmiastowy
    Ten czar otwiera zamki i odsuwa zasuwy u wszyst-
    kich drzwi, wrót i bram w zasięgu, również tych za-
    mkniętych przy użyciu zwykłej magii.`,

    "Pajęczyna":
    `Poziom czaru: M2
    Zasięg: 30 stóp (9 m)
    Czas trwania: 8 godz.
    Włókna lepkiej pajęczyny wypełniają obszar 10 x 10
    x 20 stóp (3 x 3 x 6 m). Przejście przez nie jest nie-
    zwykle trudne. Stworzenia większe od konia mogą
    przebić się przez nią w dwie rundy. Ludziom zajmuje
    to więcej czasu - prawdopodobnie 3-4 rundy lub
    dłużej, jeśli tak zdecyduje Prowadzący. Użycie po-
    chodni (lub ognistego miecza) skraca czas przejścia
    do jednej rundy.`,

    "Widziadło":
    `Poziom czaru: M2
    Zasięg: 240 stóp (72 m)
    Czas trwania: Do rozproszenia magii lub przejrzenia
    iluzji.
    Ten czar tworzy realistyczną iluzję oddziałującą na
    zmysł wzroku. Widziadło znika, jeśli zostanie do-
    tknięte, ale jeżeli patrzący wierzy, że jest prawdziwe,
    to iluzja może zadawać mu obrażenia.`,

    "Wykrycie myśli (ESP)":
    `Poziom czaru: M2
    Zasięg: 60 stóp (18 m)
    Czas trwania: 2 godziny
    Czarujący może wykrywać myśli innych stworzeń.
    Przed wykrywaniem chronią kamienne ściany o gru-
    bości co najmniej pół metra, jak również nawet naj-
    cieńsza warstwa ołowiu.`,

    "Wykrycie niewidzialnego":
    `Poziom czaru: M2
    Zasięg: 10 stóp (3 m) na poziom rzucającego
    Czas trwania: Godzina
    Czar pozwala czarującemu dostrzec niewidzialne
    stworzenia i przedmioty.`,

    "Błyskawica":
    `Poziom czaru: M3
    Zasięg: 240 stóp (72 m)
    Czas trwania: Natychmiastowy
    Łańcuch błyskawic szeroki na prawie 3 metry i długi
    na 18 metrów wystrzeliwuje z wybranego miejsca.
    Każdy na jego drodze odnosi 1k6 obrażeń na poziom
    czarującego. Rzut obronny chroni przed połową ob-
    rażeń. Błyskawice zawsze osiągają pełne 18 metrów,
    nawet jeśli miałoby to spowodować odbicie się od
    napotkanej przeszkody.`,

    "Kryształowa kula":
    `Poziom czaru: M3
    Zasięg: 60 stóp (18 m)
    Czas trwania: 2 godz.
    Czarujący musi określić, jaki wariant zaklęcia jest
    rzucany. Oba warianty nie działają przez kamienne
    ściany grubości co najmniej pół metra, jak również
    przez nawet najcieńsze warstwy ołowiu.
    1. Czar, rzucony jako Jasnosłyszenie, pozwa-
    la magowi słyszeć przez przeszkody.
    2. Czar, rzucony jako Jasnowidzenie, pozwa-
    la mu widzieć przez przeszkody.`,

    "Kula ognista":
    `Poziom czaru: M3
    Zasięg: 240 stóp (72 m)
    Czas trwania: Natychmiastowy
    Pocisk wystrzeliwuje z palca czarującego, żeby wy-
    buchnąć we wskazanym miejscu, tworząc ognistą
    eksplozję. Promień wybuchu to 6 m, a obrażenia wy-
    noszą 1k6 na każdy poziom czarującego. Udany rzut
    obronny oznacza otrzymanie tylko połowy obrażeń.`,

    "Lot":
    `Poziom czaru: M3
    Zasięg: Dotyk
    Czas trwania: 1k6 tur plus 1 tura/poziom
    Ten czar obdarza mocą latania z prędkością 120 stóp
    na rundę. Prowadzący w tajemnicy losuje dokładny
    czas trwania; gracz nie wie, kiedy czar przestanie
    działać.`,

    "Manipulacja czasem":
    `Poziom czaru: M3
    Zasięg: 240 stóp (72 m)
    Czas trwania: 30 minut
    Czarujący musi określić, którą z wersji czaru rzuca.
    Obie działają w promieniu 90 stóp (27 m) od miej-
    sca, w które zostanie skierowany czar.
    1. Jako Przyspieszenie ten czar sprawia, że
    do 24 stworzeń może poruszać się i atako-
    wać z dwukrotną prędkością.
    2. Jako Spowolnienie ten czar sprawia, że do
    24 stworzeń atakuje i porusza się dwa razy
    wolniej niż zwykle, jeśli nie powiedzie im się
    rzut obronny.`,

    "Niewidzialność, promień 3 m":
    `Poziom czaru: M3
    Zasięg: 240 stóp (72 m)
    Czas trwania: Do zdjęcia czaru lub do wykonania
    ataku
    Tak jak w wypadku czaru Niewidzialność, to zaklęcie
    czyni cel niewidzialnym. Ponadto tworzy w promie-
    niu 3 metrów od niego sferę niewidzialności, która
    porusza się razem z nim. Jeśli Prowadzący używa
    niezmienionych zasad niewidzialności, to w wyniku
    działania czaru niewidzialne stworzenie nie może być
    atakowane, chyba że znane jest jego przybliżone po-
    łożenie. Nawet wtedy wszystkie ataki przeciw niemu
    wykonuje się z modyfikatorem -4.
    Jeżeli niewidzialne stworzenie zaatakuje, czar się
    kończy. W innym wypadku zaklęcie trwa aż do zdję-
    cia go przez rzucającego albo do użycia Rozprosze-
    nia magii.`,
    
    "Ochrona przed pociskami":
    `Poziom czaru: M3
    Zasięg: 30 stóp (9 m)
    Czas trwania: 2 godz.
    Obdarzona czarem osoba staje się odporna na
    wszystkie małe, niemagiczne pociski. Czar wpływa
    tylko na pociski wystrzeliwane przez niemagiczne
    istoty i broń.`,

    "Oddychanie wodą":
    `Poziom czaru: M2
    Zasięg: 30 stóp (9 m)
    Czas trwania: 2 godz.
    Ten czar obdarza zdolnością oddychania pod wodą
    aż upłynie jego czas trwania.`,

    "Rozproszenie magii":
    `Poziom czaru: M3
    Zasięg: 120 stóp (36 m)
    Czas trwania: 10 minut na przedmiot
    Rozproszenia magii można użyć, żeby przerwać dzia-
    łanie większości zaklęć i mocy magicznych.
    Prowadzący może przyjąć, że szansa na skuteczne
    rozproszenie magii zależy od procentowego stosunku
    poziomu rozpraszającego do poziomu (lub liczby Ko-
    stek w przypadku potwora) tego, kto rzucił rozpra-
    szany czar.
    Tak więc mag na szóstym poziomie, próbujący roz-
    proszyć urok rzucony przez maga na poziomie dwu-
    nastym, ma 50% szansy na sukces (6/12=1/2). Gdy-
    by to mag na 12 poziomie rozpraszał czar tego na
    szóstym, szanse na sukces wynosiłyby 200%
    (12/6=2).`,

    "Widzenie w ciemności":
    `Poziom czaru: M3
    Zasięg: Dotyk
    Czas trwania: 1 dzień
    Przez czas trwania czaru, obdarzony jego mocą jest w
    stanie widzieć w całkowitej ciemności. Rzut 1k6
    określa zasięg takiego widzenia.
    Tabela 23: Zasięg widzenia w ciemności
    Rzut    Zasięg widzenia
    1-2     40 stóp (12 m)
    3-4     50 stóp (15 m)
    5-6     60 stóp (18 m)`,

    "Czarodziejskie oko":
    `Poziom czaru: M4
    Zasięg: 240 stóp (72 m)
    Czas trwania: Godzina
    To zaklęcie tworzy niewidzialne magiczne „oko”,
    przez które może patrzeć czarujący. Może on prze-
    mieszczać je w powietrzu z prędkością 120 stóp na
    rundę, jednak oko nie może oddalić się od niego na
    ponad 240 stóp (72 m).`,

    "Drzewozłuda":
    `Poziom czaru: M4
    Zasięg: 240 stóp (72 m)
    Czas trwania: Do rozproszenia magii lub przejrzenia
    iluzji.
    Czar nadaje stu lub mniej stworzeniom wygląd nie-
    szkodliwych drzew. Iluzja jest tak realistyczna, że na-
    wet ktoś przechodzący przez ten „las” nie zauważy
    oszustwa.`,

    "Drzwi przez wymiary":
    `Poziom czaru: M4
    Zasięg: 10 stóp (3 m) – rzucanie, 360 stóp (108 m) –
    teleportacja
    Czas trwania: Natychmiastowy
    Jest to słabszy wariant zaklęcia Teleportacja, uży-
    wany przez mniej potężnych magów. Czarujący może
    bezpiecznie i precyzyjnie teleportować siebie, jakiś
    przedmiot lub inną osobę do wybranego miejsca
    w zasięgu czaru.`,

    "Miraż":
    `Poziom czaru: M4
    Zasięg: 240 stóp (72 m)
    Czas trwania: Aż do dotknięcia przez przeciwnika lub
    zdjęcia czaru.
    To zaklęcie zmienia wygląd okolicy tak, jak zażyczy
    sobie tego czarujący. Może na przykład uczynić ja-
    kieś wzgórze niewidzialnym albo zastąpić je złudze-
    niem lasu.`,

    "Polimorfia":
    `Poziom czaru: M4
    Zasięg: Patrz niżej
    Czas trwania: Patrz niżej
    Czarujący musi określić, którą z wersji czaru rzuca.
    1. Czarujący przyjmuje kształt dowolnego
    stworzenia, uzyskując cechy swojej nowej
    postaci (jak na przykład zdolność do używa-
    nia skrzydeł), ale nie jej Punkty Życia czy
    zdolności bojowe. Może on podnieść klasę
    pancerza czarującego, jeśli ten przemienia
    się w stworzenie o twardej skórze. Szczegóło-
    we działanie czaru zależy od decyzji Prowa-
    dzącego. Ta wersja czaru trwa około godziny
    plus jedną dodatkową godzinę za każdy po-
    ziom czarującego.
    2. Innym wariantem czaru jest przemienienie
    jakiejś innej istoty w inne stworzenie (na
    przykład w smoka, ślimaka, traszkę, czy –
    klasycznie – w żabę). Przemienione stworze-
    nie uzyskuje wszystkie zdolności swojej no-
    wej postaci, ale zachowuje swój umysł
    i Punkty Życia. Tak użyty czar ma zasięg 60
    stóp (18 m) i trwa do rozproszenia magii.`,

    "Rozrost roślin":
    `Poziom czaru: M4
    Zasięg: 120 stóp (36 m)
    Czas trwania: Trwały, do rozproszenia magii
    Pod wpływ tego czaru może dostać się do 300 stóp
    kwadratowych (27 m2). gruntu. Rośliny na tym ob-
    szarze zaczynają nagle rozrastać się w nieprzekra-
    czalny las pełen cierni i pnączy. Czarujący decyduje
    o kształcie zaczarowanego obszaru. Alternatywnie
    (za decyzją Prowadzącego) ten czar może wpłynąć na
    teren 300 × 300 stóp (90 000 stóp kwadratowych),
    czyli 90 × 90 m (8 100 m2).`,

    "Ściana ognia (lodu)":
    `Poziom czaru: M4
    Zasięg: 60 stóp (18 m)
    Czas trwania: Koncentracja
    Rzucający musi określić, którą wersję czaru rzuca.
    1. Czar tworzy ścianę ognia, która utrzymuje
    się, dopóki koncentruje się na niej czarujący.
    Stworzenia z trzema lub mniej Kostkami nie
    mogą przez nią przejść, a żadne stworzenie
    nie potrafi zobaczyć, co jest po jej drugiej
    stronie. Przechodzący przez płomienie otrzy-
    muje 1k6 punktów obrażeń (bez rzutu
    obronnego) lub dwa razy tyle, jeśli jest nie-
    umarłym. Czarujący może stworzyć albo
    prostą ścianę długą na 60 stóp (18 m) i wy-
    soką na 20 stóp (6 m), albo pierścień pło-
    mieni o takiej samej wysokości i o promieniu
    15 stóp (4,5 m).
    2. Inna wersja czaru pozwala stworzyć lodową
    ścianę grubą na 6 stóp (1,8 m). Czarujący
    może stworzyć albo prostą ścianę długą na
    60 stóp (18 m) i wysoką na 20 stóp (6 m),
    albo okrężny mur o takiej samej wysokości
    i o promieniu 15 stóp (4,5 m). Dla stworzeń
    o 3 Kostkach i mniej ściana jest nieprzekra-
    czalna, ale te o 4 Kostkach i więcej mogą
    przebić się przez nią, otrzymując 1k6 punk-
    tów obrażeń (lub 2k6, jeśli stworzenia są po-
    wiązane z żywiołem ognia). W pobliżu ściany
    nie odnoszą skutku czary i magiczne efekty
    związane z ogniem.`,

    "Zamęt":
    `Poziom czaru: M4
    Zasięg: 120 stóp (36 m)
    Czas trwania: 2 godz.
    Ten czar dezorientuje ludzi i potwory, zmuszając je
    do podejmowania losowych działań. Rzuć 2k6, żeby
    określić zachowanie stworzenia:
    Tabela 24: Efekt zamętu
    Rzut    Działanie
    2–5     Atakuje czarującego i jego sojuszników
    6–8     Stoi bezczynnie
    9–12    Atakuje swojego sojusznika
    Efekt zamętu może zmieniać się losowo co około 10
    minut.
    Czar wpływa na 2k6 stworzeń + 1 za każdy poziom
    czarującego powyżej ósmego. Stworzenia z 3 lub
    mniej Kostkami od razu dostają się pod wpływ czaru.
    Stworzenia z 4 lub więcej Kostkami opierają się dez-
    orientacji, aż ta osiągnie pełną moc (co trwa 1k12 mi-
    nut - poziom czarującego), kiedy to mogą wykonać
    rzut obronny. Prędzej czy później i tak dostaną się
    pod wpływ zaklęcia, bo muszą wykonywać kolejne
    rzuty obronne co 10 minut przez dwie godziny – aż
    do końca trwania czaru.`,

    "Zauroczenie potwora":
    `Poziom czaru: M4
    Zasięg: 60 stóp (18 m)
    Czas trwania: Do rozproszenia magii
    Ten czar działa jak Zauroczenie osoby, ale może
    wpływać na potężniejsze potwory. Rzucony na po-
    twory z mniej niż 3 Kostkami, wpływa na 3k6 stwo-
    rzeń.`,

    "Animacja martwego":
    `Poziom czaru: M5
    Zasięg: Decyzja Prowadzącego
    Czas trwania: Trwały
    Ten czar ożywia zmarłych, tworząc szkielety lub
    zombie. Powstaje 1k6 nieumarłych na każdy poziom
    maga powyżej ósmego. Ciała pozostają ożywione aż
    do zniszczenia nieumarłych lub do rozproszenia ma-
    gii.`,

    "Kontakt z zaświatami":
    `Poziom czaru: M5
    Zasięg: Brak
    Czas trwania: Patrz: Tabela 21
    Czarujący łączy się mentalnie z mocami z zaświatów,
    żeby uzyskać potwierdzające lub zaprzeczające odpo-
    wiedzi na pytania, nad którymi rozmyśla. Efekt czaru
    zależy od tego, w jak odległe sfery zaświatów zagłębi
    się mag. Czarujący musi wybrać krąg zaświatów,
    z którym nawiąże kontakt.
    Tabela 21: Kontakt z zaświatami
    Krąg*   Szaleństwo**    Prawda  Fałsz***
    1       1-2             3-11    12-20
    2       1-4             4-13    14-20
    3       1-6             7-16    16-20
    4       1-8             9-17    18-20
    5       1-10            11-18   19-20
    6       1-12            13-19   20
    *Numer kręgu, w który się zagłębisz, oznacza
    również ilość pytań, które możesz zadać.
    **Mag popada w krótkotrwałe szaleństwo. Jego czas
    trwania (w tygodniach) jest równy numerowi kręgu,
    w którym się znajdował.
    ***To szansa na otrzymanie źle zinterpretowanej lub
    fałszywej odpowiedzi.`,

    "Magiczne naczynie":
    `Poziom czaru: M5
    Zasięg: Patrz niżej
    Czas trwania: Patrz niżej
    Ten czar umieszcza siły życiowe, umysł i duszę cza-
    rującego w jakimś przedmiocie (praktycznie dowol-
    nego rodzaju). Ten przedmiot, czyli naczynie, musi
    być w odległości do 30 stóp (9 m) od ciała czarujące-
    go, żeby czar się powiódł.
    Przebywając w naczyniu, mag może opętać inne
    stworzenia, jeśli znajdują się w odległości 180 stóp
    (36 m) od niego i nie powiedzie im się rzut obronny.
    Dusza maga może powrócić do naczynia w dowol-
    nym momencie, a jeśli opętana istota zostanie zabita,
    robi to natychmiastowo. Jeśli ciało maga zostanie
    zniszczone, podczas gdy dusza jest w naczyniu, to
    bezcielesny mag musi w nim pozostać, chociaż wciąż
    ma możliwość opętania innych. Jeśli naczynie
    z esencją maga zostanie zniszczone, dusza przepada.
    Mag może wrócić z naczynia do własnego ciała w do-
    wolnym momencie, kończąc przez to działanie czaru.`,

    "Ogłupienie":
    `Poziom czaru: M5
    Zasięg: 240 stóp (72 m)
    Czas trwania: Trwały do rozproszenia magii
    Ogłupienie to czar, który działa tylko na magów.
    Rzut obronny przeciwko niemu jest wykonywany
    z modyfikatorem -4, a jeśli się nie uda, ofiara traci
    rozum do chwili, w której magia czaru zostanie roz-
    proszona.`,

    "Zawładnięcie potworami":
    `Poziom czaru: M5
    Zasięg: 120 stóp (36 m)
    Czas trwania: Godzina +10 min/poziom
    Czarujący rzuca zaklęcie na 1k4 potwory. Rzut
    obronny jest dozwolony. Zamiast tego czarujący
    może wybrać tylko jedno stworzenie; wtedy rzut
    obronny jest wykonywany z modyfikatorem -2.`,

    "Powiększenie zwierzęcia":
    `Poziom czaru: M5
    Zasięg: 120 stóp (36 m)
    Czas trwania: 2 godz.
    Ten czar sprawia, że 1k6 zwyczajnych stworzeń na-
    tychmiast rośnie, osiągając olbrzymie rozmiary. Za-
    czarowane stworzenia mogą atakować tak, jak ich ol-
    brzymie odpowiedniki. Stworzenia, którym nie uda
    się rzut obronny, atakują i poruszają się dwa razy
    wolniej niż zwykle.`,

    "Przejście w ścianie":
    `Poziom czaru: M5
    Zasięg: 30 stóp (9 m)
    Czas trwania: 30 minut
    Ten czar tworzy dziurę w skale. Powstała dziura lub
    tunel jest głęboka na maksymalnie 10 stóp (3 m) głę-
    bokości i jest dość duża, żeby przeszedł przez nią
    człowiek.`,

    "Przemiana błota w skałę":
    `Poziom czaru: M5
    Zasięg: 120 stóp (36 m)
    Czas trwania: 3k6 dni lub odwrócenie zaklęcia
    Ten czar przemienia albo skałę (i każdą inną formę
    ziemi) w błoto, albo błoto w skałę. Obszar około 300
    × 300 metrów staje się grzęzawiskiem, spowalniają-
    cym ruch idących przez nie o 90%.`,

    "Przywołanie żywiołaka":
    `Poziom czaru: M5
    Zasięg: 240 stóp (72 metry)
    Czas trwania: Do rozproszenia magii
    Mag przywołuje żywiołaka dowolnego żywiołu o 16
    Kostkach i narzuca mu swoją wolę. Jednego dnia
    można przywołać tylko jednego żywiołaka każdego
    rodzaju. Żywiołak jest posłuszny czarującemu tylko
    tak długo, jak długo ten utrzymuje koncentrację. Je-
    śli mag przestanie się skupiać choćby na chwilę, ży-
    wiołak zostanie uwolniony i zaatakuje go.`,

    "Telekineza":
    `Poziom czaru: M5
    Zasięg: 120 stóp (36 m)
    Czas trwania: 6 tur (godzina)
    Czarujący może przemieszczać przedmioty samą siłą
    woli. Może unosić i przemieszczać do 10 kilogramów
    na poziom.`,

    "Teleportacja":
    `Poziom czaru: M5
    Zasięg: Dotyk
    Czas trwania: Natychmiastowy
    Ten czar przenosi czarującego lub inną osobę do zna-
    nego przez maga miejsca (musi znać jego wygląd
    przynajmniej z ilustracji lub z mapy). Im lepiej jest
    ono znane, tym większa szansa powodzenia czaru:
    1. Jeśli czarujący zna miejsce docelowe tylko
    z mapy lub z ilustracji, innymi słowy jego
    wiedza nie pochodzi z własnego doświadcze-
    nia, ma tylko 25% szans na sukces, a porażka
    oznacza śmierć.
    2. Jeśli czarujący widział miejsc docelowe, ale
    nie przyglądał mu się dokładnie, to prawdo-
    podobieństwo błędu wynosi 20%. W wypad-
    ku błędu w 50% przypadków podróżnik
    przybywa 1k10 × 10 stóp (3 m) poniżej za-
    mierzonego miejsca (i ginie, jeśli pojawia się
    wewnątrz jakiegoś ciała stałego). Drugie
    50% błędów prowadzi do pojawienia się
    1k10 × 10 stóp nad wybranym miejscem, co
    prawdopodobnie oznacza śmiertelny upa-
    dek.
    3. Jeśli czarujący zna dobrze miejsce docelowe
    lub uważnie mu się przyjrzał, to istnieje tyl-
    ko 5% szansy na błąd, czyli teleportowanie
    się niżej (1 przypadek na 6) lub wyżej od za-
    mierzonego miejsca. W każdym przypadku
    podróżnik pojawia się w 1k4 × 10 stóp dalej
    od celu.`,

    "Ściana z żelaza (z kamienia)":
    `Poziom czaru: M5
    Zasięg: 60 stóp (18 m)
    Czas trwania: 2 godz. (żelazo) lub trwały (kamień)
    Rzucający musi określić, którą wersję czaru rzuca.
    1. Czar Ściana z żelaza tworzy z powietrza
    żelazną ścianę grubą na 3 stopy (0,9 m) o po-
    wierzchni 500 stóp kwadratowych (45 m2).
    2. Czar Ściana z kamienia tworzy kamienną
    ścianę grubą na 2 stopy (60 cm) o po-
    wierzchni 1000 stóp kwadratowych (90 m2).`,

    "Zabójcza chmura":
    `Poziom czaru: M5
    Zasięg: Bliski
    Czas trwania: Godzina
    Plugawe i trujące opary zbierają się w powietrzu,
    tworząc chmurę o promieniu 15 stóp (4,5 m). Chmu-
    ra porusza się prosto do przodu z szybkością 6 stóp
    na rundę, jeśli nie zmieni tego wiatr. Szczególnie sil-
    ne podmuchy są w stanie rozwiać chmurę, niszcząc
    ją. Ohydna, śmiertelnie trująca mgła jest cięższa od
    powietrza i przez to spływa po schodach i do napo-
    tkanych dołów.
    Czar wpływa tylko na stworzenia z pięcioma lub
    mniej Kostkami.`,

    "Dezintegracja":
    `Poziom czaru: M6
    Zasięg: 60 stóp (18 m)
    Czas trwania: Trwały
    Czarujący wybiera jeden cel, np. drzwi, przechodzą-
    cego wieśniaka lub pomnik, który natychmiast rozsy-
    puje się w pył. Materiały magiczne nie mogą zostać
    zdezintegrowane, a żywe stworzenia (jak wspomnia-
    ny wieśniak) mogą wykonać rzut obronny. Efektu
    Dezintegracji nie można rozproszyć.`,

    "Iluzoryczny duplikat":
    `Poziom czaru: M6
    Zasięg: 240 stóp (72 m)
    Czas trwania: 1 godzina
    Czarujący stwarza obraz swojej postaci w zasięgu co
    najwyżej 240 stóp od siebie. Iluzja nie tylko naśladu-
    je głos i ruchy maga – wszystkie czary rzucane przez
    niego będą wyglądały, jakby rzuciła je jego podobi-
    zna.`,

    "Kontrolowanie pogody":
    `Poziom czaru: M6
    Zasięg: Decyzja Prowadzącego
    Czas trwania: Decyzja Prowadzącego
    Czarujący może przywołać lub powstrzymać deszcz,
    wywołać nadzwyczajnie niskie lub wysokie tempera-
    tury, przywołać lub powstrzymać trąbę powietrzną,
    stworzyć chmury na niebie albo rozegnać je.`,

    "Niewidzialny łowca":
    `Poziom czaru: M6
    Zasięg: Blisko czarującego
    Czas trwania: Do wykonania zadania
    Ten czar przywołuje (albo może stwarza) niewidzial-
    nego łowcę, niewidzialne stworzenie o 8 Kostkach.
    Łowca wykona jedno zadanie zlecone mu przez maga
    niezależnie od tego, ile czasu zajmie lub jak długą
    drogę trzeba będzie przebyć. Łowca nie może zostać
    zniszczony przy użyciu Rozproszenia magii; musi zo-
    stać zabity, żeby przerwał swoje zadanie.`,

    "Poruszenie wody":
    `Poziom czaru: M6
    Zasięg: 240 stóp (72 m)
    Czas trwania: Patrz niżej
    Czarujący musi określić, który z poniższych warian-
    tów czaru rzuca:
    1. Czar obniża poziom wody jezior, rzek, studni i in-
    nych akwenów do połowy normalnej głębokości
    i trwa 10 tur.
    2. Czar tworzy przejście przez wodę głęboką najwyżej
    na 10 stóp (3 m) i trwa 6 tur.`,

    "Poruszenie ziemi":
    `Poziom czaru: M6
    Zasięg: 240 stóp (72 m)
    Czas trwania: Trwały
    Ten czar może być użyty tylko na powierzchni ziemi.
    Pozwala magowi przez godzinę przemieszczać wzgó-
    rza i inne wzniesienia z prędkością 6 stóp na minutę.`,

    "Przemiana kamienia w ciało":
    `Poziom czaru: M6
    Zasięg: 120 stóp (36 m)
    Czas trwania: Trwały do odwrócenia zaklęcia
    Ten czar zamienia ciało w kamień albo kamień w cia-
    ło – zależnie od decyzji czarującego. Rzut obronny
    pozwala ochronić się przed przemianą w kamień, ale
    jeśli się nie powiedzie, ofiara zamienia się w posąg.`,

    "Reinkarnacja":
    `Poziom czaru: M6
    Zasięg: Dotyk
    Czas trwania: Natychmiastowy
    Ten czar przywraca zmarłą postać do życia, ale dusza
    zmarłego pojawia się w nowo powstałym ciele. Nie
    zmienia się osobowość ani światopogląd wskrzesza-
    nego.`,

    "Sfera antymagii":
    `Poziom czaru: M6
    Zasięg: Czarujący
    Czas trwania: 2 godz.
    Niewidzialna sfera mocy, przez którą nie przedostaje
    się magia, otacza czarującego. Czary i inne moce ma-
    giczne nie mogą przedostać się do wnętrza osłony ani
    wydostać się z niej.`,

    "Zaklęcie śmierci":
    `Poziom czaru: M6
    Zasięg: 240 stóp (72 m)
    Czas trwania: Trwały
    W promieniu 240 stóp od miejsca, w które zostało
    rzucone zaklęcie, ginie do 2k8 stworzeń z mniej niż 7
    Kostkami.`
}