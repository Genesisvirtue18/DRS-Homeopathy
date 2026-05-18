import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Gallery | DRS Homoeopathy - Dr Rekha Saroha | Best Homoeopathy Doctor Delhi",

  description:
    "Explore DRS Homoeopathy clinic gallery, patient experiences, treatment videos and healthcare journey by Dr Rekha Saroha.",

  keywords: [
    "DRS Homoeopathy Gallery",
    "Dr Rekha Saroha Videos",
    "Homeopathy Clinic Gallery",
    "Patient Treatment Videos",
    "Best Homoeopathy Doctor Delhi",
    "Homeopathy Treatment Gallery",
  ],
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}