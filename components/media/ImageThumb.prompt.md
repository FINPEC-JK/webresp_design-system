Fixed 4:3 thumbnail for photo grids (drone captures, document attachments) — hover shows a caption overlay, a corner status pill, and a zoom-in affordance. Click opens a `Lightbox` or `ImageViewer`.

```jsx
<ImageThumbGrid>
  {photos.map(p => (
    <ImageThumb key={p.id} src={p.url} caption={p.curral} sub={p.id}
      badge="needs_review" badgeTone="warn"
      onClick={() => openLightbox(p)} />
  ))}
</ImageThumbGrid>
```

Pass `loading` (no `src`) to render the shimmer skeleton while a photo is uploading/processing. `ImageThumbGrid` auto-fills columns at a 150px minimum.
