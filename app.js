/**
 * SỔ QL HS - PHẦN MỀM QUẢN LÝ CHỦ NHIỆM & HỒ SƠ HỌC SINH (TIỂU HỌC)
 * Chuẩn Thông tư 27/2020/TT-BGDĐT • Phiên bản Sản phẩm Thực tế (Production)
 * Hỗ trợ: Đa Lớp Học • Sổ Cái Cả Tháng • Tiêu Chí Tùy Biến • Ngân Hàng Nhận Xét
 */

// ================= TIÊU CHÍ CHUẨN THÔNG TƯ 27 (MÔN HỌC & HOẠT ĐỘNG GD) =================
const PRIMARY_SUBJECTS_BY_GRADE = {
  1: [
    { id: 'sub_tiengviet', label: 'Tiếng Việt', short: 'T.Việt', hasScore: true },
    { id: 'sub_toan', label: 'Toán', short: 'Toán', hasScore: true },
    { id: 'sub_tienganh', label: 'Ngoại ngữ 1 (Tiếng Anh)', short: 'N.Ngữ', hasScore: false },
    { id: 'sub_daoduc', label: 'Đạo đức', short: 'Đ.Đức', hasScore: false },
    { id: 'sub_tnxh', label: 'Tự nhiên & Xã hội', short: 'TN&XH', hasScore: false },
    { id: 'sub_gdtc', label: 'GD Thể chất', short: 'Thể chất', hasScore: false },
    { id: 'sub_amnhac', label: 'Âm nhạc', short: 'Â.Nhạc', hasScore: false },
    { id: 'sub_mithuat', label: 'Mĩ thuật', short: 'M.Thuật', hasScore: false },
    { id: 'sub_trainghiem', label: 'HĐ Trải nghiệm', short: 'HĐTN', hasScore: false }
  ],
  2: [
    { id: 'sub_tiengviet', label: 'Tiếng Việt', short: 'T.Việt', hasScore: true },
    { id: 'sub_toan', label: 'Toán', short: 'Toán', hasScore: true },
    { id: 'sub_tienganh', label: 'Ngoại ngữ 1 (Tiếng Anh)', short: 'N.Ngữ', hasScore: false },
    { id: 'sub_daoduc', label: 'Đạo đức', short: 'Đ.Đức', hasScore: false },
    { id: 'sub_tnxh', label: 'Tự nhiên & Xã hội', short: 'TN&XH', hasScore: false },
    { id: 'sub_gdtc', label: 'GD Thể chất', short: 'Thể chất', hasScore: false },
    { id: 'sub_amnhac', label: 'Âm nhạc', short: 'Â.Nhạc', hasScore: false },
    { id: 'sub_mithuat', label: 'Mĩ thuật', short: 'M.Thuật', hasScore: false },
    { id: 'sub_trainghiem', label: 'HĐ Trải nghiệm', short: 'HĐTN', hasScore: false }
  ],
  3: [
    { id: 'sub_tiengviet', label: 'Tiếng Việt', short: 'T.Việt', hasScore: true },
    { id: 'sub_toan', label: 'Toán', short: 'Toán', hasScore: true },
    { id: 'sub_tienganh', label: 'Ngoại ngữ 1 (Tiếng Anh)', short: 'N.Ngữ', hasScore: true },
    { id: 'sub_daoduc', label: 'Đạo đức', short: 'Đ.Đức', hasScore: false },
    { id: 'sub_tnxh', label: 'Tự nhiên & Xã hội', short: 'TN&XH', hasScore: false },
    { id: 'sub_tinhoc', label: 'Tin học', short: 'Tin học', hasScore: true },
    { id: 'sub_congnghe', label: 'Công nghệ', short: 'C.Nghệ', hasScore: true },
    { id: 'sub_gdtc', label: 'GD Thể chất', short: 'Thể chất', hasScore: false },
    { id: 'sub_amnhac', label: 'Âm nhạc', short: 'Â.Nhạc', hasScore: false },
    { id: 'sub_mithuat', label: 'Mĩ thuật', short: 'M.Thuật', hasScore: false },
    { id: 'sub_trainghiem', label: 'HĐ Trải nghiệm', short: 'HĐTN', hasScore: false }
  ],
  4: [
    { id: 'sub_tiengviet', label: 'Tiếng Việt', short: 'T.Việt', hasScore: true },
    { id: 'sub_toan', label: 'Toán', short: 'Toán', hasScore: true },
    { id: 'sub_tienganh', label: 'Ngoại ngữ 1 (Tiếng Anh)', short: 'N.Ngữ', hasScore: true },
    { id: 'sub_daoduc', label: 'Đạo đức', short: 'Đ.Đức', hasScore: false },
    { id: 'sub_khoahoc', label: 'Khoa học', short: 'K.Học', hasScore: true },
    { id: 'sub_lichsudiali', label: 'Lịch sử & Địa lí', short: 'LS&ĐL', hasScore: true },
    { id: 'sub_tinhoc', label: 'Tin học', short: 'Tin học', hasScore: true },
    { id: 'sub_congnghe', label: 'Công nghệ', short: 'C.Nghệ', hasScore: true },
    { id: 'sub_gdtc', label: 'GD Thể chất', short: 'Thể chất', hasScore: false },
    { id: 'sub_amnhac', label: 'Âm nhạc', short: 'Â.Nhạc', hasScore: false },
    { id: 'sub_mithuat', label: 'Mĩ thuật', short: 'M.Thuật', hasScore: false },
    { id: 'sub_trainghiem', label: 'HĐ Trải nghiệm', short: 'HĐTN', hasScore: false }
  ],
  5: [
    { id: 'sub_tiengviet', label: 'Tiếng Việt', short: 'T.Việt', hasScore: true },
    { id: 'sub_toan', label: 'Toán', short: 'Toán', hasScore: true },
    { id: 'sub_tienganh', label: 'Ngoại ngữ 1 (Tiếng Anh)', short: 'N.Ngữ', hasScore: true },
    { id: 'sub_daoduc', label: 'Đạo đức', short: 'Đ.Đức', hasScore: false },
    { id: 'sub_khoahoc', label: 'Khoa học', short: 'K.Học', hasScore: true },
    { id: 'sub_lichsudiali', label: 'Lịch sử & Địa lí', short: 'LS&ĐL', hasScore: true },
    { id: 'sub_tinhoc', label: 'Tin học', short: 'Tin học', hasScore: true },
    { id: 'sub_congnghe', label: 'Công nghệ', short: 'C.Nghệ', hasScore: true },
    { id: 'sub_gdtc', label: 'GD Thể chất', short: 'Thể chất', hasScore: false },
    { id: 'sub_amnhac', label: 'Âm nhạc', short: 'Â.Nhạc', hasScore: false },
    { id: 'sub_mithuat', label: 'Mĩ thuật', short: 'M.Thuật', hasScore: false },
    { id: 'sub_trainghiem', label: 'HĐ Trải nghiệm', short: 'HĐTN', hasScore: false }
  ]
};

// ================= TIÊU CHÍ CHUẨN THÔNG TƯ 27 =================
const DEFAULT_QUALITIES = [
  { id: 'pc_yeunuoc', label: 'Yêu nước', short: 'Y.Nước', desc: 'Tự hào về quê hương, yêu quý trường lớp, bảo vệ của công' },
  { id: 'pc_nhanai', label: 'Nhân ái', short: 'N.Ái', desc: 'Yêu thương, tôn trọng bạn bè, biết chia sẻ và giúp đỡ' },
  { id: 'pc_chamchi', label: 'Chăm chỉ', short: 'C.Chỉ', desc: 'Chuyên cần học tập, tích cực tham gia các hoạt động' },
  { id: 'pc_trungthuc', label: 'Trung thực', short: 'T.Thực', desc: 'Thật thà trong học tập và sinh hoạt, dũng cảm nhận lỗi' },
  { id: 'pc_trachnhiem', label: 'Trách nhiệm', short: 'T.Nhiệm', desc: 'Có trách nhiệm với lời nói, hành vi, hoàn thành nhiệm vụ' }
];

const DEFAULT_CORE_COMPETENCIES = [
  { id: 'nl_tuchu', label: 'Tự chủ và tự học', short: 'T.Chủ', desc: 'Tự giác hoàn thành nhiệm vụ, biết tự chuẩn bị đồ dùng' },
  { id: 'nl_giaotiep', label: 'Giao tiếp & hợp tác', short: 'G.Tiếp', desc: 'Tự tin trình bày ý kiến, biết lắng nghe và làm việc nhóm' },
  { id: 'nl_giaiquyet', label: 'Giải quyết VĐ & sáng tạo', short: 'G.Quyết', desc: 'Biết phát hiện vấn đề, đưa ra ý tưởng mới trong học tập' }
];

const DEFAULT_SPECIFIC_COMPETENCIES = [
  { id: 'nl_ngonngu', label: 'Ngôn ngữ', short: 'N.Ngữ', desc: 'Diễn đạt rõ ràng, đọc hiểu và sử dụng từ ngữ lưu loát' },
  { id: 'nl_tinhtoan', label: 'Tính toán', short: 'T.Toán', desc: 'Thực hiện phép tính thành thạo, tư duy logic hình học' },
  { id: 'nl_khoahoc', label: 'Khoa học', short: 'K.Học', desc: 'Tò mò khám phá tự nhiên, hiểu biết về đời sống xung quanh' },
  { id: 'nl_congnghe', label: 'Công nghệ', short: 'C.Nghệ', desc: 'Sử dụng an toàn dụng cụ, sản phẩm công nghệ đơn giản' },
  { id: 'nl_tinhoc', label: 'Tin học', short: 'T.Học', desc: 'Thao tác cơ bản trên máy tính, sử dụng phần mềm học tập' },
  { id: 'nl_thammy', label: 'Thẩm mỹ', short: 'T.Mỹ', desc: 'Cảm thụ cái đẹp, có năng khiếu âm nhạc, mỹ thuật sáng tạo' },
  { id: 'nl_thechat', label: 'Thể chất', short: 'T.Chất', desc: 'Rèn luyện thân thể, nhanh nhẹn, giữ vệ sinh cá nhân' }
];

// Ngân hàng nhận xét mẫu Thông tư 27 (Cho phép thêm/sửa/xóa tùy biến)
const INITIAL_COMMENTS = [
  "Em chăm ngoan, lễ phép, có ý thức tự giác học tập rất cao. Tiếp thu bài nhanh.",
  "Hoàn thành tốt các nhiệm vụ học tập. Tích cực tham gia phát biểu xây dựng bài.",
  "Kỹ năng tính toán nhanh và chính xác. Có tư duy logic tốt.",
  "Đọc diễn cảm, chữ viết sạch đẹp, vốn từ ngữ phong phú.",
  "Rất tự giác và biết giúp đỡ bạn cùng tiến bộ. Tinh thần trách nhiệm cao.",
  "Tích cực tham gia các hoạt động phong trào của lớp, hòa đồng với bạn bè.",
  "Có tiến bộ rõ rệt trong rèn chữ và giữ vở. Cần phát huy hơn nữa.",
  "Cần rèn thêm tính cẩn thận khi làm bài toán có lời văn.",
  "Còn rụt rè khi phát biểu, cần tự tin hơn trong các hoạt động nhóm.",
  "Chữ viết cần rèn thêm về độ cao và khoảng cách giữa các con chữ.",
  "Có năng khiếu vẽ tranh và thẩm mỹ tốt, sáng tạo trong các giờ học.",
  "Tiếp thu bài nhanh môn Tiếng Anh, giao tiếp tự tin trước tập thể."
];

// ================= STORAGE CONSTANTS & STATE =================
const STORAGE_KEY_CLASSES = 'so_ql_hs_classes';
const STORAGE_KEY_CURRENT_CLASS_ID = 'so_ql_hs_current_class_id';
const STORAGE_KEY_CUSTOM_COMMENTS = 'so_ql_hs_custom_comments';
const STORAGE_KEY_PRINT_CONFIG = 'so_ql_hs_print_config';

// App State
let classList = []; // Array of { id, name, grade, schoolYear, schoolName, teacherName, students, attendanceData, assessmentData, customCriteria }
let currentClass = null;
let customComments = [];
let printConfig = {
  upperOrg: 'PHÒNG GD&ĐT QUẬN / HUYỆN',
  schoolTitle: 'Trường Tiểu học Nguyễn Huệ',
  leftSigner: 'HIỆU TRƯỞNG',
  rightSigner: 'GIÁO VIÊN CHỦ NHIỆM'
};

// UI Interaction State
let currentDate = new Date().toISOString().split('T')[0];
let currentSession = 'morning'; // 'morning' | 'afternoon' | 'boarding'
let currentAttendanceMode = 'daily'; // 'daily' | 'monthly'
let currentAttendanceFilter = 'all'; // 'all' | 'absent' | 'late'
let currentAssessmentPeriod = 'mid_term1';
let currentAssessmentView = 'matrix';
let currentTT27SubTab = 'subjects'; // 'matrix' | 'student_detail'
let selectedStudentForDetailIndex = 0;
let attendanceChartInstance = null;
let assessmentChartInstance = null;

// ================= INITIALIZATION =================
document.addEventListener('DOMContentLoaded', () => {
  loadAppData();
  initClock();
  initDateControls();
  renderAllViews();
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

function initDateControls() {
  const picker = document.getElementById('attendanceDatePicker');
  if (picker) picker.value = currentDate;

  const mSelect = document.getElementById('monthlyMatrixMonthSelect');
  if (mSelect) {
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    let opts = '';
    for (let m = 1; m <= 12; m++) {
      opts += `<option value="${m}" ${m === currentMonth ? 'selected' : ''}>Tháng ${m}/${currentYear}</option>`;
    }
    mSelect.innerHTML = opts;
  }
}

// ================= DATA STORAGE & MULTI-CLASS ENGINE =================
function loadAppData() {
  try {
    const savedClasses = localStorage.getItem(STORAGE_KEY_CLASSES);
    const savedCurrentId = localStorage.getItem(STORAGE_KEY_CURRENT_CLASS_ID);
    const savedComments = localStorage.getItem(STORAGE_KEY_CUSTOM_COMMENTS);
    const savedPrint = localStorage.getItem(STORAGE_KEY_PRINT_CONFIG);

    if (savedComments) customComments = JSON.parse(savedComments);
    else customComments = [...INITIAL_COMMENTS];

    if (savedPrint) printConfig = JSON.parse(savedPrint);

    if (savedClasses) {
      classList = JSON.parse(savedClasses);
    }

    if (!classList || classList.length === 0) {
      // Create initial realistic class
      createDefaultInitialClass();
    }

    // Select active class
    let activeId = savedCurrentId;
    currentClass = classList.find(c => c.id === activeId) || classList[0];
    localStorage.setItem(STORAGE_KEY_CURRENT_CLASS_ID, currentClass.id);

  } catch (err) {
    console.error('Error loading app data:', err);
    createDefaultInitialClass();
  }
}

function saveAppData() {
  localStorage.setItem(STORAGE_KEY_CLASSES, JSON.stringify(classList));
  if (currentClass) {
    localStorage.setItem(STORAGE_KEY_CURRENT_CLASS_ID, currentClass.id);
  }
  localStorage.setItem(STORAGE_KEY_CUSTOM_COMMENTS, JSON.stringify(customComments));
  localStorage.setItem(STORAGE_KEY_PRINT_CONFIG, JSON.stringify(printConfig));
}

function createDefaultInitialClass() {
  const defaultClass = {
    id: 'class_' + Date.now(),
    name: 'Lớp 4A',
    grade: 4,
    schoolYear: '2024 - 2025',
    schoolName: 'Trường Tiểu học Nguyễn Huệ',
    teacherName: 'Cô Nguyễn Thị Mai',
    customCriteria: [],
    students: getSampleStudentsList(),
    attendanceData: {},
    assessmentData: {}
  };

  classList = [defaultClass];
  currentClass = defaultClass;
  initSampleAttendanceForClass(currentClass);
  initSampleAssessmentForClass(currentClass);
  saveAppData();
}

function getSampleStudentsList() {
  return [
    {
      id: 'HS001', stt: 1, name: 'Nguyễn Văn An', dob: '2015-03-12', gender: 'Nam', code: 'GD4A-01',
      role: 'Lớp phó học tập', team: 'Tổ 1', policy: 'Bình thường',
      parentName: 'Nguyễn Văn Bình (Bố)', parentPhone: '0912345678', address: 'Số 15 Phố Huế, Q. Hoàn Kiếm, Hà Nội',
      circumstance: 'Gia đình cơ bản, bố mẹ luôn sát sao hỗ trợ con học tập.',
      talents: 'Tư duy toán học rất tốt, đam mê khoa học lắp ráp sáng tạo.',
      psychology: 'Nhanh nhẹn, năng động, phát biểu hăng hái. Thỉnh thoảng còn nói chuyện riêng trong giờ.',
      parentLogs: [{ date: '2026-10-15', type: 'Nhắn Zalo', content: 'Trao đổi về việc tham gia CLB Toán của trường.', result: 'Gia đình ủng hộ và đã đăng ký.' }]
    },
    {
      id: 'HS002', stt: 2, name: 'Trần Thị Mai Anh', dob: '2015-08-20', gender: 'Nữ', code: 'GD4A-02',
      role: 'Lớp trưởng', team: 'Tổ 1', policy: 'Bình thường',
      parentName: 'Lê Thị Thu (Mẹ)', parentPhone: '0987654321', address: '24 Ngõ Trạm, Q. Hoàn Kiếm, Hà Nội',
      circumstance: 'Bố mẹ kinh doanh tự do, con ngoan, tự lập từ bé.',
      talents: 'Chữ viết rất đẹp, có năng khiếu làm MC và thuyết trình tự tin.',
      psychology: 'Chăm chỉ, lễ phép, gương mẫu trong mọi hoạt động, luôn giúp đỡ bạn bè.',
      parentLogs: []
    },
    {
      id: 'HS003', stt: 3, name: 'Lê Hoàng Bách', dob: '2015-01-05', gender: 'Nam', code: 'GD4A-03',
      role: 'Học sinh', team: 'Tổ 2', policy: 'Hộ cận nghèo',
      parentName: 'Lê Hoàng Long (Bố)', parentPhone: '0903456789', address: '102 Hàng Bông, Hà Nội',
      circumstance: 'Hoàn cảnh gia đình khó khăn, bố mẹ làm thợ may.',
      talents: 'Khéo tay, vẽ tranh phong cảnh rất có hồn, sáng tạo.',
      psychology: 'Hơi tự ti về hoàn cảnh, nhút nhát trước đám đông. Cần GVCN động viên kịp thời.',
      parentLogs: [{ date: '2026-09-20', type: 'Gặp trực tiếp', content: 'Thăm hỏi và hướng dẫn thủ tục miễn giảm chi phí học tập.', result: 'Đã hoàn tất hồ sơ hỗ trợ.' }]
    },
    {
      id: 'HS004', stt: 4, name: 'Phạm Minh Châu', dob: '2015-11-14', gender: 'Nữ', code: 'GD4A-04',
      role: 'Tổ trưởng', team: 'Tổ 2', policy: 'Bình thường',
      parentName: 'Phạm Văn Dũng (Bố)', parentPhone: '0978112233', address: '45 Quán Sứ, Hà Nội',
      circumstance: 'Gia đình công chức hiếu học.',
      talents: 'Tiếng Anh giao tiếp lưu loát, trí nhớ tốt.',
      psychology: 'Tự tin, hòa đồng, năng nổ trong các phong trào.',
      parentLogs: []
    },
    {
      id: 'HS005', stt: 5, name: 'Đỗ Tuấn Dũng', dob: '2015-05-18', gender: 'Nam', code: 'GD4A-05',
      role: 'Lớp phó lao động', team: 'Tổ 3', policy: 'Bình thường',
      parentName: 'Đỗ Quốc Hưng (Bố)', parentPhone: '0918776655', address: '78 Lý Thường Kiệt, Hà Nội',
      circumstance: 'Bố mẹ đi làm công trình xa thường xuyên, ở nhà với bà nội.',
      talents: 'Thể lực tốt, chơi bóng đá giỏi, nhiệt tình giúp đỡ bạn bè.',
      psychology: 'Thiếu người kèm cặp bài tập ở nhà, thỉnh thoảng quên vở bài tập.',
      parentLogs: [{ date: '2026-10-02', type: 'Gọi điện', content: 'Báo tình hình em hay quên sách bài tập.', result: 'Bà nội đã hứa kiểm tra cặp mỗi tối.' }]
    },
    {
      id: 'HS006', stt: 6, name: 'Vũ Ngọc Diệp', dob: '2015-09-09', gender: 'Nữ', code: 'GD4A-06',
      role: 'Lớp phó văn thể', team: 'Tổ 3', policy: 'Bình thường',
      parentName: 'Trần Thị Hà (Mẹ)', parentPhone: '0936224466', address: '12 Dã Tượng, Hà Nội',
      circumstance: 'Gia đình bình thường, mẹ là giáo viên mầm non.',
      talents: 'Hát hay, múa dẻo, tích cực tham gia các tiết mục văn nghệ.',
      psychology: 'Vui vẻ, hoạt bát, tinh thần tập thể rất cao.',
      parentLogs: []
    },
    {
      id: 'HS007', stt: 7, name: 'Bùi Gia Huy', dob: '2015-04-25', gender: 'Nam', code: 'GD4A-07',
      role: 'Tổ trưởng', team: 'Tổ 4', policy: 'Bình thường',
      parentName: 'Bùi Văn Hùng (Bố)', parentPhone: '0945331122', address: '56 Thợ Nhuộm, Hà Nội',
      circumstance: 'Gia đình khá giả, bố mẹ rất kỳ vọng.',
      talents: 'Tính toán nhanh, yêu thích khám phá khoa học đời sống.',
      psychology: 'Áp lực học tập đôi lúc làm em lo lắng, cần tạo tâm lý thoải mái.',
      parentLogs: []
    },
    {
      id: 'HS008', stt: 8, name: 'Hoàng Thùy Linh', dob: '2015-12-03', gender: 'Nữ', code: 'GD4A-08',
      role: 'Học sinh', team: 'Tổ 4', policy: 'Mồ côi',
      parentName: 'Nguyễn Thị Oanh (Mẹ)', parentPhone: '0967889900', address: '89 Hai Bà Trưng, Hà Nội',
      circumstance: 'Mẹ đơn thân buôn bán nhỏ, kinh tế còn eo hẹp.',
      talents: 'Khéo léo, cẩn thận, biết gấp giấy Origami rất đẹp.',
      psychology: 'Hiền lành, tình cảm, rất nghe lời thầy cô giáo.',
      parentLogs: []
    },
    {
      id: 'HS009', stt: 9, name: 'Đặng Quốc Khánh', dob: '2015-07-16', gender: 'Nam', code: 'GD4A-09',
      role: 'Học sinh', team: 'Tổ 1', policy: 'Bình thường',
      parentName: 'Đặng Tuấn Kiệt (Bố)', parentPhone: '0904123987', address: '33 Hàng Bài, Hà Nội',
      circumstance: 'Gia đình viên chức cơ bản.',
      talents: 'Chơi cờ vua tốt, đoạt giải nhì cấp trường.',
      psychology: 'Thông minh nhưng đôi lúc hiếu động trong giờ học.',
      parentLogs: []
    },
    {
      id: 'HS010', stt: 10, name: 'Ngô Bảo Nam', dob: '2015-02-28', gender: 'Nam', code: 'GD4A-10',
      role: 'Học sinh', team: 'Tổ 2', policy: 'Bình thường',
      parentName: 'Ngô Văn Thành (Bố)', parentPhone: '0915667788', address: '18 Tràng Thi, Hà Nội',
      circumstance: 'Gia đình kinh doanh đồ ăn.',
      talents: 'Khả năng giao tiếp tốt, tự tin.',
      psychology: 'Mắt cận thị 2.5 độ, cần ngồi bàn đầu dãy giữa để nhìn rõ bảng.',
      parentLogs: [{ date: '2026-10-18', type: 'Nhắn Zalo', content: 'Phụ huynh nhờ xếp chỗ ngồi bàn đầu do mắt cận.', result: 'Đã chuyển em lên bàn đầu dãy giữa.' }]
    },
    {
      id: 'HS011', stt: 11, name: 'Lý Thanh Nhã', dob: '2015-06-30', gender: 'Nữ', code: 'GD4A-11',
      role: 'Tổ trưởng', team: 'Tổ 3', policy: 'Bình thường',
      parentName: 'Lý Văn Hải (Bố)', parentPhone: '0982334455', address: '67 Bà Triệu, Hà Nội',
      circumstance: 'Gia đình cơ bản, nề nếp.',
      talents: 'Đọc thơ diễn cảm, giải toán lời văn chắc chắn.',
      psychology: 'Chững chạc, có trách nhiệm cao với công việc của tổ.',
      parentLogs: []
    },
    {
      id: 'HS012', stt: 12, name: 'Dương Đức Phúc', dob: '2015-10-10', gender: 'Nam', code: 'GD4A-12',
      role: 'Học sinh', team: 'Tổ 4', policy: 'Bình thường',
      parentName: 'Dương Quang Hưng (Bố)', parentPhone: '0922881177', address: '14 Phủ Doãn, Hà Nội',
      circumstance: 'Gia đình đông con (4 anh em).',
      talents: 'Nhanh nhẹn, có sức bền tốt trong các môn thể chất.',
      psychology: 'Thỉnh thoảng đi học muộn do xe đưa đón của gia đình.',
      parentLogs: []
    },
    {
      id: 'HS013', stt: 13, name: 'Mai Thảo Quyên', dob: '2015-04-04', gender: 'Nữ', code: 'GD4A-13',
      role: 'Học sinh', team: 'Tổ 1', policy: 'Bình thường',
      parentName: 'Phan Thị Mai (Mẹ)', parentPhone: '0934556677', address: '29 Lý Quốc Sư, Hà Nội',
      circumstance: 'Bố mẹ chăm lo việc học chu đáo.',
      talents: 'Làm việc nhóm rất tốt, biết lắng nghe.',
      psychology: 'Lạc quan, nhiệt tình giúp đỡ bạn bè cùng tiến.',
      parentLogs: []
    },
    {
      id: 'HS014', stt: 14, name: 'Tạ Minh Quân', dob: '2015-08-15', gender: 'Nam', code: 'GD4A-14',
      role: 'Học sinh', team: 'Tổ 2', policy: 'Bình thường',
      parentName: 'Tạ Văn Tuấn (Bố)', parentPhone: '0979661122', address: '8 Nhà Chung, Hà Nội',
      circumstance: 'Gia đình có truyền thống nghệ thuật.',
      talents: 'Biết chơi đàn organ và piano, cảm thụ âm nhạc tốt.',
      psychology: 'Nhạy cảm, có năng khiếu nghệ thuật, tiếp thu các môn xã hội nhanh.',
      parentLogs: []
    },
    {
      id: 'HS015', stt: 15, name: 'Trịnh Hương Trà', dob: '2015-05-01', gender: 'Nữ', code: 'GD4A-15',
      role: 'Học sinh', team: 'Tổ 3', policy: 'Bình thường',
      parentName: 'Trịnh Quang Minh (Bố)', parentPhone: '0912998877', address: '91 Hàng Gai, Hà Nội',
      circumstance: 'Gia đình kinh doanh truyền thống.',
      talents: 'Giao tiếp tiếng Anh tự nhiên, thân thiện.',
      psychology: 'Năng nổ, hòa đồng, được các bạn trong lớp yêu mến.',
      parentLogs: []
    }
  ];
}

function initSampleAttendanceForClass(targetClass) {
  const dates = [getOffsetDateStr(-4), getOffsetDateStr(-3), getOffsetDateStr(-2), getOffsetDateStr(-1), currentDate];
  dates.forEach(d => {
    const key = `${d}_morning`;
    targetClass.attendanceData[key] = {};
    targetClass.students.forEach((s, idx) => {
      if (idx === 4 && d === currentDate) {
        targetClass.attendanceData[key][s.id] = { status: 'late', note: 'Hỏng xe đạp' };
      } else if (idx === 2 && d === getOffsetDateStr(-1)) {
        targetClass.attendanceData[key][s.id] = { status: 'excused', note: 'Sốt nhẹ mẹ xin phép' };
      } else if (idx === 7 && d === getOffsetDateStr(-3)) {
        targetClass.attendanceData[key][s.id] = { status: 'excused', note: 'Về quê có việc gia đình' };
      } else {
        targetClass.attendanceData[key][s.id] = { status: 'present', note: '' };
      }
    });
  });
}

function initSampleAssessmentForClass(targetClass) {
  targetClass.assessmentData['mid_term1'] = {};
  targetClass.students.forEach((s, idx) => {
    const isTop = idx % 3 === 0;
    const isGood = idx % 2 === 0;
    
    // Sample subjects data with full 12 subjects
    const subjects = {
      sub_tiengviet: { level: isTop ? 'T' : 'Đ', score: isTop ? 10 : (isGood ? 9 : 8) },
      sub_toan: { level: isTop ? 'T' : 'Đ', score: isTop ? 10 : (isGood ? 9 : 7) },
      sub_tienganh: { level: isTop ? 'T' : 'Đ', score: isTop ? 9 : 8 },
      sub_daoduc: { level: 'T' },
      sub_khoahoc: { level: isTop ? 'T' : 'Đ', score: isTop ? 10 : 8 },
      sub_lichsudiali: { level: isGood ? 'T' : 'Đ', score: isGood ? 9 : 8 },
      sub_tinhoc: { level: isTop ? 'T' : 'Đ', score: isTop ? 10 : 9 },
      sub_congnghe: { level: 'Đ', score: 8 },
      sub_gdtc: { level: idx === 4 ? 'T' : 'Đ' },
      sub_amnhac: { level: idx === 2 ? 'T' : 'Đ' },
      sub_mithuat: { level: isGood ? 'T' : 'Đ' },
      sub_trainghiem: { level: 'T' }
    };

    targetClass.assessmentData['mid_term1'][s.id] = {
      subjects,
      summaryLevel: isTop ? 'Hoàn thành xuất sắc' : (isGood ? 'Hoàn thành tốt' : 'Hoàn thành'),
      reward: isTop ? 'Học sinh Xuất sắc' : (isGood ? 'Học sinh Tiêu biểu' : 'Không'),
      subjSummary: isTop ? 'T' : 'Đ',
      qualSummary: isTop ? 'T' : 'Đ',
      compSummary: isTop ? 'T' : 'Đ',
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
      comment: isTop ? "Em tiếp thu bài nhanh, tự giác học tập và luôn gương mẫu trong mọi hoạt động." : "Chăm ngoan, hòa đồng với bạn bè. Cần tự tin hơn nữa khi phát biểu trước lớp."
    };
  });
}

function getOffsetDateStr(daysOffset) {
  const d = new Date();
  d.setDate(d.getDate() + daysOffset);
  return d.toISOString().split('T')[0];
}

// ================= MULTI-CLASS SWITCHER & MANAGEMENT =================
function renderClassSelector() {
  const select = document.getElementById('classSelectorDropdown');
  if (!select) return;

  select.innerHTML = classList.map(c => `
    <option value="${c.id}" ${c.id === currentClass.id ? 'selected' : ''}>
      ${c.name} (${c.schoolYear || '2024 - 2025'})
    </option>
  `).join('');

  // Update header text
  document.getElementById('headerSchoolName').innerHTML = `<i class="fa-solid fa-school text-blue-300 mr-1"></i>${currentClass.schoolName || 'Trường Tiểu học'}`;
  document.getElementById('headerTeacherName').innerHTML = `<i class="fa-solid fa-chalkboard-user text-amber-300 mr-1"></i>GVCN: ${currentClass.teacherName || 'Giáo viên chủ nhiệm'}`;
}

function handleClassChange(classId) {
  const found = classList.find(c => c.id === classId);
  if (found) {
    currentClass = found;
    saveAppData();
    renderAllViews();
    showToast(`Đã chuyển sang ${currentClass.name}`, 'success');
  }
}

function openNewClassModal() {
  document.getElementById('newClassName').value = '';
  document.getElementById('newClassSchool').value = currentClass ? currentClass.schoolName : 'Trường Tiểu học Nguyễn Huệ';
  document.getElementById('newClassTeacher').value = currentClass ? currentClass.teacherName : 'Cô Nguyễn Thị Mai';
  document.getElementById('newClassYear').value = '2024 - 2025';
  document.getElementById('newClassModal').classList.remove('hidden');
}

function closeNewClassModal() {
  document.getElementById('newClassModal').classList.add('hidden');
}

function createNewClass() {
  const name = document.getElementById('newClassName').value.trim();
  if (!name) {
    showToast('Vui lòng nhập tên lớp học!', 'error');
    return;
  }

  const grade = parseInt(document.getElementById('newClassGrade').value) || 4;
  const schoolYear = document.getElementById('newClassYear').value.trim() || '2024 - 2025';
  const schoolName = document.getElementById('newClassSchool').value.trim() || 'Trường Tiểu học';
  const teacherName = document.getElementById('newClassTeacher').value.trim() || 'Giáo viên chủ nhiệm';

  const newClass = {
    id: 'class_' + Date.now(),
    name,
    grade,
    schoolYear,
    schoolName,
    teacherName,
    customCriteria: [],
    students: [], // Clean empty list for user's real students!
    attendanceData: {},
    assessmentData: {}
  };

  classList.push(newClass);
  currentClass = newClass;
  saveAppData();
  closeNewClassModal();
  renderAllViews();
  showToast(`Tạo thành công ${newClass.name}! Bạn có thể nhập học sinh mới ngay bây giờ.`, 'success');
}

function deleteCurrentClass() {
  if (classList.length <= 1) {
    showToast('Phải có ít nhất 1 lớp học trong phần mềm!', 'warning');
    return;
  }

  if (confirm(`Bạn có chắc chắn muốn xóa lớp "${currentClass.name}" và toàn bộ dữ liệu đi kèm không?`)) {
    classList = classList.filter(c => c.id !== currentClass.id);
    currentClass = classList[0];
    saveAppData();
    closeClassSettingsModal();
    renderAllViews();
    showToast('Đã xóa lớp học thành công.', 'info');
  }
}

function confirmClearSampleData() {
  if (confirm(`Bạn có muốn XÓA SẠCH dữ liệu mẫu của "${currentClass.name}" để bắt đầu nhập danh sách học sinh thật của bạn không?`)) {
    currentClass.students = [];
    currentClass.attendanceData = {};
    currentClass.assessmentData = {};
    saveAppData();
    renderAllViews();
    showToast('Đã dọn sạch dữ liệu! Lớp học hiện tại đã sẵn sàng để bạn nhập học sinh thật.', 'success');
  }
}

function openClassSettingsModal() {
  if (!currentClass) return;
  document.getElementById('settingSchoolName').value = currentClass.schoolName || '';
  document.getElementById('settingClassName').value = currentClass.name || '';
  document.getElementById('settingSchoolYear').value = currentClass.schoolYear || '';
  document.getElementById('settingTeacherName').value = currentClass.teacherName || '';
  document.getElementById('classSettingsModal').classList.remove('hidden');
}

function closeClassSettingsModal() {
  document.getElementById('classSettingsModal').classList.add('hidden');
}

function saveClassSettings() {
  if (!currentClass) return;
  currentClass.schoolName = document.getElementById('settingSchoolName').value.trim() || 'Trường Tiểu học';
  currentClass.name = document.getElementById('settingClassName').value.trim() || 'Lớp';
  currentClass.schoolYear = document.getElementById('settingSchoolYear').value.trim() || '2024 - 2025';
  currentClass.teacherName = document.getElementById('settingTeacherName').value.trim() || 'Giáo viên';

  saveAppData();
  renderClassSelector();
  closeClassSettingsModal();
  showToast('Đã lưu thông tin cài đặt lớp.', 'success');
}

// ================= NAVIGATION TABS =================
function switchTab(tabId) {
  document.querySelectorAll('.tab-pane').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));

  const activePane = document.getElementById(`tab-${tabId}`);
  const activeNav = document.getElementById(`nav-${tabId}`);
  if (activePane) activePane.classList.remove('hidden');
  if (activeNav) activeNav.classList.add('active');

  if (tabId === 'attendance') {
    if (currentAttendanceMode === 'daily') renderAttendanceTable();
    else renderMonthlyAttendanceMatrix();
  } else if (tabId === 'profiles') {
    renderProfileCards();
  } else if (tabId === 'circular27') {
    renderAssessmentView();
  } else if (tabId === 'reports') {
    renderReports();
  }
}

function renderAllViews() {
  renderClassSelector();
  renderAttendanceTable();
  renderProfileCards();
  renderAssessmentView();
  renderReports();
}

// ========================================================
// TAB 1: ĐIỂM DANH 1 CHẠM & SỔ CÁI CẢ THÁNG (FLEXIBLE ATTENDANCE)
// ========================================================

function setAttendanceMode(mode) {
  currentAttendanceMode = mode;
  const btnDaily = document.getElementById('btnAttModeDaily');
  const btnMonthly = document.getElementById('btnAttModeMonthly');
  const dailyView = document.getElementById('attendanceDailyView');
  const monthlyView = document.getElementById('attendanceMonthlyView');

  if (mode === 'daily') {
    btnDaily.className = 'px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition bg-white text-blue-700 shadow-sm flex items-center gap-1.5';
    btnMonthly.className = 'px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold text-slate-600 transition hover:text-slate-900 flex items-center gap-1.5';
    dailyView.classList.remove('hidden');
    monthlyView.classList.add('hidden');
    renderAttendanceTable();
  } else {
    btnMonthly.className = 'px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition bg-white text-blue-700 shadow-sm flex items-center gap-1.5';
    btnDaily.className = 'px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold text-slate-600 transition hover:text-slate-900 flex items-center gap-1.5';
    monthlyView.classList.remove('hidden');
    dailyView.classList.add('hidden');
    renderMonthlyAttendanceMatrix();
  }
}

function getAttendanceSessionKey(dateStr = currentDate, sessionStr = currentSession) {
  return `${dateStr}_${sessionStr}`;
}

function getAttendanceRecord(studentId, dateStr = currentDate, sessionStr = currentSession) {
  const key = getAttendanceSessionKey(dateStr, sessionStr);
  if (!currentClass.attendanceData[key]) currentClass.attendanceData[key] = {};
  if (!currentClass.attendanceData[key][studentId]) {
    currentClass.attendanceData[key][studentId] = { status: 'present', note: '' };
  }
  return currentClass.attendanceData[key][studentId];
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
  const btnB = document.getElementById('sessionBtnBoarding');

  [btnM, btnA, btnB].forEach(b => {
    b.className = 'px-3 py-1 rounded-lg text-xs font-bold text-slate-600 transition hover:text-slate-900';
  });

  if (session === 'morning') btnM.className = 'px-3 py-1 rounded-lg text-xs font-bold transition bg-white text-blue-700 shadow-sm';
  else if (session === 'afternoon') btnA.className = 'px-3 py-1 rounded-lg text-xs font-bold transition bg-white text-blue-700 shadow-sm';
  else if (session === 'boarding') btnB.className = 'px-3 py-1 rounded-lg text-xs font-bold transition bg-white text-blue-700 shadow-sm';

  renderAttendanceTable();
}

function setAttendanceStatus(studentId, newStatus) {
  const key = getAttendanceSessionKey();
  if (!currentClass.attendanceData[key]) currentClass.attendanceData[key] = {};
  if (!currentClass.attendanceData[key][studentId]) {
    currentClass.attendanceData[key][studentId] = { status: 'present', note: '' };
  }
  currentClass.attendanceData[key][studentId].status = newStatus;
  saveAppData();
  renderAttendanceTable();
}

function updateAttendanceNote(studentId, note) {
  const key = getAttendanceSessionKey();
  if (!currentClass.attendanceData[key]) currentClass.attendanceData[key] = {};
  if (!currentClass.attendanceData[key][studentId]) {
    currentClass.attendanceData[key][studentId] = { status: 'present', note: '' };
  }
  currentClass.attendanceData[key][studentId].note = note;
  saveAppData();
}

function markAllPresent() {
  const key = getAttendanceSessionKey();
  if (!currentClass.attendanceData[key]) currentClass.attendanceData[key] = {};
  currentClass.students.forEach(s => {
    currentClass.attendanceData[key][s.id] = { status: 'present', note: '' };
  });
  saveAppData();
  renderAttendanceTable();
  showToast('Đã đánh dấu tất cả có mặt!', 'success');
}

function resetDayAttendance() {
  if (confirm(`Đặt lại toàn bộ điểm danh ngày ${formatDate(currentDate)}?`)) {
    const key = getAttendanceSessionKey();
    currentClass.attendanceData[key] = {};
    currentClass.students.forEach(s => {
      currentClass.attendanceData[key][s.id] = { status: 'present', note: '' };
    });
    saveAppData();
    renderAttendanceTable();
    showToast('Đã đặt lại trạng thái ngày hôm nay.', 'info');
  }
}

function getStudentAbsenceCount(studentId) {
  let excused = 0;
  let unexcused = 0;
  let late = 0;

  if (currentClass && currentClass.attendanceData) {
    Object.keys(currentClass.attendanceData).forEach(k => {
      const rec = currentClass.attendanceData[k][studentId];
      if (rec) {
        if (rec.status === 'excused') excused++;
        if (rec.status === 'unexcused') unexcused++;
        if (rec.status === 'late') late++;
      }
    });
  }

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
  if (!tbody || !currentClass) return;

  const searchQuery = (document.getElementById('attendanceSearch')?.value || '').toLowerCase().trim();
  const students = currentClass.students || [];

  let html = '';
  students.forEach((s, idx) => {
    const rec = getAttendanceRecord(s.id);

    if (currentAttendanceFilter === 'absent' && rec.status !== 'excused' && rec.status !== 'unexcused') return;
    if (currentAttendanceFilter === 'late' && rec.status !== 'late') return;
    if (searchQuery && !s.name.toLowerCase().includes(searchQuery) && !String(s.stt).includes(searchQuery)) return;

    const absStats = getStudentAbsenceCount(s.id);
    const genderBadge = s.gender === 'Nữ'
      ? '<span class="text-pink-600 bg-pink-50 px-1.5 py-0.5 rounded text-[11px] font-bold">Nữ</span>'
      : '<span class="text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded text-[11px] font-bold">Nam</span>';

    let rowBg = 'hover:bg-slate-50';
    if (rec.status === 'unexcused') rowBg = 'bg-rose-50/70 hover:bg-rose-50';
    else if (rec.status === 'excused') rowBg = 'bg-amber-50/70 hover:bg-amber-50';
    else if (rec.status === 'late') rowBg = 'bg-yellow-50/70 hover:bg-yellow-50';

    html += `
      <tr class="${rowBg} transition" id="attRow_${s.id}">
        <td class="py-2.5 px-3 sm:px-4 text-center font-black text-slate-500 text-xs sm:text-sm">
          ${String(s.stt).padStart(2, '0')}
        </td>
        <td class="py-2.5 px-3 sm:px-4">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full ${s.gender === 'Nữ' ? 'bg-pink-100 text-pink-600' : 'bg-blue-100 text-blue-700'} font-black flex items-center justify-center text-xs shadow-sm">
              ${s.name.split(' ').pop().charAt(0)}
            </div>
            <div>
              <div class="font-extrabold text-slate-800 text-sm sm:text-base leading-tight">${s.name}</div>
              <div class="text-[11px] text-slate-500 mt-0.5 flex items-center gap-1.5">
                ${genderBadge}
                ${s.role && s.role !== 'Học sinh' ? `<span class="bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded font-bold">${s.role}</span>` : ''}
                ${s.team ? `<span class="text-slate-400 font-semibold">• ${s.team}</span>` : ''}
              </div>
            </div>
          </div>
        </td>

        <td class="py-2.5 px-3 sm:px-4 text-center">
          <div class="inline-flex flex-wrap items-center justify-center gap-1.5 p-1 bg-slate-100/90 rounded-2xl border border-slate-200">
            <button onclick="setAttendanceStatus('${s.id}', 'present')" class="att-btn att-btn-present ${rec.status === 'present' ? 'selected' : ''}" title="Có mặt">
              <i class="fa-solid fa-check"></i> <span>Có mặt</span>
            </button>
            <button onclick="setAttendanceStatus('${s.id}', 'excused')" class="att-btn att-btn-excused ${rec.status === 'excused' ? 'selected' : ''}" title="Vắng có phép">
              <i class="fa-solid fa-envelope"></i> <span>Phép (P)</span>
            </button>
            <button onclick="setAttendanceStatus('${s.id}', 'unexcused')" class="att-btn att-btn-unexcused ${rec.status === 'unexcused' ? 'selected' : ''}" title="Vắng không phép">
              <i class="fa-solid fa-xmark"></i> <span>KP</span>
            </button>
            <button onclick="setAttendanceStatus('${s.id}', 'late')" class="att-btn att-btn-late ${rec.status === 'late' ? 'selected' : ''}" title="Đi muộn">
              <i class="fa-solid fa-clock"></i> <span>Muộn</span>
            </button>
          </div>
        </td>

        <td class="py-2.5 px-3 sm:px-4">
          <input type="text" value="${rec.note || ''}" placeholder="${rec.status !== 'present' ? 'Nhập lý do...' : 'Ghi chú nhanh...'}" 
            onchange="updateAttendanceNote('${s.id}', this.value)" 
            class="w-full px-2.5 py-1 text-xs sm:text-sm bg-slate-50 border ${rec.status !== 'present' ? 'border-amber-300 bg-amber-50/50' : 'border-slate-200'} rounded-xl focus:bg-white focus:outline-none">
        </td>

        <td class="py-2.5 px-3 sm:px-4 text-center">
          ${absStats.totalAbsent > 0 ? `
            <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-black ${absStats.totalAbsent >= 3 ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-800'}">
              ${absStats.totalAbsent} buổi
            </span>
          ` : `<span class="text-xs text-slate-400">0</span>`}
        </td>
      </tr>
    `;
  });

  if (students.length === 0) {
    html = `
      <tr>
        <td colspan="5" class="py-8 text-center text-slate-400">
          <i class="fa-solid fa-users-slash text-4xl mb-2 text-slate-300"></i>
          <p class="font-bold">Lớp học chưa có học sinh nào.</p>
          <p class="text-xs mt-1">Hãy chuyển sang tab "Sổ tay cá nhân số" để thêm học sinh hoặc nhập từ file Excel.</p>
        </td>
      </tr>
    `;
  }

  tbody.innerHTML = html;
  updateAttendanceStats();
}

function updateAttendanceStats() {
  if (!currentClass) return;
  const key = getAttendanceSessionKey();
  const sessionData = currentClass.attendanceData[key] || {};
  const students = currentClass.students || [];

  let total = students.length;
  let present = 0, excused = 0, unexcused = 0, late = 0;

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

// BẢNG ĐIỂM DANH CẢ THÁNG (MONTHLY MATRIX VIEW)
function renderMonthlyAttendanceMatrix() {
  const header = document.getElementById('monthlyMatrixHeader');
  const body = document.getElementById('monthlyMatrixBody');
  const monthSelect = document.getElementById('monthlyMatrixMonthSelect');
  if (!header || !body || !monthSelect || !currentClass) return;

  const month = parseInt(monthSelect.value) || (new Date().getMonth() + 1);
  const year = new Date().getFullYear();
  const daysInMonth = new Date(year, month, 0).getDate();

  // Header row
  let headerHtml = `
    <tr class="bg-slate-100 text-slate-700 font-bold border-b border-slate-300">
      <th class="py-2 px-1 border-r border-slate-300 w-8">STT</th>
      <th class="py-2 px-2 border-r border-slate-300 text-left min-w-[140px]">Họ và tên</th>
  `;

  for (let d = 1; d <= daysInMonth; d++) {
    const dayOfWeek = new Date(year, month - 1, d).getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    headerHtml += `
      <th class="py-1 px-1 border-r border-slate-200 w-7 ${isWeekend ? 'bg-slate-200/70 text-slate-400 font-normal' : ''}">
        ${d}
      </th>
    `;
  }

  headerHtml += `
      <th class="py-2 px-1 border-r border-slate-300 w-12 text-amber-700">Phép</th>
      <th class="py-2 px-1 border-r border-slate-300 w-12 text-rose-700">KP</th>
      <th class="py-2 px-1 w-12 text-yellow-700">Muộn</th>
    </tr>
  `;
  header.innerHTML = headerHtml;

  // Body rows
  let bodyHtml = '';
  currentClass.students.forEach(s => {
    let monthExcused = 0, monthUnexcused = 0, monthLate = 0;

    bodyHtml += `
      <tr class="hover:bg-slate-50 transition text-xs">
        <td class="py-1 px-1 font-bold text-slate-400 border-r border-slate-200">${s.stt}</td>
        <td class="py-1 px-2 font-extrabold text-slate-800 text-left border-r border-slate-200 truncate" title="${s.name}">${s.name}</td>
    `;

    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const dayOfWeek = new Date(year, month - 1, d).getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

      const rec = getAttendanceRecord(s.id, dateStr, 'morning');
      let statusChar = '';
      let cellClass = 'hover:bg-blue-50 cursor-pointer';

      if (rec.status === 'present') {
        statusChar = '<span class="text-emerald-700 font-bold">✓</span>';
      } else if (rec.status === 'excused') {
        statusChar = '<span class="text-amber-600 font-bold">P</span>';
        cellClass = 'bg-amber-100 font-black';
        monthExcused++;
      } else if (rec.status === 'unexcused') {
        statusChar = '<span class="text-rose-600 font-bold">K</span>';
        cellClass = 'bg-rose-100 font-black';
        monthUnexcused++;
      } else if (rec.status === 'late') {
        statusChar = '<span class="text-yellow-600 font-bold">M</span>';
        cellClass = 'bg-yellow-100 font-black';
        monthLate++;
      }

      if (isWeekend) {
        bodyHtml += `<td class="py-1 border-r border-slate-200 bg-slate-100/50 text-slate-300">-</td>`;
      } else {
        bodyHtml += `
          <td class="py-1 border-r border-slate-200 ${cellClass}" onclick="toggleMonthlyCell('${s.id}', '${dateStr}')" title="Ngày ${d}/${month}: Bấm để đổi trạng thái">
            ${statusChar}
          </td>
        `;
      }
    }

    bodyHtml += `
        <td class="py-1 font-bold text-amber-700 border-r border-slate-200">${monthExcused || '-'}</td>
        <td class="py-1 font-bold text-rose-700 border-r border-slate-200">${monthUnexcused || '-'}</td>
        <td class="py-1 font-bold text-yellow-700">${monthLate || '-'}</td>
      </tr>
    `;
  });

  body.innerHTML = bodyHtml;
}

function toggleMonthlyCell(studentId, dateStr) {
  const rec = getAttendanceRecord(studentId, dateStr, 'morning');
  let nextStatus = 'present';
  if (rec.status === 'present') nextStatus = 'excused';
  else if (rec.status === 'excused') nextStatus = 'unexcused';
  else if (rec.status === 'unexcused') nextStatus = 'late';
  else if (rec.status === 'late') nextStatus = 'present';

  rec.status = nextStatus;
  saveAppData();
  renderMonthlyAttendanceMatrix();
}

// ========================================================
// TAB 2: SỔ TAY CÁ NHÂN SỐ & HỒ SƠ HỌC SINH
// ========================================================

function renderProfileCards() {
  const grid = document.getElementById('profileCardsGrid');
  if (!grid || !currentClass) return;

  const searchQuery = (document.getElementById('profileSearchInput')?.value || '').toLowerCase().trim();
  const tagFilter = document.getElementById('profileTagFilter')?.value || 'all';
  const students = currentClass.students || [];

  let html = '';
  students.forEach(s => {
    if (searchQuery) {
      const matchName = s.name.toLowerCase().includes(searchQuery);
      const matchPhone = (s.parentPhone || '').includes(searchQuery);
      const matchCircum = (s.circumstance || '').toLowerCase().includes(searchQuery);
      const matchTalent = (s.talents || '').toLowerCase().includes(searchQuery);
      if (!matchName && !matchPhone && !matchCircum && !matchTalent) return;
    }

    if (tagFilter === 'special_circumstance' && (!s.circumstance || s.circumstance.includes('bình thường'))) return;
    if (tagFilter === 'special_talent' && !s.talents) return;
    if (tagFilter === 'psychology' && !s.psychology) return;
    if (tagFilter === 'leader' && (!s.role || s.role === 'Học sinh')) return;

    const absStats = getStudentAbsenceCount(s.id);
    const parentLogsCount = (s.parentLogs || []).length;

    html += `
      <div class="bg-white rounded-3xl p-4 sm:p-5 shadow-sm border border-slate-200 hover:shadow-md transition flex flex-col justify-between space-y-3.5">
        <div>
          <!-- Header card -->
          <div class="flex items-start justify-between gap-3">
            <div class="flex items-center gap-3">
              <div class="w-11 h-11 rounded-2xl ${s.gender === 'Nữ' ? 'bg-pink-100 text-pink-700' : 'bg-blue-100 text-blue-700'} font-black flex items-center justify-center text-base shadow-sm">
                ${s.name.split(' ').pop().charAt(0)}
              </div>
              <div>
                <div class="flex items-center gap-1.5 flex-wrap">
                  <span class="text-xs font-bold text-slate-400">#${String(s.stt).padStart(2, '0')}</span>
                  <h3 class="font-extrabold text-slate-900 text-sm sm:text-base leading-tight hover:text-blue-600 cursor-pointer" onclick="openStudentModal('${s.id}')">
                    ${s.name}
                  </h3>
                </div>
                <div class="text-[11px] text-slate-500 mt-0.5 flex items-center gap-1.5 flex-wrap">
                  <span>${s.gender} • ${s.dob ? formatDate(s.dob) : 'Chưa cập nhật'}</span>
                  ${s.role && s.role !== 'Học sinh' ? `<span class="bg-amber-100 text-amber-900 px-1.5 rounded font-extrabold">${s.role}</span>` : ''}
                </div>
              </div>
            </div>

            <button onclick="openStudentModal('${s.id}')" class="w-7 h-7 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition" title="Sửa hồ sơ">
              <i class="fa-solid fa-pen text-xs"></i>
            </button>
          </div>

          <!-- Thông tin phụ huynh -->
          <div class="mt-3 pt-2.5 border-t border-slate-100 text-xs text-slate-600 space-y-1">
            <div class="flex items-center justify-between">
              <span class="truncate"><i class="fa-solid fa-user-shield text-blue-500 mr-1"></i>PH: ${s.parentName || 'N/A'}</span>
              ${s.parentPhone ? `
                <a href="tel:${s.parentPhone}" class="font-bold text-blue-600 hover:underline flex items-center gap-1 bg-blue-50 px-2 py-0.5 rounded-md text-[11px]">
                  <i class="fa-solid fa-phone text-[9px]"></i> ${s.parentPhone}
                </a>
              ` : ''}
            </div>
            ${s.address ? `<p class="text-[11px] text-slate-500 truncate" title="${s.address}"><i class="fa-solid fa-location-dot text-slate-400 mr-1"></i>${s.address}</p>` : ''}
          </div>

          <!-- SỔ TAY CÁ NHÂN GVCN -->
          <div class="mt-2.5 space-y-1.5 pt-2 border-t border-slate-100">
            ${s.circumstance ? `
              <div class="bg-rose-50/80 border border-rose-200/80 rounded-xl p-2 text-xs">
                <span class="font-bold text-rose-800 flex items-center gap-1"><i class="fa-solid fa-house-chimney-crack text-rose-600"></i> Hoàn cảnh:</span>
                <p class="text-rose-950 font-medium mt-0.5">${s.circumstance}</p>
              </div>
            ` : ''}

            ${s.talents ? `
              <div class="bg-amber-50/80 border border-amber-200/80 rounded-xl p-2 text-xs">
                <span class="font-bold text-amber-800 flex items-center gap-1"><i class="fa-solid fa-star text-amber-500"></i> Năng khiếu:</span>
                <p class="text-amber-950 font-medium mt-0.5">${s.talents}</p>
              </div>
            ` : ''}

            ${s.psychology ? `
              <div class="bg-purple-50/80 border border-purple-200/80 rounded-xl p-2 text-xs">
                <span class="font-bold text-purple-800 flex items-center gap-1"><i class="fa-solid fa-brain text-purple-600"></i> Tâm lý & Sức khỏe:</span>
                <p class="text-purple-950 font-medium mt-0.5">${s.psychology}</p>
              </div>
            ` : ''}
          </div>
        </div>

        <div class="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
          <div class="flex items-center gap-1.5">
            <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-lg font-bold flex items-center gap-1">
              <i class="fa-solid fa-comments text-blue-500 text-[10px]"></i> ${parentLogsCount} nhật ký
            </span>
            ${absStats.totalAbsent > 0 ? `
              <span class="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-lg font-bold">
                ${absStats.totalAbsent} vắng
              </span>
            ` : ''}
          </div>

          <button onclick="openQuickLogModal('${s.id}')" class="px-2.5 py-1 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-xl font-bold transition flex items-center gap-1 text-xs">
            <i class="fa-solid fa-phone-volume"></i> Ghi trao đổi
          </button>
        </div>
      </div>
    `;
  });

  if (students.length === 0) {
    html = `
      <div class="col-span-full py-10 text-center text-slate-400 bg-white rounded-3xl border border-slate-200 p-8">
        <i class="fa-solid fa-id-card-clip text-5xl mb-3 text-slate-300"></i>
        <h3 class="text-base font-bold text-slate-700">Chưa có học sinh nào trong ${currentClass.name}</h3>
        <p class="text-xs text-slate-500 mt-1 mb-4">Bạn có thể bấm nút "Thêm Học Sinh" ở góc trên hoặc bấm "Nhập Excel" để tải danh sách lớp vào.</p>
        <button onclick="loadSampleVietnameseStudents()" class="px-4 py-2 bg-blue-600 text-white font-bold rounded-xl shadow hover:bg-blue-700 text-xs">
          + Nạp 15 học sinh mẫu chuẩn để trải nghiệm
        </button>
      </div>
    `;
  }

  grid.innerHTML = html;
}

function filterProfileCards() {
  renderProfileCards();
}

function openStudentModal(studentId = null) {
  const modal = document.getElementById('studentModal');
  const title = document.getElementById('modalStudentTitle');
  const btnDelete = document.getElementById('btnDeleteStudent');

  if (studentId) {
    const s = currentClass.students.find(item => item.id === studentId);
    if (!s) return;
    title.innerText = `Chỉnh Sửa Hồ Sơ: ${s.name}`;
    document.getElementById('editStudentId').value = s.id;
    document.getElementById('mStudentName').value = s.name || '';
    document.getElementById('mStudentDob').value = s.dob || '';
    document.getElementById('mStudentGender').value = s.gender || 'Nam';
    document.getElementById('mStudentCode').value = s.code || '';
    document.getElementById('mStudentRole').value = s.role || 'Học sinh';
    document.getElementById('mStudentTeam').value = s.team || 'Tổ 1';
    document.getElementById('mStudentPolicy').value = s.policy || 'Bình thường';
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
    document.getElementById('mStudentCode').value = '';
    document.getElementById('mStudentRole').value = 'Học sinh';
    document.getElementById('mStudentTeam').value = 'Tổ 1';
    document.getElementById('mStudentPolicy').value = 'Bình thường';
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
    showToast('Vui lòng nhập Họ và tên học sinh!', 'error');
    return;
  }

  const editId = document.getElementById('editStudentId').value;
  const sData = {
    name,
    dob: document.getElementById('mStudentDob').value,
    gender: document.getElementById('mStudentGender').value,
    code: document.getElementById('mStudentCode').value.trim(),
    role: document.getElementById('mStudentRole').value,
    team: document.getElementById('mStudentTeam').value,
    policy: document.getElementById('mStudentPolicy').value,
    parentName: document.getElementById('mStudentParentName').value.trim(),
    parentPhone: document.getElementById('mStudentParentPhone').value.trim(),
    address: document.getElementById('mStudentAddress').value.trim(),
    circumstance: document.getElementById('mStudentCircumstance').value.trim(),
    talents: document.getElementById('mStudentTalents').value.trim(),
    psychology: document.getElementById('mStudentPsychology').value.trim()
  };

  if (editId) {
    const s = currentClass.students.find(item => item.id === editId);
    if (s) Object.assign(s, sData);
  } else {
    const newStudent = {
      id: 'HS' + Date.now().toString().slice(-4),
      stt: (currentClass.students.length || 0) + 1,
      ...sData,
      parentLogs: []
    };
    currentClass.students.push(newStudent);
  }

  saveAppData();
  closeStudentModal();
  renderProfileCards();
  renderAttendanceTable();
  renderAssessmentView();
  showToast('Đã lưu hồ sơ học sinh thành công!', 'success');
}

function deleteCurrentStudent() {
  const editId = document.getElementById('editStudentId').value;
  if (!editId) return;

  const s = currentClass.students.find(item => item.id === editId);
  if (confirm(`Bạn có chắc muốn xóa học sinh "${s?.name}" khỏi sổ không?`)) {
    currentClass.students = currentClass.students.filter(item => item.id !== editId);
    currentClass.students.forEach((item, index) => item.stt = index + 1);
    saveAppData();
    closeStudentModal();
    renderProfileCards();
    renderAttendanceTable();
    renderAssessmentView();
    showToast('Đã xóa học sinh khỏi danh sách.', 'info');
  }
}

function renderParentLogListInModal(logs) {
  const container = document.getElementById('mParentLogList');
  if (!container) return;
  if (logs.length === 0) {
    container.innerHTML = '<p class="text-xs text-slate-400 italic">Chưa có lịch sử trao đổi nào với phụ huynh.</p>';
    return;
  }
  container.innerHTML = logs.map(log => `
    <div class="bg-slate-50 border border-slate-200 rounded-xl p-2 text-xs space-y-0.5">
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
    showToast('Vui lòng lưu học sinh trước khi ghi nhật ký!', 'warning');
    return;
  }
  closeStudentModal();
  openQuickLogModal(editId);
}

function openQuickLogModal(studentId) {
  const s = currentClass.students.find(item => item.id === studentId);
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
    showToast('Vui lòng nhập nội dung trao đổi!', 'error');
    return;
  }

  const s = currentClass.students.find(item => item.id === studentId);
  if (s) {
    if (!s.parentLogs) s.parentLogs = [];
    s.parentLogs.unshift({
      date: new Date().toISOString().split('T')[0],
      type,
      content,
      result
    });
    saveAppData();
    closeQuickLogModal();
    renderProfileCards();
    showToast('Đã lưu nhật ký phối hợp phụ huynh.', 'success');
  }
}

// ========================================================
// TAB 3: ĐÁNH GIÁ THEO THÔNG TƯ 27 (ĐẦY ĐỦ MÔN HỌC, ĐIỂM SỐ & PHẨM CHẤT NĂNG LỰC)
// ========================================================

function getAllSubjects() {
  const grade = currentClass ? (currentClass.grade || 4) : 4;
  const baseSubjects = PRIMARY_SUBJECTS_BY_GRADE[grade] || PRIMARY_SUBJECTS_BY_GRADE[4];
  const custom = (currentClass && currentClass.customCriteria || []).filter(c => c.group === 'subject');
  return [...baseSubjects, ...custom];
}

function getAllQualities() {
  const custom = (currentClass && currentClass.customCriteria || []).filter(c => c.group === 'quality');
  return [...DEFAULT_QUALITIES, ...custom];
}

function getAllCoreCompetencies() {
  const custom = (currentClass && currentClass.customCriteria || []).filter(c => c.group === 'core');
  return [...DEFAULT_CORE_COMPETENCIES, ...custom];
}

function getAllSpecificCompetencies() {
  const custom = (currentClass && currentClass.customCriteria || []).filter(c => c.group === 'spec');
  return [...DEFAULT_SPECIFIC_COMPETENCIES, ...custom];
}

function loadAssessmentData() {
  currentAssessmentPeriod = document.getElementById('assessmentPeriodSelect').value;
  renderAssessmentView();
}

function changeAssessmentGrade(grade) {
  if (currentClass) {
    currentClass.grade = parseInt(grade) || 4;
    saveAppData();
    renderAssessmentView();
    showToast(`Đã áp dụng cấu hình môn học chuẩn cho Khối ${grade}`, 'info');
  }
}

function setTT27SubTab(tabName) {
  currentTT27SubTab = tabName;
  const tabs = [
    { key: 'subjects', btnId: 'btnSubTabSubjects', paneId: 'tt27PaneSubjects' },
    { key: 'traits', btnId: 'btnSubTabTraits', paneId: 'tt27PaneTraits' },
    { key: 'summary', btnId: 'btnSubTabSummary', paneId: 'tt27PaneSummary' },
    { key: 'detail', btnId: 'btnSubTabDetail', paneId: 'tt27PaneDetail' }
  ];

  tabs.forEach(t => {
    const btn = document.getElementById(t.btnId);
    const pane = document.getElementById(t.paneId);
    if (btn) {
      if (t.key === tabName) {
        btn.className = 'px-3.5 py-1.5 rounded-xl text-xs font-black transition bg-white text-emerald-950 shadow';
      } else {
        btn.className = 'px-3.5 py-1.5 rounded-xl text-xs font-black transition bg-white/15 text-white hover:bg-white/25';
      }
    }
    if (pane) {
      if (t.key === tabName) {
        pane.classList.remove('hidden');
      } else {
        pane.classList.add('hidden');
      }
    }
  });

  if (tabName === 'subjects') renderSubjectsAssessmentTable();
  else if (tabName === 'traits') renderTraitsAssessmentTable();
  else if (tabName === 'summary') renderSummaryAssessmentTable();
  else if (tabName === 'detail') renderDetailAssessment();
}

function renderAssessmentView() {
  const gSelect = document.getElementById('assessmentGradeSelect');
  if (gSelect && currentClass) {
    gSelect.value = currentClass.grade || 4;
  }
  const pSelect = document.getElementById('assessmentPeriodSelect');
  if (pSelect) {
    pSelect.value = currentAssessmentPeriod;
  }
  setTT27SubTab(currentTT27SubTab || 'subjects');
}

function getPeriodAssessment() {
  if (!currentClass.assessmentData) currentClass.assessmentData = {};
  if (!currentClass.assessmentData[currentAssessmentPeriod]) {
    currentClass.assessmentData[currentAssessmentPeriod] = {};
  }
  return currentClass.assessmentData[currentAssessmentPeriod];
}

function getStudentAssessment(studentId) {
  const periodData = getPeriodAssessment();
  if (!periodData[studentId]) {
    periodData[studentId] = {
      subjects: {},
      summaryLevel: 'Hoàn thành tốt',
      reward: 'Học sinh Tiêu biểu',
      subjSummary: 'T',
      qualSummary: 'T',
      compSummary: 'T',
      pc_yeunuoc: 'T', pc_nhanai: 'Đ', pc_chamchi: 'Đ', pc_trungthuc: 'T', pc_trachnhiem: 'Đ',
      nl_tuchu: 'Đ', nl_giaotiep: 'Đ', nl_giaiquyet: 'Đ',
      nl_ngonngu: 'Đ', nl_tinhtoan: 'Đ', nl_khoahoc: 'Đ', nl_congnghe: 'Đ', nl_tinhoc: 'Đ', nl_thammy: 'Đ', nl_thechat: 'Đ',
      comment: 'Hoàn thành tốt các nội dung học tập và rèn luyện.'
    };
  }
  if (!periodData[studentId].subjects) {
    periodData[studentId].subjects = {};
  }
  const subjects = getAllSubjects();
  subjects.forEach(sub => {
    if (!periodData[studentId].subjects[sub.id]) {
      periodData[studentId].subjects[sub.id] = {
        level: 'Đ',
        score: sub.hasScore ? 8 : null
      };
    }
  });
  if (!periodData[studentId].summaryLevel) {
    periodData[studentId].summaryLevel = 'Hoàn thành tốt';
  }
  if (periodData[studentId].reward === undefined) {
    periodData[studentId].reward = 'Học sinh Tiêu biểu';
  }
  return periodData[studentId];
}

function getStudentSubject(studentId, subjectId) {
  const rec = getStudentAssessment(studentId);
  if (!rec.subjects[subjectId]) {
    const subObj = getAllSubjects().find(s => s.id === subjectId);
    rec.subjects[subjectId] = {
      level: 'Đ',
      score: (subObj && subObj.hasScore) ? 8 : null
    };
  }
  return rec.subjects[subjectId];
}

function toggleSubjectLevel(studentId, subjectId) {
  const subj = getStudentSubject(studentId, subjectId);
  const currentVal = subj.level || 'Đ';
  let nextVal = 'T';
  if (currentVal === 'T') nextVal = 'Đ';
  else if (currentVal === 'Đ') nextVal = 'C';
  else if (currentVal === 'C') nextVal = 'T';

  subj.level = nextVal;
  saveAppData();

  const btn = document.getElementById(`subj_lvl_${studentId}_${subjectId}`);
  if (btn) {
    btn.className = `matrix-cell-btn cell-${nextVal}`;
    btn.innerText = nextVal;
    btn.title = `Mức: ${nextVal}`;
  }
}

function updateSubjectScore(studentId, subjectId, scoreVal) {
  const subj = getStudentSubject(studentId, subjectId);
  if (scoreVal === '' || scoreVal === null || scoreVal === undefined) {
    subj.score = null;
  } else {
    let num = parseInt(scoreVal);
    if (isNaN(num)) num = null;
    else num = Math.min(10, Math.max(1, num));
    subj.score = num;
  }
  saveAppData();
}

function toggleMatrixCell(studentId, criteriaId) {
  const rec = getStudentAssessment(studentId);
  const currentVal = rec[criteriaId] || 'Đ';
  let nextVal = 'T';
  if (currentVal === 'T') nextVal = 'Đ';
  else if (currentVal === 'Đ') nextVal = 'C';
  else if (currentVal === 'C') nextVal = 'T';

  rec[criteriaId] = nextVal;
  saveAppData();

  const btn = document.getElementById(`cell_${studentId}_${criteriaId}`);
  if (btn) {
    btn.className = `matrix-cell-btn cell-${nextVal}`;
    btn.innerText = nextVal;
  }
}

function updateMatrixComment(studentId, comment) {
  const rec = getStudentAssessment(studentId);
  rec.comment = comment;
  saveAppData();
}

function quickFillSubjects(val) {
  if (confirm(`Đặt tất cả môn học của toàn lớp về mức [${val}]?`)) {
    const subList = getAllSubjects();
    currentClass.students.forEach(s => {
      const rec = getStudentAssessment(s.id);
      subList.forEach(sub => {
        if (!rec.subjects[sub.id]) rec.subjects[sub.id] = {};
        rec.subjects[sub.id].level = val;
      });
    });
    saveAppData();
    renderSubjectsAssessmentTable();
    showToast(`Đã đặt toàn bộ môn học cả lớp về mức [${val}]`, 'success');
  }
}

function quickFillTraits(val) {
  if (confirm(`Đặt tất cả phẩm chất và năng lực của toàn lớp về mức [${val}]?`)) {
    const qList = getAllQualities();
    const cList = getAllCoreCompetencies();
    const scList = getAllSpecificCompetencies();

    currentClass.students.forEach(s => {
      const rec = getStudentAssessment(s.id);
      qList.forEach(q => rec[q.id] = val);
      cList.forEach(c => rec[c.id] = val);
      scList.forEach(sc => rec[sc.id] = val);
    });
    saveAppData();
    renderTraitsAssessmentTable();
    showToast(`Đã đặt phẩm chất & năng lực toàn lớp về mức [${val}]`, 'success');
  }
}

function autoCalculateSummary() {
  const subList = getAllSubjects();
  const qList = getAllQualities();
  const cList = getAllCoreCompetencies();
  const scList = getAllSpecificCompetencies();

  currentClass.students.forEach(s => {
    const rec = getStudentAssessment(s.id);

    let allSubjectsT = true;
    let hasSubjectC = false;
    let minScore = 10;
    let hasAnyScore = false;

    subList.forEach(sub => {
      const subj = (rec.subjects && rec.subjects[sub.id]) || { level: 'Đ' };
      if (subj.level !== 'T') allSubjectsT = false;
      if (subj.level === 'C') hasSubjectC = true;
      if (sub.hasScore && subj.score !== null && subj.score !== undefined) {
        hasAnyScore = true;
        if (subj.score < minScore) minScore = subj.score;
      }
    });

    if (!hasAnyScore) minScore = 10;

    let allQualitiesT = true;
    let hasQualityC = false;
    qList.forEach(q => {
      const v = rec[q.id] || 'Đ';
      if (v !== 'T') allQualitiesT = false;
      if (v === 'C') hasQualityC = true;
    });

    let allCompT = true;
    let hasCompC = false;
    [...cList, ...scList].forEach(c => {
      const v = rec[c.id] || 'Đ';
      if (v !== 'T') allCompT = false;
      if (v === 'C') hasCompC = true;
    });

    // Circular 27 Article 13 evaluation
    if (allSubjectsT && allQualitiesT && allCompT && minScore >= 9) {
      rec.summaryLevel = 'Hoàn thành xuất sắc';
      rec.reward = 'Học sinh Xuất sắc';
      rec.subjSummary = 'T';
      rec.qualSummary = 'T';
      rec.compSummary = 'T';
    } else if (!hasSubjectC && !hasQualityC && !hasCompC && minScore >= 7) {
      rec.summaryLevel = 'Hoàn thành tốt';
      rec.reward = (minScore >= 9 || allSubjectsT) ? 'Học sinh Tiêu biểu' : 'Không';
      rec.subjSummary = allSubjectsT ? 'T' : 'Đ';
      rec.qualSummary = allQualitiesT ? 'T' : 'Đ';
      rec.compSummary = allCompT ? 'T' : 'Đ';
    } else if (!hasSubjectC && !hasQualityC && !hasCompC && minScore >= 5) {
      rec.summaryLevel = 'Hoàn thành';
      rec.reward = 'Không';
      rec.subjSummary = 'Đ';
      rec.qualSummary = 'Đ';
      rec.compSummary = 'Đ';
    } else {
      rec.summaryLevel = 'Chưa hoàn thành';
      rec.reward = 'Không';
      rec.subjSummary = hasSubjectC ? 'C' : 'Đ';
      rec.qualSummary = hasQualityC ? 'C' : 'Đ';
      rec.compSummary = hasCompC ? 'C' : 'Đ';
    }
  });

  saveAppData();
  renderSummaryAssessmentTable();
  showToast('Đã tự động xét mức độ hoàn thành & danh hiệu khen thưởng chuẩn TT27!', 'success');
}

function renderSubjectsAssessmentTable() {
  const thead = document.getElementById('subjectsAssessmentHeader');
  const tbody = document.getElementById('subjectsAssessmentBody');
  if (!thead || !tbody || !currentClass) return;

  const subList = getAllSubjects();

  // Header row 1
  let row1 = `
    <tr class="bg-slate-100 text-slate-700 font-bold border-b border-slate-300">
      <th rowspan="2" class="py-2.5 px-2 border-r border-slate-300 w-10">STT</th>
      <th rowspan="2" class="py-2.5 px-3 border-r border-slate-300 text-left min-w-[150px]">Họ và tên</th>
  `;

  subList.forEach(sub => {
    if (sub.hasScore) {
      row1 += `<th colspan="2" class="py-1.5 px-2 border-r border-slate-300 bg-blue-50 text-blue-950 font-extrabold uppercase text-[11px]" title="${sub.label}">${sub.short || sub.label}</th>`;
    } else {
      row1 += `<th rowspan="2" class="py-2 px-2 border-r border-slate-300 bg-sky-50/80 text-sky-950 font-extrabold text-[11px] min-w-[65px]" title="${sub.label}">${sub.short || sub.label}</th>`;
    }
  });

  row1 += `<th rowspan="2" class="py-2.5 px-3 text-left min-w-[200px]">Lời nhận xét của GVCN</th></tr>`;

  // Header row 2
  let row2 = `<tr class="bg-slate-50 text-[10px] font-bold border-b border-slate-300">`;
  subList.forEach(sub => {
    if (sub.hasScore) {
      row2 += `
        <th class="py-1 px-1 border-r border-slate-200 w-12 text-center text-slate-600">Mức</th>
        <th class="py-1 px-1 border-r border-slate-200 w-12 text-center text-blue-700">Điểm</th>
      `;
    }
  });
  row2 += `</tr>`;

  thead.innerHTML = row1 + row2;

  // Body
  let html = '';
  currentClass.students.forEach(s => {
    const rec = getStudentAssessment(s.id);
    html += `
      <tr class="hover:bg-slate-50 transition text-xs">
        <td class="py-2 px-2 font-bold text-slate-500 border-r border-slate-200">${s.stt}</td>
        <td class="py-2 px-3 font-extrabold text-slate-800 text-left border-r border-slate-200">
          <div class="hover:text-blue-600 cursor-pointer" onclick="selectDetailStudentById('${s.id}')">
            ${s.name}
          </div>
        </td>
    `;

    subList.forEach(sub => {
      const subj = (rec.subjects && rec.subjects[sub.id]) || { level: 'Đ', score: sub.hasScore ? 8 : null };
      if (sub.hasScore) {
        html += `
          <td class="py-1 px-1 border-r border-slate-200 text-center">
            <button id="subj_lvl_${s.id}_${sub.id}" onclick="toggleSubjectLevel('${s.id}', '${sub.id}')" class="matrix-cell-btn cell-${subj.level || 'Đ'}" title="${sub.label}: Mức ${subj.level || 'Đ'}">
              ${subj.level || 'Đ'}
            </button>
          </td>
          <td class="py-1 px-1 border-r border-slate-200 text-center">
            <input type="number" min="1" max="10" step="1" value="${subj.score !== null && subj.score !== undefined ? subj.score : ''}" placeholder="-" 
              onchange="updateSubjectScore('${s.id}', '${sub.id}', this.value)" 
              class="w-10 text-center py-0.5 font-black text-xs text-blue-900 bg-slate-50 border border-slate-200 rounded-md focus:bg-white focus:border-blue-500 focus:outline-none">
          </td>
        `;
      } else {
        html += `
          <td class="py-1 px-1 border-r border-slate-200 text-center">
            <button id="subj_lvl_${s.id}_${sub.id}" onclick="toggleSubjectLevel('${s.id}', '${sub.id}')" class="matrix-cell-btn cell-${subj.level || 'Đ'}" title="${sub.label}: Mức ${subj.level || 'Đ'}">
              ${subj.level || 'Đ'}
            </button>
          </td>
        `;
      }
    });

    html += `
        <td class="py-1 px-2 text-left">
          <input type="text" value="${rec.comment || ''}" placeholder="Nhận xét môn học..." 
            onchange="updateMatrixComment('${s.id}', this.value)" 
            class="w-full px-2 py-1 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none">
        </td>
      </tr>
    `;
  });

  if (currentClass.students.length === 0) {
    html = `<tr><td colspan="20" class="py-8 text-center text-slate-400">Chưa có học sinh nào trong lớp.</td></tr>`;
  }

  tbody.innerHTML = html;
}

function renderTraitsAssessmentTable() {
  const thead = document.getElementById('traitsAssessmentHeader');
  const tbody = document.getElementById('traitsAssessmentBody');
  if (!thead || !tbody || !currentClass) return;

  const qList = getAllQualities();
  const cList = getAllCoreCompetencies();
  const scList = getAllSpecificCompetencies();

  // Dynamic Header
  thead.innerHTML = `
    <tr class="bg-slate-100 text-slate-700 font-bold border-b border-slate-300">
      <th rowspan="2" class="py-2.5 px-2 border-r border-slate-300 w-10">STT</th>
      <th rowspan="2" class="py-2.5 px-3 border-r border-slate-300 text-left min-w-[150px]">Họ và tên</th>
      <th colspan="${qList.length}" class="py-1.5 px-2 border-r border-slate-300 bg-emerald-100/80 text-emerald-950 font-extrabold uppercase">5 Phẩm Chất Chủ Yếu</th>
      <th colspan="${cList.length}" class="py-1.5 px-2 border-r border-slate-300 bg-sky-100/80 text-sky-950 font-extrabold uppercase">3 Năng Lực Chung</th>
      <th colspan="${scList.length}" class="py-1.5 px-2 border-r border-slate-300 bg-purple-100/80 text-purple-950 font-extrabold uppercase">7 Năng Lực Đặc Thù</th>
      <th rowspan="2" class="py-2.5 px-3 text-left min-w-[200px]">Lời nhận xét của GVCN</th>
    </tr>
    <tr class="bg-slate-50 text-[11px] font-bold border-b border-slate-300">
      ${qList.map(q => `<th class="py-1.5 px-1 border-r border-slate-200 w-10" title="${q.label}">${q.short || q.label.slice(0, 4)}</th>`).join('')}
      ${cList.map(c => `<th class="py-1.5 px-1 border-r border-slate-200 w-10" title="${c.label}">${c.short || c.label.slice(0, 4)}</th>`).join('')}
      ${scList.map(sc => `<th class="py-1.5 px-1 border-r border-slate-200 w-10" title="${sc.label}">${sc.short || sc.label.slice(0, 4)}</th>`).join('')}
    </tr>
  `;

  // Body
  let html = '';
  currentClass.students.forEach(s => {
    const rec = getStudentAssessment(s.id);
    html += `
      <tr class="hover:bg-slate-50 transition text-xs">
        <td class="py-2 px-2 font-bold text-slate-500 border-r border-slate-200">${s.stt}</td>
        <td class="py-2 px-3 font-extrabold text-slate-800 text-left border-r border-slate-200">
          <div class="hover:text-blue-600 cursor-pointer" onclick="selectDetailStudentById('${s.id}')">
            ${s.name}
          </div>
        </td>

        ${qList.map(q => `
          <td class="py-1 px-1 border-r border-slate-200 text-center">
            <button id="cell_${s.id}_${q.id}" onclick="toggleMatrixCell('${s.id}', '${q.id}')" class="matrix-cell-btn cell-${rec[q.id] || 'Đ'}" title="${q.label}">
              ${rec[q.id] || 'Đ'}
            </button>
          </td>
        `).join('')}

        ${cList.map(c => `
          <td class="py-1 px-1 border-r border-slate-200 text-center">
            <button id="cell_${s.id}_${c.id}" onclick="toggleMatrixCell('${s.id}', '${c.id}')" class="matrix-cell-btn cell-${rec[c.id] || 'Đ'}" title="${c.label}">
              ${rec[c.id] || 'Đ'}
            </button>
          </td>
        `).join('')}

        ${scList.map(sc => `
          <td class="py-1 px-1 border-r border-slate-200 text-center">
            <button id="cell_${s.id}_${sc.id}" onclick="toggleMatrixCell('${s.id}', '${sc.id}')" class="matrix-cell-btn cell-${rec[sc.id] || 'Đ'}" title="${sc.label}">
              ${rec[sc.id] || 'Đ'}
            </button>
          </td>
        `).join('')}

        <td class="py-1 px-2 text-left">
          <input type="text" value="${rec.comment || ''}" placeholder="Nhận xét phẩm chất, năng lực..." 
            onchange="updateMatrixComment('${s.id}', this.value)" 
            class="w-full px-2 py-1 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none">
        </td>
      </tr>
    `;
  });

  if (currentClass.students.length === 0) {
    html = `<tr><td colspan="${qList.length + cList.length + scList.length + 3}" class="py-8 text-center text-slate-400">Chưa có học sinh nào.</td></tr>`;
  }

  tbody.innerHTML = html;
}

function renderSummaryAssessmentTable() {
  const tbody = document.getElementById('summaryAssessmentBody');
  if (!tbody || !currentClass) return;

  let html = '';
  currentClass.students.forEach(s => {
    const rec = getStudentAssessment(s.id);
    const summaryLevel = rec.summaryLevel || 'Hoàn thành tốt';
    const reward = rec.reward || 'Học sinh Tiêu biểu';
    const subjLvl = rec.subjSummary || 'T';
    const qualLvl = rec.qualSummary || 'T';
    const compLvl = rec.compSummary || 'T';

    html += `
      <tr class="hover:bg-slate-50 transition text-xs">
        <td class="py-2.5 px-2 font-bold text-slate-500 border-r border-slate-200">${s.stt}</td>
        <td class="py-2.5 px-3 font-extrabold text-slate-800 text-left border-r border-slate-200">
          <div class="hover:text-blue-600 cursor-pointer" onclick="selectDetailStudentById('${s.id}')">
            ${s.name}
          </div>
        </td>

        <td class="py-2 px-2 border-r border-slate-200 text-center">
          <select onchange="updateSummarySubj('${s.id}', this.value)" class="text-xs font-bold px-2 py-1 rounded-lg border border-slate-200 bg-white">
            <option value="T" ${subjLvl === 'T' ? 'selected' : ''}>T (Tốt)</option>
            <option value="Đ" ${subjLvl === 'Đ' ? 'selected' : ''}>Đ (Đạt)</option>
            <option value="C" ${subjLvl === 'C' ? 'selected' : ''}>C (Cố gắng)</option>
          </select>
        </td>

        <td class="py-2 px-2 border-r border-slate-200 text-center">
          <select onchange="updateSummaryQual('${s.id}', this.value)" class="text-xs font-bold px-2 py-1 rounded-lg border border-slate-200 bg-white">
            <option value="T" ${qualLvl === 'T' ? 'selected' : ''}>T (Tốt)</option>
            <option value="Đ" ${qualLvl === 'Đ' ? 'selected' : ''}>Đ (Đạt)</option>
            <option value="C" ${qualLvl === 'C' ? 'selected' : ''}>C (Cố gắng)</option>
          </select>
        </td>

        <td class="py-2 px-2 border-r border-slate-200 text-center">
          <select onchange="updateSummaryComp('${s.id}', this.value)" class="text-xs font-bold px-2 py-1 rounded-lg border border-slate-200 bg-white">
            <option value="T" ${compLvl === 'T' ? 'selected' : ''}>T (Tốt)</option>
            <option value="Đ" ${compLvl === 'Đ' ? 'selected' : ''}>Đ (Đạt)</option>
            <option value="C" ${compLvl === 'C' ? 'selected' : ''}>C (Cố gắng)</option>
          </select>
        </td>

        <td class="py-2 px-2 border-r border-slate-200 text-center">
          <select onchange="updateStudentSummaryLevel('${s.id}', this.value)" class="text-xs font-black px-2.5 py-1.5 rounded-xl border border-slate-300 ${summaryLevel === 'Hoàn thành xuất sắc' ? 'bg-emerald-100 text-emerald-900 border-emerald-300' : summaryLevel === 'Hoàn thành tốt' ? 'bg-sky-100 text-sky-900 border-sky-300' : summaryLevel === 'Hoàn thành' ? 'bg-amber-100 text-amber-900 border-amber-300' : 'bg-rose-100 text-rose-900 border-rose-300'}">
            <option value="Hoàn thành xuất sắc" ${summaryLevel === 'Hoàn thành xuất sắc' ? 'selected' : ''}>🌟 Hoàn thành xuất sắc</option>
            <option value="Hoàn thành tốt" ${summaryLevel === 'Hoàn thành tốt' ? 'selected' : ''}>👍 Hoàn thành tốt</option>
            <option value="Hoàn thành" ${summaryLevel === 'Hoàn thành' ? 'selected' : ''}>✓ Hoàn thành</option>
            <option value="Chưa hoàn thành" ${summaryLevel === 'Chưa hoàn thành' ? 'selected' : ''}>⚠️ Chưa hoàn thành</option>
          </select>
        </td>

        <td class="py-2 px-2 border-r border-slate-200 text-center">
          <select onchange="updateStudentReward('${s.id}', this.value)" class="text-xs font-extrabold px-2 py-1 rounded-lg border border-slate-200 bg-white text-slate-800">
            <option value="Học sinh Xuất sắc" ${reward === 'Học sinh Xuất sắc' ? 'selected' : ''}>🏆 Học sinh Xuất sắc</option>
            <option value="Học sinh Tiêu biểu" ${reward === 'Học sinh Tiêu biểu' ? 'selected' : ''}>🎖️ Học sinh Tiêu biểu</option>
            <option value="Khen ngợi từng mặt" ${reward === 'Khen ngợi từng mặt' ? 'selected' : ''}>🎗️ Khen ngợi từng mặt</option>
            <option value="Không" ${reward === 'Không' ? 'selected' : ''}>Không khen thưởng</option>
          </select>
        </td>

        <td class="py-1 px-2 text-left">
          <input type="text" value="${rec.comment || ''}" placeholder="Lời nhận xét tổng quát cuối kỳ..." 
            onchange="updateMatrixComment('${s.id}', this.value)" 
            class="w-full px-2 py-1 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none">
        </td>
      </tr>
    `;
  });

  if (currentClass.students.length === 0) {
    html = `<tr><td colspan="8" class="py-8 text-center text-slate-400">Chưa có học sinh nào.</td></tr>`;
  }

  tbody.innerHTML = html;
}

function updateSummarySubj(studentId, val) {
  const rec = getStudentAssessment(studentId);
  rec.subjSummary = val;
  saveAppData();
}

function updateSummaryQual(studentId, val) {
  const rec = getStudentAssessment(studentId);
  rec.qualSummary = val;
  saveAppData();
}

function updateSummaryComp(studentId, val) {
  const rec = getStudentAssessment(studentId);
  rec.compSummary = val;
  saveAppData();
}

function updateStudentSummaryLevel(studentId, val) {
  const rec = getStudentAssessment(studentId);
  rec.summaryLevel = val;
  saveAppData();
  renderSummaryAssessmentTable();
}

function updateStudentReward(studentId, val) {
  const rec = getStudentAssessment(studentId);
  rec.reward = val;
  saveAppData();
}

function renderDetailAssessment() {
  const listContainer = document.getElementById('detailStudentList');
  if (!listContainer || !currentClass) return;

  const countBadge = document.getElementById('detailStudentCount');
  if (countBadge) countBadge.innerText = `${currentClass.students.length} HS`;

  const searchQuery = (document.getElementById('detailSearchInput')?.value || '').toLowerCase().trim();

  let html = '';
  currentClass.students.forEach((s, idx) => {
    if (searchQuery && !s.name.toLowerCase().includes(searchQuery)) return;
    const isSelected = idx === selectedStudentForDetailIndex;
    html += `
      <div onclick="selectDetailStudent(${idx})" class="p-2.5 rounded-xl cursor-pointer transition flex items-center justify-between ${isSelected ? 'bg-emerald-600 text-white font-black shadow' : 'bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold'}">
        <div class="flex items-center gap-2">
          <span class="w-5 text-center text-xs opacity-70">${s.stt}</span>
          <span class="text-xs sm:text-sm">${s.name}</span>
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
  const idx = currentClass.students.findIndex(s => s.id === studentId);
  if (idx !== -1) {
    selectedStudentForDetailIndex = idx;
    setTT27SubTab('detail');
  }
}

function navDetailStudent(delta) {
  let nextIdx = selectedStudentForDetailIndex + delta;
  if (nextIdx < 0) nextIdx = currentClass.students.length - 1;
  if (nextIdx >= currentClass.students.length) nextIdx = 0;
  selectDetailStudent(nextIdx);
}

function loadCurrentDetailStudentForm() {
  const currentStudent = currentClass.students[selectedStudentForDetailIndex];
  if (!currentStudent) return;

  document.getElementById('detailCurrentStt').innerText = `STT ${currentStudent.stt}`;
  document.getElementById('detailCurrentName').innerText = currentStudent.name;
  document.getElementById('detailCurrentInfo').innerText = `Mã: ${currentStudent.id} | Giới tính: ${currentStudent.gender} | Ngày sinh: ${currentStudent.dob ? formatDate(currentStudent.dob) : 'N/A'}`;

  const rec = getStudentAssessment(currentStudent.id);

  // 1. Render All Subjects & Exam Scores
  const sGrid = document.getElementById('subjectsPickerGrid');
  if (sGrid) {
    const subList = getAllSubjects();
    sGrid.innerHTML = subList.map(sub => {
      const subj = (rec.subjects && rec.subjects[sub.id]) || { level: 'Đ', score: sub.hasScore ? 8 : null };
      return `
        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-2.5 space-y-2">
          <div class="flex items-center justify-between">
            <span class="font-black text-slate-800 text-xs truncate max-w-[150px]" title="${sub.label}">${sub.label}</span>
            ${sub.hasScore ? `<span class="text-[9px] bg-blue-100 text-blue-800 font-extrabold px-1.5 py-0.5 rounded">Có điểm KT</span>` : ''}
          </div>
          <div class="flex items-center justify-between gap-1.5">
            <div class="flex items-center gap-1">
              <button onclick="setDetailSubjectLevel('${sub.id}', 'T')" class="w-6 h-6 rounded-md text-xs font-black transition ${subj.level === 'T' ? 'bg-emerald-600 text-white shadow' : 'bg-white text-slate-600 border border-slate-200'}">T</button>
              <button onclick="setDetailSubjectLevel('${sub.id}', 'Đ')" class="w-6 h-6 rounded-md text-xs font-black transition ${subj.level === 'Đ' ? 'bg-sky-600 text-white shadow' : 'bg-white text-slate-600 border border-slate-200'}">Đ</button>
              <button onclick="setDetailSubjectLevel('${sub.id}', 'C')" class="w-6 h-6 rounded-md text-xs font-black transition ${subj.level === 'C' ? 'bg-amber-600 text-white shadow' : 'bg-white text-slate-600 border border-slate-200'}">C</button>
            </div>
            ${sub.hasScore ? `
              <div class="flex items-center gap-1">
                <span class="text-[10px] text-slate-500 font-bold">Điểm:</span>
                <input type="number" min="1" max="10" step="1" value="${subj.score !== null && subj.score !== undefined ? subj.score : ''}" placeholder="-" 
                  onchange="setDetailSubjectScore('${sub.id}', this.value)" 
                  class="w-11 text-center py-0.5 text-xs font-black text-blue-900 bg-white border border-slate-300 rounded-lg">
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');
  }

  // 2. Render 5 Phẩm chất
  const qGrid = document.getElementById('qualitiesPickerGrid');
  if (qGrid) {
    qGrid.innerHTML = getAllQualities().map(q => `
      <div class="bg-slate-50 border border-slate-200 rounded-2xl p-2.5 flex items-center justify-between">
        <div>
          <p class="font-extrabold text-slate-800 text-xs">${q.label}</p>
          <p class="text-[10px] text-slate-500 line-clamp-1" title="${q.desc || ''}">${q.desc || ''}</p>
        </div>
        <div class="flex items-center gap-1">
          <button onclick="setDetailCriteriaValue('${q.id}', 'T')" class="w-6 h-6 rounded-md text-xs font-black transition ${rec[q.id] === 'T' ? 'bg-emerald-600 text-white shadow' : 'bg-white text-slate-600 border border-slate-200'}">T</button>
          <button onclick="setDetailCriteriaValue('${q.id}', 'Đ')" class="w-6 h-6 rounded-md text-xs font-black transition ${rec[q.id] === 'Đ' ? 'bg-sky-600 text-white shadow' : 'bg-white text-slate-600 border border-slate-200'}">Đ</button>
          <button onclick="setDetailCriteriaValue('${q.id}', 'C')" class="w-6 h-6 rounded-md text-xs font-black transition ${rec[q.id] === 'C' ? 'bg-amber-600 text-white shadow' : 'bg-white text-slate-600 border border-slate-200'}">C</button>
        </div>
      </div>
    `).join('');
  }

  // 3. Render 3 Năng lực chung
  const cGrid = document.getElementById('coreCompetenciesPickerGrid');
  if (cGrid) {
    cGrid.innerHTML = getAllCoreCompetencies().map(c => `
      <div class="bg-slate-50 border border-slate-200 rounded-2xl p-2.5 flex items-center justify-between">
        <div>
          <p class="font-extrabold text-slate-800 text-xs">${c.label}</p>
          <p class="text-[10px] text-slate-500 line-clamp-1" title="${c.desc || ''}">${c.desc || ''}</p>
        </div>
        <div class="flex items-center gap-1">
          <button onclick="setDetailCriteriaValue('${c.id}', 'T')" class="w-6 h-6 rounded-md text-xs font-black transition ${rec[c.id] === 'T' ? 'bg-emerald-600 text-white shadow' : 'bg-white text-slate-600 border border-slate-200'}">T</button>
          <button onclick="setDetailCriteriaValue('${c.id}', 'Đ')" class="w-6 h-6 rounded-md text-xs font-black transition ${rec[c.id] === 'Đ' ? 'bg-sky-600 text-white shadow' : 'bg-white text-slate-600 border border-slate-200'}">Đ</button>
          <button onclick="setDetailCriteriaValue('${c.id}', 'C')" class="w-6 h-6 rounded-md text-xs font-black transition ${rec[c.id] === 'C' ? 'bg-amber-600 text-white shadow' : 'bg-white text-slate-600 border border-slate-200'}">C</button>
        </div>
      </div>
    `).join('');
  }

  // 4. Render 7 Năng lực đặc thù
  const scGrid = document.getElementById('specCompetenciesPickerGrid');
  if (scGrid) {
    scGrid.innerHTML = getAllSpecificCompetencies().map(sc => `
      <div class="bg-slate-50 border border-slate-200 rounded-xl p-2 text-center space-y-1">
        <p class="font-extrabold text-slate-800 text-[11px] truncate" title="${sc.label}">${sc.label}</p>
        <div class="flex justify-center gap-1">
          <button onclick="setDetailCriteriaValue('${sc.id}', 'T')" class="w-6 h-6 rounded-md text-[10px] font-black transition ${rec[sc.id] === 'T' ? 'bg-emerald-600 text-white' : 'bg-white text-slate-600 border border-slate-200'}">T</button>
          <button onclick="setDetailCriteriaValue('${sc.id}', 'Đ')" class="w-6 h-6 rounded-md text-[10px] font-black transition ${rec[sc.id] === 'Đ' ? 'bg-sky-600 text-white' : 'bg-white text-slate-600 border border-slate-200'}">Đ</button>
          <button onclick="setDetailCriteriaValue('${sc.id}', 'C')" class="w-6 h-6 rounded-md text-[10px] font-black transition ${rec[sc.id] === 'C' ? 'bg-amber-600 text-white' : 'bg-white text-slate-600 border border-slate-200'}">C</button>
        </div>
      </div>
    `).join('');
  }

  // Comment bank
  const bank = document.getElementById('commentQuickBank');
  if (bank) {
    bank.innerHTML = customComments.map(comment => `
      <button onclick="applyQuickComment('${escapeHtml(comment)}')" class="text-left text-xs bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-300 border border-slate-200 px-3 py-1.5 rounded-xl transition font-medium">
        + ${comment}
      </button>
    `).join('');
  }

  document.getElementById('detailTeacherComment').value = rec.comment || '';
}

function setDetailSubjectLevel(subjectId, val) {
  const currentStudent = currentClass.students[selectedStudentForDetailIndex];
  if (!currentStudent) return;
  const subj = getStudentSubject(currentStudent.id, subjectId);
  subj.level = val;
  saveAppData();
  loadCurrentDetailStudentForm();
}

function setDetailSubjectScore(subjectId, score) {
  const currentStudent = currentClass.students[selectedStudentForDetailIndex];
  if (!currentStudent) return;
  updateSubjectScore(currentStudent.id, subjectId, score);
}

function setDetailCriteriaValue(criteriaId, val) {
  const currentStudent = currentClass.students[selectedStudentForDetailIndex];
  if (!currentStudent) return;
  const rec = getStudentAssessment(currentStudent.id);
  rec[criteriaId] = val;
  saveAppData();
  loadCurrentDetailStudentForm();
}

function applyQuickComment(comment) {
  const txt = document.getElementById('detailTeacherComment');
  if (txt.value.trim()) txt.value += ' ' + comment;
  else txt.value = comment;
  saveCurrentDetailComment();
}

function saveCurrentDetailComment() {
  const currentStudent = currentClass.students[selectedStudentForDetailIndex];
  if (!currentStudent) return;
  const rec = getStudentAssessment(currentStudent.id);
  rec.comment = document.getElementById('detailTeacherComment').value;
  saveAppData();
}

// THÊM TIÊU CHÍ / MÔN HỌC RIÊNG
function openAddCriteriaModal() {
  document.getElementById('newCriteriaLabel').value = '';
  document.getElementById('newCriteriaShort').value = '';
  document.getElementById('addCriteriaModal').classList.remove('hidden');
}

function closeAddCriteriaModal() {
  document.getElementById('addCriteriaModal').classList.add('hidden');
}

function saveNewCriteria() {
  const label = document.getElementById('newCriteriaLabel').value.trim();
  if (!label) {
    showToast('Vui lòng nhập tên môn học / hoạt động giáo dục!', 'error');
    return;
  }
  const short = document.getElementById('newCriteriaShort').value.trim() || label.slice(0, 5);
  const hasScore = document.getElementById('newCriteriaHasScore').value === 'true';

  if (!currentClass.customCriteria) currentClass.customCriteria = [];
  currentClass.customCriteria.push({
    id: 'sub_custom_' + Date.now().toString().slice(-4),
    label,
    short,
    group: 'subject',
    hasScore,
    desc: ''
  });

  saveAppData();
  closeAddCriteriaModal();
  renderAssessmentView();
  showToast(`Đã thêm môn học "${label}" vào bảng đánh giá!`, 'success');
}

// QUẢN LÝ NGÂN HÀNG NHẬN XÉT MẪU
function openManageCommentsModal() {
  renderCustomCommentsList();
  document.getElementById('manageCommentsModal').classList.remove('hidden');
}

function closeManageCommentsModal() {
  document.getElementById('manageCommentsModal').classList.add('hidden');
}

function renderCustomCommentsList() {
  const list = document.getElementById('customCommentsList');
  if (!list) return;

  list.innerHTML = customComments.map((c, idx) => `
    <div class="bg-slate-50 border border-slate-200 rounded-xl p-2.5 flex items-center justify-between gap-2 text-xs">
      <span class="text-slate-800 font-medium">${c}</span>
      <button onclick="deleteCustomComment(${idx})" class="text-rose-600 hover:text-rose-800 flex-shrink-0 p-1">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  `).join('');
}

function addNewCustomComment() {
  const input = document.getElementById('newCommentInput');
  const val = input.value.trim();
  if (!val) {
    showToast('Vui lòng nhập câu nhận xét!', 'warning');
    return;
  }
  customComments.push(val);
  saveAppData();
  input.value = '';
  renderCustomCommentsList();
  if (currentAssessmentView === 'student_detail') loadCurrentDetailStudentForm();
  showToast('Đã thêm nhận xét mới vào ngân hàng!', 'success');
}

function deleteCustomComment(idx) {
  customComments.splice(idx, 1);
  saveAppData();
  renderCustomCommentsList();
  if (currentAssessmentView === 'student_detail') loadCurrentDetailStudentForm();
}

// ========================================================
// TAB 4: BÁO CÁO, THỐNG KÊ, IN ẤN & XUẤT EXCEL
// ========================================================

function renderReports() {
  renderAttendanceChart();
  renderAssessmentChart();
  renderSpecialAttentionTable();
}

function renderAttendanceChart() {
  const ctx = document.getElementById('attendanceChart');
  if (!ctx || !currentClass) return;

  const dateKeys = Object.keys(currentClass.attendanceData || {}).map(k => k.split('_')[0]);
  const uniqueDates = [...new Set(dateKeys)].sort().slice(-7);
  const labels = uniqueDates.map(d => formatDate(d));
  const presentData = [];
  const absentData = [];
  const lateData = [];

  uniqueDates.forEach(d => {
    const recs = currentClass.attendanceData[`${d}_morning`] || {};
    let p = 0, a = 0, l = 0;
    (currentClass.students || []).forEach(s => {
      const r = recs[s.id];
      if (r) {
        if (r.status === 'present') p++;
        else if (r.status === 'excused' || r.status === 'unexcused') a++;
        else if (r.status === 'late') l++;
      } else p++;
    });
    presentData.push(p);
    absentData.push(a);
    lateData.push(l);
  });

  if (attendanceChartInstance) attendanceChartInstance.destroy();

  attendanceChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels.length ? labels : ['Hôm nay'],
      datasets: [
        { label: 'Có mặt', data: presentData.length ? presentData : [currentClass.students.length], backgroundColor: '#16a34a', borderRadius: 6 },
        { label: 'Vắng', data: absentData.length ? absentData : [0], backgroundColor: '#e11d48', borderRadius: 6 },
        { label: 'Đi muộn', data: lateData.length ? lateData : [0], backgroundColor: '#ca8a04', borderRadius: 6 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true, max: Math.max(currentClass.students.length + 2, 10), ticks: { stepSize: 5 } }
      },
      plugins: { legend: { position: 'bottom' } }
    }
  });
}

function renderAssessmentChart() {
  const ctx = document.getElementById('assessmentChart');
  if (!ctx || !currentClass) return;

  const periodData = getPeriodAssessment();
  let countT = 0, countD = 0, countC = 0;

  const subList = getAllSubjects();
  const allCrit = [...getAllQualities(), ...getAllCoreCompetencies(), ...getAllSpecificCompetencies()];
  (currentClass.students || []).forEach(s => {
    const rec = periodData[s.id] || {};
    
    // Count subjects
    subList.forEach(sub => {
      const subj = (rec.subjects && rec.subjects[sub.id]) || { level: 'Đ' };
      if (subj.level === 'T') countT++;
      else if (subj.level === 'Đ') countD++;
      else if (subj.level === 'C') countC++;
    });

    // Count traits
    allCrit.forEach(item => {
      const v = rec[item.id] || 'Đ';
      if (v === 'T') countT++;
      else if (v === 'Đ') countD++;
      else if (v === 'C') countC++;
    });
  });

  if (assessmentChartInstance) assessmentChartInstance.destroy();

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
      plugins: { legend: { position: 'bottom' } }
    }
  });
}

function renderSpecialAttentionTable() {
  const tbody = document.getElementById('specialAttentionTableBody');
  if (!tbody || !currentClass) return;

  let html = '';
  (currentClass.students || []).forEach(s => {
    const abs = getStudentAbsenceCount(s.id);
    const hasSpecial = s.circumstance || s.psychology || abs.totalAbsent > 1;

    if (hasSpecial) {
      html += `
        <tr class="hover:bg-slate-50 transition text-xs">
          <td class="py-2 px-3 font-extrabold text-slate-800">
            ${s.name} (#${s.stt})
          </td>
          <td class="py-2 px-3">
            ${s.circumstance ? `<p class="text-rose-700 font-semibold"><i class="fa-solid fa-house-chimney-crack mr-1"></i>${s.circumstance}</p>` : ''}
            ${s.psychology ? `<p class="text-purple-700 mt-0.5"><i class="fa-solid fa-brain mr-1"></i>${s.psychology}</p>` : ''}
          </td>
          <td class="py-2 px-3 text-center font-bold">
            ${abs.totalAbsent > 0 ? `<span class="text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">${abs.totalAbsent} buổi (${abs.excused}P/${abs.unexcused}KP)</span>` : '<span class="text-slate-400">0</span>'}
          </td>
          <td class="py-2 px-3 font-semibold text-blue-600">${s.parentPhone || 'Chưa cập nhật'}</td>
          <td class="py-2 px-3 text-right">
            <button onclick="openQuickLogModal('${s.id}')" class="px-2 py-0.5 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg text-xs font-bold transition">
              Liên hệ
            </button>
          </td>
        </tr>
      `;
    }
  });

  if (!html) {
    html = `<tr><td colspan="5" class="py-4 text-center text-xs text-slate-400">Nề nếp lớp rất tốt, chưa có học sinh nào cần lưu ý đặc biệt.</td></tr>`;
  }

  tbody.innerHTML = html;
}

// ================= PRINT & EXPORT STUDIO =================

function openPrintCustomizerModal() {
  document.getElementById('printUpperOrg').value = printConfig.upperOrg || 'PHÒNG GD&ĐT';
  document.getElementById('printSchoolTitle').value = printConfig.schoolTitle || currentClass.schoolName;
  document.getElementById('printLeftSigner').value = printConfig.leftSigner || 'HIỆU TRƯỞNG';
  document.getElementById('printRightSigner').value = printConfig.rightSigner || 'GIÁO VIÊN CHỦ NHIỆM';
  document.getElementById('printCustomizerModal').classList.remove('hidden');
}

function closePrintCustomizerModal() {
  document.getElementById('printCustomizerModal').classList.add('hidden');
}

function savePrintCustomizer() {
  printConfig.upperOrg = document.getElementById('printUpperOrg').value.trim();
  printConfig.schoolTitle = document.getElementById('printSchoolTitle').value.trim();
  printConfig.leftSigner = document.getElementById('printLeftSigner').value.trim();
  printConfig.rightSigner = document.getElementById('printRightSigner').value.trim();
  saveAppData();
  closePrintCustomizerModal();
  showToast('Đã lưu mẫu in ấn!', 'success');
}

function printAttendanceReport() {
  const printArea = document.getElementById('printArea');
  if (!printArea || !currentClass) return;

  let rowsHtml = '';
  currentClass.students.forEach(s => {
    const abs = getStudentAbsenceCount(s.id);
    rowsHtml += `
      <tr>
        <td style="text-align:center; padding: 5px; border: 1px solid #000;">${s.stt}</td>
        <td style="padding: 5px; border: 1px solid #000; font-weight: bold;">${s.name}</td>
        <td style="text-align:center; padding: 5px; border: 1px solid #000;">${s.gender}</td>
        <td style="text-align:center; padding: 5px; border: 1px solid #000;">${abs.excused}</td>
        <td style="text-align:center; padding: 5px; border: 1px solid #000;">${abs.unexcused}</td>
        <td style="text-align:center; padding: 5px; border: 1px solid #000;">${abs.late}</td>
        <td style="padding: 5px; border: 1px solid #000;">${s.parentPhone || ''}</td>
      </tr>
    `;
  });

  printArea.innerHTML = `
    <div style="font-family: 'Times New Roman', serif; color: #000; line-height: 1.4;">
      <div style="display:flex; justify-content:space-between; margin-bottom: 15px;">
        <div style="text-align:center;">
          <p style="text-transform:uppercase; font-size:10pt; margin:0;">${printConfig.upperOrg}</p>
          <p style="font-weight:bold; font-size:11pt; margin:0;">${printConfig.schoolTitle || currentClass.schoolName}</p>
          <p style="font-size:10pt; margin:0;">LỚP: <b>${currentClass.name.toUpperCase()}</b></p>
        </div>
        <div style="text-align:center;">
          <p style="font-weight:bold; margin:0;">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
          <p style="text-decoration:underline; font-size:10pt; margin:0;">Độc lập - Tự do - Hạnh phúc</p>
        </div>
      </div>

      <div style="text-align:center; margin: 20px 0;">
        <h2 style="text-transform:uppercase; font-size:14pt; margin:0; font-weight:bold;">SỔ THEO DÕI ĐIỂM DANH & CHUYÊN CẦN</h2>
        <p style="font-style:italic; font-size:10pt; margin: 3px 0 0 0;">Năm học: ${currentClass.schoolYear}</p>
      </div>

      <table style="width:100%; border-collapse: collapse; font-size: 10pt;">
        <thead>
          <tr style="background-color: #f2f2f2; text-align: center;">
            <th style="padding: 6px; border: 1px solid #000; width: 35px;">STT</th>
            <th style="padding: 6px; border: 1px solid #000;">Họ và tên học sinh</th>
            <th style="padding: 6px; border: 1px solid #000; width: 50px;">Giới tính</th>
            <th style="padding: 6px; border: 1px solid #000; width: 70px;">Vắng (P)</th>
            <th style="padding: 6px; border: 1px solid #000; width: 70px;">Vắng (KP)</th>
            <th style="padding: 6px; border: 1px solid #000; width: 70px;">Đi muộn</th>
            <th style="padding: 6px; border: 1px solid #000;">Điện thoại liên lạc</th>
          </tr>
        </thead>
        <tbody>${rowsHtml}</tbody>
      </table>

      <div style="display:flex; justify-content:space-between; margin-top: 35px;">
        <div style="text-align:center; width: 220px;">
          <p style="font-weight:bold; margin:0;">${printConfig.leftSigner}</p>
          <p style="font-style:italic; font-size:9pt;">(Ký và ghi rõ họ tên)</p>
        </div>
        <div style="text-align:center; width: 250px;">
          <p style="font-style:italic; margin:0;">Ngày ..... tháng ..... năm 20...</p>
          <p style="font-weight:bold; margin: 4px 0 0 0;">${printConfig.rightSigner}</p>
          <p style="font-style:italic; font-size:9pt;">(Ký và ghi rõ họ tên)</p>
          <br><br><br>
          <p style="font-weight:bold;">${currentClass.teacherName}</p>
        </div>
      </div>
    </div>
  `;
  window.print();
}

function printCircular27Report() {
  const printArea = document.getElementById('printArea');
  if (!printArea || !currentClass) return;

  const periodData = getPeriodAssessment();
  const subList = getAllSubjects();
  const qList = getAllQualities();
  const cList = getAllCoreCompetencies();

  let rowsHtml = '';
  currentClass.students.forEach(s => {
    const rec = periodData[s.id] || {};
    rowsHtml += `
      <tr>
        <td style="text-align:center; padding: 4px; border: 1px solid #000;">${s.stt}</td>
        <td style="padding: 4px; border: 1px solid #000; font-weight: bold; white-space: nowrap;">${s.name}</td>
        ${subList.map(sub => {
          const subj = (rec.subjects && rec.subjects[sub.id]) || { level: 'Đ' };
          const text = sub.hasScore && subj.score ? `${subj.level || 'Đ'} (${subj.score})` : (subj.level || 'Đ');
          return `<td style="text-align:center; border: 1px solid #000; font-size: 8pt;">${text}</td>`;
        }).join('')}
        ${qList.map(q => `<td style="text-align:center; border: 1px solid #000; font-size: 8pt;">${rec[q.id] || 'Đ'}</td>`).join('')}
        ${cList.map(c => `<td style="text-align:center; border: 1px solid #000; font-size: 8pt;">${rec[c.id] || 'Đ'}</td>`).join('')}
        <td style="text-align:center; border: 1px solid #000; font-weight: bold; font-size: 8pt;">${rec.summaryLevel || 'HT Tốt'}</td>
        <td style="padding: 4px; border: 1px solid #000; font-size: 8pt;">${rec.comment || ''}</td>
      </tr>
    `;
  });

  printArea.innerHTML = `
    <div style="font-family: 'Times New Roman', serif; color: #000; line-height: 1.2;">
      <div style="display:flex; justify-content:space-between; margin-bottom: 10px;">
        <div style="text-align:center;">
          <p style="text-transform:uppercase; font-size:8.5pt; margin:0;">${printConfig.upperOrg}</p>
          <p style="font-weight:bold; font-size:10pt; margin:0;">${printConfig.schoolTitle || currentClass.schoolName}</p>
          <p style="font-size:9pt; margin:0;">LỚP: <b>${currentClass.name.toUpperCase()}</b></p>
        </div>
        <div style="text-align:center;">
          <p style="font-weight:bold; font-size:9.5pt; margin:0;">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
          <p style="text-decoration:underline; font-size:8.5pt; margin:0;">Độc lập - Tự do - Hạnh phúc</p>
        </div>
      </div>

      <div style="text-align:center; margin: 10px 0;">
        <h2 style="text-transform:uppercase; font-size:12pt; margin:0; font-weight:bold;">BẢNG TỔNG HỢP ĐÁNH GIÁ CÁC MÔN HỌC, PHẨM CHẤT & NĂNG LỰC (TT 27/2020/TT-BGDĐT)</h2>
        <p style="font-style:italic; font-size:9pt; margin: 2px 0 0 0;">Năm học: ${currentClass.schoolYear} • Đợt: ${currentAssessmentPeriod}</p>
      </div>

      <table style="width:100%; border-collapse: collapse; font-size: 8pt;">
        <thead>
          <tr style="background-color: #f2f2f2; text-align: center;">
            <th rowspan="2" style="border: 1px solid #000; padding: 3px;">STT</th>
            <th rowspan="2" style="border: 1px solid #000; padding: 3px;">Họ và tên học sinh</th>
            <th colspan="${subList.length}" style="border: 1px solid #000; padding: 3px;">Các môn học & HĐGD (Mức/Điểm)</th>
            <th colspan="${qList.length}" style="border: 1px solid #000; padding: 3px;">Phẩm chất</th>
            <th colspan="${cList.length}" style="border: 1px solid #000; padding: 3px;">Năng lực</th>
            <th rowspan="2" style="border: 1px solid #000; padding: 3px;">Xếp loại</th>
            <th rowspan="2" style="border: 1px solid #000; padding: 3px;">Nhận xét của GVCN</th>
          </tr>
          <tr style="background-color: #f2f2f2; text-align: center; font-size: 7.5pt;">
            ${subList.map(s => `<th style="border: 1px solid #000; padding: 2px;">${s.short || s.label.slice(0, 4)}</th>`).join('')}
            ${qList.map(q => `<th style="border: 1px solid #000; padding: 2px;">${q.short || q.label.slice(0, 4)}</th>`).join('')}
            ${cList.map(c => `<th style="border: 1px solid #000; padding: 2px;">${c.short || c.label.slice(0, 4)}</th>`).join('')}
          </tr>
        </thead>
        <tbody>${rowsHtml}</tbody>
      </table>

      <div style="display:flex; justify-content:space-between; margin-top: 20px;">
        <div style="text-align:center; width: 180px;">
          <p style="font-weight:bold; margin:0;">${printConfig.leftSigner}</p>
        </div>
        <div style="text-align:center; width: 220px;">
          <p style="font-style:italic; margin:0;">Ngày ..... tháng ..... năm 20...</p>
          <p style="font-weight:bold; margin: 3px 0 0 0;">${printConfig.rightSigner}</p>
          <br><br><br>
          <p style="font-weight:bold;">${currentClass.teacherName}</p>
        </div>
      </div>
    </div>
  `;
  window.print();
}

function printStudentDossierReport() {
  const printArea = document.getElementById('printArea');
  if (!printArea || !currentClass) return;

  let cardsHtml = '';
  currentClass.students.forEach(s => {
    cardsHtml += `
      <div style="border: 1px solid #000; padding: 8px 12px; margin-bottom: 10px; page-break-inside: avoid; font-size: 10pt;">
        <div style="display:flex; justify-content:space-between; border-bottom: 1px dashed #666; padding-bottom: 4px; margin-bottom: 5px;">
          <strong style="font-size: 11pt;">${s.stt}. ${s.name}</strong>
          <span>Giới tính: <b>${s.gender}</b> | Ngày sinh: <b>${formatDate(s.dob)}</b> | Mã HS: <b>${s.code || 'N/A'}</b></span>
        </div>
        <p style="margin: 2px 0;"><b>Phụ huynh:</b> ${s.parentName || 'N/A'} - <b>SĐT:</b> ${s.parentPhone || 'N/A'}</p>
        <p style="margin: 2px 0;"><b>Địa chỉ:</b> ${s.address || 'N/A'}</p>
        ${s.circumstance ? `<p style="margin: 2px 0; color: #b91c1c;"><b>Hoàn cảnh:</b> ${s.circumstance}</p>` : ''}
        ${s.talents ? `<p style="margin: 2px 0; color: #b45309;"><b>Năng khiếu:</b> ${s.talents}</p>` : ''}
        ${s.psychology ? `<p style="margin: 2px 0; color: #4338ca;"><b>Tâm lý & Sức khỏe:</b> ${s.psychology}</p>` : ''}
      </div>
    `;
  });

  printArea.innerHTML = `
    <div style="font-family: 'Times New Roman', serif; color: #000; line-height: 1.4;">
      <div style="text-align:center; margin-bottom: 15px;">
        <h2 style="text-transform:uppercase; font-size:13pt; margin:0; font-weight:bold;">SỔ TAY CÁ NHÂN SỐ & HỒ SƠ HỌC SINH</h2>
        <p style="margin: 2px 0 0 0; font-size: 10pt;">Lớp: <b>${currentClass.name}</b> • GVCN: <b>${currentClass.teacherName}</b> • Năm học: <b>${currentClass.schoolYear}</b></p>
      </div>
      ${cardsHtml}
    </div>
  `;
  window.print();
}

// ================= EXCEL EXPORTS (SHEETJS) =================

function exportAttendanceExcel() {
  if (typeof XLSX === 'undefined' || !currentClass) {
    showToast('Đang tải thư viện Excel...', 'info');
    return;
  }

  const rows = [
    ['SỔ THEO DÕI CHUYÊN CẦN'],
    ['Trường:', currentClass.schoolName, 'Lớp:', currentClass.name, 'Năm học:', currentClass.schoolYear, 'GVCN:', currentClass.teacherName],
    [],
    ['STT', 'Họ và tên', 'Giới tính', 'Ngày sinh', 'Vắng có phép', 'Vắng không phép', 'Đi muộn', 'SĐT Phụ huynh']
  ];

  currentClass.students.forEach(s => {
    const abs = getStudentAbsenceCount(s.id);
    rows.push([
      s.stt, s.name, s.gender, s.dob ? formatDate(s.dob) : '',
      abs.excused, abs.unexcused, abs.late, s.parentPhone || ''
    ]);
  });

  const ws = XLSX.utils.aoa_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'ChuyenCan');
  XLSX.writeFile(wb, `So_QL_HS_ChuyenCan_${currentClass.name}_${currentDate}.xlsx`);
  showToast('Đã xuất file Excel Chuyên Cần thành công!', 'success');
}

function exportCircular27Excel() {
  if (typeof XLSX === 'undefined' || !currentClass) return;

  const periodData = getPeriodAssessment();
  const subList = getAllSubjects();
  const qList = getAllQualities();
  const cList = getAllCoreCompetencies();
  const scList = getAllSpecificCompetencies();

  const subjectHeaders = [];
  subList.forEach(sub => {
    if (sub.hasScore) {
      subjectHeaders.push(`${sub.label} (Mức)`, `${sub.label} (Điểm)`);
    } else {
      subjectHeaders.push(`${sub.label} (Mức)`);
    }
  });

  const headers = [
    'STT', 'Họ và tên',
    ...subjectHeaders,
    ...qList.map(q => `PC: ${q.label}`),
    ...cList.map(c => `NL: ${c.label}`),
    ...scList.map(sc => `NL: ${sc.label}`),
    'Mức Hoàn Thành',
    'Khen Thưởng',
    'Lời Nhận Xét GVCN'
  ];

  const rows = [
    ['BẢNG TỔNG HỢP ĐÁNH GIÁ KẾT QUẢ GIÁO DỤC THEO THÔNG TƯ 27/2020/TT-BGDĐT'],
    ['Trường:', currentClass.schoolName, 'Lớp:', currentClass.name, 'GVCN:', currentClass.teacherName, 'Năm học:', currentClass.schoolYear],
    ['Đợt đánh giá:', currentAssessmentPeriod],
    [],
    headers
  ];

  currentClass.students.forEach(s => {
    const rec = periodData[s.id] || {};
    const subCells = [];
    subList.forEach(sub => {
      const subj = (rec.subjects && rec.subjects[sub.id]) || { level: 'Đ' };
      if (sub.hasScore) {
        subCells.push(subj.level || 'Đ', subj.score !== null && subj.score !== undefined ? subj.score : '');
      } else {
        subCells.push(subj.level || 'Đ');
      }
    });

    const row = [
      s.stt, s.name,
      ...subCells,
      ...qList.map(q => rec[q.id] || 'Đ'),
      ...cList.map(c => rec[c.id] || 'Đ'),
      ...scList.map(sc => rec[sc.id] || 'Đ'),
      rec.summaryLevel || 'Hoàn thành tốt',
      rec.reward || 'Học sinh Tiêu biểu',
      rec.comment || ''
    ];
    rows.push(row);
  });

  const ws = XLSX.utils.aoa_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'DanhGiaTT27');
  XLSX.writeFile(wb, `So_QL_HS_DanhGiaTT27_${currentClass.name}_${currentAssessmentPeriod}.xlsx`);
  showToast('Đã xuất file Excel Đánh Giá TT27 đầy đủ các môn thành công!', 'success');
}

function exportStudentListExcel() {
  if (typeof XLSX === 'undefined' || !currentClass) return;

  const rows = [
    ['DANH SÁCH & SỔ TAY CÁ NHÂN SỐ HỌC SINH'],
    ['Lớp:', currentClass.name, 'GVCN:', currentClass.teacherName, 'Năm học:', currentClass.schoolYear],
    [],
    ['STT', 'Mã HS', 'Họ và tên', 'Ngày sinh', 'Giới tính', 'Chức vụ', 'Tổ', 'Chính sách', 'Phụ huynh', 'SĐT', 'Địa chỉ', 'Hoàn cảnh', 'Năng khiếu', 'Tâm lý & Sức khỏe']
  ];

  currentClass.students.forEach(s => {
    rows.push([
      s.stt, s.code || '', s.name, s.dob ? formatDate(s.dob) : '', s.gender,
      s.role || 'Học sinh', s.team || 'Tổ 1', s.policy || 'Bình thường',
      s.parentName || '', s.parentPhone || '', s.address || '',
      s.circumstance || '', s.talents || '', s.psychology || ''
    ]);
  });

  const ws = XLSX.utils.aoa_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'HoSoHocSinh');
  XLSX.writeFile(wb, `So_QL_HS_HoSo_${currentClass.name}.xlsx`);
  showToast('Đã xuất file Excel Hồ Sơ Học Sinh thành công!', 'success');
}

function downloadSampleExcelTemplate() {
  if (typeof XLSX === 'undefined') return;

  const rows = [
    ['STT', 'Mã HS', 'Họ và tên', 'Ngày sinh', 'Giới tính', 'Chức vụ', 'Tổ', 'Số điện thoại PH', 'Họ tên Phụ huynh', 'Địa chỉ', 'Hoàn cảnh', 'Năng khiếu', 'Tâm lý sức khỏe'],
    [1, 'GD4A-01', 'Nguyễn Văn An', '2015-03-12', 'Nam', 'Lớp phó', 'Tổ 1', '0912345678', 'Nguyễn Văn Bình', 'Hà Nội', 'Gia đình cơ bản', 'Toán học', 'Nhanh nhẹn'],
    [2, 'GD4A-02', 'Trần Thị Mai Anh', '2015-08-20', 'Nữ', 'Lớp trưởng', 'Tổ 1', '0987654321', 'Lê Thị Thu', 'Hà Nội', 'Con ngoan', 'Chữ đẹp, MC', 'Chăm chỉ']
  ];

  const ws = XLSX.utils.aoa_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'MauNhapHS');
  XLSX.writeFile(wb, `Mau_Nhap_Hoc_Sinh_So_QL_HS.xlsx`);
}

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
        showToast('File Excel không có dữ liệu học sinh!', 'error');
        return;
      }

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
      const codeIdx = headers.findIndex(c => c.includes('mã'));
      const dobIdx = headers.findIndex(c => c.includes('ngày sinh') || c.includes('sinh'));
      const genderIdx = headers.findIndex(c => c.includes('giới tính') || c.includes('nữ'));
      const roleIdx = headers.findIndex(c => c.includes('chức vụ') || c.includes('vai trò'));
      const teamIdx = headers.findIndex(c => c.includes('tổ'));
      const parentNameIdx = headers.findIndex(c => c.includes('phụ huynh') || c.includes('bố') || c.includes('mẹ'));
      const phoneIdx = headers.findIndex(c => c.includes('điện thoại') || c.includes('sđt') || c.includes('phone'));
      const addressIdx = headers.findIndex(c => c.includes('địa chỉ'));
      const circumIdx = headers.findIndex(c => c.includes('hoàn cảnh'));
      const talentIdx = headers.findIndex(c => c.includes('năng khiếu') || c.includes('năng lực'));
      const psychIdx = headers.findIndex(c => c.includes('tâm lý') || c.includes('sức khỏe'));

      if (nameIdx === -1) {
        showToast('Không tìm thấy cột "Họ và tên" trong file Excel!', 'error');
        return;
      }

      const newStudents = [];
      for (let i = headerRowIndex + 1; i < jsonData.length; i++) {
        const row = jsonData[i];
        if (!row || !row[nameIdx]) continue;
        const name = String(row[nameIdx]).trim();
        if (!name) continue;

        newStudents.push({
          id: 'HS' + Date.now().toString().slice(-4) + Math.floor(Math.random() * 1000),
          stt: (currentClass.students.length || 0) + newStudents.length + 1,
          name: name,
          code: codeIdx !== -1 && row[codeIdx] ? String(row[codeIdx]).trim() : '',
          dob: dobIdx !== -1 && row[dobIdx] ? String(row[dobIdx]).trim() : '',
          gender: genderIdx !== -1 && row[genderIdx] ? (String(row[genderIdx]).toLowerCase().includes('nữ') ? 'Nữ' : 'Nam') : 'Nam',
          role: roleIdx !== -1 && row[roleIdx] ? String(row[roleIdx]).trim() : 'Học sinh',
          team: teamIdx !== -1 && row[teamIdx] ? String(row[teamIdx]).trim() : 'Tổ 1',
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
        if (confirm(`Tìm thấy ${newStudents.length} học sinh. Bạn có muốn THÊM vào danh sách hiện tại không? (Chọn Hủy nếu muốn THAY THẾ toàn bộ)`)) {
          currentClass.students.push(...newStudents);
        } else {
          currentClass.students = newStudents;
        }
        currentClass.students.forEach((s, idx) => s.stt = idx + 1);
        saveAppData();
        closeImportExcelModal();
        renderAllViews();
        showToast(`Đã nạp thành công ${newStudents.length} học sinh vào ${currentClass.name}!`, 'success');
      }

    } catch (err) {
      showToast('Lỗi đọc file Excel: ' + err.message, 'error');
    }
  };
  reader.readAsArrayBuffer(file);
}

function loadSampleVietnameseStudents() {
  if (confirm('Khôi phục danh sách 15 học sinh mẫu chuẩn Việt Nam?')) {
    currentClass.students = getSampleStudentsList();
    initSampleAttendanceForClass(currentClass);
    initSampleAssessmentForClass(currentClass);
    saveAppData();
    closeImportExcelModal();
    renderAllViews();
    showToast('Đã nạp dữ liệu mẫu thành công!', 'success');
  }
}

// ================= BACKUP & RESTORE =================

function exportDataBackup() {
  const fullBackup = {
    appName: 'Sổ QL HS',
    version: '2.0-production',
    classList,
    currentClassId: currentClass.id,
    customComments,
    printConfig,
    exportedAt: new Date().toISOString()
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(fullBackup, null, 2));
  const dlAnchor = document.createElement('a');
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", `SaoLuu_So_QL_HS_${currentClass.name}_${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(dlAnchor);
  dlAnchor.click();
  dlAnchor.remove();
  showToast('Đã xuất file sao lưu dữ liệu toàn diện!', 'success');
}

function importDataBackup(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (data.classList && Array.isArray(data.classList)) {
        if (confirm('Khôi phục cơ sở dữ liệu từ file sao lưu này? Mọi dữ liệu hiện tại sẽ được cập nhật.')) {
          classList = data.classList;
          if (data.currentClassId) {
            currentClass = classList.find(c => c.id === data.currentClassId) || classList[0];
          } else {
            currentClass = classList[0];
          }
          if (data.customComments) customComments = data.customComments;
          if (data.printConfig) printConfig = data.printConfig;

          saveAppData();
          renderAllViews();
          showToast('Khôi phục cơ sở dữ liệu thành công!', 'success');
        }
      } else {
        showToast('File sao lưu không hợp lệ!', 'error');
      }
    } catch (err) {
      showToast('Lỗi đọc file sao lưu: ' + err.message, 'error');
    }
  };
  reader.readAsText(file);
}

// ================= TOAST NOTIFICATION SYSTEM =================

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  const colors = {
    success: 'bg-emerald-600 text-white',
    error: 'bg-rose-600 text-white',
    warning: 'bg-amber-500 text-white',
    info: 'bg-slate-800 text-white'
  };

  const icons = {
    success: 'fa-solid fa-circle-check',
    error: 'fa-solid fa-circle-xmark',
    warning: 'fa-solid fa-triangle-exclamation',
    info: 'fa-solid fa-circle-info'
  };

  toast.className = `${colors[type] || colors.info} px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs sm:text-sm font-bold pointer-events-auto transform transition-all duration-300 translate-y-2 opacity-0`;
  toast.innerHTML = `<i class="${icons[type] || icons.info}"></i> <span>${message}</span>`;

  container.appendChild(toast);
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ================= UTILITIES =================

function formatDate(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) return `${parts[2]}/${parts[1]}/${parts[0]}`;
  return dateStr;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}
