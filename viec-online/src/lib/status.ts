import type {
  MarketplaceApplicationStatus,
  MarketplaceJobStatus,
} from "@/lib/marketplace-data";

export function getJobStatusMeta(status: MarketplaceJobStatus) {
  switch (status) {
    case "published":
      return { label: "Dang hien", tone: "emerald" as const };
    case "pending":
      return { label: "Cho duyet", tone: "amber" as const };
    case "paused":
      return { label: "Tam dung", tone: "slate" as const };
    case "draft":
      return { label: "Ban nhap", tone: "slate" as const };
    case "closed":
      return { label: "Da dong", tone: "violet" as const };
    case "rejected":
      return { label: "Bi tu choi", tone: "rose" as const };
  }
}

export function getApplicationStatusMeta(status: MarketplaceApplicationStatus) {
  switch (status) {
    case "pending":
      return { label: "Moi nop", tone: "amber" as const };
    case "reviewing":
      return { label: "Dang review", tone: "sky" as const };
    case "shortlisted":
      return { label: "Shortlist", tone: "emerald" as const };
    case "interviewing":
      return { label: "Phong van", tone: "violet" as const };
    case "hired":
      return { label: "Da nhan", tone: "emerald" as const };
    case "rejected":
      return { label: "Khong phu hop", tone: "rose" as const };
  }
}
