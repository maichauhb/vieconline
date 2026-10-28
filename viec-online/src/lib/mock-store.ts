import {
  adminReports,
  candidateApplications,
  candidateSummary,
  hirerApplicants,
  hirerSummary,
  marketplaceJobs,
  type ApplicationItem,
  type CandidateSummary,
  type HirerSummary,
  type MarketplaceJob,
  type ReportItem,
} from "@/lib/marketplace-data";

type MockStore = {
  candidateSummary: CandidateSummary;
  hirerSummary: HirerSummary;
  jobs: MarketplaceJob[];
  candidateApplications: ApplicationItem[];
  hirerApplicants: ApplicationItem[];
  adminReports: ReportItem[];
};

const globalForMockStore = globalThis as typeof globalThis & {
  viecOnlineStore?: MockStore;
};

function createInitialStore(): MockStore {
  return structuredClone({
    candidateSummary,
    hirerSummary,
    jobs: marketplaceJobs,
    candidateApplications,
    hirerApplicants,
    adminReports,
  });
}

export function getMockStore() {
  if (!globalForMockStore.viecOnlineStore) {
    globalForMockStore.viecOnlineStore = createInitialStore();
  }

  return globalForMockStore.viecOnlineStore;
}
