# Viec Online

Webapp startup cho `viec.online`: ket noi nguoi tim viec, nguoi giao viec va
cong dong chia se co hoi viec lam online.

## Muc tieu giai doan nay

- Dung landing page va route nen cho marketplace
- Chuan bi data layer bang `Prisma + PostgreSQL`
- San sang noi tiep `auth`, `job posting`, `apply flow`, `admin moderation`

## Stack hien tai

- `Next.js 16`
- `React 19`
- `Tailwind CSS 4`
- `Prisma 7`
- `PostgreSQL`

## Chay local

1. Cai dependency:

```bash
npm install
```

2. Tao file env:

```bash
cp .env.example .env
```

3. Cap nhat `DATABASE_URL` trong `.env` theo database cua ban.
4. Chon che do du lieu:

```bash
USE_MOCK_DATA="true"
```

- `true`: chay toan bo MVP bang runtime mock store, phu hop de demo nhanh
- `false`: san sang noi sang Prisma/PostgreSQL khi da co DB that
5. Generate Prisma client:

```bash
npm run prisma:generate
```

6. Chay migrate database:

```bash
npm run prisma:migrate -- --name init
```

7. Chay app:

```bash
npm run dev
```

Mo [http://localhost:3000](http://localhost:3000) de xem webapp.

## Prisma schema hien tai

Schema da duoc thiet ke de phu hop MVP marketplace:

- `User`
- `CandidateProfile`
- `HirerProfile`
- `Company`
- `Job`
- `Application`
- `JobReferral`
- `JobReport`

Bo enum hien tai bao gom:

- `UserRole`
- `VerificationStatus`
- `EmploymentType`
- `WorkMode`
- `JobStatus`
- `ApplicationStatus`
- `ApplicationSource`
- `ReportStatus`

## Scripts huu ich

```bash
npm run dev
npm run build
npm run lint
npm run prisma:generate
npm run prisma:migrate -- --name init
npm run prisma:studio
```

## Runtime mock mode

App hien tai da co `server actions` cho:

- cap nhat profile candidate
- tao job moi
- apply vao job
- admin moderation job

Mac dinh, he thong se chay bang `USE_MOCK_DATA="true"` de ban co the demo va
kiem thu luong nghiep vu ngay ca khi chua co Postgres that dang chay.

Khi muon chuyen sang DB that:

1. Dat `USE_MOCK_DATA="false"`
2. Cau hinh `DATABASE_URL`
3. Chay migrate
4. Hoan thien repository Prisma cho cac mutation/read path can thiet

## Huong mo rong tiep theo

1. Them auth va phan vai `candidate/hirer/admin`
2. Noi homepage va jobs listing vao database that
3. Build create job flow cho hirer
4. Build apply flow cho candidate
5. Them admin moderation va referral tracking
