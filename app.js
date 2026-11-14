/**
 * SỔ QUẢN LÝ CHỦ NHIỆM & HỒ SƠ HỌC SINH
 * Ứng dụng Quản lý Chuyên cần, Sổ tay Cá nhân số & Đánh giá Thông tư 27
 */

// ================= CONSTANTS & CRITERIA DEFINITIONS =================
const TT27_QUALITIES = [
  { id: 'pc_yeunuoc', label: 'Yêu nước', short: 'Y.Nước', desc: 'Tự hào về quê hương, yêu quý trường lớp, giữ gìn tài sản chung' },
  { id: 'pc_nhanai', label: 'Nhân ái', short: 'N.Ái', desc: 'Yêu thương, tôn trọng bạn bè, biết chia sẻ và giúp đỡ mọi người' },
  { id: 'pc_chamchi', label: 'Chăm chỉ', short: 'C.Chỉ', desc: 'Chuyên cần học tập, tích cực tham gia việc nhà và hoạt động trường' },
  { id: 'pc_trungthuc', label: 'Trung thực', short: 'T.Thực', desc: 'Thật thà trong học tập và sinh hoạt, dũng cảm nhận lỗi' },
  { id: 'pc_trachnhiem', label: 'Trách nhiệm', short: 'T.Nhiệm', desc: 'Có trách nhiệm với lời nói, hành vi, hoàn thành nhiệm vụ được giao' }
];

const TT27_CORE_COMPETENCIES = [
  { id: 'nl_tuchu', label: 'Tự chủ và tự học', short: 'T.Chủ', desc: 'Tự giác hoàn thành nhiệm vụ học tập, biết tự chuẩn bị đồ dùng' },
  { id: 'nl_giaotiep', label: 'Giao tiếp & hợp tác', short: 'G.Tiếp', desc: 'Tự tin trình bày ý kiến, biết lắng nghe và làm việc nhóm hiệu quả' },
  { id: 'nl_giaiquyet', label: 'Giải quyết VĐ & sáng tạo', short: 'G.Quyết', desc: 'Biết phát hiện vấn đề, đưa ra ý tưởng mới trong học tập' }
];

const TT27_SPECIFIC_COMPETENCIES = [
  { id: 'nl_ngonngu', label: 'Ngôn ngữ', short: 'N.Ngữ', desc: 'Diễn đạt rõ ràng, đọc hiểu và sử dụng từ ngữ lưu loát' },
  { id: 'nl_tinhtoan', label: 'Tính toán', short: 'T.Toán', desc: 'Thực hiện phép tính thành thạo, tư duy logic hình học tốt' },
  { id: 'nl_khoahoc', label: 'Khoa học', short: 'K.Học', desc: 'Tò mò khám phá tự nhiên, hiểu biết về đời sống xung quanh' },
  { id: 'nl_congnghe', label: 'Công nghệ', short: 'C.Nghệ', desc: 'Biết sử dụng an toàn các dụng cụ, sản phẩm công nghệ đơn giản' },
  { id: 'nl_tinhoc', label: 'Tin học', short: 'T.Học', desc: 'Thao tác cơ bản trên máy tính, sử dụng phần mềm học tập' },
  { id: 'nl_thammy', label: 'Thẩm mỹ', short: 'T.Mỹ', desc: 'Cảm thụ cái đẹp, có năng khiếu âm nhạc, mỹ thuật sáng tạo' },
  { id: 'nl_thechat', label: 'Thể chất', short: 'T.Chất', desc: 'Tích cực rèn luyện thân thể, nhanh nhẹn, giữ vệ sinh cá nhân' }
];

// Ngân hàng nhận xét mẫu theo Thông tư 27 (Gợi ý 1 chạm)
const COMMENT_BANK = [
  "Em chăm ngoan, lễ phép, có ý thức tự giác học tập rất cao. Tiếp thu bài nhanh.",
  "Hoàn thành tốt các nhiệm vụ học tập. Tích cực tham gia phát biểu xây dựng bài.",
  "Kỹ năng tính toán nhanh và chính xác. Có tư duy logic tốt.",
  "Đọc diễn cảm, chữ viết sạch đẹp, vốn từ ngữ phong phú.",
  "Rất tự giác và biết giúp đỡ bạn cùng tiến bộ. Tinh thần trách nhiệm cao.",
  "Tích cực tham gia các hoạt động phong trào của lớp, hòa đồng với bạn bè.",
  "Có tiến bộ rõ rệt trong rèn chữ và giữ vở. Cần phát huy hơn nữa.",
  "Cần rèn thêm tính cẩn thận khi làm bài toán có lời văn.",
  "Còn rụt rè khi phát biểu, cần tự tin hơn trong các hoạt động nhóm.",
  "Chữ viết cần rèn thêm về độ cao và khoảng cách giữa các con chữ."
];

// ================= INITIAL STATE & STORAGE KEYS =================
const STORAGE_PREFIX = 'gvcn_app_';
const KEYS = {
  SETTINGS: STORAGE_PREFIX + 'settings',
  STUDENTS: STORAGE_PREFIX + 'students',
  ATTENDANCE: STORAGE_PREFIX + 'attendance',
  ASSESSMENT: STORAGE_PREFIX + 'assessment'
};

let appSettings = {
  appName: 'Sổ QL HS',
  schoolName: 'Trường Tiểu học Nguyễn Huệ',
  className: 'Lớp 4A',
  schoolYear: '2024 - 2025',
  teacherName: 'Cô Nguyễn Thị Mai'
};

let students = [];
let attendanceData = {}; // key: "YYYY-MM-DD_session" -> { studentId: { status, note } }
let assessmentData = {}; // key: "period" -> { studentId: { [criteriaId]: 'T'|'Đ'|'C', comment: string } }

// UI State
let currentDate = new Date().toISOString().split('T')[0];
let currentSession = 'morning'; // 'morning' | 'afternoon'
let currentAttendanceFilter = 'all'; // 'all' | 'absent' | 'late'
let currentAssessmentPeriod = 'mid_term1';
let currentAssessmentView = 'matrix'; // 'matrix' | 'student_detail'
let selectedStudentForDetailIndex = 0;
let attendanceChartInstance = null;
let assessmentChartInstance = null;

// ================= INITIALIZATION =================
document.addEventListener('DOMContentLoaded', () => {
  loadDataFromStorage();
  initClock();
  initDatePickers();
  updateHeaderDisplay();
  
  // Render views
  renderAttendanceTable();
  renderProfileCards();
  renderAssessmentView();
  renderReports();

  // Highlight default navigation
  switchTab('attendance');
});

function initClock() {
  function updateTime() {
    const now = new Date();
    const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const dayName = days[now.getDay()];
    const dateStr = `${dayName}, ${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    
    const dEl = document.getElementById('currentDateDisplay');
    const tEl = document.getElementById('currentClockDisplay');
    if (dEl) dEl.innerText = dateStr;
    if (tEl) tEl.innerText = timeStr;
  }
  updateTime();
  setInterval(updateTime, 1000);
}

function initDatePickers() {
  const picker = document.getElementById('attendanceDatePicker');
  if (picker) {
    picker.value = currentDate;
  }
}

function updateHeaderDisplay() {
  document.getElementById('headerSchoolName').innerHTML = `<i class="fa-solid fa-school text-blue-300 mr-1"></i>${appSettings.schoolName}`;
  document.getElementById('headerClassTitle').innerText = `${appSettings.className.toUpperCase()} - SỔ QUẢN LÝ HỌC SINH`;
  document.getElementById('badgeYear').innerText = appSettings.schoolYear;
  document.getElementById('headerTeacherName').innerHTML = `<i class="fa-solid fa-chalkboard-user text-amber-300 mr-1"></i>GVCN: ${appSettings.teacherName}`;
}

// ================= STORAGE MANAGEMENT =================
function loadDataFromStorage() {
  try {
    const savedSettings = localStorage.getItem(KEYS.SETTINGS);
    if (savedSettings) appSettings = JSON.parse(savedSettings);

    const savedStudents = localStorage.getItem(KEYS.STUDENTS);
    if (savedStudents) {
      students = JSON.parse(savedStudents);
    } else {
      loadDefaultSampleData();
    }

    const savedAttendance = localStorage.getItem(KEYS.ATTENDANCE);
    if (savedAttendance) attendanceData = JSON.parse(savedAttendance);

    const savedAssessment = localStorage.getItem(KEYS.ASSESSMENT);
    if (savedAssessment) assessmentData = JSON.parse(savedAssessment);

  } catch (e) {
    console.error('Error loading data from localStorage:', e);
    loadDefaultSampleData();
  }
}

function saveDataToStorage() {
  localStorage.setItem(KEYS.SETTINGS, JSON.stringify(appSettings));
  localStorage.setItem(KEYS.STUDENTS, JSON.stringify(students));
  localStorage.setItem(KEYS.ATTENDANCE, JSON.stringify(attendanceData));
  localStorage.setItem(KEYS.ASSESSMENT, JSON.stringify(assessmentData));
}

// ================= SAMPLE DATA (25 REALISTIC ELEMENTARY STUDENTS) =================
function loadDefaultSampleData() {
  students = [
    {
      id: 'HS001',
      stt: 1,
      name: 'Nguyễn Văn An',
      dob: '2015-03-12',
      gender: 'Nam',
      parentName: 'Nguyễn Văn Bình (Bố)',
      parentPhone: '0912345678',
      address: 'Số 15 Phố Huế, Q. Hoàn Kiếm, Hà Nội',
      circumstance: 'Gia đình công chức cơ bản, bố mẹ quan tâm việc học của con.',
      talents: 'Tư duy toán học rất tốt, thích lắp ráp lego sáng tạo.',
      psychology: 'Nhanh nhẹn, năng động, thích phát biểu xây dựng bài. Thỉnh thoảng còn nói chuyện riêng trong giờ.',
      parentLogs: [
        { date: '2026-10-15', type: 'Nhắn Zalo', content: 'Trao đổi về việc tham gia câu lạc bộ Toán của trường.', result: 'Gia đình ủng hộ và đã đăng ký.' }
      ]
    },
    {
      id: 'HS002',
      stt: 2,
      name: 'Trần Thị Mai Anh',
      dob: '2015-08-20',
      gender: 'Nữ',
      parentName: 'Lê Thị Thu (Mẹ)',
      parentPhone: '0987654321',
      address: '24 Ngõ Trạm, Q. Hoàn Kiếm, Hà Nội',
      circumstance: 'Bố mẹ kinh doanh tự do, con ngoan, tự lập từ bé.',
      talents: 'Chữ viết rất đẹp, có năng khiếu MC và dẫn chương trình.',
      psychology: 'Chăm chỉ, lễ phép, là lớp phó học tập gương mẫu, luôn giúp đỡ bạn bè.',
      parentLogs: []
    },
    {
      id: 'HS003',
      stt: 3,
      name: 'Lê Hoàng Bách',
      dob: '2015-01-05',
      gender: 'Nam',
      parentName: 'Lê Hoàng Long (Bố)',
      parentPhone: '0903456789',
      address: '102 Hàng Bông, Hà Nội',
      circumstance: 'Hoàn cảnh khó khăn, bố mẹ làm thợ may, kinh tế eo hẹp.',
      talents: 'Khéo tay, vẽ tranh phong cảnh rất có hồn.',
      psychology: 'Hơi tự ti về hoàn cảnh, nhút nhát trước đám đông. Cần GVCN động viên, khen ngợi kịp thời.',
      parentLogs: [
        { date: '2026-09-20', type: 'Gặp trực tiếp', content: 'Thăm hỏi gia đình và hướng dẫn xin hỗ trợ chi phí bán trú.', result: 'Đã hoàn thiện hồ sơ hỗ trợ.' }
      ]
    },
    {
      id: 'HS004',
      stt: 4,
      name: 'Phạm Minh Châu',
      dob: '2015-11-14',
      gender: 'Nữ',
      parentName: 'Phạm Văn Dũng (Bố)',
      parentPhone: '0978112233',
      address: '45 Quán Sứ, Hà Nội',
      circumstance: 'Gia đình hiếu học, con một.',
      talents: 'Tiếng Anh lưu loát, trí nhớ tốt.',
      psychology: 'Tự tin, hòa đồng, hay chia sẻ với cô giáo.',
      parentLogs: []
    },
    {
      id: 'HS005',
      stt: 5,
      name: 'Đỗ Tuấn Dũng',
      dob: '2015-05-18',
      gender: 'Nam',
      parentName: 'Đỗ Quốc Hưng (Bố)',
      parentPhone: '0918776655',
      address: '78 Lý Thường Kiệt, Hà Nội',
      circumstance: 'Bố mẹ đi công tác xa thường xuyên, ở nhà với ông bà nội.',
      talents: 'Chạy nhanh, có thể lực tốt, yêu thích bóng đá.',
      psychology: 'Thiếu sự kèm cặp sát sao của bố mẹ, đôi khi quên làm bài tập về nhà. Cần nhắc nhở nhẹ nhàng.',
      parentLogs: [
        { date: '2026-10-02', type: 'Gọi điện', content: 'Báo tình hình em Dũng hay quên sách bài tập.', result: 'Bà nội đã hứa kiểm tra cặp sách mỗi tối.' }
      ]
    },
    {
      id: 'HS006',
      stt: 6,
      name: 'Vũ Ngọc Diệp',
      dob: '2015-09-09',
      gender: 'Nữ',
      parentName: 'Trần Thị Hà (Mẹ)',
      parentPhone: '0936224466',
      address: '12 Dã Tượng, Hà Nội',
      circumstance: 'Gia đình bình thường, mẹ là giáo viên mầm non.',
      talents: 'Hát hay, múa dẻo, tích cực tham gia văn nghệ trường.',
      psychology: 'Vui vẻ, hoạt bát, tinh thần tập thể cao.',
      parentLogs: []
    },
    {
      id: 'HS007',
      stt: 7,
      name: 'Bùi Gia Huy',
      dob: '2015-04-25',
      gender: 'Nam',
      parentName: 'Bùi Văn Hùng (Bố)',
      parentPhone: '0945331122',
      address: '56 Thợ Nhuộm, Hà Nội',
      circumstance: 'Gia đình khá giả, bố mẹ rất kỳ vọng.',
      talents: 'Yêu thích khoa học, tính toán nhanh.',
      psychology: 'Áp lực học tập đôi lúc làm em căng thẳng, cần tạo không khí thoải mái.',
      parentLogs: []
    },
    {
      id: 'HS008',
      stt: 8,
      name: 'Hoàng Thùy Linh',
      dob: '2015-12-03',
      gender: 'Nữ',
      parentName: 'Nguyễn Thị Oanh (Mẹ)',
      parentPhone: '0967889900',
      address: '89 Hai Bà Trưng, Hà Nội',
      circumstance: 'Mẹ đơn thân, một mình nuôi con.',
      talents: 'Khéo léo gấp giấy Origami, cẩn thận tỉ mỉ.',
      psychology: 'Hiền lành, tình cảm, rất nghe lời thầy cô giáo.',
      parentLogs: []
    },
    {
      id: 'HS009',
      stt: 9,
      name: 'Đặng Quốc Khánh',
      dob: '2015-07-16',
      gender: 'Nam',
      parentName: 'Đặng Tuấn Kiệt (Bố)',
      parentPhone: '0904123987',
      address: '33 Hàng Bài, Hà Nội',
      circumstance: 'Gia đình cơ bản.',
      talents: 'Chơi cờ vua tốt, giải nhì cấp trường.',
      psychology: 'Thông minh nhưng đôi khi hiếu động, ngồi học hay lắc lư bàn ghế.',
      parentLogs: []
    },
    {
      id: 'HS010',
      stt: 10,
      name: 'Ngô Bảo Nam',
      dob: '2015-02-28',
      gender: 'Nam',
      parentName: 'Ngô Văn Thành (Bố)',
      parentPhone: '0915667788',
      address: '18 Tràng Thi, Hà Nội',
      circumstance: 'Gia đình buôn bán phố cổ.',
      talents: 'Khả năng giao tiếp tốt, tự tin.',
      psychology: 'Mắt có dấu hiệu cận thị nhẹ, ngồi bàn thứ 3, phụ huynh đã cho đi khám mắt.',
      parentLogs: [
        { date: '2026-10-18', type: 'Nhắn Zalo', content: 'Nhờ cô xếp ngồi bàn đầu để nhìn bảng rõ hơn.', result: 'Đã chuyển em lên bàn 2 dãy giữa.' }
      ]
    },
    {
      id: 'HS011',
      stt: 11,
      name: 'Lý Thanh Nhã',
      dob: '2015-06-30',
      gender: 'Nữ',
      parentName: 'Lý Văn Hải (Bố)',
      parentPhone: '0982334455',
      address: '67 Bà Triệu, Hà Nội',
      circumstance: 'Gia đình viên chức.',
      talents: 'Đọc thơ truyền cảm, giải toán lời văn tốt.',
      psychology: 'Chững chạc, trách nhiệm, tổ trưởng gương mẫu.',
      parentLogs: []
    },
    {
      id: 'HS012',
      stt: 12,
      name: 'Dương Đức Phúc',
      dob: '2015-10-10',
      gender: 'Nam',
      parentName: 'Dương Quang Hưng (Bố)',
      parentPhone: '0922881177',
      address: '14 Phủ Doãn, Hà Nội',
      circumstance: 'Gia đình đông con (4 anh chị em), mẹ làm nội trợ.',
      talents: 'Nhanh nhẹn, có sức bền.',
      psychology: 'Thỉnh thoảng đi học muộn do chờ anh trai đưa đón.',
      parentLogs: []
    },
    {
      id: 'HS013',
      stt: 13,
      name: 'Mai Thảo Quyên',
      dob: '2015-04-04',
      gender: 'Nữ',
      parentName: 'Phan Thị Mai (Mẹ)',
      parentPhone: '0934556677',
      address: '29 Lý Quốc Sư, Hà Nội',
      circumstance: 'Bố mẹ hòa thuận, chăm lo con cái chu đáo.',
      talents: 'Kỹ năng làm việc nhóm tốt, vẽ tranh.',
      psychology: 'Lạc quan, nhiệt tình giúp đỡ bạn bè yếu hơn.',
      parentLogs: []
    },
    {
      id: 'HS014',
      stt: 14,
      name: 'Tạ Minh Quân',
      dob: '2015-08-15',
      gender: 'Nam',
      parentName: 'Tạ Văn Tuấn (Bố)',
      parentPhone: '0979661122',
      address: '8 Nhà Chung, Hà Nội',
      circumstance: 'Gia đình có truyền thống nghệ thuật.',
      talents: 'Chơi đàn piano và hát tốt.',
      psychology: 'Nhạy cảm, có năng khiếu nghệ thuật, tiếp thu các môn xã hội rất nhanh.',
      parentLogs: []
    },
    {
      id: 'HS015',
      stt: 15,
      name: 'Trịnh Hương Trà',
      dob: '2015-05-01',
      gender: 'Nữ',
      parentName: 'Trịnh Quang Minh (Bố)',
      parentPhone: '0912998877',
      address: '91 Hàng Gai, Hà Nội',
      circumstance: 'Bố mẹ kinh doanh đồ thủ công mỹ nghệ.',
      talents: 'Giao tiếp tiếng Anh với khách du lịch tự nhiên.',
      psychology: 'Năng nổ, thân thiện, được cả lớp quý mến.',
      parentLogs: []
    }
  ];

  // Khởi tạo điểm danh mẫu cho ngày hôm nay và vài ngày trước để có biểu đồ đẹp
  initSampleAttendance();
  // Khởi tạo đánh giá mẫu theo Thông tư 27
  initSampleAssessment();

  saveDataToStorage();
}

function initSampleAttendance() {
  const dates = [
    getOffsetDateStr(-4),
    getOffsetDateStr(-3),
    getOffsetDateStr(-2),
    getOffsetDateStr(-1),
    currentDate
  ];

  dates.forEach(d => {
    const sessionKey = `${d}_morning`;
    attendanceData[sessionKey] = {};
    students.forEach((s, idx) => {
      // Giả lập tỉ lệ đi học chuẩn 96-98%
      if (idx === 4 && d === currentDate) {
        attendanceData[sessionKey][s.id] = { status: 'late', note: 'Hỏng xe đạp điện' };
      } else if (idx === 2 && d === getOffsetDateStr(-1)) {
        attendanceData[sessionKey][s.id] = { status: 'excused', note: 'Sốt xuất huyết nhẹ mẹ xin phép' };
      } else if (idx === 7 && d === getOffsetDateStr(-3)) {
        attendanceData[sessionKey][s.id] = { status: 'excused', note: 'Về quê việc gia đình' };
      } else {
        attendanceData[sessionKey][s.id] = { status: 'present', note: '' };
      }
    });
  });
}

function initSampleAssessment() {
  assessmentData['mid_term1'] = {};
  students.forEach((s, idx) => {
    const isTop = idx % 3 === 0;
    const isGood = idx % 2 === 0;
    
    assessmentData['mid_term1'][s.id] = {
      pc_yeunuoc: 'T',
      pc_nhanai: isTop ? 'T' : 'Đ',
      pc_chamchi: isGood ? 'T' : 'Đ',
      pc_trungthuc: 'T',
      pc_trachnhiem: isTop ? 'T' : 'Đ',
      
      nl_tuchu: isTop ? 'T' : 'Đ',
      nl_giaotiep: isGood ? 'T' : (idx === 2 ? 'C' : 'Đ'),
      nl_giaiquyet: isTop ? 'T' : 'Đ',

      nl_ngonngu: isGood ? 'T' : 'Đ',
      nl_tinhtoan: isTop ? 'T' : (idx === 4 ? 'C' : 'Đ'),
      nl_khoahoc: 'Đ',
      nl_congnghe: 'Đ',
      nl_tinhoc: isTop ? 'T' : 'Đ',
      nl_thammy: idx === 2 ? 'T' : 'Đ',
      nl_thechat: idx === 4 ? 'T' : 'Đ',

      comment: isTop 
        ? "Em tiếp thu bài nhanh, tự giác học tập và luôn gương mẫu trong mọi hoạt động của lớp."
        : "Chăm ngoan, hòa đồng với bạn bè. Cần tự tin hơn nữa khi phát biểu trước lớp."
    };
  });
}

function getOffsetDateStr(daysOffset) {
  const d = new Date();
  d.setDate(d.getDate() + daysOffset);
  return d.toISOString().split('T')[0];
}

// ================= NAVIGATION TABS =================
function switchTab(tabId) {
  document.querySelectorAll('.tab-pane').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));

  const activePane = document.getElementById(`tab-${tabId}`);
  const activeNav = document.getElementById(`nav-${tabId}`);
  if (activePane) activePane.classList.remove('hidden');
  if (activeNav) activeNav.classList.add('active');

  // Trigger re-renders if necessary
  if (tabId === 'attendance') {
    renderAttendanceTable();
  } else if (tabId === 'profiles') {
    renderProfileCards();
  } else if (tabId === 'circular27') {
    renderAssessmentView();
  } else if (tabId === 'reports') {
    renderReports();
  }
}

// ========================================================
// TAB 1: ĐIỂM DANH NHANH 1 CHẠM & CHUYÊN CẦN LOGIC
// ========================================================

function getAttendanceSessionKey() {
  return `${currentDate}_${currentSession}`;
}

function getAttendanceRecord(studentId) {
  const key = getAttendanceSessionKey();
  if (!attendanceData[key]) attendanceData[key] = {};
  if (!attendanceData[key][studentId]) {
    // Default is 'present'
    attendanceData[key][studentId] = { status: 'present', note: '' };
  }
  return attendanceData[key][studentId];
}

function setAttendanceDate(newDate) {
  currentDate = newDate;
  document.getElementById('attendanceDatePicker').value = currentDate;
  loadAttendanceForDate();
}

function setAttendanceToday() {
  currentDate = new Date().toISOString().split('T')[0];
  document.getElementById('attendanceDatePicker').value = currentDate;
  loadAttendanceForDate();
}

function changeAttendanceDate(deltaDays) {
  const d = new Date(currentDate);
  d.setDate(d.getDate() + deltaDays);
  currentDate = d.toISOString().split('T')[0];
  document.getElementById('attendanceDatePicker').value = currentDate;
  loadAttendanceForDate();
}

function loadAttendanceForDate() {
  currentDate = document.getElementById('attendanceDatePicker').value;
  renderAttendanceTable();
}

function setSession(session) {
  currentSession = session;
  const btnM = document.getElementById('sessionBtnMorning');
  const btnA = document.getElementById('sessionBtnAfternoon');

  if (session === 'morning') {
    btnM.className = 'px-3.5 py-1.5 rounded-lg text-sm font-bold transition bg-white text-blue-700 shadow-sm';
    btnA.className = 'px-3.5 py-1.5 rounded-lg text-sm font-bold text-slate-600 transition hover:text-slate-900';
  } else {
    btnA.className = 'px-3.5 py-1.5 rounded-lg text-sm font-bold transition bg-white text-blue-700 shadow-sm';
    btnM.className = 'px-3.5 py-1.5 rounded-lg text-sm font-bold text-slate-600 transition hover:text-slate-900';
  }
  renderAttendanceTable();
}

// 1 Chạm: Chuyển đổi trạng thái điểm danh cho một học sinh
function setAttendanceStatus(studentId, newStatus) {
  const key = getAttendanceSessionKey();
  if (!attendanceData[key]) attendanceData[key] = {};
  if (!attendanceData[key][studentId]) {
    attendanceData[key][studentId] = { status: 'present', note: '' };
  }

  attendanceData[key][studentId].status = newStatus;
  saveDataToStorage();
  
  // Re-render UI
  updateAttendanceRowUI(studentId);
  updateAttendanceStats();
}

function updateAttendanceNote(studentId, note) {
  const key = getAttendanceSessionKey();
  if (!attendanceData[key]) attendanceData[key] = {};
  if (!attendanceData[key][studentId]) {
    attendanceData[key][studentId] = { status: 'present', note: '' };
  }
  attendanceData[key][studentId].note = note;
  saveDataToStorage();
}

// 1 Chạm: Đánh dấu tất cả Có Mặt
function markAllPresent() {
  const key = getAttendanceSessionKey();
  if (!attendanceData[key]) attendanceData[key] = {};
  students.forEach(s => {
    attendanceData[key][s.id] = { status: 'present', note: '' };
  });
  saveDataToStorage();
  renderAttendanceTable();
}

// Đặt lại dữ liệu ngày hiện tại
function resetDayAttendance() {
  if (confirm(`Bạn có chắc muốn đặt lại toàn bộ điểm danh ngày ${currentDate} không?`)) {
    const key = getAttendanceSessionKey();
    attendanceData[key] = {};
    students.forEach(s => {
      attendanceData[key][s.id] = { status: 'present', note: '' };
    });
    saveDataToStorage();
    renderAttendanceTable();
  }
}

// Tính tổng số buổi vắng trong tháng / lịch sử của học sinh
function getStudentAbsenceCount(studentId) {
  let excused = 0;
  let unexcused = 0;
  let late = 0;

  Object.keys(attendanceData).forEach(k => {
    const rec = attendanceData[k][studentId];
    if (rec) {
      if (rec.status === 'excused') excused++;
      if (rec.status === 'unexcused') unexcused++;
      if (rec.status === 'late') late++;
    }
  });

  return { excused, unexcused, late, totalAbsent: excused + unexcused };
}

function filterAttendanceStatus(status) {
  currentAttendanceFilter = status;
  document.querySelectorAll('.att-filter-btn').forEach(btn => {
    btn.classList.remove('bg-slate-800', 'text-white', 'active');
    btn.classList.add('bg-slate-100', 'text-slate-700');
  });
  event.target.classList.add('bg-slate-800', 'text-white', 'active');
  renderAttendanceTable();
}

function filterAttendanceList() {
  renderAttendanceTable();
}

function renderAttendanceTable() {
  const tbody = document.getElementById('attendanceListBody');
  if (!tbody) return;

  const searchQuery = (document.getElementById('attendanceSearch')?.value || '').toLowerCase().trim();
  const key = getAttendanceSessionKey();
  if (!attendanceData[key]) {
    attendanceData[key] = {};
    students.forEach(s => {
      attendanceData[key][s.id] = { status: 'present', note: '' };
    });
  }

  let html = '';
  students.forEach((s, idx) => {
    const rec = getAttendanceRecord(s.id);

    // Apply Filters
    if (currentAttendanceFilter === 'absent' && rec.status !== 'excused' && rec.status !== 'unexcused') return;
    if (currentAttendanceFilter === 'late' && rec.status !== 'late') return;
    if (searchQuery && !s.name.toLowerCase().includes(searchQuery) && !String(s.stt).includes(searchQuery)) return;

    const absStats = getStudentAbsenceCount(s.id);
    const genderBadge = s.gender === 'Nữ' 
      ? '<span class="text-pink-600 bg-pink-50 px-2 py-0.5 rounded-md text-xs font-bold mr-1">Nữ</span>'
      : '<span class="text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md text-xs font-bold mr-1">Nam</span>';

    // Highlight row if absent or late
    let rowBg = 'hover:bg-slate-50';
    if (rec.status === 'unexcused') rowBg = 'bg-rose-50/70 hover:bg-rose-50';
    else if (rec.status === 'excused') rowBg = 'bg-amber-50/70 hover:bg-amber-50';
    else if (rec.status === 'late') rowBg = 'bg-yellow-50/70 hover:bg-yellow-50';

    html += `
      <tr class="${rowBg} transition" id="attRow_${s.id}">
        <!-- STT -->
        <td class="py-3 px-3 sm:px-4 text-center font-black text-slate-500 text-sm">
          ${String(s.stt).padStart(2, '0')}
        </td>

        <!-- Họ tên & Thông tin -->
        <td class="py-3 px-3 sm:px-4">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-full ${s.gender === 'Nữ' ? 'bg-pink-100 text-pink-600' : 'bg-blue-100 text-blue-700'} font-bold flex items-center justify-center text-sm shadow-sm">
              ${s.name.split(' ').pop().charAt(0)}
            </div>
            <div>
              <div class="font-extrabold text-slate-800 text-base leading-tight">${s.name}</div>
              <div class="text-xs text-slate-500 mt-0.5 flex items-center gap-1.5">
                ${genderBadge}
                <span>${s.dob ? formatDate(s.dob) : ''}</span>
                ${s.circumstance ? '<span class="text-amber-600 font-bold" title="Có hoàn cảnh đặc biệt"><i class="fa-solid fa-house-chimney-crack ml-1"></i></span>' : ''}
              </div>
            </div>
          </div>
        </td>

        <!-- BỘ NÚT 1 CHẠM ĐIỂM DANH -->
        <td class="py-3 px-3 sm:px-4 text-center">
          <div class="inline-flex flex-wrap items-center justify-center gap-1.5 p-1 bg-slate-100/80 rounded-2xl border border-slate-200">
            <!-- CÓ MẶT -->
            <button onclick="setAttendanceStatus('${s.id}', 'present')" class="att-btn att-btn-present ${rec.status === 'present' ? 'selected' : ''}" title="Có mặt">
              <i class="fa-solid fa-check"></i>
              <span>Có mặt</span>
            </button>

            <!-- VẮNG CÓ PHÉP -->
            <button onclick="setAttendanceStatus('${s.id}', 'excused')" class="att-btn att-btn-excused ${rec.status === 'excused' ? 'selected' : ''}" title="Vắng có phép">
              <i class="fa-solid fa-envelope"></i>
              <span>Phép (P)</span>
            </button>

            <!-- VẮNG KHÔNG PHÉP -->
            <button onclick="setAttendanceStatus('${s.id}', 'unexcused')" class="att-btn att-btn-unexcused ${rec.status === 'unexcused' ? 'selected' : ''}" title="Vắng không phép">
              <i class="fa-solid fa-xmark"></i>
              <span>KP</span>
            </button>

            <!-- ĐI MUỘN -->
            <button onclick="setAttendanceStatus('${s.id}', 'late')" class="att-btn att-btn-late ${rec.status === 'late' ? 'selected' : ''}" title="Đi muộn">
              <i class="fa-solid fa-clock"></i>
              <span>Muộn</span>
            </button>
          </div>
        </td>

        <!-- GHI CHÚ / LÝ DO -->
        <td class="py-3 px-3 sm:px-4">
          <div class="relative">
            <input type="text" 
              value="${rec.note || ''}" 
              placeholder="${rec.status !== 'present' ? 'Nhập lý do...' : 'Ghi chú nhanh...'}" 
              onchange="updateAttendanceNote('${s.id}', this.value)" 
              class="w-full px-3 py-1.5 text-xs sm:text-sm bg-slate-50 border ${rec.status !== 'present' ? 'border-amber-300 bg-amber-50/50' : 'border-slate-200'} rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition">
          </div>
        </td>

        <!-- LỊCH SỬ VẮNG -->
        <td class="py-3 px-3 sm:px-4 text-center">
          ${absStats.totalAbsent > 0 ? `
            <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-black ${absStats.totalAbsent >= 3 ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-800'}" title="${absStats.excused} phép, ${absStats.unexcused} không phép">
              ${absStats.totalAbsent} buổi vắng
            </span>
          ` : `
            <span class="text-xs text-slate-400 font-medium">0</span>
          `}
        </td>
      </tr>
    `;
  });

  if (students.length === 0) {
    html = `
      <tr>
        <td colspan="5" class="py-8 text-center text-slate-400">
          <i class="fa-solid fa-users-slash text-4xl mb-2"></i>
          <p>Chưa có học sinh nào. Hãy nhấn sang tab "Sổ tay cá nhân số" để thêm học sinh hoặc nạp dữ liệu mẫu.</p>
        </td>
      </tr>
    `;
  }

  tbody.innerHTML = html;
  updateAttendanceStats();
}

function updateAttendanceRowUI(studentId) {
  // Rather than re-rendering whole table which loses focus, re-render table smoothly
  renderAttendanceTable();
}

function updateAttendanceStats() {
  const key = getAttendanceSessionKey();
  const sessionData = attendanceData[key] || {};
  
  let total = students.length;
  let present = 0;
  let excused = 0;
  let unexcused = 0;
  let late = 0;

  students.forEach(s => {
    const rec = sessionData[s.id];
    const status = rec ? rec.status : 'present';
    if (status === 'present') present++;
    else if (status === 'excused') excused++;
    else if (status === 'unexcused') unexcused++;
    else if (status === 'late') late++;
  });

  document.getElementById('statTotalStudents').innerText = total;
  document.getElementById('statPresentCount').innerText = present;
  document.getElementById('statExcusedCount').innerText = excused;
  document.getElementById('statUnexcusedCount').innerText = unexcused;
  document.getElementById('statLateCount').innerText = late;
}

// ========================================================
// TAB 2: SỔ TAY CÁ NHÂN SỐ & HỒ SƠ HỌC SINH
// ========================================================

function renderProfileCards() {
  const grid = document.getElementById('profileCardsGrid');
  if (!grid) return;

  const searchQuery = (document.getElementById('profileSearchInput')?.value || '').toLowerCase().trim();
  const tagFilter = document.getElementById('profileTagFilter')?.value || 'all';

  let html = '';
  students.forEach(s => {
    // Search query filter
    if (searchQuery) {
      const matchName = s.name.toLowerCase().includes(searchQuery);
      const matchPhone = (s.parentPhone || '').includes(searchQuery);
      const matchCircum = (s.circumstance || '').toLowerCase().includes(searchQuery);
      const matchTalent = (s.talents || '').toLowerCase().includes(searchQuery);
      if (!matchName && !matchPhone && !matchCircum && !matchTalent) return;
    }

    // Tag filter
    if (tagFilter === 'special_circumstance' && !s.circumstance) return;
    if (tagFilter === 'special_talent' && !s.talents) return;
    if (tagFilter === 'psychology' && !s.psychology) return;

    const absStats = getStudentAbsenceCount(s.id);
    const parentLogsCount = (s.parentLogs || []).length;

    html += `
      <div class="bg-white rounded-3xl p-5 shadow-sm border border-slate-200 hover:shadow-md transition flex flex-col justify-between space-y-4">
        <!-- Card Header -->
        <div>
          <div class="flex items-start justify-between gap-3">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-2xl ${s.gender === 'Nữ' ? 'bg-pink-100 text-pink-700' : 'bg-blue-100 text-blue-700'} font-black flex items-center justify-center text-lg shadow-sm">
                ${s.name.split(' ').pop().charAt(0)}
              </div>
              <div>
                <div class="flex items-center gap-1.5">
                  <span class="text-xs font-bold text-slate-400">#${String(s.stt).padStart(2, '0')}</span>
                  <h3 class="font-extrabold text-slate-900 text-base leading-tight hover:text-blue-600 cursor-pointer" onclick="openStudentModal('${s.id}')">${s.name}</h3>
                </div>
                <p class="text-xs text-slate-500 mt-0.5">
                  ${s.gender} • Sinh ngày ${s.dob ? formatDate(s.dob) : 'Chưa cập nhật'}
                </p>
              </div>
            </div>

            <button onclick="openStudentModal('${s.id}')" class="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition" title="Chỉnh sửa hồ sơ">
              <i class="fa-solid fa-pen text-xs"></i>
            </button>
          </div>

          <!-- Thông tin phụ huynh & Liên hệ nhanh -->
          <div class="mt-3.5 pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1.5">
            <div class="flex items-center justify-between">
              <span class="font-semibold text-slate-500"><i class="fa-solid fa-user-shield text-blue-500 mr-1.5"></i>PH: ${s.parentName || 'Chưa cập nhật'}</span>
              ${s.parentPhone ? `
                <a href="tel:${s.parentPhone}" class="font-bold text-blue-600 hover:underline flex items-center gap-1 bg-blue-50 px-2 py-0.5 rounded-md">
                  <i class="fa-solid fa-phone text-[10px]"></i> ${s.parentPhone}
                </a>
              ` : '<span class="text-slate-400">Chưa có SĐT</span>'}
            </div>

            ${s.address ? `
              <p class="text-[11px] text-slate-500 truncate" title="${s.address}">
                <i class="fa-solid fa-location-dot text-slate-400 mr-1.5"></i>${s.address}
              </p>
            ` : ''}
          </div>

          <!-- SỔ TAY CÁ NHÂN SỐ CỦA GVCN (MỤC CỐT LÕI) -->
          <div class="mt-3 space-y-2 pt-3 border-t border-slate-100">
            <!-- Hoàn cảnh gia đình -->
            ${s.circumstance ? `
              <div class="bg-rose-50/80 border border-rose-200/80 rounded-xl p-2.5 text-xs">
                <span class="font-bold text-rose-800 flex items-center gap-1 mb-0.5">
                  <i class="fa-solid fa-house-chimney-crack text-rose-600"></i> Hoàn cảnh gia đình:
                </span>
                <p class="text-rose-950 font-medium">${s.circumstance}</p>
              </div>
            ` : ''}

            <!-- Năng khiếu / Năng lực đặc biệt -->
            ${s.talents ? `
              <div class="bg-amber-50/80 border border-amber-200/80 rounded-xl p-2.5 text-xs">
                <span class="font-bold text-amber-800 flex items-center gap-1 mb-0.5">
                  <i class="fa-solid fa-star text-amber-500"></i> Năng lực đặc biệt / Năng khiếu:
                </span>
                <p class="text-amber-950 font-medium">${s.talents}</p>
              </div>
            ` : ''}

            <!-- Biểu hiện tâm lý / Lưu ý sư phạm -->
            ${s.psychology ? `
              <div class="bg-purple-50/80 border border-purple-200/80 rounded-xl p-2.5 text-xs">
                <span class="font-bold text-purple-800 flex items-center gap-1 mb-0.5">
                  <i class="fa-solid fa-brain text-purple-600"></i> Biểu hiện tâm lý & Sức khỏe:
                </span>
                <p class="text-purple-950 font-medium">${s.psychology}</p>
              </div>
            ` : ''}
          </div>
        </div>

        <!-- Footer Card: Số lần liên hệ phụ huynh & Nhật ký nhanh -->
        <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <div class="flex items-center gap-2">
            <span class="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg font-bold flex items-center gap-1" title="Lịch sử trao đổi phụ huynh">
              <i class="fa-solid fa-comments text-blue-500"></i> ${parentLogsCount} nhật ký
            </span>
            ${absStats.totalAbsent > 0 ? `
              <span class="bg-amber-100 text-amber-800 px-2 py-1 rounded-lg font-bold" title="Số buổi vắng trong năm">
                ${absStats.totalAbsent} vắng
              </span>
            ` : ''}
          </div>

          <button onclick="openQuickLogModal('${s.id}')" class="px-3 py-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-xl font-bold transition flex items-center gap-1">
            <i class="fa-solid fa-phone-volume"></i> Ghi trao đổi
          </button>
        </div>
      </div>
    `;
  });

  if (students.length === 0) {
    html = `
      <div class="col-span-full py-12 text-center text-slate-400 bg-white rounded-3xl border border-slate-200 p-8">
        <i class="fa-solid fa-id-card-clip text-5xl mb-3 text-slate-300"></i>
        <h3 class="text-lg font-bold text-slate-700 mb-1">Chưa có học sinh nào trong sổ</h3>
        <p class="text-sm text-slate-500 mb-4">Bạn có thể tạo mới học sinh hoặc nạp danh sách mẫu 25 học sinh chuẩn để thử nghiệm.</p>
        <button onclick="loadSampleVietnameseStudents()" class="px-5 py-2.5 bg-blue-600 text-white font-bold rounded-xl shadow hover:bg-blue-700">
          Nạp Dữ Liệu Mẫu
        </button>
      </div>
    `;
  }

  grid.innerHTML = html;
}

function filterProfileCards() {
  renderProfileCards();
}

// Student Modal (Add / Edit)
function openStudentModal(studentId = null) {
  const modal = document.getElementById('studentModal');
  const title = document.getElementById('modalStudentTitle');
  const btnDelete = document.getElementById('btnDeleteStudent');

  if (studentId) {
    const s = students.find(item => item.id === studentId);
    if (!s) return;
    title.innerText = `Chỉnh Sửa Hồ Sơ: ${s.name}`;
    document.getElementById('editStudentId').value = s.id;
    document.getElementById('mStudentName').value = s.name || '';
    document.getElementById('mStudentDob').value = s.dob || '';
    document.getElementById('mStudentGender').value = s.gender || 'Nam';
    document.getElementById('mStudentParentName').value = s.parentName || '';
    document.getElementById('mStudentParentPhone').value = s.parentPhone || '';
    document.getElementById('mStudentAddress').value = s.address || '';
    document.getElementById('mStudentCircumstance').value = s.circumstance || '';
    document.getElementById('mStudentTalents').value = s.talents || '';
    document.getElementById('mStudentPsychology').value = s.psychology || '';

    btnDelete.classList.remove('hidden');
    renderParentLogListInModal(s.parentLogs || []);
  } else {
    title.innerText = 'Thêm Học Sinh Mới';
    document.getElementById('editStudentId').value = '';
    document.getElementById('mStudentName').value = '';
    document.getElementById('mStudentDob').value = '';
    document.getElementById('mStudentGender').value = 'Nam';
    document.getElementById('mStudentParentName').value = '';
    document.getElementById('mStudentParentPhone').value = '';
    document.getElementById('mStudentAddress').value = '';
    document.getElementById('mStudentCircumstance').value = '';
    document.getElementById('mStudentTalents').value = '';
    document.getElementById('mStudentPsychology').value = '';

    btnDelete.classList.add('hidden');
    renderParentLogListInModal([]);
  }

  modal.classList.remove('hidden');
}

function closeStudentModal() {
  document.getElementById('studentModal').classList.add('hidden');
}

function saveStudentModal() {
  const name = document.getElementById('mStudentName').value.trim();
  if (!name) {
    alert('Vui lòng nhập Họ và tên học sinh!');
    return;
  }

  const editId = document.getElementById('editStudentId').value;
  const dob = document.getElementById('mStudentDob').value;
  const gender = document.getElementById('mStudentGender').value;
  const parentName = document.getElementById('mStudentParentName').value.trim();
  const parentPhone = document.getElementById('mStudentParentPhone').value.trim();
  const address = document.getElementById('mStudentAddress').value.trim();
  const circumstance = document.getElementById('mStudentCircumstance').value.trim();
  const talents = document.getElementById('mStudentTalents').value.trim();
  const psychology = document.getElementById('mStudentPsychology').value.trim();

  if (editId) {
    // Edit existing
    const s = students.find(item => item.id === editId);
    if (s) {
      s.name = name;
      s.dob = dob;
      s.gender = gender;
      s.parentName = parentName;
      s.parentPhone = parentPhone;
      s.address = address;
      s.circumstance = circumstance;
      s.talents = talents;
      s.psychology = psychology;
    }
  } else {
    // Add new
    const newId = 'HS' + String(students.length + 1).padStart(3, '0');
    const newStudent = {
      id: newId,
      stt: students.length + 1,
      name,
      dob,
      gender,
      parentName,
      parentPhone,
      address,
      circumstance,
      talents,
      psychology,
      parentLogs: []
    };
    students.push(newStudent);
  }

  saveDataToStorage();
  closeStudentModal();
  renderProfileCards();
  renderAttendanceTable();
  renderAssessmentView();
}

function deleteCurrentStudent() {
  const editId = document.getElementById('editStudentId').value;
  if (!editId) return;

  const s = students.find(item => item.id === editId);
  if (confirm(`Bạn có chắc muốn xóa học sinh "${s?.name}" khỏi sổ không?`)) {
    students = students.filter(item => item.id !== editId);
    // Re-index STT
    students.forEach((item, index) => item.stt = index + 1);
    saveDataToStorage();
    closeStudentModal();
    renderProfileCards();
    renderAttendanceTable();
    renderAssessmentView();
  }
}

// Parent Log modal list rendering
function renderParentLogListInModal(logs) {
  const container = document.getElementById('mParentLogList');
  if (!container) return;

  if (logs.length === 0) {
    container.innerHTML = '<p class="text-xs text-slate-400 italic">Chưa có lịch sử trao đổi nào với phụ huynh.</p>';
    return;
  }

  container.innerHTML = logs.map(log => `
    <div class="bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs space-y-1">
      <div class="flex items-center justify-between text-slate-500 font-semibold">
        <span><i class="fa-solid fa-clock text-blue-500 mr-1"></i>${log.date} (${log.type})</span>
      </div>
      <p class="text-slate-800 font-medium">${log.content}</p>
      ${log.result ? `<p class="text-emerald-700 font-semibold">Kết quả: ${log.result}</p>` : ''}
    </div>
  `).join('');
}

function addParentLogEntry() {
  const editId = document.getElementById('editStudentId').value;
  if (!editId) {
    alert('Vui lòng lưu học sinh trước khi thêm nhật ký trao đổi!');
    return;
  }
  closeStudentModal();
  openQuickLogModal(editId);
}

// Quick Log Modal
function openQuickLogModal(studentId) {
  const s = students.find(item => item.id === studentId);
  if (!s) return;

  document.getElementById('quickLogStudentId').value = s.id;
  document.getElementById('quickLogStudentName').innerText = `Học sinh: ${s.name} (PH: ${s.parentPhone || 'Chưa có SĐT'})`;
  document.getElementById('quickLogContent').value = '';
  document.getElementById('quickLogResult').value = '';
  document.getElementById('quickLogModal').classList.remove('hidden');
}

function closeQuickLogModal() {
  document.getElementById('quickLogModal').classList.add('hidden');
}

function saveQuickLog() {
  const studentId = document.getElementById('quickLogStudentId').value;
  const content = document.getElementById('quickLogContent').value.trim();
  const type = document.getElementById('quickLogType').value;
  const result = document.getElementById('quickLogResult').value.trim();

  if (!content) {
    alert('Vui lòng nhập nội dung trao đổi!');
    return;
  }

  const s = students.find(item => item.id === studentId);
  if (s) {
    if (!s.parentLogs) s.parentLogs = [];
    s.parentLogs.unshift({
      date: new Date().toISOString().split('T')[0],
      type,
      content,
      result
    });
    saveDataToStorage();
    closeQuickLogModal();
    renderProfileCards();
  }
}

// ========================================================
// TAB 3: ĐÁNH GIÁ THEO THÔNG TƯ 27/2020/TT-BGDĐT
// ========================================================

function loadAssessmentData() {
  currentAssessmentPeriod = document.getElementById('assessmentPeriodSelect').value;
  renderAssessmentView();
}

function setAssessmentView(view) {
  currentAssessmentView = view;
  const btnMatrix = document.getElementById('btnViewMatrix');
  const btnDetail = document.getElementById('btnViewDetail');
  const matrixContainer = document.getElementById('assessmentMatrixContainer');
  const detailContainer = document.getElementById('assessmentDetailContainer');

  if (view === 'matrix') {
    btnMatrix.className = 'px-3.5 py-1.5 rounded-lg text-xs font-black bg-white text-emerald-900 shadow';
    btnDetail.className = 'px-3.5 py-1.5 rounded-lg text-xs font-black bg-white/15 text-white hover:bg-white/25';
    matrixContainer.classList.remove('hidden');
    detailContainer.classList.add('hidden');
    renderMatrixAssessment();
  } else {
    btnDetail.className = 'px-3.5 py-1.5 rounded-lg text-xs font-black bg-white text-emerald-900 shadow';
    btnMatrix.className = 'px-3.5 py-1.5 rounded-lg text-xs font-black bg-white/15 text-white hover:bg-white/25';
    detailContainer.classList.remove('hidden');
    matrixContainer.classList.add('hidden');
    renderDetailAssessment();
  }
}

function renderAssessmentView() {
  if (currentAssessmentView === 'matrix') {
    renderMatrixAssessment();
  } else {
    renderDetailAssessment();
  }
}

function getPeriodAssessment() {
  if (!assessmentData[currentAssessmentPeriod]) {
    assessmentData[currentAssessmentPeriod] = {};
  }
  return assessmentData[currentAssessmentPeriod];
}

function getStudentAssessment(studentId) {
  const periodData = getPeriodAssessment();
  if (!periodData[studentId]) {
    periodData[studentId] = {
      pc_yeunuoc: 'T',
      pc_nhanai: 'Đ',
      pc_chamchi: 'Đ',
      pc_trungthuc: 'T',
      pc_trachnhiem: 'Đ',
      nl_tuchu: 'Đ',
      nl_giaotiep: 'Đ',
      nl_giaiquyet: 'Đ',
      nl_ngonngu: 'Đ',
      nl_tinhtoan: 'Đ',
      nl_khoahoc: 'Đ',
      nl_congnghe: 'Đ',
      nl_tinhoc: 'Đ',
      nl_thammy: 'Đ',
      nl_thechat: 'Đ',
      comment: 'Hoàn thành tốt các nội dung học tập và rèn luyện.'
    };
  }
  return periodData[studentId];
}

// 1 Chạm: Bấm vào ô ma trận để đổi T -> Đ -> C -> T
function toggleMatrixCell(studentId, criteriaId) {
  const rec = getStudentAssessment(studentId);
  const currentVal = rec[criteriaId] || 'Đ';
  let nextVal = 'T';
  if (currentVal === 'T') nextVal = 'Đ';
  else if (currentVal === 'Đ') nextVal = 'C';
  else if (currentVal === 'C') nextVal = 'T';

  rec[criteriaId] = nextVal;
  saveDataToStorage();

  // Re-render cell
  const btn = document.getElementById(`cell_${studentId}_${criteriaId}`);
  if (btn) {
    btn.className = `matrix-cell-btn cell-${nextVal}`;
    btn.innerText = nextVal;
  }
}

function updateMatrixComment(studentId, comment) {
  const rec = getStudentAssessment(studentId);
  rec.comment = comment;
  saveDataToStorage();
}

function quickFillAllAssessment(val) {
  if (confirm(`Bạn có chắc muốn đặt tất cả tiêu chí đánh giá toàn lớp về mức [${val}] không?`)) {
    const periodData = getPeriodAssessment();
    students.forEach(s => {
      const rec = getStudentAssessment(s.id);
      TT27_QUALITIES.forEach(q => rec[q.id] = val);
      TT27_CORE_COMPETENCIES.forEach(c => rec[c.id] = val);
      TT27_SPECIFIC_COMPETENCIES.forEach(sc => rec[sc.id] = val);
    });
    saveDataToStorage();
    renderMatrixAssessment();
  }
}

function renderMatrixAssessment() {
  const tbody = document.getElementById('matrixAssessmentBody');
  if (!tbody) return;

  let html = '';
  students.forEach(s => {
    const rec = getStudentAssessment(s.id);

    html += `
      <tr class="hover:bg-slate-50 transition">
        <!-- STT & Họ tên -->
        <td class="py-2.5 px-2 font-bold text-slate-500 border-r border-slate-200">${s.stt}</td>
        <td class="py-2.5 px-3 font-extrabold text-slate-800 text-left border-r border-slate-200">
          <div class="hover:text-blue-600 cursor-pointer" onclick="selectDetailStudentById('${s.id}')">
            ${s.name}
          </div>
        </td>

        <!-- 5 PHẨM CHẤT CHỦ YẾU (Yêu nước, Nhân ái, Chăm chỉ, Trung thực, Trách nhiệm) -->
        ${TT27_QUALITIES.map(q => `
          <td class="py-1 px-1 border-r border-slate-200">
            <button id="cell_${s.id}_${q.id}" onclick="toggleMatrixCell('${s.id}', '${q.id}')" class="matrix-cell-btn cell-${rec[q.id] || 'Đ'}" title="${q.label}: Bấm để đổi T/Đ/C">
              ${rec[q.id] || 'Đ'}
            </button>
          </td>
        `).join('')}

        <!-- 3 NĂNG LỰC CHUNG (Tự chủ, Giao tiếp, Giải quyết vấn đề) -->
        ${TT27_CORE_COMPETENCIES.map(c => `
          <td class="py-1 px-1 border-r border-slate-200">
            <button id="cell_${s.id}_${c.id}" onclick="toggleMatrixCell('${s.id}', '${c.id}')" class="matrix-cell-btn cell-${rec[c.id] || 'Đ'}" title="${c.label}: Bấm để đổi T/Đ/C">
              ${rec[c.id] || 'Đ'}
            </button>
          </td>
        `).join('')}

        <!-- 7 NĂNG LỰC ĐẶC THÙ (Ngôn ngữ, Tính toán, KH, CN, Tin, Thẩm mỹ, Thể chất) -->
        ${TT27_SPECIFIC_COMPETENCIES.map(sc => `
          <td class="py-1 px-1 border-r border-slate-200">
            <button id="cell_${s.id}_${sc.id}" onclick="toggleMatrixCell('${s.id}', '${sc.id}')" class="matrix-cell-btn cell-${rec[sc.id] || 'Đ'}" title="${sc.label}: Bấm để đổi T/Đ/C">
              ${rec[sc.id] || 'Đ'}
            </button>
          </td>
        `).join('')}

        <!-- LỜI NHẬN XÉT CỦA GVCN -->
        <td class="py-1 px-2 text-left">
          <input type="text" 
            value="${rec.comment || ''}" 
            placeholder="Ghi nhận xét đánh giá..." 
            onchange="updateMatrixComment('${s.id}', this.value)" 
            class="w-full px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-1 focus:ring-emerald-500 focus:outline-none">
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

// VIEW B: CHI TIẾT ĐÁNH GIÁ TỪNG HỌC SINH & GỢI Ý NHẬN XÉT
function renderDetailAssessment() {
  const listContainer = document.getElementById('detailStudentList');
  if (!listContainer) return;

  const countBadge = document.getElementById('detailStudentCount');
  if (countBadge) countBadge.innerText = `${students.length} HS`;

  const searchQuery = (document.getElementById('detailSearchInput')?.value || '').toLowerCase().trim();

  let html = '';
  students.forEach((s, idx) => {
    if (searchQuery && !s.name.toLowerCase().includes(searchQuery)) return;

    const isSelected = idx === selectedStudentForDetailIndex;
    html += `
      <div onclick="selectDetailStudent(${idx})" class="p-3 rounded-xl cursor-pointer transition flex items-center justify-between ${isSelected ? 'bg-emerald-600 text-white font-black shadow' : 'bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold'}">
        <div class="flex items-center gap-2.5">
          <span class="w-6 text-center text-xs opacity-70">${s.stt}</span>
          <span class="text-sm">${s.name}</span>
        </div>
        <i class="fa-solid fa-chevron-right text-xs opacity-60"></i>
      </div>
    `;
  });
  listContainer.innerHTML = html;

  loadCurrentDetailStudentForm();
}

function filterDetailStudentList() {
  renderDetailAssessment();
}

function selectDetailStudent(index) {
  selectedStudentForDetailIndex = index;
  renderDetailAssessment();
}

function selectDetailStudentById(studentId) {
  const idx = students.findIndex(s => s.id === studentId);
  if (idx !== -1) {
    selectedStudentForDetailIndex = idx;
    setAssessmentView('student_detail');
  }
}

function navDetailStudent(delta) {
  let nextIdx = selectedStudentForDetailIndex + delta;
  if (nextIdx < 0) nextIdx = students.length - 1;
  if (nextIdx >= students.length) nextIdx = 0;
  selectDetailStudent(nextIdx);
}

function loadCurrentDetailStudentForm() {
  const currentStudent = students[selectedStudentForDetailIndex];
  if (!currentStudent) return;

  document.getElementById('detailCurrentStt').innerText = `STT ${currentStudent.stt}`;
  document.getElementById('detailCurrentName').innerText = currentStudent.name;
  document.getElementById('detailCurrentInfo').innerText = `Mã: ${currentStudent.id} | Giới tính: ${currentStudent.gender} | Ngày sinh: ${currentStudent.dob ? formatDate(currentStudent.dob) : 'N/A'}`;

  const rec = getStudentAssessment(currentStudent.id);

  // Render 5 Phẩm chất
  const qGrid = document.getElementById('qualitiesPickerGrid');
  if (qGrid) {
    qGrid.innerHTML = TT27_QUALITIES.map(q => `
      <div class="bg-slate-50 border border-slate-200 rounded-2xl p-3 flex items-center justify-between">
        <div>
          <p class="font-extrabold text-slate-800 text-xs">${q.label}</p>
          <p class="text-[10px] text-slate-500 line-clamp-1" title="${q.desc}">${q.desc}</p>
        </div>
        <div class="flex items-center gap-1">
          <button onclick="setDetailCriteriaValue('${q.id}', 'T')" class="w-7 h-7 rounded-lg text-xs font-black transition ${rec[q.id] === 'T' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'}">T</button>
          <button onclick="setDetailCriteriaValue('${q.id}', 'Đ')" class="w-7 h-7 rounded-lg text-xs font-black transition ${rec[q.id] === 'Đ' ? 'bg-sky-600 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'}">Đ</button>
          <button onclick="setDetailCriteriaValue('${q.id}', 'C')" class="w-7 h-7 rounded-lg text-xs font-black transition ${rec[q.id] === 'C' ? 'bg-amber-600 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'}">C</button>
        </div>
      </div>
    `).join('');
  }

  // Render 3 Năng lực chung
  const cGrid = document.getElementById('coreCompetenciesPickerGrid');
  if (cGrid) {
    cGrid.innerHTML = TT27_CORE_COMPETENCIES.map(c => `
      <div class="bg-slate-50 border border-slate-200 rounded-2xl p-3 flex items-center justify-between">
        <div>
          <p class="font-extrabold text-slate-800 text-xs">${c.label}</p>
          <p class="text-[10px] text-slate-500 line-clamp-1" title="${c.desc}">${c.desc}</p>
        </div>
        <div class="flex items-center gap-1">
          <button onclick="setDetailCriteriaValue('${c.id}', 'T')" class="w-7 h-7 rounded-lg text-xs font-black transition ${rec[c.id] === 'T' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'}">T</button>
          <button onclick="setDetailCriteriaValue('${c.id}', 'Đ')" class="w-7 h-7 rounded-lg text-xs font-black transition ${rec[c.id] === 'Đ' ? 'bg-sky-600 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'}">Đ</button>
          <button onclick="setDetailCriteriaValue('${c.id}', 'C')" class="w-7 h-7 rounded-lg text-xs font-black transition ${rec[c.id] === 'C' ? 'bg-amber-600 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'}">C</button>
        </div>
      </div>
    `).join('');
  }

  // Render 7 Năng lực đặc thù
  const scGrid = document.getElementById('specCompetenciesPickerGrid');
  if (scGrid) {
    scGrid.innerHTML = TT27_SPECIFIC_COMPETENCIES.map(sc => `
      <div class="bg-slate-50 border border-slate-200 rounded-xl p-2 text-center space-y-1.5">
        <p class="font-extrabold text-slate-800 text-xs truncate" title="${sc.label}">${sc.label}</p>
        <div class="flex justify-center gap-1">
          <button onclick="setDetailCriteriaValue('${sc.id}', 'T')" class="w-6 h-6 rounded-md text-[11px] font-black transition ${rec[sc.id] === 'T' ? 'bg-emerald-600 text-white' : 'bg-white text-slate-600 border border-slate-200'}">T</button>
          <button onclick="setDetailCriteriaValue('${sc.id}', 'Đ')" class="w-6 h-6 rounded-md text-[11px] font-black transition ${rec[sc.id] === 'Đ' ? 'bg-sky-600 text-white' : 'bg-white text-slate-600 border border-slate-200'}">Đ</button>
          <button onclick="setDetailCriteriaValue('${sc.id}', 'C')" class="w-6 h-6 rounded-md text-[11px] font-black transition ${rec[sc.id] === 'C' ? 'bg-amber-600 text-white' : 'bg-white text-slate-600 border border-slate-200'}">C</button>
        </div>
      </div>
    `).join('');
  }

  // Comment bank buttons
  const bank = document.getElementById('commentQuickBank');
  if (bank) {
    bank.innerHTML = COMMENT_BANK.map(comment => `
      <button onclick="applyQuickComment('${escapeHtml(comment)}')" class="text-left text-xs bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-300 border border-slate-200 px-3 py-1.5 rounded-xl transition font-medium">
        + ${comment}
      </button>
    `).join('');
  }

  // Comment textarea
  document.getElementById('detailTeacherComment').value = rec.comment || '';
}

function setDetailCriteriaValue(criteriaId, val) {
  const currentStudent = students[selectedStudentForDetailIndex];
  if (!currentStudent) return;

  const rec = getStudentAssessment(currentStudent.id);
  rec[criteriaId] = val;
  saveDataToStorage();
  loadCurrentDetailStudentForm();
}

function applyQuickComment(comment) {
  const txt = document.getElementById('detailTeacherComment');
  if (txt.value.trim()) {
    txt.value += ' ' + comment;
  } else {
    txt.value = comment;
  }
  saveCurrentDetailComment();
}

function saveCurrentDetailComment() {
  const currentStudent = students[selectedStudentForDetailIndex];
  if (!currentStudent) return;

  const rec = getStudentAssessment(currentStudent.id);
  rec.comment = document.getElementById('detailTeacherComment').value;
  saveDataToStorage();
}

// ========================================================
// TAB 4: THỐNG KÊ, BÁO CÁO & XUẤT FILE IN ẤN
// ========================================================

function renderReports() {
  renderAttendanceChart();
  renderAssessmentChart();
  renderSpecialAttentionTable();
}

function renderAttendanceChart() {
  const ctx = document.getElementById('attendanceChart');
  if (!ctx) return;

  // Aggregate attendance data for past 7 available days
  const dateKeys = Object.keys(attendanceData).map(k => k.split('_')[0]);
  const uniqueDates = [...new Set(dateKeys)].sort().slice(-7);

  const labels = uniqueDates.map(d => formatDate(d));
  const presentData = [];
  const absentData = [];
  const lateData = [];

  uniqueDates.forEach(d => {
    const morningKey = `${d}_morning`;
    const recs = attendanceData[morningKey] || {};
    let p = 0, a = 0, l = 0;
    students.forEach(s => {
      const r = recs[s.id];
      if (r) {
        if (r.status === 'present') p++;
        else if (r.status === 'excused' || r.status === 'unexcused') a++;
        else if (r.status === 'late') l++;
      } else {
        p++;
      }
    });
    presentData.push(p);
    absentData.push(a);
    lateData.push(l);
  });

  if (attendanceChartInstance) {
    attendanceChartInstance.destroy();
  }

  attendanceChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels.length ? labels : ['Hôm nay'],
      datasets: [
        { label: 'Có mặt', data: presentData.length ? presentData : [students.length], backgroundColor: '#16a34a', borderRadius: 6 },
        { label: 'Vắng', data: absentData.length ? absentData : [0], backgroundColor: '#e11d48', borderRadius: 6 },
        { label: 'Đi muộn', data: lateData.length ? lateData : [0], backgroundColor: '#ca8a04', borderRadius: 6 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true, max: Math.max(students.length + 2, 10), ticks: { stepSize: 5 } }
      },
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });
}

function renderAssessmentChart() {
  const ctx = document.getElementById('assessmentChart');
  if (!ctx) return;

  const periodData = getPeriodAssessment();
  let countT = 0, countD = 0, countC = 0;

  students.forEach(s => {
    const rec = periodData[s.id] || {};
    [...TT27_QUALITIES, ...TT27_CORE_COMPETENCIES, ...TT27_SPECIFIC_COMPETENCIES].forEach(item => {
      const v = rec[item.id] || 'Đ';
      if (v === 'T') countT++;
      else if (v === 'Đ') countD++;
      else if (v === 'C') countC++;
    });
  });

  if (assessmentChartInstance) {
    assessmentChartInstance.destroy();
  }

  assessmentChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Mức Tốt (T)', 'Mức Đạt (Đ)', 'Cần cố gắng (C)'],
      datasets: [{
        data: [countT || 1, countD || 1, countC || 0],
        backgroundColor: ['#16a34a', '#0284c7', '#d97706'],
        borderWidth: 2,
        borderColor: '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });
}

function renderSpecialAttentionTable() {
  const tbody = document.getElementById('specialAttentionTableBody');
  if (!tbody) return;

  let html = '';
  // List students with special circumstances, psychology notes or >1 absence
  students.forEach(s => {
    const abs = getStudentAbsenceCount(s.id);
    const hasSpecial = s.circumstance || s.psychology || abs.totalAbsent > 1;

    if (hasSpecial) {
      html += `
        <tr class="hover:bg-slate-50 transition">
          <td class="py-2.5 px-3 font-extrabold text-slate-800">
            ${s.name} (#${s.stt})
          </td>
          <td class="py-2.5 px-3 text-xs">
            ${s.circumstance ? `<p class="text-rose-700 font-semibold"><i class="fa-solid fa-house-chimney-crack mr-1"></i>${s.circumstance}</p>` : ''}
            ${s.psychology ? `<p class="text-purple-700 mt-0.5"><i class="fa-solid fa-brain mr-1"></i>${s.psychology}</p>` : ''}
          </td>
          <td class="py-2.5 px-3 text-center font-bold text-xs">
            ${abs.totalAbsent > 0 ? `<span class="text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">${abs.totalAbsent} buổi (${abs.excused}P/${abs.unexcused}KP)</span>` : '<span class="text-slate-400">0</span>'}
          </td>
          <td class="py-2.5 px-3 text-xs font-semibold text-blue-600">
            ${s.parentPhone || 'Chưa cập nhật'}
          </td>
          <td class="py-2.5 px-3 text-right">
            <button onclick="openQuickLogModal('${s.id}')" class="px-2.5 py-1 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg text-xs font-bold transition">
              Liên hệ PH
            </button>
          </td>
        </tr>
      `;
    }
  });

  if (!html) {
    html = `<tr><td colspan="5" class="py-4 text-center text-xs text-slate-400">Lớp học hiện tại nề nếp rất tốt, chưa có học sinh nào cần lưu ý đặc biệt.</td></tr>`;
  }

  tbody.innerHTML = html;
}

// ================= PRINT & EXPORT REPORTS =================

function printAttendanceReport() {
  const printArea = document.getElementById('printArea');
  if (!printArea) return;

  let rowsHtml = '';
  students.forEach(s => {
    const abs = getStudentAbsenceCount(s.id);
    rowsHtml += `
      <tr>
        <td style="text-align:center; padding: 6px; border: 1px solid #000;">${s.stt}</td>
        <td style="padding: 6px; border: 1px solid #000; font-weight: bold;">${s.name}</td>
        <td style="text-align:center; padding: 6px; border: 1px solid #000;">${s.gender}</td>
        <td style="text-align:center; padding: 6px; border: 1px solid #000;">${abs.excused}</td>
        <td style="text-align:center; padding: 6px; border: 1px solid #000;">${abs.unexcused}</td>
        <td style="text-align:center; padding: 6px; border: 1px solid #000;">${abs.late}</td>
        <td style="padding: 6px; border: 1px solid #000;">${s.parentPhone || ''}</td>
      </tr>
    `;
  });

  printArea.innerHTML = `
    <div style="font-family: 'Times New Roman', serif; color: #000; line-height: 1.4;">
      <div style="display:flex; justify-content:space-between; margin-bottom: 20px;">
        <div style="text-align:center;">
          <p style="text-transform:uppercase; font-size:11pt; margin:0;">${appSettings.schoolName}</p>
          <p style="font-weight:bold; font-size:12pt; margin:0;">LỚP: ${appSettings.className.toUpperCase()}</p>
        </div>
        <div style="text-align:center;">
          <p style="font-weight:bold; margin:0;">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
          <p style="text-decoration:underline; font-size:11pt; margin:0;">Độc lập - Tự do - Hạnh phúc</p>
        </div>
      </div>

      <div style="text-align:center; margin: 25px 0;">
        <h2 style="text-transform:uppercase; font-size:15pt; margin:0; font-weight:bold;">BẢNG TỔNG HỢP THEO DÕI CHUYÊN CẦN</h2>
        <p style="font-style:italic; margin: 4px 0 0 0;">Năm học: ${appSettings.schoolYear}</p>
      </div>

      <table style="width:100%; border-collapse: collapse; margin-top: 15px; font-size: 11pt;">
        <thead>
          <tr style="background-color: #f2f2f2;">
            <th style="padding: 8px; border: 1px solid #000; width: 40px;">STT</th>
            <th style="padding: 8px; border: 1px solid #000;">Họ và tên học sinh</th>
            <th style="padding: 8px; border: 1px solid #000; width: 60px;">Nữ</th>
            <th style="padding: 8px; border: 1px solid #000; width: 80px;">Vắng (P)</th>
            <th style="padding: 8px; border: 1px solid #000; width: 80px;">Vắng (KP)</th>
            <th style="padding: 8px; border: 1px solid #000; width: 80px;">Đi muộn</th>
            <th style="padding: 8px; border: 1px solid #000;">Điện thoại liên hệ</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>

      <div style="display:flex; justify-content:space-between; margin-top: 40px;">
        <div style="text-align:center; width: 200px;">
          <p style="font-weight:bold; margin:0;">HIỆU TRƯỞNG</p>
          <p style="font-style:italic; font-size:10pt;">(Ký và ghi rõ họ tên)</p>
        </div>
        <div style="text-align:center; width: 250px;">
          <p style="font-style:italic; margin:0;">Ngày ..... tháng ..... năm 20...</p>
          <p style="font-weight:bold; margin: 5px 0 0 0;">GIÁO VIÊN CHỦ NHIỆM</p>
          <p style="font-style:italic; font-size:10pt;">(Ký và ghi rõ họ tên)</p>
          <br><br><br>
          <p style="font-weight:bold;">${appSettings.teacherName}</p>
        </div>
      </div>
    </div>
  `;

  window.print();
}

function printCircular27Report() {
  const printArea = document.getElementById('printArea');
  if (!printArea) return;

  const periodData = getPeriodAssessment();
  let rowsHtml = '';
  students.forEach(s => {
    const rec = periodData[s.id] || {};
    rowsHtml += `
      <tr>
        <td style="text-align:center; padding: 4px; border: 1px solid #000;">${s.stt}</td>
        <td style="padding: 4px; border: 1px solid #000; font-weight: bold; white-space: nowrap;">${s.name}</td>
        <!-- 5 Phẩm chất -->
        <td style="text-align:center; border: 1px solid #000;">${rec.pc_yeunuoc || 'Đ'}</td>
        <td style="text-align:center; border: 1px solid #000;">${rec.pc_nhanai || 'Đ'}</td>
        <td style="text-align:center; border: 1px solid #000;">${rec.pc_chamchi || 'Đ'}</td>
        <td style="text-align:center; border: 1px solid #000;">${rec.pc_trungthuc || 'Đ'}</td>
        <td style="text-align:center; border: 1px solid #000;">${rec.pc_trachnhiem || 'Đ'}</td>
        <!-- 3 Năng lực chung -->
        <td style="text-align:center; border: 1px solid #000;">${rec.nl_tuchu || 'Đ'}</td>
        <td style="text-align:center; border: 1px solid #000;">${rec.nl_giaotiep || 'Đ'}</td>
        <td style="text-align:center; border: 1px solid #000;">${rec.nl_giaiquyet || 'Đ'}</td>
        <!-- Nhận xét -->
        <td style="padding: 4px; border: 1px solid #000; font-size: 9pt;">${rec.comment || ''}</td>
      </tr>
    `;
  });

  printArea.innerHTML = `
    <div style="font-family: 'Times New Roman', serif; color: #000; line-height: 1.3;">
      <div style="display:flex; justify-content:space-between; margin-bottom: 15px;">
        <div style="text-align:center;">
          <p style="text-transform:uppercase; font-size:10pt; margin:0;">${appSettings.schoolName}</p>
          <p style="font-weight:bold; font-size:11pt; margin:0;">LỚP: ${appSettings.className.toUpperCase()}</p>
        </div>
        <div style="text-align:center;">
          <p style="font-weight:bold; font-size:10pt; margin:0;">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
          <p style="text-decoration:underline; font-size:10pt; margin:0;">Độc lập - Tự do - Hạnh phúc</p>
        </div>
      </div>

      <div style="text-align:center; margin: 15px 0;">
        <h2 style="text-transform:uppercase; font-size:13pt; margin:0; font-weight:bold;">BẢNG TỔNG HỢP KẾT QUẢ ĐÁNH GIÁ GIÁO DỤC THEO THÔNG TƯ 27/2020/TT-BGDĐT</h2>
        <p style="font-style:italic; font-size:10pt; margin: 3px 0 0 0;">Kỳ: ${document.getElementById('assessmentPeriodSelect')?.options[document.getElementById('assessmentPeriodSelect')?.selectedIndex]?.text || 'Học kỳ I'} - Năm học: ${appSettings.schoolYear}</p>
      </div>

      <table style="width:100%; border-collapse: collapse; font-size: 9.5pt;">
        <thead>
          <tr style="background-color: #f2f2f2; text-align: center;">
            <th rowspan="2" style="border: 1px solid #000; padding: 4px;">STT</th>
            <th rowspan="2" style="border: 1px solid #000; padding: 4px;">Họ và tên học sinh</th>
            <th colspan="5" style="border: 1px solid #000; padding: 4px;">5 Phẩm chất chủ yếu</th>
            <th colspan="3" style="border: 1px solid #000; padding: 4px;">3 Năng lực chung</th>
            <th rowspan="2" style="border: 1px solid #000; padding: 4px;">Những nhận xét chính của GVCN</th>
          </tr>
          <tr style="background-color: #f2f2f2; text-align: center; font-size: 8.5pt;">
            <th style="border: 1px solid #000; padding: 2px;">Y.Nước</th>
            <th style="border: 1px solid #000; padding: 2px;">N.Ái</th>
            <th style="border: 1px solid #000; padding: 2px;">C.Chỉ</th>
            <th style="border: 1px solid #000; padding: 2px;">T.Thực</th>
            <th style="border: 1px solid #000; padding: 2px;">T.Nhiệm</th>
            <th style="border: 1px solid #000; padding: 2px;">T.Chủ</th>
            <th style="border: 1px solid #000; padding: 2px;">G.Tiếp</th>
            <th style="border: 1px solid #000; padding: 2px;">G.Quyết</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>

      <div style="display:flex; justify-content:space-between; margin-top: 30px;">
        <div style="text-align:center; width: 200px;">
          <p style="font-weight:bold; margin:0;">HIỆU TRƯỞNG</p>
        </div>
        <div style="text-align:center; width: 250px;">
          <p style="font-style:italic; margin:0;">Ngày ..... tháng ..... năm 20...</p>
          <p style="font-weight:bold; margin: 4px 0 0 0;">GIÁO VIÊN CHỦ NHIỆM</p>
          <br><br><br>
          <p style="font-weight:bold;">${appSettings.teacherName}</p>
        </div>
      </div>
    </div>
  `;

  window.print();
}

function printStudentDossierReport() {
  const printArea = document.getElementById('printArea');
  if (!printArea) return;

  let cardsHtml = '';
  students.forEach(s => {
    cardsHtml += `
      <div style="border: 1px solid #000; padding: 10px; margin-bottom: 12px; page-break-inside: avoid; font-size: 10.5pt;">
        <div style="display:flex; justify-content:space-between; border-bottom: 1px dashed #666; padding-bottom: 4px; margin-bottom: 6px;">
          <strong style="font-size: 11.5pt;">${s.stt}. ${s.name}</strong>
          <span>Giới tính: <b>${s.gender}</b> | Ngày sinh: <b>${formatDate(s.dob)}</b></span>
        </div>
        <p style="margin: 2px 0;"><b>Phụ huynh:</b> ${s.parentName || 'N/A'} - <b>SĐT:</b> ${s.parentPhone || 'N/A'}</p>
        <p style="margin: 2px 0;"><b>Địa chỉ:</b> ${s.address || 'N/A'}</p>
        ${s.circumstance ? `<p style="margin: 2px 0; color: #b91c1c;"><b>Hoàn cảnh gia đình:</b> ${s.circumstance}</p>` : ''}
        ${s.talents ? `<p style="margin: 2px 0; color: #b45309;"><b>Năng lực đặc biệt:</b> ${s.talents}</p>` : ''}
        ${s.psychology ? `<p style="margin: 2px 0; color: #4338ca;"><b>Tâm lý, tính cách & sức khỏe:</b> ${s.psychology}</p>` : ''}
      </div>
    `;
  });

  printArea.innerHTML = `
    <div style="font-family: 'Times New Roman', serif; color: #000; line-height: 1.4;">
      <div style="text-align:center; margin-bottom: 20px;">
        <h2 style="text-transform:uppercase; font-size:14pt; margin:0; font-weight:bold;">SỔ TAY CÁ NHÂN SỐ & HỒ SƠ THEO DÕI HỌC SINH</h2>
        <p style="margin: 3px 0 0 0;">Lớp: <b>${appSettings.className}</b> • GVCN: <b>${appSettings.teacherName}</b> • Năm học: <b>${appSettings.schoolYear}</b></p>
      </div>

      ${cardsHtml}
    </div>
  `;

  window.print();
}

// ================= EXCEL EXPORTS (SHEETJS) =================

function exportAttendanceExcel() {
  if (typeof XLSX === 'undefined') {
    alert('Thư viện Excel đang tải, vui lòng thử lại sau 2 giây.');
    return;
  }

  const rows = [
    ['TRƯỜNG:', appSettings.schoolName, 'LỚP:', appSettings.className, 'NĂM HỌC:', appSettings.schoolYear],
    ['GVCN:', appSettings.teacherName],
    [],
    ['STT', 'Họ và tên', 'Giới tính', 'Ngày sinh', 'Vắng có phép (buổi)', 'Vắng không phép (buổi)', 'Đi muộn (buổi)', 'SĐT Phụ huynh']
  ];

  students.forEach(s => {
    const abs = getStudentAbsenceCount(s.id);
    rows.push([
      s.stt,
      s.name,
      s.gender,
      s.dob ? formatDate(s.dob) : '',
      abs.excused,
      abs.unexcused,
      abs.late,
      s.parentPhone || ''
    ]);
  });

  const ws = XLSX.utils.aoa_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'ChuyenCan');
  XLSX.writeFile(wb, `So_QL_HS_ChuyenCan_${appSettings.className}_${currentDate}.xlsx`);
}

function exportCircular27Excel() {
  if (typeof XLSX === 'undefined') {
    alert('Thư viện Excel đang tải, vui lòng thử lại sau 2 giây.');
    return;
  }

  const periodData = getPeriodAssessment();
  const rows = [
    ['SỔ QL HS - BẢNG TỔNG HỢP ĐÁNH GIÁ THÔNG TƯ 27/2020/TT-BGDĐT'],
    ['Trường:', appSettings.schoolName, 'Lớp:', appSettings.className, 'Năm học:', appSettings.schoolYear, 'GVCN:', appSettings.teacherName],
    [],
    [
      'STT', 'Họ và tên',
      'Yêu nước', 'Nhân ái', 'Chăm chỉ', 'Trung thực', 'Trách nhiệm',
      'Tự chủ và tự học', 'Giao tiếp & hợp tác', 'GQ vấn đề & sáng tạo',
      'Ngôn ngữ', 'Tính toán', 'Khoa học', 'Công nghệ', 'Tin học', 'Thẩm mỹ', 'Thể chất',
      'Lời nhận xét của GVCN'
    ]
  ];

  students.forEach(s => {
    const rec = periodData[s.id] || {};
    rows.push([
      s.stt,
      s.name,
      rec.pc_yeunuoc || 'Đ',
      rec.pc_nhanai || 'Đ',
      rec.pc_chamchi || 'Đ',
      rec.pc_trungthuc || 'Đ',
      rec.pc_trachnhiem || 'Đ',
      rec.nl_tuchu || 'Đ',
      rec.nl_giaotiep || 'Đ',
      rec.nl_giaiquyet || 'Đ',
      rec.nl_ngonngu || 'Đ',
      rec.nl_tinhtoan || 'Đ',
      rec.nl_khoahoc || 'Đ',
      rec.nl_congnghe || 'Đ',
      rec.nl_tinhoc || 'Đ',
      rec.nl_thammy || 'Đ',
      rec.nl_thechat || 'Đ',
      rec.comment || ''
    ]);
  });

  const ws = XLSX.utils.aoa_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'DanhGiaTT27');
  XLSX.writeFile(wb, `So_QL_HS_DanhGiaTT27_${appSettings.className}_${currentAssessmentPeriod}.xlsx`);
}

function exportStudentListExcel() {
  if (typeof XLSX === 'undefined') {
    alert('Thư viện Excel đang tải, vui lòng thử lại sau 2 giây.');
    return;
  }

  const rows = [
    ['SỔ QL HS - DANH SÁCH & SỔ TAY CÁ NHÂN SỐ HỌC SINH'],
    ['Lớp:', appSettings.className, 'GVCN:', appSettings.teacherName, 'Năm học:', appSettings.schoolYear],
    [],
    ['STT', 'Họ và tên', 'Ngày sinh', 'Giới tính', 'Họ tên Phụ huynh', 'SĐT Phụ huynh', 'Địa chỉ', 'Hoàn cảnh gia đình', 'Năng khiếu đặc biệt', 'Biểu hiện tâm lý & sức khỏe']
  ];

  students.forEach(s => {
    rows.push([
      s.stt,
      s.name,
      s.dob ? formatDate(s.dob) : '',
      s.gender,
      s.parentName || '',
      s.parentPhone || '',
      s.address || '',
      s.circumstance || '',
      s.talents || '',
      s.psychology || ''
    ]);
  });

  const ws = XLSX.utils.aoa_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'HoSoHocSinh');
  XLSX.writeFile(wb, `So_QL_HS_HoSo_${appSettings.className}.xlsx`);
}

// Download Excel Template for import
function downloadSampleExcelTemplate() {
  if (typeof XLSX === 'undefined') {
    alert('Thư viện Excel đang tải...');
    return;
  }

  const rows = [
    ['STT', 'Họ và tên', 'Ngày sinh', 'Giới tính', 'Họ tên Phụ huynh', 'Số điện thoại PH', 'Địa chỉ', 'Hoàn cảnh', 'Năng khiếu', 'Tâm lý sức khỏe'],
    [1, 'Nguyễn Văn An', '2015-03-12', 'Nam', 'Nguyễn Văn Bình', '0912345678', 'Hà Nội', 'Gia đình cơ bản', 'Toán học', 'Nhanh nhẹn'],
    [2, 'Trần Thị Mai Anh', '2015-08-20', 'Nữ', 'Lê Thị Thu', '0987654321', 'Hà Nội', 'Con ngoan', 'Chữ đẹp, MC', 'Chăm chỉ']
  ];

  const ws = XLSX.utils.aoa_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'MauNhapHS');
  XLSX.writeFile(wb, `Mau_Nhap_Hoc_Sinh_So_QL_HS.xlsx`);
}

// Import Excel File
function openImportExcelModal() {
  document.getElementById('importExcelModal').classList.remove('hidden');
}

function closeImportExcelModal() {
  document.getElementById('importExcelModal').classList.add('hidden');
}

function handleExcelFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

      if (jsonData.length < 2) {
        alert('File Excel không có dữ liệu học sinh!');
        return;
      }

      // Find header row
      let headerRowIndex = 0;
      for (let i = 0; i < Math.min(5, jsonData.length); i++) {
        const row = jsonData[i].map(c => String(c).toLowerCase());
        if (row.some(c => c.includes('họ và tên') || c.includes('họ tên') || c.includes('tên'))) {
          headerRowIndex = i;
          break;
        }
      }

      const headers = jsonData[headerRowIndex].map(c => String(c).toLowerCase().trim());
      const nameIdx = headers.findIndex(c => c.includes('họ và tên') || c.includes('họ tên') || c.includes('tên'));
      const dobIdx = headers.findIndex(c => c.includes('ngày sinh') || c.includes('sinh'));
      const genderIdx = headers.findIndex(c => c.includes('giới tính') || c.includes('nữ'));
      const parentNameIdx = headers.findIndex(c => c.includes('phụ huynh') || c.includes('bố') || c.includes('mẹ'));
      const phoneIdx = headers.findIndex(c => c.includes('điện thoại') || c.includes('sđt') || c.includes('phone'));
      const addressIdx = headers.findIndex(c => c.includes('địa chỉ'));
      const circumIdx = headers.findIndex(c => c.includes('hoàn cảnh'));
      const talentIdx = headers.findIndex(c => c.includes('năng khiếu') || c.includes('năng lực'));
      const psychIdx = headers.findIndex(c => c.includes('tâm lý') || c.includes('sức khỏe'));

      if (nameIdx === -1) {
        alert('Không tìm thấy cột "Họ và tên" trong file Excel!');
        return;
      }

      const newStudents = [];
      for (let i = headerRowIndex + 1; i < jsonData.length; i++) {
        const row = jsonData[i];
        if (!row || !row[nameIdx]) continue;

        const name = String(row[nameIdx]).trim();
        if (!name) continue;

        newStudents.push({
          id: 'HS' + String(students.length + newStudents.length + 1).padStart(3, '0'),
          stt: students.length + newStudents.length + 1,
          name: name,
          dob: dobIdx !== -1 && row[dobIdx] ? String(row[dobIdx]).trim() : '',
          gender: genderIdx !== -1 && row[genderIdx] ? (String(row[genderIdx]).toLowerCase().includes('nữ') ? 'Nữ' : 'Nam') : 'Nam',
          parentName: parentNameIdx !== -1 && row[parentNameIdx] ? String(row[parentNameIdx]).trim() : '',
          parentPhone: phoneIdx !== -1 && row[phoneIdx] ? String(row[phoneIdx]).trim() : '',
          address: addressIdx !== -1 && row[addressIdx] ? String(row[addressIdx]).trim() : '',
          circumstance: circumIdx !== -1 && row[circumIdx] ? String(row[circumIdx]).trim() : '',
          talents: talentIdx !== -1 && row[talentIdx] ? String(row[talentIdx]).trim() : '',
          psychology: psychIdx !== -1 && row[psychIdx] ? String(row[psychIdx]).trim() : '',
          parentLogs: []
        });
      }

      if (newStudents.length > 0) {
        if (confirm(`Tìm thấy ${newStudents.length} học sinh. Bạn có muốn thêm vào danh sách lớp hiện tại không? (Nhấn Hủy nếu muốn thay thế toàn bộ)`)) {
          students.push(...newStudents);
        } else {
          students = newStudents;
        }
        students.forEach((s, idx) => s.stt = idx + 1);
        saveDataToStorage();
        closeImportExcelModal();
        renderProfileCards();
        renderAttendanceTable();
        renderAssessmentView();
        alert(`Đã nạp thành công ${newStudents.length} học sinh!`);
      }

    } catch (err) {
      console.error(err);
      alert('Đã có lỗi khi đọc file Excel: ' + err.message);
    }
  };
  reader.readAsArrayBuffer(file);
}

function loadSampleVietnameseStudents() {
  if (confirm('Khôi phục danh sách 15 học sinh mẫu chuẩn Việt Nam? Dữ liệu hiện tại sẽ được cập nhật.')) {
    loadDefaultSampleData();
    closeImportExcelModal();
    renderProfileCards();
    renderAttendanceTable();
    renderAssessmentView();
    renderReports();
    alert('Đã nạp danh sách mẫu thành công!');
  }
}

// ================= CLASS SETTINGS MODAL =================

function openClassSettingsModal() {
  document.getElementById('settingSchoolName').value = appSettings.schoolName;
  document.getElementById('settingClassName').value = appSettings.className;
  document.getElementById('settingSchoolYear').value = appSettings.schoolYear;
  document.getElementById('settingTeacherName').value = appSettings.teacherName;
  document.getElementById('classSettingsModal').classList.remove('hidden');
}

function closeClassSettingsModal() {
  document.getElementById('classSettingsModal').classList.add('hidden');
}

function saveClassSettings() {
  appSettings.schoolName = document.getElementById('settingSchoolName').value.trim() || 'Trường Tiểu học Nguyễn Huệ';
  appSettings.className = document.getElementById('settingClassName').value.trim() || 'Lớp 4A';
  appSettings.schoolYear = document.getElementById('settingSchoolYear').value.trim() || '2024 - 2025';
  appSettings.teacherName = document.getElementById('settingTeacherName').value.trim() || 'Cô Nguyễn Thị Mai';

  saveDataToStorage();
  updateHeaderDisplay();
  closeClassSettingsModal();
}

// ================= BACKUP & RESTORE =================

function exportDataBackup() {
  const fullBackup = {
    settings: appSettings,
    students,
    attendanceData,
    assessmentData,
    exportedAt: new Date().toISOString()
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(fullBackup, null, 2));
  const dlAnchor = document.createElement('a');
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", `SaoLuu_So_QL_HS_${appSettings.className}_${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(dlAnchor);
  dlAnchor.click();
  dlAnchor.remove();
}

function importDataBackup(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (data.students && Array.isArray(data.students)) {
        if (confirm('Khôi phục dữ liệu từ file sao lưu này? Mọi thông tin hiện tại sẽ được cập nhật.')) {
          if (data.settings) appSettings = data.settings;
          students = data.students;
          if (data.attendanceData) attendanceData = data.attendanceData;
          if (data.assessmentData) assessmentData = data.assessmentData;

          saveDataToStorage();
          updateHeaderDisplay();
          renderAttendanceTable();
          renderProfileCards();
          renderAssessmentView();
          renderReports();
          alert('Khôi phục dữ liệu thành công!');
        }
      } else {
        alert('File sao lưu không hợp lệ!');
      }
    } catch (err) {
      alert('Lỗi đọc file sao lưu: ' + err.message);
    }
  };
  reader.readAsText(file);
}

// ================= UTILITY HELPERS =================

function formatDate(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return dateStr;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}
