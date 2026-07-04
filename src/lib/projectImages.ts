import type { ImageMetadata } from 'astro';

const all = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/projects/**/*.jpg',
  { eager: true }
);

export function imagesFor(slug: string): ImageMetadata[] {
  return Object.entries(all)
    .filter(([path]) => path.includes(`/projects/${slug}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod]) => mod.default);
}

export function coverFor(slug: string): ImageMetadata {
  const imgs = imagesFor(slug);
  if (!imgs.length) throw new Error(`No images found for project: ${slug}`);
  return imgs[0];
}
