import type {
  ApplicationItem,
  CandidateSummary,
  HirerSummary,
  MarketplaceApplicationStatus,
  MarketplaceJob,
  MarketplaceJobStatus,
  ReportItem,
} from "@/lib/marketplace-data";
import { getDb } from "@/lib/db";
import { getMockStore } from "@/lib/mock-store";

export type JobCardItem = {
  id: string;
  title: string;
  slug: string;
  company: string;
  location: string;
  type: string;
  mode: string;
  salary: string;
  summary: string;
  description: string;
  skills: string[];
  urgent?: boolean;
};

type CandidateDashboardData = {
  candidate: CandidateSummary;
  applications: ApplicationItem[];
};

type HirerDashboardData = {
  hirer: HirerSummary;
  jobs: MarketplaceJob[];
};

type AdminDashboardData = {
  jobs: MarketplaceJob[];
  reports: ReportItem[];
  metrics: { label: string; value: string; hint?: string }[];
};

type SaveCandidateProfileInput = {
  name: string;
  city: string;
  headline: string;
  expectedSalary: string;
  workModes: string[];
  skills: string[];
  portfolioUrl?: string;
};

type CreateJobInput = {
  title: string;
  employmentType: string;
  workMode: string;
  location: string;
  salary: string;
  skills: string[];
  openings: string;
  expiresAt: string;
  description: string;
};

type CreateApplicationInput = {
  jobSlug: string;
  note: string;
  source: "direct" | "referral";
};

function shouldUseMockData() {
  return process.env.USE_MOCK_DATA !== "false" || !process.env.DATABASE_URL;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function todayString() {
  return new Date().toISOString().slice(0, 10);
}

function createId(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

function toJobCard(job: MarketplaceJob): JobCardItem {
  return {
    id: job.id,
    title: job.title,
    slug: job.slug,
    company: job.company,
    location: job.location,
    type: job.employmentType,
    mode: job.workMode,
    salary: job.salary,
    summary: job.summary,
    description: job.description,
    skills: job.skills,
    urgent: job.urgent,
  };
}

function computeAdminMetrics(
  jobs: MarketplaceJob[],
  reports: ReportItem[],
): { label: string; value: string; hint?: string }[] {
  const pendingJobs = jobs.filter((job) => job.status === "pending").length;
  const moderatedJobs = jobs.filter(
    (job) => job.status === "published" || job.status === "rejected",
  );
  const approvedJobs = jobs.filter((job) => job.status === "published").length;
  const approvalRate =
    moderatedJobs.length > 0
      ? `${Math.round((approvedJobs / moderatedJobs.length) * 100)}%`
      : "0%";
  const firstApplyHours =
    jobs.length > 0
      ? `${Math.round(
          jobs.reduce((sum, job) => sum + parseInt(job.timeToFirstApply, 10), 0) /
            jobs.length,
        )}h`
      : "0h";

  return [
    { label: "Job cho duyet", value: pendingJobs.toString(), hint: "review < 24h" },
    { label: "Ti le duyet", value: approvalRate, hint: "giu chat luong niche" },
    {
      label: "Report dang mo",
      value: reports.filter((report) => report.status !== "resolved").length.toString(),
      hint: "uu tien bai co traffic cao",
    },
    { label: "First apply median", value: firstApplyHours, hint: "target < 24h" },
  ];
}

async function getPublicJobsFromMock() {
  const store = getMockStore();
  return store.jobs.filter((job) => job.status === "published");
}

async function getJobBySlugFromMock(slug: string) {
  const store = getMockStore();
  return store.jobs.find((job) => job.slug === slug);
}

async function getCandidateDashboardFromMock(): Promise<CandidateDashboardData> {
  const store = getMockStore();
  return {
    candidate: store.candidateSummary,
    applications: store.candidateApplications.filter(
      (item) => item.candidateId === store.candidateSummary.id,
    ),
  };
}

async function getHirerDashboardFromMock(): Promise<HirerDashboardData> {
  const store = getMockStore();
  return {
    hirer: {
      ...store.hirerSummary,
      activeJobs: store.jobs.filter((job) => job.status === "published").length,
    },
    jobs: store.jobs,
  };
}

async function getAdminDashboardFromMock(): Promise<AdminDashboardData> {
  const store = getMockStore();
  return {
    jobs: store.jobs,
    reports: store.adminReports,
    metrics: computeAdminMetrics(store.jobs, store.adminReports),
  };
}

async function saveCandidateProfileInMock(input: SaveCandidateProfileInput) {
  const store = getMockStore();

  store.candidateSummary = {
    ...store.candidateSummary,
    name: input.name,
    city: input.city,
    headline: input.headline,
    expectedSalary: input.expectedSalary,
    workModes: input.workModes,
    skills: input.skills,
    portfolioUrl: input.portfolioUrl,
    profileScore: Math.min(100, 60 + input.skills.length * 6),
  };

  store.candidateApplications = store.candidateApplications.map((application) =>
    application.candidateId === store.candidateSummary.id
      ? {
          ...application,
          candidateName: store.candidateSummary.name,
          candidateHeadline: store.candidateSummary.headline,
        }
      : application,
  );
}

async function createJobInMock(input: CreateJobInput) {
  const store = getMockStore();
  const slugBase = slugify(input.title);
  const slug = store.jobs.some((job) => job.slug === slugBase)
    ? `${slugBase}-${store.jobs.length + 1}`
    : slugBase;

  const job: MarketplaceJob = {
    id: createId("job"),
    slug,
    title: input.title,
    company: store.hirerSummary.companyName,
    location: input.location,
    employmentType: input.employmentType,
    workMode: input.workMode,
    salary: input.salary,
    summary: input.description.slice(0, 90),
    description: input.description,
    skills: input.skills,
    status: "pending",
    applicants: 0,
    shortlist: 0,
    sourceMix: {
      direct: 0,
      referral: 0,
    },
    referralClicks: 0,
    referralApplies: 0,
    timeToFirstApply: "Chua co",
    createdAt: todayString(),
    expiresAt: input.expiresAt || todayString(),
  };

  store.jobs.unshift(job);
  return job;
}

async function createApplicationInMock(input: CreateApplicationInput) {
  const store = getMockStore();
  const job = store.jobs.find((item) => item.slug === input.jobSlug);

  if (!job) {
    return null;
  }

  const existing = store.candidateApplications.find(
    (application) =>
      application.jobId === job.id &&
      application.candidateId === store.candidateSummary.id,
  );

  if (existing) {
    return existing;
  }

  const application: ApplicationItem = {
    id: createId("app"),
    candidateId: store.candidateSummary.id,
    candidateName: store.candidateSummary.name,
    candidateHeadline: store.candidateSummary.headline,
    jobId: job.id,
    jobTitle: job.title,
    company: job.company,
    status: "pending",
    source: input.source,
    appliedAt: todayString(),
    note: input.note,
  };

  store.candidateApplications.unshift(application);
  store.hirerApplicants.unshift(application);
  job.applicants += 1;

  if (input.source === "referral") {
    job.sourceMix.referral += 1;
    job.referralApplies += 1;
  } else {
    job.sourceMix.direct += 1;
  }

  if (job.timeToFirstApply === "Chua co") {
    job.timeToFirstApply = "Vua xong";
  }

  return application;
}

async function moderateJobInMock(slug: string, status: MarketplaceJobStatus) {
  const store = getMockStore();
  const job = store.jobs.find((item) => item.slug === slug);

  if (!job) {
    return null;
  }

  job.status = status;
  return job;
}

export async function getFeaturedJobCards() {
  if (shouldUseMockData()) {
    const jobs = await getPublicJobsFromMock();
    return jobs.slice(0, 6).map(toJobCard);
  }

  const db = getDb();
  const jobs = await db.job.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { createdAt: "desc" },
    take: 6,
  });

  return jobs.map((job) =>
    toJobCard({
      id: job.id,
      slug: job.slug,
      title: job.title,
      company: "Company",
      location: job.location ?? "Toan quoc",
      employmentType: job.employmentType.replaceAll("_", "-"),
      workMode: job.workMode,
      salary:
        job.budgetMin && job.budgetMax
          ? `${job.budgetMin}-${job.budgetMax} ${job.currency}`
          : `Theo thoa thuan (${job.currency})`,
      summary: job.summary,
      description: job.description,
      skills: job.skills,
      urgent: job.urgent,
      status: "published",
      applicants: 0,
      shortlist: 0,
      sourceMix: { direct: 0, referral: 0 },
      referralClicks: 0,
      referralApplies: 0,
      timeToFirstApply: "Chua co",
      createdAt: todayString(),
      expiresAt: todayString(),
    }),
  );
}

export async function getPublicJobs() {
  if (shouldUseMockData()) {
    return getPublicJobsFromMock();
  }

  const db = getDb();
  const jobs = await db.job.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { createdAt: "desc" },
  });

  return jobs.map((job) => ({
    id: job.id,
    slug: job.slug,
    title: job.title,
    company: "Company",
    location: job.location ?? "Toan quoc",
    employmentType: job.employmentType.replaceAll("_", "-"),
    workMode: job.workMode,
    salary:
      job.budgetMin && job.budgetMax
        ? `${job.budgetMin}-${job.budgetMax} ${job.currency}`
        : `Theo thoa thuan (${job.currency})`,
    summary: job.summary,
    description: job.description,
    skills: job.skills,
    urgent: job.urgent,
    status: "published" as const,
    applicants: 0,
    shortlist: 0,
    sourceMix: { direct: 0, referral: 0 },
    referralClicks: 0,
    referralApplies: 0,
    timeToFirstApply: "Chua co",
    createdAt: todayString(),
    expiresAt: todayString(),
  }));
}

export async function getAllJobSlugs() {
  if (shouldUseMockData()) {
    const store = getMockStore();
    return store.jobs.map((job) => job.slug);
  }

  const db = getDb();
  const jobs = await db.job.findMany({ select: { slug: true } });
  return jobs.map((job) => job.slug);
}

export async function getJobDetailBySlug(slug: string) {
  if (shouldUseMockData()) {
    return getJobBySlugFromMock(slug);
  }

  const db = getDb();
  const job = await db.job.findUnique({ where: { slug } });

  if (!job) {
    return null;
  }

  return {
    id: job.id,
    slug: job.slug,
    title: job.title,
    company: "Company",
    location: job.location ?? "Toan quoc",
    employmentType: job.employmentType.replaceAll("_", "-"),
    workMode: job.workMode,
    salary:
      job.budgetMin && job.budgetMax
        ? `${job.budgetMin}-${job.budgetMax} ${job.currency}`
        : `Theo thoa thuan (${job.currency})`,
    summary: job.summary,
    description: job.description,
    skills: job.skills,
    urgent: job.urgent,
    status: "published" as const,
    applicants: 0,
    shortlist: 0,
    sourceMix: { direct: 0, referral: 0 },
    referralClicks: 0,
    referralApplies: 0,
    timeToFirstApply: "Chua co",
    createdAt: todayString(),
    expiresAt: todayString(),
  };
}

export async function getCandidateDashboard() {
  if (shouldUseMockData()) {
    return getCandidateDashboardFromMock();
  }

  return getCandidateDashboardFromMock();
}

export async function getHirerDashboard() {
  if (shouldUseMockData()) {
    return getHirerDashboardFromMock();
  }

  return getHirerDashboardFromMock();
}

export async function getHirerJobDetail(slug: string) {
  const job = await getJobDetailBySlug(slug);

  if (!job) {
    return null;
  }

  const store = getMockStore();
  const applicants = store.hirerApplicants.filter((item) => item.jobId === job.id);

  return {
    job,
    applicants,
  };
}

export async function getAdminDashboard() {
  if (shouldUseMockData()) {
    return getAdminDashboardFromMock();
  }

  return getAdminDashboardFromMock();
}

export async function saveCandidateProfile(input: SaveCandidateProfileInput) {
  if (shouldUseMockData()) {
    return saveCandidateProfileInMock(input);
  }

  return saveCandidateProfileInMock(input);
}

export async function createJob(input: CreateJobInput) {
  if (shouldUseMockData()) {
    return createJobInMock(input);
  }

  return createJobInMock(input);
}

export async function createApplication(input: CreateApplicationInput) {
  if (shouldUseMockData()) {
    return createApplicationInMock(input);
  }

  return createApplicationInMock(input);
}

export async function moderateJob(
  slug: string,
  status: MarketplaceJobStatus,
) {
  if (shouldUseMockData()) {
    return moderateJobInMock(slug, status);
  }

  return moderateJobInMock(slug, status);
}

export async function updateApplicationStatus(
  applicationId: string,
  status: MarketplaceApplicationStatus,
) {
  const store = getMockStore();
  store.hirerApplicants = store.hirerApplicants.map((application) =>
    application.id === applicationId ? { ...application, status } : application,
  );
  store.candidateApplications = store.candidateApplications.map((application) =>
    application.id === applicationId ? { ...application, status } : application,
  );
}
