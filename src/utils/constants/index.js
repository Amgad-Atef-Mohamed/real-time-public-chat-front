const COOKIES_KEYS = {
  TOKEN: 'TK',
  PLAIN_USER: 'US',
};

const USER_ROLES = {
  ADMIN: 'admin',
  CUSTOMER: 'customer',
  WORKER: 'worker',
};

const USER_TARGETS = {
  customer: {
    ar: 'العملاء',
    en: 'customers',
  },
  worker: {
    ar: 'الفنيين',
    en: 'workers',
  },
};

const OPERATING_SYSTEMS = {
  android: {
    ar: 'أندرويد',
    en: 'android',
  },
  ios: {
    ar: 'أي أو أس',
    en: 'ios',
  },
};

const CONFIRM_CHOICE = {
  true: {
    ar: 'نعم',
    en: 'Yes',
  },
  false: {
    ar: 'لا',
    en: 'No',
  },
};

const FIELDS = {
  plumbing: {
    ar: 'سباكة',
    en: 'Plumbing',
  },
  electrical: {
    ar: 'كهرباء',
    en: 'Electrical',
  },
  'air-conditioning': {
    ar: 'تكييف',
    en: 'Air conditioning',
  },
  'satellite-tv': {
    ar: 'ستلايات',
    en: 'Satellite TV',
  },
  'furniture-transportation': {
    ar: 'نقل أثاث',
    en: 'Furniture transportation',
  },
  'home-appliances': {
    ar: 'أجهزة منزلية',
    en: 'Home appliances',
  },
  carpentry: {
    ar: 'نجارة',
    en: 'Carpentry',
  },
  painting: {
    ar: 'دهان',
    en: 'Painting',
  },
  cleaning: {
    ar: 'تنظيف و ابادة حشرات',
    en: 'Cleaning and Bug-extermination',
  },
  'water-saving': {
    ar: 'ترشيد مياه',
    en: 'Water Saving',
  },
  paved: {
    ar: 'تبليط',
    en: 'Paved',
  },
  cameras: {
    ar: 'كاميرات',
    en: 'Cameras',
  },
  mobiles: {
    ar: 'جوالات',
    en: 'Mobiles',
  },
  reconditioning: {
    ar: 'ترميم',
    en: 'reconditioning',
  },
  parquet: {
    ar: 'ارضية خشبية',
    en: 'parquet',
  },
  'furniture-upholstery': {
    ar: 'لمفروشات والأثاث',
    en: 'furniture-upholstery',
  },
  aluminum: {
    ar: 'الألومنيوم',
    en: 'aluminum',
  },
  construction: {
    ar: 'اعمال بناء',
    en: 'construction',
  },
  'gypsum-board': {
    ar: 'ألواح الجبس',
    en: 'gypsum-board',
  },
  elevadores: {
    ar: 'المصاعد',
    en: 'elevadores',
  },
};

const RATINGS = {
  1: {
    ar: 'أقل من 1',
    en: 'less than 1',
  },
  2: {
    ar: 'أقل من 2',
    en: 'less than 2',
  },
  3: {
    ar: 'أقل من 3',
    en: 'less than 3',
  },
  4: {
    ar: 'أقل من 4',
    en: 'less than 4',
  },
  5: {
    ar: 'أقل من 5',
    en: 'less than 5',
  },
};

const CITIES = {
  Jeddah: {
    ar: 'جدة',
    en: 'Jeddah',
  },
  Mecca: {
    ar: 'مكة',
    en: 'Mecca',
  },
  Riyadh: {
    ar: 'الرياض',
    en: 'Riyadh',
  },
  Medina: {
    ar: 'المدينة المنورة',
    en: 'Medina',
  },
  Dammam: {
    ar: 'الدمام',
    en: 'Dammam',
  },
  'Al Khobar': {
    ar: 'الخبر',
    en: 'Al Khobar',
  },
  Dhahran: {
    ar: 'الظهران',
    en: 'Dhahran',
  },
  'Al Ahsa': {
    ar: 'الأحساء',
    en: 'Al Ahsa',
  },
  '': {
    ar: 'لا يوجد مدينة',
    en: 'city not exist',
  },
};

const USER_STATUSES = [
  {
    filterKey: 'suspended',
    value: 'true',
    name: 'suspended',
    ar: 'متوقف',
    en: 'Suspended',
  },
  {
    filterKey: 'suspended',
    value: 'false',
    name: 'notSuspended',
    ar: 'غير متوقف',
    en: 'Not Suspended',
  },
  {
    filterKey: 'active',
    value: 'true',
    name: 'active',
    ar: 'نشط',
    en: 'ِActive',
  },
  {
    filterKey: 'active',
    value: 'false',
    name: 'notActive',
    ar: 'غير نشط',
    en: 'ِNot Active',
  },
];

const REQUESTS_STATUSES = {
  pending: {
    ar: 'في انتظار اعتماد الطلب',
    en: 'Pending',
    useInFilterRequestsByStatus: true,
  },
  canceled: {
    ar: 'ملغى',
    en: 'Canceled',
    useInFilterRequestsByStatus: true,
  },
  done: {
    ar: 'مكتمل',
    en: 'Done',
    useInFilterRequestsByStatus: true,
  },
  active: {
    ar: 'نشط',
    en: 'Active',
    useInFilterRequestsByStatus: true,
  },
  'timed-out': {
    ar: 'الغي لنفاذ الوقت',
    en: 'Timed out',
    useInFilterRequestsByStatus: true,
  },
  reviewed: {
    ar: 'تم تقييمه',
    en: 'Reviewed',
    useInFilterRequestsByStatus: true,
  },
  postponed: {
    ar: 'مؤجل',
    en: 'Postponed',
    useInFilterRequestsByStatus: true,
  },
  postponedDone: {
    ar: 'طلبات مؤجله ثم اكتملت',
    en: 'PostponedDone',
    useInFilterRequestsByGroupedStatus: true,
  },
  canceledDone: {
    ar: 'طلبات ملفيه ثم اكتملت',
    en: 'CanceledDone',
    useInFilterRequestsByGroupedStatus: true,
  },
  cancelledThenActive: {
    ar: 'طلبات ملفيه ثم تم تنشيطها',
    en: 'CanceledActive',
    useInFilterRequestsByGroupedStatus: true,
  },
  contactYou: {
    ar: 'ابشر بنتواصل معك',
    en: 'Great! we will contact you soon',
  },
};

const TICKETS_STATUS = {
  Open: {
    ar: 'جارية',
    en: 'Open',
  },
  Solving: {
    ar: 'جاري الحل',
    en: 'Solving',
  },
  Solved: {
    ar: 'تم الحل',
    en: 'Solved',
  },
};

const PAYMENT_STATUS = {
  true: {
    ar: 'تم الدفع',
    en: 'Done',
  },
  false: {
    ar: 'لم يتم الدفع',
    en: 'Not paid',
  },
};

const PAYMENT_METHOD = {
  cash: {
    ar: 'نقدي',
    en: 'Cash',
  },
  creditcard: {
    ar: 'كرديت كارد',
    en: 'Credit Card',
  },
  applepay: {
    ar: 'محفظة ابل',
    en: 'Apple Pay',
  },
  stcpay: {
    ar: 'Stc Pay',
    en: 'Stc Pay',
  },
};

const CANCELLATION_REASONS = {
  cancelledByAdmin: {
    ar: 'تم الإلغاء من قبل المشرف',
    en: 'Cancelled by admin',
  },
  insufficientAppliedTechnicians: {
    ar: 'لا يوجد عدد كافي من الفنيين المقدمين',
    en: 'No enough technicians applied',
  },
  justCheckingTheApp: {
    ar: 'تجربة التطبيق',
    en: 'Trying the app',
  },
  couldNotUnderstandTheApp: {
    ar: 'عدم المقدرة على فهم عمل التطبيق',
    en: 'Could not understand the app workflow',
  },
  highPrice: {
    ar: 'السعر مرتفع',
    en: 'High price',
  },
  technicianNotSuitable: {
    ar: 'الفني غير مناسب',
    en: 'Technician is not suitable',
  },
  technicianWasANoShow: {
    ar: 'تأخر الفني عن الموعد',
    en: 'Technician did not show up',
  },
  technicianRequestedCancellation: {
    ar: 'الفني طلب الإلغاء',
    en: 'Technician requested to cancel',
  },
  other: {
    ar: 'سبب آخر',
    en: 'other',
  },
  requestedByMistake: {
    ar: 'طلب بالخطأ',
    en: 'requested by mistake',
  },
  needNewField: {
    ar: 'احتاج تخصص اخر',
    en: 'Need New Field',
  },
  noAppliedWorker: {
    ar: 'لا يوجد فنى',
    en: 'No Applied Worker',
  },
};

const TRANSACTION_TYPES = {
  custom: {
    ar: 'custom',
    en: 'custom',
  },
  referral: {
    ar: 'referral',
    en: 'referral',
  },
  payment: {
    ar: 'payment',
    en: 'payment',
  },
  commission: {
    ar: 'عمولة',
    en: 'commission',
  },
  onlinePayment: {
    ar: 'الدفع اونلين',
    en: 'Online Payment',
  },
};

const TRANSACTION_STATUS = {
  approved: {
    ar: 'تمت الموافقة',
    en: 'approved',
  },
  pending: {
    ar: 'معلق',
    en: 'pending',
  },
  rejected: {
    ar: 'مرفوض',
    en: 'rejected',
  },
  paid: {
    ar: 'تم التحويل',
    en: 'paid',
  },
  ready: {
    ar: 'جاري تنفيذ عملية الدفع',
    en: 'ready',
  },
  'customer informed': {
    ar: 'اتم ابلاغ صاحب الحساب بتحويل المبلغ',
    en: 'customer informed',
  },
  'processing payment': {
    ar: 'جاري تنفذ العملية',
    en: 'processing payment',
  },
  'payment failed': {
    ar: 'حدذ خطا فى تنفيذ العملية',
    en: 'payment failed',
  },
  expired: {
    ar: 'انتهى الوقت المخصص لتنفيذ عملية الدفع',
    en: 'expired',
  },
  cancelled: {
    ar: 'تم العاء العملية الدفع',
    en: 'cancelled',
  },
};

const COMMISSION_RATE = {
  0.05: {
    value: 0.05,
  },
  0.06: {
    value: 0.06,
  },
  0.07: {
    value: 0.07,
  },
  0.08: {
    value: 0.08,
  },
  0.09: {
    value: 0.09,
  },
  0.1: {
    value: 0.1,
  },
  0.115: {
    value: 0.115,
  },
  0.15: {
    value: 0.15,
  },
  0.2: {
    value: 0.2,
  },
  0.23: {
    value: 0.23,
  },
};

const TRANSACTION_SIGN = {
  positive: {
    ar: 'positive',
    en: 'positive',
  },
  negative: {
    ar: 'negative',
    en: 'negative',
  },
};

const REVIEWS_TAGS = {
  delay: {
    ar: 'تأخر',
    en: 'Delay',
  },
  notResponsive: {
    ar: 'غير متعاون',
    en: 'Not responsive',
  },
  talkative: {
    ar: 'كثير الكلام',
    en: 'Talkative',
  },
  slow: {
    ar: 'بطيء',
    en: 'Slow',
  },
  lowBehaviour: {
    ar: 'سيّء التعامل',
    en: 'Low behaviour',
  },
  badhygiene: {
    ar: 'سيّء المظهر',
    en: 'Bad hygiene',
  },
  notCommittedToPrices: {
    ar: 'غالي',
    en: 'Not committed to price',
  },
  quick: {
    ar: 'سريع',
    en: 'Quick',
  },
  responsive: {
    ar: 'متعاون',
    en: 'Responsive',
  },
  goodBehaviour: {
    ar: 'خلوق',
    en: 'Good behaviour',
  },
  goodHygiene: {
    ar: 'أنيق',
    en: 'Good hygiene',
  },
  onTime: {
    ar: 'ملتزم بالوقت',
    en: 'On time',
  },
  helpful: {
    ar: 'فنان',
    en: 'Helpful',
  },
};

const ARRIVAL_ACTIVITY = {
  StartMoving: {
    ar: 'في الطريق',
    en: 'Start moving',
  },
  Arrived: {
    ar: 'وصل',
    en: 'Arrived',
  },
};

const DARK_MODE_MAP_STYLE = [
  {
    featureType: 'all',
    elementType: 'all',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'on',
      },
      {
        saturation: '-100',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [
      {
        saturation: 36,
      },
      {
        color: '#000000',
      },
      {
        lightness: 40,
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#000000',
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 17,
      },
      {
        weight: 1.2,
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#4d6059',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#4d6059',
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#4d6059',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        lightness: 21,
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#4d6059',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#4d6059',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#7f8d89',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#7f8d89',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#7f8d89',
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#7f8d89',
      },
      {
        lightness: 29,
      },
      {
        weight: 0.2,
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 18,
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#7f8d89',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#7f8d89',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#7f8d89',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#7f8d89',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 19,
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#2b3638',
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#2b3638',
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#24282b',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#24282b',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
];

const TIME_UNITES = {
  second: {
    ar: 'ثانية',
    en: 'second',
  },
  minute: {
    ar: 'دقيقة',
    en: 'minute',
  },
  hour: {
    ar: 'ساعة',
    en: 'hour',
  },
};

const GENDER = {
  male: {
    ar: 'ذكر',
    en: 'male',
  },
  female: {
    ar: 'أنثى',
    en: 'female',
  },
};

const ACTIVITIES_LOGS = {
  makeWorkerElite: {
    ar: 'جعل الفنى من النخبة',
    en: 'Make Worker Elite',
  },
  deleteReview: {
    ar: 'حذف تقييم',
    en: 'review deletion',
  },
  approveTransaction: {
    ar: 'قبول عملية',
    en: 'transaction approved',
  },
  rejectTransaction: {
    ar: 'رفض عملية',
    en: 'transaction rejected',
  },
  cancelAllPendingOrders: {
    ar: 'إلغاء جميع الأوامر المعلقة',
    en: 'cancel all pending requests older then requestWaitPeriod',
  },
  hideReview: {
    ar: 'اخفاء التقيم',
    en: 'Hide Review',
  },
  unActivateWorker: {
    ar: 'إلغاء تنشيط الفنى',
    en: 'Un Activate Worker',
  },
  activateWorker: {
    ar: 'تنشيط الفنى',
    en: 'Activate Worker',
  },
  changeWorkerCity: {
    ar: 'تغير مدينة الفنى',
    en: 'Change Worker City',
  },
  signUpWorker: {
    ar: 'تسجيل فنى جديد',
    en: 'Sign Up Worker',
  },
  featuring: {
    ar: 'تمييز',
    en: 'feature/de-feature',
  },
  updateFields: {
    ar: 'تعديل تخصصات',
    en: 'fields update',
  },
  customerFollowUps: {
    ar: 'متابعة خدمة العملاء الطلب',
    en: 'Customer Follow Ups',
  },
  operationFollowUps: {
    ar: 'متابعة العمليات الطلب',
    en: 'Operation Follow Ups',
  },
  addCreditsToWorker: {
    ar: 'إضافة رصيد لى الفنى',
    en: 'add Credits To Worker',
  },
  addCreditsToClient: {
    ar: 'إضافة رصيد لى للعميل',
    en: 'add Credits To Client',
  },
  addCompensationToWorker: {
    ar: 'إضافة تعويض للفنى',
    en: 'add Compensation To Worker',
  },
  updateNameOfWorker: {
    ar: 'تعديل اسم الفنى',
    en: 'name update for Worker',
  },
  updateNameOfClient: {
    ar: 'تعديل اسم العميل',
    en: 'name update for Client',
  },
  updateUserNameForWorker: {
    ar: 'تحديث رقم تليفون الفنى',
    en: 'username update For Worker',
  },
  updateUserNameForClient: {
    ar: 'تحديث رقم تليفون العميل',
    en: 'username update For Worker',
  },
  updatePasswordForWorker: {
    ar: 'تغيير كلمة مرور للفنى',
    en: 'password update for worker',
  },
  updatePasswordForAdmin: {
    ar: 'تغيير كلمة مرور للادمن',
    en: 'password update for worker',
  },
  suspendWorker: {
    ar: 'ايقاف الفنى عن العمل',
    en: 'Suspend Worker',
  },
  suspendClient: {
    ar: 'ايقاف العميل من اسنخدام النظام',
    en: 'Suspend Client',
  },
  unsuspendWorker: {
    ar: 'الغاء ايقاف الفنى عن العمل',
    en: 'Unsuspend Worker',
  },
  unsuspendClient: {
    ar: 'الغاء ايقاف العميل من استخدام النظام',
    en: 'unsuspend Client',
  },
  cancelRequest: {
    ar: 'الغاء الطب بواسطة الادمن',
    en: 'cancel Request',
  },
  deleteWorker: {
    ar: 'مسح فنى بواسطة الادمن',
    en: 'delete Worker',
  },
  openTicket: {
    ar: 'فتح مشكلة على الطلب',
    en: 'open Ticket',
  },
  solvingTicket: {
    ar: 'جاري حل الممشكلة المتعلقة بى الطلب',
    en: 'solving Ticket',
  },
  ticketSolved: {
    ar: 'حل المشكلة المتعلقة بى الطلب',
    en: 'ticket Solved',
  },
  createNewRequest: {
    ar: 'طلب خدمة جديده للعميل من لوحة التحكم',
    en: 'create New Request',
  },
  cancelledRequestDone: {
    ar: 'تم انهاء الطلب الملغى',
    en: 'cancelled Request Done',
  },
  enableAutoApplyToRequests: {
    ar: 'تفعيل التقديم على الطلبات التلقائى',
    en: 'enable Auto Apply To Requests',
  },
  disableAutoApplyToRequests: {
    ar: 'الغاء التقديم على الطلبات التلقائى',
    en: 'disable Auto Apply To Requests',
  },
  addCommentOnRequest: {
    ar: 'اضافة تعليق جديد على الطلب',
    en: 'add Comment On Request',
  },
  addCommentOnWorker: {
    ar: 'اضافة تعليق جديد على حساب الفتى',
    en: 'add Comment On Worker',
  },
  addCommentOnClient: {
    ar: 'اضافة تعليق جديد على حساب العميل',
    en: 'add Comment On Client',
  },
};

const GROUPED_TRANSACTION_TYPES = {
  reCharge: {
    message: {
      ar: 'شحن',
      en: 'reCharge',
    },
    query: {
      type: 'custom',
      customTransactionClassificationCode: '101, 102, 103, 105, 106, 107',
    },
  },
  deductions: {
    message: {
      ar: 'خصومات',
      en: 'deductions',
    },
    query: {
      type: 'custom',
      customTransactionClassificationCode: '200, 201, 202, 203, 204, 205, 206, 207, 208, 209',
    },
  },
  awards: {
    message: {
      ar: 'منحة',
      en: 'awards',
    },
    query: { type: 'custom', customTransactionClassificationCode: '104' },
  },
  commissions: {
    message: {
      ar: 'عمولات',
      en: 'commissions',
    },
    query: { type: 'commission' },
  },
  incomeDeduction: {
    message: {
      ar: 'سحب الدخل',
      en: 'Income Deduction',
    },
    query: {
      worker: true,
      customTransactionClassificationCode: '600',
    },
  },
};

const CLASSIFICATIONS_CODE_FOR_GROUPED_TRANSACTION_TYPES = {
  reCharge: [
    {
      code: '101',
      name: {
        en: 'deposit - cash',
        ar: 'نقدي',
      },
    },
    {
      code: '102',
      name: {
        en: 'deposit - bank transfer - Ahly',
        ar: 'تحويل بنكي- اهلي',
      },
    },
    {
      code: '105',
      name: {
        en: 'deposit - bank transfer - Rajhi',
        ar: 'تحويل بنكي- راجحي',
      },
    },
    {
      code: '103',
      name: {
        en: 'deposit - cheque',
        ar: 'إيداع - شيك',
      },
    },
    {
      code: '106',
      name: {
        en: 'deposit - bank transfer - STC',
        ar: 'تحويل بنكى- stc',
      },
    },
    {
      code: '107',
      name: {
        en: 'Recharge His Balance From His Income Wallet',
        ar: 'شحن رصيد من محفظة الدخل',
      },
    },
  ],
  deductions: [
    {
      code: '200',
      name: {
        en: 'deduction',
        ar: 'حسم',
      },
    },
    {
      code: '201',
      name: {
        en: 'deduction - carelessness',
        ar: 'حسم - تهاون وإهمال',
      },
    },
    {
      code: '202',
      name: {
        en: 'deduction - client compliant',
        ar: 'حسم - شكوى عميل',
      },
    },
    {
      code: '203',
      name: {
        en: 'deduction - fraud',
        ar: 'حسم - احتيال',
      },
    },
    {
      code: '204',
      name: {
        en: 'deduction - requests cancellation',
        ar: 'حسم - إلغاء طلبات',
      },
    },
    {
      code: '205',
      name: {
        en: 'deduction - low quality work',
        ar: 'حسم - قلة جودة العمل',
      },
    },
    {
      code: '206',
      name: {
        en: 'deduction - late appointments',
        ar: 'حسم - تأخير المواعيد',
      },
    },
    {
      code: '207',
      name: {
        en: 'deduction - harassment',
        ar: 'حسم - تحرش',
      },
    },
    {
      code: '208',
      name: {
        en: 'deduction - personal hygiene issue',
        ar: 'حسم - مشكلة نظافة شخصية',
      },
    },
    {
      code: '209',
      name: {
        en: 'deduction - uniform issue',
        ar: 'حسم - مشكلة في الزي الموحد',
      },
    },
  ],
  awards: [
    {
      code: '104',
      name: {
        en: 'deposit - award',
        ar: 'منحة',
      },
    },
  ],
  commissions: [],
  incomeDeduction: [],
};

const POSTPONE_REASONS = {
  partsNotAvailableNow: {
    ar: 'العميل طلب التآجيل',
    en: 'customer request to postpone',
  },
  preparePartsForCustomer: {
    ar: 'توفير مواد للعميل',
    en: 'prepare parts for customer',
  },
  customerNotPayThePill: {
    ar: 'العميل لم يدفع الاجرة',
    en: "customer Don't pay the pill",
  },
};

const ACTIONS = {
  homePage: {
    ar: 'الصفحة الرئيسية',
    en: 'homePage',
  },
  offersPage: {
    ar: 'صفحة العروض',
    en: 'offersPage',
  },
  externalUrl: {
    ar: 'عنوان الكترونى خارجى',
    en: 'externalUrl',
  },
};

const COMMISSIONS_RATES = {
  A: {
    code: 'A',
    value: 0.05,
  },
  B: {
    code: 'B',
    value: 0.06,
  },
  C: {
    code: 'C',
    value: 0.07,
  },
  D: {
    code: 'D',
    value: 0.08,
  },
  E: {
    code: 'E',
    value: 0.09,
  },
  F: {
    code: 'F',
    value: 0.1,
  },
  G: {
    code: 'G',
    value: 0.15,
  },
  H: {
    code: 'H',
    value: 0.2,
  },
};

const WORK_LIST_FOR_EVERY_SERVICE = {
  plumbing: [
    {
      code: 'replaceBathtub1Foot',
      name: {
        ar: 'تغيير بانيو قدم',
        en: 'Replace Bathtub 1 foot',
      },
    },
    {
      code: 'replaceArabicToiletSeat',
      name: {
        ar: 'تغيير كرسي عربي',
        en: 'Replace Arabic toilet seat',
      },
    },
    {
      code: 'replaceAUniversalToiletSeatCover',
      name: {
        ar: 'تغيير غطاء كرسي افرنجي',
        en: 'Replace a universal toilet seat cover',
      },
    },
    {
      code: 'RemoveUniversalToiletSeatAndInstallToAnotherPlace',
      name: {
        ar: 'فك وتركيب كرسي افرنجي جديد',
        en: 'Remove Universal toilet seat and install to another place',
      },
    },
    {
      code: 'installUniversalToiletSeat',
      name: {
        ar: 'تركيب كرسي افرنجي فقط',
        en: 'Install universal toilet seat',
      },
    },
    {
      code: 'installArabicFlush',
      name: {
        ar: 'تركيب سيفون عربي',
        en: 'Install Arabic flush',
      },
    },
    {
      code: 'installUniversalFlush',
      name: {
        ar: 'تركيب سيفون افرنجي',
        en: 'Install universal flush',
      },
    },
    {
      code: 'replaceSprayerForToilet',
      name: {
        ar: 'تغيير شطاف',
        en: 'Replace Sprayer for Toilet',
      },
    },
    {
      code: 'replaceMixerBasinOrWall',
      name: {
        ar: 'تغيير خلاط حوض أو جدار',
        en: 'Replace mixer basin or wall',
      },
    },
    {
      code: 'installShowerRoom',
      name: {
        ar: 'تركيب كابينة مروش',
        en: 'Install shower room',
      },
    },
    {
      code: 'installHeater',
      name: {
        ar: 'تركيب سخان',
        en: 'Install heater',
      },
    },
    {
      code: 'installOrReplaceHiddenHeater',
      name: {
        ar: 'تركيب أو تغيير سخان مخفي',
        en: 'Install or replace hidden heater',
      },
    },
    {
      code: 'installOrReplaceDynamo',
      name: {
        ar: 'تركيب او تغيير دينمو',
        en: 'Install or replace Dynamo',
      },
    },
    {
      code: 'koreanWashbasinWasteTrap',
      name: {
        ar: 'تغيير هراب كوري',
        en: 'Korean Washbasin waste trap',
      },
    },
    {
      code: 'washbasinWasteTrap',
      name: {
        ar: 'تغيير هراب عادي',
        en: 'Washbasin waste trap',
      },
    },
    {
      code: 'extensionAndDischargeOfAWashbasinEstablishing',
      name: {
        ar: 'تمديد و تصريف غسالة - تأسيس',
        en: 'Extension and discharge of a washbasin - Establishing',
      },
    },
    {
      code: 'extensionAndDischargeOfAWashbasinOnlyLinkHose',
      name: {
        ar: 'تمديد و تصريف غسالة - ربط الليات فقط',
        en: 'Extension and discharge of a washbasin – only link hose',
      },
    },
    {
      code: 'installWashbasin',
      name: {
        ar: 'تركيب مغسلة',
        en: 'Install washbasin',
      },
    },
    {
      code: 'installWashbasinCabinet',
      name: {
        ar: 'تركيب مغسلة دولاب',
        en: 'Install washbasin Cabinet',
      },
    },
    {
      code: 'drainageBlockage',
      name: {
        ar: 'تسليك انسداد التصريف',
        en: 'Drainage blockage',
      },
    },
    {
      code: 'installSprinklerShowerHead',
      name: {
        ar: 'تركيب سماعة دش',
        en: 'Install Sprinkler shower head',
      },
    },
    {
      code: 'replaceAToiletFlushPumpArabicAndUniversal',
      name: {
        ar: 'تغيير ماكينة سيفون افرنجي أو عربي',
        en: 'Replace a toilet flush pump Arabic and Universal',
      },
    },
    {
      code: 'replaceStopcockWithHose',
      name: {
        ar: 'تغيير محبس زاوية مع لي',
        en: 'Replace stopcock with hose',
      },
    },
    {
      code: 'angleValve',
      name: {
        ar: 'تغيير ليات مع محبس زاوية',
        en: 'Angle valve',
      },
    },
    {
      code: 'replaceFloatValve',
      name: {
        ar: 'تغيير عوامة الخزان',
        en: 'Replace float valve',
      },
    },
    {
      code: 'installBathroomDrainage',
      name: {
        ar: 'تركيب صفاية',
        en: 'Install bathroom drainage',
      },
    },
    {
      code: 'replaceElectricHeater',
      name: {
        ar: 'تغيير قلب سخان عادي',
        en: 'Replace Electric heater',
      },
    },
    {
      code: 'brassShowerDiverter',
      name: {
        ar: 'رداد السخان',
        en: 'Brass Shower Diverter',
      },
    },
    {
      code: 'electricHeater',
      name: {
        ar: 'هيتر القلب',
        en: 'Electric heater',
      },
    },
    {
      code: 'fixMixer',
      name: {
        ar: 'اصلاح خلاط',
        en: 'Fix mixer',
      },
    },
    {
      code: 'other',
      name: {
        ar: 'أخري',
        en: 'other',
      },
    },
  ],
  electrical: [
    {
      code: 'installExhaustFan',
      name: {
        ar: 'تركيب مروحة شفاط',
        en: 'Install exhaust fan',
      },
    },
    {
      code: 'installBathroomHeater',
      name: {
        ar: 'تركيب سخان بالحمام',
        en: 'Install bathroom heater',
      },
    },
    {
      code: 'installSpotlightWithHolesSmallSize',
      name: {
        ar: 'تركيب سبوت لايت مع التخريم - الحجم الصغير',
        en: 'Install spotlight with holes – small size',
      },
    },
    {
      code: 'replaceSpotlightLargeSize',
      name: {
        ar: 'تغيير سبوت لايت - الحجم الصغير',
        en: 'Replace spotlight – large size',
      },
    },
    {
      code: 'replaceSpotlightLargeSize',
      name: {
        ar: 'تغيير سبوت لايت - الحجم الكبير',
        en: 'Replace spotlight – large size',
      },
    },
    {
      code: 'installSpotlightWithHolesLargeSize',
      name: {
        ar: 'تركيب سبوت لايت مع التخريم - الحجم الكبير',
        en: 'Install spotlight with holes – large size',
      },
    },
    {
      code: 'installHiddenLedStrips',
      name: {
        ar: 'تركيب شريط ليد مخفي بالمتر',
        en: 'Install hidden LED strips',
      },
    },
    {
      code: 'installSwitch(AC-Stove-Heater)',
      name: {
        ar: 'تركيب مفتاح مكيف - فرن - سخان',
        en: 'Install switch (AC - Stove - Heater)',
      },
    },
    {
      code: 'installElectronicSwitches',
      name: {
        ar: 'تركيب أفياش كهرباء',
        en: 'Install electronic switches',
      },
    },
    {
      code: 'replaceRegularElectronicSwitches',
      name: {
        ar: 'تغيير فيش كهرباء عادي',
        en: 'Replace regular electronic switches',
      },
    },
    {
      code: 'installNewRegularChandelierSmallSize',
      name: {
        ar: 'تركيب نجف عادي جديد - الحجم الصغير',
        en: 'Install new regular chandelier – small size',
      },
    },
    {
      code: 'installNewChandelierUSA',
      name: {
        ar: 'تركيب نجف امريكي جديد',
        en: 'Install new chandelier – USA',
      },
    },
    {
      code: 'replaceChandelierLightsOnePiece',
      name: {
        ar: 'تغيير لمبات النجف للحبه',
        en: 'Replace chandelier lights – one piece',
      },
    },
    {
      code: 'replaceLightingColumn400',
      name: {
        ar: 'كشف شمعة عامود - ٤٠٠ كشاف',
        en: 'Replace lighting column - 400',
      },
    },
    {
      code: 'replaceWallLight400',
      name: {
        ar: 'كشف شمعة جداري - ٤٠٠ كشاف',
        en: 'Replace wall light - 400',
      },
    },
    {
      code: 'installElectricMeter',
      name: {
        ar: 'تركيب طبلون',
        en: 'Install electric meter',
      },
    },
    {
      code: 'electricMeterKey',
      name: {
        ar: 'مفتاح طبلون',
        en: 'Electric meter key',
      },
    },
    {
      code: 'electricMeterPrimaryKey',
      name: {
        ar: 'مفتاح طبلون رئيسي',
        en: 'Electric meter – Primary key',
      },
    },
    {
      code: 'replaceSubKeyOfElectricMeter',
      name: {
        ar: 'تغيير مفتاح فرعي للطبلون',
        en: 'Replace sub-key of electric meter',
      },
    },
    {
      code: 'replaceRoofLights',
      name: {
        ar: 'تغيير لمبات السطح',
        en: 'Replace roof lights',
      },
    },
    {
      code: 'removeAndInstallRoofLights',
      name: {
        ar: 'فك وتركيب لمبات السطح',
        en: 'Remove and install roof lights',
      },
    },
    {
      code: 'installSwitchesInTheGround',
      name: {
        ar: 'تركيب فيش أرضي',
        en: 'Install switches in the ground',
      },
    },
    {
      code: 'installBell',
      name: {
        ar: 'تركيب جرس',
        en: 'Install bell',
      },
    },
    {
      code: 'fixDoorbell',
      name: {
        ar: 'إصلاح جرس باب',
        en: 'Fix doorbell',
      },
    },
    {
      code: 'convert110vTo220vWholeFlat',
      name: {
        ar: 'تحويل كهرباء من ١١٠ - ٢٢٠ شقة كاملة',
        en: 'Convert 110v to 220v – whole Flat',
      },
    },
    {
      code: 'electricExtension6m(WashingMachineOrDryer)',
      name: {
        ar: 'تمديد كهرباء لغسالة أو نشافة ملابس - 6 ملم',
        en: 'Electric extension 6m – (washing machine or dryer)',
      },
    },
    {
      code: 'replaceNeonLights',
      name: {
        ar: 'تغيير لمبات نيون',
        en: 'Replace Neon lights',
      },
    },
    {
      code: 'installCellOfPhotocellSwitch',
      name: {
        ar: 'تركيب مفتاح خلية ضوئية - فوتوسيل',
        en: 'Install cell of Photocell switch',
      },
    },
    {
      code: 'replaceFluorescentLampWithBase',
      name: {
        ar: 'تغيير لمبات فلورسنت مع القاعدة',
        en: 'Replace Fluorescent lamp with base',
      },
    },
    {
      code: 'installNewIntercom',
      name: {
        ar: 'تركيب انتركم جديد',
        en: 'Install new intercom',
      },
    },
    {
      code: 'fixIntercomProblems',
      name: {
        ar: 'اصلاح أعطال الانتركم',
        en: 'Fix intercom problems',
      },
    },
    {
      code: 'other',
      name: {
        ar: 'أخري',
        en: 'other',
      },
    },
  ],
  'air-conditioning': [
    {
      code: 'washSplit(InternalAndExternalMachineWithFreon)',
      name: {
        ar: 'غسيل مكيف سبلت المكينة الداخلية والخارجية مع الفريون',
        en: 'Wash Split (internal and external machine with freon)',
      },
    },
    {
      code: 'washInternalMachineWithRemoveAndInstallSplit',
      name: {
        ar: 'غسيل مكينه داخليه فك وتركيب – سبلت',
        en: 'Wash internal machine with remove and install - Split',
      },
    },
    {
      code: 'washInternalOrExternalMachineWithoutRemoveSplit',
      name: {
        ar: 'غسيل مكينه داخليه أو خارجيه بدون فك – سبلت',
        en: 'Wash internal or external machine without remove - split',
      },
    },
    {
      code: 'washInternalAndExternalMachineWithoutRemoveSplit',
      name: {
        ar: 'غسيل مكينه داخليه و خارجيه بدون فك – سبلت',
        en: 'Wash internal and external machine without remove - split',
      },
    },
    {
      code: 'washInternalAndExternalMachineWithRemoveSplit',
      name: {
        ar: 'غسيل مكينه داخليه و خارجيه مع فك – سبلت',
        en: 'Wash internal and external machine with remove - split',
      },
    },
    {
      code: 'washInternalAndExternalMachineWithFreonSplit',
      name: {
        ar: 'غسيل مكينه داخليه و خارجيه مع الفريون – سبلت',
        en: 'Wash internal and external machine with freon - split',
      },
    },
    {
      code: 'washACWithFreonWindow',
      name: {
        ar: 'غسيل مكيف مع فريون – شباك',
        en: 'Wash AC with freon - Window',
      },
    },
    {
      code: 'washAcWindow',
      name: {
        ar: 'غسيل مكيف فقط – شباك',
        en: 'Wash AC - Window',
      },
    },
    {
      code: 'washExternalMachineWindow',
      name: {
        ar: 'غسيل مكينه خارجية – شباك',
        en: 'Wash external machine - Window',
      },
    },
    {
      code: 'washInternalMachineWithCleanThePipeWithoutRemoveWindow',
      name: {
        ar: 'غسيل مكينه داخليه مع تنظيف المجرى بدون فك – شباك',
        en: 'Wash internal machine with clean the pipe without remove - Window',
      },
    },
    {
      code: 'removeSplit',
      name: {
        ar: 'فك مكيف اسبلت',
        en: 'Remove Split',
      },
    },
    {
      code: 'removeAndTransferSplitToAnotherPlaceAndInstall(OutsideTheHouse)',
      name: {
        ar: 'فك وتركيب ونقل مكيف اسبلت خارج المنزل',
        en: 'Remove and transfer Split to another place and install (Outside the house)',
      },
    },
    {
      code: 'removeSplitToAnotherPlaceAndInstall(InsideHouse)',
      name: {
        ar: 'فك وتركيب ونقل مكيف اسبلت داخل المنزل',
        en: 'Remove Split to another place and install (Inside house)',
      },
    },
    {
      code: 'replaceAndInstallAcContactor',
      name: {
        ar: 'تغيير وتركيب كونتاكتر',
        en: 'Replace and install AC contactor',
      },
    },
    {
      code: 'replaceDynamoInternalMachine',
      name: {
        ar: 'تغيير دينمو مكينه داخلي',
        en: 'Replace dynamo - internal machine',
      },
    },
    {
      code: 'replaceDynamoExternalMachine',
      name: {
        ar: 'تغيير دينمو مكينه خارجي',
        en: 'Replace dynamo - external machine',
      },
    },
    {
      code: 'installNewSplitWithoutExtensionInternal',
      name: {
        ar: 'تركيب اسبلت جديد بدون تمديد داخلي',
        en: 'Install new Split without extension - internal',
      },
    },
    {
      code: 'installBoxConditioningUnit',
      name: {
        ar: 'تركيب مكيف كاسيت',
        en: 'Install Box conditioning unit',
      },
    },
    {
      code: 'replaceCompressor-36-48-60Units',
      name: {
        ar: 'تغيير كمبروسر ۳٦ – ٤۸ – ٦۰ وحدة',
        en: 'Replace Compressor 36 – 48 – 60 units',
      },
    },
    {
      code: 'replaceCompressor18-34Units',
      name: {
        ar: 'تغيير كمبروسر ۱۸ - ۳٤ وحدة',
        en: 'Replace Compressor 18 – 34 units',
      },
    },
    {
      code: 'replaceCompressor18-24Units',
      name: {
        ar: 'تغيير كمبروسر ۱۸ - ۲٤ وحدة',
        en: 'Replace Compressor 18 – 24 units',
      },
    },
    {
      code: 'Replace-capacitor-Battery',
      name: {
        ar: 'تغيير مكتن – بوبينه – كوبستر -- بطارية',
        en: 'Replace – capacitor - Battery',
      },
    },
    {
      code: 'waterLeakage-internal-WithCleanTheFilters-Split',
      name: {
        ar: 'تسريب مويه – داخلي -- اسبلت مع تنظيف الفلاتر',
        en: 'Water leakage - internal - with clean the filters - Split',
      },
    },
    {
      code: 'fixFreonLeakWithOnlyWeldingWindow',
      name: {
        ar: 'اصلاح تهريب الفريون مع اللحام فقط - شباك',
        en: 'Fix Freon leak with – only welding - Window',
      },
    },
    {
      code: 'removeAcWindow-TransferToAnotherPlace(OutsideTheHouse)',
      name: {
        ar: 'فك وتركيب مكيف شباك ونقله داخل المنزل',
        en: 'Remove AC window - transfer to another place (outside the house)',
      },
    },
    {
      code: 'installNewAcWindowWithElectricConnection',
      name: {
        ar: 'تركيب مكيف شباك جديد مع توصيل الكهرباء',
        en: 'Install new AC Window with electric connection',
      },
    },
    {
      code: 'fixElectronicBoardSplit',
      name: {
        ar: 'اصلاح لوحة الكترونية - سبليت',
        en: 'Fix Electronic board - Split',
      },
    },
    {
      code: 'fixAcDynamo-externalMachine',
      name: {
        ar: 'اصلاح دينمو المكيف - مكينة خارجي',
        en: 'Fix AC Dynamo – external machine',
      },
    },
    {
      code: 'replaceExternalFanSplit',
      name: {
        ar: 'تغيير بلور داخلي سبليت',
        en: 'Replace external fan - Split',
      },
    },
    {
      code: 'removeAndInstallExternalFanSplit',
      name: {
        ar: 'فك وتركيب مروحة خارجية - سبليت',
        en: 'Remove and install external fan - Split',
      },
    },
    {
      code: 'installACWindow',
      name: {
        ar: 'تركيب مكيف دولاب',
        en: 'Install AC - Window',
      },
    },
    {
      code: 'other',
      name: {
        ar: 'أخري',
        en: 'other',
      },
    },
  ],
  'satellite-tv': [
    {
      code: 'dishWithEquipment(ProgrammingAndBalance)',
      name: {
        ar: 'تركيب صحن كامل مع وزن وبرمجة',
        en: 'Dish with equipment (programming and balance)',
      },
    },
    {
      code: 'programmingAReceiverWithDishBalance',
      name: {
        ar: 'برمجه رسيفر مع وزن صحن',
        en: 'Programming a receiver with Dish balance',
      },
    },
    {
      code: 'internalProgramming',
      name: {
        ar: 'برمجة داخلية',
        en: 'Internal programming',
      },
    },
    {
      code: 'dishProgramming',
      name: {
        ar: 'برمجة دش',
        en: 'Dish programming',
      },
    },
    {
      code: 'extendInternalCableWire',
      name: {
        ar: 'تسليك داخلي',
        en: 'Extend internal cable wire',
      },
    },
    {
      code: 'extendExternalCableWire',
      name: {
        ar: 'تسليك جديد خارج الجدار',
        en: 'Extend external cable wire',
      },
    },
    {
      code: 'installSatelliteDish',
      name: {
        ar: 'تركيب صحن',
        en: 'Install Satellite Dish',
      },
    },
    {
      code: 'dishTransferToAnotherPlace',
      name: {
        ar: 'نقل دش إلى مكان اخر',
        en: 'Dish transfer to another place',
      },
    },
    {
      code: 'satelliteDishSignalFinder1Port',
      name: {
        ar: 'تركيب راس خط واحد',
        en: 'Satellite Dish Signal Finder (1 port))',
      },
    },
    {
      code: 'satelliteDishSignalFinder2ports',
      name: {
        ar: 'تركيب راس خطين',
        en: 'Satellite Dish Signal Finder (2 ports))',
      },
    },
    {
      code: 'satelliteDishSignalFinder4Ports',
      name: {
        ar: 'تركيب راس 4 خطوط',
        en: 'Satellite Dish Signal Finder (4 ports))',
      },
    },
    {
      code: 'smallTvWallMount',
      name: {
        ar: 'تعليق تلفزيون صغير على الجدار',
        en: 'Small TV wall mount',
      },
    },
    {
      code: 'largeTvWallMount',
      name: {
        ar: 'تعليق تلفزيون كبير على الجدار',
        en: 'Large TV wall mount',
      },
    },
    {
      code: 'other',
      name: {
        ar: 'أخري',
        en: 'other',
      },
    },
  ],
  painting: [
    {
      code: 'roomPaint4*4Or5*4OrRegularOrRenovation',
      name: {
        ar: 'دهان غرفة ٤*٤ أو ٥*٤ - عادي ,سادة أو تجديد',
        en: 'Room Paint 4*4 or 5*4 or regular or renovation',
      },
    },
    {
      code: 'roomPaint4*4Or4*5NewRoomUnderPlastering',
      name: {
        ar: 'دهان غرفة ٤*٤ أو ٥*٤ - غرفة جديدة تحت التلييس',
        en: 'Room paint 4*4 or 4*5 - New room under plastering',
      },
    },
    {
      code: 'theOtherTypesOfRoomPaintDependsOnHumidity',
      name: {
        ar: 'باقي أنواع أعمال الدهان – على حسب وجود رطوبة أو لا',
        en: 'The other types of room paint - Depends on humidity',
      },
    },
    {
      code: 'other',
      name: {
        ar: 'أخري',
        en: 'other',
      },
    },
  ],
  'furniture-transportation': [
    {
      code: 'other',
      name: {
        ar: 'أخري',
        en: 'other',
      },
    },
  ],
  'home-appliances': [
    {
      code: 'replaceRefrigeratorCompressorWithoutFreon',
      name: {
        ar: 'غيير كمبروسر ثلاجه بدون الفريون',
        en: 'Replace Refrigerator compressor without freon',
      },
    },
    {
      code: 'replaceRefrigeratorExternalFan',
      name: {
        ar: 'تغيير مروحة خارجية لثلاجة',
        en: 'Replace refrigerator external fan',
      },
    },
    {
      code: 'replaceRefrigeratorInternalFan',
      name: {
        ar: 'تغيير مروحة داخلية لثلاجة',
        en: 'Replace refrigerator internal fan',
      },
    },
    {
      code: 'replaceRefrigeratorHeater',
      name: {
        ar: 'تغيير الدفاية لثلاجة',
        en: 'Replace refrigerator heater',
      },
    },
    {
      code: 'replaceNoFrostSensitive',
      name: {
        ar: 'تغيير حساس دبفارست',
        en: 'Replace No-Frost sensitive',
      },
    },
    {
      code: 'fillFreonOnTheQuantityChina',
      name: {
        ar: 'تعبيه فريون صيني للثلاجة حسب كمية الفريون',
        en: 'Fill freon - on the quantity - China',
      },
    },
    {
      code: 'fillFreonOnTheQuantityUSA',
      name: {
        ar: 'تعبيه فريون امريكي للثلاجة حسب كمية الفريون',
        en: 'Fill freon - on the quantity - USA',
      },
    },
    {
      code: 'fillFreonOnTheQuantityIndia',
      name: {
        ar: 'تعبيه فريون هندي للثلاجة حسب كمية الفريون',
        en: 'Fill freon - on the quantity - India',
      },
    },
    {
      code: 'fixRefrigeratorExternalLeakWithoutFreon',
      name: {
        ar: 'تصليح التهريب الخارجي للثلاجة بدون تعبية الفريون',
        en: 'Fix refrigerator external leak without freon',
      },
    },
    {
      code: 'cleanTheGasStove',
      name: {
        ar: 'تنظيف الفرن',
        en: 'Clean the gas stove',
      },
    },
    {
      code: 'replaceStoveKnobs',
      name: {
        ar: 'تغيير المفاتيح للأفران',
        en: 'Replace stove knobs',
      },
    },
    {
      code: 'fixStoveLeak',
      name: {
        ar: 'تصليح تهريب الفرن',
        en: 'Fix stove leak',
      },
    },
    {
      code: 'replaceOvenDoorElements',
      name: {
        ar: 'تغيير فصالات الباب للأفران',
        en: 'Replace oven door elements',
      },
    },
    {
      code: 'replaceRefrigeratorTimer',
      name: {
        ar: 'تغيير تايمر ثلاجة',
        en: 'Replace refrigerator timer',
      },
    },
    {
      code: 'replaceRefrigeratorCompressor1/6-1/5-1/4-1/3',
      name: {
        ar: 'تغيير كومبروسر ثلاجة 1/6 - 1/5 - 1/4 - 1/3',
        en: 'Replace refrigerator compressor 1/6 - 1/5 - 1/4 - 1/3',
      },
    },
    {
      code: 'replaceRefrigeratorCompressor1/2-3/4-1',
      name: {
        ar: 'تغيير كومبروسر ثلاجة 1/2 - 3/4 - 1',
        en: 'Replace refrigerator compressor 1/2 - 3/4 - 1',
      },
    },
    {
      code: 'fixExternalLeakWithFillFreon-R134-USA',
      name: {
        ar: 'تصليح التهريب الخارجي مع تعبئة فريون أمريكي R134',
        en: 'Fix external leak with fill freon - R134 - USA',
      },
    },
    {
      code: 'fixExternalLeakWithFillFreon-R12-USA',
      name: {
        ar: 'تصليح التهريب الخارجي مع تعبئة فريون أمريكي R12',
        en: 'Fix external leak with fill freon - R12 - USA',
      },
    },
    {
      code: 'fixExternalLeakWithFillFreon-R134-China',
      name: {
        ar: 'تصليح التهريب الخارجي مع تعبئة فريون صيني R134',
        en: 'Fix external leak with fill freon - R134 - China',
      },
    },
    {
      code: 'fixExternalLeakWithFillFreon-R12-China',
      name: {
        ar: 'تصليح التهريب الخارجي مع تعبئة فريون صيني R12',
        en: 'Fix external leak with fill freon - R12 - China',
      },
    },
    {
      code: 'fixExternalLeakWithFillFreon-R134-India',
      name: {
        ar: 'تصليح التهريب الخارجي مع تعبئة فريون هندي R134',
        en: 'Fix external leak with fill freon - R134 - India',
      },
    },
    {
      code: 'other',
      name: {
        ar: 'أخري',
        en: 'other',
      },
    },
  ],
  cleaning: [
    {
      code: 'other',
      name: {
        ar: 'أخري',
        en: 'other',
      },
    },
  ],
  'water-saving': [
    {
      code: 'other',
      name: {
        ar: 'أخري',
        en: 'other',
      },
    },
  ],
  paved: [
    {
      code: 'other',
      name: {
        ar: 'أخري',
        en: 'other',
      },
    },
  ],
  cameras: [
    {
      code: 'other',
      name: {
        ar: 'أخري',
        en: 'other',
      },
    },
  ],
  mobiles: [
    {
      code: 'ReplaceOfIPhone5gScreen',
      name: {
        ar: 'تغيير شاشة I Phone 5G',
        en: 'Replace of iPhone 5G Screen',
      },
    },
    {
      code: 'replaceOfIPhone5sScreen',
      name: {
        ar: 'تغيير شاشة I Phone 5S',
        en: 'Replace of iPhone 5S Screen',
      },
    },
    {
      code: 'replaceOfIPhone5cScreen',
      name: {
        ar: 'تغيير شاشة I Phone 5C',
        en: 'Replace of iPhone 5C Screen',
      },
    },
    {
      code: 'replaceOfIPhone6gScreen',
      name: {
        ar: 'تغيير شاشة I Phone 6G',
        en: 'Replace of iPhone 6G Screen',
      },
    },
    {
      code: 'replaceOfIPhone6+Screen',
      name: {
        ar: 'تغيير شاشة I Phone +6',
        en: 'Replace of iPhone 6+ Screen',
      },
    },
    {
      code: 'replaceOfIPhone6sScreen',
      name: {
        ar: 'تغيير شاشة I Phone 6S',
        en: 'Replace of iPhone 6S Screen',
      },
    },
    {
      code: 'replaceOfIPhone6s+Screen',
      name: {
        ar: 'تغيير شاشة I Phone +6S',
        en: 'Replace of iPhone 6S+Screen',
      },
    },
    {
      code: 'replaceOfIPhone7gScreen',
      name: {
        ar: 'تغيير شاشة I Phone 7G',
        en: 'Replace of iPhone 7G Screen',
      },
    },
    {
      code: 'replaceOfIPhone+7Screen',
      name: {
        ar: 'تغيير شاشة I Phone +7',
        en: 'Replace of iPhone +7 Screen',
      },
    },
    {
      code: 'replaceOfIPhone8gScreen',
      name: {
        ar: 'تغيير شاشة I Phone 8G',
        en: 'Replace of iPhone 8G Screen',
      },
    },
    {
      code: 'replaceOfIPhone+8Screen',
      name: {
        ar: 'تغيير شاشة I Phone +8',
        en: 'Replace of iPhone +8 Screen',
      },
    },
    {
      code: 'replaceOfIPhoneXScreen',
      name: {
        ar: 'تغيير شاشة I Phone X',
        en: 'Replace of iPhone X Screen',
      },
    },
    {
      code: 'replaceOfIPhoneXsScreen',
      name: {
        ar: 'تغيير شاشة I Phone Xs',
        en: 'Replace of iPhone Xs Screen',
      },
    },
    {
      code: 'replaceOfIPhoneXrScreen',
      name: {
        ar: 'تغيير شاشة I Phone Xr',
        en: 'Replace of iPhone Xr Screen',
      },
    },
    {
      code: 'replaceOfIPhoneXsMaxScreen',
      name: {
        ar: 'تغيير شاشة I Phone xsmax',
        en: 'Replace of iPhone Xs MAX Screen',
      },
    },
    {
      code: 'softwareAndProgramming',
      name: {
        ar: 'السوفت وير البرمجه',
        en: 'Software and programming',
      },
    },
    {
      code: 'networkProblems',
      name: {
        ar: 'مشاكل الشبكة',
        en: 'Network problems',
      },
    },
    {
      code: 'notWorkingMobileCouldNotRun',
      name: {
        ar: 'لايعمل الموبايل لايمكن تشغيله',
        en: 'Not working – Mobile couldn’t run',
      },
    },
    {
      code: 'microphoneProblem(IPhone5-6-6s-6sPlus)',
      name: {
        ar: 'مشكلة المايكرفون ايفون 5 - 6 - 6اس - 6اس بلس',
        en: 'Microphone problem (iPhone 5 – 6 – 6s – 6s plus)',
      },
    },
    {
      code: 'microphoneProblem(IPhone7-7plus-8-8plus-X)',
      name: {
        ar: 'مشكلة المايكرفون ايفون7 - 7بلس - 8 - 8بلس - x',
        en: 'Microphone problem (iPhone 7 – 7plus – 8 – 8plus – X)',
      },
    },
    {
      code: 'speakerProblem(IPhone5-6-6s-6sPlus)',
      name: {
        ar: 'مشكلة السماعة في مكبر الصوت ايفون 5 - 6 - 6 اس - 6 اس بلس',
        en: 'Speaker problem (iPhone 5 – 6 – 6s – 6s plus)',
      },
    },
    {
      code: 'speakerProblem(IPhone7-7plus-8-8plus-X)',
      name: {
        ar: 'مشكلة السماعة في مكبر الصوت ايفون7 - 7 بلس - 8 - 8بلس - x',
        en: 'Speaker problem (iPhone 7 – 7plus – 8 – 8plus – X)',
      },
    },
    {
      code: 'speakerProblem(IPhone8-8plus-X)',
      name: {
        ar: 'مشكلة السماعة في مكبر الصوت ايفون 8 - 8بلس - x',
        en: 'Speaker problem (iPhone 8 – 8plus – X)',
      },
    },
    {
      code: 'chargerProblem(IPhone5-6-6s-6Plus-6s)',
      name: {
        ar: 'مشكلة في شحن الموبايل ايفون5 - 6 - 6بلس - 6اس - 6اس بلس',
        en: 'Charger problem (iPhone 5 – 6 – 6s – 6 plus – 6s)',
      },
    },
    {
      code: 'chargerProblem(IPhone7-7Plus-8-8Plus-X)',
      name: {
        ar: 'مشكلة في شحن الموبايل ايفون 7 - 7بلس - 8 - 8 بلس - x',
        en: 'Charger problem (iPhone 7 – 7plus – 8 – 8plus - X)',
      },
    },
    {
      code: 'problemInSignal',
      name: {
        ar: 'مشكلة في الاشارة',
        en: 'Problem in signal',
      },
    },
    {
      code: 'notRinging',
      name: {
        ar: 'لايهتز',
        en: 'Not ringing',
      },
    },
    {
      code: 'problemInSideButtons-(sound)',
      name: {
        ar: 'مشكله في الازرار الجانبية ,الصوت',
        en: 'Problem in side buttons – (sound)',
      },
    },
    {
      code: 'batteryProblem(IPhone5To6sPlus)',
      name: {
        ar: 'مشكله في البطاريه من ايفون 5 الى 6اس بلس',
        en: 'Battery problem (iPhone 5 to 6s plus)',
      },
    },
    {
      code: 'batteryProblem(IPhone7ToX)',
      name: {
        ar: 'مشكله في البطاريه من ايفون 7الى ايفون x',
        en: 'Battery problem (iPhone 7 to X)',
      },
    },
    {
      code: 'problemInTouch',
      name: {
        ar: 'مشكله في اللمس',
        en: 'Problem in touch',
      },
    },
    {
      code: 'cameraProblem(IPhone5To6sPlus)',
      name: {
        ar: 'مشكلة في الكاميرا من ايفون 5 الى 6اس',
        en: 'Camera problem (iPhone 5 to 6s plus)',
      },
    },
    {
      code: 'cameraProblem(IPhone7ToX)',
      name: {
        ar: 'مشكلة في الكاميرا من ايفون 7 الى x',
        en: 'Camera problem (iPhone 7 to X)',
      },
    },
    {
      code: 'waterDamage',
      name: {
        ar: 'خرابات الماء',
        en: 'Water damage',
      },
    },
    {
      code: 'mobileConnectors',
      name: {
        ar: 'موصلات وشغل يد فقط',
        en: 'Mobile connectors',
      },
    },
    {
      code: 'samsung-Huawei-Sony-Tap-Htt',
      name: {
        ar: 'سامسونج هواوي سوني تاب htc',
        en: 'Samsung Huawei Sony tap htc',
      },
    },
    {
      code: 'IC',
      name: {
        ar: 'ايسي',
        en: 'IC',
      },
    },
    {
      code: 'other',
      name: {
        ar: 'أخري',
        en: 'other',
      },
    },
  ],
  parquet: [
    {
      code: 'other',
      name: {
        ar: 'أخري',
        en: 'other',
      },
    },
  ],
  'furniture-upholstery': [
    {
      code: 'other',
      name: {
        ar: 'أخري',
        en: 'other',
      },
    },
  ],
  aluminum: [
    {
      code: 'other',
      name: {
        ar: 'أخري',
        en: 'other',
      },
    },
  ],
  construction: [
    {
      code: 'other',
      name: {
        ar: 'أخري',
        en: 'other',
      },
    },
  ],
  'gypsum-board': [
    {
      code: 'other',
      name: {
        ar: 'أخري',
        en: 'other',
      },
    },
  ],
  elevadores: [
    {
      code: 'other',
      name: {
        ar: 'أخري',
        en: 'other',
      },
    },
  ],
  carpentry: [
    {
      code: 'installSaudiDoorOrMagno',
      name: {
        ar: 'تركيب باب سعودي أو مقنو كامل',
        en: 'Install Saudi door or magno',
      },
    },
    {
      code: 'curDoo',
      name: {
        ar: 'قص باب',
        en: 'Cur door',
      },
    },
    {
      code: 'installIKEA-CupboardSmall',
      name: {
        ar: 'تركيب دولاب ايكيا - صغير',
        en: 'Install IKEA cupboard - small',
      },
    },
    {
      code: 'install-IKEA-CupboardMedium',
      name: {
        ar: 'تركيب دولاب ايكيا - وسط',
        en: 'Install IKEA cupboard - medium',
      },
    },
    {
      code: 'install-IKEA-CupboardLarge',
      name: {
        ar: 'تركيب دولاب ايكيا - كبير',
        en: 'Install IKEA cupboard - Large',
      },
    },
    {
      code: 'removeAndInstallSaudiCupboard',
      name: {
        ar: 'تركيب دولاب وطني',
        en: 'Remove and install Saudi cupboard',
      },
    },
    {
      code: 'removeSaudiCupboard',
      name: {
        ar: 'فك دولاب وطني',
        en: 'Remove Saudi cupboard',
      },
    },
    {
      code: 'installDoorLocker',
      name: {
        ar: 'تركيب كيلون',
        en: 'Install door locker',
      },
    },
    {
      code: 'removeAndInstallAcFrame',
      name: {
        ar: 'تركيب برواز مكيف',
        en: 'Remove and install AC frame',
      },
    },
    {
      code: 'removeAndInstallCurtain',
      name: {
        ar: 'فك و تركيب ستارة',
        en: 'Remove and install Curtain',
      },
    },
    {
      code: 'fixDoor-Scrape-Balance-InstallRubber',
      name: {
        ar: 'تصليح باب - كشط,وزن,تركيب جلدة',
        en: 'Fix door – scrape, balance, install rubber',
      },
    },
    {
      code: 'removeAndInstallADoor',
      name: {
        ar: 'فك و تركيب باب',
        en: 'Remove and install a door',
      },
    },
    {
      code: 'installDressingTableDesk',
      name: {
        ar: 'تركيب تسريحة',
        en: 'Install dressing table desk',
      },
    },
    {
      code: 'removeAndInstallRack',
      name: {
        ar: 'فك و تركيب رف',
        en: 'Remove and install rack',
      },
    },
    {
      code: 'removeAndInstallBed',
      name: {
        ar: 'فك و تركيب سرير',
        en: 'Remove and install bed',
      },
    },
    {
      code: 'openACloseDoor',
      name: {
        ar: 'فتح باب مغلق',
        en: 'Open a close door',
      },
    },
    {
      code: 'installNewOffice',
      name: {
        ar: 'تركيب مكتب جديد',
        en: 'Install new office',
      },
    },
    {
      code: 'removeOffice',
      name: {
        ar: 'فك مكتب',
        en: 'Remove office',
      },
    },
    {
      code: 'installBoard',
      name: {
        ar: 'تركيب لوحة',
        en: 'Install board',
      },
    },
    {
      code: 'installMirror',
      name: {
        ar: 'تركيب مرايا',
        en: 'Install mirror',
      },
    },
    {
      code: 'removeCupboard-5DroveOrLess',
      name: {
        ar: 'فك دولاب 5 دروف أو أقل',
        en: 'Remove cupboard - 5 drove or less',
      },
    },
    {
      code: 'installCupboard-5DroveOrLess',
      name: {
        ar: 'تركيب دولاب 5 دروف أو أقل',
        en: 'Install cupboard - 5 drove or less',
      },
    },
    {
      code: 'other',
      name: {
        ar: 'أخري',
        en: 'other',
      },
    },
  ],
  reconditioning: [
    {
      code: 'other',
      name: {
        ar: 'أخري',
        en: 'other',
      },
    },
  ],
};

export {
  COOKIES_KEYS,
  USER_ROLES,
  USER_TARGETS,
  OPERATING_SYSTEMS,
  CONFIRM_CHOICE,
  FIELDS,
  RATINGS,
  CITIES,
  USER_STATUSES,
  REQUESTS_STATUSES,
  TICKETS_STATUS,
  PAYMENT_STATUS,
  PAYMENT_METHOD,
  CANCELLATION_REASONS,
  TRANSACTION_TYPES,
  TRANSACTION_STATUS,
  COMMISSION_RATE,
  TRANSACTION_SIGN,
  REVIEWS_TAGS,
  ARRIVAL_ACTIVITY,
  DARK_MODE_MAP_STYLE,
  TIME_UNITES,
  GENDER,
  ACTIVITIES_LOGS,
  GROUPED_TRANSACTION_TYPES,
  CLASSIFICATIONS_CODE_FOR_GROUPED_TRANSACTION_TYPES,
  POSTPONE_REASONS,
  ACTIONS,
  COMMISSIONS_RATES,
  WORK_LIST_FOR_EVERY_SERVICE,
};
