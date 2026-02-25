
import { DaySchedule, ChecklistItem, LocationDetail, UsefulLink, EmergencyContact } from './types';

// Google Apps Script URL for Expenses
export const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';
// Optional: Google Sheet URL for direct access (Placeholder)
export const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL || '';

export const PRE_TRIP_NOTES = [
  "河口湖 -5~8°C / 東京 3~13°C",
  "採洋蔥式穿法，室內暖氣強",
  "冬季氣候極機場、室內暖氣強，隨身攜帶護手霜",
  "護照務必每日隨身攜帶"
];

export const TODO_LIST: ChecklistItem[] = [
  { id: 'todo_1', text: 'eSIM (5日)' },
  { id: 'todo_2', text: '高速巴士預約 (東京到河口湖，一個月前)' },
  { id: 'todo_3', text: '高速巴士預約 (御殿場到東京，一個月前)' },
  { id: 'todo_4', text: 'Skyliner 車票' },
  { id: 'todo_5', text: '箱根周遊券' },
  { id: 'todo_6', text: '租車 (已預約 2/28)' },
];

export const PACKING_CARRY_ON: ChecklistItem[] = [
  { id: 'co_2', text: '充電用具 (手機、手錶、行充)' },
  { id: 'co_3', text: '台灣駕照' },
  { id: 'co_4', text: '駕照譯本' },
  { id: 'co_5', text: '護照' },
  { id: 'co_6', text: '信用卡' },
  { id: 'co_7', text: '錢包 (日幣)' },
  { id: 'co_8', text: '耳機' },
  { id: 'co_9', text: '行動電源' },
  { id: 'co_10', text: '保溫杯' },
  { id: 'co_11', text: '牙線棒' },
  { id: 'co_12', text: '護唇膏' },
  { id: 'co_13', text: '墨鏡' },
  { id: 'co_14', text: '防曬' },
];

export const PACKING_CHECKED: ChecklistItem[] = [
  { id: 'ch_1', text: '雨傘、面紙' },
  { id: 'ch_2', text: '口罩、眼藥水' },
  { id: 'ch_3', text: '手機掛繩' },
  { id: 'ch_4', text: '浴巾、毛巾' },
  { id: 'ch_5', text: '破魔矢' },
  { id: 'ch_6', text: '錢包 (台幣)' },
  { id: 'ch_7', text: '換洗衣物 (衣褲鞋襪)' },
  { id: 'ch_8', text: '行李袋 (備用)' },
  { id: 'ch_9', text: '保養品 (卸妝、洗面乳)' },
  { id: 'ch_10', text: '化妝品 (底妝、眼線、口紅)' },
  { id: 'ch_12', text: '護髮、定型液' },
  { id: 'ch_13', text: '牙刷牙膏' },
  { id: 'ch_14', text: '折疊衣架' },
  { id: 'ch_15', text: '髮夾、髮圈、梳子' },
  { id: 'ch_16', text: '睡衣' },
  { id: 'ch_17', text: '藥品 (內外用、痠痛藥)' },
  { id: 'ch_18', text: '小洗衣板' },
  { id: 'ch_19', text: '離子夾' },
  { id: 'ch_20', text: '指甲剪' },
];

export const USEFUL_LINKS: UsefulLink[] = [
  { title: 'Visit Japan Web (入境手續)', url: 'https://vjw-lp.digital.go.jp/zh-hant/' },
  { title: '箱根纜車', url: 'https://www.hakonenavi.jp/hakone-ropeway/' },
  { title: '逆富士預報', url: 'https://fujitiensan.com/kawaguchiko-sakasafuji/' },
  { title: '富士地區巴士', url: 'https://bus.fujikyu.co.jp/rosen/fujigoko' },
  { title: '御殿場 Outlet 地圖', url: 'https://platinumaps.jp/d/premiumoutlets-gotemba?culture=en&floor=2F' },
  { title: '御殿場 Outlet 交通', url: 'https://www.premiumoutlets.co.jp/gotemba/access/' },
  { title: '河口湖 Live Camera', url: 'https://www.town.fujikawaguchiko.lg.jp/info/info.php?if_id=7' },
];

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  { title: '警察', number: '110' },
  { title: '救護/火警', number: '119' },
  { title: '訪日外國人急難熱線 (JNTO)', number: '050-3816-2787', note: '24小時多語種對應' },
];

// 使用 GitHub Raw 連結，這是最穩定的讀取方式
const BASE_AUDIO_URL = 'https://raw.githubusercontent.com/Miyu0603/winter-fuji-hakone-2026-2.0/main/audio';

export const JAPANESE_PHRASES = [
  {
    category: '飯店',
    vocab: [
      { jp: '送迎 (そうげい)', cn: '接送', audio: `${BASE_AUDIO_URL}/Hotel/shuttle_pickup.mp3` },
      { jp: 'シャトルバス', cn: '接駁巴士', audio: `${BASE_AUDIO_URL}/Hotel/shuttle_bus.mp3` },
      { jp: '預かり (あずかり)', cn: '寄放', audio: `${BASE_AUDIO_URL}/Hotel/luggage_storage.mp3` },
      { jp: '門限 (もんげん)', cn: '門禁時間', audio: `${BASE_AUDIO_URL}/Hotel/curfew.mp3` },
      { jp: '河口湖ホテルニューセンチュリー', cn: '河口湖新世紀飯店', audio: `${BASE_AUDIO_URL}/Hotel/hotel_kawaguchiko.mp3` },
      { jp: 'スーパーホテル御殿場II号館', cn: '御殿場2號超級飯店', audio: `${BASE_AUDIO_URL}/Hotel/hotel_gotemba.mp3` },
      { jp: 'スーパーホテル淺草', cn: '淺草超級飯店', audio: `${BASE_AUDIO_URL}/Hotel/hotel_asakusa.mp3` },
    ],
    sentences: [
      { jp: 'すみません、駅まで送迎（そうげい）バス（シャトルバス）をお願いできますか？', cn: '不好意思，可以請你們安排到車站的接駁車嗎？', audio: `${BASE_AUDIO_URL}/Hotel/sentence_request_bus.mp3` },
      { jp: '荷物を預かっていただけますか？', cn: '可以幫我寄放行李嗎？', audio: `${BASE_AUDIO_URL}/Hotel/sentence_store_luggage.mp3` },
      { jp: '何時まで預けることができますか？', cn: '最晚可以寄放到幾點呢？', audio: `${BASE_AUDIO_URL}/Hotel/sentence_storage_time.mp3` },
      { jp: '今天的17時ごろに荷物を取りに来ます。', cn: '我今天下午5點左右會回來拿行李。', audio: `${BASE_AUDIO_URL}/Hotel/sentence_pickup_time.mp3` },
    ]
  },
  {
    category: '租車',
    vocab: [
      { jp: 'レギュラー', cn: '普通汽油', audio: `${BASE_AUDIO_URL}/CarRental/gas_regular.mp3` },
      { jp: 'ハイオク', cn: '高級汽油', audio: `${BASE_AUDIO_URL}/CarRental/gas_high_octane.mp3` },
      { jp: '輕油 (けいゆ)', cn: '柴油', audio: `${BASE_AUDIO_URL}/CarRental/gas_diesel.mp3` },
      { jp: '滿タン (まんたん)', cn: '加滿', audio: `${BASE_AUDIO_URL}/CarRental/gas_full_tank.mp3` },
      { jp: '免責補償 (めんせきほしょう)', cn: '免責補償保險', audio: `${BASE_AUDIO_URL}/CarRental/insurance.mp3` },
      { jp: '運轉免許（うんてんめんきょ）', cn: '駕照', audio: `${BASE_AUDIO_URL}/CarRental/license.mp3` },
      { jp: '滑る（すべる）', cn: '打滑', audio: `${BASE_AUDIO_URL}/CarRental/slip.mp3` },
      { jp: '路面凍結（ろめんとうけつ）', cn: '路面結冰', audio: `${BASE_AUDIO_URL}/CarRental/road_freeze.mp3` },
      { jp: 'スタッドレスタイヤ', cn: '雪胎', audio: `${BASE_AUDIO_URL}/CarRental/studless_tire.mp3` },
    ],
    sentences: [
      { jp: 'この車の油種はレギュラーでいいですか？', cn: '這台車是加 Regular 汽油就可以了嗎？', audio: `${BASE_AUDIO_URL}/CarRental/sentence_gas_type.mp3` },
      { jp: 'この近くにガソリンスタンドはありますか？', cn: '這附近有加油站嗎？', audio: `${BASE_AUDIO_URL}/CarRental/sentence_gas_station.mp3` },
      { jp: 'この時期、道が凍って(こおって)滑る(すべる)ことはありますか？', cn: '這個時期，路面會結冰導致打滑嗎？', audio: `${BASE_AUDIO_URL}/CarRental/sentence_road_condition.mp3` },
      { jp: 'レギュラーを滿タンでお願いします。', cn: '請幫我加滿 Regular。', audio: `${BASE_AUDIO_URL}/CarRental/sentence_fill_up.mp3` },
      { jp: 'この車はスタッドレスタイヤを履いていますか？', cn: '這台車有換上雪胎嗎？', audio: `${BASE_AUDIO_URL}/CarRental/sentence_check_tire.mp3` },
    ]
  },
  {
    category: '聊天與社交',
    vocab: [
      { jp: '絕景 (ぜっけい)', cn: '絕美風景', audio: `${BASE_AUDIO_URL}/Social/view_superb.mp3` },
      { jp: '綺麗 (きれい)', cn: '漂亮、美', audio: `${BASE_AUDIO_URL}/Social/beautiful.mp3` },
      { jp: '地元 (じもと)', cn: '在地、當地', audio: `${BASE_AUDIO_URL}/Social/local.mp3` },
      { jp: '初めて (はじめて)', cn: '第一次', audio: `${BASE_AUDIO_URL}/Social/first_time.mp3` },
      { jp: 'お勧め (おすすめ)', cn: '推薦', audio: `${BASE_AUDIO_URL}/Social/recommendation.mp3` },
    ],
    sentences: [
      { jp: '富士山が真的漂亮呢！這麼壯觀的景象還是第一次見到。', cn: '富士山真的好美喔！我第一次看到這種絕景。', audio: `${BASE_AUDIO_URL}/Social/sentence_fuji_beautiful.mp3` },
      { jp: '這附近有沒有在地人也常去、推薦的餐廳呢？', cn: '這附近有沒有在地人也常去、推薦的餐廳呢？', audio: `${BASE_AUDIO_URL}/Social/sentence_restaurant.mp3` },
      { jp: '我從台灣來的。日本真的很好玩。', cn: '我從台灣來的。日本真的很好玩。', audio: `${BASE_AUDIO_URL}/Social/sentence_from_taiwan.mp3` },
    ]
  },
  {
    category: '地名',
    vocab: [
      { jp: '成田空港', cn: 'なりたくうこう', audio: `${BASE_AUDIO_URL}/Places/place_narita.mp3` },
      { jp: '上野', cn: 'うえの', audio: `${BASE_AUDIO_URL}/Places/place_ueno.mp3` },
      { jp: '東京駅', cn: 'とうきょうえき', audio: `${BASE_AUDIO_URL}/Places/place_tokyo_station.mp3` },
      { jp: '河口湖駅', cn: 'かわぐちこえき', audio: `${BASE_AUDIO_URL}/Places/place_kawaguchiko_st.mp3` },
      { jp: '新世紀ホテル', cn: 'しんせいきほてる', audio: `${BASE_AUDIO_URL}/Places/place_hotel_new_century.mp3` },
      { jp: '金鳥居', cn: 'かなどりい', audio: `${BASE_AUDIO_URL}/Places/place_kanadorii.mp3` },
      { jp: '逆さ富士', cn: 'さかさふじ', audio: `${BASE_AUDIO_URL}/Places/place_sakasa_fuji.mp3` },
      { jp: '忍野八海', cn: 'おしのはっかい', audio: `${BASE_AUDIO_URL}/Places/place_oshino_hakkai.mp3` },
      { jp: '山中湖', cn: 'やまなかこ', audio: `${BASE_AUDIO_URL}/Places/place_yamanakako.mp3` },
      { jp: '新倉山浅間公園', cn: 'あらくらやませんげんこうえん', audio: `${BASE_AUDIO_URL}/Places/place_arakurayama.mp3` },
      { jp: '大石公園', cn: 'おおいしこうえん', audio: `${BASE_AUDIO_URL}/Places/place_oishi_park.mp3` },
      { jp: '西湖いやしの里根場', cn: 'さいこいやしのさとねんば', audio: `${BASE_AUDIO_URL}/Places/place_saiko_iyashi.mp3` },
      { jp: '中ノ倉峠', cn: 'なかのくらとうげ', audio: `${BASE_AUDIO_URL}/Places/place_nakanokura.mp3` },
      { jp: 'ほうとう不動', cn: 'ほうとうふどう', audio: `${BASE_AUDIO_URL}/Places/place_houtou_fudo.mp3` },
      { jp: 'ほうとう蔵 歩成', cn: 'ほうとうぐら ふなり', audio: `${BASE_AUDIO_URL}/Places/place_houtou_funari.mp3` },
      { jp: '御殿場駅', cn: 'ごてんばえき', audio: `${BASE_AUDIO_URL}/Places/place_gotemba_st.mp3` },
      { jp: '彫刻の森美術館', cn: 'ちょうこくのもりびじゅつかん', audio: `${BASE_AUDIO_URL}/Places/place_hakone_museum.mp3` },
      { jp: '強羅駅', cn: 'ごうらえき', audio: `${BASE_AUDIO_URL}/Places/place_gora_st.mp3` },
      { jp: '早雲山', cn: 'そううんざん', audio: `${BASE_AUDIO_URL}/Places/place_sounzan.mp3` },
      { jp: '大涌谷', cn: 'おおわくだに', audio: `${BASE_AUDIO_URL}/Places/place_owakudani.mp3` },
      { jp: '桃源台港', cn: 'とうげんだいこう', audio: `${BASE_AUDIO_URL}/Places/place_togendai.mp3` },
      { jp: '箱根海賊船', cn: 'はこねかいぞくせん', audio: `${BASE_AUDIO_URL}/Places/place_hakone_ship.mp3` },
      { jp: '元箱根港', cn: 'もとはこねこう', audio: `${BASE_AUDIO_URL}/Places/place_motohakone.mp3` },
      { jp: '箱根神社', cn: 'はこねじんじゃ', audio: `${BASE_AUDIO_URL}/Places/place_hakone_shrine.mp3` },
      { jp: '御殿場プレミアム・アウトレット', cn: 'ごてんばぷれみあむあうとれっと', audio: `${BASE_AUDIO_URL}/Places/place_gotemba_outlet.mp3` },
      { jp: '炭焼き餐廳さわやか', cn: 'すみやきれすとらんさわやか', audio: `${BASE_AUDIO_URL}/Places/place_sawayaka.mp3` },
      { jp: '淺草', cn: 'あさくさ', audio: `${BASE_AUDIO_URL}/Places/place_asakusa.mp3` },
      { jp: '淺草寺', cn: 'せんそうじ', audio: `${BASE_AUDIO_URL}/Places/place_sensoji.mp3` },
      { jp: '仲見世通り', cn: 'なかみせどおり', audio: `${BASE_AUDIO_URL}/Places/place_nakamise.mp3` },
      { jp: '米久本店', cn: 'よねきゅうほんてん', audio: `${BASE_AUDIO_URL}/Places/place_yonekyu.mp3` },
      { jp: '合羽橋道具街', cn: 'かっぱばしどうぐがい', audio: `${BASE_AUDIO_URL}/Places/place_kappabashi.mp3` },
      { jp: '富士新世紀ホテル', cn: 'ふじしんせいきほてる', audio: `${BASE_AUDIO_URL}/Places/place_fuji_new_century.mp3` },
      { jp: 'スーパーホテル御殿場２號館', cn: '御殿場2號超級飯店', audio: `${BASE_AUDIO_URL}/Places/place_super_hotel_gotemba.mp3` },
      { jp: 'スーパーホテル淺草', cn: '淺草超級飯店', audio: `${BASE_AUDIO_URL}/Places/place_super_hotel_asakusa.mp3` },
    ]
  }
];

export const LOCATION_DETAILS: Record<string, LocationDetail> = {
  'hotel_new_century': {
    id: 'hotel_new_century',
    title: '河口湖新世紀飯店',
    description: '位於河口湖畔的溫泉飯店，所有客房均面湖，可一覽富士山與河口湖的壯麗景色。提供日式傳統服務與懷石料理。',
    address: '山梨縣南都留郡富士河口湖町くぬぎ平180-1',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+New+Century+Kawaguchiko',
    websiteUrl: 'http://www.hotel-newcentury.com/',
    carNaviPhone: '0555-72-1422'
  },
  'super_hotel_gotemba': {
    id: 'super_hotel_gotemba',
    title: '御殿場2號超級飯店 (Super Hotel)',
    description: '位於御殿場市中心的高CP值商務飯店，以提供天然溫泉「御胎內溫泉」與健康營養的免費早餐聞名。距離御殿場 Outlet 與車站皆便利。',
    address: '靜岡縣御殿場市東田中1029-1',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Super+Hotel+Gotemba+2',
    websiteUrl: 'https://www.superhotel.co.jp/s_hotels/gotemba2/',
    carNaviPhone: '0550-84-9000'
  },
  'skyliner': {
    id: 'skyliner',
    title: '京成 Skyliner',
    description: '連接成田機場與上野/日暮里最快速的交通工具，全車對號座，提供舒適快捷的移動體驗。',
    websiteUrl: 'https://www.keisei.co.jp/keisei/tetudou/skyliner/tc/traffic/skyliner.php'
  },
  'toyota_rentacar': {
    id: 'toyota_rentacar',
    title: '租車預約 (トヨタレンタカー)',
    description: '於富士河口湖店取車自駕，探索富士五湖地區。請務必攜帶台灣駕照正本與日文譯本。',
    address: '山梨縣南都留郡富士河口湖町船津4657',
    mapUrl: 'https://maps.app.goo.gl/hZUyWUYCn3tZPokXA',
    carNaviPhone: '0555-72-1100',
    websiteUrl: 'https://www.tabirai.net/car/yamanashi/company/toyota/branch/?PID=3574',
    reservation: {
      id: '119031426',
      sections: [
        {
          title: '憑證代碼 ACCESS CODE',
          items: [
            { label: '預約編號 NO.', value: '***' },
            { label: '查詢密碼 PW.', value: '***' },
          ]
        },
        {
          title: '時程安排 SCHEDULE',
          items: [
            { label: '取車時間', value: '2/28 (六) 09:30', isFullWidth: true },
            { label: '還車時間', value: '2/28 (六) 20:00', isFullWidth: true },
          ]
        },
        {
          title: '車輛配置 VEHICLE',
          items: [
            { label: '車型等級', value: 'C1クラス_S2 (Toyota)' },
            { label: '基本配備', value: '禁菸車 / 導航系統' },
            { label: '駕駛人', value: '***', isFullWidth: true },
          ]
        },
        {
          title: '費用總計 TOTAL',
          items: [
            { label: '合計費用', value: '8,250 JPY' },
            { label: '支付方式', value: '現場支付' },
          ]
        }
      ]
    }
  },
  'golden_torii': {
    id: 'golden_torii',
    title: '富士山金鳥居',
    description: '位於富士吉田市區的標誌性景點（本町通），巨大的金色鳥居跨越道路，將商店街與背景的富士山框成一幅畫，是熱門的攝影地標。',
    address: '山梨縣富士吉田市上吉田',
    mapUrl: 'https://maps.app.goo.gl/zh8fMj4S3hbSNnVn7',
    websiteUrl: 'https://tokyo.letsgojp.com/archives/745170/'
  },
  'oshino_hakkai': {
    id: 'oshino_hakkai',
    title: '忍野八海',
    description: '位於山中湖和河口湖之間的忍野村，由富士山融雪水經地下熔岩層過濾後湧出的八個清澈池塘組成，被列為國家天然紀念物。',
    address: '山梨縣南都留郡忍野村忍草',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Oshino+Hakkai',
    websiteUrl: 'https://yamanakako.info/8lakes_top.php',
    carNaviPhone: '0555-84-3111'
  },
  'yamanakako': {
    id: 'yamanakako',
    title: '山中湖',
    description: '富士五湖中面積最大、海拔最高的湖泊。以能看見「鑽石富士」的景象聞名，周邊有豐富的自然景觀與咖啡廳。',
    address: '日本山梨縣南都留郡山中湖村',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Lake+Yamanaka',
    websiteUrl: 'http://www.yamanakako.gr.jp/',
    carNaviPhone: '0555-62-3100'
  },
  'chureito_pagoda': {
    id: 'chureito_pagoda',
    title: '新倉山淺間公園',
    description: '世界知名的富士山觀景點，可以同時拍下五重塔（忠靈塔）、櫻花（季節性）與富士山的經典畫面，需攀登約400階樓梯。',
    address: '山梨縣富士吉田市新倉3353-1',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Chureito+Pagoda',
    websiteUrl: 'https://andyventure.com/japan-arakurayama-sengen-park/',
    carNaviPhone: '0555-23-2697'
  },
  'oishi_park': {
    id: 'oishi_park',
    title: '河口湖大石公園',
    description: '位於河口湖北岸，四季有不同的花卉盛開。著名的「花街道」全長350公尺，是眺望富士山的絕佳地點。',
    address: '山梨縣南都留郡富士河口湖町大石2585',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Oishi+Park',
    websiteUrl: 'https://sliptojapan.com/fujisan-oishi-park/',
    carNaviPhone: '0555-76-8230'
  },
  'iyashi_no_sato': {
    id: 'iyashi_no_sato',
    title: '西湖療愈之里根場',
    description: '重現了20棟茅草屋頂的傳統村落，被譽為「富士山下的合掌村」。可在此體驗日本傳統工藝與穿著和服拍照。',
    address: '山梨縣南都留郡富士河口湖町西湖根場2710',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Saiko+Iyashi-no-Sato+Nenba',
    websiteUrl: 'https://saikoiyashinosatonenba.jp/',
    carNaviPhone: '0555-20-4677'
  },
  'nakanokura_pass': {
    id: 'nakanokura_pass',
    title: '中ノ倉峠',
    description: '位於本栖湖畔的展望台，是日幣千圓紙鈔背面富士山圖案的取景地（逆富士）。需稍微登山健行才能抵達。',
    address: '山梨縣南巨摩郡身延町中ノ倉川尻2926',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Nakanokura+Pass+Observation+Point',
    websiteUrl: 'https://kanto.env.go.jp/to_2016/post_78.html',
    carNaviPhone: '0555-87-2518'
  },
  'hakone_museum': {
    id: 'hakone_museum',
    title: '箱根雕刻森林美術館',
    description: '日本第一座戶外美術館，在廣大的綠地中展示約120件近現代雕刻家作品。著名的「鴻運交響雕塑」塔樓內部彩繪玻璃令人驚艷。',
    address: '神奈川縣足柄下郡箱根町二ノ平1121',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hakone+Open-Air+Museum',
    websiteUrl: 'https://www.hakone-oam.or.jp/'
  },
  'owakudani': {
    id: 'owakudani',
    title: '大涌谷',
    description: '約3000年前箱根火山爆發後形成的火山口遺跡，至今仍不斷噴發硫磺蒸氣。特產是用溫泉煮熟的「黑蛋」，傳說吃一顆能延壽七年。',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Owakudani',
    websiteUrl: 'http://www.owakudani.com/'
  },
  'pirate_ship': {
    id: 'pirate_ship',
    title: '箱根海賊觀光船',
    description: '航行於蘆之湖的觀光遊覽船，以中世紀歐洲戰艦為原型設計。可在船上飽覽蘆之湖風光與遠處的富士山。',
    address: '神奈川縣足柄下郡箱根町元箱根164',
    mapUrl: 'https://maps.app.goo.gl/dY286vdxb3APZnAZ8',
    websiteUrl: 'https://www.hakonenavi.jp/international/tw/station/togendai'
  },
  'hakone_shrine': {
    id: 'hakone_shrine',
    title: '箱根神社',
    description: '建於蘆之湖畔，擁有超過1200年歷史。矗立在湖水中的「平和的鳥居」是其標誌性景觀，充滿神秘莊嚴的氛圍。',
    address: '神奈川縣足柄下郡箱町元箱根80-1',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hakone+Shrine',
    websiteUrl: 'https://hakonejinja.or.jp/'
  },
  'gotemba_outlet': {
    id: 'gotemba_outlet',
    title: '御殿場 Premium Outlet',
    description: '日本國內規模最大的暢貨中心，擁有約290家店鋪。因為能一邊購物一邊眺望富士山而廣受歡迎。',
    address: '靜岡縣御殿場市深澤1312',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Gotemba+Premium+Outlets',
    websiteUrl: 'https://www.premiumoutlets.co.jp/gotemba/'
  },
  'asakusa_sensoji': {
    id: 'asakusa_sensoji',
    title: '淺草寺',
    description: '東京都內最古老的寺廟，供奉聖觀音。入口的「雷門」掛著巨大的紅燈籠，是東京最著名的地標之一。',
    address: '東京都台東區淺草2-3-1',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Senso-ji',
    websiteUrl: 'https://www.senso-ji.jp/'
  },
  'nakamise': {
    id: 'nakamise',
    title: '仲見世商店街',
    description: '連接雷門與淺草寺本堂的參道商店街，長約250公尺。兩旁排列著販賣人形燒、仙貝等傳統小吃與紀念品的店鋪。',
    address: '東京都台東區淺草',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Nakamise-dori+Street',
    websiteUrl: 'https://www.facebook.com/AsakusaNakamise/?ref=embed_page#'
  },
  'super_hotel_asakusa': {
    id: 'super_hotel_asakusa',
    title: '淺草超級飯店 (Super Hotel)',
    description: '位於淺草寺附近的連鎖商務飯店，地理位置極佳，適合早晨參拜淺草寺與探索下町文化。',
    address: '東京都台東區淺草2-33-1',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Super+Hotel+Asakusa',
    websiteUrl: 'https://www.superhotel.co.jp/s_hotels/asakusa/'
  },
  'yonekyu_sukiyaki': {
    id: 'yonekyu_sukiyaki',
    title: '壽喜燒 米久本店',
    description: '明治時代開業的百年老店，以優質的近江牛壽喜燒聞名。店內裝潢古色古香，入場時會鳴鼓歡迎。建議提早排隊。',
    address: '東京都台東區淺草2-17-10',
    mapUrl: 'https://maps.app.goo.gl/3A5jF3fS3hbSNnVn7',
    websiteUrl: 'https://tabelog.com/tokyo/A1311/A131102/13003667/'
  },
  'kappabashi_street': {
    id: 'kappabashi_street',
    title: '合羽橋道具街',
    description: '日本最大的餐飲廚具商業街，長約800公尺，有超過170家店舖販售刀具、餐具、食品模型及各式專業廚房設備。',
    address: '東京都台東區松が谷',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kappabashi+Dougu+Street',
    websiteUrl: 'https://www.kappabashi.or.jp/'
  },
  'february_kitchen': {
    id: 'february_kitchen',
    title: 'FEBRUARY KITCHEN',
    description: '位於淺草的人氣咖啡廳，以其著名的焦 caramel 布丁與豐盛的早餐拼盤聞名。店內裝修走復古風格，氛圍溫馨，是享受悠閒早晨的首選。',
    address: '東京都台東區淺草2-29-6',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=FEBRUARY+KITCHEN+Asakusa',
    websiteUrl: 'https://www.instagram.com/february_kitchen/'
  },
  'bus_to_museum': {
    id: 'bus_to_museum',
    title: '巴士轉乘資訊 (御殿場 → 彫刻の森)',
    description: "10:50 → 11:36 (46分)\n總車資：1300円\n轉乘：1回",
    transitLegs: [
      {
        type: 'bus',
        transport: '小田急箱根高速巴士 [W線]',
        depTime: '10:50', depStop: '御殿場駅',
        arrTime: '11:11', arrStop: '箱根桃源台',
        details: ['往箱根桃源台', '💰 730円', '下車：箱根仙石']
      },
      {
        type: 'walk',
        transport: '步行轉乘',
        depTime: '11:11', depStop: '箱根仙石',
        arrTime: '11:22', arrStop: '仙石',
        details: ['同站或對面', '⏱️ 11 分鐘', '前往：仙石']
      },
      {
        type: 'bus',
        transport: '箱根登山巴士 [M線]',
        depTime: '11:22', depStop: '仙石',
        arrTime: '11:36', arrStop: '彫刻的森美術館',
        details: ['往天悠', '💰 570円']
      }
    ]
  }
};

export const ITINERARY: DaySchedule[] = [
  {
    date: '2/27',
    weekday: '星期五',
    title: '抵達日本 → 河口湖溫泉',
    accommodation: '河口湖新世紀飯店',
    accommodationMapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+New+Century+Kawaguchiko',
    mapUrl: 'https://www.google.com/maps/dir/Narita+Airport/Ueno+Station/Tokyo+Station/Kawaguchiko+Station/Hotel+New+Century',
    events: [
      { time: '10:35', description: '抵達成田機場並辦理入境手續', note: '預計 1 小時' },
      { time: '11:39', description: '搭乘 Skyliner 前往上野', note: '下一班 11:59', locationId: 'skyliner', isHighlight: true },
      { time: '12:30', description: '抵達上野站，轉乘 JR 山手線至東京車站' },
      { time: '13:00', description: '抵達東京車站，購買午餐' },
      { time: '14:10', description: '搭乘高速巴士前往河口湖站', isHighlight: true, note: '預計 16:10 抵達' },
      { time: '16:30', description: '抵達河口湖站，聯繫飯店接駁' },
      { time: '17:00', description: 'Check-in 新世紀飯店，整理行李', locationId: 'hotel_new_century' },
      { time: '18:00', description: '前往富士山金鳥居一帶逛街+晚餐', locationId: 'golden_torii' },
      { time: '晚上', description: '回飯店泡湯' },
    ]
  },
  {
    date: '2/28',
    weekday: '星期六',
    title: '河口湖景點一日自駕',
    accommodation: '河口湖新世紀飯店',
    accommodationMapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+New+Century+Kawaguchiko',
    mapUrl: 'https://www.google.com/maps/dir/Hotel+New+Century/Toyota+Rent+A+Car+Kawaguchiko/Oshino+Hakkai/Yamanakako/Chureito+Pagoda/Oishi+Park/Saiko+Iyashi-no-Sato+Nenba/Nakanokura+Pass/Hotel+New+Century',
    events: [
      { time: '06:30', description: '於飯店房間內或湖畔看逆富士', note: '早起限定美景' },
      { time: '08:30', description: '享用飯店早餐' },
      { time: '09:30', description: '前往河口湖站租車', note: 'トヨタレンタカー (Toyota)', locationId: 'toyota_rentacar' },
      { time: '09:50', description: '忍野八海', note: '停留 40 分鐘', locationId: 'oshino_hakkai' },
      { time: '10:50', description: '山中湖 + 咖啡廳/點心', locationId: 'yamanakako' },
      { time: '12:20', description: '新倉山淺間公園', note: '停留 1 小時', locationId: 'chureito_pagoda' },
      { time: '14:00', description: '大石公園 (河口湖北岸)', note: '停留 30 分鐘 (若視野不佳則捨棄此景點)', locationId: 'oishi_park' },
      { time: '15:00', description: '西湖療愈之里根場', note: '停留 1 小時', locationId: 'iyashi_no_sato' },
      { time: '16:30', description: '本栖湖 中ノ倉峠 (千圓鈔風景)', note: '最晚停留至17:40（預計日落時間）', locationId: 'nakanokura_pass' },
      { time: '18:00', description: '返回河口湖站還車（最晚還車時間 20:00）' },
    ]
  },
  {
    date: '3/01',
    weekday: '星期日',
    title: '箱根經典環線一日遊',
    accommodation: '御殿場2號超級飯店',
    accommodationMapUrl: 'https://www.google.com/maps/search/?api=1&query=Super+Hotel+Gotemba+2',
    mapUrl: 'https://www.google.com/maps/dir/Hotel+New+Century/Gotemba+Station/Hakone+Open-Air+Museum/Owakudani/Hakone+Pirate+Ship/Hakone+Shrine/Super+Hotel+Gotemba+2',
    events: [
      { time: '07:30', description: '享用飯店早餐並辦理退房', note: '新世紀飯店' },
      { time: '08:30', description: '前往河口湖站', note: '詢問飯店接駁' },
      { time: '09:00', description: '搭乘富士急巴士前往御殿場站', isHighlight: true, note: '預計 10:30 抵達' },
      { time: '10:30', description: '抵達御殿場站', note: '於箱根乙女口確認寄放行李' },
      { time: '10:50', description: '搭乘巴士至箱根雕刻森林美術館', locationId: 'bus_to_museum' },
      { time: '11:36', description: '箱根雕刻森林美術館', locationId: 'hakone_museum', note: '預計停留 1.5 - 2 小時' },
      { time: '13:30', description: '搭車至強羅站', note: '準備換乘纜車' },
      { time: '13:45', description: '搭乘箱根登山纜車至早雲山', note: '纜車段落開始' },
      { time: '14:00', description: '換乘箱根空中纜車', note: '前往大涌谷' },
      { time: '14:20', description: '大涌谷短暫停留', locationId: 'owakudani', note: '最多停留 20 分鐘' },
      { time: '15:00', description: '抵達桃源台港 乘坐箱根海賊觀光船', locationId: 'pirate_ship' },
      { time: '15:45', description: '抵達元箱根港', note: '下船前往景點' },
      { time: '16:00', description: '參拜箱根神社', locationId: 'hakone_shrine' },
      { time: '17:00', description: '搭乘巴士返回御殿場站', note: '預計 18:00 抵達' },
      { time: '18:00', description: '抵達御殿場站 領取行李' },
      { time: '18:30', description: '御殿場2號超級飯店 Check-in', locationId: 'super_hotel_gotemba' },
      { time: '19:30', description: '飯店附近晚餐', note: '結束精實的一天' },
    ]
  },
  {
    date: '3/02',
    weekday: '星期一',
    title: '御殿場 Outlet → 淺草',
    accommodation: '淺草超級飯店',
    accommodationMapUrl: 'https://www.google.com/maps/search/?api=1&query=Super+Hotel+Asakusa',
    mapUrl: 'https://www.google.com/maps/dir/Super+Hotel+Gotemba+2/Gotemba+Premium+Outlets/Asakusa+Station/Senso-ji/Super+Hotel+Asakusa',
    events: [
      { time: '09:00', description: '享用早餐，辦理退房' },
      { time: '10:00', description: '御殿場 Outlet 購物', locationId: 'gotemba_outlet' },
      { time: '12:00', description: '御殿場 Outlet さわやか漢堡排', note: '漢堡排名店' },
      { time: '13:00', description: 'Outlet 繼續購物' },
      { time: '16:30', description: '搭乘高速巴士返回東京', isHighlight: true, note: '預計 18:10 抵達東京' },
      { time: '18:10', description: '抵達東京站，轉車前往淺草' },
      { time: '18:40', description: '淺草超級飯店辦理入住', locationId: 'super_hotel_asakusa' },
      { time: '19:00', description: '淺草周邊逛街', note: 'GU、UQ、唐吉訶德' },
    ]
  },
  {
    date: '3/03',
    weekday: '星期二',
    title: '淺草散策 → 歸國',
    mapUrl: 'https://www.google.com/maps/dir/Super+Hotel+Asakusa/Senso-ji/Yonekyu+Sukiyaki/Kappabashi+Dougu+Street/Ueno+Station/Narita+Airport',
    events: [
      { time: '09:00', description: '退房，行李先寄放飯店', locationId: 'super_hotel_asakusa' },
      { time: '09:30', description: '早餐 - FEBRUARY KITCHEN', locationId: 'february_kitchen' },
      { time: '10:00', description: '淺草寺參拜', locationId: 'asakusa_sensoji' },
      { time: '11:00', description: '仲見世商店街散策', locationId: 'nakamise' },
      { time: '12:00', description: '午餐：壽喜燒 米久本店', note: '提前排隊，百年老店', locationId: 'yonekyu_sukiyaki' },
      { time: '13:30', description: '合羽橋道具街周邊散步', locationId: 'kappabashi_street' },
      { time: '16:30', description: '回飯店取行李', note: '最晚離開淺草時間 16:45' },
      { time: '17:00', description: '抵達上野站' },
      { time: '17:20', description: '搭乘 Skyliner 前往成田機場 (NRT)', isHighlight: true, note: '預計 18:03 抵達' },
      { time: '18:03', description: '抵達成田機場辦理登機' },
      { time: '20:25', description: '搭機返回桃園', isHighlight: true, note: '23:30 抵達台灣' },
    ]
  }
];
