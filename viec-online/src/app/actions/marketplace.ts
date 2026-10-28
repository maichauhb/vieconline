"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import {
  createApplication,
  createJob,
  moderateJob,
  saveCandidateProfile,
  updateApplicationStatus,
} from "@/lib/marketplace-repository";

function toStringValue(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function toStringArray(values: FormDataEntryValue[]) {
  return values
    .filter((value): value is string => typeof value === "string")
    .map((value) => value.trim())
    .filter(Boolean);
}

export async function saveCandidateProfileAction(formData: FormData) {
  const workModes = toStringArray(formData.getAll("workModes"));
  const skills = toStringValue(formData.get("skills"))
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  await saveCandidateProfile({
    name: toStringValue(formData.get("name")),
    city: toStringValue(formData.get("city")),
    headline: toStringValue(formData.get("headline")),
    expectedSalary: toStringValue(formData.get("expectedSalary")),
    workModes,
    skills,
    portfolioUrl: toStringValue(formData.get("portfolioUrl")),
  });

  revalidatePath("/candidate");
  revalidatePath("/candidate/onboarding");
  revalidatePath("/candidate/applications");
  redirect("/candidate?updated=1");
}

export async function createJobAction(formData: FormData) {
  const job = await createJob({
    title: toStringValue(formData.get("title")),
    employmentType: toStringValue(formData.get("employmentType")),
    workMode: toStringValue(formData.get("workMode")),
    location: toStringValue(formData.get("location")),
    salary: toStringValue(formData.get("salary")),
    skills: toStringValue(formData.get("skills"))
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
    openings: toStringValue(formData.get("openings")),
    expiresAt: toStringValue(formData.get("expiresAt")),
    description: toStringValue(formData.get("description")),
  });

  revalidatePath("/");
  revalidatePath("/jobs");
  revalidatePath("/hirer");
  revalidatePath("/hirer/jobs");
  revalidatePath("/admin/jobs");
  redirect(`/hirer/jobs/${job.slug}?created=1`);
}

export async function applyToJobAction(formData: FormData) {
  const jobSlug = toStringValue(formData.get("jobSlug"));
  const sourceValue = toStringValue(formData.get("source"));

  await createApplication({
    jobSlug,
    note: toStringValue(formData.get("note")),
    source: sourceValue === "referral" ? "referral" : "direct",
  });

  revalidatePath("/jobs");
  revalidatePath(`/jobs/${jobSlug}`);
  revalidatePath("/candidate");
  revalidatePath("/candidate/applications");
  revalidatePath("/hirer");
  revalidatePath("/hirer/jobs");
  redirect("/candidate/applications?applied=1");
}

export async function moderateJobAction(formData: FormData) {
  const slug = toStringValue(formData.get("slug"));
  const statusValue = toStringValue(formData.get("status"));
  const nextStatus = statusValue === "published" ? "published" : "rejected";

  await moderateJob(slug, nextStatus);

  revalidatePath("/");
  revalidatePath("/jobs");
  revalidatePath("/hirer");
  revalidatePath("/hirer/jobs");
  revalidatePath(`/hirer/jobs/${slug}`);
  revalidatePath("/admin/jobs");
  redirect("/admin/jobs?updated=1");
}

export async function updateApplicationStatusAction(formData: FormData) {
  const applicationId = toStringValue(formData.get("applicationId"));
  const statusValue = toStringValue(formData.get("status"));

  if (
    statusValue === "reviewing" ||
    statusValue === "shortlisted" ||
    statusValue === "interviewing" ||
    statusValue === "hired" ||
    statusValue === "rejected" ||
    statusValue === "pending"
  ) {
    await updateApplicationStatus(applicationId, statusValue);
  }

  revalidatePath("/hirer");
  revalidatePath("/hirer/jobs");
  redirect("/hirer?pipeline=1");
}
