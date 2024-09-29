"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Sparkles } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { useCreateProject } from "@/features/projects/api/use-create-project";

import { Button } from "@/components/ui/button";

export const Banner = () => {
  const router = useRouter();
  const params = useSearchParams();

  const userName = params.get("name") ?? "Guest";

  const mutation = useCreateProject();

  const onClick = () => {
    mutation.mutate(
      {
        name: "Untitled project",
        json: "",
        width: 900,
        height: 1200,
      },
      {
        onSuccess: ({ data }) => {
          router.push(`/editor/${data.id}`);
        },
      }
    );
  };

  return (
    <div>
      <h1 className="mb-4 font-semibold">Hello {userName}</h1>
      <Button
        disabled={mutation.isPending}
        onClick={onClick}
        variant="secondary"
        className="w-[160px]"
      >
        Start creating
        <ArrowRight className="size-4 ml-2" />
      </Button>
    </div>
  );
};
