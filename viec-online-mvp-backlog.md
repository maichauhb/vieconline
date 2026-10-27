# Việc Online MVP Backlog

## Mục tiêu

Ra mắt một phiên bản đủ dùng trong 6-8 tuần để:

- Cho phép nhà tuyển dụng đăng việc online
- Cho phép ứng viên tạo hồ sơ và ứng tuyển
- Có admin kiểm duyệt để đảm bảo chất lượng
- Đo được tín hiệu thị trường thật

## Phạm vi release v1

### Vai trò người dùng

- Guest
- Candidate
- Hirer
- Admin

## Danh sách màn hình

### Public pages

- Home
- Jobs listing
- Job detail
- Post a job landing
- Pricing
- FAQ
- Terms
- Privacy

### Candidate pages

- Sign up / log in
- Onboarding profile
- Candidate dashboard
- Saved jobs
- Applications
- Account settings

### Hirer pages

- Sign up / log in
- Hirer onboarding
- Create job
- My jobs
- Applicants per job
- Billing placeholder
- Account settings

### Admin pages

- Admin login
- Pending jobs moderation
- Reported content
- User management
- Basic metrics

## User stories ưu tiên cao

### Epic 1: Đăng ký và phân vai

- Là người dùng mới, tôi muốn đăng ký bằng email để vào hệ thống
- Là người dùng, tôi muốn chọn vai trò ứng viên hoặc người giao việc
- Là hệ thống, tôi muốn lưu trạng thái onboarding theo vai trò

### Epic 2: Candidate profile

- Là ứng viên, tôi muốn tạo hồ sơ kỹ năng để tăng cơ hội match
- Là ứng viên, tôi muốn thêm CV hoặc portfolio link
- Là ứng viên, tôi muốn chỉnh sửa hồ sơ bất cứ lúc nào

### Epic 3: Job posting

- Là người giao việc, tôi muốn tạo bài đăng nhanh trong 3-5 phút
- Là người giao việc, tôi muốn thêm kỹ năng, ngân sách và deadline
- Là người giao việc, tôi muốn thấy trạng thái chờ duyệt / đã duyệt / hết hạn

### Epic 4: Discovery

- Là khách truy cập, tôi muốn xem danh sách việc mà chưa cần đăng nhập
- Là ứng viên, tôi muốn lọc theo kỹ năng, mức lương và loại việc
- Là ứng viên, tôi muốn lưu việc để apply sau

### Epic 5: Apply flow

- Là ứng viên, tôi muốn apply 1 chạm bằng profile sẵn có
- Là ứng viên, tôi muốn viết lời nhắn ngắn khi apply
- Là người giao việc, tôi muốn xem danh sách ứng viên cho từng job

### Epic 6: Moderation

- Là admin, tôi muốn duyệt job trước khi public
- Là admin, tôi muốn ẩn job đáng ngờ
- Là người dùng, tôi muốn report job spam

## Acceptance criteria bản đầu

### Auth

- Đăng ký thành công
- Đăng nhập thành công
- Phân vai đúng
- Session hoạt động ổn định

### Job creation

- Tạo job với các trường bắt buộc
- Validate dữ liệu đầu vào
- Job mặc định ở trạng thái `pending`
- Admin duyệt xong thì public

### Apply

- Candidate chỉ apply khi đã hoàn thiện profile tối thiểu
- Một candidate không apply trùng cùng job
- Hirer xem được danh sách ứng viên

### Listing

- Listing load nhanh
- Có phân trang hoặc load-more
- Có filter cơ bản hoạt động đúng
- Job hết hạn không hiện mặc định

## Backlog theo sprint

## Sprint 1

### Mục tiêu

Có nền tảng kỹ thuật và public landing

### Công việc

- Khởi tạo `Next.js` app
- Cài `Tailwind CSS`
- Setup `Prisma` + `PostgreSQL`
- Setup auth
- Tạo design system cơ bản
- Build landing page
- Build header / footer / navigation

### Definition of done

- Deploy preview hoạt động
- Landing responsive
- Auth flow chạy được

## Sprint 2

### Mục tiêu

Hoàn thiện onboarding và profile

### Công việc

- Candidate onboarding
- Hirer onboarding
- Profile form
- Upload CV hoặc link portfolio
- Role-based routing

### Definition of done

- User tạo profile thành công
- Dữ liệu lưu đúng DB
- Chặn các flow chưa đủ điều kiện

## Sprint 3

### Mục tiêu

Có thể đăng job và duyệt job

### Công việc

- Form tạo job
- My jobs dashboard
- Job status
- Admin moderation queue
- Report job

### Definition of done

- Hirer tạo job thành công
- Admin duyệt job thành công
- Job public ra listing sau khi duyệt

## Sprint 4

### Mục tiêu

Có thể tìm việc và apply

### Công việc

- Jobs listing
- Job detail
- Search / filter
- Save job
- Apply flow
- Applicant list cho hirer

### Definition of done

- Candidate tìm thấy job phù hợp
- Candidate apply thành công
- Hirer xem được ứng viên

## Sprint 5

### Mục tiêu

Sẵn sàng soft launch

### Công việc

- Notification email
- SEO metadata
- Analytics
- Seed dữ liệu demo
- Basic error states
- QA responsive

### Definition of done

- Có dashboard số liệu cơ bản
- Có thể mời user thật vào dùng thử

## Non-functional requirements

- TTFB tốt cho public pages
- SEO-friendly cho job pages
- Form validation rõ ràng
- Ảnh / file upload ổn định
- Audit log tối thiểu cho admin actions
- Chống spam cơ bản bằng rate limit

## Cấu trúc route đề xuất

- `/`
- `/jobs`
- `/jobs/[slug]`
- `/login`
- `/signup`
- `/candidate/onboarding`
- `/candidate/profile`
- `/candidate/applications`
- `/hirer/onboarding`
- `/hirer/jobs`
- `/hirer/jobs/new`
- `/hirer/jobs/[id]`
- `/admin/jobs`
- `/pricing`

## Thiết kế dữ liệu tối thiểu

### User

- id
- email
- role
- name
- avatar_url
- created_at

### CandidateProfile

- user_id
- headline
- bio
- skills
- years_experience
- expected_salary_min
- expected_salary_max
- work_preferences
- cv_url
- portfolio_url

### HirerProfile

- user_id
- company_name
- company_size
- website
- description
- verified_status

### Job

- id
- hirer_id
- title
- slug
- description
- employment_type
- work_mode
- budget_min
- budget_max
- currency
- city
- skills
- status
- expires_at
- created_at

### Application

- id
- job_id
- candidate_id
- cover_note
- status
- applied_at

## KPI cho soft launch

- 50 job đầu tiên
- 300 ứng viên đăng ký
- 20% job nhận ít nhất 3 apply
- 30% hirer quay lại đăng job thứ 2

## Ranh giới sản phẩm

Không làm ở v1:

- Chat nội bộ
- Thanh toán subscription hoàn chỉnh
- App mobile
- AI matching phức tạp
- Ví referral
- Phỏng vấn video

## Gợi ý launch checklist

- Gắn analytics
- Cài email domain
- Seed 20 job chất lượng
- Mời 50 candidate đầu tiên
- Chuẩn bị CS script hỗ trợ
- Chuẩn bị quy trình duyệt job mỗi ngày
