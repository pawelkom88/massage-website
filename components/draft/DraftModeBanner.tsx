import { draftMode } from "next/headers";
import ExitDraftModeLink from "@/app/ExitDraftModeLink";

export default async function DraftModeBanner() {
  const draft = await draftMode();
  
  if (!draft.isEnabled) {
    return null;
  }

  return (
    <p className="bg-orange-200 py-4 px-[6vw]">
      Draft mode is on! <ExitDraftModeLink className="underline" />
    </p>
  );
}
